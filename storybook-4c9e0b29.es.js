import { a as Ae, j as Jt } from "./storybook-8087091f.es.js";
import ke, { createContext as Oe, useState as Q, useEffect as rt, useContext as Ee, useRef as mt, useLayoutEffect as je, useId as Ne } from "react";
function Dt(t) {
  return t.split("-")[1];
}
function Xt(t) {
  return t === "y" ? "height" : "width";
}
function St(t) {
  return t.split("-")[0];
}
function Ft(t) {
  return ["top", "bottom"].includes(St(t)) ? "x" : "y";
}
function Zt(t, e, n) {
  let { reference: r, floating: o } = t;
  const l = r.x + r.width / 2 - o.width / 2, a = r.y + r.height / 2 - o.height / 2, c = Ft(e), f = Xt(c), p = r[f] / 2 - o[f] / 2, h = c === "x";
  let m;
  switch (St(e)) {
    case "top":
      m = { x: l, y: r.y - o.height };
      break;
    case "bottom":
      m = { x: l, y: r.y + r.height };
      break;
    case "right":
      m = { x: r.x + r.width, y: a };
      break;
    case "left":
      m = { x: r.x - o.width, y: a };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (Dt(e)) {
    case "start":
      m[c] -= p * (n && h ? -1 : 1);
      break;
    case "end":
      m[c] += p * (n && h ? -1 : 1);
  }
  return m;
}
function se(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function Ct(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function ue(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: r, y: o, platform: l, rects: a, elements: c, strategy: f } = t, { boundary: p = "clippingAncestors", rootBoundary: h = "viewport", elementContext: m = "floating", altBoundary: g = !1, padding: R = 0 } = e, T = se(R), b = c[g ? m === "floating" ? "reference" : "floating" : m], x = Ct(await l.getClippingRect({ element: (n = await (l.isElement == null ? void 0 : l.isElement(b))) == null || n ? b : b.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(c.floating)), boundary: p, rootBoundary: h, strategy: f })), d = m === "floating" ? { ...a.floating, x: r, y: o } : a.reference, k = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(c.floating)), _ = await (l.isElement == null ? void 0 : l.isElement(k)) && await (l.getScale == null ? void 0 : l.getScale(k)) || { x: 1, y: 1 }, S = Ct(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: d, offsetParent: k, strategy: f }) : d);
  return { top: (x.top - S.top + T.top) / _.y, bottom: (S.bottom - x.bottom + T.bottom) / _.y, left: (x.left - S.left + T.left) / _.x, right: (S.right - x.right + T.right) / _.x };
}
const Ce = Math.min, Le = Math.max;
function zt(t, e, n) {
  return Le(t, Ce(e, n));
}
["top", "right", "bottom", "left"].reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Pe = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Wt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Pe[e]);
}
function $e(t, e, n) {
  n === void 0 && (n = !1);
  const r = Dt(t), o = Ft(t), l = Xt(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (a = Wt(a)), { main: a, cross: Wt(a) };
}
const De = { start: "end", end: "start" };
function qt(t) {
  return t.replace(/start|end/g, (e) => De[e]);
}
const Fe = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: r, middlewareData: o, rects: l, initialPlacement: a, platform: c, elements: f } = e, { mainAxis: p = !0, crossAxis: h = !0, fallbackPlacements: m, fallbackStrategy: g = "bestFit", fallbackAxisSideDirection: R = "none", flipAlignment: T = !0, ...b } = t, x = St(r), d = St(a) === a, k = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)), _ = m || (d || !T ? [Wt(a)] : function(O) {
      const z = Wt(O);
      return [qt(O), z, qt(z)];
    }(a));
    m || R === "none" || _.push(...function(O, z, B, q) {
      const F = Dt(O);
      let I = function(et, ot, ut) {
        const nt = ["left", "right"], G = ["right", "left"], ft = ["top", "bottom"], pt = ["bottom", "top"];
        switch (et) {
          case "top":
          case "bottom":
            return ut ? ot ? G : nt : ot ? nt : G;
          case "left":
          case "right":
            return ot ? ft : pt;
          default:
            return [];
        }
      }(St(O), B === "start", q);
      return F && (I = I.map((et) => et + "-" + F), z && (I = I.concat(I.map(qt)))), I;
    }(a, T, R, k));
    const S = [a, ..._], V = await ue(e, b), U = [];
    let D = ((n = o.flip) == null ? void 0 : n.overflows) || [];
    if (p && U.push(V[x]), h) {
      const { main: O, cross: z } = $e(r, l, k);
      U.push(V[O], V[z]);
    }
    if (D = [...D, { placement: r, overflows: U }], !U.every((O) => O <= 0)) {
      var Z, M;
      const O = (((Z = o.flip) == null ? void 0 : Z.index) || 0) + 1, z = S[O];
      if (z)
        return { data: { index: O, overflows: D }, reset: { placement: z } };
      let B = (M = D.find((q) => q.overflows[0] <= 0)) == null ? void 0 : M.placement;
      if (!B)
        switch (g) {
          case "bestFit": {
            var K;
            const q = (K = D.map((F) => [F.placement, F.overflows.filter((I) => I > 0).reduce((I, et) => I + et, 0)]).sort((F, I) => F[1] - I[1])[0]) == null ? void 0 : K[0];
            q && (B = q);
            break;
          }
          case "initialPlacement":
            B = a;
        }
      if (r !== B)
        return { reset: { placement: B } };
    }
    return {};
  } };
}, Ie = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: n, y: r } = e, o = await async function(l, a) {
      const { placement: c, platform: f, elements: p } = l, h = await (f.isRTL == null ? void 0 : f.isRTL(p.floating)), m = St(c), g = Dt(c), R = Ft(c) === "x", T = ["left", "top"].includes(m) ? -1 : 1, b = h && R ? -1 : 1, x = typeof a == "function" ? a(l) : a;
      let { mainAxis: d, crossAxis: k, alignmentAxis: _ } = typeof x == "number" ? { mainAxis: x, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...x };
      return g && typeof _ == "number" && (k = g === "end" ? -1 * _ : _), R ? { x: k * b, y: d * T } : { x: d * T, y: k * b };
    }(e, t);
    return { x: n + o.x, y: r + o.y, data: o };
  } };
}, We = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: r, placement: o } = e, { mainAxis: l = !0, crossAxis: a = !1, limiter: c = { fn: (x) => {
      let { x: d, y: k } = x;
      return { x: d, y: k };
    } }, ...f } = t, p = { x: n, y: r }, h = await ue(e, f), m = Ft(St(o)), g = m === "x" ? "y" : "x";
    let R = p[m], T = p[g];
    if (l) {
      const x = m === "y" ? "bottom" : "right";
      R = zt(R + h[m === "y" ? "top" : "left"], R, R - h[x]);
    }
    if (a) {
      const x = g === "y" ? "bottom" : "right";
      T = zt(T + h[g === "y" ? "top" : "left"], T, T - h[x]);
    }
    const b = c.fn({ ...e, [m]: R, [g]: T });
    return { ...b, data: { x: b.x - n, y: b.y - r } };
  } };
};
function it(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ct(t) {
  return it(t).getComputedStyle(t);
}
const Gt = Math.min, Lt = Math.max, Bt = Math.round;
function fe(t) {
  const e = ct(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const o = t.offsetWidth, l = t.offsetHeight, a = Bt(n) !== o || Bt(r) !== l;
  return a && (n = o, r = l), { width: n, height: r, fallback: a };
}
function wt(t) {
  return de(t) ? (t.nodeName || "").toLowerCase() : "";
}
let It;
function pe() {
  if (It)
    return It;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (It = t.brands.map((e) => e.brand + "/" + e.version).join(" "), It) : navigator.userAgent;
}
function st(t) {
  return t instanceof it(t).HTMLElement;
}
function gt(t) {
  return t instanceof it(t).Element;
}
function de(t) {
  return t instanceof it(t).Node;
}
function Qt(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof it(t).ShadowRoot || t instanceof ShadowRoot;
}
function Ht(t) {
  const { overflow: e, overflowX: n, overflowY: r, display: o } = ct(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o);
}
function Be(t) {
  return ["table", "td", "th"].includes(wt(t));
}
function Yt(t) {
  const e = /firefox/i.test(pe()), n = ct(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some((o) => {
    const l = n.contain;
    return l != null && l.includes(o);
  });
}
function ye() {
  return !/^((?!chrome|android).)*safari/i.test(pe());
}
function Kt(t) {
  return ["html", "body", "#document"].includes(wt(t));
}
function me(t) {
  return gt(t) ? t : t.contextElement;
}
const he = { x: 1, y: 1 };
function kt(t) {
  const e = me(t);
  if (!st(e))
    return he;
  const n = e.getBoundingClientRect(), { width: r, height: o, fallback: l } = fe(e);
  let a = (l ? Bt(n.width) : n.width) / r, c = (l ? Bt(n.height) : n.height) / o;
  return a && Number.isFinite(a) || (a = 1), c && Number.isFinite(c) || (c = 1), { x: a, y: c };
}
function Pt(t, e, n, r) {
  var o, l;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const a = t.getBoundingClientRect(), c = me(t);
  let f = he;
  e && (r ? gt(r) && (f = kt(r)) : f = kt(t));
  const p = c ? it(c) : window, h = !ye() && n;
  let m = (a.left + (h && ((o = p.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / f.x, g = (a.top + (h && ((l = p.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / f.y, R = a.width / f.x, T = a.height / f.y;
  if (c) {
    const b = it(c), x = r && gt(r) ? it(r) : r;
    let d = b.frameElement;
    for (; d && r && x !== b; ) {
      const k = kt(d), _ = d.getBoundingClientRect(), S = getComputedStyle(d);
      _.x += (d.clientLeft + parseFloat(S.paddingLeft)) * k.x, _.y += (d.clientTop + parseFloat(S.paddingTop)) * k.y, m *= k.x, g *= k.y, R *= k.x, T *= k.y, m += _.x, g += _.y, d = it(d).frameElement;
    }
  }
  return { width: R, height: T, top: g, right: m + R, bottom: g + T, left: m, x: m, y: g };
}
function vt(t) {
  return ((de(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ut(t) {
  return gt(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function ge(t) {
  return Pt(vt(t)).left + Ut(t).scrollLeft;
}
function $t(t) {
  if (wt(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || Qt(t) && t.host || vt(t);
  return Qt(e) ? e.host : e;
}
function ve(t) {
  const e = $t(t);
  return Kt(e) ? e.ownerDocument.body : st(e) && Ht(e) ? e : ve(e);
}
function we(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = ve(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), l = it(r);
  return o ? e.concat(l, l.visualViewport || [], Ht(r) ? r : []) : e.concat(r, we(r));
}
function te(t, e, n) {
  return e === "viewport" ? Ct(function(r, o) {
    const l = it(r), a = vt(r), c = l.visualViewport;
    let f = a.clientWidth, p = a.clientHeight, h = 0, m = 0;
    if (c) {
      f = c.width, p = c.height;
      const g = ye();
      (g || !g && o === "fixed") && (h = c.offsetLeft, m = c.offsetTop);
    }
    return { width: f, height: p, x: h, y: m };
  }(t, n)) : gt(e) ? Ct(function(r, o) {
    const l = Pt(r, !0, o === "fixed"), a = l.top + r.clientTop, c = l.left + r.clientLeft, f = st(r) ? kt(r) : { x: 1, y: 1 };
    return { width: r.clientWidth * f.x, height: r.clientHeight * f.y, x: c * f.x, y: a * f.y };
  }(e, n)) : Ct(function(r) {
    const o = vt(r), l = Ut(r), a = r.ownerDocument.body, c = Lt(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), f = Lt(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
    let p = -l.scrollLeft + ge(r);
    const h = -l.scrollTop;
    return ct(a).direction === "rtl" && (p += Lt(o.clientWidth, a.clientWidth) - c), { width: c, height: f, x: p, y: h };
  }(vt(t)));
}
function ee(t) {
  return st(t) && ct(t).position !== "fixed" ? t.offsetParent : null;
}
function ne(t) {
  const e = it(t);
  let n = ee(t);
  for (; n && Be(n) && ct(n).position === "static"; )
    n = ee(n);
  return n && (wt(n) === "html" || wt(n) === "body" && ct(n).position === "static" && !Yt(n)) ? e : n || function(r) {
    let o = $t(r);
    for (; st(o) && !Kt(o); ) {
      if (Yt(o))
        return o;
      o = $t(o);
    }
    return null;
  }(t) || e;
}
function He(t, e, n) {
  const r = st(e), o = vt(e), l = Pt(t, !0, n === "fixed", e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (r || !r && n !== "fixed")
    if ((wt(e) !== "body" || Ht(o)) && (a = Ut(e)), st(e)) {
      const f = Pt(e, !0);
      c.x = f.x + e.clientLeft, c.y = f.y + e.clientTop;
    } else
      o && (c.x = ge(o));
  return { x: l.left + a.scrollLeft - c.x, y: l.top + a.scrollTop - c.y, width: l.width, height: l.height };
}
const Ue = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: r, strategy: o } = t;
  const l = n === "clippingAncestors" ? function(p, h) {
    const m = h.get(p);
    if (m)
      return m;
    let g = we(p).filter((x) => gt(x) && wt(x) !== "body"), R = null;
    const T = ct(p).position === "fixed";
    let b = T ? $t(p) : p;
    for (; gt(b) && !Kt(b); ) {
      const x = ct(b), d = Yt(b);
      (T ? d || R : d || x.position !== "static" || !R || !["absolute", "fixed"].includes(R.position)) ? R = x : g = g.filter((k) => k !== b), b = $t(b);
    }
    return h.set(p, g), g;
  }(e, this._c) : [].concat(n), a = [...l, r], c = a[0], f = a.reduce((p, h) => {
    const m = te(e, h, o);
    return p.top = Lt(m.top, p.top), p.right = Gt(m.right, p.right), p.bottom = Gt(m.bottom, p.bottom), p.left = Lt(m.left, p.left), p;
  }, te(e, c, o));
  return { width: f.right - f.left, height: f.bottom - f.top, x: f.left, y: f.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: r } = t;
  const o = st(n), l = vt(n);
  if (n === l)
    return e;
  let a = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const f = { x: 0, y: 0 };
  if ((o || !o && r !== "fixed") && ((wt(n) !== "body" || Ht(l)) && (a = Ut(n)), st(n))) {
    const p = Pt(n);
    c = kt(n), f.x = p.x + n.clientLeft, f.y = p.y + n.clientTop;
  }
  return { width: e.width * c.x, height: e.height * c.y, x: e.x * c.x - a.scrollLeft * c.x + f.x, y: e.y * c.y - a.scrollTop * c.y + f.y };
}, isElement: gt, getDimensions: function(t) {
  return st(t) ? fe(t) : t.getBoundingClientRect();
}, getOffsetParent: ne, getDocumentElement: vt, getScale: kt, async getElementRects(t) {
  let { reference: e, floating: n, strategy: r } = t;
  const o = this.getOffsetParent || ne, l = this.getDimensions;
  return { reference: He(e, await o(n), r), floating: { x: 0, y: 0, ...await l(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => ct(t).direction === "rtl" }, re = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = { platform: Ue, ...n }, l = { ...o.platform, _c: r };
  return (async (a, c, f) => {
    const { placement: p = "bottom", strategy: h = "absolute", middleware: m = [], platform: g } = f, R = m.filter(Boolean), T = await (g.isRTL == null ? void 0 : g.isRTL(c));
    if (g == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), R.filter((V) => {
      let { name: U } = V;
      return U === "autoPlacement" || U === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    a && c || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let b = await g.getElementRects({ reference: a, floating: c, strategy: h }), { x, y: d } = Zt(b, p, T), k = p, _ = {}, S = 0;
    for (let V = 0; V < R.length; V++) {
      const { name: U, fn: D } = R[V], { x: Z, y: M, data: K, reset: O } = await D({ x, y: d, initialPlacement: p, placement: k, strategy: h, middlewareData: _, rects: b, platform: g, elements: { reference: a, floating: c } });
      x = Z ?? x, d = M ?? d, _ = { ..._, [U]: { ..._[U], ...K } }, S > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), O && S <= 50 && (S++, typeof O == "object" && (O.placement && (k = O.placement), O.rects && (b = O.rects === !0 ? await g.getElementRects({ reference: a, floating: c, strategy: h }) : O.rects), { x, y: d } = Zt(b, k, T)), V = -1);
    }
    return { x, y: d, placement: k, strategy: h, middlewareData: _ };
  })(t, e, { ...o, platform: l });
};
var ht, At = { exports: {} }, oe = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ht = oe, function() {
  var t = ke, e = 60103, n = 60106;
  ht.Fragment = 60107;
  var r = 60108, o = 60114, l = 60109, a = 60110, c = 60112, f = 60113, p = 60120, h = 60115, m = 60116, g = 60121, R = 60122, T = 60117, b = 60129, x = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var d = Symbol.for;
    e = d("react.element"), n = d("react.portal"), ht.Fragment = d("react.fragment"), r = d("react.strict_mode"), o = d("react.profiler"), l = d("react.provider"), a = d("react.context"), c = d("react.forward_ref"), f = d("react.suspense"), p = d("react.suspense_list"), h = d("react.memo"), m = d("react.lazy"), g = d("react.block"), R = d("react.server.block"), T = d("react.fundamental"), d("react.scope"), d("react.opaque.id"), b = d("react.debug_trace_mode"), d("react.offscreen"), x = d("react.legacy_hidden");
  }
  var k = typeof Symbol == "function" && Symbol.iterator, _ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function S(i) {
    for (var A = arguments.length, w = new Array(A > 1 ? A - 1 : 0), j = 1; j < A; j++)
      w[j - 1] = arguments[j];
    V("error", i, w);
  }
  function V(i, A, w) {
    var j = _.ReactDebugCurrentFrame, N = "";
    if (M) {
      var L = D(M.type), P = M._owner;
      N += function(H, tt, E) {
        var v = "";
        if (tt) {
          var u = tt.fileName, s = u.replace(U, "");
          if (/^index\./.test(s)) {
            var Y = u.match(U);
            if (Y) {
              var y = Y[1];
              y && (s = y.replace(U, "") + "/" + s);
            }
          }
          v = " (at " + s + ":" + tt.lineNumber + ")";
        } else
          E && (v = " (created by " + E + ")");
        return `
    in ` + (H || "Unknown") + v;
      }(L, M._source, P && D(P.type));
    }
    (N += j.getStackAddendum()) !== "" && (A += "%s", w = w.concat([N]));
    var W = w.map(function(H) {
      return "" + H;
    });
    W.unshift("Warning: " + A), Function.prototype.apply.call(console[i], console, W);
  }
  var U = /^(.*)[\\\/]/;
  function D(i) {
    if (i == null)
      return null;
    if (typeof i.tag == "number" && S("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof i == "function")
      return i.displayName || i.name || null;
    if (typeof i == "string")
      return i;
    switch (i) {
      case ht.Fragment:
        return "Fragment";
      case n:
        return "Portal";
      case o:
        return "Profiler";
      case r:
        return "StrictMode";
      case f:
        return "Suspense";
      case p:
        return "SuspenseList";
    }
    if (typeof i == "object")
      switch (i.$$typeof) {
        case a:
          return "Context.Consumer";
        case l:
          return "Context.Provider";
        case c:
          return j = i, N = i.render, L = "ForwardRef", P = N.displayName || N.name || "", j.displayName || (P !== "" ? L + "(" + P + ")" : L);
        case h:
          return D(i.type);
        case g:
          return D(i.render);
        case m:
          var A = (w = i)._status === 1 ? w._result : null;
          if (A)
            return D(A);
      }
    var w, j, N, L, P;
    return null;
  }
  var Z = {};
  _.ReactDebugCurrentFrame;
  var M = null;
  function K(i) {
    M = i;
  }
  var O, z, B, q = _.ReactCurrentOwner, F = Object.prototype.hasOwnProperty, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function et(i, A, w, j, N) {
    var L, P = {}, W = null, H = null;
    for (L in w !== void 0 && (W = "" + w), function(v) {
      if (F.call(v, "key")) {
        var u = Object.getOwnPropertyDescriptor(v, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }(A) && (W = "" + A.key), function(v) {
      if (F.call(v, "ref")) {
        var u = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }(A) && (H = A.ref, function(v, u) {
      if (typeof v.ref == "string" && q.current && u && q.current.stateNode !== u) {
        var s = D(q.current.type);
        B[s] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(q.current.type), v.ref), B[s] = !0);
      }
    }(A, N)), A)
      F.call(A, L) && !I.hasOwnProperty(L) && (P[L] = A[L]);
    if (i && i.defaultProps) {
      var tt = i.defaultProps;
      for (L in tt)
        P[L] === void 0 && (P[L] = tt[L]);
    }
    if (W || H) {
      var E = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
      W && function(v, u) {
        var s = function() {
          O || (O = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        s.isReactWarning = !0, Object.defineProperty(v, "key", { get: s, configurable: !0 });
      }(P, E), H && function(v, u) {
        var s = function() {
          z || (z = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        s.isReactWarning = !0, Object.defineProperty(v, "ref", { get: s, configurable: !0 });
      }(P, E);
    }
    return function(v, u, s, Y, y, C, $) {
      var J = { $$typeof: e, type: v, key: u, ref: s, props: $, _owner: C, _store: {} };
      return Object.defineProperty(J._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(J, "_self", { configurable: !1, enumerable: !1, writable: !1, value: Y }), Object.defineProperty(J, "_source", { configurable: !1, enumerable: !1, writable: !1, value: y }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    }(i, W, H, N, j, q.current, P);
  }
  B = {};
  var ot, ut = _.ReactCurrentOwner;
  function nt(i) {
    M = i;
  }
  function G(i) {
    return typeof i == "object" && i !== null && i.$$typeof === e;
  }
  function ft() {
    if (ut.current) {
      var i = D(ut.current.type);
      if (i)
        return `

Check the render method of \`` + i + "`.";
    }
    return "";
  }
  _.ReactDebugCurrentFrame, ot = !1;
  var pt = {};
  function dt(i, A) {
    if (i._store && !i._store.validated && i.key == null) {
      i._store.validated = !0;
      var w = function(N) {
        var L = ft();
        if (!L) {
          var P = typeof N == "string" ? N : N.displayName || N.name;
          P && (L = `

Check the top-level render call using <` + P + ">.");
        }
        return L;
      }(A);
      if (!pt[w]) {
        pt[w] = !0;
        var j = "";
        i && i._owner && i._owner !== ut.current && (j = " It was passed a child from " + D(i._owner.type) + "."), nt(i), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, j), nt(null);
      }
    }
  }
  function bt(i, A) {
    if (typeof i == "object") {
      if (Array.isArray(i))
        for (var w = 0; w < i.length; w++) {
          var j = i[w];
          G(j) && dt(j, A);
        }
      else if (G(i))
        i._store && (i._store.validated = !0);
      else if (i) {
        var N = function(W) {
          if (W === null || typeof W != "object")
            return null;
          var H = k && W[k] || W["@@iterator"];
          return typeof H == "function" ? H : null;
        }(i);
        if (typeof N == "function" && N !== i.entries)
          for (var L, P = N.call(i); !(L = P.next()).done; )
            G(L.value) && dt(L.value, A);
      }
    }
  }
  function xt(i) {
    var A, w = i.type;
    if (w != null && typeof w != "string") {
      if (typeof w == "function")
        A = w.propTypes;
      else {
        if (typeof w != "object" || w.$$typeof !== c && w.$$typeof !== h)
          return;
        A = w.propTypes;
      }
      if (A) {
        var j = D(w);
        (function(N, L, P, W, H) {
          var tt = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var E in N)
            if (tt(N, E)) {
              var v = void 0;
              try {
                if (typeof N[E] != "function") {
                  var u = Error((W || "React class") + ": " + P + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw u.name = "Invariant Violation", u;
                }
                v = N[E](L, E, W, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (s) {
                v = s;
              }
              !v || v instanceof Error || (K(H), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", P, E, typeof v), K(null)), v instanceof Error && !(v.message in Z) && (Z[v.message] = !0, K(H), S("Failed %s type: %s", P, v.message), K(null));
            }
        })(A, i.props, "prop", j, i);
      } else
        w.PropTypes === void 0 || ot || (ot = !0, S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D(w) || "Unknown"));
      typeof w.getDefaultProps != "function" || w.getDefaultProps.isReactClassApproved || S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function _t(i, A, w, j, N, L) {
    var P = function(s) {
      return typeof s == "string" || typeof s == "function" || s === ht.Fragment || s === o || s === b || s === r || s === f || s === p || s === x || typeof s == "object" && s !== null && (s.$$typeof === m || s.$$typeof === h || s.$$typeof === l || s.$$typeof === a || s.$$typeof === c || s.$$typeof === T || s.$$typeof === g || s[0] === R);
    }(i);
    if (!P) {
      var W = "";
      (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var H, tt = function(s) {
        return s !== void 0 ? `

Check your code at ` + s.fileName.replace(/^.*[\\\/]/, "") + ":" + s.lineNumber + "." : "";
      }(N);
      W += tt || ft(), i === null ? H = "null" : Array.isArray(i) ? H = "array" : i !== void 0 && i.$$typeof === e ? (H = "<" + (D(i.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : H = typeof i, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, W);
    }
    var E = et(i, A, w, N, L);
    if (E == null)
      return E;
    if (P) {
      var v = A.children;
      if (v !== void 0)
        if (j)
          if (Array.isArray(v)) {
            for (var u = 0; u < v.length; u++)
              bt(v[u], i);
            Object.freeze && Object.freeze(v);
          } else
            S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          bt(v, i);
    }
    return i === ht.Fragment ? function(s) {
      for (var Y = Object.keys(s.props), y = 0; y < Y.length; y++) {
        var C = Y[y];
        if (C !== "children" && C !== "key") {
          nt(s), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), nt(null);
          break;
        }
      }
      s.ref !== null && (nt(s), S("Invalid attribute `ref` supplied to `React.Fragment`."), nt(null));
    }(E) : xt(E), E;
  }
  var Ot = function(i, A, w) {
    return _t(i, A, w, !1);
  }, Tt = function(i, A, w) {
    return _t(i, A, w, !0);
  };
  ht.jsx = Ot, ht.jsxs = Tt;
}(), At.exports = oe;
var Vt, be = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
Vt = be, function() {
  var t = {}.hasOwnProperty;
  function e() {
    for (var n = [], r = 0; r < arguments.length; r++) {
      var o = arguments[r];
      if (o) {
        var l = typeof o;
        if (l === "string" || l === "number")
          n.push(o);
        else if (Array.isArray(o)) {
          if (o.length) {
            var a = e.apply(null, o);
            a && n.push(a);
          }
        } else if (l === "object") {
          if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
            n.push(o.toString());
            continue;
          }
          for (var c in o)
            t.call(o, c) && o[c] && n.push(c);
        }
      }
    }
    return n.join(" ");
  }
  Vt.exports ? (e.default = e, Vt.exports = e) : window.classNames = e;
}();
var ie = be.exports;
const le = (t, e, n) => {
  let r = null;
  return function(...o) {
    r && clearTimeout(r), r = setTimeout(() => {
      r = null, n || t.apply(this, o);
    }, e);
  };
}, Me = ({ content: t }) => At.exports.jsx("span", { dangerouslySetInnerHTML: { __html: t } }), qe = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, Ve = Oe({ getTooltipData: () => qe });
function xe(t = "DEFAULT_TOOLTIP_ID") {
  return Ee(Ve).getTooltipData(t);
}
const ae = async ({ elementReference: t = null, tooltipReference: e = null, tooltipArrowReference: n = null, place: r = "top", offset: o = 10, strategy: l = "absolute", middlewares: a = [Ie(Number(o)), Fe(), We({ padding: 5 })] }) => {
  if (!t)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (e === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const c = a;
  return n ? (c.push({ name: "arrow", options: f = { element: n, padding: 5 }, async fn(p) {
    const { element: h, padding: m = 0 } = f || {}, { x: g, y: R, placement: T, rects: b, platform: x } = p;
    if (h == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const d = se(m), k = { x: g, y: R }, _ = Ft(T), S = Xt(_), V = await x.getDimensions(h), U = _ === "y" ? "top" : "left", D = _ === "y" ? "bottom" : "right", Z = b.reference[S] + b.reference[_] - k[_] - b.floating[S], M = k[_] - b.reference[_], K = await (x.getOffsetParent == null ? void 0 : x.getOffsetParent(h));
    let O = K ? _ === "y" ? K.clientHeight || 0 : K.clientWidth || 0 : 0;
    O === 0 && (O = b.floating[S]);
    const z = Z / 2 - M / 2, B = d[U], q = O - V[S] - d[D], F = O / 2 - V[S] / 2 + z, I = zt(B, F, q), et = Dt(T) != null && F != I && b.reference[S] / 2 - (F < B ? d[U] : d[D]) - V[S] / 2 < 0;
    return { [_]: k[_] - (et ? F < B ? B - F : q - F : 0), data: { [_]: I, centerOffset: F - I } };
  } }), re(t, e, { placement: r, strategy: l, middleware: c }).then(({ x: p, y: h, placement: m, middlewareData: g }) => {
    var R, T;
    const b = { left: `${p}px`, top: `${h}px` }, { x, y: d } = (R = g.arrow) !== null && R !== void 0 ? R : { x: 0, y: 0 };
    return { tooltipStyles: b, tooltipArrowStyles: { left: x != null ? `${x}px` : "", top: d != null ? `${d}px` : "", right: "", bottom: "", [(T = { top: "bottom", right: "left", bottom: "top", left: "right" }[m.split("-")[0]]) !== null && T !== void 0 ? T : "bottom"]: "-4px" } };
  })) : re(t, e, { placement: "bottom", strategy: l, middleware: c }).then(({ x: p, y: h }) => ({ tooltipStyles: { left: `${p}px`, top: `${h}px` }, tooltipArrowStyles: {} }));
  var f;
};
var Rt = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const ce = ({ id: t, className: e, classNameArrow: n, variant: r = "dark", anchorId: o, anchorSelect: l, place: a = "top", offset: c = 10, events: f = ["hover"], positionStrategy: p = "absolute", middlewares: h, wrapper: m, children: g = null, delayShow: R = 0, delayHide: T = 0, float: b = !1, noArrow: x = !1, clickable: d = !1, closeOnEsc: k = !1, style: _, position: S, afterShow: V, afterHide: U, content: D, html: Z, isOpen: M, setIsOpen: K, activeAnchor: O, setActiveAnchor: z }) => {
  const B = mt(null), q = mt(null), F = mt(null), I = mt(null), [et, ot] = Q({}), [ut, nt] = Q({}), [G, ft] = Q(!1), [pt, dt] = Q(!1), bt = mt(!1), xt = mt(null), { anchorRefs: _t, setActiveAnchor: Ot } = xe(t), Tt = mt(!1), [i, A] = Q([]), w = mt(!1);
  je(() => (w.current = !0, () => {
    w.current = !1;
  }), []), rt(() => {
    if (!G) {
      const y = setTimeout(() => {
        dt(!1);
      }, 150);
      return () => {
        clearTimeout(y);
      };
    }
    return () => null;
  }, [G]);
  const j = (y) => {
    w.current && (y && dt(!0), setTimeout(() => {
      w.current && (K == null || K(y), M === void 0 && ft(y));
    }, 10));
  };
  rt(() => {
    if (M === void 0)
      return () => null;
    M && dt(!0);
    const y = setTimeout(() => {
      ft(M);
    }, 10);
    return () => {
      clearTimeout(y);
    };
  }, [M]), rt(() => {
    G !== bt.current && (bt.current = G, G ? V == null || V() : U == null || U());
  }, [G]);
  const N = (y = T) => {
    I.current && clearTimeout(I.current), I.current = setTimeout(() => {
      Tt.current || j(!1);
    }, y);
  }, L = (y) => {
    var C;
    if (!y)
      return;
    R ? (F.current && clearTimeout(F.current), F.current = setTimeout(() => {
      j(!0);
    }, R)) : j(!0);
    const $ = (C = y.currentTarget) !== null && C !== void 0 ? C : y.target;
    z($), Ot({ current: $ }), I.current && clearTimeout(I.current);
  }, P = () => {
    d ? N(T || 100) : T ? N() : j(!1), F.current && clearTimeout(F.current);
  }, W = ({ x: y, y: C }) => {
    ae({ place: a, offset: c, elementReference: { getBoundingClientRect: () => ({ x: y, y: C, width: 0, height: 0, top: C, left: y, right: y, bottom: C }) }, tooltipReference: B.current, tooltipArrowReference: q.current, strategy: p, middlewares: h }).then(($) => {
      Object.keys($.tooltipStyles).length && ot($.tooltipStyles), Object.keys($.tooltipArrowStyles).length && nt($.tooltipArrowStyles);
    });
  }, H = (y) => {
    if (!y)
      return;
    const C = y, $ = { x: C.clientX, y: C.clientY };
    W($), xt.current = $;
  }, tt = (y) => {
    L(y), T && N();
  }, E = (y) => {
    const C = document.querySelector(`[id='${o}']`);
    C != null && C.contains(y.target) || i.some(($) => $.contains(y.target)) || j(!1);
  }, v = (y) => {
    y.key === "Escape" && j(!1);
  }, u = le(L, 50), s = le(P, 50);
  rt(() => {
    var y, C;
    const $ = new Set(_t);
    i.forEach((lt) => {
      $.add({ current: lt });
    });
    const J = document.querySelector(`[id='${o}']`);
    J && $.add({ current: J }), k && window.addEventListener("keydown", v);
    const X = [];
    f.find((lt) => lt === "click") && (window.addEventListener("click", E), X.push({ event: "click", listener: tt })), f.find((lt) => lt === "hover") && (X.push({ event: "mouseenter", listener: u }, { event: "mouseleave", listener: s }, { event: "focus", listener: u }, { event: "blur", listener: s }), b && X.push({ event: "mousemove", listener: H }));
    const at = () => {
      Tt.current = !0;
    }, yt = () => {
      Tt.current = !1, P();
    };
    return d && ((y = B.current) === null || y === void 0 || y.addEventListener("mouseenter", at), (C = B.current) === null || C === void 0 || C.addEventListener("mouseleave", yt)), X.forEach(({ event: lt, listener: Et }) => {
      $.forEach((jt) => {
        var Nt;
        (Nt = jt.current) === null || Nt === void 0 || Nt.addEventListener(lt, Et);
      });
    }), () => {
      var lt, Et;
      f.find((jt) => jt === "click") && window.removeEventListener("click", E), k && window.removeEventListener("keydown", v), d && ((lt = B.current) === null || lt === void 0 || lt.removeEventListener("mouseenter", at), (Et = B.current) === null || Et === void 0 || Et.removeEventListener("mouseleave", yt)), X.forEach(({ event: jt, listener: Nt }) => {
        $.forEach((Se) => {
          var Mt;
          (Mt = Se.current) === null || Mt === void 0 || Mt.removeEventListener(jt, Nt);
        });
      });
    };
  }, [pt, _t, i, k, f]), rt(() => {
    let y = l ?? "";
    !y && t && (y = `[data-tooltip-id='${t}']`);
    const C = new MutationObserver(($) => {
      const J = [];
      $.forEach((X) => {
        if (X.type === "attributes" && X.attributeName === "data-tooltip-id" && X.target.getAttribute("data-tooltip-id") === t && J.push(X.target), X.type === "childList" && (O && [...X.removedNodes].some((at) => !!at.contains(O) && (dt(!1), j(!1), z(null), !0)), y))
          try {
            const at = [...X.addedNodes].filter((yt) => yt.nodeType === 1);
            J.push(...at.filter((yt) => yt.matches(y))), J.push(...at.flatMap((yt) => [...yt.querySelectorAll(y)]));
          } catch {
          }
      }), J.length && A((X) => [...X, ...J]);
    });
    return C.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      C.disconnect();
    };
  }, [t, l, O]), rt(() => {
    S ? W(S) : b ? xt.current && W(xt.current) : ae({ place: a, offset: c, elementReference: O, tooltipReference: B.current, tooltipArrowReference: q.current, strategy: p, middlewares: h }).then((y) => {
      w.current && (Object.keys(y.tooltipStyles).length && ot(y.tooltipStyles), Object.keys(y.tooltipArrowStyles).length && nt(y.tooltipArrowStyles));
    });
  }, [G, O, D, Z, a, c, p, S]), rt(() => {
    var y;
    const C = document.querySelector(`[id='${o}']`), $ = [...i, C];
    O && $.includes(O) || z((y = i[0]) !== null && y !== void 0 ? y : C);
  }, [o, i, O]), rt(() => () => {
    F.current && clearTimeout(F.current), I.current && clearTimeout(I.current);
  }, []), rt(() => {
    let y = l;
    if (!y && t && (y = `[data-tooltip-id='${t}']`), y)
      try {
        const C = Array.from(document.querySelectorAll(y));
        A(C);
      } catch {
        A([]);
      }
  }, [t, l]);
  const Y = !!(Z || D || g) && G && Object.keys(et).length > 0;
  return pt ? At.exports.jsxs(m, { id: t, role: "tooltip", className: ie("react-tooltip", Rt.tooltip, Rt[r], e, { [Rt.show]: Y, [Rt.fixed]: p === "fixed", [Rt.clickable]: d }), style: { ..._, ...et }, ref: B, children: [Z && At.exports.jsx(Me, { content: Z }) || D || g, At.exports.jsx(m, { className: ie("react-tooltip-arrow", Rt.arrow, n, { [Rt["no-arrow"]]: x }), style: ut, ref: q })] }) : null;
}, ze = ({ id: t, anchorId: e, anchorSelect: n, content: r, html: o, className: l, classNameArrow: a, variant: c = "dark", place: f = "top", offset: p = 10, wrapper: h = "div", children: m = null, events: g = ["hover"], positionStrategy: R = "absolute", middlewares: T, delayShow: b = 0, delayHide: x = 0, float: d = !1, noArrow: k = !1, clickable: _ = !1, closeOnEsc: S = !1, style: V, position: U, isOpen: D, setIsOpen: Z, afterShow: M, afterHide: K }) => {
  const [O, z] = Q(r), [B, q] = Q(o), [F, I] = Q(f), [et, ot] = Q(c), [ut, nt] = Q(p), [G, ft] = Q(b), [pt, dt] = Q(x), [bt, xt] = Q(d), [_t, Ot] = Q(h), [Tt, i] = Q(g), [A, w] = Q(R), [j, N] = Q(null), { anchorRefs: L, activeAnchor: P } = xe(t), W = (E) => E == null ? void 0 : E.getAttributeNames().reduce((v, u) => {
    var s;
    return u.startsWith("data-tooltip-") && (v[u.replace(/^data-tooltip-/, "")] = (s = E == null ? void 0 : E.getAttribute(u)) !== null && s !== void 0 ? s : null), v;
  }, {}), H = (E) => {
    const v = { place: (u) => {
      var s;
      I((s = u) !== null && s !== void 0 ? s : f);
    }, content: (u) => {
      z(u ?? r);
    }, html: (u) => {
      q(u ?? o);
    }, variant: (u) => {
      var s;
      ot((s = u) !== null && s !== void 0 ? s : c);
    }, offset: (u) => {
      nt(u === null ? p : Number(u));
    }, wrapper: (u) => {
      var s;
      Ot((s = u) !== null && s !== void 0 ? s : h);
    }, events: (u) => {
      const s = u == null ? void 0 : u.split(" ");
      i(s ?? g);
    }, "position-strategy": (u) => {
      var s;
      w((s = u) !== null && s !== void 0 ? s : R);
    }, "delay-show": (u) => {
      ft(u === null ? b : Number(u));
    }, "delay-hide": (u) => {
      dt(u === null ? x : Number(u));
    }, float: (u) => {
      xt(u === null ? d : !!u);
    } };
    Object.values(v).forEach((u) => u(null)), Object.entries(E).forEach(([u, s]) => {
      var Y;
      (Y = v[u]) === null || Y === void 0 || Y.call(v, s);
    });
  };
  rt(() => {
    z(r);
  }, [r]), rt(() => {
    q(o);
  }, [o]), rt(() => {
    I(f);
  }, [f]), rt(() => {
    var E;
    const v = new Set(L);
    let u = n;
    if (!u && t && (u = `[data-tooltip-id='${t}']`), u)
      try {
        document.querySelectorAll(u).forEach(($) => {
          v.add({ current: $ });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const s = document.querySelector(`[id='${e}']`);
    if (s && v.add({ current: s }), !v.size)
      return () => null;
    const Y = (E = j ?? s) !== null && E !== void 0 ? E : P.current, y = new MutationObserver(($) => {
      $.forEach((J) => {
        var X;
        if (!Y || J.type !== "attributes" || !(!((X = J.attributeName) === null || X === void 0) && X.startsWith("data-tooltip-")))
          return;
        const at = W(Y);
        H(at);
      });
    }), C = { attributes: !0, childList: !1, subtree: !1 };
    if (Y) {
      const $ = W(Y);
      H($), y.observe(Y, C);
    }
    return () => {
      y.disconnect();
    };
  }, [L, P, j, e, n]);
  const tt = { id: t, anchorId: e, anchorSelect: n, className: l, classNameArrow: a, content: O, html: B, place: F, variant: et, offset: ut, wrapper: _t, events: Tt, positionStrategy: A, middlewares: T, delayShow: G, delayHide: pt, float: bt, noArrow: k, clickable: _, closeOnEsc: S, style: V, position: U, isOpen: D, setIsOpen: Z, afterShow: M, afterHide: K, activeAnchor: j, setActiveAnchor: (E) => N(E) };
  return m ? At.exports.jsx(ce, { ...tt, children: m }) : At.exports.jsx(ce, { ...tt });
};
const _e = (t) => t, Te = (t) => t, Re = ({ place: t = "top", trigger: e = "hover", float: n = !1, shadow: r = !0, border: o = !1, children: l, style: a, ...c }) => {
  const f = l.find((g) => g.type === _e), p = l.find((g) => g.type === Te), h = "tooltip-" + Ne();
  return /* @__PURE__ */ Ae("span", { className: "cove-tooltip", style: a, ...c, children: [
    /* @__PURE__ */ Jt("a", { id: h, className: "cove-tooltip--target", "data-tooltip-float": n, "data-tooltip-place": t, "data-tooltip-events": ((g) => ({
      hover: null,
      focus: "focus",
      click: "click focus"
    })[g])(), children: f ? f.props.children : null }),
    /* @__PURE__ */ Jt(
      ze,
      {
        id: h,
        className: "cove-tooltip__content" + (" place-" + t) + (n ? "" : " cove-tooltip__content--animated") + (e === "click" ? " interactive" : "") + (o ? " cove-tooltip--border" : "") + (r ? " has-shadow" : ""),
        globalEventOff: "click",
        children: p ? p.props.children : null
      }
    )
  ] });
};
Re.Target = _e;
Re.Content = Te;
export {
  Re as T
};
