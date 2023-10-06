import { n as M, e as ge, T as Oe, F as Ie, I as Se, g as Te } from "./storybook-6f4c0a9b.es.js";
import h, { useRef as E, useMemo as ee, useEffect as S, useState as R, useCallback as H, useLayoutEffect as je } from "react";
import { g as me } from "./storybook-92157f1b.es.js";
import { _ as Fe, i as te, a as Re } from "./storybook-86ede3a4.es.js";
import "./storybook-c84489b0.es.js";
import "./storybook-d79fba58.es.js";
import "./storybook-398c73a4.es.js";
function $() {
  return ($ = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function ne(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function G(e) {
  var t = E(e), n = E(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var T = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, z = function(e) {
  return "touches" in e;
}, U = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, le = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = z(t) ? function(a, l) {
    for (var s = 0; s < a.length; s++)
      if (a[s].identifier === l)
        return a[s];
    return a[0];
  }(t.touches, n) : t;
  return { left: T((o.pageX - (r.left + U(e).pageXOffset)) / r.width), top: T((o.pageY - (r.top + U(e).pageYOffset)) / r.height) };
}, se = function(e) {
  !z(e) && e.preventDefault();
}, re = h.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = ne(e, ["onMove", "onKey"]), o = E(null), a = G(t), l = G(n), s = E(null), i = E(!1), c = ee(function() {
    var w = function(v) {
      se(v), (z(v) ? v.touches.length > 0 : v.buttons > 0) && o.current ? a(le(o.current, v, s.current)) : k(!1);
    }, N = function() {
      return k(!1);
    };
    function k(v) {
      var m = i.current, y = U(o.current), C = v ? y.addEventListener : y.removeEventListener;
      C(m ? "touchmove" : "mousemove", w), C(m ? "touchend" : "mouseup", N);
    }
    return [function(v) {
      var m = v.nativeEvent, y = o.current;
      if (y && (se(m), !function(V, j) {
        return j && !z(V);
      }(m, i.current) && y)) {
        if (z(m)) {
          i.current = !0;
          var C = m.changedTouches || [];
          C.length && (s.current = C[0].identifier);
        }
        y.focus(), a(le(y, m, s.current)), k(!0);
      }
    }, function(v) {
      var m = v.which || v.keyCode;
      m < 37 || m > 40 || (v.preventDefault(), l({ left: m === 39 ? 0.05 : m === 37 ? -0.05 : 0, top: m === 40 ? 0.05 : m === 38 ? -0.05 : 0 }));
    }, k];
  }, [l, a]), d = c[0], f = c[1], g = c[2];
  return S(function() {
    return g;
  }, [g]), h.createElement("div", $({}, r, { onTouchStart: d, onMouseDown: d, className: "react-colorful__interactive", ref: o, onKeyDown: f, tabIndex: 0, role: "slider" }));
}), L = function(e) {
  return e.filter(Boolean).join(" ");
}, oe = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = L(["react-colorful__pointer", e.className]);
  return h.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, h.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, p = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, ze = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, He = function(e) {
  return pe(Y(e));
}, Y = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? p(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? p(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, Pe = function(e, t) {
  return t === void 0 && (t = "deg"), Number(e) * (ze[t] || 1);
}, Le = function(e) {
  var t = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
  return t ? qe({ h: Pe(t[1], t[2]), s: Number(t[3]), l: Number(t[4]), a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1) }) : { h: 0, s: 0, v: 0, a: 1 };
}, qe = function(e) {
  var t = e.s, n = e.l;
  return { h: e.h, s: (t *= (n < 50 ? n : 100 - n) / 100) > 0 ? 2 * t / (n + t) * 100 : 0, v: n + t, a: e.a };
}, Be = function(e) {
  return Xe(ve(e));
}, be = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: p(e.h), s: p(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: p(o / 2), a: p(r, 2) };
}, J = function(e) {
  var t = be(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, X = function(e) {
  var t = be(e);
  return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
}, ve = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), l = r * (1 - n), s = r * (1 - (t - a) * n), i = r * (1 - (1 - t + a) * n), c = a % 6;
  return { r: p(255 * [r, s, l, l, i, r][c]), g: p(255 * [i, r, r, s, l, l][c]), b: p(255 * [l, l, i, r, r, s][c]), a: p(o, 2) };
}, We = function(e) {
  var t = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
  return t ? pe({ r: Number(t[1]) / (t[2] ? 100 / 255 : 1), g: Number(t[3]) / (t[4] ? 100 / 255 : 1), b: Number(t[5]) / (t[6] ? 100 / 255 : 1), a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1) }) : { h: 0, s: 0, v: 0, a: 1 };
}, q = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Xe = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? q(p(255 * o)) : "";
  return "#" + q(t) + q(n) + q(r) + a;
}, pe = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), l = a - Math.min(t, n, r), s = l ? a === t ? (n - r) / l : a === n ? 2 + (r - t) / l : 4 + (t - n) / l : 0;
  return { h: p(60 * (s < 0 ? s + 6 : s)), s: p(a ? l / a * 100 : 0), v: p(a / 255 * 100), a: o };
}, ye = h.memo(function(e) {
  var t = e.hue, n = e.onChange, r = L(["react-colorful__hue", e.className]);
  return h.createElement("div", { className: r }, h.createElement(re, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: T(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": p(t), "aria-valuemax": "360", "aria-valuemin": "0" }, h.createElement(oe, { className: "react-colorful__hue-pointer", left: t / 360, color: J({ h: t, s: 100, v: 100, a: 1 }) })));
}), xe = h.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: J({ h: t.h, s: 100, v: 100, a: 1 }) };
  return h.createElement("div", { className: "react-colorful__saturation", style: r }, h.createElement(re, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: T(t.s + 100 * o.left, 0, 100), v: T(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + p(t.s) + "%, Brightness " + p(t.v) + "%" }, h.createElement(oe, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: J(t) })));
}), we = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, ke = function(e, t) {
  return e.replace(/\s/g, "") === t.replace(/\s/g, "");
}, De = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || we(Y(e), Y(t));
};
function _e(e, t, n) {
  var r = G(n), o = R(function() {
    return e.toHsva(t);
  }), a = o[0], l = o[1], s = E({ color: t, hsva: a });
  S(function() {
    if (!e.equal(t, s.current.color)) {
      var c = e.toHsva(t);
      s.current = { hsva: c, color: t }, l(c);
    }
  }, [t, e]), S(function() {
    var c;
    we(a, s.current.hsva) || e.equal(c = e.fromHsva(a), s.current.color) || (s.current = { hsva: a, color: c }, r(c));
  }, [a, e, r]);
  var i = H(function(c) {
    l(function(d) {
      return Object.assign({}, d, c);
    });
  }, []);
  return [a, i];
}
var Ke = typeof window < "u" ? je : S, Ve = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, ie = /* @__PURE__ */ new Map(), Ee = function(e) {
  Ke(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !ie.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, ie.set(t, n);
      var r = Ve();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, Ae = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, l = ne(e, ["className", "colorModel", "color", "onChange"]), s = E(null);
  Ee(s);
  var i = _e(n, o, a), c = i[0], d = i[1], f = L(["react-colorful", t]);
  return h.createElement("div", $({}, l, { ref: s, className: f }), h.createElement(xe, { hsva: c, onChange: d }), h.createElement(ye, { hue: c.h, onChange: d, className: "react-colorful__last-control" }));
}, Ge = { defaultColor: "000", toHsva: He, fromHsva: function(e) {
  return Be({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: De }, Ue = function(e) {
  return h.createElement(Ae, $({}, e, { colorModel: Ge }));
}, Ye = function(e) {
  var t = e.className, n = e.hsva, r = e.onChange, o = { backgroundImage: "linear-gradient(90deg, " + X(Object.assign({}, n, { a: 0 })) + ", " + X(Object.assign({}, n, { a: 1 })) + ")" }, a = L(["react-colorful__alpha", t]), l = p(100 * n.a);
  return h.createElement("div", { className: a }, h.createElement("div", { className: "react-colorful__alpha-gradient", style: o }), h.createElement(re, { onMove: function(s) {
    r({ a: s.left });
  }, onKey: function(s) {
    r({ a: T(n.a + s.left) });
  }, "aria-label": "Alpha", "aria-valuetext": l + "%", "aria-valuenow": l, "aria-valuemin": "0", "aria-valuemax": "100" }, h.createElement(oe, { className: "react-colorful__alpha-pointer", left: n.a, color: X(n) })));
}, Me = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, l = ne(e, ["className", "colorModel", "color", "onChange"]), s = E(null);
  Ee(s);
  var i = _e(n, o, a), c = i[0], d = i[1], f = L(["react-colorful", t]);
  return h.createElement("div", $({}, l, { ref: s, className: f }), h.createElement(xe, { hsva: c, onChange: d }), h.createElement(ye, { hue: c.h, onChange: d }), h.createElement(Ye, { hsva: c, onChange: d, className: "react-colorful__last-control" }));
}, Je = { defaultColor: "hsla(0, 0%, 0%, 1)", toHsva: Le, fromHsva: X, equal: ke }, Qe = function(e) {
  return h.createElement(Me, $({}, e, { colorModel: Je }));
}, Ze = { defaultColor: "rgba(0, 0, 0, 1)", toHsva: We, fromHsva: function(e) {
  var t = ve(e);
  return "rgba(" + t.r + ", " + t.g + ", " + t.b + ", " + t.a + ")";
}, equal: ke }, et = function(e) {
  return h.createElement(Me, $({}, e, { colorModel: Ze }));
}, tt = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};
const P = tt, Ce = {};
for (const e of Object.keys(P))
  Ce[P[e]] = e;
const u = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
};
var $e = u;
for (const e of Object.keys(u)) {
  if (!("channels" in u[e]))
    throw new Error("missing channels property: " + e);
  if (!("labels" in u[e]))
    throw new Error("missing channel labels property: " + e);
  if (u[e].labels.length !== u[e].channels)
    throw new Error("channel and label counts mismatch: " + e);
  const { channels: t, labels: n } = u[e];
  delete u[e].channels, delete u[e].labels, Object.defineProperty(u[e], "channels", { value: t }), Object.defineProperty(u[e], "labels", { value: n });
}
u.rgb.hsl = function(e) {
  const t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), l = a - o;
  let s, i;
  a === o ? s = 0 : t === a ? s = (n - r) / l : n === a ? s = 2 + (r - t) / l : r === a && (s = 4 + (t - n) / l), s = Math.min(s * 60, 360), s < 0 && (s += 360);
  const c = (o + a) / 2;
  return a === o ? i = 0 : c <= 0.5 ? i = l / (a + o) : i = l / (2 - a - o), [s, i * 100, c * 100];
};
u.rgb.hsv = function(e) {
  let t, n, r, o, a;
  const l = e[0] / 255, s = e[1] / 255, i = e[2] / 255, c = Math.max(l, s, i), d = c - Math.min(l, s, i), f = function(g) {
    return (c - g) / 6 / d + 1 / 2;
  };
  return d === 0 ? (o = 0, a = 0) : (a = d / c, t = f(l), n = f(s), r = f(i), l === c ? o = r - n : s === c ? o = 1 / 3 + t - r : i === c && (o = 2 / 3 + n - t), o < 0 ? o += 1 : o > 1 && (o -= 1)), [
    o * 360,
    a * 100,
    c * 100
  ];
};
u.rgb.hwb = function(e) {
  const t = e[0], n = e[1];
  let r = e[2];
  const o = u.rgb.hsl(e)[0], a = 1 / 255 * Math.min(t, Math.min(n, r));
  return r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)), [o, a * 100, r * 100];
};
u.rgb.cmyk = function(e) {
  const t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, o = Math.min(1 - t, 1 - n, 1 - r), a = (1 - t - o) / (1 - o) || 0, l = (1 - n - o) / (1 - o) || 0, s = (1 - r - o) / (1 - o) || 0;
  return [a * 100, l * 100, s * 100, o * 100];
};
function nt(e, t) {
  return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
}
u.rgb.keyword = function(e) {
  const t = Ce[e];
  if (t)
    return t;
  let n = 1 / 0, r;
  for (const o of Object.keys(P)) {
    const a = P[o], l = nt(e, a);
    l < n && (n = l, r = o);
  }
  return r;
};
u.keyword.rgb = function(e) {
  return P[e];
};
u.rgb.xyz = function(e) {
  let t = e[0] / 255, n = e[1] / 255, r = e[2] / 255;
  t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92, n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92, r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
  const o = t * 0.4124 + n * 0.3576 + r * 0.1805, a = t * 0.2126 + n * 0.7152 + r * 0.0722, l = t * 0.0193 + n * 0.1192 + r * 0.9505;
  return [o * 100, a * 100, l * 100];
};
u.rgb.lab = function(e) {
  const t = u.rgb.xyz(e);
  let n = t[0], r = t[1], o = t[2];
  n /= 95.047, r /= 100, o /= 108.883, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116, o = o > 8856e-6 ? o ** (1 / 3) : 7.787 * o + 16 / 116;
  const a = 116 * r - 16, l = 500 * (n - r), s = 200 * (r - o);
  return [a, l, s];
};
u.hsl.rgb = function(e) {
  const t = e[0] / 360, n = e[1] / 100, r = e[2] / 100;
  let o, a, l;
  if (n === 0)
    return l = r * 255, [l, l, l];
  r < 0.5 ? o = r * (1 + n) : o = r + n - r * n;
  const s = 2 * r - o, i = [0, 0, 0];
  for (let c = 0; c < 3; c++)
    a = t + 1 / 3 * -(c - 1), a < 0 && a++, a > 1 && a--, 6 * a < 1 ? l = s + (o - s) * 6 * a : 2 * a < 1 ? l = o : 3 * a < 2 ? l = s + (o - s) * (2 / 3 - a) * 6 : l = s, i[c] = l * 255;
  return i;
};
u.hsl.hsv = function(e) {
  const t = e[0];
  let n = e[1] / 100, r = e[2] / 100, o = n;
  const a = Math.max(r, 0.01);
  r *= 2, n *= r <= 1 ? r : 2 - r, o *= a <= 1 ? a : 2 - a;
  const l = (r + n) / 2, s = r === 0 ? 2 * o / (a + o) : 2 * n / (r + n);
  return [t, s * 100, l * 100];
};
u.hsv.rgb = function(e) {
  const t = e[0] / 60, n = e[1] / 100;
  let r = e[2] / 100;
  const o = Math.floor(t) % 6, a = t - Math.floor(t), l = 255 * r * (1 - n), s = 255 * r * (1 - n * a), i = 255 * r * (1 - n * (1 - a));
  switch (r *= 255, o) {
    case 0:
      return [r, i, l];
    case 1:
      return [s, r, l];
    case 2:
      return [l, r, i];
    case 3:
      return [l, s, r];
    case 4:
      return [i, l, r];
    case 5:
      return [r, l, s];
  }
};
u.hsv.hsl = function(e) {
  const t = e[0], n = e[1] / 100, r = e[2] / 100, o = Math.max(r, 0.01);
  let a, l;
  l = (2 - n) * r;
  const s = (2 - n) * o;
  return a = n * o, a /= s <= 1 ? s : 2 - s, a = a || 0, l /= 2, [t, a * 100, l * 100];
};
u.hwb.rgb = function(e) {
  const t = e[0] / 360;
  let n = e[1] / 100, r = e[2] / 100;
  const o = n + r;
  let a;
  o > 1 && (n /= o, r /= o);
  const l = Math.floor(6 * t), s = 1 - r;
  a = 6 * t - l, l & 1 && (a = 1 - a);
  const i = n + a * (s - n);
  let c, d, f;
  switch (l) {
    default:
    case 6:
    case 0:
      c = s, d = i, f = n;
      break;
    case 1:
      c = i, d = s, f = n;
      break;
    case 2:
      c = n, d = s, f = i;
      break;
    case 3:
      c = n, d = i, f = s;
      break;
    case 4:
      c = i, d = n, f = s;
      break;
    case 5:
      c = s, d = n, f = i;
      break;
  }
  return [c * 255, d * 255, f * 255];
};
u.cmyk.rgb = function(e) {
  const t = e[0] / 100, n = e[1] / 100, r = e[2] / 100, o = e[3] / 100, a = 1 - Math.min(1, t * (1 - o) + o), l = 1 - Math.min(1, n * (1 - o) + o), s = 1 - Math.min(1, r * (1 - o) + o);
  return [a * 255, l * 255, s * 255];
};
u.xyz.rgb = function(e) {
  const t = e[0] / 100, n = e[1] / 100, r = e[2] / 100;
  let o, a, l;
  return o = t * 3.2406 + n * -1.5372 + r * -0.4986, a = t * -0.9689 + n * 1.8758 + r * 0.0415, l = t * 0.0557 + n * -0.204 + r * 1.057, o = o > 31308e-7 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92, a = a > 31308e-7 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92, l = l > 31308e-7 ? 1.055 * l ** (1 / 2.4) - 0.055 : l * 12.92, o = Math.min(Math.max(0, o), 1), a = Math.min(Math.max(0, a), 1), l = Math.min(Math.max(0, l), 1), [o * 255, a * 255, l * 255];
};
u.xyz.lab = function(e) {
  let t = e[0], n = e[1], r = e[2];
  t /= 95.047, n /= 100, r /= 108.883, t = t > 8856e-6 ? t ** (1 / 3) : 7.787 * t + 16 / 116, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116;
  const o = 116 * n - 16, a = 500 * (t - n), l = 200 * (n - r);
  return [o, a, l];
};
u.lab.xyz = function(e) {
  const t = e[0], n = e[1], r = e[2];
  let o, a, l;
  a = (t + 16) / 116, o = n / 500 + a, l = a - r / 200;
  const s = a ** 3, i = o ** 3, c = l ** 3;
  return a = s > 8856e-6 ? s : (a - 16 / 116) / 7.787, o = i > 8856e-6 ? i : (o - 16 / 116) / 7.787, l = c > 8856e-6 ? c : (l - 16 / 116) / 7.787, o *= 95.047, a *= 100, l *= 108.883, [o, a, l];
};
u.lab.lch = function(e) {
  const t = e[0], n = e[1], r = e[2];
  let o;
  o = Math.atan2(r, n) * 360 / 2 / Math.PI, o < 0 && (o += 360);
  const l = Math.sqrt(n * n + r * r);
  return [t, l, o];
};
u.lch.lab = function(e) {
  const t = e[0], n = e[1], o = e[2] / 360 * 2 * Math.PI, a = n * Math.cos(o), l = n * Math.sin(o);
  return [t, a, l];
};
u.rgb.ansi16 = function(e, t = null) {
  const [n, r, o] = e;
  let a = t === null ? u.rgb.hsv(e)[2] : t;
  if (a = Math.round(a / 50), a === 0)
    return 30;
  let l = 30 + (Math.round(o / 255) << 2 | Math.round(r / 255) << 1 | Math.round(n / 255));
  return a === 2 && (l += 60), l;
};
u.hsv.ansi16 = function(e) {
  return u.rgb.ansi16(u.hsv.rgb(e), e[2]);
};
u.rgb.ansi256 = function(e) {
  const t = e[0], n = e[1], r = e[2];
  return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
};
u.ansi16.rgb = function(e) {
  let t = e % 10;
  if (t === 0 || t === 7)
    return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
  const n = (~~(e > 50) + 1) * 0.5, r = (t & 1) * n * 255, o = (t >> 1 & 1) * n * 255, a = (t >> 2 & 1) * n * 255;
  return [r, o, a];
};
u.ansi256.rgb = function(e) {
  if (e >= 232) {
    const a = (e - 232) * 10 + 8;
    return [a, a, a];
  }
  e -= 16;
  let t;
  const n = Math.floor(e / 36) / 5 * 255, r = Math.floor((t = e % 36) / 6) / 5 * 255, o = t % 6 / 5 * 255;
  return [n, r, o];
};
u.rgb.hex = function(e) {
  const n = (((Math.round(e[0]) & 255) << 16) + ((Math.round(e[1]) & 255) << 8) + (Math.round(e[2]) & 255)).toString(16).toUpperCase();
  return "000000".substring(n.length) + n;
};
u.hex.rgb = function(e) {
  const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!t)
    return [0, 0, 0];
  let n = t[0];
  t[0].length === 3 && (n = n.split("").map((s) => s + s).join(""));
  const r = parseInt(n, 16), o = r >> 16 & 255, a = r >> 8 & 255, l = r & 255;
  return [o, a, l];
};
u.rgb.hcg = function(e) {
  const t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, o = Math.max(Math.max(t, n), r), a = Math.min(Math.min(t, n), r), l = o - a;
  let s, i;
  return l < 1 ? s = a / (1 - l) : s = 0, l <= 0 ? i = 0 : o === t ? i = (n - r) / l % 6 : o === n ? i = 2 + (r - t) / l : i = 4 + (t - n) / l, i /= 6, i %= 1, [i * 360, l * 100, s * 100];
};
u.hsl.hcg = function(e) {
  const t = e[1] / 100, n = e[2] / 100, r = n < 0.5 ? 2 * t * n : 2 * t * (1 - n);
  let o = 0;
  return r < 1 && (o = (n - 0.5 * r) / (1 - r)), [e[0], r * 100, o * 100];
};
u.hsv.hcg = function(e) {
  const t = e[1] / 100, n = e[2] / 100, r = t * n;
  let o = 0;
  return r < 1 && (o = (n - r) / (1 - r)), [e[0], r * 100, o * 100];
};
u.hcg.rgb = function(e) {
  const t = e[0] / 360, n = e[1] / 100, r = e[2] / 100;
  if (n === 0)
    return [r * 255, r * 255, r * 255];
  const o = [0, 0, 0], a = t % 1 * 6, l = a % 1, s = 1 - l;
  let i = 0;
  switch (Math.floor(a)) {
    case 0:
      o[0] = 1, o[1] = l, o[2] = 0;
      break;
    case 1:
      o[0] = s, o[1] = 1, o[2] = 0;
      break;
    case 2:
      o[0] = 0, o[1] = 1, o[2] = l;
      break;
    case 3:
      o[0] = 0, o[1] = s, o[2] = 1;
      break;
    case 4:
      o[0] = l, o[1] = 0, o[2] = 1;
      break;
    default:
      o[0] = 1, o[1] = 0, o[2] = s;
  }
  return i = (1 - n) * r, [
    (n * o[0] + i) * 255,
    (n * o[1] + i) * 255,
    (n * o[2] + i) * 255
  ];
};
u.hcg.hsv = function(e) {
  const t = e[1] / 100, n = e[2] / 100, r = t + n * (1 - t);
  let o = 0;
  return r > 0 && (o = t / r), [e[0], o * 100, r * 100];
};
u.hcg.hsl = function(e) {
  const t = e[1] / 100, r = e[2] / 100 * (1 - t) + 0.5 * t;
  let o = 0;
  return r > 0 && r < 0.5 ? o = t / (2 * r) : r >= 0.5 && r < 1 && (o = t / (2 * (1 - r))), [e[0], o * 100, r * 100];
};
u.hcg.hwb = function(e) {
  const t = e[1] / 100, n = e[2] / 100, r = t + n * (1 - t);
  return [e[0], (r - t) * 100, (1 - r) * 100];
};
u.hwb.hcg = function(e) {
  const t = e[1] / 100, r = 1 - e[2] / 100, o = r - t;
  let a = 0;
  return o < 1 && (a = (r - o) / (1 - o)), [e[0], o * 100, a * 100];
};
u.apple.rgb = function(e) {
  return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
};
u.rgb.apple = function(e) {
  return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
};
u.gray.rgb = function(e) {
  return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
};
u.gray.hsl = function(e) {
  return [0, 0, e[0]];
};
u.gray.hsv = u.gray.hsl;
u.gray.hwb = function(e) {
  return [0, 100, e[0]];
};
u.gray.cmyk = function(e) {
  return [0, 0, 0, e[0]];
};
u.gray.lab = function(e) {
  return [e[0], 0, 0];
};
u.gray.hex = function(e) {
  const t = Math.round(e[0] / 100 * 255) & 255, r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
  return "000000".substring(r.length) + r;
};
u.rgb.gray = function(e) {
  return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
};
const D = $e;
function rt() {
  const e = {}, t = Object.keys(D);
  for (let n = t.length, r = 0; r < n; r++)
    e[t[r]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  return e;
}
function ot(e) {
  const t = rt(), n = [e];
  for (t[e].distance = 0; n.length; ) {
    const r = n.pop(), o = Object.keys(D[r]);
    for (let a = o.length, l = 0; l < a; l++) {
      const s = o[l], i = t[s];
      i.distance === -1 && (i.distance = t[r].distance + 1, i.parent = r, n.unshift(s));
    }
  }
  return t;
}
function at(e, t) {
  return function(n) {
    return t(e(n));
  };
}
function lt(e, t) {
  const n = [t[e].parent, e];
  let r = D[t[e].parent][e], o = t[e].parent;
  for (; t[o].parent; )
    n.unshift(t[o].parent), r = at(D[t[o].parent][o], r), o = t[o].parent;
  return r.conversion = n, r;
}
var st = function(e) {
  const t = ot(e), n = {}, r = Object.keys(t);
  for (let o = r.length, a = 0; a < o; a++) {
    const l = r[a];
    t[l].parent !== null && (n[l] = lt(l, t));
  }
  return n;
};
const Q = $e, it = st, O = {}, ct = Object.keys(Q);
function ut(e) {
  const t = function(...n) {
    const r = n[0];
    return r == null ? r : (r.length > 1 && (n = r), e(n));
  };
  return "conversion" in e && (t.conversion = e.conversion), t;
}
function ft(e) {
  const t = function(...n) {
    const r = n[0];
    if (r == null)
      return r;
    r.length > 1 && (n = r);
    const o = e(n);
    if (typeof o == "object")
      for (let a = o.length, l = 0; l < a; l++)
        o[l] = Math.round(o[l]);
    return o;
  };
  return "conversion" in e && (t.conversion = e.conversion), t;
}
ct.forEach((e) => {
  O[e] = {}, Object.defineProperty(O[e], "channels", { value: Q[e].channels }), Object.defineProperty(O[e], "labels", { value: Q[e].labels });
  const t = it(e);
  Object.keys(t).forEach((r) => {
    const o = t[r];
    O[e][r] = ft(o), O[e][r].raw = ut(o);
  });
});
var ht = O;
const x = /* @__PURE__ */ me(ht);
var dt = Fe, gt = function() {
  return dt.Date.now();
}, mt = gt, bt = /\s/;
function vt(e) {
  for (var t = e.length; t-- && bt.test(e.charAt(t)); )
    ;
  return t;
}
var pt = vt, yt = pt, xt = /^\s+/;
function wt(e) {
  return e && e.slice(0, yt(e) + 1).replace(xt, "");
}
var kt = wt, _t = kt, ce = te, Et = Re, ue = 0 / 0, Mt = /^[-+]0x[0-9a-f]+$/i, Ct = /^0b[01]+$/i, $t = /^0o[0-7]+$/i, Nt = parseInt;
function Ot(e) {
  if (typeof e == "number")
    return e;
  if (Et(e))
    return ue;
  if (ce(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ce(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = _t(e);
  var n = Ct.test(e);
  return n || $t.test(e) ? Nt(e.slice(2), n ? 2 : 8) : Mt.test(e) ? ue : +e;
}
var It = Ot, St = te, A = mt, fe = It, Tt = "Expected a function", jt = Math.max, Ft = Math.min;
function Rt(e, t, n) {
  var r, o, a, l, s, i, c = 0, d = !1, f = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Tt);
  t = fe(t) || 0, St(n) && (d = !!n.leading, f = "maxWait" in n, a = f ? jt(fe(n.maxWait) || 0, t) : a, g = "trailing" in n ? !!n.trailing : g);
  function w(b) {
    var _ = r, F = o;
    return r = o = void 0, c = b, l = e.apply(F, _), l;
  }
  function N(b) {
    return c = b, s = setTimeout(m, t), d ? w(b) : l;
  }
  function k(b) {
    var _ = b - i, F = b - c, ae = t - _;
    return f ? Ft(ae, a - F) : ae;
  }
  function v(b) {
    var _ = b - i, F = b - c;
    return i === void 0 || _ >= t || _ < 0 || f && F >= a;
  }
  function m() {
    var b = A();
    if (v(b))
      return y(b);
    s = setTimeout(m, k(b));
  }
  function y(b) {
    return s = void 0, g && r ? w(b) : (r = o = void 0, l);
  }
  function C() {
    s !== void 0 && clearTimeout(s), c = 0, r = i = o = s = void 0;
  }
  function V() {
    return s === void 0 ? l : y(A());
  }
  function j() {
    var b = A(), _ = v(b);
    if (r = arguments, o = this, i = b, _) {
      if (s === void 0)
        return N(i);
      if (f)
        return clearTimeout(s), s = setTimeout(m, t), w(i);
    }
    return s === void 0 && (s = setTimeout(m, t)), l;
  }
  return j.cancel = C, j.flush = V, j;
}
var zt = Rt, Ht = zt, Pt = te, Lt = "Expected a function";
function qt(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Lt);
  return Pt(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), Ht(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
var Bt = qt;
const Wt = /* @__PURE__ */ me(Bt);
var Xt = M.div({ position: "relative", maxWidth: 250 }), Dt = M(ge)({ position: "absolute", zIndex: 1, top: 4, left: 4 }), Kt = M.div({ width: 200, margin: 5, ".react-colorful__saturation": { borderRadius: "4px 4px 0 0" }, ".react-colorful__hue": { boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 5%)" }, ".react-colorful__last-control": { borderRadius: "0 0 4px 4px" } }), Vt = M(Oe)(({ theme: e }) => ({ fontFamily: e.typography.fonts.base })), At = M.div({ display: "grid", gridTemplateColumns: "repeat(9, 16px)", gap: 6, padding: 3, marginTop: 5, width: 200 }), Gt = M.div(({ theme: e, active: t }) => ({ width: 16, height: 16, boxShadow: t ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px` : `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: e.appBorderRadius })), Ut = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`, he = ({ value: e, active: t, onClick: n, style: r, ...o }) => {
  let a = `linear-gradient(${e}, ${e}), ${Ut}, linear-gradient(#fff, #fff)`;
  return h.createElement(Gt, { ...o, active: t, onClick: n, style: { ...r, backgroundImage: a } });
}, Yt = M(Ie.Input)(({ theme: e }) => ({ width: "100%", paddingLeft: 30, paddingRight: 30, boxSizing: "border-box", fontFamily: e.typography.fonts.base })), Jt = M(Se)(({ theme: e }) => ({ position: "absolute", zIndex: 1, top: 6, right: 7, width: 20, height: 20, padding: 4, boxSizing: "border-box", cursor: "pointer", color: e.input.color })), Ne = ((e) => (e.RGB = "rgb", e.HSL = "hsl", e.HEX = "hex", e))(Ne || {}), B = Object.values(Ne), Qt = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/, Zt = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i, en = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i, Z = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i, tn = /^\s*#?([0-9a-f]{3})\s*$/i, nn = { hex: Ue, rgb: et, hsl: Qe }, W = { hex: "transparent", rgb: "rgba(0, 0, 0, 0)", hsl: "hsla(0, 0%, 0%, 0)" }, de = (e) => {
  let t = e == null ? void 0 : e.match(Qt);
  if (!t)
    return [0, 0, 0, 1];
  let [, n, r, o, a = 1] = t;
  return [n, r, o, a].map(Number);
}, I = (e) => {
  if (!e)
    return;
  let t = !0;
  if (Zt.test(e)) {
    let [l, s, i, c] = de(e), [d, f, g] = x.rgb.hsl([l, s, i]) || [0, 0, 0];
    return { valid: t, value: e, keyword: x.rgb.keyword([l, s, i]), colorSpace: "rgb", rgb: e, hsl: `hsla(${d}, ${f}%, ${g}%, ${c})`, hex: `#${x.rgb.hex([l, s, i]).toLowerCase()}` };
  }
  if (en.test(e)) {
    let [l, s, i, c] = de(e), [d, f, g] = x.hsl.rgb([l, s, i]) || [0, 0, 0];
    return { valid: t, value: e, keyword: x.hsl.keyword([l, s, i]), colorSpace: "hsl", rgb: `rgba(${d}, ${f}, ${g}, ${c})`, hsl: e, hex: `#${x.hsl.hex([l, s, i]).toLowerCase()}` };
  }
  let n = e.replace("#", ""), r = x.keyword.rgb(n) || x.hex.rgb(n), o = x.rgb.hsl(r), a = e;
  if (/[^#a-f0-9]/i.test(e) ? a = n : Z.test(e) && (a = `#${n}`), a.startsWith("#"))
    t = Z.test(a);
  else
    try {
      x.keyword.hex(a);
    } catch {
      t = !1;
    }
  return { valid: t, value: a, keyword: x.rgb.keyword(r), colorSpace: "hex", rgb: `rgba(${r[0]}, ${r[1]}, ${r[2]}, 1)`, hsl: `hsla(${o[0]}, ${o[1]}%, ${o[2]}%, 1)`, hex: a };
}, rn = (e, t, n) => {
  if (!e || !(t != null && t.valid))
    return W[n];
  if (n !== "hex")
    return (t == null ? void 0 : t[n]) || W[n];
  if (!t.hex.startsWith("#"))
    try {
      return `#${x.keyword.hex(t.hex)}`;
    } catch {
      return W.hex;
    }
  let r = t.hex.match(tn);
  if (!r)
    return Z.test(t.hex) ? t.hex : W.hex;
  let [o, a, l] = r[1].split("");
  return `#${o}${o}${a}${a}${l}${l}`;
}, on = (e, t) => {
  let [n, r] = R(e || ""), [o, a] = R(() => I(n)), [l, s] = R((o == null ? void 0 : o.colorSpace) || "hex");
  S(() => {
    let f = e || "", g = I(f);
    r(f), a(g), s((g == null ? void 0 : g.colorSpace) || "hex");
  }, [e]);
  let i = ee(() => rn(n, o, l).toLowerCase(), [n, o, l]), c = H((f) => {
    let g = I(f), w = (g == null ? void 0 : g.value) || f || "";
    r(w), w === "" && (a(void 0), t(void 0)), g && (a(g), s(g.colorSpace), t(g.value));
  }, [t]), d = H(() => {
    let f = B.indexOf(l) + 1;
    f >= B.length && (f = 0), s(B[f]);
    let g = (o == null ? void 0 : o[B[f]]) || "";
    r(g), t(g);
  }, [o, l, t]);
  return { value: n, realValue: i, updateValue: c, color: o, colorSpace: l, cycleColorSpace: d };
}, K = (e) => e.replace(/\s*/, "").toLowerCase(), an = (e, t, n) => {
  let [r, o] = R(t != null && t.valid ? [t] : []);
  S(() => {
    t === void 0 && o([]);
  }, [t]);
  let a = ee(() => (e || []).map((s) => typeof s == "string" ? I(s) : s.title ? { ...I(s.color), keyword: s.title } : I(s.color)).concat(r).filter(Boolean).slice(-27), [e, r]), l = H((s) => {
    s != null && s.valid && (a.some((i) => K(i[n]) === K(s[n])) || o((i) => i.concat(s)));
  }, [n, a]);
  return { presets: a, addPreset: l };
}, ln = ({ name: e, value: t, onChange: n, onFocus: r, onBlur: o, presetColors: a, startOpen: l = !1 }) => {
  let s = H(Wt(n, 200), [n]), { value: i, realValue: c, updateValue: d, color: f, colorSpace: g, cycleColorSpace: w } = on(t, s), { presets: N, addPreset: k } = an(a, f, g), v = nn[g];
  return h.createElement(Xt, null, h.createElement(Dt, { startOpen: l, closeOnOutsideClick: !0, onVisibleChange: () => k(f), tooltip: h.createElement(Kt, null, h.createElement(v, { color: c === "transparent" ? "#000000" : c, onChange: d, onFocus: r, onBlur: o }), N.length > 0 && h.createElement(At, null, N.map((m, y) => h.createElement(ge, { key: `${m.value}-${y}`, hasChrome: !1, tooltip: h.createElement(Vt, { note: m.keyword || m.value }) }, h.createElement(he, { value: m[g], active: f && K(m[g]) === K(f[g]), onClick: () => d(m.value) }))))) }, h.createElement(he, { value: c, style: { margin: 4 } })), h.createElement(Yt, { id: Te(e), value: i, onChange: (m) => d(m.target.value), onFocus: (m) => m.target.select(), placeholder: "Choose color..." }), i ? h.createElement(Jt, { icon: "markup", onClick: w }) : null);
}, mn = ln;
export {
  ln as ColorControl,
  mn as default
};
