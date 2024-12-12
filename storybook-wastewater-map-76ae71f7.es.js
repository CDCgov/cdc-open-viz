const e = [], a = {
  geoBorderColor: "darkGray",
  headerColor: "theme-blue",
  title: "",
  showTitle: !0,
  showSidebar: !0,
  showDownloadButton: !0,
  showDownloadMediaButton: !1,
  displayAsHex: !1,
  displayStateLabels: !1,
  territoriesLabel: "Territories",
  territoriesAlwaysShow: !1,
  language: "en",
  geoType: "us",
  geoLabelOverride: "State/Territory",
  hasRegions: !1,
  fullBorder: !1,
  type: "map",
  convertFipsCodes: !0,
  palette: {
    isReversed: !1
  },
  allowMapZoom: !0,
  hideGeoColumnInTooltip: !1,
  hidePrimaryColumnInTooltip: !1,
  statePicked: {
    fipsCode: "01",
    stateName: "Alabama"
  },
  expandDataTable: !1,
  annotationDropdownText: "Annotations",
  noStateFoundMessage: "Map Unavailable",
  subtext: '<div class="text-left">Data last updated on <span data-timestamp="nwss_rsv_sc2_flua_combined_state_map:Data_as_of"></span> and presented through <span data-timestamp="nwss_rsv_sc2_flua_combined_state_map:Data_Presented_Through"></span>. '
}, t = "map", o = "greenbluereverse", l = {
  geo: {
    name: "State",
    label: "Location",
    tooltip: !1,
    dataTable: !0
  },
  primary: {
    dataTable: !0,
    tooltip: !0,
    prefix: "",
    suffix: "",
    name: "activity_level_label",
    label: "Viral Activity Level",
    roundToPlace: 0
  },
  navigate: {
    name: ""
  },
  latitude: {
    name: ""
  },
  longitude: {
    name: ""
  },
  additionalColumn1: {
    label: "Sites Currently Reporting",
    dataTable: !0,
    tooltips: !1,
    prefix: "",
    suffix: "",
    name: "num_sites",
    tooltip: !0
  },
  additionalColumn2: {
    label: "Limited Coverage",
    dataTable: !0,
    tooltips: !1,
    prefix: "",
    suffix: "",
    tooltip: !1,
    name: "hatch"
  },
  additionalColumn3: {
    label: "",
    dataTable: !1,
    tooltips: !1,
    prefix: "",
    suffix: "",
    tooltip: !0,
    useCommas: !0,
    name: "hatch"
  }
}, s = {
  descriptions: {},
  specialClasses: [],
  unified: !1,
  singleColumn: !1,
  singleRow: !0,
  verticalSorted: !1,
  showSpecialClassesLast: !0,
  dynamicDescription: !1,
  type: "category",
  numberOfItems: 8,
  position: "bottom",
  title: "Wastewater Viral Activity Level",
  categoryValuesOrder: [
    "Very High",
    "High",
    "Moderate",
    "Low",
    "Minimal",
    "No Data"
  ],
  additionalCategories: [
    "No Data",
    "Minimal",
    "Low",
    "Moderate",
    "High",
    "Very High"
  ],
  description: "",
  style: "gradient",
  subStyle: "linear blocks",
  tickRotation: "",
  singleColumnLegend: !1,
  hideBorder: !1
}, i = [
  {
    order: "asc",
    label: "Select a virus from the dropdown:",
    columnName: "pathogen",
    values: [
      "COVID-19",
      "Influenza A",
      "RSV"
    ],
    active: "COVID-19",
    filterStyle: "dropdown"
  }
], r = {
  label: "Data Table",
  expanded: !1,
  limitHeight: !0,
  height: "500",
  caption: "",
  showDownloadUrl: !0,
  showDataTableLink: !0,
  showFullGeoNameInCSV: !1,
  forceDisplay: !0,
  download: !0,
  indexLabel: "State/Territory",
  wrapColumns: !1
}, n = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0,
  opacity: 90
}, d = {
  minBubbleSize: 1,
  maxBubbleSize: 20,
  extraBubbleBorder: !1,
  cityStyle: "circle",
  geoCodeCircleSize: 2,
  showBubbleZeros: !1,
  cityStyleLabel: "",
  additionalCityStyles: []
}, p = {
  coordinates: [
    0,
    30
  ],
  zoom: 1
}, c = {
  layers: [],
  patterns: [
    {
      dataKey: "hatch",
      pattern: "lines",
      dataValue: "Limited Coverage",
      label: "Limited Coverage*",
      size: "medium"
    }
  ]
}, u = {
  type: "",
  shapeGroups: [
    {
      legendTitle: "",
      legendDescription: "",
      items: [
        {
          key: "",
          shape: "Arrow Up",
          column: "",
          operator: "=",
          value: ""
        }
      ]
    }
  ]
}, m = "Filter Change", f = [
  "#34547B",
  "#4B7F9B",
  "#4B7F9B",
  "#6BB0BD",
  "#9FDAD0",
  "#C8EFDA",
  "#B4B4B4",
  "#B4B4B4",
  "#B4B4B4",
  "#B4B4B4"
], b = {}, h = "https://www.cdc.gov/wcms/vizdata/ncezid_didri/NWSSStateMapCombined.json", g = "url", y = {
  horizontal: !1,
  series: !1
}, w = "4.24.9", v = "https://www.cdc.gov/wcms/vizdata/ncezid_didri/NWSSStateMapCombined.json", B = {
  annotations: e,
  general: a,
  type: t,
  color: o,
  columns: l,
  legend: s,
  filters: i,
  table: r,
  tooltips: n,
  visual: d,
  mapPosition: p,
  map: c,
  hexMap: u,
  filterBehavior: m,
  customColors: f,
  datasets: b,
  dataFileName: h,
  dataFileSourceType: g,
  dataDescription: y,
  version: w,
  dataUrl: v
};
export {
  B as W
};
