import { a as xo, j as ze } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as p, R as St } from "./storybook-index-f2fed736.es.js";
import { g as Eo } from "./storybook-_commonjsHelpers-c5d32002.es.js";
var eo = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function n() {
      for (var r = "", l = 0; l < arguments.length; l++) {
        var s = arguments[l];
        s && (r = i(r, o(s)));
      }
      return r;
    }
    function o(r) {
      if (typeof r == "string" || typeof r == "number")
        return r;
      if (typeof r != "object")
        return "";
      if (Array.isArray(r))
        return n.apply(null, r);
      if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]"))
        return r.toString();
      var l = "";
      for (var s in r)
        e.call(r, s) && r[s] && (l = i(l, s));
      return l;
    }
    function i(r, l) {
      return l ? r ? r + " " + l : r + l : r;
    }
    t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
  })();
})(eo);
var _o = eo.exports;
const Oe = /* @__PURE__ */ Eo(_o), Wt = Math.min, At = Math.max, pe = Math.round, de = Math.floor, ft = (t) => ({
  x: t,
  y: t
}), So = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ao = {
  start: "end",
  end: "start"
};
function Re(t, e, n) {
  return At(t, Wt(e, n));
}
function oe(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Rt(t) {
  return t.split("-")[0];
}
function ne(t) {
  return t.split("-")[1];
}
function oo(t) {
  return t === "x" ? "y" : "x";
}
function ke(t) {
  return t === "y" ? "height" : "width";
}
function Ot(t) {
  return ["top", "bottom"].includes(Rt(t)) ? "y" : "x";
}
function Ne(t) {
  return oo(Ot(t));
}
function Oo(t, e, n) {
  n === void 0 && (n = !1);
  const o = ne(t), i = Ne(t), r = ke(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = me(l)), [l, me(l)];
}
function Ro(t) {
  const e = me(t);
  return [Te(t), e, Te(e)];
}
function Te(t) {
  return t.replace(/start|end/g, (e) => Ao[e]);
}
function To(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function Co(t, e, n, o) {
  const i = ne(t);
  let r = To(Rt(t), n === "start", o);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(Te)))), r;
}
function me(t) {
  return t.replace(/left|right|bottom|top/g, (e) => So[e]);
}
function Lo(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function no(t) {
  return typeof t != "number" ? Lo(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function he(t) {
  const {
    x: e,
    y: n,
    width: o,
    height: i
  } = t;
  return {
    width: o,
    height: i,
    top: n,
    left: e,
    right: e + o,
    bottom: n + i,
    x: e,
    y: n
  };
}
function Ve(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = Ot(e), l = Ne(e), s = ke(l), c = Rt(e), a = r === "y", m = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, g = o[s] / 2 - i[s] / 2;
  let d;
  switch (c) {
    case "top":
      d = {
        x: m,
        y: o.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: m,
        y: o.y + o.height
      };
      break;
    case "right":
      d = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: o.x - i.width,
        y: f
      };
      break;
    default:
      d = {
        x: o.x,
        y: o.y
      };
  }
  switch (ne(e)) {
    case "start":
      d[l] -= g * (n && a ? -1 : 1);
      break;
    case "end":
      d[l] += g * (n && a ? -1 : 1);
      break;
  }
  return d;
}
const ko = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, s = r.filter(Boolean), c = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let a = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: m,
    y: f
  } = Ve(a, o, c), g = o, d = {}, h = 0;
  for (let w = 0; w < s.length; w++) {
    const {
      name: E,
      fn: b
    } = s[w], {
      x: _,
      y: S,
      data: T,
      reset: R
    } = await b({
      x: m,
      y: f,
      initialPlacement: o,
      placement: g,
      strategy: i,
      middlewareData: d,
      rects: a,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    m = _ ?? m, f = S ?? f, d = {
      ...d,
      [E]: {
        ...d[E],
        ...T
      }
    }, R && h <= 50 && (h++, typeof R == "object" && (R.placement && (g = R.placement), R.rects && (a = R.rects === !0 ? await l.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : R.rects), {
      x: m,
      y: f
    } = Ve(a, g, c)), w = -1);
  }
  return {
    x: m,
    y: f,
    placement: g,
    strategy: i,
    middlewareData: d
  };
};
async function ro(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: l,
    elements: s,
    strategy: c
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: f = "floating",
    altBoundary: g = !1,
    padding: d = 0
  } = oe(e, t), h = no(d), E = s[g ? f === "floating" ? "reference" : "floating" : f], b = he(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(E))) == null || n ? E : E.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(s.floating)),
    boundary: a,
    rootBoundary: m,
    strategy: c
  })), _ = f === "floating" ? {
    x: o,
    y: i,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, S = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(s.floating)), T = await (r.isElement == null ? void 0 : r.isElement(S)) ? await (r.getScale == null ? void 0 : r.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = he(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: _,
    offsetParent: S,
    strategy: c
  }) : _);
  return {
    top: (b.top - R.top + h.top) / T.y,
    bottom: (R.bottom - b.bottom + h.bottom) / T.y,
    left: (b.left - R.left + h.left) / T.x,
    right: (R.right - b.right + h.right) / T.x
  };
}
const No = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: r,
      platform: l,
      elements: s,
      middlewareData: c
    } = e, {
      element: a,
      padding: m = 0
    } = oe(t, e) || {};
    if (a == null)
      return {};
    const f = no(m), g = {
      x: n,
      y: o
    }, d = Ne(i), h = ke(d), w = await l.getDimensions(a), E = d === "y", b = E ? "top" : "left", _ = E ? "bottom" : "right", S = E ? "clientHeight" : "clientWidth", T = r.reference[h] + r.reference[d] - g[d] - r.floating[h], R = g[d] - r.reference[d], q = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(a));
    let C = q ? q[S] : 0;
    (!C || !await (l.isElement == null ? void 0 : l.isElement(q))) && (C = s.floating[S] || r.floating[h]);
    const Z = T / 2 - R / 2, K = C / 2 - w[h] / 2 - 1, X = Wt(f[b], K), st = Wt(f[_], K), G = X, ct = C - w[h] - st, N = C / 2 - w[h] / 2 + Z, I = Re(G, N, ct), Y = !c.arrow && ne(i) != null && N !== I && r.reference[h] / 2 - (N < G ? X : st) - w[h] / 2 < 0, M = Y ? N < G ? N - G : N - ct : 0;
    return {
      [d]: g[d] + M,
      data: {
        [d]: I,
        centerOffset: N - I - M,
        ...Y && {
          alignmentOffset: M
        }
      },
      reset: Y
    };
  }
}), Do = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        middlewareData: r,
        rects: l,
        initialPlacement: s,
        platform: c,
        elements: a
      } = e, {
        mainAxis: m = !0,
        crossAxis: f = !0,
        fallbackPlacements: g,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: w = !0,
        ...E
      } = oe(t, e);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const b = Rt(i), _ = Ot(s), S = Rt(s) === s, T = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), R = g || (S || !w ? [me(s)] : Ro(s)), q = h !== "none";
      !g && q && R.push(...Co(s, w, h, T));
      const C = [s, ...R], Z = await ro(e, E), K = [];
      let X = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (m && K.push(Z[b]), f) {
        const I = Oo(i, l, T);
        K.push(Z[I[0]], Z[I[1]]);
      }
      if (X = [...X, {
        placement: i,
        overflows: K
      }], !K.every((I) => I <= 0)) {
        var st, G;
        const I = (((st = r.flip) == null ? void 0 : st.index) || 0) + 1, Y = C[I];
        if (Y) {
          var ct;
          const P = f === "alignment" ? _ !== Ot(Y) : !1, F = ((ct = X[0]) == null ? void 0 : ct.overflows[0]) > 0;
          if (!P || F)
            return {
              data: {
                index: I,
                overflows: X
              },
              reset: {
                placement: Y
              }
            };
        }
        let M = (G = X.filter((P) => P.overflows[0] <= 0).sort((P, F) => P.overflows[1] - F.overflows[1])[0]) == null ? void 0 : G.placement;
        if (!M)
          switch (d) {
            case "bestFit": {
              var N;
              const P = (N = X.filter((F) => {
                if (q) {
                  const W = Ot(F.placement);
                  return W === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((W) => W > 0).reduce((W, D) => W + D, 0)]).sort((F, W) => F[1] - W[1])[0]) == null ? void 0 : N[0];
              P && (M = P);
              break;
            }
            case "initialPlacement":
              M = s;
              break;
          }
        if (i !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
async function Po(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Rt(n), s = ne(n), c = Ot(n) === "y", a = ["left", "top"].includes(l) ? -1 : 1, m = r && c ? -1 : 1, f = oe(e, t);
  let {
    mainAxis: g,
    crossAxis: d,
    alignmentAxis: h
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof h == "number" && (d = s === "end" ? h * -1 : h), c ? {
    x: d * m,
    y: g * a
  } : {
    x: g * a,
    y: d * m
  };
}
const $o = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: i,
        y: r,
        placement: l,
        middlewareData: s
      } = e, c = await Po(e, t);
      return l === ((n = s.offset) == null ? void 0 : n.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
        x: i + c.x,
        y: r + c.y,
        data: {
          ...c,
          placement: l
        }
      };
    }
  };
}, Bo = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
      } = e, {
        mainAxis: r = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (E) => {
            let {
              x: b,
              y: _
            } = E;
            return {
              x: b,
              y: _
            };
          }
        },
        ...c
      } = oe(t, e), a = {
        x: n,
        y: o
      }, m = await ro(e, c), f = Ot(Rt(i)), g = oo(f);
      let d = a[g], h = a[f];
      if (r) {
        const E = g === "y" ? "top" : "left", b = g === "y" ? "bottom" : "right", _ = d + m[E], S = d - m[b];
        d = Re(_, d, S);
      }
      if (l) {
        const E = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", _ = h + m[E], S = h - m[b];
        h = Re(_, h, S);
      }
      const w = s.fn({
        ...e,
        [g]: d,
        [f]: h
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - o,
          enabled: {
            [g]: r,
            [f]: l
          }
        }
      };
    }
  };
};
function ve() {
  return typeof window < "u";
}
function Vt(t) {
  return io(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Q(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function pt(t) {
  var e;
  return (e = (io(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function io(t) {
  return ve() ? t instanceof Node || t instanceof Q(t).Node : !1;
}
function it(t) {
  return ve() ? t instanceof Element || t instanceof Q(t).Element : !1;
}
function dt(t) {
  return ve() ? t instanceof HTMLElement || t instanceof Q(t).HTMLElement : !1;
}
function He(t) {
  return !ve() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Q(t).ShadowRoot;
}
function re(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = lt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Io(t) {
  return ["table", "td", "th"].includes(Vt(t));
}
function ye(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function De(t) {
  const e = Pe(), n = it(t) ? lt(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function jo(t) {
  let e = gt(t);
  for (; dt(e) && !zt(e); ) {
    if (De(e))
      return e;
    if (ye(e))
      return null;
    e = gt(e);
  }
  return null;
}
function Pe() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function zt(t) {
  return ["html", "body", "#document"].includes(Vt(t));
}
function lt(t) {
  return Q(t).getComputedStyle(t);
}
function ge(t) {
  return it(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function gt(t) {
  if (Vt(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    He(t) && t.host || // Fallback.
    pt(t)
  );
  return He(e) ? e.host : e;
}
function lo(t) {
  const e = gt(t);
  return zt(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : dt(e) && re(e) ? e : lo(e);
}
function ee(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = lo(t), r = i === ((o = t.ownerDocument) == null ? void 0 : o.body), l = Q(i);
  if (r) {
    const s = Ce(l);
    return e.concat(l, l.visualViewport || [], re(i) ? i : [], s && n ? ee(s) : []);
  }
  return e.concat(i, ee(i, [], n));
}
function Ce(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function so(t) {
  const e = lt(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = dt(t), r = i ? t.offsetWidth : n, l = i ? t.offsetHeight : o, s = pe(n) !== r || pe(o) !== l;
  return s && (n = r, o = l), {
    width: n,
    height: o,
    $: s
  };
}
function $e(t) {
  return it(t) ? t : t.contextElement;
}
function Ft(t) {
  const e = $e(t);
  if (!dt(e))
    return ft(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: r
  } = so(e);
  let l = (r ? pe(n.width) : n.width) / o, s = (r ? pe(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const Mo = /* @__PURE__ */ ft(0);
function co(t) {
  const e = Q(t);
  return !Pe() || !e.visualViewport ? Mo : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Fo(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== Q(t) ? !1 : e;
}
function Tt(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), r = $e(t);
  let l = ft(1);
  e && (o ? it(o) && (l = Ft(o)) : l = Ft(t));
  const s = Fo(r, n, o) ? co(r) : ft(0);
  let c = (i.left + s.x) / l.x, a = (i.top + s.y) / l.y, m = i.width / l.x, f = i.height / l.y;
  if (r) {
    const g = Q(r), d = o && it(o) ? Q(o) : o;
    let h = g, w = Ce(h);
    for (; w && o && d !== h; ) {
      const E = Ft(w), b = w.getBoundingClientRect(), _ = lt(w), S = b.left + (w.clientLeft + parseFloat(_.paddingLeft)) * E.x, T = b.top + (w.clientTop + parseFloat(_.paddingTop)) * E.y;
      c *= E.x, a *= E.y, m *= E.x, f *= E.y, c += S, a += T, h = Q(w), w = Ce(h);
    }
  }
  return he({
    width: m,
    height: f,
    x: c,
    y: a
  });
}
function Be(t, e) {
  const n = ge(t).scrollLeft;
  return e ? e.left + n : Tt(pt(t)).left + n;
}
function ao(t, e, n) {
  n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = o.left + e.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Be(t, o)
  )), r = o.top + e.scrollTop;
  return {
    x: i,
    y: r
  };
}
function Wo(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const r = i === "fixed", l = pt(o), s = e ? ye(e.floating) : !1;
  if (o === l || s && r)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = ft(1);
  const m = ft(0), f = dt(o);
  if ((f || !f && !r) && ((Vt(o) !== "body" || re(l)) && (c = ge(o)), dt(o))) {
    const d = Tt(o);
    a = Ft(o), m.x = d.x + o.clientLeft, m.y = d.y + o.clientTop;
  }
  const g = l && !f && !r ? ao(l, c, !0) : ft(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - c.scrollLeft * a.x + m.x + g.x,
    y: n.y * a.y - c.scrollTop * a.y + m.y + g.y
  };
}
function zo(t) {
  return Array.from(t.getClientRects());
}
function Vo(t) {
  const e = pt(t), n = ge(t), o = t.ownerDocument.body, i = At(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), r = At(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Be(t);
  const s = -n.scrollTop;
  return lt(o).direction === "rtl" && (l += At(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: r,
    x: l,
    y: s
  };
}
function Ho(t, e) {
  const n = Q(t), o = pt(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, s = 0, c = 0;
  if (i) {
    r = i.width, l = i.height;
    const a = Pe();
    (!a || a && e === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: s,
    y: c
  };
}
function qo(t, e) {
  const n = Tt(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = dt(t) ? Ft(t) : ft(1), l = t.clientWidth * r.x, s = t.clientHeight * r.y, c = i * r.x, a = o * r.y;
  return {
    width: l,
    height: s,
    x: c,
    y: a
  };
}
function qe(t, e, n) {
  let o;
  if (e === "viewport")
    o = Ho(t, n);
  else if (e === "document")
    o = Vo(pt(t));
  else if (it(e))
    o = qo(e, n);
  else {
    const i = co(t);
    o = {
      x: e.x - i.x,
      y: e.y - i.y,
      width: e.width,
      height: e.height
    };
  }
  return he(o);
}
function uo(t, e) {
  const n = gt(t);
  return n === e || !it(n) || zt(n) ? !1 : lt(n).position === "fixed" || uo(n, e);
}
function Ko(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = ee(t, [], !1).filter((s) => it(s) && Vt(s) !== "body"), i = null;
  const r = lt(t).position === "fixed";
  let l = r ? gt(t) : t;
  for (; it(l) && !zt(l); ) {
    const s = lt(l), c = De(l);
    !c && s.position === "fixed" && (i = null), (r ? !c && !i : !c && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || re(l) && !c && uo(t, l)) ? o = o.filter((m) => m !== l) : i = s, l = gt(l);
  }
  return e.set(t, o), o;
}
function Xo(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? ye(e) ? [] : Ko(e, this._c) : [].concat(n), o], s = l[0], c = l.reduce((a, m) => {
    const f = qe(e, m, i);
    return a.top = At(f.top, a.top), a.right = Wt(f.right, a.right), a.bottom = Wt(f.bottom, a.bottom), a.left = At(f.left, a.left), a;
  }, qe(e, s, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Yo(t) {
  const {
    width: e,
    height: n
  } = so(t);
  return {
    width: e,
    height: n
  };
}
function Uo(t, e, n) {
  const o = dt(e), i = pt(e), r = n === "fixed", l = Tt(t, !0, r, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ft(0);
  function a() {
    c.x = Be(i);
  }
  if (o || !o && !r)
    if ((Vt(e) !== "body" || re(i)) && (s = ge(e)), o) {
      const d = Tt(e, !0, r, e);
      c.x = d.x + e.clientLeft, c.y = d.y + e.clientTop;
    } else
      i && a();
  r && !o && i && a();
  const m = i && !o && !r ? ao(i, s) : ft(0), f = l.left + s.scrollLeft - c.x - m.x, g = l.top + s.scrollTop - c.y - m.y;
  return {
    x: f,
    y: g,
    width: l.width,
    height: l.height
  };
}
function Se(t) {
  return lt(t).position === "static";
}
function Ke(t, e) {
  if (!dt(t) || lt(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return pt(t) === n && (n = n.ownerDocument.body), n;
}
function fo(t, e) {
  const n = Q(t);
  if (ye(t))
    return n;
  if (!dt(t)) {
    let i = gt(t);
    for (; i && !zt(i); ) {
      if (it(i) && !Se(i))
        return i;
      i = gt(i);
    }
    return n;
  }
  let o = Ke(t, e);
  for (; o && Io(o) && Se(o); )
    o = Ke(o, e);
  return o && zt(o) && Se(o) && !De(o) ? n : o || jo(t) || n;
}
const Jo = async function(t) {
  const e = this.getOffsetParent || fo, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: Uo(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Qo(t) {
  return lt(t).direction === "rtl";
}
const Zo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Wo,
  getDocumentElement: pt,
  getClippingRect: Xo,
  getOffsetParent: fo,
  getElementRects: Jo,
  getClientRects: zo,
  getDimensions: Yo,
  getScale: Ft,
  isElement: it,
  isRTL: Qo
};
function po(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Go(t, e) {
  let n = null, o;
  const i = pt(t);
  function r() {
    var s;
    clearTimeout(o), (s = n) == null || s.disconnect(), n = null;
  }
  function l(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), r();
    const a = t.getBoundingClientRect(), {
      left: m,
      top: f,
      width: g,
      height: d
    } = a;
    if (s || e(), !g || !d)
      return;
    const h = de(f), w = de(i.clientWidth - (m + g)), E = de(i.clientHeight - (f + d)), b = de(m), S = {
      rootMargin: -h + "px " + -w + "px " + -E + "px " + -b + "px",
      threshold: At(0, Wt(1, c)) || 1
    };
    let T = !0;
    function R(q) {
      const C = q[0].intersectionRatio;
      if (C !== c) {
        if (!T)
          return l();
        C ? l(!1, C) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !po(a, t.getBoundingClientRect()) && l(), T = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...S,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, S);
    }
    n.observe(t);
  }
  return l(!0), r;
}
function tn(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = o, a = $e(t), m = i || r ? [...a ? ee(a) : [], ...ee(e)] : [];
  m.forEach((b) => {
    i && b.addEventListener("scroll", n, {
      passive: !0
    }), r && b.addEventListener("resize", n);
  });
  const f = a && s ? Go(a, n) : null;
  let g = -1, d = null;
  l && (d = new ResizeObserver((b) => {
    let [_] = b;
    _ && _.target === a && d && (d.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var S;
      (S = d) == null || S.observe(e);
    })), n();
  }), a && !c && d.observe(a), d.observe(e));
  let h, w = c ? Tt(t) : null;
  c && E();
  function E() {
    const b = Tt(t);
    w && !po(w, b) && n(), w = b, h = requestAnimationFrame(E);
  }
  return n(), () => {
    var b;
    m.forEach((_) => {
      i && _.removeEventListener("scroll", n), r && _.removeEventListener("resize", n);
    }), f == null || f(), (b = d) == null || b.disconnect(), d = null, c && cancelAnimationFrame(h);
  };
}
const en = $o, on = Bo, nn = Do, rn = No, Xe = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Zo,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return ko(t, e, {
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
const ln = "react-tooltip-core-styles", sn = "react-tooltip-base-styles", Ye = { core: !1, base: !1 };
function Ue({ css: t, id: e = sn, type: n = "base", ref: o }) {
  var i, r;
  if (!t || typeof document > "u" || Ye[n] || n === "core" && typeof process < "u" && (!((i = process == null ? void 0 : process.env) === null || i === void 0) && i.REACT_TOOLTIP_DISABLE_CORE_STYLES) || n !== "base" && typeof process < "u" && (!((r = process == null ? void 0 : process.env) === null || r === void 0) && r.REACT_TOOLTIP_DISABLE_BASE_STYLES))
    return;
  n === "core" && (e = ln), o || (o = {});
  const { insertAt: l } = o;
  if (document.getElementById(e))
    return;
  const s = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
  c.id = e, c.type = "text/css", l === "top" && s.firstChild ? s.insertBefore(c, s.firstChild) : s.appendChild(c), c.styleSheet ? c.styleSheet.cssText = t : c.appendChild(document.createTextNode(t)), Ye[n] = !0;
}
const Je = async ({ elementReference: t = null, tooltipReference: e = null, tooltipArrowReference: n = null, place: o = "top", offset: i = 10, strategy: r = "absolute", middlewares: l = [en(Number(i)), nn({ fallbackAxisSideDirection: "start" }), on({ padding: 5 })], border: s }) => {
  if (!t)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: o };
  if (e === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: o };
  const c = l;
  return n ? (c.push(rn({ element: n, padding: 5 })), Xe(t, e, { placement: o, strategy: r, middleware: c }).then(({ x: a, y: m, placement: f, middlewareData: g }) => {
    var d, h;
    const w = { left: `${a}px`, top: `${m}px`, border: s }, { x: E, y: b } = (d = g.arrow) !== null && d !== void 0 ? d : { x: 0, y: 0 }, _ = (h = { top: "bottom", right: "left", bottom: "top", left: "right" }[f.split("-")[0]]) !== null && h !== void 0 ? h : "bottom", S = s && { borderBottom: s, borderRight: s };
    let T = 0;
    if (s) {
      const R = `${s}`.match(/(\d+)px/);
      T = R != null && R[1] ? Number(R[1]) : 1;
    }
    return { tooltipStyles: w, tooltipArrowStyles: { left: E != null ? `${E}px` : "", top: b != null ? `${b}px` : "", right: "", bottom: "", ...S, [_]: `-${4 + T}px` }, place: f };
  })) : Xe(t, e, { placement: "bottom", strategy: r, middleware: c }).then(({ x: a, y: m, placement: f }) => ({ tooltipStyles: { left: `${a}px`, top: `${m}px` }, tooltipArrowStyles: {}, place: f }));
}, Qe = (t, e) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(t, e), Ze = (t, e, n) => {
  let o = null;
  const i = function(...r) {
    const l = () => {
      o = null, n || t.apply(this, r);
    };
    n && !o && (t.apply(this, r), o = setTimeout(l, e)), n || (o && clearTimeout(o), o = setTimeout(l, e));
  };
  return i.cancel = () => {
    o && (clearTimeout(o), o = null);
  }, i;
}, Ge = (t) => t !== null && !Array.isArray(t) && typeof t == "object", Le = (t, e) => {
  if (t === e)
    return !0;
  if (Array.isArray(t) && Array.isArray(e))
    return t.length === e.length && t.every((i, r) => Le(i, e[r]));
  if (Array.isArray(t) !== Array.isArray(e))
    return !1;
  if (!Ge(t) || !Ge(e))
    return t === e;
  const n = Object.keys(t), o = Object.keys(e);
  return n.length === o.length && n.every((i) => Le(t[i], e[i]));
}, cn = (t) => {
  if (!(t instanceof HTMLElement || t instanceof SVGElement))
    return !1;
  const e = getComputedStyle(t);
  return ["overflow", "overflow-x", "overflow-y"].some((n) => {
    const o = e.getPropertyValue(n);
    return o === "auto" || o === "scroll";
  });
}, to = (t) => {
  if (!t)
    return null;
  let e = t.parentElement;
  for (; e; ) {
    if (cn(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, an = typeof window < "u" ? p.useLayoutEffect : p.useEffect, ot = (t) => {
  t.current && (clearTimeout(t.current), t.current = null);
}, un = "DEFAULT_TOOLTIP_ID", fn = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, dn = p.createContext({ getTooltipData: () => fn });
function mo(t = un) {
  return p.useContext(dn).getTooltipData(t);
}
var Mt = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, Ae = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const pn = ({ forwardRef: t, id: e, className: n, classNameArrow: o, variant: i = "dark", anchorId: r, anchorSelect: l, place: s = "top", offset: c = 10, events: a = ["hover"], openOnClick: m = !1, positionStrategy: f = "absolute", middlewares: g, wrapper: d, delayShow: h = 0, delayHide: w = 0, float: E = !1, hidden: b = !1, noArrow: _ = !1, clickable: S = !1, closeOnEsc: T = !1, closeOnScroll: R = !1, closeOnResize: q = !1, openEvents: C, closeEvents: Z, globalCloseEvents: K, imperativeModeOnly: X, style: st, position: G, afterShow: ct, afterHide: N, disableTooltip: I, content: Y, contentWrapperRef: M, isOpen: P, defaultIsOpen: F = !1, setIsOpen: W, activeAnchor: D, setActiveAnchor: Ct, border: ie, opacity: le, arrowColor: se, role: we = "tooltip" }) => {
  var Ht;
  const V = p.useRef(null), Lt = p.useRef(null), nt = p.useRef(null), ht = p.useRef(null), qt = p.useRef(null), [vt, be] = p.useState({ tooltipStyles: {}, tooltipArrowStyles: {}, place: s }), [U, ce] = p.useState(!1), [wt, bt] = p.useState(!1), [k, Kt] = p.useState(null), Xt = p.useRef(!1), Yt = p.useRef(null), { anchorRefs: Ut, setActiveAnchor: ae } = mo(e), kt = p.useRef(!1), [yt, Jt] = p.useState([]), xt = p.useRef(!1), Nt = m || a.includes("click"), xe = Nt || (C == null ? void 0 : C.click) || (C == null ? void 0 : C.dblclick) || (C == null ? void 0 : C.mousedown), Dt = C ? { ...C } : { mouseover: !0, focus: !0, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 };
  !C && Nt && Object.assign(Dt, { mouseenter: !1, focus: !1, mouseover: !1, click: !0 });
  const Et = Z ? { ...Z } : { mouseout: !0, blur: !0, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 };
  !Z && Nt && Object.assign(Et, { mouseleave: !1, blur: !1, mouseout: !1 });
  const rt = K ? { ...K } : { escape: T || !1, scroll: R || !1, resize: q || !1, clickOutsideAnchor: xe || !1 };
  X && (Object.assign(Dt, { mouseover: !1, focus: !1, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(Et, { mouseout: !1, blur: !1, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(rt, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), an(() => (xt.current = !0, () => {
    xt.current = !1;
  }), []);
  const $ = (u) => {
    xt.current && (u && bt(!0), setTimeout(() => {
      xt.current && (W == null || W(u), P === void 0 && ce(u));
    }, 10));
  };
  p.useEffect(() => {
    if (P === void 0)
      return () => null;
    P && bt(!0);
    const u = setTimeout(() => {
      ce(P);
    }, 10);
    return () => {
      clearTimeout(u);
    };
  }, [P]), p.useEffect(() => {
    if (U !== Xt.current)
      if (ot(qt), Xt.current = U, U)
        ct == null || ct();
      else {
        const u = ((y) => {
          const x = y.match(/^([\d.]+)(ms|s)$/);
          if (!x)
            return 0;
          const [, B, z] = x;
          return Number(B) * (z === "ms" ? 1 : 1e3);
        })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
        qt.current = setTimeout(() => {
          bt(!1), Kt(null), N == null || N();
        }, u + 25);
      }
  }, [U]);
  const ue = (u) => {
    be((y) => Le(y, u) ? y : u);
  }, Qt = (u = h) => {
    ot(nt), wt ? $(!0) : nt.current = setTimeout(() => {
      $(!0);
    }, u);
  }, Pt = (u = w) => {
    ot(ht), ht.current = setTimeout(() => {
      kt.current || $(!1);
    }, u);
  }, Zt = (u) => {
    var y;
    if (!u)
      return;
    const x = (y = u.currentTarget) !== null && y !== void 0 ? y : u.target;
    if (!(x != null && x.isConnected))
      return Ct(null), void ae({ current: null });
    h ? Qt() : $(!0), Ct(x), ae({ current: x }), ot(ht);
  }, $t = () => {
    S ? Pt(w || 100) : w ? Pt() : $(!1), ot(nt);
  }, Bt = ({ x: u, y }) => {
    var x;
    const B = { getBoundingClientRect: () => ({ x: u, y, width: 0, height: 0, top: y, left: u, right: u, bottom: y }) };
    Je({ place: (x = k == null ? void 0 : k.place) !== null && x !== void 0 ? x : s, offset: c, elementReference: B, tooltipReference: V.current, tooltipArrowReference: Lt.current, strategy: f, middlewares: g, border: ie }).then((z) => {
      ue(z);
    });
  }, It = (u) => {
    if (!u)
      return;
    const y = u, x = { x: y.clientX, y: y.clientY };
    Bt(x), Yt.current = x;
  }, Gt = (u) => {
    var y;
    if (!U)
      return;
    const x = u.target;
    x.isConnected && (!((y = V.current) === null || y === void 0) && y.contains(x) || [document.querySelector(`[id='${r}']`), ...yt].some((B) => B == null ? void 0 : B.contains(x)) || ($(!1), ot(nt)));
  }, fe = Ze(Zt, 50, !0), j = Ze($t, 50, !0), tt = (u) => {
    j.cancel(), fe(u);
  }, v = () => {
    fe.cancel(), j();
  }, A = p.useCallback(() => {
    var u, y;
    const x = (u = k == null ? void 0 : k.position) !== null && u !== void 0 ? u : G;
    x ? Bt(x) : E ? Yt.current && Bt(Yt.current) : D != null && D.isConnected && Je({ place: (y = k == null ? void 0 : k.place) !== null && y !== void 0 ? y : s, offset: c, elementReference: D, tooltipReference: V.current, tooltipArrowReference: Lt.current, strategy: f, middlewares: g, border: ie }).then((B) => {
      xt.current && ue(B);
    });
  }, [U, D, Y, st, s, k == null ? void 0 : k.place, c, f, G, k == null ? void 0 : k.position, E]);
  p.useEffect(() => {
    var u, y;
    const x = new Set(Ut);
    yt.forEach((O) => {
      I != null && I(O) || x.add({ current: O });
    });
    const B = document.querySelector(`[id='${r}']`);
    B && !(I != null && I(B)) && x.add({ current: B });
    const z = () => {
      $(!1);
    }, at = to(D), ut = to(V.current);
    rt.scroll && (window.addEventListener("scroll", z), at == null || at.addEventListener("scroll", z), ut == null || ut.addEventListener("scroll", z));
    let H = null;
    rt.resize ? window.addEventListener("resize", z) : D && V.current && (H = tn(D, V.current, A, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const et = (O) => {
      O.key === "Escape" && $(!1);
    };
    rt.escape && window.addEventListener("keydown", et), rt.clickOutsideAnchor && window.addEventListener("click", Gt);
    const L = [], jt = (O) => !!(O != null && O.target && (D != null && D.contains(O.target))), go = (O) => {
      U && jt(O) || Zt(O);
    }, wo = (O) => {
      U && jt(O) && $t();
    }, Ie = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"], je = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(Dt).forEach(([O, mt]) => {
      mt && (Ie.includes(O) ? L.push({ event: O, listener: tt }) : je.includes(O) && L.push({ event: O, listener: go }));
    }), Object.entries(Et).forEach(([O, mt]) => {
      mt && (Ie.includes(O) ? L.push({ event: O, listener: v }) : je.includes(O) && L.push({ event: O, listener: wo }));
    }), E && L.push({ event: "pointermove", listener: It });
    const Me = () => {
      kt.current = !0;
    }, Fe = () => {
      kt.current = !1, $t();
    }, We = S && (Et.mouseout || Et.mouseleave);
    return We && ((u = V.current) === null || u === void 0 || u.addEventListener("mouseover", Me), (y = V.current) === null || y === void 0 || y.addEventListener("mouseout", Fe)), L.forEach(({ event: O, listener: mt }) => {
      x.forEach((Ee) => {
        var te;
        (te = Ee.current) === null || te === void 0 || te.addEventListener(O, mt);
      });
    }), () => {
      var O, mt;
      rt.scroll && (window.removeEventListener("scroll", z), at == null || at.removeEventListener("scroll", z), ut == null || ut.removeEventListener("scroll", z)), rt.resize ? window.removeEventListener("resize", z) : H == null || H(), rt.clickOutsideAnchor && window.removeEventListener("click", Gt), rt.escape && window.removeEventListener("keydown", et), We && ((O = V.current) === null || O === void 0 || O.removeEventListener("mouseover", Me), (mt = V.current) === null || mt === void 0 || mt.removeEventListener("mouseout", Fe)), L.forEach(({ event: Ee, listener: te }) => {
        x.forEach((bo) => {
          var _e;
          (_e = bo.current) === null || _e === void 0 || _e.removeEventListener(Ee, te);
        });
      });
    };
  }, [D, A, wt, Ut, yt, C, Z, K, Nt, h, w]), p.useEffect(() => {
    var u, y;
    let x = (y = (u = k == null ? void 0 : k.anchorSelect) !== null && u !== void 0 ? u : l) !== null && y !== void 0 ? y : "";
    !x && e && (x = `[data-tooltip-id='${e.replace(/'/g, "\\'")}']`);
    const B = new MutationObserver((z) => {
      const at = [], ut = [];
      z.forEach((H) => {
        if (H.type === "attributes" && H.attributeName === "data-tooltip-id" && (H.target.getAttribute("data-tooltip-id") === e ? at.push(H.target) : H.oldValue === e && ut.push(H.target)), H.type === "childList") {
          if (D) {
            const et = [...H.removedNodes].filter((L) => L.nodeType === 1);
            if (x)
              try {
                ut.push(...et.filter((L) => L.matches(x))), ut.push(...et.flatMap((L) => [...L.querySelectorAll(x)]));
              } catch {
              }
            et.some((L) => {
              var jt;
              return !!(!((jt = L == null ? void 0 : L.contains) === null || jt === void 0) && jt.call(L, D)) && (bt(!1), $(!1), Ct(null), ot(nt), ot(ht), !0);
            });
          }
          if (x)
            try {
              const et = [...H.addedNodes].filter((L) => L.nodeType === 1);
              at.push(...et.filter((L) => L.matches(x))), at.push(...et.flatMap((L) => [...L.querySelectorAll(x)]));
            } catch {
            }
        }
      }), (at.length || ut.length) && Jt((H) => [...H.filter((et) => !ut.includes(et)), ...at]);
    });
    return B.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"], attributeOldValue: !0 }), () => {
      B.disconnect();
    };
  }, [e, l, k == null ? void 0 : k.anchorSelect, D]), p.useEffect(() => {
    A();
  }, [A]), p.useEffect(() => {
    if (!(M != null && M.current))
      return () => null;
    const u = new ResizeObserver(() => {
      setTimeout(() => A());
    });
    return u.observe(M.current), () => {
      u.disconnect();
    };
  }, [Y, M == null ? void 0 : M.current]), p.useEffect(() => {
    var u;
    const y = document.querySelector(`[id='${r}']`), x = [...yt, y];
    D && x.includes(D) || Ct((u = yt[0]) !== null && u !== void 0 ? u : y);
  }, [r, yt, D]), p.useEffect(() => (F && $(!0), () => {
    ot(nt), ot(ht);
  }), []), p.useEffect(() => {
    var u;
    let y = (u = k == null ? void 0 : k.anchorSelect) !== null && u !== void 0 ? u : l;
    if (!y && e && (y = `[data-tooltip-id='${e.replace(/'/g, "\\'")}']`), y)
      try {
        const x = Array.from(document.querySelectorAll(y));
        Jt(x);
      } catch {
        Jt([]);
      }
  }, [e, l, k == null ? void 0 : k.anchorSelect]), p.useEffect(() => {
    nt.current && (ot(nt), Qt(h));
  }, [h]);
  const J = (Ht = k == null ? void 0 : k.content) !== null && Ht !== void 0 ? Ht : Y, _t = U && Object.keys(vt.tooltipStyles).length > 0;
  return p.useImperativeHandle(t, () => ({ open: (u) => {
    if (u != null && u.anchorSelect)
      try {
        document.querySelector(u.anchorSelect);
      } catch {
        return void console.warn(`[react-tooltip] "${u.anchorSelect}" is not a valid CSS selector`);
      }
    Kt(u ?? null), u != null && u.delay ? Qt(u.delay) : $(!0);
  }, close: (u) => {
    u != null && u.delay ? Pt(u.delay) : $(!1);
  }, activeAnchor: D, place: vt.place, isOpen: !!(wt && !b && J && _t) })), wt && !b && J ? St.createElement(d, { id: e, role: we, className: Oe("react-tooltip", Mt.tooltip, Ae.tooltip, Ae[i], n, `react-tooltip__place-${vt.place}`, Mt[_t ? "show" : "closing"], _t ? "react-tooltip__show" : "react-tooltip__closing", f === "fixed" && Mt.fixed, S && Mt.clickable), onTransitionEnd: (u) => {
    ot(qt), U || u.propertyName !== "opacity" || (bt(!1), Kt(null), N == null || N());
  }, style: { ...st, ...vt.tooltipStyles, opacity: le !== void 0 && _t ? le : void 0 }, ref: V }, J, St.createElement(d, { className: Oe("react-tooltip-arrow", Mt.arrow, Ae.arrow, o, _ && Mt.noArrow), style: { ...vt.tooltipArrowStyles, background: se ? `linear-gradient(to right bottom, transparent 50%, ${se} 50%)` : void 0 }, ref: Lt })) : null;
}, mn = ({ content: t }) => St.createElement("span", { dangerouslySetInnerHTML: { __html: t } }), hn = St.forwardRef(({ id: t, anchorId: e, anchorSelect: n, content: o, html: i, render: r, className: l, classNameArrow: s, variant: c = "dark", place: a = "top", offset: m = 10, wrapper: f = "div", children: g = null, events: d = ["hover"], openOnClick: h = !1, positionStrategy: w = "absolute", middlewares: E, delayShow: b = 0, delayHide: _ = 0, float: S = !1, hidden: T = !1, noArrow: R = !1, clickable: q = !1, closeOnEsc: C = !1, closeOnScroll: Z = !1, closeOnResize: K = !1, openEvents: X, closeEvents: st, globalCloseEvents: G, imperativeModeOnly: ct = !1, style: N, position: I, isOpen: Y, defaultIsOpen: M = !1, disableStyleInjection: P = !1, border: F, opacity: W, arrowColor: D, setIsOpen: Ct, afterShow: ie, afterHide: le, disableTooltip: se, role: we = "tooltip" }, Ht) => {
  const [V, Lt] = p.useState(o), [nt, ht] = p.useState(i), [qt, vt] = p.useState(a), [be, U] = p.useState(c), [ce, wt] = p.useState(m), [bt, k] = p.useState(b), [Kt, Xt] = p.useState(_), [Yt, Ut] = p.useState(S), [ae, kt] = p.useState(T), [yt, Jt] = p.useState(f), [xt, Nt] = p.useState(d), [xe, Dt] = p.useState(w), [Et, rt] = p.useState(null), [$, ue] = p.useState(null), Qt = p.useRef(P), { anchorRefs: Pt, activeAnchor: Zt } = mo(t), $t = (j) => j == null ? void 0 : j.getAttributeNames().reduce((tt, v) => {
    var A;
    return v.startsWith("data-tooltip-") && (tt[v.replace(/^data-tooltip-/, "")] = (A = j == null ? void 0 : j.getAttribute(v)) !== null && A !== void 0 ? A : null), tt;
  }, {}), Bt = (j) => {
    const tt = { place: (v) => {
      var A;
      vt((A = v) !== null && A !== void 0 ? A : a);
    }, content: (v) => {
      Lt(v ?? o);
    }, html: (v) => {
      ht(v ?? i);
    }, variant: (v) => {
      var A;
      U((A = v) !== null && A !== void 0 ? A : c);
    }, offset: (v) => {
      wt(v === null ? m : Number(v));
    }, wrapper: (v) => {
      var A;
      Jt((A = v) !== null && A !== void 0 ? A : f);
    }, events: (v) => {
      const A = v == null ? void 0 : v.split(" ");
      Nt(A ?? d);
    }, "position-strategy": (v) => {
      var A;
      Dt((A = v) !== null && A !== void 0 ? A : w);
    }, "delay-show": (v) => {
      k(v === null ? b : Number(v));
    }, "delay-hide": (v) => {
      Xt(v === null ? _ : Number(v));
    }, float: (v) => {
      Ut(v === null ? S : v === "true");
    }, hidden: (v) => {
      kt(v === null ? T : v === "true");
    }, "class-name": (v) => {
      rt(v);
    } };
    Object.values(tt).forEach((v) => v(null)), Object.entries(j).forEach(([v, A]) => {
      var J;
      (J = tt[v]) === null || J === void 0 || J.call(tt, A);
    });
  };
  p.useEffect(() => {
    Lt(o);
  }, [o]), p.useEffect(() => {
    ht(i);
  }, [i]), p.useEffect(() => {
    vt(a);
  }, [a]), p.useEffect(() => {
    U(c);
  }, [c]), p.useEffect(() => {
    wt(m);
  }, [m]), p.useEffect(() => {
    k(b);
  }, [b]), p.useEffect(() => {
    Xt(_);
  }, [_]), p.useEffect(() => {
    Ut(S);
  }, [S]), p.useEffect(() => {
    kt(T);
  }, [T]), p.useEffect(() => {
    Dt(w);
  }, [w]), p.useEffect(() => {
    Qt.current !== P && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [P]), p.useEffect(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: P === "core", disableBase: P } }));
  }, []), p.useEffect(() => {
    var j;
    const tt = new Set(Pt);
    let v = n;
    if (!v && t && (v = `[data-tooltip-id='${t.replace(/'/g, "\\'")}']`), v)
      try {
        document.querySelectorAll(v).forEach((y) => {
          tt.add({ current: y });
        });
      } catch {
        console.warn(`[react-tooltip] "${v}" is not a valid CSS selector`);
      }
    const A = document.querySelector(`[id='${e}']`);
    if (A && tt.add({ current: A }), !tt.size)
      return () => null;
    const J = (j = $ ?? A) !== null && j !== void 0 ? j : Zt.current, _t = new MutationObserver((y) => {
      y.forEach((x) => {
        var B;
        if (!J || x.type !== "attributes" || !(!((B = x.attributeName) === null || B === void 0) && B.startsWith("data-tooltip-")))
          return;
        const z = $t(J);
        Bt(z);
      });
    }), u = { attributes: !0, childList: !1, subtree: !1 };
    if (J) {
      const y = $t(J);
      Bt(y), _t.observe(J, u);
    }
    return () => {
      _t.disconnect();
    };
  }, [Pt, Zt, $, e, n]), p.useEffect(() => {
    N != null && N.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), F && !Qe("border", `${F}`) && console.warn(`[react-tooltip] "${F}" is not a valid \`border\`.`), N != null && N.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), W && !Qe("opacity", `${W}`) && console.warn(`[react-tooltip] "${W}" is not a valid \`opacity\`.`);
  }, []);
  let It = g;
  const Gt = p.useRef(null);
  if (r) {
    const j = r({ content: ($ == null ? void 0 : $.getAttribute("data-tooltip-content")) || V || null, activeAnchor: $ });
    It = j ? St.createElement("div", { ref: Gt, className: "react-tooltip-content-wrapper" }, j) : null;
  } else
    V && (It = V);
  nt && (It = St.createElement(mn, { content: nt }));
  const fe = { forwardRef: Ht, id: t, anchorId: e, anchorSelect: n, className: Oe(l, Et), classNameArrow: s, content: It, contentWrapperRef: Gt, place: qt, variant: be, offset: ce, wrapper: yt, events: xt, openOnClick: h, positionStrategy: xe, middlewares: E, delayShow: bt, delayHide: Kt, float: Yt, hidden: ae, noArrow: R, clickable: q, closeOnEsc: C, closeOnScroll: Z, closeOnResize: K, openEvents: X, closeEvents: st, globalCloseEvents: G, imperativeModeOnly: ct, style: N, position: I, isOpen: Y, defaultIsOpen: M, border: F, opacity: W, arrowColor: D, setIsOpen: Ct, afterShow: ie, afterHide: le, disableTooltip: se, activeAnchor: $, setActiveAnchor: (j) => ue(j), role: we };
  return St.createElement(pn, { ...fe });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (t) => {
  t.detail.disableCore || Ue({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), t.detail.disableBase || Ue({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const ho = (t) => t, vo = (t) => t, yo = ({
  place: t = "top",
  trigger: e = "hover",
  float: n = !1,
  shadow: o = !0,
  border: i = !1,
  children: r,
  style: l,
  ...s
}) => {
  const c = r.find((f) => f.type === ho), a = r.find((f) => f.type === vo), m = "tooltip-" + p.useId();
  return /* @__PURE__ */ xo("span", { className: "cove-tooltip", style: l, ...s, children: [
    /* @__PURE__ */ ze(
      "a",
      {
        id: m,
        role: "dialog",
        tabIndex: 0,
        className: "cove-tooltip--target",
        "data-tooltip-float": n,
        "data-tooltip-place": t,
        "data-tooltip-isOpen": !0,
        children: c ? c.props.children : null
      }
    ),
    /* @__PURE__ */ ze(
      hn,
      {
        id: m,
        anchorId: m,
        className: "cove-tooltip__content" + (" place-" + t) + (n ? "" : " cove-tooltip__content--animated") + (e === "click" ? " interactive" : "") + (i ? " cove-tooltip--border" : "") + (o ? " has-shadow" : ""),
        children: a ? a.props.children : null
      }
    )
  ] });
};
yo.Target = ho;
yo.Content = vo;
export {
  hn as M,
  yo as T,
  Oe as c
};
