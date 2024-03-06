import { P as c } from "./storybook-papaparse.min-b07ddc33.es.js";
import { i as n } from "./storybook-isSolr-6a0136d5.es.js";
async function m(a, o = "") {
  let t = new URL(a, window.location.origin);
  try {
    const r = t.pathname;
    return /(?:\.([^.]+))?$/.exec(r)[1] === "csv" || n(a) ? await fetch(t.href).then((e) => e.text()).then((e) => (e = e.replace(/(".*?")|,/g, (...i) => i[1] || "|"), e = e.replace(/["]+/g, ""), c.parse(e, {
      //quotes: "true",  // dont need these
      //quoteChar: "'",  // has no effect that I can tell
      header: !0,
      skipEmptyLines: !0,
      delimiter: "|",
      // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
      dynamicTyping: !1
    }).data)) : await fetch(n(a) ? a : t.href).then((e) => e.json());
  } catch {
    try {
      return await (await fetch(t)).json();
    } catch {
      console.error(`Cannot parse URL: ${t}`);
    }
  }
}
export {
  m as f
};
