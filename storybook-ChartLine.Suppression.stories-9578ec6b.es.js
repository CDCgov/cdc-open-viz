import { C as i } from "./storybook-CdcChartComponent-aa83392e.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-getViewport-7dc50c16.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
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
import "./storybook-coveUpdateWorker-e42c85d9.es.js";
import "./storybook-viewports-5c5d7af1.es.js";
import "./storybook-DataTable-fa1d7944.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-437adc6c.es.js";
import "./storybook-index-3b47b3f7.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-linear-bc5fb9aa.es.js";
import "./storybook-BlurStrokeText-adc27352.es.js";
import "./storybook-InputSelect-76dbb8cb.es.js";
import "./storybook-Accordion-aed5218d.es.js";
const y = [], l = "chart", d = !1, p = {
  noData: "No Data Available"
}, h = "", g = !0, u = !1, w = "theme-blue", k = !1, m = "medium", f = "hover", _ = "Same as Line", D = "false", b = !1, Y = "circle", Z = "two-tone", X = "regular", C = "flat", S = "standard", V = "top", I = !1, x = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  showZeroValueData: !0,
  hideNullValue: !0
}, L = {
  left: 5,
  right: 5
}, O = [
  {
    type: "suppression",
    seriesKey: "",
    label: "Suppressed",
    column: "",
    value: "XYZ",
    style: "Dashed Small",
    displayTooltip: !0,
    displayLegend: !0,
    displayTable: !0,
    symbol: "",
    iconCode: "",
    lineCode: "- - -",
    hideBarSymbol: !1,
    hideLineStyle: !1,
    circleSize: 6,
    displayGray: !0
  }
], R = {
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
  maxValue: 5.58
}, v = {
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
}, z = {
  hasLine: !1
}, T = !1, $ = 0.35, M = 25, A = 15, B = {
  vertical: 300,
  horizontal: 750
}, P = {
  sortDates: !1,
  anchors: [],
  type: "date",
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
  padding: 6,
  showYearsOnce: !1,
  dataKey: "week_end",
  label: "Week End",
  dateParseFormat: "%m/%d/%Y",
  dateDisplayFormat: "%m/%d/%Y",
  axisBBox: 0,
  tickWidthMax: 91
}, H = {
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
}, F = "vertical", q = "pinkpurple", G = {}, N = {
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
}, K = {
  height: 25,
  active: !1
}, W = {
  active: !1,
  keys: []
}, E = "qualitative-bold", Q = !1, U = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, j = !1, J = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, ee = {}, ae = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, ce = !1, se = "Filter Change", te = [], re = [
  {
    dataKey: "cc65+ years",
    type: "Line",
    axis: "Left",
    tooltip: !0
  },
  {
    dataKey: "cc18-64 years",
    type: "Line",
    axis: "Left",
    tooltip: !0
  },
  {
    dataKey: "cc0-17 years",
    type: "Line",
    axis: "Left",
    tooltip: !0
  }
], ne = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, oe = {
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
}, ie = {
  isStacked: !1
}, ye = {
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
}, le = "Line", de = [
  {
    week_end: "10/7/2023",
    pathogen: "Combined",
    "cc65+ years": "2.92",
    "cc18-64 years": "1.14",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "10/7/2023",
    pathogen: "COVID-19",
    "cc65+ years": "2.87",
    "cc18-64 years": "1.1",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "10/7/2023",
    pathogen: "Influenza",
    "cc65+ years": "0.04",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "10/7/2023",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "10/14/2023",
    pathogen: "Combined",
    "cc65+ years": "2.68",
    "cc18-64 years": "1.26",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "10/14/2023",
    pathogen: "COVID-19",
    "cc65+ years": "2.63",
    "cc18-64 years": "1.17",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "10/14/2023",
    pathogen: "Influenza",
    "cc65+ years": "0.05",
    "cc18-64 years": "0.09",
    "cc0-17 years": "0"
  },
  {
    week_end: "10/14/2023",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "10/21/2023",
    pathogen: "Combined",
    "cc65+ years": "2.91",
    "cc18-64 years": "1.18",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "10/21/2023",
    pathogen: "COVID-19",
    "cc65+ years": "2.82",
    "cc18-64 years": "1.1",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "10/21/2023",
    pathogen: "Influenza",
    "cc65+ years": "0.08",
    "cc18-64 years": "0.07",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "10/21/2023",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "10/28/2023",
    pathogen: "Combined",
    "cc65+ years": "2.74",
    "cc18-64 years": "0.99",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "10/28/2023",
    pathogen: "COVID-19",
    "cc65+ years": "2.64",
    "cc18-64 years": "0.92",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "10/28/2023",
    pathogen: "Influenza",
    "cc65+ years": "0.08",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "10/28/2023",
    pathogen: "RSV",
    "cc65+ years": "0.02",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "11/4/2023",
    pathogen: "Combined",
    "cc65+ years": "2.64",
    "cc18-64 years": "1",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "11/4/2023",
    pathogen: "COVID-19",
    "cc65+ years": "2.54",
    "cc18-64 years": "0.86",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "11/4/2023",
    pathogen: "Influenza",
    "cc65+ years": "0.09",
    "cc18-64 years": "0.15",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "11/4/2023",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "11/11/2023",
    pathogen: "Combined",
    "cc65+ years": "2.87",
    "cc18-64 years": "1.12",
    "cc0-17 years": "1.46"
  },
  {
    week_end: "11/11/2023",
    pathogen: "COVID-19",
    "cc65+ years": "2.75",
    "cc18-64 years": "0.97",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "11/11/2023",
    pathogen: "Influenza",
    "cc65+ years": "0.1",
    "cc18-64 years": "0.12",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "11/11/2023",
    pathogen: "RSV",
    "cc65+ years": "0.02",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "11/18/2023",
    pathogen: "Combined",
    "cc65+ years": "2.92",
    "cc18-64 years": "1.38",
    "cc0-17 years": "3.43"
  },
  {
    week_end: "11/18/2023",
    pathogen: "COVID-19",
    "cc65+ years": "2.8",
    "cc18-64 years": "1.17",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "11/18/2023",
    pathogen: "Influenza",
    "cc65+ years": "0.09",
    "cc18-64 years": "0.2",
    "cc0-17 years": "1.79"
  },
  {
    week_end: "11/18/2023",
    pathogen: "RSV",
    "cc65+ years": "0.04",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "11/25/2023",
    pathogen: "Combined",
    "cc65+ years": "2.98",
    "cc18-64 years": "1.47",
    "cc0-17 years": "1.55"
  },
  {
    week_end: "11/25/2023",
    pathogen: "COVID-19",
    "cc65+ years": "2.82",
    "cc18-64 years": "1.14",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "11/25/2023",
    pathogen: "Influenza",
    "cc65+ years": "0.14",
    "cc18-64 years": "0.29",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "11/25/2023",
    pathogen: "RSV",
    "cc65+ years": "0.04",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "12/2/2023",
    pathogen: "Combined",
    "cc65+ years": "3.54",
    "cc18-64 years": "1.68",
    "cc0-17 years": "2.05"
  },
  {
    week_end: "12/2/2023",
    pathogen: "COVID-19",
    "cc65+ years": "3.26",
    "cc18-64 years": "1.38",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "12/2/2023",
    pathogen: "Influenza",
    "cc65+ years": "0.24",
    "cc18-64 years": "0.26",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "12/2/2023",
    pathogen: "RSV",
    "cc65+ years": "0.05",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "12/9/2023",
    pathogen: "Combined",
    "cc65+ years": "3.64",
    "cc18-64 years": "1.95",
    "cc0-17 years": "2.39"
  },
  {
    week_end: "12/9/2023",
    pathogen: "COVID-19",
    "cc65+ years": "3.31",
    "cc18-64 years": "1.42",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "12/9/2023",
    pathogen: "Influenza",
    "cc65+ years": "0.26",
    "cc18-64 years": "0.47",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "12/9/2023",
    pathogen: "RSV",
    "cc65+ years": "0.08",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "12/16/2023",
    pathogen: "Combined",
    "cc65+ years": "3.92",
    "cc18-64 years": "1.99",
    "cc0-17 years": "3.82"
  },
  {
    week_end: "12/16/2023",
    pathogen: "COVID-19",
    "cc65+ years": "3.45",
    "cc18-64 years": "1.38",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "12/16/2023",
    pathogen: "Influenza",
    "cc65+ years": "0.38",
    "cc18-64 years": "0.57",
    "cc0-17 years": "2.4"
  },
  {
    week_end: "12/16/2023",
    pathogen: "RSV",
    "cc65+ years": "0.1",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "12/23/2023",
    pathogen: "Combined",
    "cc65+ years": "4.17",
    "cc18-64 years": "2.45",
    "cc0-17 years": "3.82"
  },
  {
    week_end: "12/23/2023",
    pathogen: "COVID-19",
    "cc65+ years": "3.55",
    "cc18-64 years": "1.33",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "12/23/2023",
    pathogen: "Influenza",
    "cc65+ years": "0.55",
    "cc18-64 years": "1.07",
    "cc0-17 years": "2.83"
  },
  {
    week_end: "12/23/2023",
    pathogen: "RSV",
    "cc65+ years": "0.1",
    "cc18-64 years": "0.07",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "12/30/2023",
    pathogen: "Combined",
    "cc65+ years": "4.93",
    "cc18-64 years": "3.41",
    "cc0-17 years": "3.36"
  },
  {
    week_end: "12/30/2023",
    pathogen: "COVID-19",
    "cc65+ years": "4",
    "cc18-64 years": "1.67",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "12/30/2023",
    pathogen: "Influenza",
    "cc65+ years": "0.84",
    "cc18-64 years": "1.69",
    "cc0-17 years": "1.96"
  },
  {
    week_end: "12/30/2023",
    pathogen: "RSV",
    "cc65+ years": "0.12",
    "cc18-64 years": "0.08",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "1/6/2024",
    pathogen: "Combined",
    "cc65+ years": "5.58",
    "cc18-64 years": "3.6",
    "cc0-17 years": "4.95"
  },
  {
    week_end: "1/6/2024",
    pathogen: "COVID-19",
    "cc65+ years": "4.3",
    "cc18-64 years": "1.96",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "1/6/2024",
    pathogen: "Influenza",
    "cc65+ years": "1.2",
    "cc18-64 years": "1.58",
    "cc0-17 years": "3.45"
  },
  {
    week_end: "1/6/2024",
    pathogen: "RSV",
    "cc65+ years": "0.13",
    "cc18-64 years": "0.11",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "1/13/2024",
    pathogen: "Combined",
    "cc65+ years": "5.57",
    "cc18-64 years": "3.57",
    "cc0-17 years": "2.95"
  },
  {
    week_end: "1/13/2024",
    pathogen: "COVID-19",
    "cc65+ years": "4.39",
    "cc18-64 years": "1.91",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "1/13/2024",
    pathogen: "Influenza",
    "cc65+ years": "1.12",
    "cc18-64 years": "1.61",
    "cc0-17 years": "1.92"
  },
  {
    week_end: "1/13/2024",
    pathogen: "RSV",
    "cc65+ years": "0.11",
    "cc18-64 years": "0.1",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "1/20/2024",
    pathogen: "Combined",
    "cc65+ years": "5.06",
    "cc18-64 years": "3.25",
    "cc0-17 years": "3.17"
  },
  {
    week_end: "1/20/2024",
    pathogen: "COVID-19",
    "cc65+ years": "4.05",
    "cc18-64 years": "1.95",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "1/20/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.97",
    "cc18-64 years": "1.28",
    "cc0-17 years": "1.9"
  },
  {
    week_end: "1/20/2024",
    pathogen: "RSV",
    "cc65+ years": "0.08",
    "cc18-64 years": "0.07",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "1/27/2024",
    pathogen: "Combined",
    "cc65+ years": "4.59",
    "cc18-64 years": "2.85",
    "cc0-17 years": "2.72"
  },
  {
    week_end: "1/27/2024",
    pathogen: "COVID-19",
    "cc65+ years": "3.73",
    "cc18-64 years": "1.68",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "1/27/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.84",
    "cc18-64 years": "1.14",
    "cc0-17 years": "1.72"
  },
  {
    week_end: "1/27/2024",
    pathogen: "RSV",
    "cc65+ years": "0.06",
    "cc18-64 years": "0.07",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "2/3/2024",
    pathogen: "Combined",
    "cc65+ years": "4.09",
    "cc18-64 years": "2.34",
    "cc0-17 years": "2.86"
  },
  {
    week_end: "2/3/2024",
    pathogen: "COVID-19",
    "cc65+ years": "3.24",
    "cc18-64 years": "1.44",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "2/3/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.81",
    "cc18-64 years": "0.88",
    "cc0-17 years": "2.32"
  },
  {
    week_end: "2/3/2024",
    pathogen: "RSV",
    "cc65+ years": "0.08",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "2/10/2024",
    pathogen: "Combined",
    "cc65+ years": "3.74",
    "cc18-64 years": "2.11",
    "cc0-17 years": "2.4"
  },
  {
    week_end: "2/10/2024",
    pathogen: "COVID-19",
    "cc65+ years": "3.04",
    "cc18-64 years": "1.28",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "2/10/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.68",
    "cc18-64 years": "0.81",
    "cc0-17 years": "1.69"
  },
  {
    week_end: "2/10/2024",
    pathogen: "RSV",
    "cc65+ years": "0.06",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "2/17/2024",
    pathogen: "Combined",
    "cc65+ years": "3.37",
    "cc18-64 years": "1.9",
    "cc0-17 years": "3.04"
  },
  {
    week_end: "2/17/2024",
    pathogen: "COVID-19",
    "cc65+ years": "2.66",
    "cc18-64 years": "1.11",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "2/17/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.69",
    "cc18-64 years": "0.82",
    "cc0-17 years": "2.13"
  },
  {
    week_end: "2/17/2024",
    pathogen: "RSV",
    "cc65+ years": "0.06",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "2/24/2024",
    pathogen: "Combined",
    "cc65+ years": "3.07",
    "cc18-64 years": "1.98",
    "cc0-17 years": "2.17"
  },
  {
    week_end: "2/24/2024",
    pathogen: "COVID-19",
    "cc65+ years": "2.43",
    "cc18-64 years": "1.32",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "2/24/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.63",
    "cc18-64 years": "0.67",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "2/24/2024",
    pathogen: "RSV",
    "cc65+ years": "0.04",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "3/2/2024",
    pathogen: "Combined",
    "cc65+ years": "2.98",
    "cc18-64 years": "1.88",
    "cc0-17 years": "3.85"
  },
  {
    week_end: "3/2/2024",
    pathogen: "COVID-19",
    "cc65+ years": "2.38",
    "cc18-64 years": "1.19",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "3/2/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.59",
    "cc18-64 years": "0.71",
    "cc0-17 years": "2.37"
  },
  {
    week_end: "3/2/2024",
    pathogen: "RSV",
    "cc65+ years": "0.03",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "3/9/2024",
    pathogen: "Combined",
    "cc65+ years": "2.79",
    "cc18-64 years": "1.57",
    "cc0-17 years": "2.49"
  },
  {
    week_end: "3/9/2024",
    pathogen: "COVID-19",
    "cc65+ years": "2.13",
    "cc18-64 years": "0.9",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "3/9/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.64",
    "cc18-64 years": "0.67",
    "cc0-17 years": "1.56"
  },
  {
    week_end: "3/9/2024",
    pathogen: "RSV",
    "cc65+ years": "0.04",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "3/16/2024",
    pathogen: "Combined",
    "cc65+ years": "2.54",
    "cc18-64 years": "1.51",
    "cc0-17 years": "2.98"
  },
  {
    week_end: "3/16/2024",
    pathogen: "COVID-19",
    "cc65+ years": "2.04",
    "cc18-64 years": "0.83",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "3/16/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.5",
    "cc18-64 years": "0.68",
    "cc0-17 years": "1.64"
  },
  {
    week_end: "3/16/2024",
    pathogen: "RSV",
    "cc65+ years": "0.02",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "3/23/2024",
    pathogen: "Combined",
    "cc65+ years": "2.1",
    "cc18-64 years": "1.31",
    "cc0-17 years": "2.31"
  },
  {
    week_end: "3/23/2024",
    pathogen: "COVID-19",
    "cc65+ years": "1.66",
    "cc18-64 years": "0.85",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "3/23/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.42",
    "cc18-64 years": "0.46",
    "cc0-17 years": "1.59"
  },
  {
    week_end: "3/23/2024",
    pathogen: "RSV",
    "cc65+ years": "0.02",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "3/30/2024",
    pathogen: "Combined",
    "cc65+ years": "1.8",
    "cc18-64 years": "1.18",
    "cc0-17 years": "2.2"
  },
  {
    week_end: "3/30/2024",
    pathogen: "COVID-19",
    "cc65+ years": "1.42",
    "cc18-64 years": "0.77",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "3/30/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.38",
    "cc18-64 years": "0.41",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "3/30/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "4/6/2024",
    pathogen: "Combined",
    "cc65+ years": "1.54",
    "cc18-64 years": "1.08",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "4/6/2024",
    pathogen: "COVID-19",
    "cc65+ years": "1.21",
    "cc18-64 years": "0.69",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "4/6/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.32",
    "cc18-64 years": "0.4",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "4/6/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "4/13/2024",
    pathogen: "Combined",
    "cc65+ years": "1.4",
    "cc18-64 years": "0.95",
    "cc0-17 years": "1.6"
  },
  {
    week_end: "4/13/2024",
    pathogen: "COVID-19",
    "cc65+ years": "1.08",
    "cc18-64 years": "0.63",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "4/13/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.32",
    "cc18-64 years": "0.33",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "4/13/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "4/20/2024",
    pathogen: "Combined",
    "cc65+ years": "1.27",
    "cc18-64 years": "0.75",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "4/20/2024",
    pathogen: "COVID-19",
    "cc65+ years": "0.99",
    "cc18-64 years": "0.48",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "4/20/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.27",
    "cc18-64 years": "0.27",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "4/20/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "4/27/2024",
    pathogen: "Combined",
    "cc65+ years": "1.05",
    "cc18-64 years": "0.58",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "4/27/2024",
    pathogen: "COVID-19",
    "cc65+ years": "0.86",
    "cc18-64 years": "0.44",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "4/27/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.19",
    "cc18-64 years": "0.15",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "4/27/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "5/4/2024",
    pathogen: "Combined",
    "cc65+ years": "1.01",
    "cc18-64 years": "0.53",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "5/4/2024",
    pathogen: "COVID-19",
    "cc65+ years": "0.85",
    "cc18-64 years": "0.44",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "5/4/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.16",
    "cc18-64 years": "0.09",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "5/4/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "5/11/2024",
    pathogen: "Combined",
    "cc65+ years": "0.86",
    "cc18-64 years": "0.53",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "5/11/2024",
    pathogen: "COVID-19",
    "cc65+ years": "0.67",
    "cc18-64 years": "0.4",
    "cc0-17 years": "0"
  },
  {
    week_end: "5/11/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.18",
    "cc18-64 years": "0.14",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "5/11/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "5/18/2024",
    pathogen: "Combined",
    "cc65+ years": "0.79",
    "cc18-64 years": "0.52",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "5/18/2024",
    pathogen: "COVID-19",
    "cc65+ years": "0.69",
    "cc18-64 years": "0.37",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "5/18/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.1",
    "cc18-64 years": "0.14",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "5/18/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "5/25/2024",
    pathogen: "Combined",
    "cc65+ years": "0.79",
    "cc18-64 years": "0.43",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "5/25/2024",
    pathogen: "COVID-19",
    "cc65+ years": "0.71",
    "cc18-64 years": "0.36",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "5/25/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.08",
    "cc18-64 years": "0.08",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "5/25/2024",
    pathogen: "RSV",
    "cc65+ years": "0",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "6/1/2024",
    pathogen: "Combined",
    "cc65+ years": "0.78",
    "cc18-64 years": "0.4",
    "cc0-17 years": "0"
  },
  {
    week_end: "6/1/2024",
    pathogen: "COVID-19",
    "cc65+ years": "0.69",
    "cc18-64 years": "0.32",
    "cc0-17 years": "0"
  },
  {
    week_end: "6/1/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.08",
    "cc18-64 years": "0.08",
    "cc0-17 years": "0"
  },
  {
    week_end: "6/1/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "6/8/2024",
    pathogen: "Combined",
    "cc65+ years": "0.75",
    "cc18-64 years": "0.33",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "6/8/2024",
    pathogen: "COVID-19",
    "cc65+ years": "0.66",
    "cc18-64 years": "0.26",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "6/8/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.09",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "6/8/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "6/15/2024",
    pathogen: "Combined",
    "cc65+ years": "0.83",
    "cc18-64 years": "0.43",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "6/15/2024",
    pathogen: "COVID-19",
    "cc65+ years": "0.76",
    "cc18-64 years": "0.32",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "6/15/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.06",
    "cc18-64 years": "0.11",
    "cc0-17 years": "0"
  },
  {
    week_end: "6/15/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "6/22/2024",
    pathogen: "Combined",
    "cc65+ years": "0.99",
    "cc18-64 years": "0.45",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "6/22/2024",
    pathogen: "COVID-19",
    "cc65+ years": "0.91",
    "cc18-64 years": "0.39",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "6/22/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.08",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "6/22/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "6/29/2024",
    pathogen: "Combined",
    "cc65+ years": "0.98",
    "cc18-64 years": "0.42",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "6/29/2024",
    pathogen: "COVID-19",
    "cc65+ years": "0.92",
    "cc18-64 years": "0.38",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "6/29/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.06",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "6/29/2024",
    pathogen: "RSV",
    "cc65+ years": "0",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "7/6/2024",
    pathogen: "Combined",
    "cc65+ years": "1.16",
    "cc18-64 years": "0.44",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "7/6/2024",
    pathogen: "COVID-19",
    "cc65+ years": "1.11",
    "cc18-64 years": "0.4",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "7/6/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.06",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "7/6/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "7/13/2024",
    pathogen: "Combined",
    "cc65+ years": "1.3",
    "cc18-64 years": "0.47",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "7/13/2024",
    pathogen: "COVID-19",
    "cc65+ years": "1.23",
    "cc18-64 years": "0.4",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "7/13/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.07",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "7/13/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "7/20/2024",
    pathogen: "Combined",
    "cc65+ years": "1.57",
    "cc18-64 years": "0.61",
    "cc0-17 years": "0"
  },
  {
    week_end: "7/20/2024",
    pathogen: "COVID-19",
    "cc65+ years": "1.51",
    "cc18-64 years": "0.54",
    "cc0-17 years": "0"
  },
  {
    week_end: "7/20/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.07",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "7/20/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "7/27/2024",
    pathogen: "Combined",
    "cc65+ years": "1.81",
    "cc18-64 years": "0.77",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "7/27/2024",
    pathogen: "COVID-19",
    "cc65+ years": "1.78",
    "cc18-64 years": "0.75",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "7/27/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.04",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "7/27/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "8/3/2024",
    pathogen: "Combined",
    "cc65+ years": "2.1",
    "cc18-64 years": "0.76",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "8/3/2024",
    pathogen: "COVID-19",
    "cc65+ years": "2.05",
    "cc18-64 years": "0.71",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "8/3/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.05",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "8/3/2024",
    pathogen: "RSV",
    "cc65+ years": "0",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "8/10/2024",
    pathogen: "Combined",
    "cc65+ years": "2.29",
    "cc18-64 years": "0.75",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "8/10/2024",
    pathogen: "COVID-19",
    "cc65+ years": "2.23",
    "cc18-64 years": "0.74",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "8/10/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.05",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "8/10/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "8/17/2024",
    pathogen: "Combined",
    "cc65+ years": "2.27",
    "cc18-64 years": "0.88",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "8/17/2024",
    pathogen: "COVID-19",
    "cc65+ years": "2.22",
    "cc18-64 years": "0.87",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "8/17/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.05",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "8/17/2024",
    pathogen: "RSV",
    "cc65+ years": "0",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "8/24/2024",
    pathogen: "Combined",
    "cc65+ years": "2.62",
    "cc18-64 years": "1",
    "cc0-17 years": "1.72"
  },
  {
    week_end: "8/24/2024",
    pathogen: "COVID-19",
    "cc65+ years": "2.57",
    "cc18-64 years": "0.96",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "8/24/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.06",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "8/24/2024",
    pathogen: "RSV",
    "cc65+ years": "0",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "8/31/2024",
    pathogen: "Combined",
    "cc65+ years": "2.83",
    "cc18-64 years": "1.24",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "8/31/2024",
    pathogen: "COVID-19",
    "cc65+ years": "2.77",
    "cc18-64 years": "1.19",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "8/31/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.06",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "8/31/2024",
    pathogen: "RSV",
    "cc65+ years": "0",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "9/7/2024",
    pathogen: "Combined",
    "cc65+ years": "2.61",
    "cc18-64 years": "0.9",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "9/7/2024",
    pathogen: "COVID-19",
    "cc65+ years": "2.56",
    "cc18-64 years": "0.88",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "9/7/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.05",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "9/7/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "9/14/2024",
    pathogen: "Combined",
    "cc65+ years": "2.55",
    "cc18-64 years": "1.17",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "9/14/2024",
    pathogen: "COVID-19",
    "cc65+ years": "2.51",
    "cc18-64 years": "1.13",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "9/14/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.04",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "9/14/2024",
    pathogen: "RSV",
    "cc65+ years": "0",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "9/21/2024",
    pathogen: "Combined",
    "cc65+ years": "2.38",
    "cc18-64 years": "0.8",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "9/21/2024",
    pathogen: "COVID-19",
    "cc65+ years": "2.3",
    "cc18-64 years": "0.78",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "9/21/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.09",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "9/21/2024",
    pathogen: "RSV",
    "cc65+ years": "XYZ",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "9/28/2024",
    pathogen: "Combined",
    "cc65+ years": "2.24",
    "cc18-64 years": "0.76",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "9/28/2024",
    pathogen: "COVID-19",
    "cc65+ years": "2.17",
    "cc18-64 years": "0.73",
    "cc0-17 years": "0"
  },
  {
    week_end: "9/28/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.07",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "9/28/2024",
    pathogen: "RSV",
    "cc65+ years": "0",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "10/5/2024",
    pathogen: "Combined",
    "cc65+ years": "2.02",
    "cc18-64 years": "1.06",
    "cc0-17 years": "0"
  },
  {
    week_end: "10/5/2024",
    pathogen: "COVID-19",
    "cc65+ years": "1.97",
    "cc18-64 years": "1.03",
    "cc0-17 years": "0"
  },
  {
    week_end: "10/5/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.05",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "0"
  },
  {
    week_end: "10/5/2024",
    pathogen: "RSV",
    "cc65+ years": "0",
    "cc18-64 years": "0",
    "cc0-17 years": "0"
  },
  {
    week_end: "10/12/2024",
    pathogen: "Combined",
    "cc65+ years": "1.76",
    "cc18-64 years": "0.73",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "10/12/2024",
    pathogen: "COVID-19",
    "cc65+ years": "1.72",
    "cc18-64 years": "0.64",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "10/12/2024",
    pathogen: "Influenza",
    "cc65+ years": "0.04",
    "cc18-64 years": "XYZ",
    "cc0-17 years": "XYZ"
  },
  {
    week_end: "10/12/2024",
    pathogen: "RSV",
    "cc65+ years": "0",
    "cc18-64 years": "0",
    "cc0-17 years": "XYZ"
  }
], pe = "death_demo_test.csv", he = "file", ge = {
  horizontal: !1,
  series: !1
}, ue = "4.24.10", we = 0, ke = [
  {
    values: [
      "Combined",
      "COVID-19",
      "Influenza",
      "RSV"
    ],
    filterStyle: "dropdown",
    id: 1730303199537,
    active: "Combined",
    columnName: "pathogen",
    label: "Pathogen"
  }
], me = {
  annotations: y,
  type: l,
  debugSvg: d,
  chartMessage: p,
  title: h,
  showTitle: g,
  showDownloadMediaButton: u,
  theme: w,
  animate: k,
  fontSize: m,
  lineDatapointStyle: f,
  lineDatapointColor: _,
  barHasBorder: D,
  isLollipopChart: b,
  lollipopShape: Y,
  lollipopColorStyle: Z,
  visualizationSubType: X,
  barStyle: C,
  roundingStyle: S,
  tipRounding: V,
  isResponsiveTicks: I,
  general: x,
  padding: L,
  preliminaryData: O,
  yAxis: R,
  boxplot: v,
  topAxis: z,
  isLegendValue: T,
  barThickness: $,
  barHeight: M,
  barSpace: A,
  heights: B,
  xAxis: P,
  table: H,
  orientation: F,
  color: q,
  columns: G,
  legend: N,
  brush: K,
  exclusions: W,
  palette: E,
  isPaletteReversed: Q,
  twoColor: U,
  labels: j,
  dataFormat: J,
  confidenceKeys: ee,
  visual: ae,
  useLogScale: ce,
  filterBehavior: se,
  highlightedBarValues: te,
  series: re,
  tooltips: ne,
  forestPlot: oe,
  area: ie,
  sankey: ye,
  visualizationType: le,
  data: de,
  dataFileName: pe,
  dataFileSourceType: he,
  dataDescription: ge,
  version: ue,
  dynamicMarginTop: we,
  filters: ke
}, fe = "chart", _e = !1, De = {
  noData: "No Data Available"
}, be = "Combo Bar-Line Chart", Ye = !0, Ze = !1, Xe = "theme-purple", Ce = !1, Se = "medium", Ve = "hover", Ie = "Same as Line", xe = "false", Le = !1, Oe = "circle", Re = "two-tone", ve = "regular", ze = "", Te = "standard", $e = "top", Me = !1, Ae = {
  showDownloadButton: !1
}, Be = {
  left: 5,
  right: 5
}, Pe = [
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
], He = {
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
}, Fe = {
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
}, qe = {
  hasLine: !1
}, Ge = !1, Ne = 0.35, Ke = 25, We = 15, Ee = {
  vertical: 300,
  horizontal: 750
}, Qe = {
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
}, Ue = {
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
}, je = "vertical", Je = "pinkpurple", ea = {}, aa = {
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
}, ca = {
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
}, sa = {
  active: !1,
  keys: []
}, ta = "qualitative-soft", ra = !1, na = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, oa = !0, ia = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, ya = {}, la = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, da = !1, pa = "Filter Change", ha = [], ga = [
  {
    dataKey: "Data 2",
    type: "Bar",
    axis: "Left",
    tooltip: !0
  }
], ua = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, wa = {
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
}, ka = {
  isStacked: !1
}, ma = {
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
}, fa = [], _a = "332", Da = [
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
], ba = "Bar", Ya = [], Za = 4.23, Xa = 0, Ca = "4.24.4", Sa = {
  type: fe,
  debugSvg: _e,
  chartMessage: De,
  title: be,
  showTitle: Ye,
  showDownloadMediaButton: Ze,
  theme: Xe,
  animate: Ce,
  fontSize: Se,
  lineDatapointStyle: Ve,
  lineDatapointColor: Ie,
  barHasBorder: xe,
  isLollipopChart: Le,
  lollipopShape: Oe,
  lollipopColorStyle: Re,
  visualizationSubType: ve,
  barStyle: ze,
  roundingStyle: Te,
  tipRounding: $e,
  isResponsiveTicks: Me,
  general: Ae,
  padding: Be,
  preliminaryData: Pe,
  yAxis: He,
  boxplot: Fe,
  topAxis: qe,
  isLegendValue: Ge,
  barThickness: Ne,
  barHeight: Ke,
  barSpace: We,
  heights: Ee,
  xAxis: Qe,
  table: Ue,
  orientation: je,
  color: Je,
  columns: ea,
  legend: aa,
  brush: ca,
  exclusions: sa,
  palette: ta,
  isPaletteReversed: ra,
  twoColor: na,
  labels: oa,
  dataFormat: ia,
  confidenceKeys: ya,
  visual: la,
  useLogScale: da,
  filterBehavior: pa,
  highlightedBarValues: ha,
  series: ga,
  tooltips: ua,
  forestPlot: wa,
  area: ka,
  sankey: ma,
  suppressedData: fa,
  height: _a,
  data: Da,
  visualizationType: ba,
  filters: Ya,
  validated: Za,
  dynamicMarginTop: Xa,
  version: Ca
}, hc = {
  title: "Components/Templates/Chart/Suppression",
  component: i
}, e = {
  args: {
    config: me,
    isEditor: !1
  }
}, a = {
  args: {
    config: Sa,
    isEditor: !1
  }
};
var c, s, t;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(c = e.parameters) == null ? void 0 : c.docs,
    source: {
      originalSource: `{
  args: {
    config: suppressionConfig,
    isEditor: false
  }
}`,
      ...(t = (s = e.parameters) == null ? void 0 : s.docs) == null ? void 0 : t.source
    }
  }
};
var r, n, o;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(r = a.parameters) == null ? void 0 : r.docs,
    source: {
      originalSource: `{
  args: {
    config: SuppressedConfig,
    isEditor: false
  }
}`,
      ...(o = (n = a.parameters) == null ? void 0 : n.docs) == null ? void 0 : o.source
    }
  }
};
const gc = ["SuppressedLines", "SuppressedBars"];
export {
  a as SuppressedBars,
  e as SuppressedLines,
  gc as __namedExportsOrder,
  hc as default
};
