const e = [], o = "chart";
const n = {
  noData: "No Data Available"
}, a = "", l = !0, c = !1, r = "theme-blue", S = !1, t = "medium", i = "hover", s = "Same as Line", m = "false", Y = !1, u = "circle", x = "two-tone", A = "regular", d = "", I = "standard", h = "top", p = !0, f = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  hideNullValue: !0,
  showZeroValueDataLabel: !0
}, g = {
  left: 5,
  right: 5
}, M = [], F = {
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
  maxValue: 10,
  label: "Score"
}, b = {
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
}, y = {
  hasLine: !1
}, L = !1, w = 0.35, v = 25, T = 15, k = {
  vertical: 300,
  horizontal: 750
}, D = {
  sortDates: !1,
  anchors: [],
  type: "continuous",
  showTargetLabel: !0,
  targetLabel: "Target",
  hideAxis: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: "20",
  tickRotation: 0,
  min: "",
  max: "",
  labelColor: "#333",
  tickLabelColor: "#333",
  tickColor: "#333",
  numTicks: "",
  labelOffset: "0",
  axisPadding: 200,
  target: 0,
  maxTickRotation: "45",
  label: "Annual Household Income",
  dataKey: "Annual Income",
  axisBBox: 133.94000244140625,
  tickWidthMax: 76
}, C = {
  label: "Data Table",
  expanded: !1,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  indexLabel: "",
  download: !0,
  showVertical: !0,
  dateDisplayFormat: "",
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  show: !0,
  columnName: "Annual Income",
  pivot: "Annual Income",
  showDownloadImgButton: !0
}, P = "vertical", B = "pinkpurple", R = {
  Sex: {
    label: "Sex",
    dataTable: !0,
    tooltips: !0,
    prefix: "",
    suffix: "",
    forestPlot: !1,
    startingPoint: "0",
    forestPlotAlignRight: !1,
    roundToPlace: 0,
    commas: !1,
    showInViz: !1,
    forestPlotStartingPoint: 0,
    name: "Sex"
  }
}, H = {
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
}, O = {
  height: 25,
  active: !1
}, z = {
  active: !1,
  keys: []
}, V = "qualitative4", N = !1, q = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, K = !1, W = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "$",
  bottomAbbreviated: !1,
  bottomCommas: !0
}, Q = {}, U = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, Z = !1, _ = "Filter Change", E = [], $ = [
  {
    dataKey: "Y1 Score",
    type: "Scatter Plot",
    axis: "Left",
    tooltip: !0
  },
  {
    dataKey: "Y2 Score",
    type: "Scatter Plot",
    axis: "Left",
    tooltip: !0
  }
], j = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, G = {
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
}, J = {
  isStacked: !1
}, X = {
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
}, ee = {}, oe = "Scatter Plot", ne = [
  {
    Sex: "Male",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "52000"
  },
  {
    Sex: "Male",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "78000"
  },
  {
    Sex: "Male",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "110000"
  },
  {
    Sex: "Male",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "85000"
  },
  {
    Sex: "Male",
    "Y1 Score": "6",
    "Y2 Score": "7",
    "Annual Income": "88000"
  },
  {
    Sex: "Male",
    "Y1 Score": "2",
    "Y2 Score": "4",
    "Annual Income": "32000"
  },
  {
    Sex: "Male",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "77000"
  },
  {
    Sex: "Male",
    "Y1 Score": "7",
    "Y2 Score": "7",
    "Annual Income": "120000"
  },
  {
    Sex: "Male",
    "Y1 Score": "2",
    "Y2 Score": "3",
    "Annual Income": "21000"
  },
  {
    Sex: "Male",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "98000"
  },
  {
    Sex: "Male",
    "Y1 Score": "8",
    "Y2 Score": "8",
    "Annual Income": "132000"
  },
  {
    Sex: "Male",
    "Y1 Score": "8",
    "Y2 Score": "9",
    "Annual Income": "146000"
  },
  {
    Sex: "Male",
    "Y1 Score": "6",
    "Y2 Score": "5",
    "Annual Income": "98000"
  },
  {
    Sex: "Male",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "86000"
  },
  {
    Sex: "Male",
    "Y1 Score": "3",
    "Y2 Score": "5",
    "Annual Income": "45000"
  },
  {
    Sex: "Male",
    "Y1 Score": "1",
    "Y2 Score": "4",
    "Annual Income": "21000"
  },
  {
    Sex: "Male",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "92000"
  },
  {
    Sex: "Male",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "68000"
  },
  {
    Sex: "Male",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "54000"
  },
  {
    Sex: "Male",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "55000"
  },
  {
    Sex: "Male",
    "Y1 Score": "6",
    "Y2 Score": "7",
    "Annual Income": "102000"
  },
  {
    Sex: "Male",
    "Y1 Score": "2",
    "Y2 Score": "3",
    "Annual Income": "32000"
  },
  {
    Sex: "Male",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "67000"
  },
  {
    Sex: "Male",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "68000"
  },
  {
    Sex: "Male",
    "Y1 Score": "2",
    "Y2 Score": "5",
    "Annual Income": "28000"
  },
  {
    Sex: "Male",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "126000"
  },
  {
    Sex: "Male",
    "Y1 Score": "8",
    "Y2 Score": "9",
    "Annual Income": "168000"
  },
  {
    Sex: "Male",
    "Y1 Score": "8",
    "Y2 Score": "9",
    "Annual Income": "178000"
  },
  {
    Sex: "Male",
    "Y1 Score": "6",
    "Y2 Score": "7",
    "Annual Income": "86000"
  },
  {
    Sex: "Male",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "66000"
  },
  {
    Sex: "Male",
    "Y1 Score": "3",
    "Y2 Score": "7",
    "Annual Income": "42000"
  },
  {
    Sex: "Male",
    "Y1 Score": "1",
    "Y2 Score": "3",
    "Annual Income": "14000"
  },
  {
    Sex: "Male",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "72000"
  },
  {
    Sex: "Male",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "78000"
  },
  {
    Sex: "Male",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "132000"
  },
  {
    Sex: "Male",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "75000"
  },
  {
    Sex: "Male",
    "Y1 Score": "6",
    "Y2 Score": "7",
    "Annual Income": "89000"
  },
  {
    Sex: "Male",
    "Y1 Score": "2",
    "Y2 Score": "6",
    "Annual Income": "32000"
  },
  {
    Sex: "Male",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "64000"
  },
  {
    Sex: "Male",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "104000"
  },
  {
    Sex: "Male",
    "Y1 Score": "2",
    "Y2 Score": "4",
    "Annual Income": "29000"
  },
  {
    Sex: "Male",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "78000"
  },
  {
    Sex: "Male",
    "Y1 Score": "8",
    "Y2 Score": "9",
    "Annual Income": "136000"
  },
  {
    Sex: "Male",
    "Y1 Score": "8",
    "Y2 Score": "9",
    "Annual Income": "232000"
  },
  {
    Sex: "Male",
    "Y1 Score": "6",
    "Y2 Score": "7",
    "Annual Income": "105000"
  },
  {
    Sex: "Male",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "86000"
  },
  {
    Sex: "Male",
    "Y1 Score": "3",
    "Y2 Score": "4",
    "Annual Income": "56000"
  },
  {
    Sex: "Male",
    "Y1 Score": "1",
    "Y2 Score": "2",
    "Annual Income": "26000"
  },
  {
    Sex: "Male",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "120000"
  },
  {
    Sex: "Male",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "68000"
  },
  {
    Sex: "Male",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "67000"
  },
  {
    Sex: "Male",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "78000"
  },
  {
    Sex: "Male",
    "Y1 Score": "6",
    "Y2 Score": "7",
    "Annual Income": "101000"
  },
  {
    Sex: "Male",
    "Y1 Score": "2",
    "Y2 Score": "4",
    "Annual Income": "32000"
  },
  {
    Sex: "Male",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "71000"
  },
  {
    Sex: "Male",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "136000"
  },
  {
    Sex: "Male",
    "Y1 Score": "2",
    "Y2 Score": "3",
    "Annual Income": "36000"
  },
  {
    Sex: "Male",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "124000"
  },
  {
    Sex: "Male",
    "Y1 Score": "8",
    "Y2 Score": "9",
    "Annual Income": "202000"
  },
  {
    Sex: "Male",
    "Y1 Score": "8",
    "Y2 Score": "9",
    "Annual Income": "206000"
  },
  {
    Sex: "Male",
    "Y1 Score": "6",
    "Y2 Score": "7",
    "Annual Income": "78000"
  },
  {
    Sex: "Male",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "56000"
  },
  {
    Sex: "Male",
    "Y1 Score": "3",
    "Y2 Score": "4",
    "Annual Income": "62000"
  },
  {
    Sex: "Male",
    "Y1 Score": "1",
    "Y2 Score": "3",
    "Annual Income": "27000"
  },
  {
    Sex: "Male",
    "Y1 Score": "9",
    "Y2 Score": "10",
    "Annual Income": "168000"
  },
  {
    Sex: "Male",
    "Y1 Score": "9",
    "Y2 Score": "7",
    "Annual Income": "252000"
  },
  {
    Sex: "Male",
    "Y1 Score": "9",
    "Y2 Score": "8",
    "Annual Income": "208000"
  },
  {
    Sex: "Male",
    "Y1 Score": "9",
    "Y2 Score": "10",
    "Annual Income": "278000"
  },
  {
    Sex: "Male",
    "Y1 Score": "9",
    "Y2 Score": "10",
    "Annual Income": "306000"
  },
  {
    Sex: "Male",
    "Y1 Score": "9",
    "Y2 Score": "10",
    "Annual Income": "112000"
  },
  {
    Sex: "Male",
    "Y1 Score": "10",
    "Y2 Score": "10",
    "Annual Income": "256000"
  },
  {
    Sex: "Male",
    "Y1 Score": "10",
    "Y2 Score": "8",
    "Annual Income": "288000"
  },
  {
    Sex: "Male",
    "Y1 Score": "10",
    "Y2 Score": "9",
    "Annual Income": "152000"
  },
  {
    Sex: "Female",
    "Y1 Score": "5",
    "Y2 Score": "5",
    "Annual Income": "48000"
  },
  {
    Sex: "Female",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "80000"
  },
  {
    Sex: "Female",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "110000"
  },
  {
    Sex: "Female",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "85000"
  },
  {
    Sex: "Female",
    "Y1 Score": "6",
    "Y2 Score": "7",
    "Annual Income": "88000"
  },
  {
    Sex: "Female",
    "Y1 Score": "3",
    "Y2 Score": "4",
    "Annual Income": "32000"
  },
  {
    Sex: "Female",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "77000"
  },
  {
    Sex: "Female",
    "Y1 Score": "7",
    "Y2 Score": "7",
    "Annual Income": "127000"
  },
  {
    Sex: "Female",
    "Y1 Score": "2",
    "Y2 Score": "3",
    "Annual Income": "24000"
  },
  {
    Sex: "Female",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "98000"
  },
  {
    Sex: "Female",
    "Y1 Score": "8",
    "Y2 Score": "8",
    "Annual Income": "132000"
  },
  {
    Sex: "Female",
    "Y1 Score": "8",
    "Y2 Score": "9",
    "Annual Income": "146000"
  },
  {
    Sex: "Female",
    "Y1 Score": "6",
    "Y2 Score": "5",
    "Annual Income": "98000"
  },
  {
    Sex: "Female",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "86000"
  },
  {
    Sex: "Female",
    "Y1 Score": "3",
    "Y2 Score": "5",
    "Annual Income": "45000"
  },
  {
    Sex: "Female",
    "Y1 Score": "1",
    "Y2 Score": "4",
    "Annual Income": "21000"
  },
  {
    Sex: "Female",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "92000"
  },
  {
    Sex: "Female",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "68000"
  },
  {
    Sex: "Female",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "54000"
  },
  {
    Sex: "Female",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "55000"
  },
  {
    Sex: "Female",
    "Y1 Score": "6",
    "Y2 Score": "7",
    "Annual Income": "102000"
  },
  {
    Sex: "Female",
    "Y1 Score": "2",
    "Y2 Score": "3",
    "Annual Income": "32000"
  },
  {
    Sex: "Female",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "67000"
  },
  {
    Sex: "Female",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "68000"
  },
  {
    Sex: "Female",
    "Y1 Score": "2",
    "Y2 Score": "5",
    "Annual Income": "28000"
  },
  {
    Sex: "Female",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "126000"
  },
  {
    Sex: "Female",
    "Y1 Score": "8",
    "Y2 Score": "9",
    "Annual Income": "168000"
  },
  {
    Sex: "Female",
    "Y1 Score": "8",
    "Y2 Score": "9",
    "Annual Income": "178000"
  },
  {
    Sex: "Female",
    "Y1 Score": "6",
    "Y2 Score": "7",
    "Annual Income": "86000"
  },
  {
    Sex: "Female",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "66000"
  },
  {
    Sex: "Female",
    "Y1 Score": "3",
    "Y2 Score": "7",
    "Annual Income": "42000"
  },
  {
    Sex: "Female",
    "Y1 Score": "1",
    "Y2 Score": "3",
    "Annual Income": "18000"
  },
  {
    Sex: "Female",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "72000"
  },
  {
    Sex: "Female",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "78000"
  },
  {
    Sex: "Female",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "132000"
  },
  {
    Sex: "Female",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "75000"
  },
  {
    Sex: "Female",
    "Y1 Score": "6",
    "Y2 Score": "7",
    "Annual Income": "89000"
  },
  {
    Sex: "Female",
    "Y1 Score": "2",
    "Y2 Score": "6",
    "Annual Income": "32000"
  },
  {
    Sex: "Female",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "64000"
  },
  {
    Sex: "Female",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "104000"
  },
  {
    Sex: "Female",
    "Y1 Score": "2",
    "Y2 Score": "4",
    "Annual Income": "29000"
  },
  {
    Sex: "Female",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "78000"
  },
  {
    Sex: "Female",
    "Y1 Score": "8",
    "Y2 Score": "9",
    "Annual Income": "136000"
  },
  {
    Sex: "Female",
    "Y1 Score": "8",
    "Y2 Score": "9",
    "Annual Income": "232000"
  },
  {
    Sex: "Female",
    "Y1 Score": "6",
    "Y2 Score": "7",
    "Annual Income": "105000"
  },
  {
    Sex: "Female",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "86000"
  },
  {
    Sex: "Female",
    "Y1 Score": "3",
    "Y2 Score": "4",
    "Annual Income": "56000"
  },
  {
    Sex: "Female",
    "Y1 Score": "3",
    "Y2 Score": "2",
    "Annual Income": "26000"
  },
  {
    Sex: "Female",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "120000"
  },
  {
    Sex: "Female",
    "Y1 Score": "5",
    "Y2 Score": "6",
    "Annual Income": "68000"
  },
  {
    Sex: "Female",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "67000"
  },
  {
    Sex: "Female",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "78000"
  },
  {
    Sex: "Female",
    "Y1 Score": "6",
    "Y2 Score": "7",
    "Annual Income": "101000"
  },
  {
    Sex: "Female",
    "Y1 Score": "2",
    "Y2 Score": "4",
    "Annual Income": "32000"
  },
  {
    Sex: "Female",
    "Y1 Score": "4",
    "Y2 Score": "5",
    "Annual Income": "71000"
  },
  {
    Sex: "Female",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "136000"
  },
  {
    Sex: "Female",
    "Y1 Score": "2",
    "Y2 Score": "3",
    "Annual Income": "36000"
  },
  {
    Sex: "Female",
    "Y1 Score": "7",
    "Y2 Score": "8",
    "Annual Income": "124000"
  },
  {
    Sex: "Female",
    "Y1 Score": "8",
    "Y2 Score": "9",
    "Annual Income": "200000"
  },
  {
    Sex: "Female",
    "Y1 Score": "8",
    "Y2 Score": "9",
    "Annual Income": "206000"
  },
  {
    Sex: "Female",
    "Y1 Score": "6",
    "Y2 Score": "9",
    "Annual Income": "78000"
  },
  {
    Sex: "Female",
    "Y1 Score": "5",
    "Y2 Score": "7",
    "Annual Income": "56000"
  },
  {
    Sex: "Female",
    "Y1 Score": "3",
    "Y2 Score": "5",
    "Annual Income": "68000"
  },
  {
    Sex: "Female",
    "Y1 Score": "3",
    "Y2 Score": "3",
    "Annual Income": "27000"
  },
  {
    Sex: "Female",
    "Y1 Score": "9",
    "Y2 Score": "10",
    "Annual Income": "168000"
  },
  {
    Sex: "Female",
    "Y1 Score": "9",
    "Y2 Score": "6",
    "Annual Income": "205000"
  },
  {
    Sex: "Female",
    "Y1 Score": "9",
    "Y2 Score": "8",
    "Annual Income": "208000"
  },
  {
    Sex: "Female",
    "Y1 Score": "9",
    "Y2 Score": "10",
    "Annual Income": "278000"
  },
  {
    Sex: "Female",
    "Y1 Score": "9",
    "Y2 Score": "10",
    "Annual Income": "308000"
  },
  {
    Sex: "Female",
    "Y1 Score": "8",
    "Y2 Score": "10",
    "Annual Income": "112000"
  },
  {
    Sex: "Female",
    "Y1 Score": "10",
    "Y2 Score": "10",
    "Annual Income": "256000"
  },
  {
    Sex: "Female",
    "Y1 Score": "10",
    "Y2 Score": "8",
    "Annual Income": "288000"
  },
  {
    Sex: "Female",
    "Y1 Score": "10",
    "Y2 Score": "9",
    "Annual Income": "175000"
  }
], ae = "https://wwwdev.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data/indexed-data-files/59-scatter-plot-tight-correlation-multiple-series-sexFilter.csv", le = "url", ce = "4.24.9", re = 104, Se = [
  {
    values: [
      "Male",
      "Female"
    ],
    filterStyle: "tab",
    id: 1725636095102,
    active: "Male",
    columnName: "Sex",
    order: "desc",
    label: "Sex"
  }
], te = {
  annotations: e,
  type: o,
  debugSvg: !1,
  chartMessage: n,
  title: a,
  showTitle: l,
  showDownloadMediaButton: c,
  theme: r,
  animate: S,
  fontSize: t,
  lineDatapointStyle: i,
  lineDatapointColor: s,
  barHasBorder: m,
  isLollipopChart: Y,
  lollipopShape: u,
  lollipopColorStyle: x,
  visualizationSubType: A,
  barStyle: d,
  roundingStyle: I,
  tipRounding: h,
  isResponsiveTicks: p,
  general: f,
  padding: g,
  preliminaryData: M,
  yAxis: F,
  boxplot: b,
  topAxis: y,
  isLegendValue: L,
  barThickness: w,
  barHeight: v,
  barSpace: T,
  heights: k,
  xAxis: D,
  table: C,
  orientation: P,
  color: B,
  columns: R,
  legend: H,
  brush: O,
  exclusions: z,
  palette: V,
  isPaletteReversed: N,
  twoColor: q,
  labels: K,
  dataFormat: W,
  confidenceKeys: Q,
  visual: U,
  useLogScale: Z,
  filterBehavior: _,
  highlightedBarValues: E,
  series: $,
  tooltips: j,
  forestPlot: G,
  area: J,
  sankey: X,
  datasets: ee,
  visualizationType: oe,
  data: ne,
  dataFileName: ae,
  dataFileSourceType: le,
  version: ce,
  dynamicMarginTop: re,
  filters: Se
};
export {
  te as s
};
