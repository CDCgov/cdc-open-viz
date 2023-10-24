const T = /* @__PURE__ */ new Date(), D = /* @__PURE__ */ new Date();
function l(e, n, u, U) {
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
    let y;
    do
      i.push(y = /* @__PURE__ */ new Date(+r)), n(r, a), e(r);
    while (y < r && r < t);
    return i;
  }, s.filter = (r) => l((t) => {
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
const m = 1e3, C = m * 60, f = C * 60, c = f * 24, h = c * 7, M = l(
  (e) => e.setHours(0, 0, 0, 0),
  (e, n) => e.setDate(e.getDate() + n),
  (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * C) / c,
  (e) => e.getDate() - 1
);
M.range;
const w = l((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCDate(e.getUTCDate() + n);
}, (e, n) => (n - e) / c, (e) => e.getUTCDate() - 1);
w.range;
const H = l((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCDate(e.getUTCDate() + n);
}, (e, n) => (n - e) / c, (e) => Math.floor(e / c));
H.range;
function o(e) {
  return l((n) => {
    n.setDate(n.getDate() - (n.getDay() + 7 - e) % 7), n.setHours(0, 0, 0, 0);
  }, (n, u) => {
    n.setDate(n.getDate() + u * 7);
  }, (n, u) => (u - n - (u.getTimezoneOffset() - n.getTimezoneOffset()) * C) / h);
}
const v = o(0), S = o(1), W = o(2), z = o(3), O = o(4), x = o(5), b = o(6);
v.range;
S.range;
W.range;
z.range;
O.range;
x.range;
b.range;
function g(e) {
  return l((n) => {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - e) % 7), n.setUTCHours(0, 0, 0, 0);
  }, (n, u) => {
    n.setUTCDate(n.getUTCDate() + u * 7);
  }, (n, u) => (u - n) / h);
}
const j = g(0), I = g(1), q = g(2), A = g(3), B = g(4), E = g(5), G = g(6);
j.range;
I.range;
q.range;
A.range;
B.range;
E.range;
G.range;
const F = l((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n);
}, (e, n) => n.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
F.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : l((n) => {
  n.setFullYear(Math.floor(n.getFullYear() / e) * e), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
}, (n, u) => {
  n.setFullYear(n.getFullYear() + u * e);
});
F.range;
const Y = l((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n);
}, (e, n) => n.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Y.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : l((n) => {
  n.setUTCFullYear(Math.floor(n.getUTCFullYear() / e) * e), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
}, (n, u) => {
  n.setUTCFullYear(n.getUTCFullYear() + u * e);
});
Y.range;
export {
  C as a,
  f as b,
  M as c,
  m as d,
  v as e,
  F as f,
  j as g,
  Y as h,
  I as i,
  S as j,
  O as k,
  B as l,
  l as t,
  w as u
};
