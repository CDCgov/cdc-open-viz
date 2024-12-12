const e = "chart";
const t = {
  noData: "No Data Available"
}, a = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "brown",
  "gray",
  "black"
], o = "", s = !0, i = !1, l = "theme-blue", n = !1, r = "medium", c = "hover", d = "Same as Line", u = "false", h = !1, p = "circle", g = "two-tone", y = "regular", f = "", m = "standard", b = "top", x = !1, L = {
  showDownloadButton: !1
}, v = {
  left: 5,
  right: 5
}, S = [], w = {
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
  anchors: []
}, T = {
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
}, k = {
  hasLine: !1
}, C = !1, D = 0.35, A = 25, P = 15, R = {
  vertical: 300,
  horizontal: 750
}, B = {
  sortDates: !1,
  anchors: [],
  type: "continuous",
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
  dataKey: "x",
  tickWidthMax: 21
}, M = {
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
}, H = "vertical", z = "pinkpurple", O = {}, q = {
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
}, F = {
  height: 25,
  data: [],
  active: !1
}, V = {
  active: !1,
  keys: []
}, N = "qualitative-bold", K = !1, I = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, Q = !1, W = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, U = {}, E = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, Z = !1, j = "Filter Change", G = [], J = [
  {
    dataKey: "y1",
    type: "Scatter Plot",
    axis: "Left",
    tooltip: !0
  },
  {
    dataKey: "y2",
    type: "Scatter Plot",
    axis: "Left",
    tooltip: !0
  }
], X = {
  opacity: 90,
  singleSeries: !1
}, Y = {
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
  shape: "circle",
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
}, _ = {
  isStacked: !1
}, $ = {}, ee = "Scatter Plot", te = [
  {
    x: 6e4,
    y1: 19e3,
    y2: 47e3,
    y3: 59e3,
    y4: 91e3
  },
  {
    x: 64e3,
    y1: 18e3,
    y2: 32e3,
    y3: 68e3,
    y4: 89e3
  },
  {
    x: 63e3,
    y1: 7e3,
    y2: 38e3,
    y3: 74e3,
    y4: 89e3
  },
  {
    x: 66e3,
    y1: 1e4,
    y2: 39e3,
    y3: 56e3,
    y4: 91e3
  },
  {
    x: 62e3,
    y1: 16e3,
    y2: 38e3,
    y3: 55e3,
    y4: 76e3
  },
  {
    x: 62e3,
    y1: 2e4,
    y2: 46e3,
    y3: 52e3,
    y4: 94e3
  },
  {
    x: 61e3,
    y1: 9e3,
    y2: 41e3,
    y3: 57e3,
    y4: 86e3
  },
  {
    x: 62e3,
    y1: 1e4,
    y2: 47e3,
    y3: 56e3,
    y4: 8e4
  },
  {
    x: 73e3,
    y1: 1e3,
    y2: 36e3,
    y3: 71e3,
    y4: 94e3
  },
  {
    x: 63e3,
    y1: 13e3,
    y2: 3e4,
    y3: 66e3,
    y4: 78e3
  }
], ae = "valid-scatterplot.csv", oe = "file", se = 4.23, ie = 0, le = {
  type: e,
  debugSvg: !1,
  chartMessage: t,
  customColors: a,
  title: o,
  showTitle: s,
  showDownloadMediaButton: i,
  theme: l,
  animate: n,
  fontSize: r,
  lineDatapointStyle: c,
  lineDatapointColor: d,
  barHasBorder: u,
  isLollipopChart: h,
  lollipopShape: p,
  lollipopColorStyle: g,
  visualizationSubType: y,
  barStyle: f,
  roundingStyle: m,
  tipRounding: b,
  isResponsiveTicks: x,
  general: L,
  padding: v,
  suppressedData: S,
  yAxis: w,
  boxplot: T,
  topAxis: k,
  isLegendValue: C,
  barThickness: D,
  barHeight: A,
  barSpace: P,
  heights: R,
  xAxis: B,
  table: M,
  orientation: H,
  color: z,
  columns: O,
  legend: q,
  brush: F,
  exclusions: V,
  palette: N,
  isPaletteReversed: K,
  twoColor: I,
  labels: Q,
  dataFormat: W,
  confidenceKeys: U,
  visual: E,
  useLogScale: Z,
  filterBehavior: j,
  highlightedBarValues: G,
  series: J,
  tooltips: X,
  forestPlot: Y,
  area: _,
  datasets: $,
  visualizationType: ee,
  data: te,
  dataFileName: ae,
  dataFileSourceType: oe,
  validated: se,
  dynamicMarginTop: ie
};
export {
  le as s
};
