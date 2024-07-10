import { r as T, R as Ft } from "./storybook-index-45401197.es.js";
function Pt(t) {
  return t.split("-")[1];
}
function Yt(t) {
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
  const l = r.x + r.width / 2 - o.width / 2, a = r.y + r.height / 2 - o.height / 2, s = $t(e), f = Yt(s), p = r[f] / 2 - o[f] / 2, h = s === "x";
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
  switch (Pt(e)) {
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
  const { x: r, y: o, platform: l, rects: a, elements: s, strategy: f } = t, { boundary: p = "clippingAncestors", rootBoundary: h = "viewport", elementContext: m = "floating", altBoundary: g = !1, padding: R = 0 } = e, _ = ae(R), b = s[g ? m === "floating" ? "reference" : "floating" : m], x = jt(await l.getClippingRect({ element: (n = await (l.isElement == null ? void 0 : l.isElement(b))) == null || n ? b : b.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)), boundary: p, rootBoundary: h, strategy: f })), d = m === "floating" ? { ...a.floating, x: r, y: o } : a.reference, k = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), S = await (l.isElement == null ? void 0 : l.isElement(k)) && await (l.getScale == null ? void 0 : l.getScale(k)) || { x: 1, y: 1 }, E = jt(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: d, offsetParent: k, strategy: f }) : d);
  return { top: (x.top - E.top + _.top) / S.y, bottom: (E.bottom - x.bottom + _.bottom) / S.y, left: (x.left - E.left + _.left) / S.x, right: (E.right - x.right + _.right) / S.x };
}
const Re = Math.min, Te = Math.max;
function Vt(t, e, n) {
  return Te(t, Re(e, n));
}
["top", "right", "bottom", "left"].reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Ee = { left: "right", right: "left", bottom: "top", top: "bottom" };
function It(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ee[e]);
}
function Ae(t, e, n) {
  n === void 0 && (n = !1);
  const r = Pt(t), o = $t(t), l = Yt(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (a = It(a)), { main: a, cross: It(a) };
}
const ke = { start: "end", end: "start" };
function Mt(t) {
  return t.replace(/start|end/g, (e) => ke[e]);
}
const Oe = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: r, middlewareData: o, rects: l, initialPlacement: a, platform: s, elements: f } = e, { mainAxis: p = !0, crossAxis: h = !0, fallbackPlacements: m, fallbackStrategy: g = "bestFit", fallbackAxisSideDirection: R = "none", flipAlignment: _ = !0, ...b } = t, x = _t(r), d = _t(a) === a, k = await (s.isRTL == null ? void 0 : s.isRTL(f.floating)), S = m || (d || !_ ? [It(a)] : function(O) {
      const Y = It(O);
      return [Mt(O), Y, Mt(Y)];
    }(a));
    m || R === "none" || S.push(...function(O, Y, H, V) {
      const I = Pt(O);
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
      }(_t(O), H === "start", V);
      return I && (W = W.map((et) => et + "-" + I), Y && (W = W.concat(W.map(Mt)))), W;
    }(a, _, R, k));
    const E = [a, ...S], z = await se(e, b), M = [];
    let F = ((n = o.flip) == null ? void 0 : n.overflows) || [];
    if (p && M.push(z[x]), h) {
      const { main: O, cross: Y } = Ae(r, l, k);
      M.push(z[O], z[Y]);
    }
    if (F = [...F, { placement: r, overflows: M }], !M.every((O) => O <= 0)) {
      var G, q;
      const O = (((G = o.flip) == null ? void 0 : G.index) || 0) + 1, Y = E[O];
      if (Y)
        return { data: { index: O, overflows: F }, reset: { placement: Y } };
      let H = (q = F.find((V) => V.overflows[0] <= 0)) == null ? void 0 : q.placement;
      if (!H)
        switch (g) {
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
}, je = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: n, y: r } = e, o = await async function(l, a) {
      const { placement: s, platform: f, elements: p } = l, h = await (f.isRTL == null ? void 0 : f.isRTL(p.floating)), m = _t(s), g = Pt(s), R = $t(s) === "x", _ = ["left", "top"].includes(m) ? -1 : 1, b = h && R ? -1 : 1, x = typeof a == "function" ? a(l) : a;
      let { mainAxis: d, crossAxis: k, alignmentAxis: S } = typeof x == "number" ? { mainAxis: x, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...x };
      return g && typeof S == "number" && (k = g === "end" ? -1 * S : S), R ? { x: k * b, y: d * _ } : { x: d * _, y: k * b };
    }(e, t);
    return { x: n + o.x, y: r + o.y, data: o };
  } };
}, Ne = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: r, placement: o } = e, { mainAxis: l = !0, crossAxis: a = !1, limiter: s = { fn: (x) => {
      let { x: d, y: k } = x;
      return { x: d, y: k };
    } }, ...f } = t, p = { x: n, y: r }, h = await se(e, f), m = $t(_t(o)), g = m === "x" ? "y" : "x";
    let R = p[m], _ = p[g];
    if (l) {
      const x = m === "y" ? "bottom" : "right";
      R = Vt(R + h[m === "y" ? "top" : "left"], R, R - h[x]);
    }
    if (a) {
      const x = g === "y" ? "bottom" : "right";
      _ = Vt(_ + h[g === "y" ? "top" : "left"], _, _ - h[x]);
    }
    const b = s.fn({ ...e, [m]: R, [g]: _ });
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
const Jt = Math.min, Nt = Math.max, Wt = Math.round;
function ce(t) {
  const e = at(t);
  let n = parseFloat(e.width), r = parseFloat(e.height);
  const o = t.offsetWidth, l = t.offsetHeight, a = Wt(n) !== o || Wt(r) !== l;
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
function Bt(t) {
  const { overflow: e, overflowX: n, overflowY: r, display: o } = at(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o);
}
function Ce(t) {
  return ["table", "td", "th"].includes(gt(t));
}
function zt(t) {
  const e = /firefox/i.test(ue()), n = at(t), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some((o) => {
    const l = n.contain;
    return l != null && l.includes(o);
  });
}
function pe() {
  return !/^((?!chrome|android).)*safari/i.test(ue());
}
function Xt(t) {
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
  let a = (l ? Wt(n.width) : n.width) / r, s = (l ? Wt(n.height) : n.height) / o;
  return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), { x: a, y: s };
}
function Ct(t, e, n, r) {
  var o, l;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const a = t.getBoundingClientRect(), s = de(t);
  let f = ye;
  e && (r ? mt(r) && (f = Tt(r)) : f = Tt(t));
  const p = s ? ot(s) : window, h = !pe() && n;
  let m = (a.left + (h && ((o = p.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / f.x, g = (a.top + (h && ((l = p.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / f.y, R = a.width / f.x, _ = a.height / f.y;
  if (s) {
    const b = ot(s), x = r && mt(r) ? ot(r) : r;
    let d = b.frameElement;
    for (; d && r && x !== b; ) {
      const k = Tt(d), S = d.getBoundingClientRect(), E = getComputedStyle(d);
      S.x += (d.clientLeft + parseFloat(E.paddingLeft)) * k.x, S.y += (d.clientTop + parseFloat(E.paddingTop)) * k.y, m *= k.x, g *= k.y, R *= k.x, _ *= k.y, m += S.x, g += S.y, d = ot(d).frameElement;
    }
  }
  return { width: R, height: _, top: g, right: m + R, bottom: g + _, left: m, x: m, y: g };
}
function ht(t) {
  return ((fe(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ht(t) {
  return mt(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function me(t) {
  return Ct(ht(t)).left + Ht(t).scrollLeft;
}
function Lt(t) {
  if (gt(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || Zt(t) && t.host || ht(t);
  return Zt(e) ? e.host : e;
}
function he(t) {
  const e = Lt(t);
  return Xt(e) ? e.ownerDocument.body : st(e) && Bt(e) ? e : he(e);
}
function ge(t, e) {
  var n;
  e === void 0 && (e = []);
  const r = he(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), l = ot(r);
  return o ? e.concat(l, l.visualViewport || [], Bt(r) ? r : []) : e.concat(r, ge(r));
}
function Gt(t, e, n) {
  return e === "viewport" ? jt(function(r, o) {
    const l = ot(r), a = ht(r), s = l.visualViewport;
    let f = a.clientWidth, p = a.clientHeight, h = 0, m = 0;
    if (s) {
      f = s.width, p = s.height;
      const g = pe();
      (g || !g && o === "fixed") && (h = s.offsetLeft, m = s.offsetTop);
    }
    return { width: f, height: p, x: h, y: m };
  }(t, n)) : mt(e) ? jt(function(r, o) {
    const l = Ct(r, !0, o === "fixed"), a = l.top + r.clientTop, s = l.left + r.clientLeft, f = st(r) ? Tt(r) : { x: 1, y: 1 };
    return { width: r.clientWidth * f.x, height: r.clientHeight * f.y, x: s * f.x, y: a * f.y };
  }(e, n)) : jt(function(r) {
    const o = ht(r), l = Ht(r), a = r.ownerDocument.body, s = Nt(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), f = Nt(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
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
  for (; n && Ce(n) && at(n).position === "static"; )
    n = Qt(n);
  return n && (gt(n) === "html" || gt(n) === "body" && at(n).position === "static" && !zt(n)) ? e : n || function(r) {
    let o = Lt(r);
    for (; st(o) && !Xt(o); ) {
      if (zt(o))
        return o;
      o = Lt(o);
    }
    return null;
  }(t) || e;
}
function Le(t, e, n) {
  const r = st(e), o = ht(e), l = Ct(t, !0, n === "fixed", e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (r || !r && n !== "fixed")
    if ((gt(e) !== "body" || Bt(o)) && (a = Ht(e)), st(e)) {
      const f = Ct(e, !0);
      s.x = f.x + e.clientLeft, s.y = f.y + e.clientTop;
    } else
      o && (s.x = me(o));
  return { x: l.left + a.scrollLeft - s.x, y: l.top + a.scrollTop - s.y, width: l.width, height: l.height };
}
const Pe = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: r, strategy: o } = t;
  const l = n === "clippingAncestors" ? function(p, h) {
    const m = h.get(p);
    if (m)
      return m;
    let g = ge(p).filter((x) => mt(x) && gt(x) !== "body"), R = null;
    const _ = at(p).position === "fixed";
    let b = _ ? Lt(p) : p;
    for (; mt(b) && !Xt(b); ) {
      const x = at(b), d = zt(b);
      (_ ? d || R : d || x.position !== "static" || !R || !["absolute", "fixed"].includes(R.position)) ? R = x : g = g.filter((k) => k !== b), b = Lt(b);
    }
    return h.set(p, g), g;
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
  if ((o || !o && r !== "fixed") && ((gt(n) !== "body" || Bt(l)) && (a = Ht(n)), st(n))) {
    const p = Ct(n);
    s = Tt(n), f.x = p.x + n.clientLeft, f.y = p.y + n.clientTop;
  }
  return { width: e.width * s.x, height: e.height * s.y, x: e.x * s.x - a.scrollLeft * s.x + f.x, y: e.y * s.y - a.scrollTop * s.y + f.y };
}, isElement: mt, getDimensions: function(t) {
  return st(t) ? ce(t) : t.getBoundingClientRect();
}, getOffsetParent: te, getDocumentElement: ht, getScale: Tt, async getElementRects(t) {
  let { reference: e, floating: n, strategy: r } = t;
  const o = this.getOffsetParent || te, l = this.getDimensions;
  return { reference: Le(e, await o(n), r), floating: { x: 0, y: 0, ...await l(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => at(t).direction === "rtl" }, ee = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = { platform: Pe, ...n }, l = { ...o.platform, _c: r };
  return (async (a, s, f) => {
    const { placement: p = "bottom", strategy: h = "absolute", middleware: m = [], platform: g } = f, R = m.filter(Boolean), _ = await (g.isRTL == null ? void 0 : g.isRTL(s));
    if (g == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), R.filter((z) => {
      let { name: M } = z;
      return M === "autoPlacement" || M === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    a && s || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let b = await g.getElementRects({ reference: a, floating: s, strategy: h }), { x, y: d } = Kt(b, p, _), k = p, S = {}, E = 0;
    for (let z = 0; z < R.length; z++) {
      const { name: M, fn: F } = R[z], { x: G, y: q, data: J, reset: O } = await F({ x, y: d, initialPlacement: p, placement: k, strategy: h, middlewareData: S, rects: b, platform: g, elements: { reference: a, floating: s } });
      x = G ?? x, d = q ?? d, S = { ...S, [M]: { ...S[M], ...J } }, E > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), O && E <= 50 && (E++, typeof O == "object" && (O.placement && (k = O.placement), O.rects && (b = O.rects === !0 ? await g.getElementRects({ reference: a, floating: s, strategy: h }) : O.rects), { x, y: d } = Kt(b, k, _)), z = -1);
    }
    return { x, y: d, placement: k, strategy: h, middlewareData: S };
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
  var t = Ft, e = 60103, n = 60106;
  yt.Fragment = 60107;
  var r = 60108, o = 60114, l = 60109, a = 60110, s = 60112, f = 60113, p = 60120, h = 60115, m = 60116, g = 60121, R = 60122, _ = 60117, b = 60129, x = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var d = Symbol.for;
    e = d("react.element"), n = d("react.portal"), yt.Fragment = d("react.fragment"), r = d("react.strict_mode"), o = d("react.profiler"), l = d("react.provider"), a = d("react.context"), s = d("react.forward_ref"), f = d("react.suspense"), p = d("react.suspense_list"), h = d("react.memo"), m = d("react.lazy"), g = d("react.block"), R = d("react.server.block"), _ = d("react.fundamental"), d("react.scope"), d("react.opaque.id"), b = d("react.debug_trace_mode"), d("react.offscreen"), x = d("react.legacy_hidden");
  }
  var k = typeof Symbol == "function" && Symbol.iterator, S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function E(i) {
    for (var A = arguments.length, w = new Array(A > 1 ? A - 1 : 0), N = 1; N < A; N++)
      w[N - 1] = arguments[N];
    z("error", i, w);
  }
  function z(i, A, w) {
    var N = S.ReactDebugCurrentFrame, C = "";
    if (q) {
      var P = F(q.type), $ = q._owner;
      C += function(U, tt, j) {
        var v = "";
        if (tt) {
          var u = tt.fileName, c = u.replace(M, "");
          if (/^index\./.test(c)) {
            var X = u.match(M);
            if (X) {
              var y = X[1];
              y && (c = y.replace(M, "") + "/" + c);
            }
          }
          v = " (at " + c + ":" + tt.lineNumber + ")";
        } else
          j && (v = " (created by " + j + ")");
        return `
    in ` + (U || "Unknown") + v;
      }(P, q._source, $ && F($.type));
    }
    (C += N.getStackAddendum()) !== "" && (A += "%s", w = w.concat([C]));
    var B = w.map(function(U) {
      return "" + U;
    });
    B.unshift("Warning: " + A), Function.prototype.apply.call(console[i], console, B);
  }
  var M = /^(.*)[\\\/]/;
  function F(i) {
    if (i == null)
      return null;
    if (typeof i.tag == "number" && E("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof i == "function")
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
          return N = i, C = i.render, P = "ForwardRef", $ = C.displayName || C.name || "", N.displayName || ($ !== "" ? P + "(" + $ + ")" : P);
        case h:
          return F(i.type);
        case g:
          return F(i.render);
        case m:
          var A = (w = i)._status === 1 ? w._result : null;
          if (A)
            return F(A);
      }
    var w, N, C, P, $;
    return null;
  }
  var G = {};
  S.ReactDebugCurrentFrame;
  var q = null;
  function J(i) {
    q = i;
  }
  var O, Y, H, V = S.ReactCurrentOwner, I = Object.prototype.hasOwnProperty, W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function et(i, A, w, N, C) {
    var P, $ = {}, B = null, U = null;
    for (P in w !== void 0 && (B = "" + w), function(v) {
      if (I.call(v, "key")) {
        var u = Object.getOwnPropertyDescriptor(v, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }(A) && (B = "" + A.key), function(v) {
      if (I.call(v, "ref")) {
        var u = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }(A) && (U = A.ref, function(v, u) {
      if (typeof v.ref == "string" && V.current && u && V.current.stateNode !== u) {
        var c = F(V.current.type);
        H[c] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(V.current.type), v.ref), H[c] = !0);
      }
    }(A, C)), A)
      I.call(A, P) && !W.hasOwnProperty(P) && ($[P] = A[P]);
    if (i && i.defaultProps) {
      var tt = i.defaultProps;
      for (P in tt)
        $[P] === void 0 && ($[P] = tt[P]);
    }
    if (B || U) {
      var j = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
      B && function(v, u) {
        var c = function() {
          O || (O = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(v, "key", { get: c, configurable: !0 });
      }($, j), U && function(v, u) {
        var c = function() {
          Y || (Y = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(v, "ref", { get: c, configurable: !0 });
      }($, j);
    }
    return function(v, u, c, X, y, L, D) {
      var Z = { $$typeof: e, type: v, key: u, ref: c, props: D, _owner: L, _store: {} };
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
  function pt(i, A) {
    if (i._store && !i._store.validated && i.key == null) {
      i._store.validated = !0;
      var w = function(C) {
        var P = ut();
        if (!P) {
          var $ = typeof C == "string" ? C : C.displayName || C.name;
          $ && (P = `

Check the top-level render call using <` + $ + ">.");
        }
        return P;
      }(A);
      if (!ft[w]) {
        ft[w] = !0;
        var N = "";
        i && i._owner && i._owner !== ct.current && (N = " It was passed a child from " + F(i._owner.type) + "."), nt(i), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, N), nt(null);
      }
    }
  }
  function vt(i, A) {
    if (typeof i == "object") {
      if (Array.isArray(i))
        for (var w = 0; w < i.length; w++) {
          var N = i[w];
          Q(N) && pt(N, A);
        }
      else if (Q(i))
        i._store && (i._store.validated = !0);
      else if (i) {
        var C = function(B) {
          if (B === null || typeof B != "object")
            return null;
          var U = k && B[k] || B["@@iterator"];
          return typeof U == "function" ? U : null;
        }(i);
        if (typeof C == "function" && C !== i.entries)
          for (var P, $ = C.call(i); !(P = $.next()).done; )
            Q(P.value) && pt(P.value, A);
      }
    }
  }
  function wt(i) {
    var A, w = i.type;
    if (w != null && typeof w != "string") {
      if (typeof w == "function")
        A = w.propTypes;
      else {
        if (typeof w != "object" || w.$$typeof !== s && w.$$typeof !== h)
          return;
        A = w.propTypes;
      }
      if (A) {
        var N = F(w);
        (function(C, P, $, B, U) {
          var tt = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var j in C)
            if (tt(C, j)) {
              var v = void 0;
              try {
                if (typeof C[j] != "function") {
                  var u = Error((B || "React class") + ": " + $ + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw u.name = "Invariant Violation", u;
                }
                v = C[j](P, j, B, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (c) {
                v = c;
              }
              !v || v instanceof Error || (J(U), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", $, j, typeof v), J(null)), v instanceof Error && !(v.message in G) && (G[v.message] = !0, J(U), E("Failed %s type: %s", $, v.message), J(null));
            }
        })(A, i.props, "prop", N, i);
      } else
        w.PropTypes === void 0 || rt || (rt = !0, E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F(w) || "Unknown"));
      typeof w.getDefaultProps != "function" || w.getDefaultProps.isReactClassApproved || E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function bt(i, A, w, N, C, P) {
    var $ = function(c) {
      return typeof c == "string" || typeof c == "function" || c === yt.Fragment || c === o || c === b || c === r || c === f || c === p || c === x || typeof c == "object" && c !== null && (c.$$typeof === m || c.$$typeof === h || c.$$typeof === l || c.$$typeof === a || c.$$typeof === s || c.$$typeof === _ || c.$$typeof === g || c[0] === R);
    }(i);
    if (!$) {
      var B = "";
      (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var U, tt = function(c) {
        return c !== void 0 ? `

Check your code at ` + c.fileName.replace(/^.*[\\\/]/, "") + ":" + c.lineNumber + "." : "";
      }(C);
      B += tt || ut(), i === null ? U = "null" : Array.isArray(i) ? U = "array" : i !== void 0 && i.$$typeof === e ? (U = "<" + (F(i.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : U = typeof i, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", U, B);
    }
    var j = et(i, A, w, C, P);
    if (j == null)
      return j;
    if ($) {
      var v = A.children;
      if (v !== void 0)
        if (N)
          if (Array.isArray(v)) {
            for (var u = 0; u < v.length; u++)
              vt(v[u], i);
            Object.freeze && Object.freeze(v);
          } else
            E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          vt(v, i);
    }
    return i === yt.Fragment ? function(c) {
      for (var X = Object.keys(c.props), y = 0; y < X.length; y++) {
        var L = X[y];
        if (L !== "children" && L !== "key") {
          nt(c), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), nt(null);
          break;
        }
      }
      c.ref !== null && (nt(c), E("Invalid attribute `ref` supplied to `React.Fragment`."), nt(null));
    }(j) : wt(j), j;
  }
  var Et = function(i, A, w) {
    return bt(i, A, w, !1);
  }, xt = function(i, A, w) {
    return bt(i, A, w, !0);
  };
  yt.jsx = Et, yt.jsxs = xt;
}(), Rt.exports = ne;
var qt, ve = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
qt = ve, function() {
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
  qt.exports ? (e.default = e, qt.exports = e) : window.classNames = e;
}();
var re = ve.exports;
const oe = (t, e, n) => {
  let r = null;
  return function(...o) {
    r && clearTimeout(r), r = setTimeout(() => {
      r = null, n || t.apply(this, o);
    }, e);
  };
}, $e = ({ content: t }) => Rt.exports.jsx("span", { dangerouslySetInnerHTML: { __html: t } }), De = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, Fe = T.createContext({ getTooltipData: () => De });
function we(t = "DEFAULT_TOOLTIP_ID") {
  return T.useContext(Fe).getTooltipData(t);
}
const ie = async ({ elementReference: t = null, tooltipReference: e = null, tooltipArrowReference: n = null, place: r = "top", offset: o = 10, strategy: l = "absolute", middlewares: a = [je(Number(o)), Oe(), Ne({ padding: 5 })] }) => {
  if (!t)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (e === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const s = a;
  return n ? (s.push({ name: "arrow", options: f = { element: n, padding: 5 }, async fn(p) {
    const { element: h, padding: m = 0 } = f || {}, { x: g, y: R, placement: _, rects: b, platform: x } = p;
    if (h == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const d = ae(m), k = { x: g, y: R }, S = $t(_), E = Yt(S), z = await x.getDimensions(h), M = S === "y" ? "top" : "left", F = S === "y" ? "bottom" : "right", G = b.reference[E] + b.reference[S] - k[S] - b.floating[E], q = k[S] - b.reference[S], J = await (x.getOffsetParent == null ? void 0 : x.getOffsetParent(h));
    let O = J ? S === "y" ? J.clientHeight || 0 : J.clientWidth || 0 : 0;
    O === 0 && (O = b.floating[E]);
    const Y = G / 2 - q / 2, H = d[M], V = O - z[E] - d[F], I = O / 2 - z[E] / 2 + Y, W = Vt(H, I, V), et = Pt(_) != null && I != W && b.reference[E] / 2 - (I < H ? d[M] : d[F]) - z[E] / 2 < 0;
    return { [S]: k[S] - (et ? I < H ? H - I : V - I : 0), data: { [S]: W, centerOffset: I - W } };
  } }), ee(t, e, { placement: r, strategy: l, middleware: s }).then(({ x: p, y: h, placement: m, middlewareData: g }) => {
    var R, _;
    const b = { left: `${p}px`, top: `${h}px` }, { x, y: d } = (R = g.arrow) !== null && R !== void 0 ? R : { x: 0, y: 0 };
    return { tooltipStyles: b, tooltipArrowStyles: { left: x != null ? `${x}px` : "", top: d != null ? `${d}px` : "", right: "", bottom: "", [(_ = { top: "bottom", right: "left", bottom: "top", left: "right" }[m.split("-")[0]]) !== null && _ !== void 0 ? _ : "bottom"]: "-4px" } };
  })) : ee(t, e, { placement: "bottom", strategy: l, middleware: s }).then(({ x: p, y: h }) => ({ tooltipStyles: { left: `${p}px`, top: `${h}px` }, tooltipArrowStyles: {} }));
  var f;
};
var St = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const le = ({ id: t, className: e, classNameArrow: n, variant: r = "dark", anchorId: o, anchorSelect: l, place: a = "top", offset: s = 10, events: f = ["hover"], positionStrategy: p = "absolute", middlewares: h, wrapper: m, children: g = null, delayShow: R = 0, delayHide: _ = 0, float: b = !1, noArrow: x = !1, clickable: d = !1, closeOnEsc: k = !1, style: S, position: E, afterShow: z, afterHide: M, content: F, html: G, isOpen: q, setIsOpen: J, activeAnchor: O, setActiveAnchor: Y }) => {
  const H = T.useRef(null), V = T.useRef(null), I = T.useRef(null), W = T.useRef(null), [et, rt] = T.useState({}), [ct, nt] = T.useState({}), [Q, ut] = T.useState(!1), [ft, pt] = T.useState(!1), vt = T.useRef(!1), wt = T.useRef(null), { anchorRefs: bt, setActiveAnchor: Et } = we(t), xt = T.useRef(!1), [i, A] = T.useState([]), w = T.useRef(!1);
  T.useLayoutEffect(() => (w.current = !0, () => {
    w.current = !1;
  }), []), T.useEffect(() => {
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
    w.current && (y && pt(!0), setTimeout(() => {
      w.current && (J == null || J(y), q === void 0 && ut(y));
    }, 10));
  };
  T.useEffect(() => {
    if (q === void 0)
      return () => null;
    q && pt(!0);
    const y = setTimeout(() => {
      ut(q);
    }, 10);
    return () => {
      clearTimeout(y);
    };
  }, [q]), T.useEffect(() => {
    Q !== vt.current && (vt.current = Q, Q ? z == null || z() : M == null || M());
  }, [Q]);
  const C = (y = _) => {
    W.current && clearTimeout(W.current), W.current = setTimeout(() => {
      xt.current || N(!1);
    }, y);
  }, P = (y) => {
    var L;
    if (!y)
      return;
    R ? (I.current && clearTimeout(I.current), I.current = setTimeout(() => {
      N(!0);
    }, R)) : N(!0);
    const D = (L = y.currentTarget) !== null && L !== void 0 ? L : y.target;
    Y(D), Et({ current: D }), W.current && clearTimeout(W.current);
  }, $ = () => {
    d ? C(_ || 100) : _ ? C() : N(!1), I.current && clearTimeout(I.current);
  }, B = ({ x: y, y: L }) => {
    ie({ place: a, offset: s, elementReference: { getBoundingClientRect: () => ({ x: y, y: L, width: 0, height: 0, top: L, left: y, right: y, bottom: L }) }, tooltipReference: H.current, tooltipArrowReference: V.current, strategy: p, middlewares: h }).then((D) => {
      Object.keys(D.tooltipStyles).length && rt(D.tooltipStyles), Object.keys(D.tooltipArrowStyles).length && nt(D.tooltipArrowStyles);
    });
  }, U = (y) => {
    if (!y)
      return;
    const L = y, D = { x: L.clientX, y: L.clientY };
    B(D), wt.current = D;
  }, tt = (y) => {
    P(y), _ && C();
  }, j = (y) => {
    const L = document.querySelector(`[id='${o}']`);
    L != null && L.contains(y.target) || i.some((D) => D.contains(y.target)) || N(!1);
  }, v = (y) => {
    y.key === "Escape" && N(!1);
  }, u = oe(P, 50), c = oe($, 50);
  T.useEffect(() => {
    var y, L;
    const D = new Set(bt);
    i.forEach((it) => {
      D.add({ current: it });
    });
    const Z = document.querySelector(`[id='${o}']`);
    Z && D.add({ current: Z }), k && window.addEventListener("keydown", v);
    const K = [];
    f.find((it) => it === "click") && (window.addEventListener("click", j), K.push({ event: "click", listener: tt })), f.find((it) => it === "hover") && (K.push({ event: "mouseenter", listener: u }, { event: "mouseleave", listener: c }, { event: "focus", listener: u }, { event: "blur", listener: c }), b && K.push({ event: "mousemove", listener: U }));
    const lt = () => {
      xt.current = !0;
    }, dt = () => {
      xt.current = !1, $();
    };
    return d && ((y = H.current) === null || y === void 0 || y.addEventListener("mouseenter", lt), (L = H.current) === null || L === void 0 || L.addEventListener("mouseleave", dt)), K.forEach(({ event: it, listener: At }) => {
      D.forEach((kt) => {
        var Ot;
        (Ot = kt.current) === null || Ot === void 0 || Ot.addEventListener(it, At);
      });
    }), () => {
      var it, At;
      f.find((kt) => kt === "click") && window.removeEventListener("click", j), k && window.removeEventListener("keydown", v), d && ((it = H.current) === null || it === void 0 || it.removeEventListener("mouseenter", lt), (At = H.current) === null || At === void 0 || At.removeEventListener("mouseleave", dt)), K.forEach(({ event: kt, listener: Ot }) => {
        D.forEach((_e) => {
          var Ut;
          (Ut = _e.current) === null || Ut === void 0 || Ut.removeEventListener(kt, Ot);
        });
      });
    };
  }, [ft, bt, i, k, f]), T.useEffect(() => {
    let y = l ?? "";
    !y && t && (y = `[data-tooltip-id='${t}']`);
    const L = new MutationObserver((D) => {
      const Z = [];
      D.forEach((K) => {
        if (K.type === "attributes" && K.attributeName === "data-tooltip-id" && K.target.getAttribute("data-tooltip-id") === t && Z.push(K.target), K.type === "childList" && (O && [...K.removedNodes].some((lt) => !!lt.contains(O) && (pt(!1), N(!1), Y(null), !0)), y))
          try {
            const lt = [...K.addedNodes].filter((dt) => dt.nodeType === 1);
            Z.push(...lt.filter((dt) => dt.matches(y))), Z.push(...lt.flatMap((dt) => [...dt.querySelectorAll(y)]));
          } catch {
          }
      }), Z.length && A((K) => [...K, ...Z]);
    });
    return L.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      L.disconnect();
    };
  }, [t, l, O]), T.useEffect(() => {
    E ? B(E) : b ? wt.current && B(wt.current) : ie({ place: a, offset: s, elementReference: O, tooltipReference: H.current, tooltipArrowReference: V.current, strategy: p, middlewares: h }).then((y) => {
      w.current && (Object.keys(y.tooltipStyles).length && rt(y.tooltipStyles), Object.keys(y.tooltipArrowStyles).length && nt(y.tooltipArrowStyles));
    });
  }, [Q, O, F, G, a, s, p, E]), T.useEffect(() => {
    var y;
    const L = document.querySelector(`[id='${o}']`), D = [...i, L];
    O && D.includes(O) || Y((y = i[0]) !== null && y !== void 0 ? y : L);
  }, [o, i, O]), T.useEffect(() => () => {
    I.current && clearTimeout(I.current), W.current && clearTimeout(W.current);
  }, []), T.useEffect(() => {
    let y = l;
    if (!y && t && (y = `[data-tooltip-id='${t}']`), y)
      try {
        const L = Array.from(document.querySelectorAll(y));
        A(L);
      } catch {
        A([]);
      }
  }, [t, l]);
  const X = !!(G || F || g) && Q && Object.keys(et).length > 0;
  return ft ? Rt.exports.jsxs(m, { id: t, role: "tooltip", className: re("react-tooltip", St.tooltip, St[r], e, { [St.show]: X, [St.fixed]: p === "fixed", [St.clickable]: d }), style: { ...S, ...et }, ref: H, children: [G && Rt.exports.jsx($e, { content: G }) || F || g, Rt.exports.jsx(m, { className: re("react-tooltip-arrow", St.arrow, n, { [St["no-arrow"]]: x }), style: ct, ref: V })] }) : null;
}, Ie = ({ id: t, anchorId: e, anchorSelect: n, content: r, html: o, className: l, classNameArrow: a, variant: s = "dark", place: f = "top", offset: p = 10, wrapper: h = "div", children: m = null, events: g = ["hover"], positionStrategy: R = "absolute", middlewares: _, delayShow: b = 0, delayHide: x = 0, float: d = !1, noArrow: k = !1, clickable: S = !1, closeOnEsc: E = !1, style: z, position: M, isOpen: F, setIsOpen: G, afterShow: q, afterHide: J }) => {
  const [O, Y] = T.useState(r), [H, V] = T.useState(o), [I, W] = T.useState(f), [et, rt] = T.useState(s), [ct, nt] = T.useState(p), [Q, ut] = T.useState(b), [ft, pt] = T.useState(x), [vt, wt] = T.useState(d), [bt, Et] = T.useState(h), [xt, i] = T.useState(g), [A, w] = T.useState(R), [N, C] = T.useState(null), { anchorRefs: P, activeAnchor: $ } = we(t), B = (j) => j == null ? void 0 : j.getAttributeNames().reduce((v, u) => {
    var c;
    return u.startsWith("data-tooltip-") && (v[u.replace(/^data-tooltip-/, "")] = (c = j == null ? void 0 : j.getAttribute(u)) !== null && c !== void 0 ? c : null), v;
  }, {}), U = (j) => {
    const v = { place: (u) => {
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
      Et((c = u) !== null && c !== void 0 ? c : h);
    }, events: (u) => {
      const c = u == null ? void 0 : u.split(" ");
      i(c ?? g);
    }, "position-strategy": (u) => {
      var c;
      w((c = u) !== null && c !== void 0 ? c : R);
    }, "delay-show": (u) => {
      ut(u === null ? b : Number(u));
    }, "delay-hide": (u) => {
      pt(u === null ? x : Number(u));
    }, float: (u) => {
      wt(u === null ? d : !!u);
    } };
    Object.values(v).forEach((u) => u(null)), Object.entries(j).forEach(([u, c]) => {
      var X;
      (X = v[u]) === null || X === void 0 || X.call(v, c);
    });
  };
  T.useEffect(() => {
    Y(r);
  }, [r]), T.useEffect(() => {
    V(o);
  }, [o]), T.useEffect(() => {
    W(f);
  }, [f]), T.useEffect(() => {
    var j;
    const v = new Set(P);
    let u = n;
    if (!u && t && (u = `[data-tooltip-id='${t}']`), u)
      try {
        document.querySelectorAll(u).forEach((D) => {
          v.add({ current: D });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const c = document.querySelector(`[id='${e}']`);
    if (c && v.add({ current: c }), !v.size)
      return () => null;
    const X = (j = N ?? c) !== null && j !== void 0 ? j : $.current, y = new MutationObserver((D) => {
      D.forEach((Z) => {
        var K;
        if (!X || Z.type !== "attributes" || !(!((K = Z.attributeName) === null || K === void 0) && K.startsWith("data-tooltip-")))
          return;
        const lt = B(X);
        U(lt);
      });
    }), L = { attributes: !0, childList: !1, subtree: !1 };
    if (X) {
      const D = B(X);
      U(D), y.observe(X, L);
    }
    return () => {
      y.disconnect();
    };
  }, [P, $, N, e, n]);
  const tt = { id: t, anchorId: e, anchorSelect: n, className: l, classNameArrow: a, content: O, html: H, place: I, variant: et, offset: ct, wrapper: bt, events: xt, positionStrategy: A, middlewares: _, delayShow: Q, delayHide: ft, float: vt, noArrow: k, clickable: S, closeOnEsc: E, style: z, position: M, isOpen: F, setIsOpen: G, afterShow: q, afterHide: J, activeAnchor: N, setActiveAnchor: (j) => C(j) };
  return m ? Rt.exports.jsx(le, { ...tt, children: m }) : Rt.exports.jsx(le, { ...tt });
};
const be = (t) => t, xe = (t) => t, Se = ({ place: t = "top", trigger: e = "hover", float: n = !1, shadow: r = !0, border: o = !1, children: l, style: a, ...s }) => {
  const f = l.find((g) => g.type === be), p = l.find((g) => g.type === xe), h = "tooltip-" + T.useId(), m = (g) => ({
    hover: null,
    focus: "focus",
    click: "click focus"
  })[g];
  return /* @__PURE__ */ Ft.createElement("span", { className: "cove-tooltip", style: a, ...s }, /* @__PURE__ */ Ft.createElement("a", { id: h, role: "dialog", tabIndex: 0, className: "cove-tooltip--target", "data-tooltip-float": n, "data-tooltip-place": t, "data-tooltip-events": m() }, f ? f.props.children : null), /* @__PURE__ */ Ft.createElement(
    Ie,
    {
      id: h,
      anchorId: h,
      className: "cove-tooltip__content" + (" place-" + t) + (n ? "" : " cove-tooltip__content--animated") + (e === "click" ? " interactive" : "") + (o ? " cove-tooltip--border" : "") + (r ? " has-shadow" : ""),
      globalEventOff: "click"
    },
    p ? p.props.children : null
  ));
};
Se.Target = be;
Se.Content = xe;
export {
  Se as T
};
