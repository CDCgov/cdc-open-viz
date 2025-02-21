import { C as W } from "./storybook-CdcMap-5b56c453.es.js";
import { W as C } from "./storybook-wastewater-map-26721024.es.js";
import { e as t } from "./storybook-configHelpers-a0be6ce6.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-InputToggle-9ce9588e.es.js";
import "./storybook-lodash-a4231e1c.es.js";
import "./storybook-DataTransform-12e90958.es.js";
import "./storybook-linear-ef79b404.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Text-c19e6344.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-Icon-d8cd8abc.es.js";
import "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-Inputs-0111192f.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-Tooltip-8bb9dfa2.es.js";
import "./storybook-Filters-f5cf5018.es.js";
import "./storybook-Button-63da743c.es.js";
import "./storybook-MultiSelect-fb96d51f.es.js";
import "./storybook-Loader-f4ec7b29.es.js";
import "./storybook-FilterStyles-fd509eb9.es.js";
import "./storybook-NestedDropdown-c8ea7d17.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-index-3b47b3f7.es.js";
import "./storybook-DataTable-fa1d7944.es.js";
import "./storybook-viewports-5c5d7af1.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-437adc6c.es.js";
import "./storybook-coveUpdateWorker-e42c85d9.es.js";
import "./storybook-supported-geos-c96b4fa3.es.js";
import "./storybook-getViewport-7dc50c16.es.js";
import "./storybook-Accordion-aed5218d.es.js";
import "./storybook-updateFieldFactory-c006040a.es.js";
const M = [], V = {
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
}, D = "map", x = "pinkpurple", G = {
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
}, N = {
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
}, _ = [], B = {
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
}, I = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0,
  opacity: 90
}, O = {
  editorErrorMessage: []
}, P = {
  minBubbleSize: 1,
  maxBubbleSize: 20,
  extraBubbleBorder: !1,
  cityStyle: "circle",
  cityStyleLabel: "",
  showBubbleZeros: !1,
  additionalCityStyles: [],
  geoCodeCircleSize: 8
}, F = {
  coordinates: [
    0,
    30
  ],
  zoom: 1
}, K = {
  layers: [],
  patterns: []
}, z = {
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
}, J = "Filter Change", Y = {}, Z = !1, q = "0.37", j = {
  type: "categorical",
  size: 75,
  maxTickRotation: 45,
  labelOffset: 0
}, Q = [
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
], X = "valid-data-map.csv", $ = "file", tt = [
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
], ot = {
  horizontal: !1,
  series: !1
}, et = "4.24.10", o = {
  annotations: M,
  general: V,
  type: D,
  color: x,
  columns: G,
  legend: N,
  filters: _,
  table: B,
  tooltips: I,
  runtime: O,
  visual: P,
  mapPosition: F,
  map: K,
  hexMap: z,
  filterBehavior: J,
  datasets: Y,
  isResponsiveTicks: Z,
  barThickness: q,
  xAxis: j,
  data: Q,
  dataFileName: X,
  dataFileSourceType: $,
  formattedData: tt,
  dataDescription: ot,
  version: et
}, Ot = {
  title: "Components/Templates/Map/Legend/Gradient",
  component: W
}, e = {
  args: {
    config: o
  }
}, a = {
  args: {
    config: t(o, [{
      path: ["legend", "subStyle"],
      value: "smooth"
    }])
  }
}, c = {
  args: {
    config: t(o, [{
      path: ["legend", "subStyle"],
      value: "linear blocks"
    }, {
      path: ["legend", "hideBorder"],
      value: !1
    }])
  }
}, i = {
  args: {
    config: t(o, [{
      path: ["legend", "title"],
      value: "Title"
    }, {
      path: ["legend", "description"],
      value: "Description"
    }, {
      path: ["legend", "hideBorder"],
      value: !0
    }])
  }
}, n = {
  args: {
    config: t(o, [{
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
}, s = {
  args: {
    config: C
  }
}, r = {
  args: {
    config: t(C, [{
      path: ["customColors"],
      value: void 0
    }, {
      path: ["legend", "specialClasses"],
      value: ["No Data"]
    }, {
      path: ["legend", "showSpecialClassesLast"],
      value: !1
    }, {
      path: ["legend", "categoryValuesOrder"],
      value: ["No Data", "Minimal", "Low", "Moderate", "High", "Very High"]
    }, {
      path: ["color"],
      value: "greenblue"
    }])
  }
};
var w, l, d;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(w = e.parameters) == null ? void 0 : w.docs,
    source: {
      originalSource: `{
  args: {
    config: UsGradient
  }
}`,
      ...(d = (l = e.parameters) == null ? void 0 : l.docs) == null ? void 0 : d.source
    }
  }
};
var p, h, T;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(p = a.parameters) == null ? void 0 : p.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(UsGradient, [{
      path: ['legend', 'subStyle'],
      value: 'smooth'
    }])
  }
}`,
      ...(T = (h = a.parameters) == null ? void 0 : h.docs) == null ? void 0 : T.source
    }
  }
};
var L, R, g;
c.parameters = {
  ...c.parameters,
  docs: {
    ...(L = c.parameters) == null ? void 0 : L.docs,
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
      ...(g = (R = c.parameters) == null ? void 0 : R.docs) == null ? void 0 : g.source
    }
  }
};
var m, S, v;
i.parameters = {
  ...i.parameters,
  docs: {
    ...(m = i.parameters) == null ? void 0 : m.docs,
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
      value: true
    }])
  }
}`,
      ...(v = (S = i.parameters) == null ? void 0 : S.docs) == null ? void 0 : v.source
    }
  }
};
var A, u, U;
n.parameters = {
  ...n.parameters,
  docs: {
    ...(A = n.parameters) == null ? void 0 : A.docs,
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
      ...(U = (u = n.parameters) == null ? void 0 : u.docs) == null ? void 0 : U.source
    }
  }
};
var E, f, k;
s.parameters = {
  ...s.parameters,
  docs: {
    ...(E = s.parameters) == null ? void 0 : E.docs,
    source: {
      originalSource: `{
  args: {
    config: WastewaterMap
  }
}`,
      ...(k = (f = s.parameters) == null ? void 0 : f.docs) == null ? void 0 : k.source
    }
  }
};
var y, H, b;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(y = r.parameters) == null ? void 0 : y.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(WastewaterMap, [{
      path: ['customColors'],
      value: undefined
    }, {
      path: ['legend', 'specialClasses'],
      value: ['No Data']
    }, {
      path: ['legend', 'showSpecialClassesLast'],
      value: false
    }, {
      path: ['legend', 'categoryValuesOrder'],
      value: ['No Data', 'Minimal', 'Low', 'Moderate', 'High', 'Very High']
    }, {
      path: ['color'],
      value: 'greenblue'
    }])
  }
}`,
      ...(b = (H = r.parameters) == null ? void 0 : H.docs) == null ? void 0 : b.source
    }
  }
};
const Pt = ["Gradient", "Gradient_Smooth", "Gradient_With_Box", "Gradient_With_Text", "Gradient_With_Text_And_Box", "Gradient_With_Patterns", "Gradient_Reversed"];
export {
  e as Gradient,
  r as Gradient_Reversed,
  a as Gradient_Smooth,
  c as Gradient_With_Box,
  s as Gradient_With_Patterns,
  i as Gradient_With_Text,
  n as Gradient_With_Text_And_Box,
  Pt as __namedExportsOrder,
  Ot as default
};
