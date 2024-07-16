const T = /* @__PURE__ */ new Date(), D = /* @__PURE__ */ new Date();
function o(e, n, u, U) {
  function s(r) {
    return e(r = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+r)), r;
  }
  return s.floor = (r) => (e(r = /* @__PURE__ */ new Date(+r)), r), s.ceil = (r) => (e(r = new Date(r - 1)), n(r, 1), e(r), r), s.round = (r) => {
    const t = s(r), a = s.ceil(r);
    return r - t < a - r ? t : a;
  }, s.offset = (r, t) => (n(r = /* @__PURE__ */ new Date(+r), t == null ? 1 : Math.floor(t)), r), s.range = (r, t, a) => {
    const i = [];
    if (r = s.ceil(r), a = a == null ? 1 : Math.floor(a), !(r < t) || !(a > 0))
      return i;
    let h;
    do
      i.push(h = /* @__PURE__ */ new Date(+r)), n(r, a), e(r);
    while (h < r && r < t);
    return i;
  }, s.filter = (r) => o((t) => {
    if (t >= t)
      for (; e(t), !r(t); )
        t.setTime(t - 1);
  }, (t, a) => {
    if (t >= t)
      if (a < 0)
        for (; ++a <= 0; )
          for (; n(t, -1), !r(t); )
            ;
      else
        for (; --a >= 0; )
          for (; n(t, 1), !r(t); )
            ;
  }), u && (s.count = (r, t) => (T.setTime(+r), D.setTime(+t), e(T), e(D), Math.floor(u(T, D))), s.every = (r) => (r = Math.floor(r), !isFinite(r) || !(r > 0) ? null : r > 1 ? s.filter(U ? (t) => U(t) % r === 0 : (t) => s.count(0, t) % r === 0) : s)), s;
}
const m = 1e3, C = m * 60, M = C * 60, l = M * 24, y = l * 7, J = l * 30, K = l * 365, f = o(
  (e) => e.setHours(0, 0, 0, 0),
  (e, n) => e.setDate(e.getDate() + n),
  (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * C) / l,
  (e) => e.getDate() - 1
);
f.range;
const w = o((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCDate(e.getUTCDate() + n);
}, (e, n) => (n - e) / l, (e) => e.getUTCDate() - 1);
w.range;
const H = o((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCDate(e.getUTCDate() + n);
}, (e, n) => (n - e) / l, (e) => Math.floor(e / l));
H.range;
function g(e) {
  return o((n) => {
    n.setDate(n.getDate() - (n.getDay() + 7 - e) % 7), n.setHours(0, 0, 0, 0);
  }, (n, u) => {
    n.setDate(n.getDate() + u * 7);
  }, (n, u) => (u - n - (u.getTimezoneOffset() - n.getTimezoneOffset()) * C) / y);
}
const v = g(0), S = g(1), W = g(2), z = g(3), O = g(4), x = g(5), b = g(6);
v.range;
S.range;
W.range;
z.range;
O.range;
x.range;
b.range;
function c(e) {
  return o((n) => {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - e) % 7), n.setUTCHours(0, 0, 0, 0);
  }, (n, u) => {
    n.setUTCDate(n.getUTCDate() + u * 7);
  }, (n, u) => (u - n) / y);
}
const j = c(0), I = c(1), q = c(2), A = c(3), B = c(4), E = c(5), G = c(6);
j.range;
I.range;
q.range;
A.range;
B.range;
E.range;
G.range;
const F = o((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n);
}, (e, n) => n.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
F.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : o((n) => {
  n.setFullYear(Math.floor(n.getFullYear() / e) * e), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
}, (n, u) => {
  n.setFullYear(n.getFullYear() + u * e);
});
F.range;
const Y = o((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n);
}, (e, n) => n.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Y.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : o((n) => {
  n.setUTCFullYear(Math.floor(n.getUTCFullYear() / e) * e), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
}, (n, u) => {
  n.setUTCFullYear(n.getUTCFullYear() + u * e);
});
Y.range;
export {
  C as a,
  M as b,
  f as c,
  m as d,
  v as e,
  F as f,
  j as g,
  Y as h,
  I as i,
  S as j,
  O as k,
  B as l,
  K as m,
  l as n,
  y as o,
  J as p,
  o as t,
  w as u
};
