import { j as x } from "./storybook-jsx-runtime-36872362.es.js";
import { r as c } from "./storybook-index-45401197.es.js";
import { a as R, C as j } from "./storybook-CdcChartComponent-b107ddb3.es.js";
import { i as $, a as v } from "./storybook-getViewport-7dc50c16.es.js";
import { P as D } from "./storybook-papaparse.min-b07ddc33.es.js";
import { L as S } from "./storybook-viewports-678eca6e.es.js";
import { _ as p } from "./storybook-lodash-a4231e1c.es.js";
const L = (t) => {
  const a = /(?:\.([^.]+))$/, r = /[?&]wt=(csv|json)(?:&|$)/, o = new URL(t, window.location.origin), d = o.pathname, e = o.search, u = a.exec(d);
  if (u && u[1])
    return u[1];
  const l = r.exec(e);
  return l && l[1] ? l[1] : "";
}, z = ({ configUrl: t, isEditor: a, isDebug: r, config: o }) => {
  const d = c.useContext(R), [e, u] = c.useState({}), l = (s) => {
    u(s), a && d.setTempConfig(s);
  }, [E, h] = c.useState(!0), g = c.useRef(e.filters), C = c.useCallback(
    async (s) => o || await (await fetch(s)).json(),
    [o]
  ), y = c.useCallback(async () => {
    var s;
    if (e.dataUrl) {
      const n = new URL(e.runtimeDataUrl || e.dataUrl, window.location.origin), f = Object.fromEntries(new URLSearchParams(n.search));
      let w = !1;
      if ((s = e.filters) == null || s.forEach((i) => {
        i.type === "url" && f[i.queryParameter] !== decodeURIComponent(i.active) && (f[i.queryParameter] = i.active, w = !0);
      }), !w)
        return;
      const m = `${n.origin}${n.pathname}${new URLSearchParams(f)}`, F = L(m), U = await P(m, F);
      l((i) => ({
        ...i,
        data: { ...U, urlFiltered: !0 },
        runtimeDataUrl: m,
        formattedData: { ...U, urlFiltered: !0 }
      }));
    }
  }, [e]);
  return c.useEffect(() => {
    (async () => {
      h(!0);
      try {
        const n = await C(t), f = await b(n);
        l({
          ...n,
          data: f
        });
      } catch (n) {
        console.error("Failed to load configuration or data", n);
      } finally {
        h(!1);
      }
    })();
  }, [t, C]), c.useEffect(() => {
    p.isEqual(g.current, e.filters) || (g.current = e.filters, y());
  }, [e.filters, y]), E ? /* @__PURE__ */ x(S, {}) : /* @__PURE__ */ x(j, { config: e, isEditor: a, isDebug: r });
}, q = (t, a = "|") => {
  const r = t.replace(/(".*?")|,/g, (...o) => o[1] || a).replace(/["]+/g, "");
  return D.parse(r, {
    header: !0,
    dynamicTyping: !0,
    skipEmptyLines: !0,
    delimiter: a
  }).data;
}, P = async (t, a) => {
  try {
    const r = await fetch(t);
    if (a === "csv" || $(t)) {
      const o = await r.text();
      return q(o);
    } else if (a === "json" || v(t))
      return await r.json();
  } catch (r) {
    return console.error(`Error parsing URL: ${t}`, r), [];
  }
}, b = async (t) => {
  if (!t.dataUrl || p.some(p.get(t, "filters", []), { type: "url" }))
    return t.data || [];
  const a = L(t.dataUrl), r = `${t.dataUrl}`;
  try {
    return await P(r, a);
  } catch {
    return console.error(`Cannot parse URL: ${t.dataUrl}`), [];
  }
};
export {
  z as C
};
