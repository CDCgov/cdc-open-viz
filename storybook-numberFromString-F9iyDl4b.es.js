function e(r = "", n = null) {
  var i;
  if (typeof r == "string" && ((i = n == null ? void 0 : n.legend) == null ? void 0 : i.type) === "category") return r;
  let o = /[^\d.-]/g;
  return Number.isNaN(parseFloat(r)) === !1 && String(r).match(o) === null ? parseFloat(r) : r;
}
export {
  e as n
};
