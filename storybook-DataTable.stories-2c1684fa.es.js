import { D as I } from "./storybook-DataTable-b33b00b6.es.js";
import { s as m, a as g, b as u, c as S } from "./storybook-supported-geos-489a8060.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-Loading-f180d060.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-year-bedc547d.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-lodash-c15d8e1c.es.js";
import "./storybook-Icon-48ed169f.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Table-12c53202.es.js";
const H = {
  theme: "theme-blue",
  title: "Dashboard with No Filters"
}, N = [
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
], _ = {
  label: "Data Table",
  show: !0
}, W = "dashboard", O = 1629144022257, M = {
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
  dashboard: H,
  rows: N,
  table: _,
  type: W,
  uuid: O,
  datasets: M
}, B = {
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
}, G = "map", Z = "yelloworangered", K = {
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
}, P = {
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
}, F = {
  title: "Data Table",
  forceDisplay: !0
}, j = {
  showDownloadUrl: !1,
  showDataTableLink: !0
}, z = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0
}, Y = {
  editorErrorMessage: []
}, q = {
  cityStyle: "pin",
  minBubbleSize: 1,
  maxBubbleSize: 20,
  extraBubbleBorder: !1,
  showBubbleZeros: !1,
  geoCodeCircleSize: 2
}, J = {
  coordinates: [
    0,
    30
  ],
  zoom: 1
}, X = {
  layers: []
}, $ = {
  enabled: !1,
  dataHost: "wcms-wp.cdc.gov",
  configUrl: "/wcms/4.0/cdc-wp/data-presentation/examples/city-data-map-example.json"
}, Q = !0, tt = [
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
], at = "Filter Changes", n = {
  general: B,
  type: G,
  color: Z,
  columns: K,
  legend: P,
  dataTable: F,
  table: j,
  tooltips: z,
  runtime: Y,
  visual: q,
  mapPosition: J,
  map: X,
  sharing: $,
  usingWidgetLoader: Q,
  data: tt,
  filterStyle: at
}, s = (t) => {
  if (t && t !== void 0)
    if (t.includes("–") || t.includes("-")) {
      let c = t.includes("–") ? t.split("–") : t.split("-"), T = t.includes("–") ? "–" : "-", p = c[0].split(" ").map((i) => i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()).join(" "), L = c[1].split(" ").map((i) => i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()).join(" ");
      return p + T + L;
    } else
      return t.split(" ").map((c) => c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()).join(" ");
}, et = (t, c = !0) => {
  if (!c)
    return t;
  const T = Object.keys(m), p = Object.keys(g), L = Object.keys(u), i = Object.keys(S);
  let a = t;
  T.includes(a) && (a = s(m[t][0])), p.includes(a) && (a = s(g[t][0])), L.includes(a) && (a = s(u[t][0])), i.includes(a) && (a = s(S[t]));
  const h = {
    "Washington D.C.": "District of Columbia",
    "WASHINGTON DC": "District of Columbia",
    DC: "District of Columbia",
    "WASHINGTON DC.": "District of Columbia",
    Congo: "Republic of the Congo"
  };
  return Object.keys(h).includes(a) === !0 && (a = h[a]), a.length === 2 ? a : s(a);
}, R = [
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
], Rt = {
  title: "Components/Organisms/DataTable",
  component: I
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
    displayGeoName: et,
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
      data: R
    },
    rawData: R,
    runtimeData: R,
    expandDataTable: !0,
    tableTitle: "DataTable",
    viewport: "lg",
    tabbingId: "#asdf"
  }
};
var A, v, E;
l.parameters = {
  ...l.parameters,
  docs: {
    ...(A = l.parameters) == null ? void 0 : A.docs,
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
      ...(E = (v = l.parameters) == null ? void 0 : v.docs) == null ? void 0 : E.source
    }
  }
};
var b, U, f;
w.parameters = {
  ...w.parameters,
  docs: {
    ...(b = w.parameters) == null ? void 0 : b.docs,
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
      ...(f = (U = w.parameters) == null ? void 0 : U.docs) == null ? void 0 : f.source
    }
  }
};
var y, C, D;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(y = r.parameters) == null ? void 0 : y.docs,
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
      ...(D = (C = r.parameters) == null ? void 0 : C.docs) == null ? void 0 : D.source
    }
  }
};
var V, x, k;
d.parameters = {
  ...d.parameters,
  docs: {
    ...(V = d.parameters) == null ? void 0 : V.docs,
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
      ...(k = (x = d.parameters) == null ? void 0 : x.docs) == null ? void 0 : k.source
    }
  }
};
const ht = ["Primary", "CityState", "Grouped", "RowType"];
export {
  w as CityState,
  r as Grouped,
  l as Primary,
  d as RowType,
  ht as __namedExportsOrder,
  Rt as default
};
