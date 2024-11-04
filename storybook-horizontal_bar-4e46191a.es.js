const e = "chart", t = "Line", a = {
  dataKey: "STATE"
}, o = [
  {
    dataKey: "Rate"
  }
], i = [
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
], s = [
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
], n = "hex-data.csv", l = "file", r = [
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
], c = {
  horizontal: !1,
  series: !1
}, Te = {
  allowLineToBarGraph: !0,
  type: e,
  visualizationType: t,
  xAxis: a,
  series: o,
  filters: i,
  data: s,
  dataFileName: n,
  dataFileSourceType: l,
  formattedData: r,
  dataDescription: c
}, d = [], h = "chart", u = !1, p = {
  noData: "No Data Available"
}, g = "", L = !0, f = !1, w = "theme-blue", m = !1, y = "medium", T = "hover", b = "Same as Line", v = "false", A = !1, S = "circle", x = "two-tone", R = "stacked", k = "", D = "standard", I = "top", H = !1, B = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  hideNullValue: !0
}, C = {
  left: 5,
  right: 5
}, j = [], z = {
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
  labelPlacement: "Below Bar"
}, N = {
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
}, F = {
  hasLine: !1
}, M = !1, P = "0.37", O = 25, W = 15, U = {
  vertical: 300,
  horizontal: 308
}, E = {
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
  dataKey: "Race",
  tickWidthMax: 31
}, V = {
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
}, q = "horizontal", K = "pinkpurple", $ = {}, G = {
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
}, Q = {
  height: 25,
  active: !1
}, _ = {
  active: !1,
  keys: []
}, Z = "qualitative-bold", J = !1, X = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, Y = !1, ee = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, te = {}, ae = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, oe = !1, ie = "Filter Change", se = [], ne = [
  {
    dataKey: "Age-adjusted rate",
    type: "Bar",
    axis: "Left",
    tooltip: !0
  }
], le = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, re = {
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
}, ce = {
  isStacked: !1
}, de = {
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
}, he = {}, ue = "Bar", pe = [
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
], ge = "valid-data-chart.csv", Le = "file", fe = [
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
], we = {
  horizontal: !1,
  series: !1
}, me = "4.24.10", ye = 0, be = {
  annotations: d,
  type: h,
  debugSvg: u,
  chartMessage: p,
  title: g,
  showTitle: L,
  showDownloadMediaButton: f,
  theme: w,
  animate: m,
  fontSize: y,
  lineDatapointStyle: T,
  lineDatapointColor: b,
  barHasBorder: v,
  isLollipopChart: A,
  lollipopShape: S,
  lollipopColorStyle: x,
  visualizationSubType: R,
  barStyle: k,
  roundingStyle: D,
  tipRounding: I,
  isResponsiveTicks: H,
  general: B,
  padding: C,
  preliminaryData: j,
  yAxis: z,
  boxplot: N,
  topAxis: F,
  isLegendValue: M,
  barThickness: P,
  barHeight: O,
  barSpace: W,
  heights: U,
  xAxis: E,
  table: V,
  orientation: q,
  color: K,
  columns: $,
  legend: G,
  brush: Q,
  exclusions: _,
  palette: Z,
  isPaletteReversed: J,
  twoColor: X,
  labels: Y,
  dataFormat: ee,
  confidenceKeys: te,
  visual: ae,
  useLogScale: oe,
  filterBehavior: ie,
  highlightedBarValues: se,
  series: ne,
  tooltips: le,
  forestPlot: re,
  area: ce,
  sankey: de,
  datasets: he,
  visualizationType: ue,
  data: pe,
  dataFileName: ge,
  dataFileSourceType: Le,
  formattedData: fe,
  dataDescription: we,
  version: me,
  dynamicMarginTop: ye
};
export {
  Te as b,
  be as h
};
