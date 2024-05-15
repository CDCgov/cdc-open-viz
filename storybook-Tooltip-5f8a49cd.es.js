import { r as d, R as se } from "./storybook-index-45401197.es.js";
import { g as uo } from "./storybook-_commonjsHelpers-c5d32002.es.js";
var qt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function o() {
      for (var r = "", l = 0; l < arguments.length; l++) {
        var s = arguments[l];
        s && (r = i(r, n(s)));
      }
      return r;
    }
    function n(r) {
      if (typeof r == "string" || typeof r == "number")
        return r;
      if (typeof r != "object")
        return "";
      if (Array.isArray(r))
        return o.apply(null, r);
      if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]"))
        return r.toString();
      var l = "";
      for (var s in r)
        t.call(r, s) && r[s] && (l = i(l, s));
      return l;
    }
    function i(r, l) {
      return l ? r ? r + " " + l : r + l : r;
    }
    e.exports ? (o.default = o, e.exports = o) : window.classNames = o;
  })();
})(qt);
var fo = qt.exports;
const _t = /* @__PURE__ */ uo(fo), Pe = Math.min, Ae = Math.max, mt = Math.round, pt = Math.floor, ve = (e) => ({
  x: e,
  y: e
}), po = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, mo = {
  start: "end",
  end: "start"
};
function At(e, t, o) {
  return Ae(e, Pe(t, o));
}
function Ze(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Oe(e) {
  return e.split("-")[0];
}
function et(e) {
  return e.split("-")[1];
}
function Xt(e) {
  return e === "x" ? "y" : "x";
}
function Tt(e) {
  return e === "y" ? "height" : "width";
}
function yt(e) {
  return ["top", "bottom"].includes(Oe(e)) ? "y" : "x";
}
function Rt(e) {
  return Xt(yt(e));
}
function ho(e, t, o) {
  o === void 0 && (o = !1);
  const n = et(e), i = Rt(e), r = Tt(i);
  let l = i === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = ht(l)), [l, ht(l)];
}
function vo(e) {
  const t = ht(e);
  return [Ot(e), t, Ot(t)];
}
function Ot(e) {
  return e.replace(/start|end/g, (t) => mo[t]);
}
function yo(e, t, o) {
  const n = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? i : n : t ? n : i;
    case "left":
    case "right":
      return t ? r : l;
    default:
      return [];
  }
}
function wo(e, t, o, n) {
  const i = et(e);
  let r = yo(Oe(e), o === "start", n);
  return i && (r = r.map((l) => l + "-" + i), t && (r = r.concat(r.map(Ot)))), r;
}
function ht(e) {
  return e.replace(/left|right|bottom|top/g, (t) => po[t]);
}
function go(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Gt(e) {
  return typeof e != "number" ? go(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function vt(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function It(e, t, o) {
  let {
    reference: n,
    floating: i
  } = e;
  const r = yt(t), l = Rt(t), s = Tt(l), c = Oe(t), a = r === "y", h = n.x + n.width / 2 - i.width / 2, p = n.y + n.height / 2 - i.height / 2, y = n[s] / 2 - i[s] / 2;
  let f;
  switch (c) {
    case "top":
      f = {
        x: h,
        y: n.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: h,
        y: n.y + n.height
      };
      break;
    case "right":
      f = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      f = {
        x: n.x - i.width,
        y: p
      };
      break;
    default:
      f = {
        x: n.x,
        y: n.y
      };
  }
  switch (et(t)) {
    case "start":
      f[l] -= y * (o && a ? -1 : 1);
      break;
    case "end":
      f[l] += y * (o && a ? -1 : 1);
      break;
  }
  return f;
}
const bo = async (e, t, o) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = o, s = r.filter(Boolean), c = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let a = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: h,
    y: p
  } = It(a, n, c), y = n, f = {}, m = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: E,
      fn: w
    } = s[g], {
      x: _,
      y: S,
      data: R,
      reset: O
    } = await w({
      x: h,
      y: p,
      initialPlacement: n,
      placement: y,
      strategy: i,
      middlewareData: f,
      rects: a,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (h = _ ?? h, p = S ?? p, f = {
      ...f,
      [E]: {
        ...f[E],
        ...R
      }
    }, O && m <= 50) {
      m++, typeof O == "object" && (O.placement && (y = O.placement), O.rects && (a = O.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : O.rects), {
        x: h,
        y: p
      } = It(a, y, c)), g = -1;
      continue;
    }
  }
  return {
    x: h,
    y: p,
    placement: y,
    strategy: i,
    middlewareData: f
  };
};
async function Qt(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: r,
    rects: l,
    elements: s,
    strategy: c
  } = e, {
    boundary: a = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: p = "floating",
    altBoundary: y = !1,
    padding: f = 0
  } = Ze(t, e), m = Gt(f), E = s[y ? p === "floating" ? "reference" : "floating" : p], w = vt(await r.getClippingRect({
    element: (o = await (r.isElement == null ? void 0 : r.isElement(E))) == null || o ? E : E.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(s.floating)),
    boundary: a,
    rootBoundary: h,
    strategy: c
  })), _ = p === "floating" ? {
    ...l.floating,
    x: n,
    y: i
  } : l.reference, S = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(s.floating)), R = await (r.isElement == null ? void 0 : r.isElement(S)) ? await (r.getScale == null ? void 0 : r.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = vt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: _,
    offsetParent: S,
    strategy: c
  }) : _);
  return {
    top: (w.top - O.top + m.top) / R.y,
    bottom: (O.bottom - w.bottom + m.bottom) / R.y,
    left: (w.left - O.left + m.left) / R.x,
    right: (O.right - w.right + m.right) / R.x
  };
}
const xo = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: n,
      placement: i,
      rects: r,
      platform: l,
      elements: s,
      middlewareData: c
    } = t, {
      element: a,
      padding: h = 0
    } = Ze(e, t) || {};
    if (a == null)
      return {};
    const p = Gt(h), y = {
      x: o,
      y: n
    }, f = Rt(i), m = Tt(f), g = await l.getDimensions(a), E = f === "y", w = E ? "top" : "left", _ = E ? "bottom" : "right", S = E ? "clientHeight" : "clientWidth", R = r.reference[m] + r.reference[f] - y[f] - r.floating[m], O = y[f] - r.reference[f], H = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(a));
    let L = H ? H[S] : 0;
    (!L || !await (l.isElement == null ? void 0 : l.isElement(H))) && (L = s.floating[S] || r.floating[m]);
    const V = R / 2 - O / 2, ee = L / 2 - g[m] / 2 - 1, ae = Pe(p[w], ee), oe = Pe(p[_], ee), P = ae, ne = L - g[m] - oe, C = L / 2 - g[m] / 2 + V, W = At(P, C, ne), B = !c.arrow && et(i) != null && C != W && r.reference[m] / 2 - (C < P ? ae : oe) - g[m] / 2 < 0, j = B ? C < P ? C - P : C - ne : 0;
    return {
      [f]: y[f] + j,
      data: {
        [f]: W,
        centerOffset: C - W - j,
        ...B && {
          alignmentOffset: j
        }
      },
      reset: B
    };
  }
}), Eo = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, n;
      const {
        placement: i,
        middlewareData: r,
        rects: l,
        initialPlacement: s,
        platform: c,
        elements: a
      } = t, {
        mainAxis: h = !0,
        crossAxis: p = !0,
        fallbackPlacements: y,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...E
      } = Ze(e, t);
      if ((o = r.arrow) != null && o.alignmentOffset)
        return {};
      const w = Oe(i), _ = Oe(s) === s, S = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), R = y || (_ || !g ? [ht(s)] : vo(s));
      !y && m !== "none" && R.push(...wo(s, g, m, S));
      const O = [s, ...R], H = await Qt(t, E), L = [];
      let V = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (h && L.push(H[w]), p) {
        const P = ho(i, l, S);
        L.push(H[P[0]], H[P[1]]);
      }
      if (V = [...V, {
        placement: i,
        overflows: L
      }], !L.every((P) => P <= 0)) {
        var ee, ae;
        const P = (((ee = r.flip) == null ? void 0 : ee.index) || 0) + 1, ne = O[P];
        if (ne)
          return {
            data: {
              index: P,
              overflows: V
            },
            reset: {
              placement: ne
            }
          };
        let C = (ae = V.filter((W) => W.overflows[0] <= 0).sort((W, B) => W.overflows[1] - B.overflows[1])[0]) == null ? void 0 : ae.placement;
        if (!C)
          switch (f) {
            case "bestFit": {
              var oe;
              const W = (oe = V.map((B) => [B.placement, B.overflows.filter((j) => j > 0).reduce((j, ue) => j + ue, 0)]).sort((B, j) => B[1] - j[1])[0]) == null ? void 0 : oe[0];
              W && (C = W);
              break;
            }
            case "initialPlacement":
              C = s;
              break;
          }
        if (i !== C)
          return {
            reset: {
              placement: C
            }
          };
      }
      return {};
    }
  };
};
async function So(e, t) {
  const {
    placement: o,
    platform: n,
    elements: i
  } = e, r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), l = Oe(o), s = et(o), c = yt(o) === "y", a = ["left", "top"].includes(l) ? -1 : 1, h = r && c ? -1 : 1, p = Ze(t, e);
  let {
    mainAxis: y,
    crossAxis: f,
    alignmentAxis: m
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return s && typeof m == "number" && (f = s === "end" ? m * -1 : m), c ? {
    x: f * h,
    y: y * a
  } : {
    x: y * a,
    y: f * h
  };
}
const _o = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, n;
      const {
        x: i,
        y: r,
        placement: l,
        middlewareData: s
      } = t, c = await So(t, e);
      return l === ((o = s.offset) == null ? void 0 : o.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: i + c.x,
        y: r + c.y,
        data: {
          ...c,
          placement: l
        }
      };
    }
  };
}, Ao = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: n,
        placement: i
      } = t, {
        mainAxis: r = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (E) => {
            let {
              x: w,
              y: _
            } = E;
            return {
              x: w,
              y: _
            };
          }
        },
        ...c
      } = Ze(e, t), a = {
        x: o,
        y: n
      }, h = await Qt(t, c), p = yt(Oe(i)), y = Xt(p);
      let f = a[y], m = a[p];
      if (r) {
        const E = y === "y" ? "top" : "left", w = y === "y" ? "bottom" : "right", _ = f + h[E], S = f - h[w];
        f = At(_, f, S);
      }
      if (l) {
        const E = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", _ = m + h[E], S = m - h[w];
        m = At(_, m, S);
      }
      const g = s.fn({
        ...t,
        [y]: f,
        [p]: m
      });
      return {
        ...g,
        data: {
          x: g.x - o,
          y: g.y - n
        }
      };
    }
  };
};
function ye(e) {
  return Ut(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function G(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function me(e) {
  var t;
  return (t = (Ut(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ut(e) {
  return e instanceof Node || e instanceof G(e).Node;
}
function pe(e) {
  return e instanceof Element || e instanceof G(e).Element;
}
function ce(e) {
  return e instanceof HTMLElement || e instanceof G(e).HTMLElement;
}
function Pt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof G(e).ShadowRoot;
}
function tt(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: n,
    display: i
  } = Z(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !["inline", "contents"].includes(i);
}
function Oo(e) {
  return ["table", "td", "th"].includes(ye(e));
}
function Ct(e) {
  const t = kt(), o = Z(e);
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (o.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (o.contain || "").includes(n));
}
function To(e) {
  let t = je(e);
  for (; ce(t) && !wt(t); ) {
    if (Ct(t))
      return t;
    t = je(t);
  }
  return null;
}
function kt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function wt(e) {
  return ["html", "body", "#document"].includes(ye(e));
}
function Z(e) {
  return G(e).getComputedStyle(e);
}
function gt(e) {
  return pe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function je(e) {
  if (ye(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Pt(e) && e.host || // Fallback.
    me(e)
  );
  return Pt(t) ? t.host : t;
}
function Jt(e) {
  const t = je(e);
  return wt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ce(t) && tt(t) ? t : Jt(t);
}
function Je(e, t, o) {
  var n;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const i = Jt(e), r = i === ((n = e.ownerDocument) == null ? void 0 : n.body), l = G(i);
  return r ? t.concat(l, l.visualViewport || [], tt(i) ? i : [], l.frameElement && o ? Je(l.frameElement) : []) : t.concat(i, Je(i, [], o));
}
function Zt(e) {
  const t = Z(e);
  let o = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = ce(e), r = i ? e.offsetWidth : o, l = i ? e.offsetHeight : n, s = mt(o) !== r || mt(n) !== l;
  return s && (o = r, n = l), {
    width: o,
    height: n,
    $: s
  };
}
function Lt(e) {
  return pe(e) ? e : e.contextElement;
}
function Ie(e) {
  const t = Lt(e);
  if (!ce(t))
    return ve(1);
  const o = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: r
  } = Zt(t);
  let l = (r ? mt(o.width) : o.width) / n, s = (r ? mt(o.height) : o.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const Ro = /* @__PURE__ */ ve(0);
function eo(e) {
  const t = G(e);
  return !kt() || !t.visualViewport ? Ro : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Co(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== G(e) ? !1 : t;
}
function Te(e, t, o, n) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const i = e.getBoundingClientRect(), r = Lt(e);
  let l = ve(1);
  t && (n ? pe(n) && (l = Ie(n)) : l = Ie(e));
  const s = Co(r, o, n) ? eo(r) : ve(0);
  let c = (i.left + s.x) / l.x, a = (i.top + s.y) / l.y, h = i.width / l.x, p = i.height / l.y;
  if (r) {
    const y = G(r), f = n && pe(n) ? G(n) : n;
    let m = y.frameElement;
    for (; m && n && f !== y; ) {
      const g = Ie(m), E = m.getBoundingClientRect(), w = Z(m), _ = E.left + (m.clientLeft + parseFloat(w.paddingLeft)) * g.x, S = E.top + (m.clientTop + parseFloat(w.paddingTop)) * g.y;
      c *= g.x, a *= g.y, h *= g.x, p *= g.y, c += _, a += S, m = G(m).frameElement;
    }
  }
  return vt({
    width: h,
    height: p,
    x: c,
    y: a
  });
}
function ko(e) {
  let {
    rect: t,
    offsetParent: o,
    strategy: n
  } = e;
  const i = ce(o), r = me(o);
  if (o === r)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = ve(1);
  const c = ve(0);
  if ((i || !i && n !== "fixed") && ((ye(o) !== "body" || tt(r)) && (l = gt(o)), ce(o))) {
    const a = Te(o);
    s = Ie(o), c.x = a.x + o.clientLeft, c.y = a.y + o.clientTop;
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - l.scrollLeft * s.x + c.x,
    y: t.y * s.y - l.scrollTop * s.y + c.y
  };
}
function Lo(e) {
  return Array.from(e.getClientRects());
}
function to(e) {
  return Te(me(e)).left + gt(e).scrollLeft;
}
function No(e) {
  const t = me(e), o = gt(e), n = e.ownerDocument.body, i = Ae(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = Ae(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let l = -o.scrollLeft + to(e);
  const s = -o.scrollTop;
  return Z(n).direction === "rtl" && (l += Ae(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: l,
    y: s
  };
}
function $o(e, t) {
  const o = G(e), n = me(e), i = o.visualViewport;
  let r = n.clientWidth, l = n.clientHeight, s = 0, c = 0;
  if (i) {
    r = i.width, l = i.height;
    const a = kt();
    (!a || a && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: s,
    y: c
  };
}
function Do(e, t) {
  const o = Te(e, !0, t === "fixed"), n = o.top + e.clientTop, i = o.left + e.clientLeft, r = ce(e) ? Ie(e) : ve(1), l = e.clientWidth * r.x, s = e.clientHeight * r.y, c = i * r.x, a = n * r.y;
  return {
    width: l,
    height: s,
    x: c,
    y: a
  };
}
function jt(e, t, o) {
  let n;
  if (t === "viewport")
    n = $o(e, o);
  else if (t === "document")
    n = No(me(e));
  else if (pe(t))
    n = Do(t, o);
  else {
    const i = eo(e);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return vt(n);
}
function oo(e, t) {
  const o = je(e);
  return o === t || !pe(o) || wt(o) ? !1 : Z(o).position === "fixed" || oo(o, t);
}
function Bo(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let n = Je(e, [], !1).filter((s) => pe(s) && ye(s) !== "body"), i = null;
  const r = Z(e).position === "fixed";
  let l = r ? je(e) : e;
  for (; pe(l) && !wt(l); ) {
    const s = Z(l), c = Ct(l);
    !c && s.position === "fixed" && (i = null), (r ? !c && !i : !c && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || tt(l) && !c && oo(e, l)) ? n = n.filter((h) => h !== l) : i = s, l = je(l);
  }
  return t.set(e, n), n;
}
function Io(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: n,
    strategy: i
  } = e;
  const l = [...o === "clippingAncestors" ? Bo(t, this._c) : [].concat(o), n], s = l[0], c = l.reduce((a, h) => {
    const p = jt(t, h, i);
    return a.top = Ae(p.top, a.top), a.right = Pe(p.right, a.right), a.bottom = Pe(p.bottom, a.bottom), a.left = Ae(p.left, a.left), a;
  }, jt(t, s, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Po(e) {
  const {
    width: t,
    height: o
  } = Zt(e);
  return {
    width: t,
    height: o
  };
}
function jo(e, t, o) {
  const n = ce(t), i = me(t), r = o === "fixed", l = Te(e, !0, r, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ve(0);
  if (n || !n && !r)
    if ((ye(t) !== "body" || tt(i)) && (s = gt(t)), n) {
      const a = Te(t, !0, r, t);
      c.x = a.x + t.clientLeft, c.y = a.y + t.clientTop;
    } else
      i && (c.x = to(i));
  return {
    x: l.left + s.scrollLeft - c.x,
    y: l.top + s.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
function Mt(e, t) {
  return !ce(e) || Z(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function no(e, t) {
  const o = G(e);
  if (!ce(e))
    return o;
  let n = Mt(e, t);
  for (; n && Oo(n) && Z(n).position === "static"; )
    n = Mt(n, t);
  return n && (ye(n) === "html" || ye(n) === "body" && Z(n).position === "static" && !Ct(n)) ? o : n || To(e) || o;
}
const Mo = async function(e) {
  let {
    reference: t,
    floating: o,
    strategy: n
  } = e;
  const i = this.getOffsetParent || no, r = this.getDimensions;
  return {
    reference: jo(t, await i(o), n),
    floating: {
      x: 0,
      y: 0,
      ...await r(o)
    }
  };
};
function Wo(e) {
  return Z(e).direction === "rtl";
}
const zo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ko,
  getDocumentElement: me,
  getClippingRect: Io,
  getOffsetParent: no,
  getElementRects: Mo,
  getClientRects: Lo,
  getDimensions: Po,
  getScale: Ie,
  isElement: pe,
  isRTL: Wo
};
function Ho(e, t) {
  let o = null, n;
  const i = me(e);
  function r() {
    clearTimeout(n), o && o.disconnect(), o = null;
  }
  function l(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), r();
    const {
      left: a,
      top: h,
      width: p,
      height: y
    } = e.getBoundingClientRect();
    if (s || t(), !p || !y)
      return;
    const f = pt(h), m = pt(i.clientWidth - (a + p)), g = pt(i.clientHeight - (h + y)), E = pt(a), _ = {
      rootMargin: -f + "px " + -m + "px " + -g + "px " + -E + "px",
      threshold: Ae(0, Pe(1, c)) || 1
    };
    let S = !0;
    function R(O) {
      const H = O[0].intersectionRatio;
      if (H !== c) {
        if (!S)
          return l();
        H ? l(!1, H) : n = setTimeout(() => {
          l(!1, 1e-7);
        }, 100);
      }
      S = !1;
    }
    try {
      o = new IntersectionObserver(R, {
        ..._,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(R, _);
    }
    o.observe(e);
  }
  return l(!0), r;
}
function Fo(e, t, o, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, a = Lt(e), h = i || r ? [...a ? Je(a) : [], ...Je(t)] : [];
  h.forEach((w) => {
    i && w.addEventListener("scroll", o, {
      passive: !0
    }), r && w.addEventListener("resize", o);
  });
  const p = a && s ? Ho(a, o) : null;
  let y = -1, f = null;
  l && (f = new ResizeObserver((w) => {
    let [_] = w;
    _ && _.target === a && f && (f.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      f && f.observe(t);
    })), o();
  }), a && !c && f.observe(a), f.observe(t));
  let m, g = c ? Te(e) : null;
  c && E();
  function E() {
    const w = Te(e);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && o(), g = w, m = requestAnimationFrame(E);
  }
  return o(), () => {
    h.forEach((w) => {
      i && w.removeEventListener("scroll", o), r && w.removeEventListener("resize", o);
    }), p && p(), f && f.disconnect(), f = null, c && cancelAnimationFrame(m);
  };
}
const Vo = Ao, Ko = Eo, Yo = xo, Wt = (e, t, o) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: zo,
    ...o
  }, r = {
    ...i.platform,
    _c: n
  };
  return bo(e, t, {
    ...i,
    platform: r
  });
};
/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
const qo = "react-tooltip-core-styles", Xo = "react-tooltip-base-styles", zt = { core: !1, base: !1 };
function Ht({ css: e, id: t = Xo, type: o = "base", ref: n }) {
  var i, r;
  if (!e || typeof document > "u" || zt[o] || o === "core" && typeof process < "u" && (!((i = process == null ? void 0 : process.env) === null || i === void 0) && i.REACT_TOOLTIP_DISABLE_CORE_STYLES) || o !== "base" && typeof process < "u" && (!((r = process == null ? void 0 : process.env) === null || r === void 0) && r.REACT_TOOLTIP_DISABLE_BASE_STYLES))
    return;
  o === "core" && (t = qo), n || (n = {});
  const { insertAt: l } = n;
  if (document.getElementById(t))
    return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);
  const s = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
  c.id = t, c.type = "text/css", l === "top" && s.firstChild ? s.insertBefore(c, s.firstChild) : s.appendChild(c), c.styleSheet ? c.styleSheet.cssText = e : c.appendChild(document.createTextNode(e)), zt[o] = !0;
}
const Ft = (e, t, o) => {
  let n = null;
  const i = function(...r) {
    const l = () => {
      n = null, o || e.apply(this, r);
    };
    o && !n && (e.apply(this, r), n = setTimeout(l, t)), o || (n && clearTimeout(n), n = setTimeout(l, t));
  };
  return i.cancel = () => {
    n && (clearTimeout(n), n = null);
  }, i;
}, Go = "DEFAULT_TOOLTIP_ID", Qo = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, Uo = d.createContext({ getTooltipData: () => Qo });
function ro(e = Go) {
  return d.useContext(Uo).getTooltipData(e);
}
const Jo = typeof window < "u" ? d.useLayoutEffect : d.useEffect, Zo = (e) => {
  if (!(e instanceof HTMLElement || e instanceof SVGElement))
    return !1;
  const t = getComputedStyle(e);
  return ["overflow", "overflow-x", "overflow-y"].some((o) => {
    const n = t.getPropertyValue(o);
    return n === "auto" || n === "scroll";
  });
}, Vt = (e) => {
  if (!e)
    return null;
  let t = e.parentElement;
  for (; t; ) {
    if (Zo(t))
      return t;
    t = t.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, Kt = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: o = null, place: n = "top", offset: i = 10, strategy: r = "absolute", middlewares: l = [_o(Number(i)), Ko({ fallbackAxisSideDirection: "start" }), Vo({ padding: 5 })], border: s }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: n };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: n };
  const c = l;
  return o ? (c.push(Yo({ element: o, padding: 5 })), Wt(e, t, { placement: n, strategy: r, middleware: c }).then(({ x: a, y: h, placement: p, middlewareData: y }) => {
    var f, m;
    const g = { left: `${a}px`, top: `${h}px`, border: s }, { x: E, y: w } = (f = y.arrow) !== null && f !== void 0 ? f : { x: 0, y: 0 }, _ = (m = { top: "bottom", right: "left", bottom: "top", left: "right" }[p.split("-")[0]]) !== null && m !== void 0 ? m : "bottom", S = s && { borderBottom: s, borderRight: s };
    let R = 0;
    if (s) {
      const O = `${s}`.match(/(\d+)px/);
      R = O != null && O[1] ? Number(O[1]) : 1;
    }
    return { tooltipStyles: g, tooltipArrowStyles: { left: E != null ? `${E}px` : "", top: w != null ? `${w}px` : "", right: "", bottom: "", ...S, [_]: `-${4 + R}px` }, place: p };
  })) : Wt(e, t, { placement: "bottom", strategy: r, middleware: c }).then(({ x: a, y: h, placement: p }) => ({ tooltipStyles: { left: `${a}px`, top: `${h}px` }, tooltipArrowStyles: {}, place: p }));
};
var Be = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, St = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const en = ({ forwardRef: e, id: t, className: o, classNameArrow: n, variant: i = "dark", anchorId: r, anchorSelect: l, place: s = "top", offset: c = 10, events: a = ["hover"], openOnClick: h = !1, positionStrategy: p = "absolute", middlewares: y, wrapper: f, delayShow: m = 0, delayHide: g = 0, float: E = !1, hidden: w = !1, noArrow: _ = !1, clickable: S = !1, closeOnEsc: R = !1, closeOnScroll: O = !1, closeOnResize: H = !1, openEvents: L, closeEvents: V, globalCloseEvents: ee, imperativeModeOnly: ae, style: oe, position: P, afterShow: ne, afterHide: C, content: W, contentWrapperRef: B, isOpen: j, defaultIsOpen: ue = !1, setIsOpen: we, activeAnchor: $, setActiveAnchor: Re, border: ot, opacity: nt, arrowColor: rt, role: bt = "tooltip" }) => {
  var Me;
  const z = d.useRef(null), Ce = d.useRef(null), K = d.useRef(null), Q = d.useRef(null), ge = d.useRef(null), [We, lt] = d.useState(s), [ze, it] = d.useState({}), [st, ct] = d.useState({}), [q, at] = d.useState(!1), [ke, be] = d.useState(!1), [N, He] = d.useState(null), Fe = d.useRef(!1), Ve = d.useRef(null), { anchorRefs: ut, setActiveAnchor: ft } = ro(t), Ke = d.useRef(!1), [he, Le] = d.useState([]), xe = d.useRef(!1), Ne = h || a.includes("click"), fe = Ne || (L == null ? void 0 : L.click) || (L == null ? void 0 : L.dblclick) || (L == null ? void 0 : L.mousedown), Ye = L ? { ...L } : { mouseenter: !0, focus: !0, click: !1, dblclick: !1, mousedown: !1 };
  !L && Ne && Object.assign(Ye, { mouseenter: !1, focus: !1, click: !0 });
  const qe = V ? { ...V } : { mouseleave: !0, blur: !0, click: !1, dblclick: !1, mouseup: !1 };
  !V && Ne && Object.assign(qe, { mouseleave: !1, blur: !1 });
  const U = ee ? { ...ee } : { escape: R || !1, scroll: O || !1, resize: H || !1, clickOutsideAnchor: fe || !1 };
  ae && (Object.assign(Ye, { mouseenter: !1, focus: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(qe, { mouseleave: !1, blur: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(U, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), Jo(() => (xe.current = !0, () => {
    xe.current = !1;
  }), []);
  const Y = (u) => {
    xe.current && (u && be(!0), setTimeout(() => {
      xe.current && (we == null || we(u), j === void 0 && at(u));
    }, 10));
  };
  d.useEffect(() => {
    if (j === void 0)
      return () => null;
    j && be(!0);
    const u = setTimeout(() => {
      at(j);
    }, 10);
    return () => {
      clearTimeout(u);
    };
  }, [j]), d.useEffect(() => {
    if (q !== Fe.current)
      if (ge.current && clearTimeout(ge.current), Fe.current = q, q)
        ne == null || ne();
      else {
        const u = ((b) => {
          const x = b.match(/^([\d.]+)(m?s?)$/);
          if (!x)
            return 0;
          const [, I, D] = x;
          return D !== "s" && D !== "ms" ? 0 : Number(I) * (D === "ms" ? 1 : 1e3);
        })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
        ge.current = setTimeout(() => {
          be(!1), He(null), C == null || C();
        }, u + 25);
      }
  }, [q]);
  const Xe = (u = m) => {
    K.current && clearTimeout(K.current), K.current = setTimeout(() => {
      Y(!0);
    }, u);
  }, $e = (u = g) => {
    Q.current && clearTimeout(Q.current), Q.current = setTimeout(() => {
      Ke.current || Y(!1);
    }, u);
  }, Ee = (u) => {
    var b;
    if (!u)
      return;
    const x = (b = u.currentTarget) !== null && b !== void 0 ? b : u.target;
    if (!(x != null && x.isConnected))
      return Re(null), void ft({ current: null });
    m ? Xe() : Y(!0), Re(x), ft({ current: x }), Q.current && clearTimeout(Q.current);
  }, De = () => {
    S ? $e(g || 100) : g ? $e() : Y(!1), K.current && clearTimeout(K.current);
  }, Ge = ({ x: u, y: b }) => {
    var x;
    const I = { getBoundingClientRect: () => ({ x: u, y: b, width: 0, height: 0, top: b, left: u, right: u, bottom: b }) };
    Kt({ place: (x = N == null ? void 0 : N.place) !== null && x !== void 0 ? x : s, offset: c, elementReference: I, tooltipReference: z.current, tooltipArrowReference: Ce.current, strategy: p, middlewares: y, border: ot }).then((D) => {
      Object.keys(D.tooltipStyles).length && it(D.tooltipStyles), Object.keys(D.tooltipArrowStyles).length && ct(D.tooltipArrowStyles), lt(D.place);
    });
  }, M = (u) => {
    if (!u)
      return;
    const b = u, x = { x: b.clientX, y: b.clientY };
    Ge(x), Ve.current = x;
  }, X = (u) => {
    var b;
    if (!q)
      return;
    const x = u.target;
    !((b = z.current) === null || b === void 0) && b.contains(x) || [document.querySelector(`[id='${r}']`), ...he].some((I) => I == null ? void 0 : I.contains(x)) || (Y(!1), K.current && clearTimeout(K.current));
  }, v = Ft(Ee, 50, !0), A = Ft(De, 50, !0), te = (u) => {
    A.cancel(), v(u);
  }, dt = () => {
    v.cancel(), A();
  }, Se = d.useCallback(() => {
    var u, b;
    const x = (u = N == null ? void 0 : N.position) !== null && u !== void 0 ? u : P;
    x ? Ge(x) : E ? Ve.current && Ge(Ve.current) : $ != null && $.isConnected && Kt({ place: (b = N == null ? void 0 : N.place) !== null && b !== void 0 ? b : s, offset: c, elementReference: $, tooltipReference: z.current, tooltipArrowReference: Ce.current, strategy: p, middlewares: y, border: ot }).then((I) => {
      xe.current && (Object.keys(I.tooltipStyles).length && it(I.tooltipStyles), Object.keys(I.tooltipArrowStyles).length && ct(I.tooltipArrowStyles), lt(I.place));
    });
  }, [q, $, W, oe, s, N == null ? void 0 : N.place, c, p, P, N == null ? void 0 : N.position, E]);
  d.useEffect(() => {
    var u, b;
    const x = new Set(ut);
    he.forEach((T) => {
      x.add({ current: T });
    });
    const I = document.querySelector(`[id='${r}']`);
    I && x.add({ current: I });
    const D = () => {
      Y(!1);
    }, le = Vt($), ie = Vt(z.current);
    U.scroll && (window.addEventListener("scroll", D), le == null || le.addEventListener("scroll", D), ie == null || ie.addEventListener("scroll", D));
    let F = null;
    U.resize ? window.addEventListener("resize", D) : $ && z.current && (F = Fo($, z.current, Se, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const J = (T) => {
      T.key === "Escape" && Y(!1);
    };
    U.escape && window.addEventListener("keydown", J), U.clickOutsideAnchor && window.addEventListener("click", X);
    const k = [], Qe = (T) => {
      q && (T == null ? void 0 : T.target) === $ || Ee(T);
    }, co = (T) => {
      q && (T == null ? void 0 : T.target) === $ && De();
    }, Nt = ["mouseenter", "mouseleave", "focus", "blur"], $t = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(Ye).forEach(([T, de]) => {
      de && (Nt.includes(T) ? k.push({ event: T, listener: te }) : $t.includes(T) && k.push({ event: T, listener: Qe }));
    }), Object.entries(qe).forEach(([T, de]) => {
      de && (Nt.includes(T) ? k.push({ event: T, listener: dt }) : $t.includes(T) && k.push({ event: T, listener: co }));
    }), E && k.push({ event: "pointermove", listener: M });
    const Dt = () => {
      Ke.current = !0;
    }, Bt = () => {
      Ke.current = !1, De();
    };
    return S && !fe && ((u = z.current) === null || u === void 0 || u.addEventListener("mouseenter", Dt), (b = z.current) === null || b === void 0 || b.addEventListener("mouseleave", Bt)), k.forEach(({ event: T, listener: de }) => {
      x.forEach((xt) => {
        var Ue;
        (Ue = xt.current) === null || Ue === void 0 || Ue.addEventListener(T, de);
      });
    }), () => {
      var T, de;
      U.scroll && (window.removeEventListener("scroll", D), le == null || le.removeEventListener("scroll", D), ie == null || ie.removeEventListener("scroll", D)), U.resize ? window.removeEventListener("resize", D) : F == null || F(), U.clickOutsideAnchor && window.removeEventListener("click", X), U.escape && window.removeEventListener("keydown", J), S && !fe && ((T = z.current) === null || T === void 0 || T.removeEventListener("mouseenter", Dt), (de = z.current) === null || de === void 0 || de.removeEventListener("mouseleave", Bt)), k.forEach(({ event: xt, listener: Ue }) => {
        x.forEach((ao) => {
          var Et;
          (Et = ao.current) === null || Et === void 0 || Et.removeEventListener(xt, Ue);
        });
      });
    };
  }, [$, Se, ke, ut, he, L, V, ee, Ne]), d.useEffect(() => {
    var u, b;
    let x = (b = (u = N == null ? void 0 : N.anchorSelect) !== null && u !== void 0 ? u : l) !== null && b !== void 0 ? b : "";
    !x && t && (x = `[data-tooltip-id='${t}']`);
    const I = new MutationObserver((D) => {
      const le = [], ie = [];
      D.forEach((F) => {
        if (F.type === "attributes" && F.attributeName === "data-tooltip-id" && (F.target.getAttribute("data-tooltip-id") === t ? le.push(F.target) : F.oldValue === t && ie.push(F.target)), F.type === "childList") {
          if ($) {
            const J = [...F.removedNodes].filter((k) => k.nodeType === 1);
            if (x)
              try {
                ie.push(...J.filter((k) => k.matches(x))), ie.push(...J.flatMap((k) => [...k.querySelectorAll(x)]));
              } catch {
              }
            J.some((k) => {
              var Qe;
              return !!(!((Qe = k == null ? void 0 : k.contains) === null || Qe === void 0) && Qe.call(k, $)) && (be(!1), Y(!1), Re(null), K.current && clearTimeout(K.current), Q.current && clearTimeout(Q.current), !0);
            });
          }
          if (x)
            try {
              const J = [...F.addedNodes].filter((k) => k.nodeType === 1);
              le.push(...J.filter((k) => k.matches(x))), le.push(...J.flatMap((k) => [...k.querySelectorAll(x)]));
            } catch {
            }
        }
      }), (le.length || ie.length) && Le((F) => [...F.filter((J) => !ie.includes(J)), ...le]);
    });
    return I.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"], attributeOldValue: !0 }), () => {
      I.disconnect();
    };
  }, [t, l, N == null ? void 0 : N.anchorSelect, $]), d.useEffect(() => {
    Se();
  }, [Se]), d.useEffect(() => {
    if (!(B != null && B.current))
      return () => null;
    const u = new ResizeObserver(() => {
      setTimeout(() => Se());
    });
    return u.observe(B.current), () => {
      u.disconnect();
    };
  }, [W, B == null ? void 0 : B.current]), d.useEffect(() => {
    var u;
    const b = document.querySelector(`[id='${r}']`), x = [...he, b];
    $ && x.includes($) || Re((u = he[0]) !== null && u !== void 0 ? u : b);
  }, [r, he, $]), d.useEffect(() => (ue && Y(!0), () => {
    K.current && clearTimeout(K.current), Q.current && clearTimeout(Q.current);
  }), []), d.useEffect(() => {
    var u;
    let b = (u = N == null ? void 0 : N.anchorSelect) !== null && u !== void 0 ? u : l;
    if (!b && t && (b = `[data-tooltip-id='${t}']`), b)
      try {
        const x = Array.from(document.querySelectorAll(b));
        Le(x);
      } catch {
        Le([]);
      }
  }, [t, l, N == null ? void 0 : N.anchorSelect]);
  const re = (Me = N == null ? void 0 : N.content) !== null && Me !== void 0 ? Me : W, _e = q && Object.keys(ze).length > 0;
  return d.useImperativeHandle(e, () => ({ open: (u) => {
    if (u != null && u.anchorSelect)
      try {
        document.querySelector(u.anchorSelect);
      } catch {
        return void console.warn(`[react-tooltip] "${u.anchorSelect}" is not a valid CSS selector`);
      }
    He(u ?? null), u != null && u.delay ? Xe(u.delay) : Y(!0);
  }, close: (u) => {
    u != null && u.delay ? $e(u.delay) : Y(!1);
  }, activeAnchor: $, place: We, isOpen: !!(ke && !w && re && _e) })), ke && !w && re ? se.createElement(f, { id: t, role: bt, className: _t("react-tooltip", Be.tooltip, St.tooltip, St[i], o, `react-tooltip__place-${We}`, Be[_e ? "show" : "closing"], _e ? "react-tooltip__show" : "react-tooltip__closing", p === "fixed" && Be.fixed, S && Be.clickable), onTransitionEnd: (u) => {
    ge.current && clearTimeout(ge.current), q || u.propertyName !== "opacity" || (be(!1), He(null), C == null || C());
  }, style: { ...oe, ...ze, opacity: nt !== void 0 && _e ? nt : void 0 }, ref: z }, re, se.createElement(f, { className: _t("react-tooltip-arrow", Be.arrow, St.arrow, n, _ && Be.noArrow), style: { ...st, background: rt ? `linear-gradient(to right bottom, transparent 50%, ${rt} 50%)` : void 0 }, ref: Ce })) : null;
}, tn = ({ content: e }) => se.createElement("span", { dangerouslySetInnerHTML: { __html: e } }), Yt = (e, t) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(e, t), on = se.forwardRef(({ id: e, anchorId: t, anchorSelect: o, content: n, html: i, render: r, className: l, classNameArrow: s, variant: c = "dark", place: a = "top", offset: h = 10, wrapper: p = "div", children: y = null, events: f = ["hover"], openOnClick: m = !1, positionStrategy: g = "absolute", middlewares: E, delayShow: w = 0, delayHide: _ = 0, float: S = !1, hidden: R = !1, noArrow: O = !1, clickable: H = !1, closeOnEsc: L = !1, closeOnScroll: V = !1, closeOnResize: ee = !1, openEvents: ae, closeEvents: oe, globalCloseEvents: P, imperativeModeOnly: ne = !1, style: C, position: W, isOpen: B, defaultIsOpen: j = !1, disableStyleInjection: ue = !1, border: we, opacity: $, arrowColor: Re, setIsOpen: ot, afterShow: nt, afterHide: rt, role: bt = "tooltip" }, Me) => {
  const [z, Ce] = d.useState(n), [K, Q] = d.useState(i), [ge, We] = d.useState(a), [lt, ze] = d.useState(c), [it, st] = d.useState(h), [ct, q] = d.useState(w), [at, ke] = d.useState(_), [be, N] = d.useState(S), [He, Fe] = d.useState(R), [Ve, ut] = d.useState(p), [ft, Ke] = d.useState(f), [he, Le] = d.useState(g), [xe, Ne] = d.useState(null), [fe, Ye] = d.useState(null), qe = d.useRef(ue), { anchorRefs: U, activeAnchor: Y } = ro(e), Xe = (M) => M == null ? void 0 : M.getAttributeNames().reduce((X, v) => {
    var A;
    return v.startsWith("data-tooltip-") && (X[v.replace(/^data-tooltip-/, "")] = (A = M == null ? void 0 : M.getAttribute(v)) !== null && A !== void 0 ? A : null), X;
  }, {}), $e = (M) => {
    const X = { place: (v) => {
      var A;
      We((A = v) !== null && A !== void 0 ? A : a);
    }, content: (v) => {
      Ce(v ?? n);
    }, html: (v) => {
      Q(v ?? i);
    }, variant: (v) => {
      var A;
      ze((A = v) !== null && A !== void 0 ? A : c);
    }, offset: (v) => {
      st(v === null ? h : Number(v));
    }, wrapper: (v) => {
      var A;
      ut((A = v) !== null && A !== void 0 ? A : p);
    }, events: (v) => {
      const A = v == null ? void 0 : v.split(" ");
      Ke(A ?? f);
    }, "position-strategy": (v) => {
      var A;
      Le((A = v) !== null && A !== void 0 ? A : g);
    }, "delay-show": (v) => {
      q(v === null ? w : Number(v));
    }, "delay-hide": (v) => {
      ke(v === null ? _ : Number(v));
    }, float: (v) => {
      N(v === null ? S : v === "true");
    }, hidden: (v) => {
      Fe(v === null ? R : v === "true");
    }, "class-name": (v) => {
      Ne(v);
    } };
    Object.values(X).forEach((v) => v(null)), Object.entries(M).forEach(([v, A]) => {
      var te;
      (te = X[v]) === null || te === void 0 || te.call(X, A);
    });
  };
  d.useEffect(() => {
    Ce(n);
  }, [n]), d.useEffect(() => {
    Q(i);
  }, [i]), d.useEffect(() => {
    We(a);
  }, [a]), d.useEffect(() => {
    ze(c);
  }, [c]), d.useEffect(() => {
    st(h);
  }, [h]), d.useEffect(() => {
    q(w);
  }, [w]), d.useEffect(() => {
    ke(_);
  }, [_]), d.useEffect(() => {
    N(S);
  }, [S]), d.useEffect(() => {
    Fe(R);
  }, [R]), d.useEffect(() => {
    Le(g);
  }, [g]), d.useEffect(() => {
    qe.current !== ue && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [ue]), d.useEffect(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: ue === "core", disableBase: ue } }));
  }, []), d.useEffect(() => {
    var M;
    const X = new Set(U);
    let v = o;
    if (!v && e && (v = `[data-tooltip-id='${e}']`), v)
      try {
        document.querySelectorAll(v).forEach((re) => {
          X.add({ current: re });
        });
      } catch {
        console.warn(`[react-tooltip] "${v}" is not a valid CSS selector`);
      }
    const A = document.querySelector(`[id='${t}']`);
    if (A && X.add({ current: A }), !X.size)
      return () => null;
    const te = (M = fe ?? A) !== null && M !== void 0 ? M : Y.current, dt = new MutationObserver((re) => {
      re.forEach((_e) => {
        var u;
        if (!te || _e.type !== "attributes" || !(!((u = _e.attributeName) === null || u === void 0) && u.startsWith("data-tooltip-")))
          return;
        const b = Xe(te);
        $e(b);
      });
    }), Se = { attributes: !0, childList: !1, subtree: !1 };
    if (te) {
      const re = Xe(te);
      $e(re), dt.observe(te, Se);
    }
    return () => {
      dt.disconnect();
    };
  }, [U, Y, fe, t, o]), d.useEffect(() => {
    C != null && C.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), we && !Yt("border", `${we}`) && console.warn(`[react-tooltip] "${we}" is not a valid \`border\`.`), C != null && C.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), $ && !Yt("opacity", `${$}`) && console.warn(`[react-tooltip] "${$}" is not a valid \`opacity\`.`);
  }, []);
  let Ee = y;
  const De = d.useRef(null);
  if (r) {
    const M = r({ content: z ?? null, activeAnchor: fe });
    Ee = M ? se.createElement("div", { ref: De, className: "react-tooltip-content-wrapper" }, M) : null;
  } else
    z && (Ee = z);
  K && (Ee = se.createElement(tn, { content: K }));
  const Ge = { forwardRef: Me, id: e, anchorId: t, anchorSelect: o, className: _t(l, xe), classNameArrow: s, content: Ee, contentWrapperRef: De, place: ge, variant: lt, offset: it, wrapper: Ve, events: ft, openOnClick: m, positionStrategy: he, middlewares: E, delayShow: ct, delayHide: at, float: be, hidden: He, noArrow: O, clickable: H, closeOnEsc: L, closeOnScroll: V, closeOnResize: ee, openEvents: ae, closeEvents: oe, globalCloseEvents: P, imperativeModeOnly: ne, style: C, position: W, isOpen: B, defaultIsOpen: j, border: we, opacity: $, arrowColor: Re, setIsOpen: ot, afterShow: nt, afterHide: rt, activeAnchor: fe, setActiveAnchor: (M) => Ye(M), role: bt };
  return se.createElement(en, { ...Ge });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (e) => {
  e.detail.disableCore || Ht({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), e.detail.disableBase || Ht({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const lo = (e) => e, io = (e) => e, so = ({ place: e = "top", trigger: t = "hover", float: o = !1, shadow: n = !0, border: i = !1, children: r, style: l, ...s }) => {
  const c = r.find((y) => y.type === lo), a = r.find((y) => y.type === io), h = "tooltip-" + d.useId(), p = (y) => ({
    hover: null,
    focus: "focus",
    click: "click focus"
  })[y];
  return /* @__PURE__ */ se.createElement("span", { className: "cove-tooltip", style: l, ...s }, /* @__PURE__ */ se.createElement("a", { id: h, role: "dialog", tabIndex: 0, className: "cove-tooltip--target", "data-tooltip-float": o, "data-tooltip-place": e, "data-tooltip-events": p() }, c ? c.props.children : null), /* @__PURE__ */ se.createElement(
    on,
    {
      id: h,
      anchorId: h,
      className: "cove-tooltip__content" + (" place-" + e) + (o ? "" : " cove-tooltip__content--animated") + (t === "click" ? " interactive" : "") + (i ? " cove-tooltip--border" : "") + (n ? " has-shadow" : ""),
      globalEventOff: "click"
    },
    a ? a.props.children : null
  ));
};
so.Target = lo;
so.Content = io;
export {
  on as D,
  so as T,
  _t as c
};
