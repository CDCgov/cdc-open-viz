import { j as y } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as e } from "./storybook-index-f2fed736.es.js";
import { C as E, i as n } from "./storybook-CdcMapComponent-855e0507.es.js";
import { f as p } from "./storybook-fetchRemoteData-d0119f0b.es.js";
import { D as z } from "./storybook-DataTransform-d4bb56a2.es.js";
import { c as L } from "./storybook-coveUpdateWorker-2b7600bb.es.js";
import { a as U } from "./storybook-DataTable-577422ab.es.js";
import "./storybook-colorPalettes-bc80e395.es.js";
import "./storybook-index-80cf478c.es.js";
import { _ } from "./storybook-lodash-a4231e1c.es.js";
import { C as A } from "./storybook-ConfigContext-04a7c3c3.es.js";
const H = (a) => ((a.general.geoType === "us-county" || a.general.geoType === "us" && (a != null && a.data)) && (a == null || a.data.forEach((s) => {
  s[a.columns.geo.name] && (!isNaN(parseInt(s[a.columns.geo.name])) && s[a.columns.geo.name].length === 4 && (s[a.columns.geo.name] = 0 + s[a.columns.geo.name]), s[a.columns.geo.name] = s[a.columns.geo.name].toString());
})), a), Q = ({
  navigationHandler: a,
  isEditor: s,
  configUrl: m,
  logo: u = "",
  link: C,
  config: D,
  setConfig: v
}) => {
  const T = e.useContext(A), [c, b] = e.useState(null), h = (t) => {
    b(t), s && T.setTempConfig(t);
  }, [l, d] = e.useState(!0), r = new z(), g = async (t) => {
    l || d(!0);
    let o = {
      ...n,
      ...D ?? t
    };
    if (o.dataUrl) {
      let i = await p(o.dataUrl);
      i && o.dataDescription && (i = r.autoStandardize(i), i = r.developerStandardize(i, o.dataDescription)), i && (o.data = i);
    } else
      o.formattedData ? o.data = o.formattedData : o.dataDescription && (o.data = r.autoStandardize(o.data), o.data = r.developerStandardize(o.data, o.dataDescription));
    Object.keys(o).forEach((i) => {
      typeof o[i] == "object" && Array.isArray(o[i]) === !1 && n[i] && Object.keys(n[i]).forEach((f) => {
        o[i][f] === void 0 && (o[i][f] = n[i][f]);
      });
    }), (o.columns.geo.name || o.columns.geo.fips) && U(o, o.columns.geo.name || o.columns.geo.fips), o.table.forceDisplay === void 0 && (o.table.forceDisplay = !0), H(o);
    const x = { ...L(o) };
    setTimeout(() => {
      h(x), d(!1);
    }, 10);
  }, j = async () => {
    let t = _.cloneDeep(c ?? n);
    m && (t = await p(m)), typeof t == "object" && g(t);
  };
  return e.useEffect(() => {
    j();
  }, []), l ? null : /* @__PURE__ */ y(
    E,
    {
      config: c,
      setEditorConfig: v,
      navigationHandler: a,
      isEditor: s,
      logo: u,
      link: C,
      loadConfig: g
    }
  );
};
export {
  Q as C
};
