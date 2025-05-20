import { _ as y } from "./storybook-lodash-a4231e1c.es.js";
class o {
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
  autoStandardize(a) {
    const e = [];
    if ((!a || a.length === 0) && e.push(this.constants.errorMessageEmptyData), (!(a != null && a.filter) || a.filter((r) => typeof r != "object").length > 0) && e.push(this.constants.errorMessageFormat), e.length > 0) {
      console.error(e);
      return;
    }
    if (a.filter((r) => r.constructor !== Object).length > 0) {
      let r = [];
      for (let t = 1; t < a.length; t++) {
        let s = {};
        a[t].forEach((f, l) => {
          s[a[0][l]] = f;
        }), r.push(s);
      }
      a = r;
    }
    return a;
  }
  //Performs standardizations based on developer provided description of the data
  developerStandardize(a, e) {
    if (!a)
      return [];
    if (e && !(e.horizontal === void 0 || e.series === void 0) && !(e.series === !0 && e.horizontal === !1 && e.singleRow === void 0)) {
      if (e.horizontal === !0)
        if (e.series === !0) {
          if (!e.seriesKey)
            return;
          let r = {}, t = [];
          return a.forEach((s) => {
            let f = [];
            Object.keys(s).forEach((l) => {
              l !== e.seriesKey && isNaN(parseFloat(s[l])) && f.push(l);
            }), Object.keys(s).forEach((l) => {
              if (l !== e.seriesKey && f.indexOf(l) === -1) {
                let u = l + "|" + f.map((K) => K + "=" + s[K]);
                r[u] || (r[u] = { [s[e.seriesKey]]: s[l], key: l }, f.forEach((K) => {
                  r[u][K] = s[K];
                })), r[u][s[e.seriesKey]] = s[l];
              }
            });
          }), Object.keys(r).forEach((s) => {
            t.push(r[s]);
          }), t;
        } else {
          let r = [];
          return a.forEach((t) => {
            let s = [];
            Object.keys(t).forEach((f) => {
              isNaN(parseFloat(t[f])) && s.push(f);
            }), Object.keys(t).forEach((f) => {
              if (s.indexOf(f) === -1) {
                let l = { key: f, value: t[f] };
                s.forEach((u) => {
                  l[u] = t[u];
                }), r.push(l);
              }
            });
          }), r;
        }
      else if (e.series === !0 && e.singleRow === !1)
        if (e.seriesKey !== void 0 && e.xKey !== void 0 && (e.valueKey !== void 0 || e.valueKeys !== void 0 && e.valueKeys.length > 0 || e.valueKeysTallSupport !== void 0 && e.valueKeysTallSupport.length > 0))
          if (e.valueKeysTallSupport !== void 0) {
            let r = {}, t = [];
            return a.forEach((s) => {
              let f = s[e.xKey];
              Object.keys(s).forEach((l) => {
                l !== e.xKey && l !== e.seriesKey && e.valueKeysTallSupport.indexOf(l) === -1 && (!e.ignoredKeys || e.ignoredKeys.indexOf(l) === -1) && (f += "|" + s[l]);
              }), r[f] || (r[f] = { [e.xKey]: s[e.xKey] }), Object.keys(s).forEach((l) => {
                l !== e.xKey && l !== e.seriesKey && e.valueKeysTallSupport.indexOf(l) === -1 && (!e.ignoredKeys || e.ignoredKeys.indexOf(l) === -1) && (r[f][l] = s[l]);
              }), e.valueKeysTallSupport.forEach((l, u) => {
                s[e.seriesKey] && (r[f][u === 0 ? s[e.seriesKey] : s[e.seriesKey] + "-" + l] = s[l]);
              });
            }), t = Object.keys(r).map((s) => r[s]), t;
          } else if (e.valueKeys !== void 0) {
            let r = {}, t = [], s = e.valueKeys;
            return e.ignoredKeys && e.ignoredKeys.length > 0 && (s = s.concat(e.ignoredKeys)), a.forEach((f) => {
              s.forEach((l) => {
                let u = [], K = f[e.xKey] + "|" + l;
                Object.keys(f).forEach((h) => {
                  h !== e.xKey && h !== e.seriesKey && s.indexOf(h) === -1 && (K += "|" + h + "=" + f[h], u.push(h));
                }), r[K] || (r[K] = {
                  [e.xKey]: f[e.xKey],
                  "**Numeric Value Property**": l
                }, u.forEach((h) => {
                  r[K][h] = f[h];
                })), r[K][f[e.seriesKey]] = f[l];
              });
            }), Object.keys(r).forEach((f) => {
              (!e.ignoredKeys || e.ignoredKeys.indexOf(r[f]["**Numeric Value Property**"]) === -1) && t.push(r[f]);
            }), t;
          } else {
            let r = {}, t = [];
            return a.forEach((s) => {
              let f = [], l = s[e.xKey];
              Object.keys(s).forEach((u) => {
                u !== e.xKey && u !== e.seriesKey && u !== e.valueKey && (l += "|" + u + "=" + s[u], f.push(u));
              }), r[l] ? r[l][s[e.seriesKey]] = s[e.valueKey] : (r[l] = {
                [e.xKey]: s[e.xKey],
                [s[e.seriesKey]]: s[e.valueKey]
              }, f.forEach((u) => {
                r[l][u] = s[u];
              }));
            }), Object.keys(r).forEach((s) => {
              t.push(r[s]);
            }), t;
          }
        else
          return;
      return a;
    }
  }
  cleanData(a, e, r) {
    if (!Array.isArray(a) || !e)
      return a;
    const t = (f) => f.replace(/[,\$]/g, ""), s = (f) => !isNaN(parseFloat(f)) && isFinite(f);
    return a.map(
      (f) => y.mapValues(f, (l, u) => {
        if (u === e)
          return l;
        if (r.includes(u)) {
          if (typeof l == "string") {
            const K = t(l);
            return s(K) ? K : "";
          }
          return s(l) ? l : "";
        }
        return l;
      })
    );
  }
  // clean out %, $, commas from numbers when needing to do sorting!
  cleanDataPoint(a, e = !1) {
    e && console.log("clean", a);
    let r = "";
    return typeof a == "string" ? r = a !== null && a !== "" ? a.replace(/[,\$\%]/g, "") : "" : r = a !== null && a !== "" ? a : "", e && console.log("## cleanedData =", r), r;
  }
}
export {
  o as D
};
