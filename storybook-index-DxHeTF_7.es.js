import { a as lm, c as kl, g as sm } from "./storybook-_commonjsHelpers-CT_km90n.es.js";
import { d as um } from "./storybook-index-a9S0yb2f.es.js";
function cm(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const a = Object.getOwnPropertyDescriptor(n, o);
          a && Object.defineProperty(e, o, a.get ? a : {
            enumerable: !0,
            get: () => n[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Ee = {}, Dl = { exports: {} };
Dl.exports;
(function(e) {
  const r = (a = 0) => (i) => `\x1B[${38 + a};5;${i}m`, n = (a = 0) => (i, s, l) => `\x1B[${38 + a};2;${i};${s};${l}m`;
  function o() {
    const a = /* @__PURE__ */ new Map(), i = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    i.color.gray = i.color.blackBright, i.bgColor.bgGray = i.bgColor.bgBlackBright, i.color.grey = i.color.blackBright, i.bgColor.bgGrey = i.bgColor.bgBlackBright;
    for (const [s, l] of Object.entries(i)) {
      for (const [u, c] of Object.entries(l))
        i[u] = {
          open: `\x1B[${c[0]}m`,
          close: `\x1B[${c[1]}m`
        }, l[u] = i[u], a.set(c[0], c[1]);
      Object.defineProperty(i, s, {
        value: l,
        enumerable: !1
      });
    }
    return Object.defineProperty(i, "codes", {
      value: a,
      enumerable: !1
    }), i.color.close = "\x1B[39m", i.bgColor.close = "\x1B[49m", i.color.ansi256 = r(), i.color.ansi16m = n(), i.bgColor.ansi256 = r(10), i.bgColor.ansi16m = n(10), Object.defineProperties(i, {
      rgbToAnsi256: {
        value: (s, l, u) => s === l && l === u ? s < 8 ? 16 : s > 248 ? 231 : Math.round((s - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(s / 255 * 5) + 6 * Math.round(l / 255 * 5) + Math.round(u / 255 * 5),
        enumerable: !1
      },
      hexToRgb: {
        value: (s) => {
          const l = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(s.toString(16));
          if (!l)
            return [0, 0, 0];
          let { colorString: u } = l.groups;
          u.length === 3 && (u = u.split("").map((d) => d + d).join(""));
          const c = Number.parseInt(u, 16);
          return [
            c >> 16 & 255,
            c >> 8 & 255,
            c & 255
          ];
        },
        enumerable: !1
      },
      hexToAnsi256: {
        value: (s) => i.rgbToAnsi256(...i.hexToRgb(s)),
        enumerable: !1
      }
    }), i;
  }
  Object.defineProperty(e, "exports", {
    enumerable: !0,
    get: o
  });
})(Dl);
var Xc = Dl.exports, Re = {};
Object.defineProperty(Re, "__esModule", {
  value: !0
});
Re.printIteratorEntries = fm;
Re.printIteratorValues = pm;
Re.printListItems = vm;
Re.printObjectProperties = mm;
const dm = (e, t) => {
  const r = Object.keys(e).sort(t);
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((n) => {
    Object.getOwnPropertyDescriptor(e, n).enumerable && r.push(n);
  }), r;
};
function fm(e, t, r, n, o, a, i = ": ") {
  let s = "", l = e.next();
  if (!l.done) {
    s += t.spacingOuter;
    const u = r + t.indent;
    for (; !l.done; ) {
      const c = a(
        l.value[0],
        t,
        u,
        n,
        o
      ), d = a(
        l.value[1],
        t,
        u,
        n,
        o
      );
      s += u + c + i + d, l = e.next(), l.done ? t.min || (s += ",") : s += "," + t.spacingInner;
    }
    s += t.spacingOuter + r;
  }
  return s;
}
function pm(e, t, r, n, o, a) {
  let i = "", s = e.next();
  if (!s.done) {
    i += t.spacingOuter;
    const l = r + t.indent;
    for (; !s.done; )
      i += l + a(s.value, t, l, n, o), s = e.next(), s.done ? t.min || (i += ",") : i += "," + t.spacingInner;
    i += t.spacingOuter + r;
  }
  return i;
}
function vm(e, t, r, n, o, a) {
  let i = "";
  if (e.length) {
    i += t.spacingOuter;
    const s = r + t.indent;
    for (let l = 0; l < e.length; l++)
      i += s, l in e && (i += a(e[l], t, s, n, o)), l < e.length - 1 ? i += "," + t.spacingInner : t.min || (i += ",");
    i += t.spacingOuter + r;
  }
  return i;
}
function mm(e, t, r, n, o, a) {
  let i = "";
  const s = dm(e, t.compareKeys);
  if (s.length) {
    i += t.spacingOuter;
    const l = r + t.indent;
    for (let u = 0; u < s.length; u++) {
      const c = s[u], d = a(c, t, l, n, o), f = a(e[c], t, l, n, o);
      i += l + d + ": " + f, u < s.length - 1 ? i += "," + t.spacingInner : t.min || (i += ",");
    }
    i += t.spacingOuter + r;
  }
  return i;
}
var ke = {};
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.test = ke.serialize = ke.default = void 0;
var Cs = Re, jr = function() {
  return typeof globalThis < "u" ? globalThis : typeof jr < "u" ? jr : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), ii = jr["jest-symbol-do-not-touch"] || jr.Symbol;
const ym = typeof ii == "function" && ii.for ? ii.for("jest.asymmetricMatcher") : 1267621, yr = " ", Qc = (e, t, r, n, o, a) => {
  const i = e.toString();
  return i === "ArrayContaining" || i === "ArrayNotContaining" ? ++n > t.maxDepth ? "[" + i + "]" : i + yr + "[" + (0, Cs.printListItems)(
    e.sample,
    t,
    r,
    n,
    o,
    a
  ) + "]" : i === "ObjectContaining" || i === "ObjectNotContaining" ? ++n > t.maxDepth ? "[" + i + "]" : i + yr + "{" + (0, Cs.printObjectProperties)(
    e.sample,
    t,
    r,
    n,
    o,
    a
  ) + "}" : i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining" ? i + yr + a(e.sample, t, r, n, o) : e.toAsymmetricMatcher();
};
ke.serialize = Qc;
const Jc = (e) => e && e.$$typeof === ym;
ke.test = Jc;
const bm = {
  serialize: Qc,
  test: Jc
};
var hm = bm;
ke.default = hm;
var De = {}, gm = ({ onlyFirst: e = !1 } = {}) => {
  const t = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(t, e ? void 0 : "g");
};
Object.defineProperty(De, "__esModule", {
  value: !0
});
De.test = De.serialize = De.default = void 0;
var Zc = ed(gm), k = ed(Xc);
function ed(e) {
  return e && e.__esModule ? e : { default: e };
}
const Em = (e) => e.replace((0, Zc.default)(), (t) => {
  switch (t) {
    case k.default.red.close:
    case k.default.green.close:
    case k.default.cyan.close:
    case k.default.gray.close:
    case k.default.white.close:
    case k.default.yellow.close:
    case k.default.bgRed.close:
    case k.default.bgGreen.close:
    case k.default.bgYellow.close:
    case k.default.inverse.close:
    case k.default.dim.close:
    case k.default.bold.close:
    case k.default.reset.open:
    case k.default.reset.close:
      return "</>";
    case k.default.red.open:
      return "<red>";
    case k.default.green.open:
      return "<green>";
    case k.default.cyan.open:
      return "<cyan>";
    case k.default.gray.open:
      return "<gray>";
    case k.default.white.open:
      return "<white>";
    case k.default.yellow.open:
      return "<yellow>";
    case k.default.bgRed.open:
      return "<bgRed>";
    case k.default.bgGreen.open:
      return "<bgGreen>";
    case k.default.bgYellow.open:
      return "<bgYellow>";
    case k.default.inverse.open:
      return "<inverse>";
    case k.default.dim.open:
      return "<dim>";
    case k.default.bold.open:
      return "<bold>";
    default:
      return "";
  }
}), td = (e) => typeof e == "string" && !!e.match((0, Zc.default)());
De.test = td;
const rd = (e, t, r, n, o, a) => a(Em(e), t, r, n, o);
De.serialize = rd;
const _m = {
  serialize: rd,
  test: td
};
var Rm = _m;
De.default = Rm;
var Le = {};
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.test = Le.serialize = Le.default = void 0;
var Ps = Re;
const wm = " ", nd = ["DOMStringMap", "NamedNodeMap"], Cm = /^(HTML\w*Collection|NodeList)$/, Pm = (e) => nd.indexOf(e) !== -1 || Cm.test(e), od = (e) => e && e.constructor && !!e.constructor.name && Pm(e.constructor.name);
Le.test = od;
const Sm = (e) => e.constructor.name === "NamedNodeMap", ad = (e, t, r, n, o, a) => {
  const i = e.constructor.name;
  return ++n > t.maxDepth ? "[" + i + "]" : (t.min ? "" : i + wm) + (nd.indexOf(i) !== -1 ? "{" + (0, Ps.printObjectProperties)(
    Sm(e) ? Array.from(e).reduce((s, l) => (s[l.name] = l.value, s), {}) : { ...e },
    t,
    r,
    n,
    o,
    a
  ) + "}" : "[" + (0, Ps.printListItems)(
    Array.from(e),
    t,
    r,
    n,
    o,
    a
  ) + "]");
};
Le.serialize = ad;
const Tm = {
  serialize: ad,
  test: od
};
var Am = Tm;
Le.default = Am;
var Fe = {}, G = {}, Ll = {};
Object.defineProperty(Ll, "__esModule", {
  value: !0
});
Ll.default = Om;
function Om(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(G, "__esModule", {
  value: !0
});
G.printText = G.printProps = G.printElementAsLeaf = G.printElement = G.printComment = G.printChildren = void 0;
var id = xm(Ll);
function xm(e) {
  return e && e.__esModule ? e : { default: e };
}
const $m = (e, t, r, n, o, a, i) => {
  const s = n + r.indent, l = r.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, r, s, o, a);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = r.spacingOuter + s + d + r.spacingOuter + n), d = "{" + d + "}"), r.spacingInner + n + l.prop.open + u + l.prop.close + "=" + l.value.open + d + l.value.close;
  }).join("");
};
G.printProps = $m;
const qm = (e, t, r, n, o, a) => e.map(
  (i) => t.spacingOuter + r + (typeof i == "string" ? ld(i, t) : a(i, t, r, n, o))
).join("");
G.printChildren = qm;
const ld = (e, t) => {
  const r = t.colors.content;
  return r.open + (0, id.default)(e) + r.close;
};
G.printText = ld;
const Im = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + (0, id.default)(e) + "-->" + r.close;
};
G.printComment = Im;
const Mm = (e, t, r, n, o) => {
  const a = n.colors.tag;
  return a.open + "<" + e + (t && a.close + t + n.spacingOuter + o + a.open) + (r ? ">" + a.close + r + n.spacingOuter + o + a.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + a.close;
};
G.printElement = Mm;
const Nm = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
};
G.printElementAsLeaf = Nm;
Object.defineProperty(Fe, "__esModule", {
  value: !0
});
Fe.test = Fe.serialize = Fe.default = void 0;
var ct = G;
const Bm = 1, sd = 3, ud = 8, cd = 11, km = /^((HTML|SVG)\w*)?Element$/, Dm = (e) => {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}, Lm = (e) => {
  const t = e.constructor.name, { nodeType: r, tagName: n } = e, o = typeof n == "string" && n.includes("-") || Dm(e);
  return r === Bm && (km.test(t) || o) || r === sd && t === "Text" || r === ud && t === "Comment" || r === cd && t === "DocumentFragment";
}, dd = (e) => {
  var t;
  return (e == null || (t = e.constructor) === null || t === void 0 ? void 0 : t.name) && Lm(e);
};
Fe.test = dd;
function Fm(e) {
  return e.nodeType === sd;
}
function jm(e) {
  return e.nodeType === ud;
}
function li(e) {
  return e.nodeType === cd;
}
const fd = (e, t, r, n, o, a) => {
  if (Fm(e))
    return (0, ct.printText)(e.data, t);
  if (jm(e))
    return (0, ct.printComment)(e.data, t);
  const i = li(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++n > t.maxDepth ? (0, ct.printElementAsLeaf)(i, t) : (0, ct.printElement)(
    i,
    (0, ct.printProps)(
      li(e) ? [] : Array.from(e.attributes).map((s) => s.name).sort(),
      li(e) ? {} : Array.from(e.attributes).reduce((s, l) => (s[l.name] = l.value, s), {}),
      t,
      r + t.indent,
      n,
      o,
      a
    ),
    (0, ct.printChildren)(
      Array.prototype.slice.call(e.childNodes || e.children),
      t,
      r + t.indent,
      n,
      o,
      a
    ),
    t,
    r
  );
};
Fe.serialize = fd;
const Um = {
  serialize: fd,
  test: dd
};
var Hm = Um;
Fe.default = Hm;
var je = {};
Object.defineProperty(je, "__esModule", {
  value: !0
});
je.test = je.serialize = je.default = void 0;
var Zt = Re;
const Wm = "@@__IMMUTABLE_ITERABLE__@@", Vm = "@@__IMMUTABLE_LIST__@@", Gm = "@@__IMMUTABLE_KEYED__@@", zm = "@@__IMMUTABLE_MAP__@@", Ss = "@@__IMMUTABLE_ORDERED__@@", Ym = "@@__IMMUTABLE_RECORD__@@", Km = "@@__IMMUTABLE_SEQ__@@", Xm = "@@__IMMUTABLE_SET__@@", Qm = "@@__IMMUTABLE_STACK__@@", wt = (e) => "Immutable." + e, fn = (e) => "[" + e + "]", er = " ", Ts = "…", Jm = (e, t, r, n, o, a, i) => ++n > t.maxDepth ? fn(wt(i)) : wt(i) + er + "{" + (0, Zt.printIteratorEntries)(
  e.entries(),
  t,
  r,
  n,
  o,
  a
) + "}";
function Zm(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        const r = e._keys[t++];
        return {
          done: !1,
          value: [r, e.get(r)]
        };
      }
      return {
        done: !0,
        value: void 0
      };
    }
  };
}
const ey = (e, t, r, n, o, a) => {
  const i = wt(e._name || "Record");
  return ++n > t.maxDepth ? fn(i) : i + er + "{" + (0, Zt.printIteratorEntries)(
    Zm(e),
    t,
    r,
    n,
    o,
    a
  ) + "}";
}, ty = (e, t, r, n, o, a) => {
  const i = wt("Seq");
  return ++n > t.maxDepth ? fn(i) : e[Gm] ? i + er + "{" + // from Immutable collection of entries or from ECMAScript object
  (e._iter || e._object ? (0, Zt.printIteratorEntries)(
    e.entries(),
    t,
    r,
    n,
    o,
    a
  ) : Ts) + "}" : i + er + "[" + (e._iter || // from Immutable collection of values
  e._array || // from ECMAScript array
  e._collection || // from ECMAScript collection in immutable v4
  e._iterable ? (0, Zt.printIteratorValues)(
    e.values(),
    t,
    r,
    n,
    o,
    a
  ) : Ts) + "]";
}, si = (e, t, r, n, o, a, i) => ++n > t.maxDepth ? fn(wt(i)) : wt(i) + er + "[" + (0, Zt.printIteratorValues)(
  e.values(),
  t,
  r,
  n,
  o,
  a
) + "]", pd = (e, t, r, n, o, a) => e[zm] ? Jm(
  e,
  t,
  r,
  n,
  o,
  a,
  e[Ss] ? "OrderedMap" : "Map"
) : e[Vm] ? si(
  e,
  t,
  r,
  n,
  o,
  a,
  "List"
) : e[Xm] ? si(
  e,
  t,
  r,
  n,
  o,
  a,
  e[Ss] ? "OrderedSet" : "Set"
) : e[Qm] ? si(
  e,
  t,
  r,
  n,
  o,
  a,
  "Stack"
) : e[Km] ? ty(e, t, r, n, o, a) : ey(e, t, r, n, o, a);
je.serialize = pd;
const vd = (e) => e && (e[Wm] === !0 || e[Ym] === !0);
je.test = vd;
const ry = {
  serialize: pd,
  test: vd
};
var ny = ry;
je.default = ny;
var Ue = {}, zi = { exports: {} }, N = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var As;
function oy() {
  if (As)
    return N;
  As = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, o = 60114, a = 60109, i = 60110, s = 60112, l = 60113, u = 60120, c = 60115, d = 60116, f = 60121, m = 60122, y = 60117, h = 60129, P = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var p = Symbol.for;
    e = p("react.element"), t = p("react.portal"), r = p("react.fragment"), n = p("react.strict_mode"), o = p("react.profiler"), a = p("react.provider"), i = p("react.context"), s = p("react.forward_ref"), l = p("react.suspense"), u = p("react.suspense_list"), c = p("react.memo"), d = p("react.lazy"), f = p("react.block"), m = p("react.server.block"), y = p("react.fundamental"), h = p("react.debug_trace_mode"), P = p("react.legacy_hidden");
  }
  function _(R) {
    if (typeof R == "object" && R !== null) {
      var A = R.$$typeof;
      switch (A) {
        case e:
          switch (R = R.type, R) {
            case r:
            case o:
            case n:
            case l:
            case u:
              return R;
            default:
              switch (R = R && R.$$typeof, R) {
                case i:
                case s:
                case d:
                case c:
                case a:
                  return R;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  var C = a, w = e, S = s, v = r, b = d, E = c, M = t, F = o, L = n, j = l;
  return N.ContextConsumer = i, N.ContextProvider = C, N.Element = w, N.ForwardRef = S, N.Fragment = v, N.Lazy = b, N.Memo = E, N.Portal = M, N.Profiler = F, N.StrictMode = L, N.Suspense = j, N.isAsyncMode = function() {
    return !1;
  }, N.isConcurrentMode = function() {
    return !1;
  }, N.isContextConsumer = function(R) {
    return _(R) === i;
  }, N.isContextProvider = function(R) {
    return _(R) === a;
  }, N.isElement = function(R) {
    return typeof R == "object" && R !== null && R.$$typeof === e;
  }, N.isForwardRef = function(R) {
    return _(R) === s;
  }, N.isFragment = function(R) {
    return _(R) === r;
  }, N.isLazy = function(R) {
    return _(R) === d;
  }, N.isMemo = function(R) {
    return _(R) === c;
  }, N.isPortal = function(R) {
    return _(R) === t;
  }, N.isProfiler = function(R) {
    return _(R) === o;
  }, N.isStrictMode = function(R) {
    return _(R) === n;
  }, N.isSuspense = function(R) {
    return _(R) === l;
  }, N.isValidElementType = function(R) {
    return typeof R == "string" || typeof R == "function" || R === r || R === o || R === h || R === n || R === l || R === u || R === P || typeof R == "object" && R !== null && (R.$$typeof === d || R.$$typeof === c || R.$$typeof === a || R.$$typeof === i || R.$$typeof === s || R.$$typeof === y || R.$$typeof === f || R[0] === m);
  }, N.typeOf = _, N;
}
var B = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Os;
function ay() {
  return Os || (Os = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, o = 60114, a = 60109, i = 60110, s = 60112, l = 60113, u = 60120, c = 60115, d = 60116, f = 60121, m = 60122, y = 60117, h = 60129, P = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var p = Symbol.for;
      e = p("react.element"), t = p("react.portal"), r = p("react.fragment"), n = p("react.strict_mode"), o = p("react.profiler"), a = p("react.provider"), i = p("react.context"), s = p("react.forward_ref"), l = p("react.suspense"), u = p("react.suspense_list"), c = p("react.memo"), d = p("react.lazy"), f = p("react.block"), m = p("react.server.block"), y = p("react.fundamental"), p("react.scope"), p("react.opaque.id"), h = p("react.debug_trace_mode"), p("react.offscreen"), P = p("react.legacy_hidden");
    }
    var _ = !1;
    function C(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === r || T === o || T === h || T === n || T === l || T === u || T === P || _ || typeof T == "object" && T !== null && (T.$$typeof === d || T.$$typeof === c || T.$$typeof === a || T.$$typeof === i || T.$$typeof === s || T.$$typeof === y || T.$$typeof === f || T[0] === m));
    }
    function w(T) {
      if (typeof T == "object" && T !== null) {
        var ai = T.$$typeof;
        switch (ai) {
          case e:
            var mr = T.type;
            switch (mr) {
              case r:
              case o:
              case n:
              case l:
              case u:
                return mr;
              default:
                var ws = mr && mr.$$typeof;
                switch (ws) {
                  case i:
                  case s:
                  case d:
                  case c:
                  case a:
                    return ws;
                  default:
                    return ai;
                }
            }
          case t:
            return ai;
        }
      }
    }
    var S = i, v = a, b = e, E = s, M = r, F = d, L = c, j = t, R = o, A = n, I = l, U = !1, Z = !1;
    function Ke(T) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oi(T) {
      return Z || (Z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Xv(T) {
      return w(T) === i;
    }
    function Qv(T) {
      return w(T) === a;
    }
    function Jv(T) {
      return typeof T == "object" && T !== null && T.$$typeof === e;
    }
    function Zv(T) {
      return w(T) === s;
    }
    function em(T) {
      return w(T) === r;
    }
    function tm(T) {
      return w(T) === d;
    }
    function rm(T) {
      return w(T) === c;
    }
    function nm(T) {
      return w(T) === t;
    }
    function om(T) {
      return w(T) === o;
    }
    function am(T) {
      return w(T) === n;
    }
    function im(T) {
      return w(T) === l;
    }
    B.ContextConsumer = S, B.ContextProvider = v, B.Element = b, B.ForwardRef = E, B.Fragment = M, B.Lazy = F, B.Memo = L, B.Portal = j, B.Profiler = R, B.StrictMode = A, B.Suspense = I, B.isAsyncMode = Ke, B.isConcurrentMode = oi, B.isContextConsumer = Xv, B.isContextProvider = Qv, B.isElement = Jv, B.isForwardRef = Zv, B.isFragment = em, B.isLazy = tm, B.isMemo = rm, B.isPortal = nm, B.isProfiler = om, B.isStrictMode = am, B.isSuspense = im, B.isValidElementType = C, B.typeOf = w;
  }()), B;
}
process.env.NODE_ENV === "production" ? zi.exports = oy() : zi.exports = ay();
var iy = zi.exports;
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.test = Ue.serialize = Ue.default = void 0;
var Qe = ly(iy), br = G;
function md(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (md = function(n) {
    return n ? r : t;
  })(e);
}
function ly(e, t) {
  if (e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = md(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
const yd = (e, t = []) => (Array.isArray(e) ? e.forEach((r) => {
  yd(r, t);
}) : e != null && e !== !1 && t.push(e), t), xs = (e) => {
  const t = e.type;
  if (typeof t == "string")
    return t;
  if (typeof t == "function")
    return t.displayName || t.name || "Unknown";
  if (Qe.isFragment(e))
    return "React.Fragment";
  if (Qe.isSuspense(e))
    return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (Qe.isContextProvider(e))
      return "Context.Provider";
    if (Qe.isContextConsumer(e))
      return "Context.Consumer";
    if (Qe.isForwardRef(e)) {
      if (t.displayName)
        return t.displayName;
      const r = t.render.displayName || t.render.name || "";
      return r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef";
    }
    if (Qe.isMemo(e)) {
      const r = t.displayName || t.type.displayName || t.type.name || "";
      return r !== "" ? "Memo(" + r + ")" : "Memo";
    }
  }
  return "UNDEFINED";
}, sy = (e) => {
  const { props: t } = e;
  return Object.keys(t).filter((r) => r !== "children" && t[r] !== void 0).sort();
}, bd = (e, t, r, n, o, a) => ++n > t.maxDepth ? (0, br.printElementAsLeaf)(xs(e), t) : (0, br.printElement)(
  xs(e),
  (0, br.printProps)(
    sy(e),
    e.props,
    t,
    r + t.indent,
    n,
    o,
    a
  ),
  (0, br.printChildren)(
    yd(e.props.children),
    t,
    r + t.indent,
    n,
    o,
    a
  ),
  t,
  r
);
Ue.serialize = bd;
const hd = (e) => e != null && Qe.isElement(e);
Ue.test = hd;
const uy = {
  serialize: bd,
  test: hd
};
var cy = uy;
Ue.default = cy;
var He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.test = He.serialize = He.default = void 0;
var hr = G, Ur = function() {
  return typeof globalThis < "u" ? globalThis : typeof Ur < "u" ? Ur : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), ui = Ur["jest-symbol-do-not-touch"] || Ur.Symbol;
const dy = typeof ui == "function" && ui.for ? ui.for("react.test.json") : 245830487, fy = (e) => {
  const { props: t } = e;
  return t ? Object.keys(t).filter((r) => t[r] !== void 0).sort() : [];
}, gd = (e, t, r, n, o, a) => ++n > t.maxDepth ? (0, hr.printElementAsLeaf)(e.type, t) : (0, hr.printElement)(
  e.type,
  e.props ? (0, hr.printProps)(
    fy(e),
    e.props,
    t,
    r + t.indent,
    n,
    o,
    a
  ) : "",
  e.children ? (0, hr.printChildren)(
    e.children,
    t,
    r + t.indent,
    n,
    o,
    a
  ) : "",
  t,
  r
);
He.serialize = gd;
const Ed = (e) => e && e.$$typeof === dy;
He.test = Ed;
const py = {
  serialize: gd,
  test: Ed
};
var vy = py;
He.default = vy;
Object.defineProperty(Ee, "__esModule", {
  value: !0
});
var _d = Ee.default = xd = Ee.DEFAULT_OPTIONS = void 0, Rd = Ee.format = Md, Fl = Ee.plugins = void 0, my = ze(Xc), Ft = Re, yy = ze(
  ke
), by = ze(De), hy = ze(Le), gy = ze(Fe), Ey = ze(je), _y = ze(Ue), Ry = ze(
  He
);
function ze(e) {
  return e && e.__esModule ? e : { default: e };
}
const wd = Object.prototype.toString, wy = Date.prototype.toISOString, Cy = Error.prototype.toString, $s = RegExp.prototype.toString, ci = (e) => typeof e.constructor == "function" && e.constructor.name || "Object", Py = (e) => typeof window < "u" && e === window, Sy = /^Symbol\((.*)\)(.*)$/, Ty = /\n/gi;
class Cd extends Error {
  constructor(t, r) {
    super(t), this.stack = r, this.name = this.constructor.name;
  }
}
function Ay(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function Oy(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function xy(e) {
  return `${e}n`;
}
function qs(e, t) {
  return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]";
}
function Is(e) {
  return String(e).replace(Sy, "Symbol($1)");
}
function Ms(e) {
  return "[" + Cy.call(e) + "]";
}
function Pd(e, t, r, n) {
  if (e === !0 || e === !1)
    return "" + e;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const o = typeof e;
  if (o === "number")
    return Oy(e);
  if (o === "bigint")
    return xy(e);
  if (o === "string")
    return n ? '"' + e.replace(/"|\\/g, "\\$&") + '"' : '"' + e + '"';
  if (o === "function")
    return qs(e, t);
  if (o === "symbol")
    return Is(e);
  const a = wd.call(e);
  return a === "[object WeakMap]" ? "WeakMap {}" : a === "[object WeakSet]" ? "WeakSet {}" : a === "[object Function]" || a === "[object GeneratorFunction]" ? qs(e, t) : a === "[object Symbol]" ? Is(e) : a === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : wy.call(e) : a === "[object Error]" ? Ms(e) : a === "[object RegExp]" ? r ? $s.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : $s.call(e) : e instanceof Error ? Ms(e) : null;
}
function Sd(e, t, r, n, o, a) {
  if (o.indexOf(e) !== -1)
    return "[Circular]";
  o = o.slice(), o.push(e);
  const i = ++n > t.maxDepth, s = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !a)
    return Oe(e.toJSON(), t, r, n, o, !0);
  const l = wd.call(e);
  return l === "[object Arguments]" ? i ? "[Arguments]" : (s ? "" : "Arguments ") + "[" + (0, Ft.printListItems)(
    e,
    t,
    r,
    n,
    o,
    Oe
  ) + "]" : Ay(l) ? i ? "[" + e.constructor.name + "]" : (s || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : e.constructor.name + " ") + "[" + (0, Ft.printListItems)(
    e,
    t,
    r,
    n,
    o,
    Oe
  ) + "]" : l === "[object Map]" ? i ? "[Map]" : "Map {" + (0, Ft.printIteratorEntries)(
    e.entries(),
    t,
    r,
    n,
    o,
    Oe,
    " => "
  ) + "}" : l === "[object Set]" ? i ? "[Set]" : "Set {" + (0, Ft.printIteratorValues)(
    e.values(),
    t,
    r,
    n,
    o,
    Oe
  ) + "}" : i || Py(e) ? "[" + ci(e) + "]" : (s || !t.printBasicPrototype && ci(e) === "Object" ? "" : ci(e) + " ") + "{" + (0, Ft.printObjectProperties)(
    e,
    t,
    r,
    n,
    o,
    Oe
  ) + "}";
}
function $y(e) {
  return e.serialize != null;
}
function Td(e, t, r, n, o, a) {
  let i;
  try {
    i = $y(e) ? e.serialize(t, r, n, o, a, Oe) : e.print(
      t,
      (s) => Oe(s, r, n, o, a),
      (s) => {
        const l = n + r.indent;
        return l + s.replace(Ty, `
` + l);
      },
      {
        edgeSpacing: r.spacingOuter,
        min: r.min,
        spacing: r.spacingInner
      },
      r.colors
    );
  } catch (s) {
    throw new Cd(s.message, s.stack);
  }
  if (typeof i != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`
    );
  return i;
}
function Ad(e, t) {
  for (let r = 0; r < e.length; r++)
    try {
      if (e[r].test(t))
        return e[r];
    } catch (n) {
      throw new Cd(n.message, n.stack);
    }
  return null;
}
function Oe(e, t, r, n, o, a) {
  const i = Ad(t.plugins, e);
  if (i !== null)
    return Td(i, e, t, r, n, o);
  const s = Pd(
    e,
    t.printFunctionName,
    t.escapeRegex,
    t.escapeString
  );
  return s !== null ? s : Sd(
    e,
    t,
    r,
    n,
    o,
    a
  );
}
const jl = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, Od = Object.keys(jl), ie = {
  callToJSON: !0,
  compareKeys: void 0,
  escapeRegex: !1,
  escapeString: !0,
  highlight: !1,
  indent: 2,
  maxDepth: 1 / 0,
  min: !1,
  plugins: [],
  printBasicPrototype: !0,
  printFunctionName: !0,
  theme: jl
};
var xd = Ee.DEFAULT_OPTIONS = ie;
function qy(e) {
  if (Object.keys(e).forEach((t) => {
    if (!ie.hasOwnProperty(t))
      throw new Error(`pretty-format: Unknown option "${t}".`);
  }), e.min && e.indent !== void 0 && e.indent !== 0)
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  if (e.theme !== void 0) {
    if (e.theme === null)
      throw new Error('pretty-format: Option "theme" must not be null.');
    if (typeof e.theme != "object")
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`
      );
  }
}
const Iy = (e) => Od.reduce((t, r) => {
  const n = e.theme && e.theme[r] !== void 0 ? e.theme[r] : jl[r], o = n && my.default[n];
  if (o && typeof o.close == "string" && typeof o.open == "string")
    t[r] = o;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${r}" whose value "${n}" is undefined in ansi-styles.`
    );
  return t;
}, /* @__PURE__ */ Object.create(null)), My = () => Od.reduce((e, t) => (e[t] = {
  close: "",
  open: ""
}, e), /* @__PURE__ */ Object.create(null)), $d = (e) => e && e.printFunctionName !== void 0 ? e.printFunctionName : ie.printFunctionName, qd = (e) => e && e.escapeRegex !== void 0 ? e.escapeRegex : ie.escapeRegex, Id = (e) => e && e.escapeString !== void 0 ? e.escapeString : ie.escapeString, Ns = (e) => {
  var t;
  return {
    callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : ie.callToJSON,
    colors: e && e.highlight ? Iy(e) : My(),
    compareKeys: e && typeof e.compareKeys == "function" ? e.compareKeys : ie.compareKeys,
    escapeRegex: qd(e),
    escapeString: Id(e),
    indent: e && e.min ? "" : Ny(
      e && e.indent !== void 0 ? e.indent : ie.indent
    ),
    maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : ie.maxDepth,
    min: e && e.min !== void 0 ? e.min : ie.min,
    plugins: e && e.plugins !== void 0 ? e.plugins : ie.plugins,
    printBasicPrototype: (t = e == null ? void 0 : e.printBasicPrototype) !== null && t !== void 0 ? t : !0,
    printFunctionName: $d(e),
    spacingInner: e && e.min ? " " : `
`,
    spacingOuter: e && e.min ? "" : `
`
  };
};
function Ny(e) {
  return new Array(e + 1).join(" ");
}
function Md(e, t) {
  if (t && (qy(t), t.plugins)) {
    const n = Ad(t.plugins, e);
    if (n !== null)
      return Td(n, e, Ns(t), "", 0, []);
  }
  const r = Pd(
    e,
    $d(t),
    qd(t),
    Id(t)
  );
  return r !== null ? r : Sd(e, Ns(t), "", 0, []);
}
const By = {
  AsymmetricMatcher: yy.default,
  ConvertAnsi: by.default,
  DOMCollection: hy.default,
  DOMElement: gy.default,
  Immutable: Ey.default,
  ReactElement: _y.default,
  ReactTestComponent: Ry.default
};
Fl = Ee.plugins = By;
var ky = Md;
_d = Ee.default = ky;
const Dy = /* @__PURE__ */ cm({
  __proto__: null,
  get DEFAULT_OPTIONS() {
    return xd;
  },
  get default() {
    return _d;
  },
  format: Rd,
  get plugins() {
    return Fl;
  }
}, [Ee]);
var Ly = Object.prototype.toString;
function Fy(e) {
  return typeof e == "function" || Ly.call(e) === "[object Function]";
}
function jy(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var Uy = Math.pow(2, 53) - 1;
function Hy(e) {
  var t = jy(e);
  return Math.min(Math.max(t, 0), Uy);
}
function le(e, t) {
  var r = Array, n = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  for (var o = Hy(n.length), a = Fy(r) ? Object(new r(o)) : new Array(o), i = 0, s; i < o; )
    s = n[i], a[i] = s, i += 1;
  return a.length = o, a;
}
function tr(e) {
  "@babel/helpers - typeof";
  return tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tr(e);
}
function Wy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Nd(n.key), n);
  }
}
function Gy(e, t, r) {
  return t && Vy(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zy(e, t, r) {
  return t = Nd(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Nd(e) {
  var t = Yy(e, "string");
  return tr(t) === "symbol" ? t : String(t);
}
function Yy(e, t) {
  if (tr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (tr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ky = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    Wy(this, e), zy(this, "items", void 0), this.items = t;
  }
  return Gy(e, [{
    key: "add",
    value: function(r) {
      return this.has(r) === !1 && this.items.push(r), this;
    }
  }, {
    key: "clear",
    value: function() {
      this.items = [];
    }
  }, {
    key: "delete",
    value: function(r) {
      var n = this.items.length;
      return this.items = this.items.filter(function(o) {
        return o !== r;
      }), n !== this.items.length;
    }
  }, {
    key: "forEach",
    value: function(r) {
      var n = this;
      this.items.forEach(function(o) {
        r(o, o, n);
      });
    }
  }, {
    key: "has",
    value: function(r) {
      return this.items.indexOf(r) !== -1;
    }
  }, {
    key: "size",
    get: function() {
      return this.items.length;
    }
  }]), e;
}();
const Xy = typeof Set > "u" ? Set : Ky;
function z(e) {
  var t;
  return (
    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (t = e.localName) !== null && t !== void 0 ? t : (
      // eslint-disable-next-line no-restricted-properties -- required for the fallback
      e.tagName.toLowerCase()
    )
  );
}
var Qy = {
  article: "article",
  aside: "complementary",
  button: "button",
  datalist: "listbox",
  dd: "definition",
  details: "group",
  dialog: "dialog",
  dt: "term",
  fieldset: "group",
  figure: "figure",
  // WARNING: Only with an accessible name
  form: "form",
  footer: "contentinfo",
  h1: "heading",
  h2: "heading",
  h3: "heading",
  h4: "heading",
  h5: "heading",
  h6: "heading",
  header: "banner",
  hr: "separator",
  html: "document",
  legend: "legend",
  li: "listitem",
  math: "math",
  main: "main",
  menu: "list",
  nav: "navigation",
  ol: "list",
  optgroup: "group",
  // WARNING: Only in certain context
  option: "option",
  output: "status",
  progress: "progressbar",
  // WARNING: Only with an accessible name
  section: "region",
  summary: "button",
  table: "table",
  tbody: "rowgroup",
  textarea: "textbox",
  tfoot: "rowgroup",
  // WARNING: Only in certain context
  td: "cell",
  th: "columnheader",
  thead: "rowgroup",
  tr: "row",
  ul: "list"
}, Jy = {
  caption: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  code: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  deletion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  emphasis: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  generic: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
  insertion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  paragraph: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  presentation: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  strong: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  subscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  superscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"])
};
function Zy(e, t) {
  return [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    // "disabled",
    "aria-dropeffect",
    // "errormessage",
    "aria-flowto",
    "aria-grabbed",
    // "haspopup",
    "aria-hidden",
    // "invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription"
  ].some(function(r) {
    var n;
    return e.hasAttribute(r) && !((n = Jy[t]) !== null && n !== void 0 && n.has(r));
  });
}
function Bd(e, t) {
  return Zy(e, t);
}
function eb(e) {
  var t = rb(e);
  if (t === null || t === "presentation") {
    var r = tb(e);
    if (t !== "presentation" || Bd(e, r || ""))
      return r;
  }
  return t;
}
function tb(e) {
  var t = Qy[z(e)];
  if (t !== void 0)
    return t;
  switch (z(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href"))
        return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !Bd(e, "img") ? "presentation" : "img";
    case "input": {
      var r = e, n = r.type;
      switch (n) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return n;
        case "range":
          return "slider";
        case "email":
        case "tel":
        case "text":
        case "url":
          return e.hasAttribute("list") ? "combobox" : "textbox";
        case "search":
          return e.hasAttribute("list") ? "combobox" : "searchbox";
        case "number":
          return "spinbutton";
        default:
          return null;
      }
    }
    case "select":
      return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox";
  }
  return null;
}
function rb(e) {
  var t = e.getAttribute("role");
  if (t !== null) {
    var r = t.trim().split(" ")[0];
    if (r.length > 0)
      return r;
  }
  return null;
}
function D(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function kd(e) {
  return D(e) && z(e) === "caption";
}
function Ar(e) {
  return D(e) && z(e) === "input";
}
function nb(e) {
  return D(e) && z(e) === "optgroup";
}
function ob(e) {
  return D(e) && z(e) === "select";
}
function ab(e) {
  return D(e) && z(e) === "table";
}
function ib(e) {
  return D(e) && z(e) === "textarea";
}
function lb(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument, r = t.defaultView;
  if (r === null)
    throw new TypeError("no window available");
  return r;
}
function sb(e) {
  return D(e) && z(e) === "fieldset";
}
function ub(e) {
  return D(e) && z(e) === "legend";
}
function cb(e) {
  return D(e) && z(e) === "slot";
}
function db(e) {
  return D(e) && e.ownerSVGElement !== void 0;
}
function fb(e) {
  return D(e) && z(e) === "svg";
}
function pb(e) {
  return db(e) && z(e) === "title";
}
function Hr(e, t) {
  if (D(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(" "), n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r.map(function(o) {
      return n.getElementById(o);
    }).filter(
      function(o) {
        return o !== null;
      }
      // TODO: why does this not narrow?
    );
  }
  return [];
}
function be(e, t) {
  return D(e) ? t.indexOf(eb(e)) !== -1 : !1;
}
function vb(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function mb(e, t) {
  if (!D(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var r = t(e);
  return r.getPropertyValue("display") === "none" || r.getPropertyValue("visibility") === "hidden";
}
function yb(e) {
  return be(e, ["button", "combobox", "listbox", "textbox"]) || Dd(e, "range");
}
function Dd(e, t) {
  if (!D(e))
    return !1;
  switch (t) {
    case "range":
      return be(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function Bs(e, t) {
  var r = le(e.querySelectorAll(t));
  return Hr(e, "aria-owns").forEach(function(n) {
    r.push.apply(r, le(n.querySelectorAll(t)));
  }), r;
}
function bb(e) {
  return ob(e) ? e.selectedOptions || Bs(e, "[selected]") : Bs(e, '[aria-selected="true"]');
}
function hb(e) {
  return be(e, ["none", "presentation"]);
}
function gb(e) {
  return kd(e);
}
function Eb(e) {
  return be(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function _b(e) {
  return !1;
}
function Rb(e) {
  return Ar(e) || ib(e) ? e.value : e.textContent || "";
}
function ks(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function Ld(e) {
  var t = z(e);
  return t === "button" || t === "input" && e.getAttribute("type") !== "hidden" || t === "meter" || t === "output" || t === "progress" || t === "select" || t === "textarea";
}
function Fd(e) {
  if (Ld(e))
    return e;
  var t = null;
  return e.childNodes.forEach(function(r) {
    if (t === null && D(r)) {
      var n = Fd(r);
      n !== null && (t = n);
    }
  }), t;
}
function wb(e) {
  if (e.control !== void 0)
    return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : Fd(e);
}
function Cb(e) {
  var t = e.labels;
  if (t === null)
    return t;
  if (t !== void 0)
    return le(t);
  if (!Ld(e))
    return null;
  var r = e.ownerDocument;
  return le(r.querySelectorAll("label")).filter(function(n) {
    return wb(n) === e;
  });
}
function Pb(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? le(e.childNodes) : t;
}
function jd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = new Xy(), n = lb(e), o = t.compute, a = o === void 0 ? "name" : o, i = t.computedStyleSupportsPseudoElements, s = i === void 0 ? t.getComputedStyle !== void 0 : i, l = t.getComputedStyle, u = l === void 0 ? n.getComputedStyle.bind(n) : l, c = t.hidden, d = c === void 0 ? !1 : c;
  function f(p, _) {
    var C = "";
    if (D(p) && s) {
      var w = u(p, "::before"), S = ks(w);
      C = "".concat(S, " ").concat(C);
    }
    var v = cb(p) ? Pb(p) : le(p.childNodes).concat(Hr(p, "aria-owns"));
    if (v.forEach(function(M) {
      var F = P(M, {
        isEmbeddedInLabel: _.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), L = D(M) ? u(M).getPropertyValue("display") : "inline", j = L !== "inline" ? " " : "";
      C += "".concat(j).concat(F).concat(j);
    }), D(p) && s) {
      var b = u(p, "::after"), E = ks(b);
      C = "".concat(C, " ").concat(E);
    }
    return C.trim();
  }
  function m(p, _) {
    var C = p.getAttributeNode(_);
    return C !== null && !r.has(C) && C.value.trim() !== "" ? (r.add(C), C.value) : null;
  }
  function y(p) {
    return D(p) ? m(p, "title") : null;
  }
  function h(p) {
    if (!D(p))
      return null;
    if (sb(p)) {
      r.add(p);
      for (var _ = le(p.childNodes), C = 0; C < _.length; C += 1) {
        var w = _[C];
        if (ub(w))
          return P(w, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (ab(p)) {
      r.add(p);
      for (var S = le(p.childNodes), v = 0; v < S.length; v += 1) {
        var b = S[v];
        if (kd(b))
          return P(b, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (fb(p)) {
      r.add(p);
      for (var E = le(p.childNodes), M = 0; M < E.length; M += 1) {
        var F = E[M];
        if (pb(F))
          return F.textContent;
      }
      return null;
    } else if (z(p) === "img" || z(p) === "area") {
      var L = m(p, "alt");
      if (L !== null)
        return L;
    } else if (nb(p)) {
      var j = m(p, "label");
      if (j !== null)
        return j;
    }
    if (Ar(p) && (p.type === "button" || p.type === "submit" || p.type === "reset")) {
      var R = m(p, "value");
      if (R !== null)
        return R;
      if (p.type === "submit")
        return "Submit";
      if (p.type === "reset")
        return "Reset";
    }
    var A = Cb(p);
    if (A !== null && A.length !== 0)
      return r.add(p), le(A).map(function(Ke) {
        return P(Ke, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(Ke) {
        return Ke.length > 0;
      }).join(" ");
    if (Ar(p) && p.type === "image") {
      var I = m(p, "alt");
      if (I !== null)
        return I;
      var U = m(p, "title");
      return U !== null ? U : "Submit Query";
    }
    if (be(p, ["button"])) {
      var Z = f(p, {
        isEmbeddedInLabel: !1,
        isReferenced: !1
      });
      if (Z !== "")
        return Z;
    }
    return null;
  }
  function P(p, _) {
    if (r.has(p))
      return "";
    if (!d && mb(p, u) && !_.isReferenced)
      return r.add(p), "";
    var C = D(p) ? p.getAttributeNode("aria-labelledby") : null, w = C !== null && !r.has(C) ? Hr(p, "aria-labelledby") : [];
    if (a === "name" && !_.isReferenced && w.length > 0)
      return r.add(C), w.map(function(L) {
        return P(L, {
          isEmbeddedInLabel: _.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var S = _.recursion && yb(p) && a === "name";
    if (!S) {
      var v = (D(p) && p.getAttribute("aria-label") || "").trim();
      if (v !== "" && a === "name")
        return r.add(p), v;
      if (!hb(p)) {
        var b = h(p);
        if (b !== null)
          return r.add(p), b;
      }
    }
    if (be(p, ["menu"]))
      return r.add(p), "";
    if (S || _.isEmbeddedInLabel || _.isReferenced) {
      if (be(p, ["combobox", "listbox"])) {
        r.add(p);
        var E = bb(p);
        return E.length === 0 ? Ar(p) ? p.value : "" : le(E).map(function(L) {
          return P(L, {
            isEmbeddedInLabel: _.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (Dd(p, "range"))
        return r.add(p), p.hasAttribute("aria-valuetext") ? p.getAttribute("aria-valuetext") : p.hasAttribute("aria-valuenow") ? p.getAttribute("aria-valuenow") : p.getAttribute("value") || "";
      if (be(p, ["textbox"]))
        return r.add(p), Rb(p);
    }
    if (Eb(p) || D(p) && _.isReferenced || gb(p) || _b()) {
      var M = f(p, {
        isEmbeddedInLabel: _.isEmbeddedInLabel,
        isReferenced: !1
      });
      if (M !== "")
        return r.add(p), M;
    }
    if (p.nodeType === p.TEXT_NODE)
      return r.add(p), p.textContent || "";
    if (_.recursion)
      return r.add(p), f(p, {
        isEmbeddedInLabel: _.isEmbeddedInLabel,
        isReferenced: !1
      });
    var F = y(p);
    return F !== null ? (r.add(p), F) : (r.add(p), "");
  }
  return vb(P(e, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: a === "description",
    recursion: !1
  }));
}
function rr(e) {
  "@babel/helpers - typeof";
  return rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rr(e);
}
function Ds(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ls(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ds(Object(r), !0).forEach(function(n) {
      Sb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ds(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Sb(e, t, r) {
  return t = Tb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Tb(e) {
  var t = Ab(e, "string");
  return rr(t) === "symbol" ? t : String(t);
}
function Ab(e, t) {
  if (rr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (rr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ud(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Hr(e, "aria-describedby").map(function(o) {
    return jd(o, Ls(Ls({}, t), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (r === "") {
    var n = e.getAttribute("title");
    r = n === null ? "" : n;
  }
  return r;
}
function Ob(e) {
  return be(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function Ul(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Ob(e) ? "" : jd(e, t);
}
var se = {}, pn = {}, ot = {}, vn = {};
Object.defineProperty(vn, "__esModule", {
  value: !0
});
vn.default = void 0;
function xb() {
  var e = this, t = 0, r = {
    "@@iterator": function() {
      return r;
    },
    next: function() {
      if (t < e.length) {
        var o = e[t];
        return t = t + 1, {
          done: !1,
          value: o
        };
      } else
        return {
          done: !0
        };
    }
  };
  return r;
}
var $b = xb;
vn.default = $b;
Object.defineProperty(ot, "__esModule", {
  value: !0
});
ot.default = Mb;
var qb = Ib(vn);
function Ib(e) {
  return e && e.__esModule ? e : { default: e };
}
function Yi(e) {
  "@babel/helpers - typeof";
  return Yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yi(e);
}
function Mb(e, t) {
  return typeof Symbol == "function" && Yi(Symbol.iterator) === "symbol" && Object.defineProperty(e, Symbol.iterator, {
    value: qb.default.bind(t)
  }), e;
}
Object.defineProperty(pn, "__esModule", {
  value: !0
});
pn.default = void 0;
var Nb = Bb(ot);
function Bb(e) {
  return e && e.__esModule ? e : { default: e };
}
function di(e, t) {
  return Lb(e) || Db(e, t) || Hd(e, t) || kb();
}
function kb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Db(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, a = !1, i, s;
    try {
      for (r = r.call(e); !(o = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t)); o = !0)
        ;
    } catch (l) {
      a = !0, s = l;
    } finally {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (a)
          throw s;
      }
    }
    return n;
  }
}
function Lb(e) {
  if (Array.isArray(e))
    return e;
}
function Fb(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Hd(e)) || t) {
      r && (e = r);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(u) {
        throw u;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return a = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !a && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function Hd(e, t) {
  if (e) {
    if (typeof e == "string")
      return Fs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Fs(e, t);
  }
}
function Fs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var dt = [["aria-activedescendant", {
  type: "id"
}], ["aria-atomic", {
  type: "boolean"
}], ["aria-autocomplete", {
  type: "token",
  values: ["inline", "list", "both", "none"]
}], ["aria-busy", {
  type: "boolean"
}], ["aria-checked", {
  type: "tristate"
}], ["aria-colcount", {
  type: "integer"
}], ["aria-colindex", {
  type: "integer"
}], ["aria-colspan", {
  type: "integer"
}], ["aria-controls", {
  type: "idlist"
}], ["aria-current", {
  type: "token",
  values: ["page", "step", "location", "date", "time", !0, !1]
}], ["aria-describedby", {
  type: "idlist"
}], ["aria-details", {
  type: "id"
}], ["aria-disabled", {
  type: "boolean"
}], ["aria-dropeffect", {
  type: "tokenlist",
  values: ["copy", "execute", "link", "move", "none", "popup"]
}], ["aria-errormessage", {
  type: "id"
}], ["aria-expanded", {
  type: "boolean",
  allowundefined: !0
}], ["aria-flowto", {
  type: "idlist"
}], ["aria-grabbed", {
  type: "boolean",
  allowundefined: !0
}], ["aria-haspopup", {
  type: "token",
  values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"]
}], ["aria-hidden", {
  type: "boolean",
  allowundefined: !0
}], ["aria-invalid", {
  type: "token",
  values: ["grammar", !1, "spelling", !0]
}], ["aria-keyshortcuts", {
  type: "string"
}], ["aria-label", {
  type: "string"
}], ["aria-labelledby", {
  type: "idlist"
}], ["aria-level", {
  type: "integer"
}], ["aria-live", {
  type: "token",
  values: ["assertive", "off", "polite"]
}], ["aria-modal", {
  type: "boolean"
}], ["aria-multiline", {
  type: "boolean"
}], ["aria-multiselectable", {
  type: "boolean"
}], ["aria-orientation", {
  type: "token",
  values: ["vertical", "undefined", "horizontal"]
}], ["aria-owns", {
  type: "idlist"
}], ["aria-placeholder", {
  type: "string"
}], ["aria-posinset", {
  type: "integer"
}], ["aria-pressed", {
  type: "tristate"
}], ["aria-readonly", {
  type: "boolean"
}], ["aria-relevant", {
  type: "tokenlist",
  values: ["additions", "all", "removals", "text"]
}], ["aria-required", {
  type: "boolean"
}], ["aria-roledescription", {
  type: "string"
}], ["aria-rowcount", {
  type: "integer"
}], ["aria-rowindex", {
  type: "integer"
}], ["aria-rowspan", {
  type: "integer"
}], ["aria-selected", {
  type: "boolean",
  allowundefined: !0
}], ["aria-setsize", {
  type: "integer"
}], ["aria-sort", {
  type: "token",
  values: ["ascending", "descending", "none", "other"]
}], ["aria-valuemax", {
  type: "number"
}], ["aria-valuemin", {
  type: "number"
}], ["aria-valuenow", {
  type: "number"
}], ["aria-valuetext", {
  type: "string"
}]], Ki = {
  entries: function() {
    return dt;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = Fb(dt), o;
    try {
      for (n.s(); !(o = n.n()).done; ) {
        var a = di(o.value, 2), i = a[0], s = a[1];
        t.call(r, s, i, dt);
      }
    } catch (l) {
      n.e(l);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = dt.find(function(n) {
      return n[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Ki.get(t);
  },
  keys: function() {
    return dt.map(function(t) {
      var r = di(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return dt.map(function(t) {
      var r = di(t, 2), n = r[1];
      return n;
    });
  }
}, jb = (0, Nb.default)(Ki, Ki.entries());
pn.default = jb;
var mn = {};
Object.defineProperty(mn, "__esModule", {
  value: !0
});
mn.default = void 0;
var Ub = Hb(ot);
function Hb(e) {
  return e && e.__esModule ? e : { default: e };
}
function fi(e, t) {
  return Gb(e) || Vb(e, t) || Wd(e, t) || Wb();
}
function Wb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vb(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, a = !1, i, s;
    try {
      for (r = r.call(e); !(o = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t)); o = !0)
        ;
    } catch (l) {
      a = !0, s = l;
    } finally {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (a)
          throw s;
      }
    }
    return n;
  }
}
function Gb(e) {
  if (Array.isArray(e))
    return e;
}
function zb(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Wd(e)) || t) {
      r && (e = r);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(u) {
        throw u;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return a = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !a && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function Wd(e, t) {
  if (e) {
    if (typeof e == "string")
      return js(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return js(e, t);
  }
}
function js(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var ft = [["a", {
  reserved: !1
}], ["abbr", {
  reserved: !1
}], ["acronym", {
  reserved: !1
}], ["address", {
  reserved: !1
}], ["applet", {
  reserved: !1
}], ["area", {
  reserved: !1
}], ["article", {
  reserved: !1
}], ["aside", {
  reserved: !1
}], ["audio", {
  reserved: !1
}], ["b", {
  reserved: !1
}], ["base", {
  reserved: !0
}], ["bdi", {
  reserved: !1
}], ["bdo", {
  reserved: !1
}], ["big", {
  reserved: !1
}], ["blink", {
  reserved: !1
}], ["blockquote", {
  reserved: !1
}], ["body", {
  reserved: !1
}], ["br", {
  reserved: !1
}], ["button", {
  reserved: !1
}], ["canvas", {
  reserved: !1
}], ["caption", {
  reserved: !1
}], ["center", {
  reserved: !1
}], ["cite", {
  reserved: !1
}], ["code", {
  reserved: !1
}], ["col", {
  reserved: !0
}], ["colgroup", {
  reserved: !0
}], ["content", {
  reserved: !1
}], ["data", {
  reserved: !1
}], ["datalist", {
  reserved: !1
}], ["dd", {
  reserved: !1
}], ["del", {
  reserved: !1
}], ["details", {
  reserved: !1
}], ["dfn", {
  reserved: !1
}], ["dialog", {
  reserved: !1
}], ["dir", {
  reserved: !1
}], ["div", {
  reserved: !1
}], ["dl", {
  reserved: !1
}], ["dt", {
  reserved: !1
}], ["em", {
  reserved: !1
}], ["embed", {
  reserved: !1
}], ["fieldset", {
  reserved: !1
}], ["figcaption", {
  reserved: !1
}], ["figure", {
  reserved: !1
}], ["font", {
  reserved: !1
}], ["footer", {
  reserved: !1
}], ["form", {
  reserved: !1
}], ["frame", {
  reserved: !1
}], ["frameset", {
  reserved: !1
}], ["h1", {
  reserved: !1
}], ["h2", {
  reserved: !1
}], ["h3", {
  reserved: !1
}], ["h4", {
  reserved: !1
}], ["h5", {
  reserved: !1
}], ["h6", {
  reserved: !1
}], ["head", {
  reserved: !0
}], ["header", {
  reserved: !1
}], ["hgroup", {
  reserved: !1
}], ["hr", {
  reserved: !1
}], ["html", {
  reserved: !0
}], ["i", {
  reserved: !1
}], ["iframe", {
  reserved: !1
}], ["img", {
  reserved: !1
}], ["input", {
  reserved: !1
}], ["ins", {
  reserved: !1
}], ["kbd", {
  reserved: !1
}], ["keygen", {
  reserved: !1
}], ["label", {
  reserved: !1
}], ["legend", {
  reserved: !1
}], ["li", {
  reserved: !1
}], ["link", {
  reserved: !0
}], ["main", {
  reserved: !1
}], ["map", {
  reserved: !1
}], ["mark", {
  reserved: !1
}], ["marquee", {
  reserved: !1
}], ["menu", {
  reserved: !1
}], ["menuitem", {
  reserved: !1
}], ["meta", {
  reserved: !0
}], ["meter", {
  reserved: !1
}], ["nav", {
  reserved: !1
}], ["noembed", {
  reserved: !0
}], ["noscript", {
  reserved: !0
}], ["object", {
  reserved: !1
}], ["ol", {
  reserved: !1
}], ["optgroup", {
  reserved: !1
}], ["option", {
  reserved: !1
}], ["output", {
  reserved: !1
}], ["p", {
  reserved: !1
}], ["param", {
  reserved: !0
}], ["picture", {
  reserved: !0
}], ["pre", {
  reserved: !1
}], ["progress", {
  reserved: !1
}], ["q", {
  reserved: !1
}], ["rp", {
  reserved: !1
}], ["rt", {
  reserved: !1
}], ["rtc", {
  reserved: !1
}], ["ruby", {
  reserved: !1
}], ["s", {
  reserved: !1
}], ["samp", {
  reserved: !1
}], ["script", {
  reserved: !0
}], ["section", {
  reserved: !1
}], ["select", {
  reserved: !1
}], ["small", {
  reserved: !1
}], ["source", {
  reserved: !0
}], ["spacer", {
  reserved: !1
}], ["span", {
  reserved: !1
}], ["strike", {
  reserved: !1
}], ["strong", {
  reserved: !1
}], ["style", {
  reserved: !0
}], ["sub", {
  reserved: !1
}], ["summary", {
  reserved: !1
}], ["sup", {
  reserved: !1
}], ["table", {
  reserved: !1
}], ["tbody", {
  reserved: !1
}], ["td", {
  reserved: !1
}], ["textarea", {
  reserved: !1
}], ["tfoot", {
  reserved: !1
}], ["th", {
  reserved: !1
}], ["thead", {
  reserved: !1
}], ["time", {
  reserved: !1
}], ["title", {
  reserved: !0
}], ["tr", {
  reserved: !1
}], ["track", {
  reserved: !0
}], ["tt", {
  reserved: !1
}], ["u", {
  reserved: !1
}], ["ul", {
  reserved: !1
}], ["var", {
  reserved: !1
}], ["video", {
  reserved: !1
}], ["wbr", {
  reserved: !1
}], ["xmp", {
  reserved: !1
}]], Xi = {
  entries: function() {
    return ft;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = zb(ft), o;
    try {
      for (n.s(); !(o = n.n()).done; ) {
        var a = fi(o.value, 2), i = a[0], s = a[1];
        t.call(r, s, i, ft);
      }
    } catch (l) {
      n.e(l);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = ft.find(function(n) {
      return n[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Xi.get(t);
  },
  keys: function() {
    return ft.map(function(t) {
      var r = fi(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return ft.map(function(t) {
      var r = fi(t, 2), n = r[1];
      return n;
    });
  }
}, Yb = (0, Ub.default)(Xi, Xi.entries());
mn.default = Yb;
var Nt = {}, yn = {}, bn = {};
Object.defineProperty(bn, "__esModule", {
  value: !0
});
bn.default = void 0;
var Kb = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menuitem"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, Xb = Kb;
bn.default = Xb;
var hn = {};
Object.defineProperty(hn, "__esModule", {
  value: !0
});
hn.default = void 0;
var Qb = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, Jb = Qb;
hn.default = Jb;
var gn = {};
Object.defineProperty(gn, "__esModule", {
  value: !0
});
gn.default = void 0;
var Zb = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null
  },
  relatedConcepts: [{
    concept: {
      name: "input"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, eh = Zb;
gn.default = eh;
var En = {};
Object.defineProperty(En, "__esModule", {
  value: !0
});
En.default = void 0;
var th = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, rh = th;
En.default = rh;
var _n = {};
Object.defineProperty(_n, "__esModule", {
  value: !0
});
_n.default = void 0;
var nh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, oh = nh;
_n.default = oh;
var Rn = {};
Object.defineProperty(Rn, "__esModule", {
  value: !0
});
Rn.default = void 0;
var ah = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {
    "aria-atomic": null,
    "aria-busy": null,
    "aria-controls": null,
    "aria-current": null,
    "aria-describedby": null,
    "aria-details": null,
    "aria-dropeffect": null,
    "aria-flowto": null,
    "aria-grabbed": null,
    "aria-hidden": null,
    "aria-keyshortcuts": null,
    "aria-label": null,
    "aria-labelledby": null,
    "aria-live": null,
    "aria-owns": null,
    "aria-relevant": null,
    "aria-roledescription": null
  },
  relatedConcepts: [{
    concept: {
      name: "rel"
    },
    module: "HTML"
  }, {
    concept: {
      name: "role"
    },
    module: "XHTML"
  }, {
    concept: {
      name: "type"
    },
    module: "Dublin Core"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: []
}, ih = ah;
Rn.default = ih;
var wn = {};
Object.defineProperty(wn, "__esModule", {
  value: !0
});
wn.default = void 0;
var lh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "frontmatter"
    },
    module: "DTB"
  }, {
    concept: {
      name: "level"
    },
    module: "DTB"
  }, {
    concept: {
      name: "level"
    },
    module: "SMIL"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, sh = lh;
wn.default = sh;
var Cn = {};
Object.defineProperty(Cn, "__esModule", {
  value: !0
});
Cn.default = void 0;
var uh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, ch = uh;
Cn.default = ch;
var Pn = {};
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.default = void 0;
var dh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "group"]]
}, fh = dh;
Pn.default = fh;
var Sn = {};
Object.defineProperty(Sn, "__esModule", {
  value: !0
});
Sn.default = void 0;
var ph = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, vh = ph;
Sn.default = vh;
var Tn = {};
Object.defineProperty(Tn, "__esModule", {
  value: !0
});
Tn.default = void 0;
var mh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, yh = mh;
Tn.default = yh;
var An = {};
Object.defineProperty(An, "__esModule", {
  value: !0
});
An.default = void 0;
var bh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-modal": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, hh = bh;
An.default = hh;
Object.defineProperty(yn, "__esModule", {
  value: !0
});
yn.default = void 0;
var gh = te(bn), Eh = te(hn), _h = te(gn), Rh = te(En), wh = te(_n), Ch = te(Rn), Ph = te(wn), Sh = te(Cn), Th = te(Pn), Ah = te(Sn), Oh = te(Tn), xh = te(An);
function te(e) {
  return e && e.__esModule ? e : { default: e };
}
var $h = [["command", gh.default], ["composite", Eh.default], ["input", _h.default], ["landmark", Rh.default], ["range", wh.default], ["roletype", Ch.default], ["section", Ph.default], ["sectionhead", Sh.default], ["select", Th.default], ["structure", Ah.default], ["widget", Oh.default], ["window", xh.default]], qh = $h;
yn.default = qh;
var On = {}, xn = {};
Object.defineProperty(xn, "__esModule", {
  value: !0
});
xn.default = void 0;
var Ih = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-atomic": "true",
    "aria-live": "assertive"
  },
  relatedConcepts: [{
    concept: {
      name: "alert"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Mh = Ih;
xn.default = Mh;
var $n = {};
Object.defineProperty($n, "__esModule", {
  value: !0
});
$n.default = void 0;
var Nh = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "alert"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "alert"], ["roletype", "window", "dialog"]]
}, Bh = Nh;
$n.default = Bh;
var qn = {};
Object.defineProperty(qn, "__esModule", {
  value: !0
});
qn.default = void 0;
var kh = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "Device Independence Delivery Unit"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, Dh = kh;
qn.default = Dh;
var In = {};
Object.defineProperty(In, "__esModule", {
  value: !0
});
In.default = void 0;
var Lh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "article"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "document"]]
}, Fh = Lh;
In.default = Fh;
var Mn = {};
Object.defineProperty(Mn, "__esModule", {
  value: !0
});
Mn.default = void 0;
var jh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      constraints: ["direct descendant of document"],
      name: "header"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Uh = jh;
Mn.default = Uh;
var Nn = {};
Object.defineProperty(Nn, "__esModule", {
  value: !0
});
Nn.default = void 0;
var Hh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Wh = Hh;
Nn.default = Wh;
var Bn = {};
Object.defineProperty(Bn, "__esModule", {
  value: !0
});
Bn.default = void 0;
var Vh = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-pressed": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-pressed"
      }, {
        name: "type",
        value: "checkbox"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "aria-expanded",
        value: "false"
      }],
      name: "summary"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "aria-expanded",
        value: "true"
      }],
      constraints: ["direct descendant of details element with the open attribute defined"],
      name: "summary"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "button"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "image"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "reset"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "submit"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "button"
    },
    module: "HTML"
  }, {
    concept: {
      name: "trigger"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, Gh = Vh;
Bn.default = Gh;
var kn = {};
Object.defineProperty(kn, "__esModule", {
  value: !0
});
kn.default = void 0;
var zh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: ["figure", "grid", "table"],
  requiredContextRole: ["figure", "grid", "table"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Yh = zh;
kn.default = Yh;
var Dn = {};
Object.defineProperty(Dn, "__esModule", {
  value: !0
});
Dn.default = void 0;
var Kh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-colindex": null,
    "aria-colspan": null,
    "aria-rowindex": null,
    "aria-rowspan": null
  },
  relatedConcepts: [{
    concept: {
      constraints: ["descendant of table"],
      name: "td"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Xh = Kh;
Dn.default = Xh;
var Ln = {};
Object.defineProperty(Ln, "__esModule", {
  value: !0
});
Ln.default = void 0;
var Qh = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "checkbox"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "option"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input"]]
}, Jh = Qh;
Ln.default = Jh;
var Fn = {};
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
Fn.default = void 0;
var Zh = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, eg = Zh;
Fn.default = eg;
var jn = {};
Object.defineProperty(jn, "__esModule", {
  value: !0
});
jn.default = void 0;
var tg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-sort": null
  },
  relatedConcepts: [{
    attributes: [{
      name: "scope",
      value: "col"
    }],
    concept: {
      name: "th"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
}, rg = tg;
jn.default = rg;
var Un = {};
Object.defineProperty(Un, "__esModule", {
  value: !0
});
Un.default = void 0;
var ng = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-autocomplete": null,
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-expanded": "false",
    "aria-haspopup": "listbox"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "email"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "search"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "tel"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "text"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "multiple"
      }, {
        constraints: ["undefined"],
        name: "size"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "multiple"
      }, {
        name: "size",
        value: 1
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-controls": null,
    "aria-expanded": "false"
  },
  superClass: [["roletype", "widget", "input"]]
}, og = ng;
Un.default = og;
var Hn = {};
Object.defineProperty(Hn, "__esModule", {
  value: !0
});
Hn.default = void 0;
var ag = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "aside"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, ig = ag;
Hn.default = ig;
var Wn = {};
Object.defineProperty(Wn, "__esModule", {
  value: !0
});
Wn.default = void 0;
var lg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      constraints: ["direct descendant of document"],
      name: "footer"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, sg = lg;
Wn.default = sg;
var Vn = {};
Object.defineProperty(Vn, "__esModule", {
  value: !0
});
Vn.default = void 0;
var ug = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dd"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, cg = ug;
Vn.default = cg;
var Gn = {};
Object.defineProperty(Gn, "__esModule", {
  value: !0
});
Gn.default = void 0;
var dg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, fg = dg;
Gn.default = fg;
var zn = {};
Object.defineProperty(zn, "__esModule", {
  value: !0
});
zn.default = void 0;
var pg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dialog"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "window"]]
}, vg = pg;
zn.default = vg;
var Yn = {};
Object.defineProperty(Yn, "__esModule", {
  value: !0
});
Yn.default = void 0;
var mg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    module: "DAISY Guide"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "list"]]
}, yg = mg;
Yn.default = yg;
var Kn = {};
Object.defineProperty(Kn, "__esModule", {
  value: !0
});
Kn.default = void 0;
var bg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "Device Independence Delivery Unit"
    }
  }, {
    concept: {
      name: "body"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, hg = bg;
Kn.default = hg;
var Xn = {};
Object.defineProperty(Xn, "__esModule", {
  value: !0
});
Xn.default = void 0;
var gg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Eg = gg;
Xn.default = Eg;
var Qn = {};
Object.defineProperty(Qn, "__esModule", {
  value: !0
});
Qn.default = void 0;
var _g = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["article"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "list"]]
}, Rg = _g;
Qn.default = Rg;
var Jn = {};
Object.defineProperty(Jn, "__esModule", {
  value: !0
});
Jn.default = void 0;
var wg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "figure"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Cg = wg;
Jn.default = Cg;
var Zn = {};
Object.defineProperty(Zn, "__esModule", {
  value: !0
});
Zn.default = void 0;
var Pg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-label"
      }],
      name: "form"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-labelledby"
      }],
      name: "form"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "name"
      }],
      name: "form"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Sg = Pg;
Zn.default = Sg;
var eo = {};
Object.defineProperty(eo, "__esModule", {
  value: !0
});
eo.default = void 0;
var Tg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "span"
    },
    module: "HTML"
  }, {
    concept: {
      name: "div"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, Ag = Tg;
eo.default = Ag;
var to = {};
Object.defineProperty(to, "__esModule", {
  value: !0
});
to.default = void 0;
var Og = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-multiselectable": null,
    "aria-readonly": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "role",
        value: "grid"
      }],
      name: "table"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "table"]]
}, xg = Og;
to.default = xg;
var ro = {};
Object.defineProperty(ro, "__esModule", {
  value: !0
});
ro.default = void 0;
var $g = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-selected": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "role",
        value: "gridcell"
      }],
      name: "td"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "widget"]]
}, qg = $g;
ro.default = qg;
var no = {};
Object.defineProperty(no, "__esModule", {
  value: !0
});
no.default = void 0;
var Ig = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null
  },
  relatedConcepts: [{
    concept: {
      name: "details"
    },
    module: "HTML"
  }, {
    concept: {
      name: "fieldset"
    },
    module: "HTML"
  }, {
    concept: {
      name: "optgroup"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Mg = Ig;
no.default = Mg;
var oo = {};
Object.defineProperty(oo, "__esModule", {
  value: !0
});
oo.default = void 0;
var Ng = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-level": "2"
  },
  relatedConcepts: [{
    concept: {
      name: "h1"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h2"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h3"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h4"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h5"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h6"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-level": "2"
  },
  superClass: [["roletype", "structure", "sectionhead"]]
}, Bg = Ng;
oo.default = Bg;
var ao = {};
Object.defineProperty(ao, "__esModule", {
  value: !0
});
ao.default = void 0;
var kg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "alt"
      }],
      name: "img"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "alt"
      }],
      name: "img"
    },
    module: "HTML"
  }, {
    concept: {
      name: "imggroup"
    },
    module: "DTB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Dg = kg;
ao.default = Dg;
var io = {};
Object.defineProperty(io, "__esModule", {
  value: !0
});
io.default = void 0;
var Lg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Fg = Lg;
io.default = Fg;
var lo = {};
Object.defineProperty(lo, "__esModule", {
  value: !0
});
lo.default = void 0;
var jg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "href"
      }],
      name: "a"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "href"
      }],
      name: "area"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "href"
      }],
      name: "link"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, Ug = jg;
lo.default = Ug;
var so = {};
Object.defineProperty(so, "__esModule", {
  value: !0
});
so.default = void 0;
var Hg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menu"
    },
    module: "HTML"
  }, {
    concept: {
      name: "ol"
    },
    module: "HTML"
  }, {
    concept: {
      name: "ul"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["listitem"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Wg = Hg;
so.default = Wg;
var uo = {};
Object.defineProperty(uo, "__esModule", {
  value: !0
});
uo.default = void 0;
var Vg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-invalid": null,
    "aria-multiselectable": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-orientation": "vertical"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: [">1"],
        name: "size"
      }, {
        name: "multiple"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: [">1"],
        name: "size"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "multiple"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      name: "datalist"
    },
    module: "HTML"
  }, {
    concept: {
      name: "list"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["option", "group"], ["option"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, Gg = Vg;
uo.default = Gg;
var co = {};
Object.defineProperty(co, "__esModule", {
  value: !0
});
co.default = void 0;
var zg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-level": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      constraints: ["direct descendant of ol, ul or menu"],
      name: "li"
    },
    module: "HTML"
  }, {
    concept: {
      name: "item"
    },
    module: "XForms"
  }],
  requireContextRole: ["directory", "list"],
  requiredContextRole: ["directory", "list"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Yg = zg;
co.default = Yg;
var fo = {};
Object.defineProperty(fo, "__esModule", {
  value: !0
});
fo.default = void 0;
var Kg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-live": "polite"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Xg = Kg;
fo.default = Xg;
var po = {};
Object.defineProperty(po, "__esModule", {
  value: !0
});
po.default = void 0;
var Qg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "main"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Jg = Qg;
po.default = Jg;
var vo = {};
Object.defineProperty(vo, "__esModule", {
  value: !0
});
vo.default = void 0;
var Zg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, eE = Zg;
vo.default = eE;
var mo = {};
Object.defineProperty(mo, "__esModule", {
  value: !0
});
mo.default = void 0;
var tE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "math"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, rE = tE;
mo.default = rE;
var yo = {};
Object.defineProperty(yo, "__esModule", {
  value: !0
});
yo.default = void 0;
var nE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "vertical"
  },
  relatedConcepts: [{
    concept: {
      name: "MENU"
    },
    module: "JAPI"
  }, {
    concept: {
      name: "list"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }, {
    concept: {
      name: "sidebar"
    },
    module: "DTB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, oE = nE;
yo.default = oE;
var bo = {};
Object.defineProperty(bo, "__esModule", {
  value: !0
});
bo.default = void 0;
var aE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    concept: {
      name: "toolbar"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select", "menu"], ["roletype", "structure", "section", "group", "select", "menu"]]
}, iE = aE;
bo.default = iE;
var ho = {};
Object.defineProperty(ho, "__esModule", {
  value: !0
});
ho.default = void 0;
var lE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "MENU_ITEM"
    },
    module: "JAPI"
  }, {
    concept: {
      name: "listitem"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "menuitem"
    },
    module: "HTML"
  }, {
    concept: {
      name: "option"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, sE = lE;
ho.default = sE;
var go = {};
Object.defineProperty(go, "__esModule", {
  value: !0
});
go.default = void 0;
var uE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menuitem"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox"], ["roletype", "widget", "command", "menuitem"]]
}, cE = uE;
go.default = cE;
var Eo = {};
Object.defineProperty(Eo, "__esModule", {
  value: !0
});
Eo.default = void 0;
var dE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menuitem"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox", "menuitemcheckbox"], ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"], ["roletype", "widget", "input", "radio"]]
}, fE = dE;
Eo.default = fE;
var _o = {};
Object.defineProperty(_o, "__esModule", {
  value: !0
});
_o.default = void 0;
var pE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuetext": null,
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-valuenow": null
  },
  superClass: [["roletype", "structure", "range"]]
}, vE = pE;
_o.default = vE;
var Ro = {};
Object.defineProperty(Ro, "__esModule", {
  value: !0
});
Ro.default = void 0;
var mE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "nav"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, yE = mE;
Ro.default = yE;
var wo = {};
Object.defineProperty(wo, "__esModule", {
  value: !0
});
wo.default = void 0;
var bE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: []
}, hE = bE;
wo.default = hE;
var Co = {};
Object.defineProperty(Co, "__esModule", {
  value: !0
});
Co.default = void 0;
var gE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, EE = gE;
Co.default = EE;
var Po = {};
Object.defineProperty(Po, "__esModule", {
  value: !0
});
Po.default = void 0;
var _E = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-posinset": null,
    "aria-setsize": null,
    "aria-selected": "false"
  },
  relatedConcepts: [{
    concept: {
      name: "item"
    },
    module: "XForms"
  }, {
    concept: {
      name: "listitem"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "option"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-selected": "false"
  },
  superClass: [["roletype", "widget", "input"]]
}, RE = _E;
Po.default = RE;
var So = {};
Object.defineProperty(So, "__esModule", {
  value: !0
});
So.default = void 0;
var wE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, CE = wE;
So.default = CE;
var To = {};
Object.defineProperty(To, "__esModule", {
  value: !0
});
To.default = void 0;
var PE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, SE = PE;
To.default = SE;
var Ao = {};
Object.defineProperty(Ao, "__esModule", {
  value: !0
});
Ao.default = void 0;
var TE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuetext": null
  },
  relatedConcepts: [{
    concept: {
      name: "progress"
    },
    module: "HTML"
  }, {
    concept: {
      name: "status"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
}, AE = TE;
Ao.default = AE;
var Oo = {};
Object.defineProperty(Oo, "__esModule", {
  value: !0
});
Oo.default = void 0;
var OE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "radio"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input"]]
}, xE = OE;
Oo.default = xE;
var xo = {};
Object.defineProperty(xo, "__esModule", {
  value: !0
});
xo.default = void 0;
var $E = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      name: "list"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["radio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, qE = $E;
xo.default = qE;
var $o = {};
Object.defineProperty($o, "__esModule", {
  value: !0
});
$o.default = void 0;
var IE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-label"
      }],
      name: "section"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-labelledby"
      }],
      name: "section"
    },
    module: "HTML"
  }, {
    concept: {
      name: "Device Independence Glossart perceivable unit"
    }
  }, {
    concept: {
      name: "frame"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, ME = IE;
$o.default = ME;
var qo = {};
Object.defineProperty(qo, "__esModule", {
  value: !0
});
qo.default = void 0;
var NE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-colindex": null,
    "aria-expanded": null,
    "aria-level": null,
    "aria-posinset": null,
    "aria-rowindex": null,
    "aria-selected": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "tr"
    },
    module: "HTML"
  }],
  requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
  requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
  requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"], ["roletype", "widget"]]
}, BE = NE;
qo.default = BE;
var Io = {};
Object.defineProperty(Io, "__esModule", {
  value: !0
});
Io.default = void 0;
var kE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "tbody"
    },
    module: "HTML"
  }, {
    concept: {
      name: "tfoot"
    },
    module: "HTML"
  }, {
    concept: {
      name: "thead"
    },
    module: "HTML"
  }],
  requireContextRole: ["grid", "table", "treegrid"],
  requiredContextRole: ["grid", "table", "treegrid"],
  requiredOwnedElements: [["row"]],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, DE = kE;
Io.default = DE;
var Mo = {};
Object.defineProperty(Mo, "__esModule", {
  value: !0
});
Mo.default = void 0;
var LE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-sort": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "scope",
        value: "row"
      }],
      name: "th"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "scope",
        value: "rowgroup"
      }],
      name: "th"
    },
    module: "HTML"
  }],
  requireContextRole: ["row", "rowgroup"],
  requiredContextRole: ["row", "rowgroup"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
}, FE = LE;
Mo.default = FE;
var No = {};
Object.defineProperty(No, "__esModule", {
  value: !0
});
No.default = void 0;
var jE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-valuetext": null,
    "aria-orientation": "vertical",
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-controls": null,
    "aria-valuenow": null
  },
  superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
}, UE = jE;
No.default = UE;
var Bo = {};
Object.defineProperty(Bo, "__esModule", {
  value: !0
});
Bo.default = void 0;
var HE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, WE = HE;
Bo.default = WE;
var ko = {};
Object.defineProperty(ko, "__esModule", {
  value: !0
});
ko.default = void 0;
var VE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "search"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "input", "textbox"]]
}, GE = VE;
ko.default = GE;
var Do = {};
Object.defineProperty(Do, "__esModule", {
  value: !0
});
Do.default = void 0;
var zE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-orientation": "horizontal",
    "aria-valuemax": "100",
    "aria-valuemin": "0",
    "aria-valuenow": null,
    "aria-valuetext": null
  },
  relatedConcepts: [{
    concept: {
      name: "hr"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, YE = zE;
Do.default = YE;
var Lo = {};
Object.defineProperty(Lo, "__esModule", {
  value: !0
});
Lo.default = void 0;
var KE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-valuetext": null,
    "aria-orientation": "horizontal",
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "range"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-valuenow": null
  },
  superClass: [["roletype", "widget", "input"], ["roletype", "structure", "range"]]
}, XE = KE;
Lo.default = XE;
var Fo = {};
Object.defineProperty(Fo, "__esModule", {
  value: !0
});
Fo.default = void 0;
var QE = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-valuetext": null,
    "aria-valuenow": "0"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "number"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "widget", "input"], ["roletype", "structure", "range"]]
}, JE = QE;
Fo.default = JE;
var jo = {};
Object.defineProperty(jo, "__esModule", {
  value: !0
});
jo.default = void 0;
var ZE = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-atomic": "true",
    "aria-live": "polite"
  },
  relatedConcepts: [{
    concept: {
      name: "output"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, e_ = ZE;
jo.default = e_;
var Uo = {};
Object.defineProperty(Uo, "__esModule", {
  value: !0
});
Uo.default = void 0;
var t_ = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, r_ = t_;
Uo.default = r_;
var Ho = {};
Object.defineProperty(Ho, "__esModule", {
  value: !0
});
Ho.default = void 0;
var n_ = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, o_ = n_;
Ho.default = o_;
var Wo = {};
Object.defineProperty(Wo, "__esModule", {
  value: !0
});
Wo.default = void 0;
var a_ = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, i_ = a_;
Wo.default = i_;
var Vo = {};
Object.defineProperty(Vo, "__esModule", {
  value: !0
});
Vo.default = void 0;
var l_ = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "button"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox"]]
}, s_ = l_;
Vo.default = s_;
var Go = {};
Object.defineProperty(Go, "__esModule", {
  value: !0
});
Go.default = void 0;
var u_ = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-posinset": null,
    "aria-setsize": null,
    "aria-selected": "false"
  },
  relatedConcepts: [],
  requireContextRole: ["tablist"],
  requiredContextRole: ["tablist"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "sectionhead"], ["roletype", "widget"]]
}, c_ = u_;
Go.default = c_;
var zo = {};
Object.defineProperty(zo, "__esModule", {
  value: !0
});
zo.default = void 0;
var d_ = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-colcount": null,
    "aria-rowcount": null
  },
  relatedConcepts: [{
    concept: {
      name: "table"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, f_ = d_;
zo.default = f_;
var Yo = {};
Object.defineProperty(Yo, "__esModule", {
  value: !0
});
Yo.default = void 0;
var p_ = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-level": null,
    "aria-multiselectable": null,
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    module: "DAISY",
    concept: {
      name: "guide"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["tab"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"]]
}, v_ = p_;
Yo.default = v_;
var Ko = {};
Object.defineProperty(Ko, "__esModule", {
  value: !0
});
Ko.default = void 0;
var m_ = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, y_ = m_;
Ko.default = y_;
var Xo = {};
Object.defineProperty(Xo, "__esModule", {
  value: !0
});
Xo.default = void 0;
var b_ = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dfn"
    },
    module: "HTML"
  }, {
    concept: {
      name: "dt"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, h_ = b_;
Xo.default = h_;
var Qo = {};
Object.defineProperty(Qo, "__esModule", {
  value: !0
});
Qo.default = void 0;
var g_ = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-autocomplete": null,
    "aria-errormessage": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-multiline": null,
    "aria-placeholder": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "type"
      }, {
        constraints: ["undefined"],
        name: "list"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "email"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "tel"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "text"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "input"
    },
    module: "XForms"
  }, {
    concept: {
      name: "textarea"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "input"]]
}, E_ = g_;
Qo.default = E_;
var Jo = {};
Object.defineProperty(Jo, "__esModule", {
  value: !0
});
Jo.default = void 0;
var __ = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, R_ = __;
Jo.default = R_;
var Zo = {};
Object.defineProperty(Zo, "__esModule", {
  value: !0
});
Zo.default = void 0;
var w_ = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "status"]]
}, C_ = w_;
Zo.default = C_;
var ea = {};
Object.defineProperty(ea, "__esModule", {
  value: !0
});
ea.default = void 0;
var P_ = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    concept: {
      name: "menubar"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"]]
}, S_ = P_;
ea.default = S_;
var ta = {};
Object.defineProperty(ta, "__esModule", {
  value: !0
});
ta.default = void 0;
var T_ = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, A_ = T_;
ta.default = A_;
var ra = {};
Object.defineProperty(ra, "__esModule", {
  value: !0
});
ra.default = void 0;
var O_ = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-multiselectable": null,
    "aria-required": null,
    "aria-orientation": "vertical"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, x_ = O_;
ra.default = x_;
var na = {};
Object.defineProperty(na, "__esModule", {
  value: !0
});
na.default = void 0;
var $_ = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "grid"], ["roletype", "structure", "section", "table", "grid"], ["roletype", "widget", "composite", "select", "tree"], ["roletype", "structure", "section", "group", "select", "tree"]]
}, q_ = $_;
na.default = q_;
var oa = {};
Object.defineProperty(oa, "__esModule", {
  value: !0
});
oa.default = void 0;
var I_ = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-expanded": null,
    "aria-haspopup": null
  },
  relatedConcepts: [],
  requireContextRole: ["group", "tree"],
  requiredContextRole: ["group", "tree"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-selected": null
  },
  superClass: [["roletype", "structure", "section", "listitem"], ["roletype", "widget", "input", "option"]]
}, M_ = I_;
oa.default = M_;
Object.defineProperty(On, "__esModule", {
  value: !0
});
On.default = void 0;
var N_ = g(xn), B_ = g($n), k_ = g(qn), D_ = g(In), L_ = g(Mn), F_ = g(Nn), j_ = g(Bn), U_ = g(kn), H_ = g(Dn), W_ = g(Ln), V_ = g(Fn), G_ = g(jn), z_ = g(Un), Y_ = g(Hn), K_ = g(Wn), X_ = g(Vn), Q_ = g(Gn), J_ = g(zn), Z_ = g(Yn), eR = g(Kn), tR = g(Xn), rR = g(Qn), nR = g(Jn), oR = g(Zn), aR = g(eo), iR = g(to), lR = g(ro), sR = g(no), uR = g(oo), cR = g(ao), dR = g(io), fR = g(lo), pR = g(so), vR = g(uo), mR = g(co), yR = g(fo), bR = g(po), hR = g(vo), gR = g(mo), ER = g(yo), _R = g(bo), RR = g(ho), wR = g(go), CR = g(Eo), PR = g(_o), SR = g(Ro), TR = g(wo), AR = g(Co), OR = g(Po), xR = g(So), $R = g(To), qR = g(Ao), IR = g(Oo), MR = g(xo), NR = g($o), BR = g(qo), kR = g(Io), DR = g(Mo), LR = g(No), FR = g(Bo), jR = g(ko), UR = g(Do), HR = g(Lo), WR = g(Fo), VR = g(jo), GR = g(Uo), zR = g(Ho), YR = g(Wo), KR = g(Vo), XR = g(Go), QR = g(zo), JR = g(Yo), ZR = g(Ko), ew = g(Xo), tw = g(Qo), rw = g(Jo), nw = g(Zo), ow = g(ea), aw = g(ta), iw = g(ra), lw = g(na), sw = g(oa);
function g(e) {
  return e && e.__esModule ? e : { default: e };
}
var uw = [["alert", N_.default], ["alertdialog", B_.default], ["application", k_.default], ["article", D_.default], ["banner", L_.default], ["blockquote", F_.default], ["button", j_.default], ["caption", U_.default], ["cell", H_.default], ["checkbox", W_.default], ["code", V_.default], ["columnheader", G_.default], ["combobox", z_.default], ["complementary", Y_.default], ["contentinfo", K_.default], ["definition", X_.default], ["deletion", Q_.default], ["dialog", J_.default], ["directory", Z_.default], ["document", eR.default], ["emphasis", tR.default], ["feed", rR.default], ["figure", nR.default], ["form", oR.default], ["generic", aR.default], ["grid", iR.default], ["gridcell", lR.default], ["group", sR.default], ["heading", uR.default], ["img", cR.default], ["insertion", dR.default], ["link", fR.default], ["list", pR.default], ["listbox", vR.default], ["listitem", mR.default], ["log", yR.default], ["main", bR.default], ["marquee", hR.default], ["math", gR.default], ["menu", ER.default], ["menubar", _R.default], ["menuitem", RR.default], ["menuitemcheckbox", wR.default], ["menuitemradio", CR.default], ["meter", PR.default], ["navigation", SR.default], ["none", TR.default], ["note", AR.default], ["option", OR.default], ["paragraph", xR.default], ["presentation", $R.default], ["progressbar", qR.default], ["radio", IR.default], ["radiogroup", MR.default], ["region", NR.default], ["row", BR.default], ["rowgroup", kR.default], ["rowheader", DR.default], ["scrollbar", LR.default], ["search", FR.default], ["searchbox", jR.default], ["separator", UR.default], ["slider", HR.default], ["spinbutton", WR.default], ["status", VR.default], ["strong", GR.default], ["subscript", zR.default], ["superscript", YR.default], ["switch", KR.default], ["tab", XR.default], ["table", QR.default], ["tablist", JR.default], ["tabpanel", ZR.default], ["term", ew.default], ["textbox", tw.default], ["time", rw.default], ["timer", nw.default], ["toolbar", ow.default], ["tooltip", aw.default], ["tree", iw.default], ["treegrid", lw.default], ["treeitem", sw.default]], cw = uw;
On.default = cw;
var aa = {}, ia = {};
Object.defineProperty(ia, "__esModule", {
  value: !0
});
ia.default = void 0;
var dw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "abstract [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, fw = dw;
ia.default = fw;
var la = {};
Object.defineProperty(la, "__esModule", {
  value: !0
});
la.default = void 0;
var pw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "acknowledgments [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, vw = pw;
la.default = vw;
var sa = {};
Object.defineProperty(sa, "__esModule", {
  value: !0
});
sa.default = void 0;
var mw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "afterword [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, yw = mw;
sa.default = yw;
var ua = {};
Object.defineProperty(ua, "__esModule", {
  value: !0
});
ua.default = void 0;
var bw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "appendix [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, hw = bw;
ua.default = hw;
var ca = {};
Object.defineProperty(ca, "__esModule", {
  value: !0
});
ca.default = void 0;
var gw = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "content"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "referrer [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, Ew = gw;
ca.default = Ew;
var da = {};
Object.defineProperty(da, "__esModule", {
  value: !0
});
da.default = void 0;
var _w = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "EPUB biblioentry [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: ["doc-bibliography"],
  requiredContextRole: ["doc-bibliography"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "listitem"]]
}, Rw = _w;
da.default = Rw;
var fa = {};
Object.defineProperty(fa, "__esModule", {
  value: !0
});
fa.default = void 0;
var ww = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "bibliography [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["doc-biblioentry"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Cw = ww;
fa.default = Cw;
var pa = {};
Object.defineProperty(pa, "__esModule", {
  value: !0
});
pa.default = void 0;
var Pw = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "biblioref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, Sw = Pw;
pa.default = Sw;
var va = {};
Object.defineProperty(va, "__esModule", {
  value: !0
});
va.default = void 0;
var Tw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "chapter [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Aw = Tw;
va.default = Aw;
var ma = {};
Object.defineProperty(ma, "__esModule", {
  value: !0
});
ma.default = void 0;
var Ow = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "colophon [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, xw = Ow;
ma.default = xw;
var ya = {};
Object.defineProperty(ya, "__esModule", {
  value: !0
});
ya.default = void 0;
var $w = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "conclusion [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, qw = $w;
ya.default = qw;
var ba = {};
Object.defineProperty(ba, "__esModule", {
  value: !0
});
ba.default = void 0;
var Iw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "cover [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "img"]]
}, Mw = Iw;
ba.default = Mw;
var ha = {};
Object.defineProperty(ha, "__esModule", {
  value: !0
});
ha.default = void 0;
var Nw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "credit [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Bw = Nw;
ha.default = Bw;
var ga = {};
Object.defineProperty(ga, "__esModule", {
  value: !0
});
ga.default = void 0;
var kw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "credits [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Dw = kw;
ga.default = Dw;
var Ea = {};
Object.defineProperty(Ea, "__esModule", {
  value: !0
});
Ea.default = void 0;
var Lw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "dedication [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Fw = Lw;
Ea.default = Fw;
var _a = {};
Object.defineProperty(_a, "__esModule", {
  value: !0
});
_a.default = void 0;
var jw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "rearnote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: ["doc-endnotes"],
  requiredContextRole: ["doc-endnotes"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "listitem"]]
}, Uw = jw;
_a.default = Uw;
var Ra = {};
Object.defineProperty(Ra, "__esModule", {
  value: !0
});
Ra.default = void 0;
var Hw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "rearnotes [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["doc-endnote"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Ww = Hw;
Ra.default = Ww;
var wa = {};
Object.defineProperty(wa, "__esModule", {
  value: !0
});
wa.default = void 0;
var Vw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "epigraph [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Gw = Vw;
wa.default = Gw;
var Ca = {};
Object.defineProperty(Ca, "__esModule", {
  value: !0
});
Ca.default = void 0;
var zw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "epilogue [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Yw = zw;
Ca.default = Yw;
var Pa = {};
Object.defineProperty(Pa, "__esModule", {
  value: !0
});
Pa.default = void 0;
var Kw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "errata [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Xw = Kw;
Pa.default = Xw;
var Sa = {};
Object.defineProperty(Sa, "__esModule", {
  value: !0
});
Sa.default = void 0;
var Qw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Jw = Qw;
Sa.default = Jw;
var Ta = {};
Object.defineProperty(Ta, "__esModule", {
  value: !0
});
Ta.default = void 0;
var Zw = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "footnote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, eC = Zw;
Ta.default = eC;
var Aa = {};
Object.defineProperty(Aa, "__esModule", {
  value: !0
});
Aa.default = void 0;
var tC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "foreword [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, rC = tC;
Aa.default = rC;
var Oa = {};
Object.defineProperty(Oa, "__esModule", {
  value: !0
});
Oa.default = void 0;
var nC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "glossary [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["definition"], ["term"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, oC = nC;
Oa.default = oC;
var xa = {};
Object.defineProperty(xa, "__esModule", {
  value: !0
});
xa.default = void 0;
var aC = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "glossref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, iC = aC;
xa.default = iC;
var $a = {};
Object.defineProperty($a, "__esModule", {
  value: !0
});
$a.default = void 0;
var lC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "index [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, sC = lC;
$a.default = sC;
var qa = {};
Object.defineProperty(qa, "__esModule", {
  value: !0
});
qa.default = void 0;
var uC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "introduction [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, cC = uC;
qa.default = cC;
var Ia = {};
Object.defineProperty(Ia, "__esModule", {
  value: !0
});
Ia.default = void 0;
var dC = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "noteref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, fC = dC;
Ia.default = fC;
var Ma = {};
Object.defineProperty(Ma, "__esModule", {
  value: !0
});
Ma.default = void 0;
var pC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "notice [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "note"]]
}, vC = pC;
Ma.default = vC;
var Na = {};
Object.defineProperty(Na, "__esModule", {
  value: !0
});
Na.default = void 0;
var mC = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "pagebreak [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "separator"]]
}, yC = mC;
Na.default = yC;
var Ba = {};
Object.defineProperty(Ba, "__esModule", {
  value: !0
});
Ba.default = void 0;
var bC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "page-list [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, hC = bC;
Ba.default = hC;
var ka = {};
Object.defineProperty(ka, "__esModule", {
  value: !0
});
ka.default = void 0;
var gC = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "part [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, EC = gC;
ka.default = EC;
var Da = {};
Object.defineProperty(Da, "__esModule", {
  value: !0
});
Da.default = void 0;
var _C = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "preface [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, RC = _C;
Da.default = RC;
var La = {};
Object.defineProperty(La, "__esModule", {
  value: !0
});
La.default = void 0;
var wC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "prologue [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, CC = wC;
La.default = CC;
var Fa = {};
Object.defineProperty(Fa, "__esModule", {
  value: !0
});
Fa.default = void 0;
var PC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "pullquote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["none"]]
}, SC = PC;
Fa.default = SC;
var ja = {};
Object.defineProperty(ja, "__esModule", {
  value: !0
});
ja.default = void 0;
var TC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "qna [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, AC = TC;
ja.default = AC;
var Ua = {};
Object.defineProperty(Ua, "__esModule", {
  value: !0
});
Ua.default = void 0;
var OC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "subtitle [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "sectionhead"]]
}, xC = OC;
Ua.default = xC;
var Ha = {};
Object.defineProperty(Ha, "__esModule", {
  value: !0
});
Ha.default = void 0;
var $C = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "help [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "note"]]
}, qC = $C;
Ha.default = qC;
var Wa = {};
Object.defineProperty(Wa, "__esModule", {
  value: !0
});
Wa.default = void 0;
var IC = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "toc [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, MC = IC;
Wa.default = MC;
Object.defineProperty(aa, "__esModule", {
  value: !0
});
aa.default = void 0;
var NC = x(ia), BC = x(la), kC = x(sa), DC = x(ua), LC = x(ca), FC = x(da), jC = x(fa), UC = x(pa), HC = x(va), WC = x(ma), VC = x(ya), GC = x(ba), zC = x(ha), YC = x(ga), KC = x(Ea), XC = x(_a), QC = x(Ra), JC = x(wa), ZC = x(Ca), eP = x(Pa), tP = x(Sa), rP = x(Ta), nP = x(Aa), oP = x(Oa), aP = x(xa), iP = x($a), lP = x(qa), sP = x(Ia), uP = x(Ma), cP = x(Na), dP = x(Ba), fP = x(ka), pP = x(Da), vP = x(La), mP = x(Fa), yP = x(ja), bP = x(Ua), hP = x(Ha), gP = x(Wa);
function x(e) {
  return e && e.__esModule ? e : { default: e };
}
var EP = [["doc-abstract", NC.default], ["doc-acknowledgments", BC.default], ["doc-afterword", kC.default], ["doc-appendix", DC.default], ["doc-backlink", LC.default], ["doc-biblioentry", FC.default], ["doc-bibliography", jC.default], ["doc-biblioref", UC.default], ["doc-chapter", HC.default], ["doc-colophon", WC.default], ["doc-conclusion", VC.default], ["doc-cover", GC.default], ["doc-credit", zC.default], ["doc-credits", YC.default], ["doc-dedication", KC.default], ["doc-endnote", XC.default], ["doc-endnotes", QC.default], ["doc-epigraph", JC.default], ["doc-epilogue", ZC.default], ["doc-errata", eP.default], ["doc-example", tP.default], ["doc-footnote", rP.default], ["doc-foreword", nP.default], ["doc-glossary", oP.default], ["doc-glossref", aP.default], ["doc-index", iP.default], ["doc-introduction", lP.default], ["doc-noteref", sP.default], ["doc-notice", uP.default], ["doc-pagebreak", cP.default], ["doc-pagelist", dP.default], ["doc-part", fP.default], ["doc-preface", pP.default], ["doc-prologue", vP.default], ["doc-pullquote", mP.default], ["doc-qna", yP.default], ["doc-subtitle", bP.default], ["doc-tip", hP.default], ["doc-toc", gP.default]], _P = EP;
aa.default = _P;
var Va = {}, Ga = {};
Object.defineProperty(Ga, "__esModule", {
  value: !0
});
Ga.default = void 0;
var RP = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    module: "GRAPHICS",
    concept: {
      name: "graphics-object"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "img"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "article"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "document"]]
}, wP = RP;
Ga.default = wP;
var za = {};
Object.defineProperty(za, "__esModule", {
  value: !0
});
za.default = void 0;
var CP = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    module: "GRAPHICS",
    concept: {
      name: "graphics-document"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "group"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "img"
    }
  }, {
    module: "GRAPHICS",
    concept: {
      name: "graphics-symbol"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"]]
}, PP = CP;
za.default = PP;
var Ya = {};
Object.defineProperty(Ya, "__esModule", {
  value: !0
});
Ya.default = void 0;
var SP = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "img"]]
}, TP = SP;
Ya.default = TP;
Object.defineProperty(Va, "__esModule", {
  value: !0
});
Va.default = void 0;
var AP = Hl(Ga), OP = Hl(za), xP = Hl(Ya);
function Hl(e) {
  return e && e.__esModule ? e : { default: e };
}
var $P = [["graphics-document", AP.default], ["graphics-object", OP.default], ["graphics-symbol", xP.default]], qP = $P;
Va.default = qP;
Object.defineProperty(Nt, "__esModule", {
  value: !0
});
Nt.default = void 0;
var IP = cr(yn), MP = cr(On), NP = cr(aa), BP = cr(Va), kP = cr(ot);
function cr(e) {
  return e && e.__esModule ? e : { default: e };
}
function DP(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Qi(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Vd(e)) || t) {
      r && (e = r);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(u) {
        throw u;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return a = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !a && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function zt(e, t) {
  return jP(e) || FP(e, t) || Vd(e, t) || LP();
}
function LP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vd(e, t) {
  if (e) {
    if (typeof e == "string")
      return Us(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Us(e, t);
  }
}
function Us(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function FP(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, a = !1, i, s;
    try {
      for (r = r.call(e); !(o = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t)); o = !0)
        ;
    } catch (l) {
      a = !0, s = l;
    } finally {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (a)
          throw s;
      }
    }
    return n;
  }
}
function jP(e) {
  if (Array.isArray(e))
    return e;
}
var xe = [].concat(IP.default, MP.default, NP.default, BP.default);
xe.forEach(function(e) {
  var t = zt(e, 2), r = t[1], n = Qi(r.superClass), o;
  try {
    for (n.s(); !(o = n.n()).done; ) {
      var a = o.value, i = Qi(a), s;
      try {
        var l = function() {
          var c = s.value, d = xe.find(function(P) {
            var p = zt(P, 1), _ = p[0];
            return _ === c;
          });
          if (d)
            for (var f = d[1], m = 0, y = Object.keys(f.props); m < y.length; m++) {
              var h = y[m];
              Object.prototype.hasOwnProperty.call(r.props, h) || Object.assign(r.props, DP({}, h, f.props[h]));
            }
        };
        for (i.s(); !(s = i.n()).done; )
          l();
      } catch (u) {
        i.e(u);
      } finally {
        i.f();
      }
    }
  } catch (u) {
    n.e(u);
  } finally {
    n.f();
  }
});
var Ji = {
  entries: function() {
    return xe;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = Qi(xe), o;
    try {
      for (n.s(); !(o = n.n()).done; ) {
        var a = zt(o.value, 2), i = a[0], s = a[1];
        t.call(r, s, i, xe);
      }
    } catch (l) {
      n.e(l);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = xe.find(function(n) {
      return n[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Ji.get(t);
  },
  keys: function() {
    return xe.map(function(t) {
      var r = zt(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return xe.map(function(t) {
      var r = zt(t, 2), n = r[1];
      return n;
    });
  }
}, UP = (0, kP.default)(Ji, Ji.entries());
Nt.default = UP;
var Ka = {}, Hs = Object.prototype.toString, Gd = function(t) {
  var r = Hs.call(t), n = r === "[object Arguments]";
  return n || (n = r !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && Hs.call(t.callee) === "[object Function]"), n;
}, pi, Ws;
function HP() {
  if (Ws)
    return pi;
  Ws = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = Gd, o = Object.prototype.propertyIsEnumerable, a = !o.call({ toString: null }, "toString"), i = o.call(function() {
    }, "prototype"), s = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], l = function(f) {
      var m = f.constructor;
      return m && m.prototype === f;
    }, u = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, c = function() {
      if (typeof window > "u")
        return !1;
      for (var f in window)
        try {
          if (!u["$" + f] && t.call(window, f) && window[f] !== null && typeof window[f] == "object")
            try {
              l(window[f]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), d = function(f) {
      if (typeof window > "u" || !c)
        return l(f);
      try {
        return l(f);
      } catch {
        return !1;
      }
    };
    e = function(m) {
      var y = m !== null && typeof m == "object", h = r.call(m) === "[object Function]", P = n(m), p = y && r.call(m) === "[object String]", _ = [];
      if (!y && !h && !P)
        throw new TypeError("Object.keys called on a non-object");
      var C = i && h;
      if (p && m.length > 0 && !t.call(m, 0))
        for (var w = 0; w < m.length; ++w)
          _.push(String(w));
      if (P && m.length > 0)
        for (var S = 0; S < m.length; ++S)
          _.push(String(S));
      else
        for (var v in m)
          !(C && v === "prototype") && t.call(m, v) && _.push(String(v));
      if (a)
        for (var b = d(m), E = 0; E < s.length; ++E)
          !(b && s[E] === "constructor") && t.call(m, s[E]) && _.push(s[E]);
      return _;
    };
  }
  return pi = e, pi;
}
var WP = Array.prototype.slice, VP = Gd, Vs = Object.keys, Or = Vs ? function(t) {
  return Vs(t);
} : HP(), Gs = Object.keys;
Or.shim = function() {
  if (Object.keys) {
    var t = function() {
      var r = Object.keys(arguments);
      return r && r.length === arguments.length;
    }(1, 2);
    t || (Object.keys = function(n) {
      return VP(n) ? Gs(WP.call(n)) : Gs(n);
    });
  } else
    Object.keys = Or;
  return Object.keys || Or;
};
var Wl = Or, Xa = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var o = 42;
  t[r] = o;
  for (r in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var a = Object.getOwnPropertySymbols(t);
  if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var i = Object.getOwnPropertyDescriptor(t, r);
    if (i.value !== o || i.enumerable !== !0)
      return !1;
  }
  return !0;
}, zs = typeof Symbol < "u" && Symbol, GP = Xa, Vl = function() {
  return typeof zs != "function" || typeof Symbol != "function" || typeof zs("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : GP();
}, Ys = {
  foo: {}
}, zP = Object, YP = function() {
  return { __proto__: Ys }.foo === Ys.foo && !({ __proto__: null } instanceof zP);
}, KP = "Function.prototype.bind called on incompatible ", XP = Object.prototype.toString, QP = Math.max, JP = "[object Function]", Ks = function(t, r) {
  for (var n = [], o = 0; o < t.length; o += 1)
    n[o] = t[o];
  for (var a = 0; a < r.length; a += 1)
    n[a + t.length] = r[a];
  return n;
}, ZP = function(t, r) {
  for (var n = [], o = r, a = 0; o < t.length; o += 1, a += 1)
    n[a] = t[o];
  return n;
}, eS = function(e, t) {
  for (var r = "", n = 0; n < e.length; n += 1)
    r += e[n], n + 1 < e.length && (r += t);
  return r;
}, tS = function(t) {
  var r = this;
  if (typeof r != "function" || XP.apply(r) !== JP)
    throw new TypeError(KP + r);
  for (var n = ZP(arguments, 1), o, a = function() {
    if (this instanceof o) {
      var c = r.apply(
        this,
        Ks(n, arguments)
      );
      return Object(c) === c ? c : this;
    }
    return r.apply(
      t,
      Ks(n, arguments)
    );
  }, i = QP(0, r.length - n.length), s = [], l = 0; l < i; l++)
    s[l] = "$" + l;
  if (o = Function("binder", "return function (" + eS(s, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var u = function() {
    };
    u.prototype = r.prototype, o.prototype = new u(), u.prototype = null;
  }
  return o;
}, rS = tS, Gl = Function.prototype.bind || rS, nS = Function.prototype.call, oS = Object.prototype.hasOwnProperty, aS = Gl, zd = aS.call(nS, oS), $, Ct = SyntaxError, Yd = Function, Et = TypeError, vi = function(e) {
  try {
    return Yd('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Je = Object.getOwnPropertyDescriptor;
if (Je)
  try {
    Je({}, "");
  } catch {
    Je = null;
  }
var mi = function() {
  throw new Et();
}, iS = Je ? function() {
  try {
    return arguments.callee, mi;
  } catch {
    try {
      return Je(arguments, "callee").get;
    } catch {
      return mi;
    }
  }
}() : mi, pt = Vl(), lS = YP(), H = Object.getPrototypeOf || (lS ? function(e) {
  return e.__proto__;
} : null), bt = {}, sS = typeof Uint8Array > "u" || !H ? $ : H(Uint8Array), Ze = {
  "%AggregateError%": typeof AggregateError > "u" ? $ : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? $ : ArrayBuffer,
  "%ArrayIteratorPrototype%": pt && H ? H([][Symbol.iterator]()) : $,
  "%AsyncFromSyncIteratorPrototype%": $,
  "%AsyncFunction%": bt,
  "%AsyncGenerator%": bt,
  "%AsyncGeneratorFunction%": bt,
  "%AsyncIteratorPrototype%": bt,
  "%Atomics%": typeof Atomics > "u" ? $ : Atomics,
  "%BigInt%": typeof BigInt > "u" ? $ : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? $ : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? $ : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? $ : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? $ : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? $ : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? $ : FinalizationRegistry,
  "%Function%": Yd,
  "%GeneratorFunction%": bt,
  "%Int8Array%": typeof Int8Array > "u" ? $ : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? $ : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? $ : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": pt && H ? H(H([][Symbol.iterator]())) : $,
  "%JSON%": typeof JSON == "object" ? JSON : $,
  "%Map%": typeof Map > "u" ? $ : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !pt || !H ? $ : H((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? $ : Promise,
  "%Proxy%": typeof Proxy > "u" ? $ : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? $ : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? $ : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !pt || !H ? $ : H((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? $ : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": pt && H ? H(""[Symbol.iterator]()) : $,
  "%Symbol%": pt ? Symbol : $,
  "%SyntaxError%": Ct,
  "%ThrowTypeError%": iS,
  "%TypedArray%": sS,
  "%TypeError%": Et,
  "%Uint8Array%": typeof Uint8Array > "u" ? $ : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? $ : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? $ : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? $ : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? $ : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? $ : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? $ : WeakSet
};
if (H)
  try {
    null.error;
  } catch (e) {
    var uS = H(H(e));
    Ze["%Error.prototype%"] = uS;
  }
var cS = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = vi("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = vi("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = vi("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var o = e("%AsyncGenerator%");
    o && H && (r = H(o.prototype));
  }
  return Ze[t] = r, r;
}, Xs = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, dr = Gl, Wr = zd, dS = dr.call(Function.call, Array.prototype.concat), fS = dr.call(Function.apply, Array.prototype.splice), Qs = dr.call(Function.call, String.prototype.replace), Vr = dr.call(Function.call, String.prototype.slice), pS = dr.call(Function.call, RegExp.prototype.exec), vS = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, mS = /\\(\\)?/g, yS = function(t) {
  var r = Vr(t, 0, 1), n = Vr(t, -1);
  if (r === "%" && n !== "%")
    throw new Ct("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Ct("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return Qs(t, vS, function(a, i, s, l) {
    o[o.length] = s ? Qs(l, mS, "$1") : i || a;
  }), o;
}, bS = function(t, r) {
  var n = t, o;
  if (Wr(Xs, n) && (o = Xs[n], n = "%" + o[0] + "%"), Wr(Ze, n)) {
    var a = Ze[n];
    if (a === bt && (a = cS(n)), typeof a > "u" && !r)
      throw new Et("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: a
    };
  }
  throw new Ct("intrinsic " + t + " does not exist!");
}, re = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new Et("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Et('"allowMissing" argument must be a boolean');
  if (pS(/^%?[^%]*%?$/, t) === null)
    throw new Ct("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = yS(t), o = n.length > 0 ? n[0] : "", a = bS("%" + o + "%", r), i = a.name, s = a.value, l = !1, u = a.alias;
  u && (o = u[0], fS(n, dS([0, 1], u)));
  for (var c = 1, d = !0; c < n.length; c += 1) {
    var f = n[c], m = Vr(f, 0, 1), y = Vr(f, -1);
    if ((m === '"' || m === "'" || m === "`" || y === '"' || y === "'" || y === "`") && m !== y)
      throw new Ct("property names with quotes must have matching quotes");
    if ((f === "constructor" || !d) && (l = !0), o += "." + f, i = "%" + o + "%", Wr(Ze, i))
      s = Ze[i];
    else if (s != null) {
      if (!(f in s)) {
        if (!r)
          throw new Et("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (Je && c + 1 >= n.length) {
        var h = Je(s, f);
        d = !!h, d && "get" in h && !("originalValue" in h.get) ? s = h.get : s = s[f];
      } else
        d = Wr(s, f), s = s[f];
      d && !l && (Ze[i] = s);
    }
  }
  return s;
}, hS = re, Zi = hS("%Object.defineProperty%", !0), el = function() {
  if (Zi)
    try {
      return Zi({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
el.hasArrayLengthDefineBug = function() {
  if (!el())
    return null;
  try {
    return Zi([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Qa = el, gS = re, xr = gS("%Object.getOwnPropertyDescriptor%", !0);
if (xr)
  try {
    xr([], "length");
  } catch {
    xr = null;
  }
var zl = xr, ES = Qa(), Yl = re, Yt = ES && Yl("%Object.defineProperty%", !0);
if (Yt)
  try {
    Yt({}, "a", { value: 1 });
  } catch {
    Yt = !1;
  }
var _S = Yl("%SyntaxError%"), vt = Yl("%TypeError%"), Js = zl, Kl = function(t, r, n) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new vt("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new vt("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new vt("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new vt("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new vt("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new vt("`loose`, if provided, must be a boolean");
  var o = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, l = !!Js && Js(t, r);
  if (Yt)
    Yt(t, r, {
      configurable: i === null && l ? l.configurable : !i,
      enumerable: o === null && l ? l.enumerable : !o,
      value: n,
      writable: a === null && l ? l.writable : !a
    });
  else if (s || !o && !a && !i)
    t[r] = n;
  else
    throw new _S("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, RS = Wl, wS = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", CS = Object.prototype.toString, PS = Array.prototype.concat, Zs = Kl, SS = function(e) {
  return typeof e == "function" && CS.call(e) === "[object Function]";
}, Kd = Qa(), TS = function(e, t, r, n) {
  if (t in e) {
    if (n === !0) {
      if (e[t] === r)
        return;
    } else if (!SS(n) || !n())
      return;
  }
  Kd ? Zs(e, t, r, !0) : Zs(e, t, r);
}, Xd = function(e, t) {
  var r = arguments.length > 2 ? arguments[2] : {}, n = RS(t);
  wS && (n = PS.call(n, Object.getOwnPropertySymbols(t)));
  for (var o = 0; o < n.length; o += 1)
    TS(e, n[o], t[n[o]], r[n[o]]);
};
Xd.supportsDescriptors = !!Kd;
var at = Xd, Qd = { exports: {} }, Jd = re, eu = Kl, AS = Qa(), tu = zl, ru = Jd("%TypeError%"), OS = Jd("%Math.floor%"), xS = function(t, r) {
  if (typeof t != "function")
    throw new ru("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || OS(r) !== r)
    throw new ru("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], o = !0, a = !0;
  if ("length" in t && tu) {
    var i = tu(t, "length");
    i && !i.configurable && (o = !1), i && !i.writable && (a = !1);
  }
  return (o || a || !n) && (AS ? eu(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r,
    !0,
    !0
  ) : eu(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r
  )), t;
};
(function(e) {
  var t = Gl, r = re, n = xS, o = r("%TypeError%"), a = r("%Function.prototype.apply%"), i = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || t.call(i, a), l = r("%Object.defineProperty%", !0), u = r("%Math.max%");
  if (l)
    try {
      l({}, "a", { value: 1 });
    } catch {
      l = null;
    }
  e.exports = function(f) {
    if (typeof f != "function")
      throw new o("a function is required");
    var m = s(t, i, arguments);
    return n(
      m,
      1 + u(0, f.length - (arguments.length - 1)),
      !0
    );
  };
  var c = function() {
    return s(t, a, arguments);
  };
  l ? l(e.exports, "apply", { value: c }) : e.exports.apply = c;
})(Qd);
var Bt = Qd.exports, Zd = re, ef = Bt, $S = ef(Zd("String.prototype.indexOf")), ne = function(t, r) {
  var n = Zd(t, !!r);
  return typeof n == "function" && $S(t, ".prototype.") > -1 ? ef(n) : n;
}, qS = Wl, tf = Xa(), rf = ne, nu = Object, IS = rf("Array.prototype.push"), ou = rf("Object.prototype.propertyIsEnumerable"), MS = tf ? Object.getOwnPropertySymbols : null, nf = function(t, r) {
  if (t == null)
    throw new TypeError("target must be an object");
  var n = nu(t);
  if (arguments.length === 1)
    return n;
  for (var o = 1; o < arguments.length; ++o) {
    var a = nu(arguments[o]), i = qS(a), s = tf && (Object.getOwnPropertySymbols || MS);
    if (s)
      for (var l = s(a), u = 0; u < l.length; ++u) {
        var c = l[u];
        ou(a, c) && IS(i, c);
      }
    for (var d = 0; d < i.length; ++d) {
      var f = i[d];
      if (ou(a, f)) {
        var m = a[f];
        n[f] = m;
      }
    }
  }
  return n;
}, yi = nf, NS = function() {
  if (!Object.assign)
    return !1;
  for (var e = "abcdefghijklmnopqrst", t = e.split(""), r = {}, n = 0; n < t.length; ++n)
    r[t[n]] = t[n];
  var o = Object.assign({}, r), a = "";
  for (var i in o)
    a += i;
  return e !== a;
}, BS = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var e = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(e, "xy");
  } catch {
    return e[1] === "y";
  }
  return !1;
}, of = function() {
  return !Object.assign || NS() || BS() ? yi : Object.assign;
}, kS = at, DS = of, LS = function() {
  var t = DS();
  return kS(
    Object,
    { assign: t },
    { assign: function() {
      return Object.assign !== t;
    } }
  ), t;
}, FS = at, jS = Bt, US = nf, af = of, HS = LS, WS = jS.apply(af()), lf = function(t, r) {
  return WS(Object, arguments);
};
FS(lf, {
  getPolyfill: af,
  implementation: US,
  shim: HS
});
var VS = lf, nr = function() {
  return typeof (function() {
  }).name == "string";
}, Kt = Object.getOwnPropertyDescriptor;
if (Kt)
  try {
    Kt([], "length");
  } catch {
    Kt = null;
  }
nr.functionsHaveConfigurableNames = function() {
  if (!nr() || !Kt)
    return !1;
  var t = Kt(function() {
  }, "name");
  return !!t && !!t.configurable;
};
var GS = Function.prototype.bind;
nr.boundFunctionsHaveNames = function() {
  return nr() && typeof GS == "function" && (function() {
  }).bind().name !== "";
};
var zS = nr, au = Kl, YS = Qa(), KS = zS.functionsHaveConfigurableNames(), XS = TypeError, QS = function(t, r) {
  if (typeof t != "function")
    throw new XS("`fn` is not a function");
  var n = arguments.length > 2 && !!arguments[2];
  return (!n || KS) && (YS ? au(t, "name", r, !0, !0) : au(t, "name", r)), t;
}, JS = QS, ZS = Object, eT = TypeError, sf = JS(function() {
  if (this != null && this !== ZS(this))
    throw new eT("RegExp.prototype.flags getter called on non-object");
  var t = "";
  return this.hasIndices && (t += "d"), this.global && (t += "g"), this.ignoreCase && (t += "i"), this.multiline && (t += "m"), this.dotAll && (t += "s"), this.unicode && (t += "u"), this.unicodeSets && (t += "v"), this.sticky && (t += "y"), t;
}, "get flags", !0), tT = sf, rT = at.supportsDescriptors, nT = Object.getOwnPropertyDescriptor, uf = function() {
  if (rT && /a/mig.flags === "gim") {
    var t = nT(RegExp.prototype, "flags");
    if (t && typeof t.get == "function" && typeof RegExp.prototype.dotAll == "boolean" && typeof RegExp.prototype.hasIndices == "boolean") {
      var r = "", n = {};
      if (Object.defineProperty(n, "hasIndices", {
        get: function() {
          r += "d";
        }
      }), Object.defineProperty(n, "sticky", {
        get: function() {
          r += "y";
        }
      }), r === "dy")
        return t.get;
    }
  }
  return tT;
}, oT = at.supportsDescriptors, aT = uf, iT = Object.getOwnPropertyDescriptor, lT = Object.defineProperty, sT = TypeError, iu = Object.getPrototypeOf, uT = /a/, cT = function() {
  if (!oT || !iu)
    throw new sT("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var t = aT(), r = iu(uT), n = iT(r, "flags");
  return (!n || n.get !== t) && lT(r, "flags", {
    configurable: !0,
    enumerable: !1,
    get: t
  }), t;
}, dT = at, fT = Bt, pT = sf, cf = uf, vT = cT, df = fT(cf());
dT(df, {
  getPolyfill: cf,
  implementation: pT,
  shim: vT
});
var mT = df, $r = { exports: {} }, yT = Xa, it = function() {
  return yT() && !!Symbol.toStringTag;
}, bT = it(), hT = ne, tl = hT("Object.prototype.toString"), Ja = function(t) {
  return bT && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : tl(t) === "[object Arguments]";
}, ff = function(t) {
  return Ja(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && tl(t) !== "[object Array]" && tl(t.callee) === "[object Function]";
}, gT = function() {
  return Ja(arguments);
}();
Ja.isLegacyArguments = ff;
var pf = gT ? Ja : ff;
const ET = {}, _T = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ET
}, Symbol.toStringTag, { value: "Module" })), RT = /* @__PURE__ */ lm(_T);
var Xl = typeof Map == "function" && Map.prototype, bi = Object.getOwnPropertyDescriptor && Xl ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Gr = Xl && bi && typeof bi.get == "function" ? bi.get : null, lu = Xl && Map.prototype.forEach, Ql = typeof Set == "function" && Set.prototype, hi = Object.getOwnPropertyDescriptor && Ql ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, zr = Ql && hi && typeof hi.get == "function" ? hi.get : null, su = Ql && Set.prototype.forEach, wT = typeof WeakMap == "function" && WeakMap.prototype, Xt = wT ? WeakMap.prototype.has : null, CT = typeof WeakSet == "function" && WeakSet.prototype, Qt = CT ? WeakSet.prototype.has : null, PT = typeof WeakRef == "function" && WeakRef.prototype, uu = PT ? WeakRef.prototype.deref : null, ST = Boolean.prototype.valueOf, TT = Object.prototype.toString, AT = Function.prototype.toString, OT = String.prototype.match, Jl = String.prototype.slice, Ne = String.prototype.replace, xT = String.prototype.toUpperCase, cu = String.prototype.toLowerCase, vf = RegExp.prototype.test, du = Array.prototype.concat, ce = Array.prototype.join, $T = Array.prototype.slice, fu = Math.floor, rl = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, gi = Object.getOwnPropertySymbols, nl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Pt = typeof Symbol == "function" && typeof Symbol.iterator == "object", Y = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Pt || !0) ? Symbol.toStringTag : null, mf = Object.prototype.propertyIsEnumerable, pu = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function vu(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || vf.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -fu(-e) : fu(e);
    if (n !== e) {
      var o = String(n), a = Jl.call(t, o.length + 1);
      return Ne.call(o, r, "$&_") + "." + Ne.call(Ne.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Ne.call(t, r, "$&_");
}
var ol = RT, mu = ol.custom, yu = bf(mu) ? mu : null, qT = function e(t, r, n, o) {
  var a = r || {};
  if ($e(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if ($e(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = $e(a, "customInspect") ? a.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if ($e(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if ($e(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return gf(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var l = String(t);
    return s ? vu(t, l) : l;
  }
  if (typeof t == "bigint") {
    var u = String(t) + "n";
    return s ? vu(t, u) : u;
  }
  var c = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= c && c > 0 && typeof t == "object")
    return al(t) ? "[Array]" : "[Object]";
  var d = XT(a, n);
  if (typeof o > "u")
    o = [];
  else if (hf(o, t) >= 0)
    return "[Circular]";
  function f(R, A, I) {
    if (A && (o = $T.call(o), o.push(A)), I) {
      var U = {
        depth: a.depth
      };
      return $e(a, "quoteStyle") && (U.quoteStyle = a.quoteStyle), e(R, U, n + 1, o);
    }
    return e(R, a, n + 1, o);
  }
  if (typeof t == "function" && !bu(t)) {
    var m = jT(t), y = gr(t, f);
    return "[Function" + (m ? ": " + m : " (anonymous)") + "]" + (y.length > 0 ? " { " + ce.call(y, ", ") + " }" : "");
  }
  if (bf(t)) {
    var h = Pt ? Ne.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : nl.call(t);
    return typeof t == "object" && !Pt ? jt(h) : h;
  }
  if (zT(t)) {
    for (var P = "<" + cu.call(String(t.nodeName)), p = t.attributes || [], _ = 0; _ < p.length; _++)
      P += " " + p[_].name + "=" + yf(IT(p[_].value), "double", a);
    return P += ">", t.childNodes && t.childNodes.length && (P += "..."), P += "</" + cu.call(String(t.nodeName)) + ">", P;
  }
  if (al(t)) {
    if (t.length === 0)
      return "[]";
    var C = gr(t, f);
    return d && !KT(C) ? "[" + il(C, d) + "]" : "[ " + ce.call(C, ", ") + " ]";
  }
  if (NT(t)) {
    var w = gr(t, f);
    return !("cause" in Error.prototype) && "cause" in t && !mf.call(t, "cause") ? "{ [" + String(t) + "] " + ce.call(du.call("[cause]: " + f(t.cause), w), ", ") + " }" : w.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + ce.call(w, ", ") + " }";
  }
  if (typeof t == "object" && i) {
    if (yu && typeof t[yu] == "function" && ol)
      return ol(t, { depth: c - n });
    if (i !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (UT(t)) {
    var S = [];
    return lu && lu.call(t, function(R, A) {
      S.push(f(A, t, !0) + " => " + f(R, t));
    }), hu("Map", Gr.call(t), S, d);
  }
  if (VT(t)) {
    var v = [];
    return su && su.call(t, function(R) {
      v.push(f(R, t));
    }), hu("Set", zr.call(t), v, d);
  }
  if (HT(t))
    return Ei("WeakMap");
  if (GT(t))
    return Ei("WeakSet");
  if (WT(t))
    return Ei("WeakRef");
  if (kT(t))
    return jt(f(Number(t)));
  if (LT(t))
    return jt(f(rl.call(t)));
  if (DT(t))
    return jt(ST.call(t));
  if (BT(t))
    return jt(f(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (t === kl)
    return "{ [object globalThis] }";
  if (!MT(t) && !bu(t)) {
    var b = gr(t, f), E = pu ? pu(t) === Object.prototype : t instanceof Object || t.constructor === Object, M = t instanceof Object ? "" : "null prototype", F = !E && Y && Object(t) === t && Y in t ? Jl.call(Ye(t), 8, -1) : M ? "Object" : "", L = E || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", j = L + (F || M ? "[" + ce.call(du.call([], F || [], M || []), ": ") + "] " : "");
    return b.length === 0 ? j + "{}" : d ? j + "{" + il(b, d) + "}" : j + "{ " + ce.call(b, ", ") + " }";
  }
  return String(t);
};
function yf(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function IT(e) {
  return Ne.call(String(e), /"/g, "&quot;");
}
function al(e) {
  return Ye(e) === "[object Array]" && (!Y || !(typeof e == "object" && Y in e));
}
function MT(e) {
  return Ye(e) === "[object Date]" && (!Y || !(typeof e == "object" && Y in e));
}
function bu(e) {
  return Ye(e) === "[object RegExp]" && (!Y || !(typeof e == "object" && Y in e));
}
function NT(e) {
  return Ye(e) === "[object Error]" && (!Y || !(typeof e == "object" && Y in e));
}
function BT(e) {
  return Ye(e) === "[object String]" && (!Y || !(typeof e == "object" && Y in e));
}
function kT(e) {
  return Ye(e) === "[object Number]" && (!Y || !(typeof e == "object" && Y in e));
}
function DT(e) {
  return Ye(e) === "[object Boolean]" && (!Y || !(typeof e == "object" && Y in e));
}
function bf(e) {
  if (Pt)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !nl)
    return !1;
  try {
    return nl.call(e), !0;
  } catch {
  }
  return !1;
}
function LT(e) {
  if (!e || typeof e != "object" || !rl)
    return !1;
  try {
    return rl.call(e), !0;
  } catch {
  }
  return !1;
}
var FT = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function $e(e, t) {
  return FT.call(e, t);
}
function Ye(e) {
  return TT.call(e);
}
function jT(e) {
  if (e.name)
    return e.name;
  var t = OT.call(AT.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function hf(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function UT(e) {
  if (!Gr || !e || typeof e != "object")
    return !1;
  try {
    Gr.call(e);
    try {
      zr.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function HT(e) {
  if (!Xt || !e || typeof e != "object")
    return !1;
  try {
    Xt.call(e, Xt);
    try {
      Qt.call(e, Qt);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function WT(e) {
  if (!uu || !e || typeof e != "object")
    return !1;
  try {
    return uu.call(e), !0;
  } catch {
  }
  return !1;
}
function VT(e) {
  if (!zr || !e || typeof e != "object")
    return !1;
  try {
    zr.call(e);
    try {
      Gr.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function GT(e) {
  if (!Qt || !e || typeof e != "object")
    return !1;
  try {
    Qt.call(e, Qt);
    try {
      Xt.call(e, Xt);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function zT(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function gf(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return gf(Jl.call(e, 0, t.maxStringLength), t) + n;
  }
  var o = Ne.call(Ne.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, YT);
  return yf(o, "single", t);
}
function YT(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + xT.call(t.toString(16));
}
function jt(e) {
  return "Object(" + e + ")";
}
function Ei(e) {
  return e + " { ? }";
}
function hu(e, t, r, n) {
  var o = n ? il(r, n) : ce.call(r, ", ");
  return e + " (" + t + ") {" + o + "}";
}
function KT(e) {
  for (var t = 0; t < e.length; t++)
    if (hf(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function XT(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = ce.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: ce.call(Array(t + 1), r)
  };
}
function il(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + ce.call(e, "," + r) + `
` + t.prev;
}
function gr(e, t) {
  var r = al(e), n = [];
  if (r) {
    n.length = e.length;
    for (var o = 0; o < e.length; o++)
      n[o] = $e(e, o) ? t(e[o], e) : "";
  }
  var a = typeof gi == "function" ? gi(e) : [], i;
  if (Pt) {
    i = {};
    for (var s = 0; s < a.length; s++)
      i["$" + a[s]] = a[s];
  }
  for (var l in e)
    $e(e, l) && (r && String(Number(l)) === l && l < e.length || Pt && i["$" + l] instanceof Symbol || (vf.call(/[^\w$]/, l) ? n.push(t(l, e) + ": " + t(e[l], e)) : n.push(l + ": " + t(e[l], e))));
  if (typeof gi == "function")
    for (var u = 0; u < a.length; u++)
      mf.call(e, a[u]) && n.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
  return n;
}
var Zl = re, kt = ne, QT = qT, JT = Zl("%TypeError%"), Er = Zl("%WeakMap%", !0), _r = Zl("%Map%", !0), ZT = kt("WeakMap.prototype.get", !0), eA = kt("WeakMap.prototype.set", !0), tA = kt("WeakMap.prototype.has", !0), rA = kt("Map.prototype.get", !0), nA = kt("Map.prototype.set", !0), oA = kt("Map.prototype.has", !0), es = function(e, t) {
  for (var r = e, n; (n = r.next) !== null; r = n)
    if (n.key === t)
      return r.next = n.next, n.next = e.next, e.next = n, n;
}, aA = function(e, t) {
  var r = es(e, t);
  return r && r.value;
}, iA = function(e, t, r) {
  var n = es(e, t);
  n ? n.value = r : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: r
  };
}, lA = function(e, t) {
  return !!es(e, t);
}, Ef = function() {
  var t, r, n, o = {
    assert: function(a) {
      if (!o.has(a))
        throw new JT("Side channel does not contain " + QT(a));
    },
    get: function(a) {
      if (Er && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return ZT(t, a);
      } else if (_r) {
        if (r)
          return rA(r, a);
      } else if (n)
        return aA(n, a);
    },
    has: function(a) {
      if (Er && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return tA(t, a);
      } else if (_r) {
        if (r)
          return oA(r, a);
      } else if (n)
        return lA(n, a);
      return !1;
    },
    set: function(a, i) {
      Er && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new Er()), eA(t, a, i)) : _r ? (r || (r = new _r()), nA(r, a, i)) : (n || (n = { key: {}, next: null }), iA(n, a, i));
    }
  };
  return o;
}, sA = re, uA = zd, Ut = Ef(), me = sA("%TypeError%"), ts = {
  assert: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new me("`O` is not an object");
    if (typeof t != "string")
      throw new me("`slot` must be a string");
    if (Ut.assert(e), !ts.has(e, t))
      throw new me("`" + t + "` is not present on `O`");
  },
  get: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new me("`O` is not an object");
    if (typeof t != "string")
      throw new me("`slot` must be a string");
    var r = Ut.get(e);
    return r && r["$" + t];
  },
  has: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new me("`O` is not an object");
    if (typeof t != "string")
      throw new me("`slot` must be a string");
    var r = Ut.get(e);
    return !!r && uA(r, "$" + t);
  },
  set: function(e, t, r) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new me("`O` is not an object");
    if (typeof t != "string")
      throw new me("`slot` must be a string");
    var n = Ut.get(e);
    n || (n = {}, Ut.set(e, n)), n["$" + t] = r;
  }
};
Object.freeze && Object.freeze(ts);
var cA = ts, Ht = cA, dA = SyntaxError, gu = typeof StopIteration == "object" ? StopIteration : null, fA = function(t) {
  if (!gu)
    throw new dA("this environment lacks StopIteration");
  Ht.set(t, "[[Done]]", !1);
  var r = {
    next: function() {
      var o = Ht.get(this, "[[Iterator]]"), a = Ht.get(o, "[[Done]]");
      try {
        return {
          done: a,
          value: a ? void 0 : o.next()
        };
      } catch (i) {
        if (Ht.set(o, "[[Done]]", !0), i !== gu)
          throw i;
        return {
          done: !0,
          value: void 0
        };
      }
    }
  };
  return Ht.set(r, "[[Iterator]]", t), r;
}, pA = {}.toString, _f = Array.isArray || function(e) {
  return pA.call(e) == "[object Array]";
}, vA = String.prototype.valueOf, mA = function(t) {
  try {
    return vA.call(t), !0;
  } catch {
    return !1;
  }
}, yA = Object.prototype.toString, bA = "[object String]", hA = it(), Rf = function(t) {
  return typeof t == "string" ? !0 : typeof t != "object" ? !1 : hA ? mA(t) : yA.call(t) === bA;
}, rs = typeof Map == "function" && Map.prototype ? Map : null, gA = typeof Set == "function" && Set.prototype ? Set : null, Yr;
rs || (Yr = function(t) {
  return !1;
});
var wf = rs ? Map.prototype.has : null, Eu = gA ? Set.prototype.has : null;
!Yr && !wf && (Yr = function(t) {
  return !1;
});
var Cf = Yr || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (wf.call(t), Eu)
      try {
        Eu.call(t);
      } catch {
        return !0;
      }
    return t instanceof rs;
  } catch {
  }
  return !1;
}, EA = typeof Map == "function" && Map.prototype ? Map : null, ns = typeof Set == "function" && Set.prototype ? Set : null, Kr;
ns || (Kr = function(t) {
  return !1;
});
var _u = EA ? Map.prototype.has : null, Pf = ns ? Set.prototype.has : null;
!Kr && !Pf && (Kr = function(t) {
  return !1;
});
var Sf = Kr || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (Pf.call(t), _u)
      try {
        _u.call(t);
      } catch {
        return !0;
      }
    return t instanceof ns;
  } catch {
  }
  return !1;
}, Ru = pf, wu = fA;
if (Vl() || Xa()) {
  var _i = Symbol.iterator;
  $r.exports = function(t) {
    if (t != null && typeof t[_i] < "u")
      return t[_i]();
    if (Ru(t))
      return Array.prototype[_i].call(t);
  };
} else {
  var _A = _f, RA = Rf, Cu = re, wA = Cu("%Map%", !0), CA = Cu("%Set%", !0), oe = ne, Pu = oe("Array.prototype.push"), Su = oe("String.prototype.charCodeAt"), PA = oe("String.prototype.slice"), SA = function(t, r) {
    var n = t.length;
    if (r + 1 >= n)
      return r + 1;
    var o = Su(t, r);
    if (o < 55296 || o > 56319)
      return r + 1;
    var a = Su(t, r + 1);
    return a < 56320 || a > 57343 ? r + 1 : r + 2;
  }, Ri = function(t) {
    var r = 0;
    return {
      next: function() {
        var o = r >= t.length, a;
        return o || (a = t[r], r += 1), {
          done: o,
          value: a
        };
      }
    };
  }, Tu = function(t, r) {
    if (_A(t) || Ru(t))
      return Ri(t);
    if (RA(t)) {
      var n = 0;
      return {
        next: function() {
          var a = SA(t, n), i = PA(t, n, a);
          return n = a, {
            done: a > t.length,
            value: i
          };
        }
      };
    }
    if (r && typeof t["_es6-shim iterator_"] < "u")
      return t["_es6-shim iterator_"]();
  };
  if (!wA && !CA)
    $r.exports = function(t) {
      if (t != null)
        return Tu(t, !0);
    };
  else {
    var TA = Cf, AA = Sf, Au = oe("Map.prototype.forEach", !0), Ou = oe("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var xu = oe("Map.prototype.iterator", !0), $u = oe("Set.prototype.iterator", !0);
    var qu = oe("Map.prototype.@@iterator", !0) || oe("Map.prototype._es6-shim iterator_", !0), Iu = oe("Set.prototype.@@iterator", !0) || oe("Set.prototype._es6-shim iterator_", !0), OA = function(t) {
      if (TA(t)) {
        if (xu)
          return wu(xu(t));
        if (qu)
          return qu(t);
        if (Au) {
          var r = [];
          return Au(t, function(o, a) {
            Pu(r, [a, o]);
          }), Ri(r);
        }
      }
      if (AA(t)) {
        if ($u)
          return wu($u(t));
        if (Iu)
          return Iu(t);
        if (Ou) {
          var n = [];
          return Ou(t, function(o) {
            Pu(n, o);
          }), Ri(n);
        }
      }
    };
    $r.exports = function(t) {
      return OA(t) || Tu(t);
    };
  }
}
var xA = $r.exports, Mu = function(e) {
  return e !== e;
}, Tf = function(t, r) {
  return t === 0 && r === 0 ? 1 / t === 1 / r : !!(t === r || Mu(t) && Mu(r));
}, $A = Tf, Af = function() {
  return typeof Object.is == "function" ? Object.is : $A;
}, qA = Af, IA = at, MA = function() {
  var t = qA();
  return IA(Object, { is: t }, {
    is: function() {
      return Object.is !== t;
    }
  }), t;
}, NA = at, BA = Bt, kA = Tf, Of = Af, DA = MA, xf = BA(Of(), Object);
NA(xf, {
  getPolyfill: Of,
  implementation: kA,
  shim: DA
});
var LA = xf, $f = Function.prototype.toString, ht = typeof Reflect == "object" && Reflect !== null && Reflect.apply, ll, qr;
if (typeof ht == "function" && typeof Object.defineProperty == "function")
  try {
    ll = Object.defineProperty({}, "length", {
      get: function() {
        throw qr;
      }
    }), qr = {}, ht(function() {
      throw 42;
    }, null, ll);
  } catch (e) {
    e !== qr && (ht = null);
  }
else
  ht = null;
var FA = /^\s*class\b/, sl = function(t) {
  try {
    var r = $f.call(t);
    return FA.test(r);
  } catch {
    return !1;
  }
}, wi = function(t) {
  try {
    return sl(t) ? !1 : ($f.call(t), !0);
  } catch {
    return !1;
  }
}, Ir = Object.prototype.toString, jA = "[object Object]", UA = "[object Function]", HA = "[object GeneratorFunction]", WA = "[object HTMLAllCollection]", VA = "[object HTML document.all class]", GA = "[object HTMLCollection]", zA = typeof Symbol == "function" && !!Symbol.toStringTag, YA = !(0 in [,]), ul = function() {
  return !1;
};
if (typeof document == "object") {
  var KA = document.all;
  Ir.call(KA) === Ir.call(document.all) && (ul = function(t) {
    if ((YA || !t) && (typeof t > "u" || typeof t == "object"))
      try {
        var r = Ir.call(t);
        return (r === WA || r === VA || r === GA || r === jA) && t("") == null;
      } catch {
      }
    return !1;
  });
}
var XA = ht ? function(t) {
  if (ul(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  try {
    ht(t, null, ll);
  } catch (r) {
    if (r !== qr)
      return !1;
  }
  return !sl(t) && wi(t);
} : function(t) {
  if (ul(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (zA)
    return wi(t);
  if (sl(t))
    return !1;
  var r = Ir.call(t);
  return r !== UA && r !== HA && !/^\[object HTML/.test(r) ? !1 : wi(t);
}, QA = XA, JA = Object.prototype.toString, qf = Object.prototype.hasOwnProperty, ZA = function(t, r, n) {
  for (var o = 0, a = t.length; o < a; o++)
    qf.call(t, o) && (n == null ? r(t[o], o, t) : r.call(n, t[o], o, t));
}, eO = function(t, r, n) {
  for (var o = 0, a = t.length; o < a; o++)
    n == null ? r(t.charAt(o), o, t) : r.call(n, t.charAt(o), o, t);
}, tO = function(t, r, n) {
  for (var o in t)
    qf.call(t, o) && (n == null ? r(t[o], o, t) : r.call(n, t[o], o, t));
}, rO = function(t, r, n) {
  if (!QA(r))
    throw new TypeError("iterator must be a function");
  var o;
  arguments.length >= 3 && (o = n), JA.call(t) === "[object Array]" ? ZA(t, r, o) : typeof t == "string" ? eO(t, r, o) : tO(t, r, o);
}, nO = rO, Ci = [
  "BigInt64Array",
  "BigUint64Array",
  "Float32Array",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray"
], oO = typeof globalThis > "u" ? kl : globalThis, aO = function() {
  for (var t = [], r = 0; r < Ci.length; r++)
    typeof oO[Ci[r]] == "function" && (t[t.length] = Ci[r]);
  return t;
}, Xr = nO, iO = aO, Nu = Bt, os = ne, Mr = zl, lO = os("Object.prototype.toString"), If = it(), Bu = typeof globalThis > "u" ? kl : globalThis, cl = iO(), as = os("String.prototype.slice"), Pi = Object.getPrototypeOf, sO = os("Array.prototype.indexOf", !0) || function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n] === r)
      return n;
  return -1;
}, Qr = { __proto__: null };
If && Mr && Pi ? Xr(cl, function(e) {
  var t = new Bu[e]();
  if (Symbol.toStringTag in t) {
    var r = Pi(t), n = Mr(r, Symbol.toStringTag);
    if (!n) {
      var o = Pi(r);
      n = Mr(o, Symbol.toStringTag);
    }
    Qr["$" + e] = Nu(n.get);
  }
}) : Xr(cl, function(e) {
  var t = new Bu[e](), r = t.slice || t.set;
  r && (Qr["$" + e] = Nu(r));
});
var uO = function(t) {
  var r = !1;
  return Xr(Qr, function(n, o) {
    if (!r)
      try {
        "$" + n(t) === o && (r = as(o, 1));
      } catch {
      }
  }), r;
}, cO = function(t) {
  var r = !1;
  return Xr(Qr, function(n, o) {
    if (!r)
      try {
        n(t), r = as(o, 1);
      } catch {
      }
  }), r;
}, Mf = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!If) {
    var r = as(lO(t), 8, -1);
    return sO(cl, r) > -1 ? r : r !== "Object" ? !1 : cO(t);
  }
  return Mr ? uO(t) : null;
}, dO = Mf, fO = function(t) {
  return !!dO(t);
}, pO = Bt, vO = ne, Nf = re, mO = fO, ku = Nf("ArrayBuffer", !0), Du = Nf("Float32Array", !0), Nr = vO("ArrayBuffer.prototype.byteLength", !0), Lu = ku && !Nr && new ku().slice, Fu = Lu && pO(Lu), Bf = Nr || Fu ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return Nr ? Nr(t) : Fu(t, 0), !0;
  } catch {
    return !1;
  }
} : Du ? function(t) {
  try {
    return new Du(t).buffer === t && !mO(t);
  } catch (r) {
    return typeof t == "object" && r.name === "RangeError";
  }
} : function(t) {
  return !1;
}, yO = Date.prototype.getDay, bO = function(t) {
  try {
    return yO.call(t), !0;
  } catch {
    return !1;
  }
}, hO = Object.prototype.toString, gO = "[object Date]", EO = it(), _O = function(t) {
  return typeof t != "object" || t === null ? !1 : EO ? bO(t) : hO.call(t) === gO;
}, dl = ne, kf = it(), Df, Lf, fl, pl;
if (kf) {
  Df = dl("Object.prototype.hasOwnProperty"), Lf = dl("RegExp.prototype.exec"), fl = {};
  var Si = function() {
    throw fl;
  };
  pl = {
    toString: Si,
    valueOf: Si
  }, typeof Symbol.toPrimitive == "symbol" && (pl[Symbol.toPrimitive] = Si);
}
var RO = dl("Object.prototype.toString"), wO = Object.getOwnPropertyDescriptor, CO = "[object RegExp]", PO = kf ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  var r = wO(t, "lastIndex"), n = r && Df(r, "value");
  if (!n)
    return !1;
  try {
    Lf(t, pl);
  } catch (o) {
    return o === fl;
  }
} : function(t) {
  return !t || typeof t != "object" && typeof t != "function" ? !1 : RO(t) === CO;
}, SO = ne, ju = SO("SharedArrayBuffer.prototype.byteLength", !0), TO = ju ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return ju(t), !0;
  } catch {
    return !1;
  }
} : function(t) {
  return !1;
}, AO = Number.prototype.toString, OO = function(t) {
  try {
    return AO.call(t), !0;
  } catch {
    return !1;
  }
}, xO = Object.prototype.toString, $O = "[object Number]", qO = it(), IO = function(t) {
  return typeof t == "number" ? !0 : typeof t != "object" ? !1 : qO ? OO(t) : xO.call(t) === $O;
}, Ff = ne, MO = Ff("Boolean.prototype.toString"), NO = Ff("Object.prototype.toString"), BO = function(t) {
  try {
    return MO(t), !0;
  } catch {
    return !1;
  }
}, kO = "[object Boolean]", DO = it(), LO = function(t) {
  return typeof t == "boolean" ? !0 : t === null || typeof t != "object" ? !1 : DO && Symbol.toStringTag in t ? BO(t) : NO(t) === kO;
}, vl = { exports: {} }, FO = Object.prototype.toString, jO = Vl();
if (jO) {
  var UO = Symbol.prototype.toString, HO = /^Symbol\(.*\)$/, WO = function(t) {
    return typeof t.valueOf() != "symbol" ? !1 : HO.test(UO.call(t));
  };
  vl.exports = function(t) {
    if (typeof t == "symbol")
      return !0;
    if (FO.call(t) !== "[object Symbol]")
      return !1;
    try {
      return WO(t);
    } catch {
      return !1;
    }
  };
} else
  vl.exports = function(t) {
    return !1;
  };
var VO = vl.exports, ml = { exports: {} }, Uu = typeof BigInt < "u" && BigInt, GO = function() {
  return typeof Uu == "function" && typeof BigInt == "function" && typeof Uu(42) == "bigint" && typeof BigInt(42) == "bigint";
}, zO = GO();
if (zO) {
  var YO = BigInt.prototype.valueOf, KO = function(t) {
    try {
      return YO.call(t), !0;
    } catch {
    }
    return !1;
  };
  ml.exports = function(t) {
    return t === null || typeof t > "u" || typeof t == "boolean" || typeof t == "string" || typeof t == "number" || typeof t == "symbol" || typeof t == "function" ? !1 : typeof t == "bigint" ? !0 : KO(t);
  };
} else
  ml.exports = function(t) {
    return !1;
  };
var XO = ml.exports, QO = Rf, JO = IO, ZO = LO, e0 = VO, t0 = XO, r0 = function(t) {
  if (t == null || typeof t != "object" && typeof t != "function")
    return null;
  if (QO(t))
    return "String";
  if (JO(t))
    return "Number";
  if (ZO(t))
    return "Boolean";
  if (e0(t))
    return "Symbol";
  if (t0(t))
    return "BigInt";
}, Jr = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, Hu = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, Zr;
Jr || (Zr = function(t) {
  return !1;
});
var yl = Jr ? Jr.prototype.has : null, Ti = Hu ? Hu.prototype.has : null;
!Zr && !yl && (Zr = function(t) {
  return !1;
});
var n0 = Zr || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (yl.call(t, yl), Ti)
      try {
        Ti.call(t, Ti);
      } catch {
        return !0;
      }
    return t instanceof Jr;
  } catch {
  }
  return !1;
}, bl = { exports: {} }, o0 = re, jf = ne, a0 = o0("%WeakSet%", !0), Ai = jf("WeakSet.prototype.has", !0);
if (Ai) {
  var Oi = jf("WeakMap.prototype.has", !0);
  bl.exports = function(t) {
    if (!t || typeof t != "object")
      return !1;
    try {
      if (Ai(t, Ai), Oi)
        try {
          Oi(t, Oi);
        } catch {
          return !0;
        }
      return t instanceof a0;
    } catch {
    }
    return !1;
  };
} else
  bl.exports = function(t) {
    return !1;
  };
var i0 = bl.exports, l0 = Cf, s0 = Sf, u0 = n0, c0 = i0, d0 = function(t) {
  if (t && typeof t == "object") {
    if (l0(t))
      return "Map";
    if (s0(t))
      return "Set";
    if (u0(t))
      return "WeakMap";
    if (c0(t))
      return "WeakSet";
  }
  return !1;
}, f0 = ne, Wu = f0("ArrayBuffer.prototype.byteLength", !0), p0 = Bf, v0 = function(t) {
  return p0(t) ? Wu ? Wu(t) : t.byteLength : NaN;
}, Uf = VS, de = ne, Vu = mT, m0 = re, St = xA, y0 = Ef, Gu = LA, zu = pf, Yu = _f, Ku = Bf, Xu = _O, Qu = PO, Ju = TO, Zu = Wl, ec = r0, tc = d0, rc = Mf, nc = v0, oc = de("SharedArrayBuffer.prototype.byteLength", !0), ac = de("Date.prototype.getTime"), xi = Object.getPrototypeOf, ic = de("Object.prototype.toString"), en = m0("%Set%", !0), hl = de("Map.prototype.has", !0), tn = de("Map.prototype.get", !0), lc = de("Map.prototype.size", !0), rn = de("Set.prototype.add", !0), Hf = de("Set.prototype.delete", !0), nn = de("Set.prototype.has", !0), Br = de("Set.prototype.size", !0);
function sc(e, t, r, n) {
  for (var o = St(e), a; (a = o.next()) && !a.done; )
    if (ue(t, a.value, r, n))
      return Hf(e, a.value), !0;
  return !1;
}
function Wf(e) {
  if (typeof e > "u")
    return null;
  if (typeof e != "object")
    return typeof e == "symbol" ? !1 : typeof e == "string" || typeof e == "number" ? +e == +e : !0;
}
function b0(e, t, r, n, o, a) {
  var i = Wf(r);
  if (i != null)
    return i;
  var s = tn(t, i), l = Uf({}, o, { strict: !1 });
  return typeof s > "u" && !hl(t, i) || !ue(n, s, l, a) ? !1 : !hl(e, i) && ue(n, s, l, a);
}
function h0(e, t, r) {
  var n = Wf(r);
  return n ?? (nn(t, n) && !nn(e, n));
}
function uc(e, t, r, n, o, a) {
  for (var i = St(e), s, l; (s = i.next()) && !s.done; )
    if (l = s.value, // eslint-disable-next-line no-use-before-define
    ue(r, l, o, a) && ue(n, tn(t, l), o, a))
      return Hf(e, l), !0;
  return !1;
}
function ue(e, t, r, n) {
  var o = r || {};
  if (o.strict ? Gu(e, t) : e === t)
    return !0;
  var a = ec(e), i = ec(t);
  if (a !== i)
    return !1;
  if (!e || !t || typeof e != "object" && typeof t != "object")
    return o.strict ? Gu(e, t) : e == t;
  var s = n.has(e), l = n.has(t), u;
  if (s && l) {
    if (n.get(e) === n.get(t))
      return !0;
  } else
    u = {};
  return s || n.set(e, u), l || n.set(t, u), _0(e, t, o, n);
}
function cc(e) {
  return !e || typeof e != "object" || typeof e.length != "number" || typeof e.copy != "function" || typeof e.slice != "function" || e.length > 0 && typeof e[0] != "number" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function g0(e, t, r, n) {
  if (Br(e) !== Br(t))
    return !1;
  for (var o = St(e), a = St(t), i, s, l; (i = o.next()) && !i.done; )
    if (i.value && typeof i.value == "object")
      l || (l = new en()), rn(l, i.value);
    else if (!nn(t, i.value)) {
      if (r.strict || !h0(e, t, i.value))
        return !1;
      l || (l = new en()), rn(l, i.value);
    }
  if (l) {
    for (; (s = a.next()) && !s.done; )
      if (s.value && typeof s.value == "object") {
        if (!sc(l, s.value, r.strict, n))
          return !1;
      } else if (!r.strict && !nn(e, s.value) && !sc(l, s.value, r.strict, n))
        return !1;
    return Br(l) === 0;
  }
  return !0;
}
function E0(e, t, r, n) {
  if (lc(e) !== lc(t))
    return !1;
  for (var o = St(e), a = St(t), i, s, l, u, c, d; (i = o.next()) && !i.done; )
    if (u = i.value[0], c = i.value[1], u && typeof u == "object")
      l || (l = new en()), rn(l, u);
    else if (d = tn(t, u), typeof d > "u" && !hl(t, u) || !ue(c, d, r, n)) {
      if (r.strict || !b0(e, t, u, c, r, n))
        return !1;
      l || (l = new en()), rn(l, u);
    }
  if (l) {
    for (; (s = a.next()) && !s.done; )
      if (u = s.value[0], d = s.value[1], u && typeof u == "object") {
        if (!uc(l, e, u, d, r, n))
          return !1;
      } else if (!r.strict && (!e.has(u) || !ue(tn(e, u), d, r, n)) && !uc(l, e, u, d, Uf({}, r, { strict: !1 }), n))
        return !1;
    return Br(l) === 0;
  }
  return !0;
}
function _0(e, t, r, n) {
  var o, a;
  if (typeof e != typeof t || e == null || t == null || ic(e) !== ic(t) || zu(e) !== zu(t))
    return !1;
  var i = Yu(e), s = Yu(t);
  if (i !== s)
    return !1;
  var l = e instanceof Error, u = t instanceof Error;
  if (l !== u || (l || u) && (e.name !== t.name || e.message !== t.message))
    return !1;
  var c = Qu(e), d = Qu(t);
  if (c !== d || (c || d) && (e.source !== t.source || Vu(e) !== Vu(t)))
    return !1;
  var f = Xu(e), m = Xu(t);
  if (f !== m || (f || m) && ac(e) !== ac(t) || r.strict && xi && xi(e) !== xi(t))
    return !1;
  var y = rc(e), h = rc(t);
  if (y !== h)
    return !1;
  if (y || h) {
    if (e.length !== t.length)
      return !1;
    for (o = 0; o < e.length; o++)
      if (e[o] !== t[o])
        return !1;
    return !0;
  }
  var P = cc(e), p = cc(t);
  if (P !== p)
    return !1;
  if (P || p) {
    if (e.length !== t.length)
      return !1;
    for (o = 0; o < e.length; o++)
      if (e[o] !== t[o])
        return !1;
    return !0;
  }
  var _ = Ku(e), C = Ku(t);
  if (_ !== C)
    return !1;
  if (_ || C)
    return nc(e) !== nc(t) ? !1 : typeof Uint8Array == "function" && ue(new Uint8Array(e), new Uint8Array(t), r, n);
  var w = Ju(e), S = Ju(t);
  if (w !== S)
    return !1;
  if (w || S)
    return oc(e) !== oc(t) ? !1 : typeof Uint8Array == "function" && ue(new Uint8Array(e), new Uint8Array(t), r, n);
  if (typeof e != typeof t)
    return !1;
  var v = Zu(e), b = Zu(t);
  if (v.length !== b.length)
    return !1;
  for (v.sort(), b.sort(), o = v.length - 1; o >= 0; o--)
    if (v[o] != b[o])
      return !1;
  for (o = v.length - 1; o >= 0; o--)
    if (a = v[o], !ue(e[a], t[a], r, n))
      return !1;
  var E = tc(e), M = tc(t);
  return E !== M ? !1 : E === "Set" || M === "Set" ? g0(e, t, r, n) : E === "Map" ? E0(e, t, r, n) : !0;
}
var R0 = function(t, r, n) {
  return ue(t, r, n, y0());
};
Object.defineProperty(Ka, "__esModule", {
  value: !0
});
Ka.default = void 0;
var w0 = is(R0), C0 = is(ot), Vf = is(Nt);
function is(e) {
  return e && e.__esModule ? e : { default: e };
}
function $i(e, t) {
  return T0(e) || S0(e, t) || Gf(e, t) || P0();
}
function P0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function S0(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, a = !1, i, s;
    try {
      for (r = r.call(e); !(o = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t)); o = !0)
        ;
    } catch (l) {
      a = !0, s = l;
    } finally {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (a)
          throw s;
      }
    }
    return n;
  }
}
function T0(e) {
  if (Array.isArray(e))
    return e;
}
function A0(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Gf(e)) || t) {
      r && (e = r);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(u) {
        throw u;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return a = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !a && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function Gf(e, t) {
  if (e) {
    if (typeof e == "string")
      return dc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return dc(e, t);
  }
}
function dc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var qe = [], fc = Vf.default.keys();
for (var qi = 0; qi < fc.length; qi++) {
  var Ii = fc[qi], Mi = Vf.default.get(Ii);
  if (Mi)
    for (var pc = [].concat(Mi.baseConcepts, Mi.relatedConcepts), Ni = 0; Ni < pc.length; Ni++) {
      var vc = pc[Ni];
      if (vc.module === "HTML") {
        var Bi = vc.concept;
        Bi && function() {
          var e = JSON.stringify(Bi), t = qe.find(function(a) {
            return JSON.stringify(a[0]) === e;
          }), r = void 0;
          t ? r = t[1] : r = [];
          for (var n = !0, o = 0; o < r.length; o++)
            if (r[o] === Ii) {
              n = !1;
              break;
            }
          n && r.push(Ii), qe.push([Bi, r]);
        }();
      }
    }
}
var gl = {
  entries: function() {
    return qe;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = A0(qe), o;
    try {
      for (n.s(); !(o = n.n()).done; ) {
        var a = $i(o.value, 2), i = a[0], s = a[1];
        t.call(r, s, i, qe);
      }
    } catch (l) {
      n.e(l);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = qe.find(function(n) {
      return (0, w0.default)(t, n[0]);
    });
    return r && r[1];
  },
  has: function(t) {
    return !!gl.get(t);
  },
  keys: function() {
    return qe.map(function(t) {
      var r = $i(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return qe.map(function(t) {
      var r = $i(t, 2), n = r[1];
      return n;
    });
  }
}, O0 = (0, C0.default)(gl, gl.entries());
Ka.default = O0;
var Za = {};
Object.defineProperty(Za, "__esModule", {
  value: !0
});
Za.default = void 0;
var x0 = Yf(ot), zf = Yf(Nt);
function Yf(e) {
  return e && e.__esModule ? e : { default: e };
}
function ki(e, t) {
  return I0(e) || q0(e, t) || Kf(e, t) || $0();
}
function $0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q0(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, a = !1, i, s;
    try {
      for (r = r.call(e); !(o = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t)); o = !0)
        ;
    } catch (l) {
      a = !0, s = l;
    } finally {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (a)
          throw s;
      }
    }
    return n;
  }
}
function I0(e) {
  if (Array.isArray(e))
    return e;
}
function M0(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Kf(e)) || t) {
      r && (e = r);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(u) {
        throw u;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return a = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !a && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function Kf(e, t) {
  if (e) {
    if (typeof e == "string")
      return mc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return mc(e, t);
  }
}
function mc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Ie = [], Xf = zf.default.keys(), N0 = function(t) {
  var r = Xf[t], n = zf.default.get(r);
  if (n)
    for (var o = [].concat(n.baseConcepts, n.relatedConcepts), a = 0; a < o.length; a++) {
      var i = o[a];
      if (i.module === "HTML") {
        var s = i.concept;
        if (s) {
          var l = Ie.find(function(c) {
            return c[0] === r;
          }), u = void 0;
          l ? u = l[1] : u = [], u.push(s), Ie.push([r, u]);
        }
      }
    }
};
for (var Di = 0; Di < Xf.length; Di++)
  N0(Di);
var El = {
  entries: function() {
    return Ie;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = M0(Ie), o;
    try {
      for (n.s(); !(o = n.n()).done; ) {
        var a = ki(o.value, 2), i = a[0], s = a[1];
        t.call(r, s, i, Ie);
      }
    } catch (l) {
      n.e(l);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = Ie.find(function(n) {
      return n[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!El.get(t);
  },
  keys: function() {
    return Ie.map(function(t) {
      var r = ki(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return Ie.map(function(t) {
      var r = ki(t, 2), n = r[1];
      return n;
    });
  }
}, B0 = (0, x0.default)(El, El.entries());
Za.default = B0;
Object.defineProperty(se, "__esModule", {
  value: !0
});
var ae = se.roles = Jf = se.roleElements = Qf = se.elementRoles = se.dom = se.aria = void 0, k0 = fr(pn), D0 = fr(mn), L0 = fr(Nt), F0 = fr(Ka), j0 = fr(Za);
function fr(e) {
  return e && e.__esModule ? e : { default: e };
}
var U0 = k0.default;
se.aria = U0;
var H0 = D0.default;
se.dom = H0;
var W0 = L0.default;
ae = se.roles = W0;
var V0 = F0.default, Qf = se.elementRoles = V0, G0 = j0.default, Jf = se.roleElements = G0, ls = { exports: {} };
ls.exports;
(function(e) {
  var t = function() {
    var r = String.fromCharCode, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", a = {};
    function i(l, u) {
      if (!a[l]) {
        a[l] = {};
        for (var c = 0; c < l.length; c++)
          a[l][l.charAt(c)] = c;
      }
      return a[l][u];
    }
    var s = {
      compressToBase64: function(l) {
        if (l == null)
          return "";
        var u = s._compress(l, 6, function(c) {
          return n.charAt(c);
        });
        switch (u.length % 4) {
          default:
          case 0:
            return u;
          case 1:
            return u + "===";
          case 2:
            return u + "==";
          case 3:
            return u + "=";
        }
      },
      decompressFromBase64: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32, function(u) {
          return i(n, l.charAt(u));
        });
      },
      compressToUTF16: function(l) {
        return l == null ? "" : s._compress(l, 15, function(u) {
          return r(u + 32);
        }) + " ";
      },
      decompressFromUTF16: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 16384, function(u) {
          return l.charCodeAt(u) - 32;
        });
      },
      //compress into uint8array (UCS-2 big endian format)
      compressToUint8Array: function(l) {
        for (var u = s.compress(l), c = new Uint8Array(u.length * 2), d = 0, f = u.length; d < f; d++) {
          var m = u.charCodeAt(d);
          c[d * 2] = m >>> 8, c[d * 2 + 1] = m % 256;
        }
        return c;
      },
      //decompress from uint8array (UCS-2 big endian format)
      decompressFromUint8Array: function(l) {
        if (l == null)
          return s.decompress(l);
        for (var u = new Array(l.length / 2), c = 0, d = u.length; c < d; c++)
          u[c] = l[c * 2] * 256 + l[c * 2 + 1];
        var f = [];
        return u.forEach(function(m) {
          f.push(r(m));
        }), s.decompress(f.join(""));
      },
      //compress into a string that is already URI encoded
      compressToEncodedURIComponent: function(l) {
        return l == null ? "" : s._compress(l, 6, function(u) {
          return o.charAt(u);
        });
      },
      //decompress from an output of compressToEncodedURIComponent
      decompressFromEncodedURIComponent: function(l) {
        return l == null ? "" : l == "" ? null : (l = l.replace(/ /g, "+"), s._decompress(l.length, 32, function(u) {
          return i(o, l.charAt(u));
        }));
      },
      compress: function(l) {
        return s._compress(l, 16, function(u) {
          return r(u);
        });
      },
      _compress: function(l, u, c) {
        if (l == null)
          return "";
        var d, f, m = {}, y = {}, h = "", P = "", p = "", _ = 2, C = 3, w = 2, S = [], v = 0, b = 0, E;
        for (E = 0; E < l.length; E += 1)
          if (h = l.charAt(E), Object.prototype.hasOwnProperty.call(m, h) || (m[h] = C++, y[h] = !0), P = p + h, Object.prototype.hasOwnProperty.call(m, P))
            p = P;
          else {
            if (Object.prototype.hasOwnProperty.call(y, p)) {
              if (p.charCodeAt(0) < 256) {
                for (d = 0; d < w; d++)
                  v = v << 1, b == u - 1 ? (b = 0, S.push(c(v)), v = 0) : b++;
                for (f = p.charCodeAt(0), d = 0; d < 8; d++)
                  v = v << 1 | f & 1, b == u - 1 ? (b = 0, S.push(c(v)), v = 0) : b++, f = f >> 1;
              } else {
                for (f = 1, d = 0; d < w; d++)
                  v = v << 1 | f, b == u - 1 ? (b = 0, S.push(c(v)), v = 0) : b++, f = 0;
                for (f = p.charCodeAt(0), d = 0; d < 16; d++)
                  v = v << 1 | f & 1, b == u - 1 ? (b = 0, S.push(c(v)), v = 0) : b++, f = f >> 1;
              }
              _--, _ == 0 && (_ = Math.pow(2, w), w++), delete y[p];
            } else
              for (f = m[p], d = 0; d < w; d++)
                v = v << 1 | f & 1, b == u - 1 ? (b = 0, S.push(c(v)), v = 0) : b++, f = f >> 1;
            _--, _ == 0 && (_ = Math.pow(2, w), w++), m[P] = C++, p = String(h);
          }
        if (p !== "") {
          if (Object.prototype.hasOwnProperty.call(y, p)) {
            if (p.charCodeAt(0) < 256) {
              for (d = 0; d < w; d++)
                v = v << 1, b == u - 1 ? (b = 0, S.push(c(v)), v = 0) : b++;
              for (f = p.charCodeAt(0), d = 0; d < 8; d++)
                v = v << 1 | f & 1, b == u - 1 ? (b = 0, S.push(c(v)), v = 0) : b++, f = f >> 1;
            } else {
              for (f = 1, d = 0; d < w; d++)
                v = v << 1 | f, b == u - 1 ? (b = 0, S.push(c(v)), v = 0) : b++, f = 0;
              for (f = p.charCodeAt(0), d = 0; d < 16; d++)
                v = v << 1 | f & 1, b == u - 1 ? (b = 0, S.push(c(v)), v = 0) : b++, f = f >> 1;
            }
            _--, _ == 0 && (_ = Math.pow(2, w), w++), delete y[p];
          } else
            for (f = m[p], d = 0; d < w; d++)
              v = v << 1 | f & 1, b == u - 1 ? (b = 0, S.push(c(v)), v = 0) : b++, f = f >> 1;
          _--, _ == 0 && (_ = Math.pow(2, w), w++);
        }
        for (f = 2, d = 0; d < w; d++)
          v = v << 1 | f & 1, b == u - 1 ? (b = 0, S.push(c(v)), v = 0) : b++, f = f >> 1;
        for (; ; )
          if (v = v << 1, b == u - 1) {
            S.push(c(v));
            break;
          } else
            b++;
        return S.join("");
      },
      decompress: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32768, function(u) {
          return l.charCodeAt(u);
        });
      },
      _decompress: function(l, u, c) {
        var d = [], f = 4, m = 4, y = 3, h = "", P = [], p, _, C, w, S, v, b, E = { val: c(0), position: u, index: 1 };
        for (p = 0; p < 3; p += 1)
          d[p] = p;
        for (C = 0, S = Math.pow(2, 2), v = 1; v != S; )
          w = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = c(E.index++)), C |= (w > 0 ? 1 : 0) * v, v <<= 1;
        switch (C) {
          case 0:
            for (C = 0, S = Math.pow(2, 8), v = 1; v != S; )
              w = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = c(E.index++)), C |= (w > 0 ? 1 : 0) * v, v <<= 1;
            b = r(C);
            break;
          case 1:
            for (C = 0, S = Math.pow(2, 16), v = 1; v != S; )
              w = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = c(E.index++)), C |= (w > 0 ? 1 : 0) * v, v <<= 1;
            b = r(C);
            break;
          case 2:
            return "";
        }
        for (d[3] = b, _ = b, P.push(b); ; ) {
          if (E.index > l)
            return "";
          for (C = 0, S = Math.pow(2, y), v = 1; v != S; )
            w = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = c(E.index++)), C |= (w > 0 ? 1 : 0) * v, v <<= 1;
          switch (b = C) {
            case 0:
              for (C = 0, S = Math.pow(2, 8), v = 1; v != S; )
                w = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = c(E.index++)), C |= (w > 0 ? 1 : 0) * v, v <<= 1;
              d[m++] = r(C), b = m - 1, f--;
              break;
            case 1:
              for (C = 0, S = Math.pow(2, 16), v = 1; v != S; )
                w = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = c(E.index++)), C |= (w > 0 ? 1 : 0) * v, v <<= 1;
              d[m++] = r(C), b = m - 1, f--;
              break;
            case 2:
              return P.join("");
          }
          if (f == 0 && (f = Math.pow(2, y), y++), d[b])
            h = d[b];
          else if (b === m)
            h = _ + _.charAt(0);
          else
            return null;
          P.push(h), d[m++] = _ + h.charAt(0), f--, _ = h, f == 0 && (f = Math.pow(2, y), y++);
        }
      }
    };
    return s;
  }();
  e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return t;
  });
})(ls);
var z0 = ls.exports;
const Y0 = /* @__PURE__ */ sm(z0);
function Zf(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const K0 = (e, t, r, n, o, a, i) => {
  const s = n + r.indent, l = r.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, r, s, o, a);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = r.spacingOuter + s + d + r.spacingOuter + n), d = "{" + d + "}"), r.spacingInner + n + l.prop.open + u + l.prop.close + "=" + l.value.open + d + l.value.close;
  }).join("");
}, X0 = 3, Q0 = (e, t, r, n, o, a) => e.map((i) => {
  const s = typeof i == "string" ? ep(i, t) : a(i, t, r, n, o);
  return s === "" && typeof i == "object" && i !== null && i.nodeType !== X0 ? "" : t.spacingOuter + r + s;
}).join(""), ep = (e, t) => {
  const r = t.colors.content;
  return r.open + Zf(e) + r.close;
}, J0 = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + Zf(e) + "-->" + r.close;
}, Z0 = (e, t, r, n, o) => {
  const a = n.colors.tag;
  return a.open + "<" + e + (t && a.close + t + n.spacingOuter + o + a.open) + (r ? ">" + a.close + r + n.spacingOuter + o + a.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + a.close;
}, ex = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
}, tx = 1, tp = 3, rp = 8, np = 11, rx = /^((HTML|SVG)\w*)?Element$/, nx = (e) => {
  const t = e.constructor.name, {
    nodeType: r,
    tagName: n
  } = e, o = typeof n == "string" && n.includes("-") || typeof e.hasAttribute == "function" && e.hasAttribute("is");
  return r === tx && (rx.test(t) || o) || r === tp && t === "Text" || r === rp && t === "Comment" || r === np && t === "DocumentFragment";
};
function ox(e) {
  return e.nodeType === tp;
}
function ax(e) {
  return e.nodeType === rp;
}
function Li(e) {
  return e.nodeType === np;
}
function ix(e) {
  return {
    test: (t) => {
      var r;
      return (t == null || (r = t.constructor) == null ? void 0 : r.name) && nx(t);
    },
    serialize: (t, r, n, o, a, i) => {
      if (ox(t))
        return ep(t.data, r);
      if (ax(t))
        return J0(t.data, r);
      const s = Li(t) ? "DocumentFragment" : t.tagName.toLowerCase();
      return ++o > r.maxDepth ? ex(s, r) : Z0(s, K0(Li(t) ? [] : Array.from(t.attributes).map((l) => l.name).sort(), Li(t) ? {} : Array.from(t.attributes).reduce((l, u) => (l[u.name] = u.value, l), {}), r, n + r.indent, o, a, i), Q0(Array.prototype.slice.call(t.childNodes || t.children).filter(e), r, n + r.indent, o, a, i), r, n);
    }
  };
}
let op = null, ss = null, us = null;
try {
  const e = module && module.require;
  ss = e.call(module, "fs").readFileSync, us = e.call(module, "@babel/code-frame").codeFrameColumns, op = e.call(module, "chalk");
} catch {
}
function lx(e) {
  const t = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.slice(t, r), o = n.split(":"), [a, i, s] = [o[0], parseInt(o[1], 10), parseInt(o[2], 10)];
  let l = "";
  try {
    l = ss(a, "utf-8");
  } catch {
    return "";
  }
  const u = us(l, {
    start: {
      line: i,
      column: s
    }
  }, {
    highlightCode: !0,
    linesBelow: 0
  });
  return op.dim(n) + `
` + u + `
`;
}
function sx() {
  if (!ss || !us)
    return "";
  const t = new Error().stack.split(`
`).slice(1).find((r) => !r.includes("node_modules/"));
  return lx(t);
}
const ap = 3;
function Fi() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function cs() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function ip(e) {
  if (e.defaultView)
    return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window)
    return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof e.debug == "function" && typeof e.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof e + ".");
}
function we(e) {
  if (!e || typeof e.querySelector != "function" || typeof e.querySelectorAll != "function")
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + t(e) + ".");
  function t(r) {
    return typeof r == "object" ? r === null ? "null" : r.constructor.name : typeof r;
  }
}
const ux = () => {
  let e;
  try {
    var t;
    e = JSON.parse((t = process) == null || (t = t.env) == null ? void 0 : t.COLORS);
  } catch {
  }
  return typeof e == "boolean" ? e : typeof process < "u" && process.versions !== void 0 && process.versions.node !== void 0;
}, {
  DOMCollection: cx
} = Fl, dx = 1, fx = 8;
function px(e) {
  return e.nodeType !== fx && (e.nodeType !== dx || !e.matches(q().defaultIgnore));
}
function or(e, t, r) {
  if (r === void 0 && (r = {}), e || (e = cs().body), typeof t != "number" && (t = typeof process < "u" && process.env.DEBUG_PRINT_LIMIT || 7e3), t === 0)
    return "";
  e.documentElement && (e = e.documentElement);
  let n = typeof e;
  if (n === "object" ? n = e.constructor.name : e = {}, !("outerHTML" in e))
    throw new TypeError("Expected an element or document but got " + n);
  const {
    filterNode: o = px,
    ...a
  } = r, i = Rd(e, {
    plugins: [ix(o), cx],
    printFunctionName: !1,
    highlight: ux(),
    ...a
  });
  return t !== void 0 && e.outerHTML.length > t ? i.slice(0, t) + "..." : i;
}
const _l = function() {
  const e = sx();
  console.log(e ? or(...arguments) + `

` + e : or(...arguments));
};
let et = {
  testIdAttribute: "data-testid",
  asyncUtilTimeout: 1e3,
  // asyncWrapper and advanceTimersWrapper is to support React's async `act` function.
  // forcing react-testing-library to wrap all async functions would've been
  // a total nightmare (consider wrapping every findBy* query and then also
  // updating `within` so those would be wrapped too. Total nightmare).
  // so we have this config option that's really only intended for
  // react-testing-library to use. For that reason, this feature will remain
  // undocumented.
  asyncWrapper: (e) => e(),
  unstable_advanceTimersWrapper: (e) => e(),
  eventWrapper: (e) => e(),
  // default value for the `hidden` option in `ByRole` queries
  defaultHidden: !1,
  // default value for the `ignore` option in `ByText` queries
  defaultIgnore: "script, style",
  // showOriginalStackTrace flag to show the full error stack traces for async errors
  showOriginalStackTrace: !1,
  // throw errors w/ suggestions for better queries. Opt in so off by default.
  throwSuggestions: !1,
  // called when getBy* queries fail. (message, container) => Error
  getElementError(e, t) {
    const r = or(t), n = new Error([e, "Ignored nodes: comments, " + et.defaultIgnore + `
` + r].filter(Boolean).join(`

`));
    return n.name = "TestingLibraryElementError", n;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1
};
function vx(e) {
  try {
    return et._disableExpensiveErrorDiagnostics = !0, e();
  } finally {
    et._disableExpensiveErrorDiagnostics = !1;
  }
}
function mx(e) {
  typeof e == "function" && (e = e(et)), et = {
    ...et,
    ...e
  };
}
function q() {
  return et;
}
const yx = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function lp(e) {
  return yx.includes(e.nodeName.toLowerCase()) ? "" : e.nodeType === ap ? e.textContent : Array.from(e.childNodes).map((t) => lp(t)).join("");
}
function Rl(e) {
  let t;
  return e.tagName.toLowerCase() === "label" ? t = lp(e) : t = e.value || e.textContent, t;
}
function sp(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!bx(e))
    return [];
  const r = e.ownerDocument.querySelectorAll("label");
  return Array.from(r).filter((n) => n.control === e);
}
function bx(e) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || e.tagName === "INPUT" && e.getAttribute("type") !== "hidden";
}
function up(e, t, r) {
  let {
    selector: n = "*"
  } = r === void 0 ? {} : r;
  const o = t.getAttribute("aria-labelledby"), a = o ? o.split(" ") : [];
  return a.length ? a.map((i) => {
    const s = e.querySelector('[id="' + i + '"]');
    return s ? {
      content: Rl(s),
      formControl: null
    } : {
      content: "",
      formControl: null
    };
  }) : Array.from(sp(t)).map((i) => {
    const s = Rl(i), u = Array.from(i.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter((c) => c.matches(n))[0];
    return {
      content: s,
      formControl: u
    };
  });
}
function cp(e) {
  if (e == null)
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
      "It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?"
    );
}
function Dt(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  cp(r);
  const o = n(e);
  return typeof r == "string" || typeof r == "number" ? o.toLowerCase().includes(r.toString().toLowerCase()) : typeof r == "function" ? r(o, t) : dp(r, o);
}
function ge(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  cp(r);
  const o = n(e);
  return r instanceof Function ? r(o, t) : r instanceof RegExp ? dp(r, o) : o === String(r);
}
function ds(e) {
  let {
    trim: t = !0,
    collapseWhitespace: r = !0
  } = e === void 0 ? {} : e;
  return (n) => {
    let o = n;
    return o = t ? o.trim() : o, o = r ? o.replace(/\s+/g, " ") : o, o;
  };
}
function lt(e) {
  let {
    trim: t,
    collapseWhitespace: r,
    normalizer: n
  } = e;
  if (!n)
    return ds({
      trim: t,
      collapseWhitespace: r
    });
  if (typeof t < "u" || typeof r < "u")
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  return n;
}
function dp(e, t) {
  const r = e.test(t);
  return e.global && e.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), r;
}
function pr(e) {
  return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((t) => t.nodeType === ap && !!t.textContent).map((t) => t.textContent).join("");
}
const hx = gx(Qf);
function fp(e) {
  return e.hidden === !0 || e.getAttribute("aria-hidden") === "true" || e.ownerDocument.defaultView.getComputedStyle(e).display === "none";
}
function ei(e, t) {
  t === void 0 && (t = {});
  const {
    isSubtreeInaccessible: r = fp
  } = t;
  if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === "hidden")
    return !0;
  let o = e;
  for (; o; ) {
    if (r(o))
      return !0;
    o = o.parentElement;
  }
  return !1;
}
function fs(e) {
  for (const {
    match: t,
    roles: r
  } of hx)
    if (t(e))
      return [...r];
  return [];
}
function gx(e) {
  function t(i) {
    let {
      name: s,
      attributes: l
    } = i;
    return "" + s + l.map((u) => {
      let {
        name: c,
        value: d,
        constraints: f = []
      } = u;
      return f.indexOf("undefined") !== -1 ? ":not([" + c + "])" : d ? "[" + c + '="' + d + '"]' : "[" + c + "]";
    }).join("");
  }
  function r(i) {
    let {
      attributes: s = []
    } = i;
    return s.length;
  }
  function n(i, s) {
    let {
      specificity: l
    } = i, {
      specificity: u
    } = s;
    return u - l;
  }
  function o(i) {
    let {
      attributes: s = []
    } = i;
    const l = s.findIndex((c) => c.value && c.name === "type" && c.value === "text");
    l >= 0 && (s = [...s.slice(0, l), ...s.slice(l + 1)]);
    const u = t({
      ...i,
      attributes: s
    });
    return (c) => l >= 0 && c.type !== "text" ? !1 : c.matches(u);
  }
  let a = [];
  for (const [i, s] of e.entries())
    a = [...a, {
      match: o(i),
      roles: Array.from(s),
      specificity: r(i)
    }];
  return a.sort(n);
}
function pp(e, t) {
  let {
    hidden: r = !1
  } = t === void 0 ? {} : t;
  function n(o) {
    return [o, ...Array.from(o.children).reduce((a, i) => [...a, ...n(i)], [])];
  }
  return n(e).filter((o) => r === !1 ? ei(o) === !1 : !0).reduce((o, a) => {
    let i = [];
    return a.hasAttribute("role") ? i = a.getAttribute("role").split(" ").slice(0, 1) : i = fs(a), i.reduce((s, l) => Array.isArray(s[l]) ? {
      ...s,
      [l]: [...s[l], a]
    } : {
      ...s,
      [l]: [a]
    }, o);
  }, {});
}
function vp(e, t) {
  let {
    hidden: r,
    includeDescription: n
  } = t;
  const o = pp(e, {
    hidden: r
  });
  return Object.entries(o).filter((a) => {
    let [i] = a;
    return i !== "generic";
  }).map((a) => {
    let [i, s] = a;
    const l = "-".repeat(50), u = s.map((c) => {
      const d = 'Name "' + Ul(c, {
        computedStyleSupportsPseudoElements: q().computedStyleSupportsPseudoElements
      }) + `":
`, f = or(c.cloneNode(!1));
      if (n) {
        const m = 'Description "' + Ud(c, {
          computedStyleSupportsPseudoElements: q().computedStyleSupportsPseudoElements
        }) + `":
`;
        return "" + d + m + f;
      }
      return "" + d + f;
    }).join(`

`);
    return i + `:

` + u + `

` + l;
  }).join(`
`);
}
const Ex = function(e, t) {
  let {
    hidden: r = !1
  } = t === void 0 ? {} : t;
  return console.log(vp(e, {
    hidden: r
  }));
};
function _x(e) {
  return e.tagName === "OPTION" ? e.selected : vr(e, "aria-selected");
}
function Rx(e) {
  return e.getAttribute("aria-busy") === "true";
}
function wx(e) {
  if (!("indeterminate" in e && e.indeterminate))
    return "checked" in e ? e.checked : vr(e, "aria-checked");
}
function Cx(e) {
  return vr(e, "aria-pressed");
}
function Px(e) {
  var t, r;
  return (t = (r = vr(e, "aria-current")) != null ? r : e.getAttribute("aria-current")) != null ? t : !1;
}
function Sx(e) {
  return vr(e, "aria-expanded");
}
function vr(e, t) {
  const r = e.getAttribute(t);
  if (r === "true")
    return !0;
  if (r === "false")
    return !1;
}
function Tx(e) {
  const t = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 6
  };
  return e.getAttribute("aria-level") && Number(e.getAttribute("aria-level")) || t[e.tagName];
}
function Ax(e) {
  const t = e.getAttribute("aria-valuenow");
  return t === null ? void 0 : +t;
}
function Ox(e) {
  const t = e.getAttribute("aria-valuemax");
  return t === null ? void 0 : +t;
}
function xx(e) {
  const t = e.getAttribute("aria-valuemin");
  return t === null ? void 0 : +t;
}
function $x(e) {
  const t = e.getAttribute("aria-valuetext");
  return t === null ? void 0 : t;
}
const yc = ds();
function qx(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function bc(e) {
  return new RegExp(qx(e.toLowerCase()), "i");
}
function Pe(e, t, r, n) {
  let {
    variant: o,
    name: a
  } = n, i = "";
  const s = {}, l = [["Role", "TestId"].includes(e) ? r : bc(r)];
  a && (s.name = bc(a)), e === "Role" && ei(t) && (s.hidden = !0, i = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `), Object.keys(s).length > 0 && l.push(s);
  const u = o + "By" + e;
  return {
    queryName: e,
    queryMethod: u,
    queryArgs: l,
    variant: o,
    warning: i,
    toString() {
      i && console.warn(i);
      let [c, d] = l;
      return c = typeof c == "string" ? "'" + c + "'" : c, d = d ? ", { " + Object.entries(d).map((f) => {
        let [m, y] = f;
        return m + ": " + y;
      }).join(", ") + " }" : "", u + "(" + c + d + ")";
    }
  };
}
function Se(e, t, r) {
  return r && (!t || t.toLowerCase() === e.toLowerCase());
}
function on(e, t, r) {
  var n, o;
  if (t === void 0 && (t = "get"), e.matches(q().defaultIgnore))
    return;
  const a = (n = e.getAttribute("role")) != null ? n : (o = fs(e)) == null ? void 0 : o[0];
  if (a !== "generic" && Se("Role", r, a))
    return Pe("Role", e, a, {
      variant: t,
      name: Ul(e, {
        computedStyleSupportsPseudoElements: q().computedStyleSupportsPseudoElements
      })
    });
  const i = up(document, e).map((f) => f.content).join(" ");
  if (Se("LabelText", r, i))
    return Pe("LabelText", e, i, {
      variant: t
    });
  const s = e.getAttribute("placeholder");
  if (Se("PlaceholderText", r, s))
    return Pe("PlaceholderText", e, s, {
      variant: t
    });
  const l = yc(pr(e));
  if (Se("Text", r, l))
    return Pe("Text", e, l, {
      variant: t
    });
  if (Se("DisplayValue", r, e.value))
    return Pe("DisplayValue", e, yc(e.value), {
      variant: t
    });
  const u = e.getAttribute("alt");
  if (Se("AltText", r, u))
    return Pe("AltText", e, u, {
      variant: t
    });
  const c = e.getAttribute("title");
  if (Se("Title", r, c))
    return Pe("Title", e, c, {
      variant: t
    });
  const d = e.getAttribute(q().testIdAttribute);
  if (Se("TestId", r, d))
    return Pe("TestId", e, d, {
      variant: t
    });
}
function Rr(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function Ix(e, t) {
  let {
    container: r = cs(),
    timeout: n = q().asyncUtilTimeout,
    showOriginalStackTrace: o = q().showOriginalStackTrace,
    stackTraceError: a,
    interval: i = 50,
    onTimeout: s = (u) => (Object.defineProperty(u, "message", {
      value: q().getElementError(u.message, r).message
    }), u),
    mutationObserverOptions: l = {
      subtree: !0,
      childList: !0,
      attributes: !0,
      characterData: !0
    }
  } = t;
  if (typeof e != "function")
    throw new TypeError("Received `callback` arg must be a function");
  return new Promise(async (u, c) => {
    let d, f, m, y = !1, h = "idle";
    const P = setTimeout(S, n), p = Fi();
    if (p) {
      const {
        unstable_advanceTimersWrapper: v
      } = q();
      for (w(); !y; ) {
        if (!Fi()) {
          const b = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          o || Rr(b, a), c(b);
          return;
        }
        if (await v(async () => {
          jest.advanceTimersByTime(i);
        }), y)
          break;
        w();
      }
    } else {
      try {
        we(r);
      } catch (b) {
        c(b);
        return;
      }
      f = setInterval(C, i);
      const {
        MutationObserver: v
      } = ip(r);
      m = new v(C), m.observe(r, l), w();
    }
    function _(v, b) {
      y = !0, clearTimeout(P), p || (clearInterval(f), m.disconnect()), v ? c(v) : u(b);
    }
    function C() {
      if (Fi()) {
        const v = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return o || Rr(v, a), c(v);
      } else
        return w();
    }
    function w() {
      if (h !== "pending")
        try {
          const v = vx(e);
          typeof (v == null ? void 0 : v.then) == "function" ? (h = "pending", v.then((b) => {
            h = "resolved", _(null, b);
          }, (b) => {
            h = "rejected", d = b;
          })) : _(null, v);
        } catch (v) {
          d = v;
        }
    }
    function S() {
      let v;
      d ? (v = d, !o && v.name === "TestingLibraryElementError" && Rr(v, a)) : (v = new Error("Timed out in waitFor."), o || Rr(v, a)), _(s(v), null);
    }
  });
}
function ps(e, t) {
  const r = new Error("STACK_TRACE_MESSAGE");
  return q().asyncWrapper(() => Ix(e, {
    stackTraceError: r,
    ...t
  }));
}
function ti(e, t) {
  return q().getElementError(e, t);
}
function ri(e, t) {
  return ti(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", t);
}
function st(e, t, r, n) {
  let {
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    normalizer: s
  } = n === void 0 ? {} : n;
  const l = o ? ge : Dt, u = lt({
    collapseWhitespace: a,
    trim: i,
    normalizer: s
  });
  return Array.from(t.querySelectorAll("[" + e + "]")).filter((c) => l(c.getAttribute(e), c, r, u));
}
function mp(e, t, r, n) {
  const o = st(e, t, r, n);
  if (o.length > 1)
    throw ri("Found multiple elements by [" + e + "=" + r + "]", t);
  return o[0] || null;
}
function Tt(e, t) {
  return function(r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      o[a - 1] = arguments[a];
    const i = e(r, ...o);
    if (i.length > 1) {
      const s = i.map((l) => ti(null, l).message).join(`

`);
      throw ri(t(r, ...o) + `

Here are the matching elements:

` + s, r);
    }
    return i[0] || null;
  };
}
function yp(e, t) {
  return q().getElementError(`A better query is available, try this:
` + e.toString() + `
`, t);
}
function vs(e, t) {
  return function(r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      o[a - 1] = arguments[a];
    const i = e(r, ...o);
    if (!i.length)
      throw q().getElementError(t(r, ...o), r);
    return i;
  };
}
function At(e) {
  return (t, r, n, o) => ps(() => e(t, r, n), {
    container: t,
    ...o
  });
}
const We = (e, t, r) => function(n) {
  for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
    a[i - 1] = arguments[i];
  const s = e(n, ...a), [{
    suggest: l = q().throwSuggestions
  } = {}] = a.slice(-1);
  if (s && l) {
    const u = on(s, r);
    if (u && !t.endsWith(u.queryName))
      throw yp(u.toString(), n);
  }
  return s;
}, J = (e, t, r) => function(n) {
  for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
    a[i - 1] = arguments[i];
  const s = e(n, ...a), [{
    suggest: l = q().throwSuggestions
  } = {}] = a.slice(-1);
  if (s.length && l) {
    const u = [...new Set(s.map((c) => {
      var d;
      return (d = on(c, r)) == null ? void 0 : d.toString();
    }))];
    if (
      // only want to suggest if all the els have the same suggestion.
      u.length === 1 && !t.endsWith(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
        on(s[0], r).queryName
      )
    )
      throw yp(u[0], n);
  }
  return s;
};
function Ce(e, t, r) {
  const n = We(Tt(e, t), e.name, "query"), o = vs(e, r), a = Tt(o, t), i = We(a, e.name, "get"), s = J(o, e.name.replace("query", "get"), "getAll"), l = At(J(o, e.name, "findAll")), u = At(We(a, e.name, "find"));
  return [n, s, i, l, u];
}
var Mx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getElementError: ti,
  wrapAllByQueryWithSuggestion: J,
  wrapSingleQueryWithSuggestion: We,
  getMultipleElementsFoundError: ri,
  queryAllByAttribute: st,
  queryByAttribute: mp,
  makeSingleQuery: Tt,
  makeGetAllQuery: vs,
  makeFindQuery: At,
  buildQueries: Ce
});
function Nx(e) {
  return Array.from(e.querySelectorAll("label,input")).map((t) => ({
    node: t,
    textToMatch: Rl(t)
  })).filter((t) => {
    let {
      textToMatch: r
    } = t;
    return r !== null;
  });
}
const Bx = function(e, t, r) {
  let {
    exact: n = !0,
    trim: o,
    collapseWhitespace: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  const s = n ? ge : Dt, l = lt({
    collapseWhitespace: a,
    trim: o,
    normalizer: i
  });
  return Nx(e).filter((c) => {
    let {
      node: d,
      textToMatch: f
    } = c;
    return s(f, d, t, l);
  }).map((c) => {
    let {
      node: d
    } = c;
    return d;
  });
}, ar = function(e, t, r) {
  let {
    selector: n = "*",
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    normalizer: s
  } = r === void 0 ? {} : r;
  we(e);
  const l = o ? ge : Dt, u = lt({
    collapseWhitespace: a,
    trim: i,
    normalizer: s
  }), c = Array.from(e.querySelectorAll("*")).filter((d) => sp(d).length || d.hasAttribute("aria-labelledby")).reduce((d, f) => {
    const m = up(e, f, {
      selector: n
    });
    m.filter((h) => !!h.formControl).forEach((h) => {
      l(h.content, h.formControl, t, u) && h.formControl && d.push(h.formControl);
    });
    const y = m.filter((h) => !!h.content).map((h) => h.content);
    return l(y.join(" "), f, t, u) && d.push(f), y.length > 1 && y.forEach((h, P) => {
      l(h, f, t, u) && d.push(f);
      const p = [...y];
      p.splice(P, 1), p.length > 1 && l(p.join(" "), f, t, u) && d.push(f);
    }), d;
  }, []).concat(st("aria-label", e, t, {
    exact: o,
    normalizer: u
  }));
  return Array.from(new Set(c)).filter((d) => d.matches(n));
}, tt = function(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    n[o - 2] = arguments[o];
  const a = ar(e, t, ...n);
  if (!a.length) {
    const i = Bx(e, t, ...n);
    if (i.length) {
      const s = i.map((l) => kx(e, l)).filter((l) => !!l);
      throw s.length ? q().getElementError(s.map((l) => "Found a label with the text of: " + t + ", however the element associated with this label (<" + l + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + l + " />, you can use aria-label or aria-labelledby instead.").join(`

`), e) : q().getElementError("Found a label with the text of: " + t + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, e);
    } else
      throw q().getElementError("Unable to find a label with the text of: " + t, e);
  }
  return a;
};
function kx(e, t) {
  const r = t.getAttribute("for");
  if (!r)
    return null;
  const n = e.querySelector('[id="' + r + '"]');
  return n ? n.tagName.toLowerCase() : null;
}
const bp = (e, t) => "Found multiple elements with the text of: " + t, hp = We(Tt(ar, bp), ar.name, "query"), gp = Tt(tt, bp), Ep = At(J(tt, tt.name, "findAll")), _p = At(We(gp, tt.name, "find")), Rp = J(tt, tt.name, "getAll"), wp = We(gp, tt.name, "get"), Cp = J(ar, ar.name, "queryAll"), wl = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return we(t[0]), st("placeholder", ...t);
}, Dx = (e, t) => "Found multiple elements with the placeholder text of: " + t, Lx = (e, t) => "Unable to find an element with the placeholder text of: " + t, Pp = J(wl, wl.name, "queryAll"), [Sp, Tp, Ap, Op, xp] = Ce(wl, Dx, Lx), Cl = function(e, t, r) {
  let {
    selector: n = "*",
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    ignore: s = q().defaultIgnore,
    normalizer: l
  } = r === void 0 ? {} : r;
  we(e);
  const u = o ? ge : Dt, c = lt({
    collapseWhitespace: a,
    trim: i,
    normalizer: l
  });
  let d = [];
  return typeof e.matches == "function" && e.matches(n) && (d = [e]), [...d, ...Array.from(e.querySelectorAll(n))].filter((f) => !s || !f.matches(s)).filter((f) => u(pr(f), f, t, c));
}, Fx = (e, t) => "Found multiple elements with the text: " + t, jx = function(e, t, r) {
  r === void 0 && (r = {});
  const {
    collapseWhitespace: n,
    trim: o,
    normalizer: a,
    selector: i
  } = r, l = lt({
    collapseWhitespace: n,
    trim: o,
    normalizer: a
  })(t.toString()), u = l !== t.toString(), c = (i ?? "*") !== "*";
  return "Unable to find an element with the text: " + (u ? l + " (normalized from '" + t + "')" : t) + (c ? ", which matches selector '" + i + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}, $p = J(Cl, Cl.name, "queryAll"), [qp, Ip, Mp, Np, Bp] = Ce(Cl, Fx, jx), Pl = function(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  we(e);
  const s = n ? ge : Dt, l = lt({
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("input,textarea,select")).filter((u) => u.tagName === "SELECT" ? Array.from(u.options).filter((d) => d.selected).some((d) => s(pr(d), d, t, l)) : s(u.value, u, t, l));
}, Ux = (e, t) => "Found multiple elements with the display value: " + t + ".", Hx = (e, t) => "Unable to find an element with the display value: " + t + ".", kp = J(Pl, Pl.name, "queryAll"), [Dp, Lp, Fp, jp, Up] = Ce(Pl, Ux, Hx), Wx = /^(img|input|area|.+-.+)$/i, Sl = function(e, t, r) {
  return r === void 0 && (r = {}), we(e), st("alt", e, t, r).filter((n) => Wx.test(n.tagName));
}, Vx = (e, t) => "Found multiple elements with the alt text: " + t, Gx = (e, t) => "Unable to find an element with the alt text: " + t, Hp = J(Sl, Sl.name, "queryAll"), [Wp, Vp, Gp, zp, Yp] = Ce(Sl, Vx, Gx), zx = (e) => {
  var t;
  return e.tagName.toLowerCase() === "title" && ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === "svg";
}, Tl = function(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  we(e);
  const s = n ? ge : Dt, l = lt({
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("[title], svg > title")).filter((u) => s(u.getAttribute("title"), u, t, l) || zx(u) && s(pr(u), u, t, l));
}, Yx = (e, t) => "Found multiple elements with the title: " + t + ".", Kx = (e, t) => "Unable to find an element with the title: " + t + ".", Kp = J(Tl, Tl.name, "queryAll"), [Xp, Qp, Jp, Zp, ev] = Ce(Tl, Yx, Kx), Al = function(e, t, r) {
  let {
    hidden: n = q().defaultHidden,
    name: o,
    description: a,
    queryFallbacks: i = !1,
    selected: s,
    busy: l,
    checked: u,
    pressed: c,
    current: d,
    level: f,
    expanded: m,
    value: {
      now: y,
      min: h,
      max: P,
      text: p
    } = {}
  } = r === void 0 ? {} : r;
  if (we(e), s !== void 0) {
    var _;
    if (((_ = ae.get(t)) == null ? void 0 : _.props["aria-selected"]) === void 0)
      throw new Error('"aria-selected" is not supported on role "' + t + '".');
  }
  if (l !== void 0) {
    var C;
    if (((C = ae.get(t)) == null ? void 0 : C.props["aria-busy"]) === void 0)
      throw new Error('"aria-busy" is not supported on role "' + t + '".');
  }
  if (u !== void 0) {
    var w;
    if (((w = ae.get(t)) == null ? void 0 : w.props["aria-checked"]) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + t + '".');
  }
  if (c !== void 0) {
    var S;
    if (((S = ae.get(t)) == null ? void 0 : S.props["aria-pressed"]) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + t + '".');
  }
  if (d !== void 0) {
    var v;
    if (((v = ae.get(t)) == null ? void 0 : v.props["aria-current"]) === void 0)
      throw new Error('"aria-current" is not supported on role "' + t + '".');
  }
  if (f !== void 0 && t !== "heading")
    throw new Error('Role "' + t + '" cannot have "level" property.');
  if (y !== void 0) {
    var b;
    if (((b = ae.get(t)) == null ? void 0 : b.props["aria-valuenow"]) === void 0)
      throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
  }
  if (P !== void 0) {
    var E;
    if (((E = ae.get(t)) == null ? void 0 : E.props["aria-valuemax"]) === void 0)
      throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
  }
  if (h !== void 0) {
    var M;
    if (((M = ae.get(t)) == null ? void 0 : M.props["aria-valuemin"]) === void 0)
      throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
  }
  if (p !== void 0) {
    var F;
    if (((F = ae.get(t)) == null ? void 0 : F.props["aria-valuetext"]) === void 0)
      throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
  }
  if (m !== void 0) {
    var L;
    if (((L = ae.get(t)) == null ? void 0 : L.props["aria-expanded"]) === void 0)
      throw new Error('"aria-expanded" is not supported on role "' + t + '".');
  }
  const j = /* @__PURE__ */ new WeakMap();
  function R(A) {
    return j.has(A) || j.set(A, fp(A)), j.get(A);
  }
  return Array.from(e.querySelectorAll(
    // Only query elements that can be matched by the following filters
    Xx(t)
  )).filter((A) => {
    if (A.hasAttribute("role")) {
      const Z = A.getAttribute("role");
      if (i)
        return Z.split(" ").filter(Boolean).some((oi) => oi === t);
      const [Ke] = Z.split(" ");
      return Ke === t;
    }
    return fs(A).some((Z) => Z === t);
  }).filter((A) => {
    if (s !== void 0)
      return s === _x(A);
    if (l !== void 0)
      return l === Rx(A);
    if (u !== void 0)
      return u === wx(A);
    if (c !== void 0)
      return c === Cx(A);
    if (d !== void 0)
      return d === Px(A);
    if (m !== void 0)
      return m === Sx(A);
    if (f !== void 0)
      return f === Tx(A);
    if (y !== void 0 || P !== void 0 || h !== void 0 || p !== void 0) {
      let U = !0;
      if (y !== void 0 && U && (U = y === Ax(A)), P !== void 0 && U && (U = P === Ox(A)), h !== void 0 && U && (U = h === xx(A)), p !== void 0) {
        var I;
        U && (U = ge((I = $x(A)) != null ? I : null, A, p, (Z) => Z));
      }
      return U;
    }
    return !0;
  }).filter((A) => o === void 0 ? !0 : ge(Ul(A, {
    computedStyleSupportsPseudoElements: q().computedStyleSupportsPseudoElements
  }), A, o, (I) => I)).filter((A) => a === void 0 ? !0 : ge(Ud(A, {
    computedStyleSupportsPseudoElements: q().computedStyleSupportsPseudoElements
  }), A, a, (I) => I)).filter((A) => n === !1 ? ei(A, {
    isSubtreeInaccessible: R
  }) === !1 : !0);
};
function Xx(e) {
  var t;
  const r = '*[role~="' + e + '"]', n = (t = Jf.get(e)) != null ? t : /* @__PURE__ */ new Set(), o = new Set(Array.from(n).map((a) => {
    let {
      name: i
    } = a;
    return i;
  }));
  return [r].concat(Array.from(o)).join(",");
}
const tv = (e) => {
  let t = "";
  return e === void 0 ? t = "" : typeof e == "string" ? t = ' and name "' + e + '"' : t = " and name `" + e + "`", t;
}, Qx = function(e, t, r) {
  let {
    name: n
  } = r === void 0 ? {} : r;
  return 'Found multiple elements with the role "' + t + '"' + tv(n);
}, Jx = function(e, t, r) {
  let {
    hidden: n = q().defaultHidden,
    name: o,
    description: a
  } = r === void 0 ? {} : r;
  if (q()._disableExpensiveErrorDiagnostics)
    return 'Unable to find role="' + t + '"' + tv(o);
  let i = "";
  Array.from(e.children).forEach((c) => {
    i += vp(c, {
      hidden: n,
      includeDescription: a !== void 0
    });
  });
  let s;
  i.length === 0 ? n === !1 ? s = "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : s = "There are no available roles." : s = (`
Here are the ` + (n === !1 ? "accessible" : "available") + ` roles:

  ` + i.replace(/\n/g, `
  `).replace(/\n\s\s\n/g, `

`) + `
`).trim();
  let l = "";
  o === void 0 ? l = "" : typeof o == "string" ? l = ' and name "' + o + '"' : l = " and name `" + o + "`";
  let u = "";
  return a === void 0 ? u = "" : typeof a == "string" ? u = ' and description "' + a + '"' : u = " and description `" + a + "`", (`
Unable to find an ` + (n === !1 ? "accessible " : "") + 'element with the role "' + t + '"' + l + u + `

` + s).trim();
}, rv = J(Al, Al.name, "queryAll"), [nv, ov, av, iv, lv] = Ce(Al, Qx, Jx), ms = () => q().testIdAttribute, Ol = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return we(t[0]), st(ms(), ...t);
}, Zx = (e, t) => "Found multiple elements by: [" + ms() + '="' + t + '"]', e1 = (e, t) => "Unable to find an element by: [" + ms() + '="' + t + '"]', sv = J(Ol, Ol.name, "queryAll"), [uv, cv, dv, fv, pv] = Ce(Ol, Zx, e1);
var an = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  queryAllByLabelText: Cp,
  queryByLabelText: hp,
  getAllByLabelText: Rp,
  getByLabelText: wp,
  findAllByLabelText: Ep,
  findByLabelText: _p,
  queryByPlaceholderText: Sp,
  queryAllByPlaceholderText: Pp,
  getByPlaceholderText: Ap,
  getAllByPlaceholderText: Tp,
  findAllByPlaceholderText: Op,
  findByPlaceholderText: xp,
  queryByText: qp,
  queryAllByText: $p,
  getByText: Mp,
  getAllByText: Ip,
  findAllByText: Np,
  findByText: Bp,
  queryByDisplayValue: Dp,
  queryAllByDisplayValue: kp,
  getByDisplayValue: Fp,
  getAllByDisplayValue: Lp,
  findAllByDisplayValue: jp,
  findByDisplayValue: Up,
  queryByAltText: Wp,
  queryAllByAltText: Hp,
  getByAltText: Gp,
  getAllByAltText: Vp,
  findAllByAltText: zp,
  findByAltText: Yp,
  queryByTitle: Xp,
  queryAllByTitle: Kp,
  getByTitle: Jp,
  getAllByTitle: Qp,
  findAllByTitle: Zp,
  findByTitle: ev,
  queryByRole: nv,
  queryAllByRole: rv,
  getAllByRole: ov,
  getByRole: av,
  findAllByRole: iv,
  findByRole: lv,
  queryByTestId: uv,
  queryAllByTestId: sv,
  getByTestId: dv,
  getAllByTestId: cv,
  findAllByTestId: fv,
  findByTestId: pv
});
function xl(e, t, r) {
  return t === void 0 && (t = an), r === void 0 && (r = {}), Object.keys(t).reduce((n, o) => {
    const a = t[o];
    return n[o] = a.bind(null, e), n;
  }, r);
}
const vv = (e) => !e || Array.isArray(e) && !e.length;
function hc(e) {
  if (vv(e))
    throw new Error("The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.");
}
async function t1(e, t) {
  const r = new Error("Timed out in waitForElementToBeRemoved.");
  if (typeof e != "function") {
    hc(e);
    const o = (Array.isArray(e) ? e : [e]).map((a) => {
      let i = a.parentElement;
      if (i === null)
        return () => null;
      for (; i.parentElement; )
        i = i.parentElement;
      return () => i.contains(a) ? a : null;
    });
    e = () => o.map((a) => a()).filter(Boolean);
  }
  return hc(e()), ps(() => {
    let n;
    try {
      n = e();
    } catch (o) {
      if (o.name === "TestingLibraryElementError")
        return;
      throw o;
    }
    if (!vv(n))
      throw r;
  }, t);
}
const gc = {
  // Clipboard Events
  copy: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  cut: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  paste: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Composition Events
  compositionEnd: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionStart: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionUpdate: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Keyboard Events
  keyDown: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyPress: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyUp: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  // Focus Events
  focus: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  blur: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  focusIn: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  focusOut: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // Form Events
  change: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  input: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  invalid: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !0
    }
  },
  submit: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  reset: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  // Mouse Events
  click: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      button: 0,
      composed: !0
    }
  },
  contextMenu: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dblClick: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drag: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragEnd: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragEnter: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragExit: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragLeave: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragOver: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragStart: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drop: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseDown: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseEnter: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseLeave: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseMove: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOut: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOver: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseUp: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Selection Events
  select: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Touch Events
  touchCancel: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  touchEnd: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchMove: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchStart: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // UI Events
  resize: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  scroll: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Wheel Events
  wheel: {
    EventType: "WheelEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Media Events
  abort: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlay: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlayThrough: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  durationChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  emptied: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  encrypted: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  ended: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedData: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedMetadata: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadStart: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pause: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  play: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  playing: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  progress: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  rateChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeked: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeking: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  stalled: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  suspend: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  timeUpdate: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  volumeChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  waiting: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Events
  load: {
    // TODO: load events can be UIEvent or Event depending on what generated them
    // This is where this abstraction breaks down.
    // But the common targets are <img />, <script /> and window.
    // Neither of these targets receive a UIEvent
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  error: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Animation Events
  animationStart: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationEnd: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationIteration: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Transition Events
  transitionCancel: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionEnd: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  transitionRun: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionStart: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // pointer events
  pointerOver: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerEnter: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pointerDown: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerMove: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerUp: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerCancel: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  pointerOut: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerLeave: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  gotPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  lostPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // history events
  popState: {
    EventType: "PopStateEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // window events
  offline: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  online: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  }
}, Ec = {
  doubleClick: "dblClick"
};
function ir(e, t) {
  return q().eventWrapper(() => {
    if (!t)
      throw new Error("Unable to fire an event - please provide an event object.");
    if (!e)
      throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
    return e.dispatchEvent(t);
  });
}
function kr(e, t, r, n) {
  let {
    EventType: o = "Event",
    defaultInit: a = {}
  } = n === void 0 ? {} : n;
  if (!t)
    throw new Error('Unable to fire a "' + e + '" event - please provide a DOM element.');
  const i = {
    ...a,
    ...r
  }, {
    target: {
      value: s,
      files: l,
      ...u
    } = {}
  } = i;
  s !== void 0 && r1(t, s), l !== void 0 && Object.defineProperty(t, "files", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: l
  }), Object.assign(t, u);
  const c = ip(t), d = c[o] || c.Event;
  let f;
  if (typeof d == "function")
    f = new d(e, i);
  else {
    f = c.document.createEvent(o);
    const {
      bubbles: y,
      cancelable: h,
      detail: P,
      ...p
    } = i;
    f.initEvent(e, y, h, P), Object.keys(p).forEach((_) => {
      f[_] = p[_];
    });
  }
  return ["dataTransfer", "clipboardData"].forEach((y) => {
    const h = i[y];
    typeof h == "object" && (typeof c.DataTransfer == "function" ? Object.defineProperty(f, y, {
      value: Object.getOwnPropertyNames(h).reduce((P, p) => (Object.defineProperty(P, p, {
        value: h[p]
      }), P), new c.DataTransfer())
    }) : Object.defineProperty(f, y, {
      value: h
    }));
  }), f;
}
Object.keys(gc).forEach((e) => {
  const {
    EventType: t,
    defaultInit: r
  } = gc[e], n = e.toLowerCase();
  kr[e] = (o, a) => kr(n, o, a, {
    EventType: t,
    defaultInit: r
  }), ir[e] = (o, a) => ir(o, kr[e](o, a));
});
function r1(e, t) {
  const {
    set: r
  } = Object.getOwnPropertyDescriptor(e, "value") || {}, n = Object.getPrototypeOf(e), {
    set: o
  } = Object.getOwnPropertyDescriptor(n, "value") || {};
  if (o && r !== o)
    o.call(e, t);
  else if (r)
    r.call(e, t);
  else
    throw new Error("The given element does not have a value setter");
}
Object.keys(Ec).forEach((e) => {
  const t = Ec[e];
  ir[e] = function() {
    return ir[t](...arguments);
  };
});
function n1(e) {
  return e.replace(/[ \t]*[\n][ \t]*/g, `
`);
}
function o1(e) {
  return Y0.compressToEncodedURIComponent(n1(e));
}
function a1(e) {
  return "https://testing-playground.com/#markup=" + o1(e);
}
const i1 = (e, t, r) => Array.isArray(e) ? e.forEach((n) => _l(n, t, r)) : _l(e, t, r), l1 = function(e) {
  if (e === void 0 && (e = cs().body), !e || !("innerHTML" in e)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  if (!e.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const t = a1(e.innerHTML);
  return console.log(`Open this URL in your browser

` + t), t;
}, _c = {
  debug: i1,
  logTestingPlaygroundURL: l1
}, s1 = typeof document < "u" && document.body ? xl(document.body, an, _c) : Object.keys(an).reduce((e, t) => (e[t] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, e), _c), u1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buildQueries: Ce,
  configure: mx,
  createEvent: kr,
  findAllByAltText: zp,
  findAllByDisplayValue: jp,
  findAllByLabelText: Ep,
  findAllByPlaceholderText: Op,
  findAllByRole: iv,
  findAllByTestId: fv,
  findAllByText: Np,
  findAllByTitle: Zp,
  findByAltText: Yp,
  findByDisplayValue: Up,
  findByLabelText: _p,
  findByPlaceholderText: xp,
  findByRole: lv,
  findByTestId: pv,
  findByText: Bp,
  findByTitle: ev,
  fireEvent: ir,
  getAllByAltText: Vp,
  getAllByDisplayValue: Lp,
  getAllByLabelText: Rp,
  getAllByPlaceholderText: Tp,
  getAllByRole: ov,
  getAllByTestId: cv,
  getAllByText: Ip,
  getAllByTitle: Qp,
  getByAltText: Gp,
  getByDisplayValue: Fp,
  getByLabelText: wp,
  getByPlaceholderText: Ap,
  getByRole: av,
  getByTestId: dv,
  getByText: Mp,
  getByTitle: Jp,
  getConfig: q,
  getDefaultNormalizer: ds,
  getElementError: ti,
  getMultipleElementsFoundError: ri,
  getNodeText: pr,
  getQueriesForElement: xl,
  getRoles: pp,
  getSuggestedQuery: on,
  isInaccessible: ei,
  logDOM: _l,
  logRoles: Ex,
  makeFindQuery: At,
  makeGetAllQuery: vs,
  makeSingleQuery: Tt,
  prettyDOM: or,
  prettyFormat: Dy,
  queries: an,
  queryAllByAltText: Hp,
  queryAllByAttribute: st,
  queryAllByDisplayValue: kp,
  queryAllByLabelText: Cp,
  queryAllByPlaceholderText: Pp,
  queryAllByRole: rv,
  queryAllByTestId: sv,
  queryAllByText: $p,
  queryAllByTitle: Kp,
  queryByAltText: Wp,
  queryByAttribute: mp,
  queryByDisplayValue: Dp,
  queryByLabelText: hp,
  queryByPlaceholderText: Sp,
  queryByRole: nv,
  queryByTestId: uv,
  queryByText: qp,
  queryByTitle: Xp,
  queryHelpers: Mx,
  screen: s1,
  waitFor: ps,
  waitForElementToBeRemoved: t1,
  within: xl,
  wrapAllByQueryWithSuggestion: J,
  wrapSingleQueryWithSuggestion: We
}, Symbol.toStringTag, { value: "Module" }));
function O(e, t, r) {
  return e.namespaceURI && e.namespaceURI !== "http://www.w3.org/1999/xhtml" || (t = Array.isArray(t) ? t : [
    t
  ], !t.includes(e.tagName.toLowerCase())) ? !1 : r ? Object.entries(r).every(([n, o]) => e[n] === o) : !0;
}
var $l;
(function(e) {
  e.button = "button", e.color = "color", e.file = "file", e.image = "image", e.reset = "reset", e.submit = "submit", e.checkbox = "checkbox", e.radio = "radio";
})($l || ($l = {}));
function mv(e) {
  return O(e, "button") || O(e, "input") && e.type in $l;
}
function fe(e) {
  var t;
  if (c1(e) && e.defaultView)
    return e.defaultView;
  if (!((t = e.ownerDocument) === null || t === void 0) && t.defaultView)
    return e.ownerDocument.defaultView;
  throw new Error(`Could not determine window of node. Node was ${d1(e)}`);
}
function c1(e) {
  return e.nodeType === 9;
}
function d1(e) {
  return typeof e == "function" ? `function ${e.name}` : e === null ? "null" : String(e);
}
function yv(e, t) {
  return new Promise((r, n) => {
    const o = new t();
    o.onerror = n, o.onabort = n, o.onload = () => {
      r(String(o.result));
    }, o.readAsText(e);
  });
}
function ys(e, t) {
  const r = {
    ...t,
    length: t.length,
    item: (n) => r[n],
    [Symbol.iterator]: function* () {
      for (let o = 0; o < r.length; o++)
        yield r[o];
    }
  };
  return r.constructor = e.FileList, e.FileList && Object.setPrototypeOf(r, e.FileList.prototype), Object.freeze(r), r;
}
function Be(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class bv {
  getAsFile() {
    return this.file;
  }
  getAsString(t) {
    typeof this.data == "string" && t(this.data);
  }
  /* istanbul ignore next */
  webkitGetAsEntry() {
    throw new Error("not implemented");
  }
  constructor(t, r) {
    Be(this, "kind", void 0), Be(this, "type", void 0), Be(this, "file", null), Be(this, "data", void 0), typeof t == "string" ? (this.kind = "string", this.type = String(r), this.data = t) : (this.kind = "file", this.type = t.type, this.file = t);
  }
}
class f1 extends Array {
  add(...t) {
    const r = new bv(t[0], t[1]);
    return this.push(r), r;
  }
  clear() {
    this.splice(0, this.length);
  }
  remove(t) {
    this.splice(t, 1);
  }
}
function wr(e, t) {
  const [r, n] = e.split("/"), o = !n || n === "*";
  return (a) => t ? a.type === (o ? r : e) : o ? a.type.startsWith(`${r}/`) : a.type === r;
}
function p1(e) {
  return new class {
    getData(r) {
      var n;
      const o = (n = this.items.find(wr(r, !0))) !== null && n !== void 0 ? n : this.items.find(wr(r, !1));
      let a = "";
      return o == null || o.getAsString((i) => {
        a = i;
      }), a;
    }
    setData(r, n) {
      const o = this.items.findIndex(wr(r, !0)), a = new bv(n, r);
      o >= 0 ? this.items.splice(o, 1, a) : this.items.push(a);
    }
    clearData(r) {
      if (r) {
        const n = this.items.findIndex(wr(r, !0));
        n >= 0 && this.items.remove(n);
      } else
        this.items.clear();
    }
    get types() {
      const r = [];
      return this.files.length && r.push("Files"), this.items.forEach((n) => r.push(n.type)), Object.freeze(r), r;
    }
    /* istanbul ignore next */
    setDragImage() {
    }
    constructor() {
      Be(this, "dropEffect", "none"), Be(this, "effectAllowed", "uninitialized"), Be(this, "items", new f1()), Be(this, "files", ys(e, []));
    }
  }();
}
function bs(e, t = []) {
  const r = typeof e.DataTransfer > "u" ? p1(e) : (
    /* istanbul ignore next */
    new e.DataTransfer()
  );
  return Object.defineProperty(r, "files", {
    get: () => ys(e, t)
  }), r;
}
function v1(e, t) {
  if (t.kind === "file")
    return t.getAsFile();
  let r = "";
  return t.getAsString((n) => {
    r = n;
  }), new e.Blob([
    r
  ], {
    type: t.type
  });
}
function hv(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function gv(e, ...t) {
  const r = Object.fromEntries(t.map((n) => [
    typeof n == "string" ? "text/plain" : n.type,
    Promise.resolve(n)
  ]));
  return typeof e.ClipboardItem < "u" ? new e.ClipboardItem(r) : new class {
    get types() {
      return Array.from(Object.keys(this.data));
    }
    async getType(o) {
      const a = await this.data[o];
      if (!a)
        throw new Error(`${o} is not one of the available MIME types on this item.`);
      return a instanceof e.Blob ? a : new e.Blob([
        a
      ], {
        type: o
      });
    }
    constructor(o) {
      hv(this, "data", void 0), this.data = o;
    }
  }(r);
}
const Ot = Symbol("Manage ClipboardSub");
function Rc(e, t) {
  return Object.assign(new class extends e.EventTarget {
    async read() {
      return Array.from(this.items);
    }
    async readText() {
      let n = "";
      for (const o of this.items) {
        const a = o.types.includes("text/plain") ? "text/plain" : o.types.find((i) => i.startsWith("text/"));
        a && (n += await o.getType(a).then((i) => yv(i, e.FileReader)));
      }
      return n;
    }
    async write(n) {
      this.items = n;
    }
    async writeText(n) {
      this.items = [
        gv(e, n)
      ];
    }
    constructor(...n) {
      super(...n), hv(this, "items", []);
    }
  }(), {
    [Ot]: t
  });
}
function hs(e) {
  return !!(e != null && e[Ot]);
}
function m1(e) {
  if (hs(e.navigator.clipboard))
    return e.navigator.clipboard[Ot];
  const t = Object.getOwnPropertyDescriptor(e.navigator, "clipboard");
  let r;
  const n = {
    resetClipboardStub: () => {
      r = Rc(e, n);
    },
    detachClipboardStub: () => {
      t ? Object.defineProperty(e.navigator, "clipboard", t) : Object.defineProperty(e.navigator, "clipboard", {
        value: void 0,
        configurable: !0
      });
    }
  };
  return r = Rc(e, n), Object.defineProperty(e.navigator, "clipboard", {
    get: () => r,
    configurable: !0
  }), r[Ot];
}
function y1(e) {
  hs(e.navigator.clipboard) && e.navigator.clipboard[Ot].resetClipboardStub();
}
function b1(e) {
  hs(e.navigator.clipboard) && e.navigator.clipboard[Ot].detachClipboardStub();
}
async function h1(e) {
  const t = e.defaultView, r = t == null ? void 0 : t.navigator.clipboard, n = r && await r.read();
  if (!n)
    throw new Error("The Clipboard API is unavailable.");
  const o = bs(t);
  for (const a of n)
    for (const i of a.types)
      o.setData(i, await a.getType(i).then((s) => yv(s, t.FileReader)));
  return o;
}
async function Ev(e, t) {
  const r = fe(e), n = r.navigator.clipboard, o = [];
  for (let i = 0; i < t.items.length; i++) {
    const s = t.items[i], l = v1(r, s);
    o.push(gv(r, l));
  }
  if (!(n && await n.write(o).then(
    () => !0,
    // Can happen with other implementations that e.g. require permissions
    /* istanbul ignore next */
    () => !1
  )))
    throw new Error("The Clipboard API is unavailable.");
}
const ln = globalThis;
typeof ln.afterEach == "function" && ln.afterEach(() => y1(globalThis.window));
typeof ln.afterAll == "function" && ln.afterAll(() => b1(globalThis.window));
function rt(e) {
  return e.hasAttribute("contenteditable") && (e.getAttribute("contenteditable") == "true" || e.getAttribute("contenteditable") == "");
}
function lr(e) {
  const t = g1(e);
  return t && (t.closest('[contenteditable=""]') || t.closest('[contenteditable="true"]'));
}
function g1(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function xt(e) {
  return _v(e) && !e.readOnly || rt(e);
}
var ql;
(function(e) {
  e.text = "text", e.date = "date", e["datetime-local"] = "datetime-local", e.email = "email", e.month = "month", e.number = "number", e.password = "password", e.search = "search", e.tel = "tel", e.time = "time", e.url = "url", e.week = "week";
})(ql || (ql = {}));
function _v(e) {
  return O(e, "textarea") || O(e, "input") && e.type in ql;
}
var Il;
(function(e) {
  e.email = "email", e.password = "password", e.search = "search", e.telephone = "telephone", e.text = "text", e.url = "url";
})(Il || (Il = {}));
function E1(e) {
  var t;
  const r = (t = e.getAttribute("maxlength")) !== null && t !== void 0 ? t : "";
  return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function _1(e) {
  return O(e, "textarea") || O(e, "input") && e.type in Il;
}
const Rv = [
  "input:not([type=hidden]):not([disabled])",
  "button:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[contenteditable=""]',
  '[contenteditable="true"]',
  "a[href]",
  "[tabindex]:not([disabled])"
].join(", ");
function gs(e) {
  return e.matches(Rv);
}
var sn;
(function(e) {
  e["{"] = "}", e["["] = "]";
})(sn || (sn = {}));
function wv(e, t) {
  let r = 0;
  const n = e[r] in sn ? e[r] : "";
  r += n.length;
  const a = new RegExp(`^\\${n}{2}`).test(e) ? "" : n;
  return {
    type: a,
    ...a === "" ? R1(e, r, t) : w1(e, r, a, t)
  };
}
function R1(e, t, r) {
  const n = e[t];
  return Cv(n, e, t, r), t += n.length, {
    consumedLength: t,
    descriptor: n,
    releasePrevious: !1,
    releaseSelf: !0,
    repeat: 1
  };
}
function w1(e, t, r, n) {
  var o, a;
  const i = e[t] === "/" ? "/" : "";
  t += i.length;
  const s = r === "{" && e[t] === "\\";
  t += Number(s);
  const l = s ? e[t] : (o = e.slice(t).match(r === "{" ? /^\w+|^[^}>/]/ : /^\w+/)) === null || o === void 0 ? void 0 : o[0];
  Cv(l, e, t, n), t += l.length;
  var u;
  const c = (u = (a = e.slice(t).match(/^>\d+/)) === null || a === void 0 ? void 0 : a[0]) !== null && u !== void 0 ? u : "";
  t += c.length;
  const d = e[t] === "/" || !c && e[t] === ">" ? e[t] : "";
  t += d.length;
  const f = sn[r], m = e[t] === f ? f : "";
  if (!m)
    throw new Error(Pv([
      !c && "repeat modifier",
      !d && "release modifier",
      `"${f}"`
    ].filter(Boolean).join(" or "), e[t], e, n));
  return t += m.length, {
    consumedLength: t,
    descriptor: l,
    releasePrevious: !!i,
    repeat: c ? Math.max(Number(c.substr(1)), 1) : 1,
    releaseSelf: C1(d, c)
  };
}
function Cv(e, t, r, n) {
  if (!e)
    throw new Error(Pv("key descriptor", t[r], t, n));
}
function C1(e, t) {
  if (e)
    return e === "/";
  if (t)
    return !1;
}
function Pv(e, t, r, n) {
  return `Expected ${e} but found "${t ?? ""}" in "${r}"
    See ${n === "pointer" ? "https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen" : "https://testing-library.com/docs/user-event/keyboard"}
    for more information about how userEvent parses your input.`;
}
function P1(e) {
  return new e.constructor(e.type, e);
}
var X;
(function(e) {
  e[e.Trigger = 2] = "Trigger", e[e.Call = 1] = "Call";
})(X || (X = {}));
function Wt(e, t) {
  e.levelRefs[t] = {};
}
function Cr(e, t) {
  return e.levelRefs[t];
}
var _t;
(function(e) {
  e[e.EachTrigger = 4] = "EachTrigger", e[e.EachApiCall = 2] = "EachApiCall", e[e.EachTarget = 1] = "EachTarget", e[e.Never = 0] = "Never";
})(_t || (_t = {}));
function _e(e) {
  for (let r = e; r; r = r.parentElement)
    if (O(r, [
      "button",
      "input",
      "select",
      "textarea",
      "optgroup",
      "option"
    ])) {
      if (r.hasAttribute("disabled"))
        return !0;
    } else if (O(r, "fieldset")) {
      var t;
      if (r.hasAttribute("disabled") && !(!((t = r.querySelector(":scope > legend")) === null || t === void 0) && t.contains(e)))
        return !0;
    } else if (r.tagName.includes("-") && r.constructor.formAssociated && r.hasAttribute("disabled"))
      return !0;
  return !1;
}
function ni(e) {
  const t = e.activeElement;
  return t != null && t.shadowRoot ? ni(t.shadowRoot) : _e(t) ? e.ownerDocument ? (
    /* istanbul ignore next */
    e.ownerDocument.body
  ) : e.body : t;
}
function ji(e) {
  var t;
  return (t = ni(e)) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  );
}
function S1(e, t) {
  let r = e;
  do {
    if (t(r))
      return r;
    r = r.parentElement;
  } while (r && r !== e.ownerDocument.body);
}
function pe(e) {
  return Sv(e) && _v(e);
}
function T1(e) {
  return Sv(e) && mv(e);
}
function Sv(e) {
  return e.nodeType === 1;
}
function A1(e) {
  const t = e.ownerDocument.getSelection();
  if (t != null && t.focusNode && pe(e)) {
    const n = lr(t.focusNode);
    if (n) {
      if (!t.isCollapsed) {
        var r;
        const o = ((r = n.firstChild) === null || r === void 0 ? void 0 : r.nodeType) === 3 ? n.firstChild : n;
        t.setBaseAndExtent(o, 0, o, 0);
      }
    } else
      t.setBaseAndExtent(e, 0, e, 0);
  }
}
function $t(e, t) {
  return q().eventWrapper(e);
}
function Ve(e) {
  const t = S1(e, gs), r = ni(e.ownerDocument);
  (t ?? e.ownerDocument.body) !== r && ($t(t ? () => t.focus() : () => r == null ? void 0 : r.blur()), A1(t ?? e.ownerDocument.body));
}
function O1(e) {
  !gs(e) || !(ni(e.ownerDocument) === e) || $t(() => e.blur());
}
const Ge = {};
Ge.click = (e, t, r) => {
  const n = t.closest("button,input,label,select,textarea"), o = n && O(n, "label") && n.control;
  if (o)
    return () => {
      gs(o) && Ve(o), r.dispatchEvent(o, P1(e));
    };
  if (O(t, "input", {
    type: "file"
  }))
    return () => {
      O1(t), t.dispatchEvent(new (fe(t)).Event("fileDialog")), Ve(t);
    };
};
const qt = Symbol("Displayed value in UI"), he = Symbol("Displayed selection in UI"), un = Symbol("Initial value to compare on blur");
function x1(e) {
  return typeof e == "object" && qt in e;
}
function $1(e) {
  return !!e && typeof e == "object" && he in e;
}
function q1(e, t) {
  e[un] === void 0 && (e[un] = e.value), e[qt] = t, e.value = Object.assign(new String(t), {
    [qt]: !0
  });
}
function ve(e) {
  return e[qt] === void 0 ? e.value : String(e[qt]);
}
function Es(e) {
  e[qt] = void 0;
}
function Tv(e) {
  e[un] = void 0;
}
function I1(e) {
  return e[un];
}
function M1(e, t) {
  e[he] = t;
}
function Lt(e, { focusOffset: t, anchorOffset: r = t }, n = "replace") {
  const o = ve(e).length, a = (d) => Math.max(0, Math.min(o, d)), i = n === "replace" || e[he] === void 0 ? a(r) : e[he].anchorOffset, s = a(t), l = Math.min(i, s), u = Math.max(i, s);
  if (e[he] = {
    anchorOffset: i,
    focusOffset: s
  }, e.selectionStart === l && e.selectionEnd === u)
    return;
  const c = Object.assign(new Number(l), {
    [he]: !0
  });
  try {
    e.setSelectionRange(c, u);
  } catch {
  }
}
function sr(e) {
  var t, r, n;
  const o = (n = e[he]) !== null && n !== void 0 ? n : {
    anchorOffset: (t = e.selectionStart) !== null && t !== void 0 ? t : 0,
    focusOffset: (r = e.selectionEnd) !== null && r !== void 0 ? r : 0
  };
  return {
    ...o,
    startOffset: Math.min(o.anchorOffset, o.focusOffset),
    endOffset: Math.max(o.anchorOffset, o.focusOffset)
  };
}
function N1(e) {
  return !!e[he];
}
function Dr(e) {
  e[he] = void 0;
}
const cn = globalThis.parseInt;
function B1(e) {
  const t = e.replace(/\D/g, "");
  if (t.length < 2)
    return e;
  const r = cn(t[0], 10), n = cn(t[1], 10);
  if (r >= 3 || r === 2 && n >= 4) {
    let o;
    return r >= 3 ? o = 1 : o = 2, wc(t, o);
  }
  return e.length === 2 ? e : wc(t, 2);
}
function wc(e, t) {
  const r = e.slice(0, t), n = Math.min(cn(r, 10), 23), o = e.slice(t), a = cn(o, 10), i = Math.min(a, 59);
  return `${n.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`;
}
function Av(e, t) {
  const r = e.cloneNode();
  return r.value = t, r.value === t;
}
function Ov(e, t, r, n) {
  if (Lr(e) && t + r >= 0 && t + r <= e.nodeValue.length)
    return {
      node: e,
      offset: t + r
    };
  const o = Cc(e, t, r);
  if (o) {
    if (Lr(o))
      return {
        node: o,
        offset: r > 0 ? Math.min(1, o.nodeValue.length) : Math.max(o.nodeValue.length - 1, 0)
      };
    if (O(o, "br")) {
      const a = Cc(o, void 0, r);
      return a ? Lr(a) ? {
        node: a,
        offset: r > 0 ? 0 : a.nodeValue.length
      } : r < 0 && O(a, "br") ? {
        node: o.parentNode,
        offset: Pr(o)
      } : {
        node: a.parentNode,
        offset: Pr(a) + (r > 0 ? 0 : 1)
      } : r < 0 && n === "deleteContentBackward" ? {
        node: o.parentNode,
        offset: Pr(o)
      } : void 0;
    } else
      return {
        node: o.parentNode,
        offset: Pr(o) + (r > 0 ? 1 : 0)
      };
  }
}
function Cc(e, t, r) {
  const n = Number(t) + (r < 0 ? -1 : 0);
  return t !== void 0 && _s(e) && n >= 0 && n < e.children.length && (e = e.children[n]), D1(e, r === 1 ? "next" : "previous", k1);
}
function k1(e) {
  if (Lr(e))
    return !0;
  if (_s(e)) {
    if (O(e, [
      "input",
      "textarea"
    ]))
      return e.type !== "hidden";
    if (O(e, "br"))
      return !0;
  }
  return !1;
}
function Pr(e) {
  let t = 0;
  for (; e.previousSibling; )
    t++, e = e.previousSibling;
  return t;
}
function _s(e) {
  return e.nodeType === 1;
}
function Lr(e) {
  return e.nodeType === 3;
}
function D1(e, t, r) {
  for (; ; ) {
    var n;
    const o = e[`${t}Sibling`];
    if (o) {
      if (e = L1(o, t === "next" ? "first" : "last"), r(e))
        return e;
    } else if (e.parentNode && (!_s(e.parentNode) || !rt(e.parentNode) && e.parentNode !== ((n = e.ownerDocument) === null || n === void 0 ? void 0 : n.body)))
      e = e.parentNode;
    else
      break;
  }
}
function L1(e, t) {
  for (; e.hasChildNodes(); )
    e = e[`${t}Child`];
  return e;
}
const ur = Symbol("Track programmatic changes for React workaround");
function F1(e) {
  return Object.getOwnPropertyNames(e).some((t) => t.startsWith("__react")) && fe(e).REACT_VERSION === 17;
}
function j1(e) {
  F1(e) && (e[ur] = {
    previousValue: String(e.value),
    tracked: []
  });
}
function U1(e, t) {
  var r, n;
  (n = e[ur]) === null || n === void 0 || (r = n.tracked) === null || r === void 0 || r.push(t), e[ur] || (Es(e), Lt(e, {
    focusOffset: t.length
  }));
}
function H1(e, t) {
  var r;
  const n = e[ur];
  if (e[ur] = void 0, !(!(n == null || (r = n.tracked) === null || r === void 0) && r.length))
    return;
  const o = n.tracked.length === 2 && n.tracked[0] === n.previousValue && n.tracked[1] === e.value;
  o || Es(e), N1(e) && Lt(e, {
    focusOffset: o ? t : e.value.length
  });
}
function xv(e) {
  const t = W1(e);
  if (t && pe(t))
    return {
      type: "input",
      selection: sr(t)
    };
  const r = t == null ? void 0 : t.ownerDocument.getSelection();
  return {
    type: lr(e) && (r == null ? void 0 : r.anchorNode) && lr(r.anchorNode) ? "contenteditable" : "default",
    selection: r
  };
}
function W1(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function V1(e) {
  const t = xv(e);
  if (t.type === "input")
    return t.selection;
  if (t.type === "contenteditable") {
    var r;
    return (r = t.selection) === null || r === void 0 ? void 0 : r.getRangeAt(0);
  }
}
function nt({ focusNode: e, focusOffset: t, anchorNode: r = e, anchorOffset: n = t }) {
  var o, a;
  if (xv(e).type === "input")
    return Lt(e, {
      anchorOffset: n,
      focusOffset: t
    });
  (a = r.ownerDocument) === null || a === void 0 || (o = a.getSelection()) === null || o === void 0 || o.setBaseAndExtent(r, n, e, t);
}
function $v(e) {
  return O(e, "input") && [
    "date",
    "time"
  ].includes(e.type);
}
function It(e, t, r, n = "insertText") {
  const o = V1(t);
  o && (!$v(t) && !e.dispatchUIEvent(t, "beforeinput", {
    inputType: n,
    data: r
  }) || ("startContainer" in o ? G1(e, t, o, r, n) : z1(e, t, o, r, n)));
}
function G1(e, t, r, n, o) {
  let a = !1;
  if (!r.collapsed)
    a = !0, r.deleteContents();
  else if ([
    "deleteContentBackward",
    "deleteContentForward"
  ].includes(o)) {
    const i = Ov(r.startContainer, r.startOffset, o === "deleteContentBackward" ? -1 : 1, o);
    if (i) {
      a = !0;
      const s = r.cloneRange();
      s.comparePoint(i.node, i.offset) < 0 ? s.setStart(i.node, i.offset) : s.setEnd(i.node, i.offset), s.deleteContents();
    }
  }
  if (n)
    if (r.endContainer.nodeType === 3) {
      const i = r.endOffset;
      r.endContainer.insertData(i, n), r.setStart(r.endContainer, i + n.length), r.setEnd(r.endContainer, i + n.length);
    } else {
      const i = t.ownerDocument.createTextNode(n);
      r.insertNode(i), r.setStart(i, n.length), r.setEnd(i, n.length);
    }
  (a || n) && e.dispatchUIEvent(t, "input", {
    inputType: o
  });
}
function z1(e, t, r, n, o) {
  let a = n;
  if (_1(t)) {
    const u = E1(t);
    if (u !== void 0 && n.length > 0) {
      const c = u - t.value.length;
      if (c > 0)
        a = n.substring(0, c);
      else
        return;
    }
  }
  const { newValue: i, newOffset: s, oldValue: l } = Y1(a, t, r, o);
  i === l && s === r.startOffset && s === r.endOffset || O(t, "input", {
    type: "number"
  }) && !K1(i) || (q1(t, i), nt({
    focusNode: t,
    anchorOffset: s,
    focusOffset: s
  }), $v(t) ? Av(t, i) && (Pc(e, t, s, {}), e.dispatchUIEvent(t, "change"), Tv(t)) : Pc(e, t, s, {
    data: n,
    inputType: o
  }));
}
function Y1(e, t, { startOffset: r, endOffset: n }, o) {
  const a = ve(t), i = Math.max(0, r === n && o === "deleteContentBackward" ? r - 1 : r), s = a.substring(0, i), l = Math.min(a.length, r === n && o === "deleteContentForward" ? r + 1 : n), u = a.substring(l, a.length);
  let c = `${s}${e}${u}`, d = i + e.length;
  if (O(t, "input", {
    type: "time"
  })) {
    const f = B1(c);
    f !== "" && Av(t, f) && (c = f, d = f.length);
  }
  return {
    oldValue: a,
    newValue: c,
    newOffset: d
  };
}
function Pc(e, t, r, n) {
  e.dispatchUIEvent(t, "input", n), H1(t, r);
}
function K1(e) {
  var t, r;
  const n = e.split("e", 2);
  return !(/[^\d.\-e]/.test(e) || Number((t = e.match(/-/g)) === null || t === void 0 ? void 0 : t.length) > 2 || Number((r = e.match(/\./g)) === null || r === void 0 ? void 0 : r.length) > 1 || n[1] && !/^-?\d*$/.test(n[1]));
}
Ge.cut = (e, t, r) => () => {
  xt(t) && It(r, t, "", "deleteByCut");
};
function X1(e) {
  return e ? rt(e) ? e.textContent : ve(e) : null;
}
function Q1(e) {
  const t = fe(e);
  for (let r = e; r != null && r.ownerDocument; r = r.parentElement) {
    const { display: n, visibility: o } = t.getComputedStyle(r);
    if (n === "none" || o === "hidden")
      return !1;
  }
  return !0;
}
function J1(e, t) {
  const r = e.ownerDocument, n = r.querySelectorAll(Rv), o = Array.from(n).filter((l) => l === e || !(Number(l.getAttribute("tabindex")) < 0 || _e(l)));
  Number(e.getAttribute("tabindex")) >= 0 && o.sort((l, u) => {
    const c = Number(l.getAttribute("tabindex")), d = Number(u.getAttribute("tabindex"));
    return c === d ? 0 : c === 0 ? 1 : d === 0 ? -1 : c - d;
  });
  const a = {};
  let i = [
    r.body
  ];
  const s = O(e, "input", {
    type: "radio"
  }) ? e.name : void 0;
  o.forEach((l) => {
    const u = l;
    if (O(u, "input", {
      type: "radio"
    }) && u.name) {
      if (u === e) {
        i.push(u);
        return;
      } else if (u.name === s)
        return;
      if (u.checked) {
        i = i.filter((c) => !O(c, "input", {
          type: "radio",
          name: u.name
        })), i.push(u), a[u.name] = u;
        return;
      }
      if (typeof a[u.name] < "u")
        return;
    }
    i.push(u);
  });
  for (let l = i.findIndex((u) => u === e); ; )
    if (l += t ? -1 : 1, l === i.length ? l = 0 : l === -1 && (l = i.length - 1), i[l] === e || i[l] === r.body || Q1(i[l]))
      return i[l];
}
function Sc(e, t) {
  if (pe(e)) {
    const r = sr(e);
    nt({
      focusNode: e,
      focusOffset: r.startOffset === r.endOffset ? r.focusOffset + t : t < 0 ? r.startOffset : r.endOffset
    });
  } else {
    const r = e.ownerDocument.getSelection();
    if (!(r != null && r.focusNode))
      return;
    if (r.isCollapsed) {
      const n = Ov(r.focusNode, r.focusOffset, t);
      n && nt({
        focusNode: n.node,
        focusOffset: n.offset
      });
    } else
      r[t < 0 ? "collapseToStart" : "collapseToEnd"]();
  }
}
function qv(e) {
  if (pe(e))
    return nt({
      focusNode: e,
      anchorOffset: 0,
      focusOffset: ve(e).length
    });
  var t;
  const r = (t = lr(e)) !== null && t !== void 0 ? t : e.ownerDocument.body;
  nt({
    focusNode: r,
    anchorOffset: 0,
    focusOffset: r.childNodes.length
  });
}
function Z1(e) {
  if (pe(e))
    return sr(e).startOffset === 0 && sr(e).endOffset === ve(e).length;
  var t;
  const r = (t = lr(e)) !== null && t !== void 0 ? t : e.ownerDocument.body, n = e.ownerDocument.getSelection();
  return (n == null ? void 0 : n.anchorNode) === r && n.focusNode === r && n.anchorOffset === 0 && n.focusOffset === r.childNodes.length;
}
function Vt(e, t, r) {
  var n;
  if (pe(e))
    return nt({
      focusNode: e,
      anchorOffset: t,
      focusOffset: r
    });
  if (rt(e) && ((n = e.firstChild) === null || n === void 0 ? void 0 : n.nodeType) === 3)
    return nt({
      focusNode: e.firstChild,
      anchorOffset: t,
      focusOffset: r
    });
  throw new Error("Not implemented. The result of this interaction is unreliable.");
}
function Sr(e, t, r) {
  const n = fe(t), o = Array.from(t.ownerDocument.querySelectorAll(t.name ? `input[type="radio"][name="${n.CSS.escape(t.name)}"]` : 'input[type="radio"][name=""], input[type="radio"]:not([name])'));
  for (let a = o.findIndex((i) => i === t) + r; ; a += r) {
    if (o[a] || (a = r > 0 ? 0 : o.length - 1), o[a] === t)
      return;
    _e(o[a]) || (Ve(o[a]), e.dispatchUIEvent(o[a], "click"));
  }
}
Ge.keydown = (e, t, r) => {
  var n, o;
  return (o = (n = Tc[e.key]) === null || n === void 0 ? void 0 : n.call(Tc, e, t, r)) !== null && o !== void 0 ? o : e$(e, t, r);
};
const Tc = {
  ArrowDown: (e, t, r) => {
    if (O(t, "input", {
      type: "radio"
    }))
      return () => Sr(r, t, -1);
  },
  ArrowLeft: (e, t, r) => O(t, "input", {
    type: "radio"
  }) ? () => Sr(r, t, -1) : () => Sc(t, -1),
  ArrowRight: (e, t, r) => O(t, "input", {
    type: "radio"
  }) ? () => Sr(r, t, 1) : () => Sc(t, 1),
  ArrowUp: (e, t, r) => {
    if (O(t, "input", {
      type: "radio"
    }))
      return () => Sr(r, t, 1);
  },
  Backspace: (e, t, r) => {
    if (xt(t))
      return () => {
        It(r, t, "", "deleteContentBackward");
      };
  },
  Delete: (e, t, r) => {
    if (xt(t))
      return () => {
        It(r, t, "", "deleteContentForward");
      };
  },
  End: (e, t) => {
    if (O(t, [
      "input",
      "textarea"
    ]) || rt(t))
      return () => {
        var r, n;
        const o = (n = (r = X1(t)) === null || r === void 0 ? void 0 : r.length) !== null && n !== void 0 ? n : (
          /* istanbul ignore next */
          0
        );
        Vt(t, o, o);
      };
  },
  Home: (e, t) => {
    if (O(t, [
      "input",
      "textarea"
    ]) || rt(t))
      return () => {
        Vt(t, 0, 0);
      };
  },
  PageDown: (e, t) => {
    if (O(t, [
      "input"
    ]))
      return () => {
        const r = ve(t).length;
        Vt(t, r, r);
      };
  },
  PageUp: (e, t) => {
    if (O(t, [
      "input"
    ]))
      return () => {
        Vt(t, 0, 0);
      };
  },
  Tab: (e, t, r) => () => {
    const n = J1(t, r.system.keyboard.modifiers.Shift);
    Ve(n), pe(n) && Lt(n, {
      anchorOffset: 0,
      focusOffset: n.value.length
    });
  }
}, e$ = (e, t, r) => {
  if (e.code === "KeyA" && r.system.keyboard.modifiers.Control)
    return () => qv(t);
};
Ge.keypress = (e, t, r) => {
  if (e.key === "Enter") {
    if (O(t, "button") || O(t, "input") && t$.includes(t.type) || O(t, "a") && t.href)
      return () => {
        r.dispatchUIEvent(t, "click");
      };
    if (O(t, "input")) {
      const n = t.form, o = n == null ? void 0 : n.querySelector('input[type="submit"], button:not([type]), button[type="submit"]');
      return o ? () => r.dispatchUIEvent(o, "click") : n && r$.includes(t.type) && n.querySelectorAll("input").length === 1 ? () => r.dispatchUIEvent(n, "submit") : void 0;
    }
  }
  if (xt(t)) {
    const n = e.key === "Enter" ? rt(t) && !r.system.keyboard.modifiers.Shift ? "insertParagraph" : "insertLineBreak" : "insertText", o = e.key === "Enter" ? `
` : e.key;
    return () => It(r, t, o, n);
  }
};
const t$ = [
  "button",
  "color",
  "file",
  "image",
  "reset",
  "submit"
], r$ = [
  "email",
  "month",
  "password",
  "search",
  "tel",
  "text",
  "url",
  "week"
];
Ge.keyup = (e, t, r) => {
  var n;
  return (n = Ac[e.key]) === null || n === void 0 ? void 0 : n.call(Ac, e, t, r);
};
const Ac = {
  " ": (e, t, r) => {
    if (mv(t))
      return () => r.dispatchUIEvent(t, "click");
  }
};
Ge.paste = (e, t, r) => {
  if (xt(t))
    return () => {
      var n;
      const o = (n = e.clipboardData) === null || n === void 0 ? void 0 : n.getData("text");
      o && It(r, t, o, "insertFromPaste");
    };
};
const Iv = {
  auxclick: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  beforeinput: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  click: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  contextmenu: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  copy: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  change: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  cut: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dblclick: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  keydown: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  keypress: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  keyup: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  paste: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  input: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  mousedown: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseenter: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseleave: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mousemove: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseout: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseover: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseup: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerover: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerenter: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pointerdown: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointermove: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerup: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointercancel: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  pointerout: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerleave: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  submit: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  }
};
function Mv(e) {
  return Iv[e].EventType;
}
const n$ = [
  "MouseEvent",
  "PointerEvent"
];
function o$(e) {
  return n$.includes(Mv(e));
}
function a$(e) {
  return Mv(e) === "KeyboardEvent";
}
const i$ = {
  ClipboardEvent: [
    s$
  ],
  Event: [],
  InputEvent: [
    Tr,
    u$
  ],
  MouseEvent: [
    Tr,
    Ui,
    Oc
  ],
  PointerEvent: [
    Tr,
    Ui,
    Oc,
    d$
  ],
  KeyboardEvent: [
    Tr,
    Ui,
    c$
  ]
};
function Nv(e, t, r) {
  const n = fe(t), { EventType: o, defaultInit: a } = Iv[e], i = new (l$(n))[o](e, a);
  return i$[o].forEach((s) => s(i, r ?? {})), i;
}
function l$(e) {
  var t;
  const r = (t = e.Event) !== null && t !== void 0 ? t : class {
  };
  var n;
  const o = (n = e.AnimationEvent) !== null && n !== void 0 ? n : class extends r {
  };
  var a;
  const i = (a = e.ClipboardEvent) !== null && a !== void 0 ? a : class extends r {
  };
  var s;
  const l = (s = e.PopStateEvent) !== null && s !== void 0 ? s : class extends r {
  };
  var u;
  const c = (u = e.ProgressEvent) !== null && u !== void 0 ? u : class extends r {
  };
  var d;
  const f = (d = e.TransitionEvent) !== null && d !== void 0 ? d : class extends r {
  };
  var m;
  const y = (m = e.UIEvent) !== null && m !== void 0 ? m : class extends r {
  };
  var h;
  const P = (h = e.CompositionEvent) !== null && h !== void 0 ? h : class extends y {
  };
  var p;
  const _ = (p = e.FocusEvent) !== null && p !== void 0 ? p : class extends y {
  };
  var C;
  const w = (C = e.InputEvent) !== null && C !== void 0 ? C : class extends y {
  };
  var S;
  const v = (S = e.KeyboardEvent) !== null && S !== void 0 ? S : class extends y {
  };
  var b;
  const E = (b = e.MouseEvent) !== null && b !== void 0 ? b : class extends y {
  };
  var M;
  const F = (M = e.DragEvent) !== null && M !== void 0 ? M : class extends E {
  };
  var L;
  const j = (L = e.PointerEvent) !== null && L !== void 0 ? L : class extends E {
  };
  var R;
  const A = (R = e.TouchEvent) !== null && R !== void 0 ? R : class extends y {
  };
  return {
    Event: r,
    AnimationEvent: o,
    ClipboardEvent: i,
    PopStateEvent: l,
    ProgressEvent: c,
    TransitionEvent: f,
    UIEvent: y,
    CompositionEvent: P,
    FocusEvent: _,
    InputEvent: w,
    KeyboardEvent: v,
    MouseEvent: E,
    DragEvent: F,
    PointerEvent: j,
    TouchEvent: A
  };
}
function ut(e, t) {
  for (const [r, n] of Object.entries(t))
    Object.defineProperty(e, r, {
      get: () => n ?? null
    });
}
function W(e) {
  return Number(e ?? 0);
}
function s$(e, { clipboardData: t }) {
  ut(e, {
    clipboardData: t
  });
}
function u$(e, { data: t, inputType: r, isComposing: n }) {
  ut(e, {
    data: t,
    isComposing: !!n,
    inputType: String(r)
  });
}
function Tr(e, { view: t, detail: r }) {
  ut(e, {
    view: t,
    detail: W(r ?? 0)
  });
}
function Ui(e, { altKey: t, ctrlKey: r, metaKey: n, shiftKey: o, modifierAltGraph: a, modifierCapsLock: i, modifierFn: s, modifierFnLock: l, modifierNumLock: u, modifierScrollLock: c, modifierSymbol: d, modifierSymbolLock: f }) {
  ut(e, {
    altKey: !!t,
    ctrlKey: !!r,
    metaKey: !!n,
    shiftKey: !!o,
    getModifierState(m) {
      return !!{
        Alt: t,
        AltGraph: a,
        CapsLock: i,
        Control: r,
        Fn: s,
        FnLock: l,
        Meta: n,
        NumLock: u,
        ScrollLock: c,
        Shift: o,
        Symbol: d,
        SymbolLock: f
      }[m];
    }
  });
}
function c$(e, { key: t, code: r, location: n, repeat: o, isComposing: a, charCode: i }) {
  ut(e, {
    key: String(t),
    code: String(r),
    location: W(n),
    repeat: !!o,
    isComposing: !!a,
    charCode: i
  });
}
function Oc(e, { x: t, y: r, screenX: n, screenY: o, clientX: a = t, clientY: i = r, button: s, buttons: l, relatedTarget: u }) {
  ut(e, {
    screenX: W(n),
    screenY: W(o),
    clientX: W(a),
    x: W(a),
    clientY: W(i),
    y: W(i),
    button: W(s),
    buttons: W(l),
    relatedTarget: u
  });
}
function d$(e, { pointerId: t, width: r, height: n, pressure: o, tangentialPressure: a, tiltX: i, tiltY: s, twist: l, pointerType: u, isPrimary: c }) {
  ut(e, {
    pointerId: W(t),
    width: W(r),
    height: W(n),
    pressure: W(o),
    tangentialPressure: W(a),
    tiltX: W(i),
    tiltY: W(s),
    twist: W(l),
    pointerType: String(u),
    isPrimary: !!c
  });
}
function f$(e, t, r, n = !1) {
  (o$(t) || a$(t)) && (r = {
    ...r,
    ...this.system.getUIEventModifiers()
  });
  const o = Nv(t, e, r);
  return Bv.call(this, e, o, n);
}
function Bv(e, t, r = !1) {
  var n;
  const o = t.type, a = r ? () => {
  } : (n = Ge[o]) === null || n === void 0 ? void 0 : n.call(Ge, t, e, this);
  if (a) {
    t.preventDefault();
    let i = !1;
    return Object.defineProperty(t, "defaultPrevented", {
      get: () => i
    }), Object.defineProperty(t, "preventDefault", {
      value: () => {
        i = t.cancelable;
      }
    }), $t(() => e.dispatchEvent(t)), i || a(), !i;
  }
  return $t(() => e.dispatchEvent(t));
}
function p$(e, t, r) {
  const n = Nv(t, e, r);
  $t(() => e.dispatchEvent(n));
}
const Hi = Symbol("Interceptor for programmatical calls");
function gt(e, t, r) {
  const n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), o = Object.getOwnPropertyDescriptor(e, t), a = n != null && n.set ? "set" : "value";
  if (typeof (n == null ? void 0 : n[a]) != "function" || n[a][Hi])
    throw new Error(`Element ${e.tagName} does not implement "${String(t)}".`);
  function i(...s) {
    const { applyNative: l = !1, realArgs: u, then: c } = r.call(this, ...s), d = (!l && o || n)[a];
    a === "set" ? d.call(this, u) : d.call(this, ...u), c == null || c();
  }
  i[Hi] = Hi, Object.defineProperty(e, t, {
    ...o ?? n,
    [a]: i
  });
}
function v$(e) {
  gt(e, "value", function(r) {
    const n = x1(r);
    return n && j1(this), {
      applyNative: !!n,
      realArgs: m$(this, r),
      then: n ? void 0 : () => U1(this, String(r))
    };
  });
}
function m$(e, t) {
  return O(e, "input", {
    type: "number"
  }) && String(t) !== "" && !Number.isNaN(Number(t)) ? String(Number(t)) : String(t);
}
function y$(e) {
  gt(e, "setSelectionRange", function(r, ...n) {
    const o = $1(r);
    return {
      applyNative: !!o,
      realArgs: [
        Number(r),
        ...n
      ],
      then: () => o ? void 0 : Dr(e)
    };
  }), gt(e, "selectionStart", function(r) {
    return {
      realArgs: r,
      then: () => Dr(e)
    };
  }), gt(e, "selectionEnd", function(r) {
    return {
      realArgs: r,
      then: () => Dr(e)
    };
  }), gt(e, "select", function() {
    return {
      realArgs: [],
      then: () => M1(e, {
        anchorOffset: 0,
        focusOffset: ve(e).length
      })
    };
  });
}
function b$(e) {
  gt(e, "setRangeText", function(...r) {
    return {
      realArgs: r,
      then: () => {
        Es(e), Dr(e);
      }
    };
  });
}
const Rt = Symbol("Node prepared with document state workarounds");
function kv(e) {
  e[Rt] || (e.addEventListener("focus", (t) => {
    const r = t.target;
    xc(r);
  }, {
    capture: !0,
    passive: !0
  }), e.activeElement && xc(e.activeElement), e.addEventListener("blur", (t) => {
    const r = t.target, n = I1(r);
    n !== void 0 && (r.value !== n && p$(r, "change"), Tv(r));
  }, {
    capture: !0,
    passive: !0
  }), e[Rt] = Rt);
}
function xc(e) {
  e[Rt] || (O(e, [
    "input",
    "textarea"
  ]) && (v$(e), y$(e), b$(e)), e[Rt] = Rt);
}
function h$(e) {
  return g$(e) ? e : e.ownerDocument;
}
function g$(e) {
  return e.nodeType === 9;
}
function Mt(e) {
  const t = e.delay;
  if (typeof t == "number")
    return Promise.all([
      new Promise((r) => globalThis.setTimeout(() => r(), t)),
      e.advanceTimers(t)
    ]);
}
function mt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var ee;
(function(e) {
  e[e.STANDARD = 0] = "STANDARD", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.NUMPAD = 3] = "NUMPAD";
})(ee || (ee = {}));
const E$ = [
  "Alt",
  "AltGraph",
  "Control",
  "Fn",
  "Meta",
  "Shift",
  "Symbol"
];
function $c(e) {
  return E$.includes(e);
}
const _$ = [
  "CapsLock",
  "FnLock",
  "NumLock",
  "ScrollLock",
  "SymbolLock"
];
function qc(e) {
  return _$.includes(e);
}
class R$ {
  isKeyPressed(t) {
    return !!this.pressed[String(t.code)];
  }
  getPressedKeys() {
    return Object.values(this.pressed).map((t) => t.keyDef);
  }
  /** Press a key */
  async keydown(t, r) {
    var n, o, a;
    const i = String(r.key), s = String(r.code), l = ji(t.config.document);
    this.setKeydownTarget(l);
    var u;
    (u = (n = this.pressed)[o = s]) !== null && u !== void 0 || (n[o] = {
      keyDef: r,
      unpreventedDefault: !1
    }), $c(i) && (this.modifiers[i] = !0);
    const c = t.dispatchUIEvent(l, "keydown", {
      key: i,
      code: s
    });
    qc(i) && !this.modifiers[i] && (this.modifiers[i] = !0, this.modifierLockStart[i] = !0), (a = this.pressed[s]).unpreventedDefault || (a.unpreventedDefault = c), c && this.hasKeyPress(i) && t.dispatchUIEvent(ji(t.config.document), "keypress", {
      key: i,
      code: s,
      charCode: r.key === "Enter" ? 13 : String(r.key).charCodeAt(0)
    });
  }
  /** Release a key */
  async keyup(t, r) {
    const n = String(r.key), o = String(r.code), a = this.pressed[o].unpreventedDefault;
    delete this.pressed[o], $c(n) && !Object.values(this.pressed).find((i) => i.keyDef.key === n) && (this.modifiers[n] = !1), t.dispatchUIEvent(ji(t.config.document), "keyup", {
      key: n,
      code: o
    }, !a), qc(n) && this.modifiers[n] && (this.modifierLockStart[n] ? this.modifierLockStart[n] = !1 : this.modifiers[n] = !1);
  }
  setKeydownTarget(t) {
    t !== this.lastKeydownTarget && (this.carryChar = ""), this.lastKeydownTarget = t;
  }
  hasKeyPress(t) {
    return (t.length === 1 || t === "Enter") && !this.modifiers.Control && !this.modifiers.Alt;
  }
  constructor(t) {
    mt(this, "system", void 0), mt(this, "modifiers", {
      Alt: !1,
      AltGraph: !1,
      CapsLock: !1,
      Control: !1,
      Fn: !1,
      FnLock: !1,
      Meta: !1,
      NumLock: !1,
      ScrollLock: !1,
      Shift: !1,
      Symbol: !1,
      SymbolLock: !1
    }), mt(this, "pressed", {}), mt(this, "carryChar", ""), mt(this, "lastKeydownTarget", void 0), mt(this, "modifierLockStart", {}), this.system = t;
  }
}
const w$ = [
  // alphanumeric keys
  ..."0123456789".split("").map((e) => ({
    code: `Digit${e}`,
    key: e
  })),
  ...")!@#$%^&*(".split("").map((e, t) => ({
    code: `Digit${t}`,
    key: e,
    shiftKey: !0
  })),
  ..."abcdefghijklmnopqrstuvwxyz".split("").map((e) => ({
    code: `Key${e.toUpperCase()}`,
    key: e
  })),
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((e) => ({
    code: `Key${e}`,
    key: e,
    shiftKey: !0
  })),
  // alphanumeric block - functional
  {
    code: "Space",
    key: " "
  },
  {
    code: "AltLeft",
    key: "Alt",
    location: ee.LEFT
  },
  {
    code: "AltRight",
    key: "Alt",
    location: ee.RIGHT
  },
  {
    code: "ShiftLeft",
    key: "Shift",
    location: ee.LEFT
  },
  {
    code: "ShiftRight",
    key: "Shift",
    location: ee.RIGHT
  },
  {
    code: "ControlLeft",
    key: "Control",
    location: ee.LEFT
  },
  {
    code: "ControlRight",
    key: "Control",
    location: ee.RIGHT
  },
  {
    code: "MetaLeft",
    key: "Meta",
    location: ee.LEFT
  },
  {
    code: "MetaRight",
    key: "Meta",
    location: ee.RIGHT
  },
  {
    code: "OSLeft",
    key: "OS",
    location: ee.LEFT
  },
  {
    code: "OSRight",
    key: "OS",
    location: ee.RIGHT
  },
  {
    code: "Tab",
    key: "Tab"
  },
  {
    code: "CapsLock",
    key: "CapsLock"
  },
  {
    code: "Backspace",
    key: "Backspace"
  },
  {
    code: "Enter",
    key: "Enter"
  },
  // function
  {
    code: "Escape",
    key: "Escape"
  },
  // arrows
  {
    code: "ArrowUp",
    key: "ArrowUp"
  },
  {
    code: "ArrowDown",
    key: "ArrowDown"
  },
  {
    code: "ArrowLeft",
    key: "ArrowLeft"
  },
  {
    code: "ArrowRight",
    key: "ArrowRight"
  },
  // control pad
  {
    code: "Home",
    key: "Home"
  },
  {
    code: "End",
    key: "End"
  },
  {
    code: "Delete",
    key: "Delete"
  },
  {
    code: "PageUp",
    key: "PageUp"
  },
  {
    code: "PageDown",
    key: "PageDown"
  },
  // Special keys that are not part of a default US-layout but included for specific behavior
  {
    code: "Fn",
    key: "Fn"
  },
  {
    code: "Symbol",
    key: "Symbol"
  },
  {
    code: "AltRight",
    key: "AltGraph"
  }
], C$ = [
  {
    name: "MouseLeft",
    pointerType: "mouse",
    button: "primary"
  },
  {
    name: "MouseRight",
    pointerType: "mouse",
    button: "secondary"
  },
  {
    name: "MouseMiddle",
    pointerType: "mouse",
    button: "auxiliary"
  },
  {
    name: "TouchA",
    pointerType: "touch"
  },
  {
    name: "TouchB",
    pointerType: "touch"
  },
  {
    name: "TouchC",
    pointerType: "touch"
  }
];
function P$(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Dv {
  getButtons() {
    let t = 0;
    for (const r of Object.keys(this.pressed))
      t |= 2 ** Number(r);
    return t;
  }
  down(t) {
    const r = Ml(t.button);
    if (r in this.pressed) {
      this.pressed[r].push(t);
      return;
    }
    return this.pressed[r] = [
      t
    ], r;
  }
  up(t) {
    const r = Ml(t.button);
    if (r in this.pressed && (this.pressed[r] = this.pressed[r].filter((n) => n.name !== t.name), this.pressed[r].length === 0))
      return delete this.pressed[r], r;
  }
  constructor() {
    P$(this, "pressed", {});
  }
}
const Ic = {
  primary: 0,
  secondary: 1,
  auxiliary: 2,
  back: 3,
  X1: 3,
  forward: 4,
  X2: 4
};
function Ml(e = 0) {
  return e in Ic ? Ic[e] : Number(e);
}
const Mc = {
  1: 2,
  2: 1
};
function Nc(e) {
  return e = Ml(e), e in Mc ? Mc[e] : e;
}
function S$(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class T$ {
  get countPressed() {
    return this.pressedKeys.size;
  }
  isPressed(t) {
    return this.pressedKeys.has(t.name);
  }
  addPressed(t) {
    return this.pressedKeys.add(t.name);
  }
  removePressed(t) {
    return this.pressedKeys.delete(t.name);
  }
  constructor() {
    S$(this, "pressedKeys", /* @__PURE__ */ new Set());
  }
}
function Jt(e, t) {
  const r = [];
  for (let a = e; a; a = a.parentElement)
    r.push(a);
  const n = [];
  for (let a = t; a; a = a.parentElement)
    n.push(a);
  let o = 0;
  for (; !(o >= r.length || o >= n.length || r[r.length - 1 - o] !== n[n.length - 1 - o]); o++)
    ;
  return [
    r.slice(0, r.length - o),
    n.slice(0, n.length - o),
    n.slice(n.length - o)
  ];
}
function Nl({ target: e, node: t, offset: r }) {
  return pe(e) ? {
    node: e,
    offset: r ?? ve(e).length
  } : t ? {
    node: t,
    offset: r ?? (t.nodeType === 3 ? t.nodeValue.length : t.childNodes.length)
  } : Lv(e, r);
}
function Lv(e, t, r = !0) {
  let n = t === void 0 ? e.childNodes.length - 1 : 0;
  const o = t === void 0 ? -1 : 1;
  for (; t === void 0 ? n >= (r ? Math.max(e.childNodes.length - 1, 0) : 0) : n <= e.childNodes.length; ) {
    if (t && n === e.childNodes.length)
      throw new Error("The given offset is out of bounds.");
    const a = e.childNodes.item(n), i = String(a.textContent);
    if (i.length)
      if (t !== void 0 && i.length < t)
        t -= i.length;
      else {
        if (a.nodeType === 1)
          return Lv(a, t, !1);
        if (a.nodeType === 3)
          return {
            node: a,
            offset: t ?? a.nodeValue.length
          };
      }
    n += o;
  }
  return {
    node: e,
    offset: e.childNodes.length
  };
}
function A$({ document: e, target: t, clickCount: r, node: n, offset: o }) {
  if (T1(t))
    return;
  const a = pe(t), i = String(a ? ve(t) : t.textContent), [s, l] = n ? (
    // which elements might be considered in the same line of text.
    // TODO: support expanding initial range on multiple clicks if node is given
    [
      o,
      o
    ]
  ) : O$(i, o, r);
  if (a)
    return Lt(t, {
      anchorOffset: s ?? i.length,
      focusOffset: l ?? i.length
    }), {
      node: t,
      start: s ?? 0,
      end: l ?? i.length
    };
  {
    const { node: u, offset: c } = Nl({
      target: t,
      node: n,
      offset: s
    }), { node: d, offset: f } = Nl({
      target: t,
      node: n,
      offset: l
    }), m = t.ownerDocument.createRange();
    try {
      m.setStart(u, c), m.setEnd(d, f);
    } catch {
      throw new Error("The given offset is out of bounds.");
    }
    const y = e.getSelection();
    return y == null || y.removeAllRanges(), y == null || y.addRange(m.cloneRange()), m;
  }
}
function O$(e, t, r) {
  if (r % 3 === 1 || e.length === 0)
    return [
      t,
      t
    ];
  const n = t ?? e.length;
  return r % 3 === 2 ? [
    n - e.substr(0, t).match(/(\w+|\s+|\W)?$/)[0].length,
    t === void 0 ? t : t + e.substr(t).match(/^(\w+|\s+|\W)?/)[0].length
  ] : [
    n - e.substr(0, t).match(/[^\r\n]*$/)[0].length,
    t === void 0 ? t : t + e.substr(t).match(/^[^\r\n]*/)[0].length
  ];
}
function x$(e, { document: t, target: r, node: n, offset: o }) {
  const a = Nl({
    target: r,
    node: n,
    offset: o
  });
  if ("node" in e) {
    if (a.node === e.node) {
      const i = a.offset < e.start ? e.end : e.start, s = a.offset > e.end || a.offset < e.start ? a.offset : e.end;
      Lt(e.node, {
        anchorOffset: i,
        focusOffset: s
      });
    }
  } else {
    const i = e.cloneRange(), s = i.comparePoint(a.node, a.offset);
    s < 0 ? i.setStart(a.node, a.offset) : s > 0 && i.setEnd(a.node, a.offset);
    const l = t.getSelection();
    l == null || l.removeAllRanges(), l == null || l.addRange(i.cloneRange());
  }
}
function Fv(e, t) {
  var r, n, o, a, i, s, l, u;
  return e.target !== t.target || ((r = e.coords) === null || r === void 0 ? void 0 : r.x) !== ((n = t.coords) === null || n === void 0 ? void 0 : n.y) || ((o = e.coords) === null || o === void 0 ? void 0 : o.y) !== ((a = t.coords) === null || a === void 0 ? void 0 : a.y) || ((i = e.caret) === null || i === void 0 ? void 0 : i.node) !== ((s = t.caret) === null || s === void 0 ? void 0 : s.node) || ((l = e.caret) === null || l === void 0 ? void 0 : l.offset) !== ((u = t.caret) === null || u === void 0 ? void 0 : u.offset);
}
function Xe(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class $$ {
  move(t, r) {
    const n = this.position, o = this.getTarget(t);
    if (this.position = r, !Fv(n, r))
      return;
    const a = this.getTarget(t), i = this.getEventInit("mousemove"), [s, l] = Jt(o, a);
    return {
      leave: () => {
        o !== a && (t.dispatchUIEvent(o, "mouseout", i), s.forEach((u) => t.dispatchUIEvent(u, "mouseleave", i)));
      },
      enter: () => {
        o !== a && (t.dispatchUIEvent(a, "mouseover", i), l.forEach((u) => t.dispatchUIEvent(u, "mouseenter", i)));
      },
      move: () => {
        t.dispatchUIEvent(a, "mousemove", i), this.modifySelecting(t);
      }
    };
  }
  down(t, r, n) {
    const o = this.buttons.down(r);
    if (o === void 0)
      return;
    const a = this.getTarget(t);
    this.buttonDownTarget[o] = a;
    const i = _e(a), s = this.getEventInit("mousedown", r.button);
    (i || t.dispatchUIEvent(a, "mousedown", s)) && (this.startSelecting(t, s.detail), Ve(a)), !i && Nc(r.button) === 2 && t.dispatchUIEvent(a, "contextmenu", this.getEventInit("contextmenu", r.button, n));
  }
  up(t, r, n) {
    const o = this.buttons.up(r);
    if (o === void 0)
      return;
    const a = this.getTarget(t);
    if (!_e(a)) {
      t.dispatchUIEvent(a, "mouseup", this.getEventInit("mouseup", r.button)), this.endSelecting();
      const i = Jt(this.buttonDownTarget[o], a)[2][0];
      if (i) {
        const s = this.getEventInit("click", r.button, n);
        s.detail && (t.dispatchUIEvent(i, s.button === 0 ? "click" : "auxclick", s), s.button === 0 && s.detail === 2 && t.dispatchUIEvent(i, "dblclick", {
          ...this.getEventInit("dblclick", r.button),
          detail: s.detail
        }));
      }
    }
  }
  resetClickCount() {
    this.clickCount.reset();
  }
  getEventInit(t, r, n) {
    const o = {
      ...this.position.coords
    };
    return n && (o.pointerId = n.pointerId, o.pointerType = n.pointerType, o.isPrimary = n.isPrimary), o.button = Nc(r), o.buttons = this.buttons.getButtons(), t === "mousedown" ? o.detail = this.clickCount.getOnDown(o.button) : t === "mouseup" ? o.detail = this.clickCount.getOnUp(o.button) : (t === "click" || t === "auxclick") && (o.detail = this.clickCount.incOnClick(o.button)), o;
  }
  getTarget(t) {
    var r;
    return (r = this.position.target) !== null && r !== void 0 ? r : t.config.document.body;
  }
  startSelecting(t, r) {
    var n, o;
    this.selecting = A$({
      document: t.config.document,
      target: this.getTarget(t),
      node: (n = this.position.caret) === null || n === void 0 ? void 0 : n.node,
      offset: (o = this.position.caret) === null || o === void 0 ? void 0 : o.offset,
      clickCount: r
    });
  }
  modifySelecting(t) {
    var r, n;
    this.selecting && x$(this.selecting, {
      document: t.config.document,
      target: this.getTarget(t),
      node: (r = this.position.caret) === null || r === void 0 ? void 0 : r.node,
      offset: (n = this.position.caret) === null || n === void 0 ? void 0 : n.offset
    });
  }
  endSelecting() {
    this.selecting = void 0;
  }
  constructor() {
    Xe(this, "position", {}), Xe(this, "buttons", new Dv()), Xe(this, "selecting", void 0), Xe(this, "buttonDownTarget", {}), Xe(this, "clickCount", new class {
      incOnClick(t) {
        const r = this.down[t] === void 0 ? void 0 : Number(this.down[t]) + 1;
        return this.count = this.count[t] === void 0 ? {} : {
          [t]: Number(this.count[t]) + 1
        }, r;
      }
      getOnDown(t) {
        var r;
        this.down = {
          [t]: (r = this.count[t]) !== null && r !== void 0 ? r : 0
        };
        var n;
        return this.count = {
          [t]: (n = this.count[t]) !== null && n !== void 0 ? n : 0
        }, Number(this.count[t]) + 1;
      }
      getOnUp(t) {
        return this.down[t] === void 0 ? void 0 : Number(this.down[t]) + 1;
      }
      reset() {
        this.count = {};
      }
      constructor() {
        Xe(this, "down", {}), Xe(this, "count", {});
      }
    }());
  }
}
function dn(e, t) {
  var r;
  return ((r = jv(e, t)) === null || r === void 0 ? void 0 : r.pointerEvents) !== "none";
}
function q$(e) {
  const t = fe(e);
  for (let r = e, n = []; r != null && r.ownerDocument; r = r.parentElement) {
    n.push(r);
    const o = t.getComputedStyle(r).pointerEvents;
    if (o && ![
      "inherit",
      "unset"
    ].includes(o))
      return {
        pointerEvents: o,
        tree: n
      };
  }
}
const Bc = Symbol("Last check for pointer-events");
function jv(e, t) {
  const r = t[Bc];
  if (!(e.config.pointerEventsCheck !== _t.Never && (!r || kc(e.config.pointerEventsCheck, _t.EachApiCall) && r[X.Call] !== Cr(e, X.Call) || kc(e.config.pointerEventsCheck, _t.EachTrigger) && r[X.Trigger] !== Cr(e, X.Trigger))))
    return r == null ? void 0 : r.result;
  const o = q$(t);
  return t[Bc] = {
    [X.Call]: Cr(e, X.Call),
    [X.Trigger]: Cr(e, X.Trigger),
    result: o
  }, o;
}
function Gt(e, t) {
  const r = jv(e, t);
  if ((r == null ? void 0 : r.pointerEvents) === "none")
    throw new Error([
      `Unable to perform pointer interaction as the element ${r.tree.length > 1 ? "inherits" : "has"} \`pointer-events: none\`:`,
      "",
      I$(r.tree)
    ].join(`
`));
}
function I$(e) {
  return e.reverse().map((t, r) => [
    "".padEnd(r),
    t.tagName,
    t.id && `#${t.id}`,
    t.hasAttribute("data-testid") && `(testId=${t.getAttribute("data-testid")})`,
    M$(t),
    e.length > 1 && r === 0 && "  <-- This element declared `pointer-events: none`",
    e.length > 1 && r === e.length - 1 && "  <-- Asserted pointer events here"
  ].filter(Boolean).join("")).join(`
`);
}
function M$(e) {
  var t;
  let r;
  if (e.hasAttribute("aria-label"))
    r = e.getAttribute("aria-label");
  else if (e.hasAttribute("aria-labelledby")) {
    var n, o;
    r = (o = e.ownerDocument.getElementById(e.getAttribute("aria-labelledby"))) === null || o === void 0 || (n = o.textContent) === null || n === void 0 ? void 0 : n.trim();
  } else if (O(e, [
    "button",
    "input",
    "meter",
    "output",
    "progress",
    "select",
    "textarea"
  ]) && (!((t = e.labels) === null || t === void 0) && t.length))
    r = Array.from(e.labels).map((i) => {
      var s;
      return (s = i.textContent) === null || s === void 0 ? void 0 : s.trim();
    }).join("|");
  else if (O(e, "button")) {
    var a;
    r = (a = e.textContent) === null || a === void 0 ? void 0 : a.trim();
  }
  return r = r == null ? void 0 : r.replace(/\n/g, "  "), Number(r == null ? void 0 : r.length) > 30 && (r = `${r == null ? void 0 : r.substring(0, 29)}…`), r ? `(label=${r})` : "";
}
function kc(e, t) {
  return (e & t) > 0;
}
function Te(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Dc {
  init(t, r) {
    this.position = r;
    const n = this.getTarget(t), [, o] = Jt(null, n), a = this.getEventInit();
    return Gt(t, n), t.dispatchUIEvent(n, "pointerover", a), o.forEach((i) => t.dispatchUIEvent(i, "pointerenter", a)), this;
  }
  move(t, r) {
    const n = this.position, o = this.getTarget(t);
    if (this.position = r, !Fv(n, r))
      return;
    const a = this.getTarget(t), i = this.getEventInit(), [s, l] = Jt(o, a);
    return {
      leave: () => {
        dn(t, o) && o !== a && (t.dispatchUIEvent(o, "pointerout", i), s.forEach((u) => t.dispatchUIEvent(u, "pointerleave", i)));
      },
      enter: () => {
        Gt(t, a), o !== a && (t.dispatchUIEvent(a, "pointerover", i), l.forEach((u) => t.dispatchUIEvent(u, "pointerenter", i)));
      },
      move: () => {
        t.dispatchUIEvent(a, "pointermove", i);
      }
    };
  }
  down(t, r) {
    if (this.isDown)
      return;
    const n = this.getTarget(t);
    Gt(t, n), this.isDown = !0, this.isPrevented = !t.dispatchUIEvent(n, "pointerdown", this.getEventInit());
  }
  up(t, r) {
    if (!this.isDown)
      return;
    const n = this.getTarget(t);
    Gt(t, n), this.isDown = !1, t.dispatchUIEvent(n, "pointerup", this.getEventInit());
  }
  release(t) {
    const r = this.getTarget(t), [n] = Jt(r, null), o = this.getEventInit();
    dn(t, r) && (t.dispatchUIEvent(r, "pointerout", o), n.forEach((a) => t.dispatchUIEvent(a, "pointerleave", o))), this.isCancelled = !0;
  }
  getTarget(t) {
    var r;
    return (r = this.position.target) !== null && r !== void 0 ? r : t.config.document.body;
  }
  getEventInit() {
    return {
      ...this.position.coords,
      pointerId: this.pointerId,
      pointerType: this.pointerType,
      isPrimary: this.isPrimary
    };
  }
  constructor({ pointerId: t, pointerType: r, isPrimary: n }) {
    Te(this, "pointerId", void 0), Te(this, "pointerType", void 0), Te(this, "isPrimary", void 0), Te(this, "isMultitouch", !1), Te(this, "isCancelled", !1), Te(this, "isDown", !1), Te(this, "isPrevented", !1), Te(this, "position", {}), this.pointerId = t, this.pointerType = r, this.isPrimary = n, this.isMultitouch = !n;
  }
}
function Ae(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class N$ {
  isKeyPressed(t) {
    return this.devices.get(t.pointerType).isPressed(t);
  }
  async press(t, r, n) {
    const o = this.getPointerName(r), a = r.pointerType === "touch" ? this.pointers.new(o, r).init(t, n) : this.pointers.get(o);
    a.position = n, a.pointerType !== "touch" && (this.mouse.position = n), this.devices.get(r.pointerType).addPressed(r), this.buttons.down(r), a.down(t, r), a.pointerType !== "touch" && !a.isPrevented && this.mouse.down(t, r, a);
  }
  async move(t, r, n) {
    const o = this.pointers.get(r), a = o.move(t, n), i = o.pointerType === "touch" || o.isPrevented && o.isDown ? void 0 : this.mouse.move(t, n);
    a == null || a.leave(), i == null || i.leave(), a == null || a.enter(), i == null || i.enter(), a == null || a.move(), i == null || i.move();
  }
  async release(t, r, n) {
    const o = this.devices.get(r.pointerType);
    o.removePressed(r), this.buttons.up(r);
    const a = this.pointers.get(this.getPointerName(r));
    if (a.position = n, a.pointerType !== "touch" && (this.mouse.position = n), o.countPressed === 0 && a.up(t, r), a.pointerType === "touch" && a.release(t), !a.isPrevented) {
      if (a.pointerType === "touch" && !a.isMultitouch) {
        const i = this.mouse.move(t, a.position);
        i == null || i.leave(), i == null || i.enter(), i == null || i.move(), this.mouse.down(t, r, a);
      }
      if (!a.isMultitouch) {
        const i = this.mouse.move(t, a.position);
        i == null || i.leave(), i == null || i.enter(), i == null || i.move(), this.mouse.up(t, r, a);
      }
    }
  }
  getPointerName(t) {
    return t.pointerType === "touch" ? t.name : t.pointerType;
  }
  getPreviousPosition(t) {
    return this.pointers.has(t) ? this.pointers.get(t).position : void 0;
  }
  resetClickCount() {
    this.mouse.resetClickCount();
  }
  getMouseTarget(t) {
    var r;
    return (r = this.mouse.position.target) !== null && r !== void 0 ? r : t.config.document.body;
  }
  setMousePosition(t) {
    this.mouse.position = t, this.pointers.get("mouse").position = t;
  }
  constructor(t) {
    Ae(this, "system", void 0), Ae(this, "mouse", void 0), Ae(this, "buttons", void 0), Ae(this, "devices", new class {
      get(r) {
        var n, o, a;
        return (a = (n = this.registry)[o = r]) !== null && a !== void 0 || (n[o] = new T$()), this.registry[r];
      }
      constructor() {
        Ae(this, "registry", {});
      }
    }()), Ae(this, "pointers", new class {
      new(r, n) {
        const o = n.pointerType !== "touch" || !Object.values(this.registry).some((a) => a.pointerType === "touch" && !a.isCancelled);
        return o || Object.values(this.registry).forEach((a) => {
          a.pointerType === n.pointerType && !a.isCancelled && (a.isMultitouch = !0);
        }), this.registry[r] = new Dc({
          pointerId: this.nextId++,
          pointerType: n.pointerType,
          isPrimary: o
        }), this.registry[r];
      }
      get(r) {
        if (!this.has(r))
          throw new Error(`Trying to access pointer "${r}" which does not exist.`);
        return this.registry[r];
      }
      has(r) {
        return r in this.registry;
      }
      constructor() {
        Ae(this, "registry", {
          mouse: new Dc({
            pointerId: 1,
            pointerType: "mouse",
            isPrimary: !0
          })
        }), Ae(this, "nextId", 2);
      }
    }()), this.system = t, this.buttons = new Dv(), this.mouse = new $$();
  }
}
function Lc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Uv {
  getUIEventModifiers() {
    return {
      altKey: this.keyboard.modifiers.Alt,
      ctrlKey: this.keyboard.modifiers.Control,
      metaKey: this.keyboard.modifiers.Meta,
      shiftKey: this.keyboard.modifiers.Shift,
      modifierAltGraph: this.keyboard.modifiers.AltGraph,
      modifierCapsLock: this.keyboard.modifiers.CapsLock,
      modifierFn: this.keyboard.modifiers.Fn,
      modifierFnLock: this.keyboard.modifiers.FnLock,
      modifierNumLock: this.keyboard.modifiers.NumLock,
      modifierScrollLock: this.keyboard.modifiers.ScrollLock,
      modifierSymbol: this.keyboard.modifiers.Symbol,
      modifierSymbolLock: this.keyboard.modifiers.SymbolLock
    };
  }
  constructor() {
    Lc(this, "keyboard", new R$(this)), Lc(this, "pointer", new N$(this));
  }
}
async function B$(e) {
  const t = [];
  return this.config.skipHover || t.push({
    target: e
  }), t.push({
    keys: "[MouseLeft]",
    target: e
  }), this.pointer(t);
}
async function k$(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft]"
  ]);
}
async function D$(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft][MouseLeft]"
  ]);
}
async function L$(e) {
  return this.pointer({
    target: e
  });
}
async function F$(e) {
  return Gt(this, this.system.pointer.getMouseTarget(this)), this.pointer({
    target: e.ownerDocument.body
  });
}
async function j$({ shift: e } = {}) {
  return this.keyboard(e === !0 ? "{Shift>}{Tab}{/Shift}" : e === !1 ? "[/ShiftLeft][/ShiftRight]{Tab}" : "{Tab}");
}
function U$(e, t) {
  const r = [];
  do {
    const { type: o, descriptor: a, consumedLength: i, releasePrevious: s, releaseSelf: l = !0, repeat: u } = wv(t, "keyboard");
    var n;
    const c = (n = e.find((d) => {
      if (o === "[") {
        var f;
        return ((f = d.code) === null || f === void 0 ? void 0 : f.toLowerCase()) === a.toLowerCase();
      } else if (o === "{") {
        var m;
        return ((m = d.key) === null || m === void 0 ? void 0 : m.toLowerCase()) === a.toLowerCase();
      }
      return d.key === a;
    })) !== null && n !== void 0 ? n : {
      key: "Unknown",
      code: "Unknown",
      [o === "[" ? "code" : "key"]: a
    };
    r.push({
      keyDef: c,
      releasePrevious: s,
      releaseSelf: l,
      repeat: u
    }), t = t.slice(i);
  } while (t);
  return r;
}
async function H$(e) {
  const t = U$(this.config.keyboardMap, e);
  for (let r = 0; r < t.length; r++)
    await Mt(this.config), await W$(this, t[r]);
}
async function W$(e, { keyDef: t, releasePrevious: r, releaseSelf: n, repeat: o }) {
  const { system: a } = e;
  if (a.keyboard.isKeyPressed(t) && await a.keyboard.keyup(e, t), !r) {
    for (let i = 1; i <= o; i++)
      await a.keyboard.keydown(e, t), i < o && await Mt(e.config);
    n && await a.keyboard.keyup(e, t);
  }
}
async function V$(e) {
  for (const t of e.system.keyboard.getPressedKeys())
    await e.system.keyboard.keyup(e, t);
}
function Hv(e) {
  const t = pe(e) ? {
    "text/plain": G$(e)
  } : {
    "text/plain": String(e.ownerDocument.getSelection())
  }, r = bs(fe(e));
  for (const n in t)
    t[n] && r.setData(n, t[n]);
  return r;
}
function G$(e) {
  const t = sr(e);
  return ve(e).substring(t.startOffset, t.endOffset);
}
async function z$() {
  const e = this.config.document;
  var t;
  const r = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), n = Hv(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "copy", {
      clipboardData: n
    }) && this.config.writeToClipboard && await Ev(e, n), n;
}
async function Y$() {
  const e = this.config.document;
  var t;
  const r = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), n = Hv(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "cut", {
      clipboardData: n
    }) && this.config.writeToClipboard && await Ev(r.ownerDocument, n), n;
}
async function K$(e) {
  const t = this.config.document;
  var r;
  const n = (r = t.activeElement) !== null && r !== void 0 ? r : (
    /* istanbul ignore next */
    t.body
  );
  var o;
  const a = (o = typeof e == "string" ? X$(t, e) : e) !== null && o !== void 0 ? o : await h1(t).catch(() => {
    throw new Error("`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.");
  });
  this.dispatchUIEvent(n, "paste", {
    clipboardData: a
  });
}
function X$(e, t) {
  const r = bs(fe(e));
  return r.setData("text", t), r;
}
function Fc(e, t) {
  const r = [];
  do {
    const { descriptor: n, consumedLength: o, releasePrevious: a, releaseSelf: i = !0 } = wv(t, "pointer"), s = e.find((l) => l.name === n);
    s && r.push({
      keyDef: s,
      releasePrevious: a,
      releaseSelf: i
    }), t = t.slice(o);
  } while (t);
  return r;
}
async function Q$(e) {
  const { pointerMap: t } = this.config, r = [];
  (Array.isArray(e) ? e : [
    e
  ]).forEach((n) => {
    typeof n == "string" ? r.push(...Fc(t, n)) : "keys" in n ? r.push(...Fc(t, n.keys).map((o) => ({
      ...n,
      ...o
    }))) : r.push(n);
  });
  for (let n = 0; n < r.length; n++)
    await Mt(this.config), await J$(this, r[n]);
  this.system.pointer.resetClickCount();
}
async function J$(e, t) {
  var r, n;
  const o = "pointerName" in t && t.pointerName ? t.pointerName : "keyDef" in t ? e.system.pointer.getPointerName(t.keyDef) : "mouse", a = e.system.pointer.getPreviousPosition(o);
  var i, s, l, u;
  const c = {
    target: (i = t.target) !== null && i !== void 0 ? i : Z$(e, a),
    coords: (s = t.coords) !== null && s !== void 0 ? s : a == null ? void 0 : a.coords,
    caret: {
      node: (l = t.node) !== null && l !== void 0 ? l : jc(t) || a == null || (r = a.caret) === null || r === void 0 ? void 0 : r.node,
      offset: (u = t.offset) !== null && u !== void 0 ? u : jc(t) || a == null || (n = a.caret) === null || n === void 0 ? void 0 : n.offset
    }
  };
  "keyDef" in t ? (e.system.pointer.isKeyPressed(t.keyDef) && (Wt(e, X.Trigger), await e.system.pointer.release(e, t.keyDef, c)), t.releasePrevious || (Wt(e, X.Trigger), await e.system.pointer.press(e, t.keyDef, c), t.releaseSelf && (Wt(e, X.Trigger), await e.system.pointer.release(e, t.keyDef, c)))) : (Wt(e, X.Trigger), await e.system.pointer.move(e, o, c));
}
function jc(e) {
  var t, r;
  return !!((r = (t = e.target) !== null && t !== void 0 ? t : e.node) !== null && r !== void 0 ? r : e.offset !== void 0);
}
function Z$(e, t) {
  if (!t)
    throw new Error("This pointer has no previous position. Provide a target property!");
  var r;
  return (r = t.target) !== null && r !== void 0 ? r : e.config.document.body;
}
async function eq(e) {
  if (!xt(e) || _e(e))
    throw new Error("clear()` is only supported on editable elements.");
  if (Ve(e), e.ownerDocument.activeElement !== e)
    throw new Error("The element to be cleared could not be focused.");
  if (qv(e), !Z1(e))
    throw new Error("The element content to be cleared could not be selected.");
  It(this, e, "", "deleteContentBackward");
}
async function tq(e, t) {
  return Wv.call(this, !0, e, t);
}
async function rq(e, t) {
  return Wv.call(this, !1, e, t);
}
async function Wv(e, t, r) {
  if (!e && !t.multiple)
    throw q().getElementError("Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.", t);
  const n = Array.isArray(r) ? r : [
    r
  ], o = Array.from(t.querySelectorAll('option, [role="option"]')), a = n.map((s) => {
    if (typeof s != "string" && o.includes(s))
      return s;
    {
      const l = o.find((u) => u.value === s || u.innerHTML === s);
      if (l)
        return l;
      throw q().getElementError(`Value "${String(s)}" not found in options`, t);
    }
  }).filter((s) => !_e(s));
  if (_e(t) || !a.length)
    return;
  const i = (s) => {
    s.selected = e, this.dispatchUIEvent(t, "input", {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }), this.dispatchUIEvent(t, "change");
  };
  if (O(t, "select"))
    if (t.multiple)
      for (const s of a) {
        const l = this.config.pointerEventsCheck === 0 ? !0 : dn(this, s);
        l && (this.dispatchUIEvent(s, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(s, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(s, "pointermove"), this.dispatchUIEvent(s, "mousemove"), this.dispatchUIEvent(s, "pointerdown"), this.dispatchUIEvent(s, "mousedown")), Ve(t), l && (this.dispatchUIEvent(s, "pointerup"), this.dispatchUIEvent(s, "mouseup")), i(s), l && this.dispatchUIEvent(s, "click"), await Mt(this.config);
      }
    else if (a.length === 1) {
      const s = this.config.pointerEventsCheck === 0 ? !0 : dn(this, t);
      s ? await this.click(t) : Ve(t), i(a[0]), s && (this.dispatchUIEvent(t, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(t, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(t, "pointerup"), this.dispatchUIEvent(t, "mouseup"), this.dispatchUIEvent(t, "click")), await Mt(this.config);
    } else
      throw q().getElementError("Cannot select multiple options on a non-multiple select", t);
  else if (t.getAttribute("role") === "listbox")
    for (const s of a)
      await this.click(s), await this.unhover(s);
  else
    throw q().getElementError("Cannot select options on elements that are neither select nor listbox elements", t);
}
async function nq(e, t, { skipClick: r = this.config.skipClick, skipAutoClose: n = this.config.skipAutoClose, initialSelectionStart: o, initialSelectionEnd: a } = {}) {
  e.disabled || (r || await this.click(e), o !== void 0 && Vt(e, o, a ?? o), await this.keyboard(t), n || await V$(this));
}
const Uc = Symbol("files and value properties are mocked");
function Wi(e, t, r) {
  r ? Object.defineProperty(e, t, r) : delete e[t];
}
function oq(e, t) {
  var r;
  (r = e[Uc]) === null || r === void 0 || r.restore();
  const n = Object.getOwnPropertyDescriptor(e, "type"), o = Object.getOwnPropertyDescriptor(e, "value"), a = Object.getOwnPropertyDescriptor(e, "files");
  function i() {
    Wi(e, "type", n), Wi(e, "value", o), Wi(e, "files", a);
  }
  e[Uc] = {
    restore: i
  }, Object.defineProperties(e, {
    files: {
      configurable: !0,
      get: () => t
    },
    value: {
      configurable: !0,
      get: () => t.length ? `C:\\fakepath\\${t[0].name}` : "",
      set(s) {
        if (s === "")
          i();
        else {
          var l;
          o == null || (l = o.set) === null || l === void 0 || l.call(e, s);
        }
      }
    },
    type: {
      configurable: !0,
      get: () => "file",
      set(s) {
        s !== "file" && (i(), e.type = s);
      }
    }
  });
}
async function aq(e, t) {
  const r = O(e, "label") ? e.control : e;
  if (!r || !O(r, "input", {
    type: "file"
  }))
    throw new TypeError(`The ${r === e ? "given" : "associated"} ${r == null ? void 0 : r.tagName} element does not accept file uploads`);
  if (_e(e))
    return;
  const n = (Array.isArray(t) ? t : [
    t
  ]).filter((a) => !this.config.applyAccept || iq(a, r.accept)).slice(0, r.multiple ? void 0 : 1), o = () => {
    var a;
    n.length === ((a = r.files) === null || a === void 0 ? void 0 : a.length) && n.every((i, s) => {
      var l;
      return i === ((l = r.files) === null || l === void 0 ? void 0 : l.item(s));
    }) || (oq(r, ys(fe(e), n)), this.dispatchUIEvent(r, "input"), this.dispatchUIEvent(r, "change"));
  };
  r.addEventListener("fileDialog", o), await this.click(e), r.removeEventListener("fileDialog", o);
}
function iq(e, t) {
  if (!t)
    return !0;
  const r = [
    "audio/*",
    "image/*",
    "video/*"
  ];
  return t.split(",").some((n) => n.startsWith(".") ? e.name.endsWith(n) : r.includes(n) ? e.type.startsWith(n.substr(0, n.length - 1)) : e.type === n);
}
const Hc = {
  click: B$,
  dblClick: k$,
  tripleClick: D$,
  hover: L$,
  unhover: F$,
  tab: j$,
  keyboard: H$,
  copy: z$,
  cut: Y$,
  paste: K$,
  pointer: Q$,
  clear: eq,
  deselectOptions: rq,
  selectOptions: tq,
  type: nq,
  upload: aq
};
function lq(e) {
  return q().asyncWrapper(e);
}
const Vv = {
  applyAccept: !0,
  autoModify: !0,
  delay: 0,
  document: globalThis.document,
  keyboardMap: w$,
  pointerMap: C$,
  pointerEventsCheck: _t.EachApiCall,
  skipAutoClose: !1,
  skipClick: !1,
  skipHover: !1,
  writeToClipboard: !1,
  advanceTimers: () => Promise.resolve()
}, sq = {
  ...Vv,
  writeToClipboard: !0
};
function Gv(e = {}, t = sq, r) {
  const n = fq(e, r, t);
  return {
    ...t,
    ...e,
    document: n
  };
}
function uq(e = {}) {
  const t = Gv(e);
  kv(t.document);
  var r;
  const n = (r = t.document.defaultView) !== null && r !== void 0 ? r : (
    /* istanbul ignore next */
    globalThis.window
  );
  return m1(n), Rs(t).api;
}
function K({ keyboardState: e, pointerState: t, ...r } = {}, n) {
  const o = Gv(r, Vv, n);
  kv(o.document);
  var a;
  const i = (a = t ?? e) !== null && a !== void 0 ? a : new Uv();
  return {
    api: Rs(o, i).api,
    system: i
  };
}
function cq(e) {
  return Rs({
    ...this.config,
    ...e
  }, this.system).api;
}
function dq(e, t) {
  function r(...n) {
    return Wt(e, X.Call), lq(() => t.apply(e, n).then(async (o) => (await Mt(e.config), o)));
  }
  return Object.defineProperty(r, "name", {
    get: () => t.name
  }), r;
}
function Rs(e, t = new Uv()) {
  const r = {};
  return Object.assign(r, {
    config: e,
    dispatchEvent: Bv.bind(r),
    dispatchUIEvent: f$.bind(r),
    system: t,
    levelRefs: {},
    ...Hc
  }), {
    instance: r,
    api: {
      ...Object.fromEntries(Object.entries(Hc).map(([n, o]) => [
        n,
        dq(r, o)
      ])),
      setup: cq.bind(r)
    }
  };
}
function fq(e, t, r) {
  var n, o;
  return (o = (n = e.document) !== null && n !== void 0 ? n : t && h$(t)) !== null && o !== void 0 ? o : r.document;
}
function pq(e) {
  return K().api.clear(e);
}
function vq(e, t = {}) {
  return K(t, e).api.click(e);
}
function mq(e = {}) {
  return K(e).api.copy();
}
function yq(e = {}) {
  return K(e).api.cut();
}
function bq(e, t = {}) {
  return K(t).api.dblClick(e);
}
function hq(e, t, r = {}) {
  return K(r).api.deselectOptions(e, t);
}
function gq(e, t = {}) {
  return K(t).api.hover(e);
}
async function Eq(e, t = {}) {
  const { api: r, system: n } = K(t);
  return r.keyboard(e).then(() => n);
}
async function _q(e, t = {}) {
  const { api: r, system: n } = K(t);
  return r.pointer(e).then(() => n);
}
function Rq(e, t) {
  return K(t).api.paste(e);
}
function wq(e, t, r = {}) {
  return K(r).api.selectOptions(e, t);
}
function Cq(e, t = {}) {
  return K(t).api.tripleClick(e);
}
function Pq(e, t, r = {}) {
  return K(r, e).api.type(e, t, r);
}
function Sq(e, t = {}) {
  const { api: r, system: n } = K(t);
  return n.pointer.setMousePosition({
    target: e
  }), r.unhover(e);
}
function Tq(e, t, r = {}) {
  return K(r).api.upload(e, t);
}
function Aq(e = {}) {
  return K().api.tab(e);
}
const Oq = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: pq,
  click: vq,
  copy: mq,
  cut: yq,
  dblClick: bq,
  deselectOptions: hq,
  hover: gq,
  keyboard: Eq,
  paste: Rq,
  pointer: _q,
  selectOptions: wq,
  tab: Aq,
  tripleClick: Cq,
  type: Pq,
  unhover: Sq,
  upload: Tq
}, Symbol.toStringTag, { value: "Module" })), Wc = {
  ...Oq,
  setup: uq
};
var V = (() => {
  let e;
  return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ? e = self : e = {}, e;
})(), { LOGLEVEL: xq } = V, Me = { trace: 1, debug: 2, info: 3, warn: 4, error: 5, silent: 10 }, $q = xq, yt = Me[$q] || Me.info, zv = { trace: (e, ...t) => {
  yt <= Me.trace && console.trace(e, ...t);
}, debug: (e, ...t) => {
  yt <= Me.debug && console.debug(e, ...t);
}, info: (e, ...t) => {
  yt <= Me.info && console.info(e, ...t);
}, warn: (e, ...t) => {
  yt <= Me.warn && console.warn(e, ...t);
}, error: (e, ...t) => {
  yt <= Me.error && console.error(e, ...t);
}, log: (e, ...t) => {
  yt < Me.silent && console.log(e, ...t);
} }, Bl = /* @__PURE__ */ new Set(), Q = (e) => (t, ...r) => {
  if (!Bl.has(t))
    return Bl.add(t), zv[e](t, ...r);
};
Q.clear = () => Bl.clear();
Q.trace = Q("trace");
Q.debug = Q("debug");
Q.info = Q("info");
Q.warn = Q("warn");
Q.error = Q("error");
Q.log = Q("log");
var qq = (e) => e.transports !== void 0, Iq = () => Math.random().toString(16).slice(2), Mq = class {
  constructor(e = {}) {
    this.sender = Iq(), this.events = {}, this.data = {}, this.transports = [], this.isAsync = e.async || !1, qq(e) ? (this.transports = e.transports || [], this.transports.forEach((t) => {
      t.setHandler((r) => this.handleEvent(r));
    })) : this.transports = e.transport ? [e.transport] : [], this.transports.forEach((t) => {
      t.setHandler((r) => this.handleEvent(r));
    });
  }
  get hasTransport() {
    return this.transports.length > 0;
  }
  addListener(e, t) {
    this.events[e] = this.events[e] || [], this.events[e].push(t);
  }
  emit(e, ...t) {
    let r = { type: e, args: t, from: this.sender }, n = {};
    t.length >= 1 && t[0] && t[0].options && (n = t[0].options);
    let o = () => {
      this.transports.forEach((a) => {
        a.send(r, n);
      }), this.handleEvent(r);
    };
    this.isAsync ? setImmediate(o) : o();
  }
  last(e) {
    return this.data[e];
  }
  eventNames() {
    return Object.keys(this.events);
  }
  listenerCount(e) {
    let t = this.listeners(e);
    return t ? t.length : 0;
  }
  listeners(e) {
    return this.events[e] || void 0;
  }
  once(e, t) {
    let r = this.onceListener(e, t);
    this.addListener(e, r);
  }
  removeAllListeners(e) {
    e ? this.events[e] && delete this.events[e] : this.events = {};
  }
  removeListener(e, t) {
    let r = this.listeners(e);
    r && (this.events[e] = r.filter((n) => n !== t));
  }
  on(e, t) {
    this.addListener(e, t);
  }
  off(e, t) {
    this.removeListener(e, t);
  }
  handleEvent(e) {
    let t = this.listeners(e.type);
    t && t.length && t.forEach((r) => {
      r.apply(e, e.args);
    }), this.data[e.type] = e.args;
  }
  onceListener(e, t) {
    let r = (...n) => (this.removeListener(e, r), t(...n));
    return r;
  }
}, Yv = ((e) => (e.CHANNEL_CREATED = "channelCreated", e.CONFIG_ERROR = "configError", e.STORY_INDEX_INVALIDATED = "storyIndexInvalidated", e.STORY_SPECIFIED = "storySpecified", e.SET_CONFIG = "setConfig", e.SET_STORIES = "setStories", e.SET_INDEX = "setIndex", e.SET_CURRENT_STORY = "setCurrentStory", e.CURRENT_STORY_WAS_SET = "currentStoryWasSet", e.FORCE_RE_RENDER = "forceReRender", e.FORCE_REMOUNT = "forceRemount", e.PRELOAD_ENTRIES = "preloadStories", e.STORY_PREPARED = "storyPrepared", e.DOCS_PREPARED = "docsPrepared", e.STORY_CHANGED = "storyChanged", e.STORY_UNCHANGED = "storyUnchanged", e.STORY_RENDERED = "storyRendered", e.STORY_MISSING = "storyMissing", e.STORY_ERRORED = "storyErrored", e.STORY_THREW_EXCEPTION = "storyThrewException", e.STORY_RENDER_PHASE_CHANGED = "storyRenderPhaseChanged", e.PLAY_FUNCTION_THREW_EXCEPTION = "playFunctionThrewException", e.UPDATE_STORY_ARGS = "updateStoryArgs", e.STORY_ARGS_UPDATED = "storyArgsUpdated", e.RESET_STORY_ARGS = "resetStoryArgs", e.SET_GLOBALS = "setGlobals", e.UPDATE_GLOBALS = "updateGlobals", e.GLOBALS_UPDATED = "globalsUpdated", e.REGISTER_SUBSCRIPTION = "registerSubscription", e.PREVIEW_KEYDOWN = "previewKeydown", e.PREVIEW_BUILDER_PROGRESS = "preview_builder_progress", e.SELECT_STORY = "selectStory", e.STORIES_COLLAPSE_ALL = "storiesCollapseAll", e.STORIES_EXPAND_ALL = "storiesExpandAll", e.DOCS_RENDERED = "docsRendered", e.SHARED_STATE_CHANGED = "sharedStateChanged", e.SHARED_STATE_SET = "sharedStateSet", e.NAVIGATE_URL = "navigateUrl", e.UPDATE_QUERY_PARAMS = "updateQueryParams", e.REQUEST_WHATS_NEW_DATA = "requestWhatsNewData", e.RESULT_WHATS_NEW_DATA = "resultWhatsNewData", e.SET_WHATS_NEW_CACHE = "setWhatsNewCache", e.TOGGLE_WHATS_NEW_NOTIFICATIONS = "toggleWhatsNewNotifications", e.TELEMETRY_ERROR = "telemetryError", e))(Yv || {}), { CHANNEL_CREATED: vI, CONFIG_ERROR: mI, CURRENT_STORY_WAS_SET: yI, DOCS_PREPARED: bI, DOCS_RENDERED: hI, FORCE_RE_RENDER: gI, FORCE_REMOUNT: Vc, GLOBALS_UPDATED: EI, NAVIGATE_URL: _I, PLAY_FUNCTION_THREW_EXCEPTION: RI, PRELOAD_ENTRIES: wI, PREVIEW_BUILDER_PROGRESS: CI, PREVIEW_KEYDOWN: PI, REGISTER_SUBSCRIPTION: SI, RESET_STORY_ARGS: TI, SELECT_STORY: AI, SET_CONFIG: OI, SET_CURRENT_STORY: Nq, SET_GLOBALS: xI, SET_INDEX: $I, SET_STORIES: qI, SHARED_STATE_CHANGED: II, SHARED_STATE_SET: MI, STORIES_COLLAPSE_ALL: NI, STORIES_EXPAND_ALL: BI, STORY_ARGS_UPDATED: kI, STORY_CHANGED: DI, STORY_ERRORED: LI, STORY_INDEX_INVALIDATED: FI, STORY_MISSING: jI, STORY_PREPARED: UI, STORY_RENDER_PHASE_CHANGED: Bq, STORY_RENDERED: HI, STORY_SPECIFIED: WI, STORY_THREW_EXCEPTION: VI, STORY_UNCHANGED: GI, UPDATE_GLOBALS: zI, UPDATE_QUERY_PARAMS: YI, UPDATE_STORY_ARGS: KI, REQUEST_WHATS_NEW_DATA: XI, RESULT_WHATS_NEW_DATA: QI, SET_WHATS_NEW_CACHE: JI, TOGGLE_WHATS_NEW_NOTIFICATIONS: ZI, TELEMETRY_ERROR: eM } = Yv, kq = new Error("ignoredException");
function Dq() {
  let e = { setHandler: () => {
  }, send: () => {
  } };
  return new Mq({ transport: e });
}
var Lq = class {
  constructor() {
    this.getChannel = () => {
      if (!this.channel) {
        let e = Dq();
        return this.setChannel(e), e;
      }
      return this.channel;
    }, this.getServerChannel = () => {
      if (!this.serverChannel)
        throw new Error("Accessing non-existent serverChannel");
      return this.serverChannel;
    }, this.ready = () => this.promise, this.hasChannel = () => !!this.channel, this.hasServerChannel = () => !!this.serverChannel, this.setChannel = (e) => {
      this.channel = e, this.resolve();
    }, this.setServerChannel = (e) => {
      this.serverChannel = e;
    }, this.promise = new Promise((e) => {
      this.resolve = () => e(this.getChannel());
    });
  }
}, Vi = "__STORYBOOK_ADDONS_PREVIEW";
function Fq() {
  return V[Vi] || (V[Vi] = new Lq()), V[Vi];
}
var jq = Fq(), Uq = ((e) => (e.DONE = "done", e.ERROR = "error", e.ACTIVE = "active", e.WAITING = "waiting", e))(Uq || {}), ye = { CALL: "storybook/instrumenter/call", SYNC: "storybook/instrumenter/sync", START: "storybook/instrumenter/start", BACK: "storybook/instrumenter/back", GOTO: "storybook/instrumenter/goto", NEXT: "storybook/instrumenter/next", END: "storybook/instrumenter/end" }, Gc = { start: !1, back: !1, goto: !1, next: !1, end: !1 }, zc = new Error("This function ran after the play function completed. Did you forget to `await` it?"), Yc = (e) => Object.prototype.toString.call(e) === "[object Object]", Hq = (e) => Object.prototype.toString.call(e) === "[object Module]", Wq = (e) => {
  if (!Yc(e) && !Hq(e))
    return !1;
  if (e.constructor === void 0)
    return !0;
  let t = e.constructor.prototype;
  return !(!Yc(t) || Object.prototype.hasOwnProperty.call(t, "isPrototypeOf") === !1);
}, Vq = (e) => {
  try {
    return new e.constructor();
  } catch {
    return {};
  }
}, Gi = () => ({ renderPhase: void 0, isDebugging: !1, isPlaying: !1, isLocked: !1, cursor: 0, calls: [], shadowCalls: [], callRefsByResult: /* @__PURE__ */ new Map(), chainedCallIds: /* @__PURE__ */ new Set(), ancestors: [], playUntil: void 0, resolvers: {}, syncTimeout: void 0 }), Kc = (e, t = !1) => {
  let r = (t ? e.shadowCalls : e.calls).filter((o) => o.retain);
  if (!r.length)
    return;
  let n = new Map(Array.from(e.callRefsByResult.entries()).filter(([, o]) => o.retain));
  return { cursor: r.length, calls: r, callRefsByResult: n };
}, Gq = class {
  constructor() {
    this.initialized = !1, this.channel = jq.getChannel(), this.state = V.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {};
    let e = ({ storyId: i, isPlaying: s = !0, isDebugging: l = !1 }) => {
      let u = this.getState(i);
      this.setState(i, { ...Gi(), ...Kc(u, l), shadowCalls: l ? u.shadowCalls : [], chainedCallIds: l ? u.chainedCallIds : /* @__PURE__ */ new Set(), playUntil: l ? u.playUntil : void 0, isPlaying: s, isDebugging: l }), this.sync(i);
    };
    this.channel.on(Vc, e), this.channel.on(Bq, ({ storyId: i, newPhase: s }) => {
      let { isDebugging: l } = this.getState(i);
      this.setState(i, { renderPhase: s }), s === "preparing" && l && e({ storyId: i }), s === "playing" && e({ storyId: i, isDebugging: l }), s === "played" && this.setState(i, { isLocked: !1, isPlaying: !1, isDebugging: !1 }), s === "errored" && this.setState(i, { isLocked: !1, isPlaying: !1 });
    }), this.channel.on(Nq, () => {
      this.initialized ? this.cleanup() : this.initialized = !0;
    });
    let t = ({ storyId: i, playUntil: s }) => {
      this.getState(i).isDebugging || this.setState(i, ({ calls: u }) => ({ calls: [], shadowCalls: u.map((c) => ({ ...c, status: "waiting" })), isDebugging: !0 }));
      let l = this.getLog(i);
      this.setState(i, ({ shadowCalls: u }) => {
        var d;
        if (s || !l.length)
          return { playUntil: s };
        let c = u.findIndex((f) => f.id === l[0].callId);
        return { playUntil: (d = u.slice(0, c).filter((f) => f.interceptable && !f.ancestors.length).slice(-1)[0]) == null ? void 0 : d.id };
      }), this.channel.emit(Vc, { storyId: i, isDebugging: !0 });
    }, r = ({ storyId: i }) => {
      var u;
      let s = this.getLog(i).filter((c) => !c.ancestors.length), l = s.reduceRight((c, d, f) => c >= 0 || d.status === "waiting" ? c : f, -1);
      t({ storyId: i, playUntil: (u = s[l - 1]) == null ? void 0 : u.callId });
    }, n = ({ storyId: i, callId: s }) => {
      var m;
      let { calls: l, shadowCalls: u, resolvers: c } = this.getState(i), d = l.find(({ id: y }) => y === s), f = u.find(({ id: y }) => y === s);
      if (!d && f && Object.values(c).length > 0) {
        let y = (m = this.getLog(i).find((h) => h.status === "waiting")) == null ? void 0 : m.callId;
        f.id !== y && this.setState(i, { playUntil: f.id }), Object.values(c).forEach((h) => h());
      } else
        t({ storyId: i, playUntil: s });
    }, o = ({ storyId: i }) => {
      var l;
      let { resolvers: s } = this.getState(i);
      if (Object.values(s).length > 0)
        Object.values(s).forEach((u) => u());
      else {
        let u = (l = this.getLog(i).find((c) => c.status === "waiting")) == null ? void 0 : l.callId;
        u ? t({ storyId: i, playUntil: u }) : a({ storyId: i });
      }
    }, a = ({ storyId: i }) => {
      this.setState(i, { playUntil: void 0, isDebugging: !1 }), Object.values(this.getState(i).resolvers).forEach((s) => s());
    };
    this.channel.on(ye.START, t), this.channel.on(ye.BACK, r), this.channel.on(ye.GOTO, n), this.channel.on(ye.NEXT, o), this.channel.on(ye.END, a);
  }
  getState(e) {
    return this.state[e] || Gi();
  }
  setState(e, t) {
    let r = this.getState(e), n = typeof t == "function" ? t(r) : t;
    this.state = { ...this.state, [e]: { ...r, ...n } }, V.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
  }
  cleanup() {
    this.state = Object.entries(this.state).reduce((t, [r, n]) => {
      let o = Kc(n);
      return o && (t[r] = Object.assign(Gi(), o)), t;
    }, {});
    let e = { controlStates: Gc, logItems: [] };
    this.channel.emit(ye.SYNC, e), V.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
  }
  getLog(e) {
    let { calls: t, shadowCalls: r } = this.getState(e), n = [...r];
    t.forEach((a, i) => {
      n[i] = a;
    });
    let o = /* @__PURE__ */ new Set();
    return n.reduceRight((a, i) => (i.args.forEach((s) => {
      s != null && s.__callId__ && o.add(s.__callId__);
    }), i.path.forEach((s) => {
      s.__callId__ && o.add(s.__callId__);
    }), (i.interceptable || i.exception) && !o.has(i.id) && (a.unshift({ callId: i.id, status: i.status, ancestors: i.ancestors }), o.add(i.id)), a), []);
  }
  instrument(e, t) {
    if (!Wq(e))
      return e;
    let { mutate: r = !1, path: n = [] } = t;
    return Object.keys(e).reduce((o, a) => {
      let i = e[a];
      return typeof i != "function" ? (o[a] = this.instrument(i, { ...t, path: n.concat(a) }), o) : typeof i.__originalFn__ == "function" ? (o[a] = i, o) : (o[a] = (...s) => this.track(a, i, s, t), o[a].__originalFn__ = i, Object.defineProperty(o[a], "name", { value: a, writable: !1 }), Object.keys(i).length > 0 && Object.assign(o[a], this.instrument({ ...i }, { ...t, path: n.concat(a) })), o);
    }, r ? e : Vq(e));
  }
  track(e, t, r, n) {
    var y, h, P, p;
    let o = ((y = r == null ? void 0 : r[0]) == null ? void 0 : y.__storyId__) || ((p = (P = (h = V.__STORYBOOK_PREVIEW__) == null ? void 0 : h.selectionStore) == null ? void 0 : P.selection) == null ? void 0 : p.storyId), { cursor: a, ancestors: i } = this.getState(o);
    this.setState(o, { cursor: a + 1 });
    let s = `${i.slice(-1)[0] || o} [${a}] ${e}`, { path: l = [], intercept: u = !1, retain: c = !1 } = n, d = typeof u == "function" ? u(e, l) : u, f = { id: s, cursor: a, storyId: o, ancestors: i, path: l, method: e, args: r, interceptable: d, retain: c }, m = (d && !i.length ? this.intercept : this.invoke).call(this, t, f, n);
    return this.instrument(m, { ...n, mutate: !0, path: [{ __callId__: f.id }] });
  }
  intercept(e, t, r) {
    let { chainedCallIds: n, isDebugging: o, playUntil: a } = this.getState(t.storyId), i = n.has(t.id);
    return !o || i || a ? (a === t.id && this.setState(t.storyId, { playUntil: void 0 }), this.invoke(e, t, r)) : new Promise((s) => {
      this.setState(t.storyId, ({ resolvers: l }) => ({ isLocked: !1, resolvers: { ...l, [t.id]: s } }));
    }).then(() => (this.setState(t.storyId, (s) => {
      let { [t.id]: l, ...u } = s.resolvers;
      return { isLocked: !0, resolvers: u };
    }), this.invoke(e, t, r)));
  }
  invoke(e, t, r) {
    let { callRefsByResult: n, renderPhase: o } = this.getState(t.storyId), a = (l) => {
      var u, c;
      if (n.has(l))
        return n.get(l);
      if (l instanceof Array)
        return l.map(a);
      if (l instanceof Date)
        return { __date__: { value: l.toISOString() } };
      if (l instanceof Error) {
        let { name: d, message: f, stack: m } = l;
        return { __error__: { name: d, message: f, stack: m } };
      }
      if (l instanceof RegExp) {
        let { flags: d, source: f } = l;
        return { __regexp__: { flags: d, source: f } };
      }
      if (l instanceof V.window.HTMLElement) {
        let { prefix: d, localName: f, id: m, classList: y, innerText: h } = l, P = Array.from(y);
        return { __element__: { prefix: d, localName: f, id: m, classNames: P, innerText: h } };
      }
      return typeof l == "function" ? { __function__: { name: l.name } } : typeof l == "symbol" ? { __symbol__: { description: l.description } } : typeof l == "object" && ((u = l == null ? void 0 : l.constructor) != null && u.name) && ((c = l == null ? void 0 : l.constructor) == null ? void 0 : c.name) !== "Object" ? { __class__: { name: l.constructor.name } } : Object.prototype.toString.call(l) === "[object Object]" ? Object.fromEntries(Object.entries(l).map(([d, f]) => [d, a(f)])) : l;
    }, i = { ...t, args: t.args.map(a) };
    t.path.forEach((l) => {
      l != null && l.__callId__ && this.setState(t.storyId, ({ chainedCallIds: u }) => ({ chainedCallIds: new Set(Array.from(u).concat(l.__callId__)) }));
    });
    let s = (l) => {
      if (l instanceof Error) {
        let { name: u, message: c, stack: d, callId: f = t.id } = l, m = { name: u, message: c, stack: d, callId: f };
        if (this.update({ ...i, status: "error", exception: m }), this.setState(t.storyId, (y) => ({ callRefsByResult: new Map([...Array.from(y.callRefsByResult.entries()), [l, { __callId__: t.id, retain: t.retain }]]) })), t.ancestors.length)
          throw Object.prototype.hasOwnProperty.call(l, "callId") || Object.defineProperty(l, "callId", { value: t.id }), l;
        if (l !== zc)
          throw zv.warn(l), kq;
      }
      throw l;
    };
    try {
      if (o === "played" && !t.retain)
        throw zc;
      let l = (r.getArgs ? r.getArgs(t, this.getState(t.storyId)) : t.args).map((c) => typeof c != "function" || Object.keys(c).length ? c : (...d) => {
        let { cursor: f, ancestors: m } = this.getState(t.storyId);
        this.setState(t.storyId, { cursor: 0, ancestors: [...m, t.id] });
        let y = () => this.setState(t.storyId, { cursor: f, ancestors: m }), h = !1;
        try {
          let P = c(...d);
          return P instanceof Promise ? (h = !0, P.finally(y)) : P;
        } finally {
          h || y();
        }
      }), u = e(...l);
      return u && ["object", "function", "symbol"].includes(typeof u) && this.setState(t.storyId, (c) => ({ callRefsByResult: new Map([...Array.from(c.callRefsByResult.entries()), [u, { __callId__: t.id, retain: t.retain }]]) })), this.update({ ...i, status: u instanceof Promise ? "active" : "done" }), u instanceof Promise ? u.then((c) => (this.update({ ...i, status: "done" }), c), s) : u;
    } catch (l) {
      return s(l);
    }
  }
  update(e) {
    this.channel.emit(ye.CALL, e), this.setState(e.storyId, ({ calls: t }) => {
      let r = t.concat(e).reduce((n, o) => Object.assign(n, { [o.id]: o }), {});
      return { calls: Object.values(r).sort((n, o) => n.id.localeCompare(o.id, void 0, { numeric: !0 })) };
    }), this.sync(e.storyId);
  }
  sync(e) {
    let t = () => {
      var u;
      let { isLocked: r, isPlaying: n } = this.getState(e), o = this.getLog(e), a = (u = o.filter(({ ancestors: c }) => !c.length).find((c) => c.status === "waiting")) == null ? void 0 : u.callId, i = o.some((c) => c.status === "active");
      if (r || i || o.length === 0) {
        let c = { controlStates: Gc, logItems: o };
        this.channel.emit(ye.SYNC, c);
        return;
      }
      let s = o.some((c) => c.status === "done" || c.status === "error"), l = { controlStates: { start: s, back: s, goto: !0, next: n, end: n }, logItems: o, pausedAt: a };
      this.channel.emit(ye.SYNC, l);
    };
    this.setState(e, ({ syncTimeout: r }) => (clearTimeout(r), { syncTimeout: setTimeout(t, 0) }));
  }
};
function Kv(e, t = {}) {
  var r, n, o, a;
  try {
    let i = !1, s = !1;
    return (n = (r = V.window.location) == null ? void 0 : r.search) != null && n.includes("instrument=true") ? i = !0 : (a = (o = V.window.location) == null ? void 0 : o.search) != null && a.includes("instrument=false") && (s = !0), V.window.parent === V.window && !i || s ? e : (V.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ || (V.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new Gq()), V.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(e, t));
  } catch (i) {
    return Q.warn(i), e;
  }
}
var zq = Wc.default || Wc, Fr = Kv(
  { ...u1 },
  {
    intercept: (e, t) => t[0] === "fireEvent" || e.startsWith("findBy") || e.startsWith("waitFor")
  }
);
Fr.screen = Object.entries(Fr.screen).reduce(
  (e, [t, r]) => Object.defineProperty(e, t, {
    get() {
      return Q.warn(um`
          You are using Testing Library's \`screen\` object. Use \`within(canvasElement)\` instead.
          More info: https://storybook.js.org/docs/react/essentials/interactions
        `), r;
    }
  }),
  { ...Fr.screen }
);
var {
  buildQueries: tM,
  configure: rM,
  createEvent: nM,
  findAllByAltText: oM,
  findAllByDisplayValue: aM,
  findAllByLabelText: iM,
  findAllByPlaceholderText: lM,
  findAllByRole: sM,
  findAllByTestId: uM,
  findAllByText: cM,
  findAllByTitle: dM,
  findByAltText: fM,
  findByDisplayValue: pM,
  findByLabelText: vM,
  findByPlaceholderText: mM,
  findByRole: yM,
  findByTestId: bM,
  findByText: hM,
  findByTitle: gM,
  fireEvent: EM,
  getAllByAltText: _M,
  getAllByDisplayValue: RM,
  getAllByLabelText: wM,
  getAllByPlaceholderText: CM,
  getAllByRole: PM,
  getAllByTestId: SM,
  getAllByText: TM,
  getAllByTitle: AM,
  getByAltText: OM,
  getByDisplayValue: xM,
  getByLabelText: $M,
  getByPlaceholderText: qM,
  getByRole: IM,
  getByTestId: MM,
  getByText: NM,
  getByTitle: BM,
  getConfig: kM,
  getDefaultNormalizer: DM,
  getElementError: LM,
  getNodeText: FM,
  getQueriesForElement: jM,
  getRoles: UM,
  getSuggestedQuery: HM,
  isInaccessible: WM,
  logDOM: VM,
  logRoles: GM,
  prettyDOM: zM,
  queries: YM,
  queryAllByAltText: KM,
  queryAllByAttribute: XM,
  queryAllByDisplayValue: QM,
  queryAllByLabelText: JM,
  queryAllByPlaceholderText: ZM,
  queryAllByRole: eN,
  queryAllByTestId: tN,
  queryAllByText: rN,
  queryAllByTitle: nN,
  queryByAltText: oN,
  queryByAttribute: aN,
  queryByDisplayValue: iN,
  queryByLabelText: lN,
  queryByPlaceholderText: sN,
  queryByRole: uN,
  queryByTestId: cN,
  queryByText: dN,
  queryByTitle: fN,
  queryHelpers: pN,
  screen: vN,
  waitFor: mN,
  waitForElementToBeRemoved: yN,
  within: bN,
  prettyFormat: hN
} = Fr, gN = Kv(
  { userEvent: zq },
  { intercept: !0 }
).userEvent;
export {
  gN as u,
  bN as w
};
