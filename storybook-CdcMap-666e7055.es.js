import { j as y } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r } from "./storybook-index-f2fed736.es.js";
import { C as E, i as f } from "./storybook-CdcMapComponent-6b9eeb8c.es.js";
import { f as g } from "./storybook-fetchRemoteData-d0119f0b.es.js";
import { D as z } from "./storybook-DataTransform-d4bb56a2.es.js";
import { c as L } from "./storybook-coveUpdateWorker-2b7600bb.es.js";
import { a as U } from "./storybook-DataTable-577422ab.es.js";
import "./storybook-colorPalettes-bc80e395.es.js";
import "./storybook-index-80cf478c.es.js";
import "./storybook-lodash-a4231e1c.es.js";
import { C as A } from "./storybook-ConfigContext-54fe77a4.es.js";
const H = (a) => ((a.general.geoType === "us-county" || a.general.geoType === "us" && (a != null && a.data)) && (a == null || a.data.forEach((t) => {
  t[a.columns.geo.name] && (!isNaN(parseInt(t[a.columns.geo.name])) && t[a.columns.geo.name].length === 4 && (t[a.columns.geo.name] = 0 + t[a.columns.geo.name]), t[a.columns.geo.name] = t[a.columns.geo.name].toString());
})), a), K = ({
  navigationHandler: a,
  isEditor: t,
  configUrl: c,
  logo: p = "",
  link: u,
  config: C,
  setConfig: D
}) => {
  const v = r.useContext(A), [e, T] = r.useState(null), b = (s) => {
    T(s), t && v.setTempConfig(s);
  }, [l, d] = r.useState(!0), n = new z(), h = async (s) => {
    l || d(!0);
    let o = {
      ...f,
      ...C || s
    };
    if (o.dataUrl) {
      let i = await g(o.dataUrl);
      i && o.dataDescription && (i = n.autoStandardize(i), i = n.developerStandardize(i, o.dataDescription)), i && (o.data = i);
    } else
      o.formattedData ? o.data = o.formattedData : o.dataDescription && (o.data = n.autoStandardize(o.data), o.data = n.developerStandardize(o.data, o.dataDescription));
    Object.keys(o).forEach((i) => {
      typeof o[i] == "object" && Array.isArray(o[i]) === !1 && f[i] && Object.keys(f[i]).forEach((m) => {
        o[i][m] === void 0 && (o[i][m] = f[i][m]);
      });
    }), (o.columns.geo.name || o.columns.geo.fips) && U(o, o.columns.geo.name || o.columns.geo.fips), o.table.forceDisplay === void 0 && (o.table.forceDisplay = !0), H(o);
    const x = { ...L(o) };
    setTimeout(() => {
      b(x), d(!1);
    }, 10);
  }, j = async () => {
    let s = null;
    e && (s = e), c && (s = await g(c)), typeof s == "object" && h(s);
  };
  return r.useEffect(() => {
    j();
  }, []), l ? null : /* @__PURE__ */ y(
    E,
    {
      config: e,
      setEditorConfig: D,
      navigationHandler: a,
      isEditor: t,
      logo: p,
      link: u
    }
  );
};
export {
  K as C
};
