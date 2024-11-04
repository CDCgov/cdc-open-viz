import { C as y } from "./storybook-CdcMap-5ccd4f88.es.js";
import { S as k } from "./storybook-DEV-8942-83419f1e.es.js";
import { e as t } from "./storybook-configHelpers-a0be6ce6.es.js";
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
const H = [], b = {
  geoType: "us",
  type: "data",
  noStateFoundMessage: "Map Unavailable",
  annotationDropdownText: "Annotations",
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
  expandDataTable: !1
}, W = "map", C = "pinkpurple", V = {
  geo: {
    name: "STATE",
    label: "Location",
    tooltip: !1,
    dataTable: !0
  },
  primary: {
    dataTable: !0,
    tooltip: !0,
    prefix: "",
    suffix: "",
    name: "Rate",
    label: "",
    roundToPlace: 0
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
}, M = {
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
  position: "top",
  title: "",
  style: "gradient",
  subStyle: "linear blocks",
  tickRotation: "",
  singleColumnLegend: !1,
  hideBorder: !0
}, x = [], D = {
  wrapColumns: !1,
  label: "Data Table",
  expanded: !1,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  showDownloadLinkBelow: !0,
  showFullGeoNameInCSV: !1,
  forceDisplay: !0,
  download: !0,
  indexLabel: ""
}, N = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0,
  opacity: 90
}, B = {
  editorErrorMessage: []
}, G = {
  minBubbleSize: 1,
  maxBubbleSize: 20,
  extraBubbleBorder: !1,
  cityStyle: "circle",
  cityStyleLabel: "",
  showBubbleZeros: !1,
  additionalCityStyles: [],
  geoCodeCircleSize: 8
}, I = {
  coordinates: [
    0,
    30
  ],
  zoom: 1
}, _ = {
  layers: [],
  patterns: []
}, F = {
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
}, O = "Filter Change", P = {}, K = !1, z = "0.37", J = {
  type: "categorical",
  size: 75,
  maxTickRotation: 45,
  labelOffset: 0
}, Y = [
  {
    STATE: "Overall",
    Rate: "55",
    Location: "Vehicle",
    URL: "https://www.cdc.gov"
  },
  {
    STATE: "Alabama",
    Rate: 130,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Alaska",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "American Samoa",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Arizona",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Arkansas",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "California",
    Rate: 30,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Colorado",
    Rate: 40,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Connecticut",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Deleware",
    Rate: "57",
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "DC",
    Rate: 60,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Florida",
    Rate: 30,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Georgia",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Guam",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Hawaii",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Idaho",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Illinois",
    Rate: 30,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Indiana",
    Rate: 40,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Iowa",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Kansas",
    Rate: 57,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Kentucky",
    Rate: 60,
    Location: "NA",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Louisiana",
    Rate: 30,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Maine",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Marshall Islands",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Maryland",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Massachusetts",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Michigan",
    Rate: 12,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Micronesia",
    Rate: 65,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Minnesota",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Mississippi",
    Rate: 57,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Montana",
    Rate: 60,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Montana",
    Rate: 30,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Nebraska",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Nevada",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "New Hampshire",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "New Jersey",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "New Mexico",
    Rate: 12,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "New York",
    Rate: 40,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "North Carolina",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "North Dakota",
    Rate: 57,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Northern Mariana Islands",
    Rate: "60",
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Ohio",
    Rate: 88,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Oklahoma",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Oregon",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Palau",
    Rate: 15,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Pennsylvania",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Puerto Rico",
    Rate: 30,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Rhode Island",
    Rate: 40,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "South Carolina",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "South Dakota",
    Rate: 86,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Tennessee",
    Rate: 60,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Texas",
    Rate: 30,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Utah",
    Rate: 54,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Vermont",
    Rate: 40,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Virgin Islands",
    Rate: 55,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Virginia",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Washington",
    Rate: 62,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "West Virginia",
    Rate: 25,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Wyoming",
    Rate: 43,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  }
], Z = "valid-data-map.csv", q = "file", j = [
  {
    STATE: "Overall",
    Rate: "55",
    Location: "Vehicle",
    URL: "https://www.cdc.gov"
  },
  {
    STATE: "Alabama",
    Rate: 130,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Alaska",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "American Samoa",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Arizona",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Arkansas",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "California",
    Rate: 30,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Colorado",
    Rate: 40,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Connecticut",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Deleware",
    Rate: "57",
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "DC",
    Rate: 60,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Florida",
    Rate: 30,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Georgia",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Guam",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Hawaii",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Idaho",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Illinois",
    Rate: 30,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Indiana",
    Rate: 40,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Iowa",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Kansas",
    Rate: 57,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Kentucky",
    Rate: 60,
    Location: "NA",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Louisiana",
    Rate: 30,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Maine",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Marshall Islands",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Maryland",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Massachusetts",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Michigan",
    Rate: 12,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Micronesia",
    Rate: 65,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Minnesota",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Mississippi",
    Rate: 57,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Montana",
    Rate: 60,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Montana",
    Rate: 30,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Nebraska",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Nevada",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "New Hampshire",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "New Jersey",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "New Mexico",
    Rate: 12,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "New York",
    Rate: 40,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "North Carolina",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "North Dakota",
    Rate: 57,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Northern Mariana Islands",
    Rate: "60",
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Ohio",
    Rate: 88,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Oklahoma",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Oregon",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Palau",
    Rate: 15,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Pennsylvania",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Puerto Rico",
    Rate: 30,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Rhode Island",
    Rate: 40,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "South Carolina",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "South Dakota",
    Rate: 86,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Tennessee",
    Rate: 60,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Texas",
    Rate: 30,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Utah",
    Rate: 54,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Vermont",
    Rate: 40,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Virgin Islands",
    Rate: 55,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Virginia",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Washington",
    Rate: 62,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "West Virginia",
    Rate: 25,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Wyoming",
    Rate: 43,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  }
], Q = {
  horizontal: !1,
  series: !1
}, X = "4.24.10", s = {
  annotations: H,
  general: b,
  type: W,
  color: C,
  columns: V,
  legend: M,
  filters: x,
  table: D,
  tooltips: N,
  runtime: B,
  visual: G,
  mapPosition: I,
  map: _,
  hexMap: F,
  filterBehavior: O,
  datasets: P,
  isResponsiveTicks: K,
  barThickness: z,
  xAxis: J,
  data: Y,
  dataFileName: Z,
  dataFileSourceType: q,
  formattedData: j,
  dataDescription: Q,
  version: X
}, Mt = {
  title: "Components/Templates/Map/Legend",
  component: y
}, o = {
  args: {
    config: t(k, [{
      path: ["legend", "style"],
      value: "gradient"
    }, {
      path: ["legend", "position"],
      value: "top"
    }, {
      path: ["legend", "hideBorder"],
      value: !0
    }, {
      path: ["legend", "title"],
      value: ""
    }, {
      path: ["legend", "description"],
      value: ""
    }])
  }
}, e = {
  args: {
    config: s
  }
}, a = {
  args: {
    config: t(s, [{
      path: ["legend", "subStyle"],
      value: "smooth"
    }])
  }
}, c = {
  args: {
    config: t(s, [{
      path: ["legend", "subStyle"],
      value: "linear blocks"
    }, {
      path: ["legend", "hideBorder"],
      value: !1
    }])
  }
}, i = {
  args: {
    config: t(s, [{
      path: ["legend", "title"],
      value: "Title"
    }, {
      path: ["legend", "description"],
      value: "Description"
    }, {
      path: ["legend", "hideBorder"],
      value: !1
    }])
  }
}, n = {
  args: {
    config: t(k, [{
      path: ["legend", "hideBorder"],
      value: !0
    }])
  }
};
var w, r, l;
o.parameters = {
  ...o.parameters,
  docs: {
    ...(w = o.parameters) == null ? void 0 : w.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(SingleStateWithFilters, [{
      path: ['legend', 'style'],
      value: 'gradient'
    }, {
      path: ['legend', 'position'],
      value: 'top'
    }, {
      path: ['legend', 'hideBorder'],
      value: true
    }, {
      path: ['legend', 'title'],
      value: ''
    }, {
      path: ['legend', 'description'],
      value: ''
    }])
  }
}`,
      ...(l = (r = o.parameters) == null ? void 0 : r.docs) == null ? void 0 : l.source
    }
  }
};
var d, p, h;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(d = e.parameters) == null ? void 0 : d.docs,
    source: {
      originalSource: `{
  args: {
    config: UsGradient
  }
}`,
      ...(h = (p = e.parameters) == null ? void 0 : p.docs) == null ? void 0 : h.source
    }
  }
};
var T, L, R;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(T = a.parameters) == null ? void 0 : T.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(UsGradient, [{
      path: ['legend', 'subStyle'],
      value: 'smooth'
    }])
  }
}`,
      ...(R = (L = a.parameters) == null ? void 0 : L.docs) == null ? void 0 : R.source
    }
  }
};
var g, S, m;
c.parameters = {
  ...c.parameters,
  docs: {
    ...(g = c.parameters) == null ? void 0 : g.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(UsGradient, [{
      path: ['legend', 'subStyle'],
      value: 'linear blocks'
    }, {
      path: ['legend', 'hideBorder'],
      value: false
    }])
  }
}`,
      ...(m = (S = c.parameters) == null ? void 0 : S.docs) == null ? void 0 : m.source
    }
  }
};
var v, A, U;
i.parameters = {
  ...i.parameters,
  docs: {
    ...(v = i.parameters) == null ? void 0 : v.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(UsGradient, [{
      path: ['legend', 'title'],
      value: 'Title'
    }, {
      path: ['legend', 'description'],
      value: 'Description'
    }, {
      path: ['legend', 'hideBorder'],
      value: false
    }])
  }
}`,
      ...(U = (A = i.parameters) == null ? void 0 : A.docs) == null ? void 0 : U.source
    }
  }
};
var u, E, f;
n.parameters = {
  ...n.parameters,
  docs: {
    ...(u = n.parameters) == null ? void 0 : u.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(SingleStateWithFilters, [{
      path: ['legend', 'hideBorder'],
      value: true
    }])
  }
}`,
      ...(f = (E = n.parameters) == null ? void 0 : E.docs) == null ? void 0 : f.source
    }
  }
};
const xt = ["Single_State_With_Filters", "Gradient", "Gradient_Smooth", "Gradient_With_Box", "Gradient_With_Text", "Legend_Right"];
export {
  e as Gradient,
  a as Gradient_Smooth,
  c as Gradient_With_Box,
  i as Gradient_With_Text,
  n as Legend_Right,
  o as Single_State_With_Filters,
  xt as __namedExportsOrder,
  Mt as default
};
