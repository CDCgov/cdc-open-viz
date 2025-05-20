import { a as Re, j as Xt } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as R, R as Te } from "./storybook-index-f2fed736.es.js";
function Lt(t) {
  return t.split("-")[1];
}
function zt(t) {
  return t === "y" ? "height" : "width";
}
function _t(t) {
  return t.split("-")[0];
}
function $t(t) {
  return ["top", "bottom"].includes(_t(t)) ? "x" : "y";
}
function Kt(t, e, n) {
  let { reference: r, floating: o } = t;
  const l = r.x + r.width / 2 - o.width / 2, a = r.y + r.height / 2 - o.height / 2, s = $t(e), f = zt(s), p = r[f] / 2 - o[f] / 2, h = s === "x";
  let m;
  switch (_t(e)) {
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
  switch (Lt(e)) {
    case "start":
      m[s] -= p * (n && h ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && h ? -1 : 1);
  }
  return m;
}
function ae(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function jt(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function se(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: r, y: o, platform: l, rects: a, elements: s, strategy: f } = t, { boundary: p = "clippingAncestors", rootBoundary: h = "viewport", elementContext: m = "floating", altBoundary: w = !1, padding: T = 0 } = e, _ = ae(T), b = s[w ? m === "floating" ? "reference" : "floating" : m], x = jt(await l.getClippingRect({ element: (n = await (l.isElement == null ? void 0 : l.isElement(b))) == null || n ? b : b.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)), boundary: p, rootBoundary: h, strategy: f })), d = m === "floating" ? { ...a.floating, x: r, y: o } : a.reference, O = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), S = await (l.isElement == null ? void 0 : l.isElement(O)) && await (l.getScale == null ? void 0 : l.getScale(O)) || { x: 1, y: 1 }, A = jt(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: d, offsetParent: O, strategy: f }) : d);
  return { top: (x.top - A.top + _.top) / S.y, bottom: (A.bottom - x.bottom + _.bottom) / S.y, left: (x.left - A.left + _.left) / S.x, right: (A.right - x.right + _.right) / S.x };
}
const Ae = Math.min, Ee = Math.max;
function qt(t, e, n) {
  return Ee(t, Ae(e, n));
}
["top", "right", "bottom", "left"].reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Oe = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ft(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Oe[e]);
}
function ke(t, e, n) {
  n === void 0 && (n = !1);
  const r = Lt(t), o = $t(t), l = zt(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (a = Ft(a)), { main: a, cross: Ft(a) };
}
const je = { start: "end", end: "start" };
function Ut(t) {
  return t.replace(/start|end/g, (e) => je[e]);
}
const Ne = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: r, middlewareData: o, rects: l, initialPlacement: a, platform: s, elements: f } = e, { mainAxis: p = !0, crossAxis: h = !0, fallbackPlacements: m, fallbackStrategy: w = "bestFit", fallbackAxisSideDirection: T = "none", flipAlignment: _ = !0, ...b } = t, x = _t(r), d = _t(a) === a, O = await (s.isRTL == null ? void 0 : s.isRTL(f.floating)), S = m || (d || !_ ? [Ft(a)] : function(k) {
      const Y = Ft(k);
      return [Ut(k), Y, Ut(Y)];
    }(a));
    m || T === "none" || S.push(...function(k, Y, H, V) {
      const I = Lt(k);
      let W = function(et, rt, ct) {
        const nt = ["left", "right"], Q = ["right", "left"], ut = ["top", "bottom"], ft = ["bottom", "top"];
        switch (et) {
          case "top":
          case "bottom":
            return ct ? rt ? Q : nt : rt ? nt : Q;
          case "left":
          case "right":
            return rt ? ut : ft;
          default:
            return [];
        }
      }(_t(k), H === "start", V);
      return I && (W = W.map((et) => et + "-" + I), Y && (W = W.concat(W.map(Ut)))), W;
    }(a, _, T, O));
    const A = [a, ...S], z = await se(e, b), M = [];
    let F = ((n = o.flip) == null ? void 0 : n.overflows) || [];
    if (p && M.push(z[x]), h) {
      const { main: k, cross: Y } = ke(r, l, O);
      M.push(z[k], z[Y]);
    }
    if (F = [...F, { placement: r, overflows: M }], !M.every((k) => k <= 0)) {
      var G, q;
      const k = (((G = o.flip) == null ? void 0 : G.index) || 0) + 1, Y = A[k];
      if (Y)
        return { data: { index: k, overflows: F }, reset: { placement: Y } };
      let H = (q = F.find((V) => V.overflows[0] <= 0)) == null ? void 0 : q.placement;
      if (!H)
        switch (w) {
          case "bestFit": {
            var J;
            const V = (J = F.map((I) => [I.placement, I.overflows.filter((W) => W > 0).reduce((W, et) => W + et, 0)]).sort((I, W) => I[1] - W[1])[0]) == null ? void 0 : J[0];
            V && (H = V);
            break;
          }
          case "initialPlacement":
            H = a;
        }
      if (r !== H)
        return { reset: { placement: H } };
    }
    return {};
  } };
}, Ce = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: n, y: r } = e, o = await async function(l, a) {
      const { placement: s, platform: f, elements: p } = l, h = await (f.isRTL == null ? void 0 : f.isRTL(p.floating)), m = _t(s), w = Lt(s), T = $t(s) === "x", _ = ["left", "top"].includes(m) ? -1 : 1, b = h && T ? -1 : 1, x = typeof a == "function" ? a(l) : a;
      let { mainAxis: d, crossAxis: O, alignmentAxis: S } = typeof x == "number" ? { mainAxis: x, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...x };
      return w && typeof S == "number" && (O = w === "end" ? -1 * S : S), T ? { x: O * b, y: d * _ } : { x: d * _, y: O * b };
    }(e, t);
    return { x: n + o.x, y: r + o.y, data: o };
  } };
}, Pe = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: r, placement: o } = e, { mainAxis: l = !0, crossAxis: a = !1, limiter: s = { fn: (x) => {
      let { x: d, y: O } = x;
      return { x: d, y: O };
    } }, ...f } = t, p = { x: n, y: r }, h = await se(e, f), m = $t(_t(o)), w = m === "x" ? "y" : "x";
    let T = p[m], _ = p[w];
    if (l) {
      const x = m === "y" ? "bottom" : "right";
      T = qt(T + h[m === "y" ? "top" : "left"], T, T - h[x]);
    }
    if (a) {
      const x = w === "y" ? "bottom" : "right";
      _ = qt(_ + h[w === "y" ? "top" : "left"], _, _ - h[x]);
    }
    const b = s.fn({ ...e, [m]: T, [w]: _ });
    return { ...b, data: { x: b.x - n, y: b.y - r } };
  } };
};
function ot(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function at(t) {
  return ot(t).getComputedStyle(t);
}
const Jt = Math.min, Nt = Math.max, It = Math.round;
function ce(t) {
  const e = at(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const o = t.offsetWidth, l = t.offsetHeight, a = It(n) !== o || It(r) !== l;
  return a && (n = o, r = l), { width: n, height: r, fallback: a };
}
function gt(t) {
  return fe(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Dt;
function ue() {
  if (Dt)
    return Dt;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Dt = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Dt) : navigator.userAgent;
}
function st(t) {
  return t instanceof ot(t).HTMLElement;
}
function mt(t) {
  return t instanceof ot(t).Element;
}
function fe(t) {
  return t instanceof ot(t).Node;
}
function Zt(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ot(t).ShadowRoot || t instanceof ShadowRoot;
}
function Wt(t) {
  const { overflow: e, overflowX: n, overflowY: r, display: o } = at(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o);
}
function Le(t) {
  return ["table", "td", "th"].includes(gt(t));
}
function Vt(t) {
  const e = /firefox/i.test(ue()), n = at(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some((o) => {
    const l = n.contain;
    return l != null && l.includes(o);
  });
}
function pe() {
  return !/^((?!chrome|android).)*safari/i.test(ue());
}
function Yt(t) {
  return ["html", "body", "#document"].includes(gt(t));
}
function de(t) {
  return mt(t) ? t : t.contextElement;
}
const ye = { x: 1, y: 1 };
function Tt(t) {
  const e = de(t);
  if (!st(e))
    return ye;
  const n = e.getBoundingClientRect(), { width: r, height: o, fallback: l } = ce(e);
  let a = (l ? It(n.width) : n.width) / r, s = (l ? It(n.height) : n.height) / o;
  return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), { x: a, y: s };
}
function Ct(t, e, n, r) {
  var o, l;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const a = t.getBoundingClientRect(), s = de(t);
  let f = ye;
  e && (r ? mt(r) && (f = Tt(r)) : f = Tt(t));
  const p = s ? ot(s) : window, h = !pe() && n;
  let m = (a.left + (h && ((o = p.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / f.x, w = (a.top + (h && ((l = p.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / f.y, T = a.width / f.x, _ = a.height / f.y;
  if (s) {
    const b = ot(s), x = r && mt(r) ? ot(r) : r;
    let d = b.frameElement;
    for (; d && r && x !== b; ) {
      const O = Tt(d), S = d.getBoundingClientRect(), A = getComputedStyle(d);
      S.x += (d.clientLeft + parseFloat(A.paddingLeft)) * O.x, S.y += (d.clientTop + parseFloat(A.paddingTop)) * O.y, m *= O.x, w *= O.y, T *= O.x, _ *= O.y, m += S.x, w += S.y, d = ot(d).frameElement;
    }
  }
  return { width: T, height: _, top: w, right: m + T, bottom: w + _, left: m, x: m, y: w };
}
function ht(t) {
  return ((fe(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Bt(t) {
  return mt(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function me(t) {
  return Ct(ht(t)).left + Bt(t).scrollLeft;
}
function Pt(t) {
  if (gt(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || Zt(t) && t.host || ht(t);
  return Zt(e) ? e.host : e;
}
function he(t) {
  const e = Pt(t);
  return Yt(e) ? e.ownerDocument.body : st(e) && Wt(e) ? e : he(e);
}
function ge(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = he(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), l = ot(r);
  return o ? e.concat(l, l.visualViewport || [], Wt(r) ? r : []) : e.concat(r, ge(r));
}
function Gt(t, e, n) {
  return e === "viewport" ? jt(function(r, o) {
    const l = ot(r), a = ht(r), s = l.visualViewport;
    let f = a.clientWidth, p = a.clientHeight, h = 0, m = 0;
    if (s) {
      f = s.width, p = s.height;
      const w = pe();
      (w || !w && o === "fixed") && (h = s.offsetLeft, m = s.offsetTop);
    }
    return { width: f, height: p, x: h, y: m };
  }(t, n)) : mt(e) ? jt(function(r, o) {
    const l = Ct(r, !0, o === "fixed"), a = l.top + r.clientTop, s = l.left + r.clientLeft, f = st(r) ? Tt(r) : { x: 1, y: 1 };
    return { width: r.clientWidth * f.x, height: r.clientHeight * f.y, x: s * f.x, y: a * f.y };
  }(e, n)) : jt(function(r) {
    const o = ht(r), l = Bt(r), a = r.ownerDocument.body, s = Nt(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), f = Nt(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
    let p = -l.scrollLeft + me(r);
    const h = -l.scrollTop;
    return at(a).direction === "rtl" && (p += Nt(o.clientWidth, a.clientWidth) - s), { width: s, height: f, x: p, y: h };
  }(ht(t)));
}
function Qt(t) {
  return st(t) && at(t).position !== "fixed" ? t.offsetParent : null;
}
function te(t) {
  const e = ot(t);
  let n = Qt(t);
  for (; n && Le(n) && at(n).position === "static"; )
    n = Qt(n);
  return n && (gt(n) === "html" || gt(n) === "body" && at(n).position === "static" && !Vt(n)) ? e : n || function(r) {
    let o = Pt(r);
    for (; st(o) && !Yt(o); ) {
      if (Vt(o))
        return o;
      o = Pt(o);
    }
    return null;
  }(t) || e;
}
function $e(t, e, n) {
  const r = st(e), o = ht(e), l = Ct(t, !0, n === "fixed", e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (r || !r && n !== "fixed")
    if ((gt(e) !== "body" || Wt(o)) && (a = Bt(e)), st(e)) {
      const f = Ct(e, !0);
      s.x = f.x + e.clientLeft, s.y = f.y + e.clientTop;
    } else
      o && (s.x = me(o));
  return { x: l.left + a.scrollLeft - s.x, y: l.top + a.scrollTop - s.y, width: l.width, height: l.height };
}
const De = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: r, strategy: o } = t;
  const l = n === "clippingAncestors" ? function(p, h) {
    const m = h.get(p);
    if (m)
      return m;
    let w = ge(p).filter((x) => mt(x) && gt(x) !== "body"), T = null;
    const _ = at(p).position === "fixed";
    let b = _ ? Pt(p) : p;
    for (; mt(b) && !Yt(b); ) {
      const x = at(b), d = Vt(b);
      (_ ? d || T : d || x.position !== "static" || !T || !["absolute", "fixed"].includes(T.position)) ? T = x : w = w.filter((O) => O !== b), b = Pt(b);
    }
    return h.set(p, w), w;
  }(e, this._c) : [].concat(n), a = [...l, r], s = a[0], f = a.reduce((p, h) => {
    const m = Gt(e, h, o);
    return p.top = Nt(m.top, p.top), p.right = Jt(m.right, p.right), p.bottom = Jt(m.bottom, p.bottom), p.left = Nt(m.left, p.left), p;
  }, Gt(e, s, o));
  return { width: f.right - f.left, height: f.bottom - f.top, x: f.left, y: f.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: r } = t;
  const o = st(n), l = ht(n);
  if (n === l)
    return e;
  let a = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const f = { x: 0, y: 0 };
  if ((o || !o && r !== "fixed") && ((gt(n) !== "body" || Wt(l)) && (a = Bt(n)), st(n))) {
    const p = Ct(n);
    s = Tt(n), f.x = p.x + n.clientLeft, f.y = p.y + n.clientTop;
  }
  return { width: e.width * s.x, height: e.height * s.y, x: e.x * s.x - a.scrollLeft * s.x + f.x, y: e.y * s.y - a.scrollTop * s.y + f.y };
}, isElement: mt, getDimensions: function(t) {
  return st(t) ? ce(t) : t.getBoundingClientRect();
}, getOffsetParent: te, getDocumentElement: ht, getScale: Tt, async getElementRects(t) {
  let { reference: e, floating: n, strategy: r } = t;
  const o = this.getOffsetParent || te, l = this.getDimensions;
  return { reference: $e(e, await o(n), r), floating: { x: 0, y: 0, ...await l(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => at(t).direction === "rtl" }, ee = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = { platform: De, ...n }, l = { ...o.platform, _c: r };
  return (async (a, s, f) => {
    const { placement: p = "bottom", strategy: h = "absolute", middleware: m = [], platform: w } = f, T = m.filter(Boolean), _ = await (w.isRTL == null ? void 0 : w.isRTL(s));
    if (w == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), T.filter((z) => {
      let { name: M } = z;
      return M === "autoPlacement" || M === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    a && s || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let b = await w.getElementRects({ reference: a, floating: s, strategy: h }), { x, y: d } = Kt(b, p, _), O = p, S = {}, A = 0;
    for (let z = 0; z < T.length; z++) {
      const { name: M, fn: F } = T[z], { x: G, y: q, data: J, reset: k } = await F({ x, y: d, initialPlacement: p, placement: O, strategy: h, middlewareData: S, rects: b, platform: w, elements: { reference: a, floating: s } });
      x = G ?? x, d = q ?? d, S = { ...S, [M]: { ...S[M], ...J } }, A > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), k && A <= 50 && (A++, typeof k == "object" && (k.placement && (O = k.placement), k.rects && (b = k.rects === !0 ? await w.getElementRects({ reference: a, floating: s, strategy: h }) : k.rects), { x, y: d } = Kt(b, O, _)), z = -1);
    }
    return { x, y: d, placement: O, strategy: h, middlewareData: S };
  })(t, e, { ...o, platform: l });
};
var yt, Rt = { exports: {} }, ne = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
yt = ne, function() {
  var t = Te, e = 60103, n = 60106;
  yt.Fragment = 60107;
  var r = 60108, o = 60114, l = 60109, a = 60110, s = 60112, f = 60113, p = 60120, h = 60115, m = 60116, w = 60121, T = 60122, _ = 60117, b = 60129, x = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var d = Symbol.for;
    e = d("react.element"), n = d("react.portal"), yt.Fragment = d("react.fragment"), r = d("react.strict_mode"), o = d("react.profiler"), l = d("react.provider"), a = d("react.context"), s = d("react.forward_ref"), f = d("react.suspense"), p = d("react.suspense_list"), h = d("react.memo"), m = d("react.lazy"), w = d("react.block"), T = d("react.server.block"), _ = d("react.fundamental"), d("react.scope"), d("react.opaque.id"), b = d("react.debug_trace_mode"), d("react.offscreen"), x = d("react.legacy_hidden");
  }
  var O = typeof Symbol == "function" && Symbol.iterator, S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function A(i) {
    for (var E = arguments.length, v = new Array(E > 1 ? E - 1 : 0), N = 1; N < E; N++)
      v[N - 1] = arguments[N];
    z("error", i, v);
  }
  function z(i, E, v) {
    var N = S.ReactDebugCurrentFrame, C = "";
    if (q) {
      var L = F(q.type), $ = q._owner;
      C += function(U, tt, j) {
        var g = "";
        if (tt) {
          var u = tt.fileName, c = u.replace(M, "");
          if (/^index\./.test(c)) {
            var X = u.match(M);
            if (X) {
              var y = X[1];
              y && (c = y.replace(M, "") + "/" + c);
            }
          }
          g = " (at " + c + ":" + tt.lineNumber + ")";
        } else
          j && (g = " (created by " + j + ")");
        return `
    in ` + (U || "Unknown") + g;
      }(L, q._source, $ && F($.type));
    }
    (C += N.getStackAddendum()) !== "" && (E += "%s", v = v.concat([C]));
    var B = v.map(function(U) {
      return "" + U;
    });
    B.unshift("Warning: " + E), Function.prototype.apply.call(console[i], console, B);
  }
  var M = /^(.*)[\\\/]/;
  function F(i) {
    if (i == null)
      return null;
    if (typeof i.tag == "number" && A("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof i == "function")
      return i.displayName || i.name || null;
    if (typeof i == "string")
      return i;
    switch (i) {
      case yt.Fragment:
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
        case s:
          return N = i, C = i.render, L = "ForwardRef", $ = C.displayName || C.name || "", N.displayName || ($ !== "" ? L + "(" + $ + ")" : L);
        case h:
          return F(i.type);
        case w:
          return F(i.render);
        case m:
          var E = (v = i)._status === 1 ? v._result : null;
          if (E)
            return F(E);
      }
    var v, N, C, L, $;
    return null;
  }
  var G = {};
  S.ReactDebugCurrentFrame;
  var q = null;
  function J(i) {
    q = i;
  }
  var k, Y, H, V = S.ReactCurrentOwner, I = Object.prototype.hasOwnProperty, W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function et(i, E, v, N, C) {
    var L, $ = {}, B = null, U = null;
    for (L in v !== void 0 && (B = "" + v), function(g) {
      if (I.call(g, "key")) {
        var u = Object.getOwnPropertyDescriptor(g, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }(E) && (B = "" + E.key), function(g) {
      if (I.call(g, "ref")) {
        var u = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }(E) && (U = E.ref, function(g, u) {
      if (typeof g.ref == "string" && V.current && u && V.current.stateNode !== u) {
        var c = F(V.current.type);
        H[c] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(V.current.type), g.ref), H[c] = !0);
      }
    }(E, C)), E)
      I.call(E, L) && !W.hasOwnProperty(L) && ($[L] = E[L]);
    if (i && i.defaultProps) {
      var tt = i.defaultProps;
      for (L in tt)
        $[L] === void 0 && ($[L] = tt[L]);
    }
    if (B || U) {
      var j = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
      B && function(g, u) {
        var c = function() {
          k || (k = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(g, "key", { get: c, configurable: !0 });
      }($, j), U && function(g, u) {
        var c = function() {
          Y || (Y = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(g, "ref", { get: c, configurable: !0 });
      }($, j);
    }
    return function(g, u, c, X, y, P, D) {
      var Z = { $$typeof: e, type: g, key: u, ref: c, props: D, _owner: P, _store: {} };
      return Object.defineProperty(Z._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(Z, "_self", { configurable: !1, enumerable: !1, writable: !1, value: X }), Object.defineProperty(Z, "_source", { configurable: !1, enumerable: !1, writable: !1, value: y }), Object.freeze && (Object.freeze(Z.props), Object.freeze(Z)), Z;
    }(i, B, U, C, N, V.current, $);
  }
  H = {};
  var rt, ct = S.ReactCurrentOwner;
  function nt(i) {
    q = i;
  }
  function Q(i) {
    return typeof i == "object" && i !== null && i.$$typeof === e;
  }
  function ut() {
    if (ct.current) {
      var i = F(ct.current.type);
      if (i)
        return `

Check the render method of \`` + i + "`.";
    }
    return "";
  }
  S.ReactDebugCurrentFrame, rt = !1;
  var ft = {};
  function pt(i, E) {
    if (i._store && !i._store.validated && i.key == null) {
      i._store.validated = !0;
      var v = function(C) {
        var L = ut();
        if (!L) {
          var $ = typeof C == "string" ? C : C.displayName || C.name;
          $ && (L = `

Check the top-level render call using <` + $ + ">.");
        }
        return L;
      }(E);
      if (!ft[v]) {
        ft[v] = !0;
        var N = "";
        i && i._owner && i._owner !== ct.current && (N = " It was passed a child from " + F(i._owner.type) + "."), nt(i), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, N), nt(null);
      }
    }
  }
  function vt(i, E) {
    if (typeof i == "object") {
      if (Array.isArray(i))
        for (var v = 0; v < i.length; v++) {
          var N = i[v];
          Q(N) && pt(N, E);
        }
      else if (Q(i))
        i._store && (i._store.validated = !0);
      else if (i) {
        var C = function(B) {
          if (B === null || typeof B != "object")
            return null;
          var U = O && B[O] || B["@@iterator"];
          return typeof U == "function" ? U : null;
        }(i);
        if (typeof C == "function" && C !== i.entries)
          for (var L, $ = C.call(i); !(L = $.next()).done; )
            Q(L.value) && pt(L.value, E);
      }
    }
  }
  function wt(i) {
    var E, v = i.type;
    if (v != null && typeof v != "string") {
      if (typeof v == "function")
        E = v.propTypes;
      else {
        if (typeof v != "object" || v.$$typeof !== s && v.$$typeof !== h)
          return;
        E = v.propTypes;
      }
      if (E) {
        var N = F(v);
        (function(C, L, $, B, U) {
          var tt = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var j in C)
            if (tt(C, j)) {
              var g = void 0;
              try {
                if (typeof C[j] != "function") {
                  var u = Error((B || "React class") + ": " + $ + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw u.name = "Invariant Violation", u;
                }
                g = C[j](L, j, B, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (c) {
                g = c;
              }
              !g || g instanceof Error || (J(U), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", $, j, typeof g), J(null)), g instanceof Error && !(g.message in G) && (G[g.message] = !0, J(U), A("Failed %s type: %s", $, g.message), J(null));
            }
        })(E, i.props, "prop", N, i);
      } else
        v.PropTypes === void 0 || rt || (rt = !0, A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F(v) || "Unknown"));
      typeof v.getDefaultProps != "function" || v.getDefaultProps.isReactClassApproved || A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function bt(i, E, v, N, C, L) {
    var $ = function(c) {
      return typeof c == "string" || typeof c == "function" || c === yt.Fragment || c === o || c === b || c === r || c === f || c === p || c === x || typeof c == "object" && c !== null && (c.$$typeof === m || c.$$typeof === h || c.$$typeof === l || c.$$typeof === a || c.$$typeof === s || c.$$typeof === _ || c.$$typeof === w || c[0] === T);
    }(i);
    if (!$) {
      var B = "";
      (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var U, tt = function(c) {
        return c !== void 0 ? `

Check your code at ` + c.fileName.replace(/^.*[\\\/]/, "") + ":" + c.lineNumber + "." : "";
      }(C);
      B += tt || ut(), i === null ? U = "null" : Array.isArray(i) ? U = "array" : i !== void 0 && i.$$typeof === e ? (U = "<" + (F(i.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : U = typeof i, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", U, B);
    }
    var j = et(i, E, v, C, L);
    if (j == null)
      return j;
    if ($) {
      var g = E.children;
      if (g !== void 0)
        if (N)
          if (Array.isArray(g)) {
            for (var u = 0; u < g.length; u++)
              vt(g[u], i);
            Object.freeze && Object.freeze(g);
          } else
            A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          vt(g, i);
    }
    return i === yt.Fragment ? function(c) {
      for (var X = Object.keys(c.props), y = 0; y < X.length; y++) {
        var P = X[y];
        if (P !== "children" && P !== "key") {
          nt(c), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), nt(null);
          break;
        }
      }
      c.ref !== null && (nt(c), A("Invalid attribute `ref` supplied to `React.Fragment`."), nt(null));
    }(j) : wt(j), j;
  }
  var At = function(i, E, v) {
    return bt(i, E, v, !1);
  }, xt = function(i, E, v) {
    return bt(i, E, v, !0);
  };
  yt.jsx = At, yt.jsxs = xt;
}(), Rt.exports = ne;
var Mt, ve = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
Mt = ve, function() {
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
          for (var s in o)
            t.call(o, s) && o[s] && n.push(s);
        }
      }
    }
    return n.join(" ");
  }
  Mt.exports ? (e.default = e, Mt.exports = e) : window.classNames = e;
}();
var re = ve.exports;
const oe = (t, e, n) => {
  let r = null;
  return function(...o) {
    r && clearTimeout(r), r = setTimeout(() => {
      r = null, n || t.apply(this, o);
    }, e);
  };
}, Fe = ({ content: t }) => Rt.exports.jsx("span", { dangerouslySetInnerHTML: { __html: t } }), Ie = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, We = R.createContext({ getTooltipData: () => Ie });
function we(t = "DEFAULT_TOOLTIP_ID") {
  return R.useContext(We).getTooltipData(t);
}
const ie = async ({ elementReference: t = null, tooltipReference: e = null, tooltipArrowReference: n = null, place: r = "top", offset: o = 10, strategy: l = "absolute", middlewares: a = [Ce(Number(o)), Ne(), Pe({ padding: 5 })] }) => {
  if (!t)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (e === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const s = a;
  return n ? (s.push({ name: "arrow", options: f = { element: n, padding: 5 }, async fn(p) {
    const { element: h, padding: m = 0 } = f || {}, { x: w, y: T, placement: _, rects: b, platform: x } = p;
    if (h == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const d = ae(m), O = { x: w, y: T }, S = $t(_), A = zt(S), z = await x.getDimensions(h), M = S === "y" ? "top" : "left", F = S === "y" ? "bottom" : "right", G = b.reference[A] + b.reference[S] - O[S] - b.floating[A], q = O[S] - b.reference[S], J = await (x.getOffsetParent == null ? void 0 : x.getOffsetParent(h));
    let k = J ? S === "y" ? J.clientHeight || 0 : J.clientWidth || 0 : 0;
    k === 0 && (k = b.floating[A]);
    const Y = G / 2 - q / 2, H = d[M], V = k - z[A] - d[F], I = k / 2 - z[A] / 2 + Y, W = qt(H, I, V), et = Lt(_) != null && I != W && b.reference[A] / 2 - (I < H ? d[M] : d[F]) - z[A] / 2 < 0;
    return { [S]: O[S] - (et ? I < H ? H - I : V - I : 0), data: { [S]: W, centerOffset: I - W } };
  } }), ee(t, e, { placement: r, strategy: l, middleware: s }).then(({ x: p, y: h, placement: m, middlewareData: w }) => {
    var T, _;
    const b = { left: `${p}px`, top: `${h}px` }, { x, y: d } = (T = w.arrow) !== null && T !== void 0 ? T : { x: 0, y: 0 };
    return { tooltipStyles: b, tooltipArrowStyles: { left: x != null ? `${x}px` : "", top: d != null ? `${d}px` : "", right: "", bottom: "", [(_ = { top: "bottom", right: "left", bottom: "top", left: "right" }[m.split("-")[0]]) !== null && _ !== void 0 ? _ : "bottom"]: "-4px" } };
  })) : ee(t, e, { placement: "bottom", strategy: l, middleware: s }).then(({ x: p, y: h }) => ({ tooltipStyles: { left: `${p}px`, top: `${h}px` }, tooltipArrowStyles: {} }));
  var f;
};
var St = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const le = ({ id: t, className: e, classNameArrow: n, variant: r = "dark", anchorId: o, anchorSelect: l, place: a = "top", offset: s = 10, events: f = ["hover"], positionStrategy: p = "absolute", middlewares: h, wrapper: m, children: w = null, delayShow: T = 0, delayHide: _ = 0, float: b = !1, noArrow: x = !1, clickable: d = !1, closeOnEsc: O = !1, style: S, position: A, afterShow: z, afterHide: M, content: F, html: G, isOpen: q, setIsOpen: J, activeAnchor: k, setActiveAnchor: Y }) => {
  const H = R.useRef(null), V = R.useRef(null), I = R.useRef(null), W = R.useRef(null), [et, rt] = R.useState({}), [ct, nt] = R.useState({}), [Q, ut] = R.useState(!1), [ft, pt] = R.useState(!1), vt = R.useRef(!1), wt = R.useRef(null), { anchorRefs: bt, setActiveAnchor: At } = we(t), xt = R.useRef(!1), [i, E] = R.useState([]), v = R.useRef(!1);
  R.useLayoutEffect(() => (v.current = !0, () => {
    v.current = !1;
  }), []), R.useEffect(() => {
    if (!Q) {
      const y = setTimeout(() => {
        pt(!1);
      }, 150);
      return () => {
        clearTimeout(y);
      };
    }
    return () => null;
  }, [Q]);
  const N = (y) => {
    v.current && (y && pt(!0), setTimeout(() => {
      v.current && (J == null || J(y), q === void 0 && ut(y));
    }, 10));
  };
  R.useEffect(() => {
    if (q === void 0)
      return () => null;
    q && pt(!0);
    const y = setTimeout(() => {
      ut(q);
    }, 10);
    return () => {
      clearTimeout(y);
    };
  }, [q]), R.useEffect(() => {
    Q !== vt.current && (vt.current = Q, Q ? z == null || z() : M == null || M());
  }, [Q]);
  const C = (y = _) => {
    W.current && clearTimeout(W.current), W.current = setTimeout(() => {
      xt.current || N(!1);
    }, y);
  }, L = (y) => {
    var P;
    if (!y)
      return;
    T ? (I.current && clearTimeout(I.current), I.current = setTimeout(() => {
      N(!0);
    }, T)) : N(!0);
    const D = (P = y.currentTarget) !== null && P !== void 0 ? P : y.target;
    Y(D), At({ current: D }), W.current && clearTimeout(W.current);
  }, $ = () => {
    d ? C(_ || 100) : _ ? C() : N(!1), I.current && clearTimeout(I.current);
  }, B = ({ x: y, y: P }) => {
    ie({ place: a, offset: s, elementReference: { getBoundingClientRect: () => ({ x: y, y: P, width: 0, height: 0, top: P, left: y, right: y, bottom: P }) }, tooltipReference: H.current, tooltipArrowReference: V.current, strategy: p, middlewares: h }).then((D) => {
      Object.keys(D.tooltipStyles).length && rt(D.tooltipStyles), Object.keys(D.tooltipArrowStyles).length && nt(D.tooltipArrowStyles);
    });
  }, U = (y) => {
    if (!y)
      return;
    const P = y, D = { x: P.clientX, y: P.clientY };
    B(D), wt.current = D;
  }, tt = (y) => {
    L(y), _ && C();
  }, j = (y) => {
    const P = document.querySelector(`[id='${o}']`);
    P != null && P.contains(y.target) || i.some((D) => D.contains(y.target)) || N(!1);
  }, g = (y) => {
    y.key === "Escape" && N(!1);
  }, u = oe(L, 50), c = oe($, 50);
  R.useEffect(() => {
    var y, P;
    const D = new Set(bt);
    i.forEach((it) => {
      D.add({ current: it });
    });
    const Z = document.querySelector(`[id='${o}']`);
    Z && D.add({ current: Z }), O && window.addEventListener("keydown", g);
    const K = [];
    f.find((it) => it === "click") && (window.addEventListener("click", j), K.push({ event: "click", listener: tt })), f.find((it) => it === "hover") && (K.push({ event: "mouseenter", listener: u }, { event: "mouseleave", listener: c }, { event: "focus", listener: u }, { event: "blur", listener: c }), b && K.push({ event: "mousemove", listener: U }));
    const lt = () => {
      xt.current = !0;
    }, dt = () => {
      xt.current = !1, $();
    };
    return d && ((y = H.current) === null || y === void 0 || y.addEventListener("mouseenter", lt), (P = H.current) === null || P === void 0 || P.addEventListener("mouseleave", dt)), K.forEach(({ event: it, listener: Et }) => {
      D.forEach((Ot) => {
        var kt;
        (kt = Ot.current) === null || kt === void 0 || kt.addEventListener(it, Et);
      });
    }), () => {
      var it, Et;
      f.find((Ot) => Ot === "click") && window.removeEventListener("click", j), O && window.removeEventListener("keydown", g), d && ((it = H.current) === null || it === void 0 || it.removeEventListener("mouseenter", lt), (Et = H.current) === null || Et === void 0 || Et.removeEventListener("mouseleave", dt)), K.forEach(({ event: Ot, listener: kt }) => {
        D.forEach((_e) => {
          var Ht;
          (Ht = _e.current) === null || Ht === void 0 || Ht.removeEventListener(Ot, kt);
        });
      });
    };
  }, [ft, bt, i, O, f]), R.useEffect(() => {
    let y = l ?? "";
    !y && t && (y = `[data-tooltip-id='${t}']`);
    const P = new MutationObserver((D) => {
      const Z = [];
      D.forEach((K) => {
        if (K.type === "attributes" && K.attributeName === "data-tooltip-id" && K.target.getAttribute("data-tooltip-id") === t && Z.push(K.target), K.type === "childList" && (k && [...K.removedNodes].some((lt) => !!lt.contains(k) && (pt(!1), N(!1), Y(null), !0)), y))
          try {
            const lt = [...K.addedNodes].filter((dt) => dt.nodeType === 1);
            Z.push(...lt.filter((dt) => dt.matches(y))), Z.push(...lt.flatMap((dt) => [...dt.querySelectorAll(y)]));
          } catch {
          }
      }), Z.length && E((K) => [...K, ...Z]);
    });
    return P.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      P.disconnect();
    };
  }, [t, l, k]), R.useEffect(() => {
    A ? B(A) : b ? wt.current && B(wt.current) : ie({ place: a, offset: s, elementReference: k, tooltipReference: H.current, tooltipArrowReference: V.current, strategy: p, middlewares: h }).then((y) => {
      v.current && (Object.keys(y.tooltipStyles).length && rt(y.tooltipStyles), Object.keys(y.tooltipArrowStyles).length && nt(y.tooltipArrowStyles));
    });
  }, [Q, k, F, G, a, s, p, A]), R.useEffect(() => {
    var y;
    const P = document.querySelector(`[id='${o}']`), D = [...i, P];
    k && D.includes(k) || Y((y = i[0]) !== null && y !== void 0 ? y : P);
  }, [o, i, k]), R.useEffect(() => () => {
    I.current && clearTimeout(I.current), W.current && clearTimeout(W.current);
  }, []), R.useEffect(() => {
    let y = l;
    if (!y && t && (y = `[data-tooltip-id='${t}']`), y)
      try {
        const P = Array.from(document.querySelectorAll(y));
        E(P);
      } catch {
        E([]);
      }
  }, [t, l]);
  const X = !!(G || F || w) && Q && Object.keys(et).length > 0;
  return ft ? Rt.exports.jsxs(m, { id: t, role: "tooltip", className: re("react-tooltip", St.tooltip, St[r], e, { [St.show]: X, [St.fixed]: p === "fixed", [St.clickable]: d }), style: { ...S, ...et }, ref: H, children: [G && Rt.exports.jsx(Fe, { content: G }) || F || w, Rt.exports.jsx(m, { className: re("react-tooltip-arrow", St.arrow, n, { [St["no-arrow"]]: x }), style: ct, ref: V })] }) : null;
}, Be = ({ id: t, anchorId: e, anchorSelect: n, content: r, html: o, className: l, classNameArrow: a, variant: s = "dark", place: f = "top", offset: p = 10, wrapper: h = "div", children: m = null, events: w = ["hover"], positionStrategy: T = "absolute", middlewares: _, delayShow: b = 0, delayHide: x = 0, float: d = !1, noArrow: O = !1, clickable: S = !1, closeOnEsc: A = !1, style: z, position: M, isOpen: F, setIsOpen: G, afterShow: q, afterHide: J }) => {
  const [k, Y] = R.useState(r), [H, V] = R.useState(o), [I, W] = R.useState(f), [et, rt] = R.useState(s), [ct, nt] = R.useState(p), [Q, ut] = R.useState(b), [ft, pt] = R.useState(x), [vt, wt] = R.useState(d), [bt, At] = R.useState(h), [xt, i] = R.useState(w), [E, v] = R.useState(T), [N, C] = R.useState(null), { anchorRefs: L, activeAnchor: $ } = we(t), B = (j) => j == null ? void 0 : j.getAttributeNames().reduce((g, u) => {
    var c;
    return u.startsWith("data-tooltip-") && (g[u.replace(/^data-tooltip-/, "")] = (c = j == null ? void 0 : j.getAttribute(u)) !== null && c !== void 0 ? c : null), g;
  }, {}), U = (j) => {
    const g = { place: (u) => {
      var c;
      W((c = u) !== null && c !== void 0 ? c : f);
    }, content: (u) => {
      Y(u ?? r);
    }, html: (u) => {
      V(u ?? o);
    }, variant: (u) => {
      var c;
      rt((c = u) !== null && c !== void 0 ? c : s);
    }, offset: (u) => {
      nt(u === null ? p : Number(u));
    }, wrapper: (u) => {
      var c;
      At((c = u) !== null && c !== void 0 ? c : h);
    }, events: (u) => {
      const c = u == null ? void 0 : u.split(" ");
      i(c ?? w);
    }, "position-strategy": (u) => {
      var c;
      v((c = u) !== null && c !== void 0 ? c : T);
    }, "delay-show": (u) => {
      ut(u === null ? b : Number(u));
    }, "delay-hide": (u) => {
      pt(u === null ? x : Number(u));
    }, float: (u) => {
      wt(u === null ? d : !!u);
    } };
    Object.values(g).forEach((u) => u(null)), Object.entries(j).forEach(([u, c]) => {
      var X;
      (X = g[u]) === null || X === void 0 || X.call(g, c);
    });
  };
  R.useEffect(() => {
    Y(r);
  }, [r]), R.useEffect(() => {
    V(o);
  }, [o]), R.useEffect(() => {
    W(f);
  }, [f]), R.useEffect(() => {
    var j;
    const g = new Set(L);
    let u = n;
    if (!u && t && (u = `[data-tooltip-id='${t}']`), u)
      try {
        document.querySelectorAll(u).forEach((D) => {
          g.add({ current: D });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const c = document.querySelector(`[id='${e}']`);
    if (c && g.add({ current: c }), !g.size)
      return () => null;
    const X = (j = N ?? c) !== null && j !== void 0 ? j : $.current, y = new MutationObserver((D) => {
      D.forEach((Z) => {
        var K;
        if (!X || Z.type !== "attributes" || !(!((K = Z.attributeName) === null || K === void 0) && K.startsWith("data-tooltip-")))
          return;
        const lt = B(X);
        U(lt);
      });
    }), P = { attributes: !0, childList: !1, subtree: !1 };
    if (X) {
      const D = B(X);
      U(D), y.observe(X, P);
    }
    return () => {
      y.disconnect();
    };
  }, [L, $, N, e, n]);
  const tt = { id: t, anchorId: e, anchorSelect: n, className: l, classNameArrow: a, content: k, html: H, place: I, variant: et, offset: ct, wrapper: bt, events: xt, positionStrategy: E, middlewares: _, delayShow: Q, delayHide: ft, float: vt, noArrow: O, clickable: S, closeOnEsc: A, style: z, position: M, isOpen: F, setIsOpen: G, afterShow: q, afterHide: J, activeAnchor: N, setActiveAnchor: (j) => C(j) };
  return m ? Rt.exports.jsx(le, { ...tt, children: m }) : Rt.exports.jsx(le, { ...tt });
};
const be = (t) => t, xe = (t) => t, Se = ({
  place: t = "top",
  trigger: e = "hover",
  float: n = !1,
  shadow: r = !0,
  border: o = !1,
  children: l,
  style: a,
  ...s
}) => {
  const f = l.find((m) => m.type === be), p = l.find((m) => m.type === xe), h = "tooltip-" + R.useId();
  return /* @__PURE__ */ Re("span", { className: "cove-tooltip", style: a, ...s, children: [
    /* @__PURE__ */ Xt(
      "a",
      {
        id: h,
        role: "dialog",
        tabIndex: 0,
        className: "cove-tooltip--target",
        "data-tooltip-float": n,
        "data-tooltip-place": t,
        "data-tooltip-isOpen": !0,
        children: f ? f.props.children : null
      }
    ),
    /* @__PURE__ */ Xt(
      Be,
      {
        id: h,
        anchorId: h,
        className: "cove-tooltip__content" + (" place-" + t) + (n ? "" : " cove-tooltip__content--animated") + (e === "click" ? " interactive" : "") + (o ? " cove-tooltip--border" : "") + (r ? " has-shadow" : ""),
        children: p ? p.props.children : null
      }
    )
  ] });
};
Se.Target = be;
Se.Content = xe;
export {
  Se as T,
  Be as k
};
