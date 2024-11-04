import { D as W } from "./storybook-DataTable-c585f042.es.js";
import { s as u, a as g, b as S, c as A } from "./storybook-supported-geos-a63fb86b.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-Loading-f180d060.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-lodash-a4231e1c.es.js";
import "./storybook-Icon-73ec66ec.es.js";
import "./storybook-Table-3d33a03f.es.js";
const O = {
  theme: "theme-blue",
  title: "Dashboard with No Filters"
}, P = [
  [
    {
      width: 12,
      widget: "map1629143821077"
    },
    {},
    {}
  ],
  [
    {
      width: 6,
      widget: "data-bite1629144030877"
    },
    {
      width: 6,
      widget: "data-bite1629144267659"
    },
    {
      width: null
    }
  ]
], F = {
  label: "Data Table",
  show: !0
}, B = "dashboard", M = 1629144022257, G = {
  "dashboard_example_map.csv": {
    data: [
      {
        Location: "Alabama",
        TimeZone: 1,
        Rate: 1375
      },
      {
        Location: "Alaska",
        TimeZone: 1,
        Rate: 1377
      },
      {
        Location: "American Samoa",
        TimeZone: 1,
        Rate: 1388
      },
      {
        Location: "Arizona",
        TimeZone: 1,
        Rate: 1401
      },
      {
        Location: "Arkansas",
        TimeZone: 1,
        Rate: 1398
      },
      {
        Location: "California",
        TimeZone: 2,
        Rate: 1381
      },
      {
        Location: "Colorado",
        TimeZone: 2,
        Rate: 1369
      },
      {
        Location: "Connecticut",
        TimeZone: 2,
        Rate: 1403
      },
      {
        Location: "Delaware	",
        TimeZone: 2,
        Rate: "1384"
      },
      {
        Location: "District of Columbia",
        TimeZone: 2,
        Rate: 1400
      },
      {
        Location: "Florida",
        TimeZone: 2,
        Rate: 1387
      },
      {
        Location: "Georgia",
        TimeZone: 3,
        Rate: 1365
      },
      {
        Location: "Guam",
        TimeZone: 3,
        Rate: 1356
      },
      {
        Location: "Hawaii",
        TimeZone: 3,
        Rate: 1362
      },
      {
        Location: "Idaho",
        TimeZone: 3,
        Rate: 1374
      }
    ],
    dataFileSize: 971,
    dataFileName: "dashboard_example_map.csv",
    dataFileSourceType: "file",
    dataFileFormat: "CSV",
    preview: !0
  }
}, e = {
  dashboard: O,
  rows: P,
  table: F,
  type: B,
  uuid: M,
  datasets: G
}, K = {
  theme: "theme-blue",
  sharedFilters: []
}, Z = [
  {
    columns: [
      {
        width: 12,
        widget: "table1730380781112"
      }
    ],
    uuid: 1730380998726
  }
], z = {
  table1730380781112: {
    filters: [],
    filterBehavior: "Filter Change",
    newViz: !1,
    openModal: !0,
    uid: "table1730380781112",
    type: "table",
    table: {
      label: "Data Table",
      show: !0,
      showDownloadUrl: !1,
      showVertical: !0,
      expanded: !0,
      collapsible: !0
    },
    columns: {
      additionalColumn1: {
        label: "New Column",
        dataTable: !0,
        tooltips: !1,
        prefix: "",
        suffix: "",
        forestPlot: !1,
        startingPoint: "0",
        forestPlotAlignRight: !1,
        roundToPlace: 0,
        commas: !1,
        showInViz: !1,
        forestPlotStartingPoint: 0
      },
      Class: {
        name: "Class",
        dataTable: !1
      },
      Data_Type: {
        name: "Data_Type",
        dataTable: !1
      },
      Question: {
        name: "Question",
        dataTable: !1
      },
      Response: {
        name: "Response",
        dataTable: !1
      },
      Topic: {
        name: "Topic",
        dataTable: !1
      }
    },
    dataFormat: {},
    visualizationType: "table",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    dataKey: "dev-8931-hide-markup-include.csv"
  }
}, j = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showDownloadLinkBelow: !0,
  showVertical: !0
}, $ = !0, Y = {
  "dev-8931-hide-markup-include.csv": {
    data: [],
    dataFileSize: 10023,
    dataFileName: "dev-8931-hide-markup-include.csv",
    dataFileSourceType: "file",
    dataFileFormat: "CSV",
    preview: !0
  }
}, q = !1, J = "dashboard", Q = "0.37", X = {
  type: "categorical",
  size: 75,
  maxTickRotation: 45,
  labelOffset: 0
}, tt = {}, at = "4.24.10", et = 1730380778769, ot = {
  dashboard: K,
  rows: Z,
  visualizations: z,
  table: j,
  newViz: $,
  datasets: Y,
  isResponsiveTicks: q,
  type: J,
  barThickness: Q,
  xAxis: X,
  runtime: tt,
  version: at,
  uuid: et
}, it = {
  title: "Example Data Map with Cities",
  subtext: "*: Lorem ipsum; NA: Lorem ipsum.",
  type: "data",
  geoType: "us",
  headerColor: "theme-cyan",
  showSidebar: !0,
  showTitle: !0,
  showDownloadButton: !0,
  expandDataTable: !0,
  backgroundColor: "#f5f5f5",
  geoBorderColor: "darkGray",
  territoriesLabel: "Territories",
  language: "en",
  hasRegions: !1,
  showDownloadMediaButton: !1,
  displayAsHex: !1,
  displayStateLabels: !1,
  fullBorder: !1,
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
  showDownloadImgButton: !1,
  showDownloadPdfButton: !1,
  territoriesAlwaysShow: !1,
  geoLabelOverride: ""
}, ct = "map", nt = "yelloworangered", st = {
  geo: {
    dataTable: !0,
    label: "",
    name: "STATE",
    tooltip: !1
  },
  primary: {
    dataTable: !0,
    label: "Rate",
    name: "Rate",
    prefix: "",
    suffix: "",
    tooltip: !1
  },
  navigate: {
    dataTable: !1,
    name: "",
    tooltip: !1
  },
  additionalColumn1: {
    label: "Location",
    dataTable: !0,
    tooltips: !1,
    prefix: "",
    suffix: "",
    name: "Location",
    tooltip: !0
  },
  geosInRegion: {
    name: ""
  },
  latitude: {
    name: ""
  },
  longitude: {
    name: ""
  }
}, lt = {
  numberOfItems: 3,
  position: "side",
  title: "Legend Title",
  description: "Legend Text",
  type: "equalnumber",
  specialClasses: [
    {
      key: "Rate",
      value: "*",
      label: "*"
    },
    {
      key: "Rate",
      value: "NA",
      label: "N/A"
    }
  ],
  unified: !1,
  singleColumn: !1,
  dynamicDescription: !1,
  descriptions: {},
  singleRow: !1,
  showSpecialClassesLast: !1
}, wt = {
  title: "Data Table",
  forceDisplay: !0
}, rt = {
  showDownloadUrl: !1,
  showDataTableLink: !0
}, dt = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0
}, pt = {
  editorErrorMessage: []
}, Tt = {
  cityStyle: "pin",
  minBubbleSize: 1,
  maxBubbleSize: 20,
  extraBubbleBorder: !1,
  showBubbleZeros: !1,
  geoCodeCircleSize: 2
}, ht = {
  coordinates: [
    0,
    30
  ],
  zoom: 1
}, Rt = {
  layers: []
}, Lt = {
  enabled: !1,
  dataHost: "wcms-wp.cdc.gov",
  configUrl: "/wcms/4.0/cdc-wp/data-presentation/examples/city-data-map-example.json"
}, mt = !0, ut = [
  {
    STATE: "AL",
    Rate: 1e3,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Great Plains Tribal Leaders Health Board",
    Rate: 1e3,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Montana American Indian Women’s Health Coalition",
    Rate: 1e3,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "AK",
    Rate: 1200,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "AS",
    Rate: 14,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "EAU CLAIRE",
    Rate: 140,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "AZ",
    Rate: 9,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "AR",
    Rate: 17,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "CA",
    Rate: "*",
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "CO",
    Rate: 22,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "CT",
    Rate: 10,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "DE",
    Rate: 12,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "DC",
    Rate: 14,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "FL",
    Rate: 9,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "GA",
    Rate: 17,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "GU",
    Rate: 20,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "HI",
    Rate: 22,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "GAINESVILLE",
    Rate: 22,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "ID",
    Rate: "*",
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "IL",
    Rate: 12,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "IN",
    Rate: 14,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "IA",
    Rate: 9,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "KS",
    Rate: "NA",
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "KY",
    Rate: 20,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "LA",
    Rate: 22,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "ME",
    Rate: 10,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "MH",
    Rate: 12,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "MD",
    Rate: "*",
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "MA",
    Rate: 9,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "MI",
    Rate: 17,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "FM",
    Rate: 20,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "MN",
    Rate: 22,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "MS",
    Rate: 10,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "MO",
    Rate: 11,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "MT",
    Rate: 14,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "NE",
    Rate: 9,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "NV",
    Rate: 17,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "NH",
    Rate: 20,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "NJ",
    Rate: 28,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "NM",
    Rate: 10,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "NY",
    Rate: 12,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "NC",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "ND",
    Rate: 9,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "MP",
    Rate: 17,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "OH",
    Rate: "NA",
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "OK",
    Rate: 22,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "OR",
    Rate: 10,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "PW",
    Rate: 12,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "PA",
    Rate: 14,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "PR",
    Rate: 6,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "RI",
    Rate: 17,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "SC",
    Rate: 20,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "SD",
    Rate: 22,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "TN",
    Rate: 10,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "TX",
    Rate: 12,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "VT",
    Rate: 9,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "VI",
    Rate: 17,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "VA",
    Rate: 20,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "WA",
    Rate: 22,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "WV",
    Rate: 10,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "WI",
    Rate: 12,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "WY",
    Rate: 14,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Los Angeles",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Grand Rapids, MICHIGAN",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Salem, OReGON",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Round Rock, TEXAS",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "PROVO, UT",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "SALUDA, VIRGINIA",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "ELLENSBURG, WA",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Atlanta",
    Rate: 12,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Boston",
    Rate: 20,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "New York City",
    Rate: 22,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Dallas",
    Rate: 18,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Seattle",
    Rate: 17,
    Location: "Home",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "New Orleans",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Birmingham",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "St Paul",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Hershey",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Salt Lake City",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Syracuse",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Philadelphia",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Alaska Native Tribal Health Consortium",
    Rate: 24,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "American Indian Cancer Foundation",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Arctic Slope Native Association Limited",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "California Rural Indian Health Board Inc.",
    Rate: 19,
    Location: "Work",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Cherokee Nation",
    Rate: 12,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Cheyenne River Sioux Tribe",
    Rate: 11,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Fond du Lac Reservation",
    Rate: 22,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Great Plains Tribal Leaders Health Board",
    Rate: 18,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Hopi Tribe",
    Rate: 19,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Inter-Tribal Council of Michigan, Inc.",
    Rate: 14,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Kaw Nation of Oklahoma",
    Rate: 16,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Native American Rehabilitation Association of the Northwest, Inc.",
    Rate: 22,
    Location: "School",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Navajo Nation",
    Rate: 24,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Northwest Portland Area Indian Health Board",
    Rate: 24,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "South Puget Intertribal Planning Agency",
    Rate: 9,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Southcentral Foundation",
    Rate: 29,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Southeast Alaska Regional Health Consortium",
    Rate: 8,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Yukon-Kuskokwim Health Corporation",
    Rate: 5,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Modesto",
    Rate: 5,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Lakeview",
    Rate: 5,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Lockport",
    Rate: 5,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Warren",
    Rate: 5,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Salem, Oregon",
    Rate: 5,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Salem, Connecticut",
    Rate: 5,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Salem, Alabama",
    Rate: 5,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Salem, Florida",
    Rate: 5,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Salem, Massachusetts",
    Rate: 5,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "San Benito",
    Rate: 5,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Alexandria",
    Rate: 5,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "San Juan",
    Rate: 5,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  }
], gt = "Filter Changes", n = {
  general: it,
  type: ct,
  color: nt,
  columns: st,
  legend: lt,
  dataTable: wt,
  table: rt,
  tooltips: dt,
  runtime: pt,
  visual: Tt,
  mapPosition: ht,
  map: Rt,
  sharing: Lt,
  usingWidgetLoader: mt,
  data: ut,
  filterStyle: gt
}, s = (t) => {
  if (t && t !== void 0)
    if (t.includes("–") || t.includes("-")) {
      let i = t.includes("–") ? t.split("–") : t.split("-"), T = t.includes("–") ? "–" : "-", h = i[0].split(" ").map((c) => c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()).join(" "), R = i[1].split(" ").map((c) => c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()).join(" ");
      return h + T + R;
    } else
      return t.split(" ").map((i) => i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()).join(" ");
}, St = (t, i = !0) => {
  if (!i)
    return t;
  const T = Object.keys(u), h = Object.keys(g), R = Object.keys(S), c = Object.keys(A);
  let a = t;
  T.includes(a) && (a = s(u[t][0])), h.includes(a) && (a = s(g[t][0])), R.includes(a) && (a = s(S[t][0])), c.includes(a) && (a = s(A[t]));
  const m = {
    "Washington D.C.": "District of Columbia",
    "WASHINGTON DC": "District of Columbia",
    DC: "District of Columbia",
    "WASHINGTON DC.": "District of Columbia",
    Congo: "Republic of the Congo"
  };
  return Object.keys(m).includes(a) === !0 && (a = m[a]), a.length === 2 ? a : s(a);
}, L = [
  {
    type: "row_group",
    overall: "",
    male: "",
    female: "",
    row_type: "row_group",
    nullColumn: null
  },
  {
    type: "row_group_total",
    overall: "100",
    male: "50",
    female: "50",
    row_type: "row_group_total",
    nullColumn: null
  },
  {
    type: "regular",
    overall: "50",
    male: "25",
    female: "25",
    row_type: null,
    nullColumn: null
  },
  {
    type: "regular",
    overall: "50",
    male: "25",
    female: "25",
    row_type: null,
    nullColumn: null
  },
  {
    type: "total",
    overall: "100",
    male: "50",
    female: "50",
    row_type: "total",
    nullColumn: null
  }
], kt = {
  title: "Components/Organisms/DataTable",
  component: W
}, o = "dashboard_example_map.csv", l = {
  args: {
    config: e,
    dataConfig: e.datasets[o],
    rawData: e.datasets[o].data,
    runtimeData: e.datasets[o].data,
    expandDataTable: !0,
    tableTitle: "COVE DataTable",
    viewport: "lg",
    tabbingId: o
  }
}, w = {
  args: {
    config: n,
    dataConfig: n,
    rawData: n.data,
    runtimeData: n.data,
    expandDataTable: !0,
    tableTitle: "CityStateExample DataTable",
    viewport: "lg",
    tabbingId: "#asdf",
    columns: n.columns,
    applyLegendToRow: () => ["#000"],
    displayGeoName: St,
    displayDataAsText: (t) => t
  }
}, r = {
  args: {
    config: {
      ...e,
      table: {
        ...e.table,
        groupBy: "TimeZone"
      }
    },
    dataConfig: e.datasets[o],
    rawData: e.datasets[o].data,
    runtimeData: e.datasets[o].data,
    expandDataTable: !0,
    tableTitle: "COVE DataTable",
    viewport: "lg",
    tabbingId: o
  }
}, d = {
  args: {
    config: ot,
    isEditor: !1
  }
}, p = {
  args: {
    config: {
      dashboard: {
        theme: "theme-blue",
        title: "RowType"
      },
      title: "RowType",
      dataUrl: "/examples/feature/__data__/ardi.json",
      animate: !1,
      animateReplay: !0,
      palette: "qualitative-soft",
      aspectRatio: 1,
      dataFormat: {
        roundTo: 1,
        commas: !1,
        prefix: "",
        suffix: ""
      },
      legend: {
        hide: !1
      },
      table: {
        label: "Data Table",
        expanded: !0,
        show: !0,
        customTableConfig: !0
      }
    },
    dataConfig: {
      data: L
    },
    rawData: L,
    runtimeData: L,
    expandDataTable: !0,
    tableTitle: "DataTable",
    viewport: "lg",
    tabbingId: "#asdf"
  }
};
var v, b, E;
l.parameters = {
  ...l.parameters,
  docs: {
    ...(v = l.parameters) == null ? void 0 : v.docs,
    source: {
      originalSource: `{
  args: {
    config: Example_1,
    dataConfig: Example_1.datasets[datasetKey],
    rawData: Example_1.datasets[datasetKey].data,
    runtimeData: Example_1.datasets[datasetKey].data,
    expandDataTable: true,
    tableTitle: 'COVE DataTable',
    viewport: 'lg',
    tabbingId: datasetKey
  }
}`,
      ...(E = (b = l.parameters) == null ? void 0 : b.docs) == null ? void 0 : E.source
    }
  }
};
var f, U, y;
w.parameters = {
  ...w.parameters,
  docs: {
    ...(f = w.parameters) == null ? void 0 : f.docs,
    source: {
      originalSource: `{
  args: {
    config: CityStateExample,
    dataConfig: CityStateExample,
    rawData: CityStateExample.data,
    runtimeData: CityStateExample.data,
    expandDataTable: true,
    tableTitle: 'CityStateExample DataTable',
    viewport: 'lg',
    tabbingId: '#asdf',
    columns: CityStateExample.columns,
    applyLegendToRow: () => ['#000'],
    displayGeoName,
    displayDataAsText: d => d
  }
}`,
      ...(y = (U = w.parameters) == null ? void 0 : U.docs) == null ? void 0 : y.source
    }
  }
};
var C, D, V;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(C = r.parameters) == null ? void 0 : C.docs,
    source: {
      originalSource: `{
  args: {
    config: {
      ...Example_1,
      table: {
        ...Example_1.table,
        groupBy: 'TimeZone'
      }
    },
    dataConfig: Example_1.datasets[datasetKey],
    rawData: Example_1.datasets[datasetKey].data,
    runtimeData: Example_1.datasets[datasetKey].data,
    expandDataTable: true,
    tableTitle: 'COVE DataTable',
    viewport: 'lg',
    tabbingId: datasetKey
  }
}`,
      ...(V = (D = r.parameters) == null ? void 0 : D.docs) == null ? void 0 : V.source
    }
  }
};
var x, k, N;
d.parameters = {
  ...d.parameters,
  docs: {
    ...(x = d.parameters) == null ? void 0 : x.docs,
    source: {
      originalSource: `{
  args: {
    config: NoDataConfig,
    isEditor: false
  }
}`,
      ...(N = (k = d.parameters) == null ? void 0 : k.docs) == null ? void 0 : N.source
    }
  }
};
var I, H, _;
p.parameters = {
  ...p.parameters,
  docs: {
    ...(I = p.parameters) == null ? void 0 : I.docs,
    source: {
      originalSource: `{
  args: {
    config: (({
      dashboard: {
        theme: 'theme-blue',
        title: 'RowType'
      },
      title: 'RowType',
      dataUrl: '/examples/feature/__data__/ardi.json',
      animate: false,
      animateReplay: true,
      palette: 'qualitative-soft',
      aspectRatio: 1,
      dataFormat: {
        roundTo: 1,
        commas: false,
        prefix: '',
        suffix: ''
      },
      legend: {
        hide: false
      },
      table: {
        label: 'Data Table',
        expanded: true,
        show: true,
        customTableConfig: true
      }
    } as unknown) as TableConfig),
    dataConfig: {
      data: rowTypeData
    },
    rawData: rowTypeData,
    runtimeData: rowTypeData,
    expandDataTable: true,
    tableTitle: 'DataTable',
    viewport: 'lg',
    tabbingId: '#asdf'
  }
}`,
      ...(_ = (H = p.parameters) == null ? void 0 : H.docs) == null ? void 0 : _.source
    }
  }
};
const Nt = ["Primary", "CityState", "Grouped", "No_Data", "RowType"];
export {
  w as CityState,
  r as Grouped,
  d as No_Data,
  l as Primary,
  p as RowType,
  Nt as __namedExportsOrder,
  kt as default
};
