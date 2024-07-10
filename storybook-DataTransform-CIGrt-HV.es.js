class g {
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
    if ((!r || r.length === 0) && e.push(this.constants.errorMessageEmptyData), (!(r != null && r.filter) || r.filter((s) => typeof s != "object").length > 0) && e.push(this.constants.errorMessageFormat), e.length > 0) {
      console.error(e);
      return;
    }
    if (r.filter((s) => s.constructor !== Object).length > 0) {
      let s = [];
      for (let t = 1; t < r.length; t++) {
        let l = {};
        r[t].forEach((f, a) => {
          l[r[0][a]] = f;
        }), s.push(l);
      }
      r = s;
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
          let s = {}, t = [];
          return r.forEach((l) => {
            let f = [];
            Object.keys(l).forEach((a) => {
              a !== e.seriesKey && isNaN(parseFloat(l[a])) && f.push(a);
            }), Object.keys(l).forEach((a) => {
              if (a !== e.seriesKey && f.indexOf(a) === -1) {
                let u = a + "|" + f.map((o) => o + "=" + l[o]);
                s[u] || (s[u] = { [l[e.seriesKey]]: l[a], key: a }, f.forEach((o) => {
                  s[u][o] = l[o];
                })), s[u][l[e.seriesKey]] = l[a];
              }
            });
          }), Object.keys(s).forEach((l) => {
            t.push(s[l]);
          }), t;
        } else {
          let s = [];
          return r.forEach((t) => {
            let l = [];
            Object.keys(t).forEach((f) => {
              isNaN(parseFloat(t[f])) && l.push(f);
            }), Object.keys(t).forEach((f) => {
              if (l.indexOf(f) === -1) {
                let a = { key: f, value: t[f] };
                l.forEach((u) => {
                  a[u] = t[u];
                }), s.push(a);
              }
            });
          }), s;
        }
      else if (e.series === !0 && e.singleRow === !1)
        if (e.seriesKey !== void 0 && e.xKey !== void 0 && (e.valueKey !== void 0 || e.valueKeys !== void 0 && e.valueKeys.length > 0 || e.valueKeysTallSupport !== void 0 && e.valueKeysTallSupport.length > 0))
          if (e.valueKeysTallSupport !== void 0) {
            let s = {}, t = [];
            return r.forEach((l) => {
              let f = l[e.xKey];
              Object.keys(l).forEach((a) => {
                a !== e.xKey && a !== e.seriesKey && e.valueKeysTallSupport.indexOf(a) === -1 && (!e.ignoredKeys || e.ignoredKeys.indexOf(a) === -1) && (f += "|" + l[a]);
              }), s[f] || (s[f] = { [e.xKey]: l[e.xKey] }), Object.keys(l).forEach((a) => {
                a !== e.xKey && a !== e.seriesKey && e.valueKeysTallSupport.indexOf(a) === -1 && (!e.ignoredKeys || e.ignoredKeys.indexOf(a) === -1) && (s[f][a] = l[a]);
              }), e.valueKeysTallSupport.forEach((a) => {
                s[f][l[e.seriesKey] + "-" + a] = l[a];
              });
            }), t = Object.keys(s).map((l) => s[l]), t;
          } else if (e.valueKeys !== void 0) {
            let s = {}, t = [], l = e.valueKeys;
            return e.ignoredKeys && e.ignoredKeys.length > 0 && (l = l.concat(e.ignoredKeys)), r.forEach((f) => {
              l.forEach((a) => {
                let u = [], o = f[e.xKey] + "|" + a;
                Object.keys(f).forEach((K) => {
                  K !== e.xKey && K !== e.seriesKey && l.indexOf(K) === -1 && (o += "|" + K + "=" + f[K], u.push(K));
                }), s[o] || (s[o] = { [e.xKey]: f[e.xKey], "**Numeric Value Property**": a }, u.forEach((K) => {
                  s[o][K] = f[K];
                })), s[o][f[e.seriesKey]] = f[a];
              });
            }), Object.keys(s).forEach((f) => {
              (!e.ignoredKeys || e.ignoredKeys.indexOf(s[f]["**Numeric Value Property**"]) === -1) && t.push(s[f]);
            }), t;
          } else {
            let s = {}, t = [];
            return r.forEach((l) => {
              let f = [], a = l[e.xKey];
              Object.keys(l).forEach((u) => {
                u !== e.xKey && u !== e.seriesKey && u !== e.valueKey && (a += "|" + u + "=" + l[u], f.push(u));
              }), s[a] ? s[a][l[e.seriesKey]] = l[e.valueKey] : (s[a] = { [e.xKey]: l[e.xKey], [l[e.seriesKey]]: l[e.valueKey] }, f.forEach((u) => {
                s[a][u] = l[u];
              }));
            }), Object.keys(s).forEach((l) => {
              t.push(s[l]);
            }), t;
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
  cleanData(r, e, s = !1) {
    let t = [];
    if (!Array.isArray(r)) debugger;
    return s && console.log("## Data to clean=", r), e === void 0 ? (console.log("COVE: cleanData excludeKey undefined"), r) : (r.forEach(function(l, f) {
      s && console.log("clean", f, " d", l);
      let a = {};
      Object.keys(l).forEach(function(u) {
        const o = l[u];
        if (u === e)
          a[u] = o;
        else {
          s && console.log("typeof value is ", typeof o);
          let K = "";
          typeof o == "string" ? K = o ? ((h) => h.replace(/[,\$]/g, ""))(o) : "" : K = o || "";
          const n = (h) => /\d+\.?\d*/.test(h);
          !isNaN(parseFloat(K)) || n(K) ? a[u] = K : a[u] = "";
        }
      }), s && console.log("cleaned=", a), t.push(a);
    }), s && console.log("## cleanedData =", t), t);
  }
  // clean out %, $, commas from numbers when needing to do sorting!
  cleanDataPoint(r, e = !1) {
    e && console.log("clean", r);
    let s = "";
    return typeof r == "string" ? s = r !== null && r !== "" ? r.replace(/[,\$\%]/g, "") : "" : s = r !== null && r !== "" ? r : "", e && console.log("## cleanedData =", s), s;
  }
}
export {
  g as D
};
