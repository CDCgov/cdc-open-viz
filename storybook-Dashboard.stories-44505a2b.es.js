import { f as P } from "./storybook-index-4ddb77d9.es.js";
import { M as je } from "./storybook-CdcDashboard-e5a54a72.es.js";
import { w as N, u as D } from "./storybook-index-b7ec4af1.es.js";
import { _ as V } from "./storybook-lodash-a4231e1c.es.js";
import { f as Ze } from "./storybook-CdcChartComponent-b5228c9e.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-InputToggle-1e77d9ab.es.js";
import "./storybook-DataTransform-6163e156.es.js";
import "./storybook-linear-ef79b404.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Text-c19e6344.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-Icon-4f5978ba.es.js";
import "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-Inputs-b80d0cf3.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-Tooltip-4102bd69.es.js";
import "./storybook-Filters-ce4a04a7.es.js";
import "./storybook-Button-63da743c.es.js";
import "./storybook-MultiSelect-d587cce3.es.js";
import "./storybook-Loader-f4ec7b29.es.js";
import "./storybook-FilterStyles-fd509eb9.es.js";
import "./storybook-NestedDropdown-bc9acc77.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-getViewport-513ec896.es.js";
import "./storybook-index-3b47b3f7.es.js";
import "./storybook-fetchRemoteData-1d0a5295.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-isSolr-4154a32f.es.js";
import "./storybook-viewports-5c5d7af1.es.js";
import "./storybook-CdcDataBite-7aaaabf2.es.js";
import "./storybook-updateFieldFactory-c006040a.es.js";
import "./storybook-coveUpdateWorker-4c7dbbf1.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-CdcMap-7a44998e.es.js";
import "./storybook-DataTable-897188ef.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-Table-79b9238f.es.js";
import "./storybook-supported-geos-c96b4fa3.es.js";
import "./storybook-Accordion-2501c7d9.es.js";
import "./storybook-CdcWaffleChart-89d05418.es.js";
import "./storybook-editor-57986c01.es.js";
import "./storybook-InputSelect-20478396.es.js";
import "./storybook-linear-bc5fb9aa.es.js";
import "./storybook-CdcMarkupInclude-6be71bc2.es.js";
import "./storybook-DataDesigner-1d516d20.es.js";
import "./storybook-Card-6750b07b.es.js";
import "./storybook-DashboardFilters-3d2191b7.es.js";
import "./storybook-Footnotes-108c3a2d.es.js";
import "./storybook-index-398c73a4.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-BlurStrokeText-adc27352.es.js";
const Xe = {
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
}, ea = [
  [
    {
      width: 12,
      widget: "map1"
    }
  ]
], aa = {
  map1: {
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
}, ta = "dashboard", oa = {
  data3: {
    dataUrl: "http://test.gov/api/POC/TableData?DataValueTypeId=CRDMEDN"
  }
}, na = "Apply Button", ia = {}, ra = 1684783370106, sa = {
  dashboard: Xe,
  rows: ea,
  visualizations: aa,
  type: ta,
  datasets: oa,
  filterBehavior: na,
  runtime: ia,
  uuid: ra
}, la = {
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
}, ca = [
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
], da = {
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
}, pa = "dashboard", ma = {
  data3: {
    dataUrl: "http://test.gov/api/POC/TableData"
  }
}, ua = "Apply Button", La = {}, Ta = 1684783370106, ha = {
  dashboard: la,
  rows: ca,
  visualizations: da,
  type: pa,
  datasets: ma,
  filterBehavior: ua,
  runtime: La,
  uuid: Ta
}, ya = {
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
}, Aa = [
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
], ga = {
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
}, wa = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showDownloadLinkBelow: !0,
  showVertical: !0
}, Ra = !0, fa = {
  "https://nccd-cove-public-api.apps.ecpaas-dev.cdc.gov/od-public?$datakey=brfss_prevalence_cove_explore_by_topic": {
    dataFileSize: 35061,
    dataFileName: "https://nccd-cove-public-api.apps.ecpaas-dev.cdc.gov/od-public?$datakey=brfss_prevalence_cove_explore_by_topic",
    dataFileSourceType: "url",
    dataFileFormat: "JSON",
    preview: !0,
    dataUrl: "https://nccd-cove-public-api.apps.ecpaas-dev.cdc.gov/od-public?$datakey=brfss_prevalence_cove_explore_by_topic"
  }
}, Sa = !1, Ya = "dashboard", va = "0.37", ba = {
  type: "categorical",
  size: 75,
  maxTickRotation: 45,
  labelOffset: 0
}, ka = {}, Fa = "4.24.10", Ca = {
  dashboard: ya,
  rows: Aa,
  visualizations: ga,
  table: wa,
  newViz: Ra,
  datasets: fa,
  isResponsiveTicks: Sa,
  type: Ya,
  barThickness: va,
  xAxis: ba,
  runtime: ka,
  version: Fa
}, Pa = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Na = [], Da = "lg", Va = 15, Ha = "General", Ma = "dashboard", xa = null, Ia = null, Ua = {
  key: null,
  ref: null,
  props: {},
  _owner: null
}, Ea = "Present multiple data visualizations with shared filter controls.", Wa = {
  "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2000": {
    dataFileSize: 3651652,
    dataFileName: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2000",
    dataFileSourceType: "url",
    dataFileFormat: "JSON",
    preview: !1,
    dataUrl: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2000"
  },
  "Over Time Filter": {
    dataFileSize: 5031552,
    dataFileName: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2001",
    dataFileSourceType: "url",
    dataFileFormat: "JSON",
    preview: !1,
    dataUrl: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2001"
  },
  "Specific Year Filter": {
    dataFileSize: 5033955,
    dataFileName: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2002",
    dataFileSourceType: "url",
    dataFileFormat: "JSON",
    preview: !1,
    dataUrl: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2002"
  },
  "Explore by Topic": {
    dataFileSize: 5029507,
    dataFileName: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2003",
    dataFileSourceType: "url",
    dataFileFormat: "JSON",
    preview: !1,
    dataUrl: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2003"
  },
  "Explore by Topic Visualization Row": {
    dataFileSize: 5029507,
    dataFileName: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2004",
    dataFileSourceType: "url",
    dataFileFormat: "JSON",
    preview: !1,
    dataUrl: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2004"
  },
  "Over Time Filter 2": {
    dataFileSize: 4957054,
    dataFileName: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2001&$where=LEN(Year_Filter) < 5",
    dataFileSourceType: "url",
    dataFileFormat: "JSON",
    preview: !1,
    dataUrl: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2001&$where=LEN(Year_Filter) < 5"
  },
  "Bar Chart": {
    dataFileSize: 5049792,
    dataFileName: "https://nccd-cove-public-api.apps.ecpaas-dev.cdc.gov/od-public?$datakey=adhap_cove_location_topic_bar_chart_all&$limit=2000",
    dataFileSourceType: "url",
    dataFileFormat: "JSON",
    preview: !0,
    dataUrl: "https://nccd-cove-public-api.apps.ecpaas-dev.cdc.gov/od-public?$datakey=adhap_cove_location_topic_bar_chart_all&$limit=2000"
  }
}, Oa = null, Ba = 15, za = "4.25.1", _a = 1737570501379, qa = [
  {
    dashboard: {
      theme: "theme-blue",
      sharedFilters: [
        {
          key: "Location",
          showDropdown: !0,
          type: "urlfilter",
          filterStyle: "nested-dropdown",
          apiFilter: {
            apiEndpoint: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2000&$select=DISTINCT%20Location,%20LocationDesc,%20LocationAbbr&$order=Location",
            subgroupValueSelector: "LocationAbbr",
            textSelector: "",
            valueSelector: "Location",
            subgroupTextSelector: "LocationDesc"
          },
          subGrouping: {
            columnName: "",
            setByQueryParameter: "",
            valuesLookup: {}
          },
          tier: 1
        },
        {
          key: "Category",
          showDropdown: !0,
          type: "urlfilter",
          apiFilter: {
            apiEndpoint: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2000&$select=DISTINCT%20Category&$order=Category",
            valueSelector: "Category",
            textSelector: ""
          },
          parents: [
            "Location"
          ],
          tier: 2
        },
        {
          key: "Indicator",
          showDropdown: !0,
          type: "urlfilter",
          apiFilter: {
            apiEndpoint: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2000&$select=DISTINCT%20Indicator&$order=Indicator",
            valueSelector: "Indicator",
            textSelector: ""
          },
          parents: [
            "Location",
            "Category"
          ],
          tier: 2
        },
        {
          key: "Age Group",
          showDropdown: !0,
          type: "urlfilter",
          apiFilter: {
            apiEndpoint: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2001&$select=DISTINCT%20Subcategory_Agegroup_Filter&$order=Subcategory_Agegroup_Filter",
            valueSelector: "Subcategory_Agegroup_Filter",
            textSelector: ""
          },
          usedBy: [
            "chart1736198567054",
            "table1736446212687"
          ],
          tier: 1,
          parents: [
            "Location",
            "Category",
            "Indicator"
          ]
        },
        {
          key: "Demographic",
          showDropdown: !0,
          type: "urlfilter",
          filterStyle: "nested-dropdown",
          apiFilter: {
            apiEndpoint: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2001&$select=DISTINCT%20Demographic,%20SubCategory_Demographic_Filter&$order=Demographic,SubCategory_Demographic_Filter",
            subgroupValueSelector: "SubCategory_Demographic_Filter",
            textSelector: "",
            valueSelector: "Demographic"
          },
          subGrouping: {
            columnName: "",
            setByQueryParameter: "",
            valuesLookup: {}
          },
          parents: [
            "Age Group"
          ],
          usedBy: [
            "chart1736198567054",
            "table1736446212687"
          ],
          tier: 2
        },
        {
          key: "Year",
          showDropdown: !0,
          type: "urlfilter",
          apiFilter: {
            apiEndpoint: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic_bar_chart_all&$limit=2002&$select=DISTINCT%20Year_Filter&$order=Year_Filter",
            valueSelector: "Year_Filter",
            textSelector: ""
          },
          usedBy: [
            "chart1736451559821"
          ],
          tier: 1,
          parents: [
            "Location",
            "Category",
            "Indicator"
          ]
        },
        {
          key: "Age Group ",
          showDropdown: !0,
          type: "urlfilter",
          apiFilter: {
            apiEndpoint: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic_bar_chart_all&$limit=2002&$select=DISTINCT%20Subcategory_Agegroup_Filter&$order=Subcategory_Agegroup_Filter",
            valueSelector: "Subcategory_Agegroup_Filter",
            textSelector: ""
          },
          parents: [
            "Year"
          ],
          usedBy: [
            "chart1736451559821"
          ],
          tier: 2
        },
        {
          key: "Demographic ",
          showDropdown: !0,
          type: "urlfilter",
          filterStyle: "nested-dropdown",
          apiFilter: {
            apiEndpoint: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic_bar_chart_all&$limit=2002&$select=DISTINCT%20Demographic,%20SubCategory_Demographic_Filter&$order=Demographic,SubCategory_Demographic_Filter",
            subgroupValueSelector: "SubCategory_Demographic_Filter",
            textSelector: "",
            valueSelector: "Demographic"
          },
          subGrouping: {
            columnName: "",
            setByQueryParameter: "",
            valuesLookup: {}
          },
          parents: [
            "Year",
            "Age Group "
          ],
          usedBy: [
            "chart1736451559821"
          ],
          tier: 2
        }
      ]
    },
    visualizations: {
      dashboardFilters1736197709119: {
        filters: [],
        filterBehavior: "Apply Button",
        newViz: !0,
        openModal: !0,
        uid: "dashboardFilters1736197709119",
        type: "dashboardFilters",
        sharedFilterIndexes: [
          0,
          1,
          2
        ],
        visualizationType: "dashboardFilters",
        applyFiltersButtonText: "View Results"
      },
      chart1736198567054: {
        annotations: [],
        type: "chart",
        debugSvg: !1,
        chartMessage: {
          noData: "No Data Available"
        },
        title: "Line Chart 1",
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
        barStyle: "flat",
        roundingStyle: "standard",
        tipRounding: "top",
        isResponsiveTicks: !1,
        general: {
          annotationDropdownText: "Annotations",
          showDownloadButton: !1,
          showMissingDataLabel: !0,
          showSuppressedSymbol: !0,
          showZeroValueData: !0,
          hideNullValue: !0
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
          size: "70",
          gridLines: !1,
          enablePadding: !0,
          min: "",
          max: "",
          labelColor: "#333",
          tickLabelColor: "#333",
          tickColor: "#333",
          rightHideAxis: !1,
          rightAxisSize: 0,
          rightLabel: "",
          rightLabelOffsetSize: 0,
          rightAxisLabelColor: "#333",
          rightAxisTickLabelColor: "#333",
          rightAxisTickColor: "#333",
          numTicks: "",
          axisPadding: 0,
          scalePadding: "",
          tickRotation: 0,
          anchors: [],
          shoMissingDataLabel: !0,
          showMissingDataLine: !0,
          categories: [],
          label: "Percentage (%)"
        },
        boxplot: {
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
          labelOffset: 0,
          axisPadding: 200,
          target: 0,
          maxTickRotation: 0,
          padding: 5,
          showYearsOnce: !1,
          sortByRecentDate: !1,
          dataKey: "Year",
          label: "Year",
          dateParseFormat: "%Y",
          dateDisplayFormat: "%Y",
          axisBBox: 29.860000610351562,
          tickWidthMax: 39
        },
        table: {
          label: "Data Table",
          expanded: !0,
          limitHeight: !1,
          height: "",
          caption: "",
          showDownloadUrl: !1,
          showDataTableLink: !1,
          showDownloadLinkBelow: !0,
          indexLabel: "",
          download: !0,
          showVertical: !0,
          dateDisplayFormat: "%Y",
          showMissingDataLabel: !0,
          showSuppressedSymbol: !0,
          show: !1,
          showDownloadImgButton: !0
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
          label: "",
          lineMode: !1,
          verticalSorted: !1,
          highlightOnHover: !1,
          hideSuppressedLabels: !1,
          hideSuppressionLink: !1,
          seriesHighlight: [],
          style: "circles",
          subStyle: "linear blocks",
          shape: "circle",
          tickRotation: "",
          hideBorder: {
            side: !1,
            topBottom: !0
          },
          position: "right"
        },
        brush: {
          height: 45,
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
          bottomAbbreviated: !1,
          roundTo: "1"
        },
        confidenceKeys: {},
        visual: {
          border: !0,
          accent: !0,
          background: !0,
          verticalHoverLine: !0,
          horizontalHoverLine: !1,
          lineDatapointSymbol: "none",
          maximumShapeAmount: 7
        },
        useLogScale: !1,
        filterBehavior: "Filter Change",
        highlightedBarValues: [],
        series: [
          {
            dataKey: "Data_Value",
            type: "Line",
            axis: "Left",
            tooltip: !0,
            dynamicCategory: "Series"
          }
        ],
        tooltips: {
          opacity: 90,
          singleSeries: !1,
          dateDisplayFormat: "%Y"
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
        uid: "chart1736198567054",
        visualizationType: "Line",
        dataDescription: {
          horizontal: !1,
          series: !1
        },
        dataKey: "Over Time Filter 2",
        version: "4.25.1",
        dynamicMarginTop: 0,
        migrations: {
          addColorMigration: !0
        },
        allowLineToBarGraph: !0
      },
      "markup-include1736445974811": {
        filters: [],
        filterBehavior: "Filter Change",
        openModal: !1,
        uid: "markup-include1736445974811",
        type: "markup-include",
        contentEditor: {
          inlineHTML: "",
          markupVariables: [],
          showHeader: !0,
          srcUrl: "#example",
          title: "Trends over Time",
          useInlineHTML: !0
        },
        theme: "theme-blue",
        visual: {
          border: !1,
          accent: !1,
          background: !1,
          hideBackgroundColor: !1,
          borderColorTheme: !1
        },
        showEditorPanel: !0,
        visualizationType: "markup-include",
        dataDescription: {
          horizontal: !1,
          series: !1
        },
        dataKey: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2000",
        version: "4.24.10"
      },
      "markup-include1736446038125": {
        filters: [],
        filterBehavior: "Filter Change",
        openModal: !1,
        uid: "markup-include1736446038125",
        type: "markup-include",
        contentEditor: {
          inlineHTML: "<h2>{{Indicator}}</h2><h3><em>Category: {{Category}}</em></h3><h4>Location: {{LocationDesc}}</h4>",
          markupVariables: [
            {
              columnName: "Indicator",
              conditions: [],
              name: "Indicator",
              tag: "{{Indicator}}"
            },
            {
              columnName: "Category",
              conditions: [],
              name: "Category",
              tag: "{{Category}}"
            },
            {
              columnName: "LocationDesc",
              conditions: [],
              name: "LocationDesc",
              tag: "{{LocationDesc}}"
            }
          ],
          showHeader: !0,
          srcUrl: "#example",
          title: "",
          useInlineHTML: !0,
          allowHideSection: !0
        },
        theme: "theme-blue",
        visual: {
          border: !1,
          accent: !1,
          background: !1,
          hideBackgroundColor: !1,
          borderColorTheme: !1
        },
        showEditorPanel: !0,
        visualizationType: "markup-include",
        dataDescription: {
          horizontal: !1,
          series: !1
        },
        dataKey: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2000",
        version: "4.25.1",
        migrations: {
          addColorMigration: !0
        }
      },
      "markup-include1736446128952": {
        filters: [],
        filterBehavior: "Filter Change",
        openModal: !1,
        uid: "markup-include1736446128952",
        type: "markup-include",
        contentEditor: {
          inlineHTML: '<a class="" href="/wcms/nccdphp/adhap/indicator-definitions.html">View Indicator Definition</a>',
          markupVariables: [],
          showHeader: !0,
          srcUrl: "#example",
          title: "",
          useInlineHTML: !0
        },
        theme: "theme-blue",
        visual: {
          border: !1,
          accent: !1,
          background: !1,
          hideBackgroundColor: !1,
          borderColorTheme: !1
        },
        showEditorPanel: !0,
        visualizationType: "markup-include",
        dataDescription: {
          horizontal: !1,
          series: !1
        },
        dataKey: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2000",
        version: "4.25.1",
        migrations: {
          addColorMigration: !0
        }
      },
      table1736446212687: {
        filters: [],
        filterBehavior: "Filter Change",
        newViz: !1,
        openModal: !0,
        uid: "table1736446212687",
        type: "table",
        table: {
          label: "Data Table 1",
          show: !0,
          showDownloadUrl: !1,
          showVertical: !0,
          expanded: !0,
          collapsible: !0,
          groupBy: "Year_Filter",
          pivot: {
            columnName: "AgeGroup",
            valueColumns: [
              "Subcategory_Agegroup"
            ]
          }
        },
        columns: {
          AgeGroup: {
            label: "AgeGroup",
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
            name: "AgeGroup",
            order: 1
          },
          Category: {
            label: "Category",
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
            name: "Category"
          },
          Data_Value: {
            label: "Percentage (%)",
            dataTable: !0,
            tooltips: !1,
            prefix: "",
            suffix: "",
            forestPlot: !1,
            startingPoint: "0",
            forestPlotAlignRight: !1,
            roundToPlace: "1",
            commas: !1,
            showInViz: !1,
            forestPlotStartingPoint: 0,
            name: "Data_Value",
            order: 3
          },
          Footnotes: {
            label: "Footnotes",
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
            name: "Footnotes"
          },
          High_CI: {
            label: "High_CI",
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
            name: "High_CI"
          },
          Indicator: {
            label: "Indicator",
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
            name: "Indicator"
          },
          Location: {
            label: "Location",
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
            name: "Location"
          },
          LocationAbbr: {
            label: "LocationAbbr",
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
            name: "LocationAbbr"
          },
          Low_CI: {
            label: "Low_CI",
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
            name: "Low_CI"
          },
          DataSource: {
            label: "DataSource",
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
            name: "DataSource"
          },
          Data_Value_Type: {
            label: "Data_Value_Type",
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
            name: "Data_Value_Type"
          },
          Demographic: {
            label: "Demographic",
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
            name: "Demographic",
            order: null
          },
          Question: {
            label: "Question",
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
            name: "Question"
          },
          Response: {
            label: "Response",
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
            name: "Response"
          },
          createdon: {
            label: "createdon",
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
            name: "createdon"
          },
          LocationDesc: {
            label: "LocationDesc",
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
            name: "LocationDesc"
          },
          SubCategory_Demographic_Filter: {
            label: "SubCategory_Demographic_Filter",
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
            name: "SubCategory_Demographic_Filter",
            order: null
          },
          Subcategory_Agegroup_Filter: {
            label: "Subcategory_Agegroup_Filter",
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
            name: "Subcategory_Agegroup_Filter"
          },
          Indicator_Description: {
            label: "Indicator_Description",
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
            name: "Indicator_Description"
          },
          Indicator_Long_Name: {
            label: "Indicator_Long_Name",
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
            name: "Indicator_Long_Name"
          },
          QuestionDisplayOrder: {
            label: "QuestionDisplayOrder",
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
            name: "QuestionDisplayOrder"
          },
          Category_DisplayOrder: {
            label: "Category_DisplayOrder",
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
            name: "Category_DisplayOrder"
          },
          "95%_CI": {
            label: "95% CI",
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
            name: "95%_CI",
            order: 4
          },
          Subcategory_Demographic: {
            label: "Demographic",
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
            name: "Subcategory_Demographic",
            order: 2
          },
          Createdon: {
            label: "Createdon",
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
            name: "Createdon"
          },
          additionalColumn26: {
            label: "New Column",
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
            forestPlotStartingPoint: 0
          },
          Indicator_DisplayOrder: {
            name: "Indicator_DisplayOrder",
            dataTable: !1
          },
          Location_DisplayOrder: {
            name: "Location_DisplayOrder",
            dataTable: !1
          },
          Question_DisplayOrder: {
            name: "Question_DisplayOrder",
            dataTable: !1
          },
          Response_DisplayOrder: {
            name: "Response_DisplayOrder",
            dataTable: !1
          },
          ShowChart: {
            name: "ShowChart",
            dataTable: !1
          },
          Subcategory_Agegroup: {
            name: "Subcategory_Agegroup",
            dataTable: !0
          },
          Subcategory_Agegroup_DisplayOrder: {
            name: "Subcategory_Agegroup_DisplayOrder",
            dataTable: !1
          },
          Subcategory_Demographic_DisplayOrder: {
            name: "Subcategory_Demographic_DisplayOrder",
            dataTable: !1
          },
          Subcategory_Demographic_Filter: {
            name: "Subcategory_Demographic_Filter",
            dataTable: !1
          },
          Year: {
            name: "Year",
            dataTable: !1
          },
          Series: {
            label: "Demographic",
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
            name: "Series",
            order: null
          }
        },
        dataFormat: {},
        visualizationType: "table",
        dataDescription: {
          horizontal: !1,
          series: !1
        },
        dataKey: "Over Time Filter",
        general: {
          showDownloadButton: !0
        }
      },
      "markup-include1736451291324": {
        filters: [],
        filterBehavior: "Filter Change",
        openModal: !1,
        uid: "markup-include1736451291324",
        type: "markup-include",
        contentEditor: {
          inlineHTML: '<h2>{{Indicator}}</h2><h3><em>Category: {{Category}}</em></h3><h4>Location: {{LocationDesc}}</h4><br/><a class="" href="/wcms/nccdphp/adhap/indicator-definitions.html">View Indicator Definition</a>',
          markupVariables: [
            {
              columnName: "Indicator",
              conditions: [],
              name: "Indicator",
              tag: "{{Indicator}}"
            },
            {
              columnName: "Category",
              conditions: [],
              name: "Category",
              tag: "{{Category}}"
            },
            {
              columnName: "LocationDesc",
              conditions: [],
              name: "LocationDesc",
              tag: "{{LocationDesc}}"
            }
          ],
          showHeader: !0,
          srcUrl: "#example",
          title: "Details for a Specific Year",
          useInlineHTML: !0
        },
        theme: "theme-blue",
        visual: {
          border: !1,
          accent: !1,
          background: !1,
          hideBackgroundColor: !1,
          borderColorTheme: !1
        },
        showEditorPanel: !0,
        visualizationType: "markup-include",
        dataDescription: {
          horizontal: !1,
          series: !1
        },
        dataKey: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2000",
        version: "4.25.1",
        migrations: {
          addColorMigration: !0
        }
      },
      chart1736451559821: {
        annotations: [],
        type: "chart",
        debugSvg: !1,
        chartMessage: {
          noData: "No Data Available"
        },
        title: "Bar Chart 1",
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
        barStyle: "flat",
        roundingStyle: "standard",
        tipRounding: "top",
        isResponsiveTicks: !1,
        general: {
          annotationDropdownText: "Annotations",
          showDownloadButton: !1,
          showMissingDataLabel: !0,
          showSuppressedSymbol: !0,
          showZeroValueData: !0,
          hideNullValue: !0
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
          size: "70",
          gridLines: !1,
          enablePadding: !1,
          min: "",
          max: "",
          labelColor: "#333",
          tickLabelColor: "#333",
          tickColor: "#333",
          rightHideAxis: !1,
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
          label: "Percentage (%)"
        },
        boxplot: {
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
          labelOffset: 0,
          axisPadding: 200,
          target: 0,
          maxTickRotation: 0,
          padding: 5,
          showYearsOnce: !1,
          sortByRecentDate: !1,
          dataKey: "Subcategory_Agegroup",
          tickWidthMax: 88,
          axisBBox: 27.19333267211914
        },
        table: {
          label: "Data Table",
          expanded: !0,
          limitHeight: !1,
          height: "",
          caption: "",
          showDownloadUrl: !1,
          showDataTableLink: !1,
          showDownloadLinkBelow: !1,
          indexLabel: "",
          download: !0,
          showVertical: !0,
          dateDisplayFormat: "",
          showMissingDataLabel: !0,
          showSuppressedSymbol: !0,
          show: !0,
          showDownloadImgButton: !0
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
          label: "Demographic",
          lineMode: !1,
          verticalSorted: !1,
          highlightOnHover: !1,
          hideSuppressedLabels: !1,
          hideSuppressionLink: !1,
          seriesHighlight: [],
          style: "circles",
          subStyle: "linear blocks",
          shape: "circle",
          tickRotation: "",
          hideBorder: {
            side: !1,
            topBottom: !0
          },
          position: "right"
        },
        brush: {
          height: 45,
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
          bottomAbbreviated: !1,
          roundTo: "1"
        },
        confidenceKeys: {},
        visual: {
          border: !0,
          accent: !0,
          background: !0,
          verticalHoverLine: !1,
          horizontalHoverLine: !1,
          lineDatapointSymbol: "none",
          maximumShapeAmount: 7
        },
        useLogScale: !1,
        filterBehavior: "Filter Change",
        highlightedBarValues: [],
        series: [
          {
            dataKey: "Data_Value",
            type: "Bar",
            axis: "Left",
            tooltip: !0,
            dynamicCategory: "Series"
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
        uid: "chart1736451559821",
        visualizationType: "Line",
        dataDescription: {
          horizontal: !1,
          series: !1
        },
        dataKey: "Bar Chart",
        version: "4.25.1",
        dynamicMarginTop: 0,
        migrations: {
          addColorMigration: !0
        }
      },
      table1736957971832: {
        filters: [],
        filterBehavior: "Filter Change",
        newViz: !1,
        openModal: !0,
        uid: "table1736957971832",
        type: "table",
        table: {
          label: "Data Table",
          show: !0,
          showDownloadUrl: !1,
          showVertical: !0,
          expanded: !0,
          collapsible: !0,
          groupBy: "Subcategory_Agegroup",
          pivot: {
            columnName: "Subcategory_Demographic",
            valueColumns: []
          }
        },
        columns: {
          AgeGroup: {
            label: "AgeGroup",
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
            name: "AgeGroup",
            order: null
          },
          "95%_CI": {
            label: "95% CI",
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
            name: "95%_CI",
            order: 4
          },
          Category: {
            label: "Category",
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
            name: "Category"
          },
          CategoryDisplayOrder: {
            label: "CategoryDisplayOrder",
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
            name: "CategoryDisplayOrder"
          },
          DataSource: {
            label: "DataSource",
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
            name: "DataSource"
          },
          Data_Value: {
            label: "Percentage (%)",
            dataTable: !0,
            tooltips: !1,
            prefix: "",
            suffix: "",
            forestPlot: !1,
            startingPoint: "0",
            forestPlotAlignRight: !1,
            roundToPlace: "1",
            commas: !1,
            showInViz: !1,
            forestPlotStartingPoint: 0,
            name: "Data_Value",
            order: 3
          },
          Data_Value_Type: {
            label: "Data_Value_Type",
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
            name: "Data_Value_Type"
          },
          Demographic: {
            label: "Demographic",
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
            name: "Demographic",
            order: 2
          },
          Footnotes: {
            label: "Footnotes",
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
            name: "Footnotes"
          },
          High_CI: {
            label: "High_CI",
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
            name: "High_CI"
          },
          Indicator: {
            label: "Indicator",
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
            name: "Indicator"
          },
          Indicator_Description: {
            label: "Indicator_Description",
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
            name: "Indicator_Description"
          },
          Indicator_Long_Name: {
            label: "Indicator_Long_Name",
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
            name: "Indicator_Long_Name"
          },
          Location: {
            label: "Location",
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
            name: "Location"
          },
          LocationAbbr: {
            label: "LocationAbbr",
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
            name: "LocationAbbr"
          },
          LocationDesc: {
            label: "LocationDesc",
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
            name: "LocationDesc"
          },
          LocationDisplayOrder: {
            label: "LocationDisplayOrder",
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
            name: "LocationDisplayOrder"
          },
          Low_CI: {
            label: "Low_CI",
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
            name: "Low_CI"
          },
          QuestionDisplayOrder: {
            label: "QuestionDisplayOrder",
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
            name: "QuestionDisplayOrder"
          },
          Response: {
            label: "Response",
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
            name: "Response"
          },
          SubCategory_Demographic: {
            label: "SubCategory_Demographic",
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
            name: "SubCategory_Demographic"
          },
          SubCategory_Demographic_Filter: {
            label: "SubCategory_Demographic_Filter",
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
            name: "SubCategory_Demographic_Filter"
          },
          SubcategoryDisplayOrder: {
            label: "SubcategoryDisplayOrder",
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
            name: "SubcategoryDisplayOrder"
          },
          Subcategory_Agegroup: {
            label: "Subcategory_Agegroup",
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
            name: "Subcategory_Agegroup"
          },
          Subcategory_Agegroup_Filter: {
            label: "Subcategory_Agegroup_Filter",
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
            name: "Subcategory_Agegroup_Filter"
          },
          Year: {
            label: "Year",
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
            name: "Year"
          },
          createdon: {
            label: "createdon",
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
            name: "createdon"
          },
          Category_DisplayOrder: {
            label: "Category_DisplayOrder",
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
            name: "Category_DisplayOrder"
          },
          Createdon: {
            label: "Createdon",
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
            name: "Createdon"
          },
          Indicator_DisplayOrder: {
            label: "Indicator_DisplayOrder",
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
            name: "Indicator_DisplayOrder"
          },
          Location_DisplayOrder: {
            label: "Location_DisplayOrder",
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
            name: "Location_DisplayOrder"
          },
          Question: {
            label: "Question",
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
            name: "Question"
          },
          Question_DisplayOrder: {
            label: "Question_DisplayOrder",
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
            name: "Question_DisplayOrder"
          },
          ShowChart: {
            label: "ShowChart",
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
            name: "ShowChart"
          },
          Response_DisplayOrder: {
            label: "Response_DisplayOrder",
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
            name: "Response_DisplayOrder"
          },
          Subcategory_Agegroup_DisplayOrder: {
            label: "Subcategory_Agegroup_DisplayOrder",
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
            name: "Subcategory_Agegroup_DisplayOrder"
          },
          Subcategory_Demographic: {
            label: "Subcategory_Demographic",
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
            name: "Subcategory_Demographic"
          },
          Subcategory_Demographic_DisplayOrder: {
            label: "Subcategory_Demographic_DisplayOrder",
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
            name: "Subcategory_Demographic_DisplayOrder"
          },
          Subcategory_Demographic_Filter: {
            label: "Subcategory_Demographic_Filter",
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
            name: "Subcategory_Demographic_Filter"
          },
          Year_Filter: {
            label: "Year_Filter",
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
            name: "Year_Filter"
          },
          Series: {
            label: "Series",
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
            name: "Series"
          }
        },
        dataFormat: {},
        visualizationType: "table",
        dataDescription: {
          horizontal: !1,
          series: !1
        },
        dataKey: "Specific Year Filter",
        general: {
          showDownloadButton: !0
        }
      },
      dashboardFilters1736967744405: {
        filters: [],
        filterBehavior: "Filter Change",
        newViz: !0,
        openModal: !0,
        uid: "dashboardFilters1736967744405",
        type: "dashboardFilters",
        sharedFilterIndexes: [
          3,
          4
        ],
        visualizationType: "dashboardFilters",
        autoLoad: !0
      },
      dashboardFilters1737488646480: {
        filters: [],
        filterBehavior: "Filter Change",
        newViz: !0,
        openModal: !0,
        uid: "dashboardFilters1737488646480",
        type: "dashboardFilters",
        sharedFilterIndexes: [
          5,
          6,
          7
        ],
        visualizationType: "dashboardFilters",
        autoLoad: !0
      }
    },
    rows: [
      {
        columns: [
          {
            width: 12,
            widget: "dashboardFilters1736197709119"
          },
          {},
          {}
        ]
      },
      {
        columns: [
          {
            width: 12,
            widget: "dashboardFilters1737488646480"
          }
        ],
        uuid: 1737488639584
      },
      {
        columns: [
          {
            width: 12,
            widget: "chart1736451559821"
          },
          {
            width: 12,
            widget: "table1736957971832"
          },
          {
            width: 12
          }
        ],
        toggle: !0,
        uuid: 1737488639584,
        dataDescription: {},
        dataKey: ""
      }
    ],
    label: "View by Location"
  },
  {
    label: "View by Topic",
    visualizations: {
      dashboardFilters1737569479559: {
        filters: [],
        filterBehavior: "Apply Button",
        newViz: !0,
        openModal: !0,
        uid: "dashboardFilters1737569479559",
        type: "dashboardFilters",
        sharedFilterIndexes: [
          0,
          1
        ],
        visualizationType: "dashboardFilters",
        applyFiltersButtonText: "View Results"
      },
      dashboardFilters1737570017053: {
        filters: [],
        filterBehavior: "Filter Change",
        newViz: !0,
        openModal: !0,
        uid: "dashboardFilters1737570017053",
        type: "dashboardFilters",
        sharedFilterIndexes: [
          2,
          3,
          4
        ],
        visualizationType: "dashboardFilters",
        autoLoad: !0
      },
      map1737570504911: {
        annotations: [],
        general: {
          geoType: "us",
          navigationTarget: "_self",
          noStateFoundMessage: "Map Unavailable",
          annotationDropdownText: "Annotations",
          geoBorderColor: "darkGray",
          headerColor: "theme-blue",
          title: "Map",
          showTitle: !1,
          showSidebar: !0,
          showDownloadButton: !0,
          showDownloadMediaButton: !1,
          displayAsHex: !1,
          displayStateLabels: !0,
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
          expandDataTable: !1,
          showDownloadImgButton: !0
        },
        type: "map",
        color: "pinkpurple",
        columns: {
          geo: {
            name: "LocationAbbr",
            label: "Location",
            tooltip: !1,
            dataTable: !0
          },
          primary: {
            dataTable: !0,
            tooltip: !0,
            prefix: "",
            suffix: "",
            name: "Data_Value",
            label: "",
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
            label: "New Column",
            dataTable: !1,
            tooltips: !1,
            prefix: "",
            suffix: "",
            name: "Subcategory_Demographic",
            tooltip: !0
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
          title: "Percentage (%)",
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
          expanded: !0,
          limitHeight: !1,
          height: "",
          caption: "",
          showDownloadUrl: !1,
          showDataTableLink: !1,
          showDownloadLinkBelow: !0,
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
        uid: "map1737570504911",
        dataDescription: {
          series: !1,
          horizontal: !1
        },
        dataKey: "Explore by Topic Visualization Row",
        version: "4.25.1",
        migrations: {
          addColorMigration: !0
        }
      }
    },
    dashboard: {
      sharedFilters: [
        {
          key: "Category",
          showDropdown: !0,
          type: "urlfilter",
          apiFilter: {
            apiEndpoint: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2003&$select=DISTINCT%20Category&$order=Category",
            valueSelector: "Category",
            textSelector: ""
          },
          usedBy: [
            2
          ],
          tier: 1
        },
        {
          key: "Indicator",
          showDropdown: !0,
          type: "urlfilter",
          apiFilter: {
            apiEndpoint: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2003&$select=DISTINCT%20Indicator&$order=Indicator",
            valueSelector: "Indicator",
            textSelector: ""
          },
          parents: [
            "Category"
          ],
          usedBy: [
            2
          ],
          tier: 2
        },
        {
          key: "Year",
          showDropdown: !0,
          type: "urlfilter",
          apiFilter: {
            apiEndpoint: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2004&$select=DISTINCT%20Year_Filter&$order=Year_Filter",
            valueSelector: "Year_Filter",
            textSelector: ""
          },
          usedBy: [
            "map1737570504911"
          ],
          tier: 1
        },
        {
          key: "Age Group",
          showDropdown: !0,
          type: "urlfilter",
          apiFilter: {
            apiEndpoint: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2004&$select=DISTINCT%20Subcategory_Agegroup&$order=Subcategory_Agegroup",
            valueSelector: "Subcategory_Agegroup",
            textSelector: ""
          },
          parents: [
            "Year"
          ],
          usedBy: [
            "map1737570504911"
          ],
          tier: 2
        },
        {
          key: "Demographic",
          showDropdown: !0,
          type: "urlfilter",
          filterStyle: "nested-dropdown",
          apiFilter: {
            apiEndpoint: "https://nccd-proxy-dev.cdc.gov/NCCD_COVE_API?$datakey=adhap_cove_location_topic&$limit=2004&$select=DISTINCT%20Demographic,%20SubCategory_Demographic&$order=Demographic,SubCategory_Demographic",
            subgroupValueSelector: "SubCategory_Demographic",
            textSelector: "",
            valueSelector: "Demographic"
          },
          subGrouping: {
            columnName: "",
            setByQueryParameter: "",
            valuesLookup: {}
          },
          usedBy: [
            "map1737570504911"
          ],
          parents: [
            "Year ",
            "Age Group  "
          ],
          tier: 1
        }
      ]
    },
    rows: [
      {
        columns: [
          {
            width: 12,
            widget: "dashboardFilters1737569479559"
          }
        ]
      },
      {
        columns: [
          {
            width: 12,
            widget: "dashboardFilters1737570017053"
          }
        ]
      },
      {
        columns: [
          {
            width: 12,
            widget: "map1737570504911"
          }
        ]
      }
    ],
    type: "dashboard",
    version: "4.25.1",
    migrations: {
      addColorMigration: !0
    }
  }
], Ga = {
  addColorMigration: !0
}, $a = {}, Ka = {
  table: Pa,
  errors: Na,
  currentViewport: Da,
  id: Va,
  category: Ha,
  type: Ma,
  subType: xa,
  orientation: Ia,
  icon: Ua,
  content: Ea,
  datasets: Wa,
  visualizationType: Oa,
  activeVizButtonID: Ba,
  version: za,
  uuid: _a,
  multiDashboards: qa,
  migrations: Ga,
  runtime: $a
}, Qa = {
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
}, Ja = [
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
], ja = {
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
}, Za = {
  label: "Data Table",
  show: !0
}, Xa = [
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
], et = "dashboard_aggregate_example_no_add_fullname.csv", at = "file", tt = "dashboard", ot = 1628879384203, nt = {
  dashboard: Qa,
  rows: Ja,
  visualizations: ja,
  table: Za,
  data: Xa,
  dataFileName: et,
  dataFileSourceType: at,
  type: tt,
  uuid: ot
}, it = {
  theme: "theme-blue",
  title: "Dashboard with No Filters"
}, rt = [
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
], st = {
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
}, lt = {
  label: "Data Table",
  show: !0
}, ct = "dashboard", dt = 1629144022257, pt = {
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
}, mt = {
  dashboard: it,
  rows: rt,
  visualizations: st,
  table: lt,
  type: ct,
  uuid: dt,
  datasets: pt
}, ut = {
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
}, Lt = [
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
], Tt = {
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
}, ht = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, yt = !0, At = {
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
}, gt = "dashboard", wt = {}, Rt = "4.24.9", ft = 1721943961122, St = {
  dashboard: ut,
  rows: Lt,
  visualizations: Tt,
  table: ht,
  newViz: yt,
  datasets: At,
  type: gt,
  runtime: wt,
  version: Rt,
  uuid: ft
}, Yt = {
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
}, vt = [
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
], bt = {
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
}, kt = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, Ft = {
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
}, Ct = "dashboard", Pt = 1699383537668, Nt = "Filter Change", Dt = {
  dashboard: Yt,
  rows: vt,
  visualizations: bt,
  table: kt,
  datasets: Ft,
  type: Ct,
  uuid: Pt,
  filterBehavior: Nt
}, Vt = {
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
}, Ht = [
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
], Mt = {
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
}, xt = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, It = {}, Ut = "dashboard", Et = {}, Wt = "4.23", H = {
  dashboard: Vt,
  rows: Ht,
  visualizations: Mt,
  table: xt,
  datasets: It,
  type: Ut,
  runtime: Et,
  version: Wt
}, Ot = 0, Bt = [
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
], zt = {
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
}, _t = {
  activeDashboard: Ot,
  multiDashboards: Bt,
  datasets: zt
}, qt = {
  theme: "theme-blue"
}, Gt = [
  [
    {
      width: 12,
      widget: "table1707840146431"
    },
    {},
    {}
  ]
], $t = {
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
}, Kt = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Qt = !0, Jt = {
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
}, jt = "dashboard", Zt = {}, Xt = {
  dashboard: qt,
  rows: Gt,
  visualizations: $t,
  table: Kt,
  newViz: Qt,
  datasets: Jt,
  type: jt,
  runtime: Zt
}, eo = {
  theme: "theme-blue",
  sharedFilters: []
}, ao = [
  [
    {
      width: 12,
      widget: "table1707935263149"
    },
    {},
    {}
  ]
], to = {
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
}, oo = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, no = {
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
}, io = "dashboard", ro = {}, so = [
  1,
  2,
  3
], lo = {
  dashboard: eo,
  rows: ao,
  visualizations: to,
  table: oo,
  datasets: no,
  type: io,
  runtime: ro,
  data: so
}, co = {
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
}, uo = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Lo = {
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
}, To = "dashboard", ho = {}, yo = [
  1,
  2,
  3
], Ao = {
  dashboard: co,
  rows: po,
  visualizations: mo,
  table: uo,
  datasets: Lo,
  type: To,
  runtime: ho,
  data: yo
}, go = {
  theme: "theme-blue"
}, wo = [
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
], Ro = {
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
}, fo = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, So = {
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
}, Yo = [], vo = "dashboard", bo = "", ko = "", Fo = "", Co = [], Po = [], No = {}, Do = {
  dashboard: go,
  rows: wo,
  visualizations: Ro,
  table: fo,
  datasets: So,
  data: Yo,
  type: vo,
  dataUrl: bo,
  dataFileName: ko,
  dataFileSourceType: Fo,
  dataDescription: Co,
  formattedData: Po,
  runtime: No
}, Vo = {
  theme: "theme-blue",
  description: "",
  title: "Bump Chart"
}, Ho = [
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
], Mo = {
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
}, xo = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Io = {
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
}, Uo = "dashboard", Eo = "4.24.4", Wo = {}, Oo = 1719606681758, Bo = {
  dashboard: Vo,
  rows: Ho,
  visualizations: Mo,
  table: xo,
  datasets: Io,
  type: Uo,
  version: Eo,
  runtime: Wo,
  uuid: Oo
}, zo = {
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
}, _o = [
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
], qo = {
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
}, Go = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, $o = {
  "hidden-methodology": {
    dataUrl: "http://test.gov/methodology"
  }
}, Ko = "dashboard", Qo = {}, Jo = "4.24.9", jo = 1723488346870, Zo = {
  dashboard: zo,
  rows: _o,
  visualizations: qo,
  table: Go,
  datasets: $o,
  type: Ko,
  runtime: Qo,
  version: Jo,
  uuid: jo
};
function M(a, e) {
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
    const [Qe, Je] = e;
    return s[Qe] === Je;
  }).map((s) => n === "*" ? s : { [n]: s[n] });
  return l ? V.uniqBy(r, n) : r;
}
const Xo = {
  theme: "theme-blue",
  sharedFilters: [],
  description: "Dash Description",
  title: "Dashboard Name"
}, en = [
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
], an = {
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
}, tn = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, on = {
  "/bird-flu/modules/situation-summary/national-flu-surveillance.csv": {
    dataFileSize: 39,
    dataFileName: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv",
    dataFileSourceType: "url",
    dataFileFormat: "OCTET-STREAM",
    preview: !0,
    dataUrl: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
}, nn = "dashboard", rn = "4.24.10", sn = 1722537847428, ln = {
  dashboard: Xo,
  rows: en,
  visualizations: an,
  table: tn,
  datasets: on,
  type: nn,
  version: rn,
  uuid: sn
}, cn = {
  theme: "theme-blue",
  sharedFilters: [],
  description: "Dash Description",
  title: ""
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
  dashboard: cn,
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
  description: "",
  title: "Title no description"
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
}, fn = {
  "/bird-flu/modules/situation-summary/national-flu-surveillance.csv": {
    dataFileSize: 39,
    dataFileName: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv",
    dataFileSourceType: "url",
    dataFileFormat: "OCTET-STREAM",
    preview: !0,
    dataUrl: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
}, Sn = "dashboard", Yn = "4.24.10", vn = 1722537847428, bn = {
  dashboard: An,
  rows: gn,
  visualizations: wn,
  table: Rn,
  datasets: fn,
  type: Sn,
  version: Yn,
  uuid: vn
}, kn = {
  theme: "theme-blue",
  sharedFilters: [],
  description: "",
  title: ""
}, Fn = [
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
}, Pn = {
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
}, Dn = "dashboard", Vn = "4.24.10", Hn = 1722537847428, Mn = {
  dashboard: kn,
  rows: Fn,
  visualizations: Cn,
  table: Pn,
  datasets: Nn,
  type: Dn,
  version: Vn,
  uuid: Hn
}, zi = {
  title: "Components/Pages/Dashboard",
  component: je
}, c = {
  args: {
    config: Ka,
    isEditor: !1
  }
}, d = {
  args: {
    config: nt,
    isEditor: !0
  }
}, p = {
  args: {
    config: mt,
    isEditor: !1
  }
}, m = {
  args: {
    config: Bo,
    isEditor: !1
  }
}, u = {
  args: {
    config: Dt,
    isEditor: !1
  }
}, L = {
  args: {
    config: Ca,
    isEditor: !1
  }
}, T = {
  args: {
    config: Xt,
    isEditor: !1
  }
}, h = {
  args: {
    config: Do,
    isEditor: !1
  }
}, y = {
  args: {
    config: Ao,
    isEditor: !1
  }
}, A = {
  args: {
    config: lo,
    isEditor: !1
  }
}, g = {
  args: {
    config: St,
    isEditor: !1
  }
};
P.seed(123);
const Ge = V.times(5, P.location.country), xn = V.times(3, (a) => `category-${a + 1}`), $e = [];
Ge.forEach((a, e) => {
  xn.forEach((t, o) => {
    (e + o) % 3 !== 0 && $e.push({
      Country: a,
      "Sample Categories": t,
      Data: P.number.int({
        min: 5,
        max: 50
      })
    });
  });
});
const In = Ge.map((a, e) => ({
  Country: a,
  symbol: Ze[e][0],
  text: P.lorem.sentence()
})), Ke = {
  "valid-world-data.json": {
    data: $e
  },
  "footnote-data.json": {
    data: In
  }
}, w = {
  args: {
    config: _t,
    isEditor: !1
  }
}, Un = [{
  ...H.rows[0],
  footnotesId: "footnote123"
}], En = {
  dataKey: "footnote-data.json",
  dynamicFootnotes: {
    symbolColumn: "symbol",
    textColumn: "text"
  },
  staticFootnotes: [{
    symbol: "**",
    text: "This is a static Footnote"
  }]
}, Wn = {
  ...H.visualizations,
  footnote123: En
}, R = {
  args: {
    config: {
      ...H,
      datasets: Ke,
      rows: Un,
      visualizations: Wn
    },
    isEditor: !1
  }
}, i = (a) => new Promise((e) => setTimeout(e, a)), x = {
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
      body: V.times(5, (e) => ({
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
        IndicatorID: "ALC04",
        TopicID: "ALC",
        DataSource: null,
        Indicator: null,
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
      body: M("distinct year")
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
      body: M("*", ["methodology", a])
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
      body: M("distinct methodology", ["year", a])
    }
  }))]
}, f = {
  args: {
    config: sa,
    isEditor: !1
  },
  parameters: {
    fetchMock: x
  },
  play: async ({
    canvasElement: a
  }) => {
    const e = N(a), t = D.setup();
    await i(1e3);
    const o = e.getByLabelText("Category", {
      selector: "select"
    });
    await t.selectOptions(o, ["topicId"]);
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
}, S = {
  args: {
    config: ha,
    isEditor: !1
  },
  parameters: {
    fetchMock: x
  },
  play: async ({
    canvasElement: a
  }) => {
    const e = N(a), t = D.setup();
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
}, Y = {
  args: {
    config: Zo,
    isEditor: !1
  },
  parameters: {
    fetchMock: x
  },
  play: async ({
    canvasElement: a
  }) => {
    const e = N(a), t = D.setup();
    await i(1e3);
    const o = e.getByLabelText("Year", {
      selector: "select"
    });
    await t.selectOptions(o, ["1999"]), await t.click(e.getByText("GO!")), await i(500), e.getAllByText("alabama"), e.getAllByText("alaska"), e.getAllByText("arizona"), await t.selectOptions(o, ["2012"]), await t.click(e.getByText("GO!")), await i(500), e.getAllByText("new york"), e.getAllByText("new jersey"), e.getAllByText("new mexico");
  }
}, v = {
  args: {
    config: {
      ...H,
      datasets: Ke
    },
    isEditor: !1
  },
  play: async ({
    canvasElement: a
  }) => {
    const e = N(a), t = D.setup();
    await i(1e3);
    const o = e.getByLabelText("Category", {
      selector: "select"
    });
    e.getAllByText("Paraguay"), e.getAllByText("Poland"), e.getAllByText("Iraq"), await t.selectOptions(o, ["category-3"]), e.getAllByText("Paraguay"), e.getAllByText("Ethiopia"), e.getAllByText("Iraq"), await t.selectOptions(o, ["category-1"]), e.getAllByText("Poland"), e.getAllByText("Ethiopia"), e.getAllByText("Curacao");
  }
}, b = {
  args: {
    config: ln,
    isEditor: !1
  }
}, k = {
  args: {
    config: yn,
    isEditor: !1
  }
}, F = {
  args: {
    config: bn,
    isEditor: !1
  }
}, C = {
  args: {
    config: Mn,
    isEditor: !1
  }
};
var I, U, E;
c.parameters = {
  ...c.parameters,
  docs: {
    ...(I = c.parameters) == null ? void 0 : I.docs,
    source: {
      originalSource: `{
  args: {
    config: ExampleConfig_1,
    isEditor: false
  }
}`,
      ...(E = (U = c.parameters) == null ? void 0 : U.docs) == null ? void 0 : E.source
    }
  }
};
var W, O, B;
d.parameters = {
  ...d.parameters,
  docs: {
    ...(W = d.parameters) == null ? void 0 : W.docs,
    source: {
      originalSource: `{
  args: {
    config: ExampleConfig_2,
    isEditor: true
  }
}`,
      ...(B = (O = d.parameters) == null ? void 0 : O.docs) == null ? void 0 : B.source
    }
  }
};
var z, _, q;
p.parameters = {
  ...p.parameters,
  docs: {
    ...(z = p.parameters) == null ? void 0 : z.docs,
    source: {
      originalSource: `{
  args: {
    config: ExampleConfig_3,
    isEditor: false
  }
}`,
      ...(q = (_ = p.parameters) == null ? void 0 : _.docs) == null ? void 0 : q.source
    }
  }
};
var G, $, K;
m.parameters = {
  ...m.parameters,
  docs: {
    ...(G = m.parameters) == null ? void 0 : G.docs,
    source: {
      originalSource: `{
  args: {
    config: BumpChartConfig,
    isEditor: false
  }
}`,
      ...(K = ($ = m.parameters) == null ? void 0 : $.docs) == null ? void 0 : K.source
    }
  }
};
var Q, J, j;
u.parameters = {
  ...u.parameters,
  docs: {
    ...(Q = u.parameters) == null ? void 0 : Q.docs,
    source: {
      originalSource: `{
  args: {
    config: Dashboard_Filter,
    isEditor: false
  }
}`,
      ...(j = (J = u.parameters) == null ? void 0 : J.docs) == null ? void 0 : j.source
    }
  }
};
var Z, X, ee;
L.parameters = {
  ...L.parameters,
  docs: {
    ...(Z = L.parameters) == null ? void 0 : Z.docs,
    source: {
      originalSource: `{
  args: {
    config: APIFilterErrorConfig,
    isEditor: false
  }
}`,
      ...(ee = (X = L.parameters) == null ? void 0 : X.docs) == null ? void 0 : ee.source
    }
  }
};
var ae, te, oe;
T.parameters = {
  ...T.parameters,
  docs: {
    ...(ae = T.parameters) == null ? void 0 : ae.docs,
    source: {
      originalSource: `{
  args: {
    config: StandaloneTable,
    isEditor: false
  }
}`,
      ...(oe = (te = T.parameters) == null ? void 0 : te.docs) == null ? void 0 : oe.source
    }
  }
};
var ne, ie, re;
h.parameters = {
  ...h.parameters,
  docs: {
    ...(ne = h.parameters) == null ? void 0 : ne.docs,
    source: {
      originalSource: `{
  args: {
    config: ToggleExampleConfig,
    isEditor: false
  }
}`,
      ...(re = (ie = h.parameters) == null ? void 0 : ie.docs) == null ? void 0 : re.source
    }
  }
};
var se, le, ce;
y.parameters = {
  ...y.parameters,
  docs: {
    ...(se = y.parameters) == null ? void 0 : se.docs,
    source: {
      originalSource: `{
  args: {
    config: PivotFitlerConfig,
    isEditor: false
  }
}`,
      ...(ce = (le = y.parameters) == null ? void 0 : le.docs) == null ? void 0 : ce.source
    }
  }
};
var de, pe, me;
A.parameters = {
  ...A.parameters,
  docs: {
    ...(de = A.parameters) == null ? void 0 : de.docs,
    source: {
      originalSource: `{
  args: {
    config: GroupPivotConfig,
    isEditor: false
  }
}`,
      ...(me = (pe = A.parameters) == null ? void 0 : pe.docs) == null ? void 0 : me.source
    }
  }
};
var ue, Le, Te;
g.parameters = {
  ...g.parameters,
  docs: {
    ...(ue = g.parameters) == null ? void 0 : ue.docs,
    source: {
      originalSource: `{
  args: {
    config: SingleStateDashboardFilters,
    isEditor: false
  }
}`,
      ...(Te = (Le = g.parameters) == null ? void 0 : Le.docs) == null ? void 0 : Te.source
    }
  }
};
var he, ye, Ae;
w.parameters = {
  ...w.parameters,
  docs: {
    ...(he = w.parameters) == null ? void 0 : he.docs,
    source: {
      originalSource: `{
  args: {
    config: MultiDashboardConfig,
    isEditor: false
  }
}`,
      ...(Ae = (ye = w.parameters) == null ? void 0 : ye.docs) == null ? void 0 : Ae.source
    }
  }
};
var ge, we, Re;
R.parameters = {
  ...R.parameters,
  docs: {
    ...(ge = R.parameters) == null ? void 0 : ge.docs,
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
      ...(Re = (we = R.parameters) == null ? void 0 : we.docs) == null ? void 0 : Re.source
    }
  }
};
var fe, Se, Ye;
f.parameters = {
  ...f.parameters,
  docs: {
    ...(fe = f.parameters) == null ? void 0 : fe.docs,
    source: {
      originalSource: `{
  args: {
    config: ((APIFiltersMapData as unknown) as Config),
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
      ...(Ye = (Se = f.parameters) == null ? void 0 : Se.docs) == null ? void 0 : Ye.source
    }
  }
};
var ve, be, ke;
S.parameters = {
  ...S.parameters,
  docs: {
    ...(ve = S.parameters) == null ? void 0 : ve.docs,
    source: {
      originalSource: `{
  args: {
    config: ((APIFiltersChartData as unknown) as Config),
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
      ...(ke = (be = S.parameters) == null ? void 0 : be.docs) == null ? void 0 : ke.source
    }
  }
};
var Fe, Ce, Pe;
Y.parameters = {
  ...Y.parameters,
  docs: {
    ...(Fe = Y.parameters) == null ? void 0 : Fe.docs,
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
      ...(Pe = (Ce = Y.parameters) == null ? void 0 : Ce.docs) == null ? void 0 : Pe.source
    }
  }
};
var Ne, De, Ve;
v.parameters = {
  ...v.parameters,
  docs: {
    ...(Ne = v.parameters) == null ? void 0 : Ne.docs,
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
      ...(Ve = (De = v.parameters) == null ? void 0 : De.docs) == null ? void 0 : Ve.source
    }
  }
};
var He, Me, xe;
b.parameters = {
  ...b.parameters,
  docs: {
    ...(He = b.parameters) == null ? void 0 : He.docs,
    source: {
      originalSource: `{
  args: {
    config: TopSpacing_1,
    isEditor: false
  }
}`,
      ...(xe = (Me = b.parameters) == null ? void 0 : Me.docs) == null ? void 0 : xe.source
    }
  }
};
var Ie, Ue, Ee;
k.parameters = {
  ...k.parameters,
  docs: {
    ...(Ie = k.parameters) == null ? void 0 : Ie.docs,
    source: {
      originalSource: `{
  args: {
    config: TopSpacing_2,
    isEditor: false
  }
}`,
      ...(Ee = (Ue = k.parameters) == null ? void 0 : Ue.docs) == null ? void 0 : Ee.source
    }
  }
};
var We, Oe, Be;
F.parameters = {
  ...F.parameters,
  docs: {
    ...(We = F.parameters) == null ? void 0 : We.docs,
    source: {
      originalSource: `{
  args: {
    config: TopSpacing_3,
    isEditor: false
  }
}`,
      ...(Be = (Oe = F.parameters) == null ? void 0 : Oe.docs) == null ? void 0 : Be.source
    }
  }
};
var ze, _e, qe;
C.parameters = {
  ...C.parameters,
  docs: {
    ...(ze = C.parameters) == null ? void 0 : ze.docs,
    source: {
      originalSource: `{
  args: {
    config: TopSpacing_4,
    isEditor: false
  }
}`,
      ...(qe = (_e = C.parameters) == null ? void 0 : _e.docs) == null ? void 0 : qe.source
    }
  }
};
const _i = ["Example_1", "Example_2", "Example_3", "Bump_Chart_Dashboard", "Dashboard_Filters", "API_Filter_Error", "StandAloneTable", "ToggleExample", "PivotFilter", "GroupPivotFilter", "SingleStateDashboardWithFilters", "MultiDashboard", "Footnotes", "RegressionAPIFiltersMap", "RegressionAPIFiltersChart", "RegressionHiddenFilter", "RegressionMultiVisualization", "Top_Spacing_1", "Top_Spacing_2", "Top_Spacing_3", "Top_Spacing_4"];
export {
  L as API_Filter_Error,
  m as Bump_Chart_Dashboard,
  u as Dashboard_Filters,
  c as Example_1,
  d as Example_2,
  p as Example_3,
  R as Footnotes,
  A as GroupPivotFilter,
  w as MultiDashboard,
  y as PivotFilter,
  S as RegressionAPIFiltersChart,
  f as RegressionAPIFiltersMap,
  Y as RegressionHiddenFilter,
  v as RegressionMultiVisualization,
  g as SingleStateDashboardWithFilters,
  T as StandAloneTable,
  h as ToggleExample,
  b as Top_Spacing_1,
  k as Top_Spacing_2,
  F as Top_Spacing_3,
  C as Top_Spacing_4,
  _i as __namedExportsOrder,
  zi as default
};
