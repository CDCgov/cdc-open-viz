import { a as ty, c as Qr, g as ry } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { d as ny } from "./storybook-index-398c73a4.es.js";
function ay(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in e)) {
          const o = Object.getOwnPropertyDescriptor(n, a);
          o && Object.defineProperty(e, a, o.get ? o : {
            enumerable: !0,
            get: () => n[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var _e = {}, Jl = { exports: {} };
Jl.exports;
(function(e) {
  const r = (o = 0) => (i) => `\x1B[${38 + o};5;${i}m`, n = (o = 0) => (i, s, l) => `\x1B[${38 + o};2;${i};${s};${l}m`;
  function a() {
    const o = /* @__PURE__ */ new Map(), i = {
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
        }, l[u] = i[u], o.set(c[0], c[1]);
      Object.defineProperty(i, s, {
        value: l,
        enumerable: !1
      });
    }
    return Object.defineProperty(i, "codes", {
      value: o,
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
    get: a
  });
})(Jl);
var Ad = Jl.exports, we = {};
Object.defineProperty(we, "__esModule", {
  value: !0
});
we.printIteratorEntries = iy;
we.printIteratorValues = ly;
we.printListItems = sy;
we.printObjectProperties = uy;
const oy = (e, t) => {
  const r = Object.keys(e).sort(t);
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((n) => {
    Object.getOwnPropertyDescriptor(e, n).enumerable && r.push(n);
  }), r;
};
function iy(e, t, r, n, a, o, i = ": ") {
  let s = "", l = e.next();
  if (!l.done) {
    s += t.spacingOuter;
    const u = r + t.indent;
    for (; !l.done; ) {
      const c = o(
        l.value[0],
        t,
        u,
        n,
        a
      ), d = o(
        l.value[1],
        t,
        u,
        n,
        a
      );
      s += u + c + i + d, l = e.next(), l.done ? t.min || (s += ",") : s += "," + t.spacingInner;
    }
    s += t.spacingOuter + r;
  }
  return s;
}
function ly(e, t, r, n, a, o) {
  let i = "", s = e.next();
  if (!s.done) {
    i += t.spacingOuter;
    const l = r + t.indent;
    for (; !s.done; )
      i += l + o(s.value, t, l, n, a), s = e.next(), s.done ? t.min || (i += ",") : i += "," + t.spacingInner;
    i += t.spacingOuter + r;
  }
  return i;
}
function sy(e, t, r, n, a, o) {
  let i = "";
  if (e.length) {
    i += t.spacingOuter;
    const s = r + t.indent;
    for (let l = 0; l < e.length; l++)
      i += s, l in e && (i += o(e[l], t, s, n, a)), l < e.length - 1 ? i += "," + t.spacingInner : t.min || (i += ",");
    i += t.spacingOuter + r;
  }
  return i;
}
function uy(e, t, r, n, a, o) {
  let i = "";
  const s = oy(e, t.compareKeys);
  if (s.length) {
    i += t.spacingOuter;
    const l = r + t.indent;
    for (let u = 0; u < s.length; u++) {
      const c = s[u], d = o(c, t, l, n, a), f = o(e[c], t, l, n, a);
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
var Us = we, Jr = function() {
  return typeof globalThis < "u" ? globalThis : typeof Jr < "u" ? Jr : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), hi = Jr["jest-symbol-do-not-touch"] || Jr.Symbol;
const cy = typeof hi == "function" && hi.for ? hi.for("jest.asymmetricMatcher") : 1267621, wr = " ", Od = (e, t, r, n, a, o) => {
  const i = e.toString();
  return i === "ArrayContaining" || i === "ArrayNotContaining" ? ++n > t.maxDepth ? "[" + i + "]" : i + wr + "[" + (0, Us.printListItems)(
    e.sample,
    t,
    r,
    n,
    a,
    o
  ) + "]" : i === "ObjectContaining" || i === "ObjectNotContaining" ? ++n > t.maxDepth ? "[" + i + "]" : i + wr + "{" + (0, Us.printObjectProperties)(
    e.sample,
    t,
    r,
    n,
    a,
    o
  ) + "}" : i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining" ? i + wr + o(e.sample, t, r, n, a) : e.toAsymmetricMatcher();
};
ke.serialize = Od;
const $d = (e) => e && e.$$typeof === cy;
ke.test = $d;
const dy = {
  serialize: Od,
  test: $d
};
var fy = dy;
ke.default = fy;
var De = {}, py = ({ onlyFirst: e = !1 } = {}) => {
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
var xd = qd(py), k = qd(Ad);
function qd(e) {
  return e && e.__esModule ? e : { default: e };
}
const my = (e) => e.replace((0, xd.default)(), (t) => {
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
}), Id = (e) => typeof e == "string" && !!e.match((0, xd.default)());
De.test = Id;
const Md = (e, t, r, n, a, o) => o(my(e), t, r, n, a);
De.serialize = Md;
const vy = {
  serialize: Md,
  test: Id
};
var yy = vy;
De.default = yy;
var Le = {};
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.test = Le.serialize = Le.default = void 0;
var Hs = we;
const by = " ", Nd = ["DOMStringMap", "NamedNodeMap"], hy = /^(HTML\w*Collection|NodeList)$/, gy = (e) => Nd.indexOf(e) !== -1 || hy.test(e), Bd = (e) => e && e.constructor && !!e.constructor.name && gy(e.constructor.name);
Le.test = Bd;
const Ey = (e) => e.constructor.name === "NamedNodeMap", kd = (e, t, r, n, a, o) => {
  const i = e.constructor.name;
  return ++n > t.maxDepth ? "[" + i + "]" : (t.min ? "" : i + by) + (Nd.indexOf(i) !== -1 ? "{" + (0, Hs.printObjectProperties)(
    Ey(e) ? Array.from(e).reduce((s, l) => (s[l.name] = l.value, s), {}) : { ...e },
    t,
    r,
    n,
    a,
    o
  ) + "}" : "[" + (0, Hs.printListItems)(
    Array.from(e),
    t,
    r,
    n,
    a,
    o
  ) + "]");
};
Le.serialize = kd;
const _y = {
  serialize: kd,
  test: Bd
};
var Ry = _y;
Le.default = Ry;
var Fe = {}, G = {}, Zl = {};
Object.defineProperty(Zl, "__esModule", {
  value: !0
});
Zl.default = wy;
function wy(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(G, "__esModule", {
  value: !0
});
G.printText = G.printProps = G.printElementAsLeaf = G.printElement = G.printComment = G.printChildren = void 0;
var Dd = Cy(Zl);
function Cy(e) {
  return e && e.__esModule ? e : { default: e };
}
const Py = (e, t, r, n, a, o, i) => {
  const s = n + r.indent, l = r.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, r, s, a, o);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = r.spacingOuter + s + d + r.spacingOuter + n), d = "{" + d + "}"), r.spacingInner + n + l.prop.open + u + l.prop.close + "=" + l.value.open + d + l.value.close;
  }).join("");
};
G.printProps = Py;
const Sy = (e, t, r, n, a, o) => e.map(
  (i) => t.spacingOuter + r + (typeof i == "string" ? Ld(i, t) : o(i, t, r, n, a))
).join("");
G.printChildren = Sy;
const Ld = (e, t) => {
  const r = t.colors.content;
  return r.open + (0, Dd.default)(e) + r.close;
};
G.printText = Ld;
const Ty = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + (0, Dd.default)(e) + "-->" + r.close;
};
G.printComment = Ty;
const Ay = (e, t, r, n, a) => {
  const o = n.colors.tag;
  return o.open + "<" + e + (t && o.close + t + n.spacingOuter + a + o.open) + (r ? ">" + o.close + r + n.spacingOuter + a + o.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + o.close;
};
G.printElement = Ay;
const Oy = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
};
G.printElementAsLeaf = Oy;
Object.defineProperty(Fe, "__esModule", {
  value: !0
});
Fe.test = Fe.serialize = Fe.default = void 0;
var pt = G;
const $y = 1, Fd = 3, jd = 8, Ud = 11, xy = /^((HTML|SVG)\w*)?Element$/, qy = (e) => {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}, Iy = (e) => {
  const t = e.constructor.name, { nodeType: r, tagName: n } = e, a = typeof n == "string" && n.includes("-") || qy(e);
  return r === $y && (xy.test(t) || a) || r === Fd && t === "Text" || r === jd && t === "Comment" || r === Ud && t === "DocumentFragment";
}, Hd = (e) => {
  var t;
  return (e == null || (t = e.constructor) === null || t === void 0 ? void 0 : t.name) && Iy(e);
};
Fe.test = Hd;
function My(e) {
  return e.nodeType === Fd;
}
function Ny(e) {
  return e.nodeType === jd;
}
function gi(e) {
  return e.nodeType === Ud;
}
const Wd = (e, t, r, n, a, o) => {
  if (My(e))
    return (0, pt.printText)(e.data, t);
  if (Ny(e))
    return (0, pt.printComment)(e.data, t);
  const i = gi(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++n > t.maxDepth ? (0, pt.printElementAsLeaf)(i, t) : (0, pt.printElement)(
    i,
    (0, pt.printProps)(
      gi(e) ? [] : Array.from(e.attributes).map((s) => s.name).sort(),
      gi(e) ? {} : Array.from(e.attributes).reduce((s, l) => (s[l.name] = l.value, s), {}),
      t,
      r + t.indent,
      n,
      a,
      o
    ),
    (0, pt.printChildren)(
      Array.prototype.slice.call(e.childNodes || e.children),
      t,
      r + t.indent,
      n,
      a,
      o
    ),
    t,
    r
  );
};
Fe.serialize = Wd;
const By = {
  serialize: Wd,
  test: Hd
};
var ky = By;
Fe.default = ky;
var je = {};
Object.defineProperty(je, "__esModule", {
  value: !0
});
je.test = je.serialize = je.default = void 0;
var tr = we;
const Dy = "@@__IMMUTABLE_ITERABLE__@@", Ly = "@@__IMMUTABLE_LIST__@@", Fy = "@@__IMMUTABLE_KEYED__@@", jy = "@@__IMMUTABLE_MAP__@@", Ws = "@@__IMMUTABLE_ORDERED__@@", Uy = "@@__IMMUTABLE_RECORD__@@", Hy = "@@__IMMUTABLE_SEQ__@@", Wy = "@@__IMMUTABLE_SET__@@", Vy = "@@__IMMUTABLE_STACK__@@", Pt = (e) => "Immutable." + e, Rn = (e) => "[" + e + "]", rr = " ", Vs = "…", Gy = (e, t, r, n, a, o, i) => ++n > t.maxDepth ? Rn(Pt(i)) : Pt(i) + rr + "{" + (0, tr.printIteratorEntries)(
  e.entries(),
  t,
  r,
  n,
  a,
  o
) + "}";
function zy(e) {
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
const Yy = (e, t, r, n, a, o) => {
  const i = Pt(e._name || "Record");
  return ++n > t.maxDepth ? Rn(i) : i + rr + "{" + (0, tr.printIteratorEntries)(
    zy(e),
    t,
    r,
    n,
    a,
    o
  ) + "}";
}, Ky = (e, t, r, n, a, o) => {
  const i = Pt("Seq");
  return ++n > t.maxDepth ? Rn(i) : e[Fy] ? i + rr + "{" + // from Immutable collection of entries or from ECMAScript object
  (e._iter || e._object ? (0, tr.printIteratorEntries)(
    e.entries(),
    t,
    r,
    n,
    a,
    o
  ) : Vs) + "}" : i + rr + "[" + (e._iter || // from Immutable collection of values
  e._array || // from ECMAScript array
  e._collection || // from ECMAScript collection in immutable v4
  e._iterable ? (0, tr.printIteratorValues)(
    e.values(),
    t,
    r,
    n,
    a,
    o
  ) : Vs) + "]";
}, Ei = (e, t, r, n, a, o, i) => ++n > t.maxDepth ? Rn(Pt(i)) : Pt(i) + rr + "[" + (0, tr.printIteratorValues)(
  e.values(),
  t,
  r,
  n,
  a,
  o
) + "]", Vd = (e, t, r, n, a, o) => e[jy] ? Gy(
  e,
  t,
  r,
  n,
  a,
  o,
  e[Ws] ? "OrderedMap" : "Map"
) : e[Ly] ? Ei(
  e,
  t,
  r,
  n,
  a,
  o,
  "List"
) : e[Wy] ? Ei(
  e,
  t,
  r,
  n,
  a,
  o,
  e[Ws] ? "OrderedSet" : "Set"
) : e[Vy] ? Ei(
  e,
  t,
  r,
  n,
  a,
  o,
  "Stack"
) : e[Hy] ? Ky(e, t, r, n, a, o) : Yy(e, t, r, n, a, o);
je.serialize = Vd;
const Gd = (e) => e && (e[Dy] === !0 || e[Uy] === !0);
je.test = Gd;
const Xy = {
  serialize: Vd,
  test: Gd
};
var Qy = Xy;
je.default = Qy;
var Ue = {}, fl = { exports: {} }, N = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gs;
function Jy() {
  if (Gs)
    return N;
  Gs = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, a = 60114, o = 60109, i = 60110, s = 60112, l = 60113, u = 60120, c = 60115, d = 60116, f = 60121, v = 60122, y = 60117, b = 60129, C = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var p = Symbol.for;
    e = p("react.element"), t = p("react.portal"), r = p("react.fragment"), n = p("react.strict_mode"), a = p("react.profiler"), o = p("react.provider"), i = p("react.context"), s = p("react.forward_ref"), l = p("react.suspense"), u = p("react.suspense_list"), c = p("react.memo"), d = p("react.lazy"), f = p("react.block"), v = p("react.server.block"), y = p("react.fundamental"), b = p("react.debug_trace_mode"), C = p("react.legacy_hidden");
  }
  function E(w) {
    if (typeof w == "object" && w !== null) {
      var A = w.$$typeof;
      switch (A) {
        case e:
          switch (w = w.type, w) {
            case r:
            case a:
            case n:
            case l:
            case u:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case i:
                case s:
                case d:
                case c:
                case o:
                  return w;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  var P = o, R = e, S = s, m = r, h = d, g = c, I = t, j = a, F = n, U = l;
  return N.ContextConsumer = i, N.ContextProvider = P, N.Element = R, N.ForwardRef = S, N.Fragment = m, N.Lazy = h, N.Memo = g, N.Portal = I, N.Profiler = j, N.StrictMode = F, N.Suspense = U, N.isAsyncMode = function() {
    return !1;
  }, N.isConcurrentMode = function() {
    return !1;
  }, N.isContextConsumer = function(w) {
    return E(w) === i;
  }, N.isContextProvider = function(w) {
    return E(w) === o;
  }, N.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, N.isForwardRef = function(w) {
    return E(w) === s;
  }, N.isFragment = function(w) {
    return E(w) === r;
  }, N.isLazy = function(w) {
    return E(w) === d;
  }, N.isMemo = function(w) {
    return E(w) === c;
  }, N.isPortal = function(w) {
    return E(w) === t;
  }, N.isProfiler = function(w) {
    return E(w) === a;
  }, N.isStrictMode = function(w) {
    return E(w) === n;
  }, N.isSuspense = function(w) {
    return E(w) === l;
  }, N.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === a || w === b || w === n || w === l || w === u || w === C || typeof w == "object" && w !== null && (w.$$typeof === d || w.$$typeof === c || w.$$typeof === o || w.$$typeof === i || w.$$typeof === s || w.$$typeof === y || w.$$typeof === f || w[0] === v);
  }, N.typeOf = E, N;
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
var zs;
function Zy() {
  return zs || (zs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, a = 60114, o = 60109, i = 60110, s = 60112, l = 60113, u = 60120, c = 60115, d = 60116, f = 60121, v = 60122, y = 60117, b = 60129, C = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var p = Symbol.for;
      e = p("react.element"), t = p("react.portal"), r = p("react.fragment"), n = p("react.strict_mode"), a = p("react.profiler"), o = p("react.provider"), i = p("react.context"), s = p("react.forward_ref"), l = p("react.suspense"), u = p("react.suspense_list"), c = p("react.memo"), d = p("react.lazy"), f = p("react.block"), v = p("react.server.block"), y = p("react.fundamental"), p("react.scope"), p("react.opaque.id"), b = p("react.debug_trace_mode"), p("react.offscreen"), C = p("react.legacy_hidden");
    }
    var E = !1;
    function P(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === r || T === a || T === b || T === n || T === l || T === u || T === C || E || typeof T == "object" && T !== null && (T.$$typeof === d || T.$$typeof === c || T.$$typeof === o || T.$$typeof === i || T.$$typeof === s || T.$$typeof === y || T.$$typeof === f || T[0] === v));
    }
    function R(T) {
      if (typeof T == "object" && T !== null) {
        var bi = T.$$typeof;
        switch (bi) {
          case e:
            var Rr = T.type;
            switch (Rr) {
              case r:
              case a:
              case n:
              case l:
              case u:
                return Rr;
              default:
                var js = Rr && Rr.$$typeof;
                switch (js) {
                  case i:
                  case s:
                  case d:
                  case c:
                  case o:
                    return js;
                  default:
                    return bi;
                }
            }
          case t:
            return bi;
        }
      }
    }
    var S = i, m = o, h = e, g = s, I = r, j = d, F = c, U = t, w = a, A = n, M = l, H = !1, Z = !1;
    function Xe(T) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function yi(T) {
      return Z || (Z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Wv(T) {
      return R(T) === i;
    }
    function Vv(T) {
      return R(T) === o;
    }
    function Gv(T) {
      return typeof T == "object" && T !== null && T.$$typeof === e;
    }
    function zv(T) {
      return R(T) === s;
    }
    function Yv(T) {
      return R(T) === r;
    }
    function Kv(T) {
      return R(T) === d;
    }
    function Xv(T) {
      return R(T) === c;
    }
    function Qv(T) {
      return R(T) === t;
    }
    function Jv(T) {
      return R(T) === a;
    }
    function Zv(T) {
      return R(T) === n;
    }
    function ey(T) {
      return R(T) === l;
    }
    B.ContextConsumer = S, B.ContextProvider = m, B.Element = h, B.ForwardRef = g, B.Fragment = I, B.Lazy = j, B.Memo = F, B.Portal = U, B.Profiler = w, B.StrictMode = A, B.Suspense = M, B.isAsyncMode = Xe, B.isConcurrentMode = yi, B.isContextConsumer = Wv, B.isContextProvider = Vv, B.isElement = Gv, B.isForwardRef = zv, B.isFragment = Yv, B.isLazy = Kv, B.isMemo = Xv, B.isPortal = Qv, B.isProfiler = Jv, B.isStrictMode = Zv, B.isSuspense = ey, B.isValidElementType = P, B.typeOf = R;
  }()), B;
}
process.env.NODE_ENV === "production" ? fl.exports = Jy() : fl.exports = Zy();
var eb = fl.exports;
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.test = Ue.serialize = Ue.default = void 0;
var Ze = tb(eb), Cr = G;
function zd(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (zd = function(n) {
    return n ? r : t;
  })(e);
}
function tb(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = zd(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o];
    }
  return n.default = e, r && r.set(e, n), n;
}
const Yd = (e, t = []) => (Array.isArray(e) ? e.forEach((r) => {
  Yd(r, t);
}) : e != null && e !== !1 && t.push(e), t), Ys = (e) => {
  const t = e.type;
  if (typeof t == "string")
    return t;
  if (typeof t == "function")
    return t.displayName || t.name || "Unknown";
  if (Ze.isFragment(e))
    return "React.Fragment";
  if (Ze.isSuspense(e))
    return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (Ze.isContextProvider(e))
      return "Context.Provider";
    if (Ze.isContextConsumer(e))
      return "Context.Consumer";
    if (Ze.isForwardRef(e)) {
      if (t.displayName)
        return t.displayName;
      const r = t.render.displayName || t.render.name || "";
      return r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef";
    }
    if (Ze.isMemo(e)) {
      const r = t.displayName || t.type.displayName || t.type.name || "";
      return r !== "" ? "Memo(" + r + ")" : "Memo";
    }
  }
  return "UNDEFINED";
}, rb = (e) => {
  const { props: t } = e;
  return Object.keys(t).filter((r) => r !== "children" && t[r] !== void 0).sort();
}, Kd = (e, t, r, n, a, o) => ++n > t.maxDepth ? (0, Cr.printElementAsLeaf)(Ys(e), t) : (0, Cr.printElement)(
  Ys(e),
  (0, Cr.printProps)(
    rb(e),
    e.props,
    t,
    r + t.indent,
    n,
    a,
    o
  ),
  (0, Cr.printChildren)(
    Yd(e.props.children),
    t,
    r + t.indent,
    n,
    a,
    o
  ),
  t,
  r
);
Ue.serialize = Kd;
const Xd = (e) => e != null && Ze.isElement(e);
Ue.test = Xd;
const nb = {
  serialize: Kd,
  test: Xd
};
var ab = nb;
Ue.default = ab;
var He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.test = He.serialize = He.default = void 0;
var Pr = G, Zr = function() {
  return typeof globalThis < "u" ? globalThis : typeof Zr < "u" ? Zr : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), _i = Zr["jest-symbol-do-not-touch"] || Zr.Symbol;
const ob = typeof _i == "function" && _i.for ? _i.for("react.test.json") : 245830487, ib = (e) => {
  const { props: t } = e;
  return t ? Object.keys(t).filter((r) => t[r] !== void 0).sort() : [];
}, Qd = (e, t, r, n, a, o) => ++n > t.maxDepth ? (0, Pr.printElementAsLeaf)(e.type, t) : (0, Pr.printElement)(
  e.type,
  e.props ? (0, Pr.printProps)(
    ib(e),
    e.props,
    t,
    r + t.indent,
    n,
    a,
    o
  ) : "",
  e.children ? (0, Pr.printChildren)(
    e.children,
    t,
    r + t.indent,
    n,
    a,
    o
  ) : "",
  t,
  r
);
He.serialize = Qd;
const Jd = (e) => e && e.$$typeof === ob;
He.test = Jd;
const lb = {
  serialize: Qd,
  test: Jd
};
var sb = lb;
He.default = sb;
Object.defineProperty(_e, "__esModule", {
  value: !0
});
var Zd = _e.default = uf = _e.DEFAULT_OPTIONS = void 0, ef = _e.format = pf, es = _e.plugins = void 0, ub = ze(Ad), jt = we, cb = ze(
  ke
), db = ze(De), fb = ze(Le), pb = ze(Fe), mb = ze(je), vb = ze(Ue), yb = ze(
  He
);
function ze(e) {
  return e && e.__esModule ? e : { default: e };
}
const tf = Object.prototype.toString, bb = Date.prototype.toISOString, hb = Error.prototype.toString, Ks = RegExp.prototype.toString, Ri = (e) => typeof e.constructor == "function" && e.constructor.name || "Object", gb = (e) => typeof window < "u" && e === window, Eb = /^Symbol\((.*)\)(.*)$/, _b = /\n/gi;
class rf extends Error {
  constructor(t, r) {
    super(t), this.stack = r, this.name = this.constructor.name;
  }
}
function Rb(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function wb(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function Cb(e) {
  return `${e}n`;
}
function Xs(e, t) {
  return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]";
}
function Qs(e) {
  return String(e).replace(Eb, "Symbol($1)");
}
function Js(e) {
  return "[" + hb.call(e) + "]";
}
function nf(e, t, r, n) {
  if (e === !0 || e === !1)
    return "" + e;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const a = typeof e;
  if (a === "number")
    return wb(e);
  if (a === "bigint")
    return Cb(e);
  if (a === "string")
    return n ? '"' + e.replace(/"|\\/g, "\\$&") + '"' : '"' + e + '"';
  if (a === "function")
    return Xs(e, t);
  if (a === "symbol")
    return Qs(e);
  const o = tf.call(e);
  return o === "[object WeakMap]" ? "WeakMap {}" : o === "[object WeakSet]" ? "WeakSet {}" : o === "[object Function]" || o === "[object GeneratorFunction]" ? Xs(e, t) : o === "[object Symbol]" ? Qs(e) : o === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : bb.call(e) : o === "[object Error]" ? Js(e) : o === "[object RegExp]" ? r ? Ks.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : Ks.call(e) : e instanceof Error ? Js(e) : null;
}
function af(e, t, r, n, a, o) {
  if (a.indexOf(e) !== -1)
    return "[Circular]";
  a = a.slice(), a.push(e);
  const i = ++n > t.maxDepth, s = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !o)
    return $e(e.toJSON(), t, r, n, a, !0);
  const l = tf.call(e);
  return l === "[object Arguments]" ? i ? "[Arguments]" : (s ? "" : "Arguments ") + "[" + (0, jt.printListItems)(
    e,
    t,
    r,
    n,
    a,
    $e
  ) + "]" : Rb(l) ? i ? "[" + e.constructor.name + "]" : (s || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : e.constructor.name + " ") + "[" + (0, jt.printListItems)(
    e,
    t,
    r,
    n,
    a,
    $e
  ) + "]" : l === "[object Map]" ? i ? "[Map]" : "Map {" + (0, jt.printIteratorEntries)(
    e.entries(),
    t,
    r,
    n,
    a,
    $e,
    " => "
  ) + "}" : l === "[object Set]" ? i ? "[Set]" : "Set {" + (0, jt.printIteratorValues)(
    e.values(),
    t,
    r,
    n,
    a,
    $e
  ) + "}" : i || gb(e) ? "[" + Ri(e) + "]" : (s || !t.printBasicPrototype && Ri(e) === "Object" ? "" : Ri(e) + " ") + "{" + (0, jt.printObjectProperties)(
    e,
    t,
    r,
    n,
    a,
    $e
  ) + "}";
}
function Pb(e) {
  return e.serialize != null;
}
function of(e, t, r, n, a, o) {
  let i;
  try {
    i = Pb(e) ? e.serialize(t, r, n, a, o, $e) : e.print(
      t,
      (s) => $e(s, r, n, a, o),
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
    throw new rf(s.message, s.stack);
  }
  if (typeof i != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`
    );
  return i;
}
function lf(e, t) {
  for (let r = 0; r < e.length; r++)
    try {
      if (e[r].test(t))
        return e[r];
    } catch (n) {
      throw new rf(n.message, n.stack);
    }
  return null;
}
function $e(e, t, r, n, a, o) {
  const i = lf(t.plugins, e);
  if (i !== null)
    return of(i, e, t, r, n, a);
  const s = nf(
    e,
    t.printFunctionName,
    t.escapeRegex,
    t.escapeString
  );
  return s !== null ? s : af(
    e,
    t,
    r,
    n,
    a,
    o
  );
}
const ts = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, sf = Object.keys(ts), oe = {
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
  theme: ts
};
var uf = _e.DEFAULT_OPTIONS = oe;
function Sb(e) {
  if (Object.keys(e).forEach((t) => {
    if (!oe.hasOwnProperty(t))
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
const Tb = (e) => sf.reduce((t, r) => {
  const n = e.theme && e.theme[r] !== void 0 ? e.theme[r] : ts[r], a = n && ub.default[n];
  if (a && typeof a.close == "string" && typeof a.open == "string")
    t[r] = a;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${r}" whose value "${n}" is undefined in ansi-styles.`
    );
  return t;
}, /* @__PURE__ */ Object.create(null)), Ab = () => sf.reduce((e, t) => (e[t] = {
  close: "",
  open: ""
}, e), /* @__PURE__ */ Object.create(null)), cf = (e) => e && e.printFunctionName !== void 0 ? e.printFunctionName : oe.printFunctionName, df = (e) => e && e.escapeRegex !== void 0 ? e.escapeRegex : oe.escapeRegex, ff = (e) => e && e.escapeString !== void 0 ? e.escapeString : oe.escapeString, Zs = (e) => {
  var t;
  return {
    callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : oe.callToJSON,
    colors: e && e.highlight ? Tb(e) : Ab(),
    compareKeys: e && typeof e.compareKeys == "function" ? e.compareKeys : oe.compareKeys,
    escapeRegex: df(e),
    escapeString: ff(e),
    indent: e && e.min ? "" : Ob(
      e && e.indent !== void 0 ? e.indent : oe.indent
    ),
    maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : oe.maxDepth,
    min: e && e.min !== void 0 ? e.min : oe.min,
    plugins: e && e.plugins !== void 0 ? e.plugins : oe.plugins,
    printBasicPrototype: (t = e == null ? void 0 : e.printBasicPrototype) !== null && t !== void 0 ? t : !0,
    printFunctionName: cf(e),
    spacingInner: e && e.min ? " " : `
`,
    spacingOuter: e && e.min ? "" : `
`
  };
};
function Ob(e) {
  return new Array(e + 1).join(" ");
}
function pf(e, t) {
  if (t && (Sb(t), t.plugins)) {
    const n = lf(t.plugins, e);
    if (n !== null)
      return of(n, e, Zs(t), "", 0, []);
  }
  const r = nf(
    e,
    cf(t),
    df(t),
    ff(t)
  );
  return r !== null ? r : af(e, Zs(t), "", 0, []);
}
const $b = {
  AsymmetricMatcher: cb.default,
  ConvertAnsi: db.default,
  DOMCollection: fb.default,
  DOMElement: pb.default,
  Immutable: mb.default,
  ReactElement: vb.default,
  ReactTestComponent: yb.default
};
es = _e.plugins = $b;
var xb = pf;
Zd = _e.default = xb;
const qb = /* @__PURE__ */ ay({
  __proto__: null,
  get DEFAULT_OPTIONS() {
    return uf;
  },
  get default() {
    return Zd;
  },
  format: ef,
  get plugins() {
    return es;
  }
}, [_e]);
var Ib = Object.prototype.toString;
function eu(e) {
  return typeof e == "function" || Ib.call(e) === "[object Function]";
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
function ie(e, t) {
  var r = Array, n = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  if (typeof t < "u" && !eu(t))
    throw new TypeError("Array.from: when provided, the second argument must be a function");
  for (var a = Bb(n.length), o = eu(r) ? Object(new r(a)) : new Array(a), i = 0, s; i < a; )
    s = n[i], t ? o[i] = t(s, i) : o[i] = s, i += 1;
  return o.length = a, o;
}
function nr(e) {
  "@babel/helpers - typeof";
  return nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nr(e);
}
function kb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tu(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, mf(n.key), n);
  }
}
function Db(e, t, r) {
  return t && tu(e.prototype, t), r && tu(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Lb(e, t, r) {
  return t = mf(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mf(e) {
  var t = Fb(e, "string");
  return nr(t) === "symbol" ? t : String(t);
}
function Fb(e, t) {
  if (nr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (nr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jb = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    kb(this, e), Lb(this, "items", void 0), this.items = t;
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
      return this.items = this.items.filter(function(a) {
        return a !== r;
      }), n !== this.items.length;
    }
  }, {
    key: "forEach",
    value: function(r) {
      var n = this;
      this.items.forEach(function(a) {
        r(a, a, n);
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
function vf(e, t) {
  return Vb(e, t);
}
function Gb(e) {
  var t = Yb(e);
  if (t === null || t === "presentation") {
    var r = zb(e);
    if (t !== "presentation" || vf(e, r || ""))
      return r;
  }
  return t;
}
function zb(e) {
  var t = Hb[z(e)];
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
      return e.getAttribute("alt") === "" && !vf(e, "img") ? "presentation" : "img";
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
function D(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function yf(e) {
  return D(e) && z(e) === "caption";
}
function Nr(e) {
  return D(e) && z(e) === "input";
}
function Kb(e) {
  return D(e) && z(e) === "optgroup";
}
function Xb(e) {
  return D(e) && z(e) === "select";
}
function Qb(e) {
  return D(e) && z(e) === "table";
}
function Jb(e) {
  return D(e) && z(e) === "textarea";
}
function Zb(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument, r = t.defaultView;
  if (r === null)
    throw new TypeError("no window available");
  return r;
}
function eh(e) {
  return D(e) && z(e) === "fieldset";
}
function th(e) {
  return D(e) && z(e) === "legend";
}
function rh(e) {
  return D(e) && z(e) === "slot";
}
function nh(e) {
  return D(e) && e.ownerSVGElement !== void 0;
}
function ah(e) {
  return D(e) && z(e) === "svg";
}
function oh(e) {
  return nh(e) && z(e) === "title";
}
function en(e, t) {
  if (D(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(" "), n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r.map(function(a) {
      return n.getElementById(a);
    }).filter(
      function(a) {
        return a !== null;
      }
      // TODO: why does this not narrow?
    );
  }
  return [];
}
function he(e, t) {
  return D(e) ? t.indexOf(Gb(e)) !== -1 : !1;
}
function ih(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function lh(e, t) {
  if (!D(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var r = t(e);
  return r.getPropertyValue("display") === "none" || r.getPropertyValue("visibility") === "hidden";
}
function sh(e) {
  return he(e, ["button", "combobox", "listbox", "textbox"]) || bf(e, "range");
}
function bf(e, t) {
  if (!D(e))
    return !1;
  switch (t) {
    case "range":
      return he(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function ru(e, t) {
  var r = ie(e.querySelectorAll(t));
  return en(e, "aria-owns").forEach(function(n) {
    r.push.apply(r, ie(n.querySelectorAll(t)));
  }), r;
}
function uh(e) {
  return Xb(e) ? e.selectedOptions || ru(e, "[selected]") : ru(e, '[aria-selected="true"]');
}
function ch(e) {
  return he(e, ["none", "presentation"]);
}
function dh(e) {
  return yf(e);
}
function fh(e) {
  return he(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function ph(e) {
  return !1;
}
function mh(e) {
  return Nr(e) || Jb(e) ? e.value : e.textContent || "";
}
function nu(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function hf(e) {
  var t = z(e);
  return t === "button" || t === "input" && e.getAttribute("type") !== "hidden" || t === "meter" || t === "output" || t === "progress" || t === "select" || t === "textarea";
}
function gf(e) {
  if (hf(e))
    return e;
  var t = null;
  return e.childNodes.forEach(function(r) {
    if (t === null && D(r)) {
      var n = gf(r);
      n !== null && (t = n);
    }
  }), t;
}
function vh(e) {
  if (e.control !== void 0)
    return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : gf(e);
}
function yh(e) {
  var t = e.labels;
  if (t === null)
    return t;
  if (t !== void 0)
    return ie(t);
  if (!hf(e))
    return null;
  var r = e.ownerDocument;
  return ie(r.querySelectorAll("label")).filter(function(n) {
    return vh(n) === e;
  });
}
function bh(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? ie(e.childNodes) : t;
}
function Ef(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = new Ub(), n = Zb(e), a = t.compute, o = a === void 0 ? "name" : a, i = t.computedStyleSupportsPseudoElements, s = i === void 0 ? t.getComputedStyle !== void 0 : i, l = t.getComputedStyle, u = l === void 0 ? n.getComputedStyle.bind(n) : l, c = t.hidden, d = c === void 0 ? !1 : c;
  function f(p, E) {
    var P = "";
    if (D(p) && s) {
      var R = u(p, "::before"), S = nu(R);
      P = "".concat(S, " ").concat(P);
    }
    var m = rh(p) ? bh(p) : ie(p.childNodes).concat(en(p, "aria-owns"));
    if (m.forEach(function(I) {
      var j = C(I, {
        isEmbeddedInLabel: E.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), F = D(I) ? u(I).getPropertyValue("display") : "inline", U = F !== "inline" ? " " : "";
      P += "".concat(U).concat(j).concat(U);
    }), D(p) && s) {
      var h = u(p, "::after"), g = nu(h);
      P = "".concat(P, " ").concat(g);
    }
    return P.trim();
  }
  function v(p, E) {
    var P = p.getAttributeNode(E);
    return P !== null && !r.has(P) && P.value.trim() !== "" ? (r.add(P), P.value) : null;
  }
  function y(p) {
    return D(p) ? v(p, "title") : null;
  }
  function b(p) {
    if (!D(p))
      return null;
    if (eh(p)) {
      r.add(p);
      for (var E = ie(p.childNodes), P = 0; P < E.length; P += 1) {
        var R = E[P];
        if (th(R))
          return C(R, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (Qb(p)) {
      r.add(p);
      for (var S = ie(p.childNodes), m = 0; m < S.length; m += 1) {
        var h = S[m];
        if (yf(h))
          return C(h, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (ah(p)) {
      r.add(p);
      for (var g = ie(p.childNodes), I = 0; I < g.length; I += 1) {
        var j = g[I];
        if (oh(j))
          return j.textContent;
      }
      return null;
    } else if (z(p) === "img" || z(p) === "area") {
      var F = v(p, "alt");
      if (F !== null)
        return F;
    } else if (Kb(p)) {
      var U = v(p, "label");
      if (U !== null)
        return U;
    }
    if (Nr(p) && (p.type === "button" || p.type === "submit" || p.type === "reset")) {
      var w = v(p, "value");
      if (w !== null)
        return w;
      if (p.type === "submit")
        return "Submit";
      if (p.type === "reset")
        return "Reset";
    }
    var A = yh(p);
    if (A !== null && A.length !== 0)
      return r.add(p), ie(A).map(function(Xe) {
        return C(Xe, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(Xe) {
        return Xe.length > 0;
      }).join(" ");
    if (Nr(p) && p.type === "image") {
      var M = v(p, "alt");
      if (M !== null)
        return M;
      var H = v(p, "title");
      return H !== null ? H : "Submit Query";
    }
    if (he(p, ["button"])) {
      var Z = f(p, {
        isEmbeddedInLabel: !1,
        isReferenced: !1
      });
      if (Z !== "")
        return Z;
    }
    return null;
  }
  function C(p, E) {
    if (r.has(p))
      return "";
    if (!d && lh(p, u) && !E.isReferenced)
      return r.add(p), "";
    var P = D(p) ? p.getAttributeNode("aria-labelledby") : null, R = P !== null && !r.has(P) ? en(p, "aria-labelledby") : [];
    if (o === "name" && !E.isReferenced && R.length > 0)
      return r.add(P), R.map(function(F) {
        return C(F, {
          isEmbeddedInLabel: E.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var S = E.recursion && sh(p) && o === "name";
    if (!S) {
      var m = (D(p) && p.getAttribute("aria-label") || "").trim();
      if (m !== "" && o === "name")
        return r.add(p), m;
      if (!ch(p)) {
        var h = b(p);
        if (h !== null)
          return r.add(p), h;
      }
    }
    if (he(p, ["menu"]))
      return r.add(p), "";
    if (S || E.isEmbeddedInLabel || E.isReferenced) {
      if (he(p, ["combobox", "listbox"])) {
        r.add(p);
        var g = uh(p);
        return g.length === 0 ? Nr(p) ? p.value : "" : ie(g).map(function(F) {
          return C(F, {
            isEmbeddedInLabel: E.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (bf(p, "range"))
        return r.add(p), p.hasAttribute("aria-valuetext") ? p.getAttribute("aria-valuetext") : p.hasAttribute("aria-valuenow") ? p.getAttribute("aria-valuenow") : p.getAttribute("value") || "";
      if (he(p, ["textbox"]))
        return r.add(p), mh(p);
    }
    if (fh(p) || D(p) && E.isReferenced || dh(p) || ph()) {
      var I = f(p, {
        isEmbeddedInLabel: E.isEmbeddedInLabel,
        isReferenced: !1
      });
      if (I !== "")
        return r.add(p), I;
    }
    if (p.nodeType === p.TEXT_NODE)
      return r.add(p), p.textContent || "";
    if (E.recursion)
      return r.add(p), f(p, {
        isEmbeddedInLabel: E.isEmbeddedInLabel,
        isReferenced: !1
      });
    var j = y(p);
    return j !== null ? (r.add(p), j) : (r.add(p), "");
  }
  return ih(C(e, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: o === "description",
    recursion: !1
  }));
}
function ar(e) {
  "@babel/helpers - typeof";
  return ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ar(e);
}
function au(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ou(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? au(Object(r), !0).forEach(function(n) {
      hh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : au(Object(r)).forEach(function(n) {
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
  return ar(t) === "symbol" ? t : String(t);
}
function Eh(e, t) {
  if (ar(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ar(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _f(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = en(e, "aria-describedby").map(function(a) {
    return Ef(a, ou(ou({}, t), {}, {
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
  return he(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function rs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return _h(e) ? "" : Ef(e, t);
}
var le = {}, wn = {}, it = {}, Cn = {};
Object.defineProperty(Cn, "__esModule", {
  value: !0
});
Cn.default = void 0;
function Rh() {
  var e = this, t = 0, r = {
    "@@iterator": function() {
      return r;
    },
    next: function() {
      if (t < e.length) {
        var a = e[t];
        return t = t + 1, {
          done: !1,
          value: a
        };
      } else
        return {
          done: !0
        };
    }
  };
  return r;
}
var wh = Rh;
Cn.default = wh;
Object.defineProperty(it, "__esModule", {
  value: !0
});
it.default = Sh;
var Ch = Ph(Cn);
function Ph(e) {
  return e && e.__esModule ? e : { default: e };
}
function pl(e) {
  "@babel/helpers - typeof";
  return pl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pl(e);
}
function Sh(e, t) {
  return typeof Symbol == "function" && pl(Symbol.iterator) === "symbol" && Object.defineProperty(e, Symbol.iterator, {
    value: Ch.default.bind(t)
  }), e;
}
Object.defineProperty(wn, "__esModule", {
  value: !0
});
wn.default = void 0;
var Th = Ah(it);
function Ah(e) {
  return e && e.__esModule ? e : { default: e };
}
function wi(e, t) {
  return xh(e) || $h(e, t) || Rf(e, t) || Oh();
}
function Oh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $h(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t)); a = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o)
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
function qh(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Rf(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(u) {
        throw u;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function Rf(e, t) {
  if (e) {
    if (typeof e == "string")
      return iu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return iu(e, t);
  }
}
function iu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var mt = [["aria-activedescendant", {
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
}]], ml = {
  entries: function() {
    return mt;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = qh(mt), a;
    try {
      for (n.s(); !(a = n.n()).done; ) {
        var o = wi(a.value, 2), i = o[0], s = o[1];
        t.call(r, s, i, mt);
      }
    } catch (l) {
      n.e(l);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = mt.find(function(n) {
      return n[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!ml.get(t);
  },
  keys: function() {
    return mt.map(function(t) {
      var r = wi(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return mt.map(function(t) {
      var r = wi(t, 2), n = r[1];
      return n;
    });
  }
}, Ih = (0, Th.default)(ml, ml.entries());
wn.default = Ih;
var Pn = {};
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.default = void 0;
var Mh = Nh(it);
function Nh(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ci(e, t) {
  return Dh(e) || kh(e, t) || wf(e, t) || Bh();
}
function Bh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kh(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t)); a = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o)
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
function Lh(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = wf(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(u) {
        throw u;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function wf(e, t) {
  if (e) {
    if (typeof e == "string")
      return lu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return lu(e, t);
  }
}
function lu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var vt = [["a", {
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
}]], vl = {
  entries: function() {
    return vt;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = Lh(vt), a;
    try {
      for (n.s(); !(a = n.n()).done; ) {
        var o = Ci(a.value, 2), i = o[0], s = o[1];
        t.call(r, s, i, vt);
      }
    } catch (l) {
      n.e(l);
    } finally {
      n.f();
    }
  },
  get: function(t) {
    var r = vt.find(function(n) {
      return n[0] === t;
    });
    return r && r[1];
  },
  has: function(t) {
    return !!vl.get(t);
  },
  keys: function() {
    return vt.map(function(t) {
      var r = Ci(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return vt.map(function(t) {
      var r = Ci(t, 2), n = r[1];
      return n;
    });
  }
}, Fh = (0, Mh.default)(vl, vl.entries());
Pn.default = Fh;
var kt = {}, Sn = {}, Tn = {};
Object.defineProperty(Tn, "__esModule", {
  value: !0
});
Tn.default = void 0;
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
Tn.default = Uh;
var An = {};
Object.defineProperty(An, "__esModule", {
  value: !0
});
An.default = void 0;
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
An.default = Wh;
var On = {};
Object.defineProperty(On, "__esModule", {
  value: !0
});
On.default = void 0;
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
On.default = Gh;
var $n = {};
Object.defineProperty($n, "__esModule", {
  value: !0
});
$n.default = void 0;
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
$n.default = Yh;
var xn = {};
Object.defineProperty(xn, "__esModule", {
  value: !0
});
xn.default = void 0;
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
xn.default = Xh;
var qn = {};
Object.defineProperty(qn, "__esModule", {
  value: !0
});
qn.default = void 0;
var Qh = {
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
}, Jh = Qh;
qn.default = Jh;
var In = {};
Object.defineProperty(In, "__esModule", {
  value: !0
});
In.default = void 0;
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
In.default = eg;
var Mn = {};
Object.defineProperty(Mn, "__esModule", {
  value: !0
});
Mn.default = void 0;
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
Mn.default = rg;
var Nn = {};
Object.defineProperty(Nn, "__esModule", {
  value: !0
});
Nn.default = void 0;
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
}, ag = ng;
Nn.default = ag;
var Bn = {};
Object.defineProperty(Bn, "__esModule", {
  value: !0
});
Bn.default = void 0;
var og = {
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
}, ig = og;
Bn.default = ig;
var kn = {};
Object.defineProperty(kn, "__esModule", {
  value: !0
});
kn.default = void 0;
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
kn.default = sg;
var Dn = {};
Object.defineProperty(Dn, "__esModule", {
  value: !0
});
Dn.default = void 0;
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
Dn.default = cg;
Object.defineProperty(Sn, "__esModule", {
  value: !0
});
Sn.default = void 0;
var dg = ee(Tn), fg = ee(An), pg = ee(On), mg = ee($n), vg = ee(xn), yg = ee(qn), bg = ee(In), hg = ee(Mn), gg = ee(Nn), Eg = ee(Bn), _g = ee(kn), Rg = ee(Dn);
function ee(e) {
  return e && e.__esModule ? e : { default: e };
}
var wg = [["command", dg.default], ["composite", fg.default], ["input", pg.default], ["landmark", mg.default], ["range", vg.default], ["roletype", yg.default], ["section", bg.default], ["sectionhead", hg.default], ["select", gg.default], ["structure", Eg.default], ["widget", _g.default], ["window", Rg.default]], Cg = wg;
Sn.default = Cg;
var Ln = {}, Fn = {};
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
Fn.default = void 0;
var Pg = {
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
}, Sg = Pg;
Fn.default = Sg;
var jn = {};
Object.defineProperty(jn, "__esModule", {
  value: !0
});
jn.default = void 0;
var Tg = {
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
}, Ag = Tg;
jn.default = Ag;
var Un = {};
Object.defineProperty(Un, "__esModule", {
  value: !0
});
Un.default = void 0;
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
Un.default = $g;
var Hn = {};
Object.defineProperty(Hn, "__esModule", {
  value: !0
});
Hn.default = void 0;
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
}, qg = xg;
Hn.default = qg;
var Wn = {};
Object.defineProperty(Wn, "__esModule", {
  value: !0
});
Wn.default = void 0;
var Ig = {
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
}, Mg = Ig;
Wn.default = Mg;
var Vn = {};
Object.defineProperty(Vn, "__esModule", {
  value: !0
});
Vn.default = void 0;
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
Vn.default = Bg;
var Gn = {};
Object.defineProperty(Gn, "__esModule", {
  value: !0
});
Gn.default = void 0;
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
Gn.default = Dg;
var zn = {};
Object.defineProperty(zn, "__esModule", {
  value: !0
});
zn.default = void 0;
var Lg = {
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
}, Fg = Lg;
zn.default = Fg;
var Yn = {};
Object.defineProperty(Yn, "__esModule", {
  value: !0
});
Yn.default = void 0;
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
Yn.default = Ug;
var Kn = {};
Object.defineProperty(Kn, "__esModule", {
  value: !0
});
Kn.default = void 0;
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
Kn.default = Wg;
var Xn = {};
Object.defineProperty(Xn, "__esModule", {
  value: !0
});
Xn.default = void 0;
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
Xn.default = Gg;
var Qn = {};
Object.defineProperty(Qn, "__esModule", {
  value: !0
});
Qn.default = void 0;
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
Qn.default = Yg;
var Jn = {};
Object.defineProperty(Jn, "__esModule", {
  value: !0
});
Jn.default = void 0;
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
Jn.default = Xg;
var Zn = {};
Object.defineProperty(Zn, "__esModule", {
  value: !0
});
Zn.default = void 0;
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
      name: "aside"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Jg = Qg;
Zn.default = Jg;
var ea = {};
Object.defineProperty(ea, "__esModule", {
  value: !0
});
ea.default = void 0;
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
ea.default = eE;
var ta = {};
Object.defineProperty(ta, "__esModule", {
  value: !0
});
ta.default = void 0;
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
ta.default = rE;
var ra = {};
Object.defineProperty(ra, "__esModule", {
  value: !0
});
ra.default = void 0;
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
}, aE = nE;
ra.default = aE;
var na = {};
Object.defineProperty(na, "__esModule", {
  value: !0
});
na.default = void 0;
var oE = {
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
}, iE = oE;
na.default = iE;
var aa = {};
Object.defineProperty(aa, "__esModule", {
  value: !0
});
aa.default = void 0;
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
aa.default = sE;
var oa = {};
Object.defineProperty(oa, "__esModule", {
  value: !0
});
oa.default = void 0;
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
oa.default = cE;
var ia = {};
Object.defineProperty(ia, "__esModule", {
  value: !0
});
ia.default = void 0;
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
ia.default = fE;
var la = {};
Object.defineProperty(la, "__esModule", {
  value: !0
});
la.default = void 0;
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
}, mE = pE;
la.default = mE;
var sa = {};
Object.defineProperty(sa, "__esModule", {
  value: !0
});
sa.default = void 0;
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
}, yE = vE;
sa.default = yE;
var ua = {};
Object.defineProperty(ua, "__esModule", {
  value: !0
});
ua.default = void 0;
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
ua.default = hE;
var ca = {};
Object.defineProperty(ca, "__esModule", {
  value: !0
});
ca.default = void 0;
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
ca.default = EE;
var da = {};
Object.defineProperty(da, "__esModule", {
  value: !0
});
da.default = void 0;
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
da.default = RE;
var fa = {};
Object.defineProperty(fa, "__esModule", {
  value: !0
});
fa.default = void 0;
var wE = {
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
}, CE = wE;
fa.default = CE;
var pa = {};
Object.defineProperty(pa, "__esModule", {
  value: !0
});
pa.default = void 0;
var PE = {
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
}, SE = PE;
pa.default = SE;
var ma = {};
Object.defineProperty(ma, "__esModule", {
  value: !0
});
ma.default = void 0;
var TE = {
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
}, AE = TE;
ma.default = AE;
var va = {};
Object.defineProperty(va, "__esModule", {
  value: !0
});
va.default = void 0;
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
va.default = $E;
var ya = {};
Object.defineProperty(ya, "__esModule", {
  value: !0
});
ya.default = void 0;
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
}, qE = xE;
ya.default = qE;
var ba = {};
Object.defineProperty(ba, "__esModule", {
  value: !0
});
ba.default = void 0;
var IE = {
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
}, ME = IE;
ba.default = ME;
var ha = {};
Object.defineProperty(ha, "__esModule", {
  value: !0
});
ha.default = void 0;
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
ha.default = BE;
var ga = {};
Object.defineProperty(ga, "__esModule", {
  value: !0
});
ga.default = void 0;
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
ga.default = DE;
var Ea = {};
Object.defineProperty(Ea, "__esModule", {
  value: !0
});
Ea.default = void 0;
var LE = {
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
}, FE = LE;
Ea.default = FE;
var _a = {};
Object.defineProperty(_a, "__esModule", {
  value: !0
});
_a.default = void 0;
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
_a.default = UE;
var Ra = {};
Object.defineProperty(Ra, "__esModule", {
  value: !0
});
Ra.default = void 0;
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
Ra.default = WE;
var wa = {};
Object.defineProperty(wa, "__esModule", {
  value: !0
});
wa.default = void 0;
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
wa.default = GE;
var Ca = {};
Object.defineProperty(Ca, "__esModule", {
  value: !0
});
Ca.default = void 0;
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
Ca.default = YE;
var Pa = {};
Object.defineProperty(Pa, "__esModule", {
  value: !0
});
Pa.default = void 0;
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
Pa.default = XE;
var Sa = {};
Object.defineProperty(Sa, "__esModule", {
  value: !0
});
Sa.default = void 0;
var QE = {
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
}, JE = QE;
Sa.default = JE;
var Ta = {};
Object.defineProperty(Ta, "__esModule", {
  value: !0
});
Ta.default = void 0;
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
Ta.default = e_;
var Aa = {};
Object.defineProperty(Aa, "__esModule", {
  value: !0
});
Aa.default = void 0;
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
Aa.default = r_;
var Oa = {};
Object.defineProperty(Oa, "__esModule", {
  value: !0
});
Oa.default = void 0;
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
}, a_ = n_;
Oa.default = a_;
var $a = {};
Object.defineProperty($a, "__esModule", {
  value: !0
});
$a.default = void 0;
var o_ = {
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
}, i_ = o_;
$a.default = i_;
var xa = {};
Object.defineProperty(xa, "__esModule", {
  value: !0
});
xa.default = void 0;
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
xa.default = s_;
var qa = {};
Object.defineProperty(qa, "__esModule", {
  value: !0
});
qa.default = void 0;
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
qa.default = c_;
var Ia = {};
Object.defineProperty(Ia, "__esModule", {
  value: !0
});
Ia.default = void 0;
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
Ia.default = f_;
var Ma = {};
Object.defineProperty(Ma, "__esModule", {
  value: !0
});
Ma.default = void 0;
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
}, m_ = p_;
Ma.default = m_;
var Na = {};
Object.defineProperty(Na, "__esModule", {
  value: !0
});
Na.default = void 0;
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
}, y_ = v_;
Na.default = y_;
var Ba = {};
Object.defineProperty(Ba, "__esModule", {
  value: !0
});
Ba.default = void 0;
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
Ba.default = h_;
var ka = {};
Object.defineProperty(ka, "__esModule", {
  value: !0
});
ka.default = void 0;
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
ka.default = E_;
var Da = {};
Object.defineProperty(Da, "__esModule", {
  value: !0
});
Da.default = void 0;
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
Da.default = R_;
var La = {};
Object.defineProperty(La, "__esModule", {
  value: !0
});
La.default = void 0;
var w_ = {
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
}, C_ = w_;
La.default = C_;
var Fa = {};
Object.defineProperty(Fa, "__esModule", {
  value: !0
});
Fa.default = void 0;
var P_ = {
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
}, S_ = P_;
Fa.default = S_;
var ja = {};
Object.defineProperty(ja, "__esModule", {
  value: !0
});
ja.default = void 0;
var T_ = {
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
}, A_ = T_;
ja.default = A_;
var Ua = {};
Object.defineProperty(Ua, "__esModule", {
  value: !0
});
Ua.default = void 0;
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
Ua.default = $_;
var Ha = {};
Object.defineProperty(Ha, "__esModule", {
  value: !0
});
Ha.default = void 0;
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
}, q_ = x_;
Ha.default = q_;
var Wa = {};
Object.defineProperty(Wa, "__esModule", {
  value: !0
});
Wa.default = void 0;
var I_ = {
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
}, M_ = I_;
Wa.default = M_;
var Va = {};
Object.defineProperty(Va, "__esModule", {
  value: !0
});
Va.default = void 0;
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
Va.default = B_;
var Ga = {};
Object.defineProperty(Ga, "__esModule", {
  value: !0
});
Ga.default = void 0;
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
Ga.default = D_;
var za = {};
Object.defineProperty(za, "__esModule", {
  value: !0
});
za.default = void 0;
var L_ = {
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
}, F_ = L_;
za.default = F_;
var Ya = {};
Object.defineProperty(Ya, "__esModule", {
  value: !0
});
Ya.default = void 0;
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
Ya.default = U_;
var Ka = {};
Object.defineProperty(Ka, "__esModule", {
  value: !0
});
Ka.default = void 0;
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
Ka.default = W_;
var Xa = {};
Object.defineProperty(Xa, "__esModule", {
  value: !0
});
Xa.default = void 0;
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
Xa.default = G_;
var Qa = {};
Object.defineProperty(Qa, "__esModule", {
  value: !0
});
Qa.default = void 0;
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
Qa.default = Y_;
var Ja = {};
Object.defineProperty(Ja, "__esModule", {
  value: !0
});
Ja.default = void 0;
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
Ja.default = X_;
var Za = {};
Object.defineProperty(Za, "__esModule", {
  value: !0
});
Za.default = void 0;
var Q_ = {
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
}, J_ = Q_;
Za.default = J_;
var eo = {};
Object.defineProperty(eo, "__esModule", {
  value: !0
});
eo.default = void 0;
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
eo.default = eR;
var to = {};
Object.defineProperty(to, "__esModule", {
  value: !0
});
to.default = void 0;
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
to.default = rR;
var ro = {};
Object.defineProperty(ro, "__esModule", {
  value: !0
});
ro.default = void 0;
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
}, aR = nR;
ro.default = aR;
var no = {};
Object.defineProperty(no, "__esModule", {
  value: !0
});
no.default = void 0;
var oR = {
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
}, iR = oR;
no.default = iR;
var ao = {};
Object.defineProperty(ao, "__esModule", {
  value: !0
});
ao.default = void 0;
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
ao.default = sR;
var oo = {};
Object.defineProperty(oo, "__esModule", {
  value: !0
});
oo.default = void 0;
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
oo.default = cR;
var io = {};
Object.defineProperty(io, "__esModule", {
  value: !0
});
io.default = void 0;
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
io.default = fR;
var lo = {};
Object.defineProperty(lo, "__esModule", {
  value: !0
});
lo.default = void 0;
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
}, mR = pR;
lo.default = mR;
var so = {};
Object.defineProperty(so, "__esModule", {
  value: !0
});
so.default = void 0;
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
}, yR = vR;
so.default = yR;
var uo = {};
Object.defineProperty(uo, "__esModule", {
  value: !0
});
uo.default = void 0;
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
uo.default = hR;
var co = {};
Object.defineProperty(co, "__esModule", {
  value: !0
});
co.default = void 0;
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
co.default = ER;
var fo = {};
Object.defineProperty(fo, "__esModule", {
  value: !0
});
fo.default = void 0;
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
fo.default = RR;
var po = {};
Object.defineProperty(po, "__esModule", {
  value: !0
});
po.default = void 0;
var wR = {
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
}, CR = wR;
po.default = CR;
var mo = {};
Object.defineProperty(mo, "__esModule", {
  value: !0
});
mo.default = void 0;
var PR = {
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
}, SR = PR;
mo.default = SR;
Object.defineProperty(Ln, "__esModule", {
  value: !0
});
Ln.default = void 0;
var TR = _(Fn), AR = _(jn), OR = _(Un), $R = _(Hn), xR = _(Wn), qR = _(Vn), IR = _(Gn), MR = _(zn), NR = _(Yn), BR = _(Kn), kR = _(Xn), DR = _(Qn), LR = _(Jn), FR = _(Zn), jR = _(ea), UR = _(ta), HR = _(ra), WR = _(na), VR = _(aa), GR = _(oa), zR = _(ia), YR = _(la), KR = _(sa), XR = _(ua), QR = _(ca), JR = _(da), ZR = _(fa), ew = _(pa), tw = _(ma), rw = _(va), nw = _(ya), aw = _(ba), ow = _(ha), iw = _(ga), lw = _(Ea), sw = _(_a), uw = _(Ra), cw = _(wa), dw = _(Ca), fw = _(Pa), pw = _(Sa), mw = _(Ta), vw = _(Aa), yw = _(Oa), bw = _($a), hw = _(xa), gw = _(qa), Ew = _(Ia), _w = _(Ma), Rw = _(Na), ww = _(Ba), Cw = _(ka), Pw = _(Da), Sw = _(La), Tw = _(Fa), Aw = _(ja), Ow = _(Ua), $w = _(Ha), xw = _(Wa), qw = _(Va), Iw = _(Ga), Mw = _(za), Nw = _(Ya), Bw = _(Ka), kw = _(Xa), Dw = _(Qa), Lw = _(Ja), Fw = _(Za), jw = _(eo), Uw = _(to), Hw = _(ro), Ww = _(no), Vw = _(ao), Gw = _(oo), zw = _(io), Yw = _(lo), Kw = _(so), Xw = _(uo), Qw = _(co), Jw = _(fo), Zw = _(po), eC = _(mo);
function _(e) {
  return e && e.__esModule ? e : { default: e };
}
var tC = [["alert", TR.default], ["alertdialog", AR.default], ["application", OR.default], ["article", $R.default], ["banner", xR.default], ["blockquote", qR.default], ["button", IR.default], ["caption", MR.default], ["cell", NR.default], ["checkbox", BR.default], ["code", kR.default], ["columnheader", DR.default], ["combobox", LR.default], ["complementary", FR.default], ["contentinfo", jR.default], ["definition", UR.default], ["deletion", HR.default], ["dialog", WR.default], ["directory", VR.default], ["document", GR.default], ["emphasis", zR.default], ["feed", YR.default], ["figure", KR.default], ["form", XR.default], ["generic", QR.default], ["grid", JR.default], ["gridcell", ZR.default], ["group", ew.default], ["heading", tw.default], ["img", rw.default], ["insertion", nw.default], ["link", aw.default], ["list", ow.default], ["listbox", iw.default], ["listitem", lw.default], ["log", sw.default], ["main", uw.default], ["marquee", cw.default], ["math", dw.default], ["menu", fw.default], ["menubar", pw.default], ["menuitem", mw.default], ["menuitemcheckbox", vw.default], ["menuitemradio", yw.default], ["meter", bw.default], ["navigation", hw.default], ["none", gw.default], ["note", Ew.default], ["option", _w.default], ["paragraph", Rw.default], ["presentation", ww.default], ["progressbar", Cw.default], ["radio", Pw.default], ["radiogroup", Sw.default], ["region", Tw.default], ["row", Aw.default], ["rowgroup", Ow.default], ["rowheader", $w.default], ["scrollbar", xw.default], ["search", qw.default], ["searchbox", Iw.default], ["separator", Mw.default], ["slider", Nw.default], ["spinbutton", Bw.default], ["status", kw.default], ["strong", Dw.default], ["subscript", Lw.default], ["superscript", Fw.default], ["switch", jw.default], ["tab", Uw.default], ["table", Hw.default], ["tablist", Ww.default], ["tabpanel", Vw.default], ["term", Gw.default], ["textbox", zw.default], ["time", Yw.default], ["timer", Kw.default], ["toolbar", Xw.default], ["tooltip", Qw.default], ["tree", Jw.default], ["treegrid", Zw.default], ["treeitem", eC.default]], rC = tC;
Ln.default = rC;
var vo = {}, yo = {};
Object.defineProperty(yo, "__esModule", {
  value: !0
});
yo.default = void 0;
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
      name: "abstract [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, aC = nC;
yo.default = aC;
var bo = {};
Object.defineProperty(bo, "__esModule", {
  value: !0
});
bo.default = void 0;
var oC = {
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
}, iC = oC;
bo.default = iC;
var ho = {};
Object.defineProperty(ho, "__esModule", {
  value: !0
});
ho.default = void 0;
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
      name: "afterword [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, sC = lC;
ho.default = sC;
var go = {};
Object.defineProperty(go, "__esModule", {
  value: !0
});
go.default = void 0;
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
      name: "appendix [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, cC = uC;
go.default = cC;
var Eo = {};
Object.defineProperty(Eo, "__esModule", {
  value: !0
});
Eo.default = void 0;
var dC = {
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
}, fC = dC;
Eo.default = fC;
var _o = {};
Object.defineProperty(_o, "__esModule", {
  value: !0
});
_o.default = void 0;
var pC = {
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
}, mC = pC;
_o.default = mC;
var Ro = {};
Object.defineProperty(Ro, "__esModule", {
  value: !0
});
Ro.default = void 0;
var vC = {
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
}, yC = vC;
Ro.default = yC;
var wo = {};
Object.defineProperty(wo, "__esModule", {
  value: !0
});
wo.default = void 0;
var bC = {
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
}, hC = bC;
wo.default = hC;
var Co = {};
Object.defineProperty(Co, "__esModule", {
  value: !0
});
Co.default = void 0;
var gC = {
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
}, EC = gC;
Co.default = EC;
var Po = {};
Object.defineProperty(Po, "__esModule", {
  value: !0
});
Po.default = void 0;
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
      name: "colophon [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, RC = _C;
Po.default = RC;
var So = {};
Object.defineProperty(So, "__esModule", {
  value: !0
});
So.default = void 0;
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
      name: "conclusion [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, CC = wC;
So.default = CC;
var To = {};
Object.defineProperty(To, "__esModule", {
  value: !0
});
To.default = void 0;
var PC = {
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
}, SC = PC;
To.default = SC;
var Ao = {};
Object.defineProperty(Ao, "__esModule", {
  value: !0
});
Ao.default = void 0;
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
      name: "credit [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, AC = TC;
Ao.default = AC;
var Oo = {};
Object.defineProperty(Oo, "__esModule", {
  value: !0
});
Oo.default = void 0;
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
      name: "credits [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, $C = OC;
Oo.default = $C;
var $o = {};
Object.defineProperty($o, "__esModule", {
  value: !0
});
$o.default = void 0;
var xC = {
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
}, qC = xC;
$o.default = qC;
var xo = {};
Object.defineProperty(xo, "__esModule", {
  value: !0
});
xo.default = void 0;
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
      name: "rearnote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: ["doc-endnotes"],
  requiredContextRole: ["doc-endnotes"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "listitem"]]
}, MC = IC;
xo.default = MC;
var qo = {};
Object.defineProperty(qo, "__esModule", {
  value: !0
});
qo.default = void 0;
var NC = {
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
}, BC = NC;
qo.default = BC;
var Io = {};
Object.defineProperty(Io, "__esModule", {
  value: !0
});
Io.default = void 0;
var kC = {
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
}, DC = kC;
Io.default = DC;
var Mo = {};
Object.defineProperty(Mo, "__esModule", {
  value: !0
});
Mo.default = void 0;
var LC = {
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
}, FC = LC;
Mo.default = FC;
var No = {};
Object.defineProperty(No, "__esModule", {
  value: !0
});
No.default = void 0;
var jC = {
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
}, UC = jC;
No.default = UC;
var Bo = {};
Object.defineProperty(Bo, "__esModule", {
  value: !0
});
Bo.default = void 0;
var HC = {
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
}, WC = HC;
Bo.default = WC;
var ko = {};
Object.defineProperty(ko, "__esModule", {
  value: !0
});
ko.default = void 0;
var VC = {
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
}, GC = VC;
ko.default = GC;
var Do = {};
Object.defineProperty(Do, "__esModule", {
  value: !0
});
Do.default = void 0;
var zC = {
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
}, YC = zC;
Do.default = YC;
var Lo = {};
Object.defineProperty(Lo, "__esModule", {
  value: !0
});
Lo.default = void 0;
var KC = {
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
}, XC = KC;
Lo.default = XC;
var Fo = {};
Object.defineProperty(Fo, "__esModule", {
  value: !0
});
Fo.default = void 0;
var QC = {
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
}, JC = QC;
Fo.default = JC;
var jo = {};
Object.defineProperty(jo, "__esModule", {
  value: !0
});
jo.default = void 0;
var ZC = {
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
}, eP = ZC;
jo.default = eP;
var Uo = {};
Object.defineProperty(Uo, "__esModule", {
  value: !0
});
Uo.default = void 0;
var tP = {
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
}, rP = tP;
Uo.default = rP;
var Ho = {};
Object.defineProperty(Ho, "__esModule", {
  value: !0
});
Ho.default = void 0;
var nP = {
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
}, aP = nP;
Ho.default = aP;
var Wo = {};
Object.defineProperty(Wo, "__esModule", {
  value: !0
});
Wo.default = void 0;
var oP = {
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
}, iP = oP;
Wo.default = iP;
var Vo = {};
Object.defineProperty(Vo, "__esModule", {
  value: !0
});
Vo.default = void 0;
var lP = {
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
}, sP = lP;
Vo.default = sP;
var Go = {};
Object.defineProperty(Go, "__esModule", {
  value: !0
});
Go.default = void 0;
var uP = {
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
}, cP = uP;
Go.default = cP;
var zo = {};
Object.defineProperty(zo, "__esModule", {
  value: !0
});
zo.default = void 0;
var dP = {
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
}, fP = dP;
zo.default = fP;
var Yo = {};
Object.defineProperty(Yo, "__esModule", {
  value: !0
});
Yo.default = void 0;
var pP = {
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
}, mP = pP;
Yo.default = mP;
var Ko = {};
Object.defineProperty(Ko, "__esModule", {
  value: !0
});
Ko.default = void 0;
var vP = {
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
}, yP = vP;
Ko.default = yP;
var Xo = {};
Object.defineProperty(Xo, "__esModule", {
  value: !0
});
Xo.default = void 0;
var bP = {
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
}, hP = bP;
Xo.default = hP;
var Qo = {};
Object.defineProperty(Qo, "__esModule", {
  value: !0
});
Qo.default = void 0;
var gP = {
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
}, EP = gP;
Qo.default = EP;
var Jo = {};
Object.defineProperty(Jo, "__esModule", {
  value: !0
});
Jo.default = void 0;
var _P = {
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
}, RP = _P;
Jo.default = RP;
var Zo = {};
Object.defineProperty(Zo, "__esModule", {
  value: !0
});
Zo.default = void 0;
var wP = {
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
}, CP = wP;
Zo.default = CP;
var ei = {};
Object.defineProperty(ei, "__esModule", {
  value: !0
});
ei.default = void 0;
var PP = {
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
}, SP = PP;
ei.default = SP;
Object.defineProperty(vo, "__esModule", {
  value: !0
});
vo.default = void 0;
var TP = $(yo), AP = $(bo), OP = $(ho), $P = $(go), xP = $(Eo), qP = $(_o), IP = $(Ro), MP = $(wo), NP = $(Co), BP = $(Po), kP = $(So), DP = $(To), LP = $(Ao), FP = $(Oo), jP = $($o), UP = $(xo), HP = $(qo), WP = $(Io), VP = $(Mo), GP = $(No), zP = $(Bo), YP = $(ko), KP = $(Do), XP = $(Lo), QP = $(Fo), JP = $(jo), ZP = $(Uo), eS = $(Ho), tS = $(Wo), rS = $(Vo), nS = $(Go), aS = $(zo), oS = $(Yo), iS = $(Ko), lS = $(Xo), sS = $(Qo), uS = $(Jo), cS = $(Zo), dS = $(ei);
function $(e) {
  return e && e.__esModule ? e : { default: e };
}
var fS = [["doc-abstract", TP.default], ["doc-acknowledgments", AP.default], ["doc-afterword", OP.default], ["doc-appendix", $P.default], ["doc-backlink", xP.default], ["doc-biblioentry", qP.default], ["doc-bibliography", IP.default], ["doc-biblioref", MP.default], ["doc-chapter", NP.default], ["doc-colophon", BP.default], ["doc-conclusion", kP.default], ["doc-cover", DP.default], ["doc-credit", LP.default], ["doc-credits", FP.default], ["doc-dedication", jP.default], ["doc-endnote", UP.default], ["doc-endnotes", HP.default], ["doc-epigraph", WP.default], ["doc-epilogue", VP.default], ["doc-errata", GP.default], ["doc-example", zP.default], ["doc-footnote", YP.default], ["doc-foreword", KP.default], ["doc-glossary", XP.default], ["doc-glossref", QP.default], ["doc-index", JP.default], ["doc-introduction", ZP.default], ["doc-noteref", eS.default], ["doc-notice", tS.default], ["doc-pagebreak", rS.default], ["doc-pagelist", nS.default], ["doc-part", aS.default], ["doc-preface", oS.default], ["doc-prologue", iS.default], ["doc-pullquote", lS.default], ["doc-qna", sS.default], ["doc-subtitle", uS.default], ["doc-tip", cS.default], ["doc-toc", dS.default]], pS = fS;
vo.default = pS;
var ti = {}, ri = {};
Object.defineProperty(ri, "__esModule", {
  value: !0
});
ri.default = void 0;
var mS = {
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
}, vS = mS;
ri.default = vS;
var ni = {};
Object.defineProperty(ni, "__esModule", {
  value: !0
});
ni.default = void 0;
var yS = {
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
}, bS = yS;
ni.default = bS;
var ai = {};
Object.defineProperty(ai, "__esModule", {
  value: !0
});
ai.default = void 0;
var hS = {
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
}, gS = hS;
ai.default = gS;
Object.defineProperty(ti, "__esModule", {
  value: !0
});
ti.default = void 0;
var ES = ns(ri), _S = ns(ni), RS = ns(ai);
function ns(e) {
  return e && e.__esModule ? e : { default: e };
}
var wS = [["graphics-document", ES.default], ["graphics-object", _S.default], ["graphics-symbol", RS.default]], CS = wS;
ti.default = CS;
Object.defineProperty(kt, "__esModule", {
  value: !0
});
kt.default = void 0;
var PS = pr(Sn), SS = pr(Ln), TS = pr(vo), AS = pr(ti), OS = pr(it);
function pr(e) {
  return e && e.__esModule ? e : { default: e };
}
function $S(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yl(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Cf(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(u) {
        throw u;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function Kt(e, t) {
  return IS(e) || qS(e, t) || Cf(e, t) || xS();
}
function xS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cf(e, t) {
  if (e) {
    if (typeof e == "string")
      return su(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return su(e, t);
  }
}
function su(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function qS(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t)); a = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function IS(e) {
  if (Array.isArray(e))
    return e;
}
var xe = [].concat(PS.default, SS.default, TS.default, AS.default);
xe.forEach(function(e) {
  var t = Kt(e, 2), r = t[1], n = yl(r.superClass), a;
  try {
    for (n.s(); !(a = n.n()).done; ) {
      var o = a.value, i = yl(o), s;
      try {
        var l = function() {
          var c = s.value, d = xe.find(function(C) {
            var p = Kt(C, 1), E = p[0];
            return E === c;
          });
          if (d)
            for (var f = d[1], v = 0, y = Object.keys(f.props); v < y.length; v++) {
              var b = y[v];
              Object.prototype.hasOwnProperty.call(r.props, b) || Object.assign(r.props, $S({}, b, f.props[b]));
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
var bl = {
  entries: function() {
    return xe;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = yl(xe), a;
    try {
      for (n.s(); !(a = n.n()).done; ) {
        var o = Kt(a.value, 2), i = o[0], s = o[1];
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
    return !!bl.get(t);
  },
  keys: function() {
    return xe.map(function(t) {
      var r = Kt(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return xe.map(function(t) {
      var r = Kt(t, 2), n = r[1];
      return n;
    });
  }
}, MS = (0, OS.default)(bl, bl.entries());
kt.default = MS;
var oi = {}, uu = Object.prototype.toString, Pf = function(t) {
  var r = uu.call(t), n = r === "[object Arguments]";
  return n || (n = r !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && uu.call(t.callee) === "[object Function]"), n;
}, Pi, cu;
function NS() {
  if (cu)
    return Pi;
  cu = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = Pf, a = Object.prototype.propertyIsEnumerable, o = !a.call({ toString: null }, "toString"), i = a.call(function() {
    }, "prototype"), s = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], l = function(f) {
      var v = f.constructor;
      return v && v.prototype === f;
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
    e = function(v) {
      var y = v !== null && typeof v == "object", b = r.call(v) === "[object Function]", C = n(v), p = y && r.call(v) === "[object String]", E = [];
      if (!y && !b && !C)
        throw new TypeError("Object.keys called on a non-object");
      var P = i && b;
      if (p && v.length > 0 && !t.call(v, 0))
        for (var R = 0; R < v.length; ++R)
          E.push(String(R));
      if (C && v.length > 0)
        for (var S = 0; S < v.length; ++S)
          E.push(String(S));
      else
        for (var m in v)
          !(P && m === "prototype") && t.call(v, m) && E.push(String(m));
      if (o)
        for (var h = d(v), g = 0; g < s.length; ++g)
          !(h && s[g] === "constructor") && t.call(v, s[g]) && E.push(s[g]);
      return E;
    };
  }
  return Pi = e, Pi;
}
var BS = Array.prototype.slice, kS = Pf, du = Object.keys, Br = du ? function(t) {
  return du(t);
} : NS(), fu = Object.keys;
Br.shim = function() {
  if (Object.keys) {
    var t = function() {
      var r = Object.keys(arguments);
      return r && r.length === arguments.length;
    }(1, 2);
    t || (Object.keys = function(n) {
      return kS(n) ? fu(BS.call(n)) : fu(n);
    });
  } else
    Object.keys = Br;
  return Object.keys || Br;
};
var as = Br, kr = Object.defineProperty || !1;
if (kr)
  try {
    kr({}, "a", { value: 1 });
  } catch {
    kr = !1;
  }
var ii = kr, os = SyntaxError, te = TypeError, DS = Object.getOwnPropertyDescriptor, Dr = DS;
if (Dr)
  try {
    Dr([], "length");
  } catch {
    Dr = null;
  }
var lt = Dr, pu = ii, LS = os, yt = te, mu = lt, is = function(t, r, n) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new yt("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new yt("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new yt("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new yt("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new yt("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new yt("`loose`, if provided, must be a boolean");
  var a = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, l = !!mu && mu(t, r);
  if (pu)
    pu(t, r, {
      configurable: i === null && l ? l.configurable : !i,
      enumerable: a === null && l ? l.enumerable : !a,
      value: n,
      writable: o === null && l ? l.writable : !o
    });
  else if (s || !a && !o && !i)
    t[r] = n;
  else
    throw new LS("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, hl = ii, Sf = function() {
  return !!hl;
};
Sf.hasArrayLengthDefineBug = function() {
  if (!hl)
    return null;
  try {
    return hl([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var ls = Sf, FS = as, jS = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", US = Object.prototype.toString, HS = Array.prototype.concat, vu = is, WS = function(e) {
  return typeof e == "function" && US.call(e) === "[object Function]";
}, Tf = ls(), VS = function(e, t, r, n) {
  if (t in e) {
    if (n === !0) {
      if (e[t] === r)
        return;
    } else if (!WS(n) || !n())
      return;
  }
  Tf ? vu(e, t, r, !0) : vu(e, t, r);
}, Af = function(e, t) {
  var r = arguments.length > 2 ? arguments[2] : {}, n = FS(t);
  jS && (n = HS.call(n, Object.getOwnPropertySymbols(t)));
  for (var a = 0; a < n.length; a += 1)
    VS(e, n[a], t[n[a]], r[n[a]]);
};
Af.supportsDescriptors = !!Tf;
var st = Af, Of = { exports: {} }, ss = Object, $f = Error, GS = EvalError, zS = RangeError, YS = ReferenceError, KS = URIError, XS = Math.abs, QS = Math.floor, JS = Math.max, ZS = Math.min, eT = Math.pow, tT = Math.round, rT = Number.isNaN || function(t) {
  return t !== t;
}, nT = rT, aT = function(t) {
  return nT(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, li = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var a = 42;
  t[r] = a;
  for (var o in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var i = Object.getOwnPropertySymbols(t);
  if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var s = (
      /** @type {PropertyDescriptor} */
      Object.getOwnPropertyDescriptor(t, r)
    );
    if (s.value !== a || s.enumerable !== !0)
      return !1;
  }
  return !0;
}, yu = typeof Symbol < "u" && Symbol, oT = li, us = function() {
  return typeof yu != "function" || typeof Symbol != "function" || typeof yu("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : oT();
}, Si, bu;
function xf() {
  return bu || (bu = 1, Si = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Si;
}
var Ti, hu;
function qf() {
  if (hu)
    return Ti;
  hu = 1;
  var e = ss;
  return Ti = e.getPrototypeOf || null, Ti;
}
var Ai, gu;
function iT() {
  if (gu)
    return Ai;
  gu = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", a = function(l, u) {
    for (var c = [], d = 0; d < l.length; d += 1)
      c[d] = l[d];
    for (var f = 0; f < u.length; f += 1)
      c[f + l.length] = u[f];
    return c;
  }, o = function(l, u) {
    for (var c = [], d = u || 0, f = 0; d < l.length; d += 1, f += 1)
      c[f] = l[d];
    return c;
  }, i = function(s, l) {
    for (var u = "", c = 0; c < s.length; c += 1)
      u += s[c], c + 1 < s.length && (u += l);
    return u;
  };
  return Ai = function(l) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var c = o(arguments, 1), d, f = function() {
      if (this instanceof d) {
        var p = u.apply(
          this,
          a(c, arguments)
        );
        return Object(p) === p ? p : this;
      }
      return u.apply(
        l,
        a(c, arguments)
      );
    }, v = r(0, u.length - c.length), y = [], b = 0; b < v; b++)
      y[b] = "$" + b;
    if (d = Function("binder", "return function (" + i(y, ",") + "){ return binder.apply(this,arguments); }")(f), u.prototype) {
      var C = function() {
      };
      C.prototype = u.prototype, d.prototype = new C(), C.prototype = null;
    }
    return d;
  }, Ai;
}
var Oi, Eu;
function mr() {
  if (Eu)
    return Oi;
  Eu = 1;
  var e = iT();
  return Oi = Function.prototype.bind || e, Oi;
}
var $i, _u;
function cs() {
  return _u || (_u = 1, $i = Function.prototype.call), $i;
}
var xi, Ru;
function ds() {
  return Ru || (Ru = 1, xi = Function.prototype.apply), xi;
}
var lT = typeof Reflect < "u" && Reflect && Reflect.apply, sT = mr(), uT = ds(), cT = cs(), dT = lT, If = dT || sT.call(cT, uT), fT = mr(), pT = te, mT = cs(), vT = If, fs = function(t) {
  if (t.length < 1 || typeof t[0] != "function")
    throw new pT("a function is required");
  return vT(fT, mT, t);
}, yT = fs, wu = lt, Mf;
try {
  Mf = /** @type {{ __proto__?: typeof Array.prototype }} */
  [].__proto__ === Array.prototype;
} catch (e) {
  if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS")
    throw e;
}
var qi = !!Mf && wu && wu(
  Object.prototype,
  /** @type {keyof typeof Object.prototype} */
  "__proto__"
), Nf = Object, Cu = Nf.getPrototypeOf, bT = qi && typeof qi.get == "function" ? yT([qi.get]) : typeof Cu == "function" ? (
  /** @type {import('./get')} */
  function(t) {
    return Cu(t == null ? t : Nf(t));
  }
) : !1, Pu = xf(), Su = qf(), Tu = bT, ps = Pu ? function(t) {
  return Pu(t);
} : Su ? function(t) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new TypeError("getProto: not an object");
  return Su(t);
} : Tu ? function(t) {
  return Tu(t);
} : null, hT = Function.prototype.call, gT = Object.prototype.hasOwnProperty, ET = mr(), ms = ET.call(hT, gT), x, _T = ss, RT = $f, wT = GS, CT = zS, PT = YS, St = os, wt = te, ST = KS, TT = XS, AT = QS, OT = JS, $T = ZS, xT = eT, qT = tT, IT = aT, Bf = Function, Ii = function(e) {
  try {
    return Bf('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, or = lt, MT = ii, Mi = function() {
  throw new wt();
}, NT = or ? function() {
  try {
    return arguments.callee, Mi;
  } catch {
    try {
      return or(arguments, "callee").get;
    } catch {
      return Mi;
    }
  }
}() : Mi, bt = us(), W = ps, BT = qf(), kT = xf(), kf = ds(), vr = cs(), Et = {}, DT = typeof Uint8Array > "u" || !W ? x : W(Uint8Array), tt = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? x : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? x : ArrayBuffer,
  "%ArrayIteratorPrototype%": bt && W ? W([][Symbol.iterator]()) : x,
  "%AsyncFromSyncIteratorPrototype%": x,
  "%AsyncFunction%": Et,
  "%AsyncGenerator%": Et,
  "%AsyncGeneratorFunction%": Et,
  "%AsyncIteratorPrototype%": Et,
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
  "%Error%": RT,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": wT,
  "%Float16Array%": typeof Float16Array > "u" ? x : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? x : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? x : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? x : FinalizationRegistry,
  "%Function%": Bf,
  "%GeneratorFunction%": Et,
  "%Int8Array%": typeof Int8Array > "u" ? x : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? x : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? x : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": bt && W ? W(W([][Symbol.iterator]())) : x,
  "%JSON%": typeof JSON == "object" ? JSON : x,
  "%Map%": typeof Map > "u" ? x : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !bt || !W ? x : W((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": _T,
  "%Object.getOwnPropertyDescriptor%": or,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? x : Promise,
  "%Proxy%": typeof Proxy > "u" ? x : Proxy,
  "%RangeError%": CT,
  "%ReferenceError%": PT,
  "%Reflect%": typeof Reflect > "u" ? x : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? x : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !bt || !W ? x : W((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? x : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": bt && W ? W(""[Symbol.iterator]()) : x,
  "%Symbol%": bt ? Symbol : x,
  "%SyntaxError%": St,
  "%ThrowTypeError%": NT,
  "%TypedArray%": DT,
  "%TypeError%": wt,
  "%Uint8Array%": typeof Uint8Array > "u" ? x : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? x : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? x : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? x : Uint32Array,
  "%URIError%": ST,
  "%WeakMap%": typeof WeakMap > "u" ? x : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? x : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? x : WeakSet,
  "%Function.prototype.call%": vr,
  "%Function.prototype.apply%": kf,
  "%Object.defineProperty%": MT,
  "%Object.getPrototypeOf%": BT,
  "%Math.abs%": TT,
  "%Math.floor%": AT,
  "%Math.max%": OT,
  "%Math.min%": $T,
  "%Math.pow%": xT,
  "%Math.round%": qT,
  "%Math.sign%": IT,
  "%Reflect.getPrototypeOf%": kT
};
if (W)
  try {
    null.error;
  } catch (e) {
    var LT = W(W(e));
    tt["%Error.prototype%"] = LT;
  }
var FT = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Ii("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Ii("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Ii("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var a = e("%AsyncGenerator%");
    a && W && (r = W(a.prototype));
  }
  return tt[t] = r, r;
}, Au = {
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
}, yr = mr(), tn = ms, jT = yr.call(vr, Array.prototype.concat), UT = yr.call(kf, Array.prototype.splice), Ou = yr.call(vr, String.prototype.replace), rn = yr.call(vr, String.prototype.slice), HT = yr.call(vr, RegExp.prototype.exec), WT = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, VT = /\\(\\)?/g, GT = function(t) {
  var r = rn(t, 0, 1), n = rn(t, -1);
  if (r === "%" && n !== "%")
    throw new St("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new St("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Ou(t, WT, function(o, i, s, l) {
    a[a.length] = s ? Ou(l, VT, "$1") : i || o;
  }), a;
}, zT = function(t, r) {
  var n = t, a;
  if (tn(Au, n) && (a = Au[n], n = "%" + a[0] + "%"), tn(tt, n)) {
    var o = tt[n];
    if (o === Et && (o = FT(n)), typeof o > "u" && !r)
      throw new wt("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: n,
      value: o
    };
  }
  throw new St("intrinsic " + t + " does not exist!");
}, Ce = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new wt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new wt('"allowMissing" argument must be a boolean');
  if (HT(/^%?[^%]*%?$/, t) === null)
    throw new St("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = GT(t), a = n.length > 0 ? n[0] : "", o = zT("%" + a + "%", r), i = o.name, s = o.value, l = !1, u = o.alias;
  u && (a = u[0], UT(n, jT([0, 1], u)));
  for (var c = 1, d = !0; c < n.length; c += 1) {
    var f = n[c], v = rn(f, 0, 1), y = rn(f, -1);
    if ((v === '"' || v === "'" || v === "`" || y === '"' || y === "'" || y === "`") && v !== y)
      throw new St("property names with quotes must have matching quotes");
    if ((f === "constructor" || !d) && (l = !0), a += "." + f, i = "%" + a + "%", tn(tt, i))
      s = tt[i];
    else if (s != null) {
      if (!(f in s)) {
        if (!r)
          throw new wt("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (or && c + 1 >= n.length) {
        var b = or(s, f);
        d = !!b, d && "get" in b && !("originalValue" in b.get) ? s = b.get : s = s[f];
      } else
        d = tn(s, f), s = s[f];
      d && !l && (tt[i] = s);
    }
  }
  return s;
}, YT = Ce, $u = is, KT = ls(), xu = lt, qu = te, XT = YT("%Math.floor%"), QT = function(t, r) {
  if (typeof t != "function")
    throw new qu("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || XT(r) !== r)
    throw new qu("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], a = !0, o = !0;
  if ("length" in t && xu) {
    var i = xu(t, "length");
    i && !i.configurable && (a = !1), i && !i.writable && (o = !1);
  }
  return (a || o || !n) && (KT ? $u(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r,
    !0,
    !0
  ) : $u(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r
  )), t;
}, JT = mr(), ZT = ds(), eA = If, tA = function() {
  return eA(JT, ZT, arguments);
};
(function(e) {
  var t = QT, r = ii, n = fs, a = tA;
  e.exports = function(i) {
    var s = n(arguments), l = i.length - (arguments.length - 1);
    return t(
      s,
      1 + (l > 0 ? l : 0),
      !0
    );
  }, r ? r(e.exports, "apply", { value: a }) : e.exports.apply = a;
})(Of);
var Dt = Of.exports, Df = Ce, Lf = fs, rA = Lf([Df("%String.prototype.indexOf%")]), Y = function(t, r) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    Df(t, !!r)
  );
  return typeof n == "function" && rA(t, ".prototype.") > -1 ? Lf(
    /** @type {const} */
    [n]
  ) : n;
}, nA = as, Ff = li(), jf = Y, Lr = ss, aA = jf("Array.prototype.push"), Iu = jf("Object.prototype.propertyIsEnumerable"), oA = Ff ? Lr.getOwnPropertySymbols : null, Uf = function(t, r) {
  if (t == null)
    throw new TypeError("target must be an object");
  var n = Lr(t);
  if (arguments.length === 1)
    return n;
  for (var a = 1; a < arguments.length; ++a) {
    var o = Lr(arguments[a]), i = nA(o), s = Ff && (Lr.getOwnPropertySymbols || oA);
    if (s)
      for (var l = s(o), u = 0; u < l.length; ++u) {
        var c = l[u];
        Iu(o, c) && aA(i, c);
      }
    for (var d = 0; d < i.length; ++d) {
      var f = i[d];
      if (Iu(o, f)) {
        var v = o[f];
        n[f] = v;
      }
    }
  }
  return n;
}, Ni = Uf, iA = function() {
  if (!Object.assign)
    return !1;
  for (var e = "abcdefghijklmnopqrst", t = e.split(""), r = {}, n = 0; n < t.length; ++n)
    r[t[n]] = t[n];
  var a = Object.assign({}, r), o = "";
  for (var i in a)
    o += i;
  return e !== o;
}, lA = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var e = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(e, "xy");
  } catch {
    return e[1] === "y";
  }
  return !1;
}, Hf = function() {
  return !Object.assign || iA() || lA() ? Ni : Object.assign;
}, sA = st, uA = Hf, cA = function() {
  var t = uA();
  return sA(
    Object,
    { assign: t },
    { assign: function() {
      return Object.assign !== t;
    } }
  ), t;
}, dA = st, fA = Dt, pA = Uf, Wf = Hf, mA = cA, vA = fA.apply(Wf()), Vf = function(t, r) {
  return vA(Object, arguments);
};
dA(Vf, {
  getPolyfill: Wf,
  implementation: pA,
  shim: mA
});
var yA = Vf, Gf = Ce, zf = Dt, bA = zf(Gf("String.prototype.indexOf")), Yf = function(t, r) {
  var n = Gf(t, !!r);
  return typeof n == "function" && bA(t, ".prototype.") > -1 ? zf(n) : n;
}, ir = function() {
  return typeof (function() {
  }).name == "string";
}, Xt = Object.getOwnPropertyDescriptor;
if (Xt)
  try {
    Xt([], "length");
  } catch {
    Xt = null;
  }
ir.functionsHaveConfigurableNames = function() {
  if (!ir() || !Xt)
    return !1;
  var t = Xt(function() {
  }, "name");
  return !!t && !!t.configurable;
};
var hA = Function.prototype.bind;
ir.boundFunctionsHaveNames = function() {
  return ir() && typeof hA == "function" && (function() {
  }).bind().name !== "";
};
var gA = ir, Mu = is, EA = ls(), _A = gA.functionsHaveConfigurableNames(), RA = te, wA = function(t, r) {
  if (typeof t != "function")
    throw new RA("`fn` is not a function");
  var n = arguments.length > 2 && !!arguments[2];
  return (!n || _A) && (EA ? Mu(
    /** @type {Parameters<define>[0]} */
    t,
    "name",
    r,
    !0,
    !0
  ) : Mu(
    /** @type {Parameters<define>[0]} */
    t,
    "name",
    r
  )), t;
}, CA = wA, PA = te, SA = Object, Kf = CA(function() {
  if (this == null || this !== SA(this))
    throw new PA("RegExp.prototype.flags getter called on non-object");
  var t = "";
  return this.hasIndices && (t += "d"), this.global && (t += "g"), this.ignoreCase && (t += "i"), this.multiline && (t += "m"), this.dotAll && (t += "s"), this.unicode && (t += "u"), this.unicodeSets && (t += "v"), this.sticky && (t += "y"), t;
}, "get flags", !0), TA = Kf, AA = st.supportsDescriptors, OA = Object.getOwnPropertyDescriptor, Xf = function() {
  if (AA && /a/mig.flags === "gim") {
    var t = OA(RegExp.prototype, "flags");
    if (t && typeof t.get == "function" && "dotAll" in RegExp.prototype && "hasIndices" in RegExp.prototype) {
      var r = "", n = {};
      if (Object.defineProperty(n, "hasIndices", {
        get: function() {
          r += "d";
        }
      }), Object.defineProperty(n, "sticky", {
        get: function() {
          r += "y";
        }
      }), t.get.call(n), r === "dy")
        return t.get;
    }
  }
  return TA;
}, $A = st.supportsDescriptors, xA = Xf, qA = lt, IA = Object.defineProperty, MA = $f, Nu = ps, NA = /a/, BA = function() {
  if (!$A || !Nu)
    throw new MA("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var t = xA(), r = Nu(NA), n = qA(r, "flags");
  return (!n || n.get !== t) && IA(r, "flags", {
    configurable: !0,
    enumerable: !1,
    get: t
  }), t;
}, kA = st, DA = Dt, LA = Kf, Qf = Xf, FA = BA, Jf = DA(Qf());
kA(Jf, {
  getPolyfill: Qf,
  implementation: LA,
  shim: FA
});
var jA = Jf, Fr = { exports: {} }, UA = li, ut = function() {
  return UA() && !!Symbol.toStringTag;
}, HA = ut(), WA = Y, gl = WA("Object.prototype.toString"), si = function(t) {
  return HA && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : gl(t) === "[object Arguments]";
}, Zf = function(t) {
  return si(t) ? !0 : t !== null && typeof t == "object" && "length" in t && typeof t.length == "number" && t.length >= 0 && gl(t) !== "[object Array]" && "callee" in t && gl(t.callee) === "[object Function]";
}, VA = function() {
  return si(arguments);
}();
si.isLegacyArguments = Zf;
var ep = VA ? si : Zf;
const GA = {}, zA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: GA
}, Symbol.toStringTag, { value: "Module" })), YA = /* @__PURE__ */ ty(zA);
var vs = typeof Map == "function" && Map.prototype, Bi = Object.getOwnPropertyDescriptor && vs ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, nn = vs && Bi && typeof Bi.get == "function" ? Bi.get : null, Bu = vs && Map.prototype.forEach, ys = typeof Set == "function" && Set.prototype, ki = Object.getOwnPropertyDescriptor && ys ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, an = ys && ki && typeof ki.get == "function" ? ki.get : null, ku = ys && Set.prototype.forEach, KA = typeof WeakMap == "function" && WeakMap.prototype, Qt = KA ? WeakMap.prototype.has : null, XA = typeof WeakSet == "function" && WeakSet.prototype, Jt = XA ? WeakSet.prototype.has : null, QA = typeof WeakRef == "function" && WeakRef.prototype, Du = QA ? WeakRef.prototype.deref : null, JA = Boolean.prototype.valueOf, ZA = Object.prototype.toString, eO = Function.prototype.toString, tO = String.prototype.match, bs = String.prototype.slice, Ne = String.prototype.replace, rO = String.prototype.toUpperCase, Lu = String.prototype.toLowerCase, tp = RegExp.prototype.test, Fu = Array.prototype.concat, ce = Array.prototype.join, nO = Array.prototype.slice, ju = Math.floor, El = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Di = Object.getOwnPropertySymbols, _l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Tt = typeof Symbol == "function" && typeof Symbol.iterator == "object", Zt = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Tt || "symbol") ? Symbol.toStringTag : null, rp = Object.prototype.propertyIsEnumerable, Uu = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Hu(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || tp.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -ju(-e) : ju(e);
    if (n !== e) {
      var a = String(n), o = bs.call(t, a.length + 1);
      return Ne.call(a, r, "$&_") + "." + Ne.call(Ne.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Ne.call(t, r, "$&_");
}
var Rl = YA, Wu = Rl.custom, Vu = op(Wu) ? Wu : null, np = {
  __proto__: null,
  double: '"',
  single: "'"
}, aO = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, ui = function e(t, r, n, a) {
  var o = r || {};
  if (be(o, "quoteStyle") && !be(np, o.quoteStyle))
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (be(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = be(o, "customInspect") ? o.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (be(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (be(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = o.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return lp(t, o);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var l = String(t);
    return s ? Hu(t, l) : l;
  }
  if (typeof t == "bigint") {
    var u = String(t) + "n";
    return s ? Hu(t, u) : u;
  }
  var c = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof n > "u" && (n = 0), n >= c && c > 0 && typeof t == "object")
    return wl(t) ? "[Array]" : "[Object]";
  var d = RO(o, n);
  if (typeof a > "u")
    a = [];
  else if (ip(a, t) >= 0)
    return "[Circular]";
  function f(w, A, M) {
    if (A && (a = nO.call(a), a.push(A)), M) {
      var H = {
        depth: o.depth
      };
      return be(o, "quoteStyle") && (H.quoteStyle = o.quoteStyle), e(w, H, n + 1, a);
    }
    return e(w, o, n + 1, a);
  }
  if (typeof t == "function" && !Gu(t)) {
    var v = pO(t), y = Sr(t, f);
    return "[Function" + (v ? ": " + v : " (anonymous)") + "]" + (y.length > 0 ? " { " + ce.call(y, ", ") + " }" : "");
  }
  if (op(t)) {
    var b = Tt ? Ne.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : _l.call(t);
    return typeof t == "object" && !Tt ? Ut(b) : b;
  }
  if (gO(t)) {
    for (var C = "<" + Lu.call(String(t.nodeName)), p = t.attributes || [], E = 0; E < p.length; E++)
      C += " " + p[E].name + "=" + ap(oO(p[E].value), "double", o);
    return C += ">", t.childNodes && t.childNodes.length && (C += "..."), C += "</" + Lu.call(String(t.nodeName)) + ">", C;
  }
  if (wl(t)) {
    if (t.length === 0)
      return "[]";
    var P = Sr(t, f);
    return d && !_O(P) ? "[" + Cl(P, d) + "]" : "[ " + ce.call(P, ", ") + " ]";
  }
  if (lO(t)) {
    var R = Sr(t, f);
    return !("cause" in Error.prototype) && "cause" in t && !rp.call(t, "cause") ? "{ [" + String(t) + "] " + ce.call(Fu.call("[cause]: " + f(t.cause), R), ", ") + " }" : R.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + ce.call(R, ", ") + " }";
  }
  if (typeof t == "object" && i) {
    if (Vu && typeof t[Vu] == "function" && Rl)
      return Rl(t, { depth: c - n });
    if (i !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (mO(t)) {
    var S = [];
    return Bu && Bu.call(t, function(w, A) {
      S.push(f(A, t, !0) + " => " + f(w, t));
    }), zu("Map", nn.call(t), S, d);
  }
  if (bO(t)) {
    var m = [];
    return ku && ku.call(t, function(w) {
      m.push(f(w, t));
    }), zu("Set", an.call(t), m, d);
  }
  if (vO(t))
    return Li("WeakMap");
  if (hO(t))
    return Li("WeakSet");
  if (yO(t))
    return Li("WeakRef");
  if (uO(t))
    return Ut(f(Number(t)));
  if (dO(t))
    return Ut(f(El.call(t)));
  if (cO(t))
    return Ut(JA.call(t));
  if (sO(t))
    return Ut(f(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && t === globalThis || typeof Qr < "u" && t === Qr)
    return "{ [object globalThis] }";
  if (!iO(t) && !Gu(t)) {
    var h = Sr(t, f), g = Uu ? Uu(t) === Object.prototype : t instanceof Object || t.constructor === Object, I = t instanceof Object ? "" : "null prototype", j = !g && Zt && Object(t) === t && Zt in t ? bs.call(Ye(t), 8, -1) : I ? "Object" : "", F = g || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", U = F + (j || I ? "[" + ce.call(Fu.call([], j || [], I || []), ": ") + "] " : "");
    return h.length === 0 ? U + "{}" : d ? U + "{" + Cl(h, d) + "}" : U + "{ " + ce.call(h, ", ") + " }";
  }
  return String(t);
};
function ap(e, t, r) {
  var n = r.quoteStyle || t, a = np[n];
  return a + e + a;
}
function oO(e) {
  return Ne.call(String(e), /"/g, "&quot;");
}
function ct(e) {
  return !Zt || !(typeof e == "object" && (Zt in e || typeof e[Zt] < "u"));
}
function wl(e) {
  return Ye(e) === "[object Array]" && ct(e);
}
function iO(e) {
  return Ye(e) === "[object Date]" && ct(e);
}
function Gu(e) {
  return Ye(e) === "[object RegExp]" && ct(e);
}
function lO(e) {
  return Ye(e) === "[object Error]" && ct(e);
}
function sO(e) {
  return Ye(e) === "[object String]" && ct(e);
}
function uO(e) {
  return Ye(e) === "[object Number]" && ct(e);
}
function cO(e) {
  return Ye(e) === "[object Boolean]" && ct(e);
}
function op(e) {
  if (Tt)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !_l)
    return !1;
  try {
    return _l.call(e), !0;
  } catch {
  }
  return !1;
}
function dO(e) {
  if (!e || typeof e != "object" || !El)
    return !1;
  try {
    return El.call(e), !0;
  } catch {
  }
  return !1;
}
var fO = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function be(e, t) {
  return fO.call(e, t);
}
function Ye(e) {
  return ZA.call(e);
}
function pO(e) {
  if (e.name)
    return e.name;
  var t = tO.call(eO.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function ip(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function mO(e) {
  if (!nn || !e || typeof e != "object")
    return !1;
  try {
    nn.call(e);
    try {
      an.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function vO(e) {
  if (!Qt || !e || typeof e != "object")
    return !1;
  try {
    Qt.call(e, Qt);
    try {
      Jt.call(e, Jt);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function yO(e) {
  if (!Du || !e || typeof e != "object")
    return !1;
  try {
    return Du.call(e), !0;
  } catch {
  }
  return !1;
}
function bO(e) {
  if (!an || !e || typeof e != "object")
    return !1;
  try {
    an.call(e);
    try {
      nn.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function hO(e) {
  if (!Jt || !e || typeof e != "object")
    return !1;
  try {
    Jt.call(e, Jt);
    try {
      Qt.call(e, Qt);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function gO(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function lp(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return lp(bs.call(e, 0, t.maxStringLength), t) + n;
  }
  var a = aO[t.quoteStyle || "single"];
  a.lastIndex = 0;
  var o = Ne.call(Ne.call(e, a, "\\$1"), /[\x00-\x1f]/g, EO);
  return ap(o, "single", t);
}
function EO(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + rO.call(t.toString(16));
}
function Ut(e) {
  return "Object(" + e + ")";
}
function Li(e) {
  return e + " { ? }";
}
function zu(e, t, r, n) {
  var a = n ? Cl(r, n) : ce.call(r, ", ");
  return e + " (" + t + ") {" + a + "}";
}
function _O(e) {
  for (var t = 0; t < e.length; t++)
    if (ip(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function RO(e, t) {
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
function Cl(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + ce.call(e, "," + r) + `
` + t.prev;
}
function Sr(e, t) {
  var r = wl(e), n = [];
  if (r) {
    n.length = e.length;
    for (var a = 0; a < e.length; a++)
      n[a] = be(e, a) ? t(e[a], e) : "";
  }
  var o = typeof Di == "function" ? Di(e) : [], i;
  if (Tt) {
    i = {};
    for (var s = 0; s < o.length; s++)
      i["$" + o[s]] = o[s];
  }
  for (var l in e)
    be(e, l) && (r && String(Number(l)) === l && l < e.length || Tt && i["$" + l] instanceof Symbol || (tp.call(/[^\w$]/, l) ? n.push(t(l, e) + ": " + t(e[l], e)) : n.push(l + ": " + t(e[l], e))));
  if (typeof Di == "function")
    for (var u = 0; u < o.length; u++)
      rp.call(e, o[u]) && n.push("[" + t(o[u]) + "]: " + t(e[o[u]], e));
  return n;
}
var wO = ui, CO = te, ci = function(e, t, r) {
  for (var n = e, a; (a = n.next) != null; n = a)
    if (a.key === t)
      return n.next = a.next, r || (a.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = a), a;
}, PO = function(e, t) {
  if (e) {
    var r = ci(e, t);
    return r && r.value;
  }
}, SO = function(e, t, r) {
  var n = ci(e, t);
  n ? n.value = r : e.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: r
  };
}, TO = function(e, t) {
  return e ? !!ci(e, t) : !1;
}, AO = function(e, t) {
  if (e)
    return ci(e, t, !0);
}, OO = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new CO("Side channel does not contain " + wO(n));
    },
    delete: function(n) {
      var a = t && t.next, o = AO(t, n);
      return o && a && a === o && (t = void 0), !!o;
    },
    get: function(n) {
      return PO(t, n);
    },
    has: function(n) {
      return TO(t, n);
    },
    set: function(n, a) {
      t || (t = {
        next: void 0
      }), SO(
        /** @type {NonNullable<typeof $o>} */
        t,
        n,
        a
      );
    }
  };
  return r;
}, $O = Ce, br = Y, xO = ui, qO = te, Yu = $O("%Map%", !0), IO = br("Map.prototype.get", !0), MO = br("Map.prototype.set", !0), NO = br("Map.prototype.has", !0), BO = br("Map.prototype.delete", !0), kO = br("Map.prototype.size", !0), sp = !!Yu && /** @type {Exclude<import('.'), false>} */
function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new qO("Side channel does not contain " + xO(n));
    },
    delete: function(n) {
      if (t) {
        var a = BO(t, n);
        return kO(t) === 0 && (t = void 0), a;
      }
      return !1;
    },
    get: function(n) {
      if (t)
        return IO(t, n);
    },
    has: function(n) {
      return t ? NO(t, n) : !1;
    },
    set: function(n, a) {
      t || (t = new Yu()), MO(t, n, a);
    }
  };
  return r;
}, DO = Ce, di = Y, LO = ui, Tr = sp, FO = te, ht = DO("%WeakMap%", !0), jO = di("WeakMap.prototype.get", !0), UO = di("WeakMap.prototype.set", !0), HO = di("WeakMap.prototype.has", !0), WO = di("WeakMap.prototype.delete", !0), VO = ht ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var t, r, n = {
      assert: function(a) {
        if (!n.has(a))
          throw new FO("Side channel does not contain " + LO(a));
      },
      delete: function(a) {
        if (ht && a && (typeof a == "object" || typeof a == "function")) {
          if (t)
            return WO(t, a);
        } else if (Tr && r)
          return r.delete(a);
        return !1;
      },
      get: function(a) {
        return ht && a && (typeof a == "object" || typeof a == "function") && t ? jO(t, a) : r && r.get(a);
      },
      has: function(a) {
        return ht && a && (typeof a == "object" || typeof a == "function") && t ? HO(t, a) : !!r && r.has(a);
      },
      set: function(a, o) {
        ht && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new ht()), UO(t, a, o)) : Tr && (r || (r = Tr()), r.set(a, o));
      }
    };
    return n;
  }
) : Tr, GO = te, zO = ui, YO = OO, KO = sp, XO = VO, QO = XO || KO || YO, up = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new GO("Side channel does not contain " + zO(n));
    },
    delete: function(n) {
      return !!t && t.delete(n);
    },
    get: function(n) {
      return t && t.get(n);
    },
    has: function(n) {
      return !!t && t.has(n);
    },
    set: function(n, a) {
      t || (t = QO()), t.set(n, a);
    }
  };
  return r;
}, JO = ms, Ht = up(), me = te, hs = {
  assert: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new me("`O` is not an object");
    if (typeof t != "string")
      throw new me("`slot` must be a string");
    if (Ht.assert(e), !hs.has(e, t))
      throw new me("`" + t + "` is not present on `O`");
  },
  get: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new me("`O` is not an object");
    if (typeof t != "string")
      throw new me("`slot` must be a string");
    var r = Ht.get(e);
    return r && r[
      /** @type {SaltedInternalSlot} */
      "$" + t
    ];
  },
  has: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new me("`O` is not an object");
    if (typeof t != "string")
      throw new me("`slot` must be a string");
    var r = Ht.get(e);
    return !!r && JO(
      r,
      /** @type {SaltedInternalSlot} */
      "$" + t
    );
  },
  set: function(e, t, r) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new me("`O` is not an object");
    if (typeof t != "string")
      throw new me("`slot` must be a string");
    var n = Ht.get(e);
    n || (n = {}, Ht.set(e, n)), n[
      /** @type {SaltedInternalSlot} */
      "$" + t
    ] = r;
  }
};
Object.freeze && Object.freeze(hs);
var ZO = hs, Wt = ZO, e$ = os, Ku = typeof StopIteration == "object" ? StopIteration : null, t$ = function(t) {
  if (!Ku)
    throw new e$("this environment lacks StopIteration");
  Wt.set(t, "[[Done]]", !1);
  var r = {
    next: (
      /** @type {() => IteratorResult<T>} */
      function() {
        var a = (
          /** @type {typeof origIterator} */
          Wt.get(this, "[[Iterator]]")
        ), o = !!Wt.get(a, "[[Done]]");
        try {
          return {
            done: o,
            // eslint-disable-next-line no-extra-parens
            value: o ? void 0 : (
              /** @type {T} */
              a.next()
            )
          };
        } catch (i) {
          if (Wt.set(a, "[[Done]]", !0), i !== Ku)
            throw i;
          return {
            done: !0,
            value: void 0
          };
        }
      }
    )
  };
  return Wt.set(r, "[[Iterator]]", t), r;
}, r$ = {}.toString, cp = Array.isArray || function(e) {
  return r$.call(e) == "[object Array]";
}, dp = Y, n$ = dp("String.prototype.valueOf"), a$ = function(t) {
  try {
    return n$(t), !0;
  } catch {
    return !1;
  }
}, o$ = dp("Object.prototype.toString"), i$ = "[object String]", l$ = ut(), fp = function(t) {
  return typeof t == "string" ? !0 : !t || typeof t != "object" ? !1 : l$ ? a$(t) : o$(t) === i$;
}, gs = typeof Map == "function" && Map.prototype ? Map : null, s$ = typeof Set == "function" && Set.prototype ? Set : null, on;
gs || (on = function(t) {
  return !1;
});
var pp = gs ? Map.prototype.has : null, Xu = s$ ? Set.prototype.has : null;
!on && !pp && (on = function(t) {
  return !1;
});
var mp = on || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (pp.call(t), Xu)
      try {
        Xu.call(t);
      } catch {
        return !0;
      }
    return t instanceof gs;
  } catch {
  }
  return !1;
}, u$ = typeof Map == "function" && Map.prototype ? Map : null, Es = typeof Set == "function" && Set.prototype ? Set : null, ln;
Es || (ln = function(t) {
  return !1;
});
var Qu = u$ ? Map.prototype.has : null, vp = Es ? Set.prototype.has : null;
!ln && !vp && (ln = function(t) {
  return !1;
});
var yp = ln || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (vp.call(t), Qu)
      try {
        Qu.call(t);
      } catch {
        return !0;
      }
    return t instanceof Es;
  } catch {
  }
  return !1;
}, Ju = ep, Zu = t$;
if (us() || li()) {
  var Fi = Symbol.iterator;
  Fr.exports = function(t) {
    if (t != null && typeof t[Fi] < "u")
      return t[Fi]();
    if (Ju(t))
      return Array.prototype[Fi].call(t);
  };
} else {
  var c$ = cp, d$ = fp, ec = Ce, f$ = ec("%Map%", !0), p$ = ec("%Set%", !0), ne = Yf, tc = ne("Array.prototype.push"), rc = ne("String.prototype.charCodeAt"), m$ = ne("String.prototype.slice"), v$ = function(t, r) {
    var n = t.length;
    if (r + 1 >= n)
      return r + 1;
    var a = rc(t, r);
    if (a < 55296 || a > 56319)
      return r + 1;
    var o = rc(t, r + 1);
    return o < 56320 || o > 57343 ? r + 1 : r + 2;
  }, ji = function(t) {
    var r = 0;
    return {
      next: function() {
        var a = r >= t.length, o;
        return a || (o = t[r], r += 1), {
          done: a,
          value: o
        };
      }
    };
  }, nc = function(t, r) {
    if (c$(t) || Ju(t))
      return ji(t);
    if (d$(t)) {
      var n = 0;
      return {
        next: function() {
          var o = v$(t, n), i = m$(t, n, o);
          return n = o, {
            done: o > t.length,
            value: i
          };
        }
      };
    }
    if (r && typeof t["_es6-shim iterator_"] < "u")
      return t["_es6-shim iterator_"]();
  };
  if (!f$ && !p$)
    Fr.exports = function(t) {
      if (t != null)
        return nc(t, !0);
    };
  else {
    var y$ = mp, b$ = yp, ac = ne("Map.prototype.forEach", !0), oc = ne("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var ic = ne("Map.prototype.iterator", !0), lc = ne("Set.prototype.iterator", !0);
    var sc = ne("Map.prototype.@@iterator", !0) || ne("Map.prototype._es6-shim iterator_", !0), uc = ne("Set.prototype.@@iterator", !0) || ne("Set.prototype._es6-shim iterator_", !0), h$ = function(t) {
      if (y$(t)) {
        if (ic)
          return Zu(ic(t));
        if (sc)
          return sc(t);
        if (ac) {
          var r = [];
          return ac(t, function(a, o) {
            tc(r, [o, a]);
          }), ji(r);
        }
      }
      if (b$(t)) {
        if (lc)
          return Zu(lc(t));
        if (uc)
          return uc(t);
        if (oc) {
          var n = [];
          return oc(t, function(a) {
            tc(n, a);
          }), ji(n);
        }
      }
    };
    Fr.exports = function(t) {
      return h$(t) || nc(t);
    };
  }
}
var g$ = Fr.exports, cc = function(e) {
  return e !== e;
}, bp = function(t, r) {
  return t === 0 && r === 0 ? 1 / t === 1 / r : !!(t === r || cc(t) && cc(r));
}, E$ = bp, hp = function() {
  return typeof Object.is == "function" ? Object.is : E$;
}, _$ = hp, R$ = st, w$ = function() {
  var t = _$();
  return R$(Object, { is: t }, {
    is: function() {
      return Object.is !== t;
    }
  }), t;
}, C$ = st, P$ = Dt, S$ = bp, gp = hp, T$ = w$, Ep = P$(gp(), Object);
C$(Ep, {
  getPolyfill: gp,
  implementation: S$,
  shim: T$
});
var A$ = Ep, O$ = Dt, _p = Y, $$ = Ce, Pl = $$("%ArrayBuffer%", !0), jr = _p("ArrayBuffer.prototype.byteLength", !0), x$ = _p("Object.prototype.toString"), dc = !!Pl && !jr && new Pl(0).slice, fc = !!dc && O$(dc), Rp = jr || fc ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return jr ? jr(t) : fc(t, 0), !0;
  } catch {
    return !1;
  }
} : Pl ? function(t) {
  return x$(t) === "[object ArrayBuffer]";
} : function(t) {
  return !1;
}, wp = Y, q$ = wp("Date.prototype.getDay"), I$ = function(t) {
  try {
    return q$(t), !0;
  } catch {
    return !1;
  }
}, M$ = wp("Object.prototype.toString"), N$ = "[object Date]", B$ = ut(), k$ = function(t) {
  return typeof t != "object" || t === null ? !1 : B$ ? I$(t) : M$(t) === N$;
}, pc = Y, D$ = ut(), L$ = ms, F$ = lt, Sl;
if (D$) {
  var j$ = pc("RegExp.prototype.exec"), mc = {}, Ui = function() {
    throw mc;
  }, vc = {
    toString: Ui,
    valueOf: Ui
  };
  typeof Symbol.toPrimitive == "symbol" && (vc[Symbol.toPrimitive] = Ui), Sl = function(t) {
    if (!t || typeof t != "object")
      return !1;
    var r = (
      /** @type {NonNullable<typeof gOPD>} */
      F$(
        /** @type {{ lastIndex?: unknown }} */
        t,
        "lastIndex"
      )
    ), n = r && L$(r, "value");
    if (!n)
      return !1;
    try {
      j$(
        t,
        /** @type {string} */
        /** @type {unknown} */
        vc
      );
    } catch (a) {
      return a === mc;
    }
  };
} else {
  var U$ = pc("Object.prototype.toString"), H$ = "[object RegExp]";
  Sl = function(t) {
    return !t || typeof t != "object" && typeof t != "function" ? !1 : U$(t) === H$;
  };
}
var Cp = Sl, W$ = Y, yc = W$("SharedArrayBuffer.prototype.byteLength", !0), V$ = yc ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return yc(t), !0;
  } catch {
    return !1;
  }
} : function(t) {
  return !1;
}, Pp = Y, G$ = Pp("Number.prototype.toString"), z$ = function(t) {
  try {
    return G$(t), !0;
  } catch {
    return !1;
  }
}, Y$ = Pp("Object.prototype.toString"), K$ = "[object Number]", X$ = ut(), Q$ = function(t) {
  return typeof t == "number" ? !0 : !t || typeof t != "object" ? !1 : X$ ? z$(t) : Y$(t) === K$;
}, Sp = Y, J$ = Sp("Boolean.prototype.toString"), Z$ = Sp("Object.prototype.toString"), ex = function(t) {
  try {
    return J$(t), !0;
  } catch {
    return !1;
  }
}, tx = "[object Boolean]", rx = ut(), nx = function(t) {
  return typeof t == "boolean" ? !0 : t === null || typeof t != "object" ? !1 : rx ? ex(t) : Z$(t) === tx;
}, Tl = { exports: {} }, Hi, bc;
function ax() {
  if (bc)
    return Hi;
  bc = 1;
  var e = Y, t = Cp, r = e("RegExp.prototype.exec"), n = te;
  return Hi = function(o) {
    if (!t(o))
      throw new n("`regex` must be a RegExp");
    return function(s) {
      return r(o, s) !== null;
    };
  }, Hi;
}
var Tp = Y, ox = Tp("Object.prototype.toString"), ix = us(), lx = ax();
if (ix) {
  var sx = Tp("Symbol.prototype.toString"), ux = lx(/^Symbol\(.*\)$/), cx = function(t) {
    return typeof t.valueOf() != "symbol" ? !1 : ux(sx(t));
  };
  Tl.exports = function(t) {
    if (typeof t == "symbol")
      return !0;
    if (!t || typeof t != "object" || ox(t) !== "[object Symbol]")
      return !1;
    try {
      return cx(t);
    } catch {
      return !1;
    }
  };
} else
  Tl.exports = function(t) {
    return !1;
  };
var dx = Tl.exports, Al = { exports: {} }, hc = typeof BigInt < "u" && BigInt, fx = function() {
  return typeof hc == "function" && typeof BigInt == "function" && typeof hc(42) == "bigint" && typeof BigInt(42) == "bigint";
}, px = fx();
if (px) {
  var mx = BigInt.prototype.valueOf, vx = function(t) {
    try {
      return mx.call(t), !0;
    } catch {
    }
    return !1;
  };
  Al.exports = function(t) {
    return t === null || typeof t > "u" || typeof t == "boolean" || typeof t == "string" || typeof t == "number" || typeof t == "symbol" || typeof t == "function" ? !1 : typeof t == "bigint" ? !0 : vx(t);
  };
} else
  Al.exports = function(t) {
    return !1;
  };
var yx = Al.exports, bx = fp, hx = Q$, gx = nx, Ex = dx, _x = yx, Rx = function(t) {
  if (t == null || typeof t != "object" && typeof t != "function")
    return null;
  if (bx(t))
    return "String";
  if (hx(t))
    return "Number";
  if (gx(t))
    return "Boolean";
  if (Ex(t))
    return "Symbol";
  if (_x(t))
    return "BigInt";
}, sn = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, gc = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, un;
sn || (un = function(t) {
  return !1;
});
var Ol = sn ? sn.prototype.has : null, Wi = gc ? gc.prototype.has : null;
!un && !Ol && (un = function(t) {
  return !1;
});
var wx = un || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (Ol.call(t, Ol), Wi)
      try {
        Wi.call(t, Wi);
      } catch {
        return !0;
      }
    return t instanceof sn;
  } catch {
  }
  return !1;
}, $l = { exports: {} }, Cx = Ce, Ap = Y, Px = Cx("%WeakSet%", !0), Vi = Ap("WeakSet.prototype.has", !0);
if (Vi) {
  var Gi = Ap("WeakMap.prototype.has", !0);
  $l.exports = function(t) {
    if (!t || typeof t != "object")
      return !1;
    try {
      if (Vi(t, Vi), Gi)
        try {
          Gi(t, Gi);
        } catch {
          return !0;
        }
      return t instanceof Px;
    } catch {
    }
    return !1;
  };
} else
  $l.exports = function(t) {
    return !1;
  };
var Sx = $l.exports, Tx = mp, Ax = yp, Ox = wx, $x = Sx, xx = function(t) {
  if (t && typeof t == "object") {
    if (Tx(t))
      return "Map";
    if (Ax(t))
      return "Set";
    if (Ox(t))
      return "WeakMap";
    if ($x(t))
      return "WeakSet";
  }
  return !1;
}, Op = Function.prototype.toString, _t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, xl, Ur;
if (typeof _t == "function" && typeof Object.defineProperty == "function")
  try {
    xl = Object.defineProperty({}, "length", {
      get: function() {
        throw Ur;
      }
    }), Ur = {}, _t(function() {
      throw 42;
    }, null, xl);
  } catch (e) {
    e !== Ur && (_t = null);
  }
else
  _t = null;
var qx = /^\s*class\b/, ql = function(t) {
  try {
    var r = Op.call(t);
    return qx.test(r);
  } catch {
    return !1;
  }
}, zi = function(t) {
  try {
    return ql(t) ? !1 : (Op.call(t), !0);
  } catch {
    return !1;
  }
}, Hr = Object.prototype.toString, Ix = "[object Object]", Mx = "[object Function]", Nx = "[object GeneratorFunction]", Bx = "[object HTMLAllCollection]", kx = "[object HTML document.all class]", Dx = "[object HTMLCollection]", Lx = typeof Symbol == "function" && !!Symbol.toStringTag, Fx = !(0 in [,]), Il = function() {
  return !1;
};
if (typeof document == "object") {
  var jx = document.all;
  Hr.call(jx) === Hr.call(document.all) && (Il = function(t) {
    if ((Fx || !t) && (typeof t > "u" || typeof t == "object"))
      try {
        var r = Hr.call(t);
        return (r === Bx || r === kx || r === Dx || r === Ix) && t("") == null;
      } catch {
      }
    return !1;
  });
}
var Ux = _t ? function(t) {
  if (Il(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  try {
    _t(t, null, xl);
  } catch (r) {
    if (r !== Ur)
      return !1;
  }
  return !ql(t) && zi(t);
} : function(t) {
  if (Il(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (Lx)
    return zi(t);
  if (ql(t))
    return !1;
  var r = Hr.call(t);
  return r !== Mx && r !== Nx && !/^\[object HTML/.test(r) ? !1 : zi(t);
}, Hx = Ux, Wx = Object.prototype.toString, $p = Object.prototype.hasOwnProperty, Vx = function(t, r, n) {
  for (var a = 0, o = t.length; a < o; a++)
    $p.call(t, a) && (n == null ? r(t[a], a, t) : r.call(n, t[a], a, t));
}, Gx = function(t, r, n) {
  for (var a = 0, o = t.length; a < o; a++)
    n == null ? r(t.charAt(a), a, t) : r.call(n, t.charAt(a), a, t);
}, zx = function(t, r, n) {
  for (var a in t)
    $p.call(t, a) && (n == null ? r(t[a], a, t) : r.call(n, t[a], a, t));
};
function Yx(e) {
  return Wx.call(e) === "[object Array]";
}
var Kx = function(t, r, n) {
  if (!Hx(r))
    throw new TypeError("iterator must be a function");
  var a;
  arguments.length >= 3 && (a = n), Yx(t) ? Vx(t, r, a) : typeof t == "string" ? Gx(t, r, a) : zx(t, r, a);
}, Xx = [
  "Float16Array",
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
], Yi = Xx, Qx = typeof globalThis > "u" ? Qr : globalThis, Jx = function() {
  for (var t = [], r = 0; r < Yi.length; r++)
    typeof Qx[Yi[r]] == "function" && (t[t.length] = Yi[r]);
  return t;
}, cn = Kx, Zx = Jx, Ec = Dt, _s = Y, Wr = lt, Ar = ps, e1 = _s("Object.prototype.toString"), xp = ut(), _c = typeof globalThis > "u" ? Qr : globalThis, Ml = Zx(), Rs = _s("String.prototype.slice"), t1 = _s("Array.prototype.indexOf", !0) || function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n] === r)
      return n;
  return -1;
}, dn = { __proto__: null };
xp && Wr && Ar ? cn(Ml, function(e) {
  var t = new _c[e]();
  if (Symbol.toStringTag in t && Ar) {
    var r = Ar(t), n = Wr(r, Symbol.toStringTag);
    if (!n && r) {
      var a = Ar(r);
      n = Wr(a, Symbol.toStringTag);
    }
    dn["$" + e] = Ec(n.get);
  }
}) : cn(Ml, function(e) {
  var t = new _c[e](), r = t.slice || t.set;
  r && (dn[
    /** @type {`$${import('.').TypedArrayName}`} */
    "$" + e
  ] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
  // @ts-expect-error TODO FIXME
  Ec(r));
});
var r1 = function(t) {
  var r = !1;
  return cn(
    /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
    dn,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(n, a) {
      if (!r)
        try {
          "$" + n(t) === a && (r = /** @type {import('.').TypedArrayName} */
          Rs(a, 1));
        } catch {
        }
    }
  ), r;
}, n1 = function(t) {
  var r = !1;
  return cn(
    /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
    dn,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(n, a) {
      if (!r)
        try {
          n(t), r = /** @type {import('.').TypedArrayName} */
          Rs(a, 1);
        } catch {
        }
    }
  ), r;
}, a1 = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!xp) {
    var r = Rs(e1(t), 8, -1);
    return t1(Ml, r) > -1 ? r : r !== "Object" ? !1 : n1(t);
  }
  return Wr ? r1(t) : null;
}, o1 = Y, Rc = o1("ArrayBuffer.prototype.byteLength", !0), i1 = Rp, l1 = function(t) {
  return i1(t) ? Rc ? Rc(t) : t.byteLength : NaN;
}, qp = yA, de = Yf, wc = jA, s1 = Ce, At = g$, u1 = up, Cc = A$, Pc = ep, Sc = cp, Tc = Rp, Ac = k$, Oc = Cp, $c = V$, xc = as, qc = Rx, Ic = xx, Mc = a1, Nc = l1, Bc = de("SharedArrayBuffer.prototype.byteLength", !0), kc = de("Date.prototype.getTime"), Ki = Object.getPrototypeOf, Dc = de("Object.prototype.toString"), fn = s1("%Set%", !0), Nl = de("Map.prototype.has", !0), pn = de("Map.prototype.get", !0), Lc = de("Map.prototype.size", !0), mn = de("Set.prototype.add", !0), Ip = de("Set.prototype.delete", !0), vn = de("Set.prototype.has", !0), Vr = de("Set.prototype.size", !0);
function Fc(e, t, r, n) {
  for (var a = At(e), o; (o = a.next()) && !o.done; )
    if (se(t, o.value, r, n))
      return Ip(e, o.value), !0;
  return !1;
}
function Mp(e) {
  if (typeof e > "u")
    return null;
  if (typeof e != "object")
    return typeof e == "symbol" ? !1 : typeof e == "string" || typeof e == "number" ? +e == +e : !0;
}
function c1(e, t, r, n, a, o) {
  var i = Mp(r);
  if (i != null)
    return i;
  var s = pn(t, i), l = qp({}, a, { strict: !1 });
  return typeof s > "u" && !Nl(t, i) || !se(n, s, l, o) ? !1 : !Nl(e, i) && se(n, s, l, o);
}
function d1(e, t, r) {
  var n = Mp(r);
  return n ?? (vn(t, n) && !vn(e, n));
}
function jc(e, t, r, n, a, o) {
  for (var i = At(e), s, l; (s = i.next()) && !s.done; )
    if (l = s.value, // eslint-disable-next-line no-use-before-define
    se(r, l, a, o) && se(n, pn(t, l), a, o))
      return Ip(e, l), !0;
  return !1;
}
function se(e, t, r, n) {
  var a = r || {};
  if (a.strict ? Cc(e, t) : e === t)
    return !0;
  var o = qc(e), i = qc(t);
  if (o !== i)
    return !1;
  if (!e || !t || typeof e != "object" && typeof t != "object")
    return a.strict ? Cc(e, t) : e == t;
  var s = n.has(e), l = n.has(t), u;
  if (s && l) {
    if (n.get(e) === n.get(t))
      return !0;
  } else
    u = {};
  return s || n.set(e, u), l || n.set(t, u), m1(e, t, a, n);
}
function Uc(e) {
  return !e || typeof e != "object" || typeof e.length != "number" || typeof e.copy != "function" || typeof e.slice != "function" || e.length > 0 && typeof e[0] != "number" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function f1(e, t, r, n) {
  if (Vr(e) !== Vr(t))
    return !1;
  for (var a = At(e), o = At(t), i, s, l; (i = a.next()) && !i.done; )
    if (i.value && typeof i.value == "object")
      l || (l = new fn()), mn(l, i.value);
    else if (!vn(t, i.value)) {
      if (r.strict || !d1(e, t, i.value))
        return !1;
      l || (l = new fn()), mn(l, i.value);
    }
  if (l) {
    for (; (s = o.next()) && !s.done; )
      if (s.value && typeof s.value == "object") {
        if (!Fc(l, s.value, r.strict, n))
          return !1;
      } else if (!r.strict && !vn(e, s.value) && !Fc(l, s.value, r.strict, n))
        return !1;
    return Vr(l) === 0;
  }
  return !0;
}
function p1(e, t, r, n) {
  if (Lc(e) !== Lc(t))
    return !1;
  for (var a = At(e), o = At(t), i, s, l, u, c, d; (i = a.next()) && !i.done; )
    if (u = i.value[0], c = i.value[1], u && typeof u == "object")
      l || (l = new fn()), mn(l, u);
    else if (d = pn(t, u), typeof d > "u" && !Nl(t, u) || !se(c, d, r, n)) {
      if (r.strict || !c1(e, t, u, c, r, n))
        return !1;
      l || (l = new fn()), mn(l, u);
    }
  if (l) {
    for (; (s = o.next()) && !s.done; )
      if (u = s.value[0], d = s.value[1], u && typeof u == "object") {
        if (!jc(l, e, u, d, r, n))
          return !1;
      } else if (!r.strict && (!e.has(u) || !se(pn(e, u), d, r, n)) && !jc(l, e, u, d, qp({}, r, { strict: !1 }), n))
        return !1;
    return Vr(l) === 0;
  }
  return !0;
}
function m1(e, t, r, n) {
  var a, o;
  if (typeof e != typeof t || e == null || t == null || Dc(e) !== Dc(t) || Pc(e) !== Pc(t))
    return !1;
  var i = Sc(e), s = Sc(t);
  if (i !== s)
    return !1;
  var l = e instanceof Error, u = t instanceof Error;
  if (l !== u || (l || u) && (e.name !== t.name || e.message !== t.message))
    return !1;
  var c = Oc(e), d = Oc(t);
  if (c !== d || (c || d) && (e.source !== t.source || wc(e) !== wc(t)))
    return !1;
  var f = Ac(e), v = Ac(t);
  if (f !== v || (f || v) && kc(e) !== kc(t) || r.strict && Ki && Ki(e) !== Ki(t))
    return !1;
  var y = Mc(e), b = Mc(t);
  if (y !== b)
    return !1;
  if (y || b) {
    if (e.length !== t.length)
      return !1;
    for (a = 0; a < e.length; a++)
      if (e[a] !== t[a])
        return !1;
    return !0;
  }
  var C = Uc(e), p = Uc(t);
  if (C !== p)
    return !1;
  if (C || p) {
    if (e.length !== t.length)
      return !1;
    for (a = 0; a < e.length; a++)
      if (e[a] !== t[a])
        return !1;
    return !0;
  }
  var E = Tc(e), P = Tc(t);
  if (E !== P)
    return !1;
  if (E || P)
    return Nc(e) !== Nc(t) ? !1 : typeof Uint8Array == "function" && se(new Uint8Array(e), new Uint8Array(t), r, n);
  var R = $c(e), S = $c(t);
  if (R !== S)
    return !1;
  if (R || S)
    return Bc(e) !== Bc(t) ? !1 : typeof Uint8Array == "function" && se(new Uint8Array(e), new Uint8Array(t), r, n);
  if (typeof e != typeof t)
    return !1;
  var m = xc(e), h = xc(t);
  if (m.length !== h.length)
    return !1;
  for (m.sort(), h.sort(), a = m.length - 1; a >= 0; a--)
    if (m[a] != h[a])
      return !1;
  for (a = m.length - 1; a >= 0; a--)
    if (o = m[a], !se(e[o], t[o], r, n))
      return !1;
  var g = Ic(e), I = Ic(t);
  return g !== I ? !1 : g === "Set" || I === "Set" ? f1(e, t, r, n) : g === "Map" ? p1(e, t, r, n) : !0;
}
var v1 = function(t, r, n) {
  return se(t, r, n, u1());
};
Object.defineProperty(oi, "__esModule", {
  value: !0
});
oi.default = void 0;
var y1 = ws(v1), b1 = ws(it), Np = ws(kt);
function ws(e) {
  return e && e.__esModule ? e : { default: e };
}
function Xi(e, t) {
  return E1(e) || g1(e, t) || Bp(e, t) || h1();
}
function h1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function g1(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t)); a = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function E1(e) {
  if (Array.isArray(e))
    return e;
}
function _1(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Bp(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(u) {
        throw u;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function Bp(e, t) {
  if (e) {
    if (typeof e == "string")
      return Hc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Hc(e, t);
  }
}
function Hc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var qe = [], Wc = Np.default.keys();
for (var Qi = 0; Qi < Wc.length; Qi++) {
  var Ji = Wc[Qi], Zi = Np.default.get(Ji);
  if (Zi)
    for (var Vc = [].concat(Zi.baseConcepts, Zi.relatedConcepts), el = 0; el < Vc.length; el++) {
      var Gc = Vc[el];
      if (Gc.module === "HTML") {
        var tl = Gc.concept;
        tl && function() {
          var e = JSON.stringify(tl), t = qe.find(function(o) {
            return JSON.stringify(o[0]) === e;
          }), r = void 0;
          t ? r = t[1] : r = [];
          for (var n = !0, a = 0; a < r.length; a++)
            if (r[a] === Ji) {
              n = !1;
              break;
            }
          n && r.push(Ji), qe.push([tl, r]);
        }();
      }
    }
}
var Bl = {
  entries: function() {
    return qe;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = _1(qe), a;
    try {
      for (n.s(); !(a = n.n()).done; ) {
        var o = Xi(a.value, 2), i = o[0], s = o[1];
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
      return (0, y1.default)(t, n[0]);
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Bl.get(t);
  },
  keys: function() {
    return qe.map(function(t) {
      var r = Xi(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return qe.map(function(t) {
      var r = Xi(t, 2), n = r[1];
      return n;
    });
  }
}, R1 = (0, b1.default)(Bl, Bl.entries());
oi.default = R1;
var fi = {};
Object.defineProperty(fi, "__esModule", {
  value: !0
});
fi.default = void 0;
var w1 = Dp(it), kp = Dp(kt);
function Dp(e) {
  return e && e.__esModule ? e : { default: e };
}
function rl(e, t) {
  return S1(e) || P1(e, t) || Lp(e, t) || C1();
}
function C1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P1(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, o = !1, i, s;
    try {
      for (r = r.call(e); !(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t)); a = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function S1(e) {
  if (Array.isArray(e))
    return e;
}
function T1(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Lp(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(u) {
        throw u;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, s;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !o && r.return != null && r.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function Lp(e, t) {
  if (e) {
    if (typeof e == "string")
      return zc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return zc(e, t);
  }
}
function zc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Ie = [], Fp = kp.default.keys(), A1 = function(t) {
  var r = Fp[t], n = kp.default.get(r);
  if (n)
    for (var a = [].concat(n.baseConcepts, n.relatedConcepts), o = 0; o < a.length; o++) {
      var i = a[o];
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
for (var nl = 0; nl < Fp.length; nl++)
  A1(nl);
var kl = {
  entries: function() {
    return Ie;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = T1(Ie), a;
    try {
      for (n.s(); !(a = n.n()).done; ) {
        var o = rl(a.value, 2), i = o[0], s = o[1];
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
    return !!kl.get(t);
  },
  keys: function() {
    return Ie.map(function(t) {
      var r = rl(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return Ie.map(function(t) {
      var r = rl(t, 2), n = r[1];
      return n;
    });
  }
}, O1 = (0, w1.default)(kl, kl.entries());
fi.default = O1;
Object.defineProperty(le, "__esModule", {
  value: !0
});
var ae = le.roles = Up = le.roleElements = jp = le.elementRoles = le.dom = le.aria = void 0, $1 = hr(wn), x1 = hr(Pn), q1 = hr(kt), I1 = hr(oi), M1 = hr(fi);
function hr(e) {
  return e && e.__esModule ? e : { default: e };
}
var N1 = $1.default;
le.aria = N1;
var B1 = x1.default;
le.dom = B1;
var k1 = q1.default;
ae = le.roles = k1;
var D1 = I1.default, jp = le.elementRoles = D1, L1 = M1.default, Up = le.roleElements = L1, Cs = { exports: {} };
Cs.exports;
(function(e) {
  var t = function() {
    var r = String.fromCharCode, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", o = {};
    function i(l, u) {
      if (!o[l]) {
        o[l] = {};
        for (var c = 0; c < l.length; c++)
          o[l][l.charAt(c)] = c;
      }
      return o[l][u];
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
          var v = u.charCodeAt(d);
          c[d * 2] = v >>> 8, c[d * 2 + 1] = v % 256;
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
        return u.forEach(function(v) {
          f.push(r(v));
        }), s.decompress(f.join(""));
      },
      //compress into a string that is already URI encoded
      compressToEncodedURIComponent: function(l) {
        return l == null ? "" : s._compress(l, 6, function(u) {
          return a.charAt(u);
        });
      },
      //decompress from an output of compressToEncodedURIComponent
      decompressFromEncodedURIComponent: function(l) {
        return l == null ? "" : l == "" ? null : (l = l.replace(/ /g, "+"), s._decompress(l.length, 32, function(u) {
          return i(a, l.charAt(u));
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
        var d, f, v = {}, y = {}, b = "", C = "", p = "", E = 2, P = 3, R = 2, S = [], m = 0, h = 0, g;
        for (g = 0; g < l.length; g += 1)
          if (b = l.charAt(g), Object.prototype.hasOwnProperty.call(v, b) || (v[b] = P++, y[b] = !0), C = p + b, Object.prototype.hasOwnProperty.call(v, C))
            p = C;
          else {
            if (Object.prototype.hasOwnProperty.call(y, p)) {
              if (p.charCodeAt(0) < 256) {
                for (d = 0; d < R; d++)
                  m = m << 1, h == u - 1 ? (h = 0, S.push(c(m)), m = 0) : h++;
                for (f = p.charCodeAt(0), d = 0; d < 8; d++)
                  m = m << 1 | f & 1, h == u - 1 ? (h = 0, S.push(c(m)), m = 0) : h++, f = f >> 1;
              } else {
                for (f = 1, d = 0; d < R; d++)
                  m = m << 1 | f, h == u - 1 ? (h = 0, S.push(c(m)), m = 0) : h++, f = 0;
                for (f = p.charCodeAt(0), d = 0; d < 16; d++)
                  m = m << 1 | f & 1, h == u - 1 ? (h = 0, S.push(c(m)), m = 0) : h++, f = f >> 1;
              }
              E--, E == 0 && (E = Math.pow(2, R), R++), delete y[p];
            } else
              for (f = v[p], d = 0; d < R; d++)
                m = m << 1 | f & 1, h == u - 1 ? (h = 0, S.push(c(m)), m = 0) : h++, f = f >> 1;
            E--, E == 0 && (E = Math.pow(2, R), R++), v[C] = P++, p = String(b);
          }
        if (p !== "") {
          if (Object.prototype.hasOwnProperty.call(y, p)) {
            if (p.charCodeAt(0) < 256) {
              for (d = 0; d < R; d++)
                m = m << 1, h == u - 1 ? (h = 0, S.push(c(m)), m = 0) : h++;
              for (f = p.charCodeAt(0), d = 0; d < 8; d++)
                m = m << 1 | f & 1, h == u - 1 ? (h = 0, S.push(c(m)), m = 0) : h++, f = f >> 1;
            } else {
              for (f = 1, d = 0; d < R; d++)
                m = m << 1 | f, h == u - 1 ? (h = 0, S.push(c(m)), m = 0) : h++, f = 0;
              for (f = p.charCodeAt(0), d = 0; d < 16; d++)
                m = m << 1 | f & 1, h == u - 1 ? (h = 0, S.push(c(m)), m = 0) : h++, f = f >> 1;
            }
            E--, E == 0 && (E = Math.pow(2, R), R++), delete y[p];
          } else
            for (f = v[p], d = 0; d < R; d++)
              m = m << 1 | f & 1, h == u - 1 ? (h = 0, S.push(c(m)), m = 0) : h++, f = f >> 1;
          E--, E == 0 && (E = Math.pow(2, R), R++);
        }
        for (f = 2, d = 0; d < R; d++)
          m = m << 1 | f & 1, h == u - 1 ? (h = 0, S.push(c(m)), m = 0) : h++, f = f >> 1;
        for (; ; )
          if (m = m << 1, h == u - 1) {
            S.push(c(m));
            break;
          } else
            h++;
        return S.join("");
      },
      decompress: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32768, function(u) {
          return l.charCodeAt(u);
        });
      },
      _decompress: function(l, u, c) {
        var d = [], f = 4, v = 4, y = 3, b = "", C = [], p, E, P, R, S, m, h, g = { val: c(0), position: u, index: 1 };
        for (p = 0; p < 3; p += 1)
          d[p] = p;
        for (P = 0, S = Math.pow(2, 2), m = 1; m != S; )
          R = g.val & g.position, g.position >>= 1, g.position == 0 && (g.position = u, g.val = c(g.index++)), P |= (R > 0 ? 1 : 0) * m, m <<= 1;
        switch (P) {
          case 0:
            for (P = 0, S = Math.pow(2, 8), m = 1; m != S; )
              R = g.val & g.position, g.position >>= 1, g.position == 0 && (g.position = u, g.val = c(g.index++)), P |= (R > 0 ? 1 : 0) * m, m <<= 1;
            h = r(P);
            break;
          case 1:
            for (P = 0, S = Math.pow(2, 16), m = 1; m != S; )
              R = g.val & g.position, g.position >>= 1, g.position == 0 && (g.position = u, g.val = c(g.index++)), P |= (R > 0 ? 1 : 0) * m, m <<= 1;
            h = r(P);
            break;
          case 2:
            return "";
        }
        for (d[3] = h, E = h, C.push(h); ; ) {
          if (g.index > l)
            return "";
          for (P = 0, S = Math.pow(2, y), m = 1; m != S; )
            R = g.val & g.position, g.position >>= 1, g.position == 0 && (g.position = u, g.val = c(g.index++)), P |= (R > 0 ? 1 : 0) * m, m <<= 1;
          switch (h = P) {
            case 0:
              for (P = 0, S = Math.pow(2, 8), m = 1; m != S; )
                R = g.val & g.position, g.position >>= 1, g.position == 0 && (g.position = u, g.val = c(g.index++)), P |= (R > 0 ? 1 : 0) * m, m <<= 1;
              d[v++] = r(P), h = v - 1, f--;
              break;
            case 1:
              for (P = 0, S = Math.pow(2, 16), m = 1; m != S; )
                R = g.val & g.position, g.position >>= 1, g.position == 0 && (g.position = u, g.val = c(g.index++)), P |= (R > 0 ? 1 : 0) * m, m <<= 1;
              d[v++] = r(P), h = v - 1, f--;
              break;
            case 2:
              return C.join("");
          }
          if (f == 0 && (f = Math.pow(2, y), y++), d[h])
            b = d[h];
          else if (h === v)
            b = E + E.charAt(0);
          else
            return null;
          C.push(b), d[v++] = E + b.charAt(0), f--, E = b, f == 0 && (f = Math.pow(2, y), y++);
        }
      }
    };
    return s;
  }();
  e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return t;
  });
})(Cs);
var F1 = Cs.exports;
const j1 = /* @__PURE__ */ ry(F1);
function Hp(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const U1 = (e, t, r, n, a, o, i) => {
  const s = n + r.indent, l = r.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, r, s, a, o);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = r.spacingOuter + s + d + r.spacingOuter + n), d = "{" + d + "}"), r.spacingInner + n + l.prop.open + u + l.prop.close + "=" + l.value.open + d + l.value.close;
  }).join("");
}, H1 = 3, W1 = (e, t, r, n, a, o) => e.map((i) => {
  const s = typeof i == "string" ? Wp(i, t) : o(i, t, r, n, a);
  return s === "" && typeof i == "object" && i !== null && i.nodeType !== H1 ? "" : t.spacingOuter + r + s;
}).join(""), Wp = (e, t) => {
  const r = t.colors.content;
  return r.open + Hp(e) + r.close;
}, V1 = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + Hp(e) + "-->" + r.close;
}, G1 = (e, t, r, n, a) => {
  const o = n.colors.tag;
  return o.open + "<" + e + (t && o.close + t + n.spacingOuter + a + o.open) + (r ? ">" + o.close + r + n.spacingOuter + a + o.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + o.close;
}, z1 = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
}, Y1 = 1, Vp = 3, Gp = 8, zp = 11, K1 = /^((HTML|SVG)\w*)?Element$/, X1 = (e) => {
  const t = e.constructor.name, {
    nodeType: r,
    tagName: n
  } = e, a = typeof n == "string" && n.includes("-") || typeof e.hasAttribute == "function" && e.hasAttribute("is");
  return r === Y1 && (K1.test(t) || a) || r === Vp && t === "Text" || r === Gp && t === "Comment" || r === zp && t === "DocumentFragment";
};
function Q1(e) {
  return e.nodeType === Vp;
}
function J1(e) {
  return e.nodeType === Gp;
}
function al(e) {
  return e.nodeType === zp;
}
function Z1(e) {
  return {
    test: (t) => {
      var r;
      return (t == null || (r = t.constructor) == null ? void 0 : r.name) && X1(t);
    },
    serialize: (t, r, n, a, o, i) => {
      if (Q1(t))
        return Wp(t.data, r);
      if (J1(t))
        return V1(t.data, r);
      const s = al(t) ? "DocumentFragment" : t.tagName.toLowerCase();
      return ++a > r.maxDepth ? z1(s, r) : G1(s, U1(al(t) ? [] : Array.from(t.attributes).map((l) => l.name).sort(), al(t) ? {} : Array.from(t.attributes).reduce((l, u) => (l[u.name] = u.value, l), {}), r, n + r.indent, a, o, i), W1(Array.prototype.slice.call(t.childNodes || t.children).filter(e), r, n + r.indent, a, o, i), r, n);
    }
  };
}
let Yp = null, Ps = null, Ss = null;
try {
  const e = module && module.require;
  Ps = e.call(module, "fs").readFileSync, Ss = e.call(module, "@babel/code-frame").codeFrameColumns, Yp = e.call(module, "chalk");
} catch {
}
function eq(e) {
  const t = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.slice(t, r), a = n.split(":"), [o, i, s] = [a[0], parseInt(a[1], 10), parseInt(a[2], 10)];
  let l = "";
  try {
    l = Ps(o, "utf-8");
  } catch {
    return "";
  }
  const u = Ss(l, {
    start: {
      line: i,
      column: s
    }
  }, {
    highlightCode: !0,
    linesBelow: 0
  });
  return Yp.dim(n) + `
` + u + `
`;
}
function tq() {
  if (!Ps || !Ss)
    return "";
  const t = new Error().stack.split(`
`).slice(1).find((r) => !r.includes("node_modules/"));
  return eq(t);
}
const Kp = 3;
function ol() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function Ts() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function Xp(e) {
  if (e.defaultView)
    return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window)
    return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof e.debug == "function" && typeof e.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof e + ".");
}
function Pe(e) {
  if (!e || typeof e.querySelector != "function" || typeof e.querySelectorAll != "function")
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + t(e) + ".");
  function t(r) {
    return typeof r == "object" ? r === null ? "null" : r.constructor.name : typeof r;
  }
}
const rq = () => {
  let e;
  try {
    var t;
    e = JSON.parse((t = process) == null || (t = t.env) == null ? void 0 : t.COLORS);
  } catch {
  }
  return typeof e == "boolean" ? e : typeof process < "u" && process.versions !== void 0 && process.versions.node !== void 0;
}, {
  DOMCollection: nq
} = es, aq = 1, oq = 8;
function iq(e) {
  return e.nodeType !== oq && (e.nodeType !== aq || !e.matches(q().defaultIgnore));
}
function lr(e, t, r) {
  if (r === void 0 && (r = {}), e || (e = Ts().body), typeof t != "number" && (t = typeof process < "u" && process.env.DEBUG_PRINT_LIMIT || 7e3), t === 0)
    return "";
  e.documentElement && (e = e.documentElement);
  let n = typeof e;
  if (n === "object" ? n = e.constructor.name : e = {}, !("outerHTML" in e))
    throw new TypeError("Expected an element or document but got " + n);
  const {
    filterNode: a = iq,
    ...o
  } = r, i = ef(e, {
    plugins: [Z1(a), nq],
    printFunctionName: !1,
    highlight: rq(),
    ...o
  });
  return t !== void 0 && e.outerHTML.length > t ? i.slice(0, t) + "..." : i;
}
const Dl = function() {
  const e = tq();
  console.log(e ? lr(...arguments) + `

` + e : lr(...arguments));
};
let rt = {
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
    const r = lr(t), n = new Error([e, "Ignored nodes: comments, " + rt.defaultIgnore + `
` + r].filter(Boolean).join(`

`));
    return n.name = "TestingLibraryElementError", n;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1
};
function lq(e) {
  try {
    return rt._disableExpensiveErrorDiagnostics = !0, e();
  } finally {
    rt._disableExpensiveErrorDiagnostics = !1;
  }
}
function sq(e) {
  typeof e == "function" && (e = e(rt)), rt = {
    ...rt,
    ...e
  };
}
function q() {
  return rt;
}
const uq = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function Qp(e) {
  return uq.includes(e.nodeName.toLowerCase()) ? "" : e.nodeType === Kp ? e.textContent : Array.from(e.childNodes).map((t) => Qp(t)).join("");
}
function Ll(e) {
  let t;
  return e.tagName.toLowerCase() === "label" ? t = Qp(e) : t = e.value || e.textContent, t;
}
function Jp(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!cq(e))
    return [];
  const r = e.ownerDocument.querySelectorAll("label");
  return Array.from(r).filter((n) => n.control === e);
}
function cq(e) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || e.tagName === "INPUT" && e.getAttribute("type") !== "hidden";
}
function Zp(e, t, r) {
  let {
    selector: n = "*"
  } = r === void 0 ? {} : r;
  const a = t.getAttribute("aria-labelledby"), o = a ? a.split(" ") : [];
  return o.length ? o.map((i) => {
    const s = e.querySelector('[id="' + i + '"]');
    return s ? {
      content: Ll(s),
      formControl: null
    } : {
      content: "",
      formControl: null
    };
  }) : Array.from(Jp(t)).map((i) => {
    const s = Ll(i), l = "button, input, meter, output, progress, select, textarea", u = Array.from(i.querySelectorAll(l)).filter((c) => c.matches(n))[0];
    return {
      content: s,
      formControl: u
    };
  });
}
function em(e) {
  if (e == null)
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
      "It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?"
    );
}
function Lt(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  em(r);
  const a = n(e);
  return typeof r == "string" || typeof r == "number" ? a.toLowerCase().includes(r.toString().toLowerCase()) : typeof r == "function" ? r(a, t) : tm(r, a);
}
function Ee(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  em(r);
  const a = n(e);
  return r instanceof Function ? r(a, t) : r instanceof RegExp ? tm(r, a) : a === String(r);
}
function As(e) {
  let {
    trim: t = !0,
    collapseWhitespace: r = !0
  } = e === void 0 ? {} : e;
  return (n) => {
    let a = n;
    return a = t ? a.trim() : a, a = r ? a.replace(/\s+/g, " ") : a, a;
  };
}
function dt(e) {
  let {
    trim: t,
    collapseWhitespace: r,
    normalizer: n
  } = e;
  if (!n)
    return As({
      trim: t,
      collapseWhitespace: r
    });
  if (typeof t < "u" || typeof r < "u")
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  return n;
}
function tm(e, t) {
  const r = e.test(t);
  return e.global && e.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), r;
}
function gr(e) {
  return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((t) => t.nodeType === Kp && !!t.textContent).map((t) => t.textContent).join("");
}
const dq = fq(jp);
function rm(e) {
  return e.hidden === !0 || e.getAttribute("aria-hidden") === "true" || e.ownerDocument.defaultView.getComputedStyle(e).display === "none";
}
function pi(e, t) {
  t === void 0 && (t = {});
  const {
    isSubtreeInaccessible: r = rm
  } = t;
  if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === "hidden")
    return !0;
  let a = e;
  for (; a; ) {
    if (r(a))
      return !0;
    a = a.parentElement;
  }
  return !1;
}
function Os(e) {
  for (const {
    match: t,
    roles: r
  } of dq)
    if (t(e))
      return [...r];
  return [];
}
function fq(e) {
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
  function a(i) {
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
  let o = [];
  for (const [i, s] of e.entries())
    o = [...o, {
      match: a(i),
      roles: Array.from(s),
      specificity: r(i)
    }];
  return o.sort(n);
}
function nm(e, t) {
  let {
    hidden: r = !1
  } = t === void 0 ? {} : t;
  function n(a) {
    return [a, ...Array.from(a.children).reduce((o, i) => [...o, ...n(i)], [])];
  }
  return n(e).filter((a) => r === !1 ? pi(a) === !1 : !0).reduce((a, o) => {
    let i = [];
    return o.hasAttribute("role") ? i = o.getAttribute("role").split(" ").slice(0, 1) : i = Os(o), i.reduce((s, l) => Array.isArray(s[l]) ? {
      ...s,
      [l]: [...s[l], o]
    } : {
      ...s,
      [l]: [o]
    }, a);
  }, {});
}
function am(e, t) {
  let {
    hidden: r,
    includeDescription: n
  } = t;
  const a = nm(e, {
    hidden: r
  });
  return Object.entries(a).filter((o) => {
    let [i] = o;
    return i !== "generic";
  }).map((o) => {
    let [i, s] = o;
    const l = "-".repeat(50), u = s.map((c) => {
      const d = 'Name "' + rs(c, {
        computedStyleSupportsPseudoElements: q().computedStyleSupportsPseudoElements
      }) + `":
`, f = lr(c.cloneNode(!1));
      if (n) {
        const v = 'Description "' + _f(c, {
          computedStyleSupportsPseudoElements: q().computedStyleSupportsPseudoElements
        }) + `":
`;
        return "" + d + v + f;
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
const pq = function(e, t) {
  let {
    hidden: r = !1
  } = t === void 0 ? {} : t;
  return console.log(am(e, {
    hidden: r
  }));
};
function mq(e) {
  return e.tagName === "OPTION" ? e.selected : Er(e, "aria-selected");
}
function vq(e) {
  return e.getAttribute("aria-busy") === "true";
}
function yq(e) {
  if (!("indeterminate" in e && e.indeterminate))
    return "checked" in e ? e.checked : Er(e, "aria-checked");
}
function bq(e) {
  return Er(e, "aria-pressed");
}
function hq(e) {
  var t, r;
  return (t = (r = Er(e, "aria-current")) != null ? r : e.getAttribute("aria-current")) != null ? t : !1;
}
function gq(e) {
  return Er(e, "aria-expanded");
}
function Er(e, t) {
  const r = e.getAttribute(t);
  if (r === "true")
    return !0;
  if (r === "false")
    return !1;
}
function Eq(e) {
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
function _q(e) {
  const t = e.getAttribute("aria-valuenow");
  return t === null ? void 0 : +t;
}
function Rq(e) {
  const t = e.getAttribute("aria-valuemax");
  return t === null ? void 0 : +t;
}
function wq(e) {
  const t = e.getAttribute("aria-valuemin");
  return t === null ? void 0 : +t;
}
function Cq(e) {
  const t = e.getAttribute("aria-valuetext");
  return t === null ? void 0 : t;
}
const Yc = As();
function Pq(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function Kc(e) {
  return new RegExp(Pq(e.toLowerCase()), "i");
}
function Te(e, t, r, n) {
  let {
    variant: a,
    name: o
  } = n, i = "";
  const s = {}, l = [["Role", "TestId"].includes(e) ? r : Kc(r)];
  o && (s.name = Kc(o)), e === "Role" && pi(t) && (s.hidden = !0, i = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `), Object.keys(s).length > 0 && l.push(s);
  const u = a + "By" + e;
  return {
    queryName: e,
    queryMethod: u,
    queryArgs: l,
    variant: a,
    warning: i,
    toString() {
      i && console.warn(i);
      let [c, d] = l;
      return c = typeof c == "string" ? "'" + c + "'" : c, d = d ? ", { " + Object.entries(d).map((f) => {
        let [v, y] = f;
        return v + ": " + y;
      }).join(", ") + " }" : "", u + "(" + c + d + ")";
    }
  };
}
function Ae(e, t, r) {
  return r && (!t || t.toLowerCase() === e.toLowerCase());
}
function yn(e, t, r) {
  var n, a;
  if (t === void 0 && (t = "get"), e.matches(q().defaultIgnore))
    return;
  const o = (n = e.getAttribute("role")) != null ? n : (a = Os(e)) == null ? void 0 : a[0];
  if (o !== "generic" && Ae("Role", r, o))
    return Te("Role", e, o, {
      variant: t,
      name: rs(e, {
        computedStyleSupportsPseudoElements: q().computedStyleSupportsPseudoElements
      })
    });
  const i = Zp(document, e).map((f) => f.content).join(" ");
  if (Ae("LabelText", r, i))
    return Te("LabelText", e, i, {
      variant: t
    });
  const s = e.getAttribute("placeholder");
  if (Ae("PlaceholderText", r, s))
    return Te("PlaceholderText", e, s, {
      variant: t
    });
  const l = Yc(gr(e));
  if (Ae("Text", r, l))
    return Te("Text", e, l, {
      variant: t
    });
  if (Ae("DisplayValue", r, e.value))
    return Te("DisplayValue", e, Yc(e.value), {
      variant: t
    });
  const u = e.getAttribute("alt");
  if (Ae("AltText", r, u))
    return Te("AltText", e, u, {
      variant: t
    });
  const c = e.getAttribute("title");
  if (Ae("Title", r, c))
    return Te("Title", e, c, {
      variant: t
    });
  const d = e.getAttribute(q().testIdAttribute);
  if (Ae("TestId", r, d))
    return Te("TestId", e, d, {
      variant: t
    });
}
function Or(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function Sq(e, t) {
  let {
    container: r = Ts(),
    timeout: n = q().asyncUtilTimeout,
    showOriginalStackTrace: a = q().showOriginalStackTrace,
    stackTraceError: o,
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
    let d, f, v, y = !1, b = "idle";
    const C = setTimeout(S, n), p = ol();
    if (p) {
      const {
        unstable_advanceTimersWrapper: m
      } = q();
      for (R(); !y; ) {
        if (!ol()) {
          const h = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          a || Or(h, o), c(h);
          return;
        }
        if (await m(async () => {
          jest.advanceTimersByTime(i);
        }), y)
          break;
        R();
      }
    } else {
      try {
        Pe(r);
      } catch (h) {
        c(h);
        return;
      }
      f = setInterval(P, i);
      const {
        MutationObserver: m
      } = Xp(r);
      v = new m(P), v.observe(r, l), R();
    }
    function E(m, h) {
      y = !0, clearTimeout(C), p || (clearInterval(f), v.disconnect()), m ? c(m) : u(h);
    }
    function P() {
      if (ol()) {
        const m = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return a || Or(m, o), c(m);
      } else
        return R();
    }
    function R() {
      if (b !== "pending")
        try {
          const m = lq(e);
          typeof (m == null ? void 0 : m.then) == "function" ? (b = "pending", m.then((h) => {
            b = "resolved", E(null, h);
          }, (h) => {
            b = "rejected", d = h;
          })) : E(null, m);
        } catch (m) {
          d = m;
        }
    }
    function S() {
      let m;
      d ? (m = d, !a && m.name === "TestingLibraryElementError" && Or(m, o)) : (m = new Error("Timed out in waitFor."), a || Or(m, o)), E(s(m), null);
    }
  });
}
function $s(e, t) {
  const r = new Error("STACK_TRACE_MESSAGE");
  return q().asyncWrapper(() => Sq(e, {
    stackTraceError: r,
    ...t
  }));
}
function mi(e, t) {
  return q().getElementError(e, t);
}
function vi(e, t) {
  return mi(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", t);
}
function ft(e, t, r, n) {
  let {
    exact: a = !0,
    collapseWhitespace: o,
    trim: i,
    normalizer: s
  } = n === void 0 ? {} : n;
  const l = a ? Ee : Lt, u = dt({
    collapseWhitespace: o,
    trim: i,
    normalizer: s
  });
  return Array.from(t.querySelectorAll("[" + e + "]")).filter((c) => l(c.getAttribute(e), c, r, u));
}
function om(e, t, r, n) {
  const a = ft(e, t, r, n);
  if (a.length > 1)
    throw vi("Found multiple elements by [" + e + "=" + r + "]", t);
  return a[0] || null;
}
function Ot(e, t) {
  return function(r) {
    for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      a[o - 1] = arguments[o];
    const i = e(r, ...a);
    if (i.length > 1) {
      const s = i.map((l) => mi(null, l).message).join(`

`);
      throw vi(t(r, ...a) + `

Here are the matching elements:

` + s, r);
    }
    return i[0] || null;
  };
}
function im(e, t) {
  return q().getElementError(`A better query is available, try this:
` + e.toString() + `
`, t);
}
function xs(e, t) {
  return function(r) {
    for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      a[o - 1] = arguments[o];
    const i = e(r, ...a);
    if (!i.length)
      throw q().getElementError(t(r, ...a), r);
    return i;
  };
}
function $t(e) {
  return (t, r, n, a) => $s(() => e(t, r, n), {
    container: t,
    ...a
  });
}
const We = (e, t, r) => function(n) {
  for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
    o[i - 1] = arguments[i];
  const s = e(n, ...o), [{
    suggest: l = q().throwSuggestions
  } = {}] = o.slice(-1);
  if (s && l) {
    const u = yn(s, r);
    if (u && !t.endsWith(u.queryName))
      throw im(u.toString(), n);
  }
  return s;
}, Q = (e, t, r) => function(n) {
  for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
    o[i - 1] = arguments[i];
  const s = e(n, ...o), [{
    suggest: l = q().throwSuggestions
  } = {}] = o.slice(-1);
  if (s.length && l) {
    const u = [...new Set(s.map((c) => {
      var d;
      return (d = yn(c, r)) == null ? void 0 : d.toString();
    }))];
    if (
      // only want to suggest if all the els have the same suggestion.
      u.length === 1 && !t.endsWith(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
        yn(s[0], r).queryName
      )
    )
      throw im(u[0], n);
  }
  return s;
};
function Se(e, t, r) {
  const n = We(Ot(e, t), e.name, "query"), a = xs(e, r), o = Ot(a, t), i = We(o, e.name, "get"), s = Q(a, e.name.replace("query", "get"), "getAll"), l = $t(Q(a, e.name, "findAll")), u = $t(We(o, e.name, "find"));
  return [n, s, i, l, u];
}
var Tq = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getElementError: mi,
  wrapAllByQueryWithSuggestion: Q,
  wrapSingleQueryWithSuggestion: We,
  getMultipleElementsFoundError: vi,
  queryAllByAttribute: ft,
  queryByAttribute: om,
  makeSingleQuery: Ot,
  makeGetAllQuery: xs,
  makeFindQuery: $t,
  buildQueries: Se
});
function Aq(e) {
  return Array.from(e.querySelectorAll("label,input")).map((t) => ({
    node: t,
    textToMatch: Ll(t)
  })).filter((t) => {
    let {
      textToMatch: r
    } = t;
    return r !== null;
  });
}
const Oq = function(e, t, r) {
  let {
    exact: n = !0,
    trim: a,
    collapseWhitespace: o,
    normalizer: i
  } = r === void 0 ? {} : r;
  const s = n ? Ee : Lt, l = dt({
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  });
  return Aq(e).filter((c) => {
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
}, sr = function(e, t, r) {
  let {
    selector: n = "*",
    exact: a = !0,
    collapseWhitespace: o,
    trim: i,
    normalizer: s
  } = r === void 0 ? {} : r;
  Pe(e);
  const l = a ? Ee : Lt, u = dt({
    collapseWhitespace: o,
    trim: i,
    normalizer: s
  }), c = Array.from(e.querySelectorAll("*")).filter((d) => Jp(d).length || d.hasAttribute("aria-labelledby")).reduce((d, f) => {
    const v = Zp(e, f, {
      selector: n
    });
    v.filter((b) => !!b.formControl).forEach((b) => {
      l(b.content, b.formControl, t, u) && b.formControl && d.push(b.formControl);
    });
    const y = v.filter((b) => !!b.content).map((b) => b.content);
    return l(y.join(" "), f, t, u) && d.push(f), y.length > 1 && y.forEach((b, C) => {
      l(b, f, t, u) && d.push(f);
      const p = [...y];
      p.splice(C, 1), p.length > 1 && l(p.join(" "), f, t, u) && d.push(f);
    }), d;
  }, []).concat(ft("aria-label", e, t, {
    exact: a,
    normalizer: u
  }));
  return Array.from(new Set(c)).filter((d) => d.matches(n));
}, nt = function(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  const o = sr(e, t, ...n);
  if (!o.length) {
    const i = Oq(e, t, ...n);
    if (i.length) {
      const s = i.map((l) => $q(e, l)).filter((l) => !!l);
      throw s.length ? q().getElementError(s.map((l) => "Found a label with the text of: " + t + ", however the element associated with this label (<" + l + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + l + " />, you can use aria-label or aria-labelledby instead.").join(`

`), e) : q().getElementError("Found a label with the text of: " + t + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, e);
    } else
      throw q().getElementError("Unable to find a label with the text of: " + t, e);
  }
  return o;
};
function $q(e, t) {
  const r = t.getAttribute("for");
  if (!r)
    return null;
  const n = e.querySelector('[id="' + r + '"]');
  return n ? n.tagName.toLowerCase() : null;
}
const lm = (e, t) => "Found multiple elements with the text of: " + t, sm = We(Ot(sr, lm), sr.name, "query"), um = Ot(nt, lm), cm = $t(Q(nt, nt.name, "findAll")), dm = $t(We(um, nt.name, "find")), fm = Q(nt, nt.name, "getAll"), pm = We(um, nt.name, "get"), mm = Q(sr, sr.name, "queryAll"), Fl = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Pe(t[0]), ft("placeholder", ...t);
}, xq = (e, t) => "Found multiple elements with the placeholder text of: " + t, qq = (e, t) => "Unable to find an element with the placeholder text of: " + t, vm = Q(Fl, Fl.name, "queryAll"), [ym, bm, hm, gm, Em] = Se(Fl, xq, qq), jl = function(e, t, r) {
  let {
    selector: n = "*",
    exact: a = !0,
    collapseWhitespace: o,
    trim: i,
    ignore: s = q().defaultIgnore,
    normalizer: l
  } = r === void 0 ? {} : r;
  Pe(e);
  const u = a ? Ee : Lt, c = dt({
    collapseWhitespace: o,
    trim: i,
    normalizer: l
  });
  let d = [];
  return typeof e.matches == "function" && e.matches(n) && (d = [e]), [...d, ...Array.from(e.querySelectorAll(n))].filter((f) => !s || !f.matches(s)).filter((f) => u(gr(f), f, t, c));
}, Iq = (e, t) => "Found multiple elements with the text: " + t, Mq = function(e, t, r) {
  r === void 0 && (r = {});
  const {
    collapseWhitespace: n,
    trim: a,
    normalizer: o,
    selector: i
  } = r, l = dt({
    collapseWhitespace: n,
    trim: a,
    normalizer: o
  })(t.toString()), u = l !== t.toString(), c = (i ?? "*") !== "*";
  return "Unable to find an element with the text: " + (u ? l + " (normalized from '" + t + "')" : t) + (c ? ", which matches selector '" + i + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}, _m = Q(jl, jl.name, "queryAll"), [Rm, wm, Cm, Pm, Sm] = Se(jl, Iq, Mq), Ul = function(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: a,
    trim: o,
    normalizer: i
  } = r === void 0 ? {} : r;
  Pe(e);
  const s = n ? Ee : Lt, l = dt({
    collapseWhitespace: a,
    trim: o,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("input,textarea,select")).filter((u) => u.tagName === "SELECT" ? Array.from(u.options).filter((d) => d.selected).some((d) => s(gr(d), d, t, l)) : s(u.value, u, t, l));
}, Nq = (e, t) => "Found multiple elements with the display value: " + t + ".", Bq = (e, t) => "Unable to find an element with the display value: " + t + ".", Tm = Q(Ul, Ul.name, "queryAll"), [Am, Om, $m, xm, qm] = Se(Ul, Nq, Bq), kq = /^(img|input|area|.+-.+)$/i, Hl = function(e, t, r) {
  return r === void 0 && (r = {}), Pe(e), ft("alt", e, t, r).filter((n) => kq.test(n.tagName));
}, Dq = (e, t) => "Found multiple elements with the alt text: " + t, Lq = (e, t) => "Unable to find an element with the alt text: " + t, Im = Q(Hl, Hl.name, "queryAll"), [Mm, Nm, Bm, km, Dm] = Se(Hl, Dq, Lq), Fq = (e) => {
  var t;
  return e.tagName.toLowerCase() === "title" && ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === "svg";
}, Wl = function(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: a,
    trim: o,
    normalizer: i
  } = r === void 0 ? {} : r;
  Pe(e);
  const s = n ? Ee : Lt, l = dt({
    collapseWhitespace: a,
    trim: o,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("[title], svg > title")).filter((u) => s(u.getAttribute("title"), u, t, l) || Fq(u) && s(gr(u), u, t, l));
}, jq = (e, t) => "Found multiple elements with the title: " + t + ".", Uq = (e, t) => "Unable to find an element with the title: " + t + ".", Lm = Q(Wl, Wl.name, "queryAll"), [Fm, jm, Um, Hm, Wm] = Se(Wl, jq, Uq), Vl = function(e, t, r) {
  let {
    hidden: n = q().defaultHidden,
    name: a,
    description: o,
    queryFallbacks: i = !1,
    selected: s,
    busy: l,
    checked: u,
    pressed: c,
    current: d,
    level: f,
    expanded: v,
    value: {
      now: y,
      min: b,
      max: C,
      text: p
    } = {}
  } = r === void 0 ? {} : r;
  if (Pe(e), s !== void 0) {
    var E;
    if (((E = ae.get(t)) == null ? void 0 : E.props["aria-selected"]) === void 0)
      throw new Error('"aria-selected" is not supported on role "' + t + '".');
  }
  if (l !== void 0) {
    var P;
    if (((P = ae.get(t)) == null ? void 0 : P.props["aria-busy"]) === void 0)
      throw new Error('"aria-busy" is not supported on role "' + t + '".');
  }
  if (u !== void 0) {
    var R;
    if (((R = ae.get(t)) == null ? void 0 : R.props["aria-checked"]) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + t + '".');
  }
  if (c !== void 0) {
    var S;
    if (((S = ae.get(t)) == null ? void 0 : S.props["aria-pressed"]) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + t + '".');
  }
  if (d !== void 0) {
    var m;
    if (((m = ae.get(t)) == null ? void 0 : m.props["aria-current"]) === void 0)
      throw new Error('"aria-current" is not supported on role "' + t + '".');
  }
  if (f !== void 0 && t !== "heading")
    throw new Error('Role "' + t + '" cannot have "level" property.');
  if (y !== void 0) {
    var h;
    if (((h = ae.get(t)) == null ? void 0 : h.props["aria-valuenow"]) === void 0)
      throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
  }
  if (C !== void 0) {
    var g;
    if (((g = ae.get(t)) == null ? void 0 : g.props["aria-valuemax"]) === void 0)
      throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
  }
  if (b !== void 0) {
    var I;
    if (((I = ae.get(t)) == null ? void 0 : I.props["aria-valuemin"]) === void 0)
      throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
  }
  if (p !== void 0) {
    var j;
    if (((j = ae.get(t)) == null ? void 0 : j.props["aria-valuetext"]) === void 0)
      throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
  }
  if (v !== void 0) {
    var F;
    if (((F = ae.get(t)) == null ? void 0 : F.props["aria-expanded"]) === void 0)
      throw new Error('"aria-expanded" is not supported on role "' + t + '".');
  }
  const U = /* @__PURE__ */ new WeakMap();
  function w(A) {
    return U.has(A) || U.set(A, rm(A)), U.get(A);
  }
  return Array.from(e.querySelectorAll(
    // Only query elements that can be matched by the following filters
    Hq(t)
  )).filter((A) => {
    if (A.hasAttribute("role")) {
      const Z = A.getAttribute("role");
      if (i)
        return Z.split(" ").filter(Boolean).some((yi) => yi === t);
      const [Xe] = Z.split(" ");
      return Xe === t;
    }
    return Os(A).some((Z) => Z === t);
  }).filter((A) => {
    if (s !== void 0)
      return s === mq(A);
    if (l !== void 0)
      return l === vq(A);
    if (u !== void 0)
      return u === yq(A);
    if (c !== void 0)
      return c === bq(A);
    if (d !== void 0)
      return d === hq(A);
    if (v !== void 0)
      return v === gq(A);
    if (f !== void 0)
      return f === Eq(A);
    if (y !== void 0 || C !== void 0 || b !== void 0 || p !== void 0) {
      let H = !0;
      if (y !== void 0 && H && (H = y === _q(A)), C !== void 0 && H && (H = C === Rq(A)), b !== void 0 && H && (H = b === wq(A)), p !== void 0) {
        var M;
        H && (H = Ee((M = Cq(A)) != null ? M : null, A, p, (Z) => Z));
      }
      return H;
    }
    return !0;
  }).filter((A) => a === void 0 ? !0 : Ee(rs(A, {
    computedStyleSupportsPseudoElements: q().computedStyleSupportsPseudoElements
  }), A, a, (M) => M)).filter((A) => o === void 0 ? !0 : Ee(_f(A, {
    computedStyleSupportsPseudoElements: q().computedStyleSupportsPseudoElements
  }), A, o, (M) => M)).filter((A) => n === !1 ? pi(A, {
    isSubtreeInaccessible: w
  }) === !1 : !0);
};
function Hq(e) {
  var t;
  const r = '*[role~="' + e + '"]', n = (t = Up.get(e)) != null ? t : /* @__PURE__ */ new Set(), a = new Set(Array.from(n).map((o) => {
    let {
      name: i
    } = o;
    return i;
  }));
  return [r].concat(Array.from(a)).join(",");
}
const Vm = (e) => {
  let t = "";
  return e === void 0 ? t = "" : typeof e == "string" ? t = ' and name "' + e + '"' : t = " and name `" + e + "`", t;
}, Wq = function(e, t, r) {
  let {
    name: n
  } = r === void 0 ? {} : r;
  return 'Found multiple elements with the role "' + t + '"' + Vm(n);
}, Vq = function(e, t, r) {
  let {
    hidden: n = q().defaultHidden,
    name: a,
    description: o
  } = r === void 0 ? {} : r;
  if (q()._disableExpensiveErrorDiagnostics)
    return 'Unable to find role="' + t + '"' + Vm(a);
  let i = "";
  Array.from(e.children).forEach((c) => {
    i += am(c, {
      hidden: n,
      includeDescription: o !== void 0
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
  a === void 0 ? l = "" : typeof a == "string" ? l = ' and name "' + a + '"' : l = " and name `" + a + "`";
  let u = "";
  return o === void 0 ? u = "" : typeof o == "string" ? u = ' and description "' + o + '"' : u = " and description `" + o + "`", (`
Unable to find an ` + (n === !1 ? "accessible " : "") + 'element with the role "' + t + '"' + l + u + `

` + s).trim();
}, Gm = Q(Vl, Vl.name, "queryAll"), [zm, Ym, Km, Xm, Qm] = Se(Vl, Wq, Vq), qs = () => q().testIdAttribute, Gl = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Pe(t[0]), ft(qs(), ...t);
}, Gq = (e, t) => "Found multiple elements by: [" + qs() + '="' + t + '"]', zq = (e, t) => "Unable to find an element by: [" + qs() + '="' + t + '"]', Jm = Q(Gl, Gl.name, "queryAll"), [Zm, ev, tv, rv, nv] = Se(Gl, Gq, zq);
var bn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  queryAllByLabelText: mm,
  queryByLabelText: sm,
  getAllByLabelText: fm,
  getByLabelText: pm,
  findAllByLabelText: cm,
  findByLabelText: dm,
  queryByPlaceholderText: ym,
  queryAllByPlaceholderText: vm,
  getByPlaceholderText: hm,
  getAllByPlaceholderText: bm,
  findAllByPlaceholderText: gm,
  findByPlaceholderText: Em,
  queryByText: Rm,
  queryAllByText: _m,
  getByText: Cm,
  getAllByText: wm,
  findAllByText: Pm,
  findByText: Sm,
  queryByDisplayValue: Am,
  queryAllByDisplayValue: Tm,
  getByDisplayValue: $m,
  getAllByDisplayValue: Om,
  findAllByDisplayValue: xm,
  findByDisplayValue: qm,
  queryByAltText: Mm,
  queryAllByAltText: Im,
  getByAltText: Bm,
  getAllByAltText: Nm,
  findAllByAltText: km,
  findByAltText: Dm,
  queryByTitle: Fm,
  queryAllByTitle: Lm,
  getByTitle: Um,
  getAllByTitle: jm,
  findAllByTitle: Hm,
  findByTitle: Wm,
  queryByRole: zm,
  queryAllByRole: Gm,
  getAllByRole: Ym,
  getByRole: Km,
  findAllByRole: Xm,
  findByRole: Qm,
  queryByTestId: Zm,
  queryAllByTestId: Jm,
  getByTestId: tv,
  getAllByTestId: ev,
  findAllByTestId: rv,
  findByTestId: nv
});
function zl(e, t, r) {
  return t === void 0 && (t = bn), r === void 0 && (r = {}), Object.keys(t).reduce((n, a) => {
    const o = t[a];
    return n[a] = o.bind(null, e), n;
  }, r);
}
const av = (e) => !e || Array.isArray(e) && !e.length;
function Xc(e) {
  if (av(e))
    throw new Error("The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.");
}
async function Yq(e, t) {
  const r = new Error("Timed out in waitForElementToBeRemoved.");
  if (typeof e != "function") {
    Xc(e);
    const a = (Array.isArray(e) ? e : [e]).map((o) => {
      let i = o.parentElement;
      if (i === null)
        return () => null;
      for (; i.parentElement; )
        i = i.parentElement;
      return () => i.contains(o) ? o : null;
    });
    e = () => a.map((o) => o()).filter(Boolean);
  }
  return Xc(e()), $s(() => {
    let n;
    try {
      n = e();
    } catch (a) {
      if (a.name === "TestingLibraryElementError")
        return;
      throw a;
    }
    if (!av(n))
      throw r;
  }, t);
}
const Qc = {
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
}, Jc = {
  doubleClick: "dblClick"
};
function ur(e, t) {
  return q().eventWrapper(() => {
    if (!t)
      throw new Error("Unable to fire an event - please provide an event object.");
    if (!e)
      throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
    return e.dispatchEvent(t);
  });
}
function Gr(e, t, r, n) {
  let {
    EventType: a = "Event",
    defaultInit: o = {}
  } = n === void 0 ? {} : n;
  if (!t)
    throw new Error('Unable to fire a "' + e + '" event - please provide a DOM element.');
  const i = {
    ...o,
    ...r
  }, {
    target: {
      value: s,
      files: l,
      ...u
    } = {}
  } = i;
  s !== void 0 && Kq(t, s), l !== void 0 && Object.defineProperty(t, "files", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: l
  }), Object.assign(t, u);
  const c = Xp(t), d = c[a] || c.Event;
  let f;
  if (typeof d == "function")
    f = new d(e, i);
  else {
    f = c.document.createEvent(a);
    const {
      bubbles: y,
      cancelable: b,
      detail: C,
      ...p
    } = i;
    f.initEvent(e, y, b, C), Object.keys(p).forEach((E) => {
      f[E] = p[E];
    });
  }
  return ["dataTransfer", "clipboardData"].forEach((y) => {
    const b = i[y];
    typeof b == "object" && (typeof c.DataTransfer == "function" ? Object.defineProperty(f, y, {
      value: Object.getOwnPropertyNames(b).reduce((C, p) => (Object.defineProperty(C, p, {
        value: b[p]
      }), C), new c.DataTransfer())
    }) : Object.defineProperty(f, y, {
      value: b
    }));
  }), f;
}
Object.keys(Qc).forEach((e) => {
  const {
    EventType: t,
    defaultInit: r
  } = Qc[e], n = e.toLowerCase();
  Gr[e] = (a, o) => Gr(n, a, o, {
    EventType: t,
    defaultInit: r
  }), ur[e] = (a, o) => ur(a, Gr[e](a, o));
});
function Kq(e, t) {
  const {
    set: r
  } = Object.getOwnPropertyDescriptor(e, "value") || {}, n = Object.getPrototypeOf(e), {
    set: a
  } = Object.getOwnPropertyDescriptor(n, "value") || {};
  if (a && r !== a)
    a.call(e, t);
  else if (r)
    r.call(e, t);
  else
    throw new Error("The given element does not have a value setter");
}
Object.keys(Jc).forEach((e) => {
  const t = Jc[e];
  ur[e] = function() {
    return ur[t](...arguments);
  };
});
function Xq(e) {
  return e.replace(/[ \t]*[\n][ \t]*/g, `
`);
}
function Qq(e) {
  return j1.compressToEncodedURIComponent(Xq(e));
}
function Jq(e) {
  return "https://testing-playground.com/#markup=" + Qq(e);
}
const Zq = (e, t, r) => Array.isArray(e) ? e.forEach((n) => Dl(n, t, r)) : Dl(e, t, r), eI = function(e) {
  if (e === void 0 && (e = Ts().body), !e || !("innerHTML" in e)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  if (!e.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const t = Jq(e.innerHTML);
  return console.log(`Open this URL in your browser

` + t), t;
}, Zc = {
  debug: Zq,
  logTestingPlaygroundURL: eI
}, tI = typeof document < "u" && document.body ? zl(document.body, bn, Zc) : Object.keys(bn).reduce((e, t) => (e[t] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, e), Zc), rI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buildQueries: Se,
  configure: sq,
  createEvent: Gr,
  findAllByAltText: km,
  findAllByDisplayValue: xm,
  findAllByLabelText: cm,
  findAllByPlaceholderText: gm,
  findAllByRole: Xm,
  findAllByTestId: rv,
  findAllByText: Pm,
  findAllByTitle: Hm,
  findByAltText: Dm,
  findByDisplayValue: qm,
  findByLabelText: dm,
  findByPlaceholderText: Em,
  findByRole: Qm,
  findByTestId: nv,
  findByText: Sm,
  findByTitle: Wm,
  fireEvent: ur,
  getAllByAltText: Nm,
  getAllByDisplayValue: Om,
  getAllByLabelText: fm,
  getAllByPlaceholderText: bm,
  getAllByRole: Ym,
  getAllByTestId: ev,
  getAllByText: wm,
  getAllByTitle: jm,
  getByAltText: Bm,
  getByDisplayValue: $m,
  getByLabelText: pm,
  getByPlaceholderText: hm,
  getByRole: Km,
  getByTestId: tv,
  getByText: Cm,
  getByTitle: Um,
  getConfig: q,
  getDefaultNormalizer: As,
  getElementError: mi,
  getMultipleElementsFoundError: vi,
  getNodeText: gr,
  getQueriesForElement: zl,
  getRoles: nm,
  getSuggestedQuery: yn,
  isInaccessible: pi,
  logDOM: Dl,
  logRoles: pq,
  makeFindQuery: $t,
  makeGetAllQuery: xs,
  makeSingleQuery: Ot,
  prettyDOM: lr,
  prettyFormat: qb,
  queries: bn,
  queryAllByAltText: Im,
  queryAllByAttribute: ft,
  queryAllByDisplayValue: Tm,
  queryAllByLabelText: mm,
  queryAllByPlaceholderText: vm,
  queryAllByRole: Gm,
  queryAllByTestId: Jm,
  queryAllByText: _m,
  queryAllByTitle: Lm,
  queryByAltText: Mm,
  queryByAttribute: om,
  queryByDisplayValue: Am,
  queryByLabelText: sm,
  queryByPlaceholderText: ym,
  queryByRole: zm,
  queryByTestId: Zm,
  queryByText: Rm,
  queryByTitle: Fm,
  queryHelpers: Tq,
  screen: tI,
  waitFor: $s,
  waitForElementToBeRemoved: Yq,
  within: zl,
  wrapAllByQueryWithSuggestion: Q,
  wrapSingleQueryWithSuggestion: We
}, Symbol.toStringTag, { value: "Module" }));
function O(e, t, r) {
  return e.namespaceURI && e.namespaceURI !== "http://www.w3.org/1999/xhtml" || (t = Array.isArray(t) ? t : [
    t
  ], !t.includes(e.tagName.toLowerCase())) ? !1 : r ? Object.entries(r).every(([n, a]) => e[n] === a) : !0;
}
function re(e) {
  var t;
  if (nI(e) && e.defaultView)
    return e.defaultView;
  if (!((t = e.ownerDocument) === null || t === void 0) && t.defaultView)
    return e.ownerDocument.defaultView;
  throw new Error(`Could not determine window of node. Node was ${aI(e)}`);
}
function nI(e) {
  return e.nodeType === 9;
}
function aI(e) {
  return typeof e == "function" ? `function ${e.name}` : e === null ? "null" : String(e);
}
function ov(e, t) {
  return new Promise((r, n) => {
    const a = new t();
    a.onerror = n, a.onabort = n, a.onload = () => {
      r(String(a.result));
    }, a.readAsText(e);
  });
}
function Is(e, t) {
  const r = {
    ...t,
    length: t.length,
    item: (n) => r[n],
    [Symbol.iterator]: function* () {
      for (let a = 0; a < r.length; a++)
        yield r[a];
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
class iv {
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
class oI extends Array {
  add(...t) {
    const r = new iv(t[0], t[1]);
    return this.push(r), r;
  }
  clear() {
    this.splice(0, this.length);
  }
  remove(t) {
    this.splice(t, 1);
  }
}
function $r(e, t) {
  const [r, n] = e.split("/"), a = !n || n === "*";
  return (o) => t ? o.type === (a ? r : e) : a ? o.type.startsWith(`${r}/`) : o.type === r;
}
function iI(e) {
  return new class {
    getData(r) {
      var n;
      const a = (n = this.items.find($r(r, !0))) !== null && n !== void 0 ? n : this.items.find($r(r, !1));
      let o = "";
      return a == null || a.getAsString((i) => {
        o = i;
      }), o;
    }
    setData(r, n) {
      const a = this.items.findIndex($r(r, !0)), o = new iv(n, r);
      a >= 0 ? this.items.splice(a, 1, o) : this.items.push(o);
    }
    clearData(r) {
      if (r) {
        const n = this.items.findIndex($r(r, !0));
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
      Be(this, "dropEffect", "none"), Be(this, "effectAllowed", "uninitialized"), Be(this, "items", new oI()), Be(this, "files", Is(e, []));
    }
  }();
}
function Ms(e, t = []) {
  const r = typeof e.DataTransfer > "u" ? iI(e) : (
    /* istanbul ignore next */
    new e.DataTransfer()
  );
  return Object.defineProperty(r, "files", {
    get: () => Is(e, t)
  }), r;
}
async function lI(e, t) {
  return t.kind === "file" ? t.getAsFile() : new e.Blob([
    await new Promise((r) => t.getAsString(r))
  ], {
    type: t.type
  });
}
function lv(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function sv(e, ...t) {
  const r = Object.fromEntries(t.map((n) => [
    typeof n == "string" ? "text/plain" : n.type,
    Promise.resolve(n)
  ]));
  return typeof e.ClipboardItem < "u" ? new e.ClipboardItem(r) : new class {
    get types() {
      return Array.from(Object.keys(this.data));
    }
    async getType(a) {
      const o = await this.data[a];
      if (!o)
        throw new Error(`${a} is not one of the available MIME types on this item.`);
      return o instanceof e.Blob ? o : new e.Blob([
        o
      ], {
        type: a
      });
    }
    constructor(a) {
      lv(this, "data", void 0), this.data = a;
    }
  }(r);
}
const xt = Symbol("Manage ClipboardSub");
function ed(e, t) {
  return Object.assign(new class extends e.EventTarget {
    async read() {
      return Array.from(this.items);
    }
    async readText() {
      let n = "";
      for (const a of this.items) {
        const o = a.types.includes("text/plain") ? "text/plain" : a.types.find((i) => i.startsWith("text/"));
        o && (n += await a.getType(o).then((i) => ov(i, e.FileReader)));
      }
      return n;
    }
    async write(n) {
      this.items = n;
    }
    async writeText(n) {
      this.items = [
        sv(e, n)
      ];
    }
    constructor(...n) {
      super(...n), lv(this, "items", []);
    }
  }(), {
    [xt]: t
  });
}
function Ns(e) {
  return !!(e != null && e[xt]);
}
function sI(e) {
  if (Ns(e.navigator.clipboard))
    return e.navigator.clipboard[xt];
  const t = Object.getOwnPropertyDescriptor(e.navigator, "clipboard");
  let r;
  const n = {
    resetClipboardStub: () => {
      r = ed(e, n);
    },
    detachClipboardStub: () => {
      t ? Object.defineProperty(e.navigator, "clipboard", t) : Object.defineProperty(e.navigator, "clipboard", {
        value: void 0,
        configurable: !0
      });
    }
  };
  return r = ed(e, n), Object.defineProperty(e.navigator, "clipboard", {
    get: () => r,
    configurable: !0
  }), r[xt];
}
function uI(e) {
  Ns(e.navigator.clipboard) && e.navigator.clipboard[xt].resetClipboardStub();
}
function cI(e) {
  Ns(e.navigator.clipboard) && e.navigator.clipboard[xt].detachClipboardStub();
}
async function dI(e) {
  const t = e.defaultView, r = t == null ? void 0 : t.navigator.clipboard, n = r && await r.read();
  if (!n)
    throw new Error("The Clipboard API is unavailable.");
  const a = Ms(t);
  for (const o of n)
    for (const i of o.types)
      a.setData(i, await o.getType(i).then((s) => ov(s, t.FileReader)));
  return a;
}
async function uv(e, t) {
  const r = re(e), n = r.navigator.clipboard, a = [];
  for (let i = 0; i < t.items.length; i++) {
    const s = t.items[i], l = await lI(r, s);
    a.push(sv(r, l));
  }
  if (!(n && await n.write(a).then(
    () => !0,
    // Can happen with other implementations that e.g. require permissions
    /* istanbul ignore next */
    () => !1
  )))
    throw new Error("The Clipboard API is unavailable.");
}
const hn = globalThis;
typeof hn.afterEach == "function" && hn.afterEach(() => uI(globalThis.window));
typeof hn.afterAll == "function" && hn.afterAll(() => cI(globalThis.window));
const cv = [
  "input:not([type=hidden]):not([disabled])",
  "button:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[contenteditable=""]',
  '[contenteditable="true"]',
  "a[href]",
  "[tabindex]:not([disabled])"
].join(", ");
function Bs(e) {
  return e.matches(cv);
}
function fI(e) {
  return new e.constructor(e.type, e);
}
function Re(e) {
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
function _r(e) {
  const t = e.activeElement;
  return t != null && t.shadowRoot ? _r(t.shadowRoot) : Re(t) ? e.ownerDocument ? (
    /* istanbul ignore next */
    e.ownerDocument.body
  ) : e.body : t;
}
function il(e) {
  var t;
  return (t = _r(e)) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  );
}
function pI(e, t) {
  let r = e;
  do {
    if (t(r))
      return r;
    r = r.parentElement;
  } while (r && r !== e.ownerDocument.body);
}
function at(e) {
  return e.hasAttribute("contenteditable") && (e.getAttribute("contenteditable") == "true" || e.getAttribute("contenteditable") == "");
}
function cr(e) {
  const t = mI(e);
  return t && (t.closest('[contenteditable=""]') || t.closest('[contenteditable="true"]'));
}
function mI(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
var dv = /* @__PURE__ */ function(e) {
  return e.button = "button", e.color = "color", e.file = "file", e.image = "image", e.reset = "reset", e.submit = "submit", e.checkbox = "checkbox", e.radio = "radio", e;
}(dv || {});
function fv(e) {
  return O(e, "button") || O(e, "input") && e.type in dv;
}
function qt(e) {
  return mv(e) && !e.readOnly || at(e);
}
var pv = /* @__PURE__ */ function(e) {
  return e.text = "text", e.date = "date", e["datetime-local"] = "datetime-local", e.email = "email", e.month = "month", e.number = "number", e.password = "password", e.search = "search", e.tel = "tel", e.time = "time", e.url = "url", e.week = "week", e;
}(pv || {});
function mv(e) {
  return O(e, "textarea") || O(e, "input") && e.type in pv;
}
function fe(e) {
  return vv(e) && mv(e);
}
function vI(e) {
  return vv(e) && fv(e);
}
function vv(e) {
  return e.nodeType === 1;
}
function yI(e) {
  const t = e.ownerDocument.getSelection();
  if (t != null && t.focusNode && fe(e)) {
    const n = cr(t.focusNode);
    if (n) {
      if (!t.isCollapsed) {
        var r;
        const a = ((r = n.firstChild) === null || r === void 0 ? void 0 : r.nodeType) === 3 ? n.firstChild : n;
        t.setBaseAndExtent(a, 0, a, 0);
      }
    } else
      t.setBaseAndExtent(e, 0, e, 0);
  }
}
function It(e, t) {
  return q().eventWrapper(e);
}
function Ve(e) {
  const t = pI(e, Bs), r = _r(e.ownerDocument);
  (t ?? e.ownerDocument.body) !== r && (It(t ? () => t.focus() : () => r == null ? void 0 : r.blur()), yI(t ?? e.ownerDocument.body));
}
function bI(e) {
  !Bs(e) || !(_r(e.ownerDocument) === e) || It(() => e.blur());
}
const Ge = {};
Ge.click = (e, t, r) => {
  const n = t.closest("button,input,label,select,textarea"), a = n && O(n, "label") && n.control;
  if (a && a !== t)
    return () => {
      Bs(a) && (Ve(a), r.dispatchEvent(a, fI(e)));
    };
  if (O(t, "input", {
    type: "file"
  }))
    return () => {
      bI(t), t.dispatchEvent(new (re(t)).Event("fileDialog")), Ve(t);
    };
};
const Mt = Symbol("Displayed value in UI"), ge = Symbol("Displayed selection in UI"), gn = Symbol("Initial value to compare on blur");
function hI(e) {
  return typeof e == "object" && Mt in e;
}
function gI(e) {
  return !!e && typeof e == "object" && ge in e;
}
function EI(e, t) {
  e[gn] === void 0 && (e[gn] = e.value), e[Mt] = t, e.value = Object.assign(new String(t), {
    [Mt]: !0
  });
}
function pe(e) {
  return e[Mt] === void 0 ? e.value : String(e[Mt]);
}
function ks(e) {
  e[Mt] = void 0;
}
function yv(e) {
  e[gn] = void 0;
}
function _I(e) {
  return e[gn];
}
function RI(e, t) {
  e[ge] = t;
}
function Ft(e, { focusOffset: t, anchorOffset: r = t }, n = "replace") {
  const a = pe(e).length, o = (d) => Math.max(0, Math.min(a, d)), i = n === "replace" || e[ge] === void 0 ? o(r) : e[ge].anchorOffset, s = o(t), l = Math.min(i, s), u = Math.max(i, s);
  if (e[ge] = {
    anchorOffset: i,
    focusOffset: s
  }, e.selectionStart === l && e.selectionEnd === u)
    return;
  const c = Object.assign(new Number(l), {
    [ge]: !0
  });
  try {
    e.setSelectionRange(c, u);
  } catch {
  }
}
function dr(e) {
  var t, r, n;
  const a = (n = e[ge]) !== null && n !== void 0 ? n : {
    anchorOffset: (t = e.selectionStart) !== null && t !== void 0 ? t : 0,
    focusOffset: (r = e.selectionEnd) !== null && r !== void 0 ? r : 0
  };
  return {
    ...a,
    startOffset: Math.min(a.anchorOffset, a.focusOffset),
    endOffset: Math.max(a.anchorOffset, a.focusOffset)
  };
}
function wI(e) {
  return !!e[ge];
}
function zr(e) {
  e[ge] = void 0;
}
const En = globalThis.parseInt;
function CI(e) {
  const t = e.replace(/\D/g, "");
  if (t.length < 2)
    return e;
  const r = En(t[0], 10), n = En(t[1], 10);
  if (r >= 3 || r === 2 && n >= 4) {
    let a;
    return r >= 3 ? a = 1 : a = 2, td(t, a);
  }
  return e.length === 2 ? e : td(t, 2);
}
function td(e, t) {
  const r = e.slice(0, t), n = Math.min(En(r, 10), 23), a = e.slice(t), o = En(a, 10), i = Math.min(o, 59);
  return `${n.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`;
}
function bv(e, t) {
  const r = e.cloneNode();
  return r.value = t, r.value === t;
}
var hv = /* @__PURE__ */ function(e) {
  return e.email = "email", e.password = "password", e.search = "search", e.telephone = "telephone", e.text = "text", e.url = "url", e;
}(hv || {});
function PI(e) {
  var t;
  const r = (t = e.getAttribute("maxlength")) !== null && t !== void 0 ? t : "";
  return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function SI(e) {
  return O(e, "textarea") || O(e, "input") && e.type in hv;
}
function gv(e, t, r, n) {
  if (Yr(e) && t + r >= 0 && t + r <= e.nodeValue.length)
    return {
      node: e,
      offset: t + r
    };
  const a = rd(e, t, r);
  if (a) {
    if (Yr(a))
      return {
        node: a,
        offset: r > 0 ? Math.min(1, a.nodeValue.length) : Math.max(a.nodeValue.length - 1, 0)
      };
    if (O(a, "br")) {
      const o = rd(a, void 0, r);
      return o ? Yr(o) ? {
        node: o,
        offset: r > 0 ? 0 : o.nodeValue.length
      } : r < 0 && O(o, "br") ? {
        node: a.parentNode,
        offset: xr(a)
      } : {
        node: o.parentNode,
        offset: xr(o) + (r > 0 ? 0 : 1)
      } : r < 0 && n === "deleteContentBackward" ? {
        node: a.parentNode,
        offset: xr(a)
      } : void 0;
    } else
      return {
        node: a.parentNode,
        offset: xr(a) + (r > 0 ? 1 : 0)
      };
  }
}
function rd(e, t, r) {
  const n = Number(t) + (r < 0 ? -1 : 0);
  return t !== void 0 && Ds(e) && n >= 0 && n < e.children.length && (e = e.children[n]), AI(e, r === 1 ? "next" : "previous", TI);
}
function TI(e) {
  if (Yr(e))
    return !0;
  if (Ds(e)) {
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
function xr(e) {
  let t = 0;
  for (; e.previousSibling; )
    t++, e = e.previousSibling;
  return t;
}
function Ds(e) {
  return e.nodeType === 1;
}
function Yr(e) {
  return e.nodeType === 3;
}
function AI(e, t, r) {
  for (; ; ) {
    var n;
    const a = e[`${t}Sibling`];
    if (a) {
      if (e = OI(a, t === "next" ? "first" : "last"), r(e))
        return e;
    } else if (e.parentNode && (!Ds(e.parentNode) || !at(e.parentNode) && e.parentNode !== ((n = e.ownerDocument) === null || n === void 0 ? void 0 : n.body)))
      e = e.parentNode;
    else
      break;
  }
}
function OI(e, t) {
  for (; e.hasChildNodes(); )
    e = e[`${t}Child`];
  return e;
}
const fr = Symbol("Track programmatic changes for React workaround");
function $I(e) {
  return Object.getOwnPropertyNames(e).some((t) => t.startsWith("__react")) && re(e).REACT_VERSION === 17;
}
function xI(e) {
  $I(e) && (e[fr] = {
    previousValue: String(e.value),
    tracked: []
  });
}
function qI(e, t) {
  var r, n;
  (n = e[fr]) === null || n === void 0 || (r = n.tracked) === null || r === void 0 || r.push(t), e[fr] || (ks(e), Ft(e, {
    focusOffset: t.length
  }));
}
function II(e, t) {
  var r;
  const n = e[fr];
  if (e[fr] = void 0, !(!(n == null || (r = n.tracked) === null || r === void 0) && r.length))
    return;
  const a = n.tracked.length === 2 && n.tracked[0] === n.previousValue && n.tracked[1] === e.value;
  a || ks(e), wI(e) && Ft(e, {
    focusOffset: a ? t : e.value.length
  });
}
function Ev(e) {
  const t = MI(e);
  if (t && fe(t))
    return {
      type: "input",
      selection: dr(t)
    };
  const r = t == null ? void 0 : t.ownerDocument.getSelection();
  return {
    type: cr(e) && (r == null ? void 0 : r.anchorNode) && cr(r.anchorNode) ? "contenteditable" : "default",
    selection: r
  };
}
function MI(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function NI(e) {
  const t = Ev(e);
  if (t.type === "input")
    return t.selection;
  if (t.type === "contenteditable") {
    var r;
    return (r = t.selection) === null || r === void 0 ? void 0 : r.getRangeAt(0);
  }
}
function ot({ focusNode: e, focusOffset: t, anchorNode: r = e, anchorOffset: n = t }) {
  var a, o;
  if (Ev(e).type === "input")
    return Ft(e, {
      anchorOffset: n,
      focusOffset: t
    });
  (o = r.ownerDocument) === null || o === void 0 || (a = o.getSelection()) === null || a === void 0 || a.setBaseAndExtent(r, n, e, t);
}
function _v(e) {
  return O(e, "input") && [
    "date",
    "time"
  ].includes(e.type);
}
function Nt(e, t, r, n = "insertText") {
  const a = NI(t);
  a && (!_v(t) && !e.dispatchUIEvent(t, "beforeinput", {
    inputType: n,
    data: r
  }) || ("startContainer" in a ? BI(e, t, a, r, n) : kI(e, t, a, r, n)));
}
function BI(e, t, r, n, a) {
  let o = !1;
  if (!r.collapsed)
    o = !0, r.deleteContents();
  else if ([
    "deleteContentBackward",
    "deleteContentForward"
  ].includes(a)) {
    const i = gv(r.startContainer, r.startOffset, a === "deleteContentBackward" ? -1 : 1, a);
    if (i) {
      o = !0;
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
  (o || n) && e.dispatchUIEvent(t, "input", {
    inputType: a
  });
}
function kI(e, t, r, n, a) {
  let o = n;
  if (SI(t)) {
    const u = PI(t);
    if (u !== void 0 && n.length > 0) {
      const c = u - t.value.length;
      if (c > 0)
        o = n.substring(0, c);
      else
        return;
    }
  }
  const { newValue: i, newOffset: s, oldValue: l } = DI(o, t, r, a);
  i === l && s === r.startOffset && s === r.endOffset || O(t, "input", {
    type: "number"
  }) && !LI(i) || (EI(t, i), ot({
    focusNode: t,
    anchorOffset: s,
    focusOffset: s
  }), _v(t) ? bv(t, i) && (nd(e, t, s, {}), e.dispatchUIEvent(t, "change"), yv(t)) : nd(e, t, s, {
    data: n,
    inputType: a
  }));
}
function DI(e, t, { startOffset: r, endOffset: n }, a) {
  const o = pe(t), i = Math.max(0, r === n && a === "deleteContentBackward" ? r - 1 : r), s = o.substring(0, i), l = Math.min(o.length, r === n && a === "deleteContentForward" ? r + 1 : n), u = o.substring(l, o.length);
  let c = `${s}${e}${u}`, d = i + e.length;
  if (O(t, "input", {
    type: "time"
  })) {
    const f = CI(c);
    f !== "" && bv(t, f) && (c = f, d = f.length);
  }
  return {
    oldValue: o,
    newValue: c,
    newOffset: d
  };
}
function nd(e, t, r, n) {
  e.dispatchUIEvent(t, "input", n), II(t, r);
}
function LI(e) {
  var t, r;
  const n = e.split("e", 2);
  return !(/[^\d.\-e]/.test(e) || Number((t = e.match(/-/g)) === null || t === void 0 ? void 0 : t.length) > 2 || Number((r = e.match(/\./g)) === null || r === void 0 ? void 0 : r.length) > 1 || n[1] && !/^-?\d*$/.test(n[1]));
}
Ge.cut = (e, t, r) => () => {
  qt(t) && Nt(r, t, "", "deleteByCut");
};
function FI(e) {
  return e ? at(e) ? e.textContent : pe(e) : null;
}
function jI(e) {
  const t = re(e);
  for (let r = e; r != null && r.ownerDocument; r = r.parentElement) {
    const { display: n, visibility: a } = t.getComputedStyle(r);
    if (n === "none" || a === "hidden")
      return !1;
  }
  return !0;
}
function UI(e, t) {
  const r = e.ownerDocument, n = r.querySelectorAll(cv), a = Array.from(n).filter((l) => l === e || !(Number(l.getAttribute("tabindex")) < 0 || Re(l)));
  Number(e.getAttribute("tabindex")) >= 0 && a.sort((l, u) => {
    const c = Number(l.getAttribute("tabindex")), d = Number(u.getAttribute("tabindex"));
    return c === d ? 0 : c === 0 ? 1 : d === 0 ? -1 : c - d;
  });
  const o = {};
  let i = [
    r.body
  ];
  const s = O(e, "input", {
    type: "radio"
  }) ? e.name : void 0;
  a.forEach((l) => {
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
        })), i.push(u), o[u.name] = u;
        return;
      }
      if (typeof o[u.name] < "u")
        return;
    }
    i.push(u);
  });
  for (let l = i.findIndex((u) => u === e); ; )
    if (l += t ? -1 : 1, l === i.length ? l = 0 : l === -1 && (l = i.length - 1), i[l] === e || i[l] === r.body || jI(i[l]))
      return i[l];
}
function ad(e, t) {
  if (fe(e)) {
    const r = dr(e);
    ot({
      focusNode: e,
      focusOffset: r.startOffset === r.endOffset ? r.focusOffset + t : t < 0 ? r.startOffset : r.endOffset
    });
  } else {
    const r = e.ownerDocument.getSelection();
    if (!(r != null && r.focusNode))
      return;
    if (r.isCollapsed) {
      const n = gv(r.focusNode, r.focusOffset, t);
      n && ot({
        focusNode: n.node,
        focusOffset: n.offset
      });
    } else
      r[t < 0 ? "collapseToStart" : "collapseToEnd"]();
  }
}
function Rv(e) {
  if (fe(e))
    return ot({
      focusNode: e,
      anchorOffset: 0,
      focusOffset: pe(e).length
    });
  var t;
  const r = (t = cr(e)) !== null && t !== void 0 ? t : e.ownerDocument.body;
  ot({
    focusNode: r,
    anchorOffset: 0,
    focusOffset: r.childNodes.length
  });
}
function HI(e) {
  if (fe(e))
    return dr(e).startOffset === 0 && dr(e).endOffset === pe(e).length;
  var t;
  const r = (t = cr(e)) !== null && t !== void 0 ? t : e.ownerDocument.body, n = e.ownerDocument.getSelection();
  return (n == null ? void 0 : n.anchorNode) === r && n.focusNode === r && n.anchorOffset === 0 && n.focusOffset === r.childNodes.length;
}
function Gt(e, t, r) {
  var n;
  if (fe(e))
    return ot({
      focusNode: e,
      anchorOffset: t,
      focusOffset: r
    });
  if (at(e) && ((n = e.firstChild) === null || n === void 0 ? void 0 : n.nodeType) === 3)
    return ot({
      focusNode: e.firstChild,
      anchorOffset: t,
      focusOffset: r
    });
  throw new Error("Not implemented. The result of this interaction is unreliable.");
}
function qr(e, t, r) {
  const n = re(t), a = Array.from(t.ownerDocument.querySelectorAll(t.name ? `input[type="radio"][name="${n.CSS.escape(t.name)}"]` : 'input[type="radio"][name=""], input[type="radio"]:not([name])'));
  for (let o = a.findIndex((i) => i === t) + r; ; o += r) {
    if (a[o] || (o = r > 0 ? 0 : a.length - 1), a[o] === t)
      return;
    if (!Re(a[o])) {
      Ve(a[o]), e.dispatchUIEvent(a[o], "click");
      return;
    }
  }
}
Ge.keydown = (e, t, r) => {
  var n, a;
  return (a = (n = od[e.key]) === null || n === void 0 ? void 0 : n.call(od, e, t, r)) !== null && a !== void 0 ? a : WI(e, t, r);
};
const od = {
  ArrowDown: (e, t, r) => {
    if (O(t, "input", {
      type: "radio"
    }))
      return () => qr(r, t, 1);
  },
  ArrowLeft: (e, t, r) => O(t, "input", {
    type: "radio"
  }) ? () => qr(r, t, -1) : () => ad(t, -1),
  ArrowRight: (e, t, r) => O(t, "input", {
    type: "radio"
  }) ? () => qr(r, t, 1) : () => ad(t, 1),
  ArrowUp: (e, t, r) => {
    if (O(t, "input", {
      type: "radio"
    }))
      return () => qr(r, t, -1);
  },
  Backspace: (e, t, r) => {
    if (qt(t))
      return () => {
        Nt(r, t, "", "deleteContentBackward");
      };
  },
  Delete: (e, t, r) => {
    if (qt(t))
      return () => {
        Nt(r, t, "", "deleteContentForward");
      };
  },
  End: (e, t) => {
    if (O(t, [
      "input",
      "textarea"
    ]) || at(t))
      return () => {
        var r, n;
        const a = (n = (r = FI(t)) === null || r === void 0 ? void 0 : r.length) !== null && n !== void 0 ? n : (
          /* istanbul ignore next */
          0
        );
        Gt(t, a, a);
      };
  },
  Home: (e, t) => {
    if (O(t, [
      "input",
      "textarea"
    ]) || at(t))
      return () => {
        Gt(t, 0, 0);
      };
  },
  PageDown: (e, t) => {
    if (O(t, [
      "input"
    ]))
      return () => {
        const r = pe(t).length;
        Gt(t, r, r);
      };
  },
  PageUp: (e, t) => {
    if (O(t, [
      "input"
    ]))
      return () => {
        Gt(t, 0, 0);
      };
  },
  Tab: (e, t, r) => () => {
    const n = UI(t, r.system.keyboard.modifiers.Shift);
    Ve(n), fe(n) && Ft(n, {
      anchorOffset: 0,
      focusOffset: n.value.length
    });
  }
}, WI = (e, t, r) => {
  if (e.code === "KeyA" && r.system.keyboard.modifiers.Control)
    return () => Rv(t);
};
Ge.keypress = (e, t, r) => {
  if (e.key === "Enter") {
    if (O(t, "button") || O(t, "input") && VI.includes(t.type) || O(t, "a") && t.href)
      return () => {
        r.dispatchUIEvent(t, "click");
      };
    if (O(t, "input")) {
      const n = t.form, a = n == null ? void 0 : n.querySelector('input[type="submit"], button:not([type]), button[type="submit"]');
      return a ? () => r.dispatchUIEvent(a, "click") : n && GI.includes(t.type) && n.querySelectorAll("input").length === 1 ? () => r.dispatchUIEvent(n, "submit") : void 0;
    }
  }
  if (qt(t)) {
    const n = e.key === "Enter" ? at(t) && !r.system.keyboard.modifiers.Shift ? "insertParagraph" : "insertLineBreak" : "insertText", a = e.key === "Enter" ? `
` : e.key;
    return () => Nt(r, t, a, n);
  }
};
const VI = [
  "button",
  "color",
  "file",
  "image",
  "reset",
  "submit"
], GI = [
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
  return (n = id[e.key]) === null || n === void 0 ? void 0 : n.call(id, e, t, r);
};
const id = {
  " ": (e, t, r) => {
    if (fv(t))
      return () => r.dispatchUIEvent(t, "click");
  }
};
Ge.paste = (e, t, r) => {
  if (qt(t))
    return () => {
      var n;
      const a = (n = e.clipboardData) === null || n === void 0 ? void 0 : n.getData("text");
      a && Nt(r, t, a, "insertFromPaste");
    };
};
const wv = {
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
  blur: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
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
  focus: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  focusin: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  focusout: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
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
function Cv(e) {
  return wv[e].EventType;
}
const zI = [
  "MouseEvent",
  "PointerEvent"
];
function YI(e) {
  return zI.includes(Cv(e));
}
function KI(e) {
  return Cv(e) === "KeyboardEvent";
}
const XI = {
  ClipboardEvent: [
    JI
  ],
  Event: [],
  FocusEvent: [
    Vt,
    ZI
  ],
  InputEvent: [
    Vt,
    e0
  ],
  MouseEvent: [
    Vt,
    ll,
    ld
  ],
  PointerEvent: [
    Vt,
    ll,
    ld,
    r0
  ],
  KeyboardEvent: [
    Vt,
    ll,
    t0
  ]
};
function Pv(e, t, r) {
  const n = re(t), { EventType: a, defaultInit: o } = wv[e], i = new (QI(n))[a](e, o);
  return XI[a].forEach((s) => s(i, r ?? {})), i;
}
function QI(e) {
  var t;
  const r = (t = e.Event) !== null && t !== void 0 ? t : class {
  };
  var n;
  const a = (n = e.AnimationEvent) !== null && n !== void 0 ? n : class extends r {
  };
  var o;
  const i = (o = e.ClipboardEvent) !== null && o !== void 0 ? o : class extends r {
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
  var v;
  const y = (v = e.UIEvent) !== null && v !== void 0 ? v : class extends r {
  };
  var b;
  const C = (b = e.CompositionEvent) !== null && b !== void 0 ? b : class extends y {
  };
  var p;
  const E = (p = e.FocusEvent) !== null && p !== void 0 ? p : class extends y {
  };
  var P;
  const R = (P = e.InputEvent) !== null && P !== void 0 ? P : class extends y {
  };
  var S;
  const m = (S = e.KeyboardEvent) !== null && S !== void 0 ? S : class extends y {
  };
  var h;
  const g = (h = e.MouseEvent) !== null && h !== void 0 ? h : class extends y {
  };
  var I;
  const j = (I = e.DragEvent) !== null && I !== void 0 ? I : class extends g {
  };
  var F;
  const U = (F = e.PointerEvent) !== null && F !== void 0 ? F : class extends g {
  };
  var w;
  const A = (w = e.TouchEvent) !== null && w !== void 0 ? w : class extends y {
  };
  return {
    Event: r,
    AnimationEvent: a,
    ClipboardEvent: i,
    PopStateEvent: l,
    ProgressEvent: c,
    TransitionEvent: f,
    UIEvent: y,
    CompositionEvent: C,
    FocusEvent: E,
    InputEvent: R,
    KeyboardEvent: m,
    MouseEvent: g,
    DragEvent: j,
    PointerEvent: U,
    TouchEvent: A
  };
}
function Ke(e, t) {
  for (const [r, n] of Object.entries(t))
    Object.defineProperty(e, r, {
      get: () => n ?? null
    });
}
function L(e) {
  return Number(e ?? 0);
}
function JI(e, { clipboardData: t }) {
  Ke(e, {
    clipboardData: t
  });
}
function ZI(e, { relatedTarget: t }) {
  Ke(e, {
    relatedTarget: t
  });
}
function e0(e, { data: t, inputType: r, isComposing: n }) {
  Ke(e, {
    data: t,
    isComposing: !!n,
    inputType: String(r)
  });
}
function Vt(e, { view: t, detail: r }) {
  Ke(e, {
    view: t,
    detail: L(r ?? 0)
  });
}
function ll(e, { altKey: t, ctrlKey: r, metaKey: n, shiftKey: a, modifierAltGraph: o, modifierCapsLock: i, modifierFn: s, modifierFnLock: l, modifierNumLock: u, modifierScrollLock: c, modifierSymbol: d, modifierSymbolLock: f }) {
  Ke(e, {
    altKey: !!t,
    ctrlKey: !!r,
    metaKey: !!n,
    shiftKey: !!a,
    getModifierState(v) {
      return !!{
        Alt: t,
        AltGraph: o,
        CapsLock: i,
        Control: r,
        Fn: s,
        FnLock: l,
        Meta: n,
        NumLock: u,
        ScrollLock: c,
        Shift: a,
        Symbol: d,
        SymbolLock: f
      }[v];
    }
  });
}
function t0(e, { key: t, code: r, location: n, repeat: a, isComposing: o, charCode: i }) {
  Ke(e, {
    key: String(t),
    code: String(r),
    location: L(n),
    repeat: !!a,
    isComposing: !!o,
    charCode: i
  });
}
function ld(e, { x: t, y: r, screenX: n, screenY: a, clientX: o = t, clientY: i = r, button: s, buttons: l, relatedTarget: u, offsetX: c, offsetY: d, pageX: f, pageY: v }) {
  Ke(e, {
    screenX: L(n),
    screenY: L(a),
    clientX: L(o),
    x: L(o),
    clientY: L(i),
    y: L(i),
    button: L(s),
    buttons: L(l),
    relatedTarget: u,
    offsetX: L(c),
    offsetY: L(d),
    pageX: L(f),
    pageY: L(v)
  });
}
function r0(e, { pointerId: t, width: r, height: n, pressure: a, tangentialPressure: o, tiltX: i, tiltY: s, twist: l, pointerType: u, isPrimary: c }) {
  Ke(e, {
    pointerId: L(t),
    width: L(r ?? 1),
    height: L(n ?? 1),
    pressure: L(a),
    tangentialPressure: L(o),
    tiltX: L(i),
    tiltY: L(s),
    twist: L(l),
    pointerType: String(u),
    isPrimary: !!c
  });
}
function n0(e, t, r, n = !1) {
  (YI(t) || KI(t)) && (r = {
    ...r,
    ...this.system.getUIEventModifiers()
  });
  const a = Pv(t, e, r);
  return Sv.call(this, e, a, n);
}
function Sv(e, t, r = !1) {
  var n;
  const a = t.type, o = r ? () => {
  } : (n = Ge[a]) === null || n === void 0 ? void 0 : n.call(Ge, t, e, this);
  if (o) {
    t.preventDefault();
    let i = !1;
    return Object.defineProperty(t, "defaultPrevented", {
      get: () => i
    }), Object.defineProperty(t, "preventDefault", {
      value: () => {
        i = t.cancelable;
      }
    }), It(() => e.dispatchEvent(t)), i || o(), !i;
  }
  return It(() => e.dispatchEvent(t));
}
function et(e, t, r) {
  const n = Pv(t, e, r);
  It(() => e.dispatchEvent(n));
}
const sd = Symbol("patched focus/blur methods");
function Tv(e) {
  if (e.prototype[sd])
    return;
  const { focus: t, blur: r } = e.prototype;
  Object.defineProperties(e.prototype, {
    focus: {
      configurable: !0,
      get: () => a
    },
    blur: {
      configurable: !0,
      get: () => o
    },
    [sd]: {
      configurable: !0,
      get: () => ({
        focus: t,
        blur: r
      })
    }
  });
  let n;
  function a(i) {
    if (this.ownerDocument.visibilityState !== "hidden")
      return t.call(this, i);
    const s = ud(this.ownerDocument);
    if (s === this)
      return;
    const l = Symbol("focus call");
    n = l, s && (r.call(s), et(s, "blur", {
      relatedTarget: this
    }), et(s, "focusout", {
      relatedTarget: n === l ? this : null
    })), n === l && (t.call(this, i), et(this, "focus", {
      relatedTarget: s
    })), n === l && et(this, "focusin", {
      relatedTarget: s
    });
  }
  function o() {
    if (this.ownerDocument.visibilityState !== "hidden")
      return r.call(this);
    const i = ud(this.ownerDocument);
    if (i !== this)
      return;
    n = Symbol("blur call"), r.call(this), et(i, "blur", {
      relatedTarget: null
    }), et(i, "focusout", {
      relatedTarget: null
    });
  }
}
function ud(e) {
  const t = _r(e);
  return (t == null ? void 0 : t.tagName) === "BODY" ? null : t;
}
const sl = Symbol("Interceptor for programmatical calls");
function Rt(e, t, r) {
  const n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), a = Object.getOwnPropertyDescriptor(e, t), o = n != null && n.set ? "set" : "value";
  if (typeof (n == null ? void 0 : n[o]) != "function" || n[o][sl])
    throw new Error(`Element ${e.tagName} does not implement "${String(t)}".`);
  function i(...s) {
    const { applyNative: l = !1, realArgs: u, then: c } = r.call(this, ...s), d = (!l && a || n)[o];
    o === "set" ? d.call(this, u) : d.call(this, ...u), c == null || c();
  }
  i[sl] = sl, Object.defineProperty(e, t, {
    ...a ?? n,
    [o]: i
  });
}
function a0(e) {
  Rt(e, "value", function(r) {
    const n = hI(r);
    return n && xI(this), {
      applyNative: !!n,
      realArgs: o0(this, r),
      then: n ? void 0 : () => qI(this, String(r))
    };
  });
}
function o0(e, t) {
  return O(e, "input", {
    type: "number"
  }) && String(t) !== "" && !Number.isNaN(Number(t)) ? String(Number(t)) : String(t);
}
function i0(e) {
  Rt(e, "setSelectionRange", function(r, ...n) {
    const a = gI(r);
    return {
      applyNative: !!a,
      realArgs: [
        Number(r),
        ...n
      ],
      then: () => a ? void 0 : zr(e)
    };
  }), Rt(e, "selectionStart", function(r) {
    return {
      realArgs: r,
      then: () => zr(e)
    };
  }), Rt(e, "selectionEnd", function(r) {
    return {
      realArgs: r,
      then: () => zr(e)
    };
  }), Rt(e, "select", function() {
    return {
      realArgs: [],
      then: () => RI(e, {
        anchorOffset: 0,
        focusOffset: pe(e).length
      })
    };
  });
}
function l0(e) {
  Rt(e, "setRangeText", function(...r) {
    return {
      realArgs: r,
      then: () => {
        ks(e), zr(e);
      }
    };
  });
}
const Ct = Symbol("Node prepared with document state workarounds");
function Av(e) {
  e[Ct] || (e.addEventListener("focus", (t) => {
    const r = t.target;
    cd(r);
  }, {
    capture: !0,
    passive: !0
  }), e.activeElement && cd(e.activeElement), e.addEventListener("blur", (t) => {
    const r = t.target, n = _I(r);
    n !== void 0 && (r.value !== n && et(r, "change"), yv(r));
  }, {
    capture: !0,
    passive: !0
  }), e[Ct] = Ct);
}
function cd(e) {
  e[Ct] || (O(e, [
    "input",
    "textarea"
  ]) && (a0(e), i0(e), l0(e)), e[Ct] = Ct);
}
function s0(e) {
  return u0(e) ? e : e.ownerDocument;
}
function u0(e) {
  return e.nodeType === 9;
}
var J = /* @__PURE__ */ function(e) {
  return e[e.Trigger = 2] = "Trigger", e[e.Call = 1] = "Call", e;
}({});
function zt(e, t) {
  e.levelRefs[t] = {};
}
function Ir(e, t) {
  return e.levelRefs[t];
}
function Bt(e) {
  const t = e.delay;
  if (typeof t == "number")
    return Promise.all([
      new Promise((r) => globalThis.setTimeout(() => r(), t)),
      e.advanceTimers(t)
    ]);
}
var Kr = /* @__PURE__ */ function(e) {
  return e[e.EachTrigger = 4] = "EachTrigger", e[e.EachApiCall = 2] = "EachApiCall", e[e.EachTarget = 1] = "EachTarget", e[e.Never = 0] = "Never", e;
}({});
function Qe(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var ue = /* @__PURE__ */ function(e) {
  return e[e.STANDARD = 0] = "STANDARD", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.NUMPAD = 3] = "NUMPAD", e;
}({});
const c0 = [
  "Alt",
  "AltGraph",
  "Control",
  "Fn",
  "Meta",
  "Shift",
  "Symbol"
];
function dd(e) {
  return c0.includes(e);
}
const d0 = [
  "CapsLock",
  "FnLock",
  "NumLock",
  "ScrollLock",
  "SymbolLock"
];
function fd(e) {
  return d0.includes(e);
}
class f0 {
  isKeyPressed(t) {
    return this.pressed.has(String(t.code));
  }
  getPressedKeys() {
    return this.pressed.values().map((t) => t.keyDef);
  }
  /** Press a key */
  async keydown(t, r) {
    const n = String(r.key), a = String(r.code), o = il(t.config.document);
    this.setKeydownTarget(o), this.pressed.add(a, r), dd(n) && (this.modifiers[n] = !0);
    const i = t.dispatchUIEvent(o, "keydown", {
      key: n,
      code: a
    });
    fd(n) && !this.modifiers[n] && (this.modifiers[n] = !0, this.modifierLockStart[n] = !0), i && this.pressed.setUnprevented(a), i && this.hasKeyPress(n) && t.dispatchUIEvent(il(t.config.document), "keypress", {
      key: n,
      code: a,
      charCode: r.key === "Enter" ? 13 : String(r.key).charCodeAt(0)
    });
  }
  /** Release a key */
  async keyup(t, r) {
    const n = String(r.key), a = String(r.code), o = this.pressed.isUnprevented(a);
    this.pressed.delete(a), dd(n) && !this.pressed.values().find((i) => i.keyDef.key === n) && (this.modifiers[n] = !1), t.dispatchUIEvent(il(t.config.document), "keyup", {
      key: n,
      code: a
    }, !o), fd(n) && this.modifiers[n] && (this.modifierLockStart[n] ? this.modifierLockStart[n] = !1 : this.modifiers[n] = !1);
  }
  setKeydownTarget(t) {
    t !== this.lastKeydownTarget && (this.carryChar = ""), this.lastKeydownTarget = t;
  }
  hasKeyPress(t) {
    return (t.length === 1 || t === "Enter") && !this.modifiers.Control && !this.modifiers.Alt;
  }
  constructor(t) {
    Qe(this, "system", void 0), Qe(this, "modifiers", {
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
    }), Qe(this, "pressed", new class {
      add(r, n) {
        var a, o, i;
        (i = (a = this.registry)[o = r]) !== null && i !== void 0 || (a[o] = {
          keyDef: n,
          unpreventedDefault: !1
        });
      }
      has(r) {
        return !!this.registry[r];
      }
      setUnprevented(r) {
        const n = this.registry[r];
        n && (n.unpreventedDefault = !0);
      }
      isUnprevented(r) {
        var n;
        return !!(!((n = this.registry[r]) === null || n === void 0) && n.unpreventedDefault);
      }
      delete(r) {
        delete this.registry[r];
      }
      values() {
        return Object.values(this.registry);
      }
      constructor() {
        Qe(this, "registry", {});
      }
    }()), Qe(this, "carryChar", ""), Qe(this, "lastKeydownTarget", void 0), Qe(this, "modifierLockStart", {}), this.system = t;
  }
}
const p0 = [
  // alphanumeric block - writing system
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
  {
    code: "BracketLeft",
    key: "["
  },
  {
    code: "BracketLeft",
    key: "{",
    shiftKey: !0
  },
  {
    code: "BracketRight",
    key: "]"
  },
  {
    code: "BracketRight",
    key: "}",
    shiftKey: !0
  },
  // alphanumeric block - functional
  {
    code: "Space",
    key: " "
  },
  {
    code: "AltLeft",
    key: "Alt",
    location: ue.LEFT
  },
  {
    code: "AltRight",
    key: "Alt",
    location: ue.RIGHT
  },
  {
    code: "ShiftLeft",
    key: "Shift",
    location: ue.LEFT
  },
  {
    code: "ShiftRight",
    key: "Shift",
    location: ue.RIGHT
  },
  {
    code: "ControlLeft",
    key: "Control",
    location: ue.LEFT
  },
  {
    code: "ControlRight",
    key: "Control",
    location: ue.RIGHT
  },
  {
    code: "MetaLeft",
    key: "Meta",
    location: ue.LEFT
  },
  {
    code: "MetaRight",
    key: "Meta",
    location: ue.RIGHT
  },
  {
    code: "OSLeft",
    key: "OS",
    location: ue.LEFT
  },
  {
    code: "OSRight",
    key: "OS",
    location: ue.RIGHT
  },
  {
    code: "ContextMenu",
    key: "ContextMenu"
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
], m0 = [
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
function v0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Ov {
  getButtons() {
    let t = 0;
    for (const r of Object.keys(this.pressed))
      t |= 2 ** Number(r);
    return t;
  }
  down(t) {
    const r = Yl(t.button);
    if (r in this.pressed) {
      this.pressed[r].push(t);
      return;
    }
    return this.pressed[r] = [
      t
    ], r;
  }
  up(t) {
    const r = Yl(t.button);
    if (r in this.pressed && (this.pressed[r] = this.pressed[r].filter((n) => n.name !== t.name), this.pressed[r].length === 0))
      return delete this.pressed[r], r;
  }
  constructor() {
    v0(this, "pressed", {});
  }
}
const pd = {
  primary: 0,
  secondary: 1,
  auxiliary: 2,
  back: 3,
  X1: 3,
  forward: 4,
  X2: 4
};
function Yl(e = 0) {
  return e in pd ? pd[e] : Number(e);
}
const md = {
  1: 2,
  2: 1
};
function Kl(e) {
  return e = Yl(e), e in md ? md[e] : e;
}
function y0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class b0 {
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
    y0(this, "pressedKeys", /* @__PURE__ */ new Set());
  }
}
function er(e, t) {
  const r = [];
  for (let o = e; o; o = o.parentElement)
    r.push(o);
  const n = [];
  for (let o = t; o; o = o.parentElement)
    n.push(o);
  let a = 0;
  for (; !(a >= r.length || a >= n.length || r[r.length - 1 - a] !== n[n.length - 1 - a]); a++)
    ;
  return [
    r.slice(0, r.length - a),
    n.slice(0, n.length - a),
    n.slice(n.length - a)
  ];
}
function Xl({ target: e, node: t, offset: r }) {
  return fe(e) ? {
    node: e,
    offset: r ?? pe(e).length
  } : t ? {
    node: t,
    offset: r ?? (t.nodeType === 3 ? t.nodeValue.length : t.childNodes.length)
  } : $v(e, r);
}
function $v(e, t, r = !0) {
  let n = t === void 0 ? e.childNodes.length - 1 : 0;
  const a = t === void 0 ? -1 : 1;
  for (; t === void 0 ? n >= (r ? Math.max(e.childNodes.length - 1, 0) : 0) : n <= e.childNodes.length; ) {
    if (t && n === e.childNodes.length)
      throw new Error("The given offset is out of bounds.");
    const o = e.childNodes.item(n), i = String(o.textContent);
    if (i.length)
      if (t !== void 0 && i.length < t)
        t -= i.length;
      else {
        if (o.nodeType === 1)
          return $v(o, t, !1);
        if (o.nodeType === 3)
          return {
            node: o,
            offset: t ?? o.nodeValue.length
          };
      }
    n += a;
  }
  return {
    node: e,
    offset: e.childNodes.length
  };
}
function h0({ document: e, target: t, clickCount: r, node: n, offset: a }) {
  if (vI(t))
    return;
  const o = fe(t), i = String(o ? pe(t) : t.textContent), [s, l] = n ? (
    // which elements might be considered in the same line of text.
    // TODO: support expanding initial range on multiple clicks if node is given
    [
      a,
      a
    ]
  ) : g0(i, a, r);
  if (o)
    return Ft(t, {
      anchorOffset: s ?? i.length,
      focusOffset: l ?? i.length
    }), {
      node: t,
      start: s ?? 0,
      end: l ?? i.length
    };
  {
    const { node: u, offset: c } = Xl({
      target: t,
      node: n,
      offset: s
    }), { node: d, offset: f } = Xl({
      target: t,
      node: n,
      offset: l
    }), v = t.ownerDocument.createRange();
    try {
      v.setStart(u, c), v.setEnd(d, f);
    } catch {
      throw new Error("The given offset is out of bounds.");
    }
    const y = e.getSelection();
    return y == null || y.removeAllRanges(), y == null || y.addRange(v.cloneRange()), v;
  }
}
function g0(e, t, r) {
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
function E0(e, { document: t, target: r, node: n, offset: a }) {
  const o = Xl({
    target: r,
    node: n,
    offset: a
  });
  if ("node" in e) {
    if (o.node === e.node) {
      const i = o.offset < e.start ? e.end : e.start, s = o.offset > e.end || o.offset < e.start ? o.offset : e.end;
      Ft(e.node, {
        anchorOffset: i,
        focusOffset: s
      });
    }
  } else {
    const i = e.cloneRange(), s = i.comparePoint(o.node, o.offset);
    s < 0 ? i.setStart(o.node, o.offset) : s > 0 && i.setEnd(o.node, o.offset);
    const l = t.getSelection();
    l == null || l.removeAllRanges(), l == null || l.addRange(i.cloneRange());
  }
}
function xv(e, t) {
  var r, n, a, o, i, s, l, u, c, d, f, v, y, b, C, p, E, P, R, S, m, h, g, I;
  return e.target !== t.target || ((r = e.coords) === null || r === void 0 ? void 0 : r.x) !== ((n = t.coords) === null || n === void 0 ? void 0 : n.x) || ((a = e.coords) === null || a === void 0 ? void 0 : a.y) !== ((o = t.coords) === null || o === void 0 ? void 0 : o.y) || ((i = e.coords) === null || i === void 0 ? void 0 : i.clientX) !== ((s = t.coords) === null || s === void 0 ? void 0 : s.clientX) || ((l = e.coords) === null || l === void 0 ? void 0 : l.clientY) !== ((u = t.coords) === null || u === void 0 ? void 0 : u.clientY) || ((c = e.coords) === null || c === void 0 ? void 0 : c.offsetX) !== ((d = t.coords) === null || d === void 0 ? void 0 : d.offsetX) || ((f = e.coords) === null || f === void 0 ? void 0 : f.offsetY) !== ((v = t.coords) === null || v === void 0 ? void 0 : v.offsetY) || ((y = e.coords) === null || y === void 0 ? void 0 : y.pageX) !== ((b = t.coords) === null || b === void 0 ? void 0 : b.pageX) || ((C = e.coords) === null || C === void 0 ? void 0 : C.pageY) !== ((p = t.coords) === null || p === void 0 ? void 0 : p.pageY) || ((E = e.coords) === null || E === void 0 ? void 0 : E.screenX) !== ((P = t.coords) === null || P === void 0 ? void 0 : P.screenX) || ((R = e.coords) === null || R === void 0 ? void 0 : R.screenY) !== ((S = t.coords) === null || S === void 0 ? void 0 : S.screenY) || ((m = e.caret) === null || m === void 0 ? void 0 : m.node) !== ((h = t.caret) === null || h === void 0 ? void 0 : h.node) || ((g = e.caret) === null || g === void 0 ? void 0 : g.offset) !== ((I = t.caret) === null || I === void 0 ? void 0 : I.offset);
}
function Je(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class _0 {
  move(t, r, n) {
    const a = this.position, o = this.getTarget(t);
    if (this.position = r, !xv(a, r))
      return;
    const i = this.getTarget(t), s = this.getEventInit("mousemove"), [l, u] = er(o, i);
    return {
      leave: () => {
        o !== i && (t.dispatchUIEvent(o, "mouseout", s), l.forEach((c) => t.dispatchUIEvent(c, "mouseleave", s)));
      },
      enter: () => {
        o !== i && (t.dispatchUIEvent(i, "mouseover", s), u.forEach((c) => t.dispatchUIEvent(c, "mouseenter", s)));
      },
      move: () => {
        n || (t.dispatchUIEvent(i, "mousemove", s), this.modifySelecting(t));
      }
    };
  }
  down(t, r, n) {
    const a = this.buttons.down(r);
    if (a === void 0)
      return;
    const o = this.getTarget(t);
    this.buttonDownTarget[a] = o;
    const i = this.getEventInit("mousedown", r.button), s = Re(o);
    !n && (s || t.dispatchUIEvent(o, "mousedown", i)) && (this.startSelecting(t, i.detail), Ve(o)), !s && Kl(r.button) === 2 && t.dispatchUIEvent(o, "contextmenu", this.getEventInit("contextmenu", r.button));
  }
  up(t, r, n) {
    const a = this.buttons.up(r);
    if (a === void 0)
      return;
    const o = this.getTarget(t);
    if (!Re(o)) {
      if (!n) {
        const s = this.getEventInit("mouseup", r.button);
        t.dispatchUIEvent(o, "mouseup", s), this.endSelecting();
      }
      const i = er(this.buttonDownTarget[a], o)[2][0];
      if (i) {
        const s = this.getEventInit("click", r.button);
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
  getEventInit(t, r) {
    const n = {
      ...this.position.coords
    };
    return n.button = Kl(r), n.buttons = this.buttons.getButtons(), t === "mousedown" ? n.detail = this.clickCount.getOnDown(n.button) : t === "mouseup" ? n.detail = this.clickCount.getOnUp(n.button) : (t === "click" || t === "auxclick") && (n.detail = this.clickCount.incOnClick(n.button)), n;
  }
  getTarget(t) {
    var r;
    return (r = this.position.target) !== null && r !== void 0 ? r : t.config.document.body;
  }
  startSelecting(t, r) {
    var n, a;
    this.selecting = h0({
      document: t.config.document,
      target: this.getTarget(t),
      node: (n = this.position.caret) === null || n === void 0 ? void 0 : n.node,
      offset: (a = this.position.caret) === null || a === void 0 ? void 0 : a.offset,
      clickCount: r
    });
  }
  modifySelecting(t) {
    var r, n;
    this.selecting && E0(this.selecting, {
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
    Je(this, "position", {}), Je(this, "buttons", new Ov()), Je(this, "selecting", void 0), Je(this, "buttonDownTarget", {}), Je(this, "clickCount", new class {
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
        Je(this, "down", {}), Je(this, "count", {});
      }
    }());
  }
}
function _n(e, t) {
  var r;
  return ((r = qv(e, t)) === null || r === void 0 ? void 0 : r.pointerEvents) !== "none";
}
function R0(e) {
  const t = re(e);
  for (let r = e, n = []; r != null && r.ownerDocument; r = r.parentElement) {
    n.push(r);
    const a = t.getComputedStyle(r).pointerEvents;
    if (a && ![
      "inherit",
      "unset"
    ].includes(a))
      return {
        pointerEvents: a,
        tree: n
      };
  }
}
const vd = Symbol("Last check for pointer-events");
function qv(e, t) {
  const r = t[vd];
  if (!(e.config.pointerEventsCheck !== Kr.Never && (!r || yd(e.config.pointerEventsCheck, Kr.EachApiCall) && r[J.Call] !== Ir(e, J.Call) || yd(e.config.pointerEventsCheck, Kr.EachTrigger) && r[J.Trigger] !== Ir(e, J.Trigger))))
    return r == null ? void 0 : r.result;
  const a = R0(t);
  return t[vd] = {
    [J.Call]: Ir(e, J.Call),
    [J.Trigger]: Ir(e, J.Trigger),
    result: a
  }, a;
}
function Yt(e, t) {
  const r = qv(e, t);
  if ((r == null ? void 0 : r.pointerEvents) === "none")
    throw new Error([
      `Unable to perform pointer interaction as the element ${r.tree.length > 1 ? "inherits" : "has"} \`pointer-events: none\`:`,
      "",
      w0(r.tree)
    ].join(`
`));
}
function w0(e) {
  return e.reverse().map((t, r) => [
    "".padEnd(r),
    t.tagName,
    t.id && `#${t.id}`,
    t.hasAttribute("data-testid") && `(testId=${t.getAttribute("data-testid")})`,
    C0(t),
    e.length > 1 && r === 0 && "  <-- This element declared `pointer-events: none`",
    e.length > 1 && r === e.length - 1 && "  <-- Asserted pointer events here"
  ].filter(Boolean).join("")).join(`
`);
}
function C0(e) {
  var t;
  let r;
  if (e.hasAttribute("aria-label"))
    r = e.getAttribute("aria-label");
  else if (e.hasAttribute("aria-labelledby")) {
    var n, a;
    r = (a = e.ownerDocument.getElementById(e.getAttribute("aria-labelledby"))) === null || a === void 0 || (n = a.textContent) === null || n === void 0 ? void 0 : n.trim();
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
    var o;
    r = (o = e.textContent) === null || o === void 0 ? void 0 : o.trim();
  }
  return r = r == null ? void 0 : r.replace(/\n/g, "  "), Number(r == null ? void 0 : r.length) > 30 && (r = `${r == null ? void 0 : r.substring(0, 29)}…`), r ? `(label=${r})` : "";
}
function yd(e, t) {
  return (e & t) > 0;
}
function ve(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class P0 {
  init(t) {
    const r = this.getTarget(t), [, n] = er(null, r), a = this.getEventInit();
    return Yt(t, r), t.dispatchUIEvent(r, "pointerover", a), n.forEach((o) => t.dispatchUIEvent(o, "pointerenter", a)), this;
  }
  move(t, r) {
    const n = this.position, a = this.getTarget(t);
    if (this.position = r, !xv(n, r))
      return;
    const o = this.getTarget(t), i = this.getEventInit(-1), [s, l] = er(a, o);
    return {
      leave: () => {
        _n(t, a) && a !== o && (t.dispatchUIEvent(a, "pointerout", i), s.forEach((u) => t.dispatchUIEvent(u, "pointerleave", i)));
      },
      enter: () => {
        Yt(t, o), a !== o && (t.dispatchUIEvent(o, "pointerover", i), l.forEach((u) => t.dispatchUIEvent(u, "pointerenter", i)));
      },
      move: () => {
        t.dispatchUIEvent(o, "pointermove", i);
      }
    };
  }
  down(t, r = 0) {
    if (this.isDown)
      return;
    const n = this.getTarget(t);
    Yt(t, n), this.isDown = !0, this.isPrevented = !t.dispatchUIEvent(n, "pointerdown", this.getEventInit(r));
  }
  up(t, r = 0) {
    if (!this.isDown)
      return;
    const n = this.getTarget(t);
    Yt(t, n), this.isPrevented = !1, this.isDown = !1, t.dispatchUIEvent(n, "pointerup", this.getEventInit(r));
  }
  release(t) {
    const r = this.getTarget(t), [n] = er(r, null), a = this.getEventInit();
    _n(t, r) && (t.dispatchUIEvent(r, "pointerout", a), n.forEach((o) => t.dispatchUIEvent(o, "pointerleave", a))), this.isCancelled = !0;
  }
  getTarget(t) {
    var r;
    return (r = this.position.target) !== null && r !== void 0 ? r : t.config.document.body;
  }
  getEventInit(t) {
    return {
      ...this.position.coords,
      pointerId: this.pointerId,
      pointerType: this.pointerType,
      isPrimary: this.isPrimary,
      button: Kl(t),
      buttons: this.buttons.getButtons()
    };
  }
  constructor({ pointerId: t, pointerType: r, isPrimary: n }, a) {
    ve(this, "pointerId", void 0), ve(this, "pointerType", void 0), ve(this, "isPrimary", void 0), ve(this, "buttons", void 0), ve(this, "isMultitouch", !1), ve(this, "isCancelled", !1), ve(this, "isDown", !1), ve(this, "isPrevented", !1), ve(this, "position", {}), this.pointerId = t, this.pointerType = r, this.isPrimary = n, this.isMultitouch = !n, this.buttons = a;
  }
}
function Oe(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class S0 {
  isKeyPressed(t) {
    return this.devices.get(t.pointerType).isPressed(t);
  }
  async press(t, r, n) {
    this.devices.get(r.pointerType).addPressed(r), this.buttons.down(r);
    const a = this.getPointerName(r), o = r.pointerType === "touch" ? this.pointers.new(a, r.pointerType, this.buttons) : this.pointers.get(a);
    o.position = n, o.pointerType !== "touch" && (this.mouse.position = n), o.pointerType === "touch" && o.init(t), o.down(t, r.button), o.pointerType !== "touch" && this.mouse.down(t, r, o.isPrevented);
  }
  async move(t, r, n) {
    const a = this.pointers.get(r), o = a.move(t, n), i = a.pointerType === "touch" ? void 0 : this.mouse.move(t, n, a.isPrevented);
    o == null || o.leave(), i == null || i.leave(), o == null || o.enter(), i == null || i.enter(), o == null || o.move(), i == null || i.move();
  }
  async release(t, r, n) {
    const a = this.devices.get(r.pointerType);
    a.removePressed(r), this.buttons.up(r);
    const o = this.pointers.get(this.getPointerName(r)), i = o.isPrevented;
    if (o.position = n, o.pointerType !== "touch" && (this.mouse.position = n), a.countPressed === 0 && o.up(t, r.button), o.pointerType === "touch" && o.release(t), o.pointerType === "touch" && !o.isMultitouch) {
      const s = this.mouse.move(t, n, i);
      s == null || s.leave(), s == null || s.enter(), s == null || s.move(), this.mouse.down(t, r, i);
    }
    if (!o.isMultitouch) {
      const s = this.mouse.move(t, n, i);
      s == null || s.leave(), s == null || s.enter(), s == null || s.move(), this.mouse.up(t, r, i);
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
    Oe(this, "system", void 0), Oe(this, "mouse", void 0), Oe(this, "buttons", void 0), Oe(this, "devices", new class {
      get(r) {
        var n, a, o;
        return (o = (n = this.registry)[a = r]) !== null && o !== void 0 ? o : n[a] = new b0();
      }
      constructor() {
        Oe(this, "registry", {});
      }
    }()), Oe(this, "pointers", new class {
      new(r, n, a) {
        const o = n !== "touch" || !Object.values(this.registry).some((i) => i.pointerType === "touch" && !i.isCancelled);
        return o || Object.values(this.registry).forEach((i) => {
          i.pointerType === n && !i.isCancelled && (i.isMultitouch = !0);
        }), this.registry[r] = new P0({
          pointerId: this.nextId++,
          pointerType: n,
          isPrimary: o
        }, a), this.registry[r];
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
        Oe(this, "registry", {}), Oe(this, "nextId", 1);
      }
    }()), this.system = t, this.buttons = new Ov(), this.mouse = new _0(), this.pointers.new("mouse", "mouse", this.buttons);
  }
}
function bd(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Iv {
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
    bd(this, "keyboard", new f0(this)), bd(this, "pointer", new S0(this));
  }
}
async function T0(e) {
  const t = [];
  return this.config.skipHover || t.push({
    target: e
  }), t.push({
    keys: "[MouseLeft]",
    target: e
  }), this.pointer(t);
}
async function A0(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft]"
  ]);
}
async function O0(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft][MouseLeft]"
  ]);
}
async function $0(e) {
  return this.pointer({
    target: e
  });
}
async function x0(e) {
  return Yt(this, this.system.pointer.getMouseTarget(this)), this.pointer({
    target: e.ownerDocument.body
  });
}
async function q0({ shift: e } = {}) {
  return this.keyboard(e === !0 ? "{Shift>}{Tab}{/Shift}" : e === !1 ? "[/ShiftLeft][/ShiftRight]{Tab}" : "{Tab}");
}
var Ls = /* @__PURE__ */ function(e) {
  return e["{"] = "}", e["["] = "]", e;
}(Ls || {});
function Mv(e, t) {
  let r = 0;
  const n = e[r] in Ls ? e[r] : "";
  r += n.length;
  const o = new RegExp(`^\\${n}{2}`).test(e) ? "" : n;
  return {
    type: o,
    ...o === "" ? I0(e, r, t) : M0(e, r, o, t)
  };
}
function I0(e, t, r) {
  const n = e[t];
  return Nv(n, e, t, r), t += n.length, {
    consumedLength: t,
    descriptor: n,
    releasePrevious: !1,
    releaseSelf: !0,
    repeat: 1
  };
}
function M0(e, t, r, n) {
  var a, o;
  const i = e[t] === "/" ? "/" : "";
  t += i.length;
  const s = r === "{" && e[t] === "\\";
  t += Number(s);
  const l = s ? e[t] : (a = e.slice(t).match(r === "{" ? /^\w+|^[^}>/]/ : /^\w+/)) === null || a === void 0 ? void 0 : a[0];
  Nv(l, e, t, n), t += l.length;
  var u;
  const c = (u = (o = e.slice(t).match(/^>\d+/)) === null || o === void 0 ? void 0 : o[0]) !== null && u !== void 0 ? u : "";
  t += c.length;
  const d = e[t] === "/" || !c && e[t] === ">" ? e[t] : "";
  t += d.length;
  const f = Ls[r], v = e[t] === f ? f : "";
  if (!v)
    throw new Error(Bv([
      !c && "repeat modifier",
      !d && "release modifier",
      `"${f}"`
    ].filter(Boolean).join(" or "), e[t], e, n));
  return t += v.length, {
    consumedLength: t,
    descriptor: l,
    releasePrevious: !!i,
    repeat: c ? Math.max(Number(c.substr(1)), 1) : 1,
    releaseSelf: N0(d, c)
  };
}
function Nv(e, t, r, n) {
  if (!e)
    throw new Error(Bv("key descriptor", t[r], t, n));
}
function N0(e, t) {
  if (e)
    return e === "/";
  if (t)
    return !1;
}
function Bv(e, t, r, n) {
  return `Expected ${e} but found "${t ?? ""}" in "${r}"
    See ${n === "pointer" ? "https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen" : "https://testing-library.com/docs/user-event/keyboard"}
    for more information about how userEvent parses your input.`;
}
function B0(e, t) {
  const r = [];
  do {
    const { type: a, descriptor: o, consumedLength: i, releasePrevious: s, releaseSelf: l = !0, repeat: u } = Mv(t, "keyboard");
    var n;
    const c = (n = e.find((d) => {
      if (a === "[") {
        var f;
        return ((f = d.code) === null || f === void 0 ? void 0 : f.toLowerCase()) === o.toLowerCase();
      } else if (a === "{") {
        var v;
        return ((v = d.key) === null || v === void 0 ? void 0 : v.toLowerCase()) === o.toLowerCase();
      }
      return d.key === o;
    })) !== null && n !== void 0 ? n : {
      key: "Unknown",
      code: "Unknown",
      [a === "[" ? "code" : "key"]: o
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
async function k0(e) {
  const t = B0(this.config.keyboardMap, e);
  for (let r = 0; r < t.length; r++)
    await Bt(this.config), await D0(this, t[r]);
}
async function D0(e, { keyDef: t, releasePrevious: r, releaseSelf: n, repeat: a }) {
  const { system: o } = e;
  if (o.keyboard.isKeyPressed(t) && await o.keyboard.keyup(e, t), !r) {
    for (let i = 1; i <= a; i++)
      await o.keyboard.keydown(e, t), i < a && await Bt(e.config);
    n && await o.keyboard.keyup(e, t);
  }
}
async function L0(e) {
  for (const t of e.system.keyboard.getPressedKeys())
    await e.system.keyboard.keyup(e, t);
}
function kv(e) {
  const t = fe(e) ? {
    "text/plain": F0(e)
  } : {
    "text/plain": String(e.ownerDocument.getSelection())
  }, r = Ms(re(e));
  for (const n in t)
    t[n] && r.setData(n, t[n]);
  return r;
}
function F0(e) {
  const t = dr(e);
  return pe(e).substring(t.startOffset, t.endOffset);
}
async function j0() {
  const e = this.config.document;
  var t;
  const r = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), n = kv(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "copy", {
      clipboardData: n
    }) && this.config.writeToClipboard && await uv(e, n), n;
}
async function U0() {
  const e = this.config.document;
  var t;
  const r = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), n = kv(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "cut", {
      clipboardData: n
    }) && this.config.writeToClipboard && await uv(r.ownerDocument, n), n;
}
async function H0(e) {
  const t = this.config.document;
  var r;
  const n = (r = t.activeElement) !== null && r !== void 0 ? r : (
    /* istanbul ignore next */
    t.body
  );
  var a;
  const o = (a = typeof e == "string" ? W0(t, e) : e) !== null && a !== void 0 ? a : await dI(t).catch(() => {
    throw new Error("`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.");
  });
  this.dispatchUIEvent(n, "paste", {
    clipboardData: o
  });
}
function W0(e, t) {
  const r = Ms(re(e));
  return r.setData("text", t), r;
}
function hd(e, t) {
  const r = [];
  do {
    const { descriptor: n, consumedLength: a, releasePrevious: o, releaseSelf: i = !0 } = Mv(t, "pointer"), s = e.find((l) => l.name === n);
    s && r.push({
      keyDef: s,
      releasePrevious: o,
      releaseSelf: i
    }), t = t.slice(a);
  } while (t);
  return r;
}
async function V0(e) {
  const { pointerMap: t } = this.config, r = [];
  (Array.isArray(e) ? e : [
    e
  ]).forEach((n) => {
    typeof n == "string" ? r.push(...hd(t, n)) : "keys" in n ? r.push(...hd(t, n.keys).map((a) => ({
      ...n,
      ...a
    }))) : r.push(n);
  });
  for (let n = 0; n < r.length; n++)
    await Bt(this.config), await G0(this, r[n]);
  this.system.pointer.resetClickCount();
}
async function G0(e, t) {
  var r, n;
  const a = "pointerName" in t && t.pointerName ? t.pointerName : "keyDef" in t ? e.system.pointer.getPointerName(t.keyDef) : "mouse", o = e.system.pointer.getPreviousPosition(a);
  var i, s, l, u;
  const c = {
    target: (i = t.target) !== null && i !== void 0 ? i : z0(e, o),
    coords: (s = t.coords) !== null && s !== void 0 ? s : o == null ? void 0 : o.coords,
    caret: {
      node: (l = t.node) !== null && l !== void 0 ? l : gd(t) || o == null || (r = o.caret) === null || r === void 0 ? void 0 : r.node,
      offset: (u = t.offset) !== null && u !== void 0 ? u : gd(t) || o == null || (n = o.caret) === null || n === void 0 ? void 0 : n.offset
    }
  };
  "keyDef" in t ? (e.system.pointer.isKeyPressed(t.keyDef) && (zt(e, J.Trigger), await e.system.pointer.release(e, t.keyDef, c)), t.releasePrevious || (zt(e, J.Trigger), await e.system.pointer.press(e, t.keyDef, c), t.releaseSelf && (zt(e, J.Trigger), await e.system.pointer.release(e, t.keyDef, c)))) : (zt(e, J.Trigger), await e.system.pointer.move(e, a, c));
}
function gd(e) {
  var t, r;
  return !!((r = (t = e.target) !== null && t !== void 0 ? t : e.node) !== null && r !== void 0 ? r : e.offset !== void 0);
}
function z0(e, t) {
  if (!t)
    throw new Error("This pointer has no previous position. Provide a target property!");
  var r;
  return (r = t.target) !== null && r !== void 0 ? r : e.config.document.body;
}
async function Y0(e) {
  if (!qt(e) || Re(e))
    throw new Error("clear()` is only supported on editable elements.");
  if (Ve(e), e.ownerDocument.activeElement !== e)
    throw new Error("The element to be cleared could not be focused.");
  if (Rv(e), !HI(e))
    throw new Error("The element content to be cleared could not be selected.");
  Nt(this, e, "", "deleteContentBackward");
}
async function K0(e, t) {
  return Dv.call(this, !0, e, t);
}
async function X0(e, t) {
  return Dv.call(this, !1, e, t);
}
async function Dv(e, t, r) {
  if (!e && !t.multiple)
    throw q().getElementError("Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.", t);
  const n = Array.isArray(r) ? r : [
    r
  ], a = Array.from(t.querySelectorAll('option, [role="option"]')), o = n.map((s) => {
    if (typeof s != "string" && a.includes(s))
      return s;
    {
      const l = a.find((u) => u.value === s || u.innerHTML === s);
      if (l)
        return l;
      throw q().getElementError(`Value "${String(s)}" not found in options`, t);
    }
  }).filter((s) => !Re(s));
  if (Re(t) || !o.length)
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
      for (const s of o) {
        const l = this.config.pointerEventsCheck === 0 ? !0 : _n(this, s);
        l && (this.dispatchUIEvent(s, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(s, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(s, "pointermove"), this.dispatchUIEvent(s, "mousemove"), this.dispatchUIEvent(s, "pointerdown"), this.dispatchUIEvent(s, "mousedown")), Ve(t), l && (this.dispatchUIEvent(s, "pointerup"), this.dispatchUIEvent(s, "mouseup")), i(s), l && this.dispatchUIEvent(s, "click"), await Bt(this.config);
      }
    else if (o.length === 1) {
      const s = this.config.pointerEventsCheck === 0 ? !0 : _n(this, t);
      s ? await this.click(t) : Ve(t), i(o[0]), s && (this.dispatchUIEvent(t, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(t, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(t, "pointerup"), this.dispatchUIEvent(t, "mouseup"), this.dispatchUIEvent(t, "click")), await Bt(this.config);
    } else
      throw q().getElementError("Cannot select multiple options on a non-multiple select", t);
  else if (t.getAttribute("role") === "listbox")
    for (const s of o)
      await this.click(s), await this.unhover(s);
  else
    throw q().getElementError("Cannot select options on elements that are neither select nor listbox elements", t);
}
async function Q0(e, t, { skipClick: r = this.config.skipClick, skipAutoClose: n = this.config.skipAutoClose, initialSelectionStart: a, initialSelectionEnd: o } = {}) {
  e.disabled || (r || await this.click(e), a !== void 0 && Gt(e, a, o ?? a), await this.keyboard(t), n || await L0(this));
}
const Ed = Symbol("files and value properties are mocked");
function ul(e, t, r) {
  r ? Object.defineProperty(e, t, r) : delete e[t];
}
function J0(e, t) {
  var r;
  (r = e[Ed]) === null || r === void 0 || r.restore();
  const n = Object.getOwnPropertyDescriptor(e, "type"), a = Object.getOwnPropertyDescriptor(e, "value"), o = Object.getOwnPropertyDescriptor(e, "files");
  function i() {
    ul(e, "type", n), ul(e, "value", a), ul(e, "files", o);
  }
  e[Ed] = {
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
          a == null || (l = a.set) === null || l === void 0 || l.call(e, s);
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
async function Z0(e, t) {
  const r = O(e, "label") ? e.control : e;
  if (!r || !O(r, "input", {
    type: "file"
  }))
    throw new TypeError(`The ${r === e ? "given" : "associated"} ${r == null ? void 0 : r.tagName} element does not accept file uploads`);
  if (Re(e))
    return;
  const n = (Array.isArray(t) ? t : [
    t
  ]).filter((o) => !this.config.applyAccept || eM(o, r.accept)).slice(0, r.multiple ? void 0 : 1), a = () => {
    var o;
    n.length === ((o = r.files) === null || o === void 0 ? void 0 : o.length) && n.every((i, s) => {
      var l;
      return i === ((l = r.files) === null || l === void 0 ? void 0 : l.item(s));
    }) || (J0(r, Is(re(e), n)), this.dispatchUIEvent(r, "input"), this.dispatchUIEvent(r, "change"));
  };
  r.addEventListener("fileDialog", a), await this.click(e), r.removeEventListener("fileDialog", a);
}
function Mr(e) {
  return e.toLowerCase().replace(/(\.|\/)jpg\b/g, "$1jpeg");
}
function eM(e, t) {
  if (!t)
    return !0;
  const r = [
    "audio/*",
    "image/*",
    "video/*"
  ];
  return Mr(t).trim().split(/\s*,\s*/).some((n) => n.startsWith(".") ? Mr(e.name).endsWith(n) : r.includes(n) ? Mr(e.type).startsWith(n.replace("*", "")) : Mr(e.type) === n);
}
const _d = {
  click: T0,
  dblClick: A0,
  tripleClick: O0,
  hover: $0,
  unhover: x0,
  tab: q0,
  keyboard: k0,
  copy: j0,
  cut: U0,
  paste: H0,
  pointer: V0,
  clear: Y0,
  deselectOptions: X0,
  selectOptions: K0,
  type: Q0,
  upload: Z0
};
function tM(e) {
  return q().asyncWrapper(e);
}
const Lv = {
  applyAccept: !0,
  autoModify: !0,
  delay: 0,
  document: globalThis.document,
  keyboardMap: p0,
  pointerMap: m0,
  pointerEventsCheck: Kr.EachApiCall,
  skipAutoClose: !1,
  skipClick: !1,
  skipHover: !1,
  writeToClipboard: !1,
  advanceTimers: () => Promise.resolve()
}, rM = {
  ...Lv,
  writeToClipboard: !0
};
function Fv(e = {}, t = rM, r) {
  const n = iM(e, r, t);
  return {
    ...t,
    ...e,
    document: n
  };
}
function nM(e = {}) {
  const t = Fv(e);
  Av(t.document), Tv(re(t.document).HTMLElement);
  var r;
  const n = (r = t.document.defaultView) !== null && r !== void 0 ? r : (
    /* istanbul ignore next */
    globalThis.window
  );
  return sI(n), Fs(t).api;
}
function K({ keyboardState: e, pointerState: t, ...r } = {}, n) {
  const a = Fv(r, Lv, n);
  Av(a.document), Tv(re(a.document).HTMLElement);
  var o;
  const i = (o = t ?? e) !== null && o !== void 0 ? o : new Iv();
  return {
    api: Fs(a, i).api,
    system: i
  };
}
function aM(e) {
  return Fs({
    ...this.config,
    ...e
  }, this.system).api;
}
function oM(e, t) {
  function r(...n) {
    return zt(e, J.Call), tM(() => t.apply(e, n).then(async (a) => (await Bt(e.config), a)));
  }
  return Object.defineProperty(r, "name", {
    get: () => t.name
  }), r;
}
function Fs(e, t = new Iv()) {
  const r = {};
  return Object.assign(r, {
    config: e,
    dispatchEvent: Sv.bind(r),
    dispatchUIEvent: n0.bind(r),
    system: t,
    levelRefs: {},
    ..._d
  }), {
    instance: r,
    api: {
      ...Object.fromEntries(Object.entries(_d).map(([n, a]) => [
        n,
        oM(r, a)
      ])),
      setup: aM.bind(r)
    }
  };
}
function iM(e, t, r) {
  var n, a;
  return (a = (n = e.document) !== null && n !== void 0 ? n : t && s0(t)) !== null && a !== void 0 ? a : r.document;
}
function lM(e) {
  return K().api.clear(e);
}
function sM(e, t = {}) {
  return K(t, e).api.click(e);
}
function uM(e = {}) {
  return K(e).api.copy();
}
function cM(e = {}) {
  return K(e).api.cut();
}
function dM(e, t = {}) {
  return K(t).api.dblClick(e);
}
function fM(e, t, r = {}) {
  return K(r).api.deselectOptions(e, t);
}
function pM(e, t = {}) {
  return K(t).api.hover(e);
}
async function mM(e, t = {}) {
  const { api: r, system: n } = K(t);
  return r.keyboard(e).then(() => n);
}
async function vM(e, t = {}) {
  const { api: r, system: n } = K(t);
  return r.pointer(e).then(() => n);
}
function yM(e, t) {
  return K(t).api.paste(e);
}
function bM(e, t, r = {}) {
  return K(r).api.selectOptions(e, t);
}
function hM(e, t = {}) {
  return K(t).api.tripleClick(e);
}
function gM(e, t, r = {}) {
  return K(r, e).api.type(e, t, r);
}
function EM(e, t = {}) {
  const { api: r, system: n } = K(t);
  return n.pointer.setMousePosition({
    target: e
  }), r.unhover(e);
}
function _M(e, t, r = {}) {
  return K(r).api.upload(e, t);
}
function RM(e = {}) {
  return K().api.tab(e);
}
const wM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: lM,
  click: sM,
  copy: uM,
  cut: cM,
  dblClick: dM,
  deselectOptions: fM,
  hover: pM,
  keyboard: mM,
  paste: yM,
  pointer: vM,
  selectOptions: bM,
  tab: RM,
  tripleClick: hM,
  type: gM,
  unhover: EM,
  upload: _M
}, Symbol.toStringTag, { value: "Module" })), Rd = {
  ...wM,
  setup: nM
};
var V = (() => {
  let e;
  return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ? e = self : e = {}, e;
})(), { LOGLEVEL: CM } = V, Me = { trace: 1, debug: 2, info: 3, warn: 4, error: 5, silent: 10 }, PM = CM, gt = Me[PM] || Me.info, jv = { trace: (e, ...t) => {
  gt <= Me.trace && console.trace(e, ...t);
}, debug: (e, ...t) => {
  gt <= Me.debug && console.debug(e, ...t);
}, info: (e, ...t) => {
  gt <= Me.info && console.info(e, ...t);
}, warn: (e, ...t) => {
  gt <= Me.warn && console.warn(e, ...t);
}, error: (e, ...t) => {
  gt <= Me.error && console.error(e, ...t);
}, log: (e, ...t) => {
  gt < Me.silent && console.log(e, ...t);
} }, Ql = /* @__PURE__ */ new Set(), X = (e) => (t, ...r) => {
  if (!Ql.has(t))
    return Ql.add(t), jv[e](t, ...r);
};
X.clear = () => Ql.clear();
X.trace = X("trace");
X.debug = X("debug");
X.info = X("info");
X.warn = X("warn");
X.error = X("error");
X.log = X("log");
var SM = (e) => e.transports !== void 0, TM = () => Math.random().toString(16).slice(2), AM = class {
  constructor(e = {}) {
    this.sender = TM(), this.events = {}, this.data = {}, this.transports = [], this.isAsync = e.async || !1, SM(e) ? (this.transports = e.transports || [], this.transports.forEach((t) => {
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
    let a = () => {
      this.transports.forEach((o) => {
        o.send(r, n);
      }), this.handleEvent(r);
    };
    this.isAsync ? setImmediate(a) : a();
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
}, Uv = ((e) => (e.CHANNEL_CREATED = "channelCreated", e.CONFIG_ERROR = "configError", e.STORY_INDEX_INVALIDATED = "storyIndexInvalidated", e.STORY_SPECIFIED = "storySpecified", e.SET_CONFIG = "setConfig", e.SET_STORIES = "setStories", e.SET_INDEX = "setIndex", e.SET_CURRENT_STORY = "setCurrentStory", e.CURRENT_STORY_WAS_SET = "currentStoryWasSet", e.FORCE_RE_RENDER = "forceReRender", e.FORCE_REMOUNT = "forceRemount", e.PRELOAD_ENTRIES = "preloadStories", e.STORY_PREPARED = "storyPrepared", e.DOCS_PREPARED = "docsPrepared", e.STORY_CHANGED = "storyChanged", e.STORY_UNCHANGED = "storyUnchanged", e.STORY_RENDERED = "storyRendered", e.STORY_MISSING = "storyMissing", e.STORY_ERRORED = "storyErrored", e.STORY_THREW_EXCEPTION = "storyThrewException", e.STORY_RENDER_PHASE_CHANGED = "storyRenderPhaseChanged", e.PLAY_FUNCTION_THREW_EXCEPTION = "playFunctionThrewException", e.UPDATE_STORY_ARGS = "updateStoryArgs", e.STORY_ARGS_UPDATED = "storyArgsUpdated", e.RESET_STORY_ARGS = "resetStoryArgs", e.SET_GLOBALS = "setGlobals", e.UPDATE_GLOBALS = "updateGlobals", e.GLOBALS_UPDATED = "globalsUpdated", e.REGISTER_SUBSCRIPTION = "registerSubscription", e.PREVIEW_KEYDOWN = "previewKeydown", e.PREVIEW_BUILDER_PROGRESS = "preview_builder_progress", e.SELECT_STORY = "selectStory", e.STORIES_COLLAPSE_ALL = "storiesCollapseAll", e.STORIES_EXPAND_ALL = "storiesExpandAll", e.DOCS_RENDERED = "docsRendered", e.SHARED_STATE_CHANGED = "sharedStateChanged", e.SHARED_STATE_SET = "sharedStateSet", e.NAVIGATE_URL = "navigateUrl", e.UPDATE_QUERY_PARAMS = "updateQueryParams", e.REQUEST_WHATS_NEW_DATA = "requestWhatsNewData", e.RESULT_WHATS_NEW_DATA = "resultWhatsNewData", e.SET_WHATS_NEW_CACHE = "setWhatsNewCache", e.TOGGLE_WHATS_NEW_NOTIFICATIONS = "toggleWhatsNewNotifications", e.TELEMETRY_ERROR = "telemetryError", e))(Uv || {}), { CHANNEL_CREATED: sN, CONFIG_ERROR: uN, CURRENT_STORY_WAS_SET: cN, DOCS_PREPARED: dN, DOCS_RENDERED: fN, FORCE_RE_RENDER: pN, FORCE_REMOUNT: wd, GLOBALS_UPDATED: mN, NAVIGATE_URL: vN, PLAY_FUNCTION_THREW_EXCEPTION: yN, PRELOAD_ENTRIES: bN, PREVIEW_BUILDER_PROGRESS: hN, PREVIEW_KEYDOWN: gN, REGISTER_SUBSCRIPTION: EN, RESET_STORY_ARGS: _N, SELECT_STORY: RN, SET_CONFIG: wN, SET_CURRENT_STORY: OM, SET_GLOBALS: CN, SET_INDEX: PN, SET_STORIES: SN, SHARED_STATE_CHANGED: TN, SHARED_STATE_SET: AN, STORIES_COLLAPSE_ALL: ON, STORIES_EXPAND_ALL: $N, STORY_ARGS_UPDATED: xN, STORY_CHANGED: qN, STORY_ERRORED: IN, STORY_INDEX_INVALIDATED: MN, STORY_MISSING: NN, STORY_PREPARED: BN, STORY_RENDER_PHASE_CHANGED: $M, STORY_RENDERED: kN, STORY_SPECIFIED: DN, STORY_THREW_EXCEPTION: LN, STORY_UNCHANGED: FN, UPDATE_GLOBALS: jN, UPDATE_QUERY_PARAMS: UN, UPDATE_STORY_ARGS: HN, REQUEST_WHATS_NEW_DATA: WN, RESULT_WHATS_NEW_DATA: VN, SET_WHATS_NEW_CACHE: GN, TOGGLE_WHATS_NEW_NOTIFICATIONS: zN, TELEMETRY_ERROR: YN } = Uv, xM = new Error("ignoredException");
function qM() {
  let e = { setHandler: () => {
  }, send: () => {
  } };
  return new AM({ transport: e });
}
var IM = class {
  constructor() {
    this.getChannel = () => {
      if (!this.channel) {
        let e = qM();
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
}, cl = "__STORYBOOK_ADDONS_PREVIEW";
function MM() {
  return V[cl] || (V[cl] = new IM()), V[cl];
}
var NM = MM(), BM = ((e) => (e.DONE = "done", e.ERROR = "error", e.ACTIVE = "active", e.WAITING = "waiting", e))(BM || {}), ye = { CALL: "storybook/instrumenter/call", SYNC: "storybook/instrumenter/sync", START: "storybook/instrumenter/start", BACK: "storybook/instrumenter/back", GOTO: "storybook/instrumenter/goto", NEXT: "storybook/instrumenter/next", END: "storybook/instrumenter/end" }, Cd = { start: !1, back: !1, goto: !1, next: !1, end: !1 }, Pd = new Error("This function ran after the play function completed. Did you forget to `await` it?"), Sd = (e) => Object.prototype.toString.call(e) === "[object Object]", kM = (e) => Object.prototype.toString.call(e) === "[object Module]", DM = (e) => {
  if (!Sd(e) && !kM(e))
    return !1;
  if (e.constructor === void 0)
    return !0;
  let t = e.constructor.prototype;
  return !(!Sd(t) || Object.prototype.hasOwnProperty.call(t, "isPrototypeOf") === !1);
}, LM = (e) => {
  try {
    return new e.constructor();
  } catch {
    return {};
  }
}, dl = () => ({ renderPhase: void 0, isDebugging: !1, isPlaying: !1, isLocked: !1, cursor: 0, calls: [], shadowCalls: [], callRefsByResult: /* @__PURE__ */ new Map(), chainedCallIds: /* @__PURE__ */ new Set(), ancestors: [], playUntil: void 0, resolvers: {}, syncTimeout: void 0 }), Td = (e, t = !1) => {
  let r = (t ? e.shadowCalls : e.calls).filter((a) => a.retain);
  if (!r.length)
    return;
  let n = new Map(Array.from(e.callRefsByResult.entries()).filter(([, a]) => a.retain));
  return { cursor: r.length, calls: r, callRefsByResult: n };
}, FM = class {
  constructor() {
    this.initialized = !1, this.channel = NM.getChannel(), this.state = V.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {};
    let e = ({ storyId: i, isPlaying: s = !0, isDebugging: l = !1 }) => {
      let u = this.getState(i);
      this.setState(i, { ...dl(), ...Td(u, l), shadowCalls: l ? u.shadowCalls : [], chainedCallIds: l ? u.chainedCallIds : /* @__PURE__ */ new Set(), playUntil: l ? u.playUntil : void 0, isPlaying: s, isDebugging: l }), this.sync(i);
    };
    this.channel.on(wd, e), this.channel.on($M, ({ storyId: i, newPhase: s }) => {
      let { isDebugging: l } = this.getState(i);
      this.setState(i, { renderPhase: s }), s === "preparing" && l && e({ storyId: i }), s === "playing" && e({ storyId: i, isDebugging: l }), s === "played" && this.setState(i, { isLocked: !1, isPlaying: !1, isDebugging: !1 }), s === "errored" && this.setState(i, { isLocked: !1, isPlaying: !1 });
    }), this.channel.on(OM, () => {
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
      }), this.channel.emit(wd, { storyId: i, isDebugging: !0 });
    }, r = ({ storyId: i }) => {
      var u;
      let s = this.getLog(i).filter((c) => !c.ancestors.length), l = s.reduceRight((c, d, f) => c >= 0 || d.status === "waiting" ? c : f, -1);
      t({ storyId: i, playUntil: (u = s[l - 1]) == null ? void 0 : u.callId });
    }, n = ({ storyId: i, callId: s }) => {
      var v;
      let { calls: l, shadowCalls: u, resolvers: c } = this.getState(i), d = l.find(({ id: y }) => y === s), f = u.find(({ id: y }) => y === s);
      if (!d && f && Object.values(c).length > 0) {
        let y = (v = this.getLog(i).find((b) => b.status === "waiting")) == null ? void 0 : v.callId;
        f.id !== y && this.setState(i, { playUntil: f.id }), Object.values(c).forEach((b) => b());
      } else
        t({ storyId: i, playUntil: s });
    }, a = ({ storyId: i }) => {
      var l;
      let { resolvers: s } = this.getState(i);
      if (Object.values(s).length > 0)
        Object.values(s).forEach((u) => u());
      else {
        let u = (l = this.getLog(i).find((c) => c.status === "waiting")) == null ? void 0 : l.callId;
        u ? t({ storyId: i, playUntil: u }) : o({ storyId: i });
      }
    }, o = ({ storyId: i }) => {
      this.setState(i, { playUntil: void 0, isDebugging: !1 }), Object.values(this.getState(i).resolvers).forEach((s) => s());
    };
    this.channel.on(ye.START, t), this.channel.on(ye.BACK, r), this.channel.on(ye.GOTO, n), this.channel.on(ye.NEXT, a), this.channel.on(ye.END, o);
  }
  getState(e) {
    return this.state[e] || dl();
  }
  setState(e, t) {
    let r = this.getState(e), n = typeof t == "function" ? t(r) : t;
    this.state = { ...this.state, [e]: { ...r, ...n } }, V.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
  }
  cleanup() {
    this.state = Object.entries(this.state).reduce((t, [r, n]) => {
      let a = Td(n);
      return a && (t[r] = Object.assign(dl(), a)), t;
    }, {});
    let e = { controlStates: Cd, logItems: [] };
    this.channel.emit(ye.SYNC, e), V.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
  }
  getLog(e) {
    let { calls: t, shadowCalls: r } = this.getState(e), n = [...r];
    t.forEach((o, i) => {
      n[i] = o;
    });
    let a = /* @__PURE__ */ new Set();
    return n.reduceRight((o, i) => (i.args.forEach((s) => {
      s != null && s.__callId__ && a.add(s.__callId__);
    }), i.path.forEach((s) => {
      s.__callId__ && a.add(s.__callId__);
    }), (i.interceptable || i.exception) && !a.has(i.id) && (o.unshift({ callId: i.id, status: i.status, ancestors: i.ancestors }), a.add(i.id)), o), []);
  }
  instrument(e, t) {
    if (!DM(e))
      return e;
    let { mutate: r = !1, path: n = [] } = t;
    return Object.keys(e).reduce((a, o) => {
      let i = e[o];
      return typeof i != "function" ? (a[o] = this.instrument(i, { ...t, path: n.concat(o) }), a) : typeof i.__originalFn__ == "function" ? (a[o] = i, a) : (a[o] = (...s) => this.track(o, i, s, t), a[o].__originalFn__ = i, Object.defineProperty(a[o], "name", { value: o, writable: !1 }), Object.keys(i).length > 0 && Object.assign(a[o], this.instrument({ ...i }, { ...t, path: n.concat(o) })), a);
    }, r ? e : LM(e));
  }
  track(e, t, r, n) {
    var y, b, C, p;
    let a = ((y = r == null ? void 0 : r[0]) == null ? void 0 : y.__storyId__) || ((p = (C = (b = V.__STORYBOOK_PREVIEW__) == null ? void 0 : b.selectionStore) == null ? void 0 : C.selection) == null ? void 0 : p.storyId), { cursor: o, ancestors: i } = this.getState(a);
    this.setState(a, { cursor: o + 1 });
    let s = `${i.slice(-1)[0] || a} [${o}] ${e}`, { path: l = [], intercept: u = !1, retain: c = !1 } = n, d = typeof u == "function" ? u(e, l) : u, f = { id: s, cursor: o, storyId: a, ancestors: i, path: l, method: e, args: r, interceptable: d, retain: c }, v = (d && !i.length ? this.intercept : this.invoke).call(this, t, f, n);
    return this.instrument(v, { ...n, mutate: !0, path: [{ __callId__: f.id }] });
  }
  intercept(e, t, r) {
    let { chainedCallIds: n, isDebugging: a, playUntil: o } = this.getState(t.storyId), i = n.has(t.id);
    return !a || i || o ? (o === t.id && this.setState(t.storyId, { playUntil: void 0 }), this.invoke(e, t, r)) : new Promise((s) => {
      this.setState(t.storyId, ({ resolvers: l }) => ({ isLocked: !1, resolvers: { ...l, [t.id]: s } }));
    }).then(() => (this.setState(t.storyId, (s) => {
      let { [t.id]: l, ...u } = s.resolvers;
      return { isLocked: !0, resolvers: u };
    }), this.invoke(e, t, r)));
  }
  invoke(e, t, r) {
    let { callRefsByResult: n, renderPhase: a } = this.getState(t.storyId), o = (l) => {
      var u, c;
      if (n.has(l))
        return n.get(l);
      if (l instanceof Array)
        return l.map(o);
      if (l instanceof Date)
        return { __date__: { value: l.toISOString() } };
      if (l instanceof Error) {
        let { name: d, message: f, stack: v } = l;
        return { __error__: { name: d, message: f, stack: v } };
      }
      if (l instanceof RegExp) {
        let { flags: d, source: f } = l;
        return { __regexp__: { flags: d, source: f } };
      }
      if (l instanceof V.window.HTMLElement) {
        let { prefix: d, localName: f, id: v, classList: y, innerText: b } = l, C = Array.from(y);
        return { __element__: { prefix: d, localName: f, id: v, classNames: C, innerText: b } };
      }
      return typeof l == "function" ? { __function__: { name: l.name } } : typeof l == "symbol" ? { __symbol__: { description: l.description } } : typeof l == "object" && ((u = l == null ? void 0 : l.constructor) != null && u.name) && ((c = l == null ? void 0 : l.constructor) == null ? void 0 : c.name) !== "Object" ? { __class__: { name: l.constructor.name } } : Object.prototype.toString.call(l) === "[object Object]" ? Object.fromEntries(Object.entries(l).map(([d, f]) => [d, o(f)])) : l;
    }, i = { ...t, args: t.args.map(o) };
    t.path.forEach((l) => {
      l != null && l.__callId__ && this.setState(t.storyId, ({ chainedCallIds: u }) => ({ chainedCallIds: new Set(Array.from(u).concat(l.__callId__)) }));
    });
    let s = (l) => {
      if (l instanceof Error) {
        let { name: u, message: c, stack: d, callId: f = t.id } = l, v = { name: u, message: c, stack: d, callId: f };
        if (this.update({ ...i, status: "error", exception: v }), this.setState(t.storyId, (y) => ({ callRefsByResult: new Map([...Array.from(y.callRefsByResult.entries()), [l, { __callId__: t.id, retain: t.retain }]]) })), t.ancestors.length)
          throw Object.prototype.hasOwnProperty.call(l, "callId") || Object.defineProperty(l, "callId", { value: t.id }), l;
        if (l !== Pd)
          throw jv.warn(l), xM;
      }
      throw l;
    };
    try {
      if (a === "played" && !t.retain)
        throw Pd;
      let l = (r.getArgs ? r.getArgs(t, this.getState(t.storyId)) : t.args).map((c) => typeof c != "function" || Object.keys(c).length ? c : (...d) => {
        let { cursor: f, ancestors: v } = this.getState(t.storyId);
        this.setState(t.storyId, { cursor: 0, ancestors: [...v, t.id] });
        let y = () => this.setState(t.storyId, { cursor: f, ancestors: v }), b = !1;
        try {
          let C = c(...d);
          return C instanceof Promise ? (b = !0, C.finally(y)) : C;
        } finally {
          b || y();
        }
      }), u = e(...l);
      return u && ["object", "function", "symbol"].includes(typeof u) && this.setState(t.storyId, (c) => ({ callRefsByResult: new Map([...Array.from(c.callRefsByResult.entries()), [u, { __callId__: t.id, retain: t.retain }]]) })), this.update({ ...i, status: u instanceof Promise ? "active" : "done" }), u instanceof Promise ? u.then((c) => (this.update({ ...i, status: "done" }), c), s) : u;
    } catch (l) {
      return s(l);
    }
  }
  update(e) {
    this.channel.emit(ye.CALL, e), this.setState(e.storyId, ({ calls: t }) => {
      let r = t.concat(e).reduce((n, a) => Object.assign(n, { [a.id]: a }), {});
      return { calls: Object.values(r).sort((n, a) => n.id.localeCompare(a.id, void 0, { numeric: !0 })) };
    }), this.sync(e.storyId);
  }
  sync(e) {
    let t = () => {
      var u;
      let { isLocked: r, isPlaying: n } = this.getState(e), a = this.getLog(e), o = (u = a.filter(({ ancestors: c }) => !c.length).find((c) => c.status === "waiting")) == null ? void 0 : u.callId, i = a.some((c) => c.status === "active");
      if (r || i || a.length === 0) {
        let c = { controlStates: Cd, logItems: a };
        this.channel.emit(ye.SYNC, c);
        return;
      }
      let s = a.some((c) => c.status === "done" || c.status === "error"), l = { controlStates: { start: s, back: s, goto: !0, next: n, end: n }, logItems: a, pausedAt: o };
      this.channel.emit(ye.SYNC, l);
    };
    this.setState(e, ({ syncTimeout: r }) => (clearTimeout(r), { syncTimeout: setTimeout(t, 0) }));
  }
};
function Hv(e, t = {}) {
  var r, n, a, o;
  try {
    let i = !1, s = !1;
    return (n = (r = V.window.location) == null ? void 0 : r.search) != null && n.includes("instrument=true") ? i = !0 : (o = (a = V.window.location) == null ? void 0 : a.search) != null && o.includes("instrument=false") && (s = !0), V.window.parent === V.window && !i || s ? e : (V.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ || (V.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new FM()), V.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(e, t));
  } catch (i) {
    return X.warn(i), e;
  }
}
var jM = Rd.default || Rd, Xr = Hv(
  { ...rI },
  {
    intercept: (e, t) => t[0] === "fireEvent" || e.startsWith("findBy") || e.startsWith("waitFor")
  }
);
Xr.screen = Object.entries(Xr.screen).reduce(
  (e, [t, r]) => Object.defineProperty(e, t, {
    get() {
      return X.warn(ny`
          You are using Testing Library's \`screen\` object. Use \`within(canvasElement)\` instead.
          More info: https://storybook.js.org/docs/react/essentials/interactions
        `), r;
    }
  }),
  { ...Xr.screen }
);
var {
  buildQueries: KN,
  configure: XN,
  createEvent: QN,
  findAllByAltText: JN,
  findAllByDisplayValue: ZN,
  findAllByLabelText: eB,
  findAllByPlaceholderText: tB,
  findAllByRole: rB,
  findAllByTestId: nB,
  findAllByText: aB,
  findAllByTitle: oB,
  findByAltText: iB,
  findByDisplayValue: lB,
  findByLabelText: sB,
  findByPlaceholderText: uB,
  findByRole: cB,
  findByTestId: dB,
  findByText: fB,
  findByTitle: pB,
  fireEvent: mB,
  getAllByAltText: vB,
  getAllByDisplayValue: yB,
  getAllByLabelText: bB,
  getAllByPlaceholderText: hB,
  getAllByRole: gB,
  getAllByTestId: EB,
  getAllByText: _B,
  getAllByTitle: RB,
  getByAltText: wB,
  getByDisplayValue: CB,
  getByLabelText: PB,
  getByPlaceholderText: SB,
  getByRole: TB,
  getByTestId: AB,
  getByText: OB,
  getByTitle: $B,
  getConfig: xB,
  getDefaultNormalizer: qB,
  getElementError: IB,
  getNodeText: MB,
  getQueriesForElement: NB,
  getRoles: BB,
  getSuggestedQuery: kB,
  isInaccessible: DB,
  logDOM: LB,
  logRoles: FB,
  prettyDOM: jB,
  queries: UB,
  queryAllByAltText: HB,
  queryAllByAttribute: WB,
  queryAllByDisplayValue: VB,
  queryAllByLabelText: GB,
  queryAllByPlaceholderText: zB,
  queryAllByRole: YB,
  queryAllByTestId: KB,
  queryAllByText: XB,
  queryAllByTitle: QB,
  queryByAltText: JB,
  queryByAttribute: ZB,
  queryByDisplayValue: ek,
  queryByLabelText: tk,
  queryByPlaceholderText: rk,
  queryByRole: nk,
  queryByTestId: ak,
  queryByText: ok,
  queryByTitle: ik,
  queryHelpers: lk,
  screen: sk,
  waitFor: uk,
  waitForElementToBeRemoved: ck,
  within: dk,
  prettyFormat: fk
} = Xr, pk = Hv(
  { userEvent: jM },
  { intercept: !0 }
).userEvent;
export {
  pk as u,
  dk as w
};
