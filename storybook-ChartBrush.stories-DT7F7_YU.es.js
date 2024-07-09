import { C as s } from "./storybook-CdcChart-Hy3TJeMe.es.js";
const i = "chart", l = !1, r = {
  noData: "No Data Available"
}, n = "", c = !0, d = !1, h = "theme-blue", u = !1, D = "medium", p = "hover", f = "false", m = !1, g = "circle", b = "two-tone", x = "regular", y = "", L = "standard", C = "top", w = !1, v = {
  showDownloadButton: !1
}, T = {
  left: 5,
  right: 5
}, S = {
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
  rightAxisSize: 50,
  rightLabel: "",
  rightLabelOffsetSize: 0,
  rightAxisLabelColor: "#333",
  rightAxisTickLabelColor: "#333",
  rightAxisTickColor: "#333",
  numTicks: "",
  axisPadding: 0,
  tickRotation: 0,
  anchors: []
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
}, k = {
  hasLine: !1
}, B = !1, R = 0.35, M = 25, P = 15, z = {
  vertical: 300,
  horizontal: 750
}, F = {
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
  labelOffset: 65,
  axisPadding: 0,
  target: 0,
  maxTickRotation: 0,
  dataKey: "Date",
  dateParseFormat: "%m/%d/%Y",
  dateDisplayFormat: "%m/%d/%Y",
  tickWidthMax: 91
}, O = {
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
}, H = "vertical", q = "pinkpurple", V = {}, K = {
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
  verticalSorted: !1
}, _ = {
  height: 25,
  data: [
    {
      Date: "1/15/2016",
      "Data 1": "900",
      "Data 2": "135",
      "Data 3": "300",
      "Data 4": "95",
      "Data 5": "120",
      "Data 6": "310"
    },
    {
      Date: "2/15/2016",
      "Data 1": "4000",
      "Data 2": "90",
      "Data 3": "240",
      "Data 4": "60",
      "Data 5": "160",
      "Data 6": "2000"
    },
    {
      Date: "3/15/2016",
      "Data 1": "500",
      "Data 2": "300",
      "Data 3": "290",
      "Data 4": "100",
      "Data 5": "200",
      "Data 6": "250"
    },
    {
      Date: "4/15/2016",
      "Data 1": "1200",
      "Data 2": "160",
      "Data 3": "230",
      "Data 4": "180",
      "Data 5": "160",
      "Data 6": "220"
    },
    {
      Date: "5/15/2016",
      "Data 1": "8000",
      "Data 2": "350",
      "Data 3": "300",
      "Data 4": "150",
      "Data 5": "130",
      "Data 6": "100"
    },
    {
      Date: "6/15/2016",
      "Data 1": "9000",
      "Data 2": "220",
      "Data 3": "320",
      "Data 4": "100",
      "Data 5": "220",
      "Data 6": "300"
    }
  ],
  active: !0,
  pattern_id: "brush_pattern",
  accent_color: "#ddd"
}, N = {
  active: !1,
  keys: []
}, I = "qualitative-bold", Q = !1, W = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, U = !1, Y = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1,
  useCommas: !1,
  roundToPlace: ""
}, j = {}, E = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, Z = !1, G = "Filter Change", J = [], X = [
  {
    dataKey: "Data 1",
    type: "Area Chart",
    axis: "Left",
    name: "One",
    tooltip: !0
  },
  {
    dataKey: "Data 2",
    type: "Area Chart",
    axis: "Left",
    name: "two",
    tooltip: !0
  },
  {
    dataKey: "Data 3",
    type: "Area Chart",
    axis: "Left",
    name: "three",
    tooltip: !0
  },
  {
    dataKey: "Data 4",
    type: "Area Chart",
    axis: "Left",
    name: "four",
    tooltip: !0
  }
], $ = {
  opacity: 90
}, aa = {
  startAt: 0,
  width: "auto",
  colors: {
    line: "",
    shape: ""
  },
  estimateField: "",
  estimateRadius: "",
  lowerCiField: "",
  upperCiField: "",
  shape: "",
  rowHeight: 20,
  showZeroLine: !1,
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
  rightWidthOffset: 0
}, ta = {
  isStacked: !1
}, ea = !1, oa = [
  "red",
  "orange",
  "yellow",
  "teal"
], sa = "Area Chart", ia = [
  {
    Date: "1/15/2016",
    "Data 1": "900",
    "Data 2": "135",
    "Data 3": "300",
    "Data 4": "95",
    "Data 5": "120",
    "Data 6": "310"
  },
  {
    Date: "2/15/2016",
    "Data 1": "4000",
    "Data 2": "90",
    "Data 3": "240",
    "Data 4": "60",
    "Data 5": "160",
    "Data 6": "2000"
  },
  {
    Date: "3/15/2016",
    "Data 1": "500",
    "Data 2": "300",
    "Data 3": "290",
    "Data 4": "100",
    "Data 5": "200",
    "Data 6": "250"
  },
  {
    Date: "4/15/2016",
    "Data 1": "1200",
    "Data 2": "160",
    "Data 3": "230",
    "Data 4": "180",
    "Data 5": "160",
    "Data 6": "220"
  },
  {
    Date: "5/15/2016",
    "Data 1": "8000",
    "Data 2": "350",
    "Data 3": "300",
    "Data 4": "150",
    "Data 5": "130",
    "Data 6": "100"
  },
  {
    Date: "6/15/2016",
    "Data 1": "9000",
    "Data 2": "220",
    "Data 3": "320",
    "Data 4": "100",
    "Data 5": "220",
    "Data 6": "300"
  }
], la = "valid-area-chart.json", ra = "file", na = {
  horizontal: !1,
  series: !1
}, ca = 4.23, da = 0, ha = {
  type: i,
  debugSvg: l,
  chartMessage: r,
  title: n,
  showTitle: c,
  showDownloadMediaButton: d,
  theme: h,
  animate: u,
  fontSize: D,
  lineDatapointStyle: p,
  barHasBorder: f,
  isLollipopChart: m,
  lollipopShape: g,
  lollipopColorStyle: b,
  visualizationSubType: x,
  barStyle: y,
  roundingStyle: L,
  tipRounding: C,
  isResponsiveTicks: w,
  general: v,
  padding: T,
  yAxis: S,
  boxplot: A,
  topAxis: k,
  isLegendValue: B,
  barThickness: R,
  barHeight: M,
  barSpace: P,
  heights: z,
  xAxis: F,
  table: O,
  orientation: H,
  color: q,
  columns: V,
  legend: K,
  brush: _,
  exclusions: N,
  palette: I,
  isPaletteReversed: Q,
  twoColor: W,
  labels: U,
  dataFormat: Y,
  confidenceKeys: j,
  visual: E,
  useLogScale: Z,
  filterBehavior: G,
  highlightedBarValues: J,
  series: X,
  tooltips: $,
  forestPlot: aa,
  area: ta,
  showChartBrush: ea,
  customColors: oa,
  visualizationType: sa,
  data: ia,
  dataFileName: la,
  dataFileSourceType: ra,
  dataDescription: na,
  validated: ca,
  dynamicMarginTop: da
}, Da = {
  title: "Components/Templates/Chart/Brush",
  component: s
}, a = {
  args: {
    config: ha
  }
};
var t, e, o;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(t = a.parameters) == null ? void 0 : t.docs,
    source: {
      originalSource: `{
  args: {
    config: chartBrushConfig
  }
}`,
      ...(o = (e = a.parameters) == null ? void 0 : e.docs) == null ? void 0 : o.source
    }
  }
};
const pa = ["Area_Brush"];
export {
  a as Area_Brush,
  pa as __namedExportsOrder,
  Da as default
};
