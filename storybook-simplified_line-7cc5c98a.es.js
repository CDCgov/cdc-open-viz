const e = [], t = "chart";
const n = {
  noData: "No Data Available"
}, r = "", i = !0, a = !1, o = "theme-blue", l = !1, u = "medium", s = "hover", V = "Same as Line", p = "false", c = !1, _ = "circle", d = "two-tone", y = "regular", I = "flat", f = "standard", m = "top", w = !1, S = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  hideNullValue: !0,
  showZeroValueDataLabel: !0
}, D = {
  left: 5,
  right: 5
}, k = [], C = {
  hideAxis: !0,
  displayNumbersOnBar: !1,
  hideLabel: !1,
  hideTicks: !0,
  size: "0",
  gridLines: !0,
  enablePadding: !0,
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
  numTicks: "5",
  axisPadding: 0,
  scalePadding: "15",
  tickRotation: "",
  anchors: [],
  shoMissingDataLabel: !0,
  showMissingDataLine: !0,
  categories: [],
  label: "",
  maxValue: 30.244999999999997,
  labelsAboveGridlines: !0
}, R = {
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
}, P = {
  hasLine: !1
}, z = !1, O = 0.35, N = 25, v = 15, h = {
  vertical: "200",
  horizontal: 750
}, g = {
  sortDates: !1,
  anchors: [],
  type: "date-time",
  showTargetLabel: !0,
  targetLabel: "Target",
  hideAxis: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: "0",
  tickRotation: "0",
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
  padding: "4",
  dataKey: "week_end",
  label: "",
  dateParseFormat: "%Y-%m-%d",
  dateDisplayFormat: "%b. %Y",
  tickWidthMax: 75,
  axisBBox: 70.13999938964844
}, b = {
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
}, x = "vertical", L = "pinkpurple", T = {}, B = {
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
  label: "Respiratory Virus",
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
    side: !0,
    topBottom: !0
  },
  hasBorder: !1,
  showLegendValuesTooltip: !1,
  position: "right"
}, A = {
  height: 25,
  active: !1,
  data: [
    {
      week_end: "2022-10-01",
      "**Numeric Value Property**": "",
      "COVID-19": "6.9",
      RSV: "10.2",
      Influenza: "2.0"
    },
    {
      week_end: "2022-10-08",
      "**Numeric Value Property**": "",
      "COVID-19": "6.9",
      RSV: "12.5",
      Influenza: "2.7"
    },
    {
      week_end: "2022-10-15",
      "**Numeric Value Property**": "",
      "COVID-19": "7.1",
      RSV: "14.6",
      Influenza: "3.5"
    },
    {
      week_end: "2022-10-22",
      "**Numeric Value Property**": "",
      "COVID-19": "6.8",
      RSV: "16.5",
      Influenza: "5.4"
    },
    {
      week_end: "2022-10-29",
      "**Numeric Value Property**": "",
      "COVID-19": "6.9",
      RSV: "18.3",
      Influenza: "8.4"
    },
    {
      week_end: "2022-11-05",
      "**Numeric Value Property**": "",
      "COVID-19": "6.5",
      RSV: "19.1",
      Influenza: "12.8"
    },
    {
      week_end: "2022-11-12",
      "**Numeric Value Property**": "",
      "COVID-19": "6.8",
      RSV: "19.5",
      Influenza: "14.9"
    },
    {
      week_end: "2022-11-19",
      "**Numeric Value Property**": "",
      "COVID-19": "6.7",
      RSV: "16.7",
      Influenza: "18.3"
    },
    {
      week_end: "2022-11-26",
      "**Numeric Value Property**": "",
      "COVID-19": "7.6",
      RSV: "13.4",
      Influenza: "25.8"
    },
    {
      week_end: "2022-12-03",
      "**Numeric Value Property**": "",
      "COVID-19": "8.6",
      RSV: "10.5",
      Influenza: "25.6"
    },
    {
      week_end: "2022-12-10",
      "**Numeric Value Property**": "",
      "COVID-19": "8.7",
      RSV: "7.9",
      Influenza: "26.3"
    },
    {
      week_end: "2022-12-17",
      "**Numeric Value Property**": "",
      "COVID-19": "9.4",
      RSV: "6.7",
      Influenza: "24.5"
    },
    {
      week_end: "2022-12-24",
      "**Numeric Value Property**": "",
      "COVID-19": "9.8",
      RSV: "5.6",
      Influenza: "20.8"
    },
    {
      week_end: "2022-12-31",
      "**Numeric Value Property**": "",
      "COVID-19": "10.6",
      RSV: "5.1",
      Influenza: "14.9"
    },
    {
      week_end: "2023-01-07",
      "**Numeric Value Property**": "",
      "COVID-19": "10.3",
      RSV: "4.9",
      Influenza: "8.6"
    },
    {
      week_end: "2023-01-14",
      "**Numeric Value Property**": "",
      "COVID-19": "8.8",
      RSV: "4.0",
      Influenza: "4.6"
    },
    {
      week_end: "2023-01-21",
      "**Numeric Value Property**": "",
      "COVID-19": "8.5",
      RSV: "3.3",
      Influenza: "2.9"
    },
    {
      week_end: "2023-01-28",
      "**Numeric Value Property**": "",
      "COVID-19": "8.3",
      RSV: "2.5",
      Influenza: "2.1"
    },
    {
      week_end: "2023-02-04",
      "**Numeric Value Property**": "",
      "COVID-19": "8.0",
      RSV: "2.2",
      Influenza: "1.7"
    },
    {
      week_end: "2023-02-11",
      "**Numeric Value Property**": "",
      "COVID-19": "8.0",
      RSV: "1.8",
      Influenza: "1.4"
    },
    {
      week_end: "2023-02-18",
      "**Numeric Value Property**": "",
      "COVID-19": "8.1",
      RSV: "1.6",
      Influenza: "1.1"
    },
    {
      week_end: "2023-02-25",
      "**Numeric Value Property**": "",
      "COVID-19": "7.9",
      RSV: "1.4",
      Influenza: "1.0"
    },
    {
      week_end: "2023-03-04",
      "**Numeric Value Property**": "",
      "COVID-19": "7.4",
      RSV: "1.2",
      Influenza: "0.9"
    },
    {
      week_end: "2023-03-11",
      "**Numeric Value Property**": "",
      "COVID-19": "6.8",
      RSV: "1.1",
      Influenza: "1.0"
    },
    {
      week_end: "2023-03-18",
      "**Numeric Value Property**": "",
      "COVID-19": "6.8",
      RSV: "0.9",
      Influenza: "0.9"
    },
    {
      week_end: "2023-03-25",
      "**Numeric Value Property**": "",
      "COVID-19": "6.9",
      RSV: "0.8",
      Influenza: "0.9"
    },
    {
      week_end: "2023-04-01",
      "**Numeric Value Property**": "",
      "COVID-19": "6.5",
      RSV: "0.7",
      Influenza: "1.0"
    },
    {
      week_end: "2023-04-08",
      "**Numeric Value Property**": "",
      "COVID-19": "6.2",
      RSV: "0.6",
      Influenza: "1.1"
    },
    {
      week_end: "2023-04-15",
      "**Numeric Value Property**": "",
      "COVID-19": "5.7",
      RSV: "0.6",
      Influenza: "1.0"
    },
    {
      week_end: "2023-04-22",
      "**Numeric Value Property**": "",
      "COVID-19": "5.0",
      RSV: "0.5",
      Influenza: "0.8"
    },
    {
      week_end: "2023-04-29",
      "**Numeric Value Property**": "",
      "COVID-19": "4.9",
      RSV: "0.5",
      Influenza: "1.0"
    },
    {
      week_end: "2023-05-06",
      "**Numeric Value Property**": "",
      "COVID-19": "5.0",
      RSV: "0.5",
      Influenza: "0.9"
    },
    {
      week_end: "2023-05-13",
      "**Numeric Value Property**": "",
      "COVID-19": "4.8",
      RSV: "0.5",
      Influenza: "1.0"
    },
    {
      week_end: "2023-05-20",
      "**Numeric Value Property**": "",
      "COVID-19": "4.6",
      RSV: "0.5",
      Influenza: "1.2"
    },
    {
      week_end: "2023-05-27",
      "**Numeric Value Property**": "",
      "COVID-19": "4.6",
      RSV: "0.4",
      Influenza: "1.2"
    },
    {
      week_end: "2023-06-03",
      "**Numeric Value Property**": "",
      "COVID-19": "4.2",
      RSV: "0.5",
      Influenza: "1.3"
    },
    {
      week_end: "2023-06-10",
      "**Numeric Value Property**": "",
      "COVID-19": "4.1",
      RSV: "0.5",
      Influenza: "1.1"
    },
    {
      week_end: "2023-06-17",
      "**Numeric Value Property**": "",
      "COVID-19": "4.3",
      RSV: "0.5",
      Influenza: "1.1"
    },
    {
      week_end: "2023-06-24",
      "**Numeric Value Property**": "",
      "COVID-19": "4.4",
      RSV: "0.6",
      Influenza: "0.9"
    },
    {
      week_end: "2023-07-01",
      "**Numeric Value Property**": "",
      "COVID-19": "4.9",
      RSV: "0.6",
      Influenza: "1.1"
    },
    {
      week_end: "2023-07-08",
      "**Numeric Value Property**": "",
      "COVID-19": "5.7",
      RSV: "0.5",
      Influenza: "1.2"
    },
    {
      week_end: "2023-07-15",
      "**Numeric Value Property**": "",
      "COVID-19": "6.6",
      RSV: "0.6",
      Influenza: "1.0"
    },
    {
      week_end: "2023-07-22",
      "**Numeric Value Property**": "",
      "COVID-19": "7.5",
      RSV: "0.8",
      Influenza: "1.0"
    },
    {
      week_end: "2023-07-29",
      "**Numeric Value Property**": "",
      "COVID-19": "8.9",
      RSV: "0.8",
      Influenza: "1.0"
    },
    {
      week_end: "2023-08-05",
      "**Numeric Value Property**": "",
      "COVID-19": "10.6",
      RSV: "0.9",
      Influenza: "1.1"
    },
    {
      week_end: "2023-08-12",
      "**Numeric Value Property**": "",
      "COVID-19": "12.3",
      RSV: "0.8",
      Influenza: "0.9"
    },
    {
      week_end: "2023-08-19",
      "**Numeric Value Property**": "",
      "COVID-19": "13.3",
      RSV: "0.8",
      Influenza: "0.9"
    },
    {
      week_end: "2023-08-26",
      "**Numeric Value Property**": "",
      "COVID-19": "14.6",
      RSV: "1.2",
      Influenza: "0.8"
    },
    {
      week_end: "2023-09-02",
      "**Numeric Value Property**": "",
      "COVID-19": "14.1",
      RSV: "1.1",
      Influenza: "0.7"
    },
    {
      week_end: "2023-09-09",
      "**Numeric Value Property**": "",
      "COVID-19": "13.9",
      RSV: "1.3",
      Influenza: "0.7"
    },
    {
      week_end: "2023-09-16",
      "**Numeric Value Property**": "",
      "COVID-19": "12.6",
      RSV: "1.4",
      Influenza: "0.8"
    },
    {
      week_end: "2023-09-23",
      "**Numeric Value Property**": "",
      "COVID-19": "12.0",
      RSV: "2.1",
      Influenza: "0.9"
    },
    {
      week_end: "2023-09-30",
      "**Numeric Value Property**": "",
      "COVID-19": "10.9",
      RSV: "2.9",
      Influenza: "0.9"
    },
    {
      week_end: "2023-10-07",
      "**Numeric Value Property**": "",
      "COVID-19": "10.0",
      RSV: "3.7",
      Influenza: "1.1"
    },
    {
      week_end: "2023-10-14",
      "**Numeric Value Property**": "",
      "COVID-19": "9.1",
      RSV: "4.8",
      Influenza: "1.3"
    },
    {
      week_end: "2023-10-21",
      "**Numeric Value Property**": "",
      "COVID-19": "9.4",
      RSV: "6.0",
      Influenza: "1.5"
    },
    {
      week_end: "2023-10-28",
      "**Numeric Value Property**": "",
      "COVID-19": "9.5",
      RSV: "7.7",
      Influenza: "1.8"
    },
    {
      week_end: "2023-11-04",
      "**Numeric Value Property**": "",
      "COVID-19": "9.3",
      RSV: "9.2",
      Influenza: "2.6"
    },
    {
      week_end: "2023-11-11",
      "**Numeric Value Property**": "",
      "COVID-19": "10.0",
      RSV: "10.7",
      Influenza: "4.0"
    },
    {
      week_end: "2023-11-18",
      "**Numeric Value Property**": "",
      "COVID-19": "9.6",
      RSV: "12.0",
      Influenza: "4.9"
    },
    {
      week_end: "2023-11-25",
      "**Numeric Value Property**": "",
      "COVID-19": "10.9",
      RSV: "12.9",
      Influenza: "6.1"
    },
    {
      week_end: "2023-12-02",
      "**Numeric Value Property**": "",
      "COVID-19": "11.7",
      RSV: "11.9",
      Influenza: "7.0"
    },
    {
      week_end: "2023-12-09",
      "**Numeric Value Property**": "",
      "COVID-19": "11.6",
      RSV: "12.1",
      Influenza: "8.4"
    },
    {
      week_end: "2023-12-16",
      "**Numeric Value Property**": "",
      "COVID-19": "11.9",
      RSV: "12.2",
      Influenza: "13.4"
    },
    {
      week_end: "2023-12-23",
      "**Numeric Value Property**": "",
      "COVID-19": "12.4",
      RSV: "11.2",
      Influenza: "17.3"
    },
    {
      week_end: "2023-12-30",
      "**Numeric Value Property**": "",
      "COVID-19": "12.8",
      RSV: "10.5",
      Influenza: "18.1"
    },
    {
      week_end: "2024-01-06",
      "**Numeric Value Property**": "",
      "COVID-19": "12.9",
      RSV: "9.9",
      Influenza: "13.8"
    },
    {
      week_end: "2024-01-13",
      "**Numeric Value Property**": "",
      "COVID-19": "12.0",
      RSV: "8.3",
      Influenza: "13.8"
    },
    {
      week_end: "2024-01-20",
      "**Numeric Value Property**": "",
      "COVID-19": "10.8",
      RSV: "7.2",
      Influenza: "14.2"
    }
  ],
  pattern_id: "brush_pattern",
  accent_color: "#ddd"
}, M = {
  active: !1,
  keys: []
}, F = "qualitative-bold", H = !1, q = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, K = !1, W = {
  commas: !1,
  prefix: "",
  suffix: " percent of tests positive",
  abbreviated: !0,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1,
  roundTo: "1",
  onlyShowTopPrefixSuffix: !0
}, U = {}, E = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !0,
  horizontalHoverLine: !1
}, Q = !1, j = "Filter Change", G = [], Y = [
  {
    dataKey: "COVID-19",
    type: "Line",
    axis: "Left",
    tooltip: !0
  },
  {
    dataKey: "Influenza",
    type: "Line",
    axis: "Left",
    tooltip: !0
  },
  {
    dataKey: "RSV",
    type: "Line",
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
  hideDateCategoryCol: !1,
  width: "auto",
  lowerCiField: "",
  upperCiField: ""
}, X = {
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
}, ee = [], te = !1, ne = {}, re = "Line", ie = "https://www.cdc.gov/wcms/vizdata/Respitory_Viruses/NREVSSWeeklyPercentPositive.json", ae = [
  "#f06f19",
  "#0a58d6",
  "#890664",
  "#000000",
  "#89bf13",
  "#94036f",
  "#87b6f9",
  "#867a77",
  "#000000"
], oe = "https://www.cdc.gov/wcms/vizdata/Respitory_Viruses/NREVSSWeeklyPercentPositive.json", le = "url", ue = {
  horizontal: !1,
  series: !0,
  singleRow: !1,
  xKey: "week_end",
  valueKeys: [
    "percent_test_positivity"
  ],
  seriesKey: "pathogen"
}, se = "4.24.3", Ve = 0, pe = [], ce = "https://www.cdc.gov/wcms/vizdata/Respitory_Viruses/NREVSSWeeklyPercentPositive.json", _e = 'Data last updated on July 24, 2024. Gray shaded area includes data from the most recent two weeks that may be incomplete due to delays in data reporting. <a href="">View this dataset</a> on data.cdc.gov.', de = [
  {
    from: "214",
    to: "2024-01-13",
    label: "",
    background: "#777777",
    toType: "Last Date",
    fromType: "Previous Days"
  }
], ye = "4.24.10", Ie = [
  {
    week_end: "2022-10-01",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "2.0",
    "COVID-19": "6.9",
    RSV: "10.1"
  },
  {
    week_end: "2022-10-08",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "2.7",
    "COVID-19": "6.9",
    RSV: "12.4"
  },
  {
    week_end: "2022-10-15",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "3.5",
    "COVID-19": "7.1",
    RSV: "14.6"
  },
  {
    week_end: "2022-10-22",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "5.4",
    "COVID-19": "6.8",
    RSV: "16.5"
  },
  {
    week_end: "2022-10-29",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "8.4",
    "COVID-19": "6.9",
    RSV: "18.2"
  },
  {
    week_end: "2022-11-05",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "12.8",
    "COVID-19": "6.5",
    RSV: "19.0"
  },
  {
    week_end: "2022-11-12",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "14.9",
    "COVID-19": "6.8",
    RSV: "19.4"
  },
  {
    week_end: "2022-11-19",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "18.3",
    "COVID-19": "6.7",
    RSV: "16.6"
  },
  {
    week_end: "2022-11-26",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "25.8",
    "COVID-19": "7.6",
    RSV: "13.5"
  },
  {
    week_end: "2022-12-03",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "25.6",
    "COVID-19": "8.6",
    RSV: "10.5"
  },
  {
    week_end: "2022-12-10",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "26.3",
    "COVID-19": "8.7",
    RSV: "7.9"
  },
  {
    week_end: "2022-12-17",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "24.5",
    "COVID-19": "9.4",
    RSV: "6.7"
  },
  {
    week_end: "2022-12-24",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "20.8",
    "COVID-19": "9.8",
    RSV: "5.6"
  },
  {
    week_end: "2022-12-31",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "14.9",
    "COVID-19": "10.6",
    RSV: "5.1"
  },
  {
    week_end: "2023-01-07",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "8.6",
    "COVID-19": "10.2",
    RSV: "4.9"
  },
  {
    week_end: "2023-01-14",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "4.6",
    "COVID-19": "8.8",
    RSV: "4.0"
  },
  {
    week_end: "2023-01-21",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "2.9",
    "COVID-19": "8.4",
    RSV: "3.3"
  },
  {
    week_end: "2023-01-28",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "2.1",
    "COVID-19": "8.2",
    RSV: "2.5"
  },
  {
    week_end: "2023-02-04",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.7",
    "COVID-19": "8.0",
    RSV: "2.2"
  },
  {
    week_end: "2023-02-11",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.4",
    "COVID-19": "8.0",
    RSV: "1.8"
  },
  {
    week_end: "2023-02-18",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.1",
    "COVID-19": "8.1",
    RSV: "1.6"
  },
  {
    week_end: "2023-02-25",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.0",
    "COVID-19": "7.9",
    RSV: "1.4"
  },
  {
    week_end: "2023-03-04",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.9",
    "COVID-19": "7.3",
    RSV: "1.2"
  },
  {
    week_end: "2023-03-11",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.0",
    "COVID-19": "6.8",
    RSV: "1.0"
  },
  {
    week_end: "2023-03-18",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.9",
    "COVID-19": "6.8",
    RSV: "0.9"
  },
  {
    week_end: "2023-03-25",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.9",
    "COVID-19": "6.8",
    RSV: "0.8"
  },
  {
    week_end: "2023-04-01",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.0",
    "COVID-19": "6.5",
    RSV: "0.7"
  },
  {
    week_end: "2023-04-08",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.1",
    "COVID-19": "6.2",
    RSV: "0.6"
  },
  {
    week_end: "2023-04-15",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.0",
    "COVID-19": "5.7",
    RSV: "0.6"
  },
  {
    week_end: "2023-04-22",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.8",
    "COVID-19": "5.0",
    RSV: "0.5"
  },
  {
    week_end: "2023-04-29",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.0",
    "COVID-19": "4.9",
    RSV: "0.5"
  },
  {
    week_end: "2023-05-06",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.9",
    "COVID-19": "5.0",
    RSV: "0.5"
  },
  {
    week_end: "2023-05-13",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.0",
    "COVID-19": "4.8",
    RSV: "0.5"
  },
  {
    week_end: "2023-05-20",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.2",
    "COVID-19": "4.6",
    RSV: "0.5"
  },
  {
    week_end: "2023-05-27",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.2",
    "COVID-19": "4.6",
    RSV: "0.4"
  },
  {
    week_end: "2023-06-03",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.3",
    "COVID-19": "4.2",
    RSV: "0.5"
  },
  {
    week_end: "2023-06-10",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.1",
    "COVID-19": "4.1",
    RSV: "0.5"
  },
  {
    week_end: "2023-06-17",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.1",
    "COVID-19": "4.3",
    RSV: "0.5"
  },
  {
    week_end: "2023-06-24",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.9",
    "COVID-19": "4.4",
    RSV: "0.6"
  },
  {
    week_end: "2023-07-01",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.1",
    "COVID-19": "4.9",
    RSV: "0.6"
  },
  {
    week_end: "2023-07-08",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.2",
    "COVID-19": "5.9",
    RSV: "0.5"
  },
  {
    week_end: "2023-07-15",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.0",
    "COVID-19": "6.6",
    RSV: "0.6"
  },
  {
    week_end: "2023-07-22",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.0",
    "COVID-19": "7.4",
    RSV: "0.8"
  },
  {
    week_end: "2023-07-29",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.0",
    "COVID-19": "9.0",
    RSV: "0.8"
  },
  {
    week_end: "2023-08-05",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.1",
    "COVID-19": "10.6",
    RSV: "0.8"
  },
  {
    week_end: "2023-08-12",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.9",
    "COVID-19": "12.3",
    RSV: "0.8"
  },
  {
    week_end: "2023-08-19",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.9",
    "COVID-19": "13.3",
    RSV: "0.8"
  },
  {
    week_end: "2023-08-26",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.8",
    "COVID-19": "14.5",
    RSV: "1.1"
  },
  {
    week_end: "2023-09-02",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.7",
    "COVID-19": "14.1",
    RSV: "1.1"
  },
  {
    week_end: "2023-09-09",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.7",
    "COVID-19": "13.9",
    RSV: "1.3"
  },
  {
    week_end: "2023-09-16",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.8",
    "COVID-19": "12.6",
    RSV: "1.4"
  },
  {
    week_end: "2023-09-23",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.9",
    "COVID-19": "12.0",
    RSV: "2.1"
  },
  {
    week_end: "2023-09-30",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.9",
    "COVID-19": "10.9",
    RSV: "2.8"
  },
  {
    week_end: "2023-10-07",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.1",
    "COVID-19": "10.0",
    RSV: "3.7"
  },
  {
    week_end: "2023-10-14",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.3",
    "COVID-19": "9.2",
    RSV: "4.7"
  },
  {
    week_end: "2023-10-21",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.5",
    "COVID-19": "9.4",
    RSV: "5.8"
  },
  {
    week_end: "2023-10-28",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.8",
    "COVID-19": "9.6",
    RSV: "7.5"
  },
  {
    week_end: "2023-11-04",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "2.6",
    "COVID-19": "9.3",
    RSV: "9.0"
  },
  {
    week_end: "2023-11-11",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "4.0",
    "COVID-19": "10.1",
    RSV: "10.5"
  },
  {
    week_end: "2023-11-18",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "4.9",
    "COVID-19": "9.5",
    RSV: "11.7"
  },
  {
    week_end: "2023-11-25",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "5.9",
    "COVID-19": "11.2",
    RSV: "12.7"
  },
  {
    week_end: "2023-12-02",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "7.0",
    "COVID-19": "11.7",
    RSV: "11.8"
  },
  {
    week_end: "2023-12-09",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "9.8",
    "COVID-19": "11.6",
    RSV: "12.0"
  },
  {
    week_end: "2023-12-16",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "13.4",
    "COVID-19": "11.9",
    RSV: "12.1"
  },
  {
    week_end: "2023-12-23",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "17.3",
    "COVID-19": "12.5",
    RSV: "11.2"
  },
  {
    week_end: "2023-12-30",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "18.2",
    "COVID-19": "13.1",
    RSV: "10.4"
  },
  {
    week_end: "2024-01-06",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "13.8",
    "COVID-19": "12.9",
    RSV: "9.9"
  },
  {
    week_end: "2024-01-13",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "13.9",
    "COVID-19": "11.9",
    RSV: "8.4"
  },
  {
    week_end: "2024-01-20",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "14.9",
    "COVID-19": "10.9",
    RSV: "7.2"
  },
  {
    week_end: "2024-01-27",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "16.1",
    "COVID-19": "10.4",
    RSV: "6.1"
  },
  {
    week_end: "2024-02-03",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "16.3",
    "COVID-19": "9.9",
    RSV: "5.5"
  },
  {
    week_end: "2024-02-10",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "15.9",
    "COVID-19": "9.5",
    RSV: "4.9"
  },
  {
    week_end: "2024-02-17",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "15.6",
    "COVID-19": "8.4",
    RSV: "4.2"
  },
  {
    week_end: "2024-02-24",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "15.5",
    "COVID-19": "7.7",
    RSV: "3.6"
  },
  {
    week_end: "2024-03-02",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "14.9",
    "COVID-19": "6.7",
    RSV: "3.1"
  },
  {
    week_end: "2024-03-09",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "14.2",
    "COVID-19": "5.5",
    RSV: "2.7"
  },
  {
    week_end: "2024-03-16",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "11.9",
    "COVID-19": "4.7",
    RSV: "2.3"
  },
  {
    week_end: "2024-03-23",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "10.4",
    "COVID-19": "4.1",
    RSV: "2.0"
  },
  {
    week_end: "2024-03-30",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "9.2",
    "COVID-19": "3.8",
    RSV: "1.6"
  },
  {
    week_end: "2024-04-06",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "7.5",
    "COVID-19": "3.5",
    RSV: "1.3"
  },
  {
    week_end: "2024-04-13",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "5.8",
    "COVID-19": "3.4",
    RSV: "1.2"
  },
  {
    week_end: "2024-04-20",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "4.8",
    "COVID-19": "3.1",
    RSV: "0.9"
  },
  {
    week_end: "2024-04-27",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "3.8",
    "COVID-19": "3.1",
    RSV: "0.7"
  },
  {
    week_end: "2024-05-04",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "3.2",
    "COVID-19": "3.3",
    RSV: "0.7"
  },
  {
    week_end: "2024-05-11",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "2.3",
    "COVID-19": "3.1",
    RSV: "0.7"
  },
  {
    week_end: "2024-05-18",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.8",
    "COVID-19": "3.5",
    RSV: "0.5"
  },
  {
    week_end: "2024-05-25",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.6",
    "COVID-19": "4.1",
    RSV: "0.5"
  },
  {
    week_end: "2024-06-01",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.6",
    "COVID-19": "4.8",
    RSV: "0.4"
  },
  {
    week_end: "2024-06-08",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.5",
    "COVID-19": "5.6",
    RSV: "0.4"
  },
  {
    week_end: "2024-06-15",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.3",
    "COVID-19": "7.0",
    RSV: "0.4"
  },
  {
    week_end: "2024-06-22",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.0",
    "COVID-19": "8.6",
    RSV: "0.3"
  },
  {
    week_end: "2024-06-29",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.9",
    "COVID-19": "9.6",
    RSV: "0.3"
  },
  {
    week_end: "2024-07-06",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "1.0",
    "COVID-19": "11.2",
    RSV: "0.3"
  },
  {
    week_end: "2024-07-13",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.8",
    "COVID-19": "13.0",
    RSV: "0.3"
  },
  {
    week_end: "2024-07-20",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.7",
    "COVID-19": "14.7",
    RSV: "0.3"
  },
  {
    week_end: "2024-07-27",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.6",
    "COVID-19": "16.2",
    RSV: "0.3"
  },
  {
    week_end: "2024-08-03",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.6",
    "COVID-19": "17.5",
    RSV: "0.3"
  },
  {
    week_end: "2024-08-10",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.5",
    "COVID-19": "17.8",
    RSV: "0.2"
  },
  {
    week_end: "2024-08-17",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.4",
    "COVID-19": "17.6",
    RSV: "0.3"
  },
  {
    week_end: "2024-08-24",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.4",
    "COVID-19": "16.7",
    RSV: "0.3"
  },
  {
    week_end: "2024-08-31",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.4",
    "COVID-19": "16.4",
    RSV: "0.3"
  },
  {
    week_end: "2024-09-07",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.5",
    "COVID-19": "14.9",
    RSV: "0.3"
  },
  {
    week_end: "2024-09-14",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.5",
    "COVID-19": "13.4",
    RSV: "0.3"
  },
  {
    week_end: "2024-09-21",
    "**Numeric Value Property**": "percent_test_positivity",
    Influenza: "0.6",
    "COVID-19": "11.6",
    RSV: "0.4"
  }
], fe = "", me = "", we = {
  annotations: e,
  type: t,
  debugSvg: !1,
  chartMessage: n,
  title: r,
  showTitle: i,
  showDownloadMediaButton: a,
  theme: o,
  animate: l,
  fontSize: u,
  lineDatapointStyle: s,
  lineDatapointColor: V,
  barHasBorder: p,
  isLollipopChart: c,
  lollipopShape: _,
  lollipopColorStyle: d,
  visualizationSubType: y,
  barStyle: I,
  roundingStyle: f,
  tipRounding: m,
  isResponsiveTicks: w,
  general: S,
  padding: D,
  preliminaryData: k,
  yAxis: C,
  boxplot: R,
  topAxis: P,
  isLegendValue: z,
  barThickness: O,
  barHeight: N,
  barSpace: v,
  heights: h,
  xAxis: g,
  table: b,
  orientation: x,
  color: L,
  columns: T,
  legend: B,
  brush: A,
  exclusions: M,
  palette: F,
  isPaletteReversed: H,
  twoColor: q,
  labels: K,
  dataFormat: W,
  confidenceKeys: U,
  visual: E,
  useLogScale: Q,
  filterBehavior: j,
  highlightedBarValues: G,
  series: Y,
  tooltips: Z,
  forestPlot: J,
  area: X,
  sankey: $,
  suppressedData: ee,
  showChartBrush: te,
  datasets: ne,
  visualizationType: re,
  dataUrl: ie,
  customColors: ae,
  dataFileName: oe,
  dataFileSourceType: le,
  dataDescription: ue,
  validated: se,
  dynamicMarginTop: Ve,
  filters: pe,
  runtimeDataUrl: ce,
  description: _e,
  regions: de,
  version: ye,
  data: Ie,
  footnotes: fe,
  introText: me
};
export {
  we as S
};
