import { u as Ln, _ as On, i as Rn, e as Fn, a as Mn, S as Bn, c as ie, g as Dn, b as Fr, h as Vn, d as jn, T as Mr, f as gt, j as qn } from "./storybook-522e9bab.es.js";
import { P as Br } from "./storybook-b8c9afe4.es.js";
import { g as Rt, c as pt, a as Un } from "./storybook-c5d32002.es.js";
import { d as Gn } from "./storybook-398c73a4.es.js";
import { _ as mi, b as Dr } from "./storybook-2aba9bd9.es.js";
import { a as gi } from "./storybook-6c074971.es.js";
import { R as ct, r as $e } from "./storybook-e61d95ab.es.js";
const zn = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "search",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
var Wn = zn;
const $n = /* @__PURE__ */ Rt(Wn);
var yi = {}, vi = {};
(function(e) {
  (function t(r) {
    var i, s, a, c, f, p;
    function y(m) {
      var S = {}, C, k;
      for (C in m)
        m.hasOwnProperty(C) && (k = m[C], typeof k == "object" && k !== null ? S[C] = y(k) : S[C] = k);
      return S;
    }
    function g(m, S) {
      var C, k, D, R;
      for (k = m.length, D = 0; k; )
        C = k >>> 1, R = D + C, S(m[R]) ? k = C : (D = R + 1, k -= C + 1);
      return D;
    }
    i = {
      AssignmentExpression: "AssignmentExpression",
      AssignmentPattern: "AssignmentPattern",
      ArrayExpression: "ArrayExpression",
      ArrayPattern: "ArrayPattern",
      ArrowFunctionExpression: "ArrowFunctionExpression",
      AwaitExpression: "AwaitExpression",
      // CAUTION: It's deferred to ES7.
      BlockStatement: "BlockStatement",
      BinaryExpression: "BinaryExpression",
      BreakStatement: "BreakStatement",
      CallExpression: "CallExpression",
      CatchClause: "CatchClause",
      ChainExpression: "ChainExpression",
      ClassBody: "ClassBody",
      ClassDeclaration: "ClassDeclaration",
      ClassExpression: "ClassExpression",
      ComprehensionBlock: "ComprehensionBlock",
      // CAUTION: It's deferred to ES7.
      ComprehensionExpression: "ComprehensionExpression",
      // CAUTION: It's deferred to ES7.
      ConditionalExpression: "ConditionalExpression",
      ContinueStatement: "ContinueStatement",
      DebuggerStatement: "DebuggerStatement",
      DirectiveStatement: "DirectiveStatement",
      DoWhileStatement: "DoWhileStatement",
      EmptyStatement: "EmptyStatement",
      ExportAllDeclaration: "ExportAllDeclaration",
      ExportDefaultDeclaration: "ExportDefaultDeclaration",
      ExportNamedDeclaration: "ExportNamedDeclaration",
      ExportSpecifier: "ExportSpecifier",
      ExpressionStatement: "ExpressionStatement",
      ForStatement: "ForStatement",
      ForInStatement: "ForInStatement",
      ForOfStatement: "ForOfStatement",
      FunctionDeclaration: "FunctionDeclaration",
      FunctionExpression: "FunctionExpression",
      GeneratorExpression: "GeneratorExpression",
      // CAUTION: It's deferred to ES7.
      Identifier: "Identifier",
      IfStatement: "IfStatement",
      ImportExpression: "ImportExpression",
      ImportDeclaration: "ImportDeclaration",
      ImportDefaultSpecifier: "ImportDefaultSpecifier",
      ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
      ImportSpecifier: "ImportSpecifier",
      Literal: "Literal",
      LabeledStatement: "LabeledStatement",
      LogicalExpression: "LogicalExpression",
      MemberExpression: "MemberExpression",
      MetaProperty: "MetaProperty",
      MethodDefinition: "MethodDefinition",
      ModuleSpecifier: "ModuleSpecifier",
      NewExpression: "NewExpression",
      ObjectExpression: "ObjectExpression",
      ObjectPattern: "ObjectPattern",
      PrivateIdentifier: "PrivateIdentifier",
      Program: "Program",
      Property: "Property",
      PropertyDefinition: "PropertyDefinition",
      RestElement: "RestElement",
      ReturnStatement: "ReturnStatement",
      SequenceExpression: "SequenceExpression",
      SpreadElement: "SpreadElement",
      Super: "Super",
      SwitchStatement: "SwitchStatement",
      SwitchCase: "SwitchCase",
      TaggedTemplateExpression: "TaggedTemplateExpression",
      TemplateElement: "TemplateElement",
      TemplateLiteral: "TemplateLiteral",
      ThisExpression: "ThisExpression",
      ThrowStatement: "ThrowStatement",
      TryStatement: "TryStatement",
      UnaryExpression: "UnaryExpression",
      UpdateExpression: "UpdateExpression",
      VariableDeclaration: "VariableDeclaration",
      VariableDeclarator: "VariableDeclarator",
      WhileStatement: "WhileStatement",
      WithStatement: "WithStatement",
      YieldExpression: "YieldExpression"
    }, a = {
      AssignmentExpression: ["left", "right"],
      AssignmentPattern: ["left", "right"],
      ArrayExpression: ["elements"],
      ArrayPattern: ["elements"],
      ArrowFunctionExpression: ["params", "body"],
      AwaitExpression: ["argument"],
      // CAUTION: It's deferred to ES7.
      BlockStatement: ["body"],
      BinaryExpression: ["left", "right"],
      BreakStatement: ["label"],
      CallExpression: ["callee", "arguments"],
      CatchClause: ["param", "body"],
      ChainExpression: ["expression"],
      ClassBody: ["body"],
      ClassDeclaration: ["id", "superClass", "body"],
      ClassExpression: ["id", "superClass", "body"],
      ComprehensionBlock: ["left", "right"],
      // CAUTION: It's deferred to ES7.
      ComprehensionExpression: ["blocks", "filter", "body"],
      // CAUTION: It's deferred to ES7.
      ConditionalExpression: ["test", "consequent", "alternate"],
      ContinueStatement: ["label"],
      DebuggerStatement: [],
      DirectiveStatement: [],
      DoWhileStatement: ["body", "test"],
      EmptyStatement: [],
      ExportAllDeclaration: ["source"],
      ExportDefaultDeclaration: ["declaration"],
      ExportNamedDeclaration: ["declaration", "specifiers", "source"],
      ExportSpecifier: ["exported", "local"],
      ExpressionStatement: ["expression"],
      ForStatement: ["init", "test", "update", "body"],
      ForInStatement: ["left", "right", "body"],
      ForOfStatement: ["left", "right", "body"],
      FunctionDeclaration: ["id", "params", "body"],
      FunctionExpression: ["id", "params", "body"],
      GeneratorExpression: ["blocks", "filter", "body"],
      // CAUTION: It's deferred to ES7.
      Identifier: [],
      IfStatement: ["test", "consequent", "alternate"],
      ImportExpression: ["source"],
      ImportDeclaration: ["specifiers", "source"],
      ImportDefaultSpecifier: ["local"],
      ImportNamespaceSpecifier: ["local"],
      ImportSpecifier: ["imported", "local"],
      Literal: [],
      LabeledStatement: ["label", "body"],
      LogicalExpression: ["left", "right"],
      MemberExpression: ["object", "property"],
      MetaProperty: ["meta", "property"],
      MethodDefinition: ["key", "value"],
      ModuleSpecifier: [],
      NewExpression: ["callee", "arguments"],
      ObjectExpression: ["properties"],
      ObjectPattern: ["properties"],
      PrivateIdentifier: [],
      Program: ["body"],
      Property: ["key", "value"],
      PropertyDefinition: ["key", "value"],
      RestElement: ["argument"],
      ReturnStatement: ["argument"],
      SequenceExpression: ["expressions"],
      SpreadElement: ["argument"],
      Super: [],
      SwitchStatement: ["discriminant", "cases"],
      SwitchCase: ["test", "consequent"],
      TaggedTemplateExpression: ["tag", "quasi"],
      TemplateElement: [],
      TemplateLiteral: ["quasis", "expressions"],
      ThisExpression: [],
      ThrowStatement: ["argument"],
      TryStatement: ["block", "handler", "finalizer"],
      UnaryExpression: ["argument"],
      UpdateExpression: ["argument"],
      VariableDeclaration: ["declarations"],
      VariableDeclarator: ["id", "init"],
      WhileStatement: ["test", "body"],
      WithStatement: ["object", "body"],
      YieldExpression: ["argument"]
    }, c = {}, f = {}, p = {}, s = {
      Break: c,
      Skip: f,
      Remove: p
    };
    function x(m, S) {
      this.parent = m, this.key = S;
    }
    x.prototype.replace = function(S) {
      this.parent[this.key] = S;
    }, x.prototype.remove = function() {
      return Array.isArray(this.parent) ? (this.parent.splice(this.key, 1), !0) : (this.replace(null), !1);
    };
    function _(m, S, C, k) {
      this.node = m, this.path = S, this.wrap = C, this.ref = k;
    }
    function b() {
    }
    b.prototype.path = function() {
      var S, C, k, D, R, z;
      function U(V, X) {
        if (Array.isArray(X))
          for (k = 0, D = X.length; k < D; ++k)
            V.push(X[k]);
        else
          V.push(X);
      }
      if (!this.__current.path)
        return null;
      for (R = [], S = 2, C = this.__leavelist.length; S < C; ++S)
        z = this.__leavelist[S], U(R, z.path);
      return U(R, this.__current.path), R;
    }, b.prototype.type = function() {
      var m = this.current();
      return m.type || this.__current.wrap;
    }, b.prototype.parents = function() {
      var S, C, k;
      for (k = [], S = 1, C = this.__leavelist.length; S < C; ++S)
        k.push(this.__leavelist[S].node);
      return k;
    }, b.prototype.current = function() {
      return this.__current.node;
    }, b.prototype.__execute = function(S, C) {
      var k, D;
      return D = void 0, k = this.__current, this.__current = C, this.__state = null, S && (D = S.call(this, C.node, this.__leavelist[this.__leavelist.length - 1].node)), this.__current = k, D;
    }, b.prototype.notify = function(S) {
      this.__state = S;
    }, b.prototype.skip = function() {
      this.notify(f);
    }, b.prototype.break = function() {
      this.notify(c);
    }, b.prototype.remove = function() {
      this.notify(p);
    }, b.prototype.__initialize = function(m, S) {
      this.visitor = S, this.root = m, this.__worklist = [], this.__leavelist = [], this.__current = null, this.__state = null, this.__fallback = null, S.fallback === "iteration" ? this.__fallback = Object.keys : typeof S.fallback == "function" && (this.__fallback = S.fallback), this.__keys = a, S.keys && (this.__keys = Object.assign(Object.create(this.__keys), S.keys));
    };
    function A(m) {
      return m == null ? !1 : typeof m == "object" && typeof m.type == "string";
    }
    function v(m, S) {
      return (m === i.ObjectExpression || m === i.ObjectPattern) && S === "properties";
    }
    function E(m, S) {
      for (var C = m.length - 1; C >= 0; --C)
        if (m[C].node === S)
          return !0;
      return !1;
    }
    b.prototype.traverse = function(S, C) {
      var k, D, R, z, U, V, X, se, ue, ne, J, ge;
      for (this.__initialize(S, C), ge = {}, k = this.__worklist, D = this.__leavelist, k.push(new _(S, null, null, null)), D.push(new _(null, null, null, null)); k.length; ) {
        if (R = k.pop(), R === ge) {
          if (R = D.pop(), V = this.__execute(C.leave, R), this.__state === c || V === c)
            return;
          continue;
        }
        if (R.node) {
          if (V = this.__execute(C.enter, R), this.__state === c || V === c)
            return;
          if (k.push(ge), D.push(R), this.__state === f || V === f)
            continue;
          if (z = R.node, U = z.type || R.wrap, ne = this.__keys[U], !ne)
            if (this.__fallback)
              ne = this.__fallback(z);
            else
              throw new Error("Unknown node type " + U + ".");
          for (se = ne.length; (se -= 1) >= 0; )
            if (X = ne[se], J = z[X], !!J) {
              if (Array.isArray(J)) {
                for (ue = J.length; (ue -= 1) >= 0; )
                  if (J[ue] && !E(D, J[ue])) {
                    if (v(U, ne[se]))
                      R = new _(J[ue], [X, ue], "Property", null);
                    else if (A(J[ue]))
                      R = new _(J[ue], [X, ue], null, null);
                    else
                      continue;
                    k.push(R);
                  }
              } else if (A(J)) {
                if (E(D, J))
                  continue;
                k.push(new _(J, X, null, null));
              }
            }
        }
      }
    }, b.prototype.replace = function(S, C) {
      var k, D, R, z, U, V, X, se, ue, ne, J, ge, we;
      function Ve(M) {
        var Ie, Ye, ke, re;
        if (M.ref.remove()) {
          for (Ye = M.ref.key, re = M.ref.parent, Ie = k.length; Ie--; )
            if (ke = k[Ie], ke.ref && ke.ref.parent === re) {
              if (ke.ref.key < Ye)
                break;
              --ke.ref.key;
            }
        }
      }
      for (this.__initialize(S, C), J = {}, k = this.__worklist, D = this.__leavelist, ge = {
        root: S
      }, V = new _(S, null, null, new x(ge, "root")), k.push(V), D.push(V); k.length; ) {
        if (V = k.pop(), V === J) {
          if (V = D.pop(), U = this.__execute(C.leave, V), U !== void 0 && U !== c && U !== f && U !== p && V.ref.replace(U), (this.__state === p || U === p) && Ve(V), this.__state === c || U === c)
            return ge.root;
          continue;
        }
        if (U = this.__execute(C.enter, V), U !== void 0 && U !== c && U !== f && U !== p && (V.ref.replace(U), V.node = U), (this.__state === p || U === p) && (Ve(V), V.node = null), this.__state === c || U === c)
          return ge.root;
        if (R = V.node, !!R && (k.push(J), D.push(V), !(this.__state === f || U === f))) {
          if (z = R.type || V.wrap, ue = this.__keys[z], !ue)
            if (this.__fallback)
              ue = this.__fallback(R);
            else
              throw new Error("Unknown node type " + z + ".");
          for (X = ue.length; (X -= 1) >= 0; )
            if (we = ue[X], ne = R[we], !!ne)
              if (Array.isArray(ne)) {
                for (se = ne.length; (se -= 1) >= 0; )
                  if (ne[se]) {
                    if (v(z, ue[X]))
                      V = new _(ne[se], [we, se], "Property", new x(ne, se));
                    else if (A(ne[se]))
                      V = new _(ne[se], [we, se], null, new x(ne, se));
                    else
                      continue;
                    k.push(V);
                  }
              } else
                A(ne) && k.push(new _(ne, we, null, new x(R, we)));
        }
      }
      return ge.root;
    };
    function N(m, S) {
      var C = new b();
      return C.traverse(m, S);
    }
    function L(m, S) {
      var C = new b();
      return C.replace(m, S);
    }
    function j(m, S) {
      var C;
      return C = g(S, function(D) {
        return D.range[0] > m.range[0];
      }), m.extendedRange = [m.range[0], m.range[1]], C !== S.length && (m.extendedRange[1] = S[C].range[0]), C -= 1, C >= 0 && (m.extendedRange[0] = S[C].range[1]), m;
    }
    function w(m, S, C) {
      var k = [], D, R, z, U;
      if (!m.range)
        throw new Error("attachComments needs range information");
      if (!C.length) {
        if (S.length) {
          for (z = 0, R = S.length; z < R; z += 1)
            D = y(S[z]), D.extendedRange = [0, m.range[0]], k.push(D);
          m.leadingComments = k;
        }
        return m;
      }
      for (z = 0, R = S.length; z < R; z += 1)
        k.push(j(y(S[z]), C));
      return U = 0, N(m, {
        enter: function(V) {
          for (var X; U < k.length && (X = k[U], !(X.extendedRange[1] > V.range[0])); )
            X.extendedRange[1] === V.range[0] ? (V.leadingComments || (V.leadingComments = []), V.leadingComments.push(X), k.splice(U, 1)) : U += 1;
          if (U === k.length)
            return s.Break;
          if (k[U].extendedRange[0] > V.range[1])
            return s.Skip;
        }
      }), U = 0, N(m, {
        leave: function(V) {
          for (var X; U < k.length && (X = k[U], !(V.range[1] < X.extendedRange[0])); )
            V.range[1] === X.extendedRange[0] ? (V.trailingComments || (V.trailingComments = []), V.trailingComments.push(X), k.splice(U, 1)) : U += 1;
          if (U === k.length)
            return s.Break;
          if (k[U].extendedRange[0] > V.range[1])
            return s.Skip;
        }
      }), m;
    }
    return r.Syntax = i, r.traverse = N, r.replace = L, r.attachComments = w, r.VisitorKeys = a, r.VisitorOption = s, r.Controller = b, r.cloneEnvironment = function() {
      return t({});
    }, r;
  })(e);
})(vi);
var ot = {}, Xt = {}, At = {}, wt = {}, Vr;
function Jn() {
  if (Vr)
    return wt;
  Vr = 1;
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return wt.encode = function(t) {
    if (0 <= t && t < e.length)
      return e[t];
    throw new TypeError("Must be between 0 and 63: " + t);
  }, wt.decode = function(t) {
    var r = 65, i = 90, s = 97, a = 122, c = 48, f = 57, p = 43, y = 47, g = 26, x = 52;
    return r <= t && t <= i ? t - r : s <= t && t <= a ? t - s + g : c <= t && t <= f ? t - c + x : t == p ? 62 : t == y ? 63 : -1;
  }, wt;
}
var jr;
function xi() {
  if (jr)
    return At;
  jr = 1;
  var e = Jn(), t = 5, r = 1 << t, i = r - 1, s = r;
  function a(f) {
    return f < 0 ? (-f << 1) + 1 : (f << 1) + 0;
  }
  function c(f) {
    var p = (f & 1) === 1, y = f >> 1;
    return p ? -y : y;
  }
  return At.encode = function(p) {
    var y = "", g, x = a(p);
    do
      g = x & i, x >>>= t, x > 0 && (g |= s), y += e.encode(g);
    while (x > 0);
    return y;
  }, At.decode = function(p, y, g) {
    var x = p.length, _ = 0, b = 0, A, v;
    do {
      if (y >= x)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (v = e.decode(p.charCodeAt(y++)), v === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(y - 1));
      A = !!(v & s), v &= i, _ = _ + (v << b), b += t;
    } while (A);
    g.value = c(_), g.rest = y;
  }, At;
}
var Yt = {}, qr;
function yt() {
  return qr || (qr = 1, function(e) {
    function t(w, m, S) {
      if (m in w)
        return w[m];
      if (arguments.length === 3)
        return S;
      throw new Error('"' + m + '" is a required argument.');
    }
    e.getArg = t;
    var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, i = /^data:.+\,.+$/;
    function s(w) {
      var m = w.match(r);
      return m ? {
        scheme: m[1],
        auth: m[2],
        host: m[3],
        port: m[4],
        path: m[5]
      } : null;
    }
    e.urlParse = s;
    function a(w) {
      var m = "";
      return w.scheme && (m += w.scheme + ":"), m += "//", w.auth && (m += w.auth + "@"), w.host && (m += w.host), w.port && (m += ":" + w.port), w.path && (m += w.path), m;
    }
    e.urlGenerate = a;
    function c(w) {
      var m = w, S = s(w);
      if (S) {
        if (!S.path)
          return w;
        m = S.path;
      }
      for (var C = e.isAbsolute(m), k = m.split(/\/+/), D, R = 0, z = k.length - 1; z >= 0; z--)
        D = k[z], D === "." ? k.splice(z, 1) : D === ".." ? R++ : R > 0 && (D === "" ? (k.splice(z + 1, R), R = 0) : (k.splice(z, 2), R--));
      return m = k.join("/"), m === "" && (m = C ? "/" : "."), S ? (S.path = m, a(S)) : m;
    }
    e.normalize = c;
    function f(w, m) {
      w === "" && (w = "."), m === "" && (m = ".");
      var S = s(m), C = s(w);
      if (C && (w = C.path || "/"), S && !S.scheme)
        return C && (S.scheme = C.scheme), a(S);
      if (S || m.match(i))
        return m;
      if (C && !C.host && !C.path)
        return C.host = m, a(C);
      var k = m.charAt(0) === "/" ? m : c(w.replace(/\/+$/, "") + "/" + m);
      return C ? (C.path = k, a(C)) : k;
    }
    e.join = f, e.isAbsolute = function(w) {
      return w.charAt(0) === "/" || r.test(w);
    };
    function p(w, m) {
      w === "" && (w = "."), w = w.replace(/\/$/, "");
      for (var S = 0; m.indexOf(w + "/") !== 0; ) {
        var C = w.lastIndexOf("/");
        if (C < 0 || (w = w.slice(0, C), w.match(/^([^\/]+:\/)?\/*$/)))
          return m;
        ++S;
      }
      return Array(S + 1).join("../") + m.substr(w.length + 1);
    }
    e.relative = p;
    var y = function() {
      var w = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in w);
    }();
    function g(w) {
      return w;
    }
    function x(w) {
      return b(w) ? "$" + w : w;
    }
    e.toSetString = y ? g : x;
    function _(w) {
      return b(w) ? w.slice(1) : w;
    }
    e.fromSetString = y ? g : _;
    function b(w) {
      if (!w)
        return !1;
      var m = w.length;
      if (m < 9 || w.charCodeAt(m - 1) !== 95 || w.charCodeAt(m - 2) !== 95 || w.charCodeAt(m - 3) !== 111 || w.charCodeAt(m - 4) !== 116 || w.charCodeAt(m - 5) !== 111 || w.charCodeAt(m - 6) !== 114 || w.charCodeAt(m - 7) !== 112 || w.charCodeAt(m - 8) !== 95 || w.charCodeAt(m - 9) !== 95)
        return !1;
      for (var S = m - 10; S >= 0; S--)
        if (w.charCodeAt(S) !== 36)
          return !1;
      return !0;
    }
    function A(w, m, S) {
      var C = E(w.source, m.source);
      return C !== 0 || (C = w.originalLine - m.originalLine, C !== 0) || (C = w.originalColumn - m.originalColumn, C !== 0 || S) || (C = w.generatedColumn - m.generatedColumn, C !== 0) || (C = w.generatedLine - m.generatedLine, C !== 0) ? C : E(w.name, m.name);
    }
    e.compareByOriginalPositions = A;
    function v(w, m, S) {
      var C = w.generatedLine - m.generatedLine;
      return C !== 0 || (C = w.generatedColumn - m.generatedColumn, C !== 0 || S) || (C = E(w.source, m.source), C !== 0) || (C = w.originalLine - m.originalLine, C !== 0) || (C = w.originalColumn - m.originalColumn, C !== 0) ? C : E(w.name, m.name);
    }
    e.compareByGeneratedPositionsDeflated = v;
    function E(w, m) {
      return w === m ? 0 : w === null ? 1 : m === null ? -1 : w > m ? 1 : -1;
    }
    function N(w, m) {
      var S = w.generatedLine - m.generatedLine;
      return S !== 0 || (S = w.generatedColumn - m.generatedColumn, S !== 0) || (S = E(w.source, m.source), S !== 0) || (S = w.originalLine - m.originalLine, S !== 0) || (S = w.originalColumn - m.originalColumn, S !== 0) ? S : E(w.name, m.name);
    }
    e.compareByGeneratedPositionsInflated = N;
    function L(w) {
      return JSON.parse(w.replace(/^\)]}'[^\n]*\n/, ""));
    }
    e.parseSourceMapInput = L;
    function j(w, m, S) {
      if (m = m || "", w && (w[w.length - 1] !== "/" && m[0] !== "/" && (w += "/"), m = w + m), S) {
        var C = s(S);
        if (!C)
          throw new Error("sourceMapURL could not be parsed");
        if (C.path) {
          var k = C.path.lastIndexOf("/");
          k >= 0 && (C.path = C.path.substring(0, k + 1));
        }
        m = f(a(C), m);
      }
      return c(m);
    }
    e.computeSourceURL = j;
  }(Yt)), Yt;
}
var Ht = {}, Ur;
function bi() {
  if (Ur)
    return Ht;
  Ur = 1;
  var e = yt(), t = Object.prototype.hasOwnProperty, r = typeof Map < "u";
  function i() {
    this._array = [], this._set = r ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return i.fromArray = function(a, c) {
    for (var f = new i(), p = 0, y = a.length; p < y; p++)
      f.add(a[p], c);
    return f;
  }, i.prototype.size = function() {
    return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, i.prototype.add = function(a, c) {
    var f = r ? a : e.toSetString(a), p = r ? this.has(a) : t.call(this._set, f), y = this._array.length;
    (!p || c) && this._array.push(a), p || (r ? this._set.set(a, y) : this._set[f] = y);
  }, i.prototype.has = function(a) {
    if (r)
      return this._set.has(a);
    var c = e.toSetString(a);
    return t.call(this._set, c);
  }, i.prototype.indexOf = function(a) {
    if (r) {
      var c = this._set.get(a);
      if (c >= 0)
        return c;
    } else {
      var f = e.toSetString(a);
      if (t.call(this._set, f))
        return this._set[f];
    }
    throw new Error('"' + a + '" is not in the set.');
  }, i.prototype.at = function(a) {
    if (a >= 0 && a < this._array.length)
      return this._array[a];
    throw new Error("No element indexed by " + a);
  }, i.prototype.toArray = function() {
    return this._array.slice();
  }, Ht.ArraySet = i, Ht;
}
var Qt = {}, Gr;
function Xn() {
  if (Gr)
    return Qt;
  Gr = 1;
  var e = yt();
  function t(i, s) {
    var a = i.generatedLine, c = s.generatedLine, f = i.generatedColumn, p = s.generatedColumn;
    return c > a || c == a && p >= f || e.compareByGeneratedPositionsInflated(i, s) <= 0;
  }
  function r() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return r.prototype.unsortedForEach = function(s, a) {
    this._array.forEach(s, a);
  }, r.prototype.add = function(s) {
    t(this._last, s) ? (this._last = s, this._array.push(s)) : (this._sorted = !1, this._array.push(s));
  }, r.prototype.toArray = function() {
    return this._sorted || (this._array.sort(e.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, Qt.MappingList = r, Qt;
}
var zr;
function Si() {
  if (zr)
    return Xt;
  zr = 1;
  var e = xi(), t = yt(), r = bi().ArraySet, i = Xn().MappingList;
  function s(a) {
    a || (a = {}), this._file = t.getArg(a, "file", null), this._sourceRoot = t.getArg(a, "sourceRoot", null), this._skipValidation = t.getArg(a, "skipValidation", !1), this._sources = new r(), this._names = new r(), this._mappings = new i(), this._sourcesContents = null;
  }
  return s.prototype._version = 3, s.fromSourceMap = function(c) {
    var f = c.sourceRoot, p = new s({
      file: c.file,
      sourceRoot: f
    });
    return c.eachMapping(function(y) {
      var g = {
        generated: {
          line: y.generatedLine,
          column: y.generatedColumn
        }
      };
      y.source != null && (g.source = y.source, f != null && (g.source = t.relative(f, g.source)), g.original = {
        line: y.originalLine,
        column: y.originalColumn
      }, y.name != null && (g.name = y.name)), p.addMapping(g);
    }), c.sources.forEach(function(y) {
      var g = y;
      f !== null && (g = t.relative(f, y)), p._sources.has(g) || p._sources.add(g);
      var x = c.sourceContentFor(y);
      x != null && p.setSourceContent(y, x);
    }), p;
  }, s.prototype.addMapping = function(c) {
    var f = t.getArg(c, "generated"), p = t.getArg(c, "original", null), y = t.getArg(c, "source", null), g = t.getArg(c, "name", null);
    this._skipValidation || this._validateMapping(f, p, y, g), y != null && (y = String(y), this._sources.has(y) || this._sources.add(y)), g != null && (g = String(g), this._names.has(g) || this._names.add(g)), this._mappings.add({
      generatedLine: f.line,
      generatedColumn: f.column,
      originalLine: p != null && p.line,
      originalColumn: p != null && p.column,
      source: y,
      name: g
    });
  }, s.prototype.setSourceContent = function(c, f) {
    var p = c;
    this._sourceRoot != null && (p = t.relative(this._sourceRoot, p)), f != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[t.toSetString(p)] = f) : this._sourcesContents && (delete this._sourcesContents[t.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, s.prototype.applySourceMap = function(c, f, p) {
    var y = f;
    if (f == null) {
      if (c.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      y = c.file;
    }
    var g = this._sourceRoot;
    g != null && (y = t.relative(g, y));
    var x = new r(), _ = new r();
    this._mappings.unsortedForEach(function(b) {
      if (b.source === y && b.originalLine != null) {
        var A = c.originalPositionFor({
          line: b.originalLine,
          column: b.originalColumn
        });
        A.source != null && (b.source = A.source, p != null && (b.source = t.join(p, b.source)), g != null && (b.source = t.relative(g, b.source)), b.originalLine = A.line, b.originalColumn = A.column, A.name != null && (b.name = A.name));
      }
      var v = b.source;
      v != null && !x.has(v) && x.add(v);
      var E = b.name;
      E != null && !_.has(E) && _.add(E);
    }, this), this._sources = x, this._names = _, c.sources.forEach(function(b) {
      var A = c.sourceContentFor(b);
      A != null && (p != null && (b = t.join(p, b)), g != null && (b = t.relative(g, b)), this.setSourceContent(b, A));
    }, this);
  }, s.prototype._validateMapping = function(c, f, p, y) {
    if (f && typeof f.line != "number" && typeof f.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(c && "line" in c && "column" in c && c.line > 0 && c.column >= 0 && !f && !p && !y)) {
      if (c && "line" in c && "column" in c && f && "line" in f && "column" in f && c.line > 0 && c.column >= 0 && f.line > 0 && f.column >= 0 && p)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: c,
        source: p,
        original: f,
        name: y
      }));
    }
  }, s.prototype._serializeMappings = function() {
    for (var c = 0, f = 1, p = 0, y = 0, g = 0, x = 0, _ = "", b, A, v, E, N = this._mappings.toArray(), L = 0, j = N.length; L < j; L++) {
      if (A = N[L], b = "", A.generatedLine !== f)
        for (c = 0; A.generatedLine !== f; )
          b += ";", f++;
      else if (L > 0) {
        if (!t.compareByGeneratedPositionsInflated(A, N[L - 1]))
          continue;
        b += ",";
      }
      b += e.encode(A.generatedColumn - c), c = A.generatedColumn, A.source != null && (E = this._sources.indexOf(A.source), b += e.encode(E - x), x = E, b += e.encode(A.originalLine - 1 - y), y = A.originalLine - 1, b += e.encode(A.originalColumn - p), p = A.originalColumn, A.name != null && (v = this._names.indexOf(A.name), b += e.encode(v - g), g = v)), _ += b;
    }
    return _;
  }, s.prototype._generateSourcesContent = function(c, f) {
    return c.map(function(p) {
      if (!this._sourcesContents)
        return null;
      f != null && (p = t.relative(f, p));
      var y = t.toSetString(p);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, y) ? this._sourcesContents[y] : null;
    }, this);
  }, s.prototype.toJSON = function() {
    var c = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (c.file = this._file), this._sourceRoot != null && (c.sourceRoot = this._sourceRoot), this._sourcesContents && (c.sourcesContent = this._generateSourcesContent(c.sources, c.sourceRoot)), c;
  }, s.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, Xt.SourceMapGenerator = s, Xt;
}
var ut = {}, Kt = {}, Wr;
function Yn() {
  return Wr || (Wr = 1, function(e) {
    e.GREATEST_LOWER_BOUND = 1, e.LEAST_UPPER_BOUND = 2;
    function t(r, i, s, a, c, f) {
      var p = Math.floor((i - r) / 2) + r, y = c(s, a[p], !0);
      return y === 0 ? p : y > 0 ? i - p > 1 ? t(p, i, s, a, c, f) : f == e.LEAST_UPPER_BOUND ? i < a.length ? i : -1 : p : p - r > 1 ? t(r, p, s, a, c, f) : f == e.LEAST_UPPER_BOUND ? p : r < 0 ? -1 : r;
    }
    e.search = function(i, s, a, c) {
      if (s.length === 0)
        return -1;
      var f = t(
        -1,
        s.length,
        i,
        s,
        a,
        c || e.GREATEST_LOWER_BOUND
      );
      if (f < 0)
        return -1;
      for (; f - 1 >= 0 && a(s[f], s[f - 1], !0) === 0; )
        --f;
      return f;
    };
  }(Kt)), Kt;
}
var Zt = {}, $r;
function Hn() {
  if ($r)
    return Zt;
  $r = 1;
  function e(i, s, a) {
    var c = i[s];
    i[s] = i[a], i[a] = c;
  }
  function t(i, s) {
    return Math.round(i + Math.random() * (s - i));
  }
  function r(i, s, a, c) {
    if (a < c) {
      var f = t(a, c), p = a - 1;
      e(i, f, c);
      for (var y = i[c], g = a; g < c; g++)
        s(i[g], y) <= 0 && (p += 1, e(i, p, g));
      e(i, p + 1, g);
      var x = p + 1;
      r(i, s, a, x - 1), r(i, s, x + 1, c);
    }
  }
  return Zt.quickSort = function(i, s) {
    r(i, s, 0, i.length - 1);
  }, Zt;
}
var Jr;
function Qn() {
  if (Jr)
    return ut;
  Jr = 1;
  var e = yt(), t = Yn(), r = bi().ArraySet, i = xi(), s = Hn().quickSort;
  function a(y, g) {
    var x = y;
    return typeof y == "string" && (x = e.parseSourceMapInput(y)), x.sections != null ? new p(x, g) : new c(x, g);
  }
  a.fromSourceMap = function(y, g) {
    return c.fromSourceMap(y, g);
  }, a.prototype._version = 3, a.prototype.__generatedMappings = null, Object.defineProperty(a.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), a.prototype.__originalMappings = null, Object.defineProperty(a.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), a.prototype._charIsMappingSeparator = function(g, x) {
    var _ = g.charAt(x);
    return _ === ";" || _ === ",";
  }, a.prototype._parseMappings = function(g, x) {
    throw new Error("Subclasses must implement _parseMappings");
  }, a.GENERATED_ORDER = 1, a.ORIGINAL_ORDER = 2, a.GREATEST_LOWER_BOUND = 1, a.LEAST_UPPER_BOUND = 2, a.prototype.eachMapping = function(g, x, _) {
    var b = x || null, A = _ || a.GENERATED_ORDER, v;
    switch (A) {
      case a.GENERATED_ORDER:
        v = this._generatedMappings;
        break;
      case a.ORIGINAL_ORDER:
        v = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var E = this.sourceRoot;
    v.map(function(N) {
      var L = N.source === null ? null : this._sources.at(N.source);
      return L = e.computeSourceURL(E, L, this._sourceMapURL), {
        source: L,
        generatedLine: N.generatedLine,
        generatedColumn: N.generatedColumn,
        originalLine: N.originalLine,
        originalColumn: N.originalColumn,
        name: N.name === null ? null : this._names.at(N.name)
      };
    }, this).forEach(g, b);
  }, a.prototype.allGeneratedPositionsFor = function(g) {
    var x = e.getArg(g, "line"), _ = {
      source: e.getArg(g, "source"),
      originalLine: x,
      originalColumn: e.getArg(g, "column", 0)
    };
    if (_.source = this._findSourceIndex(_.source), _.source < 0)
      return [];
    var b = [], A = this._findMapping(
      _,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      t.LEAST_UPPER_BOUND
    );
    if (A >= 0) {
      var v = this._originalMappings[A];
      if (g.column === void 0)
        for (var E = v.originalLine; v && v.originalLine === E; )
          b.push({
            line: e.getArg(v, "generatedLine", null),
            column: e.getArg(v, "generatedColumn", null),
            lastColumn: e.getArg(v, "lastGeneratedColumn", null)
          }), v = this._originalMappings[++A];
      else
        for (var N = v.originalColumn; v && v.originalLine === x && v.originalColumn == N; )
          b.push({
            line: e.getArg(v, "generatedLine", null),
            column: e.getArg(v, "generatedColumn", null),
            lastColumn: e.getArg(v, "lastGeneratedColumn", null)
          }), v = this._originalMappings[++A];
    }
    return b;
  }, ut.SourceMapConsumer = a;
  function c(y, g) {
    var x = y;
    typeof y == "string" && (x = e.parseSourceMapInput(y));
    var _ = e.getArg(x, "version"), b = e.getArg(x, "sources"), A = e.getArg(x, "names", []), v = e.getArg(x, "sourceRoot", null), E = e.getArg(x, "sourcesContent", null), N = e.getArg(x, "mappings"), L = e.getArg(x, "file", null);
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
    v && (v = e.normalize(v)), b = b.map(String).map(e.normalize).map(function(j) {
      return v && e.isAbsolute(v) && e.isAbsolute(j) ? e.relative(v, j) : j;
    }), this._names = r.fromArray(A.map(String), !0), this._sources = r.fromArray(b, !0), this._absoluteSources = this._sources.toArray().map(function(j) {
      return e.computeSourceURL(v, j, g);
    }), this.sourceRoot = v, this.sourcesContent = E, this._mappings = N, this._sourceMapURL = g, this.file = L;
  }
  c.prototype = Object.create(a.prototype), c.prototype.consumer = a, c.prototype._findSourceIndex = function(y) {
    var g = y;
    if (this.sourceRoot != null && (g = e.relative(this.sourceRoot, g)), this._sources.has(g))
      return this._sources.indexOf(g);
    var x;
    for (x = 0; x < this._absoluteSources.length; ++x)
      if (this._absoluteSources[x] == y)
        return x;
    return -1;
  }, c.fromSourceMap = function(g, x) {
    var _ = Object.create(c.prototype), b = _._names = r.fromArray(g._names.toArray(), !0), A = _._sources = r.fromArray(g._sources.toArray(), !0);
    _.sourceRoot = g._sourceRoot, _.sourcesContent = g._generateSourcesContent(
      _._sources.toArray(),
      _.sourceRoot
    ), _.file = g._file, _._sourceMapURL = x, _._absoluteSources = _._sources.toArray().map(function(S) {
      return e.computeSourceURL(_.sourceRoot, S, x);
    });
    for (var v = g._mappings.toArray().slice(), E = _.__generatedMappings = [], N = _.__originalMappings = [], L = 0, j = v.length; L < j; L++) {
      var w = v[L], m = new f();
      m.generatedLine = w.generatedLine, m.generatedColumn = w.generatedColumn, w.source && (m.source = A.indexOf(w.source), m.originalLine = w.originalLine, m.originalColumn = w.originalColumn, w.name && (m.name = b.indexOf(w.name)), N.push(m)), E.push(m);
    }
    return s(_.__originalMappings, e.compareByOriginalPositions), _;
  }, c.prototype._version = 3, Object.defineProperty(c.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function f() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  c.prototype._parseMappings = function(g, x) {
    for (var _ = 1, b = 0, A = 0, v = 0, E = 0, N = 0, L = g.length, j = 0, w = {}, m = {}, S = [], C = [], k, D, R, z, U; j < L; )
      if (g.charAt(j) === ";")
        _++, j++, b = 0;
      else if (g.charAt(j) === ",")
        j++;
      else {
        for (k = new f(), k.generatedLine = _, z = j; z < L && !this._charIsMappingSeparator(g, z); z++)
          ;
        if (D = g.slice(j, z), R = w[D], R)
          j += D.length;
        else {
          for (R = []; j < z; )
            i.decode(g, j, m), U = m.value, j = m.rest, R.push(U);
          if (R.length === 2)
            throw new Error("Found a source, but no line and column");
          if (R.length === 3)
            throw new Error("Found a source and line, but no column");
          w[D] = R;
        }
        k.generatedColumn = b + R[0], b = k.generatedColumn, R.length > 1 && (k.source = E + R[1], E += R[1], k.originalLine = A + R[2], A = k.originalLine, k.originalLine += 1, k.originalColumn = v + R[3], v = k.originalColumn, R.length > 4 && (k.name = N + R[4], N += R[4])), C.push(k), typeof k.originalLine == "number" && S.push(k);
      }
    s(C, e.compareByGeneratedPositionsDeflated), this.__generatedMappings = C, s(S, e.compareByOriginalPositions), this.__originalMappings = S;
  }, c.prototype._findMapping = function(g, x, _, b, A, v) {
    if (g[_] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + g[_]);
    if (g[b] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + g[b]);
    return t.search(g, x, A, v);
  }, c.prototype.computeColumnSpans = function() {
    for (var g = 0; g < this._generatedMappings.length; ++g) {
      var x = this._generatedMappings[g];
      if (g + 1 < this._generatedMappings.length) {
        var _ = this._generatedMappings[g + 1];
        if (x.generatedLine === _.generatedLine) {
          x.lastGeneratedColumn = _.generatedColumn - 1;
          continue;
        }
      }
      x.lastGeneratedColumn = 1 / 0;
    }
  }, c.prototype.originalPositionFor = function(g) {
    var x = {
      generatedLine: e.getArg(g, "line"),
      generatedColumn: e.getArg(g, "column")
    }, _ = this._findMapping(
      x,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      e.compareByGeneratedPositionsDeflated,
      e.getArg(g, "bias", a.GREATEST_LOWER_BOUND)
    );
    if (_ >= 0) {
      var b = this._generatedMappings[_];
      if (b.generatedLine === x.generatedLine) {
        var A = e.getArg(b, "source", null);
        A !== null && (A = this._sources.at(A), A = e.computeSourceURL(this.sourceRoot, A, this._sourceMapURL));
        var v = e.getArg(b, "name", null);
        return v !== null && (v = this._names.at(v)), {
          source: A,
          line: e.getArg(b, "originalLine", null),
          column: e.getArg(b, "originalColumn", null),
          name: v
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, c.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(g) {
      return g == null;
    }) : !1;
  }, c.prototype.sourceContentFor = function(g, x) {
    if (!this.sourcesContent)
      return null;
    var _ = this._findSourceIndex(g);
    if (_ >= 0)
      return this.sourcesContent[_];
    var b = g;
    this.sourceRoot != null && (b = e.relative(this.sourceRoot, b));
    var A;
    if (this.sourceRoot != null && (A = e.urlParse(this.sourceRoot))) {
      var v = b.replace(/^file:\/\//, "");
      if (A.scheme == "file" && this._sources.has(v))
        return this.sourcesContent[this._sources.indexOf(v)];
      if ((!A.path || A.path == "/") && this._sources.has("/" + b))
        return this.sourcesContent[this._sources.indexOf("/" + b)];
    }
    if (x)
      return null;
    throw new Error('"' + b + '" is not in the SourceMap.');
  }, c.prototype.generatedPositionFor = function(g) {
    var x = e.getArg(g, "source");
    if (x = this._findSourceIndex(x), x < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var _ = {
      source: x,
      originalLine: e.getArg(g, "line"),
      originalColumn: e.getArg(g, "column")
    }, b = this._findMapping(
      _,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      e.getArg(g, "bias", a.GREATEST_LOWER_BOUND)
    );
    if (b >= 0) {
      var A = this._originalMappings[b];
      if (A.source === _.source)
        return {
          line: e.getArg(A, "generatedLine", null),
          column: e.getArg(A, "generatedColumn", null),
          lastColumn: e.getArg(A, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, ut.BasicSourceMapConsumer = c;
  function p(y, g) {
    var x = y;
    typeof y == "string" && (x = e.parseSourceMapInput(y));
    var _ = e.getArg(x, "version"), b = e.getArg(x, "sections");
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
    this._sources = new r(), this._names = new r();
    var A = {
      line: -1,
      column: 0
    };
    this._sections = b.map(function(v) {
      if (v.url)
        throw new Error("Support for url field in sections not implemented.");
      var E = e.getArg(v, "offset"), N = e.getArg(E, "line"), L = e.getArg(E, "column");
      if (N < A.line || N === A.line && L < A.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return A = E, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: N + 1,
          generatedColumn: L + 1
        },
        consumer: new a(e.getArg(v, "map"), g)
      };
    });
  }
  return p.prototype = Object.create(a.prototype), p.prototype.constructor = a, p.prototype._version = 3, Object.defineProperty(p.prototype, "sources", {
    get: function() {
      for (var y = [], g = 0; g < this._sections.length; g++)
        for (var x = 0; x < this._sections[g].consumer.sources.length; x++)
          y.push(this._sections[g].consumer.sources[x]);
      return y;
    }
  }), p.prototype.originalPositionFor = function(g) {
    var x = {
      generatedLine: e.getArg(g, "line"),
      generatedColumn: e.getArg(g, "column")
    }, _ = t.search(
      x,
      this._sections,
      function(A, v) {
        var E = A.generatedLine - v.generatedOffset.generatedLine;
        return E || A.generatedColumn - v.generatedOffset.generatedColumn;
      }
    ), b = this._sections[_];
    return b ? b.consumer.originalPositionFor({
      line: x.generatedLine - (b.generatedOffset.generatedLine - 1),
      column: x.generatedColumn - (b.generatedOffset.generatedLine === x.generatedLine ? b.generatedOffset.generatedColumn - 1 : 0),
      bias: g.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, p.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(g) {
      return g.consumer.hasContentsOfAllSources();
    });
  }, p.prototype.sourceContentFor = function(g, x) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var b = this._sections[_], A = b.consumer.sourceContentFor(g, !0);
      if (A)
        return A;
    }
    if (x)
      return null;
    throw new Error('"' + g + '" is not in the SourceMap.');
  }, p.prototype.generatedPositionFor = function(g) {
    for (var x = 0; x < this._sections.length; x++) {
      var _ = this._sections[x];
      if (_.consumer._findSourceIndex(e.getArg(g, "source")) !== -1) {
        var b = _.consumer.generatedPositionFor(g);
        if (b) {
          var A = {
            line: b.line + (_.generatedOffset.generatedLine - 1),
            column: b.column + (_.generatedOffset.generatedLine === b.line ? _.generatedOffset.generatedColumn - 1 : 0)
          };
          return A;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, p.prototype._parseMappings = function(g, x) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var _ = 0; _ < this._sections.length; _++)
      for (var b = this._sections[_], A = b.consumer._generatedMappings, v = 0; v < A.length; v++) {
        var E = A[v], N = b.consumer._sources.at(E.source);
        N = e.computeSourceURL(b.consumer.sourceRoot, N, this._sourceMapURL), this._sources.add(N), N = this._sources.indexOf(N);
        var L = null;
        E.name && (L = b.consumer._names.at(E.name), this._names.add(L), L = this._names.indexOf(L));
        var j = {
          source: N,
          generatedLine: E.generatedLine + (b.generatedOffset.generatedLine - 1),
          generatedColumn: E.generatedColumn + (b.generatedOffset.generatedLine === E.generatedLine ? b.generatedOffset.generatedColumn - 1 : 0),
          originalLine: E.originalLine,
          originalColumn: E.originalColumn,
          name: L
        };
        this.__generatedMappings.push(j), typeof j.originalLine == "number" && this.__originalMappings.push(j);
      }
    s(this.__generatedMappings, e.compareByGeneratedPositionsDeflated), s(this.__originalMappings, e.compareByOriginalPositions);
  }, ut.IndexedSourceMapConsumer = p, ut;
}
var er = {}, Xr;
function Kn() {
  if (Xr)
    return er;
  Xr = 1;
  var e = Si().SourceMapGenerator, t = yt(), r = /(\r?\n)/, i = 10, s = "$$$isSourceNode$$$";
  function a(c, f, p, y, g) {
    this.children = [], this.sourceContents = {}, this.line = c ?? null, this.column = f ?? null, this.source = p ?? null, this.name = g ?? null, this[s] = !0, y != null && this.add(y);
  }
  return a.fromStringWithSourceMap = function(f, p, y) {
    var g = new a(), x = f.split(r), _ = 0, b = function() {
      var L = w(), j = w() || "";
      return L + j;
      function w() {
        return _ < x.length ? x[_++] : void 0;
      }
    }, A = 1, v = 0, E = null;
    return p.eachMapping(function(L) {
      if (E !== null)
        if (A < L.generatedLine)
          N(E, b()), A++, v = 0;
        else {
          var j = x[_] || "", w = j.substr(0, L.generatedColumn - v);
          x[_] = j.substr(L.generatedColumn - v), v = L.generatedColumn, N(E, w), E = L;
          return;
        }
      for (; A < L.generatedLine; )
        g.add(b()), A++;
      if (v < L.generatedColumn) {
        var j = x[_] || "";
        g.add(j.substr(0, L.generatedColumn)), x[_] = j.substr(L.generatedColumn), v = L.generatedColumn;
      }
      E = L;
    }, this), _ < x.length && (E && N(E, b()), g.add(x.splice(_).join(""))), p.sources.forEach(function(L) {
      var j = p.sourceContentFor(L);
      j != null && (y != null && (L = t.join(y, L)), g.setSourceContent(L, j));
    }), g;
    function N(L, j) {
      if (L === null || L.source === void 0)
        g.add(j);
      else {
        var w = y ? t.join(y, L.source) : L.source;
        g.add(new a(
          L.originalLine,
          L.originalColumn,
          w,
          j,
          L.name
        ));
      }
    }
  }, a.prototype.add = function(f) {
    if (Array.isArray(f))
      f.forEach(function(p) {
        this.add(p);
      }, this);
    else if (f[s] || typeof f == "string")
      f && this.children.push(f);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + f
      );
    return this;
  }, a.prototype.prepend = function(f) {
    if (Array.isArray(f))
      for (var p = f.length - 1; p >= 0; p--)
        this.prepend(f[p]);
    else if (f[s] || typeof f == "string")
      this.children.unshift(f);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + f
      );
    return this;
  }, a.prototype.walk = function(f) {
    for (var p, y = 0, g = this.children.length; y < g; y++)
      p = this.children[y], p[s] ? p.walk(f) : p !== "" && f(p, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, a.prototype.join = function(f) {
    var p, y, g = this.children.length;
    if (g > 0) {
      for (p = [], y = 0; y < g - 1; y++)
        p.push(this.children[y]), p.push(f);
      p.push(this.children[y]), this.children = p;
    }
    return this;
  }, a.prototype.replaceRight = function(f, p) {
    var y = this.children[this.children.length - 1];
    return y[s] ? y.replaceRight(f, p) : typeof y == "string" ? this.children[this.children.length - 1] = y.replace(f, p) : this.children.push("".replace(f, p)), this;
  }, a.prototype.setSourceContent = function(f, p) {
    this.sourceContents[t.toSetString(f)] = p;
  }, a.prototype.walkSourceContents = function(f) {
    for (var p = 0, y = this.children.length; p < y; p++)
      this.children[p][s] && this.children[p].walkSourceContents(f);
    for (var g = Object.keys(this.sourceContents), p = 0, y = g.length; p < y; p++)
      f(t.fromSetString(g[p]), this.sourceContents[g[p]]);
  }, a.prototype.toString = function() {
    var f = "";
    return this.walk(function(p) {
      f += p;
    }), f;
  }, a.prototype.toStringWithSourceMap = function(f) {
    var p = {
      code: "",
      line: 1,
      column: 0
    }, y = new e(f), g = !1, x = null, _ = null, b = null, A = null;
    return this.walk(function(v, E) {
      p.code += v, E.source !== null && E.line !== null && E.column !== null ? ((x !== E.source || _ !== E.line || b !== E.column || A !== E.name) && y.addMapping({
        source: E.source,
        original: {
          line: E.line,
          column: E.column
        },
        generated: {
          line: p.line,
          column: p.column
        },
        name: E.name
      }), x = E.source, _ = E.line, b = E.column, A = E.name, g = !0) : g && (y.addMapping({
        generated: {
          line: p.line,
          column: p.column
        }
      }), x = null, g = !1);
      for (var N = 0, L = v.length; N < L; N++)
        v.charCodeAt(N) === i ? (p.line++, p.column = 0, N + 1 === L ? (x = null, g = !1) : g && y.addMapping({
          source: E.source,
          original: {
            line: E.line,
            column: E.column
          },
          generated: {
            line: p.line,
            column: p.column
          },
          name: E.name
        })) : p.column++;
    }), this.walkSourceContents(function(v, E) {
      y.setSourceContent(v, E);
    }), { code: p.code, map: y };
  }, er.SourceNode = a, er;
}
var Yr;
function Zn() {
  return Yr || (Yr = 1, ot.SourceMapGenerator = Si().SourceMapGenerator, ot.SourceMapConsumer = Qn().SourceMapConsumer, ot.SourceNode = Kn().SourceNode), ot;
}
const es = "escodegen", ts = "ECMAScript code generator", rs = "http://github.com/estools/escodegen", is = "escodegen.js", ns = {
  esgenerate: "./bin/esgenerate.js",
  escodegen: "./bin/escodegen.js"
}, ss = [
  "LICENSE.BSD",
  "README.md",
  "bin",
  "escodegen.js",
  "package.json"
], as = "2.1.0", os = {
  node: ">=6.0"
}, us = [
  {
    name: "Yusuke Suzuki",
    email: "utatane.tea@gmail.com",
    web: "http://github.com/Constellation"
  }
], ls = {
  type: "git",
  url: "http://github.com/estools/escodegen.git"
}, cs = {
  estraverse: "^5.2.0",
  esutils: "^2.0.2",
  esprima: "^4.0.1"
}, hs = {
  "source-map": "~0.6.1"
}, fs = {
  acorn: "^8.0.4",
  bluebird: "^3.4.7",
  "bower-registry-client": "^1.0.0",
  chai: "^4.2.0",
  "chai-exclude": "^2.0.2",
  "commonjs-everywhere": "^0.9.7",
  gulp: "^4.0.2",
  "gulp-eslint": "^6.0.0",
  "gulp-mocha": "^7.0.2",
  minimist: "^1.2.5",
  optionator: "^0.9.1",
  semver: "^7.3.4"
}, ps = "BSD-2-Clause", ds = {
  test: "gulp travis",
  "unit-test": "gulp test",
  lint: "gulp lint",
  release: "node tools/release.js",
  "build-min": "./node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",
  build: "./node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js"
}, ms = {
  name: es,
  description: ts,
  homepage: rs,
  main: is,
  bin: ns,
  files: ss,
  version: as,
  engines: os,
  maintainers: us,
  repository: ls,
  dependencies: cs,
  optionalDependencies: hs,
  devDependencies: fs,
  license: ps,
  scripts: ds
};
(function(e) {
  (function() {
    var t, r, i, s, a, c, f, p, y, g, x, _, b, A, v, E, N, L, j, w, m, S, C, k, D, R;
    a = vi, c = Ln, t = a.Syntax;
    function z(n) {
      return ce.Expression.hasOwnProperty(n.type);
    }
    function U(n) {
      return ce.Statement.hasOwnProperty(n.type);
    }
    r = {
      Sequence: 0,
      Yield: 1,
      Assignment: 1,
      Conditional: 2,
      ArrowFunction: 2,
      Coalesce: 3,
      LogicalOR: 4,
      LogicalAND: 5,
      BitwiseOR: 6,
      BitwiseXOR: 7,
      BitwiseAND: 8,
      Equality: 9,
      Relational: 10,
      BitwiseSHIFT: 11,
      Additive: 12,
      Multiplicative: 13,
      Exponentiation: 14,
      Await: 15,
      Unary: 15,
      Postfix: 16,
      OptionalChaining: 17,
      Call: 18,
      New: 19,
      TaggedTemplate: 20,
      Member: 21,
      Primary: 22
    }, i = {
      "??": r.Coalesce,
      "||": r.LogicalOR,
      "&&": r.LogicalAND,
      "|": r.BitwiseOR,
      "^": r.BitwiseXOR,
      "&": r.BitwiseAND,
      "==": r.Equality,
      "!=": r.Equality,
      "===": r.Equality,
      "!==": r.Equality,
      is: r.Equality,
      isnt: r.Equality,
      "<": r.Relational,
      ">": r.Relational,
      "<=": r.Relational,
      ">=": r.Relational,
      in: r.Relational,
      instanceof: r.Relational,
      "<<": r.BitwiseSHIFT,
      ">>": r.BitwiseSHIFT,
      ">>>": r.BitwiseSHIFT,
      "+": r.Additive,
      "-": r.Additive,
      "*": r.Multiplicative,
      "%": r.Multiplicative,
      "/": r.Multiplicative,
      "**": r.Exponentiation
    };
    var V = 1, X = 2, se = 4, ue = 8, ne = 16, J = 32, ge = 64, we = X | se, Ve = V | X, M = V | X | se, Ie = V, Ye = se, ke = V | se, re = V, Se = V | J, He = 0, Wt = V | ne, $t = V | ue;
    function _t() {
      return {
        indent: null,
        base: null,
        parse: null,
        comment: !1,
        format: {
          indent: {
            style: "    ",
            base: 0,
            adjustMultilineComment: !1
          },
          newline: `
`,
          space: " ",
          json: !1,
          renumber: !1,
          hexadecimal: !1,
          quotes: "single",
          escapeless: !1,
          compact: !1,
          parentheses: !0,
          semicolons: !0,
          safeConcatenation: !1,
          preserveBlankLines: !1
        },
        moz: {
          comprehensionExpressionStartsWithAssignment: !1,
          starlessGenerator: !1
        },
        sourceMap: null,
        sourceMapRoot: null,
        sourceMapWithCode: !1,
        directive: !1,
        raw: !0,
        verbatim: null,
        sourceCode: null
      };
    }
    function Ne(n, u) {
      var o = "";
      for (u |= 0; u > 0; u >>>= 1, n += n)
        u & 1 && (o += n);
      return o;
    }
    function Jt(n) {
      return /[\r\n]/g.test(n);
    }
    function F(n) {
      var u = n.length;
      return u && c.code.isLineTerminator(n.charCodeAt(u - 1));
    }
    function Qe(n, u) {
      var o;
      for (o in u)
        u.hasOwnProperty(o) && (n[o] = u[o]);
      return n;
    }
    function Le(n, u) {
      var o, l;
      function d(T) {
        return typeof T == "object" && T instanceof Object && !(T instanceof RegExp);
      }
      for (o in u)
        u.hasOwnProperty(o) && (l = u[o], d(l) ? d(n[o]) ? Le(n[o], l) : n[o] = Le({}, l) : n[o] = l);
      return n;
    }
    function Et(n) {
      var u, o, l, d, T;
      if (n !== n)
        throw new Error("Numeric literal whose value is NaN");
      if (n < 0 || n === 0 && 1 / n < 0)
        throw new Error("Numeric literal whose value is negative");
      if (n === 1 / 0)
        return y ? "null" : g ? "1e400" : "1e+400";
      if (u = "" + n, !g || u.length < 3)
        return u;
      for (o = u.indexOf("."), !y && u.charCodeAt(0) === 48 && o === 1 && (o = 0, u = u.slice(1)), l = u, u = u.replace("e+", "e"), d = 0, (T = l.indexOf("e")) > 0 && (d = +l.slice(T + 1), l = l.slice(0, T)), o >= 0 && (d -= l.length - o - 1, l = +(l.slice(0, o) + l.slice(o + 1)) + ""), T = 0; l.charCodeAt(l.length + T - 1) === 48; )
        --T;
      return T !== 0 && (d -= T, l = l.slice(0, T)), d !== 0 && (l += "e" + d), (l.length < u.length || x && n > 1e12 && Math.floor(n) === n && (l = "0x" + n.toString(16)).length < u.length) && +l === n && (u = l), u;
    }
    function Tr(n, u) {
      return (n & -2) === 8232 ? (u ? "u" : "\\u") + (n === 8232 ? "2028" : "2029") : n === 10 || n === 13 ? (u ? "" : "\\") + (n === 10 ? "n" : "r") : String.fromCharCode(n);
    }
    function _n(n) {
      var u, o, l, d, T, P, I, B;
      if (o = n.toString(), n.source) {
        if (u = o.match(/\/([^/]*)$/), !u)
          return o;
        for (l = u[1], o = "", I = !1, B = !1, d = 0, T = n.source.length; d < T; ++d)
          P = n.source.charCodeAt(d), B ? (o += Tr(P, B), B = !1) : (I ? P === 93 && (I = !1) : P === 47 ? o += "\\" : P === 91 && (I = !0), o += Tr(P, B), B = P === 92);
        return "/" + o + "/" + l;
      }
      return o;
    }
    function En(n, u) {
      var o;
      return n === 8 ? "\\b" : n === 12 ? "\\f" : n === 9 ? "\\t" : (o = n.toString(16).toUpperCase(), y || n > 255 ? "\\u" + "0000".slice(o.length) + o : n === 0 && !c.code.isDecimalDigit(u) ? "\\0" : n === 11 ? "\\x0B" : "\\x" + "00".slice(o.length) + o);
    }
    function Cn(n) {
      if (n === 92)
        return "\\\\";
      if (n === 10)
        return "\\n";
      if (n === 13)
        return "\\r";
      if (n === 8232)
        return "\\u2028";
      if (n === 8233)
        return "\\u2029";
      throw new Error("Incorrectly classified character");
    }
    function An(n) {
      var u, o, l, d;
      for (d = _ === "double" ? '"' : "'", u = 0, o = n.length; u < o; ++u)
        if (l = n.charCodeAt(u), l === 39) {
          d = '"';
          break;
        } else if (l === 34) {
          d = "'";
          break;
        } else
          l === 92 && ++u;
      return d + n + d;
    }
    function wn(n) {
      var u = "", o, l, d, T = 0, P = 0, I, B;
      for (o = 0, l = n.length; o < l; ++o) {
        if (d = n.charCodeAt(o), d === 39)
          ++T;
        else if (d === 34)
          ++P;
        else if (d === 47 && y)
          u += "\\";
        else if (c.code.isLineTerminator(d) || d === 92) {
          u += Cn(d);
          continue;
        } else if (!c.code.isIdentifierPartES5(d) && (y && d < 32 || !y && !b && (d < 32 || d > 126))) {
          u += En(d, n.charCodeAt(o + 1));
          continue;
        }
        u += String.fromCharCode(d);
      }
      if (I = !(_ === "double" || _ === "auto" && P < T), B = I ? "'" : '"', !(I ? T : P))
        return B + u + B;
      for (n = u, u = B, o = 0, l = n.length; o < l; ++o)
        d = n.charCodeAt(o), (d === 39 && I || d === 34 && !I) && (u += "\\"), u += String.fromCharCode(d);
      return u + B;
    }
    function Pr(n) {
      var u, o, l, d = "";
      for (u = 0, o = n.length; u < o; ++u)
        l = n[u], d += Array.isArray(l) ? Pr(l) : l;
      return d;
    }
    function Z(n, u) {
      if (!S)
        return Array.isArray(n) ? Pr(n) : n;
      if (u == null) {
        if (n instanceof s)
          return n;
        u = {};
      }
      return u.loc == null ? new s(null, null, S, n, u.name || null) : new s(u.loc.start.line, u.loc.start.column, S === !0 ? u.loc.source || null : S, n, u.name || null);
    }
    function pe() {
      return v || " ";
    }
    function G(n, u) {
      var o, l, d, T;
      return o = Z(n).toString(), o.length === 0 ? [u] : (l = Z(u).toString(), l.length === 0 ? [n] : (d = o.charCodeAt(o.length - 1), T = l.charCodeAt(0), (d === 43 || d === 45) && d === T || c.code.isIdentifierPartES5(d) && c.code.isIdentifierPartES5(T) || d === 47 && T === 105 ? [n, pe(), u] : c.code.isWhiteSpace(d) || c.code.isLineTerminator(d) || c.code.isWhiteSpace(T) || c.code.isLineTerminator(T) ? [n, u] : [n, v, u]));
    }
    function de(n) {
      return [f, n];
    }
    function le(n) {
      var u;
      u = f, f += p, n(f), f = u;
    }
    function kn(n) {
      var u;
      for (u = n.length - 1; u >= 0 && !c.code.isLineTerminator(n.charCodeAt(u)); --u)
        ;
      return n.length - 1 - u;
    }
    function Tn(n, u) {
      var o, l, d, T, P, I, B, H;
      for (o = n.split(/\r\n|[\r\n]/), I = Number.MAX_VALUE, l = 1, d = o.length; l < d; ++l) {
        for (T = o[l], P = 0; P < T.length && c.code.isWhiteSpace(T.charCodeAt(P)); )
          ++P;
        I > P && (I = P);
      }
      for (typeof u < "u" ? (B = f, o[1][I] === "*" && (u += " "), f = u) : (I & 1 && --I, B = f), l = 1, d = o.length; l < d; ++l)
        H = Z(de(o[l].slice(I))), o[l] = S ? H.join("") : H;
      return f = B, o.join(`
`);
    }
    function Oe(n, u) {
      if (n.type === "Line") {
        if (F(n.value))
          return "//" + n.value;
        var o = "//" + n.value;
        return k || (o += `
`), o;
      }
      return w.format.indent.adjustMultilineComment && /[\n\r]/.test(n.value) ? Tn("/*" + n.value + "*/", u) : "/*" + n.value + "*/";
    }
    function Ir(n, u) {
      var o, l, d, T, P, I, B, H, fe, Ge, Ze, Or, Rr, Te;
      if (n.leadingComments && n.leadingComments.length > 0) {
        if (T = u, k) {
          for (d = n.leadingComments[0], u = [], H = d.extendedRange, fe = d.range, Ze = C.substring(H[0], fe[0]), Te = (Ze.match(/\n/g) || []).length, Te > 0 ? (u.push(Ne(`
`, Te)), u.push(de(Oe(d)))) : (u.push(Ze), u.push(Oe(d))), Ge = fe, o = 1, l = n.leadingComments.length; o < l; o++)
            d = n.leadingComments[o], fe = d.range, Or = C.substring(Ge[1], fe[0]), Te = (Or.match(/\n/g) || []).length, u.push(Ne(`
`, Te)), u.push(de(Oe(d))), Ge = fe;
          Rr = C.substring(fe[1], H[1]), Te = (Rr.match(/\n/g) || []).length, u.push(Ne(`
`, Te));
        } else
          for (d = n.leadingComments[0], u = [], L && n.type === t.Program && n.body.length === 0 && u.push(`
`), u.push(Oe(d)), F(Z(u).toString()) || u.push(`
`), o = 1, l = n.leadingComments.length; o < l; ++o)
            d = n.leadingComments[o], B = [Oe(d)], F(Z(B).toString()) || B.push(`
`), u.push(de(B));
        u.push(de(T));
      }
      if (n.trailingComments)
        if (k)
          d = n.trailingComments[0], H = d.extendedRange, fe = d.range, Ze = C.substring(H[0], fe[0]), Te = (Ze.match(/\n/g) || []).length, Te > 0 ? (u.push(Ne(`
`, Te)), u.push(de(Oe(d)))) : (u.push(Ze), u.push(Oe(d)));
        else
          for (P = !F(Z(u).toString()), I = Ne(" ", kn(Z([f, u, p]).toString())), o = 0, l = n.trailingComments.length; o < l; ++o)
            d = n.trailingComments[o], P ? (o === 0 ? u = [u, p] : u = [u, I], u.push(Oe(d, I))) : u = [u, de(Oe(d))], o !== l - 1 && !F(Z(u).toString()) && (u = [u, `
`]);
      return u;
    }
    function Ke(n, u, o) {
      var l, d = 0;
      for (l = n; l < u; l++)
        C[l] === `
` && d++;
      for (l = 1; l < d; l++)
        o.push(A);
    }
    function he(n, u, o) {
      return u < o ? ["(", n, ")"] : n;
    }
    function Nr(n) {
      var u, o, l;
      for (l = n.split(/\r\n|\n/), u = 1, o = l.length; u < o; u++)
        l[u] = A + f + l[u];
      return l;
    }
    function Pn(n, u) {
      var o, l, d;
      return o = n[w.verbatim], typeof o == "string" ? l = he(Nr(o), r.Sequence, u) : (l = Nr(o.content), d = o.precedence != null ? o.precedence : r.Sequence, l = he(l, d, u)), Z(l, n);
    }
    function ce() {
    }
    ce.prototype.maybeBlock = function(n, u) {
      var o, l, d = this;
      return l = !w.comment || !n.leadingComments, n.type === t.BlockStatement && l ? [v, this.generateStatement(n, u)] : n.type === t.EmptyStatement && l ? ";" : (le(function() {
        o = [
          A,
          de(d.generateStatement(n, u))
        ];
      }), o);
    }, ce.prototype.maybeBlockSuffix = function(n, u) {
      var o = F(Z(u).toString());
      return n.type === t.BlockStatement && (!w.comment || !n.leadingComments) && !o ? [u, v] : o ? [u, f] : [u, A, f];
    };
    function ve(n) {
      return Z(n.name, n);
    }
    function at(n, u) {
      return n.async ? "async" + (u ? pe() : v) : "";
    }
    function Ct(n) {
      var u = n.generator && !w.moz.starlessGenerator;
      return u ? "*" + v : "";
    }
    function Lr(n) {
      var u = n.value, o = "";
      return u.async && (o += at(u, !n.computed)), u.generator && (o += Ct(u) ? "*" : ""), o;
    }
    ce.prototype.generatePattern = function(n, u, o) {
      return n.type === t.Identifier ? ve(n) : this.generateExpression(n, u, o);
    }, ce.prototype.generateFunctionParams = function(n) {
      var u, o, l, d;
      if (d = !1, n.type === t.ArrowFunctionExpression && !n.rest && (!n.defaults || n.defaults.length === 0) && n.params.length === 1 && n.params[0].type === t.Identifier)
        l = [at(n, !0), ve(n.params[0])];
      else {
        for (l = n.type === t.ArrowFunctionExpression ? [at(n, !1)] : [], l.push("("), n.defaults && (d = !0), u = 0, o = n.params.length; u < o; ++u)
          d && n.defaults[u] ? l.push(this.generateAssignment(n.params[u], n.defaults[u], "=", r.Assignment, M)) : l.push(this.generatePattern(n.params[u], r.Assignment, M)), u + 1 < o && l.push("," + v);
        n.rest && (n.params.length && l.push("," + v), l.push("..."), l.push(ve(n.rest))), l.push(")");
      }
      return l;
    }, ce.prototype.generateFunctionBody = function(n) {
      var u, o;
      return u = this.generateFunctionParams(n), n.type === t.ArrowFunctionExpression && (u.push(v), u.push("=>")), n.expression ? (u.push(v), o = this.generateExpression(n.body, r.Assignment, M), o.toString().charAt(0) === "{" && (o = ["(", o, ")"]), u.push(o)) : u.push(this.maybeBlock(n.body, $t)), u;
    }, ce.prototype.generateIterationForStatement = function(n, u, o) {
      var l = ["for" + (u.await ? pe() + "await" : "") + v + "("], d = this;
      return le(function() {
        u.left.type === t.VariableDeclaration ? le(function() {
          l.push(u.left.kind + pe()), l.push(d.generateStatement(u.left.declarations[0], He));
        }) : l.push(d.generateExpression(u.left, r.Call, M)), l = G(l, n), l = [G(
          l,
          d.generateExpression(u.right, r.Assignment, M)
        ), ")"];
      }), l.push(this.maybeBlock(u.body, o)), l;
    }, ce.prototype.generatePropertyKey = function(n, u) {
      var o = [];
      return u && o.push("["), o.push(this.generateExpression(n, r.Assignment, M)), u && o.push("]"), o;
    }, ce.prototype.generateAssignment = function(n, u, o, l, d) {
      return r.Assignment < l && (d |= V), he(
        [
          this.generateExpression(n, r.Call, d),
          v + o + v,
          this.generateExpression(u, r.Assignment, d)
        ],
        r.Assignment,
        l
      );
    }, ce.prototype.semicolon = function(n) {
      return !N && n & J ? "" : ";";
    }, ce.Statement = {
      BlockStatement: function(n, u) {
        var o, l, d = ["{", A], T = this;
        return le(function() {
          n.body.length === 0 && k && (o = n.range, o[1] - o[0] > 2 && (l = C.substring(o[0] + 1, o[1] - 1), l[0] === `
` && (d = ["{"]), d.push(l)));
          var P, I, B, H;
          for (H = re, u & ue && (H |= ne), P = 0, I = n.body.length; P < I; ++P)
            k && (P === 0 && (n.body[0].leadingComments && (o = n.body[0].leadingComments[0].extendedRange, l = C.substring(o[0], o[1]), l[0] === `
` && (d = ["{"])), n.body[0].leadingComments || Ke(n.range[0], n.body[0].range[0], d)), P > 0 && !n.body[P - 1].trailingComments && !n.body[P].leadingComments && Ke(n.body[P - 1].range[1], n.body[P].range[0], d)), P === I - 1 && (H |= J), n.body[P].leadingComments && k ? B = T.generateStatement(n.body[P], H) : B = de(T.generateStatement(n.body[P], H)), d.push(B), F(Z(B).toString()) || k && P < I - 1 && n.body[P + 1].leadingComments || d.push(A), k && P === I - 1 && (n.body[P].trailingComments || Ke(n.body[P].range[1], n.range[1], d));
        }), d.push(de("}")), d;
      },
      BreakStatement: function(n, u) {
        return n.label ? "break " + n.label.name + this.semicolon(u) : "break" + this.semicolon(u);
      },
      ContinueStatement: function(n, u) {
        return n.label ? "continue " + n.label.name + this.semicolon(u) : "continue" + this.semicolon(u);
      },
      ClassBody: function(n, u) {
        var o = ["{", A], l = this;
        return le(function(d) {
          var T, P;
          for (T = 0, P = n.body.length; T < P; ++T)
            o.push(d), o.push(l.generateExpression(n.body[T], r.Sequence, M)), T + 1 < P && o.push(A);
        }), F(Z(o).toString()) || o.push(A), o.push(f), o.push("}"), o;
      },
      ClassDeclaration: function(n, u) {
        var o, l;
        return o = ["class"], n.id && (o = G(o, this.generateExpression(n.id, r.Sequence, M))), n.superClass && (l = G("extends", this.generateExpression(n.superClass, r.Unary, M)), o = G(o, l)), o.push(v), o.push(this.generateStatement(n.body, Se)), o;
      },
      DirectiveStatement: function(n, u) {
        return w.raw && n.raw ? n.raw + this.semicolon(u) : An(n.directive) + this.semicolon(u);
      },
      DoWhileStatement: function(n, u) {
        var o = G("do", this.maybeBlock(n.body, re));
        return o = this.maybeBlockSuffix(n.body, o), G(o, [
          "while" + v + "(",
          this.generateExpression(n.test, r.Sequence, M),
          ")" + this.semicolon(u)
        ]);
      },
      CatchClause: function(n, u) {
        var o, l = this;
        return le(function() {
          var d;
          n.param ? (o = [
            "catch" + v + "(",
            l.generateExpression(n.param, r.Sequence, M),
            ")"
          ], n.guard && (d = l.generateExpression(n.guard, r.Sequence, M), o.splice(2, 0, " if ", d))) : o = ["catch"];
        }), o.push(this.maybeBlock(n.body, re)), o;
      },
      DebuggerStatement: function(n, u) {
        return "debugger" + this.semicolon(u);
      },
      EmptyStatement: function(n, u) {
        return ";";
      },
      ExportDefaultDeclaration: function(n, u) {
        var o = ["export"], l;
        return l = u & J ? Se : re, o = G(o, "default"), U(n.declaration) ? o = G(o, this.generateStatement(n.declaration, l)) : o = G(o, this.generateExpression(n.declaration, r.Assignment, M) + this.semicolon(u)), o;
      },
      ExportNamedDeclaration: function(n, u) {
        var o = ["export"], l, d = this;
        return l = u & J ? Se : re, n.declaration ? G(o, this.generateStatement(n.declaration, l)) : (n.specifiers && (n.specifiers.length === 0 ? o = G(o, "{" + v + "}") : n.specifiers[0].type === t.ExportBatchSpecifier ? o = G(o, this.generateExpression(n.specifiers[0], r.Sequence, M)) : (o = G(o, "{"), le(function(T) {
          var P, I;
          for (o.push(A), P = 0, I = n.specifiers.length; P < I; ++P)
            o.push(T), o.push(d.generateExpression(n.specifiers[P], r.Sequence, M)), P + 1 < I && o.push("," + A);
        }), F(Z(o).toString()) || o.push(A), o.push(f + "}")), n.source ? o = G(o, [
          "from" + v,
          // ModuleSpecifier
          this.generateExpression(n.source, r.Sequence, M),
          this.semicolon(u)
        ]) : o.push(this.semicolon(u))), o);
      },
      ExportAllDeclaration: function(n, u) {
        return [
          "export" + v,
          "*" + v,
          "from" + v,
          // ModuleSpecifier
          this.generateExpression(n.source, r.Sequence, M),
          this.semicolon(u)
        ];
      },
      ExpressionStatement: function(n, u) {
        var o, l;
        function d(I) {
          var B;
          return I.slice(0, 5) !== "class" ? !1 : (B = I.charCodeAt(5), B === 123 || c.code.isWhiteSpace(B) || c.code.isLineTerminator(B));
        }
        function T(I) {
          var B;
          return I.slice(0, 8) !== "function" ? !1 : (B = I.charCodeAt(8), B === 40 || c.code.isWhiteSpace(B) || B === 42 || c.code.isLineTerminator(B));
        }
        function P(I) {
          var B, H, fe;
          if (I.slice(0, 5) !== "async" || !c.code.isWhiteSpace(I.charCodeAt(5)))
            return !1;
          for (H = 6, fe = I.length; H < fe && c.code.isWhiteSpace(I.charCodeAt(H)); ++H)
            ;
          return H === fe || I.slice(H, H + 8) !== "function" ? !1 : (B = I.charCodeAt(H + 8), B === 40 || c.code.isWhiteSpace(B) || B === 42 || c.code.isLineTerminator(B));
        }
        return o = [this.generateExpression(n.expression, r.Sequence, M)], l = Z(o).toString(), l.charCodeAt(0) === 123 || // ObjectExpression
        d(l) || T(l) || P(l) || j && u & ne && n.expression.type === t.Literal && typeof n.expression.value == "string" ? o = ["(", o, ")" + this.semicolon(u)] : o.push(this.semicolon(u)), o;
      },
      ImportDeclaration: function(n, u) {
        var o, l, d = this;
        return n.specifiers.length === 0 ? [
          "import",
          v,
          // ModuleSpecifier
          this.generateExpression(n.source, r.Sequence, M),
          this.semicolon(u)
        ] : (o = [
          "import"
        ], l = 0, n.specifiers[l].type === t.ImportDefaultSpecifier && (o = G(o, [
          this.generateExpression(n.specifiers[l], r.Sequence, M)
        ]), ++l), n.specifiers[l] && (l !== 0 && o.push(","), n.specifiers[l].type === t.ImportNamespaceSpecifier ? o = G(o, [
          v,
          this.generateExpression(n.specifiers[l], r.Sequence, M)
        ]) : (o.push(v + "{"), n.specifiers.length - l === 1 ? (o.push(v), o.push(this.generateExpression(n.specifiers[l], r.Sequence, M)), o.push(v + "}" + v)) : (le(function(T) {
          var P, I;
          for (o.push(A), P = l, I = n.specifiers.length; P < I; ++P)
            o.push(T), o.push(d.generateExpression(n.specifiers[P], r.Sequence, M)), P + 1 < I && o.push("," + A);
        }), F(Z(o).toString()) || o.push(A), o.push(f + "}" + v)))), o = G(o, [
          "from" + v,
          // ModuleSpecifier
          this.generateExpression(n.source, r.Sequence, M),
          this.semicolon(u)
        ]), o);
      },
      VariableDeclarator: function(n, u) {
        var o = u & V ? M : we;
        return n.init ? [
          this.generateExpression(n.id, r.Assignment, o),
          v,
          "=",
          v,
          this.generateExpression(n.init, r.Assignment, o)
        ] : this.generatePattern(n.id, r.Assignment, o);
      },
      VariableDeclaration: function(n, u) {
        var o, l, d, T, P, I = this;
        o = [n.kind], P = u & V ? re : He;
        function B() {
          for (T = n.declarations[0], w.comment && T.leadingComments ? (o.push(`
`), o.push(de(I.generateStatement(T, P)))) : (o.push(pe()), o.push(I.generateStatement(T, P))), l = 1, d = n.declarations.length; l < d; ++l)
            T = n.declarations[l], w.comment && T.leadingComments ? (o.push("," + A), o.push(de(I.generateStatement(T, P)))) : (o.push("," + v), o.push(I.generateStatement(T, P)));
        }
        return n.declarations.length > 1 ? le(B) : B(), o.push(this.semicolon(u)), o;
      },
      ThrowStatement: function(n, u) {
        return [G(
          "throw",
          this.generateExpression(n.argument, r.Sequence, M)
        ), this.semicolon(u)];
      },
      TryStatement: function(n, u) {
        var o, l, d, T;
        if (o = ["try", this.maybeBlock(n.block, re)], o = this.maybeBlockSuffix(n.block, o), n.handlers)
          for (l = 0, d = n.handlers.length; l < d; ++l)
            o = G(o, this.generateStatement(n.handlers[l], re)), (n.finalizer || l + 1 !== d) && (o = this.maybeBlockSuffix(n.handlers[l].body, o));
        else {
          for (T = n.guardedHandlers || [], l = 0, d = T.length; l < d; ++l)
            o = G(o, this.generateStatement(T[l], re)), (n.finalizer || l + 1 !== d) && (o = this.maybeBlockSuffix(T[l].body, o));
          if (n.handler)
            if (Array.isArray(n.handler))
              for (l = 0, d = n.handler.length; l < d; ++l)
                o = G(o, this.generateStatement(n.handler[l], re)), (n.finalizer || l + 1 !== d) && (o = this.maybeBlockSuffix(n.handler[l].body, o));
            else
              o = G(o, this.generateStatement(n.handler, re)), n.finalizer && (o = this.maybeBlockSuffix(n.handler.body, o));
        }
        return n.finalizer && (o = G(o, ["finally", this.maybeBlock(n.finalizer, re)])), o;
      },
      SwitchStatement: function(n, u) {
        var o, l, d, T, P, I = this;
        if (le(function() {
          o = [
            "switch" + v + "(",
            I.generateExpression(n.discriminant, r.Sequence, M),
            ")" + v + "{" + A
          ];
        }), n.cases)
          for (P = re, d = 0, T = n.cases.length; d < T; ++d)
            d === T - 1 && (P |= J), l = de(this.generateStatement(n.cases[d], P)), o.push(l), F(Z(l).toString()) || o.push(A);
        return o.push(de("}")), o;
      },
      SwitchCase: function(n, u) {
        var o, l, d, T, P, I = this;
        return le(function() {
          for (n.test ? o = [
            G("case", I.generateExpression(n.test, r.Sequence, M)),
            ":"
          ] : o = ["default:"], d = 0, T = n.consequent.length, T && n.consequent[0].type === t.BlockStatement && (l = I.maybeBlock(n.consequent[0], re), o.push(l), d = 1), d !== T && !F(Z(o).toString()) && o.push(A), P = re; d < T; ++d)
            d === T - 1 && u & J && (P |= J), l = de(I.generateStatement(n.consequent[d], P)), o.push(l), d + 1 !== T && !F(Z(l).toString()) && o.push(A);
        }), o;
      },
      IfStatement: function(n, u) {
        var o, l, d, T = this;
        return le(function() {
          o = [
            "if" + v + "(",
            T.generateExpression(n.test, r.Sequence, M),
            ")"
          ];
        }), d = u & J, l = re, d && (l |= J), n.alternate ? (o.push(this.maybeBlock(n.consequent, re)), o = this.maybeBlockSuffix(n.consequent, o), n.alternate.type === t.IfStatement ? o = G(o, ["else ", this.generateStatement(n.alternate, l)]) : o = G(o, G("else", this.maybeBlock(n.alternate, l)))) : o.push(this.maybeBlock(n.consequent, l)), o;
      },
      ForStatement: function(n, u) {
        var o, l = this;
        return le(function() {
          o = ["for" + v + "("], n.init ? n.init.type === t.VariableDeclaration ? o.push(l.generateStatement(n.init, He)) : (o.push(l.generateExpression(n.init, r.Sequence, we)), o.push(";")) : o.push(";"), n.test && (o.push(v), o.push(l.generateExpression(n.test, r.Sequence, M))), o.push(";"), n.update && (o.push(v), o.push(l.generateExpression(n.update, r.Sequence, M))), o.push(")");
        }), o.push(this.maybeBlock(n.body, u & J ? Se : re)), o;
      },
      ForInStatement: function(n, u) {
        return this.generateIterationForStatement("in", n, u & J ? Se : re);
      },
      ForOfStatement: function(n, u) {
        return this.generateIterationForStatement("of", n, u & J ? Se : re);
      },
      LabeledStatement: function(n, u) {
        return [n.label.name + ":", this.maybeBlock(n.body, u & J ? Se : re)];
      },
      Program: function(n, u) {
        var o, l, d, T, P;
        for (T = n.body.length, o = [L && T > 0 ? `
` : ""], P = Wt, d = 0; d < T; ++d)
          !L && d === T - 1 && (P |= J), k && (d === 0 && (n.body[0].leadingComments || Ke(n.range[0], n.body[d].range[0], o)), d > 0 && !n.body[d - 1].trailingComments && !n.body[d].leadingComments && Ke(n.body[d - 1].range[1], n.body[d].range[0], o)), l = de(this.generateStatement(n.body[d], P)), o.push(l), d + 1 < T && !F(Z(l).toString()) && (k && n.body[d + 1].leadingComments || o.push(A)), k && d === T - 1 && (n.body[d].trailingComments || Ke(n.body[d].range[1], n.range[1], o));
        return o;
      },
      FunctionDeclaration: function(n, u) {
        return [
          at(n, !0),
          "function",
          Ct(n) || pe(),
          n.id ? ve(n.id) : "",
          this.generateFunctionBody(n)
        ];
      },
      ReturnStatement: function(n, u) {
        return n.argument ? [G(
          "return",
          this.generateExpression(n.argument, r.Sequence, M)
        ), this.semicolon(u)] : ["return" + this.semicolon(u)];
      },
      WhileStatement: function(n, u) {
        var o, l = this;
        return le(function() {
          o = [
            "while" + v + "(",
            l.generateExpression(n.test, r.Sequence, M),
            ")"
          ];
        }), o.push(this.maybeBlock(n.body, u & J ? Se : re)), o;
      },
      WithStatement: function(n, u) {
        var o, l = this;
        return le(function() {
          o = [
            "with" + v + "(",
            l.generateExpression(n.object, r.Sequence, M),
            ")"
          ];
        }), o.push(this.maybeBlock(n.body, u & J ? Se : re)), o;
      }
    }, Qe(ce.prototype, ce.Statement), ce.Expression = {
      SequenceExpression: function(n, u, o) {
        var l, d, T;
        for (r.Sequence < u && (o |= V), l = [], d = 0, T = n.expressions.length; d < T; ++d)
          l.push(this.generateExpression(n.expressions[d], r.Assignment, o)), d + 1 < T && l.push("," + v);
        return he(l, r.Sequence, u);
      },
      AssignmentExpression: function(n, u, o) {
        return this.generateAssignment(n.left, n.right, n.operator, u, o);
      },
      ArrowFunctionExpression: function(n, u, o) {
        return he(this.generateFunctionBody(n), r.ArrowFunction, u);
      },
      ConditionalExpression: function(n, u, o) {
        return r.Conditional < u && (o |= V), he(
          [
            this.generateExpression(n.test, r.Coalesce, o),
            v + "?" + v,
            this.generateExpression(n.consequent, r.Assignment, o),
            v + ":" + v,
            this.generateExpression(n.alternate, r.Assignment, o)
          ],
          r.Conditional,
          u
        );
      },
      LogicalExpression: function(n, u, o) {
        return n.operator === "??" && (o |= ge), this.BinaryExpression(n, u, o);
      },
      BinaryExpression: function(n, u, o) {
        var l, d, T, P, I, B;
        return P = i[n.operator], d = n.operator === "**" ? r.Postfix : P, T = n.operator === "**" ? P : P + 1, P < u && (o |= V), I = this.generateExpression(n.left, d, o), B = I.toString(), B.charCodeAt(B.length - 1) === 47 && c.code.isIdentifierPartES5(n.operator.charCodeAt(0)) ? l = [I, pe(), n.operator] : l = G(I, n.operator), I = this.generateExpression(n.right, T, o), n.operator === "/" && I.toString().charAt(0) === "/" || n.operator.slice(-1) === "<" && I.toString().slice(0, 3) === "!--" ? (l.push(pe()), l.push(I)) : l = G(l, I), n.operator === "in" && !(o & V) ? ["(", l, ")"] : (n.operator === "||" || n.operator === "&&") && o & ge ? ["(", l, ")"] : he(l, P, u);
      },
      CallExpression: function(n, u, o) {
        var l, d, T;
        for (l = [this.generateExpression(n.callee, r.Call, Ve)], n.optional && l.push("?."), l.push("("), d = 0, T = n.arguments.length; d < T; ++d)
          l.push(this.generateExpression(n.arguments[d], r.Assignment, M)), d + 1 < T && l.push("," + v);
        return l.push(")"), o & X ? he(l, r.Call, u) : ["(", l, ")"];
      },
      ChainExpression: function(n, u, o) {
        r.OptionalChaining < u && (o |= X);
        var l = this.generateExpression(n.expression, r.OptionalChaining, o);
        return he(l, r.OptionalChaining, u);
      },
      NewExpression: function(n, u, o) {
        var l, d, T, P, I;
        if (d = n.arguments.length, I = o & se && !E && d === 0 ? ke : Ie, l = G(
          "new",
          this.generateExpression(n.callee, r.New, I)
        ), !(o & se) || E || d > 0) {
          for (l.push("("), T = 0, P = d; T < P; ++T)
            l.push(this.generateExpression(n.arguments[T], r.Assignment, M)), T + 1 < P && l.push("," + v);
          l.push(")");
        }
        return he(l, r.New, u);
      },
      MemberExpression: function(n, u, o) {
        var l, d;
        return l = [this.generateExpression(n.object, r.Call, o & X ? Ve : Ie)], n.computed ? (n.optional && l.push("?."), l.push("["), l.push(this.generateExpression(n.property, r.Sequence, o & X ? M : ke)), l.push("]")) : (!n.optional && n.object.type === t.Literal && typeof n.object.value == "number" && (d = Z(l).toString(), d.indexOf(".") < 0 && !/[eExX]/.test(d) && c.code.isDecimalDigit(d.charCodeAt(d.length - 1)) && !(d.length >= 2 && d.charCodeAt(0) === 48) && l.push(" ")), l.push(n.optional ? "?." : "."), l.push(ve(n.property))), he(l, r.Member, u);
      },
      MetaProperty: function(n, u, o) {
        var l;
        return l = [], l.push(typeof n.meta == "string" ? n.meta : ve(n.meta)), l.push("."), l.push(typeof n.property == "string" ? n.property : ve(n.property)), he(l, r.Member, u);
      },
      UnaryExpression: function(n, u, o) {
        var l, d, T, P, I;
        return d = this.generateExpression(n.argument, r.Unary, M), v === "" ? l = G(n.operator, d) : (l = [n.operator], n.operator.length > 2 ? l = G(l, d) : (P = Z(l).toString(), I = P.charCodeAt(P.length - 1), T = d.toString().charCodeAt(0), ((I === 43 || I === 45) && I === T || c.code.isIdentifierPartES5(I) && c.code.isIdentifierPartES5(T)) && l.push(pe()), l.push(d))), he(l, r.Unary, u);
      },
      YieldExpression: function(n, u, o) {
        var l;
        return n.delegate ? l = "yield*" : l = "yield", n.argument && (l = G(
          l,
          this.generateExpression(n.argument, r.Yield, M)
        )), he(l, r.Yield, u);
      },
      AwaitExpression: function(n, u, o) {
        var l = G(
          n.all ? "await*" : "await",
          this.generateExpression(n.argument, r.Await, M)
        );
        return he(l, r.Await, u);
      },
      UpdateExpression: function(n, u, o) {
        return n.prefix ? he(
          [
            n.operator,
            this.generateExpression(n.argument, r.Unary, M)
          ],
          r.Unary,
          u
        ) : he(
          [
            this.generateExpression(n.argument, r.Postfix, M),
            n.operator
          ],
          r.Postfix,
          u
        );
      },
      FunctionExpression: function(n, u, o) {
        var l = [
          at(n, !0),
          "function"
        ];
        return n.id ? (l.push(Ct(n) || pe()), l.push(ve(n.id))) : l.push(Ct(n) || v), l.push(this.generateFunctionBody(n)), l;
      },
      ArrayPattern: function(n, u, o) {
        return this.ArrayExpression(n, u, o, !0);
      },
      ArrayExpression: function(n, u, o, l) {
        var d, T, P = this;
        return n.elements.length ? (T = l ? !1 : n.elements.length > 1, d = ["[", T ? A : ""], le(function(I) {
          var B, H;
          for (B = 0, H = n.elements.length; B < H; ++B)
            n.elements[B] ? (d.push(T ? I : ""), d.push(P.generateExpression(n.elements[B], r.Assignment, M))) : (T && d.push(I), B + 1 === H && d.push(",")), B + 1 < H && d.push("," + (T ? A : v));
        }), T && !F(Z(d).toString()) && d.push(A), d.push(T ? f : ""), d.push("]"), d) : "[]";
      },
      RestElement: function(n, u, o) {
        return "..." + this.generatePattern(n.argument);
      },
      ClassExpression: function(n, u, o) {
        var l, d;
        return l = ["class"], n.id && (l = G(l, this.generateExpression(n.id, r.Sequence, M))), n.superClass && (d = G("extends", this.generateExpression(n.superClass, r.Unary, M)), l = G(l, d)), l.push(v), l.push(this.generateStatement(n.body, Se)), l;
      },
      MethodDefinition: function(n, u, o) {
        var l, d;
        return n.static ? l = ["static" + v] : l = [], n.kind === "get" || n.kind === "set" ? d = [
          G(n.kind, this.generatePropertyKey(n.key, n.computed)),
          this.generateFunctionBody(n.value)
        ] : d = [
          Lr(n),
          this.generatePropertyKey(n.key, n.computed),
          this.generateFunctionBody(n.value)
        ], G(l, d);
      },
      Property: function(n, u, o) {
        return n.kind === "get" || n.kind === "set" ? [
          n.kind,
          pe(),
          this.generatePropertyKey(n.key, n.computed),
          this.generateFunctionBody(n.value)
        ] : n.shorthand ? n.value.type === "AssignmentPattern" ? this.AssignmentPattern(n.value, r.Sequence, M) : this.generatePropertyKey(n.key, n.computed) : n.method ? [
          Lr(n),
          this.generatePropertyKey(n.key, n.computed),
          this.generateFunctionBody(n.value)
        ] : [
          this.generatePropertyKey(n.key, n.computed),
          ":" + v,
          this.generateExpression(n.value, r.Assignment, M)
        ];
      },
      ObjectExpression: function(n, u, o) {
        var l, d, T, P = this;
        return n.properties.length ? (l = n.properties.length > 1, le(function() {
          T = P.generateExpression(n.properties[0], r.Sequence, M);
        }), !l && !Jt(Z(T).toString()) ? ["{", v, T, v, "}"] : (le(function(I) {
          var B, H;
          if (d = ["{", A, I, T], l)
            for (d.push("," + A), B = 1, H = n.properties.length; B < H; ++B)
              d.push(I), d.push(P.generateExpression(n.properties[B], r.Sequence, M)), B + 1 < H && d.push("," + A);
        }), F(Z(d).toString()) || d.push(A), d.push(f), d.push("}"), d)) : "{}";
      },
      AssignmentPattern: function(n, u, o) {
        return this.generateAssignment(n.left, n.right, "=", u, o);
      },
      ObjectPattern: function(n, u, o) {
        var l, d, T, P, I, B = this;
        if (!n.properties.length)
          return "{}";
        if (P = !1, n.properties.length === 1)
          I = n.properties[0], I.type === t.Property && I.value.type !== t.Identifier && (P = !0);
        else
          for (d = 0, T = n.properties.length; d < T; ++d)
            if (I = n.properties[d], I.type === t.Property && !I.shorthand) {
              P = !0;
              break;
            }
        return l = ["{", P ? A : ""], le(function(H) {
          var fe, Ge;
          for (fe = 0, Ge = n.properties.length; fe < Ge; ++fe)
            l.push(P ? H : ""), l.push(B.generateExpression(n.properties[fe], r.Sequence, M)), fe + 1 < Ge && l.push("," + (P ? A : v));
        }), P && !F(Z(l).toString()) && l.push(A), l.push(P ? f : ""), l.push("}"), l;
      },
      ThisExpression: function(n, u, o) {
        return "this";
      },
      Super: function(n, u, o) {
        return "super";
      },
      Identifier: function(n, u, o) {
        return ve(n);
      },
      ImportDefaultSpecifier: function(n, u, o) {
        return ve(n.id || n.local);
      },
      ImportNamespaceSpecifier: function(n, u, o) {
        var l = ["*"], d = n.id || n.local;
        return d && l.push(v + "as" + pe() + ve(d)), l;
      },
      ImportSpecifier: function(n, u, o) {
        var l = n.imported, d = [l.name], T = n.local;
        return T && T.name !== l.name && d.push(pe() + "as" + pe() + ve(T)), d;
      },
      ExportSpecifier: function(n, u, o) {
        var l = n.local, d = [l.name], T = n.exported;
        return T && T.name !== l.name && d.push(pe() + "as" + pe() + ve(T)), d;
      },
      Literal: function(n, u, o) {
        var l;
        if (n.hasOwnProperty("raw") && m && w.raw)
          try {
            if (l = m(n.raw).body[0].expression, l.type === t.Literal && l.value === n.value)
              return n.raw;
          } catch {
          }
        return n.regex ? "/" + n.regex.pattern + "/" + n.regex.flags : typeof n.value == "bigint" ? n.value.toString() + "n" : n.bigint ? n.bigint + "n" : n.value === null ? "null" : typeof n.value == "string" ? wn(n.value) : typeof n.value == "number" ? Et(n.value) : typeof n.value == "boolean" ? n.value ? "true" : "false" : _n(n.value);
      },
      GeneratorExpression: function(n, u, o) {
        return this.ComprehensionExpression(n, u, o);
      },
      ComprehensionExpression: function(n, u, o) {
        var l, d, T, P, I = this;
        return l = n.type === t.GeneratorExpression ? ["("] : ["["], w.moz.comprehensionExpressionStartsWithAssignment && (P = this.generateExpression(n.body, r.Assignment, M), l.push(P)), n.blocks && le(function() {
          for (d = 0, T = n.blocks.length; d < T; ++d)
            P = I.generateExpression(n.blocks[d], r.Sequence, M), d > 0 || w.moz.comprehensionExpressionStartsWithAssignment ? l = G(l, P) : l.push(P);
        }), n.filter && (l = G(l, "if" + v), P = this.generateExpression(n.filter, r.Sequence, M), l = G(l, ["(", P, ")"])), w.moz.comprehensionExpressionStartsWithAssignment || (P = this.generateExpression(n.body, r.Assignment, M), l = G(l, P)), l.push(n.type === t.GeneratorExpression ? ")" : "]"), l;
      },
      ComprehensionBlock: function(n, u, o) {
        var l;
        return n.left.type === t.VariableDeclaration ? l = [
          n.left.kind,
          pe(),
          this.generateStatement(n.left.declarations[0], He)
        ] : l = this.generateExpression(n.left, r.Call, M), l = G(l, n.of ? "of" : "in"), l = G(l, this.generateExpression(n.right, r.Sequence, M)), ["for" + v + "(", l, ")"];
      },
      SpreadElement: function(n, u, o) {
        return [
          "...",
          this.generateExpression(n.argument, r.Assignment, M)
        ];
      },
      TaggedTemplateExpression: function(n, u, o) {
        var l = Ve;
        o & X || (l = Ie);
        var d = [
          this.generateExpression(n.tag, r.Call, l),
          this.generateExpression(n.quasi, r.Primary, Ye)
        ];
        return he(d, r.TaggedTemplate, u);
      },
      TemplateElement: function(n, u, o) {
        return n.value.raw;
      },
      TemplateLiteral: function(n, u, o) {
        var l, d, T;
        for (l = ["`"], d = 0, T = n.quasis.length; d < T; ++d)
          l.push(this.generateExpression(n.quasis[d], r.Primary, M)), d + 1 < T && (l.push("${" + v), l.push(this.generateExpression(n.expressions[d], r.Sequence, M)), l.push(v + "}"));
        return l.push("`"), l;
      },
      ModuleSpecifier: function(n, u, o) {
        return this.Literal(n, u, o);
      },
      ImportExpression: function(n, u, o) {
        return he([
          "import(",
          this.generateExpression(n.source, r.Assignment, M),
          ")"
        ], r.Call, u);
      }
    }, Qe(ce.prototype, ce.Expression), ce.prototype.generateExpression = function(n, u, o) {
      var l, d;
      return d = n.type || t.Property, w.verbatim && n.hasOwnProperty(w.verbatim) ? Pn(n, u) : (l = this[d](n, u, o), w.comment && (l = Ir(n, l)), Z(l, n));
    }, ce.prototype.generateStatement = function(n, u) {
      var o, l;
      return o = this[n.type](n, u), w.comment && (o = Ir(n, o)), l = Z(o).toString(), n.type === t.Program && !L && A === "" && l.charAt(l.length - 1) === `
` && (o = S ? Z(o).replaceRight(/\s+$/, "") : l.replace(/\s+$/, "")), Z(o, n);
    };
    function In(n) {
      var u;
      if (u = new ce(), U(n))
        return u.generateStatement(n, re);
      if (z(n))
        return u.generateExpression(n, r.Sequence, M);
      throw new Error("Unknown node type: " + n.type);
    }
    function Nn(n, u) {
      var o = _t(), l, d;
      return u != null ? (typeof u.indent == "string" && (o.format.indent.style = u.indent), typeof u.base == "number" && (o.format.indent.base = u.base), u = Le(o, u), p = u.format.indent.style, typeof u.base == "string" ? f = u.base : f = Ne(p, u.format.indent.base)) : (u = o, p = u.format.indent.style, f = Ne(p, u.format.indent.base)), y = u.format.json, g = u.format.renumber, x = y ? !1 : u.format.hexadecimal, _ = y ? "double" : u.format.quotes, b = u.format.escapeless, A = u.format.newline, v = u.format.space, u.format.compact && (A = v = p = f = ""), E = u.format.parentheses, N = u.format.semicolons, L = u.format.safeConcatenation, j = u.directive, m = y ? null : u.parse, S = u.sourceMap, C = u.sourceCode, k = u.format.preserveBlankLines && C !== null, w = u, S && (e.browser ? s = pt.sourceMap.SourceNode : s = Zn().SourceNode), l = In(n), S ? (d = l.toStringWithSourceMap({
        file: u.file,
        sourceRoot: u.sourceMapRoot
      }), u.sourceContent && d.map.setSourceContent(
        u.sourceMap,
        u.sourceContent
      ), u.sourceMapWithCode ? d : d.map.toString()) : (d = { code: l.toString(), map: null }, u.sourceMapWithCode ? d : d.code);
    }
    D = {
      indent: {
        style: "",
        base: 0
      },
      renumber: !0,
      hexadecimal: !0,
      quotes: "auto",
      escapeless: !0,
      compact: !0,
      parentheses: !1,
      semicolons: !1
    }, R = _t().format, e.version = ms.version, e.generate = Nn, e.attachComments = a.attachComments, e.Precedence = Le({}, r), e.browser = !1, e.FORMAT_MINIFY = D, e.FORMAT_DEFAULTS = R;
  })();
})(yi);
var tr = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, rr = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", gs = {
  5: rr,
  "5module": rr + " export import",
  6: rr + " const class extends export import super"
}, ys = /^in(stanceof)?$/, pr = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", _i = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿", vs = new RegExp("[" + pr + "]"), xs = new RegExp("[" + pr + _i + "]");
pr = _i = null;
var Ei = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938], bs = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function nr(e, t) {
  for (var r = 65536, i = 0; i < t.length; i += 2) {
    if (r += t[i], r > e)
      return !1;
    if (r += t[i + 1], r >= e)
      return !0;
  }
}
function Me(e, t) {
  return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && vs.test(String.fromCharCode(e)) : t === !1 ? !1 : nr(e, Ei);
}
function We(e, t) {
  return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && xs.test(String.fromCharCode(e)) : t === !1 ? !1 : nr(e, Ei) || nr(e, bs);
}
var K = function(t, r) {
  r === void 0 && (r = {}), this.label = t, this.keyword = r.keyword, this.beforeExpr = !!r.beforeExpr, this.startsExpr = !!r.startsExpr, this.isLoop = !!r.isLoop, this.isAssign = !!r.isAssign, this.prefix = !!r.prefix, this.postfix = !!r.postfix, this.binop = r.binop || null, this.updateContext = null;
};
function _e(e, t) {
  return new K(e, { beforeExpr: !0, binop: t });
}
var Ee = { beforeExpr: !0 }, xe = { startsExpr: !0 }, Ft = {};
function Q(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, Ft[e] = new K(e, t);
}
var h = {
  num: new K("num", xe),
  regexp: new K("regexp", xe),
  string: new K("string", xe),
  name: new K("name", xe),
  eof: new K("eof"),
  // Punctuation token types.
  bracketL: new K("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new K("]"),
  braceL: new K("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new K("}"),
  parenL: new K("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new K(")"),
  comma: new K(",", Ee),
  semi: new K(";", Ee),
  colon: new K(":", Ee),
  dot: new K("."),
  question: new K("?", Ee),
  questionDot: new K("?."),
  arrow: new K("=>", Ee),
  template: new K("template"),
  invalidTemplate: new K("invalidTemplate"),
  ellipsis: new K("...", Ee),
  backQuote: new K("`", xe),
  dollarBraceL: new K("${", { beforeExpr: !0, startsExpr: !0 }),
  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.
  eq: new K("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new K("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new K("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new K("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: _e("||", 1),
  logicalAND: _e("&&", 2),
  bitwiseOR: _e("|", 3),
  bitwiseXOR: _e("^", 4),
  bitwiseAND: _e("&", 5),
  equality: _e("==/!=/===/!==", 6),
  relational: _e("</>/<=/>=", 7),
  bitShift: _e("<</>>/>>>", 8),
  plusMin: new K("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: _e("%", 10),
  star: _e("*", 10),
  slash: _e("/", 10),
  starstar: new K("**", { beforeExpr: !0 }),
  coalesce: _e("??", 1),
  // Keyword token types.
  _break: Q("break"),
  _case: Q("case", Ee),
  _catch: Q("catch"),
  _continue: Q("continue"),
  _debugger: Q("debugger"),
  _default: Q("default", Ee),
  _do: Q("do", { isLoop: !0, beforeExpr: !0 }),
  _else: Q("else", Ee),
  _finally: Q("finally"),
  _for: Q("for", { isLoop: !0 }),
  _function: Q("function", xe),
  _if: Q("if"),
  _return: Q("return", Ee),
  _switch: Q("switch"),
  _throw: Q("throw", Ee),
  _try: Q("try"),
  _var: Q("var"),
  _const: Q("const"),
  _while: Q("while", { isLoop: !0 }),
  _with: Q("with"),
  _new: Q("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: Q("this", xe),
  _super: Q("super", xe),
  _class: Q("class", xe),
  _extends: Q("extends", Ee),
  _export: Q("export"),
  _import: Q("import", xe),
  _null: Q("null", xe),
  _true: Q("true", xe),
  _false: Q("false", xe),
  _in: Q("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: Q("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: Q("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: Q("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: Q("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, be = /\r\n?|\n|\u2028|\u2029/, et = new RegExp(be.source, "g");
function nt(e, t) {
  return e === 10 || e === 13 || !t && (e === 8232 || e === 8233);
}
var dr = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, Ae = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Ci = Object.prototype, Ss = Ci.hasOwnProperty, _s = Ci.toString;
function Mt(e, t) {
  return Ss.call(e, t);
}
var Hr = Array.isArray || function(e) {
  return _s.call(e) === "[object Array]";
};
function ze(e) {
  return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
}
var tt = function(t, r) {
  this.line = t, this.column = r;
};
tt.prototype.offset = function(t) {
  return new tt(this.line, this.column + t);
};
var vt = function(t, r, i) {
  this.start = r, this.end = i, t.sourceFile !== null && (this.source = t.sourceFile);
};
function mr(e, t) {
  for (var r = 1, i = 0; ; ) {
    et.lastIndex = i;
    var s = et.exec(e);
    if (s && s.index < t)
      ++r, i = s.index + s[0].length;
    else
      return new tt(r, t - i);
  }
}
var Pt = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
  // either 3, 5, 6 (2015), 7 (2016), 8 (2017), 9 (2018), or 10
  // (2019). This influences support for strict mode, the set of
  // reserved words, and support for new syntax features. The default
  // is 10.
  ecmaVersion: 10,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called
  // when a semicolon is automatically inserted. It will be passed
  // the position of the comma as an offset, and if `locations` is
  // enabled, it is given the location as a `{line, column}` object
  // as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: !1,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program.
  allowImportExportEverywhere: !1,
  // When enabled, await identifiers are allowed to appear at the top-level scope,
  // but they are still not allowed in non-async functions.
  allowAwaitOutsideFunction: !1,
  // When enabled, hashbang directive in the beginning of file
  // is allowed and treated as a line comment.
  allowHashBang: !1,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: !1,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: !1,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: !1
};
function Es(e) {
  var t = {};
  for (var r in Pt)
    t[r] = e && Mt(e, r) ? e[r] : Pt[r];
  if (t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), Hr(t.onToken)) {
    var i = t.onToken;
    t.onToken = function(s) {
      return i.push(s);
    };
  }
  return Hr(t.onComment) && (t.onComment = Cs(t, t.onComment)), t;
}
function Cs(e, t) {
  return function(r, i, s, a, c, f) {
    var p = {
      type: r ? "Block" : "Line",
      value: i,
      start: s,
      end: a
    };
    e.locations && (p.loc = new vt(this, c, f)), e.ranges && (p.range = [s, a]), t.push(p);
  };
}
var dt = 1, xt = 2, gr = dt | xt, Ai = 4, wi = 8, ki = 16, Ti = 32, Pi = 64, Ii = 128;
function yr(e, t) {
  return xt | (e ? Ai : 0) | (t ? wi : 0);
}
var Qr = 0, vr = 1, Fe = 2, Ni = 3, Li = 4, Oi = 5, ae = function(t, r, i) {
  this.options = t = Es(t), this.sourceFile = t.sourceFile, this.keywords = ze(gs[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var s = "";
  if (t.allowReserved !== !0) {
    for (var a = t.ecmaVersion; !(s = tr[a]); a--)
      ;
    t.sourceType === "module" && (s += " await");
  }
  this.reservedWords = ze(s);
  var c = (s ? s + " " : "") + tr.strict;
  this.reservedWordsStrict = ze(c), this.reservedWordsStrictBind = ze(c + " " + tr.strictBind), this.input = String(r), this.containsEsc = !1, i ? (this.pos = i, this.lineStart = this.input.lastIndexOf(`
`, i - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(be).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = h.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = {}, this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(dt), this.regexpState = null;
}, Je = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 } };
ae.prototype.parse = function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
Je.inFunction.get = function() {
  return (this.currentVarScope().flags & xt) > 0;
};
Je.inGenerator.get = function() {
  return (this.currentVarScope().flags & wi) > 0;
};
Je.inAsync.get = function() {
  return (this.currentVarScope().flags & Ai) > 0;
};
Je.allowSuper.get = function() {
  return (this.currentThisScope().flags & Pi) > 0;
};
Je.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & Ii) > 0;
};
Je.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
ae.prototype.inNonArrowFunction = function() {
  return (this.currentThisScope().flags & xt) > 0;
};
ae.extend = function() {
  for (var t = [], r = arguments.length; r--; )
    t[r] = arguments[r];
  for (var i = this, s = 0; s < t.length; s++)
    i = t[s](i);
  return i;
};
ae.parse = function(t, r) {
  return new this(r, t).parse();
};
ae.parseExpressionAt = function(t, r, i) {
  var s = new this(i, t, r);
  return s.nextToken(), s.parseExpression();
};
ae.tokenizer = function(t, r) {
  return new this(r, t);
};
Object.defineProperties(ae.prototype, Je);
var ye = ae.prototype, As = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
ye.strictDirective = function(e) {
  for (; ; ) {
    Ae.lastIndex = e, e += Ae.exec(this.input)[0].length;
    var t = As.exec(this.input.slice(e));
    if (!t)
      return !1;
    if ((t[1] || t[2]) === "use strict") {
      Ae.lastIndex = e + t[0].length;
      var r = Ae.exec(this.input), i = r.index + r[0].length, s = this.input.charAt(i);
      return s === ";" || s === "}" || be.test(r[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(s) || s === "!" && this.input.charAt(i + 1) === "=");
    }
    e += t[0].length, Ae.lastIndex = e, e += Ae.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
};
ye.eat = function(e) {
  return this.type === e ? (this.next(), !0) : !1;
};
ye.isContextual = function(e) {
  return this.type === h.name && this.value === e && !this.containsEsc;
};
ye.eatContextual = function(e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
ye.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
};
ye.canInsertSemicolon = function() {
  return this.type === h.eof || this.type === h.braceR || be.test(this.input.slice(this.lastTokEnd, this.start));
};
ye.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
ye.semicolon = function() {
  !this.eat(h.semi) && !this.insertSemicolon() && this.unexpected();
};
ye.afterTrailingComma = function(e, t) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
};
ye.expect = function(e) {
  this.eat(e) || this.unexpected();
};
ye.unexpected = function(e) {
  this.raise(e ?? this.start, "Unexpected token");
};
function Bt() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
}
ye.checkPatternErrors = function(e, t) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var r = t ? e.parenthesizedAssign : e.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, "Parenthesized pattern");
  }
};
ye.checkExpressionErrors = function(e, t) {
  if (!e)
    return !1;
  var r = e.shorthandAssign, i = e.doubleProto;
  if (!t)
    return r >= 0 || i >= 0;
  r >= 0 && this.raise(r, "Shorthand property assignments are valid only in destructuring patterns"), i >= 0 && this.raiseRecoverable(i, "Redefinition of __proto__ property");
};
ye.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
ye.isSimpleAssignTarget = function(e) {
  return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var W = ae.prototype;
W.parseTopLevel = function(e) {
  var t = {};
  for (e.body || (e.body = []); this.type !== h.eof; ) {
    var r = this.parseStatement(null, !0, t);
    e.body.push(r);
  }
  if (this.inModule)
    for (var i = 0, s = Object.keys(this.undefinedExports); i < s.length; i += 1) {
      var a = s[i];
      this.raiseRecoverable(this.undefinedExports[a].start, "Export '" + a + "' is not defined");
    }
  return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
};
var xr = { kind: "loop" }, ws = { kind: "switch" };
W.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  Ae.lastIndex = this.pos;
  var t = Ae.exec(this.input), r = this.pos + t[0].length, i = this.input.charCodeAt(r);
  if (i === 91)
    return !0;
  if (e)
    return !1;
  if (i === 123)
    return !0;
  if (Me(i, !0)) {
    for (var s = r + 1; We(this.input.charCodeAt(s), !0); )
      ++s;
    var a = this.input.slice(r, s);
    if (!ys.test(a))
      return !0;
  }
  return !1;
};
W.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  Ae.lastIndex = this.pos;
  var e = Ae.exec(this.input), t = this.pos + e[0].length;
  return !be.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !We(this.input.charAt(t + 8)));
};
W.parseStatement = function(e, t, r) {
  var i = this.type, s = this.startNode(), a;
  switch (this.isLet(e) && (i = h._var, a = "let"), i) {
    case h._break:
    case h._continue:
      return this.parseBreakContinueStatement(s, i.keyword);
    case h._debugger:
      return this.parseDebuggerStatement(s);
    case h._do:
      return this.parseDoStatement(s);
    case h._for:
      return this.parseForStatement(s);
    case h._function:
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(s, !1, !e);
    case h._class:
      return e && this.unexpected(), this.parseClass(s, !0);
    case h._if:
      return this.parseIfStatement(s);
    case h._return:
      return this.parseReturnStatement(s);
    case h._switch:
      return this.parseSwitchStatement(s);
    case h._throw:
      return this.parseThrowStatement(s);
    case h._try:
      return this.parseTryStatement(s);
    case h._const:
    case h._var:
      return a = a || this.value, e && a !== "var" && this.unexpected(), this.parseVarStatement(s, a);
    case h._while:
      return this.parseWhileStatement(s);
    case h._with:
      return this.parseWithStatement(s);
    case h.braceL:
      return this.parseBlock(!0, s);
    case h.semi:
      return this.parseEmptyStatement(s);
    case h._export:
    case h._import:
      if (this.options.ecmaVersion > 10 && i === h._import) {
        Ae.lastIndex = this.pos;
        var c = Ae.exec(this.input), f = this.pos + c[0].length, p = this.input.charCodeAt(f);
        if (p === 40 || p === 46)
          return this.parseExpressionStatement(s, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), i === h._import ? this.parseImport(s) : this.parseExport(s, r);
    default:
      if (this.isAsyncFunction())
        return e && this.unexpected(), this.next(), this.parseFunctionStatement(s, !0, !e);
      var y = this.value, g = this.parseExpression();
      return i === h.name && g.type === "Identifier" && this.eat(h.colon) ? this.parseLabeledStatement(s, y, g, e) : this.parseExpressionStatement(s, g);
  }
};
W.parseBreakContinueStatement = function(e, t) {
  var r = t === "break";
  this.next(), this.eat(h.semi) || this.insertSemicolon() ? e.label = null : this.type !== h.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var i = 0; i < this.labels.length; ++i) {
    var s = this.labels[i];
    if ((e.label == null || s.name === e.label.name) && (s.kind != null && (r || s.kind === "loop") || e.label && r))
      break;
  }
  return i === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, r ? "BreakStatement" : "ContinueStatement");
};
W.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
W.parseDoStatement = function(e) {
  return this.next(), this.labels.push(xr), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(h._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(h.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
W.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(xr), this.enterScope(0), this.expect(h.parenL), this.type === h.semi)
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var r = this.isLet();
  if (this.type === h._var || this.type === h._const || r) {
    var i = this.startNode(), s = r ? "let" : this.value;
    return this.next(), this.parseVar(i, !0, s), this.finishNode(i, "VariableDeclaration"), (this.type === h._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && i.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === h._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.parseForIn(e, i)) : (t > -1 && this.unexpected(t), this.parseFor(e, i));
  }
  var a = new Bt(), c = this.parseExpression(!0, a);
  return this.type === h._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === h._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.toAssignable(c, !1, a), this.checkLVal(c), this.parseForIn(e, c)) : (this.checkExpressionErrors(a, !0), t > -1 && this.unexpected(t), this.parseFor(e, c));
};
W.parseFunctionStatement = function(e, t, r) {
  return this.next(), this.parseFunction(e, ht | (r ? 0 : sr), !1, t);
};
W.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(h._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
W.parseReturnStatement = function(e) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(h.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
W.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(h.braceL), this.labels.push(ws), this.enterScope(0);
  for (var t, r = !1; this.type !== h.braceR; )
    if (this.type === h._case || this.type === h._default) {
      var i = this.type === h._case;
      t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), i ? t.test = this.parseExpression() : (r && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), r = !0, t.test = null), this.expect(h.colon);
    } else
      t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
W.parseThrowStatement = function(e) {
  return this.next(), be.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var ks = [];
W.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === h._catch) {
    var t = this.startNode();
    if (this.next(), this.eat(h.parenL)) {
      t.param = this.parseBindingAtom();
      var r = t.param.type === "Identifier";
      this.enterScope(r ? Ti : 0), this.checkLVal(t.param, r ? Li : Fe), this.expect(h.parenR);
    } else
      this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0);
    t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
  }
  return e.finalizer = this.eat(h._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
};
W.parseVarStatement = function(e, t) {
  return this.next(), this.parseVar(e, !1, t), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
W.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(xr), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
W.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
W.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
W.parseLabeledStatement = function(e, t, r, i) {
  for (var s = 0, a = this.labels; s < a.length; s += 1) {
    var c = a[s];
    c.name === t && this.raise(r.start, "Label '" + t + "' is already declared");
  }
  for (var f = this.type.isLoop ? "loop" : this.type === h._switch ? "switch" : null, p = this.labels.length - 1; p >= 0; p--) {
    var y = this.labels[p];
    if (y.statementStart === e.start)
      y.statementStart = this.start, y.kind = f;
    else
      break;
  }
  return this.labels.push({ name: t, kind: f, statementStart: this.start }), e.body = this.parseStatement(i ? i.indexOf("label") === -1 ? i + "label" : i : "label"), this.labels.pop(), e.label = r, this.finishNode(e, "LabeledStatement");
};
W.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
W.parseBlock = function(e, t, r) {
  for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(h.braceL), e && this.enterScope(0); this.type !== h.braceR; ) {
    var i = this.parseStatement(null);
    t.body.push(i);
  }
  return r && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
};
W.parseFor = function(e, t) {
  return e.init = t, this.expect(h.semi), e.test = this.type === h.semi ? null : this.parseExpression(), this.expect(h.semi), e.update = this.type === h.parenR ? null : this.parseExpression(), this.expect(h.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
};
W.parseForIn = function(e, t) {
  var r = this.type === h._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!r || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") ? this.raise(
    t.start,
    (r ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ) : t.type === "AssignmentPattern" && this.raise(t.start, "Invalid left-hand side in for-loop"), e.left = t, e.right = r ? this.parseExpression() : this.parseMaybeAssign(), this.expect(h.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, r ? "ForInStatement" : "ForOfStatement");
};
W.parseVar = function(e, t, r) {
  for (e.declarations = [], e.kind = r; ; ) {
    var i = this.startNode();
    if (this.parseVarId(i, r), this.eat(h.eq) ? i.init = this.parseMaybeAssign(t) : r === "const" && !(this.type === h._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : i.id.type !== "Identifier" && !(t && (this.type === h._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : i.init = null, e.declarations.push(this.finishNode(i, "VariableDeclarator")), !this.eat(h.comma))
      break;
  }
  return e;
};
W.parseVarId = function(e, t) {
  e.id = this.parseBindingAtom(), this.checkLVal(e.id, t === "var" ? vr : Fe, !1);
};
var ht = 1, sr = 2, Ri = 4;
W.parseFunction = function(e, t, r, i) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !i) && (this.type === h.star && t & sr && this.unexpected(), e.generator = this.eat(h.star)), this.options.ecmaVersion >= 8 && (e.async = !!i), t & ht && (e.id = t & Ri && this.type !== h.name ? null : this.parseIdent(), e.id && !(t & sr) && this.checkLVal(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? vr : Fe : Ni));
  var s = this.yieldPos, a = this.awaitPos, c = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(yr(e.async, e.generator)), t & ht || (e.id = this.type === h.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, r, !1), this.yieldPos = s, this.awaitPos = a, this.awaitIdentPos = c, this.finishNode(e, t & ht ? "FunctionDeclaration" : "FunctionExpression");
};
W.parseFunctionParams = function(e) {
  this.expect(h.parenL), e.params = this.parseBindingList(h.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
W.parseClass = function(e, t) {
  this.next();
  var r = this.strict;
  this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
  var i = this.startNode(), s = !1;
  for (i.body = [], this.expect(h.braceL); this.type !== h.braceR; ) {
    var a = this.parseClassElement(e.superClass !== null);
    a && (i.body.push(a), a.type === "MethodDefinition" && a.kind === "constructor" && (s && this.raise(a.start, "Duplicate constructor in the same class"), s = !0));
  }
  return this.strict = r, this.next(), e.body = this.finishNode(i, "ClassBody"), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
W.parseClassElement = function(e) {
  var t = this;
  if (this.eat(h.semi))
    return null;
  var r = this.startNode(), i = function(p, y) {
    y === void 0 && (y = !1);
    var g = t.start, x = t.startLoc;
    return t.eatContextual(p) ? t.type !== h.parenL && (!y || !t.canInsertSemicolon()) ? !0 : (r.key && t.unexpected(), r.computed = !1, r.key = t.startNodeAt(g, x), r.key.name = p, t.finishNode(r.key, "Identifier"), !1) : !1;
  };
  r.kind = "method", r.static = i("static");
  var s = this.eat(h.star), a = !1;
  s || (this.options.ecmaVersion >= 8 && i("async", !0) ? (a = !0, s = this.options.ecmaVersion >= 9 && this.eat(h.star)) : i("get") ? r.kind = "get" : i("set") && (r.kind = "set")), r.key || this.parsePropertyName(r);
  var c = r.key, f = !1;
  return !r.computed && !r.static && (c.type === "Identifier" && c.name === "constructor" || c.type === "Literal" && c.value === "constructor") ? (r.kind !== "method" && this.raise(c.start, "Constructor can't have get/set modifier"), s && this.raise(c.start, "Constructor can't be a generator"), a && this.raise(c.start, "Constructor can't be an async method"), r.kind = "constructor", f = e) : r.static && c.type === "Identifier" && c.name === "prototype" && this.raise(c.start, "Classes may not have a static property named prototype"), this.parseClassMethod(r, s, a, f), r.kind === "get" && r.value.params.length !== 0 && this.raiseRecoverable(r.value.start, "getter should have no params"), r.kind === "set" && r.value.params.length !== 1 && this.raiseRecoverable(r.value.start, "setter should have exactly one param"), r.kind === "set" && r.value.params[0].type === "RestElement" && this.raiseRecoverable(r.value.params[0].start, "Setter cannot use rest params"), r;
};
W.parseClassMethod = function(e, t, r, i) {
  return e.value = this.parseMethod(t, r, i), this.finishNode(e, "MethodDefinition");
};
W.parseClassId = function(e, t) {
  this.type === h.name ? (e.id = this.parseIdent(), t && this.checkLVal(e.id, Fe, !1)) : (t === !0 && this.unexpected(), e.id = null);
};
W.parseClassSuper = function(e) {
  e.superClass = this.eat(h._extends) ? this.parseExprSubscripts() : null;
};
W.parseExport = function(e, t) {
  if (this.next(), this.eat(h.star))
    return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseIdent(!0), this.checkExport(t, e.exported.name, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== h.string && this.unexpected(), e.source = this.parseExprAtom(), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
  if (this.eat(h._default)) {
    this.checkExport(t, "default", this.lastTokStart);
    var r;
    if (this.type === h._function || (r = this.isAsyncFunction())) {
      var i = this.startNode();
      this.next(), r && this.next(), e.declaration = this.parseFunction(i, ht | Ri, !1, r);
    } else if (this.type === h._class) {
      var s = this.startNode();
      e.declaration = this.parseClass(s, "nullableID");
    } else
      e.declaration = this.parseMaybeAssign(), this.semicolon();
    return this.finishNode(e, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement())
    e.declaration = this.parseStatement(null), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id.name, e.declaration.id.start), e.specifiers = [], e.source = null;
  else {
    if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from"))
      this.type !== h.string && this.unexpected(), e.source = this.parseExprAtom();
    else {
      for (var a = 0, c = e.specifiers; a < c.length; a += 1) {
        var f = c[a];
        this.checkUnreserved(f.local), this.checkLocalExport(f.local);
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
W.checkExport = function(e, t, r) {
  e && (Mt(e, t) && this.raiseRecoverable(r, "Duplicate export '" + t + "'"), e[t] = !0);
};
W.checkPatternExport = function(e, t) {
  var r = t.type;
  if (r === "Identifier")
    this.checkExport(e, t.name, t.start);
  else if (r === "ObjectPattern")
    for (var i = 0, s = t.properties; i < s.length; i += 1) {
      var a = s[i];
      this.checkPatternExport(e, a);
    }
  else if (r === "ArrayPattern")
    for (var c = 0, f = t.elements; c < f.length; c += 1) {
      var p = f[c];
      p && this.checkPatternExport(e, p);
    }
  else
    r === "Property" ? this.checkPatternExport(e, t.value) : r === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : r === "RestElement" ? this.checkPatternExport(e, t.argument) : r === "ParenthesizedExpression" && this.checkPatternExport(e, t.expression);
};
W.checkVariableExport = function(e, t) {
  if (e)
    for (var r = 0, i = t; r < i.length; r += 1) {
      var s = i[r];
      this.checkPatternExport(e, s.id);
    }
};
W.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
W.parseExportSpecifiers = function(e) {
  var t = [], r = !0;
  for (this.expect(h.braceL); !this.eat(h.braceR); ) {
    if (r)
      r = !1;
    else if (this.expect(h.comma), this.afterTrailingComma(h.braceR))
      break;
    var i = this.startNode();
    i.local = this.parseIdent(!0), i.exported = this.eatContextual("as") ? this.parseIdent(!0) : i.local, this.checkExport(e, i.exported.name, i.exported.start), t.push(this.finishNode(i, "ExportSpecifier"));
  }
  return t;
};
W.parseImport = function(e) {
  return this.next(), this.type === h.string ? (e.specifiers = ks, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === h.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
W.parseImportSpecifiers = function() {
  var e = [], t = !0;
  if (this.type === h.name) {
    var r = this.startNode();
    if (r.local = this.parseIdent(), this.checkLVal(r.local, Fe), e.push(this.finishNode(r, "ImportDefaultSpecifier")), !this.eat(h.comma))
      return e;
  }
  if (this.type === h.star) {
    var i = this.startNode();
    return this.next(), this.expectContextual("as"), i.local = this.parseIdent(), this.checkLVal(i.local, Fe), e.push(this.finishNode(i, "ImportNamespaceSpecifier")), e;
  }
  for (this.expect(h.braceL); !this.eat(h.braceR); ) {
    if (t)
      t = !1;
    else if (this.expect(h.comma), this.afterTrailingComma(h.braceR))
      break;
    var s = this.startNode();
    s.imported = this.parseIdent(!0), this.eatContextual("as") ? s.local = this.parseIdent() : (this.checkUnreserved(s.imported), s.local = s.imported), this.checkLVal(s.local, Fe), e.push(this.finishNode(s, "ImportSpecifier"));
  }
  return e;
};
W.adaptDirectivePrologue = function(e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
};
W.isDirectiveCandidate = function(e) {
  return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && // Reject parenthesized strings.
  (this.input[e.start] === '"' || this.input[e.start] === "'");
};
var Be = ae.prototype;
Be.toAssignable = function(e, t, r) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case "Identifier":
        this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        e.type = "ObjectPattern", r && this.checkPatternErrors(r, !0);
        for (var i = 0, s = e.properties; i < s.length; i += 1) {
          var a = s[i];
          this.toAssignable(a, t), a.type === "RestElement" && (a.argument.type === "ArrayPattern" || a.argument.type === "ObjectPattern") && this.raise(a.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
        break;
      case "ArrayExpression":
        e.type = "ArrayPattern", r && this.checkPatternErrors(r, !0), this.toAssignableList(e.elements, t);
        break;
      case "SpreadElement":
        e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
      case "AssignmentPattern":
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, r);
        break;
      case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!t)
          break;
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  else
    r && this.checkPatternErrors(r, !0);
  return e;
};
Be.toAssignableList = function(e, t) {
  for (var r = e.length, i = 0; i < r; i++) {
    var s = e[i];
    s && this.toAssignable(s, t);
  }
  if (r) {
    var a = e[r - 1];
    this.options.ecmaVersion === 6 && t && a && a.type === "RestElement" && a.argument.type !== "Identifier" && this.unexpected(a.argument.start);
  }
  return e;
};
Be.parseSpread = function(e) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
};
Be.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== h.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
};
Be.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case h.bracketL:
        var e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(h.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
      case h.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
Be.parseBindingList = function(e, t, r) {
  for (var i = [], s = !0; !this.eat(e); )
    if (s ? s = !1 : this.expect(h.comma), t && this.type === h.comma)
      i.push(null);
    else {
      if (r && this.afterTrailingComma(e))
        break;
      if (this.type === h.ellipsis) {
        var a = this.parseRestBinding();
        this.parseBindingListItem(a), i.push(a), this.type === h.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(e);
        break;
      } else {
        var c = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(c), i.push(c);
      }
    }
  return i;
};
Be.parseBindingListItem = function(e) {
  return e;
};
Be.parseMaybeDefault = function(e, t, r) {
  if (r = r || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(h.eq))
    return r;
  var i = this.startNodeAt(e, t);
  return i.left = r, i.right = this.parseMaybeAssign(), this.finishNode(i, "AssignmentPattern");
};
Be.checkLVal = function(e, t, r) {
  switch (t === void 0 && (t = Qr), e.type) {
    case "Identifier":
      t === Fe && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (t ? "Binding " : "Assigning to ") + e.name + " in strict mode"), r && (Mt(r, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), r[e.name] = !0), t !== Qr && t !== Oi && this.declareName(e.name, t, e.start);
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      t && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ObjectPattern":
      for (var i = 0, s = e.properties; i < s.length; i += 1) {
        var a = s[i];
        this.checkLVal(a, t, r);
      }
      break;
    case "Property":
      this.checkLVal(e.value, t, r);
      break;
    case "ArrayPattern":
      for (var c = 0, f = e.elements; c < f.length; c += 1) {
        var p = f[c];
        p && this.checkLVal(p, t, r);
      }
      break;
    case "AssignmentPattern":
      this.checkLVal(e.left, t, r);
      break;
    case "RestElement":
      this.checkLVal(e.argument, t, r);
      break;
    case "ParenthesizedExpression":
      this.checkLVal(e.expression, t, r);
      break;
    default:
      this.raise(e.start, (t ? "Binding" : "Assigning to") + " rvalue");
  }
};
var $ = ae.prototype;
$.checkPropClash = function(e, t, r) {
  if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var i = e.key, s;
    switch (i.type) {
      case "Identifier":
        s = i.name;
        break;
      case "Literal":
        s = String(i.value);
        break;
      default:
        return;
    }
    var a = e.kind;
    if (this.options.ecmaVersion >= 6) {
      s === "__proto__" && a === "init" && (t.proto && (r ? r.doubleProto < 0 && (r.doubleProto = i.start) : this.raiseRecoverable(i.start, "Redefinition of __proto__ property")), t.proto = !0);
      return;
    }
    s = "$" + s;
    var c = t[s];
    if (c) {
      var f;
      a === "init" ? f = this.strict && c.init || c.get || c.set : f = c.init || c[a], f && this.raiseRecoverable(i.start, "Redefinition of property");
    } else
      c = t[s] = {
        init: !1,
        get: !1,
        set: !1
      };
    c[a] = !0;
  }
};
$.parseExpression = function(e, t) {
  var r = this.start, i = this.startLoc, s = this.parseMaybeAssign(e, t);
  if (this.type === h.comma) {
    var a = this.startNodeAt(r, i);
    for (a.expressions = [s]; this.eat(h.comma); )
      a.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(a, "SequenceExpression");
  }
  return s;
};
$.parseMaybeAssign = function(e, t, r) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var i = !1, s = -1, a = -1;
  t ? (s = t.parenthesizedAssign, a = t.trailingComma, t.parenthesizedAssign = t.trailingComma = -1) : (t = new Bt(), i = !0);
  var c = this.start, f = this.startLoc;
  (this.type === h.parenL || this.type === h.name) && (this.potentialArrowAt = this.start);
  var p = this.parseMaybeConditional(e, t);
  if (r && (p = r.call(this, p, c, f)), this.type.isAssign) {
    var y = this.startNodeAt(c, f);
    return y.operator = this.value, y.left = this.type === h.eq ? this.toAssignable(p, !1, t) : p, i || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= y.left.start && (t.shorthandAssign = -1), this.checkLVal(p), this.next(), y.right = this.parseMaybeAssign(e), this.finishNode(y, "AssignmentExpression");
  } else
    i && this.checkExpressionErrors(t, !0);
  return s > -1 && (t.parenthesizedAssign = s), a > -1 && (t.trailingComma = a), p;
};
$.parseMaybeConditional = function(e, t) {
  var r = this.start, i = this.startLoc, s = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t))
    return s;
  if (this.eat(h.question)) {
    var a = this.startNodeAt(r, i);
    return a.test = s, a.consequent = this.parseMaybeAssign(), this.expect(h.colon), a.alternate = this.parseMaybeAssign(e), this.finishNode(a, "ConditionalExpression");
  }
  return s;
};
$.parseExprOps = function(e, t) {
  var r = this.start, i = this.startLoc, s = this.parseMaybeUnary(t, !1);
  return this.checkExpressionErrors(t) || s.start === r && s.type === "ArrowFunctionExpression" ? s : this.parseExprOp(s, r, i, -1, e);
};
$.parseExprOp = function(e, t, r, i, s) {
  var a = this.type.binop;
  if (a != null && (!s || this.type !== h._in) && a > i) {
    var c = this.type === h.logicalOR || this.type === h.logicalAND, f = this.type === h.coalesce;
    f && (a = h.logicalAND.binop);
    var p = this.value;
    this.next();
    var y = this.start, g = this.startLoc, x = this.parseExprOp(this.parseMaybeUnary(null, !1), y, g, a, s), _ = this.buildBinary(t, r, e, x, p, c || f);
    return (c && this.type === h.coalesce || f && (this.type === h.logicalOR || this.type === h.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(_, t, r, i, s);
  }
  return e;
};
$.buildBinary = function(e, t, r, i, s, a) {
  var c = this.startNodeAt(e, t);
  return c.left = r, c.operator = s, c.right = i, this.finishNode(c, a ? "LogicalExpression" : "BinaryExpression");
};
$.parseMaybeUnary = function(e, t) {
  var r = this.start, i = this.startLoc, s;
  if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction))
    s = this.parseAwait(), t = !0;
  else if (this.type.prefix) {
    var a = this.startNode(), c = this.type === h.incDec;
    a.operator = this.value, a.prefix = !0, this.next(), a.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(e, !0), c ? this.checkLVal(a.argument) : this.strict && a.operator === "delete" && a.argument.type === "Identifier" ? this.raiseRecoverable(a.start, "Deleting local variable in strict mode") : t = !0, s = this.finishNode(a, c ? "UpdateExpression" : "UnaryExpression");
  } else {
    if (s = this.parseExprSubscripts(e), this.checkExpressionErrors(e))
      return s;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var f = this.startNodeAt(r, i);
      f.operator = this.value, f.prefix = !1, f.argument = s, this.checkLVal(s), this.next(), s = this.finishNode(f, "UpdateExpression");
    }
  }
  return !t && this.eat(h.starstar) ? this.buildBinary(r, i, s, this.parseMaybeUnary(null, !1), "**", !1) : s;
};
$.parseExprSubscripts = function(e) {
  var t = this.start, r = this.startLoc, i = this.parseExprAtom(e);
  if (i.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return i;
  var s = this.parseSubscripts(i, t, r);
  return e && s.type === "MemberExpression" && (e.parenthesizedAssign >= s.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= s.start && (e.parenthesizedBind = -1)), s;
};
$.parseSubscripts = function(e, t, r, i) {
  for (var s = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, a = !1; ; ) {
    var c = this.parseSubscript(e, t, r, i, s, a);
    if (c.optional && (a = !0), c === e || c.type === "ArrowFunctionExpression") {
      if (a) {
        var f = this.startNodeAt(t, r);
        f.expression = c, c = this.finishNode(f, "ChainExpression");
      }
      return c;
    }
    e = c;
  }
};
$.parseSubscript = function(e, t, r, i, s, a) {
  var c = this.options.ecmaVersion >= 11, f = c && this.eat(h.questionDot);
  i && f && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var p = this.eat(h.bracketL);
  if (p || f && this.type !== h.parenL && this.type !== h.backQuote || this.eat(h.dot)) {
    var y = this.startNodeAt(t, r);
    y.object = e, y.property = p ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never"), y.computed = !!p, p && this.expect(h.bracketR), c && (y.optional = f), e = this.finishNode(y, "MemberExpression");
  } else if (!i && this.eat(h.parenL)) {
    var g = new Bt(), x = this.yieldPos, _ = this.awaitPos, b = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var A = this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1, g);
    if (s && !f && !this.canInsertSemicolon() && this.eat(h.arrow))
      return this.checkPatternErrors(g, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = x, this.awaitPos = _, this.awaitIdentPos = b, this.parseArrowExpression(this.startNodeAt(t, r), A, !0);
    this.checkExpressionErrors(g, !0), this.yieldPos = x || this.yieldPos, this.awaitPos = _ || this.awaitPos, this.awaitIdentPos = b || this.awaitIdentPos;
    var v = this.startNodeAt(t, r);
    v.callee = e, v.arguments = A, c && (v.optional = f), e = this.finishNode(v, "CallExpression");
  } else if (this.type === h.backQuote) {
    (f || a) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var E = this.startNodeAt(t, r);
    E.tag = e, E.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(E, "TaggedTemplateExpression");
  }
  return e;
};
$.parseExprAtom = function(e) {
  this.type === h.slash && this.readRegexp();
  var t, r = this.potentialArrowAt === this.start;
  switch (this.type) {
    case h._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), t = this.startNode(), this.next(), this.type === h.parenL && !this.allowDirectSuper && this.raise(t.start, "super() call outside constructor of a subclass"), this.type !== h.dot && this.type !== h.bracketL && this.type !== h.parenL && this.unexpected(), this.finishNode(t, "Super");
    case h._this:
      return t = this.startNode(), this.next(), this.finishNode(t, "ThisExpression");
    case h.name:
      var i = this.start, s = this.startLoc, a = this.containsEsc, c = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !a && c.name === "async" && !this.canInsertSemicolon() && this.eat(h._function))
        return this.parseFunction(this.startNodeAt(i, s), 0, !1, !0);
      if (r && !this.canInsertSemicolon()) {
        if (this.eat(h.arrow))
          return this.parseArrowExpression(this.startNodeAt(i, s), [c], !1);
        if (this.options.ecmaVersion >= 8 && c.name === "async" && this.type === h.name && !a)
          return c = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(h.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(i, s), [c], !0);
      }
      return c;
    case h.regexp:
      var f = this.value;
      return t = this.parseLiteral(f.value), t.regex = { pattern: f.pattern, flags: f.flags }, t;
    case h.num:
    case h.string:
      return this.parseLiteral(this.value);
    case h._null:
    case h._true:
    case h._false:
      return t = this.startNode(), t.value = this.type === h._null ? null : this.type === h._true, t.raw = this.type.keyword, this.next(), this.finishNode(t, "Literal");
    case h.parenL:
      var p = this.start, y = this.parseParenAndDistinguishExpression(r);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(y) && (e.parenthesizedAssign = p), e.parenthesizedBind < 0 && (e.parenthesizedBind = p)), y;
    case h.bracketL:
      return t = this.startNode(), this.next(), t.elements = this.parseExprList(h.bracketR, !0, !0, e), this.finishNode(t, "ArrayExpression");
    case h.braceL:
      return this.parseObj(!1, e);
    case h._function:
      return t = this.startNode(), this.next(), this.parseFunction(t, 0);
    case h._class:
      return this.parseClass(this.startNode(), !1);
    case h._new:
      return this.parseNew();
    case h.backQuote:
      return this.parseTemplate();
    case h._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
    default:
      this.unexpected();
  }
};
$.parseExprImport = function() {
  var e = this.startNode();
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  var t = this.parseIdent(!0);
  switch (this.type) {
    case h.parenL:
      return this.parseDynamicImport(e);
    case h.dot:
      return e.meta = t, this.parseImportMeta(e);
    default:
      this.unexpected();
  }
};
$.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), !this.eat(h.parenR)) {
    var t = this.start;
    this.eat(h.comma) && this.eat(h.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
$.parseImportMeta = function(e) {
  this.next();
  var t = this.containsEsc;
  return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
};
$.parseLiteral = function(e) {
  var t = this.startNode();
  return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
};
$.parseParenExpression = function() {
  this.expect(h.parenL);
  var e = this.parseExpression();
  return this.expect(h.parenR), e;
};
$.parseParenAndDistinguishExpression = function(e) {
  var t = this.start, r = this.startLoc, i, s = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var a = this.start, c = this.startLoc, f = [], p = !0, y = !1, g = new Bt(), x = this.yieldPos, _ = this.awaitPos, b;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== h.parenR; )
      if (p ? p = !1 : this.expect(h.comma), s && this.afterTrailingComma(h.parenR, !0)) {
        y = !0;
        break;
      } else if (this.type === h.ellipsis) {
        b = this.start, f.push(this.parseParenItem(this.parseRestBinding())), this.type === h.comma && this.raise(this.start, "Comma is not permitted after the rest element");
        break;
      } else
        f.push(this.parseMaybeAssign(!1, g, this.parseParenItem));
    var A = this.start, v = this.startLoc;
    if (this.expect(h.parenR), e && !this.canInsertSemicolon() && this.eat(h.arrow))
      return this.checkPatternErrors(g, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = x, this.awaitPos = _, this.parseParenArrowList(t, r, f);
    (!f.length || y) && this.unexpected(this.lastTokStart), b && this.unexpected(b), this.checkExpressionErrors(g, !0), this.yieldPos = x || this.yieldPos, this.awaitPos = _ || this.awaitPos, f.length > 1 ? (i = this.startNodeAt(a, c), i.expressions = f, this.finishNodeAt(i, "SequenceExpression", A, v)) : i = f[0];
  } else
    i = this.parseParenExpression();
  if (this.options.preserveParens) {
    var E = this.startNodeAt(t, r);
    return E.expression = i, this.finishNode(E, "ParenthesizedExpression");
  } else
    return i;
};
$.parseParenItem = function(e) {
  return e;
};
$.parseParenArrowList = function(e, t, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), r);
};
var Ts = [];
$.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode(), t = this.parseIdent(!0);
  if (this.options.ecmaVersion >= 6 && this.eat(h.dot)) {
    e.meta = t;
    var r = this.containsEsc;
    return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), r && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.inNonArrowFunction() || this.raiseRecoverable(e.start, "'new.target' can only be used in functions"), this.finishNode(e, "MetaProperty");
  }
  var i = this.start, s = this.startLoc, a = this.type === h._import;
  return e.callee = this.parseSubscripts(this.parseExprAtom(), i, s, !0), a && e.callee.type === "ImportExpression" && this.raise(i, "Cannot use new with import()"), this.eat(h.parenL) ? e.arguments = this.parseExprList(h.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = Ts, this.finishNode(e, "NewExpression");
};
$.parseTemplateElement = function(e) {
  var t = e.isTagged, r = this.startNode();
  return this.type === h.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), r.value = {
    raw: this.value,
    cooked: null
  }) : r.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), r.tail = this.type === h.backQuote, this.finishNode(r, "TemplateElement");
};
$.parseTemplate = function(e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var r = this.startNode();
  this.next(), r.expressions = [];
  var i = this.parseTemplateElement({ isTagged: t });
  for (r.quasis = [i]; !i.tail; )
    this.type === h.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(h.dollarBraceL), r.expressions.push(this.parseExpression()), this.expect(h.braceR), r.quasis.push(i = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(r, "TemplateLiteral");
};
$.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === h.name || this.type === h.num || this.type === h.string || this.type === h.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === h.star) && !be.test(this.input.slice(this.lastTokEnd, this.start));
};
$.parseObj = function(e, t) {
  var r = this.startNode(), i = !0, s = {};
  for (r.properties = [], this.next(); !this.eat(h.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(h.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(h.braceR))
      break;
    var a = this.parseProperty(e, t);
    e || this.checkPropClash(a, s, t), r.properties.push(a);
  }
  return this.finishNode(r, e ? "ObjectPattern" : "ObjectExpression");
};
$.parseProperty = function(e, t) {
  var r = this.startNode(), i, s, a, c;
  if (this.options.ecmaVersion >= 9 && this.eat(h.ellipsis))
    return e ? (r.argument = this.parseIdent(!1), this.type === h.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(r, "RestElement")) : (this.type === h.parenL && t && (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start), t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)), r.argument = this.parseMaybeAssign(!1, t), this.type === h.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(r, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (r.method = !1, r.shorthand = !1, (e || t) && (a = this.start, c = this.startLoc), e || (i = this.eat(h.star)));
  var f = this.containsEsc;
  return this.parsePropertyName(r), !e && !f && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(r) ? (s = !0, i = this.options.ecmaVersion >= 9 && this.eat(h.star), this.parsePropertyName(r, t)) : s = !1, this.parsePropertyValue(r, e, i, s, a, c, t, f), this.finishNode(r, "Property");
};
$.parsePropertyValue = function(e, t, r, i, s, a, c, f) {
  if ((r || i) && this.type === h.colon && this.unexpected(), this.eat(h.colon))
    e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, c), e.kind = "init";
  else if (this.options.ecmaVersion >= 6 && this.type === h.parenL)
    t && this.unexpected(), e.kind = "init", e.method = !0, e.value = this.parseMethod(r, i);
  else if (!t && !f && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== h.comma && this.type !== h.braceR && this.type !== h.eq) {
    (r || i) && this.unexpected(), e.kind = e.key.name, this.parsePropertyName(e), e.value = this.parseMethod(!1);
    var p = e.kind === "get" ? 0 : 1;
    if (e.value.params.length !== p) {
      var y = e.value.start;
      e.kind === "get" ? this.raiseRecoverable(y, "getter should have no params") : this.raiseRecoverable(y, "setter should have exactly one param");
    } else
      e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
  } else
    this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((r || i) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = s), e.kind = "init", t ? e.value = this.parseMaybeDefault(s, a, e.key) : this.type === h.eq && c ? (c.shorthandAssign < 0 && (c.shorthandAssign = this.start), e.value = this.parseMaybeDefault(s, a, e.key)) : e.value = e.key, e.shorthand = !0) : this.unexpected();
};
$.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(h.bracketL))
      return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(h.bracketR), e.key;
    e.computed = !1;
  }
  return e.key = this.type === h.num || this.type === h.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
