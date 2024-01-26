class g {
  constructor() {
    this.applySuppression = (r, e) => !e || e.length === 0 ? r : r.map((u) => {
      const l = { ...u };
      for (let a = 0; a < e.length; a++)
        l[e[a].column] && l[e[a].column] === e[a].value && (l[e[a].column] = e[a].label);
      return l;
    }), this.constants = {
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
    if ((!r || r.length === 0) && e.push(this.constants.errorMessageEmptyData), (!(r != null && r.filter) || r.filter((f) => typeof f != "object").length > 0) && e.push(this.constants.errorMessageFormat), e.length > 0) {
      console.error(e);
      return;
    }
    if (r.filter((f) => f.constructor !== Object).length > 0) {
      let f = [];
      for (let u = 1; u < r.length; u++) {
        let l = {};
        r[u].forEach((a, s) => {
          l[r[0][s]] = a;
        }), f.push(l);
      }
      r = f;
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
          let f = {}, u = [];
          return r.forEach((l) => {
            let a = [];
            Object.keys(l).forEach((s) => {
              s !== e.seriesKey && isNaN(parseFloat(l[s])) && a.push(s);
            }), Object.keys(l).forEach((s) => {
              if (s !== e.seriesKey && a.indexOf(s) === -1) {
                let t = s + "|" + a.map((o) => o + "=" + l[o]);
                f[t] || (f[t] = { [l[e.seriesKey]]: l[s], key: s }, a.forEach((o) => {
                  f[t][o] = l[o];
                })), f[t][l[e.seriesKey]] = l[s];
              }
            });
          }), Object.keys(f).forEach((l) => {
            u.push(f[l]);
          }), u;
        } else {
          let f = [];
          return r.forEach((u) => {
            let l = [];
            Object.keys(u).forEach((a) => {
              isNaN(parseFloat(u[a])) && l.push(a);
            }), Object.keys(u).forEach((a) => {
              if (l.indexOf(a) === -1) {
                let s = { key: a, value: u[a] };
                l.forEach((t) => {
                  s[t] = u[t];
                }), f.push(s);
              }
            });
          }), f;
        }
      else if (e.series === !0 && e.singleRow === !1)
        if (e.seriesKey !== void 0 && e.xKey !== void 0 && (e.valueKey !== void 0 || e.valueKeys !== void 0 && e.valueKeys.length > 0 || e.valueKeysTallSupport !== void 0 && e.valueKeysTallSupport.length > 0))
          if (e.valueKeysTallSupport !== void 0) {
            let f = {}, u = [];
            return r.forEach((l) => {
              let a = l[e.xKey];
              Object.keys(l).forEach((s) => {
                s !== e.xKey && s !== e.seriesKey && e.valueKeysTallSupport.indexOf(s) === -1 && (!e.ignoredKeys || e.ignoredKeys.indexOf(s) === -1) && (a += "|" + l[s]);
              }), f[a] || (f[a] = { [e.xKey]: l[e.xKey] }), Object.keys(l).forEach((s) => {
                s !== e.xKey && s !== e.seriesKey && e.valueKeysTallSupport.indexOf(s) === -1 && (!e.ignoredKeys || e.ignoredKeys.indexOf(s) === -1) && (f[a][s] = l[s]);
              }), e.valueKeysTallSupport.forEach((s) => {
                f[a][l[e.seriesKey] + "-" + s] = l[s];
              });
            }), u = Object.keys(f).map((l) => f[l]), u;
          } else if (e.valueKeys !== void 0) {
            let f = {}, u = [], l = e.valueKeys;
            return e.ignoredKeys && e.ignoredKeys.length > 0 && (l = l.concat(e.ignoredKeys)), r.forEach((a) => {
              l.forEach((s) => {
                let t = [], o = a[e.xKey] + "|" + s;
                Object.keys(a).forEach((n) => {
                  n !== e.xKey && n !== e.seriesKey && l.indexOf(n) === -1 && (o += "|" + n + "=" + a[n], t.push(n));
                }), f[o] || (f[o] = { [e.xKey]: a[e.xKey], "**Numeric Value Property**": s }, t.forEach((n) => {
                  f[o][n] = a[n];
                })), f[o][a[e.seriesKey]] = a[s];
              });
            }), Object.keys(f).forEach((a) => {
              (!e.ignoredKeys || e.ignoredKeys.indexOf(f[a]["**Numeric Value Property**"]) === -1) && u.push(f[a]);
            }), u;
          } else {
            let f = {}, u = [];
            return r.forEach((l) => {
              let a = [], s = l[e.xKey];
              Object.keys(l).forEach((t) => {
                t !== e.xKey && t !== e.seriesKey && t !== e.valueKey && (s += "|" + t + "=" + l[t], a.push(t));
              }), f[s] ? f[s][l[e.seriesKey]] = l[e.valueKey] : (f[s] = { [e.xKey]: l[e.xKey], [l[e.seriesKey]]: l[e.valueKey] }, a.forEach((t) => {
                f[s][t] = l[t];
              }));
            }), Object.keys(f).forEach((l) => {
              u.push(f[l]);
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
  cleanData(r, e, f = !1) {
    let u = [];
    if (!Array.isArray(r))
      debugger;
    return f && console.log("## Data to clean=", r), e === void 0 ? (console.log("COVE: cleanData excludeKey undefined"), r) : (r.forEach(function(l, a) {
      f && console.log("clean", a, " d", l);
      let s = {};
      Object.keys(l).forEach(function(t) {
        const o = l[t];
        if (t === e)
          s[t] = o;
        else {
          f && console.log("typeof value is ", typeof o);
          let n = "";
          typeof o == "string" ? n = o ? ((h) => h.replace(/[,\$]/g, ""))(o) : "" : n = o || "";
          const K = (h) => /\d+\.?\d*/.test(h);
          !isNaN(parseFloat(n)) || K(n) ? s[t] = n : s[t] = "";
        }
      }), f && console.log("cleaned=", s), u.push(s);
    }), f && console.log("## cleanedData =", u), u);
  }
  // clean out %, $, commas from numbers when needing to do sorting!
  cleanDataPoint(r, e = !1) {
    e && console.log("clean", r);
    let f = "";
    return typeof r == "string" ? f = r !== null && r !== "" ? r.replace(/[,\$\%]/g, "") : "" : f = r !== null && r !== "" ? r : "", e && console.log("## cleanedData =", f), f;
  }
}
export {
  g as D
};
