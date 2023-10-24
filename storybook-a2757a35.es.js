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
  autoStandardize(r) {
    const e = [];
    if (r.length === 0 && e.push(this.constants.errorMessageEmptyData), (!r.filter || r.filter((l) => typeof l != "object").length > 0) && e.push(this.constants.errorMessageFormat), e.length > 0) {
      console.error(e);
      return;
    }
    if (r.filter((l) => l.constructor !== Object).length > 0) {
      let l = [];
      for (let o = 1; o < r.length; o++) {
        let s = {};
        r[o].forEach((f, a) => {
          s[r[0][a]] = f;
        }), l.push(s);
      }
      r = l;
    }
    return r;
  }
  //Performs standardizations based on developer provided description of the data
  developerStandardize(r, e) {
    if (e && !(e.horizontal === void 0 || e.series === void 0) && !(e.series === !0 && e.horizontal === !1 && e.singleRow === void 0)) {
      if (e.horizontal === !0)
        if (e.series === !0) {
          if (!e.seriesKey)
            return;
          let l = {}, o = [];
          return r.forEach((s) => {
            let f = [];
            Object.keys(s).forEach((a) => {
              a !== e.seriesKey && isNaN(parseFloat(s[a])) && f.push(a);
            }), Object.keys(s).forEach((a) => {
              if (a !== e.seriesKey && f.indexOf(a) === -1) {
                let t = a + "|" + f.map((n) => n + "=" + s[n]);
                l[t] || (l[t] = { [s[e.seriesKey]]: s[a], key: a }, f.forEach((n) => {
                  l[t][n] = s[n];
                })), l[t][s[e.seriesKey]] = s[a];
              }
            });
          }), Object.keys(l).forEach((s) => {
            o.push(l[s]);
          }), o;
        } else {
          let l = [];
          return r.forEach((o) => {
            let s = [];
            Object.keys(o).forEach((f) => {
              isNaN(parseFloat(o[f])) && s.push(f);
            }), Object.keys(o).forEach((f) => {
              if (s.indexOf(f) === -1) {
                let a = { key: f, value: o[f] };
                s.forEach((t) => {
                  a[t] = o[t];
                }), l.push(a);
              }
            });
          }), l;
        }
      else if (e.series === !0 && e.singleRow === !1)
        if (e.seriesKey !== void 0 && e.xKey !== void 0 && (e.valueKey !== void 0 || e.valueKeys !== void 0 && e.valueKeys.length > 0))
          if (e.valueKeys !== void 0) {
            let l = {}, o = [], s = e.valueKeys;
            return e.ignoredKeys && e.ignoredKeys.length > 0 && (s = s.concat(e.ignoredKeys)), r.forEach((f) => {
              s.forEach((a) => {
                let t = [], n = f[e.xKey] + "|" + a;
                Object.keys(f).forEach((u) => {
                  u !== e.xKey && u !== e.seriesKey && s.indexOf(u) === -1 && (n += "|" + u + "=" + f[u], t.push(u));
                }), l[n] || (l[n] = { [e.xKey]: f[e.xKey], "**Numeric Value Property**": a }, t.forEach((u) => {
                  l[n][u] = f[u];
                })), l[n][f[e.seriesKey]] = f[a];
              });
            }), Object.keys(l).forEach((f) => {
              (!e.ignoredKeys || e.ignoredKeys.indexOf(l[f]["**Numeric Value Property**"]) === -1) && o.push(l[f]);
            }), o;
          } else {
            let l = {}, o = [];
            return r.forEach((s) => {
              let f = [], a = s[e.xKey];
              Object.keys(s).forEach((t) => {
                t !== e.xKey && t !== e.seriesKey && t !== e.valueKey && (a += "|" + t + "=" + s[t], f.push(t));
              }), l[a] ? l[a][s[e.seriesKey]] = s[e.valueKey] : (l[a] = { [e.xKey]: s[e.xKey], [s[e.seriesKey]]: s[e.valueKey] }, f.forEach((t) => {
                l[a][t] = s[t];
              }));
            }), Object.keys(l).forEach((s) => {
              o.push(l[s]);
            }), o;
          }
        else
          return;
      return r;
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
  cleanData(r, e, l = !1) {
    let o = [];
    if (!Array.isArray(r))
      debugger;
    return l && console.log("## Data to clean=", r), e === void 0 ? (console.log("COVE: cleanData excludeKey undefined"), r) : (r.forEach(function(s, f) {
      l && console.log("clean", f, " d", s);
      let a = {};
      Object.keys(s).forEach(function(t) {
        const n = s[t];
        if (t === e)
          a[t] = n;
        else {
          l && console.log("typeof value is ", typeof n);
          let u = "";
          typeof n == "string" ? u = n ? ((i) => i.replace(/[,\$]/g, ""))(n) : "" : u = n || "";
          const c = (i) => /\d+\.?\d*/.test(i);
          !isNaN(parseFloat(u)) || c(u) ? a[t] = u : a[t] = "";
        }
      }), l && console.log("cleaned=", a), o.push(a);
    }), l && console.log("## cleanedData =", o), o);
  }
  // clean out %, $, commas from numbers when needing to do sorting!
  cleanDataPoint(r, e = !1) {
    e && console.log("clean", r);
    let l = "";
    return typeof r == "string" ? l = r !== null && r !== "" ? r.replace(/[,\$\%]/g, "") : "" : l = r !== null && r !== "" ? r : "", e && console.log("## cleanedData =", l), l;
  }
}
function g(h = "", r = null) {
  var l;
  if (typeof h == "string" && ((l = r == null ? void 0 : r.legend) == null ? void 0 : l.type) === "category")
    return h;
  let e = /[^\d.-]/g;
  return Number.isNaN(parseFloat(h)) === !1 && String(h).match(e) === null ? parseFloat(h) : h;
}
export {
  y as D,
  g as n
};
