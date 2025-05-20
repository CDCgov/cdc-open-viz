import { j as l, a as E, F as re } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { R as ie, r as P } from "./storybook-index-f2fed736.es.js";
import { t as eo, p as Po, q as Kc, e as Zc, i as to, T as wi, g as tn, h as Xt, j as Ti, k as Yc, y as Xc, s as Jc, l as Qc, P as ca, m as Do, n as e1, o as t1, H as n1, u as Ao, v as a1, M as i1, w as r1, x as o1, z as hs, d as l1, B as s1, D as gs, I as c1, J as u1, K as d1, V as p1, L as h1, A as g1, N as f1, G as gi, O as m1, Q as fs, R as ms, S as ys, U as Cs, W as bn, X as Yi, Y as Ro, Z as y1, _ as C1, C as S1 } from "./storybook-ConfigContext-9f571f8e.es.js";
import { T as Z, k as Ss } from "./storybook-Tooltip-5b6ee371.es.js";
import { E as Ht, i as Oo, b as b1, c as v1, d as Io, L as bs, P as k1 } from "./storybook-viewports-6b80499f.es.js";
import { p as Rt } from "./storybook-index-31bf6905.es.js";
import { G as Pn, a as Ni, S as L1, h as lt, b as xe, H as w1, L as vs, d as Hn, i as T1, c as ze, e as _e, f as Ue, g as an, j as $o, k as ks, l as zo, M as Mi, D as N1 } from "./storybook-DataTable-8965f731.es.js";
import { h as M1, g as E1, F as x1, a as P1 } from "./storybook-Filters-1bcf5dff.es.js";
import { _ as ne } from "./storybook-lodash-a4231e1c.es.js";
import { L as Xi, u as D1, b as Ls, p as A1, i as R1, a as O1 } from "./storybook-useDataVizClasses-2dec1abb.es.js";
import { T as I1 } from "./storybook-index-4a64ea6e.es.js";
import { S as Le, C as Ei, T as Se, F as $1, a as z1 } from "./storybook-FootnotesStandAlone-282ea454.es.js";
import { D as _1 } from "./storybook-DataTransform-cd90df2e.es.js";
import { c as Ge } from "./storybook-colorPalettes-bc80e395.es.js";
import { c as _o, n as U1 } from "./storybook-index-80cf478c.es.js";
import { B as no } from "./storybook-Button-f953e457.es.js";
import { a as de, j as F1, k as G1, l as B1 } from "./storybook-Icon-e250778e.es.js";
import "./storybook-MultiSelect-2a170cbd.es.js";
import "./storybook-Loader-0256c39d.es.js";
import "./storybook-NestedDropdown-92b50717.es.js";
import { s as Ji, a as hn, b as qn, c as Bt, e as ws, f as fi, g as W1, t as ea, C as fe, M as it, h as Wt, d as Ie } from "./storybook-context-84915700.es.js";
import { P as V } from "./storybook-index-43433e35.es.js";
import { a as Be, b as We, c as je, d as Ve, A as ta } from "./storybook-index-d975883a.es.js";
import { A as ua } from "./storybook-Accordion-edcda35b.es.js";
import { j as j1, s as V1, t as H1, c as Ot, G as na, l as Ts } from "./storybook-linear-d485c82c.es.js";
import { T as Ns } from "./storybook-Text-0ce4510d.es.js";
import { g as Ms, c as da } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { i as q1, g as K1 } from "./storybook-getViewport-513ec896.es.js";
const Z1 = Object.keys(qn), Y1 = Object.keys(Bt), X1 = Object.keys(ws), J1 = Object.keys(fi), Q1 = Object.keys(Ji), e0 = Object.keys(hn), t0 = {
  state: { keys: Z1, data: qn },
  territory: { keys: Y1, data: Bt },
  region: { keys: X1, data: ws },
  country: { keys: J1, data: fi }
}, Ia = (e, t) => {
  const n = t0[t];
  return n.keys.find((a) => n.data[a].includes(e));
}, n0 = (e, t) => {
  var n, a;
  return !!((n = t.latitude) != null && n.name && ((a = t.longitude) != null && a.name) && e[t.latitude.name] && e[t.longitude.name]);
}, Es = (e) => e == null ? "" : String(e).toUpperCase(), xs = (e) => {
  if (e)
    return e0.find((t) => t === e.toUpperCase());
}, a0 = (e, t) => t && L1.includes(e) ? "US-DC" : null, i0 = (e, t, n) => {
  const a = Es(e[t]);
  let i = Ia(a, "state");
  return i || (i = Ia(a, "territory")), i || (i = xs(a)), i || (i = a0(a, n)), i;
}, r0 = (e, t, n) => {
  const a = e[t];
  let i = Ia(a, "country");
  return !i && (n || a) && (i = xs(a)), i;
}, o0 = (e, t) => {
  const n = e[t];
  return Q1.find((a) => a === n);
}, l0 = (e, t) => {
  t && Object.defineProperty(e, "uid", {
    value: t,
    writable: !0
  });
}, $a = (e, t) => {
  const { general: n, columns: a, data: i } = e, { displayAsHex: o, geoType: s, type: c } = n, { geo: r } = a;
  i.forEach((g) => {
    let u = null;
    if (g.uid = null, !!r.name) {
      switch (s) {
        case Pn.US:
          u = i0(g, r.name, o);
          break;
        case Pn.US_REGION:
          u = Ia(Es(g[r.name]), "region");
          break;
        case Pn.WORLD:
          u = r0(g, r.name, c === Ni.WORLD);
          break;
        case Pn.US_COUNTY:
        case Pn.SINGLE_STATE:
          c !== Ni.US && (u = o0(g, r.name));
          break;
      }
      u || (c === Ni.US ? u = g[r.name] : n0(g, a) && (u = `${g[r.name]}`)), l0(g, u);
    }
  }), e.data.fromColumn = t;
}, Uo = {
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
}, dn = (e, t, n = []) => {
  var S;
  if (!t)
    throw new Error("Config is required");
  const { legend: a, customColors: i, general: o, color: s } = t, { geoType: c, palette: r } = o, g = (a == null ? void 0 : a.specialClasses) ?? [], u = i ?? Ge[s] ?? Ge.bluegreen;
  if (c === "us-region" && u.length < 10 && u.length > 8) {
    const y = _o(u[r.isReversed ? 0 : 8]).darken(0.75).hex();
    r.isReversed ? u.unshift(y) : u.push(y);
  }
  const p = e - g.length;
  if ((S = n[e]) != null && S.special)
    return _o.scale(["#D4D4D4", "#939393"]).colors(g.length)[e];
  if (s.includes("qualitative"))
    return u[p];
  const d = Math.max(n.length - g.length, 1) < 10 ? Math.max(n.length - g.length, 1) : Object.keys(Uo).length, m = (Uo[d] ?? [])[e - g.length] ?? u[p] ?? u.at(-1);
  return u[m];
}, s0 = (e, t) => {
  let n = "";
  const a = W1[e == null ? void 0 : e.substring(0, 2)] || t || "";
  return a && (n += a), Object.keys(Ji).includes(e) && (n += ", " + ea(Ji[e])), n;
}, Fo = (e, t) => lt({
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
}), Vt = (e) => {
  const t = getComputedStyle(document.body);
  return e.general.geoBorderColor === "darkGray" ? t.getPropertyValue("--cool-gray-90") : t.getPropertyValue("--white");
}, Mn = (e) => getComputedStyle(document.body).getPropertyValue("--cool-gray-10"), c0 = (e, t) => {
  let n = {};
  for (let a = 0; a < e.length; a++) {
    let i = e[a][t];
    i !== void 0 && n[i] === void 0 && (n[i] = !0);
  }
  return Object.keys(n);
}, rn = (e = "", t = !1) => {
  t && console.log(`handleMapAriaLabels Testing On: ${e}`);
  try {
    if (!e.general.geoType)
      throw Error("handleMapAriaLabels: no geoType found in state");
    const {
      general: { title: n, geoType: a, statePicked: i }
    } = e;
    let o = "";
    switch (a) {
      case "world":
        o += "World map";
        break;
      case "us":
        o += "United States map";
        break;
      case "us-county":
        o += "United States county map";
        break;
      case "single-state":
        o += `${i.stateName} county map`;
        break;
      case "us-region":
        o += "United States HHS Region map";
        break;
      default:
        o = "Data visualization container";
        break;
    }
    return n && (o += ` with the title: ${n}`), o;
  } catch (n) {
    console.error("COVE: ", n.message);
  }
}, u0 = (e, t, n) => {
  const { general: a, runtime: i, table: o } = e, s = (i == null ? void 0 : i.editorErrorMessage.length) === 0 && o.forceDisplay === !0 && a.type !== "navigation" && t === !1;
  let c;
  return a.showSidebar && (c = n), s && !a.showSidebar && (c = `dataTableSection__${Date.now()}`), e.general.type === "navigation" && (c = `dropdown-${Date.now()}`), c || "!";
}, d0 = (e, t) => {
  for (let n = 0; n < e.length; n++)
    if (t === e[n])
      return n;
  return -1;
}, za = (e, t, n) => {
  if (n) {
    n(t);
    return;
  }
  if (typeof t != "string" || t.trim().length === 0)
    throw Error("Invalid or blank URL. Navigation aborted.");
  const a = new URL(t, window.location.origin);
  window.open(a.toString(), e);
}, p0 = (e, t) => {
  const n = ne.cloneDeep(e);
  n.items.forEach((a) => {
    delete a.disabled;
  }), n.disabledAmt = 0, n.runtimeDataHash = e.runtimeDataHash, t(n);
}, xi = (e) => {
  e.items.forEach((t, n) => {
    t.bin = n;
  });
}, Go = (e, t) => {
  if (t.showSpecialClassesLast) {
    const n = e.items.filter((i) => i.special === !0), a = e.items.filter((i) => !i.special);
    e.items = [...a, ...n];
  }
}, h0 = (e, t) => {
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
var g0 = 0.8908130915292852, Ps = Math.sin(Po / 10) / Math.sin(7 * Po / 10), f0 = Math.sin(eo / 10) * Ps, m0 = -Math.cos(eo / 10) * Ps;
const y0 = {
  draw: function(e, t) {
    var n = Math.sqrt(t * g0), a = f0 * n, i = m0 * n;
    e.moveTo(0, -n), e.lineTo(a, i);
    for (var o = 1; o < 5; ++o) {
      var s = eo * o / 5, c = Math.cos(s), r = Math.sin(s);
      e.lineTo(r * n, -c * n), e.lineTo(c * a - r * i, r * a + c * i);
    }
    e.closePath();
  }
};
var C0 = 1e-12;
function Bo(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function S0(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function b0(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const v0 = function e(t, n, a) {
  function i(o, s) {
    var c = o[0], r = o[1], g = o[2], u = s[0], p = s[1], d = s[2], h = u - c, m = p - r, S = h * h + m * m, y, w;
    if (S < C0)
      w = Math.log(d / g) / t, y = function(x) {
        return [
          c + x * h,
          r + x * m,
          g * Math.exp(t * x * w)
        ];
      };
    else {
      var k = Math.sqrt(S), f = (d * d - g * g + a * S) / (2 * g * n * k), T = (d * d - g * g - a * S) / (2 * d * n * k), L = Math.log(Math.sqrt(f * f + 1) - f), M = Math.log(Math.sqrt(T * T + 1) - T);
      w = (M - L) / t, y = function(x) {
        var R = x * w, z = Bo(L), F = g / (n * k) * (z * b0(t * R + L) - S0(L));
        return [
          c + F * h,
          r + F * m,
          g * z / Bo(t * R + L)
        ];
      };
    }
    return y.duration = w * 1e3 * t / Math.SQRT2, y;
  }
  return i.rho = function(o) {
    var s = Math.max(1e-3, +o), c = s * s, r = c * c;
    return e(s, c, r);
  }, i;
}(Math.SQRT2, 2, 4);
function Ds() {
  var e = [], t = [], n = [], a;
  function i() {
    var s = 0, c = Math.max(1, t.length);
    for (n = new Array(c - 1); ++s < c; )
      n[s - 1] = Kc(e, s / c);
    return o;
  }
  function o(s) {
    return s == null || isNaN(s = +s) ? a : t[H1(n, s)];
  }
  return o.invertExtent = function(s) {
    var c = t.indexOf(s);
    return c < 0 ? [NaN, NaN] : [
      c > 0 ? n[c - 1] : e[0],
      c < n.length ? n[c] : e[e.length - 1]
    ];
  }, o.domain = function(s) {
    if (!arguments.length)
      return e.slice();
    e = [];
    for (let c of s)
      c != null && !isNaN(c = +c) && e.push(c);
    return e.sort(j1), i();
  }, o.range = function(s) {
    return arguments.length ? (t = Array.from(s), i()) : t.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.quantiles = function() {
    return n.slice();
  }, o.copy = function() {
    return Ds().domain(e).range(t).unknown(a);
  }, V1.apply(o, arguments);
}
const pa = (e) => () => e;
function k0(e, {
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
function Pi(e) {
  e.stopImmediatePropagation();
}
function Dn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function L0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function w0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Wo() {
  return this.__zoom || to;
}
function T0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function N0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function M0(e, t, n) {
  var a = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], o = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i),
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s)
  );
}
function E0() {
  var e = L0, t = w0, n = M0, a = T0, i = N0, o = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], c = 250, r = v0, g = Zc("start", "zoom", "end"), u, p, d, h = 500, m = 150, S = 0, y = 10;
  function w(b) {
    b.property("__zoom", Wo).on("wheel.zoom", R, { passive: !1 }).on("mousedown.zoom", z).on("dblclick.zoom", F).filter(i).on("touchstart.zoom", I).on("touchmove.zoom", $).on("touchend.zoom touchcancel.zoom", U).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(b, C, N, A) {
    var _ = b.selection ? b.selection() : b;
    _.property("__zoom", Wo), b !== _ ? L(b, C, N, A) : _.interrupt().each(function() {
      M(this, arguments).event(A).start().zoom(null, typeof C == "function" ? C.apply(this, arguments) : C).end();
    });
  }, w.scaleBy = function(b, C, N, A) {
    w.scaleTo(b, function() {
      var _ = this.__zoom.k, O = typeof C == "function" ? C.apply(this, arguments) : C;
      return _ * O;
    }, N, A);
  }, w.scaleTo = function(b, C, N, A) {
    w.transform(b, function() {
      var _ = t.apply(this, arguments), O = this.__zoom, G = N == null ? T(_) : typeof N == "function" ? N.apply(this, arguments) : N, W = O.invert(G), B = typeof C == "function" ? C.apply(this, arguments) : C;
      return n(f(k(O, B), G, W), _, s);
    }, N, A);
  }, w.translateBy = function(b, C, N, A) {
    w.transform(b, function() {
      return n(this.__zoom.translate(
        typeof C == "function" ? C.apply(this, arguments) : C,
        typeof N == "function" ? N.apply(this, arguments) : N
      ), t.apply(this, arguments), s);
    }, null, A);
  }, w.translateTo = function(b, C, N, A, _) {
    w.transform(b, function() {
      var O = t.apply(this, arguments), G = this.__zoom, W = A == null ? T(O) : typeof A == "function" ? A.apply(this, arguments) : A;
      return n(to.translate(W[0], W[1]).scale(G.k).translate(
        typeof C == "function" ? -C.apply(this, arguments) : -C,
        typeof N == "function" ? -N.apply(this, arguments) : -N
      ), O, s);
    }, A, _);
  };
  function k(b, C) {
    return C = Math.max(o[0], Math.min(o[1], C)), C === b.k ? b : new wi(C, b.x, b.y);
  }
  function f(b, C, N) {
    var A = C[0] - N[0] * b.k, _ = C[1] - N[1] * b.k;
    return A === b.x && _ === b.y ? b : new wi(b.k, A, _);
  }
  function T(b) {
    return [(+b[0][0] + +b[1][0]) / 2, (+b[0][1] + +b[1][1]) / 2];
  }
  function L(b, C, N, A) {
    b.on("start.zoom", function() {
      M(this, arguments).event(A).start();
    }).on("interrupt.zoom end.zoom", function() {
      M(this, arguments).event(A).end();
    }).tween("zoom", function() {
      var _ = this, O = arguments, G = M(_, O).event(A), W = t.apply(_, O), B = N == null ? T(W) : typeof N == "function" ? N.apply(_, O) : N, j = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), H = _.__zoom, K = typeof C == "function" ? C.apply(_, O) : C, X = r(H.invert(B).concat(j / H.k), K.invert(B).concat(j / K.k));
      return function(J) {
        if (J === 1)
          J = K;
        else {
          var te = X(J), Ce = j / te[2];
          J = new wi(Ce, B[0] - te[0] * Ce, B[1] - te[1] * Ce);
        }
        G.zoom(null, J);
      };
    });
  }
  function M(b, C, N) {
    return !N && b.__zooming || new x(b, C);
  }
  function x(b, C) {
    this.that = b, this.args = C, this.active = 0, this.sourceEvent = null, this.extent = t.apply(b, C), this.taps = 0;
  }
  x.prototype = {
    event: function(b) {
      return b && (this.sourceEvent = b), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(b, C) {
      return this.mouse && b !== "mouse" && (this.mouse[1] = C.invert(this.mouse[0])), this.touch0 && b !== "touch" && (this.touch0[1] = C.invert(this.touch0[0])), this.touch1 && b !== "touch" && (this.touch1[1] = C.invert(this.touch1[0])), this.that.__zoom = C, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(b) {
      var C = tn(this.that).datum();
      g.call(
        b,
        this.that,
        new k0(b, {
          sourceEvent: this.sourceEvent,
          target: w,
          type: b,
          transform: this.that.__zoom,
          dispatch: g
        }),
        C
      );
    }
  };
  function R(b, ...C) {
    if (!e.apply(this, arguments))
      return;
    var N = M(this, C).event(b), A = this.__zoom, _ = Math.max(o[0], Math.min(o[1], A.k * Math.pow(2, a.apply(this, arguments)))), O = Xt(b);
    if (N.wheel)
      (N.mouse[0][0] !== O[0] || N.mouse[0][1] !== O[1]) && (N.mouse[1] = A.invert(N.mouse[0] = O)), clearTimeout(N.wheel);
    else {
      if (A.k === _)
        return;
      N.mouse = [O, A.invert(O)], Ti(this), N.start();
    }
    Dn(b), N.wheel = setTimeout(G, m), N.zoom("mouse", n(f(k(A, _), N.mouse[0], N.mouse[1]), N.extent, s));
    function G() {
      N.wheel = null, N.end();
    }
  }
  function z(b, ...C) {
    if (d || !e.apply(this, arguments))
      return;
    var N = b.currentTarget, A = M(this, C, !0).event(b), _ = tn(b.view).on("mousemove.zoom", B, !0).on("mouseup.zoom", j, !0), O = Xt(b, N), G = b.clientX, W = b.clientY;
    Yc(b.view), Pi(b), A.mouse = [O, this.__zoom.invert(O)], Ti(this), A.start();
    function B(H) {
      if (Dn(H), !A.moved) {
        var K = H.clientX - G, X = H.clientY - W;
        A.moved = K * K + X * X > S;
      }
      A.event(H).zoom("mouse", n(f(A.that.__zoom, A.mouse[0] = Xt(H, N), A.mouse[1]), A.extent, s));
    }
    function j(H) {
      _.on("mousemove.zoom mouseup.zoom", null), Xc(H.view, A.moved), Dn(H), A.event(H).end();
    }
  }
  function F(b, ...C) {
    if (e.apply(this, arguments)) {
      var N = this.__zoom, A = Xt(b.changedTouches ? b.changedTouches[0] : b, this), _ = N.invert(A), O = N.k * (b.shiftKey ? 0.5 : 2), G = n(f(k(N, O), A, _), t.apply(this, C), s);
      Dn(b), c > 0 ? tn(this).transition().duration(c).call(L, G, A, b) : tn(this).call(w.transform, G, A, b);
    }
  }
  function I(b, ...C) {
    if (e.apply(this, arguments)) {
      var N = b.touches, A = N.length, _ = M(this, C, b.changedTouches.length === A).event(b), O, G, W, B;
      for (Pi(b), G = 0; G < A; ++G)
        W = N[G], B = Xt(W, this), B = [B, this.__zoom.invert(B), W.identifier], _.touch0 ? !_.touch1 && _.touch0[2] !== B[2] && (_.touch1 = B, _.taps = 0) : (_.touch0 = B, O = !0, _.taps = 1 + !!u);
      u && (u = clearTimeout(u)), O && (_.taps < 2 && (p = B[0], u = setTimeout(function() {
        u = null;
      }, h)), Ti(this), _.start());
    }
  }
  function $(b, ...C) {
    if (this.__zooming) {
      var N = M(this, C).event(b), A = b.changedTouches, _ = A.length, O, G, W, B;
      for (Dn(b), O = 0; O < _; ++O)
        G = A[O], W = Xt(G, this), N.touch0 && N.touch0[2] === G.identifier ? N.touch0[0] = W : N.touch1 && N.touch1[2] === G.identifier && (N.touch1[0] = W);
      if (G = N.that.__zoom, N.touch1) {
        var j = N.touch0[0], H = N.touch0[1], K = N.touch1[0], X = N.touch1[1], J = (J = K[0] - j[0]) * J + (J = K[1] - j[1]) * J, te = (te = X[0] - H[0]) * te + (te = X[1] - H[1]) * te;
        G = k(G, Math.sqrt(J / te)), W = [(j[0] + K[0]) / 2, (j[1] + K[1]) / 2], B = [(H[0] + X[0]) / 2, (H[1] + X[1]) / 2];
      } else if (N.touch0)
        W = N.touch0[0], B = N.touch0[1];
      else
        return;
      N.zoom("touch", n(f(G, W, B), N.extent, s));
    }
  }
  function U(b, ...C) {
    if (this.__zooming) {
      var N = M(this, C).event(b), A = b.changedTouches, _ = A.length, O, G;
      for (Pi(b), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, h), O = 0; O < _; ++O)
        G = A[O], N.touch0 && N.touch0[2] === G.identifier ? delete N.touch0 : N.touch1 && N.touch1[2] === G.identifier && delete N.touch1;
      if (N.touch1 && !N.touch0 && (N.touch0 = N.touch1, delete N.touch1), N.touch0)
        N.touch0[1] = this.__zoom.invert(N.touch0[0]);
      else if (N.end(), N.taps === 2 && (G = Xt(G, this), Math.hypot(p[0] - G[0], p[1] - G[1]) < y)) {
        var W = tn(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(b) {
    return arguments.length ? (a = typeof b == "function" ? b : pa(+b), w) : a;
  }, w.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : pa(!!b), w) : e;
  }, w.touchable = function(b) {
    return arguments.length ? (i = typeof b == "function" ? b : pa(!!b), w) : i;
  }, w.extent = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : pa([[+b[0][0], +b[0][1]], [+b[1][0], +b[1][1]]]), w) : t;
  }, w.scaleExtent = function(b) {
    return arguments.length ? (o[0] = +b[0], o[1] = +b[1], w) : [o[0], o[1]];
  }, w.translateExtent = function(b) {
    return arguments.length ? (s[0][0] = +b[0][0], s[1][0] = +b[1][0], s[0][1] = +b[0][1], s[1][1] = +b[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(b) {
    return arguments.length ? (n = b, w) : n;
  }, w.duration = function(b) {
    return arguments.length ? (c = +b, w) : c;
  }, w.interpolate = function(b) {
    return arguments.length ? (r = b, w) : r;
  }, w.on = function() {
    var b = g.on.apply(g, arguments);
    return b === g ? w : b;
  }, w.clickDistance = function(b) {
    return arguments.length ? (S = (b = +b) * b, w) : Math.sqrt(S);
  }, w.tapDistance = function(b) {
    return arguments.length ? (y = +b, w) : y;
  }, w;
}
var x0 = ["children", "className", "top", "left", "size"];
function Qi() {
  return Qi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Qi.apply(this, arguments);
}
function P0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ao(e) {
  var t = e.children, n = e.className, a = e.top, i = e.left, o = e.size, s = P0(e, x0), c = Jc();
  return c.type(y0), (typeof o == "number" || o) && c.size(o), t ? /* @__PURE__ */ ie.createElement(ie.Fragment, null, t({
    path: c
  })) : /* @__PURE__ */ ie.createElement(Qc, {
    top: a,
    left: i
  }, /* @__PURE__ */ ie.createElement("path", Qi({
    className: Ot("visx-glyph-star", n),
    d: c() || ""
  }, s)));
}
ao.propTypes = {
  children: V.func,
  className: V.string,
  top: V.number,
  left: V.number,
  size: V.oneOfType([V.number, V.func])
};
var D0 = function e(t, n) {
  if (t === n)
    return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor)
      return !1;
    var a, i, o;
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
    if (o = Object.keys(t), a = o.length, a !== Object.keys(n).length)
      return !1;
    for (i = a; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, o[i]))
        return !1;
    for (i = a; i-- !== 0; ) {
      var s = o[i];
      if (!e(t[s], n[s]))
        return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const jo = /* @__PURE__ */ Ms(D0), As = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__, A0 = As ? window.__REDUX_DEVTOOLS_EXTENSION__.connect() : null, Di = As ? A0 : null, R0 = (e) => (t, n) => {
  const a = e(t, n);
  return Di == null || Di.send(n, a), a;
};
const O0 = {
  position: "relative",
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gridArea: "content"
}, I0 = ({ requiredColumns: e, className: t }) => /* @__PURE__ */ l("section", { className: t, style: O0, children: /* @__PURE__ */ E("section", { className: "waiting-container", children: [
  /* @__PURE__ */ l("h3", { children: "Configuration Required" }),
  /* @__PURE__ */ E("p", { children: [
    "Set",
    " ",
    e.map((n, a) => /* @__PURE__ */ E("span", { children: [
      /* @__PURE__ */ l("strong", { children: n }),
      a + 1 < e.length && ", "
    ] }, `missing-column-${a}`)),
    " ",
    "columns in editor."
  ] })
] }) });
const $0 = (e, t, n) => {
  if (typeof e > "u" || e.filters === void 0 || e.filters.length === 0)
    return [];
  const a = e == null ? void 0 : e.filters.map(
    ({
      columnName: i,
      label: o,
      labels: s,
      queryParameter: c,
      orderedValues: r,
      active: g,
      values: u,
      type: p,
      showDropdown: d,
      setByQueryParameter: h,
      order: m
    }, S) => {
      var k;
      const y = n[S] || {}, w = (f, T) => {
        const L = m !== "desc";
        return String(L ? f : T).localeCompare(String(L ? T : f), "en", { numeric: !0 });
      };
      return p !== "url" && (u = c0(e.data, i), e.filters[S].order === "cust" ? ((k = e.filters[S]) == null ? void 0 : k.values.length) > 0 && (u = e.filters[S].values) : u = u.sort(w)), y.order = e.filters[S].order ? e.filters[S].order : "asc", y.type = p, y.label = o ?? "", y.columnName = i, y.orderedValues = r, y.queryParameter = c, y.labels = s, y.values = u, y.setByQueryParameter = h, M1(y), y.active = g ?? u[0], y.filterStyle = e.filters[S].filterStyle ? e.filters[S].filterStyle : "dropdown", y.showDropdown = d, y.subGrouping = e.filters[S].subGrouping, y;
    }
  );
  return t && (a.fromHash = t), a;
};
function z0(e) {
  var t = P.useState(e), n = t[0], a = t[1], i = P.useRef(null), o = P.useCallback(function(s, c) {
    i.current = c || null, a(s);
  }, [a]);
  return P.useLayoutEffect(function() {
    i.current && (i.current(n), i.current = null);
  }, [n]), [n, o];
}
function Vo(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function _0(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = U0(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var a = 0;
    return function() {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function U0(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ho(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ho(e, t);
  }
}
function Ho(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function F0(e, t) {
  for (var n = e, a = 1 / 0, i = _0(t), o; !(o = i()).done; ) {
    var s = o.value, c = Math.sqrt(Math.pow(s.x - e.x, 2) + Math.pow(s.y - e.y, 2));
    c < a && (a = c, n = {
      x: s.x,
      y: s.y
    });
  }
  return n;
}
function qo(e, t, n) {
  var a, i, o, s;
  return n === void 0 && (n = {}), t.length > 0 ? F0(e, t) : {
    x: Vo(e.x, (a = n.xMin) != null ? a : -1 / 0, (i = n.xMax) != null ? i : 1 / 0),
    y: Vo(e.y, (o = n.yMin) != null ? o : -1 / 0, (s = n.yMax) != null ? s : 1 / 0)
  };
}
function G0(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var a = [], i = e.getTotalLength(), o = 0; o <= i; o += n) {
    var s = e.getPointAtLength(o), c = s.matrixTransform(t);
    a.push(c);
  }
  return a;
}
function B0(e) {
  var t = P.useMemo(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return G0(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
function kt() {
  return kt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, kt.apply(this, arguments);
}
function W0(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, a = n === void 0 ? !1 : n, i = t.snapToPointer, o = i === void 0 ? !0 : i, s = t.onDragEnd, c = t.onDragMove, r = t.onDragStart, g = t.x, u = t.y, p = t.dx, d = t.dy, h = t.isDragging, m = t.restrict, S = m === void 0 ? {} : m, y = t.restrictToPath, w = P.useRef({
    x: g,
    y: u,
    dx: p,
    dy: d
  }), k = z0({
    x: g,
    y: u,
    dx: p ?? 0,
    dy: d ?? 0,
    isDragging: !1
  }), f = k[0], T = k[1], L = P.useState(new ca({
    x: 0,
    y: 0
  })), M = L[0], x = L[1];
  P.useEffect(function() {
    (w.current.x !== g || w.current.y !== u || w.current.dx !== p || w.current.dy !== d) && (w.current = {
      x: g,
      y: u,
      dx: p,
      dy: d
    }, T(function($) {
      return kt({}, $, {
        x: g,
        y: u,
        dx: p ?? 0,
        dy: d ?? 0
      });
    }));
  }), P.useEffect(function() {
    h !== void 0 && f.isDragging !== h && T(function($) {
      return kt({}, $, {
        isDragging: h
      });
    });
  }, [f.isDragging, h, T]);
  var R = B0(y), z = P.useCallback(function($) {
    $.persist(), T(function(U) {
      var b = U.x, C = b === void 0 ? 0 : b, N = U.y, A = N === void 0 ? 0 : N, _ = U.dx, O = U.dy, G = new ca({
        x: (C || 0) + _,
        y: (A || 0) + O
      }), W = Do($) || new ca({
        x: 0,
        y: 0
      }), B = o ? W : G, j = qo(B, R, S);
      return x(e1(G, W)), {
        isDragging: !0,
        dx: a ? 0 : U.dx,
        dy: a ? 0 : U.dy,
        x: a ? j.x : j.x - U.dx,
        y: a ? j.y : j.y - U.dy
      };
    }, r && function(U) {
      r(kt({}, U, {
        event: $
      }));
    });
  }, [r, a, S, R, T, o]), F = P.useCallback(function($) {
    $.persist(), T(function(U) {
      if (!U.isDragging)
        return U;
      var b = U.x, C = b === void 0 ? 0 : b, N = U.y, A = N === void 0 ? 0 : N, _ = Do($) || new ca({
        x: 0,
        y: 0
      }), O = o ? _ : t1(_, M), G = qo(O, R, S);
      return kt({}, U, {
        dx: G.x - C,
        dy: G.y - A
      });
    }, c && function(U) {
      U.isDragging && c(kt({}, U, {
        event: $
      }));
    });
  }, [T, c, o, M, R, S]), I = P.useCallback(function($) {
    $.persist(), T(function(U) {
      return kt({}, U, {
        isDragging: !1
      });
    }, s && function(U) {
      s(kt({}, U, {
        event: $
      }));
    });
  }, [s, T]);
  return kt({}, f, {
    dragEnd: I,
    dragMove: F,
    dragStart: z
  });
}
function Rs(e) {
  var t = e.captureDragArea, n = t === void 0 ? !0 : t, a = e.snapToPointer, i = a === void 0 ? !0 : a, o = e.children, s = e.dx, c = e.dy, r = e.height, g = e.onDragEnd, u = e.onDragMove, p = e.onDragStart, d = e.resetOnStart, h = e.width, m = e.x, S = e.y, y = e.isDragging, w = e.restrict, k = e.restrictToPath, f = W0({
    resetOnStart: d,
    snapToPointer: i,
    onDragEnd: g,
    onDragMove: u,
    onDragStart: p,
    x: m,
    y: S,
    dx: s,
    dy: c,
    isDragging: y,
    restrict: w,
    restrictToPath: k
  });
  return /* @__PURE__ */ ie.createElement(ie.Fragment, null, f.isDragging && n && /* @__PURE__ */ ie.createElement("rect", {
    width: h,
    height: r,
    onPointerDown: f.dragStart,
    onPointerMove: f.dragMove,
    onPointerUp: f.dragEnd,
    fill: "transparent"
  }), o(f));
}
Rs.propTypes = {
  children: V.func.isRequired,
  width: V.number.isRequired,
  height: V.number.isRequired,
  captureDragArea: V.bool,
  isDragging: V.bool
};
function j0(e, t) {
  var n = [].concat(e), a = n.length - 1, i = n.splice(t, 1), o = i[0];
  return n.splice(a, 0, o), n;
}
const V0 = ({ onDragStateChange: e }) => {
  const [t, n] = P.useState([]), {
    config: a,
    setConfig: i,
    isDraggingAnnotation: o,
    isEditor: s,
    dimensions: c
  } = P.useContext(fe), [r, g] = c, { annotations: u } = a, p = s ? r1 : o1;
  return u && u.map((d, h) => {
    const { marker: m, x: S, y, dx: w, dy: k, edit: f, connectionType: T } = d;
    return /* @__PURE__ */ l(re, { children: /* @__PURE__ */ l(
      Rs,
      {
        width: r,
        height: g,
        x: S,
        y,
        onDragStart: () => {
          n(j0(u, h));
        },
        children: ({ dragStart: L, dragEnd: M, dragMove: x }) => /* @__PURE__ */ l(re, { children: /* @__PURE__ */ E(
          p,
          {
            dx: w,
            dy: k,
            x: S,
            y,
            canEditLabel: f.label || !1,
            canEditSubject: f.subject || !1,
            labelDragHandleProps: { r: 15, stroke: o ? "red" : "var(--primary)" },
            subjectDragHandleProps: { r: 15, stroke: o ? "red" : "var(--primary)" },
            onDragEnd: (R) => {
              e(!1);
              const z = u.map((F, I) => I === h ? {
                ...F,
                x: R.x,
                y: R.y,
                dx: R.dx,
                dy: R.dy
              } : F);
              i({
                ...a,
                annotations: z
              });
            },
            onMouseMove: x,
            onMouseUp: M,
            onMouseDown: L,
            onTouchStart: L,
            onTouchMove: x,
            onTouchEnd: M,
            anchorPosition: "auto",
            onDragStart: () => {
              e(!0);
            },
            children: [
              /* @__PURE__ */ l(n1, { className: "", showAnchorLine: !1, children: /* @__PURE__ */ l(
                "div",
                {
                  style: {
                    padding: "10px",
                    borderRadius: 5,
                    // Optional: set border radius
                    backgroundColor: `rgba(255, 255, 255, ${d != null && d.opacity ? Number(d == null ? void 0 : d.opacity) / 100 : 1})`
                  },
                  role: "presentation",
                  tabIndex: 0,
                  "aria-label": `Annotation text that reads: ${d.text}`,
                  dangerouslySetInnerHTML: { __html: d.text }
                }
              ) }),
              T === "line" && /* @__PURE__ */ l(Ao, { type: "line", pathProps: { markerStart: "url(#marker-start)" } }),
              T === "elbow" && /* @__PURE__ */ l(Ao, { type: "elbow", pathProps: { markerStart: "url(#marker-start)" } }),
              m === "circle" && /* @__PURE__ */ l(a1, { className: "circle-subject", stroke: "black", radius: 8 }),
              m === "arrow" && /* @__PURE__ */ l(
                i1,
                {
                  fill: "black",
                  id: "marker-start",
                  x: S,
                  y: k,
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
      `annotation--${h}`
    ) });
  });
};
const Os = ({ useBootstrapVisibilityClasses: e = !0 }) => {
  const { state: t } = P.useContext(fe), n = t.annotations || [], a = () => {
    const o = ["annotation-list"];
    return e && o.push("d-block", "d-md-none"), o.join(" ");
  }, i = n.map((o, s) => {
    const c = o.text || "", r = () => ({
      __html: hs.sanitize(c)
    });
    return /* @__PURE__ */ l("li", { children: /* @__PURE__ */ E("div", { className: "annotation__title-wrapper", children: [
      /* @__PURE__ */ l("div", { className: "annotation__title-circle", children: s + 1 }),
      /* @__PURE__ */ l("p", { className: "annotation__subtext", dangerouslySetInnerHTML: r() })
    ] }) }, "annotation-li-item__annotationIndex");
  });
  return /* @__PURE__ */ l("ul", { className: a(), children: i });
}, H0 = () => {
  var r;
  const { config: e, currentViewport: t } = P.useContext(fe), [n, a] = P.useState(!1), i = ["sm", "xs", "xxs"].includes(t) ? "13px" : `${l1}px`, o = {
    maxHeight: e.table.limitHeight && `${e.table.height}px`,
    OverflowY: "scroll"
  }, s = () => {
    const g = ["data-table-heading", "annotation__dropdown-list", "p-3"];
    return n || g.push("collapsed"), g.join(" ");
  };
  return /* @__PURE__ */ l(re, { children: /* @__PURE__ */ E("section", { className: (() => {
    const g = ["data-table-container", t, "d-block", "d-lg-none"];
    return e.general.showAnnotationDropdown && (g.push("d-lg-block"), g.splice(g.indexOf("d-lg-none"), 1)), g.join(" ");
  })(), children: [
    /* @__PURE__ */ E(
      "div",
      {
        style: { fontSize: i },
        role: "button",
        className: s(),
        onClick: () => {
          a(!n);
        },
        tabIndex: 0,
        onKeyDown: (g) => {
          g.key === "Enter" && a(!n);
        },
        children: [
          /* @__PURE__ */ l(de, { display: n ? "minus" : "plus", base: !0 }),
          e.general.annotationDropdownText === "" ? "Annotations" : (r = e == null ? void 0 : e.general) == null ? void 0 : r.annotationDropdownText
        ]
      }
    ),
    n && /* @__PURE__ */ l("div", { className: "table-container annotation-dropdown__panel", style: o, children: /* @__PURE__ */ l(Os, { useBootstrapVisibilityClasses: !1 }) })
  ] }) });
}, aa = {
  Draggable: V0,
  Dropdown: H0,
  List: Os
};
function q0(e, t, n) {
  var a = this, i = P.useRef(null), o = P.useRef(0), s = P.useRef(null), c = P.useRef([]), r = P.useRef(), g = P.useRef(), u = P.useRef(e), p = P.useRef(!0);
  u.current = e;
  var d = !t && t !== 0 && typeof window < "u";
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  t = +t || 0, n = n || {};
  var h = !!n.leading, m = "trailing" in n ? !!n.trailing : !0, S = "maxWait" in n, y = S ? Math.max(+n.maxWait || 0, t) : null, w = P.useCallback(function(I) {
    var $ = c.current, U = r.current;
    return c.current = r.current = null, o.current = I, g.current = u.current.apply(U, $);
  }, []), k = P.useCallback(function(I, $) {
    d && cancelAnimationFrame(s.current), s.current = d ? requestAnimationFrame(I) : setTimeout(I, $);
  }, [d]), f = P.useCallback(function(I) {
    if (!p.current)
      return !1;
    var $ = I - i.current, U = I - o.current;
    return !i.current || $ >= t || $ < 0 || S && U >= y;
  }, [y, S, t]), T = P.useCallback(function(I) {
    return s.current = null, m && c.current ? w(I) : (c.current = r.current = null, g.current);
  }, [w, m]), L = P.useCallback(function() {
    var I = Date.now();
    if (f(I))
      return T(I);
    if (p.current) {
      var $ = I - i.current, U = I - o.current, b = t - $, C = S ? Math.min(b, y - U) : b;
      k(L, C);
    }
  }, [y, S, f, k, T, t]), M = P.useCallback(function() {
    s.current && (d ? cancelAnimationFrame(s.current) : clearTimeout(s.current)), o.current = 0, c.current = i.current = r.current = s.current = null;
  }, [d]), x = P.useCallback(function() {
    return s.current ? T(Date.now()) : g.current;
  }, [T]);
  P.useEffect(function() {
    return p.current = !0, function() {
      p.current = !1;
    };
  }, []);
  var R = P.useCallback(function() {
    for (var I = [], $ = 0; $ < arguments.length; $++)
      I[$] = arguments[$];
    var U = Date.now(), b = f(U);
    if (c.current = I, r.current = a, i.current = U, b) {
      if (!s.current && p.current)
        return o.current = i.current, k(L, t), h ? w(i.current) : g.current;
      if (S)
        return k(L, t), w(i.current);
    }
    return s.current || k(L, t), g.current;
  }, [w, h, S, f, k, L, t]), z = P.useCallback(function() {
    return !!s.current;
  }, []), F = P.useMemo(function() {
    return {
      callback: R,
      cancel: M,
      flush: x,
      pending: z
    };
  }, [R, M, x, z]);
  return F;
}
function K0(e, t) {
  return e === t;
}
function Ko(e) {
  return typeof e == "function" ? function() {
    return e;
  } : e;
}
function Z0(e) {
  var t = P.useState(Ko(e)), n = t[0], a = t[1], i = P.useCallback(function(o) {
    return a(Ko(o));
  }, []);
  return [n, i];
}
function Y0(e, t, n) {
  var a = n && n.equalityFn || K0, i = Z0(e), o = i[0], s = i[1], c = q0(P.useCallback(function(g) {
    return s(g);
  }, [s]), t, n), r = P.useRef(e);
  return P.useEffect(function() {
    a(r.current, e) || (c.callback(e), r.current = e);
  }, [e, c, a]), [o, { cancel: c.cancel, pending: c.pending, flush: c.flush }];
}
const X0 = (e) => {
  var r, g, u;
  const { config: t, setConfig: n, dimensions: a, isDraggingAnnotation: i } = P.useContext(fe), o = (p, d, h) => {
    const m = [...t == null ? void 0 : t.annotations];
    m[h][d] = p, m[h].savedDimensions = [a[0] * 0.73, a[1]], n({
      ...t,
      annotations: m
    });
  }, s = () => {
    var S;
    const p = (S = document.querySelector(".map-container > section > svg, .map-container > section > canvas")) == null ? void 0 : S.getBoundingClientRect(), d = [p.width, p.height], h = {
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
      x: Number(d == null ? void 0 : d[0]) / 2,
      y: Number((d == null ? void 0 : d[1]) / 2),
      xKey: null,
      yKey: null,
      dx: 0,
      dy: 0,
      opacity: "100",
      savedDimensions: [a[0] * 0.73, a[1]]
    }, m = Array.isArray(t.annotations) ? t.annotations : [];
    n({
      ...t,
      annotations: [...m, h]
    });
  }, c = (p) => {
    const d = t.annotations.filter((h, m) => m !== p);
    n({
      ...t,
      annotations: d
    });
  };
  return /* @__PURE__ */ l(ua, { children: /* @__PURE__ */ E(ua.Section, { title: e.name, children: [
    /* @__PURE__ */ E("label", { children: [
      "Show Annotation Dropdown",
      /* @__PURE__ */ l(
        "input",
        {
          type: "checkbox",
          checked: (r = t == null ? void 0 : t.general) == null ? void 0 : r.showAnnotationDropdown,
          onClick: (p) => {
            n({
              ...t,
              general: {
                ...t.general,
                showAnnotationDropdown: p.target.checked
              }
            });
          }
        }
      )
    ] }),
    /* @__PURE__ */ E("label", { children: [
      "Annotation Dropdown Title:",
      /* @__PURE__ */ l(
        "input",
        {
          type: "text",
          style: { marginBottom: "10px" },
          value: (g = t == null ? void 0 : t.general) == null ? void 0 : g.annotationDropdownText,
          onChange: (p) => {
            n({
              ...t,
              general: {
                ...t.general,
                annotationDropdownText: p.target.value
              }
            });
          }
        }
      )
    ] }),
    (t == null ? void 0 : t.annotations) && (t == null ? void 0 : t.annotations.map((p, d) => {
      var h, m, S, y, w, k, f, T, L;
      return /* @__PURE__ */ l(ua, { children: /* @__PURE__ */ l(
        ua.Section,
        {
          title: p.text ? p.text.substring(0, 15) + "..." : `Annotation ${d + 1}`,
          children: /* @__PURE__ */ E("div", { className: "annotation-group", children: [
            /* @__PURE__ */ E("label", { children: [
              "Annotation Text:",
              /* @__PURE__ */ l(
                "textarea",
                {
                  rows: 5,
                  value: p.text,
                  onChange: (M) => o(M.target.value, "text", d)
                }
              )
            ] }),
            /* @__PURE__ */ E("label", { children: [
              "Opacity",
              /* @__PURE__ */ l("br", {}),
              /* @__PURE__ */ l(
                "input",
                {
                  type: "range",
                  onChange: (M) => {
                    const x = [...t == null ? void 0 : t.annotations];
                    x[d].opacity = M.target.value, n({
                      ...t,
                      annotations: x
                    });
                  },
                  value: ((m = (h = t == null ? void 0 : t.annotations) == null ? void 0 : h[d]) == null ? void 0 : m.opacity) || "100"
                }
              )
            ] }),
            /* @__PURE__ */ E("label", { children: [
              "Edit Subject",
              /* @__PURE__ */ l(
                "input",
                {
                  type: "checkbox",
                  checked: (y = (S = t == null ? void 0 : t.annotations[d]) == null ? void 0 : S.edit) == null ? void 0 : y.subject,
                  onClick: (M) => {
                    const x = [...t == null ? void 0 : t.annotations];
                    x[d].edit.subject = M.target.checked, n({
                      ...t,
                      annotations: x
                    });
                  }
                }
              )
            ] }),
            /* @__PURE__ */ E("label", { children: [
              "Edit Label",
              /* @__PURE__ */ l(
                "input",
                {
                  type: "checkbox",
                  checked: (k = (w = t == null ? void 0 : t.annotations[d]) == null ? void 0 : w.edit) == null ? void 0 : k.label,
                  onClick: (M) => {
                    const x = [...t == null ? void 0 : t.annotations];
                    x[d].edit.label = M.target.checked, n({
                      ...t,
                      annotations: x
                    });
                  }
                }
              )
            ] }),
            /* @__PURE__ */ l(
              Le,
              {
                label: "Connection Type",
                value: ((f = t == null ? void 0 : t.annotations[d]) == null ? void 0 : f.connectionType) || "",
                options: ["curve", "line", "elbow", "none"].map((M) => ({
                  value: M,
                  label: M
                })),
                onChange: (M) => {
                  const x = [...t == null ? void 0 : t.annotations];
                  x[d].connectionType = M.target.value, n({
                    ...t,
                    annotations: x
                  });
                }
              }
            ),
            p.connectionType === "curve" && /* @__PURE__ */ l(
              Le,
              {
                label: "Line Type",
                value: ((T = t == null ? void 0 : t.annotations[d]) == null ? void 0 : T.lineType) || "",
                options: Object.entries(s1).map(([M, x]) => ({
                  value: x,
                  label: M
                })),
                onChange: (M) => {
                  const x = [...t == null ? void 0 : t.annotations];
                  x[d].lineType = M.target.value, n({
                    ...t,
                    annotations: x
                  });
                }
              }
            ),
            /* @__PURE__ */ l(
              Le,
              {
                label: "Marker",
                value: ((L = t == null ? void 0 : t.annotations[d]) == null ? void 0 : L.marker) || "",
                options: ["circle", "arrow"].map((M) => ({
                  value: M,
                  label: M
                })),
                onChange: (M) => {
                  const x = [...t == null ? void 0 : t.annotations];
                  x[d].marker = M.target.value, n({
                    ...t,
                    annotations: x
                  });
                }
              }
            ),
            /* @__PURE__ */ l(no, { className: "btn btn-danger", onClick: () => c(d), children: "Delete Annotation" })
          ] })
        }
      ) });
    })),
    ((u = t == null ? void 0 : t.annotations) == null ? void 0 : u.length) < 3 && /* @__PURE__ */ l("button", { className: "btn btn-primary full-width", onClick: s, children: "Add Annotation" })
  ] }) });
};
const Ea = ({
  type: e = "info",
  message: t = "",
  iconSize: n = 21,
  heading: a,
  onDismiss: i,
  autoDismiss: o,
  secondsBeforeDismiss: s = 5,
  showCloseButton: c = !0
}) => {
  P.useEffect(() => {
    o && setTimeout(() => i(), s * 1e3);
  }, []);
  const r = () => ({
    __html: hs.sanitize(t)
  });
  return /* @__PURE__ */ E("div", { className: `alert alert-${e} p-1 d-flex justify-content-between`, role: "alert", children: [
    /* @__PURE__ */ E("div", { className: "d-flex", children: [
      a && /* @__PURE__ */ l("h4", { className: "alert-heading", children: a }),
      e === "success" && /* @__PURE__ */ l(de, { display: "check", size: n }),
      e === "danger" && /* @__PURE__ */ l(de, { display: "warningCircle", size: n }),
      e === "info" && /* @__PURE__ */ l(de, { display: "info", size: n }),
      /* @__PURE__ */ l("span", { dangerouslySetInnerHTML: r() })
    ] }),
    c && /* @__PURE__ */ l("button", { type: "button", className: "close pl-5", "aria-label": "Close", onClick: () => i(), children: "X" })
  ] });
};
function J0(e) {
  return e;
}
function Q0(e) {
  if (e == null)
    return J0;
  var t, n, a = e.scale[0], i = e.scale[1], o = e.translate[0], s = e.translate[1];
  return function(c, r) {
    r || (t = n = 0);
    var g = 2, u = c.length, p = new Array(u);
    for (p[0] = (t += c[0]) * a + o, p[1] = (n += c[1]) * i + s; g < u; )
      p[g] = c[g], ++g;
    return p;
  };
}
function eu(e, t) {
  for (var n, a = e.length, i = a - t; i < --a; )
    n = e[i], e[i++] = e[a], e[a] = n;
}
function Mt(e, t) {
  return typeof t == "string" && (t = e.objects[t]), t.type === "GeometryCollection" ? { type: "FeatureCollection", features: t.geometries.map(function(n) {
    return Zo(e, n);
  }) } : Zo(e, t);
}
function Zo(e, t) {
  var n = t.id, a = t.bbox, i = t.properties == null ? {} : t.properties, o = Is(e, t);
  return n == null && a == null ? { type: "Feature", properties: i, geometry: o } : a == null ? { type: "Feature", id: n, properties: i, geometry: o } : { type: "Feature", id: n, bbox: a, properties: i, geometry: o };
}
function Is(e, t) {
  var n = Q0(e.transform), a = e.arcs;
  function i(u, p) {
    p.length && p.pop();
    for (var d = a[u < 0 ? ~u : u], h = 0, m = d.length; h < m; ++h)
      p.push(n(d[h], h));
    u < 0 && eu(p, m);
  }
  function o(u) {
    return n(u);
  }
  function s(u) {
    for (var p = [], d = 0, h = u.length; d < h; ++d)
      i(u[d], p);
    return p.length < 2 && p.push(p[0]), p;
  }
  function c(u) {
    for (var p = s(u); p.length < 4; )
      p.push(p[0]);
    return p;
  }
  function r(u) {
    return u.map(c);
  }
  function g(u) {
    var p = u.type, d;
    switch (p) {
      case "GeometryCollection":
        return { type: p, geometries: u.geometries.map(g) };
      case "Point":
        d = o(u.coordinates);
        break;
      case "MultiPoint":
        d = u.coordinates.map(o);
        break;
      case "LineString":
        d = s(u.arcs);
        break;
      case "MultiLineString":
        d = u.arcs.map(s);
        break;
      case "Polygon":
        d = r(u.arcs);
        break;
      case "MultiPolygon":
        d = u.arcs.map(r);
        break;
      default:
        return null;
    }
    return { type: p, coordinates: d };
  }
  return g(t);
}
function tu(e, t) {
  var n = {}, a = {}, i = {}, o = [], s = -1;
  t.forEach(function(g, u) {
    var p = e.arcs[g < 0 ? ~g : g], d;
    p.length < 3 && !p[1][0] && !p[1][1] && (d = t[++s], t[s] = g, t[u] = d);
  }), t.forEach(function(g) {
    var u = c(g), p = u[0], d = u[1], h, m;
    if (h = i[p])
      if (delete i[h.end], h.push(g), h.end = d, m = a[d]) {
        delete a[m.start];
        var S = m === h ? h : h.concat(m);
        a[S.start = h.start] = i[S.end = m.end] = S;
      } else
        a[h.start] = i[h.end] = h;
    else if (h = a[d])
      if (delete a[h.start], h.unshift(g), h.start = p, m = i[p]) {
        delete i[m.end];
        var y = m === h ? h : m.concat(h);
        a[y.start = m.start] = i[y.end = h.end] = y;
      } else
        a[h.start] = i[h.end] = h;
    else
      h = [g], a[h.start = p] = i[h.end = d] = h;
  });
  function c(g) {
    var u = e.arcs[g < 0 ? ~g : g], p = u[0], d;
    return e.transform ? (d = [0, 0], u.forEach(function(h) {
      d[0] += h[0], d[1] += h[1];
    })) : d = u[u.length - 1], g < 0 ? [d, p] : [p, d];
  }
  function r(g, u) {
    for (var p in g) {
      var d = g[p];
      delete u[d.start], delete d.start, delete d.end, d.forEach(function(h) {
        n[h < 0 ? ~h : h] = 1;
      }), o.push(d);
    }
  }
  return r(i, a), r(a, i), t.forEach(function(g) {
    n[g < 0 ? ~g : g] || o.push([g]);
  }), o;
}
function nu(e) {
  return Is(e, au.apply(this, arguments));
}
function au(e, t, n) {
  var a, i, o;
  if (arguments.length > 1)
    a = iu(e, t, n);
  else
    for (i = 0, a = new Array(o = e.arcs.length); i < o; ++i)
      a[i] = i;
  return { type: "MultiLineString", arcs: tu(e, a) };
}
function iu(e, t, n) {
  var a = [], i = [], o;
  function s(p) {
    var d = p < 0 ? ~p : p;
    (i[d] || (i[d] = [])).push({ i: p, g: o });
  }
  function c(p) {
    p.forEach(s);
  }
  function r(p) {
    p.forEach(c);
  }
  function g(p) {
    p.forEach(r);
  }
  function u(p) {
    switch (o = p, p.type) {
      case "GeometryCollection":
        p.geometries.forEach(u);
        break;
      case "LineString":
        c(p.arcs);
        break;
      case "MultiLineString":
      case "Polygon":
        r(p.arcs);
        break;
      case "MultiPolygon":
        g(p.arcs);
        break;
    }
  }
  return u(t), i.forEach(n == null ? function(p) {
    a.push(p[0].i);
  } : function(p) {
    n(p[0].g, p[p.length - 1].g) && a.push(p[0].i);
  }), a;
}
const ru = ({ name: e }) => {
  const { config: t, setConfig: n, runtimeData: a, legendMemo: i, legendSpecialClassLastMemo: o, runtimeLegend: s } = P.useContext(fe), c = "circles", r = ["circles", "waves", "lines"], {
    map: { patterns: g },
    data: u
  } = t, [p, d] = P.useState(null);
  if (P.useEffect(() => {
    (async () => {
      import(
        /* webpackChunkName: "us-topo" */
        "./storybook-us-topo-c55ac1ea.es.js"
      ).then((M) => {
        d(Mt(M, M.objects.states).features);
      });
    })();
  }, []), !p)
    return /* @__PURE__ */ l(re, {});
  const h = () => {
    const L = ne.cloneDeep(t.map.patterns);
    L.push({ dataKey: "", pattern: c, contrastCheck: !0 }), n({
      ...t,
      map: {
        ...t.map,
        patterns: L
      }
    });
  }, m = (L, M, x, R) => {
    const z = gs(L, M);
    return z || console.error(
      `COVE: pattern contrast check failed on ${x} for ${R} with:
      pattern color: ${M}
      contrast: ${c1(L, M)}`
    ), z;
  }, S = (L, M) => L && (M != null && M[L]) ? xe(M[L], t, s, i, o) : null, y = (L, M, x, R, z) => {
    var b, C;
    const F = L.properties.iso, I = S(F, a), $ = I == null ? void 0 : I[0];
    if (!$)
      return;
    if (M.dataValue === ((b = a[F]) == null ? void 0 : b[M.dataKey])) {
      const N = m(
        $,
        z,
        (C = a[F]) == null ? void 0 : C[t.columns.geo.name],
        M.dataKey
      );
      x[R].contrastCheck = N;
    }
  }, w = (L, M, x) => {
    const R = ne.cloneDeep(t);
    R.map.patterns[x][L] = M, T(R, x), n(R);
  }, k = (L) => {
    const M = ne.cloneDeep(t), x = t.map.patterns.filter((R, z) => z !== L);
    M.map.patterns = x, f() && (M.runtime.editorErrorMessage = ""), n(M);
  }, f = () => t.map.patterns.every((L) => L.contrastCheck !== !1), T = (L, M) => {
    p.forEach((x) => {
      y(
        x,
        L.map.patterns[M],
        L.map.patterns,
        M,
        L.map.patterns[M].color
      );
    }), L.runtime.editorErrorMessage = L.map.patterns.some((x) => x.contrastCheck === !1) ? "One or more patterns do not pass the WCAG 2.1 contrast ratio of 3:1." : "";
  };
  return /* @__PURE__ */ E(Be, { children: [
    /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(je, { children: e }) }),
    /* @__PURE__ */ E(Ve, { children: [
      g.length > 0 && /* @__PURE__ */ l(
        Ea,
        {
          type: f() ? "success" : "danger",
          message: 'Pattern colors must comply with <br /> <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</a> 3:1 contrast ratio.'
        }
      ),
      /* @__PURE__ */ l("br", {}),
      g && g.map((L, M) => {
        [...new Set(u == null ? void 0 : u.map((R) => R == null ? void 0 : R[L == null ? void 0 : L.dataKey]))];
        const x = Object.keys(u[0]);
        return x.unshift("Select"), x.sort(), /* @__PURE__ */ l(ta, { allowZeroExpanded: !0, children: /* @__PURE__ */ E(Be, { children: [
          /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(je, { children: L.dataKey ? `${L.dataKey}: ${L.dataValue ?? "No Value"}` : "Select Column" }) }),
          /* @__PURE__ */ l(Ve, { children: /* @__PURE__ */ E(re, { children: [
            L.contrastCheck ?? !0 ? /* @__PURE__ */ l(Ea, { type: "success", message: "This pattern passes contrast checks" }) : /* @__PURE__ */ l(
              Ea,
              {
                type: "danger",
                message: 'Error: <a href="https://webaim.org/resources/contrastchecker/" target="_blank"> Review Color Contrast</a>'
              }
            ),
            " ",
            /* @__PURE__ */ l("label", { htmlFor: `pattern-dataKey--${M}`, children: "Data Key:" }),
            /* @__PURE__ */ l(
              "select",
              {
                id: `pattern-dataKey--${M}`,
                value: L.dataKey !== "" ? L.dataKey : "Select",
                onChange: (R) => w("dataKey", R.target.value, M),
                children: x.map((R, z) => /* @__PURE__ */ l("option", { value: R, children: R }, z))
              }
            ),
            /* @__PURE__ */ E("label", { htmlFor: `pattern-dataValue--${M}`, children: [
              "Data Value:",
              /* @__PURE__ */ l(
                "input",
                {
                  type: "text",
                  onChange: (R) => w("dataValue", R.target.value, M),
                  id: `pattern-dataValue--${M}`,
                  value: L.dataValue === "" ? "" : L.dataValue
                }
              )
            ] }),
            /* @__PURE__ */ E("label", { htmlFor: `pattern-label--${M}`, children: [
              "Label (optional):",
              /* @__PURE__ */ l(
                "input",
                {
                  type: "text",
                  onChange: (R) => w("label", R.target.value, M),
                  id: `pattern-dataValue--${M}`,
                  value: L.label === "" ? "" : L.label
                }
              )
            ] }),
            /* @__PURE__ */ l("label", { htmlFor: `pattern-type--${M}`, children: "Pattern Type:" }),
            /* @__PURE__ */ l(
              "select",
              {
                id: `pattern-type--${M}`,
                value: L == null ? void 0 : L.pattern,
                onChange: (R) => w("pattern", R.target.value, M),
                children: r.map((R, z) => /* @__PURE__ */ l("option", { value: R, children: R }, z))
              }
            ),
            /* @__PURE__ */ l("label", { htmlFor: `pattern-size--${M}`, children: "Pattern Size:" }),
            /* @__PURE__ */ l(
              "select",
              {
                id: `pattern-size--${M}`,
                value: L == null ? void 0 : L.size,
                onChange: (R) => w("size", R.target.value, M),
                children: ["small", "medium", "large"].map((R, z) => /* @__PURE__ */ l("option", { value: R, children: R }, z))
              }
            ),
            /* @__PURE__ */ l("div", { className: "pattern-input__color", children: /* @__PURE__ */ E("label", { htmlFor: "patternColor", children: [
              "Pattern Color",
              /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(
                  de,
                  {
                    display: "question",
                    style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                  }
                ) }),
                /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "If this setting is used, it is the reponsibility of the visualization author to verify the visualization colors meet WCAG 3:1 contrast ratios." }) })
              ] }),
              /* @__PURE__ */ l(
                "input",
                {
                  type: "text",
                  value: L.color || "",
                  id: "patternColor",
                  name: "patternColor",
                  onChange: (R) => w("color", R.target.value, M)
                }
              )
            ] }) }),
            /* @__PURE__ */ l(no, { onClick: (R) => k(M), className: "btn btn-danger", children: "Remove Pattern" })
          ] }) })
        ] }) }, `accordion-pattern--${M}`);
      }),
      /* @__PURE__ */ l("button", { className: "btn btn-primary full-width mt-2", onClick: h, children: "Add Geo Pattern" })
    ] })
  ] });
}, Yo = {
  Annotate: X0,
  PatternSettings: ru
}, ou = (e) => /* @__PURE__ */ P.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 290.5 157.9", style: {
  enableBackground: "new 0 0 290.5 157.9"
}, xmlSpace: "preserve", ...e }, /* @__PURE__ */ P.createElement("style", { type: "text/css" }, `\r
	.st0{fill:none;stroke:#0071BC;stroke-miterlimit:10;}\r
`), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M119.5-347c-5.6-2.6-9.8-5.4-14.3-6.4C98-355,90.4-356,83-356.2c-20.1-0.4-40.3-0.2-60.4-0.1 c-8.7,0-9.5,0.9-9.7,9.3c-0.1,5.5,0.2,11-0.1,16.5c-0.4,6.9,2.8,9.3,9.4,8.9c4.3-0.3,8.5,0,12.8,0c5,0,7.1,2.5,7.1,7.4 c0,20.4-0.1,40.9,0,61.3c0,6.5-3.8,8.3-9.5,8.2c-18-0.1-36,0-54,0c-32,0-64.1,0-96.1,0c-12.3,0-12.5-0.2-12.6-12.1 c0-24.7-0.1-49.4,0-74.2c0-10.2,0.6-10.8,11-10.9c7.9-0.1,15.9,0,23.8-0.1c3.7,0,7.1-1,7-5.4c-0.1-13.3,2-26.8-2.9-41 c-5.4,0.8-10.8,1.3-16,2.6c-4.2,1-6.9,0.5-9.2-3.4c-2.5-4.5-5.2-8.9-8.4-12.9c-1.7-2.1-4.3-4-6.8-4.6c-4-1-6.7-3.3-5.5-6.9 c4.6-13.6-4.5-21.6-11.8-30.3c-8.1-9.6-11.5-20.5-10.6-33c0.4-5.2,2.7-7.9,8-7.9c1.8,0,3.7-0.1,5.5-0.1c81.2,0,162.4,0,243.5,0 c12.6,0,13.2,0.8,12.7,13.7c-0.1,1.5-0.1,3.1,0.2,4.5c2.6,13.4,5.3,26.8,8,40.1c0.2,0.9,0.6,1.9,0.4,2.7c-3.1,11.5,3,22.3,2.1,33.7 c-0.8,11.2-1,22.5-1.4,33.7C119.5-353.6,119.5-351.2,119.5-347z M-34.4-376.5c9.5-0.1,17.4-7.5,17.2-16.1c-0.2-8.7-9-18-17.3-18.2 c-9.1-0.3-16.8,7.9-16.8,17.8C-51.3-381.9-45.6-376.4-34.4-376.5z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M315.1-337.9c14.4,14.2,25.1-1.2,38.4-2.3c0.5,3.5,1.6,6.7,1.2,9.7c-1.5,10.8-1.4,22.6-6.1,31.9 c-5.1,10.1-14.8,17.8-22.6,26.4c-0.5,0.6-2,1-2.5,0.7c-8.8-5-21.4,0.1-27.7-12c-6.8,6.4-12.1,13-18.7,17.3 c-5.3,3.4-12.4,5.7-18.6,5.5c-6.9-0.2-11,1-13.5,7.5c-1.4,3.6-13.4,8.9-16.5,7.3c-1.7-0.9-2.6-3.7-3.7-5.6c-1.8-3.1-2.8-6.8-5.3-9.2 c-7.3-7.2-7.5-7-6.4-16.4c-5.7-7.4-11.5-13.9-16.2-21.2c-3.4-5.4-0.6-11.2,2.1-16.5c1.3-2.6,2.9-5.4,3.1-8.2 c0.3-4.2,1.9-6.4,5.7-8.4c6.5-3.4,7.3-8.5,2.5-14.3c-4.4-5.4-9.7-9.9-10.5-17.7c-0.2-1.6-5.8-3.8-9-3.8c-17.7-0.4-35.4-0.2-53.1-0.2 c-11.5,0-11.8-0.3-11.9-11.9c0-7,1.3-14.4-0.3-21c-4-16.7-1.8-33.9-5.3-50.5c-1.7-8.3-3.8-16.6-4.6-25.1c-0.9-9.5,0.4-10.4,10-10.6 c3.4-0.1,6.8,0.5,10-0.2c3-0.6,6.2-1.9,8.5-3.8c4.8-4,6.9-3.7,9,2.2c3,8.3,7.2,12.6,14.8,11.5c10.2-1.5,17.6,3.7,25.3,8.2 c3.3,1.9,5.9,3.5,10,1.7c2.2-1,5.3-0.1,8,0.2c9.9,1,19.8,7.3,29.8-1.4c-0.8,6.8-4.3,10.8-9.8,10.2c-14.6-1.5-24.2,5.7-33,17.9 c5.3-1.5,9.4-2.7,15-4.3c-0.4,4.2-0.7,6.7-0.9,9.5c0.8-0.1,1.8,0.1,2.5-0.3c7.9-4.5,15.8-9,23.6-13.6c5.8-3.4,6.5-3.6,15.2-0.1 c-3.4,1.8-6.1,3.1-8.9,4.6c4.5,4.2,7.3,7.5,10.8,9.8c2,1.3,5,1.8,7.5,1.6c3.9-0.3,7.8-1.2,11.7-2.3c11.3-3.1,20.2,0.8,28.1,8.8 c2.3,2.3,5.7,3.5,8.7,5.2c-0.1,0.7-0.2,1.4-0.2,2.1c-3.2,1.2-6.4,2.3-10.5,3.8c4.9,4.4,11.3,7.7,13.3,12.7 c2.1,5.4-0.1,12.4-0.4,18.9c13.1,6.6,16.5,25.1,6.7,36.9C318.1-343.8,316.6-340.5,315.1-337.9z M275.2-415.1 c-0.6-0.2-1.2-0.5-1.9-0.7c-1.4,1-3,1.8-4,3.1c-11.4,14.8-17.6,31.7-18.7,50.3c-0.4,7.4,0.7,15.1,2.6,22.3c1.5,5.6,6.2,6.6,9.6,2.5 c5-6.1,10.2-13.4,6.5-21.6c-7-15.4,1-28.9,3.5-43.2C273.6-406.6,274.4-410.9,275.2-415.1z M250.5-294.1c10.2,0,18.2-7.9,18-17.7 c-0.2-7.9-9.4-16.9-17.3-17c-9.7-0.1-17.3,7.3-17.3,17.1C233.8-301.5,240.8-294.1,250.5-294.1z M280.8-408.1 c0.5,0.5,1.1,0.9,1.6,1.4c0.7-1.2,1.5-2.3,2.2-3.5c-0.4-0.3-0.7-0.5-1.1-0.8C282.6-410,281.7-409.1,280.8-408.1z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M-197.4-181.5c-4-7.9-11-6-17.5-5.4c-4.3,0.4-8.9,2.5-13-3c3.9-1.1,7.2-2,10.5-2.9c0.1-0.3,0.1-0.6,0.2-0.9 c-2.1-0.2-4.4-0.1-6.3-0.8c-2.1-0.7-5.7-2.1-5.7-3.4c-0.7-10.4-10.2-15.4-14.1-23.8c-4.1-8.8-8.6-17.3-13.2-25.9 c-1.3-2.5-3.3-4.8-4.9-7.1l0,0c-2.9-4.9-5.8-9.9-8.7-14.8c-1.5-2.6-3.4-5.1-4.2-8c-2-6.9-2.3-14.2-7.6-20.2c-1.8-2-0.5-6.9-0.2-10.4 c0.4-5.7,2.1-11.4,1.5-16.9c-0.7-6.3,1.1-8.5,7-8.5c10.4,0.1,20.7,0,31.1,0c32,0,64.1,0,96.1,0c10.9,0,11.5,0.6,11.5,11.3 c0.1,22.9,0,45.8,0,68.6c0,11.3,0.3,11.6,12,11.7c16.2,0,32.3-0.1,48.5,0.1c9.4,0.1,10.8,1.3,10.9,10.5c0.1,26.5,0.1,53.1,0,79.6 c0,9.2-1.5,10.2-10.7,10.7c-12.4,0.7-24.1-1-35.5-6.3c-13.2-6.1-27-11.2-40.6-16.3c-2.7-1-6-0.6-9-0.5c-4.6,0.2-9.1,0.8-13.6,1.1 c-6.3,0.5-10.5-1.3-11.6-8.4C-185.8-178.3-191.3-180.5-197.4-181.5L-197.4-181.5z M-169.9-242.5c-0.2-10.1-7.8-17.8-17-17.5 c-8.4,0.3-17.1,9.1-17.1,17.2c0,9,8.6,17.3,17.9,17.2C-176.6-225.7-169.8-232.8-169.9-242.5z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M801.1-451.8c9.8,0,19.7,0,29.5,0c19.2,0,38.5,0,57.7,0c9.5,0,20.6,15.3,15.6,23.1 c-3.8,5.9-10.7,11.3-17.4,13.5c-11.4,3.9-11.8,2.8-17.6,13.1c-8.1-0.7-13.4,2.8-17.3,10.8c-2.4,4.7-8.1,8.3-13.2,11 c-14.2,7.5-20.9,29.2-13.7,46.7c5.4,13.2,10.8,26.4,14.9,40c2.9,9.4,2.3,19.5-2.7,28.4c-1.2,2.2-4.5,4.3-7,4.4 c-3.3,0.2-6.6-0.5-8.5-5.1c-2.1-5.1-6.8-9-9.8-13.8c-4.4-6.9-8.7-13.8-12.1-21.2c-1.5-3.3-1.2-7.9-0.3-11.5c1.3-5.4,0.5-9.4-3.8-13 c-2.1-1.7-3.6-4.2-5.2-6.3c-6-7.8-6-7.8-14.5-2.9c-6.8,3.9-9.8,3.5-14.6-2.8c-5.8-7.7-13.9-6.2-21.8-5.9c-10,0.4-20.1,0.5-30.1,1 c-4.3,0.2-7.5-1.1-8.4-5.2c-1.5-6.8-6.2-7.1-11.8-7.1c-16.8-0.1-17.3-1.3-10.1-17c1.7-3.6,2.3-8.3,1.7-12.3 c-1.5-10.3-0.5-19.3,5.5-28.6c6.7-10.3,10.5-22.5,16.4-33.4c3.8-7.1,5.9-16.2,15.7-18.5c0.3-0.1,0.6-0.2,0.8-0.5 c6.7-13.4,21-9.6,31.6-14c1.6-0.7,3.6-0.9,4.9-2c5.2-4.7,10.2-9.7,15.3-14.5c3.1-2.9,6.3-2.4,8.8,0.6c4.1,5.1,9,6.9,15.3,5.5 c5.2-1.2,7,2.6,8.7,6.2c2.7,5.7,5.3,11.5,8.3,18.1c-3.5,3.3-7.5,7.1-11.6,10.8C800.6-453.4,800.9-452.6,801.1-451.8z M804.3-385.9 c10.1,0.2,17.7-6.6,18.1-16.4c0.3-8.3-9-18.1-17.2-18.1c-8.2,0-17.4,9.4-17.4,18C787.7-392.2,793.8-386.1,804.3-385.9z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M-139.2-408.7c5.6-2,8.6,0.5,10.5,5.4c1,2.5,2.6,4.8,4,7.2c7,12.1,12.4,13.5,24.5,6c0.7-0.5,1.7-0.6,4.2-1.5 c1.8,4.3,4.8,8.4,5,12.8c0.7,12.5,0.2,25,0.3,37.5c0.1,6.1-3.2,7.8-8.6,7.8c-15.8-0.1-31.7,0-47.5,0c-40,0-80,0-119.9,0 c-14.6,0-19.8-6.5-16.8-21.2c0.9-4.5,3.1-8.7,3.9-13.1c4.3-24.8,6.2-49.6-0.8-74.3c-1.1-3.8-3-7.3-4-11.1c-1-4-1.4-8.3-2.1-12.9 c9.3,1.2,16.7,2.1,24.7,3.2c-0.8-4.3-2.5-7.8-1.7-10.3c1.7-5.1,4-9.2,11.7-9c25.9,0.8,51.9,0.3,77.8,0.3c11.7,0,12,0.3,12,11.7 c0,11.8,3.9,21.8,12.8,29.8c3.6,3.2,6.8,6.8,9.7,10.6c1.1,1.5,1.5,3.9,1.4,5.8C-138.3-419.2-138.8-414.4-139.2-408.7z M-222.1-394.3 c9.4,0.3,17.2-7.5,17.4-17.4c0.2-8.6-8.1-16.9-17-17c-9.4-0.1-16.9,7.1-17.2,16.6C-239.4-402.2-232.1-394.6-222.1-394.3z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M439.7-324.3c-5.8,6.5-8.3,14.1,0,21.3c-10.9,10.9-10.2,10.7-5.7,26.5c1.4,4.8-1,11.2-2.9,16.3 c-2.9,7.7-6.9,15-11.5,24.6c-33.9,0-70.4,0-106.9,0c-0.1-0.8-0.3-1.6-0.4-2.4c6-4.9,12.1-9.8,18.1-14.7c0.1-0.5,0.4-1.2,0.2-1.7 c-1.6-4.8-6-11.2-4.3-14.2c4.5-8,10.9-15.2,17.8-21.4c3.6-3.2,6.9-5.8,7.5-10.7c1.1-9.7,2.4-19.3,3-29c0.7-11.1,6.7-15.2,17.2-11.3 c2.5,0.9,5.4,0.9,8.1,0.9c11.3,0.1,22.7,0.8,33.9-0.2C426.2-341.3,435-337.5,439.7-324.3z M367.5-294.5c-0.2,10,6.9,17.8,16.7,18.2 c8.4,0.4,18-8.8,18-17.2c0-9.5-7.2-16.8-16.7-17.1C374.7-311,367.7-304.7,367.5-294.5z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M526.7-353.3c3.4-5.5,5.8-2.1,6.4,1.3c0.8,4.3,0.2,9,0.2,14.2c-9.4,0.3-17.9-3-26.9,0.2c-8.5,3-18.1,2.7-28.1,4 c1.5-10.1,3.2-20.5,4.4-30.9c0.7-6.9,0.7-13.9,0.7-20.8c0-8.8-0.5-17.7-0.5-26.5c0-5.4,3.3-7.1,8.3-7.5c6-0.5,12-1.4,17.9-2.6 c10.4-2.1,14.4-10,17.2-19.2c3.4-11.1,7.9-21.7,14.8-29.2c5.8,0.3,10.8-0.6,14.5,1.1c3.7,1.6,6.5,5.7,9,9.2c1.1,1.5,0.7,4.2,0.5,6.3 c-1.3,12.2,1.8,23.2,8.2,33.6c3.7,6.1,2.8,10.7-3.4,14c-11.3,6-19.8,17.7-34.3,17.6c-1.1,0-2.2,1-3.2,1.7 C524.2-380.9,520.9-361.8,526.7-353.3L526.7-353.3z M515.9-384.5c10.2,0,17.9-7.3,17.7-16.8c-0.2-9.6-8-17.3-17.4-17.5 c-8.4-0.1-18.2,9.3-18.1,17.4C498.1-392,506-384.5,515.9-384.5z M529.4-343.7c-0.4-0.1-0.7-0.2-1-0.3c0.1,0.2,0.1,0.4,0.2,0.6 C528.8-343.4,529-343.5,529.4-343.7z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M472.5-324.5c8.1-2.6,14.9-4.8,22.1-7.2c2.4,3.6,1.6,6.3-2.1,8.1c-4.9,2.4-9.8,5.3-15,6.5 c-6.9,1.5-10.4,4.6-11.7,11.8c-1.6,9.2-5,13.5-13.5,20.5c-13.1-10.1-13.2-12.1-1.5-25.3c-3.7-5.8-4.1-11.8-1.5-18.7 c2.8-7.2-2.1-13-10.4-13.2c-14-0.3-28-0.1-42.1-0.2c-2.4,0-5,0.3-7.3-0.2c-2.2-0.5-5.6-1.5-5.9-2.9c-0.6-2.2,0.1-5.8,1.7-7.4 c4.4-4.2,9.1-7.8,7.7-15.2c-0.2-1.2,4.1-4.5,6.6-4.9c4.4-0.7,9.2-0.6,13.6,0.3c6.5,1.3,12.1,0.7,16.7-4.3 c-0.9-12.8,11.9-27.9,25-29.5c0.6-0.1,1.2-0.1,1.8-0.1c19.3-1.2,17.6-1,19.8,18C479-367.3,474-347.3,472.5-324.5z M470.6-368.3 c0.1-9.6-6.8-17.1-16-17.4c-9.7-0.3-18.3,7.7-18.6,17.4c-0.2,8.8,7.6,16.6,17,16.8C462.8-351.2,470.5-358.6,470.6-368.3z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M-240-169.4c0.4,1.6,0.9,3.3,1.3,4.9c-0.4,0.3-0.8,0.7-1.3,1c-1.4-1.1-2.7-2.2-4.1-3.3 C-242.8-167.7-241.4-168.6-240-169.4L-240-169.4z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M-248.7-167.4c-0.2,0.1-0.6,0.3-0.7,0.2c-0.2-0.1-0.2-0.5-0.3-0.7c0.2-0.1,0.6-0.3,0.7-0.2 C-248.8-168-248.8-167.6-248.7-167.4z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M-304.2-242.7c-0.2,0.4-0.4,0.8,0.1-0.1C-304.6-241.9-304.4-242.3-304.2-242.7L-304.2-242.7z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M157.8-220.7l-4.1-0.4C154.9-220.7,156.2-220.6,157.8-220.7z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M159.2-312.3c-10.5,0.1-16.3,5.9-16.3,16.5c0,10,7.6,18,16.8,17.8c8.4-0.1,17.5-8.8,17.6-16.8 C177.5-304.6,169.5-312.3,159.2-312.3z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M227.6-245.3c-2.5-6.5-4.7-13.1-11-17.5c-2.2-1.5-3.9-5.7-3.5-8.3c0.9-5.4-1.1-7.9-4.9-11.5 c-5-4.7-11.1-10.8-11.6-16.8c-0.6-7.4,4-15.3,6.5-22.9c0.3-0.9,2-1.3,3-2c9.3-6.1,9.8-11,2.8-20.1c-3.2-4.2-6.8-8.7-8-13.6 c-1.4-5.8-4-7.7-9.3-7.7c-21.1,0-42.1,0-63.2,0c-4.5,0-7.8,1.2-8,6.5c-0.1,3.4-1.2,6-5.4,5.7c-5.1-0.4-10.3-0.9-15.4-1 c-26.2-0.7-52.3-1.4-78.5-2c-4.5-0.1-6.8,2.2-6.8,6.7c0,4.9-0.1,9.8-0.1,14.7c0,21.7-1.7,20.9,19.9,20.8c8.4-0.1,9.3,1,9.3,9.7 c0.1,14.7,0.1,29.3,0,44c-0.1,12.5,0.7,17.1-2.9,18.7l75.2,0.2c0-0.4,0-0.7,0-1.1c7.5,0,14.7,0,22,0c4.7,0,8.9,0,11,5.8 c0.7,1.8,5,3.1,7.6,3.2c11,0.4,22,0.2,33,0.2c6.3,0,12.6,0,18.5,0c2.2,8.5,4.2,10.1,8.9,8.6C222.1-226.6,229.6-240.1,227.6-245.3z  M128.2-289c-9.3,0.1-16.8-7.9-16.8-17.8c0-10.6,5.7-16.4,16.3-16.5c10.3-0.1,18.4,7.7,18.2,17.5C145.7-297.9,136.6-289.2,128.2-289 z" }), /* @__PURE__ */ P.createElement("polygon", { className: "st0", points: "212.5,-213.4 212.5,-213.4 212.5,-213.4 " }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M707.6-335.9c1.5-6.9-4.3-7.6-7.2-10.7c-2.8-3.1-4.3-7.5-6.8-12.1c-6.6-0.3-14.3-0.7-22.8-1.2 c0.9-2.8,1-4.4,1.8-5.6c5.2-7.3,7.2-14.7,5.6-24c-1.3-7.8-0.3-15.9,5.1-23.4c5.3-7.3,8.3-16.1,12.4-24.2c2.3-4.4,0.9-6.9-3.7-8.1 c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0.3-6.4-3.7-7.4-8.9-7.4c-15.3,0.1-30.5-0.2-45.8,0.1c-1.5,0-2.9-0.1-4.1-0.4 c-4.2-0.9-6.2-3.9-6.4-9.5l-75.2-0.2c-2.6,1.2-7.5,0.8-16.8,0.8c-1.2,0-2.5,0-3.7,0c-32.3,0.1-64.7,0-97,0c-9.9,0-11.4,1.2-11.4,9.9 c-0.1,27.5-0.1,54.9,0.1,82.4c0,2.6,1.7,7.1,3.3,7.4c3.1,0.7,7.9,0.1,9.8-1.9c3.4-3.6,6.9-4.4,11.3-4.4 c11.7-0.1,31.6,13.3,34.9,25.2c2.4,8.8,7.8,13.2,15.6,16.3c9.1,3.6,9,3.8,14.4-4c4.2-6,9.7-8,15.7-4.1c4.7,3.1,8.6,7.5,12,12 c4,5.3,7,11.3,10.6,17c1.8,2.8,4.9,5.3,5.5,8.2c2.7,13.4,11.9,18.7,23.9,21.6c10.2,2.5,13.3,0.5,10.6-9.8 c-3.1-12.1-0.1-19.8,15.1-30c6-4.1,12.5-7.5,18.2-12c6.3-4.9,13.5-8.4,21-7.6c8.8,1,17.9,3.4,25.8,7.3c6.2,3.1,11.6,4.6,18.2,2.6 c2.2-0.7,5.3-1.8,6.8-0.9c3,1.8,6,4.6,8.4,0.8c1.1-1.8-1.1-5.7-1.7-8.6c-0.1-0.6,0-1.2,0-2.4C704.1-336.4,705.8-336.1,707.6-335.9z  M559.8-348.1c-10.1,0-17.9-7.3-17.9-16.7c0.1-10.6,7.5-18.2,17.6-18c9.5,0.2,17.1,8.2,16.9,17.8 C576.3-355.5,568.9-348.1,559.8-348.1z" }), /* @__PURE__ */ P.createElement("path", { d: "M552.5-184c-0.1-0.1-0.2-0.2-0.4-0.4c0.3,0.7,0.8,1.4,1.2,2.1c0.7,1.2,1.3,2,2,2.5c-0.1-0.1-0.2-0.2-0.2-0.4 C554.3-181.6,553.5-182.9,552.5-184z" }), /* @__PURE__ */ P.createElement("path", { d: "M562.5-180c0.2,0.4,0.4,0.8,0.6,1.3c-0.1-0.4-0.2-0.9-0.4-1.3C562.6-180,562.6-180,562.5-180z" }), /* @__PURE__ */ P.createElement("path", { d: "M548.9-186.2c0,0,0,0.1,0,0.1C549-186.1,549-186.1,548.9-186.2C549-186.2,549-186.2,548.9-186.2z" }), /* @__PURE__ */ P.createElement("path", { d: "M580-176.6c2.9,0,5.3-2.2,5.2-4.8c-0.1-2.6-2.8-5.3-5.3-5.4c-2.8-0.1-5.1,2.3-5.1,5.3C574.9-178.2,576.6-176.5,580-176.6z" }), /* @__PURE__ */ P.createElement("path", { d: "M563.5-176.7c0.1,3,0.1,6.1,0.1,9.1c0-0.1,0-0.1,0-0.2C563.6-170.8,563.9-173.7,563.5-176.7z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M563.1-178.7c0.2,0.7,0.3,1.3,0.4,2c0-0.2,0-0.4,0-0.5C563.5-177.7,563.3-178.2,563.1-178.7z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M549-186.1c0.3,0.3,0.8,0.6,1.4,0.7c0.6,0.2,1.2,0.5,1.7,1c0,0,0,0,0-0.1C551.5-185.9,550.6-186.7,549-186.1z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M560.7-180.6c-2.5,1.5-4,1.8-5.4,0.7c0.6,0.8,1.4,0.9,2.5,0.6c1.5-0.4,3.1-0.5,4.6-0.7 c-0.2-0.4-0.4-0.7-0.5-1.1C561.2-180.8,560.9-180.7,560.7-180.6z" }), /* @__PURE__ */ P.createElement("path", { d: "M542.5-136.6c0,3.5,0.1,3.6,3.8,3.6c9.8,0,19.5,0,29.3,0c5.5,0,11,0,16.5,0c1.7,0,2.9-0.5,2.9-2.4c0-6.1,0-12.1,0-18.2 c0-1.4-0.6-2.2-2.2-2.2c-1.3,0-2.6-0.1-3.9,0c-2,0.1-3-0.6-2.9-2.6c0.1-1.6,0-3.3,0-4.9c0.1-2.5,0.3-2.8,3-2.8 c6.1,0,12.3-0.1,18.4,0c2.3,0,4.6,0.3,6.8,0.8c1.4,0.3,2.7,1.1,4.4,1.9c0-1.2,0-2,0-2.7c0.1-3.3,0.2-6.7,0.4-10 c0.3-3.4-1.6-6.6-0.7-10c0.1-0.2-0.1-0.5-0.1-0.8c-0.8-4-1.6-7.9-2.4-11.9c-0.1-0.4-0.1-0.9-0.1-1.3c0-1.1,0.1-1.9,0-2.5l-82.1,0.1 c0,0.2-0.1,0.3-0.1,0.5c0.1,0.5,0.1,1.2,0.1,2.1c0,0.9,0.1,1.7,0.2,2.5c0.5,1.9,1.4,3.7,2.9,5.4c0.4,0.5,0.9,1,1.3,1.4 c0.9,0.8,1.7,1.7,2.4,2.6c0.3,0.4,0.4,1.1,0.4,1.7c0,1.4-0.2,2.8-0.3,4.4c0,0,0,0.1,0.1,0.1c1.6-0.5,2.5,0.2,3.1,1.6c0,0,0,0,0,0.1 c0.1,0.1,0.2,0.2,0.4,0.4c1,1.2,1.8,2.5,2.6,3.8c0.1,0.1,0.2,0.3,0.2,0.4c1.4,1.1,2.9,0.8,5.4-0.7c0.2-0.1,0.5-0.2,1.3-0.4 c0.2,0.4,0.3,0.7,0.5,1.1c0.1,0,0.2,0,0.2,0c0.2,0.4,0.3,0.9,0.4,1.3c0.2,0.5,0.4,1,0.4,1.4c0,0.2,0,0.4,0,0.5c0.4,3,0.1,6,0.1,8.9 c0,0.1,0,0.2,0,0.2c0,0.5,0,1,0,1.5c0,1.8-1,2.3-2.6,2.3c-3.4,0-6.8,0-10.1,0c0,0.2,0,0.5,0,0.8 C542.5-151.2,542.5-143.9,542.5-136.6z" }), /* @__PURE__ */ P.createElement("path", { d: "M667.1-134.3c1,0.5,4.6-1.1,5-2.2c0.8-1.9,2-2.3,4.1-2.2c1.9,0,4-0.6,5.6-1.6c2-1.3,3.6-3.2,5.7-5.1 c1.9,3.6,5.7,2.1,8.4,3.6c0.2,0.1,0.6-0.1,0.8-0.2c2.3-2.6,5.3-4.8,6.8-7.8c1.4-2.8,1.4-6.3,1.8-9.4c0-0.2,0-0.4,0-0.5l-3.4,1.7 l-3.5,1.2l-3.3,0.2l-2-1.5l1-1.8l0.5-0.5l0.7-1.8l1.2-0.8l1.6-2.8l-1.7-2.2l-0.3-3.5l-2.2-0.7l-2.8,2l1-2.3l1.7-2.3l-0.7-2.2 l-0.5-2.5l-2.7-1l-2.3-2l-2.8,1.2l0.2,2.2l-1.7,2l-1.3-0.7l-2.5,2.8v3.3l0.3,3.3l1.5,2.3l-0.2,5l-3.2,3l-2.3,0.2l-1.2-3.5l-1.2-2.5 l0.5-3.3l-0.5-3.3l1.2-2.2l0.7-2.2l1.2-3.7l-2.7,3l1.5-5.2l2.3-2l2.8-0.2l2.2-1h3.5h2.8l1.8-0.5l2.2,0.3l-1.3-1l-1.7-1l-1.9-1.4 l-1.9,0.6l-1.8-1.3l-4.3,0.2l-2.3,1.5l-1.8-1.2l-2.2-1.3l-3.2-0.2l3.2-4.5l-3.7,1.7l-3,2.3l-3,1.7l-2.7,0.3l-0.3-1.7l-5.5,1.2l4.6-4 l3.2-2.4l4-3.2l-1.7-0.2L660-198l-2.5-0.5l-2.2-0.4l-2.2-1.6l-2.5,0.2l-4.8-1.2l-1.2-1.5l-0.7-2.3l-1.2-1.1l0.1,1.2l-1.2,1.8l-8.5,0 c0,0.3,0,0.6,0.1,1c0.2,2.5,0.9,5,1.4,7.4c1.1,4.9,0.4,10,1.6,15c0.5,2,0.1,4.1,0.1,6.2c0,3.4,0.1,3.5,3.6,3.5 c5.3,0,10.7-0.1,16,0.1c1,0,2.7,0.6,2.7,1.1c0.2,2.3,1.8,3.6,3.2,5.2c0.7,0.9,1,1.7,0.9,2.5c0.5,1.5-0.1,2.6-2.1,3.9 c-0.3,0.2-0.8,0.3-0.9,0.6c-0.8,2.3-2.1,4.6-2,6.8c0,0.1,0,0.2,0.1,0.4c1.1,1.8,2.5,3.4,3.9,5.1c0.3,0.3,0.5,0.5,0.6,0.8 c0.1,0.1,0.2,0.3,0.3,0.4c0,0.1,0,0.1,0,0.2c0.1,0.4,0.2,0.9,0.1,1.5c-0.1,0.4,0,0.9,0.2,1.3c0.3,0.5,0.8,0.9,1.7,1.8 c0.1,0.1,0.2,0.2,0.3,0.4c0.9,1.1,1.5,2.3,2,3.6C666.8-134.5,667-134.4,667.1-134.3z" }), /* @__PURE__ */ P.createElement("path", { d: "M516.3-163.8c-1.9,0-3.9,0-5.8,0c-0.8,0-1.4-0.1-2-0.2l0,0.2C511.1-163.8,513.7-163.8,516.3-163.8z" }), /* @__PURE__ */ P.createElement("path", { d: "M534.5-140.7c-2.5,0.1-5.2,2.9-5.2,5.4c0,2.8,2.6,5.5,5.4,5.4c2.9,0,5-2.3,4.9-5.3C539.6-138.4,537.3-140.8,534.5-140.7z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M517.8-163.8c-0.5,0-1,0-1.4,0c7.5,0,15.1,0,22.6,0C531.9-163.8,524.8-163.8,517.8-163.8z" }), /* @__PURE__ */ P.createElement("path", { d: "M561-120.6c0-2.9-0.4-5.3-3.3-5.3c-4.9,0-9.8,0-14.6,0c-3.5,0-3.6-1.1-3.6-4.7c0-7.2,0-11.4,0-18.6c0-3.4-0.2-3.5-3.5-3.5 c-2.6,0-5.2,0-7.8,0c-7.5,0-15.1,0-22.6,0c-2.6,0-5.2,0-7.8,0l0.4,2.2l0.5,2.8l-0.7,3.8l0.5,2.7l1.2,2.7l1,3.3l0.8,2.2l3.5,2.8 l1.7-0.2l2.3,0.3l-2.5,0.7l0.7,1.2l-2.2,0.3l2,2.2l2,2.2l-0.7,1.8l2.7,3.8l2.8,2.3l0.3,2.8l2.3,1.2l3.2,1l2.5,2.2l2.2,1.3l2.3,1.8 l1.3,1l1.5,3.3l8.5-0.2l16.7,5.8h6.3c0-0.1,0-0.2,0-0.3C561-103.9,561-112.3,561-120.6z" }), /* @__PURE__ */ P.createElement("path", { d: "M686.7-125c-0.1-0.2,2.7-1.3,2.6-1.5c1.3-1.2,2.6-2.4,3.8-3.5c-1-2.1-0.4-0.8-1.3-2.7c-0.6-1.2-1.2-2.4-2.9-2 c-2.1,0.5-3.7-0.1-5-1.8c-0.8-1-1.9-1.1-2.9-0.2c-1.7,1.5-3.3,3.2-5,4.7c-0.4,0.4-1.1,0.4-1.6,0.6c-3.5,1.4-8.2,0.2-10.3,4.5 c0,0.1-0.2,0.1-0.2,0.2c-3.2,0.7-3.9,3.6-5.1,5.9c-1.9,3.5-3.2,7.4-5.4,10.7c-2,3-2.3,5.9-1.8,9.2c0.2,1.3,0,2.8-0.6,3.9 c-0.3,0.6-0.5,1.1-0.7,1.6c2.2,0.1,4.2,0.2,6,0.3c0.3,0.5,1.7,2.2,3.4,4.3l0.4,0.4l4.8-0.7l0.7,0.8h3.3l1.8-0.5l2.7-0.2l2.5,1 l1.5-0.2l1.5,2.2l3,0.2l1.7-1.3h1.7l3.3,2.8l1.8,2l0.5,2.7l-0.3,3.3l1.2,3.5l3.2,4l1.8,3.8l0.7,1.5l3.3-0.7l0.8-3.7v-5.5l-1.7-4.5 l-0.5-1.2l-0.3-3.3l-2.8-3.3l-0.5-4l0.2-3.3l1.3-3.7l2.5-2l-0.2-1.5l3-0.5l4.3-4.8l2-1.7l2.2,0.3l2-3.8l2.8-1.5c0,0,2.2,0.3,2.3-0.5 c0.2-0.8,2.3-4.8,2.3-4.8l-2.3-1.3l1.3-1.2l0.3-0.8l-0.8-2.1c-7.5-0.1-17.8-0.2-22.6-0.2C693.2-125,689.9-125,686.7-125z" }), /* @__PURE__ */ P.createElement("path", { d: "M523.9-181.8c2.8,0.1,5.2-2.2,5.3-5.2c0.1-2.6-2.4-5-5.1-5c-2.8,0-5.1,2.1-5.2,4.9C518.7-184.2,520.9-181.9,523.9-181.8z" }), /* @__PURE__ */ P.createElement("polygon", { points: "690.5,-184.6 691.4,-187 688.5,-186.6 686.7,-186.8 685.4,-187.8 686.4,-186.1 " }), /* @__PURE__ */ P.createElement("path", { d: "M527.3-160.8c4.8,0,9.6,0,14.3,0c1.7,0,2.6-0.5,2.6-2.3c0-3.7,0.1-7.4-0.1-11.1c-0.1-1.3-1-2.5-1.5-3.8 c-0.8,0.3-1,0.3-1.3,0.4c-3.7,2.2-5.3,1.8-7.4-1.8c-0.4-0.7-0.9-1.4-1.2-2.1c-0.6-1.5-1.5-2.2-3.2-1.6c0.1-1.7,0.3-3.1,0.3-4.5 c0-0.6-0.1-1.3-0.4-1.7c-0.9-1.1-1.9-2.2-2.9-3.1c-2.7-2.4-3.9-5.3-3.9-8.8c0-1.3,0-2.1-0.2-2.6l-24.6,0l-0.7,0.9l0.3,2.2l1.7,3.5 l-0.8,3.7l-1.8-2.3l-1.2-2.7l-2.7-0.5l-4.2-0.5h-1.2l0.7,2.3l2.3,3.3v3.3l0.7,3.7l3,0.3l1.2,1.7l-3.7-0.5l-1.2,0.8l0.5,3.5l-0.7,3.8 l0.2,4.5l-1.2,3l-1.3,4.3l1,3l0.3,1.4c0.6,0.1,1.3,0.2,2,0.2C503.2-160.8,515.2-160.8,527.3-160.8z" }), /* @__PURE__ */ P.createElement("path", { d: "M748.3-155.2l-2.7,0.2l-2.5,0.7l-1.2,0.7l-0.2-1.2l0.8-1l0.5-0.1l-0.5-22.1l-5.5,0l-3.5,3.2l-2.2,1.3l-1,2.8l-0.5,1.5 l-2.5,1.7H725l-1.8-0.8l-2.3,0.3l-3,1l0.2,1.5l-0.2,2.7l-1.5,1.3l-0.8,0.2c2.9,0.1,5.8,0.2,8.7-0.1c3.7-0.3,6.3,0.9,7.7,4.9 c-1.7,2-2.5,4.3,0,6.5c-1.2,2.4-1.9,3.9-2,5.6l0.6-0.5l0.7,4.2l0.5,2l1.2,1.8l-0.3,3l1.8-3.7l1.2-2.8l0.2-1.7l-1.7-2l-0.2-0.8 l0.5-0.5l2.7,1.7l0.8-2l1.8-1.8l0.3-2l-0.3-2.3l0.2-1.2l0.3-1.7l1.3,1.8h0.7l2-0.3l2-0.2l2.7-0.8L748.3-155.2z" }), /* @__PURE__ */ P.createElement("path", { d: "M728.8-151.9c-1.4-4-4-5.2-7.7-4.9c-2.9,0.3-5.8,0.1-8.7,0.1l-2.2,0.5l-1.3,0.7c0,0.2,0,0.4,0,0.5c-0.5,3.2-0.4,6.7-1.8,9.4 c-1.5,3-4.5,5.3-6.8,7.8c-0.2,0.2-0.6,0.3-0.8,0.2c-0.6-0.3-1.3-0.5-2-0.6c-0.4,0.5-0.7,0.9-1.1,1.4c0.6,0.1,1.2,0,1.9-0.1 c1.7-0.4,2.3,0.8,2.9,2c0.9,1.8,0.3,0.6,1.3,2.7c-1.1,1.1-2.5,2.3-3.8,3.5c0.1,0.2-2.7,1.3-2.6,1.5c3.2,0,6.5,0,9.7,0 c4.7,0,15.1,0.1,22.6,0.2l-0.5-1.2l-1.3-1.5l1.7-1.8l-1.3-1.7l-0.3-3.3l-0.2-2.8l0.4-0.3c0.1-1.7,0.7-3.2,2-5.6 C726.4-147.5,727.1-149.9,728.8-151.9z" }), /* @__PURE__ */ P.createElement("path", { className: "st0", d: "M515.9-114.7c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0-0.1-0.1-0.1-0.2c0.1,0,0.2-0.1,0.2-0.1 C515.9-114.8,515.9-114.7,515.9-114.7z" }), /* @__PURE__ */ P.createElement("path", { d: "M601-94.1l0.6-0.7c-0.5,0-0.9,0.2-1.3,0.4L601-94.1z" }), /* @__PURE__ */ P.createElement("path", { d: "M660.2-98.3l-0.2-0.8h-0.6C659.7-98.8,659.9-98.6,660.2-98.3L660.2-98.3z" }), /* @__PURE__ */ P.createElement("polygon", { points: "653.2,-131.9 653.2,-131.9 653.2,-131.9 " }), /* @__PURE__ */ P.createElement("path", { d: "M605.2-133.9c0,3.5,0.2,4.9-0.7,5.4c0.4,0,0.9,0,1.3,0c0.4,0,0.7,0,1.1,0c2.8,0,4.3,0.1,5.1-0.2l22.7,0.1c0,0,0,0,0,0.1 c1,0.1,1.8,0.4,2.3,1.7c0.2,0.5,1.5,0.9,2.3,1c3.3,0.1,6.6,0,9.9,0.1c1.9,0,3.8,0,5.6,0c0.7,2.5,1.3,3,2.7,2.6 c1.6-0.5,3.8-4.5,3.2-6c-0.8-1.9-1.4-3.9-3.3-5.2c-0.7-0.4-1.2-1.7-1.1-2.5c0.3-1.6-0.3-2.4-1.5-3.4c-1.5-1.4-3.3-3.2-3.5-5 c-0.2-2.2,1.2-4.5,2-6.8c0.1-0.3,0.6-0.4,0.9-0.6c2.8-1.8,2.9-3.2,0.8-5.9c-1-1.2-2.1-2.6-2.4-4c-0.4-1.7-1.2-2.3-2.8-2.3 c-6.4,0-12.7,0-19.1,0c-1.4,0-2.3,0.4-2.4,1.9c0,0.4-0.1,0.8-0.3,1.1c0,0.4,0,0.3,0,1.4c-1.7-0.8-3-0.6-4.4-0.9 c-0.4-0.1-0.9-0.2-1.3-0.2c-0.1,0-0.2,0-0.4,0c-7.7-0.2-15.3-0.4-23-0.6c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.7,0 c-1,0.1-1.5,0.8-1.5,1.9c0,1.4,0,0.9,0,2.3c0,4.3-0.2,5.6,1.5,6c0.2,0,0.3,0,0.5,0c1.3-0.1,2.6,0,3.9,0c1,0,1.6,0.3,1.9,0.9 c0.8,0.9,0.9,2.4,1,4.1C605.2-142.5,605.2-138.2,605.2-133.9z" }), /* @__PURE__ */ P.createElement("path", { d: "M643.9-93c0.3-0.8,0.3-1.3,0.5-1.6c1.6-2.2,1.2-5.6,0.7-8.3c-0.4-2.3-0.1-4.7,1.5-6.9c1.6-2.1,2.5-4.8,3.8-7.2 c0.7-1.3,0.3-2-1.1-2.4c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0.1-1.9-1.1-2.2-2.7-2.2c-4.6,0-9.2-0.1-13.8,0c-0.5,0-0.9,0-1.2-0.1 c-1.2-0.3-1.9-1.1-1.9-2.8c-0.3,0-0.7,0-1.1,0c-2.2,0-4.4,0-6.6,0c0,0.1,0,0.2,0,0.3l-22.7-0.1c0.1,0,0.1-0.1,0.2-0.1 c-9.3,0-18.6,0-27.9,0c-3,0-3.4,0.4-3.4,2.9c0,8.1,0,16.3,0,24.4c0,0.3,0.1,1.7,0.3,3.2h7l-0.3-1.3h6.7l2.7,1.5l1.5,1.5l3.8,2.7 l1.3,4.8l3.8,2l1.6,0.7c0.4-0.2,0.8-0.4,1.3-0.4l2.6-3.1l4.2,0.5l1.7,1.3l4.5,7.3l1.5,1.8l1.2,4.2l8.8,3.5l-0.3-3l-0.3-4.2l2.8-3.3 l-0.5-1l2.8-2.3l1.5,0.8l2.5-2.8l1.5-2h2.2l4.8-1l3.5,1.5h2.7l1-1.2l1.2,0.8l0.2,1.5l3.5,1.2l3.3-0.5l2.8,0.2l-2.3-1.8l-0.2-1 l1.5-0.8c-0.2-0.3-0.5-0.6-0.7-0.9h-1.7l-2.7,0.3l1.7-1.5l0.8-1l0.4,0.4c-1.7-2-3.1-3.8-3.4-4.3C648.8-92.8,646.5-92.9,643.9-93z" }), /* @__PURE__ */ P.createElement("path", { d: "M751-164l1.8-0.5l1.5-1l3.5,0.8c0,0,1.5,0.8,1.7,0.3s0.7-1.8,0.7-1.8l-1.2-1.3l-0.5-2l0.3-3.3l0.3-2.7l1.5-2l0.3-0.8l1,0.5 l3.2-3.5h1.2l2.7-0.3l0.8-1.7h2.3l2-1.7l-0.8-0.9l-0.9-2.2l-1-0.8l0.4-5.6l-0.5-5.1l-3-0.9l-2.6,0.9l-1.4-0.2l-5.8,13.4l-2.7,0.2 l-1.2,1l-8.7-0.1l0.5,22.1l1.7-0.4L751-164z" }), /* @__PURE__ */ P.createElement("path", { d: "M1036.5-111.8c1.7,0.5,2.2,1.4,1.4,3c-1.5,3-2.7,6.3-4.6,9c-2,2.8-2.4,5.8-1.9,8.7c0.6,3.5-0.2,6.3-2.1,9 c-0.3,0.4-0.3,1-0.7,2.1c3.2,0.2,6,0.3,8.5,0.4c0.9,1.7,1.5,3.3,2.5,4.5c1.1,1.2,3.2,1.4,2.7,4c-0.7-0.1-1.3-0.2-2-0.3 c0,0.4,0,0.7,0,0.9c0.2,1.1,1.1,2.5,0.6,3.2c-0.9,1.4-2,0.4-3.1-0.3c-0.6-0.3-1.7,0.1-2.5,0.3c-2.4,0.7-4.4,0.2-6.8-1 c-3-1.5-6.3-2.4-9.6-2.7c-2.8-0.3-5.5,1-7.8,2.8c-2.1,1.7-4.5,3-6.8,4.5c-5.7,3.8-6.8,6.7-5.6,11.2c1,3.8-0.2,4.6-4,3.7 c-4.5-1.1-7.9-3.1-8.9-8.1c-0.2-1.1-1.4-2-2-3.1c-1.3-2.1-2.4-4.4-3.9-6.3c-1.3-1.7-2.8-3.3-4.5-4.5c-2.2-1.5-4.3-0.7-5.9,1.5 c-2,2.9-2,2.8-5.4,1.5c-2.9-1.2-4.9-2.8-5.8-6.1c-1.2-4.4-8.7-9.4-13-9.4c-1.6,0-3,0.3-4.2,1.6c-0.7,0.8-2.5,1-3.7,0.7 c-0.6-0.1-1.2-1.8-1.2-2.8c-0.1-10.2-0.1-20.5,0-30.7c0-3.2,0.6-3.7,4.3-3.7c12.5,0,25,0,37.6,0c8.2,0,7.3,0.8,7.4-7.3 c0-5.5,0-10.9,0-16.4c0-3.2-0.4-3.6-3.5-3.6c-8.1,0.1-7.4,0.3-7.4-7.8c0-1.8,0-3.6,0-5.5c0-1.7,0.9-2.5,2.5-2.5 c9.8,0.2,19.5,0.5,29.3,0.7c1.9,0.1,3.8,0.2,5.8,0.4c1.6,0.1,2-0.9,2-2.1c0.1-2,1.3-2.4,3-2.4c7.9,0,15.7,0,23.6,0 c2,0,3,0.7,3.5,2.9c0.4,1.8,1.8,3.5,3,5.1c2.6,3.4,2.4,5.2-1,7.5c-0.4,0.2-1,0.4-1.1,0.7c-0.9,2.8-2.7,5.8-2.4,8.5 c0.2,2.2,2.5,4.5,4.3,6.3c1.4,1.3,2.2,2.3,1.8,4.3c-0.2,1,0.5,2.5,1.3,3.1c2.4,1.6,3.2,4.1,4.1,6.5c0.7,1.9-2,7-4,7.6 c-1.8,0.5-2.5-0.1-3.3-3.2c-2.2,0-4.6,0-6.9,0c-4.1,0-8.2,0.1-12.3-0.1c-1,0-2.6-0.5-2.8-1.2c-0.8-2.2-2.4-2.2-4.1-2.2 c-2.7,0-5.4,0-8.2,0c0,3,1.2,4.2,3.9,4.1c5.7-0.1,11.4,0,17.1,0C1035.1-114.6,1036.6-114.2,1036.5-111.8L1036.5-111.8z  M1010.6-142.5c0,3.7,2.8,6.7,6.3,6.6c3.1,0,6.5-3.3,6.6-6.3c0.1-3.7-3-6.6-6.8-6.5C1012.7-148.7,1010.6-146.5,1010.6-142.5z  M987.2-75.6c3.4,0,6.1-2.8,6.2-6.3c0.1-3.6-2.7-6.6-6.3-6.7c-3.8-0.1-6.5,2.7-6.6,6.7C980.6-78.4,983.5-75.6,987.2-75.6z" }), /* @__PURE__ */ P.createElement("path", { d: "M1001.9-161.7c-2.1-1-3.6-2-5.3-2.4c-2.7-0.6-5.5-1-8.3-1c-7.5-0.1-15-0.1-22.5,0c-3.2,0-3.5,0.3-3.6,3.5c0,2,0.1,4.1,0,6.1 c-0.1,2.6,1.1,3.5,3.5,3.3c1.6-0.1,3.2,0,4.8,0c1.9,0,2.7,0.9,2.7,2.7c0,7.6,0,15.2,0,22.9c0,2.4-1.4,3.1-3.5,3.1 c-6.7,0-13.4,0-20.1,0c-11.9,0-23.9,0-35.8,0c-4.6,0-4.7-0.1-4.7-4.5c0-9.2,0-18.4,0-27.7c0-3.8,0.2-4,4.1-4c3,0,5.9,0,8.9,0 c1.4,0,2.6-0.4,2.6-2c0-5,0.8-10-1.1-15.3c-2,0.3-4,0.5-6,1c-1.6,0.4-2.6,0.2-3.4-1.3c-0.9-1.7-1.9-3.3-3.1-4.8 c-0.6-0.8-1.6-1.5-2.5-1.7c-1.5-0.4-2.5-1.2-2.1-2.6c1.7-5.1-1.7-8.1-4.4-11.3c-3-3.6-4.3-7.6-3.9-12.3c0.2-1.9,1-2.9,3-2.9 c0.7,0,1.4,0,2,0c30.3,0,60.5,0,90.8,0c4.7,0,4.9,0.3,4.7,5.1c0,0.6,0,1.1,0.1,1.7c1,5,2,10,3,15c0.1,0.3,0.2,0.7,0.2,1 c-1.2,4.3,1.1,8.3,0.8,12.6c-0.3,4.2-0.4,8.4-0.5,12.6C1001.8-164.1,1001.9-163.2,1001.9-161.7z M944.5-172.6c3.5,0,6.5-2.8,6.4-6 c-0.1-3.2-3.4-6.7-6.5-6.8c-3.4-0.1-6.2,3-6.3,6.7C938.2-174.7,940.3-172.6,944.5-172.6z" }), /* @__PURE__ */ P.createElement("path", { d: "M1096.2-159.6c5.4,5.3,9.4-0.5,14.3-0.8c0.2,1.3,0.6,2.5,0.4,3.6c-0.6,4-0.5,8.4-2.3,11.9c-1.9,3.8-5.5,6.6-8.4,9.9 c-0.2,0.2-0.7,0.4-0.9,0.3c-3.3-1.9-8,0-10.3-4.5c-2.5,2.4-4.5,4.8-7,6.4c-2,1.3-4.6,2.1-6.9,2.1c-2.6-0.1-4.1,0.4-5,2.8 c-0.5,1.3-5,3.3-6.2,2.7c-0.7-0.3-1-1.4-1.4-2.1c-0.7-1.2-1.1-2.5-2-3.4c-2.7-2.7-2.8-2.6-2.4-6.1c-2.1-2.7-4.3-5.2-6-7.9 c-1.3-2-0.2-4.2,0.8-6.1c0.5-1,1.1-2,1.1-3.1c0.1-1.5,0.7-2.4,2.1-3.1c2.4-1.3,2.7-3.2,0.9-5.3c-1.6-2-3.6-3.7-3.9-6.6 c-0.1-0.6-2.2-1.4-3.4-1.4c-6.6-0.1-13.2-0.1-19.8-0.1c-4.3,0-4.4-0.1-4.4-4.4c0-2.6,0.5-5.4-0.1-7.8c-1.5-6.2-0.7-12.6-2-18.8 c-0.7-3.1-1.4-6.2-1.7-9.4c-0.3-3.5,0.1-3.9,3.7-4c1.3,0,2.5,0.2,3.7-0.1c1.1-0.2,2.3-0.7,3.2-1.4c1.8-1.5,2.6-1.4,3.4,0.8 c1.1,3.1,2.7,4.7,5.5,4.3c3.8-0.6,6.5,1.4,9.4,3.1c1.2,0.7,2.2,1.3,3.7,0.6c0.8-0.4,2,0,3,0.1c3.7,0.4,7.4,2.7,11.1-0.5 c-0.3,2.5-1.6,4-3.6,3.8c-5.5-0.5-9,2.1-12.3,6.7c2-0.6,3.5-1,5.6-1.6c-0.2,1.6-0.2,2.5-0.3,3.5c0.3,0,0.7,0,0.9-0.1 c2.9-1.7,5.9-3.3,8.8-5.1c2.2-1.3,2.4-1.3,5.7,0c-1.3,0.7-2.3,1.2-3.3,1.7c1.7,1.6,2.7,2.8,4,3.6c0.7,0.5,1.9,0.7,2.8,0.6 c1.5-0.1,2.9-0.5,4.3-0.9c4.2-1.2,7.5,0.3,10.5,3.3c0.9,0.9,2.1,1.3,3.2,2c0,0.3-0.1,0.5-0.1,0.8c-1.2,0.4-2.4,0.9-3.9,1.4 c1.8,1.6,4.2,2.9,5,4.7c0.8,2,0,4.6-0.1,7c4.9,2.5,6.2,9.4,2.5,13.8C1097.3-161.8,1096.8-160.6,1096.2-159.6z M1081.3-188.4 c-0.2-0.1-0.5-0.2-0.7-0.3c-0.5,0.4-1.1,0.7-1.5,1.2c-4.2,5.5-6.6,11.8-7,18.7c-0.2,2.8,0.3,5.6,1,8.3c0.6,2.1,2.3,2.5,3.6,0.9 c1.9-2.3,3.8-5,2.4-8c-2.6-5.7,0.4-10.8,1.3-16.1C1080.7-185.2,1081-186.8,1081.3-188.4z M1072.1-143.3c3.8,0,6.8-2.9,6.7-6.6 c-0.1-2.9-3.5-6.3-6.5-6.3c-3.6,0-6.4,2.7-6.5,6.4C1065.9-146,1068.5-143.3,1072.1-143.3z M1083.4-185.8c0.2,0.2,0.4,0.4,0.6,0.5 c0.3-0.4,0.5-0.9,0.8-1.3c-0.1-0.1-0.3-0.2-0.4-0.3C1084.1-186.5,1083.7-186.2,1083.4-185.8z" }), /* @__PURE__ */ P.createElement("path", { d: "M867.8-95.4c-1.5-2.9-4.1-2.2-6.5-2c-1.6,0.1-3.3,0.9-4.8-1.1c1.4-0.4,2.7-0.7,3.9-1.1c0-0.1,0-0.2,0.1-0.3 c-0.8-0.1-1.6,0-2.4-0.3c-0.8-0.3-2.1-0.8-2.1-1.3c-0.3-3.9-3.8-5.8-5.3-8.9c-1.5-3.3-3.2-6.5-4.9-9.7c-0.5-0.9-1.2-1.8-1.8-2.7l0,0 c-1.1-1.8-2.2-3.7-3.2-5.5c-0.6-1-1.3-1.9-1.6-3c-0.7-2.6-0.9-5.3-2.8-7.5c-0.7-0.7-0.2-2.6-0.1-3.9c0.2-2.1,0.8-4.3,0.5-6.3 c-0.3-2.3,0.4-3.2,2.6-3.2c3.9,0,7.7,0,11.6,0c11.9,0,23.9,0,35.8,0c4.1,0,4.3,0.2,4.3,4.2c0,8.5,0,17.1,0,25.6 c0,4.2,0.1,4.3,4.5,4.4c6,0,12.1,0,18.1,0c3.5,0,4,0.5,4,3.9c0,9.9,0,19.8,0,29.7c0,3.4-0.5,3.8-4,4c-4.6,0.2-9-0.4-13.2-2.4 c-4.9-2.3-10.1-4.2-15.1-6.1c-1-0.4-2.2-0.2-3.3-0.2c-1.7,0.1-3.4,0.3-5.1,0.4c-2.3,0.2-3.9-0.5-4.3-3.1 C872.1-94.3,870.1-95.1,867.8-95.4L867.8-95.4z M878-118.2c-0.1-3.7-2.9-6.7-6.3-6.5c-3.1,0.1-6.4,3.4-6.4,6.4 c0,3.4,3.2,6.5,6.7,6.4C875.5-111.9,878.1-114.6,878-118.2z" }), /* @__PURE__ */ P.createElement("path", { d: "M1092.1-112.5c3.7,0,7.3,0,11,0c7.2,0,14.3,0,21.5,0c3.6,0,7.7,5.7,5.8,8.6c-1.4,2.2-4,4.2-6.5,5c-4.3,1.4-4.4,1-6.6,4.9 c-3-0.3-5,1.1-6.5,4c-0.9,1.8-3,3.1-4.9,4.1c-5.3,2.8-7.8,10.9-5.1,17.4c2,4.9,4,9.9,5.6,14.9c1.1,3.5,0.9,7.3-1,10.6 c-0.5,0.8-1.7,1.6-2.6,1.6c-1.2,0.1-2.5-0.2-3.2-1.9c-0.8-1.9-2.5-3.4-3.7-5.1c-1.6-2.6-3.3-5.1-4.5-7.9c-0.6-1.2-0.5-2.9-0.1-4.3 c0.5-2,0.2-3.5-1.4-4.9c-0.8-0.6-1.3-1.6-2-2.4c-2.2-2.9-2.2-2.9-5.4-1.1c-2.5,1.4-3.7,1.3-5.4-1.1c-2.2-2.9-5.2-2.3-8.1-2.2 c-3.7,0.1-7.5,0.2-11.2,0.4c-1.6,0.1-2.8-0.4-3.1-1.9c-0.6-2.5-2.3-2.7-4.4-2.7c-6.3,0-6.4-0.5-3.8-6.3c0.6-1.4,0.8-3.1,0.6-4.6 c-0.5-3.8-0.2-7.2,2.1-10.7c2.5-3.8,3.9-8.4,6.1-12.5c1.4-2.7,2.2-6.1,5.9-6.9c0.1,0,0.2-0.1,0.3-0.2c2.5-5,7.8-3.6,11.8-5.2 c0.6-0.3,1.4-0.3,1.8-0.7c1.9-1.8,3.8-3.6,5.7-5.4c1.1-1.1,2.4-0.9,3.3,0.2c1.5,1.9,3.4,2.6,5.7,2c1.9-0.4,2.6,1,3.3,2.3 c1,2.1,2,4.3,3.1,6.7c-1.3,1.2-2.8,2.6-4.3,4C1091.9-113.1,1092-112.8,1092.1-112.5z M1093.3-87.9c3.8,0.1,6.6-2.5,6.8-6.1 c0.1-3.1-3.3-6.7-6.4-6.8c-3.1,0-6.5,3.5-6.5,6.7C1087.1-90.3,1089.4-88,1093.3-87.9z" }), /* @__PURE__ */ P.createElement("path", { d: "M890-189.7c2.1-0.7,3.2,0.2,3.9,2c0.4,0.9,1,1.8,1.5,2.7c2.6,4.5,4.6,5,9.2,2.2c0.3-0.2,0.6-0.2,1.6-0.6 c0.7,1.6,1.8,3.1,1.9,4.8c0.3,4.7,0.1,9.3,0.1,14c0,2.3-1.2,2.9-3.2,2.9c-5.9,0-11.8,0-17.7,0c-14.9,0-29.8,0-44.7,0 c-5.4,0-7.4-2.4-6.3-7.9c0.3-1.7,1.2-3.2,1.4-4.9c1.6-9.2,2.3-18.5-0.3-27.7c-0.4-1.4-1.1-2.7-1.5-4.1c-0.4-1.5-0.5-3.1-0.8-4.8 c3.5,0.4,6.2,0.8,9.2,1.2c-0.3-1.6-0.9-2.9-0.6-3.8c0.7-1.9,1.5-3.4,4.3-3.3c9.7,0.3,19.3,0.1,29,0.1c4.4,0,4.5,0.1,4.5,4.4 c0,4.4,1.4,8.1,4.8,11.1c1.3,1.2,2.5,2.6,3.6,4c0.4,0.5,0.5,1.4,0.5,2.2C890.3-193.6,890.1-191.8,890-189.7z M859.1-184.3 c3.5,0.1,6.4-2.8,6.5-6.5c0.1-3.2-3-6.3-6.4-6.3c-3.5,0-6.3,2.7-6.4,6.2C852.7-187.3,855.4-184.4,859.1-184.3z" }), /* @__PURE__ */ P.createElement("path", { d: "M1148.2-153.8c-2.2,2.4-3.1,5.3,0,7.9c-4.1,4.1-3.8,4-2.1,9.9c0.5,1.8-0.4,4.2-1.1,6.1c-1.1,2.9-2.6,5.6-4.3,9.2 c-12.6,0-26.3,0-39.9,0c-0.1-0.3-0.1-0.6-0.2-0.9c2.2-1.8,4.5-3.7,6.8-5.5c0-0.2,0.1-0.4,0.1-0.6c-0.6-1.8-2.2-4.2-1.6-5.3 c1.7-3,4.1-5.7,6.6-8c1.3-1.2,2.6-2.2,2.8-4c0.4-3.6,0.9-7.2,1.1-10.8c0.3-4.1,2.5-5.7,6.4-4.2c0.9,0.3,2,0.3,3,0.3 c4.2,0,8.4,0.3,12.6-0.1C1143.1-160.1,1146.4-158.7,1148.2-153.8z M1121.3-142.6c-0.1,3.7,2.6,6.6,6.2,6.8c3.1,0.1,6.7-3.3,6.7-6.4 c0-3.5-2.7-6.3-6.2-6.4C1123.9-148.8,1121.3-146.5,1121.3-142.6z" }), /* @__PURE__ */ P.createElement("path", { d: "M697.2,39.4c1.3-2,2.2-0.8,2.4,0.5c0.3,1.6,0.1,3.3,0.1,5.3c-3.5,0.1-6.7-1.1-10,0.1c-3.2,1.1-6.7,1-10.5,1.5 c0.5-3.8,1.2-7.6,1.6-11.5c0.3-2.6,0.3-5.2,0.3-7.8c0-3.3-0.2-6.6-0.2-9.9c0-2,1.2-2.7,3.1-2.8c2.2-0.2,4.5-0.5,6.7-1 c3.9-0.8,5.4-3.7,6.4-7.1c1.3-4.1,2.9-8.1,5.5-10.9c2.2,0.1,4-0.2,5.4,0.4c1.4,0.6,2.4,2.1,3.4,3.4c0.4,0.5,0.3,1.6,0.2,2.3 c-0.5,4.6,0.7,8.6,3.1,12.5c1.4,2.3,1,4-1.3,5.2c-4.2,2.2-7.4,6.6-12.8,6.6c-0.4,0-0.8,0.4-1.2,0.6C696.3,29.1,695,36.2,697.2,39.4 L697.2,39.4z M693.2,27.7c3.8,0,6.7-2.7,6.6-6.3c-0.1-3.6-3-6.5-6.5-6.5c-3.1-0.1-6.8,3.5-6.8,6.5C686.5,24.9,689.5,27.7,693.2,27.7 z M698.2,42.9c-0.1-0.1-0.3-0.1-0.4-0.1c0,0.1,0,0.2,0.1,0.2C698,43,698.1,43,698.2,42.9z" }), /* @__PURE__ */ P.createElement("path", { d: "M817.2-217c-1.4,0.1-2.8,0.3-4.6,0.5c1.2-3.7,2.2-7,3.3-10.4c0.4,0.3,0.2,0.1,0,0c-1.4-0.4-2.9-0.7-4.3-1 c0.8-1.1,1.6-2.3,2.5-3.4c0.5-0.6,1-1.2,1.6-2c-2.3-2.2-1.3-3.9,0.8-5.6c1.1-0.9,1.5-2.6,2.5-3.6c2.6-2.4,5-5.3,9.2-5 c1.8,0.1,3.8-0.8,5.6-1.2c2.9-0.7,3.7-0.2,3.9,2.8c0.4,4.3,0.6,8.6,1.2,12.9c0.4,2.9,2.1,3.8,4.9,2.9c0.2-0.1,0.4-0.2,0.6-0.3 c1.4-0.2,8,4.8,8,6.2c0,0.8-0.7,2-1.4,2.3c-0.8,0.4-2.3,0.5-3,0.1c-1.3-0.8-2.4-2.1-3.6-3.1c-2-1.9-4.3-3.1-7.1-2 c-3.5,1.4-7.2,2.4-8.1,7.2c-0.4,2.4-2.8,4.4-4.4,6.6c-0.7,1-1.6,1.9-2.5,2.8c-0.4,0.4-0.7,1-1.1,1.1c-2.8,0.9-4.5,3.3-6.6,5.1 c-3.5,3.2-7.4,6-11.1,8.9c-0.4,0.3-0.9,0.4-1.7,0.2c1.4-3.1,4.9-3.7,7.1-5.9c2.4-2.3,4.6-5,6.8-7.6c2.1-2.4,4.1-5,6.2-7.5 C820-216.3,818.6-216.7,817.2-217L817.2-217z" }), /* @__PURE__ */ P.createElement("path", { d: "M1160.2-159.9c3-1,5.6-1.8,8.2-2.7c0.9,1.3,0.6,2.4-0.8,3c-1.8,0.9-3.6,2-5.6,2.4c-2.6,0.6-3.9,1.7-4.3,4.4 c-0.6,3.4-1.9,5-5,7.6c-4.9-3.8-4.9-4.5-0.5-9.4c-1.4-2.2-1.5-4.4-0.5-7c1-2.7-0.8-4.9-3.9-4.9c-5.2-0.1-10.5,0-15.7-0.1 c-0.9,0-1.8,0.1-2.7-0.1c-0.8-0.2-2.1-0.5-2.2-1.1c-0.2-0.8,0-2.2,0.6-2.7c1.7-1.6,3.4-2.9,2.9-5.7c-0.1-0.5,1.5-1.7,2.5-1.8 c1.6-0.3,3.4-0.2,5.1,0.1c2.4,0.5,4.5,0.2,6.2-1.6c-0.4-4.8,4.4-10.4,9.3-11c0.2,0,0.5,0,0.7,0c7.2-0.4,6.6-0.4,7.4,6.7 C1162.6-175.9,1160.7-168.4,1160.2-159.9z M1159.5-176.2c0-3.6-2.5-6.4-6-6.5c-3.6-0.1-6.8,2.9-6.9,6.5c-0.1,3.3,2.8,6.2,6.3,6.3 C1156.6-169.8,1159.4-172.6,1159.5-176.2z" }), /* @__PURE__ */ P.createElement("path", { d: "M680.1,64.9c4.5-1.6,8-0.9,11.5,0c0.4,0.1,1.1,0.8,1,1.1c-0.1,0.6-0.5,1.3-1,1.6c-2.8,1.7-6,2.2-9.1,1.5 C681.5,68.8,681,66.6,680.1,64.9z" }), /* @__PURE__ */ P.createElement("path", { d: "M839.7-93.2c-2.3-3.7-2.9-6.7-0.6-10.1c0.6,0.3,1.2,0.5,1.5,0.8c1.4,1.5,4,3.4,3.8,4.6C844.1-96.1,841.5-94.8,839.7-93.2z" }), /* @__PURE__ */ P.createElement("path", { d: "M834.3-105c-1.1-0.9-2.3-1.7-3.6-2.8c2.6-1.4,6.7-0.5,7.5,1.4c0.2,0.5-0.2,1.5-0.7,1.9C836.4-103.5,835.2-103.8,834.3-105 L834.3-105z" }), /* @__PURE__ */ P.createElement("path", { d: "M830.3-109.8c-1.1,0.6-1.9,1.3-2.2,1.1c-0.7-0.4-1.4-1.2-1.7-1.9c-0.1-0.3,0.8-1,1.3-1.6 C828.4-111.5,829.2-110.8,830.3-109.8z" }), /* @__PURE__ */ P.createElement("path", { d: "M821.8-114.3c-1,0.7-1.6,1.4-2.2,1.4c-0.5-0.1-0.9-0.9-1.4-1.4c0.5-0.5,1-1.2,1.6-1.3C820.3-115.7,820.8-114.9,821.8-114.3z " }), /* @__PURE__ */ P.createElement("path", { d: "M808.8-223.3c1-0.1,1.9-0.2,2.9-0.3c0,0.4,0.1,0.8,0.1,1.2c-1,0.1-1.9,0.2-2.9,0.3C808.9-222.6,808.8-223,808.8-223.3z" }), /* @__PURE__ */ P.createElement("path", { d: "M817.2-113.4c-0.7,0.7-1.5,1.4-2.2,2c-0.2-0.2-0.5-0.4-0.7-0.7c0.7-0.8,1.3-1.5,2-2.3C816.6-114,816.9-113.7,817.2-113.4z" }), /* @__PURE__ */ P.createElement("path", { d: "M867.8-95.4c0.2,0.6,0.3,1.2,0.5,1.8c-0.2,0.1-0.3,0.3-0.5,0.4c-0.5-0.4-1-0.8-1.5-1.2C866.8-94.8,867.3-95.1,867.8-95.4 L867.8-95.4z" }), /* @__PURE__ */ P.createElement("path", { d: "M867.4-90.1c-0.4-0.5-0.8-1-1.3-1.5c0.2-0.2,0.4-0.4,0.6-0.6c0.5,0.4,1,0.9,1.4,1.3C867.9-90.6,867.7-90.4,867.4-90.1z" }), /* @__PURE__ */ P.createElement("path", { d: "M808.7-215.6c-0.4,0.1-0.7,0.3-0.9,0.3c-0.1,0-0.4-0.4-0.4-0.4c0.1-0.2,0.4-0.5,0.5-0.5C808.1-216.3,808.3-216,808.7-215.6z " }), /* @__PURE__ */ P.createElement("path", { d: "M810.7-210.2c0.2,0.1,0.3,0.2,0.5,0.4c-0.2,0.2-0.3,0.4-0.5,0.5c-0.1-0.2-0.3-0.3-0.3-0.5 C810.3-209.9,810.5-210.1,810.7-210.2z" }), /* @__PURE__ */ P.createElement("path", { d: "M678.1,67.1c0.2,0.1,0.4,0.2,0.5,0.3c-0.1,0.1-0.2,0.3-0.4,0.4c0,0-0.3-0.1-0.3-0.1C678,67.5,678.1,67.3,678.1,67.1z" }), /* @__PURE__ */ P.createElement("path", { d: "M861.6-93.6c0.1,0,0.2,0.1,0.3,0.1c0,0.1-0.1,0.2-0.1,0.3c-0.1,0-0.2-0.1-0.3-0.1C861.4-93.4,861.5-93.5,861.6-93.6z" }), /* @__PURE__ */ P.createElement("path", { d: "M864.6-94.7c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.1-0.2-0.1-0.3c0.1,0,0.2-0.1,0.3-0.1C864.5-94.9,864.5-94.8,864.6-94.7z" }), /* @__PURE__ */ P.createElement("path", { d: "M843.9-122.8C843.8-122.6,843.7-122.4,843.9-122.8C843.7-122.4,843.8-122.6,843.9-122.8L843.9-122.8z" }), /* @__PURE__ */ P.createElement("path", { d: "M1016.1-140.4c-0.2-1.6-0.5-3.2-0.8-5.2c1.2,0,2.3,0,4,0c-1,2-1.8,3.7-2.5,5.3C1016.5-140.3,1016.3-140.4,1016.1-140.4z" }), /* @__PURE__ */ P.createElement("path", { d: "M990.2-82.3c-1.3,1.2-2.1,2.6-3.1,2.7c-1.7,0.2-2.6-1.2-2.4-2.9c0.2-1.6,0.8-3.2,2.6-2.9C988.3-85.2,989-83.7,990.2-82.3z" }), /* @__PURE__ */ P.createElement("path", { d: "M946.5-178.3c0,1.6-0.7,2.7-2.3,2.6c-1.8-0.1-2-1.6-1.9-3c0-1.4,0.1-2.9,1.9-3C946.5-181.8,946.3-179.9,946.5-178.3z" }), /* @__PURE__ */ P.createElement("path", { d: "M1069.2-149.9c1.5-1.5,2.4-2.4,3.3-3.3c0.7,1.3,1.6,2.7,1.8,4.1c0.1,0.6-1.6,2.1-2.1,1.9 C1071.3-147.5,1070.5-148.6,1069.2-149.9z" }), /* @__PURE__ */ P.createElement("path", { d: "M875-118.5c-1.5,1.5-2.3,3.1-3.3,3.2c-2.3,0.2-1.8-2.1-2.1-3.5c-0.3-1.4,0.4-2.7,1.9-2.5C872.6-121,873.4-119.7,875-118.5z" }), /* @__PURE__ */ P.createElement("path", { d: "M1091.3-93.9c0.9-1.1,1.9-2.2,3.1-3.7c1,2.2,1.9,3.9,0.5,5.4c-0.4,0.5-2.2-0.4-3.4-0.6C1091.5-93.1,1091.4-93.5,1091.3-93.9 z" }), /* @__PURE__ */ P.createElement("path", { d: "M857.9-191c1.5-1.3,2.3-2.5,3.4-2.8c0.4-0.1,1.9,1.4,2.1,2.3c0.3,1.6-0.4,3.4-2.3,3.3C860.2-188.2,859.4-189.7,857.9-191z  M861.6-191.1c-0.3-0.3-0.5-0.4-0.7-0.6c-0.1,0.2-0.4,0.3-0.3,0.5c0,0.3,0.2,0.5,0.4,0.8C861.1-190.6,861.3-190.8,861.6-191.1z" }), /* @__PURE__ */ P.createElement("path", { d: "M857.1-188.2c-0.5-0.9-0.9-1.3-0.9-1.6c0-1.2,0-2.5,0.1-3.8c0,0,1.1-0.1,1.1,0c0.3,1.3,0.5,2.5,0.5,3.8 C858.1-189.5,857.7-189.1,857.1-188.2z" }), /* @__PURE__ */ P.createElement("path", { d: "M1126.7-142.6c-0.2-0.9-0.4-1.8-0.4-2.7c0-0.2,1.5-0.7,1.7-0.4c0.6,0.6,1.1,1.5,1.3,2.4c0.2,0.7,0.2,1.9-0.2,2.2 c-0.7,0.5-2.1,1-2.8,0.7C1125.2-141,1125.4-142,1126.7-142.6c0.2,0.2,0.5,0.3,0.8,0.5C1127.2-142.3,1127-142.4,1126.7-142.6z" }), /* @__PURE__ */ P.createElement("path", { d: "M693,24c-0.4-1.3-1-2.6-1.2-4c-0.1-0.4,0.7-1.2,1.1-1.4c0.4-0.1,1.3,0.6,1.4,0.9c0.1,1.4-0.1,2.9-0.2,4.3 C693.7,23.9,693.3,23.9,693,24z" }), /* @__PURE__ */ P.createElement("path", { d: "M669.4,46.3c-1.3-0.4-3.2-0.7-3.2-1.1c-0.1-1.7-0.1-3.6,0.6-5c0.6-1.1,2.6-0.1,2.8,1.5C669.7,42.9,669.5,44.3,669.4,46.3z" }), /* @__PURE__ */ P.createElement("g", null, /* @__PURE__ */ P.createElement("g", null, /* @__PURE__ */ P.createElement("path", { d: "M61.7,77.2c0,3.3,0.1,3.4,3.6,3.4c9.3,0,18.6,0,27.9,0c5.2,0,10.5,0,15.7,0c1.7,0,2.8-0.5,2.8-2.3c0-5.8,0-11.5,0-17.3 c0-1.4-0.6-2.1-2.1-2.1c-1.2,0-2.5-0.1-3.7,0c-1.9,0.1-2.8-0.6-2.7-2.5c0.1-1.5,0-3.1,0-4.6c0.1-2.4,0.3-2.6,2.8-2.6 c5.8,0,11.7-0.1,17.5,0c2.2,0,4.3,0.3,6.5,0.8c1.3,0.3,2.5,1.1,4.2,1.8c0-1.2,0-1.9,0-2.5c0.1-3.2,0.2-6.3,0.4-9.5 c0.2-3.2-1.5-6.3-0.6-9.5c0.1-0.2-0.1-0.5-0.1-0.8c-0.8-3.8-1.6-7.5-2.3-11.3c-0.1-0.4-0.1-0.9-0.1-1.3c0-1,0.1-1.8,0-2.4 l-78.2,0.1c0,0.1-0.1,0.3-0.1,0.5c0.1,0.5,0.1,1.1,0.1,2c0,0.8,0.1,1.6,0.2,2.4c0.5,1.8,1.4,3.5,2.7,5.1c0.4,0.5,0.8,0.9,1.2,1.4 c0.8,0.8,1.6,1.6,2.3,2.5c0.3,0.4,0.4,1.1,0.4,1.6c0,1.3-0.2,2.7-0.3,4.2c0,0,0,0.1,0.1,0.1c1.6-0.5,2.4,0.2,2.9,1.6 c0,0,0,0,0,0.1c0.1,0.1,0.2,0.2,0.3,0.4c0.9,1.1,1.7,2.4,2.4,3.6c0.1,0.1,0.2,0.2,0.2,0.4c1.3,1,2.8,0.7,5.2-0.7 c0.2-0.1,0.5-0.2,1.2-0.4c0.1,0.3,0.3,0.7,0.5,1c0.1,0,0.1,0,0.2,0c0.1,0.4,0.3,0.8,0.4,1.2c0.2,0.5,0.3,0.9,0.4,1.4 c0,0.2,0,0.3,0,0.5c0.4,2.9,0.1,5.7,0.1,8.4c0,0.1,0,0.1,0,0.2c0,0.5,0,0.9,0,1.4c0,1.7-0.9,2.2-2.5,2.2c-3.2,0-6.4,0-9.6,0 c0,0.2,0,0.5,0,0.8C61.6,63.3,61.7,70.3,61.7,77.2z" }), /* @__PURE__ */ P.createElement("path", { d: "M180.3,79.4c0.9,0.5,4.3-1,4.7-2.1c0.7-1.8,1.9-2.2,3.9-2.1c1.8,0,3.8-0.6,5.3-1.6c1.9-1.2,3.4-3.1,5.4-4.9 c1.8,3.4,5.4,2,8,3.4c0.2,0.1,0.6,0,0.7-0.2c2.2-2.4,5-4.6,6.5-7.5c1.3-2.6,1.3-6,1.7-9c0-0.2,0-0.3,0-0.5l-3.2,1.6l-3.3,1.1 l-3.2,0.2l-1.9-1.4l1-1.7l0.5-0.5l0.6-1.7l1.2-0.7l1.5-2.6l-1.6-2.1l-0.3-3.3l-2.1-0.6l-2.7,1.9l1-2.2l1.6-2.2l-0.6-2.1l-0.5-2.4 l-2.5-1l-2.2-1.9l-2.7,1.1l0.2,2.1l-1.6,1.9l-1.3-0.6l-2.4,2.7v3.2l0.3,3.2l1.4,2.2l-0.2,4.8l-3,2.9l-2.2,0.2l-1.1-3.3l-1.1-2.4 l0.5-3.2l-0.5-3.2l1.1-2.1l0.6-2.1l1.1-3.5l-2.5,2.9l1.4-4.9l2.2-1.9l2.7-0.2l2.1-1h3.3h2.7l1.7-0.5l2.1,0.3l-1.3-1l-1.6-1 l-1.8-1.3l-1.8,0.6l-1.7-1.3l-4.1,0.2l-2.2,1.4l-1.7-1.1l-2.1-1.3l-3-0.2l3-4.3l-3.5,1.6l-2.9,2.2l-2.9,1.6l-2.5,0.3l-0.3-1.6 l-5.2,1.1l4.4-3.8l3.1-2.3l3.8-3l-1.6-0.2l-5.2,0.2l-2.4-0.5l-2.1-0.4l-2.1-1.5l-2.4,0.2l-4.5-1.1l-1.2-1.4l-0.6-2.2l-1.1-1 l0.1,1.2l-1.1,1.7l-8.1,0c0,0.3,0,0.6,0.1,1c0.2,2.4,0.8,4.7,1.3,7.1c1,4.7,0.4,9.5,1.5,14.2c0.5,1.9,0.1,3.9,0.1,5.9 c0,3.2,0.1,3.3,3.4,3.3c5.1,0,10.2,0,15.3,0.1c0.9,0,2.5,0.6,2.6,1.1c0.2,2.2,1.8,3.5,3,5c0.7,0.9,1,1.6,0.8,2.3 c0.5,1.4-0.1,2.5-2,3.7c-0.3,0.2-0.8,0.3-0.9,0.6c-0.7,2.1-2,4.4-1.9,6.5c0,0.1,0,0.2,0.1,0.3c1.1,1.7,2.4,3.2,3.7,4.8 c0.2,0.2,0.4,0.5,0.6,0.7c0.1,0.1,0.2,0.3,0.3,0.4c0,0.1,0,0.1,0,0.2c0.1,0.4,0.1,0.9,0,1.4c-0.1,0.4,0,0.8,0.2,1.3 c0.3,0.4,0.8,0.9,1.6,1.7c0.1,0.1,0.2,0.2,0.3,0.3c0.9,1,1.4,2.2,1.9,3.4C180,79.2,180.2,79.4,180.3,79.4z" }), /* @__PURE__ */ P.createElement("path", { d: "M36.7,51.3c-1.9,0-3.7,0-5.6,0c-0.7,0-1.4-0.1-1.9-0.2l0,0.2C31.7,51.3,34.2,51.3,36.7,51.3z" }), /* @__PURE__ */ P.createElement("path", { d: "M71.6,92.4c0-2.7-0.4-5-3.1-5c-4.6,0-9.3,0-13.9,0c-3.3,0-3.4-1.1-3.4-4.5c0-6.9,0-10.9,0-17.7c0-3.2-0.2-3.4-3.3-3.4 c-2.5,0-4.9,0-7.4,0c-7.2,0-14.4,0-21.6,0c-2.5,0-5,0-7.5,0l0.4,2.1l0.5,2.7l-0.6,3.7l0.5,2.5l1.1,2.5l1,3.2l0.8,2.1l3.3,2.7 l1.6-0.2l2.2,0.3l-2.4,0.6l0.6,1.1l-2.1,0.3l1.9,2.1l1.9,2.1l-0.6,1.7L24,95l2.7,2.2L27,100l2.2,1.1l3,1l2.4,2.1l2.1,1.3l2.2,1.7 l1.3,1l1.4,3.2l8.1-0.2l15.9,5.6h6c0-0.1,0-0.2,0-0.3C71.7,108.4,71.7,100.4,71.6,92.4z" }), /* @__PURE__ */ P.createElement("path", { d: "M199,90.2c-0.1-0.2,2.6-1.2,2.5-1.5c1.3-1.2,2.5-2.3,3.6-3.3c-0.9-2-0.4-0.8-1.2-2.5c-0.5-1.1-1.1-2.3-2.7-1.9 c-2,0.4-3.5-0.1-4.8-1.7c-0.8-0.9-1.8-1.1-2.7-0.2c-1.6,1.5-3.2,3-4.8,4.4c-0.4,0.3-1,0.4-1.5,0.6c-3.3,1.4-7.8,0.2-9.9,4.3 c0,0.1-0.1,0.1-0.2,0.1c-3.1,0.7-3.7,3.5-4.9,5.7c-1.8,3.3-3,7.1-5.1,10.2c-1.9,2.8-2.2,5.6-1.7,8.8c0.2,1.2,0,2.6-0.5,3.8 c-0.3,0.6-0.5,1.1-0.7,1.5c2.1,0.1,4,0.2,5.7,0.3c0.3,0.5,1.6,2.1,3.2,4.1l0.4,0.4l4.6-0.6l0.6,0.8h3.2l1.7-0.5l2.5-0.2l2.4,1 l1.4-0.2l1.4,2.1l2.9,0.2l1.6-1.3h1.6l3.2,2.7l1.7,1.9l0.5,2.5l-0.3,3.2l1.1,3.3l3,3.8l1.7,3.7l0.6,1.4l3.2-0.6l0.8-3.5v-5.2 l-1.6-4.3l-0.5-1.1l-0.3-3.2l-2.7-3.2l-0.5-3.8l0.2-3.2l1.3-3.5l2.4-1.9l-0.2-1.4l2.9-0.5l4.1-4.6l1.9-1.6l2.1,0.3l1.9-3.7 l2.7-1.4c0,0,2.1,0.3,2.2-0.5c0.2-0.8,2.2-4.6,2.2-4.6l-2.2-1.3l1.3-1.1l0.3-0.8l-0.8-2c-7.1-0.1-17-0.1-21.5-0.1 C205.1,90.2,202,90.2,199,90.2z" }), /* @__PURE__ */ P.createElement("polygon", { points: "202.6,31.5 203.4,29.3 200.7,29.6 199,29.4 197.7,28.5 198.7,30.1  " }), /* @__PURE__ */ P.createElement("path", { d: "M43.3,51.3c4.5,0,9.1,0,13.6,0c1.6,0,2.5-0.5,2.5-2.2c0-3.5,0.1-7.1-0.1-10.6c-0.1-1.2-0.9-2.4-1.4-3.6 c-0.7,0.2-1,0.3-1.2,0.4c-3.5,2.1-5,1.7-7.1-1.7c-0.4-0.7-0.9-1.3-1.1-2c-0.5-1.4-1.4-2.1-3-1.5c0.1-1.6,0.3-2.9,0.3-4.3 c0-0.6-0.1-1.2-0.4-1.6c-0.8-1.1-1.8-2.1-2.8-3c-2.6-2.3-3.7-5.1-3.7-8.4c0-1.2,0-2-0.2-2.5l-23.4,0l-0.6,0.9l0.3,2.1l1.6,3.3 l-0.8,3.5L14,17.9l-1.1-2.5l-2.5-0.5l-4-0.5H5.3l0.6,2.2l2.2,3.2V23l0.6,3.5l2.9,0.3l1.1,1.6l-3.5-0.5l-1.1,0.8L8.6,32L8,35.7 l0.2,4.3L7,42.8l-1.3,4.1l1,2.9L7,51.2c0.6,0.1,1.2,0.2,1.9,0.2C20.4,51.3,31.8,51.3,43.3,51.3z" }), /* @__PURE__ */ P.createElement("path", { d: "M260.5,59.5l-2.5,0.2l-2.4,0.6l-1.1,0.6l-0.2-1.1l0.8-1l0.4-0.1l-0.4-21.1l-5.2,0l-3.3,3.1l-2.1,1.3l-1,2.7l-0.5,1.4 l-2.4,1.6h-2.4l-1.7-0.8l-2.2,0.3l-2.9,1l0.2,1.4l-0.2,2.5l-1.4,1.3l-0.8,0.2c2.8,0.1,5.5,0.2,8.3-0.1c3.5-0.3,6,0.8,7.3,4.7 c-1.6,1.9-2.3,4.1,0,6.2c-1.2,2.3-1.8,3.7-1.9,5.3l0.6-0.5l0.6,4l0.5,1.9l1.1,1.7l-0.3,2.9l1.7-3.5l1.1-2.7l0.2-1.6l-1.6-1.9 l-0.2-0.8l0.5-0.5l2.5,1.6l0.8-1.9l1.7-1.7l0.3-1.9l-0.3-2.2l0.2-1.1l0.3-1.6l1.3,1.7h0.6l1.9-0.3l1.9-0.2l2.5-0.8L260.5,59.5z" }), /* @__PURE__ */ P.createElement("path", { d: "M239.1,62.7c-1.3-3.8-3.8-5-7.3-4.7c-2.7,0.2-5.5,0.1-8.3,0.1l-2,0.5l-1.2,0.6c0,0.2,0,0.3,0,0.5c-0.4,3-0.4,6.4-1.7,9 c-1.5,2.8-4.3,5-6.5,7.5c-0.1,0.2-0.6,0.3-0.7,0.2c-0.6-0.3-1.2-0.5-1.9-0.6c-0.4,0.4-0.7,0.9-1,1.4c0.6,0.1,1.2,0,1.8-0.1 c1.6-0.4,2.2,0.8,2.7,1.9c0.8,1.7,0.3,0.5,1.2,2.5c-1.1,1-2.4,2.2-3.6,3.3c0.1,0.2-2.6,1.2-2.5,1.5c3.1,0,6.1,0,9.2,0 c4.5,0,14.4,0.1,21.5,0.1l-0.5-1.2l-1.3-1.4l1.6-1.7l-1.3-1.6l-0.3-3.2l-0.2-2.7l0.4-0.3c0.1-1.6,0.7-3.1,1.9-5.3 C236.8,66.8,237.5,64.6,239.1,62.7z" }), /* @__PURE__ */ P.createElement("path", { d: "M36.3,98.1c-0.1,0-0.2,0.1-0.2,0.1c0,0-0.1-0.1-0.1-0.2c0.1,0,0.2-0.1,0.2-0.1C36.3,97.9,36.3,98,36.3,98.1z" }), /* @__PURE__ */ P.createElement("polygon", { points: "167.1,81.7 167.1,81.7 167.1,81.7  " }), /* @__PURE__ */ P.createElement("path", { d: "M121.4,79.8c0,3.3,0.2,4.6-0.7,5.2c0.4,0,0.8,0,1.3,0c0.4,0,0.7,0,1.1,0c2.7,0,4.1,0.1,4.8-0.2l21.6,0c0,0,0,0,0,0.1 c0.9,0.1,1.7,0.4,2.1,1.6c0.2,0.5,1.4,0.9,2.2,0.9c3.2,0.1,6.3,0,9.5,0c1.8,0,3.6,0,5.3,0c0.6,2.4,1.2,2.8,2.6,2.4 c1.5-0.5,3.7-4.3,3.1-5.7c-0.7-1.8-1.3-3.7-3.2-4.9c-0.6-0.4-1.1-1.6-1-2.3c0.3-1.5-0.3-2.2-1.4-3.2c-1.4-1.3-3.2-3.1-3.3-4.7 c-0.2-2.1,1.1-4.3,1.9-6.5c0.1-0.2,0.6-0.4,0.9-0.6c2.7-1.7,2.8-3.1,0.8-5.7c-0.9-1.2-2-2.5-2.3-3.8c-0.4-1.6-1.2-2.2-2.7-2.2 c-6,0-12.1,0-18.1,0c-1.3,0-2.2,0.3-2.3,1.8c0,0.4-0.1,0.8-0.3,1.1c0,0.4,0,0.3,0,1.4c-1.6-0.7-2.8-0.6-4.2-0.9 c-0.4-0.1-0.8-0.2-1.2-0.2c-0.1,0-0.2,0-0.4,0c-7.3-0.2-14.6-0.4-21.9-0.5c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6,0 c-0.9,0.1-1.4,0.8-1.4,1.9c0,1.4,0,0.8,0,2.2c0,4.1-0.2,5.3,1.5,5.7c0.2,0,0.3,0,0.5,0c1.2-0.1,2.5,0,3.7,0c0.9,0,1.5,0.3,1.8,0.8 c0.8,0.8,0.9,2.3,0.9,3.9C121.4,71.6,121.4,75.7,121.4,79.8z" }), /* @__PURE__ */ P.createElement("path", { d: "M156.3,120.6c0.2-0.8,0.3-1.3,0.5-1.6c1.5-2.1,1.2-5.3,0.7-7.9c-0.4-2.2-0.1-4.5,1.5-6.6c1.5-2,2.4-4.5,3.6-6.8 c0.7-1.3,0.2-2-1.1-2.3c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0.1-1.8-1.1-2.1-2.6-2.1c-4.4,0-8.8-0.1-13.2,0c-0.4,0-0.8,0-1.2-0.1 c-1.2-0.3-1.8-1.1-1.8-2.6c-0.3,0-0.7,0-1,0c-2.1,0-4.2,0-6.3,0c0,0.1,0,0.2,0,0.3l-21.6,0c0.1,0,0.1-0.1,0.2-0.1 c-8.9,0-17.7,0-26.6,0c-2.8,0-3.3,0.3-3.3,2.8c0,7.7,0,15.5,0,23.2c0,0.3,0.1,1.6,0.2,3h6.6l-0.3-1.3h6.3l2.5,1.4l1.4,1.4l3.7,2.5 l1.3,4.6l3.7,1.9l1.6,0.7c0.4-0.2,0.8-0.4,1.2-0.4l2.4-3l4,0.5l1.6,1.3l4.3,7l1.4,1.7l1.1,4l8.4,3.3l-0.3-2.9l-0.3-4l2.7-3.2 l-0.5-1l2.7-2.2l1.4,0.8l2.4-2.7l1.4-1.9h2.1l4.6-1l3.3,1.4h2.5l1-1.1l1.1,0.8l0.2,1.4l3.3,1.1l3.2-0.5l2.7,0.2l-2.2-1.7l-0.2-1 l1.4-0.8c-0.2-0.3-0.5-0.5-0.7-0.8h-1.6l-2.5,0.3l1.6-1.4l0.8-1c0,0-2.5-3.2-2.8-3.6C161,120.8,158.8,120.7,156.3,120.6z" }), /* @__PURE__ */ P.createElement("path", { d: "M263.1,51.1l1.7-0.5l1.4-1l3.3,0.8c0,0,1.4,0.8,1.6,0.3c0.2-0.5,0.6-1.7,0.6-1.7l-1.1-1.3l-0.5-1.9l0.3-3.2l0.3-2.5 l1.4-1.9l0.3-0.8l1,0.5l3-3.3h1.1l2.5-0.3l0.8-1.6h2.2l1.9-1.6l-0.7-0.9l-0.9-2.1l-1-0.7l0.4-5.3l-0.5-4.8l-2.9-0.9l-2.5,0.9 l-1.3-0.2l-5.5,12.8l-2.5,0.2l-1.1,1l-8.2,0l0.4,21.1l1.6-0.4L263.1,51.1z" })))), lu = !0, su = {
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
}, cu = "pinkpurple", uu = {
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
}, du = {
  numberOfItems: 3,
  position: "side",
  title: "Legend Title",
  description: "Legend Text",
  type: "equalnumber",
  specialClasses: [
    "N/A"
  ],
  separateZero: !0
}, pu = [
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
], hu = {
  defaultData: lu,
  general: su,
  color: cu,
  columns: uu,
  legend: du,
  data: pu
}, gu = {
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
}, fu = "map", mu = "qualitative4", yu = {
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
}, Cu = {
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
}, Su = [], bu = {
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
}, vu = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0,
  opacity: 90
}, ku = {
  editorErrorMessage: []
}, Lu = {
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
}, wu = {
  coordinates: [
    0,
    30
  ],
  zoom: 1
}, Tu = {
  layers: [],
  patterns: [
    {
      dataKey: "State",
      pattern: "circles",
      dataValue: "GU"
    }
  ]
}, Nu = {
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
}, Mu = "Filter Change", Eu = [
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
], xu = "undefined.csv", Pu = "file", Du = {
  horizontal: !0
}, Au = "us", Ru = "darkGray", Ou = "theme-blue", Iu = !0, $u = !0, zu = !0, _u = !1, Uu = !1, Fu = !1, Gu = "Territories", Bu = "en", Wu = !1, ju = !0, Vu = !1, Hu = {
  title: "Data Table",
  forceDisplay: !0
}, qu = 4.23, Ku = {
  general: gu,
  type: fu,
  color: mu,
  columns: yu,
  legend: Cu,
  filters: Su,
  table: bu,
  tooltips: vu,
  runtime: ku,
  visual: Lu,
  mapPosition: wu,
  map: Tu,
  hexMap: Nu,
  filterBehavior: Mu,
  data: Eu,
  dataFileName: xu,
  dataFileSourceType: Pu,
  dataDescription: Du,
  geoType: Au,
  geoBorderColor: Ru,
  headerColor: Ou,
  showTitle: Iu,
  showSidebar: $u,
  showDownloadButton: zu,
  showDownloadMediaButton: _u,
  displayAsHex: Uu,
  displayStateLabels: Fu,
  territoriesLabel: Gu,
  language: Bu,
  hasRegions: Wu,
  expandDataTable: ju,
  fullBorder: Vu,
  dataTable: Hu,
  validated: qu
}, Zu = {
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
}, Yu = {
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
}, Xu = "map", Ju = "pinkpurple", Qu = {
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
}, ed = {
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
}, td = [], nd = {
  title: "Data Table",
  forceDisplay: !0
}, ad = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0
}, id = {
  editorErrorMessage: []
}, rd = {
  minBubbleSize: 1,
  maxBubbleSize: 20,
  extraBubbleBorder: !1,
  cityStyle: "circle"
}, od = {
  coordinates: [
    0,
    30
  ],
  zoom: 1
}, ld = [
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
], sd = {
  general: Zu,
  map: Yu,
  type: Xu,
  color: Ju,
  columns: Qu,
  legend: ed,
  filters: td,
  dataTable: nd,
  tooltips: ad,
  runtime: id,
  visual: rd,
  mapPosition: od,
  data: ld
};
function io(e, t, n, a) {
  const [i, o] = P.useState([]), s = P.useId(), [c, r] = P.useState([]), [g, u] = P.useState([]);
  P.useEffect(() => {
    p();
  }, [e.map.layers]), P.useEffect(() => {
    n && y();
  }, [i]);
  const p = async () => {
    try {
      const k = await S();
      o(k);
    } catch (k) {
      console.error("Error fetching GeoJSON layers:", k);
    }
  }, d = (k, f) => {
    k.preventDefault();
    const T = ne.cloneDeep(e), L = T.map.layers.filter((M, x) => x !== f);
    T.map.layers = L, t(T);
  }, h = (k) => {
    k.preventDefault();
    const f = {
      name: "New Custom Layer",
      url: ""
    }, T = ne.cloneDeep(e);
    T.map.layers.unshift(f), t(T);
  }, m = (k, f, T) => {
    k.preventDefault();
    let L = k.target.value;
    T === "fillOpacity" && (L = L / 100);
    let M = ne.cloneDeep(e.map.layers);
    ne.set(M, `[${f}][${T}]`, L), t({ ...e, map: { ...e.map, layers: M } });
  }, S = async () => {
    let k = [];
    if (e.map.layers) {
      for (const f of e.map.layers) {
        let T = await fetch(f.url).then((L) => L.json()).catch((L) => console.warn("error with newLayer item", L));
        T || (T = []), k.push(T);
      }
      return k;
    }
  }, y = () => {
    if (i.length === 0 || !i)
      return;
    let k = [], f = [];
    i == null || i.map((T, L) => {
      if (T.length === 0)
        return null;
      let M = T.objects[e.map.layers[L].namespace];
      if (!M)
        return null;
      Mt(T, M).features.forEach((R) => {
        let z = ["custom-map-layer", `custom-map-layer--${R.properties.name.replace(" ", "-")}`];
        f.push(R), k.push(
          /* @__PURE__ */ l(
            na,
            {
              className: z.join(" "),
              children: /* @__PURE__ */ l(
                "path",
                {
                  d: n(R),
                  fill: e.map.layers[L].fill ? e.map.layers[L].fill : R.properties.fill ? R.properties.fill : "transparent",
                  fillOpacity: e.map.layers[L].fillOpacity ? e.map.layers[L].fillOpacity : R.properties["fill-opacity"] ? R.properties["fill-opacity"] : "1",
                  "data-id": s,
                  stroke: e.map.layers[L].stroke ? e.map.layers[L].stroke : R.properties.stroke ? R.properties.stroke : "transparent",
                  strokeWidth: e.map.layers[L].strokeWidth ? e.map.layers[L].strokeWidth : R.properties["stroke-width"],
                  "data-tooltip-id": `tooltip__${a}`,
                  "data-tooltip-html": e.map.layers[L].tooltip ? e.map.layers[L].tooltip : ""
                },
                s
              )
            },
            `customMapLayer-${R.properties.name.replace(" ", "-")}-${L}`
          )
        );
      });
    }), r(k), u(f);
  }, w = () => null;
  return w.handleRemoveLayer = d, w.handleAddLayer = h, w.handleMapLayer = m, { pathArray: c, featureArray: g, MapLayerHandlers: w };
}
const cd = ["Arrow Up", "Arrow Down", "Arrow Right", "Arrow Left", "None"], ud = "<", dd = ">", pd = "<=", hd = ">=", gd = "=", fd = "≠", md = (e) => {
  var s;
  const { columnsOptions: t } = e, { config: n, setConfig: a } = P.useContext(fe), i = (c, r, g, u) => {
    a({
      ...n,
      hexMap: {
        ...n.hexMap,
        shapeGroups: n.hexMap.shapeGroups.map((p, d) => d === g ? {
          ...p,
          items: p.items.map((h, m) => u === m ? {
            ...h,
            [c]: r
          } : h)
        } : p)
      }
    });
  }, o = (c, r) => {
    a({
      ...n,
      hexMap: {
        ...n.hexMap,
        shapeGroups: n.hexMap.shapeGroups.map((g, u) => u === c ? {
          ...g,
          items: g.items.filter((p, d) => d !== r)
        } : g)
      }
    });
  };
  return n.general.displayAsHex && n.hexMap.type === "shapes" && /* @__PURE__ */ E(re, { children: [
    /* @__PURE__ */ l("fieldset", { className: "edit-block", children: n.hexMap.shapeGroups && /* @__PURE__ */ l(re, { children: /* @__PURE__ */ l(ta, { allowZeroExpanded: !0, children: /* @__PURE__ */ l("ul", { style: { listStyle: "none" }, children: (s = n.hexMap.shapeGroups) == null ? void 0 : s.map((c, r) => /* @__PURE__ */ E(Be, { children: [
      /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(je, { children: `Legend Shape Group ${r + 1}` }) }),
      /* @__PURE__ */ E(Ve, { children: [
        /* @__PURE__ */ E("label", { children: [
          /* @__PURE__ */ l("span", { className: "edit-label column-heading", children: "Legend Title" }),
          /* @__PURE__ */ l(
            "input",
            {
              type: "text",
              value: c.legendTitle || "",
              onChange: (g) => {
                const u = ne.cloneDeep(n);
                u.hexMap.shapeGroups[r].legendTitle = g.target.value, a(u);
              }
            }
          )
        ] }),
        /* @__PURE__ */ E("label", { children: [
          /* @__PURE__ */ l("span", { className: "edit-label column-heading", children: "Legend Description" }),
          /* @__PURE__ */ l(
            "input",
            {
              type: "text",
              value: c.legendDescription || "",
              onChange: (g) => {
                const u = ne.clone(n);
                u.hexMap.shapeGroups[r].legendDescription = g.target.value, a(u);
              }
            }
          )
        ] }),
        c.items.map((g, u) => /* @__PURE__ */ l(ta, { allowZeroExpanded: !0, style: { marginTop: u === 0 ? "15px" : "initial" }, children: /* @__PURE__ */ E(Be, { children: [
          /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(je, { children: `Shape Condition ${u + 1}` }) }),
          /* @__PURE__ */ l(Ve, { children: /* @__PURE__ */ E(re, { children: [
            /* @__PURE__ */ E("label", { children: [
              /* @__PURE__ */ l("span", { className: "edit-label column-heading", children: "Shape Column" }),
              /* @__PURE__ */ l(
                "select",
                {
                  value: n.hexMap.shapeGroups[r].items[u].shape ? n.hexMap.shapeGroups[r].items[u].shape : "select",
                  onChange: (p) => {
                    i("shape", p.target.value, r, u);
                  },
                  children: cd.map((p) => /* @__PURE__ */ l("option", { value: p, children: p }))
                }
              )
            ] }),
            /* @__PURE__ */ E("div", { className: "cove-input-group", children: [
              /* @__PURE__ */ l("label", { className: "", children: /* @__PURE__ */ l("span", { className: "edit-label cove-input__label", children: "Column Conditional" }) }),
              /* @__PURE__ */ E("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", children: [
                /* @__PURE__ */ l("div", { className: "cove-accordion__panel-col cove-input", children: /* @__PURE__ */ l(
                  "select",
                  {
                    value: n.hexMap.shapeGroups[r].key === "" ? "Select" : n.hexMap.shapeGroups[r].key,
                    className: "cove-input",
                    onChange: (p) => i("key", p.target.value, r, u),
                    children: t
                  }
                ) }),
                /* @__PURE__ */ l("div", { className: "cove-accordion__panel-col cove-input", children: /* @__PURE__ */ E(
                  "select",
                  {
                    value: n.hexMap.shapeGroups[r].items[u].operator || "-SELECT-",
                    initial: "Select",
                    className: "cove-input",
                    onChange: (p) => i("operator", p.target.value, r, u),
                    children: [
                      [gd].map((p) => /* @__PURE__ */ l("option", { value: p, children: p })),
                      [fd].map((p) => /* @__PURE__ */ l("option", { value: p, children: p })),
                      [ud].map((p) => /* @__PURE__ */ l("option", { value: p, children: p })),
                      [dd].map((p) => /* @__PURE__ */ l("option", { value: p, children: p })),
                      [pd].map((p) => /* @__PURE__ */ l("option", { value: p, children: p })),
                      [hd].map((p) => /* @__PURE__ */ l("option", { value: p, children: p }))
                    ]
                  }
                ) }),
                /* @__PURE__ */ l("div", { className: "cove-accordion__panel-col cove-input", children: /* @__PURE__ */ l(
                  "input",
                  {
                    type: "text",
                    value: n.hexMap.shapeGroups[r].items[u].value || "",
                    className: "cove-input",
                    style: { height: "100%" },
                    onChange: (p) => i("value", p.target.value, r, u)
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ l(
              "button",
              {
                className: "cove-button cove-button--warn",
                style: {
                  background: "none",
                  border: "1px solid red",
                  color: "red",
                  marginTop: "15px"
                },
                onClick: (p) => o(r, u),
                children: "Remove Shape Conditional"
              }
            )
          ] }) })
        ] }) })),
        /* @__PURE__ */ E("div", { style: { display: "flex", justifyContent: "flex-end", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ l(
            "button",
            {
              className: "cove-button",
              style: { marginTop: "15px" },
              onClick: () => {
                const g = ne.cloneDeep(n);
                ne.set(
                  g,
                  "hexMap.shapeGroups",
                  ne.map(g.hexMap.shapeGroups, (u, p) => p === r ? {
                    ...u,
                    items: [
                      ...u.items,
                      {
                        key: "",
                        shape: "Arrow Up",
                        column: "",
                        operator: "=",
                        value: ""
                      }
                    ]
                  } : u)
                ), a(g);
              },
              children: "Add Shape Condition"
            }
          ),
          /* @__PURE__ */ l(
            "button",
            {
              className: "cove-button cove-button--warn",
              style: { background: "none", border: "1px solid red", color: "red", marginTop: "15px" },
              onClick: (g, u) => {
                let p = [
                  ...n.hexMap.shapeGroups.slice(0, r),
                  ...n.hexMap.shapeGroups.slice(r + 1)
                ];
                a({
                  ...n,
                  hexMap: {
                    ...n.hexMap,
                    shapeGroups: p
                  }
                });
              },
              children: "Remove Shape Group"
            }
          )
        ] })
      ] })
    ] })) }) }) }) }),
    /* @__PURE__ */ l("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ l(
      "button",
      {
        className: "cove-button",
        style: { marginTop: "15px" },
        onClick: (c) => {
          let r = n.hexMap.shapeGroups;
          r.push({
            legendTitle: "",
            legendDescription: "",
            items: [{ key: "", shape: "Arrow Up", column: "", operator: "=", value: "" }]
          }), r.legendTitle = "", r.legendDescription = "", a({
            ...n,
            hexMap: {
              ...n.hexMap,
              shapeGroups: r
            }
          });
        },
        children: "Add Shape Group"
      }
    ) })
  ] });
}, $s = () => props.children;
$s.ShapeColumns = md;
const ro = (e) => {
  var s, c, r, g, u;
  if (!e)
    return null;
  const t = ((s = e.geo) == null ? void 0 : s.name) || null, n = ((c = e.primary) == null ? void 0 : c.name) || null, a = ((r = e.latitude) == null ? void 0 : r.name) || null, i = ((g = e.longitude) == null ? void 0 : g.name) || null, o = ((u = e.categorical) == null ? void 0 : u.name) || null;
  return { geoColumnName: t, primaryColumnName: n, latitudeColumnName: a, longitudeColumnName: i, categoricalColumnName: o };
}, yd = () => {
  const { config: e } = P.useContext(fe), t = P.useContext(it);
  return { columnsRequiredChecker: () => {
    const { primaryColumnName: a, geoColumnName: i } = ro(e.columns);
    let o = [];
    i || o.push("Geography"), e.general.type !== "navigation" && a === "" && o.push("Primary"), e.general.type === "navigation" && e.columns.navigate.name === "" && o.push("Navigation"), (e.general.type === "us-geocode" || e.general.type === "world-geocode") && e.columns.latitude.name === "" && o.push("Latitude"), (e.general.type === "us-geocode" || e.general.type === "world-geocode") && e.columns.longitude.name === "" && o.push("Longitude"), o.length === 0 && (o = null), t({ type: "SET_REQUIRED_COLUMNS", payload: o });
  } };
};
const Cd = ({ datasets: e }) => {
  var Te, Oe, Fe, Xe;
  const {
    setParentConfig: t,
    isDashboard: n,
    isEditor: a,
    loadConfig: i,
    runtimeFilters: o,
    runtimeLegend: s,
    setConfig: c,
    config: r,
    tooltipId: g,
    runtimeData: u,
    setRuntimeData: p
  } = P.useContext(fe), { columnsRequiredChecker: d } = yd(), h = P.useContext(it), { general: m, columns: S, legend: y, table: w, tooltips: k } = r, f = (Te = r == null ? void 0 : r.data) != null && Te[0] ? Object.keys(r.data[0]) : [], [T, L] = P.useState(!1), [M, x] = P.useState(!0), [R, z] = P.useState([0, 0]), {
    MapLayerHandlers: { handleMapLayer: F, handleAddLayer: I, handleRemoveLayer: $ }
  } = io(r, c, !1, g), U = (v, D) => {
    var ee;
    let q = Re(), [Y] = q.splice(v, 1);
    q.splice(D, 0, Y), (ee = r.legend.categoryValuesOrder) == null || ee.forEach((ye) => {
      q.indexOf(ye) === -1 && q.push(ye);
    }), c({
      ...r,
      legend: {
        ...r.legend,
        categoryValuesOrder: q
      }
    });
  };
  let b = [];
  y.specialClasses && y.specialClasses.length && typeof y.specialClasses[0] == "string" ? (y.specialClasses.forEach((v) => {
    b.push({
      key: r.columns.primary && r.columns.primary.name ? r.columns.primary.name : f[0],
      value: v,
      label: v
    });
  }), c({
    ...r,
    legend: {
      ...r.legend,
      specialClasses: b
    }
  })) : b = y.specialClasses || [];
  const C = y.style === "gradient" && y.subStyle === "linear blocks", N = (v) => {
    switch (v) {
      case "value": {
        const q = ["Circle", "Square", "Triangle", "Diamond", "Star", "Pin"].filter(
          (Y) => String(r.visual.cityStyle).toLocaleLowerCase() !== Y.toLocaleLowerCase()
        );
        return /* @__PURE__ */ E(re, { children: [
          /* @__PURE__ */ l("option", { value: "", children: "- Select Option -" }, "Select Option"),
          q.map((Y, ee) => /* @__PURE__ */ l("option", { value: Y, children: Y }, ee))
        ] });
      }
    }
  }, A = (v, D, q, Y) => {
    switch (v) {
      case "add": {
        const ee = r.visual.additionalCityStyles ? [...r.visual.additionalCityStyles] : [];
        ee.push({ label: "", column: "", value: "", shape: "" }), c({
          ...r,
          visual: {
            ...r.visual,
            additionalCityStyles: ee
          }
        });
        break;
      }
      case "remove": {
        let ee = [];
        r.visual.additionalCityStyles && (ee = [...r.visual.additionalCityStyles]), ee.splice(D, 1), c({
          ...r,
          visual: {
            ...r.visual,
            additionalCityStyles: ee
          }
        });
        break;
      }
      case "update": {
        let ee = [];
        ee = [...r.visual.additionalCityStyles], ee[D][q] = Y, c({
          ...r,
          visual: {
            ...r.visual,
            additionalCityStyles: ee
          }
        });
      }
    }
  }, _ = ({ label: v, fieldName: D, value: q, type: Y = "input", ...ee }) => {
    const [ye, Zt] = P.useState(q), [rt] = Y0(ye, 500);
    return P.useEffect(() => {
      typeof rt == "string" && q !== rt && O("changeLegendDescription", [String(R), rt]);
    }, [rt]), /* @__PURE__ */ l("textarea", { onChange: (Li) => Zt(Li.target.value), ...ee, value: ye });
  }, O = async (v, D) => {
    switch (v) {
      case "hidePrimaryColumnInTooltip":
        c({
          ...r,
          general: {
            ...r.general,
            [v]: D
          }
        });
        break;
      case "geoLabelOverride":
        c({
          ...r,
          general: {
            ...r.general,
            geoLabelOverride: D
          }
        });
        break;
      case "showTitle":
        c({
          ...r,
          general: {
            ...r.general,
            showTitle: D
          }
        });
        break;
      case "expandDataTable":
        c({
          ...r,
          table: {
            ...r.table,
            expanded: D
          }
        });
        break;
      case "sidebarPosition":
        c({
          ...r,
          legend: {
            ...r.legend,
            position: D,
            hideBorder: ne.includes(["top", "bottom"], D)
          }
        });
        break;
      case "legendStyle":
        c({
          ...r,
          legend: {
            ...r.legend,
            style: D
          }
        });
        break;
      case "legendSubStyle":
        c({
          ...r,
          legend: {
            ...r.legend,
            subStyle: D
          }
        });
        break;
      case "legendGroupBy":
        c({
          ...r,
          legend: {
            ...r.legend,
            groupBy: D
          }
        });
        break;
      case "legendTickRotation":
        c({
          ...r,
          legend: {
            ...r.legend,
            tickRotation: D
          }
        });
        break;
      case "legendBorder":
        c({
          ...r,
          legend: {
            ...r.legend,
            hideBorder: D
          }
        });
        break;
      case "handleCityStyle":
        c({
          ...r,
          visual: {
            ...r.visual,
            cityStyle: D
          }
        });
        break;
      case "geoBorderColor":
        c({
          ...r,
          general: {
            ...r.general,
            geoBorderColor: D
          }
        });
        break;
      case "headerColor":
        c({
          ...r,
          general: {
            ...r.general,
            headerColor: D
          }
        });
        break;
      case "navigateColumn":
        c({
          ...r,
          columns: {
            ...r.columns,
            navigate: {
              ...r.columns.navigate,
              name: D
            }
          }
        });
        break;
      case "legendDescription":
        c({
          ...r,
          legend: {
            ...r.legend,
            description: D
          }
        });
        break;
      case "legendNumber":
        c({
          ...r,
          legend: {
            ...r.legend,
            numberOfItems: parseInt(D)
          }
        });
        break;
      case "changeActiveFilterValue":
        const q = D.split(",");
        z(q);
        break;
      case "unifiedLegend":
        c({
          ...r,
          legend: {
            ...r.legend,
            unified: D
          }
        });
        break;
      case "toggleShowFullGeoNameInCSV":
        c({
          ...r,
          table: {
            // setting both bc DataTable new core needs it here
            ...r.table,
            showFullGeoNameInCSV: !r.table.showFullGeoNameInCSV
          }
        });
        break;
      case "toggleDownloadImgButton":
        c({
          ...r,
          general: {
            ...r.general,
            showDownloadImgButton: !r.general.showDownloadImgButton
          }
        });
        break;
      case "toggleDownloadLinkBelow":
        c({
          ...r,
          table: {
            ...r.table,
            showDownloadLinkBelow: !r.table.showDownloadLinkBelow
          }
        });
        break;
      case "toggleDownloadPdfButton":
        c({
          ...r,
          general: {
            ...r.general,
            showDownloadPdfButton: !r.general.showDownloadPdfButton
          }
        });
        break;
      case "editorMapType":
        switch (D) {
          case "us-geocode":
            c({
              ...r,
              general: {
                ...r.general,
                type: D
              }
            });
            break;
          case "world-geocode":
            c({
              ...r,
              general: {
                ...r.general,
                type: D
              }
            });
            break;
          case "data":
            c({
              ...r,
              general: {
                ...r.general,
                showSidebar: !0,
                type: "data"
              }
            });
            break;
          case "navigation":
            c({
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
            c({
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
        if ($a(r, r.columns.geo.name), h({ type: "SET_POSITION", payload: [0, 30] }), T === !0 && D === "world") {
          i(hu);
          break;
        }
        if (T === !0 && D === "us") {
          i(Ku);
          break;
        }
        if (T === !0 && D === "us-county") {
          i(sd);
          break;
        }
        switch (D) {
          case "us":
            c({
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
            c({
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
            c({
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
            c({
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
            c({
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
            c({
              ...r,
              general: {
                ...r.general,
                geoType: "google-map"
              }
            });
        }
        break;
      case "verticalSortedLegend":
        c({
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
        c({
          ...r,
          legend: {
            ...r.legend,
            showSpecialClassesLast: !r.legend.showSpecialClassesLast
          }
        });
        break;
      case "dynamicDescription":
        c({
          ...r,
          editor: {
            ...r.editor,
            activeFilterValueForDescription: D
          },
          legend: {
            ...r.legend,
            dynamicDescription: !r.legend.dynamicDescription
          }
        });
        break;
      case "changeLegendDescription":
        const [Y, ee] = D;
        c({
          ...r,
          legend: {
            ...r.legend,
            descriptions: {
              ...r.legend.descriptions,
              [Y]: [ee]
            }
          }
        });
        break;
      case "appearanceType":
        c({
          ...r,
          tooltips: {
            ...r.tooltips,
            appearanceType: D
          }
        });
        break;
      case "linkLabel":
        c({
          ...r,
          tooltips: {
            ...r.tooltips,
            linkLabel: D
          }
        });
        break;
      case "displayStateLabels":
        c({
          ...r,
          general: {
            ...r.general,
            displayStateLabels: !r.general.displayStateLabels
          }
        });
        break;
      case "capitalizeLabels":
        c({
          ...r,
          tooltips: {
            ...r.tooltips,
            capitalizeLabels: D
          }
        });
        break;
      case "showDataTable":
        c({
          ...r,
          table: {
            ...r.table,
            forceDisplay: D
          }
        });
        break;
      case "limitDataTableHeight":
        c({
          ...r,
          table: {
            ...r.table,
            limitHeight: D
          }
        });
        break;
      case "chooseState":
        let rt = { fipsCode: Object.keys(Wt).find((un) => Wt[un] === D), stateName: D };
        if (c({
          ...r,
          general: {
            ...r.general,
            statePicked: rt
          }
        }), r) {
          const un = generateRuntimeData(r);
          p(un);
        }
        break;
      case "classificationType":
        c({
          ...r,
          legend: {
            ...r.legend,
            type: D
          }
        });
        break;
      case "countyCensusYear":
        c({
          ...r,
          general: {
            ...r.general,
            countyCensusYear: D
          }
        });
        break;
      case "filterControlsCountyYear":
        c({
          ...r,
          general: {
            ...r.general,
            filterControlsCountyYear: D
          }
        });
        break;
      case "filterControlsStatePicked":
        c({
          ...r,
          general: {
            ...r.general,
            filterControlsStatePicked: D
          }
        });
        break;
      case "filterBehavior":
        c({
          ...r,
          filterBehavior: D
        });
        break;
      default:
        console.warn("COVE: Did not recognize editor property.");
        break;
    }
  }, G = async (v, D, q) => {
    let Y;
    switch (D) {
      case "specialClassEdit":
        Y = Array.from(b), Y[q.index][q.prop] = q.value, c({
          ...r,
          legend: {
            ...r.legend,
            specialClasses: Y
          }
        });
        break;
      case "specialClassDelete":
        Y = Array.from(b), Y.splice(q, 1), c({
          ...r,
          legend: {
            ...r.legend,
            specialClasses: Y
          }
        });
        break;
      case "specialClassAdd":
        Y = b, Y.push(q), c({
          ...r,
          legend: {
            ...r.legend,
            specialClasses: Y
          }
        });
        break;
      case "name":
        $a(r, r.columns.geo.name), c({
          ...r,
          columns: {
            ...r.columns,
            [v]: {
              ...r.columns[v],
              [D]: q
            }
          }
        });
        break;
      default:
        c({
          ...r,
          columns: {
            ...r.columns,
            [v]: {
              ...r.columns[v],
              [D]: q
            }
          }
        });
        break;
    }
  }, W = (v) => {
    const D = `additionalColumn${v}`;
    c({
      ...r,
      columns: {
        ...r.columns,
        [D]: {
          label: "New Column",
          dataTable: !1,
          tooltips: !1,
          prefix: "",
          suffix: ""
        }
      }
    });
  }, B = (v) => {
    const D = r.columns;
    delete D[v], c({
      ...r,
      columns: D
    });
  }, j = (v) => {
    var Y, ee;
    const D = ((ee = (Y = r.filters) == null ? void 0 : Y[v == null ? void 0 : v[0]]) == null ? void 0 : ee.label) || "Unlabeled Legend", q = o[v[0]];
    if (q)
      return D + " - " + q.values[v[1]];
  }, H = () => {
    let v = ne.cloneDeep(r);
    delete v[""], v.columns.geo.name && v.columns.primary.name && delete v.newViz;
    let D = ne.cloneDeep(r.legend);
    return delete D.disabledAmt, v.legend = D, delete v.defaultData, v.general = ne.cloneDeep(r.general), r.columns && (v.columns = r.columns), v;
  }, K = r.general.palette.isReversed;
  function X() {
    let v = [], D = [], q = [];
    for (let Y in Ge)
      K || (Y.includes("qualitative") && !Y.endsWith("reverse") && D.push(Y), Y.includes("colorblindsafe") && !Y.endsWith("reverse") && q.push(Y), !Y.includes("qualitative") && !Y.includes("colorblindsafe") && !Y.endsWith("reverse") && v.push(Y)), K && (Y.includes("qualitative") && Y.endsWith("reverse") && D.push(Y), Y.includes("colorblindsafe") && Y.endsWith("reverse") && q.push(Y), !Y.includes("qualitative") && !Y.includes("colorblindsafe") && Y.endsWith("reverse") && v.push(Y));
    return [v, D, q];
  }
  const [J, te, Ce] = X();
  P.useEffect(() => {
    L(r.defaultData), d();
  }, [r]), P.useEffect(() => {
    const v = H();
    a && t && t(v);
  }, [r]);
  const ge = [
    /* @__PURE__ */ l("option", { value: "", children: "- Select Option -" }, "Select Option")
  ];
  f.map((v) => ge.push(
    /* @__PURE__ */ l("option", { value: v, children: v }, v)
  ));
  let Pe = {};
  r.data.forEach((v) => {
    Object.keys(v).forEach((D) => {
      Pe[D] = Pe[D] || [];
      const q = typeof v[D] == "number" ? v[D].toString() : v[D];
      Pe[D].indexOf(q) === -1 && Pe[D].push(q);
    });
  });
  const Ae = Object.keys(r.columns).filter((v) => ["geo", "navigate", "primary", "latitude", "longitude"].includes(v) !== !0), Q = D1(r, c), Ye = () => {
    x(!M), c({
      ...r,
      showEditorPanel: !M
    });
  }, zt = () => {
    let D = Object.entries(Wt).sort((Y, ee) => Y[0].localeCompare(ee[0])), q = [];
    return D.forEach((Y) => {
      q.push(
        /* @__PURE__ */ l("option", { value: Y[1], children: Y[1] }, Y[0])
      );
    }), q;
  }, Ct = [];
  o.length > 0 && o.forEach((v, D) => {
    var q, Y;
    (Y = (q = o[D]) == null ? void 0 : q.values) == null || Y.forEach((ee, ye) => {
      Ct.push([D, ye]);
    });
  });
  let cn = 8;
  const En = (v, D) => ({
    ...D
  }), Re = () => {
    var D;
    let v = ((D = s == null ? void 0 : s.items) == null ? void 0 : D.length) > 0 ? s.items.filter((q) => !q.special).map((q) => q.value) : [];
    return r.legend.cateogryValuesOrder ? v.sort((q, Y) => {
      let ee = r.legend.cateogryValuesOrder.indexOf(q), ye = r.legend.cateogryValuesOrder.indexOf(Y);
      return ee === ye ? 0 : ee === -1 ? 1 : ye === -1 ? -1 : ee - ye;
    }) : v;
  }, Me = () => Re().filter((v) => !(v != null && v.special)).map((v, D) => /* @__PURE__ */ l(f1, { draggableId: `item-${v}`, index: D, children: (q, Y) => /* @__PURE__ */ l("li", { style: { position: "relative" }, children: /* @__PURE__ */ l(
    "div",
    {
      className: Y.isDragging ? "currently-dragging" : "",
      style: En(Y.isDragging, q.draggableProps.style),
      ref: q.innerRef,
      ...q.draggableProps,
      ...q.dragHandleProps,
      children: v
    }
  ) }) }, v)), St = ((Oe = r == null ? void 0 : r.dataKey) == null ? void 0 : Oe.includes("http://")) || ((Fe = r == null ? void 0 : r.dataKey) == null ? void 0 : Fe.includes("https://"));
  return /* @__PURE__ */ l(Ht, { component: "EditorPanel", children: /* @__PURE__ */ E(
    Xi.Sidebar,
    {
      isDashboard: n,
      displayPanel: M,
      title: "Configure Map",
      onBackClick: Ye,
      children: [
        /* @__PURE__ */ l(Ss, { multiline: !0 }),
        /* @__PURE__ */ E(ta, { allowZeroExpanded: !0, children: [
          /* @__PURE__ */ E(Be, { children: [
            " ",
            /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(je, { children: "Type" }) }),
            /* @__PURE__ */ E(Ve, { children: [
              /* @__PURE__ */ E("label", { children: [
                /* @__PURE__ */ l("span", { className: "edit-label column-heading", children: /* @__PURE__ */ l("span", { children: "Geography" }) }),
                /* @__PURE__ */ E("ul", { className: "geo-buttons d-grid", style: { gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }, children: [
                  /* @__PURE__ */ E(
                    "button",
                    {
                      className: `${r.general.geoType === "us" || r.general.geoType === "us-county" ? "active" : ""} full-width`,
                      onClick: (v) => {
                        v.preventDefault(), O("geoType", "us");
                      },
                      children: [
                        /* @__PURE__ */ l(F1, {}),
                        /* @__PURE__ */ l("span", { children: "United States" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ E(
                    "button",
                    {
                      className: `${r.general.geoType === "us-region" ? "active" : ""} full-width`,
                      onClick: (v) => {
                        v.preventDefault(), O("geoType", "us-region");
                      },
                      children: [
                        /* @__PURE__ */ l(ou, {}),
                        /* @__PURE__ */ l("span", { children: "U.S. Region" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ E(
                    "button",
                    {
                      className: `${r.general.geoType === "world" ? "active" : ""} full-width`,
                      onClick: (v) => {
                        v.preventDefault(), O("geoType", "world");
                      },
                      children: [
                        /* @__PURE__ */ l(G1, {}),
                        /* @__PURE__ */ l("span", { children: "World" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ E(
                    "button",
                    {
                      className: `${r.general.geoType === "single-state" ? "active" : ""} full-width`,
                      onClick: (v) => {
                        v.preventDefault(), O("geoType", "single-state");
                      },
                      children: [
                        /* @__PURE__ */ l(B1, {}),
                        /* @__PURE__ */ l("span", { children: "U.S. State" })
                      ]
                    }
                  )
                ] })
              ] }),
              (r.general.geoType === "us" || r.general.geoType === "us-county") && /* @__PURE__ */ l(
                Le,
                {
                  label: "Geography Subtype",
                  value: r.general.geoType,
                  options: [
                    { value: "us", label: "US State-Level" },
                    { value: "us-county", label: "US County-Level" }
                  ],
                  onChange: (v) => {
                    O("geoType", v.target.value);
                  }
                }
              ),
              (r.general.geoType === "us-county" || r.general.geoType === "single-state") && /* @__PURE__ */ l(
                Le,
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
                  onChange: (v) => {
                    O("countyCensusYear", v.target.value);
                  }
                }
              ),
              (r.general.geoType === "us-county" || r.general.geoType === "single-state") && /* @__PURE__ */ l(
                Le,
                {
                  label: "Filter Controlling County Census Year",
                  value: r.general.filterControlsCountyYear || "",
                  options: [
                    { value: "", label: "None" },
                    ...r.filters ? r.filters.map((v) => ({ value: v.columnName, label: v.columnName })) : []
                  ],
                  onChange: (v) => {
                    O("filterControlsCountyYear", v.target.value);
                  }
                }
              ),
              r.general.geoType === "single-state" && u && /* @__PURE__ */ l(
                Le,
                {
                  label: "Filter Controlling State Picked",
                  value: r.general.filterControlsStatePicked || "",
                  options: [
                    { value: "", label: "None" },
                    ...u && (f == null ? void 0 : f.map((v) => ({ value: v, label: v })))
                  ],
                  onChange: (v) => {
                    O("filterControlsStatePicked", v.target.value);
                  }
                }
              ),
              r.general.geoType === "single-state" && /* @__PURE__ */ l(
                Le,
                {
                  label: "State Selector",
                  value: ((Xe = r.general.statePicked) == null ? void 0 : Xe.stateName) || "",
                  options: zt().map((v) => ({
                    value: v.props.value,
                    label: v.props.children
                  })),
                  onChange: (v) => {
                    O("chooseState", v.target.value);
                  }
                }
              ),
              /* @__PURE__ */ l(
                Le,
                {
                  label: /* @__PURE__ */ E(re, { children: [
                    "Map Type",
                    /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: 'Select "Data" to create a color-coded data map. To create a navigation-only map, select "Navigation."' }) })
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
                  onChange: (v) => {
                    O("editorMapType", v.target.value);
                  }
                }
              ),
              (r.general.type === "navigation" || r.general.type === "data") && /* @__PURE__ */ l(
                Le,
                {
                  label: "Navigation Behavior",
                  value: r.general.navigationTarget,
                  options: [
                    { value: "_self", label: "Same Window" },
                    { value: "_blank", label: "New Window" }
                  ],
                  onChange: (v) => {
                    const D = ne.cloneDeep(r);
                    D.general.navigationTarget = v.target.value, c(D);
                  }
                }
              ),
              /* @__PURE__ */ E("label", { children: [
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Data Classification Type" }),
                /* @__PURE__ */ E("div", { children: [
                  /* @__PURE__ */ E("label", { children: [
                    /* @__PURE__ */ l(
                      "input",
                      {
                        type: "radio",
                        name: "equalnumber",
                        value: "equalnumber",
                        checked: r.legend.type === "equalnumber" || r.legend.type === "equalinterval",
                        onChange: (v) => O("classificationType", v.target.value)
                      }
                    ),
                    "Numeric/Quantitative"
                  ] }),
                  /* @__PURE__ */ E("label", { children: [
                    /* @__PURE__ */ l(
                      "input",
                      {
                        type: "radio",
                        name: "category",
                        value: "category",
                        checked: r.legend.type === "category",
                        onChange: (v) => O("classificationType", v.target.value)
                      }
                    ),
                    "Categorical"
                  ] })
                ] })
              ] }),
              m.geoType === "us" && m.type !== "navigation" && m.type !== "bubble" && /* @__PURE__ */ E("label", { className: "checkbox mt-4", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.general.displayAsHex,
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      D.general.displayAsHex = v.target.checked, c(D);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Display As Hex Map" })
              ] }),
              /* @__PURE__ */ E("label", { className: "checkbox mt-4", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.hexMap.type === "shapes",
                    onChange: (v) => {
                      c({
                        ...r,
                        hexMap: {
                          ...r.hexMap,
                          type: v.target.checked ? "shapes" : "standard"
                        }
                      });
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Display Shapes on Hex Map" })
              ] }),
              /* @__PURE__ */ l($s.ShapeColumns, { columnsOptions: ge }),
              r.general.geoType === "us" && r.general.type !== "bubble" && r.general.displayAsHex === !1 && /* @__PURE__ */ l(
                Ei,
                {
                  label: "Show state labels",
                  checked: r.general.displayStateLabels,
                  onChange: (v) => {
                    O("displayStateLabels", v.target.checked);
                  },
                  tooltip: /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Recommended set to display for Section 508 compliance." }) })
                  ] })
                }
              ),
              r.general.geoType === "us" && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: m.territoriesAlwaysShow || !1,
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      D.general.territoriesAlwaysShow = v.target.checked, c(D);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Show All Territories" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ E(Be, { children: [
            " ",
            /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(je, { children: "General" }) }),
            /* @__PURE__ */ E(Ve, { children: [
              /* @__PURE__ */ l(
                Se,
                {
                  value: m.title,
                  "data-testid": "title-input",
                  updateField: Q,
                  section: "general",
                  fieldName: "title",
                  id: "title",
                  label: "Title",
                  placeholder: "Map Title",
                  tooltip: /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Title is required to set the name of the download file but can be hidden using the option below." }) })
                  ] })
                }
              ),
              /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.general.showTitle || !1,
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      D.general.showTitle = v.target.checked, c(D);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Show Title" })
              ] }),
              /* @__PURE__ */ l(
                Se,
                {
                  value: m.superTitle || "",
                  updateField: Q,
                  section: "general",
                  fieldName: "superTitle",
                  label: "Super Title",
                  tooltip: /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Super Title" }) })
                  ] })
                }
              ),
              /* @__PURE__ */ l(
                Se,
                {
                  type: "textarea",
                  value: m.introText,
                  updateField: Q,
                  section: "general",
                  fieldName: "introText",
                  label: "Message",
                  tooltip: /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Intro Text" }) })
                  ] })
                }
              ),
              /* @__PURE__ */ l(
                Se,
                {
                  type: "textarea",
                  value: m.subtext,
                  updateField: Q,
                  section: "general",
                  fieldName: "subtext",
                  label: "Subtext",
                  tooltip: /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub." }) })
                  ] })
                }
              ),
              /* @__PURE__ */ l(
                Se,
                {
                  type: "textarea",
                  value: m.footnotes,
                  updateField: Q,
                  section: "general",
                  fieldName: "footnotes",
                  label: "Footnotes",
                  tooltip: /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Footnotes" }) })
                  ] })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ E(Be, { children: [
            " ",
            /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(je, { children: "Columns" }) }),
            /* @__PURE__ */ E(Ve, { children: [
              /* @__PURE__ */ E("fieldset", { className: "primary-fieldset edit-block", children: [
                /* @__PURE__ */ E("label", { children: [
                  /* @__PURE__ */ E("span", { className: "edit-label column-heading", children: [
                    "Geography",
                    /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Select the source column containing the map location names or, for county-level maps, the FIPS codes." }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ l(
                    Le,
                    {
                      value: r.columns.geo ? r.columns.geo.name : ge[0],
                      options: ge.map((v) => v.key),
                      onChange: (v) => {
                        G("geo", "name", v.target.value), checkConfigurationNeeded(r);
                      }
                    }
                  )
                ] }),
                r.general.type === "us-geocode" && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                  /* @__PURE__ */ l(
                    "input",
                    {
                      type: "checkbox",
                      checked: r.general.convertFipsCodes,
                      onChange: (v) => {
                        c({
                          ...r,
                          general: {
                            ...r.general,
                            convertFipsCodes: v.target.checked
                          }
                        });
                      }
                    }
                  ),
                  /* @__PURE__ */ l("span", { className: "edit-label", children: "Convert FIPS Codes to Geography Name" })
                ] }),
                /* @__PURE__ */ E("label", { className: "checkbox", children: [
                  /* @__PURE__ */ l(
                    "input",
                    {
                      type: "checkbox",
                      checked: r.general.hideGeoColumnInTooltip || !1,
                      onChange: (v) => {
                        const D = ne.cloneDeep(r);
                        D.general.hideGeoColumnInTooltip = v.target.checked, c(D);
                      }
                    }
                  ),
                  /* @__PURE__ */ l("span", { className: "edit-label", children: "Hide Geography Column Name in Tooltip" })
                ] }),
                /* @__PURE__ */ l(
                  Se,
                  {
                    value: r.general.geoLabelOverride,
                    section: "general",
                    fieldName: "geoLabelOverride",
                    label: "Geography Label",
                    className: "edit-label",
                    updateField: Q,
                    tooltip: /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Enter a geography label for use in tooltips." }) })
                    ] })
                  }
                )
              ] }),
              r.general.type !== "navigation" && /* @__PURE__ */ E("fieldset", { className: "primary-fieldset edit-block", children: [
                /* @__PURE__ */ l(
                  Le,
                  {
                    label: "Data Column",
                    value: S.primary.name,
                    options: ge.map((v) => v.key),
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      D.columns.primary.name = v.target.value, D.columns.primary.label = v.target.value, c(D), checkConfigurationNeeded(D);
                    },
                    tooltip: /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Select the source column containing the categorical or numeric values to be mapped." }) })
                    ] })
                  }
                ),
                /* @__PURE__ */ E("label", { className: "checkbox", children: [
                  /* @__PURE__ */ l(
                    "input",
                    {
                      type: "checkbox",
                      checked: r.general.hidePrimaryColumnInTooltip || !1,
                      onChange: (v) => {
                        O("hidePrimaryColumnInTooltip", v.target.checked);
                      }
                    }
                  ),
                  /* @__PURE__ */ l("span", { className: "edit-label", children: "Hide Data Column Name in Tooltip" })
                ] }),
                /* @__PURE__ */ l(
                  Se,
                  {
                    value: S.primary.label,
                    section: "columns",
                    subsection: "primary",
                    fieldName: "label",
                    label: "Data Label",
                    updateField: Q,
                    tooltip: /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Enter a data label for use in tooltips and the data table." }) })
                    ] })
                  }
                ),
                /* @__PURE__ */ E("ul", { className: "column-edit", children: [
                  /* @__PURE__ */ E("li", { className: "three-col", children: [
                    /* @__PURE__ */ l(
                      Se,
                      {
                        value: S.primary.prefix,
                        section: "columns",
                        subsection: "primary",
                        fieldName: "prefix",
                        label: "Prefix",
                        updateField: Q
                      }
                    ),
                    /* @__PURE__ */ l(
                      Se,
                      {
                        value: S.primary.suffix,
                        section: "columns",
                        subsection: "primary",
                        fieldName: "suffix",
                        label: "Suffix",
                        updateField: Q
                      }
                    ),
                    /* @__PURE__ */ l(
                      Se,
                      {
                        type: "number",
                        value: S.primary.roundToPlace,
                        section: "columns",
                        subsection: "primary",
                        fieldName: "roundToPlace",
                        label: "Round",
                        updateField: Q,
                        min: 0
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l("li", { children: /* @__PURE__ */ E("label", { className: "checkbox", children: [
                    /* @__PURE__ */ l(
                      "input",
                      {
                        type: "checkbox",
                        checked: r.columns.primary.useCommas,
                        onChange: (v) => {
                          G("primary", "useCommas", v.target.checked);
                        }
                      }
                    ),
                    /* @__PURE__ */ l("span", { className: "edit-label", children: "Add Commas to Numbers" })
                  ] }) }),
                  /* @__PURE__ */ l("li", { children: /* @__PURE__ */ E("label", { className: "checkbox", children: [
                    /* @__PURE__ */ l(
                      "input",
                      {
                        type: "checkbox",
                        checked: r.columns.primary.dataTable || !1,
                        onChange: (v) => {
                          G("primary", "dataTable", v.target.checked);
                        }
                      }
                    ),
                    /* @__PURE__ */ l("span", { className: "edit-label", children: "Show in Data Table" })
                  ] }) }),
                  /* @__PURE__ */ l("li", { children: /* @__PURE__ */ E("label", { className: "checkbox", children: [
                    /* @__PURE__ */ l(
                      "input",
                      {
                        type: "checkbox",
                        checked: r.columns.primary.tooltip || !1,
                        onChange: (v) => {
                          G("primary", "tooltip", v.target.checked);
                        }
                      }
                    ),
                    /* @__PURE__ */ l("span", { className: "edit-label", children: "Show in Tooltips" })
                  ] }) })
                ] })
              ] }),
              r.general.type === "bubble" && r.legend.type === "category" && /* @__PURE__ */ l("fieldset", { className: "primary-fieldset edit-block", children: /* @__PURE__ */ E("label", { children: [
                /* @__PURE__ */ E("span", { className: "edit-label column-heading", children: [
                  "Category Column",
                  /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Select the source column containing the categorical bubble values to be mapped." }) })
                  ] })
                ] }),
                /* @__PURE__ */ l(
                  "select",
                  {
                    value: r.columns.categorical ? r.columns.categorical.name : ge[0],
                    onChange: (v) => {
                      G("categorical", "name", v.target.value);
                    },
                    children: ge
                  }
                )
              ] }) }),
              /* @__PURE__ */ E(re, { children: [
                /* @__PURE__ */ l(
                  Le,
                  {
                    label: "Latitude Column",
                    value: r.columns.latitude.name,
                    options: ge.map((v) => v.key),
                    onChange: (v) => {
                      G("latitude", "name", v.target.value);
                    }
                  }
                ),
                /* @__PURE__ */ l(
                  Le,
                  {
                    label: "Longitude Column",
                    value: r.columns.longitude.name,
                    options: ge.map((v) => v.key),
                    onChange: (v) => {
                      G("longitude", "name", v.target.value);
                    }
                  }
                )
              ] }),
              r.general.type !== "navigation" && /* @__PURE__ */ E("fieldset", { className: "primary-fieldset edit-block", children: [
                /* @__PURE__ */ l("label", { children: /* @__PURE__ */ E("span", { className: "edit-label", children: [
                  "Special Classes",
                  /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: 'For secondary values such as "NA", the system can automatically color-code them in shades of gray, one shade for each special class.' }) })
                  ] })
                ] }) }),
                r.legend.specialClasses.length === 2 && /* @__PURE__ */ l(
                  Ea,
                  {
                    type: "info",
                    message: "If a third special class is needed you can apply a pattern to set it apart.",
                    showCloseButton: !1
                  }
                ),
                b.map((v, D) => /* @__PURE__ */ E("div", { className: "edit-block", children: [
                  /* @__PURE__ */ l(
                    "button",
                    {
                      className: "remove-column",
                      onClick: (q) => {
                        q.preventDefault(), G("primary", "specialClassDelete", D);
                      },
                      children: "Remove"
                    }
                  ),
                  /* @__PURE__ */ E("p", { children: [
                    "Special Class ",
                    D + 1
                  ] }),
                  /* @__PURE__ */ l(
                    Le,
                    {
                      label: "Data Key",
                      value: v.key,
                      options: ge.map((q) => ({
                        value: q.key,
                        label: q.key
                      })),
                      onChange: (q) => {
                        G("primary", "specialClassEdit", {
                          prop: "key",
                          index: D,
                          value: q.target.value
                        });
                      }
                    }
                  ),
                  /* @__PURE__ */ l(
                    Le,
                    {
                      label: "Value",
                      value: v.value,
                      options: [
                        { value: "", label: "- Select Value -" },
                        ...(Pe[v.key] || []).sort().map((q) => ({ value: q, label: q }))
                      ],
                      onChange: (q) => {
                        G("primary", "specialClassEdit", {
                          prop: "value",
                          index: D,
                          value: q.target.value
                        });
                      }
                    }
                  ),
                  /* @__PURE__ */ E("label", { children: [
                    /* @__PURE__ */ l("span", { className: "edit-label column-heading", children: "Label" }),
                    /* @__PURE__ */ l(
                      "input",
                      {
                        type: "text",
                        value: v.label,
                        onChange: (q) => {
                          G("primary", "specialClassEdit", {
                            prop: "label",
                            index: D,
                            value: q.target.value
                          });
                        }
                      }
                    )
                  ] })
                ] }, `special-class-${D}`)),
                r.legend.specialClasses.length < 2 && /* @__PURE__ */ l(
                  "button",
                  {
                    className: "btn btn-primary full-width",
                    onClick: (v) => {
                      v.preventDefault(), G("primary", "specialClassAdd", {});
                    },
                    children: "Add Special Class"
                  }
                )
              ] }),
              /* @__PURE__ */ E("label", { className: "edit-block navigate column-heading", children: [
                /* @__PURE__ */ E("span", { className: "edit-label column-heading", children: [
                  "Navigation",
                  /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "To provide end users with navigation functionality, select the source column containing the navigation URLs." }) })
                  ] })
                ] }),
                /* @__PURE__ */ l(
                  Le,
                  {
                    value: r.columns.navigate ? r.columns.navigate.name : "",
                    options: ge.map((v) => v.key),
                    onChange: (v) => {
                      G("navigate", "name", v.target.value);
                    }
                  }
                )
              ] }),
              r.general.type !== "navigation" && /* @__PURE__ */ E("fieldset", { className: "primary-fieldset edit-block", children: [
                /* @__PURE__ */ l("label", { children: /* @__PURE__ */ E("span", { className: "edit-label", children: [
                  "Additional Columns",
                  /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "You can specify additional columns to display in tooltips and / or the supporting data table." }) })
                  ] })
                ] }) }),
                Ae.map((v) => /* @__PURE__ */ E("fieldset", { className: "edit-block", children: [
                  /* @__PURE__ */ l(
                    "button",
                    {
                      className: "remove-column",
                      onClick: (D) => {
                        D.preventDefault(), B(v);
                      },
                      children: "Remove"
                    }
                  ),
                  /* @__PURE__ */ l(
                    Le,
                    {
                      label: "Column",
                      value: r.columns[v] ? r.columns[v].name : "",
                      options: ge.map((D) => ({
                        value: D.props.value,
                        label: D.props.children
                      })),
                      onChange: (D) => {
                        G(v, "name", D.target.value);
                      }
                    }
                  ),
                  /* @__PURE__ */ l(
                    Se,
                    {
                      value: S[v].label,
                      section: "columns",
                      subsection: v,
                      fieldName: "label",
                      label: "Label",
                      updateField: Q
                    }
                  ),
                  /* @__PURE__ */ E("ul", { className: "column-edit", children: [
                    /* @__PURE__ */ E("li", { className: "three-col", children: [
                      /* @__PURE__ */ l(
                        Se,
                        {
                          value: S[v].prefix,
                          section: "columns",
                          subsection: v,
                          fieldName: "prefix",
                          label: "Prefix",
                          updateField: Q
                        }
                      ),
                      /* @__PURE__ */ l(
                        Se,
                        {
                          value: S[v].suffix,
                          section: "columns",
                          subsection: v,
                          fieldName: "suffix",
                          label: "Suffix",
                          updateField: Q
                        }
                      ),
                      /* @__PURE__ */ l(
                        Se,
                        {
                          type: "number",
                          value: S[v].roundToPlace,
                          section: "columns",
                          subsection: v,
                          fieldName: "roundToPlace",
                          label: "Round",
                          updateField: Q
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l("li", { children: /* @__PURE__ */ E("label", { className: "checkbox", children: [
                      /* @__PURE__ */ l(
                        "input",
                        {
                          type: "checkbox",
                          checked: r.columns[v].useCommas,
                          onChange: (D) => {
                            G(v, "useCommas", D.target.checked);
                          }
                        }
                      ),
                      /* @__PURE__ */ l("span", { className: "edit-label", children: "Add Commas to Numbers" })
                    ] }) }),
                    /* @__PURE__ */ l("li", { children: /* @__PURE__ */ E("label", { className: "checkbox", children: [
                      /* @__PURE__ */ l(
                        "input",
                        {
                          type: "checkbox",
                          checked: r.columns[v].dataTable,
                          onChange: (D) => {
                            G(v, "dataTable", D.target.checked);
                          }
                        }
                      ),
                      /* @__PURE__ */ l("span", { className: "edit-label", children: "Show in Data Table" })
                    ] }) }),
                    /* @__PURE__ */ l("li", { children: /* @__PURE__ */ E("label", { className: "checkbox", children: [
                      /* @__PURE__ */ l(
                        "input",
                        {
                          type: "checkbox",
                          checked: r.columns[v].tooltip,
                          onChange: (D) => {
                            G(v, "tooltip", D.target.checked);
                          }
                        }
                      ),
                      /* @__PURE__ */ l("span", { className: "edit-label", children: "Show in Tooltips" })
                    ] }) })
                  ] })
                ] }, v)),
                /* @__PURE__ */ l(
                  "button",
                  {
                    className: "btn btn-primary full-width",
                    onClick: (v) => {
                      v.preventDefault(), W(Ae.length + 1);
                    },
                    children: "Add Column"
                  }
                )
              ] }),
              r.legend.type === "category" && /* @__PURE__ */ E("fieldset", { className: "primary-fieldset edit-block", children: [
                /* @__PURE__ */ l("label", { children: /* @__PURE__ */ E("span", { className: "edit-label", children: [
                  "Additional Category",
                  /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "You can provide additional categories to ensure they appear in the legend" }) })
                  ] })
                ] }) }),
                r.legend.additionalCategories && r.legend.additionalCategories.map((v, D) => /* @__PURE__ */ E("fieldset", { className: "edit-block", children: [
                  /* @__PURE__ */ l(
                    "button",
                    {
                      className: "remove-column",
                      onClick: (q) => {
                        q.preventDefault();
                        const Y = [...r.legend.additionalCategories];
                        Y.splice(D, 1), Q("legend", null, "additionalCategories", Y);
                      },
                      children: "Remove"
                    }
                  ),
                  /* @__PURE__ */ E("label", { children: [
                    /* @__PURE__ */ l("span", { className: "edit-label column-heading", children: "Category" }),
                    /* @__PURE__ */ l(
                      Se,
                      {
                        value: v,
                        section: "legend",
                        subsection: null,
                        fieldName: "additionalCategories",
                        updateField: (q, Y, ee, ye) => {
                          const Zt = [...r.legend.additionalCategories];
                          Zt[D] = ye, Q(q, Y, ee, Zt);
                        }
                      }
                    )
                  ] })
                ] }, v)),
                /* @__PURE__ */ l(
                  "button",
                  {
                    className: "btn btn-primary full-width",
                    onClick: (v) => {
                      v.preventDefault();
                      const D = [...r.legend.additionalCategories || []];
                      D.push(""), Q("legend", null, "additionalCategories", D);
                    },
                    children: "Add Category"
                  }
                )
              ] })
            ] })
          ] }),
          " ",
          r.general.type !== "navigation" && /* @__PURE__ */ E(Be, { children: [
            " ",
            /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(je, { children: "Legend" }) }),
            /* @__PURE__ */ E(Ve, { children: [
              (r.legend.type === "equalnumber" || r.legend.type === "equalinterval") && /* @__PURE__ */ l(
                Le,
                {
                  label: "Legend Type",
                  value: y.type,
                  options: [
                    { value: "equalnumber", label: "Equal Number (Quantiles)" },
                    { value: "equalinterval", label: "Equal Interval" }
                  ],
                  onChange: (v) => {
                    let D = +typeof r.data[0][r.columns.primary.name], q = r.data[0][r.columns.primary.name], Y = [];
                    q || Y.push(
                      `There appears to be values missing for data in the primary column ${r.columns.primary.name}`
                    ), D === "string" && isNaN(D) && value !== "category" ? Y.push(
                      "Error with legend. Primary columns that are text must use a categorical legend type. Try changing the legend type to DEV-12345categorical."
                    ) : Y = [];
                    const ee = ne.cloneDeep(r);
                    ee.general.equalNumberOptIn = !0, ee.legend.type = v.target.value, ee.runtime.editorErrorMessage = Y, c(ee);
                  }
                }
              ),
              r.general.type !== "navigation" && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.general.showSidebar || !1,
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      D.general.showSidebar = v.target.checked, c(D);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Show Legend" })
              ] }),
              r.general.type !== "navigation" && /* @__PURE__ */ E(re, { children: [
                /* @__PURE__ */ l(
                  Le,
                  {
                    label: "Legend Position",
                    value: y.position || "",
                    options: [
                      { value: "side", label: "Side" },
                      { value: "bottom", label: "Bottom" },
                      { value: "top", label: "Top" }
                    ],
                    onChange: (v) => {
                      O("sidebarPosition", v.target.value);
                    }
                  }
                ),
                (r.legend.position === "side" || !r.legend.position) && r.legend.style === "gradient" && /* @__PURE__ */ l("span", { style: { color: "red", fontSize: "14px" }, children: "Position must be set to top or bottom to use gradient style." })
              ] }),
              r.general.type !== "navigation" && /* @__PURE__ */ l(
                Le,
                {
                  label: /* @__PURE__ */ E(re, { children: [
                    "Legend Style",
                    /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(
                        de,
                        {
                          display: "question",
                          style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                        }
                      ) }),
                      /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "If using gradient style, limit the legend to five items for better mobile visibility, and position the legend at the top or bottom." }) })
                    ] })
                  ] }),
                  value: y.style || "",
                  options: [
                    { value: "circles", label: "circles" },
                    { value: "boxes", label: "boxes" },
                    ...y.position !== "side" ? [{ value: "gradient", label: "gradient" }] : []
                  ],
                  onChange: (v) => {
                    O("legendStyle", v.target.value);
                  }
                }
              ),
              r.general.type !== "navigation" && r.legend.style === "gradient" && /* @__PURE__ */ E("label", { children: [
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Gradient Style" }),
                /* @__PURE__ */ E(
                  "select",
                  {
                    value: y.subStyle || "",
                    onChange: (v) => {
                      O("legendSubStyle", v.target.value);
                    },
                    children: [
                      /* @__PURE__ */ l("option", { value: "linear blocks", children: "linear blocks" }),
                      /* @__PURE__ */ l("option", { value: "smooth", children: "smooth" })
                    ]
                  }
                )
              ] }),
              C && /* @__PURE__ */ l(
                Se,
                {
                  value: y.separators,
                  updateField: Q,
                  section: "legend",
                  fieldName: "separators",
                  label: "Legend Separators",
                  placeholder: "ex: 1,4",
                  tooltip: /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Separators between legend items represented by the legend item numbers separated by commas." }) })
                  ] })
                }
              ),
              r.general.type !== "navigation" && r.legend.style === "gradient" && /* @__PURE__ */ E("label", { children: [
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Tick Rotation (Degrees)" }),
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "number",
                    className: "number-narrow",
                    value: y.tickRotation || "",
                    onChange: (v) => {
                      O("legendTickRotation", v.target.value);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: y.hideBorder,
                    onChange: (v) => {
                      O("legendBorder", v.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label column-heading", children: "Hide Legend Box" }),
                /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                  /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(
                    de,
                    {
                      display: "question",
                      style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                    }
                  ) }),
                  /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: " Default option for top and bottom legends is ‘No Box.’" }) })
                ] })
              ] }),
              y.position === "side" && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: y.singleColumn,
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      D.legend.singleColumn = !v.target.checked, D.legend.singleRow = !1, D.legend.verticalSorted = !1, c(D);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Single Column Legend" })
              ] }),
              y.position !== "side" && y.style !== "gradient" && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: y.singleRow,
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      D.legend.singleRow = !v.target.checked, D.legend.singleColumn = !1, D.legend.verticalSorted = !1, c(D);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Single Row Legend" })
              ] }),
              r.general.type !== "navigation" && r.legend.type === "category" && /* @__PURE__ */ l(
                Le,
                {
                  label: "Legend Group By :",
                  value: y.groupBy || "",
                  options: ge.map((v) => v.key),
                  onChange: (v) => {
                    const D = ne.cloneDeep(r);
                    D.legend.groupBy = v.target.value, c(D);
                  }
                }
              ),
              r.legend.style !== "gradient" && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: y.verticalSorted,
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      D.legend.verticalSorted = v.target.checked, c(D);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Vertical sorted legend" })
              ] }),
              /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: y.showSpecialClassesLast,
                    onChange: (v) => {
                      O("legendShowSpecialClassesLast", v.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Show Special Classes Last" })
              ] }),
              y.type !== "category" && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: y.separateZero || !1,
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      return D.legend.separateZero = v.target.checked, c(D);
                    }
                  }
                ),
                /* @__PURE__ */ E("span", { className: "edit-label column-heading", children: [
                  "Separate Zero",
                  /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(
                      de,
                      {
                        display: "question",
                        style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                      }
                    ) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "For numeric data, you can separate the zero value as its own data class." }) })
                  ] })
                ] })
              ] }),
              y.type !== "category" && /* @__PURE__ */ l(
                Le,
                {
                  label: /* @__PURE__ */ E(re, { children: [
                    "Number of Items",
                    /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "For numeric maps, select the number of data classes. Do not include designated special classes." }) })
                    ] })
                  ] }),
                  value: y.numberOfItems,
                  options: [...Array(cn).keys()].map((v) => ({
                    value: v + 1,
                    label: v + 1
                  })),
                  onChange: (v) => {
                    O("legendNumber", v.target.value);
                  }
                }
              ),
              y.type === "category" && /* @__PURE__ */ E(ie.Fragment, { children: [
                /* @__PURE__ */ l("label", { children: /* @__PURE__ */ E("span", { className: "edit-label", children: [
                  "Category Order",
                  /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Drag map categories into preferred legend order. " }) })
                  ] })
                ] }) }),
                /* @__PURE__ */ l(
                  u1,
                  {
                    onDragEnd: ({ source: v, destination: D }) => U(v.index, D.index),
                    children: /* @__PURE__ */ l(d1, { droppableId: "category_order", children: (v) => /* @__PURE__ */ E("ul", { ...v.droppableProps, className: "sort-list", ref: v.innerRef, children: [
                      /* @__PURE__ */ l(Me, {}),
                      v.placeholder
                    ] }) })
                  }
                ),
                s && s.length >= 10 && /* @__PURE__ */ l("section", { className: "error-box my-2", children: /* @__PURE__ */ E("div", { children: [
                  /* @__PURE__ */ l("strong", { className: "pt-1", children: "Warning" }),
                  /* @__PURE__ */ l("p", { children: "The maximum number of categorical legend items is 10. If your data has more than 10 categories your map will not display properly." })
                ] }) })
              ] }),
              /* @__PURE__ */ l(
                Se,
                {
                  value: y.title,
                  updateField: Q,
                  section: "legend",
                  fieldName: "title",
                  label: "Legend Title",
                  placeholder: "Legend Title"
                }
              ),
              y.dynamicDescription === !1 && /* @__PURE__ */ l(
                Se,
                {
                  type: "textarea",
                  value: y.description,
                  updateField: Q,
                  section: "legend",
                  fieldName: "description",
                  label: "Legend Description"
                }
              ),
              y.dynamicDescription === !0 && /* @__PURE__ */ E(ie.Fragment, { children: [
                /* @__PURE__ */ E("label", { children: [
                  /* @__PURE__ */ l("span", { children: "Legend Description" }),
                  /* @__PURE__ */ E("span", { className: "subtext", children: [
                    "For ",
                    j(R)
                  ] }),
                  /* @__PURE__ */ l(_, { value: y.descriptions[String(R)] })
                ] }),
                /* @__PURE__ */ l("label", { children: /* @__PURE__ */ l(
                  "select",
                  {
                    value: String(R),
                    onChange: (v) => {
                      O("changeActiveFilterValue", v.target.value);
                    },
                    children: Ct.map((v, D) => /* @__PURE__ */ l("option", { value: v, children: j(v) }, D))
                  }
                ) })
              ] }),
              r.filters.length > 0 && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: y.dynamicDescription,
                    onChange: () => {
                      O("dynamicDescription", Ct[0]);
                    }
                  }
                ),
                /* @__PURE__ */ E("span", { className: "edit-label column-heading", children: [
                  "Dynamic Legend Description",
                  /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(
                      de,
                      {
                        display: "question",
                        style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                      }
                    ) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Check this option if the map has multiple filter controls and you want to specify a description for each filter selection." }) })
                  ] })
                ] })
              ] }),
              (r.filters.length > 0 || r.general.type === "bubble" || r.general.geoType === "us") && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: y.unified,
                    onChange: (v) => O("unifiedLegend", v.target.checked)
                  }
                ),
                /* @__PURE__ */ E("span", { className: "edit-label column-heading", children: [
                  "Unified Legend",
                  /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(
                      de,
                      {
                        display: "question",
                        style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                      }
                    ) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ E("p", { children: [
                      "For a map with filters, check this option if you want the high and low values in the legend to be based on ",
                      /* @__PURE__ */ l("em", { children: "all" }),
                      " mapped values."
                    ] }) })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          r.general.type !== "navigation" && /* @__PURE__ */ E(re, { children: [
            /* @__PURE__ */ E(Be, { children: [
              /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(je, { children: "Filters" }) }),
              /* @__PURE__ */ l(Ve, { children: /* @__PURE__ */ l(
                p1,
                {
                  config: r,
                  updateField: Q,
                  rawData: r.data,
                  hasFootnotes: n
                }
              ) })
            ] }),
            /* @__PURE__ */ E(Be, { children: [
              /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(je, { children: "Footnotes" }) }),
              /* @__PURE__ */ l(Ve, { children: /* @__PURE__ */ l($1, { config: r, updateField: Q, datasets: e }) })
            ] })
          ] }),
          r.general.type !== "navigation" && /* @__PURE__ */ E(Be, { children: [
            " ",
            /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(je, { children: "Data Table" }) }),
            /* @__PURE__ */ E(Ve, { children: [
              /* @__PURE__ */ l(
                Se,
                {
                  value: w.label,
                  updateField: Q,
                  section: "table",
                  fieldName: "label",
                  id: "dataTableTitle",
                  label: "Data Table Title",
                  placeholder: "Data Table",
                  tooltip: /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Label is required for Data Table for 508 Compliance" }) })
                  ] })
                }
              ),
              /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.table.wrapColumns,
                    onChange: (v) => {
                      c({
                        ...r,
                        table: {
                          ...r.table,
                          wrapColumns: v.target.checked
                        }
                      });
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label column-heading", children: "WRAP DATA TABLE COLUMNS" })
              ] }),
              /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.table.forceDisplay !== void 0 ? r.table.forceDisplay : !n,
                    onChange: (v) => {
                      O("showDataTable", v.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ E("span", { className: "edit-label column-heading", children: [
                  "Show Data Table",
                  /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(
                      de,
                      {
                        display: "question",
                        style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" }
                      }
                    ) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Data tables are required for 508 compliance. When choosing to hide this data table, replace with your own version." }) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ l(
                Se,
                {
                  value: w.indexLabel || "",
                  updateField: Q,
                  section: "table",
                  fieldName: "indexLabel",
                  label: "Index Column Header",
                  placeholder: "Location",
                  tooltip: /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "To comply with 508 standards, if the first column in the data table has no header, enter a brief one here." }) })
                  ] })
                }
              ),
              /* @__PURE__ */ l(
                Se,
                {
                  value: r.table.caption,
                  updateField: Q,
                  section: "table",
                  fieldName: "caption",
                  label: "Screen Reader Description",
                  placeholder: "Data Table",
                  tooltip: /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "Enter a description of the data table to be read by screen readers." }) })
                  ] }),
                  type: "textarea"
                }
              ),
              /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.table.limitHeight,
                    onChange: (v) => {
                      O("limitDataTableHeight", v.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Limit Table Height" })
              ] }),
              r.table.limitHeight && /* @__PURE__ */ l(
                Se,
                {
                  value: w.height,
                  updateField: Q,
                  section: "table",
                  fieldName: "height",
                  label: "Data Table Height",
                  placeholder: "Height(px)",
                  type: "number",
                  min: "0",
                  max: "500"
                }
              ),
              /* @__PURE__ */ l(
                Se,
                {
                  value: w.cellMinWidth,
                  updateField: Q,
                  section: "table",
                  fieldName: "cellMinWidth",
                  label: "Table Cell Min Width",
                  type: "number",
                  min: "0",
                  max: "500"
                }
              ),
              /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.table.expanded || !1,
                    onChange: (v) => {
                      O("expandDataTable", v.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Map loads with data table expanded" })
              ] }),
              /* @__PURE__ */ l(
                Ei,
                {
                  value: r.table.download,
                  fieldName: "download",
                  label: "Show Download CSV Link",
                  section: "table",
                  updateField: Q
                }
              ),
              r.table.download && /* @__PURE__ */ E(re, { children: [
                /* @__PURE__ */ E("label", { className: "checkbox", children: [
                  /* @__PURE__ */ l(
                    "input",
                    {
                      type: "checkbox",
                      className: "ms-4",
                      checked: r.table.showDownloadLinkBelow,
                      onChange: (v) => {
                        O("toggleDownloadLinkBelow", v.target.checked);
                      }
                    }
                  ),
                  /* @__PURE__ */ l("span", { className: "edit-label", children: "Show Link Below Table" })
                ] }),
                /* @__PURE__ */ l(
                  Ei,
                  {
                    value: r.table.downloadVisibleDataOnly,
                    fieldName: "downloadVisibleDataOnly",
                    className: "ms-4",
                    label: "Download only visible data",
                    section: "table",
                    updateField: Q
                  }
                )
              ] }),
              n && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.table.showDataTableLink,
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      D.table.showDataTableLink = v.target.checked, c(D);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Show Data Table Name & Link" })
              ] }),
              St && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.table.showDownloadUrl,
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      D.table.showDownloadUrl = v.target.checked, c(D);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Show URL to Automatically Updated Data" })
              ] }),
              /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.table.showFullGeoNameInCSV,
                    onChange: (v) => {
                      O("toggleShowFullGeoNameInCSV", v.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Include Full Geo Name in CSV Download" })
              ] }),
              /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.general.showDownloadImgButton,
                    onChange: (v) => {
                      O("toggleDownloadImgButton", v.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Enable Image Download" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ E(Be, { children: [
            " ",
            /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(je, { children: "Interactivity" }) }),
            /* @__PURE__ */ E(Ve, { children: [
              /* @__PURE__ */ l(
                Le,
                {
                  label: /* @__PURE__ */ E(re, { children: [
                    "Detail displays on",
                    " ",
                    /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "At mobile sizes, information always appears in a popover modal when a user taps on an item." }) })
                    ] })
                  ] }),
                  value: r.tooltips.appearanceType,
                  options: [
                    { value: "hover", label: "Hover - Tooltip" },
                    { value: "click", label: "Click - Popover Modal" }
                  ],
                  onChange: (v) => {
                    O("appearanceType", v.target.value);
                  }
                }
              ),
              r.tooltips.appearanceType === "click" && /* @__PURE__ */ l(
                Se,
                {
                  value: k.linkLabel,
                  section: "tooltips",
                  fieldName: "linkLabel",
                  label: "Tooltips Link Label",
                  updateField: Q
                }
              ),
              /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.tooltips.capitalizeLabels,
                    onChange: (v) => {
                      O("capitalizeLabels", v.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Capitalize text inside tooltip" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ E(Be, { children: [
            " ",
            /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(je, { children: "Visual" }) }),
            /* @__PURE__ */ E(Ve, { children: [
              /* @__PURE__ */ E("label", { children: [
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Header Theme" }),
                /* @__PURE__ */ l("ul", { className: "color-palette", children: w1.map((v) => /* @__PURE__ */ l(
                  "li",
                  {
                    title: v,
                    onClick: () => {
                      O("headerColor", v);
                    },
                    className: r.general.headerColor === v ? "selected " + v : v
                  },
                  v
                )) })
              ] }),
              /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.general.showTitle || !1,
                    onChange: (v) => {
                      O("showTitle", v.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Show Title" })
              ] }),
              r.general.type === "navigation" && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.general.fullBorder || !1,
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      D.general.fullBorder = v.target.checked, c(D);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Add border around map" })
              ] }),
              /* @__PURE__ */ l(
                Le,
                {
                  label: "Geo Border Color",
                  value: r.general.geoBorderColor || "",
                  options: [
                    { value: "darkGray", label: "Dark Gray (Default)" },
                    { value: "sameAsBackground", label: "White" }
                  ],
                  onChange: (v) => {
                    O("geoBorderColor", v.target.value);
                  }
                }
              ),
              /* @__PURE__ */ l("label", { children: /* @__PURE__ */ l("span", { className: "edit-label", children: "Map Color Palette" }) }),
              /* @__PURE__ */ l(
                h1,
                {
                  type: "3d",
                  section: "general",
                  subsection: "palette",
                  fieldName: "isReversed",
                  size: "small",
                  label: "Use selected palette in reverse order",
                  onClick: () => {
                    const v = ne.cloneDeep(r);
                    v.general.palette.isReversed = !v.general.palette.isReversed;
                    let D = "";
                    v.general.palette.isReversed && !r.color.endsWith("reverse") && (D = r.color + "reverse"), !v.general.palette.isReversed && r.color.endsWith("reverse") && (D = r.color.slice(0, -7)), D && (v.color = D), c(v);
                  },
                  value: r.general.palette.isReversed
                }
              ),
              /* @__PURE__ */ l("span", { children: "Sequential" }),
              /* @__PURE__ */ l("ul", { className: "color-palette", children: J.map((v) => {
                const D = {
                  backgroundColor: Ge[v][2]
                }, q = {
                  backgroundColor: Ge[v][4]
                }, Y = {
                  backgroundColor: Ge[v][6]
                };
                return /* @__PURE__ */ E(
                  "li",
                  {
                    title: v,
                    onClick: () => {
                      const ee = ne.cloneDeep(r);
                      ee.color = v, c(ee);
                    },
                    className: r.color === v ? "selected" : "",
                    children: [
                      /* @__PURE__ */ l("span", { style: D }),
                      /* @__PURE__ */ l("span", { style: q }),
                      /* @__PURE__ */ l("span", { style: Y })
                    ]
                  },
                  v
                );
              }) }),
              /* @__PURE__ */ l("span", { children: "Non-Sequential" }),
              /* @__PURE__ */ l("ul", { className: "color-palette", children: te.map((v) => {
                const D = {
                  backgroundColor: Ge[v][2]
                }, q = {
                  backgroundColor: Ge[v][4]
                }, Y = {
                  backgroundColor: Ge[v][6]
                };
                return Ge[v].length <= 8 && r.general.geoType === "us-region" ? "" : /* @__PURE__ */ E(
                  "li",
                  {
                    title: v,
                    onClick: () => {
                      const ee = ne.cloneDeep(r);
                      ee.color = v, c(ee);
                    },
                    className: r.color === v ? "selected" : "",
                    children: [
                      /* @__PURE__ */ l("span", { style: D }),
                      /* @__PURE__ */ l("span", { style: q }),
                      /* @__PURE__ */ l("span", { style: Y })
                    ]
                  },
                  v
                );
              }) }),
              /* @__PURE__ */ l("span", { children: "Colorblind Safe" }),
              /* @__PURE__ */ l("ul", { className: "color-palette", children: Ce.map((v) => {
                const D = {
                  backgroundColor: Ge[v][2]
                }, q = {
                  backgroundColor: Ge[v][4]
                }, Y = {
                  backgroundColor: Ge[v][6]
                };
                return Ge[v].length <= 8 && r.general.geoType === "us-region" ? "" : /* @__PURE__ */ E(
                  "li",
                  {
                    title: v,
                    onClick: () => {
                      O("color", v);
                    },
                    className: r.color === v ? "selected" : "",
                    children: [
                      /* @__PURE__ */ l("span", { style: D }),
                      /* @__PURE__ */ l("span", { style: q }),
                      /* @__PURE__ */ l("span", { style: Y })
                    ]
                  },
                  v
                );
              }) }),
              /* @__PURE__ */ E("label", { children: [
                "Geocode Settings",
                /* @__PURE__ */ l(
                  Se,
                  {
                    type: "number",
                    value: r.visual.geoCodeCircleSize,
                    section: "visual",
                    max: "10",
                    fieldName: "geoCodeCircleSize",
                    label: "Geocode Circle Size",
                    updateField: Q
                  }
                )
              ] }),
              r.general.type === "bubble" && /* @__PURE__ */ E(re, { children: [
                /* @__PURE__ */ l(
                  Se,
                  {
                    type: "number",
                    value: r.visual.minBubbleSize,
                    section: "visual",
                    fieldName: "minBubbleSize",
                    label: "Minimum Bubble Size",
                    updateField: Q
                  }
                ),
                /* @__PURE__ */ l(
                  Se,
                  {
                    type: "number",
                    value: r.visual.maxBubbleSize,
                    section: "visual",
                    fieldName: "maxBubbleSize",
                    label: "Maximum Bubble Size",
                    updateField: Q
                  }
                )
              ] }),
              (r.general.geoType === "world" || r.general.geoType === "us" && r.general.type === "bubble") && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.visual.showBubbleZeros,
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      D.visual.showBubbleZeros = v.target.checked, c(D);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Show Data with Zero's on Bubble Map" })
              ] }),
              (r.general.geoType === "world" || r.general.geoType === "single-state") && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.general.allowMapZoom,
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      D.general.allowMapZoom = v.target.checked, D.mapPosition.coordinates = r.general.geoType === "world" ? [0, 30] : [0, 0], D.mapPosition.zoom = 1, c(D);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Allow Map Zooming" })
              ] }),
              r.general.type === "bubble" && /* @__PURE__ */ E("label", { className: "checkbox", children: [
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.visual.extraBubbleBorder,
                    onChange: (v) => {
                      const D = ne.cloneDeep(r);
                      D.visual.extraBubbleBorder = v.target.checked, c(D);
                    }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "edit-label", children: "Bubble Map has extra border" })
              ] }),
              (r.general.geoType === "us" || r.general.geoType === "us-county" || r.general.geoType === "world") && /* @__PURE__ */ E(re, { children: [
                /* @__PURE__ */ E("label", { children: [
                  /* @__PURE__ */ l("span", { className: "edit-label", children: "Default City Style" }),
                  /* @__PURE__ */ E(
                    "select",
                    {
                      value: r.visual.cityStyle || !1,
                      onChange: (v) => {
                        O("handleCityStyle", v.target.value);
                      },
                      children: [
                        /* @__PURE__ */ l("option", { value: "circle", children: "Circle" }),
                        /* @__PURE__ */ l("option", { value: "pin", children: "Pin" }),
                        /* @__PURE__ */ l("option", { value: "square", children: "Square" }),
                        /* @__PURE__ */ l("option", { value: "triangle", children: "Triangle" }),
                        /* @__PURE__ */ l("option", { value: "diamond", children: "Diamond" }),
                        /* @__PURE__ */ l("option", { value: "star", children: "Star" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ l(
                  Se,
                  {
                    value: r.visual.cityStyleLabel,
                    section: "visual",
                    fieldName: "cityStyleLabel",
                    label: "Label (Optional) ",
                    updateField: Q,
                    tooltip: /* @__PURE__ */ E(Z, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ l(Z.Target, { children: /* @__PURE__ */ l(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ l(Z.Content, { children: /* @__PURE__ */ l("p", { children: "When a label is provided, the default city style will appear in the legend." }) })
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ E(re, { children: [
                r.visual.additionalCityStyles.length > 0 && r.visual.additionalCityStyles.map(({ label: v, column: D, value: q, shape: Y }, ee) => /* @__PURE__ */ E("div", { className: "edit-block", children: [
                  /* @__PURE__ */ l(
                    "button",
                    {
                      className: "remove-column",
                      onClick: (ye) => {
                        ye.preventDefault(), A("remove", ee, "", "");
                      },
                      children: "Remove"
                    }
                  ),
                  /* @__PURE__ */ E("p", { children: [
                    "City Style ",
                    ee + 1
                  ] }),
                  /* @__PURE__ */ E("label", { children: [
                    /* @__PURE__ */ l("span", { className: "edit-label column-heading", children: "Column with configuration value" }),
                    /* @__PURE__ */ l(
                      "select",
                      {
                        value: D,
                        onChange: (ye) => {
                          A("update", ee, "column", ye.target.value);
                        },
                        children: ge
                      }
                    )
                  ] }),
                  /* @__PURE__ */ E("label", { children: [
                    /* @__PURE__ */ l("span", { className: "edit-label column-heading", children: "Value to Trigger" }),
                    /* @__PURE__ */ l(
                      "input",
                      {
                        type: "text",
                        value: q,
                        onChange: (ye) => {
                          A("update", ee, "value", ye.target.value);
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ E("label", { children: [
                    /* @__PURE__ */ l("span", { className: "edit-label column-heading", children: "Shape" }),
                    /* @__PURE__ */ l(
                      "select",
                      {
                        value: Y,
                        onChange: (ye) => {
                          A("update", ee, "shape", ye.target.value);
                        },
                        children: N("value")
                      }
                    )
                  ] }),
                  /* @__PURE__ */ E("label", { children: [
                    /* @__PURE__ */ l("span", { className: "edit-label column-heading", children: "Label" }),
                    /* @__PURE__ */ l(
                      "input",
                      {
                        type: "text",
                        value: v,
                        onChange: (ye) => {
                          A("update", ee, "label", ye.target.value);
                        }
                      },
                      ee
                    )
                  ] })
                ] }, `additional-city-style-${ee}`)),
                /* @__PURE__ */ l(
                  "button",
                  {
                    type: "button",
                    onClick: () => A("add", 0, "", ""),
                    className: "btn btn-primary full-width",
                    children: "Add city style"
                  }
                )
              ] }),
              /* @__PURE__ */ l("label", { htmlFor: "opacity", children: /* @__PURE__ */ l(
                Se,
                {
                  type: "number",
                  min: 0,
                  max: 100,
                  value: r.tooltips.opacity ? r.tooltips.opacity : 100,
                  section: "tooltips",
                  fieldName: "opacity",
                  label: "Tooltip Opacity (%)",
                  updateField: Q
                }
              ) }),
              r.general.geoType === "leaflet" && /* @__PURE__ */ l(re, { children: /* @__PURE__ */ l(
                Le,
                {
                  label: "Leaflet Theme",
                  options: layerOptions,
                  section: "leaflet",
                  fieldName: "theme",
                  updateField: Q
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ E(Be, { children: [
            /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(je, { children: "Custom Map Layers" }) }),
            /* @__PURE__ */ E(Ve, { children: [
              r.map.layers.length === 0 && /* @__PURE__ */ l("p", { children: "There are currently no layers." }),
              r.map.layers.map((v, D) => /* @__PURE__ */ l(re, { children: /* @__PURE__ */ l(ta, { allowZeroExpanded: !0, children: /* @__PURE__ */ E(Be, { className: "series-item map-layers-list", children: [
                /* @__PURE__ */ l(We, { className: "series-item__title map-layers-list--title", children: /* @__PURE__ */ l(je, { children: `Layer ${D + 1}: ${v.name}` }) }),
                /* @__PURE__ */ l(Ve, { children: /* @__PURE__ */ E("div", { className: "map-layers-panel", children: [
                  /* @__PURE__ */ l("label", { htmlFor: "layerName", children: "Layer Name:" }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      type: "text",
                      name: "layerName",
                      value: v.name,
                      onChange: (q) => F(q, D, "name")
                    }
                  ),
                  /* @__PURE__ */ l("label", { htmlFor: "layerFilename", children: "File:" }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      type: "text",
                      name: "layerFilename",
                      value: v.url,
                      onChange: (q) => F(q, D, "url")
                    }
                  ),
                  /* @__PURE__ */ l("label", { htmlFor: "layerNamespace", children: "TOPOJSON Namespace:" }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      type: "text",
                      name: "layerNamespace",
                      value: v.namespace,
                      onChange: (q) => F(q, D, "namespace")
                    }
                  ),
                  /* @__PURE__ */ l("label", { htmlFor: "layerFill", children: "Fill Color:" }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      type: "text",
                      name: "layerFill",
                      value: v.fill,
                      onChange: (q) => F(q, D, "fill")
                    }
                  ),
                  /* @__PURE__ */ l("label", { htmlFor: "layerFill", children: "Fill Opacity (%):" }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      max: 100,
                      name: "layerFill",
                      value: v.fillOpacity ? v.fillOpacity * 100 : "",
                      onChange: (q) => F(q, D, "fillOpacity")
                    }
                  ),
                  /* @__PURE__ */ l("label", { htmlFor: "layerStroke", children: "Stroke Color:" }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      type: "text",
                      name: "layerStroke",
                      value: v.stroke,
                      onChange: (q) => F(q, D, "stroke")
                    }
                  ),
                  /* @__PURE__ */ l("label", { htmlFor: "layerStroke", children: "Stroke Width:" }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      type: "number",
                      min: 0,
                      max: 5,
                      name: "layerStrokeWidth",
                      value: v.strokeWidth,
                      onChange: (q) => F(q, D, "strokeWidth")
                    }
                  ),
                  /* @__PURE__ */ l("label", { htmlFor: "layerTooltip", children: "Tooltip:" }),
                  /* @__PURE__ */ l(
                    "textarea",
                    {
                      name: "layerTooltip",
                      value: v.tooltip,
                      onChange: (q) => F(q, D, "tooltip")
                    }
                  ),
                  /* @__PURE__ */ l("button", { onClick: (q) => $(q, D), children: "Remove Layer" })
                ] }) })
              ] }) }) })),
              /* @__PURE__ */ l("button", { className: "btn btn-primary full-width", onClick: I, children: "Add Map Layer" }),
              /* @__PURE__ */ l("p", { className: "layer-purpose-details", children: "Context should be added to your visualization or associated page to describe the significance of layers that are added to maps." })
            ] })
          ] }),
          r.general.geoType === "us" && /* @__PURE__ */ l(Yo.PatternSettings, { name: "Pattern Settings" }),
          r.general.geoType !== "us-county" && /* @__PURE__ */ l(Yo.Annotate, { name: "Text Annotations" })
        ] }),
        /* @__PURE__ */ l(g1, { loadConfig: i, config: r, convertStateToConfig: H })
      ]
    }
  ) });
}, Sd = () => {
  const { config: e } = P.useContext(fe), t = e.runtime.editorErrorMessage;
  return /* @__PURE__ */ l("section", { className: "waiting", children: /* @__PURE__ */ E("section", { className: "waiting-container", children: [
    /* @__PURE__ */ l("h3", { children: "Error With Configuration" }),
    /* @__PURE__ */ l("p", { children: t })
  ] }) });
};
function er(e) {
  return gi({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" }, child: [] }] })(e);
}
function Xo(e) {
  return gi({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" }, child: [] }] })(e);
}
function tr(e) {
  return gi({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z" }, child: [] }] })(e);
}
function nr(e) {
  return gi({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z" }, child: [] }] })(e);
}
const bd = (e) => {
  const { currentViewport: t } = e, { config: n } = P.useContext(fe), a = (o) => {
    switch (o) {
      case "Arrow Down":
        return /* @__PURE__ */ l(er, {});
      case "Arrow Up":
        return /* @__PURE__ */ l(nr, {});
      case "Arrow Right":
        return /* @__PURE__ */ l(tr, {});
      default:
        return;
    }
  }, { legendClasses: i } = Ls(n, t);
  return n.hexMap.type === "shapes" && n.hexMap.shapeGroups.map((o, s) => /* @__PURE__ */ l("aside", { id: "legend", className: i.aside.join(" "), role: "region", "aria-label": "Legend", tabIndex: 0, children: /* @__PURE__ */ E("section", { className: i.section.join(" "), "aria-label": "Map Legend", children: [
    o.legendTitle && /* @__PURE__ */ l("h3", { className: i.title.join(" "), children: Rt(o.legendTitle) }),
    o.legendDescription && /* @__PURE__ */ l("p", { className: i.description.join(" "), children: Rt(o.legendDescription) }),
    /* @__PURE__ */ l("ul", { className: i.ul.join(" "), "aria-label": "Legend items", style: { listStyle: "none" }, children: o.items.map((c, r) => /* @__PURE__ */ E("li", { className: i.li.join(" "), children: [
      a(c.shape),
      " ",
      c.value
    ] }, `hex-legend-item-${r}`)) })
  ] }) }));
};
function mi(e) {
  var t = e.id, n = e.width, a = e.height, i = e.children;
  return /* @__PURE__ */ ie.createElement("defs", null, /* @__PURE__ */ ie.createElement("pattern", {
    id: t,
    width: n,
    height: a,
    patternUnits: "userSpaceOnUse"
  }, i));
}
mi.propTypes = {
  id: V.string.isRequired,
  width: V.number.isRequired,
  height: V.number.isRequired,
  children: V.node.isRequired
};
var ha = {
  horizontal: "horizontal",
  vertical: "vertical",
  diagonal: "diagonal",
  diagonalRightToLeft: "diagonalRightToLeft"
};
function vd(e) {
  var t = e.height, n = e.orientation;
  switch (n) {
    case ha.horizontal:
      return "M 0," + t / 2 + " l " + t + ",0";
    case ha.diagonal:
      return "M 0," + t + " l " + t + "," + -t + " M " + -t / 4 + "," + t / 4 + " l " + t / 2 + "," + -t / 2 + `
             M ` + 3 / 4 * t + "," + 5 / 4 * t + " l " + t / 2 + "," + -t / 2;
    case ha.diagonalRightToLeft:
      return "M 0,0 l " + t + "," + t + `
        M ` + -t / 4 + "," + 3 / 4 * t + " l " + t / 2 + "," + t / 2 + `
        M ` + 3 / 4 * t + "," + -t / 4 + " l " + t / 2 + "," + t / 2;
    case ha.vertical:
    default:
      return "M " + t / 2 + ", 0 l 0, " + t;
  }
}
function yi(e) {
  var t = e.id, n = e.width, a = e.height, i = e.stroke, o = e.strokeWidth, s = e.strokeDasharray, c = e.strokeLinecap, r = c === void 0 ? "square" : c, g = e.shapeRendering, u = g === void 0 ? "auto" : g, p = e.orientation, d = p === void 0 ? ["vertical"] : p, h = e.background, m = e.className, S = Array.isArray(d) ? d : [d];
  return /* @__PURE__ */ ie.createElement(mi, {
    id: t,
    width: n,
    height: a
  }, !!h && /* @__PURE__ */ ie.createElement("rect", {
    className: Ot("visx-pattern-line-background"),
    width: n,
    height: a,
    fill: h
  }), S.map(function(y, w) {
    return /* @__PURE__ */ ie.createElement("path", {
      key: "visx-" + t + "-line-" + y + "-" + w,
      className: Ot("visx-pattern-line", m),
      d: vd({
        orientation: y,
        height: a
      }),
      stroke: i,
      strokeWidth: o,
      strokeDasharray: s,
      strokeLinecap: r,
      shapeRendering: u
    });
  }));
}
yi.propTypes = {
  id: V.string.isRequired,
  width: V.number.isRequired,
  height: V.number.isRequired,
  className: V.string,
  background: V.string,
  stroke: V.string,
  strokeWidth: V.oneOfType([V.number, V.string]),
  strokeDasharray: V.oneOfType([V.string, V.number]),
  strokeLinecap: V.oneOf(["square", "butt", "round", "inherit"]),
  shapeRendering: V.oneOfType([V.string, V.number]),
  orientation: V.array
};
function Ci(e) {
  var t, n = e.id, a = e.width, i = e.height, o = e.radius, s = o === void 0 ? 2 : o, c = e.fill, r = e.stroke, g = e.strokeWidth, u = e.strokeDasharray, p = e.background, d = e.complement, h = d === void 0 ? !1 : d, m = e.className, S;
  return h && (S = [[0, 0], [0, i], [a, 0], [a, i]]), /* @__PURE__ */ ie.createElement(mi, {
    id: n,
    width: a,
    height: i
  }, !!p && /* @__PURE__ */ ie.createElement("rect", {
    width: a,
    height: i,
    fill: p
  }), /* @__PURE__ */ ie.createElement("circle", {
    className: Ot("visx-pattern-circle", m),
    cx: a / 2,
    cy: i / 2,
    r: s,
    fill: c,
    stroke: r,
    strokeWidth: g,
    strokeDasharray: u
  }), (t = S) == null ? void 0 : t.map(function(y) {
    var w = y[0], k = y[1];
    return /* @__PURE__ */ ie.createElement("circle", {
      key: n + "-complement-" + w + "-" + k,
      className: Ot("visx-pattern-circle visx-pattern-circle-complement", m),
      cx: w,
      cy: k,
      r: s,
      fill: c,
      stroke: r,
      strokeWidth: g,
      strokeDasharray: u
    });
  }));
}
Ci.propTypes = {
  id: V.string.isRequired,
  width: V.number.isRequired,
  height: V.number.isRequired,
  radius: V.number,
  fill: V.string,
  className: V.string,
  stroke: V.string,
  strokeWidth: V.oneOfType([V.number, V.string]),
  strokeDasharray: V.oneOfType([V.number, V.string]),
  complement: V.bool,
  background: V.string
};
function zs(e) {
  var t = e.id, n = e.width, a = e.height, i = e.path, o = e.fill, s = o === void 0 ? "transparent" : o, c = e.stroke, r = e.strokeWidth, g = e.strokeDasharray, u = e.strokeLinecap, p = u === void 0 ? "square" : u, d = e.shapeRendering, h = d === void 0 ? "auto" : d, m = e.background, S = e.className;
  return /* @__PURE__ */ ie.createElement(mi, {
    id: t,
    width: n,
    height: a
  }, !!m && /* @__PURE__ */ ie.createElement("rect", {
    width: n,
    height: a,
    fill: m
  }), /* @__PURE__ */ ie.createElement("path", {
    className: Ot("visx-pattern-path", S),
    d: i,
    fill: s,
    stroke: c,
    strokeWidth: r,
    strokeDasharray: g,
    strokeLinecap: p,
    shapeRendering: h
  }));
}
zs.propTypes = {
  id: V.string.isRequired,
  width: V.number.isRequired,
  height: V.number.isRequired,
  path: V.string,
  fill: V.string,
  className: V.string,
  background: V.string,
  stroke: V.string,
  strokeWidth: V.oneOfType([V.number, V.string]),
  strokeDasharray: V.oneOfType([V.string, V.number]),
  strokeLinecap: V.oneOf(["square", "butt", "round", "inherit"]),
  shapeRendering: V.oneOfType([V.string, V.number])
};
function Si(e) {
  var t = e.id, n = e.width, a = e.height, i = e.fill, o = e.stroke, s = e.strokeWidth, c = e.strokeDasharray, r = e.strokeLinecap, g = e.shapeRendering, u = e.background, p = e.className;
  return /* @__PURE__ */ ie.createElement(zs, {
    className: Ot("visx-pattern-wave", p),
    path: "M 0 " + a / 2 + " c " + a / 8 + " " + -a / 4 + " , " + a * 3 / 8 + " " + -a / 4 + " , " + a / 2 + ` 0
             c ` + a / 8 + " " + a / 4 + " , " + a * 3 / 8 + " " + a / 4 + " , " + a / 2 + " 0 M " + -a / 2 + " " + a / 2 + `
             c ` + a / 8 + " " + a / 4 + " , " + a * 3 / 8 + " " + a / 4 + " , " + a / 2 + " 0 M " + a + " " + a / 2 + `
             c ` + a / 8 + " " + -a / 4 + " , " + a * 3 / 8 + " " + -a / 4 + " , " + a / 2 + " 0",
    id: t,
    width: n,
    height: a,
    fill: i,
    stroke: o,
    strokeWidth: s,
    strokeDasharray: c,
    strokeLinecap: r,
    shapeRendering: g,
    background: u
  });
}
Si.propTypes = {
  id: V.string.isRequired,
  width: V.number.isRequired,
  height: V.number.isRequired,
  fill: V.string,
  className: V.string,
  background: V.string,
  stroke: V.string,
  strokeWidth: V.oneOfType([V.number, V.string]),
  strokeDasharray: V.oneOfType([V.string, V.number]),
  strokeLinecap: V.oneOf(["square", "butt", "round", "inherit"]),
  shapeRendering: V.oneOfType([V.string, V.number])
};
const ar = (e, t, n, a, i) => {
  var r;
  const o = ne.cloneDeep(n), s = !((r = o.items) != null && r[e].disabled);
  o.items[e].disabled = s;
  const c = n.disabledAmt ?? 0;
  o.disabledAmt = s ? c + 1 : c - 1, a(o), i(
    `Disabled legend item ${t ?? ""}. Please reference the data table to see updated values.`
  );
};
const kd = ({ legendItems: e }) => {
  const { runtimeLegend: t, setRuntimeLegend: n, config: a } = P.useContext(fe), i = P.useContext(it), o = (p, d, h) => {
    if (!h || !d || !p)
      return {};
    const m = a.columns.primary.name || "", S = {};
    for (const y of d) {
      const w = y[h];
      if (!w)
        continue;
      const k = y[m], f = p.find((T) => T.label === k);
      f && (S[w] || (S[w] = []), S[w].some((T) => T.label === k) || S[w].push(f));
    }
    return Object.entries(S).forEach(([y, w]) => {
      S[y] = [...w].sort(
        (k, f) => (a.legend.categoryValuesOrder ?? []).indexOf(k.label) - (a.legend.categoryValuesOrder ?? []).indexOf(f.label)
      );
    }), S;
  }, s = (p) => {
    var y;
    const d = t.items.map(
      (w) => w.value === p.label ? { ...w, disabled: !w.disabled } : w
    ), h = (y = t.items.find((w) => w.value === p.label)) == null ? void 0 : y.disabled, m = h ? -1 : 1;
    n({
      ...t,
      items: d,
      disabledAmt: (t.disabledAmt ?? 0) + m
    });
    const S = `${h ? "Enabled" : "Disabled"} legend item ${p.label}. Please reference the data table.`;
    i({ type: "SET_ACCESSIBLE_STATUS", payload: S });
  }, c = (p, d) => [
    "group-list-item",
    p.disabled ? "legend-group-item-disable" : d ? "legend-group-item-not-disable" : ""
  ].filter(Boolean).join(" "), r = a.legend.position === "bottom" || a.legend.position === "top" ? "col-12 col-sm-6 col-md-4 col-lg-3" : "col-12", g = P.useMemo(
    () => o(e, a.data, a.legend.groupBy),
    [e, a.data, a.legend.groupBy]
  ), u = t.items.some((p) => p.disabled);
  return /* @__PURE__ */ l(Ht, { component: "Grouped Legend", children: /* @__PURE__ */ l("div", { className: "row", children: Object.entries(g).map(([p, d]) => /* @__PURE__ */ E("div", { className: `${r} group-container`, children: [
    /* @__PURE__ */ l("p", { className: "group-label", children: p }),
    /* @__PURE__ */ l("ul", { className: "row", children: d.map((h, m) => /* @__PURE__ */ E(
      "li",
      {
        role: "button",
        tabIndex: 0,
        title: `Legend item ${h.label} - Click to disable`,
        className: c(h, u),
        onClick: () => s(h),
        onKeyDown: (S) => {
          (S.key === "Enter" || S.key === " ") && (S.preventDefault(), ar(m, h.label, t, n, setAccessibleStatus));
        },
        children: [
          /* @__PURE__ */ l(vs, { shape: a.legend.style === "boxes" ? "square" : "circle", fill: h.color }),
          /* @__PURE__ */ l("span", { children: h.label })
        ]
      },
      `${h.label}-${m}`
    )) })
  ] }, p)) }) });
}, Ld = 30, wd = P.forwardRef((e, t) => {
  var F, I, $, U;
  const { skipId: n, containerWidthPadding: a } = e, {
    config: i,
    currentViewport: o,
    dimensions: s,
    mapId: c,
    runtimeFilters: r,
    runtimeLegend: g,
    setRuntimeLegend: u
  } = P.useContext(fe), p = P.useContext(it), { legend: d } = i, h = d.style === "gradient", m = Oo("md", o), S = (d.position === "left" || d.position === "right") && Oo("md", o), y = d.position === "bottom" || S, w = d.hideBorder && y, k = () => {
    try {
      return g.items || Error("No runtime legend data"), g.items.map((b, C) => {
        const N = Hn(b.max, "primary", i), A = Hn(b.min, "primary", i);
        let _ = `${A}${N !== A ? ` - ${N}` : ""}`;
        d.type === "equalinterval" && C !== g.length - 1 && (_ = `${A} - < ${N}`), d.type === "category" && (_ = Hn(b.value, "primary", i)), b.max === 0 && b.min === 0 && (_ = "0"), b.max === null && b.min === null && (_ = "No data");
        let O = _;
        return b.hasOwnProperty("special") && (O = b.label || b.value), {
          color: b.color,
          label: Rt(O),
          disabled: b.disabled,
          special: b.hasOwnProperty("special"),
          value: [b.min, b.max]
        };
      });
    } catch (b) {
      return console.error("Error in getFormattedLegendItems", b), [];
    }
  }, T = ((b = !1) => {
    const C = b ? [] : k(), N = b1(o) ? "12px" : "14px", A = C.some((O) => O.disabled);
    let _;
    return _ = C.map((O, G) => {
      const W = () => {
        let j = ["legend-container__li", "d-flex", "align-items-center"];
        return O.disabled ? j.push("legend-container__li--disabled") : A && j.push("legend-container__li--not-disabled"), O.special && j.push("legend-container__li--special-class"), j.join(" ");
      }, B = (j) => {
        p({ type: "SET_ACCESSIBLE_STATUS", payload: j });
      };
      return /* @__PURE__ */ E(
        "li",
        {
          className: W(),
          title: `Legend item ${O.label} - Click to disable`,
          onClick: () => ar(G, O.label, g, u, B),
          onKeyDown: (j) => {
            j.key === "Enter" && (j.preventDefault(), ar(G, O.label, g, u, B));
          },
          tabIndex: 0,
          children: [
            /* @__PURE__ */ l(vs, { shape: i.legend.style === "boxes" ? "square" : "circle", fill: O.color }),
            /* @__PURE__ */ l("span", { children: O.label })
          ]
        },
        G
      );
    }), i.map.patterns && i.map.patterns.map((O, G) => {
      const { pattern: W, dataKey: B, size: j } = O;
      let H = "black";
      const K = {
        small: "8",
        medium: "10",
        large: "12"
      }, X = 16;
      _.push(
        /* @__PURE__ */ l(re, { children: /* @__PURE__ */ E(
          "li",
          {
            className: "legend-container__li legend-container__li--geo-pattern",
            "aria-label": "You are on a pattern button. We dont support toggling patterns on this legend at the moment, but provide the area as being focusable for congruity.",
            tabIndex: 0,
            children: [
              /* @__PURE__ */ l("span", { className: "legend-item", style: { border: "unset" }, children: /* @__PURE__ */ E("svg", { width: X, height: X, children: [
                W === "waves" && /* @__PURE__ */ l(
                  Si,
                  {
                    id: `${c}--${B}--${G}`,
                    height: K[j] ?? 10,
                    width: K[j] ?? 10,
                    fill: H,
                    strokeWidth: 0.25
                  }
                ),
                W === "circles" && /* @__PURE__ */ l(
                  Ci,
                  {
                    id: `${c}--${B}--${G}`,
                    height: K[j] ?? 10,
                    width: K[j] ?? 10,
                    fill: H,
                    radius: 1.25
                  }
                ),
                W === "lines" && /* @__PURE__ */ l(
                  yi,
                  {
                    id: `${c}--${B}--${G}`,
                    height: K[j] ?? 6,
                    width: K[j] ?? 10,
                    stroke: H,
                    strokeWidth: 0.75,
                    orientation: ["diagonalRightToLeft"]
                  }
                ),
                /* @__PURE__ */ l(
                  "circle",
                  {
                    id: B,
                    fill: `url(#${c}--${B}--${G})`,
                    r: X / 2,
                    cx: X / 2,
                    cy: X / 2,
                    stroke: "#0000004d",
                    strokeWidth: 1
                  }
                )
              ] }) }),
              /* @__PURE__ */ l("p", { style: { lineHeight: "22.4px", fontSize: b ? N : "16px" }, children: O.label || O.dataValue || "" })
            ]
          }
        ) })
      );
    }), _;
  })(h), { legendClasses: L } = Ls(i, o), M = (b) => {
    const C = t.current;
    b && b.preventDefault(), p0(g, u), p({
      type: "SET_ACCESSIBLE_STATUS",
      payload: "Legend has been reset, please reference the data table to see updated values."
    }), C && C.focus();
  }, R = {
    pin: /* @__PURE__ */ l(
      "path",
      {
        className: "marker",
        d: "M0,0l-8.8-17.7C-12.1-24.3-7.4-32,0-32h0c7.4,0,12.1,7.7,8.8,14.3L0,0z",
        strokeWidth: 2,
        stroke: "black",
        transform: "scale(0.5)"
      }
    ),
    circle: /* @__PURE__ */ l(fs, { color: "#000", size: 150 }),
    square: /* @__PURE__ */ l(ms, { color: "#000", size: 150 }),
    diamond: /* @__PURE__ */ l(ys, { color: "#000", size: 150 }),
    star: /* @__PURE__ */ l(ao, { color: "#000", size: 150 }),
    triangle: /* @__PURE__ */ l(Cs, { color: "#000", size: 150 })
  }, z = T.length > 0 && ["Select Option", ""].includes(i.legend.groupBy);
  return /* @__PURE__ */ l(Ht, { component: "Sidebar", children: /* @__PURE__ */ E("div", { className: `legends ${w ? "mt-4" : ""}`, children: [
    /* @__PURE__ */ l(
      "aside",
      {
        id: n || "legend",
        className: L.aside.join(" ") || "",
        role: "region",
        "aria-label": "Legend",
        tabIndex: h ? -1 : 0,
        ref: t,
        children: /* @__PURE__ */ E("section", { className: L.section.join(" ") || "", "aria-label": "Map Legend", children: [
          (d.title || d.description || d.dynamicDescription) && /* @__PURE__ */ E("div", { className: "mb-3", children: [
            d.title && /* @__PURE__ */ l("h3", { className: L.title.join(" ") || "", children: Rt(d.title) }),
            d.dynamicDescription === !1 && d.description && /* @__PURE__ */ l("p", { className: L.description.join(" ") || "", children: Rt(d.description) }),
            d.dynamicDescription === !0 && r.map((b, C) => {
              const N = `${C},${b.values.indexOf(String(b.active))}`, A = d.descriptions[N] || "";
              return A.length > 0 ? /* @__PURE__ */ l(
                "p",
                {
                  className: `dynamic-legend-description-${N} mt-2`,
                  children: A
                },
                `dynamic-description-${N}`
              ) : !0;
            })
          ] }),
          /* @__PURE__ */ l(
            m1,
            {
              labels: ((F = k()) == null ? void 0 : F.map((b) => b == null ? void 0 : b.label)) ?? [],
              colors: ((I = k()) == null ? void 0 : I.map((b) => b == null ? void 0 : b.color)) ?? [],
              dimensions: s,
              parentPaddingToSubtract: a + (d.hideBorder || m ? 0 : Ld),
              config: i
            }
          ),
          /* @__PURE__ */ l(kd, { legendItems: k() }),
          z && /* @__PURE__ */ l("ul", { className: L.ul.join(" "), "aria-label": "Legend items", children: T }),
          (i.visual.additionalCityStyles && i.visual.additionalCityStyles.some((b) => b.label) || i.visual.cityStyleLabel) && /* @__PURE__ */ E(re, { children: [
            /* @__PURE__ */ l("hr", {}),
            /* @__PURE__ */ E("div", { className: L.div.join(" ") || "", children: [
              i.visual.cityStyleLabel && /* @__PURE__ */ E("div", { children: [
                /* @__PURE__ */ l("svg", { children: /* @__PURE__ */ l(
                  na,
                  {
                    top: i.visual.cityStyle === "pin" ? 19 : i.visual.cityStyle === "triangle" ? 13 : 11,
                    left: 10,
                    children: R[i.visual.cityStyle.toLowerCase()]
                  }
                ) }),
                /* @__PURE__ */ l("p", { children: i.visual.cityStyleLabel })
              ] }),
              i.visual.additionalCityStyles.map(
                ({ shape: b, label: C }) => C && /* @__PURE__ */ E("div", { children: [
                  /* @__PURE__ */ l("svg", { children: /* @__PURE__ */ l(na, { top: b === "Pin" ? 19 : b === "Triangle" ? 13 : 11, left: 10, children: R[b.toLowerCase()] }) }),
                  /* @__PURE__ */ l("p", { children: C })
                ] })
              )
            ] })
          ] }),
          g.disabledAmt > 0 && /* @__PURE__ */ l(no, { className: L.showAllButton.join(" "), onClick: M, children: "Show All" })
        ] })
      }
    ),
    ((U = ($ = i.hexMap) == null ? void 0 : $.shapeGroups) == null ? void 0 : U.length) > 0 && i.hexMap.type === "shapes" && i.general.displayAsHex && /* @__PURE__ */ l(bd, { runtimeLegend: g, viewport: o })
  ] }) });
}), Td = (e) => {
  const { config: t, supportedStatesFipsCodes: n } = e, a = (g, u) => {
    const { geoType: p, type: d, hideGeoColumnInTooltip: h } = t.general;
    if (p === "us-county" && d !== "us-geocode") {
      let m = u[t.columns.geo.name].substring(0, 2);
      const S = n[m];
      g += h ? `<strong>${S}</strong><br/>` : `<strong>Location:  ${S}</strong><br/>`;
    }
    return g;
  }, i = (g) => {
    const { hideGeoColumnInTooltip: u } = t.general, d = ((h) => {
      const { geoType: m, geoLabelOverride: S } = t.general;
      switch (m) {
        case "us":
          h = "State: ";
          break;
        case "us-county":
          h = "County: ";
          break;
        case "single-state":
          h = "County: ";
          break;
        default:
          h = "";
          break;
      }
      return S && (h = `${S}: `), h;
    })("");
    return u ? `<strong>${Ie(g)}</strong>` : `<p class="tooltip-heading" style="text-transform: none;">${d}${Ie(g)}</p>`;
  }, o = (g, u, p, d, h) => {
    if (g && g.length && typeof g[0] == "object") {
      for (const m of g)
        if (u.name === m.key && String(p == null ? void 0 : p[m.key]) === m.value) {
          d = Hn(m.label, h);
          break;
        }
    }
    return d;
  }, s = (g, u) => {
    var h;
    const { hidePrimaryColumnInTooltip: p } = t.general;
    let d = ((h = u.label) == null ? void 0 : h.length) > 0 ? u.label : "";
    return u.name === t.columns.primary.name && p || !d ? `<li class="tooltip-body">${g}</li>` : `<li class="tooltip-body">${d}: ${g}</li>`;
  }, c = (g, u) => {
    const p = ["data", "bubble", "us-geocode", "world-geocode", "map"], {
      general: { type: d },
      columns: h,
      legend: { specialClasses: m }
    } = t;
    return p.includes(d) && (u !== void 0 || t.general.geoType === "world") && (g += "<ul>", Object.keys(h).forEach((S) => {
      const y = t.columns[S];
      if (y.tooltip) {
        let w = o(m, y, u, "", S);
        w || (w = u ? Hn(u[y.name], S, t) : "No Data"), g += s(w, y);
      }
    }), g += "</ul>"), g;
  };
  return {
    buildTooltip: (g, u, p = "") => {
      if (!(!g && t.general.geoType !== "world"))
        return p += a(p, g), p += i(u), p = c(p, g), p;
    }
  };
}, Nd = (e) => /* @__PURE__ */ P.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ P.createElement("path", { d: "M432 320h-32c-8.837 0-16 7.163-16 16v112H64V128h144c8.837 0 16-7.163 16-16V80c0-8.837-7.163-16-16-16H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V336c0-8.837-7.163-16-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 000 34L157.67 377a24 24 0 0034 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24c0-13.255-10.745-24-24-24z", fillRule: "nonzero" })), qt = () => {
  const { config: e, customNavigationHandler: t } = P.useContext(fe), n = e.columns.navigate.name, { buildTooltip: a } = Td({ config: e, displayGeoName: Ie, supportedStatesFipsCodes: Wt });
  return { applyTooltipsToGeo: (o, s, c = "string") => {
    let r = a(s, o, "");
    return c === "jsx" && (typeof r == "string" && (r = [/* @__PURE__ */ l("div", { children: Rt(r) }, "modal-content")]), e.columns.hasOwnProperty("navigate") && s[n] && Array.isArray(r) && r.push(
      /* @__PURE__ */ E(
        "a",
        {
          href: "#",
          className: "navigation-link",
          onClick: (g) => {
            g.preventDefault(), za(e.general.navigationTarget, s[n], t);
          },
          children: [
            e.tooltips.linkLabel,
            T1(s[n]) && /* @__PURE__ */ l(Nd, { className: "inline-icon ms-1" })
          ]
        },
        "modal-navigation-link"
      )
    )), r;
  } };
}, Md = () => {
  const { content: e, config: t, currentViewport: n } = P.useContext(fe), { capitalizeLabels: a } = t.tooltips, { applyTooltipsToGeo: i } = qt(), o = i(e.geoName, e.keyedData, "jsx"), s = P.useContext(it);
  return /* @__PURE__ */ E(
    "section",
    {
      className: a ? "modal-content tooltip capitalize " + n : "modal-content tooltip " + n,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ l("div", { className: "content", children: o }),
        /* @__PURE__ */ l(
          de,
          {
            display: "close",
            alt: "Close Modal",
            size: 20,
            color: "#000",
            className: "modal-close",
            onClick: () => {
              s({ type: "SET_MODAL", payload: null });
            }
          }
        )
      ]
    }
  );
}, Ed = ({ data: e, navigationHandler: t, options: n, columns: a, displayGeoName: i, mapTabbingID: o }) => {
  P.useContext(fe);
  const [s, c] = P.useState(""), [r, g] = P.useState({}), u = (h) => {
    if (h.preventDefault(), s !== "") {
      const m = e[r[s]][a.navigate.name];
      t(m);
    }
  };
  let p, d;
  switch (n.language) {
    case "es":
      p = "Selecciona un Artículo", d = "Ir";
      break;
    default:
      p = "Select a Location", d = "Go";
  }
  return P.useEffect(() => {
    const h = {}, m = {};
    Object.keys(e).forEach((S) => {
      const y = i(S);
      m[y] = S;
    }), Object.keys(m).sort().forEach((S) => {
      h[S] = m[S];
    }), g(h), c(Object.keys(h)[0]);
  }, [e, i]), /* @__PURE__ */ l("section", { className: "navigation-menu", children: /* @__PURE__ */ l("form", { onSubmit: u, type: "get", children: /* @__PURE__ */ E("label", { htmlFor: o.replace("#", ""), children: [
    /* @__PURE__ */ l("div", { className: "select-heading", children: p }),
    /* @__PURE__ */ E("div", { className: "d-flex", children: [
      /* @__PURE__ */ l("select", { value: s, id: o.replace("#", ""), onChange: (h) => c(h.target.value), children: Object.keys(r).map((h) => /* @__PURE__ */ l("option", { value: h, children: h }, h)) }),
      /* @__PURE__ */ l("input", { type: "submit", value: d, className: `${n.headerColor} btn`, id: "cdcnavmap-dropdown-go" })
    ] })
  ] }) }) });
}, xd = "Topology", Pd = {
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
}, Dd = [
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
], Ad = [
  -138.251828,
  26.393432,
  -69.902864,
  55.313204
], Rd = {
  scale: [
    6834903234903234e-20,
    28919800919800915e-21
  ],
  translate: [
    -138.251828,
    26.393432
  ]
}, Jo = {
  type: xd,
  objects: Pd,
  arcs: Dd,
  bbox: Ad,
  transform: Rd
};
let gt = class {
  constructor() {
    this._partials = new Float64Array(32), this._n = 0;
  }
  add(t) {
    const n = this._partials;
    let a = 0;
    for (let i = 0; i < this._n && i < 32; i++) {
      const o = n[i], s = t + o, c = Math.abs(t) < Math.abs(o) ? t - (s - o) : o - (s - t);
      c && (n[a++] = c), t = s;
    }
    return n[a] = t, this._n = a + 1, this;
  }
  valueOf() {
    const t = this._partials;
    let n = this._n, a, i, o, s = 0;
    if (n > 0) {
      for (s = t[--n]; n > 0 && (a = s, i = t[--n], s = a + i, o = i - (s - a), !o); )
        ;
      n > 0 && (o < 0 && t[n - 1] < 0 || o > 0 && t[n - 1] > 0) && (i = o * 2, a = s + i, i == a - s && (s = a));
    }
    return s;
  }
};
function* Od(e) {
  for (const t of e)
    yield* t;
}
function _s(e) {
  return Array.from(Od(e));
}
var pe = 1e-6, _a = 1e-12, ce = Math.PI, Je = ce / 2, Qo = ce / 4, nt = ce * 2, $e = 180 / ce, se = ce / 180, we = Math.abs, Us = Math.atan, It = Math.atan2, he = Math.cos, Id = Math.exp, ir = Math.hypot, $d = Math.log, oe = Math.sin, xa = Math.sign || function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, ft = Math.sqrt, zd = Math.tan;
function _d(e) {
  return e > 1 ? 0 : e < -1 ? ce : Math.acos(e);
}
function $t(e) {
  return e > 1 ? Je : e < -1 ? -Je : Math.asin(e);
}
function De() {
}
function Ua(e, t) {
  e && tl.hasOwnProperty(e.type) && tl[e.type](e, t);
}
var el = {
  Feature: function(e, t) {
    Ua(e.geometry, t);
  },
  FeatureCollection: function(e, t) {
    for (var n = e.features, a = -1, i = n.length; ++a < i; )
      Ua(n[a].geometry, t);
  }
}, tl = {
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
    rr(e.coordinates, t, 0);
  },
  MultiLineString: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      rr(n[a], t, 0);
  },
  Polygon: function(e, t) {
    nl(e.coordinates, t);
  },
  MultiPolygon: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      nl(n[a], t);
  },
  GeometryCollection: function(e, t) {
    for (var n = e.geometries, a = -1, i = n.length; ++a < i; )
      Ua(n[a], t);
  }
};
function rr(e, t, n) {
  var a = -1, i = e.length - n, o;
  for (t.lineStart(); ++a < i; )
    o = e[a], t.point(o[0], o[1], o[2]);
  t.lineEnd();
}
function nl(e, t) {
  var n = -1, a = e.length;
  for (t.polygonStart(); ++n < a; )
    rr(e[n], t, 1);
  t.polygonEnd();
}
function At(e, t) {
  e && el.hasOwnProperty(e.type) ? el[e.type](e, t) : Ua(e, t);
}
function or(e) {
  return [It(e[1], e[0]), $t(e[2])];
}
function vn(e) {
  var t = e[0], n = e[1], a = he(n);
  return [a * he(t), a * oe(t), oe(n)];
}
function ga(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Fa(e, t) {
  return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
}
function Ai(e, t) {
  e[0] += t[0], e[1] += t[1], e[2] += t[2];
}
function fa(e, t) {
  return [e[0] * t, e[1] * t, e[2] * t];
}
function lr(e) {
  var t = ft(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
  e[0] /= t, e[1] /= t, e[2] /= t;
}
var In, Ga, Ba, Wa, ja, Va, Ha, qa, sr, cr, ur, Fs, Gs, qe, Ke, Ze, ht = {
  sphere: De,
  point: oo,
  lineStart: al,
  lineEnd: il,
  polygonStart: function() {
    ht.lineStart = Gd, ht.lineEnd = Bd;
  },
  polygonEnd: function() {
    ht.lineStart = al, ht.lineEnd = il;
  }
};
function oo(e, t) {
  e *= se, t *= se;
  var n = he(t);
  sa(n * he(e), n * oe(e), oe(t));
}
function sa(e, t, n) {
  ++In, Ba += (e - Ba) / In, Wa += (t - Wa) / In, ja += (n - ja) / In;
}
function al() {
  ht.point = Ud;
}
function Ud(e, t) {
  e *= se, t *= se;
  var n = he(t);
  qe = n * he(e), Ke = n * oe(e), Ze = oe(t), ht.point = Fd, sa(qe, Ke, Ze);
}
function Fd(e, t) {
  e *= se, t *= se;
  var n = he(t), a = n * he(e), i = n * oe(e), o = oe(t), s = It(ft((s = Ke * o - Ze * i) * s + (s = Ze * a - qe * o) * s + (s = qe * i - Ke * a) * s), qe * a + Ke * i + Ze * o);
  Ga += s, Va += s * (qe + (qe = a)), Ha += s * (Ke + (Ke = i)), qa += s * (Ze + (Ze = o)), sa(qe, Ke, Ze);
}
function il() {
  ht.point = oo;
}
function Gd() {
  ht.point = Wd;
}
function Bd() {
  Bs(Fs, Gs), ht.point = oo;
}
function Wd(e, t) {
  Fs = e, Gs = t, e *= se, t *= se, ht.point = Bs;
  var n = he(t);
  qe = n * he(e), Ke = n * oe(e), Ze = oe(t), sa(qe, Ke, Ze);
}
function Bs(e, t) {
  e *= se, t *= se;
  var n = he(t), a = n * he(e), i = n * oe(e), o = oe(t), s = Ke * o - Ze * i, c = Ze * a - qe * o, r = qe * i - Ke * a, g = ir(s, c, r), u = $t(g), p = g && -u / g;
  sr.add(p * s), cr.add(p * c), ur.add(p * r), Ga += u, Va += u * (qe + (qe = a)), Ha += u * (Ke + (Ke = i)), qa += u * (Ze + (Ze = o)), sa(qe, Ke, Ze);
}
function ia(e) {
  In = Ga = Ba = Wa = ja = Va = Ha = qa = 0, sr = new gt(), cr = new gt(), ur = new gt(), At(e, ht);
  var t = +sr, n = +cr, a = +ur, i = ir(t, n, a);
  return i < _a && (t = Va, n = Ha, a = qa, Ga < pe && (t = Ba, n = Wa, a = ja), i = ir(t, n, a), i < _a) ? [NaN, NaN] : [It(n, t) * $e, $t(a / i) * $e];
}
function dr(e, t) {
  function n(a, i) {
    return a = e(a, i), t(a[0], a[1]);
  }
  return e.invert && t.invert && (n.invert = function(a, i) {
    return a = t.invert(a, i), a && e.invert(a[0], a[1]);
  }), n;
}
function pr(e, t) {
  return [we(e) > ce ? e + Math.round(-e / nt) * nt : e, t];
}
pr.invert = pr;
function Ws(e, t, n) {
  return (e %= nt) ? t || n ? dr(ol(e), ll(t, n)) : ol(e) : t || n ? ll(t, n) : pr;
}
function rl(e) {
  return function(t, n) {
    return t += e, [t > ce ? t - nt : t < -ce ? t + nt : t, n];
  };
}
function ol(e) {
  var t = rl(e);
  return t.invert = rl(-e), t;
}
function ll(e, t) {
  var n = he(e), a = oe(e), i = he(t), o = oe(t);
  function s(c, r) {
    var g = he(r), u = he(c) * g, p = oe(c) * g, d = oe(r), h = d * n + u * a;
    return [
      It(p * i - h * o, u * n - d * a),
      $t(h * i + p * o)
    ];
  }
  return s.invert = function(c, r) {
    var g = he(r), u = he(c) * g, p = oe(c) * g, d = oe(r), h = d * i - p * o;
    return [
      It(p * i + d * o, u * n + h * a),
      $t(h * n - u * a)
    ];
  }, s;
}
function jd(e) {
  e = Ws(e[0] * se, e[1] * se, e.length > 2 ? e[2] * se : 0);
  function t(n) {
    return n = e(n[0] * se, n[1] * se), n[0] *= $e, n[1] *= $e, n;
  }
  return t.invert = function(n) {
    return n = e.invert(n[0] * se, n[1] * se), n[0] *= $e, n[1] *= $e, n;
  }, t;
}
function Vd(e, t, n, a, i, o) {
  if (n) {
    var s = he(t), c = oe(t), r = a * n;
    i == null ? (i = t + a * nt, o = t - r / 2) : (i = sl(s, i), o = sl(s, o), (a > 0 ? i < o : i > o) && (i += a * nt));
    for (var g, u = i; a > 0 ? u > o : u < o; u -= r)
      g = or([s, -c * he(u), -c * oe(u)]), e.point(g[0], g[1]);
  }
}
function sl(e, t) {
  t = vn(t), t[0] -= e, lr(t);
  var n = _d(-t[1]);
  return ((-t[2] < 0 ? -n : n) + nt - pe) % nt;
}
function js() {
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
function Pa(e, t) {
  return we(e[0] - t[0]) < pe && we(e[1] - t[1]) < pe;
}
function ma(e, t, n, a) {
  this.x = e, this.z = t, this.o = n, this.e = a, this.v = !1, this.n = this.p = null;
}
function Vs(e, t, n, a, i) {
  var o = [], s = [], c, r;
  if (e.forEach(function(m) {
    if (!((S = m.length - 1) <= 0)) {
      var S, y = m[0], w = m[S], k;
      if (Pa(y, w)) {
        if (!y[2] && !w[2]) {
          for (i.lineStart(), c = 0; c < S; ++c)
            i.point((y = m[c])[0], y[1]);
          i.lineEnd();
          return;
        }
        w[0] += 2 * pe;
      }
      o.push(k = new ma(y, m, null, !0)), s.push(k.o = new ma(y, null, k, !1)), o.push(k = new ma(w, m, null, !1)), s.push(k.o = new ma(w, null, k, !0));
    }
  }), !!o.length) {
    for (s.sort(t), cl(o), cl(s), c = 0, r = s.length; c < r; ++c)
      s[c].e = n = !n;
    for (var g = o[0], u, p; ; ) {
      for (var d = g, h = !0; d.v; )
        if ((d = d.n) === g)
          return;
      u = d.z, i.lineStart();
      do {
        if (d.v = d.o.v = !0, d.e) {
          if (h)
            for (c = 0, r = u.length; c < r; ++c)
              i.point((p = u[c])[0], p[1]);
          else
            a(d.x, d.n.x, 1, i);
          d = d.n;
        } else {
          if (h)
            for (u = d.p.z, c = u.length - 1; c >= 0; --c)
              i.point((p = u[c])[0], p[1]);
          else
            a(d.x, d.p.x, -1, i);
          d = d.p;
        }
        d = d.o, u = d.z, h = !h;
      } while (!d.v);
      i.lineEnd();
    }
  }
}
function cl(e) {
  if (t = e.length) {
    for (var t, n = 0, a = e[0], i; ++n < t; )
      a.n = i = e[n], i.p = a, a = i;
    a.n = i = e[0], i.p = a;
  }
}
function Ri(e) {
  return we(e[0]) <= ce ? e[0] : xa(e[0]) * ((we(e[0]) + ce) % nt - ce);
}
function Hs(e, t) {
  var n = Ri(t), a = t[1], i = oe(a), o = [oe(n), -he(n), 0], s = 0, c = 0, r = new gt();
  i === 1 ? a = Je + pe : i === -1 && (a = -Je - pe);
  for (var g = 0, u = e.length; g < u; ++g)
    if (d = (p = e[g]).length)
      for (var p, d, h = p[d - 1], m = Ri(h), S = h[1] / 2 + Qo, y = oe(S), w = he(S), k = 0; k < d; ++k, m = T, y = M, w = x, h = f) {
        var f = p[k], T = Ri(f), L = f[1] / 2 + Qo, M = oe(L), x = he(L), R = T - m, z = R >= 0 ? 1 : -1, F = z * R, I = F > ce, $ = y * M;
        if (r.add(It($ * z * oe(F), w * x + $ * he(F))), s += I ? R + z * nt : R, I ^ m >= n ^ T >= n) {
          var U = Fa(vn(h), vn(f));
          lr(U);
          var b = Fa(o, U);
          lr(b);
          var C = (I ^ R >= 0 ? -1 : 1) * $t(b[2]);
          (a > C || a === C && (U[0] || U[1])) && (c += I ^ R >= 0 ? 1 : -1);
        }
      }
  return (s < -pe || s < pe && r < -_a) ^ c & 1;
}
function qs(e, t, n, a) {
  return function(i) {
    var o = t(i), s = js(), c = t(s), r = !1, g, u, p, d = {
      point: h,
      lineStart: S,
      lineEnd: y,
      polygonStart: function() {
        d.point = w, d.lineStart = k, d.lineEnd = f, u = [], g = [];
      },
      polygonEnd: function() {
        d.point = h, d.lineStart = S, d.lineEnd = y, u = _s(u);
        var T = Hs(g, a);
        u.length ? (r || (i.polygonStart(), r = !0), Vs(u, qd, T, n, i)) : T && (r || (i.polygonStart(), r = !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), r && (i.polygonEnd(), r = !1), u = g = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), n(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function h(T, L) {
      e(T, L) && i.point(T, L);
    }
    function m(T, L) {
      o.point(T, L);
    }
    function S() {
      d.point = m, o.lineStart();
    }
    function y() {
      d.point = h, o.lineEnd();
    }
    function w(T, L) {
      p.push([T, L]), c.point(T, L);
    }
    function k() {
      c.lineStart(), p = [];
    }
    function f() {
      w(p[0][0], p[0][1]), c.lineEnd();
      var T = c.clean(), L = s.result(), M, x = L.length, R, z, F;
      if (p.pop(), g.push(p), p = null, !!x) {
        if (T & 1) {
          if (z = L[0], (R = z.length - 1) > 0) {
            for (r || (i.polygonStart(), r = !0), i.lineStart(), M = 0; M < R; ++M)
              i.point((F = z[M])[0], F[1]);
            i.lineEnd();
          }
          return;
        }
        x > 1 && T & 2 && L.push(L.pop().concat(L.shift())), u.push(L.filter(Hd));
      }
    }
    return d;
  };
}
function Hd(e) {
  return e.length > 1;
}
function qd(e, t) {
  return ((e = e.x)[0] < 0 ? e[1] - Je - pe : Je - e[1]) - ((t = t.x)[0] < 0 ? t[1] - Je - pe : Je - t[1]);
}
const ul = qs(
  function() {
    return !0;
  },
  Kd,
  Yd,
  [-ce, -Je]
);
function Kd(e) {
  var t = NaN, n = NaN, a = NaN, i;
  return {
    lineStart: function() {
      e.lineStart(), i = 1;
    },
    point: function(o, s) {
      var c = o > 0 ? ce : -ce, r = we(o - t);
      we(r - ce) < pe ? (e.point(t, n = (n + s) / 2 > 0 ? Je : -Je), e.point(a, n), e.lineEnd(), e.lineStart(), e.point(c, n), e.point(o, n), i = 0) : a !== c && r >= ce && (we(t - a) < pe && (t -= a * pe), we(o - c) < pe && (o -= c * pe), n = Zd(t, n, o, s), e.point(a, n), e.lineEnd(), e.lineStart(), e.point(c, n), i = 0), e.point(t = o, n = s), a = c;
    },
    lineEnd: function() {
      e.lineEnd(), t = n = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function Zd(e, t, n, a) {
  var i, o, s = oe(e - n);
  return we(s) > pe ? Us((oe(t) * (o = he(a)) * oe(n) - oe(a) * (i = he(t)) * oe(e)) / (i * o * s)) : (t + a) / 2;
}
function Yd(e, t, n, a) {
  var i;
  if (e == null)
    i = n * Je, a.point(-ce, i), a.point(0, i), a.point(ce, i), a.point(ce, 0), a.point(ce, -i), a.point(0, -i), a.point(-ce, -i), a.point(-ce, 0), a.point(-ce, i);
  else if (we(e[0] - t[0]) > pe) {
    var o = e[0] < t[0] ? ce : -ce;
    i = n * o / 2, a.point(-o, i), a.point(0, i), a.point(o, i);
  } else
    a.point(t[0], t[1]);
}
function Xd(e) {
  var t = he(e), n = 6 * se, a = t > 0, i = we(t) > pe;
  function o(u, p, d, h) {
    Vd(h, e, n, d, u, p);
  }
  function s(u, p) {
    return he(u) * he(p) > t;
  }
  function c(u) {
    var p, d, h, m, S;
    return {
      lineStart: function() {
        m = h = !1, S = 1;
      },
      point: function(y, w) {
        var k = [y, w], f, T = s(y, w), L = a ? T ? 0 : g(y, w) : T ? g(y + (y < 0 ? ce : -ce), w) : 0;
        if (!p && (m = h = T) && u.lineStart(), T !== h && (f = r(p, k), (!f || Pa(p, f) || Pa(k, f)) && (k[2] = 1)), T !== h)
          S = 0, T ? (u.lineStart(), f = r(k, p), u.point(f[0], f[1])) : (f = r(p, k), u.point(f[0], f[1], 2), u.lineEnd()), p = f;
        else if (i && p && a ^ T) {
          var M;
          !(L & d) && (M = r(k, p, !0)) && (S = 0, a ? (u.lineStart(), u.point(M[0][0], M[0][1]), u.point(M[1][0], M[1][1]), u.lineEnd()) : (u.point(M[1][0], M[1][1]), u.lineEnd(), u.lineStart(), u.point(M[0][0], M[0][1], 3)));
        }
        T && (!p || !Pa(p, k)) && u.point(k[0], k[1]), p = k, h = T, d = L;
      },
      lineEnd: function() {
        h && u.lineEnd(), p = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return S | (m && h) << 1;
      }
    };
  }
  function r(u, p, d) {
    var h = vn(u), m = vn(p), S = [1, 0, 0], y = Fa(h, m), w = ga(y, y), k = y[0], f = w - k * k;
    if (!f)
      return !d && u;
    var T = t * w / f, L = -t * k / f, M = Fa(S, y), x = fa(S, T), R = fa(y, L);
    Ai(x, R);
    var z = M, F = ga(x, z), I = ga(z, z), $ = F * F - I * (ga(x, x) - 1);
    if (!($ < 0)) {
      var U = ft($), b = fa(z, (-F - U) / I);
      if (Ai(b, x), b = or(b), !d)
        return b;
      var C = u[0], N = p[0], A = u[1], _ = p[1], O;
      N < C && (O = C, C = N, N = O);
      var G = N - C, W = we(G - ce) < pe, B = W || G < pe;
      if (!W && _ < A && (O = A, A = _, _ = O), B ? W ? A + _ > 0 ^ b[1] < (we(b[0] - C) < pe ? A : _) : A <= b[1] && b[1] <= _ : G > ce ^ (C <= b[0] && b[0] <= N)) {
        var j = fa(z, (-F + U) / I);
        return Ai(j, x), [b, or(j)];
      }
    }
  }
  function g(u, p) {
    var d = a ? e : ce - e, h = 0;
    return u < -d ? h |= 1 : u > d && (h |= 2), p < -d ? h |= 4 : p > d && (h |= 8), h;
  }
  return qs(s, c, o, a ? [0, -e] : [-ce, e - ce]);
}
function Jd(e, t, n, a, i, o) {
  var s = e[0], c = e[1], r = t[0], g = t[1], u = 0, p = 1, d = r - s, h = g - c, m;
  if (m = n - s, !(!d && m > 0)) {
    if (m /= d, d < 0) {
      if (m < u)
        return;
      m < p && (p = m);
    } else if (d > 0) {
      if (m > p)
        return;
      m > u && (u = m);
    }
    if (m = i - s, !(!d && m < 0)) {
      if (m /= d, d < 0) {
        if (m > p)
          return;
        m > u && (u = m);
      } else if (d > 0) {
        if (m < u)
          return;
        m < p && (p = m);
      }
      if (m = a - c, !(!h && m > 0)) {
        if (m /= h, h < 0) {
          if (m < u)
            return;
          m < p && (p = m);
        } else if (h > 0) {
          if (m > p)
            return;
          m > u && (u = m);
        }
        if (m = o - c, !(!h && m < 0)) {
          if (m /= h, h < 0) {
            if (m > p)
              return;
            m > u && (u = m);
          } else if (h > 0) {
            if (m < u)
              return;
            m < p && (p = m);
          }
          return u > 0 && (e[0] = s + u * d, e[1] = c + u * h), p < 1 && (t[0] = s + p * d, t[1] = c + p * h), !0;
        }
      }
    }
  }
}
var $n = 1e9, ya = -$n;
function Qd(e, t, n, a) {
  function i(g, u) {
    return e <= g && g <= n && t <= u && u <= a;
  }
  function o(g, u, p, d) {
    var h = 0, m = 0;
    if (g == null || (h = s(g, p)) !== (m = s(u, p)) || r(g, u) < 0 ^ p > 0)
      do
        d.point(h === 0 || h === 3 ? e : n, h > 1 ? a : t);
      while ((h = (h + p + 4) % 4) !== m);
    else
      d.point(u[0], u[1]);
  }
  function s(g, u) {
    return we(g[0] - e) < pe ? u > 0 ? 0 : 3 : we(g[0] - n) < pe ? u > 0 ? 2 : 1 : we(g[1] - t) < pe ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2;
  }
  function c(g, u) {
    return r(g.x, u.x);
  }
  function r(g, u) {
    var p = s(g, 1), d = s(u, 1);
    return p !== d ? p - d : p === 0 ? u[1] - g[1] : p === 1 ? g[0] - u[0] : p === 2 ? g[1] - u[1] : u[0] - g[0];
  }
  return function(g) {
    var u = g, p = js(), d, h, m, S, y, w, k, f, T, L, M, x = {
      point: R,
      lineStart: $,
      lineEnd: U,
      polygonStart: F,
      polygonEnd: I
    };
    function R(C, N) {
      i(C, N) && u.point(C, N);
    }
    function z() {
      for (var C = 0, N = 0, A = h.length; N < A; ++N)
        for (var _ = h[N], O = 1, G = _.length, W = _[0], B, j, H = W[0], K = W[1]; O < G; ++O)
          B = H, j = K, W = _[O], H = W[0], K = W[1], j <= a ? K > a && (H - B) * (a - j) > (K - j) * (e - B) && ++C : K <= a && (H - B) * (a - j) < (K - j) * (e - B) && --C;
      return C;
    }
    function F() {
      u = p, d = [], h = [], M = !0;
    }
    function I() {
      var C = z(), N = M && C, A = (d = _s(d)).length;
      (N || A) && (g.polygonStart(), N && (g.lineStart(), o(null, null, 1, g), g.lineEnd()), A && Vs(d, c, C, o, g), g.polygonEnd()), u = g, d = h = m = null;
    }
    function $() {
      x.point = b, h && h.push(m = []), L = !0, T = !1, k = f = NaN;
    }
    function U() {
      d && (b(S, y), w && T && p.rejoin(), d.push(p.result())), x.point = R, T && u.lineEnd();
    }
    function b(C, N) {
      var A = i(C, N);
      if (h && m.push([C, N]), L)
        S = C, y = N, w = A, L = !1, A && (u.lineStart(), u.point(C, N));
      else if (A && T)
        u.point(C, N);
      else {
        var _ = [k = Math.max(ya, Math.min($n, k)), f = Math.max(ya, Math.min($n, f))], O = [C = Math.max(ya, Math.min($n, C)), N = Math.max(ya, Math.min($n, N))];
        Jd(_, O, e, t, n, a) ? (T || (u.lineStart(), u.point(_[0], _[1])), u.point(O[0], O[1]), A || u.lineEnd(), M = !1) : A && (u.lineStart(), u.point(C, N), M = !1);
      }
      k = C, f = N, T = A;
    }
    return x;
  };
}
var hr, gr, Da, Aa, kn = {
  sphere: De,
  point: De,
  lineStart: ep,
  lineEnd: De,
  polygonStart: De,
  polygonEnd: De
};
function ep() {
  kn.point = np, kn.lineEnd = tp;
}
function tp() {
  kn.point = kn.lineEnd = De;
}
function np(e, t) {
  e *= se, t *= se, gr = e, Da = oe(t), Aa = he(t), kn.point = ap;
}
function ap(e, t) {
  e *= se, t *= se;
  var n = oe(t), a = he(t), i = we(e - gr), o = he(i), s = oe(i), c = a * s, r = Aa * n - Da * a * o, g = Da * n + Aa * a * o;
  hr.add(It(ft(c * c + r * r), g)), gr = e, Da = n, Aa = a;
}
function ip(e) {
  return hr = new gt(), At(e, kn), +hr;
}
var fr = [null, null], rp = { type: "LineString", coordinates: fr };
function mr(e, t) {
  return fr[0] = e, fr[1] = t, ip(rp);
}
var dl = {
  Feature: function(e, t) {
    return Ka(e.geometry, t);
  },
  FeatureCollection: function(e, t) {
    for (var n = e.features, a = -1, i = n.length; ++a < i; )
      if (Ka(n[a].geometry, t))
        return !0;
    return !1;
  }
}, pl = {
  Sphere: function() {
    return !0;
  },
  Point: function(e, t) {
    return hl(e.coordinates, t);
  },
  MultiPoint: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      if (hl(n[a], t))
        return !0;
    return !1;
  },
  LineString: function(e, t) {
    return gl(e.coordinates, t);
  },
  MultiLineString: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      if (gl(n[a], t))
        return !0;
    return !1;
  },
  Polygon: function(e, t) {
    return fl(e.coordinates, t);
  },
  MultiPolygon: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      if (fl(n[a], t))
        return !0;
    return !1;
  },
  GeometryCollection: function(e, t) {
    for (var n = e.geometries, a = -1, i = n.length; ++a < i; )
      if (Ka(n[a], t))
        return !0;
    return !1;
  }
};
function Ka(e, t) {
  return e && pl.hasOwnProperty(e.type) ? pl[e.type](e, t) : !1;
}
function hl(e, t) {
  return mr(e, t) === 0;
}
function gl(e, t) {
  for (var n, a, i, o = 0, s = e.length; o < s; o++) {
    if (a = mr(e[o], t), a === 0 || o > 0 && (i = mr(e[o], e[o - 1]), i > 0 && n <= i && a <= i && (n + a - i) * (1 - Math.pow((n - a) / i, 2)) < _a * i))
      return !0;
    n = a;
  }
  return !1;
}
function fl(e, t) {
  return !!Hs(e.map(op), Ks(t));
}
function op(e) {
  return e = e.map(Ks), e.pop(), e;
}
function Ks(e) {
  return [e[0] * se, e[1] * se];
}
function An(e, t) {
  return (e && dl.hasOwnProperty(e.type) ? dl[e.type] : Ka)(e, t);
}
const yr = (e) => e;
var Oi = new gt(), Cr = new gt(), Zs, Ys, Sr, br, Ft = {
  point: De,
  lineStart: De,
  lineEnd: De,
  polygonStart: function() {
    Ft.lineStart = lp, Ft.lineEnd = cp;
  },
  polygonEnd: function() {
    Ft.lineStart = Ft.lineEnd = Ft.point = De, Oi.add(we(Cr)), Cr = new gt();
  },
  result: function() {
    var e = Oi / 2;
    return Oi = new gt(), e;
  }
};
function lp() {
  Ft.point = sp;
}
function sp(e, t) {
  Ft.point = Xs, Zs = Sr = e, Ys = br = t;
}
function Xs(e, t) {
  Cr.add(br * e - Sr * t), Sr = e, br = t;
}
function cp() {
  Xs(Zs, Ys);
}
const ml = Ft;
var Ln = 1 / 0, Za = Ln, ra = -Ln, Ya = ra, up = {
  point: dp,
  lineStart: De,
  lineEnd: De,
  polygonStart: De,
  polygonEnd: De,
  result: function() {
    var e = [[Ln, Za], [ra, Ya]];
    return ra = Ya = -(Za = Ln = 1 / 0), e;
  }
};
function dp(e, t) {
  e < Ln && (Ln = e), e > ra && (ra = e), t < Za && (Za = t), t > Ya && (Ya = t);
}
const Xa = up;
var vr = 0, kr = 0, zn = 0, Ja = 0, Qa = 0, gn = 0, Lr = 0, wr = 0, _n = 0, Js, Qs, Lt, wt, dt = {
  point: on,
  lineStart: yl,
  lineEnd: Cl,
  polygonStart: function() {
    dt.lineStart = gp, dt.lineEnd = fp;
  },
  polygonEnd: function() {
    dt.point = on, dt.lineStart = yl, dt.lineEnd = Cl;
  },
  result: function() {
    var e = _n ? [Lr / _n, wr / _n] : gn ? [Ja / gn, Qa / gn] : zn ? [vr / zn, kr / zn] : [NaN, NaN];
    return vr = kr = zn = Ja = Qa = gn = Lr = wr = _n = 0, e;
  }
};
function on(e, t) {
  vr += e, kr += t, ++zn;
}
function yl() {
  dt.point = pp;
}
function pp(e, t) {
  dt.point = hp, on(Lt = e, wt = t);
}
function hp(e, t) {
  var n = e - Lt, a = t - wt, i = ft(n * n + a * a);
  Ja += i * (Lt + e) / 2, Qa += i * (wt + t) / 2, gn += i, on(Lt = e, wt = t);
}
function Cl() {
  dt.point = on;
}
function gp() {
  dt.point = mp;
}
function fp() {
  ec(Js, Qs);
}
function mp(e, t) {
  dt.point = ec, on(Js = Lt = e, Qs = wt = t);
}
function ec(e, t) {
  var n = e - Lt, a = t - wt, i = ft(n * n + a * a);
  Ja += i * (Lt + e) / 2, Qa += i * (wt + t) / 2, gn += i, i = wt * e - Lt * t, Lr += i * (Lt + e), wr += i * (wt + t), _n += i * 3, on(Lt = e, wt = t);
}
const Sl = dt;
function tc(e) {
  this._context = e;
}
tc.prototype = {
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
var Tr = new gt(), Ii, nc, ac, Un, Fn, ei = {
  point: De,
  lineStart: function() {
    ei.point = yp;
  },
  lineEnd: function() {
    Ii && ic(nc, ac), ei.point = De;
  },
  polygonStart: function() {
    Ii = !0;
  },
  polygonEnd: function() {
    Ii = null;
  },
  result: function() {
    var e = +Tr;
    return Tr = new gt(), e;
  }
};
function yp(e, t) {
  ei.point = ic, nc = Un = e, ac = Fn = t;
}
function ic(e, t) {
  Un -= e, Fn -= t, Tr.add(ft(Un * Un + Fn * Fn)), Un = e, Fn = t;
}
const bl = ei;
function rc() {
  this._string = [];
}
rc.prototype = {
  _radius: 4.5,
  _circle: vl(4.5),
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
        this._circle == null && (this._circle = vl(this._radius)), this._string.push("M", e, ",", t, this._circle);
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
function vl(e) {
  return "m0," + e + "a" + e + "," + e + " 0 1,1 0," + -2 * e + "a" + e + "," + e + " 0 1,1 0," + 2 * e + "z";
}
function Cn(e, t) {
  var n = 4.5, a, i;
  function o(s) {
    return s && (typeof n == "function" && i.pointRadius(+n.apply(this, arguments)), At(s, a(i))), i.result();
  }
  return o.area = function(s) {
    return At(s, a(ml)), ml.result();
  }, o.measure = function(s) {
    return At(s, a(bl)), bl.result();
  }, o.bounds = function(s) {
    return At(s, a(Xa)), Xa.result();
  }, o.centroid = function(s) {
    return At(s, a(Sl)), Sl.result();
  }, o.projection = function(s) {
    return arguments.length ? (a = s == null ? (e = null, yr) : (e = s).stream, o) : e;
  }, o.context = function(s) {
    return arguments.length ? (i = s == null ? (t = null, new rc()) : new tc(t = s), typeof n != "function" && i.pointRadius(n), o) : t;
  }, o.pointRadius = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : (i.pointRadius(+s), +s), o) : n;
  }, o.projection(e).context(t);
}
function lo(e) {
  return function(t) {
    var n = new Nr();
    for (var a in e)
      n[a] = e[a];
    return n.stream = t, n;
  };
}
function Nr() {
}
Nr.prototype = {
  constructor: Nr,
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
function so(e, t, n) {
  var a = e.clipExtent && e.clipExtent();
  return e.scale(150).translate([0, 0]), a != null && e.clipExtent(null), At(n, e.stream(Xa)), t(Xa.result()), a != null && e.clipExtent(a), e;
}
function co(e, t, n) {
  return so(e, function(a) {
    var i = t[1][0] - t[0][0], o = t[1][1] - t[0][1], s = Math.min(i / (a[1][0] - a[0][0]), o / (a[1][1] - a[0][1])), c = +t[0][0] + (i - s * (a[1][0] + a[0][0])) / 2, r = +t[0][1] + (o - s * (a[1][1] + a[0][1])) / 2;
    e.scale(150 * s).translate([c, r]);
  }, n);
}
function oc(e, t, n) {
  return co(e, [[0, 0], t], n);
}
function lc(e, t, n) {
  return so(e, function(a) {
    var i = +t, o = i / (a[1][0] - a[0][0]), s = (i - o * (a[1][0] + a[0][0])) / 2, c = -o * a[0][1];
    e.scale(150 * o).translate([s, c]);
  }, n);
}
function sc(e, t, n) {
  return so(e, function(a) {
    var i = +t, o = i / (a[1][1] - a[0][1]), s = -o * a[0][0], c = (i - o * (a[1][1] + a[0][1])) / 2;
    e.scale(150 * o).translate([s, c]);
  }, n);
}
var kl = 16, Cp = he(30 * se);
function Ll(e, t) {
  return +t ? bp(e, t) : Sp(e);
}
function Sp(e) {
  return lo({
    point: function(t, n) {
      t = e(t, n), this.stream.point(t[0], t[1]);
    }
  });
}
function bp(e, t) {
  function n(a, i, o, s, c, r, g, u, p, d, h, m, S, y) {
    var w = g - a, k = u - i, f = w * w + k * k;
    if (f > 4 * t && S--) {
      var T = s + d, L = c + h, M = r + m, x = ft(T * T + L * L + M * M), R = $t(M /= x), z = we(we(M) - 1) < pe || we(o - p) < pe ? (o + p) / 2 : It(L, T), F = e(z, R), I = F[0], $ = F[1], U = I - a, b = $ - i, C = k * U - w * b;
      (C * C / f > t || we((w * U + k * b) / f - 0.5) > 0.3 || s * d + c * h + r * m < Cp) && (n(a, i, o, s, c, r, I, $, z, T /= x, L /= x, M, S, y), y.point(I, $), n(I, $, z, T, L, M, g, u, p, d, h, m, S, y));
    }
  }
  return function(a) {
    var i, o, s, c, r, g, u, p, d, h, m, S, y = {
      point: w,
      lineStart: k,
      lineEnd: T,
      polygonStart: function() {
        a.polygonStart(), y.lineStart = L;
      },
      polygonEnd: function() {
        a.polygonEnd(), y.lineStart = k;
      }
    };
    function w(R, z) {
      R = e(R, z), a.point(R[0], R[1]);
    }
    function k() {
      p = NaN, y.point = f, a.lineStart();
    }
    function f(R, z) {
      var F = vn([R, z]), I = e(R, z);
      n(p, d, u, h, m, S, p = I[0], d = I[1], u = R, h = F[0], m = F[1], S = F[2], kl, a), a.point(p, d);
    }
    function T() {
      y.point = w, a.lineEnd();
    }
    function L() {
      k(), y.point = M, y.lineEnd = x;
    }
    function M(R, z) {
      f(i = R, z), o = p, s = d, c = h, r = m, g = S, y.point = f;
    }
    function x() {
      n(p, d, u, h, m, S, o, s, i, c, r, g, kl, a), y.lineEnd = T, T();
    }
    return y;
  };
}
var vp = lo({
  point: function(e, t) {
    this.stream.point(e * se, t * se);
  }
});
function kp(e) {
  return lo({
    point: function(t, n) {
      var a = e(t, n);
      return this.stream.point(a[0], a[1]);
    }
  });
}
function Lp(e, t, n, a, i) {
  function o(s, c) {
    return s *= a, c *= i, [t + e * s, n - e * c];
  }
  return o.invert = function(s, c) {
    return [(s - t) / e * a, (n - c) / e * i];
  }, o;
}
function wl(e, t, n, a, i, o) {
  if (!o)
    return Lp(e, t, n, a, i);
  var s = he(o), c = oe(o), r = s * e, g = c * e, u = s / e, p = c / e, d = (c * n - s * t) / e, h = (c * t + s * n) / e;
  function m(S, y) {
    return S *= a, y *= i, [r * S - g * y + t, n - g * S - r * y];
  }
  return m.invert = function(S, y) {
    return [a * (u * S - p * y + d), i * (h - p * S - u * y)];
  }, m;
}
function cc(e) {
  return uc(function() {
    return e;
  })();
}
function uc(e) {
  var t, n = 150, a = 480, i = 250, o = 0, s = 0, c = 0, r = 0, g = 0, u, p = 0, d = 1, h = 1, m = null, S = ul, y = null, w, k, f, T = yr, L = 0.5, M, x, R, z, F;
  function I(C) {
    return R(C[0] * se, C[1] * se);
  }
  function $(C) {
    return C = R.invert(C[0], C[1]), C && [C[0] * $e, C[1] * $e];
  }
  I.stream = function(C) {
    return z && F === C ? z : z = vp(kp(u)(S(M(T(F = C)))));
  }, I.preclip = function(C) {
    return arguments.length ? (S = C, m = void 0, b()) : S;
  }, I.postclip = function(C) {
    return arguments.length ? (T = C, y = w = k = f = null, b()) : T;
  }, I.clipAngle = function(C) {
    return arguments.length ? (S = +C ? Xd(m = C * se) : (m = null, ul), b()) : m * $e;
  }, I.clipExtent = function(C) {
    return arguments.length ? (T = C == null ? (y = w = k = f = null, yr) : Qd(y = +C[0][0], w = +C[0][1], k = +C[1][0], f = +C[1][1]), b()) : y == null ? null : [[y, w], [k, f]];
  }, I.scale = function(C) {
    return arguments.length ? (n = +C, U()) : n;
  }, I.translate = function(C) {
    return arguments.length ? (a = +C[0], i = +C[1], U()) : [a, i];
  }, I.center = function(C) {
    return arguments.length ? (o = C[0] % 360 * se, s = C[1] % 360 * se, U()) : [o * $e, s * $e];
  }, I.rotate = function(C) {
    return arguments.length ? (c = C[0] % 360 * se, r = C[1] % 360 * se, g = C.length > 2 ? C[2] % 360 * se : 0, U()) : [c * $e, r * $e, g * $e];
  }, I.angle = function(C) {
    return arguments.length ? (p = C % 360 * se, U()) : p * $e;
  }, I.reflectX = function(C) {
    return arguments.length ? (d = C ? -1 : 1, U()) : d < 0;
  }, I.reflectY = function(C) {
    return arguments.length ? (h = C ? -1 : 1, U()) : h < 0;
  }, I.precision = function(C) {
    return arguments.length ? (M = Ll(x, L = C * C), b()) : ft(L);
  }, I.fitExtent = function(C, N) {
    return co(I, C, N);
  }, I.fitSize = function(C, N) {
    return oc(I, C, N);
  }, I.fitWidth = function(C, N) {
    return lc(I, C, N);
  }, I.fitHeight = function(C, N) {
    return sc(I, C, N);
  };
  function U() {
    var C = wl(n, 0, 0, d, h, p).apply(null, t(o, s)), N = wl(n, a - C[0], i - C[1], d, h, p);
    return u = Ws(c, r, g), x = dr(t, N), R = dr(u, x), M = Ll(x, L), b();
  }
  function b() {
    return z = F = null, I;
  }
  return function() {
    return t = e.apply(this, arguments), I.invert = t.invert && $, U();
  };
}
function wp(e) {
  var t = 0, n = ce / 3, a = uc(e), i = a(t, n);
  return i.parallels = function(o) {
    return arguments.length ? a(t = o[0] * se, n = o[1] * se) : [t * $e, n * $e];
  }, i;
}
function Tp(e) {
  var t = he(e);
  function n(a, i) {
    return [a * t, oe(i) / t];
  }
  return n.invert = function(a, i) {
    return [a / t, $t(i * t)];
  }, n;
}
function Np(e, t) {
  var n = oe(e), a = (n + oe(t)) / 2;
  if (we(a) < pe)
    return Tp(e);
  var i = 1 + n * (2 * a - n), o = ft(i) / a;
  function s(c, r) {
    var g = ft(i - 2 * a * oe(r)) / a;
    return [g * oe(c *= a), o - g * he(c)];
  }
  return s.invert = function(c, r) {
    var g = o - r, u = It(c, we(g)) * xa(g);
    return g * a < 0 && (u -= ce * xa(c) * xa(g)), [u / a, $t((i - (c * c + g * g) * a * a) / (2 * a))];
  }, s;
}
function jt() {
  return wp(Np).scale(155.424).center([0, 33.6442]);
}
function uo() {
  return jt().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}
function Mp(e) {
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
function Ep() {
  var e, t, n = uo(), a, i = jt().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), o, s = jt().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), c, r, g = { point: function(d, h) {
    r = [d, h];
  } };
  function u(d) {
    var h = d[0], m = d[1];
    return r = null, a.point(h, m), r || (o.point(h, m), r) || (c.point(h, m), r);
  }
  u.invert = function(d) {
    var h = n.scale(), m = n.translate(), S = (d[0] - m[0]) / h, y = (d[1] - m[1]) / h;
    return (y >= 0.12 && y < 0.234 && S >= -0.425 && S < -0.214 ? i : y >= 0.166 && y < 0.234 && S >= -0.214 && S < -0.115 ? s : n).invert(d);
  }, u.stream = function(d) {
    return e && t === d ? e : e = Mp([n.stream(t = d), i.stream(d), s.stream(d)]);
  }, u.precision = function(d) {
    return arguments.length ? (n.precision(d), i.precision(d), s.precision(d), p()) : n.precision();
  }, u.scale = function(d) {
    return arguments.length ? (n.scale(d), i.scale(d * 0.35), s.scale(d), u.translate(n.translate())) : n.scale();
  }, u.translate = function(d) {
    if (!arguments.length)
      return n.translate();
    var h = n.scale(), m = +d[0], S = +d[1];
    return a = n.translate(d).clipExtent([[m - 0.455 * h, S - 0.238 * h], [m + 0.455 * h, S + 0.238 * h]]).stream(g), o = i.translate([m - 0.307 * h, S + 0.201 * h]).clipExtent([[m - 0.425 * h + pe, S + 0.12 * h + pe], [m - 0.214 * h - pe, S + 0.234 * h - pe]]).stream(g), c = s.translate([m - 0.205 * h, S + 0.212 * h]).clipExtent([[m - 0.214 * h + pe, S + 0.166 * h + pe], [m - 0.115 * h - pe, S + 0.234 * h - pe]]).stream(g), p();
  }, u.fitExtent = function(d, h) {
    return co(u, d, h);
  }, u.fitSize = function(d, h) {
    return oc(u, d, h);
  }, u.fitWidth = function(d, h) {
    return lc(u, d, h);
  }, u.fitHeight = function(d, h) {
    return sc(u, d, h);
  };
  function p() {
    return e = t = null, u;
  }
  return u.scale(1070);
}
function po(e, t) {
  return [e, $d(zd((Je + t) / 2))];
}
po.invert = function(e, t) {
  return [e, 2 * Us(Id(t)) - Je];
};
function dc() {
  return xp(po).scale(961 / nt);
}
function xp(e) {
  var t = cc(e), n = t.center, a = t.scale, i = t.translate, o = t.clipExtent, s = null, c, r, g;
  t.scale = function(p) {
    return arguments.length ? (a(p), u()) : a();
  }, t.translate = function(p) {
    return arguments.length ? (i(p), u()) : i();
  }, t.center = function(p) {
    return arguments.length ? (n(p), u()) : n();
  }, t.clipExtent = function(p) {
    return arguments.length ? (p == null ? s = c = r = g = null : (s = +p[0][0], c = +p[0][1], r = +p[1][0], g = +p[1][1]), u()) : s == null ? null : [[s, c], [r, g]];
  };
  function u() {
    var p = ce * a(), d = t(jd(t.rotate()).invert([0, 0]));
    return o(s == null ? [[d[0] - p, d[1] - p], [d[0] + p, d[1] + p]] : e === po ? [[Math.max(d[0] - p, s), c], [Math.min(d[0] + p, r), g]] : [[s, Math.max(d[1] - p, c)], [r, Math.min(d[1] + p, g)]]);
  }
  return u();
}
function Mr(e, t) {
  return [e, t];
}
Mr.invert = Mr;
function Tl() {
  return cc(Mr).scale(152.63);
}
function Er() {
  return Er = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Er.apply(this, arguments);
}
function Pp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ho(e) {
  var t = e.top, n = t === void 0 ? 0 : t, a = e.left, i = a === void 0 ? 0 : a, o = e.transform, s = e.className, c = e.children, r = e.innerRef, g = Pp(e, ["top", "left", "transform", "className", "children", "innerRef"]);
  return /* @__PURE__ */ ie.createElement("g", Er({
    ref: r,
    className: Ot("visx-group", s),
    transform: o || "translate(" + i + ", " + n + ")"
  }, g), c);
}
ho.propTypes = {
  top: V.number,
  left: V.number,
  transform: V.string,
  className: V.string,
  children: V.node,
  innerRef: V.oneOfType([V.string, V.func, V.object])
};
function bi() {
  return new ti();
}
function ti() {
  this.reset();
}
ti.prototype = {
  constructor: ti,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(e) {
    Nl(Ca, e, this.t), Nl(this, Ca.s, this.s), this.s ? this.t += Ca.t : this.s = Ca.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var Ca = new ti();
function Nl(e, t, n) {
  var a = e.s = t + n, i = a - t, o = a - i;
  e.t = t - o + (n - i);
}
var ae = 1e-6, Dp = 1e-12, ue = Math.PI, Qe = ue / 2, Ml = ue / 4, at = ue * 2, He = 180 / ue, Ne = ue / 180, ve = Math.abs, pc = Math.atan, ln = Math.atan2, ke = Math.cos, Sa = Math.ceil, Ap = Math.exp, Rp = Math.log, me = Math.sin, Ra = Math.sign || function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, mt = Math.sqrt, Op = Math.tan;
function Ip(e) {
  return e > 1 ? 0 : e < -1 ? ue : Math.acos(e);
}
function yt(e) {
  return e > 1 ? Qe : e < -1 ? -Qe : Math.asin(e);
}
function ut() {
}
function ni(e, t) {
  e && xl.hasOwnProperty(e.type) && xl[e.type](e, t);
}
var El = {
  Feature: function(e, t) {
    ni(e.geometry, t);
  },
  FeatureCollection: function(e, t) {
    for (var n = e.features, a = -1, i = n.length; ++a < i; )
      ni(n[a].geometry, t);
  }
}, xl = {
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
    xr(e.coordinates, t, 0);
  },
  MultiLineString: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      xr(n[a], t, 0);
  },
  Polygon: function(e, t) {
    Pl(e.coordinates, t);
  },
  MultiPolygon: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      Pl(n[a], t);
  },
  GeometryCollection: function(e, t) {
    for (var n = e.geometries, a = -1, i = n.length; ++a < i; )
      ni(n[a], t);
  }
};
function xr(e, t, n) {
  var a = -1, i = e.length - n, o;
  for (t.lineStart(); ++a < i; )
    o = e[a], t.point(o[0], o[1], o[2]);
  t.lineEnd();
}
function Pl(e, t) {
  var n = -1, a = e.length;
  for (t.polygonStart(); ++n < a; )
    xr(e[n], t, 1);
  t.polygonEnd();
}
function pn(e, t) {
  e && El.hasOwnProperty(e.type) ? El[e.type](e, t) : ni(e, t);
}
function Pr(e) {
  return [ln(e[1], e[0]), yt(e[2])];
}
function wn(e) {
  var t = e[0], n = e[1], a = ke(n);
  return [a * ke(t), a * me(t), me(n)];
}
function ba(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function ai(e, t) {
  return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
}
function $i(e, t) {
  e[0] += t[0], e[1] += t[1], e[2] += t[2];
}
function va(e, t) {
  return [e[0] * t, e[1] * t, e[2] * t];
}
function Dr(e) {
  var t = mt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
  e[0] /= t, e[1] /= t, e[2] /= t;
}
function Ar(e, t) {
  function n(a, i) {
    return a = e(a, i), t(a[0], a[1]);
  }
  return e.invert && t.invert && (n.invert = function(a, i) {
    return a = t.invert(a, i), a && e.invert(a[0], a[1]);
  }), n;
}
function Rr(e, t) {
  return [ve(e) > ue ? e + Math.round(-e / at) * at : e, t];
}
Rr.invert = Rr;
function hc(e, t, n) {
  return (e %= at) ? t || n ? Ar(Al(e), Rl(t, n)) : Al(e) : t || n ? Rl(t, n) : Rr;
}
function Dl(e) {
  return function(t, n) {
    return t += e, [t > ue ? t - at : t < -ue ? t + at : t, n];
  };
}
function Al(e) {
  var t = Dl(e);
  return t.invert = Dl(-e), t;
}
function Rl(e, t) {
  var n = ke(e), a = me(e), i = ke(t), o = me(t);
  function s(c, r) {
    var g = ke(r), u = ke(c) * g, p = me(c) * g, d = me(r), h = d * n + u * a;
    return [
      ln(p * i - h * o, u * n - d * a),
      yt(h * i + p * o)
    ];
  }
  return s.invert = function(c, r) {
    var g = ke(r), u = ke(c) * g, p = me(c) * g, d = me(r), h = d * i - p * o;
    return [
      ln(p * i + d * o, u * n + h * a),
      yt(h * n - u * a)
    ];
  }, s;
}
function $p(e) {
  e = hc(e[0] * Ne, e[1] * Ne, e.length > 2 ? e[2] * Ne : 0);
  function t(n) {
    return n = e(n[0] * Ne, n[1] * Ne), n[0] *= He, n[1] *= He, n;
  }
  return t.invert = function(n) {
    return n = e.invert(n[0] * Ne, n[1] * Ne), n[0] *= He, n[1] *= He, n;
  }, t;
}
function zp(e, t, n, a, i, o) {
  if (n) {
    var s = ke(t), c = me(t), r = a * n;
    i == null ? (i = t + a * at, o = t - r / 2) : (i = Ol(s, i), o = Ol(s, o), (a > 0 ? i < o : i > o) && (i += a * at));
    for (var g, u = i; a > 0 ? u > o : u < o; u -= r)
      g = Pr([s, -c * ke(u), -c * me(u)]), e.point(g[0], g[1]);
  }
}
function Ol(e, t) {
  t = wn(t), t[0] -= e, Dr(t);
  var n = Ip(-t[1]);
  return ((-t[2] < 0 ? -n : n) + at - ae) % at;
}
function gc() {
  var e = [], t;
  return {
    point: function(n, a, i) {
      t.push([n, a, i]);
    },
    lineStart: function() {
      e.push(t = []);
    },
    lineEnd: ut,
    rejoin: function() {
      e.length > 1 && e.push(e.pop().concat(e.shift()));
    },
    result: function() {
      var n = e;
      return e = [], t = null, n;
    }
  };
}
function Oa(e, t) {
  return ve(e[0] - t[0]) < ae && ve(e[1] - t[1]) < ae;
}
function ka(e, t, n, a) {
  this.x = e, this.z = t, this.o = n, this.e = a, this.v = !1, this.n = this.p = null;
}
function fc(e, t, n, a, i) {
  var o = [], s = [], c, r;
  if (e.forEach(function(m) {
    if (!((S = m.length - 1) <= 0)) {
      var S, y = m[0], w = m[S], k;
      if (Oa(y, w)) {
        if (!y[2] && !w[2]) {
          for (i.lineStart(), c = 0; c < S; ++c)
            i.point((y = m[c])[0], y[1]);
          i.lineEnd();
          return;
        }
        w[0] += 2 * ae;
      }
      o.push(k = new ka(y, m, null, !0)), s.push(k.o = new ka(y, null, k, !1)), o.push(k = new ka(w, m, null, !1)), s.push(k.o = new ka(w, null, k, !0));
    }
  }), !!o.length) {
    for (s.sort(t), Il(o), Il(s), c = 0, r = s.length; c < r; ++c)
      s[c].e = n = !n;
    for (var g = o[0], u, p; ; ) {
      for (var d = g, h = !0; d.v; )
        if ((d = d.n) === g)
          return;
      u = d.z, i.lineStart();
      do {
        if (d.v = d.o.v = !0, d.e) {
          if (h)
            for (c = 0, r = u.length; c < r; ++c)
              i.point((p = u[c])[0], p[1]);
          else
            a(d.x, d.n.x, 1, i);
          d = d.n;
        } else {
          if (h)
            for (u = d.p.z, c = u.length - 1; c >= 0; --c)
              i.point((p = u[c])[0], p[1]);
          else
            a(d.x, d.p.x, -1, i);
          d = d.p;
        }
        d = d.o, u = d.z, h = !h;
      } while (!d.v);
      i.lineEnd();
    }
  }
}
function Il(e) {
  if (t = e.length) {
    for (var t, n = 0, a = e[0], i; ++n < t; )
      a.n = i = e[n], i.p = a, a = i;
    a.n = i = e[0], i.p = a;
  }
}
var zi = bi();
function _i(e) {
  return ve(e[0]) <= ue ? e[0] : Ra(e[0]) * ((ve(e[0]) + ue) % at - ue);
}
function _p(e, t) {
  var n = _i(t), a = t[1], i = me(a), o = [me(n), -ke(n), 0], s = 0, c = 0;
  zi.reset(), i === 1 ? a = Qe + ae : i === -1 && (a = -Qe - ae);
  for (var r = 0, g = e.length; r < g; ++r)
    if (p = (u = e[r]).length)
      for (var u, p, d = u[p - 1], h = _i(d), m = d[1] / 2 + Ml, S = me(m), y = ke(m), w = 0; w < p; ++w, h = f, S = L, y = M, d = k) {
        var k = u[w], f = _i(k), T = k[1] / 2 + Ml, L = me(T), M = ke(T), x = f - h, R = x >= 0 ? 1 : -1, z = R * x, F = z > ue, I = S * L;
        if (zi.add(ln(I * R * me(z), y * M + I * ke(z))), s += F ? x + R * at : x, F ^ h >= n ^ f >= n) {
          var $ = ai(wn(d), wn(k));
          Dr($);
          var U = ai(o, $);
          Dr(U);
          var b = (F ^ x >= 0 ? -1 : 1) * yt(U[2]);
          (a > b || a === b && ($[0] || $[1])) && (c += F ^ x >= 0 ? 1 : -1);
        }
      }
  return (s < -ae || s < ae && zi < -ae) ^ c & 1;
}
function mc(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Up(e) {
  return e.length === 1 && (e = Fp(e)), {
    left: function(t, n, a, i) {
      for (a == null && (a = 0), i == null && (i = t.length); a < i; ) {
        var o = a + i >>> 1;
        e(t[o], n) < 0 ? a = o + 1 : i = o;
      }
      return a;
    },
    right: function(t, n, a, i) {
      for (a == null && (a = 0), i == null && (i = t.length); a < i; ) {
        var o = a + i >>> 1;
        e(t[o], n) > 0 ? i = o : a = o + 1;
      }
      return a;
    }
  };
}
function Fp(e) {
  return function(t, n) {
    return mc(e(t), n);
  };
}
Up(mc);
function fn(e, t, n) {
  e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
  for (var a = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(i); ++a < i; )
    o[a] = e + a * n;
  return o;
}
function yc(e) {
  for (var t = e.length, n, a = -1, i = 0, o, s; ++a < t; )
    i += e[a].length;
  for (o = new Array(i); --t >= 0; )
    for (s = e[t], n = s.length; --n >= 0; )
      o[--i] = s[n];
  return o;
}
function Cc(e, t, n, a) {
  return function(i) {
    var o = t(i), s = gc(), c = t(s), r = !1, g, u, p, d = {
      point: h,
      lineStart: S,
      lineEnd: y,
      polygonStart: function() {
        d.point = w, d.lineStart = k, d.lineEnd = f, u = [], g = [];
      },
      polygonEnd: function() {
        d.point = h, d.lineStart = S, d.lineEnd = y, u = yc(u);
        var T = _p(g, a);
        u.length ? (r || (i.polygonStart(), r = !0), fc(u, Bp, T, n, i)) : T && (r || (i.polygonStart(), r = !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), r && (i.polygonEnd(), r = !1), u = g = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), n(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function h(T, L) {
      e(T, L) && i.point(T, L);
    }
    function m(T, L) {
      o.point(T, L);
    }
    function S() {
      d.point = m, o.lineStart();
    }
    function y() {
      d.point = h, o.lineEnd();
    }
    function w(T, L) {
      p.push([T, L]), c.point(T, L);
    }
    function k() {
      c.lineStart(), p = [];
    }
    function f() {
      w(p[0][0], p[0][1]), c.lineEnd();
      var T = c.clean(), L = s.result(), M, x = L.length, R, z, F;
      if (p.pop(), g.push(p), p = null, !!x) {
        if (T & 1) {
          if (z = L[0], (R = z.length - 1) > 0) {
            for (r || (i.polygonStart(), r = !0), i.lineStart(), M = 0; M < R; ++M)
              i.point((F = z[M])[0], F[1]);
            i.lineEnd();
          }
          return;
        }
        x > 1 && T & 2 && L.push(L.pop().concat(L.shift())), u.push(L.filter(Gp));
      }
    }
    return d;
  };
}
function Gp(e) {
  return e.length > 1;
}
function Bp(e, t) {
  return ((e = e.x)[0] < 0 ? e[1] - Qe - ae : Qe - e[1]) - ((t = t.x)[0] < 0 ? t[1] - Qe - ae : Qe - t[1]);
}
const $l = Cc(
  function() {
    return !0;
  },
  Wp,
  Vp,
  [-ue, -Qe]
);
function Wp(e) {
  var t = NaN, n = NaN, a = NaN, i;
  return {
    lineStart: function() {
      e.lineStart(), i = 1;
    },
    point: function(o, s) {
      var c = o > 0 ? ue : -ue, r = ve(o - t);
      ve(r - ue) < ae ? (e.point(t, n = (n + s) / 2 > 0 ? Qe : -Qe), e.point(a, n), e.lineEnd(), e.lineStart(), e.point(c, n), e.point(o, n), i = 0) : a !== c && r >= ue && (ve(t - a) < ae && (t -= a * ae), ve(o - c) < ae && (o -= c * ae), n = jp(t, n, o, s), e.point(a, n), e.lineEnd(), e.lineStart(), e.point(c, n), i = 0), e.point(t = o, n = s), a = c;
    },
    lineEnd: function() {
      e.lineEnd(), t = n = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function jp(e, t, n, a) {
  var i, o, s = me(e - n);
  return ve(s) > ae ? pc((me(t) * (o = ke(a)) * me(n) - me(a) * (i = ke(t)) * me(e)) / (i * o * s)) : (t + a) / 2;
}
function Vp(e, t, n, a) {
  var i;
  if (e == null)
    i = n * Qe, a.point(-ue, i), a.point(0, i), a.point(ue, i), a.point(ue, 0), a.point(ue, -i), a.point(0, -i), a.point(-ue, -i), a.point(-ue, 0), a.point(-ue, i);
  else if (ve(e[0] - t[0]) > ae) {
    var o = e[0] < t[0] ? ue : -ue;
    i = n * o / 2, a.point(-o, i), a.point(0, i), a.point(o, i);
  } else
    a.point(t[0], t[1]);
}
function Hp(e) {
  var t = ke(e), n = 6 * Ne, a = t > 0, i = ve(t) > ae;
  function o(u, p, d, h) {
    zp(h, e, n, d, u, p);
  }
  function s(u, p) {
    return ke(u) * ke(p) > t;
  }
  function c(u) {
    var p, d, h, m, S;
    return {
      lineStart: function() {
        m = h = !1, S = 1;
      },
      point: function(y, w) {
        var k = [y, w], f, T = s(y, w), L = a ? T ? 0 : g(y, w) : T ? g(y + (y < 0 ? ue : -ue), w) : 0;
        if (!p && (m = h = T) && u.lineStart(), T !== h && (f = r(p, k), (!f || Oa(p, f) || Oa(k, f)) && (k[2] = 1)), T !== h)
          S = 0, T ? (u.lineStart(), f = r(k, p), u.point(f[0], f[1])) : (f = r(p, k), u.point(f[0], f[1], 2), u.lineEnd()), p = f;
        else if (i && p && a ^ T) {
          var M;
          !(L & d) && (M = r(k, p, !0)) && (S = 0, a ? (u.lineStart(), u.point(M[0][0], M[0][1]), u.point(M[1][0], M[1][1]), u.lineEnd()) : (u.point(M[1][0], M[1][1]), u.lineEnd(), u.lineStart(), u.point(M[0][0], M[0][1], 3)));
        }
        T && (!p || !Oa(p, k)) && u.point(k[0], k[1]), p = k, h = T, d = L;
      },
      lineEnd: function() {
        h && u.lineEnd(), p = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return S | (m && h) << 1;
      }
    };
  }
  function r(u, p, d) {
    var h = wn(u), m = wn(p), S = [1, 0, 0], y = ai(h, m), w = ba(y, y), k = y[0], f = w - k * k;
    if (!f)
      return !d && u;
    var T = t * w / f, L = -t * k / f, M = ai(S, y), x = va(S, T), R = va(y, L);
    $i(x, R);
    var z = M, F = ba(x, z), I = ba(z, z), $ = F * F - I * (ba(x, x) - 1);
    if (!($ < 0)) {
      var U = mt($), b = va(z, (-F - U) / I);
      if ($i(b, x), b = Pr(b), !d)
        return b;
      var C = u[0], N = p[0], A = u[1], _ = p[1], O;
      N < C && (O = C, C = N, N = O);
      var G = N - C, W = ve(G - ue) < ae, B = W || G < ae;
      if (!W && _ < A && (O = A, A = _, _ = O), B ? W ? A + _ > 0 ^ b[1] < (ve(b[0] - C) < ae ? A : _) : A <= b[1] && b[1] <= _ : G > ue ^ (C <= b[0] && b[0] <= N)) {
        var j = va(z, (-F + U) / I);
        return $i(j, x), [b, Pr(j)];
      }
    }
  }
  function g(u, p) {
    var d = a ? e : ue - e, h = 0;
    return u < -d ? h |= 1 : u > d && (h |= 2), p < -d ? h |= 4 : p > d && (h |= 8), h;
  }
  return Cc(s, c, o, a ? [0, -e] : [-ue, e - ue]);
}
function qp(e, t, n, a, i, o) {
  var s = e[0], c = e[1], r = t[0], g = t[1], u = 0, p = 1, d = r - s, h = g - c, m;
  if (m = n - s, !(!d && m > 0)) {
    if (m /= d, d < 0) {
      if (m < u)
        return;
      m < p && (p = m);
    } else if (d > 0) {
      if (m > p)
        return;
      m > u && (u = m);
    }
    if (m = i - s, !(!d && m < 0)) {
      if (m /= d, d < 0) {
        if (m > p)
          return;
        m > u && (u = m);
      } else if (d > 0) {
        if (m < u)
          return;
        m < p && (p = m);
      }
      if (m = a - c, !(!h && m > 0)) {
        if (m /= h, h < 0) {
          if (m < u)
            return;
          m < p && (p = m);
        } else if (h > 0) {
          if (m > p)
            return;
          m > u && (u = m);
        }
        if (m = o - c, !(!h && m < 0)) {
          if (m /= h, h < 0) {
            if (m > p)
              return;
            m > u && (u = m);
          } else if (h > 0) {
            if (m < u)
              return;
            m < p && (p = m);
          }
          return u > 0 && (e[0] = s + u * d, e[1] = c + u * h), p < 1 && (t[0] = s + p * d, t[1] = c + p * h), !0;
        }
      }
    }
  }
}
var Gn = 1e9, La = -Gn;
function Kp(e, t, n, a) {
  function i(g, u) {
    return e <= g && g <= n && t <= u && u <= a;
  }
  function o(g, u, p, d) {
    var h = 0, m = 0;
    if (g == null || (h = s(g, p)) !== (m = s(u, p)) || r(g, u) < 0 ^ p > 0)
      do
        d.point(h === 0 || h === 3 ? e : n, h > 1 ? a : t);
      while ((h = (h + p + 4) % 4) !== m);
    else
      d.point(u[0], u[1]);
  }
  function s(g, u) {
    return ve(g[0] - e) < ae ? u > 0 ? 0 : 3 : ve(g[0] - n) < ae ? u > 0 ? 2 : 1 : ve(g[1] - t) < ae ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2;
  }
  function c(g, u) {
    return r(g.x, u.x);
  }
  function r(g, u) {
    var p = s(g, 1), d = s(u, 1);
    return p !== d ? p - d : p === 0 ? u[1] - g[1] : p === 1 ? g[0] - u[0] : p === 2 ? g[1] - u[1] : u[0] - g[0];
  }
  return function(g) {
    var u = g, p = gc(), d, h, m, S, y, w, k, f, T, L, M, x = {
      point: R,
      lineStart: $,
      lineEnd: U,
      polygonStart: F,
      polygonEnd: I
    };
    function R(C, N) {
      i(C, N) && u.point(C, N);
    }
    function z() {
      for (var C = 0, N = 0, A = h.length; N < A; ++N)
        for (var _ = h[N], O = 1, G = _.length, W = _[0], B, j, H = W[0], K = W[1]; O < G; ++O)
          B = H, j = K, W = _[O], H = W[0], K = W[1], j <= a ? K > a && (H - B) * (a - j) > (K - j) * (e - B) && ++C : K <= a && (H - B) * (a - j) < (K - j) * (e - B) && --C;
      return C;
    }
    function F() {
      u = p, d = [], h = [], M = !0;
    }
    function I() {
      var C = z(), N = M && C, A = (d = yc(d)).length;
      (N || A) && (g.polygonStart(), N && (g.lineStart(), o(null, null, 1, g), g.lineEnd()), A && fc(d, c, C, o, g), g.polygonEnd()), u = g, d = h = m = null;
    }
    function $() {
      x.point = b, h && h.push(m = []), L = !0, T = !1, k = f = NaN;
    }
    function U() {
      d && (b(S, y), w && T && p.rejoin(), d.push(p.result())), x.point = R, T && u.lineEnd();
    }
    function b(C, N) {
      var A = i(C, N);
      if (h && m.push([C, N]), L)
        S = C, y = N, w = A, L = !1, A && (u.lineStart(), u.point(C, N));
      else if (A && T)
        u.point(C, N);
      else {
        var _ = [k = Math.max(La, Math.min(Gn, k)), f = Math.max(La, Math.min(Gn, f))], O = [C = Math.max(La, Math.min(Gn, C)), N = Math.max(La, Math.min(Gn, N))];
        qp(_, O, e, t, n, a) ? (T || (u.lineStart(), u.point(_[0], _[1])), u.point(O[0], O[1]), A || u.lineEnd(), M = !1) : A && (u.lineStart(), u.point(C, N), M = !1);
      }
      k = C, f = N, T = A;
    }
    return x;
  };
}
function zl(e, t, n) {
  var a = fn(e, t - ae, n).concat(t);
  return function(i) {
    return a.map(function(o) {
      return [i, o];
    });
  };
}
function _l(e, t, n) {
  var a = fn(e, t - ae, n).concat(t);
  return function(i) {
    return a.map(function(o) {
      return [o, i];
    });
  };
}
function Zp() {
  var e, t, n, a, i, o, s, c, r = 10, g = r, u = 90, p = 360, d, h, m, S, y = 2.5;
  function w() {
    return { type: "MultiLineString", coordinates: k() };
  }
  function k() {
    return fn(Sa(a / u) * u, n, u).map(m).concat(fn(Sa(c / p) * p, s, p).map(S)).concat(fn(Sa(t / r) * r, e, r).filter(function(f) {
      return ve(f % u) > ae;
    }).map(d)).concat(fn(Sa(o / g) * g, i, g).filter(function(f) {
      return ve(f % p) > ae;
    }).map(h));
  }
  return w.lines = function() {
    return k().map(function(f) {
      return { type: "LineString", coordinates: f };
    });
  }, w.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        m(a).concat(
          S(s).slice(1),
          m(n).reverse().slice(1),
          S(c).reverse().slice(1)
        )
      ]
    };
  }, w.extent = function(f) {
    return arguments.length ? w.extentMajor(f).extentMinor(f) : w.extentMinor();
  }, w.extentMajor = function(f) {
    return arguments.length ? (a = +f[0][0], n = +f[1][0], c = +f[0][1], s = +f[1][1], a > n && (f = a, a = n, n = f), c > s && (f = c, c = s, s = f), w.precision(y)) : [[a, c], [n, s]];
  }, w.extentMinor = function(f) {
    return arguments.length ? (t = +f[0][0], e = +f[1][0], o = +f[0][1], i = +f[1][1], t > e && (f = t, t = e, e = f), o > i && (f = o, o = i, i = f), w.precision(y)) : [[t, o], [e, i]];
  }, w.step = function(f) {
    return arguments.length ? w.stepMajor(f).stepMinor(f) : w.stepMinor();
  }, w.stepMajor = function(f) {
    return arguments.length ? (u = +f[0], p = +f[1], w) : [u, p];
  }, w.stepMinor = function(f) {
    return arguments.length ? (r = +f[0], g = +f[1], w) : [r, g];
  }, w.precision = function(f) {
    return arguments.length ? (y = +f, d = zl(o, i, 90), h = _l(t, e, y), m = zl(c, s, 90), S = _l(a, n, y), w) : y;
  }, w.extentMajor([[-180, -90 + ae], [180, 90 - ae]]).extentMinor([[-180, -80 - ae], [180, 80 + ae]]);
}
function Or(e) {
  return e;
}
var Ui = bi(), Ir = bi(), Sc, bc, $r, zr, Gt = {
  point: ut,
  lineStart: ut,
  lineEnd: ut,
  polygonStart: function() {
    Gt.lineStart = Yp, Gt.lineEnd = Jp;
  },
  polygonEnd: function() {
    Gt.lineStart = Gt.lineEnd = Gt.point = ut, Ui.add(ve(Ir)), Ir.reset();
  },
  result: function() {
    var e = Ui / 2;
    return Ui.reset(), e;
  }
};
function Yp() {
  Gt.point = Xp;
}
function Xp(e, t) {
  Gt.point = vc, Sc = $r = e, bc = zr = t;
}
function vc(e, t) {
  Ir.add(zr * e - $r * t), $r = e, zr = t;
}
function Jp() {
  vc(Sc, bc);
}
const Ul = Gt;
var Tn = 1 / 0, ii = Tn, oa = -Tn, ri = oa, Qp = {
  point: e2,
  lineStart: ut,
  lineEnd: ut,
  polygonStart: ut,
  polygonEnd: ut,
  result: function() {
    var e = [[Tn, ii], [oa, ri]];
    return oa = ri = -(ii = Tn = 1 / 0), e;
  }
};
function e2(e, t) {
  e < Tn && (Tn = e), e > oa && (oa = e), t < ii && (ii = t), t > ri && (ri = t);
}
const oi = Qp;
var _r = 0, Ur = 0, Bn = 0, li = 0, si = 0, mn = 0, Fr = 0, Gr = 0, Wn = 0, kc, Lc, Tt, Nt, pt = {
  point: sn,
  lineStart: Fl,
  lineEnd: Gl,
  polygonStart: function() {
    pt.lineStart = a2, pt.lineEnd = i2;
  },
  polygonEnd: function() {
    pt.point = sn, pt.lineStart = Fl, pt.lineEnd = Gl;
  },
  result: function() {
    var e = Wn ? [Fr / Wn, Gr / Wn] : mn ? [li / mn, si / mn] : Bn ? [_r / Bn, Ur / Bn] : [NaN, NaN];
    return _r = Ur = Bn = li = si = mn = Fr = Gr = Wn = 0, e;
  }
};
function sn(e, t) {
  _r += e, Ur += t, ++Bn;
}
function Fl() {
  pt.point = t2;
}
function t2(e, t) {
  pt.point = n2, sn(Tt = e, Nt = t);
}
function n2(e, t) {
  var n = e - Tt, a = t - Nt, i = mt(n * n + a * a);
  li += i * (Tt + e) / 2, si += i * (Nt + t) / 2, mn += i, sn(Tt = e, Nt = t);
}
function Gl() {
  pt.point = sn;
}
function a2() {
  pt.point = r2;
}
function i2() {
  wc(kc, Lc);
}
function r2(e, t) {
  pt.point = wc, sn(kc = Tt = e, Lc = Nt = t);
}
function wc(e, t) {
  var n = e - Tt, a = t - Nt, i = mt(n * n + a * a);
  li += i * (Tt + e) / 2, si += i * (Nt + t) / 2, mn += i, i = Nt * e - Tt * t, Fr += i * (Tt + e), Gr += i * (Nt + t), Wn += i * 3, sn(Tt = e, Nt = t);
}
const Bl = pt;
function Tc(e) {
  this._context = e;
}
Tc.prototype = {
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
  result: ut
};
var Br = bi(), Fi, Nc, Mc, jn, Vn, ci = {
  point: ut,
  lineStart: function() {
    ci.point = o2;
  },
  lineEnd: function() {
    Fi && Ec(Nc, Mc), ci.point = ut;
  },
  polygonStart: function() {
    Fi = !0;
  },
  polygonEnd: function() {
    Fi = null;
  },
  result: function() {
    var e = +Br;
    return Br.reset(), e;
  }
};
function o2(e, t) {
  ci.point = Ec, Nc = jn = e, Mc = Vn = t;
}
function Ec(e, t) {
  jn -= e, Vn -= t, Br.add(mt(jn * jn + Vn * Vn)), jn = e, Vn = t;
}
const Wl = ci;
function xc() {
  this._string = [];
}
xc.prototype = {
  _radius: 4.5,
  _circle: jl(4.5),
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
        this._circle == null && (this._circle = jl(this._radius)), this._string.push("M", e, ",", t, this._circle);
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
function jl(e) {
  return "m0," + e + "a" + e + "," + e + " 0 1,1 0," + -2 * e + "a" + e + "," + e + " 0 1,1 0," + 2 * e + "z";
}
function l2(e, t) {
  var n = 4.5, a, i;
  function o(s) {
    return s && (typeof n == "function" && i.pointRadius(+n.apply(this, arguments)), pn(s, a(i))), i.result();
  }
  return o.area = function(s) {
    return pn(s, a(Ul)), Ul.result();
  }, o.measure = function(s) {
    return pn(s, a(Wl)), Wl.result();
  }, o.bounds = function(s) {
    return pn(s, a(oi)), oi.result();
  }, o.centroid = function(s) {
    return pn(s, a(Bl)), Bl.result();
  }, o.projection = function(s) {
    return arguments.length ? (a = s == null ? (e = null, Or) : (e = s).stream, o) : e;
  }, o.context = function(s) {
    return arguments.length ? (i = s == null ? (t = null, new xc()) : new Tc(t = s), typeof n != "function" && i.pointRadius(n), o) : t;
  }, o.pointRadius = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : (i.pointRadius(+s), +s), o) : n;
  }, o.projection(e).context(t);
}
function go(e) {
  return function(t) {
    var n = new Wr();
    for (var a in e)
      n[a] = e[a];
    return n.stream = t, n;
  };
}
function Wr() {
}
Wr.prototype = {
  constructor: Wr,
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
function fo(e, t, n) {
  var a = e.clipExtent && e.clipExtent();
  return e.scale(150).translate([0, 0]), a != null && e.clipExtent(null), pn(n, e.stream(oi)), t(oi.result()), a != null && e.clipExtent(a), e;
}
function mo(e, t, n) {
  return fo(e, function(a) {
    var i = t[1][0] - t[0][0], o = t[1][1] - t[0][1], s = Math.min(i / (a[1][0] - a[0][0]), o / (a[1][1] - a[0][1])), c = +t[0][0] + (i - s * (a[1][0] + a[0][0])) / 2, r = +t[0][1] + (o - s * (a[1][1] + a[0][1])) / 2;
    e.scale(150 * s).translate([c, r]);
  }, n);
}
function Pc(e, t, n) {
  return mo(e, [[0, 0], t], n);
}
function Dc(e, t, n) {
  return fo(e, function(a) {
    var i = +t, o = i / (a[1][0] - a[0][0]), s = (i - o * (a[1][0] + a[0][0])) / 2, c = -o * a[0][1];
    e.scale(150 * o).translate([s, c]);
  }, n);
}
function Ac(e, t, n) {
  return fo(e, function(a) {
    var i = +t, o = i / (a[1][1] - a[0][1]), s = -o * a[0][0], c = (i - o * (a[1][1] + a[0][1])) / 2;
    e.scale(150 * o).translate([s, c]);
  }, n);
}
var Vl = 16, s2 = ke(30 * Ne);
function Hl(e, t) {
  return +t ? u2(e, t) : c2(e);
}
function c2(e) {
  return go({
    point: function(t, n) {
      t = e(t, n), this.stream.point(t[0], t[1]);
    }
  });
}
function u2(e, t) {
  function n(a, i, o, s, c, r, g, u, p, d, h, m, S, y) {
    var w = g - a, k = u - i, f = w * w + k * k;
    if (f > 4 * t && S--) {
      var T = s + d, L = c + h, M = r + m, x = mt(T * T + L * L + M * M), R = yt(M /= x), z = ve(ve(M) - 1) < ae || ve(o - p) < ae ? (o + p) / 2 : ln(L, T), F = e(z, R), I = F[0], $ = F[1], U = I - a, b = $ - i, C = k * U - w * b;
      (C * C / f > t || ve((w * U + k * b) / f - 0.5) > 0.3 || s * d + c * h + r * m < s2) && (n(a, i, o, s, c, r, I, $, z, T /= x, L /= x, M, S, y), y.point(I, $), n(I, $, z, T, L, M, g, u, p, d, h, m, S, y));
    }
  }
  return function(a) {
    var i, o, s, c, r, g, u, p, d, h, m, S, y = {
      point: w,
      lineStart: k,
      lineEnd: T,
      polygonStart: function() {
        a.polygonStart(), y.lineStart = L;
      },
      polygonEnd: function() {
        a.polygonEnd(), y.lineStart = k;
      }
    };
    function w(R, z) {
      R = e(R, z), a.point(R[0], R[1]);
    }
    function k() {
      p = NaN, y.point = f, a.lineStart();
    }
    function f(R, z) {
      var F = wn([R, z]), I = e(R, z);
      n(p, d, u, h, m, S, p = I[0], d = I[1], u = R, h = F[0], m = F[1], S = F[2], Vl, a), a.point(p, d);
    }
    function T() {
      y.point = w, a.lineEnd();
    }
    function L() {
      k(), y.point = M, y.lineEnd = x;
    }
    function M(R, z) {
      f(i = R, z), o = p, s = d, c = h, r = m, g = S, y.point = f;
    }
    function x() {
      n(p, d, u, h, m, S, o, s, i, c, r, g, Vl, a), y.lineEnd = T, T();
    }
    return y;
  };
}
var d2 = go({
  point: function(e, t) {
    this.stream.point(e * Ne, t * Ne);
  }
});
function p2(e) {
  return go({
    point: function(t, n) {
      var a = e(t, n);
      return this.stream.point(a[0], a[1]);
    }
  });
}
function h2(e, t, n, a, i) {
  function o(s, c) {
    return s *= a, c *= i, [t + e * s, n - e * c];
  }
  return o.invert = function(s, c) {
    return [(s - t) / e * a, (n - c) / e * i];
  }, o;
}
function ql(e, t, n, a, i, o) {
  var s = ke(o), c = me(o), r = s * e, g = c * e, u = s / e, p = c / e, d = (c * n - s * t) / e, h = (c * t + s * n) / e;
  function m(S, y) {
    return S *= a, y *= i, [r * S - g * y + t, n - g * S - r * y];
  }
  return m.invert = function(S, y) {
    return [a * (u * S - p * y + d), i * (h - p * S - u * y)];
  }, m;
}
function vi(e) {
  return Rc(function() {
    return e;
  })();
}
function Rc(e) {
  var t, n = 150, a = 480, i = 250, o = 0, s = 0, c = 0, r = 0, g = 0, u, p = 0, d = 1, h = 1, m = null, S = $l, y = null, w, k, f, T = Or, L = 0.5, M, x, R, z, F;
  function I(C) {
    return R(C[0] * Ne, C[1] * Ne);
  }
  function $(C) {
    return C = R.invert(C[0], C[1]), C && [C[0] * He, C[1] * He];
  }
  I.stream = function(C) {
    return z && F === C ? z : z = d2(p2(u)(S(M(T(F = C)))));
  }, I.preclip = function(C) {
    return arguments.length ? (S = C, m = void 0, b()) : S;
  }, I.postclip = function(C) {
    return arguments.length ? (T = C, y = w = k = f = null, b()) : T;
  }, I.clipAngle = function(C) {
    return arguments.length ? (S = +C ? Hp(m = C * Ne) : (m = null, $l), b()) : m * He;
  }, I.clipExtent = function(C) {
    return arguments.length ? (T = C == null ? (y = w = k = f = null, Or) : Kp(y = +C[0][0], w = +C[0][1], k = +C[1][0], f = +C[1][1]), b()) : y == null ? null : [[y, w], [k, f]];
  }, I.scale = function(C) {
    return arguments.length ? (n = +C, U()) : n;
  }, I.translate = function(C) {
    return arguments.length ? (a = +C[0], i = +C[1], U()) : [a, i];
  }, I.center = function(C) {
    return arguments.length ? (o = C[0] % 360 * Ne, s = C[1] % 360 * Ne, U()) : [o * He, s * He];
  }, I.rotate = function(C) {
    return arguments.length ? (c = C[0] % 360 * Ne, r = C[1] % 360 * Ne, g = C.length > 2 ? C[2] % 360 * Ne : 0, U()) : [c * He, r * He, g * He];
  }, I.angle = function(C) {
    return arguments.length ? (p = C % 360 * Ne, U()) : p * He;
  }, I.reflectX = function(C) {
    return arguments.length ? (d = C ? -1 : 1, U()) : d < 0;
  }, I.reflectY = function(C) {
    return arguments.length ? (h = C ? -1 : 1, U()) : h < 0;
  }, I.precision = function(C) {
    return arguments.length ? (M = Hl(x, L = C * C), b()) : mt(L);
  }, I.fitExtent = function(C, N) {
    return mo(I, C, N);
  }, I.fitSize = function(C, N) {
    return Pc(I, C, N);
  }, I.fitWidth = function(C, N) {
    return Dc(I, C, N);
  }, I.fitHeight = function(C, N) {
    return Ac(I, C, N);
  };
  function U() {
    var C = ql(n, 0, 0, d, h, p).apply(null, t(o, s)), N = (p ? ql : h2)(n, a - C[0], i - C[1], d, h, p);
    return u = hc(c, r, g), x = Ar(t, N), R = Ar(u, x), M = Hl(x, L), b();
  }
  function b() {
    return z = F = null, I;
  }
  return function() {
    return t = e.apply(this, arguments), I.invert = t.invert && $, U();
  };
}
function g2(e) {
  var t = 0, n = ue / 3, a = Rc(e), i = a(t, n);
  return i.parallels = function(o) {
    return arguments.length ? a(t = o[0] * Ne, n = o[1] * Ne) : [t * He, n * He];
  }, i;
}
function f2(e) {
  var t = ke(e);
  function n(a, i) {
    return [a * t, me(i) / t];
  }
  return n.invert = function(a, i) {
    return [a / t, yt(i * t)];
  }, n;
}
function m2(e, t) {
  var n = me(e), a = (n + me(t)) / 2;
  if (ve(a) < ae)
    return f2(e);
  var i = 1 + n * (2 * a - n), o = mt(i) / a;
  function s(c, r) {
    var g = mt(i - 2 * a * me(r)) / a;
    return [g * me(c *= a), o - g * ke(c)];
  }
  return s.invert = function(c, r) {
    var g = o - r, u = ln(c, ve(g)) * Ra(g);
    return g * a < 0 && (u -= ue * Ra(c) * Ra(g)), [u / a, yt((i - (c * c + g * g) * a * a) / (2 * a))];
  }, s;
}
function jr() {
  return g2(m2).scale(155.424).center([0, 33.6442]);
}
function Oc() {
  return jr().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}
function y2(e) {
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
function C2() {
  var e, t, n = Oc(), a, i = jr().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), o, s = jr().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), c, r, g = { point: function(d, h) {
    r = [d, h];
  } };
  function u(d) {
    var h = d[0], m = d[1];
    return r = null, a.point(h, m), r || (o.point(h, m), r) || (c.point(h, m), r);
  }
  u.invert = function(d) {
    var h = n.scale(), m = n.translate(), S = (d[0] - m[0]) / h, y = (d[1] - m[1]) / h;
    return (y >= 0.12 && y < 0.234 && S >= -0.425 && S < -0.214 ? i : y >= 0.166 && y < 0.234 && S >= -0.214 && S < -0.115 ? s : n).invert(d);
  }, u.stream = function(d) {
    return e && t === d ? e : e = y2([n.stream(t = d), i.stream(d), s.stream(d)]);
  }, u.precision = function(d) {
    return arguments.length ? (n.precision(d), i.precision(d), s.precision(d), p()) : n.precision();
  }, u.scale = function(d) {
    return arguments.length ? (n.scale(d), i.scale(d * 0.35), s.scale(d), u.translate(n.translate())) : n.scale();
  }, u.translate = function(d) {
    if (!arguments.length)
      return n.translate();
    var h = n.scale(), m = +d[0], S = +d[1];
    return a = n.translate(d).clipExtent([[m - 0.455 * h, S - 0.238 * h], [m + 0.455 * h, S + 0.238 * h]]).stream(g), o = i.translate([m - 0.307 * h, S + 0.201 * h]).clipExtent([[m - 0.425 * h + ae, S + 0.12 * h + ae], [m - 0.214 * h - ae, S + 0.234 * h - ae]]).stream(g), c = s.translate([m - 0.205 * h, S + 0.212 * h]).clipExtent([[m - 0.214 * h + ae, S + 0.166 * h + ae], [m - 0.115 * h - ae, S + 0.234 * h - ae]]).stream(g), p();
  }, u.fitExtent = function(d, h) {
    return mo(u, d, h);
  }, u.fitSize = function(d, h) {
    return Pc(u, d, h);
  }, u.fitWidth = function(d, h) {
    return Dc(u, d, h);
  }, u.fitHeight = function(d, h) {
    return Ac(u, d, h);
  };
  function p() {
    return e = t = null, u;
  }
  return u.scale(1070);
}
function S2(e) {
  return function(t, n) {
    var a = mt(t * t + n * n), i = e(a), o = me(i), s = ke(i);
    return [
      ln(t * o, a * s),
      yt(a && n * o / a)
    ];
  };
}
function yo(e, t) {
  return [e, Rp(Op((Qe + t) / 2))];
}
yo.invert = function(e, t) {
  return [e, 2 * pc(Ap(t)) - Qe];
};
function b2() {
  return v2(yo).scale(961 / at);
}
function v2(e) {
  var t = vi(e), n = t.center, a = t.scale, i = t.translate, o = t.clipExtent, s = null, c, r, g;
  t.scale = function(p) {
    return arguments.length ? (a(p), u()) : a();
  }, t.translate = function(p) {
    return arguments.length ? (i(p), u()) : i();
  }, t.center = function(p) {
    return arguments.length ? (n(p), u()) : n();
  }, t.clipExtent = function(p) {
    return arguments.length ? (p == null ? s = c = r = g = null : (s = +p[0][0], c = +p[0][1], r = +p[1][0], g = +p[1][1]), u()) : s == null ? null : [[s, c], [r, g]];
  };
  function u() {
    var p = ue * a(), d = t($p(t.rotate()).invert([0, 0]));
    return o(s == null ? [[d[0] - p, d[1] - p], [d[0] + p, d[1] + p]] : e === yo ? [[Math.max(d[0] - p, s), c], [Math.min(d[0] + p, r), g]] : [[s, Math.max(d[1] - p, c)], [r, Math.min(d[1] + p, g)]]);
  }
  return u();
}
var Kn = 1.340264, Zn = -0.081106, Yn = 893e-6, Xn = 3796e-6, ui = mt(3) / 2, k2 = 12;
function Ic(e, t) {
  var n = yt(ui * me(t)), a = n * n, i = a * a * a;
  return [
    e * ke(n) / (ui * (Kn + 3 * Zn * a + i * (7 * Yn + 9 * Xn * a))),
    n * (Kn + Zn * a + i * (Yn + Xn * a))
  ];
}
Ic.invert = function(e, t) {
  for (var n = t, a = n * n, i = a * a * a, o = 0, s, c, r; o < k2 && (c = n * (Kn + Zn * a + i * (Yn + Xn * a)) - t, r = Kn + 3 * Zn * a + i * (7 * Yn + 9 * Xn * a), n -= s = c / r, a = n * n, i = a * a * a, !(ve(s) < Dp)); ++o)
    ;
  return [
    ui * e * (Kn + 3 * Zn * a + i * (7 * Yn + 9 * Xn * a)) / ke(n),
    yt(me(n) / ui)
  ];
};
function L2() {
  return vi(Ic).scale(177.158);
}
function $c(e, t) {
  var n = t * t, a = n * n;
  return [
    e * (0.8707 - 0.131979 * n + a * (-0.013791 + a * (3971e-6 * n - 1529e-6 * a))),
    t * (1.007226 + n * (0.015085 + a * (-0.044475 + 0.028874 * n - 5916e-6 * a)))
  ];
}
$c.invert = function(e, t) {
  var n = t, a = 25, i;
  do {
    var o = n * n, s = o * o;
    n -= i = (n * (1.007226 + o * (0.015085 + s * (-0.044475 + 0.028874 * o - 5916e-6 * s))) - t) / (1.007226 + o * (0.015085 * 3 + s * (-0.044475 * 7 + 0.028874 * 9 * o - 5916e-6 * 11 * s)));
  } while (ve(i) > ae && --a > 0);
  return [
    e / (0.8707 + (o = n * n) * (-0.131979 + o * (-0.013791 + o * o * o * (3971e-6 - 1529e-6 * o)))),
    n
  ];
};
function w2() {
  return vi($c).scale(175.295);
}
function zc(e, t) {
  return [ke(t) * me(e), me(t)];
}
zc.invert = S2(yt);
function T2() {
  return vi(zc).scale(249.5).clipAngle(90 + ae);
}
function Jn() {
  return Jn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Jn.apply(this, arguments);
}
function N2(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Qt(e) {
  var t = e.graticule, n = e.lines, a = e.outline, i = e.extent, o = e.extentMajor, s = e.extentMinor, c = e.step, r = e.stepMajor, g = e.stepMinor, u = e.precision, p = e.children, d = N2(e, ["graticule", "lines", "outline", "extent", "extentMajor", "extentMinor", "step", "stepMajor", "stepMinor", "precision", "children"]), h = Zp();
  return i && h.extent(i), o && h.extentMajor(o), s && h.extentMinor(s), c && h.step(c), r && h.stepMajor(r), g && h.stepMinor(g), u && h.precision(u), p ? /* @__PURE__ */ ie.createElement(ie.Fragment, null, p({
    graticule: h
  })) : /* @__PURE__ */ ie.createElement(ho, {
    className: "visx-geo-graticule"
  }, t && /* @__PURE__ */ ie.createElement("path", Jn({
    d: t(h()),
    fill: "none",
    stroke: "black"
  }, d)), n && h.lines().map(function(m, S) {
    return /* @__PURE__ */ ie.createElement("g", {
      key: S
    }, /* @__PURE__ */ ie.createElement("path", Jn({
      d: n(m),
      fill: "none",
      stroke: "black"
    }, d)));
  }), a && /* @__PURE__ */ ie.createElement("path", Jn({
    d: a(h.outline()),
    fill: "none",
    stroke: "black"
  }, d)));
}
Qt.propTypes = {
  graticule: V.func,
  lines: V.func,
  outline: V.func,
  children: V.func,
  precision: V.number
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
function M2(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var E2 = {
  orthographic: function() {
    return T2();
  },
  albers: function() {
    return Oc();
  },
  albersUsa: function() {
    return C2();
  },
  mercator: function() {
    return b2();
  },
  naturalEarth: function() {
    return w2();
  },
  equalEarth: function() {
    return L2();
  }
};
function ki(e) {
  var t = e.data, n = e.projection, a = n === void 0 ? "mercator" : n, i = e.projectionFunc, o = e.clipAngle, s = e.clipExtent, c = e.scale, r = e.translate, g = e.center, u = e.rotate, p = e.precision, d = e.fitExtent, h = e.fitSize, m = e.centroid, S = e.graticule, y = e.graticuleLines, w = e.graticuleOutline, k = e.className, f = e.innerRef, T = e.pointRadius, L = e.children, M = M2(e, ["data", "projection", "projectionFunc", "clipAngle", "clipExtent", "scale", "translate", "center", "rotate", "precision", "fitExtent", "fitSize", "centroid", "graticule", "graticuleLines", "graticuleOutline", "className", "innerRef", "pointRadius", "children"]), x = typeof a == "string" ? E2[a] : a, R = x();
  o && R.clipAngle && R.clipAngle(o), s && R.clipExtent && R.clipExtent(s), c && R.scale && R.scale(c), r && R.translate && R.translate(r), g && R.center && R.center(g), u && R.rotate && R.rotate(u), p && R.precision && R.precision(p), d && R.fitExtent && R.fitExtent.apply(R, d), h && R.fitSize && R.fitSize.apply(R, h);
  var z = l2().projection(R);
  T && z.pointRadius(T);
  var F = t.map(function(I, $) {
    return {
      feature: I,
      type: a,
      projection: R,
      index: $,
      centroid: z.centroid(I),
      path: z(I)
    };
  });
  return L ? /* @__PURE__ */ ie.createElement(ie.Fragment, null, L({
    path: z,
    features: F,
    projection: R
  })) : /* @__PURE__ */ ie.createElement(ho, {
    className: "visx-geo"
  }, S && !S.foreground && /* @__PURE__ */ ie.createElement(Qt, Dt({
    graticule: function($) {
      return z($) || "";
    }
  }, S)), y && !y.foreground && /* @__PURE__ */ ie.createElement(Qt, Dt({
    lines: function($) {
      return z($) || "";
    }
  }, y)), w && !w.foreground && /* @__PURE__ */ ie.createElement(Qt, Dt({
    outline: function($) {
      return z($) || "";
    }
  }, w)), F.map(function(I, $) {
    return /* @__PURE__ */ ie.createElement("g", {
      key: a + "-" + $
    }, /* @__PURE__ */ ie.createElement("path", Dt({
      className: Ot("visx-geo-" + a, k),
      d: I.path || "",
      ref: f && f(I, $)
    }, M)), m && m(I.centroid, I));
  }), i && i(R), S && S.foreground && /* @__PURE__ */ ie.createElement(Qt, Dt({
    graticule: function($) {
      return z($) || "";
    }
  }, S)), y && y.foreground && /* @__PURE__ */ ie.createElement(Qt, Dt({
    lines: function($) {
      return z($) || "";
    }
  }, y)), w && w.foreground && /* @__PURE__ */ ie.createElement(Qt, Dt({
    outline: function($) {
      return z($) || "";
    }
  }, w)));
}
ki.propTypes = {
  data: V.array.isRequired,
  projectionFunc: V.func,
  clipAngle: V.number,
  scale: V.number,
  precision: V.number,
  centroid: V.func,
  className: V.string,
  children: V.func,
  innerRef: V.func,
  pointRadius: V.number
};
function Vr() {
  return Vr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Vr.apply(this, arguments);
}
function x2(e) {
  return /* @__PURE__ */ ie.createElement(ki, Vr({
    projection: "albersUsa"
  }, e));
}
function Hr() {
  return Hr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Hr.apply(this, arguments);
}
function di(e) {
  return /* @__PURE__ */ ie.createElement(ki, Hr({
    projection: "mercator"
  }, e));
}
function Kl(e) {
  return /* @__PURE__ */ ie.createElement(ki, e);
}
const P2 = "Topology", D2 = [
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
], A2 = {
  scale: [
    823601132486181e-18,
    546229125192084e-18
  ],
  translate: [
    -170.84530299432993,
    -14.373864584355845
  ]
}, R2 = {
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
}, Zl = {
  type: P2,
  arcs: D2,
  transform: A2,
  objects: R2
}, bt = (e) => `https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/cb_${e}_us_county_20m.json`, O2 = (e) => new Promise((t, n) => {
  const a = async (o) => {
    o.status !== 200 ? o = await import(
      /* webpackChunkName: "cb_2019_us_county_20m" */
      "./storybook-cb_2019_us_county_20m-548642e6.es.js"
    ) : o = await o.json();
    const s = [o, Zl].flatMap((g) => Mt(g, g.objects.counties).features), c = [o, Zl].flatMap((g) => Mt(g, g.objects.states).features);
    t({
      year: e || "default",
      fulljson: o,
      counties: s,
      states: c
    });
  }, i = parseInt(e);
  if (isNaN(i))
    fetch(bt(2019)).then(a);
  else if (i > 2022)
    fetch(bt(2022)).then(a);
  else if (i < 2013)
    fetch(bt(2013)).then(a);
  else
    switch (i) {
      case 2022:
        fetch(bt(2022)).then(a);
        break;
      case 2021:
        fetch(bt(2021)).then(a);
        break;
      case 2020:
        fetch(bt(2020)).then(a);
        break;
      case 2018:
      case 2017:
      case 2016:
      case 2015:
        fetch(bt(2015)).then(a);
        break;
      case 2014:
        fetch(bt(2014)).then(a);
        break;
      case 2013:
        fetch(bt(2013)).then(a);
        break;
      default:
        fetch(bt(2019)).then(a);
        break;
    }
}), _c = (e, t) => {
  let n = e.general.countyCensusYear;
  if (e.general.filterControlsCountyYear && t && t.length > 0) {
    let a = t.filter((i) => i.columnName === e.general.filterControlsCountyYear);
    a.length > 0 && a[0].active && (n = a[0].active);
  }
  return n || "default";
}, I2 = (e, t, n) => {
  let a = _c(t, n);
  return (e == null ? void 0 : e.year) && (!a || a === (e == null ? void 0 : e.year));
}, $2 = (e) => Object.keys(e).filter((a) => a !== "fromHash").length > 0, Uc = (e, t) => {
  var n, a, i, o;
  return !e.general.filterControlsStatePicked || !t ? (a = (n = e == null ? void 0 : e.general) == null ? void 0 : n.statePicked) == null ? void 0 : a.stateName : $2(t) ? ((o = (i = Object.values(t)) == null ? void 0 : i.map((r) => r[e.general.filterControlsStatePicked])) == null ? void 0 : o[0]) || e.general.statePicked.stateName || "Alabama" : null;
}, Kt = () => {
  const { config: e, setConfig: t, setSharedFilter: n, customNavigationHandler: a } = P.useContext(fe), i = P.useContext(it);
  return { geoClickHandler: (s, c) => {
    if (n && n(e.uid, c), ["world-geocode"].includes(e.general.type)) {
      const r = c[e.columns.latitude.name], g = c[e.columns.longitude.name];
      t({
        ...e,
        mapPosition: { coordinates: [g, r], zoom: 3 }
      });
    }
    if (window.matchMedia("(any-hover: none)").matches || e.tooltips.appearanceType === "click") {
      i({ type: "SET_MODAL", payload: {
        geoName: s,
        keyedData: c
      } });
      return;
    }
    e.columns.navigate && c[e.columns.navigate.name] && za(e.general.navigationTarget, c[e.columns.navigate.name], a);
  } };
}, Co = ({ setSharedFilterValue: e, isFilterValueSupported: t, tooltipId: n, projection: a }) => {
  const {
    config: i,
    topoData: o,
    data: s,
    position: c,
    legendMemo: r,
    legendSpecialClassLastMemo: g,
    runtimeLegend: u
  } = P.useContext(fe), { geoClickHandler: p } = Kt(), { applyTooltipsToGeo: d } = qt(), { geoColumnName: h, latitudeColumnName: m, longitudeColumnName: S, primaryColumnName: y } = ro(i.columns), { additionalCityStyles: w } = i.visual || [];
  if (!a)
    return;
  const k = s ? Object.keys(s).reduce((L, M) => {
    const x = s[M];
    return L[x[h]] = x, L;
  }, {}) : {};
  if (i.general.type === "bubble") {
    const L = Math.max(
      ...s ? Object.keys(s).map((x) => s[x][i.columns.primary.name]) : [0]
    );
    if (!Object.values(s).sort(
      (x, R) => x[y] < R[y] ? 1 : -1
    ))
      return;
    var f = Ts().domain([1, L]).range([i.visual.minBubbleSize, i.visual.maxBubbleSize]);
  }
  const T = Object.keys(k).filter((L) => L !== void 0 || s[L] !== void 0);
  return T ? T.map((L, M) => {
    var W;
    let x;
    s && Object.keys(s).forEach((B) => {
      L === s[B][i.columns.geo.name] && (x = s[B]);
    }), x || (x = s ? s[L] : void 0);
    const R = ea(Ie(L)), z = x ? xe(x, i, u, r, g) : s[L] ? xe(s[L], i, u, r, g) : !1;
    if (z === !1)
      return !0;
    const F = d(R, x || s[L]), I = i.visual.geoCodeCircleSize || 8, $ = {
      fillOpacity: i.general.type === "bubble" ? 0.4 : 1
    }, U = Vt(i), b = /* @__PURE__ */ l(
      "path",
      {
        className: "marker",
        d: "M0,0l-8.8-17.7C-12.1-24.3-7.4-32,0-32h0c7.4,0,12.1,7.7,8.8,14.3L0,0z",
        title: "Select for more information",
        onClick: () => p(R, x),
        "data-tooltip-id": `tooltip__${n}`,
        "data-tooltip-html": F,
        transform: `scale(${I / 7.5})`,
        stroke: U,
        strokeWidth: "2px",
        tabIndex: "-1",
        ...$
      }
    );
    let C = "";
    !(x != null && x[S]) && !(x != null && x[m]) && L && hn[L.toUpperCase()] && (C = `translate(${a(hn[L.toUpperCase()])})`);
    let N = !1;
    if (x != null && x[S] && (x != null && x[m])) {
      let B = [Number(x == null ? void 0 : x[S]), Number(x == null ? void 0 : x[m])];
      C = `translate(${a(B)})`, N = !0;
    }
    if (x != null && x[S] && (x != null && x[m]) && i.general.geoType === "single-state") {
      const B = Uc(i, s), j = (W = o == null ? void 0 : o.states) == null ? void 0 : W.find((X) => X.properties.name === B), H = a.fitExtent(
        [
          [ze, ze],
          [_e - ze, Ue - ze]
        ],
        j
      );
      let K = [Number(x == null ? void 0 : x[S]), Number(x == null ? void 0 : x[m])];
      C = `translate(${H(K)}) scale(${i.visual.geoCodeCircleSize / (c.zoom > 1 ? c.zoom : 1)})`, N = !0;
    }
    if (!C)
      return;
    const A = {
      fill: z[0],
      opacity: !t || t && L === e ? 1 : 0.5,
      stroke: e && t && s[L] && s[L][i.columns.geo.name] === e ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.4)",
      "&:hover": {
        fill: z[1],
        outline: 0
      },
      "&:active": {
        fill: z[2],
        outline: 0
      },
      cursor: N ? "pointer" : "default"
    };
    (i.columns.navigate && (x != null && x[i.columns.navigate.name]) && x[i.columns.navigate.name] || i.tooltips.appearanceType === "click") && (A.cursor = "pointer");
    const _ = {
      onClick: () => p(R, x),
      size: i.general.type === "bubble" ? f(x[y]) : I * 30,
      title: "Select for more information",
      "data-tooltip-id": `tooltip__${n}`,
      "data-tooltip-html": F,
      stroke: U,
      strokeWidth: "2px",
      tabIndex: -1,
      ...$
    }, O = {
      circle: /* @__PURE__ */ l(fs, { ..._ }),
      pin: b,
      square: /* @__PURE__ */ l(ms, { ..._ }),
      diamond: /* @__PURE__ */ l(ys, { ..._ }),
      star: /* @__PURE__ */ l(ao, { ..._ }),
      triangle: /* @__PURE__ */ l(Cs, { ..._ })
    }, G = Object.values(s).filter((B) => w == null ? void 0 : w.some((j) => String(B[j.column]) === String(j.value))).map((B) => ({ ...w.find((H) => String(B[H.column]) === String(H.value)), ...B })).find((B) => Object.keys(B).find((j) => B[j] === L));
    if (G !== void 0 && G.shape) {
      if (!(x != null && x[S]) && !(x != null && x[m]) && L && hn[L.toUpperCase()]) {
        let B = `translate(${a(hn[L.toUpperCase()])})`;
        return /* @__PURE__ */ l("g", { transform: B, style: A, className: "geo-point", tabIndex: -1, children: O[G.shape.toLowerCase()] }, M);
      }
      if (x != null && x[S] && (x != null && x[m])) {
        const B = [Number(x == null ? void 0 : x[S]), Number(x == null ? void 0 : x[m])];
        let j = `translate(${a(B)})`;
        return /* @__PURE__ */ l("g", { transform: j, style: A, className: "geo-point", tabIndex: -1, children: O[G.shape.toLowerCase()] }, M);
      }
    }
    if ((z == null ? void 0 : z[0]) !== "#000000")
      return /* @__PURE__ */ l("g", { transform: C, style: A, className: "geo-point", tabIndex: -1, children: O[i.visual.cityStyle.toLowerCase()] }, M);
  }) : !0;
}, Yl = {
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
}, z2 = {
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
}, Fc = ({ customProjection: e }) => {
  const { config: t, tooltipId: n, legendMemo: a, legendSpecialClassLastMemo: i, setRuntimeData: o, runtimeData: s, runtimeLegend: c } = P.useContext(fe), { columns: r, data: g, general: u, visual: p } = t, { geoType: d, allowMapZoom: h } = u, { minBubbleSize: m, maxBubbleSize: S, showBubbleZeros: y, extraBubbleBorder: w } = p, k = y ? 0 : 1, f = 10, T = P.useContext(it), { geoClickHandler: L } = Kt(), { applyTooltipsToGeo: M } = qt(), { primaryColumnName: x, geoColumnName: R } = ro(r), z = Math.max(...g.map((C) => C[x])), F = Ts().domain([k, z]).range([m, S]), $ = (() => {
    try {
      if (d === "world")
        return dc();
      if (d === "us")
        return Ep().translate([_e / 2 + 15, Ue / 2]);
      if (e)
        return e;
      throw new Error("No projection found in BubbleList component");
    } catch (C) {
      console.error(C);
    }
  })(), U = (C) => {
    var H;
    if (!h)
      return;
    const A = (H = g.filter((K) => K[R] === C[R])[0]) == null ? void 0 : H.uid;
    if (!A)
      return null;
    const _ = Yl[A], O = _[1], G = _[0], W = [O, G], B = s[A], j = {
      [A]: B
    };
    T({ type: "SET_POSITION", payload: { coordinates: W, zoom: 3 } }), o(j);
  }, b = Object.values(s).sort(
    (C, N) => C[x] < N[x] ? 1 : -1
  );
  if (b) {
    if (d === "world")
      return b && b.map((C) => {
        let N = Yl[C.uid];
        if (!N)
          return !0;
        const A = Ie(C[R]), _ = M(A, C), O = xe(C, t, c, a, i);
        if ((Math.floor(Number(C[x])) === 0 || C[x] === "") && !y)
          return;
        let G = `translate(${$([N[1], N[0]])})`, W, B;
        if (!$(N))
          return !0;
        const j = /* @__PURE__ */ E(re, { children: [
          /* @__PURE__ */ l(
            "circle",
            {
              tabIndex: -1,
              className: `bubble country--${A}`,
              cx: Number($(N[1], N[0])[0]) || 0,
              cy: Number($(N[1], N[0])[1]) || 0,
              r: Number(F(C[x])),
              fill: O[0],
              stroke: O[0],
              strokeWidth: 1.25,
              fillOpacity: 0.4,
              onPointerDown: (H) => {
                W = H.clientX, B = H.clientY;
              },
              onPointerUp: (H) => {
                W && B && H.clientX > W - f && H.clientX < W + f && H.clientY > B - f && H.clientY < B + f && (U(C), W = void 0, B = void 0);
              },
              transform: G,
              style: { transition: "all .25s ease-in-out", cursor: "pointer" },
              "data-tooltip-id": `tooltip__${n}`,
              "data-tooltip-html": _
            },
            `circle-${A.replace(" ", "")}`
          ),
          w && /* @__PURE__ */ l(
            "circle",
            {
              tabIndex: -1,
              className: "bubble",
              cx: Number($(N[1], N[0])[0]) || 0,
              cy: Number($(N[1], N[0])[1]) || 0,
              r: Number(F(C[x])) + 1,
              fill: "transparent",
              stroke: "white",
              strokeWidth: 0.5,
              onPointerDown: (H) => {
                W = H.clientX, B = H.clientY;
              },
              onPointerUp: (H) => {
                W && B && H.clientX > W - f && H.clientX < W + f && H.clientY > B - f && H.clientY < B + f && (U(C), W = void 0, B = void 0);
              },
              transform: G,
              style: { transition: "all .25s ease-in-out", cursor: "pointer" },
              "data-tooltip-id": `tooltip__${n}`,
              "data-tooltip-html": _
            },
            `circle-${A.replace(" ", "")}`
          )
        ] });
        return /* @__PURE__ */ l("g", { tabIndex: -1, children: j }, `group-${A.replace(" ", "")}`);
      });
    if (d === "us")
      return b && b.map((C) => {
        let N = z2[C.uid];
        if (Number(F(C[x])) === 0 || (C[x] === null && (C[x] = ""), (Math.floor(Number(C[x])) === 0 || C[x] === "") && !y))
          return;
        if (!N)
          return !0;
        let A = Number(N.Longitude), _ = Number(N.Latitude), O = [A, _], G = N.Name;
        if (!O)
          return !0;
        G = Ie(G);
        const W = M(G, C), B = xe(C, t, c, a, i);
        let j = `translate(${$([O[1], O[0]])})`;
        if (!$(O))
          return !0;
        let H, K;
        const X = /* @__PURE__ */ E(re, { children: [
          /* @__PURE__ */ l(
            "circle",
            {
              tabIndex: -1,
              className: "bubble",
              cx: $(O)[0] || 0,
              cy: $(O)[1] || 0,
              r: Number(F(C[x])),
              fill: B[0],
              stroke: B[0],
              strokeWidth: 1.25,
              fillOpacity: 0.4,
              onPointerDown: (J) => {
                H = J.clientX, K = J.clientY;
              },
              onPointerUp: (J) => {
                H && K && J.clientX > H - f && J.clientX < H + f && J.clientY > K - f && J.clientY < K + f && (L(G, N), H = void 0, K = void 0);
              },
              transform: j,
              style: { transition: "all .25s ease-in-out", cursor: "pointer" },
              "data-tooltip-id": `tooltip__${n}`,
              "data-tooltip-html": W
            },
            `circle-${G.replace(" ", "")}`
          ),
          w && /* @__PURE__ */ l(
            "circle",
            {
              tabIndex: -1,
              className: "bubble",
              cx: $(O)[0] || 0,
              cy: $(O)[1] || 0,
              r: Number(F(C[x])) + 1,
              fill: "transparent",
              stroke: "white",
              strokeWidth: 0.5,
              fillOpacity: 0.4,
              onPointerDown: (J) => {
                H = J.clientX, K = J.clientY;
              },
              onPointerUp: (J) => {
                H && K && J.clientX > H - f && J.clientX < H + f && J.clientY > K - f && J.clientY < K + f && (L(G, N), H = void 0, K = void 0);
              },
              transform: j,
              style: { transition: "all .25s ease-in-out", cursor: "pointer" },
              "data-tooltip-id": `tooltip__${n}`,
              "data-tooltip-html": W
            },
            `circle-${G.replace(" ", "")}`
          )
        ] });
        return /* @__PURE__ */ l("g", { children: X }, `group-${G.replace(" ", "")}`);
      });
  }
};
var be = 1e-6;
function wa() {
}
var Nn = 1 / 0, pi = Nn, la = -Nn, hi = la, Xl = {
  point: _2,
  lineStart: wa,
  lineEnd: wa,
  polygonStart: wa,
  polygonEnd: wa,
  result: function() {
    var e = [[Nn, pi], [la, hi]];
    return la = hi = -(pi = Nn = 1 / 0), e;
  }
};
function _2(e, t) {
  e < Nn && (Nn = e), e > la && (la = e), t < pi && (pi = t), t > hi && (hi = t);
}
function So(e, t, n) {
  var a = t[1][0] - t[0][0], i = t[1][1] - t[0][1], o = e.clipExtent && e.clipExtent();
  e.scale(150).translate([0, 0]), o != null && e.clipExtent(null), At(n, e.stream(Xl));
  var s = Xl.result(), c = Math.min(a / (s[1][0] - s[0][0]), i / (s[1][1] - s[0][1])), r = +t[0][0] + (a - c * (s[1][0] + s[0][0])) / 2, g = +t[0][1] + (i - c * (s[1][1] + s[0][1])) / 2;
  return o != null && e.clipExtent(o), e.scale(c * 150).translate([r, g]);
}
function Gc(e, t, n) {
  return So(e, [[0, 0], t], n);
}
const qr = Math.PI, Kr = 2 * qr, en = 1e-6, U2 = Kr - en;
function Zr() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function bo() {
  return new Zr();
}
Zr.prototype = bo.prototype = {
  constructor: Zr,
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
  bezierCurveTo: function(e, t, n, a, i, o) {
    this._ += "C" + +e + "," + +t + "," + +n + "," + +a + "," + (this._x1 = +i) + "," + (this._y1 = +o);
  },
  arcTo: function(e, t, n, a, i) {
    e = +e, t = +t, n = +n, a = +a, i = +i;
    var o = this._x1, s = this._y1, c = n - e, r = a - t, g = o - e, u = s - t, p = g * g + u * u;
    if (i < 0)
      throw new Error("negative radius: " + i);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (p > en)
      if (!(Math.abs(u * c - r * g) > en) || !i)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var d = n - o, h = a - s, m = c * c + r * r, S = d * d + h * h, y = Math.sqrt(m), w = Math.sqrt(p), k = i * Math.tan((qr - Math.acos((m + p - S) / (2 * y * w))) / 2), f = k / w, T = k / y;
        Math.abs(f - 1) > en && (this._ += "L" + (e + f * g) + "," + (t + f * u)), this._ += "A" + i + "," + i + ",0,0," + +(u * d > g * h) + "," + (this._x1 = e + T * c) + "," + (this._y1 = t + T * r);
      }
  },
  arc: function(e, t, n, a, i, o) {
    e = +e, t = +t, n = +n, o = !!o;
    var s = n * Math.cos(a), c = n * Math.sin(a), r = e + s, g = t + c, u = 1 ^ o, p = o ? a - i : i - a;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + r + "," + g : (Math.abs(this._x1 - r) > en || Math.abs(this._y1 - g) > en) && (this._ += "L" + r + "," + g), n && (p < 0 && (p = p % Kr + Kr), p > U2 ? this._ += "A" + n + "," + n + ",0,1," + u + "," + (e - s) + "," + (t - c) + "A" + n + "," + n + ",0,1," + u + "," + (this._x1 = r) + "," + (this._y1 = g) : p > en && (this._ += "A" + n + "," + n + ",0," + +(p >= qr) + "," + u + "," + (this._x1 = e + n * Math.cos(i)) + "," + (this._y1 = t + n * Math.sin(i))));
  },
  rect: function(e, t, n, a) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +a + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function F2(e) {
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
function G2() {
  var e, t, n = uo(), a, i = jt().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), o, s = jt().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), c, r, g = { point: function(d, h) {
    r = [d, h];
  } };
  function u(d) {
    var h = d[0], m = d[1];
    return r = null, a.point(h, m), r || (o.point(h, m), r) || (c.point(h, m), r);
  }
  u.invert = function(d) {
    var h = n.scale(), m = n.translate(), S = (d[0] - m[0]) / h, y = (d[1] - m[1]) / h;
    return (y >= 0.12 && y < 0.234 && S >= -0.425 && S < -0.214 ? i : y >= 0.166 && y < 0.234 && S >= -0.214 && S < -0.115 ? s : n).invert(d);
  }, u.stream = function(d) {
    return e && t === d ? e : e = F2([n.stream(t = d), i.stream(d), s.stream(d)]);
  }, u.precision = function(d) {
    return arguments.length ? (n.precision(d), i.precision(d), s.precision(d), p()) : n.precision();
  }, u.scale = function(d) {
    return arguments.length ? (n.scale(d), i.scale(d * 0.35), s.scale(d), u.translate(n.translate())) : n.scale();
  }, u.translate = function(d) {
    if (!arguments.length)
      return n.translate();
    var h = n.scale(), m = +d[0], S = +d[1];
    return a = n.translate(d).clipExtent([[m - 0.455 * h, S - 0.238 * h], [m + 0.455 * h, S + 0.238 * h]]).stream(g), o = i.translate([m - 0.307 * h, S + 0.201 * h]).clipExtent([[m - 0.425 * h + be, S + 0.12 * h + be], [m - 0.214 * h - be, S + 0.234 * h - be]]).stream(g), c = s.translate([m - 0.205 * h, S + 0.212 * h]).clipExtent([[m - 0.214 * h + be, S + 0.166 * h + be], [m - 0.115 * h - be, S + 0.234 * h - be]]).stream(g), p();
  }, u.fitExtent = function(d, h) {
    return So(u, d, h);
  }, u.fitSize = function(d, h) {
    return Gc(u, d, h);
  };
  function p() {
    return e = t = null, u;
  }
  return u.drawCompositionBorders = function(d) {
    var h = n([-102.91, 26.3]), m = n([-104, 27.5]), S = n([-108, 29.1]), y = n([-110, 29.1]), w = n([-110, 26.7]), k = n([-112.8, 27.6]), f = n([-114.3, 30.6]), T = n([-119.3, 30.1]);
    d.moveTo(h[0], h[1]), d.lineTo(m[0], m[1]), d.lineTo(S[0], S[1]), d.lineTo(y[0], y[1]), d.moveTo(w[0], w[1]), d.lineTo(k[0], k[1]), d.lineTo(f[0], f[1]), d.lineTo(T[0], T[1]);
  }, u.getCompositionBorders = function() {
    var d = bo();
    return this.drawCompositionBorders(d), d.toString();
  }, u.scale(1070);
}
function B2(e) {
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
function Sn() {
  var e, t, n = uo(), a, i = jt().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), o, s = jt().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), c, r = jt().rotate([66, 0]).center([0, 18]).parallels([8, 18]), g, u = Tl().rotate([173, 14]), p, d = Tl().rotate([-145, -16.8]), h, m, S = { point: function(k, f) {
    m = [k, f];
  } };
  function y(k) {
    var f = k[0], T = k[1];
    return m = null, a.point(f, T), m || (o.point(f, T), m) || (c.point(f, T), m) || (g.point(f, T), m) || (p.point(f, T), m) || (h.point(f, T), m);
  }
  y.invert = function(k) {
    var f = n.scale(), T = n.translate(), L = (k[0] - T[0]) / f, M = (k[1] - T[1]) / f;
    return (M >= 0.12 && M < 0.234 && L >= -0.425 && L < -0.214 ? i : M >= 0.166 && M < 0.234 && L >= -0.214 && L < -0.115 ? s : M >= 0.2064 && M < 0.2413 && L >= 0.312 && L < 0.385 ? r : M >= 0.09 && M < 0.1197 && L >= -0.4243 && L < -0.3232 ? u : M >= -0.0518 && M < 0.0895 && L >= -0.4243 && L < -0.3824 ? d : n).invert(k);
  }, y.stream = function(k) {
    return e && t === k ? e : e = B2([n.stream(t = k), i.stream(k), s.stream(k), r.stream(k), u.stream(k), d.stream(k)]);
  }, y.precision = function(k) {
    return arguments.length ? (n.precision(k), i.precision(k), s.precision(k), r.precision(k), u.precision(k), d.precision(k), w()) : n.precision();
  }, y.scale = function(k) {
    return arguments.length ? (n.scale(k), i.scale(k * 0.35), s.scale(k), r.scale(k), u.scale(k * 2), d.scale(k), y.translate(n.translate())) : n.scale();
  }, y.translate = function(k) {
    if (!arguments.length)
      return n.translate();
    var f = n.scale(), T = +k[0], L = +k[1];
    return a = n.translate(k).clipExtent([[T - 0.455 * f, L - 0.238 * f], [T + 0.455 * f, L + 0.238 * f]]).stream(S), o = i.translate([T - 0.307 * f, L + 0.201 * f]).clipExtent([[T - 0.425 * f + be, L + 0.12 * f + be], [T - 0.214 * f - be, L + 0.233 * f - be]]).stream(S), c = s.translate([T - 0.205 * f, L + 0.212 * f]).clipExtent([[T - 0.214 * f + be, L + 0.166 * f + be], [T - 0.115 * f - be, L + 0.233 * f - be]]).stream(S), g = r.translate([T + 0.35 * f, L + 0.224 * f]).clipExtent([[T + 0.312 * f + be, L + 0.2064 * f + be], [T + 0.385 * f - be, L + 0.233 * f - be]]).stream(S), p = u.translate([T - 0.492 * f, L + 0.09 * f]).clipExtent([[T - 0.4243 * f + be, L + 0.0903 * f + be], [T - 0.3233 * f - be, L + 0.1197 * f - be]]).stream(S), h = d.translate([T - 0.408 * f, L + 0.018 * f]).clipExtent([[T - 0.4244 * f + be, L - 0.0519 * f + be], [T - 0.3824 * f - be, L + 0.0895 * f - be]]).stream(S), w();
  }, y.fitExtent = function(k, f) {
    return So(y, k, f);
  }, y.fitSize = function(k, f) {
    return Gc(y, k, f);
  };
  function w() {
    return e = t = null, y;
  }
  return y.drawCompositionBorders = function(k) {
    var f = n([-110.4641, 28.2805]), T = n([-104.0597, 28.9528]), L = n([-103.7049, 25.1031]), M = n([-109.8337, 24.4531]), x = n([-124.4745, 28.1407]), R = n([-110.931, 30.8844]), z = n([-109.8337, 24.4531]), F = n([-122.4628, 21.8562]), I = n([-76.8579, 25.1544]), $ = n([-72.429, 24.2097]), U = n([-72.8265, 22.7056]), b = n([-77.1852, 23.6392]), C = n([-125.0093, 29.7791]), N = n([-118.5193, 31.3262]), A = n([-118.064, 29.6912]), _ = n([-124.4369, 28.169]), O = n([-128.1314, 37.4582]), G = n([-125.2132, 38.214]), W = n([-122.3616, 30.5115]), B = n([-125.0315, 29.8211]);
    k.moveTo(f[0], f[1]), k.lineTo(T[0], T[1]), k.lineTo(L[0], L[1]), k.lineTo(L[0], L[1]), k.lineTo(M[0], M[1]), k.closePath(), k.moveTo(x[0], x[1]), k.lineTo(R[0], R[1]), k.lineTo(z[0], z[1]), k.lineTo(z[0], z[1]), k.lineTo(F[0], F[1]), k.closePath(), k.moveTo(I[0], I[1]), k.lineTo($[0], $[1]), k.lineTo(U[0], U[1]), k.lineTo(U[0], U[1]), k.lineTo(b[0], b[1]), k.closePath(), k.moveTo(C[0], C[1]), k.lineTo(N[0], N[1]), k.lineTo(A[0], A[1]), k.lineTo(A[0], A[1]), k.lineTo(_[0], _[1]), k.closePath(), k.moveTo(O[0], O[1]), k.lineTo(G[0], G[1]), k.lineTo(W[0], W[1]), k.lineTo(W[0], W[1]), k.lineTo(B[0], B[1]), k.closePath();
  }, y.getCompositionBorders = function() {
    var k = bo();
    return this.drawCompositionBorders(k), k.toString();
  }, y.scale(1070);
}
const st = (e) => {
  const { item: t, index: n, centroid: a, iconSize: i, textColor: o = "#000", isTerritory: s } = e;
  if (a)
    return s ? /* @__PURE__ */ E(na, { style: { transform: "translate(36%, 50%)" }, children: [
      t.shape === "Arrow Down" && /* @__PURE__ */ l(er, { size: 12, stroke: "none", fontWeight: 100 }),
      t.shape === "Arrow Up" && /* @__PURE__ */ l(nr, { size: 12, stroke: "none", fontWeight: 100 }),
      t.shape === "Arrow Right" && /* @__PURE__ */ l(tr, { size: 12, stroke: "none", fontWeight: 100 }),
      t.shape === "Arrow Left" && /* @__PURE__ */ l(Xo, { size: 12, stroke: "none", fontWeight: 100 })
    ] }, `territory-hex--${n}`) : /* @__PURE__ */ E(
      na,
      {
        top: a[1] - 5,
        left: a[0] - i,
        color: o,
        textAnchor: "start",
        children: [
          t.shape === "Arrow Down" && /* @__PURE__ */ l(er, {}),
          t.shape === "Arrow Up" && /* @__PURE__ */ l(nr, {}),
          t.shape === "Arrow Right" && /* @__PURE__ */ l(tr, {}),
          t.shape === "Arrow Left" && /* @__PURE__ */ l(Xo, {})
        ]
      },
      `hex--${t.key}-${t.value}-${n}`
    );
}, ct = {
  small: 8,
  medium: 10,
  large: 12
}, Jl = {
  "US-VT": [50, -8],
  "US-NH": [34, 2],
  "US-MA": [30, -1],
  "US-RI": [28, 2],
  "US-CT": [35, 10],
  "US-NJ": [42, 1],
  "US-DE": [33, 0],
  "US-MD": [47, 10]
}, Gi = {
  "US-FL": [15, 3],
  "US-AK": [0, -8],
  "US-CA": [-10, 0],
  "US-NY": [5, 0],
  "US-MI": [13, 20],
  "US-LA": [-10, -3],
  "US-HI": [-10, 10],
  "US-ID": [0, 10],
  "US-WV": [-2, 2]
}, W2 = ({
  dataTooltipHtml: e,
  dataTooltipId: t,
  handleShapeClick: n,
  label: a,
  stroke: i,
  strokeColor: o,
  strokeWidth: s,
  territory: c,
  territoryData: r,
  textColor: g,
  ...u
}) => {
  const { config: p } = P.useContext(fe), d = p.general.displayAsHex, h = (m, S = "#FFFFFF", y) => {
    var R;
    let w = y ? y(ia(m)) : [22, 17.5], k = (R = m == null ? void 0 : m.properties) != null && R.iso ? m.properties.iso : m != null && m.uid ? m.uid : `US-${a}`;
    const f = (z, F, I = !1) => (I || (w = y(ia(F))), /* @__PURE__ */ l(re, { children: p.hexMap.shapeGroups.map(($, U) => $.items.map((b, C) => {
      if (z)
        switch (b.operator) {
          case "=":
            if ((z == null ? void 0 : z[b.key]) === b.value || Number(z[b.key]) === Number(b.value))
              return /* @__PURE__ */ l(st, { item: b, index: C, centroid: w, isTerritory: !0 });
            break;
          case "≠":
            if ((z == null ? void 0 : z[b.key]) !== b.value && Number(z[b.key]) !== Number(b.value))
              return /* @__PURE__ */ l(st, { item: b, index: C, centroid: w, isTerritory: !0 });
            break;
          case "<":
            if (Number(z == null ? void 0 : z[b.key]) < Number(b.value))
              return /* @__PURE__ */ l(st, { item: b, index: C, centroid: w, isTerritory: !0 });
            break;
          case ">":
            if (Number(z[b.key]) > Number(b.value))
              return /* @__PURE__ */ l(st, { item: b, index: C, centroid: w, isTerritory: !0 });
            break;
          case "<=":
            if (Number(z[b.key]) <= Number(b.value))
              return /* @__PURE__ */ l(st, { item: b, index: C, centroid: w, isTerritory: !0 });
            break;
          case ">=":
            if (b.operator === ">=" && Number(z[b.key]) >= Number(b.value))
              return /* @__PURE__ */ l(st, { item: b, index: C, centroid: w, isTerritory: !0 });
            break;
        }
    })) }));
    if (k === void 0)
      return null;
    bn("#FFF", S);
    let T = 0, L = p.hexMap.type === "shapes" ? -10 : 5;
    if (Gi[k] && d === !1 && (T += Gi[k][0], L += Gi[k][1]), Jl[k] === void 0 || d) {
      let z = p.hexMap.type === "shapes" ? "30%" : "50%";
      return /* @__PURE__ */ E(re, { children: [
        /* @__PURE__ */ l(
          Ns,
          {
            fontSize: 14,
            x: "50%",
            y: z,
            style: { fill: "currentColor", stroke: o, fontWeight: 900, opacity: 1, fillOpacity: 1 },
            paintOrder: "stroke",
            textAnchor: "middle",
            verticalAnchor: "middle",
            onClick: n,
            "data-tooltip-id": t,
            "data-tooltip-html": e,
            children: k.substring(3)
          }
        ),
        p.general.displayAsHex && p.hexMap.type === "shapes" && f(r, m, !0)
      ] });
    }
    let [M, x] = Jl[k];
    return /* @__PURE__ */ E("g", { children: [
      /* @__PURE__ */ l(
        "line",
        {
          x1: w[0],
          y1: w[1],
          x2: w[0] + M,
          y2: w[1] + x,
          stroke: "rgba(0,0,0,.5)",
          strokeWidth: 1
        }
      ),
      /* @__PURE__ */ l(
        "text",
        {
          x: 4,
          strokeWidth: "0",
          fontSize: 13,
          style: { fill: Yi },
          alignmentBaseline: "middle",
          transform: `translate(${w[0] + M}, ${w[1] + x})`,
          onClick: n,
          "data-tooltip-id": t,
          "data-tooltip-html": e,
          children: k.substring(3)
        }
      )
    ] });
  };
  return /* @__PURE__ */ l("svg", { viewBox: "-1 -1 46 53", className: "territory-wrapper--hex", children: /* @__PURE__ */ E("g", { ...u, "data-tooltip-html": e, "data-tooltip-id": t, onClick: n, children: [
    /* @__PURE__ */ l(
      "polygon",
      {
        stroke: i,
        strokeWidth: s,
        points: "22 0 44 12.702 44 38.105 22 50.807 0 38.105 0 12.702"
      }
    ),
    p.general.displayAsHex && h(r, i, !1)
  ] }) });
}, j2 = ({
  dataTooltipId: e,
  dataTooltipHtml: t,
  handleShapeClick: n,
  hasPattern: a,
  label: i,
  stroke: o,
  strokeColor: s,
  strokeWidth: c,
  territory: r,
  textColor: g,
  backgroundColor: u,
  ...p
}) => {
  const { config: d } = P.useContext(fe), { territoryData: h, ...m } = p, S = "M42,0.5 C42.8284271,0.5 43.5,1.17157288 43.5,2 L43.5,2 L43.5,26 C43.5,26.8284271 42.8284271,27.5 42,27.5 L42,27.5 L3,27.5 C2.17157288,27.5 1.5,26.8284271 1.5,26 L1.5,26 L1.5,2 C1.5,1.17157288 2.17157288,0.5 3,0.5 L3,0.5 Z";
  return /* @__PURE__ */ l("svg", { viewBox: "0 0 45 29", className: r, children: /* @__PURE__ */ E(
    "g",
    {
      ...m,
      strokeLinejoin: "round",
      tabIndex: -1,
      onClick: n,
      "data-tooltip-id": e,
      "data-tooltip-html": t,
      children: [
        /* @__PURE__ */ l("path", { stroke: o, strokeWidth: c, d: S, ...m }),
        /* @__PURE__ */ l(
          "text",
          {
            textAnchor: "middle",
            dominantBaseline: "middle",
            x: "50%",
            y: "54%",
            fill: g,
            stroke: s,
            className: "territory-text",
            paintOrder: "stroke",
            onClick: n,
            "data-tooltip-id": e,
            "data-tooltip-html": t,
            children: i
          }
        ),
        d.map.patterns.map((y, w) => {
          const k = y.color || bn("#FFF", u);
          return !(y.dataValue === (h == null ? void 0 : h[y.dataKey])) || !y.pattern ? null : /* @__PURE__ */ E(re, { children: [
            (y == null ? void 0 : y.pattern) === "waves" && /* @__PURE__ */ l(
              Si,
              {
                id: `territory-${r}-${y == null ? void 0 : y.dataKey}--${w}`,
                height: ct[y == null ? void 0 : y.size] ?? 10,
                width: ct[y == null ? void 0 : y.size] ?? 10,
                fill: k,
                strokeWidth: 0.25,
                complement: !0
              }
            ),
            (y == null ? void 0 : y.pattern) === "circles" && /* @__PURE__ */ l(
              Ci,
              {
                id: `territory-${r}-${y == null ? void 0 : y.dataKey}--${w}`,
                height: ct[y == null ? void 0 : y.size] ?? 10,
                width: ct[y == null ? void 0 : y.size] ?? 10,
                fill: k,
                strokeWidth: 0.5,
                complement: !0
              }
            ),
            (y == null ? void 0 : y.pattern) === "lines" && /* @__PURE__ */ l(
              yi,
              {
                id: `territory-${r}-${y == null ? void 0 : y.dataKey}--${w}`,
                height: ct[y == null ? void 0 : y.size] ?? 6,
                width: ct[y == null ? void 0 : y.size] ?? 6,
                stroke: k,
                strokeWidth: 0.75,
                orientation: ["diagonalRightToLeft"]
              }
            ),
            /* @__PURE__ */ l(
              "path",
              {
                stroke: o,
                strokeWidth: c,
                d: S,
                fill: `url(#territory-${r}-${y == null ? void 0 : y.dataKey}--${w})`,
                className: [
                  `territory-pattern-${y == null ? void 0 : y.dataKey}`,
                  `territory-pattern-${y == null ? void 0 : y.dataKey}--${y.dataValue}`
                ].join(" ")
              }
            ),
            /* @__PURE__ */ l(
              "text",
              {
                textAnchor: "middle",
                dominantBaseline: "middle",
                x: "50%",
                y: "54%",
                fill: g,
                stroke: s,
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
  ) }, r);
}, Ql = {
  Rectangle: j2,
  Hexagon: W2
}, V2 = ({ territories: e, logo: t, config: n, territoriesData: a }) => {
  const { currentViewport: i } = P.useContext(fe), o = a.filter((d) => ["US-FM", "US-MH", "US-PW"].includes(d)), s = a.filter((d) => ["US-AS", "US-GU", "US-MP", "US-PR", "US-VI"].includes(d)), c = e.filter((d) => {
    var h;
    return s.includes(`US-${(h = d == null ? void 0 : d.props) == null ? void 0 : h.label}`);
  }).sort((d, h) => d.props.label.localeCompare(h.props.label)), r = e.filter((d) => {
    var h;
    return o.includes(`US-${(h = d == null ? void 0 : d.props) == null ? void 0 : h.label}`);
  }).sort((d, h) => d.props.label.localeCompare(h.props.label)), g = v1(i), u = 9, p = g ? 30 : 45;
  return a.length > 0 && /* @__PURE__ */ l(re, { children: /* @__PURE__ */ E("div", { children: [
    /* @__PURE__ */ l("div", { className: "d-flex mt-4", children: n.general.type === "data" && t && /* @__PURE__ */ l("img", { src: t, alt: "", className: "map-logo", style: { maxWidth: "50px" } }) }),
    /* @__PURE__ */ E("div", { className: "d-flex flex-wrap", style: { columnGap: "1.5rem" }, children: [
      (c.length > 0 || n.general.territoriesAlwaysShow) && /* @__PURE__ */ E("div", { children: [
        /* @__PURE__ */ l("h5", { className: "territories-label", children: "U.S. territories" }),
        /* @__PURE__ */ l(
          "span",
          {
            className: `mt-2 ${g ? "mb-3" : "mb-4"} d-flex territories`,
            style: { minWidth: `${c.length * p + (c.length - 1) * u}px` },
            children: c
          }
        )
      ] }),
      (r.length > 0 || n.general.territoriesAlwaysShow) && /* @__PURE__ */ E("div", { children: [
        /* @__PURE__ */ l("h5", { className: "territories-label", children: "Freely associated states" }),
        /* @__PURE__ */ l(
          "span",
          {
            className: `mt-2 ${g ? "mb-3" : "mb-4"} d-flex territories`,
            style: {
              minWidth: `${r.length * p + (r.length - 1) * u}px`
            },
            children: r
          }
        )
      ] })
    ] })
  ] }) });
}, { features: H2 } = Mt(Jo, Jo.objects.states), Bi = {
  "US-VT": [53, -7],
  "US-NH": [38, 7],
  "US-MA": [34, -1],
  "US-RI": [29, 7],
  "US-CT": [43, 20],
  "US-NJ": [26, 7],
  "US-DE": [33, 0],
  "US-MD": [51, 16]
}, Wi = {
  "US-FL": [15, 3],
  "US-AK": [0, -8],
  "US-CA": [-10, 0],
  "US-NY": [5, 0],
  "US-MI": [13, 20],
  "US-LA": [-10, -3],
  "US-HI": [-10, 10],
  "US-ID": [0, 10],
  "US-WV": [-2, 2]
}, q2 = () => {
  const {
    data: e,
    setSharedFilterValue: t,
    config: n,
    setConfig: a,
    tooltipId: i,
    mapId: o,
    logo: s,
    legendMemo: c,
    legendSpecialClassLastMemo: r,
    currentViewport: g,
    translate: u,
    runtimeLegend: p
  } = P.useContext(fe);
  let d = !1;
  const { general: h, columns: m, tooltips: S, hexMap: y, map: w, annotations: k } = n, { displayAsHex: f } = h, { geoClickHandler: T } = Kt(), { applyTooltipsToGeo: L } = qt(), M = P.useContext(it), x = (B) => {
    M({ type: "SET_IS_DRAGGING_ANNOTATION", payload: B });
  };
  t && (Object.keys(qn).forEach((B) => {
    qn[B].indexOf(t.toUpperCase()) !== -1 && (d = !0);
  }), Object.keys(Bt).forEach((B) => {
    Bt[B].indexOf(t.toUpperCase()) !== -1 && (d = !0);
  }), Object.keys(hn).forEach((B) => {
    B === t.toUpperCase() && (d = !0);
  }));
  const [R, z] = P.useState(null), F = P.useRef(null);
  (R == null ? void 0 : R.every((B) => {
    const j = B.properties.iso, H = e[j], K = lt(H);
    return c.current.has(K);
  })) && (F.current = e), P.useEffect(() => {
    (async () => {
      import(
        /* webpackChunkName: "us-topo" */
        "./storybook-us-topo-c55ac1ea.es.js"
      ).then((j) => {
        z(Mt(j, j.objects.states).features);
      });
    })();
  }, []), P.useEffect(() => {
    M({ type: "SET_TRANSLATE", payload: [_e / 2, Ue / 2] });
  }, [h.geoType]);
  const [$, U] = P.useState([]), b = Object.keys(Bt);
  P.useEffect(() => {
    if (h.territoriesAlwaysShow)
      U(b);
    else {
      const B = b.filter((j) => e == null ? void 0 : e[j]);
      U(B);
    }
  }, [e, F.current, h.territoriesAlwaysShow]);
  const C = Vt(n), N = Mn(), A = $.map((B, j) => {
    const H = f ? Ql.Hexagon : Ql.Rectangle, K = e == null ? void 0 : e[B];
    let X, J = {
      fill: N,
      stroke: C,
      color: Yi
    };
    const te = Bt[B][1];
    if (!K)
      return /* @__PURE__ */ l(
        H,
        {
          label: te,
          style: J,
          textColor: J.color,
          strokeColor: "#fff",
          territoryData: K,
          backgroundColor: J.fill
        },
        te
      );
    X = L(Ie(B), K);
    const Ce = xe(K, n, p, c, r);
    if (Ce) {
      let ge = !1;
      (m.navigate && K[m.navigate.name] || S.appearanceType === "click") && (ge = !0);
      const { textColor: Pe, strokeColor: Ae } = Ro(Ce[0]);
      return J = {
        color: Pe,
        fill: Ce[0],
        opacity: t && d && t !== K[m.geo.name] ? 0.5 : 1,
        stroke: t && d && t === K[m.geo.name] ? "rgba(0, 0, 0, 1)" : C,
        cursor: ge ? "pointer" : "default",
        "&:hover": {
          fill: Ce[1]
        },
        "&:active": {
          fill: Ce[2]
        }
      }, /* @__PURE__ */ l(
        H,
        {
          label: te,
          style: J,
          strokeWidth: 1,
          textColor: Pe,
          strokeColor: Ae,
          handleShapeClick: () => T(B, K),
          dataTooltipId: `tooltip__${i}`,
          dataTooltipHtml: X,
          territory: B,
          territoryData: K,
          tabIndex: -1,
          backgroundColor: J.fill
        },
        `label__${j}`
      );
    }
  });
  let _ = Cn().projection(G2().translate(u));
  const { pathArray: O } = io(n, a, _, i);
  if (!R)
    return /* @__PURE__ */ l(re, {});
  const G = (B, j) => {
    let H = h.displayStateLabels;
    B.map((X) => {
      X.feature.properties.iso && (X.feature.properties.name = ea(qn[X.feature.properties.iso][0]));
    }), B.sort((X, J) => {
      const te = X.feature.properties.name.toUpperCase(), Ce = J.feature.properties.name.toUpperCase();
      return te < Ce ? -1 : te > Ce ? 1 : 0;
    });
    const K = B.map(({ feature: X, path: J = "" }, te) => {
      var Ct;
      const Ce = f ? X.properties.iso + "-hex-group" : X.properties.iso + "-group";
      let ge = {
        fill: N,
        cursor: "default"
      }, Pe = X.properties.iso, Ae = X.properties.name;
      if (!Pe)
        return;
      const Q = e == null ? void 0 : e[Pe];
      let Ye;
      Q !== void 0 && (Ye = xe(Q, n, p, c, r));
      const zt = Ie(Pe);
      if (Ye && Ye[0] !== "#000000") {
        const cn = L(zt, Q);
        ge = {
          fill: n.general.type !== "bubble" ? Ye[0] : N,
          opacity: t && d && t !== Q[m.geo.name] ? 0.5 : 1,
          stroke: t && d && t === Q[m.geo.name] ? "rgba(0, 0, 0, 1)" : C,
          cursor: "default",
          "&:hover": {
            fill: n.general.type !== "bubble" ? Ye[1] : N
          },
          "&:active": {
            fill: n.general.type !== "bubble" ? Ye[2] : N
          }
        }, (m.navigate && Q[m.navigate.name] || S.appearanceType === "click") && (ge.cursor = "pointer");
        const En = (Re, Me, St) => {
          const Te = j(ia(Me)), Oe = 8, Fe = bn("#FFF", St);
          return /* @__PURE__ */ l(re, { children: y.shapeGroups.map((Xe, v) => Xe.items.map((D, q) => {
            switch (D.operator) {
              case "=":
                if (Re[D.key] === D.value || Number(Re[D.key]) === Number(D.value))
                  return /* @__PURE__ */ l(
                    st,
                    {
                      textColor: Fe,
                      item: D,
                      index: q,
                      centroid: Te,
                      iconSize: Oe
                    }
                  );
                break;
              case "≠":
                if (Re[D.key] !== D.value && Number(Re[D.key]) !== Number(D.value))
                  return /* @__PURE__ */ l(
                    st,
                    {
                      textColor: Fe,
                      item: D,
                      index: q,
                      centroid: Te,
                      iconSize: Oe
                    }
                  );
                break;
              case "<":
                if (Number(Re[D.key]) < Number(D.value))
                  return /* @__PURE__ */ l(
                    st,
                    {
                      textColor: Fe,
                      item: D,
                      index: q,
                      centroid: Te,
                      iconSize: Oe
                    }
                  );
                break;
              case ">":
                if (Number(Re[D.key]) > Number(D.value))
                  return /* @__PURE__ */ l(
                    st,
                    {
                      textColor: Fe,
                      item: D,
                      index: q,
                      centroid: Te,
                      iconSize: Oe
                    }
                  );
                break;
              case "<=":
                if (Number(Re[D.key]) <= Number(D.value))
                  return /* @__PURE__ */ l(
                    st,
                    {
                      textColor: Fe,
                      item: D,
                      index: q,
                      centroid: Te,
                      iconSize: Oe
                    }
                  );
                break;
              case ">=":
                if (D.operator === ">=" && Number(Re[D.key]) >= Number(D.value))
                  return /* @__PURE__ */ l(
                    st,
                    {
                      textColor: Fe,
                      item: D,
                      index: q,
                      centroid: Te,
                      iconSize: Oe
                    }
                  );
                break;
            }
          })) });
        };
        return /* @__PURE__ */ l("g", { "data-name": Ae, tabIndex: -1, children: /* @__PURE__ */ E(
          "g",
          {
            className: "geo-group",
            style: ge,
            onClick: () => T(zt, Q),
            id: Ae,
            "data-tooltip-id": `tooltip__${i}`,
            "data-tooltip-html": cn,
            tabIndex: -1,
            children: [
              /* @__PURE__ */ l("path", { tabIndex: -1, className: "single-geo", strokeWidth: 1, d: J }),
              (Ct = w == null ? void 0 : w.patterns) == null ? void 0 : Ct.map((Re, Me) => {
                const { pattern: St, dataKey: Te, size: Oe } = Re, Fe = ge.fill, Xe = Re.dataValue === (Q == null ? void 0 : Q[Re.dataKey]), v = Re.color || bn("#000", Fe);
                if (Xe)
                  return gs(Fe, v), /* @__PURE__ */ E(re, { children: [
                    St === "waves" && /* @__PURE__ */ l(
                      Si,
                      {
                        id: `${o}--${String(Te).replace(" ", "-")}--${te}`,
                        height: ct[Oe] ?? 10,
                        width: ct[Oe] ?? 10,
                        fill: v,
                        strokeWidth: 0.25
                      }
                    ),
                    St === "circles" && /* @__PURE__ */ l(
                      Ci,
                      {
                        id: `${o}--${String(Te).replace(" ", "-")}--${te}`,
                        height: ct[Oe] ?? 10,
                        width: ct[Oe] ?? 10,
                        fill: v,
                        strokeWidth: 0.5
                      }
                    ),
                    St === "lines" && /* @__PURE__ */ l(
                      yi,
                      {
                        id: `${o}--${String(Te).replace(" ", "-")}--${te}`,
                        height: ct[Oe] ?? 6,
                        width: ct[Oe] ?? 6,
                        stroke: v,
                        strokeWidth: 0.75,
                        orientation: ["diagonalRightToLeft"]
                      }
                    ),
                    /* @__PURE__ */ l(
                      "path",
                      {
                        className: `pattern-geoKey--${Te}`,
                        tabIndex: -1,
                        stroke: "transparent",
                        d: J,
                        fill: `url(#${o}--${String(Te).replace(" ", "-")}--${te})`
                      }
                    )
                  ] });
              }),
              (f || H) && W(X, Ye[0], j),
              f && y.type === "shapes" && En(Q, X, Ye[0])
            ]
          }
        ) }, Ce);
      }
      return /* @__PURE__ */ l("g", { "data-name": Ae, tabIndex: -1, children: /* @__PURE__ */ E("g", { className: "geo-group", style: ge, tabIndex: -1, children: [
        /* @__PURE__ */ l("path", { tabIndex: -1, className: "single-geo", stroke: C, strokeWidth: 1.3, d: J }),
        (f || H) && W(X, ge.fill, j)
      ] }) }, Ce);
    });
    return f || (K.push(
      /* @__PURE__ */ l(
        Co,
        {
          applyLegendToRow: xe,
          applyTooltipsToGeo: L,
          geoClickHandler: T,
          isFilterValueSupported: d,
          projection: j,
          setSharedFilterValue: t,
          titleCase: ea,
          tooltipId: i
        },
        "cities"
      )
    ), h.type === "bubble" && K.push(/* @__PURE__ */ l(Fc, { runtimeData: F.current, projection: j })), O.length > 0 && O.map((X) => K.push(X))), K;
  }, W = (B, j = "#FFFFFF", H) => {
    const K = H ? H(ia(B)) : [22, 17.5], X = B.properties.iso;
    if (X === void 0)
      return null;
    (X === "US-HI" && !h.displayAsHex || Object.keys(Bi).includes(X) && !h.displayAsHex) && (j = "#FFF");
    const { textColor: J, strokeColor: te } = Ro(j);
    let Ce = 0, ge = y.type === "shapes" && h.displayAsHex ? -10 : 5;
    if (Wi[X] && f === !1 && (Ce += Wi[X][0], ge += Wi[X][1]), Bi[X] === void 0 || f)
      return /* @__PURE__ */ l("g", { transform: `translate(${K})`, tabIndex: -1, children: /* @__PURE__ */ l(
        "text",
        {
          x: Ce,
          y: ge,
          fontSize: Io(g) ? 16 : 13,
          fontWeight: 900,
          strokeWidth: "1",
          paintOrder: "stroke",
          stroke: te,
          style: { fill: J },
          textAnchor: "middle",
          children: X.substring(3)
        }
      ) });
    let [Pe, Ae] = Bi[X];
    return /* @__PURE__ */ E("g", { tabIndex: -1, children: [
      /* @__PURE__ */ l(
        "line",
        {
          x1: K[0],
          y1: K[1],
          x2: K[0] + Pe,
          y2: K[1] + Ae,
          stroke: "rgba(0,0,0,.5)",
          strokeWidth: 1
        }
      ),
      /* @__PURE__ */ l(
        "text",
        {
          x: 4,
          strokeWidth: "0",
          stroke: Yi,
          fontSize: Io(g) ? 16 : 13,
          fontWeight: 900,
          style: { fill: J },
          alignmentBaseline: "middle",
          transform: `translate(${K[0] + Pe}, ${K[1] + Ae})`,
          children: X.substring(3)
        }
      )
    ] });
  };
  return /* @__PURE__ */ E(Ht, { component: "UsaMap", children: [
    /* @__PURE__ */ E("svg", { viewBox: an, role: "img", "aria-label": rn(n), children: [
      h.displayAsHex ? /* @__PURE__ */ l(di, { data: H2, scale: 650, translate: [1600, 775], children: ({ features: B, projection: j }) => G(B, j) }) : /* @__PURE__ */ l(x2, { data: R, translate: u, children: ({ features: B, projection: j }) => G(B, j) }),
      (k == null ? void 0 : k.length) > 0 && /* @__PURE__ */ l(aa.Draggable, { onDragStateChange: x })
    ] }),
    /* @__PURE__ */ l(V2, { territories: A, logo: s, config: n, territoriesData: $ })
  ] });
};
const K2 = ({ label: e, text: t, stroke: n, strokeWidth: a, ...i }) => /* @__PURE__ */ l("svg", { viewBox: "0 0 45 28", children: /* @__PURE__ */ E("g", { ...i, strokeLinejoin: "round", children: [
  /* @__PURE__ */ l(
    "path",
    {
      stroke: n,
      strokeWidth: a,
      d: "M40,0.5 C41.2426407,0.5 42.3676407,1.00367966 43.1819805,1.81801948 C43.9963203,2.63235931 44.5,3.75735931 44.5,5 L44.5,5 L44.5,23 C44.5,24.2426407 43.9963203,25.3676407 43.1819805,26.1819805 C42.3676407,26.9963203 41.2426407,27.5 40,27.5 L40,27.5 L5,27.5 C3.75735931,27.5 2.63235931,26.9963203 1.81801948,26.1819805 C1.00367966,25.3676407 0.5,24.2426407 0.5,23 L0.5,23 L0.5,5 C0.5,3.75735931 1.00367966,2.63235931 1.81801948,1.81801948 C2.63235931,1.00367966 3.75735931,0.5 5,0.5 L5,0.5 Z"
    }
  ),
  /* @__PURE__ */ l("text", { textAnchor: "middle", dominantBaseline: "middle", x: "50%", y: "54%", fill: t, children: e })
] }) }), Z2 = () => {
  const { data: e, config: t, tooltipId: n, legendMemo: a, legendSpecialClassLastMemo: i, runtimeLegend: o } = P.useContext(fe), [s, c] = P.useState(null), { geoClickHandler: r } = Kt(), { applyTooltipsToGeo: g } = qt(), { general: u } = t, { displayStateLabels: p, territoriesLabel: d, displayAsHex: h, type: m } = u, S = t.tooltips.appearanceType, y = h, [w, k] = P.useState([]), f = 15;
  P.useEffect(() => {
    (async () => {
      import(
        /* webpackChunkName: "us-regions-topo-2" */
        "./storybook-us-regions-topo-2-fce76882.es.js"
      ).then((F) => {
        c(Mt(F, F.objects.regions).features);
      });
    })();
  }, []);
  const T = Object.keys(Bt);
  if (P.useEffect(() => {
    const z = T.filter((F) => e[F]);
    k(z);
  }, [e]), !s)
    return /* @__PURE__ */ l(re, {});
  const L = Vt(t), M = Mn(), x = w.map((z) => {
    const F = K2, I = e[z];
    let $, U = {
      fill: M
    };
    const b = Bt[z][1];
    if (!I)
      return /* @__PURE__ */ l(F, { label: b, style: U, text: U.color }, b);
    $ = g(Ie(z), I);
    const C = xe(I, t, o, a, i);
    if (C) {
      const N = bn("#FFF", C[0]);
      let A = !1;
      return (t.columns.navigate && I[t.columns.navigate.name] || S === "click") && (A = !0), U = {
        color: N,
        fill: C[0],
        cursor: A ? "pointer" : "default",
        "&:hover": {
          fill: C[1]
        },
        "&:active": {
          fill: C[2]
        }
      }, /* @__PURE__ */ l(
        F,
        {
          label: b,
          css: U,
          text: U.color,
          stroke: L,
          strokeWidth: 1,
          onClick: () => r(z, I),
          "data-tooltip-id": `tooltip__${n}`,
          "data-tooltip-html": $
        },
        b
      );
    }
  }), R = (z, F) => z.map(({ feature: I, path: $ = "", index: U }) => {
    const b = y ? I.properties.iso + "-hex-group" : I.properties.iso + "-group";
    let C = {
      fill: M,
      cursor: "default"
    }, N = I.properties.iso;
    if (!N)
      return;
    const A = e[N];
    let _;
    A !== void 0 && (_ = xe(A, t, o, a, i));
    const O = Ie(N);
    if (_ && _[0] !== "#000000") {
      const G = g(O, A);
      C = {
        fill: m !== "bubble" ? _[0] : M,
        cursor: "default",
        "&:hover": {
          fill: m !== "bubble" ? _[1] : M
        },
        "&:active": {
          fill: m !== "bubble" ? _[2] : M
        }
      }, (t.columns.navigate && A[t.columns.navigate.name] || S === "click") && (C.cursor = "pointer");
      const W = (B) => {
        const { posX: j = 0, tName: H } = B, K = bn("#FFF", _[0]), X = Vt(t);
        return /* @__PURE__ */ E(re, { children: [
          /* @__PURE__ */ l("rect", { x: j, width: "36", height: "24", rx: "2", stroke: X, strokeWidth: "1" }),
          /* @__PURE__ */ l("text", { textAnchor: "middle", x: 36 / 2 + j, y: "17", fill: K, children: H })
        ] });
      };
      return /* @__PURE__ */ E(
        "g",
        {
          className: "geo-group",
          style: C,
          onClick: () => r(O, A),
          "data-tooltip-id": `tooltip__${n}`,
          "data-tooltip-html": G,
          tabIndex: -1,
          children: [
            /* @__PURE__ */ l("path", { tabIndex: -1, className: "single-geo", stroke: L, strokeWidth: 1, d: $ }),
            /* @__PURE__ */ E("g", { id: `region-${U + 1}-label`, children: [
              /* @__PURE__ */ l("circle", { fill: "#fff", stroke: "#999", cx: f, cy: f, r: f }),
              /* @__PURE__ */ l("text", { fill: "#333", x: "15px", y: "20px", textAnchor: "middle", children: U + 1 })
            ] }),
            N === "region 2" && /* @__PURE__ */ E("g", { id: "region-2-territories", children: [
              /* @__PURE__ */ l(W, { tName: "PR" }),
              /* @__PURE__ */ l(W, { posX: 45, tName: "VI" })
            ] }),
            N === "region 9" && /* @__PURE__ */ E("g", { id: "region-9-territories", children: [
              /* @__PURE__ */ E("g", { className: "region-9-row1", children: [
                /* @__PURE__ */ l(W, { tName: "AS" }),
                /* @__PURE__ */ l(W, { posX: 45, tName: "GU" }),
                /* @__PURE__ */ l(W, { posX: 90, tName: "MP" })
              ] }),
              /* @__PURE__ */ E("g", { className: "region-9-row2", children: [
                /* @__PURE__ */ l(W, { tName: "FM" }),
                /* @__PURE__ */ l(W, { posX: 45, tName: "PW" }),
                /* @__PURE__ */ l(W, { posX: 90, tName: "MH" })
              ] })
            ] })
          ]
        },
        b
      );
    }
    return /* @__PURE__ */ l("g", { className: "geo-group", style: C, children: /* @__PURE__ */ l("path", { tabIndex: -1, className: "single-geo", stroke: L, strokeWidth: 1, d: $ }) }, b);
  });
  return /* @__PURE__ */ E(Ht, { component: "UsaRegionMap", children: [
    /* @__PURE__ */ E("svg", { viewBox: an, role: "img", "aria-label": rn(t), children: [
      /* @__PURE__ */ l(di, { data: s, scale: 620, translate: [1500, 735], children: ({ features: z, projection: F }) => R(z) }),
      t.annotations.length > 0 && /* @__PURE__ */ l(aa.Draggable, {})
    ] }),
    x.length > 0 && /* @__PURE__ */ E("section", { className: "territories", children: [
      /* @__PURE__ */ l("span", { className: "label", children: d }),
      x
    ] })
  ] });
}, Y2 = P.memo(Z2);
var X2 = "Expected a function", es = 0 / 0, J2 = "[object Symbol]", Q2 = /^\s+|\s+$/g, eh = /^[-+]0x[0-9a-f]+$/i, th = /^0b[01]+$/i, nh = /^0o[0-7]+$/i, ah = parseInt, ih = typeof da == "object" && da && da.Object === Object && da, rh = typeof self == "object" && self && self.Object === Object && self, oh = ih || rh || Function("return this")(), lh = Object.prototype, sh = lh.toString, ch = Math.max, uh = Math.min, ji = function() {
  return oh.Date.now();
};
function dh(e, t, n) {
  var a, i, o, s, c, r, g = 0, u = !1, p = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(X2);
  t = ts(t) || 0, Yr(n) && (u = !!n.leading, p = "maxWait" in n, o = p ? ch(ts(n.maxWait) || 0, t) : o, d = "trailing" in n ? !!n.trailing : d);
  function h(M) {
    var x = a, R = i;
    return a = i = void 0, g = M, s = e.apply(R, x), s;
  }
  function m(M) {
    return g = M, c = setTimeout(w, t), u ? h(M) : s;
  }
  function S(M) {
    var x = M - r, R = M - g, z = t - x;
    return p ? uh(z, o - R) : z;
  }
  function y(M) {
    var x = M - r, R = M - g;
    return r === void 0 || x >= t || x < 0 || p && R >= o;
  }
  function w() {
    var M = ji();
    if (y(M))
      return k(M);
    c = setTimeout(w, S(M));
  }
  function k(M) {
    return c = void 0, d && a ? h(M) : (a = i = void 0, s);
  }
  function f() {
    c !== void 0 && clearTimeout(c), g = 0, a = r = i = c = void 0;
  }
  function T() {
    return c === void 0 ? s : k(ji());
  }
  function L() {
    var M = ji(), x = y(M);
    if (a = arguments, i = this, r = M, x) {
      if (c === void 0)
        return m(r);
      if (p)
        return c = setTimeout(w, t), h(r);
    }
    return c === void 0 && (c = setTimeout(w, t)), s;
  }
  return L.cancel = f, L.flush = T, L;
}
function Yr(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function ph(e) {
  return !!e && typeof e == "object";
}
function hh(e) {
  return typeof e == "symbol" || ph(e) && sh.call(e) == J2;
}
function ts(e) {
  if (typeof e == "number")
    return e;
  if (hh(e))
    return es;
  if (Yr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Yr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Q2, "");
  var n = th.test(e);
  return n || nh.test(e) ? ah(e.slice(2), n ? 2 : 8) : eh.test(e) ? es : +e;
}
var gh = dh;
const fh = /* @__PURE__ */ Ms(gh), mh = (e, t, n) => {
  const o = n.mapPosition.zoom > 1 ? Number(e.geoRadius * 1) * 0.75 : e.geoRadius * 1;
  t.lineWidth = 1, t.fillStyle = e.color, t.beginPath(), t.arc(e.x, e.y, o, 0, 2 * Math.PI), t.fill(), t.stroke();
}, yh = (e, t, n) => {
  const o = e.size * 1.75, s = n.mapPosition.zoom > 1 ? o * 0.75 : o;
  t.lineWidth = e.lineWidth, t.fillStyle = e.color, t.beginPath();
  const c = s / 2, r = e.x - c, g = e.y - c;
  t.rect(r, g, s, s), t.fill(), t.stroke();
}, Ch = (e, t, n) => {
  const o = e.size * 2.2, s = n.mapPosition.zoom > 1 ? o * 0.75 : o;
  t.lineWidth = e.lineWidth, t.fillStyle = e.color, t.beginPath();
  const c = e.x, r = e.y - s / 2, g = e.x + s / 2, u = e.y, p = e.x, d = e.y + s / 2, h = e.x - s / 2, m = e.y;
  t.moveTo(c, r), t.lineTo(g, u), t.lineTo(p, d), t.lineTo(h, m), t.closePath(), t.fill(), t.stroke();
}, Sh = (e, t, n) => {
  const o = e.size * 2.2, s = n.mapPosition.zoom > 1 ? o * 0.75 : o, c = s * Math.sqrt(3) / 2;
  t.lineWidth = e.lineWidth, t.fillStyle = e.color, t.beginPath();
  const r = e.x, g = e.y - c / 2, u = e.x - s / 2, p = e.y + c / 2, d = e.x + s / 2, h = p;
  t.moveTo(r, g), t.lineTo(u, p), t.lineTo(d, h), t.closePath(), t.fill(), t.stroke();
}, bh = (e, t, n) => {
  const o = e.spikes, s = e.outerRadius * 2.2, c = e.innerRadius * 2.2, r = n.mapPosition.zoom > 1 ? s * 0.75 : s, g = n.mapPosition.zoom > 1 ? c * 0.75 : c;
  t.lineWidth = e.lineWidth, t.fillStyle = e.color, t.beginPath();
  const u = Math.PI / 2;
  let p = u;
  const d = Math.PI / o;
  let h = e.x + Math.cos(p) * r, m = e.y + Math.sin(p) * r;
  t.moveTo(h, m);
  for (let S = 0; S < o; S++)
    h = e.x + Math.cos(p) * r, m = e.y + Math.sin(p) * r, t.lineTo(h, m), p += d, h = e.x + Math.cos(p) * g, m = e.y + Math.sin(p) * g, t.lineTo(h, m), p += d;
  h = e.x + Math.cos(u) * r, m = e.y + Math.sin(u) * r, t.lineTo(h, m), t.closePath(), t.fill(), t.stroke();
}, vh = (e, t, n) => {
  const o = e.size * 10, s = n.mapPosition.zoom > 1 ? o * 0.75 : o;
  t.save(), t.translate(e.x, e.y), t.scale(s / o, s / o), t.beginPath(), t.moveTo(0, 0), t.bezierCurveTo(2 * s / 100, -10 * s / 100, -20 * s / 100, -25 * s / 100, 0, -30 * s / 100), t.bezierCurveTo(20 * s / 100, -25 * s / 100, -2 * s / 100, -10 * s / 100, 0, 0), t.fillStyle = e.color, t.fill(), t.strokeStyle = "black", t.lineWidth = 1, t.stroke(), t.beginPath(), t.arc(0, -21 * s / 100, 3 * s / 100, 0, Math.PI * 2), t.closePath(), t.fill(), t.restore();
}, ns = (e, t, n, a) => {
  const o = {
    circle: mh,
    square: yh,
    diamond: Ch,
    triangle: Sh,
    star: bh,
    pin: vh
  }[e.type];
  o ? o(e, t, n, a) : console.error("Shape type not recognized or draw function not available:", e.type);
}, as = (e, t, n, a, i) => {
  const o = {
    x: t[0],
    y: t[1],
    color: n[0],
    size: i,
    lineWidth: 1
  };
  switch (e) {
    case "circle":
      return { ...o, geoRadius: i, type: "circle" };
    case "pin":
      return { ...o, type: "pin" };
    case "square":
      return { ...o, type: "square" };
    case "triangle":
      return { ...o, type: "triangle" };
    case "diamond":
      return { ...o, type: "diamond" };
    case "star":
      return {
        ...o,
        spikes: 5,
        outerRadius: a.visual.geoCodeCircleSize / 3,
        innerRadius: a.visual.geoCodeCircleSize / 3 * 2,
        type: "star"
      };
    default:
      return null;
  }
}, vt = (e) => `https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/cb_${e}_us_county_20m.json`, is = (e, t) => e.id < t.id ? -1 : t.id < e.id ? 1 : 0, kh = (e) => new Promise((t) => {
  const n = async (i) => {
    i.status !== 200 ? i = await import(
      /* webpackChunkName: "cb_2019_us_county_20m" */
      "./storybook-cb_2019_us_county_20m-548642e6.es.js"
    ) : i = await i.json();
    let o = {
      year: void 0,
      counties: void 0,
      states: void 0,
      mapData: void 0,
      countyIndecies: void 0,
      projection: void 0
    };
    o.year = e || "default", o.counties = Mt(i, i.objects.counties).features, o.states = Mt(i, i.objects.states).features, o.states.sort(is), o.counties.sort(is), o.mapData = o.states.concat(o.counties).filter((s) => s.id !== "51620"), o.countyIndecies = {}, o.states.forEach((s) => {
      let c = o.mapData.length - 1, r = 0;
      for (let g = 0; g < o.mapData.length; g++)
        o.mapData[g].id.length > 2 && o.mapData[g].id.indexOf(s.id) === 0 && (g < c && (c = g), g > r && (r = g));
      o.countyIndecies[s.id] = [c, r];
    }), o.projection = Sn(), t(o);
  }, a = parseInt(e);
  if (isNaN(a))
    fetch(vt(2019)).then(n);
  else if (a > 2022)
    fetch(vt(2022)).then(n);
  else if (a < 2013)
    fetch(vt(2013)).then(n);
  else
    switch (a) {
      case 2022:
        fetch(vt(2022)).then(n);
        break;
      case 2021:
        fetch(vt(2021)).then(n);
        break;
      case 2020:
        fetch(vt(2020)).then(n);
        break;
      case 2018:
      case 2017:
      case 2016:
      case 2015:
        fetch(vt(2015)).then(n);
        break;
      case 2014:
        fetch(vt(2014)).then(n);
        break;
      case 2013:
        fetch(vt(2013)).then(n);
        break;
      default:
        fetch(vt(2019)).then(n);
        break;
    }
}), Bc = (e, t) => {
  let n = e.general.countyCensusYear;
  if (e.general.filterControlsCountyYear && t && t.length > 0) {
    let a = t.filter((i) => i.columnName === e.general.filterControlsCountyYear);
    a.length > 0 && a[0].active && (n = a[0].active);
  }
  return n || "default";
}, Vi = (e, t, n) => {
  let a = Bc(t, n);
  return e.year && (!a || a === e.year);
}, Lh = () => {
  const {
    container: e,
    containerEl: t,
    data: n,
    runtimeFilters: a,
    runtimeLegend: i,
    setConfig: o,
    config: s,
    tooltipId: c,
    tooltipRef: r,
    legendMemo: g,
    legendSpecialClassLastMemo: u
  } = P.useContext(fe), p = Vt(s), { geoClickHandler: d } = Kt(), { applyTooltipsToGeo: h } = qt(), [m, S] = P.useState({}), [y, w] = P.useState({}), k = Cn().projection(Sn()), { featureArray: f } = io(s, o, k, c);
  P.useEffect(() => {
    t && t.className.indexOf("loaded") === -1 && (t.className += " loaded");
  }), P.useEffect(() => {
    let $ = Bc(s, a);
    $ !== y.year && kh($).then((U) => {
      L.current && L.current.getContext("2d").clearRect(L.current.width, L.current.height), w(U);
    });
  }, [s.general.countyCensusYear, s.general.filterControlsCountyYear, JSON.stringify(a)]), P.useEffect(() => {
    Vi(y, s, a) && I();
    const U = fh(() => {
      L.current && Vi(y, s, a) && I();
    }, 300);
    return window.addEventListener("resize", U), () => window.removeEventListener("resize", U);
  });
  const T = P.useRef(), L = P.useRef();
  if (!n || !Vi(y, s, a))
    return /* @__PURE__ */ l("div", { style: { height: 300 }, children: /* @__PURE__ */ l(bs, {}) });
  const M = Object.keys(n), x = 1, R = () => {
    o({
      ...s,
      mapPosition: { coordinates: [0, 30], zoom: 1 }
    }), S({});
  }, z = ($) => {
    const b = $.target.getBoundingClientRect(), C = $.clientX - b.left, N = $.clientY - b.top, A = y.projection.invert([C, N]);
    let _;
    for (let O = 0; O < y.states.length; O++)
      if (An(y.states[O], A)) {
        _ = y.states[O];
        break;
      }
    if (_) {
      if (o({
        ...s,
        mapPosition: { coordinates: [0, 30], zoom: 3 }
      }), y.countyIndecies[_.id]) {
        let G;
        for (let W = y.countyIndecies[_.id][0]; W <= y.countyIndecies[_.id][1]; W++)
          if (An(y.mapData[W], A)) {
            G = y.mapData[W];
            break;
          }
        G && n[G.id] && d(Ie(G.id), n[G.id]);
      }
      let O = -1;
      for (let G = 0; G < y.mapData.length; G++)
        if (y.mapData[G].id === _.id) {
          O = G;
          break;
        }
      S({ id: _.id, index: O, center: ia(_), feature: _ });
    }
    if (s.general.type === "us-geocode") {
      const O = (s.visual.geoCodeCircleSize || 5) * (m.id ? 2 : 1);
      let G;
      for (let W = 0; W < M.length; W++) {
        const B = y.projection([
          n[M[W]][s.columns.longitude.name],
          n[M[W]][s.columns.latitude.name]
        ]);
        if (B && Math.sqrt(Math.pow(B[0] - C, 2) + Math.pow(B[1] - N, 2)) < O) {
          G = n[M[W]];
          break;
        }
      }
      G && d(Ie(G[s.columns.geo.name]), G);
    }
  }, F = ($) => {
    if (!r.current || s.tooltips.appearanceType !== "hover" || window.matchMedia("(any-hover: none)").matches)
      return;
    const U = $.target, b = U.getBoundingClientRect(), C = $.clientX - b.left, N = $.clientY - b.top, A = e == null ? void 0 : e.getBoundingClientRect(), _ = $.clientX - ((A == null ? void 0 : A.left) || 0), O = $.clientY - ((A == null ? void 0 : A.top) || 0);
    let G = y.projection.invert([C, N]);
    const W = parseInt(r.current.getAttribute("data-index")), B = (s.visual.geoCodeCircleSize || 5) * (m.id ? 2 : 1), j = U.getContext("2d"), H = Cn(y.projection, j);
    if (s.general.type !== "us-geocode") {
      if (isNaN(W) || !An(y.mapData[W], G)) {
        !isNaN(W) && xe(
          n[y.mapData[W].id],
          s,
          i,
          g,
          u
        ) && (j.fillStyle = xe(
          n[y.mapData[W].id],
          s,
          i,
          g,
          u
        )[0], j.strokeStyle = p, j.lineWidth = x, j.beginPath(), H(y.mapData[W]), j.fill(), j.stroke());
        let K, X, J;
        for (let te = 0; te < y.states.length; te++)
          if (An(y.states[te], G)) {
            K = y.states[te].id;
            break;
          }
        if (K && (!m.id || m.id === K) && y.countyIndecies[K]) {
          for (let te = y.countyIndecies[K][0]; te <= y.countyIndecies[K][1]; te++)
            if (An(y.mapData[te], G)) {
              X = y.mapData[te], J = te;
              break;
            }
        }
        if (X && n[X.id]) {
          if (xe(n[X.id], s, i, g, u)) {
            let te = xe(
              n[X.id],
              s,
              i,
              g,
              u
            )[0];
            if (te === "#000000")
              return;
            j.globalAlpha = 1, j.fillStyle = te, j.strokeStyle = p, j.lineWidth = x, j.beginPath(), H(y.mapData[J]), j.fill(), j.stroke();
          }
          r.current.style.display = "block", r.current.style.top = O + "px", _ > A.width / 2 ? (r.current.style.transform = "translate(-100%, -50%)", r.current.style.left = _ - 5 + "px") : (r.current.style.transform = "translate(0, -50%)", r.current.style.left = _ + 5 + "px"), r.current.innerHTML = h(Ie(X.id), n[X.id]), r.current.setAttribute("data-index", J);
        } else
          r.current.style.display = "none", r.current.setAttribute("data-index", null);
      }
    } else {
      if (!isNaN(W)) {
        const J = y.projection([
          n[M[W]][s.columns.longitude.name],
          n[M[W]][s.columns.latitude.name]
        ]);
        if (J && Math.sqrt(Math.pow(J[0] - C, 2) + Math.pow(J[1] - N, 2)) < B)
          return;
      }
      let K, X;
      for (let J = 0; J < M.length; J++) {
        const te = y.projection([
          n[M[J]][s.columns.longitude.name],
          n[M[J]][s.columns.latitude.name]
        ]);
        if (["circle", "diamond", "star", "triangle", "square"].includes(s.visual.cityStyle) && te && Math.sqrt(Math.pow(te[0] - C, 2) + Math.pow(te[1] - N, 2)) < B && xe(n[M[J]], s, i, g, u)) {
          K = n[M[J]], X = J;
          break;
        }
        if (s.visual.cityStyle === "pin" && te && Math.hypot(te[0] - C, te[1] - N) < 15 && xe(n[M[J]], s, i, g, u)) {
          K = n[M[J]], X = J;
          break;
        }
      }
      K ? (r.current.style.display = "block", r.current.style.top = O + "px", _ > A.width / 2 ? (r.current.style.transform = "translate(-100%, -50%)", r.current.style.left = _ - 5 + "px") : (r.current.style.transform = "translate(0, -50%)", r.current.style.left = _ + 5 + "px"), r.current.innerHTML = h(
        Ie(K[s.columns.geo.name]),
        K
      ), r.current.setAttribute("data-index", X)) : (r.current.style.display = "none", r.current.setAttribute("data-index", null));
    }
    m.index !== -1 && (j.strokeStyle = p, j.lineWidth = 1, j.beginPath(), H(y.mapData[m.index]), j.stroke());
  }, I = () => {
    if (L.current && i.items.length > 0) {
      const $ = L.current, U = $.getContext("2d"), b = Cn(y.projection, U);
      if ($.width = $.clientWidth, $.height = $.width * 0.6, y.projection.scale($.width * 1.25).translate([$.width / 2, $.height / 2]), m.id ? T.current && (T.current.style.display = "block") : T.current && (T.current.style.display = "none"), m.feature) {
        const N = [
          [10, 10],
          [$.width - 0, $.height - 10]
        ];
        y.projection.fitExtent(N, m.feature);
      }
      if (U.clearRect(0, 0, $.width, $.height), U.strokeStyle = p, y.mapData.forEach((C) => {
        if (!C.id || m.id && C.id.length > 2 && C.id.indexOf(m.id) !== 0 || !m.id && s.general.type === "us-geocode" && C.id.length > 2)
          return;
        const N = n[C.id], A = N !== void 0 ? xe(N, s, i, g, u) : !1;
        U.fillStyle = A && s.general.type !== "us-geocode" ? A[0] === "#000000" ? $o : A[0] : $o, U.beginPath(), b(C), U.fill(), U.stroke();
      }), m.index !== -1 && (U.strokeStyle = p, U.lineWidth = 2, U.beginPath(), b(y.mapData[m.index]), U.stroke()), f.length > 0 && f.map((C) => {
        U.beginPath(), b(C), U.fillStyle = C.properties.fill, U.strokeStyle = p, U.lineWidth = C.properties["stroke-width"], U.fill(), U.stroke();
      }), s.general.type === "us-geocode") {
        U.strokeStyle = p;
        const C = (s.visual.geoCodeCircleSize || 5) * (m.id ? 2 : 1), { additionalCityStyles: N } = s.visual || [], A = Object.values(n).filter((O) => N.some((G) => String(O[G.column]) === String(G.value))).map((O) => ({ ...N.find(
          (W) => String(O[W.column]) === String(W.value)
        ), ...O }));
        let _ = [];
        A.forEach((O) => {
          var G;
          if (_ = y.projection([
            O[s.columns.longitude.name],
            O[s.columns.latitude.name]
          ]), _) {
            const W = xe(
              n[O == null ? void 0 : O.value],
              s,
              i,
              g,
              u
            );
            if (W) {
              if ((W == null ? void 0 : W[0]) === "#000000")
                return;
              const B = (G = O == null ? void 0 : O.shape) == null ? void 0 : G.toLowerCase(), j = as(B, _, W, s, C);
              j && ns(j, U, s, x);
            }
          }
        }), M.forEach((O) => {
          const G = new Set(A.map((B) => B.value)), W = y.projection([
            n[O][s.columns.longitude.name],
            n[O][s.columns.latitude.name]
          ]);
          if (W && !G.has(O)) {
            const B = n[O] !== void 0 ? xe(n[O], s, i, g, u) : !1;
            if (B) {
              if ((B == null ? void 0 : B[0]) === "#000000")
                return;
              const j = s.visual.cityStyle.toLowerCase(), H = as(j, W, B, s, C);
              H && ns(H, U, s, x);
            }
          }
        });
      }
    }
  };
  return /* @__PURE__ */ E(Ht, { component: "CountyMap", children: [
    /* @__PURE__ */ l(
      "canvas",
      {
        ref: L,
        "aria-label": rn(s),
        onMouseMove: F,
        onMouseOut: () => {
          r.current.style.display = "none", r.current.setAttribute("data-index", null);
        },
        onClick: z,
        className: "county-map-canvas"
      }
    ),
    /* @__PURE__ */ l("button", { className: "btn btn--reset btn-primary p-absolute", onClick: R, ref: T, tabIndex: 0, children: "Reset Zoom" })
  ] });
}, wh = ({ path: e, counties: t, scale: n, geoStrokeColor: a, tooltipId: i }) => {
  const { config: o, data: s, legendMemo: c, legendSpecialClassLastMemo: r, runtimeLegend: g } = P.useContext(fe), { applyTooltipsToGeo: u } = qt(), p = Mn(), d = Kt();
  return /* @__PURE__ */ l(re, { children: t.map((h) => {
    const m = h.id;
    if (!m)
      return null;
    const S = e(h), y = s[h.id];
    let w;
    y !== void 0 && (w = xe(y, o, g, c, r));
    const k = Ie(m);
    if (k === "Franklin City" || k === "Waynesboro")
      return null;
    const f = u(k, y);
    if (w && w[0] !== "#000000") {
      const T = {
        fill: w[0],
        cursor: "default",
        "&:hover": {
          fill: w[1]
        },
        "&:active": {
          fill: w[2]
        }
      };
      return (o.columns.navigate && y[o.columns.navigate.name] || o.tooltips.appearanceType === "hover") && (T.cursor = "pointer"), /* @__PURE__ */ l(
        "g",
        {
          className: `county county--${k.split(" ").join("")} county--${y[o.columns.geo.name]}`,
          style: T,
          onClick: () => d(k, y),
          "data-tooltip-id": `tooltip__${i}`,
          "data-tooltip-html": f,
          children: /* @__PURE__ */ l(
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
        `key--${h.id}`
      );
    } else
      return /* @__PURE__ */ l(
        "g",
        {
          className: `county county--${k.split(" ").join("")}`,
          style: { fill: p },
          "data-tooltip-id": `tooltip__${i}`,
          "data-tooltip-html": f,
          children: /* @__PURE__ */ l(
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
        `key--${h.id}`
      );
  }) });
}, Th = ({ topoData: e, path: t, scale: n, stateToShow: a }) => {
  var g;
  const { config: i } = P.useContext(fe);
  if (!((g = e == null ? void 0 : e.objects) != null && g.states))
    return null;
  let o = e.objects.states.geometries.filter((u) => u.properties.name === i.general.statePicked.stateName);
  const s = Vt(i), c = Mn();
  let r = t(nu(e, o[0]));
  return /* @__PURE__ */ l(
    "g",
    {
      className: "single-state",
      style: { fill: c },
      stroke: s,
      strokeWidth: 0.95 / n,
      children: /* @__PURE__ */ l("path", { tabIndex: -1, className: "state-path", d: r })
    },
    "single-state"
  );
}, rs = {
  StateOutput: Th,
  CountyOutput: wh
}, os = (e, t, n) => {
  const a = (e * n.k - e) / 2, i = (t * n.k - t) / 2;
  return [e / 2 - (a + n.x) / n.k, t / 2 - (i + n.y) / n.k];
};
function Nh({
  center: e,
  filterZoomEvent: t,
  onMoveStart: n,
  onMoveEnd: a,
  onMove: i,
  translateExtent: o = [
    [-1 / 0, -1 / 0],
    [1 / 0, 1 / 0]
  ],
  scaleExtent: s = [1, 8],
  zoom: c = 1,
  width: r,
  height: g,
  projection: u
}) {
  const [p, d] = e, [h, m] = P.useState({ x: 0, y: 0, k: 1 }), S = P.useRef({ x: 0, y: 0, k: 1 }), y = P.useRef(), w = P.useRef(), k = P.useRef(!1), [f, T] = o, [L, M] = f, [x, R] = T, [z, F] = s;
  return P.useEffect(() => {
    const I = tn(y.current), $ = (A) => {
      !n || k.current || n({ coordinates: u.invert(os(r, g, A.transform)), zoom: A.transform.k }, A);
    }, U = (A) => {
      if (k.current)
        return;
      const { transform: _, sourceEvent: O } = A;
      m({ x: _.x, y: _.y, k: _.k, dragging: O }), i && i({ x: _.x, y: _.y, k: _.k, dragging: O }, A);
    }, b = (A) => {
      if (k.current) {
        k.current = !1;
        return;
      }
      const [_, O] = u.invert(os(r, g, A.transform));
      S.current = { x: _, y: O, k: A.transform.k }, a && a({ coordinates: [_, O], zoom: A.transform.k }, A);
    }, C = (A) => t ? t(A) : A ? !A.ctrlKey && !A.button : !1, N = E0().filter(C).scaleExtent([z, F]).translateExtent([
      [L, M],
      [x, R]
    ]).on("start", $).on("zoom", U).on("end", b);
    w.current = N, I.call(N);
  }, [r, g, L, M, x, R, z, F, u, n, i, a, t]), P.useEffect(() => {
    if (p === S.current.x && d === S.current.y && c === S.current.k)
      return;
    const I = u([p, d]);
    if (!I)
      return;
    const $ = I[0] * c, U = I[1] * c, b = tn(y.current);
    k.current = !0, b.call(w.current.transform, to.translate(r / 2 - $, g / 2 - U).scale(c)), m({ x: r / 2 - $, y: g / 2 - U, k: c }), S.current = { x: p, y: d, k: c };
  }, [p, d, c, r, g, u]), {
    mapRef: y,
    position: h,
    transformString: `translate(${h.x} ${h.y}) scale(${h.k})`
  };
}
const Xr = ({ center: e = [0, 0], zoom: t = 1, minZoom: n = 1, maxZoom: a = 8, translateExtent: i, filterZoomEvent: o, onMoveStart: s, onMove: c, onMoveEnd: r, className: g, projection: u, width: p, height: d, ...h }) => {
  const { mapRef: m, transformString: S } = Nh({
    center: e,
    filterZoomEvent: o,
    onMoveStart: s,
    onMove: c,
    onMoveEnd: r,
    scaleExtent: [n, a],
    translateExtent: i,
    zoom: t,
    width: p,
    height: d,
    projection: u
  });
  return /* @__PURE__ */ E("g", { ref: m, children: [
    /* @__PURE__ */ l("rect", { width: p, height: d, fill: "transparent" }),
    /* @__PURE__ */ l("g", { transform: S, ...h })
  ] });
};
const Wc = ({ handleZoomIn: e, handleZoomOut: t, handleReset: n }) => {
  const { config: a, setRuntimeData: i, position: o } = P.useContext(fe);
  if (a.general.allowMapZoom)
    return /* @__PURE__ */ E("div", { className: "zoom-controls", "data-html2canvas-ignore": "true", children: [
      /* @__PURE__ */ l("button", { onClick: () => e(o), "aria-label": "Zoom In", children: /* @__PURE__ */ E("svg", { viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "3", children: [
        /* @__PURE__ */ l("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
        /* @__PURE__ */ l("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
      ] }) }),
      /* @__PURE__ */ l("button", { onClick: () => t(o), "aria-label": "Zoom Out", children: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ l("line", { x1: "5", y1: "12", x2: "19", y2: "12" }) }) }),
      a.general.type === "bubble" && /* @__PURE__ */ l("button", { onClick: () => n(i), className: "reset", "aria-label": "Reset Zoom and Map Filters", children: "Reset Filters" }),
      (a.general.type === "world-geocode" || a.general.geoType === "single-state") && /* @__PURE__ */ l("button", { onClick: () => n(i), className: "reset", "aria-label": "Reset Zoom", children: "Reset Zoom" })
    ] });
}, Mh = (e) => {
  var k;
  const { config: t, runtimeData: n, position: a } = P.useContext(fe), i = Uc(t, n), o = P.useContext(it);
  P.useEffect(() => {
    var R;
    const L = { fipsCode: Object.keys(Wt).find((z) => Wt[z] === i), stateName: i }, M = ne.cloneDeep(t);
    M.general.statePicked = L;
    const x = (R = e == null ? void 0 : e.states) == null ? void 0 : R.find((z) => z.properties.name === i);
    o({ type: "SET_SCALE", payload: 1 }), o({ type: "SET_TRANSLATE", payload: [0, 0] }), o({ type: "SET_CONFIG", payload: M }), o({ type: "SET_STATE_TO_SHOW", payload: x });
  }, [e]), P.useEffect(() => {
    const L = { fipsCode: Object.keys(Wt).find((x) => Wt[x] === i), stateName: i }, M = ne.cloneDeep(t);
    M.general.statePicked = L, o({ type: "SET_CONFIG", payload: M }), h("reset");
  }, [i]);
  const s = Sn().translate([_e / 2, Ue / 2]).scale(1), c = (k = e == null ? void 0 : e.states) == null ? void 0 : k.find((f) => f.properties.name === i), r = s.fitExtent(
    [
      [ze, ze],
      [_e - ze, Ue - ze]
    ],
    c
  );
  r.translate();
  const u = Cn().projection(s).centroid(c), p = r.invert(u), d = () => {
    o({ type: "SET_STATE_TO_SHOW", payload: c }), h("reset");
  }, h = (f = "") => {
    const T = a;
    let L = T.zoom, M = T.coordinates;
    f === "zoomIn" && T.zoom < 4 ? (L = T.zoom * 1.5, M = T.coordinates[0] !== 0 && T.coordinates[1] !== 0 ? T.coordinates : p) : f === "zoomOut" && T.zoom > 1 ? (L = T.zoom / 1.5, M = T.coordinates[0] !== 0 && T.coordinates[1] !== 0 ? T.coordinates : p) : f === "reset" && (L = 1, M = p), o({ type: "SET_POSITION", payload: { coordinates: M, zoom: L } }), f === "reset" && (o({ type: "SET_TRANSLATE", payload: [0, 0] }), o({ type: "SET_SCALE", payload: 1 }));
  };
  return {
    statePicked: i,
    setScaleAndTranslate: h,
    switchState: d,
    handleZoomIn: () => {
      h("zoomIn");
    },
    handleZoomOut: () => {
      h("zoomOut");
    },
    handleMoveEnd: (f) => {
      o({ type: "SET_POSITION", payload: f });
    },
    handleReset: () => {
      h("reset");
    },
    projection: s
  };
};
const Eh = () => {
  const {
    config: e,
    setSharedFilterValue: t,
    isFilterValueSupported: n,
    runtimeFilters: a,
    tooltipId: i,
    position: o,
    stateToShow: s,
    topoData: c,
    scale: r,
    translate: g,
    legendMemo: u,
    legendSpecialClassLastMemo: p
  } = P.useContext(fe), d = P.useContext(it), { handleMoveEnd: h, handleZoomIn: m, handleZoomOut: S, handleReset: y, projection: w, statePicked: k } = Mh(c), { geoClickHandler: f } = Kt(), T = Sn().translate([_e / 2, Ue / 2]).scale(1), L = Vt(e), M = Cn().projection(w);
  if (P.useEffect(() => {
    var F;
    const z = (F = c == null ? void 0 : c.states) == null ? void 0 : F.find((I) => I.properties.name === e.general.statePicked.stateName);
    d({ type: "SET_STATE_TO_SHOW", payload: z });
  }, [k]), P.useEffect(() => {
    let z = _c(e, a);
    z !== (c == null ? void 0 : c.year) && O2(z).then((F) => {
      d({ type: "SET_TOPO_DATA", payload: F });
    });
  }, [e.general.countyCensusYear, e.general.filterControlsCountyYear, JSON.stringify(a)]), !I2(c, e, a))
    return /* @__PURE__ */ l("div", { style: { height: `${Ue}px` }, children: /* @__PURE__ */ l(bs, {}) });
  const x = () => {
    if (!e.general.statePicked.fipsCode)
      return !0;
  }, R = (z) => {
    const F = z[0].feature.counties;
    let I = [];
    return I.push(
      // prettier-ignore
      /* @__PURE__ */ l(
        rs.StateOutput,
        {
          topoData: c,
          path: M,
          scale: r
        }
      )
    ), I.push(
      // prettier-ignore
      /* @__PURE__ */ l(
        rs.CountyOutput,
        {
          counties: F,
          scale: r,
          geoStrokeColor: L,
          tooltipId: i,
          path: M
        }
      )
    ), I.push(
      /* @__PURE__ */ l(
        Co,
        {
          projection: T,
          geoClickHandler: f,
          titleCase: ea,
          setSharedFilterValue: t,
          isFilterValueSupported: n,
          tooltipId: i
        },
        "cities"
      )
    ), I;
  };
  return /* @__PURE__ */ E(Ht, { component: "SingleStateMap", children: [
    k && e.general.allowMapZoom && e.general.statePicked.fipsCode && /* @__PURE__ */ l(
      "svg",
      {
        viewBox: an,
        preserveAspectRatio: "xMinYMin",
        className: "svg-container",
        role: "img",
        "aria-label": rn(e),
        children: /* @__PURE__ */ E(
          Xr,
          {
            center: o.coordinates,
            zoom: o.zoom,
            minZoom: 1,
            maxZoom: ks,
            onMoveEnd: h,
            projection: w,
            width: _e,
            height: Ue,
            children: [
              /* @__PURE__ */ l(
                "rect",
                {
                  className: "background center-container ocean",
                  width: _e,
                  height: Ue,
                  fillOpacity: 1,
                  fill: "white"
                }
              ),
              /* @__PURE__ */ l(
                Kl,
                {
                  data: [
                    {
                      states: c == null ? void 0 : c.states,
                      counties: c.counties.filter((z) => z.id.substring(0, 2) === e.general.statePicked.fipsCode)
                    }
                  ],
                  projection: Sn,
                  fitExtent: [
                    [
                      [ze, ze],
                      [_e - ze, Ue - ze]
                    ],
                    s
                  ],
                  children: ({ features: z, projection: F }) => /* @__PURE__ */ l(
                    "g",
                    {
                      id: "mapGroup",
                      className: `countyMapGroup ${e.general.geoType === "single-state" ? "countyMapGroup--no-transition" : ""}`,
                      transform: `translate(${g}) scale(${r})`,
                      "data-scale": "",
                      children: R(z)
                    },
                    "countyMapGroup"
                  )
                }
              ),
              e.annotations.length > 0 && /* @__PURE__ */ l(aa.Draggable, {})
            ]
          }
        )
      }
    ),
    k && !e.general.allowMapZoom && e.general.statePicked.fipsCode && /* @__PURE__ */ E(
      "svg",
      {
        viewBox: an,
        preserveAspectRatio: "xMinYMin",
        className: "svg-container",
        role: "img",
        "aria-label": rn(e),
        children: [
          /* @__PURE__ */ l(
            "rect",
            {
              className: "background center-container ocean",
              width: _e,
              height: Ue,
              fillOpacity: 1,
              fill: "white"
            }
          ),
          /* @__PURE__ */ l(
            Kl,
            {
              data: [
                {
                  states: c == null ? void 0 : c.states,
                  counties: c.counties.filter((z) => z.id.substring(0, 2) === e.general.statePicked.fipsCode)
                }
              ],
              projection: Sn,
              fitExtent: [
                [
                  [ze, ze],
                  [_e - ze, Ue - ze]
                ],
                s
              ],
              children: ({ features: z, projection: F }) => /* @__PURE__ */ l(
                "g",
                {
                  id: "mapGroup",
                  className: `countyMapGroup ${e.general.geoType === "single-state" ? "countyMapGroup--no-transition" : ""}`,
                  transform: `translate(${g}) scale(${r})`,
                  "data-scale": "",
                  children: R(z)
                },
                "countyMapGroup"
              )
            }
          ),
          e.annotations.length > 0 && /* @__PURE__ */ l(aa.Draggable, {})
        ]
      }
    ),
    x() && /* @__PURE__ */ l(
      "svg",
      {
        viewBox: an,
        preserveAspectRatio: "xMinYMin",
        className: "svg-container",
        role: "img",
        "aria-label": rn(e),
        children: /* @__PURE__ */ l(
          Ns,
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
    /* @__PURE__ */ l(
      Wc,
      {
        handleZoomIn: m,
        handleZoomOut: S,
        handleReset: y
      }
    )
  ] });
}, xh = P.memo(Eh), Ta = {
  State: q2,
  Region: Y2,
  County: Lh,
  SingleState: xh
}, Ph = ({ path: e, styles: t, stroke: n, strokeWidth: a, ...i }) => {
  var r, g, u;
  const { className: o, ...s } = i, c = ((u = (g = String((r = i.additionalData) == null ? void 0 : r.name)) == null ? void 0 : g.toLowerCase()) == null ? void 0 : u.replaceAll(" ", "")) || "country";
  return /* @__PURE__ */ l("g", { className: `geo-group ${c}`, style: t, ...s, children: /* @__PURE__ */ l("path", { tabIndex: -1, className: `single-geo ${c}`, stroke: n, strokeWidth: a, d: e }) });
}, ls = P.memo(Ph), jc = (e) => ({ generateRuntimeData: (n, a, i, o) => {
  try {
    const s = {};
    return Object.defineProperty(s, "fromHash", {
      value: i
    }), $a(n, n.columns.geo.name), n.data.forEach((c) => {
      if (o && (console.log("object", n), console.log("row", c)), c.uid === void 0)
        return !1;
      const r = n.columns.primary.name;
      if (c[r] && (c[r] = U1(c[r], e)), n.general.type === "navigation") {
        let g = c[n.columns.navigate.name] || "";
        if (g !== void 0 && typeof g == "string" && (g = g.replace(/(\r\n|\n|\r)/gm, "")), (g == null ? void 0 : g.length) === 0)
          return !1;
      }
      if (a != null && a.length)
        for (let g = 0; g < a.length; g++) {
          const { columnName: u, active: p, type: d, filterStyle: h, subGrouping: m } = a[g], S = d !== "url", y = String(p) === String(c[u]);
          if (S && !y)
            return !1;
          if (h == "nested-dropdown") {
            const w = String(c[m == null ? void 0 : m.columnName]) === String(m == null ? void 0 : m.active);
            if (m != null && m.active && !w)
              return !1;
          }
        }
      s[c.uid] === void 0 && (s[c.uid] = c);
    }), s;
  } catch (s) {
    console.error("COVE: ", s);
  }
} });
let Hi = dc();
const Dh = () => {
  const {
    data: e,
    position: t,
    setRuntimeData: n,
    config: a,
    tooltipId: i,
    runtimeLegend: o,
    legendMemo: s,
    legendSpecialClassLastMemo: c
  } = P.useContext(fe), { type: r, allowMapZoom: g } = a.general, [u, p] = P.useState(null), { geoClickHandler: d } = Kt(), { applyTooltipsToGeo: h } = qt(), { generateRuntimeData: m } = jc(a), S = P.useContext(it);
  if (P.useEffect(() => {
    (async () => {
      import(
        /* webpackChunkName: "world-topo" */
        "./storybook-world-topo-31a33da1.es.js"
      ).then((M) => {
        p(Mt(M, M.objects.countries).features);
      });
    })();
  }, []), !u)
    return /* @__PURE__ */ l(re, {});
  const y = (L) => {
    const M = m(a);
    S({ type: "SET_POSITION", payload: { coordinates: [0, 30], zoom: 1 } }), S({ type: "SET_FILTERED_COUNTRY_CODE", payload: "" }), L(M);
  }, w = (L) => {
    L.zoom >= 4 || S({ type: "SET_POSITION", payload: { coordinates: L.coordinates, zoom: L.zoom * 1.5 } });
  }, k = (L) => {
    L.zoom <= 1 || S({ type: "SET_POSITION", payload: { coordinates: L.coordinates, zoom: L.zoom / 1.5 } });
  }, f = (L) => {
    S({ type: "SET_POSITION", payload: L });
  }, T = (L) => {
    const M = L.map(({ feature: x, path: R }, z) => {
      var G;
      a.data.some((W) => W[a.columns.geo.name] === x.properties.state);
      const F = x.properties.state && e[x.properties.state] ? x.properties.state : x.properties.name ? x.properties.name : x.properties.iso, I = {
        name: x.properties.name
      };
      if (!F)
        return null;
      let $ = e[F];
      const U = Ie((G = fi[F]) == null ? void 0 : G[0]);
      let b;
      $ !== void 0 && (b = xe($, a, o, s, c));
      const C = Vt(a), N = Mn();
      let A = {
        fill: N,
        cursor: "default"
      };
      const _ = 0.9, O = h(U, $);
      return b && b[0] !== "#000000" && r !== "bubble" ? (A = {
        ...A,
        fill: r !== "world-geocode" ? b[0] : N,
        cursor: "default",
        "&:hover": {
          fill: r !== "world-geocode" ? b[1] : N
        },
        "&:active": {
          fill: r !== "world-geocode" ? b[2] : N
        }
      }, (a.columns.navigate && $[a.columns.navigate.name] || a.tooltips.appearanceType === "click") && (A.cursor = "pointer"), /* @__PURE__ */ l(
        ls,
        {
          additionalData: I,
          geoData: $,
          styles: A,
          path: R,
          stroke: C,
          strokeWidth: _,
          onClick: () => d(U, $),
          "data-tooltip-id": `tooltip__${i}`,
          "data-tooltip-html": O,
          tabIndex: -1
        },
        z + "-geo"
      )) : /* @__PURE__ */ l(
        ls,
        {
          additionaldata: JSON.stringify(I),
          geodata: JSON.stringify($),
          stroke: C,
          strokeWidth: _,
          styles: A,
          path: R,
          "data-tooltip-id": `tooltip__${i}`,
          "data-tooltip-html": O
        },
        z + "-geo"
      );
    });
    return M.push(/* @__PURE__ */ l(Co, { projection: Hi, tooltipId: i }, "cities")), r === "bubble" && M.push(/* @__PURE__ */ l(Fc, {})), M;
  };
  return /* @__PURE__ */ E(Ht, { component: "WorldMap", children: [
    g ? /* @__PURE__ */ E("svg", { viewBox: an, role: "img", "aria-label": rn(a), children: [
      /* @__PURE__ */ l(
        "rect",
        {
          height: Ue,
          width: _e,
          onClick: () => y(a),
          fill: "white"
        }
      ),
      /* @__PURE__ */ l(
        Xr,
        {
          zoom: t.zoom,
          center: t.coordinates,
          onMoveEnd: f,
          maxZoom: ks,
          projection: Hi,
          width: _e,
          height: Ue,
          children: /* @__PURE__ */ l(di, { data: u, children: ({ features: L }) => T(L) })
        }
      )
    ] }) : /* @__PURE__ */ l("svg", { viewBox: an, children: /* @__PURE__ */ l(
      Xr,
      {
        zoom: 1,
        center: t.coordinates,
        onMoveEnd: f,
        maxZoom: 0,
        projection: Hi,
        width: _e,
        height: Ue,
        children: /* @__PURE__ */ l(di, { data: u, children: ({ features: L }) => T(L) })
      }
    ) }),
    (r === "data" || r === "world-geocode" && g || r === "bubble" && g) && /* @__PURE__ */ l(Wc, { handleZoomIn: w, handleZoomOut: k, handleReset: y })
  ] });
}, Ah = P.memo(Dh);
function Rh(e, t, n, a) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function c(u) {
      try {
        g(a.next(u));
      } catch (p) {
        s(p);
      }
    }
    function r(u) {
      try {
        g(a.throw(u));
      } catch (p) {
        s(p);
      }
    }
    function g(u) {
      u.done ? o(u.value) : i(u.value).then(c, r);
    }
    g((a = a.apply(e, t || [])).next());
  });
}
function Oh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ih = function e(t, n) {
  if (t === n)
    return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor)
      return !1;
    var a, i, o;
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
    if (o = Object.keys(t), a = o.length, a !== Object.keys(n).length)
      return !1;
    for (i = a; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, o[i]))
        return !1;
    for (i = a; i-- !== 0; ) {
      var s = o[i];
      if (!e(t[s], n[s]))
        return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
}, $h = /* @__PURE__ */ Oh(Ih);
const ss = "__googleMapsScriptId";
var yn;
(function(e) {
  e[e.INITIALIZED = 0] = "INITIALIZED", e[e.LOADING = 1] = "LOADING", e[e.SUCCESS = 2] = "SUCCESS", e[e.FAILURE = 3] = "FAILURE";
})(yn || (yn = {}));
class nn {
  /**
   * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
   * using this library, instead the defaults are set by the Google Maps
   * JavaScript API server.
   *
   * ```
   * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
   * ```
   */
  constructor({ apiKey: t, authReferrerPolicy: n, channel: a, client: i, id: o = ss, language: s, libraries: c = [], mapIds: r, nonce: g, region: u, retries: p = 3, url: d = "https://maps.googleapis.com/maps/api/js", version: h }) {
    if (this.callbacks = [], this.done = !1, this.loading = !1, this.errors = [], this.apiKey = t, this.authReferrerPolicy = n, this.channel = a, this.client = i, this.id = o || ss, this.language = s, this.libraries = c, this.mapIds = r, this.nonce = g, this.region = u, this.retries = p, this.url = d, this.version = h, nn.instance) {
      if (!$h(this.options, nn.instance.options))
        throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(nn.instance.options)}`);
      return nn.instance;
    }
    nn.instance = this;
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
    return this.errors.length ? yn.FAILURE : this.done ? yn.SUCCESS : this.loading ? yn.LOADING : yn.INITIALIZED;
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
      (o) => !a[o] && delete a[o]
    ), !((n = (t = window == null ? void 0 : window.google) === null || t === void 0 ? void 0 : t.maps) === null || n === void 0) && n.importLibrary || ((o) => {
      let s, c, r, g = "The Google Maps JavaScript API", u = "google", p = "importLibrary", d = "__ib__", h = document, m = window;
      m = m[u] || (m[u] = {});
      const S = m.maps || (m.maps = {}), y = /* @__PURE__ */ new Set(), w = new URLSearchParams(), k = () => (
        // @ts-ignore
        s || (s = new Promise((f, T) => Rh(this, void 0, void 0, function* () {
          var L;
          yield c = h.createElement("script"), c.id = this.id, w.set("libraries", [...y] + "");
          for (r in o)
            w.set(r.replace(/[A-Z]/g, (M) => "_" + M[0].toLowerCase()), o[r]);
          w.set("callback", u + ".maps." + d), c.src = this.url + "?" + w, S[d] = f, c.onerror = () => s = T(Error(g + " could not load.")), c.nonce = this.nonce || ((L = h.querySelector("script[nonce]")) === null || L === void 0 ? void 0 : L.nonce) || "", h.head.append(c);
        })))
      );
      S[p] ? console.warn(g + " only loads once. Ignoring:", o) : S[p] = (f, ...T) => y.add(f) && k().then(() => S[p](f, ...T));
    })(a);
    const i = this.libraries.map((o) => this.importLibrary(o));
    i.length || i.push(this.importLibrary("core")), Promise.all(i).then(() => this.callback(), (o) => {
      const s = new ErrorEvent("error", { error: o });
      this.loadErrorCallback(s);
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
const cs = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
], qi = 1, Rn = 8;
class vo {
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
    if (i !== qi)
      throw new Error(`Got v${i} data when expected v${qi}.`);
    const o = cs[a & 15];
    if (!o)
      throw new Error("Unrecognized array type.");
    const [s] = new Uint16Array(t, 2, 1), [c] = new Uint32Array(t, 4, 1);
    return new vo(c, s, o, t);
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
    const o = cs.indexOf(this.ArrayType), s = t * 2 * this.ArrayType.BYTES_PER_ELEMENT, c = t * this.IndexArrayType.BYTES_PER_ELEMENT, r = (8 - c % 8) % 8;
    if (o < 0)
      throw new Error(`Unexpected typed array class: ${a}.`);
    i && i instanceof ArrayBuffer ? (this.data = i, this.ids = new this.IndexArrayType(this.data, Rn, t), this.coords = new this.ArrayType(this.data, Rn + c + r, t * 2), this._pos = t * 2, this._finished = !0) : (this.data = new ArrayBuffer(Rn + s + c + r), this.ids = new this.IndexArrayType(this.data, Rn, t), this.coords = new this.ArrayType(this.data, Rn + c + r, t * 2), this._pos = 0, this._finished = !1, new Uint8Array(this.data, 0, 2).set([219, (qi << 4) + o]), new Uint16Array(this.data, 2, 1)[0] = n, new Uint32Array(this.data, 4, 1)[0] = t);
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
    return Jr(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = !0, this;
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
    const { ids: o, coords: s, nodeSize: c } = this, r = [0, o.length - 1, 0], g = [];
    for (; r.length; ) {
      const u = r.pop() || 0, p = r.pop() || 0, d = r.pop() || 0;
      if (p - d <= c) {
        for (let y = d; y <= p; y++) {
          const w = s[2 * y], k = s[2 * y + 1];
          w >= t && w <= a && k >= n && k <= i && g.push(o[y]);
        }
        continue;
      }
      const h = d + p >> 1, m = s[2 * h], S = s[2 * h + 1];
      m >= t && m <= a && S >= n && S <= i && g.push(o[h]), (u === 0 ? t <= m : n <= S) && (r.push(d), r.push(h - 1), r.push(1 - u)), (u === 0 ? a >= m : i >= S) && (r.push(h + 1), r.push(p), r.push(1 - u));
    }
    return g;
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
    const { ids: i, coords: o, nodeSize: s } = this, c = [0, i.length - 1, 0], r = [], g = a * a;
    for (; c.length; ) {
      const u = c.pop() || 0, p = c.pop() || 0, d = c.pop() || 0;
      if (p - d <= s) {
        for (let y = d; y <= p; y++)
          us(o[2 * y], o[2 * y + 1], t, n) <= g && r.push(i[y]);
        continue;
      }
      const h = d + p >> 1, m = o[2 * h], S = o[2 * h + 1];
      us(m, S, t, n) <= g && r.push(i[h]), (u === 0 ? t - a <= m : n - a <= S) && (c.push(d), c.push(h - 1), c.push(1 - u)), (u === 0 ? t + a >= m : n + a >= S) && (c.push(h + 1), c.push(p), c.push(1 - u));
    }
    return r;
  }
}
function Jr(e, t, n, a, i, o) {
  if (i - a <= n)
    return;
  const s = a + i >> 1;
  Vc(e, t, s, a, i, o), Jr(e, t, n, a, s - 1, 1 - o), Jr(e, t, n, s + 1, i, 1 - o);
}
function Vc(e, t, n, a, i, o) {
  for (; i > a; ) {
    if (i - a > 600) {
      const g = i - a + 1, u = n - a + 1, p = Math.log(g), d = 0.5 * Math.exp(2 * p / 3), h = 0.5 * Math.sqrt(p * d * (g - d) / g) * (u - g / 2 < 0 ? -1 : 1), m = Math.max(a, Math.floor(n - u * d / g + h)), S = Math.min(i, Math.floor(n + (g - u) * d / g + h));
      Vc(e, t, n, m, S, o);
    }
    const s = t[2 * n + o];
    let c = a, r = i;
    for (On(e, t, a, n), t[2 * i + o] > s && On(e, t, a, i); c < r; ) {
      for (On(e, t, c, r), c++, r--; t[2 * c + o] < s; )
        c++;
      for (; t[2 * r + o] > s; )
        r--;
    }
    t[2 * a + o] === s ? On(e, t, a, r) : (r++, On(e, t, r, i)), r <= n && (a = r + 1), n <= r && (i = r - 1);
  }
}
function On(e, t, n, a) {
  Ki(e, n, a), Ki(t, 2 * n, 2 * a), Ki(t, 2 * n + 1, 2 * a + 1);
}
function Ki(e, t, n) {
  const a = e[t];
  e[t] = e[n], e[n] = a;
}
function us(e, t, n, a) {
  const i = e - n, o = t - a;
  return i * i + o * o;
}
const zh = {
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
}, ds = Math.fround || ((e) => (t) => (e[0] = +t, e[0]))(new Float32Array(1)), Jt = 2, Ut = 3, Zi = 4, _t = 5, Hc = 6;
class _h {
  constructor(t) {
    this.options = Object.assign(Object.create(zh), t), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
  }
  load(t) {
    const { log: n, minZoom: a, maxZoom: i } = this.options;
    n && console.time("total time");
    const o = `prepare ${t.length} points`;
    n && console.time(o), this.points = t;
    const s = [];
    for (let r = 0; r < t.length; r++) {
      const g = t[r];
      if (!g.geometry)
        continue;
      const [u, p] = g.geometry.coordinates, d = ds(Na(u)), h = ds(Ma(p));
      s.push(
        d,
        h,
        // projected point coordinates
        1 / 0,
        // the last zoom the point was processed at
        r,
        // index of the source feature in the original input array
        -1,
        // parent cluster id
        1
        // number of points in a cluster
      ), this.options.reduce && s.push(0);
    }
    let c = this.trees[i + 1] = this._createTree(s);
    n && console.timeEnd(o);
    for (let r = i; r >= a; r--) {
      const g = +Date.now();
      c = this.trees[r] = this._createTree(this._cluster(c, r)), n && console.log("z%d: %d clusters in %dms", r, c.numItems, +Date.now() - g);
    }
    return n && console.timeEnd("total time"), this;
  }
  getClusters(t, n) {
    let a = ((t[0] + 180) % 360 + 360) % 360 - 180;
    const i = Math.max(-90, Math.min(90, t[1]));
    let o = t[2] === 180 ? 180 : ((t[2] + 180) % 360 + 360) % 360 - 180;
    const s = Math.max(-90, Math.min(90, t[3]));
    if (t[2] - t[0] >= 360)
      a = -180, o = 180;
    else if (a > o) {
      const p = this.getClusters([a, i, 180, s], n), d = this.getClusters([-180, i, o, s], n);
      return p.concat(d);
    }
    const c = this.trees[this._limitZoom(n)], r = c.range(Na(a), Ma(s), Na(o), Ma(i)), g = c.data, u = [];
    for (const p of r) {
      const d = this.stride * p;
      u.push(g[d + _t] > 1 ? ps(g, d, this.clusterProps) : this.points[g[d + Ut]]);
    }
    return u;
  }
  getChildren(t) {
    const n = this._getOriginId(t), a = this._getOriginZoom(t), i = "No cluster with the specified id.", o = this.trees[a];
    if (!o)
      throw new Error(i);
    const s = o.data;
    if (n * this.stride >= s.length)
      throw new Error(i);
    const c = this.options.radius / (this.options.extent * Math.pow(2, a - 1)), r = s[n * this.stride], g = s[n * this.stride + 1], u = o.within(r, g, c), p = [];
    for (const d of u) {
      const h = d * this.stride;
      s[h + Zi] === t && p.push(s[h + _t] > 1 ? ps(s, h, this.clusterProps) : this.points[s[h + Ut]]);
    }
    if (p.length === 0)
      throw new Error(i);
    return p;
  }
  getLeaves(t, n, a) {
    n = n || 10, a = a || 0;
    const i = [];
    return this._appendLeaves(i, t, n, a, 0), i;
  }
  getTile(t, n, a) {
    const i = this.trees[this._limitZoom(t)], o = Math.pow(2, t), { extent: s, radius: c } = this.options, r = c / s, g = (a - r) / o, u = (a + 1 + r) / o, p = {
      features: []
    };
    return this._addTileFeatures(
      i.range((n - r) / o, g, (n + 1 + r) / o, u),
      i.data,
      n,
      a,
      o,
      p
    ), n === 0 && this._addTileFeatures(
      i.range(1 - r / o, g, 1, u),
      i.data,
      o,
      a,
      o,
      p
    ), n === o - 1 && this._addTileFeatures(
      i.range(0, g, r / o, u),
      i.data,
      -1,
      a,
      o,
      p
    ), p.features.length ? p : null;
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
  _appendLeaves(t, n, a, i, o) {
    const s = this.getChildren(n);
    for (const c of s) {
      const r = c.properties;
      if (r && r.cluster ? o + r.point_count <= i ? o += r.point_count : o = this._appendLeaves(t, r.cluster_id, a, i, o) : o < i ? o++ : t.push(c), t.length === a)
        break;
    }
    return o;
  }
  _createTree(t) {
    const n = new vo(t.length / this.stride | 0, this.options.nodeSize, Float32Array);
    for (let a = 0; a < t.length; a += this.stride)
      n.add(t[a], t[a + 1]);
    return n.finish(), n.data = t, n;
  }
  _addTileFeatures(t, n, a, i, o, s) {
    for (const c of t) {
      const r = c * this.stride, g = n[r + _t] > 1;
      let u, p, d;
      if (g)
        u = qc(n, r, this.clusterProps), p = n[r], d = n[r + 1];
      else {
        const S = this.points[n[r + Ut]];
        u = S.properties;
        const [y, w] = S.geometry.coordinates;
        p = Na(y), d = Ma(w);
      }
      const h = {
        type: 1,
        geometry: [[
          Math.round(this.options.extent * (p * o - a)),
          Math.round(this.options.extent * (d * o - i))
        ]],
        tags: u
      };
      let m;
      g || this.options.generateId ? m = n[r + Ut] : m = this.points[n[r + Ut]].id, m !== void 0 && (h.id = m), s.features.push(h);
    }
  }
  _limitZoom(t) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+t), this.options.maxZoom + 1));
  }
  _cluster(t, n) {
    const { radius: a, extent: i, reduce: o, minPoints: s } = this.options, c = a / (i * Math.pow(2, n)), r = t.data, g = [], u = this.stride;
    for (let p = 0; p < r.length; p += u) {
      if (r[p + Jt] <= n)
        continue;
      r[p + Jt] = n;
      const d = r[p], h = r[p + 1], m = t.within(r[p], r[p + 1], c), S = r[p + _t];
      let y = S;
      for (const w of m) {
        const k = w * u;
        r[k + Jt] > n && (y += r[k + _t]);
      }
      if (y > S && y >= s) {
        let w = d * S, k = h * S, f, T = -1;
        const L = ((p / u | 0) << 5) + (n + 1) + this.points.length;
        for (const M of m) {
          const x = M * u;
          if (r[x + Jt] <= n)
            continue;
          r[x + Jt] = n;
          const R = r[x + _t];
          w += r[x] * R, k += r[x + 1] * R, r[x + Zi] = L, o && (f || (f = this._map(r, p, !0), T = this.clusterProps.length, this.clusterProps.push(f)), o(f, this._map(r, x)));
        }
        r[p + Zi] = L, g.push(w / y, k / y, 1 / 0, L, -1, y), o && g.push(T);
      } else {
        for (let w = 0; w < u; w++)
          g.push(r[p + w]);
        if (y > 1)
          for (const w of m) {
            const k = w * u;
            if (!(r[k + Jt] <= n)) {
              r[k + Jt] = n;
              for (let f = 0; f < u; f++)
                g.push(r[k + f]);
            }
          }
      }
    }
    return g;
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
      const s = this.clusterProps[t[n + Hc]];
      return a ? Object.assign({}, s) : s;
    }
    const i = this.points[t[n + Ut]].properties, o = this.options.map(i);
    return a && o === i ? Object.assign({}, o) : o;
  }
}
function ps(e, t, n) {
  return {
    type: "Feature",
    id: e[t + Ut],
    properties: qc(e, t, n),
    geometry: {
      type: "Point",
      coordinates: [Uh(e[t]), Fh(e[t + 1])]
    }
  };
}
function qc(e, t, n) {
  const a = e[t + _t], i = a >= 1e4 ? `${Math.round(a / 1e3)}k` : a >= 1e3 ? `${Math.round(a / 100) / 10}k` : a, o = e[t + Hc], s = o === -1 ? {} : Object.assign({}, n[o]);
  return Object.assign(s, {
    cluster: !0,
    cluster_id: e[t + Ut],
    point_count: a,
    point_count_abbreviated: i
  });
}
function Na(e) {
  return e / 360 + 0.5;
}
function Ma(e) {
  const t = Math.sin(e * Math.PI / 180), n = 0.5 - 0.25 * Math.log((1 + t) / (1 - t)) / Math.PI;
  return n < 0 ? 0 : n > 1 ? 1 : n;
}
function Uh(e) {
  return (e - 0.5) * 360;
}
function Fh(e) {
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
function Gh(e, t) {
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
class Qr {
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
class Bh {
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
    return Wh(t);
  }
}
const Wh = (e) => e.map((n) => new Qr({
  position: tt.getPosition(n),
  markers: [n]
}));
class jh extends Bh {
  constructor(t) {
    var { maxZoom: n, radius: a = 60 } = t, i = Gh(t, ["maxZoom", "radius"]);
    super({ maxZoom: n }), this.state = { zoom: -1 }, this.superCluster = new _h(Object.assign({ maxZoom: this.maxZoom, radius: a }, i));
  }
  calculate(t) {
    let n = !1;
    const a = { zoom: t.map.getZoom() };
    if (!jo(t.markers, this.markers)) {
      n = !0, this.markers = [...t.markers];
      const i = this.markers.map((o) => {
        const s = tt.getPosition(o);
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [s.lng(), s.lat()]
          },
          properties: { marker: o }
        };
      });
      this.superCluster.load(i);
    }
    return n || (this.state.zoom <= this.maxZoom || a.zoom <= this.maxZoom) && (n = !jo(this.state, a)), this.state = a, n && (this.clusters = this.cluster(t)), { clusters: this.clusters, changed: n };
  }
  cluster({ map: t }) {
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(t.getZoom())).map((n) => this.transformCluster(n));
  }
  transformCluster({ geometry: { coordinates: [t, n] }, properties: a }) {
    if (a.cluster)
      return new Qr({
        markers: this.superCluster.getLeaves(a.cluster_id, 1 / 0).map((o) => o.properties.marker),
        position: { lat: n, lng: t }
      });
    const i = a.marker;
    return new Qr({
      markers: [i],
      position: tt.getPosition(i)
    });
  }
}
class Vh {
  constructor(t, n) {
    this.markers = { sum: t.length };
    const a = n.map((o) => o.count), i = a.reduce((o, s) => o + s, 0);
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
class Hh {
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
    const s = `<svg fill="${t > Math.max(10, a.clusters.markers.mean) ? "#ff0000" : "#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${t}</text>
</svg>`, c = `Cluster of ${t} markers`, r = Number(google.maps.Marker.MAX_ZINDEX) + t;
    if (tt.isAdvancedMarkerAvailable(i)) {
      const p = new DOMParser().parseFromString(s, "image/svg+xml").documentElement;
      p.setAttribute("transform", "translate(0 25)");
      const d = {
        map: i,
        position: n,
        zIndex: r,
        title: c,
        content: p
      };
      return new google.maps.marker.AdvancedMarkerElement(d);
    }
    const g = {
      position: n,
      zIndex: r,
      title: c,
      icon: {
        url: `data:image/svg+xml;base64,${btoa(s)}`,
        anchor: new google.maps.Point(25, 25)
      }
    };
    return new google.maps.Marker(g);
  }
}
function qh(e, t) {
  for (let n in t.prototype)
    e.prototype[n] = t.prototype[n];
}
class ko {
  constructor() {
    qh(ko, google.maps.OverlayView);
  }
}
var Qn;
(function(e) {
  e.CLUSTERING_BEGIN = "clusteringbegin", e.CLUSTERING_END = "clusteringend", e.CLUSTER_CLICK = "click";
})(Qn || (Qn = {}));
const Kh = (e, t, n) => {
  n.fitBounds(t.bounds);
};
class Zh extends ko {
  constructor({ map: t, markers: n = [], algorithmOptions: a = {}, algorithm: i = new jh(a), renderer: o = new Hh(), onClusterClick: s = Kh }) {
    super(), this.markers = [...n], this.clusters = [], this.algorithm = i, this.renderer = o, this.onClusterClick = s, t && this.setMap(t);
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
      google.maps.event.trigger(this, Qn.CLUSTERING_BEGIN, this);
      const { clusters: n, changed: a } = this.algorithm.calculate({
        markers: this.markers,
        map: t,
        mapCanvasProjection: this.getProjection()
      });
      if (a || a == null) {
        const i = /* @__PURE__ */ new Set();
        for (const s of n)
          s.markers.length == 1 && i.add(s.markers[0]);
        const o = [];
        for (const s of this.clusters)
          s.marker != null && (s.markers.length == 1 ? i.has(s.marker) || tt.setMap(s.marker, null) : o.push(s.marker));
        this.clusters = n, this.renderClusters(), requestAnimationFrame(() => o.forEach((s) => tt.setMap(s, null)));
      }
      google.maps.event.trigger(this, Qn.CLUSTERING_END, this);
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
    const t = new Vh(this.markers, this.clusters), n = this.getMap();
    this.clusters.forEach((a) => {
      a.markers.length === 1 ? a.marker = a.markers[0] : (a.marker = this.renderer.render(a, t, n), a.markers.forEach((i) => tt.setMap(i, null)), this.onClusterClick && a.marker.addListener(
        "click",
        /* istanbul ignore next */
        (i) => {
          google.maps.event.trigger(this, Qn.CLUSTER_CLICK, a), this.onClusterClick(i, a, n);
        }
      )), tt.setMap(a.marker, n);
    });
  }
}
const Yh = {
  lat: 37.09024,
  lng: -95.712891
}, Xh = ({ apiKey: e = "" }) => {
  const t = P.useRef(null), { config: n } = P.useContext(fe);
  return P.useEffect(() => {
    new nn({
      apiKey: e,
      version: "weekly"
    }).load().then(() => {
      if (t.current) {
        const i = new window.google.maps.Map(t.current, {
          center: Yh,
          zoom: 4
        }), o = n.data.map((s) => {
          const c = document.createElement("div");
          return c.style.backgroundColor = "orange", c.style.width = "25px", c.style.height = "25px", c.style.borderRadius = "50%", c.style.display = "flex", c.style.alignItems = "center", c.style.justifyContent = "center", c.style.color = "white", c.innerText = s[n.columns.geo.name], new google.maps.Marker({
            position: { lat: Number(s[n.columns.latitude.name]), lng: Number(s[n.columns.longitude.name]) },
            title: s[n.columns.geo.name],
            map: i
          });
        });
        new Zh({ markers: o, map: i });
      }
    }).catch((i) => {
      console.error("Error loading Google Maps API:", i);
    });
  }, [e, n]), /* @__PURE__ */ l("div", { ref: t, style: { height: "500px", width: "100%" } });
}, Jh = (e) => {
  const [t, n] = P.useState([0, 0]), [a, i] = P.useState(null), [o, s] = P.useState(null), c = new q1((g) => {
    for (let u of g) {
      let { width: p, height: d } = u.contentRect;
      p = e ? p - y1 : p;
      const h = K1(p);
      i(h), n([p, d]);
    }
  }), r = P.useCallback((g) => (g !== null && c.observe(g), s(g), () => {
    c.disconnect();
  }), []);
  return { resizeObserver: c, dimensions: t, currentViewport: a, outerContainerRef: r, container: o };
}, Qh = (e, t) => {
  const { config: n, setConfig: a, runtimeFilters: i } = P.useContext(fe);
  return { generateRuntimeLegend: P.useCallback(
    (s, c, r) => {
      try {
        c || Error("No runtime data provided"), r || Error("No hash provided"), s || Error("No config object provided"), e || Error("No legend memo provided"), t || Error("No legend special class last memo provided");
        const g = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), p = Object.keys(fi), { data: d, legend: h, columns: m, general: S } = s, y = m.primary.name, w = S.type === "bubble", k = m.categorical ? m.categorical.name : void 0, f = {
          fromHash: null,
          runtimeDataHash: null,
          items: []
        };
        r && (f.fromHash = r), f.runtimeDataHash = i == null ? void 0 : i.fromHash;
        let T = h.unified ? d : Object == null ? void 0 : Object.values(c), L = 0, M = {};
        if (h.specialClasses.length && (typeof h.specialClasses[0] == "object" ? h.specialClasses.forEach((F) => {
          T = T.filter((I) => {
            const $ = String(I[F.key]);
            if (F.value === $) {
              M[$] === void 0 && (M[$] = !0, f.items.push({
                special: !0,
                value: $,
                label: F.label
              }), f.items[f.items.length - 1].color = dn(
                f.items.length - 1,
                s,
                f.items
              ), L += 1);
              let U;
              return U = f.items.findIndex((b) => b.value === $), g.set(lt(I), U), !1;
            }
            return !0;
          });
        }) : T = T.filter((F) => {
          const I = F[y];
          if (h.specialClasses.includes(I)) {
            M[I] === void 0 && (M[I] = !0, f.items.push({
              special: !0,
              value: I
            }), f.items[f.items.length - 1].color = dn(
              f.items.length - 1,
              s,
              f.items
            ), L += 1);
            let $ = 0;
            return Object.values(F).includes(I) && ($ = f.items.findIndex((U) => U.value === I)), g.set(lt(F), $), !1;
          }
          return !0;
        })), h.type === "category") {
          let F = /* @__PURE__ */ new Map(), I = 0;
          for (let N = 0; N < T.length; N++) {
            let A = T[N], _ = w && k && A[k] ? A[k] : A[y];
            _ !== void 0 && (F.has(_) === !1 ? (F.set(_, [lt(A)]), I++) : F.get(_).push(lt(A)));
          }
          let $ = [...F.keys()];
          h.additionalCategories && h.additionalCategories.forEach((N) => {
            N && d0($, N) === -1 && $.push(N);
          });
          let U = h.categoryValuesOrder ?? [];
          U.length ? $.sort((N, A) => {
            let _ = U.indexOf(N), O = U.indexOf(A);
            return _ === O ? 0 : _ === -1 ? 1 : O === -1 ? -1 : _ - O;
          }) : $.sort((N, A) => N - A), $.forEach((N) => {
            f.items.push({
              value: N
            });
            let A = f.items.length - 1, _ = F.get(N);
            _ && _.forEach((O) => g.set(O, A));
          });
          for (let N = 0; N < f.items.length; N++)
            f.items[N].color = dn(N, s, f.items);
          e.current = g, xi(f), Go(f, h);
          const b = (N, A) => {
            const _ = f.items.findIndex((O) => O.bin === N);
            u.set(A, _);
          };
          g.forEach(b), t.current = u;
          const C = f.items.filter((N) => N.special).map((N) => N.value);
          return f.items.filter((N) => N.special || !C.includes(N.value)), f;
        }
        let x = {};
        T.forEach((F) => {
          x[F[y]] = !0;
        });
        let R = Math.min(h.numberOfItems, Object.keys(x).length);
        if (h.separateZero === !0 && !S.equalNumberOptIn) {
          let F = !1;
          for (let I = 0; I < T.length; I++)
            if (T[I][y] === 0) {
              F = !0;
              let $ = T.splice(I, 1)[0];
              g.set(lt($), f.items.length), I--;
            }
          if (F) {
            R -= 1, f.items.push({
              min: 0,
              max: 0
            });
            let I = f.items.length - 1;
            f.items[I].color = dn(I, s, f.items);
          }
        }
        if (S.type !== "us-geocode" && (T = T.filter((F) => typeof F[y] == "number").sort((F, I) => {
          let $ = F[y], U = I[y];
          return $ - U;
        })), h.type === "equalnumber")
          if (S.equalNumberOptIn) {
            let F = new Set(T.map((A) => A[m.primary.name]));
            F = C1(F);
            let $ = Ge[s.color].slice(0, h.numberOfItems);
            const U = () => {
              var A;
              return ((A = m == null ? void 0 : m.primary) == null ? void 0 : A.roundToPlace) !== void 0 && (S != null && S.equalNumberOptIn) ? ne.uniq(
                T.map(
                  (_) => {
                    var O;
                    return Number(_[m.primary.name]).toFixed(Number((O = m == null ? void 0 : m.primary) == null ? void 0 : O.roundToPlace));
                  }
                )
              ) : ne.uniq(T.map((_) => Math.round(Number(_[m.primary.name]))));
            }, b = (A) => {
              var _;
              return ((_ = m == null ? void 0 : m.primary) == null ? void 0 : _.roundToPlace) !== void 0 && (S != null && S.equalNumberOptIn) ? A.quantiles().map((O) => {
                var G, W;
                return (W = Number(O)) == null ? void 0 : W.toFixed(Number((G = m == null ? void 0 : m.primary) == null ? void 0 : G.roundToPlace));
              }) : A.quantiles().map((O) => Number(Math.round(O)));
            };
            let C = Ds().domain(U()).range($);
            const N = b(C);
            N[0] !== 0 && N.unshift(0), N.map((A, _) => {
              const O = (H) => {
                let K = N[H];
                return H === 0 && h.separateZero && (K = 0), H === 1 && h.separateZero && (K = 1), K;
              }, G = (H) => Math.pow(10, -H), W = (H) => {
                var X, J;
                let K = Number(N[H + 1]) - G(Number((J = (X = s == null ? void 0 : s.columns) == null ? void 0 : X.primary) == null ? void 0 : J.roundToPlace));
                return H === 0 && h.separateZero && (K = 0), H + 1 === N.length && (K = F[1]), K;
              };
              let B = O(_), j = W(_);
              f.items.push({
                min: B,
                max: j,
                color: C(A)
              }), T.forEach((H) => {
                var J, te, Ce, ge, Pe, Ae;
                let K = H[m.primary.name], X = f.items.length - 1;
                ((te = (J = f.items) == null ? void 0 : J[X]) == null ? void 0 : te.min) === void 0 || ((ge = (Ce = f.items) == null ? void 0 : Ce[X]) == null ? void 0 : ge.max) === void 0 || K >= ((Pe = f == null ? void 0 : f.items) == null ? void 0 : Pe[X].min) && K <= ((Ae = f == null ? void 0 : f.items) == null ? void 0 : Ae[X].max) && g.set(lt(H), X);
              });
            });
          } else {
            let F = T.length, I = R, $, U;
            for (; F > 0; ) {
              $ = F % I, U = Math.floor(F / I), $ > 0 && (U += 1);
              let b = T.splice(0, U), C = b[0][y], N = b[b.length - 1][y];
              b.forEach((A) => {
                g.set(lt(A), f.items.length);
              }), f.items.push({
                min: C,
                max: N
              }), f.items[f.items.length - 1].color = dn(
                f.items.length - 1,
                s,
                f.items
              ), I -= 1, F -= U;
            }
          }
        if (h.type === "equalinterval" && (T == null ? void 0 : T.length) !== 0) {
          if (!T || T.length === 0) {
            a({
              ...s,
              runtime: {
                ...s.runtime,
                editorErrorMessage: "Error setting equal interval legend type"
              }
            });
            return;
          }
          T = T.filter((U) => U[y] !== void 0);
          let F = T[0][y], I = T[T.length - 1][y], $ = 0;
          for (let U = 0; U < R; U++) {
            let b = Math.abs(I - F) / R, C = F + b * U, N = C + b;
            for (U === R - 1 && (N = I); $ < T.length && T[$][y] <= N; )
              g.set(lt(T[$]), f.items.length), $ += 1;
            let A = {
              min: Math.round(C * 100) / 100,
              max: Math.round(N * 100) / 100
            };
            f.items.push(A), f.items[f.items.length - 1].color = dn(
              f.items.length - 1,
              s,
              f.items
            );
          }
        }
        if (xi(f), e.current = g, S.geoType === "world") {
          const F = Object.keys(c), I = d === void 0 ? !1 : !p.every(($) => F.includes($));
          f.items.length > 0 && I && f.items.push({
            min: null,
            max: null,
            color: Mn(s)
          });
        }
        xi(f), Go(f, h);
        const z = (F, I) => {
          const $ = f.items.findIndex((U) => U.bin === F);
          u.set(I, $);
        };
        return g.forEach(z), t.current = u, f;
      } catch (g) {
        return console.error(g), [];
      }
    },
    [e, n, i, a]
  ) };
}, eg = {
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
}, tg = (e = {}) => ({
  config: ne.merge({}, eg, e),
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
}), ng = (e, t) => {
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
}, ag = R0(ng), ig = () => {
  const e = P.useContext(it);
  return {
    closeModal: ({ target: n }, a) => {
      typeof n.className == "string" && (n.className.includes("modal-close") || n.className.includes("modal-background")) && a !== null && e({ type: "SET_MODAL", payload: null });
    }
  };
}, Ig = ({
  config: e,
  navigationHandler: t,
  isDashboard: n = !1,
  isEditor: a = !1,
  logo: i = "",
  setSharedFilter: o,
  setSharedFilterValue: s,
  link: c,
  setConfig: r,
  loadConfig: g,
  datasets: u
}) => {
  var Lo, wo, To, No, Mo, Eo, xo;
  const p = tg(e), [d, h] = P.useReducer(ag, p), {
    loading: m,
    displayPanel: S,
    runtimeData: y,
    runtimeFilters: w,
    runtimeLegend: k,
    config: f,
    modal: T,
    accessibleStatus: L,
    filteredCountryCode: M,
    position: x,
    scale: R,
    translate: z,
    projection: F,
    stateToShow: I,
    requiredColumns: $,
    topoData: U,
    coveLoadedHasRan: b,
    isDraggingAnnotation: C
  } = d, N = P.useContext(S1), A = (le) => {
    h({ type: "SET_CONFIG", payload: le }), a && !n ? N.setTempConfig(le) : n && a && r(le);
  };
  P.useEffect(() => {
    A({ ...f, data: e.data });
  }, [e.data]);
  const _ = (le) => {
    h({ type: "SET_RUNTIME_DATA", payload: le });
  }, O = (le) => {
    h({ type: "SET_RUNTIME_FILTERS", payload: le });
  }, G = (le) => {
    h({ type: "SET_RUNTIME_LEGEND", payload: le });
  }, W = (le) => {
    const Ee = P1(le, []);
    A({ ...f, filters: Ee }), f ? _(le) : O(le);
  }, B = new _1(), j = P.useRef(), H = P.useRef(/* @__PURE__ */ new Map()), K = P.useRef(null), X = P.useRef(/* @__PURE__ */ new Map()), J = P.useRef(null), te = P.useRef(null), Ce = P.useId(), ge = P.useId(), Pe = P.useId(), Ae = "test", { currentViewport: Q, dimensions: Ye, container: zt, outerContainerRef: Ct } = Jh(a), { generateRuntimeLegend: cn } = Qh(H, X), { generateRuntimeData: En } = jc(f), Re = async () => {
    if (f.dataUrl) {
      const le = new URL(f.runtimeDataUrl || f.dataUrl, window.location.origin);
      let Ee = Object.fromEntries(new URLSearchParams(le.search)), xn = !1;
      if (f.filters.forEach((et) => {
        et.type === "url" && Ee[et.queryParameter] !== decodeURIComponent(et.active) && (Ee[et.queryParameter] = et.active, xn = !0);
      }), !xn)
        return;
      let Et = `${le.origin}${le.pathname}${Object.keys(Ee).map((et, Yt) => {
        let Pt = Yt === 0 ? "?" : "&";
        return Pt += et + "=", Pt += Ee[et], Pt;
      }).join("")}`, ot;
      try {
        const Yt = /(?:\.([^.]+))?$/.exec(le.pathname)[1];
        Yt === "csv" || R1(Et) ? ot = await fetch(Et).then((Pt) => Pt.text()).then((Pt) => k1.parse(Pt, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          encoding: "utf-8"
        }).data) : Yt === "json" || O1(Et) ? ot = await fetch(Et).then((Pt) => Pt.json()) : ot = [];
      } catch (et) {
        console.error(`Cannot parse URL: ${Et}`), console.log(et), ot = [];
      }
      f.dataDescription && (ot = B.autoStandardize(ot), ot = B.developerStandardize(ot, f.dataDescription));
      const xt = ne.cloneDeep(f);
      xt.data = ot, xt.runtimeDataUrl = Et, A(xt);
    }
  };
  P.useEffect(() => {
    f && !y.init && !b && zt && (A1("cove_loaded", { config: f }), h({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [f, zt, y.init]), P.useEffect(() => {
    var ot;
    f.data && f.columns.geo.name && f.columns.geo.name !== f.data.fromColumn && $a(f, f.columns.geo.name);
    const le = lt(f.filters);
    let Ee;
    f.filters && (f || le !== w.fromHash) && (Ee = $0({ ...f, data: e.data }, le, w), Ee && (Ee.forEach((xt, et) => {
      const Yt = E1(xt);
      Yt && (Ee[et].active = Yt);
    }), O(Ee)));
    const xn = Fo(f, w), Et = lt({
      data: f.data,
      columns: f.columns,
      geoType: f.general.geoType,
      type: f.general.type,
      geo: f.columns.geo.name,
      primary: f.columns.primary.name,
      mapPosition: f.mapPosition,
      map: f.map,
      ...w
    });
    if (Et !== (y == null ? void 0 : y.fromHash) && ((ot = f.data) != null && ot.fromColumn)) {
      const xt = En(
        { ...f, data: e.data },
        Ee || w,
        Et
      );
      _(xt);
    } else if (xn !== (k == null ? void 0 : k.fromHash) && (y == null ? void 0 : y.init) === void 0) {
      const xt = cn(f, y, xn);
      G(xt);
    }
  }, [f, e.data]), P.useEffect(() => {
    const le = Fo(f, w), Ee = cn({ ...f, data: e.data }, y, le);
    G(Ee);
  }, [
    y,
    f.legend.unified,
    f.legend.showSpecialClassesLast,
    f.legend.separateZero,
    f.general.equalNumberOptIn,
    f.legend.numberOfItems,
    f.legend.specialClasses,
    f.legend.additionalCategories,
    f,
    w
  ]), P.useEffect(() => {
    n || Re();
  }, [JSON.stringify(f.filters)]);
  const { general: Me, tooltips: St, table: Te, columns: Oe } = f, { subtext: Fe = "", geoType: Xe } = Me, { showDownloadImgButton: v, showDownloadPdfButton: D, headerColor: q, introText: Y } = Me, { closeModal: ee } = ig();
  let ye = f.general.title;
  a && (!ye || ye === "") && (ye = "Map Title"), (!Te.label || Te.label === "") && (Te.label = "Data Table");
  const Zt = {
    setParentConfig: r,
    container: zt,
    content: T,
    currentViewport: Q,
    customNavigationHandler: t,
    data: y,
    dimensions: Ye,
    filteredCountryCode: M,
    innerContainerRef: j,
    isDashboard: n,
    isEditor: a,
    legendMemo: H,
    legendSpecialClassLastMemo: X,
    logo: i,
    mapId: Pe,
    outerContainerRef: Ct,
    position: x,
    projection: F,
    runtimeData: y,
    runtimeFilters: w,
    runtimeLegend: k,
    scale: R,
    setConfig: A,
    setRuntimeData: _,
    setRuntimeFilters: O,
    setRuntimeLegend: G,
    setSharedFilter: o,
    setSharedFilterValue: s,
    config: f,
    stateToShow: I,
    tooltipId: Ae,
    tooltipRef: te,
    topoData: U,
    translate: z,
    isDraggingAnnotation: C,
    loadConfig: g
  };
  if (!f.data)
    return /* @__PURE__ */ l(re, {});
  const rt = u0(f, m, ge), un = /* @__PURE__ */ E("a", { href: `#data-table-${f.dataKey}`, className: "margin-left-href", children: [
    f.dataKey,
    " (Go to Table)"
  ] }), Li = () => {
    var Ee;
    const le = ["cove-component__content", "cdc-map-inner-container", `${Q}`, `${q}`];
    return ((Ee = f == null ? void 0 : f.runtime) == null ? void 0 : Ee.editorErrorMessage.length) > 0 && le.push("type-map--has-error"), le.join(" ");
  };
  return /* @__PURE__ */ l(fe.Provider, { value: Zt, children: /* @__PURE__ */ l(it.Provider, { value: h, children: /* @__PURE__ */ E(
    Xi.VisualizationWrapper,
    {
      config: f,
      isEditor: a,
      ref: Ct,
      currentViewport: Q,
      imageId: Ce,
      showEditorPanel: f.showEditorPanel,
      children: [
        a && /* @__PURE__ */ l(Cd, { datasets: u }),
        /* @__PURE__ */ E(Xi.Responsive, { isEditor: a, children: [
          ($ == null ? void 0 : $.length) > 0 && /* @__PURE__ */ l(I0, { requiredColumns: $, className: S ? "waiting" : "waiting collapsed" }),
          !y.init && (Me.type === "navigation" || k) && /* @__PURE__ */ E("section", { className: Li(), "aria-label": "Map: " + ye, ref: j, children: [
            ((Lo = f == null ? void 0 : f.runtime) == null ? void 0 : Lo.editorErrorMessage.length) > 0 && /* @__PURE__ */ l(Sd, {}),
            /* @__PURE__ */ l(
              I1,
              {
                title: ye,
                superTitle: Me.superTitle,
                config: f,
                classes: ["map-title", Me.showTitle === !0 ? "visible" : "hidden", `${q}`]
              }
            ),
            /* @__PURE__ */ l(zo, { skipId: rt, skipMessage: "Skip Over Map Container" }),
            ((wo = f == null ? void 0 : f.annotations) == null ? void 0 : wo.length) > 0 && /* @__PURE__ */ l(zo, { skipId: rt, skipMessage: "Skip over annotations" }, "skip-annotations"),
            Y && /* @__PURE__ */ l("section", { className: "introText mb-4", children: Rt(Y) }),
            ((To = f == null ? void 0 : f.filters) == null ? void 0 : To.length) > 0 && /* @__PURE__ */ l(
              x1,
              {
                config: f,
                setConfig: A,
                filteredData: w,
                setFilteredData: W,
                dimensions: Ye,
                standaloneMap: !f
              }
            ),
            /* @__PURE__ */ E(
              "div",
              {
                role: "region",
                tabIndex: 0,
                className: h0(f, T).join(" "),
                onClick: (le) => ee(le, T),
                onKeyDown: (le) => {
                  le.key === "Enter" && ee(le, T);
                },
                children: [
                  /* @__PURE__ */ l(
                    "section",
                    {
                      className: "outline-none geography-container w-100 position-relative",
                      ref: J,
                      tabIndex: "0",
                      children: Q && /* @__PURE__ */ E(re, { children: [
                        T && /* @__PURE__ */ l(Md, {}),
                        Xe === "single-state" && /* @__PURE__ */ l(Ta.SingleState, {}),
                        Xe === "us" && f.general.type !== "us-geocode" && /* @__PURE__ */ l(Ta.State, {}),
                        Xe === "us-region" && /* @__PURE__ */ l(Ta.Region, {}),
                        Xe === "us-county" && /* @__PURE__ */ l(Ta.County, {}),
                        Xe === "world" && /* @__PURE__ */ l(Ah, {}),
                        Xe === "google-map" && /* @__PURE__ */ l(Xh, {}),
                        /* logo is handled in UsaMap.State when applicable */
                        // prettier-ignore
                        Me.type === "data" && i && (Xe !== "us" || Me.type === "us-geocode") && /* @__PURE__ */ l("img", { src: i, alt: "", className: "map-logo", style: { maxWidth: "50px" } })
                      ] })
                    }
                  ),
                  Me.showSidebar && Me.type !== "navigation" && /* @__PURE__ */ l(
                    wd,
                    {
                      dimensions: Ye,
                      ref: K,
                      skipId: rt,
                      containerWidthPadding: 0,
                      currentViewport: Q
                    }
                  )
                ]
              }
            ),
            Me.type === "navigation" && /* @__PURE__ */ l(
              Ed,
              {
                mapTabbingID: rt,
                displayGeoName: Ie,
                data: y,
                options: Me,
                columns: f.columns,
                navigationHandler: (le) => za("_blank", le, t)
              }
            ),
            n && ((No = f.table) != null && No.forceDisplay) && f.table.showDataTableLink ? un : c && c,
            Fe.length > 0 && /* @__PURE__ */ l("p", { className: "subtext mt-4", children: Rt(Fe) }),
            /* @__PURE__ */ E(Mi.Section, { classes: ["download-buttons"], children: [
              v && /* @__PURE__ */ l(
                Mi.Button,
                {
                  text: "Download Image",
                  title: "Download Chart as Image",
                  type: "image",
                  state: f,
                  elementToCapture: Ce
                }
              ),
              D && /* @__PURE__ */ l(
                Mi.Button,
                {
                  text: "Download PDF",
                  title: "Download Chart as PDF",
                  type: "pdf",
                  state: f,
                  elementToCapture: Ce
                }
              )
            ] }),
            ((Mo = f == null ? void 0 : f.runtime) == null ? void 0 : Mo.editorErrorMessage.length) === 0 && Te.forceDisplay === !0 && Me.type !== "navigation" && m === !1 && /* @__PURE__ */ l(
              N1,
              {
                columns: Oe,
                config: f,
                currentViewport: Q,
                displayGeoName: Ie,
                expandDataTable: Te.expanded,
                formatLegendLocation: (le) => {
                  var Ee;
                  return s0(le, (Ee = y == null ? void 0 : y[le]) == null ? void 0 : Ee[f.columns.geo.name]);
                },
                headerColor: Me.headerColor,
                imageRef: Ce,
                indexTitle: Te.indexLabel,
                innerContainerRef: j,
                legendMemo: H,
                legendSpecialClassLastMemo: X,
                navigationHandler: za,
                outerContainerRef: Ct,
                rawData: f.data,
                runtimeData: y,
                runtimeLegend: k,
                showDownloadImgButton: v,
                showDownloadPdfButton: D,
                tabbingId: rt,
                tableTitle: Te.label,
                vizTitle: Me.title,
                wrapColumns: Te.wrapColumns
              }
            ),
            ((Eo = f.annotations) == null ? void 0 : Eo.length) > 0 && /* @__PURE__ */ l(aa.Dropdown, {}),
            Me.footnotes && /* @__PURE__ */ l("section", { className: "footnotes pt-2 mt-4", children: Rt(Me.footnotes) })
          ] }),
          /* @__PURE__ */ l("div", { "aria-live": "assertive", className: "cdcdataviz-sr-only", children: L }),
          !C && !window.matchMedia("(any-hover: none)").matches && St.appearanceType === "hover" && /* @__PURE__ */ l(
            Ss,
            {
              id: `tooltip__${Ae}`,
              float: !0,
              className: `${St.capitalizeLabels ? "capitalize tooltip tooltip-test" : "tooltip tooltip-test"}`,
              style: { background: `rgba(255,255,255, ${f.tooltips.opacity / 100})`, color: "black" }
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              ref: te,
              id: `tooltip__${Ae}-canvas`,
              className: "tooltip",
              style: {
                background: `rgba(255,255,255,${f.tooltips.opacity / 100})`,
                position: "absolute",
                whiteSpace: "nowrap",
                display: "none"
                // can't use d-none here
              }
            }
          ),
          /* @__PURE__ */ l(z1, { config: f.footnotes, filters: (xo = f.filters) == null ? void 0 : xo.filter((le) => le.filterFootnotes) })
        ] })
      ]
    }
  ) }) });
};
export {
  Ea as A,
  Ig as C,
  ou as S,
  $a as a,
  Di as b,
  R0 as d,
  jo as e,
  eg as i
};
