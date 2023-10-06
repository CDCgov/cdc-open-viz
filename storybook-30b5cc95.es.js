import hr, { forwardRef as Sl, useRef as Ue, useEffect as et, useImperativeHandle as xl, useMemo as gr } from "react";
function D(e, t) {
  if (Ot(e))
    for (let r = 0; r < e.length && t(e[r], r, e) !== !1; r++)
      ;
  else
    e && D(Object.keys(e), (r) => t(e[r], r, e));
  return e;
}
function re(e, t) {
  let r = _e(t);
  if (me(t) || r) {
    let l = r ? "" : {};
    if (e) {
      let n = window.getComputedStyle(e, null);
      l = r ? Sr(e, n, t) : t.reduce((o, i) => (o[i] = Sr(e, n, i), o), l);
    }
    return l;
  }
  e && D(ue(t), (l) => Bl(e, l, t[l]));
}
var ve = (e, t) => {
  let { o: r, u: l, _: n } = e, o = r, i, s = (a, c) => {
    let d = o, p = a, f = c || (l ? !l(d, p) : d !== p);
    return (f || n) && (o = p, i = d), [o, f, i];
  };
  return [t ? (a) => s(t(o, i), a) : s, (a) => [o, !!a, i]];
}, nt = () => typeof window < "u", qr = nt() && Node.ELEMENT_NODE, { toString: Ol, hasOwnProperty: _t } = Object.prototype, Pe = (e) => e === void 0, xt = (e) => e === null, Cl = (e) => Pe(e) || xt(e) ? `${e}` : Ol.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase(), Me = (e) => typeof e == "number", _e = (e) => typeof e == "string", er = (e) => typeof e == "boolean", we = (e) => typeof e == "function", me = (e) => Array.isArray(e), tt = (e) => typeof e == "object" && !me(e) && !xt(e), Ot = (e) => {
  let t = !!e && e.length, r = Me(t) && t > -1 && t % 1 == 0;
  return me(e) || !we(e) && r ? t > 0 && tt(e) ? t - 1 in e : !0 : !1;
}, Wt = (e) => {
  if (!e || !tt(e) || Cl(e) !== "object")
    return !1;
  let t, r = "constructor", l = e[r], n = l && l.prototype, o = _t.call(e, r), i = n && _t.call(n, "isPrototypeOf");
  if (l && !o && !i)
    return !1;
  for (t in e)
    ;
  return Pe(t) || _t.call(e, t);
}, ht = (e) => {
  let t = HTMLElement;
  return e ? t ? e instanceof t : e.nodeType === qr : !1;
}, Ct = (e) => {
  let t = Element;
  return e ? t ? e instanceof t : e.nodeType === qr : !1;
}, tr = (e, t, r) => e.indexOf(t, r), W = (e, t, r) => (!r && !_e(t) && Ot(t) ? Array.prototype.push.apply(e, t) : e.push(t), e), Ve = (e) => {
  let t = Array.from, r = [];
  return t && e ? t(e) : (e instanceof Set ? e.forEach((l) => {
    W(r, l);
  }) : D(e, (l) => {
    W(r, l);
  }), r);
}, rr = (e) => !!e && e.length === 0, Oe = (e, t, r) => {
  D(e, (l) => l && l.apply(void 0, t || [])), !r && (e.length = 0);
}, $t = (e, t) => Object.prototype.hasOwnProperty.call(e, t), ue = (e) => e ? Object.keys(e) : [], K = (e, t, r, l, n, o, i) => {
  let s = [t, r, l, n, o, i];
  return (typeof e != "object" || xt(e)) && !we(e) && (e = {}), D(s, (a) => {
    D(ue(a), (c) => {
      let d = a[c];
      if (e === d)
        return !0;
      let p = me(d);
      if (d && (Wt(d) || p)) {
        let f = e[c], u = f;
        p && !me(f) ? u = [] : !p && !Wt(f) && (u = {}), e[c] = K(u, d);
      } else
        e[c] = d;
    });
  }), e;
}, lr = (e) => {
  for (let t in e)
    return !1;
  return !0;
}, Xr = (e, t, r, l) => {
  if (Pe(l))
    return r ? r[e] : t;
  r && (_e(l) || Me(l)) && (r[e] = l);
}, te = (e, t, r) => {
  if (Pe(r))
    return e ? e.getAttribute(t) : null;
  e && e.setAttribute(t, r);
}, ae = (e, t) => {
  e && e.removeAttribute(t);
}, De = (e, t, r, l) => {
  if (r) {
    let n = te(e, t) || "", o = new Set(n.split(" "));
    o[l ? "add" : "delete"](r);
    let i = Ve(o).join(" ").trim();
    te(e, t, i);
  }
}, $l = (e, t, r) => {
  let l = te(e, t) || "";
  return new Set(l.split(" ")).has(r);
}, ge = (e, t) => Xr("scrollLeft", 0, e, t), Ae = (e, t) => Xr("scrollTop", 0, e, t), Ut = nt() && Element.prototype, Wr = (e, t) => {
  let r = [], l = t ? Ct(t) ? t : null : document;
  return l ? W(r, l.querySelectorAll(e)) : r;
}, El = (e, t) => {
  let r = t ? Ct(t) ? t : null : document;
  return r ? r.querySelector(e) : null;
}, gt = (e, t) => Ct(e) ? (Ut.matches || Ut.msMatchesSelector).call(e, t) : !1, nr = (e) => e ? Ve(e.childNodes) : [], He = (e) => e ? e.parentElement : null, Je = (e, t) => {
  if (Ct(e)) {
    let r = Ut.closest;
    if (r)
      return r.call(e, t);
    do {
      if (gt(e, t))
        return e;
      e = He(e);
    } while (e);
  }
  return null;
}, Al = (e, t, r) => {
  let l = e && Je(e, t), n = e && El(r, l), o = Je(n, t) === l;
  return l && n ? l === e || n === e || o && Je(Je(e, r), t) !== l : !1;
}, ir = (e, t, r) => {
  if (r && e) {
    let l = t, n;
    Ot(r) ? (n = document.createDocumentFragment(), D(r, (o) => {
      o === l && (l = o.previousSibling), n.appendChild(o);
    })) : n = r, t && (l ? l !== t && (l = l.nextSibling) : l = e.firstChild), e.insertBefore(n, l || null);
  }
}, be = (e, t) => {
  ir(e, null, t);
}, Ll = (e, t) => {
  ir(He(e), e, t);
}, wr = (e, t) => {
  ir(He(e), e && e.nextSibling, t);
}, xe = (e) => {
  if (Ot(e))
    D(Ve(e), (t) => xe(t));
  else if (e) {
    let t = He(e);
    t && t.removeChild(e);
  }
}, Ne = (e) => {
  let t = document.createElement("div");
  return e && te(t, "class", e), t;
}, Ur = (e) => {
  let t = Ne();
  return t.innerHTML = e.trim(), D(nr(t), (r) => xe(r));
}, Jt = (e) => e.charAt(0).toUpperCase() + e.slice(1), Hl = () => Ne().style, Pl = ["-webkit-", "-moz-", "-o-", "-ms-"], Il = ["WebKit", "Moz", "O", "MS", "webkit", "moz", "o", "ms"], Tt = {}, Bt = {}, zl = (e) => {
  let t = Bt[e];
  if ($t(Bt, e))
    return t;
  let r = Jt(e), l = Hl();
  return D(Pl, (n) => {
    let o = n.replace(/-/g, "");
    return !(t = [e, n + e, o + r, Jt(o) + r].find((i) => l[i] !== void 0));
  }), Bt[e] = t || "";
}, it = (e) => {
  if (nt()) {
    let t = Tt[e] || window[e];
    return $t(Tt, e) || (D(Il, (r) => (t = t || window[r + Jt(e)], !t)), Tt[e] = t), t;
  }
}, kl = it("MutationObserver"), mr = it("IntersectionObserver"), Ke = it("ResizeObserver"), Jr = it("cancelAnimationFrame"), Kr = it("requestAnimationFrame"), wt = nt() && window.setTimeout, Kt = nt() && window.clearTimeout, Rl = /[^\x20\t\r\n\f]+/g, Yr = (e, t, r) => {
  let l = e && e.classList, n, o = 0, i = !1;
  if (l && t && _e(t)) {
    let s = t.match(Rl) || [];
    for (i = s.length > 0; n = s[o++]; )
      i = !!r(l, n) && i;
  }
  return i;
}, or = (e, t) => {
  Yr(e, t, (r, l) => r.remove(l));
}, Le = (e, t) => (Yr(e, t, (r, l) => r.add(l)), or.bind(0, e, t)), Et = (e, t, r, l) => {
  if (e && t) {
    let n = !0;
    return D(r, (o) => {
      let i = l ? l(e[o]) : e[o], s = l ? l(t[o]) : t[o];
      i !== s && (n = !1);
    }), n;
  }
  return !1;
}, Zr = (e, t) => Et(e, t, ["w", "h"]), Gr = (e, t) => Et(e, t, ["x", "y"]), Ml = (e, t) => Et(e, t, ["t", "r", "b", "l"]), yr = (e, t, r) => Et(e, t, ["width", "height"], r && ((l) => Math.round(l))), fe = () => {
}, We = (e) => {
  let t, r = e ? wt : Kr, l = e ? Kt : Jr;
  return [(n) => {
    l(t), t = r(n, we(e) ? e() : e);
  }, () => l(t)];
}, ar = (e, t) => {
  let r, l, n, o = fe, { v: i, g: s, p: a } = t || {}, c = function(u) {
    o(), Kt(r), r = l = void 0, o = fe, e.apply(this, u);
  }, d = (u) => a && l ? a(l, u) : u, p = () => {
    o !== fe && c(d(n) || n);
  }, f = function() {
    let u = Ve(arguments), v = we(i) ? i() : i;
    if (Me(v) && v >= 0) {
      let C = we(s) ? s() : s, H = Me(C) && C >= 0, E = v > 0 ? wt : Kr, g = v > 0 ? Kt : Jr, y = d(u) || u, L = c.bind(0, y);
      o();
      let P = E(L, v);
      o = () => g(P), H && !r && (r = wt(p, C)), l = n = y;
    } else
      c(u);
  };
  return f.m = p, f;
}, _l = { opacity: 1, zindex: 1 }, at = (e, t) => {
  let r = t ? parseFloat(e) : parseInt(e, 10);
  return r === r ? r : 0;
}, Tl = (e, t) => !_l[e.toLowerCase()] && Me(t) ? `${t}px` : t, Sr = (e, t, r) => t != null ? t[r] || t.getPropertyValue(r) : e.style[r], Bl = (e, t, r) => {
  try {
    let { style: l } = e;
    Pe(l[t]) ? l.setProperty(t, r) : l[t] = Tl(t, r);
  } catch {
  }
}, rt = (e) => re(e, "direction") === "rtl", xr = (e, t, r) => {
  let l = t ? `${t}-` : "", n = r ? `-${r}` : "", o = `${l}top${n}`, i = `${l}right${n}`, s = `${l}bottom${n}`, a = `${l}left${n}`, c = re(e, [o, i, s, a]);
  return { t: at(c[o], !0), r: at(c[i], !0), b: at(c[s], !0), l: at(c[a], !0) };
}, { round: Or } = Math, sr = { w: 0, h: 0 }, lt = (e) => e ? { w: e.offsetWidth, h: e.offsetHeight } : sr, vt = (e) => e ? { w: e.clientWidth, h: e.clientHeight } : sr, mt = (e) => e ? { w: e.scrollWidth, h: e.scrollHeight } : sr, yt = (e) => {
  let t = parseFloat(re(e, "height")) || 0, r = parseFloat(re(e, "width")) || 0;
  return { w: r - Or(r), h: t - Or(t) };
}, Se = (e) => e.getBoundingClientRect(), st, Dl = () => {
  if (Pe(st)) {
    st = !1;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", { get() {
        st = !0;
      } }));
    } catch {
    }
  }
  return st;
}, Qr = (e) => e.split(" "), Nl = (e, t, r, l) => {
  D(Qr(t), (n) => {
    e.removeEventListener(n, r, l);
  });
}, Q = (e, t, r, l) => {
  var n;
  let o = Dl(), i = (n = o && l && l.S) != null ? n : o, s = l && l.$ || !1, a = l && l.C || !1, c = [], d = o ? { passive: i, capture: s } : s;
  return D(Qr(t), (p) => {
    let f = a ? (u) => {
      e.removeEventListener(p, f, s), r && r(u);
    } : r;
    W(c, Nl.bind(null, e, p, f, s)), e.addEventListener(p, f, d);
  }), Oe.bind(0, c);
}, el = (e) => e.stopPropagation(), tl = (e) => e.preventDefault(), Vl = { x: 0, y: 0 }, Dt = (e) => {
  let t = e ? Se(e) : 0;
  return t ? { x: t.left + window.pageYOffset, y: t.top + window.pageXOffset } : Vl;
}, Cr = (e, t) => {
  D(me(t) ? t : [t], e);
}, cr = (e) => {
  let t = /* @__PURE__ */ new Map(), r = (o, i) => {
    if (o) {
      let s = t.get(o);
      Cr((a) => {
        s && s[a ? "delete" : "clear"](a);
      }, i);
    } else
      t.forEach((s) => {
        s.clear();
      }), t.clear();
  }, l = (o, i) => {
    if (_e(o)) {
      let c = t.get(o) || /* @__PURE__ */ new Set();
      return t.set(o, c), Cr((d) => {
        we(d) && c.add(d);
      }, i), r.bind(0, o, i);
    }
    er(i) && i && r();
    let s = ue(o), a = [];
    return D(s, (c) => {
      let d = o[c];
      d && W(a, l(c, d));
    }), Oe.bind(0, a);
  }, n = (o, i) => {
    let s = t.get(o);
    D(Ve(s), (a) => {
      i && !rr(i) ? a.apply(0, i) : a();
    });
  };
  return l(e || {}), [l, r, n];
}, $r = (e) => JSON.stringify(e, (t, r) => {
  if (we(r))
    throw new Error();
  return r;
}), Fl = { paddingAbsolute: !1, showNativeOverlaidScrollbars: !1, update: { elementEvents: [["img", "load"]], debounce: [0, 33], attributes: null, ignoreMutation: null }, overflow: { x: "scroll", y: "scroll" }, scrollbars: { theme: "os-theme-dark", visibility: "auto", autoHide: "never", autoHideDelay: 1300, dragScroll: !0, clickScroll: !1, pointers: ["mouse", "touch", "pen"] } }, rl = (e, t) => {
  let r = {}, l = ue(t).concat(ue(e));
  return D(l, (n) => {
    let o = e[n], i = t[n];
    if (tt(o) && tt(i))
      K(r[n] = {}, rl(o, i)), lr(r[n]) && delete r[n];
    else if ($t(t, n) && i !== o) {
      let s = !0;
      if (me(o) || me(i))
        try {
          $r(o) === $r(i) && (s = !1);
        } catch {
        }
      s && (r[n] = i);
    }
  }), r;
}, ll = "os-environment", nl = `${ll}-flexbox-glue`, jl = `${nl}-max`, il = "os-scrollbar-hidden", Nt = "data-overlayscrollbars-initialize", he = "data-overlayscrollbars", ol = `${he}-overflow-x`, al = `${he}-overflow-y`, Ye = "overflowVisible", ql = "scrollbarHidden", Er = "scrollbarPressed", St = "updating", ze = "data-overlayscrollbars-viewport", Vt = "arrange", sl = "scrollbarHidden", Ze = Ye, Yt = "data-overlayscrollbars-padding", Xl = Ze, Ar = "data-overlayscrollbars-content", dr = "os-size-observer", Wl = `${dr}-appear`, Ul = `${dr}-listener`, Jl = "os-trinsic-observer", Kl = "os-no-css-vars", Yl = "os-theme-none", se = "os-scrollbar", Zl = `${se}-rtl`, Gl = `${se}-horizontal`, Ql = `${se}-vertical`, cl = `${se}-track`, ur = `${se}-handle`, en = `${se}-visible`, tn = `${se}-cornerless`, Lr = `${se}-transitionless`, Hr = `${se}-interaction`, Pr = `${se}-unusable`, Ir = `${se}-auto-hidden`, zr = `${se}-wheel`, rn = `${cl}-interactive`, ln = `${ur}-interactive`, dl = {}, Fe = () => dl, nn = (e) => {
  let t = [];
  return D(me(e) ? e : [e], (r) => {
    let l = ue(r);
    D(l, (n) => {
      W(t, dl[n] = r[n]);
    });
  }), t;
}, on = "__osOptionsValidationPlugin", an = "__osSizeObserverPlugin", pr = "__osScrollbarsHidingPlugin", sn = "__osClickScrollPlugin", Ft, kr = (e, t, r, l) => {
  be(e, t);
  let n = vt(t), o = lt(t), i = yt(r);
  return l && xe(t), { x: o.h - n.h + i.h, y: o.w - n.w + i.w };
}, cn = (e) => {
  let t = !1, r = Le(e, il);
  try {
    t = re(e, zl("scrollbar-width")) === "none" || window.getComputedStyle(e, "::-webkit-scrollbar").getPropertyValue("display") === "none";
  } catch {
  }
  return r(), t;
}, dn = (e, t) => {
  let r = "hidden";
  re(e, { overflowX: r, overflowY: r, direction: "rtl" }), ge(e, 0);
  let l = Dt(e), n = Dt(t);
  ge(e, -999);
  let o = Dt(t);
  return { i: l.x === n.x, n: n.x !== o.x };
}, un = (e, t) => {
  let r = Le(e, nl), l = Se(e), n = Se(t), o = yr(n, l, !0), i = Le(e, jl), s = Se(e), a = Se(t), c = yr(a, s, !0);
  return r(), i(), o && c;
}, pn = () => {
  let { body: e } = document, t = Ur(`<div class="${ll}"><div></div></div>`)[0], r = t.firstChild, [l, , n] = cr(), [o, i] = ve({ o: kr(e, t, r), u: Gr }, kr.bind(0, e, t, r, !0)), [s] = i(), a = cn(t), c = { x: s.x === 0, y: s.y === 0 }, d = { elements: { host: null, padding: !a, viewport: (E) => a && E === E.ownerDocument.body && E, content: !1 }, scrollbars: { slot: !0 }, cancel: { nativeScrollbarsOverlaid: !1, body: null } }, p = K({}, Fl), f = K.bind(0, {}, p), u = K.bind(0, {}, d), v = { k: s, A: c, I: a, L: re(t, "zIndex") === "-1", B: dn(t, r), V: un(t, r), Y: l.bind(0, "z"), j: l.bind(0, "r"), N: u, q: (E) => K(d, E) && u(), F: f, G: (E) => K(p, E) && f(), X: K({}, d), U: K({}, p) }, C = window.addEventListener, H = ar((E) => n(E ? "z" : "r"), { v: 33, g: 99 });
  if (ae(t, "style"), xe(t), C("resize", H.bind(0, !1)), !a && (!c.x || !c.y)) {
    let E;
    C("resize", () => {
      let g = Fe()[pr];
      E = E || g && g.R(), E && E(v, o, H.bind(0, !0));
    });
  }
  return v;
}, ce = () => (Ft || (Ft = pn()), Ft), fr = (e, t) => we(t) ? t.apply(0, e) : t, fn = (e, t, r, l) => {
  let n = Pe(l) ? r : l;
  return fr(e, n) || t.apply(0, e);
}, ul = (e, t, r, l) => {
  let n = Pe(l) ? r : l, o = fr(e, n);
  return !!o && (ht(o) ? o : t.apply(0, e));
}, bn = (e, t, r) => {
  let { nativeScrollbarsOverlaid: l, body: n } = r || {}, { A: o, I: i } = ce(), { nativeScrollbarsOverlaid: s, body: a } = t, c = l ?? s, d = Pe(n) ? a : n, p = (o.x || o.y) && c, f = e && (xt(d) ? !i : d);
  return !!p || !!f;
}, br = /* @__PURE__ */ new WeakMap(), vn = (e, t) => {
  br.set(e, t);
}, hn = (e) => {
  br.delete(e);
}, pl = (e) => br.get(e), Rr = (e, t) => e ? t.split(".").reduce((r, l) => r && $t(r, l) ? r[l] : void 0, e) : void 0, Zt = (e, t, r) => (l) => [Rr(e, l), r || Rr(t, l) !== void 0], fl = (e) => {
  let t = e;
  return [() => t, (r) => {
    t = K({}, t, r);
  }];
}, ct = "tabindex", dt = Ne.bind(0, ""), jt = (e) => {
  be(He(e), nr(e)), xe(e);
}, gn = (e) => {
  let t = ce(), { N: r, I: l } = t, n = Fe()[pr], o = n && n.T, { elements: i } = r(), { host: s, padding: a, viewport: c, content: d } = i, p = ht(e), f = p ? {} : e, { elements: u } = f, { host: v, padding: C, viewport: H, content: E } = u || {}, g = p ? e : f.target, y = gt(g, "textarea"), L = g.ownerDocument, P = L.documentElement, T = g === L.body, k = L.defaultView, I = fn.bind(0, [g]), F = ul.bind(0, [g]), Z = fr.bind(0, [g]), j = I.bind(0, dt, c), z = F.bind(0, dt, d), m = j(H), b = m === g, x = b && T, h = !b && z(E), w = !b && ht(m) && m === h, $ = w && !!Z(d), S = $ ? j() : m, O = $ ? h : z(), A = x ? P : w ? S : m, N = y ? I(dt, s, v) : g, R = x ? A : N, _ = w ? O : h, q = L.activeElement, X = !b && k.top === k && q === g, M = { W: g, Z: R, J: A, K: !b && F(dt, a, C), tt: _, nt: !b && !l && o && o(t), ot: x ? P : A, st: x ? L : A, et: k, ct: L, rt: y, it: T, lt: p, ut: b, dt: w, ft: (ee, de) => $l(A, b ? he : ze, b ? de : ee), _t: (ee, de, ie) => De(A, b ? he : ze, b ? de : ee, ie) }, V = ue(M).reduce((ee, de) => {
    let ie = M[de];
    return W(ee, ie && !He(ie) ? ie : !1);
  }, []), U = (ee) => ee ? tr(V, ee) > -1 : null, { W: J, Z: Y, K: le, J: B, tt: G, nt: ne } = M, oe = [() => {
    ae(Y, he), ae(Y, Nt), ae(J, Nt), T && (ae(P, he), ae(P, Nt));
  }], Te = y && U(Y), Ie = y ? J : nr([G, B, le, Y, J].find((ee) => U(ee) === !1)), je = x ? J : G || B;
  return [M, () => {
    te(Y, he, b ? "viewport" : "host"), te(le, Yt, ""), te(G, Ar, ""), b || te(B, ze, "");
    let ee = T && !b ? Le(He(g), il) : fe;
    if (Te && (wr(J, Y), W(oe, () => {
      wr(Y, J), xe(Y);
    })), be(je, Ie), be(Y, le), be(le || Y, !b && B), be(B, G), W(oe, () => {
      ee(), ae(le, Yt), ae(G, Ar), ae(B, ol), ae(B, al), ae(B, ze), U(G) && jt(G), U(B) && jt(B), U(le) && jt(le);
    }), l && !b && (De(B, ze, sl, !0), W(oe, ae.bind(0, B, ze))), ne && (Ll(B, ne), W(oe, xe.bind(0, ne))), X) {
      let de = te(B, ct);
      te(B, ct, "-1"), B.focus();
      let ie = () => de ? te(B, ct, de) : ae(B, ct), Be = Q(L, "pointerdown keydown", () => {
        ie(), Be();
      });
      W(oe, [ie, Be]);
    } else
      q && q.focus && q.focus();
    Ie = 0;
  }, Oe.bind(0, oe)];
}, wn = (e, t) => {
  let { tt: r } = e, [l] = t;
  return (n) => {
    let { V: o } = ce(), { ht: i } = l(), { vt: s } = n, a = (r || !o) && s;
    return a && re(r, { height: i ? "" : "100%" }), { gt: a, wt: a };
  };
}, mn = (e, t) => {
  let [r, l] = t, { Z: n, K: o, J: i, ut: s } = e, [a, c] = ve({ u: Ml, o: xr() }, xr.bind(0, n, "padding", ""));
  return (d, p, f) => {
    let [u, v] = c(f), { I: C, V: H } = ce(), { bt: E } = r(), { gt: g, wt: y, yt: L } = d, [P, T] = p("paddingAbsolute");
    (g || v || !H && y) && ([u, v] = a(f));
    let k = !s && (T || L || v);
    if (k) {
      let I = !P || !o && !C, F = u.r + u.l, Z = u.t + u.b, j = { marginRight: I && !E ? -F : 0, marginBottom: I ? -Z : 0, marginLeft: I && E ? -F : 0, top: I ? -u.t : 0, right: I ? E ? -u.r : "auto" : 0, left: I ? E ? "auto" : -u.l : 0, width: I ? `calc(100% + ${F}px)` : "" }, z = { paddingTop: I ? u.t : 0, paddingRight: I ? u.r : 0, paddingBottom: I ? u.b : 0, paddingLeft: I ? u.l : 0 };
      re(o || i, j), re(i, z), l({ K: u, St: !I, P: o ? z : K({}, j, z) });
    }
    return { xt: k };
  };
}, { max: Gt } = Math, ke = Gt.bind(0, 0), bl = "visible", Mr = "hidden", yn = 42, ut = { u: Zr, o: { w: 0, h: 0 } }, Sn = { u: Gr, o: { x: Mr, y: Mr } }, xn = (e, t) => {
  let r = window.devicePixelRatio % 1 !== 0 ? 1 : 0, l = { w: ke(e.w - t.w), h: ke(e.h - t.h) };
  return { w: l.w > r ? l.w : 0, h: l.h > r ? l.h : 0 };
}, pt = (e) => e.indexOf(bl) === 0, On = (e, t) => {
  let [r, l] = t, { Z: n, K: o, J: i, nt: s, ut: a, _t: c, it: d, et: p } = e, { k: f, V: u, I: v, A: C } = ce(), H = Fe()[pr], E = !a && !v && (C.x || C.y), g = d && a, [y, L] = ve(ut, yt.bind(0, i)), [P, T] = ve(ut, mt.bind(0, i)), [k, I] = ve(ut), [F, Z] = ve(ut), [j] = ve(Sn), z = ($, S) => {
    if (re(i, { height: "" }), S) {
      let { St: O, K: A } = r(), { $t: N, D: R } = $, _ = yt(n), q = vt(n), X = re(i, "boxSizing") === "content-box", M = O || X ? A.b + A.t : 0, V = !(C.x && X);
      re(i, { height: q.h + _.h + (N.x && V ? R.x : 0) - M });
    }
  }, m = ($, S) => {
    let O = !v && !$ ? yn : 0, A = (J, Y, le) => {
      let B = re(i, J), G = (S ? S[J] : B) === "scroll";
      return [B, G, G && !v ? Y ? O : le : 0, Y && !!O];
    }, [N, R, _, q] = A("overflowX", C.x, f.x), [X, M, V, U] = A("overflowY", C.y, f.y);
    return { Ct: { x: N, y: X }, $t: { x: R, y: M }, D: { x: _, y: V }, M: { x: q, y: U } };
  }, b = ($, S, O, A) => {
    let N = (M, V) => {
      let U = pt(M), J = V && U && M.replace(`${bl}-`, "") || "";
      return [V && !U ? M : "", pt(J) ? "hidden" : J];
    }, [R, _] = N(O.x, S.x), [q, X] = N(O.y, S.y);
    return A.overflowX = _ && q ? _ : R, A.overflowY = X && R ? X : q, m($, A);
  }, x = ($, S, O, A) => {
    let { D: N, M: R } = $, { x: _, y: q } = R, { x: X, y: M } = N, { P: V } = r(), U = S ? "marginLeft" : "marginRight", J = S ? "paddingLeft" : "paddingRight", Y = V[U], le = V.marginBottom, B = V[J], G = V.paddingBottom;
    A.width = `calc(100% + ${M + -1 * Y}px)`, A[U] = -M + Y, A.marginBottom = -X + le, O && (A[J] = B + (q ? M : 0), A.paddingBottom = G + (_ ? X : 0));
  }, [h, w] = H ? H.H(E, u, i, s, r, m, x) : [() => E, () => [fe]];
  return ($, S, O) => {
    let { gt: A, Ot: N, wt: R, xt: _, vt: q, yt: X } = $, { ht: M, bt: V } = r(), [U, J] = S("showNativeOverlaidScrollbars"), [Y, le] = S("overflow"), B = U && C.x && C.y, G = !a && !u && (A || R || N || J || q), ne = pt(Y.x), oe = pt(Y.y), Te = ne || oe, Ie = L(O), je = T(O), ee = I(O), de = Z(O), ie;
    if (J && v && c(sl, ql, !B), G && (ie = m(B), z(ie, M)), A || _ || R || X || J) {
      Te && c(Ze, Ye, !1);
      let [Ce, $e] = w(B, V, ie), [pe, Qe] = Ie = y(O), [Ee, ml] = je = P(O), kt = vt(i), Rt = Ee, Mt = kt;
      Ce(), (ml || Qe || J) && $e && !B && h($e, Ee, pe, V) && (Mt = vt(i), Rt = mt(i));
      let yl = { w: ke(Gt(Ee.w, Rt.w) + pe.w), h: ke(Gt(Ee.h, Rt.h) + pe.h) }, vr = { w: ke((g ? p.innerWidth : Mt.w + ke(kt.w - Ee.w)) + pe.w), h: ke((g ? p.innerHeight + pe.h : Mt.h + ke(kt.h - Ee.h)) + pe.h) };
      de = F(vr), ee = k(xn(yl, vr), O);
    }
    let [Be, Ge] = de, [qe, Xe] = ee, [At, Lt] = je, [Ht, Pt] = Ie, ye = { x: qe.w > 0, y: qe.h > 0 }, ot = ne && oe && (ye.x || ye.y) || ne && ye.x && !ye.y || oe && ye.y && !ye.x;
    if (_ || X || Pt || Lt || Ge || Xe || le || J || G) {
      let Ce = { marginRight: 0, marginBottom: 0, marginLeft: 0, width: "", overflowY: "", overflowX: "" }, $e = b(B, ye, Y, Ce), pe = h($e, At, Ht, V);
      a || x($e, V, pe, Ce), G && z($e, M), a ? (te(n, ol, Ce.overflowX), te(n, al, Ce.overflowY)) : re(i, Ce);
    }
    De(n, he, Ye, ot), De(o, Yt, Xl, ot), a || De(i, ze, Ze, Te);
    let [It, zt] = j(m(B).Ct);
    return l({ Ct: It, zt: { x: Be.w, y: Be.h }, Tt: { x: qe.w, y: qe.h }, Et: ye }), { It: zt, At: Ge, Lt: Xe };
  };
}, _r = (e, t, r) => {
  let l = {}, n = t || {}, o = ue(e).concat(ue(n));
  return D(o, (i) => {
    let s = e[i], a = n[i];
    l[i] = !!(r || s || a);
  }), l;
}, Cn = (e, t) => {
  let { W: r, J: l, _t: n, ut: o } = e, { I: i, A: s, V: a } = ce(), c = !i && (s.x || s.y), d = [wn(e, t), mn(e, t), On(e, t)];
  return (p, f, u) => {
    let v = _r(K({ gt: !1, xt: !1, yt: !1, vt: !1, At: !1, Lt: !1, It: !1, Ot: !1, wt: !1 }, f), {}, u), C = c || !a, H = C && ge(l), E = C && Ae(l);
    n("", St, !0);
    let g = v;
    return D(d, (y) => {
      g = _r(g, y(g, p, !!u) || {}, u);
    }), ge(l, H), Ae(l, E), n("", St), o || (ge(r, 0), Ae(r, 0)), g;
  };
}, $n = (e, t, r) => {
  let l, n = !1, o = () => {
    n = !0;
  }, i = (s) => {
    if (r) {
      let a = r.reduce((c, d) => {
        if (d) {
          let [p, f] = d, u = f && p && (s ? s(p) : Wr(p, e));
          u && u.length && f && _e(f) && W(c, [u, f.trim()], !0);
        }
        return c;
      }, []);
      D(a, (c) => D(c[0], (d) => {
        let p = c[1], f = l.get(d) || [];
        if (e.contains(d)) {
          let u = Q(d, p, (v) => {
            n ? (u(), l.delete(d)) : t(v);
          });
          l.set(d, W(f, u));
        } else
          Oe(f), l.delete(d);
      }));
    }
  };
  return r && (l = /* @__PURE__ */ new WeakMap(), i()), [o, i];
}, Tr = (e, t, r, l) => {
  let n = !1, { Ht: o, Pt: i, Dt: s, Mt: a, Rt: c, kt: d } = l || {}, p = ar(() => {
    n && r(!0);
  }, { v: 33, g: 99 }), [f, u] = $n(e, p, s), v = o || [], C = i || [], H = v.concat(C), E = (y, L) => {
    let P = c || fe, T = d || fe, k = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set(), F = !1, Z = !1;
    if (D(y, (j) => {
      let { attributeName: z, target: m, type: b, oldValue: x, addedNodes: h, removedNodes: w } = j, $ = b === "attributes", S = b === "childList", O = e === m, A = $ && _e(z) ? te(m, z) : 0, N = A !== 0 && x !== A, R = tr(C, z) > -1 && N;
      if (t && (S || !O)) {
        let _ = !$, q = $ && N, X = q && a && gt(m, a), M = (X ? !P(m, z, x, A) : _ || q) && !T(j, !!X, e, l);
        D(h, (V) => k.add(V)), D(w, (V) => k.add(V)), Z = Z || M;
      }
      !t && O && N && !P(m, z, x, A) && (I.add(z), F = F || R);
    }), k.size > 0 && u((j) => Ve(k).reduce((z, m) => (W(z, Wr(j, m)), gt(m, j) ? W(z, m) : z), [])), t)
      return !L && Z && r(!1), [!1];
    if (I.size > 0 || F) {
      let j = [Ve(I), F];
      return !L && r.apply(0, j), j;
    }
  }, g = new kl((y) => E(y));
  return g.observe(e, { attributes: !0, attributeOldValue: !0, attributeFilter: H, subtree: t, childList: t, characterData: t }), n = !0, [() => {
    n && (f(), g.disconnect(), n = !1);
  }, () => {
    if (n) {
      p.m();
      let y = g.takeRecords();
      return !rr(y) && E(y, !0);
    }
  }];
}, ft = 3333333, bt = (e) => e && (e.height || e.width), vl = (e, t, r) => {
  let { Bt: l = !1, Vt: n = !1 } = r || {}, o = Fe()[an], { B: i } = ce(), s = Ur(`<div class="${dr}"><div class="${Ul}"></div></div>`)[0], a = s.firstChild, c = rt.bind(0, e), [d] = ve({ o: void 0, _: !0, u: (v, C) => !(!v || !bt(v) && bt(C)) }), p = (v) => {
    let C = me(v) && v.length > 0 && tt(v[0]), H = !C && er(v[0]), E = !1, g = !1, y = !0;
    if (C) {
      let [L, , P] = d(v.pop().contentRect), T = bt(L), k = bt(P);
      E = !P || !T, g = !k && T, y = !E;
    } else
      H ? [, y] = v : g = v === !0;
    if (l && y) {
      let L = H ? v[0] : rt(s);
      ge(s, L ? i.n ? -ft : i.i ? 0 : ft : ft), Ae(s, ft);
    }
    E || t({ gt: !H, Yt: H ? v : void 0, Vt: !!g });
  }, f = [], u = n ? p : !1;
  return [() => {
    Oe(f), xe(s);
  }, () => {
    if (Ke) {
      let v = new Ke(p);
      v.observe(a), W(f, () => {
        v.disconnect();
      });
    } else if (o) {
      let [v, C] = o.O(a, p, n);
      u = v, W(f, C);
    }
    if (l) {
      let [v] = ve({ o: void 0 }, c);
      W(f, Q(s, "scroll", (C) => {
        let H = v(), [E, g, y] = H;
        g && (or(a, "ltr rtl"), E ? Le(a, "rtl") : Le(a, "ltr"), p([!!E, g, y])), el(C);
      }));
    }
    u && (Le(s, Wl), W(f, Q(s, "animationstart", u, { C: !!Ke }))), (Ke || o) && be(e, s);
  }];
}, En = (e) => e.h === 0 || e.isIntersecting || e.intersectionRatio > 0, An = (e, t) => {
  let r, l = Ne(Jl), n = [], [o] = ve({ o: !1 }), i = (a, c) => {
    if (a) {
      let d = o(En(a)), [, p] = d;
      if (p)
        return !c && t(d), [d];
    }
  }, s = (a, c) => {
    if (a && a.length > 0)
      return i(a.pop(), c);
  };
  return [() => {
    Oe(n), xe(l);
  }, () => {
    if (mr)
      r = new mr((a) => s(a), { root: e }), r.observe(l), W(n, () => {
        r.disconnect();
      });
    else {
      let a = () => {
        let p = lt(l);
        i(p);
      }, [c, d] = vl(l, a);
      W(n, c), d(), a();
    }
    be(e, l);
  }, () => {
    if (r)
      return s(r.takeRecords(), !0);
  }];
}, Br = `[${he}]`, Ln = `[${ze}]`, qt = ["tabindex"], Dr = ["wrap", "cols", "rows"], Xt = ["id", "class", "style", "open"], Hn = (e, t, r) => {
  let l, n, o, { Z: i, J: s, tt: a, rt: c, ut: d, ft: p, _t: f } = e, { V: u } = ce(), [v] = ve({ u: Zr, o: { w: 0, h: 0 } }, () => {
    let b = p(Ze, Ye), x = p(Vt, ""), h = x && ge(s), w = x && Ae(s);
    f(Ze, Ye), f(Vt, ""), f("", St, !0);
    let $ = mt(a), S = mt(s), O = yt(s);
    return f(Ze, Ye, b), f(Vt, "", x), f("", St), ge(s, h), Ae(s, w), { w: S.w + $.w + O.w, h: S.h + $.h + O.h };
  }), C = c ? Dr : Xt.concat(Dr), H = ar(r, { v: () => l, g: () => n, p(b, x) {
    let [h] = b, [w] = x;
    return [ue(h).concat(ue(w)).reduce(($, S) => ($[S] = h[S] || w[S], $), {})];
  } }), E = (b) => {
    D(b || qt, (x) => {
      if (tr(qt, x) > -1) {
        let h = te(i, x);
        _e(h) ? te(s, x, h) : ae(s, x);
      }
    });
  }, g = (b, x) => {
    let [h, w] = b, $ = { vt: w };
    return t({ ht: h }), !x && r($), $;
  }, y = ({ gt: b, Yt: x, Vt: h }) => {
    let w = !b || h ? r : H, $ = !1;
    if (x) {
      let [S, O] = x;
      $ = O, t({ bt: S });
    }
    w({ gt: b, yt: $ });
  }, L = (b, x) => {
    let [, h] = v(), w = { wt: h };
    return h && !x && (b ? r : H)(w), w;
  }, P = (b, x, h) => {
    let w = { Ot: x };
    return x ? !h && H(w) : d || E(b), w;
  }, [T, k, I] = a || !u ? An(i, g) : [fe, fe, fe], [F, Z] = d ? [fe, fe] : vl(i, y, { Vt: !0, Bt: !0 }), [j, z] = Tr(i, !1, P, { Pt: Xt, Ht: Xt.concat(qt) }), m = d && Ke && new Ke(y.bind(0, { gt: !0 }));
  return m && m.observe(i), E(), [() => {
    T(), F(), o && o[0](), m && m.disconnect(), j();
  }, () => {
    Z(), k();
  }, () => {
    let b = {}, x = z(), h = I(), w = o && o[1]();
    return x && K(b, P.apply(0, W(x, !0))), h && K(b, g.apply(0, W(h, !0))), w && K(b, L.apply(0, W(w, !0))), b;
  }, (b) => {
    let [x] = b("update.ignoreMutation"), [h, w] = b("update.attributes"), [$, S] = b("update.elementEvents"), [O, A] = b("update.debounce"), N = S || w, R = (_) => we(x) && x(_);
    if (N && (o && (o[1](), o[0]()), o = Tr(a || s, !0, L, { Ht: C.concat(h || []), Dt: $, Mt: Br, kt: (_, q) => {
      let { target: X, attributeName: M } = _;
      return (!q && M && !d ? Al(X, Br, Ln) : !1) || !!Je(X, `.${se}`) || !!R(_);
    } })), A)
      if (H.m(), me(O)) {
        let _ = O[0], q = O[1];
        l = Me(_) && _, n = Me(q) && q;
      } else
        Me(O) ? (l = O, n = !1) : (l = !1, n = !1);
  }];
}, Nr = { x: 0, y: 0 }, Pn = (e) => ({ K: { t: 0, r: 0, b: 0, l: 0 }, St: !1, P: { marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0 }, zt: Nr, Tt: Nr, Ct: { x: "hidden", y: "hidden" }, Et: { x: !1, y: !1 }, ht: !1, bt: rt(e.Z) }), In = (e, t) => {
  let r = Zt(t, {}), [l, n, o] = cr(), [i, s, a] = gn(e), c = fl(Pn(i)), [d, p] = c, f = Cn(i, c), u = (y, L, P) => {
    let T = ue(y).some((k) => y[k]) || !lr(L) || P;
    return T && o("u", [y, L, P]), T;
  }, [v, C, H, E] = Hn(i, p, (y) => u(f(r, y), {}, !1)), g = d.bind(0);
  return g.jt = (y) => l("u", y), g.Nt = () => {
    let { W: y, J: L } = i, P = ge(y), T = Ae(y);
    C(), s(), ge(L, P), Ae(L, T);
  }, g.qt = i, [(y, L) => {
    let P = Zt(t, y, L);
    return E(P), u(f(P, H(), L), y, !!L);
  }, g, () => {
    n(), v(), a();
  }];
}, { round: Vr } = Math, zn = (e) => {
  let { width: t, height: r } = Se(e), { w: l, h: n } = lt(e);
  return { x: Vr(t) / l || 1, y: Vr(r) / n || 1 };
}, kn = (e, t, r) => {
  let l = t.scrollbars, { button: n, isPrimary: o, pointerType: i } = e, { pointers: s } = l;
  return n === 0 && o && l[r ? "dragScroll" : "clickScroll"] && (s || []).includes(i);
}, Rn = (e, t) => Q(e, "mousedown", Q.bind(0, t, "click", el, { C: !0, $: !0 }), { $: !0 }), Fr = "pointerup pointerleave pointercancel lostpointercapture", Mn = (e, t, r, l, n, o, i) => {
  let { B: s } = ce(), { Ft: a, Gt: c, Xt: d } = l, p = `scroll${i ? "Left" : "Top"}`, f = `client${i ? "X" : "Y"}`, u = i ? "width" : "height", v = i ? "left" : "top", C = i ? "w" : "h", H = i ? "x" : "y", E = (g, y) => (L) => {
    let { Tt: P } = o(), T = lt(c)[C] - lt(a)[C], k = y * L / T * P[H], I = rt(d) && i ? s.n || s.i ? 1 : -1 : 1;
    n[p] = g + k * I;
  };
  return Q(c, "pointerdown", (g) => {
    let y = Je(g.target, `.${ur}`) === a, L = y ? a : c;
    if (De(t, he, Er, !0), kn(g, e, y)) {
      let P = !y && g.shiftKey, T = () => Se(a), k = () => Se(c), I = (S, O) => (S || T())[v] - (O || k())[v], F = E(n[p] || 0, 1 / zn(n)[H]), Z = g[f], j = T(), z = k(), m = j[u], b = I(j, z) + m / 2, x = Z - z[v], h = y ? 0 : x - b, w = (S) => {
        Oe($), L.releasePointerCapture(S.pointerId);
      }, $ = [De.bind(0, t, he, Er), Q(r, Fr, w), Q(r, "selectstart", (S) => tl(S), { S: !1 }), Q(c, Fr, w), Q(c, "pointermove", (S) => {
        let O = S[f] - Z;
        (y || P) && F(h + O);
      })];
      if (P)
        F(h);
      else if (!y) {
        let S = Fe()[sn];
        S && W($, S.O(F, I, h, m, x));
      }
      L.setPointerCapture(g.pointerId);
    }
  });
}, _n = (e, t) => (r, l, n, o, i, s) => {
  let { Xt: a } = r, [c, d] = We(333), p = !!i.scrollBy, f = !0;
  return Oe.bind(0, [Q(a, "pointerenter", () => {
    l(Hr, !0);
  }), Q(a, "pointerleave pointercancel", () => {
    l(Hr);
  }), Q(a, "wheel", (u) => {
    let { deltaX: v, deltaY: C, deltaMode: H } = u;
    p && f && H === 0 && He(a) === o && i.scrollBy({ left: v, top: C, behavior: "smooth" }), f = !1, l(zr, !0), c(() => {
      f = !0, l(zr);
    }), tl(u);
  }, { S: !1, $: !0 }), Rn(a, n), Mn(e, o, n, r, i, t, s), d]);
}, { min: Qt, max: jr, abs: Tn, round: Bn } = Math, hl = (e, t, r, l) => {
  if (l) {
    let s = r ? "x" : "y", { Tt: a, zt: c } = l, d = c[s], p = a[s];
    return jr(0, Qt(1, d / (d + p)));
  }
  let n = r ? "width" : "height", o = Se(e)[n], i = Se(t)[n];
  return jr(0, Qt(1, o / i));
}, Dn = (e, t, r, l, n, o) => {
  let { B: i } = ce(), s = o ? "x" : "y", a = o ? "Left" : "Top", { Tt: c } = l, d = Bn(c[s]), p = Tn(r[`scroll${a}`]), f = o && n, u = i.i ? p : d - p, v = Qt(1, (f ? u : p) / d), C = hl(e, t, o);
  return 1 / C * (1 - C) * v;
}, Nn = (e, t, r) => {
  let { N: l, L: n } = ce(), { scrollbars: o } = l(), { slot: i } = o, { ct: s, W: a, Z: c, J: d, lt: p, ot: f, it: u, ut: v } = t, { scrollbars: C } = p ? {} : e, { slot: H } = C || {}, E = ul([a, c, d], () => v && u ? a : c, i, H), g = (h, w, $) => {
    let S = $ ? Le : or;
    D(h, (O) => {
      S(O.Xt, w);
    });
  }, y = (h, w) => {
    D(h, ($) => {
      let [S, O] = w($);
      re(S, O);
    });
  }, L = (h, w, $) => {
    y(h, (S) => {
      let { Ft: O, Gt: A } = S;
      return [O, { [$ ? "width" : "height"]: `${(100 * hl(O, A, $, w)).toFixed(3)}%` }];
    });
  }, P = (h, w, $) => {
    let S = $ ? "X" : "Y";
    y(h, (O) => {
      let { Ft: A, Gt: N, Xt: R } = O, _ = Dn(A, N, f, w, rt(R), $);
      return [A, { transform: _ === _ ? `translate${S}(${(100 * _).toFixed(3)}%)` : "" }];
    });
  }, T = [], k = [], I = [], F = (h, w, $) => {
    let S = er($), O = S ? $ : !0, A = S ? !$ : !0;
    O && g(k, h, w), A && g(I, h, w);
  }, Z = (h) => {
    L(k, h, !0), L(I, h);
  }, j = (h) => {
    P(k, h, !0), P(I, h);
  }, z = (h) => {
    let w = h ? Gl : Ql, $ = h ? k : I, S = rr($) ? Lr : "", O = Ne(`${se} ${w} ${S}`), A = Ne(cl), N = Ne(ur), R = { Xt: O, Gt: A, Ft: N };
    return n || Le(O, Kl), be(O, A), be(A, N), W($, R), W(T, [xe.bind(0, O), r(R, F, s, c, f, h)]), R;
  }, m = z.bind(0, !0), b = z.bind(0, !1), x = () => {
    be(E, k[0].Xt), be(E, I[0].Xt), wt(() => {
      F(Lr);
    }, 300);
  };
  return m(), b(), [{ Ut: Z, Wt: j, Zt: F, Jt: { Kt: k, Qt: m, tn: y.bind(0, k) }, nn: { Kt: I, Qt: b, tn: y.bind(0, I) } }, x, Oe.bind(0, T)];
}, Vn = (e, t, r, l) => {
  let n, o, i, s, a, c = 0, d = fl({}), [p] = d, [f, u] = We(), [v, C] = We(), [H, E] = We(100), [g, y] = We(100), [L, P] = We(() => c), [T, k, I] = Nn(e, r.qt, _n(t, r)), { Z: F, J: Z, ot: j, st: z, ut: m, it: b } = r.qt, { Jt: x, nn: h, Zt: w, Ut: $, Wt: S } = T, { tn: O } = x, { tn: A } = h, N = (M) => {
    let { Xt: V } = M, U = m && !b && He(V) === Z && V;
    return [U, { transform: U ? `translate(${ge(j)}px, ${Ae(j)}px)` : "" }];
  }, R = (M, V) => {
    if (P(), M)
      w(Ir);
    else {
      let U = () => w(Ir, !0);
      c > 0 && !V ? L(U) : U();
    }
  }, _ = () => {
    s = o, s && R(!0);
  }, q = [E, P, y, C, u, I, Q(F, "pointerover", _, { C: !0 }), Q(F, "pointerenter", _), Q(F, "pointerleave", () => {
    s = !1, o && R(!1);
  }), Q(F, "pointermove", () => {
    n && f(() => {
      E(), R(!0), g(() => {
        n && R(!1);
      });
    });
  }), Q(z, "scroll", (M) => {
    v(() => {
      S(r()), i && R(!0), H(() => {
        i && !s && R(!1);
      });
    }), l(M), m && O(N), m && A(N);
  })], X = p.bind(0);
  return X.qt = T, X.Nt = k, [(M, V, U) => {
    let { At: J, Lt: Y, It: le, yt: B } = U, { A: G } = ce(), ne = Zt(t, M, V), oe = r(), { Tt: Te, Ct: Ie, bt: je } = oe, [ee, de] = ne("showNativeOverlaidScrollbars"), [ie, Be] = ne("scrollbars.theme"), [Ge, qe] = ne("scrollbars.visibility"), [Xe, At] = ne("scrollbars.autoHide"), [Lt] = ne("scrollbars.autoHideDelay"), [Ht, Pt] = ne("scrollbars.dragScroll"), [ye, ot] = ne("scrollbars.clickScroll"), It = J || Y || B, zt = le || qe, Ce = ee && G.x && G.y, $e = (pe, Qe) => {
      let Ee = Ge === "visible" || Ge === "auto" && pe === "scroll";
      return w(en, Ee, Qe), Ee;
    };
    if (c = Lt, de && w(Yl, Ce), Be && (w(a), w(ie, !0), a = ie), At && (n = Xe === "move", o = Xe === "leave", i = Xe !== "never", R(!i, !0)), Pt && w(ln, Ht), ot && w(rn, ye), zt) {
      let pe = $e(Ie.x, !0), Qe = $e(Ie.y, !1);
      w(tn, !(pe && Qe));
    }
    It && ($(oe), S(oe), w(Pr, !Te.x, !0), w(Pr, !Te.y, !1), w(Zl, je && !b));
  }, X, Oe.bind(0, q)];
}, gl = (e, t, r) => {
  we(e) && e(t || void 0, r || void 0);
}, Re = (e, t, r) => {
  let { F: l, N: n, Y: o, j: i } = ce(), s = Fe(), a = ht(e), c = a ? e : e.target, d = pl(c);
  if (t && !d) {
    let p = !1, f = (m) => {
      let b = Fe()[on], x = b && b.O;
      return x ? x(m, !0) : m;
    }, u = K({}, l(), f(t)), [v, C, H] = cr(r), [E, g, y] = In(e, u), [L, P, T] = Vn(e, u, g, (m) => H("scroll", [z, m])), k = (m, b) => E(m, !!b), I = k.bind(0, {}, !0), F = o(I), Z = i(I), j = (m) => {
      hn(c), F(), Z(), T(), y(), p = !0, H("destroyed", [z, !!m]), C();
    }, z = { options(m, b) {
      if (m) {
        let x = b ? l() : {}, h = rl(u, K(x, f(m)));
        lr(h) || (K(u, h), k(h));
      }
      return K({}, u);
    }, on: v, off: (m, b) => {
      m && b && C(m, b);
    }, state() {
      let { zt: m, Tt: b, Ct: x, Et: h, K: w, St: $, bt: S } = g();
      return K({}, { overflowEdge: m, overflowAmount: b, overflowStyle: x, hasOverflow: h, padding: w, paddingAbsolute: $, directionRTL: S, destroyed: p });
    }, elements() {
      let { W: m, Z: b, K: x, J: h, tt: w, ot: $, st: S } = g.qt, { Jt: O, nn: A } = P.qt, N = (_) => {
        let { Ft: q, Gt: X, Xt: M } = _;
        return { scrollbar: M, track: X, handle: q };
      }, R = (_) => {
        let { Kt: q, Qt: X } = _, M = N(q[0]);
        return K({}, M, { clone: () => {
          let V = N(X());
          return L({}, !0, {}), V;
        } });
      };
      return K({}, { target: m, host: b, padding: x || h, viewport: h, content: w || h, scrollOffsetElement: $, scrollEventElement: S, scrollbarHorizontal: R(O), scrollbarVertical: R(A) });
    }, update: (m) => k({}, m), destroy: j.bind(0) };
    return g.jt((m, b, x) => {
      L(b, x, m);
    }), vn(c, z), D(ue(s), (m) => gl(s[m], 0, z)), bn(g.qt.it, n().cancel, !a && e.cancel) ? (j(!0), z) : (g.Nt(), P.Nt(), H("initialized", [z]), g.jt((m, b, x) => {
      let { gt: h, yt: w, vt: $, At: S, Lt: O, It: A, wt: N, Ot: R } = m;
      H("updated", [z, { updateHints: { sizeChanged: h, directionChanged: w, heightIntrinsicChanged: $, overflowEdgeChanged: S, overflowAmountChanged: O, overflowStyleChanged: A, contentMutation: N, hostMutation: R }, changedOptions: b, force: x }]);
    }), z.update(!0), z);
  }
  return d;
};
Re.plugin = (e) => {
  D(nn(e), (t) => gl(t, Re));
};
Re.valid = (e) => {
  let t = e && e.elements, r = we(t) && t();
  return Wt(r) && !!pl(r.target);
};
Re.env = () => {
  let { k: e, A: t, I: r, B: l, V: n, L: o, X: i, U: s, N: a, q: c, F: d, G: p } = ce();
  return K({}, { scrollbarsSize: e, scrollbarsOverlaid: t, scrollbarsHiding: r, rtlScrollBehavior: l, flexboxGlue: n, cssCustomProperties: o, staticDefaultInitialization: i, staticDefaultOptions: s, getDefaultInitialization: a, setDefaultInitialization: c, getDefaultOptions: d, setDefaultOptions: p });
};
var Fn = () => {
  if (typeof window > "u") {
    let c = () => {
    };
    return [c, c];
  }
  let e, t, r = window, l = typeof r.requestIdleCallback == "function", n = r.requestAnimationFrame, o = r.cancelAnimationFrame, i = l ? r.requestIdleCallback : n, s = l ? r.cancelIdleCallback : o, a = () => {
    s(e), o(t);
  };
  return [(c, d) => {
    a(), e = i(l ? () => {
      a(), t = n(c);
    } : c, typeof d == "object" ? d : { timeout: 2233 });
  }, a];
}, jn = (e) => {
  let { options: t, events: r, defer: l } = e || {}, [n, o] = gr(Fn, []), i = Ue(null), s = Ue(l), a = Ue(t), c = Ue(r);
  return et(() => {
    s.current = l;
  }, [l]), et(() => {
    let { current: d } = i;
    a.current = t, Re.valid(d) && d.options(t || {}, !0);
  }, [t]), et(() => {
    let { current: d } = i;
    c.current = r, Re.valid(d) && d.on(r || {}, !0);
  }, [r]), et(() => () => {
    var d;
    o(), (d = i.current) == null || d.destroy();
  }, []), gr(() => [(d) => {
    let p = i.current;
    if (Re.valid(p))
      return;
    let f = s.current, u = a.current || {}, v = c.current || {}, C = () => i.current = Re(d, u, v);
    f ? n(C, f) : C();
  }, () => i.current], []);
}, qn = (e, t) => {
  let { element: r = "div", options: l, events: n, defer: o, children: i, ...s } = e, a = r, c = Ue(null), d = Ue(null), [p, f] = jn({ options: l, events: n, defer: o });
  return et(() => {
    let { current: u } = c, { current: v } = d;
    return u && v && p({ target: u, elements: { viewport: v, content: v } }), () => {
      var C;
      return (C = f()) == null ? void 0 : C.destroy();
    };
  }, [p, r]), xl(t, () => ({ osInstance: f, getElement: () => c.current }), []), hr.createElement(a, { "data-overlayscrollbars-initialize": "", ref: c, ...s }, hr.createElement("div", { ref: d }, i));
}, wl = Sl(qn), Wn = wl, Un = wl;
export {
  Wn as OverlayScrollbars,
  Un as default
};
