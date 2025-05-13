import { a as Xv, c as Qr, g as Qv } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { d as Jv } from "./storybook-index-398c73a4.es.js";
function Zv(e, t) {
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
var _e = {}, Kl = { exports: {} };
Kl.exports;
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
})(Kl);
var wd = Kl.exports, we = {};
Object.defineProperty(we, "__esModule", {
  value: !0
});
we.printIteratorEntries = ty;
we.printIteratorValues = ry;
we.printListItems = ny;
we.printObjectProperties = ay;
const ey = (e, t) => {
  const r = Object.keys(e).sort(t);
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((n) => {
    Object.getOwnPropertyDescriptor(e, n).enumerable && r.push(n);
  }), r;
};
function ty(e, t, r, n, a, o, i = ": ") {
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
function ry(e, t, r, n, a, o) {
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
function ny(e, t, r, n, a, o) {
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
function ay(e, t, r, n, a, o) {
  let i = "";
  const s = ey(e, t.compareKeys);
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
var Ls = we, Jr = function() {
  return typeof globalThis < "u" ? globalThis : typeof Jr < "u" ? Jr : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), hi = Jr["jest-symbol-do-not-touch"] || Jr.Symbol;
const oy = typeof hi == "function" && hi.for ? hi.for("jest.asymmetricMatcher") : 1267621, wr = " ", Cd = (e, t, r, n, a, o) => {
  const i = e.toString();
  return i === "ArrayContaining" || i === "ArrayNotContaining" ? ++n > t.maxDepth ? "[" + i + "]" : i + wr + "[" + (0, Ls.printListItems)(
    e.sample,
    t,
    r,
    n,
    a,
    o
  ) + "]" : i === "ObjectContaining" || i === "ObjectNotContaining" ? ++n > t.maxDepth ? "[" + i + "]" : i + wr + "{" + (0, Ls.printObjectProperties)(
    e.sample,
    t,
    r,
    n,
    a,
    o
  ) + "}" : i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining" ? i + wr + o(e.sample, t, r, n, a) : e.toAsymmetricMatcher();
};
ke.serialize = Cd;
const Pd = (e) => e && e.$$typeof === oy;
ke.test = Pd;
const iy = {
  serialize: Cd,
  test: Pd
};
var ly = iy;
ke.default = ly;
var De = {}, sy = ({ onlyFirst: e = !1 } = {}) => {
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
var Sd = Td(sy), k = Td(wd);
function Td(e) {
  return e && e.__esModule ? e : { default: e };
}
const uy = (e) => e.replace((0, Sd.default)(), (t) => {
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
}), Ad = (e) => typeof e == "string" && !!e.match((0, Sd.default)());
De.test = Ad;
const Od = (e, t, r, n, a, o) => o(uy(e), t, r, n, a);
De.serialize = Od;
const cy = {
  serialize: Od,
  test: Ad
};
var dy = cy;
De.default = dy;
var Le = {};
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.test = Le.serialize = Le.default = void 0;
var Fs = we;
const fy = " ", $d = ["DOMStringMap", "NamedNodeMap"], py = /^(HTML\w*Collection|NodeList)$/, my = (e) => $d.indexOf(e) !== -1 || py.test(e), xd = (e) => e && e.constructor && !!e.constructor.name && my(e.constructor.name);
Le.test = xd;
const vy = (e) => e.constructor.name === "NamedNodeMap", qd = (e, t, r, n, a, o) => {
  const i = e.constructor.name;
  return ++n > t.maxDepth ? "[" + i + "]" : (t.min ? "" : i + fy) + ($d.indexOf(i) !== -1 ? "{" + (0, Fs.printObjectProperties)(
    vy(e) ? Array.from(e).reduce((s, l) => (s[l.name] = l.value, s), {}) : { ...e },
    t,
    r,
    n,
    a,
    o
  ) + "}" : "[" + (0, Fs.printListItems)(
    Array.from(e),
    t,
    r,
    n,
    a,
    o
  ) + "]");
};
Le.serialize = qd;
const yy = {
  serialize: qd,
  test: xd
};
var by = yy;
Le.default = by;
var Fe = {}, G = {}, Xl = {};
Object.defineProperty(Xl, "__esModule", {
  value: !0
});
Xl.default = hy;
function hy(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(G, "__esModule", {
  value: !0
});
G.printText = G.printProps = G.printElementAsLeaf = G.printElement = G.printComment = G.printChildren = void 0;
var Id = gy(Xl);
function gy(e) {
  return e && e.__esModule ? e : { default: e };
}
const Ey = (e, t, r, n, a, o, i) => {
  const s = n + r.indent, l = r.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, r, s, a, o);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = r.spacingOuter + s + d + r.spacingOuter + n), d = "{" + d + "}"), r.spacingInner + n + l.prop.open + u + l.prop.close + "=" + l.value.open + d + l.value.close;
  }).join("");
};
G.printProps = Ey;
const _y = (e, t, r, n, a, o) => e.map(
  (i) => t.spacingOuter + r + (typeof i == "string" ? Md(i, t) : o(i, t, r, n, a))
).join("");
G.printChildren = _y;
const Md = (e, t) => {
  const r = t.colors.content;
  return r.open + (0, Id.default)(e) + r.close;
};
G.printText = Md;
const Ry = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + (0, Id.default)(e) + "-->" + r.close;
};
G.printComment = Ry;
const wy = (e, t, r, n, a) => {
  const o = n.colors.tag;
  return o.open + "<" + e + (t && o.close + t + n.spacingOuter + a + o.open) + (r ? ">" + o.close + r + n.spacingOuter + a + o.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + o.close;
};
G.printElement = wy;
const Cy = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
};
G.printElementAsLeaf = Cy;
Object.defineProperty(Fe, "__esModule", {
  value: !0
});
Fe.test = Fe.serialize = Fe.default = void 0;
var pt = G;
const Py = 1, Nd = 3, Bd = 8, kd = 11, Sy = /^((HTML|SVG)\w*)?Element$/, Ty = (e) => {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}, Ay = (e) => {
  const t = e.constructor.name, { nodeType: r, tagName: n } = e, a = typeof n == "string" && n.includes("-") || Ty(e);
  return r === Py && (Sy.test(t) || a) || r === Nd && t === "Text" || r === Bd && t === "Comment" || r === kd && t === "DocumentFragment";
}, Dd = (e) => {
  var t;
  return (e == null || (t = e.constructor) === null || t === void 0 ? void 0 : t.name) && Ay(e);
};
Fe.test = Dd;
function Oy(e) {
  return e.nodeType === Nd;
}
function $y(e) {
  return e.nodeType === Bd;
}
function gi(e) {
  return e.nodeType === kd;
}
const Ld = (e, t, r, n, a, o) => {
  if (Oy(e))
    return (0, pt.printText)(e.data, t);
  if ($y(e))
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
Fe.serialize = Ld;
const xy = {
  serialize: Ld,
  test: Dd
};
var qy = xy;
Fe.default = qy;
var je = {};
Object.defineProperty(je, "__esModule", {
  value: !0
});
je.test = je.serialize = je.default = void 0;
var tr = we;
const Iy = "@@__IMMUTABLE_ITERABLE__@@", My = "@@__IMMUTABLE_LIST__@@", Ny = "@@__IMMUTABLE_KEYED__@@", By = "@@__IMMUTABLE_MAP__@@", js = "@@__IMMUTABLE_ORDERED__@@", ky = "@@__IMMUTABLE_RECORD__@@", Dy = "@@__IMMUTABLE_SEQ__@@", Ly = "@@__IMMUTABLE_SET__@@", Fy = "@@__IMMUTABLE_STACK__@@", Pt = (e) => "Immutable." + e, Rn = (e) => "[" + e + "]", rr = " ", Us = "…", jy = (e, t, r, n, a, o, i) => ++n > t.maxDepth ? Rn(Pt(i)) : Pt(i) + rr + "{" + (0, tr.printIteratorEntries)(
  e.entries(),
  t,
  r,
  n,
  a,
  o
) + "}";
function Uy(e) {
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
const Hy = (e, t, r, n, a, o) => {
  const i = Pt(e._name || "Record");
  return ++n > t.maxDepth ? Rn(i) : i + rr + "{" + (0, tr.printIteratorEntries)(
    Uy(e),
    t,
    r,
    n,
    a,
    o
  ) + "}";
}, Wy = (e, t, r, n, a, o) => {
  const i = Pt("Seq");
  return ++n > t.maxDepth ? Rn(i) : e[Ny] ? i + rr + "{" + // from Immutable collection of entries or from ECMAScript object
  (e._iter || e._object ? (0, tr.printIteratorEntries)(
    e.entries(),
    t,
    r,
    n,
    a,
    o
  ) : Us) + "}" : i + rr + "[" + (e._iter || // from Immutable collection of values
  e._array || // from ECMAScript array
  e._collection || // from ECMAScript collection in immutable v4
  e._iterable ? (0, tr.printIteratorValues)(
    e.values(),
    t,
    r,
    n,
    a,
    o
  ) : Us) + "]";
}, Ei = (e, t, r, n, a, o, i) => ++n > t.maxDepth ? Rn(Pt(i)) : Pt(i) + rr + "[" + (0, tr.printIteratorValues)(
  e.values(),
  t,
  r,
  n,
  a,
  o
) + "]", Fd = (e, t, r, n, a, o) => e[By] ? jy(
  e,
  t,
  r,
  n,
  a,
  o,
  e[js] ? "OrderedMap" : "Map"
) : e[My] ? Ei(
  e,
  t,
  r,
  n,
  a,
  o,
  "List"
) : e[Ly] ? Ei(
  e,
  t,
  r,
  n,
  a,
  o,
  e[js] ? "OrderedSet" : "Set"
) : e[Fy] ? Ei(
  e,
  t,
  r,
  n,
  a,
  o,
  "Stack"
) : e[Dy] ? Wy(e, t, r, n, a, o) : Hy(e, t, r, n, a, o);
je.serialize = Fd;
const jd = (e) => e && (e[Iy] === !0 || e[ky] === !0);
je.test = jd;
const Vy = {
  serialize: Fd,
  test: jd
};
var Gy = Vy;
je.default = Gy;
var Ue = {}, ul = { exports: {} }, N = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hs;
function zy() {
  if (Hs)
    return N;
  Hs = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, a = 60114, o = 60109, i = 60110, s = 60112, l = 60113, u = 60120, c = 60115, d = 60116, f = 60121, v = 60122, y = 60117, h = 60129, P = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var p = Symbol.for;
    e = p("react.element"), t = p("react.portal"), r = p("react.fragment"), n = p("react.strict_mode"), a = p("react.profiler"), o = p("react.provider"), i = p("react.context"), s = p("react.forward_ref"), l = p("react.suspense"), u = p("react.suspense_list"), c = p("react.memo"), d = p("react.lazy"), f = p("react.block"), v = p("react.server.block"), y = p("react.fundamental"), h = p("react.debug_trace_mode"), P = p("react.legacy_hidden");
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
  var C = o, R = e, S = s, m = r, b = d, g = c, I = t, j = a, F = n, U = l;
  return N.ContextConsumer = i, N.ContextProvider = C, N.Element = R, N.ForwardRef = S, N.Fragment = m, N.Lazy = b, N.Memo = g, N.Portal = I, N.Profiler = j, N.StrictMode = F, N.Suspense = U, N.isAsyncMode = function() {
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
    return typeof w == "string" || typeof w == "function" || w === r || w === a || w === h || w === n || w === l || w === u || w === P || typeof w == "object" && w !== null && (w.$$typeof === d || w.$$typeof === c || w.$$typeof === o || w.$$typeof === i || w.$$typeof === s || w.$$typeof === y || w.$$typeof === f || w[0] === v);
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
var Ws;
function Yy() {
  return Ws || (Ws = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, a = 60114, o = 60109, i = 60110, s = 60112, l = 60113, u = 60120, c = 60115, d = 60116, f = 60121, v = 60122, y = 60117, h = 60129, P = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var p = Symbol.for;
      e = p("react.element"), t = p("react.portal"), r = p("react.fragment"), n = p("react.strict_mode"), a = p("react.profiler"), o = p("react.provider"), i = p("react.context"), s = p("react.forward_ref"), l = p("react.suspense"), u = p("react.suspense_list"), c = p("react.memo"), d = p("react.lazy"), f = p("react.block"), v = p("react.server.block"), y = p("react.fundamental"), p("react.scope"), p("react.opaque.id"), h = p("react.debug_trace_mode"), p("react.offscreen"), P = p("react.legacy_hidden");
    }
    var E = !1;
    function C(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === r || T === a || T === h || T === n || T === l || T === u || T === P || E || typeof T == "object" && T !== null && (T.$$typeof === d || T.$$typeof === c || T.$$typeof === o || T.$$typeof === i || T.$$typeof === s || T.$$typeof === y || T.$$typeof === f || T[0] === v));
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
                var Ds = Rr && Rr.$$typeof;
                switch (Ds) {
                  case i:
                  case s:
                  case d:
                  case c:
                  case o:
                    return Ds;
                  default:
                    return bi;
                }
            }
          case t:
            return bi;
        }
      }
    }
    var S = i, m = o, b = e, g = s, I = r, j = d, F = c, U = t, w = a, A = n, M = l, H = !1, Z = !1;
    function Xe(T) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function yi(T) {
      return Z || (Z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Lv(T) {
      return R(T) === i;
    }
    function Fv(T) {
      return R(T) === o;
    }
    function jv(T) {
      return typeof T == "object" && T !== null && T.$$typeof === e;
    }
    function Uv(T) {
      return R(T) === s;
    }
    function Hv(T) {
      return R(T) === r;
    }
    function Wv(T) {
      return R(T) === d;
    }
    function Vv(T) {
      return R(T) === c;
    }
    function Gv(T) {
      return R(T) === t;
    }
    function zv(T) {
      return R(T) === a;
    }
    function Yv(T) {
      return R(T) === n;
    }
    function Kv(T) {
      return R(T) === l;
    }
    B.ContextConsumer = S, B.ContextProvider = m, B.Element = b, B.ForwardRef = g, B.Fragment = I, B.Lazy = j, B.Memo = F, B.Portal = U, B.Profiler = w, B.StrictMode = A, B.Suspense = M, B.isAsyncMode = Xe, B.isConcurrentMode = yi, B.isContextConsumer = Lv, B.isContextProvider = Fv, B.isElement = jv, B.isForwardRef = Uv, B.isFragment = Hv, B.isLazy = Wv, B.isMemo = Vv, B.isPortal = Gv, B.isProfiler = zv, B.isStrictMode = Yv, B.isSuspense = Kv, B.isValidElementType = C, B.typeOf = R;
  }()), B;
}
process.env.NODE_ENV === "production" ? ul.exports = zy() : ul.exports = Yy();
var Ky = ul.exports;
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.test = Ue.serialize = Ue.default = void 0;
var Ze = Xy(Ky), Cr = G;
function Ud(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Ud = function(n) {
    return n ? r : t;
  })(e);
}
function Xy(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Ud(t);
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
const Hd = (e, t = []) => (Array.isArray(e) ? e.forEach((r) => {
  Hd(r, t);
}) : e != null && e !== !1 && t.push(e), t), Vs = (e) => {
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
}, Qy = (e) => {
  const { props: t } = e;
  return Object.keys(t).filter((r) => r !== "children" && t[r] !== void 0).sort();
}, Wd = (e, t, r, n, a, o) => ++n > t.maxDepth ? (0, Cr.printElementAsLeaf)(Vs(e), t) : (0, Cr.printElement)(
  Vs(e),
  (0, Cr.printProps)(
    Qy(e),
    e.props,
    t,
    r + t.indent,
    n,
    a,
    o
  ),
  (0, Cr.printChildren)(
    Hd(e.props.children),
    t,
    r + t.indent,
    n,
    a,
    o
  ),
  t,
  r
);
Ue.serialize = Wd;
const Vd = (e) => e != null && Ze.isElement(e);
Ue.test = Vd;
const Jy = {
  serialize: Wd,
  test: Vd
};
var Zy = Jy;
Ue.default = Zy;
var He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.test = He.serialize = He.default = void 0;
var Pr = G, Zr = function() {
  return typeof globalThis < "u" ? globalThis : typeof Zr < "u" ? Zr : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), _i = Zr["jest-symbol-do-not-touch"] || Zr.Symbol;
const eb = typeof _i == "function" && _i.for ? _i.for("react.test.json") : 245830487, tb = (e) => {
  const { props: t } = e;
  return t ? Object.keys(t).filter((r) => t[r] !== void 0).sort() : [];
}, Gd = (e, t, r, n, a, o) => ++n > t.maxDepth ? (0, Pr.printElementAsLeaf)(e.type, t) : (0, Pr.printElement)(
  e.type,
  e.props ? (0, Pr.printProps)(
    tb(e),
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
He.serialize = Gd;
const zd = (e) => e && e.$$typeof === eb;
He.test = zd;
const rb = {
  serialize: Gd,
  test: zd
};
var nb = rb;
He.default = nb;
Object.defineProperty(_e, "__esModule", {
  value: !0
});
var Yd = _e.default = nf = _e.DEFAULT_OPTIONS = void 0, Kd = _e.format = sf, Ql = _e.plugins = void 0, ab = ze(wd), jt = we, ob = ze(
  ke
), ib = ze(De), lb = ze(Le), sb = ze(Fe), ub = ze(je), cb = ze(Ue), db = ze(
  He
);
function ze(e) {
  return e && e.__esModule ? e : { default: e };
}
const Xd = Object.prototype.toString, fb = Date.prototype.toISOString, pb = Error.prototype.toString, Gs = RegExp.prototype.toString, Ri = (e) => typeof e.constructor == "function" && e.constructor.name || "Object", mb = (e) => typeof window < "u" && e === window, vb = /^Symbol\((.*)\)(.*)$/, yb = /\n/gi;
class Qd extends Error {
  constructor(t, r) {
    super(t), this.stack = r, this.name = this.constructor.name;
  }
}
function bb(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function hb(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function gb(e) {
  return `${e}n`;
}
function zs(e, t) {
  return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]";
}
function Ys(e) {
  return String(e).replace(vb, "Symbol($1)");
}
function Ks(e) {
  return "[" + pb.call(e) + "]";
}
function Jd(e, t, r, n) {
  if (e === !0 || e === !1)
    return "" + e;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const a = typeof e;
  if (a === "number")
    return hb(e);
  if (a === "bigint")
    return gb(e);
  if (a === "string")
    return n ? '"' + e.replace(/"|\\/g, "\\$&") + '"' : '"' + e + '"';
  if (a === "function")
    return zs(e, t);
  if (a === "symbol")
    return Ys(e);
  const o = Xd.call(e);
  return o === "[object WeakMap]" ? "WeakMap {}" : o === "[object WeakSet]" ? "WeakSet {}" : o === "[object Function]" || o === "[object GeneratorFunction]" ? zs(e, t) : o === "[object Symbol]" ? Ys(e) : o === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : fb.call(e) : o === "[object Error]" ? Ks(e) : o === "[object RegExp]" ? r ? Gs.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : Gs.call(e) : e instanceof Error ? Ks(e) : null;
}
function Zd(e, t, r, n, a, o) {
  if (a.indexOf(e) !== -1)
    return "[Circular]";
  a = a.slice(), a.push(e);
  const i = ++n > t.maxDepth, s = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !o)
    return $e(e.toJSON(), t, r, n, a, !0);
  const l = Xd.call(e);
  return l === "[object Arguments]" ? i ? "[Arguments]" : (s ? "" : "Arguments ") + "[" + (0, jt.printListItems)(
    e,
    t,
    r,
    n,
    a,
    $e
  ) + "]" : bb(l) ? i ? "[" + e.constructor.name + "]" : (s || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : e.constructor.name + " ") + "[" + (0, jt.printListItems)(
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
  ) + "}" : i || mb(e) ? "[" + Ri(e) + "]" : (s || !t.printBasicPrototype && Ri(e) === "Object" ? "" : Ri(e) + " ") + "{" + (0, jt.printObjectProperties)(
    e,
    t,
    r,
    n,
    a,
    $e
  ) + "}";
}
function Eb(e) {
  return e.serialize != null;
}
function ef(e, t, r, n, a, o) {
  let i;
  try {
    i = Eb(e) ? e.serialize(t, r, n, a, o, $e) : e.print(
      t,
      (s) => $e(s, r, n, a, o),
      (s) => {
        const l = n + r.indent;
        return l + s.replace(yb, `
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
    throw new Qd(s.message, s.stack);
  }
  if (typeof i != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`
    );
  return i;
}
function tf(e, t) {
  for (let r = 0; r < e.length; r++)
    try {
      if (e[r].test(t))
        return e[r];
    } catch (n) {
      throw new Qd(n.message, n.stack);
    }
  return null;
}
function $e(e, t, r, n, a, o) {
  const i = tf(t.plugins, e);
  if (i !== null)
    return ef(i, e, t, r, n, a);
  const s = Jd(
    e,
    t.printFunctionName,
    t.escapeRegex,
    t.escapeString
  );
  return s !== null ? s : Zd(
    e,
    t,
    r,
    n,
    a,
    o
  );
}
const Jl = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, rf = Object.keys(Jl), oe = {
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
  theme: Jl
};
var nf = _e.DEFAULT_OPTIONS = oe;
function _b(e) {
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
const Rb = (e) => rf.reduce((t, r) => {
  const n = e.theme && e.theme[r] !== void 0 ? e.theme[r] : Jl[r], a = n && ab.default[n];
  if (a && typeof a.close == "string" && typeof a.open == "string")
    t[r] = a;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${r}" whose value "${n}" is undefined in ansi-styles.`
    );
  return t;
}, /* @__PURE__ */ Object.create(null)), wb = () => rf.reduce((e, t) => (e[t] = {
  close: "",
  open: ""
}, e), /* @__PURE__ */ Object.create(null)), af = (e) => e && e.printFunctionName !== void 0 ? e.printFunctionName : oe.printFunctionName, of = (e) => e && e.escapeRegex !== void 0 ? e.escapeRegex : oe.escapeRegex, lf = (e) => e && e.escapeString !== void 0 ? e.escapeString : oe.escapeString, Xs = (e) => {
  var t;
  return {
    callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : oe.callToJSON,
    colors: e && e.highlight ? Rb(e) : wb(),
    compareKeys: e && typeof e.compareKeys == "function" ? e.compareKeys : oe.compareKeys,
    escapeRegex: of(e),
    escapeString: lf(e),
    indent: e && e.min ? "" : Cb(
      e && e.indent !== void 0 ? e.indent : oe.indent
    ),
    maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : oe.maxDepth,
    min: e && e.min !== void 0 ? e.min : oe.min,
    plugins: e && e.plugins !== void 0 ? e.plugins : oe.plugins,
    printBasicPrototype: (t = e == null ? void 0 : e.printBasicPrototype) !== null && t !== void 0 ? t : !0,
    printFunctionName: af(e),
    spacingInner: e && e.min ? " " : `
`,
    spacingOuter: e && e.min ? "" : `
`
  };
};
function Cb(e) {
  return new Array(e + 1).join(" ");
}
function sf(e, t) {
  if (t && (_b(t), t.plugins)) {
    const n = tf(t.plugins, e);
    if (n !== null)
      return ef(n, e, Xs(t), "", 0, []);
  }
  const r = Jd(
    e,
    af(t),
    of(t),
    lf(t)
  );
  return r !== null ? r : Zd(e, Xs(t), "", 0, []);
}
const Pb = {
  AsymmetricMatcher: ob.default,
  ConvertAnsi: ib.default,
  DOMCollection: lb.default,
  DOMElement: sb.default,
  Immutable: ub.default,
  ReactElement: cb.default,
  ReactTestComponent: db.default
};
Ql = _e.plugins = Pb;
var Sb = sf;
Yd = _e.default = Sb;
const Tb = /* @__PURE__ */ Zv({
  __proto__: null,
  get DEFAULT_OPTIONS() {
    return nf;
  },
  get default() {
    return Yd;
  },
  format: Kd,
  get plugins() {
    return Ql;
  }
}, [_e]);
var Ab = Object.prototype.toString;
function Qs(e) {
  return typeof e == "function" || Ab.call(e) === "[object Function]";
}
function Ob(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var $b = Math.pow(2, 53) - 1;
function xb(e) {
  var t = Ob(e);
  return Math.min(Math.max(t, 0), $b);
}
function ie(e, t) {
  var r = Array, n = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  if (typeof t < "u" && !Qs(t))
    throw new TypeError("Array.from: when provided, the second argument must be a function");
  for (var a = xb(n.length), o = Qs(r) ? Object(new r(a)) : new Array(a), i = 0, s; i < a; )
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
function qb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Js(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, uf(n.key), n);
  }
}
function Ib(e, t, r) {
  return t && Js(e.prototype, t), r && Js(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Mb(e, t, r) {
  return t = uf(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uf(e) {
  var t = Nb(e, "string");
  return nr(t) === "symbol" ? t : String(t);
}
function Nb(e, t) {
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
var Bb = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    qb(this, e), Mb(this, "items", void 0), this.items = t;
  }
  return Ib(e, [{
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
const kb = typeof Set > "u" ? Set : Bb;
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
var Db = {
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
}, Lb = {
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
function Fb(e, t) {
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
    return e.hasAttribute(r) && !((n = Lb[t]) !== null && n !== void 0 && n.has(r));
  });
}
function cf(e, t) {
  return Fb(e, t);
}
function jb(e) {
  var t = Hb(e);
  if (t === null || t === "presentation") {
    var r = Ub(e);
    if (t !== "presentation" || cf(e, r || ""))
      return r;
  }
  return t;
}
function Ub(e) {
  var t = Db[z(e)];
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
      return e.getAttribute("alt") === "" && !cf(e, "img") ? "presentation" : "img";
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
function Hb(e) {
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
function df(e) {
  return D(e) && z(e) === "caption";
}
function Nr(e) {
  return D(e) && z(e) === "input";
}
function Wb(e) {
  return D(e) && z(e) === "optgroup";
}
function Vb(e) {
  return D(e) && z(e) === "select";
}
function Gb(e) {
  return D(e) && z(e) === "table";
}
function zb(e) {
  return D(e) && z(e) === "textarea";
}
function Yb(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument, r = t.defaultView;
  if (r === null)
    throw new TypeError("no window available");
  return r;
}
function Kb(e) {
  return D(e) && z(e) === "fieldset";
}
function Xb(e) {
  return D(e) && z(e) === "legend";
}
function Qb(e) {
  return D(e) && z(e) === "slot";
}
function Jb(e) {
  return D(e) && e.ownerSVGElement !== void 0;
}
function Zb(e) {
  return D(e) && z(e) === "svg";
}
function eh(e) {
  return Jb(e) && z(e) === "title";
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
  return D(e) ? t.indexOf(jb(e)) !== -1 : !1;
}
function th(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function rh(e, t) {
  if (!D(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var r = t(e);
  return r.getPropertyValue("display") === "none" || r.getPropertyValue("visibility") === "hidden";
}
function nh(e) {
  return he(e, ["button", "combobox", "listbox", "textbox"]) || ff(e, "range");
}
function ff(e, t) {
  if (!D(e))
    return !1;
  switch (t) {
    case "range":
      return he(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function Zs(e, t) {
  var r = ie(e.querySelectorAll(t));
  return en(e, "aria-owns").forEach(function(n) {
    r.push.apply(r, ie(n.querySelectorAll(t)));
  }), r;
}
function ah(e) {
  return Vb(e) ? e.selectedOptions || Zs(e, "[selected]") : Zs(e, '[aria-selected="true"]');
}
function oh(e) {
  return he(e, ["none", "presentation"]);
}
function ih(e) {
  return df(e);
}
function lh(e) {
  return he(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function sh(e) {
  return !1;
}
function uh(e) {
  return Nr(e) || zb(e) ? e.value : e.textContent || "";
}
function eu(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function pf(e) {
  var t = z(e);
  return t === "button" || t === "input" && e.getAttribute("type") !== "hidden" || t === "meter" || t === "output" || t === "progress" || t === "select" || t === "textarea";
}
function mf(e) {
  if (pf(e))
    return e;
  var t = null;
  return e.childNodes.forEach(function(r) {
    if (t === null && D(r)) {
      var n = mf(r);
      n !== null && (t = n);
    }
  }), t;
}
function ch(e) {
  if (e.control !== void 0)
    return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : mf(e);
}
function dh(e) {
  var t = e.labels;
  if (t === null)
    return t;
  if (t !== void 0)
    return ie(t);
  if (!pf(e))
    return null;
  var r = e.ownerDocument;
  return ie(r.querySelectorAll("label")).filter(function(n) {
    return ch(n) === e;
  });
}
function fh(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? ie(e.childNodes) : t;
}
function vf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = new kb(), n = Yb(e), a = t.compute, o = a === void 0 ? "name" : a, i = t.computedStyleSupportsPseudoElements, s = i === void 0 ? t.getComputedStyle !== void 0 : i, l = t.getComputedStyle, u = l === void 0 ? n.getComputedStyle.bind(n) : l, c = t.hidden, d = c === void 0 ? !1 : c;
  function f(p, E) {
    var C = "";
    if (D(p) && s) {
      var R = u(p, "::before"), S = eu(R);
      C = "".concat(S, " ").concat(C);
    }
    var m = Qb(p) ? fh(p) : ie(p.childNodes).concat(en(p, "aria-owns"));
    if (m.forEach(function(I) {
      var j = P(I, {
        isEmbeddedInLabel: E.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), F = D(I) ? u(I).getPropertyValue("display") : "inline", U = F !== "inline" ? " " : "";
      C += "".concat(U).concat(j).concat(U);
    }), D(p) && s) {
      var b = u(p, "::after"), g = eu(b);
      C = "".concat(C, " ").concat(g);
    }
    return C.trim();
  }
  function v(p, E) {
    var C = p.getAttributeNode(E);
    return C !== null && !r.has(C) && C.value.trim() !== "" ? (r.add(C), C.value) : null;
  }
  function y(p) {
    return D(p) ? v(p, "title") : null;
  }
  function h(p) {
    if (!D(p))
      return null;
    if (Kb(p)) {
      r.add(p);
      for (var E = ie(p.childNodes), C = 0; C < E.length; C += 1) {
        var R = E[C];
        if (Xb(R))
          return P(R, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (Gb(p)) {
      r.add(p);
      for (var S = ie(p.childNodes), m = 0; m < S.length; m += 1) {
        var b = S[m];
        if (df(b))
          return P(b, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (Zb(p)) {
      r.add(p);
      for (var g = ie(p.childNodes), I = 0; I < g.length; I += 1) {
        var j = g[I];
        if (eh(j))
          return j.textContent;
      }
      return null;
    } else if (z(p) === "img" || z(p) === "area") {
      var F = v(p, "alt");
      if (F !== null)
        return F;
    } else if (Wb(p)) {
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
    var A = dh(p);
    if (A !== null && A.length !== 0)
      return r.add(p), ie(A).map(function(Xe) {
        return P(Xe, {
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
  function P(p, E) {
    if (r.has(p))
      return "";
    if (!d && rh(p, u) && !E.isReferenced)
      return r.add(p), "";
    var C = D(p) ? p.getAttributeNode("aria-labelledby") : null, R = C !== null && !r.has(C) ? en(p, "aria-labelledby") : [];
    if (o === "name" && !E.isReferenced && R.length > 0)
      return r.add(C), R.map(function(F) {
        return P(F, {
          isEmbeddedInLabel: E.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var S = E.recursion && nh(p) && o === "name";
    if (!S) {
      var m = (D(p) && p.getAttribute("aria-label") || "").trim();
      if (m !== "" && o === "name")
        return r.add(p), m;
      if (!oh(p)) {
        var b = h(p);
        if (b !== null)
          return r.add(p), b;
      }
    }
    if (he(p, ["menu"]))
      return r.add(p), "";
    if (S || E.isEmbeddedInLabel || E.isReferenced) {
      if (he(p, ["combobox", "listbox"])) {
        r.add(p);
        var g = ah(p);
        return g.length === 0 ? Nr(p) ? p.value : "" : ie(g).map(function(F) {
          return P(F, {
            isEmbeddedInLabel: E.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (ff(p, "range"))
        return r.add(p), p.hasAttribute("aria-valuetext") ? p.getAttribute("aria-valuetext") : p.hasAttribute("aria-valuenow") ? p.getAttribute("aria-valuenow") : p.getAttribute("value") || "";
      if (he(p, ["textbox"]))
        return r.add(p), uh(p);
    }
    if (lh(p) || D(p) && E.isReferenced || ih(p) || sh()) {
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
  return th(P(e, {
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
function tu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ru(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tu(Object(r), !0).forEach(function(n) {
      ph(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ph(e, t, r) {
  return t = mh(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mh(e) {
  var t = vh(e, "string");
  return ar(t) === "symbol" ? t : String(t);
}
function vh(e, t) {
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
function yf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = en(e, "aria-describedby").map(function(a) {
    return vf(a, ru(ru({}, t), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (r === "") {
    var n = e.getAttribute("title");
    r = n === null ? "" : n;
  }
  return r;
}
function yh(e) {
  return he(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function Zl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return yh(e) ? "" : vf(e, t);
}
var le = {}, wn = {}, it = {}, Cn = {};
Object.defineProperty(Cn, "__esModule", {
  value: !0
});
Cn.default = void 0;
function bh() {
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
var hh = bh;
Cn.default = hh;
Object.defineProperty(it, "__esModule", {
  value: !0
});
it.default = _h;
var gh = Eh(Cn);
function Eh(e) {
  return e && e.__esModule ? e : { default: e };
}
function cl(e) {
  "@babel/helpers - typeof";
  return cl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cl(e);
}
function _h(e, t) {
  return typeof Symbol == "function" && cl(Symbol.iterator) === "symbol" && Object.defineProperty(e, Symbol.iterator, {
    value: gh.default.bind(t)
  }), e;
}
Object.defineProperty(wn, "__esModule", {
  value: !0
});
wn.default = void 0;
var Rh = wh(it);
function wh(e) {
  return e && e.__esModule ? e : { default: e };
}
function wi(e, t) {
  return Sh(e) || Ph(e, t) || bf(e, t) || Ch();
}
function Ch() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ph(e, t) {
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
function Sh(e) {
  if (Array.isArray(e))
    return e;
}
function Th(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = bf(e)) || t && e && typeof e.length == "number") {
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
function bf(e, t) {
  if (e) {
    if (typeof e == "string")
      return nu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return nu(e, t);
  }
}
function nu(e, t) {
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
}]], dl = {
  entries: function() {
    return mt;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = Th(mt), a;
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
    return !!dl.get(t);
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
}, Ah = (0, Rh.default)(dl, dl.entries());
wn.default = Ah;
var Pn = {};
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.default = void 0;
var Oh = $h(it);
function $h(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ci(e, t) {
  return Ih(e) || qh(e, t) || hf(e, t) || xh();
}
function xh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qh(e, t) {
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
function Ih(e) {
  if (Array.isArray(e))
    return e;
}
function Mh(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = hf(e)) || t && e && typeof e.length == "number") {
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
function hf(e, t) {
  if (e) {
    if (typeof e == "string")
      return au(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return au(e, t);
  }
}
function au(e, t) {
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
}]], fl = {
  entries: function() {
    return vt;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = Mh(vt), a;
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
    return !!fl.get(t);
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
}, Nh = (0, Oh.default)(fl, fl.entries());
Pn.default = Nh;
var kt = {}, Sn = {}, Tn = {};
Object.defineProperty(Tn, "__esModule", {
  value: !0
});
Tn.default = void 0;
var Bh = {
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
}, kh = Bh;
Tn.default = kh;
var An = {};
Object.defineProperty(An, "__esModule", {
  value: !0
});
An.default = void 0;
var Dh = {
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
}, Lh = Dh;
An.default = Lh;
var On = {};
Object.defineProperty(On, "__esModule", {
  value: !0
});
On.default = void 0;
var Fh = {
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
}, jh = Fh;
On.default = jh;
var $n = {};
Object.defineProperty($n, "__esModule", {
  value: !0
});
$n.default = void 0;
var Uh = {
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
}, Hh = Uh;
$n.default = Hh;
var xn = {};
Object.defineProperty(xn, "__esModule", {
  value: !0
});
xn.default = void 0;
var Wh = {
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
}, Vh = Wh;
xn.default = Vh;
var qn = {};
Object.defineProperty(qn, "__esModule", {
  value: !0
});
qn.default = void 0;
var Gh = {
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
}, zh = Gh;
qn.default = zh;
var In = {};
Object.defineProperty(In, "__esModule", {
  value: !0
});
In.default = void 0;
var Yh = {
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
}, Kh = Yh;
In.default = Kh;
var Mn = {};
Object.defineProperty(Mn, "__esModule", {
  value: !0
});
Mn.default = void 0;
var Xh = {
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
}, Qh = Xh;
Mn.default = Qh;
var Nn = {};
Object.defineProperty(Nn, "__esModule", {
  value: !0
});
Nn.default = void 0;
var Jh = {
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
}, Zh = Jh;
Nn.default = Zh;
var Bn = {};
Object.defineProperty(Bn, "__esModule", {
  value: !0
});
Bn.default = void 0;
var eg = {
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
}, tg = eg;
Bn.default = tg;
var kn = {};
Object.defineProperty(kn, "__esModule", {
  value: !0
});
kn.default = void 0;
var rg = {
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
}, ng = rg;
kn.default = ng;
var Dn = {};
Object.defineProperty(Dn, "__esModule", {
  value: !0
});
Dn.default = void 0;
var ag = {
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
}, og = ag;
Dn.default = og;
Object.defineProperty(Sn, "__esModule", {
  value: !0
});
Sn.default = void 0;
var ig = ee(Tn), lg = ee(An), sg = ee(On), ug = ee($n), cg = ee(xn), dg = ee(qn), fg = ee(In), pg = ee(Mn), mg = ee(Nn), vg = ee(Bn), yg = ee(kn), bg = ee(Dn);
function ee(e) {
  return e && e.__esModule ? e : { default: e };
}
var hg = [["command", ig.default], ["composite", lg.default], ["input", sg.default], ["landmark", ug.default], ["range", cg.default], ["roletype", dg.default], ["section", fg.default], ["sectionhead", pg.default], ["select", mg.default], ["structure", vg.default], ["widget", yg.default], ["window", bg.default]], gg = hg;
Sn.default = gg;
var Ln = {}, Fn = {};
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
Fn.default = void 0;
var Eg = {
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
}, _g = Eg;
Fn.default = _g;
var jn = {};
Object.defineProperty(jn, "__esModule", {
  value: !0
});
jn.default = void 0;
var Rg = {
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
}, wg = Rg;
jn.default = wg;
var Un = {};
Object.defineProperty(Un, "__esModule", {
  value: !0
});
Un.default = void 0;
var Cg = {
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
}, Pg = Cg;
Un.default = Pg;
var Hn = {};
Object.defineProperty(Hn, "__esModule", {
  value: !0
});
Hn.default = void 0;
var Sg = {
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
}, Tg = Sg;
Hn.default = Tg;
var Wn = {};
Object.defineProperty(Wn, "__esModule", {
  value: !0
});
Wn.default = void 0;
var Ag = {
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
}, Og = Ag;
Wn.default = Og;
var Vn = {};
Object.defineProperty(Vn, "__esModule", {
  value: !0
});
Vn.default = void 0;
var $g = {
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
}, xg = $g;
Vn.default = xg;
var Gn = {};
Object.defineProperty(Gn, "__esModule", {
  value: !0
});
Gn.default = void 0;
var qg = {
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
}, Ig = qg;
Gn.default = Ig;
var zn = {};
Object.defineProperty(zn, "__esModule", {
  value: !0
});
zn.default = void 0;
var Mg = {
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
}, Ng = Mg;
zn.default = Ng;
var Yn = {};
Object.defineProperty(Yn, "__esModule", {
  value: !0
});
Yn.default = void 0;
var Bg = {
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
}, kg = Bg;
Yn.default = kg;
var Kn = {};
Object.defineProperty(Kn, "__esModule", {
  value: !0
});
Kn.default = void 0;
var Dg = {
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
}, Lg = Dg;
Kn.default = Lg;
var Xn = {};
Object.defineProperty(Xn, "__esModule", {
  value: !0
});
Xn.default = void 0;
var Fg = {
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
}, jg = Fg;
Xn.default = jg;
var Qn = {};
Object.defineProperty(Qn, "__esModule", {
  value: !0
});
Qn.default = void 0;
var Ug = {
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
}, Hg = Ug;
Qn.default = Hg;
var Jn = {};
Object.defineProperty(Jn, "__esModule", {
  value: !0
});
Jn.default = void 0;
var Wg = {
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
}, Vg = Wg;
Jn.default = Vg;
var Zn = {};
Object.defineProperty(Zn, "__esModule", {
  value: !0
});
Zn.default = void 0;
var Gg = {
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
}, zg = Gg;
Zn.default = zg;
var ea = {};
Object.defineProperty(ea, "__esModule", {
  value: !0
});
ea.default = void 0;
var Yg = {
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
}, Kg = Yg;
ea.default = Kg;
var ta = {};
Object.defineProperty(ta, "__esModule", {
  value: !0
});
ta.default = void 0;
var Xg = {
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
}, Qg = Xg;
ta.default = Qg;
var ra = {};
Object.defineProperty(ra, "__esModule", {
  value: !0
});
ra.default = void 0;
var Jg = {
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
}, Zg = Jg;
ra.default = Zg;
var na = {};
Object.defineProperty(na, "__esModule", {
  value: !0
});
na.default = void 0;
var eE = {
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
}, tE = eE;
na.default = tE;
var aa = {};
Object.defineProperty(aa, "__esModule", {
  value: !0
});
aa.default = void 0;
var rE = {
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
}, nE = rE;
aa.default = nE;
var oa = {};
Object.defineProperty(oa, "__esModule", {
  value: !0
});
oa.default = void 0;
var aE = {
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
}, oE = aE;
oa.default = oE;
var ia = {};
Object.defineProperty(ia, "__esModule", {
  value: !0
});
ia.default = void 0;
var iE = {
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
}, lE = iE;
ia.default = lE;
var la = {};
Object.defineProperty(la, "__esModule", {
  value: !0
});
la.default = void 0;
var sE = {
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
}, uE = sE;
la.default = uE;
var sa = {};
Object.defineProperty(sa, "__esModule", {
  value: !0
});
sa.default = void 0;
var cE = {
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
}, dE = cE;
sa.default = dE;
var ua = {};
Object.defineProperty(ua, "__esModule", {
  value: !0
});
ua.default = void 0;
var fE = {
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
}, pE = fE;
ua.default = pE;
var ca = {};
Object.defineProperty(ca, "__esModule", {
  value: !0
});
ca.default = void 0;
var mE = {
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
}, vE = mE;
ca.default = vE;
var da = {};
Object.defineProperty(da, "__esModule", {
  value: !0
});
da.default = void 0;
var yE = {
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
}, bE = yE;
da.default = bE;
var fa = {};
Object.defineProperty(fa, "__esModule", {
  value: !0
});
fa.default = void 0;
var hE = {
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
}, gE = hE;
fa.default = gE;
var pa = {};
Object.defineProperty(pa, "__esModule", {
  value: !0
});
pa.default = void 0;
var EE = {
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
}, _E = EE;
pa.default = _E;
var ma = {};
Object.defineProperty(ma, "__esModule", {
  value: !0
});
ma.default = void 0;
var RE = {
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
}, wE = RE;
ma.default = wE;
var va = {};
Object.defineProperty(va, "__esModule", {
  value: !0
});
va.default = void 0;
var CE = {
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
}, PE = CE;
va.default = PE;
var ya = {};
Object.defineProperty(ya, "__esModule", {
  value: !0
});
ya.default = void 0;
var SE = {
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
}, TE = SE;
ya.default = TE;
var ba = {};
Object.defineProperty(ba, "__esModule", {
  value: !0
});
ba.default = void 0;
var AE = {
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
}, OE = AE;
ba.default = OE;
var ha = {};
Object.defineProperty(ha, "__esModule", {
  value: !0
});
ha.default = void 0;
var $E = {
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
}, xE = $E;
ha.default = xE;
var ga = {};
Object.defineProperty(ga, "__esModule", {
  value: !0
});
ga.default = void 0;
var qE = {
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
}, IE = qE;
ga.default = IE;
var Ea = {};
Object.defineProperty(Ea, "__esModule", {
  value: !0
});
Ea.default = void 0;
var ME = {
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
}, NE = ME;
Ea.default = NE;
var _a = {};
Object.defineProperty(_a, "__esModule", {
  value: !0
});
_a.default = void 0;
var BE = {
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
}, kE = BE;
_a.default = kE;
var Ra = {};
Object.defineProperty(Ra, "__esModule", {
  value: !0
});
Ra.default = void 0;
var DE = {
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
}, LE = DE;
Ra.default = LE;
var wa = {};
Object.defineProperty(wa, "__esModule", {
  value: !0
});
wa.default = void 0;
var FE = {
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
}, jE = FE;
wa.default = jE;
var Ca = {};
Object.defineProperty(Ca, "__esModule", {
  value: !0
});
Ca.default = void 0;
var UE = {
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
}, HE = UE;
Ca.default = HE;
var Pa = {};
Object.defineProperty(Pa, "__esModule", {
  value: !0
});
Pa.default = void 0;
var WE = {
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
}, VE = WE;
Pa.default = VE;
var Sa = {};
Object.defineProperty(Sa, "__esModule", {
  value: !0
});
Sa.default = void 0;
var GE = {
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
}, zE = GE;
Sa.default = zE;
var Ta = {};
Object.defineProperty(Ta, "__esModule", {
  value: !0
});
Ta.default = void 0;
var YE = {
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
}, KE = YE;
Ta.default = KE;
var Aa = {};
Object.defineProperty(Aa, "__esModule", {
  value: !0
});
Aa.default = void 0;
var XE = {
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
}, QE = XE;
Aa.default = QE;
var Oa = {};
Object.defineProperty(Oa, "__esModule", {
  value: !0
});
Oa.default = void 0;
var JE = {
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
}, ZE = JE;
Oa.default = ZE;
var $a = {};
Object.defineProperty($a, "__esModule", {
  value: !0
});
$a.default = void 0;
var e_ = {
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
}, t_ = e_;
$a.default = t_;
var xa = {};
Object.defineProperty(xa, "__esModule", {
  value: !0
});
xa.default = void 0;
var r_ = {
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
}, n_ = r_;
xa.default = n_;
var qa = {};
Object.defineProperty(qa, "__esModule", {
  value: !0
});
qa.default = void 0;
var a_ = {
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
}, o_ = a_;
qa.default = o_;
var Ia = {};
Object.defineProperty(Ia, "__esModule", {
  value: !0
});
Ia.default = void 0;
var i_ = {
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
}, l_ = i_;
Ia.default = l_;
var Ma = {};
Object.defineProperty(Ma, "__esModule", {
  value: !0
});
Ma.default = void 0;
var s_ = {
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
}, u_ = s_;
Ma.default = u_;
var Na = {};
Object.defineProperty(Na, "__esModule", {
  value: !0
});
Na.default = void 0;
var c_ = {
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
}, d_ = c_;
Na.default = d_;
var Ba = {};
Object.defineProperty(Ba, "__esModule", {
  value: !0
});
Ba.default = void 0;
var f_ = {
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
}, p_ = f_;
Ba.default = p_;
var ka = {};
Object.defineProperty(ka, "__esModule", {
  value: !0
});
ka.default = void 0;
var m_ = {
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
}, v_ = m_;
ka.default = v_;
var Da = {};
Object.defineProperty(Da, "__esModule", {
  value: !0
});
Da.default = void 0;
var y_ = {
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
}, b_ = y_;
Da.default = b_;
var La = {};
Object.defineProperty(La, "__esModule", {
  value: !0
});
La.default = void 0;
var h_ = {
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
}, g_ = h_;
La.default = g_;
var Fa = {};
Object.defineProperty(Fa, "__esModule", {
  value: !0
});
Fa.default = void 0;
var E_ = {
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
}, __ = E_;
Fa.default = __;
var ja = {};
Object.defineProperty(ja, "__esModule", {
  value: !0
});
ja.default = void 0;
var R_ = {
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
}, w_ = R_;
ja.default = w_;
var Ua = {};
Object.defineProperty(Ua, "__esModule", {
  value: !0
});
Ua.default = void 0;
var C_ = {
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
}, P_ = C_;
Ua.default = P_;
var Ha = {};
Object.defineProperty(Ha, "__esModule", {
  value: !0
});
Ha.default = void 0;
var S_ = {
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
}, T_ = S_;
Ha.default = T_;
var Wa = {};
Object.defineProperty(Wa, "__esModule", {
  value: !0
});
Wa.default = void 0;
var A_ = {
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
}, O_ = A_;
Wa.default = O_;
var Va = {};
Object.defineProperty(Va, "__esModule", {
  value: !0
});
Va.default = void 0;
var $_ = {
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
}, x_ = $_;
Va.default = x_;
var Ga = {};
Object.defineProperty(Ga, "__esModule", {
  value: !0
});
Ga.default = void 0;
var q_ = {
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
}, I_ = q_;
Ga.default = I_;
var za = {};
Object.defineProperty(za, "__esModule", {
  value: !0
});
za.default = void 0;
var M_ = {
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
}, N_ = M_;
za.default = N_;
var Ya = {};
Object.defineProperty(Ya, "__esModule", {
  value: !0
});
Ya.default = void 0;
var B_ = {
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
}, k_ = B_;
Ya.default = k_;
var Ka = {};
Object.defineProperty(Ka, "__esModule", {
  value: !0
});
Ka.default = void 0;
var D_ = {
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
}, L_ = D_;
Ka.default = L_;
var Xa = {};
Object.defineProperty(Xa, "__esModule", {
  value: !0
});
Xa.default = void 0;
var F_ = {
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
}, j_ = F_;
Xa.default = j_;
var Qa = {};
Object.defineProperty(Qa, "__esModule", {
  value: !0
});
Qa.default = void 0;
var U_ = {
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
}, H_ = U_;
Qa.default = H_;
var Ja = {};
Object.defineProperty(Ja, "__esModule", {
  value: !0
});
Ja.default = void 0;
var W_ = {
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
}, V_ = W_;
Ja.default = V_;
var Za = {};
Object.defineProperty(Za, "__esModule", {
  value: !0
});
Za.default = void 0;
var G_ = {
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
}, z_ = G_;
Za.default = z_;
var eo = {};
Object.defineProperty(eo, "__esModule", {
  value: !0
});
eo.default = void 0;
var Y_ = {
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
}, K_ = Y_;
eo.default = K_;
var to = {};
Object.defineProperty(to, "__esModule", {
  value: !0
});
to.default = void 0;
var X_ = {
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
}, Q_ = X_;
to.default = Q_;
var ro = {};
Object.defineProperty(ro, "__esModule", {
  value: !0
});
ro.default = void 0;
var J_ = {
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
}, Z_ = J_;
ro.default = Z_;
var no = {};
Object.defineProperty(no, "__esModule", {
  value: !0
});
no.default = void 0;
var eR = {
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
}, tR = eR;
no.default = tR;
var ao = {};
Object.defineProperty(ao, "__esModule", {
  value: !0
});
ao.default = void 0;
var rR = {
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
}, nR = rR;
ao.default = nR;
var oo = {};
Object.defineProperty(oo, "__esModule", {
  value: !0
});
oo.default = void 0;
var aR = {
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
}, oR = aR;
oo.default = oR;
var io = {};
Object.defineProperty(io, "__esModule", {
  value: !0
});
io.default = void 0;
var iR = {
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
}, lR = iR;
io.default = lR;
var lo = {};
Object.defineProperty(lo, "__esModule", {
  value: !0
});
lo.default = void 0;
var sR = {
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
}, uR = sR;
lo.default = uR;
var so = {};
Object.defineProperty(so, "__esModule", {
  value: !0
});
so.default = void 0;
var cR = {
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
}, dR = cR;
so.default = dR;
var uo = {};
Object.defineProperty(uo, "__esModule", {
  value: !0
});
uo.default = void 0;
var fR = {
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
}, pR = fR;
uo.default = pR;
var co = {};
Object.defineProperty(co, "__esModule", {
  value: !0
});
co.default = void 0;
var mR = {
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
}, vR = mR;
co.default = vR;
var fo = {};
Object.defineProperty(fo, "__esModule", {
  value: !0
});
fo.default = void 0;
var yR = {
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
}, bR = yR;
fo.default = bR;
var po = {};
Object.defineProperty(po, "__esModule", {
  value: !0
});
po.default = void 0;
var hR = {
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
}, gR = hR;
po.default = gR;
var mo = {};
Object.defineProperty(mo, "__esModule", {
  value: !0
});
mo.default = void 0;
var ER = {
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
}, _R = ER;
mo.default = _R;
Object.defineProperty(Ln, "__esModule", {
  value: !0
});
Ln.default = void 0;
var RR = _(Fn), wR = _(jn), CR = _(Un), PR = _(Hn), SR = _(Wn), TR = _(Vn), AR = _(Gn), OR = _(zn), $R = _(Yn), xR = _(Kn), qR = _(Xn), IR = _(Qn), MR = _(Jn), NR = _(Zn), BR = _(ea), kR = _(ta), DR = _(ra), LR = _(na), FR = _(aa), jR = _(oa), UR = _(ia), HR = _(la), WR = _(sa), VR = _(ua), GR = _(ca), zR = _(da), YR = _(fa), KR = _(pa), XR = _(ma), QR = _(va), JR = _(ya), ZR = _(ba), ew = _(ha), tw = _(ga), rw = _(Ea), nw = _(_a), aw = _(Ra), ow = _(wa), iw = _(Ca), lw = _(Pa), sw = _(Sa), uw = _(Ta), cw = _(Aa), dw = _(Oa), fw = _($a), pw = _(xa), mw = _(qa), vw = _(Ia), yw = _(Ma), bw = _(Na), hw = _(Ba), gw = _(ka), Ew = _(Da), _w = _(La), Rw = _(Fa), ww = _(ja), Cw = _(Ua), Pw = _(Ha), Sw = _(Wa), Tw = _(Va), Aw = _(Ga), Ow = _(za), $w = _(Ya), xw = _(Ka), qw = _(Xa), Iw = _(Qa), Mw = _(Ja), Nw = _(Za), Bw = _(eo), kw = _(to), Dw = _(ro), Lw = _(no), Fw = _(ao), jw = _(oo), Uw = _(io), Hw = _(lo), Ww = _(so), Vw = _(uo), Gw = _(co), zw = _(fo), Yw = _(po), Kw = _(mo);
function _(e) {
  return e && e.__esModule ? e : { default: e };
}
var Xw = [["alert", RR.default], ["alertdialog", wR.default], ["application", CR.default], ["article", PR.default], ["banner", SR.default], ["blockquote", TR.default], ["button", AR.default], ["caption", OR.default], ["cell", $R.default], ["checkbox", xR.default], ["code", qR.default], ["columnheader", IR.default], ["combobox", MR.default], ["complementary", NR.default], ["contentinfo", BR.default], ["definition", kR.default], ["deletion", DR.default], ["dialog", LR.default], ["directory", FR.default], ["document", jR.default], ["emphasis", UR.default], ["feed", HR.default], ["figure", WR.default], ["form", VR.default], ["generic", GR.default], ["grid", zR.default], ["gridcell", YR.default], ["group", KR.default], ["heading", XR.default], ["img", QR.default], ["insertion", JR.default], ["link", ZR.default], ["list", ew.default], ["listbox", tw.default], ["listitem", rw.default], ["log", nw.default], ["main", aw.default], ["marquee", ow.default], ["math", iw.default], ["menu", lw.default], ["menubar", sw.default], ["menuitem", uw.default], ["menuitemcheckbox", cw.default], ["menuitemradio", dw.default], ["meter", fw.default], ["navigation", pw.default], ["none", mw.default], ["note", vw.default], ["option", yw.default], ["paragraph", bw.default], ["presentation", hw.default], ["progressbar", gw.default], ["radio", Ew.default], ["radiogroup", _w.default], ["region", Rw.default], ["row", ww.default], ["rowgroup", Cw.default], ["rowheader", Pw.default], ["scrollbar", Sw.default], ["search", Tw.default], ["searchbox", Aw.default], ["separator", Ow.default], ["slider", $w.default], ["spinbutton", xw.default], ["status", qw.default], ["strong", Iw.default], ["subscript", Mw.default], ["superscript", Nw.default], ["switch", Bw.default], ["tab", kw.default], ["table", Dw.default], ["tablist", Lw.default], ["tabpanel", Fw.default], ["term", jw.default], ["textbox", Uw.default], ["time", Hw.default], ["timer", Ww.default], ["toolbar", Vw.default], ["tooltip", Gw.default], ["tree", zw.default], ["treegrid", Yw.default], ["treeitem", Kw.default]], Qw = Xw;
Ln.default = Qw;
var vo = {}, yo = {};
Object.defineProperty(yo, "__esModule", {
  value: !0
});
yo.default = void 0;
var Jw = {
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
}, Zw = Jw;
yo.default = Zw;
var bo = {};
Object.defineProperty(bo, "__esModule", {
  value: !0
});
bo.default = void 0;
var eC = {
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
}, tC = eC;
bo.default = tC;
var ho = {};
Object.defineProperty(ho, "__esModule", {
  value: !0
});
ho.default = void 0;
var rC = {
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
}, nC = rC;
ho.default = nC;
var go = {};
Object.defineProperty(go, "__esModule", {
  value: !0
});
go.default = void 0;
var aC = {
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
}, oC = aC;
go.default = oC;
var Eo = {};
Object.defineProperty(Eo, "__esModule", {
  value: !0
});
Eo.default = void 0;
var iC = {
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
}, lC = iC;
Eo.default = lC;
var _o = {};
Object.defineProperty(_o, "__esModule", {
  value: !0
});
_o.default = void 0;
var sC = {
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
}, uC = sC;
_o.default = uC;
var Ro = {};
Object.defineProperty(Ro, "__esModule", {
  value: !0
});
Ro.default = void 0;
var cC = {
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
}, dC = cC;
Ro.default = dC;
var wo = {};
Object.defineProperty(wo, "__esModule", {
  value: !0
});
wo.default = void 0;
var fC = {
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
}, pC = fC;
wo.default = pC;
var Co = {};
Object.defineProperty(Co, "__esModule", {
  value: !0
});
Co.default = void 0;
var mC = {
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
}, vC = mC;
Co.default = vC;
var Po = {};
Object.defineProperty(Po, "__esModule", {
  value: !0
});
Po.default = void 0;
var yC = {
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
}, bC = yC;
Po.default = bC;
var So = {};
Object.defineProperty(So, "__esModule", {
  value: !0
});
So.default = void 0;
var hC = {
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
}, gC = hC;
So.default = gC;
var To = {};
Object.defineProperty(To, "__esModule", {
  value: !0
});
To.default = void 0;
var EC = {
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
}, _C = EC;
To.default = _C;
var Ao = {};
Object.defineProperty(Ao, "__esModule", {
  value: !0
});
Ao.default = void 0;
var RC = {
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
}, wC = RC;
Ao.default = wC;
var Oo = {};
Object.defineProperty(Oo, "__esModule", {
  value: !0
});
Oo.default = void 0;
var CC = {
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
}, PC = CC;
Oo.default = PC;
var $o = {};
Object.defineProperty($o, "__esModule", {
  value: !0
});
$o.default = void 0;
var SC = {
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
}, TC = SC;
$o.default = TC;
var xo = {};
Object.defineProperty(xo, "__esModule", {
  value: !0
});
xo.default = void 0;
var AC = {
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
}, OC = AC;
xo.default = OC;
var qo = {};
Object.defineProperty(qo, "__esModule", {
  value: !0
});
qo.default = void 0;
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
      name: "rearnotes [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["doc-endnote"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, xC = $C;
qo.default = xC;
var Io = {};
Object.defineProperty(Io, "__esModule", {
  value: !0
});
Io.default = void 0;
var qC = {
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
}, IC = qC;
Io.default = IC;
var Mo = {};
Object.defineProperty(Mo, "__esModule", {
  value: !0
});
Mo.default = void 0;
var MC = {
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
}, NC = MC;
Mo.default = NC;
var No = {};
Object.defineProperty(No, "__esModule", {
  value: !0
});
No.default = void 0;
var BC = {
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
}, kC = BC;
No.default = kC;
var Bo = {};
Object.defineProperty(Bo, "__esModule", {
  value: !0
});
Bo.default = void 0;
var DC = {
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
}, LC = DC;
Bo.default = LC;
var ko = {};
Object.defineProperty(ko, "__esModule", {
  value: !0
});
ko.default = void 0;
var FC = {
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
}, jC = FC;
ko.default = jC;
var Do = {};
Object.defineProperty(Do, "__esModule", {
  value: !0
});
Do.default = void 0;
var UC = {
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
}, HC = UC;
Do.default = HC;
var Lo = {};
Object.defineProperty(Lo, "__esModule", {
  value: !0
});
Lo.default = void 0;
var WC = {
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
}, VC = WC;
Lo.default = VC;
var Fo = {};
Object.defineProperty(Fo, "__esModule", {
  value: !0
});
Fo.default = void 0;
var GC = {
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
}, zC = GC;
Fo.default = zC;
var jo = {};
Object.defineProperty(jo, "__esModule", {
  value: !0
});
jo.default = void 0;
var YC = {
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
}, KC = YC;
jo.default = KC;
var Uo = {};
Object.defineProperty(Uo, "__esModule", {
  value: !0
});
Uo.default = void 0;
var XC = {
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
}, QC = XC;
Uo.default = QC;
var Ho = {};
Object.defineProperty(Ho, "__esModule", {
  value: !0
});
Ho.default = void 0;
var JC = {
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
}, ZC = JC;
Ho.default = ZC;
var Wo = {};
Object.defineProperty(Wo, "__esModule", {
  value: !0
});
Wo.default = void 0;
var eP = {
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
}, tP = eP;
Wo.default = tP;
var Vo = {};
Object.defineProperty(Vo, "__esModule", {
  value: !0
});
Vo.default = void 0;
var rP = {
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
}, nP = rP;
Vo.default = nP;
var Go = {};
Object.defineProperty(Go, "__esModule", {
  value: !0
});
Go.default = void 0;
var aP = {
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
}, oP = aP;
Go.default = oP;
var zo = {};
Object.defineProperty(zo, "__esModule", {
  value: !0
});
zo.default = void 0;
var iP = {
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
}, lP = iP;
zo.default = lP;
var Yo = {};
Object.defineProperty(Yo, "__esModule", {
  value: !0
});
Yo.default = void 0;
var sP = {
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
}, uP = sP;
Yo.default = uP;
var Ko = {};
Object.defineProperty(Ko, "__esModule", {
  value: !0
});
Ko.default = void 0;
var cP = {
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
}, dP = cP;
Ko.default = dP;
var Xo = {};
Object.defineProperty(Xo, "__esModule", {
  value: !0
});
Xo.default = void 0;
var fP = {
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
}, pP = fP;
Xo.default = pP;
var Qo = {};
Object.defineProperty(Qo, "__esModule", {
  value: !0
});
Qo.default = void 0;
var mP = {
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
}, vP = mP;
Qo.default = vP;
var Jo = {};
Object.defineProperty(Jo, "__esModule", {
  value: !0
});
Jo.default = void 0;
var yP = {
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
}, bP = yP;
Jo.default = bP;
var Zo = {};
Object.defineProperty(Zo, "__esModule", {
  value: !0
});
Zo.default = void 0;
var hP = {
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
}, gP = hP;
Zo.default = gP;
var ei = {};
Object.defineProperty(ei, "__esModule", {
  value: !0
});
ei.default = void 0;
var EP = {
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
}, _P = EP;
ei.default = _P;
Object.defineProperty(vo, "__esModule", {
  value: !0
});
vo.default = void 0;
var RP = $(yo), wP = $(bo), CP = $(ho), PP = $(go), SP = $(Eo), TP = $(_o), AP = $(Ro), OP = $(wo), $P = $(Co), xP = $(Po), qP = $(So), IP = $(To), MP = $(Ao), NP = $(Oo), BP = $($o), kP = $(xo), DP = $(qo), LP = $(Io), FP = $(Mo), jP = $(No), UP = $(Bo), HP = $(ko), WP = $(Do), VP = $(Lo), GP = $(Fo), zP = $(jo), YP = $(Uo), KP = $(Ho), XP = $(Wo), QP = $(Vo), JP = $(Go), ZP = $(zo), eS = $(Yo), tS = $(Ko), rS = $(Xo), nS = $(Qo), aS = $(Jo), oS = $(Zo), iS = $(ei);
function $(e) {
  return e && e.__esModule ? e : { default: e };
}
var lS = [["doc-abstract", RP.default], ["doc-acknowledgments", wP.default], ["doc-afterword", CP.default], ["doc-appendix", PP.default], ["doc-backlink", SP.default], ["doc-biblioentry", TP.default], ["doc-bibliography", AP.default], ["doc-biblioref", OP.default], ["doc-chapter", $P.default], ["doc-colophon", xP.default], ["doc-conclusion", qP.default], ["doc-cover", IP.default], ["doc-credit", MP.default], ["doc-credits", NP.default], ["doc-dedication", BP.default], ["doc-endnote", kP.default], ["doc-endnotes", DP.default], ["doc-epigraph", LP.default], ["doc-epilogue", FP.default], ["doc-errata", jP.default], ["doc-example", UP.default], ["doc-footnote", HP.default], ["doc-foreword", WP.default], ["doc-glossary", VP.default], ["doc-glossref", GP.default], ["doc-index", zP.default], ["doc-introduction", YP.default], ["doc-noteref", KP.default], ["doc-notice", XP.default], ["doc-pagebreak", QP.default], ["doc-pagelist", JP.default], ["doc-part", ZP.default], ["doc-preface", eS.default], ["doc-prologue", tS.default], ["doc-pullquote", rS.default], ["doc-qna", nS.default], ["doc-subtitle", aS.default], ["doc-tip", oS.default], ["doc-toc", iS.default]], sS = lS;
vo.default = sS;
var ti = {}, ri = {};
Object.defineProperty(ri, "__esModule", {
  value: !0
});
ri.default = void 0;
var uS = {
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
}, cS = uS;
ri.default = cS;
var ni = {};
Object.defineProperty(ni, "__esModule", {
  value: !0
});
ni.default = void 0;
var dS = {
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
}, fS = dS;
ni.default = fS;
var ai = {};
Object.defineProperty(ai, "__esModule", {
  value: !0
});
ai.default = void 0;
var pS = {
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
}, mS = pS;
ai.default = mS;
Object.defineProperty(ti, "__esModule", {
  value: !0
});
ti.default = void 0;
var vS = es(ri), yS = es(ni), bS = es(ai);
function es(e) {
  return e && e.__esModule ? e : { default: e };
}
var hS = [["graphics-document", vS.default], ["graphics-object", yS.default], ["graphics-symbol", bS.default]], gS = hS;
ti.default = gS;
Object.defineProperty(kt, "__esModule", {
  value: !0
});
kt.default = void 0;
var ES = pr(Sn), _S = pr(Ln), RS = pr(vo), wS = pr(ti), CS = pr(it);
function pr(e) {
  return e && e.__esModule ? e : { default: e };
}
function PS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pl(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = gf(e)) || t && e && typeof e.length == "number") {
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
  return AS(e) || TS(e, t) || gf(e, t) || SS();
}
function SS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gf(e, t) {
  if (e) {
    if (typeof e == "string")
      return ou(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ou(e, t);
  }
}
function ou(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function TS(e, t) {
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
function AS(e) {
  if (Array.isArray(e))
    return e;
}
var xe = [].concat(ES.default, _S.default, RS.default, wS.default);
xe.forEach(function(e) {
  var t = Kt(e, 2), r = t[1], n = pl(r.superClass), a;
  try {
    for (n.s(); !(a = n.n()).done; ) {
      var o = a.value, i = pl(o), s;
      try {
        var l = function() {
          var c = s.value, d = xe.find(function(P) {
            var p = Kt(P, 1), E = p[0];
            return E === c;
          });
          if (d)
            for (var f = d[1], v = 0, y = Object.keys(f.props); v < y.length; v++) {
              var h = y[v];
              Object.prototype.hasOwnProperty.call(r.props, h) || Object.assign(r.props, PS({}, h, f.props[h]));
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
var ml = {
  entries: function() {
    return xe;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = pl(xe), a;
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
    return !!ml.get(t);
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
}, OS = (0, CS.default)(ml, ml.entries());
kt.default = OS;
var oi = {}, iu = Object.prototype.toString, Ef = function(t) {
  var r = iu.call(t), n = r === "[object Arguments]";
  return n || (n = r !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && iu.call(t.callee) === "[object Function]"), n;
}, Pi, lu;
function $S() {
  if (lu)
    return Pi;
  lu = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = Ef, a = Object.prototype.propertyIsEnumerable, o = !a.call({ toString: null }, "toString"), i = a.call(function() {
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
      var y = v !== null && typeof v == "object", h = r.call(v) === "[object Function]", P = n(v), p = y && r.call(v) === "[object String]", E = [];
      if (!y && !h && !P)
        throw new TypeError("Object.keys called on a non-object");
      var C = i && h;
      if (p && v.length > 0 && !t.call(v, 0))
        for (var R = 0; R < v.length; ++R)
          E.push(String(R));
      if (P && v.length > 0)
        for (var S = 0; S < v.length; ++S)
          E.push(String(S));
      else
        for (var m in v)
          !(C && m === "prototype") && t.call(v, m) && E.push(String(m));
      if (o)
        for (var b = d(v), g = 0; g < s.length; ++g)
          !(b && s[g] === "constructor") && t.call(v, s[g]) && E.push(s[g]);
      return E;
    };
  }
  return Pi = e, Pi;
}
var xS = Array.prototype.slice, qS = Ef, su = Object.keys, Br = su ? function(t) {
  return su(t);
} : $S(), uu = Object.keys;
Br.shim = function() {
  if (Object.keys) {
    var t = function() {
      var r = Object.keys(arguments);
      return r && r.length === arguments.length;
    }(1, 2);
    t || (Object.keys = function(n) {
      return qS(n) ? uu(xS.call(n)) : uu(n);
    });
  } else
    Object.keys = Br;
  return Object.keys || Br;
};
var ts = Br, kr = Object.defineProperty || !1;
if (kr)
  try {
    kr({}, "a", { value: 1 });
  } catch {
    kr = !1;
  }
var ii = kr, rs = SyntaxError, te = TypeError, IS = Object.getOwnPropertyDescriptor, Dr = IS;
if (Dr)
  try {
    Dr([], "length");
  } catch {
    Dr = null;
  }
var lt = Dr, cu = ii, MS = rs, yt = te, du = lt, ns = function(t, r, n) {
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
  var a = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, l = !!du && du(t, r);
  if (cu)
    cu(t, r, {
      configurable: i === null && l ? l.configurable : !i,
      enumerable: a === null && l ? l.enumerable : !a,
      value: n,
      writable: o === null && l ? l.writable : !o
    });
  else if (s || !a && !o && !i)
    t[r] = n;
  else
    throw new MS("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, vl = ii, _f = function() {
  return !!vl;
};
_f.hasArrayLengthDefineBug = function() {
  if (!vl)
    return null;
  try {
    return vl([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var as = _f, NS = ts, BS = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", kS = Object.prototype.toString, DS = Array.prototype.concat, fu = ns, LS = function(e) {
  return typeof e == "function" && kS.call(e) === "[object Function]";
}, Rf = as(), FS = function(e, t, r, n) {
  if (t in e) {
    if (n === !0) {
      if (e[t] === r)
        return;
    } else if (!LS(n) || !n())
      return;
  }
  Rf ? fu(e, t, r, !0) : fu(e, t, r);
}, wf = function(e, t) {
  var r = arguments.length > 2 ? arguments[2] : {}, n = NS(t);
  BS && (n = DS.call(n, Object.getOwnPropertySymbols(t)));
  for (var a = 0; a < n.length; a += 1)
    FS(e, n[a], t[n[a]], r[n[a]]);
};
wf.supportsDescriptors = !!Rf;
var st = wf, Cf = { exports: {} }, os = Object, Pf = Error, jS = EvalError, US = RangeError, HS = ReferenceError, WS = URIError, VS = Math.abs, GS = Math.floor, zS = Math.max, YS = Math.min, KS = Math.pow, XS = Math.round, QS = Number.isNaN || function(t) {
  return t !== t;
}, JS = QS, ZS = function(t) {
  return JS(t) || t === 0 ? t : t < 0 ? -1 : 1;
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
}, pu = typeof Symbol < "u" && Symbol, eT = li, is = function() {
  return typeof pu != "function" || typeof Symbol != "function" || typeof pu("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : eT();
}, Si, mu;
function Sf() {
  return mu || (mu = 1, Si = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Si;
}
var tT = os, Tf = tT.getPrototypeOf || null, rT = "Function.prototype.bind called on incompatible ", nT = Object.prototype.toString, aT = Math.max, oT = "[object Function]", vu = function(t, r) {
  for (var n = [], a = 0; a < t.length; a += 1)
    n[a] = t[a];
  for (var o = 0; o < r.length; o += 1)
    n[o + t.length] = r[o];
  return n;
}, iT = function(t, r) {
  for (var n = [], a = r || 0, o = 0; a < t.length; a += 1, o += 1)
    n[o] = t[a];
  return n;
}, lT = function(e, t) {
  for (var r = "", n = 0; n < e.length; n += 1)
    r += e[n], n + 1 < e.length && (r += t);
  return r;
}, sT = function(t) {
  var r = this;
  if (typeof r != "function" || nT.apply(r) !== oT)
    throw new TypeError(rT + r);
  for (var n = iT(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var c = r.apply(
        this,
        vu(n, arguments)
      );
      return Object(c) === c ? c : this;
    }
    return r.apply(
      t,
      vu(n, arguments)
    );
  }, i = aT(0, r.length - n.length), s = [], l = 0; l < i; l++)
    s[l] = "$" + l;
  if (a = Function("binder", "return function (" + lT(s, ",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
    var u = function() {
    };
    u.prototype = r.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, uT = sT, mr = Function.prototype.bind || uT, Ti, yu;
function ls() {
  return yu || (yu = 1, Ti = Function.prototype.call), Ti;
}
var Ai, bu;
function ss() {
  return bu || (bu = 1, Ai = Function.prototype.apply), Ai;
}
var cT = typeof Reflect < "u" && Reflect && Reflect.apply, dT = mr, fT = ss(), pT = ls(), mT = cT, Af = mT || dT.call(pT, fT), vT = mr, yT = te, bT = ls(), hT = Af, us = function(t) {
  if (t.length < 1 || typeof t[0] != "function")
    throw new yT("a function is required");
  return hT(vT, bT, t);
}, gT = us, hu = lt, Of;
try {
  Of = /** @type {{ __proto__?: typeof Array.prototype }} */
  [].__proto__ === Array.prototype;
} catch (e) {
  if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS")
    throw e;
}
var Oi = !!Of && hu && hu(
  Object.prototype,
  /** @type {keyof typeof Object.prototype} */
  "__proto__"
), $f = Object, gu = $f.getPrototypeOf, ET = Oi && typeof Oi.get == "function" ? gT([Oi.get]) : typeof gu == "function" ? (
  /** @type {import('./get')} */
  function(t) {
    return gu(t == null ? t : $f(t));
  }
) : !1, Eu = Sf(), _u = Tf, Ru = ET, cs = Eu ? function(t) {
  return Eu(t);
} : _u ? function(t) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new TypeError("getProto: not an object");
  return _u(t);
} : Ru ? function(t) {
  return Ru(t);
} : null, _T = Function.prototype.call, RT = Object.prototype.hasOwnProperty, wT = mr, ds = wT.call(_T, RT), x, CT = os, PT = Pf, ST = jS, TT = US, AT = HS, St = rs, wt = te, OT = WS, $T = VS, xT = GS, qT = zS, IT = YS, MT = KS, NT = XS, BT = ZS, xf = Function, $i = function(e) {
  try {
    return xf('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, or = lt, kT = ii, xi = function() {
  throw new wt();
}, DT = or ? function() {
  try {
    return arguments.callee, xi;
  } catch {
    try {
      return or(arguments, "callee").get;
    } catch {
      return xi;
    }
  }
}() : xi, bt = is(), W = cs, LT = Tf, FT = Sf(), qf = ss(), vr = ls(), Et = {}, jT = typeof Uint8Array > "u" || !W ? x : W(Uint8Array), tt = {
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
  "%Error%": PT,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": ST,
  "%Float16Array%": typeof Float16Array > "u" ? x : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? x : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? x : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? x : FinalizationRegistry,
  "%Function%": xf,
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
  "%Object%": CT,
  "%Object.getOwnPropertyDescriptor%": or,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? x : Promise,
  "%Proxy%": typeof Proxy > "u" ? x : Proxy,
  "%RangeError%": TT,
  "%ReferenceError%": AT,
  "%Reflect%": typeof Reflect > "u" ? x : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? x : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !bt || !W ? x : W((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? x : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": bt && W ? W(""[Symbol.iterator]()) : x,
  "%Symbol%": bt ? Symbol : x,
  "%SyntaxError%": St,
  "%ThrowTypeError%": DT,
  "%TypedArray%": jT,
  "%TypeError%": wt,
  "%Uint8Array%": typeof Uint8Array > "u" ? x : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? x : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? x : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? x : Uint32Array,
  "%URIError%": OT,
  "%WeakMap%": typeof WeakMap > "u" ? x : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? x : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? x : WeakSet,
  "%Function.prototype.call%": vr,
  "%Function.prototype.apply%": qf,
  "%Object.defineProperty%": kT,
  "%Object.getPrototypeOf%": LT,
  "%Math.abs%": $T,
  "%Math.floor%": xT,
  "%Math.max%": qT,
  "%Math.min%": IT,
  "%Math.pow%": MT,
  "%Math.round%": NT,
  "%Math.sign%": BT,
  "%Reflect.getPrototypeOf%": FT
};
if (W)
  try {
    null.error;
  } catch (e) {
    var UT = W(W(e));
    tt["%Error.prototype%"] = UT;
  }
var HT = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = $i("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = $i("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = $i("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var a = e("%AsyncGenerator%");
    a && W && (r = W(a.prototype));
  }
  return tt[t] = r, r;
}, wu = {
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
}, yr = mr, tn = ds, WT = yr.call(vr, Array.prototype.concat), VT = yr.call(qf, Array.prototype.splice), Cu = yr.call(vr, String.prototype.replace), rn = yr.call(vr, String.prototype.slice), GT = yr.call(vr, RegExp.prototype.exec), zT = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, YT = /\\(\\)?/g, KT = function(t) {
  var r = rn(t, 0, 1), n = rn(t, -1);
  if (r === "%" && n !== "%")
    throw new St("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new St("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Cu(t, zT, function(o, i, s, l) {
    a[a.length] = s ? Cu(l, YT, "$1") : i || o;
  }), a;
}, XT = function(t, r) {
  var n = t, a;
  if (tn(wu, n) && (a = wu[n], n = "%" + a[0] + "%"), tn(tt, n)) {
    var o = tt[n];
    if (o === Et && (o = HT(n)), typeof o > "u" && !r)
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
  if (GT(/^%?[^%]*%?$/, t) === null)
    throw new St("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = KT(t), a = n.length > 0 ? n[0] : "", o = XT("%" + a + "%", r), i = o.name, s = o.value, l = !1, u = o.alias;
  u && (a = u[0], VT(n, WT([0, 1], u)));
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
        var h = or(s, f);
        d = !!h, d && "get" in h && !("originalValue" in h.get) ? s = h.get : s = s[f];
      } else
        d = tn(s, f), s = s[f];
      d && !l && (tt[i] = s);
    }
  }
  return s;
}, QT = Ce, Pu = ns, JT = as(), Su = lt, Tu = te, ZT = QT("%Math.floor%"), eA = function(t, r) {
  if (typeof t != "function")
    throw new Tu("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || ZT(r) !== r)
    throw new Tu("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], a = !0, o = !0;
  if ("length" in t && Su) {
    var i = Su(t, "length");
    i && !i.configurable && (a = !1), i && !i.writable && (o = !1);
  }
  return (a || o || !n) && (JT ? Pu(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r,
    !0,
    !0
  ) : Pu(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    r
  )), t;
}, tA = mr, rA = ss(), nA = Af, aA = function() {
  return nA(tA, rA, arguments);
};
(function(e) {
  var t = eA, r = ii, n = us, a = aA;
  e.exports = function(i) {
    var s = n(arguments), l = i.length - (arguments.length - 1);
    return t(
      s,
      1 + (l > 0 ? l : 0),
      !0
    );
  }, r ? r(e.exports, "apply", { value: a }) : e.exports.apply = a;
})(Cf);
var Dt = Cf.exports, If = Ce, Mf = us, oA = Mf([If("%String.prototype.indexOf%")]), Y = function(t, r) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    If(t, !!r)
  );
  return typeof n == "function" && oA(t, ".prototype.") > -1 ? Mf(
    /** @type {const} */
    [n]
  ) : n;
}, iA = ts, Nf = li(), Bf = Y, Lr = os, lA = Bf("Array.prototype.push"), Au = Bf("Object.prototype.propertyIsEnumerable"), sA = Nf ? Lr.getOwnPropertySymbols : null, kf = function(t, r) {
  if (t == null)
    throw new TypeError("target must be an object");
  var n = Lr(t);
  if (arguments.length === 1)
    return n;
  for (var a = 1; a < arguments.length; ++a) {
    var o = Lr(arguments[a]), i = iA(o), s = Nf && (Lr.getOwnPropertySymbols || sA);
    if (s)
      for (var l = s(o), u = 0; u < l.length; ++u) {
        var c = l[u];
        Au(o, c) && lA(i, c);
      }
    for (var d = 0; d < i.length; ++d) {
      var f = i[d];
      if (Au(o, f)) {
        var v = o[f];
        n[f] = v;
      }
    }
  }
  return n;
}, qi = kf, uA = function() {
  if (!Object.assign)
    return !1;
  for (var e = "abcdefghijklmnopqrst", t = e.split(""), r = {}, n = 0; n < t.length; ++n)
    r[t[n]] = t[n];
  var a = Object.assign({}, r), o = "";
  for (var i in a)
    o += i;
  return e !== o;
}, cA = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var e = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(e, "xy");
  } catch {
    return e[1] === "y";
  }
  return !1;
}, Df = function() {
  return !Object.assign || uA() || cA() ? qi : Object.assign;
}, dA = st, fA = Df, pA = function() {
  var t = fA();
  return dA(
    Object,
    { assign: t },
    { assign: function() {
      return Object.assign !== t;
    } }
  ), t;
}, mA = st, vA = Dt, yA = kf, Lf = Df, bA = pA, hA = vA.apply(Lf()), Ff = function(t, r) {
  return hA(Object, arguments);
};
mA(Ff, {
  getPolyfill: Lf,
  implementation: yA,
  shim: bA
});
var gA = Ff, jf = Ce, Uf = Dt, EA = Uf(jf("String.prototype.indexOf")), Hf = function(t, r) {
  var n = jf(t, !!r);
  return typeof n == "function" && EA(t, ".prototype.") > -1 ? Uf(n) : n;
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
var _A = Function.prototype.bind;
ir.boundFunctionsHaveNames = function() {
  return ir() && typeof _A == "function" && (function() {
  }).bind().name !== "";
};
var RA = ir, Ou = ns, wA = as(), CA = RA.functionsHaveConfigurableNames(), PA = te, SA = function(t, r) {
  if (typeof t != "function")
    throw new PA("`fn` is not a function");
  var n = arguments.length > 2 && !!arguments[2];
  return (!n || CA) && (wA ? Ou(
    /** @type {Parameters<define>[0]} */
    t,
    "name",
    r,
    !0,
    !0
  ) : Ou(
    /** @type {Parameters<define>[0]} */
    t,
    "name",
    r
  )), t;
}, TA = SA, AA = te, OA = Object, Wf = TA(function() {
  if (this == null || this !== OA(this))
    throw new AA("RegExp.prototype.flags getter called on non-object");
  var t = "";
  return this.hasIndices && (t += "d"), this.global && (t += "g"), this.ignoreCase && (t += "i"), this.multiline && (t += "m"), this.dotAll && (t += "s"), this.unicode && (t += "u"), this.unicodeSets && (t += "v"), this.sticky && (t += "y"), t;
}, "get flags", !0), $A = Wf, xA = st.supportsDescriptors, qA = Object.getOwnPropertyDescriptor, Vf = function() {
  if (xA && /a/mig.flags === "gim") {
    var t = qA(RegExp.prototype, "flags");
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
  return $A;
}, IA = st.supportsDescriptors, MA = Vf, NA = lt, BA = Object.defineProperty, kA = Pf, $u = cs, DA = /a/, LA = function() {
  if (!IA || !$u)
    throw new kA("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var t = MA(), r = $u(DA), n = NA(r, "flags");
  return (!n || n.get !== t) && BA(r, "flags", {
    configurable: !0,
    enumerable: !1,
    get: t
  }), t;
}, FA = st, jA = Dt, UA = Wf, Gf = Vf, HA = LA, zf = jA(Gf());
FA(zf, {
  getPolyfill: Gf,
  implementation: UA,
  shim: HA
});
var WA = zf, Fr = { exports: {} }, VA = li, ut = function() {
  return VA() && !!Symbol.toStringTag;
}, GA = ut(), zA = Y, yl = zA("Object.prototype.toString"), si = function(t) {
  return GA && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : yl(t) === "[object Arguments]";
}, Yf = function(t) {
  return si(t) ? !0 : t !== null && typeof t == "object" && "length" in t && typeof t.length == "number" && t.length >= 0 && yl(t) !== "[object Array]" && "callee" in t && yl(t.callee) === "[object Function]";
}, YA = function() {
  return si(arguments);
}();
si.isLegacyArguments = Yf;
var Kf = YA ? si : Yf;
const KA = {}, XA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KA
}, Symbol.toStringTag, { value: "Module" })), QA = /* @__PURE__ */ Xv(XA);
var fs = typeof Map == "function" && Map.prototype, Ii = Object.getOwnPropertyDescriptor && fs ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, nn = fs && Ii && typeof Ii.get == "function" ? Ii.get : null, xu = fs && Map.prototype.forEach, ps = typeof Set == "function" && Set.prototype, Mi = Object.getOwnPropertyDescriptor && ps ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, an = ps && Mi && typeof Mi.get == "function" ? Mi.get : null, qu = ps && Set.prototype.forEach, JA = typeof WeakMap == "function" && WeakMap.prototype, Qt = JA ? WeakMap.prototype.has : null, ZA = typeof WeakSet == "function" && WeakSet.prototype, Jt = ZA ? WeakSet.prototype.has : null, eO = typeof WeakRef == "function" && WeakRef.prototype, Iu = eO ? WeakRef.prototype.deref : null, tO = Boolean.prototype.valueOf, rO = Object.prototype.toString, nO = Function.prototype.toString, aO = String.prototype.match, ms = String.prototype.slice, Ne = String.prototype.replace, oO = String.prototype.toUpperCase, Mu = String.prototype.toLowerCase, Xf = RegExp.prototype.test, Nu = Array.prototype.concat, ce = Array.prototype.join, iO = Array.prototype.slice, Bu = Math.floor, bl = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ni = Object.getOwnPropertySymbols, hl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Tt = typeof Symbol == "function" && typeof Symbol.iterator == "object", Zt = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Tt || "symbol") ? Symbol.toStringTag : null, Qf = Object.prototype.propertyIsEnumerable, ku = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Du(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Xf.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -Bu(-e) : Bu(e);
    if (n !== e) {
      var a = String(n), o = ms.call(t, a.length + 1);
      return Ne.call(a, r, "$&_") + "." + Ne.call(Ne.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Ne.call(t, r, "$&_");
}
var gl = QA, Lu = gl.custom, Fu = ep(Lu) ? Lu : null, Jf = {
  __proto__: null,
  double: '"',
  single: "'"
}, lO = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, ui = function e(t, r, n, a) {
  var o = r || {};
  if (be(o, "quoteStyle") && !be(Jf, o.quoteStyle))
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
    return rp(t, o);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var l = String(t);
    return s ? Du(t, l) : l;
  }
  if (typeof t == "bigint") {
    var u = String(t) + "n";
    return s ? Du(t, u) : u;
  }
  var c = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof n > "u" && (n = 0), n >= c && c > 0 && typeof t == "object")
    return El(t) ? "[Array]" : "[Object]";
  var d = PO(o, n);
  if (typeof a > "u")
    a = [];
  else if (tp(a, t) >= 0)
    return "[Circular]";
  function f(w, A, M) {
    if (A && (a = iO.call(a), a.push(A)), M) {
      var H = {
        depth: o.depth
      };
      return be(o, "quoteStyle") && (H.quoteStyle = o.quoteStyle), e(w, H, n + 1, a);
    }
    return e(w, o, n + 1, a);
  }
  if (typeof t == "function" && !ju(t)) {
    var v = yO(t), y = Sr(t, f);
    return "[Function" + (v ? ": " + v : " (anonymous)") + "]" + (y.length > 0 ? " { " + ce.call(y, ", ") + " }" : "");
  }
  if (ep(t)) {
    var h = Tt ? Ne.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : hl.call(t);
    return typeof t == "object" && !Tt ? Ut(h) : h;
  }
  if (RO(t)) {
    for (var P = "<" + Mu.call(String(t.nodeName)), p = t.attributes || [], E = 0; E < p.length; E++)
      P += " " + p[E].name + "=" + Zf(sO(p[E].value), "double", o);
    return P += ">", t.childNodes && t.childNodes.length && (P += "..."), P += "</" + Mu.call(String(t.nodeName)) + ">", P;
  }
  if (El(t)) {
    if (t.length === 0)
      return "[]";
    var C = Sr(t, f);
    return d && !CO(C) ? "[" + _l(C, d) + "]" : "[ " + ce.call(C, ", ") + " ]";
  }
  if (cO(t)) {
    var R = Sr(t, f);
    return !("cause" in Error.prototype) && "cause" in t && !Qf.call(t, "cause") ? "{ [" + String(t) + "] " + ce.call(Nu.call("[cause]: " + f(t.cause), R), ", ") + " }" : R.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + ce.call(R, ", ") + " }";
  }
  if (typeof t == "object" && i) {
    if (Fu && typeof t[Fu] == "function" && gl)
      return gl(t, { depth: c - n });
    if (i !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (bO(t)) {
    var S = [];
    return xu && xu.call(t, function(w, A) {
      S.push(f(A, t, !0) + " => " + f(w, t));
    }), Uu("Map", nn.call(t), S, d);
  }
  if (EO(t)) {
    var m = [];
    return qu && qu.call(t, function(w) {
      m.push(f(w, t));
    }), Uu("Set", an.call(t), m, d);
  }
  if (hO(t))
    return Bi("WeakMap");
  if (_O(t))
    return Bi("WeakSet");
  if (gO(t))
    return Bi("WeakRef");
  if (fO(t))
    return Ut(f(Number(t)));
  if (mO(t))
    return Ut(f(bl.call(t)));
  if (pO(t))
    return Ut(tO.call(t));
  if (dO(t))
    return Ut(f(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && t === globalThis || typeof Qr < "u" && t === Qr)
    return "{ [object globalThis] }";
  if (!uO(t) && !ju(t)) {
    var b = Sr(t, f), g = ku ? ku(t) === Object.prototype : t instanceof Object || t.constructor === Object, I = t instanceof Object ? "" : "null prototype", j = !g && Zt && Object(t) === t && Zt in t ? ms.call(Ye(t), 8, -1) : I ? "Object" : "", F = g || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", U = F + (j || I ? "[" + ce.call(Nu.call([], j || [], I || []), ": ") + "] " : "");
    return b.length === 0 ? U + "{}" : d ? U + "{" + _l(b, d) + "}" : U + "{ " + ce.call(b, ", ") + " }";
  }
  return String(t);
};
function Zf(e, t, r) {
  var n = r.quoteStyle || t, a = Jf[n];
  return a + e + a;
}
function sO(e) {
  return Ne.call(String(e), /"/g, "&quot;");
}
function ct(e) {
  return !Zt || !(typeof e == "object" && (Zt in e || typeof e[Zt] < "u"));
}
function El(e) {
  return Ye(e) === "[object Array]" && ct(e);
}
function uO(e) {
  return Ye(e) === "[object Date]" && ct(e);
}
function ju(e) {
  return Ye(e) === "[object RegExp]" && ct(e);
}
function cO(e) {
  return Ye(e) === "[object Error]" && ct(e);
}
function dO(e) {
  return Ye(e) === "[object String]" && ct(e);
}
function fO(e) {
  return Ye(e) === "[object Number]" && ct(e);
}
function pO(e) {
  return Ye(e) === "[object Boolean]" && ct(e);
}
function ep(e) {
  if (Tt)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !hl)
    return !1;
  try {
    return hl.call(e), !0;
  } catch {
  }
  return !1;
}
function mO(e) {
  if (!e || typeof e != "object" || !bl)
    return !1;
  try {
    return bl.call(e), !0;
  } catch {
  }
  return !1;
}
var vO = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function be(e, t) {
  return vO.call(e, t);
}
function Ye(e) {
  return rO.call(e);
}
function yO(e) {
  if (e.name)
    return e.name;
  var t = aO.call(nO.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function tp(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function bO(e) {
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
function hO(e) {
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
function gO(e) {
  if (!Iu || !e || typeof e != "object")
    return !1;
  try {
    return Iu.call(e), !0;
  } catch {
  }
  return !1;
}
function EO(e) {
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
function _O(e) {
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
function RO(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function rp(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return rp(ms.call(e, 0, t.maxStringLength), t) + n;
  }
  var a = lO[t.quoteStyle || "single"];
  a.lastIndex = 0;
  var o = Ne.call(Ne.call(e, a, "\\$1"), /[\x00-\x1f]/g, wO);
  return Zf(o, "single", t);
}
function wO(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + oO.call(t.toString(16));
}
function Ut(e) {
  return "Object(" + e + ")";
}
function Bi(e) {
  return e + " { ? }";
}
function Uu(e, t, r, n) {
  var a = n ? _l(r, n) : ce.call(r, ", ");
  return e + " (" + t + ") {" + a + "}";
}
function CO(e) {
  for (var t = 0; t < e.length; t++)
    if (tp(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function PO(e, t) {
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
function _l(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + ce.call(e, "," + r) + `
` + t.prev;
}
function Sr(e, t) {
  var r = El(e), n = [];
  if (r) {
    n.length = e.length;
    for (var a = 0; a < e.length; a++)
      n[a] = be(e, a) ? t(e[a], e) : "";
  }
  var o = typeof Ni == "function" ? Ni(e) : [], i;
  if (Tt) {
    i = {};
    for (var s = 0; s < o.length; s++)
      i["$" + o[s]] = o[s];
  }
  for (var l in e)
    be(e, l) && (r && String(Number(l)) === l && l < e.length || Tt && i["$" + l] instanceof Symbol || (Xf.call(/[^\w$]/, l) ? n.push(t(l, e) + ": " + t(e[l], e)) : n.push(l + ": " + t(e[l], e))));
  if (typeof Ni == "function")
    for (var u = 0; u < o.length; u++)
      Qf.call(e, o[u]) && n.push("[" + t(o[u]) + "]: " + t(e[o[u]], e));
  return n;
}
var SO = ui, TO = te, ci = function(e, t, r) {
  for (var n = e, a; (a = n.next) != null; n = a)
    if (a.key === t)
      return n.next = a.next, r || (a.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = a), a;
}, AO = function(e, t) {
  if (e) {
    var r = ci(e, t);
    return r && r.value;
  }
}, OO = function(e, t, r) {
  var n = ci(e, t);
  n ? n.value = r : e.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: r
  };
}, $O = function(e, t) {
  return e ? !!ci(e, t) : !1;
}, xO = function(e, t) {
  if (e)
    return ci(e, t, !0);
}, qO = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new TO("Side channel does not contain " + SO(n));
    },
    delete: function(n) {
      var a = t && t.next, o = xO(t, n);
      return o && a && a === o && (t = void 0), !!o;
    },
    get: function(n) {
      return AO(t, n);
    },
    has: function(n) {
      return $O(t, n);
    },
    set: function(n, a) {
      t || (t = {
        next: void 0
      }), OO(
        /** @type {NonNullable<typeof $o>} */
        t,
        n,
        a
      );
    }
  };
  return r;
}, IO = Ce, br = Y, MO = ui, NO = te, Hu = IO("%Map%", !0), BO = br("Map.prototype.get", !0), kO = br("Map.prototype.set", !0), DO = br("Map.prototype.has", !0), LO = br("Map.prototype.delete", !0), FO = br("Map.prototype.size", !0), np = !!Hu && /** @type {Exclude<import('.'), false>} */
function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new NO("Side channel does not contain " + MO(n));
    },
    delete: function(n) {
      if (t) {
        var a = LO(t, n);
        return FO(t) === 0 && (t = void 0), a;
      }
      return !1;
    },
    get: function(n) {
      if (t)
        return BO(t, n);
    },
    has: function(n) {
      return t ? DO(t, n) : !1;
    },
    set: function(n, a) {
      t || (t = new Hu()), kO(t, n, a);
    }
  };
  return r;
}, jO = Ce, di = Y, UO = ui, Tr = np, HO = te, ht = jO("%WeakMap%", !0), WO = di("WeakMap.prototype.get", !0), VO = di("WeakMap.prototype.set", !0), GO = di("WeakMap.prototype.has", !0), zO = di("WeakMap.prototype.delete", !0), YO = ht ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var t, r, n = {
      assert: function(a) {
        if (!n.has(a))
          throw new HO("Side channel does not contain " + UO(a));
      },
      delete: function(a) {
        if (ht && a && (typeof a == "object" || typeof a == "function")) {
          if (t)
            return zO(t, a);
        } else if (Tr && r)
          return r.delete(a);
        return !1;
      },
      get: function(a) {
        return ht && a && (typeof a == "object" || typeof a == "function") && t ? WO(t, a) : r && r.get(a);
      },
      has: function(a) {
        return ht && a && (typeof a == "object" || typeof a == "function") && t ? GO(t, a) : !!r && r.has(a);
      },
      set: function(a, o) {
        ht && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new ht()), VO(t, a, o)) : Tr && (r || (r = Tr()), r.set(a, o));
      }
    };
    return n;
  }
) : Tr, KO = te, XO = ui, QO = qO, JO = np, ZO = YO, e$ = ZO || JO || QO, ap = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new KO("Side channel does not contain " + XO(n));
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
      t || (t = e$()), t.set(n, a);
    }
  };
  return r;
}, t$ = ds, Ht = ap(), me = te, vs = {
  assert: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new me("`O` is not an object");
    if (typeof t != "string")
      throw new me("`slot` must be a string");
    if (Ht.assert(e), !vs.has(e, t))
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
    return !!r && t$(
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
Object.freeze && Object.freeze(vs);
var r$ = vs, Wt = r$, n$ = rs, Wu = typeof StopIteration == "object" ? StopIteration : null, a$ = function(t) {
  if (!Wu)
    throw new n$("this environment lacks StopIteration");
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
          if (Wt.set(a, "[[Done]]", !0), i !== Wu)
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
}, o$ = {}.toString, op = Array.isArray || function(e) {
  return o$.call(e) == "[object Array]";
}, ip = Y, i$ = ip("String.prototype.valueOf"), l$ = function(t) {
  try {
    return i$(t), !0;
  } catch {
    return !1;
  }
}, s$ = ip("Object.prototype.toString"), u$ = "[object String]", c$ = ut(), lp = function(t) {
  return typeof t == "string" ? !0 : !t || typeof t != "object" ? !1 : c$ ? l$(t) : s$(t) === u$;
}, ys = typeof Map == "function" && Map.prototype ? Map : null, d$ = typeof Set == "function" && Set.prototype ? Set : null, on;
ys || (on = function(t) {
  return !1;
});
var sp = ys ? Map.prototype.has : null, Vu = d$ ? Set.prototype.has : null;
!on && !sp && (on = function(t) {
  return !1;
});
var up = on || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (sp.call(t), Vu)
      try {
        Vu.call(t);
      } catch {
        return !0;
      }
    return t instanceof ys;
  } catch {
  }
  return !1;
}, f$ = typeof Map == "function" && Map.prototype ? Map : null, bs = typeof Set == "function" && Set.prototype ? Set : null, ln;
bs || (ln = function(t) {
  return !1;
});
var Gu = f$ ? Map.prototype.has : null, cp = bs ? Set.prototype.has : null;
!ln && !cp && (ln = function(t) {
  return !1;
});
var dp = ln || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (cp.call(t), Gu)
      try {
        Gu.call(t);
      } catch {
        return !0;
      }
    return t instanceof bs;
  } catch {
  }
  return !1;
}, zu = Kf, Yu = a$;
if (is() || li()) {
  var ki = Symbol.iterator;
  Fr.exports = function(t) {
    if (t != null && typeof t[ki] < "u")
      return t[ki]();
    if (zu(t))
      return Array.prototype[ki].call(t);
  };
} else {
  var p$ = op, m$ = lp, Ku = Ce, v$ = Ku("%Map%", !0), y$ = Ku("%Set%", !0), ne = Hf, Xu = ne("Array.prototype.push"), Qu = ne("String.prototype.charCodeAt"), b$ = ne("String.prototype.slice"), h$ = function(t, r) {
    var n = t.length;
    if (r + 1 >= n)
      return r + 1;
    var a = Qu(t, r);
    if (a < 55296 || a > 56319)
      return r + 1;
    var o = Qu(t, r + 1);
    return o < 56320 || o > 57343 ? r + 1 : r + 2;
  }, Di = function(t) {
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
  }, Ju = function(t, r) {
    if (p$(t) || zu(t))
      return Di(t);
    if (m$(t)) {
      var n = 0;
      return {
        next: function() {
          var o = h$(t, n), i = b$(t, n, o);
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
  if (!v$ && !y$)
    Fr.exports = function(t) {
      if (t != null)
        return Ju(t, !0);
    };
  else {
    var g$ = up, E$ = dp, Zu = ne("Map.prototype.forEach", !0), ec = ne("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var tc = ne("Map.prototype.iterator", !0), rc = ne("Set.prototype.iterator", !0);
    var nc = ne("Map.prototype.@@iterator", !0) || ne("Map.prototype._es6-shim iterator_", !0), ac = ne("Set.prototype.@@iterator", !0) || ne("Set.prototype._es6-shim iterator_", !0), _$ = function(t) {
      if (g$(t)) {
        if (tc)
          return Yu(tc(t));
        if (nc)
          return nc(t);
        if (Zu) {
          var r = [];
          return Zu(t, function(a, o) {
            Xu(r, [o, a]);
          }), Di(r);
        }
      }
      if (E$(t)) {
        if (rc)
          return Yu(rc(t));
        if (ac)
          return ac(t);
        if (ec) {
          var n = [];
          return ec(t, function(a) {
            Xu(n, a);
          }), Di(n);
        }
      }
    };
    Fr.exports = function(t) {
      return _$(t) || Ju(t);
    };
  }
}
var R$ = Fr.exports, oc = function(e) {
  return e !== e;
}, fp = function(t, r) {
  return t === 0 && r === 0 ? 1 / t === 1 / r : !!(t === r || oc(t) && oc(r));
}, w$ = fp, pp = function() {
  return typeof Object.is == "function" ? Object.is : w$;
}, C$ = pp, P$ = st, S$ = function() {
  var t = C$();
  return P$(Object, { is: t }, {
    is: function() {
      return Object.is !== t;
    }
  }), t;
}, T$ = st, A$ = Dt, O$ = fp, mp = pp, $$ = S$, vp = A$(mp(), Object);
T$(vp, {
  getPolyfill: mp,
  implementation: O$,
  shim: $$
});
var x$ = vp, q$ = Dt, yp = Y, I$ = Ce, Rl = I$("%ArrayBuffer%", !0), jr = yp("ArrayBuffer.prototype.byteLength", !0), M$ = yp("Object.prototype.toString"), ic = !!Rl && !jr && new Rl(0).slice, lc = !!ic && q$(ic), bp = jr || lc ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return jr ? jr(t) : lc(t, 0), !0;
  } catch {
    return !1;
  }
} : Rl ? function(t) {
  return M$(t) === "[object ArrayBuffer]";
} : function(t) {
  return !1;
}, hp = Y, N$ = hp("Date.prototype.getDay"), B$ = function(t) {
  try {
    return N$(t), !0;
  } catch {
    return !1;
  }
}, k$ = hp("Object.prototype.toString"), D$ = "[object Date]", L$ = ut(), F$ = function(t) {
  return typeof t != "object" || t === null ? !1 : L$ ? B$(t) : k$(t) === D$;
}, sc = Y, j$ = ut(), U$ = ds, H$ = lt, wl;
if (j$) {
  var W$ = sc("RegExp.prototype.exec"), uc = {}, Li = function() {
    throw uc;
  }, cc = {
    toString: Li,
    valueOf: Li
  };
  typeof Symbol.toPrimitive == "symbol" && (cc[Symbol.toPrimitive] = Li), wl = function(t) {
    if (!t || typeof t != "object")
      return !1;
    var r = (
      /** @type {NonNullable<typeof gOPD>} */
      H$(
        /** @type {{ lastIndex?: unknown }} */
        t,
        "lastIndex"
      )
    ), n = r && U$(r, "value");
    if (!n)
      return !1;
    try {
      W$(
        t,
        /** @type {string} */
        /** @type {unknown} */
        cc
      );
    } catch (a) {
      return a === uc;
    }
  };
} else {
  var V$ = sc("Object.prototype.toString"), G$ = "[object RegExp]";
  wl = function(t) {
    return !t || typeof t != "object" && typeof t != "function" ? !1 : V$(t) === G$;
  };
}
var gp = wl, z$ = Y, dc = z$("SharedArrayBuffer.prototype.byteLength", !0), Y$ = dc ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return dc(t), !0;
  } catch {
    return !1;
  }
} : function(t) {
  return !1;
}, Ep = Y, K$ = Ep("Number.prototype.toString"), X$ = function(t) {
  try {
    return K$(t), !0;
  } catch {
    return !1;
  }
}, Q$ = Ep("Object.prototype.toString"), J$ = "[object Number]", Z$ = ut(), ex = function(t) {
  return typeof t == "number" ? !0 : !t || typeof t != "object" ? !1 : Z$ ? X$(t) : Q$(t) === J$;
}, _p = Y, tx = _p("Boolean.prototype.toString"), rx = _p("Object.prototype.toString"), nx = function(t) {
  try {
    return tx(t), !0;
  } catch {
    return !1;
  }
}, ax = "[object Boolean]", ox = ut(), ix = function(t) {
  return typeof t == "boolean" ? !0 : t === null || typeof t != "object" ? !1 : ox ? nx(t) : rx(t) === ax;
}, Cl = { exports: {} }, Fi, fc;
function lx() {
  if (fc)
    return Fi;
  fc = 1;
  var e = Y, t = gp, r = e("RegExp.prototype.exec"), n = te;
  return Fi = function(o) {
    if (!t(o))
      throw new n("`regex` must be a RegExp");
    return function(s) {
      return r(o, s) !== null;
    };
  }, Fi;
}
var Rp = Y, sx = Rp("Object.prototype.toString"), ux = is(), cx = lx();
if (ux) {
  var dx = Rp("Symbol.prototype.toString"), fx = cx(/^Symbol\(.*\)$/), px = function(t) {
    return typeof t.valueOf() != "symbol" ? !1 : fx(dx(t));
  };
  Cl.exports = function(t) {
    if (typeof t == "symbol")
      return !0;
    if (!t || typeof t != "object" || sx(t) !== "[object Symbol]")
      return !1;
    try {
      return px(t);
    } catch {
      return !1;
    }
  };
} else
  Cl.exports = function(t) {
    return !1;
  };
var mx = Cl.exports, Pl = { exports: {} }, pc = typeof BigInt < "u" && BigInt, vx = function() {
  return typeof pc == "function" && typeof BigInt == "function" && typeof pc(42) == "bigint" && typeof BigInt(42) == "bigint";
}, yx = vx();
if (yx) {
  var bx = BigInt.prototype.valueOf, hx = function(t) {
    try {
      return bx.call(t), !0;
    } catch {
    }
    return !1;
  };
  Pl.exports = function(t) {
    return t === null || typeof t > "u" || typeof t == "boolean" || typeof t == "string" || typeof t == "number" || typeof t == "symbol" || typeof t == "function" ? !1 : typeof t == "bigint" ? !0 : hx(t);
  };
} else
  Pl.exports = function(t) {
    return !1;
  };
var gx = Pl.exports, Ex = lp, _x = ex, Rx = ix, wx = mx, Cx = gx, Px = function(t) {
  if (t == null || typeof t != "object" && typeof t != "function")
    return null;
  if (Ex(t))
    return "String";
  if (_x(t))
    return "Number";
  if (Rx(t))
    return "Boolean";
  if (wx(t))
    return "Symbol";
  if (Cx(t))
    return "BigInt";
}, sn = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, mc = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, un;
sn || (un = function(t) {
  return !1;
});
var Sl = sn ? sn.prototype.has : null, ji = mc ? mc.prototype.has : null;
!un && !Sl && (un = function(t) {
  return !1;
});
var Sx = un || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (Sl.call(t, Sl), ji)
      try {
        ji.call(t, ji);
      } catch {
        return !0;
      }
    return t instanceof sn;
  } catch {
  }
  return !1;
}, Tl = { exports: {} }, Tx = Ce, wp = Y, Ax = Tx("%WeakSet%", !0), Ui = wp("WeakSet.prototype.has", !0);
if (Ui) {
  var Hi = wp("WeakMap.prototype.has", !0);
  Tl.exports = function(t) {
    if (!t || typeof t != "object")
      return !1;
    try {
      if (Ui(t, Ui), Hi)
        try {
          Hi(t, Hi);
        } catch {
          return !0;
        }
      return t instanceof Ax;
    } catch {
    }
    return !1;
  };
} else
  Tl.exports = function(t) {
    return !1;
  };
var Ox = Tl.exports, $x = up, xx = dp, qx = Sx, Ix = Ox, Mx = function(t) {
  if (t && typeof t == "object") {
    if ($x(t))
      return "Map";
    if (xx(t))
      return "Set";
    if (qx(t))
      return "WeakMap";
    if (Ix(t))
      return "WeakSet";
  }
  return !1;
}, Cp = Function.prototype.toString, _t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, Al, Ur;
if (typeof _t == "function" && typeof Object.defineProperty == "function")
  try {
    Al = Object.defineProperty({}, "length", {
      get: function() {
        throw Ur;
      }
    }), Ur = {}, _t(function() {
      throw 42;
    }, null, Al);
  } catch (e) {
    e !== Ur && (_t = null);
  }
else
  _t = null;
var Nx = /^\s*class\b/, Ol = function(t) {
  try {
    var r = Cp.call(t);
    return Nx.test(r);
  } catch {
    return !1;
  }
}, Wi = function(t) {
  try {
    return Ol(t) ? !1 : (Cp.call(t), !0);
  } catch {
    return !1;
  }
}, Hr = Object.prototype.toString, Bx = "[object Object]", kx = "[object Function]", Dx = "[object GeneratorFunction]", Lx = "[object HTMLAllCollection]", Fx = "[object HTML document.all class]", jx = "[object HTMLCollection]", Ux = typeof Symbol == "function" && !!Symbol.toStringTag, Hx = !(0 in [,]), $l = function() {
  return !1;
};
if (typeof document == "object") {
  var Wx = document.all;
  Hr.call(Wx) === Hr.call(document.all) && ($l = function(t) {
    if ((Hx || !t) && (typeof t > "u" || typeof t == "object"))
      try {
        var r = Hr.call(t);
        return (r === Lx || r === Fx || r === jx || r === Bx) && t("") == null;
      } catch {
      }
    return !1;
  });
}
var Vx = _t ? function(t) {
  if ($l(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  try {
    _t(t, null, Al);
  } catch (r) {
    if (r !== Ur)
      return !1;
  }
  return !Ol(t) && Wi(t);
} : function(t) {
  if ($l(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (Ux)
    return Wi(t);
  if (Ol(t))
    return !1;
  var r = Hr.call(t);
  return r !== kx && r !== Dx && !/^\[object HTML/.test(r) ? !1 : Wi(t);
}, Gx = Vx, zx = Object.prototype.toString, Pp = Object.prototype.hasOwnProperty, Yx = function(t, r, n) {
  for (var a = 0, o = t.length; a < o; a++)
    Pp.call(t, a) && (n == null ? r(t[a], a, t) : r.call(n, t[a], a, t));
}, Kx = function(t, r, n) {
  for (var a = 0, o = t.length; a < o; a++)
    n == null ? r(t.charAt(a), a, t) : r.call(n, t.charAt(a), a, t);
}, Xx = function(t, r, n) {
  for (var a in t)
    Pp.call(t, a) && (n == null ? r(t[a], a, t) : r.call(n, t[a], a, t));
};
function Qx(e) {
  return zx.call(e) === "[object Array]";
}
var Jx = function(t, r, n) {
  if (!Gx(r))
    throw new TypeError("iterator must be a function");
  var a;
  arguments.length >= 3 && (a = n), Qx(t) ? Yx(t, r, a) : typeof t == "string" ? Kx(t, r, a) : Xx(t, r, a);
}, Zx = [
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
], Vi = Zx, e1 = typeof globalThis > "u" ? Qr : globalThis, t1 = function() {
  for (var t = [], r = 0; r < Vi.length; r++)
    typeof e1[Vi[r]] == "function" && (t[t.length] = Vi[r]);
  return t;
}, cn = Jx, r1 = t1, vc = Dt, hs = Y, Wr = lt, Ar = cs, n1 = hs("Object.prototype.toString"), Sp = ut(), yc = typeof globalThis > "u" ? Qr : globalThis, xl = r1(), gs = hs("String.prototype.slice"), a1 = hs("Array.prototype.indexOf", !0) || function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n] === r)
      return n;
  return -1;
}, dn = { __proto__: null };
Sp && Wr && Ar ? cn(xl, function(e) {
  var t = new yc[e]();
  if (Symbol.toStringTag in t && Ar) {
    var r = Ar(t), n = Wr(r, Symbol.toStringTag);
    if (!n && r) {
      var a = Ar(r);
      n = Wr(a, Symbol.toStringTag);
    }
    dn["$" + e] = vc(n.get);
  }
}) : cn(xl, function(e) {
  var t = new yc[e](), r = t.slice || t.set;
  r && (dn[
    /** @type {`$${import('.').TypedArrayName}`} */
    "$" + e
  ] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
  // @ts-expect-error TODO FIXME
  vc(r));
});
var o1 = function(t) {
  var r = !1;
  return cn(
    /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
    dn,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(n, a) {
      if (!r)
        try {
          "$" + n(t) === a && (r = /** @type {import('.').TypedArrayName} */
          gs(a, 1));
        } catch {
        }
    }
  ), r;
}, i1 = function(t) {
  var r = !1;
  return cn(
    /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
    dn,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(n, a) {
      if (!r)
        try {
          n(t), r = /** @type {import('.').TypedArrayName} */
          gs(a, 1);
        } catch {
        }
    }
  ), r;
}, l1 = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!Sp) {
    var r = gs(n1(t), 8, -1);
    return a1(xl, r) > -1 ? r : r !== "Object" ? !1 : i1(t);
  }
  return Wr ? o1(t) : null;
}, s1 = Y, bc = s1("ArrayBuffer.prototype.byteLength", !0), u1 = bp, c1 = function(t) {
  return u1(t) ? bc ? bc(t) : t.byteLength : NaN;
}, Tp = gA, de = Hf, hc = WA, d1 = Ce, At = R$, f1 = ap, gc = x$, Ec = Kf, _c = op, Rc = bp, wc = F$, Cc = gp, Pc = Y$, Sc = ts, Tc = Px, Ac = Mx, Oc = l1, $c = c1, xc = de("SharedArrayBuffer.prototype.byteLength", !0), qc = de("Date.prototype.getTime"), Gi = Object.getPrototypeOf, Ic = de("Object.prototype.toString"), fn = d1("%Set%", !0), ql = de("Map.prototype.has", !0), pn = de("Map.prototype.get", !0), Mc = de("Map.prototype.size", !0), mn = de("Set.prototype.add", !0), Ap = de("Set.prototype.delete", !0), vn = de("Set.prototype.has", !0), Vr = de("Set.prototype.size", !0);
function Nc(e, t, r, n) {
  for (var a = At(e), o; (o = a.next()) && !o.done; )
    if (se(t, o.value, r, n))
      return Ap(e, o.value), !0;
  return !1;
}
function Op(e) {
  if (typeof e > "u")
    return null;
  if (typeof e != "object")
    return typeof e == "symbol" ? !1 : typeof e == "string" || typeof e == "number" ? +e == +e : !0;
}
function p1(e, t, r, n, a, o) {
  var i = Op(r);
  if (i != null)
    return i;
  var s = pn(t, i), l = Tp({}, a, { strict: !1 });
  return typeof s > "u" && !ql(t, i) || !se(n, s, l, o) ? !1 : !ql(e, i) && se(n, s, l, o);
}
function m1(e, t, r) {
  var n = Op(r);
  return n ?? (vn(t, n) && !vn(e, n));
}
function Bc(e, t, r, n, a, o) {
  for (var i = At(e), s, l; (s = i.next()) && !s.done; )
    if (l = s.value, // eslint-disable-next-line no-use-before-define
    se(r, l, a, o) && se(n, pn(t, l), a, o))
      return Ap(e, l), !0;
  return !1;
}
function se(e, t, r, n) {
  var a = r || {};
  if (a.strict ? gc(e, t) : e === t)
    return !0;
  var o = Tc(e), i = Tc(t);
  if (o !== i)
    return !1;
  if (!e || !t || typeof e != "object" && typeof t != "object")
    return a.strict ? gc(e, t) : e == t;
  var s = n.has(e), l = n.has(t), u;
  if (s && l) {
    if (n.get(e) === n.get(t))
      return !0;
  } else
    u = {};
  return s || n.set(e, u), l || n.set(t, u), b1(e, t, a, n);
}
function kc(e) {
  return !e || typeof e != "object" || typeof e.length != "number" || typeof e.copy != "function" || typeof e.slice != "function" || e.length > 0 && typeof e[0] != "number" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function v1(e, t, r, n) {
  if (Vr(e) !== Vr(t))
    return !1;
  for (var a = At(e), o = At(t), i, s, l; (i = a.next()) && !i.done; )
    if (i.value && typeof i.value == "object")
      l || (l = new fn()), mn(l, i.value);
    else if (!vn(t, i.value)) {
      if (r.strict || !m1(e, t, i.value))
        return !1;
      l || (l = new fn()), mn(l, i.value);
    }
  if (l) {
    for (; (s = o.next()) && !s.done; )
      if (s.value && typeof s.value == "object") {
        if (!Nc(l, s.value, r.strict, n))
          return !1;
      } else if (!r.strict && !vn(e, s.value) && !Nc(l, s.value, r.strict, n))
        return !1;
    return Vr(l) === 0;
  }
  return !0;
}
function y1(e, t, r, n) {
  if (Mc(e) !== Mc(t))
    return !1;
  for (var a = At(e), o = At(t), i, s, l, u, c, d; (i = a.next()) && !i.done; )
    if (u = i.value[0], c = i.value[1], u && typeof u == "object")
      l || (l = new fn()), mn(l, u);
    else if (d = pn(t, u), typeof d > "u" && !ql(t, u) || !se(c, d, r, n)) {
      if (r.strict || !p1(e, t, u, c, r, n))
        return !1;
      l || (l = new fn()), mn(l, u);
    }
  if (l) {
    for (; (s = o.next()) && !s.done; )
      if (u = s.value[0], d = s.value[1], u && typeof u == "object") {
        if (!Bc(l, e, u, d, r, n))
          return !1;
      } else if (!r.strict && (!e.has(u) || !se(pn(e, u), d, r, n)) && !Bc(l, e, u, d, Tp({}, r, { strict: !1 }), n))
        return !1;
    return Vr(l) === 0;
  }
  return !0;
}
function b1(e, t, r, n) {
  var a, o;
  if (typeof e != typeof t || e == null || t == null || Ic(e) !== Ic(t) || Ec(e) !== Ec(t))
    return !1;
  var i = _c(e), s = _c(t);
  if (i !== s)
    return !1;
  var l = e instanceof Error, u = t instanceof Error;
  if (l !== u || (l || u) && (e.name !== t.name || e.message !== t.message))
    return !1;
  var c = Cc(e), d = Cc(t);
  if (c !== d || (c || d) && (e.source !== t.source || hc(e) !== hc(t)))
    return !1;
  var f = wc(e), v = wc(t);
  if (f !== v || (f || v) && qc(e) !== qc(t) || r.strict && Gi && Gi(e) !== Gi(t))
    return !1;
  var y = Oc(e), h = Oc(t);
  if (y !== h)
    return !1;
  if (y || h) {
    if (e.length !== t.length)
      return !1;
    for (a = 0; a < e.length; a++)
      if (e[a] !== t[a])
        return !1;
    return !0;
  }
  var P = kc(e), p = kc(t);
  if (P !== p)
    return !1;
  if (P || p) {
    if (e.length !== t.length)
      return !1;
    for (a = 0; a < e.length; a++)
      if (e[a] !== t[a])
        return !1;
    return !0;
  }
  var E = Rc(e), C = Rc(t);
  if (E !== C)
    return !1;
  if (E || C)
    return $c(e) !== $c(t) ? !1 : typeof Uint8Array == "function" && se(new Uint8Array(e), new Uint8Array(t), r, n);
  var R = Pc(e), S = Pc(t);
  if (R !== S)
    return !1;
  if (R || S)
    return xc(e) !== xc(t) ? !1 : typeof Uint8Array == "function" && se(new Uint8Array(e), new Uint8Array(t), r, n);
  if (typeof e != typeof t)
    return !1;
  var m = Sc(e), b = Sc(t);
  if (m.length !== b.length)
    return !1;
  for (m.sort(), b.sort(), a = m.length - 1; a >= 0; a--)
    if (m[a] != b[a])
      return !1;
  for (a = m.length - 1; a >= 0; a--)
    if (o = m[a], !se(e[o], t[o], r, n))
      return !1;
  var g = Ac(e), I = Ac(t);
  return g !== I ? !1 : g === "Set" || I === "Set" ? v1(e, t, r, n) : g === "Map" ? y1(e, t, r, n) : !0;
}
var h1 = function(t, r, n) {
  return se(t, r, n, f1());
};
Object.defineProperty(oi, "__esModule", {
  value: !0
});
oi.default = void 0;
var g1 = Es(h1), E1 = Es(it), $p = Es(kt);
function Es(e) {
  return e && e.__esModule ? e : { default: e };
}
function zi(e, t) {
  return w1(e) || R1(e, t) || xp(e, t) || _1();
}
function _1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function R1(e, t) {
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
function w1(e) {
  if (Array.isArray(e))
    return e;
}
function C1(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = xp(e)) || t && e && typeof e.length == "number") {
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
function xp(e, t) {
  if (e) {
    if (typeof e == "string")
      return Dc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Dc(e, t);
  }
}
function Dc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var qe = [], Lc = $p.default.keys();
for (var Yi = 0; Yi < Lc.length; Yi++) {
  var Ki = Lc[Yi], Xi = $p.default.get(Ki);
  if (Xi)
    for (var Fc = [].concat(Xi.baseConcepts, Xi.relatedConcepts), Qi = 0; Qi < Fc.length; Qi++) {
      var jc = Fc[Qi];
      if (jc.module === "HTML") {
        var Ji = jc.concept;
        Ji && function() {
          var e = JSON.stringify(Ji), t = qe.find(function(o) {
            return JSON.stringify(o[0]) === e;
          }), r = void 0;
          t ? r = t[1] : r = [];
          for (var n = !0, a = 0; a < r.length; a++)
            if (r[a] === Ki) {
              n = !1;
              break;
            }
          n && r.push(Ki), qe.push([Ji, r]);
        }();
      }
    }
}
var Il = {
  entries: function() {
    return qe;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = C1(qe), a;
    try {
      for (n.s(); !(a = n.n()).done; ) {
        var o = zi(a.value, 2), i = o[0], s = o[1];
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
      return (0, g1.default)(t, n[0]);
    });
    return r && r[1];
  },
  has: function(t) {
    return !!Il.get(t);
  },
  keys: function() {
    return qe.map(function(t) {
      var r = zi(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return qe.map(function(t) {
      var r = zi(t, 2), n = r[1];
      return n;
    });
  }
}, P1 = (0, E1.default)(Il, Il.entries());
oi.default = P1;
var fi = {};
Object.defineProperty(fi, "__esModule", {
  value: !0
});
fi.default = void 0;
var S1 = Ip(it), qp = Ip(kt);
function Ip(e) {
  return e && e.__esModule ? e : { default: e };
}
function Zi(e, t) {
  return O1(e) || A1(e, t) || Mp(e, t) || T1();
}
function T1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function A1(e, t) {
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
function O1(e) {
  if (Array.isArray(e))
    return e;
}
function $1(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Mp(e)) || t && e && typeof e.length == "number") {
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
function Mp(e, t) {
  if (e) {
    if (typeof e == "string")
      return Uc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Uc(e, t);
  }
}
function Uc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Ie = [], Np = qp.default.keys(), x1 = function(t) {
  var r = Np[t], n = qp.default.get(r);
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
for (var el = 0; el < Np.length; el++)
  x1(el);
var Ml = {
  entries: function() {
    return Ie;
  },
  forEach: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = $1(Ie), a;
    try {
      for (n.s(); !(a = n.n()).done; ) {
        var o = Zi(a.value, 2), i = o[0], s = o[1];
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
    return !!Ml.get(t);
  },
  keys: function() {
    return Ie.map(function(t) {
      var r = Zi(t, 1), n = r[0];
      return n;
    });
  },
  values: function() {
    return Ie.map(function(t) {
      var r = Zi(t, 2), n = r[1];
      return n;
    });
  }
}, q1 = (0, S1.default)(Ml, Ml.entries());
fi.default = q1;
Object.defineProperty(le, "__esModule", {
  value: !0
});
var ae = le.roles = kp = le.roleElements = Bp = le.elementRoles = le.dom = le.aria = void 0, I1 = hr(wn), M1 = hr(Pn), N1 = hr(kt), B1 = hr(oi), k1 = hr(fi);
function hr(e) {
  return e && e.__esModule ? e : { default: e };
}
var D1 = I1.default;
le.aria = D1;
var L1 = M1.default;
le.dom = L1;
var F1 = N1.default;
ae = le.roles = F1;
var j1 = B1.default, Bp = le.elementRoles = j1, U1 = k1.default, kp = le.roleElements = U1, _s = { exports: {} };
_s.exports;
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
        var d, f, v = {}, y = {}, h = "", P = "", p = "", E = 2, C = 3, R = 2, S = [], m = 0, b = 0, g;
        for (g = 0; g < l.length; g += 1)
          if (h = l.charAt(g), Object.prototype.hasOwnProperty.call(v, h) || (v[h] = C++, y[h] = !0), P = p + h, Object.prototype.hasOwnProperty.call(v, P))
            p = P;
          else {
            if (Object.prototype.hasOwnProperty.call(y, p)) {
              if (p.charCodeAt(0) < 256) {
                for (d = 0; d < R; d++)
                  m = m << 1, b == u - 1 ? (b = 0, S.push(c(m)), m = 0) : b++;
                for (f = p.charCodeAt(0), d = 0; d < 8; d++)
                  m = m << 1 | f & 1, b == u - 1 ? (b = 0, S.push(c(m)), m = 0) : b++, f = f >> 1;
              } else {
                for (f = 1, d = 0; d < R; d++)
                  m = m << 1 | f, b == u - 1 ? (b = 0, S.push(c(m)), m = 0) : b++, f = 0;
                for (f = p.charCodeAt(0), d = 0; d < 16; d++)
                  m = m << 1 | f & 1, b == u - 1 ? (b = 0, S.push(c(m)), m = 0) : b++, f = f >> 1;
              }
              E--, E == 0 && (E = Math.pow(2, R), R++), delete y[p];
            } else
              for (f = v[p], d = 0; d < R; d++)
                m = m << 1 | f & 1, b == u - 1 ? (b = 0, S.push(c(m)), m = 0) : b++, f = f >> 1;
            E--, E == 0 && (E = Math.pow(2, R), R++), v[P] = C++, p = String(h);
          }
        if (p !== "") {
          if (Object.prototype.hasOwnProperty.call(y, p)) {
            if (p.charCodeAt(0) < 256) {
              for (d = 0; d < R; d++)
                m = m << 1, b == u - 1 ? (b = 0, S.push(c(m)), m = 0) : b++;
              for (f = p.charCodeAt(0), d = 0; d < 8; d++)
                m = m << 1 | f & 1, b == u - 1 ? (b = 0, S.push(c(m)), m = 0) : b++, f = f >> 1;
            } else {
              for (f = 1, d = 0; d < R; d++)
                m = m << 1 | f, b == u - 1 ? (b = 0, S.push(c(m)), m = 0) : b++, f = 0;
              for (f = p.charCodeAt(0), d = 0; d < 16; d++)
                m = m << 1 | f & 1, b == u - 1 ? (b = 0, S.push(c(m)), m = 0) : b++, f = f >> 1;
            }
            E--, E == 0 && (E = Math.pow(2, R), R++), delete y[p];
          } else
            for (f = v[p], d = 0; d < R; d++)
              m = m << 1 | f & 1, b == u - 1 ? (b = 0, S.push(c(m)), m = 0) : b++, f = f >> 1;
          E--, E == 0 && (E = Math.pow(2, R), R++);
        }
        for (f = 2, d = 0; d < R; d++)
          m = m << 1 | f & 1, b == u - 1 ? (b = 0, S.push(c(m)), m = 0) : b++, f = f >> 1;
        for (; ; )
          if (m = m << 1, b == u - 1) {
            S.push(c(m));
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
        var d = [], f = 4, v = 4, y = 3, h = "", P = [], p, E, C, R, S, m, b, g = { val: c(0), position: u, index: 1 };
        for (p = 0; p < 3; p += 1)
          d[p] = p;
        for (C = 0, S = Math.pow(2, 2), m = 1; m != S; )
          R = g.val & g.position, g.position >>= 1, g.position == 0 && (g.position = u, g.val = c(g.index++)), C |= (R > 0 ? 1 : 0) * m, m <<= 1;
        switch (C) {
          case 0:
            for (C = 0, S = Math.pow(2, 8), m = 1; m != S; )
              R = g.val & g.position, g.position >>= 1, g.position == 0 && (g.position = u, g.val = c(g.index++)), C |= (R > 0 ? 1 : 0) * m, m <<= 1;
            b = r(C);
            break;
          case 1:
            for (C = 0, S = Math.pow(2, 16), m = 1; m != S; )
              R = g.val & g.position, g.position >>= 1, g.position == 0 && (g.position = u, g.val = c(g.index++)), C |= (R > 0 ? 1 : 0) * m, m <<= 1;
            b = r(C);
            break;
          case 2:
            return "";
        }
        for (d[3] = b, E = b, P.push(b); ; ) {
          if (g.index > l)
            return "";
          for (C = 0, S = Math.pow(2, y), m = 1; m != S; )
            R = g.val & g.position, g.position >>= 1, g.position == 0 && (g.position = u, g.val = c(g.index++)), C |= (R > 0 ? 1 : 0) * m, m <<= 1;
          switch (b = C) {
            case 0:
              for (C = 0, S = Math.pow(2, 8), m = 1; m != S; )
                R = g.val & g.position, g.position >>= 1, g.position == 0 && (g.position = u, g.val = c(g.index++)), C |= (R > 0 ? 1 : 0) * m, m <<= 1;
              d[v++] = r(C), b = v - 1, f--;
              break;
            case 1:
              for (C = 0, S = Math.pow(2, 16), m = 1; m != S; )
                R = g.val & g.position, g.position >>= 1, g.position == 0 && (g.position = u, g.val = c(g.index++)), C |= (R > 0 ? 1 : 0) * m, m <<= 1;
              d[v++] = r(C), b = v - 1, f--;
              break;
            case 2:
              return P.join("");
          }
          if (f == 0 && (f = Math.pow(2, y), y++), d[b])
            h = d[b];
          else if (b === v)
            h = E + E.charAt(0);
          else
            return null;
          P.push(h), d[v++] = E + h.charAt(0), f--, E = h, f == 0 && (f = Math.pow(2, y), y++);
        }
      }
    };
    return s;
  }();
  e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return t;
  });
})(_s);
var H1 = _s.exports;
const W1 = /* @__PURE__ */ Qv(H1);
function Dp(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const V1 = (e, t, r, n, a, o, i) => {
  const s = n + r.indent, l = r.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, r, s, a, o);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = r.spacingOuter + s + d + r.spacingOuter + n), d = "{" + d + "}"), r.spacingInner + n + l.prop.open + u + l.prop.close + "=" + l.value.open + d + l.value.close;
  }).join("");
}, G1 = 3, z1 = (e, t, r, n, a, o) => e.map((i) => {
  const s = typeof i == "string" ? Lp(i, t) : o(i, t, r, n, a);
  return s === "" && typeof i == "object" && i !== null && i.nodeType !== G1 ? "" : t.spacingOuter + r + s;
}).join(""), Lp = (e, t) => {
  const r = t.colors.content;
  return r.open + Dp(e) + r.close;
}, Y1 = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + Dp(e) + "-->" + r.close;
}, K1 = (e, t, r, n, a) => {
  const o = n.colors.tag;
  return o.open + "<" + e + (t && o.close + t + n.spacingOuter + a + o.open) + (r ? ">" + o.close + r + n.spacingOuter + a + o.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + o.close;
}, X1 = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
}, Q1 = 1, Fp = 3, jp = 8, Up = 11, J1 = /^((HTML|SVG)\w*)?Element$/, Z1 = (e) => {
  const t = e.constructor.name, {
    nodeType: r,
    tagName: n
  } = e, a = typeof n == "string" && n.includes("-") || typeof e.hasAttribute == "function" && e.hasAttribute("is");
  return r === Q1 && (J1.test(t) || a) || r === Fp && t === "Text" || r === jp && t === "Comment" || r === Up && t === "DocumentFragment";
};
function eq(e) {
  return e.nodeType === Fp;
}
function tq(e) {
  return e.nodeType === jp;
}
function tl(e) {
  return e.nodeType === Up;
}
function rq(e) {
  return {
    test: (t) => {
      var r;
      return (t == null || (r = t.constructor) == null ? void 0 : r.name) && Z1(t);
    },
    serialize: (t, r, n, a, o, i) => {
      if (eq(t))
        return Lp(t.data, r);
      if (tq(t))
        return Y1(t.data, r);
      const s = tl(t) ? "DocumentFragment" : t.tagName.toLowerCase();
      return ++a > r.maxDepth ? X1(s, r) : K1(s, V1(tl(t) ? [] : Array.from(t.attributes).map((l) => l.name).sort(), tl(t) ? {} : Array.from(t.attributes).reduce((l, u) => (l[u.name] = u.value, l), {}), r, n + r.indent, a, o, i), z1(Array.prototype.slice.call(t.childNodes || t.children).filter(e), r, n + r.indent, a, o, i), r, n);
    }
  };
}
let Hp = null, Rs = null, ws = null;
try {
  const e = module && module.require;
  Rs = e.call(module, "fs").readFileSync, ws = e.call(module, "@babel/code-frame").codeFrameColumns, Hp = e.call(module, "chalk");
} catch {
}
function nq(e) {
  const t = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.slice(t, r), a = n.split(":"), [o, i, s] = [a[0], parseInt(a[1], 10), parseInt(a[2], 10)];
  let l = "";
  try {
    l = Rs(o, "utf-8");
  } catch {
    return "";
  }
  const u = ws(l, {
    start: {
      line: i,
      column: s
    }
  }, {
    highlightCode: !0,
    linesBelow: 0
  });
  return Hp.dim(n) + `
` + u + `
`;
}
function aq() {
  if (!Rs || !ws)
    return "";
  const t = new Error().stack.split(`
`).slice(1).find((r) => !r.includes("node_modules/"));
  return nq(t);
}
const Wp = 3;
function rl() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function Cs() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function Vp(e) {
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
const oq = () => {
  let e;
  try {
    var t;
    e = JSON.parse((t = process) == null || (t = t.env) == null ? void 0 : t.COLORS);
  } catch {
  }
  return typeof e == "boolean" ? e : typeof process < "u" && process.versions !== void 0 && process.versions.node !== void 0;
}, {
  DOMCollection: iq
} = Ql, lq = 1, sq = 8;
function uq(e) {
  return e.nodeType !== sq && (e.nodeType !== lq || !e.matches(q().defaultIgnore));
}
function lr(e, t, r) {
  if (r === void 0 && (r = {}), e || (e = Cs().body), typeof t != "number" && (t = typeof process < "u" && process.env.DEBUG_PRINT_LIMIT || 7e3), t === 0)
    return "";
  e.documentElement && (e = e.documentElement);
  let n = typeof e;
  if (n === "object" ? n = e.constructor.name : e = {}, !("outerHTML" in e))
    throw new TypeError("Expected an element or document but got " + n);
  const {
    filterNode: a = uq,
    ...o
  } = r, i = Kd(e, {
    plugins: [rq(a), iq],
    printFunctionName: !1,
    highlight: oq(),
    ...o
  });
  return t !== void 0 && e.outerHTML.length > t ? i.slice(0, t) + "..." : i;
}
const Nl = function() {
  const e = aq();
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
function cq(e) {
  try {
    return rt._disableExpensiveErrorDiagnostics = !0, e();
  } finally {
    rt._disableExpensiveErrorDiagnostics = !1;
  }
}
function dq(e) {
  typeof e == "function" && (e = e(rt)), rt = {
    ...rt,
    ...e
  };
}
function q() {
  return rt;
}
const fq = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function Gp(e) {
  return fq.includes(e.nodeName.toLowerCase()) ? "" : e.nodeType === Wp ? e.textContent : Array.from(e.childNodes).map((t) => Gp(t)).join("");
}
function Bl(e) {
  let t;
  return e.tagName.toLowerCase() === "label" ? t = Gp(e) : t = e.value || e.textContent, t;
}
function zp(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!pq(e))
    return [];
  const r = e.ownerDocument.querySelectorAll("label");
  return Array.from(r).filter((n) => n.control === e);
}
function pq(e) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || e.tagName === "INPUT" && e.getAttribute("type") !== "hidden";
}
function Yp(e, t, r) {
  let {
    selector: n = "*"
  } = r === void 0 ? {} : r;
  const a = t.getAttribute("aria-labelledby"), o = a ? a.split(" ") : [];
  return o.length ? o.map((i) => {
    const s = e.querySelector('[id="' + i + '"]');
    return s ? {
      content: Bl(s),
      formControl: null
    } : {
      content: "",
      formControl: null
    };
  }) : Array.from(zp(t)).map((i) => {
    const s = Bl(i), l = "button, input, meter, output, progress, select, textarea", u = Array.from(i.querySelectorAll(l)).filter((c) => c.matches(n))[0];
    return {
      content: s,
      formControl: u
    };
  });
}
function Kp(e) {
  if (e == null)
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
      "It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?"
    );
}
function Lt(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  Kp(r);
  const a = n(e);
  return typeof r == "string" || typeof r == "number" ? a.toLowerCase().includes(r.toString().toLowerCase()) : typeof r == "function" ? r(a, t) : Xp(r, a);
}
function Ee(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  Kp(r);
  const a = n(e);
  return r instanceof Function ? r(a, t) : r instanceof RegExp ? Xp(r, a) : a === String(r);
}
function Ps(e) {
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
    return Ps({
      trim: t,
      collapseWhitespace: r
    });
  if (typeof t < "u" || typeof r < "u")
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  return n;
}
function Xp(e, t) {
  const r = e.test(t);
  return e.global && e.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), r;
}
function gr(e) {
  return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((t) => t.nodeType === Wp && !!t.textContent).map((t) => t.textContent).join("");
}
const mq = vq(Bp);
function Qp(e) {
  return e.hidden === !0 || e.getAttribute("aria-hidden") === "true" || e.ownerDocument.defaultView.getComputedStyle(e).display === "none";
}
function pi(e, t) {
  t === void 0 && (t = {});
  const {
    isSubtreeInaccessible: r = Qp
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
function Ss(e) {
  for (const {
    match: t,
    roles: r
  } of mq)
    if (t(e))
      return [...r];
  return [];
}
function vq(e) {
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
function Jp(e, t) {
  let {
    hidden: r = !1
  } = t === void 0 ? {} : t;
  function n(a) {
    return [a, ...Array.from(a.children).reduce((o, i) => [...o, ...n(i)], [])];
  }
  return n(e).filter((a) => r === !1 ? pi(a) === !1 : !0).reduce((a, o) => {
    let i = [];
    return o.hasAttribute("role") ? i = o.getAttribute("role").split(" ").slice(0, 1) : i = Ss(o), i.reduce((s, l) => Array.isArray(s[l]) ? {
      ...s,
      [l]: [...s[l], o]
    } : {
      ...s,
      [l]: [o]
    }, a);
  }, {});
}
function Zp(e, t) {
  let {
    hidden: r,
    includeDescription: n
  } = t;
  const a = Jp(e, {
    hidden: r
  });
  return Object.entries(a).filter((o) => {
    let [i] = o;
    return i !== "generic";
  }).map((o) => {
    let [i, s] = o;
    const l = "-".repeat(50), u = s.map((c) => {
      const d = 'Name "' + Zl(c, {
        computedStyleSupportsPseudoElements: q().computedStyleSupportsPseudoElements
      }) + `":
`, f = lr(c.cloneNode(!1));
      if (n) {
        const v = 'Description "' + yf(c, {
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
const yq = function(e, t) {
  let {
    hidden: r = !1
  } = t === void 0 ? {} : t;
  return console.log(Zp(e, {
    hidden: r
  }));
};
function bq(e) {
  return e.tagName === "OPTION" ? e.selected : Er(e, "aria-selected");
}
function hq(e) {
  return e.getAttribute("aria-busy") === "true";
}
function gq(e) {
  if (!("indeterminate" in e && e.indeterminate))
    return "checked" in e ? e.checked : Er(e, "aria-checked");
}
function Eq(e) {
  return Er(e, "aria-pressed");
}
function _q(e) {
  var t, r;
  return (t = (r = Er(e, "aria-current")) != null ? r : e.getAttribute("aria-current")) != null ? t : !1;
}
function Rq(e) {
  return Er(e, "aria-expanded");
}
function Er(e, t) {
  const r = e.getAttribute(t);
  if (r === "true")
    return !0;
  if (r === "false")
    return !1;
}
function wq(e) {
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
function Cq(e) {
  const t = e.getAttribute("aria-valuenow");
  return t === null ? void 0 : +t;
}
function Pq(e) {
  const t = e.getAttribute("aria-valuemax");
  return t === null ? void 0 : +t;
}
function Sq(e) {
  const t = e.getAttribute("aria-valuemin");
  return t === null ? void 0 : +t;
}
function Tq(e) {
  const t = e.getAttribute("aria-valuetext");
  return t === null ? void 0 : t;
}
const Hc = Ps();
function Aq(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function Wc(e) {
  return new RegExp(Aq(e.toLowerCase()), "i");
}
function Te(e, t, r, n) {
  let {
    variant: a,
    name: o
  } = n, i = "";
  const s = {}, l = [["Role", "TestId"].includes(e) ? r : Wc(r)];
  o && (s.name = Wc(o)), e === "Role" && pi(t) && (s.hidden = !0, i = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
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
  const o = (n = e.getAttribute("role")) != null ? n : (a = Ss(e)) == null ? void 0 : a[0];
  if (o !== "generic" && Ae("Role", r, o))
    return Te("Role", e, o, {
      variant: t,
      name: Zl(e, {
        computedStyleSupportsPseudoElements: q().computedStyleSupportsPseudoElements
      })
    });
  const i = Yp(document, e).map((f) => f.content).join(" ");
  if (Ae("LabelText", r, i))
    return Te("LabelText", e, i, {
      variant: t
    });
  const s = e.getAttribute("placeholder");
  if (Ae("PlaceholderText", r, s))
    return Te("PlaceholderText", e, s, {
      variant: t
    });
  const l = Hc(gr(e));
  if (Ae("Text", r, l))
    return Te("Text", e, l, {
      variant: t
    });
  if (Ae("DisplayValue", r, e.value))
    return Te("DisplayValue", e, Hc(e.value), {
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
function Oq(e, t) {
  let {
    container: r = Cs(),
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
    let d, f, v, y = !1, h = "idle";
    const P = setTimeout(S, n), p = rl();
    if (p) {
      const {
        unstable_advanceTimersWrapper: m
      } = q();
      for (R(); !y; ) {
        if (!rl()) {
          const b = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          a || Or(b, o), c(b);
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
      } catch (b) {
        c(b);
        return;
      }
      f = setInterval(C, i);
      const {
        MutationObserver: m
      } = Vp(r);
      v = new m(C), v.observe(r, l), R();
    }
    function E(m, b) {
      y = !0, clearTimeout(P), p || (clearInterval(f), v.disconnect()), m ? c(m) : u(b);
    }
    function C() {
      if (rl()) {
        const m = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return a || Or(m, o), c(m);
      } else
        return R();
    }
    function R() {
      if (h !== "pending")
        try {
          const m = cq(e);
          typeof (m == null ? void 0 : m.then) == "function" ? (h = "pending", m.then((b) => {
            h = "resolved", E(null, b);
          }, (b) => {
            h = "rejected", d = b;
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
function Ts(e, t) {
  const r = new Error("STACK_TRACE_MESSAGE");
  return q().asyncWrapper(() => Oq(e, {
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
function em(e, t, r, n) {
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
function tm(e, t) {
  return q().getElementError(`A better query is available, try this:
` + e.toString() + `
`, t);
}
function As(e, t) {
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
  return (t, r, n, a) => Ts(() => e(t, r, n), {
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
      throw tm(u.toString(), n);
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
      throw tm(u[0], n);
  }
  return s;
};
function Se(e, t, r) {
  const n = We(Ot(e, t), e.name, "query"), a = As(e, r), o = Ot(a, t), i = We(o, e.name, "get"), s = Q(a, e.name.replace("query", "get"), "getAll"), l = $t(Q(a, e.name, "findAll")), u = $t(We(o, e.name, "find"));
  return [n, s, i, l, u];
}
var $q = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getElementError: mi,
  wrapAllByQueryWithSuggestion: Q,
  wrapSingleQueryWithSuggestion: We,
  getMultipleElementsFoundError: vi,
  queryAllByAttribute: ft,
  queryByAttribute: em,
  makeSingleQuery: Ot,
  makeGetAllQuery: As,
  makeFindQuery: $t,
  buildQueries: Se
});
function xq(e) {
  return Array.from(e.querySelectorAll("label,input")).map((t) => ({
    node: t,
    textToMatch: Bl(t)
  })).filter((t) => {
    let {
      textToMatch: r
    } = t;
    return r !== null;
  });
}
const qq = function(e, t, r) {
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
  return xq(e).filter((c) => {
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
  }), c = Array.from(e.querySelectorAll("*")).filter((d) => zp(d).length || d.hasAttribute("aria-labelledby")).reduce((d, f) => {
    const v = Yp(e, f, {
      selector: n
    });
    v.filter((h) => !!h.formControl).forEach((h) => {
      l(h.content, h.formControl, t, u) && h.formControl && d.push(h.formControl);
    });
    const y = v.filter((h) => !!h.content).map((h) => h.content);
    return l(y.join(" "), f, t, u) && d.push(f), y.length > 1 && y.forEach((h, P) => {
      l(h, f, t, u) && d.push(f);
      const p = [...y];
      p.splice(P, 1), p.length > 1 && l(p.join(" "), f, t, u) && d.push(f);
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
    const i = qq(e, t, ...n);
    if (i.length) {
      const s = i.map((l) => Iq(e, l)).filter((l) => !!l);
      throw s.length ? q().getElementError(s.map((l) => "Found a label with the text of: " + t + ", however the element associated with this label (<" + l + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + l + " />, you can use aria-label or aria-labelledby instead.").join(`

`), e) : q().getElementError("Found a label with the text of: " + t + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, e);
    } else
      throw q().getElementError("Unable to find a label with the text of: " + t, e);
  }
  return o;
};
function Iq(e, t) {
  const r = t.getAttribute("for");
  if (!r)
    return null;
  const n = e.querySelector('[id="' + r + '"]');
  return n ? n.tagName.toLowerCase() : null;
}
const rm = (e, t) => "Found multiple elements with the text of: " + t, nm = We(Ot(sr, rm), sr.name, "query"), am = Ot(nt, rm), om = $t(Q(nt, nt.name, "findAll")), im = $t(We(am, nt.name, "find")), lm = Q(nt, nt.name, "getAll"), sm = We(am, nt.name, "get"), um = Q(sr, sr.name, "queryAll"), kl = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Pe(t[0]), ft("placeholder", ...t);
}, Mq = (e, t) => "Found multiple elements with the placeholder text of: " + t, Nq = (e, t) => "Unable to find an element with the placeholder text of: " + t, cm = Q(kl, kl.name, "queryAll"), [dm, fm, pm, mm, vm] = Se(kl, Mq, Nq), Dl = function(e, t, r) {
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
}, Bq = (e, t) => "Found multiple elements with the text: " + t, kq = function(e, t, r) {
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
}, ym = Q(Dl, Dl.name, "queryAll"), [bm, hm, gm, Em, _m] = Se(Dl, Bq, kq), Ll = function(e, t, r) {
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
}, Dq = (e, t) => "Found multiple elements with the display value: " + t + ".", Lq = (e, t) => "Unable to find an element with the display value: " + t + ".", Rm = Q(Ll, Ll.name, "queryAll"), [wm, Cm, Pm, Sm, Tm] = Se(Ll, Dq, Lq), Fq = /^(img|input|area|.+-.+)$/i, Fl = function(e, t, r) {
  return r === void 0 && (r = {}), Pe(e), ft("alt", e, t, r).filter((n) => Fq.test(n.tagName));
}, jq = (e, t) => "Found multiple elements with the alt text: " + t, Uq = (e, t) => "Unable to find an element with the alt text: " + t, Am = Q(Fl, Fl.name, "queryAll"), [Om, $m, xm, qm, Im] = Se(Fl, jq, Uq), Hq = (e) => {
  var t;
  return e.tagName.toLowerCase() === "title" && ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === "svg";
}, jl = function(e, t, r) {
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
  return Array.from(e.querySelectorAll("[title], svg > title")).filter((u) => s(u.getAttribute("title"), u, t, l) || Hq(u) && s(gr(u), u, t, l));
}, Wq = (e, t) => "Found multiple elements with the title: " + t + ".", Vq = (e, t) => "Unable to find an element with the title: " + t + ".", Mm = Q(jl, jl.name, "queryAll"), [Nm, Bm, km, Dm, Lm] = Se(jl, Wq, Vq), Ul = function(e, t, r) {
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
      min: h,
      max: P,
      text: p
    } = {}
  } = r === void 0 ? {} : r;
  if (Pe(e), s !== void 0) {
    var E;
    if (((E = ae.get(t)) == null ? void 0 : E.props["aria-selected"]) === void 0)
      throw new Error('"aria-selected" is not supported on role "' + t + '".');
  }
  if (l !== void 0) {
    var C;
    if (((C = ae.get(t)) == null ? void 0 : C.props["aria-busy"]) === void 0)
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
    var b;
    if (((b = ae.get(t)) == null ? void 0 : b.props["aria-valuenow"]) === void 0)
      throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
  }
  if (P !== void 0) {
    var g;
    if (((g = ae.get(t)) == null ? void 0 : g.props["aria-valuemax"]) === void 0)
      throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
  }
  if (h !== void 0) {
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
    return U.has(A) || U.set(A, Qp(A)), U.get(A);
  }
  return Array.from(e.querySelectorAll(
    // Only query elements that can be matched by the following filters
    Gq(t)
  )).filter((A) => {
    if (A.hasAttribute("role")) {
      const Z = A.getAttribute("role");
      if (i)
        return Z.split(" ").filter(Boolean).some((yi) => yi === t);
      const [Xe] = Z.split(" ");
      return Xe === t;
    }
    return Ss(A).some((Z) => Z === t);
  }).filter((A) => {
    if (s !== void 0)
      return s === bq(A);
    if (l !== void 0)
      return l === hq(A);
    if (u !== void 0)
      return u === gq(A);
    if (c !== void 0)
      return c === Eq(A);
    if (d !== void 0)
      return d === _q(A);
    if (v !== void 0)
      return v === Rq(A);
    if (f !== void 0)
      return f === wq(A);
    if (y !== void 0 || P !== void 0 || h !== void 0 || p !== void 0) {
      let H = !0;
      if (y !== void 0 && H && (H = y === Cq(A)), P !== void 0 && H && (H = P === Pq(A)), h !== void 0 && H && (H = h === Sq(A)), p !== void 0) {
        var M;
        H && (H = Ee((M = Tq(A)) != null ? M : null, A, p, (Z) => Z));
      }
      return H;
    }
    return !0;
  }).filter((A) => a === void 0 ? !0 : Ee(Zl(A, {
    computedStyleSupportsPseudoElements: q().computedStyleSupportsPseudoElements
  }), A, a, (M) => M)).filter((A) => o === void 0 ? !0 : Ee(yf(A, {
    computedStyleSupportsPseudoElements: q().computedStyleSupportsPseudoElements
  }), A, o, (M) => M)).filter((A) => n === !1 ? pi(A, {
    isSubtreeInaccessible: w
  }) === !1 : !0);
};
function Gq(e) {
  var t;
  const r = '*[role~="' + e + '"]', n = (t = kp.get(e)) != null ? t : /* @__PURE__ */ new Set(), a = new Set(Array.from(n).map((o) => {
    let {
      name: i
    } = o;
    return i;
  }));
  return [r].concat(Array.from(a)).join(",");
}
const Fm = (e) => {
  let t = "";
  return e === void 0 ? t = "" : typeof e == "string" ? t = ' and name "' + e + '"' : t = " and name `" + e + "`", t;
}, zq = function(e, t, r) {
  let {
    name: n
  } = r === void 0 ? {} : r;
  return 'Found multiple elements with the role "' + t + '"' + Fm(n);
}, Yq = function(e, t, r) {
  let {
    hidden: n = q().defaultHidden,
    name: a,
    description: o
  } = r === void 0 ? {} : r;
  if (q()._disableExpensiveErrorDiagnostics)
    return 'Unable to find role="' + t + '"' + Fm(a);
  let i = "";
  Array.from(e.children).forEach((c) => {
    i += Zp(c, {
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
}, jm = Q(Ul, Ul.name, "queryAll"), [Um, Hm, Wm, Vm, Gm] = Se(Ul, zq, Yq), Os = () => q().testIdAttribute, Hl = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Pe(t[0]), ft(Os(), ...t);
}, Kq = (e, t) => "Found multiple elements by: [" + Os() + '="' + t + '"]', Xq = (e, t) => "Unable to find an element by: [" + Os() + '="' + t + '"]', zm = Q(Hl, Hl.name, "queryAll"), [Ym, Km, Xm, Qm, Jm] = Se(Hl, Kq, Xq);
var bn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  queryAllByLabelText: um,
  queryByLabelText: nm,
  getAllByLabelText: lm,
  getByLabelText: sm,
  findAllByLabelText: om,
  findByLabelText: im,
  queryByPlaceholderText: dm,
  queryAllByPlaceholderText: cm,
  getByPlaceholderText: pm,
  getAllByPlaceholderText: fm,
  findAllByPlaceholderText: mm,
  findByPlaceholderText: vm,
  queryByText: bm,
  queryAllByText: ym,
  getByText: gm,
  getAllByText: hm,
  findAllByText: Em,
  findByText: _m,
  queryByDisplayValue: wm,
  queryAllByDisplayValue: Rm,
  getByDisplayValue: Pm,
  getAllByDisplayValue: Cm,
  findAllByDisplayValue: Sm,
  findByDisplayValue: Tm,
  queryByAltText: Om,
  queryAllByAltText: Am,
  getByAltText: xm,
  getAllByAltText: $m,
  findAllByAltText: qm,
  findByAltText: Im,
  queryByTitle: Nm,
  queryAllByTitle: Mm,
  getByTitle: km,
  getAllByTitle: Bm,
  findAllByTitle: Dm,
  findByTitle: Lm,
  queryByRole: Um,
  queryAllByRole: jm,
  getAllByRole: Hm,
  getByRole: Wm,
  findAllByRole: Vm,
  findByRole: Gm,
  queryByTestId: Ym,
  queryAllByTestId: zm,
  getByTestId: Xm,
  getAllByTestId: Km,
  findAllByTestId: Qm,
  findByTestId: Jm
});
function Wl(e, t, r) {
  return t === void 0 && (t = bn), r === void 0 && (r = {}), Object.keys(t).reduce((n, a) => {
    const o = t[a];
    return n[a] = o.bind(null, e), n;
  }, r);
}
const Zm = (e) => !e || Array.isArray(e) && !e.length;
function Vc(e) {
  if (Zm(e))
    throw new Error("The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.");
}
async function Qq(e, t) {
  const r = new Error("Timed out in waitForElementToBeRemoved.");
  if (typeof e != "function") {
    Vc(e);
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
  return Vc(e()), Ts(() => {
    let n;
    try {
      n = e();
    } catch (a) {
      if (a.name === "TestingLibraryElementError")
        return;
      throw a;
    }
    if (!Zm(n))
      throw r;
  }, t);
}
const Gc = {
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
}, zc = {
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
  s !== void 0 && Jq(t, s), l !== void 0 && Object.defineProperty(t, "files", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: l
  }), Object.assign(t, u);
  const c = Vp(t), d = c[a] || c.Event;
  let f;
  if (typeof d == "function")
    f = new d(e, i);
  else {
    f = c.document.createEvent(a);
    const {
      bubbles: y,
      cancelable: h,
      detail: P,
      ...p
    } = i;
    f.initEvent(e, y, h, P), Object.keys(p).forEach((E) => {
      f[E] = p[E];
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
Object.keys(Gc).forEach((e) => {
  const {
    EventType: t,
    defaultInit: r
  } = Gc[e], n = e.toLowerCase();
  Gr[e] = (a, o) => Gr(n, a, o, {
    EventType: t,
    defaultInit: r
  }), ur[e] = (a, o) => ur(a, Gr[e](a, o));
});
function Jq(e, t) {
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
Object.keys(zc).forEach((e) => {
  const t = zc[e];
  ur[e] = function() {
    return ur[t](...arguments);
  };
});
function Zq(e) {
  return e.replace(/[ \t]*[\n][ \t]*/g, `
`);
}
function eI(e) {
  return W1.compressToEncodedURIComponent(Zq(e));
}
function tI(e) {
  return "https://testing-playground.com/#markup=" + eI(e);
}
const rI = (e, t, r) => Array.isArray(e) ? e.forEach((n) => Nl(n, t, r)) : Nl(e, t, r), nI = function(e) {
  if (e === void 0 && (e = Cs().body), !e || !("innerHTML" in e)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  if (!e.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const t = tI(e.innerHTML);
  return console.log(`Open this URL in your browser

` + t), t;
}, Yc = {
  debug: rI,
  logTestingPlaygroundURL: nI
}, aI = typeof document < "u" && document.body ? Wl(document.body, bn, Yc) : Object.keys(bn).reduce((e, t) => (e[t] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, e), Yc), oI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buildQueries: Se,
  configure: dq,
  createEvent: Gr,
  findAllByAltText: qm,
  findAllByDisplayValue: Sm,
  findAllByLabelText: om,
  findAllByPlaceholderText: mm,
  findAllByRole: Vm,
  findAllByTestId: Qm,
  findAllByText: Em,
  findAllByTitle: Dm,
  findByAltText: Im,
  findByDisplayValue: Tm,
  findByLabelText: im,
  findByPlaceholderText: vm,
  findByRole: Gm,
  findByTestId: Jm,
  findByText: _m,
  findByTitle: Lm,
  fireEvent: ur,
  getAllByAltText: $m,
  getAllByDisplayValue: Cm,
  getAllByLabelText: lm,
  getAllByPlaceholderText: fm,
  getAllByRole: Hm,
  getAllByTestId: Km,
  getAllByText: hm,
  getAllByTitle: Bm,
  getByAltText: xm,
  getByDisplayValue: Pm,
  getByLabelText: sm,
  getByPlaceholderText: pm,
  getByRole: Wm,
  getByTestId: Xm,
  getByText: gm,
  getByTitle: km,
  getConfig: q,
  getDefaultNormalizer: Ps,
  getElementError: mi,
  getMultipleElementsFoundError: vi,
  getNodeText: gr,
  getQueriesForElement: Wl,
  getRoles: Jp,
  getSuggestedQuery: yn,
  isInaccessible: pi,
  logDOM: Nl,
  logRoles: yq,
  makeFindQuery: $t,
  makeGetAllQuery: As,
  makeSingleQuery: Ot,
  prettyDOM: lr,
  prettyFormat: Tb,
  queries: bn,
  queryAllByAltText: Am,
  queryAllByAttribute: ft,
  queryAllByDisplayValue: Rm,
  queryAllByLabelText: um,
  queryAllByPlaceholderText: cm,
  queryAllByRole: jm,
  queryAllByTestId: zm,
  queryAllByText: ym,
  queryAllByTitle: Mm,
  queryByAltText: Om,
  queryByAttribute: em,
  queryByDisplayValue: wm,
  queryByLabelText: nm,
  queryByPlaceholderText: dm,
  queryByRole: Um,
  queryByTestId: Ym,
  queryByText: bm,
  queryByTitle: Nm,
  queryHelpers: $q,
  screen: aI,
  waitFor: Ts,
  waitForElementToBeRemoved: Qq,
  within: Wl,
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
  if (iI(e) && e.defaultView)
    return e.defaultView;
  if (!((t = e.ownerDocument) === null || t === void 0) && t.defaultView)
    return e.ownerDocument.defaultView;
  throw new Error(`Could not determine window of node. Node was ${lI(e)}`);
}
function iI(e) {
  return e.nodeType === 9;
}
function lI(e) {
  return typeof e == "function" ? `function ${e.name}` : e === null ? "null" : String(e);
}
function ev(e, t) {
  return new Promise((r, n) => {
    const a = new t();
    a.onerror = n, a.onabort = n, a.onload = () => {
      r(String(a.result));
    }, a.readAsText(e);
  });
}
function $s(e, t) {
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
class tv {
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
class sI extends Array {
  add(...t) {
    const r = new tv(t[0], t[1]);
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
function uI(e) {
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
      const a = this.items.findIndex($r(r, !0)), o = new tv(n, r);
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
      Be(this, "dropEffect", "none"), Be(this, "effectAllowed", "uninitialized"), Be(this, "items", new sI()), Be(this, "files", $s(e, []));
    }
  }();
}
function xs(e, t = []) {
  const r = typeof e.DataTransfer > "u" ? uI(e) : (
    /* istanbul ignore next */
    new e.DataTransfer()
  );
  return Object.defineProperty(r, "files", {
    get: () => $s(e, t)
  }), r;
}
async function cI(e, t) {
  return t.kind === "file" ? t.getAsFile() : new e.Blob([
    await new Promise((r) => t.getAsString(r))
  ], {
    type: t.type
  });
}
function rv(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function nv(e, ...t) {
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
      rv(this, "data", void 0), this.data = a;
    }
  }(r);
}
const xt = Symbol("Manage ClipboardSub");
function Kc(e, t) {
  return Object.assign(new class extends e.EventTarget {
    async read() {
      return Array.from(this.items);
    }
    async readText() {
      let n = "";
      for (const a of this.items) {
        const o = a.types.includes("text/plain") ? "text/plain" : a.types.find((i) => i.startsWith("text/"));
        o && (n += await a.getType(o).then((i) => ev(i, e.FileReader)));
      }
      return n;
    }
    async write(n) {
      this.items = n;
    }
    async writeText(n) {
      this.items = [
        nv(e, n)
      ];
    }
    constructor(...n) {
      super(...n), rv(this, "items", []);
    }
  }(), {
    [xt]: t
  });
}
function qs(e) {
  return !!(e != null && e[xt]);
}
function dI(e) {
  if (qs(e.navigator.clipboard))
    return e.navigator.clipboard[xt];
  const t = Object.getOwnPropertyDescriptor(e.navigator, "clipboard");
  let r;
  const n = {
    resetClipboardStub: () => {
      r = Kc(e, n);
    },
    detachClipboardStub: () => {
      t ? Object.defineProperty(e.navigator, "clipboard", t) : Object.defineProperty(e.navigator, "clipboard", {
        value: void 0,
        configurable: !0
      });
    }
  };
  return r = Kc(e, n), Object.defineProperty(e.navigator, "clipboard", {
    get: () => r,
    configurable: !0
  }), r[xt];
}
function fI(e) {
  qs(e.navigator.clipboard) && e.navigator.clipboard[xt].resetClipboardStub();
}
function pI(e) {
  qs(e.navigator.clipboard) && e.navigator.clipboard[xt].detachClipboardStub();
}
async function mI(e) {
  const t = e.defaultView, r = t == null ? void 0 : t.navigator.clipboard, n = r && await r.read();
  if (!n)
    throw new Error("The Clipboard API is unavailable.");
  const a = xs(t);
  for (const o of n)
    for (const i of o.types)
      a.setData(i, await o.getType(i).then((s) => ev(s, t.FileReader)));
  return a;
}
async function av(e, t) {
  const r = re(e), n = r.navigator.clipboard, a = [];
  for (let i = 0; i < t.items.length; i++) {
    const s = t.items[i], l = await cI(r, s);
    a.push(nv(r, l));
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
typeof hn.afterEach == "function" && hn.afterEach(() => fI(globalThis.window));
typeof hn.afterAll == "function" && hn.afterAll(() => pI(globalThis.window));
const ov = [
  "input:not([type=hidden]):not([disabled])",
  "button:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[contenteditable=""]',
  '[contenteditable="true"]',
  "a[href]",
  "[tabindex]:not([disabled])"
].join(", ");
function Is(e) {
  return e.matches(ov);
}
function vI(e) {
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
function nl(e) {
  var t;
  return (t = _r(e)) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  );
}
function yI(e, t) {
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
  const t = bI(e);
  return t && (t.closest('[contenteditable=""]') || t.closest('[contenteditable="true"]'));
}
function bI(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
var iv = /* @__PURE__ */ function(e) {
  return e.button = "button", e.color = "color", e.file = "file", e.image = "image", e.reset = "reset", e.submit = "submit", e.checkbox = "checkbox", e.radio = "radio", e;
}(iv || {});
function lv(e) {
  return O(e, "button") || O(e, "input") && e.type in iv;
}
function qt(e) {
  return uv(e) && !e.readOnly || at(e);
}
var sv = /* @__PURE__ */ function(e) {
  return e.text = "text", e.date = "date", e["datetime-local"] = "datetime-local", e.email = "email", e.month = "month", e.number = "number", e.password = "password", e.search = "search", e.tel = "tel", e.time = "time", e.url = "url", e.week = "week", e;
}(sv || {});
function uv(e) {
  return O(e, "textarea") || O(e, "input") && e.type in sv;
}
function fe(e) {
  return cv(e) && uv(e);
}
function hI(e) {
  return cv(e) && lv(e);
}
function cv(e) {
  return e.nodeType === 1;
}
function gI(e) {
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
  const t = yI(e, Is), r = _r(e.ownerDocument);
  (t ?? e.ownerDocument.body) !== r && (It(t ? () => t.focus() : () => r == null ? void 0 : r.blur()), gI(t ?? e.ownerDocument.body));
}
function EI(e) {
  !Is(e) || !(_r(e.ownerDocument) === e) || It(() => e.blur());
}
const Ge = {};
Ge.click = (e, t, r) => {
  const n = t.closest("button,input,label,select,textarea"), a = n && O(n, "label") && n.control;
  if (a && a !== t)
    return () => {
      Is(a) && (Ve(a), r.dispatchEvent(a, vI(e)));
    };
  if (O(t, "input", {
    type: "file"
  }))
    return () => {
      EI(t), t.dispatchEvent(new (re(t)).Event("fileDialog")), Ve(t);
    };
};
const Mt = Symbol("Displayed value in UI"), ge = Symbol("Displayed selection in UI"), gn = Symbol("Initial value to compare on blur");
function _I(e) {
  return typeof e == "object" && Mt in e;
}
function RI(e) {
  return !!e && typeof e == "object" && ge in e;
}
function wI(e, t) {
  e[gn] === void 0 && (e[gn] = e.value), e[Mt] = t, e.value = Object.assign(new String(t), {
    [Mt]: !0
  });
}
function pe(e) {
  return e[Mt] === void 0 ? e.value : String(e[Mt]);
}
function Ms(e) {
  e[Mt] = void 0;
}
function dv(e) {
  e[gn] = void 0;
}
function CI(e) {
  return e[gn];
}
function PI(e, t) {
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
function SI(e) {
  return !!e[ge];
}
function zr(e) {
  e[ge] = void 0;
}
const En = globalThis.parseInt;
function TI(e) {
  const t = e.replace(/\D/g, "");
  if (t.length < 2)
    return e;
  const r = En(t[0], 10), n = En(t[1], 10);
  if (r >= 3 || r === 2 && n >= 4) {
    let a;
    return r >= 3 ? a = 1 : a = 2, Xc(t, a);
  }
  return e.length === 2 ? e : Xc(t, 2);
}
function Xc(e, t) {
  const r = e.slice(0, t), n = Math.min(En(r, 10), 23), a = e.slice(t), o = En(a, 10), i = Math.min(o, 59);
  return `${n.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`;
}
function fv(e, t) {
  const r = e.cloneNode();
  return r.value = t, r.value === t;
}
var pv = /* @__PURE__ */ function(e) {
  return e.email = "email", e.password = "password", e.search = "search", e.telephone = "telephone", e.text = "text", e.url = "url", e;
}(pv || {});
function AI(e) {
  var t;
  const r = (t = e.getAttribute("maxlength")) !== null && t !== void 0 ? t : "";
  return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function OI(e) {
  return O(e, "textarea") || O(e, "input") && e.type in pv;
}
function mv(e, t, r, n) {
  if (Yr(e) && t + r >= 0 && t + r <= e.nodeValue.length)
    return {
      node: e,
      offset: t + r
    };
  const a = Qc(e, t, r);
  if (a) {
    if (Yr(a))
      return {
        node: a,
        offset: r > 0 ? Math.min(1, a.nodeValue.length) : Math.max(a.nodeValue.length - 1, 0)
      };
    if (O(a, "br")) {
      const o = Qc(a, void 0, r);
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
function Qc(e, t, r) {
  const n = Number(t) + (r < 0 ? -1 : 0);
  return t !== void 0 && Ns(e) && n >= 0 && n < e.children.length && (e = e.children[n]), xI(e, r === 1 ? "next" : "previous", $I);
}
function $I(e) {
  if (Yr(e))
    return !0;
  if (Ns(e)) {
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
function Ns(e) {
  return e.nodeType === 1;
}
function Yr(e) {
  return e.nodeType === 3;
}
function xI(e, t, r) {
  for (; ; ) {
    var n;
    const a = e[`${t}Sibling`];
    if (a) {
      if (e = qI(a, t === "next" ? "first" : "last"), r(e))
        return e;
    } else if (e.parentNode && (!Ns(e.parentNode) || !at(e.parentNode) && e.parentNode !== ((n = e.ownerDocument) === null || n === void 0 ? void 0 : n.body)))
      e = e.parentNode;
    else
      break;
  }
}
function qI(e, t) {
  for (; e.hasChildNodes(); )
    e = e[`${t}Child`];
  return e;
}
const fr = Symbol("Track programmatic changes for React workaround");
function II(e) {
  return Object.getOwnPropertyNames(e).some((t) => t.startsWith("__react")) && re(e).REACT_VERSION === 17;
}
function MI(e) {
  II(e) && (e[fr] = {
    previousValue: String(e.value),
    tracked: []
  });
}
function NI(e, t) {
  var r, n;
  (n = e[fr]) === null || n === void 0 || (r = n.tracked) === null || r === void 0 || r.push(t), e[fr] || (Ms(e), Ft(e, {
    focusOffset: t.length
  }));
}
function BI(e, t) {
  var r;
  const n = e[fr];
  if (e[fr] = void 0, !(!(n == null || (r = n.tracked) === null || r === void 0) && r.length))
    return;
  const a = n.tracked.length === 2 && n.tracked[0] === n.previousValue && n.tracked[1] === e.value;
  a || Ms(e), SI(e) && Ft(e, {
    focusOffset: a ? t : e.value.length
  });
}
function vv(e) {
  const t = kI(e);
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
function kI(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function DI(e) {
  const t = vv(e);
  if (t.type === "input")
    return t.selection;
  if (t.type === "contenteditable") {
    var r;
    return (r = t.selection) === null || r === void 0 ? void 0 : r.getRangeAt(0);
  }
}
function ot({ focusNode: e, focusOffset: t, anchorNode: r = e, anchorOffset: n = t }) {
  var a, o;
  if (vv(e).type === "input")
    return Ft(e, {
      anchorOffset: n,
      focusOffset: t
    });
  (o = r.ownerDocument) === null || o === void 0 || (a = o.getSelection()) === null || a === void 0 || a.setBaseAndExtent(r, n, e, t);
}
function yv(e) {
  return O(e, "input") && [
    "date",
    "time"
  ].includes(e.type);
}
function Nt(e, t, r, n = "insertText") {
  const a = DI(t);
  a && (!yv(t) && !e.dispatchUIEvent(t, "beforeinput", {
    inputType: n,
    data: r
  }) || ("startContainer" in a ? LI(e, t, a, r, n) : FI(e, t, a, r, n)));
}
function LI(e, t, r, n, a) {
  let o = !1;
  if (!r.collapsed)
    o = !0, r.deleteContents();
  else if ([
    "deleteContentBackward",
    "deleteContentForward"
  ].includes(a)) {
    const i = mv(r.startContainer, r.startOffset, a === "deleteContentBackward" ? -1 : 1, a);
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
function FI(e, t, r, n, a) {
  let o = n;
  if (OI(t)) {
    const u = AI(t);
    if (u !== void 0 && n.length > 0) {
      const c = u - t.value.length;
      if (c > 0)
        o = n.substring(0, c);
      else
        return;
    }
  }
  const { newValue: i, newOffset: s, oldValue: l } = jI(o, t, r, a);
  i === l && s === r.startOffset && s === r.endOffset || O(t, "input", {
    type: "number"
  }) && !UI(i) || (wI(t, i), ot({
    focusNode: t,
    anchorOffset: s,
    focusOffset: s
  }), yv(t) ? fv(t, i) && (Jc(e, t, s, {}), e.dispatchUIEvent(t, "change"), dv(t)) : Jc(e, t, s, {
    data: n,
    inputType: a
  }));
}
function jI(e, t, { startOffset: r, endOffset: n }, a) {
  const o = pe(t), i = Math.max(0, r === n && a === "deleteContentBackward" ? r - 1 : r), s = o.substring(0, i), l = Math.min(o.length, r === n && a === "deleteContentForward" ? r + 1 : n), u = o.substring(l, o.length);
  let c = `${s}${e}${u}`, d = i + e.length;
  if (O(t, "input", {
    type: "time"
  })) {
    const f = TI(c);
    f !== "" && fv(t, f) && (c = f, d = f.length);
  }
  return {
    oldValue: o,
    newValue: c,
    newOffset: d
  };
}
function Jc(e, t, r, n) {
  e.dispatchUIEvent(t, "input", n), BI(t, r);
}
function UI(e) {
  var t, r;
  const n = e.split("e", 2);
  return !(/[^\d.\-e]/.test(e) || Number((t = e.match(/-/g)) === null || t === void 0 ? void 0 : t.length) > 2 || Number((r = e.match(/\./g)) === null || r === void 0 ? void 0 : r.length) > 1 || n[1] && !/^-?\d*$/.test(n[1]));
}
Ge.cut = (e, t, r) => () => {
  qt(t) && Nt(r, t, "", "deleteByCut");
};
function HI(e) {
  return e ? at(e) ? e.textContent : pe(e) : null;
}
function WI(e) {
  const t = re(e);
  for (let r = e; r != null && r.ownerDocument; r = r.parentElement) {
    const { display: n, visibility: a } = t.getComputedStyle(r);
    if (n === "none" || a === "hidden")
      return !1;
  }
  return !0;
}
function VI(e, t) {
  const r = e.ownerDocument, n = r.querySelectorAll(ov), a = Array.from(n).filter((l) => l === e || !(Number(l.getAttribute("tabindex")) < 0 || Re(l)));
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
    if (l += t ? -1 : 1, l === i.length ? l = 0 : l === -1 && (l = i.length - 1), i[l] === e || i[l] === r.body || WI(i[l]))
      return i[l];
}
function Zc(e, t) {
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
      const n = mv(r.focusNode, r.focusOffset, t);
      n && ot({
        focusNode: n.node,
        focusOffset: n.offset
      });
    } else
      r[t < 0 ? "collapseToStart" : "collapseToEnd"]();
  }
}
function bv(e) {
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
function GI(e) {
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
  return (a = (n = ed[e.key]) === null || n === void 0 ? void 0 : n.call(ed, e, t, r)) !== null && a !== void 0 ? a : zI(e, t, r);
};
const ed = {
  ArrowDown: (e, t, r) => {
    if (O(t, "input", {
      type: "radio"
    }))
      return () => qr(r, t, 1);
  },
  ArrowLeft: (e, t, r) => O(t, "input", {
    type: "radio"
  }) ? () => qr(r, t, -1) : () => Zc(t, -1),
  ArrowRight: (e, t, r) => O(t, "input", {
    type: "radio"
  }) ? () => qr(r, t, 1) : () => Zc(t, 1),
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
        const a = (n = (r = HI(t)) === null || r === void 0 ? void 0 : r.length) !== null && n !== void 0 ? n : (
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
    const n = VI(t, r.system.keyboard.modifiers.Shift);
    Ve(n), fe(n) && Ft(n, {
      anchorOffset: 0,
      focusOffset: n.value.length
    });
  }
}, zI = (e, t, r) => {
  if (e.code === "KeyA" && r.system.keyboard.modifiers.Control)
    return () => bv(t);
};
Ge.keypress = (e, t, r) => {
  if (e.key === "Enter") {
    if (O(t, "button") || O(t, "input") && YI.includes(t.type) || O(t, "a") && t.href)
      return () => {
        r.dispatchUIEvent(t, "click");
      };
    if (O(t, "input")) {
      const n = t.form, a = n == null ? void 0 : n.querySelector('input[type="submit"], button:not([type]), button[type="submit"]');
      return a ? () => r.dispatchUIEvent(a, "click") : n && KI.includes(t.type) && n.querySelectorAll("input").length === 1 ? () => r.dispatchUIEvent(n, "submit") : void 0;
    }
  }
  if (qt(t)) {
    const n = e.key === "Enter" ? at(t) && !r.system.keyboard.modifiers.Shift ? "insertParagraph" : "insertLineBreak" : "insertText", a = e.key === "Enter" ? `
` : e.key;
    return () => Nt(r, t, a, n);
  }
};
const YI = [
  "button",
  "color",
  "file",
  "image",
  "reset",
  "submit"
], KI = [
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
  return (n = td[e.key]) === null || n === void 0 ? void 0 : n.call(td, e, t, r);
};
const td = {
  " ": (e, t, r) => {
    if (lv(t))
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
const hv = {
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
function gv(e) {
  return hv[e].EventType;
}
const XI = [
  "MouseEvent",
  "PointerEvent"
];
function QI(e) {
  return XI.includes(gv(e));
}
function JI(e) {
  return gv(e) === "KeyboardEvent";
}
const ZI = {
  ClipboardEvent: [
    t0
  ],
  Event: [],
  FocusEvent: [
    Vt,
    r0
  ],
  InputEvent: [
    Vt,
    n0
  ],
  MouseEvent: [
    Vt,
    al,
    rd
  ],
  PointerEvent: [
    Vt,
    al,
    rd,
    o0
  ],
  KeyboardEvent: [
    Vt,
    al,
    a0
  ]
};
function Ev(e, t, r) {
  const n = re(t), { EventType: a, defaultInit: o } = hv[e], i = new (e0(n))[a](e, o);
  return ZI[a].forEach((s) => s(i, r ?? {})), i;
}
function e0(e) {
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
  var h;
  const P = (h = e.CompositionEvent) !== null && h !== void 0 ? h : class extends y {
  };
  var p;
  const E = (p = e.FocusEvent) !== null && p !== void 0 ? p : class extends y {
  };
  var C;
  const R = (C = e.InputEvent) !== null && C !== void 0 ? C : class extends y {
  };
  var S;
  const m = (S = e.KeyboardEvent) !== null && S !== void 0 ? S : class extends y {
  };
  var b;
  const g = (b = e.MouseEvent) !== null && b !== void 0 ? b : class extends y {
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
    CompositionEvent: P,
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
function t0(e, { clipboardData: t }) {
  Ke(e, {
    clipboardData: t
  });
}
function r0(e, { relatedTarget: t }) {
  Ke(e, {
    relatedTarget: t
  });
}
function n0(e, { data: t, inputType: r, isComposing: n }) {
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
function al(e, { altKey: t, ctrlKey: r, metaKey: n, shiftKey: a, modifierAltGraph: o, modifierCapsLock: i, modifierFn: s, modifierFnLock: l, modifierNumLock: u, modifierScrollLock: c, modifierSymbol: d, modifierSymbolLock: f }) {
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
function a0(e, { key: t, code: r, location: n, repeat: a, isComposing: o, charCode: i }) {
  Ke(e, {
    key: String(t),
    code: String(r),
    location: L(n),
    repeat: !!a,
    isComposing: !!o,
    charCode: i
  });
}
function rd(e, { x: t, y: r, screenX: n, screenY: a, clientX: o = t, clientY: i = r, button: s, buttons: l, relatedTarget: u, offsetX: c, offsetY: d, pageX: f, pageY: v }) {
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
function o0(e, { pointerId: t, width: r, height: n, pressure: a, tangentialPressure: o, tiltX: i, tiltY: s, twist: l, pointerType: u, isPrimary: c }) {
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
function i0(e, t, r, n = !1) {
  (QI(t) || JI(t)) && (r = {
    ...r,
    ...this.system.getUIEventModifiers()
  });
  const a = Ev(t, e, r);
  return _v.call(this, e, a, n);
}
function _v(e, t, r = !1) {
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
  const n = Ev(t, e, r);
  It(() => e.dispatchEvent(n));
}
const nd = Symbol("patched focus/blur methods");
function Rv(e) {
  if (e.prototype[nd])
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
    [nd]: {
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
    const s = ad(this.ownerDocument);
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
    const i = ad(this.ownerDocument);
    if (i !== this)
      return;
    n = Symbol("blur call"), r.call(this), et(i, "blur", {
      relatedTarget: null
    }), et(i, "focusout", {
      relatedTarget: null
    });
  }
}
function ad(e) {
  const t = _r(e);
  return (t == null ? void 0 : t.tagName) === "BODY" ? null : t;
}
const ol = Symbol("Interceptor for programmatical calls");
function Rt(e, t, r) {
  const n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), a = Object.getOwnPropertyDescriptor(e, t), o = n != null && n.set ? "set" : "value";
  if (typeof (n == null ? void 0 : n[o]) != "function" || n[o][ol])
    throw new Error(`Element ${e.tagName} does not implement "${String(t)}".`);
  function i(...s) {
    const { applyNative: l = !1, realArgs: u, then: c } = r.call(this, ...s), d = (!l && a || n)[o];
    o === "set" ? d.call(this, u) : d.call(this, ...u), c == null || c();
  }
  i[ol] = ol, Object.defineProperty(e, t, {
    ...a ?? n,
    [o]: i
  });
}
function l0(e) {
  Rt(e, "value", function(r) {
    const n = _I(r);
    return n && MI(this), {
      applyNative: !!n,
      realArgs: s0(this, r),
      then: n ? void 0 : () => NI(this, String(r))
    };
  });
}
function s0(e, t) {
  return O(e, "input", {
    type: "number"
  }) && String(t) !== "" && !Number.isNaN(Number(t)) ? String(Number(t)) : String(t);
}
function u0(e) {
  Rt(e, "setSelectionRange", function(r, ...n) {
    const a = RI(r);
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
      then: () => PI(e, {
        anchorOffset: 0,
        focusOffset: pe(e).length
      })
    };
  });
}
function c0(e) {
  Rt(e, "setRangeText", function(...r) {
    return {
      realArgs: r,
      then: () => {
        Ms(e), zr(e);
      }
    };
  });
}
const Ct = Symbol("Node prepared with document state workarounds");
function wv(e) {
  e[Ct] || (e.addEventListener("focus", (t) => {
    const r = t.target;
    od(r);
  }, {
    capture: !0,
    passive: !0
  }), e.activeElement && od(e.activeElement), e.addEventListener("blur", (t) => {
    const r = t.target, n = CI(r);
    n !== void 0 && (r.value !== n && et(r, "change"), dv(r));
  }, {
    capture: !0,
    passive: !0
  }), e[Ct] = Ct);
}
function od(e) {
  e[Ct] || (O(e, [
    "input",
    "textarea"
  ]) && (l0(e), u0(e), c0(e)), e[Ct] = Ct);
}
function d0(e) {
  return f0(e) ? e : e.ownerDocument;
}
function f0(e) {
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
const p0 = [
  "Alt",
  "AltGraph",
  "Control",
  "Fn",
  "Meta",
  "Shift",
  "Symbol"
];
function id(e) {
  return p0.includes(e);
}
const m0 = [
  "CapsLock",
  "FnLock",
  "NumLock",
  "ScrollLock",
  "SymbolLock"
];
function ld(e) {
  return m0.includes(e);
}
class v0 {
  isKeyPressed(t) {
    return this.pressed.has(String(t.code));
  }
  getPressedKeys() {
    return this.pressed.values().map((t) => t.keyDef);
  }
  /** Press a key */
  async keydown(t, r) {
    const n = String(r.key), a = String(r.code), o = nl(t.config.document);
    this.setKeydownTarget(o), this.pressed.add(a, r), id(n) && (this.modifiers[n] = !0);
    const i = t.dispatchUIEvent(o, "keydown", {
      key: n,
      code: a
    });
    ld(n) && !this.modifiers[n] && (this.modifiers[n] = !0, this.modifierLockStart[n] = !0), i && this.pressed.setUnprevented(a), i && this.hasKeyPress(n) && t.dispatchUIEvent(nl(t.config.document), "keypress", {
      key: n,
      code: a,
      charCode: r.key === "Enter" ? 13 : String(r.key).charCodeAt(0)
    });
  }
  /** Release a key */
  async keyup(t, r) {
    const n = String(r.key), a = String(r.code), o = this.pressed.isUnprevented(a);
    this.pressed.delete(a), id(n) && !this.pressed.values().find((i) => i.keyDef.key === n) && (this.modifiers[n] = !1), t.dispatchUIEvent(nl(t.config.document), "keyup", {
      key: n,
      code: a
    }, !o), ld(n) && this.modifiers[n] && (this.modifierLockStart[n] ? this.modifierLockStart[n] = !1 : this.modifiers[n] = !1);
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
const y0 = [
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
], b0 = [
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
function h0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Cv {
  getButtons() {
    let t = 0;
    for (const r of Object.keys(this.pressed))
      t |= 2 ** Number(r);
    return t;
  }
  down(t) {
    const r = Vl(t.button);
    if (r in this.pressed) {
      this.pressed[r].push(t);
      return;
    }
    return this.pressed[r] = [
      t
    ], r;
  }
  up(t) {
    const r = Vl(t.button);
    if (r in this.pressed && (this.pressed[r] = this.pressed[r].filter((n) => n.name !== t.name), this.pressed[r].length === 0))
      return delete this.pressed[r], r;
  }
  constructor() {
    h0(this, "pressed", {});
  }
}
const sd = {
  primary: 0,
  secondary: 1,
  auxiliary: 2,
  back: 3,
  X1: 3,
  forward: 4,
  X2: 4
};
function Vl(e = 0) {
  return e in sd ? sd[e] : Number(e);
}
const ud = {
  1: 2,
  2: 1
};
function Gl(e) {
  return e = Vl(e), e in ud ? ud[e] : e;
}
function g0(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class E0 {
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
    g0(this, "pressedKeys", /* @__PURE__ */ new Set());
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
function zl({ target: e, node: t, offset: r }) {
  return fe(e) ? {
    node: e,
    offset: r ?? pe(e).length
  } : t ? {
    node: t,
    offset: r ?? (t.nodeType === 3 ? t.nodeValue.length : t.childNodes.length)
  } : Pv(e, r);
}
function Pv(e, t, r = !0) {
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
          return Pv(o, t, !1);
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
function _0({ document: e, target: t, clickCount: r, node: n, offset: a }) {
  if (hI(t))
    return;
  const o = fe(t), i = String(o ? pe(t) : t.textContent), [s, l] = n ? (
    // which elements might be considered in the same line of text.
    // TODO: support expanding initial range on multiple clicks if node is given
    [
      a,
      a
    ]
  ) : R0(i, a, r);
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
    const { node: u, offset: c } = zl({
      target: t,
      node: n,
      offset: s
    }), { node: d, offset: f } = zl({
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
function R0(e, t, r) {
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
function w0(e, { document: t, target: r, node: n, offset: a }) {
  const o = zl({
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
function Sv(e, t) {
  var r, n, a, o, i, s, l, u, c, d, f, v, y, h, P, p, E, C, R, S, m, b, g, I;
  return e.target !== t.target || ((r = e.coords) === null || r === void 0 ? void 0 : r.x) !== ((n = t.coords) === null || n === void 0 ? void 0 : n.x) || ((a = e.coords) === null || a === void 0 ? void 0 : a.y) !== ((o = t.coords) === null || o === void 0 ? void 0 : o.y) || ((i = e.coords) === null || i === void 0 ? void 0 : i.clientX) !== ((s = t.coords) === null || s === void 0 ? void 0 : s.clientX) || ((l = e.coords) === null || l === void 0 ? void 0 : l.clientY) !== ((u = t.coords) === null || u === void 0 ? void 0 : u.clientY) || ((c = e.coords) === null || c === void 0 ? void 0 : c.offsetX) !== ((d = t.coords) === null || d === void 0 ? void 0 : d.offsetX) || ((f = e.coords) === null || f === void 0 ? void 0 : f.offsetY) !== ((v = t.coords) === null || v === void 0 ? void 0 : v.offsetY) || ((y = e.coords) === null || y === void 0 ? void 0 : y.pageX) !== ((h = t.coords) === null || h === void 0 ? void 0 : h.pageX) || ((P = e.coords) === null || P === void 0 ? void 0 : P.pageY) !== ((p = t.coords) === null || p === void 0 ? void 0 : p.pageY) || ((E = e.coords) === null || E === void 0 ? void 0 : E.screenX) !== ((C = t.coords) === null || C === void 0 ? void 0 : C.screenX) || ((R = e.coords) === null || R === void 0 ? void 0 : R.screenY) !== ((S = t.coords) === null || S === void 0 ? void 0 : S.screenY) || ((m = e.caret) === null || m === void 0 ? void 0 : m.node) !== ((b = t.caret) === null || b === void 0 ? void 0 : b.node) || ((g = e.caret) === null || g === void 0 ? void 0 : g.offset) !== ((I = t.caret) === null || I === void 0 ? void 0 : I.offset);
}
function Je(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class C0 {
  move(t, r, n) {
    const a = this.position, o = this.getTarget(t);
    if (this.position = r, !Sv(a, r))
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
    !n && (s || t.dispatchUIEvent(o, "mousedown", i)) && (this.startSelecting(t, i.detail), Ve(o)), !s && Gl(r.button) === 2 && t.dispatchUIEvent(o, "contextmenu", this.getEventInit("contextmenu", r.button));
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
    return n.button = Gl(r), n.buttons = this.buttons.getButtons(), t === "mousedown" ? n.detail = this.clickCount.getOnDown(n.button) : t === "mouseup" ? n.detail = this.clickCount.getOnUp(n.button) : (t === "click" || t === "auxclick") && (n.detail = this.clickCount.incOnClick(n.button)), n;
  }
  getTarget(t) {
    var r;
    return (r = this.position.target) !== null && r !== void 0 ? r : t.config.document.body;
  }
  startSelecting(t, r) {
    var n, a;
    this.selecting = _0({
      document: t.config.document,
      target: this.getTarget(t),
      node: (n = this.position.caret) === null || n === void 0 ? void 0 : n.node,
      offset: (a = this.position.caret) === null || a === void 0 ? void 0 : a.offset,
      clickCount: r
    });
  }
  modifySelecting(t) {
    var r, n;
    this.selecting && w0(this.selecting, {
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
    Je(this, "position", {}), Je(this, "buttons", new Cv()), Je(this, "selecting", void 0), Je(this, "buttonDownTarget", {}), Je(this, "clickCount", new class {
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
  return ((r = Tv(e, t)) === null || r === void 0 ? void 0 : r.pointerEvents) !== "none";
}
function P0(e) {
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
const cd = Symbol("Last check for pointer-events");
function Tv(e, t) {
  const r = t[cd];
  if (!(e.config.pointerEventsCheck !== Kr.Never && (!r || dd(e.config.pointerEventsCheck, Kr.EachApiCall) && r[J.Call] !== Ir(e, J.Call) || dd(e.config.pointerEventsCheck, Kr.EachTrigger) && r[J.Trigger] !== Ir(e, J.Trigger))))
    return r == null ? void 0 : r.result;
  const a = P0(t);
  return t[cd] = {
    [J.Call]: Ir(e, J.Call),
    [J.Trigger]: Ir(e, J.Trigger),
    result: a
  }, a;
}
function Yt(e, t) {
  const r = Tv(e, t);
  if ((r == null ? void 0 : r.pointerEvents) === "none")
    throw new Error([
      `Unable to perform pointer interaction as the element ${r.tree.length > 1 ? "inherits" : "has"} \`pointer-events: none\`:`,
      "",
      S0(r.tree)
    ].join(`
`));
}
function S0(e) {
  return e.reverse().map((t, r) => [
    "".padEnd(r),
    t.tagName,
    t.id && `#${t.id}`,
    t.hasAttribute("data-testid") && `(testId=${t.getAttribute("data-testid")})`,
    T0(t),
    e.length > 1 && r === 0 && "  <-- This element declared `pointer-events: none`",
    e.length > 1 && r === e.length - 1 && "  <-- Asserted pointer events here"
  ].filter(Boolean).join("")).join(`
`);
}
function T0(e) {
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
function dd(e, t) {
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
class A0 {
  init(t) {
    const r = this.getTarget(t), [, n] = er(null, r), a = this.getEventInit();
    return Yt(t, r), t.dispatchUIEvent(r, "pointerover", a), n.forEach((o) => t.dispatchUIEvent(o, "pointerenter", a)), this;
  }
  move(t, r) {
    const n = this.position, a = this.getTarget(t);
    if (this.position = r, !Sv(n, r))
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
      button: Gl(t),
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
class O0 {
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
        return (o = (n = this.registry)[a = r]) !== null && o !== void 0 ? o : n[a] = new E0();
      }
      constructor() {
        Oe(this, "registry", {});
      }
    }()), Oe(this, "pointers", new class {
      new(r, n, a) {
        const o = n !== "touch" || !Object.values(this.registry).some((i) => i.pointerType === "touch" && !i.isCancelled);
        return o || Object.values(this.registry).forEach((i) => {
          i.pointerType === n && !i.isCancelled && (i.isMultitouch = !0);
        }), this.registry[r] = new A0({
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
    }()), this.system = t, this.buttons = new Cv(), this.mouse = new C0(), this.pointers.new("mouse", "mouse", this.buttons);
  }
}
function fd(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Av {
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
    fd(this, "keyboard", new v0(this)), fd(this, "pointer", new O0(this));
  }
}
async function $0(e) {
  const t = [];
  return this.config.skipHover || t.push({
    target: e
  }), t.push({
    keys: "[MouseLeft]",
    target: e
  }), this.pointer(t);
}
async function x0(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft]"
  ]);
}
async function q0(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft][MouseLeft]"
  ]);
}
async function I0(e) {
  return this.pointer({
    target: e
  });
}
async function M0(e) {
  return Yt(this, this.system.pointer.getMouseTarget(this)), this.pointer({
    target: e.ownerDocument.body
  });
}
async function N0({ shift: e } = {}) {
  return this.keyboard(e === !0 ? "{Shift>}{Tab}{/Shift}" : e === !1 ? "[/ShiftLeft][/ShiftRight]{Tab}" : "{Tab}");
}
var Bs = /* @__PURE__ */ function(e) {
  return e["{"] = "}", e["["] = "]", e;
}(Bs || {});
function Ov(e, t) {
  let r = 0;
  const n = e[r] in Bs ? e[r] : "";
  r += n.length;
  const o = new RegExp(`^\\${n}{2}`).test(e) ? "" : n;
  return {
    type: o,
    ...o === "" ? B0(e, r, t) : k0(e, r, o, t)
  };
}
function B0(e, t, r) {
  const n = e[t];
  return $v(n, e, t, r), t += n.length, {
    consumedLength: t,
    descriptor: n,
    releasePrevious: !1,
    releaseSelf: !0,
    repeat: 1
  };
}
function k0(e, t, r, n) {
  var a, o;
  const i = e[t] === "/" ? "/" : "";
  t += i.length;
  const s = r === "{" && e[t] === "\\";
  t += Number(s);
  const l = s ? e[t] : (a = e.slice(t).match(r === "{" ? /^\w+|^[^}>/]/ : /^\w+/)) === null || a === void 0 ? void 0 : a[0];
  $v(l, e, t, n), t += l.length;
  var u;
  const c = (u = (o = e.slice(t).match(/^>\d+/)) === null || o === void 0 ? void 0 : o[0]) !== null && u !== void 0 ? u : "";
  t += c.length;
  const d = e[t] === "/" || !c && e[t] === ">" ? e[t] : "";
  t += d.length;
  const f = Bs[r], v = e[t] === f ? f : "";
  if (!v)
    throw new Error(xv([
      !c && "repeat modifier",
      !d && "release modifier",
      `"${f}"`
    ].filter(Boolean).join(" or "), e[t], e, n));
  return t += v.length, {
    consumedLength: t,
    descriptor: l,
    releasePrevious: !!i,
    repeat: c ? Math.max(Number(c.substr(1)), 1) : 1,
    releaseSelf: D0(d, c)
  };
}
function $v(e, t, r, n) {
  if (!e)
    throw new Error(xv("key descriptor", t[r], t, n));
}
function D0(e, t) {
  if (e)
    return e === "/";
  if (t)
    return !1;
}
function xv(e, t, r, n) {
  return `Expected ${e} but found "${t ?? ""}" in "${r}"
    See ${n === "pointer" ? "https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen" : "https://testing-library.com/docs/user-event/keyboard"}
    for more information about how userEvent parses your input.`;
}
function L0(e, t) {
  const r = [];
  do {
    const { type: a, descriptor: o, consumedLength: i, releasePrevious: s, releaseSelf: l = !0, repeat: u } = Ov(t, "keyboard");
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
async function F0(e) {
  const t = L0(this.config.keyboardMap, e);
  for (let r = 0; r < t.length; r++)
    await Bt(this.config), await j0(this, t[r]);
}
async function j0(e, { keyDef: t, releasePrevious: r, releaseSelf: n, repeat: a }) {
  const { system: o } = e;
  if (o.keyboard.isKeyPressed(t) && await o.keyboard.keyup(e, t), !r) {
    for (let i = 1; i <= a; i++)
      await o.keyboard.keydown(e, t), i < a && await Bt(e.config);
    n && await o.keyboard.keyup(e, t);
  }
}
async function U0(e) {
  for (const t of e.system.keyboard.getPressedKeys())
    await e.system.keyboard.keyup(e, t);
}
function qv(e) {
  const t = fe(e) ? {
    "text/plain": H0(e)
  } : {
    "text/plain": String(e.ownerDocument.getSelection())
  }, r = xs(re(e));
  for (const n in t)
    t[n] && r.setData(n, t[n]);
  return r;
}
function H0(e) {
  const t = dr(e);
  return pe(e).substring(t.startOffset, t.endOffset);
}
async function W0() {
  const e = this.config.document;
  var t;
  const r = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), n = qv(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "copy", {
      clipboardData: n
    }) && this.config.writeToClipboard && await av(e, n), n;
}
async function V0() {
  const e = this.config.document;
  var t;
  const r = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), n = qv(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "cut", {
      clipboardData: n
    }) && this.config.writeToClipboard && await av(r.ownerDocument, n), n;
}
async function G0(e) {
  const t = this.config.document;
  var r;
  const n = (r = t.activeElement) !== null && r !== void 0 ? r : (
    /* istanbul ignore next */
    t.body
  );
  var a;
  const o = (a = typeof e == "string" ? z0(t, e) : e) !== null && a !== void 0 ? a : await mI(t).catch(() => {
    throw new Error("`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.");
  });
  this.dispatchUIEvent(n, "paste", {
    clipboardData: o
  });
}
function z0(e, t) {
  const r = xs(re(e));
  return r.setData("text", t), r;
}
function pd(e, t) {
  const r = [];
  do {
    const { descriptor: n, consumedLength: a, releasePrevious: o, releaseSelf: i = !0 } = Ov(t, "pointer"), s = e.find((l) => l.name === n);
    s && r.push({
      keyDef: s,
      releasePrevious: o,
      releaseSelf: i
    }), t = t.slice(a);
  } while (t);
  return r;
}
async function Y0(e) {
  const { pointerMap: t } = this.config, r = [];
  (Array.isArray(e) ? e : [
    e
  ]).forEach((n) => {
    typeof n == "string" ? r.push(...pd(t, n)) : "keys" in n ? r.push(...pd(t, n.keys).map((a) => ({
      ...n,
      ...a
    }))) : r.push(n);
  });
  for (let n = 0; n < r.length; n++)
    await Bt(this.config), await K0(this, r[n]);
  this.system.pointer.resetClickCount();
}
async function K0(e, t) {
  var r, n;
  const a = "pointerName" in t && t.pointerName ? t.pointerName : "keyDef" in t ? e.system.pointer.getPointerName(t.keyDef) : "mouse", o = e.system.pointer.getPreviousPosition(a);
  var i, s, l, u;
  const c = {
    target: (i = t.target) !== null && i !== void 0 ? i : X0(e, o),
    coords: (s = t.coords) !== null && s !== void 0 ? s : o == null ? void 0 : o.coords,
    caret: {
      node: (l = t.node) !== null && l !== void 0 ? l : md(t) || o == null || (r = o.caret) === null || r === void 0 ? void 0 : r.node,
      offset: (u = t.offset) !== null && u !== void 0 ? u : md(t) || o == null || (n = o.caret) === null || n === void 0 ? void 0 : n.offset
    }
  };
  "keyDef" in t ? (e.system.pointer.isKeyPressed(t.keyDef) && (zt(e, J.Trigger), await e.system.pointer.release(e, t.keyDef, c)), t.releasePrevious || (zt(e, J.Trigger), await e.system.pointer.press(e, t.keyDef, c), t.releaseSelf && (zt(e, J.Trigger), await e.system.pointer.release(e, t.keyDef, c)))) : (zt(e, J.Trigger), await e.system.pointer.move(e, a, c));
}
function md(e) {
  var t, r;
  return !!((r = (t = e.target) !== null && t !== void 0 ? t : e.node) !== null && r !== void 0 ? r : e.offset !== void 0);
}
function X0(e, t) {
  if (!t)
    throw new Error("This pointer has no previous position. Provide a target property!");
  var r;
  return (r = t.target) !== null && r !== void 0 ? r : e.config.document.body;
}
async function Q0(e) {
  if (!qt(e) || Re(e))
    throw new Error("clear()` is only supported on editable elements.");
  if (Ve(e), e.ownerDocument.activeElement !== e)
    throw new Error("The element to be cleared could not be focused.");
  if (bv(e), !GI(e))
    throw new Error("The element content to be cleared could not be selected.");
  Nt(this, e, "", "deleteContentBackward");
}
async function J0(e, t) {
  return Iv.call(this, !0, e, t);
}
async function Z0(e, t) {
  return Iv.call(this, !1, e, t);
}
async function Iv(e, t, r) {
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
async function eM(e, t, { skipClick: r = this.config.skipClick, skipAutoClose: n = this.config.skipAutoClose, initialSelectionStart: a, initialSelectionEnd: o } = {}) {
  e.disabled || (r || await this.click(e), a !== void 0 && Gt(e, a, o ?? a), await this.keyboard(t), n || await U0(this));
}
const vd = Symbol("files and value properties are mocked");
function il(e, t, r) {
  r ? Object.defineProperty(e, t, r) : delete e[t];
}
function tM(e, t) {
  var r;
  (r = e[vd]) === null || r === void 0 || r.restore();
  const n = Object.getOwnPropertyDescriptor(e, "type"), a = Object.getOwnPropertyDescriptor(e, "value"), o = Object.getOwnPropertyDescriptor(e, "files");
  function i() {
    il(e, "type", n), il(e, "value", a), il(e, "files", o);
  }
  e[vd] = {
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
async function rM(e, t) {
  const r = O(e, "label") ? e.control : e;
  if (!r || !O(r, "input", {
    type: "file"
  }))
    throw new TypeError(`The ${r === e ? "given" : "associated"} ${r == null ? void 0 : r.tagName} element does not accept file uploads`);
  if (Re(e))
    return;
  const n = (Array.isArray(t) ? t : [
    t
  ]).filter((o) => !this.config.applyAccept || nM(o, r.accept)).slice(0, r.multiple ? void 0 : 1), a = () => {
    var o;
    n.length === ((o = r.files) === null || o === void 0 ? void 0 : o.length) && n.every((i, s) => {
      var l;
      return i === ((l = r.files) === null || l === void 0 ? void 0 : l.item(s));
    }) || (tM(r, $s(re(e), n)), this.dispatchUIEvent(r, "input"), this.dispatchUIEvent(r, "change"));
  };
  r.addEventListener("fileDialog", a), await this.click(e), r.removeEventListener("fileDialog", a);
}
function Mr(e) {
  return e.toLowerCase().replace(/(\.|\/)jpg\b/g, "$1jpeg");
}
function nM(e, t) {
  if (!t)
    return !0;
  const r = [
    "audio/*",
    "image/*",
    "video/*"
  ];
  return Mr(t).trim().split(/\s*,\s*/).some((n) => n.startsWith(".") ? Mr(e.name).endsWith(n) : r.includes(n) ? Mr(e.type).startsWith(n.replace("*", "")) : Mr(e.type) === n);
}
const yd = {
  click: $0,
  dblClick: x0,
  tripleClick: q0,
  hover: I0,
  unhover: M0,
  tab: N0,
  keyboard: F0,
  copy: W0,
  cut: V0,
  paste: G0,
  pointer: Y0,
  clear: Q0,
  deselectOptions: Z0,
  selectOptions: J0,
  type: eM,
  upload: rM
};
function aM(e) {
  return q().asyncWrapper(e);
}
const Mv = {
  applyAccept: !0,
  autoModify: !0,
  delay: 0,
  document: globalThis.document,
  keyboardMap: y0,
  pointerMap: b0,
  pointerEventsCheck: Kr.EachApiCall,
  skipAutoClose: !1,
  skipClick: !1,
  skipHover: !1,
  writeToClipboard: !1,
  advanceTimers: () => Promise.resolve()
}, oM = {
  ...Mv,
  writeToClipboard: !0
};
function Nv(e = {}, t = oM, r) {
  const n = uM(e, r, t);
  return {
    ...t,
    ...e,
    document: n
  };
}
function iM(e = {}) {
  const t = Nv(e);
  wv(t.document), Rv(re(t.document).HTMLElement);
  var r;
  const n = (r = t.document.defaultView) !== null && r !== void 0 ? r : (
    /* istanbul ignore next */
    globalThis.window
  );
  return dI(n), ks(t).api;
}
function K({ keyboardState: e, pointerState: t, ...r } = {}, n) {
  const a = Nv(r, Mv, n);
  wv(a.document), Rv(re(a.document).HTMLElement);
  var o;
  const i = (o = t ?? e) !== null && o !== void 0 ? o : new Av();
  return {
    api: ks(a, i).api,
    system: i
  };
}
function lM(e) {
  return ks({
    ...this.config,
    ...e
  }, this.system).api;
}
function sM(e, t) {
  function r(...n) {
    return zt(e, J.Call), aM(() => t.apply(e, n).then(async (a) => (await Bt(e.config), a)));
  }
  return Object.defineProperty(r, "name", {
    get: () => t.name
  }), r;
}
function ks(e, t = new Av()) {
  const r = {};
  return Object.assign(r, {
    config: e,
    dispatchEvent: _v.bind(r),
    dispatchUIEvent: i0.bind(r),
    system: t,
    levelRefs: {},
    ...yd
  }), {
    instance: r,
    api: {
      ...Object.fromEntries(Object.entries(yd).map(([n, a]) => [
        n,
        sM(r, a)
      ])),
      setup: lM.bind(r)
    }
  };
}
function uM(e, t, r) {
  var n, a;
  return (a = (n = e.document) !== null && n !== void 0 ? n : t && d0(t)) !== null && a !== void 0 ? a : r.document;
}
function cM(e) {
  return K().api.clear(e);
}
function dM(e, t = {}) {
  return K(t, e).api.click(e);
}
function fM(e = {}) {
  return K(e).api.copy();
}
function pM(e = {}) {
  return K(e).api.cut();
}
function mM(e, t = {}) {
  return K(t).api.dblClick(e);
}
function vM(e, t, r = {}) {
  return K(r).api.deselectOptions(e, t);
}
function yM(e, t = {}) {
  return K(t).api.hover(e);
}
async function bM(e, t = {}) {
  const { api: r, system: n } = K(t);
  return r.keyboard(e).then(() => n);
}
async function hM(e, t = {}) {
  const { api: r, system: n } = K(t);
  return r.pointer(e).then(() => n);
}
function gM(e, t) {
  return K(t).api.paste(e);
}
function EM(e, t, r = {}) {
  return K(r).api.selectOptions(e, t);
}
function _M(e, t = {}) {
  return K(t).api.tripleClick(e);
}
function RM(e, t, r = {}) {
  return K(r, e).api.type(e, t, r);
}
function wM(e, t = {}) {
  const { api: r, system: n } = K(t);
  return n.pointer.setMousePosition({
    target: e
  }), r.unhover(e);
}
function CM(e, t, r = {}) {
  return K(r).api.upload(e, t);
}
function PM(e = {}) {
  return K().api.tab(e);
}
const SM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: cM,
  click: dM,
  copy: fM,
  cut: pM,
  dblClick: mM,
  deselectOptions: vM,
  hover: yM,
  keyboard: bM,
  paste: gM,
  pointer: hM,
  selectOptions: EM,
  tab: PM,
  tripleClick: _M,
  type: RM,
  unhover: wM,
  upload: CM
}, Symbol.toStringTag, { value: "Module" })), bd = {
  ...SM,
  setup: iM
};
var V = (() => {
  let e;
  return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ? e = self : e = {}, e;
})(), { LOGLEVEL: TM } = V, Me = { trace: 1, debug: 2, info: 3, warn: 4, error: 5, silent: 10 }, AM = TM, gt = Me[AM] || Me.info, Bv = { trace: (e, ...t) => {
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
} }, Yl = /* @__PURE__ */ new Set(), X = (e) => (t, ...r) => {
  if (!Yl.has(t))
    return Yl.add(t), Bv[e](t, ...r);
};
X.clear = () => Yl.clear();
X.trace = X("trace");
X.debug = X("debug");
X.info = X("info");
X.warn = X("warn");
X.error = X("error");
X.log = X("log");
var OM = (e) => e.transports !== void 0, $M = () => Math.random().toString(16).slice(2), xM = class {
  constructor(e = {}) {
    this.sender = $M(), this.events = {}, this.data = {}, this.transports = [], this.isAsync = e.async || !1, OM(e) ? (this.transports = e.transports || [], this.transports.forEach((t) => {
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
}, kv = ((e) => (e.CHANNEL_CREATED = "channelCreated", e.CONFIG_ERROR = "configError", e.STORY_INDEX_INVALIDATED = "storyIndexInvalidated", e.STORY_SPECIFIED = "storySpecified", e.SET_CONFIG = "setConfig", e.SET_STORIES = "setStories", e.SET_INDEX = "setIndex", e.SET_CURRENT_STORY = "setCurrentStory", e.CURRENT_STORY_WAS_SET = "currentStoryWasSet", e.FORCE_RE_RENDER = "forceReRender", e.FORCE_REMOUNT = "forceRemount", e.PRELOAD_ENTRIES = "preloadStories", e.STORY_PREPARED = "storyPrepared", e.DOCS_PREPARED = "docsPrepared", e.STORY_CHANGED = "storyChanged", e.STORY_UNCHANGED = "storyUnchanged", e.STORY_RENDERED = "storyRendered", e.STORY_MISSING = "storyMissing", e.STORY_ERRORED = "storyErrored", e.STORY_THREW_EXCEPTION = "storyThrewException", e.STORY_RENDER_PHASE_CHANGED = "storyRenderPhaseChanged", e.PLAY_FUNCTION_THREW_EXCEPTION = "playFunctionThrewException", e.UPDATE_STORY_ARGS = "updateStoryArgs", e.STORY_ARGS_UPDATED = "storyArgsUpdated", e.RESET_STORY_ARGS = "resetStoryArgs", e.SET_GLOBALS = "setGlobals", e.UPDATE_GLOBALS = "updateGlobals", e.GLOBALS_UPDATED = "globalsUpdated", e.REGISTER_SUBSCRIPTION = "registerSubscription", e.PREVIEW_KEYDOWN = "previewKeydown", e.PREVIEW_BUILDER_PROGRESS = "preview_builder_progress", e.SELECT_STORY = "selectStory", e.STORIES_COLLAPSE_ALL = "storiesCollapseAll", e.STORIES_EXPAND_ALL = "storiesExpandAll", e.DOCS_RENDERED = "docsRendered", e.SHARED_STATE_CHANGED = "sharedStateChanged", e.SHARED_STATE_SET = "sharedStateSet", e.NAVIGATE_URL = "navigateUrl", e.UPDATE_QUERY_PARAMS = "updateQueryParams", e.REQUEST_WHATS_NEW_DATA = "requestWhatsNewData", e.RESULT_WHATS_NEW_DATA = "resultWhatsNewData", e.SET_WHATS_NEW_CACHE = "setWhatsNewCache", e.TOGGLE_WHATS_NEW_NOTIFICATIONS = "toggleWhatsNewNotifications", e.TELEMETRY_ERROR = "telemetryError", e))(kv || {}), { CHANNEL_CREATED: dN, CONFIG_ERROR: fN, CURRENT_STORY_WAS_SET: pN, DOCS_PREPARED: mN, DOCS_RENDERED: vN, FORCE_RE_RENDER: yN, FORCE_REMOUNT: hd, GLOBALS_UPDATED: bN, NAVIGATE_URL: hN, PLAY_FUNCTION_THREW_EXCEPTION: gN, PRELOAD_ENTRIES: EN, PREVIEW_BUILDER_PROGRESS: _N, PREVIEW_KEYDOWN: RN, REGISTER_SUBSCRIPTION: wN, RESET_STORY_ARGS: CN, SELECT_STORY: PN, SET_CONFIG: SN, SET_CURRENT_STORY: qM, SET_GLOBALS: TN, SET_INDEX: AN, SET_STORIES: ON, SHARED_STATE_CHANGED: $N, SHARED_STATE_SET: xN, STORIES_COLLAPSE_ALL: qN, STORIES_EXPAND_ALL: IN, STORY_ARGS_UPDATED: MN, STORY_CHANGED: NN, STORY_ERRORED: BN, STORY_INDEX_INVALIDATED: kN, STORY_MISSING: DN, STORY_PREPARED: LN, STORY_RENDER_PHASE_CHANGED: IM, STORY_RENDERED: FN, STORY_SPECIFIED: jN, STORY_THREW_EXCEPTION: UN, STORY_UNCHANGED: HN, UPDATE_GLOBALS: WN, UPDATE_QUERY_PARAMS: VN, UPDATE_STORY_ARGS: GN, REQUEST_WHATS_NEW_DATA: zN, RESULT_WHATS_NEW_DATA: YN, SET_WHATS_NEW_CACHE: KN, TOGGLE_WHATS_NEW_NOTIFICATIONS: XN, TELEMETRY_ERROR: QN } = kv, MM = new Error("ignoredException");
function NM() {
  let e = { setHandler: () => {
  }, send: () => {
  } };
  return new xM({ transport: e });
}
var BM = class {
  constructor() {
    this.getChannel = () => {
      if (!this.channel) {
        let e = NM();
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
}, ll = "__STORYBOOK_ADDONS_PREVIEW";
function kM() {
  return V[ll] || (V[ll] = new BM()), V[ll];
}
var DM = kM(), LM = ((e) => (e.DONE = "done", e.ERROR = "error", e.ACTIVE = "active", e.WAITING = "waiting", e))(LM || {}), ye = { CALL: "storybook/instrumenter/call", SYNC: "storybook/instrumenter/sync", START: "storybook/instrumenter/start", BACK: "storybook/instrumenter/back", GOTO: "storybook/instrumenter/goto", NEXT: "storybook/instrumenter/next", END: "storybook/instrumenter/end" }, gd = { start: !1, back: !1, goto: !1, next: !1, end: !1 }, Ed = new Error("This function ran after the play function completed. Did you forget to `await` it?"), _d = (e) => Object.prototype.toString.call(e) === "[object Object]", FM = (e) => Object.prototype.toString.call(e) === "[object Module]", jM = (e) => {
  if (!_d(e) && !FM(e))
    return !1;
  if (e.constructor === void 0)
    return !0;
  let t = e.constructor.prototype;
  return !(!_d(t) || Object.prototype.hasOwnProperty.call(t, "isPrototypeOf") === !1);
}, UM = (e) => {
  try {
    return new e.constructor();
  } catch {
    return {};
  }
}, sl = () => ({ renderPhase: void 0, isDebugging: !1, isPlaying: !1, isLocked: !1, cursor: 0, calls: [], shadowCalls: [], callRefsByResult: /* @__PURE__ */ new Map(), chainedCallIds: /* @__PURE__ */ new Set(), ancestors: [], playUntil: void 0, resolvers: {}, syncTimeout: void 0 }), Rd = (e, t = !1) => {
  let r = (t ? e.shadowCalls : e.calls).filter((a) => a.retain);
  if (!r.length)
    return;
  let n = new Map(Array.from(e.callRefsByResult.entries()).filter(([, a]) => a.retain));
  return { cursor: r.length, calls: r, callRefsByResult: n };
}, HM = class {
  constructor() {
    this.initialized = !1, this.channel = DM.getChannel(), this.state = V.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {};
    let e = ({ storyId: i, isPlaying: s = !0, isDebugging: l = !1 }) => {
      let u = this.getState(i);
      this.setState(i, { ...sl(), ...Rd(u, l), shadowCalls: l ? u.shadowCalls : [], chainedCallIds: l ? u.chainedCallIds : /* @__PURE__ */ new Set(), playUntil: l ? u.playUntil : void 0, isPlaying: s, isDebugging: l }), this.sync(i);
    };
    this.channel.on(hd, e), this.channel.on(IM, ({ storyId: i, newPhase: s }) => {
      let { isDebugging: l } = this.getState(i);
      this.setState(i, { renderPhase: s }), s === "preparing" && l && e({ storyId: i }), s === "playing" && e({ storyId: i, isDebugging: l }), s === "played" && this.setState(i, { isLocked: !1, isPlaying: !1, isDebugging: !1 }), s === "errored" && this.setState(i, { isLocked: !1, isPlaying: !1 });
    }), this.channel.on(qM, () => {
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
      }), this.channel.emit(hd, { storyId: i, isDebugging: !0 });
    }, r = ({ storyId: i }) => {
      var u;
      let s = this.getLog(i).filter((c) => !c.ancestors.length), l = s.reduceRight((c, d, f) => c >= 0 || d.status === "waiting" ? c : f, -1);
      t({ storyId: i, playUntil: (u = s[l - 1]) == null ? void 0 : u.callId });
    }, n = ({ storyId: i, callId: s }) => {
      var v;
      let { calls: l, shadowCalls: u, resolvers: c } = this.getState(i), d = l.find(({ id: y }) => y === s), f = u.find(({ id: y }) => y === s);
      if (!d && f && Object.values(c).length > 0) {
        let y = (v = this.getLog(i).find((h) => h.status === "waiting")) == null ? void 0 : v.callId;
        f.id !== y && this.setState(i, { playUntil: f.id }), Object.values(c).forEach((h) => h());
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
    return this.state[e] || sl();
  }
  setState(e, t) {
    let r = this.getState(e), n = typeof t == "function" ? t(r) : t;
    this.state = { ...this.state, [e]: { ...r, ...n } }, V.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
  }
  cleanup() {
    this.state = Object.entries(this.state).reduce((t, [r, n]) => {
      let a = Rd(n);
      return a && (t[r] = Object.assign(sl(), a)), t;
    }, {});
    let e = { controlStates: gd, logItems: [] };
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
    if (!jM(e))
      return e;
    let { mutate: r = !1, path: n = [] } = t;
    return Object.keys(e).reduce((a, o) => {
      let i = e[o];
      return typeof i != "function" ? (a[o] = this.instrument(i, { ...t, path: n.concat(o) }), a) : typeof i.__originalFn__ == "function" ? (a[o] = i, a) : (a[o] = (...s) => this.track(o, i, s, t), a[o].__originalFn__ = i, Object.defineProperty(a[o], "name", { value: o, writable: !1 }), Object.keys(i).length > 0 && Object.assign(a[o], this.instrument({ ...i }, { ...t, path: n.concat(o) })), a);
    }, r ? e : UM(e));
  }
  track(e, t, r, n) {
    var y, h, P, p;
    let a = ((y = r == null ? void 0 : r[0]) == null ? void 0 : y.__storyId__) || ((p = (P = (h = V.__STORYBOOK_PREVIEW__) == null ? void 0 : h.selectionStore) == null ? void 0 : P.selection) == null ? void 0 : p.storyId), { cursor: o, ancestors: i } = this.getState(a);
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
        let { prefix: d, localName: f, id: v, classList: y, innerText: h } = l, P = Array.from(y);
        return { __element__: { prefix: d, localName: f, id: v, classNames: P, innerText: h } };
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
        if (l !== Ed)
          throw Bv.warn(l), MM;
      }
      throw l;
    };
    try {
      if (a === "played" && !t.retain)
        throw Ed;
      let l = (r.getArgs ? r.getArgs(t, this.getState(t.storyId)) : t.args).map((c) => typeof c != "function" || Object.keys(c).length ? c : (...d) => {
        let { cursor: f, ancestors: v } = this.getState(t.storyId);
        this.setState(t.storyId, { cursor: 0, ancestors: [...v, t.id] });
        let y = () => this.setState(t.storyId, { cursor: f, ancestors: v }), h = !1;
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
      let r = t.concat(e).reduce((n, a) => Object.assign(n, { [a.id]: a }), {});
      return { calls: Object.values(r).sort((n, a) => n.id.localeCompare(a.id, void 0, { numeric: !0 })) };
    }), this.sync(e.storyId);
  }
  sync(e) {
    let t = () => {
      var u;
      let { isLocked: r, isPlaying: n } = this.getState(e), a = this.getLog(e), o = (u = a.filter(({ ancestors: c }) => !c.length).find((c) => c.status === "waiting")) == null ? void 0 : u.callId, i = a.some((c) => c.status === "active");
      if (r || i || a.length === 0) {
        let c = { controlStates: gd, logItems: a };
        this.channel.emit(ye.SYNC, c);
        return;
      }
      let s = a.some((c) => c.status === "done" || c.status === "error"), l = { controlStates: { start: s, back: s, goto: !0, next: n, end: n }, logItems: a, pausedAt: o };
      this.channel.emit(ye.SYNC, l);
    };
    this.setState(e, ({ syncTimeout: r }) => (clearTimeout(r), { syncTimeout: setTimeout(t, 0) }));
  }
};
function Dv(e, t = {}) {
  var r, n, a, o;
  try {
    let i = !1, s = !1;
    return (n = (r = V.window.location) == null ? void 0 : r.search) != null && n.includes("instrument=true") ? i = !0 : (o = (a = V.window.location) == null ? void 0 : a.search) != null && o.includes("instrument=false") && (s = !0), V.window.parent === V.window && !i || s ? e : (V.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ || (V.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new HM()), V.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(e, t));
  } catch (i) {
    return X.warn(i), e;
  }
}
var WM = bd.default || bd, Xr = Dv(
  { ...oI },
  {
    intercept: (e, t) => t[0] === "fireEvent" || e.startsWith("findBy") || e.startsWith("waitFor")
  }
);
Xr.screen = Object.entries(Xr.screen).reduce(
  (e, [t, r]) => Object.defineProperty(e, t, {
    get() {
      return X.warn(Jv`
          You are using Testing Library's \`screen\` object. Use \`within(canvasElement)\` instead.
          More info: https://storybook.js.org/docs/react/essentials/interactions
        `), r;
    }
  }),
  { ...Xr.screen }
);
var {
  buildQueries: JN,
  configure: ZN,
  createEvent: eB,
  findAllByAltText: tB,
  findAllByDisplayValue: rB,
  findAllByLabelText: nB,
  findAllByPlaceholderText: aB,
  findAllByRole: oB,
  findAllByTestId: iB,
  findAllByText: lB,
  findAllByTitle: sB,
  findByAltText: uB,
  findByDisplayValue: cB,
  findByLabelText: dB,
  findByPlaceholderText: fB,
  findByRole: pB,
  findByTestId: mB,
  findByText: vB,
  findByTitle: yB,
  fireEvent: bB,
  getAllByAltText: hB,
  getAllByDisplayValue: gB,
  getAllByLabelText: EB,
  getAllByPlaceholderText: _B,
  getAllByRole: RB,
  getAllByTestId: wB,
  getAllByText: CB,
  getAllByTitle: PB,
  getByAltText: SB,
  getByDisplayValue: TB,
  getByLabelText: AB,
  getByPlaceholderText: OB,
  getByRole: $B,
  getByTestId: xB,
  getByText: qB,
  getByTitle: IB,
  getConfig: MB,
  getDefaultNormalizer: NB,
  getElementError: BB,
  getNodeText: kB,
  getQueriesForElement: DB,
  getRoles: LB,
  getSuggestedQuery: FB,
  isInaccessible: jB,
  logDOM: UB,
  logRoles: HB,
  prettyDOM: WB,
  queries: VB,
  queryAllByAltText: GB,
  queryAllByAttribute: zB,
  queryAllByDisplayValue: YB,
  queryAllByLabelText: KB,
  queryAllByPlaceholderText: XB,
  queryAllByRole: QB,
  queryAllByTestId: JB,
  queryAllByText: ZB,
  queryAllByTitle: ek,
  queryByAltText: tk,
  queryByAttribute: rk,
  queryByDisplayValue: nk,
  queryByLabelText: ak,
  queryByPlaceholderText: ok,
  queryByRole: ik,
  queryByTestId: lk,
  queryByText: sk,
  queryByTitle: uk,
  queryHelpers: ck,
  screen: dk,
  waitFor: fk,
  waitForElementToBeRemoved: pk,
  within: mk,
  prettyFormat: vk
} = Xr, yk = Dv(
  { userEvent: WM },
  { intercept: !0 }
).userEvent;
export {
  yk as u,
  mk as w
};
