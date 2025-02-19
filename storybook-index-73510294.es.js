import { a as tm, c as Ln, g as rm } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { d as nm } from "./storybook-index-398c73a4.es.js";
function om(e, t) {
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
var Pe = {}, gs = { exports: {} };
gs.exports;
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
})(gs);
var Fd = gs.exports, Se = {};
Object.defineProperty(Se, "__esModule", {
  value: !0
});
Se.printIteratorEntries = im;
Se.printIteratorValues = lm;
Se.printListItems = sm;
Se.printObjectProperties = um;
const am = (e, t) => {
  const r = Object.keys(e).sort(t);
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((n) => {
    Object.getOwnPropertyDescriptor(e, n).enumerable && r.push(n);
  }), r;
};
function im(e, t, r, n, o, a, i = ": ") {
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
function lm(e, t, r, n, o, a) {
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
function sm(e, t, r, n, o, a) {
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
function um(e, t, r, n, o, a) {
  let i = "";
  const s = am(e, t.compareKeys);
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
var je = {};
Object.defineProperty(je, "__esModule", {
  value: !0
});
je.test = je.serialize = je.default = void 0;
var au = Se, cn = function() {
  return typeof globalThis < "u" ? globalThis : typeof cn < "u" ? cn : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), Bi = cn["jest-symbol-do-not-touch"] || cn.Symbol;
const cm = typeof Bi == "function" && Bi.for ? Bi.for("jest.asymmetricMatcher") : 1267621, Br = " ", Ld = (e, t, r, n, o, a) => {
  const i = e.toString();
  return i === "ArrayContaining" || i === "ArrayNotContaining" ? ++n > t.maxDepth ? "[" + i + "]" : i + Br + "[" + (0, au.printListItems)(
    e.sample,
    t,
    r,
    n,
    o,
    a
  ) + "]" : i === "ObjectContaining" || i === "ObjectNotContaining" ? ++n > t.maxDepth ? "[" + i + "]" : i + Br + "{" + (0, au.printObjectProperties)(
    e.sample,
    t,
    r,
    n,
    o,
    a
  ) + "}" : i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining" ? i + Br + a(e.sample, t, r, n, o) : e.toAsymmetricMatcher();
};
je.serialize = Ld;
const jd = (e) => e && e.$$typeof === cm;
je.test = jd;
const dm = {
  serialize: Ld,
  test: jd
};
var fm = dm;
je.default = fm;
var Ue = {}, pm = ({ onlyFirst: e = !1 } = {}) => {
  const t = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(t, e ? void 0 : "g");
};
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.test = Ue.serialize = Ue.default = void 0;
var Ud = Hd(pm), F = Hd(Fd);
function Hd(e) {
  return e && e.__esModule ? e : { default: e };
}
const ym = (e) => e.replace((0, Ud.default)(), (t) => {
  switch (t) {
    case F.default.red.close:
    case F.default.green.close:
    case F.default.cyan.close:
    case F.default.gray.close:
    case F.default.white.close:
    case F.default.yellow.close:
    case F.default.bgRed.close:
    case F.default.bgGreen.close:
    case F.default.bgYellow.close:
    case F.default.inverse.close:
    case F.default.dim.close:
    case F.default.bold.close:
    case F.default.reset.open:
    case F.default.reset.close:
      return "</>";
    case F.default.red.open:
      return "<red>";
    case F.default.green.open:
      return "<green>";
    case F.default.cyan.open:
      return "<cyan>";
    case F.default.gray.open:
      return "<gray>";
    case F.default.white.open:
      return "<white>";
    case F.default.yellow.open:
      return "<yellow>";
    case F.default.bgRed.open:
      return "<bgRed>";
    case F.default.bgGreen.open:
      return "<bgGreen>";
    case F.default.bgYellow.open:
      return "<bgYellow>";
    case F.default.inverse.open:
      return "<inverse>";
    case F.default.dim.open:
      return "<dim>";
    case F.default.bold.open:
      return "<bold>";
    default:
      return "";
  }
}), Wd = (e) => typeof e == "string" && !!e.match((0, Ud.default)());
Ue.test = Wd;
const Vd = (e, t, r, n, o, a) => a(ym(e), t, r, n, o);
Ue.serialize = Vd;
const vm = {
  serialize: Vd,
  test: Wd
};
var mm = vm;
Ue.default = mm;
var He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.test = He.serialize = He.default = void 0;
var iu = Se;
const bm = " ", Gd = ["DOMStringMap", "NamedNodeMap"], hm = /^(HTML\w*Collection|NodeList)$/, gm = (e) => Gd.indexOf(e) !== -1 || hm.test(e), zd = (e) => e && e.constructor && !!e.constructor.name && gm(e.constructor.name);
He.test = zd;
const Em = (e) => e.constructor.name === "NamedNodeMap", Yd = (e, t, r, n, o, a) => {
  const i = e.constructor.name;
  return ++n > t.maxDepth ? "[" + i + "]" : (t.min ? "" : i + bm) + (Gd.indexOf(i) !== -1 ? "{" + (0, iu.printObjectProperties)(
    Em(e) ? Array.from(e).reduce((s, l) => (s[l.name] = l.value, s), {}) : { ...e },
    t,
    r,
    n,
    o,
    a
  ) + "}" : "[" + (0, iu.printListItems)(
    Array.from(e),
    t,
    r,
    n,
    o,
    a
  ) + "]");
};
He.serialize = Yd;
const _m = {
  serialize: Yd,
  test: zd
};
var Rm = _m;
He.default = Rm;
var We = {}, X = {}, Es = {};
Object.defineProperty(Es, "__esModule", {
  value: !0
});
Es.default = Pm;
function Pm(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(X, "__esModule", {
  value: !0
});
X.printText = X.printProps = X.printElementAsLeaf = X.printElement = X.printComment = X.printChildren = void 0;
var Kd = wm(Es);
function wm(e) {
  return e && e.__esModule ? e : { default: e };
}
const Sm = (e, t, r, n, o, a, i) => {
  const s = n + r.indent, l = r.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, r, s, o, a);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = r.spacingOuter + s + d + r.spacingOuter + n), d = "{" + d + "}"), r.spacingInner + n + l.prop.open + u + l.prop.close + "=" + l.value.open + d + l.value.close;
  }).join("");
};
X.printProps = Sm;
const Am = (e, t, r, n, o, a) => e.map(
  (i) => t.spacingOuter + r + (typeof i == "string" ? Xd(i, t) : a(i, t, r, n, o))
).join("");
X.printChildren = Am;
const Xd = (e, t) => {
  const r = t.colors.content;
  return r.open + (0, Kd.default)(e) + r.close;
};
X.printText = Xd;
const Cm = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + (0, Kd.default)(e) + "-->" + r.close;
};
X.printComment = Cm;
const Tm = (e, t, r, n, o) => {
  const a = n.colors.tag;
  return a.open + "<" + e + (t && a.close + t + n.spacingOuter + o + a.open) + (r ? ">" + a.close + r + n.spacingOuter + o + a.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + a.close;
};
X.printElement = Tm;
const Om = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
};
X.printElementAsLeaf = Om;
Object.defineProperty(We, "__esModule", {
  value: !0
});
We.test = We.serialize = We.default = void 0;
var gt = X;
const $m = 1, Jd = 3, Qd = 8, Zd = 11, xm = /^((HTML|SVG)\w*)?Element$/, Im = (e) => {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}, qm = (e) => {
  const t = e.constructor.name, { nodeType: r, tagName: n } = e, o = typeof n == "string" && n.includes("-") || Im(e);
  return r === $m && (xm.test(t) || o) || r === Jd && t === "Text" || r === Qd && t === "Comment" || r === Zd && t === "DocumentFragment";
}, ef = (e) => {
  var t;
  return (e == null || (t = e.constructor) === null || t === void 0 ? void 0 : t.name) && qm(e);
};
We.test = ef;
function Mm(e) {
  return e.nodeType === Jd;
}
function Nm(e) {
  return e.nodeType === Qd;
}
function ki(e) {
  return e.nodeType === Zd;
}
const tf = (e, t, r, n, o, a) => {
  if (Mm(e))
    return (0, gt.printText)(e.data, t);
  if (Nm(e))
    return (0, gt.printComment)(e.data, t);
  const i = ki(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++n > t.maxDepth ? (0, gt.printElementAsLeaf)(i, t) : (0, gt.printElement)(
    i,
    (0, gt.printProps)(
      ki(e) ? [] : Array.from(e.attributes).map((s) => s.name).sort(),
      ki(e) ? {} : Array.from(e.attributes).reduce((s, l) => (s[l.name] = l.value, s), {}),
      t,
      r + t.indent,
      n,
      o,
      a
    ),
    (0, gt.printChildren)(
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
We.serialize = tf;
const Bm = {
  serialize: tf,
  test: ef
};
var km = Bm;
We.default = km;
var Ve = {};
Object.defineProperty(Ve, "__esModule", {
  value: !0
});
Ve.test = Ve.serialize = Ve.default = void 0;
var yr = Se;
const Dm = "@@__IMMUTABLE_ITERABLE__@@", Fm = "@@__IMMUTABLE_LIST__@@", Lm = "@@__IMMUTABLE_KEYED__@@", jm = "@@__IMMUTABLE_MAP__@@", lu = "@@__IMMUTABLE_ORDERED__@@", Um = "@@__IMMUTABLE_RECORD__@@", Hm = "@@__IMMUTABLE_SEQ__@@", Wm = "@@__IMMUTABLE_SET__@@", Vm = "@@__IMMUTABLE_STACK__@@", Dt = (e) => "Immutable." + e, jn = (e) => "[" + e + "]", vr = " ", su = "…", Gm = (e, t, r, n, o, a, i) => ++n > t.maxDepth ? jn(Dt(i)) : Dt(i) + vr + "{" + (0, yr.printIteratorEntries)(
  e.entries(),
  t,
  r,
  n,
  o,
  a
) + "}";
function zm(e) {
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
const Ym = (e, t, r, n, o, a) => {
  const i = Dt(e._name || "Record");
  return ++n > t.maxDepth ? jn(i) : i + vr + "{" + (0, yr.printIteratorEntries)(
    zm(e),
    t,
    r,
    n,
    o,
    a
  ) + "}";
}, Km = (e, t, r, n, o, a) => {
  const i = Dt("Seq");
  return ++n > t.maxDepth ? jn(i) : e[Lm] ? i + vr + "{" + // from Immutable collection of entries or from ECMAScript object
  (e._iter || e._object ? (0, yr.printIteratorEntries)(
    e.entries(),
    t,
    r,
    n,
    o,
    a
  ) : su) + "}" : i + vr + "[" + (e._iter || // from Immutable collection of values
  e._array || // from ECMAScript array
  e._collection || // from ECMAScript collection in immutable v4
  e._iterable ? (0, yr.printIteratorValues)(
    e.values(),
    t,
    r,
    n,
    o,
    a
  ) : su) + "]";
}, Di = (e, t, r, n, o, a, i) => ++n > t.maxDepth ? jn(Dt(i)) : Dt(i) + vr + "[" + (0, yr.printIteratorValues)(
  e.values(),
  t,
  r,
  n,
  o,
  a
) + "]", rf = (e, t, r, n, o, a) => e[jm] ? Gm(
  e,
  t,
  r,
  n,
  o,
  a,
  e[lu] ? "OrderedMap" : "Map"
) : e[Fm] ? Di(
  e,
  t,
  r,
  n,
  o,
  a,
  "List"
) : e[Wm] ? Di(
  e,
  t,
  r,
  n,
  o,
  a,
  e[lu] ? "OrderedSet" : "Set"
) : e[Vm] ? Di(
  e,
  t,
  r,
  n,
  o,
  a,
  "Stack"
) : e[Hm] ? Km(e, t, r, n, o, a) : Ym(e, t, r, n, o, a);
Ve.serialize = rf;
const nf = (e) => e && (e[Dm] === !0 || e[Um] === !0);
Ve.test = nf;
const Xm = {
  serialize: rf,
  test: nf
};
var Jm = Xm;
Ve.default = Jm;
var Ge = {}, Ol = { exports: {} }, k = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uu;
function Qm() {
  if (uu)
    return k;
  uu = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, o = 60114, a = 60109, i = 60110, s = 60112, l = 60113, u = 60120, c = 60115, d = 60116, f = 60121, y = 60122, m = 60117, b = 60129, S = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var p = Symbol.for;
    e = p("react.element"), t = p("react.portal"), r = p("react.fragment"), n = p("react.strict_mode"), o = p("react.profiler"), a = p("react.provider"), i = p("react.context"), s = p("react.forward_ref"), l = p("react.suspense"), u = p("react.suspense_list"), c = p("react.memo"), d = p("react.lazy"), f = p("react.block"), y = p("react.server.block"), m = p("react.fundamental"), b = p("react.debug_trace_mode"), S = p("react.legacy_hidden");
  }
  function _(R) {
    if (typeof R == "object" && R !== null) {
      var T = R.$$typeof;
      switch (T) {
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
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  var w = a, P = e, A = s, v = r, h = d, E = c, B = t, U = o, j = n, H = l;
  return k.ContextConsumer = i, k.ContextProvider = w, k.Element = P, k.ForwardRef = A, k.Fragment = v, k.Lazy = h, k.Memo = E, k.Portal = B, k.Profiler = U, k.StrictMode = j, k.Suspense = H, k.isAsyncMode = function() {
    return !1;
  }, k.isConcurrentMode = function() {
    return !1;
  }, k.isContextConsumer = function(R) {
    return _(R) === i;
  }, k.isContextProvider = function(R) {
    return _(R) === a;
  }, k.isElement = function(R) {
    return typeof R == "object" && R !== null && R.$$typeof === e;
  }, k.isForwardRef = function(R) {
    return _(R) === s;
  }, k.isFragment = function(R) {
    return _(R) === r;
  }, k.isLazy = function(R) {
    return _(R) === d;
  }, k.isMemo = function(R) {
    return _(R) === c;
  }, k.isPortal = function(R) {
    return _(R) === t;
  }, k.isProfiler = function(R) {
    return _(R) === o;
  }, k.isStrictMode = function(R) {
    return _(R) === n;
  }, k.isSuspense = function(R) {
    return _(R) === l;
  }, k.isValidElementType = function(R) {
    return typeof R == "string" || typeof R == "function" || R === r || R === o || R === b || R === n || R === l || R === u || R === S || typeof R == "object" && R !== null && (R.$$typeof === d || R.$$typeof === c || R.$$typeof === a || R.$$typeof === i || R.$$typeof === s || R.$$typeof === m || R.$$typeof === f || R[0] === y);
  }, k.typeOf = _, k;
}
var D = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cu;
function Zm() {
  return cu || (cu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, o = 60114, a = 60109, i = 60110, s = 60112, l = 60113, u = 60120, c = 60115, d = 60116, f = 60121, y = 60122, m = 60117, b = 60129, S = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var p = Symbol.for;
      e = p("react.element"), t = p("react.portal"), r = p("react.fragment"), n = p("react.strict_mode"), o = p("react.profiler"), a = p("react.provider"), i = p("react.context"), s = p("react.forward_ref"), l = p("react.suspense"), u = p("react.suspense_list"), c = p("react.memo"), d = p("react.lazy"), f = p("react.block"), y = p("react.server.block"), m = p("react.fundamental"), p("react.scope"), p("react.opaque.id"), b = p("react.debug_trace_mode"), p("react.offscreen"), S = p("react.legacy_hidden");
    }
    var _ = !1;
    function w(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === r || C === o || C === b || C === n || C === l || C === u || C === S || _ || typeof C == "object" && C !== null && (C.$$typeof === d || C.$$typeof === c || C.$$typeof === a || C.$$typeof === i || C.$$typeof === s || C.$$typeof === m || C.$$typeof === f || C[0] === y));
    }
    function P(C) {
      if (typeof C == "object" && C !== null) {
        var Ni = C.$$typeof;
        switch (Ni) {
          case e:
            var Nr = C.type;
            switch (Nr) {
              case r:
              case o:
              case n:
              case l:
              case u:
                return Nr;
              default:
                var ou = Nr && Nr.$$typeof;
                switch (ou) {
                  case i:
                  case s:
                  case d:
                  case c:
                  case a:
                    return ou;
                  default:
                    return Ni;
                }
            }
          case t:
            return Ni;
        }
      }
    }
    var A = i, v = a, h = e, E = s, B = r, U = d, j = c, H = t, R = o, T = n, N = l, W = !1, oe = !1;
    function et(C) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Mi(C) {
      return oe || (oe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Wv(C) {
      return P(C) === i;
    }
    function Vv(C) {
      return P(C) === a;
    }
    function Gv(C) {
      return typeof C == "object" && C !== null && C.$$typeof === e;
    }
    function zv(C) {
      return P(C) === s;
    }
    function Yv(C) {
      return P(C) === r;
    }
    function Kv(C) {
      return P(C) === d;
    }
    function Xv(C) {
      return P(C) === c;
    }
    function Jv(C) {
      return P(C) === t;
    }
    function Qv(C) {
      return P(C) === o;
    }
    function Zv(C) {
      return P(C) === n;
    }
    function em(C) {
      return P(C) === l;
    }
    D.ContextConsumer = A, D.ContextProvider = v, D.Element = h, D.ForwardRef = E, D.Fragment = B, D.Lazy = U, D.Memo = j, D.Portal = H, D.Profiler = R, D.StrictMode = T, D.Suspense = N, D.isAsyncMode = et, D.isConcurrentMode = Mi, D.isContextConsumer = Wv, D.isContextProvider = Vv, D.isElement = Gv, D.isForwardRef = zv, D.isFragment = Yv, D.isLazy = Kv, D.isMemo = Xv, D.isPortal = Jv, D.isProfiler = Qv, D.isStrictMode = Zv, D.isSuspense = em, D.isValidElementType = w, D.typeOf = P;
  }()), D;
}
process.env.NODE_ENV === "production" ? Ol.exports = Qm() : Ol.exports = Zm();
var eb = Ol.exports;
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.test = Ge.serialize = Ge.default = void 0;
var rt = tb(eb), kr = X;
function of(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (of = function(n) {
    return n ? r : t;
  })(e);
}
function tb(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = of(t);
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
const af = (e, t = []) => (Array.isArray(e) ? e.forEach((r) => {
  af(r, t);
}) : e != null && e !== !1 && t.push(e), t), du = (e) => {
  const t = e.type;
  if (typeof t == "string")
    return t;
  if (typeof t == "function")
    return t.displayName || t.name || "Unknown";
  if (rt.isFragment(e))
    return "React.Fragment";
  if (rt.isSuspense(e))
    return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (rt.isContextProvider(e))
      return "Context.Provider";
    if (rt.isContextConsumer(e))
      return "Context.Consumer";
    if (rt.isForwardRef(e)) {
      if (t.displayName)
        return t.displayName;
      const r = t.render.displayName || t.render.name || "";
      return r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef";
    }
    if (rt.isMemo(e)) {
      const r = t.displayName || t.type.displayName || t.type.name || "";
      return r !== "" ? "Memo(" + r + ")" : "Memo";
    }
  }
  return "UNDEFINED";
}, rb = (e) => {
  const { props: t } = e;
  return Object.keys(t).filter((r) => r !== "children" && t[r] !== void 0).sort();
}, lf = (e, t, r, n, o, a) => ++n > t.maxDepth ? (0, kr.printElementAsLeaf)(du(e), t) : (0, kr.printElement)(
  du(e),
  (0, kr.printProps)(
    rb(e),
    e.props,
    t,
    r + t.indent,
    n,
    o,
    a
  ),
  (0, kr.printChildren)(
    af(e.props.children),
    t,
    r + t.indent,
    n,
    o,
    a
  ),
  t,
  r
);
Ge.serialize = lf;
const sf = (e) => e != null && rt.isElement(e);
Ge.test = sf;
const nb = {
  serialize: lf,
  test: sf
};
var ob = nb;
Ge.default = ob;
var ze = {};
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.test = ze.serialize = ze.default = void 0;
var Dr = X, dn = function() {
  return typeof globalThis < "u" ? globalThis : typeof dn < "u" ? dn : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), Fi = dn["jest-symbol-do-not-touch"] || dn.Symbol;
const ab = typeof Fi == "function" && Fi.for ? Fi.for("react.test.json") : 245830487, ib = (e) => {
  const { props: t } = e;
  return t ? Object.keys(t).filter((r) => t[r] !== void 0).sort() : [];
}, uf = (e, t, r, n, o, a) => ++n > t.maxDepth ? (0, Dr.printElementAsLeaf)(e.type, t) : (0, Dr.printElement)(
  e.type,
  e.props ? (0, Dr.printProps)(
    ib(e),
    e.props,
    t,
    r + t.indent,
    n,
    o,
    a
  ) : "",
  e.children ? (0, Dr.printChildren)(
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
ze.serialize = uf;
const cf = (e) => e && e.$$typeof === ab;
ze.test = cf;
const lb = {
  serialize: uf,
  test: cf
};
var sb = lb;
ze.default = sb;
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
var df = Pe.default = Ef = Pe.DEFAULT_OPTIONS = void 0, ff = Pe.format = wf, _s = Pe.plugins = void 0, ub = Je(Fd), rr = Se, cb = Je(
  je
), db = Je(Ue), fb = Je(He), pb = Je(We), yb = Je(Ve), vb = Je(Ge), mb = Je(
  ze
);
function Je(e) {
  return e && e.__esModule ? e : { default: e };
}
const pf = Object.prototype.toString, bb = Date.prototype.toISOString, hb = Error.prototype.toString, fu = RegExp.prototype.toString, Li = (e) => typeof e.constructor == "function" && e.constructor.name || "Object", gb = (e) => typeof window < "u" && e === window, Eb = /^Symbol\((.*)\)(.*)$/, _b = /\n/gi;
class yf extends Error {
  constructor(t, r) {
    super(t), this.stack = r, this.name = this.constructor.name;
  }
}
function Rb(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function Pb(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function wb(e) {
  return `${e}n`;
}
function pu(e, t) {
  return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]";
}
function yu(e) {
  return String(e).replace(Eb, "Symbol($1)");
}
function vu(e) {
  return "[" + hb.call(e) + "]";
}
function vf(e, t, r, n) {
  if (e === !0 || e === !1)
    return "" + e;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const o = typeof e;
  if (o === "number")
    return Pb(e);
  if (o === "bigint")
    return wb(e);
  if (o === "string")
    return n ? '"' + e.replace(/"|\\/g, "\\$&") + '"' : '"' + e + '"';
  if (o === "function")
    return pu(e, t);
  if (o === "symbol")
    return yu(e);
  const a = pf.call(e);
  return a === "[object WeakMap]" ? "WeakMap {}" : a === "[object WeakSet]" ? "WeakSet {}" : a === "[object Function]" || a === "[object GeneratorFunction]" ? pu(e, t) : a === "[object Symbol]" ? yu(e) : a === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : bb.call(e) : a === "[object Error]" ? vu(e) : a === "[object RegExp]" ? r ? fu.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : fu.call(e) : e instanceof Error ? vu(e) : null;
}
function mf(e, t, r, n, o, a) {
  if (o.indexOf(e) !== -1)
    return "[Circular]";
  o = o.slice(), o.push(e);
  const i = ++n > t.maxDepth, s = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !a)
    return qe(e.toJSON(), t, r, n, o, !0);
  const l = pf.call(e);
  return l === "[object Arguments]" ? i ? "[Arguments]" : (s ? "" : "Arguments ") + "[" + (0, rr.printListItems)(
    e,
    t,
    r,
    n,
    o,
    qe
  ) + "]" : Rb(l) ? i ? "[" + e.constructor.name + "]" : (s || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : e.constructor.name + " ") + "[" + (0, rr.printListItems)(
    e,
    t,
    r,
    n,
    o,
    qe
  ) + "]" : l === "[object Map]" ? i ? "[Map]" : "Map {" + (0, rr.printIteratorEntries)(
    e.entries(),
    t,
    r,
    n,
    o,
    qe,
    " => "
  ) + "}" : l === "[object Set]" ? i ? "[Set]" : "Set {" + (0, rr.printIteratorValues)(
    e.values(),
    t,
    r,
    n,
    o,
    qe
  ) + "}" : i || gb(e) ? "[" + Li(e) + "]" : (s || !t.printBasicPrototype && Li(e) === "Object" ? "" : Li(e) + " ") + "{" + (0, rr.printObjectProperties)(
    e,
    t,
    r,
    n,
    o,
    qe
  ) + "}";
}
function Sb(e) {
  return e.serialize != null;
}
function bf(e, t, r, n, o, a) {
  let i;
  try {
    i = Sb(e) ? e.serialize(t, r, n, o, a, qe) : e.print(
      t,
      (s) => qe(s, r, n, o, a),
      (s) => {
        const l = n + r.indent;
        return l + s.replace(_b, `
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
    throw new yf(s.message, s.stack);
  }
  if (typeof i != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`
    );
  return i;
}
function hf(e, t) {
  for (let r = 0; r < e.length; r++)
    try {
      if (e[r].test(t))
        return e[r];
    } catch (n) {
      throw new yf(n.message, n.stack);
    }
  return null;
}
function qe(e, t, r, n, o, a) {
  const i = hf(t.plugins, e);
  if (i !== null)
    return bf(i, e, t, r, n, o);
  const s = vf(
    e,
    t.printFunctionName,
    t.escapeRegex,
    t.escapeString
  );
  return s !== null ? s : mf(
    e,
    t,
    r,
    n,
    o,
    a
  );
}
const Rs = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, gf = Object.keys(Rs), ue = {
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
  theme: Rs
};
var Ef = Pe.DEFAULT_OPTIONS = ue;
function Ab(e) {
  if (Object.keys(e).forEach((t) => {
    if (!ue.hasOwnProperty(t))
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
const Cb = (e) => gf.reduce((t, r) => {
  const n = e.theme && e.theme[r] !== void 0 ? e.theme[r] : Rs[r], o = n && ub.default[n];
  if (o && typeof o.close == "string" && typeof o.open == "string")
    t[r] = o;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${r}" whose value "${n}" is undefined in ansi-styles.`
    );
  return t;
}, /* @__PURE__ */ Object.create(null)), Tb = () => gf.reduce((e, t) => (e[t] = {
  close: "",
  open: ""
}, e), /* @__PURE__ */ Object.create(null)), _f = (e) => e && e.printFunctionName !== void 0 ? e.printFunctionName : ue.printFunctionName, Rf = (e) => e && e.escapeRegex !== void 0 ? e.escapeRegex : ue.escapeRegex, Pf = (e) => e && e.escapeString !== void 0 ? e.escapeString : ue.escapeString, mu = (e) => {
  var t;
  return {
    callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : ue.callToJSON,
    colors: e && e.highlight ? Cb(e) : Tb(),
    compareKeys: e && typeof e.compareKeys == "function" ? e.compareKeys : ue.compareKeys,
    escapeRegex: Rf(e),
    escapeString: Pf(e),
    indent: e && e.min ? "" : Ob(
      e && e.indent !== void 0 ? e.indent : ue.indent
    ),
    maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : ue.maxDepth,
    min: e && e.min !== void 0 ? e.min : ue.min,
    plugins: e && e.plugins !== void 0 ? e.plugins : ue.plugins,
    printBasicPrototype: (t = e == null ? void 0 : e.printBasicPrototype) !== null && t !== void 0 ? t : !0,
    printFunctionName: _f(e),
    spacingInner: e && e.min ? " " : `
`,
    spacingOuter: e && e.min ? "" : `
`
  };
};
function Ob(e) {
  return new Array(e + 1).join(" ");
}
function wf(e, t) {
  if (t && (Ab(t), t.plugins)) {
    const n = hf(t.plugins, e);
    if (n !== null)
      return bf(n, e, mu(t), "", 0, []);
  }
  const r = vf(
    e,
    _f(t),
    Rf(t),
    Pf(t)
  );
  return r !== null ? r : mf(e, mu(t), "", 0, []);
}
const $b = {
  AsymmetricMatcher: cb.default,
  ConvertAnsi: db.default,
  DOMCollection: fb.default,
  DOMElement: pb.default,
  Immutable: yb.default,
  ReactElement: vb.default,
  ReactTestComponent: mb.default
};
_s = Pe.plugins = $b;
var xb = wf;
df = Pe.default = xb;
const Ib = /* @__PURE__ */ om({
  __proto__: null,
  get DEFAULT_OPTIONS() {
    return Ef;
  },
  get default() {
    return df;
  },
  format: ff,
  get plugins() {
    return _s;
  }
}, [Pe]);
var qb = Object.prototype.toString;
function bu(e) {
  return typeof e == "function" || qb.call(e) === "[object Function]";
}
function Mb(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var Nb = Math.pow(2, 53) - 1;
function Bb(e) {
  var t = Mb(e);
  return Math.min(Math.max(t, 0), Nb);
}
function ce(e, t) {
  var r = Array, n = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  if (typeof t < "u" && !bu(t))
    throw new TypeError("Array.from: when provided, the second argument must be a function");
  for (var o = Bb(n.length), a = bu(r) ? Object(new r(o)) : new Array(o), i = 0, s; i < o; )
    s = n[i], t ? a[i] = t(s, i) : a[i] = s, i += 1;
  return a.length = o, a;
}
function mr(e) {
  "@babel/helpers - typeof";
  return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mr(e);
}
function kb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hu(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Sf(n.key), n);
  }
}
function Db(e, t, r) {
  return t && hu(e.prototype, t), r && hu(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Fb(e, t, r) {
  return t = Sf(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Sf(e) {
  var t = Lb(e, "string");
  return mr(t) === "symbol" ? t : String(t);
}
function Lb(e, t) {
  if (mr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (mr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jb = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    kb(this, e), Fb(this, "items", void 0), this.items = t;
  }
  return Db(e, [{
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
const Ub = typeof Set > "u" ? Set : jb;
function J(e) {
  var t;
  return (
    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (t = e.localName) !== null && t !== void 0 ? t : (
      // eslint-disable-next-line no-restricted-properties -- required for the fallback
      e.tagName.toLowerCase()
    )
  );
}
var Hb = {
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
}, Wb = {
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
function Vb(e, t) {
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
    return e.hasAttribute(r) && !((n = Wb[t]) !== null && n !== void 0 && n.has(r));
  });
}
function Af(e, t) {
  return Vb(e, t);
}
function Gb(e) {
  var t = Yb(e);
  if (t === null || t === "presentation") {
    var r = zb(e);
    if (t !== "presentation" || Af(e, r || ""))
      return r;
  }
  return t;
}
function zb(e) {
  var t = Hb[J(e)];
  if (t !== void 0)
    return t;
  switch (J(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href"))
        return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !Af(e, "img") ? "presentation" : "img";
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
function Yb(e) {
  var t = e.getAttribute("role");
  if (t !== null) {
    var r = t.trim().split(" ")[0];
    if (r.length > 0)
      return r;
  }
  return null;
}
function L(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function Cf(e) {
  return L(e) && J(e) === "caption";
}
function Yr(e) {
  return L(e) && J(e) === "input";
}
function Kb(e) {
  return L(e) && J(e) === "optgroup";
}
function Xb(e) {
  return L(e) && J(e) === "select";
}
function Jb(e) {
  return L(e) && J(e) === "table";
}
function Qb(e) {
  return L(e) && J(e) === "textarea";
}
function Zb(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument, r = t.defaultView;
  if (r === null)
    throw new TypeError("no window available");
  return r;
}
function eh(e) {
  return L(e) && J(e) === "fieldset";
}
function th(e) {
  return L(e) && J(e) === "legend";
}
function rh(e) {
  return L(e) && J(e) === "slot";
}
function nh(e) {
  return L(e) && e.ownerSVGElement !== void 0;
}
function oh(e) {
  return L(e) && J(e) === "svg";
}
function ah(e) {
  return nh(e) && J(e) === "title";
}
function fn(e, t) {
  if (L(e) && e.hasAttribute(t)) {
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
function Ee(e, t) {
  return L(e) ? t.indexOf(Gb(e)) !== -1 : !1;
}
function ih(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function lh(e, t) {
  if (!L(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var r = t(e);
  return r.getPropertyValue("display") === "none" || r.getPropertyValue("visibility") === "hidden";
}
function sh(e) {
  return Ee(e, ["button", "combobox", "listbox", "textbox"]) || Tf(e, "range");
}
function Tf(e, t) {
  if (!L(e))
    return !1;
  switch (t) {
    case "range":
      return Ee(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function gu(e, t) {
  var r = ce(e.querySelectorAll(t));
  return fn(e, "aria-owns").forEach(function(n) {
    r.push.apply(r, ce(n.querySelectorAll(t)));
  }), r;
}
function uh(e) {
  return Xb(e) ? e.selectedOptions || gu(e, "[selected]") : gu(e, '[aria-selected="true"]');
}
function ch(e) {
  return Ee(e, ["none", "presentation"]);
}
function dh(e) {
  return Cf(e);
}
function fh(e) {
  return Ee(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function ph(e) {
  return !1;
}
function yh(e) {
  return Yr(e) || Qb(e) ? e.value : e.textContent || "";
}
function Eu(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function Of(e) {
  var t = J(e);
  return t === "button" || t === "input" && e.getAttribute("type") !== "hidden" || t === "meter" || t === "output" || t === "progress" || t === "select" || t === "textarea";
}
function $f(e) {
  if (Of(e))
    return e;
  var t = null;
  return e.childNodes.forEach(function(r) {
    if (t === null && L(r)) {
      var n = $f(r);
      n !== null && (t = n);
    }
  }), t;
}
function vh(e) {
  if (e.control !== void 0)
    return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : $f(e);
}
function mh(e) {
  var t = e.labels;
  if (t === null)
    return t;
  if (t !== void 0)
    return ce(t);
  if (!Of(e))
    return null;
  var r = e.ownerDocument;
  return ce(r.querySelectorAll("label")).filter(function(n) {
    return vh(n) === e;
  });
}
function bh(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? ce(e.childNodes) : t;
}
function xf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = new Ub(), n = Zb(e), o = t.compute, a = o === void 0 ? "name" : o, i = t.computedStyleSupportsPseudoElements, s = i === void 0 ? t.getComputedStyle !== void 0 : i, l = t.getComputedStyle, u = l === void 0 ? n.getComputedStyle.bind(n) : l, c = t.hidden, d = c === void 0 ? !1 : c;
  function f(p, _) {
    var w = "";
    if (L(p) && s) {
      var P = u(p, "::before"), A = Eu(P);
      w = "".concat(A, " ").concat(w);
    }
    var v = rh(p) ? bh(p) : ce(p.childNodes).concat(fn(p, "aria-owns"));
    if (v.forEach(function(B) {
      var U = S(B, {
        isEmbeddedInLabel: _.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), j = L(B) ? u(B).getPropertyValue("display") : "inline", H = j !== "inline" ? " " : "";
      w += "".concat(H).concat(U).concat(H);
    }), L(p) && s) {
      var h = u(p, "::after"), E = Eu(h);
      w = "".concat(w, " ").concat(E);
    }
    return w.trim();
  }
  function y(p, _) {
    var w = p.getAttributeNode(_);
    return w !== null && !r.has(w) && w.value.trim() !== "" ? (r.add(w), w.value) : null;
  }
  function m(p) {
    return L(p) ? y(p, "title") : null;
  }
  function b(p) {
    if (!L(p))
      return null;
    if (eh(p)) {
      r.add(p);
      for (var _ = ce(p.childNodes), w = 0; w < _.length; w += 1) {
        var P = _[w];
        if (th(P))
          return S(P, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (Jb(p)) {
      r.add(p);
      for (var A = ce(p.childNodes), v = 0; v < A.length; v += 1) {
        var h = A[v];
        if (Cf(h))
          return S(h, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (oh(p)) {
      r.add(p);
      for (var E = ce(p.childNodes), B = 0; B < E.length; B += 1) {
        var U = E[B];
        if (ah(U))
          return U.textContent;
      }
      return null;
    } else if (J(p) === "img" || J(p) === "area") {
      var j = y(p, "alt");
      if (j !== null)
        return j;
    } else if (Kb(p)) {
      var H = y(p, "label");
      if (H !== null)
        return H;
    }
    if (Yr(p) && (p.type === "button" || p.type === "submit" || p.type === "reset")) {
      var R = y(p, "value");
      if (R !== null)
        return R;
      if (p.type === "submit")
        return "Submit";
      if (p.type === "reset")
        return "Reset";
    }
    var T = mh(p);
    if (T !== null && T.length !== 0)
      return r.add(p), ce(T).map(function(et) {
        return S(et, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(et) {
        return et.length > 0;
      }).join(" ");
    if (Yr(p) && p.type === "image") {
      var N = y(p, "alt");
      if (N !== null)
        return N;
      var W = y(p, "title");
      return W !== null ? W : "Submit Query";
    }
    if (Ee(p, ["button"])) {
      var oe = f(p, {
        isEmbeddedInLabel: !1,
        isReferenced: !1
      });
      if (oe !== "")
        return oe;
    }
    return null;
  }
  function S(p, _) {
    if (r.has(p))
      return "";
    if (!d && lh(p, u) && !_.isReferenced)
      return r.add(p), "";
    var w = L(p) ? p.getAttributeNode("aria-labelledby") : null, P = w !== null && !r.has(w) ? fn(p, "aria-labelledby") : [];
    if (a === "name" && !_.isReferenced && P.length > 0)
      return r.add(w), P.map(function(j) {
        return S(j, {
          isEmbeddedInLabel: _.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var A = _.recursion && sh(p) && a === "name";
    if (!A) {
      var v = (L(p) && p.getAttribute("aria-label") || "").trim();
      if (v !== "" && a === "name")
        return r.add(p), v;
      if (!ch(p)) {
        var h = b(p);
        if (h !== null)
          return r.add(p), h;
      }
    }
    if (Ee(p, ["menu"]))
      return r.add(p), "";
    if (A || _.isEmbeddedInLabel || _.isReferenced) {
      if (Ee(p, ["combobox", "listbox"])) {
        r.add(p);
        var E = uh(p);
        return E.length === 0 ? Yr(p) ? p.value : "" : ce(E).map(function(j) {
          return S(j, {
            isEmbeddedInLabel: _.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (Tf(p, "range"))
        return r.add(p), p.hasAttribute("aria-valuetext") ? p.getAttribute("aria-valuetext") : p.hasAttribute("aria-valuenow") ? p.getAttribute("aria-valuenow") : p.getAttribute("value") || "";
      if (Ee(p, ["textbox"]))
        return r.add(p), yh(p);
    }
    if (fh(p) || L(p) && _.isReferenced || dh(p) || ph()) {
      var B = f(p, {
        isEmbeddedInLabel: _.isEmbeddedInLabel,
        isReferenced: !1
      });
      if (B !== "")
        return r.add(p), B;
    }
    if (p.nodeType === p.TEXT_NODE)
      return r.add(p), p.textContent || "";
    if (_.recursion)
      return r.add(p), f(p, {
        isEmbeddedInLabel: _.isEmbeddedInLabel,
        isReferenced: !1
      });
    var U = m(p);
    return U !== null ? (r.add(p), U) : (r.add(p), "");
  }
  return ih(S(e, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: a === "description",
    recursion: !1
  }));
}
function br(e) {
  "@babel/helpers - typeof";
  return br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, br(e);
}
function _u(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ru(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _u(Object(r), !0).forEach(function(n) {
      hh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _u(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hh(e, t, r) {
  return t = gh(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gh(e) {
  var t = Eh(e, "string");
  return br(t) === "symbol" ? t : String(t);
}
function Eh(e, t) {
  if (br(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (br(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function If(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = fn(e, "aria-describedby").map(function(o) {
    return xf(o, Ru(Ru({}, t), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (r === "") {
    var n = e.getAttribute("title");
    r = n === null ? "" : n;
  }
  return r;
}
function _h(e) {
  return Ee(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function Ps(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return _h(e) ? "" : xf(e, t);
}
var de = {}, Un = {}, pt = {}, Hn = {};
Object.defineProperty(Hn, "__esModule", {
  value: !0
});
Hn.default = void 0;
function Rh() {
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
var Ph = Rh;
Hn.default = Ph;
Object.defineProperty(pt, "__esModule", {
  value: !0
});
pt.default = Ah;
var wh = Sh(Hn);
function Sh(e) {
  return e && e.__esModule ? e : { default: e };
}
function $l(e) {
  "@babel/helpers - typeof";
  return $l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $l(e);
}
function Ah(e, t) {
  return typeof Symbol == "function" && $l(Symbol.iterator) === "symbol" && Object.defineProperty(e, Symbol.iterator, {
    value: wh.default.bind(t)
  }), e;
}
Object.defineProperty(Un, "__esModule", {
  value: !0
});
Un.default = void 0;
var Ch = Th(pt);
function Th(e) {
  return e && e.__esModule ? e : { default: e };
}
function ji(e, t) {
  return xh(e) || $h(e, t) || qf(e, t) || Oh();
}
function Oh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $h(e, t) {
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
function xh(e) {
  if (Array.isArray(e))
    return e;
}
function Ih(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = qf(e)) || t && e && typeof e.length == "number") {
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
function qf(e, t) {
  if (e) {
    if (typeof e == "string")
      return Pu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Pu(e, t);
  }
}
function Pu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Et = [["aria-activedescendant", {
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
}]], xl = {
  entries: function() {
    return Et;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = Ih(Et), o;
    try {
      for (n.s(); !(o = n.n()).done; ) {
        var a = ji(o.value, 2), i = a[0], s = a[1];
        t.call(r, s, i, Et);
      }
    } catch (l) {
      n.e(l);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = Et.find(function(n) {
      return n[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!xl.get(t);
  },
  keys: function() {
    return Et.map(function(t) {
      var r = ji(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return Et.map(function(t) {
      var r = ji(t, 2), n = r[1];
      return n;
    });
  }
}, qh = (0, Ch.default)(xl, xl.entries());
Un.default = qh;
var Wn = {};
Object.defineProperty(Wn, "__esModule", {
  value: !0
});
Wn.default = void 0;
var Mh = Nh(pt);
function Nh(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ui(e, t) {
  return Dh(e) || kh(e, t) || Mf(e, t) || Bh();
}
function Bh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kh(e, t) {
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
function Dh(e) {
  if (Array.isArray(e))
    return e;
}
function Fh(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Mf(e)) || t && e && typeof e.length == "number") {
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
function Mf(e, t) {
  if (e) {
    if (typeof e == "string")
      return wu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return wu(e, t);
  }
}
function wu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var _t = [["a", {
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
}]], Il = {
  entries: function() {
    return _t;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = Fh(_t), o;
    try {
      for (n.s(); !(o = n.n()).done; ) {
        var a = Ui(o.value, 2), i = a[0], s = a[1];
        t.call(r, s, i, _t);
      }
    } catch (l) {
      n.e(l);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = _t.find(function(n) {
      return n[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Il.get(t);
  },
  keys: function() {
    return _t.map(function(t) {
      var r = Ui(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return _t.map(function(t) {
      var r = Ui(t, 2), n = r[1];
      return n;
    });
  }
}, Lh = (0, Mh.default)(Il, Il.entries());
Wn.default = Lh;
var Qt = {}, Vn = {}, Gn = {};
Object.defineProperty(Gn, "__esModule", {
  value: !0
});
Gn.default = void 0;
var jh = {
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
}, Uh = jh;
Gn.default = Uh;
var zn = {};
Object.defineProperty(zn, "__esModule", {
  value: !0
});
zn.default = void 0;
var Hh = {
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
}, Wh = Hh;
zn.default = Wh;
var Yn = {};
Object.defineProperty(Yn, "__esModule", {
  value: !0
});
Yn.default = void 0;
var Vh = {
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
}, Gh = Vh;
Yn.default = Gh;
var Kn = {};
Object.defineProperty(Kn, "__esModule", {
  value: !0
});
Kn.default = void 0;
var zh = {
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
}, Yh = zh;
Kn.default = Yh;
var Xn = {};
Object.defineProperty(Xn, "__esModule", {
  value: !0
});
Xn.default = void 0;
var Kh = {
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
}, Xh = Kh;
Xn.default = Xh;
var Jn = {};
Object.defineProperty(Jn, "__esModule", {
  value: !0
});
Jn.default = void 0;
var Jh = {
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
}, Qh = Jh;
Jn.default = Qh;
var Qn = {};
Object.defineProperty(Qn, "__esModule", {
  value: !0
});
Qn.default = void 0;
var Zh = {
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
}, eg = Zh;
Qn.default = eg;
var Zn = {};
Object.defineProperty(Zn, "__esModule", {
  value: !0
});
Zn.default = void 0;
var tg = {
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
}, rg = tg;
Zn.default = rg;
var eo = {};
Object.defineProperty(eo, "__esModule", {
  value: !0
});
eo.default = void 0;
var ng = {
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
}, og = ng;
eo.default = og;
var to = {};
Object.defineProperty(to, "__esModule", {
  value: !0
});
to.default = void 0;
var ag = {
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
}, ig = ag;
to.default = ig;
var ro = {};
Object.defineProperty(ro, "__esModule", {
  value: !0
});
ro.default = void 0;
var lg = {
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
}, sg = lg;
ro.default = sg;
var no = {};
Object.defineProperty(no, "__esModule", {
  value: !0
});
no.default = void 0;
var ug = {
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
}, cg = ug;
no.default = cg;
Object.defineProperty(Vn, "__esModule", {
  value: !0
});
Vn.default = void 0;
var dg = ie(Gn), fg = ie(zn), pg = ie(Yn), yg = ie(Kn), vg = ie(Xn), mg = ie(Jn), bg = ie(Qn), hg = ie(Zn), gg = ie(eo), Eg = ie(to), _g = ie(ro), Rg = ie(no);
function ie(e) {
  return e && e.__esModule ? e : { default: e };
}
var Pg = [["command", dg.default], ["composite", fg.default], ["input", pg.default], ["landmark", yg.default], ["range", vg.default], ["roletype", mg.default], ["section", bg.default], ["sectionhead", hg.default], ["select", gg.default], ["structure", Eg.default], ["widget", _g.default], ["window", Rg.default]], wg = Pg;
Vn.default = wg;
var oo = {}, ao = {};
Object.defineProperty(ao, "__esModule", {
  value: !0
});
ao.default = void 0;
var Sg = {
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
}, Ag = Sg;
ao.default = Ag;
var io = {};
Object.defineProperty(io, "__esModule", {
  value: !0
});
io.default = void 0;
var Cg = {
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
}, Tg = Cg;
io.default = Tg;
var lo = {};
Object.defineProperty(lo, "__esModule", {
  value: !0
});
lo.default = void 0;
var Og = {
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
}, $g = Og;
lo.default = $g;
var so = {};
Object.defineProperty(so, "__esModule", {
  value: !0
});
so.default = void 0;
var xg = {
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
}, Ig = xg;
so.default = Ig;
var uo = {};
Object.defineProperty(uo, "__esModule", {
  value: !0
});
uo.default = void 0;
var qg = {
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
}, Mg = qg;
uo.default = Mg;
var co = {};
Object.defineProperty(co, "__esModule", {
  value: !0
});
co.default = void 0;
var Ng = {
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
}, Bg = Ng;
co.default = Bg;
var fo = {};
Object.defineProperty(fo, "__esModule", {
  value: !0
});
fo.default = void 0;
var kg = {
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
}, Dg = kg;
fo.default = Dg;
var po = {};
Object.defineProperty(po, "__esModule", {
  value: !0
});
po.default = void 0;
var Fg = {
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
}, Lg = Fg;
po.default = Lg;
var yo = {};
Object.defineProperty(yo, "__esModule", {
  value: !0
});
yo.default = void 0;
var jg = {
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
}, Ug = jg;
yo.default = Ug;
var vo = {};
Object.defineProperty(vo, "__esModule", {
  value: !0
});
vo.default = void 0;
var Hg = {
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
}, Wg = Hg;
vo.default = Wg;
var mo = {};
Object.defineProperty(mo, "__esModule", {
  value: !0
});
mo.default = void 0;
var Vg = {
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
}, Gg = Vg;
mo.default = Gg;
var bo = {};
Object.defineProperty(bo, "__esModule", {
  value: !0
});
bo.default = void 0;
var zg = {
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
}, Yg = zg;
bo.default = Yg;
var ho = {};
Object.defineProperty(ho, "__esModule", {
  value: !0
});
ho.default = void 0;
var Kg = {
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
}, Xg = Kg;
ho.default = Xg;
var go = {};
Object.defineProperty(go, "__esModule", {
  value: !0
});
go.default = void 0;
var Jg = {
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
}, Qg = Jg;
go.default = Qg;
var Eo = {};
Object.defineProperty(Eo, "__esModule", {
  value: !0
});
Eo.default = void 0;
var Zg = {
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
}, eE = Zg;
Eo.default = eE;
var _o = {};
Object.defineProperty(_o, "__esModule", {
  value: !0
});
_o.default = void 0;
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
      name: "dd"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, rE = tE;
_o.default = rE;
var Ro = {};
Object.defineProperty(Ro, "__esModule", {
  value: !0
});
Ro.default = void 0;
var nE = {
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
}, oE = nE;
Ro.default = oE;
var Po = {};
Object.defineProperty(Po, "__esModule", {
  value: !0
});
Po.default = void 0;
var aE = {
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
}, iE = aE;
Po.default = iE;
var wo = {};
Object.defineProperty(wo, "__esModule", {
  value: !0
});
wo.default = void 0;
var lE = {
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
}, sE = lE;
wo.default = sE;
var So = {};
Object.defineProperty(So, "__esModule", {
  value: !0
});
So.default = void 0;
var uE = {
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
}, cE = uE;
So.default = cE;
var Ao = {};
Object.defineProperty(Ao, "__esModule", {
  value: !0
});
Ao.default = void 0;
var dE = {
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
}, fE = dE;
Ao.default = fE;
var Co = {};
Object.defineProperty(Co, "__esModule", {
  value: !0
});
Co.default = void 0;
var pE = {
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
}, yE = pE;
Co.default = yE;
var To = {};
Object.defineProperty(To, "__esModule", {
  value: !0
});
To.default = void 0;
var vE = {
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
}, mE = vE;
To.default = mE;
var Oo = {};
Object.defineProperty(Oo, "__esModule", {
  value: !0
});
Oo.default = void 0;
var bE = {
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
}, hE = bE;
Oo.default = hE;
var $o = {};
Object.defineProperty($o, "__esModule", {
  value: !0
});
$o.default = void 0;
var gE = {
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
}, EE = gE;
$o.default = EE;
var xo = {};
Object.defineProperty(xo, "__esModule", {
  value: !0
});
xo.default = void 0;
var _E = {
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
}, RE = _E;
xo.default = RE;
var Io = {};
Object.defineProperty(Io, "__esModule", {
  value: !0
});
Io.default = void 0;
var PE = {
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
}, wE = PE;
Io.default = wE;
var qo = {};
Object.defineProperty(qo, "__esModule", {
  value: !0
});
qo.default = void 0;
var SE = {
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
}, AE = SE;
qo.default = AE;
var Mo = {};
Object.defineProperty(Mo, "__esModule", {
  value: !0
});
Mo.default = void 0;
var CE = {
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
}, TE = CE;
Mo.default = TE;
var No = {};
Object.defineProperty(No, "__esModule", {
  value: !0
});
No.default = void 0;
var OE = {
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
}, $E = OE;
No.default = $E;
var Bo = {};
Object.defineProperty(Bo, "__esModule", {
  value: !0
});
Bo.default = void 0;
var xE = {
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
}, IE = xE;
Bo.default = IE;
var ko = {};
Object.defineProperty(ko, "__esModule", {
  value: !0
});
ko.default = void 0;
var qE = {
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
}, ME = qE;
ko.default = ME;
var Do = {};
Object.defineProperty(Do, "__esModule", {
  value: !0
});
Do.default = void 0;
var NE = {
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
}, BE = NE;
Do.default = BE;
var Fo = {};
Object.defineProperty(Fo, "__esModule", {
  value: !0
});
Fo.default = void 0;
var kE = {
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
}, DE = kE;
Fo.default = DE;
var Lo = {};
Object.defineProperty(Lo, "__esModule", {
  value: !0
});
Lo.default = void 0;
var FE = {
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
}, LE = FE;
Lo.default = LE;
var jo = {};
Object.defineProperty(jo, "__esModule", {
  value: !0
});
jo.default = void 0;
var jE = {
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
}, UE = jE;
jo.default = UE;
var Uo = {};
Object.defineProperty(Uo, "__esModule", {
  value: !0
});
Uo.default = void 0;
var HE = {
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
}, WE = HE;
Uo.default = WE;
var Ho = {};
Object.defineProperty(Ho, "__esModule", {
  value: !0
});
Ho.default = void 0;
var VE = {
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
}, GE = VE;
Ho.default = GE;
var Wo = {};
Object.defineProperty(Wo, "__esModule", {
  value: !0
});
Wo.default = void 0;
var zE = {
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
}, YE = zE;
Wo.default = YE;
var Vo = {};
Object.defineProperty(Vo, "__esModule", {
  value: !0
});
Vo.default = void 0;
var KE = {
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
}, XE = KE;
Vo.default = XE;
var Go = {};
Object.defineProperty(Go, "__esModule", {
  value: !0
});
Go.default = void 0;
var JE = {
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
}, QE = JE;
Go.default = QE;
var zo = {};
Object.defineProperty(zo, "__esModule", {
  value: !0
});
zo.default = void 0;
var ZE = {
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
}, e_ = ZE;
zo.default = e_;
var Yo = {};
Object.defineProperty(Yo, "__esModule", {
  value: !0
});
Yo.default = void 0;
var t_ = {
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
}, r_ = t_;
Yo.default = r_;
var Ko = {};
Object.defineProperty(Ko, "__esModule", {
  value: !0
});
Ko.default = void 0;
var n_ = {
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
}, o_ = n_;
Ko.default = o_;
var Xo = {};
Object.defineProperty(Xo, "__esModule", {
  value: !0
});
Xo.default = void 0;
var a_ = {
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
}, i_ = a_;
Xo.default = i_;
var Jo = {};
Object.defineProperty(Jo, "__esModule", {
  value: !0
});
Jo.default = void 0;
var l_ = {
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
}, s_ = l_;
Jo.default = s_;
var Qo = {};
Object.defineProperty(Qo, "__esModule", {
  value: !0
});
Qo.default = void 0;
var u_ = {
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
}, c_ = u_;
Qo.default = c_;
var Zo = {};
Object.defineProperty(Zo, "__esModule", {
  value: !0
});
Zo.default = void 0;
var d_ = {
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
}, f_ = d_;
Zo.default = f_;
var ea = {};
Object.defineProperty(ea, "__esModule", {
  value: !0
});
ea.default = void 0;
var p_ = {
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
}, y_ = p_;
ea.default = y_;
var ta = {};
Object.defineProperty(ta, "__esModule", {
  value: !0
});
ta.default = void 0;
var v_ = {
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
}, m_ = v_;
ta.default = m_;
var ra = {};
Object.defineProperty(ra, "__esModule", {
  value: !0
});
ra.default = void 0;
var b_ = {
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
}, h_ = b_;
ra.default = h_;
var na = {};
Object.defineProperty(na, "__esModule", {
  value: !0
});
na.default = void 0;
var g_ = {
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
}, E_ = g_;
na.default = E_;
var oa = {};
Object.defineProperty(oa, "__esModule", {
  value: !0
});
oa.default = void 0;
var __ = {
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
}, R_ = __;
oa.default = R_;
var aa = {};
Object.defineProperty(aa, "__esModule", {
  value: !0
});
aa.default = void 0;
var P_ = {
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
}, w_ = P_;
aa.default = w_;
var ia = {};
Object.defineProperty(ia, "__esModule", {
  value: !0
});
ia.default = void 0;
var S_ = {
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
}, A_ = S_;
ia.default = A_;
var la = {};
Object.defineProperty(la, "__esModule", {
  value: !0
});
la.default = void 0;
var C_ = {
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
}, T_ = C_;
la.default = T_;
var sa = {};
Object.defineProperty(sa, "__esModule", {
  value: !0
});
sa.default = void 0;
var O_ = {
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
}, $_ = O_;
sa.default = $_;
var ua = {};
Object.defineProperty(ua, "__esModule", {
  value: !0
});
ua.default = void 0;
var x_ = {
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
}, I_ = x_;
ua.default = I_;
var ca = {};
Object.defineProperty(ca, "__esModule", {
  value: !0
});
ca.default = void 0;
var q_ = {
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
}, M_ = q_;
ca.default = M_;
var da = {};
Object.defineProperty(da, "__esModule", {
  value: !0
});
da.default = void 0;
var N_ = {
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
}, B_ = N_;
da.default = B_;
var fa = {};
Object.defineProperty(fa, "__esModule", {
  value: !0
});
fa.default = void 0;
var k_ = {
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
}, D_ = k_;
fa.default = D_;
var pa = {};
Object.defineProperty(pa, "__esModule", {
  value: !0
});
pa.default = void 0;
var F_ = {
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
}, L_ = F_;
pa.default = L_;
var ya = {};
Object.defineProperty(ya, "__esModule", {
  value: !0
});
ya.default = void 0;
var j_ = {
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
}, U_ = j_;
ya.default = U_;
var va = {};
Object.defineProperty(va, "__esModule", {
  value: !0
});
va.default = void 0;
var H_ = {
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
}, W_ = H_;
va.default = W_;
var ma = {};
Object.defineProperty(ma, "__esModule", {
  value: !0
});
ma.default = void 0;
var V_ = {
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
}, G_ = V_;
ma.default = G_;
var ba = {};
Object.defineProperty(ba, "__esModule", {
  value: !0
});
ba.default = void 0;
var z_ = {
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
}, Y_ = z_;
ba.default = Y_;
var ha = {};
Object.defineProperty(ha, "__esModule", {
  value: !0
});
ha.default = void 0;
var K_ = {
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
}, X_ = K_;
ha.default = X_;
var ga = {};
Object.defineProperty(ga, "__esModule", {
  value: !0
});
ga.default = void 0;
var J_ = {
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
}, Q_ = J_;
ga.default = Q_;
var Ea = {};
Object.defineProperty(Ea, "__esModule", {
  value: !0
});
Ea.default = void 0;
var Z_ = {
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
}, eR = Z_;
Ea.default = eR;
var _a = {};
Object.defineProperty(_a, "__esModule", {
  value: !0
});
_a.default = void 0;
var tR = {
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
}, rR = tR;
_a.default = rR;
var Ra = {};
Object.defineProperty(Ra, "__esModule", {
  value: !0
});
Ra.default = void 0;
var nR = {
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
}, oR = nR;
Ra.default = oR;
var Pa = {};
Object.defineProperty(Pa, "__esModule", {
  value: !0
});
Pa.default = void 0;
var aR = {
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
}, iR = aR;
Pa.default = iR;
var wa = {};
Object.defineProperty(wa, "__esModule", {
  value: !0
});
wa.default = void 0;
var lR = {
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
}, sR = lR;
wa.default = sR;
var Sa = {};
Object.defineProperty(Sa, "__esModule", {
  value: !0
});
Sa.default = void 0;
var uR = {
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
}, cR = uR;
Sa.default = cR;
var Aa = {};
Object.defineProperty(Aa, "__esModule", {
  value: !0
});
Aa.default = void 0;
var dR = {
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
}, fR = dR;
Aa.default = fR;
var Ca = {};
Object.defineProperty(Ca, "__esModule", {
  value: !0
});
Ca.default = void 0;
var pR = {
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
}, yR = pR;
Ca.default = yR;
var Ta = {};
Object.defineProperty(Ta, "__esModule", {
  value: !0
});
Ta.default = void 0;
var vR = {
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
}, mR = vR;
Ta.default = mR;
var Oa = {};
Object.defineProperty(Oa, "__esModule", {
  value: !0
});
Oa.default = void 0;
var bR = {
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
}, hR = bR;
Oa.default = hR;
var $a = {};
Object.defineProperty($a, "__esModule", {
  value: !0
});
$a.default = void 0;
var gR = {
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
}, ER = gR;
$a.default = ER;
var xa = {};
Object.defineProperty(xa, "__esModule", {
  value: !0
});
xa.default = void 0;
var _R = {
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
}, RR = _R;
xa.default = RR;
var Ia = {};
Object.defineProperty(Ia, "__esModule", {
  value: !0
});
Ia.default = void 0;
var PR = {
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
}, wR = PR;
Ia.default = wR;
var qa = {};
Object.defineProperty(qa, "__esModule", {
  value: !0
});
qa.default = void 0;
var SR = {
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
}, AR = SR;
qa.default = AR;
Object.defineProperty(oo, "__esModule", {
  value: !0
});
oo.default = void 0;
var CR = g(ao), TR = g(io), OR = g(lo), $R = g(so), xR = g(uo), IR = g(co), qR = g(fo), MR = g(po), NR = g(yo), BR = g(vo), kR = g(mo), DR = g(bo), FR = g(ho), LR = g(go), jR = g(Eo), UR = g(_o), HR = g(Ro), WR = g(Po), VR = g(wo), GR = g(So), zR = g(Ao), YR = g(Co), KR = g(To), XR = g(Oo), JR = g($o), QR = g(xo), ZR = g(Io), eP = g(qo), tP = g(Mo), rP = g(No), nP = g(Bo), oP = g(ko), aP = g(Do), iP = g(Fo), lP = g(Lo), sP = g(jo), uP = g(Uo), cP = g(Ho), dP = g(Wo), fP = g(Vo), pP = g(Go), yP = g(zo), vP = g(Yo), mP = g(Ko), bP = g(Xo), hP = g(Jo), gP = g(Qo), EP = g(Zo), _P = g(ea), RP = g(ta), PP = g(ra), wP = g(na), SP = g(oa), AP = g(aa), CP = g(ia), TP = g(la), OP = g(sa), $P = g(ua), xP = g(ca), IP = g(da), qP = g(fa), MP = g(pa), NP = g(ya), BP = g(va), kP = g(ma), DP = g(ba), FP = g(ha), LP = g(ga), jP = g(Ea), UP = g(_a), HP = g(Ra), WP = g(Pa), VP = g(wa), GP = g(Sa), zP = g(Aa), YP = g(Ca), KP = g(Ta), XP = g(Oa), JP = g($a), QP = g(xa), ZP = g(Ia), ew = g(qa);
function g(e) {
  return e && e.__esModule ? e : { default: e };
}
var tw = [["alert", CR.default], ["alertdialog", TR.default], ["application", OR.default], ["article", $R.default], ["banner", xR.default], ["blockquote", IR.default], ["button", qR.default], ["caption", MR.default], ["cell", NR.default], ["checkbox", BR.default], ["code", kR.default], ["columnheader", DR.default], ["combobox", FR.default], ["complementary", LR.default], ["contentinfo", jR.default], ["definition", UR.default], ["deletion", HR.default], ["dialog", WR.default], ["directory", VR.default], ["document", GR.default], ["emphasis", zR.default], ["feed", YR.default], ["figure", KR.default], ["form", XR.default], ["generic", JR.default], ["grid", QR.default], ["gridcell", ZR.default], ["group", eP.default], ["heading", tP.default], ["img", rP.default], ["insertion", nP.default], ["link", oP.default], ["list", aP.default], ["listbox", iP.default], ["listitem", lP.default], ["log", sP.default], ["main", uP.default], ["marquee", cP.default], ["math", dP.default], ["menu", fP.default], ["menubar", pP.default], ["menuitem", yP.default], ["menuitemcheckbox", vP.default], ["menuitemradio", mP.default], ["meter", bP.default], ["navigation", hP.default], ["none", gP.default], ["note", EP.default], ["option", _P.default], ["paragraph", RP.default], ["presentation", PP.default], ["progressbar", wP.default], ["radio", SP.default], ["radiogroup", AP.default], ["region", CP.default], ["row", TP.default], ["rowgroup", OP.default], ["rowheader", $P.default], ["scrollbar", xP.default], ["search", IP.default], ["searchbox", qP.default], ["separator", MP.default], ["slider", NP.default], ["spinbutton", BP.default], ["status", kP.default], ["strong", DP.default], ["subscript", FP.default], ["superscript", LP.default], ["switch", jP.default], ["tab", UP.default], ["table", HP.default], ["tablist", WP.default], ["tabpanel", VP.default], ["term", GP.default], ["textbox", zP.default], ["time", YP.default], ["timer", KP.default], ["toolbar", XP.default], ["tooltip", JP.default], ["tree", QP.default], ["treegrid", ZP.default], ["treeitem", ew.default]], rw = tw;
oo.default = rw;
var Ma = {}, Na = {};
Object.defineProperty(Na, "__esModule", {
  value: !0
});
Na.default = void 0;
var nw = {
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
}, ow = nw;
Na.default = ow;
var Ba = {};
Object.defineProperty(Ba, "__esModule", {
  value: !0
});
Ba.default = void 0;
var aw = {
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
}, iw = aw;
Ba.default = iw;
var ka = {};
Object.defineProperty(ka, "__esModule", {
  value: !0
});
ka.default = void 0;
var lw = {
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
}, sw = lw;
ka.default = sw;
var Da = {};
Object.defineProperty(Da, "__esModule", {
  value: !0
});
Da.default = void 0;
var uw = {
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
}, cw = uw;
Da.default = cw;
var Fa = {};
Object.defineProperty(Fa, "__esModule", {
  value: !0
});
Fa.default = void 0;
var dw = {
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
}, fw = dw;
Fa.default = fw;
var La = {};
Object.defineProperty(La, "__esModule", {
  value: !0
});
La.default = void 0;
var pw = {
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
}, yw = pw;
La.default = yw;
var ja = {};
Object.defineProperty(ja, "__esModule", {
  value: !0
});
ja.default = void 0;
var vw = {
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
}, mw = vw;
ja.default = mw;
var Ua = {};
Object.defineProperty(Ua, "__esModule", {
  value: !0
});
Ua.default = void 0;
var bw = {
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
}, hw = bw;
Ua.default = hw;
var Ha = {};
Object.defineProperty(Ha, "__esModule", {
  value: !0
});
Ha.default = void 0;
var gw = {
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
}, Ew = gw;
Ha.default = Ew;
var Wa = {};
Object.defineProperty(Wa, "__esModule", {
  value: !0
});
Wa.default = void 0;
var _w = {
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
}, Rw = _w;
Wa.default = Rw;
var Va = {};
Object.defineProperty(Va, "__esModule", {
  value: !0
});
Va.default = void 0;
var Pw = {
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
}, ww = Pw;
Va.default = ww;
var Ga = {};
Object.defineProperty(Ga, "__esModule", {
  value: !0
});
Ga.default = void 0;
var Sw = {
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
}, Aw = Sw;
Ga.default = Aw;
var za = {};
Object.defineProperty(za, "__esModule", {
  value: !0
});
za.default = void 0;
var Cw = {
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
}, Tw = Cw;
za.default = Tw;
var Ya = {};
Object.defineProperty(Ya, "__esModule", {
  value: !0
});
Ya.default = void 0;
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
      name: "credits [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, $w = Ow;
Ya.default = $w;
var Ka = {};
Object.defineProperty(Ka, "__esModule", {
  value: !0
});
Ka.default = void 0;
var xw = {
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
}, Iw = xw;
Ka.default = Iw;
var Xa = {};
Object.defineProperty(Xa, "__esModule", {
  value: !0
});
Xa.default = void 0;
var qw = {
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
}, Mw = qw;
Xa.default = Mw;
var Ja = {};
Object.defineProperty(Ja, "__esModule", {
  value: !0
});
Ja.default = void 0;
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
      name: "rearnotes [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["doc-endnote"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Bw = Nw;
Ja.default = Bw;
var Qa = {};
Object.defineProperty(Qa, "__esModule", {
  value: !0
});
Qa.default = void 0;
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
      name: "epigraph [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Dw = kw;
Qa.default = Dw;
var Za = {};
Object.defineProperty(Za, "__esModule", {
  value: !0
});
Za.default = void 0;
var Fw = {
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
}, Lw = Fw;
Za.default = Lw;
var ei = {};
Object.defineProperty(ei, "__esModule", {
  value: !0
});
ei.default = void 0;
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
      name: "errata [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Uw = jw;
ei.default = Uw;
var ti = {};
Object.defineProperty(ti, "__esModule", {
  value: !0
});
ti.default = void 0;
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
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Ww = Hw;
ti.default = Ww;
var ri = {};
Object.defineProperty(ri, "__esModule", {
  value: !0
});
ri.default = void 0;
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
      name: "footnote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Gw = Vw;
ri.default = Gw;
var ni = {};
Object.defineProperty(ni, "__esModule", {
  value: !0
});
ni.default = void 0;
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
      name: "foreword [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Yw = zw;
ni.default = Yw;
var oi = {};
Object.defineProperty(oi, "__esModule", {
  value: !0
});
oi.default = void 0;
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
      name: "glossary [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["definition"], ["term"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Xw = Kw;
oi.default = Xw;
var ai = {};
Object.defineProperty(ai, "__esModule", {
  value: !0
});
ai.default = void 0;
var Jw = {
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
}, Qw = Jw;
ai.default = Qw;
var ii = {};
Object.defineProperty(ii, "__esModule", {
  value: !0
});
ii.default = void 0;
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
      name: "index [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, eS = Zw;
ii.default = eS;
var li = {};
Object.defineProperty(li, "__esModule", {
  value: !0
});
li.default = void 0;
var tS = {
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
}, rS = tS;
li.default = rS;
var si = {};
Object.defineProperty(si, "__esModule", {
  value: !0
});
si.default = void 0;
var nS = {
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
}, oS = nS;
si.default = oS;
var ui = {};
Object.defineProperty(ui, "__esModule", {
  value: !0
});
ui.default = void 0;
var aS = {
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
}, iS = aS;
ui.default = iS;
var ci = {};
Object.defineProperty(ci, "__esModule", {
  value: !0
});
ci.default = void 0;
var lS = {
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
}, sS = lS;
ci.default = sS;
var di = {};
Object.defineProperty(di, "__esModule", {
  value: !0
});
di.default = void 0;
var uS = {
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
}, cS = uS;
di.default = cS;
var fi = {};
Object.defineProperty(fi, "__esModule", {
  value: !0
});
fi.default = void 0;
var dS = {
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
}, fS = dS;
fi.default = fS;
var pi = {};
Object.defineProperty(pi, "__esModule", {
  value: !0
});
pi.default = void 0;
var pS = {
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
}, yS = pS;
pi.default = yS;
var yi = {};
Object.defineProperty(yi, "__esModule", {
  value: !0
});
yi.default = void 0;
var vS = {
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
}, mS = vS;
yi.default = mS;
var vi = {};
Object.defineProperty(vi, "__esModule", {
  value: !0
});
vi.default = void 0;
var bS = {
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
}, hS = bS;
vi.default = hS;
var mi = {};
Object.defineProperty(mi, "__esModule", {
  value: !0
});
mi.default = void 0;
var gS = {
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
}, ES = gS;
mi.default = ES;
var bi = {};
Object.defineProperty(bi, "__esModule", {
  value: !0
});
bi.default = void 0;
var _S = {
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
}, RS = _S;
bi.default = RS;
var hi = {};
Object.defineProperty(hi, "__esModule", {
  value: !0
});
hi.default = void 0;
var PS = {
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
}, wS = PS;
hi.default = wS;
var gi = {};
Object.defineProperty(gi, "__esModule", {
  value: !0
});
gi.default = void 0;
var SS = {
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
}, AS = SS;
gi.default = AS;
Object.defineProperty(Ma, "__esModule", {
  value: !0
});
Ma.default = void 0;
var CS = $(Na), TS = $(Ba), OS = $(ka), $S = $(Da), xS = $(Fa), IS = $(La), qS = $(ja), MS = $(Ua), NS = $(Ha), BS = $(Wa), kS = $(Va), DS = $(Ga), FS = $(za), LS = $(Ya), jS = $(Ka), US = $(Xa), HS = $(Ja), WS = $(Qa), VS = $(Za), GS = $(ei), zS = $(ti), YS = $(ri), KS = $(ni), XS = $(oi), JS = $(ai), QS = $(ii), ZS = $(li), eA = $(si), tA = $(ui), rA = $(ci), nA = $(di), oA = $(fi), aA = $(pi), iA = $(yi), lA = $(vi), sA = $(mi), uA = $(bi), cA = $(hi), dA = $(gi);
function $(e) {
  return e && e.__esModule ? e : { default: e };
}
var fA = [["doc-abstract", CS.default], ["doc-acknowledgments", TS.default], ["doc-afterword", OS.default], ["doc-appendix", $S.default], ["doc-backlink", xS.default], ["doc-biblioentry", IS.default], ["doc-bibliography", qS.default], ["doc-biblioref", MS.default], ["doc-chapter", NS.default], ["doc-colophon", BS.default], ["doc-conclusion", kS.default], ["doc-cover", DS.default], ["doc-credit", FS.default], ["doc-credits", LS.default], ["doc-dedication", jS.default], ["doc-endnote", US.default], ["doc-endnotes", HS.default], ["doc-epigraph", WS.default], ["doc-epilogue", VS.default], ["doc-errata", GS.default], ["doc-example", zS.default], ["doc-footnote", YS.default], ["doc-foreword", KS.default], ["doc-glossary", XS.default], ["doc-glossref", JS.default], ["doc-index", QS.default], ["doc-introduction", ZS.default], ["doc-noteref", eA.default], ["doc-notice", tA.default], ["doc-pagebreak", rA.default], ["doc-pagelist", nA.default], ["doc-part", oA.default], ["doc-preface", aA.default], ["doc-prologue", iA.default], ["doc-pullquote", lA.default], ["doc-qna", sA.default], ["doc-subtitle", uA.default], ["doc-tip", cA.default], ["doc-toc", dA.default]], pA = fA;
Ma.default = pA;
var Ei = {}, _i = {};
Object.defineProperty(_i, "__esModule", {
  value: !0
});
_i.default = void 0;
var yA = {
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
}, vA = yA;
_i.default = vA;
var Ri = {};
Object.defineProperty(Ri, "__esModule", {
  value: !0
});
Ri.default = void 0;
var mA = {
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
}, bA = mA;
Ri.default = bA;
var Pi = {};
Object.defineProperty(Pi, "__esModule", {
  value: !0
});
Pi.default = void 0;
var hA = {
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
}, gA = hA;
Pi.default = gA;
Object.defineProperty(Ei, "__esModule", {
  value: !0
});
Ei.default = void 0;
var EA = ws(_i), _A = ws(Ri), RA = ws(Pi);
function ws(e) {
  return e && e.__esModule ? e : { default: e };
}
var PA = [["graphics-document", EA.default], ["graphics-object", _A.default], ["graphics-symbol", RA.default]], wA = PA;
Ei.default = wA;
Object.defineProperty(Qt, "__esModule", {
  value: !0
});
Qt.default = void 0;
var SA = Sr(Vn), AA = Sr(oo), CA = Sr(Ma), TA = Sr(Ei), OA = Sr(pt);
function Sr(e) {
  return e && e.__esModule ? e : { default: e };
}
function $A(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ql(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Nf(e)) || t && e && typeof e.length == "number") {
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
function ur(e, t) {
  return qA(e) || IA(e, t) || Nf(e, t) || xA();
}
function xA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nf(e, t) {
  if (e) {
    if (typeof e == "string")
      return Su(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Su(e, t);
  }
}
function Su(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function IA(e, t) {
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
function qA(e) {
  if (Array.isArray(e))
    return e;
}
var Me = [].concat(SA.default, AA.default, CA.default, TA.default);
Me.forEach(function(e) {
  var t = ur(e, 2), r = t[1], n = ql(r.superClass), o;
  try {
    for (n.s(); !(o = n.n()).done; ) {
      var a = o.value, i = ql(a), s;
      try {
        var l = function() {
          var c = s.value, d = Me.find(function(S) {
            var p = ur(S, 1), _ = p[0];
            return _ === c;
          });
          if (d)
            for (var f = d[1], y = 0, m = Object.keys(f.props); y < m.length; y++) {
              var b = m[y];
              Object.prototype.hasOwnProperty.call(r.props, b) || Object.assign(r.props, $A({}, b, f.props[b]));
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
var Ml = {
  entries: function() {
    return Me;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = ql(Me), o;
    try {
      for (n.s(); !(o = n.n()).done; ) {
        var a = ur(o.value, 2), i = a[0], s = a[1];
        t.call(r, s, i, Me);
      }
    } catch (l) {
      n.e(l);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = Me.find(function(n) {
      return n[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Ml.get(t);
  },
  keys: function() {
    return Me.map(function(t) {
      var r = ur(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return Me.map(function(t) {
      var r = ur(t, 2), n = r[1];
      return n;
    });
  }
}, MA = (0, OA.default)(Ml, Ml.entries());
Qt.default = MA;
var wi = {}, Au = Object.prototype.toString, Bf = function(t) {
  var r = Au.call(t), n = r === "[object Arguments]";
  return n || (n = r !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && Au.call(t.callee) === "[object Function]"), n;
}, Hi, Cu;
function NA() {
  if (Cu)
    return Hi;
  Cu = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = Bf, o = Object.prototype.propertyIsEnumerable, a = !o.call({ toString: null }, "toString"), i = o.call(function() {
    }, "prototype"), s = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], l = function(f) {
      var y = f.constructor;
      return y && y.prototype === f;
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
    e = function(y) {
      var m = y !== null && typeof y == "object", b = r.call(y) === "[object Function]", S = n(y), p = m && r.call(y) === "[object String]", _ = [];
      if (!m && !b && !S)
        throw new TypeError("Object.keys called on a non-object");
      var w = i && b;
      if (p && y.length > 0 && !t.call(y, 0))
        for (var P = 0; P < y.length; ++P)
          _.push(String(P));
      if (S && y.length > 0)
        for (var A = 0; A < y.length; ++A)
          _.push(String(A));
      else
        for (var v in y)
          !(w && v === "prototype") && t.call(y, v) && _.push(String(v));
      if (a)
        for (var h = d(y), E = 0; E < s.length; ++E)
          !(h && s[E] === "constructor") && t.call(y, s[E]) && _.push(s[E]);
      return _;
    };
  }
  return Hi = e, Hi;
}
var BA = Array.prototype.slice, kA = Bf, Tu = Object.keys, Kr = Tu ? function(t) {
  return Tu(t);
} : NA(), Ou = Object.keys;
Kr.shim = function() {
  if (Object.keys) {
    var t = function() {
      var r = Object.keys(arguments);
      return r && r.length === arguments.length;
    }(1, 2);
    t || (Object.keys = function(n) {
      return kA(n) ? Ou(BA.call(n)) : Ou(n);
    });
  } else
    Object.keys = Kr;
  return Object.keys || Kr;
};
var Ss = Kr, DA = Error, FA = EvalError, LA = RangeError, jA = ReferenceError, kf = SyntaxError, Ar = TypeError, UA = URIError, Si = function() {
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
}, $u = typeof Symbol < "u" && Symbol, HA = Si, Cr = function() {
  return typeof $u != "function" || typeof Symbol != "function" || typeof $u("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : HA();
}, Wi = {
  __proto__: null,
  foo: {}
}, WA = Object, As = function() {
  return { __proto__: Wi }.foo === Wi.foo && !(Wi instanceof WA);
}, VA = "Function.prototype.bind called on incompatible ", GA = Object.prototype.toString, zA = Math.max, YA = "[object Function]", xu = function(t, r) {
  for (var n = [], o = 0; o < t.length; o += 1)
    n[o] = t[o];
  for (var a = 0; a < r.length; a += 1)
    n[a + t.length] = r[a];
  return n;
}, KA = function(t, r) {
  for (var n = [], o = r || 0, a = 0; o < t.length; o += 1, a += 1)
    n[a] = t[o];
  return n;
}, XA = function(e, t) {
  for (var r = "", n = 0; n < e.length; n += 1)
    r += e[n], n + 1 < e.length && (r += t);
  return r;
}, JA = function(t) {
  var r = this;
  if (typeof r != "function" || GA.apply(r) !== YA)
    throw new TypeError(VA + r);
  for (var n = KA(arguments, 1), o, a = function() {
    if (this instanceof o) {
      var c = r.apply(
        this,
        xu(n, arguments)
      );
      return Object(c) === c ? c : this;
    }
    return r.apply(
      t,
      xu(n, arguments)
    );
  }, i = zA(0, r.length - n.length), s = [], l = 0; l < i; l++)
    s[l] = "$" + l;
  if (o = Function("binder", "return function (" + XA(s, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var u = function() {
    };
    u.prototype = r.prototype, o.prototype = new u(), u.prototype = null;
  }
  return o;
}, QA = JA, Tr = Function.prototype.bind || QA, ZA = Function.prototype.call, eC = Object.prototype.hasOwnProperty, tC = Tr, Ai = tC.call(ZA, eC), x, rC = DA, nC = FA, oC = LA, aC = jA, Ft = kf, qt = Ar, iC = UA, Df = Function, Vi = function(e) {
  try {
    return Df('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, nt = Object.getOwnPropertyDescriptor;
if (nt)
  try {
    nt({}, "");
  } catch {
    nt = null;
  }
var Gi = function() {
  throw new qt();
}, lC = nt ? function() {
  try {
    return arguments.callee, Gi;
  } catch {
    try {
      return nt(arguments, "callee").get;
    } catch {
      return Gi;
    }
  }
}() : Gi, Rt = Cr(), sC = As(), V = Object.getPrototypeOf || (sC ? function(e) {
  return e.__proto__;
} : null), Tt = {}, uC = typeof Uint8Array > "u" || !V ? x : V(Uint8Array), ot = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? x : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? x : ArrayBuffer,
  "%ArrayIteratorPrototype%": Rt && V ? V([][Symbol.iterator]()) : x,
  "%AsyncFromSyncIteratorPrototype%": x,
  "%AsyncFunction%": Tt,
  "%AsyncGenerator%": Tt,
  "%AsyncGeneratorFunction%": Tt,
  "%AsyncIteratorPrototype%": Tt,
  "%Atomics%": typeof Atomics > "u" ? x : Atomics,
  "%BigInt%": typeof BigInt > "u" ? x : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? x : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? x : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? x : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": rC,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": nC,
  "%Float32Array%": typeof Float32Array > "u" ? x : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? x : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? x : FinalizationRegistry,
  "%Function%": Df,
  "%GeneratorFunction%": Tt,
  "%Int8Array%": typeof Int8Array > "u" ? x : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? x : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? x : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Rt && V ? V(V([][Symbol.iterator]())) : x,
  "%JSON%": typeof JSON == "object" ? JSON : x,
  "%Map%": typeof Map > "u" ? x : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Rt || !V ? x : V((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? x : Promise,
  "%Proxy%": typeof Proxy > "u" ? x : Proxy,
  "%RangeError%": oC,
  "%ReferenceError%": aC,
  "%Reflect%": typeof Reflect > "u" ? x : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? x : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Rt || !V ? x : V((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? x : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Rt && V ? V(""[Symbol.iterator]()) : x,
  "%Symbol%": Rt ? Symbol : x,
  "%SyntaxError%": Ft,
  "%ThrowTypeError%": lC,
  "%TypedArray%": uC,
  "%TypeError%": qt,
  "%Uint8Array%": typeof Uint8Array > "u" ? x : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? x : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? x : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? x : Uint32Array,
  "%URIError%": iC,
  "%WeakMap%": typeof WeakMap > "u" ? x : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? x : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? x : WeakSet
};
if (V)
  try {
    null.error;
  } catch (e) {
    var cC = V(V(e));
    ot["%Error.prototype%"] = cC;
  }
var dC = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Vi("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Vi("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Vi("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var o = e("%AsyncGenerator%");
    o && V && (r = V(o.prototype));
  }
  return ot[t] = r, r;
}, Iu = {
  __proto__: null,
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
}, Or = Tr, pn = Ai, fC = Or.call(Function.call, Array.prototype.concat), pC = Or.call(Function.apply, Array.prototype.splice), qu = Or.call(Function.call, String.prototype.replace), yn = Or.call(Function.call, String.prototype.slice), yC = Or.call(Function.call, RegExp.prototype.exec), vC = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, mC = /\\(\\)?/g, bC = function(t) {
  var r = yn(t, 0, 1), n = yn(t, -1);
  if (r === "%" && n !== "%")
    throw new Ft("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Ft("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return qu(t, vC, function(a, i, s, l) {
    o[o.length] = s ? qu(l, mC, "$1") : i || a;
  }), o;
}, hC = function(t, r) {
  var n = t, o;
  if (pn(Iu, n) && (o = Iu[n], n = "%" + o[0] + "%"), pn(ot, n)) {
    var a = ot[n];
    if (a === Tt && (a = dC(n)), typeof a > "u" && !r)
      throw new qt("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: a
    };
  }
  throw new Ft("intrinsic " + t + " does not exist!");
}, Ae = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new qt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new qt('"allowMissing" argument must be a boolean');
  if (yC(/^%?[^%]*%?$/, t) === null)
    throw new Ft("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = bC(t), o = n.length > 0 ? n[0] : "", a = hC("%" + o + "%", r), i = a.name, s = a.value, l = !1, u = a.alias;
  u && (o = u[0], pC(n, fC([0, 1], u)));
  for (var c = 1, d = !0; c < n.length; c += 1) {
    var f = n[c], y = yn(f, 0, 1), m = yn(f, -1);
    if ((y === '"' || y === "'" || y === "`" || m === '"' || m === "'" || m === "`") && y !== m)
      throw new Ft("property names with quotes must have matching quotes");
    if ((f === "constructor" || !d) && (l = !0), o += "." + f, i = "%" + o + "%", pn(ot, i))
      s = ot[i];
    else if (s != null) {
      if (!(f in s)) {
        if (!r)
          throw new qt("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (nt && c + 1 >= n.length) {
        var b = nt(s, f);
        d = !!b, d && "get" in b && !("originalValue" in b.get) ? s = b.get : s = s[f];
      } else
        d = pn(s, f), s = s[f];
      d && !l && (ot[i] = s);
    }
  }
  return s;
}, gC = Ae, Xr = gC("%Object.defineProperty%", !0) || !1;
if (Xr)
  try {
    Xr({}, "a", { value: 1 });
  } catch {
    Xr = !1;
  }
var Cs = Xr, EC = Ae, Jr = EC("%Object.getOwnPropertyDescriptor%", !0);
if (Jr)
  try {
    Jr([], "length");
  } catch {
    Jr = null;
  }
var Ci = Jr, Mu = Cs, _C = kf, Pt = Ar, Nu = Ci, Ts = function(t, r, n) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new Pt("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Pt("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Pt("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Pt("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Pt("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Pt("`loose`, if provided, must be a boolean");
  var o = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, l = !!Nu && Nu(t, r);
  if (Mu)
    Mu(t, r, {
      configurable: i === null && l ? l.configurable : !i,
      enumerable: o === null && l ? l.enumerable : !o,
      value: n,
      writable: a === null && l ? l.writable : !a
    });
  else if (s || !o && !a && !i)
    t[r] = n;
  else
    throw new _C("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Nl = Cs, Ff = function() {
  return !!Nl;
};
Ff.hasArrayLengthDefineBug = function() {
  if (!Nl)
    return null;
  try {
    return Nl([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Os = Ff, RC = Ss, PC = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", wC = Object.prototype.toString, SC = Array.prototype.concat, Bu = Ts, AC = function(e) {
  return typeof e == "function" && wC.call(e) === "[object Function]";
}, Lf = Os(), CC = function(e, t, r, n) {
  if (t in e) {
    if (n === !0) {
      if (e[t] === r)
        return;
    } else if (!AC(n) || !n())
      return;
  }
  Lf ? Bu(e, t, r, !0) : Bu(e, t, r);
}, jf = function(e, t) {
  var r = arguments.length > 2 ? arguments[2] : {}, n = RC(t);
  PC && (n = SC.call(n, Object.getOwnPropertySymbols(t)));
  for (var o = 0; o < n.length; o += 1)
    CC(e, n[o], t[n[o]], r[n[o]]);
};
jf.supportsDescriptors = !!Lf;
var yt = jf, Uf = { exports: {} }, TC = Ae, ku = Ts, OC = Os(), Du = Ci, Fu = Ar, $C = TC("%Math.floor%"), xC = function(t, r) {
  if (typeof t != "function")
    throw new Fu("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || $C(r) !== r)
    throw new Fu("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], o = !0, a = !0;
  if ("length" in t && Du) {
    var i = Du(t, "length");
    i && !i.configurable && (o = !1), i && !i.writable && (a = !1);
  }
  return (o || a || !n) && (OC ? ku(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r,
    !0,
    !0
  ) : ku(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r
  )), t;
};
(function(e) {
  var t = Tr, r = Ae, n = xC, o = Ar, a = r("%Function.prototype.apply%"), i = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || t.call(i, a), l = Cs, u = r("%Math.max%");
  e.exports = function(f) {
    if (typeof f != "function")
      throw new o("a function is required");
    var y = s(t, i, arguments);
    return n(
      y,
      1 + u(0, f.length - (arguments.length - 1)),
      !0
    );
  };
  var c = function() {
    return s(t, a, arguments);
  };
  l ? l(e.exports, "apply", { value: c }) : e.exports.apply = c;
})(Uf);
var vt = Uf.exports, Hf = Ae, Wf = vt, IC = Wf(Hf("String.prototype.indexOf")), ne = function(t, r) {
  var n = Hf(t, !!r);
  return typeof n == "function" && IC(t, ".prototype.") > -1 ? Wf(n) : n;
}, qC = Ss, Vf = Si(), Gf = ne, Lu = Object, MC = Gf("Array.prototype.push"), ju = Gf("Object.prototype.propertyIsEnumerable"), NC = Vf ? Object.getOwnPropertySymbols : null, zf = function(t, r) {
  if (t == null)
    throw new TypeError("target must be an object");
  var n = Lu(t);
  if (arguments.length === 1)
    return n;
  for (var o = 1; o < arguments.length; ++o) {
    var a = Lu(arguments[o]), i = qC(a), s = Vf && (Object.getOwnPropertySymbols || NC);
    if (s)
      for (var l = s(a), u = 0; u < l.length; ++u) {
        var c = l[u];
        ju(a, c) && MC(i, c);
      }
    for (var d = 0; d < i.length; ++d) {
      var f = i[d];
      if (ju(a, f)) {
        var y = a[f];
        n[f] = y;
      }
    }
  }
  return n;
}, zi = zf, BC = function() {
  if (!Object.assign)
    return !1;
  for (var e = "abcdefghijklmnopqrst", t = e.split(""), r = {}, n = 0; n < t.length; ++n)
    r[t[n]] = t[n];
  var o = Object.assign({}, r), a = "";
  for (var i in o)
    a += i;
  return e !== a;
}, kC = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var e = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(e, "xy");
  } catch {
    return e[1] === "y";
  }
  return !1;
}, Yf = function() {
  return !Object.assign || BC() || kC() ? zi : Object.assign;
}, DC = yt, FC = Yf, LC = function() {
  var t = FC();
  return DC(
    Object,
    { assign: t },
    { assign: function() {
      return Object.assign !== t;
    } }
  ), t;
}, jC = yt, UC = vt, HC = zf, Kf = Yf, WC = LC, VC = UC.apply(Kf()), Xf = function(t, r) {
  return VC(Object, arguments);
};
jC(Xf, {
  getPolyfill: Kf,
  implementation: HC,
  shim: WC
});
var GC = Xf, hr = function() {
  return typeof (function() {
  }).name == "string";
}, cr = Object.getOwnPropertyDescriptor;
if (cr)
  try {
    cr([], "length");
  } catch {
    cr = null;
  }
hr.functionsHaveConfigurableNames = function() {
  if (!hr() || !cr)
    return !1;
  var t = cr(function() {
  }, "name");
  return !!t && !!t.configurable;
};
var zC = Function.prototype.bind;
hr.boundFunctionsHaveNames = function() {
  return hr() && typeof zC == "function" && (function() {
  }).bind().name !== "";
};
var YC = hr, Uu = Ts, KC = Os(), XC = YC.functionsHaveConfigurableNames(), JC = TypeError, QC = function(t, r) {
  if (typeof t != "function")
    throw new JC("`fn` is not a function");
  var n = arguments.length > 2 && !!arguments[2];
  return (!n || XC) && (KC ? Uu(t, "name", r, !0, !0) : Uu(t, "name", r)), t;
}, ZC = QC, eT = Object, tT = TypeError, Jf = ZC(function() {
  if (this != null && this !== eT(this))
    throw new tT("RegExp.prototype.flags getter called on non-object");
  var t = "";
  return this.hasIndices && (t += "d"), this.global && (t += "g"), this.ignoreCase && (t += "i"), this.multiline && (t += "m"), this.dotAll && (t += "s"), this.unicode && (t += "u"), this.unicodeSets && (t += "v"), this.sticky && (t += "y"), t;
}, "get flags", !0), rT = Jf, nT = yt.supportsDescriptors, oT = Object.getOwnPropertyDescriptor, Qf = function() {
  if (nT && /a/mig.flags === "gim") {
    var t = oT(RegExp.prototype, "flags");
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
  return rT;
}, aT = yt.supportsDescriptors, iT = Qf, lT = Object.getOwnPropertyDescriptor, sT = Object.defineProperty, uT = TypeError, Hu = Object.getPrototypeOf, cT = /a/, dT = function() {
  if (!aT || !Hu)
    throw new uT("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var t = iT(), r = Hu(cT), n = lT(r, "flags");
  return (!n || n.get !== t) && sT(r, "flags", {
    configurable: !0,
    enumerable: !1,
    get: t
  }), t;
}, fT = yt, pT = vt, yT = Jf, Zf = Qf, vT = dT, ep = pT(Zf());
fT(ep, {
  getPolyfill: Zf,
  implementation: yT,
  shim: vT
});
var mT = ep, Qr = { exports: {} }, bT = Si, Qe = function() {
  return bT() && !!Symbol.toStringTag;
}, hT = Qe(), gT = ne, Bl = gT("Object.prototype.toString"), Ti = function(t) {
  return hT && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : Bl(t) === "[object Arguments]";
}, tp = function(t) {
  return Ti(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && Bl(t) !== "[object Array]" && Bl(t.callee) === "[object Function]";
}, ET = function() {
  return Ti(arguments);
}();
Ti.isLegacyArguments = tp;
var rp = ET ? Ti : tp;
const _T = {}, RT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _T
}, Symbol.toStringTag, { value: "Module" })), PT = /* @__PURE__ */ tm(RT);
var $s = typeof Map == "function" && Map.prototype, Yi = Object.getOwnPropertyDescriptor && $s ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, vn = $s && Yi && typeof Yi.get == "function" ? Yi.get : null, Wu = $s && Map.prototype.forEach, xs = typeof Set == "function" && Set.prototype, Ki = Object.getOwnPropertyDescriptor && xs ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, mn = xs && Ki && typeof Ki.get == "function" ? Ki.get : null, Vu = xs && Set.prototype.forEach, wT = typeof WeakMap == "function" && WeakMap.prototype, dr = wT ? WeakMap.prototype.has : null, ST = typeof WeakSet == "function" && WeakSet.prototype, fr = ST ? WeakSet.prototype.has : null, AT = typeof WeakRef == "function" && WeakRef.prototype, Gu = AT ? WeakRef.prototype.deref : null, CT = Boolean.prototype.valueOf, TT = Object.prototype.toString, OT = Function.prototype.toString, $T = String.prototype.match, Is = String.prototype.slice, Fe = String.prototype.replace, xT = String.prototype.toUpperCase, zu = String.prototype.toLowerCase, np = RegExp.prototype.test, Yu = Array.prototype.concat, pe = Array.prototype.join, IT = Array.prototype.slice, Ku = Math.floor, kl = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Xi = Object.getOwnPropertySymbols, Dl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Lt = typeof Symbol == "function" && typeof Symbol.iterator == "object", Q = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Lt || "symbol") ? Symbol.toStringTag : null, op = Object.prototype.propertyIsEnumerable, Xu = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Ju(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || np.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -Ku(-e) : Ku(e);
    if (n !== e) {
      var o = String(n), a = Is.call(t, o.length + 1);
      return Fe.call(o, r, "$&_") + "." + Fe.call(Fe.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Fe.call(t, r, "$&_");
}
var Fl = PT, Qu = Fl.custom, Zu = ip(Qu) ? Qu : null, qT = function e(t, r, n, o) {
  var a = r || {};
  if (Ne(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Ne(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = Ne(a, "customInspect") ? a.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Ne(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Ne(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return sp(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var l = String(t);
    return s ? Ju(t, l) : l;
  }
  if (typeof t == "bigint") {
    var u = String(t) + "n";
    return s ? Ju(t, u) : u;
  }
  var c = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= c && c > 0 && typeof t == "object")
    return Ll(t) ? "[Array]" : "[Object]";
  var d = JT(a, n);
  if (typeof o > "u")
    o = [];
  else if (lp(o, t) >= 0)
    return "[Circular]";
  function f(R, T, N) {
    if (T && (o = IT.call(o), o.push(T)), N) {
      var W = {
        depth: a.depth
      };
      return Ne(a, "quoteStyle") && (W.quoteStyle = a.quoteStyle), e(R, W, n + 1, o);
    }
    return e(R, a, n + 1, o);
  }
  if (typeof t == "function" && !ec(t)) {
    var y = UT(t), m = Fr(t, f);
    return "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (m.length > 0 ? " { " + pe.call(m, ", ") + " }" : "");
  }
  if (ip(t)) {
    var b = Lt ? Fe.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Dl.call(t);
    return typeof t == "object" && !Lt ? nr(b) : b;
  }
  if (YT(t)) {
    for (var S = "<" + zu.call(String(t.nodeName)), p = t.attributes || [], _ = 0; _ < p.length; _++)
      S += " " + p[_].name + "=" + ap(MT(p[_].value), "double", a);
    return S += ">", t.childNodes && t.childNodes.length && (S += "..."), S += "</" + zu.call(String(t.nodeName)) + ">", S;
  }
  if (Ll(t)) {
    if (t.length === 0)
      return "[]";
    var w = Fr(t, f);
    return d && !XT(w) ? "[" + jl(w, d) + "]" : "[ " + pe.call(w, ", ") + " ]";
  }
  if (BT(t)) {
    var P = Fr(t, f);
    return !("cause" in Error.prototype) && "cause" in t && !op.call(t, "cause") ? "{ [" + String(t) + "] " + pe.call(Yu.call("[cause]: " + f(t.cause), P), ", ") + " }" : P.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + pe.call(P, ", ") + " }";
  }
  if (typeof t == "object" && i) {
    if (Zu && typeof t[Zu] == "function" && Fl)
      return Fl(t, { depth: c - n });
    if (i !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (HT(t)) {
    var A = [];
    return Wu && Wu.call(t, function(R, T) {
      A.push(f(T, t, !0) + " => " + f(R, t));
    }), tc("Map", vn.call(t), A, d);
  }
  if (GT(t)) {
    var v = [];
    return Vu && Vu.call(t, function(R) {
      v.push(f(R, t));
    }), tc("Set", mn.call(t), v, d);
  }
  if (WT(t))
    return Ji("WeakMap");
  if (zT(t))
    return Ji("WeakSet");
  if (VT(t))
    return Ji("WeakRef");
  if (DT(t))
    return nr(f(Number(t)));
  if (LT(t))
    return nr(f(kl.call(t)));
  if (FT(t))
    return nr(CT.call(t));
  if (kT(t))
    return nr(f(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (t === Ln)
    return "{ [object globalThis] }";
  if (!NT(t) && !ec(t)) {
    var h = Fr(t, f), E = Xu ? Xu(t) === Object.prototype : t instanceof Object || t.constructor === Object, B = t instanceof Object ? "" : "null prototype", U = !E && Q && Object(t) === t && Q in t ? Is.call(Ze(t), 8, -1) : B ? "Object" : "", j = E || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", H = j + (U || B ? "[" + pe.call(Yu.call([], U || [], B || []), ": ") + "] " : "");
    return h.length === 0 ? H + "{}" : d ? H + "{" + jl(h, d) + "}" : H + "{ " + pe.call(h, ", ") + " }";
  }
  return String(t);
};
function ap(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function MT(e) {
  return Fe.call(String(e), /"/g, "&quot;");
}
function Ll(e) {
  return Ze(e) === "[object Array]" && (!Q || !(typeof e == "object" && Q in e));
}
function NT(e) {
  return Ze(e) === "[object Date]" && (!Q || !(typeof e == "object" && Q in e));
}
function ec(e) {
  return Ze(e) === "[object RegExp]" && (!Q || !(typeof e == "object" && Q in e));
}
function BT(e) {
  return Ze(e) === "[object Error]" && (!Q || !(typeof e == "object" && Q in e));
}
function kT(e) {
  return Ze(e) === "[object String]" && (!Q || !(typeof e == "object" && Q in e));
}
function DT(e) {
  return Ze(e) === "[object Number]" && (!Q || !(typeof e == "object" && Q in e));
}
function FT(e) {
  return Ze(e) === "[object Boolean]" && (!Q || !(typeof e == "object" && Q in e));
}
function ip(e) {
  if (Lt)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !Dl)
    return !1;
  try {
    return Dl.call(e), !0;
  } catch {
  }
  return !1;
}
function LT(e) {
  if (!e || typeof e != "object" || !kl)
    return !1;
  try {
    return kl.call(e), !0;
  } catch {
  }
  return !1;
}
var jT = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function Ne(e, t) {
  return jT.call(e, t);
}
function Ze(e) {
  return TT.call(e);
}
function UT(e) {
  if (e.name)
    return e.name;
  var t = $T.call(OT.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function lp(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function HT(e) {
  if (!vn || !e || typeof e != "object")
    return !1;
  try {
    vn.call(e);
    try {
      mn.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function WT(e) {
  if (!dr || !e || typeof e != "object")
    return !1;
  try {
    dr.call(e, dr);
    try {
      fr.call(e, fr);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function VT(e) {
  if (!Gu || !e || typeof e != "object")
    return !1;
  try {
    return Gu.call(e), !0;
  } catch {
  }
  return !1;
}
function GT(e) {
  if (!mn || !e || typeof e != "object")
    return !1;
  try {
    mn.call(e);
    try {
      vn.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function zT(e) {
  if (!fr || !e || typeof e != "object")
    return !1;
  try {
    fr.call(e, fr);
    try {
      dr.call(e, dr);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function YT(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function sp(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return sp(Is.call(e, 0, t.maxStringLength), t) + n;
  }
  var o = Fe.call(Fe.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, KT);
  return ap(o, "single", t);
}
function KT(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + xT.call(t.toString(16));
}
function nr(e) {
  return "Object(" + e + ")";
}
function Ji(e) {
  return e + " { ? }";
}
function tc(e, t, r, n) {
  var o = n ? jl(r, n) : pe.call(r, ", ");
  return e + " (" + t + ") {" + o + "}";
}
function XT(e) {
  for (var t = 0; t < e.length; t++)
    if (lp(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function JT(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = pe.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: pe.call(Array(t + 1), r)
  };
}
function jl(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + pe.call(e, "," + r) + `
` + t.prev;
}
function Fr(e, t) {
  var r = Ll(e), n = [];
  if (r) {
    n.length = e.length;
    for (var o = 0; o < e.length; o++)
      n[o] = Ne(e, o) ? t(e[o], e) : "";
  }
  var a = typeof Xi == "function" ? Xi(e) : [], i;
  if (Lt) {
    i = {};
    for (var s = 0; s < a.length; s++)
      i["$" + a[s]] = a[s];
  }
  for (var l in e)
    Ne(e, l) && (r && String(Number(l)) === l && l < e.length || Lt && i["$" + l] instanceof Symbol || (np.call(/[^\w$]/, l) ? n.push(t(l, e) + ": " + t(e[l], e)) : n.push(l + ": " + t(e[l], e))));
  if (typeof Xi == "function")
    for (var u = 0; u < a.length; u++)
      op.call(e, a[u]) && n.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
  return n;
}
var up = Ae, Zt = ne, QT = qT, ZT = Ar, Lr = up("%WeakMap%", !0), jr = up("%Map%", !0), eO = Zt("WeakMap.prototype.get", !0), tO = Zt("WeakMap.prototype.set", !0), rO = Zt("WeakMap.prototype.has", !0), nO = Zt("Map.prototype.get", !0), oO = Zt("Map.prototype.set", !0), aO = Zt("Map.prototype.has", !0), qs = function(e, t) {
  for (var r = e, n; (n = r.next) !== null; r = n)
    if (n.key === t)
      return r.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = n, n;
}, iO = function(e, t) {
  var r = qs(e, t);
  return r && r.value;
}, lO = function(e, t, r) {
  var n = qs(e, t);
  n ? n.value = r : e.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: r
  };
}, sO = function(e, t) {
  return !!qs(e, t);
}, cp = function() {
  var t, r, n, o = {
    assert: function(a) {
      if (!o.has(a))
        throw new ZT("Side channel does not contain " + QT(a));
    },
    get: function(a) {
      if (Lr && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return eO(t, a);
      } else if (jr) {
        if (r)
          return nO(r, a);
      } else if (n)
        return iO(n, a);
    },
    has: function(a) {
      if (Lr && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return rO(t, a);
      } else if (jr) {
        if (r)
          return aO(r, a);
      } else if (n)
        return sO(n, a);
      return !1;
    },
    set: function(a, i) {
      Lr && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new Lr()), tO(t, a, i)) : jr ? (r || (r = new jr()), oO(r, a, i)) : (n || (n = { key: {}, next: null }), lO(n, a, i));
    }
  };
  return o;
}, uO = Ae, cO = Ai, or = cp(), he = uO("%TypeError%"), Ms = {
  assert: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new he("`O` is not an object");
    if (typeof t != "string")
      throw new he("`slot` must be a string");
    if (or.assert(e), !Ms.has(e, t))
      throw new he("`" + t + "` is not present on `O`");
  },
  get: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new he("`O` is not an object");
    if (typeof t != "string")
      throw new he("`slot` must be a string");
    var r = or.get(e);
    return r && r["$" + t];
  },
  has: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new he("`O` is not an object");
    if (typeof t != "string")
      throw new he("`slot` must be a string");
    var r = or.get(e);
    return !!r && cO(r, "$" + t);
  },
  set: function(e, t, r) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new he("`O` is not an object");
    if (typeof t != "string")
      throw new he("`slot` must be a string");
    var n = or.get(e);
    n || (n = {}, or.set(e, n)), n["$" + t] = r;
  }
};
Object.freeze && Object.freeze(Ms);
var dO = Ms, ar = dO, fO = SyntaxError, rc = typeof StopIteration == "object" ? StopIteration : null, pO = function(t) {
  if (!rc)
    throw new fO("this environment lacks StopIteration");
  ar.set(t, "[[Done]]", !1);
  var r = {
    next: function() {
      var o = ar.get(this, "[[Iterator]]"), a = ar.get(o, "[[Done]]");
      try {
        return {
          done: a,
          value: a ? void 0 : o.next()
        };
      } catch (i) {
        if (ar.set(o, "[[Done]]", !0), i !== rc)
          throw i;
        return {
          done: !0,
          value: void 0
        };
      }
    }
  };
  return ar.set(r, "[[Iterator]]", t), r;
}, yO = {}.toString, dp = Array.isArray || function(e) {
  return yO.call(e) == "[object Array]";
}, vO = String.prototype.valueOf, mO = function(t) {
  try {
    return vO.call(t), !0;
  } catch {
    return !1;
  }
}, bO = Object.prototype.toString, hO = "[object String]", gO = Qe(), fp = function(t) {
  return typeof t == "string" ? !0 : typeof t != "object" ? !1 : gO ? mO(t) : bO.call(t) === hO;
}, Ns = typeof Map == "function" && Map.prototype ? Map : null, EO = typeof Set == "function" && Set.prototype ? Set : null, bn;
Ns || (bn = function(t) {
  return !1;
});
var pp = Ns ? Map.prototype.has : null, nc = EO ? Set.prototype.has : null;
!bn && !pp && (bn = function(t) {
  return !1;
});
var yp = bn || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (pp.call(t), nc)
      try {
        nc.call(t);
      } catch {
        return !0;
      }
    return t instanceof Ns;
  } catch {
  }
  return !1;
}, _O = typeof Map == "function" && Map.prototype ? Map : null, Bs = typeof Set == "function" && Set.prototype ? Set : null, hn;
Bs || (hn = function(t) {
  return !1;
});
var oc = _O ? Map.prototype.has : null, vp = Bs ? Set.prototype.has : null;
!hn && !vp && (hn = function(t) {
  return !1;
});
var mp = hn || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (vp.call(t), oc)
      try {
        oc.call(t);
      } catch {
        return !0;
      }
    return t instanceof Bs;
  } catch {
  }
  return !1;
}, ac = rp, ic = pO;
if (Cr() || Si()) {
  var Qi = Symbol.iterator;
  Qr.exports = function(t) {
    if (t != null && typeof t[Qi] < "u")
      return t[Qi]();
    if (ac(t))
      return Array.prototype[Qi].call(t);
  };
} else {
  var RO = dp, PO = fp, lc = Ae, wO = lc("%Map%", !0), SO = lc("%Set%", !0), le = ne, sc = le("Array.prototype.push"), uc = le("String.prototype.charCodeAt"), AO = le("String.prototype.slice"), CO = function(t, r) {
    var n = t.length;
    if (r + 1 >= n)
      return r + 1;
    var o = uc(t, r);
    if (o < 55296 || o > 56319)
      return r + 1;
    var a = uc(t, r + 1);
    return a < 56320 || a > 57343 ? r + 1 : r + 2;
  }, Zi = function(t) {
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
  }, cc = function(t, r) {
    if (RO(t) || ac(t))
      return Zi(t);
    if (PO(t)) {
      var n = 0;
      return {
        next: function() {
          var a = CO(t, n), i = AO(t, n, a);
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
  if (!wO && !SO)
    Qr.exports = function(t) {
      if (t != null)
        return cc(t, !0);
    };
  else {
    var TO = yp, OO = mp, dc = le("Map.prototype.forEach", !0), fc = le("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var pc = le("Map.prototype.iterator", !0), yc = le("Set.prototype.iterator", !0);
    var vc = le("Map.prototype.@@iterator", !0) || le("Map.prototype._es6-shim iterator_", !0), mc = le("Set.prototype.@@iterator", !0) || le("Set.prototype._es6-shim iterator_", !0), $O = function(t) {
      if (TO(t)) {
        if (pc)
          return ic(pc(t));
        if (vc)
          return vc(t);
        if (dc) {
          var r = [];
          return dc(t, function(o, a) {
            sc(r, [a, o]);
          }), Zi(r);
        }
      }
      if (OO(t)) {
        if (yc)
          return ic(yc(t));
        if (mc)
          return mc(t);
        if (fc) {
          var n = [];
          return fc(t, function(o) {
            sc(n, o);
          }), Zi(n);
        }
      }
    };
    Qr.exports = function(t) {
      return $O(t) || cc(t);
    };
  }
}
var xO = Qr.exports, bc = function(e) {
  return e !== e;
}, bp = function(t, r) {
  return t === 0 && r === 0 ? 1 / t === 1 / r : !!(t === r || bc(t) && bc(r));
}, IO = bp, hp = function() {
  return typeof Object.is == "function" ? Object.is : IO;
}, qO = hp, MO = yt, NO = function() {
  var t = qO();
  return MO(Object, { is: t }, {
    is: function() {
      return Object.is !== t;
    }
  }), t;
}, BO = yt, kO = vt, DO = bp, gp = hp, FO = NO, Ep = kO(gp(), Object);
BO(Ep, {
  getPolyfill: gp,
  implementation: DO,
  shim: FO
});
var LO = Ep, I, jt = SyntaxError, _p = Function, Mt = TypeError, el = function(e) {
  try {
    return _p('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, at = Object.getOwnPropertyDescriptor;
if (at)
  try {
    at({}, "");
  } catch {
    at = null;
  }
var tl = function() {
  throw new Mt();
}, jO = at ? function() {
  try {
    return arguments.callee, tl;
  } catch {
    try {
      return at(arguments, "callee").get;
    } catch {
      return tl;
    }
  }
}() : tl, wt = Cr(), UO = As(), G = Object.getPrototypeOf || (UO ? function(e) {
  return e.__proto__;
} : null), Ot = {}, HO = typeof Uint8Array > "u" || !G ? I : G(Uint8Array), it = {
  "%AggregateError%": typeof AggregateError > "u" ? I : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? I : ArrayBuffer,
  "%ArrayIteratorPrototype%": wt && G ? G([][Symbol.iterator]()) : I,
  "%AsyncFromSyncIteratorPrototype%": I,
  "%AsyncFunction%": Ot,
  "%AsyncGenerator%": Ot,
  "%AsyncGeneratorFunction%": Ot,
  "%AsyncIteratorPrototype%": Ot,
  "%Atomics%": typeof Atomics > "u" ? I : Atomics,
  "%BigInt%": typeof BigInt > "u" ? I : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? I : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? I : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? I : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? I : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? I : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? I : FinalizationRegistry,
  "%Function%": _p,
  "%GeneratorFunction%": Ot,
  "%Int8Array%": typeof Int8Array > "u" ? I : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? I : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? I : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": wt && G ? G(G([][Symbol.iterator]())) : I,
  "%JSON%": typeof JSON == "object" ? JSON : I,
  "%Map%": typeof Map > "u" ? I : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !wt || !G ? I : G((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? I : Promise,
  "%Proxy%": typeof Proxy > "u" ? I : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? I : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? I : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !wt || !G ? I : G((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? I : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": wt && G ? G(""[Symbol.iterator]()) : I,
  "%Symbol%": wt ? Symbol : I,
  "%SyntaxError%": jt,
  "%ThrowTypeError%": jO,
  "%TypedArray%": HO,
  "%TypeError%": Mt,
  "%Uint8Array%": typeof Uint8Array > "u" ? I : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? I : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? I : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? I : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? I : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? I : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? I : WeakSet
};
if (G)
  try {
    null.error;
  } catch (e) {
    var WO = G(G(e));
    it["%Error.prototype%"] = WO;
  }
var VO = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = el("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = el("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = el("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var o = e("%AsyncGenerator%");
    o && G && (r = G(o.prototype));
  }
  return it[t] = r, r;
}, hc = {
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
}, $r = Tr, gn = Ai, GO = $r.call(Function.call, Array.prototype.concat), zO = $r.call(Function.apply, Array.prototype.splice), gc = $r.call(Function.call, String.prototype.replace), En = $r.call(Function.call, String.prototype.slice), YO = $r.call(Function.call, RegExp.prototype.exec), KO = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, XO = /\\(\\)?/g, JO = function(t) {
  var r = En(t, 0, 1), n = En(t, -1);
  if (r === "%" && n !== "%")
    throw new jt("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new jt("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return gc(t, KO, function(a, i, s, l) {
    o[o.length] = s ? gc(l, XO, "$1") : i || a;
  }), o;
}, QO = function(t, r) {
  var n = t, o;
  if (gn(hc, n) && (o = hc[n], n = "%" + o[0] + "%"), gn(it, n)) {
    var a = it[n];
    if (a === Ot && (a = VO(n)), typeof a > "u" && !r)
      throw new Mt("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: a
    };
  }
  throw new jt("intrinsic " + t + " does not exist!");
}, ZO = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new Mt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Mt('"allowMissing" argument must be a boolean');
  if (YO(/^%?[^%]*%?$/, t) === null)
    throw new jt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = JO(t), o = n.length > 0 ? n[0] : "", a = QO("%" + o + "%", r), i = a.name, s = a.value, l = !1, u = a.alias;
  u && (o = u[0], zO(n, GO([0, 1], u)));
  for (var c = 1, d = !0; c < n.length; c += 1) {
    var f = n[c], y = En(f, 0, 1), m = En(f, -1);
    if ((y === '"' || y === "'" || y === "`" || m === '"' || m === "'" || m === "`") && y !== m)
      throw new jt("property names with quotes must have matching quotes");
    if ((f === "constructor" || !d) && (l = !0), o += "." + f, i = "%" + o + "%", gn(it, i))
      s = it[i];
    else if (s != null) {
      if (!(f in s)) {
        if (!r)
          throw new Mt("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (at && c + 1 >= n.length) {
        var b = at(s, f);
        d = !!b, d && "get" in b && !("originalValue" in b.get) ? s = b.get : s = s[f];
      } else
        d = gn(s, f), s = s[f];
      d && !l && (it[i] = s);
    }
  }
  return s;
}, Rp = Function.prototype.toString, xt = typeof Reflect == "object" && Reflect !== null && Reflect.apply, Ul, Zr;
if (typeof xt == "function" && typeof Object.defineProperty == "function")
  try {
    Ul = Object.defineProperty({}, "length", {
      get: function() {
        throw Zr;
      }
    }), Zr = {}, xt(function() {
      throw 42;
    }, null, Ul);
  } catch (e) {
    e !== Zr && (xt = null);
  }
else
  xt = null;
var e0 = /^\s*class\b/, Hl = function(t) {
  try {
    var r = Rp.call(t);
    return e0.test(r);
  } catch {
    return !1;
  }
}, rl = function(t) {
  try {
    return Hl(t) ? !1 : (Rp.call(t), !0);
  } catch {
    return !1;
  }
}, en = Object.prototype.toString, t0 = "[object Object]", r0 = "[object Function]", n0 = "[object GeneratorFunction]", o0 = "[object HTMLAllCollection]", a0 = "[object HTML document.all class]", i0 = "[object HTMLCollection]", l0 = typeof Symbol == "function" && !!Symbol.toStringTag, s0 = !(0 in [,]), Wl = function() {
  return !1;
};
if (typeof document == "object") {
  var u0 = document.all;
  en.call(u0) === en.call(document.all) && (Wl = function(t) {
    if ((s0 || !t) && (typeof t > "u" || typeof t == "object"))
      try {
        var r = en.call(t);
        return (r === o0 || r === a0 || r === i0 || r === t0) && t("") == null;
      } catch {
      }
    return !1;
  });
}
var c0 = xt ? function(t) {
  if (Wl(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  try {
    xt(t, null, Ul);
  } catch (r) {
    if (r !== Zr)
      return !1;
  }
  return !Hl(t) && rl(t);
} : function(t) {
  if (Wl(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (l0)
    return rl(t);
  if (Hl(t))
    return !1;
  var r = en.call(t);
  return r !== r0 && r !== n0 && !/^\[object HTML/.test(r) ? !1 : rl(t);
}, d0 = c0, f0 = Object.prototype.toString, Pp = Object.prototype.hasOwnProperty, p0 = function(t, r, n) {
  for (var o = 0, a = t.length; o < a; o++)
    Pp.call(t, o) && (n == null ? r(t[o], o, t) : r.call(n, t[o], o, t));
}, y0 = function(t, r, n) {
  for (var o = 0, a = t.length; o < a; o++)
    n == null ? r(t.charAt(o), o, t) : r.call(n, t.charAt(o), o, t);
}, v0 = function(t, r, n) {
  for (var o in t)
    Pp.call(t, o) && (n == null ? r(t[o], o, t) : r.call(n, t[o], o, t));
}, m0 = function(t, r, n) {
  if (!d0(r))
    throw new TypeError("iterator must be a function");
  var o;
  arguments.length >= 3 && (o = n), f0.call(t) === "[object Array]" ? p0(t, r, o) : typeof t == "string" ? y0(t, r, o) : v0(t, r, o);
}, wp = m0, b0 = [
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array"
], nl = b0, h0 = typeof globalThis > "u" ? Ln : globalThis, Sp = function() {
  for (var t = [], r = 0; r < nl.length; r++)
    typeof h0[nl[r]] == "function" && (t[t.length] = nl[r]);
  return t;
}, _n = wp, g0 = Sp, Ec = vt, ks = ne, tn = Ci, E0 = ks("Object.prototype.toString"), Ap = Qe(), _c = typeof globalThis > "u" ? Ln : globalThis, Vl = g0(), Ds = ks("String.prototype.slice"), ol = Object.getPrototypeOf, _0 = ks("Array.prototype.indexOf", !0) || function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n] === r)
      return n;
  return -1;
}, Rn = { __proto__: null };
Ap && tn && ol ? _n(Vl, function(e) {
  var t = new _c[e]();
  if (Symbol.toStringTag in t) {
    var r = ol(t), n = tn(r, Symbol.toStringTag);
    if (!n) {
      var o = ol(r);
      n = tn(o, Symbol.toStringTag);
    }
    Rn["$" + e] = Ec(n.get);
  }
}) : _n(Vl, function(e) {
  var t = new _c[e](), r = t.slice || t.set;
  r && (Rn["$" + e] = Ec(r));
});
var R0 = function(t) {
  var r = !1;
  return _n(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    Rn,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(n, o) {
      if (!r)
        try {
          "$" + n(t) === o && (r = Ds(o, 1));
        } catch {
        }
    }
  ), r;
}, P0 = function(t) {
  var r = !1;
  return _n(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    Rn,
    /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */
    function(n, o) {
      if (!r)
        try {
          n(t), r = Ds(o, 1);
        } catch {
        }
    }
  ), r;
}, w0 = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!Ap) {
    var r = Ds(E0(t), 8, -1);
    return _0(Vl, r) > -1 ? r : r !== "Object" ? !1 : P0(t);
  }
  return tn ? R0(t) : null;
}, S0 = w0, A0 = function(t) {
  return !!S0(t);
}, C0 = vt, T0 = ne, Cp = ZO, O0 = A0, Rc = Cp("ArrayBuffer", !0), Pc = Cp("Float32Array", !0), rn = T0("ArrayBuffer.prototype.byteLength", !0), wc = Rc && !rn && new Rc().slice, Sc = wc && C0(wc), Tp = rn || Sc ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return rn ? rn(t) : Sc(t, 0), !0;
  } catch {
    return !1;
  }
} : Pc ? function(t) {
  try {
    return new Pc(t).buffer === t && !O0(t);
  } catch (r) {
    return typeof t == "object" && r.name === "RangeError";
  }
} : function(t) {
  return !1;
}, $0 = Date.prototype.getDay, x0 = function(t) {
  try {
    return $0.call(t), !0;
  } catch {
    return !1;
  }
}, I0 = Object.prototype.toString, q0 = "[object Date]", M0 = Qe(), N0 = function(t) {
  return typeof t != "object" || t === null ? !1 : M0 ? x0(t) : I0.call(t) === q0;
}, Gl = ne, Op = Qe(), $p, xp, zl, Yl;
if (Op) {
  $p = Gl("Object.prototype.hasOwnProperty"), xp = Gl("RegExp.prototype.exec"), zl = {};
  var al = function() {
    throw zl;
  };
  Yl = {
    toString: al,
    valueOf: al
  }, typeof Symbol.toPrimitive == "symbol" && (Yl[Symbol.toPrimitive] = al);
}
var B0 = Gl("Object.prototype.toString"), k0 = Object.getOwnPropertyDescriptor, D0 = "[object RegExp]", F0 = Op ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  var r = k0(t, "lastIndex"), n = r && $p(r, "value");
  if (!n)
    return !1;
  try {
    xp(t, Yl);
  } catch (o) {
    return o === zl;
  }
} : function(t) {
  return !t || typeof t != "object" && typeof t != "function" ? !1 : B0(t) === D0;
}, L0 = ne, Ac = L0("SharedArrayBuffer.prototype.byteLength", !0), j0 = Ac ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return Ac(t), !0;
  } catch {
    return !1;
  }
} : function(t) {
  return !1;
}, U0 = Number.prototype.toString, H0 = function(t) {
  try {
    return U0.call(t), !0;
  } catch {
    return !1;
  }
}, W0 = Object.prototype.toString, V0 = "[object Number]", G0 = Qe(), z0 = function(t) {
  return typeof t == "number" ? !0 : typeof t != "object" ? !1 : G0 ? H0(t) : W0.call(t) === V0;
}, Ip = ne, Y0 = Ip("Boolean.prototype.toString"), K0 = Ip("Object.prototype.toString"), X0 = function(t) {
  try {
    return Y0(t), !0;
  } catch {
    return !1;
  }
}, J0 = "[object Boolean]", Q0 = Qe(), Z0 = function(t) {
  return typeof t == "boolean" ? !0 : t === null || typeof t != "object" ? !1 : Q0 && Symbol.toStringTag in t ? X0(t) : K0(t) === J0;
}, Kl = { exports: {} }, e$ = Object.prototype.toString, t$ = Cr();
if (t$) {
  var r$ = Symbol.prototype.toString, n$ = /^Symbol\(.*\)$/, o$ = function(t) {
    return typeof t.valueOf() != "symbol" ? !1 : n$.test(r$.call(t));
  };
  Kl.exports = function(t) {
    if (typeof t == "symbol")
      return !0;
    if (e$.call(t) !== "[object Symbol]")
      return !1;
    try {
      return o$(t);
    } catch {
      return !1;
    }
  };
} else
  Kl.exports = function(t) {
    return !1;
  };
var a$ = Kl.exports, Xl = { exports: {} }, Cc = typeof BigInt < "u" && BigInt, i$ = function() {
  return typeof Cc == "function" && typeof BigInt == "function" && typeof Cc(42) == "bigint" && typeof BigInt(42) == "bigint";
}, l$ = i$();
if (l$) {
  var s$ = BigInt.prototype.valueOf, u$ = function(t) {
    try {
      return s$.call(t), !0;
    } catch {
    }
    return !1;
  };
  Xl.exports = function(t) {
    return t === null || typeof t > "u" || typeof t == "boolean" || typeof t == "string" || typeof t == "number" || typeof t == "symbol" || typeof t == "function" ? !1 : typeof t == "bigint" ? !0 : u$(t);
  };
} else
  Xl.exports = function(t) {
    return !1;
  };
var c$ = Xl.exports, d$ = fp, f$ = z0, p$ = Z0, y$ = a$, v$ = c$, m$ = function(t) {
  if (t == null || typeof t != "object" && typeof t != "function")
    return null;
  if (d$(t))
    return "String";
  if (f$(t))
    return "Number";
  if (p$(t))
    return "Boolean";
  if (y$(t))
    return "Symbol";
  if (v$(t))
    return "BigInt";
}, Pn = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, Tc = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, wn;
Pn || (wn = function(t) {
  return !1;
});
var Jl = Pn ? Pn.prototype.has : null, il = Tc ? Tc.prototype.has : null;
!wn && !Jl && (wn = function(t) {
  return !1;
});
var b$ = wn || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (Jl.call(t, Jl), il)
      try {
        il.call(t, il);
      } catch {
        return !0;
      }
    return t instanceof Pn;
  } catch {
  }
  return !1;
}, Ql = { exports: {} }, q, Ut = SyntaxError, qp = Function, Nt = TypeError, ll = function(e) {
  try {
    return qp('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, lt = Object.getOwnPropertyDescriptor;
if (lt)
  try {
    lt({}, "");
  } catch {
    lt = null;
  }
var sl = function() {
  throw new Nt();
}, h$ = lt ? function() {
  try {
    return arguments.callee, sl;
  } catch {
    try {
      return lt(arguments, "callee").get;
    } catch {
      return sl;
    }
  }
}() : sl, St = Cr(), g$ = As(), z = Object.getPrototypeOf || (g$ ? function(e) {
  return e.__proto__;
} : null), $t = {}, E$ = typeof Uint8Array > "u" || !z ? q : z(Uint8Array), st = {
  "%AggregateError%": typeof AggregateError > "u" ? q : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? q : ArrayBuffer,
  "%ArrayIteratorPrototype%": St && z ? z([][Symbol.iterator]()) : q,
  "%AsyncFromSyncIteratorPrototype%": q,
  "%AsyncFunction%": $t,
  "%AsyncGenerator%": $t,
  "%AsyncGeneratorFunction%": $t,
  "%AsyncIteratorPrototype%": $t,
  "%Atomics%": typeof Atomics > "u" ? q : Atomics,
  "%BigInt%": typeof BigInt > "u" ? q : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? q : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? q : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? q : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? q : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? q : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? q : FinalizationRegistry,
  "%Function%": qp,
  "%GeneratorFunction%": $t,
  "%Int8Array%": typeof Int8Array > "u" ? q : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? q : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? q : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": St && z ? z(z([][Symbol.iterator]())) : q,
  "%JSON%": typeof JSON == "object" ? JSON : q,
  "%Map%": typeof Map > "u" ? q : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !St || !z ? q : z((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? q : Promise,
  "%Proxy%": typeof Proxy > "u" ? q : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? q : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? q : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !St || !z ? q : z((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? q : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": St && z ? z(""[Symbol.iterator]()) : q,
  "%Symbol%": St ? Symbol : q,
  "%SyntaxError%": Ut,
  "%ThrowTypeError%": h$,
  "%TypedArray%": E$,
  "%TypeError%": Nt,
  "%Uint8Array%": typeof Uint8Array > "u" ? q : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? q : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? q : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? q : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? q : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? q : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? q : WeakSet
};
if (z)
  try {
    null.error;
  } catch (e) {
    var _$ = z(z(e));
    st["%Error.prototype%"] = _$;
  }
var R$ = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = ll("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = ll("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = ll("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var o = e("%AsyncGenerator%");
    o && z && (r = z(o.prototype));
  }
  return st[t] = r, r;
}, Oc = {
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
}, xr = Tr, Sn = Ai, P$ = xr.call(Function.call, Array.prototype.concat), w$ = xr.call(Function.apply, Array.prototype.splice), $c = xr.call(Function.call, String.prototype.replace), An = xr.call(Function.call, String.prototype.slice), S$ = xr.call(Function.call, RegExp.prototype.exec), A$ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, C$ = /\\(\\)?/g, T$ = function(t) {
  var r = An(t, 0, 1), n = An(t, -1);
  if (r === "%" && n !== "%")
    throw new Ut("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Ut("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return $c(t, A$, function(a, i, s, l) {
    o[o.length] = s ? $c(l, C$, "$1") : i || a;
  }), o;
}, O$ = function(t, r) {
  var n = t, o;
  if (Sn(Oc, n) && (o = Oc[n], n = "%" + o[0] + "%"), Sn(st, n)) {
    var a = st[n];
    if (a === $t && (a = R$(n)), typeof a > "u" && !r)
      throw new Nt("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: a
    };
  }
  throw new Ut("intrinsic " + t + " does not exist!");
}, $$ = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new Nt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Nt('"allowMissing" argument must be a boolean');
  if (S$(/^%?[^%]*%?$/, t) === null)
    throw new Ut("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = T$(t), o = n.length > 0 ? n[0] : "", a = O$("%" + o + "%", r), i = a.name, s = a.value, l = !1, u = a.alias;
  u && (o = u[0], w$(n, P$([0, 1], u)));
  for (var c = 1, d = !0; c < n.length; c += 1) {
    var f = n[c], y = An(f, 0, 1), m = An(f, -1);
    if ((y === '"' || y === "'" || y === "`" || m === '"' || m === "'" || m === "`") && y !== m)
      throw new Ut("property names with quotes must have matching quotes");
    if ((f === "constructor" || !d) && (l = !0), o += "." + f, i = "%" + o + "%", Sn(st, i))
      s = st[i];
    else if (s != null) {
      if (!(f in s)) {
        if (!r)
          throw new Nt("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (lt && c + 1 >= n.length) {
        var b = lt(s, f);
        d = !!b, d && "get" in b && !("originalValue" in b.get) ? s = b.get : s = s[f];
      } else
        d = Sn(s, f), s = s[f];
      d && !l && (st[i] = s);
    }
  }
  return s;
}, x$ = $$, Mp = ne, I$ = x$("%WeakSet%", !0), ul = Mp("WeakSet.prototype.has", !0);
if (ul) {
  var cl = Mp("WeakMap.prototype.has", !0);
  Ql.exports = function(t) {
    if (!t || typeof t != "object")
      return !1;
    try {
      if (ul(t, ul), cl)
        try {
          cl(t, cl);
        } catch {
          return !0;
        }
      return t instanceof I$;
    } catch {
    }
    return !1;
  };
} else
  Ql.exports = function(t) {
    return !1;
  };
var q$ = Ql.exports, M$ = yp, N$ = mp, B$ = b$, k$ = q$, D$ = function(t) {
  if (t && typeof t == "object") {
    if (M$(t))
      return "Map";
    if (N$(t))
      return "Set";
    if (B$(t))
      return "WeakMap";
    if (k$(t))
      return "WeakSet";
  }
  return !1;
}, Cn = wp, F$ = Sp, xc = vt, Fs = ne, nn = Ci, L$ = Fs("Object.prototype.toString"), Np = Qe(), Ic = typeof globalThis > "u" ? Ln : globalThis, Zl = F$(), Ls = Fs("String.prototype.slice"), dl = Object.getPrototypeOf, j$ = Fs("Array.prototype.indexOf", !0) || function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n] === r)
      return n;
  return -1;
}, Tn = { __proto__: null };
Np && nn && dl ? Cn(Zl, function(e) {
  var t = new Ic[e]();
  if (Symbol.toStringTag in t) {
    var r = dl(t), n = nn(r, Symbol.toStringTag);
    if (!n) {
      var o = dl(r);
      n = nn(o, Symbol.toStringTag);
    }
    Tn["$" + e] = xc(n.get);
  }
}) : Cn(Zl, function(e) {
  var t = new Ic[e](), r = t.slice || t.set;
  r && (Tn["$" + e] = xc(r));
});
var U$ = function(t) {
  var r = !1;
  return Cn(Tn, function(n, o) {
    if (!r)
      try {
        "$" + n(t) === o && (r = Ls(o, 1));
      } catch {
      }
  }), r;
}, H$ = function(t) {
  var r = !1;
  return Cn(Tn, function(n, o) {
    if (!r)
      try {
        n(t), r = Ls(o, 1);
      } catch {
      }
  }), r;
}, W$ = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!Np) {
    var r = Ls(L$(t), 8, -1);
    return j$(Zl, r) > -1 ? r : r !== "Object" ? !1 : H$(t);
  }
  return nn ? U$(t) : null;
}, V$ = ne, qc = V$("ArrayBuffer.prototype.byteLength", !0), G$ = Tp, z$ = function(t) {
  return G$(t) ? qc ? qc(t) : t.byteLength : NaN;
}, Bp = GC, ye = ne, Mc = mT, Y$ = Ae, Ht = xO, K$ = cp, Nc = LO, Bc = rp, kc = dp, Dc = Tp, Fc = N0, Lc = F0, jc = j0, Uc = Ss, Hc = m$, Wc = D$, Vc = W$, Gc = z$, zc = ye("SharedArrayBuffer.prototype.byteLength", !0), Yc = ye("Date.prototype.getTime"), fl = Object.getPrototypeOf, Kc = ye("Object.prototype.toString"), On = Y$("%Set%", !0), es = ye("Map.prototype.has", !0), $n = ye("Map.prototype.get", !0), Xc = ye("Map.prototype.size", !0), xn = ye("Set.prototype.add", !0), kp = ye("Set.prototype.delete", !0), In = ye("Set.prototype.has", !0), on = ye("Set.prototype.size", !0);
function Jc(e, t, r, n) {
  for (var o = Ht(e), a; (a = o.next()) && !a.done; )
    if (fe(t, a.value, r, n))
      return kp(e, a.value), !0;
  return !1;
}
function Dp(e) {
  if (typeof e > "u")
    return null;
  if (typeof e != "object")
    return typeof e == "symbol" ? !1 : typeof e == "string" || typeof e == "number" ? +e == +e : !0;
}
function X$(e, t, r, n, o, a) {
  var i = Dp(r);
  if (i != null)
    return i;
  var s = $n(t, i), l = Bp({}, o, { strict: !1 });
  return typeof s > "u" && !es(t, i) || !fe(n, s, l, a) ? !1 : !es(e, i) && fe(n, s, l, a);
}
function J$(e, t, r) {
  var n = Dp(r);
  return n ?? (In(t, n) && !In(e, n));
}
function Qc(e, t, r, n, o, a) {
  for (var i = Ht(e), s, l; (s = i.next()) && !s.done; )
    if (l = s.value, // eslint-disable-next-line no-use-before-define
    fe(r, l, o, a) && fe(n, $n(t, l), o, a))
      return kp(e, l), !0;
  return !1;
}
function fe(e, t, r, n) {
  var o = r || {};
  if (o.strict ? Nc(e, t) : e === t)
    return !0;
  var a = Hc(e), i = Hc(t);
  if (a !== i)
    return !1;
  if (!e || !t || typeof e != "object" && typeof t != "object")
    return o.strict ? Nc(e, t) : e == t;
  var s = n.has(e), l = n.has(t), u;
  if (s && l) {
    if (n.get(e) === n.get(t))
      return !0;
  } else
    u = {};
  return s || n.set(e, u), l || n.set(t, u), ex(e, t, o, n);
}
function Zc(e) {
  return !e || typeof e != "object" || typeof e.length != "number" || typeof e.copy != "function" || typeof e.slice != "function" || e.length > 0 && typeof e[0] != "number" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function Q$(e, t, r, n) {
  if (on(e) !== on(t))
    return !1;
  for (var o = Ht(e), a = Ht(t), i, s, l; (i = o.next()) && !i.done; )
    if (i.value && typeof i.value == "object")
      l || (l = new On()), xn(l, i.value);
    else if (!In(t, i.value)) {
      if (r.strict || !J$(e, t, i.value))
        return !1;
      l || (l = new On()), xn(l, i.value);
    }
  if (l) {
    for (; (s = a.next()) && !s.done; )
      if (s.value && typeof s.value == "object") {
        if (!Jc(l, s.value, r.strict, n))
          return !1;
      } else if (!r.strict && !In(e, s.value) && !Jc(l, s.value, r.strict, n))
        return !1;
    return on(l) === 0;
  }
  return !0;
}
function Z$(e, t, r, n) {
  if (Xc(e) !== Xc(t))
    return !1;
  for (var o = Ht(e), a = Ht(t), i, s, l, u, c, d; (i = o.next()) && !i.done; )
    if (u = i.value[0], c = i.value[1], u && typeof u == "object")
      l || (l = new On()), xn(l, u);
    else if (d = $n(t, u), typeof d > "u" && !es(t, u) || !fe(c, d, r, n)) {
      if (r.strict || !X$(e, t, u, c, r, n))
        return !1;
      l || (l = new On()), xn(l, u);
    }
  if (l) {
    for (; (s = a.next()) && !s.done; )
      if (u = s.value[0], d = s.value[1], u && typeof u == "object") {
        if (!Qc(l, e, u, d, r, n))
          return !1;
      } else if (!r.strict && (!e.has(u) || !fe($n(e, u), d, r, n)) && !Qc(l, e, u, d, Bp({}, r, { strict: !1 }), n))
        return !1;
    return on(l) === 0;
  }
  return !0;
}
function ex(e, t, r, n) {
  var o, a;
  if (typeof e != typeof t || e == null || t == null || Kc(e) !== Kc(t) || Bc(e) !== Bc(t))
    return !1;
  var i = kc(e), s = kc(t);
  if (i !== s)
    return !1;
  var l = e instanceof Error, u = t instanceof Error;
  if (l !== u || (l || u) && (e.name !== t.name || e.message !== t.message))
    return !1;
  var c = Lc(e), d = Lc(t);
  if (c !== d || (c || d) && (e.source !== t.source || Mc(e) !== Mc(t)))
    return !1;
  var f = Fc(e), y = Fc(t);
  if (f !== y || (f || y) && Yc(e) !== Yc(t) || r.strict && fl && fl(e) !== fl(t))
    return !1;
  var m = Vc(e), b = Vc(t);
  if (m !== b)
    return !1;
  if (m || b) {
    if (e.length !== t.length)
      return !1;
    for (o = 0; o < e.length; o++)
      if (e[o] !== t[o])
        return !1;
    return !0;
  }
  var S = Zc(e), p = Zc(t);
  if (S !== p)
    return !1;
  if (S || p) {
    if (e.length !== t.length)
      return !1;
    for (o = 0; o < e.length; o++)
      if (e[o] !== t[o])
        return !1;
    return !0;
  }
  var _ = Dc(e), w = Dc(t);
  if (_ !== w)
    return !1;
  if (_ || w)
    return Gc(e) !== Gc(t) ? !1 : typeof Uint8Array == "function" && fe(new Uint8Array(e), new Uint8Array(t), r, n);
  var P = jc(e), A = jc(t);
  if (P !== A)
    return !1;
  if (P || A)
    return zc(e) !== zc(t) ? !1 : typeof Uint8Array == "function" && fe(new Uint8Array(e), new Uint8Array(t), r, n);
  if (typeof e != typeof t)
    return !1;
  var v = Uc(e), h = Uc(t);
  if (v.length !== h.length)
    return !1;
  for (v.sort(), h.sort(), o = v.length - 1; o >= 0; o--)
    if (v[o] != h[o])
      return !1;
  for (o = v.length - 1; o >= 0; o--)
    if (a = v[o], !fe(e[a], t[a], r, n))
      return !1;
  var E = Wc(e), B = Wc(t);
  return E !== B ? !1 : E === "Set" || B === "Set" ? Q$(e, t, r, n) : E === "Map" ? Z$(e, t, r, n) : !0;
}
var tx = function(t, r, n) {
  return fe(t, r, n, K$());
};
Object.defineProperty(wi, "__esModule", {
  value: !0
});
wi.default = void 0;
var rx = js(tx), nx = js(pt), Fp = js(Qt);
function js(e) {
  return e && e.__esModule ? e : { default: e };
}
function pl(e, t) {
  return ix(e) || ax(e, t) || Lp(e, t) || ox();
}
function ox() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ax(e, t) {
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
function ix(e) {
  if (Array.isArray(e))
    return e;
}
function lx(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Lp(e)) || t && e && typeof e.length == "number") {
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
function Lp(e, t) {
  if (e) {
    if (typeof e == "string")
      return ed(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ed(e, t);
  }
}
function ed(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Be = [], td = Fp.default.keys();
for (var yl = 0; yl < td.length; yl++) {
  var vl = td[yl], ml = Fp.default.get(vl);
  if (ml)
    for (var rd = [].concat(ml.baseConcepts, ml.relatedConcepts), bl = 0; bl < rd.length; bl++) {
      var nd = rd[bl];
      if (nd.module === "HTML") {
        var hl = nd.concept;
        hl && function() {
          var e = JSON.stringify(hl), t = Be.find(function(a) {
            return JSON.stringify(a[0]) === e;
          }), r = void 0;
          t ? r = t[1] : r = [];
          for (var n = !0, o = 0; o < r.length; o++)
            if (r[o] === vl) {
              n = !1;
              break;
            }
          n && r.push(vl), Be.push([hl, r]);
        }();
      }
    }
}
var ts = {
  entries: function() {
    return Be;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = lx(Be), o;
    try {
      for (n.s(); !(o = n.n()).done; ) {
        var a = pl(o.value, 2), i = a[0], s = a[1];
        t.call(r, s, i, Be);
      }
    } catch (l) {
      n.e(l);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = Be.find(function(n) {
      return (0, rx.default)(t, n[0]);
    });
    return r && r[1];
  },
  has: function(t) {
    return !!ts.get(t);
  },
  keys: function() {
    return Be.map(function(t) {
      var r = pl(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return Be.map(function(t) {
      var r = pl(t, 2), n = r[1];
      return n;
    });
  }
}, sx = (0, nx.default)(ts, ts.entries());
wi.default = sx;
var Oi = {};
Object.defineProperty(Oi, "__esModule", {
  value: !0
});
Oi.default = void 0;
var ux = Up(pt), jp = Up(Qt);
function Up(e) {
  return e && e.__esModule ? e : { default: e };
}
function gl(e, t) {
  return fx(e) || dx(e, t) || Hp(e, t) || cx();
}
function cx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dx(e, t) {
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
function fx(e) {
  if (Array.isArray(e))
    return e;
}
function px(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Hp(e)) || t && e && typeof e.length == "number") {
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
function Hp(e, t) {
  if (e) {
    if (typeof e == "string")
      return od(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return od(e, t);
  }
}
function od(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var ke = [], Wp = jp.default.keys(), yx = function(t) {
  var r = Wp[t], n = jp.default.get(r);
  if (n)
    for (var o = [].concat(n.baseConcepts, n.relatedConcepts), a = 0; a < o.length; a++) {
      var i = o[a];
      if (i.module === "HTML") {
        var s = i.concept;
        if (s) {
          var l = ke.find(function(c) {
            return c[0] === r;
          }), u = void 0;
          l ? u = l[1] : u = [], u.push(s), ke.push([r, u]);
        }
      }
    }
};
for (var El = 0; El < Wp.length; El++)
  yx(El);
var rs = {
  entries: function() {
    return ke;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = px(ke), o;
    try {
      for (n.s(); !(o = n.n()).done; ) {
        var a = gl(o.value, 2), i = a[0], s = a[1];
        t.call(r, s, i, ke);
      }
    } catch (l) {
      n.e(l);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = ke.find(function(n) {
      return n[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!rs.get(t);
  },
  keys: function() {
    return ke.map(function(t) {
      var r = gl(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return ke.map(function(t) {
      var r = gl(t, 2), n = r[1];
      return n;
    });
  }
}, vx = (0, ux.default)(rs, rs.entries());
Oi.default = vx;
Object.defineProperty(de, "__esModule", {
  value: !0
});
var se = de.roles = Gp = de.roleElements = Vp = de.elementRoles = de.dom = de.aria = void 0, mx = Ir(Un), bx = Ir(Wn), hx = Ir(Qt), gx = Ir(wi), Ex = Ir(Oi);
function Ir(e) {
  return e && e.__esModule ? e : { default: e };
}
var _x = mx.default;
de.aria = _x;
var Rx = bx.default;
de.dom = Rx;
var Px = hx.default;
se = de.roles = Px;
var wx = gx.default, Vp = de.elementRoles = wx, Sx = Ex.default, Gp = de.roleElements = Sx, Us = { exports: {} };
Us.exports;
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
          var y = u.charCodeAt(d);
          c[d * 2] = y >>> 8, c[d * 2 + 1] = y % 256;
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
        return u.forEach(function(y) {
          f.push(r(y));
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
        var d, f, y = {}, m = {}, b = "", S = "", p = "", _ = 2, w = 3, P = 2, A = [], v = 0, h = 0, E;
        for (E = 0; E < l.length; E += 1)
          if (b = l.charAt(E), Object.prototype.hasOwnProperty.call(y, b) || (y[b] = w++, m[b] = !0), S = p + b, Object.prototype.hasOwnProperty.call(y, S))
            p = S;
          else {
            if (Object.prototype.hasOwnProperty.call(m, p)) {
              if (p.charCodeAt(0) < 256) {
                for (d = 0; d < P; d++)
                  v = v << 1, h == u - 1 ? (h = 0, A.push(c(v)), v = 0) : h++;
                for (f = p.charCodeAt(0), d = 0; d < 8; d++)
                  v = v << 1 | f & 1, h == u - 1 ? (h = 0, A.push(c(v)), v = 0) : h++, f = f >> 1;
              } else {
                for (f = 1, d = 0; d < P; d++)
                  v = v << 1 | f, h == u - 1 ? (h = 0, A.push(c(v)), v = 0) : h++, f = 0;
                for (f = p.charCodeAt(0), d = 0; d < 16; d++)
                  v = v << 1 | f & 1, h == u - 1 ? (h = 0, A.push(c(v)), v = 0) : h++, f = f >> 1;
              }
              _--, _ == 0 && (_ = Math.pow(2, P), P++), delete m[p];
            } else
              for (f = y[p], d = 0; d < P; d++)
                v = v << 1 | f & 1, h == u - 1 ? (h = 0, A.push(c(v)), v = 0) : h++, f = f >> 1;
            _--, _ == 0 && (_ = Math.pow(2, P), P++), y[S] = w++, p = String(b);
          }
        if (p !== "") {
          if (Object.prototype.hasOwnProperty.call(m, p)) {
            if (p.charCodeAt(0) < 256) {
              for (d = 0; d < P; d++)
                v = v << 1, h == u - 1 ? (h = 0, A.push(c(v)), v = 0) : h++;
              for (f = p.charCodeAt(0), d = 0; d < 8; d++)
                v = v << 1 | f & 1, h == u - 1 ? (h = 0, A.push(c(v)), v = 0) : h++, f = f >> 1;
            } else {
              for (f = 1, d = 0; d < P; d++)
                v = v << 1 | f, h == u - 1 ? (h = 0, A.push(c(v)), v = 0) : h++, f = 0;
              for (f = p.charCodeAt(0), d = 0; d < 16; d++)
                v = v << 1 | f & 1, h == u - 1 ? (h = 0, A.push(c(v)), v = 0) : h++, f = f >> 1;
            }
            _--, _ == 0 && (_ = Math.pow(2, P), P++), delete m[p];
          } else
            for (f = y[p], d = 0; d < P; d++)
              v = v << 1 | f & 1, h == u - 1 ? (h = 0, A.push(c(v)), v = 0) : h++, f = f >> 1;
          _--, _ == 0 && (_ = Math.pow(2, P), P++);
        }
        for (f = 2, d = 0; d < P; d++)
          v = v << 1 | f & 1, h == u - 1 ? (h = 0, A.push(c(v)), v = 0) : h++, f = f >> 1;
        for (; ; )
          if (v = v << 1, h == u - 1) {
            A.push(c(v));
            break;
          } else
            h++;
        return A.join("");
      },
      decompress: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32768, function(u) {
          return l.charCodeAt(u);
        });
      },
      _decompress: function(l, u, c) {
        var d = [], f = 4, y = 4, m = 3, b = "", S = [], p, _, w, P, A, v, h, E = { val: c(0), position: u, index: 1 };
        for (p = 0; p < 3; p += 1)
          d[p] = p;
        for (w = 0, A = Math.pow(2, 2), v = 1; v != A; )
          P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = c(E.index++)), w |= (P > 0 ? 1 : 0) * v, v <<= 1;
        switch (w) {
          case 0:
            for (w = 0, A = Math.pow(2, 8), v = 1; v != A; )
              P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = c(E.index++)), w |= (P > 0 ? 1 : 0) * v, v <<= 1;
            h = r(w);
            break;
          case 1:
            for (w = 0, A = Math.pow(2, 16), v = 1; v != A; )
              P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = c(E.index++)), w |= (P > 0 ? 1 : 0) * v, v <<= 1;
            h = r(w);
            break;
          case 2:
            return "";
        }
        for (d[3] = h, _ = h, S.push(h); ; ) {
          if (E.index > l)
            return "";
          for (w = 0, A = Math.pow(2, m), v = 1; v != A; )
            P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = c(E.index++)), w |= (P > 0 ? 1 : 0) * v, v <<= 1;
          switch (h = w) {
            case 0:
              for (w = 0, A = Math.pow(2, 8), v = 1; v != A; )
                P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = c(E.index++)), w |= (P > 0 ? 1 : 0) * v, v <<= 1;
              d[y++] = r(w), h = y - 1, f--;
              break;
            case 1:
              for (w = 0, A = Math.pow(2, 16), v = 1; v != A; )
                P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = c(E.index++)), w |= (P > 0 ? 1 : 0) * v, v <<= 1;
              d[y++] = r(w), h = y - 1, f--;
              break;
            case 2:
              return S.join("");
          }
          if (f == 0 && (f = Math.pow(2, m), m++), d[h])
            b = d[h];
          else if (h === y)
            b = _ + _.charAt(0);
          else
            return null;
          S.push(b), d[y++] = _ + b.charAt(0), f--, _ = b, f == 0 && (f = Math.pow(2, m), m++);
        }
      }
    };
    return s;
  }();
  e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return t;
  });
})(Us);
var Ax = Us.exports;
const Cx = /* @__PURE__ */ rm(Ax);
function zp(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const Tx = (e, t, r, n, o, a, i) => {
  const s = n + r.indent, l = r.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, r, s, o, a);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = r.spacingOuter + s + d + r.spacingOuter + n), d = "{" + d + "}"), r.spacingInner + n + l.prop.open + u + l.prop.close + "=" + l.value.open + d + l.value.close;
  }).join("");
}, Ox = 3, $x = (e, t, r, n, o, a) => e.map((i) => {
  const s = typeof i == "string" ? Yp(i, t) : a(i, t, r, n, o);
  return s === "" && typeof i == "object" && i !== null && i.nodeType !== Ox ? "" : t.spacingOuter + r + s;
}).join(""), Yp = (e, t) => {
  const r = t.colors.content;
  return r.open + zp(e) + r.close;
}, xx = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + zp(e) + "-->" + r.close;
}, Ix = (e, t, r, n, o) => {
  const a = n.colors.tag;
  return a.open + "<" + e + (t && a.close + t + n.spacingOuter + o + a.open) + (r ? ">" + a.close + r + n.spacingOuter + o + a.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + a.close;
}, qx = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
}, Mx = 1, Kp = 3, Xp = 8, Jp = 11, Nx = /^((HTML|SVG)\w*)?Element$/, Bx = (e) => {
  const t = e.constructor.name, {
    nodeType: r,
    tagName: n
  } = e, o = typeof n == "string" && n.includes("-") || typeof e.hasAttribute == "function" && e.hasAttribute("is");
  return r === Mx && (Nx.test(t) || o) || r === Kp && t === "Text" || r === Xp && t === "Comment" || r === Jp && t === "DocumentFragment";
};
function kx(e) {
  return e.nodeType === Kp;
}
function Dx(e) {
  return e.nodeType === Xp;
}
function _l(e) {
  return e.nodeType === Jp;
}
function Fx(e) {
  return {
    test: (t) => {
      var r;
      return (t == null || (r = t.constructor) == null ? void 0 : r.name) && Bx(t);
    },
    serialize: (t, r, n, o, a, i) => {
      if (kx(t))
        return Yp(t.data, r);
      if (Dx(t))
        return xx(t.data, r);
      const s = _l(t) ? "DocumentFragment" : t.tagName.toLowerCase();
      return ++o > r.maxDepth ? qx(s, r) : Ix(s, Tx(_l(t) ? [] : Array.from(t.attributes).map((l) => l.name).sort(), _l(t) ? {} : Array.from(t.attributes).reduce((l, u) => (l[u.name] = u.value, l), {}), r, n + r.indent, o, a, i), $x(Array.prototype.slice.call(t.childNodes || t.children).filter(e), r, n + r.indent, o, a, i), r, n);
    }
  };
}
let Qp = null, Hs = null, Ws = null;
try {
  const e = module && module.require;
  Hs = e.call(module, "fs").readFileSync, Ws = e.call(module, "@babel/code-frame").codeFrameColumns, Qp = e.call(module, "chalk");
} catch {
}
function Lx(e) {
  const t = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.slice(t, r), o = n.split(":"), [a, i, s] = [o[0], parseInt(o[1], 10), parseInt(o[2], 10)];
  let l = "";
  try {
    l = Hs(a, "utf-8");
  } catch {
    return "";
  }
  const u = Ws(l, {
    start: {
      line: i,
      column: s
    }
  }, {
    highlightCode: !0,
    linesBelow: 0
  });
  return Qp.dim(n) + `
` + u + `
`;
}
function jx() {
  if (!Hs || !Ws)
    return "";
  const t = new Error().stack.split(`
`).slice(1).find((r) => !r.includes("node_modules/"));
  return Lx(t);
}
const Zp = 3;
function Rl() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function Vs() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function ey(e) {
  if (e.defaultView)
    return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window)
    return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof e.debug == "function" && typeof e.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof e + ".");
}
function Ce(e) {
  if (!e || typeof e.querySelector != "function" || typeof e.querySelectorAll != "function")
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + t(e) + ".");
  function t(r) {
    return typeof r == "object" ? r === null ? "null" : r.constructor.name : typeof r;
  }
}
const Ux = () => {
  let e;
  try {
    var t;
    e = JSON.parse((t = process) == null || (t = t.env) == null ? void 0 : t.COLORS);
  } catch {
  }
  return typeof e == "boolean" ? e : typeof process < "u" && process.versions !== void 0 && process.versions.node !== void 0;
}, {
  DOMCollection: Hx
} = _s, Wx = 1, Vx = 8;
function Gx(e) {
  return e.nodeType !== Vx && (e.nodeType !== Wx || !e.matches(M().defaultIgnore));
}
function gr(e, t, r) {
  if (r === void 0 && (r = {}), e || (e = Vs().body), typeof t != "number" && (t = typeof process < "u" && process.env.DEBUG_PRINT_LIMIT || 7e3), t === 0)
    return "";
  e.documentElement && (e = e.documentElement);
  let n = typeof e;
  if (n === "object" ? n = e.constructor.name : e = {}, !("outerHTML" in e))
    throw new TypeError("Expected an element or document but got " + n);
  const {
    filterNode: o = Gx,
    ...a
  } = r, i = ff(e, {
    plugins: [Fx(o), Hx],
    printFunctionName: !1,
    highlight: Ux(),
    ...a
  });
  return t !== void 0 && e.outerHTML.length > t ? i.slice(0, t) + "..." : i;
}
const ns = function() {
  const e = jx();
  console.log(e ? gr(...arguments) + `

` + e : gr(...arguments));
};
let ut = {
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
    const r = gr(t), n = new Error([e, "Ignored nodes: comments, " + ut.defaultIgnore + `
` + r].filter(Boolean).join(`

`));
    return n.name = "TestingLibraryElementError", n;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1
};
function zx(e) {
  try {
    return ut._disableExpensiveErrorDiagnostics = !0, e();
  } finally {
    ut._disableExpensiveErrorDiagnostics = !1;
  }
}
function Yx(e) {
  typeof e == "function" && (e = e(ut)), ut = {
    ...ut,
    ...e
  };
}
function M() {
  return ut;
}
const Kx = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function ty(e) {
  return Kx.includes(e.nodeName.toLowerCase()) ? "" : e.nodeType === Zp ? e.textContent : Array.from(e.childNodes).map((t) => ty(t)).join("");
}
function os(e) {
  let t;
  return e.tagName.toLowerCase() === "label" ? t = ty(e) : t = e.value || e.textContent, t;
}
function ry(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!Xx(e))
    return [];
  const r = e.ownerDocument.querySelectorAll("label");
  return Array.from(r).filter((n) => n.control === e);
}
function Xx(e) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || e.tagName === "INPUT" && e.getAttribute("type") !== "hidden";
}
function ny(e, t, r) {
  let {
    selector: n = "*"
  } = r === void 0 ? {} : r;
  const o = t.getAttribute("aria-labelledby"), a = o ? o.split(" ") : [];
  return a.length ? a.map((i) => {
    const s = e.querySelector('[id="' + i + '"]');
    return s ? {
      content: os(s),
      formControl: null
    } : {
      content: "",
      formControl: null
    };
  }) : Array.from(ry(t)).map((i) => {
    const s = os(i), l = "button, input, meter, output, progress, select, textarea", u = Array.from(i.querySelectorAll(l)).filter((c) => c.matches(n))[0];
    return {
      content: s,
      formControl: u
    };
  });
}
function oy(e) {
  if (e == null)
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
      "It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?"
    );
}
function er(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  oy(r);
  const o = n(e);
  return typeof r == "string" || typeof r == "number" ? o.toLowerCase().includes(r.toString().toLowerCase()) : typeof r == "function" ? r(o, t) : ay(r, o);
}
function Re(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  oy(r);
  const o = n(e);
  return r instanceof Function ? r(o, t) : r instanceof RegExp ? ay(r, o) : o === String(r);
}
function Gs(e) {
  let {
    trim: t = !0,
    collapseWhitespace: r = !0
  } = e === void 0 ? {} : e;
  return (n) => {
    let o = n;
    return o = t ? o.trim() : o, o = r ? o.replace(/\s+/g, " ") : o, o;
  };
}
function mt(e) {
  let {
    trim: t,
    collapseWhitespace: r,
    normalizer: n
  } = e;
  if (!n)
    return Gs({
      trim: t,
      collapseWhitespace: r
    });
  if (typeof t < "u" || typeof r < "u")
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  return n;
}
function ay(e, t) {
  const r = e.test(t);
  return e.global && e.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), r;
}
function qr(e) {
  return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((t) => t.nodeType === Zp && !!t.textContent).map((t) => t.textContent).join("");
}
const Jx = Qx(Vp);
function iy(e) {
  return e.hidden === !0 || e.getAttribute("aria-hidden") === "true" || e.ownerDocument.defaultView.getComputedStyle(e).display === "none";
}
function $i(e, t) {
  t === void 0 && (t = {});
  const {
    isSubtreeInaccessible: r = iy
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
function zs(e) {
  for (const {
    match: t,
    roles: r
  } of Jx)
    if (t(e))
      return [...r];
  return [];
}
function Qx(e) {
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
function ly(e, t) {
  let {
    hidden: r = !1
  } = t === void 0 ? {} : t;
  function n(o) {
    return [o, ...Array.from(o.children).reduce((a, i) => [...a, ...n(i)], [])];
  }
  return n(e).filter((o) => r === !1 ? $i(o) === !1 : !0).reduce((o, a) => {
    let i = [];
    return a.hasAttribute("role") ? i = a.getAttribute("role").split(" ").slice(0, 1) : i = zs(a), i.reduce((s, l) => Array.isArray(s[l]) ? {
      ...s,
      [l]: [...s[l], a]
    } : {
      ...s,
      [l]: [a]
    }, o);
  }, {});
}
function sy(e, t) {
  let {
    hidden: r,
    includeDescription: n
  } = t;
  const o = ly(e, {
    hidden: r
  });
  return Object.entries(o).filter((a) => {
    let [i] = a;
    return i !== "generic";
  }).map((a) => {
    let [i, s] = a;
    const l = "-".repeat(50), u = s.map((c) => {
      const d = 'Name "' + Ps(c, {
        computedStyleSupportsPseudoElements: M().computedStyleSupportsPseudoElements
      }) + `":
`, f = gr(c.cloneNode(!1));
      if (n) {
        const y = 'Description "' + If(c, {
          computedStyleSupportsPseudoElements: M().computedStyleSupportsPseudoElements
        }) + `":
`;
        return "" + d + y + f;
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
const Zx = function(e, t) {
  let {
    hidden: r = !1
  } = t === void 0 ? {} : t;
  return console.log(sy(e, {
    hidden: r
  }));
};
function e1(e) {
  return e.tagName === "OPTION" ? e.selected : Mr(e, "aria-selected");
}
function t1(e) {
  return e.getAttribute("aria-busy") === "true";
}
function r1(e) {
  if (!("indeterminate" in e && e.indeterminate))
    return "checked" in e ? e.checked : Mr(e, "aria-checked");
}
function n1(e) {
  return Mr(e, "aria-pressed");
}
function o1(e) {
  var t, r;
  return (t = (r = Mr(e, "aria-current")) != null ? r : e.getAttribute("aria-current")) != null ? t : !1;
}
function a1(e) {
  return Mr(e, "aria-expanded");
}
function Mr(e, t) {
  const r = e.getAttribute(t);
  if (r === "true")
    return !0;
  if (r === "false")
    return !1;
}
function i1(e) {
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
function l1(e) {
  const t = e.getAttribute("aria-valuenow");
  return t === null ? void 0 : +t;
}
function s1(e) {
  const t = e.getAttribute("aria-valuemax");
  return t === null ? void 0 : +t;
}
function u1(e) {
  const t = e.getAttribute("aria-valuemin");
  return t === null ? void 0 : +t;
}
function c1(e) {
  const t = e.getAttribute("aria-valuetext");
  return t === null ? void 0 : t;
}
const ad = Gs();
function d1(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function id(e) {
  return new RegExp(d1(e.toLowerCase()), "i");
}
function Oe(e, t, r, n) {
  let {
    variant: o,
    name: a
  } = n, i = "";
  const s = {}, l = [["Role", "TestId"].includes(e) ? r : id(r)];
  a && (s.name = id(a)), e === "Role" && $i(t) && (s.hidden = !0, i = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
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
        let [y, m] = f;
        return y + ": " + m;
      }).join(", ") + " }" : "", u + "(" + c + d + ")";
    }
  };
}
function $e(e, t, r) {
  return r && (!t || t.toLowerCase() === e.toLowerCase());
}
function qn(e, t, r) {
  var n, o;
  if (t === void 0 && (t = "get"), e.matches(M().defaultIgnore))
    return;
  const a = (n = e.getAttribute("role")) != null ? n : (o = zs(e)) == null ? void 0 : o[0];
  if (a !== "generic" && $e("Role", r, a))
    return Oe("Role", e, a, {
      variant: t,
      name: Ps(e, {
        computedStyleSupportsPseudoElements: M().computedStyleSupportsPseudoElements
      })
    });
  const i = ny(document, e).map((f) => f.content).join(" ");
  if ($e("LabelText", r, i))
    return Oe("LabelText", e, i, {
      variant: t
    });
  const s = e.getAttribute("placeholder");
  if ($e("PlaceholderText", r, s))
    return Oe("PlaceholderText", e, s, {
      variant: t
    });
  const l = ad(qr(e));
  if ($e("Text", r, l))
    return Oe("Text", e, l, {
      variant: t
    });
  if ($e("DisplayValue", r, e.value))
    return Oe("DisplayValue", e, ad(e.value), {
      variant: t
    });
  const u = e.getAttribute("alt");
  if ($e("AltText", r, u))
    return Oe("AltText", e, u, {
      variant: t
    });
  const c = e.getAttribute("title");
  if ($e("Title", r, c))
    return Oe("Title", e, c, {
      variant: t
    });
  const d = e.getAttribute(M().testIdAttribute);
  if ($e("TestId", r, d))
    return Oe("TestId", e, d, {
      variant: t
    });
}
function Ur(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function f1(e, t) {
  let {
    container: r = Vs(),
    timeout: n = M().asyncUtilTimeout,
    showOriginalStackTrace: o = M().showOriginalStackTrace,
    stackTraceError: a,
    interval: i = 50,
    onTimeout: s = (u) => (Object.defineProperty(u, "message", {
      value: M().getElementError(u.message, r).message
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
    let d, f, y, m = !1, b = "idle";
    const S = setTimeout(A, n), p = Rl();
    if (p) {
      const {
        unstable_advanceTimersWrapper: v
      } = M();
      for (P(); !m; ) {
        if (!Rl()) {
          const h = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          o || Ur(h, a), c(h);
          return;
        }
        if (await v(async () => {
          jest.advanceTimersByTime(i);
        }), m)
          break;
        P();
      }
    } else {
      try {
        Ce(r);
      } catch (h) {
        c(h);
        return;
      }
      f = setInterval(w, i);
      const {
        MutationObserver: v
      } = ey(r);
      y = new v(w), y.observe(r, l), P();
    }
    function _(v, h) {
      m = !0, clearTimeout(S), p || (clearInterval(f), y.disconnect()), v ? c(v) : u(h);
    }
    function w() {
      if (Rl()) {
        const v = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return o || Ur(v, a), c(v);
      } else
        return P();
    }
    function P() {
      if (b !== "pending")
        try {
          const v = zx(e);
          typeof (v == null ? void 0 : v.then) == "function" ? (b = "pending", v.then((h) => {
            b = "resolved", _(null, h);
          }, (h) => {
            b = "rejected", d = h;
          })) : _(null, v);
        } catch (v) {
          d = v;
        }
    }
    function A() {
      let v;
      d ? (v = d, !o && v.name === "TestingLibraryElementError" && Ur(v, a)) : (v = new Error("Timed out in waitFor."), o || Ur(v, a)), _(s(v), null);
    }
  });
}
function Ys(e, t) {
  const r = new Error("STACK_TRACE_MESSAGE");
  return M().asyncWrapper(() => f1(e, {
    stackTraceError: r,
    ...t
  }));
}
function xi(e, t) {
  return M().getElementError(e, t);
}
function Ii(e, t) {
  return xi(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", t);
}
function bt(e, t, r, n) {
  let {
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    normalizer: s
  } = n === void 0 ? {} : n;
  const l = o ? Re : er, u = mt({
    collapseWhitespace: a,
    trim: i,
    normalizer: s
  });
  return Array.from(t.querySelectorAll("[" + e + "]")).filter((c) => l(c.getAttribute(e), c, r, u));
}
function uy(e, t, r, n) {
  const o = bt(e, t, r, n);
  if (o.length > 1)
    throw Ii("Found multiple elements by [" + e + "=" + r + "]", t);
  return o[0] || null;
}
function Wt(e, t) {
  return function(r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      o[a - 1] = arguments[a];
    const i = e(r, ...o);
    if (i.length > 1) {
      const s = i.map((l) => xi(null, l).message).join(`

`);
      throw Ii(t(r, ...o) + `

Here are the matching elements:

` + s, r);
    }
    return i[0] || null;
  };
}
function cy(e, t) {
  return M().getElementError(`A better query is available, try this:
` + e.toString() + `
`, t);
}
function Ks(e, t) {
  return function(r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      o[a - 1] = arguments[a];
    const i = e(r, ...o);
    if (!i.length)
      throw M().getElementError(t(r, ...o), r);
    return i;
  };
}
function Vt(e) {
  return (t, r, n, o) => Ys(() => e(t, r, n), {
    container: t,
    ...o
  });
}
const Ye = (e, t, r) => function(n) {
  for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
    a[i - 1] = arguments[i];
  const s = e(n, ...a), [{
    suggest: l = M().throwSuggestions
  } = {}] = a.slice(-1);
  if (s && l) {
    const u = qn(s, r);
    if (u && !t.endsWith(u.queryName))
      throw cy(u.toString(), n);
  }
  return s;
}, re = (e, t, r) => function(n) {
  for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
    a[i - 1] = arguments[i];
  const s = e(n, ...a), [{
    suggest: l = M().throwSuggestions
  } = {}] = a.slice(-1);
  if (s.length && l) {
    const u = [...new Set(s.map((c) => {
      var d;
      return (d = qn(c, r)) == null ? void 0 : d.toString();
    }))];
    if (
      // only want to suggest if all the els have the same suggestion.
      u.length === 1 && !t.endsWith(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
        qn(s[0], r).queryName
      )
    )
      throw cy(u[0], n);
  }
  return s;
};
function Te(e, t, r) {
  const n = Ye(Wt(e, t), e.name, "query"), o = Ks(e, r), a = Wt(o, t), i = Ye(a, e.name, "get"), s = re(o, e.name.replace("query", "get"), "getAll"), l = Vt(re(o, e.name, "findAll")), u = Vt(Ye(a, e.name, "find"));
  return [n, s, i, l, u];
}
var p1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getElementError: xi,
  wrapAllByQueryWithSuggestion: re,
  wrapSingleQueryWithSuggestion: Ye,
  getMultipleElementsFoundError: Ii,
  queryAllByAttribute: bt,
  queryByAttribute: uy,
  makeSingleQuery: Wt,
  makeGetAllQuery: Ks,
  makeFindQuery: Vt,
  buildQueries: Te
});
function y1(e) {
  return Array.from(e.querySelectorAll("label,input")).map((t) => ({
    node: t,
    textToMatch: os(t)
  })).filter((t) => {
    let {
      textToMatch: r
    } = t;
    return r !== null;
  });
}
const v1 = function(e, t, r) {
  let {
    exact: n = !0,
    trim: o,
    collapseWhitespace: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  const s = n ? Re : er, l = mt({
    collapseWhitespace: a,
    trim: o,
    normalizer: i
  });
  return y1(e).filter((c) => {
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
}, Er = function(e, t, r) {
  let {
    selector: n = "*",
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    normalizer: s
  } = r === void 0 ? {} : r;
  Ce(e);
  const l = o ? Re : er, u = mt({
    collapseWhitespace: a,
    trim: i,
    normalizer: s
  }), c = Array.from(e.querySelectorAll("*")).filter((d) => ry(d).length || d.hasAttribute("aria-labelledby")).reduce((d, f) => {
    const y = ny(e, f, {
      selector: n
    });
    y.filter((b) => !!b.formControl).forEach((b) => {
      l(b.content, b.formControl, t, u) && b.formControl && d.push(b.formControl);
    });
    const m = y.filter((b) => !!b.content).map((b) => b.content);
    return l(m.join(" "), f, t, u) && d.push(f), m.length > 1 && m.forEach((b, S) => {
      l(b, f, t, u) && d.push(f);
      const p = [...m];
      p.splice(S, 1), p.length > 1 && l(p.join(" "), f, t, u) && d.push(f);
    }), d;
  }, []).concat(bt("aria-label", e, t, {
    exact: o,
    normalizer: u
  }));
  return Array.from(new Set(c)).filter((d) => d.matches(n));
}, ct = function(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    n[o - 2] = arguments[o];
  const a = Er(e, t, ...n);
  if (!a.length) {
    const i = v1(e, t, ...n);
    if (i.length) {
      const s = i.map((l) => m1(e, l)).filter((l) => !!l);
      throw s.length ? M().getElementError(s.map((l) => "Found a label with the text of: " + t + ", however the element associated with this label (<" + l + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + l + " />, you can use aria-label or aria-labelledby instead.").join(`

`), e) : M().getElementError("Found a label with the text of: " + t + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, e);
    } else
      throw M().getElementError("Unable to find a label with the text of: " + t, e);
  }
  return a;
};
function m1(e, t) {
  const r = t.getAttribute("for");
  if (!r)
    return null;
  const n = e.querySelector('[id="' + r + '"]');
  return n ? n.tagName.toLowerCase() : null;
}
const dy = (e, t) => "Found multiple elements with the text of: " + t, fy = Ye(Wt(Er, dy), Er.name, "query"), py = Wt(ct, dy), yy = Vt(re(ct, ct.name, "findAll")), vy = Vt(Ye(py, ct.name, "find")), my = re(ct, ct.name, "getAll"), by = Ye(py, ct.name, "get"), hy = re(Er, Er.name, "queryAll"), as = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Ce(t[0]), bt("placeholder", ...t);
}, b1 = (e, t) => "Found multiple elements with the placeholder text of: " + t, h1 = (e, t) => "Unable to find an element with the placeholder text of: " + t, gy = re(as, as.name, "queryAll"), [Ey, _y, Ry, Py, wy] = Te(as, b1, h1), is = function(e, t, r) {
  let {
    selector: n = "*",
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    ignore: s = M().defaultIgnore,
    normalizer: l
  } = r === void 0 ? {} : r;
  Ce(e);
  const u = o ? Re : er, c = mt({
    collapseWhitespace: a,
    trim: i,
    normalizer: l
  });
  let d = [];
  return typeof e.matches == "function" && e.matches(n) && (d = [e]), [...d, ...Array.from(e.querySelectorAll(n))].filter((f) => !s || !f.matches(s)).filter((f) => u(qr(f), f, t, c));
}, g1 = (e, t) => "Found multiple elements with the text: " + t, E1 = function(e, t, r) {
  r === void 0 && (r = {});
  const {
    collapseWhitespace: n,
    trim: o,
    normalizer: a,
    selector: i
  } = r, l = mt({
    collapseWhitespace: n,
    trim: o,
    normalizer: a
  })(t.toString()), u = l !== t.toString(), c = (i ?? "*") !== "*";
  return "Unable to find an element with the text: " + (u ? l + " (normalized from '" + t + "')" : t) + (c ? ", which matches selector '" + i + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}, Sy = re(is, is.name, "queryAll"), [Ay, Cy, Ty, Oy, $y] = Te(is, g1, E1), ls = function(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  Ce(e);
  const s = n ? Re : er, l = mt({
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("input,textarea,select")).filter((u) => u.tagName === "SELECT" ? Array.from(u.options).filter((d) => d.selected).some((d) => s(qr(d), d, t, l)) : s(u.value, u, t, l));
}, _1 = (e, t) => "Found multiple elements with the display value: " + t + ".", R1 = (e, t) => "Unable to find an element with the display value: " + t + ".", xy = re(ls, ls.name, "queryAll"), [Iy, qy, My, Ny, By] = Te(ls, _1, R1), P1 = /^(img|input|area|.+-.+)$/i, ss = function(e, t, r) {
  return r === void 0 && (r = {}), Ce(e), bt("alt", e, t, r).filter((n) => P1.test(n.tagName));
}, w1 = (e, t) => "Found multiple elements with the alt text: " + t, S1 = (e, t) => "Unable to find an element with the alt text: " + t, ky = re(ss, ss.name, "queryAll"), [Dy, Fy, Ly, jy, Uy] = Te(ss, w1, S1), A1 = (e) => {
  var t;
  return e.tagName.toLowerCase() === "title" && ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === "svg";
}, us = function(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  Ce(e);
  const s = n ? Re : er, l = mt({
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("[title], svg > title")).filter((u) => s(u.getAttribute("title"), u, t, l) || A1(u) && s(qr(u), u, t, l));
}, C1 = (e, t) => "Found multiple elements with the title: " + t + ".", T1 = (e, t) => "Unable to find an element with the title: " + t + ".", Hy = re(us, us.name, "queryAll"), [Wy, Vy, Gy, zy, Yy] = Te(us, C1, T1), cs = function(e, t, r) {
  let {
    hidden: n = M().defaultHidden,
    name: o,
    description: a,
    queryFallbacks: i = !1,
    selected: s,
    busy: l,
    checked: u,
    pressed: c,
    current: d,
    level: f,
    expanded: y,
    value: {
      now: m,
      min: b,
      max: S,
      text: p
    } = {}
  } = r === void 0 ? {} : r;
  if (Ce(e), s !== void 0) {
    var _;
    if (((_ = se.get(t)) == null ? void 0 : _.props["aria-selected"]) === void 0)
      throw new Error('"aria-selected" is not supported on role "' + t + '".');
  }
  if (l !== void 0) {
    var w;
    if (((w = se.get(t)) == null ? void 0 : w.props["aria-busy"]) === void 0)
      throw new Error('"aria-busy" is not supported on role "' + t + '".');
  }
  if (u !== void 0) {
    var P;
    if (((P = se.get(t)) == null ? void 0 : P.props["aria-checked"]) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + t + '".');
  }
  if (c !== void 0) {
    var A;
    if (((A = se.get(t)) == null ? void 0 : A.props["aria-pressed"]) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + t + '".');
  }
  if (d !== void 0) {
    var v;
    if (((v = se.get(t)) == null ? void 0 : v.props["aria-current"]) === void 0)
      throw new Error('"aria-current" is not supported on role "' + t + '".');
  }
  if (f !== void 0 && t !== "heading")
    throw new Error('Role "' + t + '" cannot have "level" property.');
  if (m !== void 0) {
    var h;
    if (((h = se.get(t)) == null ? void 0 : h.props["aria-valuenow"]) === void 0)
      throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
  }
  if (S !== void 0) {
    var E;
    if (((E = se.get(t)) == null ? void 0 : E.props["aria-valuemax"]) === void 0)
      throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
  }
  if (b !== void 0) {
    var B;
    if (((B = se.get(t)) == null ? void 0 : B.props["aria-valuemin"]) === void 0)
      throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
  }
  if (p !== void 0) {
    var U;
    if (((U = se.get(t)) == null ? void 0 : U.props["aria-valuetext"]) === void 0)
      throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
  }
  if (y !== void 0) {
    var j;
    if (((j = se.get(t)) == null ? void 0 : j.props["aria-expanded"]) === void 0)
      throw new Error('"aria-expanded" is not supported on role "' + t + '".');
  }
  const H = /* @__PURE__ */ new WeakMap();
  function R(T) {
    return H.has(T) || H.set(T, iy(T)), H.get(T);
  }
  return Array.from(e.querySelectorAll(
    // Only query elements that can be matched by the following filters
    O1(t)
  )).filter((T) => {
    if (T.hasAttribute("role")) {
      const oe = T.getAttribute("role");
      if (i)
        return oe.split(" ").filter(Boolean).some((Mi) => Mi === t);
      const [et] = oe.split(" ");
      return et === t;
    }
    return zs(T).some((oe) => oe === t);
  }).filter((T) => {
    if (s !== void 0)
      return s === e1(T);
    if (l !== void 0)
      return l === t1(T);
    if (u !== void 0)
      return u === r1(T);
    if (c !== void 0)
      return c === n1(T);
    if (d !== void 0)
      return d === o1(T);
    if (y !== void 0)
      return y === a1(T);
    if (f !== void 0)
      return f === i1(T);
    if (m !== void 0 || S !== void 0 || b !== void 0 || p !== void 0) {
      let W = !0;
      if (m !== void 0 && W && (W = m === l1(T)), S !== void 0 && W && (W = S === s1(T)), b !== void 0 && W && (W = b === u1(T)), p !== void 0) {
        var N;
        W && (W = Re((N = c1(T)) != null ? N : null, T, p, (oe) => oe));
      }
      return W;
    }
    return !0;
  }).filter((T) => o === void 0 ? !0 : Re(Ps(T, {
    computedStyleSupportsPseudoElements: M().computedStyleSupportsPseudoElements
  }), T, o, (N) => N)).filter((T) => a === void 0 ? !0 : Re(If(T, {
    computedStyleSupportsPseudoElements: M().computedStyleSupportsPseudoElements
  }), T, a, (N) => N)).filter((T) => n === !1 ? $i(T, {
    isSubtreeInaccessible: R
  }) === !1 : !0);
};
function O1(e) {
  var t;
  const r = '*[role~="' + e + '"]', n = (t = Gp.get(e)) != null ? t : /* @__PURE__ */ new Set(), o = new Set(Array.from(n).map((a) => {
    let {
      name: i
    } = a;
    return i;
  }));
  return [r].concat(Array.from(o)).join(",");
}
const Ky = (e) => {
  let t = "";
  return e === void 0 ? t = "" : typeof e == "string" ? t = ' and name "' + e + '"' : t = " and name `" + e + "`", t;
}, $1 = function(e, t, r) {
  let {
    name: n
  } = r === void 0 ? {} : r;
  return 'Found multiple elements with the role "' + t + '"' + Ky(n);
}, x1 = function(e, t, r) {
  let {
    hidden: n = M().defaultHidden,
    name: o,
    description: a
  } = r === void 0 ? {} : r;
  if (M()._disableExpensiveErrorDiagnostics)
    return 'Unable to find role="' + t + '"' + Ky(o);
  let i = "";
  Array.from(e.children).forEach((c) => {
    i += sy(c, {
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
}, Xy = re(cs, cs.name, "queryAll"), [Jy, Qy, Zy, ev, tv] = Te(cs, $1, x1), Xs = () => M().testIdAttribute, ds = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Ce(t[0]), bt(Xs(), ...t);
}, I1 = (e, t) => "Found multiple elements by: [" + Xs() + '="' + t + '"]', q1 = (e, t) => "Unable to find an element by: [" + Xs() + '="' + t + '"]', rv = re(ds, ds.name, "queryAll"), [nv, ov, av, iv, lv] = Te(ds, I1, q1);
var Mn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  queryAllByLabelText: hy,
  queryByLabelText: fy,
  getAllByLabelText: my,
  getByLabelText: by,
  findAllByLabelText: yy,
  findByLabelText: vy,
  queryByPlaceholderText: Ey,
  queryAllByPlaceholderText: gy,
  getByPlaceholderText: Ry,
  getAllByPlaceholderText: _y,
  findAllByPlaceholderText: Py,
  findByPlaceholderText: wy,
  queryByText: Ay,
  queryAllByText: Sy,
  getByText: Ty,
  getAllByText: Cy,
  findAllByText: Oy,
  findByText: $y,
  queryByDisplayValue: Iy,
  queryAllByDisplayValue: xy,
  getByDisplayValue: My,
  getAllByDisplayValue: qy,
  findAllByDisplayValue: Ny,
  findByDisplayValue: By,
  queryByAltText: Dy,
  queryAllByAltText: ky,
  getByAltText: Ly,
  getAllByAltText: Fy,
  findAllByAltText: jy,
  findByAltText: Uy,
  queryByTitle: Wy,
  queryAllByTitle: Hy,
  getByTitle: Gy,
  getAllByTitle: Vy,
  findAllByTitle: zy,
  findByTitle: Yy,
  queryByRole: Jy,
  queryAllByRole: Xy,
  getAllByRole: Qy,
  getByRole: Zy,
  findAllByRole: ev,
  findByRole: tv,
  queryByTestId: nv,
  queryAllByTestId: rv,
  getByTestId: av,
  getAllByTestId: ov,
  findAllByTestId: iv,
  findByTestId: lv
});
function fs(e, t, r) {
  return t === void 0 && (t = Mn), r === void 0 && (r = {}), Object.keys(t).reduce((n, o) => {
    const a = t[o];
    return n[o] = a.bind(null, e), n;
  }, r);
}
const sv = (e) => !e || Array.isArray(e) && !e.length;
function ld(e) {
  if (sv(e))
    throw new Error("The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.");
}
async function M1(e, t) {
  const r = new Error("Timed out in waitForElementToBeRemoved.");
  if (typeof e != "function") {
    ld(e);
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
  return ld(e()), Ys(() => {
    let n;
    try {
      n = e();
    } catch (o) {
      if (o.name === "TestingLibraryElementError")
        return;
      throw o;
    }
    if (!sv(n))
      throw r;
  }, t);
}
const sd = {
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
}, ud = {
  doubleClick: "dblClick"
};
function _r(e, t) {
  return M().eventWrapper(() => {
    if (!t)
      throw new Error("Unable to fire an event - please provide an event object.");
    if (!e)
      throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
    return e.dispatchEvent(t);
  });
}
function an(e, t, r, n) {
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
  s !== void 0 && N1(t, s), l !== void 0 && Object.defineProperty(t, "files", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: l
  }), Object.assign(t, u);
  const c = ey(t), d = c[o] || c.Event;
  let f;
  if (typeof d == "function")
    f = new d(e, i);
  else {
    f = c.document.createEvent(o);
    const {
      bubbles: m,
      cancelable: b,
      detail: S,
      ...p
    } = i;
    f.initEvent(e, m, b, S), Object.keys(p).forEach((_) => {
      f[_] = p[_];
    });
  }
  return ["dataTransfer", "clipboardData"].forEach((m) => {
    const b = i[m];
    typeof b == "object" && (typeof c.DataTransfer == "function" ? Object.defineProperty(f, m, {
      value: Object.getOwnPropertyNames(b).reduce((S, p) => (Object.defineProperty(S, p, {
        value: b[p]
      }), S), new c.DataTransfer())
    }) : Object.defineProperty(f, m, {
      value: b
    }));
  }), f;
}
Object.keys(sd).forEach((e) => {
  const {
    EventType: t,
    defaultInit: r
  } = sd[e], n = e.toLowerCase();
  an[e] = (o, a) => an(n, o, a, {
    EventType: t,
    defaultInit: r
  }), _r[e] = (o, a) => _r(o, an[e](o, a));
});
function N1(e, t) {
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
Object.keys(ud).forEach((e) => {
  const t = ud[e];
  _r[e] = function() {
    return _r[t](...arguments);
  };
});
function B1(e) {
  return e.replace(/[ \t]*[\n][ \t]*/g, `
`);
}
function k1(e) {
  return Cx.compressToEncodedURIComponent(B1(e));
}
function D1(e) {
  return "https://testing-playground.com/#markup=" + k1(e);
}
const F1 = (e, t, r) => Array.isArray(e) ? e.forEach((n) => ns(n, t, r)) : ns(e, t, r), L1 = function(e) {
  if (e === void 0 && (e = Vs().body), !e || !("innerHTML" in e)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  if (!e.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const t = D1(e.innerHTML);
  return console.log(`Open this URL in your browser

` + t), t;
}, cd = {
  debug: F1,
  logTestingPlaygroundURL: L1
}, j1 = typeof document < "u" && document.body ? fs(document.body, Mn, cd) : Object.keys(Mn).reduce((e, t) => (e[t] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, e), cd), U1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buildQueries: Te,
  configure: Yx,
  createEvent: an,
  findAllByAltText: jy,
  findAllByDisplayValue: Ny,
  findAllByLabelText: yy,
  findAllByPlaceholderText: Py,
  findAllByRole: ev,
  findAllByTestId: iv,
  findAllByText: Oy,
  findAllByTitle: zy,
  findByAltText: Uy,
  findByDisplayValue: By,
  findByLabelText: vy,
  findByPlaceholderText: wy,
  findByRole: tv,
  findByTestId: lv,
  findByText: $y,
  findByTitle: Yy,
  fireEvent: _r,
  getAllByAltText: Fy,
  getAllByDisplayValue: qy,
  getAllByLabelText: my,
  getAllByPlaceholderText: _y,
  getAllByRole: Qy,
  getAllByTestId: ov,
  getAllByText: Cy,
  getAllByTitle: Vy,
  getByAltText: Ly,
  getByDisplayValue: My,
  getByLabelText: by,
  getByPlaceholderText: Ry,
  getByRole: Zy,
  getByTestId: av,
  getByText: Ty,
  getByTitle: Gy,
  getConfig: M,
  getDefaultNormalizer: Gs,
  getElementError: xi,
  getMultipleElementsFoundError: Ii,
  getNodeText: qr,
  getQueriesForElement: fs,
  getRoles: ly,
  getSuggestedQuery: qn,
  isInaccessible: $i,
  logDOM: ns,
  logRoles: Zx,
  makeFindQuery: Vt,
  makeGetAllQuery: Ks,
  makeSingleQuery: Wt,
  prettyDOM: gr,
  prettyFormat: Ib,
  queries: Mn,
  queryAllByAltText: ky,
  queryAllByAttribute: bt,
  queryAllByDisplayValue: xy,
  queryAllByLabelText: hy,
  queryAllByPlaceholderText: gy,
  queryAllByRole: Xy,
  queryAllByTestId: rv,
  queryAllByText: Sy,
  queryAllByTitle: Hy,
  queryByAltText: Dy,
  queryByAttribute: uy,
  queryByDisplayValue: Iy,
  queryByLabelText: fy,
  queryByPlaceholderText: Ey,
  queryByRole: Jy,
  queryByTestId: nv,
  queryByText: Ay,
  queryByTitle: Wy,
  queryHelpers: p1,
  screen: j1,
  waitFor: Ys,
  waitForElementToBeRemoved: M1,
  within: fs,
  wrapAllByQueryWithSuggestion: re,
  wrapSingleQueryWithSuggestion: Ye
}, Symbol.toStringTag, { value: "Module" }));
function O(e, t, r) {
  return e.namespaceURI && e.namespaceURI !== "http://www.w3.org/1999/xhtml" || (t = Array.isArray(t) ? t : [
    t
  ], !t.includes(e.tagName.toLowerCase())) ? !1 : r ? Object.entries(r).every(([n, o]) => e[n] === o) : !0;
}
var ps;
(function(e) {
  e.button = "button", e.color = "color", e.file = "file", e.image = "image", e.reset = "reset", e.submit = "submit", e.checkbox = "checkbox", e.radio = "radio";
})(ps || (ps = {}));
function uv(e) {
  return O(e, "button") || O(e, "input") && e.type in ps;
}
function ve(e) {
  var t;
  if (H1(e) && e.defaultView)
    return e.defaultView;
  if (!((t = e.ownerDocument) === null || t === void 0) && t.defaultView)
    return e.ownerDocument.defaultView;
  throw new Error(`Could not determine window of node. Node was ${W1(e)}`);
}
function H1(e) {
  return e.nodeType === 9;
}
function W1(e) {
  return typeof e == "function" ? `function ${e.name}` : e === null ? "null" : String(e);
}
function cv(e, t) {
  return new Promise((r, n) => {
    const o = new t();
    o.onerror = n, o.onabort = n, o.onload = () => {
      r(String(o.result));
    }, o.readAsText(e);
  });
}
function Js(e, t) {
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
function Le(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class dv {
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
    Le(this, "kind", void 0), Le(this, "type", void 0), Le(this, "file", null), Le(this, "data", void 0), typeof t == "string" ? (this.kind = "string", this.type = String(r), this.data = t) : (this.kind = "file", this.type = t.type, this.file = t);
  }
}
class V1 extends Array {
  add(...t) {
    const r = new dv(t[0], t[1]);
    return this.push(r), r;
  }
  clear() {
    this.splice(0, this.length);
  }
  remove(t) {
    this.splice(t, 1);
  }
}
function Hr(e, t) {
  const [r, n] = e.split("/"), o = !n || n === "*";
  return (a) => t ? a.type === (o ? r : e) : o ? a.type.startsWith(`${r}/`) : a.type === r;
}
function G1(e) {
  return new class {
    getData(r) {
      var n;
      const o = (n = this.items.find(Hr(r, !0))) !== null && n !== void 0 ? n : this.items.find(Hr(r, !1));
      let a = "";
      return o == null || o.getAsString((i) => {
        a = i;
      }), a;
    }
    setData(r, n) {
      const o = this.items.findIndex(Hr(r, !0)), a = new dv(n, r);
      o >= 0 ? this.items.splice(o, 1, a) : this.items.push(a);
    }
    clearData(r) {
      if (r) {
        const n = this.items.findIndex(Hr(r, !0));
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
      Le(this, "dropEffect", "none"), Le(this, "effectAllowed", "uninitialized"), Le(this, "items", new V1()), Le(this, "files", Js(e, []));
    }
  }();
}
function Qs(e, t = []) {
  const r = typeof e.DataTransfer > "u" ? G1(e) : (
    /* istanbul ignore next */
    new e.DataTransfer()
  );
  return Object.defineProperty(r, "files", {
    get: () => Js(e, t)
  }), r;
}
function z1(e, t) {
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
function fv(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function pv(e, ...t) {
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
      fv(this, "data", void 0), this.data = o;
    }
  }(r);
}
const Gt = Symbol("Manage ClipboardSub");
function dd(e, t) {
  return Object.assign(new class extends e.EventTarget {
    async read() {
      return Array.from(this.items);
    }
    async readText() {
      let n = "";
      for (const o of this.items) {
        const a = o.types.includes("text/plain") ? "text/plain" : o.types.find((i) => i.startsWith("text/"));
        a && (n += await o.getType(a).then((i) => cv(i, e.FileReader)));
      }
      return n;
    }
    async write(n) {
      this.items = n;
    }
    async writeText(n) {
      this.items = [
        pv(e, n)
      ];
    }
    constructor(...n) {
      super(...n), fv(this, "items", []);
    }
  }(), {
    [Gt]: t
  });
}
function Zs(e) {
  return !!(e != null && e[Gt]);
}
function Y1(e) {
  if (Zs(e.navigator.clipboard))
    return e.navigator.clipboard[Gt];
  const t = Object.getOwnPropertyDescriptor(e.navigator, "clipboard");
  let r;
  const n = {
    resetClipboardStub: () => {
      r = dd(e, n);
    },
    detachClipboardStub: () => {
      t ? Object.defineProperty(e.navigator, "clipboard", t) : Object.defineProperty(e.navigator, "clipboard", {
        value: void 0,
        configurable: !0
      });
    }
  };
  return r = dd(e, n), Object.defineProperty(e.navigator, "clipboard", {
    get: () => r,
    configurable: !0
  }), r[Gt];
}
function K1(e) {
  Zs(e.navigator.clipboard) && e.navigator.clipboard[Gt].resetClipboardStub();
}
function X1(e) {
  Zs(e.navigator.clipboard) && e.navigator.clipboard[Gt].detachClipboardStub();
}
async function J1(e) {
  const t = e.defaultView, r = t == null ? void 0 : t.navigator.clipboard, n = r && await r.read();
  if (!n)
    throw new Error("The Clipboard API is unavailable.");
  const o = Qs(t);
  for (const a of n)
    for (const i of a.types)
      o.setData(i, await a.getType(i).then((s) => cv(s, t.FileReader)));
  return o;
}
async function yv(e, t) {
  const r = ve(e), n = r.navigator.clipboard, o = [];
  for (let i = 0; i < t.items.length; i++) {
    const s = t.items[i], l = z1(r, s);
    o.push(pv(r, l));
  }
  if (!(n && await n.write(o).then(
    () => !0,
    // Can happen with other implementations that e.g. require permissions
    /* istanbul ignore next */
    () => !1
  )))
    throw new Error("The Clipboard API is unavailable.");
}
const Nn = globalThis;
typeof Nn.afterEach == "function" && Nn.afterEach(() => K1(globalThis.window));
typeof Nn.afterAll == "function" && Nn.afterAll(() => X1(globalThis.window));
function dt(e) {
  return e.hasAttribute("contenteditable") && (e.getAttribute("contenteditable") == "true" || e.getAttribute("contenteditable") == "");
}
function Rr(e) {
  const t = Q1(e);
  return t && (t.closest('[contenteditable=""]') || t.closest('[contenteditable="true"]'));
}
function Q1(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function zt(e) {
  return vv(e) && !e.readOnly || dt(e);
}
var ys;
(function(e) {
  e.text = "text", e.date = "date", e["datetime-local"] = "datetime-local", e.email = "email", e.month = "month", e.number = "number", e.password = "password", e.search = "search", e.tel = "tel", e.time = "time", e.url = "url", e.week = "week";
})(ys || (ys = {}));
function vv(e) {
  return O(e, "textarea") || O(e, "input") && e.type in ys;
}
var vs;
(function(e) {
  e.email = "email", e.password = "password", e.search = "search", e.telephone = "telephone", e.text = "text", e.url = "url";
})(vs || (vs = {}));
function Z1(e) {
  var t;
  const r = (t = e.getAttribute("maxlength")) !== null && t !== void 0 ? t : "";
  return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function eI(e) {
  return O(e, "textarea") || O(e, "input") && e.type in vs;
}
const mv = [
  "input:not([type=hidden]):not([disabled])",
  "button:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[contenteditable=""]',
  '[contenteditable="true"]',
  "a[href]",
  "[tabindex]:not([disabled])"
].join(", ");
function eu(e) {
  return e.matches(mv);
}
var Bn;
(function(e) {
  e["{"] = "}", e["["] = "]";
})(Bn || (Bn = {}));
function bv(e, t) {
  let r = 0;
  const n = e[r] in Bn ? e[r] : "";
  r += n.length;
  const a = new RegExp(`^\\${n}{2}`).test(e) ? "" : n;
  return {
    type: a,
    ...a === "" ? tI(e, r, t) : rI(e, r, a, t)
  };
}
function tI(e, t, r) {
  const n = e[t];
  return hv(n, e, t, r), t += n.length, {
    consumedLength: t,
    descriptor: n,
    releasePrevious: !1,
    releaseSelf: !0,
    repeat: 1
  };
}
function rI(e, t, r, n) {
  var o, a;
  const i = e[t] === "/" ? "/" : "";
  t += i.length;
  const s = r === "{" && e[t] === "\\";
  t += Number(s);
  const l = s ? e[t] : (o = e.slice(t).match(r === "{" ? /^\w+|^[^}>/]/ : /^\w+/)) === null || o === void 0 ? void 0 : o[0];
  hv(l, e, t, n), t += l.length;
  var u;
  const c = (u = (a = e.slice(t).match(/^>\d+/)) === null || a === void 0 ? void 0 : a[0]) !== null && u !== void 0 ? u : "";
  t += c.length;
  const d = e[t] === "/" || !c && e[t] === ">" ? e[t] : "";
  t += d.length;
  const f = Bn[r], y = e[t] === f ? f : "";
  if (!y)
    throw new Error(gv([
      !c && "repeat modifier",
      !d && "release modifier",
      `"${f}"`
    ].filter(Boolean).join(" or "), e[t], e, n));
  return t += y.length, {
    consumedLength: t,
    descriptor: l,
    releasePrevious: !!i,
    repeat: c ? Math.max(Number(c.substr(1)), 1) : 1,
    releaseSelf: nI(d, c)
  };
}
function hv(e, t, r, n) {
  if (!e)
    throw new Error(gv("key descriptor", t[r], t, n));
}
function nI(e, t) {
  if (e)
    return e === "/";
  if (t)
    return !1;
}
function gv(e, t, r, n) {
  return `Expected ${e} but found "${t ?? ""}" in "${r}"
    See ${n === "pointer" ? "https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen" : "https://testing-library.com/docs/user-event/keyboard"}
    for more information about how userEvent parses your input.`;
}
function oI(e) {
  return new e.constructor(e.type, e);
}
var ee;
(function(e) {
  e[e.Trigger = 2] = "Trigger", e[e.Call = 1] = "Call";
})(ee || (ee = {}));
function ir(e, t) {
  e.levelRefs[t] = {};
}
function Wr(e, t) {
  return e.levelRefs[t];
}
var Bt;
(function(e) {
  e[e.EachTrigger = 4] = "EachTrigger", e[e.EachApiCall = 2] = "EachApiCall", e[e.EachTarget = 1] = "EachTarget", e[e.Never = 0] = "Never";
})(Bt || (Bt = {}));
function we(e) {
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
function qi(e) {
  const t = e.activeElement;
  return t != null && t.shadowRoot ? qi(t.shadowRoot) : we(t) ? e.ownerDocument ? (
    /* istanbul ignore next */
    e.ownerDocument.body
  ) : e.body : t;
}
function Pl(e) {
  var t;
  return (t = qi(e)) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  );
}
function aI(e, t) {
  let r = e;
  do {
    if (t(r))
      return r;
    r = r.parentElement;
  } while (r && r !== e.ownerDocument.body);
}
function me(e) {
  return Ev(e) && vv(e);
}
function iI(e) {
  return Ev(e) && uv(e);
}
function Ev(e) {
  return e.nodeType === 1;
}
function lI(e) {
  const t = e.ownerDocument.getSelection();
  if (t != null && t.focusNode && me(e)) {
    const n = Rr(t.focusNode);
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
function Yt(e, t) {
  return M().eventWrapper(e);
}
function Ke(e) {
  const t = aI(e, eu), r = qi(e.ownerDocument);
  (t ?? e.ownerDocument.body) !== r && (Yt(t ? () => t.focus() : () => r == null ? void 0 : r.blur()), lI(t ?? e.ownerDocument.body));
}
function sI(e) {
  !eu(e) || !(qi(e.ownerDocument) === e) || Yt(() => e.blur());
}
const Xe = {};
Xe.click = (e, t, r) => {
  const n = t.closest("button,input,label,select,textarea"), o = n && O(n, "label") && n.control;
  if (o)
    return () => {
      eu(o) && Ke(o), r.dispatchEvent(o, oI(e));
    };
  if (O(t, "input", {
    type: "file"
  }))
    return () => {
      sI(t), t.dispatchEvent(new (ve(t)).Event("fileDialog")), Ke(t);
    };
};
const Kt = Symbol("Displayed value in UI"), _e = Symbol("Displayed selection in UI"), kn = Symbol("Initial value to compare on blur");
function uI(e) {
  return typeof e == "object" && Kt in e;
}
function cI(e) {
  return !!e && typeof e == "object" && _e in e;
}
function dI(e, t) {
  e[kn] === void 0 && (e[kn] = e.value), e[Kt] = t, e.value = Object.assign(new String(t), {
    [Kt]: !0
  });
}
function be(e) {
  return e[Kt] === void 0 ? e.value : String(e[Kt]);
}
function tu(e) {
  e[Kt] = void 0;
}
function _v(e) {
  e[kn] = void 0;
}
function fI(e) {
  return e[kn];
}
function pI(e, t) {
  e[_e] = t;
}
function tr(e, { focusOffset: t, anchorOffset: r = t }, n = "replace") {
  const o = be(e).length, a = (d) => Math.max(0, Math.min(o, d)), i = n === "replace" || e[_e] === void 0 ? a(r) : e[_e].anchorOffset, s = a(t), l = Math.min(i, s), u = Math.max(i, s);
  if (e[_e] = {
    anchorOffset: i,
    focusOffset: s
  }, e.selectionStart === l && e.selectionEnd === u)
    return;
  const c = Object.assign(new Number(l), {
    [_e]: !0
  });
  try {
    e.setSelectionRange(c, u);
  } catch {
  }
}
function Pr(e) {
  var t, r, n;
  const o = (n = e[_e]) !== null && n !== void 0 ? n : {
    anchorOffset: (t = e.selectionStart) !== null && t !== void 0 ? t : 0,
    focusOffset: (r = e.selectionEnd) !== null && r !== void 0 ? r : 0
  };
  return {
    ...o,
    startOffset: Math.min(o.anchorOffset, o.focusOffset),
    endOffset: Math.max(o.anchorOffset, o.focusOffset)
  };
}
function yI(e) {
  return !!e[_e];
}
function ln(e) {
  e[_e] = void 0;
}
const Dn = globalThis.parseInt;
function vI(e) {
  const t = e.replace(/\D/g, "");
  if (t.length < 2)
    return e;
  const r = Dn(t[0], 10), n = Dn(t[1], 10);
  if (r >= 3 || r === 2 && n >= 4) {
    let o;
    return r >= 3 ? o = 1 : o = 2, fd(t, o);
  }
  return e.length === 2 ? e : fd(t, 2);
}
function fd(e, t) {
  const r = e.slice(0, t), n = Math.min(Dn(r, 10), 23), o = e.slice(t), a = Dn(o, 10), i = Math.min(a, 59);
  return `${n.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`;
}
function Rv(e, t) {
  const r = e.cloneNode();
  return r.value = t, r.value === t;
}
function Pv(e, t, r, n) {
  if (sn(e) && t + r >= 0 && t + r <= e.nodeValue.length)
    return {
      node: e,
      offset: t + r
    };
  const o = pd(e, t, r);
  if (o) {
    if (sn(o))
      return {
        node: o,
        offset: r > 0 ? Math.min(1, o.nodeValue.length) : Math.max(o.nodeValue.length - 1, 0)
      };
    if (O(o, "br")) {
      const a = pd(o, void 0, r);
      return a ? sn(a) ? {
        node: a,
        offset: r > 0 ? 0 : a.nodeValue.length
      } : r < 0 && O(a, "br") ? {
        node: o.parentNode,
        offset: Vr(o)
      } : {
        node: a.parentNode,
        offset: Vr(a) + (r > 0 ? 0 : 1)
      } : r < 0 && n === "deleteContentBackward" ? {
        node: o.parentNode,
        offset: Vr(o)
      } : void 0;
    } else
      return {
        node: o.parentNode,
        offset: Vr(o) + (r > 0 ? 1 : 0)
      };
  }
}
function pd(e, t, r) {
  const n = Number(t) + (r < 0 ? -1 : 0);
  return t !== void 0 && ru(e) && n >= 0 && n < e.children.length && (e = e.children[n]), bI(e, r === 1 ? "next" : "previous", mI);
}
function mI(e) {
  if (sn(e))
    return !0;
  if (ru(e)) {
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
function Vr(e) {
  let t = 0;
  for (; e.previousSibling; )
    t++, e = e.previousSibling;
  return t;
}
function ru(e) {
  return e.nodeType === 1;
}
function sn(e) {
  return e.nodeType === 3;
}
function bI(e, t, r) {
  for (; ; ) {
    var n;
    const o = e[`${t}Sibling`];
    if (o) {
      if (e = hI(o, t === "next" ? "first" : "last"), r(e))
        return e;
    } else if (e.parentNode && (!ru(e.parentNode) || !dt(e.parentNode) && e.parentNode !== ((n = e.ownerDocument) === null || n === void 0 ? void 0 : n.body)))
      e = e.parentNode;
    else
      break;
  }
}
function hI(e, t) {
  for (; e.hasChildNodes(); )
    e = e[`${t}Child`];
  return e;
}
const wr = Symbol("Track programmatic changes for React workaround");
function gI(e) {
  return Object.getOwnPropertyNames(e).some((t) => t.startsWith("__react")) && ve(e).REACT_VERSION === 17;
}
function EI(e) {
  gI(e) && (e[wr] = {
    previousValue: String(e.value),
    tracked: []
  });
}
function _I(e, t) {
  var r, n;
  (n = e[wr]) === null || n === void 0 || (r = n.tracked) === null || r === void 0 || r.push(t), e[wr] || (tu(e), tr(e, {
    focusOffset: t.length
  }));
}
function RI(e, t) {
  var r;
  const n = e[wr];
  if (e[wr] = void 0, !(!(n == null || (r = n.tracked) === null || r === void 0) && r.length))
    return;
  const o = n.tracked.length === 2 && n.tracked[0] === n.previousValue && n.tracked[1] === e.value;
  o || tu(e), yI(e) && tr(e, {
    focusOffset: o ? t : e.value.length
  });
}
function wv(e) {
  const t = PI(e);
  if (t && me(t))
    return {
      type: "input",
      selection: Pr(t)
    };
  const r = t == null ? void 0 : t.ownerDocument.getSelection();
  return {
    type: Rr(e) && (r == null ? void 0 : r.anchorNode) && Rr(r.anchorNode) ? "contenteditable" : "default",
    selection: r
  };
}
function PI(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function wI(e) {
  const t = wv(e);
  if (t.type === "input")
    return t.selection;
  if (t.type === "contenteditable") {
    var r;
    return (r = t.selection) === null || r === void 0 ? void 0 : r.getRangeAt(0);
  }
}
function ft({ focusNode: e, focusOffset: t, anchorNode: r = e, anchorOffset: n = t }) {
  var o, a;
  if (wv(e).type === "input")
    return tr(e, {
      anchorOffset: n,
      focusOffset: t
    });
  (a = r.ownerDocument) === null || a === void 0 || (o = a.getSelection()) === null || o === void 0 || o.setBaseAndExtent(r, n, e, t);
}
function Sv(e) {
  return O(e, "input") && [
    "date",
    "time"
  ].includes(e.type);
}
function Xt(e, t, r, n = "insertText") {
  const o = wI(t);
  o && (!Sv(t) && !e.dispatchUIEvent(t, "beforeinput", {
    inputType: n,
    data: r
  }) || ("startContainer" in o ? SI(e, t, o, r, n) : AI(e, t, o, r, n)));
}
function SI(e, t, r, n, o) {
  let a = !1;
  if (!r.collapsed)
    a = !0, r.deleteContents();
  else if ([
    "deleteContentBackward",
    "deleteContentForward"
  ].includes(o)) {
    const i = Pv(r.startContainer, r.startOffset, o === "deleteContentBackward" ? -1 : 1, o);
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
function AI(e, t, r, n, o) {
  let a = n;
  if (eI(t)) {
    const u = Z1(t);
    if (u !== void 0 && n.length > 0) {
      const c = u - t.value.length;
      if (c > 0)
        a = n.substring(0, c);
      else
        return;
    }
  }
  const { newValue: i, newOffset: s, oldValue: l } = CI(a, t, r, o);
  i === l && s === r.startOffset && s === r.endOffset || O(t, "input", {
    type: "number"
  }) && !TI(i) || (dI(t, i), ft({
    focusNode: t,
    anchorOffset: s,
    focusOffset: s
  }), Sv(t) ? Rv(t, i) && (yd(e, t, s, {}), e.dispatchUIEvent(t, "change"), _v(t)) : yd(e, t, s, {
    data: n,
    inputType: o
  }));
}
function CI(e, t, { startOffset: r, endOffset: n }, o) {
  const a = be(t), i = Math.max(0, r === n && o === "deleteContentBackward" ? r - 1 : r), s = a.substring(0, i), l = Math.min(a.length, r === n && o === "deleteContentForward" ? r + 1 : n), u = a.substring(l, a.length);
  let c = `${s}${e}${u}`, d = i + e.length;
  if (O(t, "input", {
    type: "time"
  })) {
    const f = vI(c);
    f !== "" && Rv(t, f) && (c = f, d = f.length);
  }
  return {
    oldValue: a,
    newValue: c,
    newOffset: d
  };
}
function yd(e, t, r, n) {
  e.dispatchUIEvent(t, "input", n), RI(t, r);
}
function TI(e) {
  var t, r;
  const n = e.split("e", 2);
  return !(/[^\d.\-e]/.test(e) || Number((t = e.match(/-/g)) === null || t === void 0 ? void 0 : t.length) > 2 || Number((r = e.match(/\./g)) === null || r === void 0 ? void 0 : r.length) > 1 || n[1] && !/^-?\d*$/.test(n[1]));
}
Xe.cut = (e, t, r) => () => {
  zt(t) && Xt(r, t, "", "deleteByCut");
};
function OI(e) {
  return e ? dt(e) ? e.textContent : be(e) : null;
}
function $I(e) {
  const t = ve(e);
  for (let r = e; r != null && r.ownerDocument; r = r.parentElement) {
    const { display: n, visibility: o } = t.getComputedStyle(r);
    if (n === "none" || o === "hidden")
      return !1;
  }
  return !0;
}
function xI(e, t) {
  const r = e.ownerDocument, n = r.querySelectorAll(mv), o = Array.from(n).filter((l) => l === e || !(Number(l.getAttribute("tabindex")) < 0 || we(l)));
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
    if (l += t ? -1 : 1, l === i.length ? l = 0 : l === -1 && (l = i.length - 1), i[l] === e || i[l] === r.body || $I(i[l]))
      return i[l];
}
function vd(e, t) {
  if (me(e)) {
    const r = Pr(e);
    ft({
      focusNode: e,
      focusOffset: r.startOffset === r.endOffset ? r.focusOffset + t : t < 0 ? r.startOffset : r.endOffset
    });
  } else {
    const r = e.ownerDocument.getSelection();
    if (!(r != null && r.focusNode))
      return;
    if (r.isCollapsed) {
      const n = Pv(r.focusNode, r.focusOffset, t);
      n && ft({
        focusNode: n.node,
        focusOffset: n.offset
      });
    } else
      r[t < 0 ? "collapseToStart" : "collapseToEnd"]();
  }
}
function Av(e) {
  if (me(e))
    return ft({
      focusNode: e,
      anchorOffset: 0,
      focusOffset: be(e).length
    });
  var t;
  const r = (t = Rr(e)) !== null && t !== void 0 ? t : e.ownerDocument.body;
  ft({
    focusNode: r,
    anchorOffset: 0,
    focusOffset: r.childNodes.length
  });
}
function II(e) {
  if (me(e))
    return Pr(e).startOffset === 0 && Pr(e).endOffset === be(e).length;
  var t;
  const r = (t = Rr(e)) !== null && t !== void 0 ? t : e.ownerDocument.body, n = e.ownerDocument.getSelection();
  return (n == null ? void 0 : n.anchorNode) === r && n.focusNode === r && n.anchorOffset === 0 && n.focusOffset === r.childNodes.length;
}
function lr(e, t, r) {
  var n;
  if (me(e))
    return ft({
      focusNode: e,
      anchorOffset: t,
      focusOffset: r
    });
  if (dt(e) && ((n = e.firstChild) === null || n === void 0 ? void 0 : n.nodeType) === 3)
    return ft({
      focusNode: e.firstChild,
      anchorOffset: t,
      focusOffset: r
    });
  throw new Error("Not implemented. The result of this interaction is unreliable.");
}
function Gr(e, t, r) {
  const n = ve(t), o = Array.from(t.ownerDocument.querySelectorAll(t.name ? `input[type="radio"][name="${n.CSS.escape(t.name)}"]` : 'input[type="radio"][name=""], input[type="radio"]:not([name])'));
  for (let a = o.findIndex((i) => i === t) + r; ; a += r) {
    if (o[a] || (a = r > 0 ? 0 : o.length - 1), o[a] === t)
      return;
    we(o[a]) || (Ke(o[a]), e.dispatchUIEvent(o[a], "click"));
  }
}
Xe.keydown = (e, t, r) => {
  var n, o;
  return (o = (n = md[e.key]) === null || n === void 0 ? void 0 : n.call(md, e, t, r)) !== null && o !== void 0 ? o : qI(e, t, r);
};
const md = {
  ArrowDown: (e, t, r) => {
    if (O(t, "input", {
      type: "radio"
    }))
      return () => Gr(r, t, -1);
  },
  ArrowLeft: (e, t, r) => O(t, "input", {
    type: "radio"
  }) ? () => Gr(r, t, -1) : () => vd(t, -1),
  ArrowRight: (e, t, r) => O(t, "input", {
    type: "radio"
  }) ? () => Gr(r, t, 1) : () => vd(t, 1),
  ArrowUp: (e, t, r) => {
    if (O(t, "input", {
      type: "radio"
    }))
      return () => Gr(r, t, 1);
  },
  Backspace: (e, t, r) => {
    if (zt(t))
      return () => {
        Xt(r, t, "", "deleteContentBackward");
      };
  },
  Delete: (e, t, r) => {
    if (zt(t))
      return () => {
        Xt(r, t, "", "deleteContentForward");
      };
  },
  End: (e, t) => {
    if (O(t, [
      "input",
      "textarea"
    ]) || dt(t))
      return () => {
        var r, n;
        const o = (n = (r = OI(t)) === null || r === void 0 ? void 0 : r.length) !== null && n !== void 0 ? n : (
          /* istanbul ignore next */
          0
        );
        lr(t, o, o);
      };
  },
  Home: (e, t) => {
    if (O(t, [
      "input",
      "textarea"
    ]) || dt(t))
      return () => {
        lr(t, 0, 0);
      };
  },
  PageDown: (e, t) => {
    if (O(t, [
      "input"
    ]))
      return () => {
        const r = be(t).length;
        lr(t, r, r);
      };
  },
  PageUp: (e, t) => {
    if (O(t, [
      "input"
    ]))
      return () => {
        lr(t, 0, 0);
      };
  },
  Tab: (e, t, r) => () => {
    const n = xI(t, r.system.keyboard.modifiers.Shift);
    Ke(n), me(n) && tr(n, {
      anchorOffset: 0,
      focusOffset: n.value.length
    });
  }
}, qI = (e, t, r) => {
  if (e.code === "KeyA" && r.system.keyboard.modifiers.Control)
    return () => Av(t);
};
Xe.keypress = (e, t, r) => {
  if (e.key === "Enter") {
    if (O(t, "button") || O(t, "input") && MI.includes(t.type) || O(t, "a") && t.href)
      return () => {
        r.dispatchUIEvent(t, "click");
      };
    if (O(t, "input")) {
      const n = t.form, o = n == null ? void 0 : n.querySelector('input[type="submit"], button:not([type]), button[type="submit"]');
      return o ? () => r.dispatchUIEvent(o, "click") : n && NI.includes(t.type) && n.querySelectorAll("input").length === 1 ? () => r.dispatchUIEvent(n, "submit") : void 0;
    }
  }
  if (zt(t)) {
    const n = e.key === "Enter" ? dt(t) && !r.system.keyboard.modifiers.Shift ? "insertParagraph" : "insertLineBreak" : "insertText", o = e.key === "Enter" ? `
` : e.key;
    return () => Xt(r, t, o, n);
  }
};
const MI = [
  "button",
  "color",
  "file",
  "image",
  "reset",
  "submit"
], NI = [
  "email",
  "month",
  "password",
  "search",
  "tel",
  "text",
  "url",
  "week"
];
Xe.keyup = (e, t, r) => {
  var n;
  return (n = bd[e.key]) === null || n === void 0 ? void 0 : n.call(bd, e, t, r);
};
const bd = {
  " ": (e, t, r) => {
    if (uv(t))
      return () => r.dispatchUIEvent(t, "click");
  }
};
Xe.paste = (e, t, r) => {
  if (zt(t))
    return () => {
      var n;
      const o = (n = e.clipboardData) === null || n === void 0 ? void 0 : n.getData("text");
      o && Xt(r, t, o, "insertFromPaste");
    };
};
const Cv = {
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
function Tv(e) {
  return Cv[e].EventType;
}
const BI = [
  "MouseEvent",
  "PointerEvent"
];
function kI(e) {
  return BI.includes(Tv(e));
}
function DI(e) {
  return Tv(e) === "KeyboardEvent";
}
const FI = {
  ClipboardEvent: [
    jI
  ],
  Event: [],
  InputEvent: [
    zr,
    UI
  ],
  MouseEvent: [
    zr,
    wl,
    hd
  ],
  PointerEvent: [
    zr,
    wl,
    hd,
    WI
  ],
  KeyboardEvent: [
    zr,
    wl,
    HI
  ]
};
function Ov(e, t, r) {
  const n = ve(t), { EventType: o, defaultInit: a } = Cv[e], i = new (LI(n))[o](e, a);
  return FI[o].forEach((s) => s(i, r ?? {})), i;
}
function LI(e) {
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
  var y;
  const m = (y = e.UIEvent) !== null && y !== void 0 ? y : class extends r {
  };
  var b;
  const S = (b = e.CompositionEvent) !== null && b !== void 0 ? b : class extends m {
  };
  var p;
  const _ = (p = e.FocusEvent) !== null && p !== void 0 ? p : class extends m {
  };
  var w;
  const P = (w = e.InputEvent) !== null && w !== void 0 ? w : class extends m {
  };
  var A;
  const v = (A = e.KeyboardEvent) !== null && A !== void 0 ? A : class extends m {
  };
  var h;
  const E = (h = e.MouseEvent) !== null && h !== void 0 ? h : class extends m {
  };
  var B;
  const U = (B = e.DragEvent) !== null && B !== void 0 ? B : class extends E {
  };
  var j;
  const H = (j = e.PointerEvent) !== null && j !== void 0 ? j : class extends E {
  };
  var R;
  const T = (R = e.TouchEvent) !== null && R !== void 0 ? R : class extends m {
  };
  return {
    Event: r,
    AnimationEvent: o,
    ClipboardEvent: i,
    PopStateEvent: l,
    ProgressEvent: c,
    TransitionEvent: f,
    UIEvent: m,
    CompositionEvent: S,
    FocusEvent: _,
    InputEvent: P,
    KeyboardEvent: v,
    MouseEvent: E,
    DragEvent: U,
    PointerEvent: H,
    TouchEvent: T
  };
}
function ht(e, t) {
  for (const [r, n] of Object.entries(t))
    Object.defineProperty(e, r, {
      get: () => n ?? null
    });
}
function Y(e) {
  return Number(e ?? 0);
}
function jI(e, { clipboardData: t }) {
  ht(e, {
    clipboardData: t
  });
}
function UI(e, { data: t, inputType: r, isComposing: n }) {
  ht(e, {
    data: t,
    isComposing: !!n,
    inputType: String(r)
  });
}
function zr(e, { view: t, detail: r }) {
  ht(e, {
    view: t,
    detail: Y(r ?? 0)
  });
}
function wl(e, { altKey: t, ctrlKey: r, metaKey: n, shiftKey: o, modifierAltGraph: a, modifierCapsLock: i, modifierFn: s, modifierFnLock: l, modifierNumLock: u, modifierScrollLock: c, modifierSymbol: d, modifierSymbolLock: f }) {
  ht(e, {
    altKey: !!t,
    ctrlKey: !!r,
    metaKey: !!n,
    shiftKey: !!o,
    getModifierState(y) {
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
      }[y];
    }
  });
}
function HI(e, { key: t, code: r, location: n, repeat: o, isComposing: a, charCode: i }) {
  ht(e, {
    key: String(t),
    code: String(r),
    location: Y(n),
    repeat: !!o,
    isComposing: !!a,
    charCode: i
  });
}
function hd(e, { x: t, y: r, screenX: n, screenY: o, clientX: a = t, clientY: i = r, button: s, buttons: l, relatedTarget: u }) {
  ht(e, {
    screenX: Y(n),
    screenY: Y(o),
    clientX: Y(a),
    x: Y(a),
    clientY: Y(i),
    y: Y(i),
    button: Y(s),
    buttons: Y(l),
    relatedTarget: u
  });
}
function WI(e, { pointerId: t, width: r, height: n, pressure: o, tangentialPressure: a, tiltX: i, tiltY: s, twist: l, pointerType: u, isPrimary: c }) {
  ht(e, {
    pointerId: Y(t),
    width: Y(r),
    height: Y(n),
    pressure: Y(o),
    tangentialPressure: Y(a),
    tiltX: Y(i),
    tiltY: Y(s),
    twist: Y(l),
    pointerType: String(u),
    isPrimary: !!c
  });
}
function VI(e, t, r, n = !1) {
  (kI(t) || DI(t)) && (r = {
    ...r,
    ...this.system.getUIEventModifiers()
  });
  const o = Ov(t, e, r);
  return $v.call(this, e, o, n);
}
function $v(e, t, r = !1) {
  var n;
  const o = t.type, a = r ? () => {
  } : (n = Xe[o]) === null || n === void 0 ? void 0 : n.call(Xe, t, e, this);
  if (a) {
    t.preventDefault();
    let i = !1;
    return Object.defineProperty(t, "defaultPrevented", {
      get: () => i
    }), Object.defineProperty(t, "preventDefault", {
      value: () => {
        i = t.cancelable;
      }
    }), Yt(() => e.dispatchEvent(t)), i || a(), !i;
  }
  return Yt(() => e.dispatchEvent(t));
}
function GI(e, t, r) {
  const n = Ov(t, e, r);
  Yt(() => e.dispatchEvent(n));
}
const Sl = Symbol("Interceptor for programmatical calls");
function It(e, t, r) {
  const n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), o = Object.getOwnPropertyDescriptor(e, t), a = n != null && n.set ? "set" : "value";
  if (typeof (n == null ? void 0 : n[a]) != "function" || n[a][Sl])
    throw new Error(`Element ${e.tagName} does not implement "${String(t)}".`);
  function i(...s) {
    const { applyNative: l = !1, realArgs: u, then: c } = r.call(this, ...s), d = (!l && o || n)[a];
    a === "set" ? d.call(this, u) : d.call(this, ...u), c == null || c();
  }
  i[Sl] = Sl, Object.defineProperty(e, t, {
    ...o ?? n,
    [a]: i
  });
}
function zI(e) {
  It(e, "value", function(r) {
    const n = uI(r);
    return n && EI(this), {
      applyNative: !!n,
      realArgs: YI(this, r),
      then: n ? void 0 : () => _I(this, String(r))
    };
  });
}
function YI(e, t) {
  return O(e, "input", {
    type: "number"
  }) && String(t) !== "" && !Number.isNaN(Number(t)) ? String(Number(t)) : String(t);
}
function KI(e) {
  It(e, "setSelectionRange", function(r, ...n) {
    const o = cI(r);
    return {
      applyNative: !!o,
      realArgs: [
        Number(r),
        ...n
      ],
      then: () => o ? void 0 : ln(e)
    };
  }), It(e, "selectionStart", function(r) {
    return {
      realArgs: r,
      then: () => ln(e)
    };
  }), It(e, "selectionEnd", function(r) {
    return {
      realArgs: r,
      then: () => ln(e)
    };
  }), It(e, "select", function() {
    return {
      realArgs: [],
      then: () => pI(e, {
        anchorOffset: 0,
        focusOffset: be(e).length
      })
    };
  });
}
function XI(e) {
  It(e, "setRangeText", function(...r) {
    return {
      realArgs: r,
      then: () => {
        tu(e), ln(e);
      }
    };
  });
}
const kt = Symbol("Node prepared with document state workarounds");
function xv(e) {
  e[kt] || (e.addEventListener("focus", (t) => {
    const r = t.target;
    gd(r);
  }, {
    capture: !0,
    passive: !0
  }), e.activeElement && gd(e.activeElement), e.addEventListener("blur", (t) => {
    const r = t.target, n = fI(r);
    n !== void 0 && (r.value !== n && GI(r, "change"), _v(r));
  }, {
    capture: !0,
    passive: !0
  }), e[kt] = kt);
}
function gd(e) {
  e[kt] || (O(e, [
    "input",
    "textarea"
  ]) && (zI(e), KI(e), XI(e)), e[kt] = kt);
}
function JI(e) {
  return QI(e) ? e : e.ownerDocument;
}
function QI(e) {
  return e.nodeType === 9;
}
function Jt(e) {
  const t = e.delay;
  if (typeof t == "number")
    return Promise.all([
      new Promise((r) => globalThis.setTimeout(() => r(), t)),
      e.advanceTimers(t)
    ]);
}
function At(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var ae;
(function(e) {
  e[e.STANDARD = 0] = "STANDARD", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.NUMPAD = 3] = "NUMPAD";
})(ae || (ae = {}));
const ZI = [
  "Alt",
  "AltGraph",
  "Control",
  "Fn",
  "Meta",
  "Shift",
  "Symbol"
];
function Ed(e) {
  return ZI.includes(e);
}
const eq = [
  "CapsLock",
  "FnLock",
  "NumLock",
  "ScrollLock",
  "SymbolLock"
];
function _d(e) {
  return eq.includes(e);
}
class tq {
  isKeyPressed(t) {
    return !!this.pressed[String(t.code)];
  }
  getPressedKeys() {
    return Object.values(this.pressed).map((t) => t.keyDef);
  }
  /** Press a key */
  async keydown(t, r) {
    var n, o, a;
    const i = String(r.key), s = String(r.code), l = Pl(t.config.document);
    this.setKeydownTarget(l);
    var u;
    (u = (n = this.pressed)[o = s]) !== null && u !== void 0 || (n[o] = {
      keyDef: r,
      unpreventedDefault: !1
    }), Ed(i) && (this.modifiers[i] = !0);
    const c = t.dispatchUIEvent(l, "keydown", {
      key: i,
      code: s
    });
    _d(i) && !this.modifiers[i] && (this.modifiers[i] = !0, this.modifierLockStart[i] = !0), (a = this.pressed[s]).unpreventedDefault || (a.unpreventedDefault = c), c && this.hasKeyPress(i) && t.dispatchUIEvent(Pl(t.config.document), "keypress", {
      key: i,
      code: s,
      charCode: r.key === "Enter" ? 13 : String(r.key).charCodeAt(0)
    });
  }
  /** Release a key */
  async keyup(t, r) {
    const n = String(r.key), o = String(r.code), a = this.pressed[o].unpreventedDefault;
    delete this.pressed[o], Ed(n) && !Object.values(this.pressed).find((i) => i.keyDef.key === n) && (this.modifiers[n] = !1), t.dispatchUIEvent(Pl(t.config.document), "keyup", {
      key: n,
      code: o
    }, !a), _d(n) && this.modifiers[n] && (this.modifierLockStart[n] ? this.modifierLockStart[n] = !1 : this.modifiers[n] = !1);
  }
  setKeydownTarget(t) {
    t !== this.lastKeydownTarget && (this.carryChar = ""), this.lastKeydownTarget = t;
  }
  hasKeyPress(t) {
    return (t.length === 1 || t === "Enter") && !this.modifiers.Control && !this.modifiers.Alt;
  }
  constructor(t) {
    At(this, "system", void 0), At(this, "modifiers", {
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
    }), At(this, "pressed", {}), At(this, "carryChar", ""), At(this, "lastKeydownTarget", void 0), At(this, "modifierLockStart", {}), this.system = t;
  }
}
const rq = [
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
    location: ae.LEFT
  },
  {
    code: "AltRight",
    key: "Alt",
    location: ae.RIGHT
  },
  {
    code: "ShiftLeft",
    key: "Shift",
    location: ae.LEFT
  },
  {
    code: "ShiftRight",
    key: "Shift",
    location: ae.RIGHT
  },
  {
    code: "ControlLeft",
    key: "Control",
    location: ae.LEFT
  },
  {
    code: "ControlRight",
    key: "Control",
    location: ae.RIGHT
  },
  {
    code: "MetaLeft",
    key: "Meta",
    location: ae.LEFT
  },
  {
    code: "MetaRight",
    key: "Meta",
    location: ae.RIGHT
  },
  {
    code: "OSLeft",
    key: "OS",
    location: ae.LEFT
  },
  {
    code: "OSRight",
    key: "OS",
    location: ae.RIGHT
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
], nq = [
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
function oq(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Iv {
  getButtons() {
    let t = 0;
    for (const r of Object.keys(this.pressed))
      t |= 2 ** Number(r);
    return t;
  }
  down(t) {
    const r = ms(t.button);
    if (r in this.pressed) {
      this.pressed[r].push(t);
      return;
    }
    return this.pressed[r] = [
      t
    ], r;
  }
  up(t) {
    const r = ms(t.button);
    if (r in this.pressed && (this.pressed[r] = this.pressed[r].filter((n) => n.name !== t.name), this.pressed[r].length === 0))
      return delete this.pressed[r], r;
  }
  constructor() {
    oq(this, "pressed", {});
  }
}
const Rd = {
  primary: 0,
  secondary: 1,
  auxiliary: 2,
  back: 3,
  X1: 3,
  forward: 4,
  X2: 4
};
function ms(e = 0) {
  return e in Rd ? Rd[e] : Number(e);
}
const Pd = {
  1: 2,
  2: 1
};
function wd(e) {
  return e = ms(e), e in Pd ? Pd[e] : e;
}
function aq(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class iq {
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
    aq(this, "pressedKeys", /* @__PURE__ */ new Set());
  }
}
function pr(e, t) {
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
function bs({ target: e, node: t, offset: r }) {
  return me(e) ? {
    node: e,
    offset: r ?? be(e).length
  } : t ? {
    node: t,
    offset: r ?? (t.nodeType === 3 ? t.nodeValue.length : t.childNodes.length)
  } : qv(e, r);
}
function qv(e, t, r = !0) {
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
          return qv(a, t, !1);
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
function lq({ document: e, target: t, clickCount: r, node: n, offset: o }) {
  if (iI(t))
    return;
  const a = me(t), i = String(a ? be(t) : t.textContent), [s, l] = n ? (
    // which elements might be considered in the same line of text.
    // TODO: support expanding initial range on multiple clicks if node is given
    [
      o,
      o
    ]
  ) : sq(i, o, r);
  if (a)
    return tr(t, {
      anchorOffset: s ?? i.length,
      focusOffset: l ?? i.length
    }), {
      node: t,
      start: s ?? 0,
      end: l ?? i.length
    };
  {
    const { node: u, offset: c } = bs({
      target: t,
      node: n,
      offset: s
    }), { node: d, offset: f } = bs({
      target: t,
      node: n,
      offset: l
    }), y = t.ownerDocument.createRange();
    try {
      y.setStart(u, c), y.setEnd(d, f);
    } catch {
      throw new Error("The given offset is out of bounds.");
    }
    const m = e.getSelection();
    return m == null || m.removeAllRanges(), m == null || m.addRange(y.cloneRange()), y;
  }
}
function sq(e, t, r) {
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
function uq(e, { document: t, target: r, node: n, offset: o }) {
  const a = bs({
    target: r,
    node: n,
    offset: o
  });
  if ("node" in e) {
    if (a.node === e.node) {
      const i = a.offset < e.start ? e.end : e.start, s = a.offset > e.end || a.offset < e.start ? a.offset : e.end;
      tr(e.node, {
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
function Mv(e, t) {
  var r, n, o, a, i, s, l, u;
  return e.target !== t.target || ((r = e.coords) === null || r === void 0 ? void 0 : r.x) !== ((n = t.coords) === null || n === void 0 ? void 0 : n.y) || ((o = e.coords) === null || o === void 0 ? void 0 : o.y) !== ((a = t.coords) === null || a === void 0 ? void 0 : a.y) || ((i = e.caret) === null || i === void 0 ? void 0 : i.node) !== ((s = t.caret) === null || s === void 0 ? void 0 : s.node) || ((l = e.caret) === null || l === void 0 ? void 0 : l.offset) !== ((u = t.caret) === null || u === void 0 ? void 0 : u.offset);
}
function tt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class cq {
  move(t, r) {
    const n = this.position, o = this.getTarget(t);
    if (this.position = r, !Mv(n, r))
      return;
    const a = this.getTarget(t), i = this.getEventInit("mousemove"), [s, l] = pr(o, a);
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
    const i = we(a), s = this.getEventInit("mousedown", r.button);
    (i || t.dispatchUIEvent(a, "mousedown", s)) && (this.startSelecting(t, s.detail), Ke(a)), !i && wd(r.button) === 2 && t.dispatchUIEvent(a, "contextmenu", this.getEventInit("contextmenu", r.button, n));
  }
  up(t, r, n) {
    const o = this.buttons.up(r);
    if (o === void 0)
      return;
    const a = this.getTarget(t);
    if (!we(a)) {
      t.dispatchUIEvent(a, "mouseup", this.getEventInit("mouseup", r.button)), this.endSelecting();
      const i = pr(this.buttonDownTarget[o], a)[2][0];
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
    return n && (o.pointerId = n.pointerId, o.pointerType = n.pointerType, o.isPrimary = n.isPrimary), o.button = wd(r), o.buttons = this.buttons.getButtons(), t === "mousedown" ? o.detail = this.clickCount.getOnDown(o.button) : t === "mouseup" ? o.detail = this.clickCount.getOnUp(o.button) : (t === "click" || t === "auxclick") && (o.detail = this.clickCount.incOnClick(o.button)), o;
  }
  getTarget(t) {
    var r;
    return (r = this.position.target) !== null && r !== void 0 ? r : t.config.document.body;
  }
  startSelecting(t, r) {
    var n, o;
    this.selecting = lq({
      document: t.config.document,
      target: this.getTarget(t),
      node: (n = this.position.caret) === null || n === void 0 ? void 0 : n.node,
      offset: (o = this.position.caret) === null || o === void 0 ? void 0 : o.offset,
      clickCount: r
    });
  }
  modifySelecting(t) {
    var r, n;
    this.selecting && uq(this.selecting, {
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
    tt(this, "position", {}), tt(this, "buttons", new Iv()), tt(this, "selecting", void 0), tt(this, "buttonDownTarget", {}), tt(this, "clickCount", new class {
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
        tt(this, "down", {}), tt(this, "count", {});
      }
    }());
  }
}
function Fn(e, t) {
  var r;
  return ((r = Nv(e, t)) === null || r === void 0 ? void 0 : r.pointerEvents) !== "none";
}
function dq(e) {
  const t = ve(e);
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
const Sd = Symbol("Last check for pointer-events");
function Nv(e, t) {
  const r = t[Sd];
  if (!(e.config.pointerEventsCheck !== Bt.Never && (!r || Ad(e.config.pointerEventsCheck, Bt.EachApiCall) && r[ee.Call] !== Wr(e, ee.Call) || Ad(e.config.pointerEventsCheck, Bt.EachTrigger) && r[ee.Trigger] !== Wr(e, ee.Trigger))))
    return r == null ? void 0 : r.result;
  const o = dq(t);
  return t[Sd] = {
    [ee.Call]: Wr(e, ee.Call),
    [ee.Trigger]: Wr(e, ee.Trigger),
    result: o
  }, o;
}
function sr(e, t) {
  const r = Nv(e, t);
  if ((r == null ? void 0 : r.pointerEvents) === "none")
    throw new Error([
      `Unable to perform pointer interaction as the element ${r.tree.length > 1 ? "inherits" : "has"} \`pointer-events: none\`:`,
      "",
      fq(r.tree)
    ].join(`
`));
}
function fq(e) {
  return e.reverse().map((t, r) => [
    "".padEnd(r),
    t.tagName,
    t.id && `#${t.id}`,
    t.hasAttribute("data-testid") && `(testId=${t.getAttribute("data-testid")})`,
    pq(t),
    e.length > 1 && r === 0 && "  <-- This element declared `pointer-events: none`",
    e.length > 1 && r === e.length - 1 && "  <-- Asserted pointer events here"
  ].filter(Boolean).join("")).join(`
`);
}
function pq(e) {
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
function Ad(e, t) {
  return (e & t) > 0;
}
function xe(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Cd {
  init(t, r) {
    this.position = r;
    const n = this.getTarget(t), [, o] = pr(null, n), a = this.getEventInit();
    return sr(t, n), t.dispatchUIEvent(n, "pointerover", a), o.forEach((i) => t.dispatchUIEvent(i, "pointerenter", a)), this;
  }
  move(t, r) {
    const n = this.position, o = this.getTarget(t);
    if (this.position = r, !Mv(n, r))
      return;
    const a = this.getTarget(t), i = this.getEventInit(), [s, l] = pr(o, a);
    return {
      leave: () => {
        Fn(t, o) && o !== a && (t.dispatchUIEvent(o, "pointerout", i), s.forEach((u) => t.dispatchUIEvent(u, "pointerleave", i)));
      },
      enter: () => {
        sr(t, a), o !== a && (t.dispatchUIEvent(a, "pointerover", i), l.forEach((u) => t.dispatchUIEvent(u, "pointerenter", i)));
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
    sr(t, n), this.isDown = !0, this.isPrevented = !t.dispatchUIEvent(n, "pointerdown", this.getEventInit());
  }
  up(t, r) {
    if (!this.isDown)
      return;
    const n = this.getTarget(t);
    sr(t, n), this.isDown = !1, t.dispatchUIEvent(n, "pointerup", this.getEventInit());
  }
  release(t) {
    const r = this.getTarget(t), [n] = pr(r, null), o = this.getEventInit();
    Fn(t, r) && (t.dispatchUIEvent(r, "pointerout", o), n.forEach((a) => t.dispatchUIEvent(a, "pointerleave", o))), this.isCancelled = !0;
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
    xe(this, "pointerId", void 0), xe(this, "pointerType", void 0), xe(this, "isPrimary", void 0), xe(this, "isMultitouch", !1), xe(this, "isCancelled", !1), xe(this, "isDown", !1), xe(this, "isPrevented", !1), xe(this, "position", {}), this.pointerId = t, this.pointerType = r, this.isPrimary = n, this.isMultitouch = !n;
  }
}
function Ie(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class yq {
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
    Ie(this, "system", void 0), Ie(this, "mouse", void 0), Ie(this, "buttons", void 0), Ie(this, "devices", new class {
      get(r) {
        var n, o, a;
        return (a = (n = this.registry)[o = r]) !== null && a !== void 0 || (n[o] = new iq()), this.registry[r];
      }
      constructor() {
        Ie(this, "registry", {});
      }
    }()), Ie(this, "pointers", new class {
      new(r, n) {
        const o = n.pointerType !== "touch" || !Object.values(this.registry).some((a) => a.pointerType === "touch" && !a.isCancelled);
        return o || Object.values(this.registry).forEach((a) => {
          a.pointerType === n.pointerType && !a.isCancelled && (a.isMultitouch = !0);
        }), this.registry[r] = new Cd({
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
        Ie(this, "registry", {
          mouse: new Cd({
            pointerId: 1,
            pointerType: "mouse",
            isPrimary: !0
          })
        }), Ie(this, "nextId", 2);
      }
    }()), this.system = t, this.buttons = new Iv(), this.mouse = new cq();
  }
}
function Td(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Bv {
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
    Td(this, "keyboard", new tq(this)), Td(this, "pointer", new yq(this));
  }
}
async function vq(e) {
  const t = [];
  return this.config.skipHover || t.push({
    target: e
  }), t.push({
    keys: "[MouseLeft]",
    target: e
  }), this.pointer(t);
}
async function mq(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft]"
  ]);
}
async function bq(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft][MouseLeft]"
  ]);
}
async function hq(e) {
  return this.pointer({
    target: e
  });
}
async function gq(e) {
  return sr(this, this.system.pointer.getMouseTarget(this)), this.pointer({
    target: e.ownerDocument.body
  });
}
async function Eq({ shift: e } = {}) {
  return this.keyboard(e === !0 ? "{Shift>}{Tab}{/Shift}" : e === !1 ? "[/ShiftLeft][/ShiftRight]{Tab}" : "{Tab}");
}
function _q(e, t) {
  const r = [];
  do {
    const { type: o, descriptor: a, consumedLength: i, releasePrevious: s, releaseSelf: l = !0, repeat: u } = bv(t, "keyboard");
    var n;
    const c = (n = e.find((d) => {
      if (o === "[") {
        var f;
        return ((f = d.code) === null || f === void 0 ? void 0 : f.toLowerCase()) === a.toLowerCase();
      } else if (o === "{") {
        var y;
        return ((y = d.key) === null || y === void 0 ? void 0 : y.toLowerCase()) === a.toLowerCase();
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
async function Rq(e) {
  const t = _q(this.config.keyboardMap, e);
  for (let r = 0; r < t.length; r++)
    await Jt(this.config), await Pq(this, t[r]);
}
async function Pq(e, { keyDef: t, releasePrevious: r, releaseSelf: n, repeat: o }) {
  const { system: a } = e;
  if (a.keyboard.isKeyPressed(t) && await a.keyboard.keyup(e, t), !r) {
    for (let i = 1; i <= o; i++)
      await a.keyboard.keydown(e, t), i < o && await Jt(e.config);
    n && await a.keyboard.keyup(e, t);
  }
}
async function wq(e) {
  for (const t of e.system.keyboard.getPressedKeys())
    await e.system.keyboard.keyup(e, t);
}
function kv(e) {
  const t = me(e) ? {
    "text/plain": Sq(e)
  } : {
    "text/plain": String(e.ownerDocument.getSelection())
  }, r = Qs(ve(e));
  for (const n in t)
    t[n] && r.setData(n, t[n]);
  return r;
}
function Sq(e) {
  const t = Pr(e);
  return be(e).substring(t.startOffset, t.endOffset);
}
async function Aq() {
  const e = this.config.document;
  var t;
  const r = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), n = kv(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "copy", {
      clipboardData: n
    }) && this.config.writeToClipboard && await yv(e, n), n;
}
async function Cq() {
  const e = this.config.document;
  var t;
  const r = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), n = kv(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "cut", {
      clipboardData: n
    }) && this.config.writeToClipboard && await yv(r.ownerDocument, n), n;
}
async function Tq(e) {
  const t = this.config.document;
  var r;
  const n = (r = t.activeElement) !== null && r !== void 0 ? r : (
    /* istanbul ignore next */
    t.body
  );
  var o;
  const a = (o = typeof e == "string" ? Oq(t, e) : e) !== null && o !== void 0 ? o : await J1(t).catch(() => {
    throw new Error("`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.");
  });
  this.dispatchUIEvent(n, "paste", {
    clipboardData: a
  });
}
function Oq(e, t) {
  const r = Qs(ve(e));
  return r.setData("text", t), r;
}
function Od(e, t) {
  const r = [];
  do {
    const { descriptor: n, consumedLength: o, releasePrevious: a, releaseSelf: i = !0 } = bv(t, "pointer"), s = e.find((l) => l.name === n);
    s && r.push({
      keyDef: s,
      releasePrevious: a,
      releaseSelf: i
    }), t = t.slice(o);
  } while (t);
  return r;
}
async function $q(e) {
  const { pointerMap: t } = this.config, r = [];
  (Array.isArray(e) ? e : [
    e
  ]).forEach((n) => {
    typeof n == "string" ? r.push(...Od(t, n)) : "keys" in n ? r.push(...Od(t, n.keys).map((o) => ({
      ...n,
      ...o
    }))) : r.push(n);
  });
  for (let n = 0; n < r.length; n++)
    await Jt(this.config), await xq(this, r[n]);
  this.system.pointer.resetClickCount();
}
async function xq(e, t) {
  var r, n;
  const o = "pointerName" in t && t.pointerName ? t.pointerName : "keyDef" in t ? e.system.pointer.getPointerName(t.keyDef) : "mouse", a = e.system.pointer.getPreviousPosition(o);
  var i, s, l, u;
  const c = {
    target: (i = t.target) !== null && i !== void 0 ? i : Iq(e, a),
    coords: (s = t.coords) !== null && s !== void 0 ? s : a == null ? void 0 : a.coords,
    caret: {
      node: (l = t.node) !== null && l !== void 0 ? l : $d(t) || a == null || (r = a.caret) === null || r === void 0 ? void 0 : r.node,
      offset: (u = t.offset) !== null && u !== void 0 ? u : $d(t) || a == null || (n = a.caret) === null || n === void 0 ? void 0 : n.offset
    }
  };
  "keyDef" in t ? (e.system.pointer.isKeyPressed(t.keyDef) && (ir(e, ee.Trigger), await e.system.pointer.release(e, t.keyDef, c)), t.releasePrevious || (ir(e, ee.Trigger), await e.system.pointer.press(e, t.keyDef, c), t.releaseSelf && (ir(e, ee.Trigger), await e.system.pointer.release(e, t.keyDef, c)))) : (ir(e, ee.Trigger), await e.system.pointer.move(e, o, c));
}
function $d(e) {
  var t, r;
  return !!((r = (t = e.target) !== null && t !== void 0 ? t : e.node) !== null && r !== void 0 ? r : e.offset !== void 0);
}
function Iq(e, t) {
  if (!t)
    throw new Error("This pointer has no previous position. Provide a target property!");
  var r;
  return (r = t.target) !== null && r !== void 0 ? r : e.config.document.body;
}
async function qq(e) {
  if (!zt(e) || we(e))
    throw new Error("clear()` is only supported on editable elements.");
  if (Ke(e), e.ownerDocument.activeElement !== e)
    throw new Error("The element to be cleared could not be focused.");
  if (Av(e), !II(e))
    throw new Error("The element content to be cleared could not be selected.");
  Xt(this, e, "", "deleteContentBackward");
}
async function Mq(e, t) {
  return Dv.call(this, !0, e, t);
}
async function Nq(e, t) {
  return Dv.call(this, !1, e, t);
}
async function Dv(e, t, r) {
  if (!e && !t.multiple)
    throw M().getElementError("Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.", t);
  const n = Array.isArray(r) ? r : [
    r
  ], o = Array.from(t.querySelectorAll('option, [role="option"]')), a = n.map((s) => {
    if (typeof s != "string" && o.includes(s))
      return s;
    {
      const l = o.find((u) => u.value === s || u.innerHTML === s);
      if (l)
        return l;
      throw M().getElementError(`Value "${String(s)}" not found in options`, t);
    }
  }).filter((s) => !we(s));
  if (we(t) || !a.length)
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
        const l = this.config.pointerEventsCheck === 0 ? !0 : Fn(this, s);
        l && (this.dispatchUIEvent(s, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(s, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(s, "pointermove"), this.dispatchUIEvent(s, "mousemove"), this.dispatchUIEvent(s, "pointerdown"), this.dispatchUIEvent(s, "mousedown")), Ke(t), l && (this.dispatchUIEvent(s, "pointerup"), this.dispatchUIEvent(s, "mouseup")), i(s), l && this.dispatchUIEvent(s, "click"), await Jt(this.config);
      }
    else if (a.length === 1) {
      const s = this.config.pointerEventsCheck === 0 ? !0 : Fn(this, t);
      s ? await this.click(t) : Ke(t), i(a[0]), s && (this.dispatchUIEvent(t, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(t, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(t, "pointerup"), this.dispatchUIEvent(t, "mouseup"), this.dispatchUIEvent(t, "click")), await Jt(this.config);
    } else
      throw M().getElementError("Cannot select multiple options on a non-multiple select", t);
  else if (t.getAttribute("role") === "listbox")
    for (const s of a)
      await this.click(s), await this.unhover(s);
  else
    throw M().getElementError("Cannot select options on elements that are neither select nor listbox elements", t);
}
async function Bq(e, t, { skipClick: r = this.config.skipClick, skipAutoClose: n = this.config.skipAutoClose, initialSelectionStart: o, initialSelectionEnd: a } = {}) {
  e.disabled || (r || await this.click(e), o !== void 0 && lr(e, o, a ?? o), await this.keyboard(t), n || await wq(this));
}
const xd = Symbol("files and value properties are mocked");
function Al(e, t, r) {
  r ? Object.defineProperty(e, t, r) : delete e[t];
}
function kq(e, t) {
  var r;
  (r = e[xd]) === null || r === void 0 || r.restore();
  const n = Object.getOwnPropertyDescriptor(e, "type"), o = Object.getOwnPropertyDescriptor(e, "value"), a = Object.getOwnPropertyDescriptor(e, "files");
  function i() {
    Al(e, "type", n), Al(e, "value", o), Al(e, "files", a);
  }
  e[xd] = {
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
async function Dq(e, t) {
  const r = O(e, "label") ? e.control : e;
  if (!r || !O(r, "input", {
    type: "file"
  }))
    throw new TypeError(`The ${r === e ? "given" : "associated"} ${r == null ? void 0 : r.tagName} element does not accept file uploads`);
  if (we(e))
    return;
  const n = (Array.isArray(t) ? t : [
    t
  ]).filter((a) => !this.config.applyAccept || Fq(a, r.accept)).slice(0, r.multiple ? void 0 : 1), o = () => {
    var a;
    n.length === ((a = r.files) === null || a === void 0 ? void 0 : a.length) && n.every((i, s) => {
      var l;
      return i === ((l = r.files) === null || l === void 0 ? void 0 : l.item(s));
    }) || (kq(r, Js(ve(e), n)), this.dispatchUIEvent(r, "input"), this.dispatchUIEvent(r, "change"));
  };
  r.addEventListener("fileDialog", o), await this.click(e), r.removeEventListener("fileDialog", o);
}
function Fq(e, t) {
  if (!t)
    return !0;
  const r = [
    "audio/*",
    "image/*",
    "video/*"
  ];
  return t.split(",").some((n) => n.startsWith(".") ? e.name.endsWith(n) : r.includes(n) ? e.type.startsWith(n.substr(0, n.length - 1)) : e.type === n);
}
const Id = {
  click: vq,
  dblClick: mq,
  tripleClick: bq,
  hover: hq,
  unhover: gq,
  tab: Eq,
  keyboard: Rq,
  copy: Aq,
  cut: Cq,
  paste: Tq,
  pointer: $q,
  clear: qq,
  deselectOptions: Nq,
  selectOptions: Mq,
  type: Bq,
  upload: Dq
};
function Lq(e) {
  return M().asyncWrapper(e);
}
const Fv = {
  applyAccept: !0,
  autoModify: !0,
  delay: 0,
  document: globalThis.document,
  keyboardMap: rq,
  pointerMap: nq,
  pointerEventsCheck: Bt.EachApiCall,
  skipAutoClose: !1,
  skipClick: !1,
  skipHover: !1,
  writeToClipboard: !1,
  advanceTimers: () => Promise.resolve()
}, jq = {
  ...Fv,
  writeToClipboard: !0
};
function Lv(e = {}, t = jq, r) {
  const n = Vq(e, r, t);
  return {
    ...t,
    ...e,
    document: n
  };
}
function Uq(e = {}) {
  const t = Lv(e);
  xv(t.document);
  var r;
  const n = (r = t.document.defaultView) !== null && r !== void 0 ? r : (
    /* istanbul ignore next */
    globalThis.window
  );
  return Y1(n), nu(t).api;
}
function Z({ keyboardState: e, pointerState: t, ...r } = {}, n) {
  const o = Lv(r, Fv, n);
  xv(o.document);
  var a;
  const i = (a = t ?? e) !== null && a !== void 0 ? a : new Bv();
  return {
    api: nu(o, i).api,
    system: i
  };
}
function Hq(e) {
  return nu({
    ...this.config,
    ...e
  }, this.system).api;
}
function Wq(e, t) {
  function r(...n) {
    return ir(e, ee.Call), Lq(() => t.apply(e, n).then(async (o) => (await Jt(e.config), o)));
  }
  return Object.defineProperty(r, "name", {
    get: () => t.name
  }), r;
}
function nu(e, t = new Bv()) {
  const r = {};
  return Object.assign(r, {
    config: e,
    dispatchEvent: $v.bind(r),
    dispatchUIEvent: VI.bind(r),
    system: t,
    levelRefs: {},
    ...Id
  }), {
    instance: r,
    api: {
      ...Object.fromEntries(Object.entries(Id).map(([n, o]) => [
        n,
        Wq(r, o)
      ])),
      setup: Hq.bind(r)
    }
  };
}
function Vq(e, t, r) {
  var n, o;
  return (o = (n = e.document) !== null && n !== void 0 ? n : t && JI(t)) !== null && o !== void 0 ? o : r.document;
}
function Gq(e) {
  return Z().api.clear(e);
}
function zq(e, t = {}) {
  return Z(t, e).api.click(e);
}
function Yq(e = {}) {
  return Z(e).api.copy();
}
function Kq(e = {}) {
  return Z(e).api.cut();
}
function Xq(e, t = {}) {
  return Z(t).api.dblClick(e);
}
function Jq(e, t, r = {}) {
  return Z(r).api.deselectOptions(e, t);
}
function Qq(e, t = {}) {
  return Z(t).api.hover(e);
}
async function Zq(e, t = {}) {
  const { api: r, system: n } = Z(t);
  return r.keyboard(e).then(() => n);
}
async function eM(e, t = {}) {
  const { api: r, system: n } = Z(t);
  return r.pointer(e).then(() => n);
}
function tM(e, t) {
  return Z(t).api.paste(e);
}
function rM(e, t, r = {}) {
  return Z(r).api.selectOptions(e, t);
}
function nM(e, t = {}) {
  return Z(t).api.tripleClick(e);
}
function oM(e, t, r = {}) {
  return Z(r, e).api.type(e, t, r);
}
function aM(e, t = {}) {
  const { api: r, system: n } = Z(t);
  return n.pointer.setMousePosition({
    target: e
  }), r.unhover(e);
}
function iM(e, t, r = {}) {
  return Z(r).api.upload(e, t);
}
function lM(e = {}) {
  return Z().api.tab(e);
}
const sM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: Gq,
  click: zq,
  copy: Yq,
  cut: Kq,
  dblClick: Xq,
  deselectOptions: Jq,
  hover: Qq,
  keyboard: Zq,
  paste: tM,
  pointer: eM,
  selectOptions: rM,
  tab: lM,
  tripleClick: nM,
  type: oM,
  unhover: aM,
  upload: iM
}, Symbol.toStringTag, { value: "Module" })), qd = {
  ...sM,
  setup: Uq
};
var K = (() => {
  let e;
  return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ? e = self : e = {}, e;
})(), { LOGLEVEL: uM } = K, De = { trace: 1, debug: 2, info: 3, warn: 4, error: 5, silent: 10 }, cM = uM, Ct = De[cM] || De.info, jv = { trace: (e, ...t) => {
  Ct <= De.trace && console.trace(e, ...t);
}, debug: (e, ...t) => {
  Ct <= De.debug && console.debug(e, ...t);
}, info: (e, ...t) => {
  Ct <= De.info && console.info(e, ...t);
}, warn: (e, ...t) => {
  Ct <= De.warn && console.warn(e, ...t);
}, error: (e, ...t) => {
  Ct <= De.error && console.error(e, ...t);
}, log: (e, ...t) => {
  Ct < De.silent && console.log(e, ...t);
} }, hs = /* @__PURE__ */ new Set(), te = (e) => (t, ...r) => {
  if (!hs.has(t))
    return hs.add(t), jv[e](t, ...r);
};
te.clear = () => hs.clear();
te.trace = te("trace");
te.debug = te("debug");
te.info = te("info");
te.warn = te("warn");
te.error = te("error");
te.log = te("log");
var dM = (e) => e.transports !== void 0, fM = () => Math.random().toString(16).slice(2), pM = class {
  constructor(e = {}) {
    this.sender = fM(), this.events = {}, this.data = {}, this.transports = [], this.isAsync = e.async || !1, dM(e) ? (this.transports = e.transports || [], this.transports.forEach((t) => {
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
}, Uv = ((e) => (e.CHANNEL_CREATED = "channelCreated", e.CONFIG_ERROR = "configError", e.STORY_INDEX_INVALIDATED = "storyIndexInvalidated", e.STORY_SPECIFIED = "storySpecified", e.SET_CONFIG = "setConfig", e.SET_STORIES = "setStories", e.SET_INDEX = "setIndex", e.SET_CURRENT_STORY = "setCurrentStory", e.CURRENT_STORY_WAS_SET = "currentStoryWasSet", e.FORCE_RE_RENDER = "forceReRender", e.FORCE_REMOUNT = "forceRemount", e.PRELOAD_ENTRIES = "preloadStories", e.STORY_PREPARED = "storyPrepared", e.DOCS_PREPARED = "docsPrepared", e.STORY_CHANGED = "storyChanged", e.STORY_UNCHANGED = "storyUnchanged", e.STORY_RENDERED = "storyRendered", e.STORY_MISSING = "storyMissing", e.STORY_ERRORED = "storyErrored", e.STORY_THREW_EXCEPTION = "storyThrewException", e.STORY_RENDER_PHASE_CHANGED = "storyRenderPhaseChanged", e.PLAY_FUNCTION_THREW_EXCEPTION = "playFunctionThrewException", e.UPDATE_STORY_ARGS = "updateStoryArgs", e.STORY_ARGS_UPDATED = "storyArgsUpdated", e.RESET_STORY_ARGS = "resetStoryArgs", e.SET_GLOBALS = "setGlobals", e.UPDATE_GLOBALS = "updateGlobals", e.GLOBALS_UPDATED = "globalsUpdated", e.REGISTER_SUBSCRIPTION = "registerSubscription", e.PREVIEW_KEYDOWN = "previewKeydown", e.PREVIEW_BUILDER_PROGRESS = "preview_builder_progress", e.SELECT_STORY = "selectStory", e.STORIES_COLLAPSE_ALL = "storiesCollapseAll", e.STORIES_EXPAND_ALL = "storiesExpandAll", e.DOCS_RENDERED = "docsRendered", e.SHARED_STATE_CHANGED = "sharedStateChanged", e.SHARED_STATE_SET = "sharedStateSet", e.NAVIGATE_URL = "navigateUrl", e.UPDATE_QUERY_PARAMS = "updateQueryParams", e.REQUEST_WHATS_NEW_DATA = "requestWhatsNewData", e.RESULT_WHATS_NEW_DATA = "resultWhatsNewData", e.SET_WHATS_NEW_CACHE = "setWhatsNewCache", e.TOGGLE_WHATS_NEW_NOTIFICATIONS = "toggleWhatsNewNotifications", e.TELEMETRY_ERROR = "telemetryError", e))(Uv || {}), { CHANNEL_CREATED: zM, CONFIG_ERROR: YM, CURRENT_STORY_WAS_SET: KM, DOCS_PREPARED: XM, DOCS_RENDERED: JM, FORCE_RE_RENDER: QM, FORCE_REMOUNT: Md, GLOBALS_UPDATED: ZM, NAVIGATE_URL: eN, PLAY_FUNCTION_THREW_EXCEPTION: tN, PRELOAD_ENTRIES: rN, PREVIEW_BUILDER_PROGRESS: nN, PREVIEW_KEYDOWN: oN, REGISTER_SUBSCRIPTION: aN, RESET_STORY_ARGS: iN, SELECT_STORY: lN, SET_CONFIG: sN, SET_CURRENT_STORY: yM, SET_GLOBALS: uN, SET_INDEX: cN, SET_STORIES: dN, SHARED_STATE_CHANGED: fN, SHARED_STATE_SET: pN, STORIES_COLLAPSE_ALL: yN, STORIES_EXPAND_ALL: vN, STORY_ARGS_UPDATED: mN, STORY_CHANGED: bN, STORY_ERRORED: hN, STORY_INDEX_INVALIDATED: gN, STORY_MISSING: EN, STORY_PREPARED: _N, STORY_RENDER_PHASE_CHANGED: vM, STORY_RENDERED: RN, STORY_SPECIFIED: PN, STORY_THREW_EXCEPTION: wN, STORY_UNCHANGED: SN, UPDATE_GLOBALS: AN, UPDATE_QUERY_PARAMS: CN, UPDATE_STORY_ARGS: TN, REQUEST_WHATS_NEW_DATA: ON, RESULT_WHATS_NEW_DATA: $N, SET_WHATS_NEW_CACHE: xN, TOGGLE_WHATS_NEW_NOTIFICATIONS: IN, TELEMETRY_ERROR: qN } = Uv, mM = new Error("ignoredException");
function bM() {
  let e = { setHandler: () => {
  }, send: () => {
  } };
  return new pM({ transport: e });
}
var hM = class {
  constructor() {
    this.getChannel = () => {
      if (!this.channel) {
        let e = bM();
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
}, Cl = "__STORYBOOK_ADDONS_PREVIEW";
function gM() {
  return K[Cl] || (K[Cl] = new hM()), K[Cl];
}
var EM = gM(), _M = ((e) => (e.DONE = "done", e.ERROR = "error", e.ACTIVE = "active", e.WAITING = "waiting", e))(_M || {}), ge = { CALL: "storybook/instrumenter/call", SYNC: "storybook/instrumenter/sync", START: "storybook/instrumenter/start", BACK: "storybook/instrumenter/back", GOTO: "storybook/instrumenter/goto", NEXT: "storybook/instrumenter/next", END: "storybook/instrumenter/end" }, Nd = { start: !1, back: !1, goto: !1, next: !1, end: !1 }, Bd = new Error("This function ran after the play function completed. Did you forget to `await` it?"), kd = (e) => Object.prototype.toString.call(e) === "[object Object]", RM = (e) => Object.prototype.toString.call(e) === "[object Module]", PM = (e) => {
  if (!kd(e) && !RM(e))
    return !1;
  if (e.constructor === void 0)
    return !0;
  let t = e.constructor.prototype;
  return !(!kd(t) || Object.prototype.hasOwnProperty.call(t, "isPrototypeOf") === !1);
}, wM = (e) => {
  try {
    return new e.constructor();
  } catch {
    return {};
  }
}, Tl = () => ({ renderPhase: void 0, isDebugging: !1, isPlaying: !1, isLocked: !1, cursor: 0, calls: [], shadowCalls: [], callRefsByResult: /* @__PURE__ */ new Map(), chainedCallIds: /* @__PURE__ */ new Set(), ancestors: [], playUntil: void 0, resolvers: {}, syncTimeout: void 0 }), Dd = (e, t = !1) => {
  let r = (t ? e.shadowCalls : e.calls).filter((o) => o.retain);
  if (!r.length)
    return;
  let n = new Map(Array.from(e.callRefsByResult.entries()).filter(([, o]) => o.retain));
  return { cursor: r.length, calls: r, callRefsByResult: n };
}, SM = class {
  constructor() {
    this.initialized = !1, this.channel = EM.getChannel(), this.state = K.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {};
    let e = ({ storyId: i, isPlaying: s = !0, isDebugging: l = !1 }) => {
      let u = this.getState(i);
      this.setState(i, { ...Tl(), ...Dd(u, l), shadowCalls: l ? u.shadowCalls : [], chainedCallIds: l ? u.chainedCallIds : /* @__PURE__ */ new Set(), playUntil: l ? u.playUntil : void 0, isPlaying: s, isDebugging: l }), this.sync(i);
    };
    this.channel.on(Md, e), this.channel.on(vM, ({ storyId: i, newPhase: s }) => {
      let { isDebugging: l } = this.getState(i);
      this.setState(i, { renderPhase: s }), s === "preparing" && l && e({ storyId: i }), s === "playing" && e({ storyId: i, isDebugging: l }), s === "played" && this.setState(i, { isLocked: !1, isPlaying: !1, isDebugging: !1 }), s === "errored" && this.setState(i, { isLocked: !1, isPlaying: !1 });
    }), this.channel.on(yM, () => {
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
      }), this.channel.emit(Md, { storyId: i, isDebugging: !0 });
    }, r = ({ storyId: i }) => {
      var u;
      let s = this.getLog(i).filter((c) => !c.ancestors.length), l = s.reduceRight((c, d, f) => c >= 0 || d.status === "waiting" ? c : f, -1);
      t({ storyId: i, playUntil: (u = s[l - 1]) == null ? void 0 : u.callId });
    }, n = ({ storyId: i, callId: s }) => {
      var y;
      let { calls: l, shadowCalls: u, resolvers: c } = this.getState(i), d = l.find(({ id: m }) => m === s), f = u.find(({ id: m }) => m === s);
      if (!d && f && Object.values(c).length > 0) {
        let m = (y = this.getLog(i).find((b) => b.status === "waiting")) == null ? void 0 : y.callId;
        f.id !== m && this.setState(i, { playUntil: f.id }), Object.values(c).forEach((b) => b());
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
    this.channel.on(ge.START, t), this.channel.on(ge.BACK, r), this.channel.on(ge.GOTO, n), this.channel.on(ge.NEXT, o), this.channel.on(ge.END, a);
  }
  getState(e) {
    return this.state[e] || Tl();
  }
  setState(e, t) {
    let r = this.getState(e), n = typeof t == "function" ? t(r) : t;
    this.state = { ...this.state, [e]: { ...r, ...n } }, K.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
  }
  cleanup() {
    this.state = Object.entries(this.state).reduce((t, [r, n]) => {
      let o = Dd(n);
      return o && (t[r] = Object.assign(Tl(), o)), t;
    }, {});
    let e = { controlStates: Nd, logItems: [] };
    this.channel.emit(ge.SYNC, e), K.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
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
    if (!PM(e))
      return e;
    let { mutate: r = !1, path: n = [] } = t;
    return Object.keys(e).reduce((o, a) => {
      let i = e[a];
      return typeof i != "function" ? (o[a] = this.instrument(i, { ...t, path: n.concat(a) }), o) : typeof i.__originalFn__ == "function" ? (o[a] = i, o) : (o[a] = (...s) => this.track(a, i, s, t), o[a].__originalFn__ = i, Object.defineProperty(o[a], "name", { value: a, writable: !1 }), Object.keys(i).length > 0 && Object.assign(o[a], this.instrument({ ...i }, { ...t, path: n.concat(a) })), o);
    }, r ? e : wM(e));
  }
  track(e, t, r, n) {
    var m, b, S, p;
    let o = ((m = r == null ? void 0 : r[0]) == null ? void 0 : m.__storyId__) || ((p = (S = (b = K.__STORYBOOK_PREVIEW__) == null ? void 0 : b.selectionStore) == null ? void 0 : S.selection) == null ? void 0 : p.storyId), { cursor: a, ancestors: i } = this.getState(o);
    this.setState(o, { cursor: a + 1 });
    let s = `${i.slice(-1)[0] || o} [${a}] ${e}`, { path: l = [], intercept: u = !1, retain: c = !1 } = n, d = typeof u == "function" ? u(e, l) : u, f = { id: s, cursor: a, storyId: o, ancestors: i, path: l, method: e, args: r, interceptable: d, retain: c }, y = (d && !i.length ? this.intercept : this.invoke).call(this, t, f, n);
    return this.instrument(y, { ...n, mutate: !0, path: [{ __callId__: f.id }] });
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
        let { name: d, message: f, stack: y } = l;
        return { __error__: { name: d, message: f, stack: y } };
      }
      if (l instanceof RegExp) {
        let { flags: d, source: f } = l;
        return { __regexp__: { flags: d, source: f } };
      }
      if (l instanceof K.window.HTMLElement) {
        let { prefix: d, localName: f, id: y, classList: m, innerText: b } = l, S = Array.from(m);
        return { __element__: { prefix: d, localName: f, id: y, classNames: S, innerText: b } };
      }
      return typeof l == "function" ? { __function__: { name: l.name } } : typeof l == "symbol" ? { __symbol__: { description: l.description } } : typeof l == "object" && ((u = l == null ? void 0 : l.constructor) != null && u.name) && ((c = l == null ? void 0 : l.constructor) == null ? void 0 : c.name) !== "Object" ? { __class__: { name: l.constructor.name } } : Object.prototype.toString.call(l) === "[object Object]" ? Object.fromEntries(Object.entries(l).map(([d, f]) => [d, a(f)])) : l;
    }, i = { ...t, args: t.args.map(a) };
    t.path.forEach((l) => {
      l != null && l.__callId__ && this.setState(t.storyId, ({ chainedCallIds: u }) => ({ chainedCallIds: new Set(Array.from(u).concat(l.__callId__)) }));
    });
    let s = (l) => {
      if (l instanceof Error) {
        let { name: u, message: c, stack: d, callId: f = t.id } = l, y = { name: u, message: c, stack: d, callId: f };
        if (this.update({ ...i, status: "error", exception: y }), this.setState(t.storyId, (m) => ({ callRefsByResult: new Map([...Array.from(m.callRefsByResult.entries()), [l, { __callId__: t.id, retain: t.retain }]]) })), t.ancestors.length)
          throw Object.prototype.hasOwnProperty.call(l, "callId") || Object.defineProperty(l, "callId", { value: t.id }), l;
        if (l !== Bd)
          throw jv.warn(l), mM;
      }
      throw l;
    };
    try {
      if (o === "played" && !t.retain)
        throw Bd;
      let l = (r.getArgs ? r.getArgs(t, this.getState(t.storyId)) : t.args).map((c) => typeof c != "function" || Object.keys(c).length ? c : (...d) => {
        let { cursor: f, ancestors: y } = this.getState(t.storyId);
        this.setState(t.storyId, { cursor: 0, ancestors: [...y, t.id] });
        let m = () => this.setState(t.storyId, { cursor: f, ancestors: y }), b = !1;
        try {
          let S = c(...d);
          return S instanceof Promise ? (b = !0, S.finally(m)) : S;
        } finally {
          b || m();
        }
      }), u = e(...l);
      return u && ["object", "function", "symbol"].includes(typeof u) && this.setState(t.storyId, (c) => ({ callRefsByResult: new Map([...Array.from(c.callRefsByResult.entries()), [u, { __callId__: t.id, retain: t.retain }]]) })), this.update({ ...i, status: u instanceof Promise ? "active" : "done" }), u instanceof Promise ? u.then((c) => (this.update({ ...i, status: "done" }), c), s) : u;
    } catch (l) {
      return s(l);
    }
  }
  update(e) {
    this.channel.emit(ge.CALL, e), this.setState(e.storyId, ({ calls: t }) => {
      let r = t.concat(e).reduce((n, o) => Object.assign(n, { [o.id]: o }), {});
      return { calls: Object.values(r).sort((n, o) => n.id.localeCompare(o.id, void 0, { numeric: !0 })) };
    }), this.sync(e.storyId);
  }
  sync(e) {
    let t = () => {
      var u;
      let { isLocked: r, isPlaying: n } = this.getState(e), o = this.getLog(e), a = (u = o.filter(({ ancestors: c }) => !c.length).find((c) => c.status === "waiting")) == null ? void 0 : u.callId, i = o.some((c) => c.status === "active");
      if (r || i || o.length === 0) {
        let c = { controlStates: Nd, logItems: o };
        this.channel.emit(ge.SYNC, c);
        return;
      }
      let s = o.some((c) => c.status === "done" || c.status === "error"), l = { controlStates: { start: s, back: s, goto: !0, next: n, end: n }, logItems: o, pausedAt: a };
      this.channel.emit(ge.SYNC, l);
    };
    this.setState(e, ({ syncTimeout: r }) => (clearTimeout(r), { syncTimeout: setTimeout(t, 0) }));
  }
};
function Hv(e, t = {}) {
  var r, n, o, a;
  try {
    let i = !1, s = !1;
    return (n = (r = K.window.location) == null ? void 0 : r.search) != null && n.includes("instrument=true") ? i = !0 : (a = (o = K.window.location) == null ? void 0 : o.search) != null && a.includes("instrument=false") && (s = !0), K.window.parent === K.window && !i || s ? e : (K.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ || (K.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new SM()), K.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(e, t));
  } catch (i) {
    return te.warn(i), e;
  }
}
var AM = qd.default || qd, un = Hv(
  { ...U1 },
  {
    intercept: (e, t) => t[0] === "fireEvent" || e.startsWith("findBy") || e.startsWith("waitFor")
  }
);
un.screen = Object.entries(un.screen).reduce(
  (e, [t, r]) => Object.defineProperty(e, t, {
    get() {
      return te.warn(nm`
          You are using Testing Library's \`screen\` object. Use \`within(canvasElement)\` instead.
          More info: https://storybook.js.org/docs/react/essentials/interactions
        `), r;
    }
  }),
  { ...un.screen }
);
var {
  buildQueries: MN,
  configure: NN,
  createEvent: BN,
  findAllByAltText: kN,
  findAllByDisplayValue: DN,
  findAllByLabelText: FN,
  findAllByPlaceholderText: LN,
  findAllByRole: jN,
  findAllByTestId: UN,
  findAllByText: HN,
  findAllByTitle: WN,
  findByAltText: VN,
  findByDisplayValue: GN,
  findByLabelText: zN,
  findByPlaceholderText: YN,
  findByRole: KN,
  findByTestId: XN,
  findByText: JN,
  findByTitle: QN,
  fireEvent: ZN,
  getAllByAltText: eB,
  getAllByDisplayValue: tB,
  getAllByLabelText: rB,
  getAllByPlaceholderText: nB,
  getAllByRole: oB,
  getAllByTestId: aB,
  getAllByText: iB,
  getAllByTitle: lB,
  getByAltText: sB,
  getByDisplayValue: uB,
  getByLabelText: cB,
  getByPlaceholderText: dB,
  getByRole: fB,
  getByTestId: pB,
  getByText: yB,
  getByTitle: vB,
  getConfig: mB,
  getDefaultNormalizer: bB,
  getElementError: hB,
  getNodeText: gB,
  getQueriesForElement: EB,
  getRoles: _B,
  getSuggestedQuery: RB,
  isInaccessible: PB,
  logDOM: wB,
  logRoles: SB,
  prettyDOM: AB,
  queries: CB,
  queryAllByAltText: TB,
  queryAllByAttribute: OB,
  queryAllByDisplayValue: $B,
  queryAllByLabelText: xB,
  queryAllByPlaceholderText: IB,
  queryAllByRole: qB,
  queryAllByTestId: MB,
  queryAllByText: NB,
  queryAllByTitle: BB,
  queryByAltText: kB,
  queryByAttribute: DB,
  queryByDisplayValue: FB,
  queryByLabelText: LB,
  queryByPlaceholderText: jB,
  queryByRole: UB,
  queryByTestId: HB,
  queryByText: WB,
  queryByTitle: VB,
  queryHelpers: GB,
  screen: zB,
  waitFor: YB,
  waitForElementToBeRemoved: KB,
  within: XB,
  prettyFormat: JB
} = un, QB = Hv(
  { userEvent: AM },
  { intercept: !0 }
).userEvent;
export {
  QB as u,
  XB as w
};
