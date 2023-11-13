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
    if ((!r || r.length === 0) && e.push(this.constants.errorMessageEmptyData), (!(r != null && r.filter) || r.filter((l) => typeof l != "object").length > 0) && e.push(this.constants.errorMessageFormat), e.length > 0) {
      console.error(e);
      return;
    }
    if (r.filter((l) => l.constructor !== Object).length > 0) {
      let l = [];
      for (let u = 1; u < r.length; u++) {
        let s = {};
        r[u].forEach((f, a) => {
          s[r[0][a]] = f;
        }), l.push(s);
      }
      r = l;
    }
    return r;
  }
  //Performs standardizations based on developer provided description of the data
  developerStandardize(r, e) {
    if (!r)
      return [];
    if (e && !(e.horizontal === void 0 || e.series === void 0) && !(e.series === !0 && e.horizontal === !1 && e.singleRow === void 0)) {
      if (e.horizontal === !0)
        if (e.series === !0) {
          if (!e.seriesKey)
            return;
          let l = {}, u = [];
          return r.forEach((s) => {
            let f = [];
            Object.keys(s).forEach((a) => {
              a !== e.seriesKey && isNaN(parseFloat(s[a])) && f.push(a);
            }), Object.keys(s).forEach((a) => {
              if (a !== e.seriesKey && f.indexOf(a) === -1) {
                let t = a + "|" + f.map((o) => o + "=" + s[o]);
                l[t] || (l[t] = { [s[e.seriesKey]]: s[a], key: a }, f.forEach((o) => {
                  l[t][o] = s[o];
                })), l[t][s[e.seriesKey]] = s[a];
              }
            });
          }), Object.keys(l).forEach((s) => {
            u.push(l[s]);
          }), u;
        } else {
          let l = [];
          return r.forEach((u) => {
            let s = [];
            Object.keys(u).forEach((f) => {
              isNaN(parseFloat(u[f])) && s.push(f);
            }), Object.keys(u).forEach((f) => {
              if (s.indexOf(f) === -1) {
                let a = { key: f, value: u[f] };
                s.forEach((t) => {
                  a[t] = u[t];
                }), l.push(a);
              }
            });
          }), l;
        }
      else if (e.series === !0 && e.singleRow === !1)
        if (e.seriesKey !== void 0 && e.xKey !== void 0 && (e.valueKey !== void 0 || e.valueKeys !== void 0 && e.valueKeys.length > 0))
          if (e.valueKeys !== void 0) {
            let l = {}, u = [], s = e.valueKeys;
            return e.ignoredKeys && e.ignoredKeys.length > 0 && (s = s.concat(e.ignoredKeys)), r.forEach((f) => {
              s.forEach((a) => {
                let t = [], o = f[e.xKey] + "|" + a;
                Object.keys(f).forEach((n) => {
                  n !== e.xKey && n !== e.seriesKey && s.indexOf(n) === -1 && (o += "|" + n + "=" + f[n], t.push(n));
                }), l[o] || (l[o] = { [e.xKey]: f[e.xKey], "**Numeric Value Property**": a }, t.forEach((n) => {
                  l[o][n] = f[n];
                })), l[o][f[e.seriesKey]] = f[a];
              });
            }), Object.keys(l).forEach((f) => {
              (!e.ignoredKeys || e.ignoredKeys.indexOf(l[f]["**Numeric Value Property**"]) === -1) && u.push(l[f]);
            }), u;
          } else {
            let l = {}, u = [];
            return r.forEach((s) => {
              let f = [], a = s[e.xKey];
              Object.keys(s).forEach((t) => {
                t !== e.xKey && t !== e.seriesKey && t !== e.valueKey && (a += "|" + t + "=" + s[t], f.push(t));
              }), l[a] ? l[a][s[e.seriesKey]] = s[e.valueKey] : (l[a] = { [e.xKey]: s[e.xKey], [s[e.seriesKey]]: s[e.valueKey] }, f.forEach((t) => {
                l[a][t] = s[t];
              }));
            }), Object.keys(l).forEach((s) => {
              u.push(l[s]);
            }), u;
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
    let u = [];
    if (!Array.isArray(r))
      debugger;
    return l && console.log("## Data to clean=", r), e === void 0 ? (console.log("COVE: cleanData excludeKey undefined"), r) : (r.forEach(function(s, f) {
      l && console.log("clean", f, " d", s);
      let a = {};
      Object.keys(s).forEach(function(t) {
        const o = s[t];
        if (t === e)
          a[t] = o;
        else {
          l && console.log("typeof value is ", typeof o);
          let n = "";
          typeof o == "string" ? n = o ? ((h) => h.replace(/[,\$]/g, ""))(o) : "" : n = o || "";
          const i = (h) => /\d+\.?\d*/.test(h);
          !isNaN(parseFloat(n)) || i(n) ? a[t] = n : a[t] = "";
        }
      }), l && console.log("cleaned=", a), u.push(a);
    }), l && console.log("## cleanedData =", u), u);
  }
  // clean out %, $, commas from numbers when needing to do sorting!
  cleanDataPoint(r, e = !1) {
    e && console.log("clean", r);
    let l = "";
    return typeof r == "string" ? l = r !== null && r !== "" ? r.replace(/[,\$\%]/g, "") : "" : l = r !== null && r !== "" ? r : "", e && console.log("## cleanedData =", l), l;
  }
}
export {
  y as D
};
