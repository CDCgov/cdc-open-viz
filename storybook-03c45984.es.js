import { P as r } from "./storybook-76833471.es.js";
async function p(t, c = "") {
  try {
    t = new URL(t, window.location.origin);
    const a = t.pathname;
    return /(?:\.([^.]+))?$/.exec(a)[1] === "csv" ? await fetch(t.href).then((e) => e.text()).then((e) => (e = e.replace(/(".*?")|,/g, (...n) => n[1] || "|"), e = e.replace(/["]+/g, ""), r.parse(e, {
      //quotes: "true",  // dont need these
      //quoteChar: "'",  // has no effect that I can tell
      header: !0,
      skipEmptyLines: !0,
      delimiter: "|",
      // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
      dynamicTyping: !1
    }).data)) : await fetch(t.href).then((e) => e.json());
  } catch {
    try {
      return await (await fetch(t)).json();
    } catch {
      console.error(`Cannot parse URL: ${t}`);
    }
  }
}
export {
  p as f
};
