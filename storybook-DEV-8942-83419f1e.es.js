const e = [], a = {
  title: "Default County Map",
  subtext: "",
  territoriesLabel: "Territories",
  type: "map",
  geoType: "single-state",
  headerColor: "theme-blue",
  showSidebar: !0,
  showTitle: !0,
  geoBorderColor: "darkGray",
  showDownloadButton: !0,
  expandDataTable: !1,
  statePicked: {
    fipsCode: "06",
    stateName: "California"
  },
  annotationDropdownText: "Annotations",
  showDownloadMediaButton: !1,
  displayAsHex: !1,
  displayStateLabels: !1,
  territoriesAlwaysShow: !1,
  language: "en",
  geoLabelOverride: "Location",
  hasRegions: !1,
  fullBorder: !1,
  convertFipsCodes: !0,
  palette: {
    isReversed: !1
  },
  allowMapZoom: !0,
  hideGeoColumnInTooltip: !1,
  hidePrimaryColumnInTooltip: !1
}, t = "map", o = "pinkpurple", i = {
  geo: {
    name: "FIPS Codes",
    label: "Location",
    tooltip: !1,
    dataTable: !0
  },
  primary: {
    name: "Insured Rate",
    label: "Data Label",
    prefix: "",
    suffix: "%",
    dataTable: !0,
    tooltip: !0,
    roundToPlace: 0
  },
  navigate: {
    name: "link",
    tooltip: !1,
    dataTable: !1
  },
  latitude: {
    name: "Latitude"
  },
  longitude: {
    name: "Longitude"
  },
  additionalColumn1: {
    label: "New Column",
    dataTable: !0,
    tooltips: !1,
    prefix: "",
    suffix: "",
    name: "State"
  },
  additionalColumn2: {
    label: "New Column",
    dataTable: !0,
    tooltips: !1,
    prefix: "",
    suffix: "",
    name: "Latitude"
  },
  additionalColumn3: {
    label: "New Column",
    dataTable: !0,
    tooltips: !1,
    prefix: "",
    suffix: "",
    name: "Longitude"
  }
}, l = {
  numberOfItems: 3,
  position: "side",
  title: "Legend Title",
  description: "Legend Text",
  type: "equalnumber",
  specialClasses: [
    {
      key: "Insured Rate",
      value: "N/A",
      label: "N/A"
    }
  ],
  descriptions: {},
  unified: !1,
  singleColumn: !1,
  singleRow: !1,
  verticalSorted: !1,
  showSpecialClassesLast: !1,
  dynamicDescription: !1
}, n = [
  {
    order: "asc",
    label: "",
    columnName: "State",
    values: [
      "California",
      "Florida"
    ],
    active: "California",
    filterStyle: "dropdown"
  }
], s = {
  wrapColumns: !1,
  label: "Data Table",
  expanded: !1,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  showFullGeoNameInCSV: !1,
  forceDisplay: !0,
  download: !0,
  indexLabel: ""
}, r = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0,
  opacity: 90
}, d = {
  editorErrorMessage: []
}, u = {
  minBubbleSize: 1,
  maxBubbleSize: 20,
  extraBubbleBorder: !1,
  cityStyle: "circle",
  cityStyleLabel: "",
  showBubbleZeros: !1,
  additionalCityStyles: [],
  geoCodeCircleSize: "7"
}, p = {
  coordinates: [
    0,
    0
  ],
  zoom: 1
}, f = {
  layers: [],
  patterns: []
}, c = {
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
}, C = "Filter Change", m = [
  {
    "Insured Rate": 8,
    "Coverage Status": "Insured",
    "FIPS Codes": "06071",
    "Year (Good filter option)": "2010",
    link: "",
    Latitude: "",
    Longitude: "",
    State: "California"
  },
  {
    "Insured Rate": 25,
    "Coverage Status": "Insured",
    "FIPS Codes": "55005",
    "Year (Good filter option)": "2010",
    link: "",
    Latitude: "",
    Longitude: "",
    State: "California"
  },
  {
    "Insured Rate": 25,
    "Coverage Status": "Insured",
    "FIPS Codes": "12103",
    "Year (Good filter option)": "2010",
    link: "",
    Latitude: "",
    Longitude: "",
    State: "Florida"
  },
  {
    "Insured Rate": 25,
    "Coverage Status": "Insured",
    "FIPS Codes": "32005",
    "Year (Good filter option)": "2010",
    link: "",
    Latitude: "",
    State: "California",
    Longitude: ""
  },
  {
    "Insured Rate": 18,
    "Coverage Status": "Insured",
    "FIPS Codes": "06075",
    "Year (Good filter option)": "2010",
    link: "",
    Latitude: "",
    Longitude: "",
    State: "California"
  },
  {
    "Insured Rate": 3,
    "Coverage Status": "Insured",
    "FIPS Codes": "06027",
    "Year (Good filter option)": "2010",
    link: "",
    Latitude: "",
    Longitude: "",
    State: "California"
  },
  {
    "Insured Rate": 25,
    "Coverage Status": "Insured",
    "FIPS Codes": "06029",
    "Year (Good filter option)": "2010",
    link: "",
    Latitude: "",
    Longitude: "",
    State: "California"
  },
  {
    "Insured Rate": 60,
    "Coverage Status": "Insured",
    "FIPS Codes": "Yosemite is great!",
    "Year (Good filter option)": "2010",
    link: "",
    Latitude: "37.865101",
    Longitude: "-119.538330",
    State: "California"
  }
], g = "4.24.9", S = {
  annotations: e,
  general: a,
  type: t,
  color: o,
  columns: i,
  legend: l,
  filters: n,
  table: s,
  tooltips: r,
  runtime: d,
  visual: u,
  mapPosition: p,
  map: f,
  hexMap: c,
  filterBehavior: C,
  data: m,
  version: g
};
export {
  S
};