$.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
};
$.parseMethod = function(e, t, r) {
  var i = this.startNode(), s = this.yieldPos, a = this.awaitPos, c = this.awaitIdentPos;
  return this.initFunction(i), this.options.ecmaVersion >= 6 && (i.generator = e), this.options.ecmaVersion >= 8 && (i.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(yr(t, i.generator) | Pi | (r ? Ii : 0)), this.expect(h.parenL), i.params = this.parseBindingList(h.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(i, !1, !0), this.yieldPos = s, this.awaitPos = a, this.awaitIdentPos = c, this.finishNode(i, "FunctionExpression");
};
$.parseArrowExpression = function(e, t, r) {
  var i = this.yieldPos, s = this.awaitPos, a = this.awaitIdentPos;
  return this.enterScope(yr(r, !1) | ki), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!r), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1), this.yieldPos = i, this.awaitPos = s, this.awaitIdentPos = a, this.finishNode(e, "ArrowFunctionExpression");
};
$.parseFunctionBody = function(e, t, r) {
  var i = t && this.type !== h.braceL, s = this.strict, a = !1;
  if (i)
    e.body = this.parseMaybeAssign(), e.expression = !0, this.checkParams(e, !1);
  else {
    var c = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!s || c) && (a = this.strictDirective(this.end), a && c && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var f = this.labels;
    this.labels = [], a && (this.strict = !0), this.checkParams(e, !s && !a && !t && !r && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLVal(e.id, Oi), e.body = this.parseBlock(!1, void 0, a && !s), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = f;
  }
  this.exitScope();
};
$.isSimpleParamList = function(e) {
  for (var t = 0, r = e; t < r.length; t += 1) {
    var i = r[t];
    if (i.type !== "Identifier")
      return !1;
  }
  return !0;
};
$.checkParams = function(e, t) {
  for (var r = {}, i = 0, s = e.params; i < s.length; i += 1) {
    var a = s[i];
    this.checkLVal(a, vr, t ? null : r);
  }
};
$.parseExprList = function(e, t, r, i) {
  for (var s = [], a = !0; !this.eat(e); ) {
    if (a)
      a = !1;
    else if (this.expect(h.comma), t && this.afterTrailingComma(e))
      break;
    var c = void 0;
    r && this.type === h.comma ? c = null : this.type === h.ellipsis ? (c = this.parseSpread(i), i && this.type === h.comma && i.trailingComma < 0 && (i.trailingComma = this.start)) : c = this.parseMaybeAssign(!1, i), s.push(c);
  }
  return s;
};
$.checkUnreserved = function(e) {
  var t = e.start, r = e.end, i = e.name;
  if (this.inGenerator && i === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && i === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), this.keywords.test(i) && this.raise(t, "Unexpected keyword '" + i + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, r).indexOf("\\") !== -1)) {
    var s = this.strict ? this.reservedWordsStrict : this.reservedWords;
    s.test(i) && (!this.inAsync && i === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + i + "' is reserved"));
  }
};
$.parseIdent = function(e, t) {
  var r = this.startNode();
  return this.type === h.name ? r.name = this.value : this.type.keyword ? (r.name = this.type.keyword, (r.name === "class" || r.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop()) : this.unexpected(), this.next(!!e), this.finishNode(r, "Identifier"), e || (this.checkUnreserved(r), r.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = r.start)), r;
};
$.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === h.semi || this.canInsertSemicolon() || this.type !== h.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(h.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
};
$.parseAwait = function() {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeUnary(null, !1), this.finishNode(e, "AwaitExpression");
};
var It = ae.prototype;
It.raise = function(e, t) {
  var r = mr(this.input, e);
  t += " (" + r.line + ":" + r.column + ")";
  var i = new SyntaxError(t);
  throw i.pos = e, i.loc = r, i.raisedAt = this.pos, i;
};
It.raiseRecoverable = It.raise;
It.curPosition = function() {
  if (this.options.locations)
    return new tt(this.curLine, this.pos - this.lineStart);
};
var Ue = ae.prototype, Ps = function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [];
};
Ue.enterScope = function(e) {
  this.scopeStack.push(new Ps(e));
};
Ue.exitScope = function() {
  this.scopeStack.pop();
};
Ue.treatFunctionsAsVarInScope = function(e) {
  return e.flags & xt || !this.inModule && e.flags & dt;
};
Ue.declareName = function(e, t, r) {
  var i = !1;
  if (t === Fe) {
    var s = this.currentScope();
    i = s.lexical.indexOf(e) > -1 || s.functions.indexOf(e) > -1 || s.var.indexOf(e) > -1, s.lexical.push(e), this.inModule && s.flags & dt && delete this.undefinedExports[e];
  } else if (t === Li) {
    var a = this.currentScope();
    a.lexical.push(e);
  } else if (t === Ni) {
    var c = this.currentScope();
    this.treatFunctionsAsVar ? i = c.lexical.indexOf(e) > -1 : i = c.lexical.indexOf(e) > -1 || c.var.indexOf(e) > -1, c.functions.push(e);
  } else
    for (var f = this.scopeStack.length - 1; f >= 0; --f) {
      var p = this.scopeStack[f];
      if (p.lexical.indexOf(e) > -1 && !(p.flags & Ti && p.lexical[0] === e) || !this.treatFunctionsAsVarInScope(p) && p.functions.indexOf(e) > -1) {
        i = !0;
        break;
      }
      if (p.var.push(e), this.inModule && p.flags & dt && delete this.undefinedExports[e], p.flags & gr)
        break;
    }
  i && this.raiseRecoverable(r, "Identifier '" + e + "' has already been declared");
};
Ue.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
Ue.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
Ue.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & gr)
      return t;
  }
};
Ue.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & gr && !(t.flags & ki))
      return t;
  }
};
var Dt = function(t, r, i) {
  this.type = "", this.start = r, this.end = 0, t.options.locations && (this.loc = new vt(t, i)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [r, 0]);
}, Vt = ae.prototype;
Vt.startNode = function() {
  return new Dt(this, this.start, this.startLoc);
};
Vt.startNodeAt = function(e, t) {
  return new Dt(this, e, t);
};
function Fi(e, t, r, i) {
  return e.type = t, e.end = r, this.options.locations && (e.loc.end = i), this.options.ranges && (e.range[1] = r), e;
}
Vt.finishNode = function(e, t) {
  return Fi.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
Vt.finishNodeAt = function(e, t, r, i) {
  return Fi.call(this, e, t, r, i);
};
var Ce = function(t, r, i, s, a) {
  this.token = t, this.isExpr = !!r, this.preserveSpace = !!i, this.override = s, this.generator = !!a;
}, oe = {
  b_stat: new Ce("{", !1),
  b_expr: new Ce("{", !0),
  b_tmpl: new Ce("${", !1),
  p_stat: new Ce("(", !1),
  p_expr: new Ce("(", !0),
  q_tmpl: new Ce("`", !0, !0, function(e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new Ce("function", !1),
  f_expr: new Ce("function", !0),
  f_expr_gen: new Ce("function", !0, !1, null, !0),
  f_gen: new Ce("function", !1, !1, null, !0)
}, jt = ae.prototype;
jt.initialContext = function() {
  return [oe.b_stat];
};
jt.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === oe.f_expr || t === oe.f_stat ? !0 : e === h.colon && (t === oe.b_stat || t === oe.b_expr) ? !t.isExpr : e === h._return || e === h.name && this.exprAllowed ? be.test(this.input.slice(this.lastTokEnd, this.start)) : e === h._else || e === h.semi || e === h.eof || e === h.parenR || e === h.arrow ? !0 : e === h.braceL ? t === oe.b_stat : e === h._var || e === h._const || e === h.name ? !1 : !this.exprAllowed;
};
jt.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function")
      return t.generator;
  }
  return !1;
};
jt.updateContext = function(e) {
  var t, r = this.type;
  r.keyword && e === h.dot ? this.exprAllowed = !1 : (t = r.updateContext) ? t.call(this, e) : this.exprAllowed = r.beforeExpr;
};
h.parenR.updateContext = h.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === oe.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
};
h.braceL.updateContext = function(e) {
  this.context.push(this.braceIsBlock(e) ? oe.b_stat : oe.b_expr), this.exprAllowed = !0;
};
h.dollarBraceL.updateContext = function() {
  this.context.push(oe.b_tmpl), this.exprAllowed = !0;
};
h.parenL.updateContext = function(e) {
  var t = e === h._if || e === h._for || e === h._with || e === h._while;
  this.context.push(t ? oe.p_stat : oe.p_expr), this.exprAllowed = !0;
};
h.incDec.updateContext = function() {
};
h._function.updateContext = h._class.updateContext = function(e) {
  e.beforeExpr && e !== h.semi && e !== h._else && !(e === h._return && be.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === h.colon || e === h.braceL) && this.curContext() === oe.b_stat) ? this.context.push(oe.f_expr) : this.context.push(oe.f_stat), this.exprAllowed = !1;
};
h.backQuote.updateContext = function() {
  this.curContext() === oe.q_tmpl ? this.context.pop() : this.context.push(oe.q_tmpl), this.exprAllowed = !1;
};
h.star.updateContext = function(e) {
  if (e === h._function) {
    var t = this.context.length - 1;
    this.context[t] === oe.f_expr ? this.context[t] = oe.f_expr_gen : this.context[t] = oe.f_gen;
  }
  this.exprAllowed = !0;
};
h.name.updateContext = function(e) {
  var t = !1;
  this.options.ecmaVersion >= 6 && e !== h.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
};
var Mi = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", Bi = Mi + " Extended_Pictographic", Is = Bi, Ns = {
  9: Mi,
  10: Bi,
  11: Is
}, Kr = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", Di = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", Vi = Di + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", Ls = Vi + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", Os = {
  9: Di,
  10: Vi,
  11: Ls
}, ji = {};
function br(e) {
  var t = ji[e] = {
    binary: ze(Ns[e] + " " + Kr),
    nonBinary: {
      General_Category: ze(Kr),
      Script: ze(Os[e])
    }
  };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
br(9);
br(10);
br(11);
var q = ae.prototype, De = function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : ""), this.unicodeProperties = ji[t.options.ecmaVersion >= 11 ? 11 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = [];
};
De.prototype.reset = function(t, r, i) {
  var s = i.indexOf("u") !== -1;
  this.start = t | 0, this.source = r + "", this.flags = i, this.switchU = s && this.parser.options.ecmaVersion >= 6, this.switchN = s && this.parser.options.ecmaVersion >= 9;
};
De.prototype.raise = function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
De.prototype.at = function(t, r) {
  r === void 0 && (r = !1);
  var i = this.source, s = i.length;
  if (t >= s)
    return -1;
  var a = i.charCodeAt(t);
  if (!(r || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= s)
    return a;
  var c = i.charCodeAt(t + 1);
  return c >= 56320 && c <= 57343 ? (a << 10) + c - 56613888 : a;
};
De.prototype.nextIndex = function(t, r) {
  r === void 0 && (r = !1);
  var i = this.source, s = i.length;
  if (t >= s)
    return s;
  var a = i.charCodeAt(t), c;
  return !(r || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= s || (c = i.charCodeAt(t + 1)) < 56320 || c > 57343 ? t + 1 : t + 2;
};
De.prototype.current = function(t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
De.prototype.lookahead = function(t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
De.prototype.advance = function(t) {
  t === void 0 && (t = !1), this.pos = this.nextIndex(this.pos, t);
};
De.prototype.eat = function(t, r) {
  return r === void 0 && (r = !1), this.current(r) === t ? (this.advance(r), !0) : !1;
};
function Nt(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
q.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, r = e.flags, i = 0; i < r.length; i++) {
    var s = r.charAt(i);
    t.indexOf(s) === -1 && this.raise(e.start, "Invalid regular expression flag"), r.indexOf(s, i + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag");
  }
};
q.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0 && (e.switchN = !0, this.regexp_pattern(e));
};
q.regexp_pattern = function(e) {
  e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames.length = 0, e.backReferenceNames.length = 0, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(
    41
    /* ) */
  ) && e.raise("Unmatched ')'"), (e.eat(
    93
    /* ] */
  ) || e.eat(
    125
    /* } */
  )) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var t = 0, r = e.backReferenceNames; t < r.length; t += 1) {
    var i = r[t];
    e.groupNames.indexOf(i) === -1 && e.raise("Invalid named capture referenced");
  }
};
q.regexp_disjunction = function(e) {
  for (this.regexp_alternative(e); e.eat(
    124
    /* | */
  ); )
    this.regexp_alternative(e);
  this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(
    123
    /* { */
  ) && e.raise("Lone quantifier brackets");
};
q.regexp_alternative = function(e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); )
    ;
};
q.regexp_eatTerm = function(e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), !0) : !1;
};
q.regexp_eatAssertion = function(e) {
  var t = e.pos;
  if (e.lastAssertionIsQuantifiable = !1, e.eat(
    94
    /* ^ */
  ) || e.eat(
    36
    /* $ */
  ))
    return !0;
  if (e.eat(
    92
    /* \ */
  )) {
    if (e.eat(
      66
      /* B */
    ) || e.eat(
      98
      /* b */
    ))
      return !0;
    e.pos = t;
  }
  if (e.eat(
    40
    /* ( */
  ) && e.eat(
    63
    /* ? */
  )) {
    var r = !1;
    if (this.options.ecmaVersion >= 9 && (r = e.eat(
      60
      /* < */
    )), e.eat(
      61
      /* = */
    ) || e.eat(
      33
      /* ! */
    ))
      return this.regexp_disjunction(e), e.eat(
        41
        /* ) */
      ) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !r, !0;
  }
  return e.pos = t, !1;
};
q.regexp_eatQuantifier = function(e, t) {
  return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(
    63
    /* ? */
  ), !0) : !1;
};
q.regexp_eatQuantifierPrefix = function(e, t) {
  return e.eat(
    42
    /* * */
  ) || e.eat(
    43
    /* + */
  ) || e.eat(
    63
    /* ? */
  ) || this.regexp_eatBracedQuantifier(e, t);
};
q.regexp_eatBracedQuantifier = function(e, t) {
  var r = e.pos;
  if (e.eat(
    123
    /* { */
  )) {
    var i = 0, s = -1;
    if (this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue, e.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(e) && (s = e.lastIntValue), e.eat(
      125
      /* } */
    )))
      return s !== -1 && s < i && !t && e.raise("numbers out of order in {} quantifier"), !0;
    e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = r;
  }
  return !1;
};
q.regexp_eatAtom = function(e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
};
q.regexp_eatReverseSolidusAtomEscape = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatAtomEscape(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
q.regexp_eatUncapturingGroup = function(e) {
  var t = e.pos;
  if (e.eat(
    40
    /* ( */
  )) {
    if (e.eat(
      63
      /* ? */
    ) && e.eat(
      58
      /* : */
    )) {
      if (this.regexp_disjunction(e), e.eat(
        41
        /* ) */
      ))
        return !0;
      e.raise("Unterminated group");
    }
    e.pos = t;
  }
  return !1;
};
q.regexp_eatCapturingGroup = function(e) {
  if (e.eat(
    40
    /* ( */
  )) {
    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(
      41
      /* ) */
    ))
      return e.numCapturingParens += 1, !0;
    e.raise("Unterminated group");
  }
  return !1;
};
q.regexp_eatExtendedAtom = function(e) {
  return e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
};
q.regexp_eatInvalidBracedQuantifier = function(e) {
  return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
};
q.regexp_eatSyntaxCharacter = function(e) {
  var t = e.current();
  return qi(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function qi(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
q.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, r = 0; (r = e.current()) !== -1 && !qi(r); )
    e.advance();
  return e.pos !== t;
};
q.regexp_eatExtendedPatternCharacter = function(e) {
  var t = e.current();
  return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 ? (e.advance(), !0) : !1;
};
q.regexp_groupSpecifier = function(e) {
  if (e.eat(
    63
    /* ? */
  )) {
    if (this.regexp_eatGroupName(e)) {
      e.groupNames.indexOf(e.lastStringValue) !== -1 && e.raise("Duplicate capture group name"), e.groupNames.push(e.lastStringValue);
      return;
    }
    e.raise("Invalid group");
  }
};
q.regexp_eatGroupName = function(e) {
  if (e.lastStringValue = "", e.eat(
    60
    /* < */
  )) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(
      62
      /* > */
    ))
      return !0;
    e.raise("Invalid capture group name");
  }
  return !1;
};
q.regexp_eatRegExpIdentifierName = function(e) {
  if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += Nt(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += Nt(e.lastIntValue);
    return !0;
  }
  return !1;
};
q.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, r = this.options.ecmaVersion >= 11, i = e.current(r);
  return e.advance(r), i === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (i = e.lastIntValue), Rs(i) ? (e.lastIntValue = i, !0) : (e.pos = t, !1);
};
function Rs(e) {
  return Me(e, !0) || e === 36 || e === 95;
}
q.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, r = this.options.ecmaVersion >= 11, i = e.current(r);
  return e.advance(r), i === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (i = e.lastIntValue), Fs(i) ? (e.lastIntValue = i, !0) : (e.pos = t, !1);
};
function Fs(e) {
  return We(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
q.regexp_eatAtomEscape = function(e) {
  return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? !0 : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
};
q.regexp_eatBackReference = function(e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var r = e.lastIntValue;
    if (e.switchU)
      return r > e.maxBackReference && (e.maxBackReference = r), !0;
    if (r <= e.numCapturingParens)
      return !0;
    e.pos = t;
  }
  return !1;
};
q.regexp_eatKGroupName = function(e) {
  if (e.eat(
    107
    /* k */
  )) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise("Invalid named reference");
  }
  return !1;
};
q.regexp_eatCharacterEscape = function(e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
};
q.regexp_eatCControlLetter = function(e) {
  var t = e.pos;
  if (e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatControlLetter(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
q.regexp_eatZero = function(e) {
  return e.current() === 48 && !qt(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), !0) : !1;
};
q.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 ? (e.lastIntValue = 13, e.advance(), !0) : !1;
};
q.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return Ui(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function Ui(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
q.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
  t === void 0 && (t = !1);
  var r = e.pos, i = t || e.switchU;
  if (e.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var s = e.lastIntValue;
      if (i && s >= 55296 && s <= 56319) {
        var a = e.pos;
        if (e.eat(
          92
          /* \ */
        ) && e.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(e, 4)) {
          var c = e.lastIntValue;
          if (c >= 56320 && c <= 57343)
            return e.lastIntValue = (s - 55296) * 1024 + (c - 56320) + 65536, !0;
        }
        e.pos = a, e.lastIntValue = s;
      }
      return !0;
    }
    if (i && e.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(e) && e.eat(
      125
      /* } */
    ) && Ms(e.lastIntValue))
      return !0;
    i && e.raise("Invalid unicode escape"), e.pos = r;
  }
  return !1;
};
function Ms(e) {
  return e >= 0 && e <= 1114111;
}
q.regexp_eatIdentityEscape = function(e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(
      47
      /* / */
    ) ? (e.lastIntValue = 47, !0) : !1;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
q.regexp_eatDecimalEscape = function(e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do
      e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
    while ((t = e.current()) >= 48 && t <= 57);
    return !0;
  }
  return !1;
};
q.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (Bs(t))
    return e.lastIntValue = -1, e.advance(), !0;
  if (e.switchU && this.options.ecmaVersion >= 9 && (t === 80 || t === 112)) {
    if (e.lastIntValue = -1, e.advance(), e.eat(
      123
      /* { */
    ) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(
      125
      /* } */
    ))
      return !0;
    e.raise("Invalid property name");
  }
  return !1;
};
function Bs(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
q.regexp_eatUnicodePropertyValueExpression = function(e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(
    61
    /* = */
  )) {
    var r = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var i = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, r, i), !0;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var s = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, s), !0;
  }
  return !1;
};
q.regexp_validateUnicodePropertyNameAndValue = function(e, t, r) {
  Mt(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(r) || e.raise("Invalid property value");
};
q.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  e.unicodeProperties.binary.test(t) || e.raise("Invalid property name");
};
q.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Gi(t = e.current()); )
    e.lastStringValue += Nt(t), e.advance();
  return e.lastStringValue !== "";
};
function Gi(e) {
  return Ui(e) || e === 95;
}
q.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Ds(t = e.current()); )
    e.lastStringValue += Nt(t), e.advance();
  return e.lastStringValue !== "";
};
function Ds(e) {
  return Gi(e) || qt(e);
}
q.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
q.regexp_eatCharacterClass = function(e) {
  if (e.eat(
    91
    /* [ */
  )) {
    if (e.eat(
      94
      /* ^ */
    ), this.regexp_classRanges(e), e.eat(
      93
      /* ] */
    ))
      return !0;
    e.raise("Unterminated character class");
  }
  return !1;
};
q.regexp_classRanges = function(e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(e)) {
      var r = e.lastIntValue;
      e.switchU && (t === -1 || r === -1) && e.raise("Invalid character class"), t !== -1 && r !== -1 && t > r && e.raise("Range out of order in character class");
    }
  }
};
q.regexp_eatClassAtom = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(e))
      return !0;
    if (e.switchU) {
      var r = e.current();
      (r === 99 || $i(r)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var i = e.current();
  return i !== 93 ? (e.lastIntValue = i, e.advance(), !0) : !1;
};
q.regexp_eatClassEscape = function(e) {
  var t = e.pos;
  if (e.eat(
    98
    /* b */
  ))
    return e.lastIntValue = 8, !0;
  if (e.switchU && e.eat(
    45
    /* - */
  ))
    return e.lastIntValue = 45, !0;
  if (!e.switchU && e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatClassControlLetter(e))
      return !0;
    e.pos = t;
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
};
q.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return qt(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
q.regexp_eatHexEscapeSequence = function(e) {
  var t = e.pos;
  if (e.eat(
    120
    /* x */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 2))
      return !0;
    e.switchU && e.raise("Invalid escape"), e.pos = t;
  }
  return !1;
};
q.regexp_eatDecimalDigits = function(e) {
  var t = e.pos, r = 0;
  for (e.lastIntValue = 0; qt(r = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (r - 48), e.advance();
  return e.pos !== t;
};
function qt(e) {
  return e >= 48 && e <= 57;
}
q.regexp_eatHexDigits = function(e) {
  var t = e.pos, r = 0;
  for (e.lastIntValue = 0; zi(r = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + Wi(r), e.advance();
  return e.pos !== t;
};
function zi(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function Wi(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
q.regexp_eatLegacyOctalEscapeSequence = function(e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var r = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = t * 64 + r * 8 + e.lastIntValue : e.lastIntValue = t * 8 + r;
    } else
      e.lastIntValue = t;
    return !0;
  }
  return !1;
};
q.regexp_eatOctalDigit = function(e) {
  var t = e.current();
  return $i(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function $i(e) {
  return e >= 48 && e <= 55;
}
q.regexp_eatFixedHexDigits = function(e, t) {
  var r = e.pos;
  e.lastIntValue = 0;
  for (var i = 0; i < t; ++i) {
    var s = e.current();
    if (!zi(s))
      return e.pos = r, !1;
    e.lastIntValue = 16 * e.lastIntValue + Wi(s), e.advance();
  }
  return !0;
};
var Ut = function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new vt(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, Y = ae.prototype;
Y.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Ut(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
Y.getToken = function() {
  return this.next(), new Ut(this);
};
typeof Symbol < "u" && (Y[Symbol.iterator] = function() {
  var e = this;
  return {
    next: function() {
      var t = e.getToken();
      return {
        done: t.type === h.eof,
        value: t
      };
    }
  };
});
Y.curContext = function() {
  return this.context[this.context.length - 1];
};
Y.nextToken = function() {
  var e = this.curContext();
  if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(h.eof);
  if (e.override)
    return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
Y.readToken = function(e) {
  return Me(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
Y.fullCharCodeAtPos = function() {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 57344)
    return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return (e << 10) + t - 56613888;
};
Y.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), t = this.pos, r = this.input.indexOf("*/", this.pos += 2);
  if (r === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = r + 2, this.options.locations) {
    et.lastIndex = t;
    for (var i; (i = et.exec(this.input)) && i.index < this.pos; )
      ++this.curLine, this.lineStart = i.index + i[0].length;
  }
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(t + 2, r),
    t,
    this.pos,
    e,
    this.curPosition()
  );
};
Y.skipLineComment = function(e) {
  for (var t = this.pos, r = this.options.onComment && this.curPosition(), i = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !nt(i); )
    i = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(t + e, this.pos),
    t,
    this.pos,
    r,
    this.curPosition()
  );
};
Y.skipSpace = function() {
  e:
    for (; this.pos < this.input.length; ) {
      var e = this.input.charCodeAt(this.pos);
      switch (e) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
        case 10:
        case 8232:
        case 8233:
          ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break e;
          }
          break;
        default:
          if (e > 8 && e < 14 || e >= 5760 && dr.test(String.fromCharCode(e)))
            ++this.pos;
          else
            break e;
      }
    }
};
Y.finishToken = function(e, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  this.type = e, this.value = t, this.updateContext(r);
};
Y.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57)
    return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(h.ellipsis)) : (++this.pos, this.finishToken(h.dot));
};
Y.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.slash, 1);
};
Y.readToken_mult_modulo_exp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), r = 1, i = e === 42 ? h.star : h.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++r, i = h.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(h.assign, r + 1) : this.finishOp(i, r);
};
Y.readToken_pipe_amp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61)
        return this.finishOp(h.assign, 3);
    }
    return this.finishOp(e === 124 ? h.logicalOR : h.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(h.assign, 2) : this.finishOp(e === 124 ? h.bitwiseOR : h.bitwiseAND, 1);
};
Y.readToken_caret = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.bitwiseXOR, 1);
};
Y.readToken_plus_min = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || be.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(h.incDec, 2) : t === 61 ? this.finishOp(h.assign, 2) : this.finishOp(h.plusMin, 1);
};
Y.readToken_lt_gt = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), r = 1;
  return t === e ? (r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + r) === 61 ? this.finishOp(h.assign, r + 1) : this.finishOp(h.bitShift, r)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (r = 2), this.finishOp(h.relational, r));
};
Y.readToken_eq_excl = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(h.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(h.arrow)) : this.finishOp(e === 61 ? h.eq : h.prefix, 1);
};
Y.readToken_question = function() {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57)
        return this.finishOp(h.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var i = this.input.charCodeAt(this.pos + 2);
        if (i === 61)
          return this.finishOp(h.assign, 3);
      }
      return this.finishOp(h.coalesce, 2);
    }
  }
  return this.finishOp(h.question, 1);
};
Y.getTokenFromCode = function(e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(h.parenL);
    case 41:
      return ++this.pos, this.finishToken(h.parenR);
    case 59:
      return ++this.pos, this.finishToken(h.semi);
    case 44:
      return ++this.pos, this.finishToken(h.comma);
    case 91:
      return ++this.pos, this.finishToken(h.bracketL);
    case 93:
      return ++this.pos, this.finishToken(h.bracketR);
    case 123:
      return ++this.pos, this.finishToken(h.braceL);
    case 125:
      return ++this.pos, this.finishToken(h.braceR);
    case 58:
      return ++this.pos, this.finishToken(h.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(h.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88)
        return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79)
          return this.readRadixNumber(8);
        if (t === 98 || t === 66)
          return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(h.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + Sr(e) + "'");
};
Y.finishOp = function(e, t) {
  var r = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, r);
};
Y.readRegexp = function() {
  for (var e, t, r = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(r, "Unterminated regular expression");
    var i = this.input.charAt(this.pos);
    if (be.test(i) && this.raise(r, "Unterminated regular expression"), e)
      e = !1;
    else {
      if (i === "[")
        t = !0;
      else if (i === "]" && t)
        t = !1;
      else if (i === "/" && !t)
        break;
      e = i === "\\";
    }
    ++this.pos;
  }
  var s = this.input.slice(r, this.pos);
  ++this.pos;
  var a = this.pos, c = this.readWord1();
  this.containsEsc && this.unexpected(a);
  var f = this.regexpState || (this.regexpState = new De(this));
  f.reset(r, s, c), this.validateRegExpFlags(f), this.validateRegExpPattern(f);
  var p = null;
  try {
    p = new RegExp(s, c);
  } catch {
  }
  return this.finishToken(h.regexp, { pattern: s, flags: c, value: p });
};
Y.readInt = function(e, t, r) {
  for (var i = this.options.ecmaVersion >= 12 && t === void 0, s = r && this.input.charCodeAt(this.pos) === 48, a = this.pos, c = 0, f = 0, p = 0, y = t ?? 1 / 0; p < y; ++p, ++this.pos) {
    var g = this.input.charCodeAt(this.pos), x = void 0;
    if (i && g === 95) {
      s && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), f === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), p === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), f = g;
      continue;
    }
    if (g >= 97 ? x = g - 97 + 10 : g >= 65 ? x = g - 65 + 10 : g >= 48 && g <= 57 ? x = g - 48 : x = 1 / 0, x >= e)
      break;
    f = g, c = c * e + x;
  }
  return i && f === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === a || t != null && this.pos - a !== t ? null : c;
};
function Vs(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function Ji(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
Y.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var r = this.readInt(e);
  return r == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (r = Ji(this.input.slice(t, this.pos)), ++this.pos) : Me(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(h.num, r);
};
Y.readNumber = function(e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
  var r = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  r && this.strict && this.raise(t, "Invalid number");
  var i = this.input.charCodeAt(this.pos);
  if (!r && !e && this.options.ecmaVersion >= 11 && i === 110) {
    var s = Ji(this.input.slice(t, this.pos));
    return ++this.pos, Me(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(h.num, s);
  }
  r && /[89]/.test(this.input.slice(t, this.pos)) && (r = !1), i === 46 && !r && (++this.pos, this.readInt(10), i = this.input.charCodeAt(this.pos)), (i === 69 || i === 101) && !r && (i = this.input.charCodeAt(++this.pos), (i === 43 || i === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), Me(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var a = Vs(this.input.slice(t, this.pos), r);
  return this.finishToken(h.num, a);
};
Y.readCodePoint = function() {
  var e = this.input.charCodeAt(this.pos), t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(r, "Code point out of bounds");
  } else
    t = this.readHexChar(4);
  return t;
};
function Sr(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
Y.readString = function(e) {
  for (var t = "", r = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var i = this.input.charCodeAt(this.pos);
    if (i === e)
      break;
    i === 92 ? (t += this.input.slice(r, this.pos), t += this.readEscapedChar(!1), r = this.pos) : (nt(i, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(r, this.pos++), this.finishToken(h.string, t);
};
var Xi = {};
Y.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === Xi)
      this.readInvalidTemplateToken();
    else
      throw e;
  }
  this.inTemplateElement = !1;
};
Y.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw Xi;
  this.raise(e, t);
};
Y.readTmplToken = function() {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || r === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === h.template || this.type === h.invalidTemplate) ? r === 36 ? (this.pos += 2, this.finishToken(h.dollarBraceL)) : (++this.pos, this.finishToken(h.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(h.template, e));
    if (r === 92)
      e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
    else if (nt(r)) {
      switch (e += this.input.slice(t, this.pos), ++this.pos, r) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
    } else
      ++this.pos;
  }
};
Y.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{")
          break;
      case "`":
        return this.finishToken(h.invalidTemplate, this.input.slice(this.start, this.pos));
    }
  this.raise(this.start, "Unterminated template");
};
Y.readEscapedChar = function(e) {
  var t = this.input.charCodeAt(++this.pos);
  switch (++this.pos, t) {
    case 110:
      return `
`;
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return Sr(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
    case 56:
    case 57:
      if (e) {
        var r = this.pos - 1;
        return this.invalidStringToken(
          r,
          "Invalid escape sequence in template string"
        ), null;
      }
    default:
      if (t >= 48 && t <= 55) {
        var i = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], s = parseInt(i, 8);
        return s > 255 && (i = i.slice(0, -1), s = parseInt(i, 8)), this.pos += i.length - 1, t = this.input.charCodeAt(this.pos), (i !== "0" || t === 56 || t === 57) && (this.strict || e) && this.invalidStringToken(
          this.pos - 1 - i.length,
          e ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(s);
      }
      return nt(t) ? "" : String.fromCharCode(t);
  }
};
Y.readHexChar = function(e) {
  var t = this.pos, r = this.readInt(16, e);
  return r === null && this.invalidStringToken(t, "Bad character escape sequence"), r;
};
Y.readWord1 = function() {
  this.containsEsc = !1;
  for (var e = "", t = !0, r = this.pos, i = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var s = this.fullCharCodeAtPos();
    if (We(s, i))
      this.pos += s <= 65535 ? 1 : 2;
    else if (s === 92) {
      this.containsEsc = !0, e += this.input.slice(r, this.pos);
      var a = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var c = this.readCodePoint();
      (t ? Me : We)(c, i) || this.invalidStringToken(a, "Invalid Unicode escape"), e += Sr(c), r = this.pos;
    } else
      break;
    t = !1;
  }
  return e + this.input.slice(r, this.pos);
};
Y.readWord = function() {
  var e = this.readWord1(), t = h.name;
  return this.keywords.test(e) && (t = Ft[e]), this.finishToken(t, e);
};
var Yi = "7.4.1";
ae.acorn = {
  Parser: ae,
  version: Yi,
  defaultOptions: Pt,
  Position: tt,
  SourceLocation: vt,
  getLineInfo: mr,
  Node: Dt,
  TokenType: K,
  tokTypes: h,
  keywordTypes: Ft,
  TokContext: Ce,
  tokContexts: oe,
  isIdentifierChar: We,
  isIdentifierStart: Me,
  Token: Ut,
  isNewLine: nt,
  lineBreak: be,
  lineBreakG: et,
  nonASCIIwhitespace: dr
};
function js(e, t) {
  return ae.parse(e, t);
}
function qs(e, t, r) {
  return ae.parseExpressionAt(e, t, r);
}
function Us(e, t) {
  return ae.tokenizer(e, t);
}
const Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node: Dt,
  Parser: ae,
  Position: tt,
  SourceLocation: vt,
  TokContext: Ce,
  Token: Ut,
  TokenType: K,
  defaultOptions: Pt,
  getLineInfo: mr,
  isIdentifierChar: We,
  isIdentifierStart: Me,
  isNewLine: nt,
  keywordTypes: Ft,
  lineBreak: be,
  lineBreakG: et,
  nonASCIIwhitespace: dr,
  parse: js,
  parseExpressionAt: qs,
  tokContexts: oe,
  tokTypes: h,
  tokenizer: Us,
  version: Yi
}, Symbol.toStringTag, { value: "Module" }));
var Hi = { exports: {} }, zs = {
  quot: '"',
  amp: "&",
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: " ",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  times: "×",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  divide: "÷",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  fnof: "ƒ",
  circ: "ˆ",
  tilde: "˜",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  bull: "•",
  hellip: "…",
  permil: "‰",
  prime: "′",
  Prime: "″",
  lsaquo: "‹",
  rsaquo: "›",
  oline: "‾",
  frasl: "⁄",
  euro: "€",
  image: "ℑ",
  weierp: "℘",
  real: "ℜ",
  trade: "™",
  alefsym: "ℵ",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lArr: "⇐",
  uArr: "⇑",
  rArr: "⇒",
  dArr: "⇓",
  hArr: "⇔",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  int: "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  lang: "〈",
  rang: "〉",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦"
};
const Zr = /* @__PURE__ */ Un(Gs);
(function(e) {
  const t = zs, r = /^[\da-fA-F]+$/, i = /^\d+$/, s = /* @__PURE__ */ new WeakMap();
  function a(p) {
    p = p.Parser.acorn || p;
    let y = s.get(p);
    if (!y) {
      const g = p.tokTypes, x = p.TokContext, _ = p.TokenType, b = new x("<tag", !1), A = new x("</tag", !1), v = new x("<tag>...</tag>", !0, !0), E = {
        tc_oTag: b,
        tc_cTag: A,
        tc_expr: v
      }, N = {
        jsxName: new _("jsxName"),
        jsxText: new _("jsxText", { beforeExpr: !0 }),
        jsxTagStart: new _("jsxTagStart", { startsExpr: !0 }),
        jsxTagEnd: new _("jsxTagEnd")
      };
      N.jsxTagStart.updateContext = function() {
        this.context.push(v), this.context.push(b), this.exprAllowed = !1;
      }, N.jsxTagEnd.updateContext = function(L) {
        let j = this.context.pop();
        j === b && L === g.slash || j === A ? (this.context.pop(), this.exprAllowed = this.curContext() === v) : this.exprAllowed = !0;
      }, y = { tokContexts: E, tokTypes: N }, s.set(p, y);
    }
    return y;
  }
  function c(p) {
    if (!p)
      return p;
    if (p.type === "JSXIdentifier")
      return p.name;
    if (p.type === "JSXNamespacedName")
      return p.namespace.name + ":" + p.name.name;
    if (p.type === "JSXMemberExpression")
      return c(p.object) + "." + c(p.property);
  }
  e.exports = function(p) {
    return p = p || {}, function(y) {
      return f({
        allowNamespaces: p.allowNamespaces !== !1,
        allowNamespacedObjects: !!p.allowNamespacedObjects
      }, y);
    };
  }, Object.defineProperty(e.exports, "tokTypes", {
    get: function() {
      return a(Zr).tokTypes;
    },
    configurable: !0,
    enumerable: !0
  });
  function f(p, y) {
    const g = y.acorn || Zr, x = a(g), _ = g.tokTypes, b = x.tokTypes, A = g.tokContexts, v = x.tokContexts.tc_oTag, E = x.tokContexts.tc_cTag, N = x.tokContexts.tc_expr, L = g.isNewLine, j = g.isIdentifierStart, w = g.isIdentifierChar;
    return class extends y {
      // Expose actual `tokTypes` and `tokContexts` to other plugins.
      static get acornJsx() {
        return x;
      }
      // Reads inline JSX contents token.
      jsx_readToken() {
        let m = "", S = this.pos;
        for (; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
          let C = this.input.charCodeAt(this.pos);
          switch (C) {
            case 60:
            case 123:
              return this.pos === this.start ? C === 60 && this.exprAllowed ? (++this.pos, this.finishToken(b.jsxTagStart)) : this.getTokenFromCode(C) : (m += this.input.slice(S, this.pos), this.finishToken(b.jsxText, m));
            case 38:
              m += this.input.slice(S, this.pos), m += this.jsx_readEntity(), S = this.pos;
              break;
            case 62:
            case 125:
              this.raise(
                this.pos,
                "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (C === 62 ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?'
              );
            default:
              L(C) ? (m += this.input.slice(S, this.pos), m += this.jsx_readNewLine(!0), S = this.pos) : ++this.pos;
          }
        }
      }
      jsx_readNewLine(m) {
        let S = this.input.charCodeAt(this.pos), C;
        return ++this.pos, S === 13 && this.input.charCodeAt(this.pos) === 10 ? (++this.pos, C = m ? `
` : `\r
`) : C = String.fromCharCode(S), this.options.locations && (++this.curLine, this.lineStart = this.pos), C;
      }
      jsx_readString(m) {
        let S = "", C = ++this.pos;
        for (; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
          let k = this.input.charCodeAt(this.pos);
          if (k === m)
            break;
          k === 38 ? (S += this.input.slice(C, this.pos), S += this.jsx_readEntity(), C = this.pos) : L(k) ? (S += this.input.slice(C, this.pos), S += this.jsx_readNewLine(!1), C = this.pos) : ++this.pos;
        }
        return S += this.input.slice(C, this.pos++), this.finishToken(_.string, S);
      }
      jsx_readEntity() {
        let m = "", S = 0, C, k = this.input[this.pos];
        k !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
        let D = ++this.pos;
        for (; this.pos < this.input.length && S++ < 10; ) {
          if (k = this.input[this.pos++], k === ";") {
            m[0] === "#" ? m[1] === "x" ? (m = m.substr(2), r.test(m) && (C = String.fromCharCode(parseInt(m, 16)))) : (m = m.substr(1), i.test(m) && (C = String.fromCharCode(parseInt(m, 10)))) : C = t[m];
            break;
          }
          m += k;
        }
        return C || (this.pos = D, "&");
      }
      // Read a JSX identifier (valid tag or attribute name).
      //
      // Optimized version since JSX identifiers can't contain
      // escape characters and so can be read as single slice.
      // Also assumes that first character was already checked
      // by isIdentifierStart in readToken.
      jsx_readWord() {
        let m, S = this.pos;
        do
          m = this.input.charCodeAt(++this.pos);
        while (w(m) || m === 45);
        return this.finishToken(b.jsxName, this.input.slice(S, this.pos));
      }
      // Parse next token as JSX identifier
      jsx_parseIdentifier() {
        let m = this.startNode();
        return this.type === b.jsxName ? m.name = this.value : this.type.keyword ? m.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(m, "JSXIdentifier");
      }
      // Parse namespaced identifier.
      jsx_parseNamespacedName() {
        let m = this.start, S = this.startLoc, C = this.jsx_parseIdentifier();
        if (!p.allowNamespaces || !this.eat(_.colon))
          return C;
        var k = this.startNodeAt(m, S);
        return k.namespace = C, k.name = this.jsx_parseIdentifier(), this.finishNode(k, "JSXNamespacedName");
      }
      // Parses element name in any form - namespaced, member
      // or single identifier.
      jsx_parseElementName() {
        if (this.type === b.jsxTagEnd)
          return "";
        let m = this.start, S = this.startLoc, C = this.jsx_parseNamespacedName();
        for (this.type === _.dot && C.type === "JSXNamespacedName" && !p.allowNamespacedObjects && this.unexpected(); this.eat(_.dot); ) {
          let k = this.startNodeAt(m, S);
          k.object = C, k.property = this.jsx_parseIdentifier(), C = this.finishNode(k, "JSXMemberExpression");
        }
        return C;
      }
      // Parses any type of JSX attribute value.
      jsx_parseAttributeValue() {
        switch (this.type) {
          case _.braceL:
            let m = this.jsx_parseExpressionContainer();
            return m.expression.type === "JSXEmptyExpression" && this.raise(m.start, "JSX attributes must only be assigned a non-empty expression"), m;
          case b.jsxTagStart:
          case _.string:
            return this.parseExprAtom();
          default:
            this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
        }
      }
      // JSXEmptyExpression is unique type since it doesn't actually parse anything,
      // and so it should start at the end of last read token (left brace) and finish
      // at the beginning of the next one (right brace).
      jsx_parseEmptyExpression() {
        let m = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(m, "JSXEmptyExpression", this.start, this.startLoc);
      }
      // Parses JSX expression enclosed into curly brackets.
      jsx_parseExpressionContainer() {
        let m = this.startNode();
        return this.next(), m.expression = this.type === _.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(_.braceR), this.finishNode(m, "JSXExpressionContainer");
      }
      // Parses following JSX attribute name-value pair.
      jsx_parseAttribute() {
        let m = this.startNode();
        return this.eat(_.braceL) ? (this.expect(_.ellipsis), m.argument = this.parseMaybeAssign(), this.expect(_.braceR), this.finishNode(m, "JSXSpreadAttribute")) : (m.name = this.jsx_parseNamespacedName(), m.value = this.eat(_.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(m, "JSXAttribute"));
      }
      // Parses JSX opening tag starting after '<'.
      jsx_parseOpeningElementAt(m, S) {
        let C = this.startNodeAt(m, S);
        C.attributes = [];
        let k = this.jsx_parseElementName();
        for (k && (C.name = k); this.type !== _.slash && this.type !== b.jsxTagEnd; )
          C.attributes.push(this.jsx_parseAttribute());
        return C.selfClosing = this.eat(_.slash), this.expect(b.jsxTagEnd), this.finishNode(C, k ? "JSXOpeningElement" : "JSXOpeningFragment");
      }
      // Parses JSX closing tag starting after '</'.
      jsx_parseClosingElementAt(m, S) {
        let C = this.startNodeAt(m, S), k = this.jsx_parseElementName();
        return k && (C.name = k), this.expect(b.jsxTagEnd), this.finishNode(C, k ? "JSXClosingElement" : "JSXClosingFragment");
      }
      // Parses entire JSX element, including it's opening tag
      // (starting after '<'), attributes, contents and closing tag.
      jsx_parseElementAt(m, S) {
        let C = this.startNodeAt(m, S), k = [], D = this.jsx_parseOpeningElementAt(m, S), R = null;
        if (!D.selfClosing) {
          e:
            for (; ; )
              switch (this.type) {
                case b.jsxTagStart:
                  if (m = this.start, S = this.startLoc, this.next(), this.eat(_.slash)) {
                    R = this.jsx_parseClosingElementAt(m, S);
                    break e;
                  }
                  k.push(this.jsx_parseElementAt(m, S));
                  break;
                case b.jsxText:
                  k.push(this.parseExprAtom());
                  break;
                case _.braceL:
                  k.push(this.jsx_parseExpressionContainer());
                  break;
                default:
                  this.unexpected();
              }
          c(R.name) !== c(D.name) && this.raise(
            R.start,
            "Expected corresponding JSX closing tag for <" + c(D.name) + ">"
          );
        }
        let z = D.name ? "Element" : "Fragment";
        return C["opening" + z] = D, C["closing" + z] = R, C.children = k, this.type === _.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(C, "JSX" + z);
      }
      // Parse JSX text
      jsx_parseText() {
        let m = this.parseLiteral(this.value);
        return m.type = "JSXText", m;
      }
      // Parses entire JSX element from current position.
      jsx_parseElement() {
        let m = this.start, S = this.startLoc;
        return this.next(), this.jsx_parseElementAt(m, S);
      }
      parseExprAtom(m) {
        return this.type === b.jsxText ? this.jsx_parseText() : this.type === b.jsxTagStart ? this.jsx_parseElement() : super.parseExprAtom(m);
      }
      readToken(m) {
        let S = this.curContext();
        if (S === N)
          return this.jsx_readToken();
        if (S === v || S === E) {
          if (j(m))
            return this.jsx_readWord();
          if (m == 62)
            return ++this.pos, this.finishToken(b.jsxTagEnd);
          if ((m === 34 || m === 39) && S == v)
            return this.jsx_readString(m);
        }
        return m === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33 ? (++this.pos, this.finishToken(b.jsxTagStart)) : super.readToken(m);
      }
      updateContext(m) {
        if (this.type == _.braceL) {
          var S = this.curContext();
          S == v ? this.context.push(A.b_expr) : S == N ? this.context.push(A.b_tmpl) : super.updateContext(m), this.exprAllowed = !0;
        } else if (this.type === _.slash && m === b.jsxTagStart)
          this.context.length -= 2, this.context.push(E), this.exprAllowed = !1;
        else
          return super.updateContext(m);
      }
    };
  }
})(Hi);
var Ws = Hi.exports;
const $s = /* @__PURE__ */ Rt(Ws);
function Qi(e, t, r, i, s) {
  r || (r = O), function a(c, f, p) {
    var y = p || c.type, g = t[y];
    r[y](c, f, a), g && g(c, f);
  }(e, i, s);
}
function Js(e, t, r, i, s) {
  var a = [];
  r || (r = O), function c(f, p, y) {
    var g = y || f.type, x = t[g], _ = f !== a[a.length - 1];
    _ && a.push(f), r[g](f, p, c), x && x(f, p || a, a), _ && a.pop();
  }(e, i, s);
}
function _r(e, t, r) {
  r(e, t);
}
function Xe(e, t, r) {
}
var O = {};
O.Program = O.BlockStatement = function(e, t, r) {
  for (var i = 0, s = e.body; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, "Statement");
  }
};
O.Statement = _r;
O.EmptyStatement = Xe;
O.ExpressionStatement = O.ParenthesizedExpression = O.ChainExpression = function(e, t, r) {
  return r(e.expression, t, "Expression");
};
O.IfStatement = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.consequent, t, "Statement"), e.alternate && r(e.alternate, t, "Statement");
};
O.LabeledStatement = function(e, t, r) {
  return r(e.body, t, "Statement");
};
O.BreakStatement = O.ContinueStatement = Xe;
O.WithStatement = function(e, t, r) {
  r(e.object, t, "Expression"), r(e.body, t, "Statement");
};
O.SwitchStatement = function(e, t, r) {
  r(e.discriminant, t, "Expression");
  for (var i = 0, s = e.cases; i < s.length; i += 1) {
    var a = s[i];
    a.test && r(a.test, t, "Expression");
    for (var c = 0, f = a.consequent; c < f.length; c += 1) {
      var p = f[c];
      r(p, t, "Statement");
    }
  }
};
O.SwitchCase = function(e, t, r) {
  e.test && r(e.test, t, "Expression");
  for (var i = 0, s = e.consequent; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, "Statement");
  }
};
O.ReturnStatement = O.YieldExpression = O.AwaitExpression = function(e, t, r) {
  e.argument && r(e.argument, t, "Expression");
};
O.ThrowStatement = O.SpreadElement = function(e, t, r) {
  return r(e.argument, t, "Expression");
};
O.TryStatement = function(e, t, r) {
  r(e.block, t, "Statement"), e.handler && r(e.handler, t), e.finalizer && r(e.finalizer, t, "Statement");
};
O.CatchClause = function(e, t, r) {
  e.param && r(e.param, t, "Pattern"), r(e.body, t, "Statement");
};
O.WhileStatement = O.DoWhileStatement = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.body, t, "Statement");
};
O.ForStatement = function(e, t, r) {
  e.init && r(e.init, t, "ForInit"), e.test && r(e.test, t, "Expression"), e.update && r(e.update, t, "Expression"), r(e.body, t, "Statement");
};
O.ForInStatement = O.ForOfStatement = function(e, t, r) {
  r(e.left, t, "ForInit"), r(e.right, t, "Expression"), r(e.body, t, "Statement");
};
O.ForInit = function(e, t, r) {
  e.type === "VariableDeclaration" ? r(e, t) : r(e, t, "Expression");
};
O.DebuggerStatement = Xe;
O.FunctionDeclaration = function(e, t, r) {
  return r(e, t, "Function");
};
O.VariableDeclaration = function(e, t, r) {
  for (var i = 0, s = e.declarations; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
};
O.VariableDeclarator = function(e, t, r) {
  r(e.id, t, "Pattern"), e.init && r(e.init, t, "Expression");
};
O.Function = function(e, t, r) {
  e.id && r(e.id, t, "Pattern");
  for (var i = 0, s = e.params; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, "Pattern");
  }
  r(e.body, t, e.expression ? "Expression" : "Statement");
};
O.Pattern = function(e, t, r) {
  e.type === "Identifier" ? r(e, t, "VariablePattern") : e.type === "MemberExpression" ? r(e, t, "MemberPattern") : r(e, t);
};
O.VariablePattern = Xe;
O.MemberPattern = _r;
O.RestElement = function(e, t, r) {
  return r(e.argument, t, "Pattern");
};
O.ArrayPattern = function(e, t, r) {
  for (var i = 0, s = e.elements; i < s.length; i += 1) {
    var a = s[i];
    a && r(a, t, "Pattern");
  }
};
O.ObjectPattern = function(e, t, r) {
  for (var i = 0, s = e.properties; i < s.length; i += 1) {
    var a = s[i];
    a.type === "Property" ? (a.computed && r(a.key, t, "Expression"), r(a.value, t, "Pattern")) : a.type === "RestElement" && r(a.argument, t, "Pattern");
  }
};
O.Expression = _r;
O.ThisExpression = O.Super = O.MetaProperty = Xe;
O.ArrayExpression = function(e, t, r) {
  for (var i = 0, s = e.elements; i < s.length; i += 1) {
    var a = s[i];
    a && r(a, t, "Expression");
  }
};
O.ObjectExpression = function(e, t, r) {
  for (var i = 0, s = e.properties; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
};
O.FunctionExpression = O.ArrowFunctionExpression = O.FunctionDeclaration;
O.SequenceExpression = function(e, t, r) {
  for (var i = 0, s = e.expressions; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, "Expression");
  }
};
O.TemplateLiteral = function(e, t, r) {
  for (var i = 0, s = e.quasis; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
  for (var c = 0, f = e.expressions; c < f.length; c += 1) {
    var p = f[c];
    r(p, t, "Expression");
  }
};
O.TemplateElement = Xe;
O.UnaryExpression = O.UpdateExpression = function(e, t, r) {
  r(e.argument, t, "Expression");
};
O.BinaryExpression = O.LogicalExpression = function(e, t, r) {
  r(e.left, t, "Expression"), r(e.right, t, "Expression");
};
O.AssignmentExpression = O.AssignmentPattern = function(e, t, r) {
  r(e.left, t, "Pattern"), r(e.right, t, "Expression");
};
O.ConditionalExpression = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.consequent, t, "Expression"), r(e.alternate, t, "Expression");
};
O.NewExpression = O.CallExpression = function(e, t, r) {
  if (r(e.callee, t, "Expression"), e.arguments)
    for (var i = 0, s = e.arguments; i < s.length; i += 1) {
      var a = s[i];
      r(a, t, "Expression");
    }
};
O.MemberExpression = function(e, t, r) {
  r(e.object, t, "Expression"), e.computed && r(e.property, t, "Expression");
};
O.ExportNamedDeclaration = O.ExportDefaultDeclaration = function(e, t, r) {
  e.declaration && r(e.declaration, t, e.type === "ExportNamedDeclaration" || e.declaration.id ? "Statement" : "Expression"), e.source && r(e.source, t, "Expression");
};
O.ExportAllDeclaration = function(e, t, r) {
  e.exported && r(e.exported, t), r(e.source, t, "Expression");
};
O.ImportDeclaration = function(e, t, r) {
  for (var i = 0, s = e.specifiers; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
  r(e.source, t, "Expression");
};
O.ImportExpression = function(e, t, r) {
  r(e.source, t, "Expression");
};
O.ImportSpecifier = O.ImportDefaultSpecifier = O.ImportNamespaceSpecifier = O.Identifier = O.Literal = Xe;
O.TaggedTemplateExpression = function(e, t, r) {
  r(e.tag, t, "Expression"), r(e.quasi, t, "Expression");
};
O.ClassDeclaration = O.ClassExpression = function(e, t, r) {
  return r(e, t, "Class");
};
O.Class = function(e, t, r) {
  e.id && r(e.id, t, "Pattern"), e.superClass && r(e.superClass, t, "Expression"), r(e.body, t);
};
O.ClassBody = function(e, t, r) {
  for (var i = 0, s = e.body; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
};
O.MethodDefinition = O.Property = function(e, t, r) {
  e.computed && r(e.key, t, "Expression"), r(e.value, t, "Expression");
};
var Xs = mi, Ys = On, Hs = gi, Qs = "[object Object]", Ks = Function.prototype, Zs = Object.prototype, Ki = Ks.toString, ea = Zs.hasOwnProperty, ta = Ki.call(Object);
function ra(e) {
  if (!Hs(e) || Xs(e) != Qs)
    return !1;
  var t = Ys(e);
  if (t === null)
    return !0;
  var r = ea.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Ki.call(r) == ta;
}
var ia = ra;
const na = /* @__PURE__ */ Rt(ia);
var sa = mi, aa = Rn, oa = gi, ua = "[object String]";
function la(e) {
  return typeof e == "string" || !aa(e) && oa(e) && sa(e) == ua;
}
var ca = la;
const ha = /* @__PURE__ */ Rt(ca);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function ei(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function fa(e) {
  var t, r;
  return ei(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(ei(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var Zi = {}, Lt = pt && pt.__assign || function() {
  return Lt = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, Lt.apply(this, arguments);
}, pa = pt && pt.__spreadArrays || function() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var i = Array(e), s = 0, t = 0; t < r; t++)
    for (var a = arguments[t], c = 0, f = a.length; c < f; c++, s++)
      i[s] = a[c];
  return i;
};
Object.defineProperty(Zi, "__esModule", { value: !0 });
var lt = [];
function da(e) {
  var t = typeof e;
  return e !== null && (t === "object" || t === "function");
}
function ma(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function ga(e) {
  return Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.prototype.propertyIsEnumerable.call(e, t);
  });
}
function Tt(e, t, r) {
  r === void 0 && (r = "");
  var i = {
    indent: "	",
    singleQuotes: !0
  }, s = Lt(Lt({}, i), t), a;
  s.inlineCharacterLimit === void 0 ? a = {
    newLine: `
`,
    newLineOrSpace: `
`,
    pad: r,
    indent: r + s.indent
  } : a = {
    newLine: "@@__PRETTY_PRINT_NEW_LINE__@@",
    newLineOrSpace: "@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",
    pad: "@@__PRETTY_PRINT_PAD__@@",
    indent: "@@__PRETTY_PRINT_INDENT__@@"
  };
  var c = function(y) {
    if (s.inlineCharacterLimit === void 0)
      return y;
    var g = y.replace(new RegExp(a.newLine, "g"), "").replace(new RegExp(a.newLineOrSpace, "g"), " ").replace(new RegExp(a.pad + "|" + a.indent, "g"), "");
    return g.length <= s.inlineCharacterLimit ? g : y.replace(new RegExp(a.newLine + "|" + a.newLineOrSpace, "g"), `
`).replace(new RegExp(a.pad, "g"), r).replace(new RegExp(a.indent, "g"), r + s.indent);
  };
  if (lt.indexOf(e) !== -1)
    return '"[Circular]"';
  if (e == null || typeof e == "number" || typeof e == "boolean" || typeof e == "function" || typeof e == "symbol" || ma(e))
    return String(e);
  if (e instanceof Date)
    return "new Date('" + e.toISOString() + "')";
  if (Array.isArray(e)) {
    if (e.length === 0)
      return "[]";
    lt.push(e);
    var f = "[" + a.newLine + e.map(function(y, g) {
      var x = e.length - 1 === g ? a.newLine : "," + a.newLineOrSpace, _ = Tt(y, s, r + s.indent);
      return s.transform && (_ = s.transform(e, g, _)), a.indent + _ + x;
    }).join("") + a.pad + "]";
    return lt.pop(), c(f);
  }
  if (da(e)) {
    var p = pa(Object.keys(e), ga(e));
    if (s.filter && (p = p.filter(function(g) {
      return s.filter && s.filter(e, g);
    })), p.length === 0)
      return "{}";
    lt.push(e);
    var f = "{" + a.newLine + p.map(function(g, x) {
      var _ = p.length - 1 === x ? a.newLine : "," + a.newLineOrSpace, b = typeof g == "symbol", A = !b && /^[a-z$_][a-z$_0-9]*$/i.test(g.toString()), v = b || A ? g : Tt(g, s), E = Tt(e[g], s, r + s.indent);
      return s.transform && (E = s.transform(e, g, E)), a.indent + String(v) + ": " + E + _;
    }).join("") + a.pad + "}";
    return lt.pop(), c(f);
  }
  return e = String(e).replace(/[\r\n]/g, function(y) {
    return y === `
` ? "\\n" : "\\r";
  }), s.singleQuotes ? (e = e.replace(/\\?'/g, "\\'"), "'" + e + "'") : (e = e.replace(/"/g, '\\"'), '"' + e + '"');
}
var ya = Zi.prettyPrint = Tt, ar = { exports: {} }, ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ti;
function va() {
  if (ti)
    return ee;
  ti = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.server_context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), A;
  A = Symbol.for("react.module.reference");
  function v(E) {
    if (typeof E == "object" && E !== null) {
      var N = E.$$typeof;
      switch (N) {
        case e:
          switch (E = E.type, E) {
            case r:
            case s:
            case i:
            case y:
            case g:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case f:
                case c:
                case p:
                case _:
                case x:
                case a:
                  return E;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  return ee.ContextConsumer = c, ee.ContextProvider = a, ee.Element = e, ee.ForwardRef = p, ee.Fragment = r, ee.Lazy = _, ee.Memo = x, ee.Portal = t, ee.Profiler = s, ee.StrictMode = i, ee.Suspense = y, ee.SuspenseList = g, ee.isAsyncMode = function() {
    return !1;
  }, ee.isConcurrentMode = function() {
    return !1;
  }, ee.isContextConsumer = function(E) {
    return v(E) === c;
  }, ee.isContextProvider = function(E) {
    return v(E) === a;
  }, ee.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === e;
  }, ee.isForwardRef = function(E) {
    return v(E) === p;
  }, ee.isFragment = function(E) {
    return v(E) === r;
  }, ee.isLazy = function(E) {
    return v(E) === _;
  }, ee.isMemo = function(E) {
    return v(E) === x;
  }, ee.isPortal = function(E) {
    return v(E) === t;
  }, ee.isProfiler = function(E) {
    return v(E) === s;
  }, ee.isStrictMode = function(E) {
    return v(E) === i;
  }, ee.isSuspense = function(E) {
    return v(E) === y;
  }, ee.isSuspenseList = function(E) {
    return v(E) === g;
  }, ee.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === s || E === i || E === y || E === g || E === b || typeof E == "object" && E !== null && (E.$$typeof === _ || E.$$typeof === x || E.$$typeof === a || E.$$typeof === c || E.$$typeof === p || E.$$typeof === A || E.getModuleId !== void 0);
  }, ee.typeOf = v, ee;
}
var te = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ri;
function xa() {
  return ri || (ri = 1, process.env.NODE_ENV !== "production" && function() {
    var e = !1, t = !1, r = !1, i = !1, s = !1, a = Symbol.for("react.element"), c = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), x = Symbol.for("react.context"), _ = Symbol.for("react.server_context"), b = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), j;
    j = Symbol.for("react.module.reference");
    function w(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === f || F === y || s || F === p || F === A || F === v || i || F === L || e || t || r || typeof F == "object" && F !== null && (F.$$typeof === N || F.$$typeof === E || F.$$typeof === g || F.$$typeof === x || F.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      F.$$typeof === j || F.getModuleId !== void 0));
    }
    function m(F) {
      if (typeof F == "object" && F !== null) {
        var Qe = F.$$typeof;
        switch (Qe) {
          case a:
            var Le = F.type;
            switch (Le) {
              case f:
              case y:
              case p:
              case A:
              case v:
                return Le;
              default:
                var Et = Le && Le.$$typeof;
                switch (Et) {
                  case _:
                  case x:
                  case b:
                  case N:
                  case E:
                  case g:
                    return Et;
                  default:
                    return Qe;
                }
            }
          case c:
            return Qe;
        }
      }
    }
    var S = x, C = g, k = a, D = b, R = f, z = N, U = E, V = c, X = y, se = p, ue = A, ne = v, J = !1, ge = !1;
    function we(F) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ve(F) {
      return ge || (ge = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function M(F) {
      return m(F) === x;
    }
    function Ie(F) {
      return m(F) === g;
    }
    function Ye(F) {
      return typeof F == "object" && F !== null && F.$$typeof === a;
    }
    function ke(F) {
      return m(F) === b;
    }
    function re(F) {
      return m(F) === f;
    }
    function Se(F) {
      return m(F) === N;
    }
    function He(F) {
      return m(F) === E;
    }
    function Wt(F) {
      return m(F) === c;
    }
    function $t(F) {
      return m(F) === y;
    }
    function _t(F) {
      return m(F) === p;
    }
    function Ne(F) {
      return m(F) === A;
    }
    function Jt(F) {
      return m(F) === v;
    }
    te.ContextConsumer = S, te.ContextProvider = C, te.Element = k, te.ForwardRef = D, te.Fragment = R, te.Lazy = z, te.Memo = U, te.Portal = V, te.Profiler = X, te.StrictMode = se, te.Suspense = ue, te.SuspenseList = ne, te.isAsyncMode = we, te.isConcurrentMode = Ve, te.isContextConsumer = M, te.isContextProvider = Ie, te.isElement = Ye, te.isForwardRef = ke, te.isFragment = re, te.isLazy = Se, te.isMemo = He, te.isPortal = Wt, te.isProfiler = $t, te.isStrictMode = _t, te.isSuspense = Ne, te.isSuspenseList = Jt, te.isValidElementType = w, te.typeOf = m;
  }()), te;
}
process.env.NODE_ENV === "production" ? ar.exports = va() : ar.exports = xa();
var Pe = ar.exports, Re = function(e, t) {
  return e === 0 ? "" : new Array(e * t).fill(" ").join("");
};
function mt(e) {
  "@babel/helpers - typeof";
  return mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mt(e);
}
function ii(e) {
  return ba(e) || Sa(e) || _a(e) || Ea();
}
function ba(e) {
  if (Array.isArray(e))
    return or(e);
}
function Sa(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function _a(e, t) {
  if (e) {
    if (typeof e == "string")
      return or(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return or(e, t);
  }
}
function or(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, i = new Array(t); r < t; r++)
    i[r] = e[r];
  return i;
}
function Ea() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ur(e, t) {
  return e === null || mt(e) !== "object" || e instanceof Date || e instanceof RegExp || /* @__PURE__ */ $e.isValidElement(e) ? e : (t.add(e), Array.isArray(e) ? e.map(function(r) {
    return ur(r, t);
  }) : Object.keys(e).sort().reduce(function(r, i) {
    return i === "_owner" || (i === "current" || t.has(e[i]) ? r[i] = "[Circular]" : r[i] = ur(e[i], t)), r;
  }, {}));
}
function Ca(e) {
  return ur(e, /* @__PURE__ */ new WeakSet());
}
var en = function(t) {
  return {
    type: "string",
    value: t
  };
}, Aa = function(t) {
  return {
    type: "number",
    value: t
  };
}, wa = function(t, r, i, s) {
  return {
    type: "ReactElement",
    displayName: t,
    props: r,
    defaultProps: i,
    childrens: s
  };
}, ka = function(t, r) {
  return {
    type: "ReactFragment",
    key: t,
    childrens: r
  };
}, Ta = !!$e.Fragment, tn = function(t) {
  return !t.name || t.name === "_default" ? "No Display Name" : t.name;
}, Pa = function e(t) {
  switch (!0) {
    case !!t.displayName:
      return t.displayName;
    case t.$$typeof === Pe.Memo:
      return e(t.type);
    case t.$$typeof === Pe.ForwardRef:
      return e(t.render);
    default:
      return tn(t);
  }
}, Ia = function(t) {
  switch (!0) {
    case typeof t.type == "string":
      return t.type;
    case typeof t.type == "function":
      return t.type.displayName ? t.type.displayName : tn(t.type);
    case Pe.isForwardRef(t):
    case Pe.isMemo(t):
      return Pa(t.type);
    case Pe.isContextConsumer(t):
      return "".concat(t.type._context.displayName || "Context", ".Consumer");
    case Pe.isContextProvider(t):
      return "".concat(t.type._context.displayName || "Context", ".Provider");
    case Pe.isLazy(t):
      return "Lazy";
    case Pe.isProfiler(t):
      return "Profiler";
    case Pe.isStrictMode(t):
      return "StrictMode";
    case Pe.isSuspense(t):
      return "Suspense";
    default:
      return "UnknownElementType";
  }
}, ni = function(t, r) {
  return r !== "children";
}, Na = function(t) {
  return t !== !0 && t !== !1 && t !== null && t !== "";
}, si = function(t, r) {
  var i = {};
  return Object.keys(t).filter(function(s) {
    return r(t[s], s);
  }).forEach(function(s) {
    return i[s] = t[s];
  }), i;
}, Er = function e(t, r) {
  var i = r.displayName, s = i === void 0 ? Ia : i;
  if (typeof t == "string")
    return en(t);
  if (typeof t == "number")
    return Aa(t);
  if (!/* @__PURE__ */ ct.isValidElement(t))
    throw new Error("react-element-to-jsx-string: Expected a React.Element, got `".concat(mt(t), "`"));
  var a = s(t), c = si(t.props, ni);
  t.ref !== null && (c.ref = t.ref);
  var f = t.key;
  typeof f == "string" && f.search(/^\./) && (c.key = f);
  var p = si(t.type.defaultProps || {}, ni), y = ct.Children.toArray(t.props.children).filter(Na).map(function(g) {
    return e(g, r);
  });
  return Ta && t.type === $e.Fragment ? ka(f, y) : wa(a, c, p, y);
};
function La() {
}
var Oa = function(t) {
  return t.toString().split(`
`).map(function(r) {
    return r.trim();
  }).join("");
}, ai = Oa, rn = function(e, t) {
  var r = t.functionValue, i = r === void 0 ? ai : r, s = t.showFunctions;
  return i(!s && i === ai ? La : e);
}, Ra = function(e, t, r, i) {
  var s = Ca(e), a = ya(s, {
    transform: function(f, p, y) {
      var g = f[p];
      return g && /* @__PURE__ */ $e.isValidElement(g) ? Gt(Er(g, i), !0, r, i) : typeof g == "function" ? rn(g, i) : y;
    }
  });
  return t ? a.replace(/\s+/g, " ").replace(/{ /g, "{").replace(/ }/g, "}").replace(/\[ /g, "[").replace(/ ]/g, "]") : a.replace(/\t/g, Re(1, i.tabStop)).replace(/\n([^$])/g, `
`.concat(Re(r + 1, i.tabStop), "$1"));
}, Fa = function(t) {
  return t.replace(/"/g, "&quot;");
}, Ma = function(t, r, i, s) {
  if (typeof t == "number")
    return "{".concat(String(t), "}");
  if (typeof t == "string")
    return '"'.concat(Fa(t), '"');
  if (mt(t) === "symbol") {
    var a = t.valueOf().toString().replace(/Symbol\((.*)\)/, "$1");
    return a ? "{Symbol('".concat(a, "')}") : "{Symbol()}";
  }
  return typeof t == "function" ? "{".concat(rn(t, s), "}") : /* @__PURE__ */ $e.isValidElement(t) ? "{".concat(Gt(Er(t, s), !0, i, s), "}") : t instanceof Date ? isNaN(t.valueOf()) ? "{new Date(NaN)}" : '{new Date("'.concat(t.toISOString(), '")}') : fa(t) || Array.isArray(t) ? "{".concat(Ra(t, r, i, s), "}") : "{".concat(String(t), "}");
}, Ba = function(e, t, r, i, s, a, c, f) {
  if (!t && !i)
    throw new Error('The prop "'.concat(e, '" has no value and no default: could not be formatted'));
  var p = t ? r : s, y = f.useBooleanShorthandSyntax, g = f.tabStop, x = Ma(p, a, c, f), _ = " ", b = `
`.concat(Re(c + 1, g)), A = x.includes(`
`);
  return y && x === "{false}" && !i ? (_ = "", b = "") : y && x === "{true}" ? (_ += "".concat(e), b += "".concat(e)) : (_ += "".concat(e, "=").concat(x), b += "".concat(e, "=").concat(x)), {
    attributeFormattedInline: _,
    attributeFormattedMultiline: b,
    isMultilineAttribute: A
  };
}, Da = function(e, t) {
  var r = e.slice(0, e.length > 0 ? e.length - 1 : 0), i = e[e.length - 1];
  return i && (t.type === "string" || t.type === "number") && (i.type === "string" || i.type === "number") ? r.push(en(String(i.value) + String(t.value))) : (i && r.push(i), r.push(t)), r;
}, Va = function(t) {
  return ["key", "ref"].includes(t);
}, ja = function(e) {
  return function(t) {
    var r = t.includes("key"), i = t.includes("ref"), s = t.filter(function(c) {
      return !Va(c);
    }), a = ii(e ? s.sort() : s);
    return i && a.unshift("ref"), r && a.unshift("key"), a;
  };
};
function qa(e, t) {
  return Array.isArray(t) ? function(r) {
    return t.indexOf(r) === -1;
  } : function(r) {
    return t(e[r], r);
  };
}
var Ua = function(t, r, i, s, a) {
  var c = a.tabStop;
  return t.type === "string" ? r.split(`
`).map(function(f, p) {
    return p === 0 ? f : "".concat(Re(s, c)).concat(f);
  }).join(`
`) : r;
}, Ga = function(t, r, i) {
  return function(s) {
    return Ua(s, Gt(s, t, r, i), t, r, i);
  };
}, za = function(t, r) {
  return function(i) {
    var s = Object.keys(t).includes(i);
    return !s || s && t[i] !== r[i];
  };
}, nn = function(t, r, i, s, a) {
  return a ? Re(i, s).length + r.length > a : t.length > 1;
}, Wa = function(t, r, i, s, a, c, f) {
  return (nn(t, r, a, c, f) || i) && !s;
}, sn = function(e, t, r, i) {
  var s = e.type, a = e.displayName, c = a === void 0 ? "" : a, f = e.childrens, p = e.props, y = p === void 0 ? {} : p, g = e.defaultProps, x = g === void 0 ? {} : g;
  if (s !== "ReactElement")
    throw new Error('The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(s));
  var _ = i.filterProps, b = i.maxInlineAttributesLineLength, A = i.showDefaultProps, v = i.sortProps, E = i.tabStop, N = "<".concat(c), L = N, j = N, w = !1, m = [], S = qa(y, _);
  Object.keys(y).filter(S).filter(za(x, y)).forEach(function(D) {
    return m.push(D);
  }), Object.keys(x).filter(S).filter(function() {
    return A;
  }).filter(function(D) {
    return !m.includes(D);
  }).forEach(function(D) {
    return m.push(D);
  });
  var C = ja(v)(m);
  if (C.forEach(function(D) {
    var R = Ba(D, Object.keys(y).includes(D), y[D], Object.keys(x).includes(D), x[D], t, r, i), z = R.attributeFormattedInline, U = R.attributeFormattedMultiline, V = R.isMultilineAttribute;
    V && (w = !0), L += z, j += U;
  }), j += `
`.concat(Re(r, E)), Wa(C, L, w, t, r, E, b) ? N = j : N = L, f && f.length > 0) {
    var k = r + 1;
    N += ">", t || (N += `
`, N += Re(k, E)), N += f.reduce(Da, []).map(Ga(t, k, i)).join(t ? "" : `
`.concat(Re(k, E))), t || (N += `
`, N += Re(k - 1, E)), N += "</".concat(c, ">");
  } else
    nn(C, L, r, E, b) || (N += " "), N += "/>";
  return N;
}, $a = "", oi = "React.Fragment", Ja = function(t, r, i) {
  var s = {};
  return r && (s = {
    key: r
  }), {
    type: "ReactElement",
    displayName: t,
    props: s,
    defaultProps: {},
    childrens: i
  };
}, Xa = function(t) {
  var r = t.key;
  return !!r;
}, Ya = function(t) {
  var r = t.childrens;
  return r.length === 0;
}, Ha = function(e, t, r, i) {
  var s = e.type, a = e.key, c = e.childrens;
  if (s !== "ReactFragment")
    throw new Error('The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(s));
  var f = i.useFragmentShortSyntax, p;
  return f ? Ya(e) || Xa(e) ? p = oi : p = $a : p = oi, sn(Ja(p, a, c), t, r, i);
}, Qa = ["<", ">", "{", "}"], Ka = function(t) {
  return Qa.some(function(r) {
    return t.includes(r);
  });
}, Za = function(t) {
  return Ka(t) ? "{`".concat(t, "`}") : t;
}, eo = function(t) {
  var r = t;
  return r.endsWith(" ") && (r = r.replace(/^(.*?)(\s+)$/, "$1{'$2'}")), r.startsWith(" ") && (r = r.replace(/^(\s+)(.*)$/, "{'$1'}$2")), r;
}, Gt = function(e, t, r, i) {
  if (e.type === "number")
    return String(e.value);
  if (e.type === "string")
    return e.value ? "".concat(eo(Za(String(e.value)))) : "";
  if (e.type === "ReactElement")
    return sn(e, t, r, i);
  if (e.type === "ReactFragment")
    return Ha(e, t, r, i);
  throw new TypeError('Unknow format type "'.concat(e.type, '"'));
}, to = function(e, t) {
  return Gt(e, !1, 0, t);
}, ft = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.filterProps, s = i === void 0 ? [] : i, a = r.showDefaultProps, c = a === void 0 ? !0 : a, f = r.showFunctions, p = f === void 0 ? !1 : f, y = r.functionValue, g = r.tabStop, x = g === void 0 ? 2 : g, _ = r.useBooleanShorthandSyntax, b = _ === void 0 ? !0 : _, A = r.useFragmentShortSyntax, v = A === void 0 ? !0 : A, E = r.sortProps, N = E === void 0 ? !0 : E, L = r.maxInlineAttributesLineLength, j = r.displayName;
  if (!t)
    throw new Error("react-element-to-jsx-string: Expected a ReactElement");
  var w = {
    filterProps: s,
    showDefaultProps: c,
    showFunctions: p,
    functionValue: y,
    tabStop: x,
    useBooleanShorthandSyntax: b,
    useFragmentShortSyntax: v,
    sortProps: N,
    maxInlineAttributesLineLength: L,
    displayName: j
  };
  return to(Er(t, w), w);
};
const { defaultDecorateStory: ro, addons: io, useEffect: no } = __STORYBOOK_MODULE_PREVIEW_API__, { logger: kt } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
function so(e, t) {
  let r = e != null, i = t != null;
  if (!r && !i)
    return "";
  let s = [];
  if (r) {
    let a = e.map((c) => {
      let f = c.getPrettyName(), p = c.getTypeName();
      return p != null ? `${f}: ${p}` : f;
    });
    s.push(`(${a.join(", ")})`);
  } else
    s.push("()");
  return i && s.push(`=> ${t.getTypeName()}`), s.join(" ");
}
function ao(e, t) {
  let r = e != null, i = t != null;
  if (!r && !i)
    return "";
  let s = [];
  return r ? s.push("( ... )") : s.push("()"), i && s.push(`=> ${t.getTypeName()}`), s.join(" ");
}
function oo(e) {
  return e.replace(/,/g, `,\r
`);
}
var lr = "custom", bt = "object", Cr = "array", uo = "class", rt = "func", st = "element";
function Ar(e) {
  return $n.includes(e.toLowerCase());
}
var an = { format: { indent: { style: "  " }, semicolons: !1 } }, lo = { ...an, format: { newline: "" } }, co = { ...an };
function je(e, t = !1) {
  return yi.generate(e, t ? lo : co);
}
function cr(e, t = !1) {
  return t ? ho(e) : je(e);
}
function ho(e) {
  let t = je(e, !0);
  return t.endsWith(" }") || (t = `${t.slice(0, -1)} }`), t;
}
function ui(e, t = !1) {
  return t ? po(e) : fo(e);
}
function fo(e) {
  let t = je(e);
  return t.endsWith("  }]") && (t = Gn(t)), t;
}
function po(e) {
  let t = je(e, !0);
  return t.startsWith("[    ") && (t = t.replace("[    ", "[")), t;
}
var on = (e) => e.$$typeof === Symbol.for("react.memo"), mo = (e) => e.$$typeof === Symbol.for("react.forward_ref"), wr = { ...O, JSXElement: () => {
} }, go = ae.extend($s());
function St(e) {
  return e != null ? e.name : null;
}
function li(e) {
  return e.filter((t) => t.type === "ObjectExpression" || t.type === "ArrayExpression");
}
function un(e) {
  let t = [];
  return Js(e, { ObjectExpression(r, i) {
    t.push(li(i).length);
  }, ArrayExpression(r, i) {
    t.push(li(i).length);
  } }, wr), Math.max(...t);
}
function yo(e) {
  return { inferredType: { type: "Identifier", identifier: St(e) }, ast: e };
}
function vo(e) {
  return { inferredType: { type: "Literal" }, ast: e };
}
function xo(e) {
  let t;
  Qi(e.body, { JSXElement(s) {
    t = s;
  } }, wr);
  let r = { type: t != null ? "Element" : "Function", params: e.params, hasParams: e.params.length !== 0 }, i = St(e.id);
  return i != null && (r.identifier = i), { inferredType: r, ast: e };
}
function bo(e) {
  let t;
  return Qi(e.body, { JSXElement(r) {
    t = r;
  } }, wr), { inferredType: { type: t != null ? "Element" : "Class", identifier: St(e.id) }, ast: e };
}
function So(e) {
  let t = { type: "Element" }, r = St(e.openingElement.name);
  return r != null && (t.identifier = r), { inferredType: t, ast: e };
}
function _o(e) {
  let t = e.callee.type === "MemberExpression" ? e.callee.property : e.callee;
  return St(t) === "shape" ? ln(e.arguments[0]) : null;
}
function ln(e) {
  return { inferredType: { type: "Object", depth: un(e) }, ast: e };
}
function Eo(e) {
  return { inferredType: { type: "Array", depth: un(e) }, ast: e };
}
function Co(e) {
  switch (e.type) {
    case "Identifier":
      return yo(e);
    case "Literal":
      return vo(e);
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return xo(e);
    case "ClassExpression":
      return bo(e);
    case "JSXElement":
      return So(e);
    case "CallExpression":
      return _o(e);
    case "ObjectExpression":
      return ln(e);
    case "ArrayExpression":
      return Eo(e);
    default:
      return null;
  }
}
function Ao(e) {
  let t = go.parse(`(${e})`, { ecmaVersion: 2020 }), r = { inferredType: { type: "Unknown" }, ast: t };
  if (t.body[0] != null) {
    let i = t.body[0];
    switch (i.type) {
      case "ExpressionStatement": {
        let s = Co(i.expression);
        s != null && (r = s);
        break;
      }
    }
  }
  return r;
}
function qe(e) {
  try {
    return { ...Ao(e) };
  } catch {
  }
  return { inferredType: { type: "Unknown" } };
}
var wo = 150;
function me({ name: e, short: t, compact: r, full: i, inferredType: s }) {
  return { name: e, short: t, compact: r, full: i ?? t, inferredType: s };
}
function cn(e) {
  return e.replace(/PropTypes./g, "").replace(/.isRequired/g, "");
}
function ci(e) {
  return e.split(/\r?\n/);
}
function Ot(e, t = !1) {
  return cn(cr(e, t));
}
function hi(e, t = !1) {
  return cn(je(e, t));
}
function ko(e) {
  switch (e) {
    case "Object":
      return bt;
    case "Array":
      return Cr;
    case "Class":
      return uo;
    case "Function":
      return rt;
    case "Element":
      return st;
    default:
      return lr;
  }
}
function hn(e, t) {
  let { inferredType: r, ast: i } = qe(e), { type: s } = r, a, c, f;
  switch (s) {
    case "Identifier":
    case "Literal":
      a = e, c = e;
      break;
    case "Object": {
      let { depth: p } = r;
      a = bt, c = p === 1 ? Ot(i, !0) : null, f = Ot(i);
      break;
    }
    case "Element": {
      let { identifier: p } = r;
      a = p != null && !Ar(p) ? p : st, c = ci(e).length === 1 ? e : null, f = e;
      break;
    }
    case "Array": {
      let { depth: p } = r;
      a = Cr, c = p <= 2 ? hi(i, !0) : null, f = hi(i);
      break;
    }
    default:
      a = ko(s), c = ci(e).length === 1 ? e : null, f = e;
      break;
  }
  return me({ name: t, short: a, compact: c, full: f, inferredType: s });
}
function To({ raw: e }) {
  return e != null ? hn(e, "custom") : me({ name: "custom", short: lr, compact: lr });
}
function Po(e) {
  let { jsDocTags: t } = e;
  return t != null && (t.params != null || t.returns != null) ? me({ name: "func", short: ao(t.params, t.returns), compact: null, full: so(t.params, t.returns) }) : me({ name: "func", short: rt, compact: rt });
}
function Io(e, t) {
  let r = Object.keys(e.value).map((c) => `${c}: ${it(e.value[c], t).full}`).join(", "), { inferredType: i, ast: s } = qe(`{ ${r} }`), { depth: a } = i;
  return me({ name: "shape", short: bt, compact: a === 1 && s ? Ot(s, !0) : null, full: s ? Ot(s) : null });
}
function ir(e) {
  return `objectOf(${e})`;
}
function No(e, t) {
  let { short: r, compact: i, full: s } = it(e.value, t);
  return me({ name: "objectOf", short: ir(r), compact: i != null ? ir(i) : null, full: s && ir(s) });
}
function Lo(e, t) {
  if (Array.isArray(e.value)) {
    let r = e.value.reduce((i, s) => {
      let { short: a, compact: c, full: f } = it(s, t);
      return i.short.push(a), i.compact.push(c), i.full.push(f), i;
    }, { short: [], compact: [], full: [] });
    return me({ name: "union", short: r.short.join(" | "), compact: r.compact.every((i) => i != null) ? r.compact.join(" | ") : null, full: r.full.join(" | ") });
  }
  return me({ name: "union", short: e.value, compact: null });
}
function Oo({ value: e, computed: t }) {
  return t ? hn(e, "enumvalue") : me({ name: "enumvalue", short: e, compact: e });
}
function Ro(e) {
  if (Array.isArray(e.value)) {
    let t = e.value.reduce((r, i) => {
      let { short: s, compact: a, full: c } = Oo(i);
      return r.short.push(s), r.compact.push(a), r.full.push(c), r;
    }, { short: [], compact: [], full: [] });
    return me({ name: "enum", short: t.short.join(" | "), compact: t.compact.every((r) => r != null) ? t.compact.join(" | ") : null, full: t.full.join(" | ") });
  }
  return me({ name: "enum", short: e.value, compact: e.value });
}
function hr(e) {
  return `${e}[]`;
}
function fi(e) {
  return `[${e}]`;
}
function pi(e, t, r) {
  return me({ name: "arrayOf", short: hr(e), compact: t != null ? fi(t) : null, full: r && fi(r) });
}
function Fo(e, t) {
  let { name: r, short: i, compact: s, full: a, inferredType: c } = it(e.value, t);
  if (r === "custom") {
    if (c === "Object")
      return pi(i, s, a);
  } else if (r === "shape")
    return pi(i, s, a);
  return me({ name: "arrayOf", short: hr(i), compact: hr(i) });
}
function it(e, t) {
  try {
    switch (e.name) {
      case "custom":
        return To(e);
      case "func":
        return Po(t);
      case "shape":
        return Io(e, t);
      case "instanceOf":
        return me({ name: "instanceOf", short: e.value, compact: e.value });
      case "objectOf":
        return No(e, t);
      case "union":
        return Lo(e, t);
      case "enum":
        return Ro(e);
      case "arrayOf":
        return Fo(e, t);
      default:
        return me({ name: e.name, short: e.name, compact: e.name });
    }
  } catch (r) {
    console.error(r);
  }
  return me({ name: "unknown", short: "unknown", compact: "unknown" });
}
function Mo(e) {
  let { type: t } = e.docgenInfo;
  if (t == null)
    return null;
  try {
    switch (t.name) {
      case "custom":
      case "shape":
      case "instanceOf":
      case "objectOf":
      case "union":
      case "enum":
      case "arrayOf": {
        let { short: r, compact: i, full: s } = it(t, e);
        return i != null && !qn(i) ? ie(i) : s ? ie(r, s) : ie(r);
      }
      case "func": {
        let { short: r, full: i } = it(t, e), s = r, a;
        return i && i.length < wo ? s = i : i && (a = oo(i)), ie(s, a);
      }
      default:
        return null;
    }
  } catch (r) {
    console.error(r);
  }
  return null;
}
function fn({ inferredType: e, ast: t }) {
  let { depth: r } = e;
  if (r === 1) {
    let i = cr(t, !0);
    if (!gt(i))
      return ie(i);
  }
  return ie(bt, cr(t));
}
function pn({ inferredType: e, ast: t }) {
  let { depth: r } = e;
  if (r <= 2) {
    let i = ui(t, !0);
    if (!gt(i))
      return ie(i);
  }
  return ie(Cr, ui(t));
}
function kr(e, t) {
  return t ? `${e}( ... )` : `${e}()`;
}
function zt(e) {
  return `<${e} />`;
}
function dn(e) {
  let { type: t, identifier: r } = e;
  switch (t) {
    case "Function":
      return kr(r, e.hasParams);
    case "Element":
      return zt(r);
    default:
      return r;
  }
}
function Bo({ inferredType: e, ast: t }) {
  let { identifier: r } = e;
  if (r != null)
    return ie(dn(e), je(t));
  let i = je(t, !0);
  return gt(i) ? ie(rt, je(t)) : ie(i);
}
function Do(e, t) {
  let { inferredType: r } = t, { identifier: i } = r;
  if (i != null && !Ar(i)) {
    let s = dn(r);
    return ie(s, e);
  }
  return gt(e) ? ie(st, e) : ie(e);
}
function mn(e) {
  try {
    let t = qe(e);
    switch (t.inferredType.type) {
      case "Object":
        return fn(t);
      case "Function":
        return Bo(t);
      case "Element":
        return Do(e, t);
      case "Array":
        return pn(t);
      default:
        return null;
    }
  } catch (t) {
    console.error(t);
  }
  return null;
}
function gn(e) {
  return e.$$typeof != null;
}
function yn(e, t) {
  let { name: r } = e;
  return r !== "" && r !== "anonymous" && r !== t ? r : null;
}
var Vo = (e) => ie(JSON.stringify(e));
function jo(e) {
  let { type: t } = e, { displayName: r } = t, i = ft(e, {});
  if (r != null) {
    let s = zt(r);
    return ie(s, i);
  }
  if (ha(t) && Ar(t)) {
    let s = ft(e, { tabStop: 0 }).replace(/\r?\n|\r/g, "");
    if (!gt(s))
      return ie(s);
  }
  return ie(st, i);
}
var qo = (e) => {
  if (gn(e) && e.type != null)
    return jo(e);
  if (na(e)) {
    let t = qe(JSON.stringify(e));
    return fn(t);
  }
  if (Array.isArray(e)) {
    let t = qe(JSON.stringify(e));
    return pn(t);
  }
  return ie(bt);
}, Uo = (e, t) => {
  let r = !1, i;
  if (Dr(e.render))
    r = !0;
  else if (e.prototype != null && Dr(e.prototype.render))
    r = !0;
  else {
    let a;
    try {
      i = qe(e.toString());
      let { hasParams: c, params: f } = i.inferredType;
      c ? f.length === 1 && f[0].type === "ObjectPattern" && (a = e({})) : a = e(), a != null && gn(a) && (r = !0);
    } catch {
    }
  }
  let s = yn(e, t.name);
  if (s != null) {
    if (r)
      return ie(zt(s));
    i != null && (i = qe(e.toString()));
    let { hasParams: a } = i.inferredType;
    return ie(kr(s, a));
  }
  return ie(r ? st : rt);
}, Go = (e) => ie(e.toString()), vn = { string: Vo, object: qo, function: Uo, default: Go };
function zo(e = {}) {
  return { ...vn, ...e };
}
function xn(e, t, r = vn) {
  try {
    switch (typeof e) {
      case "string":
        return r.string(e, t);
      case "object":
        return r.object(e, t);
      case "function":
        return r.function(e, t);
      default:
        return r.default(e, t);
    }
  } catch (i) {
    console.error(i);
  }
  return null;
}
function Wo(e, t) {
  let { propTypes: r } = t;
  return r != null ? Object.keys(r).map((i) => e.find((s) => s.name === i)).filter(Boolean) : e;
}
var $o = (e, { name: t, type: r }) => {
  let i = r.summary === "element" || r.summary === "elementType", s = yn(e, t);
  if (s != null) {
    if (i)
      return ie(zt(s));
    let { hasParams: a } = qe(e.toString()).inferredType;
    return ie(kr(s, a));
  }
  return ie(i ? st : rt);
}, Jo = zo({ function: $o });
function Xo(e, t) {
  let { propDef: r } = e, i = Mo(e);
  i != null && (r.type = i);
  let { defaultValue: s } = e.docgenInfo;
  if (s != null && s.value != null) {
    let a = mn(s.value);
    a != null && (r.defaultValue = a);
  } else if (t != null) {
    let a = xn(t, r, Jo);
    a != null && (r.defaultValue = a);
  }
  return r;
}
function Yo(e, t) {
  let r = t.defaultProps != null ? t.defaultProps : {}, i = e.map((s) => Xo(s, r[s.propDef.name]));
  return Wo(i, t);
}
function Ho(e, t) {
  let { propDef: r } = e, { defaultValue: i } = e.docgenInfo;
  if (i != null && i.value != null) {
    let s = mn(i.value);
    s != null && (r.defaultValue = s);
  } else if (t != null) {
    let s = xn(t, r);
    s != null && (r.defaultValue = s);
  }
  return r;
}
function Qo(e) {
  return e.map((t) => Ho(t));
}
var di = /* @__PURE__ */ new Map();
Object.keys(Br).forEach((e) => {
  let t = Br[e];
  di.set(t, e), di.set(t.isRequired, e);
});
function Ko(e, t) {
  let r = e;
  !Vn(e) && !e.propTypes && on(e) && (r = e.type);
  let i = jn(r, t);
  if (i.length === 0)
    return [];
  switch (i[0].typeSystem) {
    case Mr.JAVASCRIPT:
      return Yo(i, e);
    case Mr.TYPESCRIPT:
      return Qo(i);
    default:
      return i.map((s) => s.propDef);
  }
}
var Zo = (e) => ({ rows: Ko(e, "props") }), eu = (e) => {
  if (e) {
    let { rows: t } = Zo(e);
    if (t)
      return t.reduce((r, i) => {
        let { name: s, description: a, type: c, sbType: f, defaultValue: p, jsDocTags: y, required: g } = i;
        return r[s] = { name: s, description: a, type: { required: g, ...f }, table: { type: c, jsDocTags: y, defaultValue: p } }, r;
      }, {});
  }
  return null;
};
function fr(e) {
  if ($e.isValidElement(e)) {
    let t = Object.keys(e.props).reduce((r, i) => (r[i] = fr(e.props[i]), r), {});
    return { ...e, props: t, _owner: null };
  }
  return Array.isArray(e) ? e.map(fr) : e;
}
var tu = (e, t) => {
  if (typeof e > "u")
    return kt.warn("Too many skip or undefined component"), null;
  let r = e, i = r.type;
  for (let a = 0; a < t.skip; a += 1) {
    if (typeof r > "u")
      return kt.warn("Cannot skip undefined element"), null;
    if (ct.Children.count(r) > 1)
      return kt.warn("Trying to skip an array of elements"), null;
    typeof r.props.children > "u" ? (kt.warn("Not enough children to skip elements."), typeof r.type == "function" && r.type.name === "" && (r = ct.createElement(i, { ...r.props }))) : typeof r.props.children == "function" ? r = r.props.children() : r = r.props.children;
  }
  let s = { ...typeof t.displayName == "string" ? { showFunctions: !0, displayName: () => t.displayName } : { displayName: (a) => a.type.displayName || (a.type === Symbol.for("react.profiler") ? "Profiler" : null) || Dn(a.type, "displayName") || (a.type.name !== "_default" ? a.type.name : null) || (typeof a.type == "function" ? "No Display Name" : null) || (mo(a.type) ? a.type.render.name : null) || (on(a.type) ? a.type.type.name : null) || a.type }, filterProps: (a, c) => a !== void 0, ...t };
  return ct.Children.map(e, (a) => {
    let c = typeof a == "number" ? a.toString() : a, f = (typeof ft == "function" ? ft : ft.default)(fr(c), s);
    if (f.indexOf("&quot;") > -1) {
      let p = f.match(/\S+=\\"([^"]*)\\"/g);
      p && p.forEach((y) => {
        f = f.replace(y, y.replace(/&quot;/g, "'"));
      });
    }
    return f;
  }).join(`
`).replace(/function\s+noRefCheck\(\)\s+\{\}/g, "() => {}");
}, ru = { skip: 0, showFunctions: !1, enableBeautify: !0, showDefaultProps: !1 }, iu = (e) => {
  var i;
  let t = (i = e == null ? void 0 : e.parameters.docs) == null ? void 0 : i.source, r = e == null ? void 0 : e.parameters.__isArgsStory;
  return (t == null ? void 0 : t.type) === Fr.DYNAMIC ? !1 : !r || (t == null ? void 0 : t.code) || (t == null ? void 0 : t.type) === Fr.CODE;
}, nu = (e) => {
  var t, r;
  return ((t = e.type) == null ? void 0 : t.displayName) === "MDXCreateElement" && !!((r = e.props) != null && r.mdxType);
}, bn = (e) => {
  if (!nu(e))
    return e;
  let { mdxType: t, originalType: r, children: i, ...s } = e.props, a = [];
  return i && (a = (Array.isArray(i) ? i : [i]).map(bn)), $e.createElement(r, s, ...a);
}, Sn = (e, t) => {
  var g, x;
  let r = io.getChannel(), i = iu(t), s = "";
  no(() => {
    if (!i) {
      let { id: _, unmappedArgs: b } = t;
      r.emit(Bn, { id: _, source: s, args: b });
    }
  });
  let a = e();
  if (i)
    return a;
  let c = { ...ru, ...(t == null ? void 0 : t.parameters.jsx) || {} }, f = (x = (g = t == null ? void 0 : t.parameters.docs) == null ? void 0 : g.source) != null && x.excludeDecorators ? t.originalStoryFn(t.args, t) : a, p = bn(f), y = tu(p, c);
  return y && (s = y), a;
}, fu = (e, t) => {
  let r = t.findIndex((s) => s.originalFn === Sn), i = r === -1 ? t : [...t.splice(r, 1), ...t];
  return ro(e, i);
}, pu = { docs: { story: { inline: !0 }, extractArgTypes: eu, extractComponentDescription: Fn } }, du = [Sn], mu = [Mn];
export {
  fu as applyDecorators,
  mu as argTypesEnhancers,
  du as decorators,
  pu as parameters
};
