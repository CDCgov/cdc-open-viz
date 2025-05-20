import { j as p, a as P, F as Fe } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as Y } from "./storybook-index-f2fed736.es.js";
import { P as ft, L as xe, E as _e, a as ht } from "./storybook-viewports-6b80499f.es.js";
import { i as De, u as Je, j as ke, c as Xe, f as ae, e as bt, k as re, h as oe, g as pt, l as se } from "./storybook-year-24bd1dc7.es.js";
import { n as Ee, c as gt } from "./storybook-index-80cf478c.es.js";
import { _ as q } from "./storybook-lodash-a4231e1c.es.js";
import { p as et } from "./storybook-index-31bf6905.es.js";
import { a as yt } from "./storybook-Icon-e250778e.es.js";
import { c as Ve } from "./storybook-colorPalettes-bc80e395.es.js";
import { T as Te } from "./storybook-Table-7ddd1662.es.js";
import { f as Ct } from "./storybook-footnoteSymbols-a3828433.es.js";
const Pe = ({ skipId: e, skipMessage: n }) => {
  const t = Y.useId(), a = () => {
    const r = document.getElementById(e);
    if (r) {
      r.scrollIntoView(), r.setAttribute("tabIndex", "-1"), r.focus();
      const s = () => {
        r.removeAttribute("tabIndex"), r.removeEventListener("blur", s);
      };
      r.addEventListener("blur", s);
    }
  };
  return /* @__PURE__ */ p(
    "div",
    {
      tabIndex: 0,
      id: `skip-nav--${t}`,
      className: "cdcdataviz-sr-only-focusable",
      onClick: a,
      onKeyDown: (r) => {
        (r.key === "Enter" || r.key === " ") && a();
      },
      role: "link",
      "aria-label": n,
      children: n
    }
  );
};
function Ne(e) {
  if (0 <= e.y && e.y < 100) {
    var n = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return n.setFullYear(e.y), n;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Me(e) {
  if (0 <= e.y && e.y < 100) {
    var n = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return n.setUTCFullYear(e.y), n;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ee(e, n, t) {
  return { y: e, m: n, d: t, H: 0, M: 0, S: 0, L: 0 };
}
function vt(e) {
  var n = e.dateTime, t = e.date, a = e.time, r = e.periods, s = e.days, i = e.shortDays, o = e.months, m = e.shortMonths, f = te(r), S = ne(r), g = te(s), v = ne(s), c = te(i), h = ne(i), y = te(o), d = ne(o), b = te(m), D = ne(m), w = {
    a: Se,
    A: J,
    b: ce,
    B: ue,
    c: null,
    d: Ke,
    e: Ke,
    f: Yt,
    g: Xt,
    G: tn,
    H: Rt,
    I: Ht,
    j: jt,
    L: tt,
    m: Kt,
    M: zt,
    p: de,
    q: me,
    Q: Ge,
    s: Be,
    S: $t,
    u: Gt,
    U: Bt,
    V: qt,
    w: Zt,
    W: Qt,
    x: null,
    X: null,
    y: Jt,
    Y: en,
    Z: nn,
    "%": $e
  }, L = {
    a: fe,
    A: he,
    b: be,
    B: N,
    c: null,
    d: ze,
    e: ze,
    f: sn,
    g: gn,
    G: Cn,
    H: an,
    I: rn,
    j: on,
    L: at,
    m: ln,
    M: cn,
    p: O,
    q: A,
    Q: Ge,
    s: Be,
    S: un,
    u: dn,
    U: mn,
    V: fn,
    w: hn,
    W: bn,
    x: null,
    X: null,
    y: pn,
    Y: yn,
    Z: vn,
    "%": $e
  }, V = {
    a: U,
    A: W,
    b: K,
    B: ie,
    c: Q,
    d: je,
    e: je,
    f: Et,
    g: He,
    G: Re,
    H: Ye,
    I: Ye,
    j: Ft,
    L: _t,
    m: Lt,
    M: It,
    p: j,
    q: Ot,
    Q: Pt,
    s: Wt,
    S: Ut,
    u: Mt,
    U: wt,
    V: Dt,
    w: Nt,
    W: kt,
    x: le,
    X: ve,
    y: He,
    Y: Re,
    Z: At,
    "%": Vt
  };
  w.x = F(t, w), w.X = F(a, w), w.c = F(n, w), L.x = F(t, L), L.X = F(a, L), L.c = F(n, L);
  function F(u, C) {
    return function(x) {
      var l = [], k = -1, T = 0, _ = u.length, I, R, X;
      for (x instanceof Date || (x = /* @__PURE__ */ new Date(+x)); ++k < _; )
        u.charCodeAt(k) === 37 && (l.push(u.slice(T, k)), (R = We[I = u.charAt(++k)]) != null ? I = u.charAt(++k) : R = I === "e" ? " " : "0", (X = C[I]) && (I = X(x, R)), l.push(I), T = k + 1);
      return l.push(u.slice(T, k)), l.join("");
    };
  }
  function H(u, C) {
    return function(x) {
      var l = ee(1900, void 0, 1), k = z(l, u, x += "", 0), T, _;
      if (k != x.length)
        return null;
      if ("Q" in l)
        return new Date(l.Q);
      if ("s" in l)
        return new Date(l.s * 1e3 + ("L" in l ? l.L : 0));
      if (C && !("Z" in l) && (l.Z = 0), "p" in l && (l.H = l.H % 12 + l.p * 12), l.m === void 0 && (l.m = "q" in l ? l.q : 0), "V" in l) {
        if (l.V < 1 || l.V > 53)
          return null;
        "w" in l || (l.w = 1), "Z" in l ? (T = Me(ee(l.y, 0, 1)), _ = T.getUTCDay(), T = _ > 4 || _ === 0 ? De.ceil(T) : De(T), T = Je.offset(T, (l.V - 1) * 7), l.y = T.getUTCFullYear(), l.m = T.getUTCMonth(), l.d = T.getUTCDate() + (l.w + 6) % 7) : (T = Ne(ee(l.y, 0, 1)), _ = T.getDay(), T = _ > 4 || _ === 0 ? ke.ceil(T) : ke(T), T = Xe.offset(T, (l.V - 1) * 7), l.y = T.getFullYear(), l.m = T.getMonth(), l.d = T.getDate() + (l.w + 6) % 7);
      } else
        ("W" in l || "U" in l) && ("w" in l || (l.w = "u" in l ? l.u % 7 : "W" in l ? 1 : 0), _ = "Z" in l ? Me(ee(l.y, 0, 1)).getUTCDay() : Ne(ee(l.y, 0, 1)).getDay(), l.m = 0, l.d = "W" in l ? (l.w + 6) % 7 + l.W * 7 - (_ + 5) % 7 : l.w + l.U * 7 - (_ + 6) % 7);
      return "Z" in l ? (l.H += l.Z / 100 | 0, l.M += l.Z % 100, Me(l)) : Ne(l);
    };
  }
  function z(u, C, x, l) {
    for (var k = 0, T = C.length, _ = x.length, I, R; k < T; ) {
      if (l >= _)
        return -1;
      if (I = C.charCodeAt(k++), I === 37) {
        if (I = C.charAt(k++), R = V[I in We ? C.charAt(k++) : I], !R || (l = R(u, x, l)) < 0)
          return -1;
      } else if (I != x.charCodeAt(l++))
        return -1;
    }
    return l;
  }
  function j(u, C, x) {
    var l = f.exec(C.slice(x));
    return l ? (u.p = S.get(l[0].toLowerCase()), x + l[0].length) : -1;
  }
  function U(u, C, x) {
    var l = c.exec(C.slice(x));
    return l ? (u.w = h.get(l[0].toLowerCase()), x + l[0].length) : -1;
  }
  function W(u, C, x) {
    var l = g.exec(C.slice(x));
    return l ? (u.w = v.get(l[0].toLowerCase()), x + l[0].length) : -1;
  }
  function K(u, C, x) {
    var l = b.exec(C.slice(x));
    return l ? (u.m = D.get(l[0].toLowerCase()), x + l[0].length) : -1;
  }
  function ie(u, C, x) {
    var l = y.exec(C.slice(x));
    return l ? (u.m = d.get(l[0].toLowerCase()), x + l[0].length) : -1;
  }
  function Q(u, C, x) {
    return z(u, n, C, x);
  }
  function le(u, C, x) {
    return z(u, t, C, x);
  }
  function ve(u, C, x) {
    return z(u, a, C, x);
  }
  function Se(u) {
    return i[u.getDay()];
  }
  function J(u) {
    return s[u.getDay()];
  }
  function ce(u) {
    return m[u.getMonth()];
  }
  function ue(u) {
    return o[u.getMonth()];
  }
  function de(u) {
    return r[+(u.getHours() >= 12)];
  }
  function me(u) {
    return 1 + ~~(u.getMonth() / 3);
  }
  function fe(u) {
    return i[u.getUTCDay()];
  }
  function he(u) {
    return s[u.getUTCDay()];
  }
  function be(u) {
    return m[u.getUTCMonth()];
  }
  function N(u) {
    return o[u.getUTCMonth()];
  }
  function O(u) {
    return r[+(u.getUTCHours() >= 12)];
  }
  function A(u) {
    return 1 + ~~(u.getUTCMonth() / 3);
  }
  return {
    format: function(u) {
      var C = F(u += "", w);
      return C.toString = function() {
        return u;
      }, C;
    },
    parse: function(u) {
      var C = H(u += "", !1);
      return C.toString = function() {
        return u;
      }, C;
    },
    utcFormat: function(u) {
      var C = F(u += "", L);
      return C.toString = function() {
        return u;
      }, C;
    },
    utcParse: function(u) {
      var C = H(u += "", !0);
      return C.toString = function() {
        return u;
      }, C;
    }
  };
}
var We = { "-": "", _: " ", 0: "0" }, E = /^\s*\d+/, St = /^%/, xt = /[\\^$*+?|[\]().{}]/g;
function M(e, n, t) {
  var a = e < 0 ? "-" : "", r = (a ? -e : e) + "", s = r.length;
  return a + (s < t ? new Array(t - s + 1).join(n) + r : r);
}
function Tt(e) {
  return e.replace(xt, "\\$&");
}
function te(e) {
  return new RegExp("^(?:" + e.map(Tt).join("|") + ")", "i");
}
function ne(e) {
  return new Map(e.map((n, t) => [n.toLowerCase(), t]));
}
function Nt(e, n, t) {
  var a = E.exec(n.slice(t, t + 1));
  return a ? (e.w = +a[0], t + a[0].length) : -1;
}
function Mt(e, n, t) {
  var a = E.exec(n.slice(t, t + 1));
  return a ? (e.u = +a[0], t + a[0].length) : -1;
}
function wt(e, n, t) {
  var a = E.exec(n.slice(t, t + 2));
  return a ? (e.U = +a[0], t + a[0].length) : -1;
}
function Dt(e, n, t) {
  var a = E.exec(n.slice(t, t + 2));
  return a ? (e.V = +a[0], t + a[0].length) : -1;
}
function kt(e, n, t) {
  var a = E.exec(n.slice(t, t + 2));
  return a ? (e.W = +a[0], t + a[0].length) : -1;
}
function Re(e, n, t) {
  var a = E.exec(n.slice(t, t + 4));
  return a ? (e.y = +a[0], t + a[0].length) : -1;
}
function He(e, n, t) {
  var a = E.exec(n.slice(t, t + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), t + a[0].length) : -1;
}
function At(e, n, t) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(t, t + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), t + a[0].length) : -1;
}
function Ot(e, n, t) {
  var a = E.exec(n.slice(t, t + 1));
  return a ? (e.q = a[0] * 3 - 3, t + a[0].length) : -1;
}
function Lt(e, n, t) {
  var a = E.exec(n.slice(t, t + 2));
  return a ? (e.m = a[0] - 1, t + a[0].length) : -1;
}
function je(e, n, t) {
  var a = E.exec(n.slice(t, t + 2));
  return a ? (e.d = +a[0], t + a[0].length) : -1;
}
function Ft(e, n, t) {
  var a = E.exec(n.slice(t, t + 3));
  return a ? (e.m = 0, e.d = +a[0], t + a[0].length) : -1;
}
function Ye(e, n, t) {
  var a = E.exec(n.slice(t, t + 2));
  return a ? (e.H = +a[0], t + a[0].length) : -1;
}
function It(e, n, t) {
  var a = E.exec(n.slice(t, t + 2));
  return a ? (e.M = +a[0], t + a[0].length) : -1;
}
function Ut(e, n, t) {
  var a = E.exec(n.slice(t, t + 2));
  return a ? (e.S = +a[0], t + a[0].length) : -1;
}
function _t(e, n, t) {
  var a = E.exec(n.slice(t, t + 3));
  return a ? (e.L = +a[0], t + a[0].length) : -1;
}
function Et(e, n, t) {
  var a = E.exec(n.slice(t, t + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), t + a[0].length) : -1;
}
function Vt(e, n, t) {
  var a = St.exec(n.slice(t, t + 1));
  return a ? t + a[0].length : -1;
}
function Pt(e, n, t) {
  var a = E.exec(n.slice(t));
  return a ? (e.Q = +a[0], t + a[0].length) : -1;
}
function Wt(e, n, t) {
  var a = E.exec(n.slice(t));
  return a ? (e.s = +a[0], t + a[0].length) : -1;
}
function Ke(e, n) {
  return M(e.getDate(), n, 2);
}
function Rt(e, n) {
  return M(e.getHours(), n, 2);
}
function Ht(e, n) {
  return M(e.getHours() % 12 || 12, n, 2);
}
function jt(e, n) {
  return M(1 + Xe.count(ae(e), e), n, 3);
}
function tt(e, n) {
  return M(e.getMilliseconds(), n, 3);
}
function Yt(e, n) {
  return tt(e, n) + "000";
}
function Kt(e, n) {
  return M(e.getMonth() + 1, n, 2);
}
function zt(e, n) {
  return M(e.getMinutes(), n, 2);
}
function $t(e, n) {
  return M(e.getSeconds(), n, 2);
}
function Gt(e) {
  var n = e.getDay();
  return n === 0 ? 7 : n;
}
function Bt(e, n) {
  return M(bt.count(ae(e) - 1, e), n, 2);
}
function nt(e) {
  var n = e.getDay();
  return n >= 4 || n === 0 ? re(e) : re.ceil(e);
}
function qt(e, n) {
  return e = nt(e), M(re.count(ae(e), e) + (ae(e).getDay() === 4), n, 2);
}
function Zt(e) {
  return e.getDay();
}
function Qt(e, n) {
  return M(ke.count(ae(e) - 1, e), n, 2);
}
function Jt(e, n) {
  return M(e.getFullYear() % 100, n, 2);
}
function Xt(e, n) {
  return e = nt(e), M(e.getFullYear() % 100, n, 2);
}
function en(e, n) {
  return M(e.getFullYear() % 1e4, n, 4);
}
function tn(e, n) {
  var t = e.getDay();
  return e = t >= 4 || t === 0 ? re(e) : re.ceil(e), M(e.getFullYear() % 1e4, n, 4);
}
function nn(e) {
  var n = e.getTimezoneOffset();
  return (n > 0 ? "-" : (n *= -1, "+")) + M(n / 60 | 0, "0", 2) + M(n % 60, "0", 2);
}
function ze(e, n) {
  return M(e.getUTCDate(), n, 2);
}
function an(e, n) {
  return M(e.getUTCHours(), n, 2);
}
function rn(e, n) {
  return M(e.getUTCHours() % 12 || 12, n, 2);
}
function on(e, n) {
  return M(1 + Je.count(oe(e), e), n, 3);
}
function at(e, n) {
  return M(e.getUTCMilliseconds(), n, 3);
}
function sn(e, n) {
  return at(e, n) + "000";
}
function ln(e, n) {
  return M(e.getUTCMonth() + 1, n, 2);
}
function cn(e, n) {
  return M(e.getUTCMinutes(), n, 2);
}
function un(e, n) {
  return M(e.getUTCSeconds(), n, 2);
}
function dn(e) {
  var n = e.getUTCDay();
  return n === 0 ? 7 : n;
}
function mn(e, n) {
  return M(pt.count(oe(e) - 1, e), n, 2);
}
function rt(e) {
  var n = e.getUTCDay();
  return n >= 4 || n === 0 ? se(e) : se.ceil(e);
}
function fn(e, n) {
  return e = rt(e), M(se.count(oe(e), e) + (oe(e).getUTCDay() === 4), n, 2);
}
function hn(e) {
  return e.getUTCDay();
}
function bn(e, n) {
  return M(De.count(oe(e) - 1, e), n, 2);
}
function pn(e, n) {
  return M(e.getUTCFullYear() % 100, n, 2);
}
function gn(e, n) {
  return e = rt(e), M(e.getUTCFullYear() % 100, n, 2);
}
function yn(e, n) {
  return M(e.getUTCFullYear() % 1e4, n, 4);
}
function Cn(e, n) {
  var t = e.getUTCDay();
  return e = t >= 4 || t === 0 ? se(e) : se.ceil(e), M(e.getUTCFullYear() % 1e4, n, 4);
}
function vn() {
  return "+0000";
}
function $e() {
  return "%";
}
function Ge(e) {
  return +e;
}
function Be(e) {
  return Math.floor(+e / 1e3);
}
var G, ot, Ce;
Sn({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Sn(e) {
  return G = vt(e), ot = G.format, Ce = G.parse, G.utcFormat, G.utcParse, G;
}
const ge = {
  pdf: "Download PDF",
  image: "Download Image",
  csv: "Download Data (CSV)",
  link: "Link to Dataset"
}, xn = (e, n) => {
  const t = navigator.userAgent.match(/MSIE\s([\d.]+)/), a = navigator.userAgent.match(/Trident\/7.0/) && navigator.userAgent.match(/rv:11/), r = navigator.userAgent.match(/Edge/g);
  if ((t ? t[1] : a ? 11 : r ? 12 : -1) > -1) {
    const i = new Blob([e], {
      type: "image/png"
    });
    window.navigator.msSaveBlob(i, n);
  } else {
    const i = document.createElement("a");
    typeof i.download == "string" ? (i.href = e, i.download = n, i.onclick = (o) => document.body.removeChild(o.target), document.body.appendChild(i), i.click()) : window.open(e);
  }
}, st = (e, n, t) => {
  const a = document.querySelector(`[data-download-id=${t}]`), r = (o) => {
    var m, f;
    return (m = o == null ? void 0 : o.dashboard) != null && m.title ? o.dashboard.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : (f = o == null ? void 0 : o.general) != null && f.title ? o.general.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : o != null && o.title ? o.title.replace(/\s+/g, "-").toLowerCase() + "-" + s.getDate() + s.getMonth() + s.getFullYear() : "no-title";
  }, s = /* @__PURE__ */ new Date(), i = r(e);
  switch (n) {
    case "image":
      (async () => {
        import(
          /* webpackChunkName: "html2canvas" */
          "./storybook-html2canvas.esm-1a1724a1.es.js"
        ).then((m) => {
          m.default(a, {
            ignoreElements: (f) => {
              var S;
              return ((S = f.className) == null ? void 0 : S.indexOf) && f.className.search(/download-buttons|download-links|data-table-container/) !== -1;
            }
          }).then((f) => {
            xn(f.toDataURL(), i + ".png");
          });
        });
      })();
      return;
    case "pdf":
      console.warn("COVE: pdf downloads disabled");
      break;
    default:
      console.warn("COVE: generateMedia param 2 type must be 'image' or 'pdf'");
      break;
  }
}, Tn = ({ state: e, text: n, type: t, title: a, elementToCapture: r }) => /* @__PURE__ */ p(
  "button",
  {
    className: ["btn", "btn-primary"].join(" "),
    title: a,
    onClick: () => st(e, t, r),
    style: { lineHeight: "1.4em" },
    children: ge[t]
  }
), Nn = ({ config: e, dashboardDataConfig: n }) => {
  var a;
  let t = n || e;
  return t.dataFileSourceType === "url" && t.dataFileName && e.table.showDownloadUrl ? /* @__PURE__ */ p("a", { href: t.dataFileName, title: ge.link, target: "_blank", children: ge.link }) : (a = e == null ? void 0 : e.table) != null && a.showDownloadUrl && t.dataUrl ? /* @__PURE__ */ p("a", { href: t.dataUrl, title: "Link to view full data set", target: "_blank", children: ge.link }) : null;
}, Mn = ({ children: e, classes: n }) => /* @__PURE__ */ p("section", { className: n.join(" "), children: /* @__PURE__ */ p("span", { children: e }) }), Z = () => null;
Z.Section = Mn;
Z.Link = Nn;
Z.Button = Tn;
Z.generateMedia = st;
const wn = ({ rawData: e, fileName: n, headerColor: t, skipId: a }) => {
  const r = ft.unparse(e), s = "\uFEFF", i = new TextEncoder().encode(s + r), o = new Blob([i], { type: "text/csv;charset=utf-8;" });
  return /* @__PURE__ */ p(
    "a",
    {
      download: n,
      type: "button",
      onClick: () => {
        typeof window.navigator.msSaveBlob == "function" && navigator.msSaveBlob(o, n);
      },
      href: URL.createObjectURL(o),
      "aria-label": "Download this data in a CSV file format.",
      className: `${t} no-border`,
      id: `${a}`,
      "data-html2canvas-ignore": !0,
      role: "button",
      children: "Download Data (CSV)"
    }
  );
};
function Dn(e = void 0, n) {
  return ot(e)(n);
}
function Ae(e = void 0, n) {
  return Ce(e)(n) || /* @__PURE__ */ new Date();
}
const ha = (e) => {
  try {
    if (!e)
      throw new Error("COVE: No axis passed to isDateScale");
    return ["date", "date-time"].includes(e.type);
  } catch ({ message: n }) {
    console.warn(n);
  }
}, kn = {
  AL: "Alabama",
  AK: "Alaska",
  AS: "American Samoa",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  DC: "District Of Columbia",
  FM: "Federated States Of Micronesia",
  FL: "Florida",
  GA: "Georgia",
  GU: "Guam",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MH: "Marshall Islands",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  MP: "Northern Mariana Islands",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PW: "Palau",
  PA: "Pennsylvania",
  PR: "Puerto Rico",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VI: "Virgin Islands",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming"
}, qe = (e) => {
  if (typeof e != "string" || !isNaN(Number(e)))
    return e;
  const n = e.toUpperCase();
  return ["U.S. VIRGIN ISLANDS", "VI", "US VIRGIN ISLANDS", "VIRGIN ISLANDS"].includes(n) ? "U.S. VIRGIN ISLANDS" : kn[n] || e;
}, ye = (e, n, t, a) => {
  var S, g, v;
  let r = e, s = n;
  if (a.type === "map" && (r = qe(e), s = qe(n), String(r).toLowerCase().includes("region") && String(s).toLowerCase().includes("region"))) {
    const c = parseInt(e.match(/\d+$/)[0], 10), h = parseInt(n.match(/\d+$/)[0], 10);
    return t.asc ? Number(c) - Number(h) : Number(h) - Number(c);
  }
  r = r === !1 || r === !0 || r === null ? "" : r, s = s === !1 || s === !0 || s === null ? "" : s;
  const i = String(r).trim(), o = String(s).trim();
  if (((S = a.xAxis) == null ? void 0 : S.dataKey) === t.column && ["date", "date-time"].includes(a.xAxis.type)) {
    const c = (g = Ae(a.xAxis.dateParseFormat, i)) == null ? void 0 : g.getTime(), h = (v = Ae(a.xAxis.dateParseFormat, o)) == null ? void 0 : v.getTime();
    return t.asc ? c - h : h - c;
  }
  const m = !isNaN(Number(r)) && r !== void 0 && r !== null && i !== "", f = !isNaN(Number(s)) && s !== void 0 && s !== null && o !== "";
  return i === "" && o !== "" ? t.asc ? -1 : 1 : i !== "" && o === "" ? t.asc ? 1 : -1 : m && f ? t.asc ? Number(r) - Number(s) : Number(s) - Number(r) : m ? t.asc ? -1 : 1 : f ? t.asc ? 1 : -1 : t.asc ? i.localeCompare(o) : o.localeCompare(i);
}, Ze = (e) => {
  let n = "", t = Math.abs(e);
  return t >= 1e9 ? (n = "B", e = e / 1e9) : t >= 1e6 ? (n = "M", e = e / 1e6) : t >= 1e3 && (n = "K", e = e / 1e3), e + n;
}, we = (e, n, t = !1, a = null, r = null) => {
  if (a || console.error("no config found in formatNumber"), isNaN(e) || !e)
    return e;
  const s = e < 0;
  s && (e = Math.abs(e));
  let {
    dataFormat: {
      abbreviated: i,
      bottomAbbreviated: o,
      bottomPrefix: m,
      bottomRoundTo: f,
      bottomSuffix: S,
      bottomComas: g,
      commas: v,
      onlyShowTopPrefixSuffix: c,
      prefix: h,
      rightPrefix: y,
      rightRoundTo: d,
      rightSuffix: b,
      roundTo: D,
      suffix: w
    }
  } = a;
  const { addColCommas: L, addColRoundTo: V, addColPrefix: F, addColSuffix: H } = r || {};
  String(e).indexOf(",") !== -1 && (e = e.replaceAll(",", ""));
  let z = e, j;
  if (n === "left") {
    let W;
    V !== void 0 ? W = V ? Number(V) : 0 : W = D ? Number(D) : 0, W < 0 && (W = 0);
    let K;
    L !== void 0 ? K = !!L : K = !!a.dataFormat.commas, j = {
      useGrouping: K,
      minimumFractionDigits: W,
      maximumFractionDigits: W
    };
  }
  if (n === "right" && (j = {
    useGrouping: !!a.dataFormat.rightCommas,
    minimumFractionDigits: d ? Number(d) : 0,
    maximumFractionDigits: d ? Number(d) : 0
  }), n === "bottom" && (j = {
    useGrouping: !!a.dataFormat.bottomCommas,
    minimumFractionDigits: f ? Number(f) : 0,
    maximumFractionDigits: f ? Number(f) : 0
  }), e = Ee(e), isNaN(e))
    return a.runtime.editorErrorMessage = `Unable to parse number from data ${z}. Try reviewing your data and selections in the Data Series section.`, z;
  if (!a.dataFormat)
    return e;
  if (a.dataCutoff) {
    let W = Ee(a.dataCutoff);
    e < W && (e = W);
  }
  n === "left" && v && i && t || n === "bottom" && v && i && t ? e = e : e = e.toLocaleString("en-US", j);
  let U = "";
  return i && n === "left" && t && (e = Ze(parseFloat(e))), o && n === "bottom" && t && (e = Ze(parseFloat(e))), c || (F !== void 0 && n === "left" ? U = F + U : h && n === "left" && (U = h + U), y && n === "right" && (U += y), m && n === "bottom" && (U += m)), U += e, c || (H !== void 0 && n === "left" ? U += H : w && n === "left" && (U += w), b && n === "right" && (U += b), S && n === "bottom" && (U += S)), s && (U = "-" + U), String(U);
}, An = (e, n) => {
  var s, i, o;
  const t = (i = (s = n.table.pivot) == null ? void 0 : s.valueColumns) == null ? void 0 : i.length, a = Object.keys(((o = n.data) == null ? void 0 : o[0]) || {}), r = a.length && !a.includes(e);
  return t && r;
}, On = (e, n, t) => {
  const a = An(e, n) ? t._pivotedFrom : e;
  let r = {};
  const { columns: s } = n;
  return s && Object.keys(s).forEach((i) => {
    const o = s[i];
    o.name === a && (r = {
      addColPrefix: o.prefix,
      addColSuffix: o.suffix,
      addColRoundTo: o.roundToPlace ? o.roundToPlace : "",
      addColCommas: o.commas
    });
  }), r;
}, B = (e, n, t, a) => {
  var m, f, S, g, v;
  if (t.visualizationType === "Sankey" || (m = a == null ? void 0 : a[0]) != null && m.tableData)
    return a[e][n];
  const r = a[e];
  let s;
  const i = r[n];
  if (n === ((f = t.xAxis) == null ? void 0 : f.dataKey)) {
    const { type: c, dateDisplayFormat: h, dateParseFormat: y } = t.xAxis || {}, d = ((S = t.table) == null ? void 0 : S.dateDisplayFormat) || h;
    c === "date" || c === "date-time" ? s = Dn(d, Ae(y, i)) : c === "continuous" ? s = we(a[e][n], "bottom", !1, t) : s = i;
  } else {
    let c = "left", h = t.series ? t.series.filter((b) => (b == null ? void 0 : b.axis) === "Left") : [], y = t.series ? t.series.filter((b) => (b == null ? void 0 : b.axis) === "Right") : [];
    h.map((b) => {
      b.dataKey === n && (c = "left");
    }), y.map((b) => {
      b.dataKey === n && (c = "right");
    });
    let d = On(n, t, r);
    d ? s = t.dataFormat ? we(a[e][n], c, !1, t, d) : a[e][n] : s = t.dataFormat ? we(a[e][n], c, !1, t) : a[e][n];
  }
  return (g = t.preliminaryData) == null || g.forEach((c) => {
    var w, L, V, F;
    const h = String(c.value) === String(i), y = !c.column || c.column === n, d = (L = (w = t.runtime) == null ? void 0 : w.barSeriesKeys) == null ? void 0 : L.includes(n), b = (F = (V = t.runtime) == null ? void 0 : V.lineSeriesKeys) == null ? void 0 : F.includes(n), D = t.general.showSuppressedSymbol;
    if (h && y && c.displayTable && c.type === "suppression" && t.visualizationSubType !== "stacked")
      switch (t.visualizationType) {
        case "Combo":
          s = d && D ? c.iconCode : b && D ? c.lineCode : "";
          break;
        case "Bar":
          s = D ? c.iconCode : "";
          break;
        case "Line":
          s = D ? c.lineCode : "";
          break;
      }
  }), ((v = t.general) == null ? void 0 : v.showMissingDataLabel) && (!i || i === "null") ? "N/A" : s;
}, Ln = (e, n) => {
  const a = Object.values(n.columns || {}).find((r) => r.name === e);
  return a != null && a.label ? a.label : e;
}, it = (e, n) => {
  var s, i, o;
  const t = (s = n.series) == null ? void 0 : s.find((m) => m.dataKey === e);
  if (t != null && t.name)
    return t.name;
  if (n.runtimeSeriesLabels && n.runtimeSeriesLabels[e])
    return n.runtimeSeriesLabels[e];
  const a = e === ((i = n.xAxis) == null ? void 0 : i.dataKey), r = (o = n.table) == null ? void 0 : o.indexLabel;
  return a && r ? r : Ln(e, n);
}, Ie = (e, n, t) => {
  var m, f, S, g, v, c, h, y;
  if (e.visualizationType === "Sankey")
    return Object.keys((f = (m = e == null ? void 0 : e.data) == null ? void 0 : m[0]) == null ? void 0 : f.tableData[0]);
  const a = q.cloneDeep(e.columns) || {}, r = Object.values(a).filter((d) => d.dataTable === !1).map((d) => d.name);
  let s = [];
  e.visualizationType !== "Pie" ? (s = n ? [(S = e.xAxis) == null ? void 0 : S.dataKey] : [], (g = e.runtime) != null && g.series ? (v = e.runtime) == null || v.series.forEach((d) => {
    s.push(d.dataKey);
  }) : t && t.length > 0 && (s = Object.keys(t[0]))) : s = n ? [(c = e.xAxis) == null ? void 0 : c.dataKey, (h = e.yAxis) == null ? void 0 : h.dataKey] : [(y = e.yAxis) == null ? void 0 : y.dataKey];
  const i = Object.keys(t[0] || {});
  Object.values(a).forEach(function(d) {
    var w;
    if (!d.name)
      return;
    const b = s.includes(d.name), D = i.includes(d.name);
    d.name !== ((w = e.xAxis) == null ? void 0 : w.dataKey) && d.dataTable === !0 && !b && D && s.push(d.name);
  });
  const o = Object.values(a).reduce((d, b) => (b.order !== void 0 && (d[b.name] = b.order - 1), d), {});
  return s = s.filter((d) => !r.includes(d)), s.forEach((d, b) => {
    o[d] === void 0 && (Object.values(o).includes(b) ? o[d] = b + 1 : o[d] = b);
  }), s.sort((d, b) => d === "_pivotedFrom" ? -1 : b === "_pivotedFrom" ? 1 : o[d] - o[b]), s.filter((d) => d !== "_pivotedFrom");
}, lt = (e) => {
  const n = e.as;
  return /* @__PURE__ */ p(n, { className: "cdcdataviz-sr-only", children: e.children });
};
const Fn = ({ active: e }) => /* @__PURE__ */ p("svg", { className: "up" + (e ? " active" : ""), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5", children: /* @__PURE__ */ p("path", { d: "M0 5l5-5 5 5z" }) }), In = ({ active: e }) => /* @__PURE__ */ p("svg", { className: "down" + (e ? " active" : ""), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 5", children: /* @__PURE__ */ p("path", { d: "M0 0l5 5 5-5z" }) }), Oe = ({ ascending: e }) => /* @__PURE__ */ P("span", { role: "button", className: "sort-icon", children: [
  /* @__PURE__ */ p(Fn, { active: e === !0 }),
  /* @__PURE__ */ p(In, { active: e === !1 })
] }), Le = (e, n, t) => {
  let a, r = n;
  const s = e.asc === !0, i = e.asc === !1, o = e.asc === void 0;
  return e.column === void 0 || e.column !== n ? a = !0 : (i && (r = void 0, a = void 0), o && (a = !0), s && (a = !1)), { column: r, asc: a, colIndex: t };
}, Un = ({
  data: e,
  isVertical: n,
  config: t,
  setSortBy: a,
  sortBy: r,
  hasRowType: s,
  viewport: i,
  rightAlignedCols: o
}) => {
  var v;
  const m = (v = t.table) == null ? void 0 : v.groupBy;
  if (!e)
    return;
  let f = Ie(t, n, e);
  if (m) {
    let c = f.filter((h) => h !== m);
    c.length != f.length && (f = c);
  }
  const S = ({ text: c, config: h, sortBy: y }) => {
    const d = "Not Applicable";
    let b = `${c} `;
    if ((c !== "__series__" || c !== "") && (b = `${c} `), (c === "__series__" || c === "") && !h.table.indexLabel && (b = d), (c === "__series__" || c === "") && h.table.indexLabel && (b = h.table.indexLabel), b !== d)
      return /* @__PURE__ */ p("span", { className: "cdcdataviz-sr-only", children: `Press command, modifier, or enter key to sort by ${b} in ${y.column !== b ? "ascending" : y.column === "desc" ? "descending" : "ascending"}  order` });
  }, g = ({ column: c, text: h, config: y }) => {
    if (h === "_pivotedFrom")
      return "";
    let d = "Not Applicable";
    return h === "__series__" && y.table.indexLabel ? `${y.table.indexLabel} ` : h === "__series__" && !y.table.indexLabel ? /* @__PURE__ */ p(lt, { as: "span", children: d }) : h;
  };
  if (n) {
    if (s) {
      const c = /row[_-]?type/i, h = f.findIndex((y) => c.test(y));
      h > -1 && f.splice(h, 1);
    }
    return /* @__PURE__ */ p("tr", { children: f.map((c, h) => {
      const y = et(it(c, t)), d = Le(r, c, h), b = r.column === c ? r.asc : void 0, D = c === r.column && !s;
      return /* @__PURE__ */ P(
        "th",
        {
          style: {
            minWidth: (t.table.cellMinWidth || 0) + "px",
            textAlign: o && o[h] ? "right" : "",
            paddingRight: D ? "1.3em" : ""
          },
          tabIndex: 0,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            s || a(d);
          },
          onKeyDown: (w) => {
            s || w.keyCode === 13 && a(d);
          },
          ...r.column === c ? r.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null,
          children: [
            /* @__PURE__ */ p(g, { text: y, column: c, config: t }),
            D && /* @__PURE__ */ p(Oe, { ascending: b }),
            /* @__PURE__ */ p(S, { sortBy: r, config: t, text: y })
          ]
        },
        `col-header-${c}__${h}`
      );
    }) });
  } else {
    const c = t.visualizationType === "Pie" ? 1 : 0;
    return /* @__PURE__ */ p("tr", { children: ["__series__", ...Object.keys(e)].slice(c).map((h, y) => {
      var V;
      let d = (V = t.xAxis) == null ? void 0 : V.dataKey, b = h !== "__series__" ? B(h, d, t, e) : "__series__";
      const D = Le(r, d, y), w = r.colIndex === y ? r.asc : void 0, L = y === r.colIndex && !s;
      return /* @__PURE__ */ P(
        "th",
        {
          style: {
            minWidth: (t.table.cellMinWidth || 0) + "px",
            textAlign: o && o[y] ? "right" : "",
            paddingRight: L ? "1.3em" : ""
          },
          tabIndex: 0,
          role: "columnheader",
          scope: "col",
          onClick: () => {
            a(D);
          },
          onKeyDown: (F) => {
            F.keyCode === 13 && a(D);
          },
          ...r.column === b ? r.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null,
          children: [
            /* @__PURE__ */ p(g, { text: b, column: d, config: t }),
            L && /* @__PURE__ */ p(Oe, { ascending: w }),
            /* @__PURE__ */ p(S, { text: b, config: t, sortBy: r })
          ]
        },
        `col-header-${b}__${y}`
      );
    }) });
  }
}, _n = ({ categories: e }) => {
  let n = ["Measures", ...e];
  return /* @__PURE__ */ p("tr", { children: n.map((t) => /* @__PURE__ */ p("th", { tabIndex: 0, title: t, role: "columnheader", scope: "col", children: t }, `col-header-${t}`)) });
}, En = ({ text: e, config: n }) => {
  let t = "Not Applicable";
  return e === "__series__" && n.table.indexLabel ? `${n.table.indexLabel} ` : e === "__series__" && !n.table.indexLabel ? /* @__PURE__ */ p(lt, { as: "span", children: t }) : e;
}, Vn = ({ columns: e, config: n, indexTitle: t, sortBy: a, setSortBy: r, rightAlignedCols: s }) => /* @__PURE__ */ p("tr", { children: Object.keys(e).filter((i) => e[i].dataTable === !0 && e[i].name).map((i, o) => {
  var g;
  let m;
  i && i !== "geo" ? m = e[i].label ? e[i].label : e[i].name : m = n.type === "map" ? t : (g = n.xAxis) == null ? void 0 : g.dataKey, n.type === "map" && (m === void 0 || m === "") && (m = "Location");
  const f = Le(a, i, o), S = a.column === i ? a.asc : void 0;
  return /* @__PURE__ */ P(
    "th",
    {
      style: {
        minWidth: (n.table.cellMinWidth || 0) + "px",
        textAlign: s && s[o] ? "right" : "",
        paddingRight: "1.3em"
      },
      id: i,
      tabIndex: 0,
      role: "columnheader",
      scope: "col",
      onClick: () => {
        r(f);
      },
      onKeyDown: (v) => {
        v.keyCode === 13 && r(f);
      },
      className: a.column === i ? a.asc ? "sort sort-asc" : "sort sort-desc" : "sort",
      ...a.column === i ? a.asc ? { "aria-sort": "ascending" } : { "aria-sort": "descending" } : null,
      children: [
        /* @__PURE__ */ p(En, { text: m, config: n, column: i }),
        /* @__PURE__ */ p(Oe, { ascending: S }),
        /* @__PURE__ */ p("span", { className: "cdcdataviz-sr-only", children: `Sort by ${m} in ${a.column === i && a.asc ? "ascending" : "descending"} order` })
      ]
    },
    `col-header-${i}__${o}`
  );
}) }), Qe = ({ expanded: e, setExpanded: n, tableTitle: t, fontSize: a, viewport: r }) => /* @__PURE__ */ P(
  "div",
  {
    role: "button",
    className: e ? "data-table-heading p-3" : "collapsed data-table-heading p-3",
    onClick: () => {
      n(!e);
    },
    tabIndex: 0,
    onKeyDown: (s) => {
      s.keyCode === 13 && n(!e);
    },
    children: [
      /* @__PURE__ */ p(yt, { display: e ? "minus" : "plus", base: !0 }),
      t
    ]
  }
), ct = (e) => {
  const { fill: n, borderColor: t, display: a = "inline-block", shape: r = "circle" } = e, s = { width: "1em", height: "1em" }, i = ["circle", "square"].includes(r), o = {
    borderRadius: r === "circle" ? "50%" : "0px",
    verticalAlign: "middle",
    display: a,
    height: s.height,
    width: s.width,
    border: t ? `${t} 1px solid` : "rgba(0,0,0,.3) 1px solid",
    backgroundColor: n
  };
  return /* @__PURE__ */ p("span", { className: `legend-item ${i ? "me-2" : ""}`, style: o });
}, Pn = (e) => /* @__PURE__ */ Y.createElement("svg", { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Y.createElement("path", { d: "M432 320h-32c-8.837 0-16 7.163-16 16v112H64V128h144c8.837 0 16-7.163 16-16V80c0-8.837-7.163-16-16-16H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V336c0-8.837-7.163-16-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 000 34L157.67 377a24 24 0 0034 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24c0-13.255-10.745-24-24-24z", fillRule: "nonzero" }));
function Wn(e) {
  const n = ["cdc.gov", "localhost", "facebook.com", "twitter.com", "linkedin.com", "pinterest.com", "youtube.com", "youtube-nocookie.com", "plus.google.com", "instagram.com", "flickr.com", "tumblr.com", "cdc.sharepoint.com", "vaccines.gov", "vacunas.gov"], t = new URL(e, window.location.origin).hostname;
  let a = !0;
  return n.forEach((r) => {
    t.indexOf(r) !== -1 && t.indexOf(r) === t.length - r.length && (a = !1);
  }), a;
}
const Rn = ({ markup: e, row: n, columns: t, navigationHandler: a, mapZoomHandler: r }) => t.navigate && n[t.navigate.name] ? /* @__PURE__ */ P(
  "span",
  {
    onClick: () => a("_blank", n[t.navigate.name]),
    className: "table-link",
    title: "Click for more information (Opens in a new window)",
    role: "link",
    tabIndex: 0,
    onKeyDown: (s) => {
      s.keyCode === 13 && a(n[t.navigate.name]);
    },
    children: [
      e,
      Wn(n[t.navigate.name]) && /* @__PURE__ */ p(Pn, { className: "inline-icon" })
    ]
  }
) : r ? /* @__PURE__ */ p(
  "span",
  {
    onClick: r,
    className: "table-link",
    title: "Click to view on map",
    role: "link",
    tabIndex: 0,
    onKeyDown: (s) => {
      s.keyCode === 13 && r();
    },
    children: e
  }
) : /* @__PURE__ */ p(Fe, { children: e }), ut = (e, n, t) => {
  var s;
  if (!t)
    return e;
  if (e === null || e === "" || e === void 0)
    return "";
  if (typeof e == "string" && e.length > 0 && /[a-zA-Z]/.test(e) && ((s = t == null ? void 0 : t.legend) == null ? void 0 : s.type) === "equalnumber")
    return e;
  let a = e, r = t.columns[n];
  if (r === void 0 && (r = t.columns.primary, r.useCommas = r.commas, r.roundToPlace = r.roundTo ? r.roundTo : ""), r) {
    if (Number(e)) {
      const i = r.roundToPlace && (r.roundToPlace !== "" || r.roundToPlace !== null), o = r.roundToPlace ? Number(r.roundToPlace) : 0;
      r.hasOwnProperty("roundToPlace") && i && (a = Number(e).toFixed(o)), r.hasOwnProperty("useCommas") && r.useCommas === !0 && (a = Number(e).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: i ? o : 0,
        maximumFractionDigits: i ? o : 5
      }));
    }
    t.legend.specialClasses.includes(String(e)) === !1 && (a = (r.prefix || "") + a + (r.suffix || ""));
  }
  return a;
}, Hn = 880, jn = 500, ba = 50, pa = `0 0 ${Hn} ${jn}`, ga = [
  "theme-blue",
  "theme-purple",
  "theme-brown",
  "theme-teal",
  "theme-pink",
  "theme-orange",
  "theme-slate",
  "theme-indigo",
  "theme-cyan",
  "theme-green",
  "theme-amber"
], ya = 4, Ca = [
  "WASHINGTON D.C.",
  "DISTRICT OF COLUMBIA",
  "WASHINGTON DC",
  "DC",
  "WASHINGTON DC.",
  "D.C.",
  "D.C"
], va = {
  US: "us",
  US_REGION: "us-region",
  WORLD: "world",
  US_COUNTY: "us-county",
  SINGLE_STATE: "single-state",
  GOOGLE_MAP: "google-map"
}, Sa = {
  WORLD: "world-geocode",
  US: "us-geocode"
}, Yn = "#DFE1E2", pe = (e = Yn, n = !1) => {
  let t = gt(e), a = n ? t.brighten(0.5).hex() : t.saturate(1.3).hex();
  return [e, a, t.darken(0.3).hex()];
}, Kn = (e) => {
  try {
    if (!e || e === void 0)
      return null;
    let n = JSON.stringify(e), t = 0;
    if (n.length === 0)
      return t;
    for (let a = 0; a < n.length; a++) {
      let r = n.charCodeAt(a);
      t = (t << 5) - t + r, t = t & t;
    }
    return t;
  } catch (n) {
    console.error({ state: "COVE: " + n.message });
  }
}, zn = (e, n, t, a, r) => {
  var S, g, v, c;
  if (!n)
    return null;
  const { general: s, color: i, legend: o } = n, { type: m } = s, { showSpecialClassesLast: f } = o;
  try {
    if (!e)
      return console.error("COVE: No rowObj in applyLegendToRow"), null;
    if (m === "navigation") {
      const D = Ve[i] ?? Ve.bluegreenreverse;
      return pe(D[3]);
    }
    const h = Kn(e);
    if (!a.current.has(h))
      return pe();
    const y = a.current.get(h), d = f ? r.current.get(h) ?? y : y;
    if ((g = (S = t.items) == null ? void 0 : S[d]) != null && g.disabled)
      return pe();
    const b = (v = t.items.find((D) => D.bin === y)) == null ? void 0 : v.color;
    return pe(b, (c = t.items[y]) == null ? void 0 : c.special);
  } catch (h) {
    return console.error("COVE: ", h), null;
  }
}, dt = (e, n, t, a) => {
  const { geoType: r, type: s } = e.general;
  let i;
  return !["single-state", "us-county"].includes(r) || s === "us-geocode" ? (i = a(n), i = String(i).startsWith("region") ? q.capitalize(i) : i) : i = t(n), i;
}, mt = (e, n, t) => {
  var i;
  let a = "", r = (i = e.columns[t]) == null ? void 0 : i.name;
  const { specialClasses: s } = e.legend;
  return s && s.length && typeof s[0] == "object" && s.forEach((o) => {
    o.key === r && String(n[o.key]) === o.value && (a = o.label);
  }), a || n[r];
}, $n = (e, n, t, a, r, s, i) => e.map((o) => {
  const m = {};
  return [
    ...i,
    ...Object.keys(n).filter((f) => n[f].dataTable === !0 && n[f].name)
  ].map((f) => {
    var g, v;
    const S = ((g = n[f]) == null ? void 0 : g.label) || ((v = n[f]) == null ? void 0 : v.name) || f;
    if (f === "geo")
      m[S] = dt(t, o, a, s);
    else if (i.includes(f))
      m[S] = r[o][f];
    else {
      const c = mt(t, r[o], f);
      m[S] = ut(c, f, t);
    }
  }), m;
}), Gn = ({
  rows: e,
  columns: n,
  runtimeData: t,
  config: a,
  displayGeoName: r,
  formatLegendLocation: s,
  navigationHandler: i,
  setFilteredCountryCode: o,
  legendMemo: m,
  legendSpecialClassLastMemo: f,
  runtimeLegend: S
}) => {
  const { allowMapZoom: g, geoType: v, type: c } = a.general;
  return e.map(
    (h) => Object.keys(n).filter((y) => n[y].dataTable === !0 && n[y].name).map((y) => {
      if (y === "geo") {
        const d = t[h];
        if (!d)
          throw new Error("No row object found");
        const b = zn(d, a, S, m, f);
        b || console.error("No legend color found");
        const D = dt(a, h, s, r), w = c === "bubble" && g && v === "world" ? () => o(h) : void 0;
        return /* @__PURE__ */ P("div", { className: "col-12", children: [
          b && b.length > 0 && /* @__PURE__ */ p(ct, { fill: b[0] }),
          /* @__PURE__ */ p(
            Rn,
            {
              markup: D,
              row: d,
              columns: n,
              navigationHandler: i,
              mapZoomHandler: w
            }
          )
        ] });
      } else {
        const d = t[h], b = mt(a, d, y);
        return ut(b, y, a);
      }
    })
  );
}, Bn = (e) => {
  const n = Object.keys(e).find((t) => t.match(/row[_-]?type/i));
  return e[n];
}, qn = ({
  rows: e,
  runtimeData: n,
  config: t,
  isVertical: a,
  sortBy: r,
  colorScale: s,
  hasRowType: i
}) => {
  var S;
  const o = (S = t.table) == null ? void 0 : S.groupBy, m = Ie(t, a, n), f = () => !r && r.colIndex === null ? m : m.sort((g, v) => {
    if (r.column === "__series__")
      return ye(g, v, r, t);
    let c = n.find((y) => {
      var d;
      return y[(d = t.xAxis) == null ? void 0 : d.dataKey] === r.column;
    });
    const h = n[r.colIndex - 1];
    if (c)
      return ye(c[g], c[v], r, t);
    if (c === void 0 && h)
      return ye(h[g], h[v], r, t);
  });
  if (a)
    if (o) {
      const g = /* @__PURE__ */ new Map();
      return e.forEach((v) => {
        let c, h = [];
        if (m.forEach((y, d) => {
          o === y ? c = B(v, y, t, n) : h.push(B(v, y, t, n));
        }), !g.has(c))
          g.set(c, [h]);
        else {
          const y = g.get(c);
          g.set(c, [...y, h]);
        }
      }), g;
    } else
      return e.map((g) => {
        if (i) {
          const v = Bn(n[g]), c = m.map((h) => B(g, h, t, n));
          return [v, ...c];
        } else
          return m.map((v, c) => B(g, v, t, n));
      });
  else
    return f().map((g) => {
      const v = it(g, t);
      return (t.visualizationType !== "Pie" ? [
        /* @__PURE__ */ P(Fe, { children: [
          s && s(v) && /* @__PURE__ */ p(ct, { fill: s(v) }),
          et(v)
        ] })
      ] : []).concat(e.map((h, y) => B(h, g, t, n)));
    });
}, Zn = ({ config: e }) => e.regions.map((n) => e.visualizationType === "Box Plot" ? [] : !Object.keys(n).includes("from") || !Object.keys(n).includes("to") ? [] : [n.label, n.from, n.to]), Qn = ({ rows: e, config: n }) => {
  const t = (i) => {
    let {
      boxplot: { labels: o }
    } = n;
    return {
      columnMean: o.mean,
      columnMax: o.maximum,
      columnMin: o.minimum,
      columnIqr: o.iqr,
      columnCategory: "Category",
      columnMedian: o.median,
      columnFirstQuartile: o.q1,
      columnThirdQuartile: o.q3,
      columnOutliers: o.outliers,
      values: o.values,
      columnCount: o.count,
      columnSd: "Standard Deviation",
      columnNonOutliers: "Non Outliers",
      columnLowerBounds: o.lowerBounds,
      columnUpperBounds: o.upperBounds
    }[i];
  };
  let a = (i, o) => Number(i) === 0 ? o.columnMax : Number(i) === 1 ? o.columnThirdQuartile : Number(i) === 2 ? o.columnMedian : Number(i) === 3 ? o.columnFirstQuartile : Number(i) === 4 ? o.columnMin : Number(i) === 5 ? o.columnCount : Number(i) === 6 ? o.columnSd : Number(i) === 7 ? o.columnMean : Number(i) === 8 ? o.columnIqr : Number(i) === 9 ? o.values.length > 0 ? o.values.toString() : "-" : Number(i) === 10 ? o.columnLowerBounds : Number(i) === 11 ? o.columnUpperBounds : Number(i) === 12 ? o.columnOutliers.length > 0 ? o.columnOutliers.toString() : "-" : Number(i) === 13 ? o.columnNonOutliers.length > 0 ? o.columnNonOutliers.toString() : "-" : /* @__PURE__ */ p("p", { children: "-" }), r = e.map((i) => i[0]), s = ["Measures", ...n.boxplot.categories];
  return r.shift(), r.map((i, o) => s.map((m, f) => {
    let S;
    if (m === "Measures") {
      let g = t(i);
      S = /* @__PURE__ */ p(Fe, { children: g });
    } else
      S = a(o, n.boxplot.plots[f - 1]);
    return S;
  }));
}, Jn = (e) => {
  if (Array.isArray(e)) {
    const n = {};
    return e.forEach((t) => {
      Object.keys(t).forEach((a) => {
        n[a] === void 0 && (n[a] = null), t[a] !== null && (n[a] = !0);
      });
    }), e.map((t) => {
      const a = {};
      return Object.keys(t).forEach((r) => {
        r.match(/row[_-]?type/i) && (a.row_type = t[r]), n[r] === !0 && (a[r] = t[r]);
      }), a;
    });
  } else
    return e;
}, Xn = (e, n, t, a) => {
  const r = [n, ...t, ...a];
  return q.uniq(e.flatMap((s) => Object.keys(s))).filter((s) => !r.includes(s));
}, ea = (e, n, t, a) => {
  const r = Xn(e, n, t, a), s = e.reduce((m, f) => (m[f[n]] = "", m), {}), i = (m, f, S) => {
    const v = Object.keys(s).length === 1 ? S : "";
    return f.map((c) => m[c] || "").join(":") + v;
  }, o = e.reduce((m, f, S) => {
    const g = i(f, r, S);
    return m[g] || (m[g] = {}), m;
  }, {});
  return e.forEach((m, f) => {
    const S = i(m, r, f);
    if (t.length > 1)
      t.forEach((g) => {
        const v = q.omit(m, [n, ...t]);
        o[S][g] = {
          ...o[S][g],
          ...v,
          [m[n]]: m[g],
          _pivotedFrom: g
        };
      });
    else {
      const g = t[0], v = q.omit(m, [n, ...t]);
      o[S] = {
        ...o[S],
        ...v,
        [m[n]]: m[g],
        _pivotedFrom: g
      };
    }
  }), t.length > 1 ? Object.keys(o).flatMap((m) => Object.keys(o[m]).map((f) => ({
    _pivotedFrom: f,
    ...o[m][f]
  }))) : Object.values(o).map((m) => ({ ...s, ...m }));
}, ta = ["N/A", "NA", "", "Suppressed"].concat(Ct.map((e) => e[0]));
function na(e = "") {
  return e ? typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? /^\d{4}-\d{1,2}-\d{1,2}$/.test(e) ? !1 : ta.includes(e) || /^[\$\d\.\%\,\-\s\(\)CI<>]*$/.test(e) : !1 : !1;
}
const xa = (e) => {
  var ue, de, me, fe, he, be;
  const {
    columns: n,
    config: t,
    dataConfig: a,
    defaultSortBy: r,
    displayGeoName: s,
    expandDataTable: i,
    formatLegendLocation: o,
    headerColor: m,
    rawData: f,
    runtimeData: S,
    tabbingId: g,
    tableTitle: v,
    viewport: c,
    vizTitle: h,
    wrapColumns: y
  } = e, d = Y.useMemo(() => {
    const N = Jn(S), { columnName: O, valueColumns: A } = t.table.pivot || {};
    if (O && A) {
      const u = Object.values(t.columns || {}).filter((C) => C.dataTable === !1).map((C) => C.name);
      return ea(N, O, A, u);
    }
    return N;
  }, [S, (ue = t.table.pivot) == null ? void 0 : ue.columnName, (de = t.table.pivot) == null ? void 0 : de.valueColumns]), [b, D] = Y.useState(i), [w, L] = Y.useState({
    column: r || "",
    asc: !1,
    colIndex: null
  }), [V, F] = Y.useState(""), H = !(t.type === "chart" && !((me = t.table) != null && me.showVertical)), j = `btn__${Math.random().toString(16).substr(2, 8)}`, U = {
    "us-county": "United States County Map",
    "single-state": "State Map",
    us: "United States Map",
    world: "World Map"
  };
  switch (Y.useEffect(() => {
    const N = "Accessible data table.", O = "Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.";
    b === !0 && V !== N && F(N), b === !1 && V !== O && F(O);
  }, [b]), t.visualizationType) {
    case "Box Plot":
      if (!t.boxplot)
        return /* @__PURE__ */ p(xe, {});
      break;
    case "Line":
      if (!d)
        return /* @__PURE__ */ p(xe, {});
      break;
    default:
      if (!d)
        return /* @__PURE__ */ p(xe, {});
      break;
  }
  const W = Object.keys(d).filter((N) => N != "columns"), K = H && w.column ? W.sort((N, O) => {
    let A, u;
    if (t.type === "map" && t.columns) {
      const C = t.columns[w.column].name;
      A = d[N][C], u = d[O][C];
    }
    return ["chart", "dashboard", "table"].includes(t.type) && (A = d[N][w.column], u = d[O][w.column]), !A && !u && t.type === "chart" && t.xAxis && t.xAxis.type === "date-time" && (A = Ce(t.runtime.xAxis.dateParseFormat)(d[N][t.xAxis.dataKey]), u = Ce(t.runtime.xAxis.dateParseFormat)(d[O][t.xAxis.dataKey])), A && u ? ye(A, u, w, t) : 0;
  }) : W, ie = {
    maxHeight: t.table.limitHeight && `${t.table.height}px`,
    OverflowY: "scroll"
  }, Q = !!Object.keys((f == null ? void 0 : f[0]) || {}).find((N) => N.match(/row[_-]?type/i)), le = Y.useMemo(() => {
    var N;
    return t.type === "map" ? t.table.caption ? t.table.caption : `Data table showing data for the ${U[(N = t.general) == null ? void 0 : N.geoType]} figure.` : t.table.caption ? t.table.caption : `Data table showing data for the ${t.type} figure.`;
  }, [t.table.caption]), ve = (fe = t == null ? void 0 : t.regions) == null ? void 0 : fe.every((N) => {
    const O = N.toType === "Fixed", A = N.fromType === "Fixed", u = !N.toType, C = !N.fromType;
    return O && A || u && C || O && C || A && u;
  }), Se = Y.useMemo(
    () => {
      var N, O, A, u, C, x, l, k, T;
      return (O = (N = t.data) == null ? void 0 : N[0]) != null && O.tableData ? (u = (A = t.data) == null ? void 0 : A[0]) == null ? void 0 : u.tableData : t.visualizationType === "Sankey" ? (x = (C = t.data) == null ? void 0 : C[0]) == null ? void 0 : x.tableData : t.visualizationType === "Pie" ? [t.yAxis.dataKey] : t.visualizationType === "Box Plot" ? (k = (l = t == null ? void 0 : t.boxplot) == null ? void 0 : l.plots) != null && k[0] ? Object.entries(t.boxplot.plots[0]) : [] : (T = t.runtime) == null ? void 0 : T.seriesKeys;
    },
    [(he = t.runtime) == null ? void 0 : he.seriesKeys]
  ), J = d.length === 0, ce = () => {
    var C, x;
    const N = ["data-table-container"], O = t.table.download && !t.table.showDownloadLinkBelow, A = t.type === "table";
    return !O && !A && N.push("mt-4"), ((C = t == null ? void 0 : t.brush) == null ? void 0 : C.active) && ((x = t.legend) == null ? void 0 : x.position) !== "bottom" && N.push("brush-active"), N.push(c), N.join(" ");
  };
  if (t.visualizationType !== "Box Plot") {
    const N = () => {
      var R, X, Ue;
      const x = Ie(t, H, d), l = ((R = t.table) == null ? void 0 : R.sharedFilterColumns) || [], k = (t.filters || []).map(($) => $.columnName), T = [...l, ...k], _ = t.type === "map" ? $n(
        K,
        n,
        t,
        o,
        d,
        s,
        T
      ) : d.map(($) => q.pick($, [...T, ...x])), I = (X = t.table) != null && X.downloadVisibleDataOnly ? _ : f;
      return ((Ue = t.general) == null ? void 0 : Ue.geoType) === "us-county" || t.table.showFullGeoNameInCSV ? I.map(($) => ({
        FullGeoName: o($[t.columns.geo.name]),
        ...$
      })) : I;
    }, O = (x, l) => {
      var T, _, I;
      const k = ["download-links"];
      if (x)
        l && k.push("mt-2");
      else {
        l && k.push("mt-4", "mb-2");
        const R = ((T = t == null ? void 0 : t.legend) == null ? void 0 : T.position) === "bottom" || ht(c);
        (_ = t.brush) != null && _.active && !R && k.push("brush-active"), (I = t.brush) != null && I.active && t.legend.hide && k.push("brush-active");
      }
      return k;
    }, A = t.type === "map" ? Gn({ ...e, rows: K, wrapColumns: y, runtimeData: d, viewport: c }) : qn({ rows: K, ...e, runtimeData: d, isVertical: H, sortBy: w, hasRowType: Q, viewport: c }), u = A.length ? Object.fromEntries(
      Object.keys(A[0]).filter(
        (x) => A.filter((l) => na(l[x])).length === A.length
      ).map((x) => [x, !0])
    ) : {}, C = ({ belowTable: x }) => {
      const l = t.table.download;
      return /* @__PURE__ */ P(Z.Section, { classes: O(x, l), children: [
        /* @__PURE__ */ p(Z.Link, { config: t, dashboardDataConfig: a }),
        l && /* @__PURE__ */ p(
          wn,
          {
            rawData: N(),
            fileName: `${h || "data-table"}.csv`,
            headerColor: m
          }
        )
      ] });
    };
    return /* @__PURE__ */ P(_e, { component: "DataTable", children: [
      !t.table.showDownloadLinkBelow && /* @__PURE__ */ p(C, {}),
      /* @__PURE__ */ P("section", { id: g.replace("#", ""), className: ce(), "aria-label": V, children: [
        /* @__PURE__ */ p(Pe, { skipId: j, skipMessage: "Skip Data Table" }),
        t.table.collapsible !== !1 && /* @__PURE__ */ p(Qe, { expanded: b, setExpanded: D, tableTitle: v, viewport: c }),
        /* @__PURE__ */ P("div", { className: "table-container", style: ie, children: [
          /* @__PURE__ */ p(
            Te,
            {
              preliminaryData: t.preliminaryData,
              viewport: c,
              wrapColumns: y,
              noData: J,
              childrenMatrix: A,
              tableName: t.type,
              caption: le,
              stickyHeader: !0,
              hasRowType: Q,
              headContent: t.type === "map" ? /* @__PURE__ */ p(
                Vn,
                {
                  columns: n,
                  ...e,
                  sortBy: w,
                  setSortBy: L,
                  rightAlignedCols: u
                }
              ) : /* @__PURE__ */ p(
                Un,
                {
                  data: d,
                  ...e,
                  hasRowType: Q,
                  isVertical: H,
                  sortBy: w,
                  setSortBy: L,
                  viewport: c,
                  rightAlignedCols: u
                }
              ),
              tableOptions: {
                className: `table table-striped ${b ? "data-table" : "data-table cdcdataviz-sr-only"}${H ? "" : " horizontal"}`,
                "aria-live": "assertive",
                "aria-rowcount": (be = t == null ? void 0 : t.data) != null && be.length ? t.data.length : -1,
                hidden: !b,
                cellMinWidth: 100
              },
              rightAlignedCols: u
            }
          ),
          ve && t.regions && t.regions.length > 0 && t.visualizationType !== "Box Plot" && /* @__PURE__ */ p(
            Te,
            {
              viewport: c,
              wrapColumns: y,
              childrenMatrix: Zn({ config: t }),
              noData: J,
              tableName: t.visualizationType,
              caption: "Table of the highlighted regions in the visualization",
              headContent: /* @__PURE__ */ P("tr", { children: [
                /* @__PURE__ */ p("th", { children: "Region Name" }),
                /* @__PURE__ */ p("th", { children: "Start Date" }),
                /* @__PURE__ */ p("th", { children: "End Date" })
              ] }),
              tableOptions: { className: "table table-striped region-table data-table" }
            }
          )
        ] })
      ] }),
      t.table.showDownloadLinkBelow && /* @__PURE__ */ p(C, { belowTable: !0 }),
      /* @__PURE__ */ p("div", { id: j, className: "cdcdataviz-sr-only", children: "Skipped data table." })
    ] });
  } else
    return /* @__PURE__ */ P(_e, { component: "DataTable", children: [
      /* @__PURE__ */ P("section", { id: g.replace("#", ""), className: ce(), "aria-label": V, children: [
        /* @__PURE__ */ p(Pe, { skipId: j, skipMessage: "Skip Data Table" }),
        /* @__PURE__ */ p(Qe, { expanded: b, setExpanded: D, tableTitle: v }),
        /* @__PURE__ */ p("div", { className: "table-container", style: ie, children: /* @__PURE__ */ p(
          Te,
          {
            viewport: c,
            wrapColumns: y,
            childrenMatrix: Qn({ rows: Se, config: t }),
            noData: J,
            tableName: t.visualizationType,
            caption: le,
            stickyHeader: !0,
            headContent: /* @__PURE__ */ p(_n, { categories: t.boxplot.categories }),
            tableOptions: {
              className: `table table-striped ${b ? "data-table" : "data-table cdcdataviz-sr-only"}`,
              "aria-live": "assertive",
              "aria-rowcount": 11,
              hidden: !b
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ p("div", { id: j, className: "cdcdataviz-sr-only", children: "Skipped data table." })
    ] });
};
export {
  xa as D,
  va as G,
  ga as H,
  ct as L,
  Z as M,
  Ca as S,
  Sa as a,
  zn as b,
  ba as c,
  ut as d,
  Hn as e,
  jn as f,
  pa as g,
  Kn as h,
  Wn as i,
  Yn as j,
  ya as k,
  Pe as l,
  we as m,
  ha as n,
  Dn as o,
  Ce as p,
  ot as t
};
