import { f as V } from "./storybook-index-4ddb77d9.es.js";
import { M as ma } from "./storybook-CdcDashboard-14ffc5aa.es.js";
import { w as I, u as U } from "./storybook-index-d8b2b76a.es.js";
import { _ as c } from "./storybook-lodash-a4231e1c.es.js";
import { f as ua } from "./storybook-footnoteSymbols-a3828433.es.js";
import "./storybook-jsx-runtime-ea6e0d87.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-ConfigContext-9f571f8e.es.js";
import "./storybook-linear-d485c82c.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-index-80cf478c.es.js";
import "./storybook-Text-0ce4510d.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-Icon-e250778e.es.js";
import "./storybook-FootnotesStandAlone-282ea454.es.js";
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
import "./storybook-getViewport-513ec896.es.js";
import "./storybook-index-31bf6905.es.js";
import "./storybook-DataDesigner-9363c314.es.js";
import "./storybook-Card-3d4604ee.es.js";
import "./storybook-CdcMapComponent-92371039.es.js";
import "./storybook-DataTable-8965f731.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-colorPalettes-bc80e395.es.js";
import "./storybook-Table-7ddd1662.es.js";
import "./storybook-index-4a64ea6e.es.js";
import "./storybook-context-84915700.es.js";
import "./storybook-index-d975883a.es.js";
import "./storybook-Accordion-edcda35b.es.js";
import "./storybook-CdcChartComponent-5510d983.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-linear-395e5b60.es.js";
import "./storybook-BlurStrokeText-f87cf8cc.es.js";
import "./storybook-coveUpdateWorker-2d39117f.es.js";
import "./storybook-CdcDataBite-287ea3b8.es.js";
import "./storybook-CdcWaffleChart-dfec46a9.es.js";
import "./storybook-editor-f86b5faa.es.js";
import "./storybook-CdcMarkupInclude-7997ad11.es.js";
import "./storybook-DashboardFilters-e10b86fa.es.js";
import "./storybook-index-398c73a4.es.js";
const La = {
  sharedFilters: [
    {
      key: "Category",
      usedBy: [
        "map1"
      ],
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/api/poc/topics",
        valueSelector: "TopicID",
        textSelector: "Topic"
      },
      queryParameter: "topicid",
      resetLabel: "- Select -",
      showDropdown: !0
    },
    {
      key: "Indicator",
      usedBy: [
        "map1"
      ],
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/api/poc/indicators",
        valueSelector: "IndicatorID",
        textSelector: "Indicator"
      },
      queryParameter: "indicatorid",
      resetLabel: "- Select -",
      showDropdown: !0,
      parents: [
        "Category"
      ]
    },
    {
      key: "Year",
      usedBy: [
        "map1"
      ],
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/api/POC/Filters/Year",
        valueSelector: "Year",
        textSelector: "Year"
      },
      queryParameter: "year",
      resetLabel: "- Select -",
      showDropdown: !0,
      parents: [
        "Category",
        "Indicator"
      ]
    },
    {
      key: "View By",
      usedBy: [
        "map1"
      ],
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/api/POC/Filters/StratificationCategory",
        valueSelector: "StratificationCategory",
        textSelector: "StratificationCategory"
      },
      resetLabel: "- Select -",
      queryParameter: "stratificationcategoryid",
      showDropdown: !0,
      parents: [
        "Category",
        "Indicator"
      ]
    },
    {
      key: "Stratification",
      usedBy: [
        "map1"
      ],
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/api/POC/Filters/Stratification",
        valueSelector: "Stratification",
        textSelector: "Stratification"
      },
      resetLabel: "- Select -",
      queryParameter: "stratificationid",
      showDropdown: !0,
      parents: [
        "Category",
        "Indicator",
        "View By"
      ]
    }
  ]
}, Ta = [
  [
    {
      width: 12,
      widget: "map1"
    }
  ]
], ha = {
  map1: {
    table: {},
    uid: "map1",
    type: "map",
    defaultData: !1,
    dataKey: "data3",
    general: {
      title: "Map Example",
      subtext: "",
      territoriesLabel: "Territories",
      type: "data",
      geoType: "us",
      headerColor: "theme-blue",
      showSidebar: !0,
      showTitle: !0,
      geoBorderColor: "darkGray",
      showDownloadButton: !0,
      expandDataTable: !0,
      showDownloadMediaButton: !1,
      displayAsHex: !1,
      displayStateLabels: !0,
      territoriesAlwaysShow: !1,
      language: "en",
      geoLabelOverride: "",
      hasRegions: !1,
      fullBorder: !1,
      palette: {
        isReversed: !1
      },
      allowMapZoom: !0,
      hideGeoColumnInTooltip: !1,
      hidePrimaryColumnInTooltip: !1
    },
    tooltips: {
      appearanceType: "hover",
      linkLabel: "Learn More",
      capitalizeLabels: !0,
      opacity: 90
    },
    map: {
      layers: [],
      patterns: []
    },
    visual: {
      minBubbleSize: 1,
      maxBubbleSize: 20,
      extraBubbleBorder: !1,
      cityStyle: "circle",
      cityStyleLabel: "",
      showBubbleZeros: !1,
      additionalCityStyles: [],
      geoCodeCircleSize: 8
    },
    hexMap: {
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
    },
    annotations: [],
    color: "greenBlue",
    columns: {
      geo: {
        name: "LocationAbbr",
        label: "Location",
        tooltip: !1,
        dataTable: !0
      },
      primary: {
        name: "DataValue",
        label: "Value",
        prefix: "",
        suffix: "%",
        dataTable: !0,
        tooltip: !0
      },
      additionalColumn1: {
        label: "Low Confidence Limit",
        dataTable: !0,
        tooltips: !1,
        prefix: "",
        suffix: "%",
        name: "LowConfidenceLimit",
        tooltip: !0
      },
      additionalColumn2: {
        label: "High Confidence Limit",
        dataTable: !0,
        tooltips: !1,
        prefix: "",
        suffix: "%",
        name: "HighConfidenceLimit",
        tooltip: !0
      },
      navigate: {
        name: "link",
        tooltip: !1,
        dataTable: !1
      },
      latitude: {
        name: ""
      },
      longitude: {
        name: ""
      }
    },
    legend: {
      descriptions: {},
      specialClasses: [
        "NA"
      ],
      unified: !1,
      singleColumn: !1,
      dynamicDescription: !1,
      type: "equalnumber",
      numberOfItems: 4,
      position: "side",
      title: "Crude Prevalence",
      separateZero: !0
    }
  }
}, ya = "dashboard", Aa = {
  data3: {
    dataUrl: "http://test.gov/api/POC/TableData?DataValueTypeId=CRDMEDN"
  }
}, ga = {}, wa = "Apply Button", Ra = {}, Sa = 1684783370106, Ya = {
  dashboard: La,
  rows: Ta,
  visualizations: ha,
  type: ya,
  datasets: Aa,
  table: ga,
  filterBehavior: wa,
  runtime: Ra,
  uuid: Sa
}, fa = {
  theme: "theme-green",
  sharedFilters: [
    {
      key: "Location",
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/api/poc/locations",
        valueSelector: "LocationAbbr",
        textSelector: "LocationDesc"
      },
      queryParameter: "locationabbr",
      resetLabel: "- Select -",
      showDropdown: !0
    },
    {
      key: "Category",
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/api/poc/topics",
        valueSelector: "TopicID",
        textSelector: "Topic"
      },
      queryParameter: "topicid",
      resetLabel: "- Select -",
      showDropdown: !0
    },
    {
      key: "Indicator",
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/api/poc/indicators",
        valueSelector: "IndicatorID",
        textSelector: "Indicator"
      },
      queryParameter: "indicatorid",
      resetLabel: "- Select -",
      showDropdown: !0,
      parents: [
        "Category"
      ]
    },
    {
      key: "Year",
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/api/POC/Filters/Year",
        valueSelector: "Year",
        textSelector: "Year"
      },
      queryParameter: "year",
      showDropdown: !0,
      parents: [
        "Category",
        "Indicator"
      ]
    },
    {
      key: "View By",
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/api/POC/Filters/StratificationCategory",
        valueSelector: "StratificationCategory",
        textSelector: "StratificationCategory",
        defaultValue: "AGE"
      },
      queryParameter: "stratificationcategoryid",
      showDropdown: !0,
      parents: [
        "Category",
        "Indicator"
      ]
    },
    {
      key: "Data Type",
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/api/POC/Filters/DataValueType",
        valueSelector: "DataValueType",
        textSelector: "DataValueType"
      },
      queryParameter: "datavaluetypeid",
      showDropdown: !0,
      parents: [
        "Category",
        "Indicator"
      ]
    }
  ]
}, va = [
  [
    {
      width: 12,
      widget: "filters"
    }
  ],
  [
    {
      width: 12,
      widget: "header"
    }
  ],
  [
    {
      width: 12,
      widget: "subfilters"
    }
  ],
  [
    {
      width: 12,
      widget: "chart1"
    }
  ]
], ba = {
  filters: {
    type: "filter-dropdowns",
    visualizationType: "filter-dropdowns",
    hide: [
      3,
      4,
      5
    ]
  },
  header: {
    type: "markup-include",
    title: "Explore CDI Data by Location",
    srcUrl: "",
    theme: "theme-green"
  },
  subfilters: {
    type: "filter-dropdowns",
    visualizationType: "filter-dropdowns",
    hide: [
      0,
      1,
      2
    ],
    autoLoad: !0
  },
  chart1: {
    type: "chart",
    title: "",
    showTitle: !1,
    defaultData: !1,
    dataKey: "data3",
    showDownloadMediaButton: !1,
    theme: "theme-blue",
    animate: !1,
    fontSize: "medium",
    lineDatapointStyle: "hover",
    barHasBorder: "false",
    isLollipopChart: !1,
    lollipopShape: "circle",
    lollipopColorStyle: "two-tone",
    visualizationSubType: "regular",
    barStyle: "",
    roundingStyle: "standard",
    tipRounding: "top",
    isResponsiveTicks: !1,
    general: {
      showDownloadButton: !1
    },
    padding: {
      left: 5,
      right: 5
    },
    yAxis: {
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
    },
    boxplot: {
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
    },
    topAxis: {
      hasLine: !1
    },
    isLegendValue: !1,
    barThickness: 0.35,
    barHeight: 25,
    barSpace: 15,
    heights: {
      vertical: 300,
      horizontal: 750
    },
    xAxis: {
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
      axisPadding: 0,
      target: 0,
      maxTickRotation: 0,
      dataKey: "Stratification"
    },
    table: {
      label: "Data Table",
      expanded: !1,
      limitHeight: !1,
      height: "",
      caption: "",
      showDownloadUrl: !1,
      showDataTableLink: !1,
      indexLabel: "",
      download: !1,
      showVertical: !0,
      show: !1
    },
    orientation: "vertical",
    color: "pinkpurple",
    columns: {},
    legend: {
      behavior: "isolate",
      singleRow: !1,
      colorCode: "Stratification",
      reverseLabelOrder: !1,
      description: "",
      dynamicLegend: !1,
      dynamicLegendDefaultText: "Show All",
      dynamicLegendItemLimit: 5,
      dynamicLegendItemLimitMessage: "Dynamic Legend Item Limit Hit.",
      dynamicLegendChartMessage: "Select Options from the Legend",
      showLegendValuesTooltip: !1
    },
    exclusions: {
      active: !1,
      keys: []
    },
    palette: "sequential-bluereverse",
    isPaletteReversed: !0,
    twoColor: {
      palette: "monochrome-1",
      isPaletteReversed: !1
    },
    labels: !1,
    dataFormat: {
      commas: !1,
      prefix: "",
      suffix: "",
      abbreviated: !1,
      bottomSuffix: "",
      bottomPrefix: "",
      bottomAbbreviated: !1
    },
    confidenceKeys: {
      upper: "HighConfidenceLimit",
      lower: "LowConfidenceLimit"
    },
    visual: {
      border: !0,
      accent: !0,
      background: !0,
      verticalHoverLine: !1,
      horizontalHoverLine: !1
    },
    useLogScale: !1,
    filterBehavior: "Filter Change",
    highlightedBarValues: [],
    series: [
      {
        dataKey: "DataValue",
        type: "Bar",
        axis: "Left",
        tooltip: !0
      }
    ],
    tooltips: {
      opacity: 90
    },
    datasets: {},
    visualizationType: "Bar",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    validated: 4.23,
    dynamicMarginTop: 0,
    regions: [
      {}
    ]
  }
}, Fa = "dashboard", ka = {
  data3: {
    dataUrl: "http://test.gov/api/POC/TableData"
  }
}, Ca = "Apply Button", Ma = {}, Na = 1684783370106, Da = {
  dashboard: fa,
  rows: va,
  visualizations: ba,
  type: Fa,
  datasets: ka,
  filterBehavior: Ca,
  runtime: Ma,
  uuid: Na
}, Ha = {
  theme: "theme-blue",
  sharedFilters: [
    {
      key: "New Dashboard Filter 1",
      showDropdown: !0,
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "https://nccd-cove-public-api.apps.ecpaas-dev.cdc.gov/od-public?$datakey=brfss_prevalence_cove_explore_by_t",
        valueSelector: "",
        textSelector: ""
      },
      tier: 1
    }
  ]
}, Va = [
  {
    columns: [
      {
        width: 12,
        widget: "dashboardFilters1730831317688"
      },
      {},
      {}
    ]
  }
], Ia = {
  dashboardFilters1730831317688: {
    filters: [],
    filterBehavior: "Filter Change",
    newViz: !0,
    openModal: !0,
    uid: "dashboardFilters1730831317688",
    type: "dashboardFilters",
    sharedFilterIndexes: [
      0
    ],
    visualizationType: "dashboardFilters"
  }
}, Ua = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showDownloadLinkBelow: !0,
  showVertical: !0
}, Pa = !0, Ea = {
  "https://nccd-cove-public-api.apps.ecpaas-dev.cdc.gov/od-public?$datakey=brfss_prevalence_cove_explore_by_topic": {
    dataFileSize: 35061,
    dataFileName: "https://nccd-cove-public-api.apps.ecpaas-dev.cdc.gov/od-public?$datakey=brfss_prevalence_cove_explore_by_topic",
    dataFileSourceType: "url",
    dataFileFormat: "JSON",
    preview: !0,
    dataUrl: "https://nccd-cove-public-api.apps.ecpaas-dev.cdc.gov/od-public?$datakey=brfss_prevalence_cove_explore_by_topic"
  }
}, xa = !1, Wa = "dashboard", Oa = "0.37", Ba = {
  type: "categorical",
  size: 75,
  maxTickRotation: 45,
  labelOffset: 0
}, za = {}, qa = "4.24.10", _a = {
  dashboard: Ha,
  rows: Va,
  visualizations: Ia,
  table: Ua,
  newViz: Pa,
  datasets: Ea,
  isResponsiveTicks: xa,
  type: Wa,
  barThickness: Oa,
  xAxis: Ba,
  runtime: za,
  version: qa
}, Ga = {
  theme: "theme-blue",
  sharedFilters: [
    {
      key: "",
      type: "datafilter",
      columnName: "stateName",
      showDropdown: !0,
      setBy: "",
      values: [],
      usedBy: []
    }
  ]
}, Ka = [
  {
    columns: [
      {
        width: 12,
        widget: "legacySharedFilters"
      }
    ],
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    dataKey: "2024-Data-Indicators-State-Diabetes-Profiles.csv"
  },
  {
    columns: [
      {
        width: 12,
        widget: "map1719592570286"
      }
    ]
  }
], $a = {
  map1719592570286: {
    annotations: [],
    general: {
      geoType: "us",
      geoBorderColor: "darkGray",
      headerColor: "theme-blue",
      title: "",
      showTitle: !1,
      showSidebar: !1,
      showDownloadButton: !0,
      showDownloadMediaButton: !1,
      displayAsHex: !1,
      displayStateLabels: !0,
      territoriesLabel: "Territories",
      territoriesAlwaysShow: !1,
      language: "en",
      geoLabelOverride: "",
      hasRegions: !1,
      fullBorder: !1,
      type: "data",
      convertFipsCodes: !0,
      palette: {
        isReversed: !0
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
      noStateFoundMessage: "Map Unavailable"
    },
    type: "map",
    color: "bluegreenreverse",
    columns: {
      geo: {
        name: "stateName",
        label: "Location",
        tooltip: !1,
        dataTable: !0
      },
      primary: {
        dataTable: !1,
        tooltip: !1,
        prefix: "",
        suffix: "",
        name: "stateName",
        label: "",
        roundToPlace: 0
      },
      navigate: {
        name: "stateAbbr"
      },
      latitude: {
        name: ""
      },
      longitude: {
        name: ""
      }
    },
    legend: {
      descriptions: {},
      specialClasses: [],
      unified: !1,
      singleColumn: !1,
      singleRow: !1,
      verticalSorted: !1,
      showSpecialClassesLast: !1,
      dynamicDescription: !1,
      type: "equalnumber",
      numberOfItems: 3,
      position: "side",
      title: "Legend",
      categoryValuesOrder: [
        "Alabama",
        "Alaska",
        "Arkansas",
        "Arizona",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusets",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ],
      style: "circles",
      subStyle: "linear blocks",
      tickRotation: "",
      singleColumnLegend: !1,
      hideBorder: !1
    },
    filters: [],
    table: {
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
      indexLabel: "",
      showDownloadLinkBelow: !0
    },
    tooltips: {
      appearanceType: "hover",
      linkLabel: "Learn More",
      capitalizeLabels: !0,
      opacity: 90
    },
    visual: {
      minBubbleSize: 1,
      maxBubbleSize: 20,
      extraBubbleBorder: !1,
      cityStyle: "circle",
      cityStyleLabel: "",
      showBubbleZeros: !1,
      additionalCityStyles: [],
      geoCodeCircleSize: 8
    },
    mapPosition: {
      coordinates: [
        0,
        30
      ],
      zoom: 1
    },
    map: {
      layers: [],
      patterns: []
    },
    hexMap: {
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
    },
    filterBehavior: "Filter Change",
    filterIntro: "",
    openModal: !0,
    uid: "map1719592570286",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    version: "4.24.10",
    showEditorPanel: !0,
    dataKey: "2024-Data-Indicators-State-Diabetes-Profiles.csv"
  },
  legacySharedFilters: {
    type: "dashboardFilters",
    visualizationType: "dashboardFilters",
    sharedFilterIndexes: [
      0
    ],
    filterBehavior: "Filter Change",
    uid: "legacySharedFilters",
    autoLoad: !0,
    queuedActive: "foo",
    dataKey: "2024-Data-Indicators-State-Diabetes-Profiles.csv",
    dataDescription: {
      horizontal: !1,
      series: !1
    }
  }
}, ja = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Ja = {
  "2024-Data-Indicators-State-Diabetes-Profiles.csv": {
    data: [
      {
        stateName: "Alabama",
        stateAbbr: "AL",
        statepop: "5,074,296",
        diabetesprevalence: "614,915",
        diabetesIncidence: "39,000",
        funding: "1,100,000",
        Footnote: "2022 Data",
        prediabetesselfreport: "163,000",
        diabetesactionplan: "",
        DirectMedicalCostMillions: "6,479,000,000",
        MedicareCost_Millions: "2,634,000,000",
        medicaidCostMillions: "956,000,000",
        DP230020: "1,100,000",
        numdsmesPart: "9,265",
        accreddsmesproviders: "49",
        statemedicadeservices: "No",
        participantsndpp: "6,182",
        ndppproviders: "23",
        medicardpproviders: "7",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_AL.png"
      },
      {
        stateName: "Alaska",
        stateAbbr: "AK",
        statepop: "733,583",
        diabetesprevalence: "48,502",
        diabetesIncidence: "3,000",
        funding: "1,616,642",
        Footnote: "2022 Data",
        prediabetesselfreport: "66,000",
        diabetesactionplan: "https://health.alaska.gov/dph/Chronic/Documents/Diabetes/coalition/AKDiabetesCoalition_StrategicPlan_2020-25.pdf ",
        DirectMedicalCostMillions: "707,000,000",
        MedicareCost_Millions: "119,000,000",
        medicaidCostMillions: "151,000,000",
        DP230020: "850,000",
        numdsmesPart: "1,737",
        accreddsmesproviders: "6",
        statemedicadeservices: "No",
        participantsndpp: "1,726",
        ndppproviders: "7",
        medicardpproviders: "1",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_AK.png"
      },
      {
        stateName: "Arizona",
        stateAbbr: "AZ",
        statepop: "7,359,197",
        diabetesprevalence: "731,946",
        diabetesIncidence: "46,000",
        funding: "1,677,094",
        Footnote: "2020 Data",
        prediabetesselfreport: "631,000",
        diabetesactionplan: "https://azmemory.azlibrary.gov/nodes/view/271116",
        DirectMedicalCostMillions: "6,069,000,000",
        MedicareCost_Millions: "2,310,000,000",
        medicaidCostMillions: "1,465,000,000",
        DP230020: "1,100,000",
        numdsmesPart: "20,452",
        accreddsmesproviders: "34",
        statemedicadeservices: "^Yes",
        participantsndpp: "10,069",
        ndppproviders: "25",
        medicardpproviders: "2",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_AZ.png"
      },
      {
        stateName: "Arkansas",
        stateAbbr: "AR",
        statepop: "3,045,637",
        diabetesprevalence: "367,336",
        diabetesIncidence: "19,000",
        funding: "1,909,800",
        Footnote: "2017 Data",
        prediabetesselfreport: "145,000",
        diabetesactionplan: "",
        DirectMedicalCostMillions: "3,380,000,000",
        MedicareCost_Millions: "1,350,000,000",
        medicaidCostMillions: "812,000,000",
        DP230020: "1,900,000",
        numdsmesPart: "6,439",
        accreddsmesproviders: "27",
        statemedicadeservices: "^Yes",
        participantsndpp: "3,915",
        ndppproviders: "12",
        medicardpproviders: "2",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_AR.png"
      },
      {
        stateName: "California",
        stateAbbr: "CA",
        statepop: "39,029,342",
        diabetesprevalence: "3,520,486",
        diabetesIncidence: "247,000",
        funding: "5,610,355",
        Footnote: "2022 Data",
        prediabetesselfreport: "4,089,000",
        diabetesactionplan: "https://www.cdph.ca.gov/Programs/CCDPHP/DCDIC/CDCB/CDPH%20Document%20Library/DiabetesPrevActionPlan_FinalADA-07%2003%2018%20v2.pdf",
        DirectMedicalCostMillions: "43,431,000,000",
        MedicareCost_Millions: "13,441,000,000",
        medicaidCostMillions: "12,311,000,000",
        DP230020: "3,250,000",
        numdsmesPart: "91,149",
        accreddsmesproviders: "109",
        statemedicadeservices: "^Yes",
        participantsndpp: "131,303",
        ndppproviders: "117",
        medicardpproviders: "19",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_CA.png"
      },
      {
        stateName: "Colorado",
        stateAbbr: "CO",
        statepop: "5,839,926",
        diabetesprevalence: "377,340",
        diabetesIncidence: "26,000",
        funding: "1,241,988",
        Footnote: "2020 Data",
        prediabetesselfreport: "479,000",
        diabetesactionplan: "",
        DirectMedicalCostMillions: "3,393,000,000",
        MedicareCost_Millions: "1,132,000,000",
        medicaidCostMillions: "846,000,000",
        DP230020: "850,000",
        numdsmesPart: "10,631",
        accreddsmesproviders: "45",
        statemedicadeservices: "^Yes",
        participantsndpp: "25,740",
        ndppproviders: "26",
        medicardpproviders: "6",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_CO.png"
      },
      {
        stateName: "Connecticut",
        stateAbbr: "CT",
        statepop: "3,626,205",
        diabetesprevalence: "308,829",
        diabetesIncidence: "20,000",
        funding: "850,000",
        Footnote: "2022 Data",
        prediabetesselfreport: "296,000",
        diabetesactionplan: "https://portal.ct.gov/-/media/departments-and-agencies/dph/dph/aids_and_chronic/chronic_disease/pdf/dpcpplan81007pdf.pdf",
        DirectMedicalCostMillions: "5,063,000,000",
        MedicareCost_Millions: "1,347,000,000",
        medicaidCostMillions: "1,573,000,000",
        DP230020: "850,000",
        numdsmesPart: "9,967",
        accreddsmesproviders: "21",
        statemedicadeservices: "No",
        participantsndpp: "5,568",
        ndppproviders: "14",
        medicardpproviders: "1",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_CT.png"
      },
      {
        stateName: "Delaware",
        stateAbbr: "DE",
        statepop: "1,018,396",
        diabetesprevalence: "111,808",
        diabetesIncidence: "6,000",
        funding: "850,000",
        Footnote: "2022 Data",
        prediabetesselfreport: "93,000",
        diabetesactionplan: "https://dhss.delaware.gov/dph/dpc/files/diabetesburdenreports23.pdf",
        DirectMedicalCostMillions: "1,319,000,000",
        MedicareCost_Millions: "463,000,000",
        medicaidCostMillions: "242,000,000",
        DP230020: "850,000",
        numdsmesPart: "2,234",
        accreddsmesproviders: "7",
        statemedicadeservices: "No",
        participantsndpp: "4,508",
        ndppproviders: "8",
        medicardpproviders: "5",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_DE.png"
      },
      {
        stateName: "District of Columbia",
        stateAbbr: "DC",
        statepop: "671,803",
        diabetesprevalence: "44,101",
        diabetesIncidence: "3,000",
        funding: "2,587,500",
        Footnote: "2019 Data",
        prediabetesselfreport: "47,000",
        diabetesactionplan: "",
        DirectMedicalCostMillions: "851,000,000",
        MedicareCost_Millions: "185,000,000",
        medicaidCostMillions: "375,000,000",
        DP230020: "1,850,000",
        numdsmesPart: "2,548",
        accreddsmesproviders: "8",
        statemedicadeservices: "",
        participantsndpp: "1,045",
        ndppproviders: "7",
        medicardpproviders: "2",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_DC.png"
      },
      {
        stateName: "Florida",
        stateAbbr: "FL",
        statepop: "22,244,823",
        diabetesprevalence: "2,173,352",
        diabetesIncidence: "117,000",
        funding: "1,445,996",
        Footnote: "2020 Data",
        prediabetesselfreport: "1,276,000",
        diabetesactionplan: "https://www.floridahealth.gov/provider-and-partner-resources/dac/_documents/2023-dac-report.pdf",
        DirectMedicalCostMillions: "21,713,000,000",
        MedicareCost_Millions: "9,893,000,000",
        medicaidCostMillions: "1,967,000,000",
        DP230020: "1,250,000",
        numdsmesPart: "23,476",
        accreddsmesproviders: "95",
        statemedicadeservices: "No",
        participantsndpp: "56,410",
        ndppproviders: "56",
        medicardpproviders: "10",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_FL.png"
      },
      {
        stateName: "Georgia",
        stateAbbr: "GA",
        statepop: "10,912,876",
        diabetesprevalence: "1,017,106",
        diabetesIncidence: "70,000",
        funding: "26,105,531",
        Footnote: "2022 Data",
        prediabetesselfreport: "807,000",
        diabetesactionplan: "https://dph.georgia.gov/document/document/2020-diabetes-action-plan-updated-sept-2023/download",
        DirectMedicalCostMillions: "10,219,000,000",
        MedicareCost_Millions: "3,906,000,000",
        medicaidCostMillions: "1,413,000,000",
        DP230020: "1,250,000",
        numdsmesPart: "26,071",
        accreddsmesproviders: "65",
        statemedicadeservices: "No",
        participantsndpp: "24,979",
        ndppproviders: "62",
        medicardpproviders: "4",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_GA.png"
      },
      {
        stateName: "Hawaii",
        stateAbbr: "HI",
        statepop: "1,440,196",
        diabetesprevalence: "134,107",
        diabetesIncidence: "9,000",
        funding: "868,000",
        Footnote: "2022 Data",
        prediabetesselfreport: "171,000",
        diabetesactionplan: "https://hhsp.hawaii.gov/assets/pdf/HHSP_Diabetes_Plan_WEB.pdf",
        DirectMedicalCostMillions: "1,264,000,000",
        MedicareCost_Millions: "336,000,000",
        medicaidCostMillions: "302,000,000",
        DP230020: "850,000",
        numdsmesPart: "9,263",
        accreddsmesproviders: "17",
        statemedicadeservices: "^Yes",
        participantsndpp: "1,932",
        ndppproviders: "18",
        medicardpproviders: "9",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_HI.png"
      },
      {
        stateName: "Idaho",
        stateAbbr: "ID",
        statepop: "1,939,033",
        diabetesprevalence: "145,661",
        diabetesIncidence: "11,000",
        funding: "850,000",
        Footnote: "2021 Data",
        prediabetesselfreport: "114,000",
        diabetesactionplan: "",
        DirectMedicalCostMillions: "1,418,000,000",
        MedicareCost_Millions: "483,000,000",
        medicaidCostMillions: "334,000,000",
        DP230020: "850,000",
        numdsmesPart: "6,363",
        accreddsmesproviders: "22",
        statemedicadeservices: "Yes",
        participantsndpp: "4,207",
        ndppproviders: "12",
        medicardpproviders: "5",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_ID.png"
      },
      {
        stateName: "Illinois",
        stateAbbr: "IL",
        statepop: "12,582,032",
        diabetesprevalence: "1,185,651",
        diabetesIncidence: "76,000",
        funding: "7,961,990",
        Footnote: "2022 Data",
        prediabetesselfreport: "908,000",
        diabetesactionplan: "https://dph.illinois.gov/content/dam/soi/en/web/idph/files/publications/diabetes-action-plan-053018.pdf",
        DirectMedicalCostMillions: "13,939,000,000",
        MedicareCost_Millions: "4,699,000,000",
        medicaidCostMillions: "3,294,000,000",
        DP230020: "6,625,000",
        numdsmesPart: "54,008",
        accreddsmesproviders: "83",
        statemedicadeservices: "No",
        participantsndpp: "13,033",
        ndppproviders: "48",
        medicardpproviders: "6",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_IL.png"
      },
      {
        stateName: "Indiana",
        stateAbbr: "IN",
        statepop: "6,833,037",
        diabetesprevalence: "666,375",
        diabetesIncidence: "37,000",
        funding: "1,402,995",
        Footnote: "2022 Data",
        prediabetesselfreport: "550,000",
        diabetesactionplan: "https://www.in.gov/health/cdpc/files/update-ids-plan.pdf",
        DirectMedicalCostMillions: "8,146,000,000",
        MedicareCost_Millions: "2,833,000,000",
        medicaidCostMillions: "1,889,000,000",
        DP230020: "1,100,000",
        numdsmesPart: "23,303",
        accreddsmesproviders: "55",
        statemedicadeservices: "Yes",
        participantsndpp: "16,317",
        ndppproviders: "33",
        medicardpproviders: "6",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_IN.png"
      },
      {
        stateName: "Iowa",
        stateAbbr: "IA",
        statepop: "3,200,517",
        diabetesprevalence: "287,477",
        diabetesIncidence: "19,000",
        funding: "850,000",
        Footnote: "2022 Data",
        prediabetesselfreport: "195,000",
        diabetesactionplan: "",
        DirectMedicalCostMillions: "3,174,000,000",
        MedicareCost_Millions: "988,000,000",
        medicaidCostMillions: "767,000,000",
        DP230020: "850,000",
        numdsmesPart: "15,510",
        accreddsmesproviders: "52",
        statemedicadeservices: "Yes",
        participantsndpp: "4,787",
        ndppproviders: "24",
        medicardpproviders: "8",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_IA.png"
      },
      {
        stateName: "Kansas",
        stateAbbr: "KS",
        statepop: "2,937,150",
        diabetesprevalence: "256,529",
        diabetesIncidence: "17,000",
        funding: "904,000",
        Footnote: "2022 Data",
        prediabetesselfreport: "231,000",
        diabetesactionplan: "https://www.kdhe.ks.gov/DocumentCenter/View/33926/2024-Diabetes-Report-PDF?bidId=",
        DirectMedicalCostMillions: "2,863,000,000",
        MedicareCost_Millions: "1,018,000,000",
        medicaidCostMillions: "384,000,000",
        DP230020: "850,000",
        numdsmesPart: "8,121",
        accreddsmesproviders: "31",
        statemedicadeservices: "No",
        participantsndpp: "9,891",
        ndppproviders: "19",
        medicardpproviders: "4",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_KS.png"
      },
      {
        stateName: "Kentucky",
        stateAbbr: "KY",
        statepop: "4,512,310",
        diabetesprevalence: "519,092",
        diabetesIncidence: "40,000",
        funding: "1,000,000",
        Footnote: "2022 Data",
        prediabetesselfreport: "349,000",
        diabetesactionplan: "https://www.chfs.ky.gov/agencies/dph/dpqi/cdpb/dpcp/2023%20Diabetes%20Report%20(1).pdf",
        DirectMedicalCostMillions: "6,368,000,000",
        MedicareCost_Millions: "1,979,000,000",
        medicaidCostMillions: "2,073,000,000",
        DP230020: "1,000,000",
        numdsmesPart: "10,253",
        accreddsmesproviders: "31",
        statemedicadeservices: "No",
        participantsndpp: "21,148",
        ndppproviders: "32",
        medicardpproviders: "6",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_KY.png"
      },
      {
        stateName: "Louisiana",
        stateAbbr: "LA",
        statepop: "4,590,241",
        diabetesprevalence: "520,485",
        diabetesIncidence: "33,000",
        funding: "1,505,000",
        Footnote: "2017 Data",
        prediabetesselfreport: "278,000",
        diabetesactionplan: "https://ldh.la.gov/assets/docs/BayouHealth/ACT210201742018.pdf",
        DirectMedicalCostMillions: "6,233,000,000",
        MedicareCost_Millions: "2,068,000,000",
        medicaidCostMillions: "1,404,000,000",
        DP230020: "1,100,000",
        numdsmesPart: "20,709",
        accreddsmesproviders: "41",
        statemedicadeservices: "Yes",
        participantsndpp: "9,555",
        ndppproviders: "25",
        medicardpproviders: "1",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_LA.png"
      },
      {
        stateName: "Maine",
        stateAbbr: "ME",
        statepop: "1,385,340",
        diabetesprevalence: "124,840",
        diabetesIncidence: "8,000",
        funding: "850,000",
        Footnote: "2022 Data",
        prediabetesselfreport: "113,000",
        diabetesactionplan: "https://www.maine.gov/dhhs/mecdc/population-health/dcp/documents/MCVH&DMStrategicPlan_2011-2020.pdf",
        DirectMedicalCostMillions: "1,682,000,000",
        MedicareCost_Millions: "549,000,000",
        medicaidCostMillions: "489,000,000",
        DP230020: "850,000",
        numdsmesPart: "5,402",
        accreddsmesproviders: "20",
        statemedicadeservices: "Yes",
        participantsndpp: "6,536",
        ndppproviders: "17",
        medicardpproviders: "1",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_ME.png"
      },
      {
        stateName: "Maryland",
        stateAbbr: "MD",
        statepop: "6,164,660",
        diabetesprevalence: "578,446",
        diabetesIncidence: "35,000",
        funding: "3,222,500",
        Footnote: "2022 Data",
        prediabetesselfreport: "641,000",
        diabetesactionplan: "https://health.maryland.gov/phpa/ccdpc/Documents/Diabetes%20Action%20Plan%20documents/Diabetes%20Action%20Plan%20June%201%202020.pdf",
        DirectMedicalCostMillions: "7,027,000,000",
        MedicareCost_Millions: "2,375,000,000",
        medicaidCostMillions: "1,277,000,000",
        DP230020: "3,000,000",
        numdsmesPart: "10,999",
        accreddsmesproviders: "31",
        statemedicadeservices: "Yes",
        participantsndpp: "15,640",
        ndppproviders: "88",
        medicardpproviders: "11",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_MD.png"
      },
      {
        stateName: "Massachusetts",
        stateAbbr: "MA",
        statepop: "6,981,974",
        diabetesprevalence: "592,507",
        diabetesIncidence: "30,000",
        funding: "2,045,000",
        Footnote: "2022 Data",
        prediabetesselfreport: "581,000",
        diabetesactionplan: "",
        DirectMedicalCostMillions: "8,225,000,000",
        MedicareCost_Millions: "2,762,000,000",
        medicaidCostMillions: "2,415,000,000",
        DP230020: "2,000,000",
        numdsmesPart: "30,510",
        accreddsmesproviders: "46",
        statemedicadeservices: "Yes",
        participantsndpp: "6,887",
        ndppproviders: "20",
        medicardpproviders: "2",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_MA.png"
      },
      {
        stateName: "Michigan",
        stateAbbr: "MI",
        statepop: "10,034,113",
        diabetesprevalence: "923,377",
        diabetesIncidence: "51,000",
        funding: "6,472,670",
        Footnote: "2022 Data",
        prediabetesselfreport: "818,000",
        diabetesactionplan: "https://midiabetesprevention.org/documents/Diabetes-Improvement-Plan-2021-2025.pdf",
        DirectMedicalCostMillions: "10,782,000,000",
        MedicareCost_Millions: "4,246,000,000",
        medicaidCostMillions: "1,848,000,000",
        DP230020: "5,750,000",
        numdsmesPart: "31,818",
        accreddsmesproviders: "66",
        statemedicadeservices: "^Yes",
        participantsndpp: "30,528",
        ndppproviders: "35",
        medicardpproviders: "7",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_MI.png"
      },
      {
        stateName: "Minnesota",
        stateAbbr: "MN",
        statepop: "5,717,184",
        diabetesprevalence: "451,984",
        diabetesIncidence: "29,000",
        funding: "3,395,000",
        Footnote: "2022 Data",
        prediabetesselfreport: "374,000",
        diabetesactionplan: "https://www.health.state.mn.us/diseases/chronic/docs/mn2035plan.pdf",
        DirectMedicalCostMillions: "5,512,000,000",
        MedicareCost_Millions: "1,655,000,000",
        medicaidCostMillions: "1,441,000,000",
        DP230020: "3,350,000",
        numdsmesPart: "38,984",
        accreddsmesproviders: "47",
        statemedicadeservices: "Yes",
        participantsndpp: "31,322",
        ndppproviders: "31",
        medicardpproviders: "11",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_MN.png"
      },
      {
        stateName: "Mississippi",
        stateAbbr: "MS",
        statepop: "2,940,057",
        diabetesprevalence: "346,880",
        diabetesIncidence: "21,000",
        funding: "1,912,000",
        Footnote: "2021 Data",
        prediabetesselfreport: "207,000",
        diabetesactionplan: "https://msdh.ms.gov/page/resources/7612.pdf",
        DirectMedicalCostMillions: "3,954,000,000",
        MedicareCost_Millions: "1,685,000,000",
        medicaidCostMillions: "687,000,000",
        DP230020: "1,900,000",
        numdsmesPart: "12,347",
        accreddsmesproviders: "22",
        statemedicadeservices: "Yes",
        participantsndpp: "3,663",
        ndppproviders: "25",
        medicardpproviders: "3",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_MS.png"
      },
      {
        stateName: "Missouri",
        stateAbbr: "MO",
        statepop: "6,177,957",
        diabetesprevalence: "563,658",
        diabetesIncidence: "31,000",
        funding: "1,000,000",
        Footnote: "2022 Data",
        prediabetesselfreport: "457,000",
        diabetesactionplan: "https://health.mo.gov/living/healthcondiseases/chronic/diabetes/pdf/missouri-diabetes-report.pdf",
        DirectMedicalCostMillions: "6,962,000,000",
        MedicareCost_Millions: "2,575,000,000",
        medicaidCostMillions: "1,364,000,000",
        DP230020: "1,000,000",
        numdsmesPart: "15,685",
        accreddsmesproviders: "65",
        statemedicadeservices: "^Yes",
        participantsndpp: "20,709",
        ndppproviders: "20",
        medicardpproviders: "5",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_MO.png"
      },
      {
        stateName: "Montana",
        stateAbbr: "MT",
        statepop: "1,122,867",
        diabetesprevalence: "74,364",
        diabetesIncidence: "6,000",
        funding: "1,164,532",
        Footnote: "2020 Data",
        prediabetesselfreport: "64,000",
        diabetesactionplan: "",
        DirectMedicalCostMillions: "882,000,000",
        MedicareCost_Millions: "284,000,000",
        medicaidCostMillions: "145,000,000",
        DP230020: "850,000",
        numdsmesPart: "7,725",
        accreddsmesproviders: "23",
        statemedicadeservices: "^Yes",
        participantsndpp: "5,808",
        ndppproviders: "31",
        medicardpproviders: "5",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_MT.png"
      },
      {
        stateName: "Nebraska",
        stateAbbr: "NE",
        statepop: "1,967,923",
        diabetesprevalence: "161,508",
        diabetesIncidence: "10,000",
        funding: "881,555",
        Footnote: "2022 Data",
        prediabetesselfreport: "121,000",
        diabetesactionplan: "https://chronicdisease.org/resource/resmgr/diabetes_dpp_materials/ne_diab_action_plan.pdf",
        DirectMedicalCostMillions: "1,837,000,000",
        MedicareCost_Millions: "618,000,000",
        medicaidCostMillions: "267,000,000",
        DP230020: "850,000",
        numdsmesPart: "7,380",
        accreddsmesproviders: "20",
        statemedicadeservices: "No",
        participantsndpp: "4,908",
        ndppproviders: "26",
        medicardpproviders: "1",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_NE.png"
      },
      {
        stateName: "Nevada",
        stateAbbr: "NV",
        statepop: "3,177,772",
        diabetesprevalence: "250,894",
        diabetesIncidence: "12,000",
        funding: "1,231,029",
        Footnote: "2022 Data",
        prediabetesselfreport: "299,000",
        diabetesactionplan: "",
        DirectMedicalCostMillions: "2,693,000,000",
        MedicareCost_Millions: "1,081,000,000",
        medicaidCostMillions: "505,000,000",
        DP230020: "900,000",
        numdsmesPart: "3,366",
        accreddsmesproviders: "13",
        statemedicadeservices: "^Yes",
        participantsndpp: "2,882",
        ndppproviders: "8",
        medicardpproviders: "1",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_NV.png"
      },
      {
        stateName: "New Hampshire",
        stateAbbr: "NH",
        statepop: "1,395,231",
        diabetesprevalence: "111,268",
        diabetesIncidence: "5,000",
        funding: "1,372,995",
        Footnote: "2022 Data",
        prediabetesselfreport: "114,000",
        diabetesactionplan: "",
        DirectMedicalCostMillions: "1,389,000,000",
        MedicareCost_Millions: "422,000,000",
        medicaidCostMillions: "237,000,000",
        DP230020: "850,000",
        numdsmesPart: "11,457",
        accreddsmesproviders: "18",
        statemedicadeservices: "No",
        participantsndpp: "6,395",
        ndppproviders: "7",
        medicardpproviders: "3",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_NH.png"
      },
      {
        stateName: "New Jersey",
        stateAbbr: "NJ",
        statepop: "9,261,699",
        diabetesprevalence: "792,367",
        diabetesIncidence: "56,000",
        funding: "1,300,000",
        Footnote: "2020 Data ",
        prediabetesselfreport: "692,000",
        diabetesactionplan: "https://www.nj.gov/health/fhs/chronic/documents/17-Diabetes%20Action%20Plan_2.0.pdf",
        DirectMedicalCostMillions: "10,661,000,000",
        MedicareCost_Millions: "3,764,000,000",
        medicaidCostMillions: "2,384,000,000",
        DP230020: "1,200,000",
        numdsmesPart: "19,366",
        accreddsmesproviders: "44",
        statemedicadeservices: "^Yes",
        participantsndpp: "5,804",
        ndppproviders: "20",
        medicardpproviders: "2",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_NJ.png"
      },
      {
        stateName: "New Mexico",
        stateAbbr: "NM",
        statepop: "2,113,344",
        diabetesprevalence: "207,611",
        diabetesIncidence: "15,000",
        funding: "3,382,655",
        Footnote: "2022 Data",
        prediabetesselfreport: "202,000",
        diabetesactionplan: "https://www.nmhealth.org/publication/view/marketing/5595/#:~:text=The%20New%20Mexico%20Diabetes%20Prevention%20Action%20Plan%20is%20an%20action,%2C%20Referrals%2C%20Education%20and%20Access.",
        DirectMedicalCostMillions: "2,245,000,000",
        MedicareCost_Millions: "666,000,000",
        medicaidCostMillions: "717,000,000",
        DP230020: "2,850,000",
        numdsmesPart: "5,128",
        accreddsmesproviders: "16",
        statemedicadeservices: "^Yes",
        participantsndpp: "2,600",
        ndppproviders: "9",
        medicardpproviders: "0",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_NM.png"
      },
      {
        stateName: "New York",
        stateAbbr: "NY",
        statepop: "19,677,151",
        diabetesprevalence: "1,779,211",
        diabetesIncidence: "127,000",
        funding: "2,795,995",
        Footnote: "2022 Data",
        prediabetesselfreport: "1,783,000",
        diabetesactionplan: "",
        DirectMedicalCostMillions: "29,991,000,000",
        MedicareCost_Millions: "8,099,000,000",
        medicaidCostMillions: "10,893,000,000",
        DP230020: "2,250,000",
        numdsmesPart: "65,976",
        accreddsmesproviders: "116",
        statemedicadeservices: "Yes",
        participantsndpp: "23,794",
        ndppproviders: "89",
        medicardpproviders: "20",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_NY.png"
      },
      {
        stateName: "North Carolina",
        stateAbbr: "NC",
        statepop: "10,698,973",
        diabetesprevalence: "1,011,751",
        diabetesIncidence: "54,000",
        funding: "2,093,000",
        Footnote: "2021 Data ",
        prediabetesselfreport: "719,000",
        diabetesactionplan: "https://www.ncdhhs.gov/sl-2017-57-section-11e5b-minority-health-diabetes-prevention-program/open",
        DirectMedicalCostMillions: "11,614,000,000",
        MedicareCost_Millions: "4,562,000,000",
        medicaidCostMillions: "2,124,000,000",
        DP230020: "1,250,000",
        numdsmesPart: "35,223",
        accreddsmesproviders: "73",
        statemedicadeservices: "^Yes",
        participantsndpp: "23,305",
        ndppproviders: "67",
        medicardpproviders: "7",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_NC.png"
      },
      {
        stateName: "North Dakota",
        stateAbbr: "ND",
        statepop: "779,261",
        diabetesprevalence: "57,287",
        diabetesIncidence: "3,000",
        funding: "1,096,670",
        Footnote: "2022 Data",
        prediabetesselfreport: "50,000",
        diabetesactionplan: "https://ndlegis.gov/sites/default/files/committees/68-2023/25.5108.02000presentation1025.pdf",
        DirectMedicalCostMillions: "799,000,000",
        MedicareCost_Millions: "226,000,000",
        medicaidCostMillions: "177,000,000",
        DP230020: "850,000",
        numdsmesPart: "10,620",
        accreddsmesproviders: "16",
        statemedicadeservices: "^Yes",
        participantsndpp: "2,440",
        ndppproviders: "13",
        medicardpproviders: "3",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_ND.png"
      },
      {
        stateName: "Ohio",
        stateAbbr: "OH",
        statepop: "11,756,058",
        diabetesprevalence: "1,203,587",
        diabetesIncidence: "81,000",
        funding: "1,350,000",
        Footnote: "2022 Data",
        prediabetesselfreport: "937,000",
        diabetesactionplan: "https://odh.ohio.gov/wps/wcm/connect/gov/fc94c68d-86d0-4174-9a8a-58871c1ace9d/2021+DAP_FINAL.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE.Z18_K9I401S01H7F40QBNJU3SO1F56-fc94c68d-86d0-4174-9a8a-58871c1ace9d-oynp5sh",
        DirectMedicalCostMillions: "14,957,000,000",
        MedicareCost_Millions: "5,469,000,000",
        medicaidCostMillions: "3,689,000,000",
        DP230020: "1,250,000",
        numdsmesPart: "29,211",
        accreddsmesproviders: "79",
        statemedicadeservices: "No",
        participantsndpp: "28,928",
        ndppproviders: "27",
        medicardpproviders: "8",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_OH.png"
      },
      {
        stateName: "Oklahoma",
        stateAbbr: "OK",
        statepop: "4,019,800",
        diabetesprevalence: "405,756",
        diabetesIncidence: "26,000",
        funding: "1,619,325",
        Footnote: "2020 Data",
        prediabetesselfreport: "289,000",
        diabetesactionplan: "https://oklahoma.gov/content/dam/ok/en/health/health2/aem-documents/health-promotion/center-for-chronic-disease-prevention---health-promotion/2023%20Oklahoma%20Diabetes%20Prevention%20Report.pdf",
        DirectMedicalCostMillions: "4,499,000,000",
        MedicareCost_Millions: "1,698,000,000",
        medicaidCostMillions: "627,000,000",
        DP230020: "1,000,000",
        numdsmesPart: "7,009",
        accreddsmesproviders: "41",
        statemedicadeservices: "No",
        participantsndpp: "6,901",
        ndppproviders: "25",
        medicardpproviders: "10",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_OK.png"
      },
      {
        stateName: "Oregon",
        stateAbbr: "OR",
        statepop: "4,240,137",
        diabetesprevalence: "354,430",
        diabetesIncidence: "24,000",
        funding: "2,081,985",
        Footnote: "2022 Data",
        prediabetesselfreport: "357,000",
        diabetesactionplan: "https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/CHRONICDISEASE/DIABETES/Documents/OregonDiabetesReport.pdf",
        DirectMedicalCostMillions: "3,776,000,000",
        MedicareCost_Millions: "1,115,000,000",
        medicaidCostMillions: "1,151,000,000",
        DP230020: "850,000",
        numdsmesPart: "19,928",
        accreddsmesproviders: "23",
        statemedicadeservices: "No",
        participantsndpp: "14,481",
        ndppproviders: "26",
        medicardpproviders: "8",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_OR.png"
      },
      {
        stateName: "Pennsylvania",
        stateAbbr: "PA",
        statepop: "12,972,008",
        diabetesprevalence: "1,182,955",
        diabetesIncidence: "91,000",
        funding: "2,679,816",
        Footnote: "2022 Data",
        prediabetesselfreport: "851,000",
        diabetesactionplan: "http://jsg.legis.state.pa.us/resources/documents/ftp/publications/2023-09-13%20Diabetes%20Web%209.13.23%20.pdf",
        DirectMedicalCostMillions: "16,153,000,000",
        MedicareCost_Millions: "5,881,000,000",
        medicaidCostMillions: "3,920,000,000",
        DP230020: "2,153,991",
        numdsmesPart: "56,179",
        accreddsmesproviders: "89",
        statemedicadeservices: "^Yes",
        participantsndpp: "20,631",
        ndppproviders: "77",
        medicardpproviders: "16",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_PA.png"
      },
      {
        stateName: "Rhode Island",
        stateAbbr: "RI",
        statepop: "1,093,734",
        diabetesprevalence: "102,499",
        diabetesIncidence: "7,000",
        funding: "974,000",
        Footnote: "2017 Data ",
        prediabetesselfreport: "59,000",
        diabetesactionplan: "https://health.ri.gov/publications/stateplans/2010-2015Diabetes.pdf",
        DirectMedicalCostMillions: "1,317,000,000",
        MedicareCost_Millions: "394,000,000",
        medicaidCostMillions: "346,000,000",
        DP230020: "850,000",
        numdsmesPart: "777",
        accreddsmesproviders: "7",
        statemedicadeservices: "No",
        participantsndpp: "2,818",
        ndppproviders: "5",
        medicardpproviders: "1",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_RI.png"
      },
      {
        stateName: "South Carolina",
        stateAbbr: "SC",
        statepop: "5,282,634",
        diabetesprevalence: "533,278",
        diabetesIncidence: "33,000",
        funding: "2,438,920",
        Footnote: "2022 Data",
        prediabetesselfreport: "407,000",
        diabetesactionplan: "",
        DirectMedicalCostMillions: "5,639,000,000",
        MedicareCost_Millions: "2,262,000,000",
        medicaidCostMillions: "817,000,000",
        DP230020: "2,100,000",
        numdsmesPart: "15,890",
        accreddsmesproviders: "35",
        statemedicadeservices: "^Yes",
        participantsndpp: "10,912",
        ndppproviders: "34",
        medicardpproviders: "7",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_SC.png"
      },
      {
        stateName: "South Dakota",
        stateAbbr: "SD",
        statepop: "909,824",
        diabetesprevalence: "62,172",
        diabetesIncidence: "4,000",
        funding: "1,143,532",
        Footnote: "2021 Data",
        prediabetesselfreport: "49,000",
        diabetesactionplan: "https://doh.sd.gov/media/ppfehegn/diabetes_state-strategic-plan.pdf",
        DirectMedicalCostMillions: "982,000,000",
        MedicareCost_Millions: "270,000,000",
        medicaidCostMillions: "122,000,000",
        DP230020: "850,000",
        numdsmesPart: "4,505",
        accreddsmesproviders: "13",
        statemedicadeservices: "Yes",
        participantsndpp: "1,925",
        ndppproviders: "6",
        medicardpproviders: "1",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_SD.png"
      },
      {
        stateName: "Tennessee",
        stateAbbr: "TN",
        statepop: "7,051,339",
        diabetesprevalence: "813,418",
        diabetesIncidence: "49,000",
        funding: "1,648,045",
        Footnote: "2019 Data ",
        prediabetesselfreport: "409,000",
        diabetesactionplan: "https://www.tn.gov/content/dam/tn/health/program-areas/Diabetes-Legislative-Report-2023.pdf",
        DirectMedicalCostMillions: "7,998,000,000",
        MedicareCost_Millions: "3,211,000,000",
        medicaidCostMillions: "1,326,000,000",
        DP230020: "1,200,000",
        numdsmesPart: "13,675",
        accreddsmesproviders: "42",
        statemedicadeservices: "Yes",
        participantsndpp: "13,355",
        ndppproviders: "27",
        medicardpproviders: "4",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_TN.png"
      },
      {
        stateName: "Texas",
        stateAbbr: "TX",
        statepop: "30,029,572",
        diabetesprevalence: "3,127,767",
        diabetesIncidence: "230,000",
        funding: "3,250,000",
        Footnote: "2021 Data",
        prediabetesselfreport: "1,956,000",
        diabetesactionplan: "https://www.dshs.texas.gov/sites/default/files/legislative/2023-Reports/Texas_Diabetes_Council_2023_State_Plan_to_Prevent%20and_Treat_Diabetes_and_Obesity_Report.pdf",
        DirectMedicalCostMillions: "26,935,000,000",
        MedicareCost_Millions: "10,328,000,000",
        medicaidCostMillions: "5,306,000,000",
        DP230020: "3,250,000",
        numdsmesPart: "48,119",
        accreddsmesproviders: "126",
        statemedicadeservices: "^Yes",
        participantsndpp: "31,013",
        ndppproviders: "68",
        medicardpproviders: "11",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_TX.png"
      },
      {
        stateName: "Utah",
        stateAbbr: "UT",
        statepop: "3,380,800",
        diabetesprevalence: "214,693",
        diabetesIncidence: "14,000",
        funding: "951,008",
        Footnote: "2020 Data ",
        prediabetesselfreport: "210,000",
        diabetesactionplan: "https://heal.utah.gov/wp-content/uploads/2021/11/UDP_Strategic_Plan_v2018FINAL.pdf",
        DirectMedicalCostMillions: "1,808,000,000",
        MedicareCost_Millions: "613,000,000",
        medicaidCostMillions: "242,000,000",
        DP230020: "850,000",
        numdsmesPart: "9,061",
        accreddsmesproviders: "22",
        statemedicadeservices: "Yes",
        participantsndpp: "8,654",
        ndppproviders: "18",
        medicardpproviders: "5",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_UT.png"
      },
      {
        stateName: "Vermont",
        stateAbbr: "VT",
        statepop: "647,064",
        diabetesprevalence: "44,599",
        diabetesIncidence: "3,000",
        funding: "906,720",
        Footnote: "2021 Data",
        prediabetesselfreport: "41,000",
        diabetesactionplan: "",
        DirectMedicalCostMillions: "680,000,000",
        MedicareCost_Millions: "211,000,000",
        medicaidCostMillions: "156,000,000",
        DP230020: "850,000",
        numdsmesPart: "1,003",
        accreddsmesproviders: "6",
        statemedicadeservices: "Yes",
        participantsndpp: "2,198",
        ndppproviders: "2",
        medicardpproviders: "0",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_VT.png"
      },
      {
        stateName: "Virginia",
        stateAbbr: "VA",
        statepop: "8,683,619",
        diabetesprevalence: "870,524",
        diabetesIncidence: "52,000",
        funding: "4,645,000",
        Footnote: "2021 Data",
        prediabetesselfreport: "704,000",
        diabetesactionplan: "https://www.vdh.virginia.gov/content/uploads/sites/25/2017/03/DiabetesStrategicPlan2017WEB.pdf",
        DirectMedicalCostMillions: "8,675,000,000",
        MedicareCost_Millions: "2,810,000,000",
        medicaidCostMillions: "1,366,000,000",
        DP230020: "4,600,000",
        numdsmesPart: "18,584",
        accreddsmesproviders: "40",
        statemedicadeservices: "No",
        participantsndpp: "16,749",
        ndppproviders: "33",
        medicardpproviders: "4",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_VA.png"
      },
      {
        stateName: "Washington",
        stateAbbr: "WA",
        statepop: "7,785,786",
        diabetesprevalence: "595,825",
        diabetesIncidence: "41,000",
        funding: "2,588,477",
        Footnote: "2021 Data",
        prediabetesselfreport: "597,000",
        diabetesactionplan: "https://doh.wa.gov/sites/default/files/2024-01/140255-DiabetesEpidemicActionReport-20240124.pdf",
        DirectMedicalCostMillions: "6,672,000,000",
        MedicareCost_Millions: "1,916,000,000",
        medicaidCostMillions: "2,128,000,000",
        DP230020: "2,000,000",
        numdsmesPart: "31,607",
        accreddsmesproviders: "46",
        statemedicadeservices: "Yes",
        participantsndpp: "26,897",
        ndppproviders: "18",
        medicardpproviders: "4",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_WA.png"
      },
      {
        stateName: "West Virginia",
        stateAbbr: "WV",
        statepop: "1,775,156",
        diabetesprevalence: "247,721",
        diabetesIncidence: "14,000",
        funding: "1,269,795",
        Footnote: "2022 Data",
        prediabetesselfreport: "148,000",
        diabetesactionplan: "https://dhhr.wv.gov/hpcd/data_reports/Documents/2020%20Diabetes%20Action%20Plan.pdf",
        DirectMedicalCostMillions: "3,160,000,000",
        MedicareCost_Millions: "1,129,000,000",
        medicaidCostMillions: "711,000,000",
        DP230020: "850,000",
        numdsmesPart: "4,028",
        accreddsmesproviders: "22",
        statemedicadeservices: "^Yes",
        participantsndpp: "2,893",
        ndppproviders: "12",
        medicardpproviders: "5",
        statemedicaidcoverndpp: "No",
        stateImage: "circle_WV.png"
      },
      {
        stateName: "Wisconsin",
        stateAbbr: "WI",
        statepop: "5,892,539",
        diabetesprevalence: "477,705",
        diabetesIncidence: "28,000",
        funding: "1,437,100",
        Footnote: "2022 Data",
        prediabetesselfreport: "470,000",
        diabetesactionplan: "https://www.dhs.wisconsin.gov/publications/p03154-2024.pdf",
        DirectMedicalCostMillions: "5,722,000,000",
        MedicareCost_Millions: "1,732,000,000",
        medicaidCostMillions: "1,233,000,000",
        DP230020: "900,000",
        numdsmesPart: "55,717",
        accreddsmesproviders: "53",
        statemedicadeservices: "No",
        participantsndpp: "10,459",
        ndppproviders: "38",
        medicardpproviders: "14",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_WI.png"
      },
      {
        stateName: "Wyoming",
        stateAbbr: "WY",
        statepop: "581,381",
        diabetesprevalence: "41,990",
        diabetesIncidence: "3,000",
        funding: "850,000",
        Footnote: "2022 Data",
        prediabetesselfreport: "38,000",
        diabetesactionplan: "",
        DirectMedicalCostMillions: "489,000,000",
        MedicareCost_Millions: "151,000,000",
        medicaidCostMillions: "69,000,000",
        DP230020: "850,000",
        numdsmesPart: "1,477",
        accreddsmesproviders: "12",
        statemedicadeservices: "^Yes",
        participantsndpp: "752",
        ndppproviders: "12",
        medicardpproviders: "2",
        statemedicaidcoverndpp: "Yes",
        stateImage: "circle_WY.png"
      }
    ],
    dataFileSize: 13207,
    dataFileName: "2024-Data-Indicators-State-Diabetes-Profiles.csv",
    dataFileSourceType: "file",
    dataFileFormat: "CSV",
    preview: !0
  }
}, Qa = "dashboard", Za = "4.24.10", Xa = 1722892504686, et = "New Dashboard 1", at = 0, tt = {}, ot = {
  dashboard: Ga,
  rows: Ka,
  visualizations: $a,
  table: ja,
  datasets: Ja,
  type: Qa,
  version: Za,
  uuid: Xa,
  label: et,
  activeDashboard: at,
  runtime: tt
}, nt = {
  theme: "theme-blue",
  filters: [
    {
      values: [
        "Alaska",
        "Alabama",
        "Arkansas",
        "American Samoa",
        "Arizona"
      ],
      active: "Alaska",
      columnName: "Location"
    },
    {
      values: [
        "2019",
        "2020",
        "2021"
      ],
      active: "2019",
      columnName: "Year"
    }
  ],
  title: "Amount for Location by Year",
  description: ""
}, it = [
  [
    {
      width: 6,
      widget: "chart1628879269005"
    },
    {
      width: 6,
      widget: "chart1628887518869"
    },
    {
      width: null
    }
  ],
  [
    {
      width: 4,
      widget: "data-bite1628879637400"
    },
    {
      width: 4,
      widget: "data-bite1628879640606"
    },
    {
      width: 4,
      widget: "data-bite1628879641924"
    }
  ]
], rt = {
  chart1628879269005: {
    type: "chart",
    title: "",
    theme: "theme-blue",
    fontSize: "medium",
    height: "250",
    padding: {
      left: 5,
      right: 5
    },
    yAxis: {
      size: 50,
      gridLines: !1,
      numTicks: "4"
    },
    barThickness: 0.35,
    xAxis: {
      size: "25",
      tickRotation: 0,
      dataKey: "Type"
    },
    table: {
      label: "Data Table",
      expanded: !0,
      show: !1
    },
    legend: {
      behavior: "isolate",
      position: "right",
      hide: !0
    },
    palette: "qualitative-bold",
    labels: !0,
    dataFormat: {},
    confidenceKeys: {},
    uid: "chart1628879269005",
    visualizationType: "Bar",
    data: [
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Federal",
        Amount: "1377"
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Local",
        Amount: "1613"
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "State",
        Amount: "1495"
      }
    ],
    series: [
      {
        dataKey: "Amount",
        type: "Bar"
      }
    ]
  },
  "data-bite1628879637400": {
    type: "data-bite",
    data: [
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Federal",
        Amount: "1377"
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Local",
        Amount: "1613"
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "State",
        Amount: "1495"
      }
    ],
    dataBite: "",
    dataFunction: "Sum",
    dataColumn: "Amount",
    bitePosition: "Left",
    biteFontSize: 24,
    fontSize: "medium",
    imageUrl: "",
    biteBody: `<span style="font-size: 20px;">Annual Total</span> <br>Reflects the Sum of the Amounts within the year selected in the dashboard level filters. 
 This number is calculated within the Data Bite module.
`,
    prefix: "",
    suffix: "",
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: ""
    },
    biteStyle: "graphic",
    filters: [],
    subtext: "",
    title: "",
    theme: "theme-blue",
    shadow: !1,
    uid: "data-bite1628879637400",
    visualizationType: "data-bite"
  },
  "data-bite1628879640606": {
    type: "data-bite",
    data: [
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Federal",
        Amount: "1377"
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Local",
        Amount: "1613"
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "State",
        Amount: "1495"
      }
    ],
    dataBite: "",
    dataFunction: "Mean (Average)",
    dataColumn: "Amount",
    bitePosition: "Left",
    biteFontSize: "22",
    fontSize: "medium",
    imageUrl: "",
    biteBody: `<span style="font-size: 20px;">Average Amount</span> <br>Reflects the average of the amounts within the year selected in the dashboard level filters. 
This number is calculated within the Data Bite module.
`,
    prefix: "",
    suffix: "",
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: ""
    },
    biteStyle: "graphic",
    filters: [],
    subtext: "",
    title: "",
    theme: "theme-orange",
    shadow: !1,
    uid: "data-bite1628879640606",
    visualizationType: "data-bite"
  },
  "data-bite1628879641924": {
    type: "data-bite",
    data: [
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Federal",
        Amount: "1377"
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Local",
        Amount: "1613"
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "State",
        Amount: "1495"
      }
    ],
    dataBite: "",
    dataFunction: "Max",
    dataColumn: "Amount",
    bitePosition: "Left",
    biteFontSize: 24,
    fontSize: "medium",
    imageUrl: "",
    biteBody: `<span style="font-size: 20px;">Highest Amount</span> <br>Reflects the highest of the Amounts within the year selected in the dashboard level filters. 
This number is calculated within the Data Bite module.
`,
    prefix: "",
    suffix: "",
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: ""
    },
    biteStyle: "graphic",
    filters: [],
    subtext: "",
    title: "",
    theme: "theme-blue",
    shadow: !1,
    uid: "data-bite1628879641924",
    visualizationType: "data-bite"
  },
  chart1628887518869: {
    type: "chart",
    title: "",
    theme: "theme-blue",
    fontSize: "medium",
    height: "250",
    padding: {
      left: 5,
      right: 5
    },
    yAxis: {
      size: 50,
      gridLines: !1,
      numTicks: "4"
    },
    barThickness: 0.35,
    xAxis: {
      size: "25",
      tickRotation: 0,
      dataKey: "Type"
    },
    table: {
      label: "Data Table",
      expanded: !0,
      show: !1
    },
    legend: {
      behavior: "isolate",
      position: "right",
      hide: !0
    },
    palette: "qualitative-bold",
    labels: !1,
    dataFormat: {},
    confidenceKeys: {},
    uid: "chart1628887518869",
    visualizationType: "Line",
    data: [
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Federal",
        Amount: "1377"
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Local",
        Amount: "1613"
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "State",
        Amount: "1495"
      }
    ],
    series: [
      {
        dataKey: "Amount",
        type: "Bar"
      }
    ]
  }
}, st = {
  label: "Data Table",
  show: !0
}, ct = [
  {
    Location: "Alaska",
    Year: "2019",
    Type: "Federal",
    Amount: "1377"
  },
  {
    Location: "Alaska",
    Year: "2019",
    Type: "Local",
    Amount: "1613"
  },
  {
    Location: "Alaska",
    Year: "2019",
    Type: "State",
    Amount: "1495"
  },
  {
    Location: "Alaska",
    Year: "2020",
    Type: "Federal",
    Amount: "1377"
  },
  {
    Location: "Alaska",
    Year: "2020",
    Type: "Local",
    Amount: "1613"
  },
  {
    Location: "Alaska",
    Year: "2020",
    Type: "State",
    Amount: "1495"
  },
  {
    Location: "Alaska",
    Year: "2021",
    Type: "Federal",
    Amount: "1436"
  },
  {
    Location: "Alaska",
    Year: "2021",
    Type: "Local",
    Amount: "1672"
  },
  {
    Location: "Alaska",
    Year: "2021",
    Type: "State",
    Amount: "1554"
  },
  {
    Location: "Alabama",
    Year: "2019",
    Type: "Federal",
    Amount: "1375"
  },
  {
    Location: "Alabama",
    Year: "2019",
    Type: "Local",
    Amount: "1611"
  },
  {
    Location: "Alabama",
    Year: "2019",
    Type: "State",
    Amount: "1493"
  },
  {
    Location: "Alabama",
    Year: "2020",
    Type: "Federal",
    Amount: "1375"
  },
  {
    Location: "Alabama",
    Year: "2020",
    Type: "Local",
    Amount: "1611"
  },
  {
    Location: "Alabama",
    Year: "2020",
    Type: "State",
    Amount: "1493"
  },
  {
    Location: "Alabama",
    Year: "2021",
    Type: "Federal",
    Amount: "1434"
  },
  {
    Location: "Alabama",
    Year: "2021",
    Type: "Local",
    Amount: "1670"
  },
  {
    Location: "Alabama",
    Year: "2021",
    Type: "State",
    Amount: "1552"
  },
  {
    Location: "Arkansas",
    Year: "2019",
    Type: "Federal",
    Amount: "1398"
  },
  {
    Location: "Arkansas",
    Year: "2019",
    Type: "Local",
    Amount: "1634"
  },
  {
    Location: "Arkansas",
    Year: "2019",
    Type: "State",
    Amount: "1516"
  },
  {
    Location: "Arkansas",
    Year: "2020",
    Type: "Federal",
    Amount: "1398"
  },
  {
    Location: "Arkansas",
    Year: "2020",
    Type: "Local",
    Amount: "1634"
  },
  {
    Location: "Arkansas",
    Year: "2020",
    Type: "State",
    Amount: "1516"
  },
  {
    Location: "Arkansas",
    Year: "2021",
    Type: "Federal",
    Amount: "1457"
  },
  {
    Location: "Arkansas",
    Year: "2021",
    Type: "Local",
    Amount: "1693"
  },
  {
    Location: "Arkansas",
    Year: "2021",
    Type: "State",
    Amount: "1575"
  },
  {
    Location: "American Samoa",
    Year: "2019",
    Type: "Federal",
    Amount: "1388"
  },
  {
    Location: "American Samoa",
    Year: "2019",
    Type: "Local",
    Amount: "1624"
  },
  {
    Location: "American Samoa",
    Year: "2019",
    Type: "State",
    Amount: "1506"
  },
  {
    Location: "American Samoa",
    Year: "2020",
    Type: "Federal",
    Amount: "1388"
  },
  {
    Location: "American Samoa",
    Year: "2020",
    Type: "Local",
    Amount: "1624"
  },
  {
    Location: "American Samoa",
    Year: "2020",
    Type: "State",
    Amount: "1506"
  },
  {
    Location: "American Samoa",
    Year: "2021",
    Type: "Federal",
    Amount: "1447"
  },
  {
    Location: "American Samoa",
    Year: "2021",
    Type: "Local",
    Amount: "1683"
  },
  {
    Location: "American Samoa",
    Year: "2021",
    Type: "State",
    Amount: "1565"
  },
  {
    Location: "Arizona",
    Year: "2019",
    Type: "Federal",
    Amount: "1401"
  },
  {
    Location: "Arizona",
    Year: "2019",
    Type: "Local",
    Amount: "1637"
  },
  {
    Location: "Arizona",
    Year: "2019",
    Type: "State",
    Amount: "1519"
  },
  {
    Location: "Arizona",
    Year: "2020",
    Type: "Federal",
    Amount: "1401"
  },
  {
    Location: "Arizona",
    Year: "2020",
    Type: "Local",
    Amount: "1637"
  },
  {
    Location: "Arizona",
    Year: "2020",
    Type: "State",
    Amount: "1519"
  },
  {
    Location: "Arizona",
    Year: "2021",
    Type: "Federal",
    Amount: "1460"
  },
  {
    Location: "Arizona",
    Year: "2021",
    Type: "Local",
    Amount: "1696"
  },
  {
    Location: "Arizona",
    Year: "2021",
    Type: "State",
    Amount: "1578"
  }
], lt = "dashboard_aggregate_example_no_add_fullname.csv", dt = "file", pt = "dashboard", mt = 1628879384203, ut = {
  dashboard: nt,
  rows: it,
  visualizations: rt,
  table: st,
  data: ct,
  dataFileName: lt,
  dataFileSourceType: dt,
  type: pt,
  uuid: mt
}, Lt = {
  theme: "theme-blue",
  title: "Dashboard with No Filters"
}, Tt = [
  [
    {
      width: 12,
      widget: "map1629143821077"
    },
    {},
    {}
  ],
  [
    {
      width: 6,
      widget: "data-bite1629144030877"
    },
    {
      width: 6,
      widget: "data-bite1629144267659"
    },
    {
      width: null
    }
  ]
], ht = {
  map1629143821077: {
    general: {
      geoType: "us",
      geoBorderColor: "darkGray",
      headerColor: "theme-blue",
      showTitle: !0,
      showSidebar: !0,
      showDownloadButton: !0,
      showDownloadMediaButton: !1,
      displayAsHex: !1,
      displayStateLabels: !1,
      territoriesLabel: "Territories",
      language: "en",
      hasRegions: !1,
      expandDataTable: !0,
      fullBorder: !1,
      type: "data",
      title: "",
      territoriesAlwaysShow: !1,
      geoLabelOverride: "",
      palette: {
        isReversed: !1
      },
      allowMapZoom: !0,
      hideGeoColumnInTooltip: !1,
      hidePrimaryColumnInTooltip: !1,
      statePicked: {
        fipsCode: "01",
        stateName: "Alabama"
      }
    },
    type: "map",
    color: "yellowpurple",
    columns: {
      geo: {
        name: "Location",
        label: "Location",
        tooltip: !1,
        dataTable: !0
      },
      primary: {
        dataTable: !0,
        tooltip: !0,
        prefix: "",
        suffix: "",
        name: "Rate",
        label: ""
      },
      navigate: {
        name: ""
      },
      latitude: {
        name: ""
      },
      longitude: {
        name: ""
      }
    },
    legend: {
      descriptions: {},
      specialClasses: [],
      unified: !1,
      singleColumn: !1,
      dynamicDescription: !1,
      type: "equalnumber",
      numberOfItems: 3,
      position: "side",
      title: "Legend",
      singleRow: !1,
      showSpecialClassesLast: !1
    },
    filters: [],
    dataTable: {
      title: "Data Table",
      forceDisplay: !1
    },
    table: {
      showDownloadUrl: !1,
      showDataTableLink: !0
    },
    tooltips: {
      appearanceType: "hover",
      linkLabel: "Learn More",
      capitalizeLabels: !0
    },
    runtime: {
      editorErrorMessage: []
    },
    visual: {
      minBubbleSize: 1,
      maxBubbleSize: 20,
      extraBubbleBorder: !1,
      cityStyle: "circle",
      geoCodeCircleSize: 2,
      showBubbleZeros: !1
    },
    mapPosition: {
      coordinates: [
        0,
        30
      ],
      zoom: 1
    },
    map: {
      layers: []
    },
    filterBehavior: "Filter Change",
    uid: "map1629143821077",
    data: [
      {
        Location: "Alabama",
        Rate: 1375
      },
      {
        Location: "Alaska",
        Rate: 1377
      },
      {
        Location: "American Samoa",
        Rate: 1388
      },
      {
        Location: "Arizona",
        Rate: 1401
      },
      {
        Location: "Arkansas",
        Rate: 1398
      },
      {
        Location: "California",
        Rate: 1381
      },
      {
        Location: "Colorado",
        Rate: 1369
      },
      {
        Location: "Connecticut",
        Rate: 1403
      },
      {
        Location: "Delaware	",
        Rate: "1384"
      },
      {
        Location: "District of Columbia",
        Rate: 1400
      },
      {
        Location: "Florida",
        Rate: 1387
      },
      {
        Location: "Georgia",
        Rate: 1365
      },
      {
        Location: "Guam",
        Rate: 1356
      },
      {
        Location: "Hawaii",
        Rate: 1362
      },
      {
        Location: "Idaho",
        Rate: 1374
      },
      {
        Location: "Illinois",
        Rate: 1402
      },
      {
        Location: "Indiana",
        Rate: 1404
      },
      {
        Location: "Iowa",
        Rate: 1394
      },
      {
        Location: "Kansas",
        Rate: 1367
      },
      {
        Location: "Kentucky",
        Rate: 1359
      },
      {
        Location: "Louisiana",
        Rate: 1409
      },
      {
        Location: "Maine",
        Rate: 1385
      },
      {
        Location: "Marshall Islands",
        Rate: 1467
      },
      {
        Location: "Maryland",
        Rate: 1386
      },
      {
        Location: "Massachusetts",
        Rate: 1366
      },
      {
        Location: "Michigan",
        Rate: 1390
      },
      {
        Location: "Minnesota",
        Rate: 1392
      },
      {
        Location: "Mississippi",
        Rate: 1406
      },
      {
        Location: "Missouri",
        Rate: 1378
      },
      {
        Location: "Montana",
        Rate: 1364
      },
      {
        Location: "Nebraska",
        Rate: 1391
      },
      {
        Location: "Nevada",
        Rate: 1416
      },
      {
        Location: "New Hampshire",
        Rate: 1405
      },
      {
        Location: "New Jersey",
        Rate: 1469
      },
      {
        Location: "New Mexico",
        Rate: 1399
      },
      {
        Location: "New York",
        Rate: 1360
      },
      {
        Location: "North Carolina",
        Rate: 1358
      },
      {
        Location: "North Dakota",
        Rate: 1355
      },
      {
        Location: "Northern Mariana Islands",
        Rate: "1368"
      },
      {
        Location: "Ohio",
        Rate: 1466
      },
      {
        Location: "Oklahoma",
        Rate: 1372
      },
      {
        Location: "Oregon",
        Rate: 1438
      },
      {
        Location: "Pennsylvania",
        Rate: 1354
      },
      {
        Location: "Puerto Rico",
        Rate: 1422
      },
      {
        Location: "Republic of Palau",
        Rate: "1471"
      },
      {
        Location: "Rhode Island",
        Rate: 1411
      },
      {
        Location: "South Carolina",
        Rate: 1389
      },
      {
        Location: "South Dakota",
        Rate: 1432
      },
      {
        Location: "Tennessee",
        Rate: 1376
      },
      {
        Location: "Texas",
        Rate: 1420
      },
      {
        Location: "U.S. Virgin Islands",
        Rate: "1383"
      },
      {
        Location: "Utah",
        Rate: 1380
      },
      {
        Location: "Vermont",
        Rate: 1429
      },
      {
        Location: "Virginia",
        Rate: 1441
      },
      {
        Location: "Washington",
        Rate: 1393
      },
      {
        Location: "West Virginia",
        Rate: 1397
      },
      {
        Location: "Wisconsin",
        Rate: 1430
      },
      {
        Location: "Wyoming",
        Rate: 1454
      }
    ],
    dataKey: "dashboard_example_map.csv",
    formattedData: [
      {
        Location: "Alabama",
        Rate: 1375
      },
      {
        Location: "Alaska",
        Rate: 1377
      },
      {
        Location: "American Samoa",
        Rate: 1388
      },
      {
        Location: "Arizona",
        Rate: 1401
      },
      {
        Location: "Arkansas",
        Rate: 1398
      },
      {
        Location: "California",
        Rate: 1381
      },
      {
        Location: "Colorado",
        Rate: 1369
      },
      {
        Location: "Connecticut",
        Rate: 1403
      },
      {
        Location: "Delaware	",
        Rate: "1384"
      },
      {
        Location: "District of Columbia",
        Rate: 1400
      },
      {
        Location: "Florida",
        Rate: 1387
      },
      {
        Location: "Georgia",
        Rate: 1365
      },
      {
        Location: "Guam",
        Rate: 1356
      },
      {
        Location: "Hawaii",
        Rate: 1362
      },
      {
        Location: "Idaho",
        Rate: 1374
      },
      {
        Location: "Illinois",
        Rate: 1402
      },
      {
        Location: "Indiana",
        Rate: 1404
      },
      {
        Location: "Iowa",
        Rate: 1394
      },
      {
        Location: "Kansas",
        Rate: 1367
      },
      {
        Location: "Kentucky",
        Rate: 1359
      },
      {
        Location: "Louisiana",
        Rate: 1409
      },
      {
        Location: "Maine",
        Rate: 1385
      },
      {
        Location: "Marshall Islands",
        Rate: 1467
      },
      {
        Location: "Maryland",
        Rate: 1386
      },
      {
        Location: "Massachusetts",
        Rate: 1366
      },
      {
        Location: "Michigan",
        Rate: 1390
      },
      {
        Location: "Minnesota",
        Rate: 1392
      },
      {
        Location: "Mississippi",
        Rate: 1406
      },
      {
        Location: "Missouri",
        Rate: 1378
      },
      {
        Location: "Montana",
        Rate: 1364
      },
      {
        Location: "Nebraska",
        Rate: 1391
      },
      {
        Location: "Nevada",
        Rate: 1416
      },
      {
        Location: "New Hampshire",
        Rate: 1405
      },
      {
        Location: "New Jersey",
        Rate: 1469
      },
      {
        Location: "New Mexico",
        Rate: 1399
      },
      {
        Location: "New York",
        Rate: 1360
      },
      {
        Location: "North Carolina",
        Rate: 1358
      },
      {
        Location: "North Dakota",
        Rate: 1355
      },
      {
        Location: "Northern Mariana Islands",
        Rate: "1368"
      },
      {
        Location: "Ohio",
        Rate: 1466
      },
      {
        Location: "Oklahoma",
        Rate: 1372
      },
      {
        Location: "Oregon",
        Rate: 1438
      },
      {
        Location: "Pennsylvania",
        Rate: 1354
      },
      {
        Location: "Puerto Rico",
        Rate: 1422
      },
      {
        Location: "Republic of Palau",
        Rate: "1471"
      },
      {
        Location: "Rhode Island",
        Rate: 1411
      },
      {
        Location: "South Carolina",
        Rate: 1389
      },
      {
        Location: "South Dakota",
        Rate: 1432
      },
      {
        Location: "Tennessee",
        Rate: 1376
      },
      {
        Location: "Texas",
        Rate: 1420
      },
      {
        Location: "U.S. Virgin Islands",
        Rate: "1383"
      },
      {
        Location: "Utah",
        Rate: 1380
      },
      {
        Location: "Vermont",
        Rate: 1429
      },
      {
        Location: "Virginia",
        Rate: 1441
      },
      {
        Location: "Washington",
        Rate: 1393
      },
      {
        Location: "West Virginia",
        Rate: 1397
      },
      {
        Location: "Wisconsin",
        Rate: 1430
      },
      {
        Location: "Wyoming",
        Rate: 1454
      }
    ],
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    originalFormattedData: [
      {
        Location: "Alabama",
        Rate: 1375
      },
      {
        Location: "Alaska",
        Rate: 1377
      },
      {
        Location: "American Samoa",
        Rate: 1388
      },
      {
        Location: "Arizona",
        Rate: 1401
      },
      {
        Location: "Arkansas",
        Rate: 1398
      },
      {
        Location: "California",
        Rate: 1381
      },
      {
        Location: "Colorado",
        Rate: 1369
      },
      {
        Location: "Connecticut",
        Rate: 1403
      },
      {
        Location: "Delaware	",
        Rate: "1384"
      },
      {
        Location: "District of Columbia",
        Rate: 1400
      },
      {
        Location: "Florida",
        Rate: 1387
      },
      {
        Location: "Georgia",
        Rate: 1365
      },
      {
        Location: "Guam",
        Rate: 1356
      },
      {
        Location: "Hawaii",
        Rate: 1362
      },
      {
        Location: "Idaho",
        Rate: 1374
      },
      {
        Location: "Illinois",
        Rate: 1402
      },
      {
        Location: "Indiana",
        Rate: 1404
      },
      {
        Location: "Iowa",
        Rate: 1394
      },
      {
        Location: "Kansas",
        Rate: 1367
      },
      {
        Location: "Kentucky",
        Rate: 1359
      },
      {
        Location: "Louisiana",
        Rate: 1409
      },
      {
        Location: "Maine",
        Rate: 1385
      },
      {
        Location: "Marshall Islands",
        Rate: 1467
      },
      {
        Location: "Maryland",
        Rate: 1386
      },
      {
        Location: "Massachusetts",
        Rate: 1366
      },
      {
        Location: "Michigan",
        Rate: 1390
      },
      {
        Location: "Minnesota",
        Rate: 1392
      },
      {
        Location: "Mississippi",
        Rate: 1406
      },
      {
        Location: "Missouri",
        Rate: 1378
      },
      {
        Location: "Montana",
        Rate: 1364
      },
      {
        Location: "Nebraska",
        Rate: 1391
      },
      {
        Location: "Nevada",
        Rate: 1416
      },
      {
        Location: "New Hampshire",
        Rate: 1405
      },
      {
        Location: "New Jersey",
        Rate: 1469
      },
      {
        Location: "New Mexico",
        Rate: 1399
      },
      {
        Location: "New York",
        Rate: 1360
      },
      {
        Location: "North Carolina",
        Rate: 1358
      },
      {
        Location: "North Dakota",
        Rate: 1355
      },
      {
        Location: "Northern Mariana Islands",
        Rate: "1368"
      },
      {
        Location: "Ohio",
        Rate: 1466
      },
      {
        Location: "Oklahoma",
        Rate: 1372
      },
      {
        Location: "Oregon",
        Rate: 1438
      },
      {
        Location: "Pennsylvania",
        Rate: 1354
      },
      {
        Location: "Puerto Rico",
        Rate: 1422
      },
      {
        Location: "Republic of Palau",
        Rate: "1471"
      },
      {
        Location: "Rhode Island",
        Rate: 1411
      },
      {
        Location: "South Carolina",
        Rate: 1389
      },
      {
        Location: "South Dakota",
        Rate: 1432
      },
      {
        Location: "Tennessee",
        Rate: 1376
      },
      {
        Location: "Texas",
        Rate: 1420
      },
      {
        Location: "U.S. Virgin Islands",
        Rate: "1383"
      },
      {
        Location: "Utah",
        Rate: 1380
      },
      {
        Location: "Vermont",
        Rate: 1429
      },
      {
        Location: "Virginia",
        Rate: 1441
      },
      {
        Location: "Washington",
        Rate: 1393
      },
      {
        Location: "West Virginia",
        Rate: 1397
      },
      {
        Location: "Wisconsin",
        Rate: 1430
      },
      {
        Location: "Wyoming",
        Rate: 1454
      }
    ]
  },
  "data-bite1629144030877": {
    type: "data-bite",
    data: [
      {
        Location: "Alabama",
        Rate: 1375
      },
      {
        Location: "Alaska",
        Rate: 1377
      },
      {
        Location: "American Samoa",
        Rate: 1388
      },
      {
        Location: "Arizona",
        Rate: 1401
      },
      {
        Location: "Arkansas",
        Rate: 1398
      },
      {
        Location: "California",
        Rate: 1381
      },
      {
        Location: "Colorado",
        Rate: 1369
      },
      {
        Location: "Connecticut",
        Rate: 1403
      },
      {
        Location: "Delaware	",
        Rate: "1384"
      },
      {
        Location: "District of Columbia",
        Rate: 1400
      },
      {
        Location: "Florida",
        Rate: 1387
      },
      {
        Location: "Georgia",
        Rate: 1365
      },
      {
        Location: "Guam",
        Rate: 1356
      },
      {
        Location: "Hawaii",
        Rate: 1362
      },
      {
        Location: "Idaho",
        Rate: 1374
      },
      {
        Location: "Illinois",
        Rate: 1402
      },
      {
        Location: "Indiana",
        Rate: 1404
      },
      {
        Location: "Iowa",
        Rate: 1394
      },
      {
        Location: "Kansas",
        Rate: 1367
      },
      {
        Location: "Kentucky",
        Rate: 1359
      },
      {
        Location: "Louisiana",
        Rate: 1409
      },
      {
        Location: "Maine",
        Rate: 1385
      },
      {
        Location: "Marshall Islands",
        Rate: 1467
      },
      {
        Location: "Maryland",
        Rate: 1386
      },
      {
        Location: "Massachusetts",
        Rate: 1366
      },
      {
        Location: "Michigan",
        Rate: 1390
      },
      {
        Location: "Minnesota",
        Rate: 1392
      },
      {
        Location: "Mississippi",
        Rate: 1406
      },
      {
        Location: "Missouri",
        Rate: 1378
      },
      {
        Location: "Montana",
        Rate: 1364
      },
      {
        Location: "Nebraska",
        Rate: 1391
      },
      {
        Location: "Nevada",
        Rate: 1416
      },
      {
        Location: "New Hampshire",
        Rate: 1405
      },
      {
        Location: "New Jersey",
        Rate: 1469
      },
      {
        Location: "New Mexico",
        Rate: 1399
      },
      {
        Location: "New York",
        Rate: 1360
      },
      {
        Location: "North Carolina",
        Rate: 1358
      },
      {
        Location: "North Dakota",
        Rate: 1355
      },
      {
        Location: "Northern Mariana Islands",
        Rate: "1368"
      },
      {
        Location: "Ohio",
        Rate: 1466
      },
      {
        Location: "Oklahoma",
        Rate: 1372
      },
      {
        Location: "Oregon",
        Rate: 1438
      },
      {
        Location: "Pennsylvania",
        Rate: 1354
      },
      {
        Location: "Puerto Rico",
        Rate: 1422
      },
      {
        Location: "Republic of Palau",
        Rate: "1471"
      },
      {
        Location: "Rhode Island",
        Rate: 1411
      },
      {
        Location: "South Carolina",
        Rate: 1389
      },
      {
        Location: "South Dakota",
        Rate: 1432
      },
      {
        Location: "Tennessee",
        Rate: 1376
      },
      {
        Location: "Texas",
        Rate: 1420
      },
      {
        Location: "U.S. Virgin Islands",
        Rate: "1383"
      },
      {
        Location: "Utah",
        Rate: 1380
      },
      {
        Location: "Vermont",
        Rate: 1429
      },
      {
        Location: "Virginia",
        Rate: 1441
      },
      {
        Location: "Washington",
        Rate: 1393
      },
      {
        Location: "West Virginia",
        Rate: 1397
      },
      {
        Location: "Wisconsin",
        Rate: 1430
      },
      {
        Location: "Wyoming",
        Rate: 1454
      }
    ],
    dataBite: "",
    dataFunction: "Mean (Average)",
    dataColumn: "Rate",
    bitePosition: "Left",
    biteFontSize: 24,
    fontSize: "medium",
    imageUrl: "",
    biteBody: `<span style="font-size: 35px;">Average Amount</span> <br>Reflects the average of the  data column selected.  This number is calculated within the Data Bite module.
`,
    prefix: "",
    suffix: "",
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: ""
    },
    biteStyle: "graphic",
    filters: [],
    subtext: "",
    title: "",
    theme: "theme-pink",
    shadow: !1,
    uid: "data-bite1629144030877",
    visualizationType: "data-bite",
    dataKey: "dashboard_example_map.csv",
    formattedData: [
      {
        Location: "Alabama",
        Rate: 1375
      },
      {
        Location: "Alaska",
        Rate: 1377
      },
      {
        Location: "American Samoa",
        Rate: 1388
      },
      {
        Location: "Arizona",
        Rate: 1401
      },
      {
        Location: "Arkansas",
        Rate: 1398
      },
      {
        Location: "California",
        Rate: 1381
      },
      {
        Location: "Colorado",
        Rate: 1369
      },
      {
        Location: "Connecticut",
        Rate: 1403
      },
      {
        Location: "Delaware	",
        Rate: "1384"
      },
      {
        Location: "District of Columbia",
        Rate: 1400
      },
      {
        Location: "Florida",
        Rate: 1387
      },
      {
        Location: "Georgia",
        Rate: 1365
      },
      {
        Location: "Guam",
        Rate: 1356
      },
      {
        Location: "Hawaii",
        Rate: 1362
      },
      {
        Location: "Idaho",
        Rate: 1374
      },
      {
        Location: "Illinois",
        Rate: 1402
      },
      {
        Location: "Indiana",
        Rate: 1404
      },
      {
        Location: "Iowa",
        Rate: 1394
      },
      {
        Location: "Kansas",
        Rate: 1367
      },
      {
        Location: "Kentucky",
        Rate: 1359
      },
      {
        Location: "Louisiana",
        Rate: 1409
      },
      {
        Location: "Maine",
        Rate: 1385
      },
      {
        Location: "Marshall Islands",
        Rate: 1467
      },
      {
        Location: "Maryland",
        Rate: 1386
      },
      {
        Location: "Massachusetts",
        Rate: 1366
      },
      {
        Location: "Michigan",
        Rate: 1390
      },
      {
        Location: "Minnesota",
        Rate: 1392
      },
      {
        Location: "Mississippi",
        Rate: 1406
      },
      {
        Location: "Missouri",
        Rate: 1378
      },
      {
        Location: "Montana",
        Rate: 1364
      },
      {
        Location: "Nebraska",
        Rate: 1391
      },
      {
        Location: "Nevada",
        Rate: 1416
      },
      {
        Location: "New Hampshire",
        Rate: 1405
      },
      {
        Location: "New Jersey",
        Rate: 1469
      },
      {
        Location: "New Mexico",
        Rate: 1399
      },
      {
        Location: "New York",
        Rate: 1360
      },
      {
        Location: "North Carolina",
        Rate: 1358
      },
      {
        Location: "North Dakota",
        Rate: 1355
      },
      {
        Location: "Northern Mariana Islands",
        Rate: "1368"
      },
      {
        Location: "Ohio",
        Rate: 1466
      },
      {
        Location: "Oklahoma",
        Rate: 1372
      },
      {
        Location: "Oregon",
        Rate: 1438
      },
      {
        Location: "Pennsylvania",
        Rate: 1354
      },
      {
        Location: "Puerto Rico",
        Rate: 1422
      },
      {
        Location: "Republic of Palau",
        Rate: "1471"
      },
      {
        Location: "Rhode Island",
        Rate: 1411
      },
      {
        Location: "South Carolina",
        Rate: 1389
      },
      {
        Location: "South Dakota",
        Rate: 1432
      },
      {
        Location: "Tennessee",
        Rate: 1376
      },
      {
        Location: "Texas",
        Rate: 1420
      },
      {
        Location: "U.S. Virgin Islands",
        Rate: "1383"
      },
      {
        Location: "Utah",
        Rate: 1380
      },
      {
        Location: "Vermont",
        Rate: 1429
      },
      {
        Location: "Virginia",
        Rate: 1441
      },
      {
        Location: "Washington",
        Rate: 1393
      },
      {
        Location: "West Virginia",
        Rate: 1397
      },
      {
        Location: "Wisconsin",
        Rate: 1430
      },
      {
        Location: "Wyoming",
        Rate: 1454
      }
    ],
    dataDescription: {
      horizontal: !1,
      series: !1
    }
  },
  "data-bite1629144267659": {
    type: "data-bite",
    data: [
      {
        Location: "Alabama",
        Rate: 1375
      },
      {
        Location: "Alaska",
        Rate: 1377
      },
      {
        Location: "American Samoa",
        Rate: 1388
      },
      {
        Location: "Arizona",
        Rate: 1401
      },
      {
        Location: "Arkansas",
        Rate: 1398
      },
      {
        Location: "California",
        Rate: 1381
      },
      {
        Location: "Colorado",
        Rate: 1369
      },
      {
        Location: "Connecticut",
        Rate: 1403
      },
      {
        Location: "Delaware	",
        Rate: "1384"
      },
      {
        Location: "District of Columbia",
        Rate: 1400
      },
      {
        Location: "Florida",
        Rate: 1387
      },
      {
        Location: "Georgia",
        Rate: 1365
      },
      {
        Location: "Guam",
        Rate: 1356
      },
      {
        Location: "Hawaii",
        Rate: 1362
      },
      {
        Location: "Idaho",
        Rate: 1374
      },
      {
        Location: "Illinois",
        Rate: 1402
      },
      {
        Location: "Indiana",
        Rate: 1404
      },
      {
        Location: "Iowa",
        Rate: 1394
      },
      {
        Location: "Kansas",
        Rate: 1367
      },
      {
        Location: "Kentucky",
        Rate: 1359
      },
      {
        Location: "Louisiana",
        Rate: 1409
      },
      {
        Location: "Maine",
        Rate: 1385
      },
      {
        Location: "Marshall Islands",
        Rate: 1467
      },
      {
        Location: "Maryland",
        Rate: 1386
      },
      {
        Location: "Massachusetts",
        Rate: 1366
      },
      {
        Location: "Michigan",
        Rate: 1390
      },
      {
        Location: "Minnesota",
        Rate: 1392
      },
      {
        Location: "Mississippi",
        Rate: 1406
      },
      {
        Location: "Missouri",
        Rate: 1378
      },
      {
        Location: "Montana",
        Rate: 1364
      },
      {
        Location: "Nebraska",
        Rate: 1391
      },
      {
        Location: "Nevada",
        Rate: 1416
      },
      {
        Location: "New Hampshire",
        Rate: 1405
      },
      {
        Location: "New Jersey",
        Rate: 1469
      },
      {
        Location: "New Mexico",
        Rate: 1399
      },
      {
        Location: "New York",
        Rate: 1360
      },
      {
        Location: "North Carolina",
        Rate: 1358
      },
      {
        Location: "North Dakota",
        Rate: 1355
      },
      {
        Location: "Northern Mariana Islands",
        Rate: "1368"
      },
      {
        Location: "Ohio",
        Rate: 1466
      },
      {
        Location: "Oklahoma",
        Rate: 1372
      },
      {
        Location: "Oregon",
        Rate: 1438
      },
      {
        Location: "Pennsylvania",
        Rate: 1354
      },
      {
        Location: "Puerto Rico",
        Rate: 1422
      },
      {
        Location: "Republic of Palau",
        Rate: "1471"
      },
      {
        Location: "Rhode Island",
        Rate: 1411
      },
      {
        Location: "South Carolina",
        Rate: 1389
      },
      {
        Location: "South Dakota",
        Rate: 1432
      },
      {
        Location: "Tennessee",
        Rate: 1376
      },
      {
        Location: "Texas",
        Rate: 1420
      },
      {
        Location: "U.S. Virgin Islands",
        Rate: "1383"
      },
      {
        Location: "Utah",
        Rate: 1380
      },
      {
        Location: "Vermont",
        Rate: 1429
      },
      {
        Location: "Virginia",
        Rate: 1441
      },
      {
        Location: "Washington",
        Rate: 1393
      },
      {
        Location: "West Virginia",
        Rate: 1397
      },
      {
        Location: "Wisconsin",
        Rate: 1430
      },
      {
        Location: "Wyoming",
        Rate: 1454
      }
    ],
    dataBite: "",
    dataFunction: "Sum",
    dataColumn: "Rate",
    bitePosition: "Left",
    biteFontSize: 24,
    fontSize: "medium",
    imageUrl: "",
    biteBody: `<span style="font-size: 35px;">Sum Total</span> <br>Reflects the Sum total of the rate column. 
 This number is calculated within the Data Bite module.
`,
    prefix: "",
    suffix: "",
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: ""
    },
    biteStyle: "graphic",
    filters: [],
    subtext: "",
    title: "",
    theme: "theme-pink",
    shadow: !1,
    uid: "data-bite1629144267659",
    visualizationType: "data-bite",
    dataKey: "dashboard_example_map.csv",
    formattedData: [
      {
        Location: "Alabama",
        Rate: 1375
      },
      {
        Location: "Alaska",
        Rate: 1377
      },
      {
        Location: "American Samoa",
        Rate: 1388
      },
      {
        Location: "Arizona",
        Rate: 1401
      },
      {
        Location: "Arkansas",
        Rate: 1398
      },
      {
        Location: "California",
        Rate: 1381
      },
      {
        Location: "Colorado",
        Rate: 1369
      },
      {
        Location: "Connecticut",
        Rate: 1403
      },
      {
        Location: "Delaware	",
        Rate: "1384"
      },
      {
        Location: "District of Columbia",
        Rate: 1400
      },
      {
        Location: "Florida",
        Rate: 1387
      },
      {
        Location: "Georgia",
        Rate: 1365
      },
      {
        Location: "Guam",
        Rate: 1356
      },
      {
        Location: "Hawaii",
        Rate: 1362
      },
      {
        Location: "Idaho",
        Rate: 1374
      },
      {
        Location: "Illinois",
        Rate: 1402
      },
      {
        Location: "Indiana",
        Rate: 1404
      },
      {
        Location: "Iowa",
        Rate: 1394
      },
      {
        Location: "Kansas",
        Rate: 1367
      },
      {
        Location: "Kentucky",
        Rate: 1359
      },
      {
        Location: "Louisiana",
        Rate: 1409
      },
      {
        Location: "Maine",
        Rate: 1385
      },
      {
        Location: "Marshall Islands",
        Rate: 1467
      },
      {
        Location: "Maryland",
        Rate: 1386
      },
      {
        Location: "Massachusetts",
        Rate: 1366
      },
      {
        Location: "Michigan",
        Rate: 1390
      },
      {
        Location: "Minnesota",
        Rate: 1392
      },
      {
        Location: "Mississippi",
        Rate: 1406
      },
      {
        Location: "Missouri",
        Rate: 1378
      },
      {
        Location: "Montana",
        Rate: 1364
      },
      {
        Location: "Nebraska",
        Rate: 1391
      },
      {
        Location: "Nevada",
        Rate: 1416
      },
      {
        Location: "New Hampshire",
        Rate: 1405
      },
      {
        Location: "New Jersey",
        Rate: 1469
      },
      {
        Location: "New Mexico",
        Rate: 1399
      },
      {
        Location: "New York",
        Rate: 1360
      },
      {
        Location: "North Carolina",
        Rate: 1358
      },
      {
        Location: "North Dakota",
        Rate: 1355
      },
      {
        Location: "Northern Mariana Islands",
        Rate: "1368"
      },
      {
        Location: "Ohio",
        Rate: 1466
      },
      {
        Location: "Oklahoma",
        Rate: 1372
      },
      {
        Location: "Oregon",
        Rate: 1438
      },
      {
        Location: "Pennsylvania",
        Rate: 1354
      },
      {
        Location: "Puerto Rico",
        Rate: 1422
      },
      {
        Location: "Republic of Palau",
        Rate: "1471"
      },
      {
        Location: "Rhode Island",
        Rate: 1411
      },
      {
        Location: "South Carolina",
        Rate: 1389
      },
      {
        Location: "South Dakota",
        Rate: 1432
      },
      {
        Location: "Tennessee",
        Rate: 1376
      },
      {
        Location: "Texas",
        Rate: 1420
      },
      {
        Location: "U.S. Virgin Islands",
        Rate: "1383"
      },
      {
        Location: "Utah",
        Rate: 1380
      },
      {
        Location: "Vermont",
        Rate: 1429
      },
      {
        Location: "Virginia",
        Rate: 1441
      },
      {
        Location: "Washington",
        Rate: 1393
      },
      {
        Location: "West Virginia",
        Rate: 1397
      },
      {
        Location: "Wisconsin",
        Rate: 1430
      },
      {
        Location: "Wyoming",
        Rate: 1454
      }
    ],
    dataDescription: {
      horizontal: !1,
      series: !1
    }
  }
}, yt = {
  label: "Data Table",
  show: !0
}, At = "dashboard", gt = 1629144022257, wt = {
  "dashboard_example_map.csv": {
    data: [
      {
        Location: "Alabama",
        Rate: 1375
      },
      {
        Location: "Alaska",
        Rate: 1377
      },
      {
        Location: "American Samoa",
        Rate: 1388
      },
      {
        Location: "Arizona",
        Rate: 1401
      },
      {
        Location: "Arkansas",
        Rate: 1398
      },
      {
        Location: "California",
        Rate: 1381
      },
      {
        Location: "Colorado",
        Rate: 1369
      },
      {
        Location: "Connecticut",
        Rate: 1403
      },
      {
        Location: "Delaware	",
        Rate: "1384"
      },
      {
        Location: "District of Columbia",
        Rate: 1400
      },
      {
        Location: "Florida",
        Rate: 1387
      },
      {
        Location: "Georgia",
        Rate: 1365
      },
      {
        Location: "Guam",
        Rate: 1356
      },
      {
        Location: "Hawaii",
        Rate: 1362
      },
      {
        Location: "Idaho",
        Rate: 1374
      },
      {
        Location: "Illinois",
        Rate: 1402
      },
      {
        Location: "Indiana",
        Rate: 1404
      },
      {
        Location: "Iowa",
        Rate: 1394
      },
      {
        Location: "Kansas",
        Rate: 1367
      },
      {
        Location: "Kentucky",
        Rate: 1359
      },
      {
        Location: "Louisiana",
        Rate: 1409
      },
      {
        Location: "Maine",
        Rate: 1385
      },
      {
        Location: "Marshall Islands",
        Rate: 1467
      },
      {
        Location: "Maryland",
        Rate: 1386
      },
      {
        Location: "Massachusetts",
        Rate: 1366
      },
      {
        Location: "Michigan",
        Rate: 1390
      },
      {
        Location: "Minnesota",
        Rate: 1392
      },
      {
        Location: "Mississippi",
        Rate: 1406
      },
      {
        Location: "Missouri",
        Rate: 1378
      },
      {
        Location: "Montana",
        Rate: 1364
      },
      {
        Location: "Nebraska",
        Rate: 1391
      },
      {
        Location: "Nevada",
        Rate: 1416
      },
      {
        Location: "New Hampshire",
        Rate: 1405
      },
      {
        Location: "New Jersey",
        Rate: 1469
      },
      {
        Location: "New Mexico",
        Rate: 1399
      },
      {
        Location: "New York",
        Rate: 1360
      },
      {
        Location: "North Carolina",
        Rate: 1358
      },
      {
        Location: "North Dakota",
        Rate: 1355
      },
      {
        Location: "Northern Mariana Islands",
        Rate: "1368"
      },
      {
        Location: "Ohio",
        Rate: 1466
      },
      {
        Location: "Oklahoma",
        Rate: 1372
      },
      {
        Location: "Oregon",
        Rate: 1438
      },
      {
        Location: "Pennsylvania",
        Rate: 1354
      },
      {
        Location: "Puerto Rico",
        Rate: 1422
      },
      {
        Location: "Republic of Palau",
        Rate: "1471"
      },
      {
        Location: "Rhode Island",
        Rate: 1411
      },
      {
        Location: "South Carolina",
        Rate: 1389
      },
      {
        Location: "South Dakota",
        Rate: 1432
      },
      {
        Location: "Tennessee",
        Rate: 1376
      },
      {
        Location: "Texas",
        Rate: 1420
      },
      {
        Location: "U.S. Virgin Islands",
        Rate: "1383"
      },
      {
        Location: "Utah",
        Rate: 1380
      },
      {
        Location: "Vermont",
        Rate: 1429
      },
      {
        Location: "Virginia",
        Rate: 1441
      },
      {
        Location: "Washington",
        Rate: 1393
      },
      {
        Location: "West Virginia",
        Rate: 1397
      },
      {
        Location: "Wisconsin",
        Rate: 1430
      },
      {
        Location: "Wyoming",
        Rate: 1454
      }
    ],
    dataFileSize: 971,
    dataFileName: "dashboard_example_map.csv",
    dataFileSourceType: "file",
    dataFileFormat: "CSV",
    preview: !0
  }
}, Rt = {
  dashboard: Lt,
  rows: Tt,
  visualizations: ht,
  table: yt,
  type: At,
  uuid: gt,
  datasets: wt
}, St = {
  theme: "theme-blue",
  sharedFilters: [
    {
      key: "New Dashboard Filter 1",
      showDropdown: !0,
      values: [
        "Florida",
        "California"
      ],
      type: "datafilter",
      columnName: "State",
      tier: 1,
      usedBy: [
        "map1721943918271"
      ]
    }
  ]
}, Yt = [
  {
    columns: [
      {
        width: 12,
        widget: "dashboardFilters1721943964161"
      }
    ],
    uuid: 1721943975299
  },
  {
    uuid: 1721943975299,
    columns: [
      {
        width: 12,
        widget: "map1721943918271"
      },
      {},
      {}
    ]
  }
], ft = {
  map1721943918271: {
    annotations: [],
    general: {
      geoType: "single-state",
      annotationDropdownText: "Annotations",
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
      geoLabelOverride: "",
      hasRegions: !1,
      fullBorder: !1,
      type: "data",
      convertFipsCodes: !0,
      palette: {
        isReversed: !1
      },
      allowMapZoom: !0,
      hideGeoColumnInTooltip: !1,
      hidePrimaryColumnInTooltip: !1,
      expandDataTable: !1,
      filterControlsStatePicked: "State",
      statePicked: {
        fipsCode: "01",
        stateName: "Alabama"
      }
    },
    type: "map",
    color: "pinkpurple",
    columns: {
      geo: {
        name: "FIPS Codes",
        label: "Location",
        tooltip: !1,
        dataTable: !0
      },
      primary: {
        dataTable: !0,
        tooltip: !0,
        prefix: "",
        suffix: "",
        name: "Insured Rate",
        label: "",
        roundToPlace: 0
      },
      navigate: {
        name: ""
      },
      latitude: {
        name: "Latitude"
      },
      longitude: {
        name: "Longitude"
      }
    },
    legend: {
      descriptions: {},
      specialClasses: [],
      unified: !1,
      singleColumn: !1,
      singleRow: !1,
      verticalSorted: !1,
      showSpecialClassesLast: !1,
      dynamicDescription: !1,
      type: "equalnumber",
      numberOfItems: 3,
      position: "side",
      title: "Legend"
    },
    filters: [],
    table: {
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
    },
    tooltips: {
      appearanceType: "hover",
      linkLabel: "Learn More",
      capitalizeLabels: !0,
      opacity: 90
    },
    visual: {
      minBubbleSize: 1,
      maxBubbleSize: 20,
      extraBubbleBorder: !1,
      cityStyle: "circle",
      cityStyleLabel: "",
      showBubbleZeros: !1,
      additionalCityStyles: [],
      geoCodeCircleSize: "2"
    },
    mapPosition: {
      coordinates: [
        0,
        30
      ],
      zoom: 1
    },
    map: {
      layers: [],
      patterns: []
    },
    hexMap: {
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
    },
    filterBehavior: "Filter Change",
    openModal: !0,
    uid: "map1721943918271",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    dataKey: "test-single-county-file.json",
    editing: !1,
    originalFormattedData: [
      {
        "Insured Rate": 8,
        "Coverage Status": "Insured",
        "FIPS Codes": "12057",
        "Year (Good filter option)": "2010",
        link: "",
        Latitude: "",
        Longitude: "",
        State: "Florida"
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
        Longitude: "",
        State: "California"
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
        "FIPS Codes": "Yosemite",
        "Year (Good filter option)": "2010",
        link: "",
        Latitude: "37.865101",
        Longitude: "-119.538330",
        State: "California"
      }
    ],
    version: "4.24.9"
  },
  dashboardFilters1721943964161: {
    filters: [],
    filterBehavior: "Filter Change",
    newViz: !0,
    openModal: !0,
    uid: "dashboardFilters1721943964161",
    type: "dashboardFilters",
    sharedFilterIndexes: [
      0
    ],
    visualizationType: "dashboardFilters",
    editing: !1
  }
}, vt = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, bt = !0, Ft = {
  "test-single-county-file.json": {
    data: [
      {
        "Insured Rate": 8,
        "Coverage Status": "Insured",
        "FIPS Codes": "12057",
        "Year (Good filter option)": "2010",
        link: "",
        Latitude: "",
        Longitude: "",
        State: "Florida"
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
        Longitude: "",
        State: "California"
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
        "FIPS Codes": "Yosemite",
        "Year (Good filter option)": "2010",
        link: "",
        Latitude: "37.865101",
        Longitude: "-119.538330",
        State: "California"
      }
    ],
    dataFileSize: 1764,
    dataFileName: "test-single-county-file.json",
    dataFileSourceType: "file",
    dataFileFormat: "JSON",
    preview: !0
  }
}, kt = "dashboard", Ct = {}, Mt = "4.24.9", Nt = 1721943961122, Dt = {
  dashboard: St,
  rows: Yt,
  visualizations: ft,
  table: vt,
  newViz: bt,
  datasets: Ft,
  type: kt,
  runtime: Ct,
  version: Mt,
  uuid: Nt
}, Ht = {
  theme: "theme-blue",
  sharedFilters: [
    {
      key: "Year",
      type: "datafilter",
      columnName: "Year",
      showDropdown: !0,
      setBy: "chart1699383531543",
      usedBy: [
        "map1699383540561"
      ],
      resetLabel: "Reset",
      values: [
        "2019",
        "2020",
        "2021"
      ],
      active: "2021",
      tier: 1
    }
  ]
}, Vt = [
  [
    {
      width: 12,
      widget: "chart1699383531543"
    },
    {},
    {}
  ],
  [
    {
      width: 12,
      widget: "map1699383540561"
    },
    {
      equalHeight: !1
    },
    {},
    {}
  ]
], It = {
  chart1699383531543: {
    type: "chart",
    debugSvg: !1,
    chartMessage: {
      noData: "No Data Available"
    },
    title: "",
    showTitle: !0,
    showDownloadMediaButton: !1,
    showChartBrush: !1,
    theme: "theme-blue",
    animate: !1,
    fontSize: "medium",
    lineDatapointStyle: "hover",
    barHasBorder: "false",
    isLollipopChart: !1,
    lollipopShape: "circle",
    lollipopColorStyle: "two-tone",
    visualizationSubType: "regular",
    barStyle: "",
    roundingStyle: "standard",
    tipRounding: "top",
    isResponsiveTicks: !1,
    general: {
      showDownloadButton: !1
    },
    padding: {
      left: 5,
      right: 5
    },
    yAxis: {
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
    },
    boxplot: {
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
    },
    topAxis: {
      hasLine: !1
    },
    isLegendValue: !1,
    barThickness: 0.35,
    barHeight: 25,
    barSpace: 15,
    heights: {
      vertical: 300,
      horizontal: 750
    },
    xAxis: {
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
      axisPadding: 0,
      target: 0,
      maxTickRotation: 0,
      dataKey: "Year"
    },
    table: {
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
      show: !1
    },
    orientation: "vertical",
    color: "pinkpurple",
    columns: {},
    legend: {
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
    },
    exclusions: {
      active: !1,
      keys: []
    },
    palette: "qualitative-bold",
    isPaletteReversed: !1,
    twoColor: {
      palette: "monochrome-1",
      isPaletteReversed: !1
    },
    labels: !1,
    dataFormat: {
      commas: !1,
      prefix: "",
      suffix: "",
      abbreviated: !1,
      bottomSuffix: "",
      bottomPrefix: "",
      bottomAbbreviated: !1
    },
    confidenceKeys: {},
    visual: {
      border: !0,
      accent: !0,
      background: !0,
      verticalHoverLine: !1,
      horizontalHoverLine: !1
    },
    useLogScale: !1,
    filterBehavior: "Filter Change",
    highlightedBarValues: [],
    series: [
      {
        dataKey: "Amount",
        type: "Bar",
        axis: "Left",
        tooltip: !0
      }
    ],
    tooltips: {
      opacity: 90
    },
    forestPlot: {
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
    },
    brush: {
      pattern_id: "brush_pattern",
      accent_color: "#ddd"
    },
    area: {
      isStacked: !1
    },
    openModal: !1,
    uid: "chart1699383531543",
    visualizationType: "Bar",
    dataKey: "dashboard_aggregate_example_state_type (1).csv",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    editing: !1,
    validated: 4.23,
    filters: [
      {
        values: [
          "Alabama",
          "Alaska",
          "American Samoa",
          "Arizona",
          "Arkansas",
          "California",
          "Colorado",
          "Connecticut",
          "Delaware	",
          "District of Columbia",
          "Florida	",
          "Georgia	",
          "Guam",
          "Hawaii	",
          "Idaho",
          "Illinois	",
          "Indiana	",
          "Iowa",
          "Kansas",
          "Kansas	",
          "Kentucky",
          "Louisiana",
          "Maine	",
          "Marshall Islands",
          "Maryland",
          "Massachusetts",
          "Michigan",
          "Minnesota",
          "Mississippi",
          "Missouri",
          "Montana",
          "Nebraska",
          "Nevada",
          "New Hampshire",
          "New Jersey",
          "New Mexico",
          "New York",
          "North Carolina",
          "North Dakota",
          "Northern Mariana Islands",
          "Ohio",
          "Oklahoma",
          "Oregon",
          "Pennsylvania",
          "Puerto Rico",
          "Republic of Palau",
          "Rhode Island",
          "South Carolina",
          "South Dakota",
          "Tennessee",
          "Texas",
          "U.S. Virgin Islands",
          "Utah",
          "Vermont",
          "Virginia",
          "Washington",
          "West Virginia",
          "Wisconsin",
          "Wyoming"
        ],
        active: "Alabama",
        filterStyle: "dropdown",
        columnName: "Location",
        label: "Location",
        order: "asc"
      },
      {
        values: [
          "Federal",
          "Local",
          "State"
        ],
        active: "Federal",
        filterStyle: "dropdown",
        columnName: "Type",
        label: "Type",
        order: "asc"
      }
    ],
    dynamicMarginTop: 0,
    formattedData: [
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Federal",
        Amount: 1377
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Local",
        Amount: 1613
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "State",
        Amount: 1495
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "Federal",
        Amount: 1377
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "Local",
        Amount: 1613
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "State",
        Amount: 1495
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "Federal",
        Amount: 1436
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "Local",
        Amount: 1672
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "State",
        Amount: 1554
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "Federal",
        Amount: 1375
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "Local",
        Amount: 1611
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "State",
        Amount: 1493
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "Federal",
        Amount: 1375
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "Local",
        Amount: 1611
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "State",
        Amount: 1493
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "Federal",
        Amount: 1434
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "Local",
        Amount: 1670
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "State",
        Amount: 1552
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "Federal",
        Amount: 1398
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "Local",
        Amount: 1634
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "State",
        Amount: 1516
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "Federal",
        Amount: 1398
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "Local",
        Amount: 1634
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "State",
        Amount: 1516
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "Federal",
        Amount: 1457
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "Local",
        Amount: 1693
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "State",
        Amount: 1575
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "Federal",
        Amount: 1388
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "Local",
        Amount: 1624
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "State",
        Amount: 1506
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "Federal",
        Amount: 1388
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "Local",
        Amount: 1624
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "State",
        Amount: 1506
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "Federal",
        Amount: 1447
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "Local",
        Amount: 1683
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "State",
        Amount: 1565
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "Federal",
        Amount: 1401
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "Local",
        Amount: 1637
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "State",
        Amount: 1519
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "Federal",
        Amount: 1401
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "Local",
        Amount: 1637
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "State",
        Amount: 1519
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "Federal",
        Amount: 1460
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "Local",
        Amount: 1696
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "State",
        Amount: 1578
      },
      {
        Location: "California",
        Year: "2019",
        Type: "Federal",
        Amount: 1381
      },
      {
        Location: "California",
        Year: "2019",
        Type: "Local",
        Amount: 1617
      },
      {
        Location: "California",
        Year: "2019",
        Type: "State",
        Amount: 1499
      },
      {
        Location: "California",
        Year: "2020",
        Type: "Federal",
        Amount: 1381
      },
      {
        Location: "California",
        Year: "2020",
        Type: "Local",
        Amount: 1617
      },
      {
        Location: "California",
        Year: "2020",
        Type: "State",
        Amount: 1499
      },
      {
        Location: "California",
        Year: "2021",
        Type: "Federal",
        Amount: 1440
      },
      {
        Location: "California",
        Year: "2021",
        Type: "Local",
        Amount: 1676
      },
      {
        Location: "California",
        Year: "2021",
        Type: "State",
        Amount: 1558
      },
      {
        Location: "Colorado",
        Year: "2019",
        Type: "Federal",
        Amount: 1369
      },
      {
        Location: "Colorado",
        Year: "2019",
        Type: "Local",
        Amount: 1605
      },
      {
        Location: "Colorado",
        Year: "2019",
        Type: "State",
        Amount: 1487
      },
      {
        Location: "Colorado",
        Year: "2020",
        Type: "Federal",
        Amount: 1369
      },
      {
        Location: "Colorado",
        Year: "2020",
        Type: "Local",
        Amount: 1605
      },
      {
        Location: "Colorado",
        Year: "2020",
        Type: "State",
        Amount: 1487
      },
      {
        Location: "Colorado",
        Year: "2021",
        Type: "Federal",
        Amount: 1428
      },
      {
        Location: "Colorado",
        Year: "2021",
        Type: "Local",
        Amount: 1664
      },
      {
        Location: "Colorado",
        Year: "2021",
        Type: "State",
        Amount: 1546
      },
      {
        Location: "Connecticut",
        Year: "2019",
        Type: "Federal",
        Amount: 1403
      },
      {
        Location: "Connecticut",
        Year: "2019",
        Type: "Local",
        Amount: 1639
      },
      {
        Location: "Connecticut",
        Year: "2019",
        Type: "State",
        Amount: 1521
      },
      {
        Location: "Connecticut",
        Year: "2020",
        Type: "Federal",
        Amount: 1403
      },
      {
        Location: "Connecticut",
        Year: "2020",
        Type: "Local",
        Amount: 1639
      },
      {
        Location: "Connecticut",
        Year: "2020",
        Type: "State",
        Amount: 1521
      },
      {
        Location: "Connecticut",
        Year: "2021",
        Type: "Federal",
        Amount: 1462
      },
      {
        Location: "Connecticut",
        Year: "2021",
        Type: "Local",
        Amount: 1698
      },
      {
        Location: "Connecticut",
        Year: "2021",
        Type: "State",
        Amount: 1580
      },
      {
        Location: "District of Columbia",
        Year: "2019",
        Type: "Federal",
        Amount: 1400
      },
      {
        Location: "District of Columbia",
        Year: "2019",
        Type: "Local",
        Amount: 1636
      },
      {
        Location: "District of Columbia",
        Year: "2019",
        Type: "State",
        Amount: 1518
      },
      {
        Location: "District of Columbia",
        Year: "2020",
        Type: "Federal",
        Amount: 1400
      },
      {
        Location: "District of Columbia",
        Year: "2020",
        Type: "Local",
        Amount: 1636
      },
      {
        Location: "District of Columbia",
        Year: "2020",
        Type: "State",
        Amount: 1518
      },
      {
        Location: "District of Columbia",
        Year: "2021",
        Type: "Federal",
        Amount: 1459
      },
      {
        Location: "District of Columbia",
        Year: "2021",
        Type: "Local",
        Amount: 1695
      },
      {
        Location: "District of Columbia",
        Year: "2021",
        Type: "State",
        Amount: 1577
      },
      {
        Location: "Delaware	",
        Year: "2019",
        Type: "Federal",
        Amount: "1384"
      },
      {
        Location: "Delaware	",
        Year: "2019",
        Type: "Local",
        Amount: "1620"
      },
      {
        Location: "Delaware	",
        Year: "2019",
        Type: "State",
        Amount: "1502"
      },
      {
        Location: "Delaware	",
        Year: "2020",
        Type: "Federal",
        Amount: "1384"
      },
      {
        Location: "Delaware	",
        Year: "2020",
        Type: "Local",
        Amount: "1620"
      },
      {
        Location: "Delaware	",
        Year: "2020",
        Type: "State",
        Amount: "1502"
      },
      {
        Location: "Delaware	",
        Year: "2021",
        Type: "Federal",
        Amount: "1443"
      },
      {
        Location: "Delaware	",
        Year: "2021",
        Type: "Local",
        Amount: "1679"
      },
      {
        Location: "Delaware	",
        Year: "2021",
        Type: "State",
        Amount: "1561"
      },
      {
        Location: "Florida	",
        Year: "2019",
        Type: "Federal",
        Amount: "1387"
      },
      {
        Location: "Florida	",
        Year: "2019",
        Type: "Local",
        Amount: "1623"
      },
      {
        Location: "Florida	",
        Year: "2019",
        Type: "State",
        Amount: "1505"
      },
      {
        Location: "Florida	",
        Year: "2020",
        Type: "Federal",
        Amount: "1387"
      },
      {
        Location: "Florida	",
        Year: "2020",
        Type: "Local",
        Amount: "1623"
      },
      {
        Location: "Florida	",
        Year: "2020",
        Type: "State",
        Amount: "1505"
      },
      {
        Location: "Florida	",
        Year: "2021",
        Type: "Federal",
        Amount: "1446"
      },
      {
        Location: "Florida	",
        Year: "2021",
        Type: "Local",
        Amount: "1682"
      },
      {
        Location: "Florida	",
        Year: "2021",
        Type: "State",
        Amount: "1564"
      },
      {
        Location: "Georgia	",
        Year: "2019",
        Type: "Federal",
        Amount: "1365"
      },
      {
        Location: "Georgia	",
        Year: "2019",
        Type: "Local",
        Amount: "1601"
      },
      {
        Location: "Georgia	",
        Year: "2019",
        Type: "State",
        Amount: "1483"
      },
      {
        Location: "Georgia	",
        Year: "2020",
        Type: "Federal",
        Amount: "1365"
      },
      {
        Location: "Georgia	",
        Year: "2020",
        Type: "Local",
        Amount: "1601"
      },
      {
        Location: "Georgia	",
        Year: "2020",
        Type: "State",
        Amount: "1483"
      },
      {
        Location: "Georgia	",
        Year: "2021",
        Type: "Federal",
        Amount: "1424"
      },
      {
        Location: "Georgia	",
        Year: "2021",
        Type: "Local",
        Amount: "1660"
      },
      {
        Location: "Georgia	",
        Year: "2021",
        Type: "State",
        Amount: "1542"
      },
      {
        Location: "Guam",
        Year: "2019",
        Type: "Federal",
        Amount: 1356
      },
      {
        Location: "Guam",
        Year: "2019",
        Type: "Local",
        Amount: 1592
      },
      {
        Location: "Guam",
        Year: "2019",
        Type: "State",
        Amount: 1474
      },
      {
        Location: "Guam",
        Year: "2020",
        Type: "Federal",
        Amount: 1356
      },
      {
        Location: "Guam",
        Year: "2020",
        Type: "Local",
        Amount: 1592
      },
      {
        Location: "Guam",
        Year: "2020",
        Type: "State",
        Amount: 1474
      },
      {
        Location: "Guam",
        Year: "2021",
        Type: "Federal",
        Amount: 1415
      },
      {
        Location: "Guam",
        Year: "2021",
        Type: "Local",
        Amount: 1651
      },
      {
        Location: "Guam",
        Year: "2021",
        Type: "State",
        Amount: 1533
      },
      {
        Location: "Hawaii	",
        Year: "2019",
        Type: "Federal",
        Amount: "1362"
      },
      {
        Location: "Hawaii	",
        Year: "2019",
        Type: "Local",
        Amount: "1598"
      },
      {
        Location: "Hawaii	",
        Year: "2019",
        Type: "State",
        Amount: "1480"
      },
      {
        Location: "Hawaii	",
        Year: "2020",
        Type: "Federal",
        Amount: "1362"
      },
      {
        Location: "Hawaii	",
        Year: "2020",
        Type: "Local",
        Amount: "1598"
      },
      {
        Location: "Hawaii	",
        Year: "2020",
        Type: "State",
        Amount: "1480"
      },
      {
        Location: "Hawaii	",
        Year: "2021",
        Type: "Federal",
        Amount: "1421"
      },
      {
        Location: "Hawaii	",
        Year: "2021",
        Type: "Local",
        Amount: "1657"
      },
      {
        Location: "Hawaii	",
        Year: "2021",
        Type: "State",
        Amount: "1539"
      },
      {
        Location: "Iowa",
        Year: "2019",
        Type: "Federal",
        Amount: 1394
      },
      {
        Location: "Iowa",
        Year: "2019",
        Type: "Local",
        Amount: 1630
      },
      {
        Location: "Iowa",
        Year: "2019",
        Type: "State",
        Amount: 1512
      },
      {
        Location: "Iowa",
        Year: "2020",
        Type: "Federal",
        Amount: 1394
      },
      {
        Location: "Iowa",
        Year: "2020",
        Type: "Local",
        Amount: 1630
      },
      {
        Location: "Iowa",
        Year: "2020",
        Type: "State",
        Amount: 1512
      },
      {
        Location: "Iowa",
        Year: "2021",
        Type: "Federal",
        Amount: 1453
      },
      {
        Location: "Iowa",
        Year: "2021",
        Type: "Local",
        Amount: 1689
      },
      {
        Location: "Iowa",
        Year: "2021",
        Type: "State",
        Amount: 1571
      },
      {
        Location: "Idaho",
        Year: "2019",
        Type: "Federal",
        Amount: 1374
      },
      {
        Location: "Idaho",
        Year: "2019",
        Type: "Local",
        Amount: 1610
      },
      {
        Location: "Idaho",
        Year: "2019",
        Type: "State",
        Amount: 1492
      },
      {
        Location: "Idaho",
        Year: "2020",
        Type: "Federal",
        Amount: 1374
      },
      {
        Location: "Idaho",
        Year: "2020",
        Type: "Local",
        Amount: 1610
      },
      {
        Location: "Idaho",
        Year: "2020",
        Type: "State",
        Amount: 1492
      },
      {
        Location: "Idaho",
        Year: "2021",
        Type: "Federal",
        Amount: 1433
      },
      {
        Location: "Idaho",
        Year: "2021",
        Type: "Local",
        Amount: 1669
      },
      {
        Location: "Idaho",
        Year: "2021",
        Type: "State",
        Amount: 1551
      },
      {
        Location: "Illinois	",
        Year: "2019",
        Type: "Federal",
        Amount: "1402"
      },
      {
        Location: "Illinois	",
        Year: "2019",
        Type: "Local",
        Amount: "1638"
      },
      {
        Location: "Illinois	",
        Year: "2019",
        Type: "State",
        Amount: "1520"
      },
      {
        Location: "Illinois	",
        Year: "2020",
        Type: "Federal",
        Amount: "1402"
      },
      {
        Location: "Illinois	",
        Year: "2020",
        Type: "Local",
        Amount: "1638"
      },
      {
        Location: "Illinois	",
        Year: "2020",
        Type: "State",
        Amount: "1520"
      },
      {
        Location: "Illinois	",
        Year: "2021",
        Type: "Federal",
        Amount: "1461"
      },
      {
        Location: "Illinois	",
        Year: "2021",
        Type: "Local",
        Amount: "1697"
      },
      {
        Location: "Illinois	",
        Year: "2021",
        Type: "State",
        Amount: "1579"
      },
      {
        Location: "Indiana	",
        Year: "2019",
        Type: "Federal",
        Amount: "1404"
      },
      {
        Location: "Indiana	",
        Year: "2019",
        Type: "Local",
        Amount: "1640"
      },
      {
        Location: "Indiana	",
        Year: "2019",
        Type: "State",
        Amount: "1522"
      },
      {
        Location: "Indiana	",
        Year: "2020",
        Type: "Federal",
        Amount: "1404"
      },
      {
        Location: "Indiana	",
        Year: "2020",
        Type: "Local",
        Amount: "1640"
      },
      {
        Location: "Indiana	",
        Year: "2020",
        Type: "State",
        Amount: "1522"
      },
      {
        Location: "Indiana	",
        Year: "2021",
        Type: "Federal",
        Amount: "1463"
      },
      {
        Location: "Indiana	",
        Year: "2021",
        Type: "Local",
        Amount: "1699"
      },
      {
        Location: "Indiana	",
        Year: "2021",
        Type: "State",
        Amount: "1581"
      },
      {
        Location: "Kansas	",
        Year: "2019",
        Type: "Federal",
        Amount: "1367"
      },
      {
        Location: "Kansas	",
        Year: "2019",
        Type: "Local",
        Amount: "1603"
      },
      {
        Location: "Kansas	",
        Year: "2019",
        Type: "State",
        Amount: "1485"
      },
      {
        Location: "Kansas	",
        Year: "2020",
        Type: "Federal",
        Amount: "1367"
      },
      {
        Location: "Kansas	",
        Year: "2020",
        Type: "Local",
        Amount: "1603"
      },
      {
        Location: "Kansas	",
        Year: "2020",
        Type: "State",
        Amount: "1485"
      },
      {
        Location: "Kansas",
        Year: "2021",
        Type: "Federal",
        Amount: 1426
      },
      {
        Location: "Kansas",
        Year: "2021",
        Type: "Local",
        Amount: 1662
      },
      {
        Location: "Kansas",
        Year: "2021",
        Type: "State",
        Amount: 1544
      },
      {
        Location: "Kentucky",
        Year: "2019",
        Type: "Federal",
        Amount: 1359
      },
      {
        Location: "Kentucky",
        Year: "2019",
        Type: "Local",
        Amount: 1595
      },
      {
        Location: "Kentucky",
        Year: "2019",
        Type: "State",
        Amount: 1477
      },
      {
        Location: "Kentucky",
        Year: "2020",
        Type: "Federal",
        Amount: 1359
      },
      {
        Location: "Kentucky",
        Year: "2020",
        Type: "Local",
        Amount: 1595
      },
      {
        Location: "Kentucky",
        Year: "2020",
        Type: "State",
        Amount: 1477
      },
      {
        Location: "Kentucky",
        Year: "2021",
        Type: "Federal",
        Amount: 1418
      },
      {
        Location: "Kentucky",
        Year: "2021",
        Type: "Local",
        Amount: 1654
      },
      {
        Location: "Kentucky",
        Year: "2021",
        Type: "State",
        Amount: 1536
      },
      {
        Location: "Louisiana",
        Year: "2019",
        Type: "Federal",
        Amount: 1409
      },
      {
        Location: "Louisiana",
        Year: "2019",
        Type: "Local",
        Amount: 1645
      },
      {
        Location: "Louisiana",
        Year: "2019",
        Type: "State",
        Amount: 1527
      },
      {
        Location: "Louisiana",
        Year: "2020",
        Type: "Federal",
        Amount: 1409
      },
      {
        Location: "Louisiana",
        Year: "2020",
        Type: "Local",
        Amount: 1645
      },
      {
        Location: "Louisiana",
        Year: "2020",
        Type: "State",
        Amount: 1527
      },
      {
        Location: "Louisiana",
        Year: "2021",
        Type: "Federal",
        Amount: 1468
      },
      {
        Location: "Louisiana",
        Year: "2021",
        Type: "Local",
        Amount: 1704
      },
      {
        Location: "Louisiana",
        Year: "2021",
        Type: "State",
        Amount: 1586
      },
      {
        Location: "Massachusetts",
        Year: "2019",
        Type: "Federal",
        Amount: 1366
      },
      {
        Location: "Massachusetts",
        Year: "2019",
        Type: "Local",
        Amount: 1602
      },
      {
        Location: "Massachusetts",
        Year: "2019",
        Type: "State",
        Amount: 1484
      },
      {
        Location: "Massachusetts",
        Year: "2020",
        Type: "Federal",
        Amount: 1366
      },
      {
        Location: "Massachusetts",
        Year: "2020",
        Type: "Local",
        Amount: 1602
      },
      {
        Location: "Massachusetts",
        Year: "2020",
        Type: "State",
        Amount: 1484
      },
      {
        Location: "Massachusetts",
        Year: "2021",
        Type: "Federal",
        Amount: 1425
      },
      {
        Location: "Massachusetts",
        Year: "2021",
        Type: "Local",
        Amount: 1661
      },
      {
        Location: "Massachusetts",
        Year: "2021",
        Type: "State",
        Amount: 1543
      },
      {
        Location: "Maryland",
        Year: "2019",
        Type: "Federal",
        Amount: 1386
      },
      {
        Location: "Maryland",
        Year: "2019",
        Type: "Local",
        Amount: 1622
      },
      {
        Location: "Maryland",
        Year: "2019",
        Type: "State",
        Amount: 1504
      },
      {
        Location: "Maryland",
        Year: "2020",
        Type: "Federal",
        Amount: 1386
      },
      {
        Location: "Maryland",
        Year: "2020",
        Type: "Local",
        Amount: 1622
      },
      {
        Location: "Maryland",
        Year: "2020",
        Type: "State",
        Amount: 1504
      },
      {
        Location: "Maryland",
        Year: "2021",
        Type: "Federal",
        Amount: 1445
      },
      {
        Location: "Maryland",
        Year: "2021",
        Type: "Local",
        Amount: 1681
      },
      {
        Location: "Maryland",
        Year: "2021",
        Type: "State",
        Amount: 1563
      },
      {
        Location: "Maine	",
        Year: "2019",
        Type: "Federal",
        Amount: "1385"
      },
      {
        Location: "Maine	",
        Year: "2019",
        Type: "Local",
        Amount: "1621"
      },
      {
        Location: "Maine	",
        Year: "2019",
        Type: "State",
        Amount: "1503"
      },
      {
        Location: "Maine	",
        Year: "2020",
        Type: "Federal",
        Amount: "1385"
      },
      {
        Location: "Maine	",
        Year: "2020",
        Type: "Local",
        Amount: "1621"
      },
      {
        Location: "Maine	",
        Year: "2020",
        Type: "State",
        Amount: "1503"
      },
      {
        Location: "Maine	",
        Year: "2021",
        Type: "Federal",
        Amount: "1444"
      },
      {
        Location: "Maine	",
        Year: "2021",
        Type: "Local",
        Amount: "1680"
      },
      {
        Location: "Maine	",
        Year: "2021",
        Type: "State",
        Amount: "1562"
      },
      {
        Location: "Marshall Islands",
        Year: "2019",
        Type: "Federal",
        Amount: 1408
      },
      {
        Location: "Marshall Islands",
        Year: "2019",
        Type: "Local",
        Amount: 1644
      },
      {
        Location: "Marshall Islands",
        Year: "2019",
        Type: "State",
        Amount: 1526
      },
      {
        Location: "Marshall Islands",
        Year: "2020",
        Type: "Federal",
        Amount: 1408
      },
      {
        Location: "Marshall Islands",
        Year: "2020",
        Type: "Local",
        Amount: 1644
      },
      {
        Location: "Marshall Islands",
        Year: "2020",
        Type: "State",
        Amount: 1526
      },
      {
        Location: "Marshall Islands",
        Year: "2021",
        Type: "Federal",
        Amount: 1467
      },
      {
        Location: "Marshall Islands",
        Year: "2021",
        Type: "Local",
        Amount: 1703
      },
      {
        Location: "Marshall Islands",
        Year: "2021",
        Type: "State",
        Amount: 1585
      },
      {
        Location: "Michigan",
        Year: "2019",
        Type: "Federal",
        Amount: 1390
      },
      {
        Location: "Michigan",
        Year: "2019",
        Type: "Local",
        Amount: 4011
      },
      {
        Location: "Michigan",
        Year: "2019",
        Type: "State",
        Amount: 1508
      },
      {
        Location: "Michigan",
        Year: "2020",
        Type: "Federal",
        Amount: 1390
      },
      {
        Location: "Michigan",
        Year: "2020",
        Type: "Local",
        Amount: 4111
      },
      {
        Location: "Michigan",
        Year: "2020",
        Type: "State",
        Amount: 1508
      },
      {
        Location: "Michigan",
        Year: "2021",
        Type: "Federal",
        Amount: 1449
      },
      {
        Location: "Michigan",
        Year: "2021",
        Type: "Local",
        Amount: 1685
      },
      {
        Location: "Michigan",
        Year: "2021",
        Type: "State",
        Amount: 1567
      },
      {
        Location: "Minnesota",
        Year: "2019",
        Type: "Federal",
        Amount: 1392
      },
      {
        Location: "Minnesota",
        Year: "2019",
        Type: "Local",
        Amount: 1628
      },
      {
        Location: "Minnesota",
        Year: "2019",
        Type: "State",
        Amount: 1510
      },
      {
        Location: "Minnesota",
        Year: "2020",
        Type: "Federal",
        Amount: 1392
      },
      {
        Location: "Minnesota",
        Year: "2020",
        Type: "Local",
        Amount: 1628
      },
      {
        Location: "Minnesota",
        Year: "2020",
        Type: "State",
        Amount: 1510
      },
      {
        Location: "Minnesota",
        Year: "2021",
        Type: "Federal",
        Amount: 1451
      },
      {
        Location: "Minnesota",
        Year: "2021",
        Type: "Local",
        Amount: 1687
      },
      {
        Location: "Minnesota",
        Year: "2021",
        Type: "State",
        Amount: 1569
      },
      {
        Location: "Missouri",
        Year: "2019",
        Type: "Federal",
        Amount: 1378
      },
      {
        Location: "Missouri",
        Year: "2019",
        Type: "Local",
        Amount: 1614
      },
      {
        Location: "Missouri",
        Year: "2019",
        Type: "State",
        Amount: 1496
      },
      {
        Location: "Missouri",
        Year: "2020",
        Type: "Federal",
        Amount: 1378
      },
      {
        Location: "Missouri",
        Year: "2020",
        Type: "Local",
        Amount: 1614
      },
      {
        Location: "Missouri",
        Year: "2020",
        Type: "State",
        Amount: 1496
      },
      {
        Location: "Missouri",
        Year: "2021",
        Type: "Federal",
        Amount: 1437
      },
      {
        Location: "Missouri",
        Year: "2021",
        Type: "Local",
        Amount: 1673
      },
      {
        Location: "Missouri",
        Year: "2021",
        Type: "State",
        Amount: 1555
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2019",
        Type: "Federal",
        Amount: "1368"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2019",
        Type: "Local",
        Amount: "1604"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2019",
        Type: "State",
        Amount: "1486"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2020",
        Type: "Federal",
        Amount: "1368"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2020",
        Type: "Local",
        Amount: "1604"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2020",
        Type: "State",
        Amount: "1486"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2021",
        Type: "Federal",
        Amount: "1427"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2021",
        Type: "Local",
        Amount: "1663"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2021",
        Type: "State",
        Amount: "1545"
      },
      {
        Location: "Mississippi",
        Year: "2019",
        Type: "Federal",
        Amount: 1406
      },
      {
        Location: "Mississippi",
        Year: "2019",
        Type: "Local",
        Amount: 1642
      },
      {
        Location: "Mississippi",
        Year: "2019",
        Type: "State",
        Amount: 1524
      },
      {
        Location: "Mississippi",
        Year: "2020",
        Type: "Federal",
        Amount: 1406
      },
      {
        Location: "Mississippi",
        Year: "2020",
        Type: "Local",
        Amount: 1642
      },
      {
        Location: "Mississippi",
        Year: "2020",
        Type: "State",
        Amount: 1524
      },
      {
        Location: "Mississippi",
        Year: "2021",
        Type: "Federal",
        Amount: 1465
      },
      {
        Location: "Mississippi",
        Year: "2021",
        Type: "Local",
        Amount: 1701
      },
      {
        Location: "Mississippi",
        Year: "2021",
        Type: "State",
        Amount: 1583
      },
      {
        Location: "Montana",
        Year: "2019",
        Type: "Federal",
        Amount: 1364
      },
      {
        Location: "Montana",
        Year: "2019",
        Type: "Local",
        Amount: 1600
      },
      {
        Location: "Montana",
        Year: "2019",
        Type: "State",
        Amount: 1482
      },
      {
        Location: "Montana",
        Year: "2020",
        Type: "Federal",
        Amount: 1364
      },
      {
        Location: "Montana",
        Year: "2020",
        Type: "Local",
        Amount: 1600
      },
      {
        Location: "Montana",
        Year: "2020",
        Type: "State",
        Amount: 1482
      },
      {
        Location: "Montana",
        Year: "2021",
        Type: "Federal",
        Amount: 1423
      },
      {
        Location: "Montana",
        Year: "2021",
        Type: "Local",
        Amount: 1659
      },
      {
        Location: "Montana",
        Year: "2021",
        Type: "State",
        Amount: 1541
      },
      {
        Location: "North Carolina",
        Year: "2019",
        Type: "Federal",
        Amount: 1358
      },
      {
        Location: "North Carolina",
        Year: "2019",
        Type: "Local",
        Amount: 1594
      },
      {
        Location: "North Carolina",
        Year: "2019",
        Type: "State",
        Amount: 1476
      },
      {
        Location: "North Carolina",
        Year: "2020",
        Type: "Federal",
        Amount: 1358
      },
      {
        Location: "North Carolina",
        Year: "2020",
        Type: "Local",
        Amount: 1594
      },
      {
        Location: "North Carolina",
        Year: "2020",
        Type: "State",
        Amount: 1476
      },
      {
        Location: "North Carolina",
        Year: "2021",
        Type: "Federal",
        Amount: 1417
      },
      {
        Location: "North Carolina",
        Year: "2021",
        Type: "Local",
        Amount: 1653
      },
      {
        Location: "North Carolina",
        Year: "2021",
        Type: "State",
        Amount: 1535
      },
      {
        Location: "North Dakota",
        Year: "2019",
        Type: "Federal",
        Amount: 1355
      },
      {
        Location: "North Dakota",
        Year: "2019",
        Type: "Local",
        Amount: 1591
      },
      {
        Location: "North Dakota",
        Year: "2019",
        Type: "State",
        Amount: 1473
      },
      {
        Location: "North Dakota",
        Year: "2020",
        Type: "Federal",
        Amount: 1355
      },
      {
        Location: "North Dakota",
        Year: "2020",
        Type: "Local",
        Amount: 1591
      },
      {
        Location: "North Dakota",
        Year: "2020",
        Type: "State",
        Amount: 1473
      },
      {
        Location: "North Dakota",
        Year: "2021",
        Type: "Federal",
        Amount: 1414
      },
      {
        Location: "North Dakota",
        Year: "2021",
        Type: "Local",
        Amount: 1650
      },
      {
        Location: "North Dakota",
        Year: "2021",
        Type: "State",
        Amount: 1532
      },
      {
        Location: "Nebraska",
        Year: "2019",
        Type: "Federal",
        Amount: 1391
      },
      {
        Location: "Nebraska",
        Year: "2019",
        Type: "Local",
        Amount: 1627
      },
      {
        Location: "Nebraska",
        Year: "2019",
        Type: "State",
        Amount: 1509
      },
      {
        Location: "Nebraska",
        Year: "2020",
        Type: "Federal",
        Amount: 1391
      },
      {
        Location: "Nebraska",
        Year: "2020",
        Type: "Local",
        Amount: 1627
      },
      {
        Location: "Nebraska",
        Year: "2020",
        Type: "State",
        Amount: 1509
      },
      {
        Location: "Nebraska",
        Year: "2021",
        Type: "Federal",
        Amount: 1450
      },
      {
        Location: "Nebraska",
        Year: "2021",
        Type: "Local",
        Amount: 1686
      },
      {
        Location: "Nebraska",
        Year: "2021",
        Type: "State",
        Amount: 1568
      },
      {
        Location: "New Hampshire",
        Year: "2019",
        Type: "Federal",
        Amount: 1405
      },
      {
        Location: "New Hampshire",
        Year: "2019",
        Type: "Local",
        Amount: 1641
      },
      {
        Location: "New Hampshire",
        Year: "2019",
        Type: "State",
        Amount: 1523
      },
      {
        Location: "New Hampshire",
        Year: "2020",
        Type: "Federal",
        Amount: 1405
      },
      {
        Location: "New Hampshire",
        Year: "2020",
        Type: "Local",
        Amount: 1641
      },
      {
        Location: "New Hampshire",
        Year: "2020",
        Type: "State",
        Amount: 1523
      },
      {
        Location: "New Hampshire",
        Year: "2021",
        Type: "Federal",
        Amount: 1464
      },
      {
        Location: "New Hampshire",
        Year: "2021",
        Type: "Local",
        Amount: 1700
      },
      {
        Location: "New Hampshire",
        Year: "2021",
        Type: "State",
        Amount: 1582
      },
      {
        Location: "New Jersey",
        Year: "2019",
        Type: "Federal",
        Amount: 1410
      },
      {
        Location: "New Jersey",
        Year: "2019",
        Type: "Local",
        Amount: 1646
      },
      {
        Location: "New Jersey",
        Year: "2019",
        Type: "State",
        Amount: 1528
      },
      {
        Location: "New Jersey",
        Year: "2020",
        Type: "Federal",
        Amount: 1410
      },
      {
        Location: "New Jersey",
        Year: "2020",
        Type: "Local",
        Amount: 1646
      },
      {
        Location: "New Jersey",
        Year: "2020",
        Type: "State",
        Amount: 1528
      },
      {
        Location: "New Jersey",
        Year: "2021",
        Type: "Federal",
        Amount: 1469
      },
      {
        Location: "New Jersey",
        Year: "2021",
        Type: "Local",
        Amount: 1705
      },
      {
        Location: "New Jersey",
        Year: "2021",
        Type: "State",
        Amount: 1587
      },
      {
        Location: "New Mexico",
        Year: "2019",
        Type: "Federal",
        Amount: 1399
      },
      {
        Location: "New Mexico",
        Year: "2019",
        Type: "Local",
        Amount: 1635
      },
      {
        Location: "New Mexico",
        Year: "2019",
        Type: "State",
        Amount: 1517
      },
      {
        Location: "New Mexico",
        Year: "2020",
        Type: "Federal",
        Amount: 1399
      },
      {
        Location: "New Mexico",
        Year: "2020",
        Type: "Local",
        Amount: 1635
      },
      {
        Location: "New Mexico",
        Year: "2020",
        Type: "State",
        Amount: 1517
      },
      {
        Location: "New Mexico",
        Year: "2021",
        Type: "Federal",
        Amount: 1458
      },
      {
        Location: "New Mexico",
        Year: "2021",
        Type: "Local",
        Amount: 1694
      },
      {
        Location: "New Mexico",
        Year: "2021",
        Type: "State",
        Amount: 1576
      },
      {
        Location: "Nevada",
        Year: "2019",
        Type: "Federal",
        Amount: 1357
      },
      {
        Location: "Nevada",
        Year: "2019",
        Type: "Local",
        Amount: 1593
      },
      {
        Location: "Nevada",
        Year: "2019",
        Type: "State",
        Amount: 1475
      },
      {
        Location: "Nevada",
        Year: "2020",
        Type: "Federal",
        Amount: 1357
      },
      {
        Location: "Nevada",
        Year: "2020",
        Type: "Local",
        Amount: 1593
      },
      {
        Location: "Nevada",
        Year: "2020",
        Type: "State",
        Amount: 1475
      },
      {
        Location: "Nevada",
        Year: "2021",
        Type: "Federal",
        Amount: 1416
      },
      {
        Location: "Nevada",
        Year: "2021",
        Type: "Local",
        Amount: 1652
      },
      {
        Location: "Nevada",
        Year: "2021",
        Type: "State",
        Amount: 1534
      },
      {
        Location: "New York",
        Year: "2019",
        Type: "Federal",
        Amount: 1360
      },
      {
        Location: "New York",
        Year: "2019",
        Type: "Local",
        Amount: 1596
      },
      {
        Location: "New York",
        Year: "2019",
        Type: "State",
        Amount: 1478
      },
      {
        Location: "New York",
        Year: "2020",
        Type: "Federal",
        Amount: 1360
      },
      {
        Location: "New York",
        Year: "2020",
        Type: "Local",
        Amount: 1596
      },
      {
        Location: "New York",
        Year: "2020",
        Type: "State",
        Amount: 1478
      },
      {
        Location: "New York",
        Year: "2021",
        Type: "Federal",
        Amount: 1419
      },
      {
        Location: "New York",
        Year: "2021",
        Type: "Local",
        Amount: 1655
      },
      {
        Location: "New York",
        Year: "2021",
        Type: "State",
        Amount: 1537
      },
      {
        Location: "Ohio",
        Year: "2019",
        Type: "Federal",
        Amount: 1407
      },
      {
        Location: "Ohio",
        Year: "2019",
        Type: "Local",
        Amount: 1643
      },
      {
        Location: "Ohio",
        Year: "2019",
        Type: "State",
        Amount: 1525
      },
      {
        Location: "Ohio",
        Year: "2020",
        Type: "Federal",
        Amount: 1407
      },
      {
        Location: "Ohio",
        Year: "2020",
        Type: "Local",
        Amount: 1643
      },
      {
        Location: "Ohio",
        Year: "2020",
        Type: "State",
        Amount: 1525
      },
      {
        Location: "Ohio",
        Year: "2021",
        Type: "Federal",
        Amount: 1466
      },
      {
        Location: "Ohio",
        Year: "2021",
        Type: "Local",
        Amount: 1702
      },
      {
        Location: "Ohio",
        Year: "2021",
        Type: "State",
        Amount: 1584
      },
      {
        Location: "Oklahoma",
        Year: "2019",
        Type: "Federal",
        Amount: 1372
      },
      {
        Location: "Oklahoma",
        Year: "2019",
        Type: "Local",
        Amount: 1608
      },
      {
        Location: "Oklahoma",
        Year: "2019",
        Type: "State",
        Amount: 1490
      },
      {
        Location: "Oklahoma",
        Year: "2020",
        Type: "Federal",
        Amount: 1372
      },
      {
        Location: "Oklahoma",
        Year: "2020",
        Type: "Local",
        Amount: 1608
      },
      {
        Location: "Oklahoma",
        Year: "2020",
        Type: "State",
        Amount: 1490
      },
      {
        Location: "Oklahoma",
        Year: "2021",
        Type: "Federal",
        Amount: 1431
      },
      {
        Location: "Oklahoma",
        Year: "2021",
        Type: "Local",
        Amount: 1667
      },
      {
        Location: "Oklahoma",
        Year: "2021",
        Type: "State",
        Amount: 1549
      },
      {
        Location: "Oregon",
        Year: "2019",
        Type: "Federal",
        Amount: 1379
      },
      {
        Location: "Oregon",
        Year: "2019",
        Type: "Local",
        Amount: 1615
      },
      {
        Location: "Oregon",
        Year: "2019",
        Type: "State",
        Amount: 1497
      },
      {
        Location: "Oregon",
        Year: "2020",
        Type: "Federal",
        Amount: 1379
      },
      {
        Location: "Oregon",
        Year: "2020",
        Type: "Local",
        Amount: 1615
      },
      {
        Location: "Oregon",
        Year: "2020",
        Type: "State",
        Amount: 1497
      },
      {
        Location: "Oregon",
        Year: "2021",
        Type: "Federal",
        Amount: 1438
      },
      {
        Location: "Oregon",
        Year: "2021",
        Type: "Local",
        Amount: 1674
      },
      {
        Location: "Oregon",
        Year: "2021",
        Type: "State",
        Amount: 1556
      },
      {
        Location: "Pennsylvania",
        Year: "2019",
        Type: "Federal",
        Amount: 1354
      },
      {
        Location: "Pennsylvania",
        Year: "2019",
        Type: "Local",
        Amount: 1590
      },
      {
        Location: "Pennsylvania",
        Year: "2019",
        Type: "State",
        Amount: 1472
      },
      {
        Location: "Pennsylvania",
        Year: "2020",
        Type: "Federal",
        Amount: 1354
      },
      {
        Location: "Pennsylvania",
        Year: "2020",
        Type: "Local",
        Amount: 1590
      },
      {
        Location: "Pennsylvania",
        Year: "2020",
        Type: "State",
        Amount: 1472
      },
      {
        Location: "Pennsylvania",
        Year: "2021",
        Type: "Federal",
        Amount: 1413
      },
      {
        Location: "Pennsylvania",
        Year: "2021",
        Type: "Local",
        Amount: 1649
      },
      {
        Location: "Pennsylvania",
        Year: "2021",
        Type: "State",
        Amount: 1531
      },
      {
        Location: "Puerto Rico",
        Year: "2019",
        Type: "Federal",
        Amount: 1363
      },
      {
        Location: "Puerto Rico",
        Year: "2019",
        Type: "Local",
        Amount: 1599
      },
      {
        Location: "Puerto Rico",
        Year: "2019",
        Type: "State",
        Amount: 1481
      },
      {
        Location: "Puerto Rico",
        Year: "2020",
        Type: "Federal",
        Amount: 1363
      },
      {
        Location: "Puerto Rico",
        Year: "2020",
        Type: "Local",
        Amount: 1599
      },
      {
        Location: "Puerto Rico",
        Year: "2020",
        Type: "State",
        Amount: 1481
      },
      {
        Location: "Puerto Rico",
        Year: "2021",
        Type: "Federal",
        Amount: 1422
      },
      {
        Location: "Puerto Rico",
        Year: "2021",
        Type: "Local",
        Amount: 1658
      },
      {
        Location: "Puerto Rico",
        Year: "2021",
        Type: "State",
        Amount: 1540
      },
      {
        Location: "Rhode Island",
        Year: "2019",
        Type: "Federal",
        Amount: 1411
      },
      {
        Location: "Rhode Island",
        Year: "2019",
        Type: "Local",
        Amount: 1647
      },
      {
        Location: "Rhode Island",
        Year: "2019",
        Type: "State",
        Amount: 1529
      },
      {
        Location: "Rhode Island",
        Year: "2020",
        Type: "Federal",
        Amount: 1411
      },
      {
        Location: "Rhode Island",
        Year: "2020",
        Type: "Local",
        Amount: 1647
      },
      {
        Location: "Rhode Island",
        Year: "2020",
        Type: "State",
        Amount: 1529
      },
      {
        Location: "Rhode Island",
        Year: "2021",
        Type: "Federal",
        Amount: 1470
      },
      {
        Location: "Rhode Island",
        Year: "2021",
        Type: "Local",
        Amount: 1706
      },
      {
        Location: "Rhode Island",
        Year: "2021",
        Type: "State",
        Amount: 1588
      },
      {
        Location: "Republic of Palau",
        Year: "2019",
        Type: "Federal",
        Amount: "1412"
      },
      {
        Location: "Republic of Palau",
        Year: "2019",
        Type: "Local",
        Amount: "1648"
      },
      {
        Location: "Republic of Palau",
        Year: "2019",
        Type: "State",
        Amount: "1530"
      },
      {
        Location: "Republic of Palau",
        Year: "2020",
        Type: "Federal",
        Amount: "1412"
      },
      {
        Location: "Republic of Palau",
        Year: "2020",
        Type: "Local",
        Amount: "1648"
      },
      {
        Location: "Republic of Palau",
        Year: "2020",
        Type: "State",
        Amount: "1530"
      },
      {
        Location: "Republic of Palau",
        Year: "2021",
        Type: "Federal",
        Amount: "1471"
      },
      {
        Location: "Republic of Palau",
        Year: "2021",
        Type: "Local",
        Amount: "1707"
      },
      {
        Location: "Republic of Palau",
        Year: "2021",
        Type: "State",
        Amount: "1589"
      },
      {
        Location: "South Carolina",
        Year: "2019",
        Type: "Federal",
        Amount: 1389
      },
      {
        Location: "South Carolina",
        Year: "2019",
        Type: "Local",
        Amount: 1625
      },
      {
        Location: "South Carolina",
        Year: "2019",
        Type: "State",
        Amount: 1507
      },
      {
        Location: "South Carolina",
        Year: "2020",
        Type: "Federal",
        Amount: 1389
      },
      {
        Location: "South Carolina",
        Year: "2020",
        Type: "Local",
        Amount: 1625
      },
      {
        Location: "South Carolina",
        Year: "2020",
        Type: "State",
        Amount: 1507
      },
      {
        Location: "South Carolina",
        Year: "2021",
        Type: "Federal",
        Amount: 1448
      },
      {
        Location: "South Carolina",
        Year: "2021",
        Type: "Local",
        Amount: 1684
      },
      {
        Location: "South Carolina",
        Year: "2021",
        Type: "State",
        Amount: 1566
      },
      {
        Location: "South Dakota",
        Year: "2019",
        Type: "Federal",
        Amount: 1373
      },
      {
        Location: "South Dakota",
        Year: "2019",
        Type: "Local",
        Amount: 1609
      },
      {
        Location: "South Dakota",
        Year: "2019",
        Type: "State",
        Amount: 1491
      },
      {
        Location: "South Dakota",
        Year: "2020",
        Type: "Federal",
        Amount: 1373
      },
      {
        Location: "South Dakota",
        Year: "2020",
        Type: "Local",
        Amount: 1609
      },
      {
        Location: "South Dakota",
        Year: "2020",
        Type: "State",
        Amount: 1491
      },
      {
        Location: "South Dakota",
        Year: "2021",
        Type: "Federal",
        Amount: 1432
      },
      {
        Location: "South Dakota",
        Year: "2021",
        Type: "Local",
        Amount: 1668
      },
      {
        Location: "South Dakota",
        Year: "2021",
        Type: "State",
        Amount: 1550
      },
      {
        Location: "Tennessee",
        Year: "2019",
        Type: "Federal",
        Amount: 1376
      },
      {
        Location: "Tennessee",
        Year: "2019",
        Type: "Local",
        Amount: 1612
      },
      {
        Location: "Tennessee",
        Year: "2019",
        Type: "State",
        Amount: 1494
      },
      {
        Location: "Tennessee",
        Year: "2020",
        Type: "Federal",
        Amount: 1376
      },
      {
        Location: "Tennessee",
        Year: "2020",
        Type: "Local",
        Amount: 1612
      },
      {
        Location: "Tennessee",
        Year: "2020",
        Type: "State",
        Amount: 1494
      },
      {
        Location: "Tennessee",
        Year: "2021",
        Type: "Federal",
        Amount: 1435
      },
      {
        Location: "Tennessee",
        Year: "2021",
        Type: "Local",
        Amount: 1671
      },
      {
        Location: "Tennessee",
        Year: "2021",
        Type: "State",
        Amount: 1553
      },
      {
        Location: "Texas",
        Year: "2019",
        Type: "Federal",
        Amount: 1361
      },
      {
        Location: "Texas",
        Year: "2019",
        Type: "Local",
        Amount: 1597
      },
      {
        Location: "Texas",
        Year: "2019",
        Type: "State",
        Amount: 1479
      },
      {
        Location: "Texas",
        Year: "2020",
        Type: "Federal",
        Amount: 1361
      },
      {
        Location: "Texas",
        Year: "2020",
        Type: "Local",
        Amount: 1597
      },
      {
        Location: "Texas",
        Year: "2020",
        Type: "State",
        Amount: 1479
      },
      {
        Location: "Texas",
        Year: "2021",
        Type: "Federal",
        Amount: 1420
      },
      {
        Location: "Texas",
        Year: "2021",
        Type: "Local",
        Amount: 1656
      },
      {
        Location: "Texas",
        Year: "2021",
        Type: "State",
        Amount: 1538
      },
      {
        Location: "Utah",
        Year: "2019",
        Type: "Federal",
        Amount: 1380
      },
      {
        Location: "Utah",
        Year: "2019",
        Type: "Local",
        Amount: 1616
      },
      {
        Location: "Utah",
        Year: "2019",
        Type: "State",
        Amount: 1498
      },
      {
        Location: "Utah",
        Year: "2020",
        Type: "Federal",
        Amount: 1380
      },
      {
        Location: "Utah",
        Year: "2020",
        Type: "Local",
        Amount: 1616
      },
      {
        Location: "Utah",
        Year: "2020",
        Type: "State",
        Amount: 1498
      },
      {
        Location: "Utah",
        Year: "2021",
        Type: "Federal",
        Amount: 1439
      },
      {
        Location: "Utah",
        Year: "2021",
        Type: "Local",
        Amount: 1675
      },
      {
        Location: "Utah",
        Year: "2021",
        Type: "State",
        Amount: 1557
      },
      {
        Location: "Virginia",
        Year: "2019",
        Type: "Federal",
        Amount: 1382
      },
      {
        Location: "Virginia",
        Year: "2019",
        Type: "Local",
        Amount: 1618
      },
      {
        Location: "Virginia",
        Year: "2019",
        Type: "State",
        Amount: 1500
      },
      {
        Location: "Virginia",
        Year: "2020",
        Type: "Federal",
        Amount: 1382
      },
      {
        Location: "Virginia",
        Year: "2020",
        Type: "Local",
        Amount: 1618
      },
      {
        Location: "Virginia",
        Year: "2020",
        Type: "State",
        Amount: 1500
      },
      {
        Location: "Virginia",
        Year: "2021",
        Type: "Federal",
        Amount: 1441
      },
      {
        Location: "Virginia",
        Year: "2021",
        Type: "Local",
        Amount: 1677
      },
      {
        Location: "Virginia",
        Year: "2021",
        Type: "State",
        Amount: 1559
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2019",
        Type: "Federal",
        Amount: "1383"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2019",
        Type: "Local",
        Amount: "1619"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2019",
        Type: "State",
        Amount: "1501"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2020",
        Type: "Federal",
        Amount: "1383"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2020",
        Type: "Local",
        Amount: "1619"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2020",
        Type: "State",
        Amount: "1501"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2021",
        Type: "Federal",
        Amount: "1442"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2021",
        Type: "Local",
        Amount: "1678"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2021",
        Type: "State",
        Amount: "1560"
      },
      {
        Location: "Vermont",
        Year: "2019",
        Type: "Federal",
        Amount: 1370
      },
      {
        Location: "Vermont",
        Year: "2019",
        Type: "Local",
        Amount: 1606
      },
      {
        Location: "Vermont",
        Year: "2019",
        Type: "State",
        Amount: 1488
      },
      {
        Location: "Vermont",
        Year: "2020",
        Type: "Federal",
        Amount: 1370
      },
      {
        Location: "Vermont",
        Year: "2020",
        Type: "Local",
        Amount: 1606
      },
      {
        Location: "Vermont",
        Year: "2020",
        Type: "State",
        Amount: 1488
      },
      {
        Location: "Vermont",
        Year: "2021",
        Type: "Federal",
        Amount: 1429
      },
      {
        Location: "Vermont",
        Year: "2021",
        Type: "Local",
        Amount: 1665
      },
      {
        Location: "Vermont",
        Year: "2021",
        Type: "State",
        Amount: 1547
      },
      {
        Location: "Washington",
        Year: "2019",
        Type: "Federal",
        Amount: 1393
      },
      {
        Location: "Washington",
        Year: "2019",
        Type: "Local",
        Amount: 1629
      },
      {
        Location: "Washington",
        Year: "2019",
        Type: "State",
        Amount: 1511
      },
      {
        Location: "Washington",
        Year: "2020",
        Type: "Federal",
        Amount: 1393
      },
      {
        Location: "Washington",
        Year: "2020",
        Type: "Local",
        Amount: 1629
      },
      {
        Location: "Washington",
        Year: "2020",
        Type: "State",
        Amount: 1511
      },
      {
        Location: "Washington",
        Year: "2021",
        Type: "Federal",
        Amount: 1452
      },
      {
        Location: "Washington",
        Year: "2021",
        Type: "Local",
        Amount: 1688
      },
      {
        Location: "Washington",
        Year: "2021",
        Type: "State",
        Amount: 1570
      },
      {
        Location: "Wisconsin",
        Year: "2019",
        Type: "Federal",
        Amount: 1371
      },
      {
        Location: "Wisconsin",
        Year: "2019",
        Type: "Local",
        Amount: 1607
      },
      {
        Location: "Wisconsin",
        Year: "2019",
        Type: "State",
        Amount: 1489
      },
      {
        Location: "Wisconsin",
        Year: "2020",
        Type: "Federal",
        Amount: 1371
      },
      {
        Location: "Wisconsin",
        Year: "2020",
        Type: "Local",
        Amount: 1607
      },
      {
        Location: "Wisconsin",
        Year: "2020",
        Type: "State",
        Amount: 1489
      },
      {
        Location: "Wisconsin",
        Year: "2021",
        Type: "Federal",
        Amount: 1430
      },
      {
        Location: "Wisconsin",
        Year: "2021",
        Type: "Local",
        Amount: 1666
      },
      {
        Location: "Wisconsin",
        Year: "2021",
        Type: "State",
        Amount: 1548
      },
      {
        Location: "West Virginia",
        Year: "2019",
        Type: "Federal",
        Amount: 1397
      },
      {
        Location: "West Virginia",
        Year: "2019",
        Type: "Local",
        Amount: 1633
      },
      {
        Location: "West Virginia",
        Year: "2019",
        Type: "State",
        Amount: 1515
      },
      {
        Location: "West Virginia",
        Year: "2020",
        Type: "Federal",
        Amount: 1397
      },
      {
        Location: "West Virginia",
        Year: "2020",
        Type: "Local",
        Amount: 1633
      },
      {
        Location: "West Virginia",
        Year: "2020",
        Type: "State",
        Amount: 1515
      },
      {
        Location: "West Virginia",
        Year: "2021",
        Type: "Federal",
        Amount: 1456
      },
      {
        Location: "West Virginia",
        Year: "2021",
        Type: "Local",
        Amount: 1692
      },
      {
        Location: "West Virginia",
        Year: "2021",
        Type: "State",
        Amount: 1574
      },
      {
        Location: "Wyoming",
        Year: "2019",
        Type: "Federal",
        Amount: 1395
      },
      {
        Location: "Wyoming",
        Year: "2019",
        Type: "Local",
        Amount: 1631
      },
      {
        Location: "Wyoming",
        Year: "2019",
        Type: "State",
        Amount: 1513
      },
      {
        Location: "Wyoming",
        Year: "2020",
        Type: "Federal",
        Amount: 1395
      },
      {
        Location: "Wyoming",
        Year: "2020",
        Type: "Local",
        Amount: 1631
      },
      {
        Location: "Wyoming",
        Year: "2020",
        Type: "State",
        Amount: 1513
      },
      {
        Location: "Wyoming",
        Year: "2021",
        Type: "Federal",
        Amount: 1454
      },
      {
        Location: "Wyoming",
        Year: "2021",
        Type: "Local",
        Amount: 1690
      },
      {
        Location: "Wyoming",
        Year: "2021",
        Type: "State",
        Amount: 1572
      }
    ]
  },
  map1699383540561: {
    general: {
      geoType: "us",
      geoBorderColor: "darkGray",
      headerColor: "theme-blue",
      title: "",
      showTitle: !0,
      showSidebar: !0,
      showDownloadButton: !1,
      showDownloadMediaButton: !1,
      displayAsHex: !1,
      displayStateLabels: !1,
      territoriesLabel: "Territories",
      territoriesAlwaysShow: !1,
      language: "en",
      geoLabelOverride: "",
      hasRegions: !1,
      fullBorder: !1,
      type: "data",
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
      }
    },
    type: "map",
    color: "pinkpurple",
    columns: {
      geo: {
        name: "Location",
        label: "Location",
        tooltip: !1,
        dataTable: !0
      },
      primary: {
        dataTable: !0,
        tooltip: !0,
        prefix: "",
        suffix: "",
        name: "Amount",
        label: ""
      },
      navigate: {
        name: ""
      },
      latitude: {
        name: ""
      },
      longitude: {
        name: ""
      }
    },
    legend: {
      descriptions: {},
      specialClasses: [],
      unified: !1,
      singleColumn: !1,
      singleRow: !1,
      verticalSorted: !1,
      showSpecialClassesLast: !1,
      dynamicDescription: !1,
      type: "equalnumber",
      numberOfItems: 3,
      position: "side",
      title: "Legend"
    },
    filters: [
      {
        label: "Type",
        values: [],
        columnName: "Type"
      }
    ],
    table: {
      label: "Data Table",
      expanded: !1,
      limitHeight: !1,
      height: "",
      caption: "",
      showDownloadUrl: !1,
      showDataTableLink: !0,
      showFullGeoNameInCSV: !1,
      forceDisplay: !0,
      download: !1,
      indexLabel: ""
    },
    tooltips: {
      appearanceType: "hover",
      linkLabel: "Learn More",
      capitalizeLabels: !0,
      opacity: 90
    },
    visual: {
      minBubbleSize: 1,
      maxBubbleSize: 20,
      extraBubbleBorder: !1,
      cityStyle: "circle",
      geoCodeCircleSize: 2,
      showBubbleZeros: !1
    },
    mapPosition: {
      coordinates: [
        0,
        30
      ],
      zoom: 1
    },
    map: {
      layers: []
    },
    hexMap: {
      type: "",
      shapeGroups: [
        {
          legendTitle: "",
          legendDescription: "",
          items: [
            {
              key: "",
              shape: "Arrow up",
              column: "",
              operator: "=",
              value: ""
            }
          ]
        }
      ]
    },
    filterBehavior: "Filter Change",
    openModal: !1,
    uid: "map1699383540561",
    dataKey: "dashboard_aggregate_example_state_type (1).csv",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    editing: !1,
    validated: 4.23,
    originalFormattedData: [
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Federal",
        Amount: 1377
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Local",
        Amount: 1613
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "State",
        Amount: 1495
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "Federal",
        Amount: "1377"
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "Local",
        Amount: "1613"
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "State",
        Amount: "1495"
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "Federal",
        Amount: "1436"
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "Local",
        Amount: "1672"
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "State",
        Amount: "1554"
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "Federal",
        Amount: 1375
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "Local",
        Amount: 1611
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "State",
        Amount: 1493
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "Federal",
        Amount: "1375"
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "Local",
        Amount: "1611"
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "State",
        Amount: "1493"
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "Federal",
        Amount: "1434"
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "Local",
        Amount: "1670"
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "State",
        Amount: "1552"
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "Federal",
        Amount: 1398
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "Local",
        Amount: 1634
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "State",
        Amount: 1516
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "Federal",
        Amount: "1398"
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "Local",
        Amount: "1634"
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "State",
        Amount: "1516"
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "Federal",
        Amount: "1457"
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "Local",
        Amount: "1693"
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "State",
        Amount: "1575"
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "Federal",
        Amount: 1388
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "Local",
        Amount: 1624
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "State",
        Amount: 1506
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "Federal",
        Amount: "1388"
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "Local",
        Amount: "1624"
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "State",
        Amount: "1506"
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "Federal",
        Amount: "1447"
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "Local",
        Amount: "1683"
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "State",
        Amount: "1565"
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "Federal",
        Amount: 1401
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "Local",
        Amount: 1637
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "State",
        Amount: 1519
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "Federal",
        Amount: "1401"
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "Local",
        Amount: "1637"
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "State",
        Amount: "1519"
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "Federal",
        Amount: "1460"
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "Local",
        Amount: "1696"
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "State",
        Amount: "1578"
      },
      {
        Location: "California",
        Year: "2019",
        Type: "Federal",
        Amount: 1381
      },
      {
        Location: "California",
        Year: "2019",
        Type: "Local",
        Amount: 1617
      },
      {
        Location: "California",
        Year: "2019",
        Type: "State",
        Amount: 1499
      },
      {
        Location: "California",
        Year: "2020",
        Type: "Federal",
        Amount: "1381"
      },
      {
        Location: "California",
        Year: "2020",
        Type: "Local",
        Amount: "1617"
      },
      {
        Location: "California",
        Year: "2020",
        Type: "State",
        Amount: "1499"
      },
      {
        Location: "California",
        Year: "2021",
        Type: "Federal",
        Amount: "1440"
      },
      {
        Location: "California",
        Year: "2021",
        Type: "Local",
        Amount: "1676"
      },
      {
        Location: "California",
        Year: "2021",
        Type: "State",
        Amount: "1558"
      },
      {
        Location: "Colorado",
        Year: "2019",
        Type: "Federal",
        Amount: 1369
      },
      {
        Location: "Colorado",
        Year: "2019",
        Type: "Local",
        Amount: 1605
      },
      {
        Location: "Colorado",
        Year: "2019",
        Type: "State",
        Amount: 1487
      },
      {
        Location: "Colorado",
        Year: "2020",
        Type: "Federal",
        Amount: "1369"
      },
      {
        Location: "Colorado",
        Year: "2020",
        Type: "Local",
        Amount: "1605"
      },
      {
        Location: "Colorado",
        Year: "2020",
        Type: "State",
        Amount: "1487"
      },
      {
        Location: "Colorado",
        Year: "2021",
        Type: "Federal",
        Amount: "1428"
      },
      {
        Location: "Colorado",
        Year: "2021",
        Type: "Local",
        Amount: "1664"
      },
      {
        Location: "Colorado",
        Year: "2021",
        Type: "State",
        Amount: "1546"
      },
      {
        Location: "Connecticut",
        Year: "2019",
        Type: "Federal",
        Amount: 1403
      },
      {
        Location: "Connecticut",
        Year: "2019",
        Type: "Local",
        Amount: 1639
      },
      {
        Location: "Connecticut",
        Year: "2019",
        Type: "State",
        Amount: 1521
      },
      {
        Location: "Connecticut",
        Year: "2020",
        Type: "Federal",
        Amount: "1403"
      },
      {
        Location: "Connecticut",
        Year: "2020",
        Type: "Local",
        Amount: "1639"
      },
      {
        Location: "Connecticut",
        Year: "2020",
        Type: "State",
        Amount: "1521"
      },
      {
        Location: "Connecticut",
        Year: "2021",
        Type: "Federal",
        Amount: "1462"
      },
      {
        Location: "Connecticut",
        Year: "2021",
        Type: "Local",
        Amount: "1698"
      },
      {
        Location: "Connecticut",
        Year: "2021",
        Type: "State",
        Amount: "1580"
      },
      {
        Location: "District of Columbia",
        Year: "2019",
        Type: "Federal",
        Amount: 1400
      },
      {
        Location: "District of Columbia",
        Year: "2019",
        Type: "Local",
        Amount: 1636
      },
      {
        Location: "District of Columbia",
        Year: "2019",
        Type: "State",
        Amount: 1518
      },
      {
        Location: "District of Columbia",
        Year: "2020",
        Type: "Federal",
        Amount: "1400"
      },
      {
        Location: "District of Columbia",
        Year: "2020",
        Type: "Local",
        Amount: "1636"
      },
      {
        Location: "District of Columbia",
        Year: "2020",
        Type: "State",
        Amount: "1518"
      },
      {
        Location: "District of Columbia",
        Year: "2021",
        Type: "Federal",
        Amount: "1459"
      },
      {
        Location: "District of Columbia",
        Year: "2021",
        Type: "Local",
        Amount: "1695"
      },
      {
        Location: "District of Columbia",
        Year: "2021",
        Type: "State",
        Amount: "1577"
      },
      {
        Location: "Delaware	",
        Year: "2019",
        Type: "Federal",
        Amount: "1384"
      },
      {
        Location: "Delaware	",
        Year: "2019",
        Type: "Local",
        Amount: "1620"
      },
      {
        Location: "Delaware	",
        Year: "2019",
        Type: "State",
        Amount: "1502"
      },
      {
        Location: "Delaware	",
        Year: "2020",
        Type: "Federal",
        Amount: "1384"
      },
      {
        Location: "Delaware	",
        Year: "2020",
        Type: "Local",
        Amount: "1620"
      },
      {
        Location: "Delaware	",
        Year: "2020",
        Type: "State",
        Amount: "1502"
      },
      {
        Location: "Delaware	",
        Year: "2021",
        Type: "Federal",
        Amount: "1443"
      },
      {
        Location: "Delaware	",
        Year: "2021",
        Type: "Local",
        Amount: "1679"
      },
      {
        Location: "Delaware	",
        Year: "2021",
        Type: "State",
        Amount: "1561"
      },
      {
        Location: "Florida	",
        Year: "2019",
        Type: "Federal",
        Amount: "1387"
      },
      {
        Location: "Florida	",
        Year: "2019",
        Type: "Local",
        Amount: "1623"
      },
      {
        Location: "Florida	",
        Year: "2019",
        Type: "State",
        Amount: "1505"
      },
      {
        Location: "Florida	",
        Year: "2020",
        Type: "Federal",
        Amount: "1387"
      },
      {
        Location: "Florida	",
        Year: "2020",
        Type: "Local",
        Amount: "1623"
      },
      {
        Location: "Florida	",
        Year: "2020",
        Type: "State",
        Amount: "1505"
      },
      {
        Location: "Florida	",
        Year: "2021",
        Type: "Federal",
        Amount: "1446"
      },
      {
        Location: "Florida	",
        Year: "2021",
        Type: "Local",
        Amount: "1682"
      },
      {
        Location: "Florida	",
        Year: "2021",
        Type: "State",
        Amount: "1564"
      },
      {
        Location: "Georgia	",
        Year: "2019",
        Type: "Federal",
        Amount: "1365"
      },
      {
        Location: "Georgia	",
        Year: "2019",
        Type: "Local",
        Amount: "1601"
      },
      {
        Location: "Georgia	",
        Year: "2019",
        Type: "State",
        Amount: "1483"
      },
      {
        Location: "Georgia	",
        Year: "2020",
        Type: "Federal",
        Amount: "1365"
      },
      {
        Location: "Georgia	",
        Year: "2020",
        Type: "Local",
        Amount: "1601"
      },
      {
        Location: "Georgia	",
        Year: "2020",
        Type: "State",
        Amount: "1483"
      },
      {
        Location: "Georgia	",
        Year: "2021",
        Type: "Federal",
        Amount: "1424"
      },
      {
        Location: "Georgia	",
        Year: "2021",
        Type: "Local",
        Amount: "1660"
      },
      {
        Location: "Georgia	",
        Year: "2021",
        Type: "State",
        Amount: "1542"
      },
      {
        Location: "Guam",
        Year: "2019",
        Type: "Federal",
        Amount: 1356
      },
      {
        Location: "Guam",
        Year: "2019",
        Type: "Local",
        Amount: 1592
      },
      {
        Location: "Guam",
        Year: "2019",
        Type: "State",
        Amount: 1474
      },
      {
        Location: "Guam",
        Year: "2020",
        Type: "Federal",
        Amount: "1356"
      },
      {
        Location: "Guam",
        Year: "2020",
        Type: "Local",
        Amount: "1592"
      },
      {
        Location: "Guam",
        Year: "2020",
        Type: "State",
        Amount: "1474"
      },
      {
        Location: "Guam",
        Year: "2021",
        Type: "Federal",
        Amount: "1415"
      },
      {
        Location: "Guam",
        Year: "2021",
        Type: "Local",
        Amount: "1651"
      },
      {
        Location: "Guam",
        Year: "2021",
        Type: "State",
        Amount: "1533"
      },
      {
        Location: "Hawaii	",
        Year: "2019",
        Type: "Federal",
        Amount: "1362"
      },
      {
        Location: "Hawaii	",
        Year: "2019",
        Type: "Local",
        Amount: "1598"
      },
      {
        Location: "Hawaii	",
        Year: "2019",
        Type: "State",
        Amount: "1480"
      },
      {
        Location: "Hawaii	",
        Year: "2020",
        Type: "Federal",
        Amount: "1362"
      },
      {
        Location: "Hawaii	",
        Year: "2020",
        Type: "Local",
        Amount: "1598"
      },
      {
        Location: "Hawaii	",
        Year: "2020",
        Type: "State",
        Amount: "1480"
      },
      {
        Location: "Hawaii	",
        Year: "2021",
        Type: "Federal",
        Amount: "1421"
      },
      {
        Location: "Hawaii	",
        Year: "2021",
        Type: "Local",
        Amount: "1657"
      },
      {
        Location: "Hawaii	",
        Year: "2021",
        Type: "State",
        Amount: "1539"
      },
      {
        Location: "Iowa",
        Year: "2019",
        Type: "Federal",
        Amount: 1394
      },
      {
        Location: "Iowa",
        Year: "2019",
        Type: "Local",
        Amount: 1630
      },
      {
        Location: "Iowa",
        Year: "2019",
        Type: "State",
        Amount: 1512
      },
      {
        Location: "Iowa",
        Year: "2020",
        Type: "Federal",
        Amount: "1394"
      },
      {
        Location: "Iowa",
        Year: "2020",
        Type: "Local",
        Amount: "1630"
      },
      {
        Location: "Iowa",
        Year: "2020",
        Type: "State",
        Amount: "1512"
      },
      {
        Location: "Iowa",
        Year: "2021",
        Type: "Federal",
        Amount: "1453"
      },
      {
        Location: "Iowa",
        Year: "2021",
        Type: "Local",
        Amount: "1689"
      },
      {
        Location: "Iowa",
        Year: "2021",
        Type: "State",
        Amount: "1571"
      },
      {
        Location: "Idaho",
        Year: "2019",
        Type: "Federal",
        Amount: 1374
      },
      {
        Location: "Idaho",
        Year: "2019",
        Type: "Local",
        Amount: 1610
      },
      {
        Location: "Idaho",
        Year: "2019",
        Type: "State",
        Amount: 1492
      },
      {
        Location: "Idaho",
        Year: "2020",
        Type: "Federal",
        Amount: "1374"
      },
      {
        Location: "Idaho",
        Year: "2020",
        Type: "Local",
        Amount: "1610"
      },
      {
        Location: "Idaho",
        Year: "2020",
        Type: "State",
        Amount: "1492"
      },
      {
        Location: "Idaho",
        Year: "2021",
        Type: "Federal",
        Amount: "1433"
      },
      {
        Location: "Idaho",
        Year: "2021",
        Type: "Local",
        Amount: "1669"
      },
      {
        Location: "Idaho",
        Year: "2021",
        Type: "State",
        Amount: "1551"
      },
      {
        Location: "Illinois	",
        Year: "2019",
        Type: "Federal",
        Amount: "1402"
      },
      {
        Location: "Illinois	",
        Year: "2019",
        Type: "Local",
        Amount: "1638"
      },
      {
        Location: "Illinois	",
        Year: "2019",
        Type: "State",
        Amount: "1520"
      },
      {
        Location: "Illinois	",
        Year: "2020",
        Type: "Federal",
        Amount: "1402"
      },
      {
        Location: "Illinois	",
        Year: "2020",
        Type: "Local",
        Amount: "1638"
      },
      {
        Location: "Illinois	",
        Year: "2020",
        Type: "State",
        Amount: "1520"
      },
      {
        Location: "Illinois	",
        Year: "2021",
        Type: "Federal",
        Amount: "1461"
      },
      {
        Location: "Illinois	",
        Year: "2021",
        Type: "Local",
        Amount: "1697"
      },
      {
        Location: "Illinois	",
        Year: "2021",
        Type: "State",
        Amount: "1579"
      },
      {
        Location: "Indiana	",
        Year: "2019",
        Type: "Federal",
        Amount: "1404"
      },
      {
        Location: "Indiana	",
        Year: "2019",
        Type: "Local",
        Amount: "1640"
      },
      {
        Location: "Indiana	",
        Year: "2019",
        Type: "State",
        Amount: "1522"
      },
      {
        Location: "Indiana	",
        Year: "2020",
        Type: "Federal",
        Amount: "1404"
      },
      {
        Location: "Indiana	",
        Year: "2020",
        Type: "Local",
        Amount: "1640"
      },
      {
        Location: "Indiana	",
        Year: "2020",
        Type: "State",
        Amount: "1522"
      },
      {
        Location: "Indiana	",
        Year: "2021",
        Type: "Federal",
        Amount: "1463"
      },
      {
        Location: "Indiana	",
        Year: "2021",
        Type: "Local",
        Amount: "1699"
      },
      {
        Location: "Indiana	",
        Year: "2021",
        Type: "State",
        Amount: "1581"
      },
      {
        Location: "Kansas	",
        Year: "2019",
        Type: "Federal",
        Amount: "1367"
      },
      {
        Location: "Kansas	",
        Year: "2019",
        Type: "Local",
        Amount: "1603"
      },
      {
        Location: "Kansas	",
        Year: "2019",
        Type: "State",
        Amount: "1485"
      },
      {
        Location: "Kansas	",
        Year: "2020",
        Type: "Federal",
        Amount: "1367"
      },
      {
        Location: "Kansas	",
        Year: "2020",
        Type: "Local",
        Amount: "1603"
      },
      {
        Location: "Kansas	",
        Year: "2020",
        Type: "State",
        Amount: "1485"
      },
      {
        Location: "Kansas",
        Year: "2021",
        Type: "Federal",
        Amount: "1426"
      },
      {
        Location: "Kansas",
        Year: "2021",
        Type: "Local",
        Amount: "1662"
      },
      {
        Location: "Kansas",
        Year: "2021",
        Type: "State",
        Amount: "1544"
      },
      {
        Location: "Kentucky",
        Year: "2019",
        Type: "Federal",
        Amount: 1359
      },
      {
        Location: "Kentucky",
        Year: "2019",
        Type: "Local",
        Amount: 1595
      },
      {
        Location: "Kentucky",
        Year: "2019",
        Type: "State",
        Amount: 1477
      },
      {
        Location: "Kentucky",
        Year: "2020",
        Type: "Federal",
        Amount: "1359"
      },
      {
        Location: "Kentucky",
        Year: "2020",
        Type: "Local",
        Amount: "1595"
      },
      {
        Location: "Kentucky",
        Year: "2020",
        Type: "State",
        Amount: "1477"
      },
      {
        Location: "Kentucky",
        Year: "2021",
        Type: "Federal",
        Amount: "1418"
      },
      {
        Location: "Kentucky",
        Year: "2021",
        Type: "Local",
        Amount: "1654"
      },
      {
        Location: "Kentucky",
        Year: "2021",
        Type: "State",
        Amount: "1536"
      },
      {
        Location: "Louisiana",
        Year: "2019",
        Type: "Federal",
        Amount: 1409
      },
      {
        Location: "Louisiana",
        Year: "2019",
        Type: "Local",
        Amount: 1645
      },
      {
        Location: "Louisiana",
        Year: "2019",
        Type: "State",
        Amount: 1527
      },
      {
        Location: "Louisiana",
        Year: "2020",
        Type: "Federal",
        Amount: "1409"
      },
      {
        Location: "Louisiana",
        Year: "2020",
        Type: "Local",
        Amount: "1645"
      },
      {
        Location: "Louisiana",
        Year: "2020",
        Type: "State",
        Amount: "1527"
      },
      {
        Location: "Louisiana",
        Year: "2021",
        Type: "Federal",
        Amount: "1468"
      },
      {
        Location: "Louisiana",
        Year: "2021",
        Type: "Local",
        Amount: "1704"
      },
      {
        Location: "Louisiana",
        Year: "2021",
        Type: "State",
        Amount: "1586"
      },
      {
        Location: "Massachusetts",
        Year: "2019",
        Type: "Federal",
        Amount: 1366
      },
      {
        Location: "Massachusetts",
        Year: "2019",
        Type: "Local",
        Amount: 1602
      },
      {
        Location: "Massachusetts",
        Year: "2019",
        Type: "State",
        Amount: 1484
      },
      {
        Location: "Massachusetts",
        Year: "2020",
        Type: "Federal",
        Amount: "1366"
      },
      {
        Location: "Massachusetts",
        Year: "2020",
        Type: "Local",
        Amount: "1602"
      },
      {
        Location: "Massachusetts",
        Year: "2020",
        Type: "State",
        Amount: "1484"
      },
      {
        Location: "Massachusetts",
        Year: "2021",
        Type: "Federal",
        Amount: "1425"
      },
      {
        Location: "Massachusetts",
        Year: "2021",
        Type: "Local",
        Amount: "1661"
      },
      {
        Location: "Massachusetts",
        Year: "2021",
        Type: "State",
        Amount: "1543"
      },
      {
        Location: "Maryland",
        Year: "2019",
        Type: "Federal",
        Amount: 1386
      },
      {
        Location: "Maryland",
        Year: "2019",
        Type: "Local",
        Amount: 1622
      },
      {
        Location: "Maryland",
        Year: "2019",
        Type: "State",
        Amount: 1504
      },
      {
        Location: "Maryland",
        Year: "2020",
        Type: "Federal",
        Amount: "1386"
      },
      {
        Location: "Maryland",
        Year: "2020",
        Type: "Local",
        Amount: "1622"
      },
      {
        Location: "Maryland",
        Year: "2020",
        Type: "State",
        Amount: "1504"
      },
      {
        Location: "Maryland",
        Year: "2021",
        Type: "Federal",
        Amount: "1445"
      },
      {
        Location: "Maryland",
        Year: "2021",
        Type: "Local",
        Amount: "1681"
      },
      {
        Location: "Maryland",
        Year: "2021",
        Type: "State",
        Amount: "1563"
      },
      {
        Location: "Maine	",
        Year: "2019",
        Type: "Federal",
        Amount: "1385"
      },
      {
        Location: "Maine	",
        Year: "2019",
        Type: "Local",
        Amount: "1621"
      },
      {
        Location: "Maine	",
        Year: "2019",
        Type: "State",
        Amount: "1503"
      },
      {
        Location: "Maine	",
        Year: "2020",
        Type: "Federal",
        Amount: "1385"
      },
      {
        Location: "Maine	",
        Year: "2020",
        Type: "Local",
        Amount: "1621"
      },
      {
        Location: "Maine	",
        Year: "2020",
        Type: "State",
        Amount: "1503"
      },
      {
        Location: "Maine	",
        Year: "2021",
        Type: "Federal",
        Amount: "1444"
      },
      {
        Location: "Maine	",
        Year: "2021",
        Type: "Local",
        Amount: "1680"
      },
      {
        Location: "Maine	",
        Year: "2021",
        Type: "State",
        Amount: "1562"
      },
      {
        Location: "Marshall Islands",
        Year: "2019",
        Type: "Federal",
        Amount: 1408
      },
      {
        Location: "Marshall Islands",
        Year: "2019",
        Type: "Local",
        Amount: 1644
      },
      {
        Location: "Marshall Islands",
        Year: "2019",
        Type: "State",
        Amount: 1526
      },
      {
        Location: "Marshall Islands",
        Year: "2020",
        Type: "Federal",
        Amount: "1408"
      },
      {
        Location: "Marshall Islands",
        Year: "2020",
        Type: "Local",
        Amount: "1644"
      },
      {
        Location: "Marshall Islands",
        Year: "2020",
        Type: "State",
        Amount: "1526"
      },
      {
        Location: "Marshall Islands",
        Year: "2021",
        Type: "Federal",
        Amount: "1467"
      },
      {
        Location: "Marshall Islands",
        Year: "2021",
        Type: "Local",
        Amount: "1703"
      },
      {
        Location: "Marshall Islands",
        Year: "2021",
        Type: "State",
        Amount: "1585"
      },
      {
        Location: "Michigan",
        Year: "2019",
        Type: "Federal",
        Amount: 1390
      },
      {
        Location: "Michigan",
        Year: "2019",
        Type: "Local",
        Amount: 4011
      },
      {
        Location: "Michigan",
        Year: "2019",
        Type: "State",
        Amount: 1508
      },
      {
        Location: "Michigan",
        Year: "2020",
        Type: "Federal",
        Amount: "1390"
      },
      {
        Location: "Michigan",
        Year: "2020",
        Type: "Local",
        Amount: "4111"
      },
      {
        Location: "Michigan",
        Year: "2020",
        Type: "State",
        Amount: "1508"
      },
      {
        Location: "Michigan",
        Year: "2021",
        Type: "Federal",
        Amount: "1449"
      },
      {
        Location: "Michigan",
        Year: "2021",
        Type: "Local",
        Amount: "1685"
      },
      {
        Location: "Michigan",
        Year: "2021",
        Type: "State",
        Amount: "1567"
      },
      {
        Location: "Minnesota",
        Year: "2019",
        Type: "Federal",
        Amount: 1392
      },
      {
        Location: "Minnesota",
        Year: "2019",
        Type: "Local",
        Amount: 1628
      },
      {
        Location: "Minnesota",
        Year: "2019",
        Type: "State",
        Amount: 1510
      },
      {
        Location: "Minnesota",
        Year: "2020",
        Type: "Federal",
        Amount: "1392"
      },
      {
        Location: "Minnesota",
        Year: "2020",
        Type: "Local",
        Amount: "1628"
      },
      {
        Location: "Minnesota",
        Year: "2020",
        Type: "State",
        Amount: "1510"
      },
      {
        Location: "Minnesota",
        Year: "2021",
        Type: "Federal",
        Amount: "1451"
      },
      {
        Location: "Minnesota",
        Year: "2021",
        Type: "Local",
        Amount: "1687"
      },
      {
        Location: "Minnesota",
        Year: "2021",
        Type: "State",
        Amount: "1569"
      },
      {
        Location: "Missouri",
        Year: "2019",
        Type: "Federal",
        Amount: 1378
      },
      {
        Location: "Missouri",
        Year: "2019",
        Type: "Local",
        Amount: 1614
      },
      {
        Location: "Missouri",
        Year: "2019",
        Type: "State",
        Amount: 1496
      },
      {
        Location: "Missouri",
        Year: "2020",
        Type: "Federal",
        Amount: "1378"
      },
      {
        Location: "Missouri",
        Year: "2020",
        Type: "Local",
        Amount: "1614"
      },
      {
        Location: "Missouri",
        Year: "2020",
        Type: "State",
        Amount: "1496"
      },
      {
        Location: "Missouri",
        Year: "2021",
        Type: "Federal",
        Amount: "1437"
      },
      {
        Location: "Missouri",
        Year: "2021",
        Type: "Local",
        Amount: "1673"
      },
      {
        Location: "Missouri",
        Year: "2021",
        Type: "State",
        Amount: "1555"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2019",
        Type: "Federal",
        Amount: "1368"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2019",
        Type: "Local",
        Amount: "1604"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2019",
        Type: "State",
        Amount: "1486"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2020",
        Type: "Federal",
        Amount: "1368"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2020",
        Type: "Local",
        Amount: "1604"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2020",
        Type: "State",
        Amount: "1486"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2021",
        Type: "Federal",
        Amount: "1427"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2021",
        Type: "Local",
        Amount: "1663"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2021",
        Type: "State",
        Amount: "1545"
      },
      {
        Location: "Mississippi",
        Year: "2019",
        Type: "Federal",
        Amount: 1406
      },
      {
        Location: "Mississippi",
        Year: "2019",
        Type: "Local",
        Amount: 1642
      },
      {
        Location: "Mississippi",
        Year: "2019",
        Type: "State",
        Amount: 1524
      },
      {
        Location: "Mississippi",
        Year: "2020",
        Type: "Federal",
        Amount: "1406"
      },
      {
        Location: "Mississippi",
        Year: "2020",
        Type: "Local",
        Amount: "1642"
      },
      {
        Location: "Mississippi",
        Year: "2020",
        Type: "State",
        Amount: "1524"
      },
      {
        Location: "Mississippi",
        Year: "2021",
        Type: "Federal",
        Amount: "1465"
      },
      {
        Location: "Mississippi",
        Year: "2021",
        Type: "Local",
        Amount: "1701"
      },
      {
        Location: "Mississippi",
        Year: "2021",
        Type: "State",
        Amount: "1583"
      },
      {
        Location: "Montana",
        Year: "2019",
        Type: "Federal",
        Amount: 1364
      },
      {
        Location: "Montana",
        Year: "2019",
        Type: "Local",
        Amount: 1600
      },
      {
        Location: "Montana",
        Year: "2019",
        Type: "State",
        Amount: 1482
      },
      {
        Location: "Montana",
        Year: "2020",
        Type: "Federal",
        Amount: "1364"
      },
      {
        Location: "Montana",
        Year: "2020",
        Type: "Local",
        Amount: "1600"
      },
      {
        Location: "Montana",
        Year: "2020",
        Type: "State",
        Amount: "1482"
      },
      {
        Location: "Montana",
        Year: "2021",
        Type: "Federal",
        Amount: "1423"
      },
      {
        Location: "Montana",
        Year: "2021",
        Type: "Local",
        Amount: "1659"
      },
      {
        Location: "Montana",
        Year: "2021",
        Type: "State",
        Amount: "1541"
      },
      {
        Location: "North Carolina",
        Year: "2019",
        Type: "Federal",
        Amount: 1358
      },
      {
        Location: "North Carolina",
        Year: "2019",
        Type: "Local",
        Amount: 1594
      },
      {
        Location: "North Carolina",
        Year: "2019",
        Type: "State",
        Amount: 1476
      },
      {
        Location: "North Carolina",
        Year: "2020",
        Type: "Federal",
        Amount: "1358"
      },
      {
        Location: "North Carolina",
        Year: "2020",
        Type: "Local",
        Amount: "1594"
      },
      {
        Location: "North Carolina",
        Year: "2020",
        Type: "State",
        Amount: "1476"
      },
      {
        Location: "North Carolina",
        Year: "2021",
        Type: "Federal",
        Amount: "1417"
      },
      {
        Location: "North Carolina",
        Year: "2021",
        Type: "Local",
        Amount: "1653"
      },
      {
        Location: "North Carolina",
        Year: "2021",
        Type: "State",
        Amount: "1535"
      },
      {
        Location: "North Dakota",
        Year: "2019",
        Type: "Federal",
        Amount: 1355
      },
      {
        Location: "North Dakota",
        Year: "2019",
        Type: "Local",
        Amount: 1591
      },
      {
        Location: "North Dakota",
        Year: "2019",
        Type: "State",
        Amount: 1473
      },
      {
        Location: "North Dakota",
        Year: "2020",
        Type: "Federal",
        Amount: "1355"
      },
      {
        Location: "North Dakota",
        Year: "2020",
        Type: "Local",
        Amount: "1591"
      },
      {
        Location: "North Dakota",
        Year: "2020",
        Type: "State",
        Amount: "1473"
      },
      {
        Location: "North Dakota",
        Year: "2021",
        Type: "Federal",
        Amount: "1414"
      },
      {
        Location: "North Dakota",
        Year: "2021",
        Type: "Local",
        Amount: "1650"
      },
      {
        Location: "North Dakota",
        Year: "2021",
        Type: "State",
        Amount: "1532"
      },
      {
        Location: "Nebraska",
        Year: "2019",
        Type: "Federal",
        Amount: 1391
      },
      {
        Location: "Nebraska",
        Year: "2019",
        Type: "Local",
        Amount: 1627
      },
      {
        Location: "Nebraska",
        Year: "2019",
        Type: "State",
        Amount: 1509
      },
      {
        Location: "Nebraska",
        Year: "2020",
        Type: "Federal",
        Amount: "1391"
      },
      {
        Location: "Nebraska",
        Year: "2020",
        Type: "Local",
        Amount: "1627"
      },
      {
        Location: "Nebraska",
        Year: "2020",
        Type: "State",
        Amount: "1509"
      },
      {
        Location: "Nebraska",
        Year: "2021",
        Type: "Federal",
        Amount: "1450"
      },
      {
        Location: "Nebraska",
        Year: "2021",
        Type: "Local",
        Amount: "1686"
      },
      {
        Location: "Nebraska",
        Year: "2021",
        Type: "State",
        Amount: "1568"
      },
      {
        Location: "New Hampshire",
        Year: "2019",
        Type: "Federal",
        Amount: 1405
      },
      {
        Location: "New Hampshire",
        Year: "2019",
        Type: "Local",
        Amount: 1641
      },
      {
        Location: "New Hampshire",
        Year: "2019",
        Type: "State",
        Amount: 1523
      },
      {
        Location: "New Hampshire",
        Year: "2020",
        Type: "Federal",
        Amount: "1405"
      },
      {
        Location: "New Hampshire",
        Year: "2020",
        Type: "Local",
        Amount: "1641"
      },
      {
        Location: "New Hampshire",
        Year: "2020",
        Type: "State",
        Amount: "1523"
      },
      {
        Location: "New Hampshire",
        Year: "2021",
        Type: "Federal",
        Amount: "1464"
      },
      {
        Location: "New Hampshire",
        Year: "2021",
        Type: "Local",
        Amount: "1700"
      },
      {
        Location: "New Hampshire",
        Year: "2021",
        Type: "State",
        Amount: "1582"
      },
      {
        Location: "New Jersey",
        Year: "2019",
        Type: "Federal",
        Amount: 1410
      },
      {
        Location: "New Jersey",
        Year: "2019",
        Type: "Local",
        Amount: 1646
      },
      {
        Location: "New Jersey",
        Year: "2019",
        Type: "State",
        Amount: 1528
      },
      {
        Location: "New Jersey",
        Year: "2020",
        Type: "Federal",
        Amount: "1410"
      },
      {
        Location: "New Jersey",
        Year: "2020",
        Type: "Local",
        Amount: "1646"
      },
      {
        Location: "New Jersey",
        Year: "2020",
        Type: "State",
        Amount: "1528"
      },
      {
        Location: "New Jersey",
        Year: "2021",
        Type: "Federal",
        Amount: "1469"
      },
      {
        Location: "New Jersey",
        Year: "2021",
        Type: "Local",
        Amount: "1705"
      },
      {
        Location: "New Jersey",
        Year: "2021",
        Type: "State",
        Amount: "1587"
      },
      {
        Location: "New Mexico",
        Year: "2019",
        Type: "Federal",
        Amount: 1399
      },
      {
        Location: "New Mexico",
        Year: "2019",
        Type: "Local",
        Amount: 1635
      },
      {
        Location: "New Mexico",
        Year: "2019",
        Type: "State",
        Amount: 1517
      },
      {
        Location: "New Mexico",
        Year: "2020",
        Type: "Federal",
        Amount: "1399"
      },
      {
        Location: "New Mexico",
        Year: "2020",
        Type: "Local",
        Amount: "1635"
      },
      {
        Location: "New Mexico",
        Year: "2020",
        Type: "State",
        Amount: "1517"
      },
      {
        Location: "New Mexico",
        Year: "2021",
        Type: "Federal",
        Amount: "1458"
      },
      {
        Location: "New Mexico",
        Year: "2021",
        Type: "Local",
        Amount: "1694"
      },
      {
        Location: "New Mexico",
        Year: "2021",
        Type: "State",
        Amount: "1576"
      },
      {
        Location: "Nevada",
        Year: "2019",
        Type: "Federal",
        Amount: 1357
      },
      {
        Location: "Nevada",
        Year: "2019",
        Type: "Local",
        Amount: 1593
      },
      {
        Location: "Nevada",
        Year: "2019",
        Type: "State",
        Amount: 1475
      },
      {
        Location: "Nevada",
        Year: "2020",
        Type: "Federal",
        Amount: "1357"
      },
      {
        Location: "Nevada",
        Year: "2020",
        Type: "Local",
        Amount: "1593"
      },
      {
        Location: "Nevada",
        Year: "2020",
        Type: "State",
        Amount: "1475"
      },
      {
        Location: "Nevada",
        Year: "2021",
        Type: "Federal",
        Amount: "1416"
      },
      {
        Location: "Nevada",
        Year: "2021",
        Type: "Local",
        Amount: "1652"
      },
      {
        Location: "Nevada",
        Year: "2021",
        Type: "State",
        Amount: "1534"
      },
      {
        Location: "New York",
        Year: "2019",
        Type: "Federal",
        Amount: 1360
      },
      {
        Location: "New York",
        Year: "2019",
        Type: "Local",
        Amount: 1596
      },
      {
        Location: "New York",
        Year: "2019",
        Type: "State",
        Amount: 1478
      },
      {
        Location: "New York",
        Year: "2020",
        Type: "Federal",
        Amount: "1360"
      },
      {
        Location: "New York",
        Year: "2020",
        Type: "Local",
        Amount: "1596"
      },
      {
        Location: "New York",
        Year: "2020",
        Type: "State",
        Amount: "1478"
      },
      {
        Location: "New York",
        Year: "2021",
        Type: "Federal",
        Amount: "1419"
      },
      {
        Location: "New York",
        Year: "2021",
        Type: "Local",
        Amount: "1655"
      },
      {
        Location: "New York",
        Year: "2021",
        Type: "State",
        Amount: "1537"
      },
      {
        Location: "Ohio",
        Year: "2019",
        Type: "Federal",
        Amount: 1407
      },
      {
        Location: "Ohio",
        Year: "2019",
        Type: "Local",
        Amount: 1643
      },
      {
        Location: "Ohio",
        Year: "2019",
        Type: "State",
        Amount: 1525
      },
      {
        Location: "Ohio",
        Year: "2020",
        Type: "Federal",
        Amount: "1407"
      },
      {
        Location: "Ohio",
        Year: "2020",
        Type: "Local",
        Amount: "1643"
      },
      {
        Location: "Ohio",
        Year: "2020",
        Type: "State",
        Amount: "1525"
      },
      {
        Location: "Ohio",
        Year: "2021",
        Type: "Federal",
        Amount: "1466"
      },
      {
        Location: "Ohio",
        Year: "2021",
        Type: "Local",
        Amount: "1702"
      },
      {
        Location: "Ohio",
        Year: "2021",
        Type: "State",
        Amount: "1584"
      },
      {
        Location: "Oklahoma",
        Year: "2019",
        Type: "Federal",
        Amount: 1372
      },
      {
        Location: "Oklahoma",
        Year: "2019",
        Type: "Local",
        Amount: 1608
      },
      {
        Location: "Oklahoma",
        Year: "2019",
        Type: "State",
        Amount: 1490
      },
      {
        Location: "Oklahoma",
        Year: "2020",
        Type: "Federal",
        Amount: "1372"
      },
      {
        Location: "Oklahoma",
        Year: "2020",
        Type: "Local",
        Amount: "1608"
      },
      {
        Location: "Oklahoma",
        Year: "2020",
        Type: "State",
        Amount: "1490"
      },
      {
        Location: "Oklahoma",
        Year: "2021",
        Type: "Federal",
        Amount: "1431"
      },
      {
        Location: "Oklahoma",
        Year: "2021",
        Type: "Local",
        Amount: "1667"
      },
      {
        Location: "Oklahoma",
        Year: "2021",
        Type: "State",
        Amount: "1549"
      },
      {
        Location: "Oregon",
        Year: "2019",
        Type: "Federal",
        Amount: 1379
      },
      {
        Location: "Oregon",
        Year: "2019",
        Type: "Local",
        Amount: 1615
      },
      {
        Location: "Oregon",
        Year: "2019",
        Type: "State",
        Amount: 1497
      },
      {
        Location: "Oregon",
        Year: "2020",
        Type: "Federal",
        Amount: "1379"
      },
      {
        Location: "Oregon",
        Year: "2020",
        Type: "Local",
        Amount: "1615"
      },
      {
        Location: "Oregon",
        Year: "2020",
        Type: "State",
        Amount: "1497"
      },
      {
        Location: "Oregon",
        Year: "2021",
        Type: "Federal",
        Amount: "1438"
      },
      {
        Location: "Oregon",
        Year: "2021",
        Type: "Local",
        Amount: "1674"
      },
      {
        Location: "Oregon",
        Year: "2021",
        Type: "State",
        Amount: "1556"
      },
      {
        Location: "Pennsylvania",
        Year: "2019",
        Type: "Federal",
        Amount: 1354
      },
      {
        Location: "Pennsylvania",
        Year: "2019",
        Type: "Local",
        Amount: 1590
      },
      {
        Location: "Pennsylvania",
        Year: "2019",
        Type: "State",
        Amount: 1472
      },
      {
        Location: "Pennsylvania",
        Year: "2020",
        Type: "Federal",
        Amount: "1354"
      },
      {
        Location: "Pennsylvania",
        Year: "2020",
        Type: "Local",
        Amount: "1590"
      },
      {
        Location: "Pennsylvania",
        Year: "2020",
        Type: "State",
        Amount: "1472"
      },
      {
        Location: "Pennsylvania",
        Year: "2021",
        Type: "Federal",
        Amount: "1413"
      },
      {
        Location: "Pennsylvania",
        Year: "2021",
        Type: "Local",
        Amount: "1649"
      },
      {
        Location: "Pennsylvania",
        Year: "2021",
        Type: "State",
        Amount: "1531"
      },
      {
        Location: "Puerto Rico",
        Year: "2019",
        Type: "Federal",
        Amount: 1363
      },
      {
        Location: "Puerto Rico",
        Year: "2019",
        Type: "Local",
        Amount: 1599
      },
      {
        Location: "Puerto Rico",
        Year: "2019",
        Type: "State",
        Amount: 1481
      },
      {
        Location: "Puerto Rico",
        Year: "2020",
        Type: "Federal",
        Amount: "1363"
      },
      {
        Location: "Puerto Rico",
        Year: "2020",
        Type: "Local",
        Amount: "1599"
      },
      {
        Location: "Puerto Rico",
        Year: "2020",
        Type: "State",
        Amount: "1481"
      },
      {
        Location: "Puerto Rico",
        Year: "2021",
        Type: "Federal",
        Amount: "1422"
      },
      {
        Location: "Puerto Rico",
        Year: "2021",
        Type: "Local",
        Amount: "1658"
      },
      {
        Location: "Puerto Rico",
        Year: "2021",
        Type: "State",
        Amount: "1540"
      },
      {
        Location: "Rhode Island",
        Year: "2019",
        Type: "Federal",
        Amount: 1411
      },
      {
        Location: "Rhode Island",
        Year: "2019",
        Type: "Local",
        Amount: 1647
      },
      {
        Location: "Rhode Island",
        Year: "2019",
        Type: "State",
        Amount: 1529
      },
      {
        Location: "Rhode Island",
        Year: "2020",
        Type: "Federal",
        Amount: "1411"
      },
      {
        Location: "Rhode Island",
        Year: "2020",
        Type: "Local",
        Amount: "1647"
      },
      {
        Location: "Rhode Island",
        Year: "2020",
        Type: "State",
        Amount: "1529"
      },
      {
        Location: "Rhode Island",
        Year: "2021",
        Type: "Federal",
        Amount: "1470"
      },
      {
        Location: "Rhode Island",
        Year: "2021",
        Type: "Local",
        Amount: "1706"
      },
      {
        Location: "Rhode Island",
        Year: "2021",
        Type: "State",
        Amount: "1588"
      },
      {
        Location: "Republic of Palau",
        Year: "2019",
        Type: "Federal",
        Amount: "1412"
      },
      {
        Location: "Republic of Palau",
        Year: "2019",
        Type: "Local",
        Amount: "1648"
      },
      {
        Location: "Republic of Palau",
        Year: "2019",
        Type: "State",
        Amount: "1530"
      },
      {
        Location: "Republic of Palau",
        Year: "2020",
        Type: "Federal",
        Amount: "1412"
      },
      {
        Location: "Republic of Palau",
        Year: "2020",
        Type: "Local",
        Amount: "1648"
      },
      {
        Location: "Republic of Palau",
        Year: "2020",
        Type: "State",
        Amount: "1530"
      },
      {
        Location: "Republic of Palau",
        Year: "2021",
        Type: "Federal",
        Amount: "1471"
      },
      {
        Location: "Republic of Palau",
        Year: "2021",
        Type: "Local",
        Amount: "1707"
      },
      {
        Location: "Republic of Palau",
        Year: "2021",
        Type: "State",
        Amount: "1589"
      },
      {
        Location: "South Carolina",
        Year: "2019",
        Type: "Federal",
        Amount: 1389
      },
      {
        Location: "South Carolina",
        Year: "2019",
        Type: "Local",
        Amount: 1625
      },
      {
        Location: "South Carolina",
        Year: "2019",
        Type: "State",
        Amount: 1507
      },
      {
        Location: "South Carolina",
        Year: "2020",
        Type: "Federal",
        Amount: "1389"
      },
      {
        Location: "South Carolina",
        Year: "2020",
        Type: "Local",
        Amount: "1625"
      },
      {
        Location: "South Carolina",
        Year: "2020",
        Type: "State",
        Amount: "1507"
      },
      {
        Location: "South Carolina",
        Year: "2021",
        Type: "Federal",
        Amount: "1448"
      },
      {
        Location: "South Carolina",
        Year: "2021",
        Type: "Local",
        Amount: "1684"
      },
      {
        Location: "South Carolina",
        Year: "2021",
        Type: "State",
        Amount: "1566"
      },
      {
        Location: "South Dakota",
        Year: "2019",
        Type: "Federal",
        Amount: 1373
      },
      {
        Location: "South Dakota",
        Year: "2019",
        Type: "Local",
        Amount: 1609
      },
      {
        Location: "South Dakota",
        Year: "2019",
        Type: "State",
        Amount: 1491
      },
      {
        Location: "South Dakota",
        Year: "2020",
        Type: "Federal",
        Amount: "1373"
      },
      {
        Location: "South Dakota",
        Year: "2020",
        Type: "Local",
        Amount: "1609"
      },
      {
        Location: "South Dakota",
        Year: "2020",
        Type: "State",
        Amount: "1491"
      },
      {
        Location: "South Dakota",
        Year: "2021",
        Type: "Federal",
        Amount: "1432"
      },
      {
        Location: "South Dakota",
        Year: "2021",
        Type: "Local",
        Amount: "1668"
      },
      {
        Location: "South Dakota",
        Year: "2021",
        Type: "State",
        Amount: "1550"
      },
      {
        Location: "Tennessee",
        Year: "2019",
        Type: "Federal",
        Amount: 1376
      },
      {
        Location: "Tennessee",
        Year: "2019",
        Type: "Local",
        Amount: 1612
      },
      {
        Location: "Tennessee",
        Year: "2019",
        Type: "State",
        Amount: 1494
      },
      {
        Location: "Tennessee",
        Year: "2020",
        Type: "Federal",
        Amount: "1376"
      },
      {
        Location: "Tennessee",
        Year: "2020",
        Type: "Local",
        Amount: "1612"
      },
      {
        Location: "Tennessee",
        Year: "2020",
        Type: "State",
        Amount: "1494"
      },
      {
        Location: "Tennessee",
        Year: "2021",
        Type: "Federal",
        Amount: "1435"
      },
      {
        Location: "Tennessee",
        Year: "2021",
        Type: "Local",
        Amount: "1671"
      },
      {
        Location: "Tennessee",
        Year: "2021",
        Type: "State",
        Amount: "1553"
      },
      {
        Location: "Texas",
        Year: "2019",
        Type: "Federal",
        Amount: 1361
      },
      {
        Location: "Texas",
        Year: "2019",
        Type: "Local",
        Amount: 1597
      },
      {
        Location: "Texas",
        Year: "2019",
        Type: "State",
        Amount: 1479
      },
      {
        Location: "Texas",
        Year: "2020",
        Type: "Federal",
        Amount: "1361"
      },
      {
        Location: "Texas",
        Year: "2020",
        Type: "Local",
        Amount: "1597"
      },
      {
        Location: "Texas",
        Year: "2020",
        Type: "State",
        Amount: "1479"
      },
      {
        Location: "Texas",
        Year: "2021",
        Type: "Federal",
        Amount: "1420"
      },
      {
        Location: "Texas",
        Year: "2021",
        Type: "Local",
        Amount: "1656"
      },
      {
        Location: "Texas",
        Year: "2021",
        Type: "State",
        Amount: "1538"
      },
      {
        Location: "Utah",
        Year: "2019",
        Type: "Federal",
        Amount: 1380
      },
      {
        Location: "Utah",
        Year: "2019",
        Type: "Local",
        Amount: 1616
      },
      {
        Location: "Utah",
        Year: "2019",
        Type: "State",
        Amount: 1498
      },
      {
        Location: "Utah",
        Year: "2020",
        Type: "Federal",
        Amount: "1380"
      },
      {
        Location: "Utah",
        Year: "2020",
        Type: "Local",
        Amount: "1616"
      },
      {
        Location: "Utah",
        Year: "2020",
        Type: "State",
        Amount: "1498"
      },
      {
        Location: "Utah",
        Year: "2021",
        Type: "Federal",
        Amount: "1439"
      },
      {
        Location: "Utah",
        Year: "2021",
        Type: "Local",
        Amount: "1675"
      },
      {
        Location: "Utah",
        Year: "2021",
        Type: "State",
        Amount: "1557"
      },
      {
        Location: "Virginia",
        Year: "2019",
        Type: "Federal",
        Amount: 1382
      },
      {
        Location: "Virginia",
        Year: "2019",
        Type: "Local",
        Amount: 1618
      },
      {
        Location: "Virginia",
        Year: "2019",
        Type: "State",
        Amount: 1500
      },
      {
        Location: "Virginia",
        Year: "2020",
        Type: "Federal",
        Amount: "1382"
      },
      {
        Location: "Virginia",
        Year: "2020",
        Type: "Local",
        Amount: "1618"
      },
      {
        Location: "Virginia",
        Year: "2020",
        Type: "State",
        Amount: "1500"
      },
      {
        Location: "Virginia",
        Year: "2021",
        Type: "Federal",
        Amount: "1441"
      },
      {
        Location: "Virginia",
        Year: "2021",
        Type: "Local",
        Amount: "1677"
      },
      {
        Location: "Virginia",
        Year: "2021",
        Type: "State",
        Amount: "1559"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2019",
        Type: "Federal",
        Amount: "1383"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2019",
        Type: "Local",
        Amount: "1619"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2019",
        Type: "State",
        Amount: "1501"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2020",
        Type: "Federal",
        Amount: "1383"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2020",
        Type: "Local",
        Amount: "1619"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2020",
        Type: "State",
        Amount: "1501"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2021",
        Type: "Federal",
        Amount: "1442"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2021",
        Type: "Local",
        Amount: "1678"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2021",
        Type: "State",
        Amount: "1560"
      },
      {
        Location: "Vermont",
        Year: "2019",
        Type: "Federal",
        Amount: 1370
      },
      {
        Location: "Vermont",
        Year: "2019",
        Type: "Local",
        Amount: 1606
      },
      {
        Location: "Vermont",
        Year: "2019",
        Type: "State",
        Amount: 1488
      },
      {
        Location: "Vermont",
        Year: "2020",
        Type: "Federal",
        Amount: "1370"
      },
      {
        Location: "Vermont",
        Year: "2020",
        Type: "Local",
        Amount: "1606"
      },
      {
        Location: "Vermont",
        Year: "2020",
        Type: "State",
        Amount: "1488"
      },
      {
        Location: "Vermont",
        Year: "2021",
        Type: "Federal",
        Amount: "1429"
      },
      {
        Location: "Vermont",
        Year: "2021",
        Type: "Local",
        Amount: "1665"
      },
      {
        Location: "Vermont",
        Year: "2021",
        Type: "State",
        Amount: "1547"
      },
      {
        Location: "Washington",
        Year: "2019",
        Type: "Federal",
        Amount: 1393
      },
      {
        Location: "Washington",
        Year: "2019",
        Type: "Local",
        Amount: 1629
      },
      {
        Location: "Washington",
        Year: "2019",
        Type: "State",
        Amount: 1511
      },
      {
        Location: "Washington",
        Year: "2020",
        Type: "Federal",
        Amount: "1393"
      },
      {
        Location: "Washington",
        Year: "2020",
        Type: "Local",
        Amount: "1629"
      },
      {
        Location: "Washington",
        Year: "2020",
        Type: "State",
        Amount: "1511"
      },
      {
        Location: "Washington",
        Year: "2021",
        Type: "Federal",
        Amount: "1452"
      },
      {
        Location: "Washington",
        Year: "2021",
        Type: "Local",
        Amount: "1688"
      },
      {
        Location: "Washington",
        Year: "2021",
        Type: "State",
        Amount: "1570"
      },
      {
        Location: "Wisconsin",
        Year: "2019",
        Type: "Federal",
        Amount: 1371
      },
      {
        Location: "Wisconsin",
        Year: "2019",
        Type: "Local",
        Amount: 1607
      },
      {
        Location: "Wisconsin",
        Year: "2019",
        Type: "State",
        Amount: 1489
      },
      {
        Location: "Wisconsin",
        Year: "2020",
        Type: "Federal",
        Amount: "1371"
      },
      {
        Location: "Wisconsin",
        Year: "2020",
        Type: "Local",
        Amount: "1607"
      },
      {
        Location: "Wisconsin",
        Year: "2020",
        Type: "State",
        Amount: "1489"
      },
      {
        Location: "Wisconsin",
        Year: "2021",
        Type: "Federal",
        Amount: "1430"
      },
      {
        Location: "Wisconsin",
        Year: "2021",
        Type: "Local",
        Amount: "1666"
      },
      {
        Location: "Wisconsin",
        Year: "2021",
        Type: "State",
        Amount: "1548"
      },
      {
        Location: "West Virginia",
        Year: "2019",
        Type: "Federal",
        Amount: 1397
      },
      {
        Location: "West Virginia",
        Year: "2019",
        Type: "Local",
        Amount: 1633
      },
      {
        Location: "West Virginia",
        Year: "2019",
        Type: "State",
        Amount: 1515
      },
      {
        Location: "West Virginia",
        Year: "2020",
        Type: "Federal",
        Amount: "1397"
      },
      {
        Location: "West Virginia",
        Year: "2020",
        Type: "Local",
        Amount: "1633"
      },
      {
        Location: "West Virginia",
        Year: "2020",
        Type: "State",
        Amount: "1515"
      },
      {
        Location: "West Virginia",
        Year: "2021",
        Type: "Federal",
        Amount: "1456"
      },
      {
        Location: "West Virginia",
        Year: "2021",
        Type: "Local",
        Amount: "1692"
      },
      {
        Location: "West Virginia",
        Year: "2021",
        Type: "State",
        Amount: "1574"
      },
      {
        Location: "Wyoming",
        Year: "2019",
        Type: "Federal",
        Amount: 1395
      },
      {
        Location: "Wyoming",
        Year: "2019",
        Type: "Local",
        Amount: 1631
      },
      {
        Location: "Wyoming",
        Year: "2019",
        Type: "State",
        Amount: 1513
      },
      {
        Location: "Wyoming",
        Year: "2020",
        Type: "Federal",
        Amount: "1395"
      },
      {
        Location: "Wyoming",
        Year: "2020",
        Type: "Local",
        Amount: "1631"
      },
      {
        Location: "Wyoming",
        Year: "2020",
        Type: "State",
        Amount: "1513"
      },
      {
        Location: "Wyoming",
        Year: "2021",
        Type: "Federal",
        Amount: "1454"
      },
      {
        Location: "Wyoming",
        Year: "2021",
        Type: "Local",
        Amount: "1690"
      },
      {
        Location: "Wyoming",
        Year: "2021",
        Type: "State",
        Amount: "1572"
      }
    ],
    formattedData: [
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Federal",
        Amount: 1377
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Local",
        Amount: 1613
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "State",
        Amount: 1495
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "Federal",
        Amount: 1377
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "Local",
        Amount: 1613
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "State",
        Amount: 1495
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "Federal",
        Amount: 1436
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "Local",
        Amount: 1672
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "State",
        Amount: 1554
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "Federal",
        Amount: 1375
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "Local",
        Amount: 1611
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "State",
        Amount: 1493
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "Federal",
        Amount: 1375
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "Local",
        Amount: 1611
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "State",
        Amount: 1493
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "Federal",
        Amount: 1434
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "Local",
        Amount: 1670
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "State",
        Amount: 1552
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "Federal",
        Amount: 1398
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "Local",
        Amount: 1634
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "State",
        Amount: 1516
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "Federal",
        Amount: 1398
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "Local",
        Amount: 1634
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "State",
        Amount: 1516
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "Federal",
        Amount: 1457
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "Local",
        Amount: 1693
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "State",
        Amount: 1575
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "Federal",
        Amount: 1388
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "Local",
        Amount: 1624
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "State",
        Amount: 1506
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "Federal",
        Amount: 1388
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "Local",
        Amount: 1624
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "State",
        Amount: 1506
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "Federal",
        Amount: 1447
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "Local",
        Amount: 1683
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "State",
        Amount: 1565
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "Federal",
        Amount: 1401
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "Local",
        Amount: 1637
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "State",
        Amount: 1519
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "Federal",
        Amount: 1401
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "Local",
        Amount: 1637
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "State",
        Amount: 1519
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "Federal",
        Amount: 1460
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "Local",
        Amount: 1696
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "State",
        Amount: 1578
      },
      {
        Location: "California",
        Year: "2019",
        Type: "Federal",
        Amount: 1381
      },
      {
        Location: "California",
        Year: "2019",
        Type: "Local",
        Amount: 1617
      },
      {
        Location: "California",
        Year: "2019",
        Type: "State",
        Amount: 1499
      },
      {
        Location: "California",
        Year: "2020",
        Type: "Federal",
        Amount: 1381
      },
      {
        Location: "California",
        Year: "2020",
        Type: "Local",
        Amount: 1617
      },
      {
        Location: "California",
        Year: "2020",
        Type: "State",
        Amount: 1499
      },
      {
        Location: "California",
        Year: "2021",
        Type: "Federal",
        Amount: 1440
      },
      {
        Location: "California",
        Year: "2021",
        Type: "Local",
        Amount: 1676
      },
      {
        Location: "California",
        Year: "2021",
        Type: "State",
        Amount: 1558
      },
      {
        Location: "Colorado",
        Year: "2019",
        Type: "Federal",
        Amount: 1369
      },
      {
        Location: "Colorado",
        Year: "2019",
        Type: "Local",
        Amount: 1605
      },
      {
        Location: "Colorado",
        Year: "2019",
        Type: "State",
        Amount: 1487
      },
      {
        Location: "Colorado",
        Year: "2020",
        Type: "Federal",
        Amount: 1369
      },
      {
        Location: "Colorado",
        Year: "2020",
        Type: "Local",
        Amount: 1605
      },
      {
        Location: "Colorado",
        Year: "2020",
        Type: "State",
        Amount: 1487
      },
      {
        Location: "Colorado",
        Year: "2021",
        Type: "Federal",
        Amount: 1428
      },
      {
        Location: "Colorado",
        Year: "2021",
        Type: "Local",
        Amount: 1664
      },
      {
        Location: "Colorado",
        Year: "2021",
        Type: "State",
        Amount: 1546
      },
      {
        Location: "Connecticut",
        Year: "2019",
        Type: "Federal",
        Amount: 1403
      },
      {
        Location: "Connecticut",
        Year: "2019",
        Type: "Local",
        Amount: 1639
      },
      {
        Location: "Connecticut",
        Year: "2019",
        Type: "State",
        Amount: 1521
      },
      {
        Location: "Connecticut",
        Year: "2020",
        Type: "Federal",
        Amount: 1403
      },
      {
        Location: "Connecticut",
        Year: "2020",
        Type: "Local",
        Amount: 1639
      },
      {
        Location: "Connecticut",
        Year: "2020",
        Type: "State",
        Amount: 1521
      },
      {
        Location: "Connecticut",
        Year: "2021",
        Type: "Federal",
        Amount: 1462
      },
      {
        Location: "Connecticut",
        Year: "2021",
        Type: "Local",
        Amount: 1698
      },
      {
        Location: "Connecticut",
        Year: "2021",
        Type: "State",
        Amount: 1580
      },
      {
        Location: "District of Columbia",
        Year: "2019",
        Type: "Federal",
        Amount: 1400
      },
      {
        Location: "District of Columbia",
        Year: "2019",
        Type: "Local",
        Amount: 1636
      },
      {
        Location: "District of Columbia",
        Year: "2019",
        Type: "State",
        Amount: 1518
      },
      {
        Location: "District of Columbia",
        Year: "2020",
        Type: "Federal",
        Amount: 1400
      },
      {
        Location: "District of Columbia",
        Year: "2020",
        Type: "Local",
        Amount: 1636
      },
      {
        Location: "District of Columbia",
        Year: "2020",
        Type: "State",
        Amount: 1518
      },
      {
        Location: "District of Columbia",
        Year: "2021",
        Type: "Federal",
        Amount: 1459
      },
      {
        Location: "District of Columbia",
        Year: "2021",
        Type: "Local",
        Amount: 1695
      },
      {
        Location: "District of Columbia",
        Year: "2021",
        Type: "State",
        Amount: 1577
      },
      {
        Location: "Delaware	",
        Year: "2019",
        Type: "Federal",
        Amount: "1384"
      },
      {
        Location: "Delaware	",
        Year: "2019",
        Type: "Local",
        Amount: "1620"
      },
      {
        Location: "Delaware	",
        Year: "2019",
        Type: "State",
        Amount: "1502"
      },
      {
        Location: "Delaware	",
        Year: "2020",
        Type: "Federal",
        Amount: "1384"
      },
      {
        Location: "Delaware	",
        Year: "2020",
        Type: "Local",
        Amount: "1620"
      },
      {
        Location: "Delaware	",
        Year: "2020",
        Type: "State",
        Amount: "1502"
      },
      {
        Location: "Delaware	",
        Year: "2021",
        Type: "Federal",
        Amount: "1443"
      },
      {
        Location: "Delaware	",
        Year: "2021",
        Type: "Local",
        Amount: "1679"
      },
      {
        Location: "Delaware	",
        Year: "2021",
        Type: "State",
        Amount: "1561"
      },
      {
        Location: "Florida	",
        Year: "2019",
        Type: "Federal",
        Amount: "1387"
      },
      {
        Location: "Florida	",
        Year: "2019",
        Type: "Local",
        Amount: "1623"
      },
      {
        Location: "Florida	",
        Year: "2019",
        Type: "State",
        Amount: "1505"
      },
      {
        Location: "Florida	",
        Year: "2020",
        Type: "Federal",
        Amount: "1387"
      },
      {
        Location: "Florida	",
        Year: "2020",
        Type: "Local",
        Amount: "1623"
      },
      {
        Location: "Florida	",
        Year: "2020",
        Type: "State",
        Amount: "1505"
      },
      {
        Location: "Florida	",
        Year: "2021",
        Type: "Federal",
        Amount: "1446"
      },
      {
        Location: "Florida	",
        Year: "2021",
        Type: "Local",
        Amount: "1682"
      },
      {
        Location: "Florida	",
        Year: "2021",
        Type: "State",
        Amount: "1564"
      },
      {
        Location: "Georgia	",
        Year: "2019",
        Type: "Federal",
        Amount: "1365"
      },
      {
        Location: "Georgia	",
        Year: "2019",
        Type: "Local",
        Amount: "1601"
      },
      {
        Location: "Georgia	",
        Year: "2019",
        Type: "State",
        Amount: "1483"
      },
      {
        Location: "Georgia	",
        Year: "2020",
        Type: "Federal",
        Amount: "1365"
      },
      {
        Location: "Georgia	",
        Year: "2020",
        Type: "Local",
        Amount: "1601"
      },
      {
        Location: "Georgia	",
        Year: "2020",
        Type: "State",
        Amount: "1483"
      },
      {
        Location: "Georgia	",
        Year: "2021",
        Type: "Federal",
        Amount: "1424"
      },
      {
        Location: "Georgia	",
        Year: "2021",
        Type: "Local",
        Amount: "1660"
      },
      {
        Location: "Georgia	",
        Year: "2021",
        Type: "State",
        Amount: "1542"
      },
      {
        Location: "Guam",
        Year: "2019",
        Type: "Federal",
        Amount: 1356
      },
      {
        Location: "Guam",
        Year: "2019",
        Type: "Local",
        Amount: 1592
      },
      {
        Location: "Guam",
        Year: "2019",
        Type: "State",
        Amount: 1474
      },
      {
        Location: "Guam",
        Year: "2020",
        Type: "Federal",
        Amount: 1356
      },
      {
        Location: "Guam",
        Year: "2020",
        Type: "Local",
        Amount: 1592
      },
      {
        Location: "Guam",
        Year: "2020",
        Type: "State",
        Amount: 1474
      },
      {
        Location: "Guam",
        Year: "2021",
        Type: "Federal",
        Amount: 1415
      },
      {
        Location: "Guam",
        Year: "2021",
        Type: "Local",
        Amount: 1651
      },
      {
        Location: "Guam",
        Year: "2021",
        Type: "State",
        Amount: 1533
      },
      {
        Location: "Hawaii	",
        Year: "2019",
        Type: "Federal",
        Amount: "1362"
      },
      {
        Location: "Hawaii	",
        Year: "2019",
        Type: "Local",
        Amount: "1598"
      },
      {
        Location: "Hawaii	",
        Year: "2019",
        Type: "State",
        Amount: "1480"
      },
      {
        Location: "Hawaii	",
        Year: "2020",
        Type: "Federal",
        Amount: "1362"
      },
      {
        Location: "Hawaii	",
        Year: "2020",
        Type: "Local",
        Amount: "1598"
      },
      {
        Location: "Hawaii	",
        Year: "2020",
        Type: "State",
        Amount: "1480"
      },
      {
        Location: "Hawaii	",
        Year: "2021",
        Type: "Federal",
        Amount: "1421"
      },
      {
        Location: "Hawaii	",
        Year: "2021",
        Type: "Local",
        Amount: "1657"
      },
      {
        Location: "Hawaii	",
        Year: "2021",
        Type: "State",
        Amount: "1539"
      },
      {
        Location: "Iowa",
        Year: "2019",
        Type: "Federal",
        Amount: 1394
      },
      {
        Location: "Iowa",
        Year: "2019",
        Type: "Local",
        Amount: 1630
      },
      {
        Location: "Iowa",
        Year: "2019",
        Type: "State",
        Amount: 1512
      },
      {
        Location: "Iowa",
        Year: "2020",
        Type: "Federal",
        Amount: 1394
      },
      {
        Location: "Iowa",
        Year: "2020",
        Type: "Local",
        Amount: 1630
      },
      {
        Location: "Iowa",
        Year: "2020",
        Type: "State",
        Amount: 1512
      },
      {
        Location: "Iowa",
        Year: "2021",
        Type: "Federal",
        Amount: 1453
      },
      {
        Location: "Iowa",
        Year: "2021",
        Type: "Local",
        Amount: 1689
      },
      {
        Location: "Iowa",
        Year: "2021",
        Type: "State",
        Amount: 1571
      },
      {
        Location: "Idaho",
        Year: "2019",
        Type: "Federal",
        Amount: 1374
      },
      {
        Location: "Idaho",
        Year: "2019",
        Type: "Local",
        Amount: 1610
      },
      {
        Location: "Idaho",
        Year: "2019",
        Type: "State",
        Amount: 1492
      },
      {
        Location: "Idaho",
        Year: "2020",
        Type: "Federal",
        Amount: 1374
      },
      {
        Location: "Idaho",
        Year: "2020",
        Type: "Local",
        Amount: 1610
      },
      {
        Location: "Idaho",
        Year: "2020",
        Type: "State",
        Amount: 1492
      },
      {
        Location: "Idaho",
        Year: "2021",
        Type: "Federal",
        Amount: 1433
      },
      {
        Location: "Idaho",
        Year: "2021",
        Type: "Local",
        Amount: 1669
      },
      {
        Location: "Idaho",
        Year: "2021",
        Type: "State",
        Amount: 1551
      },
      {
        Location: "Illinois	",
        Year: "2019",
        Type: "Federal",
        Amount: "1402"
      },
      {
        Location: "Illinois	",
        Year: "2019",
        Type: "Local",
        Amount: "1638"
      },
      {
        Location: "Illinois	",
        Year: "2019",
        Type: "State",
        Amount: "1520"
      },
      {
        Location: "Illinois	",
        Year: "2020",
        Type: "Federal",
        Amount: "1402"
      },
      {
        Location: "Illinois	",
        Year: "2020",
        Type: "Local",
        Amount: "1638"
      },
      {
        Location: "Illinois	",
        Year: "2020",
        Type: "State",
        Amount: "1520"
      },
      {
        Location: "Illinois	",
        Year: "2021",
        Type: "Federal",
        Amount: "1461"
      },
      {
        Location: "Illinois	",
        Year: "2021",
        Type: "Local",
        Amount: "1697"
      },
      {
        Location: "Illinois	",
        Year: "2021",
        Type: "State",
        Amount: "1579"
      },
      {
        Location: "Indiana	",
        Year: "2019",
        Type: "Federal",
        Amount: "1404"
      },
      {
        Location: "Indiana	",
        Year: "2019",
        Type: "Local",
        Amount: "1640"
      },
      {
        Location: "Indiana	",
        Year: "2019",
        Type: "State",
        Amount: "1522"
      },
      {
        Location: "Indiana	",
        Year: "2020",
        Type: "Federal",
        Amount: "1404"
      },
      {
        Location: "Indiana	",
        Year: "2020",
        Type: "Local",
        Amount: "1640"
      },
      {
        Location: "Indiana	",
        Year: "2020",
        Type: "State",
        Amount: "1522"
      },
      {
        Location: "Indiana	",
        Year: "2021",
        Type: "Federal",
        Amount: "1463"
      },
      {
        Location: "Indiana	",
        Year: "2021",
        Type: "Local",
        Amount: "1699"
      },
      {
        Location: "Indiana	",
        Year: "2021",
        Type: "State",
        Amount: "1581"
      },
      {
        Location: "Kansas	",
        Year: "2019",
        Type: "Federal",
        Amount: "1367"
      },
      {
        Location: "Kansas	",
        Year: "2019",
        Type: "Local",
        Amount: "1603"
      },
      {
        Location: "Kansas	",
        Year: "2019",
        Type: "State",
        Amount: "1485"
      },
      {
        Location: "Kansas	",
        Year: "2020",
        Type: "Federal",
        Amount: "1367"
      },
      {
        Location: "Kansas	",
        Year: "2020",
        Type: "Local",
        Amount: "1603"
      },
      {
        Location: "Kansas	",
        Year: "2020",
        Type: "State",
        Amount: "1485"
      },
      {
        Location: "Kansas",
        Year: "2021",
        Type: "Federal",
        Amount: 1426
      },
      {
        Location: "Kansas",
        Year: "2021",
        Type: "Local",
        Amount: 1662
      },
      {
        Location: "Kansas",
        Year: "2021",
        Type: "State",
        Amount: 1544
      },
      {
        Location: "Kentucky",
        Year: "2019",
        Type: "Federal",
        Amount: 1359
      },
      {
        Location: "Kentucky",
        Year: "2019",
        Type: "Local",
        Amount: 1595
      },
      {
        Location: "Kentucky",
        Year: "2019",
        Type: "State",
        Amount: 1477
      },
      {
        Location: "Kentucky",
        Year: "2020",
        Type: "Federal",
        Amount: 1359
      },
      {
        Location: "Kentucky",
        Year: "2020",
        Type: "Local",
        Amount: 1595
      },
      {
        Location: "Kentucky",
        Year: "2020",
        Type: "State",
        Amount: 1477
      },
      {
        Location: "Kentucky",
        Year: "2021",
        Type: "Federal",
        Amount: 1418
      },
      {
        Location: "Kentucky",
        Year: "2021",
        Type: "Local",
        Amount: 1654
      },
      {
        Location: "Kentucky",
        Year: "2021",
        Type: "State",
        Amount: 1536
      },
      {
        Location: "Louisiana",
        Year: "2019",
        Type: "Federal",
        Amount: 1409
      },
      {
        Location: "Louisiana",
        Year: "2019",
        Type: "Local",
        Amount: 1645
      },
      {
        Location: "Louisiana",
        Year: "2019",
        Type: "State",
        Amount: 1527
      },
      {
        Location: "Louisiana",
        Year: "2020",
        Type: "Federal",
        Amount: 1409
      },
      {
        Location: "Louisiana",
        Year: "2020",
        Type: "Local",
        Amount: 1645
      },
      {
        Location: "Louisiana",
        Year: "2020",
        Type: "State",
        Amount: 1527
      },
      {
        Location: "Louisiana",
        Year: "2021",
        Type: "Federal",
        Amount: 1468
      },
      {
        Location: "Louisiana",
        Year: "2021",
        Type: "Local",
        Amount: 1704
      },
      {
        Location: "Louisiana",
        Year: "2021",
        Type: "State",
        Amount: 1586
      },
      {
        Location: "Massachusetts",
        Year: "2019",
        Type: "Federal",
        Amount: 1366
      },
      {
        Location: "Massachusetts",
        Year: "2019",
        Type: "Local",
        Amount: 1602
      },
      {
        Location: "Massachusetts",
        Year: "2019",
        Type: "State",
        Amount: 1484
      },
      {
        Location: "Massachusetts",
        Year: "2020",
        Type: "Federal",
        Amount: 1366
      },
      {
        Location: "Massachusetts",
        Year: "2020",
        Type: "Local",
        Amount: 1602
      },
      {
        Location: "Massachusetts",
        Year: "2020",
        Type: "State",
        Amount: 1484
      },
      {
        Location: "Massachusetts",
        Year: "2021",
        Type: "Federal",
        Amount: 1425
      },
      {
        Location: "Massachusetts",
        Year: "2021",
        Type: "Local",
        Amount: 1661
      },
      {
        Location: "Massachusetts",
        Year: "2021",
        Type: "State",
        Amount: 1543
      },
      {
        Location: "Maryland",
        Year: "2019",
        Type: "Federal",
        Amount: 1386
      },
      {
        Location: "Maryland",
        Year: "2019",
        Type: "Local",
        Amount: 1622
      },
      {
        Location: "Maryland",
        Year: "2019",
        Type: "State",
        Amount: 1504
      },
      {
        Location: "Maryland",
        Year: "2020",
        Type: "Federal",
        Amount: 1386
      },
      {
        Location: "Maryland",
        Year: "2020",
        Type: "Local",
        Amount: 1622
      },
      {
        Location: "Maryland",
        Year: "2020",
        Type: "State",
        Amount: 1504
      },
      {
        Location: "Maryland",
        Year: "2021",
        Type: "Federal",
        Amount: 1445
      },
      {
        Location: "Maryland",
        Year: "2021",
        Type: "Local",
        Amount: 1681
      },
      {
        Location: "Maryland",
        Year: "2021",
        Type: "State",
        Amount: 1563
      },
      {
        Location: "Maine	",
        Year: "2019",
        Type: "Federal",
        Amount: "1385"
      },
      {
        Location: "Maine	",
        Year: "2019",
        Type: "Local",
        Amount: "1621"
      },
      {
        Location: "Maine	",
        Year: "2019",
        Type: "State",
        Amount: "1503"
      },
      {
        Location: "Maine	",
        Year: "2020",
        Type: "Federal",
        Amount: "1385"
      },
      {
        Location: "Maine	",
        Year: "2020",
        Type: "Local",
        Amount: "1621"
      },
      {
        Location: "Maine	",
        Year: "2020",
        Type: "State",
        Amount: "1503"
      },
      {
        Location: "Maine	",
        Year: "2021",
        Type: "Federal",
        Amount: "1444"
      },
      {
        Location: "Maine	",
        Year: "2021",
        Type: "Local",
        Amount: "1680"
      },
      {
        Location: "Maine	",
        Year: "2021",
        Type: "State",
        Amount: "1562"
      },
      {
        Location: "Marshall Islands",
        Year: "2019",
        Type: "Federal",
        Amount: 1408
      },
      {
        Location: "Marshall Islands",
        Year: "2019",
        Type: "Local",
        Amount: 1644
      },
      {
        Location: "Marshall Islands",
        Year: "2019",
        Type: "State",
        Amount: 1526
      },
      {
        Location: "Marshall Islands",
        Year: "2020",
        Type: "Federal",
        Amount: 1408
      },
      {
        Location: "Marshall Islands",
        Year: "2020",
        Type: "Local",
        Amount: 1644
      },
      {
        Location: "Marshall Islands",
        Year: "2020",
        Type: "State",
        Amount: 1526
      },
      {
        Location: "Marshall Islands",
        Year: "2021",
        Type: "Federal",
        Amount: 1467
      },
      {
        Location: "Marshall Islands",
        Year: "2021",
        Type: "Local",
        Amount: 1703
      },
      {
        Location: "Marshall Islands",
        Year: "2021",
        Type: "State",
        Amount: 1585
      },
      {
        Location: "Michigan",
        Year: "2019",
        Type: "Federal",
        Amount: 1390
      },
      {
        Location: "Michigan",
        Year: "2019",
        Type: "Local",
        Amount: 4011
      },
      {
        Location: "Michigan",
        Year: "2019",
        Type: "State",
        Amount: 1508
      },
      {
        Location: "Michigan",
        Year: "2020",
        Type: "Federal",
        Amount: 1390
      },
      {
        Location: "Michigan",
        Year: "2020",
        Type: "Local",
        Amount: 4111
      },
      {
        Location: "Michigan",
        Year: "2020",
        Type: "State",
        Amount: 1508
      },
      {
        Location: "Michigan",
        Year: "2021",
        Type: "Federal",
        Amount: 1449
      },
      {
        Location: "Michigan",
        Year: "2021",
        Type: "Local",
        Amount: 1685
      },
      {
        Location: "Michigan",
        Year: "2021",
        Type: "State",
        Amount: 1567
      },
      {
        Location: "Minnesota",
        Year: "2019",
        Type: "Federal",
        Amount: 1392
      },
      {
        Location: "Minnesota",
        Year: "2019",
        Type: "Local",
        Amount: 1628
      },
      {
        Location: "Minnesota",
        Year: "2019",
        Type: "State",
        Amount: 1510
      },
      {
        Location: "Minnesota",
        Year: "2020",
        Type: "Federal",
        Amount: 1392
      },
      {
        Location: "Minnesota",
        Year: "2020",
        Type: "Local",
        Amount: 1628
      },
      {
        Location: "Minnesota",
        Year: "2020",
        Type: "State",
        Amount: 1510
      },
      {
        Location: "Minnesota",
        Year: "2021",
        Type: "Federal",
        Amount: 1451
      },
      {
        Location: "Minnesota",
        Year: "2021",
        Type: "Local",
        Amount: 1687
      },
      {
        Location: "Minnesota",
        Year: "2021",
        Type: "State",
        Amount: 1569
      },
      {
        Location: "Missouri",
        Year: "2019",
        Type: "Federal",
        Amount: 1378
      },
      {
        Location: "Missouri",
        Year: "2019",
        Type: "Local",
        Amount: 1614
      },
      {
        Location: "Missouri",
        Year: "2019",
        Type: "State",
        Amount: 1496
      },
      {
        Location: "Missouri",
        Year: "2020",
        Type: "Federal",
        Amount: 1378
      },
      {
        Location: "Missouri",
        Year: "2020",
        Type: "Local",
        Amount: 1614
      },
      {
        Location: "Missouri",
        Year: "2020",
        Type: "State",
        Amount: 1496
      },
      {
        Location: "Missouri",
        Year: "2021",
        Type: "Federal",
        Amount: 1437
      },
      {
        Location: "Missouri",
        Year: "2021",
        Type: "Local",
        Amount: 1673
      },
      {
        Location: "Missouri",
        Year: "2021",
        Type: "State",
        Amount: 1555
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2019",
        Type: "Federal",
        Amount: "1368"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2019",
        Type: "Local",
        Amount: "1604"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2019",
        Type: "State",
        Amount: "1486"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2020",
        Type: "Federal",
        Amount: "1368"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2020",
        Type: "Local",
        Amount: "1604"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2020",
        Type: "State",
        Amount: "1486"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2021",
        Type: "Federal",
        Amount: "1427"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2021",
        Type: "Local",
        Amount: "1663"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2021",
        Type: "State",
        Amount: "1545"
      },
      {
        Location: "Mississippi",
        Year: "2019",
        Type: "Federal",
        Amount: 1406
      },
      {
        Location: "Mississippi",
        Year: "2019",
        Type: "Local",
        Amount: 1642
      },
      {
        Location: "Mississippi",
        Year: "2019",
        Type: "State",
        Amount: 1524
      },
      {
        Location: "Mississippi",
        Year: "2020",
        Type: "Federal",
        Amount: 1406
      },
      {
        Location: "Mississippi",
        Year: "2020",
        Type: "Local",
        Amount: 1642
      },
      {
        Location: "Mississippi",
        Year: "2020",
        Type: "State",
        Amount: 1524
      },
      {
        Location: "Mississippi",
        Year: "2021",
        Type: "Federal",
        Amount: 1465
      },
      {
        Location: "Mississippi",
        Year: "2021",
        Type: "Local",
        Amount: 1701
      },
      {
        Location: "Mississippi",
        Year: "2021",
        Type: "State",
        Amount: 1583
      },
      {
        Location: "Montana",
        Year: "2019",
        Type: "Federal",
        Amount: 1364
      },
      {
        Location: "Montana",
        Year: "2019",
        Type: "Local",
        Amount: 1600
      },
      {
        Location: "Montana",
        Year: "2019",
        Type: "State",
        Amount: 1482
      },
      {
        Location: "Montana",
        Year: "2020",
        Type: "Federal",
        Amount: 1364
      },
      {
        Location: "Montana",
        Year: "2020",
        Type: "Local",
        Amount: 1600
      },
      {
        Location: "Montana",
        Year: "2020",
        Type: "State",
        Amount: 1482
      },
      {
        Location: "Montana",
        Year: "2021",
        Type: "Federal",
        Amount: 1423
      },
      {
        Location: "Montana",
        Year: "2021",
        Type: "Local",
        Amount: 1659
      },
      {
        Location: "Montana",
        Year: "2021",
        Type: "State",
        Amount: 1541
      },
      {
        Location: "North Carolina",
        Year: "2019",
        Type: "Federal",
        Amount: 1358
      },
      {
        Location: "North Carolina",
        Year: "2019",
        Type: "Local",
        Amount: 1594
      },
      {
        Location: "North Carolina",
        Year: "2019",
        Type: "State",
        Amount: 1476
      },
      {
        Location: "North Carolina",
        Year: "2020",
        Type: "Federal",
        Amount: 1358
      },
      {
        Location: "North Carolina",
        Year: "2020",
        Type: "Local",
        Amount: 1594
      },
      {
        Location: "North Carolina",
        Year: "2020",
        Type: "State",
        Amount: 1476
      },
      {
        Location: "North Carolina",
        Year: "2021",
        Type: "Federal",
        Amount: 1417
      },
      {
        Location: "North Carolina",
        Year: "2021",
        Type: "Local",
        Amount: 1653
      },
      {
        Location: "North Carolina",
        Year: "2021",
        Type: "State",
        Amount: 1535
      },
      {
        Location: "North Dakota",
        Year: "2019",
        Type: "Federal",
        Amount: 1355
      },
      {
        Location: "North Dakota",
        Year: "2019",
        Type: "Local",
        Amount: 1591
      },
      {
        Location: "North Dakota",
        Year: "2019",
        Type: "State",
        Amount: 1473
      },
      {
        Location: "North Dakota",
        Year: "2020",
        Type: "Federal",
        Amount: 1355
      },
      {
        Location: "North Dakota",
        Year: "2020",
        Type: "Local",
        Amount: 1591
      },
      {
        Location: "North Dakota",
        Year: "2020",
        Type: "State",
        Amount: 1473
      },
      {
        Location: "North Dakota",
        Year: "2021",
        Type: "Federal",
        Amount: 1414
      },
      {
        Location: "North Dakota",
        Year: "2021",
        Type: "Local",
        Amount: 1650
      },
      {
        Location: "North Dakota",
        Year: "2021",
        Type: "State",
        Amount: 1532
      },
      {
        Location: "Nebraska",
        Year: "2019",
        Type: "Federal",
        Amount: 1391
      },
      {
        Location: "Nebraska",
        Year: "2019",
        Type: "Local",
        Amount: 1627
      },
      {
        Location: "Nebraska",
        Year: "2019",
        Type: "State",
        Amount: 1509
      },
      {
        Location: "Nebraska",
        Year: "2020",
        Type: "Federal",
        Amount: 1391
      },
      {
        Location: "Nebraska",
        Year: "2020",
        Type: "Local",
        Amount: 1627
      },
      {
        Location: "Nebraska",
        Year: "2020",
        Type: "State",
        Amount: 1509
      },
      {
        Location: "Nebraska",
        Year: "2021",
        Type: "Federal",
        Amount: 1450
      },
      {
        Location: "Nebraska",
        Year: "2021",
        Type: "Local",
        Amount: 1686
      },
      {
        Location: "Nebraska",
        Year: "2021",
        Type: "State",
        Amount: 1568
      },
      {
        Location: "New Hampshire",
        Year: "2019",
        Type: "Federal",
        Amount: 1405
      },
      {
        Location: "New Hampshire",
        Year: "2019",
        Type: "Local",
        Amount: 1641
      },
      {
        Location: "New Hampshire",
        Year: "2019",
        Type: "State",
        Amount: 1523
      },
      {
        Location: "New Hampshire",
        Year: "2020",
        Type: "Federal",
        Amount: 1405
      },
      {
        Location: "New Hampshire",
        Year: "2020",
        Type: "Local",
        Amount: 1641
      },
      {
        Location: "New Hampshire",
        Year: "2020",
        Type: "State",
        Amount: 1523
      },
      {
        Location: "New Hampshire",
        Year: "2021",
        Type: "Federal",
        Amount: 1464
      },
      {
        Location: "New Hampshire",
        Year: "2021",
        Type: "Local",
        Amount: 1700
      },
      {
        Location: "New Hampshire",
        Year: "2021",
        Type: "State",
        Amount: 1582
      },
      {
        Location: "New Jersey",
        Year: "2019",
        Type: "Federal",
        Amount: 1410
      },
      {
        Location: "New Jersey",
        Year: "2019",
        Type: "Local",
        Amount: 1646
      },
      {
        Location: "New Jersey",
        Year: "2019",
        Type: "State",
        Amount: 1528
      },
      {
        Location: "New Jersey",
        Year: "2020",
        Type: "Federal",
        Amount: 1410
      },
      {
        Location: "New Jersey",
        Year: "2020",
        Type: "Local",
        Amount: 1646
      },
      {
        Location: "New Jersey",
        Year: "2020",
        Type: "State",
        Amount: 1528
      },
      {
        Location: "New Jersey",
        Year: "2021",
        Type: "Federal",
        Amount: 1469
      },
      {
        Location: "New Jersey",
        Year: "2021",
        Type: "Local",
        Amount: 1705
      },
      {
        Location: "New Jersey",
        Year: "2021",
        Type: "State",
        Amount: 1587
      },
      {
        Location: "New Mexico",
        Year: "2019",
        Type: "Federal",
        Amount: 1399
      },
      {
        Location: "New Mexico",
        Year: "2019",
        Type: "Local",
        Amount: 1635
      },
      {
        Location: "New Mexico",
        Year: "2019",
        Type: "State",
        Amount: 1517
      },
      {
        Location: "New Mexico",
        Year: "2020",
        Type: "Federal",
        Amount: 1399
      },
      {
        Location: "New Mexico",
        Year: "2020",
        Type: "Local",
        Amount: 1635
      },
      {
        Location: "New Mexico",
        Year: "2020",
        Type: "State",
        Amount: 1517
      },
      {
        Location: "New Mexico",
        Year: "2021",
        Type: "Federal",
        Amount: 1458
      },
      {
        Location: "New Mexico",
        Year: "2021",
        Type: "Local",
        Amount: 1694
      },
      {
        Location: "New Mexico",
        Year: "2021",
        Type: "State",
        Amount: 1576
      },
      {
        Location: "Nevada",
        Year: "2019",
        Type: "Federal",
        Amount: 1357
      },
      {
        Location: "Nevada",
        Year: "2019",
        Type: "Local",
        Amount: 1593
      },
      {
        Location: "Nevada",
        Year: "2019",
        Type: "State",
        Amount: 1475
      },
      {
        Location: "Nevada",
        Year: "2020",
        Type: "Federal",
        Amount: 1357
      },
      {
        Location: "Nevada",
        Year: "2020",
        Type: "Local",
        Amount: 1593
      },
      {
        Location: "Nevada",
        Year: "2020",
        Type: "State",
        Amount: 1475
      },
      {
        Location: "Nevada",
        Year: "2021",
        Type: "Federal",
        Amount: 1416
      },
      {
        Location: "Nevada",
        Year: "2021",
        Type: "Local",
        Amount: 1652
      },
      {
        Location: "Nevada",
        Year: "2021",
        Type: "State",
        Amount: 1534
      },
      {
        Location: "New York",
        Year: "2019",
        Type: "Federal",
        Amount: 1360
      },
      {
        Location: "New York",
        Year: "2019",
        Type: "Local",
        Amount: 1596
      },
      {
        Location: "New York",
        Year: "2019",
        Type: "State",
        Amount: 1478
      },
      {
        Location: "New York",
        Year: "2020",
        Type: "Federal",
        Amount: 1360
      },
      {
        Location: "New York",
        Year: "2020",
        Type: "Local",
        Amount: 1596
      },
      {
        Location: "New York",
        Year: "2020",
        Type: "State",
        Amount: 1478
      },
      {
        Location: "New York",
        Year: "2021",
        Type: "Federal",
        Amount: 1419
      },
      {
        Location: "New York",
        Year: "2021",
        Type: "Local",
        Amount: 1655
      },
      {
        Location: "New York",
        Year: "2021",
        Type: "State",
        Amount: 1537
      },
      {
        Location: "Ohio",
        Year: "2019",
        Type: "Federal",
        Amount: 1407
      },
      {
        Location: "Ohio",
        Year: "2019",
        Type: "Local",
        Amount: 1643
      },
      {
        Location: "Ohio",
        Year: "2019",
        Type: "State",
        Amount: 1525
      },
      {
        Location: "Ohio",
        Year: "2020",
        Type: "Federal",
        Amount: 1407
      },
      {
        Location: "Ohio",
        Year: "2020",
        Type: "Local",
        Amount: 1643
      },
      {
        Location: "Ohio",
        Year: "2020",
        Type: "State",
        Amount: 1525
      },
      {
        Location: "Ohio",
        Year: "2021",
        Type: "Federal",
        Amount: 1466
      },
      {
        Location: "Ohio",
        Year: "2021",
        Type: "Local",
        Amount: 1702
      },
      {
        Location: "Ohio",
        Year: "2021",
        Type: "State",
        Amount: 1584
      },
      {
        Location: "Oklahoma",
        Year: "2019",
        Type: "Federal",
        Amount: 1372
      },
      {
        Location: "Oklahoma",
        Year: "2019",
        Type: "Local",
        Amount: 1608
      },
      {
        Location: "Oklahoma",
        Year: "2019",
        Type: "State",
        Amount: 1490
      },
      {
        Location: "Oklahoma",
        Year: "2020",
        Type: "Federal",
        Amount: 1372
      },
      {
        Location: "Oklahoma",
        Year: "2020",
        Type: "Local",
        Amount: 1608
      },
      {
        Location: "Oklahoma",
        Year: "2020",
        Type: "State",
        Amount: 1490
      },
      {
        Location: "Oklahoma",
        Year: "2021",
        Type: "Federal",
        Amount: 1431
      },
      {
        Location: "Oklahoma",
        Year: "2021",
        Type: "Local",
        Amount: 1667
      },
      {
        Location: "Oklahoma",
        Year: "2021",
        Type: "State",
        Amount: 1549
      },
      {
        Location: "Oregon",
        Year: "2019",
        Type: "Federal",
        Amount: 1379
      },
      {
        Location: "Oregon",
        Year: "2019",
        Type: "Local",
        Amount: 1615
      },
      {
        Location: "Oregon",
        Year: "2019",
        Type: "State",
        Amount: 1497
      },
      {
        Location: "Oregon",
        Year: "2020",
        Type: "Federal",
        Amount: 1379
      },
      {
        Location: "Oregon",
        Year: "2020",
        Type: "Local",
        Amount: 1615
      },
      {
        Location: "Oregon",
        Year: "2020",
        Type: "State",
        Amount: 1497
      },
      {
        Location: "Oregon",
        Year: "2021",
        Type: "Federal",
        Amount: 1438
      },
      {
        Location: "Oregon",
        Year: "2021",
        Type: "Local",
        Amount: 1674
      },
      {
        Location: "Oregon",
        Year: "2021",
        Type: "State",
        Amount: 1556
      },
      {
        Location: "Pennsylvania",
        Year: "2019",
        Type: "Federal",
        Amount: 1354
      },
      {
        Location: "Pennsylvania",
        Year: "2019",
        Type: "Local",
        Amount: 1590
      },
      {
        Location: "Pennsylvania",
        Year: "2019",
        Type: "State",
        Amount: 1472
      },
      {
        Location: "Pennsylvania",
        Year: "2020",
        Type: "Federal",
        Amount: 1354
      },
      {
        Location: "Pennsylvania",
        Year: "2020",
        Type: "Local",
        Amount: 1590
      },
      {
        Location: "Pennsylvania",
        Year: "2020",
        Type: "State",
        Amount: 1472
      },
      {
        Location: "Pennsylvania",
        Year: "2021",
        Type: "Federal",
        Amount: 1413
      },
      {
        Location: "Pennsylvania",
        Year: "2021",
        Type: "Local",
        Amount: 1649
      },
      {
        Location: "Pennsylvania",
        Year: "2021",
        Type: "State",
        Amount: 1531
      },
      {
        Location: "Puerto Rico",
        Year: "2019",
        Type: "Federal",
        Amount: 1363
      },
      {
        Location: "Puerto Rico",
        Year: "2019",
        Type: "Local",
        Amount: 1599
      },
      {
        Location: "Puerto Rico",
        Year: "2019",
        Type: "State",
        Amount: 1481
      },
      {
        Location: "Puerto Rico",
        Year: "2020",
        Type: "Federal",
        Amount: 1363
      },
      {
        Location: "Puerto Rico",
        Year: "2020",
        Type: "Local",
        Amount: 1599
      },
      {
        Location: "Puerto Rico",
        Year: "2020",
        Type: "State",
        Amount: 1481
      },
      {
        Location: "Puerto Rico",
        Year: "2021",
        Type: "Federal",
        Amount: 1422
      },
      {
        Location: "Puerto Rico",
        Year: "2021",
        Type: "Local",
        Amount: 1658
      },
      {
        Location: "Puerto Rico",
        Year: "2021",
        Type: "State",
        Amount: 1540
      },
      {
        Location: "Rhode Island",
        Year: "2019",
        Type: "Federal",
        Amount: 1411
      },
      {
        Location: "Rhode Island",
        Year: "2019",
        Type: "Local",
        Amount: 1647
      },
      {
        Location: "Rhode Island",
        Year: "2019",
        Type: "State",
        Amount: 1529
      },
      {
        Location: "Rhode Island",
        Year: "2020",
        Type: "Federal",
        Amount: 1411
      },
      {
        Location: "Rhode Island",
        Year: "2020",
        Type: "Local",
        Amount: 1647
      },
      {
        Location: "Rhode Island",
        Year: "2020",
        Type: "State",
        Amount: 1529
      },
      {
        Location: "Rhode Island",
        Year: "2021",
        Type: "Federal",
        Amount: 1470
      },
      {
        Location: "Rhode Island",
        Year: "2021",
        Type: "Local",
        Amount: 1706
      },
      {
        Location: "Rhode Island",
        Year: "2021",
        Type: "State",
        Amount: 1588
      },
      {
        Location: "Republic of Palau",
        Year: "2019",
        Type: "Federal",
        Amount: "1412"
      },
      {
        Location: "Republic of Palau",
        Year: "2019",
        Type: "Local",
        Amount: "1648"
      },
      {
        Location: "Republic of Palau",
        Year: "2019",
        Type: "State",
        Amount: "1530"
      },
      {
        Location: "Republic of Palau",
        Year: "2020",
        Type: "Federal",
        Amount: "1412"
      },
      {
        Location: "Republic of Palau",
        Year: "2020",
        Type: "Local",
        Amount: "1648"
      },
      {
        Location: "Republic of Palau",
        Year: "2020",
        Type: "State",
        Amount: "1530"
      },
      {
        Location: "Republic of Palau",
        Year: "2021",
        Type: "Federal",
        Amount: "1471"
      },
      {
        Location: "Republic of Palau",
        Year: "2021",
        Type: "Local",
        Amount: "1707"
      },
      {
        Location: "Republic of Palau",
        Year: "2021",
        Type: "State",
        Amount: "1589"
      },
      {
        Location: "South Carolina",
        Year: "2019",
        Type: "Federal",
        Amount: 1389
      },
      {
        Location: "South Carolina",
        Year: "2019",
        Type: "Local",
        Amount: 1625
      },
      {
        Location: "South Carolina",
        Year: "2019",
        Type: "State",
        Amount: 1507
      },
      {
        Location: "South Carolina",
        Year: "2020",
        Type: "Federal",
        Amount: 1389
      },
      {
        Location: "South Carolina",
        Year: "2020",
        Type: "Local",
        Amount: 1625
      },
      {
        Location: "South Carolina",
        Year: "2020",
        Type: "State",
        Amount: 1507
      },
      {
        Location: "South Carolina",
        Year: "2021",
        Type: "Federal",
        Amount: 1448
      },
      {
        Location: "South Carolina",
        Year: "2021",
        Type: "Local",
        Amount: 1684
      },
      {
        Location: "South Carolina",
        Year: "2021",
        Type: "State",
        Amount: 1566
      },
      {
        Location: "South Dakota",
        Year: "2019",
        Type: "Federal",
        Amount: 1373
      },
      {
        Location: "South Dakota",
        Year: "2019",
        Type: "Local",
        Amount: 1609
      },
      {
        Location: "South Dakota",
        Year: "2019",
        Type: "State",
        Amount: 1491
      },
      {
        Location: "South Dakota",
        Year: "2020",
        Type: "Federal",
        Amount: 1373
      },
      {
        Location: "South Dakota",
        Year: "2020",
        Type: "Local",
        Amount: 1609
      },
      {
        Location: "South Dakota",
        Year: "2020",
        Type: "State",
        Amount: 1491
      },
      {
        Location: "South Dakota",
        Year: "2021",
        Type: "Federal",
        Amount: 1432
      },
      {
        Location: "South Dakota",
        Year: "2021",
        Type: "Local",
        Amount: 1668
      },
      {
        Location: "South Dakota",
        Year: "2021",
        Type: "State",
        Amount: 1550
      },
      {
        Location: "Tennessee",
        Year: "2019",
        Type: "Federal",
        Amount: 1376
      },
      {
        Location: "Tennessee",
        Year: "2019",
        Type: "Local",
        Amount: 1612
      },
      {
        Location: "Tennessee",
        Year: "2019",
        Type: "State",
        Amount: 1494
      },
      {
        Location: "Tennessee",
        Year: "2020",
        Type: "Federal",
        Amount: 1376
      },
      {
        Location: "Tennessee",
        Year: "2020",
        Type: "Local",
        Amount: 1612
      },
      {
        Location: "Tennessee",
        Year: "2020",
        Type: "State",
        Amount: 1494
      },
      {
        Location: "Tennessee",
        Year: "2021",
        Type: "Federal",
        Amount: 1435
      },
      {
        Location: "Tennessee",
        Year: "2021",
        Type: "Local",
        Amount: 1671
      },
      {
        Location: "Tennessee",
        Year: "2021",
        Type: "State",
        Amount: 1553
      },
      {
        Location: "Texas",
        Year: "2019",
        Type: "Federal",
        Amount: 1361
      },
      {
        Location: "Texas",
        Year: "2019",
        Type: "Local",
        Amount: 1597
      },
      {
        Location: "Texas",
        Year: "2019",
        Type: "State",
        Amount: 1479
      },
      {
        Location: "Texas",
        Year: "2020",
        Type: "Federal",
        Amount: 1361
      },
      {
        Location: "Texas",
        Year: "2020",
        Type: "Local",
        Amount: 1597
      },
      {
        Location: "Texas",
        Year: "2020",
        Type: "State",
        Amount: 1479
      },
      {
        Location: "Texas",
        Year: "2021",
        Type: "Federal",
        Amount: 1420
      },
      {
        Location: "Texas",
        Year: "2021",
        Type: "Local",
        Amount: 1656
      },
      {
        Location: "Texas",
        Year: "2021",
        Type: "State",
        Amount: 1538
      },
      {
        Location: "Utah",
        Year: "2019",
        Type: "Federal",
        Amount: 1380
      },
      {
        Location: "Utah",
        Year: "2019",
        Type: "Local",
        Amount: 1616
      },
      {
        Location: "Utah",
        Year: "2019",
        Type: "State",
        Amount: 1498
      },
      {
        Location: "Utah",
        Year: "2020",
        Type: "Federal",
        Amount: 1380
      },
      {
        Location: "Utah",
        Year: "2020",
        Type: "Local",
        Amount: 1616
      },
      {
        Location: "Utah",
        Year: "2020",
        Type: "State",
        Amount: 1498
      },
      {
        Location: "Utah",
        Year: "2021",
        Type: "Federal",
        Amount: 1439
      },
      {
        Location: "Utah",
        Year: "2021",
        Type: "Local",
        Amount: 1675
      },
      {
        Location: "Utah",
        Year: "2021",
        Type: "State",
        Amount: 1557
      },
      {
        Location: "Virginia",
        Year: "2019",
        Type: "Federal",
        Amount: 1382
      },
      {
        Location: "Virginia",
        Year: "2019",
        Type: "Local",
        Amount: 1618
      },
      {
        Location: "Virginia",
        Year: "2019",
        Type: "State",
        Amount: 1500
      },
      {
        Location: "Virginia",
        Year: "2020",
        Type: "Federal",
        Amount: 1382
      },
      {
        Location: "Virginia",
        Year: "2020",
        Type: "Local",
        Amount: 1618
      },
      {
        Location: "Virginia",
        Year: "2020",
        Type: "State",
        Amount: 1500
      },
      {
        Location: "Virginia",
        Year: "2021",
        Type: "Federal",
        Amount: 1441
      },
      {
        Location: "Virginia",
        Year: "2021",
        Type: "Local",
        Amount: 1677
      },
      {
        Location: "Virginia",
        Year: "2021",
        Type: "State",
        Amount: 1559
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2019",
        Type: "Federal",
        Amount: "1383"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2019",
        Type: "Local",
        Amount: "1619"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2019",
        Type: "State",
        Amount: "1501"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2020",
        Type: "Federal",
        Amount: "1383"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2020",
        Type: "Local",
        Amount: "1619"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2020",
        Type: "State",
        Amount: "1501"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2021",
        Type: "Federal",
        Amount: "1442"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2021",
        Type: "Local",
        Amount: "1678"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2021",
        Type: "State",
        Amount: "1560"
      },
      {
        Location: "Vermont",
        Year: "2019",
        Type: "Federal",
        Amount: 1370
      },
      {
        Location: "Vermont",
        Year: "2019",
        Type: "Local",
        Amount: 1606
      },
      {
        Location: "Vermont",
        Year: "2019",
        Type: "State",
        Amount: 1488
      },
      {
        Location: "Vermont",
        Year: "2020",
        Type: "Federal",
        Amount: 1370
      },
      {
        Location: "Vermont",
        Year: "2020",
        Type: "Local",
        Amount: 1606
      },
      {
        Location: "Vermont",
        Year: "2020",
        Type: "State",
        Amount: 1488
      },
      {
        Location: "Vermont",
        Year: "2021",
        Type: "Federal",
        Amount: 1429
      },
      {
        Location: "Vermont",
        Year: "2021",
        Type: "Local",
        Amount: 1665
      },
      {
        Location: "Vermont",
        Year: "2021",
        Type: "State",
        Amount: 1547
      },
      {
        Location: "Washington",
        Year: "2019",
        Type: "Federal",
        Amount: 1393
      },
      {
        Location: "Washington",
        Year: "2019",
        Type: "Local",
        Amount: 1629
      },
      {
        Location: "Washington",
        Year: "2019",
        Type: "State",
        Amount: 1511
      },
      {
        Location: "Washington",
        Year: "2020",
        Type: "Federal",
        Amount: 1393
      },
      {
        Location: "Washington",
        Year: "2020",
        Type: "Local",
        Amount: 1629
      },
      {
        Location: "Washington",
        Year: "2020",
        Type: "State",
        Amount: 1511
      },
      {
        Location: "Washington",
        Year: "2021",
        Type: "Federal",
        Amount: 1452
      },
      {
        Location: "Washington",
        Year: "2021",
        Type: "Local",
        Amount: 1688
      },
      {
        Location: "Washington",
        Year: "2021",
        Type: "State",
        Amount: 1570
      },
      {
        Location: "Wisconsin",
        Year: "2019",
        Type: "Federal",
        Amount: 1371
      },
      {
        Location: "Wisconsin",
        Year: "2019",
        Type: "Local",
        Amount: 1607
      },
      {
        Location: "Wisconsin",
        Year: "2019",
        Type: "State",
        Amount: 1489
      },
      {
        Location: "Wisconsin",
        Year: "2020",
        Type: "Federal",
        Amount: 1371
      },
      {
        Location: "Wisconsin",
        Year: "2020",
        Type: "Local",
        Amount: 1607
      },
      {
        Location: "Wisconsin",
        Year: "2020",
        Type: "State",
        Amount: 1489
      },
      {
        Location: "Wisconsin",
        Year: "2021",
        Type: "Federal",
        Amount: 1430
      },
      {
        Location: "Wisconsin",
        Year: "2021",
        Type: "Local",
        Amount: 1666
      },
      {
        Location: "Wisconsin",
        Year: "2021",
        Type: "State",
        Amount: 1548
      },
      {
        Location: "West Virginia",
        Year: "2019",
        Type: "Federal",
        Amount: 1397
      },
      {
        Location: "West Virginia",
        Year: "2019",
        Type: "Local",
        Amount: 1633
      },
      {
        Location: "West Virginia",
        Year: "2019",
        Type: "State",
        Amount: 1515
      },
      {
        Location: "West Virginia",
        Year: "2020",
        Type: "Federal",
        Amount: 1397
      },
      {
        Location: "West Virginia",
        Year: "2020",
        Type: "Local",
        Amount: 1633
      },
      {
        Location: "West Virginia",
        Year: "2020",
        Type: "State",
        Amount: 1515
      },
      {
        Location: "West Virginia",
        Year: "2021",
        Type: "Federal",
        Amount: 1456
      },
      {
        Location: "West Virginia",
        Year: "2021",
        Type: "Local",
        Amount: 1692
      },
      {
        Location: "West Virginia",
        Year: "2021",
        Type: "State",
        Amount: 1574
      },
      {
        Location: "Wyoming",
        Year: "2019",
        Type: "Federal",
        Amount: 1395
      },
      {
        Location: "Wyoming",
        Year: "2019",
        Type: "Local",
        Amount: 1631
      },
      {
        Location: "Wyoming",
        Year: "2019",
        Type: "State",
        Amount: 1513
      },
      {
        Location: "Wyoming",
        Year: "2020",
        Type: "Federal",
        Amount: 1395
      },
      {
        Location: "Wyoming",
        Year: "2020",
        Type: "Local",
        Amount: 1631
      },
      {
        Location: "Wyoming",
        Year: "2020",
        Type: "State",
        Amount: 1513
      },
      {
        Location: "Wyoming",
        Year: "2021",
        Type: "Federal",
        Amount: 1454
      },
      {
        Location: "Wyoming",
        Year: "2021",
        Type: "Local",
        Amount: 1690
      },
      {
        Location: "Wyoming",
        Year: "2021",
        Type: "State",
        Amount: 1572
      }
    ]
  },
  runtime: {
    editorErrorMessage: [
      "No data"
    ]
  }
}, Ut = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, Pt = {
  "dashboard_aggregate_example_state_type (1).csv": {
    data: [
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Federal",
        Amount: 1377
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Local",
        Amount: 1613
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "State",
        Amount: 1495
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "Federal",
        Amount: 1377
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "Local",
        Amount: 1613
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "State",
        Amount: 1495
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "Federal",
        Amount: 1436
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "Local",
        Amount: 1672
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "State",
        Amount: 1554
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "Federal",
        Amount: 1375
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "Local",
        Amount: 1611
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "State",
        Amount: 1493
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "Federal",
        Amount: 1375
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "Local",
        Amount: 1611
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "State",
        Amount: 1493
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "Federal",
        Amount: 1434
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "Local",
        Amount: 1670
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "State",
        Amount: 1552
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "Federal",
        Amount: 1398
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "Local",
        Amount: 1634
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "State",
        Amount: 1516
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "Federal",
        Amount: 1398
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "Local",
        Amount: 1634
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "State",
        Amount: 1516
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "Federal",
        Amount: 1457
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "Local",
        Amount: 1693
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "State",
        Amount: 1575
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "Federal",
        Amount: 1388
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "Local",
        Amount: 1624
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "State",
        Amount: 1506
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "Federal",
        Amount: 1388
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "Local",
        Amount: 1624
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "State",
        Amount: 1506
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "Federal",
        Amount: 1447
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "Local",
        Amount: 1683
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "State",
        Amount: 1565
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "Federal",
        Amount: 1401
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "Local",
        Amount: 1637
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "State",
        Amount: 1519
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "Federal",
        Amount: 1401
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "Local",
        Amount: 1637
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "State",
        Amount: 1519
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "Federal",
        Amount: 1460
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "Local",
        Amount: 1696
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "State",
        Amount: 1578
      },
      {
        Location: "California",
        Year: "2019",
        Type: "Federal",
        Amount: 1381
      },
      {
        Location: "California",
        Year: "2019",
        Type: "Local",
        Amount: 1617
      },
      {
        Location: "California",
        Year: "2019",
        Type: "State",
        Amount: 1499
      },
      {
        Location: "California",
        Year: "2020",
        Type: "Federal",
        Amount: 1381
      },
      {
        Location: "California",
        Year: "2020",
        Type: "Local",
        Amount: 1617
      },
      {
        Location: "California",
        Year: "2020",
        Type: "State",
        Amount: 1499
      },
      {
        Location: "California",
        Year: "2021",
        Type: "Federal",
        Amount: 1440
      },
      {
        Location: "California",
        Year: "2021",
        Type: "Local",
        Amount: 1676
      },
      {
        Location: "California",
        Year: "2021",
        Type: "State",
        Amount: 1558
      },
      {
        Location: "Colorado",
        Year: "2019",
        Type: "Federal",
        Amount: 1369
      },
      {
        Location: "Colorado",
        Year: "2019",
        Type: "Local",
        Amount: 1605
      },
      {
        Location: "Colorado",
        Year: "2019",
        Type: "State",
        Amount: 1487
      },
      {
        Location: "Colorado",
        Year: "2020",
        Type: "Federal",
        Amount: 1369
      },
      {
        Location: "Colorado",
        Year: "2020",
        Type: "Local",
        Amount: 1605
      },
      {
        Location: "Colorado",
        Year: "2020",
        Type: "State",
        Amount: 1487
      },
      {
        Location: "Colorado",
        Year: "2021",
        Type: "Federal",
        Amount: 1428
      },
      {
        Location: "Colorado",
        Year: "2021",
        Type: "Local",
        Amount: 1664
      },
      {
        Location: "Colorado",
        Year: "2021",
        Type: "State",
        Amount: 1546
      },
      {
        Location: "Connecticut",
        Year: "2019",
        Type: "Federal",
        Amount: 1403
      },
      {
        Location: "Connecticut",
        Year: "2019",
        Type: "Local",
        Amount: 1639
      },
      {
        Location: "Connecticut",
        Year: "2019",
        Type: "State",
        Amount: 1521
      },
      {
        Location: "Connecticut",
        Year: "2020",
        Type: "Federal",
        Amount: 1403
      },
      {
        Location: "Connecticut",
        Year: "2020",
        Type: "Local",
        Amount: 1639
      },
      {
        Location: "Connecticut",
        Year: "2020",
        Type: "State",
        Amount: 1521
      },
      {
        Location: "Connecticut",
        Year: "2021",
        Type: "Federal",
        Amount: 1462
      },
      {
        Location: "Connecticut",
        Year: "2021",
        Type: "Local",
        Amount: 1698
      },
      {
        Location: "Connecticut",
        Year: "2021",
        Type: "State",
        Amount: 1580
      },
      {
        Location: "District of Columbia",
        Year: "2019",
        Type: "Federal",
        Amount: 1400
      },
      {
        Location: "District of Columbia",
        Year: "2019",
        Type: "Local",
        Amount: 1636
      },
      {
        Location: "District of Columbia",
        Year: "2019",
        Type: "State",
        Amount: 1518
      },
      {
        Location: "District of Columbia",
        Year: "2020",
        Type: "Federal",
        Amount: 1400
      },
      {
        Location: "District of Columbia",
        Year: "2020",
        Type: "Local",
        Amount: 1636
      },
      {
        Location: "District of Columbia",
        Year: "2020",
        Type: "State",
        Amount: 1518
      },
      {
        Location: "District of Columbia",
        Year: "2021",
        Type: "Federal",
        Amount: 1459
      },
      {
        Location: "District of Columbia",
        Year: "2021",
        Type: "Local",
        Amount: 1695
      },
      {
        Location: "District of Columbia",
        Year: "2021",
        Type: "State",
        Amount: 1577
      },
      {
        Location: "Delaware	",
        Year: "2019",
        Type: "Federal",
        Amount: "1384"
      },
      {
        Location: "Delaware	",
        Year: "2019",
        Type: "Local",
        Amount: "1620"
      },
      {
        Location: "Delaware	",
        Year: "2019",
        Type: "State",
        Amount: "1502"
      },
      {
        Location: "Delaware	",
        Year: "2020",
        Type: "Federal",
        Amount: "1384"
      },
      {
        Location: "Delaware	",
        Year: "2020",
        Type: "Local",
        Amount: "1620"
      },
      {
        Location: "Delaware	",
        Year: "2020",
        Type: "State",
        Amount: "1502"
      },
      {
        Location: "Delaware	",
        Year: "2021",
        Type: "Federal",
        Amount: "1443"
      },
      {
        Location: "Delaware	",
        Year: "2021",
        Type: "Local",
        Amount: "1679"
      },
      {
        Location: "Delaware	",
        Year: "2021",
        Type: "State",
        Amount: "1561"
      },
      {
        Location: "Florida	",
        Year: "2019",
        Type: "Federal",
        Amount: "1387"
      },
      {
        Location: "Florida	",
        Year: "2019",
        Type: "Local",
        Amount: "1623"
      },
      {
        Location: "Florida	",
        Year: "2019",
        Type: "State",
        Amount: "1505"
      },
      {
        Location: "Florida	",
        Year: "2020",
        Type: "Federal",
        Amount: "1387"
      },
      {
        Location: "Florida	",
        Year: "2020",
        Type: "Local",
        Amount: "1623"
      },
      {
        Location: "Florida	",
        Year: "2020",
        Type: "State",
        Amount: "1505"
      },
      {
        Location: "Florida	",
        Year: "2021",
        Type: "Federal",
        Amount: "1446"
      },
      {
        Location: "Florida	",
        Year: "2021",
        Type: "Local",
        Amount: "1682"
      },
      {
        Location: "Florida	",
        Year: "2021",
        Type: "State",
        Amount: "1564"
      },
      {
        Location: "Georgia	",
        Year: "2019",
        Type: "Federal",
        Amount: "1365"
      },
      {
        Location: "Georgia	",
        Year: "2019",
        Type: "Local",
        Amount: "1601"
      },
      {
        Location: "Georgia	",
        Year: "2019",
        Type: "State",
        Amount: "1483"
      },
      {
        Location: "Georgia	",
        Year: "2020",
        Type: "Federal",
        Amount: "1365"
      },
      {
        Location: "Georgia	",
        Year: "2020",
        Type: "Local",
        Amount: "1601"
      },
      {
        Location: "Georgia	",
        Year: "2020",
        Type: "State",
        Amount: "1483"
      },
      {
        Location: "Georgia	",
        Year: "2021",
        Type: "Federal",
        Amount: "1424"
      },
      {
        Location: "Georgia	",
        Year: "2021",
        Type: "Local",
        Amount: "1660"
      },
      {
        Location: "Georgia	",
        Year: "2021",
        Type: "State",
        Amount: "1542"
      },
      {
        Location: "Guam",
        Year: "2019",
        Type: "Federal",
        Amount: 1356
      },
      {
        Location: "Guam",
        Year: "2019",
        Type: "Local",
        Amount: 1592
      },
      {
        Location: "Guam",
        Year: "2019",
        Type: "State",
        Amount: 1474
      },
      {
        Location: "Guam",
        Year: "2020",
        Type: "Federal",
        Amount: 1356
      },
      {
        Location: "Guam",
        Year: "2020",
        Type: "Local",
        Amount: 1592
      },
      {
        Location: "Guam",
        Year: "2020",
        Type: "State",
        Amount: 1474
      },
      {
        Location: "Guam",
        Year: "2021",
        Type: "Federal",
        Amount: 1415
      },
      {
        Location: "Guam",
        Year: "2021",
        Type: "Local",
        Amount: 1651
      },
      {
        Location: "Guam",
        Year: "2021",
        Type: "State",
        Amount: 1533
      },
      {
        Location: "Hawaii	",
        Year: "2019",
        Type: "Federal",
        Amount: "1362"
      },
      {
        Location: "Hawaii	",
        Year: "2019",
        Type: "Local",
        Amount: "1598"
      },
      {
        Location: "Hawaii	",
        Year: "2019",
        Type: "State",
        Amount: "1480"
      },
      {
        Location: "Hawaii	",
        Year: "2020",
        Type: "Federal",
        Amount: "1362"
      },
      {
        Location: "Hawaii	",
        Year: "2020",
        Type: "Local",
        Amount: "1598"
      },
      {
        Location: "Hawaii	",
        Year: "2020",
        Type: "State",
        Amount: "1480"
      },
      {
        Location: "Hawaii	",
        Year: "2021",
        Type: "Federal",
        Amount: "1421"
      },
      {
        Location: "Hawaii	",
        Year: "2021",
        Type: "Local",
        Amount: "1657"
      },
      {
        Location: "Hawaii	",
        Year: "2021",
        Type: "State",
        Amount: "1539"
      },
      {
        Location: "Iowa",
        Year: "2019",
        Type: "Federal",
        Amount: 1394
      },
      {
        Location: "Iowa",
        Year: "2019",
        Type: "Local",
        Amount: 1630
      },
      {
        Location: "Iowa",
        Year: "2019",
        Type: "State",
        Amount: 1512
      },
      {
        Location: "Iowa",
        Year: "2020",
        Type: "Federal",
        Amount: 1394
      },
      {
        Location: "Iowa",
        Year: "2020",
        Type: "Local",
        Amount: 1630
      },
      {
        Location: "Iowa",
        Year: "2020",
        Type: "State",
        Amount: 1512
      },
      {
        Location: "Iowa",
        Year: "2021",
        Type: "Federal",
        Amount: 1453
      },
      {
        Location: "Iowa",
        Year: "2021",
        Type: "Local",
        Amount: 1689
      },
      {
        Location: "Iowa",
        Year: "2021",
        Type: "State",
        Amount: 1571
      },
      {
        Location: "Idaho",
        Year: "2019",
        Type: "Federal",
        Amount: 1374
      },
      {
        Location: "Idaho",
        Year: "2019",
        Type: "Local",
        Amount: 1610
      },
      {
        Location: "Idaho",
        Year: "2019",
        Type: "State",
        Amount: 1492
      },
      {
        Location: "Idaho",
        Year: "2020",
        Type: "Federal",
        Amount: 1374
      },
      {
        Location: "Idaho",
        Year: "2020",
        Type: "Local",
        Amount: 1610
      },
      {
        Location: "Idaho",
        Year: "2020",
        Type: "State",
        Amount: 1492
      },
      {
        Location: "Idaho",
        Year: "2021",
        Type: "Federal",
        Amount: 1433
      },
      {
        Location: "Idaho",
        Year: "2021",
        Type: "Local",
        Amount: 1669
      },
      {
        Location: "Idaho",
        Year: "2021",
        Type: "State",
        Amount: 1551
      },
      {
        Location: "Illinois	",
        Year: "2019",
        Type: "Federal",
        Amount: "1402"
      },
      {
        Location: "Illinois	",
        Year: "2019",
        Type: "Local",
        Amount: "1638"
      },
      {
        Location: "Illinois	",
        Year: "2019",
        Type: "State",
        Amount: "1520"
      },
      {
        Location: "Illinois	",
        Year: "2020",
        Type: "Federal",
        Amount: "1402"
      },
      {
        Location: "Illinois	",
        Year: "2020",
        Type: "Local",
        Amount: "1638"
      },
      {
        Location: "Illinois	",
        Year: "2020",
        Type: "State",
        Amount: "1520"
      },
      {
        Location: "Illinois	",
        Year: "2021",
        Type: "Federal",
        Amount: "1461"
      },
      {
        Location: "Illinois	",
        Year: "2021",
        Type: "Local",
        Amount: "1697"
      },
      {
        Location: "Illinois	",
        Year: "2021",
        Type: "State",
        Amount: "1579"
      },
      {
        Location: "Indiana	",
        Year: "2019",
        Type: "Federal",
        Amount: "1404"
      },
      {
        Location: "Indiana	",
        Year: "2019",
        Type: "Local",
        Amount: "1640"
      },
      {
        Location: "Indiana	",
        Year: "2019",
        Type: "State",
        Amount: "1522"
      },
      {
        Location: "Indiana	",
        Year: "2020",
        Type: "Federal",
        Amount: "1404"
      },
      {
        Location: "Indiana	",
        Year: "2020",
        Type: "Local",
        Amount: "1640"
      },
      {
        Location: "Indiana	",
        Year: "2020",
        Type: "State",
        Amount: "1522"
      },
      {
        Location: "Indiana	",
        Year: "2021",
        Type: "Federal",
        Amount: "1463"
      },
      {
        Location: "Indiana	",
        Year: "2021",
        Type: "Local",
        Amount: "1699"
      },
      {
        Location: "Indiana	",
        Year: "2021",
        Type: "State",
        Amount: "1581"
      },
      {
        Location: "Kansas	",
        Year: "2019",
        Type: "Federal",
        Amount: "1367"
      },
      {
        Location: "Kansas	",
        Year: "2019",
        Type: "Local",
        Amount: "1603"
      },
      {
        Location: "Kansas	",
        Year: "2019",
        Type: "State",
        Amount: "1485"
      },
      {
        Location: "Kansas	",
        Year: "2020",
        Type: "Federal",
        Amount: "1367"
      },
      {
        Location: "Kansas	",
        Year: "2020",
        Type: "Local",
        Amount: "1603"
      },
      {
        Location: "Kansas	",
        Year: "2020",
        Type: "State",
        Amount: "1485"
      },
      {
        Location: "Kansas",
        Year: "2021",
        Type: "Federal",
        Amount: 1426
      },
      {
        Location: "Kansas",
        Year: "2021",
        Type: "Local",
        Amount: 1662
      },
      {
        Location: "Kansas",
        Year: "2021",
        Type: "State",
        Amount: 1544
      },
      {
        Location: "Kentucky",
        Year: "2019",
        Type: "Federal",
        Amount: 1359
      },
      {
        Location: "Kentucky",
        Year: "2019",
        Type: "Local",
        Amount: 1595
      },
      {
        Location: "Kentucky",
        Year: "2019",
        Type: "State",
        Amount: 1477
      },
      {
        Location: "Kentucky",
        Year: "2020",
        Type: "Federal",
        Amount: 1359
      },
      {
        Location: "Kentucky",
        Year: "2020",
        Type: "Local",
        Amount: 1595
      },
      {
        Location: "Kentucky",
        Year: "2020",
        Type: "State",
        Amount: 1477
      },
      {
        Location: "Kentucky",
        Year: "2021",
        Type: "Federal",
        Amount: 1418
      },
      {
        Location: "Kentucky",
        Year: "2021",
        Type: "Local",
        Amount: 1654
      },
      {
        Location: "Kentucky",
        Year: "2021",
        Type: "State",
        Amount: 1536
      },
      {
        Location: "Louisiana",
        Year: "2019",
        Type: "Federal",
        Amount: 1409
      },
      {
        Location: "Louisiana",
        Year: "2019",
        Type: "Local",
        Amount: 1645
      },
      {
        Location: "Louisiana",
        Year: "2019",
        Type: "State",
        Amount: 1527
      },
      {
        Location: "Louisiana",
        Year: "2020",
        Type: "Federal",
        Amount: 1409
      },
      {
        Location: "Louisiana",
        Year: "2020",
        Type: "Local",
        Amount: 1645
      },
      {
        Location: "Louisiana",
        Year: "2020",
        Type: "State",
        Amount: 1527
      },
      {
        Location: "Louisiana",
        Year: "2021",
        Type: "Federal",
        Amount: 1468
      },
      {
        Location: "Louisiana",
        Year: "2021",
        Type: "Local",
        Amount: 1704
      },
      {
        Location: "Louisiana",
        Year: "2021",
        Type: "State",
        Amount: 1586
      },
      {
        Location: "Massachusetts",
        Year: "2019",
        Type: "Federal",
        Amount: 1366
      },
      {
        Location: "Massachusetts",
        Year: "2019",
        Type: "Local",
        Amount: 1602
      },
      {
        Location: "Massachusetts",
        Year: "2019",
        Type: "State",
        Amount: 1484
      },
      {
        Location: "Massachusetts",
        Year: "2020",
        Type: "Federal",
        Amount: 1366
      },
      {
        Location: "Massachusetts",
        Year: "2020",
        Type: "Local",
        Amount: 1602
      },
      {
        Location: "Massachusetts",
        Year: "2020",
        Type: "State",
        Amount: 1484
      },
      {
        Location: "Massachusetts",
        Year: "2021",
        Type: "Federal",
        Amount: 1425
      },
      {
        Location: "Massachusetts",
        Year: "2021",
        Type: "Local",
        Amount: 1661
      },
      {
        Location: "Massachusetts",
        Year: "2021",
        Type: "State",
        Amount: 1543
      },
      {
        Location: "Maryland",
        Year: "2019",
        Type: "Federal",
        Amount: 1386
      },
      {
        Location: "Maryland",
        Year: "2019",
        Type: "Local",
        Amount: 1622
      },
      {
        Location: "Maryland",
        Year: "2019",
        Type: "State",
        Amount: 1504
      },
      {
        Location: "Maryland",
        Year: "2020",
        Type: "Federal",
        Amount: 1386
      },
      {
        Location: "Maryland",
        Year: "2020",
        Type: "Local",
        Amount: 1622
      },
      {
        Location: "Maryland",
        Year: "2020",
        Type: "State",
        Amount: 1504
      },
      {
        Location: "Maryland",
        Year: "2021",
        Type: "Federal",
        Amount: 1445
      },
      {
        Location: "Maryland",
        Year: "2021",
        Type: "Local",
        Amount: 1681
      },
      {
        Location: "Maryland",
        Year: "2021",
        Type: "State",
        Amount: 1563
      },
      {
        Location: "Maine	",
        Year: "2019",
        Type: "Federal",
        Amount: "1385"
      },
      {
        Location: "Maine	",
        Year: "2019",
        Type: "Local",
        Amount: "1621"
      },
      {
        Location: "Maine	",
        Year: "2019",
        Type: "State",
        Amount: "1503"
      },
      {
        Location: "Maine	",
        Year: "2020",
        Type: "Federal",
        Amount: "1385"
      },
      {
        Location: "Maine	",
        Year: "2020",
        Type: "Local",
        Amount: "1621"
      },
      {
        Location: "Maine	",
        Year: "2020",
        Type: "State",
        Amount: "1503"
      },
      {
        Location: "Maine	",
        Year: "2021",
        Type: "Federal",
        Amount: "1444"
      },
      {
        Location: "Maine	",
        Year: "2021",
        Type: "Local",
        Amount: "1680"
      },
      {
        Location: "Maine	",
        Year: "2021",
        Type: "State",
        Amount: "1562"
      },
      {
        Location: "Marshall Islands",
        Year: "2019",
        Type: "Federal",
        Amount: 1408
      },
      {
        Location: "Marshall Islands",
        Year: "2019",
        Type: "Local",
        Amount: 1644
      },
      {
        Location: "Marshall Islands",
        Year: "2019",
        Type: "State",
        Amount: 1526
      },
      {
        Location: "Marshall Islands",
        Year: "2020",
        Type: "Federal",
        Amount: 1408
      },
      {
        Location: "Marshall Islands",
        Year: "2020",
        Type: "Local",
        Amount: 1644
      },
      {
        Location: "Marshall Islands",
        Year: "2020",
        Type: "State",
        Amount: 1526
      },
      {
        Location: "Marshall Islands",
        Year: "2021",
        Type: "Federal",
        Amount: 1467
      },
      {
        Location: "Marshall Islands",
        Year: "2021",
        Type: "Local",
        Amount: 1703
      },
      {
        Location: "Marshall Islands",
        Year: "2021",
        Type: "State",
        Amount: 1585
      },
      {
        Location: "Michigan",
        Year: "2019",
        Type: "Federal",
        Amount: 1390
      },
      {
        Location: "Michigan",
        Year: "2019",
        Type: "Local",
        Amount: 4011
      },
      {
        Location: "Michigan",
        Year: "2019",
        Type: "State",
        Amount: 1508
      },
      {
        Location: "Michigan",
        Year: "2020",
        Type: "Federal",
        Amount: 1390
      },
      {
        Location: "Michigan",
        Year: "2020",
        Type: "Local",
        Amount: 4111
      },
      {
        Location: "Michigan",
        Year: "2020",
        Type: "State",
        Amount: 1508
      },
      {
        Location: "Michigan",
        Year: "2021",
        Type: "Federal",
        Amount: 1449
      },
      {
        Location: "Michigan",
        Year: "2021",
        Type: "Local",
        Amount: 1685
      },
      {
        Location: "Michigan",
        Year: "2021",
        Type: "State",
        Amount: 1567
      },
      {
        Location: "Minnesota",
        Year: "2019",
        Type: "Federal",
        Amount: 1392
      },
      {
        Location: "Minnesota",
        Year: "2019",
        Type: "Local",
        Amount: 1628
      },
      {
        Location: "Minnesota",
        Year: "2019",
        Type: "State",
        Amount: 1510
      },
      {
        Location: "Minnesota",
        Year: "2020",
        Type: "Federal",
        Amount: 1392
      },
      {
        Location: "Minnesota",
        Year: "2020",
        Type: "Local",
        Amount: 1628
      },
      {
        Location: "Minnesota",
        Year: "2020",
        Type: "State",
        Amount: 1510
      },
      {
        Location: "Minnesota",
        Year: "2021",
        Type: "Federal",
        Amount: 1451
      },
      {
        Location: "Minnesota",
        Year: "2021",
        Type: "Local",
        Amount: 1687
      },
      {
        Location: "Minnesota",
        Year: "2021",
        Type: "State",
        Amount: 1569
      },
      {
        Location: "Missouri",
        Year: "2019",
        Type: "Federal",
        Amount: 1378
      },
      {
        Location: "Missouri",
        Year: "2019",
        Type: "Local",
        Amount: 1614
      },
      {
        Location: "Missouri",
        Year: "2019",
        Type: "State",
        Amount: 1496
      },
      {
        Location: "Missouri",
        Year: "2020",
        Type: "Federal",
        Amount: 1378
      },
      {
        Location: "Missouri",
        Year: "2020",
        Type: "Local",
        Amount: 1614
      },
      {
        Location: "Missouri",
        Year: "2020",
        Type: "State",
        Amount: 1496
      },
      {
        Location: "Missouri",
        Year: "2021",
        Type: "Federal",
        Amount: 1437
      },
      {
        Location: "Missouri",
        Year: "2021",
        Type: "Local",
        Amount: 1673
      },
      {
        Location: "Missouri",
        Year: "2021",
        Type: "State",
        Amount: 1555
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2019",
        Type: "Federal",
        Amount: "1368"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2019",
        Type: "Local",
        Amount: "1604"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2019",
        Type: "State",
        Amount: "1486"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2020",
        Type: "Federal",
        Amount: "1368"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2020",
        Type: "Local",
        Amount: "1604"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2020",
        Type: "State",
        Amount: "1486"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2021",
        Type: "Federal",
        Amount: "1427"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2021",
        Type: "Local",
        Amount: "1663"
      },
      {
        Location: "Northern Mariana Islands",
        Year: "2021",
        Type: "State",
        Amount: "1545"
      },
      {
        Location: "Mississippi",
        Year: "2019",
        Type: "Federal",
        Amount: 1406
      },
      {
        Location: "Mississippi",
        Year: "2019",
        Type: "Local",
        Amount: 1642
      },
      {
        Location: "Mississippi",
        Year: "2019",
        Type: "State",
        Amount: 1524
      },
      {
        Location: "Mississippi",
        Year: "2020",
        Type: "Federal",
        Amount: 1406
      },
      {
        Location: "Mississippi",
        Year: "2020",
        Type: "Local",
        Amount: 1642
      },
      {
        Location: "Mississippi",
        Year: "2020",
        Type: "State",
        Amount: 1524
      },
      {
        Location: "Mississippi",
        Year: "2021",
        Type: "Federal",
        Amount: 1465
      },
      {
        Location: "Mississippi",
        Year: "2021",
        Type: "Local",
        Amount: 1701
      },
      {
        Location: "Mississippi",
        Year: "2021",
        Type: "State",
        Amount: 1583
      },
      {
        Location: "Montana",
        Year: "2019",
        Type: "Federal",
        Amount: 1364
      },
      {
        Location: "Montana",
        Year: "2019",
        Type: "Local",
        Amount: 1600
      },
      {
        Location: "Montana",
        Year: "2019",
        Type: "State",
        Amount: 1482
      },
      {
        Location: "Montana",
        Year: "2020",
        Type: "Federal",
        Amount: 1364
      },
      {
        Location: "Montana",
        Year: "2020",
        Type: "Local",
        Amount: 1600
      },
      {
        Location: "Montana",
        Year: "2020",
        Type: "State",
        Amount: 1482
      },
      {
        Location: "Montana",
        Year: "2021",
        Type: "Federal",
        Amount: 1423
      },
      {
        Location: "Montana",
        Year: "2021",
        Type: "Local",
        Amount: 1659
      },
      {
        Location: "Montana",
        Year: "2021",
        Type: "State",
        Amount: 1541
      },
      {
        Location: "North Carolina",
        Year: "2019",
        Type: "Federal",
        Amount: 1358
      },
      {
        Location: "North Carolina",
        Year: "2019",
        Type: "Local",
        Amount: 1594
      },
      {
        Location: "North Carolina",
        Year: "2019",
        Type: "State",
        Amount: 1476
      },
      {
        Location: "North Carolina",
        Year: "2020",
        Type: "Federal",
        Amount: 1358
      },
      {
        Location: "North Carolina",
        Year: "2020",
        Type: "Local",
        Amount: 1594
      },
      {
        Location: "North Carolina",
        Year: "2020",
        Type: "State",
        Amount: 1476
      },
      {
        Location: "North Carolina",
        Year: "2021",
        Type: "Federal",
        Amount: 1417
      },
      {
        Location: "North Carolina",
        Year: "2021",
        Type: "Local",
        Amount: 1653
      },
      {
        Location: "North Carolina",
        Year: "2021",
        Type: "State",
        Amount: 1535
      },
      {
        Location: "North Dakota",
        Year: "2019",
        Type: "Federal",
        Amount: 1355
      },
      {
        Location: "North Dakota",
        Year: "2019",
        Type: "Local",
        Amount: 1591
      },
      {
        Location: "North Dakota",
        Year: "2019",
        Type: "State",
        Amount: 1473
      },
      {
        Location: "North Dakota",
        Year: "2020",
        Type: "Federal",
        Amount: 1355
      },
      {
        Location: "North Dakota",
        Year: "2020",
        Type: "Local",
        Amount: 1591
      },
      {
        Location: "North Dakota",
        Year: "2020",
        Type: "State",
        Amount: 1473
      },
      {
        Location: "North Dakota",
        Year: "2021",
        Type: "Federal",
        Amount: 1414
      },
      {
        Location: "North Dakota",
        Year: "2021",
        Type: "Local",
        Amount: 1650
      },
      {
        Location: "North Dakota",
        Year: "2021",
        Type: "State",
        Amount: 1532
      },
      {
        Location: "Nebraska",
        Year: "2019",
        Type: "Federal",
        Amount: 1391
      },
      {
        Location: "Nebraska",
        Year: "2019",
        Type: "Local",
        Amount: 1627
      },
      {
        Location: "Nebraska",
        Year: "2019",
        Type: "State",
        Amount: 1509
      },
      {
        Location: "Nebraska",
        Year: "2020",
        Type: "Federal",
        Amount: 1391
      },
      {
        Location: "Nebraska",
        Year: "2020",
        Type: "Local",
        Amount: 1627
      },
      {
        Location: "Nebraska",
        Year: "2020",
        Type: "State",
        Amount: 1509
      },
      {
        Location: "Nebraska",
        Year: "2021",
        Type: "Federal",
        Amount: 1450
      },
      {
        Location: "Nebraska",
        Year: "2021",
        Type: "Local",
        Amount: 1686
      },
      {
        Location: "Nebraska",
        Year: "2021",
        Type: "State",
        Amount: 1568
      },
      {
        Location: "New Hampshire",
        Year: "2019",
        Type: "Federal",
        Amount: 1405
      },
      {
        Location: "New Hampshire",
        Year: "2019",
        Type: "Local",
        Amount: 1641
      },
      {
        Location: "New Hampshire",
        Year: "2019",
        Type: "State",
        Amount: 1523
      },
      {
        Location: "New Hampshire",
        Year: "2020",
        Type: "Federal",
        Amount: 1405
      },
      {
        Location: "New Hampshire",
        Year: "2020",
        Type: "Local",
        Amount: 1641
      },
      {
        Location: "New Hampshire",
        Year: "2020",
        Type: "State",
        Amount: 1523
      },
      {
        Location: "New Hampshire",
        Year: "2021",
        Type: "Federal",
        Amount: 1464
      },
      {
        Location: "New Hampshire",
        Year: "2021",
        Type: "Local",
        Amount: 1700
      },
      {
        Location: "New Hampshire",
        Year: "2021",
        Type: "State",
        Amount: 1582
      },
      {
        Location: "New Jersey",
        Year: "2019",
        Type: "Federal",
        Amount: 1410
      },
      {
        Location: "New Jersey",
        Year: "2019",
        Type: "Local",
        Amount: 1646
      },
      {
        Location: "New Jersey",
        Year: "2019",
        Type: "State",
        Amount: 1528
      },
      {
        Location: "New Jersey",
        Year: "2020",
        Type: "Federal",
        Amount: 1410
      },
      {
        Location: "New Jersey",
        Year: "2020",
        Type: "Local",
        Amount: 1646
      },
      {
        Location: "New Jersey",
        Year: "2020",
        Type: "State",
        Amount: 1528
      },
      {
        Location: "New Jersey",
        Year: "2021",
        Type: "Federal",
        Amount: 1469
      },
      {
        Location: "New Jersey",
        Year: "2021",
        Type: "Local",
        Amount: 1705
      },
      {
        Location: "New Jersey",
        Year: "2021",
        Type: "State",
        Amount: 1587
      },
      {
        Location: "New Mexico",
        Year: "2019",
        Type: "Federal",
        Amount: 1399
      },
      {
        Location: "New Mexico",
        Year: "2019",
        Type: "Local",
        Amount: 1635
      },
      {
        Location: "New Mexico",
        Year: "2019",
        Type: "State",
        Amount: 1517
      },
      {
        Location: "New Mexico",
        Year: "2020",
        Type: "Federal",
        Amount: 1399
      },
      {
        Location: "New Mexico",
        Year: "2020",
        Type: "Local",
        Amount: 1635
      },
      {
        Location: "New Mexico",
        Year: "2020",
        Type: "State",
        Amount: 1517
      },
      {
        Location: "New Mexico",
        Year: "2021",
        Type: "Federal",
        Amount: 1458
      },
      {
        Location: "New Mexico",
        Year: "2021",
        Type: "Local",
        Amount: 1694
      },
      {
        Location: "New Mexico",
        Year: "2021",
        Type: "State",
        Amount: 1576
      },
      {
        Location: "Nevada",
        Year: "2019",
        Type: "Federal",
        Amount: 1357
      },
      {
        Location: "Nevada",
        Year: "2019",
        Type: "Local",
        Amount: 1593
      },
      {
        Location: "Nevada",
        Year: "2019",
        Type: "State",
        Amount: 1475
      },
      {
        Location: "Nevada",
        Year: "2020",
        Type: "Federal",
        Amount: 1357
      },
      {
        Location: "Nevada",
        Year: "2020",
        Type: "Local",
        Amount: 1593
      },
      {
        Location: "Nevada",
        Year: "2020",
        Type: "State",
        Amount: 1475
      },
      {
        Location: "Nevada",
        Year: "2021",
        Type: "Federal",
        Amount: 1416
      },
      {
        Location: "Nevada",
        Year: "2021",
        Type: "Local",
        Amount: 1652
      },
      {
        Location: "Nevada",
        Year: "2021",
        Type: "State",
        Amount: 1534
      },
      {
        Location: "New York",
        Year: "2019",
        Type: "Federal",
        Amount: 1360
      },
      {
        Location: "New York",
        Year: "2019",
        Type: "Local",
        Amount: 1596
      },
      {
        Location: "New York",
        Year: "2019",
        Type: "State",
        Amount: 1478
      },
      {
        Location: "New York",
        Year: "2020",
        Type: "Federal",
        Amount: 1360
      },
      {
        Location: "New York",
        Year: "2020",
        Type: "Local",
        Amount: 1596
      },
      {
        Location: "New York",
        Year: "2020",
        Type: "State",
        Amount: 1478
      },
      {
        Location: "New York",
        Year: "2021",
        Type: "Federal",
        Amount: 1419
      },
      {
        Location: "New York",
        Year: "2021",
        Type: "Local",
        Amount: 1655
      },
      {
        Location: "New York",
        Year: "2021",
        Type: "State",
        Amount: 1537
      },
      {
        Location: "Ohio",
        Year: "2019",
        Type: "Federal",
        Amount: 1407
      },
      {
        Location: "Ohio",
        Year: "2019",
        Type: "Local",
        Amount: 1643
      },
      {
        Location: "Ohio",
        Year: "2019",
        Type: "State",
        Amount: 1525
      },
      {
        Location: "Ohio",
        Year: "2020",
        Type: "Federal",
        Amount: 1407
      },
      {
        Location: "Ohio",
        Year: "2020",
        Type: "Local",
        Amount: 1643
      },
      {
        Location: "Ohio",
        Year: "2020",
        Type: "State",
        Amount: 1525
      },
      {
        Location: "Ohio",
        Year: "2021",
        Type: "Federal",
        Amount: 1466
      },
      {
        Location: "Ohio",
        Year: "2021",
        Type: "Local",
        Amount: 1702
      },
      {
        Location: "Ohio",
        Year: "2021",
        Type: "State",
        Amount: 1584
      },
      {
        Location: "Oklahoma",
        Year: "2019",
        Type: "Federal",
        Amount: 1372
      },
      {
        Location: "Oklahoma",
        Year: "2019",
        Type: "Local",
        Amount: 1608
      },
      {
        Location: "Oklahoma",
        Year: "2019",
        Type: "State",
        Amount: 1490
      },
      {
        Location: "Oklahoma",
        Year: "2020",
        Type: "Federal",
        Amount: 1372
      },
      {
        Location: "Oklahoma",
        Year: "2020",
        Type: "Local",
        Amount: 1608
      },
      {
        Location: "Oklahoma",
        Year: "2020",
        Type: "State",
        Amount: 1490
      },
      {
        Location: "Oklahoma",
        Year: "2021",
        Type: "Federal",
        Amount: 1431
      },
      {
        Location: "Oklahoma",
        Year: "2021",
        Type: "Local",
        Amount: 1667
      },
      {
        Location: "Oklahoma",
        Year: "2021",
        Type: "State",
        Amount: 1549
      },
      {
        Location: "Oregon",
        Year: "2019",
        Type: "Federal",
        Amount: 1379
      },
      {
        Location: "Oregon",
        Year: "2019",
        Type: "Local",
        Amount: 1615
      },
      {
        Location: "Oregon",
        Year: "2019",
        Type: "State",
        Amount: 1497
      },
      {
        Location: "Oregon",
        Year: "2020",
        Type: "Federal",
        Amount: 1379
      },
      {
        Location: "Oregon",
        Year: "2020",
        Type: "Local",
        Amount: 1615
      },
      {
        Location: "Oregon",
        Year: "2020",
        Type: "State",
        Amount: 1497
      },
      {
        Location: "Oregon",
        Year: "2021",
        Type: "Federal",
        Amount: 1438
      },
      {
        Location: "Oregon",
        Year: "2021",
        Type: "Local",
        Amount: 1674
      },
      {
        Location: "Oregon",
        Year: "2021",
        Type: "State",
        Amount: 1556
      },
      {
        Location: "Pennsylvania",
        Year: "2019",
        Type: "Federal",
        Amount: 1354
      },
      {
        Location: "Pennsylvania",
        Year: "2019",
        Type: "Local",
        Amount: 1590
      },
      {
        Location: "Pennsylvania",
        Year: "2019",
        Type: "State",
        Amount: 1472
      },
      {
        Location: "Pennsylvania",
        Year: "2020",
        Type: "Federal",
        Amount: 1354
      },
      {
        Location: "Pennsylvania",
        Year: "2020",
        Type: "Local",
        Amount: 1590
      },
      {
        Location: "Pennsylvania",
        Year: "2020",
        Type: "State",
        Amount: 1472
      },
      {
        Location: "Pennsylvania",
        Year: "2021",
        Type: "Federal",
        Amount: 1413
      },
      {
        Location: "Pennsylvania",
        Year: "2021",
        Type: "Local",
        Amount: 1649
      },
      {
        Location: "Pennsylvania",
        Year: "2021",
        Type: "State",
        Amount: 1531
      },
      {
        Location: "Puerto Rico",
        Year: "2019",
        Type: "Federal",
        Amount: 1363
      },
      {
        Location: "Puerto Rico",
        Year: "2019",
        Type: "Local",
        Amount: 1599
      },
      {
        Location: "Puerto Rico",
        Year: "2019",
        Type: "State",
        Amount: 1481
      },
      {
        Location: "Puerto Rico",
        Year: "2020",
        Type: "Federal",
        Amount: 1363
      },
      {
        Location: "Puerto Rico",
        Year: "2020",
        Type: "Local",
        Amount: 1599
      },
      {
        Location: "Puerto Rico",
        Year: "2020",
        Type: "State",
        Amount: 1481
      },
      {
        Location: "Puerto Rico",
        Year: "2021",
        Type: "Federal",
        Amount: 1422
      },
      {
        Location: "Puerto Rico",
        Year: "2021",
        Type: "Local",
        Amount: 1658
      },
      {
        Location: "Puerto Rico",
        Year: "2021",
        Type: "State",
        Amount: 1540
      },
      {
        Location: "Rhode Island",
        Year: "2019",
        Type: "Federal",
        Amount: 1411
      },
      {
        Location: "Rhode Island",
        Year: "2019",
        Type: "Local",
        Amount: 1647
      },
      {
        Location: "Rhode Island",
        Year: "2019",
        Type: "State",
        Amount: 1529
      },
      {
        Location: "Rhode Island",
        Year: "2020",
        Type: "Federal",
        Amount: 1411
      },
      {
        Location: "Rhode Island",
        Year: "2020",
        Type: "Local",
        Amount: 1647
      },
      {
        Location: "Rhode Island",
        Year: "2020",
        Type: "State",
        Amount: 1529
      },
      {
        Location: "Rhode Island",
        Year: "2021",
        Type: "Federal",
        Amount: 1470
      },
      {
        Location: "Rhode Island",
        Year: "2021",
        Type: "Local",
        Amount: 1706
      },
      {
        Location: "Rhode Island",
        Year: "2021",
        Type: "State",
        Amount: 1588
      },
      {
        Location: "Republic of Palau",
        Year: "2019",
        Type: "Federal",
        Amount: "1412"
      },
      {
        Location: "Republic of Palau",
        Year: "2019",
        Type: "Local",
        Amount: "1648"
      },
      {
        Location: "Republic of Palau",
        Year: "2019",
        Type: "State",
        Amount: "1530"
      },
      {
        Location: "Republic of Palau",
        Year: "2020",
        Type: "Federal",
        Amount: "1412"
      },
      {
        Location: "Republic of Palau",
        Year: "2020",
        Type: "Local",
        Amount: "1648"
      },
      {
        Location: "Republic of Palau",
        Year: "2020",
        Type: "State",
        Amount: "1530"
      },
      {
        Location: "Republic of Palau",
        Year: "2021",
        Type: "Federal",
        Amount: "1471"
      },
      {
        Location: "Republic of Palau",
        Year: "2021",
        Type: "Local",
        Amount: "1707"
      },
      {
        Location: "Republic of Palau",
        Year: "2021",
        Type: "State",
        Amount: "1589"
      },
      {
        Location: "South Carolina",
        Year: "2019",
        Type: "Federal",
        Amount: 1389
      },
      {
        Location: "South Carolina",
        Year: "2019",
        Type: "Local",
        Amount: 1625
      },
      {
        Location: "South Carolina",
        Year: "2019",
        Type: "State",
        Amount: 1507
      },
      {
        Location: "South Carolina",
        Year: "2020",
        Type: "Federal",
        Amount: 1389
      },
      {
        Location: "South Carolina",
        Year: "2020",
        Type: "Local",
        Amount: 1625
      },
      {
        Location: "South Carolina",
        Year: "2020",
        Type: "State",
        Amount: 1507
      },
      {
        Location: "South Carolina",
        Year: "2021",
        Type: "Federal",
        Amount: 1448
      },
      {
        Location: "South Carolina",
        Year: "2021",
        Type: "Local",
        Amount: 1684
      },
      {
        Location: "South Carolina",
        Year: "2021",
        Type: "State",
        Amount: 1566
      },
      {
        Location: "South Dakota",
        Year: "2019",
        Type: "Federal",
        Amount: 1373
      },
      {
        Location: "South Dakota",
        Year: "2019",
        Type: "Local",
        Amount: 1609
      },
      {
        Location: "South Dakota",
        Year: "2019",
        Type: "State",
        Amount: 1491
      },
      {
        Location: "South Dakota",
        Year: "2020",
        Type: "Federal",
        Amount: 1373
      },
      {
        Location: "South Dakota",
        Year: "2020",
        Type: "Local",
        Amount: 1609
      },
      {
        Location: "South Dakota",
        Year: "2020",
        Type: "State",
        Amount: 1491
      },
      {
        Location: "South Dakota",
        Year: "2021",
        Type: "Federal",
        Amount: 1432
      },
      {
        Location: "South Dakota",
        Year: "2021",
        Type: "Local",
        Amount: 1668
      },
      {
        Location: "South Dakota",
        Year: "2021",
        Type: "State",
        Amount: 1550
      },
      {
        Location: "Tennessee",
        Year: "2019",
        Type: "Federal",
        Amount: 1376
      },
      {
        Location: "Tennessee",
        Year: "2019",
        Type: "Local",
        Amount: 1612
      },
      {
        Location: "Tennessee",
        Year: "2019",
        Type: "State",
        Amount: 1494
      },
      {
        Location: "Tennessee",
        Year: "2020",
        Type: "Federal",
        Amount: 1376
      },
      {
        Location: "Tennessee",
        Year: "2020",
        Type: "Local",
        Amount: 1612
      },
      {
        Location: "Tennessee",
        Year: "2020",
        Type: "State",
        Amount: 1494
      },
      {
        Location: "Tennessee",
        Year: "2021",
        Type: "Federal",
        Amount: 1435
      },
      {
        Location: "Tennessee",
        Year: "2021",
        Type: "Local",
        Amount: 1671
      },
      {
        Location: "Tennessee",
        Year: "2021",
        Type: "State",
        Amount: 1553
      },
      {
        Location: "Texas",
        Year: "2019",
        Type: "Federal",
        Amount: 1361
      },
      {
        Location: "Texas",
        Year: "2019",
        Type: "Local",
        Amount: 1597
      },
      {
        Location: "Texas",
        Year: "2019",
        Type: "State",
        Amount: 1479
      },
      {
        Location: "Texas",
        Year: "2020",
        Type: "Federal",
        Amount: 1361
      },
      {
        Location: "Texas",
        Year: "2020",
        Type: "Local",
        Amount: 1597
      },
      {
        Location: "Texas",
        Year: "2020",
        Type: "State",
        Amount: 1479
      },
      {
        Location: "Texas",
        Year: "2021",
        Type: "Federal",
        Amount: 1420
      },
      {
        Location: "Texas",
        Year: "2021",
        Type: "Local",
        Amount: 1656
      },
      {
        Location: "Texas",
        Year: "2021",
        Type: "State",
        Amount: 1538
      },
      {
        Location: "Utah",
        Year: "2019",
        Type: "Federal",
        Amount: 1380
      },
      {
        Location: "Utah",
        Year: "2019",
        Type: "Local",
        Amount: 1616
      },
      {
        Location: "Utah",
        Year: "2019",
        Type: "State",
        Amount: 1498
      },
      {
        Location: "Utah",
        Year: "2020",
        Type: "Federal",
        Amount: 1380
      },
      {
        Location: "Utah",
        Year: "2020",
        Type: "Local",
        Amount: 1616
      },
      {
        Location: "Utah",
        Year: "2020",
        Type: "State",
        Amount: 1498
      },
      {
        Location: "Utah",
        Year: "2021",
        Type: "Federal",
        Amount: 1439
      },
      {
        Location: "Utah",
        Year: "2021",
        Type: "Local",
        Amount: 1675
      },
      {
        Location: "Utah",
        Year: "2021",
        Type: "State",
        Amount: 1557
      },
      {
        Location: "Virginia",
        Year: "2019",
        Type: "Federal",
        Amount: 1382
      },
      {
        Location: "Virginia",
        Year: "2019",
        Type: "Local",
        Amount: 1618
      },
      {
        Location: "Virginia",
        Year: "2019",
        Type: "State",
        Amount: 1500
      },
      {
        Location: "Virginia",
        Year: "2020",
        Type: "Federal",
        Amount: 1382
      },
      {
        Location: "Virginia",
        Year: "2020",
        Type: "Local",
        Amount: 1618
      },
      {
        Location: "Virginia",
        Year: "2020",
        Type: "State",
        Amount: 1500
      },
      {
        Location: "Virginia",
        Year: "2021",
        Type: "Federal",
        Amount: 1441
      },
      {
        Location: "Virginia",
        Year: "2021",
        Type: "Local",
        Amount: 1677
      },
      {
        Location: "Virginia",
        Year: "2021",
        Type: "State",
        Amount: 1559
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2019",
        Type: "Federal",
        Amount: "1383"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2019",
        Type: "Local",
        Amount: "1619"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2019",
        Type: "State",
        Amount: "1501"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2020",
        Type: "Federal",
        Amount: "1383"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2020",
        Type: "Local",
        Amount: "1619"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2020",
        Type: "State",
        Amount: "1501"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2021",
        Type: "Federal",
        Amount: "1442"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2021",
        Type: "Local",
        Amount: "1678"
      },
      {
        Location: "U.S. Virgin Islands",
        Year: "2021",
        Type: "State",
        Amount: "1560"
      },
      {
        Location: "Vermont",
        Year: "2019",
        Type: "Federal",
        Amount: 1370
      },
      {
        Location: "Vermont",
        Year: "2019",
        Type: "Local",
        Amount: 1606
      },
      {
        Location: "Vermont",
        Year: "2019",
        Type: "State",
        Amount: 1488
      },
      {
        Location: "Vermont",
        Year: "2020",
        Type: "Federal",
        Amount: 1370
      },
      {
        Location: "Vermont",
        Year: "2020",
        Type: "Local",
        Amount: 1606
      },
      {
        Location: "Vermont",
        Year: "2020",
        Type: "State",
        Amount: 1488
      },
      {
        Location: "Vermont",
        Year: "2021",
        Type: "Federal",
        Amount: 1429
      },
      {
        Location: "Vermont",
        Year: "2021",
        Type: "Local",
        Amount: 1665
      },
      {
        Location: "Vermont",
        Year: "2021",
        Type: "State",
        Amount: 1547
      },
      {
        Location: "Washington",
        Year: "2019",
        Type: "Federal",
        Amount: 1393
      },
      {
        Location: "Washington",
        Year: "2019",
        Type: "Local",
        Amount: 1629
      },
      {
        Location: "Washington",
        Year: "2019",
        Type: "State",
        Amount: 1511
      },
      {
        Location: "Washington",
        Year: "2020",
        Type: "Federal",
        Amount: 1393
      },
      {
        Location: "Washington",
        Year: "2020",
        Type: "Local",
        Amount: 1629
      },
      {
        Location: "Washington",
        Year: "2020",
        Type: "State",
        Amount: 1511
      },
      {
        Location: "Washington",
        Year: "2021",
        Type: "Federal",
        Amount: 1452
      },
      {
        Location: "Washington",
        Year: "2021",
        Type: "Local",
        Amount: 1688
      },
      {
        Location: "Washington",
        Year: "2021",
        Type: "State",
        Amount: 1570
      },
      {
        Location: "Wisconsin",
        Year: "2019",
        Type: "Federal",
        Amount: 1371
      },
      {
        Location: "Wisconsin",
        Year: "2019",
        Type: "Local",
        Amount: 1607
      },
      {
        Location: "Wisconsin",
        Year: "2019",
        Type: "State",
        Amount: 1489
      },
      {
        Location: "Wisconsin",
        Year: "2020",
        Type: "Federal",
        Amount: 1371
      },
      {
        Location: "Wisconsin",
        Year: "2020",
        Type: "Local",
        Amount: 1607
      },
      {
        Location: "Wisconsin",
        Year: "2020",
        Type: "State",
        Amount: 1489
      },
      {
        Location: "Wisconsin",
        Year: "2021",
        Type: "Federal",
        Amount: 1430
      },
      {
        Location: "Wisconsin",
        Year: "2021",
        Type: "Local",
        Amount: 1666
      },
      {
        Location: "Wisconsin",
        Year: "2021",
        Type: "State",
        Amount: 1548
      },
      {
        Location: "West Virginia",
        Year: "2019",
        Type: "Federal",
        Amount: 1397
      },
      {
        Location: "West Virginia",
        Year: "2019",
        Type: "Local",
        Amount: 1633
      },
      {
        Location: "West Virginia",
        Year: "2019",
        Type: "State",
        Amount: 1515
      },
      {
        Location: "West Virginia",
        Year: "2020",
        Type: "Federal",
        Amount: 1397
      },
      {
        Location: "West Virginia",
        Year: "2020",
        Type: "Local",
        Amount: 1633
      },
      {
        Location: "West Virginia",
        Year: "2020",
        Type: "State",
        Amount: 1515
      },
      {
        Location: "West Virginia",
        Year: "2021",
        Type: "Federal",
        Amount: 1456
      },
      {
        Location: "West Virginia",
        Year: "2021",
        Type: "Local",
        Amount: 1692
      },
      {
        Location: "West Virginia",
        Year: "2021",
        Type: "State",
        Amount: 1574
      },
      {
        Location: "Wyoming",
        Year: "2019",
        Type: "Federal",
        Amount: 1395
      },
      {
        Location: "Wyoming",
        Year: "2019",
        Type: "Local",
        Amount: 1631
      },
      {
        Location: "Wyoming",
        Year: "2019",
        Type: "State",
        Amount: 1513
      },
      {
        Location: "Wyoming",
        Year: "2020",
        Type: "Federal",
        Amount: 1395
      },
      {
        Location: "Wyoming",
        Year: "2020",
        Type: "Local",
        Amount: 1631
      },
      {
        Location: "Wyoming",
        Year: "2020",
        Type: "State",
        Amount: 1513
      },
      {
        Location: "Wyoming",
        Year: "2021",
        Type: "Federal",
        Amount: 1454
      },
      {
        Location: "Wyoming",
        Year: "2021",
        Type: "Local",
        Amount: 1690
      },
      {
        Location: "Wyoming",
        Year: "2021",
        Type: "State",
        Amount: 1572
      }
    ],
    dataFileSize: 14901,
    dataFileName: "dashboard_aggregate_example_state_type (1).csv",
    dataFileSourceType: "file",
    dataFileFormat: "CSV",
    preview: !0
  }
}, Et = "dashboard", xt = 1699383537668, Wt = "Filter Change", Ot = {
  dashboard: Ht,
  rows: Vt,
  visualizations: It,
  table: Ut,
  datasets: Pt,
  type: Et,
  uuid: xt,
  filterBehavior: Wt
}, Bt = {
  theme: "theme-blue",
  sharedFilters: [
    {
      key: "Category",
      type: "datafilter",
      columnName: "Sample Categories",
      showDropdown: !0,
      usedBy: [
        "0"
      ],
      tier: 1
    }
  ]
}, zt = [
  {
    toggle: !0,
    columns: [
      {
        width: 12,
        widget: "chart1711646813542"
      },
      {
        width: 12,
        widget: "table1711646820983"
      },
      {
        width: 12
      }
    ],
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    dataKey: "valid-world-data.json",
    multiVizColumn: "Country"
  }
], qt = {
  chart1711646813542: {
    type: "chart",
    debugSvg: !1,
    chartMessage: {
      noData: "No Data Available"
    },
    title: "",
    showTitle: !0,
    showDownloadMediaButton: !1,
    theme: "theme-blue",
    animate: !1,
    fontSize: "medium",
    lineDatapointStyle: "hover",
    lineDatapointColor: "Same as Line",
    barHasBorder: "false",
    isLollipopChart: !1,
    lollipopShape: "circle",
    lollipopColorStyle: "two-tone",
    visualizationSubType: "regular",
    barStyle: "",
    roundingStyle: "standard",
    tipRounding: "top",
    isResponsiveTicks: !1,
    general: {
      showDownloadButton: !1
    },
    padding: {
      left: 5,
      right: 5
    },
    suppressedData: [],
    preliminaryData: [],
    yAxis: {
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
      anchors: []
    },
    boxplot: {
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
    },
    topAxis: {
      hasLine: !1
    },
    isLegendValue: !1,
    barThickness: 0.35,
    barHeight: 25,
    barSpace: 15,
    heights: {
      vertical: 300,
      horizontal: 750
    },
    xAxis: {
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
      axisPadding: 0,
      target: 0,
      maxTickRotation: 0,
      dataKey: "Sample Categories",
      tickWidthMax: 89
    },
    table: {
      label: "Data Table",
      expanded: !1,
      limitHeight: !1,
      height: "",
      caption: "",
      showDownloadUrl: !1,
      showDataTableLink: !1,
      indexLabel: "",
      download: !1,
      showVertical: !0,
      dateDisplayFormat: "",
      show: !1
    },
    orientation: "vertical",
    color: "pinkpurple",
    columns: {},
    legend: {
      hide: !1,
      behavior: "isolate",
      singleRow: !0,
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
      seriesHighlight: []
    },
    brush: {
      height: 25,
      active: !1
    },
    exclusions: {
      active: !1,
      keys: []
    },
    palette: "qualitative-bold",
    isPaletteReversed: !1,
    twoColor: {
      palette: "monochrome-1",
      isPaletteReversed: !1
    },
    labels: !1,
    dataFormat: {
      commas: !1,
      prefix: "",
      suffix: "",
      abbreviated: !1,
      bottomSuffix: "",
      bottomPrefix: "",
      bottomAbbreviated: !1
    },
    confidenceKeys: {},
    visual: {
      border: !0,
      accent: !0,
      background: !0,
      verticalHoverLine: !1,
      horizontalHoverLine: !1
    },
    useLogScale: !1,
    filterBehavior: "Filter Change",
    highlightedBarValues: [],
    series: [
      {
        dataKey: "Data",
        type: "Bar",
        axis: "Left",
        tooltip: !0
      }
    ],
    tooltips: {
      opacity: 90,
      singleSeries: !1,
      dateDisplayFormat: ""
    },
    forestPlot: {
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
    },
    area: {
      isStacked: !1
    },
    sankey: {
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
    },
    openModal: !0,
    uid: "chart1711646813542",
    visualizationType: "Bar",
    editing: !1,
    dataKey: "valid-world-data.json",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    version: "4.23",
    dynamicMarginTop: 0
  },
  table1711646820983: {
    newViz: !1,
    openModal: !0,
    uid: "table1711646820983",
    type: "table",
    formattedData: {},
    table: {
      label: "Data Table",
      show: !0,
      showDownloadUrl: !1,
      showVertical: !0,
      expanded: !0
    },
    columns: {},
    dataFormat: {},
    visualizationType: "table",
    editing: !1
  }
}, _t = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Gt = {}, Kt = "dashboard", $t = {}, jt = "4.23", P = {
  dashboard: Bt,
  rows: zt,
  visualizations: qt,
  table: _t,
  datasets: Gt,
  type: Kt,
  runtime: $t,
  version: jt
}, Jt = 0, Qt = [
  {
    dashboard: {
      theme: "theme-blue"
    },
    visualizations: {
      chart1715711779447: {
        type: "chart",
        debugSvg: !1,
        chartMessage: {
          noData: "No Data Available"
        },
        title: "",
        showTitle: !0,
        showDownloadMediaButton: !1,
        theme: "theme-blue",
        animate: !1,
        fontSize: "medium",
        lineDatapointStyle: "hover",
        lineDatapointColor: "Same as Line",
        barHasBorder: "false",
        isLollipopChart: !1,
        lollipopShape: "circle",
        lollipopColorStyle: "two-tone",
        visualizationSubType: "regular",
        barStyle: "",
        roundingStyle: "standard",
        tipRounding: "top",
        isResponsiveTicks: !1,
        general: {
          showDownloadButton: !1
        },
        padding: {
          left: 5,
          right: 5
        },
        suppressedData: [],
        preliminaryData: [],
        yAxis: {
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
          anchors: []
        },
        boxplot: {
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
        },
        topAxis: {
          hasLine: !1
        },
        isLegendValue: !1,
        barThickness: 0.35,
        barHeight: 25,
        barSpace: 15,
        heights: {
          vertical: 300,
          horizontal: 750
        },
        xAxis: {
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
          maxTickRotation: 0,
          dataKey: "Race",
          tickWidthMax: 307
        },
        table: {
          label: "Data Table",
          expanded: !0,
          limitHeight: !1,
          height: "",
          caption: "",
          showDownloadUrl: !1,
          showDataTableLink: !0,
          indexLabel: "",
          download: !0,
          showVertical: !0,
          dateDisplayFormat: "",
          show: !1
        },
        orientation: "vertical",
        color: "pinkpurple",
        columns: {},
        legend: {
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
          lineMode: !1,
          verticalSorted: !1,
          highlightOnHover: !1,
          seriesHighlight: []
        },
        brush: {
          height: 25,
          data: [
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
          ],
          active: !1
        },
        exclusions: {
          active: !1,
          keys: []
        },
        palette: "qualitative-bold",
        isPaletteReversed: !1,
        twoColor: {
          palette: "monochrome-1",
          isPaletteReversed: !1
        },
        labels: !1,
        dataFormat: {
          commas: !1,
          prefix: "",
          suffix: "",
          abbreviated: !1,
          bottomSuffix: "",
          bottomPrefix: "",
          bottomAbbreviated: !1
        },
        confidenceKeys: {},
        visual: {
          border: !0,
          accent: !0,
          background: !0,
          verticalHoverLine: !1,
          horizontalHoverLine: !1
        },
        useLogScale: !1,
        filterBehavior: "Filter Change",
        highlightedBarValues: [],
        series: [
          {
            dataKey: "Age-adjusted rate",
            type: "Bar",
            axis: "Left",
            tooltip: !0
          }
        ],
        tooltips: {
          opacity: 90,
          singleSeries: !1,
          dateDisplayFormat: ""
        },
        forestPlot: {
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
        },
        area: {
          isStacked: !1
        },
        sankey: {
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
        },
        filters: [],
        openModal: !0,
        uid: "chart1715711779447",
        visualizationType: "Bar",
        dataDescription: {
          horizontal: !1,
          series: !1
        },
        dataKey: "valid-data-chart.csv",
        editing: !1,
        version: "4.24.4",
        dynamicMarginTop: 0
      }
    },
    rows: [
      {
        columns: [
          {
            width: 12,
            widget: "chart1715711779447"
          },
          {},
          {}
        ]
      }
    ],
    label: "New Dashboard 1",
    table: {
      show: !1
    }
  },
  {
    label: "New Dashboard 2",
    visualizations: {
      map1715711814076: {
        general: {
          geoType: "us",
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
          geoLabelOverride: "",
          hasRegions: !1,
          fullBorder: !1,
          type: "data",
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
          expandDataTable: !1
        },
        type: "map",
        color: "pinkpurple",
        columns: {
          geo: {
            name: "STATE",
            label: "Location",
            tooltip: !1,
            dataTable: !0
          },
          primary: {
            dataTable: !0,
            tooltip: !0,
            prefix: "",
            suffix: "",
            name: "Rate",
            label: ""
          },
          navigate: {
            name: ""
          },
          latitude: {
            name: ""
          },
          longitude: {
            name: ""
          }
        },
        legend: {
          descriptions: {},
          specialClasses: [],
          unified: !1,
          singleColumn: !1,
          singleRow: !1,
          verticalSorted: !1,
          showSpecialClassesLast: !1,
          dynamicDescription: !1,
          type: "equalnumber",
          numberOfItems: 3,
          position: "side",
          title: "Legend"
        },
        filters: [],
        table: {
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
        },
        tooltips: {
          appearanceType: "hover",
          linkLabel: "Learn More",
          capitalizeLabels: !0,
          opacity: 90
        },
        runtime: {
          editorErrorMessage: []
        },
        visual: {
          minBubbleSize: 1,
          maxBubbleSize: 20,
          extraBubbleBorder: !1,
          cityStyle: "circle",
          cityStyleLabel: "",
          showBubbleZeros: !1,
          additionalCityStyles: [],
          geoCodeCircleSize: 8
        },
        mapPosition: {
          coordinates: [
            0,
            30
          ],
          zoom: 1
        },
        map: {
          layers: [],
          patterns: []
        },
        hexMap: {
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
        },
        filterBehavior: "Filter Change",
        openModal: !0,
        uid: "map1715711814076",
        dataDescription: {
          horizontal: !1,
          series: !1
        },
        dataKey: "valid-data-map.csv",
        editing: !1,
        version: "4.24.4"
      }
    },
    dashboard: {},
    rows: [
      {
        columns: [
          {
            width: 12,
            widget: "map1715711814076"
          }
        ]
      }
    ],
    table: {
      show: !1
    }
  }
], Zt = {
  "valid-data-chart.csv": {
    data: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": 644.4
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": 636.1
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": 563.7
      },
      {
        Race: "Non-Hispanic Asian or Pacific Islander",
        "Age-adjusted rate": 202.5
      },
      {
        Race: "Non-Hispanic White",
        "Age-adjusted rate": 183.6
      }
    ],
    dataFileSize: 178,
    dataFileName: "valid-data-chart.csv",
    dataFileSourceType: "file",
    dataFileFormat: "CSV",
    preview: !1
  },
  "valid-data-map.csv": {
    data: [
      {
        STATE: "Overall",
        Rate: "55",
        Location: "Vehicle",
        URL: "https://www.cdc.gov"
      },
      {
        STATE: "Alabama",
        Rate: "130",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Alaska",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "American Samoa",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arizona",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arkansas",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "California",
        Rate: "30",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Colorado",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Connecticut",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Deleware",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "DC",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Florida",
        Rate: "30",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Georgia",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Guam",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Hawaii",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Idaho",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Illinois",
        Rate: "30",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Indiana",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Iowa",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kansas",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kentucky",
        Rate: "60",
        Location: "NA",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Louisiana",
        Rate: "30",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maine",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Marshall Islands",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maryland",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Massachusetts",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Michigan",
        Rate: "12",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Micronesia",
        Rate: "65",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Minnesota",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Mississippi",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: "30",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nebraska",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nevada",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Hampshire",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Jersey",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Mexico",
        Rate: "12",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New York",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Carolina",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Dakota",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Northern Mariana Islands",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Ohio",
        Rate: "88",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oklahoma",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oregon",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Palau",
        Rate: "15",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Pennsylvania",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Puerto Rico",
        Rate: "30",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Rhode Island",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Carolina",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Dakota",
        Rate: "86",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Tennessee",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Texas",
        Rate: "30",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Utah",
        Rate: "54",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Vermont",
        Rate: "40",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virgin Islands",
        Rate: "55",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virginia",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Washington",
        Rate: "62",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "West Virginia",
        Rate: "25",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Wyoming",
        Rate: "43",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      }
    ],
    dataFileSize: 2433,
    dataFileName: "valid-data-map.csv",
    dataFileSourceType: "file",
    dataFileFormat: "CSV",
    preview: !0
  }
}, Xt = {
  activeDashboard: Jt,
  multiDashboards: Qt,
  datasets: Zt
}, eo = {
  theme: "theme-blue"
}, ao = [
  [
    {
      width: 12,
      widget: "table1707840146431"
    },
    {},
    {}
  ]
], to = {
  table1707840146431: {
    newViz: !0,
    openModal: !1,
    uid: "table1707840146431",
    filters: [],
    filterBehavior: "Filter Change",
    table: {
      label: "Data Table",
      show: !0,
      showDownloadUrl: !1,
      showVertical: !0,
      expanded: !0
    },
    type: "table",
    visualizationType: "table",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    columns: {},
    dataFormat: {},
    formattedData: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "6360.1"
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
    ],
    dataKey: "valid-data-chart.csv",
    data: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "6360.1"
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
    ]
  }
}, oo = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, no = !0, io = {
  "valid-data-chart.csv": {
    data: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "6360.1"
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
    ],
    dataFileSize: 178,
    dataFileName: "valid-data-chart.csv",
    dataFileSourceType: "file",
    dataFileFormat: "CSV",
    preview: !0
  }
}, ro = "dashboard", so = {}, co = {
  dashboard: eo,
  rows: ao,
  visualizations: to,
  table: oo,
  newViz: no,
  datasets: io,
  type: ro,
  runtime: so
}, lo = {
  theme: "theme-blue",
  sharedFilters: []
}, po = [
  [
    {
      width: 12,
      widget: "table1707935263149"
    },
    {},
    {}
  ]
], mo = {
  table1707935263149: {
    openModal: !1,
    uid: "table1707935263149",
    type: "table",
    table: {
      label: "Data Table",
      show: !0,
      showDownloadUrl: !1,
      showVertical: !0,
      expanded: !0,
      groupBy: "city",
      pivot: {
        columnName: "name",
        valueColumns: [
          "age",
          "color"
        ]
      }
    },
    columns: {
      other: {
        name: "other",
        dataTable: !1
      }
    },
    dataFormat: {},
    visualizationType: "table",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    filters: [
      {
        filterStyle: "multi-select",
        label: "Name",
        columnName: "name",
        active: [
          "Jane",
          "John"
        ],
        showDropdown: !0
      }
    ],
    filterBehavior: "Filter Change",
    dataKey: "valid-data-chart.csv"
  }
}, uo = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Lo = {
  "valid-data-chart.csv": {
    data: [
      {
        name: "John",
        age: 25,
        color: "blue",
        other: "no",
        city: "New York"
      },
      {
        name: "Jane",
        age: 27,
        color: "red",
        other: "yes",
        city: "New York"
      },
      {
        name: "Jane",
        age: 30,
        color: "yellow",
        other: "no",
        city: "San Francisco"
      },
      {
        name: "John",
        age: 31,
        color: "green",
        other: "yes",
        city: "San Francisco"
      }
    ],
    dataFileSize: 178,
    dataFileName: "valid-data-chart.csv",
    dataFileSourceType: "file",
    dataFileFormat: "CSV",
    preview: !0
  }
}, To = "dashboard", ho = {}, yo = [
  1,
  2,
  3
], Ao = {
  dashboard: lo,
  rows: po,
  visualizations: mo,
  table: uo,
  datasets: Lo,
  type: To,
  runtime: ho,
  data: yo
}, go = {
  theme: "theme-blue",
  sharedFilters: []
}, wo = [
  [
    {
      width: 12,
      widget: "table1707935263149"
    },
    {},
    {}
  ]
], Ro = {
  table1707935263149: {
    openModal: !1,
    uid: "table1707935263149",
    type: "table",
    table: {
      label: "Data Table",
      show: !0,
      showDownloadUrl: !1,
      showVertical: !0,
      expanded: !0,
      pivot: {
        columnName: "Race",
        valueColumns: [
          "Age-adjusted rate"
        ]
      }
    },
    columns: {},
    dataFormat: {},
    visualizationType: "table",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    filters: [
      {
        filterStyle: "multi-select",
        label: "Race",
        columnName: "Race",
        showDropdown: !0
      }
    ],
    filterBehavior: "Filter Change",
    formattedData: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2",
        Year: "2016"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "636.1",
        Year: "2016"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7",
        Year: "2016"
      },
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2",
        Year: "2017"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "636.1",
        Year: "2017"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7",
        Year: "2017"
      }
    ],
    dataKey: "valid-data-chart.csv",
    data: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2",
        Year: "2016"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "636.1",
        Year: "2016"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7",
        Year: "2016"
      },
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2",
        Year: "2017"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "636.1",
        Year: "2017"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7",
        Year: "2017"
      }
    ]
  }
}, So = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Yo = {
  "valid-data-chart.csv": {
    data: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2",
        Year: "2016"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "636.1",
        Year: "2016"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7",
        Year: "2016"
      },
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2",
        Year: "2017"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "636.1",
        Year: "2017"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7",
        Year: "2017"
      }
    ],
    dataFileSize: 178,
    dataFileName: "valid-data-chart.csv",
    dataFileSourceType: "file",
    dataFileFormat: "CSV",
    preview: !0
  }
}, fo = "dashboard", vo = {}, bo = [
  1,
  2,
  3
], Fo = {
  dashboard: go,
  rows: wo,
  visualizations: Ro,
  table: So,
  datasets: Yo,
  type: fo,
  runtime: vo,
  data: bo
}, ko = {
  theme: "theme-blue"
}, Co = [
  [
    {
      width: 12,
      toggle: !0,
      widget: "map1708703168295"
    },
    {
      width: 12,
      toggle: !0,
      widget: "chart1708703345997"
    },
    {
      width: 12,
      toggle: !0,
      widget: "table1708703256246"
    }
  ]
], Mo = {
  map1708703168295: {
    general: {
      geoType: "us",
      geoBorderColor: "darkGray",
      headerColor: "theme-blue",
      title: "",
      showTitle: !0,
      showSidebar: !0,
      showDownloadButton: !1,
      showDownloadMediaButton: !1,
      displayAsHex: !1,
      displayStateLabels: !1,
      territoriesLabel: "Territories",
      territoriesAlwaysShow: !1,
      language: "en",
      geoLabelOverride: "",
      hasRegions: !1,
      fullBorder: !1,
      type: "data",
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
      }
    },
    type: "map",
    color: "pinkpurple",
    columns: {
      geo: {
        name: "STATE",
        label: "Location",
        tooltip: !1,
        dataTable: !0
      },
      primary: {
        dataTable: !1,
        tooltip: !0,
        prefix: "",
        suffix: "",
        name: "Rate",
        label: ""
      },
      navigate: {
        name: ""
      },
      latitude: {
        name: ""
      },
      longitude: {
        name: ""
      }
    },
    legend: {
      descriptions: {},
      specialClasses: [],
      unified: !1,
      singleColumn: !1,
      singleRow: !1,
      verticalSorted: !1,
      showSpecialClassesLast: !1,
      dynamicDescription: !1,
      type: "equalnumber",
      numberOfItems: 3,
      position: "side",
      title: "Legend"
    },
    filters: [],
    table: {
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
      download: !1,
      indexLabel: ""
    },
    tooltips: {
      appearanceType: "hover",
      linkLabel: "Learn More",
      capitalizeLabels: !0,
      opacity: 90
    },
    runtime: {
      editorErrorMessage: []
    },
    visual: {
      minBubbleSize: 1,
      maxBubbleSize: 20,
      extraBubbleBorder: !1,
      cityStyle: "circle",
      geoCodeCircleSize: 2,
      showBubbleZeros: !1
    },
    mapPosition: {
      coordinates: [
        0,
        30
      ],
      zoom: 1
    },
    map: {
      layers: [],
      patterns: []
    },
    hexMap: {
      type: "",
      shapeGroups: [
        {
          legendTitle: "",
          legendDescription: "",
          items: [
            {
              key: "",
              shape: "Arrow up",
              column: "",
              operator: "=",
              value: ""
            }
          ]
        }
      ]
    },
    filterBehavior: "Filter Change",
    openModal: !1,
    uid: "map1708703168295",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    formattedData: [
      {
        STATE: "Overall",
        Rate: "55",
        Location: "Vehicle",
        URL: "https://www.cdc.gov"
      },
      {
        STATE: "Alabama",
        Rate: "130",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Alaska",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "American Samoa",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arizona",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arkansas",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "California",
        Rate: "30",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Colorado",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Connecticut",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Deleware",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "DC",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Florida",
        Rate: "30",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Georgia",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Guam",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Hawaii",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Idaho",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Illinois",
        Rate: "30",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Indiana",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Iowa",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kansas",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kentucky",
        Rate: "60",
        Location: "NA",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Louisiana",
        Rate: "30",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maine",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Marshall Islands",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maryland",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Massachusetts",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Michigan",
        Rate: "12",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Micronesia",
        Rate: "65",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Minnesota",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Mississippi",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: "30",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nebraska",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nevada",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Hampshire",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Jersey",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Mexico",
        Rate: "12",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New York",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Carolina",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Dakota",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Northern Mariana Islands",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Ohio",
        Rate: "88",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oklahoma",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oregon",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Palau",
        Rate: "15",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Pennsylvania",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Puerto Rico",
        Rate: "30",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Rhode Island",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Carolina",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Dakota",
        Rate: "86",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Tennessee",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Texas",
        Rate: "30",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Utah",
        Rate: "54",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Vermont",
        Rate: "40",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virgin Islands",
        Rate: "55",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virginia",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Washington",
        Rate: "62",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "West Virginia",
        Rate: "25",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Wyoming",
        Rate: "43",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      }
    ],
    dataKey: "valid-data-map.csv",
    data: [
      {
        STATE: "Overall",
        Rate: "55",
        Location: "Vehicle",
        URL: "https://www.cdc.gov"
      },
      {
        STATE: "Alabama",
        Rate: "130",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Alaska",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "American Samoa",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arizona",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arkansas",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "California",
        Rate: "30",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Colorado",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Connecticut",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Deleware",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "DC",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Florida",
        Rate: "30",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Georgia",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Guam",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Hawaii",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Idaho",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Illinois",
        Rate: "30",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Indiana",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Iowa",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kansas",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kentucky",
        Rate: "60",
        Location: "NA",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Louisiana",
        Rate: "30",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maine",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Marshall Islands",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maryland",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Massachusetts",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Michigan",
        Rate: "12",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Micronesia",
        Rate: "65",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Minnesota",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Mississippi",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: "30",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nebraska",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nevada",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Hampshire",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Jersey",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Mexico",
        Rate: "12",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New York",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Carolina",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Dakota",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Northern Mariana Islands",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Ohio",
        Rate: "88",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oklahoma",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oregon",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Palau",
        Rate: "15",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Pennsylvania",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Puerto Rico",
        Rate: "30",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Rhode Island",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Carolina",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Dakota",
        Rate: "86",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Tennessee",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Texas",
        Rate: "30",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Utah",
        Rate: "54",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Vermont",
        Rate: "40",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virgin Islands",
        Rate: "55",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virginia",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Washington",
        Rate: "62",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "West Virginia",
        Rate: "25",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Wyoming",
        Rate: "43",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      }
    ],
    editing: !1,
    originalFormattedData: [
      {
        STATE: "Overall",
        Rate: "55",
        Location: "Vehicle",
        URL: "https://www.cdc.gov"
      },
      {
        STATE: "Alabama",
        Rate: "130",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Alaska",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "American Samoa",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arizona",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arkansas",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "California",
        Rate: "30",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Colorado",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Connecticut",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Deleware",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "DC",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Florida",
        Rate: "30",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Georgia",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Guam",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Hawaii",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Idaho",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Illinois",
        Rate: "30",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Indiana",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Iowa",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kansas",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kentucky",
        Rate: "60",
        Location: "NA",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Louisiana",
        Rate: "30",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maine",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Marshall Islands",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maryland",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Massachusetts",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Michigan",
        Rate: "12",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Micronesia",
        Rate: "65",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Minnesota",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Mississippi",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: "30",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nebraska",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nevada",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Hampshire",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Jersey",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Mexico",
        Rate: "12",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New York",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Carolina",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Dakota",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Northern Mariana Islands",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Ohio",
        Rate: "88",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oklahoma",
        Rate: "40",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oregon",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Palau",
        Rate: "15",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Pennsylvania",
        Rate: "60",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Puerto Rico",
        Rate: "30",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Rhode Island",
        Rate: "40",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Carolina",
        Rate: "55",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Dakota",
        Rate: "86",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Tennessee",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Texas",
        Rate: "30",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Utah",
        Rate: "54",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Vermont",
        Rate: "40",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virgin Islands",
        Rate: "55",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virginia",
        Rate: "57",
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Washington",
        Rate: "62",
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "West Virginia",
        Rate: "25",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Wyoming",
        Rate: "43",
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      }
    ],
    validated: 4.23
  },
  table1708703256246: {
    newViz: !1,
    openModal: !1,
    uid: "table1708703256246",
    type: "table",
    table: {
      label: "Data Table",
      show: !0,
      showDownloadUrl: !1,
      showVertical: !0,
      expanded: !0
    },
    columns: {},
    dataFormat: {},
    visualizationType: "table",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    formattedData: [
      {
        STATE: "Overall",
        Rate: "55",
        Location: "Vehicle",
        URL: "https://www.cdc.gov"
      },
      {
        STATE: "Alabama",
        Rate: 130,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Alaska",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "American Samoa",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arizona",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arkansas",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "California",
        Rate: 30,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Colorado",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Connecticut",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Deleware",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "DC",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Florida",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Georgia",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Guam",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Hawaii",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Idaho",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Illinois",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Indiana",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Iowa",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kansas",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kentucky",
        Rate: 60,
        Location: "NA",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Louisiana",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maine",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Marshall Islands",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maryland",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Massachusetts",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Michigan",
        Rate: 12,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Micronesia",
        Rate: 65,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Minnesota",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Mississippi",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nebraska",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nevada",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Hampshire",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Jersey",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Mexico",
        Rate: 12,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New York",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Carolina",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Dakota",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Northern Mariana Islands",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Ohio",
        Rate: 88,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oklahoma",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oregon",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Palau",
        Rate: 15,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Pennsylvania",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Puerto Rico",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Rhode Island",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Carolina",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Dakota",
        Rate: 86,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Tennessee",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Texas",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Utah",
        Rate: 54,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Vermont",
        Rate: 40,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virgin Islands",
        Rate: 55,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virginia",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Washington",
        Rate: 62,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "West Virginia",
        Rate: 25,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Wyoming",
        Rate: 43,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      }
    ],
    dataKey: "valid-data-map.csv",
    data: [
      {
        STATE: "Overall",
        Rate: "55",
        Location: "Vehicle",
        URL: "https://www.cdc.gov"
      },
      {
        STATE: "Alabama",
        Rate: 130,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Alaska",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "American Samoa",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arizona",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arkansas",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "California",
        Rate: 30,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Colorado",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Connecticut",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Deleware",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "DC",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Florida",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Georgia",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Guam",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Hawaii",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Idaho",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Illinois",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Indiana",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Iowa",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kansas",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kentucky",
        Rate: 60,
        Location: "NA",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Louisiana",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maine",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Marshall Islands",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maryland",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Massachusetts",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Michigan",
        Rate: 12,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Micronesia",
        Rate: 65,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Minnesota",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Mississippi",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nebraska",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nevada",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Hampshire",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Jersey",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Mexico",
        Rate: 12,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New York",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Carolina",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Dakota",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Northern Mariana Islands",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Ohio",
        Rate: 88,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oklahoma",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oregon",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Palau",
        Rate: 15,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Pennsylvania",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Puerto Rico",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Rhode Island",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Carolina",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Dakota",
        Rate: 86,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Tennessee",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Texas",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Utah",
        Rate: 54,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Vermont",
        Rate: 40,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virgin Islands",
        Rate: 55,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virginia",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Washington",
        Rate: 62,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "West Virginia",
        Rate: 25,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Wyoming",
        Rate: 43,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      }
    ],
    editing: !1
  },
  chart1708703345997: {
    type: "chart",
    debugSvg: !1,
    chartMessage: {
      noData: "No Data Available"
    },
    title: "",
    showTitle: !0,
    showDownloadMediaButton: !1,
    theme: "theme-blue",
    animate: !1,
    fontSize: "medium",
    lineDatapointStyle: "hover",
    lineDatapointColor: "Same as Line",
    barHasBorder: "false",
    isLollipopChart: !1,
    lollipopShape: "circle",
    lollipopColorStyle: "two-tone",
    visualizationSubType: "regular",
    barStyle: "",
    roundingStyle: "standard",
    tipRounding: "top",
    isResponsiveTicks: !1,
    general: {
      showDownloadButton: !1
    },
    padding: {
      left: 5,
      right: 5
    },
    suppressedData: [],
    preliminaryData: [],
    yAxis: {
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
      anchors: []
    },
    boxplot: {
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
    },
    topAxis: {
      hasLine: !1
    },
    isLegendValue: !1,
    barThickness: 0.35,
    barHeight: 25,
    barSpace: 15,
    heights: {
      vertical: 300,
      horizontal: 750
    },
    xAxis: {
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
      axisPadding: 0,
      target: 0,
      maxTickRotation: 0,
      dataKey: "Location",
      tickWidthMax: 59
    },
    table: {
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
      dateDisplayFormat: "",
      show: !1
    },
    orientation: "vertical",
    color: "pinkpurple",
    columns: {},
    legend: {
      hide: !1,
      behavior: "isolate",
      singleRow: !0,
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
    },
    brush: {
      height: 25,
      data: [
        {
          STATE: "",
          Rate: "55",
          Location: "Vehicle",
          URL: ""
        },
        {
          STATE: "",
          Rate: 130,
          Location: "Vehicle",
          URL: ""
        },
        {
          STATE: "",
          Rate: 40,
          Location: "Work",
          URL: ""
        },
        {
          STATE: "",
          Rate: 55,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 57,
          Location: "School",
          URL: ""
        },
        {
          STATE: "",
          Rate: 60,
          Location: "School",
          URL: ""
        },
        {
          STATE: "",
          Rate: 30,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 40,
          Location: "Vehicle",
          URL: ""
        },
        {
          STATE: "",
          Rate: 55,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: "57",
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 60,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 30,
          Location: "Work",
          URL: ""
        },
        {
          STATE: "",
          Rate: 40,
          Location: "Work",
          URL: ""
        },
        {
          STATE: "",
          Rate: 55,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 57,
          Location: "School",
          URL: ""
        },
        {
          STATE: "",
          Rate: 60,
          Location: "School",
          URL: ""
        },
        {
          STATE: "",
          Rate: 30,
          Location: "Work",
          URL: ""
        },
        {
          STATE: "",
          Rate: 40,
          Location: "Vehicle",
          URL: ""
        },
        {
          STATE: "",
          Rate: 55,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 57,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 60,
          Location: "NA",
          URL: ""
        },
        {
          STATE: "",
          Rate: 30,
          Location: "Vehicle",
          URL: ""
        },
        {
          STATE: "",
          Rate: 40,
          Location: "Work",
          URL: ""
        },
        {
          STATE: "",
          Rate: 55,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 57,
          Location: "School",
          URL: ""
        },
        {
          STATE: "",
          Rate: 60,
          Location: "School",
          URL: ""
        },
        {
          STATE: "",
          Rate: 12,
          Location: "Work",
          URL: ""
        },
        {
          STATE: "",
          Rate: 65,
          Location: "Vehicle",
          URL: ""
        },
        {
          STATE: "",
          Rate: 55,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 57,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 60,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 30,
          Location: "Vehicle",
          URL: ""
        },
        {
          STATE: "",
          Rate: 40,
          Location: "Work",
          URL: ""
        },
        {
          STATE: "",
          Rate: 55,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 57,
          Location: "School",
          URL: ""
        },
        {
          STATE: "",
          Rate: 60,
          Location: "School",
          URL: ""
        },
        {
          STATE: "",
          Rate: 12,
          Location: "Work",
          URL: ""
        },
        {
          STATE: "",
          Rate: 40,
          Location: "Vehicle",
          URL: ""
        },
        {
          STATE: "",
          Rate: 55,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 57,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: "60",
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 88,
          Location: "Vehicle",
          URL: ""
        },
        {
          STATE: "",
          Rate: 40,
          Location: "Work",
          URL: ""
        },
        {
          STATE: "",
          Rate: 55,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 15,
          Location: "School",
          URL: ""
        },
        {
          STATE: "",
          Rate: 60,
          Location: "School",
          URL: ""
        },
        {
          STATE: "",
          Rate: 30,
          Location: "Work",
          URL: ""
        },
        {
          STATE: "",
          Rate: 40,
          Location: "Vehicle",
          URL: ""
        },
        {
          STATE: "",
          Rate: 55,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 86,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 60,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 30,
          Location: "Vehicle",
          URL: ""
        },
        {
          STATE: "",
          Rate: 54,
          Location: "Work",
          URL: ""
        },
        {
          STATE: "",
          Rate: 40,
          Location: "Home",
          URL: ""
        },
        {
          STATE: "",
          Rate: 55,
          Location: "School",
          URL: ""
        },
        {
          STATE: "",
          Rate: 57,
          Location: "School",
          URL: ""
        },
        {
          STATE: "",
          Rate: 62,
          Location: "Work",
          URL: ""
        },
        {
          STATE: "",
          Rate: 25,
          Location: "Vehicle",
          URL: ""
        },
        {
          STATE: "",
          Rate: 43,
          Location: "Vehicle",
          URL: ""
        }
      ],
      active: !1
    },
    exclusions: {
      active: !1,
      keys: []
    },
    palette: "qualitative-bold",
    isPaletteReversed: !1,
    twoColor: {
      palette: "monochrome-1",
      isPaletteReversed: !1
    },
    labels: !1,
    dataFormat: {
      commas: !1,
      prefix: "",
      suffix: "",
      abbreviated: !1,
      bottomSuffix: "",
      bottomPrefix: "",
      bottomAbbreviated: !1
    },
    confidenceKeys: {},
    visual: {
      border: !0,
      accent: !0,
      background: !0,
      verticalHoverLine: !1,
      horizontalHoverLine: !1
    },
    useLogScale: !1,
    filterBehavior: "Filter Change",
    highlightedBarValues: [],
    series: [
      {
        dataKey: "Rate",
        type: "Bar",
        axis: "Left",
        tooltip: !0
      }
    ],
    tooltips: {
      opacity: 90,
      singleSeries: !1,
      dateDisplayFormat: ""
    },
    forestPlot: {
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
    },
    area: {
      isStacked: !1
    },
    openModal: !1,
    uid: "chart1708703345997",
    visualizationType: "Bar",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    formattedData: [
      {
        STATE: "Overall",
        Rate: "55",
        Location: "Vehicle",
        URL: "https://www.cdc.gov"
      },
      {
        STATE: "Alabama",
        Rate: 130,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Alaska",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "American Samoa",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arizona",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arkansas",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "California",
        Rate: 30,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Colorado",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Connecticut",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Deleware",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "DC",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Florida",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Georgia",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Guam",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Hawaii",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Idaho",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Illinois",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Indiana",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Iowa",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kansas",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kentucky",
        Rate: 60,
        Location: "NA",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Louisiana",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maine",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Marshall Islands",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maryland",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Massachusetts",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Michigan",
        Rate: 12,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Micronesia",
        Rate: 65,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Minnesota",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Mississippi",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nebraska",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nevada",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Hampshire",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Jersey",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Mexico",
        Rate: 12,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New York",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Carolina",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Dakota",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Northern Mariana Islands",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Ohio",
        Rate: 88,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oklahoma",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oregon",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Palau",
        Rate: 15,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Pennsylvania",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Puerto Rico",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Rhode Island",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Carolina",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Dakota",
        Rate: 86,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Tennessee",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Texas",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Utah",
        Rate: 54,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Vermont",
        Rate: 40,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virgin Islands",
        Rate: 55,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virginia",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Washington",
        Rate: 62,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "West Virginia",
        Rate: 25,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Wyoming",
        Rate: 43,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      }
    ],
    dataKey: "valid-data-map.csv",
    data: [
      {
        STATE: "Overall",
        Rate: "55",
        Location: "Vehicle",
        URL: "https://www.cdc.gov"
      },
      {
        STATE: "Alabama",
        Rate: 130,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Alaska",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "American Samoa",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arizona",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arkansas",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "California",
        Rate: 30,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Colorado",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Connecticut",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Deleware",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "DC",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Florida",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Georgia",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Guam",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Hawaii",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Idaho",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Illinois",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Indiana",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Iowa",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kansas",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kentucky",
        Rate: 60,
        Location: "NA",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Louisiana",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maine",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Marshall Islands",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maryland",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Massachusetts",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Michigan",
        Rate: 12,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Micronesia",
        Rate: 65,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Minnesota",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Mississippi",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nebraska",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nevada",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Hampshire",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Jersey",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Mexico",
        Rate: 12,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New York",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Carolina",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Dakota",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Northern Mariana Islands",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Ohio",
        Rate: 88,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oklahoma",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oregon",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Palau",
        Rate: 15,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Pennsylvania",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Puerto Rico",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Rhode Island",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Carolina",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Dakota",
        Rate: 86,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Tennessee",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Texas",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Utah",
        Rate: 54,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Vermont",
        Rate: 40,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virgin Islands",
        Rate: 55,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virginia",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Washington",
        Rate: 62,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "West Virginia",
        Rate: 25,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Wyoming",
        Rate: 43,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      }
    ],
    editing: !1,
    originalFormattedData: [
      {
        STATE: "Overall",
        Rate: "55",
        Location: "Vehicle",
        URL: "https://www.cdc.gov"
      },
      {
        STATE: "Alabama",
        Rate: 130,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Alaska",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "American Samoa",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arizona",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arkansas",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "California",
        Rate: 30,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Colorado",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Connecticut",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Deleware",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "DC",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Florida",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Georgia",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Guam",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Hawaii",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Idaho",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Illinois",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Indiana",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Iowa",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kansas",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kentucky",
        Rate: 60,
        Location: "NA",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Louisiana",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maine",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Marshall Islands",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maryland",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Massachusetts",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Michigan",
        Rate: 12,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Micronesia",
        Rate: 65,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Minnesota",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Mississippi",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nebraska",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nevada",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Hampshire",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Jersey",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Mexico",
        Rate: 12,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New York",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Carolina",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Dakota",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Northern Mariana Islands",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Ohio",
        Rate: 88,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oklahoma",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oregon",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Palau",
        Rate: 15,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Pennsylvania",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Puerto Rico",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Rhode Island",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Carolina",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Dakota",
        Rate: 86,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Tennessee",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Texas",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Utah",
        Rate: 54,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Vermont",
        Rate: 40,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virgin Islands",
        Rate: 55,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virginia",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Washington",
        Rate: 62,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "West Virginia",
        Rate: 25,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Wyoming",
        Rate: 43,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      }
    ],
    validated: 4.23,
    dynamicMarginTop: 0
  }
}, No = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Do = {
  "valid-data-map.csv": {
    data: [
      {
        STATE: "Overall",
        Rate: "55",
        Location: "Vehicle",
        URL: "https://www.cdc.gov"
      },
      {
        STATE: "Alabama",
        Rate: 130,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Alaska",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "American Samoa",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arizona",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Arkansas",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "California",
        Rate: 30,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Colorado",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Connecticut",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Deleware",
        Rate: "57",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "DC",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Florida",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Georgia",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Guam",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Hawaii",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Idaho",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Illinois",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Indiana",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Iowa",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kansas",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Kentucky",
        Rate: 60,
        Location: "NA",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Louisiana",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maine",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Marshall Islands",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Maryland",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Massachusetts",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Michigan",
        Rate: 12,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Micronesia",
        Rate: 65,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Minnesota",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Mississippi",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Montana",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nebraska",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Nevada",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Hampshire",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Jersey",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New Mexico",
        Rate: 12,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "New York",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Carolina",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "North Dakota",
        Rate: 57,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Northern Mariana Islands",
        Rate: "60",
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Ohio",
        Rate: 88,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oklahoma",
        Rate: 40,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Oregon",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Palau",
        Rate: 15,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Pennsylvania",
        Rate: 60,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Puerto Rico",
        Rate: 30,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Rhode Island",
        Rate: 40,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Carolina",
        Rate: 55,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "South Dakota",
        Rate: 86,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Tennessee",
        Rate: 60,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Texas",
        Rate: 30,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Utah",
        Rate: 54,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Vermont",
        Rate: 40,
        Location: "Home",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virgin Islands",
        Rate: 55,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Virginia",
        Rate: 57,
        Location: "School",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Washington",
        Rate: 62,
        Location: "Work",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "West Virginia",
        Rate: 25,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      },
      {
        STATE: "Wyoming",
        Rate: 43,
        Location: "Vehicle",
        URL: "https://www.cdc.gov/"
      }
    ],
    dataFileSize: 2433,
    dataFileName: "valid-data-map.csv",
    dataFileSourceType: "file",
    dataFileFormat: "CSV",
    preview: !0
  }
}, Ho = [], Vo = "dashboard", Io = "", Uo = "", Po = "", Eo = [], xo = [], Wo = {}, Oo = {
  dashboard: ko,
  rows: Co,
  visualizations: Mo,
  table: No,
  datasets: Do,
  data: Ho,
  type: Vo,
  dataUrl: Io,
  dataFileName: Uo,
  dataFileSourceType: Po,
  dataDescription: Eo,
  formattedData: xo,
  runtime: Wo
}, Bo = {
  theme: "theme-blue",
  description: "",
  title: "Bump Chart"
}, zo = [
  {
    columns: [
      {
        width: 6,
        widget: "markup-include1719606699638"
      },
      {
        width: 6,
        widget: "markup-include1719606700773"
      }
    ],
    uuid: 1719606685381
  },
  {
    columns: [
      {
        width: 12,
        widget: "chart1719598308434"
      },
      {},
      {}
    ],
    uuid: 1719606685381
  }
], qo = {
  chart1719598308434: {
    type: "chart",
    debugSvg: !1,
    chartMessage: {
      noData: "No Data Available"
    },
    title: "Bump Chart",
    showTitle: !1,
    showDownloadMediaButton: !1,
    theme: "theme-blue",
    animate: !1,
    fontSize: "medium",
    lineDatapointStyle: "hover",
    lineDatapointColor: "Same as Line",
    barHasBorder: "false",
    isLollipopChart: !1,
    lollipopShape: "circle",
    lollipopColorStyle: "two-tone",
    visualizationSubType: "regular",
    barStyle: "",
    roundingStyle: "standard",
    tipRounding: "top",
    isResponsiveTicks: !0,
    general: {
      showDownloadButton: !1
    },
    padding: {
      left: 5,
      right: 5
    },
    preliminaryData: [],
    yAxis: {
      hideAxis: !1,
      displayNumbersOnBar: !1,
      hideLabel: !1,
      hideTicks: !0,
      size: "93",
      gridLines: !0,
      enablePadding: !0,
      min: "0",
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
      numTicks: "10",
      axisPadding: 0,
      scalePadding: "5",
      tickRotation: 0,
      anchors: []
    },
    boxplot: {
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
    },
    topAxis: {
      hasLine: !1
    },
    isLegendValue: !1,
    barThickness: 0.035,
    barHeight: 25,
    barSpace: 15,
    heights: {
      vertical: "600",
      horizontal: 750
    },
    xAxis: {
      sortDates: !1,
      anchors: [],
      type: "date-time",
      showTargetLabel: !0,
      targetLabel: "Target",
      hideAxis: !1,
      hideLabel: !1,
      hideTicks: !0,
      size: 75,
      tickRotation: 0,
      min: "",
      max: "",
      labelColor: "#333",
      tickLabelColor: "#333",
      tickColor: "#333",
      numTicks: "7",
      labelOffset: 65,
      axisPadding: 200,
      target: 0,
      maxTickRotation: 50,
      showSuppressedSymbol: !0,
      showSuppressedLine: !0,
      padding: "0",
      dataKey: "year",
      dateParseFormat: "%Y",
      dateDisplayFormat: "%Y",
      tickWidthMax: 41
    },
    table: {
      label: "Data Table",
      expanded: !0,
      limitHeight: !0,
      height: "500",
      caption: "",
      showDownloadUrl: !1,
      showDataTableLink: !1,
      indexLabel: "",
      download: !0,
      showVertical: !0,
      dateDisplayFormat: "",
      show: !0,
      collapsible: !0
    },
    orientation: "vertical",
    color: "pinkpurple",
    columns: {
      Sibling: {
        label: "Sibling",
        dataTable: !1,
        tooltips: !1,
        prefix: "",
        suffix: "",
        forestPlot: !1,
        startingPoint: "0",
        forestPlotAlignRight: !1,
        roundToPlace: 0,
        commas: !1,
        showInViz: !1,
        forestPlotStartingPoint: 0,
        name: "Sibling"
      },
      Neck: {
        label: "Neck",
        dataTable: !1,
        tooltips: !1,
        prefix: "",
        suffix: "",
        forestPlot: !1,
        startingPoint: "0",
        forestPlotAlignRight: !1,
        roundToPlace: 0,
        commas: !1,
        showInViz: !1,
        forestPlotStartingPoint: 0,
        name: "Neck"
      },
      Girlfriend: {
        label: "Girlfriend",
        dataTable: !1,
        tooltips: !1,
        prefix: "",
        suffix: "",
        forestPlot: !1,
        startingPoint: "0",
        forestPlotAlignRight: !1,
        roundToPlace: 0,
        commas: !1,
        showInViz: !1,
        forestPlotStartingPoint: 0,
        name: "Girlfriend"
      },
      Bullying: {
        label: "Bullying",
        dataTable: !1,
        tooltips: !1,
        prefix: "",
        suffix: "",
        forestPlot: !1,
        startingPoint: "0",
        forestPlotAlignRight: !1,
        roundToPlace: 0,
        commas: !1,
        showInViz: !1,
        forestPlotStartingPoint: 0,
        name: "Bullying"
      },
      Mother: {
        label: "Mother",
        dataTable: !1,
        tooltips: !1,
        prefix: "",
        suffix: "",
        forestPlot: !1,
        startingPoint: "0",
        forestPlotAlignRight: !1,
        roundToPlace: 0,
        commas: !1,
        showInViz: !1,
        forestPlotStartingPoint: 0,
        name: "Mother"
      },
      Overdose: {
        label: "Overdose",
        dataTable: !1,
        tooltips: !1,
        prefix: "",
        suffix: "",
        forestPlot: !1,
        startingPoint: "0",
        forestPlotAlignRight: !1,
        roundToPlace: 0,
        commas: !1,
        showInViz: !1,
        forestPlotStartingPoint: 0,
        name: "Overdose"
      },
      Depression: {
        label: "Depression",
        dataTable: !1,
        tooltips: !1,
        prefix: "",
        suffix: "",
        forestPlot: !1,
        startingPoint: "0",
        forestPlotAlignRight: !1,
        roundToPlace: 0,
        commas: !1,
        showInViz: !1,
        forestPlotStartingPoint: 0,
        name: "Depression"
      },
      Vehicle: {
        label: "Vehicle",
        dataTable: !1,
        tooltips: !1,
        prefix: "",
        suffix: "",
        forestPlot: !1,
        startingPoint: "0",
        forestPlotAlignRight: !1,
        roundToPlace: 0,
        commas: !1,
        showInViz: !1,
        forestPlotStartingPoint: 0,
        name: "Vehicle"
      },
      Friends: {
        label: "Friends",
        dataTable: !1,
        tooltips: !1,
        prefix: "",
        suffix: "",
        forestPlot: !1,
        startingPoint: "0",
        forestPlotAlignRight: !1,
        roundToPlace: 0,
        commas: !1,
        showInViz: !1,
        forestPlotStartingPoint: 0,
        name: "Friends"
      },
      Head: {
        label: "Head",
        dataTable: !1,
        tooltips: !1,
        prefix: "",
        suffix: "",
        forestPlot: !1,
        startingPoint: "0",
        forestPlotAlignRight: !1,
        roundToPlace: 0,
        commas: !1,
        showInViz: !1,
        forestPlotStartingPoint: 0,
        name: "Head"
      },
      year: {
        label: "year",
        dataTable: !1,
        tooltips: !1,
        prefix: "",
        suffix: "",
        forestPlot: !1,
        startingPoint: "0",
        forestPlotAlignRight: !1,
        roundToPlace: 0,
        commas: !1,
        showInViz: !1,
        forestPlotStartingPoint: 0,
        name: "year"
      },
      Name: {
        label: "Name",
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
        name: "Name"
      },
      Timestamp: {
        label: "Timestamp",
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
        name: "Timestamp"
      },
      Rank: {
        label: "Rank",
        dataTable: !0,
        tooltips: !1,
        prefix: "",
        suffix: "",
        forestPlot: !1,
        startingPoint: "0",
        forestPlotAlignRight: !1,
        roundToPlace: 0,
        commas: !1,
        showInViz: !1,
        forestPlotStartingPoint: 0,
        name: "Rank"
      },
      Frequency: {
        label: "Frequency",
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
        name: "Frequency"
      },
      "Representative Sentence": {
        label: "Representative Sentence",
        dataTable: !0,
        tooltips: !1,
        prefix: "",
        suffix: "",
        forestPlot: !1,
        startingPoint: "0",
        forestPlotAlignRight: !1,
        roundToPlace: 0,
        commas: !1,
        showInViz: !1,
        forestPlotStartingPoint: 0,
        name: "Representative Sentence"
      },
      "Rank Change": {
        label: "Rank Change",
        dataTable: !1,
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
        name: "Rank Change"
      }
    },
    legend: {
      hide: !1,
      behavior: "isolate",
      axisAlign: !0,
      singleRow: !0,
      colorCode: "",
      reverseLabelOrder: !1,
      description: "* To highlight a data series in the chart, select the corresponding name in the legend. To undo the highlight, select the reset button.",
      dynamicLegend: !1,
      dynamicLegendDefaultText: "Show All",
      dynamicLegendItemLimit: 5,
      dynamicLegendItemLimitMessage: "Dynamic Legend Item Limit Hit.",
      dynamicLegendChartMessage: "Select Options from the Legend",
      lineMode: !1,
      verticalSorted: !1,
      highlightOnHover: !1,
      hideSuppressedLabels: !1,
      seriesHighlight: []
    },
    brush: {
      height: 25,
      active: !1
    },
    exclusions: {
      active: !1,
      keys: []
    },
    palette: "qualitative-soft",
    isPaletteReversed: !1,
    twoColor: {
      palette: "monochrome-1",
      isPaletteReversed: !1
    },
    labels: !1,
    dataFormat: {
      commas: !1,
      prefix: "",
      suffix: "",
      abbreviated: !1,
      bottomSuffix: "",
      bottomPrefix: "",
      bottomAbbreviated: !1
    },
    confidenceKeys: {},
    visual: {
      border: !0,
      accent: !0,
      background: !0,
      verticalHoverLine: !1,
      horizontalHoverLine: !1
    },
    useLogScale: !1,
    filterBehavior: "Filter Change",
    highlightedBarValues: [],
    series: [
      {
        dataKey: "Sibling",
        type: "Bump Chart",
        axis: "Left",
        tooltip: !0,
        lineType: "curveMonotoneX",
        name: ""
      },
      {
        dataKey: "Neck",
        type: "Bump Chart",
        axis: "Left",
        tooltip: !1,
        lineType: "curveMonotoneX"
      },
      {
        dataKey: "Girlfriend",
        type: "Bump Chart",
        axis: "Left",
        tooltip: !1,
        lineType: "curveMonotoneX"
      },
      {
        dataKey: "Bullying",
        type: "Bump Chart",
        axis: "Left",
        tooltip: !1,
        lineType: "curveMonotoneX"
      },
      {
        dataKey: "Mother",
        type: "Bump Chart",
        axis: "Left",
        tooltip: !1,
        lineType: "curveMonotoneX"
      },
      {
        dataKey: "Overdose",
        type: "Bump Chart",
        axis: "Left",
        tooltip: !1,
        lineType: "curveMonotoneX"
      },
      {
        dataKey: "Depression",
        type: "Bump Chart",
        axis: "Left",
        tooltip: !1,
        lineType: "curveMonotoneX"
      },
      {
        dataKey: "Vehicle",
        type: "Bump Chart",
        axis: "Left",
        tooltip: !1,
        lineType: "curveMonotoneX"
      },
      {
        dataKey: "Friends",
        type: "Bump Chart",
        axis: "Left",
        tooltip: !1,
        lineType: "curveMonotoneX"
      },
      {
        dataKey: "Head",
        type: "Bump Chart",
        axis: "Left",
        tooltip: !1,
        lineType: "curveMonotoneX"
      }
    ],
    tooltips: {
      opacity: 90,
      singleSeries: !1,
      dateDisplayFormat: ""
    },
    forestPlot: {
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
    },
    area: {
      isStacked: !1
    },
    sankey: {
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
    },
    filters: [],
    openModal: !0,
    uid: "chart1719598308434",
    visualizationType: "Bump Chart",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    editing: !1,
    originalFormattedData: [
      {
        Sibling: "1",
        year: "2014",
        Name: "Sibling",
        Timestamp: "1/1/14",
        Rank: "1",
        Frequency: "149",
        "Rank Change": "-",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2015",
        Name: "Sibling",
        Timestamp: "1/1/15",
        Rank: "2",
        Frequency: "172",
        "Rank Change": "-1",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2016",
        Name: "Sibling",
        Timestamp: "1/1/16",
        Rank: "2",
        Frequency: "230",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2017",
        Name: "Sibling",
        Timestamp: "1/1/17",
        Rank: "2",
        Frequency: "379",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2018",
        Name: "Sibling",
        Timestamp: "1/1/18",
        Rank: "2",
        Frequency: "357",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2019",
        Name: "Sibling",
        Timestamp: "1/1/19",
        Rank: "2",
        Frequency: "358",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2020",
        Name: "Sibling",
        Timestamp: "1/1/20",
        Rank: "2",
        Frequency: "458",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Neck: "2",
        year: "2014",
        Name: "Neck",
        Timestamp: "1/1/14",
        Rank: "2",
        Frequency: "131",
        "Rank Change": "-",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2015",
        Name: "Neck",
        Timestamp: "1/1/15",
        Rank: "1",
        Frequency: "316",
        "Rank Change": "1",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2016",
        Name: "Neck",
        Timestamp: "1/1/16",
        Rank: "1",
        Frequency: "437",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2017",
        Name: "Neck",
        Timestamp: "1/1/17",
        Rank: "1",
        Frequency: "621",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2018",
        Name: "Neck",
        Timestamp: "1/1/18",
        Rank: "1",
        Frequency: "526",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2019",
        Name: "Neck",
        Timestamp: "1/1/19",
        Rank: "1",
        Frequency: "555",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2020",
        Name: "Neck",
        Timestamp: "1/1/20",
        Rank: "1",
        Frequency: "527",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Girlfriend: "3",
        year: "2014",
        Name: "Girlfriend",
        Timestamp: "1/1/14",
        Rank: "3",
        Frequency: "101",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2015",
        Name: "Girlfriend",
        Timestamp: "1/1/15",
        Rank: "4",
        Frequency: "155",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "3",
        year: "2016",
        Name: "Girlfriend",
        Timestamp: "1/1/16",
        Rank: "3",
        Frequency: "219",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2017",
        Name: "Girlfriend",
        Timestamp: "1/1/17",
        Rank: "4",
        Frequency: "260",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "3",
        year: "2018",
        Name: "Girlfriend",
        Timestamp: "1/1/18",
        Rank: "3",
        Frequency: "294",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2019",
        Name: "Girlfriend",
        Timestamp: "1/1/19",
        Rank: "4",
        Frequency: "262",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2020",
        Name: "Girlfriend",
        Timestamp: "1/1/20",
        Rank: "4",
        Frequency: "242",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Bullying: "4",
        year: "2014",
        Name: "Bullying",
        Timestamp: "1/1/14",
        Rank: "4",
        Frequency: "95",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "8",
        year: "2015",
        Name: "Bullying",
        Timestamp: "1/1/15",
        Rank: "8",
        Frequency: "90",
        "Rank Change": "-4",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "5",
        year: "2016",
        Name: "Bullying",
        Timestamp: "1/1/16",
        Rank: "5",
        Frequency: "144",
        "Rank Change": "3",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "10",
        year: "2017",
        Name: "Bullying",
        Timestamp: "1/1/17",
        Rank: "10",
        Frequency: "165",
        "Rank Change": "-5",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "6",
        year: "2018",
        Name: "Bullying",
        Timestamp: "1/1/18",
        Rank: "6",
        Frequency: "213",
        "Rank Change": "-4",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "9",
        year: "2019",
        Name: "Bullying",
        Timestamp: "1/1/19",
        Rank: "9",
        Frequency: "151",
        "Rank Change": "-3",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "10",
        year: "2020",
        Name: "Bullying",
        Timestamp: "1/1/20",
        Rank: "10",
        Frequency: "112",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Mother: "5",
        year: "2014",
        Name: "Mother",
        Timestamp: "1/1/14",
        Rank: "5",
        Frequency: "89",
        "Rank Change": "-",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "7",
        year: "2015",
        Name: "Mother",
        Timestamp: "1/1/15",
        Rank: "7",
        Frequency: "104",
        "Rank Change": "-2",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "6",
        year: "2016",
        Name: "Mother",
        Timestamp: "1/1/16",
        Rank: "6",
        Frequency: "141",
        "Rank Change": "1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "5",
        year: "2017",
        Name: "Mother",
        Timestamp: "1/1/17",
        Rank: "5",
        Frequency: "230",
        "Rank Change": "1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "4",
        year: "2018",
        Name: "Mother",
        Timestamp: "1/1/18",
        Rank: "4",
        Frequency: "241",
        "Rank Change": "1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "5",
        year: "2019",
        Name: "Mother",
        Timestamp: "1/1/19",
        Rank: "5",
        Frequency: "190",
        "Rank Change": "-1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "6",
        year: "2020",
        Name: "Mother",
        Timestamp: "1/1/20",
        Rank: "6",
        Frequency: "206",
        "Rank Change": "-1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Overdose: "6",
        year: "2014",
        Name: "Overdose",
        Timestamp: "1/1/14",
        Rank: "6",
        Frequency: "76",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "6",
        year: "2015",
        Name: "Overdose",
        Timestamp: "1/1/15",
        Rank: "6",
        Frequency: "114",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "7",
        year: "2016",
        Name: "Overdose",
        Timestamp: "1/1/16",
        Rank: "7",
        Frequency: "137",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "6",
        year: "2017",
        Name: "Overdose",
        Timestamp: "1/1/17",
        Rank: "6",
        Frequency: "227",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "7",
        year: "2018",
        Name: "Overdose",
        Timestamp: "1/1/18",
        Rank: "7",
        Frequency: "185",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "6",
        year: "2019",
        Name: "Overdose",
        Timestamp: "1/1/19",
        Rank: "6",
        Frequency: "190",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "5",
        year: "2020",
        Name: "Overdose",
        Timestamp: "1/1/20",
        Rank: "5",
        Frequency: "210",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Depression: "7",
        year: "2014",
        Name: "Depression",
        Timestamp: "1/1/14",
        Rank: "7",
        Frequency: "57",
        "Rank Change": "-",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "9",
        year: "2015",
        Name: "Depression",
        Timestamp: "1/1/15",
        Rank: "9",
        Frequency: "89",
        "Rank Change": "-2",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "9",
        year: "2016",
        Name: "Depression",
        Timestamp: "1/1/16",
        Rank: "9",
        Frequency: "125",
        "Rank Change": "0",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "7",
        year: "2017",
        Name: "Depression",
        Timestamp: "1/1/17",
        Rank: "7",
        Frequency: "181",
        "Rank Change": "2",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "8",
        year: "2018",
        Name: "Depression",
        Timestamp: "1/1/18",
        Rank: "8",
        Frequency: "168",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "7",
        year: "2019",
        Name: "Depression",
        Timestamp: "1/1/19",
        Rank: "7",
        Frequency: "172",
        "Rank Change": "1",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "7",
        year: "2020",
        Name: "Depression",
        Timestamp: "1/1/20",
        Rank: "8",
        Frequency: "206",
        "Rank Change": "0",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Vehicle: "8",
        year: "2014",
        Name: "Vehicle",
        Timestamp: "1/1/14",
        Rank: "8",
        Frequency: "55",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2015",
        Name: "Vehicle",
        Timestamp: "1/1/15",
        Rank: "3",
        Frequency: "171",
        "Rank Change": "5",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "4",
        year: "2016",
        Name: "Vehicle",
        Timestamp: "1/1/16",
        Rank: "4",
        Frequency: "209",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2017",
        Name: "Vehicle",
        Timestamp: "1/1/17",
        Rank: "3",
        Frequency: "304",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "5",
        year: "2018",
        Name: "Vehicle",
        Timestamp: "1/1/18",
        Rank: "5",
        Frequency: "236",
        "Rank Change": "-2",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2019",
        Name: "Vehicle",
        Timestamp: "1/1/19",
        Rank: "3",
        Frequency: "266",
        "Rank Change": "2",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2020",
        Name: "Vehicle",
        Timestamp: "1/1/20",
        Rank: "3",
        Frequency: "293",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Friends: "9",
        year: "2014",
        Name: "Friends",
        Timestamp: "1/1/14",
        Rank: "9",
        Frequency: "41",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "10",
        year: "2015",
        Name: "Friends",
        Timestamp: "1/1/15",
        Rank: "10",
        Frequency: "78",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "10",
        year: "2016",
        Name: "Friends",
        Timestamp: "1/1/16",
        Rank: "10",
        Frequency: "87",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "9",
        year: "2017",
        Name: "Friends",
        Timestamp: "1/1/17",
        Rank: "9",
        Frequency: "170",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "9",
        year: "2018",
        Name: "Friends",
        Timestamp: "1/1/18",
        Rank: "9",
        Frequency: "165",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "10",
        year: "2019",
        Name: "Friends",
        Timestamp: "1/1/19",
        Rank: "10",
        Frequency: "127",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "9",
        year: "2020",
        Name: "Friends",
        Timestamp: "1/1/20",
        Rank: "9",
        Frequency: "137",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Head: "10",
        year: "2014",
        Name: "Head",
        Timestamp: "1/1/14",
        Rank: "10",
        Frequency: "20",
        "Rank Change": "-",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "5",
        year: "2015",
        Name: "Head",
        Timestamp: "1/1/15",
        Rank: "5",
        Frequency: "119",
        "Rank Change": "5",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2016",
        Name: "Head",
        Timestamp: "1/1/16",
        Rank: "8",
        Frequency: "134",
        "Rank Change": "-3",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2017",
        Name: "Head",
        Timestamp: "1/1/17",
        Rank: "8",
        Frequency: "171",
        "Rank Change": "0",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "10",
        year: "2018",
        Name: "Head",
        Timestamp: "1/1/18",
        Rank: "10",
        Frequency: "141",
        "Rank Change": "-2",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2019",
        Name: "Head",
        Timestamp: "1/1/19",
        Rank: "8",
        Frequency: "152",
        "Rank Change": "2",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2020",
        Name: "Head",
        Timestamp: "1/1/20",
        Rank: "8",
        Frequency: "199",
        "Rank Change": "0",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      }
    ],
    version: "4.24.4",
    footnotes: "NVDRS, 2014-2020. Data are outputs from unsupervised topic modeling (BERTopic) of sentences in NVDRS data related to adolescent suicides. All narratives were split into sentences and fed in to the model grouping sentences into topics. The top ten topics are shown with the most representative four key terms in each topic and a representative sentence. The frequency of sentences within each topic was annually tracked.",
    dynamicMarginTop: 0,
    data: [
      {
        Sibling: "1",
        year: "2014",
        Name: "Sibling",
        Timestamp: "1/1/14",
        Rank: "1",
        Frequency: "149",
        "Rank Change": "-",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2015",
        Name: "Sibling",
        Timestamp: "1/1/15",
        Rank: "2",
        Frequency: "172",
        "Rank Change": "-1",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2016",
        Name: "Sibling",
        Timestamp: "1/1/16",
        Rank: "2",
        Frequency: "230",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2017",
        Name: "Sibling",
        Timestamp: "1/1/17",
        Rank: "2",
        Frequency: "379",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2018",
        Name: "Sibling",
        Timestamp: "1/1/18",
        Rank: "2",
        Frequency: "357",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2019",
        Name: "Sibling",
        Timestamp: "1/1/19",
        Rank: "2",
        Frequency: "358",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2020",
        Name: "Sibling",
        Timestamp: "1/1/20",
        Rank: "2",
        Frequency: "458",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Neck: "2",
        year: "2014",
        Name: "Neck",
        Timestamp: "1/1/14",
        Rank: "2",
        Frequency: "131",
        "Rank Change": "-",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2015",
        Name: "Neck",
        Timestamp: "1/1/15",
        Rank: "1",
        Frequency: "316",
        "Rank Change": "1",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2016",
        Name: "Neck",
        Timestamp: "1/1/16",
        Rank: "1",
        Frequency: "437",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2017",
        Name: "Neck",
        Timestamp: "1/1/17",
        Rank: "1",
        Frequency: "621",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2018",
        Name: "Neck",
        Timestamp: "1/1/18",
        Rank: "1",
        Frequency: "526",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2019",
        Name: "Neck",
        Timestamp: "1/1/19",
        Rank: "1",
        Frequency: "555",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2020",
        Name: "Neck",
        Timestamp: "1/1/20",
        Rank: "1",
        Frequency: "527",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Girlfriend: "3",
        year: "2014",
        Name: "Girlfriend",
        Timestamp: "1/1/14",
        Rank: "3",
        Frequency: "101",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2015",
        Name: "Girlfriend",
        Timestamp: "1/1/15",
        Rank: "4",
        Frequency: "155",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "3",
        year: "2016",
        Name: "Girlfriend",
        Timestamp: "1/1/16",
        Rank: "3",
        Frequency: "219",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2017",
        Name: "Girlfriend",
        Timestamp: "1/1/17",
        Rank: "4",
        Frequency: "260",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "3",
        year: "2018",
        Name: "Girlfriend",
        Timestamp: "1/1/18",
        Rank: "3",
        Frequency: "294",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2019",
        Name: "Girlfriend",
        Timestamp: "1/1/19",
        Rank: "4",
        Frequency: "262",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2020",
        Name: "Girlfriend",
        Timestamp: "1/1/20",
        Rank: "4",
        Frequency: "242",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Bullying: "4",
        year: "2014",
        Name: "Bullying",
        Timestamp: "1/1/14",
        Rank: "4",
        Frequency: "95",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "8",
        year: "2015",
        Name: "Bullying",
        Timestamp: "1/1/15",
        Rank: "8",
        Frequency: "90",
        "Rank Change": "-4",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "5",
        year: "2016",
        Name: "Bullying",
        Timestamp: "1/1/16",
        Rank: "5",
        Frequency: "144",
        "Rank Change": "3",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "10",
        year: "2017",
        Name: "Bullying",
        Timestamp: "1/1/17",
        Rank: "10",
        Frequency: "165",
        "Rank Change": "-5",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "6",
        year: "2018",
        Name: "Bullying",
        Timestamp: "1/1/18",
        Rank: "6",
        Frequency: "213",
        "Rank Change": "-4",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "9",
        year: "2019",
        Name: "Bullying",
        Timestamp: "1/1/19",
        Rank: "9",
        Frequency: "151",
        "Rank Change": "-3",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "10",
        year: "2020",
        Name: "Bullying",
        Timestamp: "1/1/20",
        Rank: "10",
        Frequency: "112",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Mother: "5",
        year: "2014",
        Name: "Mother",
        Timestamp: "1/1/14",
        Rank: "5",
        Frequency: "89",
        "Rank Change": "-",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "7",
        year: "2015",
        Name: "Mother",
        Timestamp: "1/1/15",
        Rank: "7",
        Frequency: "104",
        "Rank Change": "-2",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "6",
        year: "2016",
        Name: "Mother",
        Timestamp: "1/1/16",
        Rank: "6",
        Frequency: "141",
        "Rank Change": "1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "5",
        year: "2017",
        Name: "Mother",
        Timestamp: "1/1/17",
        Rank: "5",
        Frequency: "230",
        "Rank Change": "1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "4",
        year: "2018",
        Name: "Mother",
        Timestamp: "1/1/18",
        Rank: "4",
        Frequency: "241",
        "Rank Change": "1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "5",
        year: "2019",
        Name: "Mother",
        Timestamp: "1/1/19",
        Rank: "5",
        Frequency: "190",
        "Rank Change": "-1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "6",
        year: "2020",
        Name: "Mother",
        Timestamp: "1/1/20",
        Rank: "6",
        Frequency: "206",
        "Rank Change": "-1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Overdose: "6",
        year: "2014",
        Name: "Overdose",
        Timestamp: "1/1/14",
        Rank: "6",
        Frequency: "76",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "6",
        year: "2015",
        Name: "Overdose",
        Timestamp: "1/1/15",
        Rank: "6",
        Frequency: "114",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "7",
        year: "2016",
        Name: "Overdose",
        Timestamp: "1/1/16",
        Rank: "7",
        Frequency: "137",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "6",
        year: "2017",
        Name: "Overdose",
        Timestamp: "1/1/17",
        Rank: "6",
        Frequency: "227",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "7",
        year: "2018",
        Name: "Overdose",
        Timestamp: "1/1/18",
        Rank: "7",
        Frequency: "185",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "6",
        year: "2019",
        Name: "Overdose",
        Timestamp: "1/1/19",
        Rank: "6",
        Frequency: "190",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "5",
        year: "2020",
        Name: "Overdose",
        Timestamp: "1/1/20",
        Rank: "5",
        Frequency: "210",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Depression: "7",
        year: "2014",
        Name: "Depression",
        Timestamp: "1/1/14",
        Rank: "7",
        Frequency: "57",
        "Rank Change": "-",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "9",
        year: "2015",
        Name: "Depression",
        Timestamp: "1/1/15",
        Rank: "9",
        Frequency: "89",
        "Rank Change": "-2",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "9",
        year: "2016",
        Name: "Depression",
        Timestamp: "1/1/16",
        Rank: "9",
        Frequency: "125",
        "Rank Change": "0",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "7",
        year: "2017",
        Name: "Depression",
        Timestamp: "1/1/17",
        Rank: "7",
        Frequency: "181",
        "Rank Change": "2",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "8",
        year: "2018",
        Name: "Depression",
        Timestamp: "1/1/18",
        Rank: "8",
        Frequency: "168",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "7",
        year: "2019",
        Name: "Depression",
        Timestamp: "1/1/19",
        Rank: "7",
        Frequency: "172",
        "Rank Change": "1",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "7",
        year: "2020",
        Name: "Depression",
        Timestamp: "1/1/20",
        Rank: "8",
        Frequency: "206",
        "Rank Change": "0",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Vehicle: "8",
        year: "2014",
        Name: "Vehicle",
        Timestamp: "1/1/14",
        Rank: "8",
        Frequency: "55",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2015",
        Name: "Vehicle",
        Timestamp: "1/1/15",
        Rank: "3",
        Frequency: "171",
        "Rank Change": "5",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "4",
        year: "2016",
        Name: "Vehicle",
        Timestamp: "1/1/16",
        Rank: "4",
        Frequency: "209",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2017",
        Name: "Vehicle",
        Timestamp: "1/1/17",
        Rank: "3",
        Frequency: "304",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "5",
        year: "2018",
        Name: "Vehicle",
        Timestamp: "1/1/18",
        Rank: "5",
        Frequency: "236",
        "Rank Change": "-2",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2019",
        Name: "Vehicle",
        Timestamp: "1/1/19",
        Rank: "3",
        Frequency: "266",
        "Rank Change": "2",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2020",
        Name: "Vehicle",
        Timestamp: "1/1/20",
        Rank: "3",
        Frequency: "293",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Friends: "9",
        year: "2014",
        Name: "Friends",
        Timestamp: "1/1/14",
        Rank: "9",
        Frequency: "41",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "10",
        year: "2015",
        Name: "Friends",
        Timestamp: "1/1/15",
        Rank: "10",
        Frequency: "78",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "10",
        year: "2016",
        Name: "Friends",
        Timestamp: "1/1/16",
        Rank: "10",
        Frequency: "87",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "9",
        year: "2017",
        Name: "Friends",
        Timestamp: "1/1/17",
        Rank: "9",
        Frequency: "170",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "9",
        year: "2018",
        Name: "Friends",
        Timestamp: "1/1/18",
        Rank: "9",
        Frequency: "165",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "10",
        year: "2019",
        Name: "Friends",
        Timestamp: "1/1/19",
        Rank: "10",
        Frequency: "127",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "9",
        year: "2020",
        Name: "Friends",
        Timestamp: "1/1/20",
        Rank: "9",
        Frequency: "137",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Head: "10",
        year: "2014",
        Name: "Head",
        Timestamp: "1/1/14",
        Rank: "10",
        Frequency: "20",
        "Rank Change": "-",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "5",
        year: "2015",
        Name: "Head",
        Timestamp: "1/1/15",
        Rank: "5",
        Frequency: "119",
        "Rank Change": "5",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2016",
        Name: "Head",
        Timestamp: "1/1/16",
        Rank: "8",
        Frequency: "134",
        "Rank Change": "-3",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2017",
        Name: "Head",
        Timestamp: "1/1/17",
        Rank: "8",
        Frequency: "171",
        "Rank Change": "0",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "10",
        year: "2018",
        Name: "Head",
        Timestamp: "1/1/18",
        Rank: "10",
        Frequency: "141",
        "Rank Change": "-2",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2019",
        Name: "Head",
        Timestamp: "1/1/19",
        Rank: "8",
        Frequency: "152",
        "Rank Change": "2",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2020",
        Name: "Head",
        Timestamp: "1/1/20",
        Rank: "8",
        Frequency: "199",
        "Rank Change": "0",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      }
    ],
    formattedData: [
      {
        Sibling: "1",
        year: "2014",
        Name: "Sibling",
        Timestamp: "1/1/14",
        Rank: "1",
        Frequency: "149",
        "Rank Change": "-",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2015",
        Name: "Sibling",
        Timestamp: "1/1/15",
        Rank: "2",
        Frequency: "172",
        "Rank Change": "-1",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2016",
        Name: "Sibling",
        Timestamp: "1/1/16",
        Rank: "2",
        Frequency: "230",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2017",
        Name: "Sibling",
        Timestamp: "1/1/17",
        Rank: "2",
        Frequency: "379",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2018",
        Name: "Sibling",
        Timestamp: "1/1/18",
        Rank: "2",
        Frequency: "357",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2019",
        Name: "Sibling",
        Timestamp: "1/1/19",
        Rank: "2",
        Frequency: "358",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2020",
        Name: "Sibling",
        Timestamp: "1/1/20",
        Rank: "2",
        Frequency: "458",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Neck: "2",
        year: "2014",
        Name: "Neck",
        Timestamp: "1/1/14",
        Rank: "2",
        Frequency: "131",
        "Rank Change": "-",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2015",
        Name: "Neck",
        Timestamp: "1/1/15",
        Rank: "1",
        Frequency: "316",
        "Rank Change": "1",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2016",
        Name: "Neck",
        Timestamp: "1/1/16",
        Rank: "1",
        Frequency: "437",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2017",
        Name: "Neck",
        Timestamp: "1/1/17",
        Rank: "1",
        Frequency: "621",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2018",
        Name: "Neck",
        Timestamp: "1/1/18",
        Rank: "1",
        Frequency: "526",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2019",
        Name: "Neck",
        Timestamp: "1/1/19",
        Rank: "1",
        Frequency: "555",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2020",
        Name: "Neck",
        Timestamp: "1/1/20",
        Rank: "1",
        Frequency: "527",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Girlfriend: "3",
        year: "2014",
        Name: "Girlfriend",
        Timestamp: "1/1/14",
        Rank: "3",
        Frequency: "101",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2015",
        Name: "Girlfriend",
        Timestamp: "1/1/15",
        Rank: "4",
        Frequency: "155",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "3",
        year: "2016",
        Name: "Girlfriend",
        Timestamp: "1/1/16",
        Rank: "3",
        Frequency: "219",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2017",
        Name: "Girlfriend",
        Timestamp: "1/1/17",
        Rank: "4",
        Frequency: "260",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "3",
        year: "2018",
        Name: "Girlfriend",
        Timestamp: "1/1/18",
        Rank: "3",
        Frequency: "294",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2019",
        Name: "Girlfriend",
        Timestamp: "1/1/19",
        Rank: "4",
        Frequency: "262",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2020",
        Name: "Girlfriend",
        Timestamp: "1/1/20",
        Rank: "4",
        Frequency: "242",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Bullying: "4",
        year: "2014",
        Name: "Bullying",
        Timestamp: "1/1/14",
        Rank: "4",
        Frequency: "95",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "8",
        year: "2015",
        Name: "Bullying",
        Timestamp: "1/1/15",
        Rank: "8",
        Frequency: "90",
        "Rank Change": "-4",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "5",
        year: "2016",
        Name: "Bullying",
        Timestamp: "1/1/16",
        Rank: "5",
        Frequency: "144",
        "Rank Change": "3",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "10",
        year: "2017",
        Name: "Bullying",
        Timestamp: "1/1/17",
        Rank: "10",
        Frequency: "165",
        "Rank Change": "-5",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "6",
        year: "2018",
        Name: "Bullying",
        Timestamp: "1/1/18",
        Rank: "6",
        Frequency: "213",
        "Rank Change": "-4",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "9",
        year: "2019",
        Name: "Bullying",
        Timestamp: "1/1/19",
        Rank: "9",
        Frequency: "151",
        "Rank Change": "-3",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "10",
        year: "2020",
        Name: "Bullying",
        Timestamp: "1/1/20",
        Rank: "10",
        Frequency: "112",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Mother: "5",
        year: "2014",
        Name: "Mother",
        Timestamp: "1/1/14",
        Rank: "5",
        Frequency: "89",
        "Rank Change": "-",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "7",
        year: "2015",
        Name: "Mother",
        Timestamp: "1/1/15",
        Rank: "7",
        Frequency: "104",
        "Rank Change": "-2",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "6",
        year: "2016",
        Name: "Mother",
        Timestamp: "1/1/16",
        Rank: "6",
        Frequency: "141",
        "Rank Change": "1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "5",
        year: "2017",
        Name: "Mother",
        Timestamp: "1/1/17",
        Rank: "5",
        Frequency: "230",
        "Rank Change": "1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "4",
        year: "2018",
        Name: "Mother",
        Timestamp: "1/1/18",
        Rank: "4",
        Frequency: "241",
        "Rank Change": "1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "5",
        year: "2019",
        Name: "Mother",
        Timestamp: "1/1/19",
        Rank: "5",
        Frequency: "190",
        "Rank Change": "-1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "6",
        year: "2020",
        Name: "Mother",
        Timestamp: "1/1/20",
        Rank: "6",
        Frequency: "206",
        "Rank Change": "-1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Overdose: "6",
        year: "2014",
        Name: "Overdose",
        Timestamp: "1/1/14",
        Rank: "6",
        Frequency: "76",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "6",
        year: "2015",
        Name: "Overdose",
        Timestamp: "1/1/15",
        Rank: "6",
        Frequency: "114",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "7",
        year: "2016",
        Name: "Overdose",
        Timestamp: "1/1/16",
        Rank: "7",
        Frequency: "137",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "6",
        year: "2017",
        Name: "Overdose",
        Timestamp: "1/1/17",
        Rank: "6",
        Frequency: "227",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "7",
        year: "2018",
        Name: "Overdose",
        Timestamp: "1/1/18",
        Rank: "7",
        Frequency: "185",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "6",
        year: "2019",
        Name: "Overdose",
        Timestamp: "1/1/19",
        Rank: "6",
        Frequency: "190",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "5",
        year: "2020",
        Name: "Overdose",
        Timestamp: "1/1/20",
        Rank: "5",
        Frequency: "210",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Depression: "7",
        year: "2014",
        Name: "Depression",
        Timestamp: "1/1/14",
        Rank: "7",
        Frequency: "57",
        "Rank Change": "-",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "9",
        year: "2015",
        Name: "Depression",
        Timestamp: "1/1/15",
        Rank: "9",
        Frequency: "89",
        "Rank Change": "-2",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "9",
        year: "2016",
        Name: "Depression",
        Timestamp: "1/1/16",
        Rank: "9",
        Frequency: "125",
        "Rank Change": "0",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "7",
        year: "2017",
        Name: "Depression",
        Timestamp: "1/1/17",
        Rank: "7",
        Frequency: "181",
        "Rank Change": "2",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "8",
        year: "2018",
        Name: "Depression",
        Timestamp: "1/1/18",
        Rank: "8",
        Frequency: "168",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "7",
        year: "2019",
        Name: "Depression",
        Timestamp: "1/1/19",
        Rank: "7",
        Frequency: "172",
        "Rank Change": "1",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "7",
        year: "2020",
        Name: "Depression",
        Timestamp: "1/1/20",
        Rank: "8",
        Frequency: "206",
        "Rank Change": "0",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Vehicle: "8",
        year: "2014",
        Name: "Vehicle",
        Timestamp: "1/1/14",
        Rank: "8",
        Frequency: "55",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2015",
        Name: "Vehicle",
        Timestamp: "1/1/15",
        Rank: "3",
        Frequency: "171",
        "Rank Change": "5",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "4",
        year: "2016",
        Name: "Vehicle",
        Timestamp: "1/1/16",
        Rank: "4",
        Frequency: "209",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2017",
        Name: "Vehicle",
        Timestamp: "1/1/17",
        Rank: "3",
        Frequency: "304",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "5",
        year: "2018",
        Name: "Vehicle",
        Timestamp: "1/1/18",
        Rank: "5",
        Frequency: "236",
        "Rank Change": "-2",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2019",
        Name: "Vehicle",
        Timestamp: "1/1/19",
        Rank: "3",
        Frequency: "266",
        "Rank Change": "2",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2020",
        Name: "Vehicle",
        Timestamp: "1/1/20",
        Rank: "3",
        Frequency: "293",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Friends: "9",
        year: "2014",
        Name: "Friends",
        Timestamp: "1/1/14",
        Rank: "9",
        Frequency: "41",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "10",
        year: "2015",
        Name: "Friends",
        Timestamp: "1/1/15",
        Rank: "10",
        Frequency: "78",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "10",
        year: "2016",
        Name: "Friends",
        Timestamp: "1/1/16",
        Rank: "10",
        Frequency: "87",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "9",
        year: "2017",
        Name: "Friends",
        Timestamp: "1/1/17",
        Rank: "9",
        Frequency: "170",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "9",
        year: "2018",
        Name: "Friends",
        Timestamp: "1/1/18",
        Rank: "9",
        Frequency: "165",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "10",
        year: "2019",
        Name: "Friends",
        Timestamp: "1/1/19",
        Rank: "10",
        Frequency: "127",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "9",
        year: "2020",
        Name: "Friends",
        Timestamp: "1/1/20",
        Rank: "9",
        Frequency: "137",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Head: "10",
        year: "2014",
        Name: "Head",
        Timestamp: "1/1/14",
        Rank: "10",
        Frequency: "20",
        "Rank Change": "-",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "5",
        year: "2015",
        Name: "Head",
        Timestamp: "1/1/15",
        Rank: "5",
        Frequency: "119",
        "Rank Change": "5",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2016",
        Name: "Head",
        Timestamp: "1/1/16",
        Rank: "8",
        Frequency: "134",
        "Rank Change": "-3",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2017",
        Name: "Head",
        Timestamp: "1/1/17",
        Rank: "8",
        Frequency: "171",
        "Rank Change": "0",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "10",
        year: "2018",
        Name: "Head",
        Timestamp: "1/1/18",
        Rank: "10",
        Frequency: "141",
        "Rank Change": "-2",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2019",
        Name: "Head",
        Timestamp: "1/1/19",
        Rank: "8",
        Frequency: "152",
        "Rank Change": "2",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2020",
        Name: "Head",
        Timestamp: "1/1/20",
        Rank: "8",
        Frequency: "199",
        "Rank Change": "0",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      }
    ],
    dataKey: "_NOTUSED-bump-chart-data.json"
  },
  "markup-include1719606699638": {
    filters: [],
    filterBehavior: "Filter Change",
    openModal: !1,
    uid: "markup-include1719606699638",
    type: "markup-include",
    contentEditor: {
      inlineHTML: `<h3 style="font-size:18px; padding-left: 15px; padding-bottom: 10px"><strong>Greatest Positive Change In Rank</strong></h3>
<h4 style="font-size:16px; padding-left: 15px"><strong>Vehicle:</strong></h4>
<p style="font-size:16px; padding-left: 15px">Rank Changed From #8 to #3 from 2014 to 2020</p>
<p style="font-size:16px; padding-left: 15px">Largest Rank Change of +5 Took Place Between 2014 and 2015</p>`,
      markupVariables: [],
      showHeader: !0,
      srcUrl: "#example",
      title: "",
      useInlineHTML: !0
    },
    theme: "theme-blue",
    visual: {
      border: !0,
      accent: !1,
      background: !1,
      hideBackgroundColor: !1,
      borderColorTheme: !1
    },
    showEditorPanel: !0,
    visualizationType: "markup-include",
    editing: !1,
    data: {},
    version: "4.24.4"
  },
  "markup-include1719606700773": {
    filters: [],
    filterBehavior: "Filter Change",
    openModal: !1,
    uid: "markup-include1719606700773",
    type: "markup-include",
    contentEditor: {
      inlineHTML: `<h3 style="font-size:18px; padding-left: 15px; ; padding-bottom: 10px"><strong>Greatest Negative Change In Rank</strong></h3>
<h4 style="font-size:16px; padding-left: 15px"><strong>Bullying:</strong></h4>
<p style="font-size:16px; padding-left: 15px">Rank Changed From #4 to #10 from 2014 to 2020</p>
<p style="font-size:16px; padding-left: 15px">Largest Rank Change of -5 Took Place Between 2016 and 2017</p>`,
      markupVariables: [],
      showHeader: !0,
      srcUrl: "#example",
      title: "",
      useInlineHTML: !0
    },
    theme: "theme-blue",
    visual: {
      border: !0,
      accent: !1,
      background: !1,
      hideBackgroundColor: !1,
      borderColorTheme: !1
    },
    showEditorPanel: !0,
    visualizationType: "markup-include",
    editing: !1,
    data: {},
    version: "4.24.4"
  }
}, _o = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Go = {
  "_NOTUSED-bump-chart-data.json": {
    data: [
      {
        Sibling: "1",
        year: "2014",
        Name: "Sibling",
        Timestamp: "1/1/14",
        Rank: "1",
        Frequency: "149",
        "Rank Change": "-",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2015",
        Name: "Sibling",
        Timestamp: "1/1/15",
        Rank: "2",
        Frequency: "172",
        "Rank Change": "-1",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2016",
        Name: "Sibling",
        Timestamp: "1/1/16",
        Rank: "2",
        Frequency: "230",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2017",
        Name: "Sibling",
        Timestamp: "1/1/17",
        Rank: "2",
        Frequency: "379",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2018",
        Name: "Sibling",
        Timestamp: "1/1/18",
        Rank: "2",
        Frequency: "357",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2019",
        Name: "Sibling",
        Timestamp: "1/1/19",
        Rank: "2",
        Frequency: "358",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Sibling: "2",
        year: "2020",
        Name: "Sibling",
        Timestamp: "1/1/20",
        Rank: "2",
        Frequency: "458",
        "Rank Change": "0",
        "Representative Sentence": "Victims Sister Informed Police That She Had Found Him And Called Police."
      },
      {
        Neck: "2",
        year: "2014",
        Name: "Neck",
        Timestamp: "1/1/14",
        Rank: "2",
        Frequency: "131",
        "Rank Change": "-",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2015",
        Name: "Neck",
        Timestamp: "1/1/15",
        Rank: "1",
        Frequency: "316",
        "Rank Change": "1",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2016",
        Name: "Neck",
        Timestamp: "1/1/16",
        Rank: "1",
        Frequency: "437",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2017",
        Name: "Neck",
        Timestamp: "1/1/17",
        Rank: "1",
        Frequency: "621",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2018",
        Name: "Neck",
        Timestamp: "1/1/18",
        Rank: "1",
        Frequency: "526",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2019",
        Name: "Neck",
        Timestamp: "1/1/19",
        Rank: "1",
        Frequency: "555",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Neck: "1",
        year: "2020",
        Name: "Neck",
        Timestamp: "1/1/20",
        Rank: "1",
        Frequency: "527",
        "Rank Change": "0",
        "Representative Sentence": "Rope Was Wrapped Around Victims Neck."
      },
      {
        Girlfriend: "3",
        year: "2014",
        Name: "Girlfriend",
        Timestamp: "1/1/14",
        Rank: "3",
        Frequency: "101",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2015",
        Name: "Girlfriend",
        Timestamp: "1/1/15",
        Rank: "4",
        Frequency: "155",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "3",
        year: "2016",
        Name: "Girlfriend",
        Timestamp: "1/1/16",
        Rank: "3",
        Frequency: "219",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2017",
        Name: "Girlfriend",
        Timestamp: "1/1/17",
        Rank: "4",
        Frequency: "260",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "3",
        year: "2018",
        Name: "Girlfriend",
        Timestamp: "1/1/18",
        Rank: "3",
        Frequency: "294",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2019",
        Name: "Girlfriend",
        Timestamp: "1/1/19",
        Rank: "4",
        Frequency: "262",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Girlfriend: "4",
        year: "2020",
        Name: "Girlfriend",
        Timestamp: "1/1/20",
        Rank: "4",
        Frequency: "242",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Relationship Problems With Girlfriend Whom He Worked With."
      },
      {
        Bullying: "4",
        year: "2014",
        Name: "Bullying",
        Timestamp: "1/1/14",
        Rank: "4",
        Frequency: "95",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "8",
        year: "2015",
        Name: "Bullying",
        Timestamp: "1/1/15",
        Rank: "8",
        Frequency: "90",
        "Rank Change": "-4",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "5",
        year: "2016",
        Name: "Bullying",
        Timestamp: "1/1/16",
        Rank: "5",
        Frequency: "144",
        "Rank Change": "3",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "10",
        year: "2017",
        Name: "Bullying",
        Timestamp: "1/1/17",
        Rank: "10",
        Frequency: "165",
        "Rank Change": "-5",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "6",
        year: "2018",
        Name: "Bullying",
        Timestamp: "1/1/18",
        Rank: "6",
        Frequency: "213",
        "Rank Change": "-4",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "9",
        year: "2019",
        Name: "Bullying",
        Timestamp: "1/1/19",
        Rank: "9",
        Frequency: "151",
        "Rank Change": "-3",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Bullying: "10",
        year: "2020",
        Name: "Bullying",
        Timestamp: "1/1/20",
        Rank: "10",
        Frequency: "112",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Been Bullied And Had Been Taunted While At School."
      },
      {
        Mother: "5",
        year: "2014",
        Name: "Mother",
        Timestamp: "1/1/14",
        Rank: "5",
        Frequency: "89",
        "Rank Change": "-",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "7",
        year: "2015",
        Name: "Mother",
        Timestamp: "1/1/15",
        Rank: "7",
        Frequency: "104",
        "Rank Change": "-2",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "6",
        year: "2016",
        Name: "Mother",
        Timestamp: "1/1/16",
        Rank: "6",
        Frequency: "141",
        "Rank Change": "1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "5",
        year: "2017",
        Name: "Mother",
        Timestamp: "1/1/17",
        Rank: "5",
        Frequency: "230",
        "Rank Change": "1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "4",
        year: "2018",
        Name: "Mother",
        Timestamp: "1/1/18",
        Rank: "4",
        Frequency: "241",
        "Rank Change": "1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "5",
        year: "2019",
        Name: "Mother",
        Timestamp: "1/1/19",
        Rank: "5",
        Frequency: "190",
        "Rank Change": "-1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Mother: "6",
        year: "2020",
        Name: "Mother",
        Timestamp: "1/1/20",
        Rank: "6",
        Frequency: "206",
        "Rank Change": "-1",
        "Representative Sentence": "Mother Mentioned She Has Seen Some Sadness And Depression From Victim."
      },
      {
        Overdose: "6",
        year: "2014",
        Name: "Overdose",
        Timestamp: "1/1/14",
        Rank: "6",
        Frequency: "76",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "6",
        year: "2015",
        Name: "Overdose",
        Timestamp: "1/1/15",
        Rank: "6",
        Frequency: "114",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "7",
        year: "2016",
        Name: "Overdose",
        Timestamp: "1/1/16",
        Rank: "7",
        Frequency: "137",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "6",
        year: "2017",
        Name: "Overdose",
        Timestamp: "1/1/17",
        Rank: "6",
        Frequency: "227",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "7",
        year: "2018",
        Name: "Overdose",
        Timestamp: "1/1/18",
        Rank: "7",
        Frequency: "185",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "6",
        year: "2019",
        Name: "Overdose",
        Timestamp: "1/1/19",
        Rank: "6",
        Frequency: "190",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Overdose: "5",
        year: "2020",
        Name: "Overdose",
        Timestamp: "1/1/20",
        Rank: "5",
        Frequency: "210",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Attempted To Overdose On Prescription Drugs In The Past."
      },
      {
        Depression: "7",
        year: "2014",
        Name: "Depression",
        Timestamp: "1/1/14",
        Rank: "7",
        Frequency: "57",
        "Rank Change": "-",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "9",
        year: "2015",
        Name: "Depression",
        Timestamp: "1/1/15",
        Rank: "9",
        Frequency: "89",
        "Rank Change": "-2",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "9",
        year: "2016",
        Name: "Depression",
        Timestamp: "1/1/16",
        Rank: "9",
        Frequency: "125",
        "Rank Change": "0",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "7",
        year: "2017",
        Name: "Depression",
        Timestamp: "1/1/17",
        Rank: "7",
        Frequency: "181",
        "Rank Change": "2",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "8",
        year: "2018",
        Name: "Depression",
        Timestamp: "1/1/18",
        Rank: "8",
        Frequency: "168",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "7",
        year: "2019",
        Name: "Depression",
        Timestamp: "1/1/19",
        Rank: "7",
        Frequency: "172",
        "Rank Change": "1",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Depression: "7",
        year: "2020",
        Name: "Depression",
        Timestamp: "1/1/20",
        Rank: "8",
        Frequency: "206",
        "Rank Change": "0",
        "Representative Sentence": "Victim Has History Of Depression."
      },
      {
        Vehicle: "8",
        year: "2014",
        Name: "Vehicle",
        Timestamp: "1/1/14",
        Rank: "8",
        Frequency: "55",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2015",
        Name: "Vehicle",
        Timestamp: "1/1/15",
        Rank: "3",
        Frequency: "171",
        "Rank Change": "5",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "4",
        year: "2016",
        Name: "Vehicle",
        Timestamp: "1/1/16",
        Rank: "4",
        Frequency: "209",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2017",
        Name: "Vehicle",
        Timestamp: "1/1/17",
        Rank: "3",
        Frequency: "304",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "5",
        year: "2018",
        Name: "Vehicle",
        Timestamp: "1/1/18",
        Rank: "5",
        Frequency: "236",
        "Rank Change": "-2",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2019",
        Name: "Vehicle",
        Timestamp: "1/1/19",
        Rank: "3",
        Frequency: "266",
        "Rank Change": "2",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Vehicle: "3",
        year: "2020",
        Name: "Vehicle",
        Timestamp: "1/1/20",
        Rank: "3",
        Frequency: "293",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Drove Very Quickly Into Power Pole."
      },
      {
        Friends: "9",
        year: "2014",
        Name: "Friends",
        Timestamp: "1/1/14",
        Rank: "9",
        Frequency: "41",
        "Rank Change": "-",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "10",
        year: "2015",
        Name: "Friends",
        Timestamp: "1/1/15",
        Rank: "10",
        Frequency: "78",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "10",
        year: "2016",
        Name: "Friends",
        Timestamp: "1/1/16",
        Rank: "10",
        Frequency: "87",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "9",
        year: "2017",
        Name: "Friends",
        Timestamp: "1/1/17",
        Rank: "9",
        Frequency: "170",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "9",
        year: "2018",
        Name: "Friends",
        Timestamp: "1/1/18",
        Rank: "9",
        Frequency: "165",
        "Rank Change": "0",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "10",
        year: "2019",
        Name: "Friends",
        Timestamp: "1/1/19",
        Rank: "10",
        Frequency: "127",
        "Rank Change": "-1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Friends: "9",
        year: "2020",
        Name: "Friends",
        Timestamp: "1/1/20",
        Rank: "9",
        Frequency: "137",
        "Rank Change": "1",
        "Representative Sentence": "Victim Had Been Home All Night With Two Friends."
      },
      {
        Head: "10",
        year: "2014",
        Name: "Head",
        Timestamp: "1/1/14",
        Rank: "10",
        Frequency: "20",
        "Rank Change": "-",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "5",
        year: "2015",
        Name: "Head",
        Timestamp: "1/1/15",
        Rank: "5",
        Frequency: "119",
        "Rank Change": "5",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2016",
        Name: "Head",
        Timestamp: "1/1/16",
        Rank: "8",
        Frequency: "134",
        "Rank Change": "-3",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2017",
        Name: "Head",
        Timestamp: "1/1/17",
        Rank: "8",
        Frequency: "171",
        "Rank Change": "0",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "10",
        year: "2018",
        Name: "Head",
        Timestamp: "1/1/18",
        Rank: "10",
        Frequency: "141",
        "Rank Change": "-2",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2019",
        Name: "Head",
        Timestamp: "1/1/19",
        Rank: "8",
        Frequency: "152",
        "Rank Change": "2",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      },
      {
        Head: "8",
        year: "2020",
        Name: "Head",
        Timestamp: "1/1/20",
        Rank: "8",
        Frequency: "199",
        "Rank Change": "0",
        "Representative Sentence": "Wounds Were Found At The Left Side Of Victims Head."
      }
    ],
    dataFileSize: 18482,
    dataFileName: "_NOTUSED-bump-chart-data.json",
    dataFileSourceType: "file",
    dataFileFormat: "JSON",
    preview: !0
  }
}, Ko = "dashboard", $o = "4.24.4", jo = {}, Jo = 1719606681758, Qo = {
  dashboard: Bo,
  rows: zo,
  visualizations: qo,
  table: _o,
  datasets: Go,
  type: Ko,
  version: $o,
  runtime: jo,
  uuid: Jo
}, Zo = {
  theme: "theme-blue",
  sharedFilters: [
    {
      key: "Year",
      showDropdown: !0,
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/methodology?$select=distinct year",
        valueSelector: "year"
      },
      usedBy: [
        "none"
      ],
      tier: 1
    },
    {
      key: "Methodology",
      showDropdown: !1,
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/methodology?$select=distinct methodology",
        valueSelector: "methodology"
      },
      usedBy: [
        "chart1723488349579"
      ],
      parents: [
        "Year"
      ],
      tier: 2
    }
  ]
}, Xo = [
  {
    columns: [
      {
        width: 12,
        widget: "dashboardFilters1723488344936"
      },
      {},
      {}
    ]
  },
  {
    columns: [
      {
        width: 12,
        widget: "dashboardFilters1723488344937"
      },
      {},
      {}
    ]
  },
  {
    columns: [
      {
        width: 12,
        widget: "chart1723488349579"
      }
    ]
  }
], en = {
  dashboardFilters1723488344936: {
    filters: [],
    filterBehavior: "Apply Button",
    openModal: !0,
    uid: "dashboardFilters1723488344936",
    type: "dashboardFilters",
    sharedFilterIndexes: [
      0
    ],
    visualizationType: "dashboardFilters"
  },
  dashboardFilters1723488344937: {
    filters: [],
    filterBehavior: "Filter Change",
    openModal: !0,
    autoLoad: !0,
    uid: "dashboardFilters1723488344937",
    type: "dashboardFilters",
    sharedFilterIndexes: [
      1
    ],
    visualizationType: "dashboardFilters"
  },
  chart1723488349579: {
    annotations: [],
    type: "chart",
    debugSvg: !1,
    chartMessage: {
      noData: "No Data Available"
    },
    title: "",
    showTitle: !0,
    showDownloadMediaButton: !1,
    theme: "theme-blue",
    animate: !1,
    fontSize: "medium",
    lineDatapointStyle: "hover",
    lineDatapointColor: "Same as Line",
    barHasBorder: "false",
    isLollipopChart: !1,
    lollipopShape: "circle",
    lollipopColorStyle: "two-tone",
    visualizationSubType: "regular",
    barStyle: "",
    roundingStyle: "standard",
    tipRounding: "top",
    isResponsiveTicks: !1,
    general: {
      annotationDropdownText: "Annotations",
      showDownloadButton: !1,
      showMissingDataLabel: !0,
      showSuppressedSymbol: !0,
      showZeroValueDataLabel: !0
    },
    padding: {
      left: 5,
      right: 5
    },
    preliminaryData: [],
    yAxis: {
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
      showMissingDataLine: !0
    },
    boxplot: {
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
    },
    topAxis: {
      hasLine: !1
    },
    isLegendValue: !1,
    barThickness: 0.35,
    barHeight: 25,
    barSpace: 15,
    heights: {
      vertical: 300,
      horizontal: 750
    },
    xAxis: {
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
      maxTickRotation: 0,
      dataKey: "state",
      tickWidthMax: 96
    },
    table: {
      label: "Data Table",
      expanded: !0,
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
      show: !1
    },
    orientation: "vertical",
    color: "pinkpurple",
    columns: {},
    legend: {
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
      lineMode: !1,
      verticalSorted: !1,
      highlightOnHover: !1,
      hideSuppressedLabels: !1,
      seriesHighlight: []
    },
    brush: {
      height: 25,
      active: !1
    },
    exclusions: {
      active: !1,
      keys: []
    },
    palette: "qualitative-bold",
    isPaletteReversed: !1,
    twoColor: {
      palette: "monochrome-1",
      isPaletteReversed: !1
    },
    labels: !1,
    dataFormat: {
      commas: !1,
      prefix: "",
      suffix: "",
      abbreviated: !1,
      bottomSuffix: "",
      bottomPrefix: "",
      bottomAbbreviated: !1
    },
    confidenceKeys: {},
    visual: {
      border: !0,
      accent: !0,
      background: !0,
      verticalHoverLine: !1,
      horizontalHoverLine: !1
    },
    useLogScale: !1,
    filterBehavior: "Filter Change",
    highlightedBarValues: [],
    series: [
      {
        dataKey: "value",
        type: "Bar",
        axis: "Left",
        tooltip: !0
      }
    ],
    tooltips: {
      opacity: 90,
      singleSeries: !1,
      dateDisplayFormat: ""
    },
    forestPlot: {
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
    },
    area: {
      isStacked: !1
    },
    sankey: {
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
    },
    filters: [],
    openModal: !0,
    uid: "chart1723488349579",
    visualizationType: "Bar",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    dataKey: "hidden-methodology",
    version: "4.24.9",
    dynamicMarginTop: 0
  }
}, an = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, tn = {
  "hidden-methodology": {
    dataUrl: "http://test.gov/methodology"
  }
}, on = "dashboard", nn = {}, rn = "4.24.9", sn = 1723488346870, cn = {
  dashboard: Zo,
  rows: Xo,
  visualizations: en,
  table: an,
  datasets: tn,
  type: on,
  runtime: nn,
  version: rn,
  uuid: sn
};
function E(a, e) {
  const t = [
    {
      year: 1999,
      methodology: "a",
      state: "alabama",
      value: "1"
    },
    {
      year: 1999,
      methodology: "a",
      state: "alaska",
      value: "2"
    },
    {
      year: 1999,
      methodology: "a",
      state: "arizona",
      value: "3"
    },
    {
      year: 2012,
      methodology: "b",
      state: "new york",
      value: "5"
    },
    {
      year: 2012,
      methodology: "b",
      state: "new jersey",
      value: "1"
    },
    {
      year: 2012,
      methodology: "b",
      state: "new mexico",
      value: "2"
    },
    {
      year: 2e3,
      methodology: "a",
      state: "alabama",
      value: "4"
    },
    {
      year: 2e3,
      methodology: "a",
      state: "alaska",
      value: "5"
    },
    {
      year: 2e3,
      methodology: "a",
      state: "arizona",
      value: "6"
    },
    {
      year: 2013,
      methodology: "b",
      state: "new york",
      value: "6"
    },
    {
      year: 2013,
      methodology: "b",
      state: "new jersey",
      value: "7"
    },
    {
      year: 2013,
      methodology: "b",
      state: "new mexico",
      value: "8"
    }
  ], o = a.split(" "), l = o[0] === "distinct", n = o.length === 2 ? o[1] : o[0], r = t.filter((s) => {
    if (!e)
      return !0;
    const [da, pa] = e;
    return s[da] === pa;
  }).map((s) => n === "*" ? s : { [n]: s[n] });
  return l ? c.uniqBy(r, n) : r;
}
const ln = {
  theme: "theme-blue",
  sharedFilters: [],
  description: "Dash Description",
  title: "Dashboard Name"
}, dn = [
  {
    columns: [
      {
        width: 6,
        widget: "data-bite1722537849962"
      },
      {
        width: 6,
        widget: "data-bite1728059122204"
      }
    ],
    dataDescription: {
      horizontal: !1,
      series: !0,
      singleRow: !0
    },
    dataKey: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
], pn = {
  "data-bite1722537849962": {
    type: "data-bite",
    dataBite: "",
    dataFunction: "Sum",
    dataColumn: "specimens tested",
    bitePosition: "Left",
    biteFontSize: 24,
    fontSize: "medium",
    biteBody: "specimens tested that would have detected influenza A(H5) or other novel influenza viruses",
    imageData: {
      display: "none",
      url: "",
      alt: "",
      options: []
    },
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: "+"
    },
    biteStyle: "title",
    filters: [],
    subtext: "",
    title: "Specimens tested",
    theme: "theme-blue",
    shadow: !1,
    visual: {
      border: !1,
      accent: !1,
      background: !1,
      hideBackgroundColor: !1,
      borderColorTheme: !1
    },
    general: {
      isCompactStyle: !1
    },
    filterBehavior: "Filter Change",
    openModal: !0,
    uid: "data-bite1722537849962",
    visualizationType: "data-bite",
    dataDescription: {
      horizontal: !1,
      series: !0,
      singleRow: !0
    },
    version: "4.24.10",
    dataKey: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  },
  "data-bite1728059122204": {
    type: "data-bite",
    dataBite: "",
    dataFunction: "Sum",
    dataColumn: "Human cases",
    bitePosition: "Left",
    biteFontSize: 24,
    fontSize: "medium",
    biteBody: "case detected through national flu surveillance",
    imageData: {
      display: "none",
      url: "",
      alt: "",
      options: []
    },
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: ""
    },
    biteStyle: "title",
    filters: [],
    subtext: "",
    title: "Human cases",
    theme: "theme-blue",
    shadow: !1,
    visual: {
      border: !1,
      accent: !1,
      background: !1,
      hideBackgroundColor: !1,
      borderColorTheme: !1
    },
    general: {
      isCompactStyle: !1
    },
    filterBehavior: "Filter Change",
    openModal: !0,
    uid: "data-bite1728059122204",
    visualizationType: "data-bite",
    dataDescription: {
      horizontal: !1,
      series: !0,
      singleRow: !0
    },
    version: "4.24.10",
    dataKey: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
}, mn = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, un = {
  "/bird-flu/modules/situation-summary/national-flu-surveillance.csv": {
    dataFileSize: 39,
    dataFileName: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv",
    dataFileSourceType: "url",
    dataFileFormat: "OCTET-STREAM",
    preview: !0,
    dataUrl: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
}, Ln = "dashboard", Tn = "4.24.10", hn = 1722537847428, yn = {
  dashboard: ln,
  rows: dn,
  visualizations: pn,
  table: mn,
  datasets: un,
  type: Ln,
  version: Tn,
  uuid: hn
}, An = {
  theme: "theme-blue",
  sharedFilters: [],
  description: "Dash Description",
  title: ""
}, gn = [
  {
    columns: [
      {
        width: 6,
        widget: "data-bite1722537849962"
      },
      {
        width: 6,
        widget: "data-bite1728059122204"
      }
    ],
    dataDescription: {
      horizontal: !1,
      series: !0,
      singleRow: !0
    },
    dataKey: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
], wn = {
  "data-bite1722537849962": {
    type: "data-bite",
    dataBite: "",
    dataFunction: "Sum",
    dataColumn: "specimens tested",
    bitePosition: "Left",
    biteFontSize: 24,
    fontSize: "medium",
    biteBody: "specimens tested that would have detected influenza A(H5) or other novel influenza viruses",
    imageData: {
      display: "none",
      url: "",
      alt: "",
      options: []
    },
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: "+"
    },
    biteStyle: "title",
    filters: [],
    subtext: "",
    title: "Specimens tested",
    theme: "theme-blue",
    shadow: !1,
    visual: {
      border: !1,
      accent: !1,
      background: !1,
      hideBackgroundColor: !1,
      borderColorTheme: !1
    },
    general: {
      isCompactStyle: !1
    },
    filterBehavior: "Filter Change",
    openModal: !0,
    uid: "data-bite1722537849962",
    visualizationType: "data-bite",
    dataDescription: {
      horizontal: !1,
      series: !0,
      singleRow: !0
    },
    version: "4.24.10",
    dataKey: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  },
  "data-bite1728059122204": {
    type: "data-bite",
    dataBite: "",
    dataFunction: "Sum",
    dataColumn: "Human cases",
    bitePosition: "Left",
    biteFontSize: 24,
    fontSize: "medium",
    biteBody: "case detected through national flu surveillance",
    imageData: {
      display: "none",
      url: "",
      alt: "",
      options: []
    },
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: ""
    },
    biteStyle: "title",
    filters: [],
    subtext: "",
    title: "Human cases",
    theme: "theme-blue",
    shadow: !1,
    visual: {
      border: !1,
      accent: !1,
      background: !1,
      hideBackgroundColor: !1,
      borderColorTheme: !1
    },
    general: {
      isCompactStyle: !1
    },
    filterBehavior: "Filter Change",
    openModal: !0,
    uid: "data-bite1728059122204",
    visualizationType: "data-bite",
    dataDescription: {
      horizontal: !1,
      series: !0,
      singleRow: !0
    },
    version: "4.24.10",
    dataKey: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
}, Rn = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Sn = {
  "/bird-flu/modules/situation-summary/national-flu-surveillance.csv": {
    dataFileSize: 39,
    dataFileName: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv",
    dataFileSourceType: "url",
    dataFileFormat: "OCTET-STREAM",
    preview: !0,
    dataUrl: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
}, Yn = "dashboard", fn = "4.24.10", vn = 1722537847428, bn = {
  dashboard: An,
  rows: gn,
  visualizations: wn,
  table: Rn,
  datasets: Sn,
  type: Yn,
  version: fn,
  uuid: vn
}, Fn = {
  theme: "theme-blue",
  sharedFilters: [],
  description: "",
  title: "Title no description"
}, kn = [
  {
    columns: [
      {
        width: 6,
        widget: "data-bite1722537849962"
      },
      {
        width: 6,
        widget: "data-bite1728059122204"
      }
    ],
    dataDescription: {
      horizontal: !1,
      series: !0,
      singleRow: !0
    },
    dataKey: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
], Cn = {
  "data-bite1722537849962": {
    type: "data-bite",
    dataBite: "",
    dataFunction: "Sum",
    dataColumn: "specimens tested",
    bitePosition: "Left",
    biteFontSize: 24,
    fontSize: "medium",
    biteBody: "specimens tested that would have detected influenza A(H5) or other novel influenza viruses",
    imageData: {
      display: "none",
      url: "",
      alt: "",
      options: []
    },
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: "+"
    },
    biteStyle: "title",
    filters: [],
    subtext: "",
    title: "Specimens tested",
    theme: "theme-blue",
    shadow: !1,
    visual: {
      border: !1,
      accent: !1,
      background: !1,
      hideBackgroundColor: !1,
      borderColorTheme: !1
    },
    general: {
      isCompactStyle: !1
    },
    filterBehavior: "Filter Change",
    openModal: !0,
    uid: "data-bite1722537849962",
    visualizationType: "data-bite",
    dataDescription: {
      horizontal: !1,
      series: !0,
      singleRow: !0
    },
    version: "4.24.10",
    dataKey: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  },
  "data-bite1728059122204": {
    type: "data-bite",
    dataBite: "",
    dataFunction: "Sum",
    dataColumn: "Human cases",
    bitePosition: "Left",
    biteFontSize: 24,
    fontSize: "medium",
    biteBody: "case detected through national flu surveillance",
    imageData: {
      display: "none",
      url: "",
      alt: "",
      options: []
    },
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: ""
    },
    biteStyle: "title",
    filters: [],
    subtext: "",
    title: "Human cases",
    theme: "theme-blue",
    shadow: !1,
    visual: {
      border: !1,
      accent: !1,
      background: !1,
      hideBackgroundColor: !1,
      borderColorTheme: !1
    },
    general: {
      isCompactStyle: !1
    },
    filterBehavior: "Filter Change",
    openModal: !0,
    uid: "data-bite1728059122204",
    visualizationType: "data-bite",
    dataDescription: {
      horizontal: !1,
      series: !0,
      singleRow: !0
    },
    version: "4.24.10",
    dataKey: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
}, Mn = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Nn = {
  "/bird-flu/modules/situation-summary/national-flu-surveillance.csv": {
    dataFileSize: 39,
    dataFileName: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv",
    dataFileSourceType: "url",
    dataFileFormat: "OCTET-STREAM",
    preview: !0,
    dataUrl: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
}, Dn = "dashboard", Hn = "4.24.10", Vn = 1722537847428, In = {
  dashboard: Fn,
  rows: kn,
  visualizations: Cn,
  table: Mn,
  datasets: Nn,
  type: Dn,
  version: Hn,
  uuid: Vn
}, Un = {
  theme: "theme-blue",
  sharedFilters: [],
  description: "",
  title: ""
}, Pn = [
  {
    columns: [
      {
        width: 6,
        widget: "data-bite1722537849962"
      },
      {
        width: 6,
        widget: "data-bite1728059122204"
      }
    ],
    dataDescription: {
      horizontal: !1,
      series: !0,
      singleRow: !0
    },
    dataKey: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
], En = {
  "data-bite1722537849962": {
    type: "data-bite",
    dataBite: "",
    dataFunction: "Sum",
    dataColumn: "specimens tested",
    bitePosition: "Left",
    biteFontSize: 24,
    fontSize: "medium",
    biteBody: "specimens tested that would have detected influenza A(H5) or other novel influenza viruses",
    imageData: {
      display: "none",
      url: "",
      alt: "",
      options: []
    },
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: "+"
    },
    biteStyle: "title",
    filters: [],
    subtext: "",
    title: "Specimens tested",
    theme: "theme-blue",
    shadow: !1,
    visual: {
      border: !1,
      accent: !1,
      background: !1,
      hideBackgroundColor: !1,
      borderColorTheme: !1
    },
    general: {
      isCompactStyle: !1
    },
    filterBehavior: "Filter Change",
    openModal: !0,
    uid: "data-bite1722537849962",
    visualizationType: "data-bite",
    dataDescription: {
      horizontal: !1,
      series: !0,
      singleRow: !0
    },
    version: "4.24.10",
    dataKey: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  },
  "data-bite1728059122204": {
    type: "data-bite",
    dataBite: "",
    dataFunction: "Sum",
    dataColumn: "Human cases",
    bitePosition: "Left",
    biteFontSize: 24,
    fontSize: "medium",
    biteBody: "case detected through national flu surveillance",
    imageData: {
      display: "none",
      url: "",
      alt: "",
      options: []
    },
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: ""
    },
    biteStyle: "title",
    filters: [],
    subtext: "",
    title: "Human cases",
    theme: "theme-blue",
    shadow: !1,
    visual: {
      border: !1,
      accent: !1,
      background: !1,
      hideBackgroundColor: !1,
      borderColorTheme: !1
    },
    general: {
      isCompactStyle: !1
    },
    filterBehavior: "Filter Change",
    openModal: !0,
    uid: "data-bite1728059122204",
    visualizationType: "data-bite",
    dataDescription: {
      horizontal: !1,
      series: !0,
      singleRow: !0
    },
    version: "4.24.10",
    dataKey: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
}, xn = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Wn = {
  "/bird-flu/modules/situation-summary/national-flu-surveillance.csv": {
    dataFileSize: 39,
    dataFileName: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv",
    dataFileSourceType: "url",
    dataFileFormat: "OCTET-STREAM",
    preview: !0,
    dataUrl: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
}, On = "dashboard", Bn = "4.24.10", zn = 1722537847428, qn = {
  dashboard: Un,
  rows: Pn,
  visualizations: En,
  table: xn,
  datasets: Wn,
  type: On,
  version: Bn,
  uuid: zn
}, _n = {
  theme: "theme-blue",
  title: "Amount Filtered by Location and Type ",
  sharedFilters: [
    {
      values: [
        "Alaska",
        "Alabama",
        "Arkansas",
        "American Samoa",
        "Arizona"
      ],
      columnName: "Location",
      showDropdown: !0,
      usedBy: [
        "data-bite1628875468150",
        "chart1628875631849",
        "data-bite1628876561387",
        "data-bite1628877031319"
      ],
      tier: 1,
      type: "datafilter",
      order: "asc",
      orderedValues: [
        "American Samoa",
        "Alaska",
        "Alabama",
        "Arizona",
        "Arkansas"
      ]
    },
    {
      values: [
        "Federal",
        "Local",
        "State"
      ],
      columnName: "Type",
      showDropdown: !0,
      usedBy: [
        "data-bite1628875468150",
        "chart1628875631849",
        "data-bite1628876561387",
        "data-bite1628877031319"
      ],
      tier: 1
    }
  ]
}, Gn = [
  {
    columns: [
      {
        width: 12,
        widget: "legacySharedFilters"
      }
    ]
  },
  {
    columns: [
      {
        width: 6,
        widget: "data-bite1628875468150"
      },
      {
        width: 6,
        widget: "chart1628875631849"
      },
      {
        width: null
      }
    ]
  },
  {
    columns: [
      {
        width: 6,
        widget: "data-bite1628877031319"
      },
      {
        width: 6,
        widget: "data-bite1628876561387"
      },
      {
        width: null
      }
    ]
  }
], Kn = {
  "data-bite1628875468150": {
    type: "data-bite",
    dataBite: "",
    dataFunction: "Mean (Average)",
    dataColumn: "Amount",
    bitePosition: "Left",
    biteFontSize: 24,
    fontSize: "medium",
    biteBody: `<span style="font-size: 20px;">Average Amount 2019-2021</span> <br>Reflects the average of the dashboard level filter selections within the timeframe available in the data.  In this case 2019-2021. 
 This number is calculated within the Data Bite module.
`,
    imageData: {
      display: "none",
      url: "",
      alt: "",
      options: []
    },
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: ""
    },
    biteStyle: "graphic",
    filters: [],
    subtext: "Citation for Source ",
    title: "",
    theme: "theme-orange",
    shadow: !0,
    visual: {
      border: !1,
      accent: !1,
      background: !1,
      hideBackgroundColor: !1,
      borderColorTheme: !1
    },
    general: {
      isCompactStyle: !1
    },
    imageUrl: "",
    prefix: "",
    suffix: "",
    uid: "data-bite1628875468150",
    visualizationType: "data-bite",
    dataKey: "dashboard_aggregate_example_no_add_fullname.csv",
    version: "4.25.1",
    migrations: {
      addColorMigration: !0
    }
  },
  chart1628875631849: {
    type: "chart",
    title: "",
    theme: "theme-blue",
    fontSize: "large",
    height: "200",
    padding: {
      left: 5,
      right: 5
    },
    yAxis: {
      size: "80",
      gridLines: !1,
      label: "Amount",
      numTicks: "4"
    },
    barThickness: 0.35,
    xAxis: {
      size: "0",
      tickRotation: 0,
      dataKey: "Year",
      label: ""
    },
    table: {
      label: "Data Table",
      expanded: !1,
      show: !1
    },
    legend: {
      behavior: "isolate",
      position: "right",
      hide: !0
    },
    palette: "qualitative-bold",
    labels: !0,
    dataFormat: {},
    confidenceKeys: {},
    uid: "chart1628875631849",
    visualizationType: "Bar",
    series: [
      {
        dataKey: "Amount",
        type: "Bar"
      }
    ],
    dataKey: "dashboard_aggregate_example_no_add_fullname.csv"
  },
  "data-bite1628876561387": {
    type: "data-bite",
    dataBite: "",
    dataFunction: "Max",
    dataColumn: "Amount",
    bitePosition: "Right",
    biteFontSize: "58",
    fontSize: "medium",
    imageUrl: "",
    biteBody: `<span style="font-size: 24px;"> Peak Amount</span> <br>Reflects the maximum point of data within the dashboard level filter selections within the timeframe set in the data.  In this case 2019-2021. 
This number is calculated within the Data Bite module.
`,
    prefix: "",
    suffix: "",
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: ""
    },
    biteStyle: "title",
    filters: [],
    subtext: "Source",
    title: "",
    theme: "theme-blue",
    shadow: !0,
    uid: "data-bite1628876561387",
    visualizationType: "data-bite",
    dataKey: "dashboard_aggregate_example_no_add_fullname.csv"
  },
  "data-bite1628877031319": {
    type: "data-bite",
    dataBite: "",
    dataFunction: "Sum",
    dataColumn: "Amount",
    bitePosition: "Right",
    biteFontSize: "58",
    fontSize: "medium",
    imageUrl: "",
    biteBody: `<span style="font-size: 24px;">State Total</span> <br>Reflects the Sum total of the dashboard level filter selections within the timeframe set in the data.  In this case 2019-2021. 
 This number is calculated within the Data Bite module.
`,
    prefix: "",
    suffix: "",
    dataFormat: {
      roundToPlace: 0,
      commas: !0,
      prefix: "",
      suffix: ""
    },
    biteStyle: "title",
    filters: [
      {
        id: 1738001923264
      }
    ],
    subtext: "Source ",
    title: "",
    theme: "theme-amber",
    shadow: !0,
    uid: "data-bite1628877031319",
    visualizationType: "data-bite",
    dataKey: "dashboard_aggregate_example_no_add_fullname.csv"
  },
  legacySharedFilters: {
    type: "dashboardFilters",
    visualizationType: "dashboardFilters",
    sharedFilterIndexes: [
      0,
      1
    ],
    filterBehavior: "Filter Change",
    uid: "legacySharedFilters"
  }
}, $n = {
  label: "Data Table",
  show: !0
}, jn = [], Jn = "", Qn = "", Zn = "dashboard", Xn = 1628875999137, ei = {}, ai = {
  "dashboard_aggregate_example_no_add_fullname.csv": {
    data: [
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Federal",
        Amount: "1377"
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Local",
        Amount: "1613"
      },
      {
        Location: "Alaska",
        Year: "2019",
        Type: "State",
        Amount: "1495"
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "Federal",
        Amount: "1377"
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "Local",
        Amount: "1613"
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "State",
        Amount: "1495"
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "Federal",
        Amount: "1436"
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "Local",
        Amount: "1672"
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "State",
        Amount: "1554"
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "Federal",
        Amount: "1375"
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "Local",
        Amount: "1611"
      },
      {
        Location: "Alabama",
        Year: "2019",
        Type: "State",
        Amount: "1493"
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "Federal",
        Amount: "1375"
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "Local",
        Amount: "1611"
      },
      {
        Location: "Alabama",
        Year: "2020",
        Type: "State",
        Amount: "1493"
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "Federal",
        Amount: "1434"
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "Local",
        Amount: "1670"
      },
      {
        Location: "Alabama",
        Year: "2021",
        Type: "State",
        Amount: "1552"
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "Federal",
        Amount: "1398"
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "Local",
        Amount: "1634"
      },
      {
        Location: "Arkansas",
        Year: "2019",
        Type: "State",
        Amount: "1516"
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "Federal",
        Amount: "1398"
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "Local",
        Amount: "1634"
      },
      {
        Location: "Arkansas",
        Year: "2020",
        Type: "State",
        Amount: "1516"
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "Federal",
        Amount: "1457"
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "Local",
        Amount: "1693"
      },
      {
        Location: "Arkansas",
        Year: "2021",
        Type: "State",
        Amount: "1575"
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "Federal",
        Amount: "1388"
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "Local",
        Amount: "1624"
      },
      {
        Location: "American Samoa",
        Year: "2019",
        Type: "State",
        Amount: "1506"
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "Federal",
        Amount: "1388"
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "Local",
        Amount: "1624"
      },
      {
        Location: "American Samoa",
        Year: "2020",
        Type: "State",
        Amount: "1506"
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "Federal",
        Amount: "1447"
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "Local",
        Amount: "1683"
      },
      {
        Location: "American Samoa",
        Year: "2021",
        Type: "State",
        Amount: "1565"
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "Federal",
        Amount: "1401"
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "Local",
        Amount: "1637"
      },
      {
        Location: "Arizona",
        Year: "2019",
        Type: "State",
        Amount: "1519"
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "Federal",
        Amount: "1401"
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "Local",
        Amount: "1637"
      },
      {
        Location: "Arizona",
        Year: "2020",
        Type: "State",
        Amount: "1519"
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "Federal",
        Amount: "1460"
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "Local",
        Amount: "1696"
      },
      {
        Location: "Arizona",
        Year: "2021",
        Type: "State",
        Amount: "1578"
      }
    ]
  }
}, ti = "", oi = {}, ni = [], ii = "4.25.1", ri = {
  addColorMigration: !0
}, x = {
  dashboard: _n,
  rows: Gn,
  visualizations: Kn,
  table: $n,
  data: jn,
  dataFileName: Jn,
  dataFileSourceType: Qn,
  type: Zn,
  uuid: Xn,
  runtime: ei,
  datasets: ai,
  dataUrl: ti,
  dataDescription: oi,
  formattedData: ni,
  version: ii,
  migrations: ri
}, ia = c.cloneDeep(x), ra = c.cloneDeep(x);
ia.dashboard.sharedFilters[0].order = "desc";
ra.dashboard.sharedFilters[0].order = "cust";
const hr = {
  title: "Components/Pages/Dashboard",
  component: ma
}, d = {
  args: {
    config: x,
    isEditor: !1
  }
}, p = {
  args: {
    config: ia,
    isEditor: !1
  }
}, m = {
  args: {
    config: ra,
    isEditor: !1
  }
}, u = {
  args: {
    config: ot,
    isEditor: !1
  }
}, L = {
  args: {
    config: ut,
    isEditor: !1
  }
}, T = {
  args: {
    config: Rt,
    isEditor: !1
  }
}, h = {
  args: {
    config: Qo,
    isEditor: !1
  }
}, y = {
  args: {
    config: Ot,
    isEditor: !1
  }
}, A = {
  args: {
    config: _a,
    isEditor: !1
  }
}, g = {
  args: {
    config: co,
    isEditor: !1
  }
}, w = {
  args: {
    config: Oo,
    isEditor: !1
  }
}, R = {
  args: {
    config: Fo,
    isEditor: !1
  }
}, S = {
  args: {
    config: Ao,
    isEditor: !1
  }
}, Y = {
  args: {
    config: Dt,
    isEditor: !1
  }
};
V.seed(123);
const sa = c.times(5, V.location.country), si = c.times(3, (a) => `category-${a + 1}`), ca = [];
sa.forEach((a, e) => {
  si.forEach((t, o) => {
    (e + o) % 3 !== 0 && ca.push({
      Country: a,
      "Sample Categories": t,
      Data: V.number.int({
        min: 5,
        max: 50
      })
    });
  });
});
const ci = sa.map((a, e) => ({
  Country: a,
  symbol: ua[e][0],
  text: V.lorem.sentence()
})), la = {
  "valid-world-data.json": {
    data: ca
  },
  "footnote-data.json": {
    data: ci
  }
}, f = {
  args: {
    config: Xt,
    isEditor: !1
  }
}, li = [{
  ...P.rows[0],
  footnotesId: "footnote123"
}], di = {
  dataKey: "footnote-data.json",
  dynamicFootnotes: {
    symbolColumn: "symbol",
    textColumn: "text"
  },
  staticFootnotes: [{
    symbol: "**",
    text: "This is a static Footnote"
  }]
}, pi = {
  ...P.visualizations,
  footnote123: di
}, v = {
  args: {
    config: {
      ...P,
      datasets: la,
      rows: li,
      visualizations: pi
    },
    isEditor: !1
  }
}, i = (a) => new Promise((e) => setTimeout(e, a)), W = {
  debug: !0,
  mocks: [{
    matcher: {
      name: "topicsFilter",
      url: "path:/api/poc/topics"
    },
    response: {
      status: 200,
      body: [{
        TopicID: "topicId",
        Topic: "Some Topic"
      }]
    }
  }, {
    matcher: {
      name: "indicatorsFilter",
      url: "path:/api/poc/indicators"
    },
    response: {
      status: 200,
      body: [{
        IndicatorID: "indicatorID",
        Indicator: "Some Indicator"
      }]
    }
  }, ...["Year", "DataValueType", "StratificationCategory", "Stratification"].map((a) => ({
    matcher: {
      name: "filters" + a,
      url: "path:/api/POC/Filters/" + a
    },
    response: {
      status: 200,
      body: c.times(5, (e) => ({
        [a]: `Some ${a} ${e}`
      }))
    }
  })), {
    matcher: {
      name: "locations",
      url: "path:/api/poc/locations"
    },
    response: {
      status: 200,
      body: [{
        LocationAbbr: "MS",
        LocationDesc: "Mississippi"
      }]
    }
  }, {
    matcher: {
      name: "tableData",
      url: "path:/api/POC/TableData"
    },
    response: {
      status: 200,
      body: [{
        LocationAbbr: "MS",
        LocationDesc: "Mississippi",
        Indicator: "Some Indicator",
        IndicatorID: "ALC04",
        Topic: "Some Topic",
        TopicID: "ALC",
        DataSource: null,
        StratificationCategory: "Overall",
        Stratification: "Overall",
        StratificationId1: "OVR",
        StratificationCategoryId: "OVERALL",
        YearStart: null,
        YearEnd: 2019,
        DataValue: 2,
        DataValueUnit: "Number",
        LowConfidenceLimit: 1.6,
        HighConfidenceLimit: 2.9,
        DataValueType: null,
        DataValueTypeID: "CRDMEDN"
      }]
    }
  }, {
    matcher: {
      name: "methodologyYear",
      url: "path:/methodology",
      query: {
        $select: "distinct year"
      }
    },
    response: {
      status: 200,
      body: E("distinct year")
    }
  }, ...["a", "b"].map((a) => ({
    matcher: {
      name: "methodology" + a,
      url: "path:/methodology",
      query: {
        methodology: `"${a}"`
      }
    },
    response: {
      status: 200,
      body: E("*", ["methodology", a])
    }
  })), ...[1999, 2e3, 2012, 2013].map((a) => ({
    matcher: {
      name: "methodology" + a,
      url: "path:/methodology",
      query: {
        $select: "distinct methodology",
        year: a
      }
    },
    response: {
      status: 200,
      body: E("distinct methodology", ["year", a])
    }
  }))]
}, b = {
  args: {
    config: Ya,
    isEditor: !1
  },
  parameters: {
    fetchMock: W
  },
  play: async ({
    canvasElement: a
  }) => {
    const e = I(a), t = U.setup();
    await i(1e3);
    const o = e.getByLabelText("Category", {
      selector: "select"
    });
    await t.selectOptions(o, ["topicId"]), await i(1e3);
    const l = e.getByLabelText("Indicator", {
      selector: "select"
    });
    await t.selectOptions(l, ["indicatorID"]);
    const n = e.getByLabelText("Year", {
      selector: "select"
    });
    await t.selectOptions(n, ["Some Year 0"]);
    const r = e.getByLabelText("View By", {
      selector: "select"
    });
    await t.selectOptions(r, ["Some StratificationCategory 0"]);
    const s = e.getByLabelText("Stratification", {
      selector: "select"
    });
    await t.selectOptions(s, ["Some Stratification 0"]), await t.click(e.getByText("GO!"));
  }
}, F = {
  args: {
    config: Da,
    isEditor: !1
  },
  parameters: {
    fetchMock: W
  },
  play: async ({
    canvasElement: a
  }) => {
    const e = I(a), t = U.setup();
    await i(1e3);
    const o = e.getByLabelText("Location", {
      selector: "select"
    });
    await t.selectOptions(o, ["MS"]);
    const l = e.getByLabelText("Category", {
      selector: "select"
    });
    await t.selectOptions(l, ["topicId"]);
    const n = e.getByLabelText("Indicator", {
      selector: "select"
    });
    await t.selectOptions(n, ["indicatorID"]), await t.click(e.getByText("GO!")), await i(1e3);
    const r = e.getByLabelText("Year", {
      selector: "select"
    });
    await t.selectOptions(r, ["Some Year 1"]);
  }
}, k = {
  args: {
    config: cn,
    isEditor: !1
  },
  parameters: {
    fetchMock: W
  },
  play: async ({
    canvasElement: a
  }) => {
    const e = I(a), t = U.setup();
    await i(1e3);
    const o = e.getByLabelText("Year", {
      selector: "select"
    });
    await t.selectOptions(o, ["1999"]), await t.click(e.getByText("GO!")), await i(500), e.getAllByText("alabama"), e.getAllByText("alaska"), e.getAllByText("arizona"), await t.selectOptions(o, ["2012"]), await t.click(e.getByText("GO!")), await i(500), e.getAllByText("new york"), e.getAllByText("new jersey"), e.getAllByText("new mexico");
  }
}, C = {
  args: {
    config: {
      ...P,
      datasets: la
    },
    isEditor: !1
  },
  play: async ({
    canvasElement: a
  }) => {
    const e = I(a), t = U.setup();
    await i(1e3);
    const o = e.getByLabelText("Category", {
      selector: "select"
    });
    e.getAllByText("Paraguay"), e.getAllByText("Poland"), e.getAllByText("Iraq"), await t.selectOptions(o, ["category-3"]), e.getAllByText("Paraguay"), e.getAllByText("Ethiopia"), e.getAllByText("Iraq"), await t.selectOptions(o, ["category-1"]), e.getAllByText("Poland"), e.getAllByText("Ethiopia"), e.getAllByText("Curacao");
  }
}, M = {
  args: {
    config: yn,
    isEditor: !1
  }
}, N = {
  args: {
    config: bn,
    isEditor: !1
  }
}, D = {
  args: {
    config: In,
    isEditor: !1
  }
}, H = {
  args: {
    config: qn,
    isEditor: !1
  }
};
var O, B, z;
d.parameters = {
  ...d.parameters,
  docs: {
    ...(O = d.parameters) == null ? void 0 : O.docs,
    source: {
      originalSource: `{
  args: {
    config: DashboardFilterAsc,
    isEditor: false
  }
}`,
      ...(z = (B = d.parameters) == null ? void 0 : B.docs) == null ? void 0 : z.source
    }
  }
};
var q, _, G;
p.parameters = {
  ...p.parameters,
  docs: {
    ...(q = p.parameters) == null ? void 0 : q.docs,
    source: {
      originalSource: `{
  args: {
    config: DashboardFilterDesc,
    isEditor: false
  }
}`,
      ...(G = (_ = p.parameters) == null ? void 0 : _.docs) == null ? void 0 : G.source
    }
  }
};
var K, $, j;
m.parameters = {
  ...m.parameters,
  docs: {
    ...(K = m.parameters) == null ? void 0 : K.docs,
    source: {
      originalSource: `{
  args: {
    config: DashboardFilterCust,
    isEditor: false
  }
}`,
      ...(j = ($ = m.parameters) == null ? void 0 : $.docs) == null ? void 0 : j.source
    }
  }
};
var J, Q, Z;
u.parameters = {
  ...u.parameters,
  docs: {
    ...(J = u.parameters) == null ? void 0 : J.docs,
    source: {
      originalSource: `{
  args: {
    config: ExampleConfig_1,
    isEditor: false
  }
}`,
      ...(Z = (Q = u.parameters) == null ? void 0 : Q.docs) == null ? void 0 : Z.source
    }
  }
};
var X, ee, ae;
L.parameters = {
  ...L.parameters,
  docs: {
    ...(X = L.parameters) == null ? void 0 : X.docs,
    source: {
      originalSource: `{
  args: {
    config: ExampleConfig_2,
    isEditor: false
  }
}`,
      ...(ae = (ee = L.parameters) == null ? void 0 : ee.docs) == null ? void 0 : ae.source
    }
  }
};
var te, oe, ne;
T.parameters = {
  ...T.parameters,
  docs: {
    ...(te = T.parameters) == null ? void 0 : te.docs,
    source: {
      originalSource: `{
  args: {
    config: ExampleConfig_3,
    isEditor: false
  }
}`,
      ...(ne = (oe = T.parameters) == null ? void 0 : oe.docs) == null ? void 0 : ne.source
    }
  }
};
var ie, re, se;
h.parameters = {
  ...h.parameters,
  docs: {
    ...(ie = h.parameters) == null ? void 0 : ie.docs,
    source: {
      originalSource: `{
  args: {
    config: BumpChartConfig,
    isEditor: false
  }
}`,
      ...(se = (re = h.parameters) == null ? void 0 : re.docs) == null ? void 0 : se.source
    }
  }
};
var ce, le, de;
y.parameters = {
  ...y.parameters,
  docs: {
    ...(ce = y.parameters) == null ? void 0 : ce.docs,
    source: {
      originalSource: `{
  args: {
    config: Dashboard_Filter,
    isEditor: false
  }
}`,
      ...(de = (le = y.parameters) == null ? void 0 : le.docs) == null ? void 0 : de.source
    }
  }
};
var pe, me, ue;
A.parameters = {
  ...A.parameters,
  docs: {
    ...(pe = A.parameters) == null ? void 0 : pe.docs,
    source: {
      originalSource: `{
  args: {
    config: APIFilterErrorConfig,
    isEditor: false
  }
}`,
      ...(ue = (me = A.parameters) == null ? void 0 : me.docs) == null ? void 0 : ue.source
    }
  }
};
var Le, Te, he;
g.parameters = {
  ...g.parameters,
  docs: {
    ...(Le = g.parameters) == null ? void 0 : Le.docs,
    source: {
      originalSource: `{
  args: {
    config: StandaloneTable,
    isEditor: false
  }
}`,
      ...(he = (Te = g.parameters) == null ? void 0 : Te.docs) == null ? void 0 : he.source
    }
  }
};
var ye, Ae, ge;
w.parameters = {
  ...w.parameters,
  docs: {
    ...(ye = w.parameters) == null ? void 0 : ye.docs,
    source: {
      originalSource: `{
  args: {
    config: ToggleExampleConfig,
    isEditor: false
  }
}`,
      ...(ge = (Ae = w.parameters) == null ? void 0 : Ae.docs) == null ? void 0 : ge.source
    }
  }
};
var we, Re, Se;
R.parameters = {
  ...R.parameters,
  docs: {
    ...(we = R.parameters) == null ? void 0 : we.docs,
    source: {
      originalSource: `{
  args: {
    config: PivotFitlerConfig,
    isEditor: false
  }
}`,
      ...(Se = (Re = R.parameters) == null ? void 0 : Re.docs) == null ? void 0 : Se.source
    }
  }
};
var Ye, fe, ve;
S.parameters = {
  ...S.parameters,
  docs: {
    ...(Ye = S.parameters) == null ? void 0 : Ye.docs,
    source: {
      originalSource: `{
  args: {
    config: GroupPivotConfig,
    isEditor: false
  }
}`,
      ...(ve = (fe = S.parameters) == null ? void 0 : fe.docs) == null ? void 0 : ve.source
    }
  }
};
var be, Fe, ke;
Y.parameters = {
  ...Y.parameters,
  docs: {
    ...(be = Y.parameters) == null ? void 0 : be.docs,
    source: {
      originalSource: `{
  args: {
    config: SingleStateDashboardFilters,
    isEditor: false
  }
}`,
      ...(ke = (Fe = Y.parameters) == null ? void 0 : Fe.docs) == null ? void 0 : ke.source
    }
  }
};
var Ce, Me, Ne;
f.parameters = {
  ...f.parameters,
  docs: {
    ...(Ce = f.parameters) == null ? void 0 : Ce.docs,
    source: {
      originalSource: `{
  args: {
    config: MultiDashboardConfig,
    isEditor: false
  }
}`,
      ...(Ne = (Me = f.parameters) == null ? void 0 : Me.docs) == null ? void 0 : Ne.source
    }
  }
};
var De, He, Ve;
v.parameters = {
  ...v.parameters,
  docs: {
    ...(De = v.parameters) == null ? void 0 : De.docs,
    source: {
      originalSource: `{
  args: {
    config: {
      ...MultiVizConfig,
      datasets: multiVizData,
      rows: FNrows,
      visualizations: FNViz
    },
    isEditor: false
  }
}`,
      ...(Ve = (He = v.parameters) == null ? void 0 : He.docs) == null ? void 0 : Ve.source
    }
  }
};
var Ie, Ue, Pe;
b.parameters = {
  ...b.parameters,
  docs: {
    ...(Ie = b.parameters) == null ? void 0 : Ie.docs,
    source: {
      originalSource: `{
  args: {
    config: APIFiltersMapData as unknown as Config,
    isEditor: false
  },
  parameters: {
    fetchMock
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    // play is running before full rendering is complete so sleep function
    // is needed to delay the execution.
    // possible related bug: https://github.com/storybookjs/storybook/issues/18258
    await sleep(1000);
    const topicsFilter = canvas.getByLabelText('Category', {
      selector: 'select'
    });
    await user.selectOptions(topicsFilter, ['topicId']);
    await sleep(1000);
    const indicatorsFilter = canvas.getByLabelText('Indicator', {
      selector: 'select'
    });
    await user.selectOptions(indicatorsFilter, ['indicatorID']);
    const yearsFilter = canvas.getByLabelText('Year', {
      selector: 'select'
    });
    await user.selectOptions(yearsFilter, ['Some Year 0']);
    const stratCategoryFilter = canvas.getByLabelText('View By', {
      selector: 'select'
    });
    await user.selectOptions(stratCategoryFilter, ['Some StratificationCategory 0']);
    const stratFilter = canvas.getByLabelText('Stratification', {
      selector: 'select'
    });
    await user.selectOptions(stratFilter, ['Some Stratification 0']);
    await user.click(canvas.getByText('GO!'));
  }
}`,
      ...(Pe = (Ue = b.parameters) == null ? void 0 : Ue.docs) == null ? void 0 : Pe.source
    }
  }
};
var Ee, xe, We;
F.parameters = {
  ...F.parameters,
  docs: {
    ...(Ee = F.parameters) == null ? void 0 : Ee.docs,
    source: {
      originalSource: `{
  args: {
    config: APIFiltersChartData as unknown as Config,
    isEditor: false
  },
  parameters: {
    fetchMock
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    // play is running before full rendering is complete so sleep function
    // is needed to delay the execution.
    // possible related bug: https://github.com/storybookjs/storybook/issues/18258
    await sleep(1000);
    const locationFilter = canvas.getByLabelText('Location', {
      selector: 'select'
    });
    await user.selectOptions(locationFilter, ['MS']);
    const topicsFilter = canvas.getByLabelText('Category', {
      selector: 'select'
    });
    await user.selectOptions(topicsFilter, ['topicId']);
    const indicatorsFilter = canvas.getByLabelText('Indicator', {
      selector: 'select'
    });
    await user.selectOptions(indicatorsFilter, ['indicatorID']);
    await user.click(canvas.getByText('GO!'));
    await sleep(1000);
    const yearFilter = canvas.getByLabelText('Year', {
      selector: 'select'
    });
    await user.selectOptions(yearFilter, ['Some Year 1']);
  }
}`,
      ...(We = (xe = F.parameters) == null ? void 0 : xe.docs) == null ? void 0 : We.source
    }
  }
};
var Oe, Be, ze;
k.parameters = {
  ...k.parameters,
  docs: {
    ...(Oe = k.parameters) == null ? void 0 : Oe.docs,
    source: {
      originalSource: `{
  args: {
    config: MethodologyConfig,
    isEditor: false
  },
  parameters: {
    fetchMock
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    // play is running before full rendering is complete so sleep function
    // is needed to delay the execution.
    // possible related bug: https://github.com/storybookjs/storybook/issues/18258
    await sleep(1000);
    const yearFilter = canvas.getByLabelText('Year', {
      selector: 'select'
    });
    await user.selectOptions(yearFilter, ['1999']);
    await user.click(canvas.getByText('GO!'));
    await sleep(500);
    canvas.getAllByText('alabama');
    canvas.getAllByText('alaska');
    canvas.getAllByText('arizona');
    await user.selectOptions(yearFilter, ['2012']);
    await user.click(canvas.getByText('GO!'));
    await sleep(500);
    canvas.getAllByText('new york');
    canvas.getAllByText('new jersey');
    canvas.getAllByText('new mexico');
  }
}`,
      ...(ze = (Be = k.parameters) == null ? void 0 : Be.docs) == null ? void 0 : ze.source
    }
  }
};
var qe, _e, Ge;
C.parameters = {
  ...C.parameters,
  docs: {
    ...(qe = C.parameters) == null ? void 0 : qe.docs,
    source: {
      originalSource: `{
  args: {
    config: {
      ...MultiVizConfig,
      datasets: multiVizData
    },
    isEditor: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    // play is running before full rendering is complete so sleep function
    // is needed to delay the execution.
    // possible related bug: https://github.com/storybookjs/storybook/issues/18258
    await sleep(1000);
    const categoryFilter = canvas.getByLabelText('Category', {
      selector: 'select'
    });
    canvas.getAllByText('Paraguay');
    canvas.getAllByText('Poland');
    canvas.getAllByText('Iraq');
    await user.selectOptions(categoryFilter, ['category-3']);
    canvas.getAllByText('Paraguay');
    canvas.getAllByText('Ethiopia');
    canvas.getAllByText('Iraq');
    await user.selectOptions(categoryFilter, ['category-1']);
    canvas.getAllByText('Poland');
    canvas.getAllByText('Ethiopia');
    canvas.getAllByText('Curacao');
  }
}`,
      ...(Ge = (_e = C.parameters) == null ? void 0 : _e.docs) == null ? void 0 : Ge.source
    }
  }
};
var Ke, $e, je;
M.parameters = {
  ...M.parameters,
  docs: {
    ...(Ke = M.parameters) == null ? void 0 : Ke.docs,
    source: {
      originalSource: `{
  args: {
    config: TopSpacing_1,
    isEditor: false
  }
}`,
      ...(je = ($e = M.parameters) == null ? void 0 : $e.docs) == null ? void 0 : je.source
    }
  }
};
var Je, Qe, Ze;
N.parameters = {
  ...N.parameters,
  docs: {
    ...(Je = N.parameters) == null ? void 0 : Je.docs,
    source: {
      originalSource: `{
  args: {
    config: TopSpacing_2,
    isEditor: false
  }
}`,
      ...(Ze = (Qe = N.parameters) == null ? void 0 : Qe.docs) == null ? void 0 : Ze.source
    }
  }
};
var Xe, ea, aa;
D.parameters = {
  ...D.parameters,
  docs: {
    ...(Xe = D.parameters) == null ? void 0 : Xe.docs,
    source: {
      originalSource: `{
  args: {
    config: TopSpacing_3,
    isEditor: false
  }
}`,
      ...(aa = (ea = D.parameters) == null ? void 0 : ea.docs) == null ? void 0 : aa.source
    }
  }
};
var ta, oa, na;
H.parameters = {
  ...H.parameters,
  docs: {
    ...(ta = H.parameters) == null ? void 0 : ta.docs,
    source: {
      originalSource: `{
  args: {
    config: TopSpacing_4,
    isEditor: false
  }
}`,
      ...(na = (oa = H.parameters) == null ? void 0 : oa.docs) == null ? void 0 : na.source
    }
  }
};
const yr = ["Dashboard_Filter_Asc", "Dashboard_Filter_Desc", "Dashboard_Filter_Cust", "Example_1", "Example_2", "Example_3", "Bump_Chart_Dashboard", "Dashboard_Filters", "API_Filter_Error", "StandAloneTable", "ToggleExample", "PivotFilter", "GroupPivotFilter", "SingleStateDashboardWithFilters", "MultiDashboard", "Footnotes", "RegressionAPIFiltersMap", "RegressionAPIFiltersChart", "RegressionHiddenFilter", "RegressionMultiVisualization", "Top_Spacing_1", "Top_Spacing_2", "Top_Spacing_3", "Top_Spacing_4"];
export {
  A as API_Filter_Error,
  h as Bump_Chart_Dashboard,
  d as Dashboard_Filter_Asc,
  m as Dashboard_Filter_Cust,
  p as Dashboard_Filter_Desc,
  y as Dashboard_Filters,
  u as Example_1,
  L as Example_2,
  T as Example_3,
  v as Footnotes,
  S as GroupPivotFilter,
  f as MultiDashboard,
  R as PivotFilter,
  F as RegressionAPIFiltersChart,
  b as RegressionAPIFiltersMap,
  k as RegressionHiddenFilter,
  C as RegressionMultiVisualization,
  Y as SingleStateDashboardWithFilters,
  g as StandAloneTable,
  w as ToggleExample,
  M as Top_Spacing_1,
  N as Top_Spacing_2,
  D as Top_Spacing_3,
  H as Top_Spacing_4,
  yr as __namedExportsOrder,
  hr as default
};
