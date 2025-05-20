import { C as E } from "./storybook-CdcChart-15c68c2c.es.js";
import { b as W, h as q } from "./storybook-horizontal_bar-4e46191a.es.js";
import { p as K } from "./storybook-paired-bar-9dcfe98c.es.js";
import { e as G } from "./storybook-configHelpers-a0be6ce6.es.js";
import "./storybook-jsx-runtime-ea6e0d87.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-CdcChartComponent-5510d983.es.js";
import "./storybook-getViewport-513ec896.es.js";
import "./storybook-ConfigContext-9f571f8e.es.js";
import "./storybook-linear-d485c82c.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-index-80cf478c.es.js";
import "./storybook-lodash-a4231e1c.es.js";
import "./storybook-Text-0ce4510d.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-Icon-e250778e.es.js";
import "./storybook-FootnotesStandAlone-282ea454.es.js";
import "./storybook-footnoteSymbols-a3828433.es.js";
import "./storybook-InputSelect-4074d1ac.es.js";
import "./storybook-useDebounce-5d0290fd.es.js";
import "./storybook-Dropdown-1c93166f.es.js";
import "./storybook-DataTransform-cd90df2e.es.js";
import "./storybook-useDataVizClasses-2dec1abb.es.js";
import "./storybook-viewports-6b80499f.es.js";
import "./storybook-Loader-0256c39d.es.js";
import "./storybook-Footnotes-42c638ea.es.js";
import "./storybook-Tooltip-5b6ee371.es.js";
import "./storybook-Filters-1bcf5dff.es.js";
import "./storybook-Button-f953e457.es.js";
import "./storybook-MultiSelect-2a170cbd.es.js";
import "./storybook-FilterStyles-fd509eb9.es.js";
import "./storybook-NestedDropdown-92b50717.es.js";
import "./storybook-index-8cf78369.es.js";
import "./storybook-extends-0a3e0827.es.js";
import "./storybook-tiny-invariant-9f3340e2.es.js";
import "./storybook-DataTable-8965f731.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-index-31bf6905.es.js";
import "./storybook-colorPalettes-bc80e395.es.js";
import "./storybook-Table-7ddd1662.es.js";
import "./storybook-index-4a64ea6e.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-linear-395e5b60.es.js";
import "./storybook-BlurStrokeText-f87cf8cc.es.js";
import "./storybook-index-d975883a.es.js";
import "./storybook-Accordion-edcda35b.es.js";
import "./storybook-coveUpdateWorker-2d39117f.es.js";
const Q = "chart", j = "Line", Z = {
  dataKey: "STATE"
}, J = [
  {
    dataKey: "Rate"
  }
], X = [
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
], ee = [
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
], ae = "hex-data.csv", te = "file", ne = [
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
], ie = {
  horizontal: !1,
  series: !1
}, oe = {
  type: Q,
  visualizationType: j,
  xAxis: Z,
  series: J,
  filters: X,
  data: ee,
  dataFileName: ae,
  dataFileSourceType: te,
  formattedData: ne,
  dataDescription: ie
}, se = "chart", re = "Lollipop Style Horizontal Bar Chart - Number of Spills Occurring in the Home", ce = !0, le = !1, ue = "theme-blue", de = !0, pe = "medium", we = "hover", Ae = "false", Se = !0, ke = "circle", he = "two-tone", De = "horizontal", me = "", Ne = "standard", ge = "top", Fe = !1, fe = {
  showDownloadButton: !1
}, Ye = {
  left: 5,
  right: 5
}, be = {
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
}, ye = [], Le = {
  hasLine: !1
}, Te = !1, ve = 0.35, $e = 6, xe = 15, Ce = {
  vertical: 300,
  horizontal: 170.39999999999998
}, He = {
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
}, Re = {
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
}, Be = "horizontal", Me = "pinkpurple", Pe = {}, Ve = {
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
}, Ie = {
  active: !1,
  keys: []
}, ze = "qualitative-bold", Oe = !1, _e = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, Ue = !1, Ee = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, We = {}, qe = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, Ke = !1, Ge = "Filter Change", Qe = [], je = [
  {
    dataKey: "Home",
    type: "Bar",
    tooltip: !0
  }
], Ze = {
  opacity: 90
}, Je = 212, Xe = [
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
], ea = "CSV_Source_Example_for_Horizontal_Bar_viz-cdcwp1619811744363.csv", aa = "file", ta = "Bar", na = "Subtext can be added here for options like citing data sources or insight into reading the bar chart.", ia = 47, oa = [], sa = "medium", ra = 4.23, ca = 0, la = {
  type: se,
  title: re,
  showTitle: ce,
  showDownloadMediaButton: le,
  theme: ue,
  animate: de,
  fontSize: pe,
  lineDatapointStyle: we,
  barHasBorder: Ae,
  isLollipopChart: Se,
  lollipopShape: ke,
  lollipopColorStyle: he,
  visualizationSubType: De,
  barStyle: me,
  roundingStyle: Ne,
  tipRounding: ge,
  isResponsiveTicks: Fe,
  general: fe,
  padding: Ye,
  yAxis: be,
  boxplot: ye,
  topAxis: Le,
  isLegendValue: Te,
  barThickness: ve,
  barHeight: $e,
  barSpace: xe,
  heights: Ce,
  xAxis: He,
  table: Re,
  orientation: Be,
  color: Me,
  columns: Pe,
  legend: Ve,
  exclusions: Ie,
  palette: ze,
  isPaletteReversed: Oe,
  twoColor: _e,
  labels: Ue,
  dataFormat: Ee,
  confidenceKeys: We,
  visual: qe,
  useLogScale: Ke,
  filterBehavior: Ge,
  highlightedBarValues: Qe,
  series: je,
  tooltips: Ze,
  height: Je,
  data: Xe,
  dataFileName: ea,
  dataFileSourceType: aa,
  visualizationType: ta,
  description: na,
  barPadding: ia,
  filters: oa,
  lollipopSize: sa,
  validated: ra,
  dynamicMarginTop: ca
}, ua = "chart", da = !1, pa = {
  noData: "No Data Available"
}, wa = "Forest Plot Example", Aa = !0, Sa = !1, ka = "theme-blue", ha = !1, Da = "medium", ma = "hover", Na = "Same as Line", ga = "false", Fa = !1, fa = "circle", Ya = "two-tone", ba = "regular", ya = "", La = "standard", Ta = "top", va = !1, $a = {
  showDownloadButton: !1
}, xa = {
  left: 5,
  right: 5
}, Ca = [], Ha = {
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
}, Ra = {
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
}, Ba = {
  hasLine: !1
}, Ma = !1, Pa = 0.35, Va = 25, Ia = 15, za = {
  vertical: 300,
  horizontal: 750
}, Oa = {
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
}, _a = {
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
}, Ua = "horizontal", Ea = "pinkpurple", Wa = {
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
}, qa = {
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
}, Ka = {
  height: 25,
  data: [],
  active: !1
}, Ga = {
  active: !0,
  keys: []
}, Qa = "qualitative-bold", ja = !1, Za = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, Ja = !1, Xa = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, et = {}, at = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, tt = !1, nt = "Filter Change", it = [], ot = [
  {
    dataKey: "Confidence",
    type: "Forest Plot",
    axis: "Left",
    tooltip: !0
  }
], st = {
  opacity: 90,
  singleSeries: !1
}, rt = {
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
}, ct = {
  isStacked: !1
}, lt = {}, ut = "Forest Plot", dt = [
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
], pt = "data.csv", wt = "file", At = [
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
], St = {
  horizontal: !1,
  series: !1
}, kt = 4.23, ht = 0, Dt = {
  type: ua,
  debugSvg: da,
  chartMessage: pa,
  title: wa,
  showTitle: Aa,
  showDownloadMediaButton: Sa,
  theme: ka,
  animate: ha,
  fontSize: Da,
  lineDatapointStyle: ma,
  lineDatapointColor: Na,
  barHasBorder: ga,
  isLollipopChart: Fa,
  lollipopShape: fa,
  lollipopColorStyle: Ya,
  visualizationSubType: ba,
  barStyle: ya,
  roundingStyle: La,
  tipRounding: Ta,
  isResponsiveTicks: va,
  general: $a,
  padding: xa,
  suppressedData: Ca,
  yAxis: Ha,
  boxplot: Ra,
  topAxis: Ba,
  isLegendValue: Ma,
  barThickness: Pa,
  barHeight: Va,
  barSpace: Ia,
  heights: za,
  xAxis: Oa,
  table: _a,
  orientation: Ua,
  color: Ea,
  columns: Wa,
  legend: qa,
  brush: Ka,
  exclusions: Ga,
  palette: Qa,
  isPaletteReversed: ja,
  twoColor: Za,
  labels: Ja,
  dataFormat: Xa,
  confidenceKeys: et,
  visual: at,
  useLogScale: tt,
  filterBehavior: nt,
  highlightedBarValues: it,
  series: ot,
  tooltips: st,
  forestPlot: rt,
  area: ct,
  datasets: lt,
  visualizationType: ut,
  data: dt,
  dataFileName: pt,
  dataFileSourceType: wt,
  formattedData: At,
  dataDescription: St,
  validated: kt,
  dynamicMarginTop: ht
}, mt = [], Nt = "chart", gt = !1, Ft = {
  noData: "No Data Available"
}, ft = "", Yt = !1, bt = !1, yt = "theme-blue", Lt = !1, Tt = "medium", vt = "hover", $t = "Same as Line", xt = "false", Ct = !1, Ht = "circle", Rt = "two-tone", Bt = "regular", Mt = "flat", Pt = "standard", Vt = "top", It = !0, zt = {
  annotationDropdownText: "Annotations",
  showMissingDataLabel: !1,
  showSuppressedSymbol: !0,
  showZeroValueData: !1,
  hideNullValue: !0,
  showDownloadButton: !1
}, Ot = {
  left: 5,
  right: 5
}, _t = [], Ut = {
  hideAxis: !1,
  displayNumbersOnBar: !1,
  hideLabel: !1,
  hideTicks: !1,
  size: "75",
  gridLines: !1,
  enablePadding: !1,
  min: "0.1",
  max: "3",
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
  numTicks: "6",
  axisPadding: 0,
  scalePadding: 10,
  tickRotation: 0,
  anchors: [],
  shoMissingDataLabel: !0,
  showMissingDataLine: !0,
  categories: [],
  label: "Reported cases per 100,000 Population",
  type: "linear"
}, Et = {
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
}, Wt = {
  hasLine: !1
}, qt = !1, Kt = 0.35, Gt = 25, Qt = 15, jt = {
  vertical: 300,
  horizontal: 750
}, Zt = {
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
  sortByRecentDate: !1,
  dataKey: "Year",
  label: "Year",
  manual: !0,
  axisBBox: 62.779998779296875,
  tickWidthMax: 39
}, Jt = {
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
}, Xt = "vertical", en = "pinkpurple", an = {}, tn = {
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
  style: "boxes",
  subStyle: "linear blocks",
  groupBy: "",
  shape: "circle",
  tickRotation: "",
  hideBorder: {
    side: !1,
    topBottom: !0
  },
  position: "top"
}, nn = {
  height: 25,
  active: !1
}, on = {
  active: !1,
  keys: []
}, sn = "qualitative-bold", rn = !1, cn = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, ln = !0, un = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1,
  roundTo: "1"
}, dn = {}, pn = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1,
  lineDatapointSymbol: "none",
  maximumShapeAmount: 7
}, wn = !1, An = "Filter Change", Sn = [], kn = [
  {
    dataKey: "Hispanic",
    type: "Line",
    axis: "Left",
    tooltip: !0
  }
], hn = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, Dn = {
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
}, mn = {
  isStacked: !1
}, Nn = {
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
}, gn = [], Fn = "lg", fn = 4, Yn = "Charts", bn = "Line", yn = "Line", Ln = {
  key: null,
  ref: null,
  props: {},
  _owner: null
}, Tn = "Present one or more data trends over time.", vn = "Bar", $n = {}, xn = 4, Cn = [
  {
    Year: "2007",
    "American Indian/Alaska Native": "1.4",
    "Asian/Pacific Islander": "0.9",
    "Black, non-Hispanic": "2.3",
    "White, non-Hispanic": "1",
    Hispanic: "1"
  },
  {
    Year: "2008",
    "American Indian/Alaska Native": "1.8",
    "Asian/Pacific Islander": "0.8",
    "Black, non-Hispanic": "2.2",
    "White, non-Hispanic": "0.9",
    Hispanic: "0.8"
  },
  {
    Year: "2009",
    "American Indian/Alaska Native": "1",
    "Asian/Pacific Islander": "0.7",
    "Black, non-Hispanic": "1.7",
    "White, non-Hispanic": "0.8",
    Hispanic: "0.7"
  },
  {
    Year: "2010",
    "American Indian/Alaska Native": "1.1",
    "Asian/Pacific Islander": "0.6",
    "Black, non-Hispanic": "1.7",
    "White, non-Hispanic": "0.8",
    Hispanic: "0.6"
  },
  {
    Year: "2011",
    "American Indian/Alaska Native": "0.5",
    "Asian/Pacific Islander": "0.4",
    "Black, non-Hispanic": "1.4",
    "White, non-Hispanic": "0.8",
    Hispanic: "0.4"
  },
  {
    Year: "2012",
    "American Indian/Alaska Native": "0.7",
    "Asian/Pacific Islander": "0.4",
    "Black, non-Hispanic": "1.1",
    "White, non-Hispanic": "0.8",
    Hispanic: "0.4"
  },
  {
    Year: "2013",
    "American Indian/Alaska Native": "0.7",
    "Asian/Pacific Islander": "0.3",
    "Black, non-Hispanic": "0.9",
    "White, non-Hispanic": "0.9",
    Hispanic: "0.4"
  },
  {
    Year: "2014",
    "American Indian/Alaska Native": "0.8",
    "Asian/Pacific Islander": "0.3",
    "Black, non-Hispanic": "0.8",
    "White, non-Hispanic": "0.9",
    Hispanic: "0.3"
  },
  {
    Year: "2015",
    "American Indian/Alaska Native": "0.7",
    "Asian/Pacific Islander": "0.4",
    "Black, non-Hispanic": "1",
    "White, non-Hispanic": "1.1",
    Hispanic: "0.3"
  },
  {
    Year: "2016",
    "American Indian/Alaska Native": "0.5",
    "Asian/Pacific Islander": "0.3",
    "Black, non-Hispanic": "0.9",
    "White, non-Hispanic": "1",
    Hispanic: "0.3"
  },
  {
    Year: "2017",
    "American Indian/Alaska Native": "0.7",
    "Asian/Pacific Islander": "0.3",
    "Black, non-Hispanic": "1",
    "White, non-Hispanic": "1.1",
    Hispanic: "0.3"
  },
  {
    Year: "2018",
    "American Indian/Alaska Native": "0.9",
    "Asian/Pacific Islander": "0.3",
    "Black, non-Hispanic": "1",
    "White, non-Hispanic": "1",
    Hispanic: "0.4"
  },
  {
    Year: "2019",
    "American Indian/Alaska Native": "0.6",
    "Asian/Pacific Islander": "0.3",
    "Black, non-Hispanic": "0.9",
    "White, non-Hispanic": "1",
    Hispanic: "0.4"
  },
  {
    Year: "2020",
    "American Indian/Alaska Native": "0.4",
    "Asian/Pacific Islander": "0.2",
    "Black, non-Hispanic": "0.7",
    "White, non-Hispanic": "0.7",
    Hispanic: "0.3"
  },
  {
    Year: "2021",
    "American Indian/Alaska Native": "0.4",
    "Asian/Pacific Islander": "0.2",
    "Black, non-Hispanic": "0.9",
    "White, non-Hispanic": "0.6",
    Hispanic: "0.4"
  },
  {
    Year: "2022",
    "American Indian/Alaska Native": "0.4",
    "Asian/Pacific Islander": "0.3",
    "Black, non-Hispanic": "1",
    "White, non-Hispanic": "0.6",
    Hispanic: "0.4"
  }
], Hn = "chart_data 2-6.csv", Rn = "file", Bn = {
  horizontal: !1,
  series: !1
}, Mn = "4.25.1", Pn = 0, Vn = [
  {
    Year: "2007",
    "American Indian/Alaska Native": "1.4",
    "Asian/Pacific Islander": "0.9",
    "Black, non-Hispanic": "2.3",
    "White, non-Hispanic": "1",
    Hispanic: "1"
  },
  {
    Year: "2008",
    "American Indian/Alaska Native": "1.8",
    "Asian/Pacific Islander": "0.8",
    "Black, non-Hispanic": "2.2",
    "White, non-Hispanic": "0.9",
    Hispanic: "0.8"
  },
  {
    Year: "2009",
    "American Indian/Alaska Native": "1",
    "Asian/Pacific Islander": "0.7",
    "Black, non-Hispanic": "1.7",
    "White, non-Hispanic": "0.8",
    Hispanic: "0.7"
  },
  {
    Year: "2010",
    "American Indian/Alaska Native": "1.1",
    "Asian/Pacific Islander": "0.6",
    "Black, non-Hispanic": "1.7",
    "White, non-Hispanic": "0.8",
    Hispanic: "0.6"
  },
  {
    Year: "2011",
    "American Indian/Alaska Native": "0.5",
    "Asian/Pacific Islander": "0.4",
    "Black, non-Hispanic": "1.4",
    "White, non-Hispanic": "0.8",
    Hispanic: "0.4"
  },
  {
    Year: "2012",
    "American Indian/Alaska Native": "0.7",
    "Asian/Pacific Islander": "0.4",
    "Black, non-Hispanic": "1.1",
    "White, non-Hispanic": "0.8",
    Hispanic: "0.4"
  },
  {
    Year: "2013",
    "American Indian/Alaska Native": "0.7",
    "Asian/Pacific Islander": "0.3",
    "Black, non-Hispanic": "0.9",
    "White, non-Hispanic": "0.9",
    Hispanic: "0.4"
  },
  {
    Year: "2014",
    "American Indian/Alaska Native": "0.8",
    "Asian/Pacific Islander": "0.3",
    "Black, non-Hispanic": "0.8",
    "White, non-Hispanic": "0.9",
    Hispanic: "0.3"
  },
  {
    Year: "2015",
    "American Indian/Alaska Native": "0.7",
    "Asian/Pacific Islander": "0.4",
    "Black, non-Hispanic": "1",
    "White, non-Hispanic": "1.1",
    Hispanic: "0.3"
  },
  {
    Year: "2016",
    "American Indian/Alaska Native": "0.5",
    "Asian/Pacific Islander": "0.3",
    "Black, non-Hispanic": "0.9",
    "White, non-Hispanic": "1",
    Hispanic: "0.3"
  },
  {
    Year: "2017",
    "American Indian/Alaska Native": "0.7",
    "Asian/Pacific Islander": "0.3",
    "Black, non-Hispanic": "1",
    "White, non-Hispanic": "1.1",
    Hispanic: "0.3"
  },
  {
    Year: "2018",
    "American Indian/Alaska Native": "0.9",
    "Asian/Pacific Islander": "0.3",
    "Black, non-Hispanic": "1",
    "White, non-Hispanic": "1",
    Hispanic: "0.4"
  },
  {
    Year: "2019",
    "American Indian/Alaska Native": "0.6",
    "Asian/Pacific Islander": "0.3",
    "Black, non-Hispanic": "0.9",
    "White, non-Hispanic": "1",
    Hispanic: "0.4"
  },
  {
    Year: "2020",
    "American Indian/Alaska Native": "0.4",
    "Asian/Pacific Islander": "0.2",
    "Black, non-Hispanic": "0.7",
    "White, non-Hispanic": "0.7",
    Hispanic: "0.3"
  },
  {
    Year: "2021",
    "American Indian/Alaska Native": "0.4",
    "Asian/Pacific Islander": "0.2",
    "Black, non-Hispanic": "0.9",
    "White, non-Hispanic": "0.6",
    Hispanic: "0.4"
  },
  {
    Year: "2022",
    "American Indian/Alaska Native": "0.4",
    "Asian/Pacific Islander": "0.3",
    "Black, non-Hispanic": "1",
    "White, non-Hispanic": "0.6",
    Hispanic: "0.4"
  }
], In = [], zn = {
  addColorMigration: !0
}, On = {
  annotations: mt,
  type: Nt,
  debugSvg: gt,
  chartMessage: Ft,
  title: ft,
  showTitle: Yt,
  showDownloadMediaButton: bt,
  theme: yt,
  animate: Lt,
  fontSize: Tt,
  lineDatapointStyle: vt,
  lineDatapointColor: $t,
  barHasBorder: xt,
  isLollipopChart: Ct,
  lollipopShape: Ht,
  lollipopColorStyle: Rt,
  visualizationSubType: Bt,
  barStyle: Mt,
  roundingStyle: Pt,
  tipRounding: Vt,
  isResponsiveTicks: It,
  general: zt,
  padding: Ot,
  preliminaryData: _t,
  yAxis: Ut,
  boxplot: Et,
  topAxis: Wt,
  isLegendValue: qt,
  barThickness: Kt,
  barHeight: Gt,
  barSpace: Qt,
  heights: jt,
  xAxis: Zt,
  table: Jt,
  orientation: Xt,
  color: en,
  columns: an,
  legend: tn,
  brush: nn,
  exclusions: on,
  palette: sn,
  isPaletteReversed: rn,
  twoColor: cn,
  labels: ln,
  dataFormat: un,
  confidenceKeys: dn,
  visual: pn,
  useLogScale: wn,
  filterBehavior: An,
  highlightedBarValues: Sn,
  series: kn,
  tooltips: hn,
  forestPlot: Dn,
  area: mn,
  sankey: Nn,
  errors: gn,
  currentViewport: Fn,
  id: fn,
  category: Yn,
  label: bn,
  subType: yn,
  icon: Ln,
  content: Tn,
  visualizationType: vn,
  datasets: $n,
  activeVizButtonID: xn,
  data: Cn,
  dataFileName: Hn,
  dataFileSourceType: Rn,
  dataDescription: Bn,
  version: Mn,
  dynamicMarginTop: Pn,
  formattedData: Vn,
  filters: In,
  migrations: zn
}, _n = [], Un = "chart", En = !1, Wn = {
  noData: "No Data Available"
}, qn = "", Kn = !0, Gn = !1, Qn = "theme-blue", jn = !1, Zn = "medium", Jn = "hover", Xn = "Same as Line", ei = "false", ai = !1, ti = "circle", ni = "two-tone", ii = "regular", oi = "", si = "standard", ri = "top", ci = !1, li = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  hideNullValue: !0
}, ui = {
  left: 5,
  right: 5
}, di = [], pi = {
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
}, wi = {
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
}, Ai = {
  hasLine: !1
}, Si = !1, ki = "0.37", hi = 25, Di = 15, mi = {
  vertical: 300,
  horizontal: 750
}, Ni = {
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
}, gi = {
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
}, Fi = "vertical", fi = "pinkpurple", Yi = {}, bi = {
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
}, yi = {
  height: 25,
  active: !1
}, Li = {
  active: !1,
  keys: []
}, Ti = "qualitative-bold", vi = !1, $i = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, xi = !1, Ci = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1
}, Hi = {}, Ri = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, Bi = !1, Mi = "Filter Change", Pi = [], Vi = [], Ii = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, zi = {
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
}, Oi = {
  isStacked: !1
}, _i = {
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
}, Ui = {}, Ei = "Pie", Wi = [
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
], qi = "valid-data-chart.csv", Ki = "file", Gi = [
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
], Qi = {
  horizontal: !1,
  series: !1
}, ji = "4.24.10", Zi = {
  annotations: _n,
  type: Un,
  debugSvg: En,
  chartMessage: Wn,
  title: qn,
  showTitle: Kn,
  showDownloadMediaButton: Gn,
  theme: Qn,
  animate: jn,
  fontSize: Zn,
  lineDatapointStyle: Jn,
  lineDatapointColor: Xn,
  barHasBorder: ei,
  isLollipopChart: ai,
  lollipopShape: ti,
  lollipopColorStyle: ni,
  visualizationSubType: ii,
  barStyle: oi,
  roundingStyle: si,
  tipRounding: ri,
  isResponsiveTicks: ci,
  general: li,
  padding: ui,
  preliminaryData: di,
  yAxis: pi,
  boxplot: wi,
  topAxis: Ai,
  isLegendValue: Si,
  barThickness: ki,
  barHeight: hi,
  barSpace: Di,
  heights: mi,
  xAxis: Ni,
  table: gi,
  orientation: Fi,
  color: fi,
  columns: Yi,
  legend: bi,
  brush: yi,
  exclusions: Li,
  palette: Ti,
  isPaletteReversed: vi,
  twoColor: $i,
  labels: xi,
  dataFormat: Ci,
  confidenceKeys: Hi,
  visual: Ri,
  useLogScale: Bi,
  filterBehavior: Mi,
  highlightedBarValues: Pi,
  series: Vi,
  tooltips: Ii,
  forestPlot: zi,
  area: Oi,
  sankey: _i,
  datasets: Ui,
  visualizationType: Ei,
  data: Wi,
  dataFileName: qi,
  dataFileSourceType: Ki,
  formattedData: Gi,
  dataDescription: Qi,
  version: ji
}, Ji = [], Xi = "chart", eo = !1, ao = {
  noData: "No Data Available"
}, to = "Example Box Plot", no = !0, io = !1, oo = "theme-blue", so = !1, ro = "medium", co = "hover", lo = "Same as Line", uo = "false", po = !1, wo = "circle", Ao = "two-tone", So = "regular", ko = "", ho = "standard", Do = "top", mo = !1, No = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  showZeroValueData: !0,
  hideNullValue: !0
}, go = {
  left: 5,
  right: 5
}, Fo = [], fo = {
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
}, Yo = {
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
}, bo = {
  hasLine: !1
}, yo = !1, Lo = "0.99", To = 25, vo = 15, $o = {
  vertical: 300,
  horizontal: 750
}, xo = {
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
}, Co = {
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
}, Ho = "vertical", Ro = "pinkpurple", Bo = {}, Mo = {
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
}, Po = {
  height: 25,
  active: !1
}, Vo = {
  active: !1,
  keys: []
}, Io = "qualitative1", zo = !1, Oo = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, _o = !1, Uo = {
  commas: !1,
  prefix: "",
  suffix: "",
  abbreviated: !1,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1,
  useFormat: !1
}, Eo = {}, Wo = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, qo = !1, Ko = "Filter Change", Go = [], Qo = [
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
], jo = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, Zo = {
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
}, Jo = {
  isStacked: !1
}, Xo = {
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
}, es = 300, as = "Box Plot", ts = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", ns = {
  horizontal: !1,
  series: !1,
  singleRow: !0,
  xKey: "category one",
  valueKey: "value"
}, is = [
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
], os = "4.24.10", ss = 0, rs = {
  annotations: Ji,
  type: Xi,
  debugSvg: eo,
  chartMessage: ao,
  title: to,
  showTitle: no,
  showDownloadMediaButton: io,
  theme: oo,
  animate: so,
  fontSize: ro,
  lineDatapointStyle: co,
  lineDatapointColor: lo,
  barHasBorder: uo,
  isLollipopChart: po,
  lollipopShape: wo,
  lollipopColorStyle: Ao,
  visualizationSubType: So,
  barStyle: ko,
  roundingStyle: ho,
  tipRounding: Do,
  isResponsiveTicks: mo,
  general: No,
  padding: go,
  preliminaryData: Fo,
  yAxis: fo,
  boxplot: Yo,
  topAxis: bo,
  isLegendValue: yo,
  barThickness: Lo,
  barHeight: To,
  barSpace: vo,
  heights: $o,
  xAxis: xo,
  table: Co,
  orientation: Ho,
  color: Ro,
  columns: Bo,
  legend: Mo,
  brush: Po,
  exclusions: Vo,
  palette: Io,
  isPaletteReversed: zo,
  twoColor: Oo,
  labels: _o,
  dataFormat: Uo,
  confidenceKeys: Eo,
  visual: Wo,
  useLogScale: qo,
  filterBehavior: Ko,
  highlightedBarValues: Go,
  series: Qo,
  tooltips: jo,
  forestPlot: Zo,
  area: Jo,
  sankey: Xo,
  height: es,
  visualizationType: as,
  description: ts,
  dataDescription: ns,
  data: is,
  version: os,
  dynamicMarginTop: ss
}, cs = [], ls = "chart", us = !1, ds = {
  noData: "No Data Available"
}, ps = "Example Area Chart - City Temperature Data", ws = !0, As = !1, Ss = "theme-blue", ks = !1, hs = "medium", Ds = "hover", ms = "Same as Line", Ns = "false", gs = !1, Fs = "circle", fs = "two-tone", Ys = "stacked", bs = "", ys = "standard", Ls = "top", Ts = !1, vs = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  showZeroValueData: !0,
  hideNullValue: !0
}, $s = {
  left: 5,
  right: 5
}, xs = [], Cs = {
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
}, Hs = {
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
}, Rs = {
  hasLine: !1
}, Bs = !1, Ms = 0.35, Ps = 25, Vs = 20, Is = {
  vertical: 300,
  horizontal: 750
}, zs = {
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
}, Os = {
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
}, _s = "vertical", Us = "pinkpurple", Es = {}, Ws = {
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
}, qs = {
  height: 25,
  active: !1,
  pattern_id: "brush_pattern",
  accent_color: "#ddd"
}, Ks = {
  active: !0,
  keys: []
}, Gs = "qualitative-bold", Qs = !1, js = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, Zs = !1, Js = {
  commas: !0,
  prefix: "",
  suffix: "",
  abbreviated: !0,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1,
  useFormat: !0
}, Xs = {}, er = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !1,
  horizontalHoverLine: !1
}, ar = !1, tr = "dropdown", nr = [], ir = [
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
], or = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: ""
}, sr = {
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
}, rr = {
  isStacked: !0
}, cr = {
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
}, lr = !1, ur = {
  horizontal: !1,
  series: !1
}, dr = "valid-area-chart.json", pr = "file", wr = [
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
], Ar = 300, Sr = [
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
], kr = "Area Chart", hr = "This example shows a bar chart created in the visualization editor in WCMS", Dr = "0", mr = 4.23, Nr = 0, gr = "4.24.10", Fr = {
  annotations: cs,
  type: ls,
  debugSvg: us,
  chartMessage: ds,
  title: ps,
  showTitle: ws,
  showDownloadMediaButton: As,
  theme: Ss,
  animate: ks,
  fontSize: hs,
  lineDatapointStyle: Ds,
  lineDatapointColor: ms,
  barHasBorder: Ns,
  isLollipopChart: gs,
  lollipopShape: Fs,
  lollipopColorStyle: fs,
  visualizationSubType: Ys,
  barStyle: bs,
  roundingStyle: ys,
  tipRounding: Ls,
  isResponsiveTicks: Ts,
  general: vs,
  padding: $s,
  preliminaryData: xs,
  yAxis: Cs,
  boxplot: Hs,
  topAxis: Rs,
  isLegendValue: Bs,
  barThickness: Ms,
  barHeight: Ps,
  barSpace: Vs,
  heights: Is,
  xAxis: zs,
  table: Os,
  orientation: _s,
  color: Us,
  columns: Es,
  legend: Ws,
  brush: qs,
  exclusions: Ks,
  palette: Gs,
  isPaletteReversed: Qs,
  twoColor: js,
  labels: Zs,
  dataFormat: Js,
  confidenceKeys: Xs,
  visual: er,
  useLogScale: ar,
  filterBehavior: tr,
  highlightedBarValues: nr,
  series: ir,
  tooltips: or,
  forestPlot: sr,
  area: rr,
  sankey: cr,
  showChartBrush: lr,
  dataDescription: ur,
  dataFileName: dr,
  dataFileSourceType: pr,
  formattedData: wr,
  height: Ar,
  data: Sr,
  visualizationType: kr,
  description: hr,
  dataCutoff: Dr,
  validated: mr,
  dynamicMarginTop: Nr,
  version: gr
}, fr = [], Yr = "chart", br = !1, yr = {
  noData: "No Data Available"
}, Lr = "", Tr = !0, vr = !1, $r = "theme-blue", xr = !1, Cr = "medium", Hr = "hover", Rr = "Same as Line", Br = "false", Mr = !1, Pr = "circle", Vr = "two-tone", Ir = "regular", zr = "flat", Or = "standard", _r = "top", Ur = !1, Er = {
  annotationDropdownText: "Annotations",
  showDownloadButton: !1,
  showMissingDataLabel: !0,
  showSuppressedSymbol: !0,
  showZeroValueData: !0,
  hideNullValue: !0,
  showAnnotationDropdown: !1
}, Wr = {
  left: 5,
  right: 5
}, qr = [], Kr = {
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
}, Gr = {
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
}, Qr = {
  hasLine: !1
}, jr = !1, Zr = 0.35, Jr = 25, Xr = 15, ec = {
  vertical: "250",
  horizontal: 750,
  mobileVertical: "150"
}, ac = {
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
}, tc = {
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
}, nc = "vertical", ic = "pinkpurple", oc = {}, sc = {
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
}, rc = {
  height: 25,
  active: !1
}, cc = {
  active: !1,
  keys: []
}, lc = "qualitative-bold", uc = !1, dc = {
  palette: "monochrome-1",
  isPaletteReversed: !1
}, pc = !1, wc = {
  commas: !0,
  prefix: "",
  suffix: " percent vaccinated",
  abbreviated: !0,
  bottomSuffix: "",
  bottomPrefix: "",
  bottomAbbreviated: !1,
  roundTo: "1",
  onlyShowTopPrefixSuffix: !0
}, Ac = {}, Sc = {
  border: !0,
  accent: !0,
  background: !0,
  verticalHoverLine: !0,
  horizontalHoverLine: !1
}, kc = !1, hc = "Filter Change", Dc = [], mc = [
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
], Nc = {
  opacity: 90,
  singleSeries: !1,
  dateDisplayFormat: "%B %-d, %Y"
}, gc = {
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
}, Fc = {
  isStacked: !1
}, fc = {
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
}, Yc = "Line", bc = [
  "#f06f19",
  "#f06f19",
  "#f06f19",
  "#000000",
  "#0A6C75",
  "#C0F2FD",
  "#C0F2FD",
  "#C0F2FD",
  "#C0F2FD"
], yc = "/wcms/vizdata/Respitory_Viruses/NISVaccinationsCumulative7a.json", Lc = "url", Tc = "https://www.cdc.gov/wcms/vizdata/Respitory_Viruses/NISVaccinationsCumulative7a.json", vc = {
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
}, $c = "4.24.10", xc = '<div class="text-left"><p class="fnote">95% confidence intervals for the point estimates are presented at the data.cdc.gov link below.<br><br> Data last updated on <span data-timestamp="NISVaccinationsCumulative7a:Data_as_of"></span> and presented through <span data-timestamp="NISVaccinationsCumulative7a:Data_Presented_Through"></span>. <a href="https://data.cdc.gov/Vaccinations/Weekly-Respiratory-Virus-Vaccination-Data-Children/5c6r-xi2t">View this dataset</a> on data.CDC.gov.</p></div>', Cc = 0, Hc = [
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
], Rc = "https://wcms-wp.cdc.gov/wcms/vizdata/Respitory_Viruses/NISVaccinationsCumulative7a.json", Bc = !1, Mc = !1, Pc = {
  annotations: fr,
  type: Yr,
  debugSvg: br,
  chartMessage: yr,
  title: Lr,
  showTitle: Tr,
  showDownloadMediaButton: vr,
  theme: $r,
  animate: xr,
  fontSize: Cr,
  lineDatapointStyle: Hr,
  lineDatapointColor: Rr,
  barHasBorder: Br,
  isLollipopChart: Mr,
  lollipopShape: Pr,
  lollipopColorStyle: Vr,
  visualizationSubType: Ir,
  barStyle: zr,
  roundingStyle: Or,
  tipRounding: _r,
  isResponsiveTicks: Ur,
  general: Er,
  padding: Wr,
  preliminaryData: qr,
  yAxis: Kr,
  boxplot: Gr,
  topAxis: Qr,
  isLegendValue: jr,
  barThickness: Zr,
  barHeight: Jr,
  barSpace: Xr,
  heights: ec,
  xAxis: ac,
  table: tc,
  orientation: nc,
  color: ic,
  columns: oc,
  legend: sc,
  brush: rc,
  exclusions: cc,
  palette: lc,
  isPaletteReversed: uc,
  twoColor: dc,
  labels: pc,
  dataFormat: wc,
  confidenceKeys: Ac,
  visual: Sc,
  useLogScale: kc,
  filterBehavior: hc,
  highlightedBarValues: Dc,
  series: mc,
  tooltips: Nc,
  forestPlot: gc,
  area: Fc,
  sankey: fc,
  visualizationType: Yc,
  customColors: bc,
  dataFileName: yc,
  dataFileSourceType: Lc,
  dataUrl: Tc,
  dataDescription: vc,
  version: $c,
  description: xc,
  dynamicMarginTop: Cc,
  filters: Hc,
  runtimeDataUrl: Rc,
  showLineSeriesLabels: Bc,
  colorMatchLineSeriesLabels: Mc
}, H0 = {
  title: "Components/Templates/Chart",
  component: E
}, e = {
  args: {
    config: oe,
    isEditor: !1
  }
}, a = {
  args: {
    config: W,
    isEditor: !1
  }
}, t = {
  args: {
    config: G(Pc, [{
      path: ["tooltips", "dateDisplayFormat"],
      value: "%b. %d %Y"
    }])
  }
}, n = {
  args: {
    config: la,
    isEditor: !1
  }
}, i = {
  args: {
    config: Dt
  }
}, o = {
  args: {
    config: q
  }
}, s = {
  args: {
    config: On
  }
}, r = {
  args: {
    config: Zi
  }
}, c = {
  args: {
    config: K
  }
}, l = {
  args: {
    config: rs,
    isEditor: !1
  }
}, u = {
  args: {
    config: Fr,
    isEditor: !1
  }
};
var d, p, w;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(d = e.parameters) == null ? void 0 : d.docs,
    source: {
      originalSource: `{
  args: {
    config: lineChartTwoPointsRegressionTest,
    isEditor: false
  }
}`,
      ...(w = (p = e.parameters) == null ? void 0 : p.docs) == null ? void 0 : w.source
    }
  }
};
var A, S, k;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(A = a.parameters) == null ? void 0 : A.docs,
    source: {
      originalSource: `{
  args: {
    config: lineChartTwoPointsNewChart,
    isEditor: false
  }
}`,
      ...(k = (S = a.parameters) == null ? void 0 : S.docs) == null ? void 0 : k.source
    }
  }
};
var h, D, m;
t.parameters = {
  ...t.parameters,
  docs: {
    ...(h = t.parameters) == null ? void 0 : h.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(multipleLines, [{
      path: ['tooltips', 'dateDisplayFormat'],
      value: '%b. %d %Y'
    }])
  }
}`,
      ...(m = (D = t.parameters) == null ? void 0 : D.docs) == null ? void 0 : m.source
    }
  }
};
var N, g, F;
n.parameters = {
  ...n.parameters,
  docs: {
    ...(N = n.parameters) == null ? void 0 : N.docs,
    source: {
      originalSource: `{
  args: {
    config: lollipop,
    isEditor: false
  }
}`,
      ...(F = (g = n.parameters) == null ? void 0 : g.docs) == null ? void 0 : F.source
    }
  }
};
var f, Y, b;
i.parameters = {
  ...i.parameters,
  docs: {
    ...(f = i.parameters) == null ? void 0 : f.docs,
    source: {
      originalSource: `{
  args: {
    config: forestPlot
  }
}`,
      ...(b = (Y = i.parameters) == null ? void 0 : Y.docs) == null ? void 0 : b.source
    }
  }
};
var y, L, T;
o.parameters = {
  ...o.parameters,
  docs: {
    ...(y = o.parameters) == null ? void 0 : y.docs,
    source: {
      originalSource: `{
  args: {
    config: horizontalBarConfig
  }
}`,
      ...(T = (L = o.parameters) == null ? void 0 : L.docs) == null ? void 0 : T.source
    }
  }
};
var v, $, x;
s.parameters = {
  ...s.parameters,
  docs: {
    ...(v = s.parameters) == null ? void 0 : v.docs,
    source: {
      originalSource: `{
  args: {
    config: barChartLabels
  }
}`,
      ...(x = ($ = s.parameters) == null ? void 0 : $.docs) == null ? void 0 : x.source
    }
  }
};
var C, H, R;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(C = r.parameters) == null ? void 0 : C.docs,
    source: {
      originalSource: `{
  args: {
    config: pieConfig
  }
}`,
      ...(R = (H = r.parameters) == null ? void 0 : H.docs) == null ? void 0 : R.source
    }
  }
};
var B, M, P;
c.parameters = {
  ...c.parameters,
  docs: {
    ...(B = c.parameters) == null ? void 0 : B.docs,
    source: {
      originalSource: `{
  args: {
    config: pairedBar
  }
}`,
      ...(P = (M = c.parameters) == null ? void 0 : M.docs) == null ? void 0 : P.source
    }
  }
};
var V, I, z;
l.parameters = {
  ...l.parameters,
  docs: {
    ...(V = l.parameters) == null ? void 0 : V.docs,
    source: {
      originalSource: `{
  args: {
    config: boxPlotConfig,
    isEditor: false
  }
}`,
      ...(z = (I = l.parameters) == null ? void 0 : I.docs) == null ? void 0 : z.source
    }
  }
};
var O, _, U;
u.parameters = {
  ...u.parameters,
  docs: {
    ...(O = u.parameters) == null ? void 0 : O.docs,
    source: {
      originalSource: `{
  args: {
    config: areaChartStacked,
    isEditor: false
  }
}`,
      ...(U = (_ = u.parameters) == null ? void 0 : _.docs) == null ? void 0 : U.source
    }
  }
};
const R0 = ["line_Chart_Two_Points_Regression_Test", "line_Chart_Two_Points_New_Chart", "multiple_lines", "Lollipop", "Forest_Plot", "Horizontal_Bar", "BarChart_Labels", "Pie", "Paired_Bar", "BoxPlot_Multiseries", "Area_Chart_stacked"];
export {
  u as Area_Chart_stacked,
  s as BarChart_Labels,
  l as BoxPlot_Multiseries,
  i as Forest_Plot,
  o as Horizontal_Bar,
  n as Lollipop,
  c as Paired_Bar,
  r as Pie,
  R0 as __namedExportsOrder,
  H0 as default,
  a as line_Chart_Two_Points_New_Chart,
  e as line_Chart_Two_Points_Regression_Test,
  t as multiple_lines
};
