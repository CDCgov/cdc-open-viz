import { r as T, R as Se } from "./storybook-index-9_ikpx_Z.es.js";
function Ct(t) {
  return t.split("-")[1];
}
function zt(t) {
  return t === "y" ? "height" : "width";
}
function St(t) {
  return t.split("-")[0];
}
function $t(t) {
  return ["top", "bottom"].includes(St(t)) ? "x" : "y";
}
function Xt(t, e, r) {
  let { reference: n, floating: o } = t;
  const l = n.x + n.width / 2 - o.width / 2, a = n.y + n.height / 2 - o.height / 2, s = $t(e), f = zt(s), p = n[f] / 2 - o[f] / 2, h = s === "x";
  let m;
  switch (St(e)) {
    case "top":
      m = { x: l, y: n.y - o.height };
      break;
    case "bottom":
      m = { x: l, y: n.y + n.height };
      break;
    case "right":
      m = { x: n.x + n.width, y: a };
      break;
    case "left":
      m = { x: n.x - o.width, y: a };
      break;
    default:
      m = { x: n.x, y: n.y };
  }
  switch (Ct(e)) {
    case "start":
      m[s] -= p * (r && h ? -1 : 1);
      break;
    case "end":
      m[s] += p * (r && h ? -1 : 1);
  }
  return m;
}
function le(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function jt(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function ae(t, e) {
  var r;
  e === void 0 && (e = {});
  const { x: n, y: o, platform: l, rects: a, elements: s, strategy: f } = t, { boundary: p = "clippingAncestors", rootBoundary: h = "viewport", elementContext: m = "floating", altBoundary: g = !1, padding: _ = 0 } = e, S = le(_), b = s[g ? m === "floating" ? "reference" : "floating" : m], x = jt(await l.getClippingRect({ element: (r = await (l.isElement == null ? void 0 : l.isElement(b))) == null || r ? b : b.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)), boundary: p, rootBoundary: h, strategy: f })), d = m === "floating" ? { ...a.floating, x: n, y: o } : a.reference, O = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), R = await (l.isElement == null ? void 0 : l.isElement(O)) && await (l.getScale == null ? void 0 : l.getScale(O)) || { x: 1, y: 1 }, E = jt(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: d, offsetParent: O, strategy: f }) : d);
  return { top: (x.top - E.top + S.top) / R.y, bottom: (E.bottom - x.bottom + S.bottom) / R.y, left: (x.left - E.left + S.left) / R.x, right: (E.right - x.right + S.right) / R.x };
}
const _e = Math.min, Te = Math.max;
function qt(t, e, r) {
  return Te(t, _e(e, r));
}
["top", "right", "bottom", "left"].reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Ee = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ft(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ee[e]);
}
function Ae(t, e, r) {
  r === void 0 && (r = !1);
  const n = Ct(t), o = $t(t), l = zt(o);
  let a = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (a = Ft(a)), { main: a, cross: Ft(a) };
}
const Oe = { start: "end", end: "start" };
function Ut(t) {
  return t.replace(/start|end/g, (e) => Oe[e]);
}
const ke = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var r;
    const { placement: n, middlewareData: o, rects: l, initialPlacement: a, platform: s, elements: f } = e, { mainAxis: p = !0, crossAxis: h = !0, fallbackPlacements: m, fallbackStrategy: g = "bestFit", fallbackAxisSideDirection: _ = "none", flipAlignment: S = !0, ...b } = t, x = St(n), d = St(a) === a, O = await (s.isRTL == null ? void 0 : s.isRTL(f.floating)), R = m || (d || !S ? [Ft(a)] : function(k) {
      const Y = Ft(k);
      return [Ut(k), Y, Ut(Y)];
    }(a));
    m || _ === "none" || R.push(...function(k, Y, H, V) {
      const I = Ct(k);
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
      }(St(k), H === "start", V);
      return I && (W = W.map((et) => et + "-" + I), Y && (W = W.concat(W.map(Ut)))), W;
    }(a, S, _, O));
    const E = [a, ...R], z = await ae(e, b), M = [];
    let F = ((r = o.flip) == null ? void 0 : r.overflows) || [];
    if (p && M.push(z[x]), h) {
      const { main: k, cross: Y } = Ae(n, l, O);
      M.push(z[k], z[Y]);
    }
    if (F = [...F, { placement: n, overflows: M }], !M.every((k) => k <= 0)) {
      var G, q;
      const k = (((G = o.flip) == null ? void 0 : G.index) || 0) + 1, Y = E[k];
      if (Y) return { data: { index: k, overflows: F }, reset: { placement: Y } };
      let H = (q = F.find((V) => V.overflows[0] <= 0)) == null ? void 0 : q.placement;
      if (!H) switch (g) {
        case "bestFit": {
          var J;
          const V = (J = F.map((I) => [I.placement, I.overflows.filter((W) => W > 0).reduce((W, et) => W + et, 0)]).sort((I, W) => I[1] - W[1])[0]) == null ? void 0 : J[0];
          V && (H = V);
          break;
        }
        case "initialPlacement":
          H = a;
      }
      if (n !== H) return { reset: { placement: H } };
    }
    return {};
  } };
}, je = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: r, y: n } = e, o = await async function(l, a) {
      const { placement: s, platform: f, elements: p } = l, h = await (f.isRTL == null ? void 0 : f.isRTL(p.floating)), m = St(s), g = Ct(s), _ = $t(s) === "x", S = ["left", "top"].includes(m) ? -1 : 1, b = h && _ ? -1 : 1, x = typeof a == "function" ? a(l) : a;
      let { mainAxis: d, crossAxis: O, alignmentAxis: R } = typeof x == "number" ? { mainAxis: x, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...x };
      return g && typeof R == "number" && (O = g === "end" ? -1 * R : R), _ ? { x: O * b, y: d * S } : { x: d * S, y: O * b };
    }(e, t);
    return { x: r + o.x, y: n + o.y, data: o };
  } };
}, Ne = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: r, y: n, placement: o } = e, { mainAxis: l = !0, crossAxis: a = !1, limiter: s = { fn: (x) => {
      let { x: d, y: O } = x;
      return { x: d, y: O };
    } }, ...f } = t, p = { x: r, y: n }, h = await ae(e, f), m = $t(St(o)), g = m === "x" ? "y" : "x";
    let _ = p[m], S = p[g];
    if (l) {
      const x = m === "y" ? "bottom" : "right";
      _ = qt(_ + h[m === "y" ? "top" : "left"], _, _ - h[x]);
    }
    if (a) {
      const x = g === "y" ? "bottom" : "right";
      S = qt(S + h[g === "y" ? "top" : "left"], S, S - h[x]);
    }
    const b = s.fn({ ...e, [m]: _, [g]: S });
    return { ...b, data: { x: b.x - r, y: b.y - n } };
  } };
};
function ot(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function at(t) {
  return ot(t).getComputedStyle(t);
}
const Kt = Math.min, Nt = Math.max, It = Math.round;
function se(t) {
  const e = at(t);
  let r = parseFloat(e.width), n = parseFloat(e.height);
  const o = t.offsetWidth, l = t.offsetHeight, a = It(r) !== o || It(n) !== l;
  return a && (r = o, n = l), { width: r, height: n, fallback: a };
}
function gt(t) {
  return ue(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Dt;
function ce() {
  if (Dt) return Dt;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Dt = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Dt) : navigator.userAgent;
}
function st(t) {
  return t instanceof ot(t).HTMLElement;
}
function mt(t) {
  return t instanceof ot(t).Element;
}
function ue(t) {
  return t instanceof ot(t).Node;
}
function Jt(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ot(t).ShadowRoot || t instanceof ShadowRoot;
}
function Wt(t) {
  const { overflow: e, overflowX: r, overflowY: n, display: o } = at(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + r) && !["inline", "contents"].includes(o);
}
function Le(t) {
  return ["table", "td", "th"].includes(gt(t));
}
function Vt(t) {
  const e = /firefox/i.test(ce()), r = at(t), n = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!n && n !== "none" || e && r.willChange === "filter" || e && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((o) => r.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some((o) => {
    const l = r.contain;
    return l != null && l.includes(o);
  });
}
function fe() {
  return !/^((?!chrome|android).)*safari/i.test(ce());
}
function Yt(t) {
  return ["html", "body", "#document"].includes(gt(t));
}
function pe(t) {
  return mt(t) ? t : t.contextElement;
}
const de = { x: 1, y: 1 };
function Tt(t) {
  const e = pe(t);
  if (!st(e)) return de;
  const r = e.getBoundingClientRect(), { width: n, height: o, fallback: l } = se(e);
  let a = (l ? It(r.width) : r.width) / n, s = (l ? It(r.height) : r.height) / o;
  return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), { x: a, y: s };
}
function Lt(t, e, r, n) {
  var o, l;
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  const a = t.getBoundingClientRect(), s = pe(t);
  let f = de;
  e && (n ? mt(n) && (f = Tt(n)) : f = Tt(t));
  const p = s ? ot(s) : window, h = !fe() && r;
  let m = (a.left + (h && ((o = p.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / f.x, g = (a.top + (h && ((l = p.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / f.y, _ = a.width / f.x, S = a.height / f.y;
  if (s) {
    const b = ot(s), x = n && mt(n) ? ot(n) : n;
    let d = b.frameElement;
    for (; d && n && x !== b; ) {
      const O = Tt(d), R = d.getBoundingClientRect(), E = getComputedStyle(d);
      R.x += (d.clientLeft + parseFloat(E.paddingLeft)) * O.x, R.y += (d.clientTop + parseFloat(E.paddingTop)) * O.y, m *= O.x, g *= O.y, _ *= O.x, S *= O.y, m += R.x, g += R.y, d = ot(d).frameElement;
    }
  }
  return { width: _, height: S, top: g, right: m + _, bottom: g + S, left: m, x: m, y: g };
}
function ht(t) {
  return ((ue(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Bt(t) {
  return mt(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function ye(t) {
  return Lt(ht(t)).left + Bt(t).scrollLeft;
}
function Pt(t) {
  if (gt(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || Jt(t) && t.host || ht(t);
  return Jt(e) ? e.host : e;
}
function me(t) {
  const e = Pt(t);
  return Yt(e) ? e.ownerDocument.body : st(e) && Wt(e) ? e : me(e);
}
function he(t, e) {
  var r;
  e === void 0 && (e = []);
  const n = me(t), o = n === ((r = t.ownerDocument) == null ? void 0 : r.body), l = ot(n);
  return o ? e.concat(l, l.visualViewport || [], Wt(n) ? n : []) : e.concat(n, he(n));
}
function Zt(t, e, r) {
  return e === "viewport" ? jt(function(n, o) {
    const l = ot(n), a = ht(n), s = l.visualViewport;
    let f = a.clientWidth, p = a.clientHeight, h = 0, m = 0;
    if (s) {
      f = s.width, p = s.height;
      const g = fe();
      (g || !g && o === "fixed") && (h = s.offsetLeft, m = s.offsetTop);
    }
    return { width: f, height: p, x: h, y: m };
  }(t, r)) : mt(e) ? jt(function(n, o) {
    const l = Lt(n, !0, o === "fixed"), a = l.top + n.clientTop, s = l.left + n.clientLeft, f = st(n) ? Tt(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * f.x, height: n.clientHeight * f.y, x: s * f.x, y: a * f.y };
  }(e, r)) : jt(function(n) {
    const o = ht(n), l = Bt(n), a = n.ownerDocument.body, s = Nt(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), f = Nt(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
    let p = -l.scrollLeft + ye(n);
    const h = -l.scrollTop;
    return at(a).direction === "rtl" && (p += Nt(o.clientWidth, a.clientWidth) - s), { width: s, height: f, x: p, y: h };
  }(ht(t)));
}
function Gt(t) {
  return st(t) && at(t).position !== "fixed" ? t.offsetParent : null;
}
function Qt(t) {
  const e = ot(t);
  let r = Gt(t);
  for (; r && Le(r) && at(r).position === "static"; ) r = Gt(r);
  return r && (gt(r) === "html" || gt(r) === "body" && at(r).position === "static" && !Vt(r)) ? e : r || function(n) {
    let o = Pt(n);
    for (; st(o) && !Yt(o); ) {
      if (Vt(o)) return o;
      o = Pt(o);
    }
    return null;
  }(t) || e;
}
function Pe(t, e, r) {
  const n = st(e), o = ht(e), l = Lt(t, !0, r === "fixed", e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (n || !n && r !== "fixed") if ((gt(e) !== "body" || Wt(o)) && (a = Bt(e)), st(e)) {
    const f = Lt(e, !0);
    s.x = f.x + e.clientLeft, s.y = f.y + e.clientTop;
  } else o && (s.x = ye(o));
  return { x: l.left + a.scrollLeft - s.x, y: l.top + a.scrollTop - s.y, width: l.width, height: l.height };
}
const Ce = { getClippingRect: function(t) {
  let { element: e, boundary: r, rootBoundary: n, strategy: o } = t;
  const l = r === "clippingAncestors" ? function(p, h) {
    const m = h.get(p);
    if (m) return m;
    let g = he(p).filter((x) => mt(x) && gt(x) !== "body"), _ = null;
    const S = at(p).position === "fixed";
    let b = S ? Pt(p) : p;
    for (; mt(b) && !Yt(b); ) {
      const x = at(b), d = Vt(b);
      (S ? d || _ : d || x.position !== "static" || !_ || !["absolute", "fixed"].includes(_.position)) ? _ = x : g = g.filter((O) => O !== b), b = Pt(b);
    }
    return h.set(p, g), g;
  }(e, this._c) : [].concat(r), a = [...l, n], s = a[0], f = a.reduce((p, h) => {
    const m = Zt(e, h, o);
    return p.top = Nt(m.top, p.top), p.right = Kt(m.right, p.right), p.bottom = Kt(m.bottom, p.bottom), p.left = Nt(m.left, p.left), p;
  }, Zt(e, s, o));
  return { width: f.right - f.left, height: f.bottom - f.top, x: f.left, y: f.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: r, strategy: n } = t;
  const o = st(r), l = ht(r);
  if (r === l) return e;
  let a = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const f = { x: 0, y: 0 };
  if ((o || !o && n !== "fixed") && ((gt(r) !== "body" || Wt(l)) && (a = Bt(r)), st(r))) {
    const p = Lt(r);
    s = Tt(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop;
  }
  return { width: e.width * s.x, height: e.height * s.y, x: e.x * s.x - a.scrollLeft * s.x + f.x, y: e.y * s.y - a.scrollTop * s.y + f.y };
}, isElement: mt, getDimensions: function(t) {
  return st(t) ? se(t) : t.getBoundingClientRect();
}, getOffsetParent: Qt, getDocumentElement: ht, getScale: Tt, async getElementRects(t) {
  let { reference: e, floating: r, strategy: n } = t;
  const o = this.getOffsetParent || Qt, l = this.getDimensions;
  return { reference: Pe(e, await o(r), n), floating: { x: 0, y: 0, ...await l(r) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => at(t).direction === "rtl" }, te = (t, e, r) => {
  const n = /* @__PURE__ */ new Map(), o = { platform: Ce, ...r }, l = { ...o.platform, _c: n };
  return (async (a, s, f) => {
    const { placement: p = "bottom", strategy: h = "absolute", middleware: m = [], platform: g } = f, _ = m.filter(Boolean), S = await (g.isRTL == null ? void 0 : g.isRTL(s));
    if (g == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), _.filter((z) => {
      let { name: M } = z;
      return M === "autoPlacement" || M === "flip";
    }).length > 1) throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    a && s || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let b = await g.getElementRects({ reference: a, floating: s, strategy: h }), { x, y: d } = Xt(b, p, S), O = p, R = {}, E = 0;
    for (let z = 0; z < _.length; z++) {
      const { name: M, fn: F } = _[z], { x: G, y: q, data: J, reset: k } = await F({ x, y: d, initialPlacement: p, placement: O, strategy: h, middlewareData: R, rects: b, platform: g, elements: { reference: a, floating: s } });
      x = G ?? x, d = q ?? d, R = { ...R, [M]: { ...R[M], ...J } }, E > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), k && E <= 50 && (E++, typeof k == "object" && (k.placement && (O = k.placement), k.rects && (b = k.rects === !0 ? await g.getElementRects({ reference: a, floating: s, strategy: h }) : k.rects), { x, y: d } = Xt(b, O, S)), z = -1);
    }
    return { x, y: d, placement: O, strategy: h, middlewareData: R };
  })(t, e, { ...o, platform: l });
};
var yt, _t = { exports: {} }, ee = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
yt = ee, function() {
  var t = Se, e = 60103, r = 60106;
  yt.Fragment = 60107;
  var n = 60108, o = 60114, l = 60109, a = 60110, s = 60112, f = 60113, p = 60120, h = 60115, m = 60116, g = 60121, _ = 60122, S = 60117, b = 60129, x = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var d = Symbol.for;
    e = d("react.element"), r = d("react.portal"), yt.Fragment = d("react.fragment"), n = d("react.strict_mode"), o = d("react.profiler"), l = d("react.provider"), a = d("react.context"), s = d("react.forward_ref"), f = d("react.suspense"), p = d("react.suspense_list"), h = d("react.memo"), m = d("react.lazy"), g = d("react.block"), _ = d("react.server.block"), S = d("react.fundamental"), d("react.scope"), d("react.opaque.id"), b = d("react.debug_trace_mode"), d("react.offscreen"), x = d("react.legacy_hidden");
  }
  var O = typeof Symbol == "function" && Symbol.iterator, R = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function E(i) {
    for (var A = arguments.length, w = new Array(A > 1 ? A - 1 : 0), N = 1; N < A; N++) w[N - 1] = arguments[N];
    z("error", i, w);
  }
  function z(i, A, w) {
    var N = R.ReactDebugCurrentFrame, P = "";
    if (q) {
      var C = F(q.type), $ = q._owner;
      P += function(U, tt, j) {
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
        } else j && (v = " (created by " + j + ")");
        return `
    in ` + (U || "Unknown") + v;
      }(C, q._source, $ && F($.type));
    }
    (P += N.getStackAddendum()) !== "" && (A += "%s", w = w.concat([P]));
    var B = w.map(function(U) {
      return "" + U;
    });
    B.unshift("Warning: " + A), Function.prototype.apply.call(console[i], console, B);
  }
  var M = /^(.*)[\\\/]/;
  function F(i) {
    if (i == null) return null;
    if (typeof i.tag == "number" && E("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case yt.Fragment:
        return "Fragment";
      case r:
        return "Portal";
      case o:
        return "Profiler";
      case n:
        return "StrictMode";
      case f:
        return "Suspense";
      case p:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case a:
        return "Context.Consumer";
      case l:
        return "Context.Provider";
      case s:
        return N = i, P = i.render, C = "ForwardRef", $ = P.displayName || P.name || "", N.displayName || ($ !== "" ? C + "(" + $ + ")" : C);
      case h:
        return F(i.type);
      case g:
        return F(i.render);
      case m:
        var A = (w = i)._status === 1 ? w._result : null;
        if (A) return F(A);
    }
    var w, N, P, C, $;
    return null;
  }
  var G = {};
  R.ReactDebugCurrentFrame;
  var q = null;
  function J(i) {
    q = i;
  }
  var k, Y, H, V = R.ReactCurrentOwner, I = Object.prototype.hasOwnProperty, W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function et(i, A, w, N, P) {
    var C, $ = {}, B = null, U = null;
    for (C in w !== void 0 && (B = "" + w), function(v) {
      if (I.call(v, "key")) {
        var u = Object.getOwnPropertyDescriptor(v, "key").get;
        if (u && u.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }(A) && (B = "" + A.key), function(v) {
      if (I.call(v, "ref")) {
        var u = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (u && u.isReactWarning) return !1;
      }
      return v.ref !== void 0;
    }(A) && (U = A.ref, function(v, u) {
      if (typeof v.ref == "string" && V.current && u && V.current.stateNode !== u) {
        var c = F(V.current.type);
        H[c] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(V.current.type), v.ref), H[c] = !0);
      }
    }(A, P)), A) I.call(A, C) && !W.hasOwnProperty(C) && ($[C] = A[C]);
    if (i && i.defaultProps) {
      var tt = i.defaultProps;
      for (C in tt) $[C] === void 0 && ($[C] = tt[C]);
    }
    if (B || U) {
      var j = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
      B && function(v, u) {
        var c = function() {
          k || (k = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
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
    }(i, B, U, P, N, V.current, $);
  }
  H = {};
  var rt, ct = R.ReactCurrentOwner;
  function nt(i) {
    q = i;
  }
  function Q(i) {
    return typeof i == "object" && i !== null && i.$$typeof === e;
  }
  function ut() {
    if (ct.current) {
      var i = F(ct.current.type);
      if (i) return `

Check the render method of \`` + i + "`.";
    }
    return "";
  }
  R.ReactDebugCurrentFrame, rt = !1;
  var ft = {};
  function pt(i, A) {
    if (i._store && !i._store.validated && i.key == null) {
      i._store.validated = !0;
      var w = function(P) {
        var C = ut();
        if (!C) {
          var $ = typeof P == "string" ? P : P.displayName || P.name;
          $ && (C = `

Check the top-level render call using <` + $ + ">.");
        }
        return C;
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
      if (Array.isArray(i)) for (var w = 0; w < i.length; w++) {
        var N = i[w];
        Q(N) && pt(N, A);
      }
      else if (Q(i)) i._store && (i._store.validated = !0);
      else if (i) {
        var P = function(B) {
          if (B === null || typeof B != "object") return null;
          var U = O && B[O] || B["@@iterator"];
          return typeof U == "function" ? U : null;
        }(i);
        if (typeof P == "function" && P !== i.entries) for (var C, $ = P.call(i); !(C = $.next()).done; ) Q(C.value) && pt(C.value, A);
      }
    }
  }
  function wt(i) {
    var A, w = i.type;
    if (w != null && typeof w != "string") {
      if (typeof w == "function") A = w.propTypes;
      else {
        if (typeof w != "object" || w.$$typeof !== s && w.$$typeof !== h) return;
        A = w.propTypes;
      }
      if (A) {
        var N = F(w);
        (function(P, C, $, B, U) {
          var tt = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var j in P) if (tt(P, j)) {
            var v = void 0;
            try {
              if (typeof P[j] != "function") {
                var u = Error((B || "React class") + ": " + $ + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof P[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw u.name = "Invariant Violation", u;
              }
              v = P[j](C, j, B, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              v = c;
            }
            !v || v instanceof Error || (J(U), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", $, j, typeof v), J(null)), v instanceof Error && !(v.message in G) && (G[v.message] = !0, J(U), E("Failed %s type: %s", $, v.message), J(null));
          }
        })(A, i.props, "prop", N, i);
      } else w.PropTypes === void 0 || rt || (rt = !0, E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F(w) || "Unknown"));
      typeof w.getDefaultProps != "function" || w.getDefaultProps.isReactClassApproved || E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function bt(i, A, w, N, P, C) {
    var $ = function(c) {
      return typeof c == "string" || typeof c == "function" || c === yt.Fragment || c === o || c === b || c === n || c === f || c === p || c === x || typeof c == "object" && c !== null && (c.$$typeof === m || c.$$typeof === h || c.$$typeof === l || c.$$typeof === a || c.$$typeof === s || c.$$typeof === S || c.$$typeof === g || c[0] === _);
    }(i);
    if (!$) {
      var B = "";
      (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var U, tt = /* @__PURE__ */ function(c) {
        return "";
      }();
      B += tt || ut(), i === null ? U = "null" : Array.isArray(i) ? U = "array" : i !== void 0 && i.$$typeof === e ? (U = "<" + (F(i.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : U = typeof i, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", U, B);
    }
    var j = et(i, A, w, P, C);
    if (j == null) return j;
    if ($) {
      var v = A.children;
      if (v !== void 0) if (N) if (Array.isArray(v)) {
        for (var u = 0; u < v.length; u++) vt(v[u], i);
        Object.freeze && Object.freeze(v);
      } else E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
      else vt(v, i);
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
}(), _t.exports = ee;
var Mt, ge = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
Mt = ge, function() {
  var t = {}.hasOwnProperty;
  function e() {
    for (var r = [], n = 0; n < arguments.length; n++) {
      var o = arguments[n];
      if (o) {
        var l = typeof o;
        if (l === "string" || l === "number") r.push(o);
        else if (Array.isArray(o)) {
          if (o.length) {
            var a = e.apply(null, o);
            a && r.push(a);
          }
        } else if (l === "object") {
          if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
            r.push(o.toString());
            continue;
          }
          for (var s in o) t.call(o, s) && o[s] && r.push(s);
        }
      }
    }
    return r.join(" ");
  }
  Mt.exports ? (e.default = e, Mt.exports = e) : window.classNames = e;
}();
var ne = ge.exports;
const re = (t, e, r) => {
  let n = null;
  return function(...o) {
    n && clearTimeout(n), n = setTimeout(() => {
      n = null, t.apply(this, o);
    }, e);
  };
}, $e = ({ content: t }) => _t.exports.jsx("span", { dangerouslySetInnerHTML: { __html: t } }), De = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, Fe = T.createContext({ getTooltipData: () => De });
function ve(t = "DEFAULT_TOOLTIP_ID") {
  return T.useContext(Fe).getTooltipData(t);
}
const oe = async ({ elementReference: t = null, tooltipReference: e = null, tooltipArrowReference: r = null, place: n = "top", offset: o = 10, strategy: l = "absolute", middlewares: a = [je(Number(o)), ke(), Ne({ padding: 5 })] }) => {
  if (!t) return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (e === null) return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const s = a;
  return r ? (s.push({ name: "arrow", options: f = { element: r, padding: 5 }, async fn(p) {
    const { element: h, padding: m = 0 } = f || {}, { x: g, y: _, placement: S, rects: b, platform: x } = p;
    if (h == null) return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const d = le(m), O = { x: g, y: _ }, R = $t(S), E = zt(R), z = await x.getDimensions(h), M = R === "y" ? "top" : "left", F = R === "y" ? "bottom" : "right", G = b.reference[E] + b.reference[R] - O[R] - b.floating[E], q = O[R] - b.reference[R], J = await (x.getOffsetParent == null ? void 0 : x.getOffsetParent(h));
    let k = J ? R === "y" ? J.clientHeight || 0 : J.clientWidth || 0 : 0;
    k === 0 && (k = b.floating[E]);
    const Y = G / 2 - q / 2, H = d[M], V = k - z[E] - d[F], I = k / 2 - z[E] / 2 + Y, W = qt(H, I, V), et = Ct(S) != null && I != W && b.reference[E] / 2 - (I < H ? d[M] : d[F]) - z[E] / 2 < 0;
    return { [R]: O[R] - (et ? I < H ? H - I : V - I : 0), data: { [R]: W, centerOffset: I - W } };
  } }), te(t, e, { placement: n, strategy: l, middleware: s }).then(({ x: p, y: h, placement: m, middlewareData: g }) => {
    var _, S;
    const b = { left: `${p}px`, top: `${h}px` }, { x, y: d } = (_ = g.arrow) !== null && _ !== void 0 ? _ : { x: 0, y: 0 };
    return { tooltipStyles: b, tooltipArrowStyles: { left: x != null ? `${x}px` : "", top: d != null ? `${d}px` : "", right: "", bottom: "", [(S = { top: "bottom", right: "left", bottom: "top", left: "right" }[m.split("-")[0]]) !== null && S !== void 0 ? S : "bottom"]: "-4px" } };
  })) : te(t, e, { placement: "bottom", strategy: l, middleware: s }).then(({ x: p, y: h }) => ({ tooltipStyles: { left: `${p}px`, top: `${h}px` }, tooltipArrowStyles: {} }));
  var f;
};
var Rt = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const ie = ({ id: t, className: e, classNameArrow: r, variant: n = "dark", anchorId: o, anchorSelect: l, place: a = "top", offset: s = 10, events: f = ["hover"], positionStrategy: p = "absolute", middlewares: h, wrapper: m, children: g = null, delayShow: _ = 0, delayHide: S = 0, float: b = !1, noArrow: x = !1, clickable: d = !1, closeOnEsc: O = !1, style: R, position: E, afterShow: z, afterHide: M, content: F, html: G, isOpen: q, setIsOpen: J, activeAnchor: k, setActiveAnchor: Y }) => {
  const H = T.useRef(null), V = T.useRef(null), I = T.useRef(null), W = T.useRef(null), [et, rt] = T.useState({}), [ct, nt] = T.useState({}), [Q, ut] = T.useState(!1), [ft, pt] = T.useState(!1), vt = T.useRef(!1), wt = T.useRef(null), { anchorRefs: bt, setActiveAnchor: Et } = ve(t), xt = T.useRef(!1), [i, A] = T.useState([]), w = T.useRef(!1);
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
    if (q === void 0) return () => null;
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
  const P = (y = S) => {
    W.current && clearTimeout(W.current), W.current = setTimeout(() => {
      xt.current || N(!1);
    }, y);
  }, C = (y) => {
    var L;
    if (!y) return;
    _ ? (I.current && clearTimeout(I.current), I.current = setTimeout(() => {
      N(!0);
    }, _)) : N(!0);
    const D = (L = y.currentTarget) !== null && L !== void 0 ? L : y.target;
    Y(D), Et({ current: D }), W.current && clearTimeout(W.current);
  }, $ = () => {
    d ? P(S || 100) : S ? P() : N(!1), I.current && clearTimeout(I.current);
  }, B = ({ x: y, y: L }) => {
    oe({ place: a, offset: s, elementReference: { getBoundingClientRect: () => ({ x: y, y: L, width: 0, height: 0, top: L, left: y, right: y, bottom: L }) }, tooltipReference: H.current, tooltipArrowReference: V.current, strategy: p, middlewares: h }).then((D) => {
      Object.keys(D.tooltipStyles).length && rt(D.tooltipStyles), Object.keys(D.tooltipArrowStyles).length && nt(D.tooltipArrowStyles);
    });
  }, U = (y) => {
    if (!y) return;
    const L = y, D = { x: L.clientX, y: L.clientY };
    B(D), wt.current = D;
  }, tt = (y) => {
    C(y), S && P();
  }, j = (y) => {
    const L = document.querySelector(`[id='${o}']`);
    L != null && L.contains(y.target) || i.some((D) => D.contains(y.target)) || N(!1);
  }, v = (y) => {
    y.key === "Escape" && N(!1);
  }, u = re(C, 50), c = re($, 50);
  T.useEffect(() => {
    var y, L;
    const D = new Set(bt);
    i.forEach((it) => {
      D.add({ current: it });
    });
    const Z = document.querySelector(`[id='${o}']`);
    Z && D.add({ current: Z }), O && window.addEventListener("keydown", v);
    const K = [];
    f.find((it) => it === "click") && (window.addEventListener("click", j), K.push({ event: "click", listener: tt })), f.find((it) => it === "hover") && (K.push({ event: "mouseenter", listener: u }, { event: "mouseleave", listener: c }, { event: "focus", listener: u }, { event: "blur", listener: c }), b && K.push({ event: "mousemove", listener: U }));
    const lt = () => {
      xt.current = !0;
    }, dt = () => {
      xt.current = !1, $();
    };
    return d && ((y = H.current) === null || y === void 0 || y.addEventListener("mouseenter", lt), (L = H.current) === null || L === void 0 || L.addEventListener("mouseleave", dt)), K.forEach(({ event: it, listener: At }) => {
      D.forEach((Ot) => {
        var kt;
        (kt = Ot.current) === null || kt === void 0 || kt.addEventListener(it, At);
      });
    }), () => {
      var it, At;
      f.find((Ot) => Ot === "click") && window.removeEventListener("click", j), O && window.removeEventListener("keydown", v), d && ((it = H.current) === null || it === void 0 || it.removeEventListener("mouseenter", lt), (At = H.current) === null || At === void 0 || At.removeEventListener("mouseleave", dt)), K.forEach(({ event: Ot, listener: kt }) => {
        D.forEach((Re) => {
          var Ht;
          (Ht = Re.current) === null || Ht === void 0 || Ht.removeEventListener(Ot, kt);
        });
      });
    };
  }, [ft, bt, i, O, f]), T.useEffect(() => {
    let y = l ?? "";
    !y && t && (y = `[data-tooltip-id='${t}']`);
    const L = new MutationObserver((D) => {
      const Z = [];
      D.forEach((K) => {
        if (K.type === "attributes" && K.attributeName === "data-tooltip-id" && K.target.getAttribute("data-tooltip-id") === t && Z.push(K.target), K.type === "childList" && (k && [...K.removedNodes].some((lt) => !!lt.contains(k) && (pt(!1), N(!1), Y(null), !0)), y)) try {
          const lt = [...K.addedNodes].filter((dt) => dt.nodeType === 1);
          Z.push(...lt.filter((dt) => dt.matches(y))), Z.push(...lt.flatMap((dt) => [...dt.querySelectorAll(y)]));
        } catch {
        }
      }), Z.length && A((K) => [...K, ...Z]);
    });
    return L.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      L.disconnect();
    };
  }, [t, l, k]), T.useEffect(() => {
    E ? B(E) : b ? wt.current && B(wt.current) : oe({ place: a, offset: s, elementReference: k, tooltipReference: H.current, tooltipArrowReference: V.current, strategy: p, middlewares: h }).then((y) => {
      w.current && (Object.keys(y.tooltipStyles).length && rt(y.tooltipStyles), Object.keys(y.tooltipArrowStyles).length && nt(y.tooltipArrowStyles));
    });
  }, [Q, k, F, G, a, s, p, E]), T.useEffect(() => {
    var y;
    const L = document.querySelector(`[id='${o}']`), D = [...i, L];
    k && D.includes(k) || Y((y = i[0]) !== null && y !== void 0 ? y : L);
  }, [o, i, k]), T.useEffect(() => () => {
    I.current && clearTimeout(I.current), W.current && clearTimeout(W.current);
  }, []), T.useEffect(() => {
    let y = l;
    if (!y && t && (y = `[data-tooltip-id='${t}']`), y) try {
      const L = Array.from(document.querySelectorAll(y));
      A(L);
    } catch {
      A([]);
    }
  }, [t, l]);
  const X = !!(G || F || g) && Q && Object.keys(et).length > 0;
  return ft ? _t.exports.jsxs(m, { id: t, role: "tooltip", className: ne("react-tooltip", Rt.tooltip, Rt[n], e, { [Rt.show]: X, [Rt.fixed]: p === "fixed", [Rt.clickable]: d }), style: { ...R, ...et }, ref: H, children: [G && _t.exports.jsx($e, { content: G }) || F || g, _t.exports.jsx(m, { className: ne("react-tooltip-arrow", Rt.arrow, r, { [Rt["no-arrow"]]: x }), style: ct, ref: V })] }) : null;
}, Ie = ({ id: t, anchorId: e, anchorSelect: r, content: n, html: o, className: l, classNameArrow: a, variant: s = "dark", place: f = "top", offset: p = 10, wrapper: h = "div", children: m = null, events: g = ["hover"], positionStrategy: _ = "absolute", middlewares: S, delayShow: b = 0, delayHide: x = 0, float: d = !1, noArrow: O = !1, clickable: R = !1, closeOnEsc: E = !1, style: z, position: M, isOpen: F, setIsOpen: G, afterShow: q, afterHide: J }) => {
  const [k, Y] = T.useState(n), [H, V] = T.useState(o), [I, W] = T.useState(f), [et, rt] = T.useState(s), [ct, nt] = T.useState(p), [Q, ut] = T.useState(b), [ft, pt] = T.useState(x), [vt, wt] = T.useState(d), [bt, Et] = T.useState(h), [xt, i] = T.useState(g), [A, w] = T.useState(_), [N, P] = T.useState(null), { anchorRefs: C, activeAnchor: $ } = ve(t), B = (j) => j == null ? void 0 : j.getAttributeNames().reduce((v, u) => {
    var c;
    return u.startsWith("data-tooltip-") && (v[u.replace(/^data-tooltip-/, "")] = (c = j == null ? void 0 : j.getAttribute(u)) !== null && c !== void 0 ? c : null), v;
  }, {}), U = (j) => {
    const v = { place: (u) => {
      var c;
      W((c = u) !== null && c !== void 0 ? c : f);
    }, content: (u) => {
      Y(u ?? n);
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
      w((c = u) !== null && c !== void 0 ? c : _);
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
    Y(n);
  }, [n]), T.useEffect(() => {
    V(o);
  }, [o]), T.useEffect(() => {
    W(f);
  }, [f]), T.useEffect(() => {
    var j;
    const v = new Set(C);
    let u = r;
    if (!u && t && (u = `[data-tooltip-id='${t}']`), u) try {
      document.querySelectorAll(u).forEach((D) => {
        v.add({ current: D });
      });
    } catch {
      console.warn(`[react-tooltip] "${r}" is not a valid CSS selector`);
    }
    const c = document.querySelector(`[id='${e}']`);
    if (c && v.add({ current: c }), !v.size) return () => null;
    const X = (j = N ?? c) !== null && j !== void 0 ? j : $.current, y = new MutationObserver((D) => {
      D.forEach((Z) => {
        var K;
        if (!X || Z.type !== "attributes" || !(!((K = Z.attributeName) === null || K === void 0) && K.startsWith("data-tooltip-"))) return;
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
  }, [C, $, N, e, r]);
  const tt = { id: t, anchorId: e, anchorSelect: r, className: l, classNameArrow: a, content: k, html: H, place: I, variant: et, offset: ct, wrapper: bt, events: xt, positionStrategy: A, middlewares: S, delayShow: Q, delayHide: ft, float: vt, noArrow: O, clickable: R, closeOnEsc: E, style: z, position: M, isOpen: F, setIsOpen: G, afterShow: q, afterHide: J, activeAnchor: N, setActiveAnchor: (j) => P(j) };
  return m ? _t.exports.jsx(ie, { ...tt, children: m }) : _t.exports.jsx(ie, { ...tt });
}, we = (t) => t, be = (t) => t, xe = ({ place: t = "top", trigger: e = "hover", float: r = !1, shadow: n = !0, border: o = !1, children: l, style: a, ...s }) => {
  const f = l.find((g) => g.type === we), p = l.find((g) => g.type === be), h = "tooltip-" + T.useId(), m = (g) => ({
    hover: null,
    focus: "focus",
    click: "click focus"
  })[g];
  return /* @__PURE__ */ React.createElement("span", { className: "cove-tooltip", style: a, ...s }, /* @__PURE__ */ React.createElement("a", { id: h, role: "dialog", tabIndex: 0, className: "cove-tooltip--target", "data-tooltip-float": r, "data-tooltip-place": t, "data-tooltip-events": m() }, f ? f.props.children : null), /* @__PURE__ */ React.createElement(
    Ie,
    {
      id: h,
      anchorId: h,
      className: "cove-tooltip__content" + (" place-" + t) + (r ? "" : " cove-tooltip__content--animated") + (e === "click" ? " interactive" : "") + (o ? " cove-tooltip--border" : "") + (n ? " has-shadow" : ""),
      globalEventOff: "click"
    },
    p ? p.props.children : null
  ));
};
xe.Target = we;
xe.Content = be;
export {
  xe as T
};
