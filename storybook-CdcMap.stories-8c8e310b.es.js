import { C as te } from "./storybook-CdcMap-5ccd4f88.es.js";
import { S as se } from "./storybook-DEV-8942-83419f1e.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-InputToggle-1920f351.es.js";
import "./storybook-lodash-a4231e1c.es.js";
import "./storybook-DataTransform-8cd95c19.es.js";
import "./storybook-Group-eff0b1b9.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Text-c19e6344.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-Icon-73ec66ec.es.js";
import "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-coveUpdateWorker-2249800a.es.js";
import "./storybook-DataTable-c585f042.es.js";
import "./storybook-Loading-f180d060.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-3d33a03f.es.js";
import "./storybook-isSolr-cb863e7a.es.js";
import "./storybook-index-e5bf02db.es.js";
import "./storybook-Filters-a07e1940.es.js";
import "./storybook-Button-d74e310e.es.js";
import "./storybook-MultiSelect-25c4ae51.es.js";
import "./storybook-Tooltip-4102bd69.es.js";
import "./storybook-NestedDropdown-7810a864.es.js";
import "./storybook-supported-geos-a63fb86b.es.js";
import "./storybook-fetchRemoteData-9428020c.es.js";
import "./storybook-Accordion-f47153d9.es.js";
const oe = [], re = {
  geoType: "us-county",
  type: "data",
  geoBorderColor: "darkGray",
  headerColor: "theme-blue",
  title: "",
  showTitle: !0,
  showSidebar: !0,
  showDownloadButton: !0,
  showDownloadMediaButton: !1,
  displayAsHex: !1,
  displayStateLabels: !1,
  territoriesLabel: "Territories",
  territoriesAlwaysShow: !1,
  language: "en",
  geoLabelOverride: "",
  hasRegions: !1,
  fullBorder: !1,
  convertFipsCodes: !0,
  palette: {
    isReversed: !1
  },
  allowMapZoom: !0,
  hideGeoColumnInTooltip: !1,
  hidePrimaryColumnInTooltip: !1,
  statePicked: {
    fipsCode: "01",
    stateName: "Alabama"
  },
  expandDataTable: !1,
  equalNumberOptIn: !0
}, ne = "map", ce = "pinkpurple", pe = {
  geo: {
    name: "FIPS Codes",
    label: "Location",
    tooltip: !1,
    dataTable: !0
  },
  primary: {
    dataTable: !0,
    tooltip: !0,
    prefix: "",
    suffix: "",
    name: "Percent Vaccinated",
    label: "",
    roundToPlace: 2
  },
  navigate: {
    name: ""
  },
  latitude: {
    name: ""
  },
  longitude: {
    name: ""
  }
}, ie = {
  descriptions: {},
  specialClasses: [],
  unified: !1,
  singleColumn: !1,
  singleRow: !1,
  verticalSorted: !1,
  showSpecialClassesLast: !1,
  dynamicDescription: !1,
  type: "equalnumber",
  numberOfItems: 3,
  position: "side",
  title: "Legend"
}, le = [], me = {
  wrapColumns: !1,
  label: "Data Table",
  expanded: !1,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  showFullGeoNameInCSV: !1,
  forceDisplay: !0,
  download: !0,
  indexLabel: ""
}, de = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0,
  opacity: 90
}, ue = {
  editorErrorMessage: []
}, we = {
  minBubbleSize: 1,
  maxBubbleSize: 20,
  extraBubbleBorder: !1,
  cityStyle: "circle",
  cityStyleLabel: "",
  showBubbleZeros: !1,
  additionalCityStyles: [],
  geoCodeCircleSize: 8
}, ge = {
  coordinates: [
    0,
    30
  ],
  zoom: 1
}, fe = {
  layers: [],
  patterns: []
}, he = {
  type: "",
  shapeGroups: [
    {
      legendTitle: "",
      legendDescription: "",
      items: [
        {
          key: "",
          shape: "Arrow Up",
          column: "",
          operator: "=",
          value: ""
        }
      ]
    }
  ]
}, Se = "Filter Change", ve = {}, be = [
  {
    "FIPS Codes": "02013",
    County: "Aleutians East Borough",
    "Public Health Jurisdiction": "AK",
    "Percent Vaccinated": 99.99,
    "Vaccination Coverage Group": "70% or More"
  },
  {
    "FIPS Codes": "02016",
    County: "Aleutians West Census Area",
    "Public Health Jurisdiction": "AK",
    "Percent Vaccinated": 89.74,
    "Vaccination Coverage Group": "70% or More"
  }
], _e = "02-map-valid-county-special-values.csv", xe = "file", ye = {
  horizontal: !1,
  series: !1
}, Ce = "4.24.4", Me = {
  annotations: oe,
  general: re,
  type: ne,
  color: ce,
  columns: pe,
  legend: ie,
  filters: le,
  table: me,
  tooltips: de,
  runtime: ue,
  visual: we,
  mapPosition: ge,
  map: fe,
  hexMap: he,
  filterBehavior: Se,
  datasets: ve,
  data: be,
  dataFileName: _e,
  dataFileSourceType: xe,
  dataDescription: ye,
  version: Ce
}, ra = {
  title: "Components/Templates/Map",
  component: te
}, e = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/equal-interval-map.json"
  }
}, a = {
  args: {
    config: Me
  }
}, t = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/equal-number-map.json"
  }
}, s = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Scale-Based-Categorical-Map-With-Special-Classes.json"
  }
}, o = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/qualitative-map.json"
  }
}, r = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/world-data-map-example.json"
  }
}, n = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/gender-rate-map.json"
  }
}, c = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Hex_Map.json"
  }
}, p = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/US-County-Level-Map.json"
  }
}, i = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-data-map-counties.json"
  }
}, l = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-Bubble-Map-world.json"
  }
}, m = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-hhs-regions-data.json"
  }
}, d = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/custom-layer-map.json"
  }
}, u = {
  args: {
    config: se
  }
};
var w, g, f;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(w = e.parameters) == null ? void 0 : w.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/equal-interval-map.json'
  }
}`,
      ...(f = (g = e.parameters) == null ? void 0 : g.docs) == null ? void 0 : f.source
    }
  }
};
var h, S, v;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(h = a.parameters) == null ? void 0 : h.docs,
    source: {
      originalSource: `{
  args: {
    config: EqualNumberOptInExample
  }
}`,
      ...(v = (S = a.parameters) == null ? void 0 : S.docs) == null ? void 0 : v.source
    }
  }
};
var b, _, x;
t.parameters = {
  ...t.parameters,
  docs: {
    ...(b = t.parameters) == null ? void 0 : b.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/equal-number-map.json'
  }
}`,
      ...(x = (_ = t.parameters) == null ? void 0 : _.docs) == null ? void 0 : x.source
    }
  }
};
var y, C, M;
s.parameters = {
  ...s.parameters,
  docs: {
    ...(y = s.parameters) == null ? void 0 : y.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Scale-Based-Categorical-Map-With-Special-Classes.json'
  }
}`,
      ...(M = (C = s.parameters) == null ? void 0 : C.docs) == null ? void 0 : M.source
    }
  }
};
var U, j, B;
o.parameters = {
  ...o.parameters,
  docs: {
    ...(U = o.parameters) == null ? void 0 : U.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/qualitative-map.json'
  }
}`,
      ...(B = (j = o.parameters) == null ? void 0 : j.docs) == null ? void 0 : B.source
    }
  }
};
var q, F, L;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(q = r.parameters) == null ? void 0 : q.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/world-data-map-example.json'
  }
}`,
      ...(L = (F = r.parameters) == null ? void 0 : F.docs) == null ? void 0 : L.source
    }
  }
};
var T, I, E;
n.parameters = {
  ...n.parameters,
  docs: {
    ...(T = n.parameters) == null ? void 0 : T.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/page-elements/gender-rate-map.json'
  }
}`,
      ...(E = (I = n.parameters) == null ? void 0 : I.docs) == null ? void 0 : E.source
    }
  }
};
var P, H, D;
c.parameters = {
  ...c.parameters,
  docs: {
    ...(P = c.parameters) == null ? void 0 : P.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Hex_Map.json'
  }
}`,
      ...(D = (H = c.parameters) == null ? void 0 : H.docs) == null ? void 0 : D.source
    }
  }
};
var N, A, W;
p.parameters = {
  ...p.parameters,
  docs: {
    ...(N = p.parameters) == null ? void 0 : N.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/US-County-Level-Map.json'
  }
}`,
      ...(W = (A = p.parameters) == null ? void 0 : A.docs) == null ? void 0 : W.source
    }
  }
};
var O, k, z;
i.parameters = {
  ...i.parameters,
  docs: {
    ...(O = i.parameters) == null ? void 0 : O.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-data-map-counties.json'
  }
}`,
      ...(z = (k = i.parameters) == null ? void 0 : k.docs) == null ? void 0 : z.source
    }
  }
};
var G, V, R;
l.parameters = {
  ...l.parameters,
  docs: {
    ...(G = l.parameters) == null ? void 0 : G.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-Bubble-Map-world.json'
  }
}`,
      ...(R = (V = l.parameters) == null ? void 0 : V.docs) == null ? void 0 : R.source
    }
  }
};
var J, K, Q;
m.parameters = {
  ...m.parameters,
  docs: {
    ...(J = m.parameters) == null ? void 0 : J.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/example-hhs-regions-data.json'
  }
}`,
      ...(Q = (K = m.parameters) == null ? void 0 : K.docs) == null ? void 0 : Q.source
    }
  }
};
var Z, X, Y;
d.parameters = {
  ...d.parameters,
  docs: {
    ...(Z = d.parameters) == null ? void 0 : Z.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/custom-layer-map.json'
  }
}`,
      ...(Y = (X = d.parameters) == null ? void 0 : X.docs) == null ? void 0 : Y.source
    }
  }
};
var $, ee, ae;
u.parameters = {
  ...u.parameters,
  docs: {
    ...($ = u.parameters) == null ? void 0 : $.docs,
    source: {
      originalSource: `{
  args: {
    config: SingleStateWithFilters
  }
}`,
      ...(ae = (ee = u.parameters) == null ? void 0 : ee.docs) == null ? void 0 : ae.source
    }
  }
};
const na = ["Equal_Interval_Map", "Equal_Number_Opt_In", "Equal_Number_Map", "Scale_Based", "Qualitative", "World_Map", "Filterable_Map", "Hex_Map", "County_Map", "Single_State", "Bubble_Map", "HHS_Region_Map", "Custom_Map_Layers", "Single_State_With_Filters"];
export {
  l as Bubble_Map,
  p as County_Map,
  d as Custom_Map_Layers,
  e as Equal_Interval_Map,
  t as Equal_Number_Map,
  a as Equal_Number_Opt_In,
  n as Filterable_Map,
  m as HHS_Region_Map,
  c as Hex_Map,
  o as Qualitative,
  s as Scale_Based,
  i as Single_State,
  u as Single_State_With_Filters,
  r as World_Map,
  na as __namedExportsOrder,
  ra as default
};
