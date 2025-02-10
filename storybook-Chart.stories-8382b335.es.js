import { C as G } from "./storybook-CdcChart-6874ef11.es.js";
import { b as Q, h as j } from "./storybook-horizontal_bar-4e46191a.es.js";
import { p as Z } from "./storybook-paired-bar-9dcfe98c.es.js";
import { e as J } from "./storybook-configHelpers-a0be6ce6.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-CdcChartComponent-b5228c9e.es.js";
import "./storybook-getViewport-513ec896.es.js";
import "./storybook-InputToggle-1e77d9ab.es.js";
import "./storybook-lodash-a4231e1c.es.js";
import "./storybook-DataTransform-6163e156.es.js";
import "./storybook-linear-ef79b404.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Text-c19e6344.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-Icon-4f5978ba.es.js";
import "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-Inputs-b80d0cf3.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-Tooltip-4102bd69.es.js";
import "./storybook-Filters-ce4a04a7.es.js";
import "./storybook-Button-63da743c.es.js";
import "./storybook-MultiSelect-d587cce3.es.js";
import "./storybook-Loader-f4ec7b29.es.js";
import "./storybook-FilterStyles-fd509eb9.es.js";
import "./storybook-NestedDropdown-bc9acc77.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-coveUpdateWorker-4c7dbbf1.es.js";
import "./storybook-viewports-5c5d7af1.es.js";
import "./storybook-DataTable-897188ef.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-79b9238f.es.js";
import "./storybook-index-3b47b3f7.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-linear-bc5fb9aa.es.js";
import "./storybook-BlurStrokeText-adc27352.es.js";
import "./storybook-InputSelect-20478396.es.js";
import "./storybook-Accordion-2501c7d9.es.js";
import "./storybook-isSolr-4154a32f.es.js";
const X = "chart", ee = "Line", ae = {
  dataKey: "STATE"
}, te = [
  {
    dataKey: "Rate"
  }
], oe = [
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
], ne = [
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
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "FL",
    Rate: "10",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "GA",
    Rate: "12",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "AL",
    Rate: "10",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "AK",
    Rate: "12",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  }
], ie = "hex-data.csv", se = "file", re = [
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
    Location: "Home",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "AL",
    Rate: "10",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "AK",
    Rate: "12",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "FL",
    Rate: "10",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  },
  {
    STATE: "GA",
    Rate: "12",
    Location: "Work",
    URL: "https://www.cdc.gov/",
    "Intensity Level": "Low",
    Trajectory: "Increasing"
  }
], ce = {
  horizontal: !1,
  series: !1
}, le = {
  type: X,
  visualizationType: ee,
  xAxis: ae,
  series: te,
  filters: oe,
  data: ne,
  dataFileName: ie,
  dataFileSourceType: se,
  formattedData: re,
  dataDescription: ce
}, ue = "chart", de = "Lollipop Style Horizontal Bar Chart - Number of Spills Occurring in the Home", pe = !0, we = !1, Se = "theme-blue", me = !0, he = "medium", ke = "hover", De = "false", fe = !0, ge = "circle", Ae = "two-tone", Fe = "horizontal", Ne = "", Ye = "standard", be = "top", ye = !1, Le = {
  showDownloadButton: !1
}, Te = {
  left: 5,
  right: 5
}, $e = {
  hideAxis: !0,
  displayNumbersOnBar: !0,
  hideLabel: !1,
  hideTicks: !1,
  size: "13",
  gridLines: !1,
  enablePadding: !1,
  min: "",
  max: "",
  labelColor: "#333",
  tickLabelColor: "#333",
  tickColor: "#333",
  rightHideAxis: !0,
  rightAxisSize: 50,
  rightLabel: "",
  rightLabelOffsetSize: 0,
  rightAxisLabelColor: "#333",
  rightAxisTickLabelColor: "#333",
  rightAxisTickColor: "#333",
  numTicks: "9",
  axisPadding: 0,
  tickRotation: 0,
  anchors: [],
  type: "chart",
  title: "Lollipop Style Horizontal Bar Chart",
  theme: "theme-blue",
  fontSize: "medium",
  lineDatapointStyle: "hover",
  barHasBorder: "false",
  isLollipopChart: !1,
  lollipopShape: "circle",
  lollipopColorStyle: "two-tone",
  visualizationSubType: "horizontal",
  padding: {
    left: 5,
    right: 5
  },
  yAxis: {
    size: 50,
    gridLines: !1
  },
  barThickness: 0.35,
  height: 260,
  xAxis: {
    type: "categorical",
    size: 75,
    tickRotation: 0,
    dataKey: "Vehicle"
  },
  table: {
    label: "Data Table",
    expanded: !0,
    show: !0
  },
  legend: {
    behavior: "isolate",
    position: "right"
  },
  exclusions: {
    active: !1,
    keys: []
  },
  palette: "qualitative-bold",
  labels: !1,
  dataFormat: {},
  confidenceKeys: {},
  data: [
    {
      Group: "Combined Total of Group A",
      Vehicle: "100",
      Home: "120",
      Work: "140",
      Office: "120"
    },
    {
      Group: "Combined Total of Group B",
      Vehicle: "150",
      Home: "140",
      Work: "100",
      Office: "90"
    },
    {
      Group: "Combined Total of Group C",
      Vehicle: "90",
      Home: "90",
      Work: "80",
      Office: "80"
    },
    {
      Group: "Combined Total of Group D",
      Vehicle: "70",
      Home: "60",
      Work: "50",
      Office: "70"
    }
  ],
  dataFileName: "CSV_Source_Example_for_Horizontal_Bar_viz-cdcwp1619811744363.csv",
  dataFileSourceType: "file",
  visualizationType: "Bar",
  runtime: {
    seriesLabels: {
      Vehicle: "Vehicle"
    },
    seriesLabelsAll: [
      "Vehicle"
    ],
    originalXAxis: {
      type: "categorical",
      size: 75,
      tickRotation: 0,
      dataKey: "Vehicle"
    },
    seriesKeys: [
      "Vehicle"
    ],
    xAxis: {
      size: 50,
      gridLines: !1
    },
    yAxis: {
      type: "categorical",
      size: 75,
      tickRotation: 0,
      dataKey: "Vehicle"
    },
    horizontal: !0,
    uniqueId: 1651765968212,
    editorErrorMessage: ""
  },
  description: "Subtext can be added here for options like citing data sources or insight into reading the bar chart.",
  series: [
    {
      dataKey: "Vehicle",
      type: "Bar"
    }
  ],
  barHeight: 25,
  barPadding: 40,
  labelPlacement: "Below Bar",
  label: "Number of Accidents"
}, xe = [], ve = {
  hasLine: !1
}, Ce = !1, Re = 0.35, Me = 6, Pe = 15, Be = {
  vertical: 300,
  horizontal: 170.39999999999998
}, _e = {
  anchors: [],
  type: "categorical",
  showTargetLabel: !0,
  targetLabel: "Target",
  hideAxis: !0,
  hideLabel: !0,
  hideTicks: !0,
  size: "16",
  tickRotation: 0,
  min: "",
  max: "160",
  labelColor: "#333",
  tickLabelColor: "#333",
  tickColor: "#333",
  numTicks: "",
  labelOffset: 65,
  axisPadding: 0,
  target: 0,
  maxTickRotation: 0,
  dataKey: "Group"
}, Ve = {
  label: "Data Table",
  expanded: !1,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  indexLabel: "Group",
  download: !1,
  showVertical: !0,
  show: !0
}, He = "horizontal", ze = "pinkpurple", Oe = {}, Ie = {
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
  position: "right",
  hide: !0,
  label: "Accident Location"
}, Ee = {
  active: !1,
  keys: []
}, Ue = "qualitative-bold", qe = !1, Ke = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, We = !1, Ge = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, Qe = {}, je = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, Ze = !1, Je = "Filter Change", Xe = [], ea = [
  {
    dataKey: "Home",
    type: "Bar",
    tooltip: !0
  }
], aa = {
  opacity: 90
}, ta = 212, oa = [
  {
    Group: "Combined Total of Group A",
    Vehicle: "100",
    Home: "120",
    Work: "140",
    Office: "120"
  },
  {
    Group: "Combined Total of Group B",
    Vehicle: "150",
    Home: "140",
    Work: "100",
    Office: "90"
  },
  {
    Group: "Combined Total of Group C",
    Vehicle: "90",
    Home: "90",
    Work: "80",
    Office: "80"
  },
  {
    Group: "Combined Total of Group D",
    Vehicle: "70",
    Home: "60",
    Work: "50",
    Office: "70"
  }
], na = "CSV_Source_Example_for_Horizontal_Bar_viz-cdcwp1619811744363.csv", ia = "file", sa = "Bar", ra = "Subtext can be added here for options like citing data sources or insight into reading the bar chart.", ca = 47, la = [], ua = "medium", da = 4.23, pa = 0, wa = {
  type: ue,
  title: de,
  showTitle: pe,
  showDownloadMediaButton: we,
  theme: Se,
  animate: me,
  fontSize: he,
  lineDatapointStyle: ke,
  barHasBorder: De,
  isLollipopChart: fe,
  lollipopShape: ge,
  lollipopColorStyle: Ae,
  visualizationSubType: Fe,
  barStyle: Ne,
  roundingStyle: Ye,
  tipRounding: be,
  isResponsiveTicks: ye,
  general: Le,
  padding: Te,
  yAxis: $e,
  boxplot: xe,
  topAxis: ve,
  isLegendValue: Ce,
  barThickness: Re,
  barHeight: Me,
  barSpace: Pe,
  heights: Be,
  xAxis: _e,
  table: Ve,
  orientation: He,
  color: ze,
  columns: Oe,
  legend: Ie,
  exclusions: Ee,
  palette: Ue,
  isPaletteReversed: qe,
  twoColor: Ke,
  labels: We,
  dataFormat: Ge,
  confidenceKeys: Qe,
  visual: je,
  useLogScale: Ze,
  filterBehavior: Je,
  highlightedBarValues: Xe,
  series: ea,
  tooltips: aa,
  height: ta,
  data: oa,
  dataFileName: na,
  dataFileSourceType: ia,
  visualizationType: sa,
  description: ra,
  barPadding: ca,
  filters: la,
  lollipopSize: ua,
  validated: da,
  dynamicMarginTop: pa
}, Sa = "chart", ma = !1, ha = {
  noData: "No Data Available"
}, ka = "Forest Plot Example", Da = !0, fa = !1, ga = "theme-blue", Aa = !1, Fa = "medium", Na = "hover", Ya = "Same as Line", ba = "false", ya = !1, La = "circle", Ta = "two-tone", $a = "regular", xa = "", va = "standard", Ca = "top", Ra = !1, Ma = {
  showDownloadButton: !1
}, Pa = {
  left: 5,
  right: 5
}, Ba = [], _a = {
  hideAxis: !0,
  displayNumbersOnBar: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: "50",
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
  numTicks: "8",
  axisPadding: 0,
  tickRotation: "45",
  anchors: [],
  dataKey: "N",
  labelPlacement: "On Date/Category Axis",
  label: "The entire chart width centered x axis title"
}, Va = {
  plots: [],
  borders: "true",
  firstQuartilePercentage: 25,
  thirdQuartilePercentage: 75,
  boxWidthPercentage: 40,
  plotOutlierValues: !1,
  plotNonOutlierValues: !0,
  legend: {
    showHowToReadText: !1,
    howToReadText: ""
  },
  labels: {
    q1: "Lower Quartile",
    q2: "q2",
    q3: "Upper Quartile",
    q4: "q4",
    minimum: "Minimum",
    maximum: "Maximum",
    mean: "Mean",
    median: "Median",
    sd: "Standard Deviation",
    iqr: "Interquartile Range",
    total: "Total",
    outliers: "Outliers",
    values: "Values",
    lowerBounds: "Lower Bounds",
    upperBounds: "Upper Bounds"
  }
}, Ha = {
  hasLine: !1
}, za = !1, Oa = 0.35, Ia = 25, Ea = 15, Ua = {
  vertical: 300,
  horizontal: 750
}, qa = {
  sortDates: !1,
  anchors: [],
  type: "categorical",
  showTargetLabel: !0,
  targetLabel: "Target",
  hideAxis: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: "0",
  tickRotation: 0,
  min: "",
  max: "",
  labelColor: "#333",
  tickLabelColor: "#333",
  tickColor: "#333",
  numTicks: "10",
  labelOffset: "60",
  axisPadding: 0,
  target: 0,
  maxTickRotation: 0,
  dataKey: "Author(s) and Year",
  label: "",
  labelPlacement: "On Date/Category Axis",
  tickWidthMax: 37
}, Ka = {
  label: "Data Table",
  expanded: !0,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  indexLabel: "",
  download: !1,
  showVertical: !0,
  show: !0
}, Wa = "horizontal", Ga = "pinkpurple", Qa = {
  Estimate: {
    dataKey: "Estimate",
    name: "Estimate",
    dataTable: !0,
    tooltips: !0
  },
  Lower: {
    dataKey: "Lower",
    name: "Lower",
    dataTable: !0,
    tooltips: !0
  },
  Upper: {
    dataKey: "Upper",
    name: "Upper",
    dataTable: !0,
    tooltips: !0
  }
}, ja = {
  hide: !0,
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
}, Za = {
  height: 25,
  data: [],
  active: !1
}, Ja = {
  active: !0,
  keys: []
}, Xa = "qualitative-bold", et = !1, at = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, tt = !1, ot = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, nt = {}, it = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, st = !1, rt = "Filter Change", ct = [], lt = [
  {
    dataKey: "Confidence",
    type: "Forest Plot",
    axis: "Left",
    tooltip: !0
  }
], ut = {
  opacity: 90,
  singleSeries: !1
}, dt = {
  startAt: "0",
  colors: {
    line: "",
    shape: ""
  },
  lineOfNoEffect: {
    show: !0
  },
  type: "Linear",
  pooledResult: {
    diamondHeight: 5,
    column: ""
  },
  estimateField: "Estimate",
  estimateRadius: "",
  shape: "circle",
  rowHeight: "20",
  description: {
    show: !0,
    text: "description",
    location: 0
  },
  result: {
    show: !0,
    text: "result",
    location: 100
  },
  radius: {
    min: 3,
    max: 5,
    scalingColumn: "N"
  },
  regression: {
    showBaseLine: !0,
    description: "",
    upper: "-10",
    lower: "#87c4c3",
    estimateField: "-10"
  },
  leftWidthOffset: "15",
  rightWidthOffset: "25",
  showZeroLine: !0,
  leftLabel: "left",
  rightLabel: "right",
  lowerCiField: "",
  upperCiField: "",
  hasZeroLine: !0,
  lower: "Lower",
  upper: "Upper",
  null: {
    rowHeight: "31"
  },
  title: "Plot Title 2",
  padding: "200",
  leftWidthOffsetMobile: "45",
  rightWidthOffsetMobile: "45"
}, pt = {
  isStacked: !1
}, wt = {}, St = "Forest Plot", mt = [
  {
    "Author(s) and Year": "Spears, 1983",
    Confidence: "H",
    Timing: "T3",
    N: "170",
    Estimate: "0.2",
    Lower: "-35.7",
    Upper: "36.2",
    Result: "0.2 [-35.7, 36.2]"
  },
  {
    "Author(s) and Year": "Moran, 1998",
    Confidence: "H",
    Timing: "B",
    N: "2183",
    Estimate: "33.4",
    Lower: "-109.5",
    Upper: "176.3",
    Result: "33.4 [-109.5, 176.3]"
  },
  {
    "Author(s) and Year": "Lee, 2003",
    Confidence: "H",
    Timing: "T1-T2",
    N: "186",
    Estimate: "-40.1",
    Lower: "-74",
    Upper: "-6.3",
    Result: "-40.1 [-74, -6.3]"
  },
  {
    "Author(s) and Year": "Cooper, 1977",
    Confidence: "H",
    Timing: "T3",
    N: "1137",
    Estimate: "-46",
    Lower: "-88.5",
    Upper: "-3.5",
    Result: "-46 [-88.5, -3.5]"
  },
  {
    "Author(s) and Year": "Mccarthy, 1998",
    Confidence: "H",
    Timing: "T2",
    N: "1337",
    Estimate: "22.2",
    Lower: "-18.2",
    Upper: "62.6",
    Result: "22.2 [-18.2, 62.6]"
  },
  {
    "Author(s) and Year": "Williams, 1976",
    Confidence: "H",
    Timing: "T1",
    N: "889",
    Estimate: "-14.8",
    Lower: "-55",
    Upper: "25.4",
    Result: "-14.8 [-55, 25.4]"
  },
  {
    "Author(s) and Year": "Sawyer, 1973",
    Confidence: "H",
    Timing: "T1",
    N: "107",
    Estimate: "-57.6",
    Lower: "-104.1",
    Upper: "-11.1",
    Result: "-57.6 [-104.1, -11.1]"
  },
  {
    "Author(s) and Year": "Miller, 2003",
    Confidence: "H",
    Timing: "T3",
    N: "2402",
    Estimate: "-7.3",
    Lower: "-145.9",
    Upper: "131.3",
    Result: "-7.3 [-145.9, 131.3]"
  },
  {
    "Author(s) and Year": "Dixon, 1981",
    Confidence: "M",
    Timing: "T1-T2",
    N: "2242",
    Estimate: "-60.6",
    Lower: "-156.5",
    Upper: "35.3",
    Result: "-60.6 [-156.5, 35.3]"
  },
  {
    "Author(s) and Year": "Thompson, 1988",
    Confidence: "M",
    Timing: "T2-T3",
    N: "2166",
    Estimate: "-31.1",
    Lower: "-129",
    Upper: "66.9",
    Result: "-31.1 [-129, 66.9]"
  },
  {
    "Author(s) and Year": "Valenzuela, 1980",
    Confidence: "M",
    Timing: "T1",
    N: "126",
    Estimate: "6.1",
    Lower: "-16.6",
    Upper: "28.7",
    Result: "6.1 [-16.6, 28.7]"
  },
  {
    "Author(s) and Year": "Vaughn, 1975",
    Confidence: "M",
    Timing: "T1",
    N: "402",
    Estimate: "-77",
    Lower: "-135.3",
    Upper: "-18.7",
    Result: "-77 [-135.3, -18.7]"
  },
  {
    "Author(s) and Year": "Wilson, 1976",
    Confidence: "M",
    Timing: "T2-T3",
    N: "878",
    Estimate: "-108",
    Lower: "-188.2",
    Upper: "-27.8",
    Result: "-108 [-188.2, -27.8]"
  },
  {
    "Author(s) and Year": "Livingston, 2013",
    Confidence: "M",
    Timing: "T2",
    N: "1082",
    Estimate: "28.6",
    Lower: "-42.5",
    Upper: "99.8",
    Result: "28.6 [-42.5, 99.8]"
  },
  {
    "Author(s) and Year": "Sullivan, 1983",
    Confidence: "M",
    Timing: "T2-T3",
    N: "2411",
    Estimate: "-52.4",
    Lower: "-101.9",
    Upper: "-2.9",
    Result: "-52.4 [-101.9, -2.9]"
  },
  {
    "Author(s) and Year": "Parker, 1988",
    Confidence: "M",
    Timing: "T3",
    N: "856",
    Estimate: "-39.3",
    Lower: "-110.7",
    Upper: "32.1",
    Result: "-39.3 [-110.7, 32.1]"
  },
  {
    "Author(s) and Year": "Morgan, 1976",
    Confidence: "M",
    Timing: "T3",
    N: "1679",
    Estimate: "-47.3",
    Lower: "-155.6",
    Upper: "61",
    Result: "-47.3 [-155.6, 61]"
  },
  {
    "Author(s) and Year": "Perez, 2007",
    Confidence: "L",
    Timing: "T2-T3",
    N: "2095",
    Estimate: "-43.5",
    Lower: "-89.5",
    Upper: "2.6",
    Result: "-43.5 [-89.5, 2.6]"
  },
  {
    "Author(s) and Year": "Mathis, 1982",
    Confidence: "L",
    Timing: "T3",
    N: "593",
    Estimate: "-41.8",
    Lower: "-71.8",
    Upper: "-11.8",
    Result: "-41.8 [-71.8, -11.8]"
  },
  {
    "Author(s) and Year": "Parker, 2018",
    Confidence: "L",
    Timing: "B",
    N: "1320",
    Estimate: "-45.6",
    Lower: "-106.9",
    Upper: "15.7",
    Result: "-45.6 [-106.9, 15.7]"
  },
  {
    "Author(s) and Year": "Knox, 2020",
    Confidence: "L",
    Timing: "T1",
    N: "2080",
    Estimate: "22.9",
    Lower: "-89.5",
    Upper: "135.2",
    Result: "22.9 [-89.5, 135.2]"
  },
  {
    "Author(s) and Year": "Manning, 2017",
    Confidence: "L",
    Timing: "T2-T3",
    N: "2463",
    Estimate: "-133.4",
    Lower: "-349.9",
    Upper: "83.1",
    Result: "-133.4 [-349.9, 83.1]"
  },
  {
    "Author(s) and Year": "Jackson, 2018",
    Confidence: "L",
    Timing: "B",
    N: "1880",
    Estimate: "14",
    Lower: "-168.5",
    Upper: "196.5",
    Result: "14 [-168.5, 196.5]"
  }
], ht = "data.csv", kt = "file", Dt = [
  {
    "Author(s) and Year": "Spears, 1983",
    Confidence: "H",
    Timing: "T3",
    N: "170",
    Estimate: "0.2",
    Lower: "-35.7",
    Upper: "36.2",
    Result: "0.2 [-35.7, 36.2]"
  },
  {
    "Author(s) and Year": "Moran, 1998",
    Confidence: "H",
    Timing: "B",
    N: "2183",
    Estimate: "33.4",
    Lower: "-109.5",
    Upper: "176.3",
    Result: "33.4 [-109.5, 176.3]"
  },
  {
    "Author(s) and Year": "Lee, 2003",
    Confidence: "H",
    Timing: "T1-T2",
    N: "186",
    Estimate: "-40.1",
    Lower: "-74",
    Upper: "-6.3",
    Result: "-40.1 [-74, -6.3]"
  },
  {
    "Author(s) and Year": "Cooper, 1977",
    Confidence: "H",
    Timing: "T3",
    N: "1137",
    Estimate: "-46",
    Lower: "-88.5",
    Upper: "-3.5",
    Result: "-46 [-88.5, -3.5]"
  },
  {
    "Author(s) and Year": "Mccarthy, 1998",
    Confidence: "H",
    Timing: "T2",
    N: "1337",
    Estimate: "22.2",
    Lower: "-18.2",
    Upper: "62.6",
    Result: "22.2 [-18.2, 62.6]"
  },
  {
    "Author(s) and Year": "Williams, 1976",
    Confidence: "H",
    Timing: "T1",
    N: "889",
    Estimate: "-14.8",
    Lower: "-55",
    Upper: "25.4",
    Result: "-14.8 [-55, 25.4]"
  },
  {
    "Author(s) and Year": "Sawyer, 1973",
    Confidence: "H",
    Timing: "T1",
    N: "107",
    Estimate: "-57.6",
    Lower: "-104.1",
    Upper: "-11.1",
    Result: "-57.6 [-104.1, -11.1]"
  },
  {
    "Author(s) and Year": "Miller, 2003",
    Confidence: "H",
    Timing: "T3",
    N: "2402",
    Estimate: "-7.3",
    Lower: "-145.9",
    Upper: "131.3",
    Result: "-7.3 [-145.9, 131.3]"
  },
  {
    "Author(s) and Year": "Dixon, 1981",
    Confidence: "M",
    Timing: "T1-T2",
    N: "2242",
    Estimate: "-60.6",
    Lower: "-156.5",
    Upper: "35.3",
    Result: "-60.6 [-156.5, 35.3]"
  },
  {
    "Author(s) and Year": "Thompson, 1988",
    Confidence: "M",
    Timing: "T2-T3",
    N: "2166",
    Estimate: "-31.1",
    Lower: "-129",
    Upper: "66.9",
    Result: "-31.1 [-129, 66.9]"
  },
  {
    "Author(s) and Year": "Valenzuela, 1980",
    Confidence: "M",
    Timing: "T1",
    N: "126",
    Estimate: "6.1",
    Lower: "-16.6",
    Upper: "28.7",
    Result: "6.1 [-16.6, 28.7]"
  },
  {
    "Author(s) and Year": "Vaughn, 1975",
    Confidence: "M",
    Timing: "T1",
    N: "402",
    Estimate: "-77",
    Lower: "-135.3",
    Upper: "-18.7",
    Result: "-77 [-135.3, -18.7]"
  },
  {
    "Author(s) and Year": "Wilson, 1976",
    Confidence: "M",
    Timing: "T2-T3",
    N: "878",
    Estimate: "-108",
    Lower: "-188.2",
    Upper: "-27.8",
    Result: "-108 [-188.2, -27.8]"
  },
  {
    "Author(s) and Year": "Livingston, 2013",
    Confidence: "M",
    Timing: "T2",
    N: "1082",
    Estimate: "28.6",
    Lower: "-42.5",
    Upper: "99.8",
    Result: "28.6 [-42.5, 99.8]"
  },
  {
    "Author(s) and Year": "Sullivan, 1983",
    Confidence: "M",
    Timing: "T2-T3",
    N: "2411",
    Estimate: "-52.4",
    Lower: "-101.9",
    Upper: "-2.9",
    Result: "-52.4 [-101.9, -2.9]"
  },
  {
    "Author(s) and Year": "Parker, 1988",
    Confidence: "M",
    Timing: "T3",
    N: "856",
    Estimate: "-39.3",
    Lower: "-110.7",
    Upper: "32.1",
    Result: "-39.3 [-110.7, 32.1]"
  },
  {
    "Author(s) and Year": "Morgan, 1976",
    Confidence: "M",
    Timing: "T3",
    N: "1679",
    Estimate: "-47.3",
    Lower: "-155.6",
    Upper: "61",
    Result: "-47.3 [-155.6, 61]"
  },
  {
    "Author(s) and Year": "Perez, 2007",
    Confidence: "L",
    Timing: "T2-T3",
    N: "2095",
    Estimate: "-43.5",
    Lower: "-89.5",
    Upper: "2.6",
    Result: "-43.5 [-89.5, 2.6]"
  },
  {
    "Author(s) and Year": "Mathis, 1982",
    Confidence: "L",
    Timing: "T3",
    N: "593",
    Estimate: "-41.8",
    Lower: "-71.8",
    Upper: "-11.8",
    Result: "-41.8 [-71.8, -11.8]"
  },
  {
    "Author(s) and Year": "Parker, 2018",
    Confidence: "L",
    Timing: "B",
    N: "1320",
    Estimate: "-45.6",
    Lower: "-106.9",
    Upper: "15.7",
    Result: "-45.6 [-106.9, 15.7]"
  },
  {
    "Author(s) and Year": "Knox, 2020",
    Confidence: "L",
    Timing: "T1",
    N: "2080",
    Estimate: "22.9",
    Lower: "-89.5",
    Upper: "135.2",
    Result: "22.9 [-89.5, 135.2]"
  },
  {
    "Author(s) and Year": "Manning, 2017",
    Confidence: "L",
    Timing: "T2-T3",
    N: "2463",
    Estimate: "-133.4",
    Lower: "-349.9",
    Upper: "83.1",
    Result: "-133.4 [-349.9, 83.1]"
  },
  {
    "Author(s) and Year": "Jackson, 2018",
    Confidence: "L",
    Timing: "B",
    N: "1880",
    Estimate: "14",
    Lower: "-168.5",
    Upper: "196.5",
    Result: "14 [-168.5, 196.5]"
  }
], ft = {
  horizontal: !1,
  series: !1
}, gt = 4.23, At = 0, Ft = {
  type: Sa,
  debugSvg: ma,
  chartMessage: ha,
  title: ka,
  showTitle: Da,
  showDownloadMediaButton: fa,
  theme: ga,
  animate: Aa,
  fontSize: Fa,
  lineDatapointStyle: Na,
  lineDatapointColor: Ya,
  barHasBorder: ba,
  isLollipopChart: ya,
  lollipopShape: La,
  lollipopColorStyle: Ta,
  visualizationSubType: $a,
  barStyle: xa,
  roundingStyle: va,
  tipRounding: Ca,
  isResponsiveTicks: Ra,
  general: Ma,
  padding: Pa,
  suppressedData: Ba,
  yAxis: _a,
  boxplot: Va,
  topAxis: Ha,
  isLegendValue: za,
  barThickness: Oa,
  barHeight: Ia,
  barSpace: Ea,
  heights: Ua,
  xAxis: qa,
  table: Ka,
  orientation: Wa,
  color: Ga,
  columns: Qa,
  legend: ja,
  brush: Za,
  exclusions: Ja,
  palette: Xa,
  isPaletteReversed: et,
  twoColor: at,
  labels: tt,
  dataFormat: ot,
  confidenceKeys: nt,
  visual: it,
  useLogScale: st,
  filterBehavior: rt,
  highlightedBarValues: ct,
  series: lt,
  tooltips: ut,
  forestPlot: dt,
  area: pt,
  datasets: wt,
  visualizationType: St,
  data: mt,
  dataFileName: ht,
  dataFileSourceType: kt,
  formattedData: Dt,
  dataDescription: ft,
  validated: gt,
  dynamicMarginTop: At
}, Nt = [], Yt = "chart", bt = !1, yt = {
  noData: "No Data Available"
}, Lt = "", Tt = !0, $t = !1, xt = "theme-blue", vt = !1, Ct = "medium", Rt = "hover", Mt = "Same as Line", Pt = "false", Bt = !1, _t = "circle", Vt = "two-tone", Ht = "regular", zt = "", Ot = "standard", It = "top", Et = !1, Ut = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  hideNullValue: !0
}, qt = {
  left: 5,
  right: 5
}, Kt = [], Wt = {
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
  scalePadding: 10,
  tickRotation: 0,
  anchors: [],
  shoMissingDataLabel: !0,
  showMissingDataLine: !0,
  categories: [],
  dataKey: "Age-adjusted rate"
}, Gt = {
  plots: [],
  borders: "true",
  firstQuartilePercentage: 25,
  thirdQuartilePercentage: 75,
  boxWidthPercentage: 40,
  plotOutlierValues: !1,
  plotNonOutlierValues: !0,
  legend: {
    showHowToReadText: !1,
    howToReadText: ""
  },
  labels: {
    q1: "Lower Quartile",
    q2: "q2",
    q3: "Upper Quartile",
    q4: "q4",
    minimum: "Minimum",
    maximum: "Maximum",
    mean: "Mean",
    median: "Median",
    sd: "Standard Deviation",
    iqr: "Interquartile Range",
    total: "Total",
    outliers: "Outliers",
    values: "Values",
    lowerBounds: "Lower Bounds",
    upperBounds: "Upper Bounds"
  }
}, Qt = {
  hasLine: !1
}, jt = !1, Zt = "0.37", Jt = 25, Xt = 15, eo = {
  vertical: 300,
  horizontal: 750
}, ao = {
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
  axisPadding: 200,
  target: 0,
  maxTickRotation: 45,
  padding: 0,
  dataKey: "Race"
}, to = {
  label: "Data Table",
  expanded: !0,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  showDownloadLinkBelow: !0,
  indexLabel: "",
  download: !0,
  showVertical: !0,
  dateDisplayFormat: "",
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  show: !0
}, oo = "vertical", no = "pinkpurple", io = {}, so = {
  hide: !1,
  behavior: "isolate",
  axisAlign: !0,
  singleRow: !0,
  colorCode: "",
  reverseLabelOrder: !1,
  description: "",
  dynamicLegend: !1,
  dynamicLegendDefaultText: "Show All",
  dynamicLegendItemLimit: 5,
  dynamicLegendItemLimitMessage: "Dynamic Legend Item Limit Hit.",
  dynamicLegendChartMessage: "Select Options from the Legend",
  label: "",
  lineMode: !1,
  verticalSorted: !1,
  highlightOnHover: !1,
  hideSuppressedLabels: !1,
  hideSuppressionLink: !1,
  seriesHighlight: [],
  style: "circles",
  subStyle: "linear blocks",
  tickRotation: "",
  hideBorder: {
    side: !1,
    topBottom: !0
  }
}, ro = {
  height: 25,
  active: !1
}, co = {
  active: !1,
  keys: []
}, lo = "qualitative-bold", uo = !1, po = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, wo = !1, So = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, mo = {}, ho = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, ko = !1, Do = "Filter Change", fo = [], go = [], Ao = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, Fo = {
  startAt: 0,
  colors: {
    line: "",
    shape: ""
  },
  lineOfNoEffect: {
    show: !0
  },
  type: "",
  pooledResult: {
    diamondHeight: 5,
    column: ""
  },
  estimateField: "",
  estimateRadius: "",
  shape: "square",
  rowHeight: 20,
  description: {
    show: !0,
    text: "description",
    location: 0
  },
  result: {
    show: !0,
    text: "result",
    location: 100
  },
  radius: {
    min: 2,
    max: 10,
    scalingColumn: ""
  },
  regression: {
    lower: 0,
    upper: 0,
    estimateField: 0
  },
  leftWidthOffset: 0,
  rightWidthOffset: 0,
  showZeroLine: !1,
  leftLabel: "",
  rightLabel: ""
}, No = {
  isStacked: !1
}, Yo = {
  title: {
    defaultColor: "black"
  },
  iterations: 1,
  rxValue: 0.9,
  overallSize: {
    width: 900,
    height: 700
  },
  margin: {
    margin_y: 25,
    margin_x: 0
  },
  nodeSize: {
    nodeWidth: 26,
    nodeHeight: 40
  },
  nodePadding: 55,
  nodeFontColor: "black",
  nodeColor: {
    default: "#ff8500",
    inactive: "#808080"
  },
  linkColor: {
    default: "#ffc900",
    inactive: "#D3D3D3"
  },
  opacity: {
    nodeOpacityDefault: 1,
    nodeOpacityInactive: 0.1,
    LinkOpacityDefault: 1,
    LinkOpacityInactive: 0.1
  },
  storyNodeFontColor: "#006778",
  storyNodeText: [],
  nodeValueStyle: {
    textBefore: "(",
    textAfter: ")"
  },
  data: []
}, bo = {}, yo = "Pie", Lo = [
  {
    Race: "Hispanic or Latino",
    "Age-adjusted rate": "644.2"
  },
  {
    Race: "Non-Hispanic American Indian",
    "Age-adjusted rate": "636.1"
  },
  {
    Race: "Non-Hispanic Black",
    "Age-adjusted rate": "563.7"
  },
  {
    Race: "Non-Hispanic Asian or Pacific Islander",
    "Age-adjusted rate": "202.5"
  },
  {
    Race: "Non-Hispanic White",
    "Age-adjusted rate": "183.6"
  }
], To = "valid-data-chart.csv", $o = "file", xo = [
  {
    Race: "Hispanic or Latino",
    "Age-adjusted rate": "644.2"
  },
  {
    Race: "Non-Hispanic American Indian",
    "Age-adjusted rate": "636.1"
  },
  {
    Race: "Non-Hispanic Black",
    "Age-adjusted rate": "563.7"
  },
  {
    Race: "Non-Hispanic Asian or Pacific Islander",
    "Age-adjusted rate": "202.5"
  },
  {
    Race: "Non-Hispanic White",
    "Age-adjusted rate": "183.6"
  }
], vo = {
  horizontal: !1,
  series: !1
}, Co = "4.24.10", Ro = {
  annotations: Nt,
  type: Yt,
  debugSvg: bt,
  chartMessage: yt,
  title: Lt,
  showTitle: Tt,
  showDownloadMediaButton: $t,
  theme: xt,
  animate: vt,
  fontSize: Ct,
  lineDatapointStyle: Rt,
  lineDatapointColor: Mt,
  barHasBorder: Pt,
  isLollipopChart: Bt,
  lollipopShape: _t,
  lollipopColorStyle: Vt,
  visualizationSubType: Ht,
  barStyle: zt,
  roundingStyle: Ot,
  tipRounding: It,
  isResponsiveTicks: Et,
  general: Ut,
  padding: qt,
  preliminaryData: Kt,
  yAxis: Wt,
  boxplot: Gt,
  topAxis: Qt,
  isLegendValue: jt,
  barThickness: Zt,
  barHeight: Jt,
  barSpace: Xt,
  heights: eo,
  xAxis: ao,
  table: to,
  orientation: oo,
  color: no,
  columns: io,
  legend: so,
  brush: ro,
  exclusions: co,
  palette: lo,
  isPaletteReversed: uo,
  twoColor: po,
  labels: wo,
  dataFormat: So,
  confidenceKeys: mo,
  visual: ho,
  useLogScale: ko,
  filterBehavior: Do,
  highlightedBarValues: fo,
  series: go,
  tooltips: Ao,
  forestPlot: Fo,
  area: No,
  sankey: Yo,
  datasets: bo,
  visualizationType: yo,
  data: Lo,
  dataFileName: To,
  dataFileSourceType: $o,
  formattedData: xo,
  dataDescription: vo,
  version: Co
}, Mo = [], Po = "chart", Bo = !1, _o = {
  noData: "No Data Available"
}, Vo = "Example Box Plot", Ho = !0, zo = !1, Oo = "theme-blue", Io = !1, Eo = "medium", Uo = "hover", qo = "Same as Line", Ko = "false", Wo = !1, Go = "circle", Qo = "two-tone", jo = "regular", Zo = "", Jo = "standard", Xo = "top", en = !1, an = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  showZeroValueData: !0,
  hideNullValue: !0
}, tn = {
  left: 5,
  right: 5
}, on = [], nn = {
  hideAxis: !1,
  displayNumbersOnBar: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: 50,
  gridLines: !0,
  enablePadding: !1,
  min: "",
  max: "",
  labelColor: "#333",
  tickLabelColor: "#333",
  tickColor: "#333",
  rightHideAxis: !0,
  rightAxisSize: 50,
  rightLabel: "",
  rightLabelOffsetSize: 0,
  rightAxisLabelColor: "#333",
  rightAxisTickLabelColor: "#333",
  rightAxisTickColor: "#333",
  numTicks: "",
  axisPadding: 0,
  scalePadding: 10,
  tickRotation: 0,
  anchors: [],
  shoMissingDataLabel: !0,
  showMissingDataLine: !0,
  categories: [],
  dataKey: "value",
  isLegendValue: !1,
  label: "Observations"
}, sn = {
  plots: [
    {
      columnCategory: "category one",
      columnMax: 24,
      columnThirdQuartile: "24",
      columnMedian: "22",
      columnFirstQuartile: "20",
      columnMin: 19,
      columnCount: 4,
      columnSd: "2",
      columnMean: "22",
      columnIqr: "4",
      columnLowerBounds: 19,
      columnUpperBounds: 24,
      columnOutliers: [],
      values: [
        19,
        21,
        23,
        24
      ],
      keyValues: {
        Value: [
          "21",
          "19",
          "23",
          "24"
        ],
        Price: [
          "100",
          "105",
          "110",
          "115"
        ]
      }
    },
    {
      columnCategory: "category two",
      columnMax: 19,
      columnThirdQuartile: "19",
      columnMedian: "15",
      columnFirstQuartile: "11",
      columnMin: 10,
      columnCount: 4,
      columnSd: "4",
      columnMean: "15",
      columnIqr: "8",
      columnLowerBounds: 10,
      columnUpperBounds: 19,
      columnOutliers: [],
      values: [
        10,
        12,
        18,
        19
      ],
      keyValues: {
        Value: [
          "18",
          "10",
          "12",
          "19"
        ],
        Price: [
          "120",
          "125",
          "130",
          "135"
        ]
      }
    },
    {
      columnCategory: "category three",
      columnMax: 45.25,
      columnThirdQuartile: "41",
      columnMedian: "36",
      columnFirstQuartile: "33",
      columnMin: 30,
      columnCount: 4,
      columnSd: "7",
      columnMean: "37",
      columnIqr: "9",
      columnLowerBounds: 30,
      columnUpperBounds: 45.25,
      columnOutliers: [],
      values: [
        30,
        35,
        36,
        46
      ],
      keyValues: {
        Value: [
          "30",
          "35",
          "36",
          "46"
        ],
        Price: [
          "140",
          "145",
          "150",
          "155"
        ]
      }
    },
    {
      columnCategory: "category four",
      columnMax: 57.5,
      columnThirdQuartile: "50",
      columnMedian: "43",
      columnFirstQuartile: "35",
      columnMin: 21,
      columnCount: 10,
      columnSd: "20",
      columnMean: "48",
      columnIqr: "15",
      columnLowerBounds: 21,
      columnUpperBounds: 57.5,
      columnOutliers: [
        82,
        85
      ],
      values: [
        21,
        30,
        40,
        41,
        42,
        43,
        50,
        50,
        82,
        85
      ],
      keyValues: {
        Value: [
          "30",
          "40",
          "50",
          "50",
          "85",
          "82",
          "43",
          "42",
          "41",
          "21"
        ],
        Price: [
          "160",
          "165",
          "170",
          "175",
          "180",
          "185",
          "190",
          "195",
          "200",
          "205"
        ]
      }
    }
  ],
  borders: "true",
  plotOutlierValues: !1,
  plotNonOutlierValues: !0,
  labels: {
    q1: "Lower Quartile",
    q2: "q2",
    q3: "Upper Quartile",
    q4: "q4",
    minimum: "Minimum",
    maximum: "Maximum",
    mean: "Mean",
    median: "Median",
    sd: "Standard Deviation",
    iqr: "Interquartile Range",
    count: "Count",
    outliers: "Outliers",
    values: "Values",
    lowerBounds: "Lower Bounds",
    upperBounds: "Upper Bounds"
  },
  categories: [
    "category one",
    "category two",
    "category three",
    "category four"
  ],
  tableData: [
    {
      columnCategory: "category one",
      columnMax: 24,
      columnThirdQuartile: "24",
      columnMedian: "22",
      columnFirstQuartile: "20",
      columnMin: 19,
      columnCount: 4,
      columnSd: "2",
      columnMean: "22",
      columnOutliers: [],
      values: [
        19,
        21,
        23,
        24
      ],
      keyValues: {
        Value: [
          "21",
          "19",
          "23",
          "24"
        ],
        Price: [
          "100",
          "105",
          "110",
          "115"
        ]
      }
    },
    {
      columnCategory: "category two",
      columnMax: 19,
      columnThirdQuartile: "19",
      columnMedian: "15",
      columnFirstQuartile: "11",
      columnMin: 10,
      columnCount: 4,
      columnSd: "4",
      columnMean: "15",
      columnOutliers: [],
      values: [
        10,
        12,
        18,
        19
      ],
      keyValues: {
        Value: [
          "18",
          "10",
          "12",
          "19"
        ],
        Price: [
          "120",
          "125",
          "130",
          "135"
        ]
      }
    },
    {
      columnCategory: "category three",
      columnMax: 45.25,
      columnThirdQuartile: "41",
      columnMedian: "36",
      columnFirstQuartile: "33",
      columnMin: 30,
      columnCount: 4,
      columnSd: "7",
      columnMean: "37",
      columnOutliers: [],
      values: [
        30,
        35,
        36,
        46
      ],
      keyValues: {
        Value: [
          "30",
          "35",
          "36",
          "46"
        ],
        Price: [
          "140",
          "145",
          "150",
          "155"
        ]
      }
    },
    {
      columnCategory: "category four",
      columnMax: 57.5,
      columnThirdQuartile: "50",
      columnMedian: "43",
      columnFirstQuartile: "35",
      columnMin: 21,
      columnCount: 10,
      columnSd: "20",
      columnMean: "48",
      columnOutliers: [
        82,
        85
      ],
      values: [
        21,
        30,
        40,
        41,
        42,
        43,
        50,
        50,
        82,
        85
      ],
      keyValues: {
        Value: [
          "30",
          "40",
          "50",
          "50",
          "85",
          "82",
          "43",
          "42",
          "41",
          "21"
        ],
        Price: [
          "160",
          "165",
          "170",
          "175",
          "180",
          "185",
          "190",
          "195",
          "200",
          "205"
        ]
      }
    }
  ]
}, rn = {
  hasLine: !1
}, cn = !1, ln = "0.99", un = 25, dn = 15, pn = {
  vertical: 300,
  horizontal: 750
}, wn = {
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
  labelOffset: 0,
  axisPadding: 200,
  target: 0,
  maxTickRotation: 0,
  padding: 5,
  showYearsOnce: !1,
  isLegendValue: !1,
  dataKey: "Group_Category",
  label: "Groups",
  axisBBox: 56.06999969482422,
  tickWidthMax: 116
}, Sn = {
  label: "Data Table",
  expanded: !0,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  showDownloadLinkBelow: !0,
  indexLabel: "",
  download: !0,
  showVertical: !1,
  dateDisplayFormat: "",
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  show: !0
}, mn = "vertical", hn = "pinkpurple", kn = {}, Dn = {
  hide: !1,
  behavior: "isolate",
  axisAlign: !0,
  singleRow: !1,
  colorCode: "",
  reverseLabelOrder: !1,
  description: "",
  dynamicLegend: !1,
  dynamicLegendDefaultText: "Show All",
  dynamicLegendItemLimit: 5,
  dynamicLegendItemLimitMessage: "Dynamic Legend Item Limit Hit.",
  dynamicLegendChartMessage: "Select Options from the Legend",
  label: "",
  lineMode: !1,
  verticalSorted: !1,
  highlightOnHover: !1,
  hideSuppressedLabels: !1,
  hideSuppressionLink: !1,
  seriesHighlight: [],
  style: "circles",
  subStyle: "linear blocks",
  tickRotation: "",
  hideBorder: {
    side: !1,
    topBottom: !0
  },
  position: "right"
}, fn = {
  height: 25,
  active: !1
}, gn = {
  active: !1,
  keys: []
}, An = "qualitative1", Fn = !1, Nn = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, Yn = !1, bn = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1,
  useFormat: !1
}, yn = {}, Ln = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, Tn = !1, $n = "Filter Change", xn = [], vn = [
  {
    dataKey: "Value",
    type: "Bar",
    tooltip: !0,
    axis: "Left"
  },
  {
    dataKey: "Price",
    type: "Bar",
    tooltip: !0,
    axis: "Left"
  }
], Cn = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, Rn = {
  startAt: 0,
  colors: {
    line: "",
    shape: ""
  },
  lineOfNoEffect: {
    show: !0
  },
  type: "",
  pooledResult: {
    diamondHeight: 5,
    column: ""
  },
  estimateField: "",
  estimateRadius: "",
  shape: "square",
  rowHeight: 20,
  description: {
    show: !0,
    text: "description",
    location: 0
  },
  result: {
    show: !0,
    text: "result",
    location: 100
  },
  radius: {
    min: 2,
    max: 10,
    scalingColumn: ""
  },
  regression: {
    lower: 0,
    upper: 0,
    estimateField: 0
  },
  leftWidthOffset: 0,
  rightWidthOffset: 0,
  showZeroLine: !1,
  leftLabel: "",
  rightLabel: ""
}, Mn = {
  isStacked: !1
}, Pn = {
  title: {
    defaultColor: "black"
  },
  iterations: 1,
  rxValue: 0.9,
  overallSize: {
    width: 900,
    height: 700
  },
  margin: {
    margin_y: 25,
    margin_x: 0
  },
  nodeSize: {
    nodeWidth: 26,
    nodeHeight: 40
  },
  nodePadding: 55,
  nodeFontColor: "black",
  nodeColor: {
    default: "#ff8500",
    inactive: "#808080"
  },
  linkColor: {
    default: "#ffc900",
    inactive: "#D3D3D3"
  },
  opacity: {
    nodeOpacityDefault: 1,
    nodeOpacityInactive: 0.1,
    LinkOpacityDefault: 1,
    LinkOpacityInactive: 0.1
  },
  storyNodeFontColor: "#006778",
  storyNodeText: [],
  nodeValueStyle: {
    textBefore: "(",
    textAfter: ")"
  },
  data: []
}, Bn = 300, _n = "Box Plot", Vn = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", Hn = {
  horizontal: !1,
  series: !1,
  singleRow: !0,
  xKey: "category one",
  valueKey: "value"
}, zn = [
  {
    Group_Category: "category one",
    Value: "21",
    Price: "100",
    Month: "January",
    Radius: "10"
  },
  {
    Group_Category: "category one",
    Value: "19",
    Price: "105",
    Month: "January",
    Radius: "12"
  },
  {
    Group_Category: "category one",
    Value: "23",
    Price: "110",
    Month: "February",
    Radius: "7"
  },
  {
    Group_Category: "category one",
    Value: "24",
    Price: "115",
    Month: "February",
    Radius: "5"
  },
  {
    Group_Category: "category two",
    Value: "18",
    Price: "120",
    Month: "March",
    Radius: "9"
  },
  {
    Group_Category: "category two",
    Value: "10",
    Price: "125",
    Month: "March",
    Radius: "14"
  },
  {
    Group_Category: "category two",
    Value: "12",
    Price: "130",
    Month: "April",
    Radius: "11"
  },
  {
    Group_Category: "category two",
    Value: "19",
    Price: "135",
    Month: "April",
    Radius: "6"
  },
  {
    Group_Category: "category three",
    Value: "30",
    Price: "140",
    Month: "May",
    Radius: "8"
  },
  {
    Group_Category: "category three",
    Value: "35",
    Price: "145",
    Month: "May",
    Radius: "10"
  },
  {
    Group_Category: "category three",
    Value: "36",
    Price: "150",
    Month: "June",
    Radius: "12"
  },
  {
    Group_Category: "category three",
    Value: "46",
    Price: "155",
    Month: "June",
    Radius: "13"
  },
  {
    Group_Category: "category four",
    Value: "30",
    Price: "160",
    Month: "July",
    Radius: "5"
  },
  {
    Group_Category: "category four",
    Value: "40",
    Price: "165",
    Month: "July",
    Radius: "9"
  },
  {
    Group_Category: "category four",
    Value: "50",
    Price: "170",
    Month: "August",
    Radius: "14"
  },
  {
    Group_Category: "category four",
    Value: "50",
    Price: "175",
    Month: "August",
    Radius: "15"
  },
  {
    Group_Category: "category four",
    Value: "85",
    Price: "180",
    Month: "September",
    Radius: "7"
  },
  {
    Group_Category: "category four",
    Value: "82",
    Price: "185",
    Month: "September",
    Radius: "8"
  },
  {
    Group_Category: "category four",
    Value: "43",
    Price: "190",
    Month: "October",
    Radius: "10"
  },
  {
    Group_Category: "category four",
    Value: "42",
    Price: "195",
    Month: "October",
    Radius: "12"
  },
  {
    Group_Category: "category four",
    Value: "41",
    Price: "200",
    Month: "November",
    Radius: "11"
  },
  {
    Group_Category: "category four",
    Value: "21",
    Price: "205",
    Month: "November",
    Radius: "9"
  }
], On = "4.24.10", In = 0, En = {
  annotations: Mo,
  type: Po,
  debugSvg: Bo,
  chartMessage: _o,
  title: Vo,
  showTitle: Ho,
  showDownloadMediaButton: zo,
  theme: Oo,
  animate: Io,
  fontSize: Eo,
  lineDatapointStyle: Uo,
  lineDatapointColor: qo,
  barHasBorder: Ko,
  isLollipopChart: Wo,
  lollipopShape: Go,
  lollipopColorStyle: Qo,
  visualizationSubType: jo,
  barStyle: Zo,
  roundingStyle: Jo,
  tipRounding: Xo,
  isResponsiveTicks: en,
  general: an,
  padding: tn,
  preliminaryData: on,
  yAxis: nn,
  boxplot: sn,
  topAxis: rn,
  isLegendValue: cn,
  barThickness: ln,
  barHeight: un,
  barSpace: dn,
  heights: pn,
  xAxis: wn,
  table: Sn,
  orientation: mn,
  color: hn,
  columns: kn,
  legend: Dn,
  brush: fn,
  exclusions: gn,
  palette: An,
  isPaletteReversed: Fn,
  twoColor: Nn,
  labels: Yn,
  dataFormat: bn,
  confidenceKeys: yn,
  visual: Ln,
  useLogScale: Tn,
  filterBehavior: $n,
  highlightedBarValues: xn,
  series: vn,
  tooltips: Cn,
  forestPlot: Rn,
  area: Mn,
  sankey: Pn,
  height: Bn,
  visualizationType: _n,
  description: Vn,
  dataDescription: Hn,
  data: zn,
  version: On,
  dynamicMarginTop: In
}, Un = [], qn = "chart", Kn = !1, Wn = {
  noData: "No Data Available"
}, Gn = "Example Area Chart - City Temperature Data", Qn = !0, jn = !1, Zn = "theme-blue", Jn = !1, Xn = "medium", ei = "hover", ai = "Same as Line", ti = "false", oi = !1, ni = "circle", ii = "two-tone", si = "stacked", ri = "", ci = "standard", li = "top", ui = !1, di = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  showZeroValueData: !0,
  hideNullValue: !0
}, pi = {
  left: 5,
  right: 5
}, wi = [], Si = {
  hideAxis: !1,
  displayNumbersOnBar: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: "150",
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
  scalePadding: 10,
  tickRotation: 0,
  anchors: [],
  shoMissingDataLabel: !0,
  showMissingDataLine: !0,
  categories: [],
  isLegendValue: !1,
  label: "Y Axis - Temperature"
}, mi = {
  plots: [],
  borders: "true",
  plotOutlierValues: !1,
  plotNonOutlierValues: !0,
  labels: {
    q1: "Lower Quartile",
    q2: "q2",
    q3: "Upper Quartile",
    q4: "q4",
    minimum: "Minimum",
    maximum: "Maximum",
    mean: "Mean",
    median: "Median",
    sd: "Standard Deviation",
    iqr: "Interquartile Range",
    total: "Total",
    outliers: "Outliers",
    values: "Values",
    lowerBounds: "Lower Bounds",
    upperBounds: "Upper Bounds"
  },
  firstQuartilePercentage: 25,
  thirdQuartilePercentage: 75,
  boxWidthPercentage: 40,
  legend: {
    showHowToReadText: !1,
    howToReadText: ""
  }
}, hi = {
  hasLine: !1
}, ki = !1, Di = 0.35, fi = 25, gi = 20, Ai = {
  vertical: 300,
  horizontal: 750
}, Fi = {
  sortDates: !1,
  anchors: [],
  type: "date-time",
  showTargetLabel: !0,
  targetLabel: "Target",
  hideAxis: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: "50",
  tickRotation: 30,
  min: "",
  max: "",
  labelColor: "#333",
  tickLabelColor: "#333",
  tickColor: "#333",
  numTicks: "6",
  labelOffset: 0,
  axisPadding: 0,
  target: 0,
  maxTickRotation: 0,
  padding: "0",
  showYearsOnce: !1,
  sortByRecentDate: !1,
  isLegendValue: !1,
  dataKey: "Date",
  label: "X Axis Example Label",
  dateParseFormat: "%Y-%m-%d",
  dateDisplayFormat: "%m/%d/%Y",
  axisBBox: 95.58972930908203,
  tickWidthMax: 91
}, Ni = {
  label: "Data Type by Date",
  expanded: !1,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !0,
  showDataTableLink: !0,
  showDownloadLinkBelow: !0,
  indexLabel: "",
  download: !0,
  showVertical: !1,
  dateDisplayFormat: "",
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  show: !0
}, Yi = "vertical", bi = "pinkpurple", yi = {}, Li = {
  hide: !1,
  behavior: "isolate",
  axisAlign: !0,
  singleRow: !1,
  colorCode: "",
  reverseLabelOrder: !1,
  description: "",
  dynamicLegend: !1,
  dynamicLegendDefaultText: "Show All",
  dynamicLegendItemLimit: 5,
  dynamicLegendItemLimitMessage: "Dynamic Legend Item Limit Hit.",
  dynamicLegendChartMessage: "Select Options from the Legend",
  label: "Type of Data",
  lineMode: !1,
  verticalSorted: !1,
  highlightOnHover: !1,
  hideSuppressedLabels: !1,
  hideSuppressionLink: !1,
  seriesHighlight: [],
  style: "circles",
  subStyle: "linear blocks",
  tickRotation: "",
  hideBorder: {
    side: !1,
    topBottom: !0
  },
  position: "right"
}, Ti = {
  height: 25,
  active: !1,
  pattern_id: "brush_pattern",
  accent_color: "#ddd"
}, $i = {
  active: !0,
  keys: []
}, xi = "qualitative-bold", vi = !1, Ci = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, Ri = !1, Mi = {
  commas: !0,
  prefix: "",
  suffix: "",
  abbreviated: !0,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1,
  useFormat: !0
}, Pi = {}, Bi = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, _i = !1, Vi = "dropdown", Hi = [], zi = [
  {
    dataKey: "Austin",
    type: "Area Chart",
    tooltip: !0,
    axis: "Left"
  },
  {
    dataKey: "San Francisco",
    type: "Area Chart",
    axis: "Left",
    tooltip: !0
  }
], Oi = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, Ii = {
  startAt: 0,
  colors: {
    line: "",
    shape: ""
  },
  lineOfNoEffect: {
    show: !0
  },
  type: "",
  pooledResult: {
    diamondHeight: 5,
    column: ""
  },
  estimateField: "",
  estimateRadius: "",
  shape: "",
  rowHeight: 20,
  description: {
    show: !0,
    text: "description",
    location: 0
  },
  result: {
    show: !0,
    text: "result",
    location: 100
  },
  radius: {
    min: 1,
    max: 8,
    scalingColumn: ""
  },
  regression: {
    lower: 0,
    upper: 0,
    estimateField: 0
  },
  leftWidthOffset: 0,
  rightWidthOffset: 0,
  showZeroLine: !1,
  leftLabel: "",
  rightLabel: "",
  width: "auto",
  lowerCiField: "",
  upperCiField: ""
}, Ei = {
  isStacked: !0
}, Ui = {
  title: {
    defaultColor: "black"
  },
  iterations: 1,
  rxValue: 0.9,
  overallSize: {
    width: 900,
    height: 700
  },
  margin: {
    margin_y: 25,
    margin_x: 0
  },
  nodeSize: {
    nodeWidth: 26,
    nodeHeight: 40
  },
  nodePadding: 55,
  nodeFontColor: "black",
  nodeColor: {
    default: "#ff8500",
    inactive: "#808080"
  },
  linkColor: {
    default: "#ffc900",
    inactive: "#D3D3D3"
  },
  opacity: {
    nodeOpacityDefault: 1,
    nodeOpacityInactive: 0.1,
    LinkOpacityDefault: 1,
    LinkOpacityInactive: 0.1
  },
  storyNodeFontColor: "#006778",
  storyNodeText: [],
  nodeValueStyle: {
    textBefore: "(",
    textAfter: ")"
  },
  data: []
}, qi = !1, Ki = {
  horizontal: !1,
  series: !1
}, Wi = "valid-area-chart.json", Gi = "file", Qi = [
  {
    Date: "2011-10-01",
    "New York": "63.4",
    "San Francisco": "62.7",
    Austin: "72.2"
  },
  {
    Date: "2011-10-02",
    "New York": "58.0",
    "San Francisco": "59.9",
    Austin: "67.7"
  },
  {
    Date: "2011-10-03",
    "New York": "53.3",
    "San Francisco": "59.1",
    Austin: "69.4"
  },
  {
    Date: "2011-10-04",
    "New York": "55.7",
    "San Francisco": "58.8",
    Austin: "68.0"
  },
  {
    Date: "2011-10-05",
    "New York": "64.2",
    "San Francisco": "58.7",
    Austin: "72.4"
  },
  {
    Date: "2011-10-06",
    "New York": "58.8",
    "San Francisco": "57.0",
    Austin: "77.0"
  },
  {
    Date: "2011-10-07",
    "New York": "57.9",
    "San Francisco": "56.7",
    Austin: "82.3"
  },
  {
    Date: "2011-10-08",
    "New York": "61.8",
    "San Francisco": "56.8",
    Austin: "78.9"
  },
  {
    Date: "2011-10-09",
    "New York": "69.3",
    "San Francisco": "56.7",
    Austin: "68.8"
  },
  {
    Date: "2011-10-10",
    "New York": "71.2",
    "San Francisco": "60.1",
    Austin: "68.7"
  },
  {
    Date: "2011-10-11",
    "New York": "68.7",
    "San Francisco": "61.1",
    Austin: "70.3"
  },
  {
    Date: "2011-10-12",
    "New York": "61.8",
    "San Francisco": "61.5",
    Austin: "75.3"
  },
  {
    Date: "2011-10-13",
    "New York": "63.0",
    "San Francisco": "64.3",
    Austin: "76.6"
  },
  {
    Date: "2011-10-14",
    "New York": "66.9",
    "San Francisco": "67.1",
    Austin: "66.6"
  },
  {
    Date: "2011-10-15",
    "New York": "61.7",
    "San Francisco": "64.6",
    Austin: "68.0"
  },
  {
    Date: "2011-10-16",
    "New York": "61.8",
    "San Francisco": "61.6",
    Austin: "70.6"
  },
  {
    Date: "2011-10-17",
    "New York": "62.8",
    "San Francisco": "61.1",
    Austin: "71.1"
  },
  {
    Date: "2011-10-18",
    "New York": "60.8",
    "San Francisco": "59.2",
    Austin: "70.0"
  },
  {
    Date: "2011-10-19",
    "New York": "62.1",
    "San Francisco": "58.9",
    Austin: "61.6"
  },
  {
    Date: "2011-10-20",
    "New York": "65.1",
    "San Francisco": "57.2",
    Austin: "57.4"
  },
  {
    Date: "2011-10-21",
    "New York": "55.6",
    "San Francisco": "56.4",
    Austin: "64.3"
  },
  {
    Date: "2011-10-22",
    "New York": "54.4",
    "San Francisco": "60.7",
    Austin: "72.4"
  },
  {
    Date: "2011-10-23",
    "New York": "54.4",
    "San Francisco": "65.1",
    Austin: "72.4"
  },
  {
    Date: "2011-10-24",
    "New York": "54.8",
    "San Francisco": "60.9",
    Austin: "72.5"
  },
  {
    Date: "2011-10-25",
    "New York": "57.9",
    "San Francisco": "56.1",
    Austin: "72.7"
  },
  {
    Date: "2011-10-26",
    "New York": "54.6",
    "San Francisco": "54.6",
    Austin: "73.4"
  },
  {
    Date: "2011-10-27",
    "New York": "54.4",
    "San Francisco": "56.1",
    Austin: "70.7"
  },
  {
    Date: "2011-10-28",
    "New York": "42.5",
    "San Francisco": "58.1",
    Austin: "56.8"
  },
  {
    Date: "2011-10-29",
    "New York": "40.9",
    "San Francisco": "57.5",
    Austin: "51.0"
  },
  {
    Date: "2011-10-30",
    "New York": "38.6",
    "San Francisco": "57.7",
    Austin: "54.9"
  },
  {
    Date: "2011-10-31",
    "New York": "44.2",
    "San Francisco": "55.1",
    Austin: "58.8"
  },
  {
    Date: "2011-11-01",
    "New York": "49.6",
    "San Francisco": "57.9",
    Austin: "62.6"
  },
  {
    Date: "2011-11-02",
    "New York": "47.2",
    "San Francisco": "64.6",
    Austin: "71.0"
  },
  {
    Date: "2011-11-03",
    "New York": "50.1",
    "San Francisco": "56.2",
    Austin: "58.4"
  },
  {
    Date: "2011-11-04",
    "New York": "50.1",
    "San Francisco": "50.5",
    Austin: "45.1"
  },
  {
    Date: "2011-11-05",
    "New York": "43.5",
    "San Francisco": "51.3",
    Austin: "52.2"
  },
  {
    Date: "2011-11-06",
    "New York": "43.8",
    "San Francisco": "52.6",
    Austin: "73.0"
  },
  {
    Date: "2011-11-07",
    "New York": "48.9",
    "San Francisco": "51.4",
    Austin: "75.4"
  },
  {
    Date: "2011-11-08",
    "New York": "55.5",
    "San Francisco": "50.6",
    Austin: "72.1"
  },
  {
    Date: "2011-11-09",
    "New York": "53.7",
    "San Francisco": "54.6",
    Austin: "56.6"
  },
  {
    Date: "2011-11-10",
    "New York": "57.7",
    "San Francisco": "55.6",
    Austin: "55.4"
  },
  {
    Date: "2011-11-11",
    "New York": "48.5",
    "San Francisco": "53.9",
    Austin: "46.7"
  },
  {
    Date: "2011-11-12",
    "New York": "46.8",
    "San Francisco": "54.0",
    Austin: "62.0"
  },
  {
    Date: "2011-11-13",
    "New York": "51.1",
    "San Francisco": "53.8",
    Austin: "71.6"
  },
  {
    Date: "2011-11-14",
    "New York": "56.8",
    "San Francisco": "53.5",
    Austin: "75.5"
  },
  {
    Date: "2011-11-15",
    "New York": "59.7",
    "San Francisco": "53.4",
    Austin: "72.1"
  },
  {
    Date: "2011-11-16",
    "New York": "56.5",
    "San Francisco": "52.2",
    Austin: "65.7"
  },
  {
    Date: "2011-11-17",
    "New York": "49.6",
    "San Francisco": "52.7",
    Austin: "56.8"
  },
  {
    Date: "2011-11-18",
    "New York": "41.5",
    "San Francisco": "53.1",
    Austin: "49.9"
  },
  {
    Date: "2011-11-19",
    "New York": "44.3",
    "San Francisco": "49.0",
    Austin: "71.7"
  },
  {
    Date: "2011-11-20",
    "New York": "54.0",
    "San Francisco": "50.4",
    Austin: "77.7"
  },
  {
    Date: "2011-11-21",
    "New York": "54.1",
    "San Francisco": "51.1",
    Austin: "76.4"
  },
  {
    Date: "2011-11-22",
    "New York": "49.4",
    "San Francisco": "52.3",
    Austin: "68.8"
  },
  {
    Date: "2011-11-23",
    "New York": "50.0",
    "San Francisco": "54.6",
    Austin: "57.0"
  },
  {
    Date: "2011-11-24",
    "New York": "44.0",
    "San Francisco": "55.1",
    Austin: "55.5"
  },
  {
    Date: "2011-11-25",
    "New York": "50.3",
    "San Francisco": "51.5",
    Austin: "61.6"
  },
  {
    Date: "2011-11-26",
    "New York": "52.1",
    "San Francisco": "53.6",
    Austin: "64.1"
  },
  {
    Date: "2011-11-27",
    "New York": "49.6",
    "San Francisco": "52.3",
    Austin: "51.1"
  },
  {
    Date: "2011-11-28",
    "New York": "57.2",
    "San Francisco": "51.0",
    Austin: "43.0"
  },
  {
    Date: "2011-11-29",
    "New York": "59.1",
    "San Francisco": "49.5",
    Austin: "46.4"
  },
  {
    Date: "2011-11-30",
    "New York": "50.6",
    "San Francisco": "49.8",
    Austin: "48.0"
  },
  {
    Date: "2011-12-01",
    "New York": "44.3",
    "San Francisco": "60.4",
    Austin: "48.1"
  },
  {
    Date: "2011-12-02",
    "New York": "43.9",
    "San Francisco": "62.2",
    Austin: "60.6"
  },
  {
    Date: "2011-12-03",
    "New York": "42.1",
    "San Francisco": "58.3",
    Austin: "62.6"
  },
  {
    Date: "2011-12-04",
    "New York": "43.9",
    "San Francisco": "52.7",
    Austin: "57.1"
  },
  {
    Date: "2011-12-05",
    "New York": "50.2",
    "San Francisco": "51.5",
    Austin: "44.2"
  },
  {
    Date: "2011-12-06",
    "New York": "54.2",
    "San Francisco": "49.9",
    Austin: "37.4"
  },
  {
    Date: "2011-12-07",
    "New York": "54.6",
    "San Francisco": "48.6",
    Austin: "35.0"
  },
  {
    Date: "2011-12-08",
    "New York": "43.4",
    "San Francisco": "46.4",
    Austin: "37.0"
  },
  {
    Date: "2011-12-09",
    "New York": "42.2",
    "San Francisco": "49.8",
    Austin: "45.4"
  },
  {
    Date: "2011-12-10",
    "New York": "45.0",
    "San Francisco": "52.1",
    Austin: "50.7"
  },
  {
    Date: "2011-12-11",
    "New York": "33.8",
    "San Francisco": "48.8",
    Austin: "48.6"
  },
  {
    Date: "2011-12-12",
    "New York": "36.8",
    "San Francisco": "47.4",
    Austin: "52.2"
  },
  {
    Date: "2011-12-13",
    "New York": "38.6",
    "San Francisco": "47.2",
    Austin: "60.8"
  },
  {
    Date: "2011-12-14",
    "New York": "41.9",
    "San Francisco": "46.1",
    Austin: "70.0"
  },
  {
    Date: "2011-12-15",
    "New York": "49.6",
    "San Francisco": "48.8",
    Austin: "64.2"
  },
  {
    Date: "2011-12-16",
    "New York": "50.2",
    "San Francisco": "47.9",
    Austin: "50.9"
  },
  {
    Date: "2011-12-17",
    "New York": "40.6",
    "San Francisco": "49.8",
    Austin: "51.6"
  },
  {
    Date: "2011-12-18",
    "New York": "29.1",
    "San Francisco": "49.1",
    Austin: "55.2"
  },
  {
    Date: "2011-12-19",
    "New York": "33.7",
    "San Francisco": "48.3",
    Austin: "62.1"
  },
  {
    Date: "2011-12-20",
    "New York": "45.8",
    "San Francisco": "49.3",
    Austin: "56.3"
  },
  {
    Date: "2011-12-21",
    "New York": "47.4",
    "San Francisco": "48.4",
    Austin: "47.2"
  },
  {
    Date: "2011-12-22",
    "New York": "54.4",
    "San Francisco": "53.3",
    Austin: "52.3"
  },
  {
    Date: "2011-12-23",
    "New York": "47.8",
    "San Francisco": "47.5",
    Austin: "45.2"
  },
  {
    Date: "2011-12-24",
    "New York": "34.9",
    "San Francisco": "47.9",
    Austin: "43.6"
  },
  {
    Date: "2011-12-25",
    "New York": "35.9",
    "San Francisco": "48.9",
    Austin: "42.9"
  },
  {
    Date: "2011-12-26",
    "New York": "43.6",
    "San Francisco": "45.9",
    Austin: "48.2"
  },
  {
    Date: "2011-12-27",
    "New York": "42.9",
    "San Francisco": "47.2",
    Austin: "45.4"
  },
  {
    Date: "2011-12-28",
    "New York": "46.2",
    "San Francisco": "48.9",
    Austin: "44.2"
  },
  {
    Date: "2011-12-29",
    "New York": "30.8",
    "San Francisco": "50.9",
    Austin: "50.4"
  },
  {
    Date: "2011-12-30",
    "New York": "40.8",
    "San Francisco": "52.9",
    Austin: "52.4"
  },
  {
    Date: "2011-12-31",
    "New York": "49.8",
    "San Francisco": "50.1",
    Austin: "53.5"
  },
  {
    Date: "2012-01-01",
    "New York": "46.3",
    "San Francisco": "53.9",
    Austin: "55.9"
  },
  {
    Date: "2012-01-02",
    "New York": "43.2",
    "San Francisco": "53.1",
    Austin: "48.2"
  },
  {
    Date: "2012-01-03",
    "New York": "30.3",
    "San Francisco": "49.7",
    Austin: "41.0"
  },
  {
    Date: "2012-01-04",
    "New York": "19.2",
    "San Francisco": "52.7",
    Austin: "48.9"
  },
  {
    Date: "2012-01-05",
    "New York": "32.1",
    "San Francisco": "52.6",
    Austin: "54.8"
  },
  {
    Date: "2012-01-06",
    "New York": "41.2",
    "San Francisco": "49.0",
    Austin: "61.2"
  },
  {
    Date: "2012-01-07",
    "New York": "47.0",
    "San Francisco": "51.0",
    Austin: "59.7"
  },
  {
    Date: "2012-01-08",
    "New York": "46.0",
    "San Francisco": "56.8",
    Austin: "52.5"
  },
  {
    Date: "2012-01-09",
    "New York": "34.7",
    "San Francisco": "52.3",
    Austin: "54.0"
  },
  {
    Date: "2012-01-10",
    "New York": "39.4",
    "San Francisco": "51.6",
    Austin: "47.7"
  },
  {
    Date: "2012-01-11",
    "New York": "40.4",
    "San Francisco": "49.8",
    Austin: "49.2"
  },
  {
    Date: "2012-01-12",
    "New York": "45.4",
    "San Francisco": "51.9",
    Austin: "48.4"
  },
  {
    Date: "2012-01-13",
    "New York": "40.7",
    "San Francisco": "53.7",
    Austin: "40.2"
  },
  {
    Date: "2012-01-14",
    "New York": "30.4",
    "San Francisco": "52.9",
    Austin: "43.9"
  },
  {
    Date: "2012-01-15",
    "New York": "23.9",
    "San Francisco": "49.7",
    Austin: "45.2"
  },
  {
    Date: "2012-01-16",
    "New York": "22.6",
    "San Francisco": "45.3",
    Austin: "65.0"
  },
  {
    Date: "2012-01-17",
    "New York": "39.8",
    "San Francisco": "43.6",
    Austin: "68.2"
  },
  {
    Date: "2012-01-18",
    "New York": "43.2",
    "San Francisco": "45.0",
    Austin: "47.5"
  },
  {
    Date: "2012-01-19",
    "New York": "26.3",
    "San Francisco": "47.3",
    Austin: "57.1"
  },
  {
    Date: "2012-01-20",
    "New York": "32.8",
    "San Francisco": "51.4",
    Austin: "61.9"
  },
  {
    Date: "2012-01-21",
    "New York": "27.4",
    "San Francisco": "53.7",
    Austin: "54.6"
  },
  {
    Date: "2012-01-22",
    "New York": "25.0",
    "San Francisco": "48.3",
    Austin: "56.7"
  },
  {
    Date: "2012-01-23",
    "New York": "39.4",
    "San Francisco": "52.9",
    Austin: "54.4"
  },
  {
    Date: "2012-01-24",
    "New York": "48.7",
    "San Francisco": "49.1",
    Austin: "52.7"
  },
  {
    Date: "2012-01-25",
    "New York": "43.0",
    "San Francisco": "52.1",
    Austin: "61.8"
  },
  {
    Date: "2012-01-26",
    "New York": "37.1",
    "San Francisco": "53.6",
    Austin: "55.0"
  },
  {
    Date: "2012-01-27",
    "New York": "48.2",
    "San Francisco": "50.4",
    Austin: "50.7"
  },
  {
    Date: "2012-01-28",
    "New York": "43.7",
    "San Francisco": "50.3",
    Austin: "52.9"
  },
  {
    Date: "2012-01-29",
    "New York": "40.1",
    "San Francisco": "53.8",
    Austin: "44.4"
  },
  {
    Date: "2012-01-30",
    "New York": "38.0",
    "San Francisco": "51.9",
    Austin: "49.1"
  },
  {
    Date: "2012-01-31",
    "New York": "43.5",
    "San Francisco": "50.0",
    Austin: "62.8"
  },
  {
    Date: "2012-02-01",
    "New York": "50.4",
    "San Francisco": "50.0",
    Austin: "64.6"
  },
  {
    Date: "2012-02-02",
    "New York": "45.8",
    "San Francisco": "51.3",
    Austin: "61.1"
  },
  {
    Date: "2012-02-03",
    "New York": "37.5",
    "San Francisco": "51.5",
    Austin: "70.0"
  },
  {
    Date: "2012-02-04",
    "New York": "40.8",
    "San Francisco": "52.0",
    Austin: "61.3"
  },
  {
    Date: "2012-02-05",
    "New York": "36.5",
    "San Francisco": "53.8",
    Austin: "48.2"
  },
  {
    Date: "2012-02-06",
    "New York": "39.1",
    "San Francisco": "54.6",
    Austin: "44.2"
  },
  {
    Date: "2012-02-07",
    "New York": "43.2",
    "San Francisco": "54.3",
    Austin: "51.3"
  },
  {
    Date: "2012-02-08",
    "New York": "36.5",
    "San Francisco": "51.9",
    Austin: "49.2"
  },
  {
    Date: "2012-02-09",
    "New York": "36.5",
    "San Francisco": "53.8",
    Austin: "45.7"
  },
  {
    Date: "2012-02-10",
    "New York": "38.3",
    "San Francisco": "53.9",
    Austin: "54.1"
  },
  {
    Date: "2012-02-11",
    "New York": "36.9",
    "San Francisco": "52.3",
    Austin: "44.9"
  },
  {
    Date: "2012-02-12",
    "New York": "29.7",
    "San Francisco": "50.1",
    Austin: "36.5"
  },
  {
    Date: "2012-02-13",
    "New York": "33.1",
    "San Francisco": "49.5",
    Austin: "44.8"
  },
  {
    Date: "2012-02-14",
    "New York": "39.6",
    "San Francisco": "48.6",
    Austin: "52.3"
  },
  {
    Date: "2012-02-15",
    "New York": "42.3",
    "San Francisco": "49.9",
    Austin: "68.0"
  },
  {
    Date: "2012-02-16",
    "New York": "39.7",
    "San Francisco": "52.4",
    Austin: "54.6"
  },
  {
    Date: "2012-02-17",
    "New York": "46.0",
    "San Francisco": "49.9",
    Austin: "53.8"
  },
  {
    Date: "2012-02-18",
    "New York": "41.2",
    "San Francisco": "51.6",
    Austin: "56.2"
  },
  {
    Date: "2012-02-19",
    "New York": "39.8",
    "San Francisco": "47.8",
    Austin: "50.8"
  },
  {
    Date: "2012-02-20",
    "New York": "38.1",
    "San Francisco": "48.7",
    Austin: "53.0"
  },
  {
    Date: "2012-02-21",
    "New York": "37.1",
    "San Francisco": "49.7",
    Austin: "61.0"
  },
  {
    Date: "2012-02-22",
    "New York": "45.5",
    "San Francisco": "53.4",
    Austin: "68.8"
  },
  {
    Date: "2012-02-23",
    "New York": "50.6",
    "San Francisco": "54.1",
    Austin: "69.4"
  },
  {
    Date: "2012-02-24",
    "New York": "42.7",
    "San Francisco": "55.9",
    Austin: "59.3"
  },
  {
    Date: "2012-02-25",
    "New York": "42.6",
    "San Francisco": "51.7",
    Austin: "47.2"
  },
  {
    Date: "2012-02-26",
    "New York": "36.9",
    "San Francisco": "47.7",
    Austin: "47.7"
  },
  {
    Date: "2012-02-27",
    "New York": "40.9",
    "San Francisco": "45.4",
    Austin: "61.9"
  },
  {
    Date: "2012-02-28",
    "New York": "45.9",
    "San Francisco": "47.0",
    Austin: "67.2"
  },
  {
    Date: "2012-02-29",
    "New York": "40.7",
    "San Francisco": "49.8",
    Austin: "70.1"
  },
  {
    Date: "2012-03-01",
    "New York": "41.3",
    "San Francisco": "48.9",
    Austin: "62.1"
  },
  {
    Date: "2012-03-02",
    "New York": "36.8",
    "San Francisco": "48.1",
    Austin: "72.7"
  },
  {
    Date: "2012-03-03",
    "New York": "47.6",
    "San Francisco": "50.7",
    Austin: "59.0"
  },
  {
    Date: "2012-03-04",
    "New York": "44.2",
    "San Francisco": "55.0",
    Austin: "51.8"
  },
  {
    Date: "2012-03-05",
    "New York": "38.5",
    "San Francisco": "48.8",
    Austin: "55.0"
  },
  {
    Date: "2012-03-06",
    "New York": "32.9",
    "San Francisco": "48.4",
    Austin: "61.8"
  },
  {
    Date: "2012-03-07",
    "New York": "43.3",
    "San Francisco": "49.9",
    Austin: "67.1"
  },
  {
    Date: "2012-03-08",
    "New York": "51.2",
    "San Francisco": "49.2",
    Austin: "72.0"
  },
  {
    Date: "2012-03-09",
    "New York": "47.8",
    "San Francisco": "51.7",
    Austin: "46.4"
  },
  {
    Date: "2012-03-10",
    "New York": "37.2",
    "San Francisco": "49.3",
    Austin: "46.7"
  },
  {
    Date: "2012-03-11",
    "New York": "42.9",
    "San Francisco": "50.0",
    Austin: "56.9"
  },
  {
    Date: "2012-03-12",
    "New York": "48.8",
    "San Francisco": "48.6",
    Austin: "61.9"
  },
  {
    Date: "2012-03-13",
    "New York": "52.6",
    "San Francisco": "53.9",
    Austin: "68.8"
  },
  {
    Date: "2012-03-14",
    "New York": "60.5",
    "San Francisco": "55.2",
    Austin: "71.9"
  },
  {
    Date: "2012-03-15",
    "New York": "47.2",
    "San Francisco": "55.9",
    Austin: "72.0"
  },
  {
    Date: "2012-03-16",
    "New York": "44.7",
    "San Francisco": "54.6",
    Austin: "72.5"
  },
  {
    Date: "2012-03-17",
    "New York": "48.2",
    "San Francisco": "48.2",
    Austin: "71.7"
  },
  {
    Date: "2012-03-18",
    "New York": "48.2",
    "San Francisco": "47.1",
    Austin: "71.1"
  },
  {
    Date: "2012-03-19",
    "New York": "53.1",
    "San Francisco": "45.8",
    Austin: "73.0"
  },
  {
    Date: "2012-03-20",
    "New York": "57.8",
    "San Francisco": "49.7",
    Austin: "63.8"
  },
  {
    Date: "2012-03-21",
    "New York": "57.5",
    "San Francisco": "51.4",
    Austin: "60.0"
  },
  {
    Date: "2012-03-22",
    "New York": "57.3",
    "San Francisco": "51.4",
    Austin: "62.3"
  },
  {
    Date: "2012-03-23",
    "New York": "61.7",
    "San Francisco": "48.4",
    Austin: "61.1"
  },
  {
    Date: "2012-03-24",
    "New York": "55.8",
    "San Francisco": "49.0",
    Austin: "62.0"
  },
  {
    Date: "2012-03-25",
    "New York": "48.4",
    "San Francisco": "46.4",
    Austin: "64.6"
  },
  {
    Date: "2012-03-26",
    "New York": "49.8",
    "San Francisco": "49.7",
    Austin: "66.0"
  },
  {
    Date: "2012-03-27",
    "New York": "39.6",
    "San Francisco": "54.1",
    Austin: "65.8"
  },
  {
    Date: "2012-03-28",
    "New York": "49.7",
    "San Francisco": "54.6",
    Austin: "69.2"
  },
  {
    Date: "2012-03-29",
    "New York": "56.8",
    "San Francisco": "52.3",
    Austin: "69.5"
  },
  {
    Date: "2012-03-30",
    "New York": "46.5",
    "San Francisco": "54.5",
    Austin: "73.5"
  },
  {
    Date: "2012-03-31",
    "New York": "42.2",
    "San Francisco": "56.2",
    Austin: "73.9"
  },
  {
    Date: "2012-04-01",
    "New York": "45.3",
    "San Francisco": "51.1",
    Austin: "75.3"
  },
  {
    Date: "2012-04-02",
    "New York": "48.1",
    "San Francisco": "50.5",
    Austin: "75.4"
  },
  {
    Date: "2012-04-03",
    "New York": "51.2",
    "San Francisco": "52.2",
    Austin: "77.3"
  },
  {
    Date: "2012-04-04",
    "New York": "61.0",
    "San Francisco": "50.6",
    Austin: "67.0"
  },
  {
    Date: "2012-04-05",
    "New York": "50.7",
    "San Francisco": "47.9",
    Austin: "71.1"
  },
  {
    Date: "2012-04-06",
    "New York": "48.0",
    "San Francisco": "47.4",
    Austin: "70.4"
  },
  {
    Date: "2012-04-07",
    "New York": "51.1",
    "San Francisco": "49.4",
    Austin: "73.6"
  },
  {
    Date: "2012-04-08",
    "New York": "55.7",
    "San Francisco": "50.0",
    Austin: "71.1"
  },
  {
    Date: "2012-04-09",
    "New York": "58.3",
    "San Francisco": "51.3",
    Austin: "70.0"
  },
  {
    Date: "2012-04-10",
    "New York": "55.0",
    "San Francisco": "53.8",
    Austin: "69.0"
  },
  {
    Date: "2012-04-11",
    "New York": "49.0",
    "San Francisco": "52.9",
    Austin: "69.2"
  },
  {
    Date: "2012-04-12",
    "New York": "51.7",
    "San Francisco": "53.9",
    Austin: "74.5"
  },
  {
    Date: "2012-04-13",
    "New York": "53.1",
    "San Francisco": "50.2",
    Austin: "73.4"
  },
  {
    Date: "2012-04-14",
    "New York": "55.2",
    "San Francisco": "50.9",
    Austin: "76.0"
  },
  {
    Date: "2012-04-15",
    "New York": "62.3",
    "San Francisco": "51.5",
    Austin: "74.5"
  },
  {
    Date: "2012-04-16",
    "New York": "62.9",
    "San Francisco": "51.9",
    Austin: "63.6"
  },
  {
    Date: "2012-04-17",
    "New York": "69.3",
    "San Francisco": "53.2",
    Austin: "67.3"
  },
  {
    Date: "2012-04-18",
    "New York": "59.0",
    "San Francisco": "53.0",
    Austin: "65.1"
  },
  {
    Date: "2012-04-19",
    "New York": "54.1",
    "San Francisco": "55.1",
    Austin: "67.9"
  },
  {
    Date: "2012-04-20",
    "New York": "56.5",
    "San Francisco": "55.8",
    Austin: "68.9"
  },
  {
    Date: "2012-04-21",
    "New York": "58.2",
    "San Francisco": "58.0",
    Austin: "65.1"
  },
  {
    Date: "2012-04-22",
    "New York": "52.4",
    "San Francisco": "52.8",
    Austin: "65.4"
  },
  {
    Date: "2012-04-23",
    "New York": "51.6",
    "San Francisco": "55.1",
    Austin: "70.1"
  },
  {
    Date: "2012-04-24",
    "New York": "49.3",
    "San Francisco": "57.9",
    Austin: "67.0"
  },
  {
    Date: "2012-04-25",
    "New York": "52.5",
    "San Francisco": "57.5",
    Austin: "75.4"
  },
  {
    Date: "2012-04-26",
    "New York": "50.5",
    "San Francisco": "55.3",
    Austin: "77.5"
  },
  {
    Date: "2012-04-27",
    "New York": "51.9",
    "San Francisco": "53.5",
    Austin: "77.0"
  },
  {
    Date: "2012-04-28",
    "New York": "47.4",
    "San Francisco": "54.7",
    Austin: "77.7"
  },
  {
    Date: "2012-04-29",
    "New York": "54.1",
    "San Francisco": "54.0",
    Austin: "77.7"
  },
  {
    Date: "2012-04-30",
    "New York": "51.9",
    "San Francisco": "53.4",
    Austin: "77.7"
  },
  {
    Date: "2012-05-01",
    "New York": "57.4",
    "San Francisco": "52.7",
    Austin: "77.0"
  },
  {
    Date: "2012-05-02",
    "New York": "53.7",
    "San Francisco": "50.7",
    Austin: "77.9"
  },
  {
    Date: "2012-05-03",
    "New York": "53.1",
    "San Francisco": "52.6",
    Austin: "79.1"
  },
  {
    Date: "2012-05-04",
    "New York": "57.2",
    "San Francisco": "53.4",
    Austin: "80.1"
  },
  {
    Date: "2012-05-05",
    "New York": "57.0",
    "San Francisco": "53.1",
    Austin: "82.1"
  },
  {
    Date: "2012-05-06",
    "New York": "56.6",
    "San Francisco": "56.5",
    Austin: "79.0"
  },
  {
    Date: "2012-05-07",
    "New York": "54.6",
    "San Francisco": "55.3",
    Austin: "79.8"
  },
  {
    Date: "2012-05-08",
    "New York": "57.9",
    "San Francisco": "52.0",
    Austin: "70.0"
  },
  {
    Date: "2012-05-09",
    "New York": "59.2",
    "San Francisco": "52.4",
    Austin: "69.8"
  },
  {
    Date: "2012-05-10",
    "New York": "61.1",
    "San Francisco": "53.4",
    Austin: "71.3"
  },
  {
    Date: "2012-05-11",
    "New York": "59.7",
    "San Francisco": "53.1",
    Austin: "69.4"
  },
  {
    Date: "2012-05-12",
    "New York": "64.1",
    "San Francisco": "49.9",
    Austin: "72.0"
  },
  {
    Date: "2012-05-13",
    "New York": "65.3",
    "San Francisco": "52.0",
    Austin: "72.4"
  },
  {
    Date: "2012-05-14",
    "New York": "64.2",
    "San Francisco": "56.0",
    Austin: "72.5"
  },
  {
    Date: "2012-05-15",
    "New York": "62.0",
    "San Francisco": "53.0",
    Austin: "67.6"
  },
  {
    Date: "2012-05-16",
    "New York": "63.8",
    "San Francisco": "51.0",
    Austin: "69.0"
  },
  {
    Date: "2012-05-17",
    "New York": "64.5",
    "San Francisco": "51.4",
    Austin: "72.7"
  },
  {
    Date: "2012-05-18",
    "New York": "61.0",
    "San Francisco": "52.2",
    Austin: "73.7"
  },
  {
    Date: "2012-05-19",
    "New York": "62.6",
    "San Francisco": "52.4",
    Austin: "77.5"
  },
  {
    Date: "2012-05-20",
    "New York": "66.2",
    "San Francisco": "54.5",
    Austin: "75.8"
  },
  {
    Date: "2012-05-21",
    "New York": "62.7",
    "San Francisco": "52.8",
    Austin: "76.9"
  },
  {
    Date: "2012-05-22",
    "New York": "63.7",
    "San Francisco": "53.9",
    Austin: "78.8"
  },
  {
    Date: "2012-05-23",
    "New York": "66.4",
    "San Francisco": "56.5",
    Austin: "77.7"
  },
  {
    Date: "2012-05-24",
    "New York": "64.5",
    "San Francisco": "54.7",
    Austin: "80.6"
  },
  {
    Date: "2012-05-25",
    "New York": "65.4",
    "San Francisco": "52.5",
    Austin: "81.4"
  },
  {
    Date: "2012-05-26",
    "New York": "69.4",
    "San Francisco": "52.1",
    Austin: "82.3"
  },
  {
    Date: "2012-05-27",
    "New York": "71.9",
    "San Francisco": "52.2",
    Austin: "80.3"
  },
  {
    Date: "2012-05-28",
    "New York": "74.4",
    "San Francisco": "52.9",
    Austin: "80.3"
  },
  {
    Date: "2012-05-29",
    "New York": "75.9",
    "San Francisco": "52.1",
    Austin: "82.2"
  },
  {
    Date: "2012-05-30",
    "New York": "72.9",
    "San Francisco": "52.1",
    Austin: "81.9"
  },
  {
    Date: "2012-05-31",
    "New York": "72.5",
    "San Francisco": "53.3",
    Austin: "82.4"
  },
  {
    Date: "2012-06-01",
    "New York": "67.2",
    "San Francisco": "54.8",
    Austin: "77.9"
  },
  {
    Date: "2012-06-02",
    "New York": "68.3",
    "San Francisco": "54.0",
    Austin: "81.1"
  },
  {
    Date: "2012-06-03",
    "New York": "67.7",
    "San Francisco": "52.3",
    Austin: "82.2"
  },
  {
    Date: "2012-06-04",
    "New York": "61.9",
    "San Francisco": "55.3",
    Austin: "81.2"
  },
  {
    Date: "2012-06-05",
    "New York": "58.3",
    "San Francisco": "53.5",
    Austin: "83.0"
  },
  {
    Date: "2012-06-06",
    "New York": "61.7",
    "San Francisco": "54.1",
    Austin: "83.2"
  },
  {
    Date: "2012-06-07",
    "New York": "66.7",
    "San Francisco": "53.9",
    Austin: "82.1"
  },
  {
    Date: "2012-06-08",
    "New York": "68.7",
    "San Francisco": "54.4",
    Austin: "77.5"
  },
  {
    Date: "2012-06-09",
    "New York": "72.2",
    "San Francisco": "55.0",
    Austin: "77.9"
  },
  {
    Date: "2012-06-10",
    "New York": "72.6",
    "San Francisco": "60.0",
    Austin: "82.9"
  },
  {
    Date: "2012-06-11",
    "New York": "69.2",
    "San Francisco": "57.2",
    Austin: "86.8"
  },
  {
    Date: "2012-06-12",
    "New York": "66.9",
    "San Francisco": "55.1",
    Austin: "85.3"
  },
  {
    Date: "2012-06-13",
    "New York": "66.7",
    "San Francisco": "53.3",
    Austin: "76.9"
  },
  {
    Date: "2012-06-14",
    "New York": "67.7",
    "San Francisco": "53.4",
    Austin: "84.5"
  },
  {
    Date: "2012-06-15",
    "New York": "68.5",
    "San Francisco": "54.6",
    Austin: "84.4"
  },
  {
    Date: "2012-06-16",
    "New York": "67.5",
    "San Francisco": "57.0",
    Austin: "83.8"
  },
  {
    Date: "2012-06-17",
    "New York": "64.2",
    "San Francisco": "55.6",
    Austin: "82.5"
  },
  {
    Date: "2012-06-18",
    "New York": "61.7",
    "San Francisco": "52.5",
    Austin: "82.9"
  },
  {
    Date: "2012-06-19",
    "New York": "66.4",
    "San Francisco": "53.9",
    Austin: "82.5"
  },
  {
    Date: "2012-06-20",
    "New York": "77.9",
    "San Francisco": "55.3",
    Austin: "81.3"
  },
  {
    Date: "2012-06-21",
    "New York": "88.3",
    "San Francisco": "53.3",
    Austin: "80.8"
  },
  {
    Date: "2012-06-22",
    "New York": "82.2",
    "San Francisco": "54.1",
    Austin: "81.7"
  },
  {
    Date: "2012-06-23",
    "New York": "77.0",
    "San Francisco": "55.2",
    Austin: "83.9"
  },
  {
    Date: "2012-06-24",
    "New York": "75.4",
    "San Francisco": "55.8",
    Austin: "85.5"
  },
  {
    Date: "2012-06-25",
    "New York": "70.9",
    "San Francisco": "56.8",
    Austin: "87.2"
  },
  {
    Date: "2012-06-26",
    "New York": "65.9",
    "San Francisco": "57.5",
    Austin: "88.0"
  },
  {
    Date: "2012-06-27",
    "New York": "73.5",
    "San Francisco": "57.7",
    Austin: "89.6"
  },
  {
    Date: "2012-06-28",
    "New York": "77.4",
    "San Francisco": "56.6",
    Austin: "86.7"
  },
  {
    Date: "2012-06-29",
    "New York": "79.6",
    "San Francisco": "56.4",
    Austin: "85.3"
  },
  {
    Date: "2012-06-30",
    "New York": "84.2",
    "San Francisco": "58.4",
    Austin: "81.7"
  },
  {
    Date: "2012-07-01",
    "New York": "81.8",
    "San Francisco": "58.8",
    Austin: "78.5"
  },
  {
    Date: "2012-07-02",
    "New York": "82.5",
    "San Francisco": "56.4",
    Austin: "83.1"
  },
  {
    Date: "2012-07-03",
    "New York": "80.2",
    "San Francisco": "56.5",
    Austin: "83.1"
  },
  {
    Date: "2012-07-04",
    "New York": "77.8",
    "San Francisco": "55.8",
    Austin: "84.5"
  },
  {
    Date: "2012-07-05",
    "New York": "86.1",
    "San Francisco": "54.8",
    Austin: "84.6"
  },
  {
    Date: "2012-07-06",
    "New York": "79.9",
    "San Francisco": "54.9",
    Austin: "84.2"
  },
  {
    Date: "2012-07-07",
    "New York": "83.5",
    "San Francisco": "54.7",
    Austin: "86.7"
  },
  {
    Date: "2012-07-08",
    "New York": "81.5",
    "San Francisco": "52.8",
    Austin: "84.3"
  },
  {
    Date: "2012-07-09",
    "New York": "77.8",
    "San Francisco": "53.7",
    Austin: "83.7"
  },
  {
    Date: "2012-07-10",
    "New York": "76.1",
    "San Francisco": "53.1",
    Austin: "77.1"
  },
  {
    Date: "2012-07-11",
    "New York": "76.3",
    "San Francisco": "52.7",
    Austin: "77.4"
  },
  {
    Date: "2012-07-12",
    "New York": "75.8",
    "San Francisco": "52.0",
    Austin: "80.6"
  },
  {
    Date: "2012-07-13",
    "New York": "77.2",
    "San Francisco": "53.4",
    Austin: "81.4"
  },
  {
    Date: "2012-07-14",
    "New York": "79.3",
    "San Francisco": "54.0",
    Austin: "80.2"
  },
  {
    Date: "2012-07-15",
    "New York": "78.9",
    "San Francisco": "54.0",
    Austin: "81.8"
  },
  {
    Date: "2012-07-16",
    "New York": "79.6",
    "San Francisco": "54.5",
    Austin: "77.3"
  },
  {
    Date: "2012-07-17",
    "New York": "83.3",
    "San Francisco": "56.7",
    Austin: "80.8"
  },
  {
    Date: "2012-07-18",
    "New York": "84.3",
    "San Francisco": "57.5",
    Austin: "81.6"
  },
  {
    Date: "2012-07-19",
    "New York": "75.1",
    "San Francisco": "57.1",
    Austin: "80.9"
  },
  {
    Date: "2012-07-20",
    "New York": "68.4",
    "San Francisco": "58.1",
    Austin: "83.9"
  },
  {
    Date: "2012-07-21",
    "New York": "68.4",
    "San Francisco": "57.6",
    Austin: "85.6"
  },
  {
    Date: "2012-07-22",
    "New York": "72.2",
    "San Francisco": "56.0",
    Austin: "83.6"
  },
  {
    Date: "2012-07-23",
    "New York": "75.6",
    "San Francisco": "56.6",
    Austin: "84.0"
  },
  {
    Date: "2012-07-24",
    "New York": "82.6",
    "San Francisco": "57.8",
    Austin: "83.0"
  },
  {
    Date: "2012-07-25",
    "New York": "78.4",
    "San Francisco": "57.5",
    Austin: "84.8"
  },
  {
    Date: "2012-07-26",
    "New York": "77.0",
    "San Francisco": "56.4",
    Austin: "84.4"
  },
  {
    Date: "2012-07-27",
    "New York": "79.4",
    "San Francisco": "55.3",
    Austin: "84.3"
  },
  {
    Date: "2012-07-28",
    "New York": "77.4",
    "San Francisco": "55.0",
    Austin: "83.9"
  },
  {
    Date: "2012-07-29",
    "New York": "72.5",
    "San Francisco": "55.6",
    Austin: "85.0"
  },
  {
    Date: "2012-07-30",
    "New York": "72.9",
    "San Francisco": "55.6",
    Austin: "84.9"
  },
  {
    Date: "2012-07-31",
    "New York": "73.6",
    "San Francisco": "55.9",
    Austin: "86.3"
  },
  {
    Date: "2012-08-01",
    "New York": "75.0",
    "San Francisco": "55.4",
    Austin: "86.5"
  },
  {
    Date: "2012-08-02",
    "New York": "77.7",
    "San Francisco": "54.4",
    Austin: "85.8"
  },
  {
    Date: "2012-08-03",
    "New York": "79.7",
    "San Francisco": "53.7",
    Austin: "85.3"
  },
  {
    Date: "2012-08-04",
    "New York": "79.6",
    "San Francisco": "54.1",
    Austin: "86.0"
  },
  {
    Date: "2012-08-05",
    "New York": "81.5",
    "San Francisco": "57.8",
    Austin: "84.2"
  },
  {
    Date: "2012-08-06",
    "New York": "80.0",
    "San Francisco": "58.2",
    Austin: "81.9"
  },
  {
    Date: "2012-08-07",
    "New York": "75.7",
    "San Francisco": "58.0",
    Austin: "86.5"
  },
  {
    Date: "2012-08-08",
    "New York": "77.8",
    "San Francisco": "57.0",
    Austin: "86.1"
  },
  {
    Date: "2012-08-09",
    "New York": "78.6",
    "San Francisco": "55.0",
    Austin: "86.8"
  },
  {
    Date: "2012-08-10",
    "New York": "77.8",
    "San Francisco": "54.8",
    Austin: "88.0"
  },
  {
    Date: "2012-08-11",
    "New York": "78.5",
    "San Francisco": "53.0",
    Austin: "85.1"
  },
  {
    Date: "2012-08-12",
    "New York": "78.8",
    "San Francisco": "52.5",
    Austin: "87.4"
  },
  {
    Date: "2012-08-13",
    "New York": "78.6",
    "San Francisco": "53.3",
    Austin: "88.0"
  },
  {
    Date: "2012-08-14",
    "New York": "76.8",
    "San Francisco": "53.9",
    Austin: "88.0"
  },
  {
    Date: "2012-08-15",
    "New York": "76.7",
    "San Francisco": "56.2",
    Austin: "87.2"
  },
  {
    Date: "2012-08-16",
    "New York": "75.9",
    "San Francisco": "57.1",
    Austin: "86.1"
  },
  {
    Date: "2012-08-17",
    "New York": "77.6",
    "San Francisco": "55.3",
    Austin: "86.8"
  },
  {
    Date: "2012-08-18",
    "New York": "72.6",
    "San Francisco": "56.2",
    Austin: "84.9"
  },
  {
    Date: "2012-08-19",
    "New York": "70.4",
    "San Francisco": "54.3",
    Austin: "76.8"
  },
  {
    Date: "2012-08-20",
    "New York": "71.8",
    "San Francisco": "53.1",
    Austin: "80.6"
  },
  {
    Date: "2012-08-21",
    "New York": "73.6",
    "San Francisco": "53.4",
    Austin: "80.0"
  },
  {
    Date: "2012-08-22",
    "New York": "74.7",
    "San Francisco": "54.5",
    Austin: "78.2"
  },
  {
    Date: "2012-08-23",
    "New York": "74.6",
    "San Francisco": "55.7",
    Austin: "79.1"
  },
  {
    Date: "2012-08-24",
    "New York": "76.0",
    "San Francisco": "54.8",
    Austin: "81.9"
  },
  {
    Date: "2012-08-25",
    "New York": "76.2",
    "San Francisco": "53.8",
    Austin: "84.7"
  },
  {
    Date: "2012-08-26",
    "New York": "73.4",
    "San Francisco": "56.5",
    Austin: "83.5"
  },
  {
    Date: "2012-08-27",
    "New York": "74.6",
    "San Francisco": "58.3",
    Austin: "82.1"
  },
  {
    Date: "2012-08-28",
    "New York": "79.4",
    "San Francisco": "58.7",
    Austin: "84.0"
  },
  {
    Date: "2012-08-29",
    "New York": "74.7",
    "San Francisco": "57.5",
    Austin: "85.7"
  },
  {
    Date: "2012-08-30",
    "New York": "73.5",
    "San Francisco": "55.9",
    Austin: "87.2"
  },
  {
    Date: "2012-08-31",
    "New York": "77.9",
    "San Francisco": "55.4",
    Austin: "82.9"
  },
  {
    Date: "2012-09-01",
    "New York": "80.7",
    "San Francisco": "55.7",
    Austin: "84.8"
  },
  {
    Date: "2012-09-02",
    "New York": "75.1",
    "San Francisco": "53.1",
    Austin: "83.9"
  },
  {
    Date: "2012-09-03",
    "New York": "73.5",
    "San Francisco": "53.5",
    Austin: "85.5"
  },
  {
    Date: "2012-09-04",
    "New York": "73.5",
    "San Francisco": "52.5",
    Austin: "86.4"
  },
  {
    Date: "2012-09-05",
    "New York": "77.7",
    "San Francisco": "54.5",
    Austin: "85.8"
  },
  {
    Date: "2012-09-06",
    "New York": "74.2",
    "San Francisco": "56.3",
    Austin: "85.4"
  },
  {
    Date: "2012-09-07",
    "New York": "76.0",
    "San Francisco": "56.4",
    Austin: "85.3"
  },
  {
    Date: "2012-09-08",
    "New York": "77.1",
    "San Francisco": "56.5",
    Austin: "81.9"
  },
  {
    Date: "2012-09-09",
    "New York": "69.7",
    "San Francisco": "56.4",
    Austin: "74.8"
  },
  {
    Date: "2012-09-10",
    "New York": "67.8",
    "San Francisco": "55.4",
    Austin: "71.6"
  },
  {
    Date: "2012-09-11",
    "New York": "64.0",
    "San Francisco": "56.2",
    Austin: "75.9"
  },
  {
    Date: "2012-09-12",
    "New York": "68.1",
    "San Francisco": "55.7",
    Austin: "82.1"
  },
  {
    Date: "2012-09-13",
    "New York": "69.3",
    "San Francisco": "54.3",
    Austin: "80.5"
  },
  {
    Date: "2012-09-14",
    "New York": "70.0",
    "San Francisco": "55.2",
    Austin: "70.0"
  },
  {
    Date: "2012-09-15",
    "New York": "69.3",
    "San Francisco": "54.3",
    Austin: "71.2"
  },
  {
    Date: "2012-09-16",
    "New York": "66.3",
    "San Francisco": "52.9",
    Austin: "70.3"
  },
  {
    Date: "2012-09-17",
    "New York": "67.0",
    "San Francisco": "54.8",
    Austin: "72.1"
  },
  {
    Date: "2012-09-18",
    "New York": "72.8",
    "San Francisco": "54.8",
    Austin: "73.7"
  },
  {
    Date: "2012-09-19",
    "New York": "67.2",
    "San Francisco": "56.8",
    Austin: "72.7"
  },
  {
    Date: "2012-09-20",
    "New York": "62.1",
    "San Francisco": "55.4",
    Austin: "71.7"
  },
  {
    Date: "2012-09-21",
    "New York": "64.0",
    "San Francisco": "55.8",
    Austin: "72.9"
  },
  {
    Date: "2012-09-22",
    "New York": "65.5",
    "San Francisco": "55.9",
    Austin: "73.1"
  },
  {
    Date: "2012-09-23",
    "New York": "65.7",
    "San Francisco": "52.8",
    Austin: "75.6"
  },
  {
    Date: "2012-09-24",
    "New York": "60.4",
    "San Francisco": "54.5",
    Austin: "78.3"
  },
  {
    Date: "2012-09-25",
    "New York": "63.2",
    "San Francisco": "53.3",
    Austin: "78.3"
  },
  {
    Date: "2012-09-26",
    "New York": "68.5",
    "San Francisco": "53.6",
    Austin: "79.6"
  },
  {
    Date: "2012-09-27",
    "New York": "69.2",
    "San Francisco": "52.1",
    Austin: "76.4"
  },
  {
    Date: "2012-09-28",
    "New York": "68.7",
    "San Francisco": "52.6",
    Austin: "77.2"
  },
  {
    Date: "2012-09-29",
    "New York": "62.5",
    "San Francisco": "53.9",
    Austin: "75.2"
  },
  {
    Date: "2012-09-30",
    "New York": "62.3",
    "San Francisco": "55.1",
    Austin: "71.9"
  }
], ji = 300, Zi = [
  {
    Date: "2011-10-01",
    "New York": "63.4",
    "San Francisco": "62.7",
    Austin: "72.2"
  },
  {
    Date: "2011-10-02",
    "New York": "58.0",
    "San Francisco": "59.9",
    Austin: "67.7"
  },
  {
    Date: "2011-10-03",
    "New York": "53.3",
    "San Francisco": "59.1",
    Austin: "69.4"
  },
  {
    Date: "2011-10-04",
    "New York": "55.7",
    "San Francisco": "58.8",
    Austin: "68.0"
  },
  {
    Date: "2011-10-05",
    "New York": "64.2",
    "San Francisco": "58.7",
    Austin: "72.4"
  },
  {
    Date: "2011-10-06",
    "New York": "58.8",
    "San Francisco": "57.0",
    Austin: "77.0"
  },
  {
    Date: "2011-10-07",
    "New York": "57.9",
    "San Francisco": "56.7",
    Austin: "82.3"
  },
  {
    Date: "2011-10-08",
    "New York": "61.8",
    "San Francisco": "56.8",
    Austin: "78.9"
  },
  {
    Date: "2011-10-09",
    "New York": "69.3",
    "San Francisco": "56.7",
    Austin: "68.8"
  },
  {
    Date: "2011-10-10",
    "New York": "71.2",
    "San Francisco": "60.1",
    Austin: "68.7"
  },
  {
    Date: "2011-10-11",
    "New York": "68.7",
    "San Francisco": "61.1",
    Austin: "70.3"
  },
  {
    Date: "2011-10-12",
    "New York": "61.8",
    "San Francisco": "61.5",
    Austin: "75.3"
  },
  {
    Date: "2011-10-13",
    "New York": "63.0",
    "San Francisco": "64.3",
    Austin: "76.6"
  },
  {
    Date: "2011-10-14",
    "New York": "66.9",
    "San Francisco": "67.1",
    Austin: "66.6"
  },
  {
    Date: "2011-10-15",
    "New York": "61.7",
    "San Francisco": "64.6",
    Austin: "68.0"
  },
  {
    Date: "2011-10-16",
    "New York": "61.8",
    "San Francisco": "61.6",
    Austin: "70.6"
  },
  {
    Date: "2011-10-17",
    "New York": "62.8",
    "San Francisco": "61.1",
    Austin: "71.1"
  },
  {
    Date: "2011-10-18",
    "New York": "60.8",
    "San Francisco": "59.2",
    Austin: "70.0"
  },
  {
    Date: "2011-10-19",
    "New York": "62.1",
    "San Francisco": "58.9",
    Austin: "61.6"
  },
  {
    Date: "2011-10-20",
    "New York": "65.1",
    "San Francisco": "57.2",
    Austin: "57.4"
  },
  {
    Date: "2011-10-21",
    "New York": "55.6",
    "San Francisco": "56.4",
    Austin: "64.3"
  },
  {
    Date: "2011-10-22",
    "New York": "54.4",
    "San Francisco": "60.7",
    Austin: "72.4"
  },
  {
    Date: "2011-10-23",
    "New York": "54.4",
    "San Francisco": "65.1",
    Austin: "72.4"
  },
  {
    Date: "2011-10-24",
    "New York": "54.8",
    "San Francisco": "60.9",
    Austin: "72.5"
  },
  {
    Date: "2011-10-25",
    "New York": "57.9",
    "San Francisco": "56.1",
    Austin: "72.7"
  },
  {
    Date: "2011-10-26",
    "New York": "54.6",
    "San Francisco": "54.6",
    Austin: "73.4"
  },
  {
    Date: "2011-10-27",
    "New York": "54.4",
    "San Francisco": "56.1",
    Austin: "70.7"
  },
  {
    Date: "2011-10-28",
    "New York": "42.5",
    "San Francisco": "58.1",
    Austin: "56.8"
  },
  {
    Date: "2011-10-29",
    "New York": "40.9",
    "San Francisco": "57.5",
    Austin: "51.0"
  },
  {
    Date: "2011-10-30",
    "New York": "38.6",
    "San Francisco": "57.7",
    Austin: "54.9"
  },
  {
    Date: "2011-10-31",
    "New York": "44.2",
    "San Francisco": "55.1",
    Austin: "58.8"
  },
  {
    Date: "2011-11-01",
    "New York": "49.6",
    "San Francisco": "57.9",
    Austin: "62.6"
  },
  {
    Date: "2011-11-02",
    "New York": "47.2",
    "San Francisco": "64.6",
    Austin: "71.0"
  },
  {
    Date: "2011-11-03",
    "New York": "50.1",
    "San Francisco": "56.2",
    Austin: "58.4"
  },
  {
    Date: "2011-11-04",
    "New York": "50.1",
    "San Francisco": "50.5",
    Austin: "45.1"
  },
  {
    Date: "2011-11-05",
    "New York": "43.5",
    "San Francisco": "51.3",
    Austin: "52.2"
  },
  {
    Date: "2011-11-06",
    "New York": "43.8",
    "San Francisco": "52.6",
    Austin: "73.0"
  },
  {
    Date: "2011-11-07",
    "New York": "48.9",
    "San Francisco": "51.4",
    Austin: "75.4"
  },
  {
    Date: "2011-11-08",
    "New York": "55.5",
    "San Francisco": "50.6",
    Austin: "72.1"
  },
  {
    Date: "2011-11-09",
    "New York": "53.7",
    "San Francisco": "54.6",
    Austin: "56.6"
  },
  {
    Date: "2011-11-10",
    "New York": "57.7",
    "San Francisco": "55.6",
    Austin: "55.4"
  },
  {
    Date: "2011-11-11",
    "New York": "48.5",
    "San Francisco": "53.9",
    Austin: "46.7"
  },
  {
    Date: "2011-11-12",
    "New York": "46.8",
    "San Francisco": "54.0",
    Austin: "62.0"
  },
  {
    Date: "2011-11-13",
    "New York": "51.1",
    "San Francisco": "53.8",
    Austin: "71.6"
  },
  {
    Date: "2011-11-14",
    "New York": "56.8",
    "San Francisco": "53.5",
    Austin: "75.5"
  },
  {
    Date: "2011-11-15",
    "New York": "59.7",
    "San Francisco": "53.4",
    Austin: "72.1"
  },
  {
    Date: "2011-11-16",
    "New York": "56.5",
    "San Francisco": "52.2",
    Austin: "65.7"
  },
  {
    Date: "2011-11-17",
    "New York": "49.6",
    "San Francisco": "52.7",
    Austin: "56.8"
  },
  {
    Date: "2011-11-18",
    "New York": "41.5",
    "San Francisco": "53.1",
    Austin: "49.9"
  },
  {
    Date: "2011-11-19",
    "New York": "44.3",
    "San Francisco": "49.0",
    Austin: "71.7"
  },
  {
    Date: "2011-11-20",
    "New York": "54.0",
    "San Francisco": "50.4",
    Austin: "77.7"
  },
  {
    Date: "2011-11-21",
    "New York": "54.1",
    "San Francisco": "51.1",
    Austin: "76.4"
  },
  {
    Date: "2011-11-22",
    "New York": "49.4",
    "San Francisco": "52.3",
    Austin: "68.8"
  },
  {
    Date: "2011-11-23",
    "New York": "50.0",
    "San Francisco": "54.6",
    Austin: "57.0"
  },
  {
    Date: "2011-11-24",
    "New York": "44.0",
    "San Francisco": "55.1",
    Austin: "55.5"
  },
  {
    Date: "2011-11-25",
    "New York": "50.3",
    "San Francisco": "51.5",
    Austin: "61.6"
  },
  {
    Date: "2011-11-26",
    "New York": "52.1",
    "San Francisco": "53.6",
    Austin: "64.1"
  },
  {
    Date: "2011-11-27",
    "New York": "49.6",
    "San Francisco": "52.3",
    Austin: "51.1"
  },
  {
    Date: "2011-11-28",
    "New York": "57.2",
    "San Francisco": "51.0",
    Austin: "43.0"
  },
  {
    Date: "2011-11-29",
    "New York": "59.1",
    "San Francisco": "49.5",
    Austin: "46.4"
  },
  {
    Date: "2011-11-30",
    "New York": "50.6",
    "San Francisco": "49.8",
    Austin: "48.0"
  },
  {
    Date: "2011-12-01",
    "New York": "44.3",
    "San Francisco": "60.4",
    Austin: "48.1"
  },
  {
    Date: "2011-12-02",
    "New York": "43.9",
    "San Francisco": "62.2",
    Austin: "60.6"
  },
  {
    Date: "2011-12-03",
    "New York": "42.1",
    "San Francisco": "58.3",
    Austin: "62.6"
  },
  {
    Date: "2011-12-04",
    "New York": "43.9",
    "San Francisco": "52.7",
    Austin: "57.1"
  },
  {
    Date: "2011-12-05",
    "New York": "50.2",
    "San Francisco": "51.5",
    Austin: "44.2"
  },
  {
    Date: "2011-12-06",
    "New York": "54.2",
    "San Francisco": "49.9",
    Austin: "37.4"
  },
  {
    Date: "2011-12-07",
    "New York": "54.6",
    "San Francisco": "48.6",
    Austin: "35.0"
  },
  {
    Date: "2011-12-08",
    "New York": "43.4",
    "San Francisco": "46.4",
    Austin: "37.0"
  },
  {
    Date: "2011-12-09",
    "New York": "42.2",
    "San Francisco": "49.8",
    Austin: "45.4"
  },
  {
    Date: "2011-12-10",
    "New York": "45.0",
    "San Francisco": "52.1",
    Austin: "50.7"
  },
  {
    Date: "2011-12-11",
    "New York": "33.8",
    "San Francisco": "48.8",
    Austin: "48.6"
  },
  {
    Date: "2011-12-12",
    "New York": "36.8",
    "San Francisco": "47.4",
    Austin: "52.2"
  },
  {
    Date: "2011-12-13",
    "New York": "38.6",
    "San Francisco": "47.2",
    Austin: "60.8"
  },
  {
    Date: "2011-12-14",
    "New York": "41.9",
    "San Francisco": "46.1",
    Austin: "70.0"
  },
  {
    Date: "2011-12-15",
    "New York": "49.6",
    "San Francisco": "48.8",
    Austin: "64.2"
  },
  {
    Date: "2011-12-16",
    "New York": "50.2",
    "San Francisco": "47.9",
    Austin: "50.9"
  },
  {
    Date: "2011-12-17",
    "New York": "40.6",
    "San Francisco": "49.8",
    Austin: "51.6"
  },
  {
    Date: "2011-12-18",
    "New York": "29.1",
    "San Francisco": "49.1",
    Austin: "55.2"
  },
  {
    Date: "2011-12-19",
    "New York": "33.7",
    "San Francisco": "48.3",
    Austin: "62.1"
  },
  {
    Date: "2011-12-20",
    "New York": "45.8",
    "San Francisco": "49.3",
    Austin: "56.3"
  },
  {
    Date: "2011-12-21",
    "New York": "47.4",
    "San Francisco": "48.4",
    Austin: "47.2"
  },
  {
    Date: "2011-12-22",
    "New York": "54.4",
    "San Francisco": "53.3",
    Austin: "52.3"
  },
  {
    Date: "2011-12-23",
    "New York": "47.8",
    "San Francisco": "47.5",
    Austin: "45.2"
  },
  {
    Date: "2011-12-24",
    "New York": "34.9",
    "San Francisco": "47.9",
    Austin: "43.6"
  },
  {
    Date: "2011-12-25",
    "New York": "35.9",
    "San Francisco": "48.9",
    Austin: "42.9"
  },
  {
    Date: "2011-12-26",
    "New York": "43.6",
    "San Francisco": "45.9",
    Austin: "48.2"
  },
  {
    Date: "2011-12-27",
    "New York": "42.9",
    "San Francisco": "47.2",
    Austin: "45.4"
  },
  {
    Date: "2011-12-28",
    "New York": "46.2",
    "San Francisco": "48.9",
    Austin: "44.2"
  },
  {
    Date: "2011-12-29",
    "New York": "30.8",
    "San Francisco": "50.9",
    Austin: "50.4"
  },
  {
    Date: "2011-12-30",
    "New York": "40.8",
    "San Francisco": "52.9",
    Austin: "52.4"
  },
  {
    Date: "2011-12-31",
    "New York": "49.8",
    "San Francisco": "50.1",
    Austin: "53.5"
  },
  {
    Date: "2012-01-01",
    "New York": "46.3",
    "San Francisco": "53.9",
    Austin: "55.9"
  },
  {
    Date: "2012-01-02",
    "New York": "43.2",
    "San Francisco": "53.1",
    Austin: "48.2"
  },
  {
    Date: "2012-01-03",
    "New York": "30.3",
    "San Francisco": "49.7",
    Austin: "41.0"
  },
  {
    Date: "2012-01-04",
    "New York": "19.2",
    "San Francisco": "52.7",
    Austin: "48.9"
  },
  {
    Date: "2012-01-05",
    "New York": "32.1",
    "San Francisco": "52.6",
    Austin: "54.8"
  },
  {
    Date: "2012-01-06",
    "New York": "41.2",
    "San Francisco": "49.0",
    Austin: "61.2"
  },
  {
    Date: "2012-01-07",
    "New York": "47.0",
    "San Francisco": "51.0",
    Austin: "59.7"
  },
  {
    Date: "2012-01-08",
    "New York": "46.0",
    "San Francisco": "56.8",
    Austin: "52.5"
  },
  {
    Date: "2012-01-09",
    "New York": "34.7",
    "San Francisco": "52.3",
    Austin: "54.0"
  },
  {
    Date: "2012-01-10",
    "New York": "39.4",
    "San Francisco": "51.6",
    Austin: "47.7"
  },
  {
    Date: "2012-01-11",
    "New York": "40.4",
    "San Francisco": "49.8",
    Austin: "49.2"
  },
  {
    Date: "2012-01-12",
    "New York": "45.4",
    "San Francisco": "51.9",
    Austin: "48.4"
  },
  {
    Date: "2012-01-13",
    "New York": "40.7",
    "San Francisco": "53.7",
    Austin: "40.2"
  },
  {
    Date: "2012-01-14",
    "New York": "30.4",
    "San Francisco": "52.9",
    Austin: "43.9"
  },
  {
    Date: "2012-01-15",
    "New York": "23.9",
    "San Francisco": "49.7",
    Austin: "45.2"
  },
  {
    Date: "2012-01-16",
    "New York": "22.6",
    "San Francisco": "45.3",
    Austin: "65.0"
  },
  {
    Date: "2012-01-17",
    "New York": "39.8",
    "San Francisco": "43.6",
    Austin: "68.2"
  },
  {
    Date: "2012-01-18",
    "New York": "43.2",
    "San Francisco": "45.0",
    Austin: "47.5"
  },
  {
    Date: "2012-01-19",
    "New York": "26.3",
    "San Francisco": "47.3",
    Austin: "57.1"
  },
  {
    Date: "2012-01-20",
    "New York": "32.8",
    "San Francisco": "51.4",
    Austin: "61.9"
  },
  {
    Date: "2012-01-21",
    "New York": "27.4",
    "San Francisco": "53.7",
    Austin: "54.6"
  },
  {
    Date: "2012-01-22",
    "New York": "25.0",
    "San Francisco": "48.3",
    Austin: "56.7"
  },
  {
    Date: "2012-01-23",
    "New York": "39.4",
    "San Francisco": "52.9",
    Austin: "54.4"
  },
  {
    Date: "2012-01-24",
    "New York": "48.7",
    "San Francisco": "49.1",
    Austin: "52.7"
  },
  {
    Date: "2012-01-25",
    "New York": "43.0",
    "San Francisco": "52.1",
    Austin: "61.8"
  },
  {
    Date: "2012-01-26",
    "New York": "37.1",
    "San Francisco": "53.6",
    Austin: "55.0"
  },
  {
    Date: "2012-01-27",
    "New York": "48.2",
    "San Francisco": "50.4",
    Austin: "50.7"
  },
  {
    Date: "2012-01-28",
    "New York": "43.7",
    "San Francisco": "50.3",
    Austin: "52.9"
  },
  {
    Date: "2012-01-29",
    "New York": "40.1",
    "San Francisco": "53.8",
    Austin: "44.4"
  },
  {
    Date: "2012-01-30",
    "New York": "38.0",
    "San Francisco": "51.9",
    Austin: "49.1"
  },
  {
    Date: "2012-01-31",
    "New York": "43.5",
    "San Francisco": "50.0",
    Austin: "62.8"
  },
  {
    Date: "2012-02-01",
    "New York": "50.4",
    "San Francisco": "50.0",
    Austin: "64.6"
  },
  {
    Date: "2012-02-02",
    "New York": "45.8",
    "San Francisco": "51.3",
    Austin: "61.1"
  },
  {
    Date: "2012-02-03",
    "New York": "37.5",
    "San Francisco": "51.5",
    Austin: "70.0"
  },
  {
    Date: "2012-02-04",
    "New York": "40.8",
    "San Francisco": "52.0",
    Austin: "61.3"
  },
  {
    Date: "2012-02-05",
    "New York": "36.5",
    "San Francisco": "53.8",
    Austin: "48.2"
  },
  {
    Date: "2012-02-06",
    "New York": "39.1",
    "San Francisco": "54.6",
    Austin: "44.2"
  },
  {
    Date: "2012-02-07",
    "New York": "43.2",
    "San Francisco": "54.3",
    Austin: "51.3"
  },
  {
    Date: "2012-02-08",
    "New York": "36.5",
    "San Francisco": "51.9",
    Austin: "49.2"
  },
  {
    Date: "2012-02-09",
    "New York": "36.5",
    "San Francisco": "53.8",
    Austin: "45.7"
  },
  {
    Date: "2012-02-10",
    "New York": "38.3",
    "San Francisco": "53.9",
    Austin: "54.1"
  },
  {
    Date: "2012-02-11",
    "New York": "36.9",
    "San Francisco": "52.3",
    Austin: "44.9"
  },
  {
    Date: "2012-02-12",
    "New York": "29.7",
    "San Francisco": "50.1",
    Austin: "36.5"
  },
  {
    Date: "2012-02-13",
    "New York": "33.1",
    "San Francisco": "49.5",
    Austin: "44.8"
  },
  {
    Date: "2012-02-14",
    "New York": "39.6",
    "San Francisco": "48.6",
    Austin: "52.3"
  },
  {
    Date: "2012-02-15",
    "New York": "42.3",
    "San Francisco": "49.9",
    Austin: "68.0"
  },
  {
    Date: "2012-02-16",
    "New York": "39.7",
    "San Francisco": "52.4",
    Austin: "54.6"
  },
  {
    Date: "2012-02-17",
    "New York": "46.0",
    "San Francisco": "49.9",
    Austin: "53.8"
  },
  {
    Date: "2012-02-18",
    "New York": "41.2",
    "San Francisco": "51.6",
    Austin: "56.2"
  },
  {
    Date: "2012-02-19",
    "New York": "39.8",
    "San Francisco": "47.8",
    Austin: "50.8"
  },
  {
    Date: "2012-02-20",
    "New York": "38.1",
    "San Francisco": "48.7",
    Austin: "53.0"
  },
  {
    Date: "2012-02-21",
    "New York": "37.1",
    "San Francisco": "49.7",
    Austin: "61.0"
  },
  {
    Date: "2012-02-22",
    "New York": "45.5",
    "San Francisco": "53.4",
    Austin: "68.8"
  },
  {
    Date: "2012-02-23",
    "New York": "50.6",
    "San Francisco": "54.1",
    Austin: "69.4"
  },
  {
    Date: "2012-02-24",
    "New York": "42.7",
    "San Francisco": "55.9",
    Austin: "59.3"
  },
  {
    Date: "2012-02-25",
    "New York": "42.6",
    "San Francisco": "51.7",
    Austin: "47.2"
  },
  {
    Date: "2012-02-26",
    "New York": "36.9",
    "San Francisco": "47.7",
    Austin: "47.7"
  },
  {
    Date: "2012-02-27",
    "New York": "40.9",
    "San Francisco": "45.4",
    Austin: "61.9"
  },
  {
    Date: "2012-02-28",
    "New York": "45.9",
    "San Francisco": "47.0",
    Austin: "67.2"
  },
  {
    Date: "2012-02-29",
    "New York": "40.7",
    "San Francisco": "49.8",
    Austin: "70.1"
  },
  {
    Date: "2012-03-01",
    "New York": "41.3",
    "San Francisco": "48.9",
    Austin: "62.1"
  },
  {
    Date: "2012-03-02",
    "New York": "36.8",
    "San Francisco": "48.1",
    Austin: "72.7"
  },
  {
    Date: "2012-03-03",
    "New York": "47.6",
    "San Francisco": "50.7",
    Austin: "59.0"
  },
  {
    Date: "2012-03-04",
    "New York": "44.2",
    "San Francisco": "55.0",
    Austin: "51.8"
  },
  {
    Date: "2012-03-05",
    "New York": "38.5",
    "San Francisco": "48.8",
    Austin: "55.0"
  },
  {
    Date: "2012-03-06",
    "New York": "32.9",
    "San Francisco": "48.4",
    Austin: "61.8"
  },
  {
    Date: "2012-03-07",
    "New York": "43.3",
    "San Francisco": "49.9",
    Austin: "67.1"
  },
  {
    Date: "2012-03-08",
    "New York": "51.2",
    "San Francisco": "49.2",
    Austin: "72.0"
  },
  {
    Date: "2012-03-09",
    "New York": "47.8",
    "San Francisco": "51.7",
    Austin: "46.4"
  },
  {
    Date: "2012-03-10",
    "New York": "37.2",
    "San Francisco": "49.3",
    Austin: "46.7"
  },
  {
    Date: "2012-03-11",
    "New York": "42.9",
    "San Francisco": "50.0",
    Austin: "56.9"
  },
  {
    Date: "2012-03-12",
    "New York": "48.8",
    "San Francisco": "48.6",
    Austin: "61.9"
  },
  {
    Date: "2012-03-13",
    "New York": "52.6",
    "San Francisco": "53.9",
    Austin: "68.8"
  },
  {
    Date: "2012-03-14",
    "New York": "60.5",
    "San Francisco": "55.2",
    Austin: "71.9"
  },
  {
    Date: "2012-03-15",
    "New York": "47.2",
    "San Francisco": "55.9",
    Austin: "72.0"
  },
  {
    Date: "2012-03-16",
    "New York": "44.7",
    "San Francisco": "54.6",
    Austin: "72.5"
  },
  {
    Date: "2012-03-17",
    "New York": "48.2",
    "San Francisco": "48.2",
    Austin: "71.7"
  },
  {
    Date: "2012-03-18",
    "New York": "48.2",
    "San Francisco": "47.1",
    Austin: "71.1"
  },
  {
    Date: "2012-03-19",
    "New York": "53.1",
    "San Francisco": "45.8",
    Austin: "73.0"
  },
  {
    Date: "2012-03-20",
    "New York": "57.8",
    "San Francisco": "49.7",
    Austin: "63.8"
  },
  {
    Date: "2012-03-21",
    "New York": "57.5",
    "San Francisco": "51.4",
    Austin: "60.0"
  },
  {
    Date: "2012-03-22",
    "New York": "57.3",
    "San Francisco": "51.4",
    Austin: "62.3"
  },
  {
    Date: "2012-03-23",
    "New York": "61.7",
    "San Francisco": "48.4",
    Austin: "61.1"
  },
  {
    Date: "2012-03-24",
    "New York": "55.8",
    "San Francisco": "49.0",
    Austin: "62.0"
  },
  {
    Date: "2012-03-25",
    "New York": "48.4",
    "San Francisco": "46.4",
    Austin: "64.6"
  },
  {
    Date: "2012-03-26",
    "New York": "49.8",
    "San Francisco": "49.7",
    Austin: "66.0"
  },
  {
    Date: "2012-03-27",
    "New York": "39.6",
    "San Francisco": "54.1",
    Austin: "65.8"
  },
  {
    Date: "2012-03-28",
    "New York": "49.7",
    "San Francisco": "54.6",
    Austin: "69.2"
  },
  {
    Date: "2012-03-29",
    "New York": "56.8",
    "San Francisco": "52.3",
    Austin: "69.5"
  },
  {
    Date: "2012-03-30",
    "New York": "46.5",
    "San Francisco": "54.5",
    Austin: "73.5"
  },
  {
    Date: "2012-03-31",
    "New York": "42.2",
    "San Francisco": "56.2",
    Austin: "73.9"
  },
  {
    Date: "2012-04-01",
    "New York": "45.3",
    "San Francisco": "51.1",
    Austin: "75.3"
  },
  {
    Date: "2012-04-02",
    "New York": "48.1",
    "San Francisco": "50.5",
    Austin: "75.4"
  },
  {
    Date: "2012-04-03",
    "New York": "51.2",
    "San Francisco": "52.2",
    Austin: "77.3"
  },
  {
    Date: "2012-04-04",
    "New York": "61.0",
    "San Francisco": "50.6",
    Austin: "67.0"
  },
  {
    Date: "2012-04-05",
    "New York": "50.7",
    "San Francisco": "47.9",
    Austin: "71.1"
  },
  {
    Date: "2012-04-06",
    "New York": "48.0",
    "San Francisco": "47.4",
    Austin: "70.4"
  },
  {
    Date: "2012-04-07",
    "New York": "51.1",
    "San Francisco": "49.4",
    Austin: "73.6"
  },
  {
    Date: "2012-04-08",
    "New York": "55.7",
    "San Francisco": "50.0",
    Austin: "71.1"
  },
  {
    Date: "2012-04-09",
    "New York": "58.3",
    "San Francisco": "51.3",
    Austin: "70.0"
  },
  {
    Date: "2012-04-10",
    "New York": "55.0",
    "San Francisco": "53.8",
    Austin: "69.0"
  },
  {
    Date: "2012-04-11",
    "New York": "49.0",
    "San Francisco": "52.9",
    Austin: "69.2"
  },
  {
    Date: "2012-04-12",
    "New York": "51.7",
    "San Francisco": "53.9",
    Austin: "74.5"
  },
  {
    Date: "2012-04-13",
    "New York": "53.1",
    "San Francisco": "50.2",
    Austin: "73.4"
  },
  {
    Date: "2012-04-14",
    "New York": "55.2",
    "San Francisco": "50.9",
    Austin: "76.0"
  },
  {
    Date: "2012-04-15",
    "New York": "62.3",
    "San Francisco": "51.5",
    Austin: "74.5"
  },
  {
    Date: "2012-04-16",
    "New York": "62.9",
    "San Francisco": "51.9",
    Austin: "63.6"
  },
  {
    Date: "2012-04-17",
    "New York": "69.3",
    "San Francisco": "53.2",
    Austin: "67.3"
  },
  {
    Date: "2012-04-18",
    "New York": "59.0",
    "San Francisco": "53.0",
    Austin: "65.1"
  },
  {
    Date: "2012-04-19",
    "New York": "54.1",
    "San Francisco": "55.1",
    Austin: "67.9"
  },
  {
    Date: "2012-04-20",
    "New York": "56.5",
    "San Francisco": "55.8",
    Austin: "68.9"
  },
  {
    Date: "2012-04-21",
    "New York": "58.2",
    "San Francisco": "58.0",
    Austin: "65.1"
  },
  {
    Date: "2012-04-22",
    "New York": "52.4",
    "San Francisco": "52.8",
    Austin: "65.4"
  },
  {
    Date: "2012-04-23",
    "New York": "51.6",
    "San Francisco": "55.1",
    Austin: "70.1"
  },
  {
    Date: "2012-04-24",
    "New York": "49.3",
    "San Francisco": "57.9",
    Austin: "67.0"
  },
  {
    Date: "2012-04-25",
    "New York": "52.5",
    "San Francisco": "57.5",
    Austin: "75.4"
  },
  {
    Date: "2012-04-26",
    "New York": "50.5",
    "San Francisco": "55.3",
    Austin: "77.5"
  },
  {
    Date: "2012-04-27",
    "New York": "51.9",
    "San Francisco": "53.5",
    Austin: "77.0"
  },
  {
    Date: "2012-04-28",
    "New York": "47.4",
    "San Francisco": "54.7",
    Austin: "77.7"
  },
  {
    Date: "2012-04-29",
    "New York": "54.1",
    "San Francisco": "54.0",
    Austin: "77.7"
  },
  {
    Date: "2012-04-30",
    "New York": "51.9",
    "San Francisco": "53.4",
    Austin: "77.7"
  },
  {
    Date: "2012-05-01",
    "New York": "57.4",
    "San Francisco": "52.7",
    Austin: "77.0"
  },
  {
    Date: "2012-05-02",
    "New York": "53.7",
    "San Francisco": "50.7",
    Austin: "77.9"
  },
  {
    Date: "2012-05-03",
    "New York": "53.1",
    "San Francisco": "52.6",
    Austin: "79.1"
  },
  {
    Date: "2012-05-04",
    "New York": "57.2",
    "San Francisco": "53.4",
    Austin: "80.1"
  },
  {
    Date: "2012-05-05",
    "New York": "57.0",
    "San Francisco": "53.1",
    Austin: "82.1"
  },
  {
    Date: "2012-05-06",
    "New York": "56.6",
    "San Francisco": "56.5",
    Austin: "79.0"
  },
  {
    Date: "2012-05-07",
    "New York": "54.6",
    "San Francisco": "55.3",
    Austin: "79.8"
  },
  {
    Date: "2012-05-08",
    "New York": "57.9",
    "San Francisco": "52.0",
    Austin: "70.0"
  },
  {
    Date: "2012-05-09",
    "New York": "59.2",
    "San Francisco": "52.4",
    Austin: "69.8"
  },
  {
    Date: "2012-05-10",
    "New York": "61.1",
    "San Francisco": "53.4",
    Austin: "71.3"
  },
  {
    Date: "2012-05-11",
    "New York": "59.7",
    "San Francisco": "53.1",
    Austin: "69.4"
  },
  {
    Date: "2012-05-12",
    "New York": "64.1",
    "San Francisco": "49.9",
    Austin: "72.0"
  },
  {
    Date: "2012-05-13",
    "New York": "65.3",
    "San Francisco": "52.0",
    Austin: "72.4"
  },
  {
    Date: "2012-05-14",
    "New York": "64.2",
    "San Francisco": "56.0",
    Austin: "72.5"
  },
  {
    Date: "2012-05-15",
    "New York": "62.0",
    "San Francisco": "53.0",
    Austin: "67.6"
  },
  {
    Date: "2012-05-16",
    "New York": "63.8",
    "San Francisco": "51.0",
    Austin: "69.0"
  },
  {
    Date: "2012-05-17",
    "New York": "64.5",
    "San Francisco": "51.4",
    Austin: "72.7"
  },
  {
    Date: "2012-05-18",
    "New York": "61.0",
    "San Francisco": "52.2",
    Austin: "73.7"
  },
  {
    Date: "2012-05-19",
    "New York": "62.6",
    "San Francisco": "52.4",
    Austin: "77.5"
  },
  {
    Date: "2012-05-20",
    "New York": "66.2",
    "San Francisco": "54.5",
    Austin: "75.8"
  },
  {
    Date: "2012-05-21",
    "New York": "62.7",
    "San Francisco": "52.8",
    Austin: "76.9"
  },
  {
    Date: "2012-05-22",
    "New York": "63.7",
    "San Francisco": "53.9",
    Austin: "78.8"
  },
  {
    Date: "2012-05-23",
    "New York": "66.4",
    "San Francisco": "56.5",
    Austin: "77.7"
  },
  {
    Date: "2012-05-24",
    "New York": "64.5",
    "San Francisco": "54.7",
    Austin: "80.6"
  },
  {
    Date: "2012-05-25",
    "New York": "65.4",
    "San Francisco": "52.5",
    Austin: "81.4"
  },
  {
    Date: "2012-05-26",
    "New York": "69.4",
    "San Francisco": "52.1",
    Austin: "82.3"
  },
  {
    Date: "2012-05-27",
    "New York": "71.9",
    "San Francisco": "52.2",
    Austin: "80.3"
  },
  {
    Date: "2012-05-28",
    "New York": "74.4",
    "San Francisco": "52.9",
    Austin: "80.3"
  },
  {
    Date: "2012-05-29",
    "New York": "75.9",
    "San Francisco": "52.1",
    Austin: "82.2"
  },
  {
    Date: "2012-05-30",
    "New York": "72.9",
    "San Francisco": "52.1",
    Austin: "81.9"
  },
  {
    Date: "2012-05-31",
    "New York": "72.5",
    "San Francisco": "53.3",
    Austin: "82.4"
  },
  {
    Date: "2012-06-01",
    "New York": "67.2",
    "San Francisco": "54.8",
    Austin: "77.9"
  },
  {
    Date: "2012-06-02",
    "New York": "68.3",
    "San Francisco": "54.0",
    Austin: "81.1"
  },
  {
    Date: "2012-06-03",
    "New York": "67.7",
    "San Francisco": "52.3",
    Austin: "82.2"
  },
  {
    Date: "2012-06-04",
    "New York": "61.9",
    "San Francisco": "55.3",
    Austin: "81.2"
  },
  {
    Date: "2012-06-05",
    "New York": "58.3",
    "San Francisco": "53.5",
    Austin: "83.0"
  },
  {
    Date: "2012-06-06",
    "New York": "61.7",
    "San Francisco": "54.1",
    Austin: "83.2"
  },
  {
    Date: "2012-06-07",
    "New York": "66.7",
    "San Francisco": "53.9",
    Austin: "82.1"
  },
  {
    Date: "2012-06-08",
    "New York": "68.7",
    "San Francisco": "54.4",
    Austin: "77.5"
  },
  {
    Date: "2012-06-09",
    "New York": "72.2",
    "San Francisco": "55.0",
    Austin: "77.9"
  },
  {
    Date: "2012-06-10",
    "New York": "72.6",
    "San Francisco": "60.0",
    Austin: "82.9"
  },
  {
    Date: "2012-06-11",
    "New York": "69.2",
    "San Francisco": "57.2",
    Austin: "86.8"
  },
  {
    Date: "2012-06-12",
    "New York": "66.9",
    "San Francisco": "55.1",
    Austin: "85.3"
  },
  {
    Date: "2012-06-13",
    "New York": "66.7",
    "San Francisco": "53.3",
    Austin: "76.9"
  },
  {
    Date: "2012-06-14",
    "New York": "67.7",
    "San Francisco": "53.4",
    Austin: "84.5"
  },
  {
    Date: "2012-06-15",
    "New York": "68.5",
    "San Francisco": "54.6",
    Austin: "84.4"
  },
  {
    Date: "2012-06-16",
    "New York": "67.5",
    "San Francisco": "57.0",
    Austin: "83.8"
  },
  {
    Date: "2012-06-17",
    "New York": "64.2",
    "San Francisco": "55.6",
    Austin: "82.5"
  },
  {
    Date: "2012-06-18",
    "New York": "61.7",
    "San Francisco": "52.5",
    Austin: "82.9"
  },
  {
    Date: "2012-06-19",
    "New York": "66.4",
    "San Francisco": "53.9",
    Austin: "82.5"
  },
  {
    Date: "2012-06-20",
    "New York": "77.9",
    "San Francisco": "55.3",
    Austin: "81.3"
  },
  {
    Date: "2012-06-21",
    "New York": "88.3",
    "San Francisco": "53.3",
    Austin: "80.8"
  },
  {
    Date: "2012-06-22",
    "New York": "82.2",
    "San Francisco": "54.1",
    Austin: "81.7"
  },
  {
    Date: "2012-06-23",
    "New York": "77.0",
    "San Francisco": "55.2",
    Austin: "83.9"
  },
  {
    Date: "2012-06-24",
    "New York": "75.4",
    "San Francisco": "55.8",
    Austin: "85.5"
  },
  {
    Date: "2012-06-25",
    "New York": "70.9",
    "San Francisco": "56.8",
    Austin: "87.2"
  },
  {
    Date: "2012-06-26",
    "New York": "65.9",
    "San Francisco": "57.5",
    Austin: "88.0"
  },
  {
    Date: "2012-06-27",
    "New York": "73.5",
    "San Francisco": "57.7",
    Austin: "89.6"
  },
  {
    Date: "2012-06-28",
    "New York": "77.4",
    "San Francisco": "56.6",
    Austin: "86.7"
  },
  {
    Date: "2012-06-29",
    "New York": "79.6",
    "San Francisco": "56.4",
    Austin: "85.3"
  },
  {
    Date: "2012-06-30",
    "New York": "84.2",
    "San Francisco": "58.4",
    Austin: "81.7"
  },
  {
    Date: "2012-07-01",
    "New York": "81.8",
    "San Francisco": "58.8",
    Austin: "78.5"
  },
  {
    Date: "2012-07-02",
    "New York": "82.5",
    "San Francisco": "56.4",
    Austin: "83.1"
  },
  {
    Date: "2012-07-03",
    "New York": "80.2",
    "San Francisco": "56.5",
    Austin: "83.1"
  },
  {
    Date: "2012-07-04",
    "New York": "77.8",
    "San Francisco": "55.8",
    Austin: "84.5"
  },
  {
    Date: "2012-07-05",
    "New York": "86.1",
    "San Francisco": "54.8",
    Austin: "84.6"
  },
  {
    Date: "2012-07-06",
    "New York": "79.9",
    "San Francisco": "54.9",
    Austin: "84.2"
  },
  {
    Date: "2012-07-07",
    "New York": "83.5",
    "San Francisco": "54.7",
    Austin: "86.7"
  },
  {
    Date: "2012-07-08",
    "New York": "81.5",
    "San Francisco": "52.8",
    Austin: "84.3"
  },
  {
    Date: "2012-07-09",
    "New York": "77.8",
    "San Francisco": "53.7",
    Austin: "83.7"
  },
  {
    Date: "2012-07-10",
    "New York": "76.1",
    "San Francisco": "53.1",
    Austin: "77.1"
  },
  {
    Date: "2012-07-11",
    "New York": "76.3",
    "San Francisco": "52.7",
    Austin: "77.4"
  },
  {
    Date: "2012-07-12",
    "New York": "75.8",
    "San Francisco": "52.0",
    Austin: "80.6"
  },
  {
    Date: "2012-07-13",
    "New York": "77.2",
    "San Francisco": "53.4",
    Austin: "81.4"
  },
  {
    Date: "2012-07-14",
    "New York": "79.3",
    "San Francisco": "54.0",
    Austin: "80.2"
  },
  {
    Date: "2012-07-15",
    "New York": "78.9",
    "San Francisco": "54.0",
    Austin: "81.8"
  },
  {
    Date: "2012-07-16",
    "New York": "79.6",
    "San Francisco": "54.5",
    Austin: "77.3"
  },
  {
    Date: "2012-07-17",
    "New York": "83.3",
    "San Francisco": "56.7",
    Austin: "80.8"
  },
  {
    Date: "2012-07-18",
    "New York": "84.3",
    "San Francisco": "57.5",
    Austin: "81.6"
  },
  {
    Date: "2012-07-19",
    "New York": "75.1",
    "San Francisco": "57.1",
    Austin: "80.9"
  },
  {
    Date: "2012-07-20",
    "New York": "68.4",
    "San Francisco": "58.1",
    Austin: "83.9"
  },
  {
    Date: "2012-07-21",
    "New York": "68.4",
    "San Francisco": "57.6",
    Austin: "85.6"
  },
  {
    Date: "2012-07-22",
    "New York": "72.2",
    "San Francisco": "56.0",
    Austin: "83.6"
  },
  {
    Date: "2012-07-23",
    "New York": "75.6",
    "San Francisco": "56.6",
    Austin: "84.0"
  },
  {
    Date: "2012-07-24",
    "New York": "82.6",
    "San Francisco": "57.8",
    Austin: "83.0"
  },
  {
    Date: "2012-07-25",
    "New York": "78.4",
    "San Francisco": "57.5",
    Austin: "84.8"
  },
  {
    Date: "2012-07-26",
    "New York": "77.0",
    "San Francisco": "56.4",
    Austin: "84.4"
  },
  {
    Date: "2012-07-27",
    "New York": "79.4",
    "San Francisco": "55.3",
    Austin: "84.3"
  },
  {
    Date: "2012-07-28",
    "New York": "77.4",
    "San Francisco": "55.0",
    Austin: "83.9"
  },
  {
    Date: "2012-07-29",
    "New York": "72.5",
    "San Francisco": "55.6",
    Austin: "85.0"
  },
  {
    Date: "2012-07-30",
    "New York": "72.9",
    "San Francisco": "55.6",
    Austin: "84.9"
  },
  {
    Date: "2012-07-31",
    "New York": "73.6",
    "San Francisco": "55.9",
    Austin: "86.3"
  },
  {
    Date: "2012-08-01",
    "New York": "75.0",
    "San Francisco": "55.4",
    Austin: "86.5"
  },
  {
    Date: "2012-08-02",
    "New York": "77.7",
    "San Francisco": "54.4",
    Austin: "85.8"
  },
  {
    Date: "2012-08-03",
    "New York": "79.7",
    "San Francisco": "53.7",
    Austin: "85.3"
  },
  {
    Date: "2012-08-04",
    "New York": "79.6",
    "San Francisco": "54.1",
    Austin: "86.0"
  },
  {
    Date: "2012-08-05",
    "New York": "81.5",
    "San Francisco": "57.8",
    Austin: "84.2"
  },
  {
    Date: "2012-08-06",
    "New York": "80.0",
    "San Francisco": "58.2",
    Austin: "81.9"
  },
  {
    Date: "2012-08-07",
    "New York": "75.7",
    "San Francisco": "58.0",
    Austin: "86.5"
  },
  {
    Date: "2012-08-08",
    "New York": "77.8",
    "San Francisco": "57.0",
    Austin: "86.1"
  },
  {
    Date: "2012-08-09",
    "New York": "78.6",
    "San Francisco": "55.0",
    Austin: "86.8"
  },
  {
    Date: "2012-08-10",
    "New York": "77.8",
    "San Francisco": "54.8",
    Austin: "88.0"
  },
  {
    Date: "2012-08-11",
    "New York": "78.5",
    "San Francisco": "53.0",
    Austin: "85.1"
  },
  {
    Date: "2012-08-12",
    "New York": "78.8",
    "San Francisco": "52.5",
    Austin: "87.4"
  },
  {
    Date: "2012-08-13",
    "New York": "78.6",
    "San Francisco": "53.3",
    Austin: "88.0"
  },
  {
    Date: "2012-08-14",
    "New York": "76.8",
    "San Francisco": "53.9",
    Austin: "88.0"
  },
  {
    Date: "2012-08-15",
    "New York": "76.7",
    "San Francisco": "56.2",
    Austin: "87.2"
  },
  {
    Date: "2012-08-16",
    "New York": "75.9",
    "San Francisco": "57.1",
    Austin: "86.1"
  },
  {
    Date: "2012-08-17",
    "New York": "77.6",
    "San Francisco": "55.3",
    Austin: "86.8"
  },
  {
    Date: "2012-08-18",
    "New York": "72.6",
    "San Francisco": "56.2",
    Austin: "84.9"
  },
  {
    Date: "2012-08-19",
    "New York": "70.4",
    "San Francisco": "54.3",
    Austin: "76.8"
  },
  {
    Date: "2012-08-20",
    "New York": "71.8",
    "San Francisco": "53.1",
    Austin: "80.6"
  },
  {
    Date: "2012-08-21",
    "New York": "73.6",
    "San Francisco": "53.4",
    Austin: "80.0"
  },
  {
    Date: "2012-08-22",
    "New York": "74.7",
    "San Francisco": "54.5",
    Austin: "78.2"
  },
  {
    Date: "2012-08-23",
    "New York": "74.6",
    "San Francisco": "55.7",
    Austin: "79.1"
  },
  {
    Date: "2012-08-24",
    "New York": "76.0",
    "San Francisco": "54.8",
    Austin: "81.9"
  },
  {
    Date: "2012-08-25",
    "New York": "76.2",
    "San Francisco": "53.8",
    Austin: "84.7"
  },
  {
    Date: "2012-08-26",
    "New York": "73.4",
    "San Francisco": "56.5",
    Austin: "83.5"
  },
  {
    Date: "2012-08-27",
    "New York": "74.6",
    "San Francisco": "58.3",
    Austin: "82.1"
  },
  {
    Date: "2012-08-28",
    "New York": "79.4",
    "San Francisco": "58.7",
    Austin: "84.0"
  },
  {
    Date: "2012-08-29",
    "New York": "74.7",
    "San Francisco": "57.5",
    Austin: "85.7"
  },
  {
    Date: "2012-08-30",
    "New York": "73.5",
    "San Francisco": "55.9",
    Austin: "87.2"
  },
  {
    Date: "2012-08-31",
    "New York": "77.9",
    "San Francisco": "55.4",
    Austin: "82.9"
  },
  {
    Date: "2012-09-01",
    "New York": "80.7",
    "San Francisco": "55.7",
    Austin: "84.8"
  },
  {
    Date: "2012-09-02",
    "New York": "75.1",
    "San Francisco": "53.1",
    Austin: "83.9"
  },
  {
    Date: "2012-09-03",
    "New York": "73.5",
    "San Francisco": "53.5",
    Austin: "85.5"
  },
  {
    Date: "2012-09-04",
    "New York": "73.5",
    "San Francisco": "52.5",
    Austin: "86.4"
  },
  {
    Date: "2012-09-05",
    "New York": "77.7",
    "San Francisco": "54.5",
    Austin: "85.8"
  },
  {
    Date: "2012-09-06",
    "New York": "74.2",
    "San Francisco": "56.3",
    Austin: "85.4"
  },
  {
    Date: "2012-09-07",
    "New York": "76.0",
    "San Francisco": "56.4",
    Austin: "85.3"
  },
  {
    Date: "2012-09-08",
    "New York": "77.1",
    "San Francisco": "56.5",
    Austin: "81.9"
  },
  {
    Date: "2012-09-09",
    "New York": "69.7",
    "San Francisco": "56.4",
    Austin: "74.8"
  },
  {
    Date: "2012-09-10",
    "New York": "67.8",
    "San Francisco": "55.4",
    Austin: "71.6"
  },
  {
    Date: "2012-09-11",
    "New York": "64.0",
    "San Francisco": "56.2",
    Austin: "75.9"
  },
  {
    Date: "2012-09-12",
    "New York": "68.1",
    "San Francisco": "55.7",
    Austin: "82.1"
  },
  {
    Date: "2012-09-13",
    "New York": "69.3",
    "San Francisco": "54.3",
    Austin: "80.5"
  },
  {
    Date: "2012-09-14",
    "New York": "70.0",
    "San Francisco": "55.2",
    Austin: "70.0"
  },
  {
    Date: "2012-09-15",
    "New York": "69.3",
    "San Francisco": "54.3",
    Austin: "71.2"
  },
  {
    Date: "2012-09-16",
    "New York": "66.3",
    "San Francisco": "52.9",
    Austin: "70.3"
  },
  {
    Date: "2012-09-17",
    "New York": "67.0",
    "San Francisco": "54.8",
    Austin: "72.1"
  },
  {
    Date: "2012-09-18",
    "New York": "72.8",
    "San Francisco": "54.8",
    Austin: "73.7"
  },
  {
    Date: "2012-09-19",
    "New York": "67.2",
    "San Francisco": "56.8",
    Austin: "72.7"
  },
  {
    Date: "2012-09-20",
    "New York": "62.1",
    "San Francisco": "55.4",
    Austin: "71.7"
  },
  {
    Date: "2012-09-21",
    "New York": "64.0",
    "San Francisco": "55.8",
    Austin: "72.9"
  },
  {
    Date: "2012-09-22",
    "New York": "65.5",
    "San Francisco": "55.9",
    Austin: "73.1"
  },
  {
    Date: "2012-09-23",
    "New York": "65.7",
    "San Francisco": "52.8",
    Austin: "75.6"
  },
  {
    Date: "2012-09-24",
    "New York": "60.4",
    "San Francisco": "54.5",
    Austin: "78.3"
  },
  {
    Date: "2012-09-25",
    "New York": "63.2",
    "San Francisco": "53.3",
    Austin: "78.3"
  },
  {
    Date: "2012-09-26",
    "New York": "68.5",
    "San Francisco": "53.6",
    Austin: "79.6"
  },
  {
    Date: "2012-09-27",
    "New York": "69.2",
    "San Francisco": "52.1",
    Austin: "76.4"
  },
  {
    Date: "2012-09-28",
    "New York": "68.7",
    "San Francisco": "52.6",
    Austin: "77.2"
  },
  {
    Date: "2012-09-29",
    "New York": "62.5",
    "San Francisco": "53.9",
    Austin: "75.2"
  },
  {
    Date: "2012-09-30",
    "New York": "62.3",
    "San Francisco": "55.1",
    Austin: "71.9"
  }
], Ji = "Area Chart", Xi = "This example shows a bar chart created in the visualization editor in WCMS", es = "0", as = 4.23, ts = 0, os = "4.24.10", ns = {
  annotations: Un,
  type: qn,
  debugSvg: Kn,
  chartMessage: Wn,
  title: Gn,
  showTitle: Qn,
  showDownloadMediaButton: jn,
  theme: Zn,
  animate: Jn,
  fontSize: Xn,
  lineDatapointStyle: ei,
  lineDatapointColor: ai,
  barHasBorder: ti,
  isLollipopChart: oi,
  lollipopShape: ni,
  lollipopColorStyle: ii,
  visualizationSubType: si,
  barStyle: ri,
  roundingStyle: ci,
  tipRounding: li,
  isResponsiveTicks: ui,
  general: di,
  padding: pi,
  preliminaryData: wi,
  yAxis: Si,
  boxplot: mi,
  topAxis: hi,
  isLegendValue: ki,
  barThickness: Di,
  barHeight: fi,
  barSpace: gi,
  heights: Ai,
  xAxis: Fi,
  table: Ni,
  orientation: Yi,
  color: bi,
  columns: yi,
  legend: Li,
  brush: Ti,
  exclusions: $i,
  palette: xi,
  isPaletteReversed: vi,
  twoColor: Ci,
  labels: Ri,
  dataFormat: Mi,
  confidenceKeys: Pi,
  visual: Bi,
  useLogScale: _i,
  filterBehavior: Vi,
  highlightedBarValues: Hi,
  series: zi,
  tooltips: Oi,
  forestPlot: Ii,
  area: Ei,
  sankey: Ui,
  showChartBrush: qi,
  dataDescription: Ki,
  dataFileName: Wi,
  dataFileSourceType: Gi,
  formattedData: Qi,
  height: ji,
  data: Zi,
  visualizationType: Ji,
  description: Xi,
  dataCutoff: es,
  validated: as,
  dynamicMarginTop: ts,
  version: os
}, is = [], ss = "chart", rs = !1, cs = {
  noData: "No Data Available"
}, ls = "", us = !0, ds = !1, ps = "theme-blue", ws = !1, Ss = "medium", ms = "hover", hs = "Same as Line", ks = "false", Ds = !1, fs = "circle", gs = "two-tone", As = "regular", Fs = "flat", Ns = "standard", Ys = "top", bs = !1, ys = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  showZeroValueData: !0,
  hideNullValue: !0,
  showAnnotationDropdown: !1
}, Ls = {
  left: 5,
  right: 5
}, Ts = [], $s = {
  hideAxis: !0,
  displayNumbersOnBar: !1,
  hideLabel: !1,
  hideTicks: !0,
  size: "50",
  gridLines: !0,
  enablePadding: !0,
  min: "0",
  max: "99",
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
  numTicks: "5",
  axisPadding: 0,
  scalePadding: 10,
  tickRotation: 0,
  anchors: [],
  shoMissingDataLabel: !0,
  showMissingDataLine: !0,
  categories: [],
  label: "",
  maxValue: 108.9
}, xs = {
  plots: [],
  borders: "true",
  plotOutlierValues: !1,
  plotNonOutlierValues: !0,
  labels: {
    q1: "Lower Quartile",
    q2: "q2",
    q3: "Upper Quartile",
    q4: "q4",
    minimum: "Minimum",
    maximum: "Maximum",
    mean: "Mean",
    median: "Median",
    sd: "Standard Deviation",
    iqr: "Interquartile Range",
    total: "Total",
    outliers: "Outliers",
    values: "Values",
    lowerBounds: "Lower Bounds",
    upperBounds: "Upper Bounds"
  },
  firstQuartilePercentage: 25,
  thirdQuartilePercentage: 75,
  boxWidthPercentage: 40,
  legend: {
    showHowToReadText: !1,
    howToReadText: ""
  }
}, vs = {
  hasLine: !1
}, Cs = !1, Rs = 0.35, Ms = 25, Ps = 15, Bs = {
  vertical: "250",
  horizontal: 750,
  mobileVertical: "150"
}, _s = {
  sortDates: !1,
  anchors: [],
  type: "date-time",
  showTargetLabel: !0,
  targetLabel: "Target",
  hideAxis: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: "0",
  tickRotation: 0,
  min: "",
  max: "",
  labelColor: "#333",
  tickLabelColor: "#333",
  tickColor: "#333",
  numTicks: "6",
  labelOffset: 0,
  axisPadding: 200,
  target: 0,
  maxTickRotation: "45",
  padding: "0",
  showYearsOnce: !1,
  sortByRecentDate: !1,
  dataKey: "week_end",
  label: "",
  dateParseFormat: "%Y-%m-%d",
  dateDisplayFormat: "%b. %-d %Y",
  axisBBox: 24.939998626708984,
  tickWidthMax: 108,
  viewportNumTicks: {
    xxs: "4"
  },
  manual: !0
}, Vs = {
  label: "Data Table",
  expanded: !1,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  showDownloadLinkBelow: !0,
  indexLabel: "Week Ending",
  download: !0,
  showVertical: !0,
  dateDisplayFormat: "",
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  show: !0
}, Hs = "vertical", zs = "pinkpurple", Os = {}, Is = {
  hide: !1,
  behavior: "isolate",
  axisAlign: !0,
  singleRow: !0,
  colorCode: "",
  reverseLabelOrder: !1,
  description: "",
  dynamicLegend: !1,
  dynamicLegendDefaultText: "Show All",
  dynamicLegendItemLimit: 5,
  dynamicLegendItemLimitMessage: "Dynamic Legend Item Limit Hit.",
  dynamicLegendChartMessage: "Select Options from the Legend",
  label: "",
  lineMode: !1,
  verticalSorted: !1,
  highlightOnHover: !1,
  hideSuppressedLabels: !1,
  hideSuppressionLink: !1,
  seriesHighlight: [],
  style: "lines",
  subStyle: "linear blocks",
  tickRotation: "",
  hideBorder: {
    side: !1,
    topBottom: !0
  },
  position: "bottom"
}, Es = {
  height: 25,
  active: !1
}, Us = {
  active: !1,
  keys: []
}, qs = "qualitative-bold", Ks = !1, Ws = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, Gs = !1, Qs = {
  commas: !0,
  prefix: "",
  suffix: " percent vaccinated",
  abbreviated: !0,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1,
  roundTo: "1",
  onlyShowTopPrefixSuffix: !0
}, js = {}, Zs = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !0,
  horizontalHoverLine: !1
}, Js = !1, Xs = "Filter Change", er = [], ar = [
  {
    dataKey: "Adults",
    type: "Line",
    axis: "Left",
    tooltip: !0,
    name: "Adults (18+)"
  },
  {
    dataKey: "Children",
    type: "dashed-md",
    axis: "Left",
    tooltip: !0,
    name: "Children (under 18)"
  }
], tr = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: "%B %-d, %Y"
}, or = {
  startAt: 0,
  colors: {
    line: "",
    shape: ""
  },
  lineOfNoEffect: {
    show: !0
  },
  type: "",
  pooledResult: {
    diamondHeight: 5,
    column: ""
  },
  estimateField: "",
  estimateRadius: "",
  shape: "square",
  rowHeight: 20,
  description: {
    show: !0,
    text: "description",
    location: 0
  },
  result: {
    show: !0,
    text: "result",
    location: 100
  },
  radius: {
    min: 2,
    max: 10,
    scalingColumn: ""
  },
  regression: {
    lower: 0,
    upper: 0,
    estimateField: 0
  },
  leftWidthOffset: 0,
  rightWidthOffset: 0,
  showZeroLine: !1,
  leftLabel: "",
  rightLabel: ""
}, nr = {
  isStacked: !1
}, ir = {
  title: {
    defaultColor: "black"
  },
  iterations: 1,
  rxValue: 0.9,
  overallSize: {
    width: 900,
    height: 700
  },
  margin: {
    margin_y: 25,
    margin_x: 0
  },
  nodeSize: {
    nodeWidth: 26,
    nodeHeight: 40
  },
  nodePadding: 55,
  nodeFontColor: "black",
  nodeColor: {
    default: "#ff8500",
    inactive: "#808080"
  },
  linkColor: {
    default: "#ffc900",
    inactive: "#D3D3D3"
  },
  opacity: {
    nodeOpacityDefault: 1,
    nodeOpacityInactive: 0.1,
    LinkOpacityDefault: 1,
    LinkOpacityInactive: 0.1
  },
  storyNodeFontColor: "#006778",
  storyNodeText: [],
  nodeValueStyle: {
    textBefore: "(",
    textAfter: ")"
  },
  data: []
}, sr = "Line", rr = [
  "#f06f19",
  "#f06f19",
  "#f06f19",
  "#000000",
  "#0A6C75",
  "#C0F2FD",
  "#C0F2FD",
  "#C0F2FD",
  "#C0F2FD"
], cr = "/wcms/vizdata/Respitory_Viruses/NISVaccinationsCumulative7a.json", lr = "url", ur = "https://www.cdc.gov/wcms/vizdata/Respitory_Viruses/NISVaccinationsCumulative7a.json", dr = {
  horizontal: !1,
  series: !0,
  singleRow: !1,
  xKey: "week_end",
  valueKeysTallSupport: [
    "value"
  ],
  ignoredKeys: [
    "suppression_flag",
    "95_confidence_interval_lower",
    "95_confidence_interval_upper",
    "95_confidence_internal_range"
  ],
  seriesKey: "demographic_group"
}, pr = "4.24.10", wr = '<div class="text-left"><p class="fnote">95% confidence intervals for the point estimates are presented at the data.cdc.gov link below.<br><br> Data last updated on <span data-timestamp="NISVaccinationsCumulative7a:Data_as_of"></span> and presented through <span data-timestamp="NISVaccinationsCumulative7a:Data_Presented_Through"></span>. <a href="https://data.cdc.gov/Vaccinations/Weekly-Respiratory-Virus-Vaccination-Data-Children/5c6r-xi2t">View this dataset</a> on data.CDC.gov.</p></div>', Sr = 0, mr = [
  {
    values: [
      "COVID-19",
      "Influenza",
      "RSV"
    ],
    filterStyle: "dropdown",
    id: 1726688167656,
    columnName: "pathogen",
    showDropdown: !1,
    active: "COVID-19"
  }
], hr = "https://wcms-wp.cdc.gov/wcms/vizdata/Respitory_Viruses/NISVaccinationsCumulative7a.json", kr = !1, Dr = !1, fr = {
  annotations: is,
  type: ss,
  debugSvg: rs,
  chartMessage: cs,
  title: ls,
  showTitle: us,
  showDownloadMediaButton: ds,
  theme: ps,
  animate: ws,
  fontSize: Ss,
  lineDatapointStyle: ms,
  lineDatapointColor: hs,
  barHasBorder: ks,
  isLollipopChart: Ds,
  lollipopShape: fs,
  lollipopColorStyle: gs,
  visualizationSubType: As,
  barStyle: Fs,
  roundingStyle: Ns,
  tipRounding: Ys,
  isResponsiveTicks: bs,
  general: ys,
  padding: Ls,
  preliminaryData: Ts,
  yAxis: $s,
  boxplot: xs,
  topAxis: vs,
  isLegendValue: Cs,
  barThickness: Rs,
  barHeight: Ms,
  barSpace: Ps,
  heights: Bs,
  xAxis: _s,
  table: Vs,
  orientation: Hs,
  color: zs,
  columns: Os,
  legend: Is,
  brush: Es,
  exclusions: Us,
  palette: qs,
  isPaletteReversed: Ks,
  twoColor: Ws,
  labels: Gs,
  dataFormat: Qs,
  confidenceKeys: js,
  visual: Zs,
  useLogScale: Js,
  filterBehavior: Xs,
  highlightedBarValues: er,
  series: ar,
  tooltips: tr,
  forestPlot: or,
  area: nr,
  sankey: ir,
  visualizationType: sr,
  customColors: rr,
  dataFileName: cr,
  dataFileSourceType: lr,
  dataUrl: ur,
  dataDescription: dr,
  version: pr,
  description: wr,
  dynamicMarginTop: Sr,
  filters: mr,
  runtimeDataUrl: hr,
  showLineSeriesLabels: kr,
  colorMatchLineSeriesLabels: Dr
}, gr = [], Ar = "chart", Fr = !1, Nr = {
  noData: "No Data Available"
}, Yr = "", br = !0, yr = !1, Lr = "theme-blue", Tr = !1, $r = "medium", xr = "hover", vr = "Same as Line", Cr = "false", Rr = !1, Mr = "circle", Pr = "two-tone", Br = "regular", _r = "flat", Vr = "standard", Hr = "top", zr = !1, Or = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  showZeroValueData: !0,
  hideNullValue: !0
}, Ir = {
  left: 5,
  right: 5
}, Er = [], Ur = {
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
  scalePadding: 10,
  tickRotation: 0,
  anchors: [],
  shoMissingDataLabel: !0,
  showMissingDataLine: !0,
  categories: []
}, qr = {
  plots: [],
  borders: "true",
  plotOutlierValues: !1,
  plotNonOutlierValues: !0,
  labels: {
    q1: "Lower Quartile",
    q2: "q2",
    q3: "Upper Quartile",
    q4: "q4",
    minimum: "Minimum",
    maximum: "Maximum",
    mean: "Mean",
    median: "Median",
    sd: "Standard Deviation",
    iqr: "Interquartile Range",
    count: "Count",
    outliers: "Outliers",
    values: "Values",
    lowerBounds: "Lower Bounds",
    upperBounds: "Upper Bounds"
  }
}, Kr = {
  hasLine: !1
}, Wr = !1, Gr = 0.35, Qr = 25, jr = 15, Zr = {
  vertical: 300,
  horizontal: 750
}, Jr = {
  sortDates: !1,
  anchors: [],
  type: "categorical",
  showTargetLabel: !0,
  targetLabel: "Target",
  hideAxis: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: 75,
  tickRotation: "45",
  min: "",
  max: "",
  labelColor: "#333",
  tickLabelColor: "#333",
  tickColor: "#333",
  numTicks: "",
  labelOffset: 0,
  axisPadding: 200,
  target: 0,
  maxTickRotation: 0,
  padding: "0",
  showYearsOnce: !1,
  sortByRecentDate: !1,
  dataKey: "date",
  axisBBox: 116.57705688476562,
  tickWidthMax: 93,
  dateParseFormat: "%Y-%m-%d",
  dateDisplayFormat: "%Y-%m-%d",
  manual: !1,
  label: "Date"
}, Xr = {
  label: "Data Table",
  expanded: !0,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  showDownloadLinkBelow: !0,
  indexLabel: "",
  download: !0,
  showVertical: !0,
  dateDisplayFormat: "%Y-%m-%d",
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  show: !0
}, ec = "vertical", ac = "pinkpurple", tc = {
  date: {
    label: "Date",
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
    forestPlotStartingPoint: 0,
    name: "date"
  }
}, oc = {
  hide: !1,
  behavior: "isolate",
  axisAlign: !0,
  singleRow: !0,
  colorCode: "",
  reverseLabelOrder: !1,
  description: "",
  dynamicLegend: !1,
  dynamicLegendDefaultText: "Show All",
  dynamicLegendItemLimit: 5,
  dynamicLegendItemLimitMessage: "Dynamic Legend Item Limit Hit.",
  dynamicLegendChartMessage: "Select Options from the Legend",
  label: "",
  lineMode: !1,
  verticalSorted: !1,
  highlightOnHover: !1,
  hideSuppressedLabels: !1,
  hideSuppressionLink: !1,
  seriesHighlight: [],
  style: "circles",
  subStyle: "linear blocks",
  tickRotation: "",
  hideBorder: {
    side: !1,
    topBottom: !0
  },
  position: "right"
}, nc = {
  height: 25,
  active: !1
}, ic = {
  active: !0,
  keys: [],
  dateStart: "2023-01-02",
  dateEnd: "2023-01-11"
}, sc = "qualitative-bold", rc = !1, cc = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, lc = !1, uc = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, dc = {
  upper: "upper",
  lower: "lower"
}, pc = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, wc = !1, Sc = "Filter Change", mc = [], hc = [
  {
    dataKey: "value",
    type: "Line",
    axis: "Left",
    tooltip: !0,
    dynamicCategory: "category"
  }
], kc = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, Dc = {
  startAt: 0,
  colors: {
    line: "",
    shape: ""
  },
  lineOfNoEffect: {
    show: !0
  },
  type: "",
  pooledResult: {
    diamondHeight: 5,
    column: ""
  },
  estimateField: "",
  estimateRadius: "",
  shape: "square",
  rowHeight: 20,
  description: {
    show: !0,
    text: "description",
    location: 0
  },
  result: {
    show: !0,
    text: "result",
    location: 100
  },
  radius: {
    min: 2,
    max: 10,
    scalingColumn: ""
  },
  regression: {
    lower: 0,
    upper: 0,
    estimateField: 0
  },
  leftWidthOffset: 0,
  rightWidthOffset: 0,
  showZeroLine: !1,
  leftLabel: "",
  rightLabel: ""
}, fc = {
  isStacked: !1
}, gc = {
  title: {
    defaultColor: "black"
  },
  iterations: 1,
  rxValue: 0.9,
  overallSize: {
    width: 900,
    height: 700
  },
  margin: {
    margin_y: 25,
    margin_x: 0
  },
  nodeSize: {
    nodeWidth: 26,
    nodeHeight: 40
  },
  nodePadding: 55,
  nodeFontColor: "black",
  nodeColor: {
    default: "#ff8500",
    inactive: "#808080"
  },
  linkColor: {
    default: "#ffc900",
    inactive: "#D3D3D3"
  },
  opacity: {
    nodeOpacityDefault: 1,
    nodeOpacityInactive: 0.1,
    LinkOpacityDefault: 1,
    LinkOpacityInactive: 0.1
  },
  storyNodeFontColor: "#006778",
  storyNodeText: [],
  nodeValueStyle: {
    textBefore: "(",
    textAfter: ")"
  },
  data: []
}, Ac = "Line", Fc = [
  {
    date: "2023-01-01",
    category: "male",
    value: 67,
    lower: 65,
    upper: 69
  },
  {
    date: "2023-01-01",
    category: "female",
    value: 77,
    lower: 73,
    upper: 81
  },
  {
    date: "2023-01-02",
    category: "male",
    value: 11,
    lower: 10,
    upper: 13
  },
  {
    date: "2023-01-02",
    category: "female",
    value: 21,
    lower: 18,
    upper: 24
  },
  {
    date: "2023-01-03",
    category: "male",
    value: 94,
    lower: 92,
    upper: 96
  },
  {
    date: "2023-01-03",
    category: "female",
    value: 104,
    lower: 100,
    upper: 108
  },
  {
    date: "2023-01-04",
    category: "male",
    value: 95,
    lower: 93,
    upper: 97
  },
  {
    date: "2023-01-04",
    category: "female",
    value: 105,
    lower: 101,
    upper: 109
  },
  {
    date: "2023-01-05",
    category: "male",
    value: 79,
    lower: 77,
    upper: 81
  },
  {
    date: "2023-01-05",
    category: "female",
    value: 89,
    lower: 85,
    upper: 93
  },
  {
    date: "2023-01-06",
    category: "male",
    value: 2,
    lower: 1,
    upper: 3
  },
  {
    date: "2023-01-06",
    category: "female",
    value: 12,
    lower: 9,
    upper: 15
  },
  {
    date: "2023-01-07",
    category: "male",
    value: 36,
    lower: 34,
    upper: 38
  },
  {
    date: "2023-01-07",
    category: "female",
    value: 46,
    lower: 42,
    upper: 50
  },
  {
    date: "2023-01-08",
    category: "male",
    value: 9,
    lower: 7,
    upper: 11
  },
  {
    date: "2023-01-08",
    category: "female",
    value: 19,
    lower: 16,
    upper: 22
  },
  {
    date: "2023-01-09",
    category: "male",
    value: 3,
    lower: 2,
    upper: 4
  },
  {
    date: "2023-01-09",
    category: "female",
    value: 13,
    lower: 10,
    upper: 16
  },
  {
    date: "2023-01-10",
    category: "male",
    value: 64,
    lower: 62,
    upper: 66
  },
  {
    date: "2023-01-10",
    category: "female",
    value: 74,
    lower: 70,
    upper: 78
  }
], Nc = "valid-forecast-data.csv", Yc = "file", bc = {
  horizontal: !1,
  series: !1
}, yc = "4.24.10", Lc = 0, Tc = [], $c = {
  annotations: gr,
  type: Ar,
  debugSvg: Fr,
  chartMessage: Nr,
  title: Yr,
  showTitle: br,
  showDownloadMediaButton: yr,
  theme: Lr,
  animate: Tr,
  fontSize: $r,
  lineDatapointStyle: xr,
  lineDatapointColor: vr,
  barHasBorder: Cr,
  isLollipopChart: Rr,
  lollipopShape: Mr,
  lollipopColorStyle: Pr,
  visualizationSubType: Br,
  barStyle: _r,
  roundingStyle: Vr,
  tipRounding: Hr,
  isResponsiveTicks: zr,
  general: Or,
  padding: Ir,
  preliminaryData: Er,
  yAxis: Ur,
  boxplot: qr,
  topAxis: Kr,
  isLegendValue: Wr,
  barThickness: Gr,
  barHeight: Qr,
  barSpace: jr,
  heights: Zr,
  xAxis: Jr,
  table: Xr,
  orientation: ec,
  color: ac,
  columns: tc,
  legend: oc,
  brush: nc,
  exclusions: ic,
  palette: sc,
  isPaletteReversed: rc,
  twoColor: cc,
  labels: lc,
  dataFormat: uc,
  confidenceKeys: dc,
  visual: pc,
  useLogScale: wc,
  filterBehavior: Sc,
  highlightedBarValues: mc,
  series: hc,
  tooltips: kc,
  forestPlot: Dc,
  area: fc,
  sankey: gc,
  visualizationType: Ac,
  data: Fc,
  dataFileName: Nc,
  dataFileSourceType: Yc,
  dataDescription: bc,
  version: yc,
  dynamicMarginTop: Lc,
  regions: Tc
}, xc = [], vc = "chart", Cc = !1, Rc = {
  noData: "No Data Available"
}, Mc = "", Pc = !0, Bc = !1, _c = "theme-blue", Vc = !1, Hc = "medium", zc = "hover", Oc = "Same as Line", Ic = "false", Ec = !1, Uc = "circle", qc = "two-tone", Kc = "regular", Wc = "flat", Gc = "standard", Qc = "top", jc = !1, Zc = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  showZeroValueData: !0,
  hideNullValue: !0
}, Jc = {
  left: 5,
  right: 5
}, Xc = [], el = {
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
  scalePadding: 10,
  tickRotation: 0,
  anchors: [],
  shoMissingDataLabel: !0,
  showMissingDataLine: !0,
  categories: []
}, al = {
  plots: [],
  borders: "true",
  plotOutlierValues: !1,
  plotNonOutlierValues: !0,
  labels: {
    q1: "Lower Quartile",
    q2: "q2",
    q3: "Upper Quartile",
    q4: "q4",
    minimum: "Minimum",
    maximum: "Maximum",
    mean: "Mean",
    median: "Median",
    sd: "Standard Deviation",
    iqr: "Interquartile Range",
    count: "Count",
    outliers: "Outliers",
    values: "Values",
    lowerBounds: "Lower Bounds",
    upperBounds: "Upper Bounds"
  }
}, tl = {
  hasLine: !1
}, ol = !1, nl = 0.35, il = 25, sl = 15, rl = {
  vertical: 300,
  horizontal: 750
}, cl = {
  sortDates: !1,
  anchors: [],
  type: "categorical",
  showTargetLabel: !0,
  targetLabel: "Target",
  hideAxis: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: 75,
  tickRotation: "45",
  min: "",
  max: "",
  labelColor: "#333",
  tickLabelColor: "#333",
  tickColor: "#333",
  numTicks: "",
  labelOffset: 0,
  axisPadding: 200,
  target: 0,
  maxTickRotation: 0,
  padding: "0",
  showYearsOnce: !1,
  sortByRecentDate: !1,
  dataKey: "date",
  axisBBox: 116.57705688476562,
  tickWidthMax: 93,
  dateParseFormat: "%Y-%m-%d",
  dateDisplayFormat: "%Y-%m-%d",
  manual: !1,
  label: "Date"
}, ll = {
  label: "Data Table",
  expanded: !0,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  showDownloadLinkBelow: !0,
  indexLabel: "",
  download: !0,
  showVertical: !0,
  dateDisplayFormat: "%Y-%m-%d",
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  show: !0
}, ul = "vertical", dl = "pinkpurple", pl = {
  male_ci: {
    label: "Male (CI)",
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
    forestPlotStartingPoint: 0,
    name: "male_ci"
  },
  female_ci: {
    label: "Female (CI)",
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
    forestPlotStartingPoint: 0,
    name: "female_ci"
  },
  male: {
    label: "male",
    dataTable: !1,
    tooltips: !1,
    prefix: "",
    suffix: "",
    forestPlot: !1,
    startingPoint: "0",
    forestPlotAlignRight: !1,
    roundToPlace: 0,
    commas: !1,
    showInViz: !1,
    forestPlotStartingPoint: 0,
    name: "male"
  },
  female: {
    label: "female",
    dataTable: !1,
    tooltips: !1,
    prefix: "",
    suffix: "",
    forestPlot: !1,
    startingPoint: "0",
    forestPlotAlignRight: !1,
    roundToPlace: 0,
    commas: !1,
    showInViz: !1,
    forestPlotStartingPoint: 0,
    name: "female"
  },
  date: {
    label: "Date",
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
    forestPlotStartingPoint: 0,
    name: "date"
  }
}, wl = {
  hide: !1,
  behavior: "isolate",
  axisAlign: !0,
  singleRow: !0,
  colorCode: "",
  reverseLabelOrder: !1,
  description: "",
  dynamicLegend: !1,
  dynamicLegendDefaultText: "Show All",
  dynamicLegendItemLimit: 5,
  dynamicLegendItemLimitMessage: "Dynamic Legend Item Limit Hit.",
  dynamicLegendChartMessage: "Select Options from the Legend",
  label: "",
  lineMode: !1,
  verticalSorted: !1,
  highlightOnHover: !1,
  hideSuppressedLabels: !1,
  hideSuppressionLink: !1,
  seriesHighlight: [],
  style: "circles",
  subStyle: "linear blocks",
  tickRotation: "",
  hideBorder: {
    side: !1,
    topBottom: !0
  },
  position: "right"
}, Sl = {
  height: 25,
  active: !1
}, ml = {
  active: !0,
  keys: [],
  dateStart: "2023-01-02",
  dateEnd: "2023-01-11"
}, hl = "qualitative-bold", kl = !1, Dl = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, fl = !1, gl = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, Al = {
  upper: "female_lower",
  lower: "female_upper"
}, Fl = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, Nl = !1, Yl = "Filter Change", bl = [], yl = [
  {
    dataKey: "female",
    type: "Line",
    axis: "Left",
    tooltip: !0
  }
], Ll = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, Tl = {
  startAt: 0,
  colors: {
    line: "",
    shape: ""
  },
  lineOfNoEffect: {
    show: !0
  },
  type: "",
  pooledResult: {
    diamondHeight: 5,
    column: ""
  },
  estimateField: "",
  estimateRadius: "",
  shape: "square",
  rowHeight: 20,
  description: {
    show: !0,
    text: "description",
    location: 0
  },
  result: {
    show: !0,
    text: "result",
    location: 100
  },
  radius: {
    min: 2,
    max: 10,
    scalingColumn: ""
  },
  regression: {
    lower: 0,
    upper: 0,
    estimateField: 0
  },
  leftWidthOffset: 0,
  rightWidthOffset: 0,
  showZeroLine: !1,
  leftLabel: "",
  rightLabel: ""
}, $l = {
  isStacked: !1
}, xl = {
  title: {
    defaultColor: "black"
  },
  iterations: 1,
  rxValue: 0.9,
  overallSize: {
    width: 900,
    height: 700
  },
  margin: {
    margin_y: 25,
    margin_x: 0
  },
  nodeSize: {
    nodeWidth: 26,
    nodeHeight: 40
  },
  nodePadding: 55,
  nodeFontColor: "black",
  nodeColor: {
    default: "#ff8500",
    inactive: "#808080"
  },
  linkColor: {
    default: "#ffc900",
    inactive: "#D3D3D3"
  },
  opacity: {
    nodeOpacityDefault: 1,
    nodeOpacityInactive: 0.1,
    LinkOpacityDefault: 1,
    LinkOpacityInactive: 0.1
  },
  storyNodeFontColor: "#006778",
  storyNodeText: [],
  nodeValueStyle: {
    textBefore: "(",
    textAfter: ")"
  },
  data: []
}, vl = "Line", Cl = [
  {
    date: "2023-01-01",
    male: 67,
    male_lower: 65,
    male_upper: 69,
    female: 77,
    female_lower: 73,
    female_upper: 81,
    male_ci: "CI (65, 69)",
    female_ci: "CI (73, 81)"
  },
  {
    date: "2023-01-02",
    male: 11,
    male_lower: 10,
    male_upper: 13,
    female: 21,
    female_lower: 18,
    female_upper: 24,
    male_ci: "CI (10, 13)",
    female_ci: "CI (18, 24)"
  },
  {
    date: "2023-01-03",
    male: 94,
    male_lower: 92,
    male_upper: 96,
    female: 104,
    female_lower: 100,
    female_upper: 108,
    male_ci: "CI (92, 96)",
    female_ci: "CI (100, 108)"
  },
  {
    date: "2023-01-04",
    male: 95,
    male_lower: 93,
    male_upper: 97,
    female: 105,
    female_lower: 101,
    female_upper: 109,
    male_ci: "CI (93, 97)",
    female_ci: "CI (101, 109)"
  },
  {
    date: "2023-01-05",
    male: 79,
    male_lower: 77,
    male_upper: 81,
    female: 89,
    female_lower: 85,
    female_upper: 93,
    male_ci: "CI (77, 81)",
    female_ci: "CI (85, 93)"
  },
  {
    date: "2023-01-06",
    male: 2,
    male_lower: 1,
    male_upper: 3,
    female: 12,
    female_lower: 9,
    female_upper: 15,
    male_ci: "CI (1, 3)",
    female_ci: "CI (9, 15)"
  },
  {
    date: "2023-01-07",
    male: 36,
    male_lower: 34,
    male_upper: 38,
    female: 46,
    female_lower: 42,
    female_upper: 50,
    male_ci: "CI (34, 38)",
    female_ci: "CI (42, 50)"
  },
  {
    date: "2023-01-08",
    male: 9,
    male_lower: 7,
    male_upper: 11,
    female: 19,
    female_lower: 16,
    female_upper: 22,
    male_ci: "CI (7, 11)",
    female_ci: "CI (16, 22)"
  },
  {
    date: "2023-01-09",
    male: 3,
    male_lower: 2,
    male_upper: 4,
    female: 13,
    female_lower: 10,
    female_upper: 16,
    male_ci: "CI (2, 4)",
    female_ci: "CI (10, 16)"
  },
  {
    date: "2023-01-10",
    male: 64,
    male_lower: 62,
    male_upper: 66,
    female: 74,
    female_lower: 70,
    female_upper: 78,
    male_ci: "CI (62, 66)",
    female_ci: "CI (70, 78)"
  }
], Rl = "valid-forecast-data.csv", Ml = "file", Pl = {
  horizontal: !1,
  series: !1
}, Bl = "4.24.10", _l = 0, Vl = [], Hl = {
  annotations: xc,
  type: vc,
  debugSvg: Cc,
  chartMessage: Rc,
  title: Mc,
  showTitle: Pc,
  showDownloadMediaButton: Bc,
  theme: _c,
  animate: Vc,
  fontSize: Hc,
  lineDatapointStyle: zc,
  lineDatapointColor: Oc,
  barHasBorder: Ic,
  isLollipopChart: Ec,
  lollipopShape: Uc,
  lollipopColorStyle: qc,
  visualizationSubType: Kc,
  barStyle: Wc,
  roundingStyle: Gc,
  tipRounding: Qc,
  isResponsiveTicks: jc,
  general: Zc,
  padding: Jc,
  preliminaryData: Xc,
  yAxis: el,
  boxplot: al,
  topAxis: tl,
  isLegendValue: ol,
  barThickness: nl,
  barHeight: il,
  barSpace: sl,
  heights: rl,
  xAxis: cl,
  table: ll,
  orientation: ul,
  color: dl,
  columns: pl,
  legend: wl,
  brush: Sl,
  exclusions: ml,
  palette: hl,
  isPaletteReversed: kl,
  twoColor: Dl,
  labels: fl,
  dataFormat: gl,
  confidenceKeys: Al,
  visual: Fl,
  useLogScale: Nl,
  filterBehavior: Yl,
  highlightedBarValues: bl,
  series: yl,
  tooltips: Ll,
  forestPlot: Tl,
  area: $l,
  sankey: xl,
  visualizationType: vl,
  data: Cl,
  dataFileName: Rl,
  dataFileSourceType: Ml,
  dataDescription: Pl,
  version: Bl,
  dynamicMarginTop: _l,
  regions: Vl
}, x0 = {
  title: "Components/Templates/Chart",
  component: G
}, e = {
  args: {
    config: $c,
    isEditor: !1
  }
}, a = {
  args: {
    config: Hl,
    isEditor: !1
  }
}, t = {
  args: {
    config: le,
    isEditor: !1
  }
}, o = {
  args: {
    config: Q,
    isEditor: !1
  }
}, n = {
  args: {
    config: J(fr, [{
      path: ["tooltips", "dateDisplayFormat"],
      value: "%b. %d %Y"
    }])
  }
}, i = {
  args: {
    config: wa,
    isEditor: !1
  }
}, s = {
  args: {
    config: Ft
  }
}, r = {
  args: {
    config: j
  }
}, c = {
  args: {
    config: Ro
  }
}, l = {
  args: {
    config: Z
  }
}, u = {
  args: {
    config: En,
    isEditor: !1
  }
}, d = {
  args: {
    config: ns,
    isEditor: !1
  }
};
var p, w, S;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(p = e.parameters) == null ? void 0 : p.docs,
    source: {
      originalSource: `{
  args: {
    config: lineChartDynamicCI,
    isEditor: false
  }
}`,
      ...(S = (w = e.parameters) == null ? void 0 : w.docs) == null ? void 0 : S.source
    }
  }
};
var m, h, k;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(m = a.parameters) == null ? void 0 : m.docs,
    source: {
      originalSource: `{
  args: {
    config: lineChartNonDynamicCI,
    isEditor: false
  }
}`,
      ...(k = (h = a.parameters) == null ? void 0 : h.docs) == null ? void 0 : k.source
    }
  }
};
var D, f, g;
t.parameters = {
  ...t.parameters,
  docs: {
    ...(D = t.parameters) == null ? void 0 : D.docs,
    source: {
      originalSource: `{
  args: {
    config: lineChartTwoPointsRegressionTest,
    isEditor: false
  }
}`,
      ...(g = (f = t.parameters) == null ? void 0 : f.docs) == null ? void 0 : g.source
    }
  }
};
var A, F, N;
o.parameters = {
  ...o.parameters,
  docs: {
    ...(A = o.parameters) == null ? void 0 : A.docs,
    source: {
      originalSource: `{
  args: {
    config: lineChartTwoPointsNewChart,
    isEditor: false
  }
}`,
      ...(N = (F = o.parameters) == null ? void 0 : F.docs) == null ? void 0 : N.source
    }
  }
};
var Y, b, y;
n.parameters = {
  ...n.parameters,
  docs: {
    ...(Y = n.parameters) == null ? void 0 : Y.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(multipleLines, [{
      path: ['tooltips', 'dateDisplayFormat'],
      value: '%b. %d %Y'
    }])
  }
}`,
      ...(y = (b = n.parameters) == null ? void 0 : b.docs) == null ? void 0 : y.source
    }
  }
};
var L, T, $;
i.parameters = {
  ...i.parameters,
  docs: {
    ...(L = i.parameters) == null ? void 0 : L.docs,
    source: {
      originalSource: `{
  args: {
    config: lollipop,
    isEditor: false
  }
}`,
      ...($ = (T = i.parameters) == null ? void 0 : T.docs) == null ? void 0 : $.source
    }
  }
};
var x, v, C;
s.parameters = {
  ...s.parameters,
  docs: {
    ...(x = s.parameters) == null ? void 0 : x.docs,
    source: {
      originalSource: `{
  args: {
    config: forestPlot
  }
}`,
      ...(C = (v = s.parameters) == null ? void 0 : v.docs) == null ? void 0 : C.source
    }
  }
};
var R, M, P;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(R = r.parameters) == null ? void 0 : R.docs,
    source: {
      originalSource: `{
  args: {
    config: horizontalBarConfig
  }
}`,
      ...(P = (M = r.parameters) == null ? void 0 : M.docs) == null ? void 0 : P.source
    }
  }
};
var B, _, V;
c.parameters = {
  ...c.parameters,
  docs: {
    ...(B = c.parameters) == null ? void 0 : B.docs,
    source: {
      originalSource: `{
  args: {
    config: pieConfig
  }
}`,
      ...(V = (_ = c.parameters) == null ? void 0 : _.docs) == null ? void 0 : V.source
    }
  }
};
var H, z, O;
l.parameters = {
  ...l.parameters,
  docs: {
    ...(H = l.parameters) == null ? void 0 : H.docs,
    source: {
      originalSource: `{
  args: {
    config: pairedBar
  }
}`,
      ...(O = (z = l.parameters) == null ? void 0 : z.docs) == null ? void 0 : O.source
    }
  }
};
var I, E, U;
u.parameters = {
  ...u.parameters,
  docs: {
    ...(I = u.parameters) == null ? void 0 : I.docs,
    source: {
      originalSource: `{
  args: {
    config: boxPlotConfig,
    isEditor: false
  }
}`,
      ...(U = (E = u.parameters) == null ? void 0 : E.docs) == null ? void 0 : U.source
    }
  }
};
var q, K, W;
d.parameters = {
  ...d.parameters,
  docs: {
    ...(q = d.parameters) == null ? void 0 : q.docs,
    source: {
      originalSource: `{
  args: {
    config: areaChartStacked,
    isEditor: false
  }
}`,
      ...(W = (K = d.parameters) == null ? void 0 : K.docs) == null ? void 0 : W.source
    }
  }
};
const v0 = ["line_Chart_Dynamic_Confidence_Intervals", "line_Chart_Non_Dynamic_Confidence_Intervals", "line_Chart_Two_Points_Regression_Test", "line_Chart_Two_Points_New_Chart", "multiple_lines", "Lollipop", "Forest_Plot", "Horizontal_Bar", "Pie", "Paired_Bar", "BoxPlot_Multiseries", "Area_Chart_stacked"];
export {
  d as Area_Chart_stacked,
  u as BoxPlot_Multiseries,
  s as Forest_Plot,
  r as Horizontal_Bar,
  i as Lollipop,
  l as Paired_Bar,
  c as Pie,
  v0 as __namedExportsOrder,
  x0 as default,
  e as line_Chart_Dynamic_Confidence_Intervals,
  a as line_Chart_Non_Dynamic_Confidence_Intervals,
  o as line_Chart_Two_Points_New_Chart,
  t as line_Chart_Two_Points_Regression_Test,
  n as multiple_lines
};
