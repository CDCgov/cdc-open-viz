import { j as s, a as M, F as le } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { R as ie, r as E } from "./storybook-index-f2fed736.es.js";
import { t as qr, p as vo, q as Uc, e as Fc, i as Zr, T as bi, g as Jt, h as Zt, j as vi, k as Gc, y as Bc, s as Vc, l as Wc, P as la, m as ko, n as jc, o as Hc, H as qc, u as wo, v as Zc, M as Kc, w as Yc, x as Xc, z as os, d as Jc, B as Qc, D as nn, I as Ra, J as ls, K as e1, L as t1, N as n1, V as a1, O as i1, A as r1, Q as o1, G as pi, R as l1, S as ss, U as cs, W as us, X as ds, Y as Lo, Z as s1, _ as c1, C as u1 } from "./storybook-ConfigContext-54fe77a4.es.js";
import { c as It, T as K, M as ps } from "./storybook-Tooltip-7cf39805.es.js";
import { P as d1 } from "./storybook-papaparse.min-9df418d0.es.js";
import { p as Rt } from "./storybook-index-31bf6905.es.js";
import { e as p1, d as To, h as ot, g as xe, H as h1, i as Bt, a as Ia, L as hs, j as Wn, k as g1, l as An, S as ze, m as _e, n as Ue, s as ki, b as pn, o as en, p as No, q as gs, c as fs, r as Mo, M as wi, D as f1 } from "./storybook-DataTable-577422ab.es.js";
import { h as m1, g as y1, F as C1 } from "./storybook-Filters-caf19344.es.js";
import { _ as ne } from "./storybook-lodash-a4231e1c.es.js";
import { L as ji, u as ms, p as S1 } from "./storybook-useDataVizClasses-3bf30247.es.js";
import { T as b1 } from "./storybook-index-8e186da8.es.js";
import { a as qe, b as Ze, c as Ke, d as Ye, A as Xn, D as v1 } from "./storybook-DataTransform-d4bb56a2.es.js";
import { b as k1, g as w1, i as L1, a as T1 } from "./storybook-getViewport-cf99c09b.es.js";
import { c as Ge } from "./storybook-colorPalettes-bc80e395.es.js";
import { c as Eo, n as N1 } from "./storybook-index-80cf478c.es.js";
import { B as Kr } from "./storybook-Button-f953e457.es.js";
import { a as de, j as M1, k as E1, l as x1 } from "./storybook-Icon-e250778e.es.js";
import "./storybook-MultiSelect-cda00383.es.js";
import "./storybook-Loader-0256c39d.es.js";
import "./storybook-NestedDropdown-92b50717.es.js";
import { t as Jn, C as fe, M as it, d as Ie } from "./storybook-context-0403d744.es.js";
import { P as q } from "./storybook-index-43433e35.es.js";
import { A as sa } from "./storybook-Accordion-e71370da.es.js";
import { S as we, C as Li, T as ye } from "./storybook-Inputs-f2c63984.es.js";
import { E as jt, i as xo, b as P1, c as D1, d as Po, L as ys } from "./storybook-viewports-61111b6b.es.js";
import { g as A1, q as R1, s as I1, G as Qn, l as Cs } from "./storybook-linear-5c281d48.es.js";
import { u as O1 } from "./storybook-updateFieldFactory-c006040a.es.js";
import { T as Ss } from "./storybook-Text-0ce4510d.es.js";
import { g as bs, c as ca } from "./storybook-_commonjsHelpers-c5d32002.es.js";
const Do = {
  1: [1],
  2: [1, 3],
  3: [1, 3, 5],
  4: [0, 2, 4, 6],
  5: [0, 2, 4, 6, 7],
  6: [0, 2, 3, 4, 5, 7],
  7: [0, 2, 3, 4, 5, 6, 7],
  8: [0, 2, 3, 4, 5, 6, 7, 8],
  9: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}, un = (e, t, n = []) => {
  var S;
  if (!t)
    throw new Error("Config is required");
  const { legend: a, customColors: i, general: l, color: o } = t, { geoType: r, palette: g } = l, h = (a == null ? void 0 : a.specialClasses) ?? [], c = i ?? Ge[o] ?? Ge.bluegreen;
  if (r === "us-region" && c.length < 10 && c.length > 8) {
    const m = Eo(c[g.isReversed ? 0 : 8]).darken(0.75).hex();
    g.isReversed ? c.unshift(m) : c.push(m);
  }
  const d = e - h.length;
  if ((S = n[e]) != null && S.special)
    return Eo.scale(["#D4D4D4", "#939393"]).colors(h.length)[e];
  if (o.includes("qualitative"))
    return c[d];
  const u = Math.max(n.length - h.length, 1) < 10 ? Math.max(n.length - h.length, 1) : Object.keys(Do).length, f = (Do[u] ?? [])[e - h.length] ?? c[d] ?? c.at(-1);
  return c[f];
}, $1 = (e, t) => {
  let n = "";
  const a = p1[e == null ? void 0 : e.substring(0, 2)] || t || "";
  return a && (n += a), Object.keys(To).includes(e) && (n += ", " + Jn(To[e])), n;
}, Ao = (e, t) => ot({
  unified: e.legend.unified ?? !1,
  equalNumberOptIn: e.general.equalNumberOptIn ?? !1,
  specialClassesLast: e.legend.showSpecialClassesLast ?? !1,
  color: e.color,
  customColors: e.customColors,
  numberOfItems: e.legend.numberOfItems,
  type: e.legend.type,
  separateZero: e.legend.separateZero ?? !1,
  primary: e.columns.primary.name,
  categoryValuesOrder: e.legend.categoryValuesOrder,
  specialClasses: e.legend.specialClasses,
  geoType: e.general.geoType,
  data: e.data,
  filters: {
    ...e.filters
  },
  ...t
}), Wt = (e) => {
  const t = getComputedStyle(document.body);
  return e.general.geoBorderColor === "darkGray" ? t.getPropertyValue("--cool-gray-90") : t.getPropertyValue("--white");
}, Tn = (e) => getComputedStyle(document.body).getPropertyValue("--cool-gray-10"), z1 = (e, t) => {
  let n = {};
  for (let a = 0; a < e.length; a++) {
    let i = e[a][t];
    i !== void 0 && n[i] === void 0 && (n[i] = !0);
  }
  return Object.keys(n);
}, tn = (e = "", t = !1) => {
  t && console.log(`handleMapAriaLabels Testing On: ${e}`);
  try {
    if (!e.general.geoType)
      throw Error("handleMapAriaLabels: no geoType found in state");
    const {
      general: { title: n, geoType: a, statePicked: i }
    } = e;
    let l = "";
    switch (a) {
      case "world":
        l += "World map";
        break;
      case "us":
        l += "United States map";
        break;
      case "us-county":
        l += "United States county map";
        break;
      case "single-state":
        l += `${i.stateName} county map`;
        break;
      case "us-region":
        l += "United States HHS Region map";
        break;
      default:
        l = "Data visualization container";
        break;
    }
    return n && (l += ` with the title: ${n}`), l;
  } catch (n) {
    console.error("COVE: ", n.message);
  }
}, _1 = (e, t, n) => {
  const { general: a, runtime: i, table: l } = e, o = (i == null ? void 0 : i.editorErrorMessage.length) === 0 && l.forceDisplay === !0 && a.type !== "navigation" && t === !1;
  let r;
  return a.showSidebar && (r = n), o && !a.showSidebar && (r = `dataTableSection__${Date.now()}`), e.general.type === "navigation" && (r = `dropdown-${Date.now()}`), r || "!";
}, U1 = (e, t) => {
  for (let n = 0; n < e.length; n++)
    if (t === e[n])
      return n;
  return -1;
}, Oa = (e, t, n) => {
  if (n) {
    n(t);
    return;
  }
  if (typeof t != "string" || t.trim().length === 0)
    throw Error("Invalid or blank URL. Navigation aborted.");
  const a = new URL(t, window.location.origin);
  window.open(a.toString(), e);
}, F1 = (e, t) => {
  const n = ne.cloneDeep(e);
  n.items.forEach((a) => {
    delete a.disabled;
  }), n.disabledAmt = 0, n.runtimeDataHash = e.runtimeDataHash, t(n);
}, Ti = (e) => {
  e.items.forEach((t, n) => {
    t.bin = n;
  });
}, Ro = (e, t) => {
  if (t.showSpecialClassesLast) {
    const n = e.items.filter((i) => i.special === !0), a = e.items.filter((i) => !i.special);
    e.items = [...a, ...n];
  }
}, G1 = (e, t) => {
  var i;
  const { general: n } = e;
  let a = [
    "map-container",
    (i = e.legend) == null ? void 0 : i.position,
    e.general.type,
    e.general.geoType,
    "outline-none",
    "position-relative"
  ];
  return t && a.push("modal-background"), n.type === "navigation" && n.fullBorder === !0 && a.push("full-border"), a;
};
var B1 = 0.8908130915292852, vs = Math.sin(vo / 10) / Math.sin(7 * vo / 10), V1 = Math.sin(qr / 10) * vs, W1 = -Math.cos(qr / 10) * vs;
const j1 = {
  draw: function(e, t) {
    var n = Math.sqrt(t * B1), a = V1 * n, i = W1 * n;
    e.moveTo(0, -n), e.lineTo(a, i);
    for (var l = 1; l < 5; ++l) {
      var o = qr * l / 5, r = Math.cos(o), g = Math.sin(o);
      e.lineTo(g * n, -r * n), e.lineTo(r * a - g * i, g * a + r * i);
    }
    e.closePath();
  }
};
var H1 = 1e-12;
function Io(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function q1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Z1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const K1 = function e(t, n, a) {
  function i(l, o) {
    var r = l[0], g = l[1], h = l[2], c = o[0], d = o[1], u = o[2], p = c - r, f = d - g, S = p * p + f * f, m, y;
    if (S < H1)
      y = Math.log(u / h) / t, m = function(x) {
        return [
          r + x * p,
          g + x * f,
          h * Math.exp(t * x * y)
        ];
      };
    else {
      var v = Math.sqrt(S), C = (u * u - h * h + a * S) / (2 * h * n * v), w = (u * u - h * h - a * S) / (2 * u * n * v), N = Math.log(Math.sqrt(C * C + 1) - C), P = Math.log(Math.sqrt(w * w + 1) - w);
      y = (P - N) / t, m = function(x) {
        var _ = x * y, z = Io(N), F = h / (n * v) * (z * Z1(t * _ + N) - q1(N));
        return [
          r + F * p,
          g + F * f,
          h * z / Io(t * _ + N)
        ];
      };
    }
    return m.duration = y * 1e3 * t / Math.SQRT2, m;
  }
  return i.rho = function(l) {
    var o = Math.max(1e-3, +l), r = o * o, g = r * r;
    return e(o, r, g);
  }, i;
}(Math.SQRT2, 2, 4);
function ks() {
  var e = [], t = [], n = [], a;
  function i() {
    var o = 0, r = Math.max(1, t.length);
    for (n = new Array(r - 1); ++o < r; )
      n[o - 1] = Uc(e, o / r);
    return l;
  }
  function l(o) {
    return o == null || isNaN(o = +o) ? a : t[I1(n, o)];
  }
  return l.invertExtent = function(o) {
    var r = t.indexOf(o);
    return r < 0 ? [NaN, NaN] : [
      r > 0 ? n[r - 1] : e[0],
      r < n.length ? n[r] : e[e.length - 1]
    ];
  }, l.domain = function(o) {
    if (!arguments.length)
      return e.slice();
    e = [];
    for (let r of o)
      r != null && !isNaN(r = +r) && e.push(r);
    return e.sort(A1), i();
  }, l.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, l.unknown = function(o) {
    return arguments.length ? (a = o, l) : a;
  }, l.quantiles = function() {
    return n.slice();
  }, l.copy = function() {
    return ks().domain(e).range(t).unknown(a);
  }, R1.apply(l, arguments);
}
const ua = (e) => () => e;
function Y1(e, {
  sourceEvent: t,
  target: n,
  transform: a,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: a, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function Ni(e) {
  e.stopImmediatePropagation();
}
function En(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function X1(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function J1() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Oo() {
  return this.__zoom || Zr;
}
function Q1(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function e0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function t0(e, t, n) {
  var a = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], l = e.invertY(t[0][1]) - n[0][1], o = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i),
    o > l ? (l + o) / 2 : Math.min(0, l) || Math.max(0, o)
  );
}
function n0() {
  var e = X1, t = J1, n = t0, a = Q1, i = e0, l = [0, 1 / 0], o = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], r = 250, g = K1, h = Fc("start", "zoom", "end"), c, d, u, p = 500, f = 150, S = 0, m = 10;
  function y(k) {
    k.property("__zoom", Oo).on("wheel.zoom", _, { passive: !1 }).on("mousedown.zoom", z).on("dblclick.zoom", F).filter(i).on("touchstart.zoom", I).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", U).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  y.transform = function(k, b, T, D) {
    var A = k.selection ? k.selection() : k;
    A.property("__zoom", Oo), k !== A ? N(k, b, T, D) : A.interrupt().each(function() {
      P(this, arguments).event(D).start().zoom(null, typeof b == "function" ? b.apply(this, arguments) : b).end();
    });
  }, y.scaleBy = function(k, b, T, D) {
    y.scaleTo(k, function() {
      var A = this.__zoom.k, $ = typeof b == "function" ? b.apply(this, arguments) : b;
      return A * $;
    }, T, D);
  }, y.scaleTo = function(k, b, T, D) {
    y.transform(k, function() {
      var A = t.apply(this, arguments), $ = this.__zoom, V = T == null ? w(A) : typeof T == "function" ? T.apply(this, arguments) : T, B = $.invert(V), G = typeof b == "function" ? b.apply(this, arguments) : b;
      return n(C(v($, G), V, B), A, o);
    }, T, D);
  }, y.translateBy = function(k, b, T, D) {
    y.transform(k, function() {
      return n(this.__zoom.translate(
        typeof b == "function" ? b.apply(this, arguments) : b,
        typeof T == "function" ? T.apply(this, arguments) : T
      ), t.apply(this, arguments), o);
    }, null, D);
  }, y.translateTo = function(k, b, T, D, A) {
    y.transform(k, function() {
      var $ = t.apply(this, arguments), V = this.__zoom, B = D == null ? w($) : typeof D == "function" ? D.apply(this, arguments) : D;
      return n(Zr.translate(B[0], B[1]).scale(V.k).translate(
        typeof b == "function" ? -b.apply(this, arguments) : -b,
        typeof T == "function" ? -T.apply(this, arguments) : -T
      ), $, o);
    }, D, A);
  };
  function v(k, b) {
    return b = Math.max(l[0], Math.min(l[1], b)), b === k.k ? k : new bi(b, k.x, k.y);
  }
  function C(k, b, T) {
    var D = b[0] - T[0] * k.k, A = b[1] - T[1] * k.k;
    return D === k.x && A === k.y ? k : new bi(k.k, D, A);
  }
  function w(k) {
    return [(+k[0][0] + +k[1][0]) / 2, (+k[0][1] + +k[1][1]) / 2];
  }
  function N(k, b, T, D) {
    k.on("start.zoom", function() {
      P(this, arguments).event(D).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(D).end();
    }).tween("zoom", function() {
      var A = this, $ = arguments, V = P(A, $).event(D), B = t.apply(A, $), G = T == null ? w(B) : typeof T == "function" ? T.apply(A, $) : T, W = Math.max(B[1][0] - B[0][0], B[1][1] - B[0][1]), H = A.__zoom, Z = typeof b == "function" ? b.apply(A, $) : b, X = g(H.invert(G).concat(W / H.k), Z.invert(G).concat(W / Z.k));
      return function(J) {
        if (J === 1)
          J = Z;
        else {
          var ee = X(J), re = W / ee[2];
          J = new bi(re, G[0] - ee[0] * re, G[1] - ee[1] * re);
        }
        V.zoom(null, J);
      };
    });
  }
  function P(k, b, T) {
    return !T && k.__zooming || new x(k, b);
  }
  function x(k, b) {
    this.that = k, this.args = b, this.active = 0, this.sourceEvent = null, this.extent = t.apply(k, b), this.taps = 0;
  }
  x.prototype = {
    event: function(k) {
      return k && (this.sourceEvent = k), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(k, b) {
      return this.mouse && k !== "mouse" && (this.mouse[1] = b.invert(this.mouse[0])), this.touch0 && k !== "touch" && (this.touch0[1] = b.invert(this.touch0[0])), this.touch1 && k !== "touch" && (this.touch1[1] = b.invert(this.touch1[0])), this.that.__zoom = b, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(k) {
      var b = Jt(this.that).datum();
      h.call(
        k,
        this.that,
        new Y1(k, {
          sourceEvent: this.sourceEvent,
          target: y,
          type: k,
          transform: this.that.__zoom,
          dispatch: h
        }),
        b
      );
    }
  };
  function _(k, ...b) {
    if (!e.apply(this, arguments))
      return;
    var T = P(this, b).event(k), D = this.__zoom, A = Math.max(l[0], Math.min(l[1], D.k * Math.pow(2, a.apply(this, arguments)))), $ = Zt(k);
    if (T.wheel)
      (T.mouse[0][0] !== $[0] || T.mouse[0][1] !== $[1]) && (T.mouse[1] = D.invert(T.mouse[0] = $)), clearTimeout(T.wheel);
    else {
      if (D.k === A)
        return;
      T.mouse = [$, D.invert($)], vi(this), T.start();
    }
    En(k), T.wheel = setTimeout(V, f), T.zoom("mouse", n(C(v(D, A), T.mouse[0], T.mouse[1]), T.extent, o));
    function V() {
      T.wheel = null, T.end();
    }
  }
  function z(k, ...b) {
    if (u || !e.apply(this, arguments))
      return;
    var T = k.currentTarget, D = P(this, b, !0).event(k), A = Jt(k.view).on("mousemove.zoom", G, !0).on("mouseup.zoom", W, !0), $ = Zt(k, T), V = k.clientX, B = k.clientY;
    Gc(k.view), Ni(k), D.mouse = [$, this.__zoom.invert($)], vi(this), D.start();
    function G(H) {
      if (En(H), !D.moved) {
        var Z = H.clientX - V, X = H.clientY - B;
        D.moved = Z * Z + X * X > S;
      }
      D.event(H).zoom("mouse", n(C(D.that.__zoom, D.mouse[0] = Zt(H, T), D.mouse[1]), D.extent, o));
    }
    function W(H) {
      A.on("mousemove.zoom mouseup.zoom", null), Bc(H.view, D.moved), En(H), D.event(H).end();
    }
  }
  function F(k, ...b) {
    if (e.apply(this, arguments)) {
      var T = this.__zoom, D = Zt(k.changedTouches ? k.changedTouches[0] : k, this), A = T.invert(D), $ = T.k * (k.shiftKey ? 0.5 : 2), V = n(C(v(T, $), D, A), t.apply(this, b), o);
      En(k), r > 0 ? Jt(this).transition().duration(r).call(N, V, D, k) : Jt(this).call(y.transform, V, D, k);
    }
  }
  function I(k, ...b) {
    if (e.apply(this, arguments)) {
      var T = k.touches, D = T.length, A = P(this, b, k.changedTouches.length === D).event(k), $, V, B, G;
      for (Ni(k), V = 0; V < D; ++V)
        B = T[V], G = Zt(B, this), G = [G, this.__zoom.invert(G), B.identifier], A.touch0 ? !A.touch1 && A.touch0[2] !== G[2] && (A.touch1 = G, A.taps = 0) : (A.touch0 = G, $ = !0, A.taps = 1 + !!c);
      c && (c = clearTimeout(c)), $ && (A.taps < 2 && (d = G[0], c = setTimeout(function() {
        c = null;
      }, p)), vi(this), A.start());
    }
  }
  function O(k, ...b) {
    if (this.__zooming) {
      var T = P(this, b).event(k), D = k.changedTouches, A = D.length, $, V, B, G;
      for (En(k), $ = 0; $ < A; ++$)
        V = D[$], B = Zt(V, this), T.touch0 && T.touch0[2] === V.identifier ? T.touch0[0] = B : T.touch1 && T.touch1[2] === V.identifier && (T.touch1[0] = B);
      if (V = T.that.__zoom, T.touch1) {
        var W = T.touch0[0], H = T.touch0[1], Z = T.touch1[0], X = T.touch1[1], J = (J = Z[0] - W[0]) * J + (J = Z[1] - W[1]) * J, ee = (ee = X[0] - H[0]) * ee + (ee = X[1] - H[1]) * ee;
        V = v(V, Math.sqrt(J / ee)), B = [(W[0] + Z[0]) / 2, (W[1] + Z[1]) / 2], G = [(H[0] + X[0]) / 2, (H[1] + X[1]) / 2];
      } else if (T.touch0)
        B = T.touch0[0], G = T.touch0[1];
      else
        return;
      T.zoom("touch", n(C(V, B, G), T.extent, o));
    }
  }
  function U(k, ...b) {
    if (this.__zooming) {
      var T = P(this, b).event(k), D = k.changedTouches, A = D.length, $, V;
      for (Ni(k), u && clearTimeout(u), u = setTimeout(function() {
        u = null;
      }, p), $ = 0; $ < A; ++$)
        V = D[$], T.touch0 && T.touch0[2] === V.identifier ? delete T.touch0 : T.touch1 && T.touch1[2] === V.identifier && delete T.touch1;
      if (T.touch1 && !T.touch0 && (T.touch0 = T.touch1, delete T.touch1), T.touch0)
        T.touch0[1] = this.__zoom.invert(T.touch0[0]);
      else if (T.end(), T.taps === 2 && (V = Zt(V, this), Math.hypot(d[0] - V[0], d[1] - V[1]) < m)) {
        var B = Jt(this).on("dblclick.zoom");
        B && B.apply(this, arguments);
      }
    }
  }
  return y.wheelDelta = function(k) {
    return arguments.length ? (a = typeof k == "function" ? k : ua(+k), y) : a;
  }, y.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : ua(!!k), y) : e;
  }, y.touchable = function(k) {
    return arguments.length ? (i = typeof k == "function" ? k : ua(!!k), y) : i;
  }, y.extent = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : ua([[+k[0][0], +k[0][1]], [+k[1][0], +k[1][1]]]), y) : t;
  }, y.scaleExtent = function(k) {
    return arguments.length ? (l[0] = +k[0], l[1] = +k[1], y) : [l[0], l[1]];
  }, y.translateExtent = function(k) {
    return arguments.length ? (o[0][0] = +k[0][0], o[1][0] = +k[1][0], o[0][1] = +k[0][1], o[1][1] = +k[1][1], y) : [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
  }, y.constrain = function(k) {
    return arguments.length ? (n = k, y) : n;
  }, y.duration = function(k) {
    return arguments.length ? (r = +k, y) : r;
  }, y.interpolate = function(k) {
    return arguments.length ? (g = k, y) : g;
  }, y.on = function() {
    var k = h.on.apply(h, arguments);
    return k === h ? y : k;
  }, y.clickDistance = function(k) {
    return arguments.length ? (S = (k = +k) * k, y) : Math.sqrt(S);
  }, y.tapDistance = function(k) {
    return arguments.length ? (m = +k, y) : m;
  }, y;
}
var a0 = ["children", "className", "top", "left", "size"];
function Hi() {
  return Hi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Hi.apply(this, arguments);
}
function i0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Yr(e) {
  var t = e.children, n = e.className, a = e.top, i = e.left, l = e.size, o = i0(e, a0), r = Vc();
  return r.type(j1), (typeof l == "number" || l) && r.size(l), t ? /* @__PURE__ */ ie.createElement(ie.Fragment, null, t({
    path: r
  })) : /* @__PURE__ */ ie.createElement(Wc, {
    top: a,
    left: i
  }, /* @__PURE__ */ ie.createElement("path", Hi({
    className: It("visx-glyph-star", n),
    d: r() || ""
  }, o)));
}
Yr.propTypes = {
  children: q.func,
  className: q.string,
  top: q.number,
  left: q.number,
  size: q.oneOfType([q.number, q.func])
};
var r0 = function e(t, n) {
  if (t === n)
    return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor)
      return !1;
    var a, i, l;
    if (Array.isArray(t)) {
      if (a = t.length, a != n.length)
        return !1;
      for (i = a; i-- !== 0; )
        if (!e(t[i], n[i]))
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === n.toString();
    if (l = Object.keys(t), a = l.length, a !== Object.keys(n).length)
      return !1;
    for (i = a; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, l[i]))
        return !1;
    for (i = a; i-- !== 0; ) {
      var o = l[i];
      if (!e(t[o], n[o]))
        return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const $o = /* @__PURE__ */ bs(r0);
const o0 = {
  position: "relative",
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gridArea: "content"
}, l0 = ({ requiredColumns: e, className: t }) => /* @__PURE__ */ s("section", { className: t, style: o0, children: /* @__PURE__ */ M("section", { className: "waiting-container", children: [
  /* @__PURE__ */ s("h3", { children: "Configuration Required" }),
  /* @__PURE__ */ M("p", { children: [
    "Set",
    " ",
    e.map((n, a) => /* @__PURE__ */ M("span", { children: [
      /* @__PURE__ */ s("strong", { children: n }),
      a + 1 < e.length && ", "
    ] }, `missing-column-${a}`)),
    " ",
    "columns in editor."
  ] })
] }) });
const s0 = (e, t, n) => {
  if (typeof e > "u" || e.filters === void 0 || e.filters.length === 0)
    return [];
  const a = e == null ? void 0 : e.filters.map(
    ({
      columnName: i,
      label: l,
      labels: o,
      queryParameter: r,
      orderedValues: g,
      active: h,
      values: c,
      type: d,
      showDropdown: u,
      setByQueryParameter: p,
      order: f
    }, S) => {
      var v;
      const m = n[S] || {}, y = (C, w) => {
        const N = f !== "desc";
        return String(N ? C : w).localeCompare(String(N ? w : C), "en", { numeric: !0 });
      };
      return d !== "url" && (c = z1(e.data, i), e.filters[S].order === "cust" ? ((v = e.filters[S]) == null ? void 0 : v.values.length) > 0 && (c = e.filters[S].values) : c = c.sort(y)), m.order = e.filters[S].order ? e.filters[S].order : "asc", m.type = d, m.label = l ?? "", m.columnName = i, m.orderedValues = g, m.queryParameter = r, m.labels = o, m.values = c, m.setByQueryParameter = p, m1(m), m.active = h ?? c[0], m.filterStyle = e.filters[S].filterStyle ? e.filters[S].filterStyle : "dropdown", m.showDropdown = u, m.subGrouping = e.filters[S].subGrouping, m;
    }
  );
  return t && (a.fromHash = t), a;
};
function c0(e) {
  var t = E.useState(e), n = t[0], a = t[1], i = E.useRef(null), l = E.useCallback(function(o, r) {
    i.current = r || null, a(o);
  }, [a]);
  return E.useLayoutEffect(function() {
    i.current && (i.current(n), i.current = null);
  }, [n]), [n, l];
}
function zo(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function u0(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = d0(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var a = 0;
    return function() {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d0(e, t) {
  if (e) {
    if (typeof e == "string")
      return _o(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _o(e, t);
  }
}
function _o(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function p0(e, t) {
  for (var n = e, a = 1 / 0, i = u0(t), l; !(l = i()).done; ) {
    var o = l.value, r = Math.sqrt(Math.pow(o.x - e.x, 2) + Math.pow(o.y - e.y, 2));
    r < a && (a = r, n = {
      x: o.x,
      y: o.y
    });
  }
  return n;
}
function Uo(e, t, n) {
  var a, i, l, o;
  return n === void 0 && (n = {}), t.length > 0 ? p0(e, t) : {
    x: zo(e.x, (a = n.xMin) != null ? a : -1 / 0, (i = n.xMax) != null ? i : 1 / 0),
    y: zo(e.y, (l = n.yMin) != null ? l : -1 / 0, (o = n.yMax) != null ? o : 1 / 0)
  };
}
function h0(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var a = [], i = e.getTotalLength(), l = 0; l <= i; l += n) {
    var o = e.getPointAtLength(l), r = o.matrixTransform(t);
    a.push(r);
  }
  return a;
}
function g0(e) {
  var t = E.useMemo(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return h0(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
function vt() {
  return vt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, vt.apply(this, arguments);
}
function f0(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, a = n === void 0 ? !1 : n, i = t.snapToPointer, l = i === void 0 ? !0 : i, o = t.onDragEnd, r = t.onDragMove, g = t.onDragStart, h = t.x, c = t.y, d = t.dx, u = t.dy, p = t.isDragging, f = t.restrict, S = f === void 0 ? {} : f, m = t.restrictToPath, y = E.useRef({
    x: h,
    y: c,
    dx: d,
    dy: u
  }), v = c0({
    x: h,
    y: c,
    dx: d ?? 0,
    dy: u ?? 0,
    isDragging: !1
  }), C = v[0], w = v[1], N = E.useState(new la({
    x: 0,
    y: 0
  })), P = N[0], x = N[1];
  E.useEffect(function() {
    (y.current.x !== h || y.current.y !== c || y.current.dx !== d || y.current.dy !== u) && (y.current = {
      x: h,
      y: c,
      dx: d,
      dy: u
    }, w(function(O) {
      return vt({}, O, {
        x: h,
        y: c,
        dx: d ?? 0,
        dy: u ?? 0
      });
    }));
  }), E.useEffect(function() {
    p !== void 0 && C.isDragging !== p && w(function(O) {
      return vt({}, O, {
        isDragging: p
      });
    });
  }, [C.isDragging, p, w]);
  var _ = g0(m), z = E.useCallback(function(O) {
    O.persist(), w(function(U) {
      var k = U.x, b = k === void 0 ? 0 : k, T = U.y, D = T === void 0 ? 0 : T, A = U.dx, $ = U.dy, V = new la({
        x: (b || 0) + A,
        y: (D || 0) + $
      }), B = ko(O) || new la({
        x: 0,
        y: 0
      }), G = l ? B : V, W = Uo(G, _, S);
      return x(jc(V, B)), {
        isDragging: !0,
        dx: a ? 0 : U.dx,
        dy: a ? 0 : U.dy,
        x: a ? W.x : W.x - U.dx,
        y: a ? W.y : W.y - U.dy
      };
    }, g && function(U) {
      g(vt({}, U, {
        event: O
      }));
    });
  }, [g, a, S, _, w, l]), F = E.useCallback(function(O) {
    O.persist(), w(function(U) {
      if (!U.isDragging)
        return U;
      var k = U.x, b = k === void 0 ? 0 : k, T = U.y, D = T === void 0 ? 0 : T, A = ko(O) || new la({
        x: 0,
        y: 0
      }), $ = l ? A : Hc(A, P), V = Uo($, _, S);
      return vt({}, U, {
        dx: V.x - b,
        dy: V.y - D
      });
    }, r && function(U) {
      U.isDragging && r(vt({}, U, {
        event: O
      }));
    });
  }, [w, r, l, P, _, S]), I = E.useCallback(function(O) {
    O.persist(), w(function(U) {
      return vt({}, U, {
        isDragging: !1
      });
    }, o && function(U) {
      o(vt({}, U, {
        event: O
      }));
    });
  }, [o, w]);
  return vt({}, C, {
    dragEnd: I,
    dragMove: F,
    dragStart: z
  });
}
function ws(e) {
  var t = e.captureDragArea, n = t === void 0 ? !0 : t, a = e.snapToPointer, i = a === void 0 ? !0 : a, l = e.children, o = e.dx, r = e.dy, g = e.height, h = e.onDragEnd, c = e.onDragMove, d = e.onDragStart, u = e.resetOnStart, p = e.width, f = e.x, S = e.y, m = e.isDragging, y = e.restrict, v = e.restrictToPath, C = f0({
    resetOnStart: u,
    snapToPointer: i,
    onDragEnd: h,
    onDragMove: c,
    onDragStart: d,
    x: f,
    y: S,
    dx: o,
    dy: r,
    isDragging: m,
    restrict: y,
    restrictToPath: v
  });
  return /* @__PURE__ */ ie.createElement(ie.Fragment, null, C.isDragging && n && /* @__PURE__ */ ie.createElement("rect", {
    width: p,
    height: g,
    onPointerDown: C.dragStart,
    onPointerMove: C.dragMove,
    onPointerUp: C.dragEnd,
    fill: "transparent"
  }), l(C));
}
ws.propTypes = {
  children: q.func.isRequired,
  width: q.number.isRequired,
  height: q.number.isRequired,
  captureDragArea: q.bool,
  isDragging: q.bool
};
function m0(e, t) {
  var n = [].concat(e), a = n.length - 1, i = n.splice(t, 1), l = i[0];
  return n.splice(a, 0, l), n;
}
const y0 = ({ onDragStateChange: e }) => {
  const [t, n] = E.useState([]), {
    config: a,
    setConfig: i,
    isDraggingAnnotation: l,
    isEditor: o,
    dimensions: r
  } = E.useContext(fe), [g, h] = r, { annotations: c } = a, d = o ? Yc : Xc;
  return c && c.map((u, p) => {
    const { marker: f, x: S, y: m, dx: y, dy: v, edit: C, connectionType: w } = u;
    return /* @__PURE__ */ s(le, { children: /* @__PURE__ */ s(
      ws,
      {
        width: g,
        height: h,
        x: S,
        y: m,
        onDragStart: () => {
          n(m0(c, p));
        },
        children: ({ dragStart: N, dragEnd: P, dragMove: x }) => /* @__PURE__ */ s(le, { children: /* @__PURE__ */ M(
          d,
          {
            dx: y,
            dy: v,
            x: S,
            y: m,
            canEditLabel: C.label || !1,
            canEditSubject: C.subject || !1,
            labelDragHandleProps: { r: 15, stroke: l ? "red" : "var(--primary)" },
            subjectDragHandleProps: { r: 15, stroke: l ? "red" : "var(--primary)" },
            onDragEnd: (_) => {
              e(!1);
              const z = c.map((F, I) => I === p ? {
                ...F,
                x: _.x,
                y: _.y,
                dx: _.dx,
                dy: _.dy
              } : F);
              i({
                ...a,
                annotations: z
              });
            },
            onMouseMove: x,
            onMouseUp: P,
            onMouseDown: N,
            onTouchStart: N,
            onTouchMove: x,
            onTouchEnd: P,
            anchorPosition: "auto",
            onDragStart: () => {
              e(!0);
            },
            children: [
              /* @__PURE__ */ s(qc, { className: "", showAnchorLine: !1, children: /* @__PURE__ */ s(
                "div",
                {
                  style: {
                    padding: "10px",
                    borderRadius: 5,
                    // Optional: set border radius
                    backgroundColor: `rgba(255, 255, 255, ${u != null && u.opacity ? Number(u == null ? void 0 : u.opacity) / 100 : 1})`
                  },
                  role: "presentation",
                  tabIndex: 0,
                  "aria-label": `Annotation text that reads: ${u.text}`,
                  dangerouslySetInnerHTML: { __html: u.text }
                }
              ) }),
              w === "line" && /* @__PURE__ */ s(wo, { type: "line", pathProps: { markerStart: "url(#marker-start)" } }),
              w === "elbow" && /* @__PURE__ */ s(wo, { type: "elbow", pathProps: { markerStart: "url(#marker-start)" } }),
              f === "circle" && /* @__PURE__ */ s(Zc, { className: "circle-subject", stroke: "black", radius: 8 }),
              f === "arrow" && /* @__PURE__ */ s(
                Kc,
                {
                  fill: "black",
                  id: "marker-start",
                  x: S,
                  y: v,
                  stroke: "#333",
                  markerWidth: 10,
                  size: 10,
                  strokeWidth: 1,
                  orient: "auto-start-reverse"
                }
              )
            ]
          }
        ) })
      },
      `annotation--${p}`
    ) });
  });
};
const Ls = ({ useBootstrapVisibilityClasses: e = !0 }) => {
  const { state: t } = E.useContext(fe), n = t.annotations || [], a = () => {
    const l = ["annotation-list"];
    return e && l.push("d-block", "d-md-none"), l.join(" ");
  }, i = n.map((l, o) => {
    const r = l.text || "", g = () => ({
      __html: os.sanitize(r)
    });
    return /* @__PURE__ */ s("li", { children: /* @__PURE__ */ M("div", { className: "annotation__title-wrapper", children: [
      /* @__PURE__ */ s("div", { className: "annotation__title-circle", children: o + 1 }),
      /* @__PURE__ */ s("p", { className: "annotation__subtext", dangerouslySetInnerHTML: g() })
    ] }) }, "annotation-li-item__annotationIndex");
  });
  return /* @__PURE__ */ s("ul", { className: a(), children: i });
}, C0 = () => {
  var g;
  const { config: e, currentViewport: t } = E.useContext(fe), [n, a] = E.useState(!1), i = ["sm", "xs", "xxs"].includes(t) ? "13px" : `${Jc}px`, l = {
    maxHeight: e.table.limitHeight && `${e.table.height}px`,
    OverflowY: "scroll"
  }, o = () => {
    const h = ["data-table-heading", "annotation__dropdown-list", "p-3"];
    return n || h.push("collapsed"), h.join(" ");
  };
  return /* @__PURE__ */ s(le, { children: /* @__PURE__ */ M("section", { className: (() => {
    const h = ["data-table-container", t, "d-block", "d-lg-none"];
    return e.general.showAnnotationDropdown && (h.push("d-lg-block"), h.splice(h.indexOf("d-lg-none"), 1)), h.join(" ");
  })(), children: [
    /* @__PURE__ */ M(
      "div",
      {
        style: { fontSize: i },
        role: "button",
        className: o(),
        onClick: () => {
          a(!n);
        },
        tabIndex: 0,
        onKeyDown: (h) => {
          h.key === "Enter" && a(!n);
        },
        children: [
          /* @__PURE__ */ s(de, { display: n ? "minus" : "plus", base: !0 }),
          e.general.annotationDropdownText === "" ? "Annotations" : (g = e == null ? void 0 : e.general) == null ? void 0 : g.annotationDropdownText
        ]
      }
    ),
    n && /* @__PURE__ */ s("div", { className: "table-container annotation-dropdown__panel", style: l, children: /* @__PURE__ */ s(Ls, { useBootstrapVisibilityClasses: !1 }) })
  ] }) });
}, ea = {
  Draggable: y0,
  Dropdown: C0,
  List: Ls
};
function S0(e, t, n) {
  var a = this, i = E.useRef(null), l = E.useRef(0), o = E.useRef(null), r = E.useRef([]), g = E.useRef(), h = E.useRef(), c = E.useRef(e), d = E.useRef(!0);
  c.current = e;
  var u = !t && t !== 0 && typeof window < "u";
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  t = +t || 0, n = n || {};
  var p = !!n.leading, f = "trailing" in n ? !!n.trailing : !0, S = "maxWait" in n, m = S ? Math.max(+n.maxWait || 0, t) : null, y = E.useCallback(function(I) {
    var O = r.current, U = g.current;
    return r.current = g.current = null, l.current = I, h.current = c.current.apply(U, O);
  }, []), v = E.useCallback(function(I, O) {
    u && cancelAnimationFrame(o.current), o.current = u ? requestAnimationFrame(I) : setTimeout(I, O);
  }, [u]), C = E.useCallback(function(I) {
    if (!d.current)
      return !1;
    var O = I - i.current, U = I - l.current;
    return !i.current || O >= t || O < 0 || S && U >= m;
  }, [m, S, t]), w = E.useCallback(function(I) {
    return o.current = null, f && r.current ? y(I) : (r.current = g.current = null, h.current);
  }, [y, f]), N = E.useCallback(function() {
    var I = Date.now();
    if (C(I))
      return w(I);
    if (d.current) {
      var O = I - i.current, U = I - l.current, k = t - O, b = S ? Math.min(k, m - U) : k;
      v(N, b);
    }
  }, [m, S, C, v, w, t]), P = E.useCallback(function() {
    o.current && (u ? cancelAnimationFrame(o.current) : clearTimeout(o.current)), l.current = 0, r.current = i.current = g.current = o.current = null;
  }, [u]), x = E.useCallback(function() {
    return o.current ? w(Date.now()) : h.current;
  }, [w]);
  E.useEffect(function() {
    return d.current = !0, function() {
      d.current = !1;
    };
  }, []);
  var _ = E.useCallback(function() {
    for (var I = [], O = 0; O < arguments.length; O++)
      I[O] = arguments[O];
    var U = Date.now(), k = C(U);
    if (r.current = I, g.current = a, i.current = U, k) {
      if (!o.current && d.current)
        return l.current = i.current, v(N, t), p ? y(i.current) : h.current;
      if (S)
        return v(N, t), y(i.current);
    }
    return o.current || v(N, t), h.current;
  }, [y, p, S, C, v, N, t]), z = E.useCallback(function() {
    return !!o.current;
  }, []), F = E.useMemo(function() {
    return {
      callback: _,
      cancel: P,
      flush: x,
      pending: z
    };
  }, [_, P, x, z]);
  return F;
}
function b0(e, t) {
  return e === t;
}
function Fo(e) {
  return typeof e == "function" ? function() {
    return e;
  } : e;
}
function v0(e) {
  var t = E.useState(Fo(e)), n = t[0], a = t[1], i = E.useCallback(function(l) {
    return a(Fo(l));
  }, []);
  return [n, i];
}
function k0(e, t, n) {
  var a = n && n.equalityFn || b0, i = v0(e), l = i[0], o = i[1], r = S0(E.useCallback(function(h) {
    return o(h);
  }, [o]), t, n), g = E.useRef(e);
  return E.useEffect(function() {
    a(g.current, e) || (r.callback(e), g.current = e);
  }, [e, r, a]), [l, { cancel: r.cancel, pending: r.pending, flush: r.flush }];
}
const w0 = (e) => {
  var g, h, c;
  const { config: t, setConfig: n, dimensions: a, isDraggingAnnotation: i } = E.useContext(fe), l = (d, u, p) => {
    const f = [...t == null ? void 0 : t.annotations];
    f[p][u] = d, f[p].savedDimensions = [a[0] * 0.73, a[1]], n({
      ...t,
      annotations: f
    });
  }, o = () => {
    var S;
    const d = (S = document.querySelector(".map-container > section > svg, .map-container > section > canvas")) == null ? void 0 : S.getBoundingClientRect(), u = [d.width, d.height], p = {
      text: "New Annotation",
      snapToNearestPoint: !1,
      fontSize: 16,
      show: {
        desktop: !0,
        tablet: !0,
        mobile: !0
      },
      markerType: "arrow",
      connectorType: "line",
      colors: {
        label: "black",
        connector: "black",
        marker: "black"
      },
      selected: !0,
      anchor: {
        vertical: !1,
        horizontal: !1
      },
      connectionType: "line",
      marker: "arrow",
      edit: {
        subject: !0,
        label: !0
      },
      seriesKey: "",
      x: Number(u == null ? void 0 : u[0]) / 2,
      y: Number((u == null ? void 0 : u[1]) / 2),
      xKey: null,
      yKey: null,
      dx: 0,
      dy: 0,
      opacity: "100",
      savedDimensions: [a[0] * 0.73, a[1]]
    }, f = Array.isArray(t.annotations) ? t.annotations : [];
    n({
      ...t,
      annotations: [...f, p]
    });
  }, r = (d) => {
    const u = t.annotations.filter((p, f) => f !== d);
    n({
      ...t,
      annotations: u
    });
  };
  return /* @__PURE__ */ s(sa, { children: /* @__PURE__ */ M(sa.Section, { title: e.name, children: [
    /* @__PURE__ */ M("label", { children: [
      "Show Annotation Dropdown",
      /* @__PURE__ */ s(
        "input",
        {
          type: "checkbox",
          checked: (g = t == null ? void 0 : t.general) == null ? void 0 : g.showAnnotationDropdown,
          onClick: (d) => {
            n({
              ...t,
              general: {
                ...t.general,
                showAnnotationDropdown: d.target.checked
              }
            });
          }
        }
      )
    ] }),
    /* @__PURE__ */ M("label", { children: [
      "Annotation Dropdown Title:",
      /* @__PURE__ */ s(
        "input",
        {
          type: "text",
          style: { marginBottom: "10px" },
          value: (h = t == null ? void 0 : t.general) == null ? void 0 : h.annotationDropdownText,
          onChange: (d) => {
            n({
              ...t,
              general: {
                ...t.general,
                annotationDropdownText: d.target.value
              }
            });
          }
        }
      )
    ] }),
    (t == null ? void 0 : t.annotations) && (t == null ? void 0 : t.annotations.map((d, u) => {
      var p, f, S, m, y, v, C, w, N;
      return /* @__PURE__ */ s(sa, { children: /* @__PURE__ */ s(
        sa.Section,
        {
          title: d.text ? d.text.substring(0, 15) + "..." : `Annotation ${u + 1}`,
          children: /* @__PURE__ */ M("div", { className: "annotation-group", children: [
            /* @__PURE__ */ M("label", { children: [
              "Annotation Text:",
              /* @__PURE__ */ s(
                "textarea",
                {
                  rows: 5,
                  value: d.text,
                  onChange: (P) => l(P.target.value, "text", u)
                }
              )
            ] }),
            /* @__PURE__ */ M("label", { children: [
              "Opacity",
              /* @__PURE__ */ s("br", {}),
              /* @__PURE__ */ s(
                "input",
                {
                  type: "range",
                  onChange: (P) => {
                    const x = [...t == null ? void 0 : t.annotations];
                    x[u].opacity = P.target.value, n({
                      ...t,
                      annotations: x
                    });
                  },
                  value: ((f = (p = t == null ? void 0 : t.annotations) == null ? void 0 : p[u]) == null ? void 0 : f.opacity) || "100"
                }
              )
            ] }),
            /* @__PURE__ */ M("label", { children: [
              "Edit Subject",
              /* @__PURE__ */ s(
                "input",
                {
                  type: "checkbox",
                  checked: (m = (S = t == null ? void 0 : t.annotations[u]) == null ? void 0 : S.edit) == null ? void 0 : m.subject,
                  onClick: (P) => {
                    const x = [...t == null ? void 0 : t.annotations];
                    x[u].edit.subject = P.target.checked, n({
                      ...t,
                      annotations: x
                    });
                  }
                }
              )
            ] }),
            /* @__PURE__ */ M("label", { children: [
              "Edit Label",
              /* @__PURE__ */ s(
                "input",
                {
                  type: "checkbox",
                  checked: (v = (y = t == null ? void 0 : t.annotations[u]) == null ? void 0 : y.edit) == null ? void 0 : v.label,
                  onClick: (P) => {
                    const x = [...t == null ? void 0 : t.annotations];
                    x[u].edit.label = P.target.checked, n({
                      ...t,
                      annotations: x
                    });
                  }
                }
              )
            ] }),
            /* @__PURE__ */ s(
              we,
              {
                label: "Connection Type",
                value: ((C = t == null ? void 0 : t.annotations[u]) == null ? void 0 : C.connectionType) || "",
                options: ["curve", "line", "elbow", "none"].map((P) => ({
                  value: P,
                  label: P
                })),
                onChange: (P) => {
                  const x = [...t == null ? void 0 : t.annotations];
                  x[u].connectionType = P.target.value, n({
                    ...t,
                    annotations: x
                  });
                }
              }
            ),
            d.connectionType === "curve" && /* @__PURE__ */ s(
              we,
              {
                label: "Line Type",
                value: ((w = t == null ? void 0 : t.annotations[u]) == null ? void 0 : w.lineType) || "",
                options: Object.entries(Qc).map(([P, x]) => ({
                  value: x,
                  label: P
                })),
                onChange: (P) => {
                  const x = [...t == null ? void 0 : t.annotations];
                  x[u].lineType = P.target.value, n({
                    ...t,
                    annotations: x
                  });
                }
              }
            ),
            /* @__PURE__ */ s(
              we,
              {
                label: "Marker",
                value: ((N = t == null ? void 0 : t.annotations[u]) == null ? void 0 : N.marker) || "",
                options: ["circle", "arrow"].map((P) => ({
                  value: P,
                  label: P
                })),
                onChange: (P) => {
                  const x = [...t == null ? void 0 : t.annotations];
                  x[u].marker = P.target.value, n({
                    ...t,
                    annotations: x
                  });
                }
              }
            ),
            /* @__PURE__ */ s(Kr, { className: "btn btn-danger", onClick: () => r(u), children: "Delete Annotation" })
          ] })
        }
      ) });
    })),
    ((c = t == null ? void 0 : t.annotations) == null ? void 0 : c.length) < 3 && /* @__PURE__ */ s("button", { className: "btn btn-primary full-width", onClick: o, children: "Add Annotation" })
  ] }) });
};
const Na = ({
  type: e = "info",
  message: t = "",
  iconSize: n = 21,
  heading: a,
  onDismiss: i,
  autoDismiss: l,
  secondsBeforeDismiss: o = 5,
  showCloseButton: r = !0
}) => {
  E.useEffect(() => {
    l && setTimeout(() => i(), o * 1e3);
  }, []);
  const g = () => ({
    __html: os.sanitize(t)
  });
  return /* @__PURE__ */ M("div", { className: `alert alert-${e} p-1 d-flex justify-content-between`, role: "alert", children: [
    /* @__PURE__ */ M("div", { className: "d-flex", children: [
      a && /* @__PURE__ */ s("h4", { className: "alert-heading", children: a }),
      e === "success" && /* @__PURE__ */ s(de, { display: "check", size: n }),
      e === "danger" && /* @__PURE__ */ s(de, { display: "warningCircle", size: n }),
      e === "info" && /* @__PURE__ */ s(de, { display: "info", size: n }),
      /* @__PURE__ */ s("span", { dangerouslySetInnerHTML: g() })
    ] }),
    r && /* @__PURE__ */ s("button", { type: "button", className: "close pl-5", "aria-label": "Close", onClick: () => i(), children: "X" })
  ] });
};
function L0(e) {
  return e;
}
function T0(e) {
  if (e == null)
    return L0;
  var t, n, a = e.scale[0], i = e.scale[1], l = e.translate[0], o = e.translate[1];
  return function(r, g) {
    g || (t = n = 0);
    var h = 2, c = r.length, d = new Array(c);
    for (d[0] = (t += r[0]) * a + l, d[1] = (n += r[1]) * i + o; h < c; )
      d[h] = r[h], ++h;
    return d;
  };
}
function N0(e, t) {
  for (var n, a = e.length, i = a - t; i < --a; )
    n = e[i], e[i++] = e[a], e[a] = n;
}
function Nt(e, t) {
  return typeof t == "string" && (t = e.objects[t]), t.type === "GeometryCollection" ? { type: "FeatureCollection", features: t.geometries.map(function(n) {
    return Go(e, n);
  }) } : Go(e, t);
}
function Go(e, t) {
  var n = t.id, a = t.bbox, i = t.properties == null ? {} : t.properties, l = Ts(e, t);
  return n == null && a == null ? { type: "Feature", properties: i, geometry: l } : a == null ? { type: "Feature", id: n, properties: i, geometry: l } : { type: "Feature", id: n, bbox: a, properties: i, geometry: l };
}
function Ts(e, t) {
  var n = T0(e.transform), a = e.arcs;
  function i(c, d) {
    d.length && d.pop();
    for (var u = a[c < 0 ? ~c : c], p = 0, f = u.length; p < f; ++p)
      d.push(n(u[p], p));
    c < 0 && N0(d, f);
  }
  function l(c) {
    return n(c);
  }
  function o(c) {
    for (var d = [], u = 0, p = c.length; u < p; ++u)
      i(c[u], d);
    return d.length < 2 && d.push(d[0]), d;
  }
  function r(c) {
    for (var d = o(c); d.length < 4; )
      d.push(d[0]);
    return d;
  }
  function g(c) {
    return c.map(r);
  }
  function h(c) {
    var d = c.type, u;
    switch (d) {
      case "GeometryCollection":
        return { type: d, geometries: c.geometries.map(h) };
      case "Point":
        u = l(c.coordinates);
        break;
      case "MultiPoint":
        u = c.coordinates.map(l);
        break;
      case "LineString":
        u = o(c.arcs);
        break;
      case "MultiLineString":
        u = c.arcs.map(o);
        break;
      case "Polygon":
        u = g(c.arcs);
        break;
      case "MultiPolygon":
        u = c.arcs.map(g);
        break;
      default:
        return null;
    }
    return { type: d, coordinates: u };
  }
  return h(t);
}
function M0(e, t) {
  var n = {}, a = {}, i = {}, l = [], o = -1;
  t.forEach(function(h, c) {
    var d = e.arcs[h < 0 ? ~h : h], u;
    d.length < 3 && !d[1][0] && !d[1][1] && (u = t[++o], t[o] = h, t[c] = u);
  }), t.forEach(function(h) {
    var c = r(h), d = c[0], u = c[1], p, f;
    if (p = i[d])
      if (delete i[p.end], p.push(h), p.end = u, f = a[u]) {
        delete a[f.start];
        var S = f === p ? p : p.concat(f);
        a[S.start = p.start] = i[S.end = f.end] = S;
      } else
        a[p.start] = i[p.end] = p;
    else if (p = a[u])
      if (delete a[p.start], p.unshift(h), p.start = d, f = i[d]) {
        delete i[f.end];
        var m = f === p ? p : f.concat(p);
        a[m.start = f.start] = i[m.end = p.end] = m;
      } else
        a[p.start] = i[p.end] = p;
    else
      p = [h], a[p.start = d] = i[p.end = u] = p;
  });
  function r(h) {
    var c = e.arcs[h < 0 ? ~h : h], d = c[0], u;
    return e.transform ? (u = [0, 0], c.forEach(function(p) {
      u[0] += p[0], u[1] += p[1];
    })) : u = c[c.length - 1], h < 0 ? [u, d] : [d, u];
  }
  function g(h, c) {
    for (var d in h) {
      var u = h[d];
      delete c[u.start], delete u.start, delete u.end, u.forEach(function(p) {
        n[p < 0 ? ~p : p] = 1;
      }), l.push(u);
    }
  }
  return g(i, a), g(a, i), t.forEach(function(h) {
    n[h < 0 ? ~h : h] || l.push([h]);
  }), l;
}
function E0(e) {
  return Ts(e, x0.apply(this, arguments));
}
function x0(e, t, n) {
  var a, i, l;
  if (arguments.length > 1)
    a = P0(e, t, n);
  else
    for (i = 0, a = new Array(l = e.arcs.length); i < l; ++i)
      a[i] = i;
  return { type: "MultiLineString", arcs: M0(e, a) };
}
function P0(e, t, n) {
  var a = [], i = [], l;
  function o(d) {
    var u = d < 0 ? ~d : d;
    (i[u] || (i[u] = [])).push({ i: d, g: l });
  }
  function r(d) {
    d.forEach(o);
  }
  function g(d) {
    d.forEach(r);
  }
  function h(d) {
    d.forEach(g);
  }
  function c(d) {
    switch (l = d, d.type) {
      case "GeometryCollection":
        d.geometries.forEach(c);
        break;
      case "LineString":
        r(d.arcs);
        break;
      case "MultiLineString":
      case "Polygon":
        g(d.arcs);
        break;
      case "MultiPolygon":
        h(d.arcs);
        break;
    }
  }
  return c(t), i.forEach(n == null ? function(d) {
    a.push(d[0].i);
  } : function(d) {
    n(d[0].g, d[d.length - 1].g) && a.push(d[0].i);
  }), a;
}
const D0 = ({ name: e }) => {
  const { config: t, setConfig: n, runtimeData: a, legendMemo: i, legendSpecialClassLastMemo: l, runtimeLegend: o } = E.useContext(fe), r = "circles", g = ["circles", "waves", "lines"], {
    map: { patterns: h },
    data: c
  } = t, [d, u] = E.useState(null);
  if (E.useEffect(() => {
    (async () => {
      import(
        /* webpackChunkName: "us-topo" */
        "./storybook-us-topo-c55ac1ea.es.js"
      ).then((v) => {
        u(Nt(v, v.objects.states).features);
      });
    })();
  }, []), !d)
    return /* @__PURE__ */ s(le, {});
  const p = () => {
    const y = ne.cloneDeep(t.map.patterns);
    y.push({ dataKey: "", pattern: r, contrastCheck: !0 }), n({
      ...t,
      map: {
        ...t.map,
        patterns: y
      }
    });
  }, f = (y, v, C) => {
    const w = ne.cloneDeep(t.map.patterns);
    w[v] = { ...w[v], [C]: y }, d.forEach((x) => {
      const _ = x.properties.iso;
      if (!_ || !a)
        return;
      const z = a[_];
      if (!z)
        return;
      const F = a[_] ? xe(a[_], t, o, i, l) : void 0;
      t.map.patterns.forEach((I, O) => {
        if (!(I.dataValue === z[I.dataKey]))
          return;
        const k = F[0], b = C === "color" && y !== "" ? y : nn(Ra, k), T = ls(k, b);
        T || console.warn(`COVE: pattern contrast check failed on ${z == null ? void 0 : z[t.columns.geo.name]} for ${I.dataKey} with:
          pattern color: ${b}
          contrast: ${e1(k, b)}
        `), w[v] = { ...w[v], [C]: y, contrastCheck: T };
      });
    });
    const N = w.some((x) => x.contrastCheck === !1), P = ne.cloneDeep(t);
    P.map.patterns = w, P.runtime.editorErrorMessage = N ? "One or more patterns do not pass the WCAG 2.1 contrast ratio of 3:1." : "", n(P);
  }, S = (y) => {
    const v = t.map.patterns.filter((C, w) => w !== y);
    n({
      ...t,
      map: {
        ...t.map,
        patterns: v
      }
    });
  }, m = () => t.map.patterns.every((y) => y.contrastCheck !== !1);
  return /* @__PURE__ */ M(qe, { children: [
    /* @__PURE__ */ s(Ze, { children: /* @__PURE__ */ s(Ke, { children: e }) }),
    /* @__PURE__ */ M(Ye, { children: [
      h.length > 0 && /* @__PURE__ */ s(
        Na,
        {
          type: m() ? "success" : "danger",
          message: 'Pattern colors must comply with <br /> <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</a> 3:1 contrast ratio.'
        }
      ),
      /* @__PURE__ */ s("br", {}),
      h && h.map((y, v) => {
        [...new Set(c == null ? void 0 : c.map((w) => w == null ? void 0 : w[y == null ? void 0 : y.dataKey]))];
        const C = Object.keys(c[0]);
        return C.unshift("Select"), C.sort(), /* @__PURE__ */ s(Xn, { allowZeroExpanded: !0, children: /* @__PURE__ */ M(qe, { children: [
          /* @__PURE__ */ s(Ze, { children: /* @__PURE__ */ s(Ke, { children: y.dataKey ? `${y.dataKey}: ${y.dataValue ?? "No Value"}` : "Select Column" }) }),
          /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ M(le, { children: [
            y.contrastCheck ?? !0 ? /* @__PURE__ */ s(Na, { type: "success", message: "This pattern passes contrast checks" }) : /* @__PURE__ */ s(
              Na,
              {
                type: "danger",
                message: 'Error: <a href="https://webaim.org/resources/contrastchecker/" target="_blank"> Review Color Contrast</a>'
              }
            ),
            " ",
            /* @__PURE__ */ s("label", { htmlFor: `pattern-dataKey--${v}`, children: "Data Key:" }),
            /* @__PURE__ */ s(
              "select",
              {
                id: `pattern-dataKey--${v}`,
                value: y.dataKey !== "" ? y.dataKey : "Select",
                onChange: (w) => f(w.target.value, v, "dataKey"),
                children: C.map((w, N) => /* @__PURE__ */ s("option", { value: w, children: w }, N))
              }
            ),
            /* @__PURE__ */ M("label", { htmlFor: `pattern-dataValue--${v}`, children: [
              "Data Value:",
              /* @__PURE__ */ s(
                "input",
                {
                  type: "text",
                  onChange: (w) => f(w.target.value, v, "dataValue"),
                  id: `pattern-dataValue--${v}`,
                  value: y.dataValue === "" ? "" : y.dataValue
                }
              )
            ] }),
            /* @__PURE__ */ M("label", { htmlFor: `pattern-label--${v}`, children: [
              "Label (optional):",
              /* @__PURE__ */ s(
                "input",
                {
                  type: "text",
                  onChange: (w) => f(w.target.value, v, "label"),
                  id: `pattern-dataValue--${v}`,
                  value: y.label === "" ? "" : y.label
                }
              )
            ] }),
            /* @__PURE__ */ s("label", { htmlFor: `pattern-type--${v}`, children: "Pattern Type:" }),
            /* @__PURE__ */ s(
              "select",
              {
                id: `pattern-type--${v}`,
                value: y == null ? void 0 : y.pattern,
                onChange: (w) => f(w.target.value, v, "pattern"),
                children: g.map((w, N) => /* @__PURE__ */ s("option", { value: w, children: w }, N))
              }
            ),
            /* @__PURE__ */ s("label", { htmlFor: `pattern-size--${v}`, children: "Pattern Size:" }),
            /* @__PURE__ */ s(
              "select",
              {
                id: `pattern-size--${v}`,
                value: y == null ? void 0 : y.size,
                onChange: (w) => f(w.target.value, v, "size"),
                children: ["small", "medium", "large"].map((w, N) => /* @__PURE__ */ s("option", { value: w, children: w }, N))
              }
            ),
            /* @__PURE__ */ s("div", { className: "pattern-input__color", children: /* @__PURE__ */ M("label", { htmlFor: "patternColor", children: [
              "Pattern Color",
              /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(
                  de,
                  {
                    display: "question",
                    style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                  }
                ) }),
                /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "If this setting is used, it is the reponsibility of the visualization author to verify the visualization colors meet WCAG 3:1 contrast ratios." }) })
              ] }),
              /* @__PURE__ */ s(
                "input",
                {
                  type: "text",
                  value: y.color || "",
                  id: "patternColor",
                  name: "patternColor",
                  onChange: (w) => f(w.target.value, v, "color")
                }
              )
            ] }) }),
            /* @__PURE__ */ s(Kr, { onClick: (w) => S(v), className: "btn btn-danger", children: "Remove Pattern" })
          ] }) })
        ] }) }, `accordion-pattern--${v}`);
      }),
      /* @__PURE__ */ s("button", { className: "btn btn-primary full-width mt-2", onClick: p, children: "Add Geo Pattern" })
    ] })
  ] });
}, Bo = {
  Annotate: w0,
  PatternSettings: D0
}, A0 = (e) => /* @__PURE__ */ E.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 290.5 157.9", style: {
  enableBackground: "new 0 0 290.5 157.9"
}, xmlSpace: "preserve", ...e }, /* @__PURE__ */ E.createElement("style", { type: "text/css" }, `\r
	.st0{fill:none;stroke:#0071BC;stroke-miterlimit:10;}\r
`), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M119.5-347c-5.6-2.6-9.8-5.4-14.3-6.4C98-355,90.4-356,83-356.2c-20.1-0.4-40.3-0.2-60.4-0.1 c-8.7,0-9.5,0.9-9.7,9.3c-0.1,5.5,0.2,11-0.1,16.5c-0.4,6.9,2.8,9.3,9.4,8.9c4.3-0.3,8.5,0,12.8,0c5,0,7.1,2.5,7.1,7.4 c0,20.4-0.1,40.9,0,61.3c0,6.5-3.8,8.3-9.5,8.2c-18-0.1-36,0-54,0c-32,0-64.1,0-96.1,0c-12.3,0-12.5-0.2-12.6-12.1 c0-24.7-0.1-49.4,0-74.2c0-10.2,0.6-10.8,11-10.9c7.9-0.1,15.9,0,23.8-0.1c3.7,0,7.1-1,7-5.4c-0.1-13.3,2-26.8-2.9-41 c-5.4,0.8-10.8,1.3-16,2.6c-4.2,1-6.9,0.5-9.2-3.4c-2.5-4.5-5.2-8.9-8.4-12.9c-1.7-2.1-4.3-4-6.8-4.6c-4-1-6.7-3.3-5.5-6.9 c4.6-13.6-4.5-21.6-11.8-30.3c-8.1-9.6-11.5-20.5-10.6-33c0.4-5.2,2.7-7.9,8-7.9c1.8,0,3.7-0.1,5.5-0.1c81.2,0,162.4,0,243.5,0 c12.6,0,13.2,0.8,12.7,13.7c-0.1,1.5-0.1,3.1,0.2,4.5c2.6,13.4,5.3,26.8,8,40.1c0.2,0.9,0.6,1.9,0.4,2.7c-3.1,11.5,3,22.3,2.1,33.7 c-0.8,11.2-1,22.5-1.4,33.7C119.5-353.6,119.5-351.2,119.5-347z M-34.4-376.5c9.5-0.1,17.4-7.5,17.2-16.1c-0.2-8.7-9-18-17.3-18.2 c-9.1-0.3-16.8,7.9-16.8,17.8C-51.3-381.9-45.6-376.4-34.4-376.5z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M315.1-337.9c14.4,14.2,25.1-1.2,38.4-2.3c0.5,3.5,1.6,6.7,1.2,9.7c-1.5,10.8-1.4,22.6-6.1,31.9 c-5.1,10.1-14.8,17.8-22.6,26.4c-0.5,0.6-2,1-2.5,0.7c-8.8-5-21.4,0.1-27.7-12c-6.8,6.4-12.1,13-18.7,17.3 c-5.3,3.4-12.4,5.7-18.6,5.5c-6.9-0.2-11,1-13.5,7.5c-1.4,3.6-13.4,8.9-16.5,7.3c-1.7-0.9-2.6-3.7-3.7-5.6c-1.8-3.1-2.8-6.8-5.3-9.2 c-7.3-7.2-7.5-7-6.4-16.4c-5.7-7.4-11.5-13.9-16.2-21.2c-3.4-5.4-0.6-11.2,2.1-16.5c1.3-2.6,2.9-5.4,3.1-8.2 c0.3-4.2,1.9-6.4,5.7-8.4c6.5-3.4,7.3-8.5,2.5-14.3c-4.4-5.4-9.7-9.9-10.5-17.7c-0.2-1.6-5.8-3.8-9-3.8c-17.7-0.4-35.4-0.2-53.1-0.2 c-11.5,0-11.8-0.3-11.9-11.9c0-7,1.3-14.4-0.3-21c-4-16.7-1.8-33.9-5.3-50.5c-1.7-8.3-3.8-16.6-4.6-25.1c-0.9-9.5,0.4-10.4,10-10.6 c3.4-0.1,6.8,0.5,10-0.2c3-0.6,6.2-1.9,8.5-3.8c4.8-4,6.9-3.7,9,2.2c3,8.3,7.2,12.6,14.8,11.5c10.2-1.5,17.6,3.7,25.3,8.2 c3.3,1.9,5.9,3.5,10,1.7c2.2-1,5.3-0.1,8,0.2c9.9,1,19.8,7.3,29.8-1.4c-0.8,6.8-4.3,10.8-9.8,10.2c-14.6-1.5-24.2,5.7-33,17.9 c5.3-1.5,9.4-2.7,15-4.3c-0.4,4.2-0.7,6.7-0.9,9.5c0.8-0.1,1.8,0.1,2.5-0.3c7.9-4.5,15.8-9,23.6-13.6c5.8-3.4,6.5-3.6,15.2-0.1 c-3.4,1.8-6.1,3.1-8.9,4.6c4.5,4.2,7.3,7.5,10.8,9.8c2,1.3,5,1.8,7.5,1.6c3.9-0.3,7.8-1.2,11.7-2.3c11.3-3.1,20.2,0.8,28.1,8.8 c2.3,2.3,5.7,3.5,8.7,5.2c-0.1,0.7-0.2,1.4-0.2,2.1c-3.2,1.2-6.4,2.3-10.5,3.8c4.9,4.4,11.3,7.7,13.3,12.7 c2.1,5.4-0.1,12.4-0.4,18.9c13.1,6.6,16.5,25.1,6.7,36.9C318.1-343.8,316.6-340.5,315.1-337.9z M275.2-415.1 c-0.6-0.2-1.2-0.5-1.9-0.7c-1.4,1-3,1.8-4,3.1c-11.4,14.8-17.6,31.7-18.7,50.3c-0.4,7.4,0.7,15.1,2.6,22.3c1.5,5.6,6.2,6.6,9.6,2.5 c5-6.1,10.2-13.4,6.5-21.6c-7-15.4,1-28.9,3.5-43.2C273.6-406.6,274.4-410.9,275.2-415.1z M250.5-294.1c10.2,0,18.2-7.9,18-17.7 c-0.2-7.9-9.4-16.9-17.3-17c-9.7-0.1-17.3,7.3-17.3,17.1C233.8-301.5,240.8-294.1,250.5-294.1z M280.8-408.1 c0.5,0.5,1.1,0.9,1.6,1.4c0.7-1.2,1.5-2.3,2.2-3.5c-0.4-0.3-0.7-0.5-1.1-0.8C282.6-410,281.7-409.1,280.8-408.1z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M-197.4-181.5c-4-7.9-11-6-17.5-5.4c-4.3,0.4-8.9,2.5-13-3c3.9-1.1,7.2-2,10.5-2.9c0.1-0.3,0.1-0.6,0.2-0.9 c-2.1-0.2-4.4-0.1-6.3-0.8c-2.1-0.7-5.7-2.1-5.7-3.4c-0.7-10.4-10.2-15.4-14.1-23.8c-4.1-8.8-8.6-17.3-13.2-25.9 c-1.3-2.5-3.3-4.8-4.9-7.1l0,0c-2.9-4.9-5.8-9.9-8.7-14.8c-1.5-2.6-3.4-5.1-4.2-8c-2-6.9-2.3-14.2-7.6-20.2c-1.8-2-0.5-6.9-0.2-10.4 c0.4-5.7,2.1-11.4,1.5-16.9c-0.7-6.3,1.1-8.5,7-8.5c10.4,0.1,20.7,0,31.1,0c32,0,64.1,0,96.1,0c10.9,0,11.5,0.6,11.5,11.3 c0.1,22.9,0,45.8,0,68.6c0,11.3,0.3,11.6,12,11.7c16.2,0,32.3-0.1,48.5,0.1c9.4,0.1,10.8,1.3,10.9,10.5c0.1,26.5,0.1,53.1,0,79.6 c0,9.2-1.5,10.2-10.7,10.7c-12.4,0.7-24.1-1-35.5-6.3c-13.2-6.1-27-11.2-40.6-16.3c-2.7-1-6-0.6-9-0.5c-4.6,0.2-9.1,0.8-13.6,1.1 c-6.3,0.5-10.5-1.3-11.6-8.4C-185.8-178.3-191.3-180.5-197.4-181.5L-197.4-181.5z M-169.9-242.5c-0.2-10.1-7.8-17.8-17-17.5 c-8.4,0.3-17.1,9.1-17.1,17.2c0,9,8.6,17.3,17.9,17.2C-176.6-225.7-169.8-232.8-169.9-242.5z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M801.1-451.8c9.8,0,19.7,0,29.5,0c19.2,0,38.5,0,57.7,0c9.5,0,20.6,15.3,15.6,23.1 c-3.8,5.9-10.7,11.3-17.4,13.5c-11.4,3.9-11.8,2.8-17.6,13.1c-8.1-0.7-13.4,2.8-17.3,10.8c-2.4,4.7-8.1,8.3-13.2,11 c-14.2,7.5-20.9,29.2-13.7,46.7c5.4,13.2,10.8,26.4,14.9,40c2.9,9.4,2.3,19.5-2.7,28.4c-1.2,2.2-4.5,4.3-7,4.4 c-3.3,0.2-6.6-0.5-8.5-5.1c-2.1-5.1-6.8-9-9.8-13.8c-4.4-6.9-8.7-13.8-12.1-21.2c-1.5-3.3-1.2-7.9-0.3-11.5c1.3-5.4,0.5-9.4-3.8-13 c-2.1-1.7-3.6-4.2-5.2-6.3c-6-7.8-6-7.8-14.5-2.9c-6.8,3.9-9.8,3.5-14.6-2.8c-5.8-7.7-13.9-6.2-21.8-5.9c-10,0.4-20.1,0.5-30.1,1 c-4.3,0.2-7.5-1.1-8.4-5.2c-1.5-6.8-6.2-7.1-11.8-7.1c-16.8-0.1-17.3-1.3-10.1-17c1.7-3.6,2.3-8.3,1.7-12.3 c-1.5-10.3-0.5-19.3,5.5-28.6c6.7-10.3,10.5-22.5,16.4-33.4c3.8-7.1,5.9-16.2,15.7-18.5c0.3-0.1,0.6-0.2,0.8-0.5 c6.7-13.4,21-9.6,31.6-14c1.6-0.7,3.6-0.9,4.9-2c5.2-4.7,10.2-9.7,15.3-14.5c3.1-2.9,6.3-2.4,8.8,0.6c4.1,5.1,9,6.9,15.3,5.5 c5.2-1.2,7,2.6,8.7,6.2c2.7,5.7,5.3,11.5,8.3,18.1c-3.5,3.3-7.5,7.1-11.6,10.8C800.6-453.4,800.9-452.6,801.1-451.8z M804.3-385.9 c10.1,0.2,17.7-6.6,18.1-16.4c0.3-8.3-9-18.1-17.2-18.1c-8.2,0-17.4,9.4-17.4,18C787.7-392.2,793.8-386.1,804.3-385.9z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M-139.2-408.7c5.6-2,8.6,0.5,10.5,5.4c1,2.5,2.6,4.8,4,7.2c7,12.1,12.4,13.5,24.5,6c0.7-0.5,1.7-0.6,4.2-1.5 c1.8,4.3,4.8,8.4,5,12.8c0.7,12.5,0.2,25,0.3,37.5c0.1,6.1-3.2,7.8-8.6,7.8c-15.8-0.1-31.7,0-47.5,0c-40,0-80,0-119.9,0 c-14.6,0-19.8-6.5-16.8-21.2c0.9-4.5,3.1-8.7,3.9-13.1c4.3-24.8,6.2-49.6-0.8-74.3c-1.1-3.8-3-7.3-4-11.1c-1-4-1.4-8.3-2.1-12.9 c9.3,1.2,16.7,2.1,24.7,3.2c-0.8-4.3-2.5-7.8-1.7-10.3c1.7-5.1,4-9.2,11.7-9c25.9,0.8,51.9,0.3,77.8,0.3c11.7,0,12,0.3,12,11.7 c0,11.8,3.9,21.8,12.8,29.8c3.6,3.2,6.8,6.8,9.7,10.6c1.1,1.5,1.5,3.9,1.4,5.8C-138.3-419.2-138.8-414.4-139.2-408.7z M-222.1-394.3 c9.4,0.3,17.2-7.5,17.4-17.4c0.2-8.6-8.1-16.9-17-17c-9.4-0.1-16.9,7.1-17.2,16.6C-239.4-402.2-232.1-394.6-222.1-394.3z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M439.7-324.3c-5.8,6.5-8.3,14.1,0,21.3c-10.9,10.9-10.2,10.7-5.7,26.5c1.4,4.8-1,11.2-2.9,16.3 c-2.9,7.7-6.9,15-11.5,24.6c-33.9,0-70.4,0-106.9,0c-0.1-0.8-0.3-1.6-0.4-2.4c6-4.9,12.1-9.8,18.1-14.7c0.1-0.5,0.4-1.2,0.2-1.7 c-1.6-4.8-6-11.2-4.3-14.2c4.5-8,10.9-15.2,17.8-21.4c3.6-3.2,6.9-5.8,7.5-10.7c1.1-9.7,2.4-19.3,3-29c0.7-11.1,6.7-15.2,17.2-11.3 c2.5,0.9,5.4,0.9,8.1,0.9c11.3,0.1,22.7,0.8,33.9-0.2C426.2-341.3,435-337.5,439.7-324.3z M367.5-294.5c-0.2,10,6.9,17.8,16.7,18.2 c8.4,0.4,18-8.8,18-17.2c0-9.5-7.2-16.8-16.7-17.1C374.7-311,367.7-304.7,367.5-294.5z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M526.7-353.3c3.4-5.5,5.8-2.1,6.4,1.3c0.8,4.3,0.2,9,0.2,14.2c-9.4,0.3-17.9-3-26.9,0.2c-8.5,3-18.1,2.7-28.1,4 c1.5-10.1,3.2-20.5,4.4-30.9c0.7-6.9,0.7-13.9,0.7-20.8c0-8.8-0.5-17.7-0.5-26.5c0-5.4,3.3-7.1,8.3-7.5c6-0.5,12-1.4,17.9-2.6 c10.4-2.1,14.4-10,17.2-19.2c3.4-11.1,7.9-21.7,14.8-29.2c5.8,0.3,10.8-0.6,14.5,1.1c3.7,1.6,6.5,5.7,9,9.2c1.1,1.5,0.7,4.2,0.5,6.3 c-1.3,12.2,1.8,23.2,8.2,33.6c3.7,6.1,2.8,10.7-3.4,14c-11.3,6-19.8,17.7-34.3,17.6c-1.1,0-2.2,1-3.2,1.7 C524.2-380.9,520.9-361.8,526.7-353.3L526.7-353.3z M515.9-384.5c10.2,0,17.9-7.3,17.7-16.8c-0.2-9.6-8-17.3-17.4-17.5 c-8.4-0.1-18.2,9.3-18.1,17.4C498.1-392,506-384.5,515.9-384.5z M529.4-343.7c-0.4-0.1-0.7-0.2-1-0.3c0.1,0.2,0.1,0.4,0.2,0.6 C528.8-343.4,529-343.5,529.4-343.7z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M472.5-324.5c8.1-2.6,14.9-4.8,22.1-7.2c2.4,3.6,1.6,6.3-2.1,8.1c-4.9,2.4-9.8,5.3-15,6.5 c-6.9,1.5-10.4,4.6-11.7,11.8c-1.6,9.2-5,13.5-13.5,20.5c-13.1-10.1-13.2-12.1-1.5-25.3c-3.7-5.8-4.1-11.8-1.5-18.7 c2.8-7.2-2.1-13-10.4-13.2c-14-0.3-28-0.1-42.1-0.2c-2.4,0-5,0.3-7.3-0.2c-2.2-0.5-5.6-1.5-5.9-2.9c-0.6-2.2,0.1-5.8,1.7-7.4 c4.4-4.2,9.1-7.8,7.7-15.2c-0.2-1.2,4.1-4.5,6.6-4.9c4.4-0.7,9.2-0.6,13.6,0.3c6.5,1.3,12.1,0.7,16.7-4.3 c-0.9-12.8,11.9-27.9,25-29.5c0.6-0.1,1.2-0.1,1.8-0.1c19.3-1.2,17.6-1,19.8,18C479-367.3,474-347.3,472.5-324.5z M470.6-368.3 c0.1-9.6-6.8-17.1-16-17.4c-9.7-0.3-18.3,7.7-18.6,17.4c-0.2,8.8,7.6,16.6,17,16.8C462.8-351.2,470.5-358.6,470.6-368.3z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M-240-169.4c0.4,1.6,0.9,3.3,1.3,4.9c-0.4,0.3-0.8,0.7-1.3,1c-1.4-1.1-2.7-2.2-4.1-3.3 C-242.8-167.7-241.4-168.6-240-169.4L-240-169.4z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M-248.7-167.4c-0.2,0.1-0.6,0.3-0.7,0.2c-0.2-0.1-0.2-0.5-0.3-0.7c0.2-0.1,0.6-0.3,0.7-0.2 C-248.8-168-248.8-167.6-248.7-167.4z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M-304.2-242.7c-0.2,0.4-0.4,0.8,0.1-0.1C-304.6-241.9-304.4-242.3-304.2-242.7L-304.2-242.7z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M157.8-220.7l-4.1-0.4C154.9-220.7,156.2-220.6,157.8-220.7z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M159.2-312.3c-10.5,0.1-16.3,5.9-16.3,16.5c0,10,7.6,18,16.8,17.8c8.4-0.1,17.5-8.8,17.6-16.8 C177.5-304.6,169.5-312.3,159.2-312.3z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M227.6-245.3c-2.5-6.5-4.7-13.1-11-17.5c-2.2-1.5-3.9-5.7-3.5-8.3c0.9-5.4-1.1-7.9-4.9-11.5 c-5-4.7-11.1-10.8-11.6-16.8c-0.6-7.4,4-15.3,6.5-22.9c0.3-0.9,2-1.3,3-2c9.3-6.1,9.8-11,2.8-20.1c-3.2-4.2-6.8-8.7-8-13.6 c-1.4-5.8-4-7.7-9.3-7.7c-21.1,0-42.1,0-63.2,0c-4.5,0-7.8,1.2-8,6.5c-0.1,3.4-1.2,6-5.4,5.7c-5.1-0.4-10.3-0.9-15.4-1 c-26.2-0.7-52.3-1.4-78.5-2c-4.5-0.1-6.8,2.2-6.8,6.7c0,4.9-0.1,9.8-0.1,14.7c0,21.7-1.7,20.9,19.9,20.8c8.4-0.1,9.3,1,9.3,9.7 c0.1,14.7,0.1,29.3,0,44c-0.1,12.5,0.7,17.1-2.9,18.7l75.2,0.2c0-0.4,0-0.7,0-1.1c7.5,0,14.7,0,22,0c4.7,0,8.9,0,11,5.8 c0.7,1.8,5,3.1,7.6,3.2c11,0.4,22,0.2,33,0.2c6.3,0,12.6,0,18.5,0c2.2,8.5,4.2,10.1,8.9,8.6C222.1-226.6,229.6-240.1,227.6-245.3z  M128.2-289c-9.3,0.1-16.8-7.9-16.8-17.8c0-10.6,5.7-16.4,16.3-16.5c10.3-0.1,18.4,7.7,18.2,17.5C145.7-297.9,136.6-289.2,128.2-289 z" }), /* @__PURE__ */ E.createElement("polygon", { className: "st0", points: "212.5,-213.4 212.5,-213.4 212.5,-213.4 " }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M707.6-335.9c1.5-6.9-4.3-7.6-7.2-10.7c-2.8-3.1-4.3-7.5-6.8-12.1c-6.6-0.3-14.3-0.7-22.8-1.2 c0.9-2.8,1-4.4,1.8-5.6c5.2-7.3,7.2-14.7,5.6-24c-1.3-7.8-0.3-15.9,5.1-23.4c5.3-7.3,8.3-16.1,12.4-24.2c2.3-4.4,0.9-6.9-3.7-8.1 c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0.3-6.4-3.7-7.4-8.9-7.4c-15.3,0.1-30.5-0.2-45.8,0.1c-1.5,0-2.9-0.1-4.1-0.4 c-4.2-0.9-6.2-3.9-6.4-9.5l-75.2-0.2c-2.6,1.2-7.5,0.8-16.8,0.8c-1.2,0-2.5,0-3.7,0c-32.3,0.1-64.7,0-97,0c-9.9,0-11.4,1.2-11.4,9.9 c-0.1,27.5-0.1,54.9,0.1,82.4c0,2.6,1.7,7.1,3.3,7.4c3.1,0.7,7.9,0.1,9.8-1.9c3.4-3.6,6.9-4.4,11.3-4.4 c11.7-0.1,31.6,13.3,34.9,25.2c2.4,8.8,7.8,13.2,15.6,16.3c9.1,3.6,9,3.8,14.4-4c4.2-6,9.7-8,15.7-4.1c4.7,3.1,8.6,7.5,12,12 c4,5.3,7,11.3,10.6,17c1.8,2.8,4.9,5.3,5.5,8.2c2.7,13.4,11.9,18.7,23.9,21.6c10.2,2.5,13.3,0.5,10.6-9.8 c-3.1-12.1-0.1-19.8,15.1-30c6-4.1,12.5-7.5,18.2-12c6.3-4.9,13.5-8.4,21-7.6c8.8,1,17.9,3.4,25.8,7.3c6.2,3.1,11.6,4.6,18.2,2.6 c2.2-0.7,5.3-1.8,6.8-0.9c3,1.8,6,4.6,8.4,0.8c1.1-1.8-1.1-5.7-1.7-8.6c-0.1-0.6,0-1.2,0-2.4C704.1-336.4,705.8-336.1,707.6-335.9z  M559.8-348.1c-10.1,0-17.9-7.3-17.9-16.7c0.1-10.6,7.5-18.2,17.6-18c9.5,0.2,17.1,8.2,16.9,17.8 C576.3-355.5,568.9-348.1,559.8-348.1z" }), /* @__PURE__ */ E.createElement("path", { d: "M552.5-184c-0.1-0.1-0.2-0.2-0.4-0.4c0.3,0.7,0.8,1.4,1.2,2.1c0.7,1.2,1.3,2,2,2.5c-0.1-0.1-0.2-0.2-0.2-0.4 C554.3-181.6,553.5-182.9,552.5-184z" }), /* @__PURE__ */ E.createElement("path", { d: "M562.5-180c0.2,0.4,0.4,0.8,0.6,1.3c-0.1-0.4-0.2-0.9-0.4-1.3C562.6-180,562.6-180,562.5-180z" }), /* @__PURE__ */ E.createElement("path", { d: "M548.9-186.2c0,0,0,0.1,0,0.1C549-186.1,549-186.1,548.9-186.2C549-186.2,549-186.2,548.9-186.2z" }), /* @__PURE__ */ E.createElement("path", { d: "M580-176.6c2.9,0,5.3-2.2,5.2-4.8c-0.1-2.6-2.8-5.3-5.3-5.4c-2.8-0.1-5.1,2.3-5.1,5.3C574.9-178.2,576.6-176.5,580-176.6z" }), /* @__PURE__ */ E.createElement("path", { d: "M563.5-176.7c0.1,3,0.1,6.1,0.1,9.1c0-0.1,0-0.1,0-0.2C563.6-170.8,563.9-173.7,563.5-176.7z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M563.1-178.7c0.2,0.7,0.3,1.3,0.4,2c0-0.2,0-0.4,0-0.5C563.5-177.7,563.3-178.2,563.1-178.7z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M549-186.1c0.3,0.3,0.8,0.6,1.4,0.7c0.6,0.2,1.2,0.5,1.7,1c0,0,0,0,0-0.1C551.5-185.9,550.6-186.7,549-186.1z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M560.7-180.6c-2.5,1.5-4,1.8-5.4,0.7c0.6,0.8,1.4,0.9,2.5,0.6c1.5-0.4,3.1-0.5,4.6-0.7 c-0.2-0.4-0.4-0.7-0.5-1.1C561.2-180.8,560.9-180.7,560.7-180.6z" }), /* @__PURE__ */ E.createElement("path", { d: "M542.5-136.6c0,3.5,0.1,3.6,3.8,3.6c9.8,0,19.5,0,29.3,0c5.5,0,11,0,16.5,0c1.7,0,2.9-0.5,2.9-2.4c0-6.1,0-12.1,0-18.2 c0-1.4-0.6-2.2-2.2-2.2c-1.3,0-2.6-0.1-3.9,0c-2,0.1-3-0.6-2.9-2.6c0.1-1.6,0-3.3,0-4.9c0.1-2.5,0.3-2.8,3-2.8 c6.1,0,12.3-0.1,18.4,0c2.3,0,4.6,0.3,6.8,0.8c1.4,0.3,2.7,1.1,4.4,1.9c0-1.2,0-2,0-2.7c0.1-3.3,0.2-6.7,0.4-10 c0.3-3.4-1.6-6.6-0.7-10c0.1-0.2-0.1-0.5-0.1-0.8c-0.8-4-1.6-7.9-2.4-11.9c-0.1-0.4-0.1-0.9-0.1-1.3c0-1.1,0.1-1.9,0-2.5l-82.1,0.1 c0,0.2-0.1,0.3-0.1,0.5c0.1,0.5,0.1,1.2,0.1,2.1c0,0.9,0.1,1.7,0.2,2.5c0.5,1.9,1.4,3.7,2.9,5.4c0.4,0.5,0.9,1,1.3,1.4 c0.9,0.8,1.7,1.7,2.4,2.6c0.3,0.4,0.4,1.1,0.4,1.7c0,1.4-0.2,2.8-0.3,4.4c0,0,0,0.1,0.1,0.1c1.6-0.5,2.5,0.2,3.1,1.6c0,0,0,0,0,0.1 c0.1,0.1,0.2,0.2,0.4,0.4c1,1.2,1.8,2.5,2.6,3.8c0.1,0.1,0.2,0.3,0.2,0.4c1.4,1.1,2.9,0.8,5.4-0.7c0.2-0.1,0.5-0.2,1.3-0.4 c0.2,0.4,0.3,0.7,0.5,1.1c0.1,0,0.2,0,0.2,0c0.2,0.4,0.3,0.9,0.4,1.3c0.2,0.5,0.4,1,0.4,1.4c0,0.2,0,0.4,0,0.5c0.4,3,0.1,6,0.1,8.9 c0,0.1,0,0.2,0,0.2c0,0.5,0,1,0,1.5c0,1.8-1,2.3-2.6,2.3c-3.4,0-6.8,0-10.1,0c0,0.2,0,0.5,0,0.8 C542.5-151.2,542.5-143.9,542.5-136.6z" }), /* @__PURE__ */ E.createElement("path", { d: "M667.1-134.3c1,0.5,4.6-1.1,5-2.2c0.8-1.9,2-2.3,4.1-2.2c1.9,0,4-0.6,5.6-1.6c2-1.3,3.6-3.2,5.7-5.1 c1.9,3.6,5.7,2.1,8.4,3.6c0.2,0.1,0.6-0.1,0.8-0.2c2.3-2.6,5.3-4.8,6.8-7.8c1.4-2.8,1.4-6.3,1.8-9.4c0-0.2,0-0.4,0-0.5l-3.4,1.7 l-3.5,1.2l-3.3,0.2l-2-1.5l1-1.8l0.5-0.5l0.7-1.8l1.2-0.8l1.6-2.8l-1.7-2.2l-0.3-3.5l-2.2-0.7l-2.8,2l1-2.3l1.7-2.3l-0.7-2.2 l-0.5-2.5l-2.7-1l-2.3-2l-2.8,1.2l0.2,2.2l-1.7,2l-1.3-0.7l-2.5,2.8v3.3l0.3,3.3l1.5,2.3l-0.2,5l-3.2,3l-2.3,0.2l-1.2-3.5l-1.2-2.5 l0.5-3.3l-0.5-3.3l1.2-2.2l0.7-2.2l1.2-3.7l-2.7,3l1.5-5.2l2.3-2l2.8-0.2l2.2-1h3.5h2.8l1.8-0.5l2.2,0.3l-1.3-1l-1.7-1l-1.9-1.4 l-1.9,0.6l-1.8-1.3l-4.3,0.2l-2.3,1.5l-1.8-1.2l-2.2-1.3l-3.2-0.2l3.2-4.5l-3.7,1.7l-3,2.3l-3,1.7l-2.7,0.3l-0.3-1.7l-5.5,1.2l4.6-4 l3.2-2.4l4-3.2l-1.7-0.2L660-198l-2.5-0.5l-2.2-0.4l-2.2-1.6l-2.5,0.2l-4.8-1.2l-1.2-1.5l-0.7-2.3l-1.2-1.1l0.1,1.2l-1.2,1.8l-8.5,0 c0,0.3,0,0.6,0.1,1c0.2,2.5,0.9,5,1.4,7.4c1.1,4.9,0.4,10,1.6,15c0.5,2,0.1,4.1,0.1,6.2c0,3.4,0.1,3.5,3.6,3.5 c5.3,0,10.7-0.1,16,0.1c1,0,2.7,0.6,2.7,1.1c0.2,2.3,1.8,3.6,3.2,5.2c0.7,0.9,1,1.7,0.9,2.5c0.5,1.5-0.1,2.6-2.1,3.9 c-0.3,0.2-0.8,0.3-0.9,0.6c-0.8,2.3-2.1,4.6-2,6.8c0,0.1,0,0.2,0.1,0.4c1.1,1.8,2.5,3.4,3.9,5.1c0.3,0.3,0.5,0.5,0.6,0.8 c0.1,0.1,0.2,0.3,0.3,0.4c0,0.1,0,0.1,0,0.2c0.1,0.4,0.2,0.9,0.1,1.5c-0.1,0.4,0,0.9,0.2,1.3c0.3,0.5,0.8,0.9,1.7,1.8 c0.1,0.1,0.2,0.2,0.3,0.4c0.9,1.1,1.5,2.3,2,3.6C666.8-134.5,667-134.4,667.1-134.3z" }), /* @__PURE__ */ E.createElement("path", { d: "M516.3-163.8c-1.9,0-3.9,0-5.8,0c-0.8,0-1.4-0.1-2-0.2l0,0.2C511.1-163.8,513.7-163.8,516.3-163.8z" }), /* @__PURE__ */ E.createElement("path", { d: "M534.5-140.7c-2.5,0.1-5.2,2.9-5.2,5.4c0,2.8,2.6,5.5,5.4,5.4c2.9,0,5-2.3,4.9-5.3C539.6-138.4,537.3-140.8,534.5-140.7z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M517.8-163.8c-0.5,0-1,0-1.4,0c7.5,0,15.1,0,22.6,0C531.9-163.8,524.8-163.8,517.8-163.8z" }), /* @__PURE__ */ E.createElement("path", { d: "M561-120.6c0-2.9-0.4-5.3-3.3-5.3c-4.9,0-9.8,0-14.6,0c-3.5,0-3.6-1.1-3.6-4.7c0-7.2,0-11.4,0-18.6c0-3.4-0.2-3.5-3.5-3.5 c-2.6,0-5.2,0-7.8,0c-7.5,0-15.1,0-22.6,0c-2.6,0-5.2,0-7.8,0l0.4,2.2l0.5,2.8l-0.7,3.8l0.5,2.7l1.2,2.7l1,3.3l0.8,2.2l3.5,2.8 l1.7-0.2l2.3,0.3l-2.5,0.7l0.7,1.2l-2.2,0.3l2,2.2l2,2.2l-0.7,1.8l2.7,3.8l2.8,2.3l0.3,2.8l2.3,1.2l3.2,1l2.5,2.2l2.2,1.3l2.3,1.8 l1.3,1l1.5,3.3l8.5-0.2l16.7,5.8h6.3c0-0.1,0-0.2,0-0.3C561-103.9,561-112.3,561-120.6z" }), /* @__PURE__ */ E.createElement("path", { d: "M686.7-125c-0.1-0.2,2.7-1.3,2.6-1.5c1.3-1.2,2.6-2.4,3.8-3.5c-1-2.1-0.4-0.8-1.3-2.7c-0.6-1.2-1.2-2.4-2.9-2 c-2.1,0.5-3.7-0.1-5-1.8c-0.8-1-1.9-1.1-2.9-0.2c-1.7,1.5-3.3,3.2-5,4.7c-0.4,0.4-1.1,0.4-1.6,0.6c-3.5,1.4-8.2,0.2-10.3,4.5 c0,0.1-0.2,0.1-0.2,0.2c-3.2,0.7-3.9,3.6-5.1,5.9c-1.9,3.5-3.2,7.4-5.4,10.7c-2,3-2.3,5.9-1.8,9.2c0.2,1.3,0,2.8-0.6,3.9 c-0.3,0.6-0.5,1.1-0.7,1.6c2.2,0.1,4.2,0.2,6,0.3c0.3,0.5,1.7,2.2,3.4,4.3l0.4,0.4l4.8-0.7l0.7,0.8h3.3l1.8-0.5l2.7-0.2l2.5,1 l1.5-0.2l1.5,2.2l3,0.2l1.7-1.3h1.7l3.3,2.8l1.8,2l0.5,2.7l-0.3,3.3l1.2,3.5l3.2,4l1.8,3.8l0.7,1.5l3.3-0.7l0.8-3.7v-5.5l-1.7-4.5 l-0.5-1.2l-0.3-3.3l-2.8-3.3l-0.5-4l0.2-3.3l1.3-3.7l2.5-2l-0.2-1.5l3-0.5l4.3-4.8l2-1.7l2.2,0.3l2-3.8l2.8-1.5c0,0,2.2,0.3,2.3-0.5 c0.2-0.8,2.3-4.8,2.3-4.8l-2.3-1.3l1.3-1.2l0.3-0.8l-0.8-2.1c-7.5-0.1-17.8-0.2-22.6-0.2C693.2-125,689.9-125,686.7-125z" }), /* @__PURE__ */ E.createElement("path", { d: "M523.9-181.8c2.8,0.1,5.2-2.2,5.3-5.2c0.1-2.6-2.4-5-5.1-5c-2.8,0-5.1,2.1-5.2,4.9C518.7-184.2,520.9-181.9,523.9-181.8z" }), /* @__PURE__ */ E.createElement("polygon", { points: "690.5,-184.6 691.4,-187 688.5,-186.6 686.7,-186.8 685.4,-187.8 686.4,-186.1 " }), /* @__PURE__ */ E.createElement("path", { d: "M527.3-160.8c4.8,0,9.6,0,14.3,0c1.7,0,2.6-0.5,2.6-2.3c0-3.7,0.1-7.4-0.1-11.1c-0.1-1.3-1-2.5-1.5-3.8 c-0.8,0.3-1,0.3-1.3,0.4c-3.7,2.2-5.3,1.8-7.4-1.8c-0.4-0.7-0.9-1.4-1.2-2.1c-0.6-1.5-1.5-2.2-3.2-1.6c0.1-1.7,0.3-3.1,0.3-4.5 c0-0.6-0.1-1.3-0.4-1.7c-0.9-1.1-1.9-2.2-2.9-3.1c-2.7-2.4-3.9-5.3-3.9-8.8c0-1.3,0-2.1-0.2-2.6l-24.6,0l-0.7,0.9l0.3,2.2l1.7,3.5 l-0.8,3.7l-1.8-2.3l-1.2-2.7l-2.7-0.5l-4.2-0.5h-1.2l0.7,2.3l2.3,3.3v3.3l0.7,3.7l3,0.3l1.2,1.7l-3.7-0.5l-1.2,0.8l0.5,3.5l-0.7,3.8 l0.2,4.5l-1.2,3l-1.3,4.3l1,3l0.3,1.4c0.6,0.1,1.3,0.2,2,0.2C503.2-160.8,515.2-160.8,527.3-160.8z" }), /* @__PURE__ */ E.createElement("path", { d: "M748.3-155.2l-2.7,0.2l-2.5,0.7l-1.2,0.7l-0.2-1.2l0.8-1l0.5-0.1l-0.5-22.1l-5.5,0l-3.5,3.2l-2.2,1.3l-1,2.8l-0.5,1.5 l-2.5,1.7H725l-1.8-0.8l-2.3,0.3l-3,1l0.2,1.5l-0.2,2.7l-1.5,1.3l-0.8,0.2c2.9,0.1,5.8,0.2,8.7-0.1c3.7-0.3,6.3,0.9,7.7,4.9 c-1.7,2-2.5,4.3,0,6.5c-1.2,2.4-1.9,3.9-2,5.6l0.6-0.5l0.7,4.2l0.5,2l1.2,1.8l-0.3,3l1.8-3.7l1.2-2.8l0.2-1.7l-1.7-2l-0.2-0.8 l0.5-0.5l2.7,1.7l0.8-2l1.8-1.8l0.3-2l-0.3-2.3l0.2-1.2l0.3-1.7l1.3,1.8h0.7l2-0.3l2-0.2l2.7-0.8L748.3-155.2z" }), /* @__PURE__ */ E.createElement("path", { d: "M728.8-151.9c-1.4-4-4-5.2-7.7-4.9c-2.9,0.3-5.8,0.1-8.7,0.1l-2.2,0.5l-1.3,0.7c0,0.2,0,0.4,0,0.5c-0.5,3.2-0.4,6.7-1.8,9.4 c-1.5,3-4.5,5.3-6.8,7.8c-0.2,0.2-0.6,0.3-0.8,0.2c-0.6-0.3-1.3-0.5-2-0.6c-0.4,0.5-0.7,0.9-1.1,1.4c0.6,0.1,1.2,0,1.9-0.1 c1.7-0.4,2.3,0.8,2.9,2c0.9,1.8,0.3,0.6,1.3,2.7c-1.1,1.1-2.5,2.3-3.8,3.5c0.1,0.2-2.7,1.3-2.6,1.5c3.2,0,6.5,0,9.7,0 c4.7,0,15.1,0.1,22.6,0.2l-0.5-1.2l-1.3-1.5l1.7-1.8l-1.3-1.7l-0.3-3.3l-0.2-2.8l0.4-0.3c0.1-1.7,0.7-3.2,2-5.6 C726.4-147.5,727.1-149.9,728.8-151.9z" }), /* @__PURE__ */ E.createElement("path", { className: "st0", d: "M515.9-114.7c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0-0.1-0.1-0.1-0.2c0.1,0,0.2-0.1,0.2-0.1 C515.9-114.8,515.9-114.7,515.9-114.7z" }), /* @__PURE__ */ E.createElement("path", { d: "M601-94.1l0.6-0.7c-0.5,0-0.9,0.2-1.3,0.4L601-94.1z" }), /* @__PURE__ */ E.createElement("path", { d: "M660.2-98.3l-0.2-0.8h-0.6C659.7-98.8,659.9-98.6,660.2-98.3L660.2-98.3z" }), /* @__PURE__ */ E.createElement("polygon", { points: "653.2,-131.9 653.2,-131.9 653.2,-131.9 " }), /* @__PURE__ */ E.createElement("path", { d: "M605.2-133.9c0,3.5,0.2,4.9-0.7,5.4c0.4,0,0.9,0,1.3,0c0.4,0,0.7,0,1.1,0c2.8,0,4.3,0.1,5.1-0.2l22.7,0.1c0,0,0,0,0,0.1 c1,0.1,1.8,0.4,2.3,1.7c0.2,0.5,1.5,0.9,2.3,1c3.3,0.1,6.6,0,9.9,0.1c1.9,0,3.8,0,5.6,0c0.7,2.5,1.3,3,2.7,2.6 c1.6-0.5,3.8-4.5,3.2-6c-0.8-1.9-1.4-3.9-3.3-5.2c-0.7-0.4-1.2-1.7-1.1-2.5c0.3-1.6-0.3-2.4-1.5-3.4c-1.5-1.4-3.3-3.2-3.5-5 c-0.2-2.2,1.2-4.5,2-6.8c0.1-0.3,0.6-0.4,0.9-0.6c2.8-1.8,2.9-3.2,0.8-5.9c-1-1.2-2.1-2.6-2.4-4c-0.4-1.7-1.2-2.3-2.8-2.3 c-6.4,0-12.7,0-19.1,0c-1.4,0-2.3,0.4-2.4,1.9c0,0.4-0.1,0.8-0.3,1.1c0,0.4,0,0.3,0,1.4c-1.7-0.8-3-0.6-4.4-0.9 c-0.4-0.1-0.9-0.2-1.3-0.2c-0.1,0-0.2,0-0.4,0c-7.7-0.2-15.3-0.4-23-0.6c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.7,0 c-1,0.1-1.5,0.8-1.5,1.9c0,1.4,0,0.9,0,2.3c0,4.3-0.2,5.6,1.5,6c0.2,0,0.3,0,0.5,0c1.3-0.1,2.6,0,3.9,0c1,0,1.6,0.3,1.9,0.9 c0.8,0.9,0.9,2.4,1,4.1C605.2-142.5,605.2-138.2,605.2-133.9z" }), /* @__PURE__ */ E.createElement("path", { d: "M643.9-93c0.3-0.8,0.3-1.3,0.5-1.6c1.6-2.2,1.2-5.6,0.7-8.3c-0.4-2.3-0.1-4.7,1.5-6.9c1.6-2.1,2.5-4.8,3.8-7.2 c0.7-1.3,0.3-2-1.1-2.4c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0.1-1.9-1.1-2.2-2.7-2.2c-4.6,0-9.2-0.1-13.8,0c-0.5,0-0.9,0-1.2-0.1 c-1.2-0.3-1.9-1.1-1.9-2.8c-0.3,0-0.7,0-1.1,0c-2.2,0-4.4,0-6.6,0c0,0.1,0,0.2,0,0.3l-22.7-0.1c0.1,0,0.1-0.1,0.2-0.1 c-9.3,0-18.6,0-27.9,0c-3,0-3.4,0.4-3.4,2.9c0,8.1,0,16.3,0,24.4c0,0.3,0.1,1.7,0.3,3.2h7l-0.3-1.3h6.7l2.7,1.5l1.5,1.5l3.8,2.7 l1.3,4.8l3.8,2l1.6,0.7c0.4-0.2,0.8-0.4,1.3-0.4l2.6-3.1l4.2,0.5l1.7,1.3l4.5,7.3l1.5,1.8l1.2,4.2l8.8,3.5l-0.3-3l-0.3-4.2l2.8-3.3 l-0.5-1l2.8-2.3l1.5,0.8l2.5-2.8l1.5-2h2.2l4.8-1l3.5,1.5h2.7l1-1.2l1.2,0.8l0.2,1.5l3.5,1.2l3.3-0.5l2.8,0.2l-2.3-1.8l-0.2-1 l1.5-0.8c-0.2-0.3-0.5-0.6-0.7-0.9h-1.7l-2.7,0.3l1.7-1.5l0.8-1l0.4,0.4c-1.7-2-3.1-3.8-3.4-4.3C648.8-92.8,646.5-92.9,643.9-93z" }), /* @__PURE__ */ E.createElement("path", { d: "M751-164l1.8-0.5l1.5-1l3.5,0.8c0,0,1.5,0.8,1.7,0.3s0.7-1.8,0.7-1.8l-1.2-1.3l-0.5-2l0.3-3.3l0.3-2.7l1.5-2l0.3-0.8l1,0.5 l3.2-3.5h1.2l2.7-0.3l0.8-1.7h2.3l2-1.7l-0.8-0.9l-0.9-2.2l-1-0.8l0.4-5.6l-0.5-5.1l-3-0.9l-2.6,0.9l-1.4-0.2l-5.8,13.4l-2.7,0.2 l-1.2,1l-8.7-0.1l0.5,22.1l1.7-0.4L751-164z" }), /* @__PURE__ */ E.createElement("path", { d: "M1036.5-111.8c1.7,0.5,2.2,1.4,1.4,3c-1.5,3-2.7,6.3-4.6,9c-2,2.8-2.4,5.8-1.9,8.7c0.6,3.5-0.2,6.3-2.1,9 c-0.3,0.4-0.3,1-0.7,2.1c3.2,0.2,6,0.3,8.5,0.4c0.9,1.7,1.5,3.3,2.5,4.5c1.1,1.2,3.2,1.4,2.7,4c-0.7-0.1-1.3-0.2-2-0.3 c0,0.4,0,0.7,0,0.9c0.2,1.1,1.1,2.5,0.6,3.2c-0.9,1.4-2,0.4-3.1-0.3c-0.6-0.3-1.7,0.1-2.5,0.3c-2.4,0.7-4.4,0.2-6.8-1 c-3-1.5-6.3-2.4-9.6-2.7c-2.8-0.3-5.5,1-7.8,2.8c-2.1,1.7-4.5,3-6.8,4.5c-5.7,3.8-6.8,6.7-5.6,11.2c1,3.8-0.2,4.6-4,3.7 c-4.5-1.1-7.9-3.1-8.9-8.1c-0.2-1.1-1.4-2-2-3.1c-1.3-2.1-2.4-4.4-3.9-6.3c-1.3-1.7-2.8-3.3-4.5-4.5c-2.2-1.5-4.3-0.7-5.9,1.5 c-2,2.9-2,2.8-5.4,1.5c-2.9-1.2-4.9-2.8-5.8-6.1c-1.2-4.4-8.7-9.4-13-9.4c-1.6,0-3,0.3-4.2,1.6c-0.7,0.8-2.5,1-3.7,0.7 c-0.6-0.1-1.2-1.8-1.2-2.8c-0.1-10.2-0.1-20.5,0-30.7c0-3.2,0.6-3.7,4.3-3.7c12.5,0,25,0,37.6,0c8.2,0,7.3,0.8,7.4-7.3 c0-5.5,0-10.9,0-16.4c0-3.2-0.4-3.6-3.5-3.6c-8.1,0.1-7.4,0.3-7.4-7.8c0-1.8,0-3.6,0-5.5c0-1.7,0.9-2.5,2.5-2.5 c9.8,0.2,19.5,0.5,29.3,0.7c1.9,0.1,3.8,0.2,5.8,0.4c1.6,0.1,2-0.9,2-2.1c0.1-2,1.3-2.4,3-2.4c7.9,0,15.7,0,23.6,0 c2,0,3,0.7,3.5,2.9c0.4,1.8,1.8,3.5,3,5.1c2.6,3.4,2.4,5.2-1,7.5c-0.4,0.2-1,0.4-1.1,0.7c-0.9,2.8-2.7,5.8-2.4,8.5 c0.2,2.2,2.5,4.5,4.3,6.3c1.4,1.3,2.2,2.3,1.8,4.3c-0.2,1,0.5,2.5,1.3,3.1c2.4,1.6,3.2,4.1,4.1,6.5c0.7,1.9-2,7-4,7.6 c-1.8,0.5-2.5-0.1-3.3-3.2c-2.2,0-4.6,0-6.9,0c-4.1,0-8.2,0.1-12.3-0.1c-1,0-2.6-0.5-2.8-1.2c-0.8-2.2-2.4-2.2-4.1-2.2 c-2.7,0-5.4,0-8.2,0c0,3,1.2,4.2,3.9,4.1c5.7-0.1,11.4,0,17.1,0C1035.1-114.6,1036.6-114.2,1036.5-111.8L1036.5-111.8z  M1010.6-142.5c0,3.7,2.8,6.7,6.3,6.6c3.1,0,6.5-3.3,6.6-6.3c0.1-3.7-3-6.6-6.8-6.5C1012.7-148.7,1010.6-146.5,1010.6-142.5z  M987.2-75.6c3.4,0,6.1-2.8,6.2-6.3c0.1-3.6-2.7-6.6-6.3-6.7c-3.8-0.1-6.5,2.7-6.6,6.7C980.6-78.4,983.5-75.6,987.2-75.6z" }), /* @__PURE__ */ E.createElement("path", { d: "M1001.9-161.7c-2.1-1-3.6-2-5.3-2.4c-2.7-0.6-5.5-1-8.3-1c-7.5-0.1-15-0.1-22.5,0c-3.2,0-3.5,0.3-3.6,3.5c0,2,0.1,4.1,0,6.1 c-0.1,2.6,1.1,3.5,3.5,3.3c1.6-0.1,3.2,0,4.8,0c1.9,0,2.7,0.9,2.7,2.7c0,7.6,0,15.2,0,22.9c0,2.4-1.4,3.1-3.5,3.1 c-6.7,0-13.4,0-20.1,0c-11.9,0-23.9,0-35.8,0c-4.6,0-4.7-0.1-4.7-4.5c0-9.2,0-18.4,0-27.7c0-3.8,0.2-4,4.1-4c3,0,5.9,0,8.9,0 c1.4,0,2.6-0.4,2.6-2c0-5,0.8-10-1.1-15.3c-2,0.3-4,0.5-6,1c-1.6,0.4-2.6,0.2-3.4-1.3c-0.9-1.7-1.9-3.3-3.1-4.8 c-0.6-0.8-1.6-1.5-2.5-1.7c-1.5-0.4-2.5-1.2-2.1-2.6c1.7-5.1-1.7-8.1-4.4-11.3c-3-3.6-4.3-7.6-3.9-12.3c0.2-1.9,1-2.9,3-2.9 c0.7,0,1.4,0,2,0c30.3,0,60.5,0,90.8,0c4.7,0,4.9,0.3,4.7,5.1c0,0.6,0,1.1,0.1,1.7c1,5,2,10,3,15c0.1,0.3,0.2,0.7,0.2,1 c-1.2,4.3,1.1,8.3,0.8,12.6c-0.3,4.2-0.4,8.4-0.5,12.6C1001.8-164.1,1001.9-163.2,1001.9-161.7z M944.5-172.6c3.5,0,6.5-2.8,6.4-6 c-0.1-3.2-3.4-6.7-6.5-6.8c-3.4-0.1-6.2,3-6.3,6.7C938.2-174.7,940.3-172.6,944.5-172.6z" }), /* @__PURE__ */ E.createElement("path", { d: "M1096.2-159.6c5.4,5.3,9.4-0.5,14.3-0.8c0.2,1.3,0.6,2.5,0.4,3.6c-0.6,4-0.5,8.4-2.3,11.9c-1.9,3.8-5.5,6.6-8.4,9.9 c-0.2,0.2-0.7,0.4-0.9,0.3c-3.3-1.9-8,0-10.3-4.5c-2.5,2.4-4.5,4.8-7,6.4c-2,1.3-4.6,2.1-6.9,2.1c-2.6-0.1-4.1,0.4-5,2.8 c-0.5,1.3-5,3.3-6.2,2.7c-0.7-0.3-1-1.4-1.4-2.1c-0.7-1.2-1.1-2.5-2-3.4c-2.7-2.7-2.8-2.6-2.4-6.1c-2.1-2.7-4.3-5.2-6-7.9 c-1.3-2-0.2-4.2,0.8-6.1c0.5-1,1.1-2,1.1-3.1c0.1-1.5,0.7-2.4,2.1-3.1c2.4-1.3,2.7-3.2,0.9-5.3c-1.6-2-3.6-3.7-3.9-6.6 c-0.1-0.6-2.2-1.4-3.4-1.4c-6.6-0.1-13.2-0.1-19.8-0.1c-4.3,0-4.4-0.1-4.4-4.4c0-2.6,0.5-5.4-0.1-7.8c-1.5-6.2-0.7-12.6-2-18.8 c-0.7-3.1-1.4-6.2-1.7-9.4c-0.3-3.5,0.1-3.9,3.7-4c1.3,0,2.5,0.2,3.7-0.1c1.1-0.2,2.3-0.7,3.2-1.4c1.8-1.5,2.6-1.4,3.4,0.8 c1.1,3.1,2.7,4.7,5.5,4.3c3.8-0.6,6.5,1.4,9.4,3.1c1.2,0.7,2.2,1.3,3.7,0.6c0.8-0.4,2,0,3,0.1c3.7,0.4,7.4,2.7,11.1-0.5 c-0.3,2.5-1.6,4-3.6,3.8c-5.5-0.5-9,2.1-12.3,6.7c2-0.6,3.5-1,5.6-1.6c-0.2,1.6-0.2,2.5-0.3,3.5c0.3,0,0.7,0,0.9-0.1 c2.9-1.7,5.9-3.3,8.8-5.1c2.2-1.3,2.4-1.3,5.7,0c-1.3,0.7-2.3,1.2-3.3,1.7c1.7,1.6,2.7,2.8,4,3.6c0.7,0.5,1.9,0.7,2.8,0.6 c1.5-0.1,2.9-0.5,4.3-0.9c4.2-1.2,7.5,0.3,10.5,3.3c0.9,0.9,2.1,1.3,3.2,2c0,0.3-0.1,0.5-0.1,0.8c-1.2,0.4-2.4,0.9-3.9,1.4 c1.8,1.6,4.2,2.9,5,4.7c0.8,2,0,4.6-0.1,7c4.9,2.5,6.2,9.4,2.5,13.8C1097.3-161.8,1096.8-160.6,1096.2-159.6z M1081.3-188.4 c-0.2-0.1-0.5-0.2-0.7-0.3c-0.5,0.4-1.1,0.7-1.5,1.2c-4.2,5.5-6.6,11.8-7,18.7c-0.2,2.8,0.3,5.6,1,8.3c0.6,2.1,2.3,2.5,3.6,0.9 c1.9-2.3,3.8-5,2.4-8c-2.6-5.7,0.4-10.8,1.3-16.1C1080.7-185.2,1081-186.8,1081.3-188.4z M1072.1-143.3c3.8,0,6.8-2.9,6.7-6.6 c-0.1-2.9-3.5-6.3-6.5-6.3c-3.6,0-6.4,2.7-6.5,6.4C1065.9-146,1068.5-143.3,1072.1-143.3z M1083.4-185.8c0.2,0.2,0.4,0.4,0.6,0.5 c0.3-0.4,0.5-0.9,0.8-1.3c-0.1-0.1-0.3-0.2-0.4-0.3C1084.1-186.5,1083.7-186.2,1083.4-185.8z" }), /* @__PURE__ */ E.createElement("path", { d: "M867.8-95.4c-1.5-2.9-4.1-2.2-6.5-2c-1.6,0.1-3.3,0.9-4.8-1.1c1.4-0.4,2.7-0.7,3.9-1.1c0-0.1,0-0.2,0.1-0.3 c-0.8-0.1-1.6,0-2.4-0.3c-0.8-0.3-2.1-0.8-2.1-1.3c-0.3-3.9-3.8-5.8-5.3-8.9c-1.5-3.3-3.2-6.5-4.9-9.7c-0.5-0.9-1.2-1.8-1.8-2.7l0,0 c-1.1-1.8-2.2-3.7-3.2-5.5c-0.6-1-1.3-1.9-1.6-3c-0.7-2.6-0.9-5.3-2.8-7.5c-0.7-0.7-0.2-2.6-0.1-3.9c0.2-2.1,0.8-4.3,0.5-6.3 c-0.3-2.3,0.4-3.2,2.6-3.2c3.9,0,7.7,0,11.6,0c11.9,0,23.9,0,35.8,0c4.1,0,4.3,0.2,4.3,4.2c0,8.5,0,17.1,0,25.6 c0,4.2,0.1,4.3,4.5,4.4c6,0,12.1,0,18.1,0c3.5,0,4,0.5,4,3.9c0,9.9,0,19.8,0,29.7c0,3.4-0.5,3.8-4,4c-4.6,0.2-9-0.4-13.2-2.4 c-4.9-2.3-10.1-4.2-15.1-6.1c-1-0.4-2.2-0.2-3.3-0.2c-1.7,0.1-3.4,0.3-5.1,0.4c-2.3,0.2-3.9-0.5-4.3-3.1 C872.1-94.3,870.1-95.1,867.8-95.4L867.8-95.4z M878-118.2c-0.1-3.7-2.9-6.7-6.3-6.5c-3.1,0.1-6.4,3.4-6.4,6.4 c0,3.4,3.2,6.5,6.7,6.4C875.5-111.9,878.1-114.6,878-118.2z" }), /* @__PURE__ */ E.createElement("path", { d: "M1092.1-112.5c3.7,0,7.3,0,11,0c7.2,0,14.3,0,21.5,0c3.6,0,7.7,5.7,5.8,8.6c-1.4,2.2-4,4.2-6.5,5c-4.3,1.4-4.4,1-6.6,4.9 c-3-0.3-5,1.1-6.5,4c-0.9,1.8-3,3.1-4.9,4.1c-5.3,2.8-7.8,10.9-5.1,17.4c2,4.9,4,9.9,5.6,14.9c1.1,3.5,0.9,7.3-1,10.6 c-0.5,0.8-1.7,1.6-2.6,1.6c-1.2,0.1-2.5-0.2-3.2-1.9c-0.8-1.9-2.5-3.4-3.7-5.1c-1.6-2.6-3.3-5.1-4.5-7.9c-0.6-1.2-0.5-2.9-0.1-4.3 c0.5-2,0.2-3.5-1.4-4.9c-0.8-0.6-1.3-1.6-2-2.4c-2.2-2.9-2.2-2.9-5.4-1.1c-2.5,1.4-3.7,1.3-5.4-1.1c-2.2-2.9-5.2-2.3-8.1-2.2 c-3.7,0.1-7.5,0.2-11.2,0.4c-1.6,0.1-2.8-0.4-3.1-1.9c-0.6-2.5-2.3-2.7-4.4-2.7c-6.3,0-6.4-0.5-3.8-6.3c0.6-1.4,0.8-3.1,0.6-4.6 c-0.5-3.8-0.2-7.2,2.1-10.7c2.5-3.8,3.9-8.4,6.1-12.5c1.4-2.7,2.2-6.1,5.9-6.9c0.1,0,0.2-0.1,0.3-0.2c2.5-5,7.8-3.6,11.8-5.2 c0.6-0.3,1.4-0.3,1.8-0.7c1.9-1.8,3.8-3.6,5.7-5.4c1.1-1.1,2.4-0.9,3.3,0.2c1.5,1.9,3.4,2.6,5.7,2c1.9-0.4,2.6,1,3.3,2.3 c1,2.1,2,4.3,3.1,6.7c-1.3,1.2-2.8,2.6-4.3,4C1091.9-113.1,1092-112.8,1092.1-112.5z M1093.3-87.9c3.8,0.1,6.6-2.5,6.8-6.1 c0.1-3.1-3.3-6.7-6.4-6.8c-3.1,0-6.5,3.5-6.5,6.7C1087.1-90.3,1089.4-88,1093.3-87.9z" }), /* @__PURE__ */ E.createElement("path", { d: "M890-189.7c2.1-0.7,3.2,0.2,3.9,2c0.4,0.9,1,1.8,1.5,2.7c2.6,4.5,4.6,5,9.2,2.2c0.3-0.2,0.6-0.2,1.6-0.6 c0.7,1.6,1.8,3.1,1.9,4.8c0.3,4.7,0.1,9.3,0.1,14c0,2.3-1.2,2.9-3.2,2.9c-5.9,0-11.8,0-17.7,0c-14.9,0-29.8,0-44.7,0 c-5.4,0-7.4-2.4-6.3-7.9c0.3-1.7,1.2-3.2,1.4-4.9c1.6-9.2,2.3-18.5-0.3-27.7c-0.4-1.4-1.1-2.7-1.5-4.1c-0.4-1.5-0.5-3.1-0.8-4.8 c3.5,0.4,6.2,0.8,9.2,1.2c-0.3-1.6-0.9-2.9-0.6-3.8c0.7-1.9,1.5-3.4,4.3-3.3c9.7,0.3,19.3,0.1,29,0.1c4.4,0,4.5,0.1,4.5,4.4 c0,4.4,1.4,8.1,4.8,11.1c1.3,1.2,2.5,2.6,3.6,4c0.4,0.5,0.5,1.4,0.5,2.2C890.3-193.6,890.1-191.8,890-189.7z M859.1-184.3 c3.5,0.1,6.4-2.8,6.5-6.5c0.1-3.2-3-6.3-6.4-6.3c-3.5,0-6.3,2.7-6.4,6.2C852.7-187.3,855.4-184.4,859.1-184.3z" }), /* @__PURE__ */ E.createElement("path", { d: "M1148.2-153.8c-2.2,2.4-3.1,5.3,0,7.9c-4.1,4.1-3.8,4-2.1,9.9c0.5,1.8-0.4,4.2-1.1,6.1c-1.1,2.9-2.6,5.6-4.3,9.2 c-12.6,0-26.3,0-39.9,0c-0.1-0.3-0.1-0.6-0.2-0.9c2.2-1.8,4.5-3.7,6.8-5.5c0-0.2,0.1-0.4,0.1-0.6c-0.6-1.8-2.2-4.2-1.6-5.3 c1.7-3,4.1-5.7,6.6-8c1.3-1.2,2.6-2.2,2.8-4c0.4-3.6,0.9-7.2,1.1-10.8c0.3-4.1,2.5-5.7,6.4-4.2c0.9,0.3,2,0.3,3,0.3 c4.2,0,8.4,0.3,12.6-0.1C1143.1-160.1,1146.4-158.7,1148.2-153.8z M1121.3-142.6c-0.1,3.7,2.6,6.6,6.2,6.8c3.1,0.1,6.7-3.3,6.7-6.4 c0-3.5-2.7-6.3-6.2-6.4C1123.9-148.8,1121.3-146.5,1121.3-142.6z" }), /* @__PURE__ */ E.createElement("path", { d: "M697.2,39.4c1.3-2,2.2-0.8,2.4,0.5c0.3,1.6,0.1,3.3,0.1,5.3c-3.5,0.1-6.7-1.1-10,0.1c-3.2,1.1-6.7,1-10.5,1.5 c0.5-3.8,1.2-7.6,1.6-11.5c0.3-2.6,0.3-5.2,0.3-7.8c0-3.3-0.2-6.6-0.2-9.9c0-2,1.2-2.7,3.1-2.8c2.2-0.2,4.5-0.5,6.7-1 c3.9-0.8,5.4-3.7,6.4-7.1c1.3-4.1,2.9-8.1,5.5-10.9c2.2,0.1,4-0.2,5.4,0.4c1.4,0.6,2.4,2.1,3.4,3.4c0.4,0.5,0.3,1.6,0.2,2.3 c-0.5,4.6,0.7,8.6,3.1,12.5c1.4,2.3,1,4-1.3,5.2c-4.2,2.2-7.4,6.6-12.8,6.6c-0.4,0-0.8,0.4-1.2,0.6C696.3,29.1,695,36.2,697.2,39.4 L697.2,39.4z M693.2,27.7c3.8,0,6.7-2.7,6.6-6.3c-0.1-3.6-3-6.5-6.5-6.5c-3.1-0.1-6.8,3.5-6.8,6.5C686.5,24.9,689.5,27.7,693.2,27.7 z M698.2,42.9c-0.1-0.1-0.3-0.1-0.4-0.1c0,0.1,0,0.2,0.1,0.2C698,43,698.1,43,698.2,42.9z" }), /* @__PURE__ */ E.createElement("path", { d: "M817.2-217c-1.4,0.1-2.8,0.3-4.6,0.5c1.2-3.7,2.2-7,3.3-10.4c0.4,0.3,0.2,0.1,0,0c-1.4-0.4-2.9-0.7-4.3-1 c0.8-1.1,1.6-2.3,2.5-3.4c0.5-0.6,1-1.2,1.6-2c-2.3-2.2-1.3-3.9,0.8-5.6c1.1-0.9,1.5-2.6,2.5-3.6c2.6-2.4,5-5.3,9.2-5 c1.8,0.1,3.8-0.8,5.6-1.2c2.9-0.7,3.7-0.2,3.9,2.8c0.4,4.3,0.6,8.6,1.2,12.9c0.4,2.9,2.1,3.8,4.9,2.9c0.2-0.1,0.4-0.2,0.6-0.3 c1.4-0.2,8,4.8,8,6.2c0,0.8-0.7,2-1.4,2.3c-0.8,0.4-2.3,0.5-3,0.1c-1.3-0.8-2.4-2.1-3.6-3.1c-2-1.9-4.3-3.1-7.1-2 c-3.5,1.4-7.2,2.4-8.1,7.2c-0.4,2.4-2.8,4.4-4.4,6.6c-0.7,1-1.6,1.9-2.5,2.8c-0.4,0.4-0.7,1-1.1,1.1c-2.8,0.9-4.5,3.3-6.6,5.1 c-3.5,3.2-7.4,6-11.1,8.9c-0.4,0.3-0.9,0.4-1.7,0.2c1.4-3.1,4.9-3.7,7.1-5.9c2.4-2.3,4.6-5,6.8-7.6c2.1-2.4,4.1-5,6.2-7.5 C820-216.3,818.6-216.7,817.2-217L817.2-217z" }), /* @__PURE__ */ E.createElement("path", { d: "M1160.2-159.9c3-1,5.6-1.8,8.2-2.7c0.9,1.3,0.6,2.4-0.8,3c-1.8,0.9-3.6,2-5.6,2.4c-2.6,0.6-3.9,1.7-4.3,4.4 c-0.6,3.4-1.9,5-5,7.6c-4.9-3.8-4.9-4.5-0.5-9.4c-1.4-2.2-1.5-4.4-0.5-7c1-2.7-0.8-4.9-3.9-4.9c-5.2-0.1-10.5,0-15.7-0.1 c-0.9,0-1.8,0.1-2.7-0.1c-0.8-0.2-2.1-0.5-2.2-1.1c-0.2-0.8,0-2.2,0.6-2.7c1.7-1.6,3.4-2.9,2.9-5.7c-0.1-0.5,1.5-1.7,2.5-1.8 c1.6-0.3,3.4-0.2,5.1,0.1c2.4,0.5,4.5,0.2,6.2-1.6c-0.4-4.8,4.4-10.4,9.3-11c0.2,0,0.5,0,0.7,0c7.2-0.4,6.6-0.4,7.4,6.7 C1162.6-175.9,1160.7-168.4,1160.2-159.9z M1159.5-176.2c0-3.6-2.5-6.4-6-6.5c-3.6-0.1-6.8,2.9-6.9,6.5c-0.1,3.3,2.8,6.2,6.3,6.3 C1156.6-169.8,1159.4-172.6,1159.5-176.2z" }), /* @__PURE__ */ E.createElement("path", { d: "M680.1,64.9c4.5-1.6,8-0.9,11.5,0c0.4,0.1,1.1,0.8,1,1.1c-0.1,0.6-0.5,1.3-1,1.6c-2.8,1.7-6,2.2-9.1,1.5 C681.5,68.8,681,66.6,680.1,64.9z" }), /* @__PURE__ */ E.createElement("path", { d: "M839.7-93.2c-2.3-3.7-2.9-6.7-0.6-10.1c0.6,0.3,1.2,0.5,1.5,0.8c1.4,1.5,4,3.4,3.8,4.6C844.1-96.1,841.5-94.8,839.7-93.2z" }), /* @__PURE__ */ E.createElement("path", { d: "M834.3-105c-1.1-0.9-2.3-1.7-3.6-2.8c2.6-1.4,6.7-0.5,7.5,1.4c0.2,0.5-0.2,1.5-0.7,1.9C836.4-103.5,835.2-103.8,834.3-105 L834.3-105z" }), /* @__PURE__ */ E.createElement("path", { d: "M830.3-109.8c-1.1,0.6-1.9,1.3-2.2,1.1c-0.7-0.4-1.4-1.2-1.7-1.9c-0.1-0.3,0.8-1,1.3-1.6 C828.4-111.5,829.2-110.8,830.3-109.8z" }), /* @__PURE__ */ E.createElement("path", { d: "M821.8-114.3c-1,0.7-1.6,1.4-2.2,1.4c-0.5-0.1-0.9-0.9-1.4-1.4c0.5-0.5,1-1.2,1.6-1.3C820.3-115.7,820.8-114.9,821.8-114.3z " }), /* @__PURE__ */ E.createElement("path", { d: "M808.8-223.3c1-0.1,1.9-0.2,2.9-0.3c0,0.4,0.1,0.8,0.1,1.2c-1,0.1-1.9,0.2-2.9,0.3C808.9-222.6,808.8-223,808.8-223.3z" }), /* @__PURE__ */ E.createElement("path", { d: "M817.2-113.4c-0.7,0.7-1.5,1.4-2.2,2c-0.2-0.2-0.5-0.4-0.7-0.7c0.7-0.8,1.3-1.5,2-2.3C816.6-114,816.9-113.7,817.2-113.4z" }), /* @__PURE__ */ E.createElement("path", { d: "M867.8-95.4c0.2,0.6,0.3,1.2,0.5,1.8c-0.2,0.1-0.3,0.3-0.5,0.4c-0.5-0.4-1-0.8-1.5-1.2C866.8-94.8,867.3-95.1,867.8-95.4 L867.8-95.4z" }), /* @__PURE__ */ E.createElement("path", { d: "M867.4-90.1c-0.4-0.5-0.8-1-1.3-1.5c0.2-0.2,0.4-0.4,0.6-0.6c0.5,0.4,1,0.9,1.4,1.3C867.9-90.6,867.7-90.4,867.4-90.1z" }), /* @__PURE__ */ E.createElement("path", { d: "M808.7-215.6c-0.4,0.1-0.7,0.3-0.9,0.3c-0.1,0-0.4-0.4-0.4-0.4c0.1-0.2,0.4-0.5,0.5-0.5C808.1-216.3,808.3-216,808.7-215.6z " }), /* @__PURE__ */ E.createElement("path", { d: "M810.7-210.2c0.2,0.1,0.3,0.2,0.5,0.4c-0.2,0.2-0.3,0.4-0.5,0.5c-0.1-0.2-0.3-0.3-0.3-0.5 C810.3-209.9,810.5-210.1,810.7-210.2z" }), /* @__PURE__ */ E.createElement("path", { d: "M678.1,67.1c0.2,0.1,0.4,0.2,0.5,0.3c-0.1,0.1-0.2,0.3-0.4,0.4c0,0-0.3-0.1-0.3-0.1C678,67.5,678.1,67.3,678.1,67.1z" }), /* @__PURE__ */ E.createElement("path", { d: "M861.6-93.6c0.1,0,0.2,0.1,0.3,0.1c0,0.1-0.1,0.2-0.1,0.3c-0.1,0-0.2-0.1-0.3-0.1C861.4-93.4,861.5-93.5,861.6-93.6z" }), /* @__PURE__ */ E.createElement("path", { d: "M864.6-94.7c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.1-0.2-0.1-0.3c0.1,0,0.2-0.1,0.3-0.1C864.5-94.9,864.5-94.8,864.6-94.7z" }), /* @__PURE__ */ E.createElement("path", { d: "M843.9-122.8C843.8-122.6,843.7-122.4,843.9-122.8C843.7-122.4,843.8-122.6,843.9-122.8L843.9-122.8z" }), /* @__PURE__ */ E.createElement("path", { d: "M1016.1-140.4c-0.2-1.6-0.5-3.2-0.8-5.2c1.2,0,2.3,0,4,0c-1,2-1.8,3.7-2.5,5.3C1016.5-140.3,1016.3-140.4,1016.1-140.4z" }), /* @__PURE__ */ E.createElement("path", { d: "M990.2-82.3c-1.3,1.2-2.1,2.6-3.1,2.7c-1.7,0.2-2.6-1.2-2.4-2.9c0.2-1.6,0.8-3.2,2.6-2.9C988.3-85.2,989-83.7,990.2-82.3z" }), /* @__PURE__ */ E.createElement("path", { d: "M946.5-178.3c0,1.6-0.7,2.7-2.3,2.6c-1.8-0.1-2-1.6-1.9-3c0-1.4,0.1-2.9,1.9-3C946.5-181.8,946.3-179.9,946.5-178.3z" }), /* @__PURE__ */ E.createElement("path", { d: "M1069.2-149.9c1.5-1.5,2.4-2.4,3.3-3.3c0.7,1.3,1.6,2.7,1.8,4.1c0.1,0.6-1.6,2.1-2.1,1.9 C1071.3-147.5,1070.5-148.6,1069.2-149.9z" }), /* @__PURE__ */ E.createElement("path", { d: "M875-118.5c-1.5,1.5-2.3,3.1-3.3,3.2c-2.3,0.2-1.8-2.1-2.1-3.5c-0.3-1.4,0.4-2.7,1.9-2.5C872.6-121,873.4-119.7,875-118.5z" }), /* @__PURE__ */ E.createElement("path", { d: "M1091.3-93.9c0.9-1.1,1.9-2.2,3.1-3.7c1,2.2,1.9,3.9,0.5,5.4c-0.4,0.5-2.2-0.4-3.4-0.6C1091.5-93.1,1091.4-93.5,1091.3-93.9 z" }), /* @__PURE__ */ E.createElement("path", { d: "M857.9-191c1.5-1.3,2.3-2.5,3.4-2.8c0.4-0.1,1.9,1.4,2.1,2.3c0.3,1.6-0.4,3.4-2.3,3.3C860.2-188.2,859.4-189.7,857.9-191z  M861.6-191.1c-0.3-0.3-0.5-0.4-0.7-0.6c-0.1,0.2-0.4,0.3-0.3,0.5c0,0.3,0.2,0.5,0.4,0.8C861.1-190.6,861.3-190.8,861.6-191.1z" }), /* @__PURE__ */ E.createElement("path", { d: "M857.1-188.2c-0.5-0.9-0.9-1.3-0.9-1.6c0-1.2,0-2.5,0.1-3.8c0,0,1.1-0.1,1.1,0c0.3,1.3,0.5,2.5,0.5,3.8 C858.1-189.5,857.7-189.1,857.1-188.2z" }), /* @__PURE__ */ E.createElement("path", { d: "M1126.7-142.6c-0.2-0.9-0.4-1.8-0.4-2.7c0-0.2,1.5-0.7,1.7-0.4c0.6,0.6,1.1,1.5,1.3,2.4c0.2,0.7,0.2,1.9-0.2,2.2 c-0.7,0.5-2.1,1-2.8,0.7C1125.2-141,1125.4-142,1126.7-142.6c0.2,0.2,0.5,0.3,0.8,0.5C1127.2-142.3,1127-142.4,1126.7-142.6z" }), /* @__PURE__ */ E.createElement("path", { d: "M693,24c-0.4-1.3-1-2.6-1.2-4c-0.1-0.4,0.7-1.2,1.1-1.4c0.4-0.1,1.3,0.6,1.4,0.9c0.1,1.4-0.1,2.9-0.2,4.3 C693.7,23.9,693.3,23.9,693,24z" }), /* @__PURE__ */ E.createElement("path", { d: "M669.4,46.3c-1.3-0.4-3.2-0.7-3.2-1.1c-0.1-1.7-0.1-3.6,0.6-5c0.6-1.1,2.6-0.1,2.8,1.5C669.7,42.9,669.5,44.3,669.4,46.3z" }), /* @__PURE__ */ E.createElement("g", null, /* @__PURE__ */ E.createElement("g", null, /* @__PURE__ */ E.createElement("path", { d: "M61.7,77.2c0,3.3,0.1,3.4,3.6,3.4c9.3,0,18.6,0,27.9,0c5.2,0,10.5,0,15.7,0c1.7,0,2.8-0.5,2.8-2.3c0-5.8,0-11.5,0-17.3 c0-1.4-0.6-2.1-2.1-2.1c-1.2,0-2.5-0.1-3.7,0c-1.9,0.1-2.8-0.6-2.7-2.5c0.1-1.5,0-3.1,0-4.6c0.1-2.4,0.3-2.6,2.8-2.6 c5.8,0,11.7-0.1,17.5,0c2.2,0,4.3,0.3,6.5,0.8c1.3,0.3,2.5,1.1,4.2,1.8c0-1.2,0-1.9,0-2.5c0.1-3.2,0.2-6.3,0.4-9.5 c0.2-3.2-1.5-6.3-0.6-9.5c0.1-0.2-0.1-0.5-0.1-0.8c-0.8-3.8-1.6-7.5-2.3-11.3c-0.1-0.4-0.1-0.9-0.1-1.3c0-1,0.1-1.8,0-2.4 l-78.2,0.1c0,0.1-0.1,0.3-0.1,0.5c0.1,0.5,0.1,1.1,0.1,2c0,0.8,0.1,1.6,0.2,2.4c0.5,1.8,1.4,3.5,2.7,5.1c0.4,0.5,0.8,0.9,1.2,1.4 c0.8,0.8,1.6,1.6,2.3,2.5c0.3,0.4,0.4,1.1,0.4,1.6c0,1.3-0.2,2.7-0.3,4.2c0,0,0,0.1,0.1,0.1c1.6-0.5,2.4,0.2,2.9,1.6 c0,0,0,0,0,0.1c0.1,0.1,0.2,0.2,0.3,0.4c0.9,1.1,1.7,2.4,2.4,3.6c0.1,0.1,0.2,0.2,0.2,0.4c1.3,1,2.8,0.7,5.2-0.7 c0.2-0.1,0.5-0.2,1.2-0.4c0.1,0.3,0.3,0.7,0.5,1c0.1,0,0.1,0,0.2,0c0.1,0.4,0.3,0.8,0.4,1.2c0.2,0.5,0.3,0.9,0.4,1.4 c0,0.2,0,0.3,0,0.5c0.4,2.9,0.1,5.7,0.1,8.4c0,0.1,0,0.1,0,0.2c0,0.5,0,0.9,0,1.4c0,1.7-0.9,2.2-2.5,2.2c-3.2,0-6.4,0-9.6,0 c0,0.2,0,0.5,0,0.8C61.6,63.3,61.7,70.3,61.7,77.2z" }), /* @__PURE__ */ E.createElement("path", { d: "M180.3,79.4c0.9,0.5,4.3-1,4.7-2.1c0.7-1.8,1.9-2.2,3.9-2.1c1.8,0,3.8-0.6,5.3-1.6c1.9-1.2,3.4-3.1,5.4-4.9 c1.8,3.4,5.4,2,8,3.4c0.2,0.1,0.6,0,0.7-0.2c2.2-2.4,5-4.6,6.5-7.5c1.3-2.6,1.3-6,1.7-9c0-0.2,0-0.3,0-0.5l-3.2,1.6l-3.3,1.1 l-3.2,0.2l-1.9-1.4l1-1.7l0.5-0.5l0.6-1.7l1.2-0.7l1.5-2.6l-1.6-2.1l-0.3-3.3l-2.1-0.6l-2.7,1.9l1-2.2l1.6-2.2l-0.6-2.1l-0.5-2.4 l-2.5-1l-2.2-1.9l-2.7,1.1l0.2,2.1l-1.6,1.9l-1.3-0.6l-2.4,2.7v3.2l0.3,3.2l1.4,2.2l-0.2,4.8l-3,2.9l-2.2,0.2l-1.1-3.3l-1.1-2.4 l0.5-3.2l-0.5-3.2l1.1-2.1l0.6-2.1l1.1-3.5l-2.5,2.9l1.4-4.9l2.2-1.9l2.7-0.2l2.1-1h3.3h2.7l1.7-0.5l2.1,0.3l-1.3-1l-1.6-1 l-1.8-1.3l-1.8,0.6l-1.7-1.3l-4.1,0.2l-2.2,1.4l-1.7-1.1l-2.1-1.3l-3-0.2l3-4.3l-3.5,1.6l-2.9,2.2l-2.9,1.6l-2.5,0.3l-0.3-1.6 l-5.2,1.1l4.4-3.8l3.1-2.3l3.8-3l-1.6-0.2l-5.2,0.2l-2.4-0.5l-2.1-0.4l-2.1-1.5l-2.4,0.2l-4.5-1.1l-1.2-1.4l-0.6-2.2l-1.1-1 l0.1,1.2l-1.1,1.7l-8.1,0c0,0.3,0,0.6,0.1,1c0.2,2.4,0.8,4.7,1.3,7.1c1,4.7,0.4,9.5,1.5,14.2c0.5,1.9,0.1,3.9,0.1,5.9 c0,3.2,0.1,3.3,3.4,3.3c5.1,0,10.2,0,15.3,0.1c0.9,0,2.5,0.6,2.6,1.1c0.2,2.2,1.8,3.5,3,5c0.7,0.9,1,1.6,0.8,2.3 c0.5,1.4-0.1,2.5-2,3.7c-0.3,0.2-0.8,0.3-0.9,0.6c-0.7,2.1-2,4.4-1.9,6.5c0,0.1,0,0.2,0.1,0.3c1.1,1.7,2.4,3.2,3.7,4.8 c0.2,0.2,0.4,0.5,0.6,0.7c0.1,0.1,0.2,0.3,0.3,0.4c0,0.1,0,0.1,0,0.2c0.1,0.4,0.1,0.9,0,1.4c-0.1,0.4,0,0.8,0.2,1.3 c0.3,0.4,0.8,0.9,1.6,1.7c0.1,0.1,0.2,0.2,0.3,0.3c0.9,1,1.4,2.2,1.9,3.4C180,79.2,180.2,79.4,180.3,79.4z" }), /* @__PURE__ */ E.createElement("path", { d: "M36.7,51.3c-1.9,0-3.7,0-5.6,0c-0.7,0-1.4-0.1-1.9-0.2l0,0.2C31.7,51.3,34.2,51.3,36.7,51.3z" }), /* @__PURE__ */ E.createElement("path", { d: "M71.6,92.4c0-2.7-0.4-5-3.1-5c-4.6,0-9.3,0-13.9,0c-3.3,0-3.4-1.1-3.4-4.5c0-6.9,0-10.9,0-17.7c0-3.2-0.2-3.4-3.3-3.4 c-2.5,0-4.9,0-7.4,0c-7.2,0-14.4,0-21.6,0c-2.5,0-5,0-7.5,0l0.4,2.1l0.5,2.7l-0.6,3.7l0.5,2.5l1.1,2.5l1,3.2l0.8,2.1l3.3,2.7 l1.6-0.2l2.2,0.3l-2.4,0.6l0.6,1.1l-2.1,0.3l1.9,2.1l1.9,2.1l-0.6,1.7L24,95l2.7,2.2L27,100l2.2,1.1l3,1l2.4,2.1l2.1,1.3l2.2,1.7 l1.3,1l1.4,3.2l8.1-0.2l15.9,5.6h6c0-0.1,0-0.2,0-0.3C71.7,108.4,71.7,100.4,71.6,92.4z" }), /* @__PURE__ */ E.createElement("path", { d: "M199,90.2c-0.1-0.2,2.6-1.2,2.5-1.5c1.3-1.2,2.5-2.3,3.6-3.3c-0.9-2-0.4-0.8-1.2-2.5c-0.5-1.1-1.1-2.3-2.7-1.9 c-2,0.4-3.5-0.1-4.8-1.7c-0.8-0.9-1.8-1.1-2.7-0.2c-1.6,1.5-3.2,3-4.8,4.4c-0.4,0.3-1,0.4-1.5,0.6c-3.3,1.4-7.8,0.2-9.9,4.3 c0,0.1-0.1,0.1-0.2,0.1c-3.1,0.7-3.7,3.5-4.9,5.7c-1.8,3.3-3,7.1-5.1,10.2c-1.9,2.8-2.2,5.6-1.7,8.8c0.2,1.2,0,2.6-0.5,3.8 c-0.3,0.6-0.5,1.1-0.7,1.5c2.1,0.1,4,0.2,5.7,0.3c0.3,0.5,1.6,2.1,3.2,4.1l0.4,0.4l4.6-0.6l0.6,0.8h3.2l1.7-0.5l2.5-0.2l2.4,1 l1.4-0.2l1.4,2.1l2.9,0.2l1.6-1.3h1.6l3.2,2.7l1.7,1.9l0.5,2.5l-0.3,3.2l1.1,3.3l3,3.8l1.7,3.7l0.6,1.4l3.2-0.6l0.8-3.5v-5.2 l-1.6-4.3l-0.5-1.1l-0.3-3.2l-2.7-3.2l-0.5-3.8l0.2-3.2l1.3-3.5l2.4-1.9l-0.2-1.4l2.9-0.5l4.1-4.6l1.9-1.6l2.1,0.3l1.9-3.7 l2.7-1.4c0,0,2.1,0.3,2.2-0.5c0.2-0.8,2.2-4.6,2.2-4.6l-2.2-1.3l1.3-1.1l0.3-0.8l-0.8-2c-7.1-0.1-17-0.1-21.5-0.1 C205.1,90.2,202,90.2,199,90.2z" }), /* @__PURE__ */ E.createElement("polygon", { points: "202.6,31.5 203.4,29.3 200.7,29.6 199,29.4 197.7,28.5 198.7,30.1  " }), /* @__PURE__ */ E.createElement("path", { d: "M43.3,51.3c4.5,0,9.1,0,13.6,0c1.6,0,2.5-0.5,2.5-2.2c0-3.5,0.1-7.1-0.1-10.6c-0.1-1.2-0.9-2.4-1.4-3.6 c-0.7,0.2-1,0.3-1.2,0.4c-3.5,2.1-5,1.7-7.1-1.7c-0.4-0.7-0.9-1.3-1.1-2c-0.5-1.4-1.4-2.1-3-1.5c0.1-1.6,0.3-2.9,0.3-4.3 c0-0.6-0.1-1.2-0.4-1.6c-0.8-1.1-1.8-2.1-2.8-3c-2.6-2.3-3.7-5.1-3.7-8.4c0-1.2,0-2-0.2-2.5l-23.4,0l-0.6,0.9l0.3,2.1l1.6,3.3 l-0.8,3.5L14,17.9l-1.1-2.5l-2.5-0.5l-4-0.5H5.3l0.6,2.2l2.2,3.2V23l0.6,3.5l2.9,0.3l1.1,1.6l-3.5-0.5l-1.1,0.8L8.6,32L8,35.7 l0.2,4.3L7,42.8l-1.3,4.1l1,2.9L7,51.2c0.6,0.1,1.2,0.2,1.9,0.2C20.4,51.3,31.8,51.3,43.3,51.3z" }), /* @__PURE__ */ E.createElement("path", { d: "M260.5,59.5l-2.5,0.2l-2.4,0.6l-1.1,0.6l-0.2-1.1l0.8-1l0.4-0.1l-0.4-21.1l-5.2,0l-3.3,3.1l-2.1,1.3l-1,2.7l-0.5,1.4 l-2.4,1.6h-2.4l-1.7-0.8l-2.2,0.3l-2.9,1l0.2,1.4l-0.2,2.5l-1.4,1.3l-0.8,0.2c2.8,0.1,5.5,0.2,8.3-0.1c3.5-0.3,6,0.8,7.3,4.7 c-1.6,1.9-2.3,4.1,0,6.2c-1.2,2.3-1.8,3.7-1.9,5.3l0.6-0.5l0.6,4l0.5,1.9l1.1,1.7l-0.3,2.9l1.7-3.5l1.1-2.7l0.2-1.6l-1.6-1.9 l-0.2-0.8l0.5-0.5l2.5,1.6l0.8-1.9l1.7-1.7l0.3-1.9l-0.3-2.2l0.2-1.1l0.3-1.6l1.3,1.7h0.6l1.9-0.3l1.9-0.2l2.5-0.8L260.5,59.5z" }), /* @__PURE__ */ E.createElement("path", { d: "M239.1,62.7c-1.3-3.8-3.8-5-7.3-4.7c-2.7,0.2-5.5,0.1-8.3,0.1l-2,0.5l-1.2,0.6c0,0.2,0,0.3,0,0.5c-0.4,3-0.4,6.4-1.7,9 c-1.5,2.8-4.3,5-6.5,7.5c-0.1,0.2-0.6,0.3-0.7,0.2c-0.6-0.3-1.2-0.5-1.9-0.6c-0.4,0.4-0.7,0.9-1,1.4c0.6,0.1,1.2,0,1.8-0.1 c1.6-0.4,2.2,0.8,2.7,1.9c0.8,1.7,0.3,0.5,1.2,2.5c-1.1,1-2.4,2.2-3.6,3.3c0.1,0.2-2.6,1.2-2.5,1.5c3.1,0,6.1,0,9.2,0 c4.5,0,14.4,0.1,21.5,0.1l-0.5-1.2l-1.3-1.4l1.6-1.7l-1.3-1.6l-0.3-3.2l-0.2-2.7l0.4-0.3c0.1-1.6,0.7-3.1,1.9-5.3 C236.8,66.8,237.5,64.6,239.1,62.7z" }), /* @__PURE__ */ E.createElement("path", { d: "M36.3,98.1c-0.1,0-0.2,0.1-0.2,0.1c0,0-0.1-0.1-0.1-0.2c0.1,0,0.2-0.1,0.2-0.1C36.3,97.9,36.3,98,36.3,98.1z" }), /* @__PURE__ */ E.createElement("polygon", { points: "167.1,81.7 167.1,81.7 167.1,81.7  " }), /* @__PURE__ */ E.createElement("path", { d: "M121.4,79.8c0,3.3,0.2,4.6-0.7,5.2c0.4,0,0.8,0,1.3,0c0.4,0,0.7,0,1.1,0c2.7,0,4.1,0.1,4.8-0.2l21.6,0c0,0,0,0,0,0.1 c0.9,0.1,1.7,0.4,2.1,1.6c0.2,0.5,1.4,0.9,2.2,0.9c3.2,0.1,6.3,0,9.5,0c1.8,0,3.6,0,5.3,0c0.6,2.4,1.2,2.8,2.6,2.4 c1.5-0.5,3.7-4.3,3.1-5.7c-0.7-1.8-1.3-3.7-3.2-4.9c-0.6-0.4-1.1-1.6-1-2.3c0.3-1.5-0.3-2.2-1.4-3.2c-1.4-1.3-3.2-3.1-3.3-4.7 c-0.2-2.1,1.1-4.3,1.9-6.5c0.1-0.2,0.6-0.4,0.9-0.6c2.7-1.7,2.8-3.1,0.8-5.7c-0.9-1.2-2-2.5-2.3-3.8c-0.4-1.6-1.2-2.2-2.7-2.2 c-6,0-12.1,0-18.1,0c-1.3,0-2.2,0.3-2.3,1.8c0,0.4-0.1,0.8-0.3,1.1c0,0.4,0,0.3,0,1.4c-1.6-0.7-2.8-0.6-4.2-0.9 c-0.4-0.1-0.8-0.2-1.2-0.2c-0.1,0-0.2,0-0.4,0c-7.3-0.2-14.6-0.4-21.9-0.5c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6,0 c-0.9,0.1-1.4,0.8-1.4,1.9c0,1.4,0,0.8,0,2.2c0,4.1-0.2,5.3,1.5,5.7c0.2,0,0.3,0,0.5,0c1.2-0.1,2.5,0,3.7,0c0.9,0,1.5,0.3,1.8,0.8 c0.8,0.8,0.9,2.3,0.9,3.9C121.4,71.6,121.4,75.7,121.4,79.8z" }), /* @__PURE__ */ E.createElement("path", { d: "M156.3,120.6c0.2-0.8,0.3-1.3,0.5-1.6c1.5-2.1,1.2-5.3,0.7-7.9c-0.4-2.2-0.1-4.5,1.5-6.6c1.5-2,2.4-4.5,3.6-6.8 c0.7-1.3,0.2-2-1.1-2.3c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0.1-1.8-1.1-2.1-2.6-2.1c-4.4,0-8.8-0.1-13.2,0c-0.4,0-0.8,0-1.2-0.1 c-1.2-0.3-1.8-1.1-1.8-2.6c-0.3,0-0.7,0-1,0c-2.1,0-4.2,0-6.3,0c0,0.1,0,0.2,0,0.3l-21.6,0c0.1,0,0.1-0.1,0.2-0.1 c-8.9,0-17.7,0-26.6,0c-2.8,0-3.3,0.3-3.3,2.8c0,7.7,0,15.5,0,23.2c0,0.3,0.1,1.6,0.2,3h6.6l-0.3-1.3h6.3l2.5,1.4l1.4,1.4l3.7,2.5 l1.3,4.6l3.7,1.9l1.6,0.7c0.4-0.2,0.8-0.4,1.2-0.4l2.4-3l4,0.5l1.6,1.3l4.3,7l1.4,1.7l1.1,4l8.4,3.3l-0.3-2.9l-0.3-4l2.7-3.2 l-0.5-1l2.7-2.2l1.4,0.8l2.4-2.7l1.4-1.9h2.1l4.6-1l3.3,1.4h2.5l1-1.1l1.1,0.8l0.2,1.4l3.3,1.1l3.2-0.5l2.7,0.2l-2.2-1.7l-0.2-1 l1.4-0.8c-0.2-0.3-0.5-0.5-0.7-0.8h-1.6l-2.5,0.3l1.6-1.4l0.8-1c0,0-2.5-3.2-2.8-3.6C161,120.8,158.8,120.7,156.3,120.6z" }), /* @__PURE__ */ E.createElement("path", { d: "M263.1,51.1l1.7-0.5l1.4-1l3.3,0.8c0,0,1.4,0.8,1.6,0.3c0.2-0.5,0.6-1.7,0.6-1.7l-1.1-1.3l-0.5-1.9l0.3-3.2l0.3-2.5 l1.4-1.9l0.3-0.8l1,0.5l3-3.3h1.1l2.5-0.3l0.8-1.6h2.2l1.9-1.6l-0.7-0.9l-0.9-2.1l-1-0.7l0.4-5.3l-0.5-4.8l-2.9-0.9l-2.5,0.9 l-1.3-0.2l-5.5,12.8l-2.5,0.2l-1.1,1l-8.2,0l0.4,21.1l1.6-0.4L263.1,51.1z" })))), R0 = !0, I0 = {
  title: "Default World Map",
  subtext: "",
  type: "bubble",
  geoType: "world",
  headerColor: "theme-blue",
  geoBorderColor: "darkGray",
  showSidebar: !0,
  showTitle: !0,
  showDownloadButton: !0,
  expandDataTable: !0,
  equalNumberOptIn: !0
}, O0 = "pinkpurple", $0 = {
  geo: {
    name: "Country",
    label: "Location",
    tooltip: !1,
    dataTable: !0
  },
  primary: {
    name: "Data",
    label: "Data Label",
    prefix: "",
    suffix: "%",
    dataTable: !0,
    tooltip: !0
  },
  navigate: {
    name: "Link",
    tooltip: !1,
    dataTable: !1
  }
}, z0 = {
  numberOfItems: 3,
  position: "side",
  title: "Legend Title",
  description: "Legend Text",
  type: "equalnumber",
  specialClasses: [
    "N/A"
  ],
  separateZero: !0
}, _0 = [
  {
    Country: "Atlanta",
    Data: 10,
    Link: "",
    "Sample Categories": "Category 1",
    Regions: "North America"
  },
  {
    Country: "Aruba",
    Data: 0,
    Link: "",
    "Sample Categories": "Category 1",
    Regions: "North America"
  },
  {
    Country: "Afghanistan",
    Data: 59,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Angola",
    Data: 65,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Anguilla",
    Data: 15,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Albania",
    Data: 73,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Åland",
    Data: 99,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Andorra",
    Data: 75,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "United Arab Emirates",
    Data: 62,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Argentina",
    Data: 65,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Armenia",
    Data: 23,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "American Samoa",
    Data: 48,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Ashmore and Cartier Is.",
    Data: 22,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Fr. S. Antarctic Lands",
    Data: 65,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Antigua and Barb.",
    Data: 91,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Australia",
    Data: 57,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Austria",
    Data: 64,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Azerbaijan",
    Data: 60,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Burundi",
    Data: 95,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Belgium",
    Data: 88,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Benin",
    Data: 1,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Burkina Faso",
    Data: 29,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Bangladesh",
    Data: 46,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Bulgaria",
    Data: 85,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Bahrain",
    Data: 63,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Bahamas",
    Data: 38,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Bosnia and Herz.",
    Data: 69,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "St-Barthélemy",
    Data: 37,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Belarus",
    Data: 35,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Belize",
    Data: 52,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Bermuda",
    Data: 29,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Bolivia",
    Data: 20,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Brazil",
    Data: 33,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Barbados",
    Data: 12,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Brunei",
    Data: 73,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Bhutan",
    Data: 2,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Botswana",
    Data: 11,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Central African Rep.",
    Data: 55,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Canada",
    Data: 14,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Switzerland",
    Data: 89,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Chile",
    Data: 21,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "China",
    Data: 70,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Côte d'Ivoire",
    Data: 84,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Cameroon",
    Data: 65,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Dem. Rep. Congo",
    Data: 97,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Congo",
    Data: 45,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Cook Is.",
    Data: 5,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Colombia",
    Data: 92,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Comoros",
    Data: 65,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Cabo Verde",
    Data: 63,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Costa Rica",
    Data: 21,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Cuba",
    Data: 0,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Curaçao",
    Data: 64,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Cayman Is.",
    Data: 56,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "N. Cyprus",
    Data: 78,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Cyprus",
    Data: 74,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Czechia",
    Data: 26,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Germany",
    Data: 31,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Djibouti",
    Data: 22,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Dominica",
    Data: 2,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Denmark",
    Data: 51,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Dominican Rep.",
    Data: 84,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Algeria",
    Data: 58,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Ecuador",
    Data: 52,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Egypt",
    Data: 29,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Eritrea",
    Data: 70,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Spain",
    Data: 9,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Estonia",
    Data: 13,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Ethiopia",
    Data: 17,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Finland",
    Data: 9,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Fiji",
    Data: 7,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Falkland Is.",
    Data: 18,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "France",
    Data: 73,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Faeroe Is.",
    Data: 60,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Micronesia",
    Data: 73,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Gabon",
    Data: 72,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "United Kingdom",
    Data: 5,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Georgia",
    Data: 69,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Guernsey",
    Data: 2,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Ghana",
    Data: 71,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Guinea",
    Data: 32,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Gambia",
    Data: 39,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Guinea-Bissau",
    Data: 48,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Eq. Guinea",
    Data: 74,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Greece",
    Data: 17,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Grenada",
    Data: 37,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Greenland",
    Data: 15,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Guatemala",
    Data: 42,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Guam",
    Data: 17,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Guyana",
    Data: 11,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Hong Kong",
    Data: 49,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Heard I. and McDonald Is.",
    Data: 32,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Honduras",
    Data: 27,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Croatia",
    Data: 41,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Haiti",
    Data: 33,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Hungary",
    Data: 41,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Indonesia",
    Data: 4,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Isle of Man",
    Data: 63,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "India",
    Data: 18,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Indian Ocean Ter.",
    Data: 32,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Br. Indian Ocean Ter.",
    Data: 66,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Ireland",
    Data: 36,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Iran",
    Data: 36,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Iraq",
    Data: 0,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Iceland",
    Data: 85,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Israel",
    Data: 75,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Italy",
    Data: 0,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Jamaica",
    Data: 85,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Jersey",
    Data: 99,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Jordan",
    Data: 51,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Japan",
    Data: 61,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Siachen Glacier",
    Data: 5,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Kazakhstan",
    Data: 0,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Kenya",
    Data: 73,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Kyrgyzstan",
    Data: 15,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Cambodia",
    Data: 43,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Kiribati",
    Data: 16,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "St. Kitts and Nevis",
    Data: 85,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "South Korea",
    Data: 60,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Kosovo",
    Data: 97,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Kuwait",
    Data: 31,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Laos",
    Data: 8,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Lebanon",
    Data: 86,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Liberia",
    Data: 58,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Libya",
    Data: 87,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Saint Lucia",
    Data: 67,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Liechtenstein",
    Data: 60,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Sri Lanka",
    Data: 55,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Lesotho",
    Data: 56,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Lithuania",
    Data: 31,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Luxembourg",
    Data: 63,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Latvia",
    Data: 44,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Macao",
    Data: 69,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "St-Martin",
    Data: 81,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Morocco",
    Data: 69,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Monaco",
    Data: 8,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Moldova",
    Data: 89,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Madagascar",
    Data: 1,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Maldives",
    Data: 50,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Mexico",
    Data: 1,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Marshall Is.",
    Data: 26,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Macedonia",
    Data: 61,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Mali",
    Data: 45,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Malta",
    Data: 89,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Myanmar",
    Data: 82,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Montenegro",
    Data: 72,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Mongolia",
    Data: 51,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "N. Mariana Is.",
    Data: 22,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Mozambique",
    Data: 20,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Mauritania",
    Data: 40,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Montserrat",
    Data: 3,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Mauritius",
    Data: 2,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Malawi",
    Data: 26,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Malaysia",
    Data: 89,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Namibia",
    Data: 70,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "New Caledonia",
    Data: 93,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Niger",
    Data: 21,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Norfolk Island",
    Data: 5,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Nigeria",
    Data: 43,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Nicaragua",
    Data: 23,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Niue",
    Data: 17,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Netherlands",
    Data: 11,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Norway",
    Data: 47,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Nepal",
    Data: 4,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Nauru",
    Data: 21,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "New Zealand",
    Data: 4,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Oman",
    Data: 65,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Pakistan",
    Data: 85,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Panama",
    Data: 66,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Pitcairn Is.",
    Data: 89,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Peru",
    Data: 16,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Philippines",
    Data: 49,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Palau",
    Data: 37,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Papua New Guinea",
    Data: 1,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Poland",
    Data: 14,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Puerto Rico",
    Data: 62,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "North Korea",
    Data: 92,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Portugal",
    Data: 77,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Paraguay",
    Data: 19,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Palestine",
    Data: 28,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Fr. Polynesia",
    Data: 69,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Qatar",
    Data: 40,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Romania",
    Data: 51,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Russia",
    Data: 13,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Rwanda",
    Data: 91,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "W. Sahara",
    Data: 64,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Saudi Arabia",
    Data: 90,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Sudan",
    Data: 58,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "S. Sudan",
    Data: 93,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Senegal",
    Data: 15,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Singapore",
    Data: 80,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "S. Geo. and the Is.",
    Data: 90,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Saint Helena",
    Data: 49,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Solomon Is.",
    Data: 77,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Sierra Leone",
    Data: 33,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "El Salvador",
    Data: 18,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "San Marino",
    Data: 42,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Somaliland",
    Data: 52,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Somalia",
    Data: 68,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "St. Pierre and Miquelon",
    Data: 12,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Serbia",
    Data: 12,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "São Tomé and Principe",
    Data: 50,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Suriname",
    Data: 54,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Slovakia",
    Data: 1,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Slovenia",
    Data: 77,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Sweden",
    Data: 77,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Swaziland",
    Data: 48,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Sint Maarten",
    Data: 75,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Seychelles",
    Data: 73,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Syria",
    Data: 69,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Turks and Caicos Is.",
    Data: 73,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Chad",
    Data: 16,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Togo",
    Data: 83,
    Link: "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    Country: "Thailand",
    Data: 84,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Tajikistan",
    Data: 55,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Turkmenistan",
    Data: 59,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Timor-Leste",
    Data: 45,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Tonga",
    Data: 43,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Trinidad and Tobago",
    Data: 22,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Tunisia",
    Data: 93,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Turkey",
    Data: 54,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Taiwan",
    Data: 26,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Tanzania",
    Data: 54,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Uganda",
    Data: 55,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Ukraine",
    Data: 57,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Uruguay",
    Data: 15,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "United States of America",
    Data: 45,
    Link: "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    Country: "Uzbekistan",
    Data: 96,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Vatican",
    Data: 87,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "St. Vin. and Gren.",
    Data: 12,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Venezuela",
    Data: 61,
    Link: "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    Country: "British Virgin Is.",
    Data: 91,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "U.S. Virgin Is.",
    Data: 27,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Vietnam",
    Data: 82,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Vanuatu",
    Data: 56,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Wallis and Futuna Is.",
    Data: 76,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Samoa",
    Data: 4,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Yemen",
    Data: 39,
    Link: "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    Country: "South Africa",
    Data: 24,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Zambia",
    Data: 38,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Zimbabwe",
    Data: 35,
    Link: "https://cdc.gov/",
    "Sample Categories": ""
  }
], U0 = {
  defaultData: R0,
  general: I0,
  color: O0,
  columns: $0,
  legend: z0,
  data: _0
}, F0 = {
  geoType: "us",
  geoBorderColor: "darkGray",
  headerColor: "theme-blue",
  showTitle: !0,
  showSidebar: !0,
  showDownloadButton: !0,
  showDownloadMediaButton: !1,
  displayAsHex: !1,
  displayStateLabels: !1,
  territoriesLabel: "Territories",
  language: "en",
  hasRegions: !1,
  expandDataTable: !0,
  fullBorder: !1,
  type: "data",
  title: "Default US Map",
  territoriesAlwaysShow: !1,
  geoLabelOverride: "",
  convertFipsCodes: !0,
  palette: {
    isReversed: !1
  },
  allowMapZoom: !0,
  hideGeoColumnInTooltip: !1,
  hidePrimaryColumnInTooltip: !1,
  statePicked: {
    fipsCode: "01",
    stateName: "Alabama"
  }
}, G0 = "map", B0 = "qualitative4", V0 = {
  geo: {
    name: "State",
    label: "Location",
    tooltip: !1,
    dataTable: !0
  },
  primary: {
    dataTable: !0,
    tooltip: !0,
    prefix: "",
    suffix: "",
    name: "Condition",
    label: ""
  },
  navigate: {
    name: "Condition"
  },
  latitude: {
    name: ""
  },
  longitude: {
    name: ""
  }
}, W0 = {
  descriptions: {},
  specialClasses: [],
  unified: !1,
  singleColumn: !1,
  dynamicDescription: !1,
  type: "category",
  numberOfItems: 3,
  position: "side",
  title: "Legend",
  singleRow: !1,
  verticalSorted: !1,
  showSpecialClassesLast: !1,
  categoryValuesOrder: [
    "Arboviral 2",
    "Arboviral 3",
    "Arboviral 4",
    "Arboviral 5",
    "Arboviral 6",
    "Arboviral 7",
    "Arboviral 8",
    "Arboviral 9",
    "Arboviral 10",
    "Arboviral 11",
    "Arboviral 12",
    "Arboviral",
    "Babesiosis",
    "Congenital Syphilis",
    "FDD",
    "Generic v2.0"
  ]
}, j0 = [], H0 = {
  wrapColumns: !1,
  label: "Data Table",
  expanded: !1,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  showFullGeoNameInCSV: !1,
  forceDisplay: !0,
  download: !1,
  indexLabel: ""
}, q0 = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0,
  opacity: 90
}, Z0 = {
  editorErrorMessage: []
}, K0 = {
  minBubbleSize: 1,
  maxBubbleSize: 20,
  extraBubbleBorder: !1,
  cityStyle: "pin",
  geoCodeCircleSize: "4",
  showBubbleZeros: !1,
  additionalCityStyles: [
    {
      label: "Tampa Diamond",
      column: "State",
      value: "Tampa",
      shape: "Diamond"
    },
    {
      label: " Production Label",
      column: "Status",
      value: "Production",
      shape: "Star"
    },
    {
      label: "Onboarding label",
      column: "Status",
      value: "Onboarding",
      shape: "Triangle"
    }
  ],
  cityStyleLabel: "Default city shape"
}, Y0 = {
  coordinates: [
    0,
    30
  ],
  zoom: 1
}, X0 = {
  layers: [],
  patterns: [
    {
      dataKey: "State",
      pattern: "circles",
      dataValue: "GU"
    }
  ]
}, J0 = {
  type: "",
  shapeGroups: [
    {
      legendTitle: "",
      legendDescription: "",
      items: [
        {
          key: "",
          shape: "Arrow up",
          column: "",
          operator: "=",
          value: ""
        }
      ]
    }
  ]
}, Q0 = "Filter Change", eu = [
  {
    Condition: "Arboviral 2",
    State: "Chicago",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral 7",
    State: "Tampa",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral 9",
    State: "Seatle",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral 9",
    State: "Denver",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral 4",
    State: "Dallas",
    Status: "Production"
  },
  {
    Condition: "Arboviral 4",
    State: "Sacramento",
    Status: "Production"
  },
  {
    Condition: "Arboviral 3",
    State: "Atlanta",
    Status: "Production"
  },
  {
    Condition: "Arboviral 9",
    State: "Orlando",
    Status: "Production"
  },
  {
    Condition: "Arboviral 2",
    State: "AL",
    Status: "Production"
  },
  {
    Condition: "Arboviral 3",
    State: "AK",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral 4",
    State: "AZ",
    Status: "Production"
  },
  {
    Condition: "Arboviral 5",
    State: "AR",
    Status: "Production"
  },
  {
    Condition: "Arboviral 6",
    State: "DE",
    Status: "Production"
  },
  {
    Condition: "Arboviral 7",
    State: "FL",
    Status: "Production"
  },
  {
    Condition: "Arboviral 8",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "Arboviral 9",
    State: "IL",
    Status: "Production"
  },
  {
    Condition: "Arboviral 10",
    State: "IN",
    Status: "Production"
  },
  {
    Condition: "Arboviral 11",
    State: "KS",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral 12",
    State: "LA",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "MD",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "MA",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "MI",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral",
    State: "MS",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "MT",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "NE",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "NJ",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "NY",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "ND",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "OR",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "PA",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "RI",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "SC",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral",
    State: "SD",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "TN",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "TX",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "UT",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "VA",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "WA",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral",
    State: "WI",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "WY",
    Status: "Production"
  },
  {
    Condition: "Arboviral 5",
    State: "New York City",
    Status: "Production"
  },
  {
    Condition: "Babesiosis",
    State: "CT",
    Status: "Piloting"
  },
  {
    Condition: "Babesiosis",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Babesiosis",
    State: "ID",
    Status: "Onboarding"
  },
  {
    Condition: "Babesiosis",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "Babesiosis",
    State: "WI",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "AL",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "CT",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "IN",
    Status: "Onboarding"
  },
  {
    Condition: "Congenital Syphilis",
    State: "KY",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "NC",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "OR",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "SC",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "WI",
    Status: "Production"
  },
  {
    Condition: "COVID-19",
    State: "AK",
    Status: "Onboarding"
  },
  {
    Condition: "COVID-19",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "COVID-19",
    State: "KS",
    Status: "Production"
  },
  {
    Condition: "COVID-19",
    State: "KY",
    Status: "Onboarding"
  },
  {
    Condition: "COVID-19",
    State: "UT",
    Status: "Production"
  },
  {
    Condition: "CRS",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "FDD",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "FDD",
    State: "MI",
    Status: "Onboarding"
  },
  {
    Condition: "FDD",
    State: "MN",
    Status: "Piloting"
  },
  {
    Condition: "FDD",
    State: "NY",
    Status: "Piloting"
  },
  {
    Condition: "FDD",
    State: "OR",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "AL",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "AK",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "AZ",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "CA",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "CO",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "CT",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "DE",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "FL",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "GA",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "IL",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "IN",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "IA",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "KS",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "KY",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "ME",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "MA",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "MN",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "MS",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "MT",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "NH",
    Status: "Onboarding"
  },
  {
    Condition: "Generic v2.0",
    State: "NJ",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "NY",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "NC",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "OR",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "PA",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "RI",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "SC",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "TN",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "UT",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "VA",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "WV",
    Status: "Onboarding"
  },
  {
    Condition: "Generic v2.0",
    State: "WI",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "WY",
    Status: "Onboarding"
  },
  {
    Condition: "Generic v2.0",
    State: "New York City",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "CNMI",
    Status: "Onboarding"
  },
  {
    Condition: "Generic v2.0",
    State: "GU",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "PR",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "VI",
    Status: "Onboarding"
  },
  {
    Condition: "HAI MDRO",
    State: "CO",
    Status: "Onboarding"
  },
  {
    Condition: "HAI MDRO",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "HAI MDRO",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "Hepatitis",
    State: "AL",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "AK",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "CO",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "DE",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "FL",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "IN",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "IA",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "LA",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "MA",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "MN",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "NE",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "NJ",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "NY",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "OR",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "RI",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "SC",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "TN",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "UT",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "VA",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "WV",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "WI",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "GU",
    Status: "Onboarding"
  },
  {
    Condition: "Hepatitis",
    State: "PR",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "VI",
    Status: "Onboarding"
  },
  {
    Condition: "Lyme & TBRD",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Lyme & TBRD",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "Lyme & TBRD",
    State: "IL",
    Status: "Onboarding"
  },
  {
    Condition: "Lyme & TBRD",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "Lyme & TBRD",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "Malaria",
    State: "CT",
    Status: "Piloting"
  },
  {
    Condition: "Malaria",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Malaria",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "Malaria",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "Measles",
    State: "AL",
    Status: "Piloting"
  },
  {
    Condition: "Measles",
    State: "AZ",
    Status: "Piloting"
  },
  {
    Condition: "Measles",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Measles",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "Mumps",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Mumps",
    State: "KS",
    Status: "Piloting"
  },
  {
    Condition: "Mumps",
    State: "MI",
    Status: "Piloting"
  },
  {
    Condition: "Mumps",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "Mumps",
    State: "UT",
    Status: "Production"
  },
  {
    Condition: "Mumps",
    State: "New York City",
    Status: "Piloting"
  },
  {
    Condition: "Pertussis",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Pertussis",
    State: "KS",
    Status: "Piloting"
  },
  {
    Condition: "Pertussis",
    State: "MI",
    Status: "Piloting"
  },
  {
    Condition: "Pertussis",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "Pertussis",
    State: "UT",
    Status: "Production"
  },
  {
    Condition: "Pertussis",
    State: "New York City",
    Status: "Piloting"
  },
  {
    Condition: "RIBD",
    State: "GA",
    Status: "Piloting"
  },
  {
    Condition: "RIBD",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "Rubella",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Rubella",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "STD",
    State: "AL",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "CT",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "IN",
    Status: "Onboarding"
  },
  {
    Condition: "STD",
    State: "KY",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "NC",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "OR",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "SC",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "WI",
    Status: "Production"
  },
  {
    Condition: "TB & LTBI",
    State: "AZ",
    Status: "Onboarding"
  },
  {
    Condition: "TB & LTBI",
    State: "MI",
    Status: "Onboarding"
  },
  {
    Condition: "TB & LTBI",
    State: "OR",
    Status: "Production"
  },
  {
    Condition: "Trichinellosis",
    State: "CT",
    Status: "Piloting"
  },
  {
    Condition: "Trichinellosis",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Trichinellosis",
    State: "ID",
    Status: "Onboarding"
  },
  {
    Condition: "Trichinellosis",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "Trichinellosis",
    State: "WI",
    Status: "Production"
  },
  {
    Condition: "Varicella",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Varicella",
    State: "KS",
    Status: "Piloting"
  },
  {
    Condition: "Varicella",
    State: "MI",
    Status: "Piloting"
  },
  {
    Condition: "Varicella",
    State: "SC",
    Status: "Piloting"
  },
  {
    Condition: "Varicella",
    State: "UT",
    Status: "Production"
  }
], tu = "undefined.csv", nu = "file", au = {
  horizontal: !0
}, iu = "us", ru = "darkGray", ou = "theme-blue", lu = !0, su = !0, cu = !0, uu = !1, du = !1, pu = !1, hu = "Territories", gu = "en", fu = !1, mu = !0, yu = !1, Cu = {
  title: "Data Table",
  forceDisplay: !0
}, Su = 4.23, bu = {
  general: F0,
  type: G0,
  color: B0,
  columns: V0,
  legend: W0,
  filters: j0,
  table: H0,
  tooltips: q0,
  runtime: Z0,
  visual: K0,
  mapPosition: Y0,
  map: X0,
  hexMap: J0,
  filterBehavior: Q0,
  data: eu,
  dataFileName: tu,
  dataFileSourceType: nu,
  dataDescription: au,
  geoType: iu,
  geoBorderColor: ru,
  headerColor: ou,
  showTitle: lu,
  showSidebar: su,
  showDownloadButton: cu,
  showDownloadMediaButton: uu,
  displayAsHex: du,
  displayStateLabels: pu,
  territoriesLabel: hu,
  language: gu,
  hasRegions: fu,
  expandDataTable: mu,
  fullBorder: yu,
  dataTable: Cu,
  validated: Su
}, vu = {
  title: "Default County Map",
  subtext: "",
  territoriesLabel: "Territories",
  type: "data",
  geoType: "us-county",
  headerColor: "theme-blue",
  showSidebar: !0,
  showTitle: !0,
  geoBorderColor: "darkGray",
  showDownloadButton: !0,
  expandDataTable: !1,
  showDownloadMediaButton: !1,
  displayAsHex: !1,
  displayStateLabels: !1,
  language: "en",
  hasRegions: !1,
  fullBorder: !1,
  palette: {
    isReversed: !1
  },
  allowMapZoom: !0,
  hideGeoColumnInTooltip: !1,
  hidePrimaryColumnInTooltip: !1,
  statePicked: {
    fipsCode: "01",
    stateName: "Alabama"
  },
  equalNumberOptIn: !0
}, ku = {
  layers: [
    {
      name: "Layer One",
      url: "./examples/testing-layer.json",
      namespace: "cove"
    },
    {
      name: "Layer Two",
      url: "./examples/testing-layer.json",
      namespace: "cove"
    }
  ]
}, wu = "map", Lu = "pinkpurple", Tu = {
  geo: {
    name: "FIPS Codes",
    label: "Location",
    tooltip: !1,
    dataTable: !0
  },
  primary: {
    name: "Insured Rate",
    label: "Data Label",
    prefix: "",
    suffix: "%",
    dataTable: !0,
    tooltip: !0
  },
  navigate: {
    name: "",
    tooltip: !1,
    dataTable: !1
  }
}, Nu = {
  numberOfItems: 3,
  position: "side",
  title: "Legend Title",
  description: "Legend Text",
  type: "equalnumber",
  specialClasses: [
    {
      key: "Insured Rate",
      value: "18",
      label: "18"
    }
  ],
  descriptions: {},
  unified: !1,
  singleColumn: !1,
  dynamicDescription: !1
}, Mu = [], Eu = {
  title: "Data Table",
  forceDisplay: !0
}, xu = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0
}, Pu = {
  editorErrorMessage: []
}, Du = {
  minBubbleSize: 1,
  maxBubbleSize: 20,
  extraBubbleBorder: !1,
  cityStyle: "circle"
}, Au = {
  coordinates: [
    0,
    30
  ],
  zoom: 1
}, Ru = [
  {
    "Insured Rate": 18,
    "Coverage Status": "Insured",
    "FIPS Codes": "06075",
    "Year (Good filter option)": "2010",
    link: ""
  },
  {
    "Insured Rate": 3,
    "Coverage Status": "Insured",
    "FIPS Codes": "06027",
    "Year (Good filter option)": "2010",
    link: ""
  },
  {
    "Insured Rate": 25,
    "Coverage Status": "Insured",
    "FIPS Codes": "06029",
    "Year (Good filter option)": "2010",
    link: ""
  },
  {
    "Insured Rate": 60,
    "Coverage Status": "Insured",
    "FIPS Codes": "06065",
    "Year (Good filter option)": "2010",
    link: ""
  }
], Iu = {
  general: vu,
  map: ku,
  type: wu,
  color: Lu,
  columns: Tu,
  legend: Nu,
  filters: Mu,
  dataTable: Eu,
  tooltips: xu,
  runtime: Pu,
  visual: Du,
  mapPosition: Au,
  data: Ru
};
function Xr(e, t, n, a) {
  const [i, l] = E.useState([]), o = E.useId(), [r, g] = E.useState([]), [h, c] = E.useState([]);
  E.useEffect(() => {
    d();
  }, [e.map.layers]), E.useEffect(() => {
    n && m();
  }, [i]);
  const d = async () => {
    try {
      const v = await S();
      l(v);
    } catch (v) {
      console.error("Error fetching GeoJSON layers:", v);
    }
  }, u = (v, C) => {
    v.preventDefault();
    const w = ne.cloneDeep(e), N = w.map.layers.filter((P, x) => x !== C);
    w.map.layers = N, t(w);
  }, p = (v) => {
    v.preventDefault();
    const C = {
      name: "New Custom Layer",
      url: ""
    }, w = ne.cloneDeep(e);
    w.map.layers.unshift(C), t(w);
  }, f = (v, C, w) => {
    v.preventDefault();
    let N = v.target.value;
    w === "fillOpacity" && (N = N / 100);
    let P = ne.cloneDeep(e.map.layers);
    ne.set(P, `[${C}][${w}]`, N), t({ ...e, map: { ...e.map, layers: P } });
  }, S = async () => {
    let v = [];
    if (e.map.layers) {
      for (const C of e.map.layers) {
        let w = await fetch(C.url).then((N) => N.json()).catch((N) => console.warn("error with newLayer item", N));
        w || (w = []), v.push(w);
      }
      return v;
    }
  }, m = () => {
    if (i.length === 0 || !i)
      return;
    let v = [], C = [];
    i == null || i.map((w, N) => {
      if (w.length === 0)
        return null;
      let P = w.objects[e.map.layers[N].namespace];
      if (!P)
        return null;
      Nt(w, P).features.forEach((_) => {
        let z = ["custom-map-layer", `custom-map-layer--${_.properties.name.replace(" ", "-")}`];
        C.push(_), v.push(
          /* @__PURE__ */ s(
            Qn,
            {
              className: z.join(" "),
              children: /* @__PURE__ */ s(
                "path",
                {
                  d: n(_),
                  fill: e.map.layers[N].fill ? e.map.layers[N].fill : _.properties.fill ? _.properties.fill : "transparent",
                  fillOpacity: e.map.layers[N].fillOpacity ? e.map.layers[N].fillOpacity : _.properties["fill-opacity"] ? _.properties["fill-opacity"] : "1",
                  "data-id": o,
                  stroke: e.map.layers[N].stroke ? e.map.layers[N].stroke : _.properties.stroke ? _.properties.stroke : "transparent",
                  strokeWidth: e.map.layers[N].strokeWidth ? e.map.layers[N].strokeWidth : _.properties["stroke-width"],
                  "data-tooltip-id": `tooltip__${a}`,
                  "data-tooltip-html": e.map.layers[N].tooltip ? e.map.layers[N].tooltip : ""
                },
                o
              )
            },
            `customMapLayer-${_.properties.name.replace(" ", "-")}-${N}`
          )
        );
      });
    }), g(v), c(C);
  }, y = () => null;
  return y.handleRemoveLayer = u, y.handleAddLayer = p, y.handleMapLayer = f, { pathArray: r, featureArray: h, MapLayerHandlers: y };
}
const Ou = ["Arrow Up", "Arrow Down", "Arrow Right", "Arrow Left", "None"], $u = "<", zu = ">", _u = "<=", Uu = ">=", Fu = "=", Gu = "≠", Bu = (e) => {
  var o;
  const { columnsOptions: t } = e, { config: n, setConfig: a } = E.useContext(fe), i = (r, g, h, c) => {
    a({
      ...n,
      hexMap: {
        ...n.hexMap,
        shapeGroups: n.hexMap.shapeGroups.map((d, u) => u === h ? {
          ...d,
          items: d.items.map((p, f) => c === f ? {
            ...p,
            [r]: g
          } : p)
        } : d)
      }
    });
  }, l = (r, g) => {
    a({
      ...n,
      hexMap: {
        ...n.hexMap,
        shapeGroups: n.hexMap.shapeGroups.map((h, c) => c === r ? {
          ...h,
          items: h.items.filter((d, u) => u !== g)
        } : h)
      }
    });
  };
  return n.general.displayAsHex && n.hexMap.type === "shapes" && /* @__PURE__ */ M(le, { children: [
    /* @__PURE__ */ s("fieldset", { className: "edit-block", children: n.hexMap.shapeGroups && /* @__PURE__ */ s(le, { children: /* @__PURE__ */ s(Xn, { allowZeroExpanded: !0, children: /* @__PURE__ */ s("ul", { style: { listStyle: "none" }, children: (o = n.hexMap.shapeGroups) == null ? void 0 : o.map((r, g) => /* @__PURE__ */ M(qe, { children: [
      /* @__PURE__ */ s(Ze, { children: /* @__PURE__ */ s(Ke, { children: `Legend Shape Group ${g + 1}` }) }),
      /* @__PURE__ */ M(Ye, { children: [
        /* @__PURE__ */ M("label", { children: [
          /* @__PURE__ */ s("span", { className: "edit-label column-heading", children: "Legend Title" }),
          /* @__PURE__ */ s(
            "input",
            {
              type: "text",
              value: r.legendTitle || "",
              onChange: (h) => {
                const c = ne.cloneDeep(n);
                c.hexMap.shapeGroups[g].legendTitle = h.target.value, a(c);
              }
            }
          )
        ] }),
        /* @__PURE__ */ M("label", { children: [
          /* @__PURE__ */ s("span", { className: "edit-label column-heading", children: "Legend Description" }),
          /* @__PURE__ */ s(
            "input",
            {
              type: "text",
              value: r.legendDescription || "",
              onChange: (h) => {
                const c = ne.clone(n);
                c.hexMap.shapeGroups[g].legendDescription = h.target.value, a(c);
              }
            }
          )
        ] }),
        r.items.map((h, c) => /* @__PURE__ */ s(Xn, { allowZeroExpanded: !0, style: { marginTop: c === 0 ? "15px" : "initial" }, children: /* @__PURE__ */ M(qe, { children: [
          /* @__PURE__ */ s(Ze, { children: /* @__PURE__ */ s(Ke, { children: `Shape Condition ${c + 1}` }) }),
          /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ M(le, { children: [
            /* @__PURE__ */ M("label", { children: [
              /* @__PURE__ */ s("span", { className: "edit-label column-heading", children: "Shape Column" }),
              /* @__PURE__ */ s(
                "select",
                {
                  value: n.hexMap.shapeGroups[g].items[c].shape ? n.hexMap.shapeGroups[g].items[c].shape : "select",
                  onChange: (d) => {
                    i("shape", d.target.value, g, c);
                  },
                  children: Ou.map((d) => /* @__PURE__ */ s("option", { value: d, children: d }))
                }
              )
            ] }),
            /* @__PURE__ */ M("div", { className: "cove-input-group", children: [
              /* @__PURE__ */ s("label", { className: "", children: /* @__PURE__ */ s("span", { className: "edit-label cove-input__label", children: "Column Conditional" }) }),
              /* @__PURE__ */ M("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", children: [
                /* @__PURE__ */ s("div", { className: "cove-accordion__panel-col cove-input", children: /* @__PURE__ */ s(
                  "select",
                  {
                    value: n.hexMap.shapeGroups[g].key === "" ? "Select" : n.hexMap.shapeGroups[g].key,
                    className: "cove-input",
                    onChange: (d) => i("key", d.target.value, g, c),
                    children: t
                  }
                ) }),
                /* @__PURE__ */ s("div", { className: "cove-accordion__panel-col cove-input", children: /* @__PURE__ */ M(
                  "select",
                  {
                    value: n.hexMap.shapeGroups[g].items[c].operator || "-SELECT-",
                    initial: "Select",
                    className: "cove-input",
                    onChange: (d) => i("operator", d.target.value, g, c),
                    children: [
                      [Fu].map((d) => /* @__PURE__ */ s("option", { value: d, children: d })),
                      [Gu].map((d) => /* @__PURE__ */ s("option", { value: d, children: d })),
                      [$u].map((d) => /* @__PURE__ */ s("option", { value: d, children: d })),
                      [zu].map((d) => /* @__PURE__ */ s("option", { value: d, children: d })),
                      [_u].map((d) => /* @__PURE__ */ s("option", { value: d, children: d })),
                      [Uu].map((d) => /* @__PURE__ */ s("option", { value: d, children: d }))
                    ]
                  }
                ) }),
                /* @__PURE__ */ s("div", { className: "cove-accordion__panel-col cove-input", children: /* @__PURE__ */ s(
                  "input",
                  {
                    type: "text",
                    value: n.hexMap.shapeGroups[g].items[c].value || "",
                    className: "cove-input",
                    style: { height: "100%" },
                    onChange: (d) => i("value", d.target.value, g, c)
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ s(
              "button",
              {
                className: "cove-button cove-button--warn",
                style: {
                  background: "none",
                  border: "1px solid red",
                  color: "red",
                  marginTop: "15px"
                },
                onClick: (d) => l(g, c),
                children: "Remove Shape Conditional"
              }
            )
          ] }) })
        ] }) })),
        /* @__PURE__ */ M("div", { style: { display: "flex", justifyContent: "flex-end", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ s(
            "button",
            {
              className: "cove-button",
              style: { marginTop: "15px" },
              onClick: () => {
                const h = ne.cloneDeep(n);
                ne.set(
                  h,
                  "hexMap.shapeGroups",
                  ne.map(h.hexMap.shapeGroups, (c, d) => d === g ? {
                    ...c,
                    items: [
                      ...c.items,
                      {
                        key: "",
                        shape: "Arrow Up",
                        column: "",
                        operator: "=",
                        value: ""
                      }
                    ]
                  } : c)
                ), a(h);
              },
              children: "Add Shape Condition"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              className: "cove-button cove-button--warn",
              style: { background: "none", border: "1px solid red", color: "red", marginTop: "15px" },
              onClick: (h, c) => {
                let d = [
                  ...n.hexMap.shapeGroups.slice(0, g),
                  ...n.hexMap.shapeGroups.slice(g + 1)
                ];
                a({
                  ...n,
                  hexMap: {
                    ...n.hexMap,
                    shapeGroups: d
                  }
                });
              },
              children: "Remove Shape Group"
            }
          )
        ] })
      ] })
    ] })) }) }) }) }),
    /* @__PURE__ */ s("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ s(
      "button",
      {
        className: "cove-button",
        style: { marginTop: "15px" },
        onClick: (r) => {
          let g = n.hexMap.shapeGroups;
          g.push({
            legendTitle: "",
            legendDescription: "",
            items: [{ key: "", shape: "Arrow Up", column: "", operator: "=", value: "" }]
          }), g.legendTitle = "", g.legendDescription = "", a({
            ...n,
            hexMap: {
              ...n.hexMap,
              shapeGroups: g
            }
          });
        },
        children: "Add Shape Group"
      }
    ) })
  ] });
}, Ns = () => props.children;
Ns.ShapeColumns = Bu;
const Jr = (e) => {
  var o, r, g, h, c;
  if (!e)
    return null;
  const t = ((o = e.geo) == null ? void 0 : o.name) || null, n = ((r = e.primary) == null ? void 0 : r.name) || null, a = ((g = e.latitude) == null ? void 0 : g.name) || null, i = ((h = e.longitude) == null ? void 0 : h.name) || null, l = ((c = e.categorical) == null ? void 0 : c.name) || null;
  return { geoColumnName: t, primaryColumnName: n, latitudeColumnName: a, longitudeColumnName: i, categoricalColumnName: l };
}, Vu = () => {
  const { config: e } = E.useContext(fe), t = E.useContext(it);
  return { columnsRequiredChecker: () => {
    const { primaryColumnName: a, geoColumnName: i } = Jr(e.columns);
    let l = [];
    i || l.push("Geography"), e.general.type !== "navigation" && a === "" && l.push("Primary"), e.general.type === "navigation" && e.columns.navigate.name === "" && l.push("Navigation"), (e.general.type === "us-geocode" || e.general.type === "world-geocode") && e.columns.latitude.name === "" && l.push("Latitude"), (e.general.type === "us-geocode" || e.general.type === "world-geocode") && e.columns.longitude.name === "" && l.push("Longitude"), l.length === 0 && (l = null), t({ type: "SET_REQUIRED_COLUMNS", payload: l });
  } };
};
const Wu = () => {
  var Ct, Re, Te, Fe;
  const {
    setEditorConfig: e,
    isDashboard: t,
    isEditor: n,
    loadConfig: a,
    runtimeFilters: i,
    runtimeLegend: l,
    setConfig: o,
    config: r,
    tooltipId: g,
    runtimeData: h,
    setRuntimeData: c
  } = E.useContext(fe), { columnsRequiredChecker: d } = Vu(), u = E.useContext(it), { general: p, columns: f, legend: S, table: m, tooltips: y } = r, v = (Ct = r == null ? void 0 : r.data) != null && Ct[0] ? Object.keys(r.data[0]) : [], [C, w] = E.useState(!1), [N, P] = E.useState(!0), [x, _] = E.useState([0, 0]), {
    MapLayerHandlers: { handleMapLayer: z, handleAddLayer: F, handleRemoveLayer: I }
  } = Xr(r, o, !1, g), O = (L, R) => {
    var Q;
    let j = Ee(), [Y] = j.splice(L, 1);
    j.splice(R, 0, Y), (Q = r.legend.categoryValuesOrder) == null || Q.forEach((ke) => {
      j.indexOf(ke) === -1 && j.push(ke);
    }), o({
      ...r,
      legend: {
        ...r.legend,
        categoryValuesOrder: j
      }
    });
  };
  let U = [];
  S.specialClasses && S.specialClasses.length && typeof S.specialClasses[0] == "string" ? (S.specialClasses.forEach((L) => {
    U.push({
      key: r.columns.primary && r.columns.primary.name ? r.columns.primary.name : v[0],
      value: L,
      label: L
    });
  }), o({
    ...r,
    legend: {
      ...r.legend,
      specialClasses: U
    }
  })) : U = S.specialClasses || [];
  const k = S.style === "gradient" && S.subStyle === "linear blocks", b = (L) => {
    switch (L) {
      case "value": {
        const j = ["Circle", "Square", "Triangle", "Diamond", "Star", "Pin"].filter(
          (Y) => String(r.visual.cityStyle).toLocaleLowerCase() !== Y.toLocaleLowerCase()
        );
        return /* @__PURE__ */ M(le, { children: [
          /* @__PURE__ */ s("option", { value: "", children: "- Select Option -" }, "Select Option"),
          j.map((Y, Q) => /* @__PURE__ */ s("option", { value: Y, children: Y }, Q))
        ] });
      }
    }
  }, T = (L, R, j, Y) => {
    switch (L) {
      case "add": {
        const Q = r.visual.additionalCityStyles ? [...r.visual.additionalCityStyles] : [];
        Q.push({ label: "", column: "", value: "", shape: "" }), o({
          ...r,
          visual: {
            ...r.visual,
            additionalCityStyles: Q
          }
        });
        break;
      }
      case "remove": {
        let Q = [];
        r.visual.additionalCityStyles && (Q = [...r.visual.additionalCityStyles]), Q.splice(R, 1), o({
          ...r,
          visual: {
            ...r.visual,
            additionalCityStyles: Q
          }
        });
        break;
      }
      case "update": {
        let Q = [];
        Q = [...r.visual.additionalCityStyles], Q[R][j] = Y, o({
          ...r,
          visual: {
            ...r.visual,
            additionalCityStyles: Q
          }
        });
      }
    }
  }, D = ({ label: L, fieldName: R, value: j, type: Y = "input", ...Q }) => {
    const [ke, ut] = E.useState(j), [zt] = k0(ke, 500);
    return E.useEffect(() => {
      typeof zt == "string" && j !== zt && A("changeLegendDescription", [String(x), zt]);
    }, [zt]), /* @__PURE__ */ s("textarea", { onChange: (oa) => ut(oa.target.value), ...Q, value: ke });
  }, A = async (L, R) => {
    switch (L) {
      case "hidePrimaryColumnInTooltip":
        o({
          ...r,
          general: {
            ...r.general,
            [L]: R
          }
        });
        break;
      case "geoLabelOverride":
        o({
          ...r,
          general: {
            ...r.general,
            geoLabelOverride: R
          }
        });
        break;
      case "showTitle":
        o({
          ...r,
          general: {
            ...r.general,
            showTitle: R
          }
        });
        break;
      case "expandDataTable":
        o({
          ...r,
          table: {
            ...r.table,
            expanded: R
          }
        });
        break;
      case "sidebarPosition":
        o({
          ...r,
          legend: {
            ...r.legend,
            position: R,
            hideBorder: ne.includes(["top", "bottom"], R)
          }
        });
        break;
      case "legendStyle":
        o({
          ...r,
          legend: {
            ...r.legend,
            style: R
          }
        });
        break;
      case "legendSubStyle":
        o({
          ...r,
          legend: {
            ...r.legend,
            subStyle: R
          }
        });
        break;
      case "legendGroupBy":
        o({
          ...r,
          legend: {
            ...r.legend,
            groupBy: R
          }
        });
        break;
      case "legendTickRotation":
        o({
          ...r,
          legend: {
            ...r.legend,
            tickRotation: R
          }
        });
        break;
      case "legendBorder":
        o({
          ...r,
          legend: {
            ...r.legend,
            hideBorder: R
          }
        });
        break;
      case "handleCityStyle":
        o({
          ...r,
          visual: {
            ...r.visual,
            cityStyle: R
          }
        });
        break;
      case "geoBorderColor":
        o({
          ...r,
          general: {
            ...r.general,
            geoBorderColor: R
          }
        });
        break;
      case "headerColor":
        o({
          ...r,
          general: {
            ...r.general,
            headerColor: R
          }
        });
        break;
      case "navigateColumn":
        o({
          ...r,
          columns: {
            ...r.columns,
            navigate: {
              ...r.columns.navigate,
              name: R
            }
          }
        });
        break;
      case "legendDescription":
        o({
          ...r,
          legend: {
            ...r.legend,
            description: R
          }
        });
        break;
      case "legendNumber":
        o({
          ...r,
          legend: {
            ...r.legend,
            numberOfItems: parseInt(R)
          }
        });
        break;
      case "changeActiveFilterValue":
        const j = R.split(",");
        _(j);
        break;
      case "unifiedLegend":
        o({
          ...r,
          legend: {
            ...r.legend,
            unified: R
          }
        });
        break;
      case "toggleShowFullGeoNameInCSV":
        o({
          ...r,
          table: {
            // setting both bc DataTable new core needs it here
            ...r.table,
            showFullGeoNameInCSV: !r.table.showFullGeoNameInCSV
          }
        });
        break;
      case "toggleDownloadImgButton":
        o({
          ...r,
          general: {
            ...r.general,
            showDownloadImgButton: !r.general.showDownloadImgButton
          }
        });
        break;
      case "toggleDownloadLinkBelow":
        o({
          ...r,
          table: {
            ...r.table,
            showDownloadLinkBelow: !r.table.showDownloadLinkBelow
          }
        });
        break;
      case "toggleDownloadPdfButton":
        o({
          ...r,
          general: {
            ...r.general,
            showDownloadPdfButton: !r.general.showDownloadPdfButton
          }
        });
        break;
      case "editorMapType":
        switch (R) {
          case "us-geocode":
            o({
              ...r,
              general: {
                ...r.general,
                type: R
              }
            });
            break;
          case "world-geocode":
            o({
              ...r,
              general: {
                ...r.general,
                type: R
              }
            });
            break;
          case "data":
            o({
              ...r,
              general: {
                ...r.general,
                showSidebar: !0,
                type: "data"
              }
            });
            break;
          case "navigation":
            o({
              ...r,
              general: {
                ...r.general,
                showSidebar: !1,
                type: "navigation"
              },
              tooltips: {
                ...r.tooltips,
                appearanceType: "hover"
              }
            });
            break;
          case "bubble":
            o({
              ...r,
              general: {
                ...r.general,
                showSidebar: !1,
                type: "bubble"
              },
              tooltips: {
                ...r.tooltips,
                appearanceType: "hover"
              }
            });
            break;
          default:
            console.warn("COVE: Map type not set");
            break;
        }
        break;
      case "geoType":
        if (Ia(r, r.columns.geo.name), u({ type: "SET_POSITION", payload: [0, 30] }), C === !0 && R === "world") {
          a(U0);
          break;
        }
        if (C === !0 && R === "us") {
          a(bu);
          break;
        }
        if (C === !0 && R === "us-county") {
          a(Iu);
          break;
        }
        switch (R) {
          case "us":
            o({
              ...r,
              general: {
                ...r.general,
                geoType: "us",
                type: r.type === "us-geocode" ? "data" : r.type
              },
              table: {
                ...r.table,
                forceDisplay: !0
              }
            });
            break;
          case "us-region":
            o({
              ...r,
              general: {
                ...r.general,
                geoType: "us-region"
              },
              table: {
                ...r.table,
                forceDisplay: !0
              }
            });
            break;
          case "world":
            o({
              ...r,
              general: {
                ...r.general,
                geoType: "world"
              },
              table: {
                ...r.table,
                forceDisplay: !0
              }
            });
            break;
          case "us-county":
            o({
              ...r,
              general: {
                ...r.general,
                geoType: "us-county"
              },
              table: {
                ...r.table,
                expanded: !1,
                forceDisplay: !0
              }
            });
            break;
          case "single-state":
            o({
              ...r,
              general: {
                ...r.general,
                geoType: "single-state"
              },
              table: {
                ...r.table,
                expanded: !1,
                forceDisplay: !0
              }
            });
            break;
          case "google-map":
            o({
              ...r,
              general: {
                ...r.general,
                geoType: "google-map"
              }
            });
        }
        break;
      case "verticalSortedLegend":
        o({
          ...r,
          legend: {
            ...r.legend,
            verticalSorted: !r.legend.verticalSorted,
            singleRow: !1,
            singleColumn: !1
          }
        });
        break;
      case "legendShowSpecialClassesLast":
        o({
          ...r,
          legend: {
            ...r.legend,
            showSpecialClassesLast: !r.legend.showSpecialClassesLast
          }
        });
        break;
      case "dynamicDescription":
        o({
          ...r,
          editor: {
            ...r.editor,
            activeFilterValueForDescription: R
          },
          legend: {
            ...r.legend,
            dynamicDescription: !r.legend.dynamicDescription
          }
        });
        break;
      case "changeLegendDescription":
        const [Y, Q] = R;
        o({
          ...r,
          legend: {
            ...r.legend,
            descriptions: {
              ...r.legend.descriptions,
              [Y]: [Q]
            }
          }
        });
        break;
      case "appearanceType":
        o({
          ...r,
          tooltips: {
            ...r.tooltips,
            appearanceType: R
          }
        });
        break;
      case "linkLabel":
        o({
          ...r,
          tooltips: {
            ...r.tooltips,
            linkLabel: R
          }
        });
        break;
      case "displayStateLabels":
        o({
          ...r,
          general: {
            ...r.general,
            displayStateLabels: !r.general.displayStateLabels
          }
        });
        break;
      case "capitalizeLabels":
        o({
          ...r,
          tooltips: {
            ...r.tooltips,
            capitalizeLabels: R
          }
        });
        break;
      case "showDataTable":
        o({
          ...r,
          table: {
            ...r.table,
            forceDisplay: R
          }
        });
        break;
      case "limitDataTableHeight":
        o({
          ...r,
          table: {
            ...r.table,
            limitHeight: R
          }
        });
        break;
      case "chooseState":
        let zt = { fipsCode: Object.keys(Bt).find((cn) => Bt[cn] === R), stateName: R };
        if (o({
          ...r,
          general: {
            ...r.general,
            statePicked: zt
          }
        }), r) {
          const cn = generateRuntimeData(r);
          c(cn);
        }
        break;
      case "classificationType":
        o({
          ...r,
          legend: {
            ...r.legend,
            type: R
          }
        });
        break;
      case "countyCensusYear":
        o({
          ...r,
          general: {
            ...r.general,
            countyCensusYear: R
          }
        });
        break;
      case "filterControlsCountyYear":
        o({
          ...r,
          general: {
            ...r.general,
            filterControlsCountyYear: R
          }
        });
        break;
      case "filterControlsStatePicked":
        o({
          ...r,
          general: {
            ...r.general,
            filterControlsStatePicked: R
          }
        });
        break;
      case "filterBehavior":
        o({
          ...r,
          filterBehavior: R
        });
        break;
      default:
        console.warn("COVE: Did not recognize editor property.");
        break;
    }
  }, $ = async (L, R, j) => {
    let Y;
    switch (R) {
      case "specialClassEdit":
        Y = Array.from(U), Y[j.index][j.prop] = j.value, o({
          ...r,
          legend: {
            ...r.legend,
            specialClasses: Y
          }
        });
        break;
      case "specialClassDelete":
        Y = Array.from(U), Y.splice(j, 1), o({
          ...r,
          legend: {
            ...r.legend,
            specialClasses: Y
          }
        });
        break;
      case "specialClassAdd":
        Y = U, Y.push(j), o({
          ...r,
          legend: {
            ...r.legend,
            specialClasses: Y
          }
        });
        break;
      case "name":
        Ia(r, r.columns.geo.name), o({
          ...r,
          columns: {
            ...r.columns,
            [L]: {
              ...r.columns[L],
              [R]: j
            }
          }
        });
        break;
      default:
        o({
          ...r,
          columns: {
            ...r.columns,
            [L]: {
              ...r.columns[L],
              [R]: j
            }
          }
        });
        break;
    }
  }, V = (L) => {
    const R = `additionalColumn${L}`;
    o({
      ...r,
      columns: {
        ...r.columns,
        [R]: {
          label: "New Column",
          dataTable: !1,
          tooltips: !1,
          prefix: "",
          suffix: ""
        }
      }
    });
  }, B = (L) => {
    const R = r.columns;
    delete R[L], o({
      ...r,
      columns: R
    });
  }, G = (L) => {
    var Y, Q;
    const R = ((Q = (Y = r.filters) == null ? void 0 : Y[L == null ? void 0 : L[0]]) == null ? void 0 : Q.label) || "Unlabeled Legend", j = i[L[0]];
    if (j)
      return R + " - " + j.values[L[1]];
  }, W = () => {
    let L = ne.cloneDeep(r);
    delete L[""], delete L.newViz;
    let R = ne.cloneDeep(r.legend);
    return delete R.disabledAmt, L.legend = R, delete L.defaultData, L.general = ne.cloneDeep(r.general), r.columns && (L.columns = r.columns), L;
  }, H = r.general.palette.isReversed;
  function Z() {
    let L = [], R = [], j = [];
    for (let Y in Ge)
      H || (Y.includes("qualitative") && !Y.endsWith("reverse") && R.push(Y), Y.includes("colorblindsafe") && !Y.endsWith("reverse") && j.push(Y), !Y.includes("qualitative") && !Y.includes("colorblindsafe") && !Y.endsWith("reverse") && L.push(Y)), H && (Y.includes("qualitative") && Y.endsWith("reverse") && R.push(Y), Y.includes("colorblindsafe") && Y.endsWith("reverse") && j.push(Y), !Y.includes("qualitative") && !Y.includes("colorblindsafe") && Y.endsWith("reverse") && L.push(Y));
    return [L, R, j];
  }
  const [X, J, ee] = Z();
  E.useEffect(() => {
    w(r.defaultData), d();
  }, [r]), E.useEffect(() => {
    const L = W();
    n && e && e(L);
  }, [r]);
  const re = [
    /* @__PURE__ */ s("option", { value: "", children: "- Select Option -" }, "Select Option")
  ];
  v.map((L) => re.push(
    /* @__PURE__ */ s("option", { value: L, children: L }, L)
  ));
  let ve = {};
  r.data.forEach((L) => {
    Object.keys(L).forEach((R) => {
      ve[R] = ve[R] || [];
      const j = typeof L[R] == "number" ? L[R].toString() : L[R];
      ve[R].indexOf(j) === -1 && ve[R].push(j);
    });
  });
  const Ne = Object.keys(r.columns).filter((L) => ["geo", "navigate", "primary", "latitude", "longitude"].includes(L) !== !0), te = O1(r, o), Oe = () => {
    P(!N), o({
      ...r,
      showEditorPanel: !N
    });
  }, He = () => {
    let R = Object.entries(Bt).sort((Y, Q) => Y[0].localeCompare(Q[0])), j = [];
    return R.forEach((Y) => {
      j.push(
        /* @__PURE__ */ s("option", { value: Y[1], children: Y[1] }, Y[0])
      );
    }), j;
  }, Mt = [];
  i.length > 0 && i.forEach((L, R) => {
    var j, Y;
    (Y = (j = i[R]) == null ? void 0 : j.values) == null || Y.forEach((Q, ke) => {
      Mt.push([R, ke]);
    });
  });
  let sn = 8;
  const Nn = (L, R) => ({
    ...R
  }), Ee = () => {
    var R;
    let L = ((R = l == null ? void 0 : l.items) == null ? void 0 : R.length) > 0 ? l.items.filter((j) => !j.special).map((j) => j.value) : [];
    return r.legend.cateogryValuesOrder ? L.sort((j, Y) => {
      let Q = r.legend.cateogryValuesOrder.indexOf(j), ke = r.legend.cateogryValuesOrder.indexOf(Y);
      return Q === ke ? 0 : Q === -1 ? 1 : ke === -1 ? -1 : Q - ke;
    }) : L;
  }, Ae = () => Ee().filter((L) => !(L != null && L.special)).map((L, R) => /* @__PURE__ */ s(o1, { draggableId: `item-${L}`, index: R, children: (j, Y) => /* @__PURE__ */ s("li", { style: { position: "relative" }, children: /* @__PURE__ */ s(
    "div",
    {
      className: Y.isDragging ? "currently-dragging" : "",
      style: Nn(Y.isDragging, j.draggableProps.style),
      ref: j.innerRef,
      ...j.draggableProps,
      ...j.dragHandleProps,
      children: L
    }
  ) }) }, L)), Qe = ((Re = r == null ? void 0 : r.dataKey) == null ? void 0 : Re.includes("http://")) || ((Te = r == null ? void 0 : r.dataKey) == null ? void 0 : Te.includes("https://"));
  return /* @__PURE__ */ s(jt, { component: "EditorPanel", children: /* @__PURE__ */ M(
    ji.Sidebar,
    {
      isDashboard: t,
      displayPanel: N,
      title: "Configure Map",
      onBackClick: Oe,
      children: [
        /* @__PURE__ */ s(ps, { multiline: !0 }),
        /* @__PURE__ */ M(Xn, { allowZeroExpanded: !0, children: [
          /* @__PURE__ */ M(qe, { children: [
            " ",
            /* @__PURE__ */ s(Ze, { children: /* @__PURE__ */ s(Ke, { children: "Type" }) }),
            /* @__PURE__ */ M(Ye, { children: [
              /* @__PURE__ */ M("label", { children: [
                /* @__PURE__ */ s("span", { className: "edit-label column-heading", children: /* @__PURE__ */ s("span", { children: "Geography" }) }),
                /* @__PURE__ */ M("ul", { className: "geo-buttons d-grid", style: { gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }, children: [
                  /* @__PURE__ */ M(
                    "button",
                    {
                      className: `${r.general.geoType === "us" || r.general.geoType === "us-county" ? "active" : ""} full-width`,
                      onClick: (L) => {
                        L.preventDefault(), A("geoType", "us");
                      },
                      children: [
                        /* @__PURE__ */ s(M1, {}),
                        /* @__PURE__ */ s("span", { children: "United States" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ M(
                    "button",
                    {
                      className: `${r.general.geoType === "us-region" ? "active" : ""} full-width`,
                      onClick: (L) => {
                        L.preventDefault(), A("geoType", "us-region");
                      },
                      children: [
                        /* @__PURE__ */ s(A0, {}),
                        /* @__PURE__ */ s("span", { children: "U.S. Region" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ M(
                    "button",
                    {
                      className: `${r.general.geoType === "world" ? "active" : ""} full-width`,
                      onClick: (L) => {
                        L.preventDefault(), A("geoType", "world");
                      },
                      children: [
                        /* @__PURE__ */ s(E1, {}),
                        /* @__PURE__ */ s("span", { children: "World" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ M(
                    "button",
                    {
                      className: `${r.general.geoType === "single-state" ? "active" : ""} full-width`,
                      onClick: (L) => {
                        L.preventDefault(), A("geoType", "single-state");
                      },
                      children: [
                        /* @__PURE__ */ s(x1, {}),
                        /* @__PURE__ */ s("span", { children: "U.S. State" })
                      ]
                    }
                  )
                ] })
              ] }),
              (r.general.geoType === "us" || r.general.geoType === "us-county") && /* @__PURE__ */ s(
                we,
                {
                  label: "Geography Subtype",
                  value: r.general.geoType,
                  options: [
                    { value: "us", label: "US State-Level" },
                    { value: "us-county", label: "US County-Level" }
                  ],
                  onChange: (L) => {
                    A("geoType", L.target.value);
                  }
                }
              ),
              (r.general.geoType === "us-county" || r.general.geoType === "single-state") && /* @__PURE__ */ s(
                we,
                {
                  label: "County Census Year",
                  value: r.general.countyCensusYear || "2019",
                  options: [
                    { value: "2022", label: "2022" },
                    { value: "2021", label: "2021" },
                    { value: "2020", label: "2020" },
                    { value: "2019", label: "2019" },
                    { value: "2015", label: "2015" },
                    { value: "2014", label: "2014" },
                    { value: "2013", label: "2013" }
                  ],
                  onChange: (L) => {
                    A("countyCensusYear", L.target.value);
                  }
                }
              ),
              (r.general.geoType === "us-county" || r.general.geoType === "single-state") && /* @__PURE__ */ s(
                we,
                {
                  label: "Filter Controlling County Census Year",
                  value: r.general.filterControlsCountyYear || "",
                  options: [
                    { value: "", label: "None" },
                    ...r.filters ? r.filters.map((L) => ({ value: L.columnName, label: L.columnName })) : []
                  ],
                  onChange: (L) => {
                    A("filterControlsCountyYear", L.target.value);
                  }
                }
              ),
              r.general.geoType === "single-state" && h && /* @__PURE__ */ s(
                we,
                {
                  label: "Filter Controlling State Picked",
                  value: r.general.filterControlsStatePicked || "",
                  options: [
                    { value: "", label: "None" },
                    ...h && (v == null ? void 0 : v.map((L) => ({ value: L, label: L })))
                  ],
                  onChange: (L) => {
                    A("filterControlsStatePicked", L.target.value);
                  }
                }
              ),
              r.general.geoType === "single-state" && /* @__PURE__ */ s(
                we,
                {
                  label: "State Selector",
                  value: ((Fe = r.general.statePicked) == null ? void 0 : Fe.stateName) || "",
                  options: He().map((L) => ({
                    value: L.props.value,
                    label: L.props.children
                  })),
                  onChange: (L) => {
                    A("chooseState", L.target.value);
                  }
                }
              ),
              /* @__PURE__ */ s(
                we,
                {
                  label: /* @__PURE__ */ M(le, { children: [
                    "Map Type",
                    /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: 'Select "Data" to create a color-coded data map. To create a navigation-only map, select "Navigation."' }) })
                    ] })
                  ] }),
                  value: r.general.type,
                  options: [
                    { value: "data", label: "Data" },
                    ...r.general.geoType === "us-county" ? [{ value: "us-geocode", label: "Geocode" }] : [],
                    ...r.general.geoType === "world" ? [{ value: "world-geocode", label: "Geocode" }] : [],
                    ...r.general.geoType !== "us-county" ? [{ value: "navigation", label: "Navigation" }] : [],
                    ...r.general.geoType === "world" || r.general.geoType === "us" ? [{ value: "bubble", label: "Bubble" }] : []
                  ],
                  onChange: (L) => {
                    A("editorMapType", L.target.value);
                  }
                }
              ),
              (r.general.type === "navigation" || r.general.type === "data") && /* @__PURE__ */ s(
                we,
                {
                  label: "Navigation Behavior",
                  value: r.general.navigationTarget,
                  options: [
                    { value: "_self", label: "Same Window" },
                    { value: "_blank", label: "New Window" }
                  ],
                  onChange: (L) => {
                    const R = ne.cloneDeep(r);
                    R.general.navigationTarget = L.target.value, o(R);
                  }
                }
              ),
              /* @__PURE__ */ M("label", { children: [
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Data Classification Type" }),
                /* @__PURE__ */ M("div", { children: [
                  /* @__PURE__ */ M("label", { children: [
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "radio",
                        name: "equalnumber",
                        value: "equalnumber",
                        checked: r.legend.type === "equalnumber" || r.legend.type === "equalinterval",
                        onChange: (L) => A("classificationType", L.target.value)
                      }
                    ),
                    "Numeric/Quantitative"
                  ] }),
                  /* @__PURE__ */ M("label", { children: [
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "radio",
                        name: "category",
                        value: "category",
                        checked: r.legend.type === "category",
                        onChange: (L) => A("classificationType", L.target.value)
                      }
                    ),
                    "Categorical"
                  ] })
                ] })
              ] }),
              p.geoType === "us" && p.type !== "navigation" && p.type !== "bubble" && /* @__PURE__ */ M("label", { className: "checkbox mt-4", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.general.displayAsHex,
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      R.general.displayAsHex = L.target.checked, o(R);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Display As Hex Map" })
              ] }),
              /* @__PURE__ */ M("label", { className: "checkbox mt-4", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.hexMap.type === "shapes",
                    onChange: (L) => {
                      o({
                        ...r,
                        hexMap: {
                          ...r.hexMap,
                          type: L.target.checked ? "shapes" : "standard"
                        }
                      });
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Display Shapes on Hex Map" })
              ] }),
              /* @__PURE__ */ s(Ns.ShapeColumns, { columnsOptions: re }),
              r.general.geoType === "us" && r.general.type !== "bubble" && r.general.displayAsHex === !1 && /* @__PURE__ */ s(
                Li,
                {
                  label: "Show state labels",
                  checked: r.general.displayStateLabels,
                  onChange: (L) => {
                    A("displayStateLabels", L.target.checked);
                  },
                  tooltip: /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Recommended set to display for Section 508 compliance." }) })
                  ] })
                }
              ),
              r.general.geoType === "us" && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: p.territoriesAlwaysShow || !1,
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      R.general.territoriesAlwaysShow = L.target.checked, o(R);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Show All Territories" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ M(qe, { children: [
            " ",
            /* @__PURE__ */ s(Ze, { children: /* @__PURE__ */ s(Ke, { children: "General" }) }),
            /* @__PURE__ */ M(Ye, { children: [
              /* @__PURE__ */ s(
                ye,
                {
                  value: p.title,
                  "data-testid": "title-input",
                  updateField: te,
                  section: "general",
                  fieldName: "title",
                  id: "title",
                  label: "Title",
                  placeholder: "Map Title",
                  tooltip: /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Title is required to set the name of the download file but can be hidden using the option below." }) })
                  ] })
                }
              ),
              /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.general.showTitle || !1,
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      R.general.showTitle = L.target.checked, o(R);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Show Title" })
              ] }),
              /* @__PURE__ */ s(
                ye,
                {
                  value: p.superTitle || "",
                  updateField: te,
                  section: "general",
                  fieldName: "superTitle",
                  label: "Super Title",
                  tooltip: /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Super Title" }) })
                  ] })
                }
              ),
              /* @__PURE__ */ s(
                ye,
                {
                  type: "textarea",
                  value: p.introText,
                  updateField: te,
                  section: "general",
                  fieldName: "introText",
                  label: "Message",
                  tooltip: /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Intro Text" }) })
                  ] })
                }
              ),
              /* @__PURE__ */ s(
                ye,
                {
                  type: "textarea",
                  value: p.subtext,
                  updateField: te,
                  section: "general",
                  fieldName: "subtext",
                  label: "Subtext",
                  tooltip: /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub." }) })
                  ] })
                }
              ),
              /* @__PURE__ */ s(
                ye,
                {
                  type: "textarea",
                  value: p.footnotes,
                  updateField: te,
                  section: "general",
                  fieldName: "footnotes",
                  label: "Footnotes",
                  tooltip: /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Footnotes" }) })
                  ] })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ M(qe, { children: [
            " ",
            /* @__PURE__ */ s(Ze, { children: /* @__PURE__ */ s(Ke, { children: "Columns" }) }),
            /* @__PURE__ */ M(Ye, { children: [
              /* @__PURE__ */ M("fieldset", { className: "primary-fieldset edit-block", children: [
                /* @__PURE__ */ M("label", { children: [
                  /* @__PURE__ */ M("span", { className: "edit-label column-heading", children: [
                    "Geography",
                    /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Select the source column containing the map location names or, for county-level maps, the FIPS codes." }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ s(
                    we,
                    {
                      value: r.columns.geo ? r.columns.geo.name : re[0],
                      options: re.map((L) => L.key),
                      onChange: (L) => {
                        $("geo", "name", L.target.value);
                      }
                    }
                  )
                ] }),
                r.general.type === "us-geocode" && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "checkbox",
                      checked: r.general.convertFipsCodes,
                      onChange: (L) => {
                        o({
                          ...r,
                          general: {
                            ...r.general,
                            convertFipsCodes: L.target.checked
                          }
                        });
                      }
                    }
                  ),
                  /* @__PURE__ */ s("span", { className: "edit-label", children: "Convert FIPS Codes to Geography Name" })
                ] }),
                /* @__PURE__ */ M("label", { className: "checkbox", children: [
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "checkbox",
                      checked: r.general.hideGeoColumnInTooltip || !1,
                      onChange: (L) => {
                        const R = ne.cloneDeep(r);
                        R.general.hideGeoColumnInTooltip = L.target.checked, o(R);
                      }
                    }
                  ),
                  /* @__PURE__ */ s("span", { className: "edit-label", children: "Hide Geography Column Name in Tooltip" })
                ] }),
                /* @__PURE__ */ s(
                  ye,
                  {
                    value: r.general.geoLabelOverride,
                    section: "general",
                    fieldName: "geoLabelOverride",
                    label: "Geography Label",
                    className: "edit-label",
                    updateField: te,
                    tooltip: /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Enter a geography label for use in tooltips." }) })
                    ] })
                  }
                )
              ] }),
              r.general.type !== "navigation" && /* @__PURE__ */ M("fieldset", { className: "primary-fieldset edit-block", children: [
                /* @__PURE__ */ s(
                  we,
                  {
                    label: "Data Column",
                    value: f.primary.name,
                    options: re.map((L) => L.key),
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      R.columns.primary.name = L.target.value, R.columns.primary.label = L.target.value, o(R);
                    },
                    tooltip: /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Select the source column containing the categorical or numeric values to be mapped." }) })
                    ] })
                  }
                ),
                /* @__PURE__ */ M("label", { className: "checkbox", children: [
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "checkbox",
                      checked: r.general.hidePrimaryColumnInTooltip || !1,
                      onChange: (L) => {
                        A("hidePrimaryColumnInTooltip", L.target.checked);
                      }
                    }
                  ),
                  /* @__PURE__ */ s("span", { className: "edit-label", children: "Hide Data Column Name in Tooltip" })
                ] }),
                /* @__PURE__ */ s(
                  ye,
                  {
                    value: f.primary.label,
                    section: "columns",
                    subsection: "primary",
                    fieldName: "label",
                    label: "Data Label",
                    updateField: te,
                    tooltip: /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Enter a data label for use in tooltips and the data table." }) })
                    ] })
                  }
                ),
                /* @__PURE__ */ M("ul", { className: "column-edit", children: [
                  /* @__PURE__ */ M("li", { className: "three-col", children: [
                    /* @__PURE__ */ s(
                      ye,
                      {
                        value: f.primary.prefix,
                        section: "columns",
                        subsection: "primary",
                        fieldName: "prefix",
                        label: "Prefix",
                        updateField: te
                      }
                    ),
                    /* @__PURE__ */ s(
                      ye,
                      {
                        value: f.primary.suffix,
                        section: "columns",
                        subsection: "primary",
                        fieldName: "suffix",
                        label: "Suffix",
                        updateField: te
                      }
                    ),
                    /* @__PURE__ */ s(
                      ye,
                      {
                        type: "number",
                        value: f.primary.roundToPlace,
                        section: "columns",
                        subsection: "primary",
                        fieldName: "roundToPlace",
                        label: "Round",
                        updateField: te,
                        min: 0
                      }
                    )
                  ] }),
                  /* @__PURE__ */ s("li", { children: /* @__PURE__ */ M("label", { className: "checkbox", children: [
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "checkbox",
                        checked: r.columns.primary.useCommas,
                        onChange: (L) => {
                          $("primary", "useCommas", L.target.checked);
                        }
                      }
                    ),
                    /* @__PURE__ */ s("span", { className: "edit-label", children: "Add Commas to Numbers" })
                  ] }) }),
                  /* @__PURE__ */ s("li", { children: /* @__PURE__ */ M("label", { className: "checkbox", children: [
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "checkbox",
                        checked: r.columns.primary.dataTable || !1,
                        onChange: (L) => {
                          $("primary", "dataTable", L.target.checked);
                        }
                      }
                    ),
                    /* @__PURE__ */ s("span", { className: "edit-label", children: "Show in Data Table" })
                  ] }) }),
                  /* @__PURE__ */ s("li", { children: /* @__PURE__ */ M("label", { className: "checkbox", children: [
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "checkbox",
                        checked: r.columns.primary.tooltip || !1,
                        onChange: (L) => {
                          $("primary", "tooltip", L.target.checked);
                        }
                      }
                    ),
                    /* @__PURE__ */ s("span", { className: "edit-label", children: "Show in Tooltips" })
                  ] }) })
                ] })
              ] }),
              r.general.type === "bubble" && r.legend.type === "category" && /* @__PURE__ */ s("fieldset", { className: "primary-fieldset edit-block", children: /* @__PURE__ */ M("label", { children: [
                /* @__PURE__ */ M("span", { className: "edit-label column-heading", children: [
                  "Category Column",
                  /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Select the source column containing the categorical bubble values to be mapped." }) })
                  ] })
                ] }),
                /* @__PURE__ */ s(
                  "select",
                  {
                    value: r.columns.categorical ? r.columns.categorical.name : re[0],
                    onChange: (L) => {
                      $("categorical", "name", L.target.value);
                    },
                    children: re
                  }
                )
              ] }) }),
              /* @__PURE__ */ M(le, { children: [
                /* @__PURE__ */ s(
                  we,
                  {
                    label: "Latitude Column",
                    value: r.columns.latitude.name,
                    options: re.map((L) => L.key),
                    onChange: (L) => {
                      $("latitude", "name", L.target.value);
                    }
                  }
                ),
                /* @__PURE__ */ s(
                  we,
                  {
                    label: "Longitude Column",
                    value: r.columns.longitude.name,
                    options: re.map((L) => L.key),
                    onChange: (L) => {
                      $("longitude", "name", L.target.value);
                    }
                  }
                )
              ] }),
              r.general.type !== "navigation" && /* @__PURE__ */ M("fieldset", { className: "primary-fieldset edit-block", children: [
                /* @__PURE__ */ s("label", { children: /* @__PURE__ */ M("span", { className: "edit-label", children: [
                  "Special Classes",
                  /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: 'For secondary values such as "NA", the system can automatically color-code them in shades of gray, one shade for each special class.' }) })
                  ] })
                ] }) }),
                r.legend.specialClasses.length === 2 && /* @__PURE__ */ s(
                  Na,
                  {
                    type: "info",
                    message: "If a third special class is needed you can apply a pattern to set it apart.",
                    showCloseButton: !1
                  }
                ),
                U.map((L, R) => /* @__PURE__ */ M("div", { className: "edit-block", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      className: "remove-column",
                      onClick: (j) => {
                        j.preventDefault(), $("primary", "specialClassDelete", R);
                      },
                      children: "Remove"
                    }
                  ),
                  /* @__PURE__ */ M("p", { children: [
                    "Special Class ",
                    R + 1
                  ] }),
                  /* @__PURE__ */ s(
                    we,
                    {
                      label: "Data Key",
                      value: L.key,
                      options: re.map((j) => ({
                        value: j.key,
                        label: j.key
                      })),
                      onChange: (j) => {
                        $("primary", "specialClassEdit", {
                          prop: "key",
                          index: R,
                          value: j.target.value
                        });
                      }
                    }
                  ),
                  /* @__PURE__ */ s(
                    we,
                    {
                      label: "Value",
                      value: L.value,
                      options: [
                        { value: "", label: "- Select Value -" },
                        ...(ve[L.key] || []).sort().map((j) => ({ value: j, label: j }))
                      ],
                      onChange: (j) => {
                        $("primary", "specialClassEdit", {
                          prop: "value",
                          index: R,
                          value: j.target.value
                        });
                      }
                    }
                  ),
                  /* @__PURE__ */ M("label", { children: [
                    /* @__PURE__ */ s("span", { className: "edit-label column-heading", children: "Label" }),
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "text",
                        value: L.label,
                        onChange: (j) => {
                          $("primary", "specialClassEdit", {
                            prop: "label",
                            index: R,
                            value: j.target.value
                          });
                        }
                      }
                    )
                  ] })
                ] }, `special-class-${R}`)),
                r.legend.specialClasses.length < 2 && /* @__PURE__ */ s(
                  "button",
                  {
                    className: "btn btn-primary full-width",
                    onClick: (L) => {
                      L.preventDefault(), $("primary", "specialClassAdd", {});
                    },
                    children: "Add Special Class"
                  }
                )
              ] }),
              /* @__PURE__ */ M("label", { className: "edit-block navigate column-heading", children: [
                /* @__PURE__ */ M("span", { className: "edit-label column-heading", children: [
                  "Navigation",
                  /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "To provide end users with navigation functionality, select the source column containing the navigation URLs." }) })
                  ] })
                ] }),
                /* @__PURE__ */ s(
                  we,
                  {
                    value: r.columns.navigate ? r.columns.navigate.name : "",
                    options: re.map((L) => L.key),
                    onChange: (L) => {
                      $("navigate", "name", L.target.value);
                    }
                  }
                )
              ] }),
              r.general.type !== "navigation" && /* @__PURE__ */ M("fieldset", { className: "primary-fieldset edit-block", children: [
                /* @__PURE__ */ s("label", { children: /* @__PURE__ */ M("span", { className: "edit-label", children: [
                  "Additional Columns",
                  /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "You can specify additional columns to display in tooltips and / or the supporting data table." }) })
                  ] })
                ] }) }),
                Ne.map((L) => /* @__PURE__ */ M("fieldset", { className: "edit-block", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      className: "remove-column",
                      onClick: (R) => {
                        R.preventDefault(), B(L);
                      },
                      children: "Remove"
                    }
                  ),
                  /* @__PURE__ */ s(
                    we,
                    {
                      label: "Column",
                      value: r.columns[L] ? r.columns[L].name : "",
                      options: re.map((R) => ({
                        value: R.props.value,
                        label: R.props.children
                      })),
                      onChange: (R) => {
                        $(L, "name", R.target.value);
                      }
                    }
                  ),
                  /* @__PURE__ */ s(
                    ye,
                    {
                      value: f[L].label,
                      section: "columns",
                      subsection: L,
                      fieldName: "label",
                      label: "Label",
                      updateField: te
                    }
                  ),
                  /* @__PURE__ */ M("ul", { className: "column-edit", children: [
                    /* @__PURE__ */ M("li", { className: "three-col", children: [
                      /* @__PURE__ */ s(
                        ye,
                        {
                          value: f[L].prefix,
                          section: "columns",
                          subsection: L,
                          fieldName: "prefix",
                          label: "Prefix",
                          updateField: te
                        }
                      ),
                      /* @__PURE__ */ s(
                        ye,
                        {
                          value: f[L].suffix,
                          section: "columns",
                          subsection: L,
                          fieldName: "suffix",
                          label: "Suffix",
                          updateField: te
                        }
                      ),
                      /* @__PURE__ */ s(
                        ye,
                        {
                          type: "number",
                          value: f[L].roundToPlace,
                          section: "columns",
                          subsection: L,
                          fieldName: "roundToPlace",
                          label: "Round",
                          updateField: te
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s("li", { children: /* @__PURE__ */ M("label", { className: "checkbox", children: [
                      /* @__PURE__ */ s(
                        "input",
                        {
                          type: "checkbox",
                          checked: r.columns[L].useCommas,
                          onChange: (R) => {
                            $(L, "useCommas", R.target.checked);
                          }
                        }
                      ),
                      /* @__PURE__ */ s("span", { className: "edit-label", children: "Add Commas to Numbers" })
                    ] }) }),
                    /* @__PURE__ */ s("li", { children: /* @__PURE__ */ M("label", { className: "checkbox", children: [
                      /* @__PURE__ */ s(
                        "input",
                        {
                          type: "checkbox",
                          checked: r.columns[L].dataTable,
                          onChange: (R) => {
                            $(L, "dataTable", R.target.checked);
                          }
                        }
                      ),
                      /* @__PURE__ */ s("span", { className: "edit-label", children: "Show in Data Table" })
                    ] }) }),
                    /* @__PURE__ */ s("li", { children: /* @__PURE__ */ M("label", { className: "checkbox", children: [
                      /* @__PURE__ */ s(
                        "input",
                        {
                          type: "checkbox",
                          checked: r.columns[L].tooltip,
                          onChange: (R) => {
                            $(L, "tooltip", R.target.checked);
                          }
                        }
                      ),
                      /* @__PURE__ */ s("span", { className: "edit-label", children: "Show in Tooltips" })
                    ] }) })
                  ] })
                ] }, L)),
                /* @__PURE__ */ s(
                  "button",
                  {
                    className: "btn btn-primary full-width",
                    onClick: (L) => {
                      L.preventDefault(), V(Ne.length + 1);
                    },
                    children: "Add Column"
                  }
                )
              ] }),
              r.legend.type === "category" && /* @__PURE__ */ M("fieldset", { className: "primary-fieldset edit-block", children: [
                /* @__PURE__ */ s("label", { children: /* @__PURE__ */ M("span", { className: "edit-label", children: [
                  "Additional Category",
                  /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "You can provide additional categories to ensure they appear in the legend" }) })
                  ] })
                ] }) }),
                r.legend.additionalCategories && r.legend.additionalCategories.map((L, R) => /* @__PURE__ */ M("fieldset", { className: "edit-block", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      className: "remove-column",
                      onClick: (j) => {
                        j.preventDefault();
                        const Y = [...r.legend.additionalCategories];
                        Y.splice(R, 1), te("legend", null, "additionalCategories", Y);
                      },
                      children: "Remove"
                    }
                  ),
                  /* @__PURE__ */ M("label", { children: [
                    /* @__PURE__ */ s("span", { className: "edit-label column-heading", children: "Category" }),
                    /* @__PURE__ */ s(
                      ye,
                      {
                        value: L,
                        section: "legend",
                        subsection: null,
                        fieldName: "additionalCategories",
                        updateField: (j, Y, Q, ke) => {
                          const ut = [...r.legend.additionalCategories];
                          ut[R] = ke, te(j, Y, Q, ut);
                        }
                      }
                    )
                  ] })
                ] }, L)),
                /* @__PURE__ */ s(
                  "button",
                  {
                    className: "btn btn-primary full-width",
                    onClick: (L) => {
                      L.preventDefault();
                      const R = [...r.legend.additionalCategories || []];
                      R.push(""), te("legend", null, "additionalCategories", R);
                    },
                    children: "Add Category"
                  }
                )
              ] })
            ] })
          ] }),
          " ",
          r.general.type !== "navigation" && /* @__PURE__ */ M(qe, { children: [
            " ",
            /* @__PURE__ */ s(Ze, { children: /* @__PURE__ */ s(Ke, { children: "Legend" }) }),
            /* @__PURE__ */ M(Ye, { children: [
              (r.legend.type === "equalnumber" || r.legend.type === "equalinterval") && /* @__PURE__ */ s(
                we,
                {
                  label: "Legend Type",
                  value: S.type,
                  options: [
                    { value: "equalnumber", label: "Equal Number (Quantiles)" },
                    { value: "equalinterval", label: "Equal Interval" }
                  ],
                  onChange: (L) => {
                    let R = +typeof r.data[0][r.columns.primary.name], j = r.data[0][r.columns.primary.name], Y = [];
                    j || Y.push(
                      `There appears to be values missing for data in the primary column ${r.columns.primary.name}`
                    ), R === "string" && isNaN(R) && value !== "category" ? Y.push(
                      "Error with legend. Primary columns that are text must use a categorical legend type. Try changing the legend type to DEV-12345categorical."
                    ) : Y = [];
                    const Q = ne.cloneDeep(r);
                    Q.general.equalNumberOptIn = !0, Q.legend.type = L.target.value, Q.runtime.editorErrorMessage = Y, o(Q);
                  }
                }
              ),
              r.general.type !== "navigation" && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.general.showSidebar || !1,
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      R.general.showSidebar = L.target.checked, o(R);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Show Legend" })
              ] }),
              r.general.type !== "navigation" && /* @__PURE__ */ M(le, { children: [
                /* @__PURE__ */ s(
                  we,
                  {
                    label: "Legend Position",
                    value: S.position || "",
                    options: [
                      { value: "side", label: "Side" },
                      { value: "bottom", label: "Bottom" },
                      { value: "top", label: "Top" }
                    ],
                    onChange: (L) => {
                      A("sidebarPosition", L.target.value);
                    }
                  }
                ),
                (r.legend.position === "side" || !r.legend.position) && r.legend.style === "gradient" && /* @__PURE__ */ s("span", { style: { color: "red", fontSize: "14px" }, children: "Position must be set to top or bottom to use gradient style." })
              ] }),
              r.general.type !== "navigation" && /* @__PURE__ */ s(
                we,
                {
                  label: /* @__PURE__ */ M(le, { children: [
                    "Legend Style",
                    /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(
                        de,
                        {
                          display: "question",
                          style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                        }
                      ) }),
                      /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "If using gradient style, limit the legend to five items for better mobile visibility, and position the legend at the top or bottom." }) })
                    ] })
                  ] }),
                  value: S.style || "",
                  options: [
                    { value: "circles", label: "circles" },
                    { value: "boxes", label: "boxes" },
                    ...S.position !== "side" ? [{ value: "gradient", label: "gradient" }] : []
                  ],
                  onChange: (L) => {
                    A("legendStyle", L.target.value);
                  }
                }
              ),
              r.general.type !== "navigation" && r.legend.style === "gradient" && /* @__PURE__ */ M("label", { children: [
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Gradient Style" }),
                /* @__PURE__ */ M(
                  "select",
                  {
                    value: S.subStyle || "",
                    onChange: (L) => {
                      A("legendSubStyle", L.target.value);
                    },
                    children: [
                      /* @__PURE__ */ s("option", { value: "linear blocks", children: "linear blocks" }),
                      /* @__PURE__ */ s("option", { value: "smooth", children: "smooth" })
                    ]
                  }
                )
              ] }),
              k && /* @__PURE__ */ s(
                ye,
                {
                  value: S.separators,
                  updateField: te,
                  section: "legend",
                  fieldName: "separators",
                  label: "Legend Separators",
                  placeholder: "ex: 1,4",
                  tooltip: /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Separators between legend items represented by the legend item numbers separated by commas." }) })
                  ] })
                }
              ),
              r.general.type !== "navigation" && r.legend.style === "gradient" && /* @__PURE__ */ M("label", { children: [
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Tick Rotation (Degrees)" }),
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "number",
                    className: "number-narrow",
                    value: S.tickRotation || "",
                    onChange: (L) => {
                      A("legendTickRotation", L.target.value);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: S.hideBorder,
                    onChange: (L) => {
                      A("legendBorder", L.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label column-heading", children: "Hide Legend Box" }),
                /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                  /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(
                    de,
                    {
                      display: "question",
                      style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                    }
                  ) }),
                  /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: " Default option for top and bottom legends is ‘No Box.’" }) })
                ] })
              ] }),
              S.position === "side" && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: S.singleColumn,
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      R.legend.singleColumn = !L.target.checked, R.legend.singleRow = !1, R.legend.verticalSorted = !1, o(R);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Single Column Legend" })
              ] }),
              S.position !== "side" && S.style !== "gradient" && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: S.singleRow,
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      R.legend.singleRow = !L.target.checked, R.legend.singleColumn = !1, R.legend.verticalSorted = !1, o(R);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Single Row Legend" })
              ] }),
              r.general.type !== "navigation" && r.legend.type === "category" && /* @__PURE__ */ s(
                we,
                {
                  label: "Legend Group By :",
                  value: S.groupBy || "",
                  options: re.map((L) => L.key),
                  onChange: (L) => {
                    const R = ne.cloneDeep(r);
                    R.legend.groupBy = L.target.value, o(R);
                  }
                }
              ),
              r.legend.style !== "gradient" && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: S.verticalSorted,
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      R.legend.verticalSorted = L.target.checked, o(R);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Vertical sorted legend" })
              ] }),
              /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: S.showSpecialClassesLast,
                    onChange: (L) => {
                      A("legendShowSpecialClassesLast", L.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Show Special Classes Last" })
              ] }),
              S.type !== "category" && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: S.separateZero || !1,
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      return R.legend.separateZero = L.target.checked, o(R);
                    }
                  }
                ),
                /* @__PURE__ */ M("span", { className: "edit-label column-heading", children: [
                  "Separate Zero",
                  /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(
                      de,
                      {
                        display: "question",
                        style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                      }
                    ) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "For numeric data, you can separate the zero value as its own data class." }) })
                  ] })
                ] })
              ] }),
              S.type !== "category" && /* @__PURE__ */ s(
                we,
                {
                  label: /* @__PURE__ */ M(le, { children: [
                    "Number of Items",
                    /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "For numeric maps, select the number of data classes. Do not include designated special classes." }) })
                    ] })
                  ] }),
                  value: S.numberOfItems,
                  options: [...Array(sn).keys()].map((L) => ({
                    value: L + 1,
                    label: L + 1
                  })),
                  onChange: (L) => {
                    A("legendNumber", L.target.value);
                  }
                }
              ),
              S.type === "category" && /* @__PURE__ */ M(ie.Fragment, { children: [
                /* @__PURE__ */ s("label", { children: /* @__PURE__ */ M("span", { className: "edit-label", children: [
                  "Category Order",
                  /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Drag map categories into preferred legend order. " }) })
                  ] })
                ] }) }),
                /* @__PURE__ */ s(
                  t1,
                  {
                    onDragEnd: ({ source: L, destination: R }) => O(L.index, R.index),
                    children: /* @__PURE__ */ s(n1, { droppableId: "category_order", children: (L) => /* @__PURE__ */ M("ul", { ...L.droppableProps, className: "sort-list", ref: L.innerRef, children: [
                      /* @__PURE__ */ s(Ae, {}),
                      L.placeholder
                    ] }) })
                  }
                ),
                l && l.length >= 10 && /* @__PURE__ */ s("section", { className: "error-box my-2", children: /* @__PURE__ */ M("div", { children: [
                  /* @__PURE__ */ s("strong", { className: "pt-1", children: "Warning" }),
                  /* @__PURE__ */ s("p", { children: "The maximum number of categorical legend items is 10. If your data has more than 10 categories your map will not display properly." })
                ] }) })
              ] }),
              /* @__PURE__ */ s(
                ye,
                {
                  value: S.title,
                  updateField: te,
                  section: "legend",
                  fieldName: "title",
                  label: "Legend Title",
                  placeholder: "Legend Title"
                }
              ),
              S.dynamicDescription === !1 && /* @__PURE__ */ s(
                ye,
                {
                  type: "textarea",
                  value: S.description,
                  updateField: te,
                  section: "legend",
                  fieldName: "description",
                  label: "Legend Description"
                }
              ),
              S.dynamicDescription === !0 && /* @__PURE__ */ M(ie.Fragment, { children: [
                /* @__PURE__ */ M("label", { children: [
                  /* @__PURE__ */ s("span", { children: "Legend Description" }),
                  /* @__PURE__ */ M("span", { className: "subtext", children: [
                    "For ",
                    G(x)
                  ] }),
                  /* @__PURE__ */ s(D, { value: S.descriptions[String(x)] })
                ] }),
                /* @__PURE__ */ s("label", { children: /* @__PURE__ */ s(
                  "select",
                  {
                    value: String(x),
                    onChange: (L) => {
                      A("changeActiveFilterValue", L.target.value);
                    },
                    children: Mt.map((L, R) => /* @__PURE__ */ s("option", { value: L, children: G(L) }, R))
                  }
                ) })
              ] }),
              r.filters.length > 0 && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: S.dynamicDescription,
                    onChange: () => {
                      A("dynamicDescription", Mt[0]);
                    }
                  }
                ),
                /* @__PURE__ */ M("span", { className: "edit-label column-heading", children: [
                  "Dynamic Legend Description",
                  /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(
                      de,
                      {
                        display: "question",
                        style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                      }
                    ) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Check this option if the map has multiple filter controls and you want to specify a description for each filter selection." }) })
                  ] })
                ] })
              ] }),
              (r.filters.length > 0 || r.general.type === "bubble" || r.general.geoType === "us") && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: S.unified,
                    onChange: (L) => A("unifiedLegend", L.target.checked)
                  }
                ),
                /* @__PURE__ */ M("span", { className: "edit-label column-heading", children: [
                  "Unified Legend",
                  /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(
                      de,
                      {
                        display: "question",
                        style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                      }
                    ) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ M("p", { children: [
                      "For a map with filters, check this option if you want the high and low values in the legend to be based on ",
                      /* @__PURE__ */ s("em", { children: "all" }),
                      " mapped values."
                    ] }) })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          r.general.type !== "navigation" && /* @__PURE__ */ M(qe, { children: [
            " ",
            /* @__PURE__ */ s(Ze, { children: /* @__PURE__ */ s(Ke, { children: "Filters" }) }),
            /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ s(a1, { config: r, updateField: te, rawData: r.data }) })
          ] }),
          r.general.type !== "navigation" && /* @__PURE__ */ M(qe, { children: [
            " ",
            /* @__PURE__ */ s(Ze, { children: /* @__PURE__ */ s(Ke, { children: "Data Table" }) }),
            /* @__PURE__ */ M(Ye, { children: [
              /* @__PURE__ */ s(
                ye,
                {
                  value: m.label,
                  updateField: te,
                  section: "table",
                  fieldName: "label",
                  id: "dataTableTitle",
                  label: "Data Table Title",
                  placeholder: "Data Table",
                  tooltip: /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Label is required for Data Table for 508 Compliance" }) })
                  ] })
                }
              ),
              /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.table.wrapColumns,
                    onChange: (L) => {
                      o({
                        ...r,
                        table: {
                          ...r.table,
                          wrapColumns: L.target.checked
                        }
                      });
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label column-heading", children: "WRAP DATA TABLE COLUMNS" })
              ] }),
              /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.table.forceDisplay !== void 0 ? r.table.forceDisplay : !t,
                    onChange: (L) => {
                      A("showDataTable", L.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ M("span", { className: "edit-label column-heading", children: [
                  "Show Data Table",
                  /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(
                      de,
                      {
                        display: "question",
                        style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                      }
                    ) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Data tables are required for 508 compliance. When choosing to hide this data table, replace with your own version." }) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ s(
                ye,
                {
                  value: m.indexLabel || "",
                  updateField: te,
                  section: "table",
                  fieldName: "indexLabel",
                  label: "Index Column Header",
                  placeholder: "Location",
                  tooltip: /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "To comply with 508 standards, if the first column in the data table has no header, enter a brief one here." }) })
                  ] })
                }
              ),
              /* @__PURE__ */ s(
                ye,
                {
                  value: r.table.caption,
                  updateField: te,
                  section: "table",
                  fieldName: "caption",
                  label: "Screen Reader Description",
                  placeholder: "Data Table",
                  tooltip: /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "Enter a description of the data table to be read by screen readers." }) })
                  ] }),
                  type: "textarea"
                }
              ),
              /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.table.limitHeight,
                    onChange: (L) => {
                      A("limitDataTableHeight", L.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Limit Table Height" })
              ] }),
              r.table.limitHeight && /* @__PURE__ */ s(
                ye,
                {
                  value: m.height,
                  updateField: te,
                  section: "table",
                  fieldName: "height",
                  label: "Data Table Height",
                  placeholder: "Height(px)",
                  type: "number",
                  min: "0",
                  max: "500"
                }
              ),
              /* @__PURE__ */ s(
                ye,
                {
                  value: m.cellMinWidth,
                  updateField: te,
                  section: "table",
                  fieldName: "cellMinWidth",
                  label: "Table Cell Min Width",
                  type: "number",
                  min: "0",
                  max: "500"
                }
              ),
              /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.table.expanded || !1,
                    onChange: (L) => {
                      A("expandDataTable", L.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Map loads with data table expanded" })
              ] }),
              /* @__PURE__ */ s(
                Li,
                {
                  value: r.table.download,
                  fieldName: "download",
                  label: "Show Download CSV Link",
                  section: "table",
                  updateField: te
                }
              ),
              r.table.download && /* @__PURE__ */ M(le, { children: [
                /* @__PURE__ */ M("label", { className: "checkbox", children: [
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "checkbox",
                      className: "ms-4",
                      checked: r.table.showDownloadLinkBelow,
                      onChange: (L) => {
                        A("toggleDownloadLinkBelow", L.target.checked);
                      }
                    }
                  ),
                  /* @__PURE__ */ s("span", { className: "edit-label", children: "Show Link Below Table" })
                ] }),
                /* @__PURE__ */ s(
                  Li,
                  {
                    value: r.table.downloadVisibleDataOnly,
                    fieldName: "downloadVisibleDataOnly",
                    className: "ms-4",
                    label: "Download only visible data",
                    section: "table",
                    updateField: te
                  }
                )
              ] }),
              t && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.table.showDataTableLink,
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      R.table.showDataTableLink = L.target.checked, o(R);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Show Data Table Name & Link" })
              ] }),
              Qe && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.table.showDownloadUrl,
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      R.table.showDownloadUrl = L.target.checked, o(R);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Show URL to Automatically Updated Data" })
              ] }),
              /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.table.showFullGeoNameInCSV,
                    onChange: (L) => {
                      A("toggleShowFullGeoNameInCSV", L.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Include Full Geo Name in CSV Download" })
              ] }),
              /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.general.showDownloadImgButton,
                    onChange: (L) => {
                      A("toggleDownloadImgButton", L.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Enable Image Download" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ M(qe, { children: [
            " ",
            /* @__PURE__ */ s(Ze, { children: /* @__PURE__ */ s(Ke, { children: "Interactivity" }) }),
            /* @__PURE__ */ M(Ye, { children: [
              /* @__PURE__ */ s(
                we,
                {
                  label: /* @__PURE__ */ M(le, { children: [
                    "Detail displays on",
                    " ",
                    /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "At mobile sizes, information always appears in a popover modal when a user taps on an item." }) })
                    ] })
                  ] }),
                  value: r.tooltips.appearanceType,
                  options: [
                    { value: "hover", label: "Hover - Tooltip" },
                    { value: "click", label: "Click - Popover Modal" }
                  ],
                  onChange: (L) => {
                    A("appearanceType", L.target.value);
                  }
                }
              ),
              r.tooltips.appearanceType === "click" && /* @__PURE__ */ s(
                ye,
                {
                  value: y.linkLabel,
                  section: "tooltips",
                  fieldName: "linkLabel",
                  label: "Tooltips Link Label",
                  updateField: te
                }
              ),
              /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.tooltips.capitalizeLabels,
                    onChange: (L) => {
                      A("capitalizeLabels", L.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Capitalize text inside tooltip" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ M(qe, { children: [
            " ",
            /* @__PURE__ */ s(Ze, { children: /* @__PURE__ */ s(Ke, { children: "Visual" }) }),
            /* @__PURE__ */ M(Ye, { children: [
              /* @__PURE__ */ M("label", { children: [
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Header Theme" }),
                /* @__PURE__ */ s("ul", { className: "color-palette", children: h1.map((L) => /* @__PURE__ */ s(
                  "li",
                  {
                    title: L,
                    onClick: () => {
                      A("headerColor", L);
                    },
                    className: r.general.headerColor === L ? "selected " + L : L
                  },
                  L
                )) })
              ] }),
              /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.general.showTitle || !1,
                    onChange: (L) => {
                      A("showTitle", L.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Show Title" })
              ] }),
              r.general.type === "navigation" && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.general.fullBorder || !1,
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      R.general.fullBorder = L.target.checked, o(R);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Add border around map" })
              ] }),
              /* @__PURE__ */ s(
                we,
                {
                  label: "Geo Border Color",
                  value: r.general.geoBorderColor || "",
                  options: [
                    { value: "darkGray", label: "Dark Gray (Default)" },
                    { value: "sameAsBackground", label: "White" }
                  ],
                  onChange: (L) => {
                    A("geoBorderColor", L.target.value);
                  }
                }
              ),
              /* @__PURE__ */ s("label", { children: /* @__PURE__ */ s("span", { className: "edit-label", children: "Map Color Palette" }) }),
              /* @__PURE__ */ s(
                i1,
                {
                  type: "3d",
                  section: "general",
                  subsection: "palette",
                  fieldName: "isReversed",
                  size: "small",
                  label: "Use selected palette in reverse order",
                  onClick: () => {
                    const L = ne.cloneDeep(r);
                    L.general.palette.isReversed = !L.general.palette.isReversed;
                    let R = "";
                    L.general.palette.isReversed && !r.color.endsWith("reverse") && (R = r.color + "reverse"), !L.general.palette.isReversed && r.color.endsWith("reverse") && (R = r.color.slice(0, -7)), R && (L.color = R), o(L);
                  },
                  value: r.general.palette.isReversed
                }
              ),
              /* @__PURE__ */ s("span", { children: "Sequential" }),
              /* @__PURE__ */ s("ul", { className: "color-palette", children: X.map((L) => {
                const R = {
                  backgroundColor: Ge[L][2]
                }, j = {
                  backgroundColor: Ge[L][4]
                }, Y = {
                  backgroundColor: Ge[L][6]
                };
                return /* @__PURE__ */ M(
                  "li",
                  {
                    title: L,
                    onClick: () => {
                      const Q = ne.cloneDeep(r);
                      Q.color = L, o(Q);
                    },
                    className: r.color === L ? "selected" : "",
                    children: [
                      /* @__PURE__ */ s("span", { style: R }),
                      /* @__PURE__ */ s("span", { style: j }),
                      /* @__PURE__ */ s("span", { style: Y })
                    ]
                  },
                  L
                );
              }) }),
              /* @__PURE__ */ s("span", { children: "Non-Sequential" }),
              /* @__PURE__ */ s("ul", { className: "color-palette", children: J.map((L) => {
                const R = {
                  backgroundColor: Ge[L][2]
                }, j = {
                  backgroundColor: Ge[L][4]
                }, Y = {
                  backgroundColor: Ge[L][6]
                };
                return Ge[L].length <= 8 && r.general.geoType === "us-region" ? "" : /* @__PURE__ */ M(
                  "li",
                  {
                    title: L,
                    onClick: () => {
                      const Q = ne.cloneDeep(r);
                      Q.color = L, o(Q);
                    },
                    className: r.color === L ? "selected" : "",
                    children: [
                      /* @__PURE__ */ s("span", { style: R }),
                      /* @__PURE__ */ s("span", { style: j }),
                      /* @__PURE__ */ s("span", { style: Y })
                    ]
                  },
                  L
                );
              }) }),
              /* @__PURE__ */ s("span", { children: "Colorblind Safe" }),
              /* @__PURE__ */ s("ul", { className: "color-palette", children: ee.map((L) => {
                const R = {
                  backgroundColor: Ge[L][2]
                }, j = {
                  backgroundColor: Ge[L][4]
                }, Y = {
                  backgroundColor: Ge[L][6]
                };
                return Ge[L].length <= 8 && r.general.geoType === "us-region" ? "" : /* @__PURE__ */ M(
                  "li",
                  {
                    title: L,
                    onClick: () => {
                      A("color", L);
                    },
                    className: r.color === L ? "selected" : "",
                    children: [
                      /* @__PURE__ */ s("span", { style: R }),
                      /* @__PURE__ */ s("span", { style: j }),
                      /* @__PURE__ */ s("span", { style: Y })
                    ]
                  },
                  L
                );
              }) }),
              /* @__PURE__ */ M("label", { children: [
                "Geocode Settings",
                /* @__PURE__ */ s(
                  ye,
                  {
                    type: "number",
                    value: r.visual.geoCodeCircleSize,
                    section: "visual",
                    max: "10",
                    fieldName: "geoCodeCircleSize",
                    label: "Geocode Circle Size",
                    updateField: te
                  }
                )
              ] }),
              r.general.type === "bubble" && /* @__PURE__ */ M(le, { children: [
                /* @__PURE__ */ s(
                  ye,
                  {
                    type: "number",
                    value: r.visual.minBubbleSize,
                    section: "visual",
                    fieldName: "minBubbleSize",
                    label: "Minimum Bubble Size",
                    updateField: te
                  }
                ),
                /* @__PURE__ */ s(
                  ye,
                  {
                    type: "number",
                    value: r.visual.maxBubbleSize,
                    section: "visual",
                    fieldName: "maxBubbleSize",
                    label: "Maximum Bubble Size",
                    updateField: te
                  }
                )
              ] }),
              (r.general.geoType === "world" || r.general.geoType === "us" && r.general.type === "bubble") && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.visual.showBubbleZeros,
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      R.visual.showBubbleZeros = L.target.checked, o(R);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Show Data with Zero's on Bubble Map" })
              ] }),
              (r.general.geoType === "world" || r.general.geoType === "single-state") && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.general.allowMapZoom,
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      R.general.allowMapZoom = L.target.checked, R.mapPosition.coordinates = r.general.geoType === "world" ? [0, 30] : [0, 0], R.mapPosition.zoom = 1, o(R);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Allow Map Zooming" })
              ] }),
              r.general.type === "bubble" && /* @__PURE__ */ M("label", { className: "checkbox", children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.visual.extraBubbleBorder,
                    onChange: (L) => {
                      const R = ne.cloneDeep(r);
                      R.visual.extraBubbleBorder = L.target.checked, o(R);
                    }
                  }
                ),
                /* @__PURE__ */ s("span", { className: "edit-label", children: "Bubble Map has extra border" })
              ] }),
              (r.general.geoType === "us" || r.general.geoType === "us-county" || r.general.geoType === "world") && /* @__PURE__ */ M(le, { children: [
                /* @__PURE__ */ M("label", { children: [
                  /* @__PURE__ */ s("span", { className: "edit-label", children: "Default City Style" }),
                  /* @__PURE__ */ M(
                    "select",
                    {
                      value: r.visual.cityStyle || !1,
                      onChange: (L) => {
                        A("handleCityStyle", L.target.value);
                      },
                      children: [
                        /* @__PURE__ */ s("option", { value: "circle", children: "Circle" }),
                        /* @__PURE__ */ s("option", { value: "pin", children: "Pin" }),
                        /* @__PURE__ */ s("option", { value: "square", children: "Square" }),
                        /* @__PURE__ */ s("option", { value: "triangle", children: "Triangle" }),
                        /* @__PURE__ */ s("option", { value: "diamond", children: "Diamond" }),
                        /* @__PURE__ */ s("option", { value: "star", children: "Star" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ s(
                  ye,
                  {
                    value: r.visual.cityStyleLabel,
                    section: "visual",
                    fieldName: "cityStyleLabel",
                    label: "Label (Optional) ",
                    updateField: te,
                    tooltip: /* @__PURE__ */ M(K, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ s(K.Target, { children: /* @__PURE__ */ s(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ s(K.Content, { children: /* @__PURE__ */ s("p", { children: "When a label is provided, the default city style will appear in the legend." }) })
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ M(le, { children: [
                r.visual.additionalCityStyles.length > 0 && r.visual.additionalCityStyles.map(({ label: L, column: R, value: j, shape: Y }, Q) => /* @__PURE__ */ M("div", { className: "edit-block", children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      className: "remove-column",
                      onClick: (ke) => {
                        ke.preventDefault(), T("remove", Q, "", "");
                      },
                      children: "Remove"
                    }
                  ),
                  /* @__PURE__ */ M("p", { children: [
                    "City Style ",
                    Q + 1
                  ] }),
                  /* @__PURE__ */ M("label", { children: [
                    /* @__PURE__ */ s("span", { className: "edit-label column-heading", children: "Column with configuration value" }),
                    /* @__PURE__ */ s(
                      "select",
                      {
                        value: R,
                        onChange: (ke) => {
                          T("update", Q, "column", ke.target.value);
                        },
                        children: re
                      }
                    )
                  ] }),
                  /* @__PURE__ */ M("label", { children: [
                    /* @__PURE__ */ s("span", { className: "edit-label column-heading", children: "Value to Trigger" }),
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "text",
                        value: j,
                        onChange: (ke) => {
                          T("update", Q, "value", ke.target.value);
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ M("label", { children: [
                    /* @__PURE__ */ s("span", { className: "edit-label column-heading", children: "Shape" }),
                    /* @__PURE__ */ s(
                      "select",
                      {
                        value: Y,
                        onChange: (ke) => {
                          T("update", Q, "shape", ke.target.value);
                        },
                        children: b("value")
                      }
                    )
                  ] }),
                  /* @__PURE__ */ M("label", { children: [
                    /* @__PURE__ */ s("span", { className: "edit-label column-heading", children: "Label" }),
                    /* @__PURE__ */ s(
                      "input",
                      {
                        type: "text",
                        value: L,
                        onChange: (ke) => {
                          T("update", Q, "label", ke.target.value);
                        }
                      },
                      Q
                    )
                  ] })
                ] }, `additional-city-style-${Q}`)),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    onClick: () => T("add", 0, "", ""),
                    className: "btn btn-primary full-width",
                    children: "Add city style"
                  }
                )
              ] }),
              /* @__PURE__ */ s("label", { htmlFor: "opacity", children: /* @__PURE__ */ s(
                ye,
                {
                  type: "number",
                  min: 0,
                  max: 100,
                  value: r.tooltips.opacity ? r.tooltips.opacity : 100,
                  section: "tooltips",
                  fieldName: "opacity",
                  label: "Tooltip Opacity (%)",
                  updateField: te
                }
              ) }),
              r.general.geoType === "leaflet" && /* @__PURE__ */ s(le, { children: /* @__PURE__ */ s(
                we,
                {
                  label: "Leaflet Theme",
                  options: layerOptions,
                  section: "leaflet",
                  fieldName: "theme",
                  updateField: te
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ M(qe, { children: [
            /* @__PURE__ */ s(Ze, { children: /* @__PURE__ */ s(Ke, { children: "Custom Map Layers" }) }),
            /* @__PURE__ */ M(Ye, { children: [
              r.map.layers.length === 0 && /* @__PURE__ */ s("p", { children: "There are currently no layers." }),
              r.map.layers.map((L, R) => /* @__PURE__ */ s(le, { children: /* @__PURE__ */ s(Xn, { allowZeroExpanded: !0, children: /* @__PURE__ */ M(qe, { className: "series-item map-layers-list", children: [
                /* @__PURE__ */ s(Ze, { className: "series-item__title map-layers-list--title", children: /* @__PURE__ */ s(Ke, { children: `Layer ${R + 1}: ${L.name}` }) }),
                /* @__PURE__ */ s(Ye, { children: /* @__PURE__ */ M("div", { className: "map-layers-panel", children: [
                  /* @__PURE__ */ s("label", { htmlFor: "layerName", children: "Layer Name:" }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "text",
                      name: "layerName",
                      value: L.name,
                      onChange: (j) => z(j, R, "name")
                    }
                  ),
                  /* @__PURE__ */ s("label", { htmlFor: "layerFilename", children: "File:" }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "text",
                      name: "layerFilename",
                      value: L.url,
                      onChange: (j) => z(j, R, "url")
                    }
                  ),
                  /* @__PURE__ */ s("label", { htmlFor: "layerNamespace", children: "TOPOJSON Namespace:" }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "text",
                      name: "layerNamespace",
                      value: L.namespace,
                      onChange: (j) => z(j, R, "namespace")
                    }
                  ),
                  /* @__PURE__ */ s("label", { htmlFor: "layerFill", children: "Fill Color:" }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "text",
                      name: "layerFill",
                      value: L.fill,
                      onChange: (j) => z(j, R, "fill")
                    }
                  ),
                  /* @__PURE__ */ s("label", { htmlFor: "layerFill", children: "Fill Opacity (%):" }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      max: 100,
                      name: "layerFill",
                      value: L.fillOpacity ? L.fillOpacity * 100 : "",
                      onChange: (j) => z(j, R, "fillOpacity")
                    }
                  ),
                  /* @__PURE__ */ s("label", { htmlFor: "layerStroke", children: "Stroke Color:" }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "text",
                      name: "layerStroke",
                      value: L.stroke,
                      onChange: (j) => z(j, R, "stroke")
                    }
                  ),
                  /* @__PURE__ */ s("label", { htmlFor: "layerStroke", children: "Stroke Width:" }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      max: 5,
                      name: "layerStrokeWidth",
                      value: L.strokeWidth,
                      onChange: (j) => z(j, R, "strokeWidth")
                    }
                  ),
                  /* @__PURE__ */ s("label", { htmlFor: "layerTooltip", children: "Tooltip:" }),
                  /* @__PURE__ */ s(
                    "textarea",
                    {
                      name: "layerTooltip",
                      value: L.tooltip,
                      onChange: (j) => z(j, R, "tooltip")
                    }
                  ),
                  /* @__PURE__ */ s("button", { onClick: (j) => I(j, R), children: "Remove Layer" })
                ] }) })
              ] }) }) })),
              /* @__PURE__ */ s("button", { className: "btn btn-primary full-width", onClick: F, children: "Add Map Layer" }),
              /* @__PURE__ */ s("p", { className: "layer-purpose-details", children: "Context should be added to your visualization or associated page to describe the significance of layers that are added to maps." })
            ] })
          ] }),
          r.general.geoType === "us" && /* @__PURE__ */ s(Bo.PatternSettings, { name: "Pattern Settings" }),
          r.general.geoType !== "us-county" && /* @__PURE__ */ s(Bo.Annotate, { name: "Text Annotations" })
        ] }),
        /* @__PURE__ */ s(r1, { loadConfig: a, config: r, convertStateToConfig: W })
      ]
    }
  ) });
}, ju = () => {
  const { config: e } = E.useContext(fe), t = e.runtime.editorErrorMessage;
  return /* @__PURE__ */ s("section", { className: "waiting", children: /* @__PURE__ */ M("section", { className: "waiting-container", children: [
    /* @__PURE__ */ s("h3", { children: "Error With Configuration" }),
    /* @__PURE__ */ s("p", { children: t })
  ] }) });
};
function qi(e) {
  return pi({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" }, child: [] }] })(e);
}
function Vo(e) {
  return pi({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" }, child: [] }] })(e);
}
function Zi(e) {
  return pi({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z" }, child: [] }] })(e);
}
function Ki(e) {
  return pi({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z" }, child: [] }] })(e);
}
const Hu = (e) => {
  const { currentViewport: t } = e, { config: n } = E.useContext(fe), a = (l) => {
    switch (l) {
      case "Arrow Down":
        return /* @__PURE__ */ s(qi, {});
      case "Arrow Up":
        return /* @__PURE__ */ s(Ki, {});
      case "Arrow Right":
        return /* @__PURE__ */ s(Zi, {});
      default:
        return;
    }
  }, { legendClasses: i } = ms(n, t);
  return n.hexMap.type === "shapes" && n.hexMap.shapeGroups.map((l, o) => /* @__PURE__ */ s("aside", { id: "legend", className: i.aside.join(" "), role: "region", "aria-label": "Legend", tabIndex: 0, children: /* @__PURE__ */ M("section", { className: i.section.join(" "), "aria-label": "Map Legend", children: [
    l.legendTitle && /* @__PURE__ */ s("h3", { className: i.title.join(" "), children: Rt(l.legendTitle) }),
    l.legendDescription && /* @__PURE__ */ s("p", { className: i.description.join(" "), children: Rt(l.legendDescription) }),
    /* @__PURE__ */ s("ul", { className: i.ul.join(" "), "aria-label": "Legend items", style: { listStyle: "none" }, children: l.items.map((r, g) => /* @__PURE__ */ M("li", { className: i.li.join(" "), children: [
      a(r.shape),
      " ",
      r.value
    ] }, `hex-legend-item-${g}`)) })
  ] }) }));
};
function hi(e) {
  var t = e.id, n = e.width, a = e.height, i = e.children;
  return /* @__PURE__ */ ie.createElement("defs", null, /* @__PURE__ */ ie.createElement("pattern", {
    id: t,
    width: n,
    height: a,
    patternUnits: "userSpaceOnUse"
  }, i));
}
hi.propTypes = {
  id: q.string.isRequired,
  width: q.number.isRequired,
  height: q.number.isRequired,
  children: q.node.isRequired
};
var da = {
  horizontal: "horizontal",
  vertical: "vertical",
  diagonal: "diagonal",
  diagonalRightToLeft: "diagonalRightToLeft"
};
function qu(e) {
  var t = e.height, n = e.orientation;
  switch (n) {
    case da.horizontal:
      return "M 0," + t / 2 + " l " + t + ",0";
    case da.diagonal:
      return "M 0," + t + " l " + t + "," + -t + " M " + -t / 4 + "," + t / 4 + " l " + t / 2 + "," + -t / 2 + `
             M ` + 3 / 4 * t + "," + 5 / 4 * t + " l " + t / 2 + "," + -t / 2;
    case da.diagonalRightToLeft:
      return "M 0,0 l " + t + "," + t + `
        M ` + -t / 4 + "," + 3 / 4 * t + " l " + t / 2 + "," + t / 2 + `
        M ` + 3 / 4 * t + "," + -t / 4 + " l " + t / 2 + "," + t / 2;
    case da.vertical:
    default:
      return "M " + t / 2 + ", 0 l 0, " + t;
  }
}
function gi(e) {
  var t = e.id, n = e.width, a = e.height, i = e.stroke, l = e.strokeWidth, o = e.strokeDasharray, r = e.strokeLinecap, g = r === void 0 ? "square" : r, h = e.shapeRendering, c = h === void 0 ? "auto" : h, d = e.orientation, u = d === void 0 ? ["vertical"] : d, p = e.background, f = e.className, S = Array.isArray(u) ? u : [u];
  return /* @__PURE__ */ ie.createElement(hi, {
    id: t,
    width: n,
    height: a
  }, !!p && /* @__PURE__ */ ie.createElement("rect", {
    className: It("visx-pattern-line-background"),
    width: n,
    height: a,
    fill: p
  }), S.map(function(m, y) {
    return /* @__PURE__ */ ie.createElement("path", {
      key: "visx-" + t + "-line-" + m + "-" + y,
      className: It("visx-pattern-line", f),
      d: qu({
        orientation: m,
        height: a
      }),
      stroke: i,
      strokeWidth: l,
      strokeDasharray: o,
      strokeLinecap: g,
      shapeRendering: c
    });
  }));
}
gi.propTypes = {
  id: q.string.isRequired,
  width: q.number.isRequired,
  height: q.number.isRequired,
  className: q.string,
  background: q.string,
  stroke: q.string,
  strokeWidth: q.oneOfType([q.number, q.string]),
  strokeDasharray: q.oneOfType([q.string, q.number]),
  strokeLinecap: q.oneOf(["square", "butt", "round", "inherit"]),
  shapeRendering: q.oneOfType([q.string, q.number]),
  orientation: q.array
};
function fi(e) {
  var t, n = e.id, a = e.width, i = e.height, l = e.radius, o = l === void 0 ? 2 : l, r = e.fill, g = e.stroke, h = e.strokeWidth, c = e.strokeDasharray, d = e.background, u = e.complement, p = u === void 0 ? !1 : u, f = e.className, S;
  return p && (S = [[0, 0], [0, i], [a, 0], [a, i]]), /* @__PURE__ */ ie.createElement(hi, {
    id: n,
    width: a,
    height: i
  }, !!d && /* @__PURE__ */ ie.createElement("rect", {
    width: a,
    height: i,
    fill: d
  }), /* @__PURE__ */ ie.createElement("circle", {
    className: It("visx-pattern-circle", f),
    cx: a / 2,
    cy: i / 2,
    r: o,
    fill: r,
    stroke: g,
    strokeWidth: h,
    strokeDasharray: c
  }), (t = S) == null ? void 0 : t.map(function(m) {
    var y = m[0], v = m[1];
    return /* @__PURE__ */ ie.createElement("circle", {
      key: n + "-complement-" + y + "-" + v,
      className: It("visx-pattern-circle visx-pattern-circle-complement", f),
      cx: y,
      cy: v,
      r: o,
      fill: r,
      stroke: g,
      strokeWidth: h,
      strokeDasharray: c
    });
  }));
}
fi.propTypes = {
  id: q.string.isRequired,
  width: q.number.isRequired,
  height: q.number.isRequired,
  radius: q.number,
  fill: q.string,
  className: q.string,
  stroke: q.string,
  strokeWidth: q.oneOfType([q.number, q.string]),
  strokeDasharray: q.oneOfType([q.number, q.string]),
  complement: q.bool,
  background: q.string
};
function Ms(e) {
  var t = e.id, n = e.width, a = e.height, i = e.path, l = e.fill, o = l === void 0 ? "transparent" : l, r = e.stroke, g = e.strokeWidth, h = e.strokeDasharray, c = e.strokeLinecap, d = c === void 0 ? "square" : c, u = e.shapeRendering, p = u === void 0 ? "auto" : u, f = e.background, S = e.className;
  return /* @__PURE__ */ ie.createElement(hi, {
    id: t,
    width: n,
    height: a
  }, !!f && /* @__PURE__ */ ie.createElement("rect", {
    width: n,
    height: a,
    fill: f
  }), /* @__PURE__ */ ie.createElement("path", {
    className: It("visx-pattern-path", S),
    d: i,
    fill: o,
    stroke: r,
    strokeWidth: g,
    strokeDasharray: h,
    strokeLinecap: d,
    shapeRendering: p
  }));
}
Ms.propTypes = {
  id: q.string.isRequired,
  width: q.number.isRequired,
  height: q.number.isRequired,
  path: q.string,
  fill: q.string,
  className: q.string,
  background: q.string,
  stroke: q.string,
  strokeWidth: q.oneOfType([q.number, q.string]),
  strokeDasharray: q.oneOfType([q.string, q.number]),
  strokeLinecap: q.oneOf(["square", "butt", "round", "inherit"]),
  shapeRendering: q.oneOfType([q.string, q.number])
};
function mi(e) {
  var t = e.id, n = e.width, a = e.height, i = e.fill, l = e.stroke, o = e.strokeWidth, r = e.strokeDasharray, g = e.strokeLinecap, h = e.shapeRendering, c = e.background, d = e.className;
  return /* @__PURE__ */ ie.createElement(Ms, {
    className: It("visx-pattern-wave", d),
    path: "M 0 " + a / 2 + " c " + a / 8 + " " + -a / 4 + " , " + a * 3 / 8 + " " + -a / 4 + " , " + a / 2 + ` 0
             c ` + a / 8 + " " + a / 4 + " , " + a * 3 / 8 + " " + a / 4 + " , " + a / 2 + " 0 M " + -a / 2 + " " + a / 2 + `
             c ` + a / 8 + " " + a / 4 + " , " + a * 3 / 8 + " " + a / 4 + " , " + a / 2 + " 0 M " + a + " " + a / 2 + `
             c ` + a / 8 + " " + -a / 4 + " , " + a * 3 / 8 + " " + -a / 4 + " , " + a / 2 + " 0",
    id: t,
    width: n,
    height: a,
    fill: i,
    stroke: l,
    strokeWidth: o,
    strokeDasharray: r,
    strokeLinecap: g,
    shapeRendering: h,
    background: c
  });
}
mi.propTypes = {
  id: q.string.isRequired,
  width: q.number.isRequired,
  height: q.number.isRequired,
  fill: q.string,
  className: q.string,
  background: q.string,
  stroke: q.string,
  strokeWidth: q.oneOfType([q.number, q.string]),
  strokeDasharray: q.oneOfType([q.string, q.number]),
  strokeLinecap: q.oneOf(["square", "butt", "round", "inherit"]),
  shapeRendering: q.oneOfType([q.string, q.number])
};
const Yi = (e, t, n, a, i) => {
  var g;
  const l = ne.cloneDeep(n), o = !((g = l.items) != null && g[e].disabled);
  l.items[e].disabled = o;
  const r = n.disabledAmt ?? 0;
  l.disabledAmt = o ? r + 1 : r - 1, a(l), i(
    `Disabled legend item ${t ?? ""}. Please reference the data table to see updated values.`
  );
};
const Zu = ({ legendItems: e }) => {
  const { runtimeLegend: t, setRuntimeLegend: n, config: a } = E.useContext(fe), i = E.useContext(it), l = (d, u, p) => {
    if (!p || !u || !d)
      return {};
    const f = a.columns.primary.name || "", S = {};
    for (const m of u) {
      const y = m[p];
      if (!y)
        continue;
      const v = m[f], C = d.find((w) => w.label === v);
      C && (S[y] || (S[y] = []), S[y].some((w) => w.label === v) || S[y].push(C));
    }
    return Object.entries(S).forEach(([m, y]) => {
      S[m] = [...y].sort(
        (v, C) => (a.legend.categoryValuesOrder ?? []).indexOf(v.label) - (a.legend.categoryValuesOrder ?? []).indexOf(C.label)
      );
    }), S;
  }, o = (d) => {
    var m;
    const u = t.items.map(
      (y) => y.value === d.label ? { ...y, disabled: !y.disabled } : y
    ), p = (m = t.items.find((y) => y.value === d.label)) == null ? void 0 : m.disabled, f = p ? -1 : 1;
    n({
      ...t,
      items: u,
      disabledAmt: (t.disabledAmt ?? 0) + f
    });
    const S = `${p ? "Enabled" : "Disabled"} legend item ${d.label}. Please reference the data table.`;
    i({ type: "SET_ACCESSIBLE_STATUS", payload: S });
  }, r = (d, u) => [
    "group-list-item",
    d.disabled ? "legend-group-item-disable" : u ? "legend-group-item-not-disable" : ""
  ].filter(Boolean).join(" "), g = a.legend.position === "bottom" || a.legend.position === "top" ? "col-12 col-sm-6 col-md-4 col-lg-3" : "col-12", h = E.useMemo(
    () => l(e, a.data, a.legend.groupBy),
    [e, a.data, a.legend.groupBy]
  ), c = t.items.some((d) => d.disabled);
  return /* @__PURE__ */ s(jt, { component: "Grouped Legend", children: /* @__PURE__ */ s("div", { className: "row", children: Object.entries(h).map(([d, u]) => /* @__PURE__ */ M("div", { className: `${g} group-container`, children: [
    /* @__PURE__ */ s("p", { className: "group-label", children: d }),
    /* @__PURE__ */ s("ul", { className: "row", children: u.map((p, f) => /* @__PURE__ */ M(
      "li",
      {
        role: "button",
        tabIndex: 0,
        title: `Legend item ${p.label} - Click to disable`,
        className: r(p, c),
        onClick: () => o(p),
        onKeyDown: (S) => {
          (S.key === "Enter" || S.key === " ") && (S.preventDefault(), Yi(f, p.label, t, n, setAccessibleStatus));
        },
        children: [
          /* @__PURE__ */ s(hs, { shape: a.legend.style === "boxes" ? "square" : "circle", fill: p.color }),
          /* @__PURE__ */ s("span", { children: p.label })
        ]
      },
      `${p.label}-${f}`
    )) })
  ] }, d)) }) });
}, Ku = 30, Yu = E.forwardRef((e, t) => {
  var F, I, O, U;
  const { skipId: n, containerWidthPadding: a } = e, {
    config: i,
    currentViewport: l,
    dimensions: o,
    mapId: r,
    runtimeFilters: g,
    runtimeLegend: h,
    setRuntimeLegend: c
  } = E.useContext(fe), d = E.useContext(it), { legend: u } = i, p = u.style === "gradient", f = xo("md", l), S = (u.position === "left" || u.position === "right") && xo("md", l), m = u.position === "bottom" || S, y = u.hideBorder && m, v = () => {
    try {
      return h.items || Error("No runtime legend data"), h.items.map((k, b) => {
        const T = Wn(k.max, "primary", i), D = Wn(k.min, "primary", i);
        let A = `${D}${T !== D ? ` - ${T}` : ""}`;
        u.type === "equalinterval" && b !== h.length - 1 && (A = `${D} - < ${T}`), u.type === "category" && (A = Wn(k.value, "primary", i)), k.max === 0 && k.min === 0 && (A = "0"), k.max === null && k.min === null && (A = "No data");
        let $ = A;
        return k.hasOwnProperty("special") && ($ = k.label || k.value), {
          color: k.color,
          label: Rt($),
          disabled: k.disabled,
          special: k.hasOwnProperty("special"),
          value: [k.min, k.max]
        };
      });
    } catch (k) {
      return console.error("Error in getFormattedLegendItems", k), [];
    }
  }, w = ((k = !1) => {
    const b = k ? [] : v(), T = P1(l) ? "12px" : "14px", D = b.some(($) => $.disabled);
    let A;
    return A = b.map(($, V) => {
      const B = () => {
        let W = ["legend-container__li", "d-flex", "align-items-center"];
        return $.disabled ? W.push("legend-container__li--disabled") : D && W.push("legend-container__li--not-disabled"), $.special && W.push("legend-container__li--special-class"), W.join(" ");
      }, G = (W) => {
        d({ type: "SET_ACCESSIBLE_STATUS", payload: W });
      };
      return /* @__PURE__ */ M(
        "li",
        {
          className: B(),
          title: `Legend item ${$.label} - Click to disable`,
          onClick: () => Yi(V, $.label, h, c, G),
          onKeyDown: (W) => {
            W.key === "Enter" && (W.preventDefault(), Yi(V, $.label, h, c, G));
          },
          tabIndex: 0,
          children: [
            /* @__PURE__ */ s(hs, { shape: i.legend.style === "boxes" ? "square" : "circle", fill: $.color }),
            /* @__PURE__ */ s("span", { children: $.label })
          ]
        },
        V
      );
    }), i.map.patterns && i.map.patterns.map(($, V) => {
      const { pattern: B, dataKey: G, size: W } = $;
      let H = "black";
      const Z = {
        small: "8",
        medium: "10",
        large: "12"
      }, X = 16;
      A.push(
        /* @__PURE__ */ s(le, { children: /* @__PURE__ */ M(
          "li",
          {
            className: "legend-container__li legend-container__li--geo-pattern",
            "aria-label": "You are on a pattern button. We dont support toggling patterns on this legend at the moment, but provide the area as being focusable for congruity.",
            tabIndex: 0,
            children: [
              /* @__PURE__ */ s("span", { className: "legend-item", style: { border: "unset" }, children: /* @__PURE__ */ M("svg", { width: X, height: X, children: [
                B === "waves" && /* @__PURE__ */ s(
                  mi,
                  {
                    id: `${r}--${G}--${V}`,
                    height: Z[W] ?? 10,
                    width: Z[W] ?? 10,
                    fill: H,
                    strokeWidth: 0.25
                  }
                ),
                B === "circles" && /* @__PURE__ */ s(
                  fi,
                  {
                    id: `${r}--${G}--${V}`,
                    height: Z[W] ?? 10,
                    width: Z[W] ?? 10,
                    fill: H,
                    radius: 1.25
                  }
                ),
                B === "lines" && /* @__PURE__ */ s(
                  gi,
                  {
                    id: `${r}--${G}--${V}`,
                    height: Z[W] ?? 6,
                    width: Z[W] ?? 10,
                    stroke: H,
                    strokeWidth: 0.75,
                    orientation: ["diagonalRightToLeft"]
                  }
                ),
                /* @__PURE__ */ s(
                  "circle",
                  {
                    id: G,
                    fill: `url(#${r}--${G}--${V})`,
                    r: X / 2,
                    cx: X / 2,
                    cy: X / 2,
                    stroke: "#0000004d",
                    strokeWidth: 1
                  }
                )
              ] }) }),
              /* @__PURE__ */ s("p", { style: { lineHeight: "22.4px", fontSize: k ? T : "16px" }, children: $.label || $.dataValue || "" })
            ]
          }
        ) })
      );
    }), A;
  })(p), { legendClasses: N } = ms(i, l), P = (k) => {
    const b = t.current;
    k && k.preventDefault(), F1(h, c), d({
      type: "SET_ACCESSIBLE_STATUS",
      payload: "Legend has been reset, please reference the data table to see updated values."
    }), b && b.focus();
  }, _ = {
    pin: /* @__PURE__ */ s(
      "path",
      {
        className: "marker",
        d: "M0,0l-8.8-17.7C-12.1-24.3-7.4-32,0-32h0c7.4,0,12.1,7.7,8.8,14.3L0,0z",
        strokeWidth: 2,
        stroke: "black",
        transform: "scale(0.5)"
      }
    ),
    circle: /* @__PURE__ */ s(ss, { color: "#000", size: 150 }),
    square: /* @__PURE__ */ s(cs, { color: "#000", size: 150 }),
    diamond: /* @__PURE__ */ s(us, { color: "#000", size: 150 }),
    star: /* @__PURE__ */ s(Yr, { color: "#000", size: 150 }),
    triangle: /* @__PURE__ */ s(ds, { color: "#000", size: 150 })
  }, z = w.length > 0 && ["Select Option", ""].includes(i.legend.groupBy);
  return /* @__PURE__ */ s(jt, { component: "Sidebar", children: /* @__PURE__ */ M("div", { className: `legends ${y ? "mt-4" : ""}`, children: [
    /* @__PURE__ */ s(
      "aside",
      {
        id: n || "legend",
        className: N.aside.join(" ") || "",
        role: "region",
        "aria-label": "Legend",
        tabIndex: p ? -1 : 0,
        ref: t,
        children: /* @__PURE__ */ M("section", { className: N.section.join(" ") || "", "aria-label": "Map Legend", children: [
          (u.title || u.description || u.dynamicDescription) && /* @__PURE__ */ M("div", { className: "mb-3", children: [
            u.title && /* @__PURE__ */ s("h3", { className: N.title.join(" ") || "", children: Rt(u.title) }),
            u.dynamicDescription === !1 && u.description && /* @__PURE__ */ s("p", { className: N.description.join(" ") || "", children: Rt(u.description) }),
            u.dynamicDescription === !0 && g.map((k, b) => {
              const T = `${b},${k.values.indexOf(String(k.active))}`, D = u.descriptions[T] || "";
              return D.length > 0 ? /* @__PURE__ */ s(
                "p",
                {
                  className: `dynamic-legend-description-${T} mt-2`,
                  children: D
                },
                `dynamic-description-${T}`
              ) : !0;
            })
          ] }),
          /* @__PURE__ */ s(
            l1,
            {
              labels: ((F = v()) == null ? void 0 : F.map((k) => k == null ? void 0 : k.label)) ?? [],
              colors: ((I = v()) == null ? void 0 : I.map((k) => k == null ? void 0 : k.color)) ?? [],
              dimensions: o,
              parentPaddingToSubtract: a + (u.hideBorder || f ? 0 : Ku),
              config: i
            }
          ),
          /* @__PURE__ */ s(Zu, { legendItems: v() }),
          z && /* @__PURE__ */ s("ul", { className: N.ul.join(" "), "aria-label": "Legend items", children: w }),
          (i.visual.additionalCityStyles && i.visual.additionalCityStyles.some((k) => k.label) || i.visual.cityStyleLabel) && /* @__PURE__ */ M(le, { children: [
            /* @__PURE__ */ s("hr", {}),
            /* @__PURE__ */ M("div", { className: N.div.join(" ") || "", children: [
              i.visual.cityStyleLabel && /* @__PURE__ */ M("div", { children: [
                /* @__PURE__ */ s("svg", { children: /* @__PURE__ */ s(
                  Qn,
                  {
                    top: i.visual.cityStyle === "pin" ? 19 : i.visual.cityStyle === "triangle" ? 13 : 11,
                    left: 10,
                    children: _[i.visual.cityStyle.toLowerCase()]
                  }
                ) }),
                /* @__PURE__ */ s("p", { children: i.visual.cityStyleLabel })
              ] }),
              i.visual.additionalCityStyles.map(
                ({ shape: k, label: b }) => b && /* @__PURE__ */ M("div", { children: [
                  /* @__PURE__ */ s("svg", { children: /* @__PURE__ */ s(Qn, { top: k === "Pin" ? 19 : k === "Triangle" ? 13 : 11, left: 10, children: _[k.toLowerCase()] }) }),
                  /* @__PURE__ */ s("p", { children: b })
                ] })
              )
            ] })
          ] }),
          h.disabledAmt > 0 && /* @__PURE__ */ s(Kr, { className: N.showAllButton.join(" "), onClick: P, children: "Show All" })
        ] })
      }
    ),
    ((U = (O = i.hexMap) == null ? void 0 : O.shapeGroups) == null ? void 0 : U.length) > 0 && i.hexMap.type === "shapes" && i.general.displayAsHex && /* @__PURE__ */ s(Hu, { runtimeLegend: h, viewport: l })
  ] }) });
}), Xu = (e) => {
  const { config: t, supportedStatesFipsCodes: n } = e, a = (h, c) => {
    const { geoType: d, type: u, hideGeoColumnInTooltip: p } = t.general;
    if (d === "us-county" && u !== "us-geocode") {
      let f = c[t.columns.geo.name].substring(0, 2);
      const S = n[f];
      h += p ? `<strong>${S}</strong><br/>` : `<strong>Location:  ${S}</strong><br/>`;
    }
    return h;
  }, i = (h) => {
    const { hideGeoColumnInTooltip: c } = t.general, u = ((p) => {
      const { geoType: f, geoLabelOverride: S } = t.general;
      switch (f) {
        case "us":
          p = "State: ";
          break;
        case "us-county":
          p = "County: ";
          break;
        case "single-state":
          p = "County: ";
          break;
        default:
          p = "";
          break;
      }
      return S && (p = `${S}: `), p;
    })("");
    return c ? `<strong>${Ie(h)}</strong>` : `<p class="tooltip-heading" style="text-transform: none;">${u}${Ie(h)}</p>`;
  }, l = (h, c, d, u, p) => {
    if (h && h.length && typeof h[0] == "object") {
      for (const f of h)
        if (c.name === f.key && String(d == null ? void 0 : d[f.key]) === f.value) {
          u = Wn(f.label, p);
          break;
        }
    }
    return u;
  }, o = (h, c) => {
    var p;
    const { hidePrimaryColumnInTooltip: d } = t.general;
    let u = ((p = c.label) == null ? void 0 : p.length) > 0 ? c.label : "";
    return c.name === t.columns.primary.name && d || !u ? `<li class="tooltip-body">${h}</li>` : `<li class="tooltip-body">${u}: ${h}</li>`;
  }, r = (h, c) => {
    const d = ["data", "bubble", "us-geocode", "world-geocode", "map"], {
      general: { type: u },
      columns: p,
      legend: { specialClasses: f }
    } = t;
    return d.includes(u) && (c !== void 0 || t.general.geoType === "world") && (h += "<ul>", Object.keys(p).forEach((S) => {
      const m = t.columns[S];
      if (m.tooltip) {
        let y = l(f, m, c, "", S);
        y || (y = c ? Wn(c[m.name], S, t) : "No Data"), h += o(y, m);
      }
    }), h += "</ul>"), h;
  };
  return {
    buildTooltip: (h, c, d = "") => {
      if (!(!h && t.general.geoType !== "world"))
        return d += a(d, h), d += i(c), d = r(d, h), d;
    }
  };
}, Ju = (e) => /* @__PURE__ */ E.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ E.createElement("path", { d: "M432 320h-32c-8.837 0-16 7.163-16 16v112H64V128h144c8.837 0 16-7.163 16-16V80c0-8.837-7.163-16-16-16H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V336c0-8.837-7.163-16-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 000 34L157.67 377a24 24 0 0034 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24c0-13.255-10.745-24-24-24z", fillRule: "nonzero" })), Ht = () => {
  const { config: e, customNavigationHandler: t } = E.useContext(fe), n = e.columns.navigate.name, { buildTooltip: a } = Xu({ config: e, displayGeoName: Ie, supportedStatesFipsCodes: Bt });
  return { applyTooltipsToGeo: (l, o, r = "string") => {
    let g = a(o, l, "");
    return r === "jsx" && (typeof g == "string" && (g = [/* @__PURE__ */ s("div", { children: Rt(g) }, "modal-content")]), e.columns.hasOwnProperty("navigate") && o[n] && Array.isArray(g) && g.push(
      /* @__PURE__ */ M(
        "a",
        {
          href: "#",
          className: "navigation-link",
          onClick: (h) => {
            h.preventDefault(), Oa(e.general.navigationTarget, o[n], t);
          },
          children: [
            e.tooltips.linkLabel,
            g1(o[n]) && /* @__PURE__ */ s(Ju, { className: "inline-icon ms-1" })
          ]
        },
        "modal-navigation-link"
      )
    )), g;
  } };
}, Qu = () => {
  const { content: e, config: t, currentViewport: n } = E.useContext(fe), { capitalizeLabels: a } = t.tooltips, { applyTooltipsToGeo: i } = Ht(), l = i(e.geoName, e.keyedData, "jsx"), o = E.useContext(it);
  return /* @__PURE__ */ M(
    "section",
    {
      className: a ? "modal-content tooltip capitalize " + n : "modal-content tooltip " + n,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ s("div", { className: "content", children: l }),
        /* @__PURE__ */ s(
          de,
          {
            display: "close",
            alt: "Close Modal",
            size: 20,
            color: "#000",
            className: "modal-close",
            onClick: () => {
              o({ type: "SET_MODAL", payload: null });
            }
          }
        )
      ]
    }
  );
}, ed = ({ data: e, navigationHandler: t, options: n, columns: a, displayGeoName: i, mapTabbingID: l }) => {
  E.useContext(fe);
  const [o, r] = E.useState(""), [g, h] = E.useState({}), c = (p) => {
    if (p.preventDefault(), o !== "") {
      const f = e[g[o]][a.navigate.name];
      t(f);
    }
  };
  let d, u;
  switch (n.language) {
    case "es":
      d = "Selecciona un Artículo", u = "Ir";
      break;
    default:
      d = "Select an Item", u = "Go";
  }
  return E.useEffect(() => {
    const p = {}, f = {};
    Object.keys(e).forEach((S) => {
      const m = i(S);
      f[m] = S;
    }), Object.keys(f).sort().forEach((S) => {
      p[S] = f[S];
    }), h(p), r(Object.keys(p)[0]);
  }, [e, i]), /* @__PURE__ */ s("section", { className: "navigation-menu", children: /* @__PURE__ */ M("form", { onSubmit: c, type: "get", children: [
    /* @__PURE__ */ M("label", { htmlFor: l.replace("#", ""), children: [
      /* @__PURE__ */ s("div", { className: "select-heading", children: d }),
      /* @__PURE__ */ s("select", { value: o, id: l.replace("#", ""), onChange: (p) => r(p.target.value), children: Object.keys(g).map((p) => /* @__PURE__ */ s("option", { value: p, children: p }, p)) })
    ] }),
    /* @__PURE__ */ s("input", { type: "submit", value: u, className: `${n.headerColor} btn`, id: "cdcnavmap-dropdown-go" })
  ] }) });
}, td = "Topology", nd = {
  states: {
    type: "GeometryCollection",
    geometries: [
      {
        type: "Polygon",
        arcs: [
          [
            0,
            1
          ]
        ],
        properties: {
          iso: "US-ME"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            2,
            3,
            4,
            5
          ]
        ],
        properties: {
          iso: "US-RI"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            6,
            7,
            8,
            9
          ]
        ],
        properties: {
          iso: "US-VT"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            10,
            11,
            12,
            13,
            14,
            15
          ]
        ],
        properties: {
          iso: "US-OK"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            16,
            17,
            18,
            19,
            20,
            21
          ]
        ],
        properties: {
          iso: "US-SC"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            22,
            23,
            24,
            -17,
            25,
            26
          ]
        ],
        properties: {
          iso: "US-DC"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            27,
            -26,
            -22,
            28,
            29,
            30
          ]
        ],
        properties: {
          iso: "US-WV"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            31,
            32,
            33,
            34
          ]
        ],
        properties: {
          iso: "US-CA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            35,
            36,
            37,
            -11,
            38,
            39
          ]
        ],
        properties: {
          iso: "US-KS"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            40,
            -30,
            41,
            42,
            43,
            44
          ]
        ],
        properties: {
          iso: "US-KY"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            45,
            46,
            47,
            48,
            -24,
            49
          ]
        ],
        properties: {
          iso: "US-MD"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            50,
            -44,
            51,
            -36,
            52,
            53
          ]
        ],
        properties: {
          iso: "US-MO"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            54,
            -53,
            -40,
            55,
            56,
            57
          ]
        ],
        properties: {
          iso: "US-NE"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -56,
            -39,
            -16,
            58,
            59,
            60
          ]
        ],
        properties: {
          iso: "US-NM"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -49,
            61,
            62,
            63,
            -18,
            -25
          ]
        ],
        properties: {
          iso: "US-NC"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -29,
            -21,
            64,
            65,
            66,
            -42
          ]
        ],
        properties: {
          iso: "US-TN"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            67,
            68,
            -54,
            -55,
            69,
            70
          ]
        ],
        properties: {
          iso: "US-IA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            71,
            72,
            73,
            -32,
            74,
            75
          ]
        ],
        properties: {
          iso: "US-NV"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            76,
            77,
            78,
            -46,
            79,
            80
          ]
        ],
        properties: {
          iso: "US-NJ"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            81,
            -70,
            -58,
            82,
            83,
            84
          ]
        ],
        properties: {
          iso: "US-SD"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            85,
            86,
            -27,
            -28,
            87,
            88
          ]
        ],
        properties: {
          iso: "US-OH"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            89,
            -84,
            90,
            -72,
            91,
            92
          ]
        ],
        properties: {
          iso: "US-WY"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            93,
            94,
            -62,
            -48
          ]
        ],
        properties: {
          iso: "US-VA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            95,
            96,
            -94,
            -47,
            -79
          ]
        ],
        properties: {
          iso: "US-DE"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            97,
            98,
            99
          ]
        ],
        properties: {
          iso: "US-FL"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -1,
            100,
            -6,
            101,
            -7,
            102
          ]
        ],
        properties: {
          iso: "US-NH"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            103
          ]
        ],
        properties: {
          iso: "US-HI"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            104,
            105,
            -13
          ]
        ],
        properties: {
          iso: "US-TX"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -20,
            106,
            -100,
            107,
            108,
            -65
          ]
        ],
        properties: {
          iso: "US-AL"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -59,
            -15,
            109,
            110
          ]
        ],
        properties: {
          iso: "US-AZ"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -64,
            111,
            -98,
            -107,
            -19
          ]
        ],
        properties: {
          iso: "US-GA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            112,
            113,
            114,
            -105,
            -12,
            -38
          ]
        ],
        properties: {
          iso: "US-LA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -66,
            -109,
            115,
            -114,
            116
          ]
        ],
        properties: {
          iso: "US-MS"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            117,
            -60,
            -111,
            118,
            -33,
            -74
          ]
        ],
        properties: {
          iso: "US-UT"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -83,
            -57,
            -61,
            -118,
            -73,
            -91
          ]
        ],
        properties: {
          iso: "US-CO"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -43,
            -67,
            -117,
            -113,
            -37,
            -52
          ]
        ],
        properties: {
          iso: "US-AR"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            119,
            -92,
            -76,
            120,
            121,
            122
          ]
        ],
        properties: {
          iso: "US-ID"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -121,
            -75,
            -35,
            123
          ]
        ],
        properties: {
          iso: "US-OR"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            124,
            125,
            -45,
            -51,
            -69,
            126
          ]
        ],
        properties: {
          iso: "US-IL"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            127,
            -80,
            -50,
            -23,
            -87,
            128
          ]
        ],
        properties: {
          iso: "US-PA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            129,
            -88,
            -31,
            -41,
            -126,
            130
          ]
        ],
        properties: {
          iso: "US-IN"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -9,
            131,
            -81,
            -128,
            132
          ]
        ],
        properties: {
          iso: "US-NY"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            133,
            -123,
            134
          ]
        ],
        properties: {
          iso: "US-WA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -127,
            -68,
            135,
            136
          ]
        ],
        properties: {
          iso: "US-WI"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -102,
            -5,
            137,
            -77,
            -132,
            -8
          ]
        ],
        properties: {
          iso: "US-MA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -89,
            -130,
            138
          ]
        ],
        properties: {
          iso: "US-MI"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -136,
            -71,
            -82,
            139,
            140
          ]
        ],
        properties: {
          iso: "US-MN"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            141,
            -93,
            -120,
            -134,
            142
          ]
        ],
        properties: {
          iso: "US-MT"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -140,
            -85,
            -90,
            -142,
            143
          ]
        ],
        properties: {
          iso: "US-ND"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            144
          ]
        ],
        properties: {
          iso: "US-AK"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -4,
            145,
            -96,
            -78,
            -138
          ]
        ],
        properties: {
          iso: "US-CT"
        }
      }
    ]
  }
}, ad = [
  [
    [
      960161,
      870593
    ],
    [
      -39838,
      33425
    ]
  ],
  [
    [
      920323,
      904018
    ],
    [
      0,
      64696
    ],
    [
      39838,
      31285
    ],
    [
      39838,
      -31285
    ],
    [
      0,
      -64696
    ],
    [
      -39838,
      -33425
    ]
  ],
  [
    [
      960161,
      801560
    ],
    [
      39838,
      -35618
    ],
    [
      0,
      -73460
    ],
    [
      -39838,
      -37846
    ]
  ],
  [
    [
      960161,
      654636
    ],
    [
      -39838,
      37846
    ]
  ],
  [
    [
      920323,
      692482
    ],
    [
      0,
      73460
    ]
  ],
  [
    [
      920323,
      765942
    ],
    [
      39838,
      35618
    ]
  ],
  [
    [
      880486,
      870593
    ],
    [
      0,
      -69033
    ]
  ],
  [
    [
      880486,
      801560
    ],
    [
      -39838,
      -35618
    ]
  ],
  [
    [
      840648,
      765942
    ],
    [
      -39838,
      35618
    ]
  ],
  [
    [
      800810,
      801560
    ],
    [
      0,
      69033
    ],
    [
      39838,
      33425
    ],
    [
      39838,
      -33425
    ]
  ],
  [
    [
      402432,
      325202
    ],
    [
      39838,
      -44441
    ]
  ],
  [
    [
      442270,
      280761
    ],
    [
      0,
      -90959
    ]
  ],
  [
    [
      442270,
      189802
    ],
    [
      -39838,
      -46490
    ]
  ],
  [
    [
      402432,
      143312
    ],
    [
      -39837,
      46490
    ]
  ],
  [
    [
      362595,
      189802
    ],
    [
      0,
      90959
    ]
  ],
  [
    [
      362595,
      280761
    ],
    [
      39837,
      44441
    ]
  ],
  [
    [
      681297,
      454245
    ],
    [
      39838,
      -42292
    ]
  ],
  [
    [
      721135,
      411953
    ],
    [
      0,
      -86751
    ]
  ],
  [
    [
      721135,
      325202
    ],
    [
      -39838,
      -44441
    ]
  ],
  [
    [
      681297,
      280761
    ],
    [
      -39838,
      44441
    ]
  ],
  [
    [
      641459,
      325202
    ],
    [
      0,
      86751
    ]
  ],
  [
    [
      641459,
      411953
    ],
    [
      39838,
      42292
    ]
  ],
  [
    [
      721135,
      576707
    ],
    [
      39837,
      -40080
    ]
  ],
  [
    [
      760972,
      536627
    ],
    [
      0,
      -82382
    ]
  ],
  [
    [
      760972,
      454245
    ],
    [
      -39837,
      -42292
    ]
  ],
  [
    [
      681297,
      454245
    ],
    [
      0,
      82382
    ]
  ],
  [
    [
      681297,
      536627
    ],
    [
      39838,
      40080
    ]
  ],
  [
    [
      641459,
      576707
    ],
    [
      39838,
      -40080
    ]
  ],
  [
    [
      641459,
      411953
    ],
    [
      -39838,
      42292
    ]
  ],
  [
    [
      601621,
      454245
    ],
    [
      0,
      82382
    ]
  ],
  [
    [
      601621,
      536627
    ],
    [
      39838,
      40080
    ]
  ],
  [
    [
      203243,
      454245
    ],
    [
      39838,
      -42292
    ]
  ],
  [
    [
      243081,
      411953
    ],
    [
      0,
      -86751
    ]
  ],
  [
    [
      243081,
      325202
    ],
    [
      -39838,
      -44441
    ],
    [
      -39837,
      44441
    ],
    [
      0,
      86751
    ]
  ],
  [
    [
      163406,
      411953
    ],
    [
      39837,
      42292
    ]
  ],
  [
    [
      442270,
      454245
    ],
    [
      39838,
      -42292
    ]
  ],
  [
    [
      482108,
      411953
    ],
    [
      0,
      -86751
    ]
  ],
  [
    [
      482108,
      325202
    ],
    [
      -39838,
      -44441
    ]
  ],
  [
    [
      402432,
      325202
    ],
    [
      0,
      86751
    ]
  ],
  [
    [
      402432,
      411953
    ],
    [
      39838,
      42292
    ]
  ],
  [
    [
      561783,
      576707
    ],
    [
      39838,
      -40080
    ]
  ],
  [
    [
      601621,
      454245
    ],
    [
      -39838,
      -42292
    ]
  ],
  [
    [
      561783,
      411953
    ],
    [
      -39837,
      42292
    ]
  ],
  [
    [
      521946,
      454245
    ],
    [
      0,
      82382
    ]
  ],
  [
    [
      521946,
      536627
    ],
    [
      39837,
      40080
    ]
  ],
  [
    [
      800810,
      576707
    ],
    [
      39838,
      -40080
    ]
  ],
  [
    [
      840648,
      536627
    ],
    [
      0,
      -82382
    ]
  ],
  [
    [
      840648,
      454245
    ],
    [
      -39838,
      -42292
    ]
  ],
  [
    [
      800810,
      411953
    ],
    [
      -39838,
      42292
    ]
  ],
  [
    [
      760972,
      536627
    ],
    [
      39838,
      40080
    ]
  ],
  [
    [
      482108,
      576707
    ],
    [
      39838,
      -40080
    ]
  ],
  [
    [
      521946,
      454245
    ],
    [
      -39838,
      -42292
    ]
  ],
  [
    [
      442270,
      454245
    ],
    [
      0,
      82382
    ]
  ],
  [
    [
      442270,
      536627
    ],
    [
      39838,
      40080
    ]
  ],
  [
    [
      402432,
      576707
    ],
    [
      39838,
      -40080
    ]
  ],
  [
    [
      402432,
      411953
    ],
    [
      -39837,
      42292
    ]
  ],
  [
    [
      362595,
      454245
    ],
    [
      0,
      82382
    ]
  ],
  [
    [
      362595,
      536627
    ],
    [
      39837,
      40080
    ]
  ],
  [
    [
      362595,
      280761
    ],
    [
      -39838,
      44441
    ]
  ],
  [
    [
      322757,
      325202
    ],
    [
      0,
      86751
    ]
  ],
  [
    [
      322757,
      411953
    ],
    [
      39838,
      42292
    ]
  ],
  [
    [
      800810,
      411953
    ],
    [
      0,
      -86751
    ]
  ],
  [
    [
      800810,
      325202
    ],
    [
      -39838,
      -44441
    ]
  ],
  [
    [
      760972,
      280761
    ],
    [
      -39837,
      44441
    ]
  ],
  [
    [
      641459,
      325202
    ],
    [
      -39838,
      -44441
    ]
  ],
  [
    [
      601621,
      280761
    ],
    [
      -39838,
      44441
    ]
  ],
  [
    [
      561783,
      325202
    ],
    [
      0,
      86751
    ]
  ],
  [
    [
      442270,
      692482
    ],
    [
      39838,
      -37846
    ]
  ],
  [
    [
      482108,
      654636
    ],
    [
      0,
      -77929
    ]
  ],
  [
    [
      402432,
      576707
    ],
    [
      0,
      77929
    ]
  ],
  [
    [
      402432,
      654636
    ],
    [
      39838,
      37846
    ]
  ],
  [
    [
      243081,
      576707
    ],
    [
      39838,
      -40080
    ]
  ],
  [
    [
      282919,
      536627
    ],
    [
      0,
      -82382
    ]
  ],
  [
    [
      282919,
      454245
    ],
    [
      -39838,
      -42292
    ]
  ],
  [
    [
      203243,
      454245
    ],
    [
      0,
      82382
    ]
  ],
  [
    [
      203243,
      536627
    ],
    [
      39838,
      40080
    ]
  ],
  [
    [
      840648,
      692482
    ],
    [
      39838,
      -37846
    ]
  ],
  [
    [
      880486,
      654636
    ],
    [
      0,
      -77929
    ]
  ],
  [
    [
      880486,
      576707
    ],
    [
      -39838,
      -40080
    ]
  ],
  [
    [
      800810,
      576707
    ],
    [
      0,
      77929
    ]
  ],
  [
    [
      800810,
      654636
    ],
    [
      39838,
      37846
    ]
  ],
  [
    [
      362595,
      692482
    ],
    [
      39837,
      -37846
    ]
  ],
  [
    [
      362595,
      536627
    ],
    [
      -39838,
      40080
    ]
  ],
  [
    [
      322757,
      576707
    ],
    [
      0,
      77929
    ]
  ],
  [
    [
      322757,
      654636
    ],
    [
      39838,
      37846
    ]
  ],
  [
    [
      681297,
      692482
    ],
    [
      39838,
      -37846
    ]
  ],
  [
    [
      721135,
      654636
    ],
    [
      0,
      -77929
    ]
  ],
  [
    [
      641459,
      576707
    ],
    [
      0,
      77929
    ]
  ],
  [
    [
      641459,
      654636
    ],
    [
      39838,
      37846
    ]
  ],
  [
    [
      282919,
      692482
    ],
    [
      39838,
      -37846
    ]
  ],
  [
    [
      322757,
      576707
    ],
    [
      -39838,
      -40080
    ]
  ],
  [
    [
      243081,
      576707
    ],
    [
      0,
      77929
    ]
  ],
  [
    [
      243081,
      654636
    ],
    [
      39838,
      37846
    ]
  ],
  [
    [
      840648,
      454245
    ],
    [
      39838,
      -42292
    ]
  ],
  [
    [
      880486,
      411953
    ],
    [
      0,
      -86751
    ],
    [
      -39838,
      -44441
    ],
    [
      -39838,
      44441
    ]
  ],
  [
    [
      880486,
      576707
    ],
    [
      39837,
      -40080
    ]
  ],
  [
    [
      920323,
      536627
    ],
    [
      0,
      -82382
    ],
    [
      -39837,
      -42292
    ]
  ],
  [
    [
      681297,
      189802
    ],
    [
      39838,
      -46490
    ]
  ],
  [
    [
      721135,
      143312
    ],
    [
      0,
      -94920
    ],
    [
      -39838,
      -48392
    ],
    [
      -39838,
      48392
    ],
    [
      0,
      94920
    ]
  ],
  [
    [
      641459,
      143312
    ],
    [
      39838,
      46490
    ]
  ],
  [
    [
      960161,
      870593
    ],
    [
      0,
      -69033
    ]
  ],
  [
    [
      920323,
      765942
    ],
    [
      -39837,
      35618
    ]
  ],
  [
    [
      880486,
      870593
    ],
    [
      39837,
      33425
    ]
  ],
  [
    [
      43892,
      189802
    ],
    [
      39838,
      -46490
    ],
    [
      0,
      -94920
    ],
    [
      -39838,
      -48392
    ],
    [
      -39837,
      48392
    ],
    [
      0,
      94920
    ],
    [
      39837,
      46490
    ]
  ],
  [
    [
      442270,
      189802
    ],
    [
      39838,
      -46490
    ]
  ],
  [
    [
      482108,
      143312
    ],
    [
      0,
      -94920
    ],
    [
      -39838,
      -48392
    ],
    [
      -39838,
      48392
    ],
    [
      0,
      94920
    ]
  ],
  [
    [
      681297,
      280761
    ],
    [
      0,
      -90959
    ]
  ],
  [
    [
      641459,
      143312
    ],
    [
      -39838,
      46490
    ]
  ],
  [
    [
      601621,
      189802
    ],
    [
      0,
      90959
    ]
  ],
  [
    [
      362595,
      189802
    ],
    [
      -39838,
      -46490
    ],
    [
      -39838,
      46490
    ],
    [
      0,
      90959
    ]
  ],
  [
    [
      282919,
      280761
    ],
    [
      39838,
      44441
    ]
  ],
  [
    [
      760972,
      280761
    ],
    [
      0,
      -90959
    ],
    [
      -39837,
      -46490
    ]
  ],
  [
    [
      482108,
      325202
    ],
    [
      39838,
      -44441
    ]
  ],
  [
    [
      521946,
      280761
    ],
    [
      0,
      -90959
    ]
  ],
  [
    [
      521946,
      189802
    ],
    [
      -39838,
      -46490
    ]
  ],
  [
    [
      601621,
      189802
    ],
    [
      -39838,
      -46490
    ],
    [
      -39837,
      46490
    ]
  ],
  [
    [
      521946,
      280761
    ],
    [
      39837,
      44441
    ]
  ],
  [
    [
      282919,
      454245
    ],
    [
      39838,
      -42292
    ]
  ],
  [
    [
      282919,
      280761
    ],
    [
      -39838,
      44441
    ]
  ],
  [
    [
      203243,
      692482
    ],
    [
      39838,
      -37846
    ]
  ],
  [
    [
      203243,
      536627
    ],
    [
      -39837,
      40080
    ]
  ],
  [
    [
      163406,
      576707
    ],
    [
      0,
      77929
    ]
  ],
  [
    [
      163406,
      654636
    ],
    [
      39837,
      37846
    ]
  ],
  [
    [
      163406,
      411953
    ],
    [
      -39838,
      42292
    ],
    [
      0,
      82382
    ],
    [
      39838,
      40080
    ]
  ],
  [
    [
      521946,
      692482
    ],
    [
      39837,
      -37846
    ]
  ],
  [
    [
      561783,
      654636
    ],
    [
      0,
      -77929
    ]
  ],
  [
    [
      482108,
      654636
    ],
    [
      39838,
      37846
    ]
  ],
  [
    [
      760972,
      692482
    ],
    [
      39838,
      -37846
    ]
  ],
  [
    [
      721135,
      654636
    ],
    [
      39837,
      37846
    ]
  ],
  [
    [
      601621,
      692482
    ],
    [
      39838,
      -37846
    ]
  ],
  [
    [
      561783,
      654636
    ],
    [
      39838,
      37846
    ]
  ],
  [
    [
      840648,
      765942
    ],
    [
      0,
      -73460
    ]
  ],
  [
    [
      760972,
      692482
    ],
    [
      0,
      73460
    ],
    [
      39838,
      35618
    ]
  ],
  [
    [
      203243,
      765942
    ],
    [
      0,
      -73460
    ]
  ],
  [
    [
      163406,
      654636
    ],
    [
      -39838,
      37846
    ],
    [
      0,
      73460
    ],
    [
      39838,
      35618
    ],
    [
      39837,
      -35618
    ]
  ],
  [
    [
      442270,
      692482
    ],
    [
      0,
      73460
    ]
  ],
  [
    [
      442270,
      765942
    ],
    [
      39838,
      35618
    ],
    [
      39838,
      -35618
    ],
    [
      0,
      -73460
    ]
  ],
  [
    [
      920323,
      692482
    ],
    [
      -39837,
      -37846
    ]
  ],
  [
    [
      601621,
      692482
    ],
    [
      0,
      73460
    ],
    [
      39838,
      35618
    ],
    [
      39838,
      -35618
    ],
    [
      0,
      -73460
    ]
  ],
  [
    [
      362595,
      692482
    ],
    [
      0,
      73460
    ]
  ],
  [
    [
      362595,
      765942
    ],
    [
      39837,
      35618
    ],
    [
      39838,
      -35618
    ]
  ],
  [
    [
      282919,
      765942
    ],
    [
      0,
      -73460
    ]
  ],
  [
    [
      203243,
      765942
    ],
    [
      39838,
      35618
    ],
    [
      39838,
      -35618
    ]
  ],
  [
    [
      282919,
      765942
    ],
    [
      39838,
      35618
    ],
    [
      39838,
      -35618
    ]
  ],
  [
    [
      39838,
      896264
    ],
    [
      39838,
      -31286
    ],
    [
      0,
      -64696
    ],
    [
      -39838,
      -33424
    ],
    [
      -39838,
      33424
    ],
    [
      0,
      64696
    ],
    [
      39838,
      31286
    ]
  ],
  [
    [
      960161,
      654636
    ],
    [
      0,
      -77929
    ],
    [
      -39838,
      -40080
    ]
  ]
], id = [
  -138.251828,
  26.393432,
  -69.902864,
  55.313204
], rd = {
  scale: [
    6834903234903234e-20,
    28919800919800915e-21
  ],
  translate: [
    -138.251828,
    26.393432
  ]
}, Wo = {
  type: td,
  objects: nd,
  arcs: ad,
  bbox: id,
  transform: rd
};
let gt = class {
  constructor() {
    this._partials = new Float64Array(32), this._n = 0;
  }
  add(t) {
    const n = this._partials;
    let a = 0;
    for (let i = 0; i < this._n && i < 32; i++) {
      const l = n[i], o = t + l, r = Math.abs(t) < Math.abs(l) ? t - (o - l) : l - (o - t);
      r && (n[a++] = r), t = o;
    }
    return n[a] = t, this._n = a + 1, this;
  }
  valueOf() {
    const t = this._partials;
    let n = this._n, a, i, l, o = 0;
    if (n > 0) {
      for (o = t[--n]; n > 0 && (a = o, i = t[--n], o = a + i, l = i - (o - a), !l); )
        ;
      n > 0 && (l < 0 && t[n - 1] < 0 || l > 0 && t[n - 1] > 0) && (i = l * 2, a = o + i, i == a - o && (o = a));
    }
    return o;
  }
};
function* od(e) {
  for (const t of e)
    yield* t;
}
function Es(e) {
  return Array.from(od(e));
}
var pe = 1e-6, $a = 1e-12, ce = Math.PI, Xe = ce / 2, jo = ce / 4, nt = ce * 2, $e = 180 / ce, se = ce / 180, Le = Math.abs, xs = Math.atan, Ot = Math.atan2, he = Math.cos, ld = Math.exp, Xi = Math.hypot, sd = Math.log, oe = Math.sin, Ma = Math.sign || function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, ft = Math.sqrt, cd = Math.tan;
function ud(e) {
  return e > 1 ? 0 : e < -1 ? ce : Math.acos(e);
}
function $t(e) {
  return e > 1 ? Xe : e < -1 ? -Xe : Math.asin(e);
}
function De() {
}
function za(e, t) {
  e && qo.hasOwnProperty(e.type) && qo[e.type](e, t);
}
var Ho = {
  Feature: function(e, t) {
    za(e.geometry, t);
  },
  FeatureCollection: function(e, t) {
    for (var n = e.features, a = -1, i = n.length; ++a < i; )
      za(n[a].geometry, t);
  }
}, qo = {
  Sphere: function(e, t) {
    t.sphere();
  },
  Point: function(e, t) {
    e = e.coordinates, t.point(e[0], e[1], e[2]);
  },
  MultiPoint: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      e = n[a], t.point(e[0], e[1], e[2]);
  },
  LineString: function(e, t) {
    Ji(e.coordinates, t, 0);
  },
  MultiLineString: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      Ji(n[a], t, 0);
  },
  Polygon: function(e, t) {
    Zo(e.coordinates, t);
  },
  MultiPolygon: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      Zo(n[a], t);
  },
  GeometryCollection: function(e, t) {
    for (var n = e.geometries, a = -1, i = n.length; ++a < i; )
      za(n[a], t);
  }
};
function Ji(e, t, n) {
  var a = -1, i = e.length - n, l;
  for (t.lineStart(); ++a < i; )
    l = e[a], t.point(l[0], l[1], l[2]);
  t.lineEnd();
}
function Zo(e, t) {
  var n = -1, a = e.length;
  for (t.polygonStart(); ++n < a; )
    Ji(e[n], t, 1);
  t.polygonEnd();
}
function At(e, t) {
  e && Ho.hasOwnProperty(e.type) ? Ho[e.type](e, t) : za(e, t);
}
function Qi(e) {
  return [Ot(e[1], e[0]), $t(e[2])];
}
function Sn(e) {
  var t = e[0], n = e[1], a = he(n);
  return [a * he(t), a * oe(t), oe(n)];
}
function pa(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function _a(e, t) {
  return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
}
function Mi(e, t) {
  e[0] += t[0], e[1] += t[1], e[2] += t[2];
}
function ha(e, t) {
  return [e[0] * t, e[1] * t, e[2] * t];
}
function er(e) {
  var t = ft(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
  e[0] /= t, e[1] /= t, e[2] /= t;
}
var Rn, Ua, Fa, Ga, Ba, Va, Wa, ja, tr, nr, ar, Ps, Ds, Ve, We, je, ht = {
  sphere: De,
  point: Qr,
  lineStart: Ko,
  lineEnd: Yo,
  polygonStart: function() {
    ht.lineStart = hd, ht.lineEnd = gd;
  },
  polygonEnd: function() {
    ht.lineStart = Ko, ht.lineEnd = Yo;
  }
};
function Qr(e, t) {
  e *= se, t *= se;
  var n = he(t);
  ra(n * he(e), n * oe(e), oe(t));
}
function ra(e, t, n) {
  ++Rn, Fa += (e - Fa) / Rn, Ga += (t - Ga) / Rn, Ba += (n - Ba) / Rn;
}
function Ko() {
  ht.point = dd;
}
function dd(e, t) {
  e *= se, t *= se;
  var n = he(t);
  Ve = n * he(e), We = n * oe(e), je = oe(t), ht.point = pd, ra(Ve, We, je);
}
function pd(e, t) {
  e *= se, t *= se;
  var n = he(t), a = n * he(e), i = n * oe(e), l = oe(t), o = Ot(ft((o = We * l - je * i) * o + (o = je * a - Ve * l) * o + (o = Ve * i - We * a) * o), Ve * a + We * i + je * l);
  Ua += o, Va += o * (Ve + (Ve = a)), Wa += o * (We + (We = i)), ja += o * (je + (je = l)), ra(Ve, We, je);
}
function Yo() {
  ht.point = Qr;
}
function hd() {
  ht.point = fd;
}
function gd() {
  As(Ps, Ds), ht.point = Qr;
}
function fd(e, t) {
  Ps = e, Ds = t, e *= se, t *= se, ht.point = As;
  var n = he(t);
  Ve = n * he(e), We = n * oe(e), je = oe(t), ra(Ve, We, je);
}
function As(e, t) {
  e *= se, t *= se;
  var n = he(t), a = n * he(e), i = n * oe(e), l = oe(t), o = We * l - je * i, r = je * a - Ve * l, g = Ve * i - We * a, h = Xi(o, r, g), c = $t(h), d = h && -c / h;
  tr.add(d * o), nr.add(d * r), ar.add(d * g), Ua += c, Va += c * (Ve + (Ve = a)), Wa += c * (We + (We = i)), ja += c * (je + (je = l)), ra(Ve, We, je);
}
function ta(e) {
  Rn = Ua = Fa = Ga = Ba = Va = Wa = ja = 0, tr = new gt(), nr = new gt(), ar = new gt(), At(e, ht);
  var t = +tr, n = +nr, a = +ar, i = Xi(t, n, a);
  return i < $a && (t = Va, n = Wa, a = ja, Ua < pe && (t = Fa, n = Ga, a = Ba), i = Xi(t, n, a), i < $a) ? [NaN, NaN] : [Ot(n, t) * $e, $t(a / i) * $e];
}
function ir(e, t) {
  function n(a, i) {
    return a = e(a, i), t(a[0], a[1]);
  }
  return e.invert && t.invert && (n.invert = function(a, i) {
    return a = t.invert(a, i), a && e.invert(a[0], a[1]);
  }), n;
}
function rr(e, t) {
  return [Le(e) > ce ? e + Math.round(-e / nt) * nt : e, t];
}
rr.invert = rr;
function Rs(e, t, n) {
  return (e %= nt) ? t || n ? ir(Jo(e), Qo(t, n)) : Jo(e) : t || n ? Qo(t, n) : rr;
}
function Xo(e) {
  return function(t, n) {
    return t += e, [t > ce ? t - nt : t < -ce ? t + nt : t, n];
  };
}
function Jo(e) {
  var t = Xo(e);
  return t.invert = Xo(-e), t;
}
function Qo(e, t) {
  var n = he(e), a = oe(e), i = he(t), l = oe(t);
  function o(r, g) {
    var h = he(g), c = he(r) * h, d = oe(r) * h, u = oe(g), p = u * n + c * a;
    return [
      Ot(d * i - p * l, c * n - u * a),
      $t(p * i + d * l)
    ];
  }
  return o.invert = function(r, g) {
    var h = he(g), c = he(r) * h, d = oe(r) * h, u = oe(g), p = u * i - d * l;
    return [
      Ot(d * i + u * l, c * n + p * a),
      $t(p * n - c * a)
    ];
  }, o;
}
function md(e) {
  e = Rs(e[0] * se, e[1] * se, e.length > 2 ? e[2] * se : 0);
  function t(n) {
    return n = e(n[0] * se, n[1] * se), n[0] *= $e, n[1] *= $e, n;
  }
  return t.invert = function(n) {
    return n = e.invert(n[0] * se, n[1] * se), n[0] *= $e, n[1] *= $e, n;
  }, t;
}
function yd(e, t, n, a, i, l) {
  if (n) {
    var o = he(t), r = oe(t), g = a * n;
    i == null ? (i = t + a * nt, l = t - g / 2) : (i = el(o, i), l = el(o, l), (a > 0 ? i < l : i > l) && (i += a * nt));
    for (var h, c = i; a > 0 ? c > l : c < l; c -= g)
      h = Qi([o, -r * he(c), -r * oe(c)]), e.point(h[0], h[1]);
  }
}
function el(e, t) {
  t = Sn(t), t[0] -= e, er(t);
  var n = ud(-t[1]);
  return ((-t[2] < 0 ? -n : n) + nt - pe) % nt;
}
function Is() {
  var e = [], t;
  return {
    point: function(n, a, i) {
      t.push([n, a, i]);
    },
    lineStart: function() {
      e.push(t = []);
    },
    lineEnd: De,
    rejoin: function() {
      e.length > 1 && e.push(e.pop().concat(e.shift()));
    },
    result: function() {
      var n = e;
      return e = [], t = null, n;
    }
  };
}
function Ea(e, t) {
  return Le(e[0] - t[0]) < pe && Le(e[1] - t[1]) < pe;
}
function ga(e, t, n, a) {
  this.x = e, this.z = t, this.o = n, this.e = a, this.v = !1, this.n = this.p = null;
}
function Os(e, t, n, a, i) {
  var l = [], o = [], r, g;
  if (e.forEach(function(f) {
    if (!((S = f.length - 1) <= 0)) {
      var S, m = f[0], y = f[S], v;
      if (Ea(m, y)) {
        if (!m[2] && !y[2]) {
          for (i.lineStart(), r = 0; r < S; ++r)
            i.point((m = f[r])[0], m[1]);
          i.lineEnd();
          return;
        }
        y[0] += 2 * pe;
      }
      l.push(v = new ga(m, f, null, !0)), o.push(v.o = new ga(m, null, v, !1)), l.push(v = new ga(y, f, null, !1)), o.push(v.o = new ga(y, null, v, !0));
    }
  }), !!l.length) {
    for (o.sort(t), tl(l), tl(o), r = 0, g = o.length; r < g; ++r)
      o[r].e = n = !n;
    for (var h = l[0], c, d; ; ) {
      for (var u = h, p = !0; u.v; )
        if ((u = u.n) === h)
          return;
      c = u.z, i.lineStart();
      do {
        if (u.v = u.o.v = !0, u.e) {
          if (p)
            for (r = 0, g = c.length; r < g; ++r)
              i.point((d = c[r])[0], d[1]);
          else
            a(u.x, u.n.x, 1, i);
          u = u.n;
        } else {
          if (p)
            for (c = u.p.z, r = c.length - 1; r >= 0; --r)
              i.point((d = c[r])[0], d[1]);
          else
            a(u.x, u.p.x, -1, i);
          u = u.p;
        }
        u = u.o, c = u.z, p = !p;
      } while (!u.v);
      i.lineEnd();
    }
  }
}
function tl(e) {
  if (t = e.length) {
    for (var t, n = 0, a = e[0], i; ++n < t; )
      a.n = i = e[n], i.p = a, a = i;
    a.n = i = e[0], i.p = a;
  }
}
function Ei(e) {
  return Le(e[0]) <= ce ? e[0] : Ma(e[0]) * ((Le(e[0]) + ce) % nt - ce);
}
function $s(e, t) {
  var n = Ei(t), a = t[1], i = oe(a), l = [oe(n), -he(n), 0], o = 0, r = 0, g = new gt();
  i === 1 ? a = Xe + pe : i === -1 && (a = -Xe - pe);
  for (var h = 0, c = e.length; h < c; ++h)
    if (u = (d = e[h]).length)
      for (var d, u, p = d[u - 1], f = Ei(p), S = p[1] / 2 + jo, m = oe(S), y = he(S), v = 0; v < u; ++v, f = w, m = P, y = x, p = C) {
        var C = d[v], w = Ei(C), N = C[1] / 2 + jo, P = oe(N), x = he(N), _ = w - f, z = _ >= 0 ? 1 : -1, F = z * _, I = F > ce, O = m * P;
        if (g.add(Ot(O * z * oe(F), y * x + O * he(F))), o += I ? _ + z * nt : _, I ^ f >= n ^ w >= n) {
          var U = _a(Sn(p), Sn(C));
          er(U);
          var k = _a(l, U);
          er(k);
          var b = (I ^ _ >= 0 ? -1 : 1) * $t(k[2]);
          (a > b || a === b && (U[0] || U[1])) && (r += I ^ _ >= 0 ? 1 : -1);
        }
      }
  return (o < -pe || o < pe && g < -$a) ^ r & 1;
}
function zs(e, t, n, a) {
  return function(i) {
    var l = t(i), o = Is(), r = t(o), g = !1, h, c, d, u = {
      point: p,
      lineStart: S,
      lineEnd: m,
      polygonStart: function() {
        u.point = y, u.lineStart = v, u.lineEnd = C, c = [], h = [];
      },
      polygonEnd: function() {
        u.point = p, u.lineStart = S, u.lineEnd = m, c = Es(c);
        var w = $s(h, a);
        c.length ? (g || (i.polygonStart(), g = !0), Os(c, Sd, w, n, i)) : w && (g || (i.polygonStart(), g = !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), g && (i.polygonEnd(), g = !1), c = h = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), n(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function p(w, N) {
      e(w, N) && i.point(w, N);
    }
    function f(w, N) {
      l.point(w, N);
    }
    function S() {
      u.point = f, l.lineStart();
    }
    function m() {
      u.point = p, l.lineEnd();
    }
    function y(w, N) {
      d.push([w, N]), r.point(w, N);
    }
    function v() {
      r.lineStart(), d = [];
    }
    function C() {
      y(d[0][0], d[0][1]), r.lineEnd();
      var w = r.clean(), N = o.result(), P, x = N.length, _, z, F;
      if (d.pop(), h.push(d), d = null, !!x) {
        if (w & 1) {
          if (z = N[0], (_ = z.length - 1) > 0) {
            for (g || (i.polygonStart(), g = !0), i.lineStart(), P = 0; P < _; ++P)
              i.point((F = z[P])[0], F[1]);
            i.lineEnd();
          }
          return;
        }
        x > 1 && w & 2 && N.push(N.pop().concat(N.shift())), c.push(N.filter(Cd));
      }
    }
    return u;
  };
}
function Cd(e) {
  return e.length > 1;
}
function Sd(e, t) {
  return ((e = e.x)[0] < 0 ? e[1] - Xe - pe : Xe - e[1]) - ((t = t.x)[0] < 0 ? t[1] - Xe - pe : Xe - t[1]);
}
const nl = zs(
  function() {
    return !0;
  },
  bd,
  kd,
  [-ce, -Xe]
);
function bd(e) {
  var t = NaN, n = NaN, a = NaN, i;
  return {
    lineStart: function() {
      e.lineStart(), i = 1;
    },
    point: function(l, o) {
      var r = l > 0 ? ce : -ce, g = Le(l - t);
      Le(g - ce) < pe ? (e.point(t, n = (n + o) / 2 > 0 ? Xe : -Xe), e.point(a, n), e.lineEnd(), e.lineStart(), e.point(r, n), e.point(l, n), i = 0) : a !== r && g >= ce && (Le(t - a) < pe && (t -= a * pe), Le(l - r) < pe && (l -= r * pe), n = vd(t, n, l, o), e.point(a, n), e.lineEnd(), e.lineStart(), e.point(r, n), i = 0), e.point(t = l, n = o), a = r;
    },
    lineEnd: function() {
      e.lineEnd(), t = n = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function vd(e, t, n, a) {
  var i, l, o = oe(e - n);
  return Le(o) > pe ? xs((oe(t) * (l = he(a)) * oe(n) - oe(a) * (i = he(t)) * oe(e)) / (i * l * o)) : (t + a) / 2;
}
function kd(e, t, n, a) {
  var i;
  if (e == null)
    i = n * Xe, a.point(-ce, i), a.point(0, i), a.point(ce, i), a.point(ce, 0), a.point(ce, -i), a.point(0, -i), a.point(-ce, -i), a.point(-ce, 0), a.point(-ce, i);
  else if (Le(e[0] - t[0]) > pe) {
    var l = e[0] < t[0] ? ce : -ce;
    i = n * l / 2, a.point(-l, i), a.point(0, i), a.point(l, i);
  } else
    a.point(t[0], t[1]);
}
function wd(e) {
  var t = he(e), n = 6 * se, a = t > 0, i = Le(t) > pe;
  function l(c, d, u, p) {
    yd(p, e, n, u, c, d);
  }
  function o(c, d) {
    return he(c) * he(d) > t;
  }
  function r(c) {
    var d, u, p, f, S;
    return {
      lineStart: function() {
        f = p = !1, S = 1;
      },
      point: function(m, y) {
        var v = [m, y], C, w = o(m, y), N = a ? w ? 0 : h(m, y) : w ? h(m + (m < 0 ? ce : -ce), y) : 0;
        if (!d && (f = p = w) && c.lineStart(), w !== p && (C = g(d, v), (!C || Ea(d, C) || Ea(v, C)) && (v[2] = 1)), w !== p)
          S = 0, w ? (c.lineStart(), C = g(v, d), c.point(C[0], C[1])) : (C = g(d, v), c.point(C[0], C[1], 2), c.lineEnd()), d = C;
        else if (i && d && a ^ w) {
          var P;
          !(N & u) && (P = g(v, d, !0)) && (S = 0, a ? (c.lineStart(), c.point(P[0][0], P[0][1]), c.point(P[1][0], P[1][1]), c.lineEnd()) : (c.point(P[1][0], P[1][1]), c.lineEnd(), c.lineStart(), c.point(P[0][0], P[0][1], 3)));
        }
        w && (!d || !Ea(d, v)) && c.point(v[0], v[1]), d = v, p = w, u = N;
      },
      lineEnd: function() {
        p && c.lineEnd(), d = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return S | (f && p) << 1;
      }
    };
  }
  function g(c, d, u) {
    var p = Sn(c), f = Sn(d), S = [1, 0, 0], m = _a(p, f), y = pa(m, m), v = m[0], C = y - v * v;
    if (!C)
      return !u && c;
    var w = t * y / C, N = -t * v / C, P = _a(S, m), x = ha(S, w), _ = ha(m, N);
    Mi(x, _);
    var z = P, F = pa(x, z), I = pa(z, z), O = F * F - I * (pa(x, x) - 1);
    if (!(O < 0)) {
      var U = ft(O), k = ha(z, (-F - U) / I);
      if (Mi(k, x), k = Qi(k), !u)
        return k;
      var b = c[0], T = d[0], D = c[1], A = d[1], $;
      T < b && ($ = b, b = T, T = $);
      var V = T - b, B = Le(V - ce) < pe, G = B || V < pe;
      if (!B && A < D && ($ = D, D = A, A = $), G ? B ? D + A > 0 ^ k[1] < (Le(k[0] - b) < pe ? D : A) : D <= k[1] && k[1] <= A : V > ce ^ (b <= k[0] && k[0] <= T)) {
        var W = ha(z, (-F + U) / I);
        return Mi(W, x), [k, Qi(W)];
      }
    }
  }
  function h(c, d) {
    var u = a ? e : ce - e, p = 0;
    return c < -u ? p |= 1 : c > u && (p |= 2), d < -u ? p |= 4 : d > u && (p |= 8), p;
  }
  return zs(o, r, l, a ? [0, -e] : [-ce, e - ce]);
}
function Ld(e, t, n, a, i, l) {
  var o = e[0], r = e[1], g = t[0], h = t[1], c = 0, d = 1, u = g - o, p = h - r, f;
  if (f = n - o, !(!u && f > 0)) {
    if (f /= u, u < 0) {
      if (f < c)
        return;
      f < d && (d = f);
    } else if (u > 0) {
      if (f > d)
        return;
      f > c && (c = f);
    }
    if (f = i - o, !(!u && f < 0)) {
      if (f /= u, u < 0) {
        if (f > d)
          return;
        f > c && (c = f);
      } else if (u > 0) {
        if (f < c)
          return;
        f < d && (d = f);
      }
      if (f = a - r, !(!p && f > 0)) {
        if (f /= p, p < 0) {
          if (f < c)
            return;
          f < d && (d = f);
        } else if (p > 0) {
          if (f > d)
            return;
          f > c && (c = f);
        }
        if (f = l - r, !(!p && f < 0)) {
          if (f /= p, p < 0) {
            if (f > d)
              return;
            f > c && (c = f);
          } else if (p > 0) {
            if (f < c)
              return;
            f < d && (d = f);
          }
          return c > 0 && (e[0] = o + c * u, e[1] = r + c * p), d < 1 && (t[0] = o + d * u, t[1] = r + d * p), !0;
        }
      }
    }
  }
}
var In = 1e9, fa = -In;
function Td(e, t, n, a) {
  function i(h, c) {
    return e <= h && h <= n && t <= c && c <= a;
  }
  function l(h, c, d, u) {
    var p = 0, f = 0;
    if (h == null || (p = o(h, d)) !== (f = o(c, d)) || g(h, c) < 0 ^ d > 0)
      do
        u.point(p === 0 || p === 3 ? e : n, p > 1 ? a : t);
      while ((p = (p + d + 4) % 4) !== f);
    else
      u.point(c[0], c[1]);
  }
  function o(h, c) {
    return Le(h[0] - e) < pe ? c > 0 ? 0 : 3 : Le(h[0] - n) < pe ? c > 0 ? 2 : 1 : Le(h[1] - t) < pe ? c > 0 ? 1 : 0 : c > 0 ? 3 : 2;
  }
  function r(h, c) {
    return g(h.x, c.x);
  }
  function g(h, c) {
    var d = o(h, 1), u = o(c, 1);
    return d !== u ? d - u : d === 0 ? c[1] - h[1] : d === 1 ? h[0] - c[0] : d === 2 ? h[1] - c[1] : c[0] - h[0];
  }
  return function(h) {
    var c = h, d = Is(), u, p, f, S, m, y, v, C, w, N, P, x = {
      point: _,
      lineStart: O,
      lineEnd: U,
      polygonStart: F,
      polygonEnd: I
    };
    function _(b, T) {
      i(b, T) && c.point(b, T);
    }
    function z() {
      for (var b = 0, T = 0, D = p.length; T < D; ++T)
        for (var A = p[T], $ = 1, V = A.length, B = A[0], G, W, H = B[0], Z = B[1]; $ < V; ++$)
          G = H, W = Z, B = A[$], H = B[0], Z = B[1], W <= a ? Z > a && (H - G) * (a - W) > (Z - W) * (e - G) && ++b : Z <= a && (H - G) * (a - W) < (Z - W) * (e - G) && --b;
      return b;
    }
    function F() {
      c = d, u = [], p = [], P = !0;
    }
    function I() {
      var b = z(), T = P && b, D = (u = Es(u)).length;
      (T || D) && (h.polygonStart(), T && (h.lineStart(), l(null, null, 1, h), h.lineEnd()), D && Os(u, r, b, l, h), h.polygonEnd()), c = h, u = p = f = null;
    }
    function O() {
      x.point = k, p && p.push(f = []), N = !0, w = !1, v = C = NaN;
    }
    function U() {
      u && (k(S, m), y && w && d.rejoin(), u.push(d.result())), x.point = _, w && c.lineEnd();
    }
    function k(b, T) {
      var D = i(b, T);
      if (p && f.push([b, T]), N)
        S = b, m = T, y = D, N = !1, D && (c.lineStart(), c.point(b, T));
      else if (D && w)
        c.point(b, T);
      else {
        var A = [v = Math.max(fa, Math.min(In, v)), C = Math.max(fa, Math.min(In, C))], $ = [b = Math.max(fa, Math.min(In, b)), T = Math.max(fa, Math.min(In, T))];
        Ld(A, $, e, t, n, a) ? (w || (c.lineStart(), c.point(A[0], A[1])), c.point($[0], $[1]), D || c.lineEnd(), P = !1) : D && (c.lineStart(), c.point(b, T), P = !1);
      }
      v = b, C = T, w = D;
    }
    return x;
  };
}
var or, lr, xa, Pa, bn = {
  sphere: De,
  point: De,
  lineStart: Nd,
  lineEnd: De,
  polygonStart: De,
  polygonEnd: De
};
function Nd() {
  bn.point = Ed, bn.lineEnd = Md;
}
function Md() {
  bn.point = bn.lineEnd = De;
}
function Ed(e, t) {
  e *= se, t *= se, lr = e, xa = oe(t), Pa = he(t), bn.point = xd;
}
function xd(e, t) {
  e *= se, t *= se;
  var n = oe(t), a = he(t), i = Le(e - lr), l = he(i), o = oe(i), r = a * o, g = Pa * n - xa * a * l, h = xa * n + Pa * a * l;
  or.add(Ot(ft(r * r + g * g), h)), lr = e, xa = n, Pa = a;
}
function Pd(e) {
  return or = new gt(), At(e, bn), +or;
}
var sr = [null, null], Dd = { type: "LineString", coordinates: sr };
function cr(e, t) {
  return sr[0] = e, sr[1] = t, Pd(Dd);
}
var al = {
  Feature: function(e, t) {
    return Ha(e.geometry, t);
  },
  FeatureCollection: function(e, t) {
    for (var n = e.features, a = -1, i = n.length; ++a < i; )
      if (Ha(n[a].geometry, t))
        return !0;
    return !1;
  }
}, il = {
  Sphere: function() {
    return !0;
  },
  Point: function(e, t) {
    return rl(e.coordinates, t);
  },
  MultiPoint: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      if (rl(n[a], t))
        return !0;
    return !1;
  },
  LineString: function(e, t) {
    return ol(e.coordinates, t);
  },
  MultiLineString: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      if (ol(n[a], t))
        return !0;
    return !1;
  },
  Polygon: function(e, t) {
    return ll(e.coordinates, t);
  },
  MultiPolygon: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      if (ll(n[a], t))
        return !0;
    return !1;
  },
  GeometryCollection: function(e, t) {
    for (var n = e.geometries, a = -1, i = n.length; ++a < i; )
      if (Ha(n[a], t))
        return !0;
    return !1;
  }
};
function Ha(e, t) {
  return e && il.hasOwnProperty(e.type) ? il[e.type](e, t) : !1;
}
function rl(e, t) {
  return cr(e, t) === 0;
}
function ol(e, t) {
  for (var n, a, i, l = 0, o = e.length; l < o; l++) {
    if (a = cr(e[l], t), a === 0 || l > 0 && (i = cr(e[l], e[l - 1]), i > 0 && n <= i && a <= i && (n + a - i) * (1 - Math.pow((n - a) / i, 2)) < $a * i))
      return !0;
    n = a;
  }
  return !1;
}
function ll(e, t) {
  return !!$s(e.map(Ad), _s(t));
}
function Ad(e) {
  return e = e.map(_s), e.pop(), e;
}
function _s(e) {
  return [e[0] * se, e[1] * se];
}
function xn(e, t) {
  return (e && al.hasOwnProperty(e.type) ? al[e.type] : Ha)(e, t);
}
const ur = (e) => e;
var xi = new gt(), dr = new gt(), Us, Fs, pr, hr, Ft = {
  point: De,
  lineStart: De,
  lineEnd: De,
  polygonStart: function() {
    Ft.lineStart = Rd, Ft.lineEnd = Od;
  },
  polygonEnd: function() {
    Ft.lineStart = Ft.lineEnd = Ft.point = De, xi.add(Le(dr)), dr = new gt();
  },
  result: function() {
    var e = xi / 2;
    return xi = new gt(), e;
  }
};
function Rd() {
  Ft.point = Id;
}
function Id(e, t) {
  Ft.point = Gs, Us = pr = e, Fs = hr = t;
}
function Gs(e, t) {
  dr.add(hr * e - pr * t), pr = e, hr = t;
}
function Od() {
  Gs(Us, Fs);
}
const sl = Ft;
var vn = 1 / 0, qa = vn, na = -vn, Za = na, $d = {
  point: zd,
  lineStart: De,
  lineEnd: De,
  polygonStart: De,
  polygonEnd: De,
  result: function() {
    var e = [[vn, qa], [na, Za]];
    return na = Za = -(qa = vn = 1 / 0), e;
  }
};
function zd(e, t) {
  e < vn && (vn = e), e > na && (na = e), t < qa && (qa = t), t > Za && (Za = t);
}
const Ka = $d;
var gr = 0, fr = 0, On = 0, Ya = 0, Xa = 0, hn = 0, mr = 0, yr = 0, $n = 0, Bs, Vs, kt, wt, dt = {
  point: an,
  lineStart: cl,
  lineEnd: ul,
  polygonStart: function() {
    dt.lineStart = Fd, dt.lineEnd = Gd;
  },
  polygonEnd: function() {
    dt.point = an, dt.lineStart = cl, dt.lineEnd = ul;
  },
  result: function() {
    var e = $n ? [mr / $n, yr / $n] : hn ? [Ya / hn, Xa / hn] : On ? [gr / On, fr / On] : [NaN, NaN];
    return gr = fr = On = Ya = Xa = hn = mr = yr = $n = 0, e;
  }
};
function an(e, t) {
  gr += e, fr += t, ++On;
}
function cl() {
  dt.point = _d;
}
function _d(e, t) {
  dt.point = Ud, an(kt = e, wt = t);
}
function Ud(e, t) {
  var n = e - kt, a = t - wt, i = ft(n * n + a * a);
  Ya += i * (kt + e) / 2, Xa += i * (wt + t) / 2, hn += i, an(kt = e, wt = t);
}
function ul() {
  dt.point = an;
}
function Fd() {
  dt.point = Bd;
}
function Gd() {
  Ws(Bs, Vs);
}
function Bd(e, t) {
  dt.point = Ws, an(Bs = kt = e, Vs = wt = t);
}
function Ws(e, t) {
  var n = e - kt, a = t - wt, i = ft(n * n + a * a);
  Ya += i * (kt + e) / 2, Xa += i * (wt + t) / 2, hn += i, i = wt * e - kt * t, mr += i * (kt + e), yr += i * (wt + t), $n += i * 3, an(kt = e, wt = t);
}
const dl = dt;
function js(e) {
  this._context = e;
}
js.prototype = {
  _radius: 4.5,
  pointRadius: function(e) {
    return this._radius = e, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._context.closePath(), this._point = NaN;
  },
  point: function(e, t) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(e, t), this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(e, t);
        break;
      }
      default: {
        this._context.moveTo(e + this._radius, t), this._context.arc(e, t, this._radius, 0, nt);
        break;
      }
    }
  },
  result: De
};
var Cr = new gt(), Pi, Hs, qs, zn, _n, Ja = {
  point: De,
  lineStart: function() {
    Ja.point = Vd;
  },
  lineEnd: function() {
    Pi && Zs(Hs, qs), Ja.point = De;
  },
  polygonStart: function() {
    Pi = !0;
  },
  polygonEnd: function() {
    Pi = null;
  },
  result: function() {
    var e = +Cr;
    return Cr = new gt(), e;
  }
};
function Vd(e, t) {
  Ja.point = Zs, Hs = zn = e, qs = _n = t;
}
function Zs(e, t) {
  zn -= e, _n -= t, Cr.add(ft(zn * zn + _n * _n)), zn = e, _n = t;
}
const pl = Ja;
function Ks() {
  this._string = [];
}
Ks.prototype = {
  _radius: 4.5,
  _circle: hl(4.5),
  pointRadius: function(e) {
    return (e = +e) !== this._radius && (this._radius = e, this._circle = null), this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._string.push("Z"), this._point = NaN;
  },
  point: function(e, t) {
    switch (this._point) {
      case 0: {
        this._string.push("M", e, ",", t), this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", e, ",", t);
        break;
      }
      default: {
        this._circle == null && (this._circle = hl(this._radius)), this._string.push("M", e, ",", t, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var e = this._string.join("");
      return this._string = [], e;
    } else
      return null;
  }
};
function hl(e) {
  return "m0," + e + "a" + e + "," + e + " 0 1,1 0," + -2 * e + "a" + e + "," + e + " 0 1,1 0," + 2 * e + "z";
}
function yn(e, t) {
  var n = 4.5, a, i;
  function l(o) {
    return o && (typeof n == "function" && i.pointRadius(+n.apply(this, arguments)), At(o, a(i))), i.result();
  }
  return l.area = function(o) {
    return At(o, a(sl)), sl.result();
  }, l.measure = function(o) {
    return At(o, a(pl)), pl.result();
  }, l.bounds = function(o) {
    return At(o, a(Ka)), Ka.result();
  }, l.centroid = function(o) {
    return At(o, a(dl)), dl.result();
  }, l.projection = function(o) {
    return arguments.length ? (a = o == null ? (e = null, ur) : (e = o).stream, l) : e;
  }, l.context = function(o) {
    return arguments.length ? (i = o == null ? (t = null, new Ks()) : new js(t = o), typeof n != "function" && i.pointRadius(n), l) : t;
  }, l.pointRadius = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : (i.pointRadius(+o), +o), l) : n;
  }, l.projection(e).context(t);
}
function eo(e) {
  return function(t) {
    var n = new Sr();
    for (var a in e)
      n[a] = e[a];
    return n.stream = t, n;
  };
}
function Sr() {
}
Sr.prototype = {
  constructor: Sr,
  point: function(e, t) {
    this.stream.point(e, t);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function to(e, t, n) {
  var a = e.clipExtent && e.clipExtent();
  return e.scale(150).translate([0, 0]), a != null && e.clipExtent(null), At(n, e.stream(Ka)), t(Ka.result()), a != null && e.clipExtent(a), e;
}
function no(e, t, n) {
  return to(e, function(a) {
    var i = t[1][0] - t[0][0], l = t[1][1] - t[0][1], o = Math.min(i / (a[1][0] - a[0][0]), l / (a[1][1] - a[0][1])), r = +t[0][0] + (i - o * (a[1][0] + a[0][0])) / 2, g = +t[0][1] + (l - o * (a[1][1] + a[0][1])) / 2;
    e.scale(150 * o).translate([r, g]);
  }, n);
}
function Ys(e, t, n) {
  return no(e, [[0, 0], t], n);
}
function Xs(e, t, n) {
  return to(e, function(a) {
    var i = +t, l = i / (a[1][0] - a[0][0]), o = (i - l * (a[1][0] + a[0][0])) / 2, r = -l * a[0][1];
    e.scale(150 * l).translate([o, r]);
  }, n);
}
function Js(e, t, n) {
  return to(e, function(a) {
    var i = +t, l = i / (a[1][1] - a[0][1]), o = -l * a[0][0], r = (i - l * (a[1][1] + a[0][1])) / 2;
    e.scale(150 * l).translate([o, r]);
  }, n);
}
var gl = 16, Wd = he(30 * se);
function fl(e, t) {
  return +t ? Hd(e, t) : jd(e);
}
function jd(e) {
  return eo({
    point: function(t, n) {
      t = e(t, n), this.stream.point(t[0], t[1]);
    }
  });
}
function Hd(e, t) {
  function n(a, i, l, o, r, g, h, c, d, u, p, f, S, m) {
    var y = h - a, v = c - i, C = y * y + v * v;
    if (C > 4 * t && S--) {
      var w = o + u, N = r + p, P = g + f, x = ft(w * w + N * N + P * P), _ = $t(P /= x), z = Le(Le(P) - 1) < pe || Le(l - d) < pe ? (l + d) / 2 : Ot(N, w), F = e(z, _), I = F[0], O = F[1], U = I - a, k = O - i, b = v * U - y * k;
      (b * b / C > t || Le((y * U + v * k) / C - 0.5) > 0.3 || o * u + r * p + g * f < Wd) && (n(a, i, l, o, r, g, I, O, z, w /= x, N /= x, P, S, m), m.point(I, O), n(I, O, z, w, N, P, h, c, d, u, p, f, S, m));
    }
  }
  return function(a) {
    var i, l, o, r, g, h, c, d, u, p, f, S, m = {
      point: y,
      lineStart: v,
      lineEnd: w,
      polygonStart: function() {
        a.polygonStart(), m.lineStart = N;
      },
      polygonEnd: function() {
        a.polygonEnd(), m.lineStart = v;
      }
    };
    function y(_, z) {
      _ = e(_, z), a.point(_[0], _[1]);
    }
    function v() {
      d = NaN, m.point = C, a.lineStart();
    }
    function C(_, z) {
      var F = Sn([_, z]), I = e(_, z);
      n(d, u, c, p, f, S, d = I[0], u = I[1], c = _, p = F[0], f = F[1], S = F[2], gl, a), a.point(d, u);
    }
    function w() {
      m.point = y, a.lineEnd();
    }
    function N() {
      v(), m.point = P, m.lineEnd = x;
    }
    function P(_, z) {
      C(i = _, z), l = d, o = u, r = p, g = f, h = S, m.point = C;
    }
    function x() {
      n(d, u, c, p, f, S, l, o, i, r, g, h, gl, a), m.lineEnd = w, w();
    }
    return m;
  };
}
var qd = eo({
  point: function(e, t) {
    this.stream.point(e * se, t * se);
  }
});
function Zd(e) {
  return eo({
    point: function(t, n) {
      var a = e(t, n);
      return this.stream.point(a[0], a[1]);
    }
  });
}
function Kd(e, t, n, a, i) {
  function l(o, r) {
    return o *= a, r *= i, [t + e * o, n - e * r];
  }
  return l.invert = function(o, r) {
    return [(o - t) / e * a, (n - r) / e * i];
  }, l;
}
function ml(e, t, n, a, i, l) {
  if (!l)
    return Kd(e, t, n, a, i);
  var o = he(l), r = oe(l), g = o * e, h = r * e, c = o / e, d = r / e, u = (r * n - o * t) / e, p = (r * t + o * n) / e;
  function f(S, m) {
    return S *= a, m *= i, [g * S - h * m + t, n - h * S - g * m];
  }
  return f.invert = function(S, m) {
    return [a * (c * S - d * m + u), i * (p - d * S - c * m)];
  }, f;
}
function Qs(e) {
  return ec(function() {
    return e;
  })();
}
function ec(e) {
  var t, n = 150, a = 480, i = 250, l = 0, o = 0, r = 0, g = 0, h = 0, c, d = 0, u = 1, p = 1, f = null, S = nl, m = null, y, v, C, w = ur, N = 0.5, P, x, _, z, F;
  function I(b) {
    return _(b[0] * se, b[1] * se);
  }
  function O(b) {
    return b = _.invert(b[0], b[1]), b && [b[0] * $e, b[1] * $e];
  }
  I.stream = function(b) {
    return z && F === b ? z : z = qd(Zd(c)(S(P(w(F = b)))));
  }, I.preclip = function(b) {
    return arguments.length ? (S = b, f = void 0, k()) : S;
  }, I.postclip = function(b) {
    return arguments.length ? (w = b, m = y = v = C = null, k()) : w;
  }, I.clipAngle = function(b) {
    return arguments.length ? (S = +b ? wd(f = b * se) : (f = null, nl), k()) : f * $e;
  }, I.clipExtent = function(b) {
    return arguments.length ? (w = b == null ? (m = y = v = C = null, ur) : Td(m = +b[0][0], y = +b[0][1], v = +b[1][0], C = +b[1][1]), k()) : m == null ? null : [[m, y], [v, C]];
  }, I.scale = function(b) {
    return arguments.length ? (n = +b, U()) : n;
  }, I.translate = function(b) {
    return arguments.length ? (a = +b[0], i = +b[1], U()) : [a, i];
  }, I.center = function(b) {
    return arguments.length ? (l = b[0] % 360 * se, o = b[1] % 360 * se, U()) : [l * $e, o * $e];
  }, I.rotate = function(b) {
    return arguments.length ? (r = b[0] % 360 * se, g = b[1] % 360 * se, h = b.length > 2 ? b[2] % 360 * se : 0, U()) : [r * $e, g * $e, h * $e];
  }, I.angle = function(b) {
    return arguments.length ? (d = b % 360 * se, U()) : d * $e;
  }, I.reflectX = function(b) {
    return arguments.length ? (u = b ? -1 : 1, U()) : u < 0;
  }, I.reflectY = function(b) {
    return arguments.length ? (p = b ? -1 : 1, U()) : p < 0;
  }, I.precision = function(b) {
    return arguments.length ? (P = fl(x, N = b * b), k()) : ft(N);
  }, I.fitExtent = function(b, T) {
    return no(I, b, T);
  }, I.fitSize = function(b, T) {
    return Ys(I, b, T);
  }, I.fitWidth = function(b, T) {
    return Xs(I, b, T);
  }, I.fitHeight = function(b, T) {
    return Js(I, b, T);
  };
  function U() {
    var b = ml(n, 0, 0, u, p, d).apply(null, t(l, o)), T = ml(n, a - b[0], i - b[1], u, p, d);
    return c = Rs(r, g, h), x = ir(t, T), _ = ir(c, x), P = fl(x, N), k();
  }
  function k() {
    return z = F = null, I;
  }
  return function() {
    return t = e.apply(this, arguments), I.invert = t.invert && O, U();
  };
}
function Yd(e) {
  var t = 0, n = ce / 3, a = ec(e), i = a(t, n);
  return i.parallels = function(l) {
    return arguments.length ? a(t = l[0] * se, n = l[1] * se) : [t * $e, n * $e];
  }, i;
}
function Xd(e) {
  var t = he(e);
  function n(a, i) {
    return [a * t, oe(i) / t];
  }
  return n.invert = function(a, i) {
    return [a / t, $t(i * t)];
  }, n;
}
function Jd(e, t) {
  var n = oe(e), a = (n + oe(t)) / 2;
  if (Le(a) < pe)
    return Xd(e);
  var i = 1 + n * (2 * a - n), l = ft(i) / a;
  function o(r, g) {
    var h = ft(i - 2 * a * oe(g)) / a;
    return [h * oe(r *= a), l - h * he(r)];
  }
  return o.invert = function(r, g) {
    var h = l - g, c = Ot(r, Le(h)) * Ma(h);
    return h * a < 0 && (c -= ce * Ma(r) * Ma(h)), [c / a, $t((i - (r * r + h * h) * a * a) / (2 * a))];
  }, o;
}
function Vt() {
  return Yd(Jd).scale(155.424).center([0, 33.6442]);
}
function ao() {
  return Vt().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}
function Qd(e) {
  var t = e.length;
  return {
    point: function(n, a) {
      for (var i = -1; ++i < t; )
        e[i].point(n, a);
    },
    sphere: function() {
      for (var n = -1; ++n < t; )
        e[n].sphere();
    },
    lineStart: function() {
      for (var n = -1; ++n < t; )
        e[n].lineStart();
    },
    lineEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].lineEnd();
    },
    polygonStart: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonStart();
    },
    polygonEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonEnd();
    }
  };
}
function ep() {
  var e, t, n = ao(), a, i = Vt().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), l, o = Vt().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), r, g, h = { point: function(u, p) {
    g = [u, p];
  } };
  function c(u) {
    var p = u[0], f = u[1];
    return g = null, a.point(p, f), g || (l.point(p, f), g) || (r.point(p, f), g);
  }
  c.invert = function(u) {
    var p = n.scale(), f = n.translate(), S = (u[0] - f[0]) / p, m = (u[1] - f[1]) / p;
    return (m >= 0.12 && m < 0.234 && S >= -0.425 && S < -0.214 ? i : m >= 0.166 && m < 0.234 && S >= -0.214 && S < -0.115 ? o : n).invert(u);
  }, c.stream = function(u) {
    return e && t === u ? e : e = Qd([n.stream(t = u), i.stream(u), o.stream(u)]);
  }, c.precision = function(u) {
    return arguments.length ? (n.precision(u), i.precision(u), o.precision(u), d()) : n.precision();
  }, c.scale = function(u) {
    return arguments.length ? (n.scale(u), i.scale(u * 0.35), o.scale(u), c.translate(n.translate())) : n.scale();
  }, c.translate = function(u) {
    if (!arguments.length)
      return n.translate();
    var p = n.scale(), f = +u[0], S = +u[1];
    return a = n.translate(u).clipExtent([[f - 0.455 * p, S - 0.238 * p], [f + 0.455 * p, S + 0.238 * p]]).stream(h), l = i.translate([f - 0.307 * p, S + 0.201 * p]).clipExtent([[f - 0.425 * p + pe, S + 0.12 * p + pe], [f - 0.214 * p - pe, S + 0.234 * p - pe]]).stream(h), r = o.translate([f - 0.205 * p, S + 0.212 * p]).clipExtent([[f - 0.214 * p + pe, S + 0.166 * p + pe], [f - 0.115 * p - pe, S + 0.234 * p - pe]]).stream(h), d();
  }, c.fitExtent = function(u, p) {
    return no(c, u, p);
  }, c.fitSize = function(u, p) {
    return Ys(c, u, p);
  }, c.fitWidth = function(u, p) {
    return Xs(c, u, p);
  }, c.fitHeight = function(u, p) {
    return Js(c, u, p);
  };
  function d() {
    return e = t = null, c;
  }
  return c.scale(1070);
}
function io(e, t) {
  return [e, sd(cd((Xe + t) / 2))];
}
io.invert = function(e, t) {
  return [e, 2 * xs(ld(t)) - Xe];
};
function tc() {
  return tp(io).scale(961 / nt);
}
function tp(e) {
  var t = Qs(e), n = t.center, a = t.scale, i = t.translate, l = t.clipExtent, o = null, r, g, h;
  t.scale = function(d) {
    return arguments.length ? (a(d), c()) : a();
  }, t.translate = function(d) {
    return arguments.length ? (i(d), c()) : i();
  }, t.center = function(d) {
    return arguments.length ? (n(d), c()) : n();
  }, t.clipExtent = function(d) {
    return arguments.length ? (d == null ? o = r = g = h = null : (o = +d[0][0], r = +d[0][1], g = +d[1][0], h = +d[1][1]), c()) : o == null ? null : [[o, r], [g, h]];
  };
  function c() {
    var d = ce * a(), u = t(md(t.rotate()).invert([0, 0]));
    return l(o == null ? [[u[0] - d, u[1] - d], [u[0] + d, u[1] + d]] : e === io ? [[Math.max(u[0] - d, o), r], [Math.min(u[0] + d, g), h]] : [[o, Math.max(u[1] - d, r)], [g, Math.min(u[1] + d, h)]]);
  }
  return c();
}
function br(e, t) {
  return [e, t];
}
br.invert = br;
function yl() {
  return Qs(br).scale(152.63);
}
function vr() {
  return vr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, vr.apply(this, arguments);
}
function np(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ro(e) {
  var t = e.top, n = t === void 0 ? 0 : t, a = e.left, i = a === void 0 ? 0 : a, l = e.transform, o = e.className, r = e.children, g = e.innerRef, h = np(e, ["top", "left", "transform", "className", "children", "innerRef"]);
  return /* @__PURE__ */ ie.createElement("g", vr({
    ref: g,
    className: It("visx-group", o),
    transform: l || "translate(" + i + ", " + n + ")"
  }, h), r);
}
ro.propTypes = {
  top: q.number,
  left: q.number,
  transform: q.string,
  className: q.string,
  children: q.node,
  innerRef: q.oneOfType([q.string, q.func, q.object])
};
function yi() {
  return new Qa();
}
function Qa() {
  this.reset();
}
Qa.prototype = {
  constructor: Qa,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(e) {
    Cl(ma, e, this.t), Cl(this, ma.s, this.s), this.s ? this.t += ma.t : this.s = ma.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var ma = new Qa();
function Cl(e, t, n) {
  var a = e.s = t + n, i = a - t, l = a - i;
  e.t = t - l + (n - i);
}
var ae = 1e-6, ap = 1e-12, ue = Math.PI, Je = ue / 2, Sl = ue / 4, at = ue * 2, Be = 180 / ue, Me = ue / 180, Se = Math.abs, nc = Math.atan, rn = Math.atan2, be = Math.cos, ya = Math.ceil, ip = Math.exp, rp = Math.log, me = Math.sin, Da = Math.sign || function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, mt = Math.sqrt, op = Math.tan;
function lp(e) {
  return e > 1 ? 0 : e < -1 ? ue : Math.acos(e);
}
function yt(e) {
  return e > 1 ? Je : e < -1 ? -Je : Math.asin(e);
}
function ct() {
}
function ei(e, t) {
  e && vl.hasOwnProperty(e.type) && vl[e.type](e, t);
}
var bl = {
  Feature: function(e, t) {
    ei(e.geometry, t);
  },
  FeatureCollection: function(e, t) {
    for (var n = e.features, a = -1, i = n.length; ++a < i; )
      ei(n[a].geometry, t);
  }
}, vl = {
  Sphere: function(e, t) {
    t.sphere();
  },
  Point: function(e, t) {
    e = e.coordinates, t.point(e[0], e[1], e[2]);
  },
  MultiPoint: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      e = n[a], t.point(e[0], e[1], e[2]);
  },
  LineString: function(e, t) {
    kr(e.coordinates, t, 0);
  },
  MultiLineString: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      kr(n[a], t, 0);
  },
  Polygon: function(e, t) {
    kl(e.coordinates, t);
  },
  MultiPolygon: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      kl(n[a], t);
  },
  GeometryCollection: function(e, t) {
    for (var n = e.geometries, a = -1, i = n.length; ++a < i; )
      ei(n[a], t);
  }
};
function kr(e, t, n) {
  var a = -1, i = e.length - n, l;
  for (t.lineStart(); ++a < i; )
    l = e[a], t.point(l[0], l[1], l[2]);
  t.lineEnd();
}
function kl(e, t) {
  var n = -1, a = e.length;
  for (t.polygonStart(); ++n < a; )
    kr(e[n], t, 1);
  t.polygonEnd();
}
function dn(e, t) {
  e && bl.hasOwnProperty(e.type) ? bl[e.type](e, t) : ei(e, t);
}
function wr(e) {
  return [rn(e[1], e[0]), yt(e[2])];
}
function kn(e) {
  var t = e[0], n = e[1], a = be(n);
  return [a * be(t), a * me(t), me(n)];
}
function Ca(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function ti(e, t) {
  return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
}
function Di(e, t) {
  e[0] += t[0], e[1] += t[1], e[2] += t[2];
}
function Sa(e, t) {
  return [e[0] * t, e[1] * t, e[2] * t];
}
function Lr(e) {
  var t = mt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
  e[0] /= t, e[1] /= t, e[2] /= t;
}
function Tr(e, t) {
  function n(a, i) {
    return a = e(a, i), t(a[0], a[1]);
  }
  return e.invert && t.invert && (n.invert = function(a, i) {
    return a = t.invert(a, i), a && e.invert(a[0], a[1]);
  }), n;
}
function Nr(e, t) {
  return [Se(e) > ue ? e + Math.round(-e / at) * at : e, t];
}
Nr.invert = Nr;
function ac(e, t, n) {
  return (e %= at) ? t || n ? Tr(Ll(e), Tl(t, n)) : Ll(e) : t || n ? Tl(t, n) : Nr;
}
function wl(e) {
  return function(t, n) {
    return t += e, [t > ue ? t - at : t < -ue ? t + at : t, n];
  };
}
function Ll(e) {
  var t = wl(e);
  return t.invert = wl(-e), t;
}
function Tl(e, t) {
  var n = be(e), a = me(e), i = be(t), l = me(t);
  function o(r, g) {
    var h = be(g), c = be(r) * h, d = me(r) * h, u = me(g), p = u * n + c * a;
    return [
      rn(d * i - p * l, c * n - u * a),
      yt(p * i + d * l)
    ];
  }
  return o.invert = function(r, g) {
    var h = be(g), c = be(r) * h, d = me(r) * h, u = me(g), p = u * i - d * l;
    return [
      rn(d * i + u * l, c * n + p * a),
      yt(p * n - c * a)
    ];
  }, o;
}
function sp(e) {
  e = ac(e[0] * Me, e[1] * Me, e.length > 2 ? e[2] * Me : 0);
  function t(n) {
    return n = e(n[0] * Me, n[1] * Me), n[0] *= Be, n[1] *= Be, n;
  }
  return t.invert = function(n) {
    return n = e.invert(n[0] * Me, n[1] * Me), n[0] *= Be, n[1] *= Be, n;
  }, t;
}
function cp(e, t, n, a, i, l) {
  if (n) {
    var o = be(t), r = me(t), g = a * n;
    i == null ? (i = t + a * at, l = t - g / 2) : (i = Nl(o, i), l = Nl(o, l), (a > 0 ? i < l : i > l) && (i += a * at));
    for (var h, c = i; a > 0 ? c > l : c < l; c -= g)
      h = wr([o, -r * be(c), -r * me(c)]), e.point(h[0], h[1]);
  }
}
function Nl(e, t) {
  t = kn(t), t[0] -= e, Lr(t);
  var n = lp(-t[1]);
  return ((-t[2] < 0 ? -n : n) + at - ae) % at;
}
function ic() {
  var e = [], t;
  return {
    point: function(n, a, i) {
      t.push([n, a, i]);
    },
    lineStart: function() {
      e.push(t = []);
    },
    lineEnd: ct,
    rejoin: function() {
      e.length > 1 && e.push(e.pop().concat(e.shift()));
    },
    result: function() {
      var n = e;
      return e = [], t = null, n;
    }
  };
}
function Aa(e, t) {
  return Se(e[0] - t[0]) < ae && Se(e[1] - t[1]) < ae;
}
function ba(e, t, n, a) {
  this.x = e, this.z = t, this.o = n, this.e = a, this.v = !1, this.n = this.p = null;
}
function rc(e, t, n, a, i) {
  var l = [], o = [], r, g;
  if (e.forEach(function(f) {
    if (!((S = f.length - 1) <= 0)) {
      var S, m = f[0], y = f[S], v;
      if (Aa(m, y)) {
        if (!m[2] && !y[2]) {
          for (i.lineStart(), r = 0; r < S; ++r)
            i.point((m = f[r])[0], m[1]);
          i.lineEnd();
          return;
        }
        y[0] += 2 * ae;
      }
      l.push(v = new ba(m, f, null, !0)), o.push(v.o = new ba(m, null, v, !1)), l.push(v = new ba(y, f, null, !1)), o.push(v.o = new ba(y, null, v, !0));
    }
  }), !!l.length) {
    for (o.sort(t), Ml(l), Ml(o), r = 0, g = o.length; r < g; ++r)
      o[r].e = n = !n;
    for (var h = l[0], c, d; ; ) {
      for (var u = h, p = !0; u.v; )
        if ((u = u.n) === h)
          return;
      c = u.z, i.lineStart();
      do {
        if (u.v = u.o.v = !0, u.e) {
          if (p)
            for (r = 0, g = c.length; r < g; ++r)
              i.point((d = c[r])[0], d[1]);
          else
            a(u.x, u.n.x, 1, i);
          u = u.n;
        } else {
          if (p)
            for (c = u.p.z, r = c.length - 1; r >= 0; --r)
              i.point((d = c[r])[0], d[1]);
          else
            a(u.x, u.p.x, -1, i);
          u = u.p;
        }
        u = u.o, c = u.z, p = !p;
      } while (!u.v);
      i.lineEnd();
    }
  }
}
function Ml(e) {
  if (t = e.length) {
    for (var t, n = 0, a = e[0], i; ++n < t; )
      a.n = i = e[n], i.p = a, a = i;
    a.n = i = e[0], i.p = a;
  }
}
var Ai = yi();
function Ri(e) {
  return Se(e[0]) <= ue ? e[0] : Da(e[0]) * ((Se(e[0]) + ue) % at - ue);
}
function up(e, t) {
  var n = Ri(t), a = t[1], i = me(a), l = [me(n), -be(n), 0], o = 0, r = 0;
  Ai.reset(), i === 1 ? a = Je + ae : i === -1 && (a = -Je - ae);
  for (var g = 0, h = e.length; g < h; ++g)
    if (d = (c = e[g]).length)
      for (var c, d, u = c[d - 1], p = Ri(u), f = u[1] / 2 + Sl, S = me(f), m = be(f), y = 0; y < d; ++y, p = C, S = N, m = P, u = v) {
        var v = c[y], C = Ri(v), w = v[1] / 2 + Sl, N = me(w), P = be(w), x = C - p, _ = x >= 0 ? 1 : -1, z = _ * x, F = z > ue, I = S * N;
        if (Ai.add(rn(I * _ * me(z), m * P + I * be(z))), o += F ? x + _ * at : x, F ^ p >= n ^ C >= n) {
          var O = ti(kn(u), kn(v));
          Lr(O);
          var U = ti(l, O);
          Lr(U);
          var k = (F ^ x >= 0 ? -1 : 1) * yt(U[2]);
          (a > k || a === k && (O[0] || O[1])) && (r += F ^ x >= 0 ? 1 : -1);
        }
      }
  return (o < -ae || o < ae && Ai < -ae) ^ r & 1;
}
function oc(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function dp(e) {
  return e.length === 1 && (e = pp(e)), {
    left: function(t, n, a, i) {
      for (a == null && (a = 0), i == null && (i = t.length); a < i; ) {
        var l = a + i >>> 1;
        e(t[l], n) < 0 ? a = l + 1 : i = l;
      }
      return a;
    },
    right: function(t, n, a, i) {
      for (a == null && (a = 0), i == null && (i = t.length); a < i; ) {
        var l = a + i >>> 1;
        e(t[l], n) > 0 ? i = l : a = l + 1;
      }
      return a;
    }
  };
}
function pp(e) {
  return function(t, n) {
    return oc(e(t), n);
  };
}
dp(oc);
function gn(e, t, n) {
  e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
  for (var a = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, l = new Array(i); ++a < i; )
    l[a] = e + a * n;
  return l;
}
function lc(e) {
  for (var t = e.length, n, a = -1, i = 0, l, o; ++a < t; )
    i += e[a].length;
  for (l = new Array(i); --t >= 0; )
    for (o = e[t], n = o.length; --n >= 0; )
      l[--i] = o[n];
  return l;
}
function sc(e, t, n, a) {
  return function(i) {
    var l = t(i), o = ic(), r = t(o), g = !1, h, c, d, u = {
      point: p,
      lineStart: S,
      lineEnd: m,
      polygonStart: function() {
        u.point = y, u.lineStart = v, u.lineEnd = C, c = [], h = [];
      },
      polygonEnd: function() {
        u.point = p, u.lineStart = S, u.lineEnd = m, c = lc(c);
        var w = up(h, a);
        c.length ? (g || (i.polygonStart(), g = !0), rc(c, gp, w, n, i)) : w && (g || (i.polygonStart(), g = !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), g && (i.polygonEnd(), g = !1), c = h = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), n(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function p(w, N) {
      e(w, N) && i.point(w, N);
    }
    function f(w, N) {
      l.point(w, N);
    }
    function S() {
      u.point = f, l.lineStart();
    }
    function m() {
      u.point = p, l.lineEnd();
    }
    function y(w, N) {
      d.push([w, N]), r.point(w, N);
    }
    function v() {
      r.lineStart(), d = [];
    }
    function C() {
      y(d[0][0], d[0][1]), r.lineEnd();
      var w = r.clean(), N = o.result(), P, x = N.length, _, z, F;
      if (d.pop(), h.push(d), d = null, !!x) {
        if (w & 1) {
          if (z = N[0], (_ = z.length - 1) > 0) {
            for (g || (i.polygonStart(), g = !0), i.lineStart(), P = 0; P < _; ++P)
              i.point((F = z[P])[0], F[1]);
            i.lineEnd();
          }
          return;
        }
        x > 1 && w & 2 && N.push(N.pop().concat(N.shift())), c.push(N.filter(hp));
      }
    }
    return u;
  };
}
function hp(e) {
  return e.length > 1;
}
function gp(e, t) {
  return ((e = e.x)[0] < 0 ? e[1] - Je - ae : Je - e[1]) - ((t = t.x)[0] < 0 ? t[1] - Je - ae : Je - t[1]);
}
const El = sc(
  function() {
    return !0;
  },
  fp,
  yp,
  [-ue, -Je]
);
function fp(e) {
  var t = NaN, n = NaN, a = NaN, i;
  return {
    lineStart: function() {
      e.lineStart(), i = 1;
    },
    point: function(l, o) {
      var r = l > 0 ? ue : -ue, g = Se(l - t);
      Se(g - ue) < ae ? (e.point(t, n = (n + o) / 2 > 0 ? Je : -Je), e.point(a, n), e.lineEnd(), e.lineStart(), e.point(r, n), e.point(l, n), i = 0) : a !== r && g >= ue && (Se(t - a) < ae && (t -= a * ae), Se(l - r) < ae && (l -= r * ae), n = mp(t, n, l, o), e.point(a, n), e.lineEnd(), e.lineStart(), e.point(r, n), i = 0), e.point(t = l, n = o), a = r;
    },
    lineEnd: function() {
      e.lineEnd(), t = n = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function mp(e, t, n, a) {
  var i, l, o = me(e - n);
  return Se(o) > ae ? nc((me(t) * (l = be(a)) * me(n) - me(a) * (i = be(t)) * me(e)) / (i * l * o)) : (t + a) / 2;
}
function yp(e, t, n, a) {
  var i;
  if (e == null)
    i = n * Je, a.point(-ue, i), a.point(0, i), a.point(ue, i), a.point(ue, 0), a.point(ue, -i), a.point(0, -i), a.point(-ue, -i), a.point(-ue, 0), a.point(-ue, i);
  else if (Se(e[0] - t[0]) > ae) {
    var l = e[0] < t[0] ? ue : -ue;
    i = n * l / 2, a.point(-l, i), a.point(0, i), a.point(l, i);
  } else
    a.point(t[0], t[1]);
}
function Cp(e) {
  var t = be(e), n = 6 * Me, a = t > 0, i = Se(t) > ae;
  function l(c, d, u, p) {
    cp(p, e, n, u, c, d);
  }
  function o(c, d) {
    return be(c) * be(d) > t;
  }
  function r(c) {
    var d, u, p, f, S;
    return {
      lineStart: function() {
        f = p = !1, S = 1;
      },
      point: function(m, y) {
        var v = [m, y], C, w = o(m, y), N = a ? w ? 0 : h(m, y) : w ? h(m + (m < 0 ? ue : -ue), y) : 0;
        if (!d && (f = p = w) && c.lineStart(), w !== p && (C = g(d, v), (!C || Aa(d, C) || Aa(v, C)) && (v[2] = 1)), w !== p)
          S = 0, w ? (c.lineStart(), C = g(v, d), c.point(C[0], C[1])) : (C = g(d, v), c.point(C[0], C[1], 2), c.lineEnd()), d = C;
        else if (i && d && a ^ w) {
          var P;
          !(N & u) && (P = g(v, d, !0)) && (S = 0, a ? (c.lineStart(), c.point(P[0][0], P[0][1]), c.point(P[1][0], P[1][1]), c.lineEnd()) : (c.point(P[1][0], P[1][1]), c.lineEnd(), c.lineStart(), c.point(P[0][0], P[0][1], 3)));
        }
        w && (!d || !Aa(d, v)) && c.point(v[0], v[1]), d = v, p = w, u = N;
      },
      lineEnd: function() {
        p && c.lineEnd(), d = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return S | (f && p) << 1;
      }
    };
  }
  function g(c, d, u) {
    var p = kn(c), f = kn(d), S = [1, 0, 0], m = ti(p, f), y = Ca(m, m), v = m[0], C = y - v * v;
    if (!C)
      return !u && c;
    var w = t * y / C, N = -t * v / C, P = ti(S, m), x = Sa(S, w), _ = Sa(m, N);
    Di(x, _);
    var z = P, F = Ca(x, z), I = Ca(z, z), O = F * F - I * (Ca(x, x) - 1);
    if (!(O < 0)) {
      var U = mt(O), k = Sa(z, (-F - U) / I);
      if (Di(k, x), k = wr(k), !u)
        return k;
      var b = c[0], T = d[0], D = c[1], A = d[1], $;
      T < b && ($ = b, b = T, T = $);
      var V = T - b, B = Se(V - ue) < ae, G = B || V < ae;
      if (!B && A < D && ($ = D, D = A, A = $), G ? B ? D + A > 0 ^ k[1] < (Se(k[0] - b) < ae ? D : A) : D <= k[1] && k[1] <= A : V > ue ^ (b <= k[0] && k[0] <= T)) {
        var W = Sa(z, (-F + U) / I);
        return Di(W, x), [k, wr(W)];
      }
    }
  }
  function h(c, d) {
    var u = a ? e : ue - e, p = 0;
    return c < -u ? p |= 1 : c > u && (p |= 2), d < -u ? p |= 4 : d > u && (p |= 8), p;
  }
  return sc(o, r, l, a ? [0, -e] : [-ue, e - ue]);
}
function Sp(e, t, n, a, i, l) {
  var o = e[0], r = e[1], g = t[0], h = t[1], c = 0, d = 1, u = g - o, p = h - r, f;
  if (f = n - o, !(!u && f > 0)) {
    if (f /= u, u < 0) {
      if (f < c)
        return;
      f < d && (d = f);
    } else if (u > 0) {
      if (f > d)
        return;
      f > c && (c = f);
    }
    if (f = i - o, !(!u && f < 0)) {
      if (f /= u, u < 0) {
        if (f > d)
          return;
        f > c && (c = f);
      } else if (u > 0) {
        if (f < c)
          return;
        f < d && (d = f);
      }
      if (f = a - r, !(!p && f > 0)) {
        if (f /= p, p < 0) {
          if (f < c)
            return;
          f < d && (d = f);
        } else if (p > 0) {
          if (f > d)
            return;
          f > c && (c = f);
        }
        if (f = l - r, !(!p && f < 0)) {
          if (f /= p, p < 0) {
            if (f > d)
              return;
            f > c && (c = f);
          } else if (p > 0) {
            if (f < c)
              return;
            f < d && (d = f);
          }
          return c > 0 && (e[0] = o + c * u, e[1] = r + c * p), d < 1 && (t[0] = o + d * u, t[1] = r + d * p), !0;
        }
      }
    }
  }
}
var Un = 1e9, va = -Un;
function bp(e, t, n, a) {
  function i(h, c) {
    return e <= h && h <= n && t <= c && c <= a;
  }
  function l(h, c, d, u) {
    var p = 0, f = 0;
    if (h == null || (p = o(h, d)) !== (f = o(c, d)) || g(h, c) < 0 ^ d > 0)
      do
        u.point(p === 0 || p === 3 ? e : n, p > 1 ? a : t);
      while ((p = (p + d + 4) % 4) !== f);
    else
      u.point(c[0], c[1]);
  }
  function o(h, c) {
    return Se(h[0] - e) < ae ? c > 0 ? 0 : 3 : Se(h[0] - n) < ae ? c > 0 ? 2 : 1 : Se(h[1] - t) < ae ? c > 0 ? 1 : 0 : c > 0 ? 3 : 2;
  }
  function r(h, c) {
    return g(h.x, c.x);
  }
  function g(h, c) {
    var d = o(h, 1), u = o(c, 1);
    return d !== u ? d - u : d === 0 ? c[1] - h[1] : d === 1 ? h[0] - c[0] : d === 2 ? h[1] - c[1] : c[0] - h[0];
  }
  return function(h) {
    var c = h, d = ic(), u, p, f, S, m, y, v, C, w, N, P, x = {
      point: _,
      lineStart: O,
      lineEnd: U,
      polygonStart: F,
      polygonEnd: I
    };
    function _(b, T) {
      i(b, T) && c.point(b, T);
    }
    function z() {
      for (var b = 0, T = 0, D = p.length; T < D; ++T)
        for (var A = p[T], $ = 1, V = A.length, B = A[0], G, W, H = B[0], Z = B[1]; $ < V; ++$)
          G = H, W = Z, B = A[$], H = B[0], Z = B[1], W <= a ? Z > a && (H - G) * (a - W) > (Z - W) * (e - G) && ++b : Z <= a && (H - G) * (a - W) < (Z - W) * (e - G) && --b;
      return b;
    }
    function F() {
      c = d, u = [], p = [], P = !0;
    }
    function I() {
      var b = z(), T = P && b, D = (u = lc(u)).length;
      (T || D) && (h.polygonStart(), T && (h.lineStart(), l(null, null, 1, h), h.lineEnd()), D && rc(u, r, b, l, h), h.polygonEnd()), c = h, u = p = f = null;
    }
    function O() {
      x.point = k, p && p.push(f = []), N = !0, w = !1, v = C = NaN;
    }
    function U() {
      u && (k(S, m), y && w && d.rejoin(), u.push(d.result())), x.point = _, w && c.lineEnd();
    }
    function k(b, T) {
      var D = i(b, T);
      if (p && f.push([b, T]), N)
        S = b, m = T, y = D, N = !1, D && (c.lineStart(), c.point(b, T));
      else if (D && w)
        c.point(b, T);
      else {
        var A = [v = Math.max(va, Math.min(Un, v)), C = Math.max(va, Math.min(Un, C))], $ = [b = Math.max(va, Math.min(Un, b)), T = Math.max(va, Math.min(Un, T))];
        Sp(A, $, e, t, n, a) ? (w || (c.lineStart(), c.point(A[0], A[1])), c.point($[0], $[1]), D || c.lineEnd(), P = !1) : D && (c.lineStart(), c.point(b, T), P = !1);
      }
      v = b, C = T, w = D;
    }
    return x;
  };
}
function xl(e, t, n) {
  var a = gn(e, t - ae, n).concat(t);
  return function(i) {
    return a.map(function(l) {
      return [i, l];
    });
  };
}
function Pl(e, t, n) {
  var a = gn(e, t - ae, n).concat(t);
  return function(i) {
    return a.map(function(l) {
      return [l, i];
    });
  };
}
function vp() {
  var e, t, n, a, i, l, o, r, g = 10, h = g, c = 90, d = 360, u, p, f, S, m = 2.5;
  function y() {
    return { type: "MultiLineString", coordinates: v() };
  }
  function v() {
    return gn(ya(a / c) * c, n, c).map(f).concat(gn(ya(r / d) * d, o, d).map(S)).concat(gn(ya(t / g) * g, e, g).filter(function(C) {
      return Se(C % c) > ae;
    }).map(u)).concat(gn(ya(l / h) * h, i, h).filter(function(C) {
      return Se(C % d) > ae;
    }).map(p));
  }
  return y.lines = function() {
    return v().map(function(C) {
      return { type: "LineString", coordinates: C };
    });
  }, y.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        f(a).concat(
          S(o).slice(1),
          f(n).reverse().slice(1),
          S(r).reverse().slice(1)
        )
      ]
    };
  }, y.extent = function(C) {
    return arguments.length ? y.extentMajor(C).extentMinor(C) : y.extentMinor();
  }, y.extentMajor = function(C) {
    return arguments.length ? (a = +C[0][0], n = +C[1][0], r = +C[0][1], o = +C[1][1], a > n && (C = a, a = n, n = C), r > o && (C = r, r = o, o = C), y.precision(m)) : [[a, r], [n, o]];
  }, y.extentMinor = function(C) {
    return arguments.length ? (t = +C[0][0], e = +C[1][0], l = +C[0][1], i = +C[1][1], t > e && (C = t, t = e, e = C), l > i && (C = l, l = i, i = C), y.precision(m)) : [[t, l], [e, i]];
  }, y.step = function(C) {
    return arguments.length ? y.stepMajor(C).stepMinor(C) : y.stepMinor();
  }, y.stepMajor = function(C) {
    return arguments.length ? (c = +C[0], d = +C[1], y) : [c, d];
  }, y.stepMinor = function(C) {
    return arguments.length ? (g = +C[0], h = +C[1], y) : [g, h];
  }, y.precision = function(C) {
    return arguments.length ? (m = +C, u = xl(l, i, 90), p = Pl(t, e, m), f = xl(r, o, 90), S = Pl(a, n, m), y) : m;
  }, y.extentMajor([[-180, -90 + ae], [180, 90 - ae]]).extentMinor([[-180, -80 - ae], [180, 80 + ae]]);
}
function Mr(e) {
  return e;
}
var Ii = yi(), Er = yi(), cc, uc, xr, Pr, Gt = {
  point: ct,
  lineStart: ct,
  lineEnd: ct,
  polygonStart: function() {
    Gt.lineStart = kp, Gt.lineEnd = Lp;
  },
  polygonEnd: function() {
    Gt.lineStart = Gt.lineEnd = Gt.point = ct, Ii.add(Se(Er)), Er.reset();
  },
  result: function() {
    var e = Ii / 2;
    return Ii.reset(), e;
  }
};
function kp() {
  Gt.point = wp;
}
function wp(e, t) {
  Gt.point = dc, cc = xr = e, uc = Pr = t;
}
function dc(e, t) {
  Er.add(Pr * e - xr * t), xr = e, Pr = t;
}
function Lp() {
  dc(cc, uc);
}
const Dl = Gt;
var wn = 1 / 0, ni = wn, aa = -wn, ai = aa, Tp = {
  point: Np,
  lineStart: ct,
  lineEnd: ct,
  polygonStart: ct,
  polygonEnd: ct,
  result: function() {
    var e = [[wn, ni], [aa, ai]];
    return aa = ai = -(ni = wn = 1 / 0), e;
  }
};
function Np(e, t) {
  e < wn && (wn = e), e > aa && (aa = e), t < ni && (ni = t), t > ai && (ai = t);
}
const ii = Tp;
var Dr = 0, Ar = 0, Fn = 0, ri = 0, oi = 0, fn = 0, Rr = 0, Ir = 0, Gn = 0, pc, hc, Lt, Tt, pt = {
  point: on,
  lineStart: Al,
  lineEnd: Rl,
  polygonStart: function() {
    pt.lineStart = xp, pt.lineEnd = Pp;
  },
  polygonEnd: function() {
    pt.point = on, pt.lineStart = Al, pt.lineEnd = Rl;
  },
  result: function() {
    var e = Gn ? [Rr / Gn, Ir / Gn] : fn ? [ri / fn, oi / fn] : Fn ? [Dr / Fn, Ar / Fn] : [NaN, NaN];
    return Dr = Ar = Fn = ri = oi = fn = Rr = Ir = Gn = 0, e;
  }
};
function on(e, t) {
  Dr += e, Ar += t, ++Fn;
}
function Al() {
  pt.point = Mp;
}
function Mp(e, t) {
  pt.point = Ep, on(Lt = e, Tt = t);
}
function Ep(e, t) {
  var n = e - Lt, a = t - Tt, i = mt(n * n + a * a);
  ri += i * (Lt + e) / 2, oi += i * (Tt + t) / 2, fn += i, on(Lt = e, Tt = t);
}
function Rl() {
  pt.point = on;
}
function xp() {
  pt.point = Dp;
}
function Pp() {
  gc(pc, hc);
}
function Dp(e, t) {
  pt.point = gc, on(pc = Lt = e, hc = Tt = t);
}
function gc(e, t) {
  var n = e - Lt, a = t - Tt, i = mt(n * n + a * a);
  ri += i * (Lt + e) / 2, oi += i * (Tt + t) / 2, fn += i, i = Tt * e - Lt * t, Rr += i * (Lt + e), Ir += i * (Tt + t), Gn += i * 3, on(Lt = e, Tt = t);
}
const Il = pt;
function fc(e) {
  this._context = e;
}
fc.prototype = {
  _radius: 4.5,
  pointRadius: function(e) {
    return this._radius = e, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._context.closePath(), this._point = NaN;
  },
  point: function(e, t) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(e, t), this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(e, t);
        break;
      }
      default: {
        this._context.moveTo(e + this._radius, t), this._context.arc(e, t, this._radius, 0, at);
        break;
      }
    }
  },
  result: ct
};
var Or = yi(), Oi, mc, yc, Bn, Vn, li = {
  point: ct,
  lineStart: function() {
    li.point = Ap;
  },
  lineEnd: function() {
    Oi && Cc(mc, yc), li.point = ct;
  },
  polygonStart: function() {
    Oi = !0;
  },
  polygonEnd: function() {
    Oi = null;
  },
  result: function() {
    var e = +Or;
    return Or.reset(), e;
  }
};
function Ap(e, t) {
  li.point = Cc, mc = Bn = e, yc = Vn = t;
}
function Cc(e, t) {
  Bn -= e, Vn -= t, Or.add(mt(Bn * Bn + Vn * Vn)), Bn = e, Vn = t;
}
const Ol = li;
function Sc() {
  this._string = [];
}
Sc.prototype = {
  _radius: 4.5,
  _circle: $l(4.5),
  pointRadius: function(e) {
    return (e = +e) !== this._radius && (this._radius = e, this._circle = null), this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._string.push("Z"), this._point = NaN;
  },
  point: function(e, t) {
    switch (this._point) {
      case 0: {
        this._string.push("M", e, ",", t), this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", e, ",", t);
        break;
      }
      default: {
        this._circle == null && (this._circle = $l(this._radius)), this._string.push("M", e, ",", t, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var e = this._string.join("");
      return this._string = [], e;
    } else
      return null;
  }
};
function $l(e) {
  return "m0," + e + "a" + e + "," + e + " 0 1,1 0," + -2 * e + "a" + e + "," + e + " 0 1,1 0," + 2 * e + "z";
}
function Rp(e, t) {
  var n = 4.5, a, i;
  function l(o) {
    return o && (typeof n == "function" && i.pointRadius(+n.apply(this, arguments)), dn(o, a(i))), i.result();
  }
  return l.area = function(o) {
    return dn(o, a(Dl)), Dl.result();
  }, l.measure = function(o) {
    return dn(o, a(Ol)), Ol.result();
  }, l.bounds = function(o) {
    return dn(o, a(ii)), ii.result();
  }, l.centroid = function(o) {
    return dn(o, a(Il)), Il.result();
  }, l.projection = function(o) {
    return arguments.length ? (a = o == null ? (e = null, Mr) : (e = o).stream, l) : e;
  }, l.context = function(o) {
    return arguments.length ? (i = o == null ? (t = null, new Sc()) : new fc(t = o), typeof n != "function" && i.pointRadius(n), l) : t;
  }, l.pointRadius = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : (i.pointRadius(+o), +o), l) : n;
  }, l.projection(e).context(t);
}
function oo(e) {
  return function(t) {
    var n = new $r();
    for (var a in e)
      n[a] = e[a];
    return n.stream = t, n;
  };
}
function $r() {
}
$r.prototype = {
  constructor: $r,
  point: function(e, t) {
    this.stream.point(e, t);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function lo(e, t, n) {
  var a = e.clipExtent && e.clipExtent();
  return e.scale(150).translate([0, 0]), a != null && e.clipExtent(null), dn(n, e.stream(ii)), t(ii.result()), a != null && e.clipExtent(a), e;
}
function so(e, t, n) {
  return lo(e, function(a) {
    var i = t[1][0] - t[0][0], l = t[1][1] - t[0][1], o = Math.min(i / (a[1][0] - a[0][0]), l / (a[1][1] - a[0][1])), r = +t[0][0] + (i - o * (a[1][0] + a[0][0])) / 2, g = +t[0][1] + (l - o * (a[1][1] + a[0][1])) / 2;
    e.scale(150 * o).translate([r, g]);
  }, n);
}
function bc(e, t, n) {
  return so(e, [[0, 0], t], n);
}
function vc(e, t, n) {
  return lo(e, function(a) {
    var i = +t, l = i / (a[1][0] - a[0][0]), o = (i - l * (a[1][0] + a[0][0])) / 2, r = -l * a[0][1];
    e.scale(150 * l).translate([o, r]);
  }, n);
}
function kc(e, t, n) {
  return lo(e, function(a) {
    var i = +t, l = i / (a[1][1] - a[0][1]), o = -l * a[0][0], r = (i - l * (a[1][1] + a[0][1])) / 2;
    e.scale(150 * l).translate([o, r]);
  }, n);
}
var zl = 16, Ip = be(30 * Me);
function _l(e, t) {
  return +t ? $p(e, t) : Op(e);
}
function Op(e) {
  return oo({
    point: function(t, n) {
      t = e(t, n), this.stream.point(t[0], t[1]);
    }
  });
}
function $p(e, t) {
  function n(a, i, l, o, r, g, h, c, d, u, p, f, S, m) {
    var y = h - a, v = c - i, C = y * y + v * v;
    if (C > 4 * t && S--) {
      var w = o + u, N = r + p, P = g + f, x = mt(w * w + N * N + P * P), _ = yt(P /= x), z = Se(Se(P) - 1) < ae || Se(l - d) < ae ? (l + d) / 2 : rn(N, w), F = e(z, _), I = F[0], O = F[1], U = I - a, k = O - i, b = v * U - y * k;
      (b * b / C > t || Se((y * U + v * k) / C - 0.5) > 0.3 || o * u + r * p + g * f < Ip) && (n(a, i, l, o, r, g, I, O, z, w /= x, N /= x, P, S, m), m.point(I, O), n(I, O, z, w, N, P, h, c, d, u, p, f, S, m));
    }
  }
  return function(a) {
    var i, l, o, r, g, h, c, d, u, p, f, S, m = {
      point: y,
      lineStart: v,
      lineEnd: w,
      polygonStart: function() {
        a.polygonStart(), m.lineStart = N;
      },
      polygonEnd: function() {
        a.polygonEnd(), m.lineStart = v;
      }
    };
    function y(_, z) {
      _ = e(_, z), a.point(_[0], _[1]);
    }
    function v() {
      d = NaN, m.point = C, a.lineStart();
    }
    function C(_, z) {
      var F = kn([_, z]), I = e(_, z);
      n(d, u, c, p, f, S, d = I[0], u = I[1], c = _, p = F[0], f = F[1], S = F[2], zl, a), a.point(d, u);
    }
    function w() {
      m.point = y, a.lineEnd();
    }
    function N() {
      v(), m.point = P, m.lineEnd = x;
    }
    function P(_, z) {
      C(i = _, z), l = d, o = u, r = p, g = f, h = S, m.point = C;
    }
    function x() {
      n(d, u, c, p, f, S, l, o, i, r, g, h, zl, a), m.lineEnd = w, w();
    }
    return m;
  };
}
var zp = oo({
  point: function(e, t) {
    this.stream.point(e * Me, t * Me);
  }
});
function _p(e) {
  return oo({
    point: function(t, n) {
      var a = e(t, n);
      return this.stream.point(a[0], a[1]);
    }
  });
}
function Up(e, t, n, a, i) {
  function l(o, r) {
    return o *= a, r *= i, [t + e * o, n - e * r];
  }
  return l.invert = function(o, r) {
    return [(o - t) / e * a, (n - r) / e * i];
  }, l;
}
function Ul(e, t, n, a, i, l) {
  var o = be(l), r = me(l), g = o * e, h = r * e, c = o / e, d = r / e, u = (r * n - o * t) / e, p = (r * t + o * n) / e;
  function f(S, m) {
    return S *= a, m *= i, [g * S - h * m + t, n - h * S - g * m];
  }
  return f.invert = function(S, m) {
    return [a * (c * S - d * m + u), i * (p - d * S - c * m)];
  }, f;
}
function Ci(e) {
  return wc(function() {
    return e;
  })();
}
function wc(e) {
  var t, n = 150, a = 480, i = 250, l = 0, o = 0, r = 0, g = 0, h = 0, c, d = 0, u = 1, p = 1, f = null, S = El, m = null, y, v, C, w = Mr, N = 0.5, P, x, _, z, F;
  function I(b) {
    return _(b[0] * Me, b[1] * Me);
  }
  function O(b) {
    return b = _.invert(b[0], b[1]), b && [b[0] * Be, b[1] * Be];
  }
  I.stream = function(b) {
    return z && F === b ? z : z = zp(_p(c)(S(P(w(F = b)))));
  }, I.preclip = function(b) {
    return arguments.length ? (S = b, f = void 0, k()) : S;
  }, I.postclip = function(b) {
    return arguments.length ? (w = b, m = y = v = C = null, k()) : w;
  }, I.clipAngle = function(b) {
    return arguments.length ? (S = +b ? Cp(f = b * Me) : (f = null, El), k()) : f * Be;
  }, I.clipExtent = function(b) {
    return arguments.length ? (w = b == null ? (m = y = v = C = null, Mr) : bp(m = +b[0][0], y = +b[0][1], v = +b[1][0], C = +b[1][1]), k()) : m == null ? null : [[m, y], [v, C]];
  }, I.scale = function(b) {
    return arguments.length ? (n = +b, U()) : n;
  }, I.translate = function(b) {
    return arguments.length ? (a = +b[0], i = +b[1], U()) : [a, i];
  }, I.center = function(b) {
    return arguments.length ? (l = b[0] % 360 * Me, o = b[1] % 360 * Me, U()) : [l * Be, o * Be];
  }, I.rotate = function(b) {
    return arguments.length ? (r = b[0] % 360 * Me, g = b[1] % 360 * Me, h = b.length > 2 ? b[2] % 360 * Me : 0, U()) : [r * Be, g * Be, h * Be];
  }, I.angle = function(b) {
    return arguments.length ? (d = b % 360 * Me, U()) : d * Be;
  }, I.reflectX = function(b) {
    return arguments.length ? (u = b ? -1 : 1, U()) : u < 0;
  }, I.reflectY = function(b) {
    return arguments.length ? (p = b ? -1 : 1, U()) : p < 0;
  }, I.precision = function(b) {
    return arguments.length ? (P = _l(x, N = b * b), k()) : mt(N);
  }, I.fitExtent = function(b, T) {
    return so(I, b, T);
  }, I.fitSize = function(b, T) {
    return bc(I, b, T);
  }, I.fitWidth = function(b, T) {
    return vc(I, b, T);
  }, I.fitHeight = function(b, T) {
    return kc(I, b, T);
  };
  function U() {
    var b = Ul(n, 0, 0, u, p, d).apply(null, t(l, o)), T = (d ? Ul : Up)(n, a - b[0], i - b[1], u, p, d);
    return c = ac(r, g, h), x = Tr(t, T), _ = Tr(c, x), P = _l(x, N), k();
  }
  function k() {
    return z = F = null, I;
  }
  return function() {
    return t = e.apply(this, arguments), I.invert = t.invert && O, U();
  };
}
function Fp(e) {
  var t = 0, n = ue / 3, a = wc(e), i = a(t, n);
  return i.parallels = function(l) {
    return arguments.length ? a(t = l[0] * Me, n = l[1] * Me) : [t * Be, n * Be];
  }, i;
}
function Gp(e) {
  var t = be(e);
  function n(a, i) {
    return [a * t, me(i) / t];
  }
  return n.invert = function(a, i) {
    return [a / t, yt(i * t)];
  }, n;
}
function Bp(e, t) {
  var n = me(e), a = (n + me(t)) / 2;
  if (Se(a) < ae)
    return Gp(e);
  var i = 1 + n * (2 * a - n), l = mt(i) / a;
  function o(r, g) {
    var h = mt(i - 2 * a * me(g)) / a;
    return [h * me(r *= a), l - h * be(r)];
  }
  return o.invert = function(r, g) {
    var h = l - g, c = rn(r, Se(h)) * Da(h);
    return h * a < 0 && (c -= ue * Da(r) * Da(h)), [c / a, yt((i - (r * r + h * h) * a * a) / (2 * a))];
  }, o;
}
function zr() {
  return Fp(Bp).scale(155.424).center([0, 33.6442]);
}
function Lc() {
  return zr().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}
function Vp(e) {
  var t = e.length;
  return {
    point: function(n, a) {
      for (var i = -1; ++i < t; )
        e[i].point(n, a);
    },
    sphere: function() {
      for (var n = -1; ++n < t; )
        e[n].sphere();
    },
    lineStart: function() {
      for (var n = -1; ++n < t; )
        e[n].lineStart();
    },
    lineEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].lineEnd();
    },
    polygonStart: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonStart();
    },
    polygonEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonEnd();
    }
  };
}
function Wp() {
  var e, t, n = Lc(), a, i = zr().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), l, o = zr().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), r, g, h = { point: function(u, p) {
    g = [u, p];
  } };
  function c(u) {
    var p = u[0], f = u[1];
    return g = null, a.point(p, f), g || (l.point(p, f), g) || (r.point(p, f), g);
  }
  c.invert = function(u) {
    var p = n.scale(), f = n.translate(), S = (u[0] - f[0]) / p, m = (u[1] - f[1]) / p;
    return (m >= 0.12 && m < 0.234 && S >= -0.425 && S < -0.214 ? i : m >= 0.166 && m < 0.234 && S >= -0.214 && S < -0.115 ? o : n).invert(u);
  }, c.stream = function(u) {
    return e && t === u ? e : e = Vp([n.stream(t = u), i.stream(u), o.stream(u)]);
  }, c.precision = function(u) {
    return arguments.length ? (n.precision(u), i.precision(u), o.precision(u), d()) : n.precision();
  }, c.scale = function(u) {
    return arguments.length ? (n.scale(u), i.scale(u * 0.35), o.scale(u), c.translate(n.translate())) : n.scale();
  }, c.translate = function(u) {
    if (!arguments.length)
      return n.translate();
    var p = n.scale(), f = +u[0], S = +u[1];
    return a = n.translate(u).clipExtent([[f - 0.455 * p, S - 0.238 * p], [f + 0.455 * p, S + 0.238 * p]]).stream(h), l = i.translate([f - 0.307 * p, S + 0.201 * p]).clipExtent([[f - 0.425 * p + ae, S + 0.12 * p + ae], [f - 0.214 * p - ae, S + 0.234 * p - ae]]).stream(h), r = o.translate([f - 0.205 * p, S + 0.212 * p]).clipExtent([[f - 0.214 * p + ae, S + 0.166 * p + ae], [f - 0.115 * p - ae, S + 0.234 * p - ae]]).stream(h), d();
  }, c.fitExtent = function(u, p) {
    return so(c, u, p);
  }, c.fitSize = function(u, p) {
    return bc(c, u, p);
  }, c.fitWidth = function(u, p) {
    return vc(c, u, p);
  }, c.fitHeight = function(u, p) {
    return kc(c, u, p);
  };
  function d() {
    return e = t = null, c;
  }
  return c.scale(1070);
}
function jp(e) {
  return function(t, n) {
    var a = mt(t * t + n * n), i = e(a), l = me(i), o = be(i);
    return [
      rn(t * l, a * o),
      yt(a && n * l / a)
    ];
  };
}
function co(e, t) {
  return [e, rp(op((Je + t) / 2))];
}
co.invert = function(e, t) {
  return [e, 2 * nc(ip(t)) - Je];
};
function Hp() {
  return qp(co).scale(961 / at);
}
function qp(e) {
  var t = Ci(e), n = t.center, a = t.scale, i = t.translate, l = t.clipExtent, o = null, r, g, h;
  t.scale = function(d) {
    return arguments.length ? (a(d), c()) : a();
  }, t.translate = function(d) {
    return arguments.length ? (i(d), c()) : i();
  }, t.center = function(d) {
    return arguments.length ? (n(d), c()) : n();
  }, t.clipExtent = function(d) {
    return arguments.length ? (d == null ? o = r = g = h = null : (o = +d[0][0], r = +d[0][1], g = +d[1][0], h = +d[1][1]), c()) : o == null ? null : [[o, r], [g, h]];
  };
  function c() {
    var d = ue * a(), u = t(sp(t.rotate()).invert([0, 0]));
    return l(o == null ? [[u[0] - d, u[1] - d], [u[0] + d, u[1] + d]] : e === co ? [[Math.max(u[0] - d, o), r], [Math.min(u[0] + d, g), h]] : [[o, Math.max(u[1] - d, r)], [g, Math.min(u[1] + d, h)]]);
  }
  return c();
}
var jn = 1.340264, Hn = -0.081106, qn = 893e-6, Zn = 3796e-6, si = mt(3) / 2, Zp = 12;
function Tc(e, t) {
  var n = yt(si * me(t)), a = n * n, i = a * a * a;
  return [
    e * be(n) / (si * (jn + 3 * Hn * a + i * (7 * qn + 9 * Zn * a))),
    n * (jn + Hn * a + i * (qn + Zn * a))
  ];
}
Tc.invert = function(e, t) {
  for (var n = t, a = n * n, i = a * a * a, l = 0, o, r, g; l < Zp && (r = n * (jn + Hn * a + i * (qn + Zn * a)) - t, g = jn + 3 * Hn * a + i * (7 * qn + 9 * Zn * a), n -= o = r / g, a = n * n, i = a * a * a, !(Se(o) < ap)); ++l)
    ;
  return [
    si * e * (jn + 3 * Hn * a + i * (7 * qn + 9 * Zn * a)) / be(n),
    yt(me(n) / si)
  ];
};
function Kp() {
  return Ci(Tc).scale(177.158);
}
function Nc(e, t) {
  var n = t * t, a = n * n;
  return [
    e * (0.8707 - 0.131979 * n + a * (-0.013791 + a * (3971e-6 * n - 1529e-6 * a))),
    t * (1.007226 + n * (0.015085 + a * (-0.044475 + 0.028874 * n - 5916e-6 * a)))
  ];
}
Nc.invert = function(e, t) {
  var n = t, a = 25, i;
  do {
    var l = n * n, o = l * l;
    n -= i = (n * (1.007226 + l * (0.015085 + o * (-0.044475 + 0.028874 * l - 5916e-6 * o))) - t) / (1.007226 + l * (0.015085 * 3 + o * (-0.044475 * 7 + 0.028874 * 9 * l - 5916e-6 * 11 * o)));
  } while (Se(i) > ae && --a > 0);
  return [
    e / (0.8707 + (l = n * n) * (-0.131979 + l * (-0.013791 + l * l * l * (3971e-6 - 1529e-6 * l)))),
    n
  ];
};
function Yp() {
  return Ci(Nc).scale(175.295);
}
function Mc(e, t) {
  return [be(t) * me(e), me(t)];
}
Mc.invert = jp(yt);
function Xp() {
  return Ci(Mc).scale(249.5).clipAngle(90 + ae);
}
function Kn() {
  return Kn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Kn.apply(this, arguments);
}
function Jp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Yt(e) {
  var t = e.graticule, n = e.lines, a = e.outline, i = e.extent, l = e.extentMajor, o = e.extentMinor, r = e.step, g = e.stepMajor, h = e.stepMinor, c = e.precision, d = e.children, u = Jp(e, ["graticule", "lines", "outline", "extent", "extentMajor", "extentMinor", "step", "stepMajor", "stepMinor", "precision", "children"]), p = vp();
  return i && p.extent(i), l && p.extentMajor(l), o && p.extentMinor(o), r && p.step(r), g && p.stepMajor(g), h && p.stepMinor(h), c && p.precision(c), d ? /* @__PURE__ */ ie.createElement(ie.Fragment, null, d({
    graticule: p
  })) : /* @__PURE__ */ ie.createElement(ro, {
    className: "visx-geo-graticule"
  }, t && /* @__PURE__ */ ie.createElement("path", Kn({
    d: t(p()),
    fill: "none",
    stroke: "black"
  }, u)), n && p.lines().map(function(f, S) {
    return /* @__PURE__ */ ie.createElement("g", {
      key: S
    }, /* @__PURE__ */ ie.createElement("path", Kn({
      d: n(f),
      fill: "none",
      stroke: "black"
    }, u)));
  }), a && /* @__PURE__ */ ie.createElement("path", Kn({
    d: a(p.outline()),
    fill: "none",
    stroke: "black"
  }, u)));
}
Yt.propTypes = {
  graticule: q.func,
  lines: q.func,
  outline: q.func,
  children: q.func,
  precision: q.number
};
function Dt() {
  return Dt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Dt.apply(this, arguments);
}
function Qp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var e2 = {
  orthographic: function() {
    return Xp();
  },
  albers: function() {
    return Lc();
  },
  albersUsa: function() {
    return Wp();
  },
  mercator: function() {
    return Hp();
  },
  naturalEarth: function() {
    return Yp();
  },
  equalEarth: function() {
    return Kp();
  }
};
function Si(e) {
  var t = e.data, n = e.projection, a = n === void 0 ? "mercator" : n, i = e.projectionFunc, l = e.clipAngle, o = e.clipExtent, r = e.scale, g = e.translate, h = e.center, c = e.rotate, d = e.precision, u = e.fitExtent, p = e.fitSize, f = e.centroid, S = e.graticule, m = e.graticuleLines, y = e.graticuleOutline, v = e.className, C = e.innerRef, w = e.pointRadius, N = e.children, P = Qp(e, ["data", "projection", "projectionFunc", "clipAngle", "clipExtent", "scale", "translate", "center", "rotate", "precision", "fitExtent", "fitSize", "centroid", "graticule", "graticuleLines", "graticuleOutline", "className", "innerRef", "pointRadius", "children"]), x = typeof a == "string" ? e2[a] : a, _ = x();
  l && _.clipAngle && _.clipAngle(l), o && _.clipExtent && _.clipExtent(o), r && _.scale && _.scale(r), g && _.translate && _.translate(g), h && _.center && _.center(h), c && _.rotate && _.rotate(c), d && _.precision && _.precision(d), u && _.fitExtent && _.fitExtent.apply(_, u), p && _.fitSize && _.fitSize.apply(_, p);
  var z = Rp().projection(_);
  w && z.pointRadius(w);
  var F = t.map(function(I, O) {
    return {
      feature: I,
      type: a,
      projection: _,
      index: O,
      centroid: z.centroid(I),
      path: z(I)
    };
  });
  return N ? /* @__PURE__ */ ie.createElement(ie.Fragment, null, N({
    path: z,
    features: F,
    projection: _
  })) : /* @__PURE__ */ ie.createElement(ro, {
    className: "visx-geo"
  }, S && !S.foreground && /* @__PURE__ */ ie.createElement(Yt, Dt({
    graticule: function(O) {
      return z(O) || "";
    }
  }, S)), m && !m.foreground && /* @__PURE__ */ ie.createElement(Yt, Dt({
    lines: function(O) {
      return z(O) || "";
    }
  }, m)), y && !y.foreground && /* @__PURE__ */ ie.createElement(Yt, Dt({
    outline: function(O) {
      return z(O) || "";
    }
  }, y)), F.map(function(I, O) {
    return /* @__PURE__ */ ie.createElement("g", {
      key: a + "-" + O
    }, /* @__PURE__ */ ie.createElement("path", Dt({
      className: It("visx-geo-" + a, v),
      d: I.path || "",
      ref: C && C(I, O)
    }, P)), f && f(I.centroid, I));
  }), i && i(_), S && S.foreground && /* @__PURE__ */ ie.createElement(Yt, Dt({
    graticule: function(O) {
      return z(O) || "";
    }
  }, S)), m && m.foreground && /* @__PURE__ */ ie.createElement(Yt, Dt({
    lines: function(O) {
      return z(O) || "";
    }
  }, m)), y && y.foreground && /* @__PURE__ */ ie.createElement(Yt, Dt({
    outline: function(O) {
      return z(O) || "";
    }
  }, y)));
}
Si.propTypes = {
  data: q.array.isRequired,
  projectionFunc: q.func,
  clipAngle: q.number,
  scale: q.number,
  precision: q.number,
  centroid: q.func,
  className: q.string,
  children: q.func,
  innerRef: q.func,
  pointRadius: q.number
};
function _r() {
  return _r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, _r.apply(this, arguments);
}
function t2(e) {
  return /* @__PURE__ */ ie.createElement(Si, _r({
    projection: "albersUsa"
  }, e));
}
function Ur() {
  return Ur = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ur.apply(this, arguments);
}
function ci(e) {
  return /* @__PURE__ */ ie.createElement(Si, Ur({
    projection: "mercator"
  }, e));
}
function Fl(e) {
  return /* @__PURE__ */ ie.createElement(Si, e);
}
const n2 = "Topology", a2 = [
  [
    [
      128628,
      58684
    ],
    [
      30,
      57
    ],
    [
      -17,
      63
    ],
    [
      30,
      47
    ],
    [
      44,
      -21
    ],
    [
      35,
      35
    ],
    [
      74,
      5
    ],
    [
      26,
      -46
    ],
    [
      170,
      8
    ],
    [
      9,
      -28
    ],
    [
      -140,
      -76
    ],
    [
      -178,
      -47
    ],
    [
      -83,
      3
    ]
  ],
  [
    [
      1608,
      280
    ],
    [
      113,
      17
    ],
    [
      5,
      -80
    ],
    [
      -39,
      13
    ],
    [
      -35,
      -44
    ],
    [
      -44,
      94
    ]
  ],
  [
    [
      1408,
      384
    ],
    [
      91,
      12
    ],
    [
      -17,
      -33
    ],
    [
      -57,
      -19
    ],
    [
      -17,
      40
    ]
  ],
  [
    [
      122,
      156
    ],
    [
      48,
      -77
    ]
  ],
  [
    [
      170,
      79
    ],
    [
      -65,
      -79
    ],
    [
      -48,
      74
    ],
    [
      -57,
      25
    ],
    [
      57,
      55
    ],
    [
      65,
      2
    ]
  ],
  [
    [
      128706,
      59939
    ],
    [
      0,
      -30
    ]
  ],
  [
    [
      128706,
      59909
    ],
    [
      26,
      -69
    ],
    [
      -69,
      -17
    ],
    [
      -66,
      36
    ],
    [
      -30,
      -32
    ],
    [
      -52,
      78
    ],
    [
      -105,
      -23
    ],
    [
      30,
      85
    ],
    [
      44,
      -36
    ],
    [
      52,
      41
    ],
    [
      83,
      -33
    ],
    [
      87,
      0
    ]
  ],
  [
    [
      384328,
      54018
    ],
    [
      17,
      44
    ],
    [
      9,
      159
    ],
    [
      39,
      -19
    ],
    [
      87,
      105
    ],
    [
      22,
      -34
    ],
    [
      -61,
      -126
    ],
    [
      17,
      -99
    ],
    [
      -56,
      11
    ],
    [
      0,
      -115
    ],
    [
      -53,
      28
    ],
    [
      -21,
      46
    ]
  ],
  [
    [
      128759,
      59886
    ],
    [
      56,
      61
    ],
    [
      48,
      -6
    ],
    [
      66,
      -44
    ],
    [
      -57,
      -7
    ],
    [
      4,
      -77
    ],
    [
      -39,
      32
    ],
    [
      -57,
      -8
    ],
    [
      -21,
      49
    ]
  ],
  [
    [
      128706,
      59939
    ],
    [
      57,
      10
    ],
    [
      -9,
      -37
    ],
    [
      -48,
      -3
    ]
  ],
  [
    [
      383033,
      50942
    ],
    [
      22,
      23
    ],
    [
      148,
      25
    ],
    [
      92,
      216
    ],
    [
      26,
      102
    ],
    [
      30,
      -17
    ],
    [
      31,
      -68
    ],
    [
      61,
      -17
    ],
    [
      -44,
      -139
    ],
    [
      -139,
      -171
    ],
    [
      -39,
      -69
    ],
    [
      -9,
      -175
    ],
    [
      -52,
      -88
    ],
    [
      -79,
      47
    ],
    [
      -30,
      159
    ],
    [
      35,
      79
    ],
    [
      -53,
      93
    ]
  ],
  [
    [
      384201,
      53806
    ],
    [
      18,
      70
    ],
    [
      56,
      85
    ],
    [
      22,
      -85
    ],
    [
      -17,
      -37
    ],
    [
      30,
      -63
    ],
    [
      -9,
      -96
    ],
    [
      -39,
      -46
    ],
    [
      -61,
      172
    ]
  ],
  [
    [
      384746,
      55614
    ],
    [
      44,
      68
    ],
    [
      17,
      -25
    ],
    [
      -35,
      -71
    ],
    [
      -26,
      28
    ]
  ],
  [
    [
      384485,
      58543
    ],
    [
      21,
      31
    ],
    [
      5,
      -77
    ],
    [
      -26,
      46
    ]
  ],
  [
    [
      384354,
      59393
    ],
    [
      61,
      84
    ],
    [
      0,
      93
    ],
    [
      48,
      0
    ],
    [
      0,
      -104
    ],
    [
      -40,
      -21
    ],
    [
      -43,
      -86
    ],
    [
      -26,
      34
    ]
  ],
  [
    [
      384267,
      60694
    ],
    [
      26,
      61
    ],
    [
      48,
      -44
    ],
    [
      -5,
      -80
    ],
    [
      -35,
      -36
    ],
    [
      -30,
      39
    ],
    [
      -4,
      60
    ]
  ],
  [
    [
      384262,
      56279
    ],
    [
      87,
      4
    ],
    [
      13,
      -57
    ],
    [
      -82,
      -13
    ],
    [
      -18,
      66
    ]
  ],
  [
    [
      122,
      156
    ],
    [
      87,
      108
    ],
    [
      18,
      -31
    ],
    [
      117,
      3
    ],
    [
      18,
      -69
    ],
    [
      -31,
      20
    ],
    [
      -126,
      -47
    ],
    [
      -35,
      -61
    ]
  ],
  [
    [
      383639,
      52173
    ],
    [
      48,
      80
    ],
    [
      92,
      55
    ],
    [
      65,
      -14
    ],
    [
      -9,
      -55
    ],
    [
      -52,
      -20
    ],
    [
      -35,
      -62
    ],
    [
      -48,
      -9
    ],
    [
      -22,
      36
    ],
    [
      -39,
      -11
    ]
  ],
  [
    [
      113802,
      97593
    ],
    [
      91,
      110
    ],
    [
      48,
      -53
    ],
    [
      113,
      -133
    ],
    [
      -156,
      -185
    ],
    [
      -5,
      88
    ],
    [
      5,
      58
    ],
    [
      -96,
      115
    ]
  ],
  [
    [
      126645,
      59224
    ],
    [
      -48,
      -26
    ],
    [
      -61,
      38
    ],
    [
      -52,
      -30
    ],
    [
      -31,
      21
    ],
    [
      -74,
      37
    ],
    [
      -96,
      -88
    ],
    [
      -17,
      10
    ],
    [
      -9,
      -2
    ],
    [
      -65,
      -12
    ],
    [
      -18,
      -38
    ],
    [
      -65,
      47
    ],
    [
      -4,
      27
    ],
    [
      -92,
      12
    ],
    [
      -61,
      -52
    ],
    [
      -70,
      32
    ],
    [
      -52,
      -19
    ],
    [
      4,
      83
    ],
    [
      44,
      49
    ],
    [
      -48,
      19
    ],
    [
      13,
      102
    ],
    [
      22,
      24
    ],
    [
      4,
      118
    ],
    [
      31,
      49
    ],
    [
      -40,
      132
    ],
    [
      -47,
      55
    ],
    [
      -57,
      119
    ],
    [
      39,
      24
    ],
    [
      96,
      74
    ],
    [
      -9,
      115
    ],
    [
      31,
      50
    ],
    [
      48,
      16
    ],
    [
      100,
      -7
    ],
    [
      78,
      -39
    ],
    [
      66,
      -9
    ],
    [
      78,
      6
    ],
    [
      87,
      -6
    ],
    [
      70,
      -22
    ],
    [
      105,
      40
    ],
    [
      43,
      -17
    ],
    [
      66,
      -6
    ],
    [
      78,
      -24
    ],
    [
      35,
      32
    ],
    [
      109,
      0
    ],
    [
      43,
      -21
    ],
    [
      53,
      10
    ],
    [
      87,
      -25
    ],
    [
      48,
      -24
    ],
    [
      39,
      35
    ],
    [
      109,
      -41
    ],
    [
      57,
      14
    ],
    [
      104,
      -13
    ],
    [
      92,
      -50
    ],
    [
      43,
      -2
    ],
    [
      53,
      -69
    ],
    [
      100,
      -39
    ],
    [
      52,
      44
    ],
    [
      -9,
      -72
    ],
    [
      14,
      -109
    ],
    [
      56,
      -71
    ],
    [
      -30,
      -67
    ],
    [
      -48,
      29
    ],
    [
      13,
      -44
    ],
    [
      -39,
      4
    ],
    [
      -35,
      -51
    ],
    [
      -35,
      21
    ],
    [
      -26,
      -32
    ],
    [
      -44,
      -80
    ],
    [
      -26,
      -110
    ],
    [
      -39,
      -30
    ],
    [
      -26,
      -75
    ],
    [
      -74,
      -57
    ],
    [
      -79,
      -24
    ],
    [
      -52,
      19
    ],
    [
      -31,
      -42
    ],
    [
      -30,
      20
    ],
    [
      -105,
      -67
    ],
    [
      -43,
      14
    ],
    [
      -31,
      -40
    ],
    [
      -30,
      -3
    ],
    [
      -27,
      57
    ],
    [
      -91,
      58
    ],
    [
      -57,
      -69
    ],
    [
      -78,
      82
    ],
    [
      -48,
      12
    ],
    [
      -61,
      -26
    ]
  ],
  [
    [
      128105,
      59906
    ],
    [
      48,
      -33
    ],
    [
      6,
      2
    ],
    [
      46,
      18
    ],
    [
      39,
      -56
    ],
    [
      -74,
      -57
    ],
    [
      -11,
      7
    ],
    [
      -41,
      23
    ],
    [
      -13,
      96
    ]
  ],
  [
    [
      124954,
      59472
    ],
    [
      87,
      19
    ],
    [
      22,
      -68
    ],
    [
      -65,
      -60
    ],
    [
      -53,
      51
    ],
    [
      9,
      58
    ]
  ],
  [
    [
      127817,
      59480
    ],
    [
      214,
      85
    ],
    [
      152,
      -51
    ],
    [
      -78,
      -40
    ],
    [
      -92,
      -11
    ],
    [
      -48,
      -38
    ],
    [
      -34,
      19
    ],
    [
      -75,
      -27
    ],
    [
      -39,
      63
    ]
  ],
  [
    [
      127795,
      59986
    ],
    [
      31,
      -22
    ],
    [
      0,
      -69
    ],
    [
      -31,
      91
    ]
  ]
], i2 = {
  scale: [
    823601132486181e-18,
    546229125192084e-18
  ],
  translate: [
    -170.84530299432993,
    -14.373864584355845
  ]
}, r2 = {
  counties: {
    type: "GeometryCollection",
    geometries: [
      {
        arcs: [
          [
            [
              1
            ]
          ],
          [
            [
              2
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          name: "Manu'a"
        },
        id: "60020"
      },
      {
        arcs: [
          [
            3,
            4
          ]
        ],
        type: "Polygon",
        properties: {
          name: "Western"
        },
        id: "60050"
      },
      {
        arcs: [
          [
            5,
            6
          ]
        ],
        type: "Polygon",
        properties: {
          name: "St. Thomas"
        },
        id: "78030"
      },
      {
        arcs: [
          [
            7
          ]
        ],
        type: "Polygon",
        properties: {
          name: "Saipan"
        },
        id: "69110"
      },
      {
        arcs: [
          [
            [
              8
            ]
          ],
          [
            [
              9,
              -6
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          name: "St. John"
        },
        id: "78020"
      },
      {
        arcs: [
          [
            10
          ]
        ],
        type: "Polygon",
        properties: {
          name: "Guam"
        },
        id: "66010"
      },
      {
        arcs: [
          [
            11
          ]
        ],
        type: "Polygon",
        properties: {
          name: "Tinian"
        },
        id: "69120"
      },
      {
        arcs: [
          [
            [
              12
            ]
          ],
          [
            [
              13
            ]
          ],
          [
            [
              14
            ]
          ],
          [
            [
              15
            ]
          ],
          [
            [
              16
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          name: "Northern Islands"
        },
        id: "69085"
      },
      {
        arcs: [
          [
            -4,
            17
          ]
        ],
        type: "Polygon",
        properties: {
          name: "Eastern"
        },
        id: "60010"
      },
      {
        arcs: [
          [
            18
          ]
        ],
        type: "Polygon",
        properties: {
          name: "Rota"
        },
        id: "69100"
      },
      {
        arcs: [
          [
            0
          ]
        ],
        type: "Polygon",
        properties: {
          name: "St. Croix"
        },
        id: "78010"
      },
      {
        arcs: [
          [
            0
          ]
        ],
        type: "Polygon",
        properties: {
          name: "District of Columbia"
        },
        id: "11"
      }
    ]
  },
  states: {
    type: "GeometryCollection",
    geometries: [
      {
        arcs: [
          [
            [
              20
            ]
          ],
          [
            [
              21
            ]
          ],
          [
            [
              22
            ]
          ],
          [
            [
              23
            ]
          ],
          [
            [
              24
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          name: "Puerto Rico"
        },
        id: "72"
      },
      {
        arcs: [
          [
            [
              1
            ]
          ],
          [
            [
              2
            ]
          ],
          [
            [
              4,
              17
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          name: "American Samoa"
        },
        id: "60"
      },
      {
        arcs: [
          [
            [
              6,
              9
            ]
          ],
          [
            [
              0
            ]
          ],
          [
            [
              8
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          name: "United States Virgin Islands"
        },
        id: "78"
      },
      {
        arcs: [
          [
            [
              7
            ]
          ],
          [
            [
              11
            ]
          ],
          [
            [
              12
            ]
          ],
          [
            [
              13
            ]
          ],
          [
            [
              14
            ]
          ],
          [
            [
              15
            ]
          ],
          [
            [
              16
            ]
          ],
          [
            [
              18
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          name: "Commonwealth of the Northern Mariana Islands"
        },
        id: "69"
      },
      {
        arcs: [
          [
            10
          ]
        ],
        type: "Polygon",
        properties: {
          name: "Guam"
        },
        id: "66"
      }
    ]
  }
}, Gl = {
  type: n2,
  arcs: a2,
  transform: i2,
  objects: r2
}, St = (e) => `https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/cb_${e}_us_county_20m.json`, o2 = (e) => new Promise((t, n) => {
  const a = async (l) => {
    l.status !== 200 ? l = await import(
      /* webpackChunkName: "cb_2019_us_county_20m" */
      "./storybook-cb_2019_us_county_20m-548642e6.es.js"
    ) : l = await l.json();
    const o = [l, Gl].flatMap((h) => Nt(h, h.objects.counties).features), r = [l, Gl].flatMap((h) => Nt(h, h.objects.states).features);
    t({
      year: e || "default",
      fulljson: l,
      counties: o,
      states: r
    });
  }, i = parseInt(e);
  if (isNaN(i))
    fetch(St(2019)).then(a);
  else if (i > 2022)
    fetch(St(2022)).then(a);
  else if (i < 2013)
    fetch(St(2013)).then(a);
  else
    switch (i) {
      case 2022:
        fetch(St(2022)).then(a);
        break;
      case 2021:
        fetch(St(2021)).then(a);
        break;
      case 2020:
        fetch(St(2020)).then(a);
        break;
      case 2018:
      case 2017:
      case 2016:
      case 2015:
        fetch(St(2015)).then(a);
        break;
      case 2014:
        fetch(St(2014)).then(a);
        break;
      case 2013:
        fetch(St(2013)).then(a);
        break;
      default:
        fetch(St(2019)).then(a);
        break;
    }
}), Ec = (e, t) => {
  let n = e.general.countyCensusYear;
  if (e.general.filterControlsCountyYear && t && t.length > 0) {
    let a = t.filter((i) => i.columnName === e.general.filterControlsCountyYear);
    a.length > 0 && a[0].active && (n = a[0].active);
  }
  return n || "default";
}, l2 = (e, t, n) => {
  let a = Ec(t, n);
  return (e == null ? void 0 : e.year) && (!a || a === (e == null ? void 0 : e.year));
}, s2 = (e) => Object.keys(e).filter((a) => a !== "fromHash").length > 0, xc = (e, t) => {
  var n, a, i, l;
  return !e.general.filterControlsStatePicked || !t ? (a = (n = e == null ? void 0 : e.general) == null ? void 0 : n.statePicked) == null ? void 0 : a.stateName : s2(t) ? ((l = (i = Object.values(t)) == null ? void 0 : i.map((g) => g[e.general.filterControlsStatePicked])) == null ? void 0 : l[0]) || e.general.statePicked.stateName || "Alabama" : null;
}, ln = () => {
  const { config: e, setConfig: t, setSharedFilter: n, customNavigationHandler: a } = E.useContext(fe), i = E.useContext(it);
  return { geoClickHandler: (o, r) => {
    if (n && n(e.uid, r), ["world-geocode"].includes(e.general.type)) {
      const g = r[e.columns.latitude.name], h = r[e.columns.longitude.name];
      t({
        ...e,
        mapPosition: { coordinates: [h, g], zoom: 3 }
      });
    }
    if (window.matchMedia("(any-hover: none)").matches || e.tooltips.appearanceType === "click") {
      i({ type: "SET_MODAL", payload: {
        geoName: o,
        keyedData: r
      } });
      return;
    }
    e.columns.navigate && r[e.columns.navigate.name] && Oa(e.general.navigationTarget, r[e.columns.navigate.name], a);
  } };
}, uo = ({ setSharedFilterValue: e, isFilterValueSupported: t, tooltipId: n, projection: a }) => {
  const {
    config: i,
    topoData: l,
    data: o,
    position: r,
    legendMemo: g,
    legendSpecialClassLastMemo: h,
    runtimeLegend: c
  } = E.useContext(fe), { geoClickHandler: d } = ln(), { applyTooltipsToGeo: u } = Ht(), { geoColumnName: p, latitudeColumnName: f, longitudeColumnName: S, primaryColumnName: m } = Jr(i.columns), { additionalCityStyles: y } = i.visual || [];
  if (!a)
    return;
  const v = o ? Object.keys(o).reduce((N, P) => {
    const x = o[P];
    return N[x[p]] = x, N;
  }, {}) : {};
  if (i.general.type === "bubble") {
    const N = Math.max(
      ...o ? Object.keys(o).map((x) => o[x][i.columns.primary.name]) : [0]
    );
    if (!Object.values(o).sort(
      (x, _) => x[m] < _[m] ? 1 : -1
    ))
      return;
    var C = Cs().domain([1, N]).range([i.visual.minBubbleSize, i.visual.maxBubbleSize]);
  }
  const w = Object.keys(v).filter((N) => N !== void 0 || o[N] !== void 0);
  return w ? w.map((N, P) => {
    var B;
    let x;
    o && Object.keys(o).forEach((G) => {
      N === o[G][i.columns.geo.name] && (x = o[G]);
    }), x || (x = o ? o[N] : void 0);
    const _ = Jn(Ie(N)), z = x ? xe(x, i, c, g, h) : o[N] ? xe(o[N], i, c, g, h) : !1;
    if (z === !1)
      return !0;
    const F = u(_, x || o[N]), I = i.visual.geoCodeCircleSize || 8, O = {
      fillOpacity: i.general.type === "bubble" ? 0.4 : 1
    }, U = Wt(i), k = /* @__PURE__ */ s(
      "path",
      {
        className: "marker",
        d: "M0,0l-8.8-17.7C-12.1-24.3-7.4-32,0-32h0c7.4,0,12.1,7.7,8.8,14.3L0,0z",
        title: "Select for more information",
        onClick: () => d(_, x),
        "data-tooltip-id": `tooltip__${n}`,
        "data-tooltip-html": F,
        transform: `scale(${I / 7.5})`,
        stroke: U,
        strokeWidth: "2px",
        tabIndex: "-1",
        ...O
      }
    );
    let b = "";
    !(x != null && x[S]) && !(x != null && x[f]) && N && An[N.toUpperCase()] && (b = `translate(${a(An[N.toUpperCase()])})`);
    let T = !1;
    if (x != null && x[S] && (x != null && x[f])) {
      let G = [Number(x == null ? void 0 : x[S]), Number(x == null ? void 0 : x[f])];
      b = `translate(${a(G)})`, T = !0;
    }
    if (x != null && x[S] && (x != null && x[f]) && i.general.geoType === "single-state") {
      const G = xc(i, o), W = (B = l == null ? void 0 : l.states) == null ? void 0 : B.find((X) => X.properties.name === G), H = a.fitExtent(
        [
          [ze, ze],
          [_e - ze, Ue - ze]
        ],
        W
      );
      let Z = [Number(x == null ? void 0 : x[S]), Number(x == null ? void 0 : x[f])];
      b = `translate(${H(Z)}) scale(${i.visual.geoCodeCircleSize / (r.zoom > 1 ? r.zoom : 1)})`, T = !0;
    }
    if (!b)
      return;
    const D = {
      fill: z[0],
      opacity: !t || t && N === e ? 1 : 0.5,
      stroke: e && t && o[N] && o[N][i.columns.geo.name] === e ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.4)",
      "&:hover": {
        fill: z[1],
        outline: 0
      },
      "&:active": {
        fill: z[2],
        outline: 0
      },
      cursor: T ? "pointer" : "default"
    };
    (i.columns.navigate && (x != null && x[i.columns.navigate.name]) && x[i.columns.navigate.name] || i.tooltips.appearanceType === "click") && (D.cursor = "pointer");
    const A = {
      onClick: () => d(_, x),
      size: i.general.type === "bubble" ? C(x[m]) : I * 30,
      title: "Select for more information",
      "data-tooltip-id": `tooltip__${n}`,
      "data-tooltip-html": F,
      stroke: U,
      strokeWidth: "2px",
      tabIndex: -1,
      ...O
    }, $ = {
      circle: /* @__PURE__ */ s(ss, { ...A }),
      pin: k,
      square: /* @__PURE__ */ s(cs, { ...A }),
      diamond: /* @__PURE__ */ s(us, { ...A }),
      star: /* @__PURE__ */ s(Yr, { ...A }),
      triangle: /* @__PURE__ */ s(ds, { ...A })
    }, V = Object.values(o).filter((G) => y == null ? void 0 : y.some((W) => String(G[W.column]) === String(W.value))).map((G) => ({ ...y.find((H) => String(G[H.column]) === String(H.value)), ...G })).find((G) => Object.keys(G).find((W) => G[W] === N));
    if (V !== void 0 && V.shape) {
      if (!(x != null && x[S]) && !(x != null && x[f]) && N && An[N.toUpperCase()]) {
        let G = `translate(${a(An[N.toUpperCase()])})`;
        return /* @__PURE__ */ s("g", { transform: G, style: D, className: "geo-point", tabIndex: -1, children: $[V.shape.toLowerCase()] }, P);
      }
      if (x != null && x[S] && (x != null && x[f])) {
        const G = [Number(x == null ? void 0 : x[S]), Number(x == null ? void 0 : x[f])];
        let W = `translate(${a(G)})`;
        return /* @__PURE__ */ s("g", { transform: W, style: D, className: "geo-point", tabIndex: -1, children: $[V.shape.toLowerCase()] }, P);
      }
    }
    if ((z == null ? void 0 : z[0]) !== "#000000")
      return /* @__PURE__ */ s("g", { transform: b, style: D, className: "geo-point", tabIndex: -1, children: $[i.visual.cityStyle.toLowerCase()] }, P);
  }) : !0;
}, Bl = {
  AFG: [33.93911, 67.709953],
  ALA: [60.1785, 19.9156],
  ARG: [-38.416097, -63.616672],
  ARM: [40.069099, 45.038189],
  ABW: [12.52111, -69.968338],
  AUS: [-25.27, 133.77],
  AUT: [47.516231, 14.550072],
  AZE: [40.143105, 47.576927],
  BHS: [25.03428, -77.39628],
  BHR: [25.930414, 50.637772],
  BGD: [23.684994, 90.356331],
  BRB: [13.193887, -59.543198],
  BLR: [53.709807, 27.953389],
  BEL: [50.503887, 4.469936],
  BLZ: [17.189877, -88.49765],
  BEN: [9.30769, 2.315834],
  BTN: [27.514162, 90.433601],
  BRA: [-14.235, -51.9253],
  BGR: [42.733883, 25.48583],
  BFA: [12.238333, -1.561593],
  CAN: [56.1304, -106.3468],
  CHL: [-35.6751, -71.543],
  COL: [4.5709, -74.2973],
  CRI: [9.748917, -83.753428],
  HRV: [45.1, 15.2],
  CUB: [21.521757, -77.781167],
  CZE: [49.8175, 15.4729],
  DNK: [56.2639, 9.5018],
  EST: [58.5953, 25.0136],
  FIN: [61.9241, 25.7482],
  FRA: [46.2276, 2.2137],
  GEO: [42.3154, 43.3569],
  DEU: [51.1657, 10.4515],
  GIB: [36.1408, -5.3536],
  GRC: [39.0742, 21.8243],
  HUN: [47.1625, 19.5033],
  ISL: [64.9631, -19.0208],
  IRL: [53.1424, -7.6921],
  ISR: [31.0461, 34.8516],
  ITA: [41.8719, 12.5674],
  LVA: [56.8796, 24.6032],
  LBN: [33.8547, 35.8623],
  LUX: [49.8153, 6.1296],
  MLT: [35.9375, 14.3754],
  MEX: [23.6345, -102.5528],
  MAR: [31.7917, -7.0926],
  NAM: [-22.95764, 18.49041],
  NRU: [-0.522778, 166.931503],
  NPL: [28.394857, 84.124008],
  NLD: [52.1326, 5.2913],
  NZL: [-40.900557, 174.885971],
  NIC: [12.865416, -85.207229],
  NER: [17.607789, 8.081666],
  NGA: [9.081999, 8.675277],
  NOR: [60.472024, 8.468946],
  OMN: [21.512583, 55.923255],
  PAK: [30.375321, 69.345116],
  PLW: [7.51498, 134.58252],
  PAN: [8.537981, -80.782127],
  PNG: [-6.314993, 143.95555],
  PRY: [-23.442503, -58.443832],
  PER: [-9.189967, -75.015152],
  PHL: [12.879721, 121.774017],
  POL: [51.919438, 19.145136],
  PRT: [39.399872, -8.224454],
  QAT: [25.354826, 51.183884],
  ROU: [45.943161, 24.96676],
  RWA: [-1.940278, 29.873888],
  LCA: [13.909444, -60.978893],
  WSM: [-13.759029, -172.104629],
  SMR: [43.94236, 12.457777],
  SAU: [23.885942, 45.079162],
  SEN: [14.497401, -14.452362],
  SRB: [44.016521, 21.005859],
  SYC: [-4.679574, 55.491977],
  SLE: [8.460555, -11.779889],
  SGP: [1.352083, 103.819836],
  SVN: [46.1512, 14.9955],
  ZAF: [-30.5595, 22.9375],
  KOR: [35.9078, 127.7669],
  ESP: [40.4637, -3.7492],
  SWE: [60.1282, 18.6435],
  CHE: [46.8182, 8.2275],
  TWN: [23.68579, 120.89749],
  UGA: [1.373333, 32.290275],
  UKR: [48.379433, 31.16558],
  ARE: [23.424076, 53.847818],
  GBR: [55.3781, -3.436],
  USA: [37.0902, -95.7129],
  VEN: [6.4238, -66.14542],
  ALB: [41.1533, 20.1683],
  DZA: [28.0339, 1.6596],
  ASM: [-14.271, -170.1322],
  AND: [42.5063, 1.5218],
  AGO: [-11.2027, 17.8739],
  AIA: [18.2206, -63.0686],
  ATG: [17.0608, -61.7964],
  BMU: [32.2995, -64.7903],
  BOL: [-16.2902, -63.5887],
  BES: [12.2019, -68.2624],
  BIH: [43.9159, 17.6791],
  BWA: [-22.3285, 24.6849],
  BVT: [-54.4208, 3.3464],
  IOT: [-6.3432, 71.8765],
  BRN: [4.5353, 114.7277],
  MMR: [21.9162, 95.956],
  BDI: [-3.3731, 29.9189],
  CPV: [16.5388, -23.0418],
  KHM: [12.5657, 104.991],
  CMR: [7.3697, 12.3547],
  CYM: [19.3133, -81.2546],
  CAF: [6.6111, 20.9394],
  TCD: [15.4542, 18.7322],
  CHN: [35.8617, 104.1954],
  CXR: [-10.4475, 105.6904],
  CCK: [-12.1642, 96.871],
  COM: [-11.6455, 43.3333],
  COD: [-4.0383, 21.7587],
  COK: [-21.2367, 159.7777],
  CIV: [7.5401, -5.5471],
  CUW: [12.1696, -68.9901],
  CYP: [35.095192, 33.20343],
  COG: [-0.430179, 15.967529],
  DJI: [11.8251, 42.5903],
  DMA: [15.4151, -61.3711],
  DOM: [18.7357, -70.1627],
  ECU: [-1.8312, -78.1834],
  EGY: [26.8206, 30.8025],
  SLV: [13.7942, -88.8965],
  GNQ: [1.6508, 10.2679],
  ERI: [15.1794, 39.7823],
  SWZ: [-26.5225, 31.465],
  ETH: [9.1451, 40.4897],
  FLK: [-51.7963, -59.5236],
  FRO: [56.2639, 9.5018],
  FJI: [-17.42, 178.3],
  GUF: [3.9339, -53.1258],
  PYF: [-17.6797, -149.4068],
  ATF: [-49.2804, 69.3486],
  GAB: [-0.8037, 11.6094],
  GMB: [13.4432, -15.3101],
  GHA: [7.9465, -1.0232],
  GRL: [71.7069, -42.6043],
  GRD: [12.1165, -61.6791],
  GLP: [16.2651, -61.5511],
  GUM: [13.4443, 144.7937],
  GTM: [15.7835, -90.2308],
  GGY: [49.4482, -2.5895],
  GIN: [9.9456, -9.6966],
  GNB: [11.8037, -15.1804],
  GUY: [4.8604, -58.9302],
  HTI: [18.9712, -72.2852],
  HMD: [-53.0818, 73.5042],
  HND: [15.2001, -86.2419],
  HKG: [22.3193, 114.1694],
  IND: [20.5937, 78.9629],
  IDN: [-0.7893, 113.9213],
  IRN: [32.4279, 53.688],
  IRQ: [33.2232, 43.6793],
  IMN: [54.2361, -4.5481],
  JAM: [18.1096, -77.2975],
  JPN: [36.2048, 138.2529],
  JEY: [49.2138, -2.1358],
  JOR: [30.5852, 36.2384],
  KAZ: [48.0196, 66.9237],
  KEN: [-0.0236, 37.9062],
  KIR: [-3.3704, 168.734],
  KOS: [42.6026, 20.903],
  KWT: [29.3117, 47.4818],
  KGZ: [41.2044, 74.7661],
  LAO: [19.8563, 102.4955],
  LSO: [-29.6101, 28.2336],
  LBR: [6.4281, -9.4295],
  LBY: [26.3351, 17.2283],
  LIE: [47.166, 9.5554],
  LTU: [55.1694, 23.8813],
  MAC: [22.1987, 113.5439],
  MDG: [-18.7669, 46.8691],
  MWI: [-13.2543, 34.3015],
  MYS: [4.2105, 101.9758],
  MDV: [3.2028, 73.2207],
  MLI: [17.5707, -3.9962],
  MHL: [7.1315, 171.1845],
  MTQ: [14.6415, -61.0242],
  MRT: [21.0079, -10.9408],
  MUS: [-20.3484, 57.5522],
  MYT: [-12.8275, 45.1662],
  FSM: [7.4256, 150.5508],
  MDA: [47.4116, 28.3699],
  MCO: [43.7384, 7.4246],
  MNG: [46.8625, 103.8467],
  MNE: [42.7087, 19.3744],
  MSR: [16.7425, -62.1874],
  MOZ: [-18.6657, 35.5296],
  NCL: [-20.9043, 165.618],
  NIU: [-19.0544, -169.8672],
  NFK: [-29.0408, 167.9547],
  PRK: [40.3399, 127.5101],
  MKD: [41.6086, 21.7453],
  MNP: [15.0979, 145.6739],
  PCN: [-24.3768, -128.3242],
  PRI: [18.2208, -66.5901],
  REU: [-21.1151, 55.5364],
  RUS: [61.524, 105.3188],
  BLM: [17.9001, -62.8333],
  SHN: [-15.9651, -5.7089],
  KNA: [17.3578, -62.783],
  SPM: [46.8852, -56.3159],
  VCT: [12.9843, -61.2872],
  STP: [0.1864, 6.6131],
  SXM: [18.0425, -63.0548],
  SVK: [48.669, 19.699],
  SLB: [-9.6457, 160.1562],
  SOM: [9.4117, 46.8253],
  SGS: [-54.4296, -36.5879],
  SDS: [6.877, 31.307],
  LKA: [7.8731, 80.7718],
  MAF: [18.0708, -63.0501],
  SDN: [12.8628, 30.2176],
  SUR: [3.9193, -56.0278],
  SJM: [77.5536, 23.6703],
  SYR: [34.8021, 38.9968],
  TJK: [38.861, 71.2761],
  TZA: [-6.369, 34.8888],
  THA: [15.8701, 100.9925],
  TLS: [-8.8742, 125.7275],
  TGO: [8.6195, 0.8248],
  TKL: [-9.2002, -171.8484],
  TON: [-21.179, -175.1982],
  TTO: [10.6918, -61.2225],
  TUN: [33.8869, 9.5375],
  TUR: [38.9637, 35.2433],
  TKM: [38.9697, 59.5563],
  TCA: [21.694, -71.7979],
  TUV: [-7.1095, 177.6493],
  UMI: [19.2823, 166.647],
  URY: [-32.5228, -55.7658],
  UZB: [41.3775, 64.5853],
  VUT: [-15.3767, 166.9592],
  VAT: [41.9029, 12.4534],
  VNM: [14.0583, 108.2772],
  VGB: [18.4207, -64.6401],
  VIR: [18.3358, -64.8963],
  WLF: [-14.2938, -178.1165],
  SAH: [24.2155, -12.8858],
  YEM: [15.5527, 48.5164],
  ZMB: [-13.1339, 27.8493],
  ZWE: [-19.0154, 29.1549]
}, c2 = {
  "US-AK": { Abbreviation: "AK", Name: "Alaska", Latitude: "63.588753", Longitude: "-154.493062" },
  "US-AL": { Abbreviation: "AL", Name: "Alabama", Latitude: "32.318231", Longitude: "-86.902298" },
  "US-AR": { Abbreviation: "AR", Name: "Arkansas", Latitude: "35.20105", Longitude: "-91.831833" },
  "US-AZ": { Abbreviation: "AZ", Name: "Arizona", Latitude: "34.048928", Longitude: "-111.093731" },
  "US-CA": { Abbreviation: "CA", Name: "California", Latitude: "36.778261", Longitude: "-119.417932" },
  "US-CO": { Abbreviation: "CO", Name: "Colorado", Latitude: "39.550051", Longitude: "-105.782067" },
  "US-CT": { Abbreviation: "CT", Name: "Connecticut", Latitude: "41.603221", Longitude: "-73.087749" },
  "US-DC": { Abbreviation: "DC", Name: "District of Columbia", Latitude: "38.905985", Longitude: "-77.033418" },
  "US-DE": { Abbreviation: "DE", Name: "Delaware", Latitude: "38.910832", Longitude: "-75.52767" },
  "US-FL": { Abbreviation: "FL", Name: "Florida", Latitude: "27.664827", Longitude: "-81.515754" },
  "US-GA": { Abbreviation: "GA", Name: "Georgia", Latitude: "32.157435", Longitude: "-82.907123" },
  "US-HI": { Abbreviation: "HI", Name: "Hawaii", Latitude: "19.898682", Longitude: "-155.665857" },
  "US-IA": { Abbreviation: "IA", Name: "Iowa", Latitude: "41.878003", Longitude: "-93.097702" },
  "US-ID": { Abbreviation: "ID", Name: "Idaho", Latitude: "44.068202", Longitude: "-114.742041" },
  "US-IL": { Abbreviation: "IL", Name: "Illinois", Latitude: "40.633125", Longitude: "-89.398528" },
  "US-IN": { Abbreviation: "IN", Name: "Indiana", Latitude: "40.551217", Longitude: "-85.602364" },
  "US-KS": { Abbreviation: "KS", Name: "Kansas", Latitude: "39.011902", Longitude: "-98.484246" },
  "US-KY": { Abbreviation: "KY", Name: "Kentucky", Latitude: "37.839333", Longitude: "-84.270018" },
  "US-LA": { Abbreviation: "LA", Name: "Louisiana", Latitude: "31.244823", Longitude: "-92.145024" },
  "US-MA": { Abbreviation: "MA", Name: "Massachusetts", Latitude: "42.407211", Longitude: "-71.382437" },
  "US-MD": { Abbreviation: "MD", Name: "Maryland", Latitude: "39.045755", Longitude: "-76.641271" },
  "US-ME": { Abbreviation: "ME", Name: "Maine", Latitude: "45.253783", Longitude: "-69.445469" },
  "US-MI": { Abbreviation: "MI", Name: "Michigan", Latitude: "44.314844", Longitude: "-85.602364" },
  "US-MN": { Abbreviation: "MN", Name: "Minnesota", Latitude: "46.729553", Longitude: "-94.6859" },
  "US-MO": { Abbreviation: "MO", Name: "Missouri", Latitude: "37.964253", Longitude: "-91.831833" },
  "US-MS": { Abbreviation: "MS", Name: "Mississippi", Latitude: "32.354668", Longitude: "-89.398528" },
  "US-MT": { Abbreviation: "MT", Name: "Montana", Latitude: "46.879682", Longitude: "-110.362566" },
  "US-NC": { Abbreviation: "NC", Name: "North Carolina", Latitude: "35.759573", Longitude: "-79.0193" },
  "US-ND": { Abbreviation: "ND", Name: "North Dakota", Latitude: "47.551493", Longitude: "-101.002012" },
  "US-NE": { Abbreviation: "NE", Name: "Nebraska", Latitude: "41.492537", Longitude: "-99.901813" },
  "US-NH": { Abbreviation: "NH", Name: "New Hampshire", Latitude: "43.193852", Longitude: "-71.572395" },
  "US-NJ": { Abbreviation: "NJ", Name: "New Jersey", Latitude: "40.058324", Longitude: "-74.405661" },
  "US-NM": { Abbreviation: "NM", Name: "New Mexico", Latitude: "34.97273", Longitude: "-105.032363" },
  "US-NV": { Abbreviation: "NV", Name: "Nevada", Latitude: "38.80261", Longitude: "-116.419389" },
  "US-NY": { Abbreviation: "NY", Name: "New York", Latitude: "43.299428", Longitude: "-74.217933" },
  "US-OH": { Abbreviation: "OH", Name: "Ohio", Latitude: "40.417287", Longitude: "-82.907123" },
  "US-OK": { Abbreviation: "OK", Name: "Oklahoma", Latitude: "35.007752", Longitude: "-97.092877" },
  "US-OR": { Abbreviation: "OR", Name: "Oregon", Latitude: "43.804133", Longitude: "-120.554201" },
  "US-PA": { Abbreviation: "PA", Name: "Pennsylvania", Latitude: "41.203322", Longitude: "-77.194525" },
  "US-PR": { Abbreviation: "PR", Name: "Puerto Rico", Latitude: "18.220833", Longitude: "-66.590149" },
  "US-RI": { Abbreviation: "RI", Name: "Rhode Island", Latitude: "41.580095", Longitude: "-71.477429" },
  "US-SC": { Abbreviation: "SC", Name: "South Carolina", Latitude: "33.836081", Longitude: "-81.163725" },
  "US-SD": { Abbreviation: "SD", Name: "South Dakota", Latitude: "43.969515", Longitude: "-99.901813" },
  "US-TN": { Abbreviation: "TN", Name: "Tennessee", Latitude: "35.517491", Longitude: "-86.580447" },
  "US-TX": { Abbreviation: "TX", Name: "Texas", Latitude: "31.968599", Longitude: "-99.901813" },
  "US-UT": { Abbreviation: "UT", Name: "Utah", Latitude: "39.32098", Longitude: "-111.093731" },
  "US-VA": { Abbreviation: "VA", Name: "Virginia", Latitude: "37.431573", Longitude: "-78.656894" },
  "US-VT": { Abbreviation: "VT", Name: "Vermont", Latitude: "44.558803", Longitude: "-72.577841" },
  "US-WA": { Abbreviation: "WA", Name: "Washington", Latitude: "47.751074", Longitude: "-120.740139" },
  "US-WI": { Abbreviation: "WI", Name: "Wisconsin", Latitude: "43.78444", Longitude: "-88.787868" },
  "US-WV": { Abbreviation: "WV", Name: "West Virginia", Latitude: "38.597626", Longitude: "-80.454903" },
  "US-WY": { Abbreviation: "WY", Name: "Wyoming", Latitude: "43.075968", Longitude: "-107.290284" }
}, Pc = ({ customProjection: e }) => {
  const { config: t, tooltipId: n, legendMemo: a, legendSpecialClassLastMemo: i, setRuntimeData: l, runtimeData: o, runtimeLegend: r } = E.useContext(fe), { columns: g, data: h, general: c, visual: d } = t, { geoType: u, allowMapZoom: p } = c, { minBubbleSize: f, maxBubbleSize: S, showBubbleZeros: m, extraBubbleBorder: y } = d, v = m ? 0 : 1, C = 10, w = E.useContext(it), { geoClickHandler: N } = ln(), { applyTooltipsToGeo: P } = Ht(), { primaryColumnName: x, geoColumnName: _ } = Jr(g), z = Math.max(...h.map((b) => b[x])), F = Cs().domain([v, z]).range([f, S]), O = (() => {
    try {
      if (u === "world")
        return tc();
      if (u === "us")
        return ep().translate([_e / 2 + 15, Ue / 2]);
      if (e)
        return e;
      throw new Error("No projection found in BubbleList component");
    } catch (b) {
      console.error(b);
    }
  })(), U = (b) => {
    var H;
    if (!p)
      return;
    const D = (H = h.filter((Z) => Z[_] === b[_])[0]) == null ? void 0 : H.uid;
    if (!D)
      return null;
    const A = Bl[D], $ = A[1], V = A[0], B = [$, V], G = o[D], W = {
      [D]: G
    };
    w({ type: "SET_POSITION", payload: { coordinates: B, zoom: 3 } }), l(W);
  }, k = Object.values(o).sort(
    (b, T) => b[x] < T[x] ? 1 : -1
  );
  if (k) {
    if (u === "world")
      return k && k.map((b) => {
        let T = Bl[b.uid];
        if (!T)
          return !0;
        const D = Ie(b[_]), A = P(D, b), $ = xe(b, t, r, a, i);
        if ((Math.floor(Number(b[x])) === 0 || b[x] === "") && !m)
          return;
        let V = `translate(${O([T[1], T[0]])})`, B, G;
        if (!O(T))
          return !0;
        const W = /* @__PURE__ */ M(le, { children: [
          /* @__PURE__ */ s(
            "circle",
            {
              tabIndex: -1,
              className: `bubble country--${D}`,
              cx: Number(O(T[1], T[0])[0]) || 0,
              cy: Number(O(T[1], T[0])[1]) || 0,
              r: Number(F(b[x])),
              fill: $[0],
              stroke: $[0],
              strokeWidth: 1.25,
              fillOpacity: 0.4,
              onPointerDown: (H) => {
                B = H.clientX, G = H.clientY;
              },
              onPointerUp: (H) => {
                B && G && H.clientX > B - C && H.clientX < B + C && H.clientY > G - C && H.clientY < G + C && (U(b), B = void 0, G = void 0);
              },
              transform: V,
              style: { transition: "all .25s ease-in-out", cursor: "pointer" },
              "data-tooltip-id": `tooltip__${n}`,
              "data-tooltip-html": A
            },
            `circle-${D.replace(" ", "")}`
          ),
          y && /* @__PURE__ */ s(
            "circle",
            {
              tabIndex: -1,
              className: "bubble",
              cx: Number(O(T[1], T[0])[0]) || 0,
              cy: Number(O(T[1], T[0])[1]) || 0,
              r: Number(F(b[x])) + 1,
              fill: "transparent",
              stroke: "white",
              strokeWidth: 0.5,
              onPointerDown: (H) => {
                B = H.clientX, G = H.clientY;
              },
              onPointerUp: (H) => {
                B && G && H.clientX > B - C && H.clientX < B + C && H.clientY > G - C && H.clientY < G + C && (U(b), B = void 0, G = void 0);
              },
              transform: V,
              style: { transition: "all .25s ease-in-out", cursor: "pointer" },
              "data-tooltip-id": `tooltip__${n}`,
              "data-tooltip-html": A
            },
            `circle-${D.replace(" ", "")}`
          )
        ] });
        return /* @__PURE__ */ s("g", { tabIndex: -1, children: W }, `group-${D.replace(" ", "")}`);
      });
    if (u === "us")
      return k && k.map((b) => {
        let T = c2[b.uid];
        if (Number(F(b[x])) === 0 || (b[x] === null && (b[x] = ""), (Math.floor(Number(b[x])) === 0 || b[x] === "") && !m))
          return;
        if (!T)
          return !0;
        let D = Number(T.Longitude), A = Number(T.Latitude), $ = [D, A], V = T.Name;
        if (!$)
          return !0;
        V = Ie(V);
        const B = P(V, b), G = xe(b, t, r, a, i);
        let W = `translate(${O([$[1], $[0]])})`;
        if (!O($))
          return !0;
        let H, Z;
        const X = /* @__PURE__ */ M(le, { children: [
          /* @__PURE__ */ s(
            "circle",
            {
              tabIndex: -1,
              className: "bubble",
              cx: O($)[0] || 0,
              cy: O($)[1] || 0,
              r: Number(F(b[x])),
              fill: G[0],
              stroke: G[0],
              strokeWidth: 1.25,
              fillOpacity: 0.4,
              onPointerDown: (J) => {
                H = J.clientX, Z = J.clientY;
              },
              onPointerUp: (J) => {
                H && Z && J.clientX > H - C && J.clientX < H + C && J.clientY > Z - C && J.clientY < Z + C && (N(V, T), H = void 0, Z = void 0);
              },
              transform: W,
              style: { transition: "all .25s ease-in-out", cursor: "pointer" },
              "data-tooltip-id": `tooltip__${n}`,
              "data-tooltip-html": B
            },
            `circle-${V.replace(" ", "")}`
          ),
          y && /* @__PURE__ */ s(
            "circle",
            {
              tabIndex: -1,
              className: "bubble",
              cx: O($)[0] || 0,
              cy: O($)[1] || 0,
              r: Number(F(b[x])) + 1,
              fill: "transparent",
              stroke: "white",
              strokeWidth: 0.5,
              fillOpacity: 0.4,
              onPointerDown: (J) => {
                H = J.clientX, Z = J.clientY;
              },
              onPointerUp: (J) => {
                H && Z && J.clientX > H - C && J.clientX < H + C && J.clientY > Z - C && J.clientY < Z + C && (N(V, T), H = void 0, Z = void 0);
              },
              transform: W,
              style: { transition: "all .25s ease-in-out", cursor: "pointer" },
              "data-tooltip-id": `tooltip__${n}`,
              "data-tooltip-html": B
            },
            `circle-${V.replace(" ", "")}`
          )
        ] });
        return /* @__PURE__ */ s("g", { children: X }, `group-${V.replace(" ", "")}`);
      });
  }
};
var Ce = 1e-6;
function ka() {
}
var Ln = 1 / 0, ui = Ln, ia = -Ln, di = ia, Vl = {
  point: u2,
  lineStart: ka,
  lineEnd: ka,
  polygonStart: ka,
  polygonEnd: ka,
  result: function() {
    var e = [[Ln, ui], [ia, di]];
    return ia = di = -(ui = Ln = 1 / 0), e;
  }
};
function u2(e, t) {
  e < Ln && (Ln = e), e > ia && (ia = e), t < ui && (ui = t), t > di && (di = t);
}
function po(e, t, n) {
  var a = t[1][0] - t[0][0], i = t[1][1] - t[0][1], l = e.clipExtent && e.clipExtent();
  e.scale(150).translate([0, 0]), l != null && e.clipExtent(null), At(n, e.stream(Vl));
  var o = Vl.result(), r = Math.min(a / (o[1][0] - o[0][0]), i / (o[1][1] - o[0][1])), g = +t[0][0] + (a - r * (o[1][0] + o[0][0])) / 2, h = +t[0][1] + (i - r * (o[1][1] + o[0][1])) / 2;
  return l != null && e.clipExtent(l), e.scale(r * 150).translate([g, h]);
}
function Dc(e, t, n) {
  return po(e, [[0, 0], t], n);
}
const Fr = Math.PI, Gr = 2 * Fr, Xt = 1e-6, d2 = Gr - Xt;
function Br() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function ho() {
  return new Br();
}
Br.prototype = ho.prototype = {
  constructor: Br,
  moveTo: function(e, t) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(e, t) {
    this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
  },
  quadraticCurveTo: function(e, t, n, a) {
    this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +a);
  },
  bezierCurveTo: function(e, t, n, a, i, l) {
    this._ += "C" + +e + "," + +t + "," + +n + "," + +a + "," + (this._x1 = +i) + "," + (this._y1 = +l);
  },
  arcTo: function(e, t, n, a, i) {
    e = +e, t = +t, n = +n, a = +a, i = +i;
    var l = this._x1, o = this._y1, r = n - e, g = a - t, h = l - e, c = o - t, d = h * h + c * c;
    if (i < 0)
      throw new Error("negative radius: " + i);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (d > Xt)
      if (!(Math.abs(c * r - g * h) > Xt) || !i)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var u = n - l, p = a - o, f = r * r + g * g, S = u * u + p * p, m = Math.sqrt(f), y = Math.sqrt(d), v = i * Math.tan((Fr - Math.acos((f + d - S) / (2 * m * y))) / 2), C = v / y, w = v / m;
        Math.abs(C - 1) > Xt && (this._ += "L" + (e + C * h) + "," + (t + C * c)), this._ += "A" + i + "," + i + ",0,0," + +(c * u > h * p) + "," + (this._x1 = e + w * r) + "," + (this._y1 = t + w * g);
      }
  },
  arc: function(e, t, n, a, i, l) {
    e = +e, t = +t, n = +n, l = !!l;
    var o = n * Math.cos(a), r = n * Math.sin(a), g = e + o, h = t + r, c = 1 ^ l, d = l ? a - i : i - a;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + g + "," + h : (Math.abs(this._x1 - g) > Xt || Math.abs(this._y1 - h) > Xt) && (this._ += "L" + g + "," + h), n && (d < 0 && (d = d % Gr + Gr), d > d2 ? this._ += "A" + n + "," + n + ",0,1," + c + "," + (e - o) + "," + (t - r) + "A" + n + "," + n + ",0,1," + c + "," + (this._x1 = g) + "," + (this._y1 = h) : d > Xt && (this._ += "A" + n + "," + n + ",0," + +(d >= Fr) + "," + c + "," + (this._x1 = e + n * Math.cos(i)) + "," + (this._y1 = t + n * Math.sin(i))));
  },
  rect: function(e, t, n, a) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +a + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function p2(e) {
  var t = e.length;
  return {
    point: function(n, a) {
      for (var i = -1; ++i < t; )
        e[i].point(n, a);
    },
    sphere: function() {
      for (var n = -1; ++n < t; )
        e[n].sphere();
    },
    lineStart: function() {
      for (var n = -1; ++n < t; )
        e[n].lineStart();
    },
    lineEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].lineEnd();
    },
    polygonStart: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonStart();
    },
    polygonEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonEnd();
    }
  };
}
function h2() {
  var e, t, n = ao(), a, i = Vt().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), l, o = Vt().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), r, g, h = { point: function(u, p) {
    g = [u, p];
  } };
  function c(u) {
    var p = u[0], f = u[1];
    return g = null, a.point(p, f), g || (l.point(p, f), g) || (r.point(p, f), g);
  }
  c.invert = function(u) {
    var p = n.scale(), f = n.translate(), S = (u[0] - f[0]) / p, m = (u[1] - f[1]) / p;
    return (m >= 0.12 && m < 0.234 && S >= -0.425 && S < -0.214 ? i : m >= 0.166 && m < 0.234 && S >= -0.214 && S < -0.115 ? o : n).invert(u);
  }, c.stream = function(u) {
    return e && t === u ? e : e = p2([n.stream(t = u), i.stream(u), o.stream(u)]);
  }, c.precision = function(u) {
    return arguments.length ? (n.precision(u), i.precision(u), o.precision(u), d()) : n.precision();
  }, c.scale = function(u) {
    return arguments.length ? (n.scale(u), i.scale(u * 0.35), o.scale(u), c.translate(n.translate())) : n.scale();
  }, c.translate = function(u) {
    if (!arguments.length)
      return n.translate();
    var p = n.scale(), f = +u[0], S = +u[1];
    return a = n.translate(u).clipExtent([[f - 0.455 * p, S - 0.238 * p], [f + 0.455 * p, S + 0.238 * p]]).stream(h), l = i.translate([f - 0.307 * p, S + 0.201 * p]).clipExtent([[f - 0.425 * p + Ce, S + 0.12 * p + Ce], [f - 0.214 * p - Ce, S + 0.234 * p - Ce]]).stream(h), r = o.translate([f - 0.205 * p, S + 0.212 * p]).clipExtent([[f - 0.214 * p + Ce, S + 0.166 * p + Ce], [f - 0.115 * p - Ce, S + 0.234 * p - Ce]]).stream(h), d();
  }, c.fitExtent = function(u, p) {
    return po(c, u, p);
  }, c.fitSize = function(u, p) {
    return Dc(c, u, p);
  };
  function d() {
    return e = t = null, c;
  }
  return c.drawCompositionBorders = function(u) {
    var p = n([-102.91, 26.3]), f = n([-104, 27.5]), S = n([-108, 29.1]), m = n([-110, 29.1]), y = n([-110, 26.7]), v = n([-112.8, 27.6]), C = n([-114.3, 30.6]), w = n([-119.3, 30.1]);
    u.moveTo(p[0], p[1]), u.lineTo(f[0], f[1]), u.lineTo(S[0], S[1]), u.lineTo(m[0], m[1]), u.moveTo(y[0], y[1]), u.lineTo(v[0], v[1]), u.lineTo(C[0], C[1]), u.lineTo(w[0], w[1]);
  }, c.getCompositionBorders = function() {
    var u = ho();
    return this.drawCompositionBorders(u), u.toString();
  }, c.scale(1070);
}
function g2(e) {
  var t = e.length;
  return {
    point: function(n, a) {
      for (var i = -1; ++i < t; )
        e[i].point(n, a);
    },
    sphere: function() {
      for (var n = -1; ++n < t; )
        e[n].sphere();
    },
    lineStart: function() {
      for (var n = -1; ++n < t; )
        e[n].lineStart();
    },
    lineEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].lineEnd();
    },
    polygonStart: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonStart();
    },
    polygonEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonEnd();
    }
  };
}
function Cn() {
  var e, t, n = ao(), a, i = Vt().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), l, o = Vt().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), r, g = Vt().rotate([66, 0]).center([0, 18]).parallels([8, 18]), h, c = yl().rotate([173, 14]), d, u = yl().rotate([-145, -16.8]), p, f, S = { point: function(v, C) {
    f = [v, C];
  } };
  function m(v) {
    var C = v[0], w = v[1];
    return f = null, a.point(C, w), f || (l.point(C, w), f) || (r.point(C, w), f) || (h.point(C, w), f) || (d.point(C, w), f) || (p.point(C, w), f);
  }
  m.invert = function(v) {
    var C = n.scale(), w = n.translate(), N = (v[0] - w[0]) / C, P = (v[1] - w[1]) / C;
    return (P >= 0.12 && P < 0.234 && N >= -0.425 && N < -0.214 ? i : P >= 0.166 && P < 0.234 && N >= -0.214 && N < -0.115 ? o : P >= 0.2064 && P < 0.2413 && N >= 0.312 && N < 0.385 ? g : P >= 0.09 && P < 0.1197 && N >= -0.4243 && N < -0.3232 ? c : P >= -0.0518 && P < 0.0895 && N >= -0.4243 && N < -0.3824 ? u : n).invert(v);
  }, m.stream = function(v) {
    return e && t === v ? e : e = g2([n.stream(t = v), i.stream(v), o.stream(v), g.stream(v), c.stream(v), u.stream(v)]);
  }, m.precision = function(v) {
    return arguments.length ? (n.precision(v), i.precision(v), o.precision(v), g.precision(v), c.precision(v), u.precision(v), y()) : n.precision();
  }, m.scale = function(v) {
    return arguments.length ? (n.scale(v), i.scale(v * 0.35), o.scale(v), g.scale(v), c.scale(v * 2), u.scale(v), m.translate(n.translate())) : n.scale();
  }, m.translate = function(v) {
    if (!arguments.length)
      return n.translate();
    var C = n.scale(), w = +v[0], N = +v[1];
    return a = n.translate(v).clipExtent([[w - 0.455 * C, N - 0.238 * C], [w + 0.455 * C, N + 0.238 * C]]).stream(S), l = i.translate([w - 0.307 * C, N + 0.201 * C]).clipExtent([[w - 0.425 * C + Ce, N + 0.12 * C + Ce], [w - 0.214 * C - Ce, N + 0.233 * C - Ce]]).stream(S), r = o.translate([w - 0.205 * C, N + 0.212 * C]).clipExtent([[w - 0.214 * C + Ce, N + 0.166 * C + Ce], [w - 0.115 * C - Ce, N + 0.233 * C - Ce]]).stream(S), h = g.translate([w + 0.35 * C, N + 0.224 * C]).clipExtent([[w + 0.312 * C + Ce, N + 0.2064 * C + Ce], [w + 0.385 * C - Ce, N + 0.233 * C - Ce]]).stream(S), d = c.translate([w - 0.492 * C, N + 0.09 * C]).clipExtent([[w - 0.4243 * C + Ce, N + 0.0903 * C + Ce], [w - 0.3233 * C - Ce, N + 0.1197 * C - Ce]]).stream(S), p = u.translate([w - 0.408 * C, N + 0.018 * C]).clipExtent([[w - 0.4244 * C + Ce, N - 0.0519 * C + Ce], [w - 0.3824 * C - Ce, N + 0.0895 * C - Ce]]).stream(S), y();
  }, m.fitExtent = function(v, C) {
    return po(m, v, C);
  }, m.fitSize = function(v, C) {
    return Dc(m, v, C);
  };
  function y() {
    return e = t = null, m;
  }
  return m.drawCompositionBorders = function(v) {
    var C = n([-110.4641, 28.2805]), w = n([-104.0597, 28.9528]), N = n([-103.7049, 25.1031]), P = n([-109.8337, 24.4531]), x = n([-124.4745, 28.1407]), _ = n([-110.931, 30.8844]), z = n([-109.8337, 24.4531]), F = n([-122.4628, 21.8562]), I = n([-76.8579, 25.1544]), O = n([-72.429, 24.2097]), U = n([-72.8265, 22.7056]), k = n([-77.1852, 23.6392]), b = n([-125.0093, 29.7791]), T = n([-118.5193, 31.3262]), D = n([-118.064, 29.6912]), A = n([-124.4369, 28.169]), $ = n([-128.1314, 37.4582]), V = n([-125.2132, 38.214]), B = n([-122.3616, 30.5115]), G = n([-125.0315, 29.8211]);
    v.moveTo(C[0], C[1]), v.lineTo(w[0], w[1]), v.lineTo(N[0], N[1]), v.lineTo(N[0], N[1]), v.lineTo(P[0], P[1]), v.closePath(), v.moveTo(x[0], x[1]), v.lineTo(_[0], _[1]), v.lineTo(z[0], z[1]), v.lineTo(z[0], z[1]), v.lineTo(F[0], F[1]), v.closePath(), v.moveTo(I[0], I[1]), v.lineTo(O[0], O[1]), v.lineTo(U[0], U[1]), v.lineTo(U[0], U[1]), v.lineTo(k[0], k[1]), v.closePath(), v.moveTo(b[0], b[1]), v.lineTo(T[0], T[1]), v.lineTo(D[0], D[1]), v.lineTo(D[0], D[1]), v.lineTo(A[0], A[1]), v.closePath(), v.moveTo($[0], $[1]), v.lineTo(V[0], V[1]), v.lineTo(B[0], B[1]), v.lineTo(B[0], B[1]), v.lineTo(G[0], G[1]), v.closePath();
  }, m.getCompositionBorders = function() {
    var v = ho();
    return this.drawCompositionBorders(v), v.toString();
  }, m.scale(1070);
}
const lt = (e) => {
  const { item: t, index: n, centroid: a, iconSize: i, textColor: l = "#000", isTerritory: o } = e;
  if (a)
    return o ? /* @__PURE__ */ M(Qn, { style: { transform: "translate(36%, 50%)" }, children: [
      t.shape === "Arrow Down" && /* @__PURE__ */ s(qi, { size: 12, stroke: "none", fontWeight: 100 }),
      t.shape === "Arrow Up" && /* @__PURE__ */ s(Ki, { size: 12, stroke: "none", fontWeight: 100 }),
      t.shape === "Arrow Right" && /* @__PURE__ */ s(Zi, { size: 12, stroke: "none", fontWeight: 100 }),
      t.shape === "Arrow Left" && /* @__PURE__ */ s(Vo, { size: 12, stroke: "none", fontWeight: 100 })
    ] }, `territory-hex--${n}`) : /* @__PURE__ */ M(
      Qn,
      {
        top: a[1] - 5,
        left: a[0] - i,
        color: l,
        textAnchor: "start",
        children: [
          t.shape === "Arrow Down" && /* @__PURE__ */ s(qi, {}),
          t.shape === "Arrow Up" && /* @__PURE__ */ s(Ki, {}),
          t.shape === "Arrow Right" && /* @__PURE__ */ s(Zi, {}),
          t.shape === "Arrow Left" && /* @__PURE__ */ s(Vo, {})
        ]
      },
      `hex--${t.key}-${t.value}-${n}`
    );
}, st = {
  small: 8,
  medium: 10,
  large: 12
}, Wl = {
  "US-VT": [50, -8],
  "US-NH": [34, 2],
  "US-MA": [30, -1],
  "US-RI": [28, 2],
  "US-CT": [35, 10],
  "US-NJ": [42, 1],
  "US-DE": [33, 0],
  "US-MD": [47, 10]
}, $i = {
  "US-FL": [15, 3],
  "US-AK": [0, -8],
  "US-CA": [-10, 0],
  "US-NY": [5, 0],
  "US-MI": [13, 20],
  "US-LA": [-10, -3],
  "US-HI": [-10, 10],
  "US-ID": [0, 10],
  "US-WV": [-2, 2]
}, f2 = ({
  dataTooltipHtml: e,
  dataTooltipId: t,
  handleShapeClick: n,
  label: a,
  stroke: i,
  strokeColor: l,
  strokeWidth: o,
  territory: r,
  territoryData: g,
  textColor: h,
  ...c
}) => {
  const { config: d } = E.useContext(fe), u = d.general.displayAsHex, p = (f, S = "#FFFFFF", m) => {
    var _;
    let y = m ? m(ta(f)) : [22, 17.5], v = (_ = f == null ? void 0 : f.properties) != null && _.iso ? f.properties.iso : f != null && f.uid ? f.uid : `US-${a}`;
    const C = (z, F, I = !1) => (I || (y = m(ta(F))), /* @__PURE__ */ s(le, { children: d.hexMap.shapeGroups.map((O, U) => O.items.map((k, b) => {
      if (z)
        switch (k.operator) {
          case "=":
            if ((z == null ? void 0 : z[k.key]) === k.value || Number(z[k.key]) === Number(k.value))
              return /* @__PURE__ */ s(lt, { item: k, index: b, centroid: y, isTerritory: !0 });
            break;
          case "≠":
            if ((z == null ? void 0 : z[k.key]) !== k.value && Number(z[k.key]) !== Number(k.value))
              return /* @__PURE__ */ s(lt, { item: k, index: b, centroid: y, isTerritory: !0 });
            break;
          case "<":
            if (Number(z == null ? void 0 : z[k.key]) < Number(k.value))
              return /* @__PURE__ */ s(lt, { item: k, index: b, centroid: y, isTerritory: !0 });
            break;
          case ">":
            if (Number(z[k.key]) > Number(k.value))
              return /* @__PURE__ */ s(lt, { item: k, index: b, centroid: y, isTerritory: !0 });
            break;
          case "<=":
            if (Number(z[k.key]) <= Number(k.value))
              return /* @__PURE__ */ s(lt, { item: k, index: b, centroid: y, isTerritory: !0 });
            break;
          case ">=":
            if (k.operator === ">=" && Number(z[k.key]) >= Number(k.value))
              return /* @__PURE__ */ s(lt, { item: k, index: b, centroid: y, isTerritory: !0 });
            break;
        }
    })) }));
    if (v === void 0)
      return null;
    nn("#FFF", S);
    let w = 0, N = d.hexMap.type === "shapes" ? -10 : 5;
    if ($i[v] && u === !1 && (w += $i[v][0], N += $i[v][1]), Wl[v] === void 0 || u) {
      let z = d.hexMap.type === "shapes" ? "30%" : "50%";
      return /* @__PURE__ */ M(le, { children: [
        /* @__PURE__ */ s(
          Ss,
          {
            fontSize: 14,
            x: "50%",
            y: z,
            style: { fill: "currentColor", stroke: l, fontWeight: 900, opacity: 1, fillOpacity: 1 },
            paintOrder: "stroke",
            textAnchor: "middle",
            verticalAnchor: "middle",
            onClick: n,
            "data-tooltip-id": t,
            "data-tooltip-html": e,
            children: v.substring(3)
          }
        ),
        d.general.displayAsHex && d.hexMap.type === "shapes" && C(g, f, !0)
      ] });
    }
    let [P, x] = Wl[v];
    return /* @__PURE__ */ M("g", { children: [
      /* @__PURE__ */ s(
        "line",
        {
          x1: y[0],
          y1: y[1],
          x2: y[0] + P,
          y2: y[1] + x,
          stroke: "rgba(0,0,0,.5)",
          strokeWidth: 1
        }
      ),
      /* @__PURE__ */ s(
        "text",
        {
          x: 4,
          strokeWidth: "0",
          fontSize: 13,
          style: { fill: Ra },
          alignmentBaseline: "middle",
          transform: `translate(${y[0] + P}, ${y[1] + x})`,
          onClick: n,
          "data-tooltip-id": t,
          "data-tooltip-html": e,
          children: v.substring(3)
        }
      )
    ] });
  };
  return /* @__PURE__ */ s("svg", { viewBox: "-1 -1 46 53", className: "territory-wrapper--hex", children: /* @__PURE__ */ M("g", { ...c, "data-tooltip-html": e, "data-tooltip-id": t, onClick: n, children: [
    /* @__PURE__ */ s(
      "polygon",
      {
        stroke: i,
        strokeWidth: o,
        points: "22 0 44 12.702 44 38.105 22 50.807 0 38.105 0 12.702"
      }
    ),
    d.general.displayAsHex && p(g, i, !1)
  ] }) });
}, m2 = ({
  dataTooltipId: e,
  dataTooltipHtml: t,
  handleShapeClick: n,
  hasPattern: a,
  label: i,
  stroke: l,
  strokeColor: o,
  strokeWidth: r,
  territory: g,
  textColor: h,
  backgroundColor: c,
  ...d
}) => {
  const { config: u } = E.useContext(fe), { territoryData: p, ...f } = d, S = "M42,0.5 C42.8284271,0.5 43.5,1.17157288 43.5,2 L43.5,2 L43.5,26 C43.5,26.8284271 42.8284271,27.5 42,27.5 L42,27.5 L3,27.5 C2.17157288,27.5 1.5,26.8284271 1.5,26 L1.5,26 L1.5,2 C1.5,1.17157288 2.17157288,0.5 3,0.5 L3,0.5 Z";
  return /* @__PURE__ */ s("svg", { viewBox: "0 0 45 29", className: g, children: /* @__PURE__ */ M(
    "g",
    {
      ...f,
      strokeLinejoin: "round",
      tabIndex: -1,
      onClick: n,
      "data-tooltip-id": e,
      "data-tooltip-html": t,
      children: [
        /* @__PURE__ */ s("path", { stroke: l, strokeWidth: r, d: S, ...f }),
        /* @__PURE__ */ s(
          "text",
          {
            textAnchor: "middle",
            dominantBaseline: "middle",
            x: "50%",
            y: "54%",
            fill: h,
            stroke: o,
            className: "territory-text",
            paintOrder: "stroke",
            onClick: n,
            "data-tooltip-id": e,
            "data-tooltip-html": t,
            children: i
          }
        ),
        u.map.patterns.map((m, y) => {
          const v = m.color || nn("#FFF", c);
          return !(m.dataValue === (p == null ? void 0 : p[m.dataKey])) || !m.pattern ? null : /* @__PURE__ */ M(le, { children: [
            (m == null ? void 0 : m.pattern) === "waves" && /* @__PURE__ */ s(
              mi,
              {
                id: `territory-${g}-${m == null ? void 0 : m.dataKey}--${y}`,
                height: st[m == null ? void 0 : m.size] ?? 10,
                width: st[m == null ? void 0 : m.size] ?? 10,
                fill: v,
                strokeWidth: 0.25,
                complement: !0
              }
            ),
            (m == null ? void 0 : m.pattern) === "circles" && /* @__PURE__ */ s(
              fi,
              {
                id: `territory-${g}-${m == null ? void 0 : m.dataKey}--${y}`,
                height: st[m == null ? void 0 : m.size] ?? 10,
                width: st[m == null ? void 0 : m.size] ?? 10,
                fill: v,
                radius: 0.5,
                complement: !0
              }
            ),
            (m == null ? void 0 : m.pattern) === "lines" && /* @__PURE__ */ s(
              gi,
              {
                id: `territory-${g}-${m == null ? void 0 : m.dataKey}--${y}`,
                height: st[m == null ? void 0 : m.size] ?? 6,
                width: st[m == null ? void 0 : m.size] ?? 6,
                stroke: v,
                strokeWidth: 0.75,
                orientation: ["diagonalRightToLeft"]
              }
            ),
            /* @__PURE__ */ s(
              "path",
              {
                stroke: l,
                strokeWidth: r,
                d: S,
                fill: `url(#territory-${g}-${m == null ? void 0 : m.dataKey}--${y})`,
                className: [
                  `territory-pattern-${m == null ? void 0 : m.dataKey}`,
                  `territory-pattern-${m == null ? void 0 : m.dataKey}--${m.dataValue}`
                ].join(" ")
              }
            ),
            /* @__PURE__ */ s(
              "text",
              {
                textAnchor: "middle",
                dominantBaseline: "middle",
                x: "50%",
                y: "54%",
                fill: h,
                stroke: o,
                className: "territory-text",
                paintOrder: "stroke",
                onClick: n,
                "data-tooltip-id": e,
                "data-tooltip-html": t,
                children: i
              }
            )
          ] });
        })
      ]
    }
  ) }, g);
}, jl = {
  Rectangle: m2,
  Hexagon: f2
}, y2 = ({ territories: e, logo: t, config: n, territoriesData: a }) => {
  const { currentViewport: i } = E.useContext(fe), l = a.filter((u) => ["US-FM", "US-MH", "US-PW"].includes(u)), o = a.filter((u) => ["US-AS", "US-GU", "US-MP", "US-PR", "US-VI"].includes(u)), r = e.filter((u) => {
    var p;
    return o.includes(`US-${(p = u == null ? void 0 : u.props) == null ? void 0 : p.label}`);
  }).sort((u, p) => u.props.label.localeCompare(p.props.label)), g = e.filter((u) => {
    var p;
    return l.includes(`US-${(p = u == null ? void 0 : u.props) == null ? void 0 : p.label}`);
  }).sort((u, p) => u.props.label.localeCompare(p.props.label)), h = D1(i), c = 9, d = h ? 30 : 45;
  return a.length > 0 && /* @__PURE__ */ s(le, { children: /* @__PURE__ */ M("div", { children: [
    /* @__PURE__ */ s("div", { className: "d-flex mt-4", children: n.general.type === "data" && t && /* @__PURE__ */ s("img", { src: t, alt: "", className: "map-logo", style: { maxWidth: "50px" } }) }),
    /* @__PURE__ */ M("div", { className: "d-flex flex-wrap", style: { columnGap: "1.5rem" }, children: [
      (r.length > 0 || n.general.territoriesAlwaysShow) && /* @__PURE__ */ M("div", { children: [
        /* @__PURE__ */ s("h5", { className: "territories-label", children: "U.S. territories" }),
        /* @__PURE__ */ s(
          "span",
          {
            className: `mt-2 ${h ? "mb-3" : "mb-4"} d-flex territories`,
            style: { minWidth: `${r.length * d + (r.length - 1) * c}px` },
            children: r
          }
        )
      ] }),
      (g.length > 0 || n.general.territoriesAlwaysShow) && /* @__PURE__ */ M("div", { children: [
        /* @__PURE__ */ s("h5", { className: "territories-label", children: "Freely associated states" }),
        /* @__PURE__ */ s(
          "span",
          {
            className: `mt-2 ${h ? "mb-3" : "mb-4"} d-flex territories`,
            style: {
              minWidth: `${g.length * d + (g.length - 1) * c}px`
            },
            children: g
          }
        )
      ] })
    ] })
  ] }) });
}, { features: C2 } = Nt(Wo, Wo.objects.states), Hl = {
  "US-VT": [53, -7],
  "US-NH": [38, 7],
  "US-MA": [34, -1],
  "US-RI": [29, 7],
  "US-CT": [43, 20],
  "US-NJ": [26, 7],
  "US-DE": [33, 0],
  "US-MD": [51, 16]
}, zi = {
  "US-FL": [15, 3],
  "US-AK": [0, -8],
  "US-CA": [-10, 0],
  "US-NY": [5, 0],
  "US-MI": [13, 20],
  "US-LA": [-10, -3],
  "US-HI": [-10, 10],
  "US-ID": [0, 10],
  "US-WV": [-2, 2]
}, S2 = () => {
  const {
    data: e,
    setSharedFilterValue: t,
    config: n,
    setConfig: a,
    tooltipId: i,
    mapId: l,
    logo: o,
    legendMemo: r,
    legendSpecialClassLastMemo: g,
    currentViewport: h,
    translate: c,
    runtimeLegend: d
  } = E.useContext(fe);
  let u = !1;
  const { general: p, columns: f, tooltips: S, hexMap: m, map: y, annotations: v } = n, { displayAsHex: C } = p, { geoClickHandler: w } = ln(), { applyTooltipsToGeo: N } = Ht(), P = E.useContext(it), x = (G) => {
    P({ type: "SET_IS_DRAGGING_ANNOTATION", payload: G });
  };
  t && (Object.keys(ki).forEach((G) => {
    ki[G].indexOf(t.toUpperCase()) !== -1 && (u = !0);
  }), Object.keys(pn).forEach((G) => {
    pn[G].indexOf(t.toUpperCase()) !== -1 && (u = !0);
  }), Object.keys(An).forEach((G) => {
    G === t.toUpperCase() && (u = !0);
  }));
  const [_, z] = E.useState(null), F = E.useRef(null);
  (_ == null ? void 0 : _.every((G) => {
    const W = G.properties.iso, H = e[W], Z = ot(H);
    return r.current.has(Z);
  })) && (F.current = e), E.useEffect(() => {
    (async () => {
      import(
        /* webpackChunkName: "us-topo" */
        "./storybook-us-topo-c55ac1ea.es.js"
      ).then((W) => {
        z(Nt(W, W.objects.states).features);
      });
    })();
  }, []), E.useEffect(() => {
    P({ type: "SET_TRANSLATE", payload: [_e / 2, Ue / 2] });
  }, [p.geoType]);
  const [O, U] = E.useState([]), k = Object.keys(pn);
  E.useEffect(() => {
    if (p.territoriesAlwaysShow)
      U(k);
    else {
      const G = k.filter((W) => {
        var H;
        return (H = F.current) == null ? void 0 : H[W];
      });
      U(G);
    }
  }, [e, p.territoriesAlwaysShow]);
  const b = Wt(n), T = Tn(), D = O.map((G, W) => {
    const H = C ? jl.Hexagon : jl.Rectangle, Z = e == null ? void 0 : e[G];
    let X, J = {
      fill: T,
      stroke: b,
      color: Ra
    };
    const ee = pn[G][1];
    if (!Z)
      return /* @__PURE__ */ s(
        H,
        {
          label: ee,
          style: J,
          textColor: J.color,
          strokeColor: "#fff",
          territoryData: Z,
          backgroundColor: J.fill
        },
        ee
      );
    X = N(Ie(G), Z);
    const re = xe(Z, n, d, r, g);
    if (re) {
      let ve = !1;
      (f.navigate && Z[f.navigate.name] || S.appearanceType === "click") && (ve = !0);
      const { textColor: Ne, strokeColor: te } = Lo(re[0]);
      return J = {
        color: Ne,
        fill: re[0],
        opacity: t && u && t !== Z[f.geo.name] ? 0.5 : 1,
        stroke: t && u && t === Z[f.geo.name] ? "rgba(0, 0, 0, 1)" : b,
        cursor: ve ? "pointer" : "default",
        "&:hover": {
          fill: re[1]
        },
        "&:active": {
          fill: re[2]
        }
      }, /* @__PURE__ */ s(
        H,
        {
          label: ee,
          style: J,
          strokeWidth: 1,
          textColor: Ne,
          strokeColor: te,
          handleShapeClick: () => w(G, Z),
          dataTooltipId: `tooltip__${i}`,
          dataTooltipHtml: X,
          territory: G,
          territoryData: Z,
          tabIndex: -1,
          backgroundColor: J.fill
        },
        `label__${W}`
      );
    }
  });
  let A = yn().projection(h2().translate(c));
  const { pathArray: $ } = Xr(n, a, A, i);
  if (!_)
    return /* @__PURE__ */ s(le, {});
  const V = (G, W) => {
    let H = p.displayStateLabels;
    G.map((X) => {
      X.feature.properties.iso && (X.feature.properties.name = Jn(ki[X.feature.properties.iso][0]));
    }), G.sort((X, J) => {
      const ee = X.feature.properties.name.toUpperCase(), re = J.feature.properties.name.toUpperCase();
      return ee < re ? -1 : ee > re ? 1 : 0;
    });
    const Z = G.map(({ feature: X, path: J = "" }, ee) => {
      var sn;
      const re = C ? X.properties.iso + "-hex-group" : X.properties.iso + "-group";
      let ve = {
        fill: T,
        cursor: "default"
      }, Ne = X.properties.iso, te = X.properties.name;
      if (!Ne)
        return;
      const Oe = e == null ? void 0 : e[Ne];
      let He;
      Oe !== void 0 && (He = xe(Oe, n, d, r, g));
      const Mt = Ie(Ne);
      if (He && He[0] !== "#000000") {
        const Nn = N(Mt, Oe);
        ve = {
          fill: n.general.type !== "bubble" ? He[0] : T,
          opacity: t && u && t !== Oe[f.geo.name] ? 0.5 : 1,
          stroke: t && u && t === Oe[f.geo.name] ? "rgba(0, 0, 0, 1)" : b,
          cursor: "default",
          "&:hover": {
            fill: n.general.type !== "bubble" ? He[1] : T
          },
          "&:active": {
            fill: n.general.type !== "bubble" ? He[2] : T
          }
        }, (f.navigate && Oe[f.navigate.name] || S.appearanceType === "click") && (ve.cursor = "pointer");
        const Ee = (Ae, Qe, Ct) => {
          const Re = W(ta(Qe)), Te = 8, Fe = nn("#FFF", Ct);
          return /* @__PURE__ */ s(le, { children: m.shapeGroups.map((L, R) => L.items.map((j, Y) => {
            switch (j.operator) {
              case "=":
                if (Ae[j.key] === j.value || Number(Ae[j.key]) === Number(j.value))
                  return /* @__PURE__ */ s(
                    lt,
                    {
                      textColor: Fe,
                      item: j,
                      index: Y,
                      centroid: Re,
                      iconSize: Te
                    }
                  );
                break;
              case "≠":
                if (Ae[j.key] !== j.value && Number(Ae[j.key]) !== Number(j.value))
                  return /* @__PURE__ */ s(
                    lt,
                    {
                      textColor: Fe,
                      item: j,
                      index: Y,
                      centroid: Re,
                      iconSize: Te
                    }
                  );
                break;
              case "<":
                if (Number(Ae[j.key]) < Number(j.value))
                  return /* @__PURE__ */ s(
                    lt,
                    {
                      textColor: Fe,
                      item: j,
                      index: Y,
                      centroid: Re,
                      iconSize: Te
                    }
                  );
                break;
              case ">":
                if (Number(Ae[j.key]) > Number(j.value))
                  return /* @__PURE__ */ s(
                    lt,
                    {
                      textColor: Fe,
                      item: j,
                      index: Y,
                      centroid: Re,
                      iconSize: Te
                    }
                  );
                break;
              case "<=":
                if (Number(Ae[j.key]) <= Number(j.value))
                  return /* @__PURE__ */ s(
                    lt,
                    {
                      textColor: Fe,
                      item: j,
                      index: Y,
                      centroid: Re,
                      iconSize: Te
                    }
                  );
                break;
              case ">=":
                if (j.operator === ">=" && Number(Ae[j.key]) >= Number(j.value))
                  return /* @__PURE__ */ s(
                    lt,
                    {
                      textColor: Fe,
                      item: j,
                      index: Y,
                      centroid: Re,
                      iconSize: Te
                    }
                  );
                break;
            }
          })) });
        };
        return /* @__PURE__ */ s("g", { "data-name": te, tabIndex: -1, children: /* @__PURE__ */ M(
          "g",
          {
            className: "geo-group",
            style: ve,
            onClick: () => w(Mt, Oe),
            id: te,
            "data-tooltip-id": `tooltip__${i}`,
            "data-tooltip-html": Nn,
            tabIndex: -1,
            children: [
              /* @__PURE__ */ s("path", { tabIndex: -1, className: "single-geo", strokeWidth: 1, d: J }),
              (sn = y == null ? void 0 : y.patterns) == null ? void 0 : sn.map((Ae, Qe) => {
                const { pattern: Ct, dataKey: Re, size: Te } = Ae, Fe = ve.fill, L = Ae.dataValue === (Oe == null ? void 0 : Oe[Ae.dataKey]), R = Ae.color || nn("#000", Fe);
                if (L)
                  return ls(Fe, R), /* @__PURE__ */ M(le, { children: [
                    Ct === "waves" && /* @__PURE__ */ s(
                      mi,
                      {
                        id: `${l}--${String(Re).replace(" ", "-")}--${ee}`,
                        height: st[Te] ?? 10,
                        width: st[Te] ?? 10,
                        fill: R,
                        strokeWidth: 0.25
                      }
                    ),
                    Ct === "circles" && /* @__PURE__ */ s(
                      fi,
                      {
                        id: `${l}--${String(Re).replace(" ", "-")}--${ee}`,
                        height: st[Te] ?? 10,
                        width: st[Te] ?? 10,
                        fill: R,
                        radius: 0.5
                      }
                    ),
                    Ct === "lines" && /* @__PURE__ */ s(
                      gi,
                      {
                        id: `${l}--${String(Re).replace(" ", "-")}--${ee}`,
                        height: st[Te] ?? 6,
                        width: st[Te] ?? 6,
                        stroke: R,
                        strokeWidth: 0.75,
                        orientation: ["diagonalRightToLeft"]
                      }
                    ),
                    /* @__PURE__ */ s(
                      "path",
                      {
                        className: `pattern-geoKey--${Re}`,
                        tabIndex: -1,
                        stroke: "transparent",
                        d: J,
                        fill: `url(#${l}--${String(Re).replace(" ", "-")}--${ee})`
                      }
                    )
                  ] });
              }),
              (C || H) && B(X, He[0], W),
              C && m.type === "shapes" && Ee(Oe, X, He[0])
            ]
          }
        ) }, re);
      }
      return /* @__PURE__ */ s("g", { "data-name": te, tabIndex: -1, children: /* @__PURE__ */ M("g", { className: "geo-group", style: ve, tabIndex: -1, children: [
        /* @__PURE__ */ s("path", { tabIndex: -1, className: "single-geo", stroke: b, strokeWidth: 1.3, d: J }),
        (C || H) && B(X, ve.fill, W)
      ] }) }, re);
    });
    return C || (Z.push(
      /* @__PURE__ */ s(
        uo,
        {
          applyLegendToRow: xe,
          applyTooltipsToGeo: N,
          geoClickHandler: w,
          isFilterValueSupported: u,
          projection: W,
          setSharedFilterValue: t,
          titleCase: Jn,
          tooltipId: i
        },
        "cities"
      )
    ), p.type === "bubble" && Z.push(/* @__PURE__ */ s(Pc, { runtimeData: F.current, projection: W })), $.length > 0 && $.map((X) => Z.push(X))), Z;
  }, B = (G, W = "#FFFFFF", H) => {
    let Z = H ? H(ta(G)) : [22, 17.5], X = G.properties.iso;
    if (X === void 0)
      return null;
    X === "US-HI" && !p.displayAsHex && (W = "#FFF");
    const { textColor: J, strokeColor: ee } = Lo(W);
    let re = 0, ve = m.type === "shapes" && p.displayAsHex ? -10 : 5;
    if (zi[X] && C === !1 && (re += zi[X][0], ve += zi[X][1]), Hl[X] === void 0 || C)
      return /* @__PURE__ */ s("g", { transform: `translate(${Z})`, tabIndex: -1, children: /* @__PURE__ */ s(
        "text",
        {
          x: re,
          y: ve,
          fontSize: Po(h) ? 16 : 13,
          fontWeight: 900,
          strokeWidth: "1",
          paintOrder: "stroke",
          stroke: ee,
          style: { fill: J },
          textAnchor: "middle",
          children: X.substring(3)
        }
      ) });
    let [Ne, te] = Hl[X];
    return /* @__PURE__ */ M("g", { tabIndex: -1, children: [
      /* @__PURE__ */ s(
        "line",
        {
          x1: Z[0],
          y1: Z[1],
          x2: Z[0] + Ne,
          y2: Z[1] + te,
          stroke: "rgba(0,0,0,.5)",
          strokeWidth: 1
        }
      ),
      /* @__PURE__ */ s(
        "text",
        {
          x: 4,
          strokeWidth: "0",
          stroke: Ra,
          fontSize: Po(h) ? 16 : 13,
          fontWeight: 900,
          style: { fill: J },
          alignmentBaseline: "middle",
          transform: `translate(${Z[0] + Ne}, ${Z[1] + te})`,
          children: X.substring(3)
        }
      )
    ] });
  };
  return /* @__PURE__ */ M(jt, { component: "UsaMap", children: [
    /* @__PURE__ */ M("svg", { viewBox: en, role: "img", "aria-label": tn(n), children: [
      p.displayAsHex ? /* @__PURE__ */ s(ci, { data: C2, scale: 650, translate: [1600, 775], children: ({ features: G, projection: W }) => V(G, W) }) : /* @__PURE__ */ s(t2, { data: _, translate: c, children: ({ features: G, projection: W }) => V(G, W) }),
      (v == null ? void 0 : v.length) > 0 && /* @__PURE__ */ s(ea.Draggable, { onDragStateChange: x })
    ] }),
    /* @__PURE__ */ s(y2, { territories: D, logo: o, config: n, territoriesData: O })
  ] });
};
const b2 = ({ label: e, text: t, stroke: n, strokeWidth: a, ...i }) => /* @__PURE__ */ s("svg", { viewBox: "0 0 45 28", children: /* @__PURE__ */ M("g", { ...i, strokeLinejoin: "round", children: [
  /* @__PURE__ */ s(
    "path",
    {
      stroke: n,
      strokeWidth: a,
      d: "M40,0.5 C41.2426407,0.5 42.3676407,1.00367966 43.1819805,1.81801948 C43.9963203,2.63235931 44.5,3.75735931 44.5,5 L44.5,5 L44.5,23 C44.5,24.2426407 43.9963203,25.3676407 43.1819805,26.1819805 C42.3676407,26.9963203 41.2426407,27.5 40,27.5 L40,27.5 L5,27.5 C3.75735931,27.5 2.63235931,26.9963203 1.81801948,26.1819805 C1.00367966,25.3676407 0.5,24.2426407 0.5,23 L0.5,23 L0.5,5 C0.5,3.75735931 1.00367966,2.63235931 1.81801948,1.81801948 C2.63235931,1.00367966 3.75735931,0.5 5,0.5 L5,0.5 Z"
    }
  ),
  /* @__PURE__ */ s("text", { textAnchor: "middle", dominantBaseline: "middle", x: "50%", y: "54%", fill: t, children: e })
] }) }), v2 = () => {
  const { data: e, config: t, tooltipId: n, legendMemo: a, legendSpecialClassLastMemo: i, runtimeLegend: l } = E.useContext(fe), [o, r] = E.useState(null), { geoClickHandler: g } = ln(), { applyTooltipsToGeo: h } = Ht(), { general: c } = t, { displayStateLabels: d, territoriesLabel: u, displayAsHex: p, type: f } = c, S = t.tooltips.appearanceType, m = p, [y, v] = E.useState([]), C = 15;
  E.useEffect(() => {
    (async () => {
      import(
        /* webpackChunkName: "us-regions-topo-2" */
        "./storybook-us-regions-topo-2-fce76882.es.js"
      ).then((F) => {
        r(Nt(F, F.objects.regions).features);
      });
    })();
  }, []);
  const w = Object.keys(pn);
  if (E.useEffect(() => {
    const z = w.filter((F) => e[F]);
    v(z);
  }, [e]), !o)
    return /* @__PURE__ */ s(le, {});
  const N = Wt(t), P = Tn(), x = y.map((z) => {
    const F = b2, I = e[z];
    let O, U = {
      fill: P
    };
    const k = pn[z][1];
    if (!I)
      return /* @__PURE__ */ s(F, { label: k, style: U, text: U.color }, k);
    O = h(Ie(z), I);
    const b = xe(I, t, l, a, i);
    if (b) {
      const T = nn("#FFF", b[0]);
      let D = !1;
      return (t.columns.navigate && I[t.columns.navigate.name] || S === "click") && (D = !0), U = {
        color: T,
        fill: b[0],
        cursor: D ? "pointer" : "default",
        "&:hover": {
          fill: b[1]
        },
        "&:active": {
          fill: b[2]
        }
      }, /* @__PURE__ */ s(
        F,
        {
          label: k,
          css: U,
          text: U.color,
          stroke: N,
          strokeWidth: 1,
          onClick: () => g(z, I),
          "data-tooltip-id": `tooltip__${n}`,
          "data-tooltip-html": O
        },
        k
      );
    }
  }), _ = (z, F) => z.map(({ feature: I, path: O = "", index: U }) => {
    const k = m ? I.properties.iso + "-hex-group" : I.properties.iso + "-group";
    let b = {
      fill: P,
      cursor: "default"
    }, T = I.properties.iso;
    if (!T)
      return;
    const D = e[T];
    let A;
    D !== void 0 && (A = xe(D, t, l, a, i));
    const $ = Ie(T);
    if (A && A[0] !== "#000000") {
      const V = h($, D);
      b = {
        fill: f !== "bubble" ? A[0] : P,
        cursor: "default",
        "&:hover": {
          fill: f !== "bubble" ? A[1] : P
        },
        "&:active": {
          fill: f !== "bubble" ? A[2] : P
        }
      }, (t.columns.navigate && D[t.columns.navigate.name] || S === "click") && (b.cursor = "pointer");
      const B = (G) => {
        const { posX: W = 0, tName: H } = G, Z = nn("#FFF", A[0]), X = Wt(t);
        return /* @__PURE__ */ M(le, { children: [
          /* @__PURE__ */ s("rect", { x: W, width: "36", height: "24", rx: "2", stroke: X, strokeWidth: "1" }),
          /* @__PURE__ */ s("text", { textAnchor: "middle", x: 36 / 2 + W, y: "17", fill: Z, children: H })
        ] });
      };
      return /* @__PURE__ */ M(
        "g",
        {
          className: "geo-group",
          style: b,
          onClick: () => g($, D),
          "data-tooltip-id": `tooltip__${n}`,
          "data-tooltip-html": V,
          tabIndex: -1,
          children: [
            /* @__PURE__ */ s("path", { tabIndex: -1, className: "single-geo", stroke: N, strokeWidth: 1, d: O }),
            /* @__PURE__ */ M("g", { id: `region-${U + 1}-label`, children: [
              /* @__PURE__ */ s("circle", { fill: "#fff", stroke: "#999", cx: C, cy: C, r: C }),
              /* @__PURE__ */ s("text", { fill: "#333", x: "15px", y: "20px", textAnchor: "middle", children: U + 1 })
            ] }),
            T === "region 2" && /* @__PURE__ */ M("g", { id: "region-2-territories", children: [
              /* @__PURE__ */ s(B, { tName: "PR" }),
              /* @__PURE__ */ s(B, { posX: 45, tName: "VI" })
            ] }),
            T === "region 9" && /* @__PURE__ */ M("g", { id: "region-9-territories", children: [
              /* @__PURE__ */ M("g", { className: "region-9-row1", children: [
                /* @__PURE__ */ s(B, { tName: "AS" }),
                /* @__PURE__ */ s(B, { posX: 45, tName: "GU" }),
                /* @__PURE__ */ s(B, { posX: 90, tName: "MP" })
              ] }),
              /* @__PURE__ */ M("g", { className: "region-9-row2", children: [
                /* @__PURE__ */ s(B, { tName: "FM" }),
                /* @__PURE__ */ s(B, { posX: 45, tName: "PW" }),
                /* @__PURE__ */ s(B, { posX: 90, tName: "MH" })
              ] })
            ] })
          ]
        },
        k
      );
    }
    return /* @__PURE__ */ s("g", { className: "geo-group", style: b, children: /* @__PURE__ */ s("path", { tabIndex: -1, className: "single-geo", stroke: N, strokeWidth: 1, d: O }) }, k);
  });
  return /* @__PURE__ */ M(jt, { component: "UsaRegionMap", children: [
    /* @__PURE__ */ M("svg", { viewBox: en, role: "img", "aria-label": tn(t), children: [
      /* @__PURE__ */ s(ci, { data: o, scale: 620, translate: [1500, 735], children: ({ features: z, projection: F }) => _(z) }),
      t.annotations.length > 0 && /* @__PURE__ */ s(ea.Draggable, {})
    ] }),
    x.length > 0 && /* @__PURE__ */ M("section", { className: "territories", children: [
      /* @__PURE__ */ s("span", { className: "label", children: u }),
      x
    ] })
  ] });
}, k2 = E.memo(v2);
var w2 = "Expected a function", ql = 0 / 0, L2 = "[object Symbol]", T2 = /^\s+|\s+$/g, N2 = /^[-+]0x[0-9a-f]+$/i, M2 = /^0b[01]+$/i, E2 = /^0o[0-7]+$/i, x2 = parseInt, P2 = typeof ca == "object" && ca && ca.Object === Object && ca, D2 = typeof self == "object" && self && self.Object === Object && self, A2 = P2 || D2 || Function("return this")(), R2 = Object.prototype, I2 = R2.toString, O2 = Math.max, $2 = Math.min, _i = function() {
  return A2.Date.now();
};
function z2(e, t, n) {
  var a, i, l, o, r, g, h = 0, c = !1, d = !1, u = !0;
  if (typeof e != "function")
    throw new TypeError(w2);
  t = Zl(t) || 0, Vr(n) && (c = !!n.leading, d = "maxWait" in n, l = d ? O2(Zl(n.maxWait) || 0, t) : l, u = "trailing" in n ? !!n.trailing : u);
  function p(P) {
    var x = a, _ = i;
    return a = i = void 0, h = P, o = e.apply(_, x), o;
  }
  function f(P) {
    return h = P, r = setTimeout(y, t), c ? p(P) : o;
  }
  function S(P) {
    var x = P - g, _ = P - h, z = t - x;
    return d ? $2(z, l - _) : z;
  }
  function m(P) {
    var x = P - g, _ = P - h;
    return g === void 0 || x >= t || x < 0 || d && _ >= l;
  }
  function y() {
    var P = _i();
    if (m(P))
      return v(P);
    r = setTimeout(y, S(P));
  }
  function v(P) {
    return r = void 0, u && a ? p(P) : (a = i = void 0, o);
  }
  function C() {
    r !== void 0 && clearTimeout(r), h = 0, a = g = i = r = void 0;
  }
  function w() {
    return r === void 0 ? o : v(_i());
  }
  function N() {
    var P = _i(), x = m(P);
    if (a = arguments, i = this, g = P, x) {
      if (r === void 0)
        return f(g);
      if (d)
        return r = setTimeout(y, t), p(g);
    }
    return r === void 0 && (r = setTimeout(y, t)), o;
  }
  return N.cancel = C, N.flush = w, N;
}
function Vr(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function _2(e) {
  return !!e && typeof e == "object";
}
function U2(e) {
  return typeof e == "symbol" || _2(e) && I2.call(e) == L2;
}
function Zl(e) {
  if (typeof e == "number")
    return e;
  if (U2(e))
    return ql;
  if (Vr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Vr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(T2, "");
  var n = M2.test(e);
  return n || E2.test(e) ? x2(e.slice(2), n ? 2 : 8) : N2.test(e) ? ql : +e;
}
var F2 = z2;
const G2 = /* @__PURE__ */ bs(F2), B2 = (e, t, n) => {
  const l = n.mapPosition.zoom > 1 ? Number(e.geoRadius * 1) * 0.75 : e.geoRadius * 1;
  t.lineWidth = 1, t.fillStyle = e.color, t.beginPath(), t.arc(e.x, e.y, l, 0, 2 * Math.PI), t.fill(), t.stroke();
}, V2 = (e, t, n) => {
  const l = e.size * 1.75, o = n.mapPosition.zoom > 1 ? l * 0.75 : l;
  t.lineWidth = e.lineWidth, t.fillStyle = e.color, t.beginPath();
  const r = o / 2, g = e.x - r, h = e.y - r;
  t.rect(g, h, o, o), t.fill(), t.stroke();
}, W2 = (e, t, n) => {
  const l = e.size * 2.2, o = n.mapPosition.zoom > 1 ? l * 0.75 : l;
  t.lineWidth = e.lineWidth, t.fillStyle = e.color, t.beginPath();
  const r = e.x, g = e.y - o / 2, h = e.x + o / 2, c = e.y, d = e.x, u = e.y + o / 2, p = e.x - o / 2, f = e.y;
  t.moveTo(r, g), t.lineTo(h, c), t.lineTo(d, u), t.lineTo(p, f), t.closePath(), t.fill(), t.stroke();
}, j2 = (e, t, n) => {
  const l = e.size * 2.2, o = n.mapPosition.zoom > 1 ? l * 0.75 : l, r = o * Math.sqrt(3) / 2;
  t.lineWidth = e.lineWidth, t.fillStyle = e.color, t.beginPath();
  const g = e.x, h = e.y - r / 2, c = e.x - o / 2, d = e.y + r / 2, u = e.x + o / 2, p = d;
  t.moveTo(g, h), t.lineTo(c, d), t.lineTo(u, p), t.closePath(), t.fill(), t.stroke();
}, H2 = (e, t, n) => {
  const l = e.spikes, o = e.outerRadius * 2.2, r = e.innerRadius * 2.2, g = n.mapPosition.zoom > 1 ? o * 0.75 : o, h = n.mapPosition.zoom > 1 ? r * 0.75 : r;
  t.lineWidth = e.lineWidth, t.fillStyle = e.color, t.beginPath();
  const c = Math.PI / 2;
  let d = c;
  const u = Math.PI / l;
  let p = e.x + Math.cos(d) * g, f = e.y + Math.sin(d) * g;
  t.moveTo(p, f);
  for (let S = 0; S < l; S++)
    p = e.x + Math.cos(d) * g, f = e.y + Math.sin(d) * g, t.lineTo(p, f), d += u, p = e.x + Math.cos(d) * h, f = e.y + Math.sin(d) * h, t.lineTo(p, f), d += u;
  p = e.x + Math.cos(c) * g, f = e.y + Math.sin(c) * g, t.lineTo(p, f), t.closePath(), t.fill(), t.stroke();
}, q2 = (e, t, n) => {
  const l = e.size * 10, o = n.mapPosition.zoom > 1 ? l * 0.75 : l;
  t.save(), t.translate(e.x, e.y), t.scale(o / l, o / l), t.beginPath(), t.moveTo(0, 0), t.bezierCurveTo(2 * o / 100, -10 * o / 100, -20 * o / 100, -25 * o / 100, 0, -30 * o / 100), t.bezierCurveTo(20 * o / 100, -25 * o / 100, -2 * o / 100, -10 * o / 100, 0, 0), t.fillStyle = e.color, t.fill(), t.strokeStyle = "black", t.lineWidth = 1, t.stroke(), t.beginPath(), t.arc(0, -21 * o / 100, 3 * o / 100, 0, Math.PI * 2), t.closePath(), t.fill(), t.restore();
}, Kl = (e, t, n, a) => {
  const l = {
    circle: B2,
    square: V2,
    diamond: W2,
    triangle: j2,
    star: H2,
    pin: q2
  }[e.type];
  l ? l(e, t, n, a) : console.error("Shape type not recognized or draw function not available:", e.type);
}, Yl = (e, t, n, a, i) => {
  const l = {
    x: t[0],
    y: t[1],
    color: n[0],
    size: i,
    lineWidth: 1
  };
  switch (e) {
    case "circle":
      return { ...l, geoRadius: i, type: "circle" };
    case "pin":
      return { ...l, type: "pin" };
    case "square":
      return { ...l, type: "square" };
    case "triangle":
      return { ...l, type: "triangle" };
    case "diamond":
      return { ...l, type: "diamond" };
    case "star":
      return {
        ...l,
        spikes: 5,
        outerRadius: a.visual.geoCodeCircleSize / 3,
        innerRadius: a.visual.geoCodeCircleSize / 3 * 2,
        type: "star"
      };
    default:
      return null;
  }
}, bt = (e) => `https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/cb_${e}_us_county_20m.json`, Xl = (e, t) => e.id < t.id ? -1 : t.id < e.id ? 1 : 0, Z2 = (e) => new Promise((t) => {
  const n = async (i) => {
    i.status !== 200 ? i = await import(
      /* webpackChunkName: "cb_2019_us_county_20m" */
      "./storybook-cb_2019_us_county_20m-548642e6.es.js"
    ) : i = await i.json();
    let l = {
      year: void 0,
      counties: void 0,
      states: void 0,
      mapData: void 0,
      countyIndecies: void 0,
      projection: void 0
    };
    l.year = e || "default", l.counties = Nt(i, i.objects.counties).features, l.states = Nt(i, i.objects.states).features, l.states.sort(Xl), l.counties.sort(Xl), l.mapData = l.states.concat(l.counties).filter((o) => o.id !== "51620"), l.countyIndecies = {}, l.states.forEach((o) => {
      let r = l.mapData.length - 1, g = 0;
      for (let h = 0; h < l.mapData.length; h++)
        l.mapData[h].id.length > 2 && l.mapData[h].id.indexOf(o.id) === 0 && (h < r && (r = h), h > g && (g = h));
      l.countyIndecies[o.id] = [r, g];
    }), l.projection = Cn(), t(l);
  }, a = parseInt(e);
  if (isNaN(a))
    fetch(bt(2019)).then(n);
  else if (a > 2022)
    fetch(bt(2022)).then(n);
  else if (a < 2013)
    fetch(bt(2013)).then(n);
  else
    switch (a) {
      case 2022:
        fetch(bt(2022)).then(n);
        break;
      case 2021:
        fetch(bt(2021)).then(n);
        break;
      case 2020:
        fetch(bt(2020)).then(n);
        break;
      case 2018:
      case 2017:
      case 2016:
      case 2015:
        fetch(bt(2015)).then(n);
        break;
      case 2014:
        fetch(bt(2014)).then(n);
        break;
      case 2013:
        fetch(bt(2013)).then(n);
        break;
      default:
        fetch(bt(2019)).then(n);
        break;
    }
}), Ac = (e, t) => {
  let n = e.general.countyCensusYear;
  if (e.general.filterControlsCountyYear && t && t.length > 0) {
    let a = t.filter((i) => i.columnName === e.general.filterControlsCountyYear);
    a.length > 0 && a[0].active && (n = a[0].active);
  }
  return n || "default";
}, Ui = (e, t, n) => {
  let a = Ac(t, n);
  return e.year && (!a || a === e.year);
}, K2 = () => {
  const {
    container: e,
    containerEl: t,
    data: n,
    runtimeFilters: a,
    runtimeLegend: i,
    setConfig: l,
    config: o,
    tooltipId: r,
    tooltipRef: g,
    legendMemo: h,
    legendSpecialClassLastMemo: c
  } = E.useContext(fe), d = Wt(o), { geoClickHandler: u } = ln(), { applyTooltipsToGeo: p } = Ht(), [f, S] = E.useState({}), [m, y] = E.useState({}), v = yn().projection(Cn()), { featureArray: C } = Xr(o, l, v, r);
  E.useEffect(() => {
    t && t.className.indexOf("loaded") === -1 && (t.className += " loaded");
  }), E.useEffect(() => {
    let O = Ac(o, a);
    O !== m.year && Z2(O).then((U) => {
      N.current && N.current.getContext("2d").clearRect(N.current.width, N.current.height), y(U);
    });
  }, [o.general.countyCensusYear, o.general.filterControlsCountyYear, JSON.stringify(a)]), E.useEffect(() => {
    Ui(m, o, a) && I();
    const U = G2(() => {
      N.current && Ui(m, o, a) && I();
    }, 300);
    return window.addEventListener("resize", U), () => window.removeEventListener("resize", U);
  });
  const w = E.useRef(), N = E.useRef();
  if (!n || !Ui(m, o, a))
    return /* @__PURE__ */ s("div", { style: { height: 300 }, children: /* @__PURE__ */ s(ys, {}) });
  const P = Object.keys(n), x = 1, _ = () => {
    l({
      ...o,
      mapPosition: { coordinates: [0, 30], zoom: 1 }
    }), S({});
  }, z = (O) => {
    const k = O.target.getBoundingClientRect(), b = O.clientX - k.left, T = O.clientY - k.top, D = m.projection.invert([b, T]);
    let A;
    for (let $ = 0; $ < m.states.length; $++)
      if (xn(m.states[$], D)) {
        A = m.states[$];
        break;
      }
    if (A) {
      if (l({
        ...o,
        mapPosition: { coordinates: [0, 30], zoom: 3 }
      }), m.countyIndecies[A.id]) {
        let V;
        for (let B = m.countyIndecies[A.id][0]; B <= m.countyIndecies[A.id][1]; B++)
          if (xn(m.mapData[B], D)) {
            V = m.mapData[B];
            break;
          }
        V && n[V.id] && u(Ie(V.id), n[V.id]);
      }
      let $ = -1;
      for (let V = 0; V < m.mapData.length; V++)
        if (m.mapData[V].id === A.id) {
          $ = V;
          break;
        }
      S({ id: A.id, index: $, center: ta(A), feature: A });
    }
    if (o.general.type === "us-geocode") {
      const $ = (o.visual.geoCodeCircleSize || 5) * (f.id ? 2 : 1);
      let V;
      for (let B = 0; B < P.length; B++) {
        const G = m.projection([
          n[P[B]][o.columns.longitude.name],
          n[P[B]][o.columns.latitude.name]
        ]);
        if (G && Math.sqrt(Math.pow(G[0] - b, 2) + Math.pow(G[1] - T, 2)) < $) {
          V = n[P[B]];
          break;
        }
      }
      V && u(Ie(V[o.columns.geo.name]), V);
    }
  }, F = (O) => {
    if (!g.current || o.tooltips.appearanceType !== "hover" || window.matchMedia("(any-hover: none)").matches)
      return;
    const U = O.target, k = U.getBoundingClientRect(), b = O.clientX - k.left, T = O.clientY - k.top, D = e == null ? void 0 : e.getBoundingClientRect(), A = O.clientX - ((D == null ? void 0 : D.left) || 0), $ = O.clientY - ((D == null ? void 0 : D.top) || 0);
    let V = m.projection.invert([b, T]);
    const B = parseInt(g.current.getAttribute("data-index")), G = (o.visual.geoCodeCircleSize || 5) * (f.id ? 2 : 1), W = U.getContext("2d"), H = yn(m.projection, W);
    if (o.general.type !== "us-geocode") {
      if (isNaN(B) || !xn(m.mapData[B], V)) {
        !isNaN(B) && xe(
          n[m.mapData[B].id],
          o,
          i,
          h,
          c
        ) && (W.fillStyle = xe(
          n[m.mapData[B].id],
          o,
          i,
          h,
          c
        )[0], W.strokeStyle = d, W.lineWidth = x, W.beginPath(), H(m.mapData[B]), W.fill(), W.stroke());
        let Z, X, J;
        for (let ee = 0; ee < m.states.length; ee++)
          if (xn(m.states[ee], V)) {
            Z = m.states[ee].id;
            break;
          }
        if (Z && (!f.id || f.id === Z) && m.countyIndecies[Z]) {
          for (let ee = m.countyIndecies[Z][0]; ee <= m.countyIndecies[Z][1]; ee++)
            if (xn(m.mapData[ee], V)) {
              X = m.mapData[ee], J = ee;
              break;
            }
        }
        if (X && n[X.id]) {
          if (xe(n[X.id], o, i, h, c)) {
            let ee = xe(
              n[X.id],
              o,
              i,
              h,
              c
            )[0];
            if (ee === "#000000")
              return;
            W.globalAlpha = 1, W.fillStyle = ee, W.strokeStyle = d, W.lineWidth = x, W.beginPath(), H(m.mapData[J]), W.fill(), W.stroke();
          }
          g.current.style.display = "block", g.current.style.top = $ + "px", A > D.width / 2 ? (g.current.style.transform = "translate(-100%, -50%)", g.current.style.left = A - 5 + "px") : (g.current.style.transform = "translate(0, -50%)", g.current.style.left = A + 5 + "px"), g.current.innerHTML = p(Ie(X.id), n[X.id]), g.current.setAttribute("data-index", J);
        } else
          g.current.style.display = "none", g.current.setAttribute("data-index", null);
      }
    } else {
      if (!isNaN(B)) {
        const J = m.projection([
          n[P[B]][o.columns.longitude.name],
          n[P[B]][o.columns.latitude.name]
        ]);
        if (J && Math.sqrt(Math.pow(J[0] - b, 2) + Math.pow(J[1] - T, 2)) < G)
          return;
      }
      let Z, X;
      for (let J = 0; J < P.length; J++) {
        const ee = m.projection([
          n[P[J]][o.columns.longitude.name],
          n[P[J]][o.columns.latitude.name]
        ]);
        if (["circle", "diamond", "star", "triangle", "square"].includes(o.visual.cityStyle) && ee && Math.sqrt(Math.pow(ee[0] - b, 2) + Math.pow(ee[1] - T, 2)) < G && xe(n[P[J]], o, i, h, c)) {
          Z = n[P[J]], X = J;
          break;
        }
        if (o.visual.cityStyle === "pin" && ee && Math.hypot(ee[0] - b, ee[1] - T) < 15 && xe(n[P[J]], o, i, h, c)) {
          Z = n[P[J]], X = J;
          break;
        }
      }
      Z ? (g.current.style.display = "block", g.current.style.top = $ + "px", A > D.width / 2 ? (g.current.style.transform = "translate(-100%, -50%)", g.current.style.left = A - 5 + "px") : (g.current.style.transform = "translate(0, -50%)", g.current.style.left = A + 5 + "px"), g.current.innerHTML = p(
        Ie(Z[o.columns.geo.name]),
        Z
      ), g.current.setAttribute("data-index", X)) : (g.current.style.display = "none", g.current.setAttribute("data-index", null));
    }
    f.index !== -1 && (W.strokeStyle = d, W.lineWidth = 1, W.beginPath(), H(m.mapData[f.index]), W.stroke());
  }, I = () => {
    if (N.current && i.items.length > 0) {
      const O = N.current, U = O.getContext("2d"), k = yn(m.projection, U);
      if (O.width = O.clientWidth, O.height = O.width * 0.6, m.projection.scale(O.width * 1.25).translate([O.width / 2, O.height / 2]), f.id ? w.current && (w.current.style.display = "block") : w.current && (w.current.style.display = "none"), f.feature) {
        const T = [
          [10, 10],
          [O.width - 0, O.height - 10]
        ];
        m.projection.fitExtent(T, f.feature);
      }
      if (U.clearRect(0, 0, O.width, O.height), U.strokeStyle = d, m.mapData.forEach((b) => {
        if (!b.id || f.id && b.id.length > 2 && b.id.indexOf(f.id) !== 0 || !f.id && o.general.type === "us-geocode" && b.id.length > 2)
          return;
        const T = n[b.id], D = T !== void 0 ? xe(T, o, i, h, c) : !1;
        U.fillStyle = D && o.general.type !== "us-geocode" ? D[0] === "#000000" ? No : D[0] : No, U.beginPath(), k(b), U.fill(), U.stroke();
      }), f.index !== -1 && (U.strokeStyle = d, U.lineWidth = 2, U.beginPath(), k(m.mapData[f.index]), U.stroke()), C.length > 0 && C.map((b) => {
        U.beginPath(), k(b), U.fillStyle = b.properties.fill, U.strokeStyle = d, U.lineWidth = b.properties["stroke-width"], U.fill(), U.stroke();
      }), o.general.type === "us-geocode") {
        U.strokeStyle = d;
        const b = (o.visual.geoCodeCircleSize || 5) * (f.id ? 2 : 1), { additionalCityStyles: T } = o.visual || [], D = Object.values(n).filter(($) => T.some((V) => String($[V.column]) === String(V.value))).map(($) => ({ ...T.find(
          (B) => String($[B.column]) === String(B.value)
        ), ...$ }));
        let A = [];
        D.forEach(($) => {
          var V;
          if (A = m.projection([
            $[o.columns.longitude.name],
            $[o.columns.latitude.name]
          ]), A) {
            const B = xe(
              n[$ == null ? void 0 : $.value],
              o,
              i,
              h,
              c
            );
            if (B) {
              if ((B == null ? void 0 : B[0]) === "#000000")
                return;
              const G = (V = $ == null ? void 0 : $.shape) == null ? void 0 : V.toLowerCase(), W = Yl(G, A, B, o, b);
              W && Kl(W, U, o, x);
            }
          }
        }), P.forEach(($) => {
          const V = new Set(D.map((G) => G.value)), B = m.projection([
            n[$][o.columns.longitude.name],
            n[$][o.columns.latitude.name]
          ]);
          if (B && !V.has($)) {
            const G = n[$] !== void 0 ? xe(n[$], o, i, h, c) : !1;
            if (G) {
              if ((G == null ? void 0 : G[0]) === "#000000")
                return;
              const W = o.visual.cityStyle.toLowerCase(), H = Yl(W, B, G, o, b);
              H && Kl(H, U, o, x);
            }
          }
        });
      }
    }
  };
  return /* @__PURE__ */ M(jt, { component: "CountyMap", children: [
    /* @__PURE__ */ s(
      "canvas",
      {
        ref: N,
        "aria-label": tn(o),
        onMouseMove: F,
        onMouseOut: () => {
          g.current.style.display = "none", g.current.setAttribute("data-index", null);
        },
        onClick: z,
        className: "county-map-canvas"
      }
    ),
    /* @__PURE__ */ s("button", { className: "btn btn--reset btn-primary p-absolute", onClick: _, ref: w, tabIndex: 0, children: "Reset Zoom" })
  ] });
}, Y2 = ({ path: e, counties: t, scale: n, geoStrokeColor: a, tooltipId: i }) => {
  const { config: l, data: o, geoClickHandler: r, legendMemo: g, legendSpecialClassLastMemo: h, runtimeLegend: c } = E.useContext(fe), { applyTooltipsToGeo: d } = Ht(), u = Tn();
  return /* @__PURE__ */ s(le, { children: t.map((p) => {
    const f = p.id;
    if (!f)
      return null;
    const S = e(p), m = o[p.id];
    let y;
    m !== void 0 && (y = xe(m, l, c, g, h));
    const v = Ie(f);
    if (v === "Franklin City" || v === "Waynesboro")
      return null;
    const C = d(v, m);
    if (y && y[0] !== "#000000") {
      const w = {
        fill: y[0],
        cursor: "default",
        "&:hover": {
          fill: y[1]
        },
        "&:active": {
          fill: y[2]
        }
      };
      return (l.columns.navigate && m[l.columns.navigate.name] || l.tooltips.appearanceType === "hover") && (w.cursor = "pointer"), /* @__PURE__ */ s(
        "g",
        {
          className: `county county--${v.split(" ").join("")} county--${m[l.columns.geo.name]}`,
          style: w,
          onClick: () => r(v, m),
          "data-tooltip-id": `tooltip__${i}`,
          "data-tooltip-html": C,
          children: /* @__PURE__ */ s(
            "path",
            {
              tabIndex: -1,
              className: "county",
              stroke: a,
              d: S,
              strokeWidth: 0.75 / n
            }
          )
        },
        `key--${p.id}`
      );
    } else
      return /* @__PURE__ */ s(
        "g",
        {
          className: `county county--${v.split(" ").join("")}`,
          style: { fill: u },
          "data-tooltip-id": `tooltip__${i}`,
          "data-tooltip-html": C,
          children: /* @__PURE__ */ s(
            "path",
            {
              tabIndex: -1,
              className: "county",
              stroke: a,
              d: S,
              strokeWidth: 0.75 / n
            }
          )
        },
        `key--${p.id}`
      );
  }) });
}, X2 = ({ topoData: e, path: t, scale: n, stateToShow: a }) => {
  var h;
  const { config: i } = E.useContext(fe);
  if (!((h = e == null ? void 0 : e.objects) != null && h.states))
    return null;
  let l = e.objects.states.geometries.filter((c) => c.properties.name === i.general.statePicked.stateName);
  const o = Wt(i), r = Tn();
  let g = t(E0(e, l[0]));
  return /* @__PURE__ */ s(
    "g",
    {
      className: "single-state",
      style: { fill: r },
      stroke: o,
      strokeWidth: 0.95 / n,
      children: /* @__PURE__ */ s("path", { tabIndex: -1, className: "state-path", d: g })
    },
    "single-state"
  );
}, Jl = {
  StateOutput: X2,
  CountyOutput: Y2
}, Ql = (e, t, n) => {
  const a = (e * n.k - e) / 2, i = (t * n.k - t) / 2;
  return [e / 2 - (a + n.x) / n.k, t / 2 - (i + n.y) / n.k];
};
function J2({
  center: e,
  filterZoomEvent: t,
  onMoveStart: n,
  onMoveEnd: a,
  onMove: i,
  translateExtent: l = [
    [-1 / 0, -1 / 0],
    [1 / 0, 1 / 0]
  ],
  scaleExtent: o = [1, 8],
  zoom: r = 1,
  width: g,
  height: h,
  projection: c
}) {
  const [d, u] = e, [p, f] = E.useState({ x: 0, y: 0, k: 1 }), S = E.useRef({ x: 0, y: 0, k: 1 }), m = E.useRef(), y = E.useRef(), v = E.useRef(!1), [C, w] = l, [N, P] = C, [x, _] = w, [z, F] = o;
  return E.useEffect(() => {
    const I = Jt(m.current), O = (D) => {
      !n || v.current || n({ coordinates: c.invert(Ql(g, h, D.transform)), zoom: D.transform.k }, D);
    }, U = (D) => {
      if (v.current)
        return;
      const { transform: A, sourceEvent: $ } = D;
      f({ x: A.x, y: A.y, k: A.k, dragging: $ }), i && i({ x: A.x, y: A.y, k: A.k, dragging: $ }, D);
    }, k = (D) => {
      if (v.current) {
        v.current = !1;
        return;
      }
      const [A, $] = c.invert(Ql(g, h, D.transform));
      S.current = { x: A, y: $, k: D.transform.k }, a && a({ coordinates: [A, $], zoom: D.transform.k }, D);
    }, b = (D) => t ? t(D) : D ? !D.ctrlKey && !D.button : !1, T = n0().filter(b).scaleExtent([z, F]).translateExtent([
      [N, P],
      [x, _]
    ]).on("start", O).on("zoom", U).on("end", k);
    y.current = T, I.call(T);
  }, [g, h, N, P, x, _, z, F, c, n, i, a, t]), E.useEffect(() => {
    if (d === S.current.x && u === S.current.y && r === S.current.k)
      return;
    const I = c([d, u]);
    if (!I)
      return;
    const O = I[0] * r, U = I[1] * r, k = Jt(m.current);
    v.current = !0, k.call(y.current.transform, Zr.translate(g / 2 - O, h / 2 - U).scale(r)), f({ x: g / 2 - O, y: h / 2 - U, k: r }), S.current = { x: d, y: u, k: r };
  }, [d, u, r, g, h, c]), {
    mapRef: m,
    position: p,
    transformString: `translate(${p.x} ${p.y}) scale(${p.k})`
  };
}
const Wr = ({ center: e = [0, 0], zoom: t = 1, minZoom: n = 1, maxZoom: a = 8, translateExtent: i, filterZoomEvent: l, onMoveStart: o, onMove: r, onMoveEnd: g, className: h, projection: c, width: d, height: u, ...p }) => {
  const { mapRef: f, transformString: S } = J2({
    center: e,
    filterZoomEvent: l,
    onMoveStart: o,
    onMove: r,
    onMoveEnd: g,
    scaleExtent: [n, a],
    translateExtent: i,
    zoom: t,
    width: d,
    height: u,
    projection: c
  });
  return /* @__PURE__ */ M("g", { ref: f, children: [
    /* @__PURE__ */ s("rect", { width: d, height: u, fill: "transparent" }),
    /* @__PURE__ */ s("g", { transform: S, ...p })
  ] });
};
const Rc = ({ handleZoomIn: e, handleZoomOut: t, handleReset: n }) => {
  const { config: a, setRuntimeData: i, position: l } = E.useContext(fe);
  if (a.general.allowMapZoom)
    return /* @__PURE__ */ M("div", { className: "zoom-controls", "data-html2canvas-ignore": "true", children: [
      /* @__PURE__ */ s("button", { onClick: () => e(l), "aria-label": "Zoom In", children: /* @__PURE__ */ M("svg", { viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "3", children: [
        /* @__PURE__ */ s("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
        /* @__PURE__ */ s("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
      ] }) }),
      /* @__PURE__ */ s("button", { onClick: () => t(l), "aria-label": "Zoom Out", children: /* @__PURE__ */ s("svg", { viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ s("line", { x1: "5", y1: "12", x2: "19", y2: "12" }) }) }),
      a.general.type === "bubble" && /* @__PURE__ */ s("button", { onClick: () => n(i), className: "reset", "aria-label": "Reset Zoom and Map Filters", children: "Reset Filters" }),
      (a.general.type === "world-geocode" || a.general.geoType === "single-state") && /* @__PURE__ */ s("button", { onClick: () => n(i), className: "reset", "aria-label": "Reset Zoom", children: "Reset Zoom" })
    ] });
}, Q2 = (e) => {
  var v;
  const { config: t, runtimeData: n, position: a } = E.useContext(fe), i = xc(t, n), l = E.useContext(it);
  E.useEffect(() => {
    var _;
    const N = { fipsCode: Object.keys(Bt).find((z) => Bt[z] === i), stateName: i }, P = ne.cloneDeep(t);
    P.general.statePicked = N;
    const x = (_ = e == null ? void 0 : e.states) == null ? void 0 : _.find((z) => z.properties.name === i);
    l({ type: "SET_SCALE", payload: 1 }), l({ type: "SET_TRANSLATE", payload: [0, 0] }), l({ type: "SET_CONFIG", payload: P }), l({ type: "SET_STATE_TO_SHOW", payload: x });
  }, [e]), E.useEffect(() => {
    const N = { fipsCode: Object.keys(Bt).find((x) => Bt[x] === i), stateName: i }, P = ne.cloneDeep(t);
    P.general.statePicked = N, l({ type: "SET_CONFIG", payload: P }), p("reset");
  }, [i]);
  const o = Cn().translate([_e / 2, Ue / 2]).scale(1), r = (v = e == null ? void 0 : e.states) == null ? void 0 : v.find((C) => C.properties.name === i), g = o.fitExtent(
    [
      [ze, ze],
      [_e - ze, Ue - ze]
    ],
    r
  );
  g.translate();
  const c = yn().projection(o).centroid(r), d = g.invert(c), u = () => {
    l({ type: "SET_STATE_TO_SHOW", payload: r }), p("reset");
  }, p = (C = "") => {
    const w = a;
    let N = w.zoom, P = w.coordinates;
    C === "zoomIn" && w.zoom < 4 ? (N = w.zoom * 1.5, P = w.coordinates[0] !== 0 && w.coordinates[1] !== 0 ? w.coordinates : d) : C === "zoomOut" && w.zoom > 1 ? (N = w.zoom / 1.5, P = w.coordinates[0] !== 0 && w.coordinates[1] !== 0 ? w.coordinates : d) : C === "reset" && (N = 1, P = d), l({ type: "SET_POSITION", payload: { coordinates: P, zoom: N } }), C === "reset" && (l({ type: "SET_TRANSLATE", payload: [0, 0] }), l({ type: "SET_SCALE", payload: 1 }));
  };
  return {
    statePicked: i,
    setScaleAndTranslate: p,
    switchState: u,
    handleZoomIn: () => {
      p("zoomIn");
    },
    handleZoomOut: () => {
      p("zoomOut");
    },
    handleMoveEnd: (C) => {
      l({ type: "SET_POSITION", payload: C });
    },
    handleReset: () => {
      p("reset");
    },
    projection: o
  };
};
const eh = () => {
  const {
    config: e,
    setSharedFilterValue: t,
    isFilterValueSupported: n,
    runtimeFilters: a,
    tooltipId: i,
    position: l,
    stateToShow: o,
    topoData: r,
    scale: g,
    translate: h,
    legendMemo: c,
    legendSpecialClassLastMemo: d
  } = E.useContext(fe), u = E.useContext(it), { handleMoveEnd: p, handleZoomIn: f, handleZoomOut: S, handleReset: m, projection: y, statePicked: v } = Q2(r), { geoClickHandler: C } = ln(), w = Cn().translate([_e / 2, Ue / 2]).scale(1), N = Wt(e), P = yn().projection(y);
  if (E.useEffect(() => {
    var F;
    const z = (F = r == null ? void 0 : r.states) == null ? void 0 : F.find((I) => I.properties.name === e.general.statePicked.stateName);
    u({ type: "SET_STATE_TO_SHOW", payload: z });
  }, [v]), E.useEffect(() => {
    let z = Ec(e, a);
    z !== (r == null ? void 0 : r.year) && o2(z).then((F) => {
      u({ type: "SET_TOPO_DATA", payload: F });
    });
  }, [e.general.countyCensusYear, e.general.filterControlsCountyYear, JSON.stringify(a)]), !l2(r, e, a))
    return /* @__PURE__ */ s("div", { style: { height: `${Ue}px` }, children: /* @__PURE__ */ s(ys, {}) });
  const x = () => {
    if (!e.general.statePicked.fipsCode)
      return !0;
  }, _ = (z) => {
    const F = z[0].feature.counties;
    let I = [];
    return I.push(
      // prettier-ignore
      /* @__PURE__ */ s(
        Jl.StateOutput,
        {
          topoData: r,
          path: P,
          scale: g
        }
      )
    ), I.push(
      // prettier-ignore
      /* @__PURE__ */ s(
        Jl.CountyOutput,
        {
          counties: F,
          scale: g,
          geoStrokeColor: N,
          tooltipId: i,
          path: P
        }
      )
    ), I.push(
      /* @__PURE__ */ s(
        uo,
        {
          projection: w,
          geoClickHandler: C,
          titleCase: Jn,
          setSharedFilterValue: t,
          isFilterValueSupported: n,
          tooltipId: i
        },
        "cities"
      )
    ), I;
  };
  return /* @__PURE__ */ M(jt, { component: "SingleStateMap", children: [
    v && e.general.allowMapZoom && e.general.statePicked.fipsCode && /* @__PURE__ */ s(
      "svg",
      {
        viewBox: en,
        preserveAspectRatio: "xMinYMin",
        className: "svg-container",
        role: "img",
        "aria-label": tn(e),
        children: /* @__PURE__ */ M(
          Wr,
          {
            center: l.coordinates,
            zoom: l.zoom,
            minZoom: 1,
            maxZoom: gs,
            onMoveEnd: p,
            projection: y,
            width: _e,
            height: Ue,
            children: [
              /* @__PURE__ */ s(
                "rect",
                {
                  className: "background center-container ocean",
                  width: _e,
                  height: Ue,
                  fillOpacity: 1,
                  fill: "white"
                }
              ),
              /* @__PURE__ */ s(
                Fl,
                {
                  data: [
                    {
                      states: r == null ? void 0 : r.states,
                      counties: r.counties.filter((z) => z.id.substring(0, 2) === e.general.statePicked.fipsCode)
                    }
                  ],
                  projection: Cn,
                  fitExtent: [
                    [
                      [ze, ze],
                      [_e - ze, Ue - ze]
                    ],
                    o
                  ],
                  children: ({ features: z, projection: F }) => /* @__PURE__ */ s(
                    "g",
                    {
                      id: "mapGroup",
                      className: `countyMapGroup ${e.general.geoType === "single-state" ? "countyMapGroup--no-transition" : ""}`,
                      transform: `translate(${h}) scale(${g})`,
                      "data-scale": "",
                      children: _(z)
                    },
                    "countyMapGroup"
                  )
                }
              ),
              e.annotations.length > 0 && /* @__PURE__ */ s(ea.Draggable, {})
            ]
          }
        )
      }
    ),
    v && !e.general.allowMapZoom && e.general.statePicked.fipsCode && /* @__PURE__ */ M(
      "svg",
      {
        viewBox: en,
        preserveAspectRatio: "xMinYMin",
        className: "svg-container",
        role: "img",
        "aria-label": tn(e),
        children: [
          /* @__PURE__ */ s(
            "rect",
            {
              className: "background center-container ocean",
              width: _e,
              height: Ue,
              fillOpacity: 1,
              fill: "white"
            }
          ),
          /* @__PURE__ */ s(
            Fl,
            {
              data: [
                {
                  states: r == null ? void 0 : r.states,
                  counties: r.counties.filter((z) => z.id.substring(0, 2) === e.general.statePicked.fipsCode)
                }
              ],
              projection: Cn,
              fitExtent: [
                [
                  [ze, ze],
                  [_e - ze, Ue - ze]
                ],
                o
              ],
              children: ({ features: z, projection: F }) => /* @__PURE__ */ s(
                "g",
                {
                  id: "mapGroup",
                  className: `countyMapGroup ${e.general.geoType === "single-state" ? "countyMapGroup--no-transition" : ""}`,
                  transform: `translate(${h}) scale(${g})`,
                  "data-scale": "",
                  children: _(z)
                },
                "countyMapGroup"
              )
            }
          ),
          e.annotations.length > 0 && /* @__PURE__ */ s(ea.Draggable, {})
        ]
      }
    ),
    x() && /* @__PURE__ */ s(
      "svg",
      {
        viewBox: en,
        preserveAspectRatio: "xMinYMin",
        className: "svg-container",
        role: "img",
        "aria-label": tn(e),
        children: /* @__PURE__ */ s(
          Ss,
          {
            verticalAnchor: "start",
            textAnchor: "middle",
            x: _e / 2,
            width: _e,
            y: Ue / 2,
            fontSize: 18,
            style: { fontSize: "28px", height: "18px" },
            children: e.general.noStateFoundMessage
          }
        )
      }
    ),
    /* @__PURE__ */ s(
      Rc,
      {
        handleZoomIn: f,
        handleZoomOut: S,
        handleReset: m
      }
    )
  ] });
}, th = E.memo(eh), wa = {
  State: S2,
  Region: k2,
  County: K2,
  SingleState: th
}, nh = ({ path: e, styles: t, stroke: n, strokeWidth: a, ...i }) => {
  var g, h, c;
  const { className: l, ...o } = i, r = ((c = (h = String((g = i.additionalData) == null ? void 0 : g.name)) == null ? void 0 : h.toLowerCase()) == null ? void 0 : c.replaceAll(" ", "")) || "country";
  return /* @__PURE__ */ s("g", { className: `geo-group ${r}`, style: t, ...o, children: /* @__PURE__ */ s("path", { tabIndex: -1, className: `single-geo ${r}`, stroke: n, strokeWidth: a, d: e }) });
}, es = E.memo(nh), Ic = (e) => ({ generateRuntimeData: (n, a, i, l) => {
  try {
    const o = {};
    return Object.defineProperty(o, "fromHash", {
      value: i
    }), Ia(n, n.columns.geo.name), n.data.forEach((r) => {
      if (l && (console.log("object", n), console.log("row", r)), r.uid === void 0)
        return !1;
      const g = n.columns.primary.name;
      if (r[g] && (r[g] = N1(r[g], e)), n.general.type === "navigation") {
        let h = r[n.columns.navigate.name] || "";
        if (h !== void 0 && typeof h == "string" && (h = h.replace(/(\r\n|\n|\r)/gm, "")), (h == null ? void 0 : h.length) === 0)
          return !1;
      }
      if (a != null && a.length)
        for (let h = 0; h < a.length; h++) {
          const { columnName: c, active: d, type: u, filterStyle: p, subGrouping: f } = a[h], S = u !== "url", m = String(d) === String(r[c]);
          if (S && !m)
            return !1;
          if (p == "nested-dropdown") {
            const y = String(r[f == null ? void 0 : f.columnName]) === String(f == null ? void 0 : f.active);
            if (f != null && f.active && !y)
              return !1;
          }
        }
      o[r.uid] === void 0 && (o[r.uid] = r);
    }), o;
  } catch (o) {
    console.error("COVE: ", o);
  }
} });
let Fi = tc();
const ah = () => {
  const {
    data: e,
    position: t,
    setRuntimeData: n,
    config: a,
    tooltipId: i,
    runtimeLegend: l,
    legendMemo: o,
    legendSpecialClassLastMemo: r
  } = E.useContext(fe), { type: g, allowMapZoom: h } = a.general, [c, d] = E.useState(null), { geoClickHandler: u } = ln(), { applyTooltipsToGeo: p } = Ht(), { generateRuntimeData: f } = Ic(a), S = E.useContext(it);
  if (E.useEffect(() => {
    (async () => {
      import(
        /* webpackChunkName: "world-topo" */
        "./storybook-world-topo-31a33da1.es.js"
      ).then((P) => {
        d(Nt(P, P.objects.countries).features);
      });
    })();
  }, []), !c)
    return /* @__PURE__ */ s(le, {});
  const m = (N) => {
    const P = f(a);
    S({ type: "SET_POSITION", payload: { coordinates: [0, 30], zoom: 1 } }), S({ type: "SET_FILTERED_COUNTRY_CODE", payload: "" }), N(P);
  }, y = (N) => {
    N.zoom >= 4 || S({ type: "SET_POSITION", payload: { coordinates: N.coordinates, zoom: N.zoom * 1.5 } });
  }, v = (N) => {
    N.zoom <= 1 || S({ type: "SET_POSITION", payload: { coordinates: N.coordinates, zoom: N.zoom / 1.5 } });
  }, C = (N) => {
    S({ type: "SET_POSITION", payload: N });
  }, w = (N) => {
    const P = N.map(({ feature: x, path: _ }, z) => {
      var V;
      a.data.some((B) => B[a.columns.geo.name] === x.properties.state);
      const F = x.properties.state && e[x.properties.state] ? x.properties.state : x.properties.name ? x.properties.name : x.properties.iso, I = {
        name: x.properties.name
      };
      if (!F)
        return null;
      let O = e[F];
      const U = Ie((V = fs[F]) == null ? void 0 : V[0]);
      let k;
      O !== void 0 && (k = xe(O, a, l, o, r));
      const b = Wt(a), T = Tn();
      let D = {
        fill: T,
        cursor: "default"
      };
      const A = 0.9, $ = p(U, O);
      return k && k[0] !== "#000000" && g !== "bubble" ? (D = {
        ...D,
        fill: g !== "world-geocode" ? k[0] : T,
        cursor: "default",
        "&:hover": {
          fill: g !== "world-geocode" ? k[1] : T
        },
        "&:active": {
          fill: g !== "world-geocode" ? k[2] : T
        }
      }, (a.columns.navigate && O[a.columns.navigate.name] || a.tooltips.appearanceType === "click") && (D.cursor = "pointer"), /* @__PURE__ */ s(
        es,
        {
          additionalData: I,
          geoData: O,
          styles: D,
          path: _,
          stroke: b,
          strokeWidth: A,
          onClick: () => u(U, O),
          "data-tooltip-id": `tooltip__${i}`,
          "data-tooltip-html": $,
          tabIndex: -1
        },
        z + "-geo"
      )) : /* @__PURE__ */ s(
        es,
        {
          additionaldata: JSON.stringify(I),
          geodata: JSON.stringify(O),
          stroke: b,
          strokeWidth: A,
          styles: D,
          path: _,
          "data-tooltip-id": `tooltip__${i}`,
          "data-tooltip-html": $
        },
        z + "-geo"
      );
    });
    return P.push(/* @__PURE__ */ s(uo, { projection: Fi, tooltipId: i }, "cities")), g === "bubble" && P.push(/* @__PURE__ */ s(Pc, {})), P;
  };
  return /* @__PURE__ */ M(jt, { component: "WorldMap", children: [
    h ? /* @__PURE__ */ M("svg", { viewBox: en, role: "img", "aria-label": tn(a), children: [
      /* @__PURE__ */ s(
        "rect",
        {
          height: Ue,
          width: _e,
          onClick: () => m(a),
          fill: "white"
        }
      ),
      /* @__PURE__ */ s(
        Wr,
        {
          zoom: t.zoom,
          center: t.coordinates,
          onMoveEnd: C,
          maxZoom: gs,
          projection: Fi,
          width: _e,
          height: Ue,
          children: /* @__PURE__ */ s(ci, { data: c, children: ({ features: N }) => w(N) })
        }
      )
    ] }) : /* @__PURE__ */ s("svg", { viewBox: en, children: /* @__PURE__ */ s(
      Wr,
      {
        zoom: 1,
        center: t.coordinates,
        onMoveEnd: C,
        maxZoom: 0,
        projection: Fi,
        width: _e,
        height: Ue,
        children: /* @__PURE__ */ s(ci, { data: c, children: ({ features: N }) => w(N) })
      }
    ) }),
    (g === "data" || g === "world-geocode" && h || g === "bubble" && h) && /* @__PURE__ */ s(Rc, { handleZoomIn: y, handleZoomOut: v, handleReset: m })
  ] });
}, ih = E.memo(ah);
function rh(e, t, n, a) {
  function i(l) {
    return l instanceof n ? l : new n(function(o) {
      o(l);
    });
  }
  return new (n || (n = Promise))(function(l, o) {
    function r(c) {
      try {
        h(a.next(c));
      } catch (d) {
        o(d);
      }
    }
    function g(c) {
      try {
        h(a.throw(c));
      } catch (d) {
        o(d);
      }
    }
    function h(c) {
      c.done ? l(c.value) : i(c.value).then(r, g);
    }
    h((a = a.apply(e, t || [])).next());
  });
}
function oh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lh = function e(t, n) {
  if (t === n)
    return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor)
      return !1;
    var a, i, l;
    if (Array.isArray(t)) {
      if (a = t.length, a != n.length)
        return !1;
      for (i = a; i-- !== 0; )
        if (!e(t[i], n[i]))
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === n.toString();
    if (l = Object.keys(t), a = l.length, a !== Object.keys(n).length)
      return !1;
    for (i = a; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, l[i]))
        return !1;
    for (i = a; i-- !== 0; ) {
      var o = l[i];
      if (!e(t[o], n[o]))
        return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
}, sh = /* @__PURE__ */ oh(lh);
const ts = "__googleMapsScriptId";
var mn;
(function(e) {
  e[e.INITIALIZED = 0] = "INITIALIZED", e[e.LOADING = 1] = "LOADING", e[e.SUCCESS = 2] = "SUCCESS", e[e.FAILURE = 3] = "FAILURE";
})(mn || (mn = {}));
class Qt {
  /**
   * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
   * using this library, instead the defaults are set by the Google Maps
   * JavaScript API server.
   *
   * ```
   * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
   * ```
   */
  constructor({ apiKey: t, authReferrerPolicy: n, channel: a, client: i, id: l = ts, language: o, libraries: r = [], mapIds: g, nonce: h, region: c, retries: d = 3, url: u = "https://maps.googleapis.com/maps/api/js", version: p }) {
    if (this.callbacks = [], this.done = !1, this.loading = !1, this.errors = [], this.apiKey = t, this.authReferrerPolicy = n, this.channel = a, this.client = i, this.id = l || ts, this.language = o, this.libraries = r, this.mapIds = g, this.nonce = h, this.region = c, this.retries = d, this.url = u, this.version = p, Qt.instance) {
      if (!sh(this.options, Qt.instance.options))
        throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Qt.instance.options)}`);
      return Qt.instance;
    }
    Qt.instance = this;
  }
  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url,
      authReferrerPolicy: this.authReferrerPolicy
    };
  }
  get status() {
    return this.errors.length ? mn.FAILURE : this.done ? mn.SUCCESS : this.loading ? mn.LOADING : mn.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  /**
   * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
   *
   * @ignore
   * @deprecated
   */
  createUrl() {
    let t = this.url;
    return t += "?callback=__googleMapsCallback&loading=async", this.apiKey && (t += `&key=${this.apiKey}`), this.channel && (t += `&channel=${this.channel}`), this.client && (t += `&client=${this.client}`), this.libraries.length > 0 && (t += `&libraries=${this.libraries.join(",")}`), this.language && (t += `&language=${this.language}`), this.region && (t += `&region=${this.region}`), this.version && (t += `&v=${this.version}`), this.mapIds && (t += `&map_ids=${this.mapIds.join(",")}`), this.authReferrerPolicy && (t += `&auth_referrer_policy=${this.authReferrerPolicy}`), t;
  }
  deleteScript() {
    const t = document.getElementById(this.id);
    t && t.remove();
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   * @deprecated, use importLibrary() instead.
   */
  load() {
    return this.loadPromise();
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   *
   * @ignore
   * @deprecated, use importLibrary() instead.
   */
  loadPromise() {
    return new Promise((t, n) => {
      this.loadCallback((a) => {
        a ? n(a.error) : t(window.google);
      });
    });
  }
  importLibrary(t) {
    return this.execute(), google.maps.importLibrary(t);
  }
  /**
   * Load the Google Maps JavaScript API script with a callback.
   * @deprecated, use importLibrary() instead.
   */
  loadCallback(t) {
    this.callbacks.push(t), this.execute();
  }
  /**
   * Set the script on document.
   */
  setScript() {
    var t, n;
    if (document.getElementById(this.id)) {
      this.callback();
      return;
    }
    const a = {
      key: this.apiKey,
      channel: this.channel,
      client: this.client,
      libraries: this.libraries.length && this.libraries,
      v: this.version,
      mapIds: this.mapIds,
      language: this.language,
      region: this.region,
      authReferrerPolicy: this.authReferrerPolicy
    };
    Object.keys(a).forEach(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (l) => !a[l] && delete a[l]
    ), !((n = (t = window == null ? void 0 : window.google) === null || t === void 0 ? void 0 : t.maps) === null || n === void 0) && n.importLibrary || ((l) => {
      let o, r, g, h = "The Google Maps JavaScript API", c = "google", d = "importLibrary", u = "__ib__", p = document, f = window;
      f = f[c] || (f[c] = {});
      const S = f.maps || (f.maps = {}), m = /* @__PURE__ */ new Set(), y = new URLSearchParams(), v = () => (
        // @ts-ignore
        o || (o = new Promise((C, w) => rh(this, void 0, void 0, function* () {
          var N;
          yield r = p.createElement("script"), r.id = this.id, y.set("libraries", [...m] + "");
          for (g in l)
            y.set(g.replace(/[A-Z]/g, (P) => "_" + P[0].toLowerCase()), l[g]);
          y.set("callback", c + ".maps." + u), r.src = this.url + "?" + y, S[u] = C, r.onerror = () => o = w(Error(h + " could not load.")), r.nonce = this.nonce || ((N = p.querySelector("script[nonce]")) === null || N === void 0 ? void 0 : N.nonce) || "", p.head.append(r);
        })))
      );
      S[d] ? console.warn(h + " only loads once. Ignoring:", l) : S[d] = (C, ...w) => m.add(C) && v().then(() => S[d](C, ...w));
    })(a);
    const i = this.libraries.map((l) => this.importLibrary(l));
    i.length || i.push(this.importLibrary("core")), Promise.all(i).then(() => this.callback(), (l) => {
      const o = new ErrorEvent("error", { error: l });
      this.loadErrorCallback(o);
    });
  }
  /**
   * Reset the loader state.
   */
  reset() {
    this.deleteScript(), this.done = !1, this.loading = !1, this.errors = [], this.onerrorEvent = null;
  }
  resetIfRetryingFailed() {
    this.failed && this.reset();
  }
  loadErrorCallback(t) {
    if (this.errors.push(t), this.errors.length <= this.retries) {
      const n = this.errors.length * Math.pow(2, this.errors.length);
      console.error(`Failed to load Google Maps script, retrying in ${n} ms.`), setTimeout(() => {
        this.deleteScript(), this.setScript();
      }, n);
    } else
      this.onerrorEvent = t, this.callback();
  }
  callback() {
    this.done = !0, this.loading = !1, this.callbacks.forEach((t) => {
      t(this.onerrorEvent);
    }), this.callbacks = [];
  }
  execute() {
    if (this.resetIfRetryingFailed(), !this.loading)
      if (this.done)
        this.callback();
      else {
        if (window.google && window.google.maps && window.google.maps.version) {
          console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match."), this.callback();
          return;
        }
        this.loading = !0, this.setScript();
      }
  }
}
const ns = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
], Gi = 1, Pn = 8;
class go {
  /**
   * Creates an index from raw `ArrayBuffer` data.
   * @param {ArrayBuffer} data
   */
  static from(t) {
    if (!(t instanceof ArrayBuffer))
      throw new Error("Data must be an instance of ArrayBuffer.");
    const [n, a] = new Uint8Array(t, 0, 2);
    if (n !== 219)
      throw new Error("Data does not appear to be in a KDBush format.");
    const i = a >> 4;
    if (i !== Gi)
      throw new Error(`Got v${i} data when expected v${Gi}.`);
    const l = ns[a & 15];
    if (!l)
      throw new Error("Unrecognized array type.");
    const [o] = new Uint16Array(t, 2, 1), [r] = new Uint32Array(t, 4, 1);
    return new go(r, o, l, t);
  }
  /**
   * Creates an index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBuffer} [data] (For internal use only)
   */
  constructor(t, n = 64, a = Float64Array, i) {
    if (isNaN(t) || t < 0)
      throw new Error(`Unpexpected numItems value: ${t}.`);
    this.numItems = +t, this.nodeSize = Math.min(Math.max(+n, 2), 65535), this.ArrayType = a, this.IndexArrayType = t < 65536 ? Uint16Array : Uint32Array;
    const l = ns.indexOf(this.ArrayType), o = t * 2 * this.ArrayType.BYTES_PER_ELEMENT, r = t * this.IndexArrayType.BYTES_PER_ELEMENT, g = (8 - r % 8) % 8;
    if (l < 0)
      throw new Error(`Unexpected typed array class: ${a}.`);
    i && i instanceof ArrayBuffer ? (this.data = i, this.ids = new this.IndexArrayType(this.data, Pn, t), this.coords = new this.ArrayType(this.data, Pn + r + g, t * 2), this._pos = t * 2, this._finished = !0) : (this.data = new ArrayBuffer(Pn + o + r + g), this.ids = new this.IndexArrayType(this.data, Pn, t), this.coords = new this.ArrayType(this.data, Pn + r + g, t * 2), this._pos = 0, this._finished = !1, new Uint8Array(this.data, 0, 2).set([219, (Gi << 4) + l]), new Uint16Array(this.data, 2, 1)[0] = n, new Uint32Array(this.data, 4, 1)[0] = t);
  }
  /**
   * Add a point to the index.
   * @param {number} x
   * @param {number} y
   * @returns {number} An incremental index associated with the added item (starting from `0`).
   */
  add(t, n) {
    const a = this._pos >> 1;
    return this.ids[a] = a, this.coords[this._pos++] = t, this.coords[this._pos++] = n, a;
  }
  /**
   * Perform indexing of the added points.
   */
  finish() {
    const t = this._pos >> 1;
    if (t !== this.numItems)
      throw new Error(`Added ${t} items when expected ${this.numItems}.`);
    return jr(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = !0, this;
  }
  /**
   * Search the index for items within a given bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number[]} An array of indices correponding to the found items.
   */
  range(t, n, a, i) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids: l, coords: o, nodeSize: r } = this, g = [0, l.length - 1, 0], h = [];
    for (; g.length; ) {
      const c = g.pop() || 0, d = g.pop() || 0, u = g.pop() || 0;
      if (d - u <= r) {
        for (let m = u; m <= d; m++) {
          const y = o[2 * m], v = o[2 * m + 1];
          y >= t && y <= a && v >= n && v <= i && h.push(l[m]);
        }
        continue;
      }
      const p = u + d >> 1, f = o[2 * p], S = o[2 * p + 1];
      f >= t && f <= a && S >= n && S <= i && h.push(l[p]), (c === 0 ? t <= f : n <= S) && (g.push(u), g.push(p - 1), g.push(1 - c)), (c === 0 ? a >= f : i >= S) && (g.push(p + 1), g.push(d), g.push(1 - c));
    }
    return h;
  }
  /**
   * Search the index for items within a given radius.
   * @param {number} qx
   * @param {number} qy
   * @param {number} r Query radius.
   * @returns {number[]} An array of indices correponding to the found items.
   */
  within(t, n, a) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids: i, coords: l, nodeSize: o } = this, r = [0, i.length - 1, 0], g = [], h = a * a;
    for (; r.length; ) {
      const c = r.pop() || 0, d = r.pop() || 0, u = r.pop() || 0;
      if (d - u <= o) {
        for (let m = u; m <= d; m++)
          as(l[2 * m], l[2 * m + 1], t, n) <= h && g.push(i[m]);
        continue;
      }
      const p = u + d >> 1, f = l[2 * p], S = l[2 * p + 1];
      as(f, S, t, n) <= h && g.push(i[p]), (c === 0 ? t - a <= f : n - a <= S) && (r.push(u), r.push(p - 1), r.push(1 - c)), (c === 0 ? t + a >= f : n + a >= S) && (r.push(p + 1), r.push(d), r.push(1 - c));
    }
    return g;
  }
}
function jr(e, t, n, a, i, l) {
  if (i - a <= n)
    return;
  const o = a + i >> 1;
  Oc(e, t, o, a, i, l), jr(e, t, n, a, o - 1, 1 - l), jr(e, t, n, o + 1, i, 1 - l);
}
function Oc(e, t, n, a, i, l) {
  for (; i > a; ) {
    if (i - a > 600) {
      const h = i - a + 1, c = n - a + 1, d = Math.log(h), u = 0.5 * Math.exp(2 * d / 3), p = 0.5 * Math.sqrt(d * u * (h - u) / h) * (c - h / 2 < 0 ? -1 : 1), f = Math.max(a, Math.floor(n - c * u / h + p)), S = Math.min(i, Math.floor(n + (h - c) * u / h + p));
      Oc(e, t, n, f, S, l);
    }
    const o = t[2 * n + l];
    let r = a, g = i;
    for (Dn(e, t, a, n), t[2 * i + l] > o && Dn(e, t, a, i); r < g; ) {
      for (Dn(e, t, r, g), r++, g--; t[2 * r + l] < o; )
        r++;
      for (; t[2 * g + l] > o; )
        g--;
    }
    t[2 * a + l] === o ? Dn(e, t, a, g) : (g++, Dn(e, t, g, i)), g <= n && (a = g + 1), n <= g && (i = g - 1);
  }
}
function Dn(e, t, n, a) {
  Bi(e, n, a), Bi(t, 2 * n, 2 * a), Bi(t, 2 * n + 1, 2 * a + 1);
}
function Bi(e, t, n) {
  const a = e[t];
  e[t] = e[n], e[n] = a;
}
function as(e, t, n, a) {
  const i = e - n, l = t - a;
  return i * i + l * l;
}
const ch = {
  minZoom: 0,
  // min zoom to generate clusters on
  maxZoom: 16,
  // max zoom level to cluster the points on
  minPoints: 2,
  // minimum points to form a cluster
  radius: 40,
  // cluster radius in pixels
  extent: 512,
  // tile extent (radius is calculated relative to it)
  nodeSize: 64,
  // size of the KD-tree leaf node, affects performance
  log: !1,
  // whether to log timing info
  // whether to generate numeric ids for input features (in vector tiles)
  generateId: !1,
  // a reduce function for calculating custom cluster properties
  reduce: null,
  // (accumulated, props) => { accumulated.sum += props.sum; }
  // properties to use for individual points when running the reducer
  map: (e) => e
  // props => ({sum: props.my_value})
}, is = Math.fround || ((e) => (t) => (e[0] = +t, e[0]))(new Float32Array(1)), Kt = 2, Ut = 3, Vi = 4, _t = 5, $c = 6;
class uh {
  constructor(t) {
    this.options = Object.assign(Object.create(ch), t), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
  }
  load(t) {
    const { log: n, minZoom: a, maxZoom: i } = this.options;
    n && console.time("total time");
    const l = `prepare ${t.length} points`;
    n && console.time(l), this.points = t;
    const o = [];
    for (let g = 0; g < t.length; g++) {
      const h = t[g];
      if (!h.geometry)
        continue;
      const [c, d] = h.geometry.coordinates, u = is(La(c)), p = is(Ta(d));
      o.push(
        u,
        p,
        // projected point coordinates
        1 / 0,
        // the last zoom the point was processed at
        g,
        // index of the source feature in the original input array
        -1,
        // parent cluster id
        1
        // number of points in a cluster
      ), this.options.reduce && o.push(0);
    }
    let r = this.trees[i + 1] = this._createTree(o);
    n && console.timeEnd(l);
    for (let g = i; g >= a; g--) {
      const h = +Date.now();
      r = this.trees[g] = this._createTree(this._cluster(r, g)), n && console.log("z%d: %d clusters in %dms", g, r.numItems, +Date.now() - h);
    }
    return n && console.timeEnd("total time"), this;
  }
  getClusters(t, n) {
    let a = ((t[0] + 180) % 360 + 360) % 360 - 180;
    const i = Math.max(-90, Math.min(90, t[1]));
    let l = t[2] === 180 ? 180 : ((t[2] + 180) % 360 + 360) % 360 - 180;
    const o = Math.max(-90, Math.min(90, t[3]));
    if (t[2] - t[0] >= 360)
      a = -180, l = 180;
    else if (a > l) {
      const d = this.getClusters([a, i, 180, o], n), u = this.getClusters([-180, i, l, o], n);
      return d.concat(u);
    }
    const r = this.trees[this._limitZoom(n)], g = r.range(La(a), Ta(o), La(l), Ta(i)), h = r.data, c = [];
    for (const d of g) {
      const u = this.stride * d;
      c.push(h[u + _t] > 1 ? rs(h, u, this.clusterProps) : this.points[h[u + Ut]]);
    }
    return c;
  }
  getChildren(t) {
    const n = this._getOriginId(t), a = this._getOriginZoom(t), i = "No cluster with the specified id.", l = this.trees[a];
    if (!l)
      throw new Error(i);
    const o = l.data;
    if (n * this.stride >= o.length)
      throw new Error(i);
    const r = this.options.radius / (this.options.extent * Math.pow(2, a - 1)), g = o[n * this.stride], h = o[n * this.stride + 1], c = l.within(g, h, r), d = [];
    for (const u of c) {
      const p = u * this.stride;
      o[p + Vi] === t && d.push(o[p + _t] > 1 ? rs(o, p, this.clusterProps) : this.points[o[p + Ut]]);
    }
    if (d.length === 0)
      throw new Error(i);
    return d;
  }
  getLeaves(t, n, a) {
    n = n || 10, a = a || 0;
    const i = [];
    return this._appendLeaves(i, t, n, a, 0), i;
  }
  getTile(t, n, a) {
    const i = this.trees[this._limitZoom(t)], l = Math.pow(2, t), { extent: o, radius: r } = this.options, g = r / o, h = (a - g) / l, c = (a + 1 + g) / l, d = {
      features: []
    };
    return this._addTileFeatures(
      i.range((n - g) / l, h, (n + 1 + g) / l, c),
      i.data,
      n,
      a,
      l,
      d
    ), n === 0 && this._addTileFeatures(
      i.range(1 - g / l, h, 1, c),
      i.data,
      l,
      a,
      l,
      d
    ), n === l - 1 && this._addTileFeatures(
      i.range(0, h, g / l, c),
      i.data,
      -1,
      a,
      l,
      d
    ), d.features.length ? d : null;
  }
  getClusterExpansionZoom(t) {
    let n = this._getOriginZoom(t) - 1;
    for (; n <= this.options.maxZoom; ) {
      const a = this.getChildren(t);
      if (n++, a.length !== 1)
        break;
      t = a[0].properties.cluster_id;
    }
    return n;
  }
  _appendLeaves(t, n, a, i, l) {
    const o = this.getChildren(n);
    for (const r of o) {
      const g = r.properties;
      if (g && g.cluster ? l + g.point_count <= i ? l += g.point_count : l = this._appendLeaves(t, g.cluster_id, a, i, l) : l < i ? l++ : t.push(r), t.length === a)
        break;
    }
    return l;
  }
  _createTree(t) {
    const n = new go(t.length / this.stride | 0, this.options.nodeSize, Float32Array);
    for (let a = 0; a < t.length; a += this.stride)
      n.add(t[a], t[a + 1]);
    return n.finish(), n.data = t, n;
  }
  _addTileFeatures(t, n, a, i, l, o) {
    for (const r of t) {
      const g = r * this.stride, h = n[g + _t] > 1;
      let c, d, u;
      if (h)
        c = zc(n, g, this.clusterProps), d = n[g], u = n[g + 1];
      else {
        const S = this.points[n[g + Ut]];
        c = S.properties;
        const [m, y] = S.geometry.coordinates;
        d = La(m), u = Ta(y);
      }
      const p = {
        type: 1,
        geometry: [[
          Math.round(this.options.extent * (d * l - a)),
          Math.round(this.options.extent * (u * l - i))
        ]],
        tags: c
      };
      let f;
      h || this.options.generateId ? f = n[g + Ut] : f = this.points[n[g + Ut]].id, f !== void 0 && (p.id = f), o.features.push(p);
    }
  }
  _limitZoom(t) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+t), this.options.maxZoom + 1));
  }
  _cluster(t, n) {
    const { radius: a, extent: i, reduce: l, minPoints: o } = this.options, r = a / (i * Math.pow(2, n)), g = t.data, h = [], c = this.stride;
    for (let d = 0; d < g.length; d += c) {
      if (g[d + Kt] <= n)
        continue;
      g[d + Kt] = n;
      const u = g[d], p = g[d + 1], f = t.within(g[d], g[d + 1], r), S = g[d + _t];
      let m = S;
      for (const y of f) {
        const v = y * c;
        g[v + Kt] > n && (m += g[v + _t]);
      }
      if (m > S && m >= o) {
        let y = u * S, v = p * S, C, w = -1;
        const N = ((d / c | 0) << 5) + (n + 1) + this.points.length;
        for (const P of f) {
          const x = P * c;
          if (g[x + Kt] <= n)
            continue;
          g[x + Kt] = n;
          const _ = g[x + _t];
          y += g[x] * _, v += g[x + 1] * _, g[x + Vi] = N, l && (C || (C = this._map(g, d, !0), w = this.clusterProps.length, this.clusterProps.push(C)), l(C, this._map(g, x)));
        }
        g[d + Vi] = N, h.push(y / m, v / m, 1 / 0, N, -1, m), l && h.push(w);
      } else {
        for (let y = 0; y < c; y++)
          h.push(g[d + y]);
        if (m > 1)
          for (const y of f) {
            const v = y * c;
            if (!(g[v + Kt] <= n)) {
              g[v + Kt] = n;
              for (let C = 0; C < c; C++)
                h.push(g[v + C]);
            }
          }
      }
    }
    return h;
  }
  // get index of the point from which the cluster originated
  _getOriginId(t) {
    return t - this.points.length >> 5;
  }
  // get zoom of the point from which the cluster originated
  _getOriginZoom(t) {
    return (t - this.points.length) % 32;
  }
  _map(t, n, a) {
    if (t[n + _t] > 1) {
      const o = this.clusterProps[t[n + $c]];
      return a ? Object.assign({}, o) : o;
    }
    const i = this.points[t[n + Ut]].properties, l = this.options.map(i);
    return a && l === i ? Object.assign({}, l) : l;
  }
}
function rs(e, t, n) {
  return {
    type: "Feature",
    id: e[t + Ut],
    properties: zc(e, t, n),
    geometry: {
      type: "Point",
      coordinates: [dh(e[t]), ph(e[t + 1])]
    }
  };
}
function zc(e, t, n) {
  const a = e[t + _t], i = a >= 1e4 ? `${Math.round(a / 1e3)}k` : a >= 1e3 ? `${Math.round(a / 100) / 10}k` : a, l = e[t + $c], o = l === -1 ? {} : Object.assign({}, n[l]);
  return Object.assign(o, {
    cluster: !0,
    cluster_id: e[t + Ut],
    point_count: a,
    point_count_abbreviated: i
  });
}
function La(e) {
  return e / 360 + 0.5;
}
function Ta(e) {
  const t = Math.sin(e * Math.PI / 180), n = 0.5 - 0.25 * Math.log((1 + t) / (1 - t)) / Math.PI;
  return n < 0 ? 0 : n > 1 ? 1 : n;
}
function dh(e) {
  return (e - 0.5) * 360;
}
function ph(e) {
  const t = (180 - e * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(t)) / Math.PI - 90;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function hh(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, a = Object.getOwnPropertySymbols(e); i < a.length; i++)
      t.indexOf(a[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[i]) && (n[a[i]] = e[a[i]]);
  return n;
}
class tt {
  static isAdvancedMarkerAvailable(t) {
    return google.maps.marker && t.getMapCapabilities().isAdvancedMarkersAvailable === !0;
  }
  static isAdvancedMarker(t) {
    return google.maps.marker && t instanceof google.maps.marker.AdvancedMarkerElement;
  }
  static setMap(t, n) {
    this.isAdvancedMarker(t) ? t.map = n : t.setMap(n);
  }
  static getPosition(t) {
    if (this.isAdvancedMarker(t)) {
      if (t.position) {
        if (t.position instanceof google.maps.LatLng)
          return t.position;
        if (t.position.lat && t.position.lng)
          return new google.maps.LatLng(t.position.lat, t.position.lng);
      }
      return new google.maps.LatLng(null);
    }
    return t.getPosition();
  }
  static getVisible(t) {
    return this.isAdvancedMarker(t) ? !0 : t.getVisible();
  }
}
class Hr {
  constructor({ markers: t, position: n }) {
    this.markers = t, n && (n instanceof google.maps.LatLng ? this._position = n : this._position = new google.maps.LatLng(n));
  }
  get bounds() {
    if (this.markers.length === 0 && !this._position)
      return;
    const t = new google.maps.LatLngBounds(this._position, this._position);
    for (const n of this.markers)
      t.extend(tt.getPosition(n));
    return t;
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  /**
   * Get the count of **visible** markers.
   */
  get count() {
    return this.markers.filter((t) => tt.getVisible(t)).length;
  }
  /**
   * Add a marker to the cluster.
   */
  push(t) {
    this.markers.push(t);
  }
  /**
   * Cleanup references and remove marker from map.
   */
  delete() {
    this.marker && (tt.setMap(this.marker, null), this.marker = void 0), this.markers.length = 0;
  }
}
class gh {
  constructor({ maxZoom: t = 16 }) {
    this.maxZoom = t;
  }
  /**
   * Helper function to bypass clustering based upon some map state such as
   * zoom, number of markers, etc.
   *
   * ```typescript
   *  cluster({markers, map}: AlgorithmInput): Cluster[] {
   *    if (shouldBypassClustering(map)) {
   *      return this.noop({markers})
   *    }
   * }
   * ```
   */
  noop({ markers: t }) {
    return fh(t);
  }
}
const fh = (e) => e.map((n) => new Hr({
  position: tt.getPosition(n),
  markers: [n]
}));
class mh extends gh {
  constructor(t) {
    var { maxZoom: n, radius: a = 60 } = t, i = hh(t, ["maxZoom", "radius"]);
    super({ maxZoom: n }), this.state = { zoom: -1 }, this.superCluster = new uh(Object.assign({ maxZoom: this.maxZoom, radius: a }, i));
  }
  calculate(t) {
    let n = !1;
    const a = { zoom: t.map.getZoom() };
    if (!$o(t.markers, this.markers)) {
      n = !0, this.markers = [...t.markers];
      const i = this.markers.map((l) => {
        const o = tt.getPosition(l);
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [o.lng(), o.lat()]
          },
          properties: { marker: l }
        };
      });
      this.superCluster.load(i);
    }
    return n || (this.state.zoom <= this.maxZoom || a.zoom <= this.maxZoom) && (n = !$o(this.state, a)), this.state = a, n && (this.clusters = this.cluster(t)), { clusters: this.clusters, changed: n };
  }
  cluster({ map: t }) {
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(t.getZoom())).map((n) => this.transformCluster(n));
  }
  transformCluster({ geometry: { coordinates: [t, n] }, properties: a }) {
    if (a.cluster)
      return new Hr({
        markers: this.superCluster.getLeaves(a.cluster_id, 1 / 0).map((l) => l.properties.marker),
        position: { lat: n, lng: t }
      });
    const i = a.marker;
    return new Hr({
      markers: [i],
      position: tt.getPosition(i)
    });
  }
}
class yh {
  constructor(t, n) {
    this.markers = { sum: t.length };
    const a = n.map((l) => l.count), i = a.reduce((l, o) => l + o, 0);
    this.clusters = {
      count: n.length,
      markers: {
        mean: i / n.length,
        sum: i,
        min: Math.min(...a),
        max: Math.max(...a)
      }
    };
  }
}
class Ch {
  /**
   * The default render function for the library used by {@link MarkerClusterer}.
   *
   * Currently set to use the following:
   *
   * ```typescript
   * // change color if this cluster has more markers than the mean cluster
   * const color =
   *   count > Math.max(10, stats.clusters.markers.mean)
   *     ? "#ff0000"
   *     : "#0000ff";
   *
   * // create svg url with fill color
   * const svg = window.btoa(`
   * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
   *   <circle cx="120" cy="120" opacity=".6" r="70" />
   *   <circle cx="120" cy="120" opacity=".3" r="90" />
   *   <circle cx="120" cy="120" opacity=".2" r="110" />
   *   <circle cx="120" cy="120" opacity=".1" r="130" />
   * </svg>`);
   *
   * // create marker using svg icon
   * return new google.maps.Marker({
   *   position,
   *   icon: {
   *     url: `data:image/svg+xml;base64,${svg}`,
   *     scaledSize: new google.maps.Size(45, 45),
   *   },
   *   label: {
   *     text: String(count),
   *     color: "rgba(255,255,255,0.9)",
   *     fontSize: "12px",
   *   },
   *   // adjust zIndex to be above other markers
   *   zIndex: 1000 + count,
   * });
   * ```
   */
  render({ count: t, position: n }, a, i) {
    const o = `<svg fill="${t > Math.max(10, a.clusters.markers.mean) ? "#ff0000" : "#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${t}</text>
</svg>`, r = `Cluster of ${t} markers`, g = Number(google.maps.Marker.MAX_ZINDEX) + t;
    if (tt.isAdvancedMarkerAvailable(i)) {
      const d = new DOMParser().parseFromString(o, "image/svg+xml").documentElement;
      d.setAttribute("transform", "translate(0 25)");
      const u = {
        map: i,
        position: n,
        zIndex: g,
        title: r,
        content: d
      };
      return new google.maps.marker.AdvancedMarkerElement(u);
    }
    const h = {
      position: n,
      zIndex: g,
      title: r,
      icon: {
        url: `data:image/svg+xml;base64,${btoa(o)}`,
        anchor: new google.maps.Point(25, 25)
      }
    };
    return new google.maps.Marker(h);
  }
}
function Sh(e, t) {
  for (let n in t.prototype)
    e.prototype[n] = t.prototype[n];
}
class fo {
  constructor() {
    Sh(fo, google.maps.OverlayView);
  }
}
var Yn;
(function(e) {
  e.CLUSTERING_BEGIN = "clusteringbegin", e.CLUSTERING_END = "clusteringend", e.CLUSTER_CLICK = "click";
})(Yn || (Yn = {}));
const bh = (e, t, n) => {
  n.fitBounds(t.bounds);
};
class vh extends fo {
  constructor({ map: t, markers: n = [], algorithmOptions: a = {}, algorithm: i = new mh(a), renderer: l = new Ch(), onClusterClick: o = bh }) {
    super(), this.markers = [...n], this.clusters = [], this.algorithm = i, this.renderer = l, this.onClusterClick = o, t && this.setMap(t);
  }
  addMarker(t, n) {
    this.markers.includes(t) || (this.markers.push(t), n || this.render());
  }
  addMarkers(t, n) {
    t.forEach((a) => {
      this.addMarker(a, !0);
    }), n || this.render();
  }
  removeMarker(t, n) {
    const a = this.markers.indexOf(t);
    return a === -1 ? !1 : (tt.setMap(t, null), this.markers.splice(a, 1), n || this.render(), !0);
  }
  removeMarkers(t, n) {
    let a = !1;
    return t.forEach((i) => {
      a = this.removeMarker(i, !0) || a;
    }), a && !n && this.render(), a;
  }
  clearMarkers(t) {
    this.markers.length = 0, t || this.render();
  }
  /**
   * Recalculates and draws all the marker clusters.
   */
  render() {
    const t = this.getMap();
    if (t instanceof google.maps.Map && t.getProjection()) {
      google.maps.event.trigger(this, Yn.CLUSTERING_BEGIN, this);
      const { clusters: n, changed: a } = this.algorithm.calculate({
        markers: this.markers,
        map: t,
        mapCanvasProjection: this.getProjection()
      });
      if (a || a == null) {
        const i = /* @__PURE__ */ new Set();
        for (const o of n)
          o.markers.length == 1 && i.add(o.markers[0]);
        const l = [];
        for (const o of this.clusters)
          o.marker != null && (o.markers.length == 1 ? i.has(o.marker) || tt.setMap(o.marker, null) : l.push(o.marker));
        this.clusters = n, this.renderClusters(), requestAnimationFrame(() => l.forEach((o) => tt.setMap(o, null)));
      }
      google.maps.event.trigger(this, Yn.CLUSTERING_END, this);
    }
  }
  onAdd() {
    this.idleListener = this.getMap().addListener("idle", this.render.bind(this)), this.render();
  }
  onRemove() {
    google.maps.event.removeListener(this.idleListener), this.reset();
  }
  reset() {
    this.markers.forEach((t) => tt.setMap(t, null)), this.clusters.forEach((t) => t.delete()), this.clusters = [];
  }
  renderClusters() {
    const t = new yh(this.markers, this.clusters), n = this.getMap();
    this.clusters.forEach((a) => {
      a.markers.length === 1 ? a.marker = a.markers[0] : (a.marker = this.renderer.render(a, t, n), a.markers.forEach((i) => tt.setMap(i, null)), this.onClusterClick && a.marker.addListener(
        "click",
        /* istanbul ignore next */
        (i) => {
          google.maps.event.trigger(this, Yn.CLUSTER_CLICK, a), this.onClusterClick(i, a, n);
        }
      )), tt.setMap(a.marker, n);
    });
  }
}
const kh = {
  lat: 37.09024,
  lng: -95.712891
}, wh = ({ apiKey: e = "" }) => {
  const t = E.useRef(null), { config: n } = E.useContext(fe);
  return E.useEffect(() => {
    new Qt({
      apiKey: e,
      version: "weekly"
    }).load().then(() => {
      if (t.current) {
        const i = new window.google.maps.Map(t.current, {
          center: kh,
          zoom: 4
        }), l = n.data.map((o) => {
          const r = document.createElement("div");
          return r.style.backgroundColor = "orange", r.style.width = "25px", r.style.height = "25px", r.style.borderRadius = "50%", r.style.display = "flex", r.style.alignItems = "center", r.style.justifyContent = "center", r.style.color = "white", r.innerText = o[n.columns.geo.name], new google.maps.Marker({
            position: { lat: Number(o[n.columns.latitude.name]), lng: Number(o[n.columns.longitude.name]) },
            title: o[n.columns.geo.name],
            map: i
          });
        });
        new vh({ markers: l, map: i });
      }
    }).catch((i) => {
      console.error("Error loading Google Maps API:", i);
    });
  }, [e, n]), /* @__PURE__ */ s("div", { ref: t, style: { height: "500px", width: "100%" } });
}, Lh = (e) => {
  const [t, n] = E.useState([0, 0]), [a, i] = E.useState(null), [l, o] = E.useState(null), r = new k1((h) => {
    for (let c of h) {
      let { width: d, height: u } = c.contentRect;
      d = e ? d - s1 : d;
      const p = w1(d);
      i(p), n([d, u]);
    }
  }), g = E.useCallback((h) => (h !== null && r.observe(h), o(h), () => {
    r.disconnect();
  }), []);
  return { resizeObserver: r, dimensions: t, currentViewport: a, outerContainerRef: g, container: l };
}, Th = (e, t) => {
  const { config: n, setConfig: a, runtimeFilters: i } = E.useContext(fe);
  return { generateRuntimeLegend: E.useCallback(
    (o, r, g) => {
      try {
        r || Error("No runtime data provided"), g || Error("No hash provided"), o || Error("No config object provided"), e || Error("No legend memo provided"), t || Error("No legend special class last memo provided");
        const h = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = Object.keys(fs), { data: u, legend: p, columns: f, general: S } = o, m = f.primary.name, y = S.type === "bubble", v = f.categorical ? f.categorical.name : void 0, C = {
          fromHash: null,
          runtimeDataHash: null,
          items: []
        };
        g && (C.fromHash = g), C.runtimeDataHash = i == null ? void 0 : i.fromHash;
        let w = p.unified ? u : Object == null ? void 0 : Object.values(r), N = 0, P = {};
        if (p.specialClasses.length && (typeof p.specialClasses[0] == "object" ? p.specialClasses.forEach((F) => {
          w = w.filter((I) => {
            const O = String(I[F.key]);
            if (F.value === O) {
              P[O] === void 0 && (P[O] = !0, C.items.push({
                special: !0,
                value: O,
                label: F.label
              }), C.items[C.items.length - 1].color = un(
                C.items.length - 1,
                o,
                C.items
              ), N += 1);
              let U;
              return U = C.items.findIndex((k) => k.value === O), h.set(ot(I), U), !1;
            }
            return !0;
          });
        }) : w = w.filter((F) => {
          const I = F[m];
          if (p.specialClasses.includes(I)) {
            P[I] === void 0 && (P[I] = !0, C.items.push({
              special: !0,
              value: I
            }), C.items[C.items.length - 1].color = un(
              C.items.length - 1,
              o,
              C.items
            ), N += 1);
            let O = 0;
            return Object.values(F).includes(I) && (O = C.items.findIndex((U) => U.value === I)), h.set(ot(F), O), !1;
          }
          return !0;
        })), p.type === "category") {
          let F = /* @__PURE__ */ new Map(), I = 0;
          for (let T = 0; T < w.length; T++) {
            let D = w[T], A = y && v && D[v] ? D[v] : D[m];
            A !== void 0 && (F.has(A) === !1 ? (F.set(A, [ot(D)]), I++) : F.get(A).push(ot(D)));
          }
          let O = [...F.keys()];
          p.additionalCategories && p.additionalCategories.forEach((T) => {
            T && U1(O, T) === -1 && O.push(T);
          });
          let U = p.categoryValuesOrder ?? [];
          U.length ? O.sort((T, D) => {
            let A = U.indexOf(T), $ = U.indexOf(D);
            return A === $ ? 0 : A === -1 ? 1 : $ === -1 ? -1 : A - $;
          }) : O.sort((T, D) => T - D), O.forEach((T) => {
            C.items.push({
              value: T
            });
            let D = C.items.length - 1, A = F.get(T);
            A && A.forEach(($) => h.set($, D));
          });
          for (let T = 0; T < C.items.length; T++)
            C.items[T].color = un(T, o, C.items);
          e.current = h, Ti(C), Ro(C, p);
          const k = (T, D) => {
            const A = C.items.findIndex(($) => $.bin === T);
            c.set(D, A);
          };
          h.forEach(k), t.current = c;
          const b = C.items.filter((T) => T.special).map((T) => T.value);
          return C.items.filter((T) => T.special || !b.includes(T.value)), C;
        }
        let x = {};
        w.forEach((F) => {
          x[F[m]] = !0;
        });
        let _ = Math.min(p.numberOfItems, Object.keys(x).length);
        if (p.separateZero === !0 && !S.equalNumberOptIn) {
          let F = !1;
          for (let I = 0; I < w.length; I++)
            if (w[I][m] === 0) {
              F = !0;
              let O = w.splice(I, 1)[0];
              h.set(ot(O), C.items.length), I--;
            }
          if (F) {
            _ -= 1, C.items.push({
              min: 0,
              max: 0
            });
            let I = C.items.length - 1;
            C.items[I].color = un(I, o, C.items);
          }
        }
        if (S.type !== "us-geocode" && (w = w.filter((F) => typeof F[m] == "number").sort((F, I) => {
          let O = F[m], U = I[m];
          return O - U;
        })), p.type === "equalnumber")
          if (S.equalNumberOptIn) {
            let F = new Set(w.map((D) => D[f.primary.name]));
            F = c1(F);
            let O = Ge[o.color].slice(0, p.numberOfItems);
            const U = () => {
              var D;
              return ((D = f == null ? void 0 : f.primary) == null ? void 0 : D.roundToPlace) !== void 0 && (S != null && S.equalNumberOptIn) ? ne.uniq(
                w.map(
                  (A) => {
                    var $;
                    return Number(A[f.primary.name]).toFixed(Number(($ = f == null ? void 0 : f.primary) == null ? void 0 : $.roundToPlace));
                  }
                )
              ) : ne.uniq(w.map((A) => Math.round(Number(A[f.primary.name]))));
            }, k = (D) => {
              var A;
              return ((A = f == null ? void 0 : f.primary) == null ? void 0 : A.roundToPlace) !== void 0 && (S != null && S.equalNumberOptIn) ? D.quantiles().map(($) => {
                var V, B;
                return (B = Number($)) == null ? void 0 : B.toFixed(Number((V = f == null ? void 0 : f.primary) == null ? void 0 : V.roundToPlace));
              }) : D.quantiles().map(($) => Number(Math.round($)));
            };
            let b = ks().domain(U()).range(O);
            const T = k(b);
            T[0] !== 0 && T.unshift(0), T.map((D, A) => {
              const $ = (H) => {
                let Z = T[H];
                return H === 0 && p.separateZero && (Z = 0), H === 1 && p.separateZero && (Z = 1), Z;
              }, V = (H) => Math.pow(10, -H), B = (H) => {
                var X, J;
                let Z = Number(T[H + 1]) - V(Number((J = (X = o == null ? void 0 : o.columns) == null ? void 0 : X.primary) == null ? void 0 : J.roundToPlace));
                return H === 0 && p.separateZero && (Z = 0), H + 1 === T.length && (Z = F[1]), Z;
              };
              let G = $(A), W = B(A);
              C.items.push({
                min: G,
                max: W,
                color: b(D)
              }), w.forEach((H) => {
                var J, ee, re, ve, Ne, te;
                let Z = H[f.primary.name], X = C.items.length - 1;
                ((ee = (J = C.items) == null ? void 0 : J[X]) == null ? void 0 : ee.min) === void 0 || ((ve = (re = C.items) == null ? void 0 : re[X]) == null ? void 0 : ve.max) === void 0 || Z >= ((Ne = C == null ? void 0 : C.items) == null ? void 0 : Ne[X].min) && Z <= ((te = C == null ? void 0 : C.items) == null ? void 0 : te[X].max) && h.set(ot(H), X);
              });
            });
          } else {
            let F = w.length, I = _, O, U;
            for (; F > 0; ) {
              O = F % I, U = Math.floor(F / I), O > 0 && (U += 1);
              let k = w.splice(0, U), b = k[0][m], T = k[k.length - 1][m];
              k.forEach((D) => {
                h.set(ot(D), C.items.length);
              }), C.items.push({
                min: b,
                max: T
              }), C.items[C.items.length - 1].color = un(
                C.items.length - 1,
                o,
                C.items
              ), I -= 1, F -= U;
            }
          }
        if (p.type === "equalinterval" && (w == null ? void 0 : w.length) !== 0) {
          if (!w || w.length === 0) {
            a({
              ...o,
              runtime: {
                ...o.runtime,
                editorErrorMessage: "Error setting equal interval legend type"
              }
            });
            return;
          }
          w = w.filter((U) => U[m] !== void 0);
          let F = w[0][m], I = w[w.length - 1][m], O = 0;
          for (let U = 0; U < _; U++) {
            let k = Math.abs(I - F) / _, b = F + k * U, T = b + k;
            for (U === _ - 1 && (T = I); O < w.length && w[O][m] <= T; )
              h.set(ot(w[O]), C.items.length), O += 1;
            let D = {
              min: Math.round(b * 100) / 100,
              max: Math.round(T * 100) / 100
            };
            C.items.push(D), C.items[C.items.length - 1].color = un(
              C.items.length - 1,
              o,
              C.items
            );
          }
        }
        if (Ti(C), e.current = h, S.geoType === "world") {
          const F = Object.keys(r), I = u === void 0 ? !1 : !d.every((O) => F.includes(O));
          C.items.length > 0 && I && C.items.push({
            min: null,
            max: null,
            color: Tn(o)
          });
        }
        Ti(C), Ro(C, p);
        const z = (F, I) => {
          const O = C.items.findIndex((U) => U.bin === F);
          c.set(I, O);
        };
        return h.forEach(z), t.current = c, C;
      } catch (h) {
        return console.error(h), [];
      }
    },
    [e, n, i, a]
  ) };
}, Nh = {
  annotations: [],
  general: {
    navigationTarget: "_self",
    noStateFoundMessage: "Map Unavailable",
    annotationDropdownText: "Annotations",
    geoBorderColor: "darkGray",
    headerColor: "theme-blue",
    title: "",
    showTitle: !0,
    showSidebar: !0,
    showDownloadMediaButton: !1,
    displayAsHex: !1,
    displayStateLabels: !0,
    territoriesAlwaysShow: !1,
    language: "en",
    geoType: "single-state",
    geoLabelOverride: "",
    hasRegions: !1,
    fullBorder: !1,
    type: "data",
    convertFipsCodes: !0,
    palette: {
      isReversed: !1
    },
    allowMapZoom: !0,
    hideGeoColumnInTooltip: !1,
    hidePrimaryColumnInTooltip: !1,
    statePicked: {
      fipsCode: "01",
      stateName: "Alabama"
    }
  },
  type: "map",
  color: "pinkpurple",
  columns: {
    geo: {
      name: "FIPS Codes",
      label: "Location",
      tooltip: !1,
      dataTable: !0
    },
    primary: {
      dataTable: !0,
      tooltip: !0,
      prefix: "",
      suffix: "",
      name: "",
      label: "",
      roundToPlace: 0
    },
    navigate: {
      name: ""
    },
    latitude: { name: "" },
    longitude: { name: "" }
  },
  legend: {
    descriptions: {},
    specialClasses: [],
    unified: !1,
    singleColumn: !1,
    singleRow: !1,
    verticalSorted: !1,
    showSpecialClassesLast: !1,
    dynamicDescription: !1,
    type: "equalnumber",
    numberOfItems: 3,
    position: "side",
    title: "",
    style: "circles",
    subStyle: "linear blocks",
    tickRotation: "",
    singleColumnLegend: !1,
    hideBorder: !1,
    groupBy: ""
  },
  filters: [],
  data: [],
  table: {
    wrapColumns: !1,
    label: "Data Table",
    expanded: !1,
    limitHeight: !1,
    height: "",
    caption: "",
    showDownloadUrl: !1,
    showDataTableLink: !0,
    showDownloadLinkBelow: !0,
    showFullGeoNameInCSV: !1,
    forceDisplay: !0,
    download: !1,
    indexLabel: "",
    cellMinWidth: "0"
  },
  tooltips: {
    appearanceType: "hover",
    linkLabel: "Learn More",
    capitalizeLabels: !0,
    opacity: 90
  },
  runtime: {
    editorErrorMessage: []
  },
  visual: {
    minBubbleSize: 1,
    maxBubbleSize: 20,
    extraBubbleBorder: !1,
    cityStyle: "circle",
    cityStyleLabel: "",
    showBubbleZeros: !1,
    additionalCityStyles: [],
    geoCodeCircleSize: 8,
    showBubbleZeros: !1
  },
  mapPosition: { coordinates: [0, 30], zoom: 1 },
  map: {
    layers: [],
    patterns: []
  },
  hexMap: {
    type: "",
    shapeGroups: [
      {
        legendTitle: "",
        legendDescription: "",
        items: [{ key: "", shape: "Arrow Up", column: "", operator: "=", value: "" }]
      }
    ]
  },
  filterBehavior: "Filter Change",
  filterIntro: ""
}, _c = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__, Mh = _c ? window.__REDUX_DEVTOOLS_EXTENSION__.connect() : null, Wi = _c ? Mh : null, Eh = (e) => (t, n) => {
  const a = e(t, n);
  return Wi == null || Wi.send(n, a), a;
}, xh = (e = {}) => ({
  config: ne.merge({}, Nh, e),
  loading: !1,
  accessibleStatus: "",
  coveLoadedHasRan: !1,
  displayPanel: !1,
  filteredCountryCode: "",
  isDraggingAnnotation: !1,
  topoData: null,
  translate: [0, 0],
  position: { coordinates: [0, 0], zoom: 1 },
  projection: null,
  requiredColumns: [],
  scale: 1,
  modal: null,
  runtimeData: { init: !0 },
  runtimeFilters: [],
  runtimeLegend: [],
  stateToShow: ""
}), Ph = (e, t) => {
  switch (t.type) {
    case "SET_CONFIG":
      return { ...e, config: t.payload };
    case "SET_LOADING":
      return { ...e, loading: t.payload };
    case "SET_ACCESSIBLE_STATUS":
      return { ...e, accessibleStatus: t.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...e, coveLoadedHasRan: t.payload };
    case "SET_DISPLAY_PANEL":
      return { ...e, displayPanel: t.payload };
    case "SET_FILTERED_COUNTRY_CODE":
      return { ...e, filteredCountryCode: t.payload };
    case "SET_IS_DRAGGING_ANNOTATION":
      return { ...e, isDraggingAnnotation: t.payload };
    case "SET_TOPO_DATA":
      return { ...e, topoData: t.payload };
    case "SET_TRANSLATE":
      return { ...e, translate: t.payload };
    case "SET_POSITION":
      return { ...e, position: t.payload };
    case "SET_REQUIRED_COLUMNS":
      return { ...e, requiredColumns: t.payload };
    case "SET_SCALE":
      return { ...e, scale: t.payload };
    case "SET_MODAL":
      return { ...e, modal: t.payload };
    case "SET_RUNTIME_DATA":
      return { ...e, runtimeData: t.payload };
    case "SET_RUNTIME_FILTERS":
      return { ...e, runtimeFilters: t.payload };
    case "SET_RUNTIME_LEGEND":
      return { ...e, runtimeLegend: t.payload };
    case "SET_STATE_TO_SHOW":
      return { ...e, stateToShow: t.payload };
    default:
      return e;
  }
}, Dh = Eh(Ph), Ah = () => {
  const e = E.useContext(it);
  return {
    closeModal: ({ target: n }, a) => {
      typeof n.className == "string" && (n.className.includes("modal-close") || n.className.includes("modal-background")) && a !== null && e({ type: "SET_MODAL", payload: null });
    }
  };
}, ug = ({
  config: e,
  navigationHandler: t,
  isDashboard: n = !1,
  isEditor: a = !1,
  logo: i = "",
  setSharedFilter: l,
  setSharedFilterValue: o,
  link: r,
  setEditorConfig: g
}) => {
  var oa, mo, yo, Co, So, bo;
  const h = xh(e), [c, d] = E.useReducer(Dh, h), {
    loading: u,
    displayPanel: p,
    runtimeData: f,
    runtimeFilters: S,
    runtimeLegend: m,
    config: y,
    modal: v,
    accessibleStatus: C,
    filteredCountryCode: w,
    position: N,
    scale: P,
    translate: x,
    projection: _,
    stateToShow: z,
    requiredColumns: F,
    topoData: I,
    coveLoadedHasRan: O,
    isDraggingAnnotation: U
  } = c, k = E.useContext(u1), b = (ge) => {
    a && !n ? d({ type: "SET_CONFIG", payload: ge }) : (d({ type: "SET_CONFIG", payload: ge }), k.setTempConfig(ge));
  };
  E.useEffect(() => {
    b({ ...y, data: e.data });
  }, [e.data]);
  const T = (ge) => {
    d({ type: "SET_RUNTIME_DATA", payload: ge });
  }, D = (ge) => {
    d({ type: "SET_RUNTIME_FILTERS", payload: ge });
  }, A = (ge) => {
    d({ type: "SET_RUNTIME_LEGEND", payload: ge });
  }, $ = (ge) => {
    y ? T(ge) : D(ge);
  }, V = new v1(), B = E.useRef(), G = E.useRef(/* @__PURE__ */ new Map()), W = E.useRef(null), H = E.useRef(/* @__PURE__ */ new Map()), Z = E.useRef(null), X = E.useRef(null), J = E.useId(), ee = E.useId(), re = E.useId(), ve = E.useId(), { currentViewport: Ne, dimensions: te, container: Oe, outerContainerRef: He } = Lh(a), { generateRuntimeLegend: Mt } = Th(G, H), { generateRuntimeData: sn } = Ic(y), Nn = async () => {
    if (y.dataUrl) {
      const ge = new URL(y.runtimeDataUrl || y.dataUrl, window.location.origin);
      let Pe = Object.fromEntries(new URLSearchParams(ge.search)), Mn = !1;
      if (y.filters.forEach((et) => {
        et.type === "url" && Pe[et.queryParameter] !== decodeURIComponent(et.active) && (Pe[et.queryParameter] = et.active, Mn = !0);
      }), !Mn)
        return;
      let Et = `${ge.origin}${ge.pathname}${Object.keys(Pe).map((et, qt) => {
        let Pt = qt === 0 ? "?" : "&";
        return Pt += et + "=", Pt += Pe[et], Pt;
      }).join("")}`, rt;
      try {
        const qt = /(?:\.([^.]+))?$/.exec(ge.pathname)[1];
        qt === "csv" || L1(Et) ? rt = await fetch(Et).then((Pt) => Pt.text()).then((Pt) => d1.parse(Pt, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          encoding: "utf-8"
        }).data) : qt === "json" || T1(Et) ? rt = await fetch(Et).then((Pt) => Pt.json()) : rt = [];
      } catch (et) {
        console.error(`Cannot parse URL: ${Et}`), console.log(et), rt = [];
      }
      y.dataDescription && (rt = V.autoStandardize(rt), rt = V.developerStandardize(rt, y.dataDescription));
      const xt = ne.cloneDeep(y);
      xt.data = rt, xt.runtimeDataUrl = Et, b(xt);
    }
  };
  E.useEffect(() => {
    y && !f.init && !O && Oe && (S1("cove_loaded", { config: y }), d({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [y, Oe, f.init]), E.useEffect(() => {
    var rt;
    y.data && y.columns.geo.name && y.columns.geo.name !== y.data.fromColumn && Ia(y, y.columns.geo.name);
    const ge = ot(y.filters);
    let Pe;
    y.filters && (y || ge !== S.fromHash) && (Pe = s0({ ...y, data: e.data }, ge, S), Pe && (Pe.forEach((xt, et) => {
      const qt = y1(xt);
      qt && (Pe[et].active = qt);
    }), D(Pe)));
    const Mn = Ao(y, S), Et = ot({
      data: y.data,
      columns: y.columns,
      geoType: y.general.geoType,
      type: y.general.type,
      geo: y.columns.geo.name,
      primary: y.columns.primary.name,
      mapPosition: y.mapPosition,
      map: y.map,
      ...S
    });
    if (Et !== (f == null ? void 0 : f.fromHash) && ((rt = y.data) != null && rt.fromColumn)) {
      const xt = sn(
        { ...y, data: e.data },
        Pe || S,
        Et
      );
      T(xt);
    } else if (Mn !== (m == null ? void 0 : m.fromHash) && (f == null ? void 0 : f.init) === void 0) {
      const xt = Mt(y, f, Mn);
      A(xt);
    }
  }, [y, e.data]), E.useEffect(() => {
    const ge = Ao(y, S), Pe = Mt({ ...y, data: e.data }, f, ge);
    A(Pe);
  }, [
    f,
    y.legend.unified,
    y.legend.showSpecialClassesLast,
    y.legend.separateZero,
    y.general.equalNumberOptIn,
    y.legend.numberOfItems,
    y.legend.specialClasses,
    y.legend.additionalCategories,
    y,
    S
  ]), E.useEffect(() => {
    n || Nn();
  }, [JSON.stringify(y.filters)]);
  const { general: Ee, tooltips: Ae, table: Qe, columns: Ct } = y, { subtext: Re = "", geoType: Te } = Ee, { showDownloadImgButton: Fe, showDownloadPdfButton: L, headerColor: R, introText: j } = Ee, { closeModal: Y } = Ah();
  let Q = y.general.title;
  a && (!Q || Q === "") && (Q = "Map Title"), (!Qe.label || Qe.label === "") && (Qe.label = "Data Table");
  const ke = {
    setEditorConfig: g,
    container: Oe,
    content: v,
    currentViewport: Ne,
    customNavigationHandler: t,
    data: f,
    dimensions: te,
    filteredCountryCode: w,
    innerContainerRef: B,
    isDashboard: n,
    isEditor: a,
    legendMemo: G,
    legendSpecialClassLastMemo: H,
    logo: i,
    mapId: re,
    outerContainerRef: He,
    position: N,
    projection: _,
    runtimeData: f,
    runtimeFilters: S,
    runtimeLegend: m,
    scale: P,
    setConfig: b,
    setParentConfig: b,
    setRuntimeData: T,
    setRuntimeFilters: D,
    setRuntimeLegend: A,
    setSharedFilter: l,
    setSharedFilterValue: o,
    config: y,
    stateToShow: z,
    tooltipId: ve,
    tooltipRef: X,
    topoData: I,
    translate: x,
    isDraggingAnnotation: U
  };
  if (!y.data)
    return /* @__PURE__ */ s(le, {});
  const ut = _1(y, u, ee), zt = /* @__PURE__ */ M("a", { href: `#data-table-${y.dataKey}`, className: "margin-left-href", children: [
    y.dataKey,
    " (Go to Table)"
  ] }), cn = () => {
    var Pe;
    const ge = ["cove-component__content", "cdc-map-inner-container", `${Ne}`, `${R}`];
    return ((Pe = y == null ? void 0 : y.runtime) == null ? void 0 : Pe.editorErrorMessage.length) > 0 && ge.push("type-map--has-error"), ge.join(" ");
  };
  return /* @__PURE__ */ s(fe.Provider, { value: ke, children: /* @__PURE__ */ s(it.Provider, { value: d, children: /* @__PURE__ */ M(
    ji.VisualizationWrapper,
    {
      config: y,
      isEditor: a,
      ref: He,
      currentViewport: Ne,
      imageId: J,
      showEditorPanel: y.showEditorPanel,
      children: [
        a && /* @__PURE__ */ s(Wu, {}),
        /* @__PURE__ */ M(ji.Responsive, { isEditor: a, children: [
          (F == null ? void 0 : F.length) > 0 && /* @__PURE__ */ s(l0, { requiredColumns: F, className: p ? "waiting" : "waiting collapsed" }),
          !f.init && (Ee.type === "navigation" || m) && /* @__PURE__ */ M("section", { className: cn(), "aria-label": "Map: " + Q, ref: B, children: [
            ((oa = y == null ? void 0 : y.runtime) == null ? void 0 : oa.editorErrorMessage.length) > 0 && /* @__PURE__ */ s(ju, {}),
            /* @__PURE__ */ s(
              b1,
              {
                title: Q,
                superTitle: Ee.superTitle,
                config: y,
                classes: ["map-title", Ee.showTitle === !0 ? "visible" : "hidden", `${R}`]
              }
            ),
            /* @__PURE__ */ s(Mo, { skipId: ut, skipMessage: "Skip Over Map Container" }),
            ((mo = y == null ? void 0 : y.annotations) == null ? void 0 : mo.length) > 0 && /* @__PURE__ */ s(Mo, { skipId: ut, skipMessage: "Skip over annotations" }, "skip-annotations"),
            j && /* @__PURE__ */ s("section", { className: "introText mb-4", children: Rt(j) }),
            ((yo = y == null ? void 0 : y.filters) == null ? void 0 : yo.length) > 0 && /* @__PURE__ */ s(
              C1,
              {
                config: y,
                setConfig: b,
                filteredData: S,
                setFilteredData: $,
                dimensions: te,
                standaloneMap: !y
              }
            ),
            /* @__PURE__ */ M(
              "div",
              {
                role: "region",
                tabIndex: 0,
                className: G1(y, v).join(" "),
                onClick: (ge) => Y(ge, v),
                onKeyDown: (ge) => {
                  ge.key === "Enter" && Y(ge, v);
                },
                children: [
                  /* @__PURE__ */ s(
                    "section",
                    {
                      className: "outline-none geography-container w-100 position-relative",
                      ref: Z,
                      tabIndex: "0",
                      children: Ne && /* @__PURE__ */ M(le, { children: [
                        v && /* @__PURE__ */ s(Qu, {}),
                        Te === "single-state" && /* @__PURE__ */ s(wa.SingleState, {}),
                        Te === "us" && y.general.type !== "us-geocode" && /* @__PURE__ */ s(wa.State, {}),
                        Te === "us-region" && /* @__PURE__ */ s(wa.Region, {}),
                        Te === "us-county" && /* @__PURE__ */ s(wa.County, {}),
                        Te === "world" && /* @__PURE__ */ s(ih, {}),
                        Te === "google-map" && /* @__PURE__ */ s(wh, {}),
                        /* logo is handled in UsaMap.State when applicable */
                        // prettier-ignore
                        Ee.type === "data" && i && (Te !== "us" || Ee.type === "us-geocode") && /* @__PURE__ */ s("img", { src: i, alt: "", className: "map-logo", style: { maxWidth: "50px" } })
                      ] })
                    }
                  ),
                  Ee.showSidebar && Ee.type !== "navigation" && /* @__PURE__ */ s(
                    Yu,
                    {
                      dimensions: te,
                      ref: W,
                      skipId: ut,
                      containerWidthPadding: 0,
                      currentViewport: Ne
                    }
                  )
                ]
              }
            ),
            Ee.type === "navigation" && /* @__PURE__ */ s(
              ed,
              {
                mapTabbingID: ut,
                displayGeoName: Ie,
                data: f,
                options: Ee,
                columns: y.columns,
                navigationHandler: (ge) => Oa("_blank", ge, t)
              }
            ),
            n && ((Co = y.table) != null && Co.forceDisplay) && y.table.showDataTableLink ? zt : r && r,
            Re.length > 0 && /* @__PURE__ */ s("p", { className: "subtext mt-4", children: Rt(Re) }),
            /* @__PURE__ */ M(wi.Section, { classes: ["download-buttons"], children: [
              Fe && /* @__PURE__ */ s(
                wi.Button,
                {
                  text: "Download Image",
                  title: "Download Chart as Image",
                  type: "image",
                  state: y,
                  elementToCapture: J
                }
              ),
              L && /* @__PURE__ */ s(
                wi.Button,
                {
                  text: "Download PDF",
                  title: "Download Chart as PDF",
                  type: "pdf",
                  state: y,
                  elementToCapture: J
                }
              )
            ] }),
            ((So = y == null ? void 0 : y.runtime) == null ? void 0 : So.editorErrorMessage.length) === 0 && Qe.forceDisplay === !0 && Ee.type !== "navigation" && u === !1 && /* @__PURE__ */ s(
              f1,
              {
                columns: Ct,
                config: y,
                currentViewport: Ne,
                displayGeoName: Ie,
                expandDataTable: Qe.expanded,
                formatLegendLocation: (ge) => {
                  var Pe;
                  return $1(ge, (Pe = f == null ? void 0 : f[ge]) == null ? void 0 : Pe[y.columns.geo.name]);
                },
                headerColor: Ee.headerColor,
                imageRef: J,
                indexTitle: Qe.indexLabel,
                innerContainerRef: B,
                legendMemo: G,
                legendSpecialClassLastMemo: H,
                navigationHandler: Oa,
                outerContainerRef: He,
                rawData: y.data,
                runtimeData: f,
                runtimeLegend: m,
                showDownloadImgButton: Fe,
                showDownloadPdfButton: L,
                tabbingId: ut,
                tableTitle: Qe.label,
                vizTitle: Ee.title,
                wrapColumns: Qe.wrapColumns
              }
            ),
            ((bo = y.annotations) == null ? void 0 : bo.length) > 0 && /* @__PURE__ */ s(ea.Dropdown, {}),
            Ee.footnotes && /* @__PURE__ */ s("section", { className: "footnotes pt-2 mt-4", children: Rt(Ee.footnotes) })
          ] }),
          /* @__PURE__ */ s("div", { "aria-live": "assertive", className: "cdcdataviz-sr-only", children: C }),
          !U && !window.matchMedia("(any-hover: none)").matches && Ae.appearanceType === "hover" && /* @__PURE__ */ s(
            ps,
            {
              id: `tooltip__${ve}`,
              float: !0,
              className: `${Ae.capitalizeLabels ? "capitalize tooltip tooltip-test" : "tooltip tooltip-test"}`,
              style: { background: `rgba(255,255,255, ${y.tooltips.opacity / 100})`, color: "black" }
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              ref: X,
              id: `tooltip__${ve}-canvas`,
              className: "tooltip",
              style: {
                background: `rgba(255,255,255,${y.tooltips.opacity / 100})`,
                position: "absolute",
                whiteSpace: "nowrap",
                display: "none"
                // can't use d-none here
              }
            }
          )
        ] })
      ]
    }
  ) }) });
};
export {
  Na as A,
  ug as C,
  A0 as S,
  Wi as a,
  Eh as d,
  $o as e,
  Nh as i
};
