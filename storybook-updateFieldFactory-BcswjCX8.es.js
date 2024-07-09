const h = (r, C, x = !1) => (l, y, t, p) => {
  if (l === null && y === null) {
    const d = { ...r, [t]: p };
    t === "filterColumn" && (d.filterValue = ""), C(d);
    return;
  }
  const F = Array.isArray(r[l]);
  let A = F ? [...r[l], p] : { ...r[l], [t]: p };
  y !== null && (F ? (A = [...r[l]], A[y] = { ...A[y], [t]: p }) : typeof p == "string" && x ? A[y] = p : A = { ...r[l], [y]: { ...r[l][y], [t]: p } });
  const a = { ...r, [l]: A };
  C(a);
};
export {
  h as u
};
