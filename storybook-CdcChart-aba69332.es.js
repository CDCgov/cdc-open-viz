import { j as y } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as c } from "./storybook-index-f2fed736.es.js";
import { C as L } from "./storybook-CdcChartComponent-9be245f2.es.js";
import { i as E, a as j } from "./storybook-getViewport-cf99c09b.es.js";
import { P as F } from "./storybook-papaparse.min-9df418d0.es.js";
import { C as R } from "./storybook-ConfigContext-54fe77a4.es.js";
import { L as v } from "./storybook-viewports-61111b6b.es.js";
import { _ as S } from "./storybook-lodash-a4231e1c.es.js";
const $ = (e) => {
  const r = /(?:\.([^.]+))$/, a = /[?&]wt=(csv|json)(?:&|$)/, s = new URL(e, window.location.origin), u = s.pathname, t = s.search, l = r.exec(u);
  if (l && l[1])
    return l[1];
  const f = a.exec(t);
  return f && f[1] ? f[1] : "";
}, A = ({ configUrl: e, isEditor: r, isDebug: a, config: s }) => {
  const u = c.useContext(R), [t, l] = c.useState({}), f = (o) => {
    l(o), r && u.setTempConfig(o);
  }, [U, d] = c.useState(!0), h = c.useRef(t.filters), g = c.useCallback(
    async (o) => s || await (await fetch(o)).json(),
    [s]
  ), C = c.useCallback(async () => {
    var o;
    if (t.dataUrl) {
      const n = new URL(t.runtimeDataUrl || t.dataUrl, window.location.origin), m = Object.fromEntries(new URLSearchParams(n.search));
      let w = !1;
      if ((o = t.filters) == null || o.forEach((i) => {
        i.type === "url" && m[i.queryParameter] !== decodeURIComponent(i.active) && (m[i.queryParameter] = i.active, w = !0);
      }), !w)
        return;
      const p = `${n.origin}${n.pathname}${new URLSearchParams(m)}`, P = $(p), x = await D(p, P);
      f((i) => ({
        ...i,
        data: { ...x, urlFiltered: !0 },
        runtimeDataUrl: p,
        formattedData: { ...x, urlFiltered: !0 }
      }));
    }
  }, [t]);
  return c.useEffect(() => {
    (async () => {
      d(!0);
      try {
        const n = await g(e);
        f(n);
      } catch (n) {
        console.error("Failed to load configuration or data", n);
      } finally {
        d(!1);
      }
    })();
  }, [e, g]), c.useEffect(() => {
    S.isEqual(h.current, t.filters) || (h.current = t.filters, C());
  }, [t.filters, C]), U ? /* @__PURE__ */ y(v, {}) : /* @__PURE__ */ y(L, { config: t, isEditor: r, isDebug: a });
}, q = (e, r = "|") => {
  const a = e.replace(/(".*?")|,/g, (...s) => s[1] || r).replace(/["]+/g, "");
  return F.parse(a, {
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
  A as C
};
