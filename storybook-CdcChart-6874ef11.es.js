import { r as c, R as x } from "./storybook-index-45401197.es.js";
import { a as F, C as $ } from "./storybook-CdcChartComponent-b5228c9e.es.js";
import { i as v, a as j } from "./storybook-isSolr-4154a32f.es.js";
import { P as D } from "./storybook-papaparse.min-b07ddc33.es.js";
import { L as S } from "./storybook-viewports-5c5d7af1.es.js";
import { _ as p } from "./storybook-lodash-a4231e1c.es.js";
const E = (t) => {
  const a = /(?:\.([^.]+))$/, e = /[?&]wt=(csv|json)(?:&|$)/, n = new URL(t, window.location.origin), d = n.pathname, r = n.search, u = a.exec(d);
  if (u && u[1])
    return u[1];
  const l = e.exec(r);
  return l && l[1] ? l[1] : "";
}, _ = ({ configUrl: t, isEditor: a, isDebug: e, config: n }) => {
  const d = c.useContext(F), [r, u] = c.useState({}), l = (s) => {
    u(s), a && d.setTempConfig(s);
  }, [P, h] = c.useState(!0), g = c.useRef(r.filters), C = c.useCallback(
    async (s) => n || await (await fetch(s)).json(),
    [n]
  ), y = c.useCallback(async () => {
    var s;
    if (r.dataUrl) {
      const o = new URL(r.runtimeDataUrl || r.dataUrl, window.location.origin), f = Object.fromEntries(new URLSearchParams(o.search));
      let w = !1;
      if ((s = r.filters) == null || s.forEach((i) => {
        i.type === "url" && f[i.queryParameter] !== decodeURIComponent(i.active) && (f[i.queryParameter] = i.active, w = !0);
      }), !w)
        return;
      const m = `${o.origin}${o.pathname}${new URLSearchParams(f)}`, R = E(m), U = await L(m, R);
      l((i) => ({
        ...i,
        data: { ...U, urlFiltered: !0 },
        runtimeDataUrl: m,
        formattedData: { ...U, urlFiltered: !0 }
      }));
    }
  }, [r]);
  return c.useEffect(() => {
    (async () => {
      h(!0);
      try {
        const o = await C(t), f = await b(o);
        l({
          ...o,
          data: f
        });
      } catch (o) {
        console.error("Failed to load configuration or data", o);
      } finally {
        h(!1);
      }
    })();
  }, [t, C]), c.useEffect(() => {
    p.isEqual(g.current, r.filters) || (g.current = r.filters, y());
  }, [r.filters, y]), P ? /* @__PURE__ */ x.createElement(S, null) : /* @__PURE__ */ x.createElement($, { config: r, isEditor: a, isDebug: e });
}, q = (t, a = "|") => {
  const e = t.replace(/(".*?")|,/g, (...n) => n[1] || a).replace(/["]+/g, "");
  return D.parse(e, {
    header: !0,
    dynamicTyping: !0,
    skipEmptyLines: !0,
    delimiter: a
  }).data;
}, L = async (t, a) => {
  try {
    const e = await fetch(t);
    if (a === "csv" || v(t)) {
      const n = await e.text();
      return q(n);
    } else if (a === "json" || j(t))
      return await e.json();
  } catch (e) {
    return console.error(`Error parsing URL: ${t}`, e), [];
  }
}, b = async (t) => {
  if (!t.dataUrl || p.some(p.get(t, "filters", []), { type: "url" }))
    return t.data || [];
  const a = E(t.dataUrl), e = `${t.dataUrl}`;
  try {
    return await L(e, a);
  } catch {
    return console.error(`Cannot parse URL: ${t.dataUrl}`), [];
  }
};
export {
  _ as C
};
