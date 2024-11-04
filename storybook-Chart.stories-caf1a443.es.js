import { C as M } from "./storybook-CdcChart-67ecd6f6.es.js";
import { b as B, h as N } from "./storybook-horizontal_bar-4e46191a.es.js";
import { p as z } from "./storybook-paired-bar-9dcfe98c.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-isSolr-cb863e7a.es.js";
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
import "./storybook-Button-d74e310e.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-index-e5bf02db.es.js";
import "./storybook-DataTable-c585f042.es.js";
import "./storybook-Loading-f180d060.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-3d33a03f.es.js";
import "./storybook-Circle-f595886d.es.js";
import "./storybook-BlurStrokeText-adc27352.es.js";
import "./storybook-Tooltip-4102bd69.es.js";
import "./storybook-Inputs-776ab3df.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-MultiSelect-25c4ae51.es.js";
import "./storybook-Filters-a07e1940.es.js";
import "./storybook-NestedDropdown-7810a864.es.js";
import "./storybook-InputSelect-20478396.es.js";
import "./storybook-Accordion-f47153d9.es.js";
import "./storybook-cacheBustingString-7a3dd9ba.es.js";
const P = "chart", E = !1, U = {
  noData: "No Data Available"
}, O = "Combo Bar-Line Chart", V = !0, F = !1, Y = "theme-purple", I = !1, _ = "medium", G = "hover", W = "Same as Line", K = "false", q = !1, j = "circle", Q = "two-tone", Z = "regular", J = "", X = "standard", ee = "top", te = !1, ae = {
  showDownloadButton: !1
}, oe = {
  left: 5,
  right: 5
}, ie = [
  {
    type: "suppression",
    seriesKey: "",
    label: "Suppressed",
    column: "Data 2",
    value: "ABC",
    style: "",
    displayTooltip: !0,
    displayLegend: !0,
    displayTable: !0,
    symbol: "Dagger",
    iconCode: "†",
    lineCode: ""
  }
], se = {
  hideAxis: !1,
  displayNumbersOnBar: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: "68",
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
  label: "Y-Axis Label Example"
}, ne = {
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
    values: "Values"
  }
}, re = {
  hasLine: !1
}, le = !1, ce = 0.35, de = 25, pe = 15, ue = {
  vertical: 300,
  horizontal: 750
}, he = {
  sortDates: !1,
  anchors: [],
  type: "date",
  showTargetLabel: !0,
  targetLabel: "Target",
  hideAxis: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: "78",
  tickRotation: "25",
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
  showSuppressedSymbol: !0,
  showSuppressedLine: !0,
  dataKey: "Date",
  label: "X-Axis Example Label",
  dateParseFormat: "%d/%m/%Y",
  dateDisplayFormat: "%d/%m/%Y",
  tickWidthMax: 91,
  padding: 6
}, me = {
  label: "Data Table",
  expanded: !0,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  indexLabel: "",
  download: !0,
  showVertical: !1,
  dateDisplayFormat: "",
  show: !0
}, ge = "vertical", fe = "pinkpurple", Le = {}, be = {
  hide: !1,
  behavior: "highlight",
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
  lineMode: !1,
  verticalSorted: !1,
  highlightOnHover: !1,
  hideSuppressedLabels: !1,
  seriesHighlight: [],
  position: "right",
  label: "Data Type"
}, Te = {
  height: 25,
  active: !1,
  data: [
    {
      Date: "1/15/2016",
      "Data 1": "1000",
      "Data 2": "110",
      "Data 3": "100",
      "Data 4": "90",
      "Monthly-Goal": "100"
    },
    {
      Date: "2/15/2016",
      "Data 1": "100",
      "Data 2": "110",
      "Data 3": "100",
      "Data 4": "100",
      "Monthly-Goal": "100"
    },
    {
      Date: "3/15/2016",
      "Data 1": "80",
      "Data 2": "90",
      "Data 3": "100",
      "Data 4": "120",
      "Monthly-Goal": "110"
    },
    {
      Date: "4/15/2016",
      "Data 1": "80",
      "Data 2": "90",
      "Data 3": "110",
      "Data 4": "120",
      "Monthly-Goal": "110"
    },
    {
      Date: "5/15/2016",
      "Data 1": "70",
      "Data 2": "90",
      "Data 3": "110",
      "Data 4": "130",
      "Monthly-Goal": "120"
    },
    {
      Date: "6/15/2016",
      "Data 1": "100",
      "Data 2": "120",
      "Data 3": "120",
      "Data 4": "130",
      "Monthly-Goal": "120"
    },
    {
      Date: "7/15/2016",
      "Data 1": "110",
      "Data 2": "140",
      "Data 3": "120",
      "Data 4": "130",
      "Monthly-Goal": "130"
    },
    {
      Date: "8/15/2016",
      "Data 1": "110",
      "Data 2": "130",
      "Data 3": "120",
      "Data 4": "140",
      "Monthly-Goal": "130"
    },
    {
      Date: "9/15/2016",
      "Data 1": "120",
      "Data 2": "130",
      "Data 3": "120",
      "Data 4": "150",
      "Monthly-Goal": "140"
    }
  ]
}, ye = {
  active: !1,
  keys: []
}, we = "qualitative-soft", De = !1, xe = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, Ce = !0, ve = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, Se = {}, $e = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, Ae = !1, Re = "Filter Change", ke = [], He = [
  {
    dataKey: "Data 2",
    type: "Bar",
    axis: "Left",
    tooltip: !0
  }
], Me = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, Be = {
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
  hideDateCategoryCol: !1
}, Ne = {
  isStacked: !1
}, ze = {
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
}, Pe = [], Ee = "332", Ue = [
  {
    Date: "1/15/2016",
    "Data 1": "$1,000",
    "Data 2": "ABC",
    "Data 3": "100",
    "Data 4": "90",
    "Monthly-Goal": "100"
  },
  {
    Date: "2/15/2016",
    "Data 1": "100",
    "Data 2": "110",
    "Data 3": "100",
    "Data 4": "100",
    "Monthly-Goal": "100"
  },
  {
    Date: "3/15/2016",
    "Data 1": "80",
    "Data 2": "90",
    "Data 3": "100",
    "Data 4": "120",
    "Monthly-Goal": "110"
  },
  {
    Date: "4/15/2016",
    "Data 1": "80",
    "Data 2": "90",
    "Data 3": "110",
    "Data 4": "120",
    "Monthly-Goal": "110"
  },
  {
    Date: "5/15/2016",
    "Data 1": "70",
    "Data 2": "90",
    "Data 3": "110",
    "Data 4": "130",
    "Monthly-Goal": "120"
  },
  {
    Date: "6/15/2016",
    "Data 1": "100",
    "Data 2": "120",
    "Data 3": "120",
    "Data 4": "130",
    "Monthly-Goal": "120"
  },
  {
    Date: "7/15/2016",
    "Data 1": "110",
    "Data 2": "140",
    "Data 3": "120",
    "Data 4": "130",
    "Monthly-Goal": "130"
  },
  {
    Date: "8/15/2016",
    "Data 1": "110",
    "Data 2": "130",
    "Data 3": "120",
    "Data 4": "140",
    "Monthly-Goal": "130"
  },
  {
    Date: "9/15/2016",
    "Data 1": "120",
    "Data 2": "",
    "Data 3": "120",
    "Data 4": "150",
    "Monthly-Goal": "140"
  }
], Oe = "Bar", Ve = [], Fe = 4.23, Ye = 0, Ie = "4.24.4", _e = {
  type: P,
  debugSvg: E,
  chartMessage: U,
  title: O,
  showTitle: V,
  showDownloadMediaButton: F,
  theme: Y,
  animate: I,
  fontSize: _,
  lineDatapointStyle: G,
  lineDatapointColor: W,
  barHasBorder: K,
  isLollipopChart: q,
  lollipopShape: j,
  lollipopColorStyle: Q,
  visualizationSubType: Z,
  barStyle: J,
  roundingStyle: X,
  tipRounding: ee,
  isResponsiveTicks: te,
  general: ae,
  padding: oe,
  preliminaryData: ie,
  yAxis: se,
  boxplot: ne,
  topAxis: re,
  isLegendValue: le,
  barThickness: ce,
  barHeight: de,
  barSpace: pe,
  heights: ue,
  xAxis: he,
  table: me,
  orientation: ge,
  color: fe,
  columns: Le,
  legend: be,
  brush: Te,
  exclusions: ye,
  palette: we,
  isPaletteReversed: De,
  twoColor: xe,
  labels: Ce,
  dataFormat: ve,
  confidenceKeys: Se,
  visual: $e,
  useLogScale: Ae,
  filterBehavior: Re,
  highlightedBarValues: ke,
  series: He,
  tooltips: Me,
  forestPlot: Be,
  area: Ne,
  sankey: ze,
  suppressedData: Pe,
  height: Ee,
  data: Ue,
  visualizationType: Oe,
  filters: Ve,
  validated: Fe,
  dynamicMarginTop: Ye,
  version: Ie
}, Ge = "chart", We = "Line", Ke = {
  dataKey: "STATE"
}, qe = [
  {
    dataKey: "Rate"
  }
], je = [
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
], Qe = [
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
], Ze = "hex-data.csv", Je = "file", Xe = [
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
], et = {
  horizontal: !1,
  series: !1
}, tt = {
  type: Ge,
  visualizationType: We,
  xAxis: Ke,
  series: qe,
  filters: je,
  data: Qe,
  dataFileName: Ze,
  dataFileSourceType: Je,
  formattedData: Xe,
  dataDescription: et
}, at = "chart", ot = "Lollipop Style Horizontal Bar Chart - Number of Spills Occurring in the Home", it = !0, st = !1, nt = "theme-blue", rt = !0, lt = "medium", ct = "hover", dt = "false", pt = !0, ut = "circle", ht = "two-tone", mt = "horizontal", gt = "", ft = "standard", Lt = "top", bt = !1, Tt = {
  showDownloadButton: !1
}, yt = {
  left: 5,
  right: 5
}, wt = {
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
}, Dt = [], xt = {
  hasLine: !1
}, Ct = !1, vt = 0.35, St = 6, $t = 15, At = {
  vertical: 300,
  horizontal: 170.39999999999998
}, Rt = {
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
}, kt = {
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
}, Ht = "horizontal", Mt = "pinkpurple", Bt = {}, Nt = {
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
}, zt = {
  active: !1,
  keys: []
}, Pt = "qualitative-bold", Et = !1, Ut = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, Ot = !1, Vt = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, Ft = {}, Yt = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, It = !1, _t = "Filter Change", Gt = [], Wt = [
  {
    dataKey: "Home",
    type: "Bar",
    tooltip: !0
  }
], Kt = {
  opacity: 90
}, qt = 212, jt = [
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
], Qt = "CSV_Source_Example_for_Horizontal_Bar_viz-cdcwp1619811744363.csv", Zt = "file", Jt = "Bar", Xt = "Subtext can be added here for options like citing data sources or insight into reading the bar chart.", ea = 47, ta = [], aa = "medium", oa = 4.23, ia = 0, sa = {
  type: at,
  title: ot,
  showTitle: it,
  showDownloadMediaButton: st,
  theme: nt,
  animate: rt,
  fontSize: lt,
  lineDatapointStyle: ct,
  barHasBorder: dt,
  isLollipopChart: pt,
  lollipopShape: ut,
  lollipopColorStyle: ht,
  visualizationSubType: mt,
  barStyle: gt,
  roundingStyle: ft,
  tipRounding: Lt,
  isResponsiveTicks: bt,
  general: Tt,
  padding: yt,
  yAxis: wt,
  boxplot: Dt,
  topAxis: xt,
  isLegendValue: Ct,
  barThickness: vt,
  barHeight: St,
  barSpace: $t,
  heights: At,
  xAxis: Rt,
  table: kt,
  orientation: Ht,
  color: Mt,
  columns: Bt,
  legend: Nt,
  exclusions: zt,
  palette: Pt,
  isPaletteReversed: Et,
  twoColor: Ut,
  labels: Ot,
  dataFormat: Vt,
  confidenceKeys: Ft,
  visual: Yt,
  useLogScale: It,
  filterBehavior: _t,
  highlightedBarValues: Gt,
  series: Wt,
  tooltips: Kt,
  height: qt,
  data: jt,
  dataFileName: Qt,
  dataFileSourceType: Zt,
  visualizationType: Jt,
  description: Xt,
  barPadding: ea,
  filters: ta,
  lollipopSize: aa,
  validated: oa,
  dynamicMarginTop: ia
}, na = "chart", ra = !1, la = {
  noData: "No Data Available"
}, ca = "Forest Plot Example", da = !0, pa = !1, ua = "theme-blue", ha = !1, ma = "medium", ga = "hover", fa = "Same as Line", La = "false", ba = !1, Ta = "circle", ya = "two-tone", wa = "regular", Da = "", xa = "standard", Ca = "top", va = !1, Sa = {
  showDownloadButton: !1
}, $a = {
  left: 5,
  right: 5
}, Aa = [], Ra = {
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
}, ka = {
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
}, Ma = !1, Ba = 0.35, Na = 25, za = 15, Pa = {
  vertical: 300,
  horizontal: 750
}, Ea = {
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
}, Ua = {
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
}, Oa = "horizontal", Va = "pinkpurple", Fa = {
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
}, Ya = {
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
}, Ia = {
  height: 25,
  data: [],
  active: !1
}, _a = {
  active: !0,
  keys: []
}, Ga = "qualitative-bold", Wa = !1, Ka = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, qa = !1, ja = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, Qa = {}, Za = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, Ja = !1, Xa = "Filter Change", eo = [], to = [
  {
    dataKey: "Confidence",
    type: "Forest Plot",
    axis: "Left",
    tooltip: !0
  }
], ao = {
  opacity: 90,
  singleSeries: !1
}, oo = {
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
}, io = {
  isStacked: !1
}, so = {}, no = "Forest Plot", ro = [
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
], lo = "data.csv", co = "file", po = [
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
], uo = {
  horizontal: !1,
  series: !1
}, ho = 4.23, mo = 0, go = {
  type: na,
  debugSvg: ra,
  chartMessage: la,
  title: ca,
  showTitle: da,
  showDownloadMediaButton: pa,
  theme: ua,
  animate: ha,
  fontSize: ma,
  lineDatapointStyle: ga,
  lineDatapointColor: fa,
  barHasBorder: La,
  isLollipopChart: ba,
  lollipopShape: Ta,
  lollipopColorStyle: ya,
  visualizationSubType: wa,
  barStyle: Da,
  roundingStyle: xa,
  tipRounding: Ca,
  isResponsiveTicks: va,
  general: Sa,
  padding: $a,
  suppressedData: Aa,
  yAxis: Ra,
  boxplot: ka,
  topAxis: Ha,
  isLegendValue: Ma,
  barThickness: Ba,
  barHeight: Na,
  barSpace: za,
  heights: Pa,
  xAxis: Ea,
  table: Ua,
  orientation: Oa,
  color: Va,
  columns: Fa,
  legend: Ya,
  brush: Ia,
  exclusions: _a,
  palette: Ga,
  isPaletteReversed: Wa,
  twoColor: Ka,
  labels: qa,
  dataFormat: ja,
  confidenceKeys: Qa,
  visual: Za,
  useLogScale: Ja,
  filterBehavior: Xa,
  highlightedBarValues: eo,
  series: to,
  tooltips: ao,
  forestPlot: oo,
  area: io,
  datasets: so,
  visualizationType: no,
  data: ro,
  dataFileName: lo,
  dataFileSourceType: co,
  formattedData: po,
  dataDescription: uo,
  validated: ho,
  dynamicMarginTop: mo
}, fo = [], Lo = "chart", bo = !1, To = {
  noData: "No Data Available"
}, yo = "", wo = !0, Do = !1, xo = "theme-blue", Co = !1, vo = "medium", So = "hover", $o = "Same as Line", Ao = "false", Ro = !1, ko = "circle", Ho = "two-tone", Mo = "regular", Bo = "", No = "standard", zo = "top", Po = !1, Eo = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  hideNullValue: !0
}, Uo = {
  left: 5,
  right: 5
}, Oo = [], Vo = {
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
}, Fo = {
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
}, Yo = {
  hasLine: !1
}, Io = !1, _o = "0.37", Go = 25, Wo = 15, Ko = {
  vertical: 300,
  horizontal: 750
}, qo = {
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
}, jo = {
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
}, Qo = "vertical", Zo = "pinkpurple", Jo = {}, Xo = {
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
}, ei = {
  height: 25,
  active: !1
}, ti = {
  active: !1,
  keys: []
}, ai = "qualitative-bold", oi = !1, ii = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, si = !1, ni = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, ri = {}, li = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, ci = !1, di = "Filter Change", pi = [], ui = [], hi = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, mi = {
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
}, gi = {
  isStacked: !1
}, fi = {
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
}, Li = {}, bi = "Pie", Ti = [
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
], yi = "valid-data-chart.csv", wi = "file", Di = [
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
], xi = {
  horizontal: !1,
  series: !1
}, Ci = "4.24.10", vi = {
  annotations: fo,
  type: Lo,
  debugSvg: bo,
  chartMessage: To,
  title: yo,
  showTitle: wo,
  showDownloadMediaButton: Do,
  theme: xo,
  animate: Co,
  fontSize: vo,
  lineDatapointStyle: So,
  lineDatapointColor: $o,
  barHasBorder: Ao,
  isLollipopChart: Ro,
  lollipopShape: ko,
  lollipopColorStyle: Ho,
  visualizationSubType: Mo,
  barStyle: Bo,
  roundingStyle: No,
  tipRounding: zo,
  isResponsiveTicks: Po,
  general: Eo,
  padding: Uo,
  preliminaryData: Oo,
  yAxis: Vo,
  boxplot: Fo,
  topAxis: Yo,
  isLegendValue: Io,
  barThickness: _o,
  barHeight: Go,
  barSpace: Wo,
  heights: Ko,
  xAxis: qo,
  table: jo,
  orientation: Qo,
  color: Zo,
  columns: Jo,
  legend: Xo,
  brush: ei,
  exclusions: ti,
  palette: ai,
  isPaletteReversed: oi,
  twoColor: ii,
  labels: si,
  dataFormat: ni,
  confidenceKeys: ri,
  visual: li,
  useLogScale: ci,
  filterBehavior: di,
  highlightedBarValues: pi,
  series: ui,
  tooltips: hi,
  forestPlot: mi,
  area: gi,
  sankey: fi,
  datasets: Li,
  visualizationType: bi,
  data: Ti,
  dataFileName: yi,
  dataFileSourceType: wi,
  formattedData: Di,
  dataDescription: xi,
  version: Ci
}, us = {
  title: "Components/Templates/Chart",
  component: M
}, e = {
  args: {
    config: tt,
    isEditor: !1
  }
}, t = {
  args: {
    config: B,
    isEditor: !1
  }
}, a = {
  args: {
    config: sa,
    isEditor: !1
  }
}, o = {
  args: {
    config: _e,
    isEditor: !1
  }
}, i = {
  args: {
    config: go
  }
}, s = {
  args: {
    config: N
  }
}, n = {
  args: {
    config: vi
  }
}, r = {
  args: {
    config: z
  }
};
var l, c, d;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(l = e.parameters) == null ? void 0 : l.docs,
    source: {
      originalSource: `{
  args: {
    config: lineChartTwoPointsRegressionTest,
    isEditor: false
  }
}`,
      ...(d = (c = e.parameters) == null ? void 0 : c.docs) == null ? void 0 : d.source
    }
  }
};
var p, u, h;
t.parameters = {
  ...t.parameters,
  docs: {
    ...(p = t.parameters) == null ? void 0 : p.docs,
    source: {
      originalSource: `{
  args: {
    config: lineChartTwoPointsNewChart,
    isEditor: false
  }
}`,
      ...(h = (u = t.parameters) == null ? void 0 : u.docs) == null ? void 0 : h.source
    }
  }
};
var m, g, f;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(m = a.parameters) == null ? void 0 : m.docs,
    source: {
      originalSource: `{
  args: {
    config: lollipop,
    isEditor: false
  }
}`,
      ...(f = (g = a.parameters) == null ? void 0 : g.docs) == null ? void 0 : f.source
    }
  }
};
var L, b, T;
o.parameters = {
  ...o.parameters,
  docs: {
    ...(L = o.parameters) == null ? void 0 : L.docs,
    source: {
      originalSource: `{
  args: {
    config: SuppressedConfig,
    isEditor: false
  }
}`,
      ...(T = (b = o.parameters) == null ? void 0 : b.docs) == null ? void 0 : T.source
    }
  }
};
var y, w, D;
i.parameters = {
  ...i.parameters,
  docs: {
    ...(y = i.parameters) == null ? void 0 : y.docs,
    source: {
      originalSource: `{
  args: {
    config: forestPlot
  }
}`,
      ...(D = (w = i.parameters) == null ? void 0 : w.docs) == null ? void 0 : D.source
    }
  }
};
var x, C, v;
s.parameters = {
  ...s.parameters,
  docs: {
    ...(x = s.parameters) == null ? void 0 : x.docs,
    source: {
      originalSource: `{
  args: {
    config: horizontalBarConfig
  }
}`,
      ...(v = (C = s.parameters) == null ? void 0 : C.docs) == null ? void 0 : v.source
    }
  }
};
var S, $, A;
n.parameters = {
  ...n.parameters,
  docs: {
    ...(S = n.parameters) == null ? void 0 : S.docs,
    source: {
      originalSource: `{
  args: {
    config: pieConfig
  }
}`,
      ...(A = ($ = n.parameters) == null ? void 0 : $.docs) == null ? void 0 : A.source
    }
  }
};
var R, k, H;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(R = r.parameters) == null ? void 0 : R.docs,
    source: {
      originalSource: `{
  args: {
    config: pairedBar
  }
}`,
      ...(H = (k = r.parameters) == null ? void 0 : k.docs) == null ? void 0 : H.source
    }
  }
};
const hs = ["line_Chart_Two_Points_Regression_Test", "line_Chart_Two_Points_New_Chart", "Lollipop", "Suppression", "Forest_Plot", "Horizontal_Bar", "Pie", "Paired_Bar"];
export {
  i as Forest_Plot,
  s as Horizontal_Bar,
  a as Lollipop,
  r as Paired_Bar,
  n as Pie,
  o as Suppression,
  hs as __namedExportsOrder,
  us as default,
  t as line_Chart_Two_Points_New_Chart,
  e as line_Chart_Two_Points_Regression_Test
};
