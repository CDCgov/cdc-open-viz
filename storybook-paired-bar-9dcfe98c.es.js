const e = [], t = "chart";
const a = {
  noData: "No Data Available"
}, o = "", i = !0, s = !1, l = "theme-blue", n = !1, r = "medium", d = "hover", c = "Same as Line", u = "false", p = !1, g = "circle", h = "two-tone", f = "regular", m = "", b = "standard", y = "top", x = !1, L = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  hideNullValue: !0
}, w = {
  left: 5,
  right: 5
}, S = [], v = {
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
  tickRotation: "40",
  anchors: [],
  shoMissingDataLabel: !0,
  showMissingDataLine: !0,
  categories: [],
  label: "X Axis Title"
}, A = {
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
}, D = {
  hasLine: !1
}, k = !1, T = "0.37", M = 25, F = 15, C = {
  vertical: 300,
  horizontal: 280
}, B = {
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
  maxTickRotation: 45,
  padding: 0,
  dataKey: "Age Group"
}, R = {
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
}, P = "horizontal", z = "pinkpurple", O = {}, G = {
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
}, H = {
  height: 25,
  active: !1
}, V = {
  active: !1,
  keys: []
}, q = "qualitative-bold", N = !1, I = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, K = !1, Q = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, W = {}, U = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, _ = !1, j = "Filter Change", E = [], X = [
  {
    dataKey: "Male",
    type: "Paired Bar",
    axis: "Left",
    tooltip: !0
  },
  {
    dataKey: "Female",
    type: "Paired Bar",
    axis: "Left",
    tooltip: !0
  }
], Z = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, J = {
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
}, Y = {
  isStacked: !1
}, $ = {
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
}, ee = {}, te = "Paired Bar", ae = [
  {
    "Age Group": "65",
    Male: "730",
    Female: "402"
  },
  {
    "Age Group": "<15",
    Male: "7428",
    Female: "5714"
  },
  {
    "Age Group": "15-24",
    Male: "5176",
    Female: "3588"
  },
  {
    "Age Group": "25-34",
    Male: "5624",
    Female: "3410"
  },
  {
    "Age Group": "35-44",
    Male: "10756",
    Female: "7478"
  },
  {
    "Age Group": "45-54",
    Male: "8259",
    Female: "5633"
  },
  {
    "Age Group": "55-64",
    Male: "1235",
    Female: "810"
  }
], oe = "paired-bar-formatted.json", ie = "file", se = [
  {
    "Age Group": "65",
    Male: "730",
    Female: "402"
  },
  {
    "Age Group": "<15",
    Male: "7428",
    Female: "5714"
  },
  {
    "Age Group": "15-24",
    Male: "5176",
    Female: "3588"
  },
  {
    "Age Group": "25-34",
    Male: "5624",
    Female: "3410"
  },
  {
    "Age Group": "35-44",
    Male: "10756",
    Female: "7478"
  },
  {
    "Age Group": "45-54",
    Male: "8259",
    Female: "5633"
  },
  {
    "Age Group": "55-64",
    Male: "1235",
    Female: "810"
  }
], le = {
  horizontal: !1,
  series: !0,
  singleRow: !0
}, ne = "4.24.10", re = {
  annotations: e,
  type: t,
  debugSvg: !1,
  chartMessage: a,
  title: o,
  showTitle: i,
  showDownloadMediaButton: s,
  theme: l,
  animate: n,
  fontSize: r,
  lineDatapointStyle: d,
  lineDatapointColor: c,
  barHasBorder: u,
  isLollipopChart: p,
  lollipopShape: g,
  lollipopColorStyle: h,
  visualizationSubType: f,
  barStyle: m,
  roundingStyle: b,
  tipRounding: y,
  isResponsiveTicks: x,
  general: L,
  padding: w,
  preliminaryData: S,
  yAxis: v,
  boxplot: A,
  topAxis: D,
  isLegendValue: k,
  barThickness: T,
  barHeight: M,
  barSpace: F,
  heights: C,
  xAxis: B,
  table: R,
  orientation: P,
  color: z,
  columns: O,
  legend: G,
  brush: H,
  exclusions: V,
  palette: q,
  isPaletteReversed: N,
  twoColor: I,
  labels: K,
  dataFormat: Q,
  confidenceKeys: W,
  visual: U,
  useLogScale: _,
  filterBehavior: j,
  highlightedBarValues: E,
  series: X,
  tooltips: Z,
  forestPlot: J,
  area: Y,
  sankey: $,
  datasets: ee,
  visualizationType: te,
  data: ae,
  dataFileName: oe,
  dataFileSourceType: ie,
  formattedData: se,
  dataDescription: le,
  version: ne
};
export {
  re as p
};
