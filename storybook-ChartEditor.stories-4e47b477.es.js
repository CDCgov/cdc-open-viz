import { C as r } from "./storybook-CdcChart-fe0977c7.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-isSolr-6a0136d5.es.js";
import "./storybook-queryStringUtils-aa6bd55f.es.js";
import "./storybook-Icon-adc4a8a7.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-coveUpdateWorker-13bda73e.es.js";
import "./storybook-Button-d74e310e.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-index-e5bf02db.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-Filters-f3a5cfde.es.js";
import "./storybook-index-66852bf6.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-tiny-invariant-9f3340e2.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-DataTransform-b554456e.es.js";
import "./storybook-DataTable-07a3e4db.es.js";
import "./storybook-Loading-f180d060.es.js";
import "./storybook-year-bedc547d.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-12c53202.es.js";
import "./storybook-Group-e6c0d0df.es.js";
import "./storybook-string-7df1b381.es.js";
import "./storybook-icon-check-d4f3700e.es.js";
import "./storybook-Tooltip-edc0f7ab.es.js";
import "./storybook-DataTableEditor-d2b2710e.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-MultiSelect-7f6cca7c.es.js";
import "./storybook-InputSelect-a65afd95.es.js";
import "./storybook-useDataVizClasses-d9099587.es.js";
import "./storybook-cacheBustingString-7a3dd9ba.es.js";
const l = "chart", L = !1, w = {
  noData: "No Data Available"
}, g = "ARDI", T = !0, h = !1, y = "theme-blue", d = !1, v = "medium", u = "hover", p = "Same as Line", R = "false", m = !1, S = "circle", I = "two-tone", A = "regular", _ = "", E = "standard", U = "top", j = !1, H = {
  showDownloadButton: !1
}, f = {
  left: 5,
  right: 5
}, C = [], D = {
  hideAxis: !1,
  displayNumbersOnBar: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: 50,
  gridLines: !1,
  enablePadding: !1,
  min: "",
  max: "",
  labelColor: "#333",
  tickLabelColor: "#333",
  tickColor: "#333",
  rightHideAxis: !0,
  rightAxisSize: 0,
  rightLabel: "",
  rightLabelOffsetSize: 0,
  rightAxisLabelColor: "#333",
  rightAxisTickLabelColor: "#333",
  rightAxisTickColor: "#333",
  numTicks: "",
  axisPadding: 0,
  tickRotation: 0,
  anchors: [],
  dataKey: "males"
}, N = {
  hasLine: !1
}, M = !1, b = 0.35, x = 25, k = 15, V = {
  vertical: 300,
  horizontal: 750
}, W = {
  sortDates: !1,
  anchors: [],
  type: "categorical",
  showTargetLabel: !0,
  targetLabel: "Target",
  hideAxis: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: 75,
  tickRotation: 0,
  min: "",
  max: "",
  labelColor: "#333",
  tickLabelColor: "#333",
  tickColor: "#333",
  numTicks: "",
  labelOffset: 65,
  axisPadding: 0,
  target: 0,
  maxTickRotation: 0,
  dataKey: "cause_type"
}, O = {
  label: "Data Table",
  expanded: !0,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  indexLabel: "Cause Type",
  download: !1,
  showVertical: !0,
  show: !0,
  customTableConfig: !0,
  excludeColumns: [
    "location",
    "age",
    "use",
    "data_group",
    "data_sub_group",
    "cause_category"
  ]
}, P = "vertical", z = "pinkpurple", F = {}, K = {
  hide: !1,
  behavior: "isolate",
  singleRow: !1,
  colorCode: "",
  reverseLabelOrder: !1,
  description: "",
  dynamicLegend: !1,
  dynamicLegendDefaultText: "Show All",
  dynamicLegendItemLimit: 5,
  dynamicLegendItemLimitMessage: "Dynamic Legend Item Limit Hit.",
  dynamicLegendChartMessage: "Select Options from the Legend",
  lineMode: !1,
  verticalSorted: !1,
  highlightOnHover: !1
}, B = {
  height: 25,
  data: [],
  active: !1
}, Y = {
  active: !0,
  keys: [
    "all_causes"
  ]
}, $ = "qualitative-soft", G = !1, J = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, X = !1, Z = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1,
  roundTo: 1
}, q = {}, Q = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, ee = !1, te = "Filter Change", oe = [], ae = [
  {
    dataKey: "males",
    axis: "Left",
    tooltip: !0
  }
], ce = {
  opacity: 90,
  singleSeries: !1
}, ne = {
  theme: "theme-blue",
  title: "ARDI"
}, se = !0, ie = 1, re = 4.23, le = "Pie", Le = "Donut", we = [
  {
    values: [
      "age",
      "sex"
    ],
    active: "sex",
    filterStyle: "dropdown",
    order: "asc",
    columnName: "data_group"
  }
], ge = {
  type: l,
  debugSvg: L,
  chartMessage: w,
  title: g,
  showTitle: T,
  showDownloadMediaButton: h,
  theme: y,
  animate: d,
  fontSize: v,
  lineDatapointStyle: u,
  lineDatapointColor: p,
  barHasBorder: R,
  isLollipopChart: m,
  lollipopShape: S,
  lollipopColorStyle: I,
  visualizationSubType: A,
  barStyle: _,
  roundingStyle: E,
  tipRounding: U,
  isResponsiveTicks: j,
  general: H,
  padding: f,
  suppressedData: C,
  yAxis: D,
  topAxis: N,
  isLegendValue: M,
  barThickness: b,
  barHeight: x,
  barSpace: k,
  heights: V,
  xAxis: W,
  table: O,
  orientation: P,
  color: z,
  columns: F,
  legend: K,
  brush: B,
  exclusions: Y,
  palette: $,
  isPaletteReversed: G,
  twoColor: J,
  labels: X,
  dataFormat: Z,
  confidenceKeys: q,
  visual: Q,
  useLogScale: ee,
  filterBehavior: te,
  highlightedBarValues: oe,
  series: ae,
  tooltips: ce,
  dashboard: ne,
  animateReplay: se,
  aspectRatio: ie,
  validated: re,
  visualizationType: le,
  pieType: Le,
  filters: we
}, Te = [
  {
    location: "united_states",
    age: "all_ages",
    use: "excessive_alcohol_use",
    data_group: "sex",
    data_sub_group: null,
    overall: "104,557",
    males: "97,182",
    females: "43,375",
    "0-19": null,
    "20-34": null,
    "35-49": null,
    "50-64": null,
    "65+": null,
    cause_type: "all_causes",
    cause_category: "summary",
    row_type: "row_group_total"
  },
  {
    location: "united_states",
    age: "all_ages",
    use: "excessive_alcohol_use",
    data_group: "age",
    data_sub_group: "overall",
    overall: null,
    males: null,
    females: null,
    "0-19": "123",
    "20-34": "123",
    "35-49": "123",
    "50-64": "123",
    "65+": "123",
    cause_type: "all_causes",
    cause_category: "summary",
    row_type: "row_group_total"
  },
  {
    location: "united_states",
    age: "all_ages",
    use: "excessive_alcohol_use",
    data_group: "age",
    data_sub_group: "male_only",
    overall: null,
    males: null,
    females: null,
    "0-19": "123",
    "20-34": "123",
    "35-49": "123",
    "50-64": "123",
    "65+": "123",
    cause_type: "all_causes",
    cause_category: "summary",
    row_type: "row_group_total"
  },
  {
    location: "united_states",
    age: "all_ages",
    use: "excessive_alcohol_use",
    data_group: "age",
    data_sub_group: "female_only",
    overall: null,
    males: null,
    females: null,
    "0-19": "123",
    "20-34": "123",
    "35-49": "123",
    "50-64": "123",
    "65+": "123",
    cause_type: "all_causes",
    cause_category: "summary",
    row_type: "row_group_total"
  },
  {
    location: "united_states",
    age: "all_ages",
    use: "excessive_alcohol_use",
    data_group: "sex",
    data_sub_group: null,
    overall: "58,277",
    males: "43,063",
    females: "15,214",
    "0-19": null,
    "20-34": null,
    "35-49": null,
    "50-64": null,
    "65+": null,
    cause_type: "acute_causes",
    cause_category: "summary",
    row_type: null
  },
  {
    location: "united_states",
    age: "all_ages",
    use: "excessive_alcohol_use",
    data_group: "age",
    data_sub_group: "overall",
    overall: null,
    males: null,
    females: null,
    "0-19": "123",
    "20-34": "123",
    "35-49": "123",
    "50-64": "123",
    "65+": "123",
    cause_type: "acute_causes",
    cause_category: "summary",
    row_type: null
  },
  {
    location: "united_states",
    age: "all_ages",
    use: "excessive_alcohol_use",
    data_group: "age",
    data_sub_group: "male_only",
    overall: null,
    males: null,
    females: null,
    "0-19": "123",
    "20-34": "123",
    "35-49": "123",
    "50-64": "123",
    "65+": "123",
    cause_type: "acute_causes",
    cause_category: "summary",
    row_type: null
  },
  {
    location: "united_states",
    age: "all_ages",
    use: "excessive_alcohol_use",
    data_group: "age",
    data_sub_group: "female_only",
    overall: null,
    males: null,
    females: null,
    "0-19": "123",
    "20-34": "123",
    "35-49": "123",
    "50-64": "123",
    "65+": "123",
    cause_type: "acute_causes",
    cause_category: "summary",
    row_type: null
  },
  {
    location: "united_states",
    age: "all_ages",
    use: "excessive_alcohol_use",
    data_group: "sex",
    data_sub_group: null,
    overall: "82,279",
    males: "54,119",
    females: "28,161",
    "0-19": null,
    "20-34": null,
    "35-49": null,
    "50-64": null,
    "65+": null,
    cause_type: "chronic_causes",
    cause_category: "summary",
    row_type: null
  },
  {
    location: "united_states",
    age: "all_ages",
    use: "excessive_alcohol_use",
    data_group: "age",
    data_sub_group: "overall",
    overall: null,
    males: null,
    females: null,
    "0-19": "123",
    "20-34": "123",
    "35-49": "123",
    "50-64": "123",
    "65+": "123",
    cause_type: "chronic_causes",
    cause_category: "summary",
    row_type: null
  },
  {
    location: "united_states",
    age: "all_ages",
    use: "excessive_alcohol_use",
    data_group: "age",
    data_sub_group: "male_only",
    overall: null,
    males: null,
    females: null,
    "0-19": "123",
    "20-34": "123",
    "35-49": "123",
    "50-64": "123",
    "65+": "123",
    cause_type: "chronic_causes",
    cause_category: "summary",
    row_type: null
  },
  {
    location: "united_states",
    age: "all_ages",
    use: "excessive_alcohol_use",
    data_group: "age",
    data_sub_group: "female_only",
    overall: null,
    males: null,
    females: null,
    "0-19": "123",
    "20-34": "123",
    "35-49": "123",
    "50-64": "123",
    "65+": "123",
    cause_type: "chronic_causes",
    cause_category: "summary",
    row_type: null
  }
], he = "chart", ye = "Bar", de = {
  dataKey: "STATE"
}, ve = [
  {
    dataKey: "Rate"
  }
], ue = [
  {
    values: [
      "Home",
      "School",
      "Vehicle",
      "Work"
    ],
    active: "Home",
    order: "asc",
    columnName: "Location",
    setByQueryParameter: "location"
  }
], pe = [
  {
    STATE: "AL",
    Rate: "10",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "AK",
    Rate: "12",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "AS",
    Rate: "14",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "AZ",
    Rate: "9",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "AR",
    Rate: "17",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "CA",
    Rate: "*",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "CO",
    Rate: "22",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "CT",
    Rate: "10",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "DE",
    Rate: "12",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "District of Columbia",
    Rate: "14",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "FL",
    Rate: "9",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "GA",
    Rate: "17",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "GU",
    Rate: "20",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "HI",
    Rate: "22",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "ID",
    Rate: "*",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "IL",
    Rate: "12",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "IN",
    Rate: "14",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "IA",
    Rate: "9",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "KS",
    Rate: "NA",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "KY",
    Rate: "20",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "LA",
    Rate: "22",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "ME",
    Rate: "10",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MH",
    Rate: "12",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MD",
    Rate: "*",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MA",
    Rate: "9",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MI",
    Rate: "17",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "FM",
    Rate: "20",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MN",
    Rate: "22",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MS",
    Rate: "10",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MO",
    Rate: "11",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MT",
    Rate: "14",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "NE",
    Rate: "9",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "NV",
    Rate: "17",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "NH",
    Rate: "20",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "NJ",
    Rate: "28",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "NM",
    Rate: "10",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "NY",
    Rate: "12",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "NC",
    Rate: "14",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "ND",
    Rate: "9",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MP",
    Rate: "17",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "OH",
    Rate: "NA",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "OK",
    Rate: "22",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "OR",
    Rate: "10",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "PW",
    Rate: "12",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "PA",
    Rate: "14",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "PR",
    Rate: "6",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "RI",
    Rate: "17",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "SC",
    Rate: "20",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "SD",
    Rate: "22",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "TN",
    Rate: "10",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "TX",
    Rate: "12",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "VT",
    Rate: "9",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "VI",
    Rate: "17",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "VA",
    Rate: "20",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "WA",
    Rate: "22",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "",
    Trajectory: "No Change"
  },
  {
    STATE: "WV",
    Rate: "10",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "WI",
    Rate: "12",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "",
    Trajectory: "No Change"
  },
  {
    STATE: "WY",
    Rate: "14",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: ""
  },
  {
    STATE: "Los Angeles",
    Rate: "14",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "Atlanta",
    Rate: "12",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "Boston",
    Rate: "20",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "New York City",
    Rate: "22",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "Dallas",
    Rate: "18",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "Seattle",
    Rate: "17",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "New Orleans",
    Rate: "14",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: ""
  }
], Re = "hex-data.csv", me = "file", Se = [
  {
    STATE: "AL",
    Rate: "10",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "AK",
    Rate: "12",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "AS",
    Rate: "14",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "AZ",
    Rate: "9",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "AR",
    Rate: "17",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "CA",
    Rate: "*",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "CO",
    Rate: "22",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "CT",
    Rate: "10",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "DE",
    Rate: "12",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "District of Columbia",
    Rate: "14",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "FL",
    Rate: "9",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "GA",
    Rate: "17",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "GU",
    Rate: "20",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "HI",
    Rate: "22",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "ID",
    Rate: "*",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "IL",
    Rate: "12",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "IN",
    Rate: "14",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "IA",
    Rate: "9",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "KS",
    Rate: "NA",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "KY",
    Rate: "20",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "LA",
    Rate: "22",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "ME",
    Rate: "10",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MH",
    Rate: "12",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MD",
    Rate: "*",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MA",
    Rate: "9",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MI",
    Rate: "17",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "FM",
    Rate: "20",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MN",
    Rate: "22",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MS",
    Rate: "10",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MO",
    Rate: "11",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MT",
    Rate: "14",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "NE",
    Rate: "9",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "NV",
    Rate: "17",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "NH",
    Rate: "20",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "NJ",
    Rate: "28",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "NM",
    Rate: "10",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "NY",
    Rate: "12",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "NC",
    Rate: "14",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "ND",
    Rate: "9",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "MP",
    Rate: "17",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "OH",
    Rate: "NA",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "OK",
    Rate: "22",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "OR",
    Rate: "10",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Medium",
    Trajectory: "Decreasing"
  },
  {
    STATE: "PW",
    Rate: "12",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "PA",
    Rate: "14",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "PR",
    Rate: "6",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "RI",
    Rate: "17",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "SC",
    Rate: "20",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "SD",
    Rate: "22",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "TN",
    Rate: "10",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "TX",
    Rate: "12",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "VT",
    Rate: "9",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "VI",
    Rate: "17",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "VA",
    Rate: "20",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "WA",
    Rate: "22",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "",
    Trajectory: "No Change"
  },
  {
    STATE: "WV",
    Rate: "10",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "WI",
    Rate: "12",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "",
    Trajectory: "No Change"
  },
  {
    STATE: "WY",
    Rate: "14",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: ""
  },
  {
    STATE: "Los Angeles",
    Rate: "14",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "Atlanta",
    Rate: "12",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "Boston",
    Rate: "20",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "New York City",
    Rate: "22",
    Location: "School",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "Dallas",
    Rate: "18",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "Seattle",
    Rate: "17",
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: "No Change"
  },
  {
    STATE: "New Orleans",
    Rate: "14",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "High",
    Trajectory: ""
  }
], Ie = {
  horizontal: !1,
  series: !1
}, Ae = {
  type: he,
  visualizationType: ye,
  xAxis: de,
  series: ve,
  filters: ue,
  data: pe,
  dataFileName: Re,
  dataFileSourceType: me,
  formattedData: Se,
  dataDescription: Ie
}, it = {
  title: "Components/Templates/Chart/Editor",
  component: r
}, e = {
  args: {
    config: {
      ...ge,
      data: Te,
      columns: {
        someCol: {
          name: "females",
          showInViz: !0
        }
      }
    },
    isEditor: !0
  }
}, t = {
  args: {
    config: Ae,
    isEditor: !0
  }
};
var o, a, c;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(o = e.parameters) == null ? void 0 : o.docs,
    source: {
      originalSource: `{
  args: {
    config: {
      ...pieChartExample,
      data: pieData,
      columns: {
        someCol: {
          name: 'females',
          showInViz: true
        }
      }
    },
    isEditor: true
  }
}`,
      ...(c = (a = e.parameters) == null ? void 0 : a.docs) == null ? void 0 : c.source
    }
  }
};
var n, s, i;
t.parameters = {
  ...t.parameters,
  docs: {
    ...(n = t.parameters) == null ? void 0 : n.docs,
    source: {
      originalSource: `{
  args: {
    config: urlFilterExample,
    isEditor: true
  }
}`,
      ...(i = (s = t.parameters) == null ? void 0 : s.docs) == null ? void 0 : i.source
    }
  }
};
const rt = ["Primary", "Url_Filter"];
export {
  e as Primary,
  t as Url_Filter,
  rt as __namedExportsOrder,
  it as default
};
