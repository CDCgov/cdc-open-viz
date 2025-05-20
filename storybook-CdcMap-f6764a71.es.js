import { j as x } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as e } from "./storybook-index-f2fed736.es.js";
import { C as y, i as n, a as z } from "./storybook-CdcMapComponent-92371039.es.js";
import { f as p } from "./storybook-useDataVizClasses-2dec1abb.es.js";
import { D as E } from "./storybook-DataTransform-cd90df2e.es.js";
import { c as L } from "./storybook-coveUpdateWorker-2d39117f.es.js";
import "./storybook-colorPalettes-bc80e395.es.js";
import "./storybook-index-80cf478c.es.js";
import { _ as U } from "./storybook-lodash-a4231e1c.es.js";
import { C as _ } from "./storybook-ConfigContext-9f571f8e.es.js";
const A = (a) => ((a.general.geoType === "us-county" || a.general.geoType === "us" && (a != null && a.data)) && (a == null || a.data.forEach((i) => {
  i[a.columns.geo.name] && (!isNaN(parseInt(i[a.columns.geo.name])) && i[a.columns.geo.name].length === 4 && (i[a.columns.geo.name] = 0 + i[a.columns.geo.name]), i[a.columns.geo.name] = i[a.columns.geo.name].toString());
})), a), J = ({
  navigationHandler: a,
  isEditor: i,
  configUrl: m,
  logo: u = "",
  link: C,
  config: D
}) => {
  const v = e.useContext(_), [c, T] = e.useState(null), b = (t) => {
    T(t), i && v.setTempConfig(t);
  }, [l, d] = e.useState(!0), r = new E(), g = async (t) => {
    l || d(!0);
    let o = {
      ...n,
      ...D ?? t
    };
    if (o.dataUrl) {
      let s = await p(o.dataUrl);
      s && o.dataDescription && (s = r.autoStandardize(s), s = r.developerStandardize(s, o.dataDescription)), s && (o.data = s);
    } else
      o.formattedData ? o.data = o.formattedData : o.dataDescription && (o.data = r.autoStandardize(o.data), o.data = r.developerStandardize(o.data, o.dataDescription));
    Object.keys(o).forEach((s) => {
      typeof o[s] == "object" && Array.isArray(o[s]) === !1 && n[s] && Object.keys(n[s]).forEach((f) => {
        o[s][f] === void 0 && (o[s][f] = n[s][f]);
      });
    }), (o.columns.geo.name || o.columns.geo.fips) && z(o, o.columns.geo.name || o.columns.geo.fips), o.table.forceDisplay === void 0 && (o.table.forceDisplay = !0), A(o);
    const j = { ...L(o) };
    setTimeout(() => {
      b(j), d(!1);
    }, 10);
  }, h = async () => {
    let t = U.cloneDeep(c ?? n);
    m && (t = await p(m)), typeof t == "object" && g(t);
  };
  return e.useEffect(() => {
    h();
  }, []), l ? null : /* @__PURE__ */ x(
    y,
    {
      config: c,
      navigationHandler: a,
      isEditor: i,
      logo: u,
      link: C,
      loadConfig: g
    }
  );
};
export {
  J as C
};
