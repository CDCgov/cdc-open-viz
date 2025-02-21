import { C as b } from "./storybook-CdcMap-41f7d7f3.es.js";
import { S as v } from "./storybook-DEV-8942-83419f1e.es.js";
import { W as w } from "./storybook-wastewater-map-26721024.es.js";
import { e as o } from "./storybook-configHelpers-a0be6ce6.es.js";
import "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-InputToggle-26a8dec6.es.js";
import "./storybook-lodash-a4231e1c.es.js";
import "./storybook-DataTransform-12e90958.es.js";
import "./storybook-linear-ef79b404.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Text-c19e6344.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-Icon-5df8fab3.es.js";
import "./storybook-Inputs-b140d38c.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-Tooltip-b155742f.es.js";
import "./storybook-Filters-8098ad82.es.js";
import "./storybook-Button-9d1b8d73.es.js";
import "./storybook-MultiSelect-09077870.es.js";
import "./storybook-Loader-2db99cd1.es.js";
import "./storybook-FilterStyles-fd509eb9.es.js";
import "./storybook-NestedDropdown-43ca2e78.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-index-88ba5a71.es.js";
import "./storybook-DataTable-58beb6cf.es.js";
import "./storybook-viewports-678eca6e.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-1cfab80e.es.js";
import "./storybook-coveUpdateWorker-f0e4685a.es.js";
import "./storybook-supported-geos-c96b4fa3.es.js";
import "./storybook-getViewport-7dc50c16.es.js";
import "./storybook-Accordion-e48d2b15.es.js";
import "./storybook-updateFieldFactory-c006040a.es.js";
const p = {
  title: "Example U.S. Data Map with Custom Geographic Layer",
  subtext: "Map subtext",
  type: "data",
  geoType: "us",
  headerColor: "theme-cyan",
  showSidebar: !0,
  showTitle: !0,
  showDownloadButton: !0,
  expandDataTable: !1,
  backgroundColor: "#f5f5f5",
  geoBorderColor: "darkGray",
  territoriesLabel: "Territories",
  language: "en",
  hasRegions: !1,
  showDownloadMediaButton: !1,
  displayAsHex: !1,
  displayStateLabels: !1,
  territoriesAlwaysShow: !1,
  geoLabelOverride: "",
  fullBorder: !1,
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
  convertFipsCodes: !0
}, I = "map", h = "yelloworangebrown", g = {
  geo: {
    name: "STATE",
    label: "Location",
    tooltip: !1,
    dataTable: !0
  },
  primary: {
    name: "Rate",
    label: "Rate",
    prefix: "",
    suffix: "%",
    dataTable: !0,
    tooltip: !0
  },
  navigate: {
    name: "URL",
    tooltip: !1,
    dataTable: !1
  },
  Location: {
    name: "Location",
    label: "Location",
    prefix: "",
    suffix: "",
    tooltip: !0,
    dataTable: !0
  },
  geosInRegion: {
    name: ""
  },
  latitude: {
    name: ""
  },
  longitude: {
    name: ""
  }
}, f = {
  numberOfItems: 4,
  position: "side",
  title: "Title of the Map",
  description: "Legend of the Map",
  type: "equalinterval",
  specialClasses: [],
  geosPerColor: {},
  unified: !1,
  singleColumn: !0,
  descriptions: {},
  dynamicDescription: !1,
  singleRow: !1,
  showSpecialClassesLast: !1,
  verticalSorted: !1
}, L = [], T = {
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
  indexLabel: "",
  wrapColumns: !1
}, R = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0,
  opacity: 90
}, _ = {
  minBubbleSize: 1,
  maxBubbleSize: 20,
  extraBubbleBorder: !1,
  cityStyle: "circle",
  geoCodeCircleSize: 2,
  showBubbleZeros: !1,
  cityStyleLabel: "",
  additionalCityStyles: []
}, y = {
  coordinates: [
    0,
    30
  ],
  zoom: 1
}, u = {
  layers: [
    {
      name: "Oregon",
      url: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data/oregon-topojson.json",
      namespace: "cove (1)",
      fillOpacity: 0.75,
      fill: "aqua",
      strokeWidth: "2",
      tooltip: "Oregon"
    }
  ],
  patterns: []
}, S = {
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
}, A = "Filter Change", D = [
  {
    STATE: "AL",
    Rate: 30,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    $$hashKey: "object:195",
    stateabbreviation: "al",
    statename: "Alabama",
    stateId: "1",
    timeIntervalDataVal: 0,
    color: "class4_color1",
    $$stateabbreviation: "al",
    $$statename: "Alabama",
    $$stateId: "1",
    $$color: "class4_color1"
  },
  {
    STATE: "AK",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/",
    $$hashKey: "object:196",
    stateabbreviation: "ak",
    statename: "Alaska",
    stateId: "2",
    timeIntervalDataVal: 0,
    color: "class4_color2",
    $$stateabbreviation: "ak",
    $$statename: "Alaska",
    $$stateId: "2",
    $$color: "class4_color2"
  },
  {
    STATE: "AS",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    $$hashKey: "object:197",
    type: "territory",
    stateabbreviation: "as",
    statename: "American Samoa",
    stateId: "60",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "as",
    $$statename: "American Samoa",
    $$stateId: "60",
    $$color: "class4_color3"
  },
  {
    STATE: "AZ",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/",
    $$hashKey: "object:198",
    stateabbreviation: "az",
    statename: "Arizona",
    stateId: "4",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "az",
    $$statename: "Arizona",
    $$stateId: "4",
    $$color: "class4_color3"
  },
  {
    STATE: "AR",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/",
    $$hashKey: "object:199",
    stateabbreviation: "ar",
    statename: "Arkansas",
    textoffsety: 3,
    stateId: "5",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "ar",
    $$statename: "Arkansas",
    $$stateId: "5",
    $$color: "class4_color3"
  },
  {
    STATE: "CA",
    Rate: 30,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "ca",
    statename: "California",
    textoffsety: 10,
    stateId: "6",
    timeIntervalDataVal: 0,
    color: "class4_color1",
    $$stateabbreviation: "ca",
    $$statename: "California",
    $$stateId: "6",
    $$color: "class4_color1"
  },
  {
    STATE: "CO",
    Rate: 40,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "co",
    statename: "Colorado",
    textoffsety: 3,
    stateId: "8",
    timeIntervalDataVal: 0,
    color: "class4_color2",
    $$stateabbreviation: "co",
    $$statename: "Colorado",
    $$stateId: "8",
    $$color: "class4_color2"
  },
  {
    STATE: "CT",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    type: "smallstate",
    stateabbreviation: "ct",
    statename: "Connecticut",
    textoffsetx: 2,
    textoffsety: 4,
    stateId: "9",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "ct",
    $$statename: "Connecticut",
    $$stateId: "9",
    $$color: "class4_color3"
  },
  {
    STATE: "DE",
    Rate: 57,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    type: "smallstate",
    stateabbreviation: "de",
    statename: "Delaware",
    stateId: "10",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "de",
    $$statename: "Delaware",
    $$stateId: "10",
    $$color: "class4_color3"
  },
  {
    STATE: "DC",
    Rate: 60,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    type: "smallstate",
    stateabbreviation: "dc",
    statename: "District of Columbia",
    stateId: "11",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "dc",
    $$statename: "District of Columbia",
    $$stateId: "11",
    $$color: "class4_color3"
  },
  {
    STATE: "FL",
    Rate: 30,
    Location: "Work",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "fl",
    statename: "Florida",
    textoffsetx: 8,
    textoffsety: 7,
    stateId: "12",
    timeIntervalDataVal: 0,
    color: "class4_color1",
    $$stateabbreviation: "fl",
    $$statename: "Florida",
    $$stateId: "12",
    $$color: "class4_color1"
  },
  {
    STATE: "GA",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "ga",
    statename: "Georgia",
    stateId: "13",
    timeIntervalDataVal: 0,
    color: "class4_color2",
    $$stateabbreviation: "ga",
    $$statename: "Georgia",
    $$stateId: "13",
    $$color: "class4_color2"
  },
  {
    STATE: "GU",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    type: "territory",
    stateabbreviation: "gu",
    statename: "Guam",
    stateId: "66",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "gu",
    $$statename: "Guam",
    $$stateId: "66",
    $$color: "class4_color3"
  },
  {
    STATE: "HI",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "hi",
    statename: "Hawaii",
    textoffsetx: -15,
    textoffsety: 7,
    stateId: "15",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "hi",
    $$statename: "Hawaii",
    $$stateId: "15",
    $$color: "class4_color3"
  },
  {
    STATE: "ID",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "id",
    statename: "Idaho",
    textoffsety: 10,
    stateId: "16",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "id",
    $$statename: "Idaho",
    $$stateId: "16",
    $$color: "class4_color3"
  },
  {
    STATE: "IL",
    Rate: 30,
    Location: "Work",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "il",
    statename: "Illinois",
    stateId: "17",
    timeIntervalDataVal: 0,
    color: "class4_color1",
    $$stateabbreviation: "il",
    $$statename: "Illinois",
    $$stateId: "17",
    $$color: "class4_color1"
  },
  {
    STATE: "IN",
    Rate: 40,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "in",
    statename: "Indiana",
    stateId: "18",
    timeIntervalDataVal: 0,
    color: "class4_color2",
    $$stateabbreviation: "in",
    $$statename: "Indiana",
    $$stateId: "18",
    $$color: "class4_color2"
  },
  {
    STATE: "IA",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "ia",
    statename: "Iowa",
    textoffsety: 3,
    stateId: "19",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "ia",
    $$statename: "Iowa",
    $$stateId: "19",
    $$color: "class4_color3"
  },
  {
    STATE: "KS",
    Rate: 57,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "ks",
    statename: "Kansas",
    textoffsety: 5,
    stateId: "20",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "ks",
    $$statename: "Kansas",
    $$stateId: "20",
    $$color: "class4_color3"
  },
  {
    STATE: "KY",
    Rate: 60,
    Location: "NA",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "ky",
    statename: "Kentucky",
    textoffsetx: 4,
    textoffsety: 3,
    stateId: "21",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "ky",
    $$statename: "Kentucky",
    $$stateId: "21",
    $$color: "class4_color3"
  },
  {
    STATE: "LA",
    Rate: 30,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "la",
    statename: "Louisiana",
    textoffsetx: -5,
    stateId: "22",
    timeIntervalDataVal: 0,
    color: "class4_color1",
    $$stateabbreviation: "la",
    $$statename: "Louisiana",
    $$stateId: "22",
    $$color: "class4_color1"
  },
  {
    STATE: "ME",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "me",
    statename: "Maine",
    stateId: "23",
    timeIntervalDataVal: 0,
    color: "class4_color2",
    $$stateabbreviation: "me",
    $$statename: "Maine",
    $$stateId: "23",
    $$color: "class4_color2"
  },
  {
    STATE: "MH",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    type: "territory",
    stateabbreviation: "mh",
    statename: "Marshall Islands",
    stateId: "68",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "mh",
    $$statename: "Marshall Islands",
    $$stateId: "68",
    $$color: "class4_color3"
  },
  {
    STATE: "MD",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/",
    type: "smallstate",
    stateabbreviation: "md",
    statename: "Maryland",
    textoffsetx: 2,
    textoffsety: 2,
    stateId: "24",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "md",
    $$statename: "Maryland",
    $$stateId: "24",
    $$color: "class4_color3"
  },
  {
    STATE: "MA",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "ma",
    statename: "Massachusetts",
    textoffsety: 3,
    stateId: "25",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "ma",
    $$statename: "Massachusetts",
    $$stateId: "25",
    $$color: "class4_color3"
  },
  {
    STATE: "MI",
    Rate: 12,
    Location: "Work",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "mi",
    statename: "Michigan",
    textoffsetx: 6,
    textoffsety: 10,
    stateId: "26",
    timeIntervalDataVal: 0,
    color: "class4_color1",
    $$stateabbreviation: "mi",
    $$statename: "Michigan",
    $$stateId: "26",
    $$color: "class4_color1"
  },
  {
    STATE: "FM",
    Rate: 65,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    type: "territory",
    stateabbreviation: "fm",
    statename: "Micronesia",
    stateId: "71",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "fm",
    $$statename: "Micronesia",
    $$stateId: "71",
    $$color: "class4_color3"
  },
  {
    STATE: "MN",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "mn",
    statename: "Minnesota",
    stateId: "27",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "mn",
    $$statename: "Minnesota",
    $$stateId: "27",
    $$color: "class4_color3"
  },
  {
    STATE: "MS",
    Rate: 57,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "ms",
    statename: "Mississippi",
    stateId: "28",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "ms",
    $$statename: "Mississippi",
    $$stateId: "28",
    $$color: "class4_color3"
  },
  {
    STATE: "MO",
    Rate: 60,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "mo",
    statename: "Missouri",
    textoffsety: 5,
    stateId: "29",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "mo",
    $$statename: "Missouri",
    $$stateId: "29",
    $$color: "class4_color3"
  },
  {
    STATE: "MT",
    Rate: 30,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "mt",
    statename: "Montana",
    stateId: "30",
    timeIntervalDataVal: 0,
    color: "class4_color1",
    $$stateabbreviation: "mt",
    $$statename: "Montana",
    $$stateId: "30",
    $$color: "class4_color1"
  },
  {
    STATE: "NE",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "ne",
    statename: "Nebraska",
    textoffsety: 3,
    stateId: "31",
    timeIntervalDataVal: 0,
    color: "class4_color2",
    $$stateabbreviation: "ne",
    $$statename: "Nebraska",
    $$stateId: "31",
    $$color: "class4_color2"
  },
  {
    STATE: "NV",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "nv",
    statename: "Nevada",
    stateId: "32",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "nv",
    $$statename: "Nevada",
    $$stateId: "32",
    $$color: "class4_color3"
  },
  {
    STATE: "NH",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/",
    type: "smallstate",
    stateabbreviation: "nh",
    statename: "New Hampshire",
    textoffsety: 6,
    stateId: "33",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "nh",
    $$statename: "New Hampshire",
    $$stateId: "33",
    $$color: "class4_color3"
  },
  {
    STATE: "NJ",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/",
    type: "smallstate",
    stateabbreviation: "nj",
    statename: "New Jersey",
    stateId: "34",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "nj",
    $$statename: "New Jersey",
    $$stateId: "34",
    $$color: "class4_color3"
  },
  {
    STATE: "NM",
    Rate: 12,
    Location: "Work",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "nm",
    statename: "New Mexico",
    textoffsety: 3,
    stateId: "35",
    timeIntervalDataVal: 0,
    color: "class4_color1",
    $$stateabbreviation: "nm",
    $$statename: "New Mexico",
    $$stateId: "35",
    $$color: "class4_color1"
  },
  {
    STATE: "NY",
    Rate: 40,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "ny",
    statename: "New York",
    stateId: "36",
    timeIntervalDataVal: 0,
    color: "class4_color2",
    $$stateabbreviation: "ny",
    $$statename: "New York",
    $$stateId: "36",
    $$color: "class4_color2"
  },
  {
    STATE: "NC",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "nc",
    statename: "North Carolina",
    textoffsety: 3,
    stateId: "37",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "nc",
    $$statename: "North Carolina",
    $$stateId: "37",
    $$color: "class4_color3"
  },
  {
    STATE: "ND",
    Rate: 57,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "nd",
    statename: "North Dakota",
    textoffsety: 3,
    stateId: "38",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "nd",
    $$statename: "North Dakota",
    $$stateId: "38",
    $$color: "class4_color3"
  },
  {
    STATE: "MP",
    Rate: 60,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    type: "territory",
    stateabbreviation: "mp",
    statename: "Northern Mariana Islands",
    stateId: "69",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "mp",
    $$statename: "Northern Mariana Islands",
    $$stateId: "69",
    $$color: "class4_color3"
  },
  {
    STATE: "OH",
    Rate: 88,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "oh",
    statename: "Ohio",
    textoffsety: 5,
    stateId: "39",
    timeIntervalDataVal: 0,
    color: "class4_color4",
    $$stateabbreviation: "oh",
    $$statename: "Ohio",
    $$stateId: "39",
    $$color: "class4_color4"
  },
  {
    STATE: "OK",
    Rate: 40,
    Location: "Work",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "ok",
    statename: "Oklahoma",
    textoffsety: 3,
    stateId: "40",
    timeIntervalDataVal: 0,
    color: "class4_color2",
    $$stateabbreviation: "ok",
    $$statename: "Oklahoma",
    $$stateId: "40",
    $$color: "class4_color2"
  },
  {
    STATE: "OR",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "or",
    statename: "Oregon",
    textoffsety: 3,
    stateId: "41",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "or",
    $$statename: "Oregon",
    $$stateId: "41",
    $$color: "class4_color3"
  },
  {
    STATE: "PW",
    Rate: 15,
    Location: "School",
    URL: "https://www.cdc.gov/",
    type: "territory",
    stateabbreviation: "pw",
    statename: "Palau",
    stateId: "70",
    timeIntervalDataVal: 0,
    color: "class4_color1",
    $$stateabbreviation: "pw",
    $$statename: "Palau",
    $$stateId: "70",
    $$color: "class4_color1"
  },
  {
    STATE: "PA",
    Rate: 60,
    Location: "School",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "pa",
    statename: "Pennsylvania",
    textoffsety: 5,
    stateId: "42",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "pa",
    $$statename: "Pennsylvania",
    $$stateId: "42",
    $$color: "class4_color3"
  },
  {
    STATE: "PR",
    Rate: 30,
    Location: "Work",
    URL: "https://www.cdc.gov/",
    type: "territory",
    stateabbreviation: "pr",
    statename: "Puerto Rico",
    stateId: "72",
    timeIntervalDataVal: 0,
    color: "class4_color1",
    $$stateabbreviation: "pr",
    $$statename: "Puerto Rico",
    $$stateId: "72",
    $$color: "class4_color1"
  },
  {
    STATE: "RI",
    Rate: 40,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    type: "smallstate",
    stateabbreviation: "ri",
    statename: "Rhode Island",
    stateId: "44",
    timeIntervalDataVal: 0,
    color: "class4_color2",
    $$stateabbreviation: "ri",
    $$statename: "Rhode Island",
    $$stateId: "44",
    $$color: "class4_color2"
  },
  {
    STATE: "SC",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "sc",
    statename: "South Carolina",
    textoffsety: 3,
    stateId: "45",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "sc",
    $$statename: "South Carolina",
    $$stateId: "45",
    $$color: "class4_color3"
  },
  {
    STATE: "SD",
    Rate: 86,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "sd",
    statename: "South Dakota",
    textoffsety: 3,
    stateId: "46",
    timeIntervalDataVal: 0,
    color: "class4_color4",
    $$stateabbreviation: "sd",
    $$statename: "South Dakota",
    $$stateId: "46",
    $$color: "class4_color4"
  },
  {
    STATE: "TN",
    Rate: 60,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "tn",
    statename: "Tennessee",
    textoffsety: 4,
    stateId: "47",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "tn",
    $$statename: "Tennessee",
    $$stateId: "47",
    $$color: "class4_color3"
  },
  {
    STATE: "TX",
    Rate: 30,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "tx",
    statename: "Texas",
    stateId: "48",
    timeIntervalDataVal: 0,
    color: "class4_color1",
    $$stateabbreviation: "tx",
    $$statename: "Texas",
    $$stateId: "48",
    $$color: "class4_color1"
  },
  {
    STATE: "UT",
    Rate: 54,
    Location: "Work",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "ut",
    statename: "Utah",
    textoffsety: 3,
    stateId: "49",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "ut",
    $$statename: "Utah",
    $$stateId: "49",
    $$color: "class4_color3"
  },
  {
    STATE: "VT",
    Rate: 40,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    type: "smallstate",
    stateabbreviation: "vt",
    statename: "Vermont",
    stateId: "50",
    timeIntervalDataVal: 0,
    color: "class4_color2",
    $$stateabbreviation: "vt",
    $$statename: "Vermont",
    $$stateId: "50",
    $$color: "class4_color2"
  },
  {
    STATE: "VI",
    Rate: 55,
    Location: "School",
    URL: "https://www.cdc.gov/",
    type: "territory",
    stateabbreviation: "vi",
    statename: "Virgin Islands",
    stateId: "78",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "vi",
    $$statename: "Virgin Islands",
    $$stateId: "78",
    $$color: "class4_color3"
  },
  {
    STATE: "VA",
    Rate: 57,
    Location: "School",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "va",
    statename: "Virginia",
    textoffsety: 3,
    stateId: "51",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "va",
    $$statename: "Virginia",
    $$stateId: "51",
    $$color: "class4_color3"
  },
  {
    STATE: "WA",
    Rate: 62,
    Location: "Work",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "wa",
    statename: "Washington",
    textoffsety: 5,
    stateId: "53",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "wa",
    $$statename: "Washington",
    $$stateId: "53",
    $$color: "class4_color3"
  },
  {
    STATE: "WV",
    Rate: 25,
    Location: "Vehicle",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "wv",
    statename: "West Virginia",
    textoffsetx: -4,
    textoffsety: 10,
    stateId: "54",
    timeIntervalDataVal: 0,
    color: "class4_color1",
    $$stateabbreviation: "wv",
    $$statename: "West Virginia",
    $$stateId: "54",
    $$color: "class4_color1"
  },
  {
    STATE: "WI",
    Rate: 40,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "wi",
    statename: "Wisconsin",
    stateId: "55",
    timeIntervalDataVal: 0,
    color: "class4_color2",
    $$stateabbreviation: "wi",
    $$statename: "Wisconsin",
    $$stateId: "55",
    $$color: "class4_color2"
  },
  {
    STATE: "WY",
    Rate: 55,
    Location: "Home",
    URL: "https://www.cdc.gov/",
    stateabbreviation: "wy",
    statename: "Wyoming",
    textoffsety: 3,
    stateId: "56",
    timeIntervalDataVal: 0,
    color: "class4_color3",
    $$stateabbreviation: "wy",
    $$statename: "Wyoming",
    $$stateId: "56",
    $$color: "class4_color3"
  }
], V = {
  enabled: !1,
  dataHost: "wcms-wp.cdc.gov",
  configUrl: "/wcms/4.0/cdc-wp/data-presentation/page-elements/equal-interval-map.json"
}, x = {
  title: "Data Table"
}, U = !0, E = 4.23, M = "4.24.4", C = {
  general: p,
  type: I,
  color: h,
  columns: g,
  legend: f,
  filters: L,
  table: T,
  tooltips: R,
  visual: _,
  mapPosition: y,
  map: u,
  hexMap: S,
  filterBehavior: A,
  data: D,
  sharing: V,
  dataTable: x,
  usingWidgetLoader: U,
  validated: E,
  version: M
}, Lt = {
  title: "Components/Templates/Map/Legend",
  component: b
}, t = {
  args: {
    config: o(v, [{
      path: ["legend", "hideBorder"],
      value: !0
    }])
  }
}, a = {
  args: {
    config: o(C, [{
      path: ["legend", "position"],
      value: "bottom"
    }, {
      path: ["legend", "singleRow"],
      value: !1
    }])
  }
}, e = {
  args: {
    config: o(w, [{
      path: ["legend", "position"],
      value: "bottom"
    }, {
      path: ["legend", "style"],
      value: "circles"
    }, {
      path: ["legend", "singleRow"],
      value: !0
    }])
  }
};
var s, l, r;
t.parameters = {
  ...t.parameters,
  docs: {
    ...(s = t.parameters) == null ? void 0 : s.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(SingleStateWithFilters, [{
      path: ['legend', 'hideBorder'],
      value: true
    }])
  }
}`,
      ...(r = (l = t.parameters) == null ? void 0 : l.docs) == null ? void 0 : r.source
    }
  }
};
var i, c, n;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(i = a.parameters) == null ? void 0 : i.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(CustomLayerMap, [{
      path: ['legend', 'position'],
      value: 'bottom'
    }, {
      path: ['legend', 'singleRow'],
      value: false
    }])
  }
}`,
      ...(n = (c = a.parameters) == null ? void 0 : c.docs) == null ? void 0 : n.source
    }
  }
};
var $, m, d;
e.parameters = {
  ...e.parameters,
  docs: {
    ...($ = e.parameters) == null ? void 0 : $.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(WastewaterMap, [{
      path: ['legend', 'position'],
      value: 'bottom'
    }, {
      path: ['legend', 'style'],
      value: 'circles'
    }, {
      path: ['legend', 'singleRow'],
      value: true
    }])
  }
}`,
      ...(d = (m = e.parameters) == null ? void 0 : m.docs) == null ? void 0 : d.source
    }
  }
};
const Tt = ["Legend_Right", "Legend_Bottom", "Legend_Bottom_Single_Row"];
export {
  a as Legend_Bottom,
  e as Legend_Bottom_Single_Row,
  t as Legend_Right,
  Tt as __namedExportsOrder,
  Lt as default
};
