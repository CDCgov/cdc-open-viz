import { s as l, b as p, c as u, d as C } from "./storybook-DataTable-577422ab.es.js";
import { r as f } from "./storybook-index-f2fed736.es.js";
const o = (e) => {
  if (e && e !== void 0)
    if (e.includes("–") || e.includes("-")) {
      let s = e.includes("–") ? e.split("–") : e.split("-"), r = e.includes("–") ? "–" : "-", n = s[0].split(" ").map((i) => i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()).join(" "), a = s[1].split(" ").map((i) => i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()).join(" ");
      return n + r + a;
    } else
      return e.split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase()).join(" ");
}, m = (e, s = !0) => {
  if (!s)
    return e;
  const r = Object.keys(l), n = Object.keys(p), a = Object.keys(u), i = Object.keys(C);
  let t = e;
  r.includes(t) && (t = o(l[e][0])), n.includes(t) && (t = o(p[e][0]), t === "U.s. Virgin Islands" && (t = "U.S. Virgin Islands")), a.includes(t) && (t = o(u[e][0])), i.includes(t) && (t = o(C[e]));
  const c = {
    "Washington D.C.": "District of Columbia",
    "WASHINGTON DC": "District of Columbia",
    DC: "District of Columbia",
    "WASHINGTON DC.": "District of Columbia",
    Congo: "Republic of the Congo"
  };
  return Object.keys(c).includes(t) === !0 && (t = c[t]), (t == null ? void 0 : t.length) === 2 || t === "U.S. Virgin Islands" ? t : o(t);
}, h = f.createContext(() => {
}), D = f.createContext({});
export {
  D as C,
  h as M,
  m as d,
  o as t
};
