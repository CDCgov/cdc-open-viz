import { j as y } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as c } from "./storybook-index-f2fed736.es.js";
import { C as L } from "./storybook-CdcChartComponent-5510d983.es.js";
import { i as E, a as j } from "./storybook-useDataVizClasses-2dec1abb.es.js";
import { L as F, P as R } from "./storybook-viewports-6b80499f.es.js";
import { C as v } from "./storybook-ConfigContext-9f571f8e.es.js";
import { _ as S } from "./storybook-lodash-a4231e1c.es.js";
const $ = (e) => {
  const r = /(?:\.([^.]+))$/, a = /[?&]wt=(csv|json)(?:&|$)/, s = new URL(e, window.location.origin), u = s.pathname, t = s.search, l = r.exec(u);
  if (l && l[1])
    return l[1];
  const f = a.exec(t);
  return f && f[1] ? f[1] : "";
}, z = ({ configUrl: e, isEditor: r, isDebug: a, config: s }) => {
  const u = c.useContext(v), [t, l] = c.useState({}), f = (o) => {
    l(o), r && u.setTempConfig(o);
  }, [U, p] = c.useState(!0), h = c.useRef(t.filters), g = c.useCallback(
    async (o) => s || await (await fetch(o)).json(),
    [s]
  ), C = c.useCallback(async () => {
    var o;
    if (t.dataUrl) {
      const n = new URL(t.runtimeDataUrl || t.dataUrl, window.location.origin), d = Object.fromEntries(new URLSearchParams(n.search));
      let w = !1;
      if ((o = t.filters) == null || o.forEach((i) => {
        i.type === "url" && d[i.queryParameter] !== decodeURIComponent(i.active) && (d[i.queryParameter] = i.active, w = !0);
      }), !w)
        return;
      const m = `${n.origin}${n.pathname}${new URLSearchParams(d)}`, P = $(m), x = await D(m, P);
      f((i) => ({
        ...i,
        data: { ...x, urlFiltered: !0 },
        runtimeDataUrl: m,
        formattedData: { ...x, urlFiltered: !0 }
      }));
    }
  }, [t]);
  return c.useEffect(() => {
    (async () => {
      p(!0);
      try {
        const n = await g(e);
        f(n);
      } catch (n) {
        console.error("Failed to load configuration or data", n);
      } finally {
        p(!1);
      }
    })();
  }, [e, g]), c.useEffect(() => {
    S.isEqual(h.current, t.filters) || (h.current = t.filters, C());
  }, [t.filters, C]), U ? /* @__PURE__ */ y(F, {}) : /* @__PURE__ */ y(L, { config: t, isEditor: r, isDebug: a });
}, q = (e, r = "|") => {
  const a = e.replace(/(".*?")|,/g, (...s) => s[1] || r).replace(/["]+/g, "");
  return R.parse(a, {
    header: !0,
    dynamicTyping: !0,
    skipEmptyLines: !0,
    delimiter: r
  }).data;
}, D = async (e, r) => {
  try {
    const a = await fetch(e);
    if (r === "csv" || E(e)) {
      const s = await a.text();
      return q(s);
    } else if (r === "json" || j(e))
      return await a.json();
  } catch (a) {
    return console.error(`Error parsing URL: ${e}`, a), [];
  }
};
export {
  z as C
};
