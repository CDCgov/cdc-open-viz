import { f as U } from "./storybook-index-4ddb77d9.es.js";
import { M as ua } from "./storybook-CdcDashboard-1ef79036.es.js";
import { w as D, u as E } from "./storybook-index-4710fe7a.es.js";
import { _ as s } from "./storybook-lodash-a4231e1c.es.js";
import { f as pa } from "./storybook-DataTable-577422ab.es.js";
import "./storybook-jsx-runtime-ea6e0d87.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-ConfigContext-54fe77a4.es.js";
import "./storybook-linear-5c281d48.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Tooltip-7cf39805.es.js";
import "./storybook-index-80cf478c.es.js";
import "./storybook-Text-0ce4510d.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-Icon-e250778e.es.js";
import "./storybook-Inputs-f2c63984.es.js";
import "./storybook-useDebounce-5d0290fd.es.js";
import "./storybook-Dropdown-1c93166f.es.js";
import "./storybook-Filters-caf19344.es.js";
import "./storybook-Button-f953e457.es.js";
import "./storybook-MultiSelect-cda00383.es.js";
import "./storybook-Loader-0256c39d.es.js";
import "./storybook-FilterStyles-fd509eb9.es.js";
import "./storybook-NestedDropdown-92b50717.es.js";
import "./storybook-index-8cf78369.es.js";
import "./storybook-extends-0a3e0827.es.js";
import "./storybook-tiny-invariant-9f3340e2.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-getViewport-cf99c09b.es.js";
import "./storybook-index-31bf6905.es.js";
import "./storybook-fetchRemoteData-d0119f0b.es.js";
import "./storybook-papaparse.min-9df418d0.es.js";
import "./storybook-viewports-61111b6b.es.js";
import "./storybook-DataTransform-d4bb56a2.es.js";
import "./storybook-CdcChartComponent-9be245f2.es.js";
import "./storybook-useDataVizClasses-3bf30247.es.js";
import "./storybook-index-8e186da8.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-colorPalettes-bc80e395.es.js";
import "./storybook-linear-7d6b225d.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-BlurStrokeText-f87cf8cc.es.js";
import "./storybook-InputSelect-368b8698.es.js";
import "./storybook-Accordion-e71370da.es.js";
import "./storybook-coveUpdateWorker-2b7600bb.es.js";
import "./storybook-CdcDataBite-479004d8.es.js";
import "./storybook-updateFieldFactory-c006040a.es.js";
import "./storybook-CdcMapComponent-6b9eeb8c.es.js";
import "./storybook-context-0403d744.es.js";
import "./storybook-CdcWaffleChart-e9ad7d91.es.js";
import "./storybook-editor-8aca7312.es.js";
import "./storybook-CdcMarkupInclude-7511c7d3.es.js";
import "./storybook-DataDesigner-9363c314.es.js";
import "./storybook-Card-3d4604ee.es.js";
import "./storybook-DashboardFilters-9b23b8a8.es.js";
import "./storybook-Footnotes-00fcc704.es.js";
import "./storybook-index-398c73a4.es.js";
import "./storybook-Table-7ddd1662.es.js";
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
], ya = {
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
    },
    table: {}
  }
}, ha = "dashboard", Aa = {
  data3: {
    dataUrl: "http://test.gov/api/POC/TableData?DataValueTypeId=CRDMEDN"
  }
}, Ra = {}, wa = "Apply Button", Sa = {}, ga = 1684783370106, Ya = {
  dashboard: La,
  rows: Ta,
  visualizations: ya,
  type: ha,
  datasets: Aa,
  table: Ra,
  filterBehavior: wa,
  runtime: Sa,
  uuid: ga
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
], ka = {
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
}, Fa = "dashboard", ba = {
  data3: {
    dataUrl: "http://test.gov/api/POC/TableData"
  }
}, Ca = "Apply Button", Na = {}, Ha = 1684783370106, Ma = {
  dashboard: fa,
  rows: va,
  visualizations: ka,
  type: Fa,
  datasets: ba,
  filterBehavior: Ca,
  runtime: Na,
  uuid: Ha
}, Va = {
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
}, Ua = [
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
], Da = {
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
}, Ea = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showDownloadLinkBelow: !0,
  showVertical: !0
}, Ia = !0, xa = {
  "https://nccd-cove-public-api.apps.ecpaas-dev.cdc.gov/od-public?$datakey=brfss_prevalence_cove_explore_by_topic": {
    dataFileSize: 35061,
    dataFileName: "https://nccd-cove-public-api.apps.ecpaas-dev.cdc.gov/od-public?$datakey=brfss_prevalence_cove_explore_by_topic",
    dataFileSourceType: "url",
    dataFileFormat: "JSON",
    preview: !0,
    dataUrl: "https://nccd-cove-public-api.apps.ecpaas-dev.cdc.gov/od-public?$datakey=brfss_prevalence_cove_explore_by_topic"
  }
}, Pa = !1, Wa = "dashboard", Ba = "0.37", Oa = {
  type: "categorical",
  size: 75,
  maxTickRotation: 45,
  labelOffset: 0
}, za = {}, qa = "4.24.10", Ga = {
  dashboard: Va,
  rows: Ua,
  visualizations: Da,
  table: Ea,
  newViz: Ia,
  datasets: xa,
  isResponsiveTicks: Pa,
  type: Wa,
  barThickness: Ba,
  xAxis: Oa,
  runtime: za,
  version: qa
}, Ka = {
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
        "Federal",
        "Local",
        "State"
      ],
      active: "Federal",
      columnName: "Type"
    }
  ],
  title: "Amount Filtered by Location and Type "
}, $a = [
  [
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
  ],
  [
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
], _a = {
  "data-bite1628875468150": {
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
        Year: "2020",
        Type: "Federal",
        Amount: "1377"
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "Federal",
        Amount: "1436"
      }
    ],
    dataBite: "",
    dataFunction: "Mean (Average)",
    dataColumn: "Amount",
    bitePosition: "Left",
    biteFontSize: 24,
    fontSize: "medium",
    imageUrl: "",
    biteBody: `<span style="font-size: 20px;">Average Amount 2019-2021</span> <br>Reflects the average of the dashboard level filter selections within the timeframe available in the data.  In this case 2019-2021. 
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
    subtext: "Citation for Source ",
    title: "",
    theme: "theme-orange",
    shadow: !0,
    uid: "data-bite1628875468150",
    visualizationType: "data-bite",
    editing: !0
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
    data: [
      {
        Location: "Alaska",
        Year: "2019",
        Type: "Federal",
        Amount: "1377"
      },
      {
        Location: "Alaska",
        Year: "2020",
        Type: "Federal",
        Amount: "1377"
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "Federal",
        Amount: "1436"
      }
    ],
    series: [
      {
        dataKey: "Amount",
        type: "Bar"
      }
    ]
  },
  "data-bite1628876561387": {
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
        Year: "2020",
        Type: "Federal",
        Amount: "1377"
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "Federal",
        Amount: "1436"
      }
    ],
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
    visualizationType: "data-bite"
  },
  "data-bite1628877031319": {
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
        Year: "2020",
        Type: "Federal",
        Amount: "1377"
      },
      {
        Location: "Alaska",
        Year: "2021",
        Type: "Federal",
        Amount: "1436"
      }
    ],
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
        values: []
      }
    ],
    subtext: "Source ",
    title: "",
    theme: "theme-amber",
    shadow: !0,
    uid: "data-bite1628877031319",
    visualizationType: "data-bite"
  }
}, ja = {
  label: "Data Table",
  show: !0
}, Ja = [
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
], Qa = "dashboard_aggregate_example_no_add_fullname.csv", Za = "file", Xa = "dashboard", et = 1628875999137, at = {}, tt = {
  dashboard: Ka,
  rows: $a,
  visualizations: _a,
  table: ja,
  data: Ja,
  dataFileName: Qa,
  dataFileSourceType: Za,
  type: Xa,
  uuid: et,
  runtime: at
}, ot = {
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
}, nt = [
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
], it = {
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
}, rt = {
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
], st = "dashboard_aggregate_example_no_add_fullname.csv", lt = "file", mt = "dashboard", dt = 1628879384203, ut = {
  dashboard: ot,
  rows: nt,
  visualizations: it,
  table: rt,
  data: ct,
  dataFileName: st,
  dataFileSourceType: lt,
  type: mt,
  uuid: dt
}, pt = {
  theme: "theme-blue",
  title: "Dashboard with No Filters"
}, Lt = [
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
], Tt = {
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
}, ht = "dashboard", At = 1629144022257, Rt = {
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
}, wt = {
  dashboard: pt,
  rows: Lt,
  visualizations: Tt,
  table: yt,
  type: ht,
  uuid: At,
  datasets: Rt
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
}, gt = [
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
], Yt = {
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
}, ft = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, vt = !0, kt = {
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
}, Ft = "dashboard", bt = {}, Ct = "4.24.9", Nt = 1721943961122, Ht = {
  dashboard: St,
  rows: gt,
  visualizations: Yt,
  table: ft,
  newViz: vt,
  datasets: kt,
  type: Ft,
  runtime: bt,
  version: Ct,
  uuid: Nt
}, Mt = {
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
], Ut = {
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
}, Dt = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, Et = {
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
}, It = "dashboard", xt = 1699383537668, Pt = "Filter Change", Wt = {
  dashboard: Mt,
  rows: Vt,
  visualizations: Ut,
  table: Dt,
  datasets: Et,
  type: It,
  uuid: xt,
  filterBehavior: Pt
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
}, Ot = [
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
], zt = {
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
}, qt = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Gt = {}, Kt = "dashboard", $t = {}, _t = "4.23", I = {
  dashboard: Bt,
  rows: Ot,
  visualizations: zt,
  table: qt,
  datasets: Gt,
  type: Kt,
  runtime: $t,
  version: _t
}, jt = 0, Jt = [
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
], Qt = {
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
}, Zt = {
  activeDashboard: jt,
  multiDashboards: Jt,
  datasets: Qt
}, Xt = {
  theme: "theme-blue"
}, eo = [
  [
    {
      width: 12,
      widget: "table1707840146431"
    },
    {},
    {}
  ]
], ao = {
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
}, to = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, oo = !0, no = {
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
}, io = "dashboard", ro = {}, co = {
  dashboard: Xt,
  rows: eo,
  visualizations: ao,
  table: to,
  newViz: oo,
  datasets: no,
  type: io,
  runtime: ro
}, so = {
  theme: "theme-blue",
  sharedFilters: []
}, lo = [
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
}, po = {
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
}, Lo = "dashboard", To = {}, yo = [
  1,
  2,
  3
], ho = {
  dashboard: so,
  rows: lo,
  visualizations: mo,
  table: uo,
  datasets: po,
  type: Lo,
  runtime: To,
  data: yo
}, Ao = {
  theme: "theme-blue",
  sharedFilters: []
}, Ro = [
  [
    {
      width: 12,
      widget: "table1707935263149"
    },
    {},
    {}
  ]
], wo = {
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
}, go = {
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
}, Yo = "dashboard", fo = {}, vo = [
  1,
  2,
  3
], ko = {
  dashboard: Ao,
  rows: Ro,
  visualizations: wo,
  table: So,
  datasets: go,
  type: Yo,
  runtime: fo,
  data: vo
}, Fo = {
  theme: "theme-blue"
}, bo = [
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
], Co = {
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
}, Ho = {
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
}, Mo = [], Vo = "dashboard", Uo = "", Do = "", Eo = "", Io = [], xo = [], Po = {}, Wo = {
  dashboard: Fo,
  rows: bo,
  visualizations: Co,
  table: No,
  datasets: Ho,
  data: Mo,
  type: Vo,
  dataUrl: Uo,
  dataFileName: Do,
  dataFileSourceType: Eo,
  dataDescription: Io,
  formattedData: xo,
  runtime: Po
}, Bo = {
  theme: "theme-blue",
  description: "",
  title: "Bump Chart"
}, Oo = [
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
], zo = {
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
}, qo = {
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
}, Ko = "dashboard", $o = "4.24.4", _o = {}, jo = 1719606681758, Jo = {
  dashboard: Bo,
  rows: Oo,
  visualizations: zo,
  table: qo,
  datasets: Go,
  type: Ko,
  version: $o,
  runtime: _o,
  uuid: jo
}, Qo = {
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
}, Zo = [
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
], Xo = {
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
}, en = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, an = {
  "hidden-methodology": {
    dataUrl: "http://test.gov/methodology"
  }
}, tn = "dashboard", on = {}, nn = "4.24.9", rn = 1723488346870, cn = {
  dashboard: Qo,
  rows: Zo,
  visualizations: Xo,
  table: en,
  datasets: an,
  type: tn,
  runtime: on,
  version: nn,
  uuid: rn
};
function x(a, e) {
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
  ], o = a.split(" "), l = o[0] === "distinct", n = o.length === 2 ? o[1] : o[0], r = t.filter((c) => {
    if (!e)
      return !0;
    const [ma, da] = e;
    return c[ma] === da;
  }).map((c) => n === "*" ? c : { [n]: c[n] });
  return l ? s.uniqBy(r, n) : r;
}
const sn = {
  theme: "theme-blue",
  sharedFilters: [],
  description: "Dash Description",
  title: "Dashboard Name"
}, ln = [
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
], mn = {
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
}, dn = {
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
}, pn = "dashboard", Ln = "4.24.10", Tn = 1722537847428, yn = {
  dashboard: sn,
  rows: ln,
  visualizations: mn,
  table: dn,
  datasets: un,
  type: pn,
  version: Ln,
  uuid: Tn
}, hn = {
  theme: "theme-blue",
  sharedFilters: [],
  description: "Dash Description",
  title: ""
}, An = [
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
], Rn = {
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
}, wn = {
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
}, gn = "dashboard", Yn = "4.24.10", fn = 1722537847428, vn = {
  dashboard: hn,
  rows: An,
  visualizations: Rn,
  table: wn,
  datasets: Sn,
  type: gn,
  version: Yn,
  uuid: fn
}, kn = {
  theme: "theme-blue",
  sharedFilters: [],
  description: "",
  title: "Title no description"
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
], bn = {
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
}, Cn = {
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
}, Hn = "dashboard", Mn = "4.24.10", Vn = 1722537847428, Un = {
  dashboard: kn,
  rows: Fn,
  visualizations: bn,
  table: Cn,
  datasets: Nn,
  type: Hn,
  version: Mn,
  uuid: Vn
}, Dn = {
  theme: "theme-blue",
  sharedFilters: [],
  description: "",
  title: ""
}, En = [
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
], In = {
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
}, Pn = {
  "/bird-flu/modules/situation-summary/national-flu-surveillance.csv": {
    dataFileSize: 39,
    dataFileName: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv",
    dataFileSourceType: "url",
    dataFileFormat: "OCTET-STREAM",
    preview: !0,
    dataUrl: "/bird-flu/modules/situation-summary/national-flu-surveillance.csv"
  }
}, Wn = "dashboard", Bn = "4.24.10", On = 1722537847428, zn = {
  dashboard: Dn,
  rows: En,
  visualizations: In,
  table: xn,
  datasets: Pn,
  type: Wn,
  version: Bn,
  uuid: On
}, qn = {
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
}, _n = [], jn = "", Jn = "", Qn = "dashboard", Zn = 1628875999137, Xn = {}, ei = {
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
}, ai = "", ti = {}, oi = [], ni = "4.25.1", ii = {
  addColorMigration: !0
}, P = {
  dashboard: qn,
  rows: Gn,
  visualizations: Kn,
  table: $n,
  data: _n,
  dataFileName: jn,
  dataFileSourceType: Jn,
  type: Qn,
  uuid: Zn,
  runtime: Xn,
  datasets: ei,
  dataUrl: ai,
  dataDescription: ti,
  formattedData: oi,
  version: ni,
  migrations: ii
}, ia = s.cloneDeep(P), ra = s.cloneDeep(P);
ia.dashboard.sharedFilters[0].order = "desc";
ra.dashboard.sharedFilters[0].order = "cust";
const hr = {
  title: "Components/Pages/Dashboard",
  component: ua
}, m = {
  args: {
    config: P,
    isEditor: !1
  }
}, d = {
  args: {
    config: ia,
    isEditor: !1
  }
}, u = {
  args: {
    config: ra,
    isEditor: !1
  }
}, p = {
  args: {
    config: tt,
    isEditor: !1
  }
}, L = {
  args: {
    config: ut,
    isEditor: !1
  }
}, T = {
  args: {
    config: wt,
    isEditor: !1
  }
}, y = {
  args: {
    config: Jo,
    isEditor: !1
  }
}, h = {
  args: {
    config: Wt,
    isEditor: !1
  }
}, A = {
  args: {
    config: Ga,
    isEditor: !1
  }
}, R = {
  args: {
    config: co,
    isEditor: !1
  }
}, w = {
  args: {
    config: Wo,
    isEditor: !1
  }
}, S = {
  args: {
    config: ko,
    isEditor: !1
  }
}, g = {
  args: {
    config: ho,
    isEditor: !1
  }
}, Y = {
  args: {
    config: Ht,
    isEditor: !1
  }
};
U.seed(123);
const ca = s.times(5, U.location.country), ri = s.times(3, (a) => `category-${a + 1}`), sa = [];
ca.forEach((a, e) => {
  ri.forEach((t, o) => {
    (e + o) % 3 !== 0 && sa.push({
      Country: a,
      "Sample Categories": t,
      Data: U.number.int({
        min: 5,
        max: 50
      })
    });
  });
});
const ci = ca.map((a, e) => ({
  Country: a,
  symbol: pa[e][0],
  text: U.lorem.sentence()
})), la = {
  "valid-world-data.json": {
    data: sa
  },
  "footnote-data.json": {
    data: ci
  }
}, f = {
  args: {
    config: Zt,
    isEditor: !1
  }
}, si = [{
  ...I.rows[0],
  footnotesId: "footnote123"
}], li = {
  dataKey: "footnote-data.json",
  dynamicFootnotes: {
    symbolColumn: "symbol",
    textColumn: "text"
  },
  staticFootnotes: [{
    symbol: "**",
    text: "This is a static Footnote"
  }]
}, mi = {
  ...I.visualizations,
  footnote123: li
}, v = {
  args: {
    config: {
      ...I,
      datasets: la,
      rows: si,
      visualizations: mi
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
      body: s.times(5, (e) => ({
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
      body: x("distinct year")
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
      body: x("*", ["methodology", a])
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
      body: x("distinct methodology", ["year", a])
    }
  }))]
}, k = {
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
    const e = D(a), t = E.setup();
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
    const c = e.getByLabelText("Stratification", {
      selector: "select"
    });
    await t.selectOptions(c, ["Some Stratification 0"]), await t.click(e.getByText("GO!"));
  }
}, F = {
  args: {
    config: Ma,
    isEditor: !1
  },
  parameters: {
    fetchMock: W
  },
  play: async ({
    canvasElement: a
  }) => {
    const e = D(a), t = E.setup();
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
}, b = {
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
    const e = D(a), t = E.setup();
    await i(1e3);
    const o = e.getByLabelText("Year", {
      selector: "select"
    });
    await t.selectOptions(o, ["1999"]), await t.click(e.getByText("GO!")), await i(500), e.getAllByText("alabama"), e.getAllByText("alaska"), e.getAllByText("arizona"), await t.selectOptions(o, ["2012"]), await t.click(e.getByText("GO!")), await i(500), e.getAllByText("new york"), e.getAllByText("new jersey"), e.getAllByText("new mexico");
  }
}, C = {
  args: {
    config: {
      ...I,
      datasets: la
    },
    isEditor: !1
  },
  play: async ({
    canvasElement: a
  }) => {
    const e = D(a), t = E.setup();
    await i(1e3);
    const o = e.getByLabelText("Category", {
      selector: "select"
    });
    e.getAllByText("Paraguay"), e.getAllByText("Poland"), e.getAllByText("Iraq"), await t.selectOptions(o, ["category-3"]), e.getAllByText("Paraguay"), e.getAllByText("Ethiopia"), e.getAllByText("Iraq"), await t.selectOptions(o, ["category-1"]), e.getAllByText("Poland"), e.getAllByText("Ethiopia"), e.getAllByText("Curacao");
  }
}, N = {
  args: {
    config: yn,
    isEditor: !1
  }
}, H = {
  args: {
    config: vn,
    isEditor: !1
  }
}, M = {
  args: {
    config: Un,
    isEditor: !1
  }
}, V = {
  args: {
    config: zn,
    isEditor: !1
  }
};
var B, O, z;
m.parameters = {
  ...m.parameters,
  docs: {
    ...(B = m.parameters) == null ? void 0 : B.docs,
    source: {
      originalSource: `{
  args: {
    config: DashboardFilterAsc,
    isEditor: false
  }
}`,
      ...(z = (O = m.parameters) == null ? void 0 : O.docs) == null ? void 0 : z.source
    }
  }
};
var q, G, K;
d.parameters = {
  ...d.parameters,
  docs: {
    ...(q = d.parameters) == null ? void 0 : q.docs,
    source: {
      originalSource: `{
  args: {
    config: DashboardFilterDesc,
    isEditor: false
  }
}`,
      ...(K = (G = d.parameters) == null ? void 0 : G.docs) == null ? void 0 : K.source
    }
  }
};
var $, _, j;
u.parameters = {
  ...u.parameters,
  docs: {
    ...($ = u.parameters) == null ? void 0 : $.docs,
    source: {
      originalSource: `{
  args: {
    config: DashboardFilterCust,
    isEditor: false
  }
}`,
      ...(j = (_ = u.parameters) == null ? void 0 : _.docs) == null ? void 0 : j.source
    }
  }
};
var J, Q, Z;
p.parameters = {
  ...p.parameters,
  docs: {
    ...(J = p.parameters) == null ? void 0 : J.docs,
    source: {
      originalSource: `{
  args: {
    config: ExampleConfig_1,
    isEditor: false
  }
}`,
      ...(Z = (Q = p.parameters) == null ? void 0 : Q.docs) == null ? void 0 : Z.source
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
var ie, re, ce;
y.parameters = {
  ...y.parameters,
  docs: {
    ...(ie = y.parameters) == null ? void 0 : ie.docs,
    source: {
      originalSource: `{
  args: {
    config: BumpChartConfig,
    isEditor: false
  }
}`,
      ...(ce = (re = y.parameters) == null ? void 0 : re.docs) == null ? void 0 : ce.source
    }
  }
};
var se, le, me;
h.parameters = {
  ...h.parameters,
  docs: {
    ...(se = h.parameters) == null ? void 0 : se.docs,
    source: {
      originalSource: `{
  args: {
    config: Dashboard_Filter,
    isEditor: false
  }
}`,
      ...(me = (le = h.parameters) == null ? void 0 : le.docs) == null ? void 0 : me.source
    }
  }
};
var de, ue, pe;
A.parameters = {
  ...A.parameters,
  docs: {
    ...(de = A.parameters) == null ? void 0 : de.docs,
    source: {
      originalSource: `{
  args: {
    config: APIFilterErrorConfig,
    isEditor: false
  }
}`,
      ...(pe = (ue = A.parameters) == null ? void 0 : ue.docs) == null ? void 0 : pe.source
    }
  }
};
var Le, Te, ye;
R.parameters = {
  ...R.parameters,
  docs: {
    ...(Le = R.parameters) == null ? void 0 : Le.docs,
    source: {
      originalSource: `{
  args: {
    config: StandaloneTable,
    isEditor: false
  }
}`,
      ...(ye = (Te = R.parameters) == null ? void 0 : Te.docs) == null ? void 0 : ye.source
    }
  }
};
var he, Ae, Re;
w.parameters = {
  ...w.parameters,
  docs: {
    ...(he = w.parameters) == null ? void 0 : he.docs,
    source: {
      originalSource: `{
  args: {
    config: ToggleExampleConfig,
    isEditor: false
  }
}`,
      ...(Re = (Ae = w.parameters) == null ? void 0 : Ae.docs) == null ? void 0 : Re.source
    }
  }
};
var we, Se, ge;
S.parameters = {
  ...S.parameters,
  docs: {
    ...(we = S.parameters) == null ? void 0 : we.docs,
    source: {
      originalSource: `{
  args: {
    config: PivotFitlerConfig,
    isEditor: false
  }
}`,
      ...(ge = (Se = S.parameters) == null ? void 0 : Se.docs) == null ? void 0 : ge.source
    }
  }
};
var Ye, fe, ve;
g.parameters = {
  ...g.parameters,
  docs: {
    ...(Ye = g.parameters) == null ? void 0 : Ye.docs,
    source: {
      originalSource: `{
  args: {
    config: GroupPivotConfig,
    isEditor: false
  }
}`,
      ...(ve = (fe = g.parameters) == null ? void 0 : fe.docs) == null ? void 0 : ve.source
    }
  }
};
var ke, Fe, be;
Y.parameters = {
  ...Y.parameters,
  docs: {
    ...(ke = Y.parameters) == null ? void 0 : ke.docs,
    source: {
      originalSource: `{
  args: {
    config: SingleStateDashboardFilters,
    isEditor: false
  }
}`,
      ...(be = (Fe = Y.parameters) == null ? void 0 : Fe.docs) == null ? void 0 : be.source
    }
  }
};
var Ce, Ne, He;
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
      ...(He = (Ne = f.parameters) == null ? void 0 : Ne.docs) == null ? void 0 : He.source
    }
  }
};
var Me, Ve, Ue;
v.parameters = {
  ...v.parameters,
  docs: {
    ...(Me = v.parameters) == null ? void 0 : Me.docs,
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
      ...(Ue = (Ve = v.parameters) == null ? void 0 : Ve.docs) == null ? void 0 : Ue.source
    }
  }
};
var De, Ee, Ie;
k.parameters = {
  ...k.parameters,
  docs: {
    ...(De = k.parameters) == null ? void 0 : De.docs,
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
      ...(Ie = (Ee = k.parameters) == null ? void 0 : Ee.docs) == null ? void 0 : Ie.source
    }
  }
};
var xe, Pe, We;
F.parameters = {
  ...F.parameters,
  docs: {
    ...(xe = F.parameters) == null ? void 0 : xe.docs,
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
      ...(We = (Pe = F.parameters) == null ? void 0 : Pe.docs) == null ? void 0 : We.source
    }
  }
};
var Be, Oe, ze;
b.parameters = {
  ...b.parameters,
  docs: {
    ...(Be = b.parameters) == null ? void 0 : Be.docs,
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
      ...(ze = (Oe = b.parameters) == null ? void 0 : Oe.docs) == null ? void 0 : ze.source
    }
  }
};
var qe, Ge, Ke;
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
      ...(Ke = (Ge = C.parameters) == null ? void 0 : Ge.docs) == null ? void 0 : Ke.source
    }
  }
};
var $e, _e, je;
N.parameters = {
  ...N.parameters,
  docs: {
    ...($e = N.parameters) == null ? void 0 : $e.docs,
    source: {
      originalSource: `{
  args: {
    config: TopSpacing_1,
    isEditor: false
  }
}`,
      ...(je = (_e = N.parameters) == null ? void 0 : _e.docs) == null ? void 0 : je.source
    }
  }
};
var Je, Qe, Ze;
H.parameters = {
  ...H.parameters,
  docs: {
    ...(Je = H.parameters) == null ? void 0 : Je.docs,
    source: {
      originalSource: `{
  args: {
    config: TopSpacing_2,
    isEditor: false
  }
}`,
      ...(Ze = (Qe = H.parameters) == null ? void 0 : Qe.docs) == null ? void 0 : Ze.source
    }
  }
};
var Xe, ea, aa;
M.parameters = {
  ...M.parameters,
  docs: {
    ...(Xe = M.parameters) == null ? void 0 : Xe.docs,
    source: {
      originalSource: `{
  args: {
    config: TopSpacing_3,
    isEditor: false
  }
}`,
      ...(aa = (ea = M.parameters) == null ? void 0 : ea.docs) == null ? void 0 : aa.source
    }
  }
};
var ta, oa, na;
V.parameters = {
  ...V.parameters,
  docs: {
    ...(ta = V.parameters) == null ? void 0 : ta.docs,
    source: {
      originalSource: `{
  args: {
    config: TopSpacing_4,
    isEditor: false
  }
}`,
      ...(na = (oa = V.parameters) == null ? void 0 : oa.docs) == null ? void 0 : na.source
    }
  }
};
const Ar = ["Dashboard_Filter_Asc", "Dashboard_Filter_Desc", "Dashboard_Filter_Cust", "Example_1", "Example_2", "Example_3", "Bump_Chart_Dashboard", "Dashboard_Filters", "API_Filter_Error", "StandAloneTable", "ToggleExample", "PivotFilter", "GroupPivotFilter", "SingleStateDashboardWithFilters", "MultiDashboard", "Footnotes", "RegressionAPIFiltersMap", "RegressionAPIFiltersChart", "RegressionHiddenFilter", "RegressionMultiVisualization", "Top_Spacing_1", "Top_Spacing_2", "Top_Spacing_3", "Top_Spacing_4"];
export {
  A as API_Filter_Error,
  y as Bump_Chart_Dashboard,
  m as Dashboard_Filter_Asc,
  u as Dashboard_Filter_Cust,
  d as Dashboard_Filter_Desc,
  h as Dashboard_Filters,
  p as Example_1,
  L as Example_2,
  T as Example_3,
  v as Footnotes,
  g as GroupPivotFilter,
  f as MultiDashboard,
  S as PivotFilter,
  F as RegressionAPIFiltersChart,
  k as RegressionAPIFiltersMap,
  b as RegressionHiddenFilter,
  C as RegressionMultiVisualization,
  Y as SingleStateDashboardWithFilters,
  R as StandAloneTable,
  w as ToggleExample,
  N as Top_Spacing_1,
  H as Top_Spacing_2,
  M as Top_Spacing_3,
  V as Top_Spacing_4,
  Ar as __namedExportsOrder,
  hr as default
};
