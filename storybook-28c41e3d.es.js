class y {
  constructor() {
    this.constants = {
      errorMessageEmtpyData: "Your data file is empty.",
      errorMessageFormat: "Your datatype is not supported.",
      descriptionHeader: 1,
      descriptionRoot: 2,
      descriptionSeriesFilter: 3
    };
  }
  //Performs standardizations that can be completed automatically without use input
  autoStandardize(s) {
    const e = [];
    if ((!s || s.length === 0) && e.push(this.constants.errorMessageEmptyData), (!(s != null && s.filter) || s.filter((l) => typeof l != "object").length > 0) && e.push(this.constants.errorMessageFormat), e.length > 0) {
      console.error(e);
      return;
    }
    if (s.filter((l) => l.constructor !== Object).length > 0) {
      let l = [];
      for (let o = 1; o < s.length; o++) {
        let r = {};
        s[o].forEach((a, f) => {
          r[s[0][f]] = a;
        }), l.push(r);
      }
      s = l;
    }
    return s;
  }
  //Performs standardizations based on developer provided description of the data
  developerStandardize(s, e) {
    if (!s)
      return [];
    if (e && !(e.horizontal === void 0 || e.series === void 0) && !(e.series === !0 && e.horizontal === !1 && e.singleRow === void 0)) {
      if (e.horizontal === !0)
        if (e.series === !0) {
          if (!e.seriesKey)
            return;
          let l = {}, o = [];
          return s.forEach((r) => {
            let a = [];
            Object.keys(r).forEach((f) => {
              f !== e.seriesKey && isNaN(parseFloat(r[f])) && a.push(f);
            }), Object.keys(r).forEach((f) => {
              if (f !== e.seriesKey && a.indexOf(f) === -1) {
                let t = f + "|" + a.map((n) => n + "=" + r[n]);
                l[t] || (l[t] = { [r[e.seriesKey]]: r[f], key: f }, a.forEach((n) => {
                  l[t][n] = r[n];
                })), l[t][r[e.seriesKey]] = r[f];
              }
            });
          }), Object.keys(l).forEach((r) => {
            o.push(l[r]);
          }), o;
        } else {
          let l = [];
          return s.forEach((o) => {
            let r = [];
            Object.keys(o).forEach((a) => {
              isNaN(parseFloat(o[a])) && r.push(a);
            }), Object.keys(o).forEach((a) => {
              if (r.indexOf(a) === -1) {
                let f = { key: a, value: o[a] };
                r.forEach((t) => {
                  f[t] = o[t];
                }), l.push(f);
              }
            });
          }), l;
        }
      else if (e.series === !0 && e.singleRow === !1)
        if (e.seriesKey !== void 0 && e.xKey !== void 0 && (e.valueKey !== void 0 || e.valueKeys !== void 0 && e.valueKeys.length > 0))
          if (e.valueKeys !== void 0) {
            let l = {}, o = [], r = e.valueKeys;
            return e.ignoredKeys && e.ignoredKeys.length > 0 && (r = r.concat(e.ignoredKeys)), s.forEach((a) => {
              r.forEach((f) => {
                let t = [], n = a[e.xKey] + "|" + f;
                Object.keys(a).forEach((u) => {
                  u !== e.xKey && u !== e.seriesKey && r.indexOf(u) === -1 && (n += "|" + u + "=" + a[u], t.push(u));
                }), l[n] || (l[n] = { [e.xKey]: a[e.xKey], "**Numeric Value Property**": f }, t.forEach((u) => {
                  l[n][u] = a[u];
                })), l[n][a[e.seriesKey]] = a[f];
              });
            }), Object.keys(l).forEach((a) => {
              (!e.ignoredKeys || e.ignoredKeys.indexOf(l[a]["**Numeric Value Property**"]) === -1) && o.push(l[a]);
            }), o;
          } else {
            let l = {}, o = [];
            return s.forEach((r) => {
              let a = [], f = r[e.xKey];
              Object.keys(r).forEach((t) => {
                t !== e.xKey && t !== e.seriesKey && t !== e.valueKey && (f += "|" + t + "=" + r[t], a.push(t));
              }), l[f] ? l[f][r[e.seriesKey]] = r[e.valueKey] : (l[f] = { [e.xKey]: r[e.xKey], [r[e.seriesKey]]: r[e.valueKey] }, a.forEach((t) => {
                l[f][t] = r[t];
              }));
            }), Object.keys(l).forEach((r) => {
              o.push(l[r]);
            }), o;
          }
        else
          return;
      return s;
    }
  }
  /**
     * cleanData
     *
    // This cleans a data set by:
    // - removing commas and $ signs from any numbers to try to plot the point
    // - removing any data points that are NOT composed of of all digits (but allow a decimal point)
    // Without this the charts "break" and do not render
    *
    * Inputs: data as array, excludeKey indicates which key to use to NOT clean
    *                        Example: "Date" should not be cleaned if part of the data
    *
    * Output: returns the cleanedData
    *
    * Set testing = true if you need to see before and after data
    *
    */
  cleanData(s, e, l = !1) {
    let o = [];
    if (!Array.isArray(s))
      debugger;
    return l && console.log("## Data to clean=", s), e === void 0 ? (console.log("COVE: cleanData excludeKey undefined"), s) : (s.forEach(function(r, a) {
      l && console.log("clean", a, " d", r);
      let f = {};
      Object.keys(r).forEach(function(t) {
        const n = r[t];
        if (t === e)
          f[t] = n;
        else {
          l && console.log("typeof value is ", typeof n);
          let u = "";
          typeof n == "string" ? u = n ? ((i) => i.replace(/[,\$]/g, ""))(n) : "" : u = n || "";
          const c = (i) => /\d+\.?\d*/.test(i);
          !isNaN(parseFloat(u)) || c(u) ? f[t] = u : f[t] = "";
        }
      }), l && console.log("cleaned=", f), o.push(f);
    }), l && console.log("## cleanedData =", o), o);
  }
  // clean out %, $, commas from numbers when needing to do sorting!
  cleanDataPoint(s, e = !1) {
    e && console.log("clean", s);
    let l = "";
    return typeof s == "string" ? l = s !== null && s !== "" ? s.replace(/[,\$\%]/g, "") : "" : l = s !== null && s !== "" ? s : "", e && console.log("## cleanedData =", l), l;
  }
}
function g(h = "", s = null) {
  var l;
  if (typeof h == "string" && ((l = s == null ? void 0 : s.legend) == null ? void 0 : l.type) === "category")
    return h;
  let e = /[^\d.-]/g;
  return Number.isNaN(parseFloat(h)) === !1 && String(h).match(e) === null ? parseFloat(h) : h;
}
export {
  y as D,
  g as n
};
