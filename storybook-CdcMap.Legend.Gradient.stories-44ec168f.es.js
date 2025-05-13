import { C as D } from "./storybook-CdcMap-666e7055.es.js";
import { W as G } from "./storybook-wastewater-map-26721024.es.js";
import { e as t } from "./storybook-configHelpers-a0be6ce6.es.js";
import "./storybook-jsx-runtime-ea6e0d87.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-CdcMapComponent-6b9eeb8c.es.js";
import "./storybook-ConfigContext-54fe77a4.es.js";
import "./storybook-linear-5c281d48.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Tooltip-7cf39805.es.js";
import "./storybook-index-80cf478c.es.js";
import "./storybook-lodash-a4231e1c.es.js";
import "./storybook-Text-0ce4510d.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-Icon-e250778e.es.js";
import "./storybook-Inputs-f2c63984.es.js";
import "./storybook-useDebounce-5d0290fd.es.js";
import "./storybook-Dropdown-1c93166f.es.js";
import "./storybook-Filters-caf19344.es.js";
import "./storybook-Button-f953e457.es.js";
import "./storybook-MultiSelect-cda00383.es.js";
import "./storybook-Loader-0256c39d.es.js";
import "./storybook-FilterStyles-fd509eb9.es.js";
import "./storybook-NestedDropdown-92b50717.es.js";
import "./storybook-index-8cf78369.es.js";
import "./storybook-extends-0a3e0827.es.js";
import "./storybook-tiny-invariant-9f3340e2.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-papaparse.min-9df418d0.es.js";
import "./storybook-index-31bf6905.es.js";
import "./storybook-DataTable-577422ab.es.js";
import "./storybook-viewports-61111b6b.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-colorPalettes-bc80e395.es.js";
import "./storybook-Table-7ddd1662.es.js";
import "./storybook-useDataVizClasses-3bf30247.es.js";
import "./storybook-index-8e186da8.es.js";
import "./storybook-DataTransform-d4bb56a2.es.js";
import "./storybook-getViewport-cf99c09b.es.js";
import "./storybook-context-0403d744.es.js";
import "./storybook-Accordion-e71370da.es.js";
import "./storybook-updateFieldFactory-c006040a.es.js";
import "./storybook-fetchRemoteData-d0119f0b.es.js";
import "./storybook-coveUpdateWorker-2b7600bb.es.js";
const x = [], _ = {
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
}, N = "map", B = "pinkpurple", I = {
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
}, O = {
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
}, P = [], K = {
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
}, F = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0,
  opacity: 90
}, z = {
  editorErrorMessage: []
}, J = {
  minBubbleSize: 1,
  maxBubbleSize: 20,
  extraBubbleBorder: !1,
  cityStyle: "circle",
  cityStyleLabel: "",
  showBubbleZeros: !1,
  additionalCityStyles: [],
  geoCodeCircleSize: 8
}, Y = {
  coordinates: [
    0,
    30
  ],
  zoom: 1
}, Z = {
  layers: [],
  patterns: []
}, q = {
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
}, j = "Filter Change", Q = {}, X = !1, $ = "0.37", tt = {
  type: "categorical",
  size: 75,
  maxTickRotation: 45,
  labelOffset: 0
}, ot = [
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
], et = "valid-data-map.csv", at = "file", ct = [
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
], it = {
  horizontal: !1,
  series: !1
}, nt = "4.24.10", o = {
  annotations: x,
  general: _,
  type: N,
  color: B,
  columns: I,
  legend: O,
  filters: P,
  table: K,
  tooltips: F,
  runtime: z,
  visual: J,
  mapPosition: Y,
  map: Z,
  hexMap: q,
  filterBehavior: j,
  datasets: Q,
  isResponsiveTicks: X,
  barThickness: $,
  xAxis: tt,
  data: ot,
  dataFileName: et,
  dataFileSourceType: at,
  formattedData: ct,
  dataDescription: it,
  version: nt
}, Xt = {
  title: "Components/Templates/Map/Legend/Gradient",
  component: D
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
      path: ["legend", "subStyle"],
      value: "linear blocks"
    }, {
      path: ["legend", "spaces"],
      value: "2"
    }, {
      path: ["legend", "hideBorder"],
      value: !1
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
      value: !0
    }])
  }
}, s = {
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
}, r = {
  args: {
    config: G
  }
}, w = {
  args: {
    config: t(G, [{
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
var l, d, p;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(l = e.parameters) == null ? void 0 : l.docs,
    source: {
      originalSource: `{
  args: {
    config: UsGradient
  }
}`,
      ...(p = (d = e.parameters) == null ? void 0 : d.docs) == null ? void 0 : p.source
    }
  }
};
var h, T, L;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(h = a.parameters) == null ? void 0 : h.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(UsGradient, [{
      path: ['legend', 'subStyle'],
      value: 'smooth'
    }])
  }
}`,
      ...(L = (T = a.parameters) == null ? void 0 : T.docs) == null ? void 0 : L.source
    }
  }
};
var R, g, m;
c.parameters = {
  ...c.parameters,
  docs: {
    ...(R = c.parameters) == null ? void 0 : R.docs,
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
      ...(m = (g = c.parameters) == null ? void 0 : g.docs) == null ? void 0 : m.source
    }
  }
};
var S, v, u;
i.parameters = {
  ...i.parameters,
  docs: {
    ...(S = i.parameters) == null ? void 0 : S.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(UsGradient, [{
      path: ['legend', 'subStyle'],
      value: 'linear blocks'
    }, {
      path: ['legend', 'spaces'],
      value: '2'
    }, {
      path: ['legend', 'hideBorder'],
      value: false
    }])
  }
}`,
      ...(u = (v = i.parameters) == null ? void 0 : v.docs) == null ? void 0 : u.source
    }
  }
};
var A, U, E;
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
      value: true
    }])
  }
}`,
      ...(E = (U = n.parameters) == null ? void 0 : U.docs) == null ? void 0 : E.source
    }
  }
};
var f, k, y;
s.parameters = {
  ...s.parameters,
  docs: {
    ...(f = s.parameters) == null ? void 0 : f.docs,
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
      ...(y = (k = s.parameters) == null ? void 0 : k.docs) == null ? void 0 : y.source
    }
  }
};
var b, H, C;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(b = r.parameters) == null ? void 0 : b.docs,
    source: {
      originalSource: `{
  args: {
    config: WastewaterMap
  }
}`,
      ...(C = (H = r.parameters) == null ? void 0 : H.docs) == null ? void 0 : C.source
    }
  }
};
var W, M, V;
w.parameters = {
  ...w.parameters,
  docs: {
    ...(W = w.parameters) == null ? void 0 : W.docs,
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
      ...(V = (M = w.parameters) == null ? void 0 : M.docs) == null ? void 0 : V.source
    }
  }
};
const $t = ["Gradient", "Gradient_Smooth", "Gradient_With_Box", "Gradient_With_Space", "Gradient_With_Text", "Gradient_With_Text_And_Box", "Gradient_With_Patterns", "Gradient_Reversed"];
export {
  e as Gradient,
  w as Gradient_Reversed,
  a as Gradient_Smooth,
  c as Gradient_With_Box,
  r as Gradient_With_Patterns,
  i as Gradient_With_Space,
  n as Gradient_With_Text,
  s as Gradient_With_Text_And_Box,
  $t as __namedExportsOrder,
  Xt as default
};
