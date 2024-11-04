import { P as c } from "./storybook-papaparse.min-b07ddc33.es.js";
import { i as a } from "./storybook-isSolr-cb863e7a.es.js";
function p(t) {
  let r = new URL(t, window.location.origin);
  const i = r.pathname;
  return /(?:\.([^.]+))?$/.exec(i)[1] === "csv" || a(t) ? fetch(r.href).then((e) => e.text()).then((e) => (e = e.replace(/(".*?")|,/g, (...n) => n[1] || "|"), e = e.replace(/["]+/g, ""), c.parse(e, {
    //quotes: "true",  // dont need these
    //quoteChar: "'",  // has no effect that I can tell
    header: !0,
    skipEmptyLines: !0,
    delimiter: "|",
    // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
    dynamicTyping: !1
  }).data)) : fetch(a(t) ? t : r.href).then((e) => e.ok ? e.json() : Promise.reject(e));
}
export {
  p as f
};
