const e = [
  {
    text: "New Annotation",
    snapToNearestPoint: !0,
    fontSize: 16,
    show: {
      desktop: !0,
      tablet: !0,
      mobile: !0
    },
    markerType: "arrow",
    connectorType: "line",
    colors: {
      label: "black",
      connector: "black",
      marker: "black"
    },
    selected: !0,
    anchor: {
      vertical: !1,
      horizontal: !1
    },
    connectionType: "line",
    marker: "arrow",
    edit: {
      subject: !0,
      label: !0
    },
    seriesKey: "Radius",
    originalX: 235.39284974093266,
    x: 235.39284974093266,
    y: 118.7374749498998,
    xKey: "Neptune",
    yKey: "3.86",
    dx: 49,
    dy: -58,
    opacity: 100,
    savedDimensions: [
      772.34,
      518.140625
    ]
  }
], a = "chart", t = !1, i = {
  noData: "No Data Available"
}, o = "Example Area Chart", s = !0, n = !1, l = "theme-blue", r = !1, d = "medium", c = "hover", u = "Same as Line", m = "false", h = !1, p = "circle", f = "two-tone", g = "regular", b = "", y = "standard", x = "top", D = !1, L = {
  showDownloadButton: !1
}, v = {
  left: 5,
  right: 5
}, w = [], S = [], T = {
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
  isLegendValue: !1,
  label: "Y Axis Example Label"
}, k = {
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
}, R = {
  hasLine: !1
}, C = !1, A = 0.35, M = 25, z = 20, P = {
  vertical: 300,
  horizontal: 750
}, O = {
  sortDates: !1,
  anchors: [],
  type: "categorical",
  showTargetLabel: !0,
  targetLabel: "Target",
  hideAxis: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: "50",
  tickRotation: 0,
  min: "",
  max: "",
  labelColor: "#333",
  tickLabelColor: "#333",
  tickColor: "#333",
  numTicks: "9",
  labelOffset: 65,
  axisPadding: 0,
  target: 0,
  maxTickRotation: 0,
  isLegendValue: !1,
  dataKey: "name",
  label: "X Axis Example Label",
  dateParseFormat: "%m/%d/%Y",
  dateDisplayFormat: "%m/%d/%Y",
  tickWidthMax: 69
}, B = {
  label: "Data Type by Category Name",
  expanded: !1,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !0,
  showDataTableLink: !0,
  indexLabel: "",
  download: !0,
  showVertical: !1,
  dateDisplayFormat: "",
  show: !0
}, F = "vertical", H = "pinkpurple", N = {}, V = {
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
  lineMode: !1,
  verticalSorted: !1,
  highlightOnHover: !1,
  seriesHighlight: [],
  position: "right",
  label: "Type of Data"
}, q = {
  height: 25,
  data: [],
  active: !1
}, K = {
  active: !0,
  keys: []
}, E = "qualitative-bold", I = !1, W = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, U = !1, Q = {
  commas: !0,
  prefix: "",
  suffix: " units",
  abbreviated: !0,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1,
  useFormat: !0
}, Y = {}, j = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, J = !1, X = "dropdown", _ = [], Z = [
  {
    dataKey: "Radius",
    type: "Area Chart",
    tooltip: !0,
    axis: "Left"
  }
], G = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, $ = {
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
}, ee = {
  isStacked: !1
}, ae = {
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
}, te = {
  horizontal: !1,
  series: !1
}, ie = "valid-area-chart.json", oe = "file", se = [
  {
    name: "Jupiter",
    Radius: "10.97",
    Diameter: "25.1",
    distance: "0"
  },
  {
    name: "Saturn",
    Radius: "9.14",
    Diameter: "18",
    distance: "0"
  },
  {
    name: "Uranus",
    Radius: "-4",
    Diameter: "-30",
    distance: "0"
  },
  {
    name: "Neptune",
    Radius: "3.86",
    Diameter: "7",
    distance: "0"
  },
  {
    name: "Earth",
    Radius: "1",
    Diameter: "2",
    distance: "0"
  },
  {
    name: "Venus",
    Radius: "0.950",
    Diameter: "2",
    distance: "0"
  },
  {
    name: "Mars",
    Radius: "0.532",
    Diameter: "1",
    distance: "0"
  },
  {
    name: "Mercury",
    Radius: "0.383",
    Diameter: "0.7",
    distance: "0"
  },
  {
    name: "Pluto",
    Radius: "0.181",
    Diameter: "0.3",
    distance: "0"
  }
], ne = 300, le = "Area Chart", re = "This example shows a bar chart created in the visualization editor in WCMS", de = "0", ce = [
  {
    name: "Jupiter",
    Radius: "10.97",
    Diameter: "25.1",
    distance: "0"
  },
  {
    name: "Saturn",
    Radius: "9.14",
    Diameter: "18",
    distance: "0"
  },
  {
    name: "Uranus",
    Radius: "-4",
    Diameter: "-30",
    distance: "0"
  },
  {
    name: "Neptune",
    Radius: "3.86",
    Diameter: "7",
    distance: "0"
  },
  {
    name: "Earth",
    Radius: "1",
    Diameter: "2",
    distance: "0"
  },
  {
    name: "Venus",
    Radius: "0.950",
    Diameter: "2",
    distance: "0"
  },
  {
    name: "Mars",
    Radius: "0.532",
    Diameter: "1",
    distance: "0"
  },
  {
    name: "Mercury",
    Radius: "0.383",
    Diameter: "0.7",
    distance: "0"
  },
  {
    name: "Pluto",
    Radius: "0.181",
    Diameter: "0.3",
    distance: "0"
  }
], ue = "4.24.3", me = 0, he = {
  annotations: e,
  type: a,
  debugSvg: t,
  chartMessage: i,
  title: o,
  showTitle: s,
  showDownloadMediaButton: n,
  theme: l,
  animate: r,
  fontSize: d,
  lineDatapointStyle: c,
  lineDatapointColor: u,
  barHasBorder: m,
  isLollipopChart: h,
  lollipopShape: p,
  lollipopColorStyle: f,
  visualizationSubType: g,
  barStyle: b,
  roundingStyle: y,
  tipRounding: x,
  isResponsiveTicks: D,
  general: L,
  padding: v,
  suppressedData: w,
  preliminaryData: S,
  yAxis: T,
  boxplot: k,
  topAxis: R,
  isLegendValue: C,
  barThickness: A,
  barHeight: M,
  barSpace: z,
  heights: P,
  xAxis: O,
  table: B,
  orientation: F,
  color: H,
  columns: N,
  legend: V,
  brush: q,
  exclusions: K,
  palette: E,
  isPaletteReversed: I,
  twoColor: W,
  labels: U,
  dataFormat: Q,
  confidenceKeys: Y,
  visual: j,
  useLogScale: J,
  filterBehavior: X,
  highlightedBarValues: _,
  series: Z,
  tooltips: G,
  forestPlot: $,
  area: ee,
  sankey: ae,
  dataDescription: te,
  dataFileName: ie,
  dataFileSourceType: oe,
  formattedData: se,
  height: ne,
  visualizationType: le,
  description: re,
  dataCutoff: de,
  data: ce,
  version: ue,
  dynamicMarginTop: me
};
export {
  he as a
};
