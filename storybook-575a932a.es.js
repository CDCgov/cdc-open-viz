import { a as jy } from "./storybook-d755757b.es.js";
import { a as Vy, c as zl, g as Wy } from "./storybook-c5d32002.es.js";
import { d as Hy } from "./storybook-398c73a4.es.js";
import "./storybook-e61d95ab.es.js";
import "./storybook-c757ed74.es.js";
import "./storybook-60d140a8.es.js";
import "./storybook-b8c9afe4.es.js";
import "./storybook-a2b11335.es.js";
import "./storybook-826feda6.es.js";
import "./storybook-03c45984.es.js";
import "./storybook-76833471.es.js";
import "./storybook-a0c99f4a.es.js";
import "./storybook-b554456e.es.js";
import "./storybook-0d7692d1.es.js";
import "./storybook-8d78bf52.es.js";
import "./storybook-c11e9ca9.es.js";
import "./storybook-46a89ba7.es.js";
import "./storybook-9dde4f4f.es.js";
import "./storybook-bedc547d.es.js";
import "./storybook-24623c03.es.js";
import "./storybook-0b963b46.es.js";
import "./storybook-96bcff98.es.js";
function Sd(e, t) {
  for (var a = 0; a < t.length; a++) {
    const o = t[a];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const r in o)
        if (r !== "default" && !(r in e)) {
          const n = Object.getOwnPropertyDescriptor(o, r);
          n && Object.defineProperty(e, r, n.get ? n : {
            enumerable: !0,
            get: () => o[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const zy = {
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
        "chart1"
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
        apiEndpoint: "http://test.gov/api/POC/Filters",
        valueSelector: "Year",
        textSelector: "Year",
        heirarchyLookup: "Years"
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
        apiEndpoint: "http://test.gov/api/POC/Filters",
        valueSelector: "StratificationCategoryId",
        textSelector: "StratificationCategory",
        heirarchyLookup: "StratificationCategories"
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
        apiEndpoint: "http://test.gov/api/POC/stratifications",
        valueSelector: "StratificationId",
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
}, Gy = [
  [
    {
      width: 12,
      widget: "map1"
    }
  ]
], Ky = {
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
}, Jy = "dashboard", Xy = {
  data3: {
    dataUrl: "http://test.gov/api/POC/TableData?DataValueTypeId=CRDMEDN"
  }
}, Qy = "Apply Button", Zy = {}, e1 = 1684783370106, t1 = {
  dashboard: zy,
  rows: Gy,
  visualizations: Ky,
  type: Jy,
  datasets: Xy,
  filterBehavior: Qy,
  runtime: Zy,
  uuid: e1
}, a1 = {
  theme: "theme-green",
  sharedFilters: [
    {
      key: "Location",
      usedBy: [
        "chart1"
      ],
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
      usedBy: [
        "chart1"
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
        "chart1"
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
        "chart1"
      ],
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/api/POC/Filters",
        valueSelector: "Year",
        textSelector: "Year",
        heirarchyLookup: "Years"
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
      usedBy: [
        "chart1"
      ],
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/api/POC/Filters",
        valueSelector: "StratificationCategoryId",
        textSelector: "StratificationCategory",
        heirarchyLookup: "StratificationCategories",
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
      usedBy: [
        "chart1"
      ],
      type: "urlfilter",
      apiFilter: {
        apiEndpoint: "http://test.gov/api/POC/Filters",
        valueSelector: "DataValueTypeId",
        textSelector: "DataValueType",
        heirarchyLookup: "DataValueTypes"
      },
      queryParameter: "datavaluetypeid",
      showDropdown: !0,
      parents: [
        "Category",
        "Indicator"
      ]
    }
  ]
}, o1 = [
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
], r1 = {
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
}, n1 = "dashboard", i1 = {
  data3: {
    dataUrl: "http://test.gov/api/POC/TableData"
  }
}, l1 = "Apply Button", s1 = {}, u1 = 1684783370106, c1 = {
  dashboard: a1,
  rows: o1,
  visualizations: r1,
  type: n1,
  datasets: i1,
  filterBehavior: l1,
  runtime: s1,
  uuid: u1
}, d1 = {
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
}, p1 = [
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
], f1 = {
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
}, m1 = {
  label: "Data Table",
  show: !0
}, y1 = [
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
], h1 = "dashboard_aggregate_example_no_add_fullname.csv", L1 = "file", b1 = "dashboard", v1 = 1628875999137, T1 = {}, A1 = {
  dashboard: d1,
  rows: p1,
  visualizations: f1,
  table: m1,
  data: y1,
  dataFileName: h1,
  dataFileSourceType: L1,
  type: b1,
  uuid: v1,
  runtime: T1
}, g1 = {
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
}, S1 = [
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
], Y1 = {
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
}, R1 = {
  label: "Data Table",
  show: !0
}, E1 = [
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
], w1 = "dashboard_aggregate_example_no_add_fullname.csv", C1 = "file", _1 = "dashboard", P1 = 1628879384203, I1 = {
  dashboard: g1,
  rows: S1,
  visualizations: Y1,
  table: R1,
  data: E1,
  dataFileName: w1,
  dataFileSourceType: C1,
  type: _1,
  uuid: P1
}, F1 = {
  theme: "theme-blue",
  title: "Dashboard with No Filters"
}, O1 = [
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
], M1 = {
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
}, x1 = {
  label: "Data Table",
  show: !0
}, k1 = "dashboard", N1 = 1629144022257, $1 = {
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
}, q1 = {
  dashboard: F1,
  rows: O1,
  visualizations: M1,
  table: x1,
  type: k1,
  uuid: N1,
  datasets: $1
}, D1 = {
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
}, B1 = [
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
], U1 = {
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
}, j1 = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, V1 = {
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
}, W1 = "dashboard", H1 = 1699383537668, z1 = "Filter Change", G1 = {
  dashboard: D1,
  rows: B1,
  visualizations: U1,
  table: j1,
  datasets: V1,
  type: W1,
  uuid: H1,
  filterBehavior: z1
};
var Te = {}, Gl = { exports: {} };
Gl.exports;
(function(e) {
  const a = (n = 0) => (i) => `\x1B[${38 + n};5;${i}m`, o = (n = 0) => (i, s, l) => `\x1B[${38 + n};2;${i};${s};${l}m`;
  function r() {
    const n = /* @__PURE__ */ new Map(), i = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    i.color.gray = i.color.blackBright, i.bgColor.bgGray = i.bgColor.bgBlackBright, i.color.grey = i.color.blackBright, i.bgColor.bgGrey = i.bgColor.bgBlackBright;
    for (const [s, l] of Object.entries(i)) {
      for (const [u, c] of Object.entries(l))
        i[u] = {
          open: `\x1B[${c[0]}m`,
          close: `\x1B[${c[1]}m`
        }, l[u] = i[u], n.set(c[0], c[1]);
      Object.defineProperty(i, s, {
        value: l,
        enumerable: !1
      });
    }
    return Object.defineProperty(i, "codes", {
      value: n,
      enumerable: !1
    }), i.color.close = "\x1B[39m", i.bgColor.close = "\x1B[49m", i.color.ansi256 = a(), i.color.ansi16m = o(), i.bgColor.ansi256 = a(10), i.bgColor.ansi16m = o(10), Object.defineProperties(i, {
      rgbToAnsi256: {
        value: (s, l, u) => s === l && l === u ? s < 8 ? 16 : s > 248 ? 231 : Math.round((s - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(s / 255 * 5) + 6 * Math.round(l / 255 * 5) + Math.round(u / 255 * 5),
        enumerable: !1
      },
      hexToRgb: {
        value: (s) => {
          const l = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(s.toString(16));
          if (!l)
            return [0, 0, 0];
          let { colorString: u } = l.groups;
          u.length === 3 && (u = u.split("").map((d) => d + d).join(""));
          const c = Number.parseInt(u, 16);
          return [
            c >> 16 & 255,
            c >> 8 & 255,
            c & 255
          ];
        },
        enumerable: !1
      },
      hexToAnsi256: {
        value: (s) => i.rgbToAnsi256(...i.hexToRgb(s)),
        enumerable: !1
      }
    }), i;
  }
  Object.defineProperty(e, "exports", {
    enumerable: !0,
    get: r
  });
})(Gl);
var Yd = Gl.exports, Se = {};
Object.defineProperty(Se, "__esModule", {
  value: !0
});
Se.printIteratorEntries = J1;
Se.printIteratorValues = X1;
Se.printListItems = Q1;
Se.printObjectProperties = Z1;
const K1 = (e, t) => {
  const a = Object.keys(e).sort(t);
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((o) => {
    Object.getOwnPropertyDescriptor(e, o).enumerable && a.push(o);
  }), a;
};
function J1(e, t, a, o, r, n, i = ": ") {
  let s = "", l = e.next();
  if (!l.done) {
    s += t.spacingOuter;
    const u = a + t.indent;
    for (; !l.done; ) {
      const c = n(
        l.value[0],
        t,
        u,
        o,
        r
      ), d = n(
        l.value[1],
        t,
        u,
        o,
        r
      );
      s += u + c + i + d, l = e.next(), l.done ? t.min || (s += ",") : s += "," + t.spacingInner;
    }
    s += t.spacingOuter + a;
  }
  return s;
}
function X1(e, t, a, o, r, n) {
  let i = "", s = e.next();
  if (!s.done) {
    i += t.spacingOuter;
    const l = a + t.indent;
    for (; !s.done; )
      i += l + n(s.value, t, l, o, r), s = e.next(), s.done ? t.min || (i += ",") : i += "," + t.spacingInner;
    i += t.spacingOuter + a;
  }
  return i;
}
function Q1(e, t, a, o, r, n) {
  let i = "";
  if (e.length) {
    i += t.spacingOuter;
    const s = a + t.indent;
    for (let l = 0; l < e.length; l++)
      i += s, l in e && (i += n(e[l], t, s, o, r)), l < e.length - 1 ? i += "," + t.spacingInner : t.min || (i += ",");
    i += t.spacingOuter + a;
  }
  return i;
}
function Z1(e, t, a, o, r, n) {
  let i = "";
  const s = K1(e, t.compareKeys);
  if (s.length) {
    i += t.spacingOuter;
    const l = a + t.indent;
    for (let u = 0; u < s.length; u++) {
      const c = s[u], d = n(c, t, l, o, r), p = n(e[c], t, l, o, r);
      i += l + d + ": " + p, u < s.length - 1 ? i += "," + t.spacingInner : t.min || (i += ",");
    }
    i += t.spacingOuter + a;
  }
  return i;
}
var $e = {};
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.test = $e.serialize = $e.default = void 0;
var Os = Se, Ja = function() {
  return typeof globalThis < "u" ? globalThis : typeof Ja < "u" ? Ja : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), yi = Ja["jest-symbol-do-not-touch"] || Ja.Symbol;
const e0 = typeof yi == "function" && yi.for ? yi.for("jest.asymmetricMatcher") : 1267621, ba = " ", Rd = (e, t, a, o, r, n) => {
  const i = e.toString();
  return i === "ArrayContaining" || i === "ArrayNotContaining" ? ++o > t.maxDepth ? "[" + i + "]" : i + ba + "[" + (0, Os.printListItems)(
    e.sample,
    t,
    a,
    o,
    r,
    n
  ) + "]" : i === "ObjectContaining" || i === "ObjectNotContaining" ? ++o > t.maxDepth ? "[" + i + "]" : i + ba + "{" + (0, Os.printObjectProperties)(
    e.sample,
    t,
    a,
    o,
    r,
    n
  ) + "}" : i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining" ? i + ba + n(e.sample, t, a, o, r) : e.toAsymmetricMatcher();
};
$e.serialize = Rd;
const Ed = (e) => e && e.$$typeof === e0;
$e.test = Ed;
const t0 = {
  serialize: Rd,
  test: Ed
};
var a0 = t0;
$e.default = a0;
var qe = {}, o0 = ({ onlyFirst: e = !1 } = {}) => {
  const t = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(t, e ? void 0 : "g");
};
Object.defineProperty(qe, "__esModule", {
  value: !0
});
qe.test = qe.serialize = qe.default = void 0;
var wd = Cd(o0), N = Cd(Yd);
function Cd(e) {
  return e && e.__esModule ? e : { default: e };
}
const r0 = (e) => e.replace((0, wd.default)(), (t) => {
  switch (t) {
    case N.default.red.close:
    case N.default.green.close:
    case N.default.cyan.close:
    case N.default.gray.close:
    case N.default.white.close:
    case N.default.yellow.close:
    case N.default.bgRed.close:
    case N.default.bgGreen.close:
    case N.default.bgYellow.close:
    case N.default.inverse.close:
    case N.default.dim.close:
    case N.default.bold.close:
    case N.default.reset.open:
    case N.default.reset.close:
      return "</>";
    case N.default.red.open:
      return "<red>";
    case N.default.green.open:
      return "<green>";
    case N.default.cyan.open:
      return "<cyan>";
    case N.default.gray.open:
      return "<gray>";
    case N.default.white.open:
      return "<white>";
    case N.default.yellow.open:
      return "<yellow>";
    case N.default.bgRed.open:
      return "<bgRed>";
    case N.default.bgGreen.open:
      return "<bgGreen>";
    case N.default.bgYellow.open:
      return "<bgYellow>";
    case N.default.inverse.open:
      return "<inverse>";
    case N.default.dim.open:
      return "<dim>";
    case N.default.bold.open:
      return "<bold>";
    default:
      return "";
  }
}), _d = (e) => typeof e == "string" && !!e.match((0, wd.default)());
qe.test = _d;
const Pd = (e, t, a, o, r, n) => n(r0(e), t, a, o, r);
qe.serialize = Pd;
const n0 = {
  serialize: Pd,
  test: _d
};
var i0 = n0;
qe.default = i0;
var De = {};
Object.defineProperty(De, "__esModule", {
  value: !0
});
De.test = De.serialize = De.default = void 0;
var Ms = Se;
const l0 = " ", Id = ["DOMStringMap", "NamedNodeMap"], s0 = /^(HTML\w*Collection|NodeList)$/, u0 = (e) => Id.indexOf(e) !== -1 || s0.test(e), Fd = (e) => e && e.constructor && !!e.constructor.name && u0(e.constructor.name);
De.test = Fd;
const c0 = (e) => e.constructor.name === "NamedNodeMap", Od = (e, t, a, o, r, n) => {
  const i = e.constructor.name;
  return ++o > t.maxDepth ? "[" + i + "]" : (t.min ? "" : i + l0) + (Id.indexOf(i) !== -1 ? "{" + (0, Ms.printObjectProperties)(
    c0(e) ? Array.from(e).reduce((s, l) => (s[l.name] = l.value, s), {}) : { ...e },
    t,
    a,
    o,
    r,
    n
  ) + "}" : "[" + (0, Ms.printListItems)(
    Array.from(e),
    t,
    a,
    o,
    r,
    n
  ) + "]");
};
De.serialize = Od;
const d0 = {
  serialize: Od,
  test: Fd
};
var p0 = d0;
De.default = p0;
var Be = {}, H = {}, Kl = {};
Object.defineProperty(Kl, "__esModule", {
  value: !0
});
Kl.default = f0;
function f0(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(H, "__esModule", {
  value: !0
});
H.printText = H.printProps = H.printElementAsLeaf = H.printElement = H.printComment = H.printChildren = void 0;
var Md = m0(Kl);
function m0(e) {
  return e && e.__esModule ? e : { default: e };
}
const y0 = (e, t, a, o, r, n, i) => {
  const s = o + a.indent, l = a.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, a, s, r, n);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = a.spacingOuter + s + d + a.spacingOuter + o), d = "{" + d + "}"), a.spacingInner + o + l.prop.open + u + l.prop.close + "=" + l.value.open + d + l.value.close;
  }).join("");
};
H.printProps = y0;
const h0 = (e, t, a, o, r, n) => e.map(
  (i) => t.spacingOuter + a + (typeof i == "string" ? xd(i, t) : n(i, t, a, o, r))
).join("");
H.printChildren = h0;
const xd = (e, t) => {
  const a = t.colors.content;
  return a.open + (0, Md.default)(e) + a.close;
};
H.printText = xd;
const L0 = (e, t) => {
  const a = t.colors.comment;
  return a.open + "<!--" + (0, Md.default)(e) + "-->" + a.close;
};
H.printComment = L0;
const b0 = (e, t, a, o, r) => {
  const n = o.colors.tag;
  return n.open + "<" + e + (t && n.close + t + o.spacingOuter + r + n.open) + (a ? ">" + n.close + a + o.spacingOuter + r + n.open + "</" + e : (t && !o.min ? "" : " ") + "/") + ">" + n.close;
};
H.printElement = b0;
const v0 = (e, t) => {
  const a = t.colors.tag;
  return a.open + "<" + e + a.close + " …" + a.open + " />" + a.close;
};
H.printElementAsLeaf = v0;
Object.defineProperty(Be, "__esModule", {
  value: !0
});
Be.test = Be.serialize = Be.default = void 0;
var dt = H;
const T0 = 1, kd = 3, Nd = 8, $d = 11, A0 = /^((HTML|SVG)\w*)?Element$/, g0 = (e) => {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}, S0 = (e) => {
  const t = e.constructor.name, { nodeType: a, tagName: o } = e, r = typeof o == "string" && o.includes("-") || g0(e);
  return a === T0 && (A0.test(t) || r) || a === kd && t === "Text" || a === Nd && t === "Comment" || a === $d && t === "DocumentFragment";
}, qd = (e) => {
  var t;
  return (e == null || (t = e.constructor) === null || t === void 0 ? void 0 : t.name) && S0(e);
};
Be.test = qd;
function Y0(e) {
  return e.nodeType === kd;
}
function R0(e) {
  return e.nodeType === Nd;
}
function hi(e) {
  return e.nodeType === $d;
}
const Dd = (e, t, a, o, r, n) => {
  if (Y0(e))
    return (0, dt.printText)(e.data, t);
  if (R0(e))
    return (0, dt.printComment)(e.data, t);
  const i = hi(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++o > t.maxDepth ? (0, dt.printElementAsLeaf)(i, t) : (0, dt.printElement)(
    i,
    (0, dt.printProps)(
      hi(e) ? [] : Array.from(e.attributes).map((s) => s.name).sort(),
      hi(e) ? {} : Array.from(e.attributes).reduce((s, l) => (s[l.name] = l.value, s), {}),
      t,
      a + t.indent,
      o,
      r,
      n
    ),
    (0, dt.printChildren)(
      Array.prototype.slice.call(e.childNodes || e.children),
      t,
      a + t.indent,
      o,
      r,
      n
    ),
    t,
    a
  );
};
Be.serialize = Dd;
const E0 = {
  serialize: Dd,
  test: qd
};
var w0 = E0;
Be.default = w0;
var Ue = {};
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.test = Ue.serialize = Ue.default = void 0;
var ea = Se;
const C0 = "@@__IMMUTABLE_ITERABLE__@@", _0 = "@@__IMMUTABLE_LIST__@@", P0 = "@@__IMMUTABLE_KEYED__@@", I0 = "@@__IMMUTABLE_MAP__@@", xs = "@@__IMMUTABLE_ORDERED__@@", F0 = "@@__IMMUTABLE_RECORD__@@", O0 = "@@__IMMUTABLE_SEQ__@@", M0 = "@@__IMMUTABLE_SET__@@", x0 = "@@__IMMUTABLE_STACK__@@", Yt = (e) => "Immutable." + e, Ao = (e) => "[" + e + "]", ta = " ", ks = "…", k0 = (e, t, a, o, r, n, i) => ++o > t.maxDepth ? Ao(Yt(i)) : Yt(i) + ta + "{" + (0, ea.printIteratorEntries)(
  e.entries(),
  t,
  a,
  o,
  r,
  n
) + "}";
function N0(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        const a = e._keys[t++];
        return {
          done: !1,
          value: [a, e.get(a)]
        };
      }
      return {
        done: !0,
        value: void 0
      };
    }
  };
}
const $0 = (e, t, a, o, r, n) => {
  const i = Yt(e._name || "Record");
  return ++o > t.maxDepth ? Ao(i) : i + ta + "{" + (0, ea.printIteratorEntries)(
    N0(e),
    t,
    a,
    o,
    r,
    n
  ) + "}";
}, q0 = (e, t, a, o, r, n) => {
  const i = Yt("Seq");
  return ++o > t.maxDepth ? Ao(i) : e[P0] ? i + ta + "{" + // from Immutable collection of entries or from ECMAScript object
  (e._iter || e._object ? (0, ea.printIteratorEntries)(
    e.entries(),
    t,
    a,
    o,
    r,
    n
  ) : ks) + "}" : i + ta + "[" + (e._iter || // from Immutable collection of values
  e._array || // from ECMAScript array
  e._collection || // from ECMAScript collection in immutable v4
  e._iterable ? (0, ea.printIteratorValues)(
    e.values(),
    t,
    a,
    o,
    r,
    n
  ) : ks) + "]";
}, Li = (e, t, a, o, r, n, i) => ++o > t.maxDepth ? Ao(Yt(i)) : Yt(i) + ta + "[" + (0, ea.printIteratorValues)(
  e.values(),
  t,
  a,
  o,
  r,
  n
) + "]", Bd = (e, t, a, o, r, n) => e[I0] ? k0(
  e,
  t,
  a,
  o,
  r,
  n,
  e[xs] ? "OrderedMap" : "Map"
) : e[_0] ? Li(
  e,
  t,
  a,
  o,
  r,
  n,
  "List"
) : e[M0] ? Li(
  e,
  t,
  a,
  o,
  r,
  n,
  e[xs] ? "OrderedSet" : "Set"
) : e[x0] ? Li(
  e,
  t,
  a,
  o,
  r,
  n,
  "Stack"
) : e[O0] ? q0(e, t, a, o, r, n) : $0(e, t, a, o, r, n);
Ue.serialize = Bd;
const Ud = (e) => e && (e[C0] === !0 || e[F0] === !0);
Ue.test = Ud;
const D0 = {
  serialize: Bd,
  test: Ud
};
var B0 = D0;
Ue.default = B0;
var je = {}, ol = { exports: {} }, M = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ns;
function U0() {
  if (Ns)
    return M;
  Ns = 1;
  var e = 60103, t = 60106, a = 60107, o = 60108, r = 60114, n = 60109, i = 60110, s = 60112, l = 60113, u = 60120, c = 60115, d = 60116, p = 60121, y = 60122, h = 60117, b = 60129, R = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var f = Symbol.for;
    e = f("react.element"), t = f("react.portal"), a = f("react.fragment"), o = f("react.strict_mode"), r = f("react.profiler"), n = f("react.provider"), i = f("react.context"), s = f("react.forward_ref"), l = f("react.suspense"), u = f("react.suspense_list"), c = f("react.memo"), d = f("react.lazy"), p = f("react.block"), y = f("react.server.block"), h = f("react.fundamental"), b = f("react.debug_trace_mode"), R = f("react.legacy_hidden");
  }
  function A(g) {
    if (typeof g == "object" && g !== null) {
      var C = g.$$typeof;
      switch (C) {
        case e:
          switch (g = g.type, g) {
            case a:
            case r:
            case o:
            case l:
            case u:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case i:
                case s:
                case d:
                case c:
                case n:
                  return g;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  var Y = n, S = e, E = s, m = a, L = d, T = c, O = t, D = r, q = o, B = l;
  return M.ContextConsumer = i, M.ContextProvider = Y, M.Element = S, M.ForwardRef = E, M.Fragment = m, M.Lazy = L, M.Memo = T, M.Portal = O, M.Profiler = D, M.StrictMode = q, M.Suspense = B, M.isAsyncMode = function() {
    return !1;
  }, M.isConcurrentMode = function() {
    return !1;
  }, M.isContextConsumer = function(g) {
    return A(g) === i;
  }, M.isContextProvider = function(g) {
    return A(g) === n;
  }, M.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, M.isForwardRef = function(g) {
    return A(g) === s;
  }, M.isFragment = function(g) {
    return A(g) === a;
  }, M.isLazy = function(g) {
    return A(g) === d;
  }, M.isMemo = function(g) {
    return A(g) === c;
  }, M.isPortal = function(g) {
    return A(g) === t;
  }, M.isProfiler = function(g) {
    return A(g) === r;
  }, M.isStrictMode = function(g) {
    return A(g) === o;
  }, M.isSuspense = function(g) {
    return A(g) === l;
  }, M.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === a || g === r || g === b || g === o || g === l || g === u || g === R || typeof g == "object" && g !== null && (g.$$typeof === d || g.$$typeof === c || g.$$typeof === n || g.$$typeof === i || g.$$typeof === s || g.$$typeof === h || g.$$typeof === p || g[0] === y);
  }, M.typeOf = A, M;
}
var x = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $s;
function j0() {
  return $s || ($s = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, a = 60107, o = 60108, r = 60114, n = 60109, i = 60110, s = 60112, l = 60113, u = 60120, c = 60115, d = 60116, p = 60121, y = 60122, h = 60117, b = 60129, R = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var f = Symbol.for;
      e = f("react.element"), t = f("react.portal"), a = f("react.fragment"), o = f("react.strict_mode"), r = f("react.profiler"), n = f("react.provider"), i = f("react.context"), s = f("react.forward_ref"), l = f("react.suspense"), u = f("react.suspense_list"), c = f("react.memo"), d = f("react.lazy"), p = f("react.block"), y = f("react.server.block"), h = f("react.fundamental"), f("react.scope"), f("react.opaque.id"), b = f("react.debug_trace_mode"), f("react.offscreen"), R = f("react.legacy_hidden");
    }
    var A = !1;
    function Y(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === a || w === r || w === b || w === o || w === l || w === u || w === R || A || typeof w == "object" && w !== null && (w.$$typeof === d || w.$$typeof === c || w.$$typeof === n || w.$$typeof === i || w.$$typeof === s || w.$$typeof === h || w.$$typeof === p || w[0] === y));
    }
    function S(w) {
      if (typeof w == "object" && w !== null) {
        var mi = w.$$typeof;
        switch (mi) {
          case e:
            var La = w.type;
            switch (La) {
              case a:
              case r:
              case o:
              case l:
              case u:
                return La;
              default:
                var Fs = La && La.$$typeof;
                switch (Fs) {
                  case i:
                  case s:
                  case d:
                  case c:
                  case n:
                    return Fs;
                  default:
                    return mi;
                }
            }
          case t:
            return mi;
        }
      }
    }
    var E = i, m = n, L = e, T = s, O = a, D = d, q = c, B = t, g = r, C = o, F = l, U = !1, Z = !1;
    function Je(w) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function fi(w) {
      return Z || (Z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Fy(w) {
      return S(w) === i;
    }
    function Oy(w) {
      return S(w) === n;
    }
    function My(w) {
      return typeof w == "object" && w !== null && w.$$typeof === e;
    }
    function xy(w) {
      return S(w) === s;
    }
    function ky(w) {
      return S(w) === a;
    }
    function Ny(w) {
      return S(w) === d;
    }
    function $y(w) {
      return S(w) === c;
    }
    function qy(w) {
      return S(w) === t;
    }
    function Dy(w) {
      return S(w) === r;
    }
    function By(w) {
      return S(w) === o;
    }
    function Uy(w) {
      return S(w) === l;
    }
    x.ContextConsumer = E, x.ContextProvider = m, x.Element = L, x.ForwardRef = T, x.Fragment = O, x.Lazy = D, x.Memo = q, x.Portal = B, x.Profiler = g, x.StrictMode = C, x.Suspense = F, x.isAsyncMode = Je, x.isConcurrentMode = fi, x.isContextConsumer = Fy, x.isContextProvider = Oy, x.isElement = My, x.isForwardRef = xy, x.isFragment = ky, x.isLazy = Ny, x.isMemo = $y, x.isPortal = qy, x.isProfiler = Dy, x.isStrictMode = By, x.isSuspense = Uy, x.isValidElementType = Y, x.typeOf = S;
  }()), x;
}
process.env.NODE_ENV === "production" ? ol.exports = U0() : ol.exports = j0();
var V0 = ol.exports;
Object.defineProperty(je, "__esModule", {
  value: !0
});
je.test = je.serialize = je.default = void 0;
var Qe = W0(V0), va = H;
function jd(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
  return (jd = function(o) {
    return o ? a : t;
  })(e);
}
function W0(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var a = jd(t);
  if (a && a.has(e))
    return a.get(e);
  var o = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var n in e)
    if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) {
      var i = r ? Object.getOwnPropertyDescriptor(e, n) : null;
      i && (i.get || i.set) ? Object.defineProperty(o, n, i) : o[n] = e[n];
    }
  return o.default = e, a && a.set(e, o), o;
}
const Vd = (e, t = []) => (Array.isArray(e) ? e.forEach((a) => {
  Vd(a, t);
}) : e != null && e !== !1 && t.push(e), t), qs = (e) => {
  const t = e.type;
  if (typeof t == "string")
    return t;
  if (typeof t == "function")
    return t.displayName || t.name || "Unknown";
  if (Qe.isFragment(e))
    return "React.Fragment";
  if (Qe.isSuspense(e))
    return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (Qe.isContextProvider(e))
      return "Context.Provider";
    if (Qe.isContextConsumer(e))
      return "Context.Consumer";
    if (Qe.isForwardRef(e)) {
      if (t.displayName)
        return t.displayName;
      const a = t.render.displayName || t.render.name || "";
      return a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef";
    }
    if (Qe.isMemo(e)) {
      const a = t.displayName || t.type.displayName || t.type.name || "";
      return a !== "" ? "Memo(" + a + ")" : "Memo";
    }
  }
  return "UNDEFINED";
}, H0 = (e) => {
  const { props: t } = e;
  return Object.keys(t).filter((a) => a !== "children" && t[a] !== void 0).sort();
}, Wd = (e, t, a, o, r, n) => ++o > t.maxDepth ? (0, va.printElementAsLeaf)(qs(e), t) : (0, va.printElement)(
  qs(e),
  (0, va.printProps)(
    H0(e),
    e.props,
    t,
    a + t.indent,
    o,
    r,
    n
  ),
  (0, va.printChildren)(
    Vd(e.props.children),
    t,
    a + t.indent,
    o,
    r,
    n
  ),
  t,
  a
);
je.serialize = Wd;
const Hd = (e) => e != null && Qe.isElement(e);
je.test = Hd;
const z0 = {
  serialize: Wd,
  test: Hd
};
var G0 = z0;
je.default = G0;
var Ve = {};
Object.defineProperty(Ve, "__esModule", {
  value: !0
});
Ve.test = Ve.serialize = Ve.default = void 0;
var Ta = H, Xa = function() {
  return typeof globalThis < "u" ? globalThis : typeof Xa < "u" ? Xa : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), bi = Xa["jest-symbol-do-not-touch"] || Xa.Symbol;
const K0 = typeof bi == "function" && bi.for ? bi.for("react.test.json") : 245830487, J0 = (e) => {
  const { props: t } = e;
  return t ? Object.keys(t).filter((a) => t[a] !== void 0).sort() : [];
}, zd = (e, t, a, o, r, n) => ++o > t.maxDepth ? (0, Ta.printElementAsLeaf)(e.type, t) : (0, Ta.printElement)(
  e.type,
  e.props ? (0, Ta.printProps)(
    J0(e),
    e.props,
    t,
    a + t.indent,
    o,
    r,
    n
  ) : "",
  e.children ? (0, Ta.printChildren)(
    e.children,
    t,
    a + t.indent,
    o,
    r,
    n
  ) : "",
  t,
  a
);
Ve.serialize = zd;
const Gd = (e) => e && e.$$typeof === K0;
Ve.test = Gd;
const X0 = {
  serialize: zd,
  test: Gd
};
var Q0 = X0;
Ve.default = Q0;
Object.defineProperty(Te, "__esModule", {
  value: !0
});
var Kd = Te.default = rp = Te.DEFAULT_OPTIONS = void 0, Jd = Te.format = sp, Jl = Te.plugins = void 0, Z0 = Ge(Yd), Bt = Se, e2 = Ge(
  $e
), t2 = Ge(qe), a2 = Ge(De), o2 = Ge(Be), r2 = Ge(Ue), n2 = Ge(je), i2 = Ge(
  Ve
);
function Ge(e) {
  return e && e.__esModule ? e : { default: e };
}
const Xd = Object.prototype.toString, l2 = Date.prototype.toISOString, s2 = Error.prototype.toString, Ds = RegExp.prototype.toString, vi = (e) => typeof e.constructor == "function" && e.constructor.name || "Object", u2 = (e) => typeof window < "u" && e === window, c2 = /^Symbol\((.*)\)(.*)$/, d2 = /\n/gi;
class Qd extends Error {
  constructor(t, a) {
    super(t), this.stack = a, this.name = this.constructor.name;
  }
}
function p2(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function f2(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function m2(e) {
  return `${e}n`;
}
function Bs(e, t) {
  return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]";
}
function Us(e) {
  return String(e).replace(c2, "Symbol($1)");
}
function js(e) {
  return "[" + s2.call(e) + "]";
}
function Zd(e, t, a, o) {
  if (e === !0 || e === !1)
    return "" + e;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const r = typeof e;
  if (r === "number")
    return f2(e);
  if (r === "bigint")
    return m2(e);
  if (r === "string")
    return o ? '"' + e.replace(/"|\\/g, "\\$&") + '"' : '"' + e + '"';
  if (r === "function")
    return Bs(e, t);
  if (r === "symbol")
    return Us(e);
  const n = Xd.call(e);
  return n === "[object WeakMap]" ? "WeakMap {}" : n === "[object WeakSet]" ? "WeakSet {}" : n === "[object Function]" || n === "[object GeneratorFunction]" ? Bs(e, t) : n === "[object Symbol]" ? Us(e) : n === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : l2.call(e) : n === "[object Error]" ? js(e) : n === "[object RegExp]" ? a ? Ds.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : Ds.call(e) : e instanceof Error ? js(e) : null;
}
function ep(e, t, a, o, r, n) {
  if (r.indexOf(e) !== -1)
    return "[Circular]";
  r = r.slice(), r.push(e);
  const i = ++o > t.maxDepth, s = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !n)
    return Pe(e.toJSON(), t, a, o, r, !0);
  const l = Xd.call(e);
  return l === "[object Arguments]" ? i ? "[Arguments]" : (s ? "" : "Arguments ") + "[" + (0, Bt.printListItems)(
    e,
    t,
    a,
    o,
    r,
    Pe
  ) + "]" : p2(l) ? i ? "[" + e.constructor.name + "]" : (s || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : e.constructor.name + " ") + "[" + (0, Bt.printListItems)(
    e,
    t,
    a,
    o,
    r,
    Pe
  ) + "]" : l === "[object Map]" ? i ? "[Map]" : "Map {" + (0, Bt.printIteratorEntries)(
    e.entries(),
    t,
    a,
    o,
    r,
    Pe,
    " => "
  ) + "}" : l === "[object Set]" ? i ? "[Set]" : "Set {" + (0, Bt.printIteratorValues)(
    e.values(),
    t,
    a,
    o,
    r,
    Pe
  ) + "}" : i || u2(e) ? "[" + vi(e) + "]" : (s || !t.printBasicPrototype && vi(e) === "Object" ? "" : vi(e) + " ") + "{" + (0, Bt.printObjectProperties)(
    e,
    t,
    a,
    o,
    r,
    Pe
  ) + "}";
}
function y2(e) {
  return e.serialize != null;
}
function tp(e, t, a, o, r, n) {
  let i;
  try {
    i = y2(e) ? e.serialize(t, a, o, r, n, Pe) : e.print(
      t,
      (s) => Pe(s, a, o, r, n),
      (s) => {
        const l = o + a.indent;
        return l + s.replace(d2, `
` + l);
      },
      {
        edgeSpacing: a.spacingOuter,
        min: a.min,
        spacing: a.spacingInner
      },
      a.colors
    );
  } catch (s) {
    throw new Qd(s.message, s.stack);
  }
  if (typeof i != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`
    );
  return i;
}
function ap(e, t) {
  for (let a = 0; a < e.length; a++)
    try {
      if (e[a].test(t))
        return e[a];
    } catch (o) {
      throw new Qd(o.message, o.stack);
    }
  return null;
}
function Pe(e, t, a, o, r, n) {
  const i = ap(t.plugins, e);
  if (i !== null)
    return tp(i, e, t, a, o, r);
  const s = Zd(
    e,
    t.printFunctionName,
    t.escapeRegex,
    t.escapeString
  );
  return s !== null ? s : ep(
    e,
    t,
    a,
    o,
    r,
    n
  );
}
const Xl = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, op = Object.keys(Xl), ne = {
  callToJSON: !0,
  compareKeys: void 0,
  escapeRegex: !1,
  escapeString: !0,
  highlight: !1,
  indent: 2,
  maxDepth: 1 / 0,
  min: !1,
  plugins: [],
  printBasicPrototype: !0,
  printFunctionName: !0,
  theme: Xl
};
var rp = Te.DEFAULT_OPTIONS = ne;
function h2(e) {
  if (Object.keys(e).forEach((t) => {
    if (!ne.hasOwnProperty(t))
      throw new Error(`pretty-format: Unknown option "${t}".`);
  }), e.min && e.indent !== void 0 && e.indent !== 0)
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  if (e.theme !== void 0) {
    if (e.theme === null)
      throw new Error('pretty-format: Option "theme" must not be null.');
    if (typeof e.theme != "object")
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`
      );
  }
}
const L2 = (e) => op.reduce((t, a) => {
  const o = e.theme && e.theme[a] !== void 0 ? e.theme[a] : Xl[a], r = o && Z0.default[o];
  if (r && typeof r.close == "string" && typeof r.open == "string")
    t[a] = r;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${a}" whose value "${o}" is undefined in ansi-styles.`
    );
  return t;
}, /* @__PURE__ */ Object.create(null)), b2 = () => op.reduce((e, t) => (e[t] = {
  close: "",
  open: ""
}, e), /* @__PURE__ */ Object.create(null)), np = (e) => e && e.printFunctionName !== void 0 ? e.printFunctionName : ne.printFunctionName, ip = (e) => e && e.escapeRegex !== void 0 ? e.escapeRegex : ne.escapeRegex, lp = (e) => e && e.escapeString !== void 0 ? e.escapeString : ne.escapeString, Vs = (e) => {
  var t;
  return {
    callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : ne.callToJSON,
    colors: e && e.highlight ? L2(e) : b2(),
    compareKeys: e && typeof e.compareKeys == "function" ? e.compareKeys : ne.compareKeys,
    escapeRegex: ip(e),
    escapeString: lp(e),
    indent: e && e.min ? "" : v2(
      e && e.indent !== void 0 ? e.indent : ne.indent
    ),
    maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : ne.maxDepth,
    min: e && e.min !== void 0 ? e.min : ne.min,
    plugins: e && e.plugins !== void 0 ? e.plugins : ne.plugins,
    printBasicPrototype: (t = e == null ? void 0 : e.printBasicPrototype) !== null && t !== void 0 ? t : !0,
    printFunctionName: np(e),
    spacingInner: e && e.min ? " " : `
`,
    spacingOuter: e && e.min ? "" : `
`
  };
};
function v2(e) {
  return new Array(e + 1).join(" ");
}
function sp(e, t) {
  if (t && (h2(t), t.plugins)) {
    const o = ap(t.plugins, e);
    if (o !== null)
      return tp(o, e, Vs(t), "", 0, []);
  }
  const a = Zd(
    e,
    np(t),
    ip(t),
    lp(t)
  );
  return a !== null ? a : ep(e, Vs(t), "", 0, []);
}
const T2 = {
  AsymmetricMatcher: e2.default,
  ConvertAnsi: t2.default,
  DOMCollection: a2.default,
  DOMElement: o2.default,
  Immutable: r2.default,
  ReactElement: n2.default,
  ReactTestComponent: i2.default
};
Jl = Te.plugins = T2;
var A2 = sp;
Kd = Te.default = A2;
const g2 = /* @__PURE__ */ Sd({
  __proto__: null,
  get DEFAULT_OPTIONS() {
    return rp;
  },
  get default() {
    return Kd;
  },
  format: Jd,
  get plugins() {
    return Jl;
  }
}, [Te]);
var S2 = Object.prototype.toString;
function Ws(e) {
  return typeof e == "function" || S2.call(e) === "[object Function]";
}
function Y2(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var R2 = Math.pow(2, 53) - 1;
function E2(e) {
  var t = Y2(e);
  return Math.min(Math.max(t, 0), R2);
}
function ie(e, t) {
  var a = Array, o = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  if (typeof t < "u" && !Ws(t))
    throw new TypeError("Array.from: when provided, the second argument must be a function");
  for (var r = E2(o.length), n = Ws(a) ? Object(new a(r)) : new Array(r), i = 0, s; i < r; )
    s = o[i], t ? n[i] = t(s, i) : n[i] = s, i += 1;
  return n.length = r, n;
}
function aa(e) {
  "@babel/helpers - typeof";
  return aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, aa(e);
}
function w2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hs(e, t) {
  for (var a = 0; a < t.length; a++) {
    var o = t[a];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, up(o.key), o);
  }
}
function C2(e, t, a) {
  return t && Hs(e.prototype, t), a && Hs(e, a), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _2(e, t, a) {
  return t = up(t), t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
function up(e) {
  var t = P2(e, "string");
  return aa(t) === "symbol" ? t : String(t);
}
function P2(e, t) {
  if (aa(e) !== "object" || e === null)
    return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var o = a.call(e, t || "default");
    if (aa(o) !== "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var I2 = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    w2(this, e), _2(this, "items", void 0), this.items = t;
  }
  return C2(e, [{
    key: "add",
    value: function(a) {
      return this.has(a) === !1 && this.items.push(a), this;
    }
  }, {
    key: "clear",
    value: function() {
      this.items = [];
    }
  }, {
    key: "delete",
    value: function(a) {
      var o = this.items.length;
      return this.items = this.items.filter(function(r) {
        return r !== a;
      }), o !== this.items.length;
    }
  }, {
    key: "forEach",
    value: function(a) {
      var o = this;
      this.items.forEach(function(r) {
        a(r, r, o);
      });
    }
  }, {
    key: "has",
    value: function(a) {
      return this.items.indexOf(a) !== -1;
    }
  }, {
    key: "size",
    get: function() {
      return this.items.length;
    }
  }]), e;
}();
const F2 = typeof Set > "u" ? Set : I2;
function z(e) {
  var t;
  return (
    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (t = e.localName) !== null && t !== void 0 ? t : (
      // eslint-disable-next-line no-restricted-properties -- required for the fallback
      e.tagName.toLowerCase()
    )
  );
}
var O2 = {
  article: "article",
  aside: "complementary",
  button: "button",
  datalist: "listbox",
  dd: "definition",
  details: "group",
  dialog: "dialog",
  dt: "term",
  fieldset: "group",
  figure: "figure",
  // WARNING: Only with an accessible name
  form: "form",
  footer: "contentinfo",
  h1: "heading",
  h2: "heading",
  h3: "heading",
  h4: "heading",
  h5: "heading",
  h6: "heading",
  header: "banner",
  hr: "separator",
  html: "document",
  legend: "legend",
  li: "listitem",
  math: "math",
  main: "main",
  menu: "list",
  nav: "navigation",
  ol: "list",
  optgroup: "group",
  // WARNING: Only in certain context
  option: "option",
  output: "status",
  progress: "progressbar",
  // WARNING: Only with an accessible name
  section: "region",
  summary: "button",
  table: "table",
  tbody: "rowgroup",
  textarea: "textbox",
  tfoot: "rowgroup",
  // WARNING: Only in certain context
  td: "cell",
  th: "columnheader",
  thead: "rowgroup",
  tr: "row",
  ul: "list"
}, M2 = {
  caption: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  code: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  deletion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  emphasis: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  generic: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
  insertion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  paragraph: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  presentation: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  strong: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  subscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  superscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"])
};
function x2(e, t) {
  return [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    // "disabled",
    "aria-dropeffect",
    // "errormessage",
    "aria-flowto",
    "aria-grabbed",
    // "haspopup",
    "aria-hidden",
    // "invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription"
  ].some(function(a) {
    var o;
    return e.hasAttribute(a) && !((o = M2[t]) !== null && o !== void 0 && o.has(a));
  });
}
function cp(e, t) {
  return x2(e, t);
}
function k2(e) {
  var t = $2(e);
  if (t === null || t === "presentation") {
    var a = N2(e);
    if (t !== "presentation" || cp(e, a || ""))
      return a;
  }
  return t;
}
function N2(e) {
  var t = O2[z(e)];
  if (t !== void 0)
    return t;
  switch (z(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href"))
        return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !cp(e, "img") ? "presentation" : "img";
    case "input": {
      var a = e, o = a.type;
      switch (o) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return o;
        case "range":
          return "slider";
        case "email":
        case "tel":
        case "text":
        case "url":
          return e.hasAttribute("list") ? "combobox" : "textbox";
        case "search":
          return e.hasAttribute("list") ? "combobox" : "searchbox";
        case "number":
          return "spinbutton";
        default:
          return null;
      }
    }
    case "select":
      return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox";
  }
  return null;
}
function $2(e) {
  var t = e.getAttribute("role");
  if (t !== null) {
    var a = t.trim().split(" ")[0];
    if (a.length > 0)
      return a;
  }
  return null;
}
function $(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function dp(e) {
  return $(e) && z(e) === "caption";
}
function Na(e) {
  return $(e) && z(e) === "input";
}
function q2(e) {
  return $(e) && z(e) === "optgroup";
}
function D2(e) {
  return $(e) && z(e) === "select";
}
function B2(e) {
  return $(e) && z(e) === "table";
}
function U2(e) {
  return $(e) && z(e) === "textarea";
}
function j2(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument, a = t.defaultView;
  if (a === null)
    throw new TypeError("no window available");
  return a;
}
function V2(e) {
  return $(e) && z(e) === "fieldset";
}
function W2(e) {
  return $(e) && z(e) === "legend";
}
function H2(e) {
  return $(e) && z(e) === "slot";
}
function z2(e) {
  return $(e) && e.ownerSVGElement !== void 0;
}
function G2(e) {
  return $(e) && z(e) === "svg";
}
function K2(e) {
  return z2(e) && z(e) === "title";
}
function Qa(e, t) {
  if ($(e) && e.hasAttribute(t)) {
    var a = e.getAttribute(t).split(" "), o = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return a.map(function(r) {
      return o.getElementById(r);
    }).filter(
      function(r) {
        return r !== null;
      }
      // TODO: why does this not narrow?
    );
  }
  return [];
}
function Le(e, t) {
  return $(e) ? t.indexOf(k2(e)) !== -1 : !1;
}
function J2(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function X2(e, t) {
  if (!$(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var a = t(e);
  return a.getPropertyValue("display") === "none" || a.getPropertyValue("visibility") === "hidden";
}
function Q2(e) {
  return Le(e, ["button", "combobox", "listbox", "textbox"]) || pp(e, "range");
}
function pp(e, t) {
  if (!$(e))
    return !1;
  switch (t) {
    case "range":
      return Le(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function zs(e, t) {
  var a = ie(e.querySelectorAll(t));
  return Qa(e, "aria-owns").forEach(function(o) {
    a.push.apply(a, ie(o.querySelectorAll(t)));
  }), a;
}
function Z2(e) {
  return D2(e) ? e.selectedOptions || zs(e, "[selected]") : zs(e, '[aria-selected="true"]');
}
function eh(e) {
  return Le(e, ["none", "presentation"]);
}
function th(e) {
  return dp(e);
}
function ah(e) {
  return Le(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function oh(e) {
  return !1;
}
function rh(e) {
  return Na(e) || U2(e) ? e.value : e.textContent || "";
}
function Gs(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function fp(e) {
  var t = z(e);
  return t === "button" || t === "input" && e.getAttribute("type") !== "hidden" || t === "meter" || t === "output" || t === "progress" || t === "select" || t === "textarea";
}
function mp(e) {
  if (fp(e))
    return e;
  var t = null;
  return e.childNodes.forEach(function(a) {
    if (t === null && $(a)) {
      var o = mp(a);
      o !== null && (t = o);
    }
  }), t;
}
function nh(e) {
  if (e.control !== void 0)
    return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : mp(e);
}
function ih(e) {
  var t = e.labels;
  if (t === null)
    return t;
  if (t !== void 0)
    return ie(t);
  if (!fp(e))
    return null;
  var a = e.ownerDocument;
  return ie(a.querySelectorAll("label")).filter(function(o) {
    return nh(o) === e;
  });
}
function lh(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? ie(e.childNodes) : t;
}
function yp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = new F2(), o = j2(e), r = t.compute, n = r === void 0 ? "name" : r, i = t.computedStyleSupportsPseudoElements, s = i === void 0 ? t.getComputedStyle !== void 0 : i, l = t.getComputedStyle, u = l === void 0 ? o.getComputedStyle.bind(o) : l, c = t.hidden, d = c === void 0 ? !1 : c;
  function p(f, A) {
    var Y = "";
    if ($(f) && s) {
      var S = u(f, "::before"), E = Gs(S);
      Y = "".concat(E, " ").concat(Y);
    }
    var m = H2(f) ? lh(f) : ie(f.childNodes).concat(Qa(f, "aria-owns"));
    if (m.forEach(function(O) {
      var D = R(O, {
        isEmbeddedInLabel: A.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), q = $(O) ? u(O).getPropertyValue("display") : "inline", B = q !== "inline" ? " " : "";
      Y += "".concat(B).concat(D).concat(B);
    }), $(f) && s) {
      var L = u(f, "::after"), T = Gs(L);
      Y = "".concat(Y, " ").concat(T);
    }
    return Y.trim();
  }
  function y(f, A) {
    var Y = f.getAttributeNode(A);
    return Y !== null && !a.has(Y) && Y.value.trim() !== "" ? (a.add(Y), Y.value) : null;
  }
  function h(f) {
    return $(f) ? y(f, "title") : null;
  }
  function b(f) {
    if (!$(f))
      return null;
    if (V2(f)) {
      a.add(f);
      for (var A = ie(f.childNodes), Y = 0; Y < A.length; Y += 1) {
        var S = A[Y];
        if (W2(S))
          return R(S, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (B2(f)) {
      a.add(f);
      for (var E = ie(f.childNodes), m = 0; m < E.length; m += 1) {
        var L = E[m];
        if (dp(L))
          return R(L, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (G2(f)) {
      a.add(f);
      for (var T = ie(f.childNodes), O = 0; O < T.length; O += 1) {
        var D = T[O];
        if (K2(D))
          return D.textContent;
      }
      return null;
    } else if (z(f) === "img" || z(f) === "area") {
      var q = y(f, "alt");
      if (q !== null)
        return q;
    } else if (q2(f)) {
      var B = y(f, "label");
      if (B !== null)
        return B;
    }
    if (Na(f) && (f.type === "button" || f.type === "submit" || f.type === "reset")) {
      var g = y(f, "value");
      if (g !== null)
        return g;
      if (f.type === "submit")
        return "Submit";
      if (f.type === "reset")
        return "Reset";
    }
    var C = ih(f);
    if (C !== null && C.length !== 0)
      return a.add(f), ie(C).map(function(Je) {
        return R(Je, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(Je) {
        return Je.length > 0;
      }).join(" ");
    if (Na(f) && f.type === "image") {
      var F = y(f, "alt");
      if (F !== null)
        return F;
      var U = y(f, "title");
      return U !== null ? U : "Submit Query";
    }
    if (Le(f, ["button"])) {
      var Z = p(f, {
        isEmbeddedInLabel: !1,
        isReferenced: !1
      });
      if (Z !== "")
        return Z;
    }
    return null;
  }
  function R(f, A) {
    if (a.has(f))
      return "";
    if (!d && X2(f, u) && !A.isReferenced)
      return a.add(f), "";
    var Y = $(f) ? f.getAttributeNode("aria-labelledby") : null, S = Y !== null && !a.has(Y) ? Qa(f, "aria-labelledby") : [];
    if (n === "name" && !A.isReferenced && S.length > 0)
      return a.add(Y), S.map(function(q) {
        return R(q, {
          isEmbeddedInLabel: A.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var E = A.recursion && Q2(f) && n === "name";
    if (!E) {
      var m = ($(f) && f.getAttribute("aria-label") || "").trim();
      if (m !== "" && n === "name")
        return a.add(f), m;
      if (!eh(f)) {
        var L = b(f);
        if (L !== null)
          return a.add(f), L;
      }
    }
    if (Le(f, ["menu"]))
      return a.add(f), "";
    if (E || A.isEmbeddedInLabel || A.isReferenced) {
      if (Le(f, ["combobox", "listbox"])) {
        a.add(f);
        var T = Z2(f);
        return T.length === 0 ? Na(f) ? f.value : "" : ie(T).map(function(q) {
          return R(q, {
            isEmbeddedInLabel: A.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (pp(f, "range"))
        return a.add(f), f.hasAttribute("aria-valuetext") ? f.getAttribute("aria-valuetext") : f.hasAttribute("aria-valuenow") ? f.getAttribute("aria-valuenow") : f.getAttribute("value") || "";
      if (Le(f, ["textbox"]))
        return a.add(f), rh(f);
    }
    if (ah(f) || $(f) && A.isReferenced || th(f) || oh()) {
      var O = p(f, {
        isEmbeddedInLabel: A.isEmbeddedInLabel,
        isReferenced: !1
      });
      if (O !== "")
        return a.add(f), O;
    }
    if (f.nodeType === f.TEXT_NODE)
      return a.add(f), f.textContent || "";
    if (A.recursion)
      return a.add(f), p(f, {
        isEmbeddedInLabel: A.isEmbeddedInLabel,
        isReferenced: !1
      });
    var D = h(f);
    return D !== null ? (a.add(f), D) : (a.add(f), "");
  }
  return J2(R(e, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: n === "description",
    recursion: !1
  }));
}
function oa(e) {
  "@babel/helpers - typeof";
  return oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oa(e);
}
function Ks(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, o);
  }
  return a;
}
function Js(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ks(Object(a), !0).forEach(function(o) {
      sh(e, o, a[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Ks(Object(a)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(a, o));
    });
  }
  return e;
}
function sh(e, t, a) {
  return t = uh(t), t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
function uh(e) {
  var t = ch(e, "string");
  return oa(t) === "symbol" ? t : String(t);
}
function ch(e, t) {
  if (oa(e) !== "object" || e === null)
    return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var o = a.call(e, t || "default");
    if (oa(o) !== "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = Qa(e, "aria-describedby").map(function(r) {
    return yp(r, Js(Js({}, t), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (a === "") {
    var o = e.getAttribute("title");
    a = o === null ? "" : o;
  }
  return a;
}
function dh(e) {
  return Le(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function Ql(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return dh(e) ? "" : yp(e, t);
}
var le = {}, go = {}, nt = {}, So = {};
Object.defineProperty(So, "__esModule", {
  value: !0
});
So.default = void 0;
function ph() {
  var e = this, t = 0, a = {
    "@@iterator": function() {
      return a;
    },
    next: function() {
      if (t < e.length) {
        var r = e[t];
        return t = t + 1, {
          done: !1,
          value: r
        };
      } else
        return {
          done: !0
        };
    }
  };
  return a;
}
var fh = ph;
So.default = fh;
Object.defineProperty(nt, "__esModule", {
  value: !0
});
nt.default = hh;
var mh = yh(So);
function yh(e) {
  return e && e.__esModule ? e : { default: e };
}
function rl(e) {
  "@babel/helpers - typeof";
  return rl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rl(e);
}
function hh(e, t) {
  return typeof Symbol == "function" && rl(Symbol.iterator) === "symbol" && Object.defineProperty(e, Symbol.iterator, {
    value: mh.default.bind(t)
  }), e;
}
Object.defineProperty(go, "__esModule", {
  value: !0
});
go.default = void 0;
var Lh = bh(nt);
function bh(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ti(e, t) {
  return Ah(e) || Th(e, t) || Lp(e, t) || vh();
}
function vh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Th(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var o = [], r = !0, n = !1, i, s;
    try {
      for (a = a.call(e); !(r = (i = a.next()).done) && (o.push(i.value), !(t && o.length === t)); r = !0)
        ;
    } catch (l) {
      n = !0, s = l;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (n)
          throw s;
      }
    }
    return o;
  }
}
function Ah(e) {
  if (Array.isArray(e))
    return e;
}
function gh(e, t) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = Lp(e)) || t && e && typeof e.length == "number") {
      a && (e = a);
      var o = 0, r = function() {
      };
      return { s: r, n: function() {
        return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
      }, e: function(u) {
        throw u;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var n = !0, i = !1, s;
  return { s: function() {
    a = a.call(e);
  }, n: function() {
    var u = a.next();
    return n = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !n && a.return != null && a.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function Lp(e, t) {
  if (e) {
    if (typeof e == "string")
      return Xs(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Xs(e, t);
  }
}
function Xs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, o = new Array(t); a < t; a++)
    o[a] = e[a];
  return o;
}
var pt = [["aria-activedescendant", {
  type: "id"
}], ["aria-atomic", {
  type: "boolean"
}], ["aria-autocomplete", {
  type: "token",
  values: ["inline", "list", "both", "none"]
}], ["aria-busy", {
  type: "boolean"
}], ["aria-checked", {
  type: "tristate"
}], ["aria-colcount", {
  type: "integer"
}], ["aria-colindex", {
  type: "integer"
}], ["aria-colspan", {
  type: "integer"
}], ["aria-controls", {
  type: "idlist"
}], ["aria-current", {
  type: "token",
  values: ["page", "step", "location", "date", "time", !0, !1]
}], ["aria-describedby", {
  type: "idlist"
}], ["aria-details", {
  type: "id"
}], ["aria-disabled", {
  type: "boolean"
}], ["aria-dropeffect", {
  type: "tokenlist",
  values: ["copy", "execute", "link", "move", "none", "popup"]
}], ["aria-errormessage", {
  type: "id"
}], ["aria-expanded", {
  type: "boolean",
  allowundefined: !0
}], ["aria-flowto", {
  type: "idlist"
}], ["aria-grabbed", {
  type: "boolean",
  allowundefined: !0
}], ["aria-haspopup", {
  type: "token",
  values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"]
}], ["aria-hidden", {
  type: "boolean",
  allowundefined: !0
}], ["aria-invalid", {
  type: "token",
  values: ["grammar", !1, "spelling", !0]
}], ["aria-keyshortcuts", {
  type: "string"
}], ["aria-label", {
  type: "string"
}], ["aria-labelledby", {
  type: "idlist"
}], ["aria-level", {
  type: "integer"
}], ["aria-live", {
  type: "token",
  values: ["assertive", "off", "polite"]
}], ["aria-modal", {
  type: "boolean"
}], ["aria-multiline", {
  type: "boolean"
}], ["aria-multiselectable", {
  type: "boolean"
}], ["aria-orientation", {
  type: "token",
  values: ["vertical", "undefined", "horizontal"]
}], ["aria-owns", {
  type: "idlist"
}], ["aria-placeholder", {
  type: "string"
}], ["aria-posinset", {
  type: "integer"
}], ["aria-pressed", {
  type: "tristate"
}], ["aria-readonly", {
  type: "boolean"
}], ["aria-relevant", {
  type: "tokenlist",
  values: ["additions", "all", "removals", "text"]
}], ["aria-required", {
  type: "boolean"
}], ["aria-roledescription", {
  type: "string"
}], ["aria-rowcount", {
  type: "integer"
}], ["aria-rowindex", {
  type: "integer"
}], ["aria-rowspan", {
  type: "integer"
}], ["aria-selected", {
  type: "boolean",
  allowundefined: !0
}], ["aria-setsize", {
  type: "integer"
}], ["aria-sort", {
  type: "token",
  values: ["ascending", "descending", "none", "other"]
}], ["aria-valuemax", {
  type: "number"
}], ["aria-valuemin", {
  type: "number"
}], ["aria-valuenow", {
  type: "number"
}], ["aria-valuetext", {
  type: "string"
}]], nl = {
  entries: function() {
    return pt;
  },
  forEach: function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, o = gh(pt), r;
    try {
      for (o.s(); !(r = o.n()).done; ) {
        var n = Ti(r.value, 2), i = n[0], s = n[1];
        t.call(a, s, i, pt);
      }
    } catch (l) {
      o.e(l);
    } finally {
      o.f();
    }
  },
  get: function(t) {
    var a = pt.find(function(o) {
      return o[0] === t;
    });
    return a && a[1];
  },
  has: function(t) {
    return !!nl.get(t);
  },
  keys: function() {
    return pt.map(function(t) {
      var a = Ti(t, 1), o = a[0];
      return o;
    });
  },
  values: function() {
    return pt.map(function(t) {
      var a = Ti(t, 2), o = a[1];
      return o;
    });
  }
}, Sh = (0, Lh.default)(nl, nl.entries());
go.default = Sh;
var Yo = {};
Object.defineProperty(Yo, "__esModule", {
  value: !0
});
Yo.default = void 0;
var Yh = Rh(nt);
function Rh(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ai(e, t) {
  return Ch(e) || wh(e, t) || bp(e, t) || Eh();
}
function Eh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wh(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var o = [], r = !0, n = !1, i, s;
    try {
      for (a = a.call(e); !(r = (i = a.next()).done) && (o.push(i.value), !(t && o.length === t)); r = !0)
        ;
    } catch (l) {
      n = !0, s = l;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (n)
          throw s;
      }
    }
    return o;
  }
}
function Ch(e) {
  if (Array.isArray(e))
    return e;
}
function _h(e, t) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = bp(e)) || t && e && typeof e.length == "number") {
      a && (e = a);
      var o = 0, r = function() {
      };
      return { s: r, n: function() {
        return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
      }, e: function(u) {
        throw u;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var n = !0, i = !1, s;
  return { s: function() {
    a = a.call(e);
  }, n: function() {
    var u = a.next();
    return n = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !n && a.return != null && a.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function bp(e, t) {
  if (e) {
    if (typeof e == "string")
      return Qs(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Qs(e, t);
  }
}
function Qs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, o = new Array(t); a < t; a++)
    o[a] = e[a];
  return o;
}
var ft = [["a", {
  reserved: !1
}], ["abbr", {
  reserved: !1
}], ["acronym", {
  reserved: !1
}], ["address", {
  reserved: !1
}], ["applet", {
  reserved: !1
}], ["area", {
  reserved: !1
}], ["article", {
  reserved: !1
}], ["aside", {
  reserved: !1
}], ["audio", {
  reserved: !1
}], ["b", {
  reserved: !1
}], ["base", {
  reserved: !0
}], ["bdi", {
  reserved: !1
}], ["bdo", {
  reserved: !1
}], ["big", {
  reserved: !1
}], ["blink", {
  reserved: !1
}], ["blockquote", {
  reserved: !1
}], ["body", {
  reserved: !1
}], ["br", {
  reserved: !1
}], ["button", {
  reserved: !1
}], ["canvas", {
  reserved: !1
}], ["caption", {
  reserved: !1
}], ["center", {
  reserved: !1
}], ["cite", {
  reserved: !1
}], ["code", {
  reserved: !1
}], ["col", {
  reserved: !0
}], ["colgroup", {
  reserved: !0
}], ["content", {
  reserved: !1
}], ["data", {
  reserved: !1
}], ["datalist", {
  reserved: !1
}], ["dd", {
  reserved: !1
}], ["del", {
  reserved: !1
}], ["details", {
  reserved: !1
}], ["dfn", {
  reserved: !1
}], ["dialog", {
  reserved: !1
}], ["dir", {
  reserved: !1
}], ["div", {
  reserved: !1
}], ["dl", {
  reserved: !1
}], ["dt", {
  reserved: !1
}], ["em", {
  reserved: !1
}], ["embed", {
  reserved: !1
}], ["fieldset", {
  reserved: !1
}], ["figcaption", {
  reserved: !1
}], ["figure", {
  reserved: !1
}], ["font", {
  reserved: !1
}], ["footer", {
  reserved: !1
}], ["form", {
  reserved: !1
}], ["frame", {
  reserved: !1
}], ["frameset", {
  reserved: !1
}], ["h1", {
  reserved: !1
}], ["h2", {
  reserved: !1
}], ["h3", {
  reserved: !1
}], ["h4", {
  reserved: !1
}], ["h5", {
  reserved: !1
}], ["h6", {
  reserved: !1
}], ["head", {
  reserved: !0
}], ["header", {
  reserved: !1
}], ["hgroup", {
  reserved: !1
}], ["hr", {
  reserved: !1
}], ["html", {
  reserved: !0
}], ["i", {
  reserved: !1
}], ["iframe", {
  reserved: !1
}], ["img", {
  reserved: !1
}], ["input", {
  reserved: !1
}], ["ins", {
  reserved: !1
}], ["kbd", {
  reserved: !1
}], ["keygen", {
  reserved: !1
}], ["label", {
  reserved: !1
}], ["legend", {
  reserved: !1
}], ["li", {
  reserved: !1
}], ["link", {
  reserved: !0
}], ["main", {
  reserved: !1
}], ["map", {
  reserved: !1
}], ["mark", {
  reserved: !1
}], ["marquee", {
  reserved: !1
}], ["menu", {
  reserved: !1
}], ["menuitem", {
  reserved: !1
}], ["meta", {
  reserved: !0
}], ["meter", {
  reserved: !1
}], ["nav", {
  reserved: !1
}], ["noembed", {
  reserved: !0
}], ["noscript", {
  reserved: !0
}], ["object", {
  reserved: !1
}], ["ol", {
  reserved: !1
}], ["optgroup", {
  reserved: !1
}], ["option", {
  reserved: !1
}], ["output", {
  reserved: !1
}], ["p", {
  reserved: !1
}], ["param", {
  reserved: !0
}], ["picture", {
  reserved: !0
}], ["pre", {
  reserved: !1
}], ["progress", {
  reserved: !1
}], ["q", {
  reserved: !1
}], ["rp", {
  reserved: !1
}], ["rt", {
  reserved: !1
}], ["rtc", {
  reserved: !1
}], ["ruby", {
  reserved: !1
}], ["s", {
  reserved: !1
}], ["samp", {
  reserved: !1
}], ["script", {
  reserved: !0
}], ["section", {
  reserved: !1
}], ["select", {
  reserved: !1
}], ["small", {
  reserved: !1
}], ["source", {
  reserved: !0
}], ["spacer", {
  reserved: !1
}], ["span", {
  reserved: !1
}], ["strike", {
  reserved: !1
}], ["strong", {
  reserved: !1
}], ["style", {
  reserved: !0
}], ["sub", {
  reserved: !1
}], ["summary", {
  reserved: !1
}], ["sup", {
  reserved: !1
}], ["table", {
  reserved: !1
}], ["tbody", {
  reserved: !1
}], ["td", {
  reserved: !1
}], ["textarea", {
  reserved: !1
}], ["tfoot", {
  reserved: !1
}], ["th", {
  reserved: !1
}], ["thead", {
  reserved: !1
}], ["time", {
  reserved: !1
}], ["title", {
  reserved: !0
}], ["tr", {
  reserved: !1
}], ["track", {
  reserved: !0
}], ["tt", {
  reserved: !1
}], ["u", {
  reserved: !1
}], ["ul", {
  reserved: !1
}], ["var", {
  reserved: !1
}], ["video", {
  reserved: !1
}], ["wbr", {
  reserved: !1
}], ["xmp", {
  reserved: !1
}]], il = {
  entries: function() {
    return ft;
  },
  forEach: function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, o = _h(ft), r;
    try {
      for (o.s(); !(r = o.n()).done; ) {
        var n = Ai(r.value, 2), i = n[0], s = n[1];
        t.call(a, s, i, ft);
      }
    } catch (l) {
      o.e(l);
    } finally {
      o.f();
    }
  },
  get: function(t) {
    var a = ft.find(function(o) {
      return o[0] === t;
    });
    return a && a[1];
  },
  has: function(t) {
    return !!il.get(t);
  },
  keys: function() {
    return ft.map(function(t) {
      var a = Ai(t, 1), o = a[0];
      return o;
    });
  },
  values: function() {
    return ft.map(function(t) {
      var a = Ai(t, 2), o = a[1];
      return o;
    });
  }
}, Ph = (0, Yh.default)(il, il.entries());
Yo.default = Ph;
var kt = {}, Ro = {}, Eo = {};
Object.defineProperty(Eo, "__esModule", {
  value: !0
});
Eo.default = void 0;
var Ih = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menuitem"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, Fh = Ih;
Eo.default = Fh;
var wo = {};
Object.defineProperty(wo, "__esModule", {
  value: !0
});
wo.default = void 0;
var Oh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, Mh = Oh;
wo.default = Mh;
var Co = {};
Object.defineProperty(Co, "__esModule", {
  value: !0
});
Co.default = void 0;
var xh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null
  },
  relatedConcepts: [{
    concept: {
      name: "input"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget"]]
}, kh = xh;
Co.default = kh;
var _o = {};
Object.defineProperty(_o, "__esModule", {
  value: !0
});
_o.default = void 0;
var Nh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, $h = Nh;
_o.default = $h;
var Po = {};
Object.defineProperty(Po, "__esModule", {
  value: !0
});
Po.default = void 0;
var qh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, Dh = qh;
Po.default = Dh;
var Io = {};
Object.defineProperty(Io, "__esModule", {
  value: !0
});
Io.default = void 0;
var Bh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {
    "aria-atomic": null,
    "aria-busy": null,
    "aria-controls": null,
    "aria-current": null,
    "aria-describedby": null,
    "aria-details": null,
    "aria-dropeffect": null,
    "aria-flowto": null,
    "aria-grabbed": null,
    "aria-hidden": null,
    "aria-keyshortcuts": null,
    "aria-label": null,
    "aria-labelledby": null,
    "aria-live": null,
    "aria-owns": null,
    "aria-relevant": null,
    "aria-roledescription": null
  },
  relatedConcepts: [{
    concept: {
      name: "rel"
    },
    module: "HTML"
  }, {
    concept: {
      name: "role"
    },
    module: "XHTML"
  }, {
    concept: {
      name: "type"
    },
    module: "Dublin Core"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: []
}, Uh = Bh;
Io.default = Uh;
var Fo = {};
Object.defineProperty(Fo, "__esModule", {
  value: !0
});
Fo.default = void 0;
var jh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "frontmatter"
    },
    module: "DTB"
  }, {
    concept: {
      name: "level"
    },
    module: "DTB"
  }, {
    concept: {
      name: "level"
    },
    module: "SMIL"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, Vh = jh;
Fo.default = Vh;
var Oo = {};
Object.defineProperty(Oo, "__esModule", {
  value: !0
});
Oo.default = void 0;
var Wh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, Hh = Wh;
Oo.default = Hh;
var Mo = {};
Object.defineProperty(Mo, "__esModule", {
  value: !0
});
Mo.default = void 0;
var zh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "group"]]
}, Gh = zh;
Mo.default = Gh;
var xo = {};
Object.defineProperty(xo, "__esModule", {
  value: !0
});
xo.default = void 0;
var Kh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, Jh = Kh;
xo.default = Jh;
var ko = {};
Object.defineProperty(ko, "__esModule", {
  value: !0
});
ko.default = void 0;
var Xh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, Qh = Xh;
ko.default = Qh;
var No = {};
Object.defineProperty(No, "__esModule", {
  value: !0
});
No.default = void 0;
var Zh = {
  abstract: !0,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-modal": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype"]]
}, eL = Zh;
No.default = eL;
Object.defineProperty(Ro, "__esModule", {
  value: !0
});
Ro.default = void 0;
var tL = te(Eo), aL = te(wo), oL = te(Co), rL = te(_o), nL = te(Po), iL = te(Io), lL = te(Fo), sL = te(Oo), uL = te(Mo), cL = te(xo), dL = te(ko), pL = te(No);
function te(e) {
  return e && e.__esModule ? e : { default: e };
}
var fL = [["command", tL.default], ["composite", aL.default], ["input", oL.default], ["landmark", rL.default], ["range", nL.default], ["roletype", iL.default], ["section", lL.default], ["sectionhead", sL.default], ["select", uL.default], ["structure", cL.default], ["widget", dL.default], ["window", pL.default]], mL = fL;
Ro.default = mL;
var $o = {}, qo = {};
Object.defineProperty(qo, "__esModule", {
  value: !0
});
qo.default = void 0;
var yL = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-atomic": "true",
    "aria-live": "assertive"
  },
  relatedConcepts: [{
    concept: {
      name: "alert"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, hL = yL;
qo.default = hL;
var Do = {};
Object.defineProperty(Do, "__esModule", {
  value: !0
});
Do.default = void 0;
var LL = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "alert"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "alert"], ["roletype", "window", "dialog"]]
}, bL = LL;
Do.default = bL;
var Bo = {};
Object.defineProperty(Bo, "__esModule", {
  value: !0
});
Bo.default = void 0;
var vL = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "Device Independence Delivery Unit"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, TL = vL;
Bo.default = TL;
var Uo = {};
Object.defineProperty(Uo, "__esModule", {
  value: !0
});
Uo.default = void 0;
var AL = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "article"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "document"]]
}, gL = AL;
Uo.default = gL;
var jo = {};
Object.defineProperty(jo, "__esModule", {
  value: !0
});
jo.default = void 0;
var SL = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      constraints: ["direct descendant of document"],
      name: "header"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, YL = SL;
jo.default = YL;
var Vo = {};
Object.defineProperty(Vo, "__esModule", {
  value: !0
});
Vo.default = void 0;
var RL = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, EL = RL;
Vo.default = EL;
var Wo = {};
Object.defineProperty(Wo, "__esModule", {
  value: !0
});
Wo.default = void 0;
var wL = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-pressed": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-pressed"
      }, {
        name: "type",
        value: "checkbox"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "aria-expanded",
        value: "false"
      }],
      name: "summary"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "aria-expanded",
        value: "true"
      }],
      constraints: ["direct descendant of details element with the open attribute defined"],
      name: "summary"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "button"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "image"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "reset"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "type",
        value: "submit"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "button"
    },
    module: "HTML"
  }, {
    concept: {
      name: "trigger"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, CL = wL;
Wo.default = CL;
var Ho = {};
Object.defineProperty(Ho, "__esModule", {
  value: !0
});
Ho.default = void 0;
var _L = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: ["figure", "grid", "table"],
  requiredContextRole: ["figure", "grid", "table"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, PL = _L;
Ho.default = PL;
var zo = {};
Object.defineProperty(zo, "__esModule", {
  value: !0
});
zo.default = void 0;
var IL = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-colindex": null,
    "aria-colspan": null,
    "aria-rowindex": null,
    "aria-rowspan": null
  },
  relatedConcepts: [{
    concept: {
      constraints: ["descendant of table"],
      name: "td"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, FL = IL;
zo.default = FL;
var Go = {};
Object.defineProperty(Go, "__esModule", {
  value: !0
});
Go.default = void 0;
var OL = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "checkbox"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "option"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input"]]
}, ML = OL;
Go.default = ML;
var Ko = {};
Object.defineProperty(Ko, "__esModule", {
  value: !0
});
Ko.default = void 0;
var xL = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, kL = xL;
Ko.default = kL;
var Jo = {};
Object.defineProperty(Jo, "__esModule", {
  value: !0
});
Jo.default = void 0;
var NL = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-sort": null
  },
  relatedConcepts: [{
    attributes: [{
      name: "scope",
      value: "col"
    }],
    concept: {
      name: "th"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
}, $L = NL;
Jo.default = $L;
var Xo = {};
Object.defineProperty(Xo, "__esModule", {
  value: !0
});
Xo.default = void 0;
var qL = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-autocomplete": null,
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-expanded": "false",
    "aria-haspopup": "listbox"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "email"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "search"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "tel"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "text"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "multiple"
      }, {
        constraints: ["undefined"],
        name: "size"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "multiple"
      }, {
        name: "size",
        value: 1
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-controls": null,
    "aria-expanded": "false"
  },
  superClass: [["roletype", "widget", "input"]]
}, DL = qL;
Xo.default = DL;
var Qo = {};
Object.defineProperty(Qo, "__esModule", {
  value: !0
});
Qo.default = void 0;
var BL = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "aside"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, UL = BL;
Qo.default = UL;
var Zo = {};
Object.defineProperty(Zo, "__esModule", {
  value: !0
});
Zo.default = void 0;
var jL = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      constraints: ["direct descendant of document"],
      name: "footer"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, VL = jL;
Zo.default = VL;
var er = {};
Object.defineProperty(er, "__esModule", {
  value: !0
});
er.default = void 0;
var WL = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dd"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, HL = WL;
er.default = HL;
var tr = {};
Object.defineProperty(tr, "__esModule", {
  value: !0
});
tr.default = void 0;
var zL = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, GL = zL;
tr.default = GL;
var ar = {};
Object.defineProperty(ar, "__esModule", {
  value: !0
});
ar.default = void 0;
var KL = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dialog"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "window"]]
}, JL = KL;
ar.default = JL;
var or = {};
Object.defineProperty(or, "__esModule", {
  value: !0
});
or.default = void 0;
var XL = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    module: "DAISY Guide"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "list"]]
}, QL = XL;
or.default = QL;
var rr = {};
Object.defineProperty(rr, "__esModule", {
  value: !0
});
rr.default = void 0;
var ZL = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "Device Independence Delivery Unit"
    }
  }, {
    concept: {
      name: "body"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, eb = ZL;
rr.default = eb;
var nr = {};
Object.defineProperty(nr, "__esModule", {
  value: !0
});
nr.default = void 0;
var tb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, ab = tb;
nr.default = ab;
var ir = {};
Object.defineProperty(ir, "__esModule", {
  value: !0
});
ir.default = void 0;
var ob = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["article"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "list"]]
}, rb = ob;
ir.default = rb;
var lr = {};
Object.defineProperty(lr, "__esModule", {
  value: !0
});
lr.default = void 0;
var nb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "figure"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, ib = nb;
lr.default = ib;
var sr = {};
Object.defineProperty(sr, "__esModule", {
  value: !0
});
sr.default = void 0;
var lb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-label"
      }],
      name: "form"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-labelledby"
      }],
      name: "form"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "name"
      }],
      name: "form"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, sb = lb;
sr.default = sb;
var ur = {};
Object.defineProperty(ur, "__esModule", {
  value: !0
});
ur.default = void 0;
var ub = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "span"
    },
    module: "HTML"
  }, {
    concept: {
      name: "div"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, cb = ub;
ur.default = cb;
var cr = {};
Object.defineProperty(cr, "__esModule", {
  value: !0
});
cr.default = void 0;
var db = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-multiselectable": null,
    "aria-readonly": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "role",
        value: "grid"
      }],
      name: "table"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "table"]]
}, pb = db;
cr.default = pb;
var dr = {};
Object.defineProperty(dr, "__esModule", {
  value: !0
});
dr.default = void 0;
var fb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-selected": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "role",
        value: "gridcell"
      }],
      name: "td"
    },
    module: "HTML"
  }],
  requireContextRole: ["row"],
  requiredContextRole: ["row"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "widget"]]
}, mb = fb;
dr.default = mb;
var pr = {};
Object.defineProperty(pr, "__esModule", {
  value: !0
});
pr.default = void 0;
var yb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-disabled": null
  },
  relatedConcepts: [{
    concept: {
      name: "details"
    },
    module: "HTML"
  }, {
    concept: {
      name: "fieldset"
    },
    module: "HTML"
  }, {
    concept: {
      name: "optgroup"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, hb = yb;
pr.default = hb;
var fr = {};
Object.defineProperty(fr, "__esModule", {
  value: !0
});
fr.default = void 0;
var Lb = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-level": "2"
  },
  relatedConcepts: [{
    concept: {
      name: "h1"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h2"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h3"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h4"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h5"
    },
    module: "HTML"
  }, {
    concept: {
      name: "h6"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-level": "2"
  },
  superClass: [["roletype", "structure", "sectionhead"]]
}, bb = Lb;
fr.default = bb;
var mr = {};
Object.defineProperty(mr, "__esModule", {
  value: !0
});
mr.default = void 0;
var vb = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "alt"
      }],
      name: "img"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "alt"
      }],
      name: "img"
    },
    module: "HTML"
  }, {
    concept: {
      name: "imggroup"
    },
    module: "DTB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Tb = vb;
mr.default = Tb;
var yr = {};
Object.defineProperty(yr, "__esModule", {
  value: !0
});
yr.default = void 0;
var Ab = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, gb = Ab;
yr.default = gb;
var hr = {};
Object.defineProperty(hr, "__esModule", {
  value: !0
});
hr.default = void 0;
var Sb = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "href"
      }],
      name: "a"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "href"
      }],
      name: "area"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "href"
      }],
      name: "link"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, Yb = Sb;
hr.default = Yb;
var Lr = {};
Object.defineProperty(Lr, "__esModule", {
  value: !0
});
Lr.default = void 0;
var Rb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menu"
    },
    module: "HTML"
  }, {
    concept: {
      name: "ol"
    },
    module: "HTML"
  }, {
    concept: {
      name: "ul"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["listitem"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Eb = Rb;
Lr.default = Eb;
var br = {};
Object.defineProperty(br, "__esModule", {
  value: !0
});
br.default = void 0;
var wb = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-invalid": null,
    "aria-multiselectable": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-orientation": "vertical"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: [">1"],
        name: "size"
      }, {
        name: "multiple"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: [">1"],
        name: "size"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "multiple"
      }],
      name: "select"
    },
    module: "HTML"
  }, {
    concept: {
      name: "datalist"
    },
    module: "HTML"
  }, {
    concept: {
      name: "list"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["option", "group"], ["option"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, Cb = wb;
br.default = Cb;
var vr = {};
Object.defineProperty(vr, "__esModule", {
  value: !0
});
vr.default = void 0;
var _b = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-level": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      constraints: ["direct descendant of ol, ul or menu"],
      name: "li"
    },
    module: "HTML"
  }, {
    concept: {
      name: "item"
    },
    module: "XForms"
  }],
  requireContextRole: ["directory", "list"],
  requiredContextRole: ["directory", "list"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Pb = _b;
vr.default = Pb;
var Tr = {};
Object.defineProperty(Tr, "__esModule", {
  value: !0
});
Tr.default = void 0;
var Ib = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-live": "polite"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Fb = Ib;
Tr.default = Fb;
var Ar = {};
Object.defineProperty(Ar, "__esModule", {
  value: !0
});
Ar.default = void 0;
var Ob = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "main"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Mb = Ob;
Ar.default = Mb;
var gr = {};
Object.defineProperty(gr, "__esModule", {
  value: !0
});
gr.default = void 0;
var xb = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, kb = xb;
gr.default = kb;
var Sr = {};
Object.defineProperty(Sr, "__esModule", {
  value: !0
});
Sr.default = void 0;
var Nb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "math"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, $b = Nb;
Sr.default = $b;
var Yr = {};
Object.defineProperty(Yr, "__esModule", {
  value: !0
});
Yr.default = void 0;
var qb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "vertical"
  },
  relatedConcepts: [{
    concept: {
      name: "MENU"
    },
    module: "JAPI"
  }, {
    concept: {
      name: "list"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "select"
    },
    module: "XForms"
  }, {
    concept: {
      name: "sidebar"
    },
    module: "DTB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, Db = qb;
Yr.default = Db;
var Rr = {};
Object.defineProperty(Rr, "__esModule", {
  value: !0
});
Rr.default = void 0;
var Bb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    concept: {
      name: "toolbar"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select", "menu"], ["roletype", "structure", "section", "group", "select", "menu"]]
}, Ub = Bb;
Rr.default = Ub;
var Er = {};
Object.defineProperty(Er, "__esModule", {
  value: !0
});
Er.default = void 0;
var jb = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "MENU_ITEM"
    },
    module: "JAPI"
  }, {
    concept: {
      name: "listitem"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "menuitem"
    },
    module: "HTML"
  }, {
    concept: {
      name: "option"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command"]]
}, Vb = jb;
Er.default = Vb;
var wr = {};
Object.defineProperty(wr, "__esModule", {
  value: !0
});
wr.default = void 0;
var Wb = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menuitem"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox"], ["roletype", "widget", "command", "menuitem"]]
}, Hb = Wb;
wr.default = Hb;
var Cr = {};
Object.defineProperty(Cr, "__esModule", {
  value: !0
});
Cr.default = void 0;
var zb = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "menuitem"
    },
    module: "ARIA"
  }],
  requireContextRole: ["group", "menu", "menubar"],
  requiredContextRole: ["group", "menu", "menubar"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox", "menuitemcheckbox"], ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"], ["roletype", "widget", "input", "radio"]]
}, Gb = zb;
Cr.default = Gb;
var _r = {};
Object.defineProperty(_r, "__esModule", {
  value: !0
});
_r.default = void 0;
var Kb = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuetext": null,
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-valuenow": null
  },
  superClass: [["roletype", "structure", "range"]]
}, Jb = Kb;
_r.default = Jb;
var Pr = {};
Object.defineProperty(Pr, "__esModule", {
  value: !0
});
Pr.default = void 0;
var Xb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "nav"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Qb = Xb;
Pr.default = Qb;
var Ir = {};
Object.defineProperty(Ir, "__esModule", {
  value: !0
});
Ir.default = void 0;
var Zb = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: []
}, ev = Zb;
Ir.default = ev;
var Fr = {};
Object.defineProperty(Fr, "__esModule", {
  value: !0
});
Fr.default = void 0;
var tv = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, av = tv;
Fr.default = av;
var Or = {};
Object.defineProperty(Or, "__esModule", {
  value: !0
});
Or.default = void 0;
var ov = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-posinset": null,
    "aria-setsize": null,
    "aria-selected": "false"
  },
  relatedConcepts: [{
    concept: {
      name: "item"
    },
    module: "XForms"
  }, {
    concept: {
      name: "listitem"
    },
    module: "ARIA"
  }, {
    concept: {
      name: "option"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-selected": "false"
  },
  superClass: [["roletype", "widget", "input"]]
}, rv = ov;
Or.default = rv;
var Mr = {};
Object.defineProperty(Mr, "__esModule", {
  value: !0
});
Mr.default = void 0;
var nv = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, iv = nv;
Mr.default = iv;
var xr = {};
Object.defineProperty(xr, "__esModule", {
  value: !0
});
xr.default = void 0;
var lv = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, sv = lv;
xr.default = sv;
var kr = {};
Object.defineProperty(kr, "__esModule", {
  value: !0
});
kr.default = void 0;
var uv = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-valuetext": null
  },
  relatedConcepts: [{
    concept: {
      name: "progress"
    },
    module: "HTML"
  }, {
    concept: {
      name: "status"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
}, cv = uv;
kr.default = cv;
var Nr = {};
Object.defineProperty(Nr, "__esModule", {
  value: !0
});
Nr.default = void 0;
var dv = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-checked": null,
    "aria-posinset": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "radio"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input"]]
}, pv = dv;
Nr.default = pv;
var $r = {};
Object.defineProperty($r, "__esModule", {
  value: !0
});
$r.default = void 0;
var fv = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      name: "list"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["radio"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, mv = fv;
$r.default = mv;
var qr = {};
Object.defineProperty(qr, "__esModule", {
  value: !0
});
qr.default = void 0;
var yv = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-label"
      }],
      name: "section"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["set"],
        name: "aria-labelledby"
      }],
      name: "section"
    },
    module: "HTML"
  }, {
    concept: {
      name: "Device Independence Glossart perceivable unit"
    }
  }, {
    concept: {
      name: "frame"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, hv = yv;
qr.default = hv;
var Dr = {};
Object.defineProperty(Dr, "__esModule", {
  value: !0
});
Dr.default = void 0;
var Lv = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-colindex": null,
    "aria-expanded": null,
    "aria-level": null,
    "aria-posinset": null,
    "aria-rowindex": null,
    "aria-selected": null,
    "aria-setsize": null
  },
  relatedConcepts: [{
    concept: {
      name: "tr"
    },
    module: "HTML"
  }],
  requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
  requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
  requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"], ["roletype", "widget"]]
}, bv = Lv;
Dr.default = bv;
var Br = {};
Object.defineProperty(Br, "__esModule", {
  value: !0
});
Br.default = void 0;
var vv = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "tbody"
    },
    module: "HTML"
  }, {
    concept: {
      name: "tfoot"
    },
    module: "HTML"
  }, {
    concept: {
      name: "thead"
    },
    module: "HTML"
  }],
  requireContextRole: ["grid", "table", "treegrid"],
  requiredContextRole: ["grid", "table", "treegrid"],
  requiredOwnedElements: [["row"]],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, Tv = vv;
Br.default = Tv;
var Ur = {};
Object.defineProperty(Ur, "__esModule", {
  value: !0
});
Ur.default = void 0;
var Av = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-sort": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "scope",
        value: "row"
      }],
      name: "th"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        name: "scope",
        value: "rowgroup"
      }],
      name: "th"
    },
    module: "HTML"
  }],
  requireContextRole: ["row", "rowgroup"],
  requiredContextRole: ["row", "rowgroup"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
}, gv = Av;
Ur.default = gv;
var jr = {};
Object.defineProperty(jr, "__esModule", {
  value: !0
});
jr.default = void 0;
var Sv = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-valuetext": null,
    "aria-orientation": "vertical",
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-controls": null,
    "aria-valuenow": null
  },
  superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
}, Yv = Sv;
jr.default = Yv;
var Vr = {};
Object.defineProperty(Vr, "__esModule", {
  value: !0
});
Vr.default = void 0;
var Rv = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Ev = Rv;
Vr.default = Ev;
var Wr = {};
Object.defineProperty(Wr, "__esModule", {
  value: !0
});
Wr.default = void 0;
var wv = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "search"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "input", "textbox"]]
}, Cv = wv;
Wr.default = Cv;
var Hr = {};
Object.defineProperty(Hr, "__esModule", {
  value: !0
});
Hr.default = void 0;
var _v = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-orientation": "horizontal",
    "aria-valuemax": "100",
    "aria-valuemin": "0",
    "aria-valuenow": null,
    "aria-valuetext": null
  },
  relatedConcepts: [{
    concept: {
      name: "hr"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure"]]
}, Pv = _v;
Hr.default = Pv;
var zr = {};
Object.defineProperty(zr, "__esModule", {
  value: !0
});
zr.default = void 0;
var Iv = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-valuetext": null,
    "aria-orientation": "horizontal",
    "aria-valuemax": "100",
    "aria-valuemin": "0"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "range"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-valuenow": null
  },
  superClass: [["roletype", "widget", "input"], ["roletype", "structure", "range"]]
}, Fv = Iv;
zr.default = Fv;
var Gr = {};
Object.defineProperty(Gr, "__esModule", {
  value: !0
});
Gr.default = void 0;
var Ov = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-readonly": null,
    "aria-required": null,
    "aria-valuetext": null,
    "aria-valuenow": "0"
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: "type",
        value: "number"
      }],
      name: "input"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"], ["roletype", "widget", "input"], ["roletype", "structure", "range"]]
}, Mv = Ov;
Gr.default = Mv;
var Kr = {};
Object.defineProperty(Kr, "__esModule", {
  value: !0
});
Kr.default = void 0;
var xv = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-atomic": "true",
    "aria-live": "polite"
  },
  relatedConcepts: [{
    concept: {
      name: "output"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, kv = xv;
Kr.default = kv;
var Jr = {};
Object.defineProperty(Jr, "__esModule", {
  value: !0
});
Jr.default = void 0;
var Nv = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, $v = Nv;
Jr.default = $v;
var Xr = {};
Object.defineProperty(Xr, "__esModule", {
  value: !0
});
Xr.default = void 0;
var qv = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Dv = qv;
Xr.default = Dv;
var Qr = {};
Object.defineProperty(Qr, "__esModule", {
  value: !0
});
Qr.default = void 0;
var Bv = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["prohibited"],
  prohibitedProps: ["aria-label", "aria-labelledby"],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Uv = Bv;
Qr.default = Uv;
var Zr = {};
Object.defineProperty(Zr, "__esModule", {
  value: !0
});
Zr.default = void 0;
var jv = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "button"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-checked": null
  },
  superClass: [["roletype", "widget", "input", "checkbox"]]
}, Vv = jv;
Zr.default = Vv;
var en = {};
Object.defineProperty(en, "__esModule", {
  value: !0
});
en.default = void 0;
var Wv = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-posinset": null,
    "aria-setsize": null,
    "aria-selected": "false"
  },
  relatedConcepts: [],
  requireContextRole: ["tablist"],
  requiredContextRole: ["tablist"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "sectionhead"], ["roletype", "widget"]]
}, Hv = Wv;
en.default = Hv;
var tn = {};
Object.defineProperty(tn, "__esModule", {
  value: !0
});
tn.default = void 0;
var zv = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-colcount": null,
    "aria-rowcount": null
  },
  relatedConcepts: [{
    concept: {
      name: "table"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Gv = zv;
tn.default = Gv;
var an = {};
Object.defineProperty(an, "__esModule", {
  value: !0
});
an.default = void 0;
var Kv = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-level": null,
    "aria-multiselectable": null,
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    module: "DAISY",
    concept: {
      name: "guide"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["tab"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite"]]
}, Jv = Kv;
an.default = Jv;
var on = {};
Object.defineProperty(on, "__esModule", {
  value: !0
});
on.default = void 0;
var Xv = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Qv = Xv;
on.default = Qv;
var rn = {};
Object.defineProperty(rn, "__esModule", {
  value: !0
});
rn.default = void 0;
var Zv = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "dfn"
    },
    module: "HTML"
  }, {
    concept: {
      name: "dt"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, eT = Zv;
rn.default = eT;
var nn = {};
Object.defineProperty(nn, "__esModule", {
  value: !0
});
nn.default = void 0;
var tT = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-activedescendant": null,
    "aria-autocomplete": null,
    "aria-errormessage": null,
    "aria-haspopup": null,
    "aria-invalid": null,
    "aria-multiline": null,
    "aria-placeholder": null,
    "aria-readonly": null,
    "aria-required": null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "type"
      }, {
        constraints: ["undefined"],
        name: "list"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "email"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "tel"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "text"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      attributes: [{
        constraints: ["undefined"],
        name: "list"
      }, {
        name: "type",
        value: "url"
      }],
      name: "input"
    },
    module: "HTML"
  }, {
    concept: {
      name: "input"
    },
    module: "XForms"
  }, {
    concept: {
      name: "textarea"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "input"]]
}, aT = tT;
nn.default = aT;
var ln = {};
Object.defineProperty(ln, "__esModule", {
  value: !0
});
ln.default = void 0;
var oT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, rT = oT;
ln.default = rT;
var sn = {};
Object.defineProperty(sn, "__esModule", {
  value: !0
});
sn.default = void 0;
var nT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "status"]]
}, iT = nT;
sn.default = iT;
var un = {};
Object.defineProperty(un, "__esModule", {
  value: !0
});
un.default = void 0;
var lT = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-orientation": "horizontal"
  },
  relatedConcepts: [{
    concept: {
      name: "menubar"
    },
    module: "ARIA"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"]]
}, sT = lT;
un.default = sT;
var cn = {};
Object.defineProperty(cn, "__esModule", {
  value: !0
});
cn.default = void 0;
var uT = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, cT = uT;
cn.default = cT;
var dn = {};
Object.defineProperty(dn, "__esModule", {
  value: !0
});
dn.default = void 0;
var dT = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null,
    "aria-multiselectable": null,
    "aria-required": null,
    "aria-orientation": "vertical"
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
}, pT = dT;
dn.default = pT;
var pn = {};
Object.defineProperty(pn, "__esModule", {
  value: !0
});
pn.default = void 0;
var fT = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["row"], ["row", "rowgroup"]],
  requiredProps: {},
  superClass: [["roletype", "widget", "composite", "grid"], ["roletype", "structure", "section", "table", "grid"], ["roletype", "widget", "composite", "select", "tree"], ["roletype", "structure", "section", "group", "select", "tree"]]
}, mT = fT;
pn.default = mT;
var fn = {};
Object.defineProperty(fn, "__esModule", {
  value: !0
});
fn.default = void 0;
var yT = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-expanded": null,
    "aria-haspopup": null
  },
  relatedConcepts: [],
  requireContextRole: ["group", "tree"],
  requiredContextRole: ["group", "tree"],
  requiredOwnedElements: [],
  requiredProps: {
    "aria-selected": null
  },
  superClass: [["roletype", "structure", "section", "listitem"], ["roletype", "widget", "input", "option"]]
}, hT = yT;
fn.default = hT;
Object.defineProperty($o, "__esModule", {
  value: !0
});
$o.default = void 0;
var LT = v(qo), bT = v(Do), vT = v(Bo), TT = v(Uo), AT = v(jo), gT = v(Vo), ST = v(Wo), YT = v(Ho), RT = v(zo), ET = v(Go), wT = v(Ko), CT = v(Jo), _T = v(Xo), PT = v(Qo), IT = v(Zo), FT = v(er), OT = v(tr), MT = v(ar), xT = v(or), kT = v(rr), NT = v(nr), $T = v(ir), qT = v(lr), DT = v(sr), BT = v(ur), UT = v(cr), jT = v(dr), VT = v(pr), WT = v(fr), HT = v(mr), zT = v(yr), GT = v(hr), KT = v(Lr), JT = v(br), XT = v(vr), QT = v(Tr), ZT = v(Ar), eA = v(gr), tA = v(Sr), aA = v(Yr), oA = v(Rr), rA = v(Er), nA = v(wr), iA = v(Cr), lA = v(_r), sA = v(Pr), uA = v(Ir), cA = v(Fr), dA = v(Or), pA = v(Mr), fA = v(xr), mA = v(kr), yA = v(Nr), hA = v($r), LA = v(qr), bA = v(Dr), vA = v(Br), TA = v(Ur), AA = v(jr), gA = v(Vr), SA = v(Wr), YA = v(Hr), RA = v(zr), EA = v(Gr), wA = v(Kr), CA = v(Jr), _A = v(Xr), PA = v(Qr), IA = v(Zr), FA = v(en), OA = v(tn), MA = v(an), xA = v(on), kA = v(rn), NA = v(nn), $A = v(ln), qA = v(sn), DA = v(un), BA = v(cn), UA = v(dn), jA = v(pn), VA = v(fn);
function v(e) {
  return e && e.__esModule ? e : { default: e };
}
var WA = [["alert", LT.default], ["alertdialog", bT.default], ["application", vT.default], ["article", TT.default], ["banner", AT.default], ["blockquote", gT.default], ["button", ST.default], ["caption", YT.default], ["cell", RT.default], ["checkbox", ET.default], ["code", wT.default], ["columnheader", CT.default], ["combobox", _T.default], ["complementary", PT.default], ["contentinfo", IT.default], ["definition", FT.default], ["deletion", OT.default], ["dialog", MT.default], ["directory", xT.default], ["document", kT.default], ["emphasis", NT.default], ["feed", $T.default], ["figure", qT.default], ["form", DT.default], ["generic", BT.default], ["grid", UT.default], ["gridcell", jT.default], ["group", VT.default], ["heading", WT.default], ["img", HT.default], ["insertion", zT.default], ["link", GT.default], ["list", KT.default], ["listbox", JT.default], ["listitem", XT.default], ["log", QT.default], ["main", ZT.default], ["marquee", eA.default], ["math", tA.default], ["menu", aA.default], ["menubar", oA.default], ["menuitem", rA.default], ["menuitemcheckbox", nA.default], ["menuitemradio", iA.default], ["meter", lA.default], ["navigation", sA.default], ["none", uA.default], ["note", cA.default], ["option", dA.default], ["paragraph", pA.default], ["presentation", fA.default], ["progressbar", mA.default], ["radio", yA.default], ["radiogroup", hA.default], ["region", LA.default], ["row", bA.default], ["rowgroup", vA.default], ["rowheader", TA.default], ["scrollbar", AA.default], ["search", gA.default], ["searchbox", SA.default], ["separator", YA.default], ["slider", RA.default], ["spinbutton", EA.default], ["status", wA.default], ["strong", CA.default], ["subscript", _A.default], ["superscript", PA.default], ["switch", IA.default], ["tab", FA.default], ["table", OA.default], ["tablist", MA.default], ["tabpanel", xA.default], ["term", kA.default], ["textbox", NA.default], ["time", $A.default], ["timer", qA.default], ["toolbar", DA.default], ["tooltip", BA.default], ["tree", UA.default], ["treegrid", jA.default], ["treeitem", VA.default]], HA = WA;
$o.default = HA;
var mn = {}, yn = {};
Object.defineProperty(yn, "__esModule", {
  value: !0
});
yn.default = void 0;
var zA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "abstract [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, GA = zA;
yn.default = GA;
var hn = {};
Object.defineProperty(hn, "__esModule", {
  value: !0
});
hn.default = void 0;
var KA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "acknowledgments [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, JA = KA;
hn.default = JA;
var Ln = {};
Object.defineProperty(Ln, "__esModule", {
  value: !0
});
Ln.default = void 0;
var XA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "afterword [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, QA = XA;
Ln.default = QA;
var bn = {};
Object.defineProperty(bn, "__esModule", {
  value: !0
});
bn.default = void 0;
var ZA = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "appendix [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, eg = ZA;
bn.default = eg;
var vn = {};
Object.defineProperty(vn, "__esModule", {
  value: !0
});
vn.default = void 0;
var tg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "content"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "referrer [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, ag = tg;
vn.default = ag;
var Tn = {};
Object.defineProperty(Tn, "__esModule", {
  value: !0
});
Tn.default = void 0;
var og = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "EPUB biblioentry [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: ["doc-bibliography"],
  requiredContextRole: ["doc-bibliography"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "listitem"]]
}, rg = og;
Tn.default = rg;
var An = {};
Object.defineProperty(An, "__esModule", {
  value: !0
});
An.default = void 0;
var ng = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "bibliography [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["doc-biblioentry"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, ig = ng;
An.default = ig;
var gn = {};
Object.defineProperty(gn, "__esModule", {
  value: !0
});
gn.default = void 0;
var lg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "biblioref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, sg = lg;
gn.default = sg;
var Sn = {};
Object.defineProperty(Sn, "__esModule", {
  value: !0
});
Sn.default = void 0;
var ug = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "chapter [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, cg = ug;
Sn.default = cg;
var Yn = {};
Object.defineProperty(Yn, "__esModule", {
  value: !0
});
Yn.default = void 0;
var dg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "colophon [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, pg = dg;
Yn.default = pg;
var Rn = {};
Object.defineProperty(Rn, "__esModule", {
  value: !0
});
Rn.default = void 0;
var fg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "conclusion [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, mg = fg;
Rn.default = mg;
var En = {};
Object.defineProperty(En, "__esModule", {
  value: !0
});
En.default = void 0;
var yg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "cover [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "img"]]
}, hg = yg;
En.default = hg;
var wn = {};
Object.defineProperty(wn, "__esModule", {
  value: !0
});
wn.default = void 0;
var Lg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "credit [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, bg = Lg;
wn.default = bg;
var Cn = {};
Object.defineProperty(Cn, "__esModule", {
  value: !0
});
Cn.default = void 0;
var vg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "credits [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Tg = vg;
Cn.default = Tg;
var _n = {};
Object.defineProperty(_n, "__esModule", {
  value: !0
});
_n.default = void 0;
var Ag = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "dedication [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, gg = Ag;
_n.default = gg;
var Pn = {};
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.default = void 0;
var Sg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "rearnote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: ["doc-endnotes"],
  requiredContextRole: ["doc-endnotes"],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "listitem"]]
}, Yg = Sg;
Pn.default = Yg;
var In = {};
Object.defineProperty(In, "__esModule", {
  value: !0
});
In.default = void 0;
var Rg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "rearnotes [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["doc-endnote"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Eg = Rg;
In.default = Eg;
var Fn = {};
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
Fn.default = void 0;
var wg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "epigraph [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Cg = wg;
Fn.default = Cg;
var On = {};
Object.defineProperty(On, "__esModule", {
  value: !0
});
On.default = void 0;
var _g = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "epilogue [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Pg = _g;
On.default = Pg;
var Mn = {};
Object.defineProperty(Mn, "__esModule", {
  value: !0
});
Mn.default = void 0;
var Ig = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "errata [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Fg = Ig;
Mn.default = Fg;
var xn = {};
Object.defineProperty(xn, "__esModule", {
  value: !0
});
xn.default = void 0;
var Og = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Mg = Og;
xn.default = Mg;
var kn = {};
Object.defineProperty(kn, "__esModule", {
  value: !0
});
kn.default = void 0;
var xg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "footnote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, kg = xg;
kn.default = kg;
var Nn = {};
Object.defineProperty(Nn, "__esModule", {
  value: !0
});
Nn.default = void 0;
var Ng = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "foreword [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, $g = Ng;
Nn.default = $g;
var $n = {};
Object.defineProperty($n, "__esModule", {
  value: !0
});
$n.default = void 0;
var qg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "glossary [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["definition"], ["term"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Dg = qg;
$n.default = Dg;
var qn = {};
Object.defineProperty(qn, "__esModule", {
  value: !0
});
qn.default = void 0;
var Bg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "glossref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, Ug = Bg;
qn.default = Ug;
var Dn = {};
Object.defineProperty(Dn, "__esModule", {
  value: !0
});
Dn.default = void 0;
var jg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "index [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, Vg = jg;
Dn.default = Vg;
var Bn = {};
Object.defineProperty(Bn, "__esModule", {
  value: !0
});
Bn.default = void 0;
var Wg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "introduction [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Hg = Wg;
Bn.default = Hg;
var Un = {};
Object.defineProperty(Un, "__esModule", {
  value: !0
});
Un.default = void 0;
var zg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "noteref [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "widget", "command", "link"]]
}, Gg = zg;
Un.default = Gg;
var jn = {};
Object.defineProperty(jn, "__esModule", {
  value: !0
});
jn.default = void 0;
var Kg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "notice [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "note"]]
}, Jg = Kg;
jn.default = Jg;
var Vn = {};
Object.defineProperty(Vn, "__esModule", {
  value: !0
});
Vn.default = void 0;
var Xg = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "pagebreak [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "separator"]]
}, Qg = Xg;
Vn.default = Qg;
var Wn = {};
Object.defineProperty(Wn, "__esModule", {
  value: !0
});
Wn.default = void 0;
var Zg = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "page-list [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, eS = Zg;
Wn.default = eS;
var Hn = {};
Object.defineProperty(Hn, "__esModule", {
  value: !0
});
Hn.default = void 0;
var tS = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "part [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, aS = tS;
Hn.default = aS;
var zn = {};
Object.defineProperty(zn, "__esModule", {
  value: !0
});
zn.default = void 0;
var oS = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "preface [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, rS = oS;
zn.default = rS;
var Gn = {};
Object.defineProperty(Gn, "__esModule", {
  value: !0
});
Gn.default = void 0;
var nS = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "prologue [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, iS = nS;
Gn.default = iS;
var Kn = {};
Object.defineProperty(Kn, "__esModule", {
  value: !0
});
Kn.default = void 0;
var lS = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: "pullquote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["none"]]
}, sS = lS;
Kn.default = sS;
var Jn = {};
Object.defineProperty(Jn, "__esModule", {
  value: !0
});
Jn.default = void 0;
var uS = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "qna [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, cS = uS;
Jn.default = cS;
var Xn = {};
Object.defineProperty(Xn, "__esModule", {
  value: !0
});
Xn.default = void 0;
var dS = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "subtitle [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "sectionhead"]]
}, pS = dS;
Xn.default = pS;
var Qn = {};
Object.defineProperty(Qn, "__esModule", {
  value: !0
});
Qn.default = void 0;
var fS = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "help [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "note"]]
}, mS = fS;
Qn.default = mS;
var Zn = {};
Object.defineProperty(Zn, "__esModule", {
  value: !0
});
Zn.default = void 0;
var yS = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    concept: {
      name: "toc [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
}, hS = yS;
Zn.default = hS;
Object.defineProperty(mn, "__esModule", {
  value: !0
});
mn.default = void 0;
var LS = P(yn), bS = P(hn), vS = P(Ln), TS = P(bn), AS = P(vn), gS = P(Tn), SS = P(An), YS = P(gn), RS = P(Sn), ES = P(Yn), wS = P(Rn), CS = P(En), _S = P(wn), PS = P(Cn), IS = P(_n), FS = P(Pn), OS = P(In), MS = P(Fn), xS = P(On), kS = P(Mn), NS = P(xn), $S = P(kn), qS = P(Nn), DS = P($n), BS = P(qn), US = P(Dn), jS = P(Bn), VS = P(Un), WS = P(jn), HS = P(Vn), zS = P(Wn), GS = P(Hn), KS = P(zn), JS = P(Gn), XS = P(Kn), QS = P(Jn), ZS = P(Xn), eY = P(Qn), tY = P(Zn);
function P(e) {
  return e && e.__esModule ? e : { default: e };
}
var aY = [["doc-abstract", LS.default], ["doc-acknowledgments", bS.default], ["doc-afterword", vS.default], ["doc-appendix", TS.default], ["doc-backlink", AS.default], ["doc-biblioentry", gS.default], ["doc-bibliography", SS.default], ["doc-biblioref", YS.default], ["doc-chapter", RS.default], ["doc-colophon", ES.default], ["doc-conclusion", wS.default], ["doc-cover", CS.default], ["doc-credit", _S.default], ["doc-credits", PS.default], ["doc-dedication", IS.default], ["doc-endnote", FS.default], ["doc-endnotes", OS.default], ["doc-epigraph", MS.default], ["doc-epilogue", xS.default], ["doc-errata", kS.default], ["doc-example", NS.default], ["doc-footnote", $S.default], ["doc-foreword", qS.default], ["doc-glossary", DS.default], ["doc-glossref", BS.default], ["doc-index", US.default], ["doc-introduction", jS.default], ["doc-noteref", VS.default], ["doc-notice", WS.default], ["doc-pagebreak", HS.default], ["doc-pagelist", zS.default], ["doc-part", GS.default], ["doc-preface", KS.default], ["doc-prologue", JS.default], ["doc-pullquote", XS.default], ["doc-qna", QS.default], ["doc-subtitle", ZS.default], ["doc-tip", eY.default], ["doc-toc", tY.default]], oY = aY;
mn.default = oY;
var ei = {}, ti = {};
Object.defineProperty(ti, "__esModule", {
  value: !0
});
ti.default = void 0;
var rY = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    module: "GRAPHICS",
    concept: {
      name: "graphics-object"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "img"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "article"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "document"]]
}, nY = rY;
ti.default = nY;
var ai = {};
Object.defineProperty(ai, "__esModule", {
  value: !0
});
ai.default = void 0;
var iY = {
  abstract: !1,
  accessibleNameRequired: !1,
  baseConcepts: [],
  childrenPresentational: !1,
  nameFrom: ["author", "contents"],
  prohibitedProps: [],
  props: {
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [{
    module: "GRAPHICS",
    concept: {
      name: "graphics-document"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "group"
    }
  }, {
    module: "ARIA",
    concept: {
      name: "img"
    }
  }, {
    module: "GRAPHICS",
    concept: {
      name: "graphics-symbol"
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "group"]]
}, lY = iY;
ai.default = lY;
var oi = {};
Object.defineProperty(oi, "__esModule", {
  value: !0
});
oi.default = void 0;
var sY = {
  abstract: !1,
  accessibleNameRequired: !0,
  baseConcepts: [],
  childrenPresentational: !0,
  nameFrom: ["author"],
  prohibitedProps: [],
  props: {
    "aria-disabled": null,
    "aria-errormessage": null,
    "aria-expanded": null,
    "aria-haspopup": null,
    "aria-invalid": null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "img"]]
}, uY = sY;
oi.default = uY;
Object.defineProperty(ei, "__esModule", {
  value: !0
});
ei.default = void 0;
var cY = Zl(ti), dY = Zl(ai), pY = Zl(oi);
function Zl(e) {
  return e && e.__esModule ? e : { default: e };
}
var fY = [["graphics-document", cY.default], ["graphics-object", dY.default], ["graphics-symbol", pY.default]], mY = fY;
ei.default = mY;
Object.defineProperty(kt, "__esModule", {
  value: !0
});
kt.default = void 0;
var yY = pa(Ro), hY = pa($o), LY = pa(mn), bY = pa(ei), vY = pa(nt);
function pa(e) {
  return e && e.__esModule ? e : { default: e };
}
function TY(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
function ll(e, t) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = vp(e)) || t && e && typeof e.length == "number") {
      a && (e = a);
      var o = 0, r = function() {
      };
      return { s: r, n: function() {
        return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
      }, e: function(u) {
        throw u;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var n = !0, i = !1, s;
  return { s: function() {
    a = a.call(e);
  }, n: function() {
    var u = a.next();
    return n = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !n && a.return != null && a.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function Gt(e, t) {
  return SY(e) || gY(e, t) || vp(e, t) || AY();
}
function AY() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vp(e, t) {
  if (e) {
    if (typeof e == "string")
      return Zs(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Zs(e, t);
  }
}
function Zs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, o = new Array(t); a < t; a++)
    o[a] = e[a];
  return o;
}
function gY(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var o = [], r = !0, n = !1, i, s;
    try {
      for (a = a.call(e); !(r = (i = a.next()).done) && (o.push(i.value), !(t && o.length === t)); r = !0)
        ;
    } catch (l) {
      n = !0, s = l;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (n)
          throw s;
      }
    }
    return o;
  }
}
function SY(e) {
  if (Array.isArray(e))
    return e;
}
var Ie = [].concat(yY.default, hY.default, LY.default, bY.default);
Ie.forEach(function(e) {
  var t = Gt(e, 2), a = t[1], o = ll(a.superClass), r;
  try {
    for (o.s(); !(r = o.n()).done; ) {
      var n = r.value, i = ll(n), s;
      try {
        var l = function() {
          var c = s.value, d = Ie.find(function(R) {
            var f = Gt(R, 1), A = f[0];
            return A === c;
          });
          if (d)
            for (var p = d[1], y = 0, h = Object.keys(p.props); y < h.length; y++) {
              var b = h[y];
              Object.prototype.hasOwnProperty.call(a.props, b) || Object.assign(a.props, TY({}, b, p.props[b]));
            }
        };
        for (i.s(); !(s = i.n()).done; )
          l();
      } catch (u) {
        i.e(u);
      } finally {
        i.f();
      }
    }
  } catch (u) {
    o.e(u);
  } finally {
    o.f();
  }
});
var sl = {
  entries: function() {
    return Ie;
  },
  forEach: function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, o = ll(Ie), r;
    try {
      for (o.s(); !(r = o.n()).done; ) {
        var n = Gt(r.value, 2), i = n[0], s = n[1];
        t.call(a, s, i, Ie);
      }
    } catch (l) {
      o.e(l);
    } finally {
      o.f();
    }
  },
  get: function(t) {
    var a = Ie.find(function(o) {
      return o[0] === t;
    });
    return a && a[1];
  },
  has: function(t) {
    return !!sl.get(t);
  },
  keys: function() {
    return Ie.map(function(t) {
      var a = Gt(t, 1), o = a[0];
      return o;
    });
  },
  values: function() {
    return Ie.map(function(t) {
      var a = Gt(t, 2), o = a[1];
      return o;
    });
  }
}, YY = (0, vY.default)(sl, sl.entries());
kt.default = YY;
var ri = {}, eu = Object.prototype.toString, Tp = function(t) {
  var a = eu.call(t), o = a === "[object Arguments]";
  return o || (o = a !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && eu.call(t.callee) === "[object Function]"), o;
}, gi, tu;
function RY() {
  if (tu)
    return gi;
  tu = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, a = Object.prototype.toString, o = Tp, r = Object.prototype.propertyIsEnumerable, n = !r.call({ toString: null }, "toString"), i = r.call(function() {
    }, "prototype"), s = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], l = function(p) {
      var y = p.constructor;
      return y && y.prototype === p;
    }, u = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, c = function() {
      if (typeof window > "u")
        return !1;
      for (var p in window)
        try {
          if (!u["$" + p] && t.call(window, p) && window[p] !== null && typeof window[p] == "object")
            try {
              l(window[p]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), d = function(p) {
      if (typeof window > "u" || !c)
        return l(p);
      try {
        return l(p);
      } catch {
        return !1;
      }
    };
    e = function(y) {
      var h = y !== null && typeof y == "object", b = a.call(y) === "[object Function]", R = o(y), f = h && a.call(y) === "[object String]", A = [];
      if (!h && !b && !R)
        throw new TypeError("Object.keys called on a non-object");
      var Y = i && b;
      if (f && y.length > 0 && !t.call(y, 0))
        for (var S = 0; S < y.length; ++S)
          A.push(String(S));
      if (R && y.length > 0)
        for (var E = 0; E < y.length; ++E)
          A.push(String(E));
      else
        for (var m in y)
          !(Y && m === "prototype") && t.call(y, m) && A.push(String(m));
      if (n)
        for (var L = d(y), T = 0; T < s.length; ++T)
          !(L && s[T] === "constructor") && t.call(y, s[T]) && A.push(s[T]);
      return A;
    };
  }
  return gi = e, gi;
}
var EY = Array.prototype.slice, wY = Tp, au = Object.keys, $a = au ? function(t) {
  return au(t);
} : RY(), ou = Object.keys;
$a.shim = function() {
  if (Object.keys) {
    var t = function() {
      var a = Object.keys(arguments);
      return a && a.length === arguments.length;
    }(1, 2);
    t || (Object.keys = function(o) {
      return wY(o) ? ou(EY.call(o)) : ou(o);
    });
  } else
    Object.keys = $a;
  return Object.keys || $a;
};
var es = $a, ni = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, a = Symbol("test"), o = Object(a);
  if (typeof a == "string" || Object.prototype.toString.call(a) !== "[object Symbol]" || Object.prototype.toString.call(o) !== "[object Symbol]")
    return !1;
  var r = 42;
  t[a] = r;
  for (a in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var n = Object.getOwnPropertySymbols(t);
  if (n.length !== 1 || n[0] !== a || !Object.prototype.propertyIsEnumerable.call(t, a))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var i = Object.getOwnPropertyDescriptor(t, a);
    if (i.value !== r || i.enumerable !== !0)
      return !1;
  }
  return !0;
}, ru = typeof Symbol < "u" && Symbol, CY = ni, ts = function() {
  return typeof ru != "function" || typeof Symbol != "function" || typeof ru("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : CY();
}, nu = {
  foo: {}
}, _Y = Object, PY = function() {
  return { __proto__: nu }.foo === nu.foo && !({ __proto__: null } instanceof _Y);
}, IY = "Function.prototype.bind called on incompatible ", FY = Object.prototype.toString, OY = Math.max, MY = "[object Function]", iu = function(t, a) {
  for (var o = [], r = 0; r < t.length; r += 1)
    o[r] = t[r];
  for (var n = 0; n < a.length; n += 1)
    o[n + t.length] = a[n];
  return o;
}, xY = function(t, a) {
  for (var o = [], r = a || 0, n = 0; r < t.length; r += 1, n += 1)
    o[n] = t[r];
  return o;
}, kY = function(e, t) {
  for (var a = "", o = 0; o < e.length; o += 1)
    a += e[o], o + 1 < e.length && (a += t);
  return a;
}, NY = function(t) {
  var a = this;
  if (typeof a != "function" || FY.apply(a) !== MY)
    throw new TypeError(IY + a);
  for (var o = xY(arguments, 1), r, n = function() {
    if (this instanceof r) {
      var c = a.apply(
        this,
        iu(o, arguments)
      );
      return Object(c) === c ? c : this;
    }
    return a.apply(
      t,
      iu(o, arguments)
    );
  }, i = OY(0, a.length - o.length), s = [], l = 0; l < i; l++)
    s[l] = "$" + l;
  if (r = Function("binder", "return function (" + kY(s, ",") + "){ return binder.apply(this,arguments); }")(n), a.prototype) {
    var u = function() {
    };
    u.prototype = a.prototype, r.prototype = new u(), u.prototype = null;
  }
  return r;
}, $Y = NY, Ap = Function.prototype.bind || $Y, lu = {}.hasOwnProperty, Si = Function.prototype.call, gp = Si.bind ? Si.bind(lu) : function(e, t) {
  return Si.call(lu, e, t);
}, I, Rt = SyntaxError, Sp = Function, At = TypeError, Yi = function(e) {
  try {
    return Sp('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Ze = Object.getOwnPropertyDescriptor;
if (Ze)
  try {
    Ze({}, "");
  } catch {
    Ze = null;
  }
var Ri = function() {
  throw new At();
}, qY = Ze ? function() {
  try {
    return arguments.callee, Ri;
  } catch {
    try {
      return Ze(arguments, "callee").get;
    } catch {
      return Ri;
    }
  }
}() : Ri, mt = ts(), DY = PY(), j = Object.getPrototypeOf || (DY ? function(e) {
  return e.__proto__;
} : null), bt = {}, BY = typeof Uint8Array > "u" || !j ? I : j(Uint8Array), et = {
  "%AggregateError%": typeof AggregateError > "u" ? I : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? I : ArrayBuffer,
  "%ArrayIteratorPrototype%": mt && j ? j([][Symbol.iterator]()) : I,
  "%AsyncFromSyncIteratorPrototype%": I,
  "%AsyncFunction%": bt,
  "%AsyncGenerator%": bt,
  "%AsyncGeneratorFunction%": bt,
  "%AsyncIteratorPrototype%": bt,
  "%Atomics%": typeof Atomics > "u" ? I : Atomics,
  "%BigInt%": typeof BigInt > "u" ? I : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? I : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? I : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? I : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? I : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? I : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? I : FinalizationRegistry,
  "%Function%": Sp,
  "%GeneratorFunction%": bt,
  "%Int8Array%": typeof Int8Array > "u" ? I : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? I : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? I : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": mt && j ? j(j([][Symbol.iterator]())) : I,
  "%JSON%": typeof JSON == "object" ? JSON : I,
  "%Map%": typeof Map > "u" ? I : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !mt || !j ? I : j((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? I : Promise,
  "%Proxy%": typeof Proxy > "u" ? I : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? I : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? I : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !mt || !j ? I : j((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? I : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": mt && j ? j(""[Symbol.iterator]()) : I,
  "%Symbol%": mt ? Symbol : I,
  "%SyntaxError%": Rt,
  "%ThrowTypeError%": qY,
  "%TypedArray%": BY,
  "%TypeError%": At,
  "%Uint8Array%": typeof Uint8Array > "u" ? I : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? I : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? I : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? I : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? I : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? I : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? I : WeakSet
};
if (j)
  try {
    null.error;
  } catch (e) {
    var UY = j(j(e));
    et["%Error.prototype%"] = UY;
  }
var jY = function e(t) {
  var a;
  if (t === "%AsyncFunction%")
    a = Yi("async function () {}");
  else if (t === "%GeneratorFunction%")
    a = Yi("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    a = Yi("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var o = e("%AsyncGeneratorFunction%");
    o && (a = o.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var r = e("%AsyncGenerator%");
    r && j && (a = j(r.prototype));
  }
  return et[t] = a, a;
}, su = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, fa = Ap, Za = gp, VY = fa.call(Function.call, Array.prototype.concat), WY = fa.call(Function.apply, Array.prototype.splice), uu = fa.call(Function.call, String.prototype.replace), eo = fa.call(Function.call, String.prototype.slice), HY = fa.call(Function.call, RegExp.prototype.exec), zY = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, GY = /\\(\\)?/g, KY = function(t) {
  var a = eo(t, 0, 1), o = eo(t, -1);
  if (a === "%" && o !== "%")
    throw new Rt("invalid intrinsic syntax, expected closing `%`");
  if (o === "%" && a !== "%")
    throw new Rt("invalid intrinsic syntax, expected opening `%`");
  var r = [];
  return uu(t, zY, function(n, i, s, l) {
    r[r.length] = s ? uu(l, GY, "$1") : i || n;
  }), r;
}, JY = function(t, a) {
  var o = t, r;
  if (Za(su, o) && (r = su[o], o = "%" + r[0] + "%"), Za(et, o)) {
    var n = et[o];
    if (n === bt && (n = jY(o)), typeof n > "u" && !a)
      throw new At("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: r,
      name: o,
      value: n
    };
  }
  throw new Rt("intrinsic " + t + " does not exist!");
}, ue = function(t, a) {
  if (typeof t != "string" || t.length === 0)
    throw new At("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof a != "boolean")
    throw new At('"allowMissing" argument must be a boolean');
  if (HY(/^%?[^%]*%?$/, t) === null)
    throw new Rt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var o = KY(t), r = o.length > 0 ? o[0] : "", n = JY("%" + r + "%", a), i = n.name, s = n.value, l = !1, u = n.alias;
  u && (r = u[0], WY(o, VY([0, 1], u)));
  for (var c = 1, d = !0; c < o.length; c += 1) {
    var p = o[c], y = eo(p, 0, 1), h = eo(p, -1);
    if ((y === '"' || y === "'" || y === "`" || h === '"' || h === "'" || h === "`") && y !== h)
      throw new Rt("property names with quotes must have matching quotes");
    if ((p === "constructor" || !d) && (l = !0), r += "." + p, i = "%" + r + "%", Za(et, i))
      s = et[i];
    else if (s != null) {
      if (!(p in s)) {
        if (!a)
          throw new At("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (Ze && c + 1 >= o.length) {
        var b = Ze(s, p);
        d = !!b, d && "get" in b && !("originalValue" in b.get) ? s = b.get : s = s[p];
      } else
        d = Za(s, p), s = s[p];
      d && !l && (et[i] = s);
    }
  }
  return s;
}, XY = ue, ul = XY("%Object.defineProperty%", !0), cl = function() {
  if (ul)
    try {
      return ul({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
cl.hasArrayLengthDefineBug = function() {
  if (!cl())
    return null;
  try {
    return ul([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var as = cl, QY = ue, qa = QY("%Object.getOwnPropertyDescriptor%", !0);
if (qa)
  try {
    qa([], "length");
  } catch {
    qa = null;
  }
var Yp = qa, ZY = as(), os = ue, Kt = ZY && os("%Object.defineProperty%", !0);
if (Kt)
  try {
    Kt({}, "a", { value: 1 });
  } catch {
    Kt = !1;
  }
var eR = os("%SyntaxError%"), yt = os("%TypeError%"), cu = Yp, Rp = function(t, a, o) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new yt("`obj` must be an object or a function`");
  if (typeof a != "string" && typeof a != "symbol")
    throw new yt("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new yt("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new yt("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new yt("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new yt("`loose`, if provided, must be a boolean");
  var r = arguments.length > 3 ? arguments[3] : null, n = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, l = !!cu && cu(t, a);
  if (Kt)
    Kt(t, a, {
      configurable: i === null && l ? l.configurable : !i,
      enumerable: r === null && l ? l.enumerable : !r,
      value: o,
      writable: n === null && l ? l.writable : !n
    });
  else if (s || !r && !n && !i)
    t[a] = o;
  else
    throw new eR("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, tR = es, aR = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", oR = Object.prototype.toString, rR = Array.prototype.concat, du = Rp, nR = function(e) {
  return typeof e == "function" && oR.call(e) === "[object Function]";
}, Ep = as(), iR = function(e, t, a, o) {
  if (t in e) {
    if (o === !0) {
      if (e[t] === a)
        return;
    } else if (!nR(o) || !o())
      return;
  }
  Ep ? du(e, t, a, !0) : du(e, t, a);
}, wp = function(e, t) {
  var a = arguments.length > 2 ? arguments[2] : {}, o = tR(t);
  aR && (o = rR.call(o, Object.getOwnPropertySymbols(t)));
  for (var r = 0; r < o.length; r += 1)
    iR(e, o[r], t[o[r]], a[o[r]]);
};
wp.supportsDescriptors = !!Ep;
var it = wp, Cp = { exports: {} };
(function(e) {
  var t = Ap, a = ue, o = a("%Function.prototype.apply%"), r = a("%Function.prototype.call%"), n = a("%Reflect.apply%", !0) || t.call(r, o), i = a("%Object.getOwnPropertyDescriptor%", !0), s = a("%Object.defineProperty%", !0), l = a("%Math.max%");
  if (s)
    try {
      s({}, "a", { value: 1 });
    } catch {
      s = null;
    }
  e.exports = function(d) {
    var p = n(t, r, arguments);
    if (i && s) {
      var y = i(p, "length");
      y.configurable && s(
        p,
        "length",
        { value: 1 + l(0, d.length - (arguments.length - 1)) }
      );
    }
    return p;
  };
  var u = function() {
    return n(t, o, arguments);
  };
  s ? s(e.exports, "apply", { value: u }) : e.exports.apply = u;
})(Cp);
var Nt = Cp.exports, _p = ue, Pp = Nt, lR = Pp(_p("String.prototype.indexOf")), ae = function(t, a) {
  var o = _p(t, !!a);
  return typeof o == "function" && lR(t, ".prototype.") > -1 ? Pp(o) : o;
}, sR = es, Ip = ni(), Fp = ae, pu = Object, uR = Fp("Array.prototype.push"), fu = Fp("Object.prototype.propertyIsEnumerable"), cR = Ip ? Object.getOwnPropertySymbols : null, Op = function(t, a) {
  if (t == null)
    throw new TypeError("target must be an object");
  var o = pu(t);
  if (arguments.length === 1)
    return o;
  for (var r = 1; r < arguments.length; ++r) {
    var n = pu(arguments[r]), i = sR(n), s = Ip && (Object.getOwnPropertySymbols || cR);
    if (s)
      for (var l = s(n), u = 0; u < l.length; ++u) {
        var c = l[u];
        fu(n, c) && uR(i, c);
      }
    for (var d = 0; d < i.length; ++d) {
      var p = i[d];
      if (fu(n, p)) {
        var y = n[p];
        o[p] = y;
      }
    }
  }
  return o;
}, Ei = Op, dR = function() {
  if (!Object.assign)
    return !1;
  for (var e = "abcdefghijklmnopqrst", t = e.split(""), a = {}, o = 0; o < t.length; ++o)
    a[t[o]] = t[o];
  var r = Object.assign({}, a), n = "";
  for (var i in r)
    n += i;
  return e !== n;
}, pR = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var e = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(e, "xy");
  } catch {
    return e[1] === "y";
  }
  return !1;
}, Mp = function() {
  return !Object.assign || dR() || pR() ? Ei : Object.assign;
}, fR = it, mR = Mp, yR = function() {
  var t = mR();
  return fR(
    Object,
    { assign: t },
    { assign: function() {
      return Object.assign !== t;
    } }
  ), t;
}, hR = it, LR = Nt, bR = Op, xp = Mp, vR = yR, TR = LR.apply(xp()), kp = function(t, a) {
  return TR(Object, arguments);
};
hR(kp, {
  getPolyfill: xp,
  implementation: bR,
  shim: vR
});
var AR = kp, ra = function() {
  return typeof (function() {
  }).name == "string";
}, Jt = Object.getOwnPropertyDescriptor;
if (Jt)
  try {
    Jt([], "length");
  } catch {
    Jt = null;
  }
ra.functionsHaveConfigurableNames = function() {
  if (!ra() || !Jt)
    return !1;
  var t = Jt(function() {
  }, "name");
  return !!t && !!t.configurable;
};
var gR = Function.prototype.bind;
ra.boundFunctionsHaveNames = function() {
  return ra() && typeof gR == "function" && (function() {
  }).bind().name !== "";
};
var SR = ra, mu = Rp, YR = as(), RR = SR.functionsHaveConfigurableNames(), ER = TypeError, wR = function(t, a) {
  if (typeof t != "function")
    throw new ER("`fn` is not a function");
  var o = arguments.length > 2 && !!arguments[2];
  return (!o || RR) && (YR ? mu(t, "name", a, !0, !0) : mu(t, "name", a)), t;
}, CR = wR, _R = Object, PR = TypeError, Np = CR(function() {
  if (this != null && this !== _R(this))
    throw new PR("RegExp.prototype.flags getter called on non-object");
  var t = "";
  return this.hasIndices && (t += "d"), this.global && (t += "g"), this.ignoreCase && (t += "i"), this.multiline && (t += "m"), this.dotAll && (t += "s"), this.unicode && (t += "u"), this.unicodeSets && (t += "v"), this.sticky && (t += "y"), t;
}, "get flags", !0), IR = Np, FR = it.supportsDescriptors, OR = Object.getOwnPropertyDescriptor, $p = function() {
  if (FR && /a/mig.flags === "gim") {
    var t = OR(RegExp.prototype, "flags");
    if (t && typeof t.get == "function" && typeof RegExp.prototype.dotAll == "boolean" && typeof RegExp.prototype.hasIndices == "boolean") {
      var a = "", o = {};
      if (Object.defineProperty(o, "hasIndices", {
        get: function() {
          a += "d";
        }
      }), Object.defineProperty(o, "sticky", {
        get: function() {
          a += "y";
        }
      }), a === "dy")
        return t.get;
    }
  }
  return IR;
}, MR = it.supportsDescriptors, xR = $p, kR = Object.getOwnPropertyDescriptor, NR = Object.defineProperty, $R = TypeError, yu = Object.getPrototypeOf, qR = /a/, DR = function() {
  if (!MR || !yu)
    throw new $R("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var t = xR(), a = yu(qR), o = kR(a, "flags");
  return (!o || o.get !== t) && NR(a, "flags", {
    configurable: !0,
    enumerable: !1,
    get: t
  }), t;
}, BR = it, UR = Nt, jR = Np, qp = $p, VR = DR, Dp = UR(qp());
BR(Dp, {
  getPolyfill: qp,
  implementation: jR,
  shim: VR
});
var WR = Dp, Da = { exports: {} }, HR = ni, lt = function() {
  return HR() && !!Symbol.toStringTag;
}, zR = lt(), GR = ae, dl = GR("Object.prototype.toString"), ii = function(t) {
  return zR && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : dl(t) === "[object Arguments]";
}, Bp = function(t) {
  return ii(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && dl(t) !== "[object Array]" && dl(t.callee) === "[object Function]";
}, KR = function() {
  return ii(arguments);
}();
ii.isLegacyArguments = Bp;
var Up = KR ? ii : Bp;
const JR = {}, XR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: JR
}, Symbol.toStringTag, { value: "Module" })), QR = /* @__PURE__ */ Vy(XR);
var rs = typeof Map == "function" && Map.prototype, wi = Object.getOwnPropertyDescriptor && rs ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, to = rs && wi && typeof wi.get == "function" ? wi.get : null, hu = rs && Map.prototype.forEach, ns = typeof Set == "function" && Set.prototype, Ci = Object.getOwnPropertyDescriptor && ns ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ao = ns && Ci && typeof Ci.get == "function" ? Ci.get : null, Lu = ns && Set.prototype.forEach, ZR = typeof WeakMap == "function" && WeakMap.prototype, Xt = ZR ? WeakMap.prototype.has : null, eE = typeof WeakSet == "function" && WeakSet.prototype, Qt = eE ? WeakSet.prototype.has : null, tE = typeof WeakRef == "function" && WeakRef.prototype, bu = tE ? WeakRef.prototype.deref : null, aE = Boolean.prototype.valueOf, oE = Object.prototype.toString, rE = Function.prototype.toString, nE = String.prototype.match, is = String.prototype.slice, ke = String.prototype.replace, iE = String.prototype.toUpperCase, vu = String.prototype.toLowerCase, jp = RegExp.prototype.test, Tu = Array.prototype.concat, ce = Array.prototype.join, lE = Array.prototype.slice, Au = Math.floor, pl = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, _i = Object.getOwnPropertySymbols, fl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Et = typeof Symbol == "function" && typeof Symbol.iterator == "object", G = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Et || "symbol") ? Symbol.toStringTag : null, Vp = Object.prototype.propertyIsEnumerable, gu = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Su(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || jp.call(/e/, t))
    return t;
  var a = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var o = e < 0 ? -Au(-e) : Au(e);
    if (o !== e) {
      var r = String(o), n = is.call(t, r.length + 1);
      return ke.call(r, a, "$&_") + "." + ke.call(ke.call(n, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return ke.call(t, a, "$&_");
}
var ml = QR, Yu = ml.custom, Ru = Hp(Yu) ? Yu : null, sE = function e(t, a, o, r) {
  var n = a || {};
  if (Fe(n, "quoteStyle") && n.quoteStyle !== "single" && n.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Fe(n, "maxStringLength") && (typeof n.maxStringLength == "number" ? n.maxStringLength < 0 && n.maxStringLength !== 1 / 0 : n.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = Fe(n, "customInspect") ? n.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Fe(n, "indent") && n.indent !== null && n.indent !== "	" && !(parseInt(n.indent, 10) === n.indent && n.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Fe(n, "numericSeparator") && typeof n.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = n.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return Gp(t, n);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var l = String(t);
    return s ? Su(t, l) : l;
  }
  if (typeof t == "bigint") {
    var u = String(t) + "n";
    return s ? Su(t, u) : u;
  }
  var c = typeof n.depth > "u" ? 5 : n.depth;
  if (typeof o > "u" && (o = 0), o >= c && c > 0 && typeof t == "object")
    return yl(t) ? "[Array]" : "[Object]";
  var d = EE(n, o);
  if (typeof r > "u")
    r = [];
  else if (zp(r, t) >= 0)
    return "[Circular]";
  function p(g, C, F) {
    if (C && (r = lE.call(r), r.push(C)), F) {
      var U = {
        depth: n.depth
      };
      return Fe(n, "quoteStyle") && (U.quoteStyle = n.quoteStyle), e(g, U, o + 1, r);
    }
    return e(g, n, o + 1, r);
  }
  if (typeof t == "function" && !Eu(t)) {
    var y = LE(t), h = Aa(t, p);
    return "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (h.length > 0 ? " { " + ce.call(h, ", ") + " }" : "");
  }
  if (Hp(t)) {
    var b = Et ? ke.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : fl.call(t);
    return typeof t == "object" && !Et ? Ut(b) : b;
  }
  if (SE(t)) {
    for (var R = "<" + vu.call(String(t.nodeName)), f = t.attributes || [], A = 0; A < f.length; A++)
      R += " " + f[A].name + "=" + Wp(uE(f[A].value), "double", n);
    return R += ">", t.childNodes && t.childNodes.length && (R += "..."), R += "</" + vu.call(String(t.nodeName)) + ">", R;
  }
  if (yl(t)) {
    if (t.length === 0)
      return "[]";
    var Y = Aa(t, p);
    return d && !RE(Y) ? "[" + hl(Y, d) + "]" : "[ " + ce.call(Y, ", ") + " ]";
  }
  if (dE(t)) {
    var S = Aa(t, p);
    return !("cause" in Error.prototype) && "cause" in t && !Vp.call(t, "cause") ? "{ [" + String(t) + "] " + ce.call(Tu.call("[cause]: " + p(t.cause), S), ", ") + " }" : S.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + ce.call(S, ", ") + " }";
  }
  if (typeof t == "object" && i) {
    if (Ru && typeof t[Ru] == "function" && ml)
      return ml(t, { depth: c - o });
    if (i !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (bE(t)) {
    var E = [];
    return hu && hu.call(t, function(g, C) {
      E.push(p(C, t, !0) + " => " + p(g, t));
    }), wu("Map", to.call(t), E, d);
  }
  if (AE(t)) {
    var m = [];
    return Lu && Lu.call(t, function(g) {
      m.push(p(g, t));
    }), wu("Set", ao.call(t), m, d);
  }
  if (vE(t))
    return Pi("WeakMap");
  if (gE(t))
    return Pi("WeakSet");
  if (TE(t))
    return Pi("WeakRef");
  if (fE(t))
    return Ut(p(Number(t)));
  if (yE(t))
    return Ut(p(pl.call(t)));
  if (mE(t))
    return Ut(aE.call(t));
  if (pE(t))
    return Ut(p(String(t)));
  if (t === zl)
    return typeof window < "u" ? "{ [object Window] }" : "{ [object global] }";
  if (!cE(t) && !Eu(t)) {
    var L = Aa(t, p), T = gu ? gu(t) === Object.prototype : t instanceof Object || t.constructor === Object, O = t instanceof Object ? "" : "null prototype", D = !T && G && Object(t) === t && G in t ? is.call(Ke(t), 8, -1) : O ? "Object" : "", q = T || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", B = q + (D || O ? "[" + ce.call(Tu.call([], D || [], O || []), ": ") + "] " : "");
    return L.length === 0 ? B + "{}" : d ? B + "{" + hl(L, d) + "}" : B + "{ " + ce.call(L, ", ") + " }";
  }
  return String(t);
};
function Wp(e, t, a) {
  var o = (a.quoteStyle || t) === "double" ? '"' : "'";
  return o + e + o;
}
function uE(e) {
  return ke.call(String(e), /"/g, "&quot;");
}
function yl(e) {
  return Ke(e) === "[object Array]" && (!G || !(typeof e == "object" && G in e));
}
function cE(e) {
  return Ke(e) === "[object Date]" && (!G || !(typeof e == "object" && G in e));
}
function Eu(e) {
  return Ke(e) === "[object RegExp]" && (!G || !(typeof e == "object" && G in e));
}
function dE(e) {
  return Ke(e) === "[object Error]" && (!G || !(typeof e == "object" && G in e));
}
function pE(e) {
  return Ke(e) === "[object String]" && (!G || !(typeof e == "object" && G in e));
}
function fE(e) {
  return Ke(e) === "[object Number]" && (!G || !(typeof e == "object" && G in e));
}
function mE(e) {
  return Ke(e) === "[object Boolean]" && (!G || !(typeof e == "object" && G in e));
}
function Hp(e) {
  if (Et)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !fl)
    return !1;
  try {
    return fl.call(e), !0;
  } catch {
  }
  return !1;
}
function yE(e) {
  if (!e || typeof e != "object" || !pl)
    return !1;
  try {
    return pl.call(e), !0;
  } catch {
  }
  return !1;
}
var hE = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function Fe(e, t) {
  return hE.call(e, t);
}
function Ke(e) {
  return oE.call(e);
}
function LE(e) {
  if (e.name)
    return e.name;
  var t = nE.call(rE.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function zp(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var a = 0, o = e.length; a < o; a++)
    if (e[a] === t)
      return a;
  return -1;
}
function bE(e) {
  if (!to || !e || typeof e != "object")
    return !1;
  try {
    to.call(e);
    try {
      ao.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function vE(e) {
  if (!Xt || !e || typeof e != "object")
    return !1;
  try {
    Xt.call(e, Xt);
    try {
      Qt.call(e, Qt);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function TE(e) {
  if (!bu || !e || typeof e != "object")
    return !1;
  try {
    return bu.call(e), !0;
  } catch {
  }
  return !1;
}
function AE(e) {
  if (!ao || !e || typeof e != "object")
    return !1;
  try {
    ao.call(e);
    try {
      to.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function gE(e) {
  if (!Qt || !e || typeof e != "object")
    return !1;
  try {
    Qt.call(e, Qt);
    try {
      Xt.call(e, Xt);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function SE(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Gp(e, t) {
  if (e.length > t.maxStringLength) {
    var a = e.length - t.maxStringLength, o = "... " + a + " more character" + (a > 1 ? "s" : "");
    return Gp(is.call(e, 0, t.maxStringLength), t) + o;
  }
  var r = ke.call(ke.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, YE);
  return Wp(r, "single", t);
}
function YE(e) {
  var t = e.charCodeAt(0), a = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return a ? "\\" + a : "\\x" + (t < 16 ? "0" : "") + iE.call(t.toString(16));
}
function Ut(e) {
  return "Object(" + e + ")";
}
function Pi(e) {
  return e + " { ? }";
}
function wu(e, t, a, o) {
  var r = o ? hl(a, o) : ce.call(a, ", ");
  return e + " (" + t + ") {" + r + "}";
}
function RE(e) {
  for (var t = 0; t < e.length; t++)
    if (zp(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function EE(e, t) {
  var a;
  if (e.indent === "	")
    a = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    a = ce.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: a,
    prev: ce.call(Array(t + 1), a)
  };
}
function hl(e, t) {
  if (e.length === 0)
    return "";
  var a = `
` + t.prev + t.base;
  return a + ce.call(e, "," + a) + `
` + t.prev;
}
function Aa(e, t) {
  var a = yl(e), o = [];
  if (a) {
    o.length = e.length;
    for (var r = 0; r < e.length; r++)
      o[r] = Fe(e, r) ? t(e[r], e) : "";
  }
  var n = typeof _i == "function" ? _i(e) : [], i;
  if (Et) {
    i = {};
    for (var s = 0; s < n.length; s++)
      i["$" + n[s]] = n[s];
  }
  for (var l in e)
    Fe(e, l) && (a && String(Number(l)) === l && l < e.length || Et && i["$" + l] instanceof Symbol || (jp.call(/[^\w$]/, l) ? o.push(t(l, e) + ": " + t(e[l], e)) : o.push(l + ": " + t(e[l], e))));
  if (typeof _i == "function")
    for (var u = 0; u < n.length; u++)
      Vp.call(e, n[u]) && o.push("[" + t(n[u]) + "]: " + t(e[n[u]], e));
  return o;
}
var ls = ue, $t = ae, wE = sE, CE = ls("%TypeError%"), ga = ls("%WeakMap%", !0), Sa = ls("%Map%", !0), _E = $t("WeakMap.prototype.get", !0), PE = $t("WeakMap.prototype.set", !0), IE = $t("WeakMap.prototype.has", !0), FE = $t("Map.prototype.get", !0), OE = $t("Map.prototype.set", !0), ME = $t("Map.prototype.has", !0), ss = function(e, t) {
  for (var a = e, o; (o = a.next) !== null; a = o)
    if (o.key === t)
      return a.next = o.next, o.next = e.next, e.next = o, o;
}, xE = function(e, t) {
  var a = ss(e, t);
  return a && a.value;
}, kE = function(e, t, a) {
  var o = ss(e, t);
  o ? o.value = a : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: a
  };
}, NE = function(e, t) {
  return !!ss(e, t);
}, Kp = function() {
  var t, a, o, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new CE("Side channel does not contain " + wE(n));
    },
    get: function(n) {
      if (ga && n && (typeof n == "object" || typeof n == "function")) {
        if (t)
          return _E(t, n);
      } else if (Sa) {
        if (a)
          return FE(a, n);
      } else if (o)
        return xE(o, n);
    },
    has: function(n) {
      if (ga && n && (typeof n == "object" || typeof n == "function")) {
        if (t)
          return IE(t, n);
      } else if (Sa) {
        if (a)
          return ME(a, n);
      } else if (o)
        return NE(o, n);
      return !1;
    },
    set: function(n, i) {
      ga && n && (typeof n == "object" || typeof n == "function") ? (t || (t = new ga()), PE(t, n, i)) : Sa ? (a || (a = new Sa()), OE(a, n, i)) : (o || (o = { key: {}, next: null }), kE(o, n, i));
    }
  };
  return r;
}, $E = ue, qE = gp, jt = Kp(), ye = $E("%TypeError%"), us = {
  assert: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new ye("`O` is not an object");
    if (typeof t != "string")
      throw new ye("`slot` must be a string");
    if (jt.assert(e), !us.has(e, t))
      throw new ye("`" + t + "` is not present on `O`");
  },
  get: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new ye("`O` is not an object");
    if (typeof t != "string")
      throw new ye("`slot` must be a string");
    var a = jt.get(e);
    return a && a["$" + t];
  },
  has: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new ye("`O` is not an object");
    if (typeof t != "string")
      throw new ye("`slot` must be a string");
    var a = jt.get(e);
    return !!a && qE(a, "$" + t);
  },
  set: function(e, t, a) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new ye("`O` is not an object");
    if (typeof t != "string")
      throw new ye("`slot` must be a string");
    var o = jt.get(e);
    o || (o = {}, jt.set(e, o)), o["$" + t] = a;
  }
};
Object.freeze && Object.freeze(us);
var DE = us, Vt = DE, BE = SyntaxError, Cu = typeof StopIteration == "object" ? StopIteration : null, UE = function(t) {
  if (!Cu)
    throw new BE("this environment lacks StopIteration");
  Vt.set(t, "[[Done]]", !1);
  var a = {
    next: function() {
      var r = Vt.get(this, "[[Iterator]]"), n = Vt.get(r, "[[Done]]");
      try {
        return {
          done: n,
          value: n ? void 0 : r.next()
        };
      } catch (i) {
        if (Vt.set(r, "[[Done]]", !0), i !== Cu)
          throw i;
        return {
          done: !0,
          value: void 0
        };
      }
    }
  };
  return Vt.set(a, "[[Iterator]]", t), a;
}, jE = {}.toString, Jp = Array.isArray || function(e) {
  return jE.call(e) == "[object Array]";
}, VE = String.prototype.valueOf, WE = function(t) {
  try {
    return VE.call(t), !0;
  } catch {
    return !1;
  }
}, HE = Object.prototype.toString, zE = "[object String]", GE = lt(), Xp = function(t) {
  return typeof t == "string" ? !0 : typeof t != "object" ? !1 : GE ? WE(t) : HE.call(t) === zE;
}, cs = typeof Map == "function" && Map.prototype ? Map : null, KE = typeof Set == "function" && Set.prototype ? Set : null, oo;
cs || (oo = function(t) {
  return !1;
});
var Qp = cs ? Map.prototype.has : null, _u = KE ? Set.prototype.has : null;
!oo && !Qp && (oo = function(t) {
  return !1;
});
var Zp = oo || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (Qp.call(t), _u)
      try {
        _u.call(t);
      } catch {
        return !0;
      }
    return t instanceof cs;
  } catch {
  }
  return !1;
}, JE = typeof Map == "function" && Map.prototype ? Map : null, ds = typeof Set == "function" && Set.prototype ? Set : null, ro;
ds || (ro = function(t) {
  return !1;
});
var Pu = JE ? Map.prototype.has : null, ef = ds ? Set.prototype.has : null;
!ro && !ef && (ro = function(t) {
  return !1;
});
var tf = ro || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (ef.call(t), Pu)
      try {
        Pu.call(t);
      } catch {
        return !0;
      }
    return t instanceof ds;
  } catch {
  }
  return !1;
}, Iu = Up, Fu = UE;
if (ts() || ni()) {
  var Ii = Symbol.iterator;
  Da.exports = function(t) {
    if (t != null && typeof t[Ii] < "u")
      return t[Ii]();
    if (Iu(t))
      return Array.prototype[Ii].call(t);
  };
} else {
  var XE = Jp, QE = Xp, Ou = ue, ZE = Ou("%Map%", !0), ew = Ou("%Set%", !0), oe = ae, Mu = oe("Array.prototype.push"), xu = oe("String.prototype.charCodeAt"), tw = oe("String.prototype.slice"), aw = function(t, a) {
    var o = t.length;
    if (a + 1 >= o)
      return a + 1;
    var r = xu(t, a);
    if (r < 55296 || r > 56319)
      return a + 1;
    var n = xu(t, a + 1);
    return n < 56320 || n > 57343 ? a + 1 : a + 2;
  }, Fi = function(t) {
    var a = 0;
    return {
      next: function() {
        var r = a >= t.length, n;
        return r || (n = t[a], a += 1), {
          done: r,
          value: n
        };
      }
    };
  }, ku = function(t, a) {
    if (XE(t) || Iu(t))
      return Fi(t);
    if (QE(t)) {
      var o = 0;
      return {
        next: function() {
          var n = aw(t, o), i = tw(t, o, n);
          return o = n, {
            done: n > t.length,
            value: i
          };
        }
      };
    }
    if (a && typeof t["_es6-shim iterator_"] < "u")
      return t["_es6-shim iterator_"]();
  };
  if (!ZE && !ew)
    Da.exports = function(t) {
      if (t != null)
        return ku(t, !0);
    };
  else {
    var ow = Zp, rw = tf, Nu = oe("Map.prototype.forEach", !0), $u = oe("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var qu = oe("Map.prototype.iterator", !0), Du = oe("Set.prototype.iterator", !0);
    var Bu = oe("Map.prototype.@@iterator", !0) || oe("Map.prototype._es6-shim iterator_", !0), Uu = oe("Set.prototype.@@iterator", !0) || oe("Set.prototype._es6-shim iterator_", !0), nw = function(t) {
      if (ow(t)) {
        if (qu)
          return Fu(qu(t));
        if (Bu)
          return Bu(t);
        if (Nu) {
          var a = [];
          return Nu(t, function(r, n) {
            Mu(a, [n, r]);
          }), Fi(a);
        }
      }
      if (rw(t)) {
        if (Du)
          return Fu(Du(t));
        if (Uu)
          return Uu(t);
        if ($u) {
          var o = [];
          return $u(t, function(r) {
            Mu(o, r);
          }), Fi(o);
        }
      }
    };
    Da.exports = function(t) {
      return nw(t) || ku(t);
    };
  }
}
var iw = Da.exports, ju = function(e) {
  return e !== e;
}, af = function(t, a) {
  return t === 0 && a === 0 ? 1 / t === 1 / a : !!(t === a || ju(t) && ju(a));
}, lw = af, of = function() {
  return typeof Object.is == "function" ? Object.is : lw;
}, sw = of, uw = it, cw = function() {
  var t = sw();
  return uw(Object, { is: t }, {
    is: function() {
      return Object.is !== t;
    }
  }), t;
}, dw = it, pw = Nt, fw = af, rf = of, mw = cw, nf = pw(rf(), Object);
dw(nf, {
  getPolyfill: rf,
  implementation: fw,
  shim: mw
});
var yw = nf, lf = Function.prototype.toString, vt = typeof Reflect == "object" && Reflect !== null && Reflect.apply, Ll, Ba;
if (typeof vt == "function" && typeof Object.defineProperty == "function")
  try {
    Ll = Object.defineProperty({}, "length", {
      get: function() {
        throw Ba;
      }
    }), Ba = {}, vt(function() {
      throw 42;
    }, null, Ll);
  } catch (e) {
    e !== Ba && (vt = null);
  }
else
  vt = null;
var hw = /^\s*class\b/, bl = function(t) {
  try {
    var a = lf.call(t);
    return hw.test(a);
  } catch {
    return !1;
  }
}, Oi = function(t) {
  try {
    return bl(t) ? !1 : (lf.call(t), !0);
  } catch {
    return !1;
  }
}, Ua = Object.prototype.toString, Lw = "[object Object]", bw = "[object Function]", vw = "[object GeneratorFunction]", Tw = "[object HTMLAllCollection]", Aw = "[object HTML document.all class]", gw = "[object HTMLCollection]", Sw = typeof Symbol == "function" && !!Symbol.toStringTag, Yw = !(0 in [,]), vl = function() {
  return !1;
};
if (typeof document == "object") {
  var Rw = document.all;
  Ua.call(Rw) === Ua.call(document.all) && (vl = function(t) {
    if ((Yw || !t) && (typeof t > "u" || typeof t == "object"))
      try {
        var a = Ua.call(t);
        return (a === Tw || a === Aw || a === gw || a === Lw) && t("") == null;
      } catch {
      }
    return !1;
  });
}
var Ew = vt ? function(t) {
  if (vl(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  try {
    vt(t, null, Ll);
  } catch (a) {
    if (a !== Ba)
      return !1;
  }
  return !bl(t) && Oi(t);
} : function(t) {
  if (vl(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (Sw)
    return Oi(t);
  if (bl(t))
    return !1;
  var a = Ua.call(t);
  return a !== bw && a !== vw && !/^\[object HTML/.test(a) ? !1 : Oi(t);
}, ww = Ew, Cw = Object.prototype.toString, sf = Object.prototype.hasOwnProperty, _w = function(t, a, o) {
  for (var r = 0, n = t.length; r < n; r++)
    sf.call(t, r) && (o == null ? a(t[r], r, t) : a.call(o, t[r], r, t));
}, Pw = function(t, a, o) {
  for (var r = 0, n = t.length; r < n; r++)
    o == null ? a(t.charAt(r), r, t) : a.call(o, t.charAt(r), r, t);
}, Iw = function(t, a, o) {
  for (var r in t)
    sf.call(t, r) && (o == null ? a(t[r], r, t) : a.call(o, t[r], r, t));
}, Fw = function(t, a, o) {
  if (!ww(a))
    throw new TypeError("iterator must be a function");
  var r;
  arguments.length >= 3 && (r = o), Cw.call(t) === "[object Array]" ? _w(t, a, r) : typeof t == "string" ? Pw(t, a, r) : Iw(t, a, r);
}, Ow = Fw, Mi = [
  "BigInt64Array",
  "BigUint64Array",
  "Float32Array",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray"
], Mw = typeof globalThis > "u" ? zl : globalThis, xw = function() {
  for (var t = [], a = 0; a < Mi.length; a++)
    typeof Mw[Mi[a]] == "function" && (t[t.length] = Mi[a]);
  return t;
}, no = Ow, kw = xw, Vu = Nt, ps = ae, ja = Yp, Nw = ps("Object.prototype.toString"), uf = lt(), Wu = typeof globalThis > "u" ? zl : globalThis, Tl = kw(), fs = ps("String.prototype.slice"), xi = Object.getPrototypeOf, $w = ps("Array.prototype.indexOf", !0) || function(t, a) {
  for (var o = 0; o < t.length; o += 1)
    if (t[o] === a)
      return o;
  return -1;
}, io = { __proto__: null };
uf && ja && xi ? no(Tl, function(e) {
  var t = new Wu[e]();
  if (Symbol.toStringTag in t) {
    var a = xi(t), o = ja(a, Symbol.toStringTag);
    if (!o) {
      var r = xi(a);
      o = ja(r, Symbol.toStringTag);
    }
    io["$" + e] = Vu(o.get);
  }
}) : no(Tl, function(e) {
  var t = new Wu[e]();
  io["$" + e] = Vu(t.slice);
});
var qw = function(t) {
  var a = !1;
  return no(io, function(o, r) {
    if (!a)
      try {
        "$" + o(t) === r && (a = fs(r, 1));
      } catch {
      }
  }), a;
}, Dw = function(t) {
  var a = !1;
  return no(io, function(o, r) {
    if (!a)
      try {
        o(t), a = fs(r, 1);
      } catch {
      }
  }), a;
}, cf = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!uf) {
    var a = fs(Nw(t), 8, -1);
    return $w(Tl, a) > -1 ? a : a !== "Object" ? !1 : Dw(t);
  }
  return ja ? qw(t) : null;
}, Bw = cf, Uw = function(t) {
  return !!Bw(t);
}, jw = Nt, Vw = ae, df = ue, Ww = Uw, Hu = df("ArrayBuffer", !0), zu = df("Float32Array", !0), Va = Vw("ArrayBuffer.prototype.byteLength", !0), Gu = Hu && !Va && new Hu().slice, Ku = Gu && jw(Gu), pf = Va || Ku ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return Va ? Va(t) : Ku(t, 0), !0;
  } catch {
    return !1;
  }
} : zu ? function(t) {
  try {
    return new zu(t).buffer === t && !Ww(t);
  } catch (a) {
    return typeof t == "object" && a.name === "RangeError";
  }
} : function(t) {
  return !1;
}, Hw = Date.prototype.getDay, zw = function(t) {
  try {
    return Hw.call(t), !0;
  } catch {
    return !1;
  }
}, Gw = Object.prototype.toString, Kw = "[object Date]", Jw = lt(), Xw = function(t) {
  return typeof t != "object" || t === null ? !1 : Jw ? zw(t) : Gw.call(t) === Kw;
}, Al = ae, ff = lt(), mf, yf, gl, Sl;
if (ff) {
  mf = Al("Object.prototype.hasOwnProperty"), yf = Al("RegExp.prototype.exec"), gl = {};
  var ki = function() {
    throw gl;
  };
  Sl = {
    toString: ki,
    valueOf: ki
  }, typeof Symbol.toPrimitive == "symbol" && (Sl[Symbol.toPrimitive] = ki);
}
var Qw = Al("Object.prototype.toString"), Zw = Object.getOwnPropertyDescriptor, eC = "[object RegExp]", tC = ff ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  var a = Zw(t, "lastIndex"), o = a && mf(a, "value");
  if (!o)
    return !1;
  try {
    yf(t, Sl);
  } catch (r) {
    return r === gl;
  }
} : function(t) {
  return !t || typeof t != "object" && typeof t != "function" ? !1 : Qw(t) === eC;
}, aC = ae, Ju = aC("SharedArrayBuffer.prototype.byteLength", !0), oC = Ju ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return Ju(t), !0;
  } catch {
    return !1;
  }
} : function(t) {
  return !1;
}, rC = Number.prototype.toString, nC = function(t) {
  try {
    return rC.call(t), !0;
  } catch {
    return !1;
  }
}, iC = Object.prototype.toString, lC = "[object Number]", sC = lt(), uC = function(t) {
  return typeof t == "number" ? !0 : typeof t != "object" ? !1 : sC ? nC(t) : iC.call(t) === lC;
}, hf = ae, cC = hf("Boolean.prototype.toString"), dC = hf("Object.prototype.toString"), pC = function(t) {
  try {
    return cC(t), !0;
  } catch {
    return !1;
  }
}, fC = "[object Boolean]", mC = lt(), yC = function(t) {
  return typeof t == "boolean" ? !0 : t === null || typeof t != "object" ? !1 : mC && Symbol.toStringTag in t ? pC(t) : dC(t) === fC;
}, Yl = { exports: {} }, hC = Object.prototype.toString, LC = ts();
if (LC) {
  var bC = Symbol.prototype.toString, vC = /^Symbol\(.*\)$/, TC = function(t) {
    return typeof t.valueOf() != "symbol" ? !1 : vC.test(bC.call(t));
  };
  Yl.exports = function(t) {
    if (typeof t == "symbol")
      return !0;
    if (hC.call(t) !== "[object Symbol]")
      return !1;
    try {
      return TC(t);
    } catch {
      return !1;
    }
  };
} else
  Yl.exports = function(t) {
    return !1;
  };
var AC = Yl.exports, Rl = { exports: {} }, Xu = typeof BigInt < "u" && BigInt, gC = function() {
  return typeof Xu == "function" && typeof BigInt == "function" && typeof Xu(42) == "bigint" && typeof BigInt(42) == "bigint";
}, SC = gC();
if (SC) {
  var YC = BigInt.prototype.valueOf, RC = function(t) {
    try {
      return YC.call(t), !0;
    } catch {
    }
    return !1;
  };
  Rl.exports = function(t) {
    return t === null || typeof t > "u" || typeof t == "boolean" || typeof t == "string" || typeof t == "number" || typeof t == "symbol" || typeof t == "function" ? !1 : typeof t == "bigint" ? !0 : RC(t);
  };
} else
  Rl.exports = function(t) {
    return !1;
  };
var EC = Rl.exports, wC = Xp, CC = uC, _C = yC, PC = AC, IC = EC, FC = function(t) {
  if (t == null || typeof t != "object" && typeof t != "function")
    return null;
  if (wC(t))
    return "String";
  if (CC(t))
    return "Number";
  if (_C(t))
    return "Boolean";
  if (PC(t))
    return "Symbol";
  if (IC(t))
    return "BigInt";
}, lo = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, Qu = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, so;
lo || (so = function(t) {
  return !1;
});
var El = lo ? lo.prototype.has : null, Ni = Qu ? Qu.prototype.has : null;
!so && !El && (so = function(t) {
  return !1;
});
var OC = so || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (El.call(t, El), Ni)
      try {
        Ni.call(t, Ni);
      } catch {
        return !0;
      }
    return t instanceof lo;
  } catch {
  }
  return !1;
}, wl = { exports: {} }, MC = ue, Lf = ae, xC = MC("%WeakSet%", !0), $i = Lf("WeakSet.prototype.has", !0);
if ($i) {
  var qi = Lf("WeakMap.prototype.has", !0);
  wl.exports = function(t) {
    if (!t || typeof t != "object")
      return !1;
    try {
      if ($i(t, $i), qi)
        try {
          qi(t, qi);
        } catch {
          return !0;
        }
      return t instanceof xC;
    } catch {
    }
    return !1;
  };
} else
  wl.exports = function(t) {
    return !1;
  };
var kC = wl.exports, NC = Zp, $C = tf, qC = OC, DC = kC, BC = function(t) {
  if (t && typeof t == "object") {
    if (NC(t))
      return "Map";
    if ($C(t))
      return "Set";
    if (qC(t))
      return "WeakMap";
    if (DC(t))
      return "WeakSet";
  }
  return !1;
}, UC = ae, Zu = UC("ArrayBuffer.prototype.byteLength", !0), jC = pf, VC = function(t) {
  return jC(t) ? Zu ? Zu(t) : t.byteLength : NaN;
}, bf = AR, de = ae, ec = WR, WC = ue, wt = iw, HC = Kp, tc = yw, ac = Up, oc = Jp, rc = pf, nc = Xw, ic = tC, lc = oC, sc = es, uc = FC, cc = BC, dc = cf, pc = VC, fc = de("SharedArrayBuffer.prototype.byteLength", !0), mc = de("Date.prototype.getTime"), Di = Object.getPrototypeOf, yc = de("Object.prototype.toString"), uo = WC("%Set%", !0), Cl = de("Map.prototype.has", !0), co = de("Map.prototype.get", !0), hc = de("Map.prototype.size", !0), po = de("Set.prototype.add", !0), vf = de("Set.prototype.delete", !0), fo = de("Set.prototype.has", !0), Wa = de("Set.prototype.size", !0);
function Lc(e, t, a, o) {
  for (var r = wt(e), n; (n = r.next()) && !n.done; )
    if (se(t, n.value, a, o))
      return vf(e, n.value), !0;
  return !1;
}
function Tf(e) {
  if (typeof e > "u")
    return null;
  if (typeof e != "object")
    return typeof e == "symbol" ? !1 : typeof e == "string" || typeof e == "number" ? +e == +e : !0;
}
function zC(e, t, a, o, r, n) {
  var i = Tf(a);
  if (i != null)
    return i;
  var s = co(t, i), l = bf({}, r, { strict: !1 });
  return typeof s > "u" && !Cl(t, i) || !se(o, s, l, n) ? !1 : !Cl(e, i) && se(o, s, l, n);
}
function GC(e, t, a) {
  var o = Tf(a);
  return o ?? (fo(t, o) && !fo(e, o));
}
function bc(e, t, a, o, r, n) {
  for (var i = wt(e), s, l; (s = i.next()) && !s.done; )
    if (l = s.value, // eslint-disable-next-line no-use-before-define
    se(a, l, r, n) && se(o, co(t, l), r, n))
      return vf(e, l), !0;
  return !1;
}
function se(e, t, a, o) {
  var r = a || {};
  if (r.strict ? tc(e, t) : e === t)
    return !0;
  var n = uc(e), i = uc(t);
  if (n !== i)
    return !1;
  if (!e || !t || typeof e != "object" && typeof t != "object")
    return r.strict ? tc(e, t) : e == t;
  var s = o.has(e), l = o.has(t), u;
  if (s && l) {
    if (o.get(e) === o.get(t))
      return !0;
  } else
    u = {};
  return s || o.set(e, u), l || o.set(t, u), XC(e, t, r, o);
}
function vc(e) {
  return !e || typeof e != "object" || typeof e.length != "number" || typeof e.copy != "function" || typeof e.slice != "function" || e.length > 0 && typeof e[0] != "number" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function KC(e, t, a, o) {
  if (Wa(e) !== Wa(t))
    return !1;
  for (var r = wt(e), n = wt(t), i, s, l; (i = r.next()) && !i.done; )
    if (i.value && typeof i.value == "object")
      l || (l = new uo()), po(l, i.value);
    else if (!fo(t, i.value)) {
      if (a.strict || !GC(e, t, i.value))
        return !1;
      l || (l = new uo()), po(l, i.value);
    }
  if (l) {
    for (; (s = n.next()) && !s.done; )
      if (s.value && typeof s.value == "object") {
        if (!Lc(l, s.value, a.strict, o))
          return !1;
      } else if (!a.strict && !fo(e, s.value) && !Lc(l, s.value, a.strict, o))
        return !1;
    return Wa(l) === 0;
  }
  return !0;
}
function JC(e, t, a, o) {
  if (hc(e) !== hc(t))
    return !1;
  for (var r = wt(e), n = wt(t), i, s, l, u, c, d; (i = r.next()) && !i.done; )
    if (u = i.value[0], c = i.value[1], u && typeof u == "object")
      l || (l = new uo()), po(l, u);
    else if (d = co(t, u), typeof d > "u" && !Cl(t, u) || !se(c, d, a, o)) {
      if (a.strict || !zC(e, t, u, c, a, o))
        return !1;
      l || (l = new uo()), po(l, u);
    }
  if (l) {
    for (; (s = n.next()) && !s.done; )
      if (u = s.value[0], d = s.value[1], u && typeof u == "object") {
        if (!bc(l, e, u, d, a, o))
          return !1;
      } else if (!a.strict && (!e.has(u) || !se(co(e, u), d, a, o)) && !bc(l, e, u, d, bf({}, a, { strict: !1 }), o))
        return !1;
    return Wa(l) === 0;
  }
  return !0;
}
function XC(e, t, a, o) {
  var r, n;
  if (typeof e != typeof t || e == null || t == null || yc(e) !== yc(t) || ac(e) !== ac(t))
    return !1;
  var i = oc(e), s = oc(t);
  if (i !== s)
    return !1;
  var l = e instanceof Error, u = t instanceof Error;
  if (l !== u || (l || u) && (e.name !== t.name || e.message !== t.message))
    return !1;
  var c = ic(e), d = ic(t);
  if (c !== d || (c || d) && (e.source !== t.source || ec(e) !== ec(t)))
    return !1;
  var p = nc(e), y = nc(t);
  if (p !== y || (p || y) && mc(e) !== mc(t) || a.strict && Di && Di(e) !== Di(t))
    return !1;
  var h = dc(e), b = dc(t);
  if (h !== b)
    return !1;
  if (h || b) {
    if (e.length !== t.length)
      return !1;
    for (r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  var R = vc(e), f = vc(t);
  if (R !== f)
    return !1;
  if (R || f) {
    if (e.length !== t.length)
      return !1;
    for (r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  var A = rc(e), Y = rc(t);
  if (A !== Y)
    return !1;
  if (A || Y)
    return pc(e) !== pc(t) ? !1 : typeof Uint8Array == "function" && se(new Uint8Array(e), new Uint8Array(t), a, o);
  var S = lc(e), E = lc(t);
  if (S !== E)
    return !1;
  if (S || E)
    return fc(e) !== fc(t) ? !1 : typeof Uint8Array == "function" && se(new Uint8Array(e), new Uint8Array(t), a, o);
  if (typeof e != typeof t)
    return !1;
  var m = sc(e), L = sc(t);
  if (m.length !== L.length)
    return !1;
  for (m.sort(), L.sort(), r = m.length - 1; r >= 0; r--)
    if (m[r] != L[r])
      return !1;
  for (r = m.length - 1; r >= 0; r--)
    if (n = m[r], !se(e[n], t[n], a, o))
      return !1;
  var T = cc(e), O = cc(t);
  return T !== O ? !1 : T === "Set" || O === "Set" ? KC(e, t, a, o) : T === "Map" ? JC(e, t, a, o) : !0;
}
var QC = function(t, a, o) {
  return se(t, a, o, HC());
};
Object.defineProperty(ri, "__esModule", {
  value: !0
});
ri.default = void 0;
var ZC = ms(QC), e_ = ms(nt), Af = ms(kt);
function ms(e) {
  return e && e.__esModule ? e : { default: e };
}
function Bi(e, t) {
  return o_(e) || a_(e, t) || gf(e, t) || t_();
}
function t_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a_(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var o = [], r = !0, n = !1, i, s;
    try {
      for (a = a.call(e); !(r = (i = a.next()).done) && (o.push(i.value), !(t && o.length === t)); r = !0)
        ;
    } catch (l) {
      n = !0, s = l;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (n)
          throw s;
      }
    }
    return o;
  }
}
function o_(e) {
  if (Array.isArray(e))
    return e;
}
function r_(e, t) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = gf(e)) || t && e && typeof e.length == "number") {
      a && (e = a);
      var o = 0, r = function() {
      };
      return { s: r, n: function() {
        return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
      }, e: function(u) {
        throw u;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var n = !0, i = !1, s;
  return { s: function() {
    a = a.call(e);
  }, n: function() {
    var u = a.next();
    return n = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !n && a.return != null && a.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function gf(e, t) {
  if (e) {
    if (typeof e == "string")
      return Tc(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Tc(e, t);
  }
}
function Tc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, o = new Array(t); a < t; a++)
    o[a] = e[a];
  return o;
}
var Oe = [], Ac = Af.default.keys();
for (var Ui = 0; Ui < Ac.length; Ui++) {
  var ji = Ac[Ui], Vi = Af.default.get(ji);
  if (Vi)
    for (var gc = [].concat(Vi.baseConcepts, Vi.relatedConcepts), Wi = 0; Wi < gc.length; Wi++) {
      var Sc = gc[Wi];
      if (Sc.module === "HTML") {
        var Hi = Sc.concept;
        Hi && function() {
          var e = JSON.stringify(Hi), t = Oe.find(function(n) {
            return JSON.stringify(n[0]) === e;
          }), a = void 0;
          t ? a = t[1] : a = [];
          for (var o = !0, r = 0; r < a.length; r++)
            if (a[r] === ji) {
              o = !1;
              break;
            }
          o && a.push(ji), Oe.push([Hi, a]);
        }();
      }
    }
}
var _l = {
  entries: function() {
    return Oe;
  },
  forEach: function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, o = r_(Oe), r;
    try {
      for (o.s(); !(r = o.n()).done; ) {
        var n = Bi(r.value, 2), i = n[0], s = n[1];
        t.call(a, s, i, Oe);
      }
    } catch (l) {
      o.e(l);
    } finally {
      o.f();
    }
  },
  get: function(t) {
    var a = Oe.find(function(o) {
      return (0, ZC.default)(t, o[0]);
    });
    return a && a[1];
  },
  has: function(t) {
    return !!_l.get(t);
  },
  keys: function() {
    return Oe.map(function(t) {
      var a = Bi(t, 1), o = a[0];
      return o;
    });
  },
  values: function() {
    return Oe.map(function(t) {
      var a = Bi(t, 2), o = a[1];
      return o;
    });
  }
}, n_ = (0, e_.default)(_l, _l.entries());
ri.default = n_;
var li = {};
Object.defineProperty(li, "__esModule", {
  value: !0
});
li.default = void 0;
var i_ = Yf(nt), Sf = Yf(kt);
function Yf(e) {
  return e && e.__esModule ? e : { default: e };
}
function zi(e, t) {
  return u_(e) || s_(e, t) || Rf(e, t) || l_();
}
function l_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s_(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var o = [], r = !0, n = !1, i, s;
    try {
      for (a = a.call(e); !(r = (i = a.next()).done) && (o.push(i.value), !(t && o.length === t)); r = !0)
        ;
    } catch (l) {
      n = !0, s = l;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (n)
          throw s;
      }
    }
    return o;
  }
}
function u_(e) {
  if (Array.isArray(e))
    return e;
}
function c_(e, t) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = Rf(e)) || t && e && typeof e.length == "number") {
      a && (e = a);
      var o = 0, r = function() {
      };
      return { s: r, n: function() {
        return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
      }, e: function(u) {
        throw u;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var n = !0, i = !1, s;
  return { s: function() {
    a = a.call(e);
  }, n: function() {
    var u = a.next();
    return n = u.done, u;
  }, e: function(u) {
    i = !0, s = u;
  }, f: function() {
    try {
      !n && a.return != null && a.return();
    } finally {
      if (i)
        throw s;
    }
  } };
}
function Rf(e, t) {
  if (e) {
    if (typeof e == "string")
      return Yc(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Yc(e, t);
  }
}
function Yc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, o = new Array(t); a < t; a++)
    o[a] = e[a];
  return o;
}
var Me = [], Ef = Sf.default.keys(), d_ = function(t) {
  var a = Ef[t], o = Sf.default.get(a);
  if (o)
    for (var r = [].concat(o.baseConcepts, o.relatedConcepts), n = 0; n < r.length; n++) {
      var i = r[n];
      if (i.module === "HTML") {
        var s = i.concept;
        if (s) {
          var l = Me.find(function(c) {
            return c[0] === a;
          }), u = void 0;
          l ? u = l[1] : u = [], u.push(s), Me.push([a, u]);
        }
      }
    }
};
for (var Gi = 0; Gi < Ef.length; Gi++)
  d_(Gi);
var Pl = {
  entries: function() {
    return Me;
  },
  forEach: function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, o = c_(Me), r;
    try {
      for (o.s(); !(r = o.n()).done; ) {
        var n = zi(r.value, 2), i = n[0], s = n[1];
        t.call(a, s, i, Me);
      }
    } catch (l) {
      o.e(l);
    } finally {
      o.f();
    }
  },
  get: function(t) {
    var a = Me.find(function(o) {
      return o[0] === t;
    });
    return a && a[1];
  },
  has: function(t) {
    return !!Pl.get(t);
  },
  keys: function() {
    return Me.map(function(t) {
      var a = zi(t, 1), o = a[0];
      return o;
    });
  },
  values: function() {
    return Me.map(function(t) {
      var a = zi(t, 2), o = a[1];
      return o;
    });
  }
}, p_ = (0, i_.default)(Pl, Pl.entries());
li.default = p_;
Object.defineProperty(le, "__esModule", {
  value: !0
});
var re = le.roles = Cf = le.roleElements = wf = le.elementRoles = le.dom = le.aria = void 0, f_ = ma(go), m_ = ma(Yo), y_ = ma(kt), h_ = ma(ri), L_ = ma(li);
function ma(e) {
  return e && e.__esModule ? e : { default: e };
}
var b_ = f_.default;
le.aria = b_;
var v_ = m_.default;
le.dom = v_;
var T_ = y_.default;
re = le.roles = T_;
var A_ = h_.default, wf = le.elementRoles = A_, g_ = L_.default, Cf = le.roleElements = g_, ys = { exports: {} };
ys.exports;
(function(e) {
  var t = function() {
    var a = String.fromCharCode, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", n = {};
    function i(l, u) {
      if (!n[l]) {
        n[l] = {};
        for (var c = 0; c < l.length; c++)
          n[l][l.charAt(c)] = c;
      }
      return n[l][u];
    }
    var s = {
      compressToBase64: function(l) {
        if (l == null)
          return "";
        var u = s._compress(l, 6, function(c) {
          return o.charAt(c);
        });
        switch (u.length % 4) {
          default:
          case 0:
            return u;
          case 1:
            return u + "===";
          case 2:
            return u + "==";
          case 3:
            return u + "=";
        }
      },
      decompressFromBase64: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32, function(u) {
          return i(o, l.charAt(u));
        });
      },
      compressToUTF16: function(l) {
        return l == null ? "" : s._compress(l, 15, function(u) {
          return a(u + 32);
        }) + " ";
      },
      decompressFromUTF16: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 16384, function(u) {
          return l.charCodeAt(u) - 32;
        });
      },
      //compress into uint8array (UCS-2 big endian format)
      compressToUint8Array: function(l) {
        for (var u = s.compress(l), c = new Uint8Array(u.length * 2), d = 0, p = u.length; d < p; d++) {
          var y = u.charCodeAt(d);
          c[d * 2] = y >>> 8, c[d * 2 + 1] = y % 256;
        }
        return c;
      },
      //decompress from uint8array (UCS-2 big endian format)
      decompressFromUint8Array: function(l) {
        if (l == null)
          return s.decompress(l);
        for (var u = new Array(l.length / 2), c = 0, d = u.length; c < d; c++)
          u[c] = l[c * 2] * 256 + l[c * 2 + 1];
        var p = [];
        return u.forEach(function(y) {
          p.push(a(y));
        }), s.decompress(p.join(""));
      },
      //compress into a string that is already URI encoded
      compressToEncodedURIComponent: function(l) {
        return l == null ? "" : s._compress(l, 6, function(u) {
          return r.charAt(u);
        });
      },
      //decompress from an output of compressToEncodedURIComponent
      decompressFromEncodedURIComponent: function(l) {
        return l == null ? "" : l == "" ? null : (l = l.replace(/ /g, "+"), s._decompress(l.length, 32, function(u) {
          return i(r, l.charAt(u));
        }));
      },
      compress: function(l) {
        return s._compress(l, 16, function(u) {
          return a(u);
        });
      },
      _compress: function(l, u, c) {
        if (l == null)
          return "";
        var d, p, y = {}, h = {}, b = "", R = "", f = "", A = 2, Y = 3, S = 2, E = [], m = 0, L = 0, T;
        for (T = 0; T < l.length; T += 1)
          if (b = l.charAt(T), Object.prototype.hasOwnProperty.call(y, b) || (y[b] = Y++, h[b] = !0), R = f + b, Object.prototype.hasOwnProperty.call(y, R))
            f = R;
          else {
            if (Object.prototype.hasOwnProperty.call(h, f)) {
              if (f.charCodeAt(0) < 256) {
                for (d = 0; d < S; d++)
                  m = m << 1, L == u - 1 ? (L = 0, E.push(c(m)), m = 0) : L++;
                for (p = f.charCodeAt(0), d = 0; d < 8; d++)
                  m = m << 1 | p & 1, L == u - 1 ? (L = 0, E.push(c(m)), m = 0) : L++, p = p >> 1;
              } else {
                for (p = 1, d = 0; d < S; d++)
                  m = m << 1 | p, L == u - 1 ? (L = 0, E.push(c(m)), m = 0) : L++, p = 0;
                for (p = f.charCodeAt(0), d = 0; d < 16; d++)
                  m = m << 1 | p & 1, L == u - 1 ? (L = 0, E.push(c(m)), m = 0) : L++, p = p >> 1;
              }
              A--, A == 0 && (A = Math.pow(2, S), S++), delete h[f];
            } else
              for (p = y[f], d = 0; d < S; d++)
                m = m << 1 | p & 1, L == u - 1 ? (L = 0, E.push(c(m)), m = 0) : L++, p = p >> 1;
            A--, A == 0 && (A = Math.pow(2, S), S++), y[R] = Y++, f = String(b);
          }
        if (f !== "") {
          if (Object.prototype.hasOwnProperty.call(h, f)) {
            if (f.charCodeAt(0) < 256) {
              for (d = 0; d < S; d++)
                m = m << 1, L == u - 1 ? (L = 0, E.push(c(m)), m = 0) : L++;
              for (p = f.charCodeAt(0), d = 0; d < 8; d++)
                m = m << 1 | p & 1, L == u - 1 ? (L = 0, E.push(c(m)), m = 0) : L++, p = p >> 1;
            } else {
              for (p = 1, d = 0; d < S; d++)
                m = m << 1 | p, L == u - 1 ? (L = 0, E.push(c(m)), m = 0) : L++, p = 0;
              for (p = f.charCodeAt(0), d = 0; d < 16; d++)
                m = m << 1 | p & 1, L == u - 1 ? (L = 0, E.push(c(m)), m = 0) : L++, p = p >> 1;
            }
            A--, A == 0 && (A = Math.pow(2, S), S++), delete h[f];
          } else
            for (p = y[f], d = 0; d < S; d++)
              m = m << 1 | p & 1, L == u - 1 ? (L = 0, E.push(c(m)), m = 0) : L++, p = p >> 1;
          A--, A == 0 && (A = Math.pow(2, S), S++);
        }
        for (p = 2, d = 0; d < S; d++)
          m = m << 1 | p & 1, L == u - 1 ? (L = 0, E.push(c(m)), m = 0) : L++, p = p >> 1;
        for (; ; )
          if (m = m << 1, L == u - 1) {
            E.push(c(m));
            break;
          } else
            L++;
        return E.join("");
      },
      decompress: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32768, function(u) {
          return l.charCodeAt(u);
        });
      },
      _decompress: function(l, u, c) {
        var d = [], p = 4, y = 4, h = 3, b = "", R = [], f, A, Y, S, E, m, L, T = { val: c(0), position: u, index: 1 };
        for (f = 0; f < 3; f += 1)
          d[f] = f;
        for (Y = 0, E = Math.pow(2, 2), m = 1; m != E; )
          S = T.val & T.position, T.position >>= 1, T.position == 0 && (T.position = u, T.val = c(T.index++)), Y |= (S > 0 ? 1 : 0) * m, m <<= 1;
        switch (Y) {
          case 0:
            for (Y = 0, E = Math.pow(2, 8), m = 1; m != E; )
              S = T.val & T.position, T.position >>= 1, T.position == 0 && (T.position = u, T.val = c(T.index++)), Y |= (S > 0 ? 1 : 0) * m, m <<= 1;
            L = a(Y);
            break;
          case 1:
            for (Y = 0, E = Math.pow(2, 16), m = 1; m != E; )
              S = T.val & T.position, T.position >>= 1, T.position == 0 && (T.position = u, T.val = c(T.index++)), Y |= (S > 0 ? 1 : 0) * m, m <<= 1;
            L = a(Y);
            break;
          case 2:
            return "";
        }
        for (d[3] = L, A = L, R.push(L); ; ) {
          if (T.index > l)
            return "";
          for (Y = 0, E = Math.pow(2, h), m = 1; m != E; )
            S = T.val & T.position, T.position >>= 1, T.position == 0 && (T.position = u, T.val = c(T.index++)), Y |= (S > 0 ? 1 : 0) * m, m <<= 1;
          switch (L = Y) {
            case 0:
              for (Y = 0, E = Math.pow(2, 8), m = 1; m != E; )
                S = T.val & T.position, T.position >>= 1, T.position == 0 && (T.position = u, T.val = c(T.index++)), Y |= (S > 0 ? 1 : 0) * m, m <<= 1;
              d[y++] = a(Y), L = y - 1, p--;
              break;
            case 1:
              for (Y = 0, E = Math.pow(2, 16), m = 1; m != E; )
                S = T.val & T.position, T.position >>= 1, T.position == 0 && (T.position = u, T.val = c(T.index++)), Y |= (S > 0 ? 1 : 0) * m, m <<= 1;
              d[y++] = a(Y), L = y - 1, p--;
              break;
            case 2:
              return R.join("");
          }
          if (p == 0 && (p = Math.pow(2, h), h++), d[L])
            b = d[L];
          else if (L === y)
            b = A + A.charAt(0);
          else
            return null;
          R.push(b), d[y++] = A + b.charAt(0), p--, A = b, p == 0 && (p = Math.pow(2, h), h++);
        }
      }
    };
    return s;
  }();
  e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return t;
  });
})(ys);
var S_ = ys.exports;
const Y_ = /* @__PURE__ */ Wy(S_);
function _f(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const R_ = (e, t, a, o, r, n, i) => {
  const s = o + a.indent, l = a.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, a, s, r, n);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = a.spacingOuter + s + d + a.spacingOuter + o), d = "{" + d + "}"), a.spacingInner + o + l.prop.open + u + l.prop.close + "=" + l.value.open + d + l.value.close;
  }).join("");
}, E_ = 3, w_ = (e, t, a, o, r, n) => e.map((i) => {
  const s = typeof i == "string" ? Pf(i, t) : n(i, t, a, o, r);
  return s === "" && typeof i == "object" && i !== null && i.nodeType !== E_ ? "" : t.spacingOuter + a + s;
}).join(""), Pf = (e, t) => {
  const a = t.colors.content;
  return a.open + _f(e) + a.close;
}, C_ = (e, t) => {
  const a = t.colors.comment;
  return a.open + "<!--" + _f(e) + "-->" + a.close;
}, __ = (e, t, a, o, r) => {
  const n = o.colors.tag;
  return n.open + "<" + e + (t && n.close + t + o.spacingOuter + r + n.open) + (a ? ">" + n.close + a + o.spacingOuter + r + n.open + "</" + e : (t && !o.min ? "" : " ") + "/") + ">" + n.close;
}, P_ = (e, t) => {
  const a = t.colors.tag;
  return a.open + "<" + e + a.close + " …" + a.open + " />" + a.close;
}, I_ = 1, If = 3, Ff = 8, Of = 11, F_ = /^((HTML|SVG)\w*)?Element$/, O_ = (e) => {
  const t = e.constructor.name, {
    nodeType: a,
    tagName: o
  } = e, r = typeof o == "string" && o.includes("-") || typeof e.hasAttribute == "function" && e.hasAttribute("is");
  return a === I_ && (F_.test(t) || r) || a === If && t === "Text" || a === Ff && t === "Comment" || a === Of && t === "DocumentFragment";
};
function M_(e) {
  return e.nodeType === If;
}
function x_(e) {
  return e.nodeType === Ff;
}
function Ki(e) {
  return e.nodeType === Of;
}
function k_(e) {
  return {
    test: (t) => {
      var a;
      return (t == null || (a = t.constructor) == null ? void 0 : a.name) && O_(t);
    },
    serialize: (t, a, o, r, n, i) => {
      if (M_(t))
        return Pf(t.data, a);
      if (x_(t))
        return C_(t.data, a);
      const s = Ki(t) ? "DocumentFragment" : t.tagName.toLowerCase();
      return ++r > a.maxDepth ? P_(s, a) : __(s, R_(Ki(t) ? [] : Array.from(t.attributes).map((l) => l.name).sort(), Ki(t) ? {} : Array.from(t.attributes).reduce((l, u) => (l[u.name] = u.value, l), {}), a, o + a.indent, r, n, i), w_(Array.prototype.slice.call(t.childNodes || t.children).filter(e), a, o + a.indent, r, n, i), a, o);
    }
  };
}
let Mf = null, hs = null, Ls = null;
try {
  const e = module && module.require;
  hs = e.call(module, "fs").readFileSync, Ls = e.call(module, "@babel/code-frame").codeFrameColumns, Mf = e.call(module, "chalk");
} catch {
}
function N_(e) {
  const t = e.indexOf("(") + 1, a = e.indexOf(")"), o = e.slice(t, a), r = o.split(":"), [n, i, s] = [r[0], parseInt(r[1], 10), parseInt(r[2], 10)];
  let l = "";
  try {
    l = hs(n, "utf-8");
  } catch {
    return "";
  }
  const u = Ls(l, {
    start: {
      line: i,
      column: s
    }
  }, {
    highlightCode: !0,
    linesBelow: 0
  });
  return Mf.dim(o) + `
` + u + `
`;
}
function $_() {
  if (!hs || !Ls)
    return "";
  const t = new Error().stack.split(`
`).slice(1).find((a) => !a.includes("node_modules/"));
  return N_(t);
}
const xf = 3;
function Ji() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function bs() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function kf(e) {
  if (e.defaultView)
    return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window)
    return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof e.debug == "function" && typeof e.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof e + ".");
}
function Ye(e) {
  if (!e || typeof e.querySelector != "function" || typeof e.querySelectorAll != "function")
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + t(e) + ".");
  function t(a) {
    return typeof a == "object" ? a === null ? "null" : a.constructor.name : typeof a;
  }
}
const q_ = () => {
  let e;
  try {
    var t;
    e = JSON.parse((t = process) == null || (t = t.env) == null ? void 0 : t.COLORS);
  } catch {
  }
  return typeof e == "boolean" ? e : typeof process < "u" && process.versions !== void 0 && process.versions.node !== void 0;
}, {
  DOMCollection: D_
} = Jl, B_ = 1, U_ = 8;
function j_(e) {
  return e.nodeType !== U_ && (e.nodeType !== B_ || !e.matches(k().defaultIgnore));
}
function na(e, t, a) {
  if (a === void 0 && (a = {}), e || (e = bs().body), typeof t != "number" && (t = typeof process < "u" && process.env.DEBUG_PRINT_LIMIT || 7e3), t === 0)
    return "";
  e.documentElement && (e = e.documentElement);
  let o = typeof e;
  if (o === "object" ? o = e.constructor.name : e = {}, !("outerHTML" in e))
    throw new TypeError("Expected an element or document but got " + o);
  const {
    filterNode: r = j_,
    ...n
  } = a, i = Jd(e, {
    plugins: [k_(r), D_],
    printFunctionName: !1,
    highlight: q_(),
    ...n
  });
  return t !== void 0 && e.outerHTML.length > t ? i.slice(0, t) + "..." : i;
}
const Il = function() {
  const e = $_();
  console.log(e ? na(...arguments) + `

` + e : na(...arguments));
};
let tt = {
  testIdAttribute: "data-testid",
  asyncUtilTimeout: 1e3,
  // asyncWrapper and advanceTimersWrapper is to support React's async `act` function.
  // forcing react-testing-library to wrap all async functions would've been
  // a total nightmare (consider wrapping every findBy* query and then also
  // updating `within` so those would be wrapped too. Total nightmare).
  // so we have this config option that's really only intended for
  // react-testing-library to use. For that reason, this feature will remain
  // undocumented.
  asyncWrapper: (e) => e(),
  unstable_advanceTimersWrapper: (e) => e(),
  eventWrapper: (e) => e(),
  // default value for the `hidden` option in `ByRole` queries
  defaultHidden: !1,
  // default value for the `ignore` option in `ByText` queries
  defaultIgnore: "script, style",
  // showOriginalStackTrace flag to show the full error stack traces for async errors
  showOriginalStackTrace: !1,
  // throw errors w/ suggestions for better queries. Opt in so off by default.
  throwSuggestions: !1,
  // called when getBy* queries fail. (message, container) => Error
  getElementError(e, t) {
    const a = na(t), o = new Error([e, "Ignored nodes: comments, " + tt.defaultIgnore + `
` + a].filter(Boolean).join(`

`));
    return o.name = "TestingLibraryElementError", o;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1
};
function V_(e) {
  try {
    return tt._disableExpensiveErrorDiagnostics = !0, e();
  } finally {
    tt._disableExpensiveErrorDiagnostics = !1;
  }
}
function W_(e) {
  typeof e == "function" && (e = e(tt)), tt = {
    ...tt,
    ...e
  };
}
function k() {
  return tt;
}
const H_ = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function Nf(e) {
  return H_.includes(e.nodeName.toLowerCase()) ? "" : e.nodeType === xf ? e.textContent : Array.from(e.childNodes).map((t) => Nf(t)).join("");
}
function Fl(e) {
  let t;
  return e.tagName.toLowerCase() === "label" ? t = Nf(e) : t = e.value || e.textContent, t;
}
function $f(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!z_(e))
    return [];
  const a = e.ownerDocument.querySelectorAll("label");
  return Array.from(a).filter((o) => o.control === e);
}
function z_(e) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || e.tagName === "INPUT" && e.getAttribute("type") !== "hidden";
}
function qf(e, t, a) {
  let {
    selector: o = "*"
  } = a === void 0 ? {} : a;
  const r = t.getAttribute("aria-labelledby"), n = r ? r.split(" ") : [];
  return n.length ? n.map((i) => {
    const s = e.querySelector('[id="' + i + '"]');
    return s ? {
      content: Fl(s),
      formControl: null
    } : {
      content: "",
      formControl: null
    };
  }) : Array.from($f(t)).map((i) => {
    const s = Fl(i), l = "button, input, meter, output, progress, select, textarea", u = Array.from(i.querySelectorAll(l)).filter((c) => c.matches(o))[0];
    return {
      content: s,
      formControl: u
    };
  });
}
function Df(e) {
  if (e == null)
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
      "It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?"
    );
}
function qt(e, t, a, o) {
  if (typeof e != "string")
    return !1;
  Df(a);
  const r = o(e);
  return typeof a == "string" || typeof a == "number" ? r.toLowerCase().includes(a.toString().toLowerCase()) : typeof a == "function" ? a(r, t) : Bf(a, r);
}
function ve(e, t, a, o) {
  if (typeof e != "string")
    return !1;
  Df(a);
  const r = o(e);
  return a instanceof Function ? a(r, t) : a instanceof RegExp ? Bf(a, r) : r === String(a);
}
function vs(e) {
  let {
    trim: t = !0,
    collapseWhitespace: a = !0
  } = e === void 0 ? {} : e;
  return (o) => {
    let r = o;
    return r = t ? r.trim() : r, r = a ? r.replace(/\s+/g, " ") : r, r;
  };
}
function st(e) {
  let {
    trim: t,
    collapseWhitespace: a,
    normalizer: o
  } = e;
  if (!o)
    return vs({
      trim: t,
      collapseWhitespace: a
    });
  if (typeof t < "u" || typeof a < "u")
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  return o;
}
function Bf(e, t) {
  const a = e.test(t);
  return e.global && e.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), a;
}
function ya(e) {
  return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((t) => t.nodeType === xf && !!t.textContent).map((t) => t.textContent).join("");
}
const G_ = K_(wf);
function Uf(e) {
  return e.hidden === !0 || e.getAttribute("aria-hidden") === "true" || e.ownerDocument.defaultView.getComputedStyle(e).display === "none";
}
function si(e, t) {
  t === void 0 && (t = {});
  const {
    isSubtreeInaccessible: a = Uf
  } = t;
  if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === "hidden")
    return !0;
  let r = e;
  for (; r; ) {
    if (a(r))
      return !0;
    r = r.parentElement;
  }
  return !1;
}
function Ts(e) {
  for (const {
    match: t,
    roles: a
  } of G_)
    if (t(e))
      return [...a];
  return [];
}
function K_(e) {
  function t(i) {
    let {
      name: s,
      attributes: l
    } = i;
    return "" + s + l.map((u) => {
      let {
        name: c,
        value: d,
        constraints: p = []
      } = u;
      return p.indexOf("undefined") !== -1 ? ":not([" + c + "])" : d ? "[" + c + '="' + d + '"]' : "[" + c + "]";
    }).join("");
  }
  function a(i) {
    let {
      attributes: s = []
    } = i;
    return s.length;
  }
  function o(i, s) {
    let {
      specificity: l
    } = i, {
      specificity: u
    } = s;
    return u - l;
  }
  function r(i) {
    let {
      attributes: s = []
    } = i;
    const l = s.findIndex((c) => c.value && c.name === "type" && c.value === "text");
    l >= 0 && (s = [...s.slice(0, l), ...s.slice(l + 1)]);
    const u = t({
      ...i,
      attributes: s
    });
    return (c) => l >= 0 && c.type !== "text" ? !1 : c.matches(u);
  }
  let n = [];
  for (const [i, s] of e.entries())
    n = [...n, {
      match: r(i),
      roles: Array.from(s),
      specificity: a(i)
    }];
  return n.sort(o);
}
function jf(e, t) {
  let {
    hidden: a = !1
  } = t === void 0 ? {} : t;
  function o(r) {
    return [r, ...Array.from(r.children).reduce((n, i) => [...n, ...o(i)], [])];
  }
  return o(e).filter((r) => a === !1 ? si(r) === !1 : !0).reduce((r, n) => {
    let i = [];
    return n.hasAttribute("role") ? i = n.getAttribute("role").split(" ").slice(0, 1) : i = Ts(n), i.reduce((s, l) => Array.isArray(s[l]) ? {
      ...s,
      [l]: [...s[l], n]
    } : {
      ...s,
      [l]: [n]
    }, r);
  }, {});
}
function Vf(e, t) {
  let {
    hidden: a,
    includeDescription: o
  } = t;
  const r = jf(e, {
    hidden: a
  });
  return Object.entries(r).filter((n) => {
    let [i] = n;
    return i !== "generic";
  }).map((n) => {
    let [i, s] = n;
    const l = "-".repeat(50), u = s.map((c) => {
      const d = 'Name "' + Ql(c, {
        computedStyleSupportsPseudoElements: k().computedStyleSupportsPseudoElements
      }) + `":
`, p = na(c.cloneNode(!1));
      if (o) {
        const y = 'Description "' + hp(c, {
          computedStyleSupportsPseudoElements: k().computedStyleSupportsPseudoElements
        }) + `":
`;
        return "" + d + y + p;
      }
      return "" + d + p;
    }).join(`

`);
    return i + `:

` + u + `

` + l;
  }).join(`
`);
}
const J_ = function(e, t) {
  let {
    hidden: a = !1
  } = t === void 0 ? {} : t;
  return console.log(Vf(e, {
    hidden: a
  }));
};
function X_(e) {
  return e.tagName === "OPTION" ? e.selected : ha(e, "aria-selected");
}
function Q_(e) {
  return e.getAttribute("aria-busy") === "true";
}
function Z_(e) {
  if (!("indeterminate" in e && e.indeterminate))
    return "checked" in e ? e.checked : ha(e, "aria-checked");
}
function e9(e) {
  return ha(e, "aria-pressed");
}
function t9(e) {
  var t, a;
  return (t = (a = ha(e, "aria-current")) != null ? a : e.getAttribute("aria-current")) != null ? t : !1;
}
function a9(e) {
  return ha(e, "aria-expanded");
}
function ha(e, t) {
  const a = e.getAttribute(t);
  if (a === "true")
    return !0;
  if (a === "false")
    return !1;
}
function o9(e) {
  const t = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 6
  };
  return e.getAttribute("aria-level") && Number(e.getAttribute("aria-level")) || t[e.tagName];
}
function r9(e) {
  const t = e.getAttribute("aria-valuenow");
  return t === null ? void 0 : +t;
}
function n9(e) {
  const t = e.getAttribute("aria-valuemax");
  return t === null ? void 0 : +t;
}
function i9(e) {
  const t = e.getAttribute("aria-valuemin");
  return t === null ? void 0 : +t;
}
function l9(e) {
  const t = e.getAttribute("aria-valuetext");
  return t === null ? void 0 : t;
}
const Rc = vs();
function s9(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function Ec(e) {
  return new RegExp(s9(e.toLowerCase()), "i");
}
function Ee(e, t, a, o) {
  let {
    variant: r,
    name: n
  } = o, i = "";
  const s = {}, l = [["Role", "TestId"].includes(e) ? a : Ec(a)];
  n && (s.name = Ec(n)), e === "Role" && si(t) && (s.hidden = !0, i = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `), Object.keys(s).length > 0 && l.push(s);
  const u = r + "By" + e;
  return {
    queryName: e,
    queryMethod: u,
    queryArgs: l,
    variant: r,
    warning: i,
    toString() {
      i && console.warn(i);
      let [c, d] = l;
      return c = typeof c == "string" ? "'" + c + "'" : c, d = d ? ", { " + Object.entries(d).map((p) => {
        let [y, h] = p;
        return y + ": " + h;
      }).join(", ") + " }" : "", u + "(" + c + d + ")";
    }
  };
}
function we(e, t, a) {
  return a && (!t || t.toLowerCase() === e.toLowerCase());
}
function mo(e, t, a) {
  var o, r;
  if (t === void 0 && (t = "get"), e.matches(k().defaultIgnore))
    return;
  const n = (o = e.getAttribute("role")) != null ? o : (r = Ts(e)) == null ? void 0 : r[0];
  if (n !== "generic" && we("Role", a, n))
    return Ee("Role", e, n, {
      variant: t,
      name: Ql(e, {
        computedStyleSupportsPseudoElements: k().computedStyleSupportsPseudoElements
      })
    });
  const i = qf(document, e).map((p) => p.content).join(" ");
  if (we("LabelText", a, i))
    return Ee("LabelText", e, i, {
      variant: t
    });
  const s = e.getAttribute("placeholder");
  if (we("PlaceholderText", a, s))
    return Ee("PlaceholderText", e, s, {
      variant: t
    });
  const l = Rc(ya(e));
  if (we("Text", a, l))
    return Ee("Text", e, l, {
      variant: t
    });
  if (we("DisplayValue", a, e.value))
    return Ee("DisplayValue", e, Rc(e.value), {
      variant: t
    });
  const u = e.getAttribute("alt");
  if (we("AltText", a, u))
    return Ee("AltText", e, u, {
      variant: t
    });
  const c = e.getAttribute("title");
  if (we("Title", a, c))
    return Ee("Title", e, c, {
      variant: t
    });
  const d = e.getAttribute(k().testIdAttribute);
  if (we("TestId", a, d))
    return Ee("TestId", e, d, {
      variant: t
    });
}
function Ya(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function u9(e, t) {
  let {
    container: a = bs(),
    timeout: o = k().asyncUtilTimeout,
    showOriginalStackTrace: r = k().showOriginalStackTrace,
    stackTraceError: n,
    interval: i = 50,
    onTimeout: s = (u) => (Object.defineProperty(u, "message", {
      value: k().getElementError(u.message, a).message
    }), u),
    mutationObserverOptions: l = {
      subtree: !0,
      childList: !0,
      attributes: !0,
      characterData: !0
    }
  } = t;
  if (typeof e != "function")
    throw new TypeError("Received `callback` arg must be a function");
  return new Promise(async (u, c) => {
    let d, p, y, h = !1, b = "idle";
    const R = setTimeout(E, o), f = Ji();
    if (f) {
      const {
        unstable_advanceTimersWrapper: m
      } = k();
      for (S(); !h; ) {
        if (!Ji()) {
          const L = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          r || Ya(L, n), c(L);
          return;
        }
        if (await m(async () => {
          jest.advanceTimersByTime(i);
        }), S(), h)
          break;
      }
    } else {
      try {
        Ye(a);
      } catch (L) {
        c(L);
        return;
      }
      p = setInterval(Y, i);
      const {
        MutationObserver: m
      } = kf(a);
      y = new m(Y), y.observe(a, l), S();
    }
    function A(m, L) {
      h = !0, clearTimeout(R), f || (clearInterval(p), y.disconnect()), m ? c(m) : u(L);
    }
    function Y() {
      if (Ji()) {
        const m = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return r || Ya(m, n), c(m);
      } else
        return S();
    }
    function S() {
      if (b !== "pending")
        try {
          const m = V_(e);
          typeof (m == null ? void 0 : m.then) == "function" ? (b = "pending", m.then((L) => {
            b = "resolved", A(null, L);
          }, (L) => {
            b = "rejected", d = L;
          })) : A(null, m);
        } catch (m) {
          d = m;
        }
    }
    function E() {
      let m;
      d ? (m = d, !r && m.name === "TestingLibraryElementError" && Ya(m, n)) : (m = new Error("Timed out in waitFor."), r || Ya(m, n)), A(s(m), null);
    }
  });
}
function As(e, t) {
  const a = new Error("STACK_TRACE_MESSAGE");
  return k().asyncWrapper(() => u9(e, {
    stackTraceError: a,
    ...t
  }));
}
function ui(e, t) {
  return k().getElementError(e, t);
}
function ci(e, t) {
  return ui(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", t);
}
function ut(e, t, a, o) {
  let {
    exact: r = !0,
    collapseWhitespace: n,
    trim: i,
    normalizer: s
  } = o === void 0 ? {} : o;
  const l = r ? ve : qt, u = st({
    collapseWhitespace: n,
    trim: i,
    normalizer: s
  });
  return Array.from(t.querySelectorAll("[" + e + "]")).filter((c) => l(c.getAttribute(e), c, a, u));
}
function Wf(e, t, a, o) {
  const r = ut(e, t, a, o);
  if (r.length > 1)
    throw ci("Found multiple elements by [" + e + "=" + a + "]", t);
  return r[0] || null;
}
function Ct(e, t) {
  return function(a) {
    for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), n = 1; n < o; n++)
      r[n - 1] = arguments[n];
    const i = e(a, ...r);
    if (i.length > 1) {
      const s = i.map((l) => ui(null, l).message).join(`

`);
      throw ci(t(a, ...r) + `

Here are the matching elements:

` + s, a);
    }
    return i[0] || null;
  };
}
function Hf(e, t) {
  return k().getElementError(`A better query is available, try this:
` + e.toString() + `
`, t);
}
function gs(e, t) {
  return function(a) {
    for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), n = 1; n < o; n++)
      r[n - 1] = arguments[n];
    const i = e(a, ...r);
    if (!i.length)
      throw k().getElementError(t(a, ...r), a);
    return i;
  };
}
function _t(e) {
  return (t, a, o, r) => As(() => e(t, a, o), {
    container: t,
    ...r
  });
}
const We = (e, t, a) => function(o) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  const s = e(o, ...n), [{
    suggest: l = k().throwSuggestions
  } = {}] = n.slice(-1);
  if (s && l) {
    const u = mo(s, a);
    if (u && !t.endsWith(u.queryName))
      throw Hf(u.toString(), o);
  }
  return s;
}, Q = (e, t, a) => function(o) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  const s = e(o, ...n), [{
    suggest: l = k().throwSuggestions
  } = {}] = n.slice(-1);
  if (s.length && l) {
    const u = [...new Set(s.map((c) => {
      var d;
      return (d = mo(c, a)) == null ? void 0 : d.toString();
    }))];
    if (
      // only want to suggest if all the els have the same suggestion.
      u.length === 1 && !t.endsWith(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
        mo(s[0], a).queryName
      )
    )
      throw Hf(u[0], o);
  }
  return s;
};
function Re(e, t, a) {
  const o = We(Ct(e, t), e.name, "query"), r = gs(e, a), n = Ct(r, t), i = We(n, e.name, "get"), s = Q(r, e.name.replace("query", "get"), "getAll"), l = _t(Q(r, e.name, "findAll")), u = _t(We(n, e.name, "find"));
  return [o, s, i, l, u];
}
var c9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getElementError: ui,
  wrapAllByQueryWithSuggestion: Q,
  wrapSingleQueryWithSuggestion: We,
  getMultipleElementsFoundError: ci,
  queryAllByAttribute: ut,
  queryByAttribute: Wf,
  makeSingleQuery: Ct,
  makeGetAllQuery: gs,
  makeFindQuery: _t,
  buildQueries: Re
});
function d9(e) {
  return Array.from(e.querySelectorAll("label,input")).map((t) => ({
    node: t,
    textToMatch: Fl(t)
  })).filter((t) => {
    let {
      textToMatch: a
    } = t;
    return a !== null;
  });
}
const p9 = function(e, t, a) {
  let {
    exact: o = !0,
    trim: r,
    collapseWhitespace: n,
    normalizer: i
  } = a === void 0 ? {} : a;
  const s = o ? ve : qt, l = st({
    collapseWhitespace: n,
    trim: r,
    normalizer: i
  });
  return d9(e).filter((c) => {
    let {
      node: d,
      textToMatch: p
    } = c;
    return s(p, d, t, l);
  }).map((c) => {
    let {
      node: d
    } = c;
    return d;
  });
}, ia = function(e, t, a) {
  let {
    selector: o = "*",
    exact: r = !0,
    collapseWhitespace: n,
    trim: i,
    normalizer: s
  } = a === void 0 ? {} : a;
  Ye(e);
  const l = r ? ve : qt, u = st({
    collapseWhitespace: n,
    trim: i,
    normalizer: s
  }), c = Array.from(e.querySelectorAll("*")).filter((d) => $f(d).length || d.hasAttribute("aria-labelledby")).reduce((d, p) => {
    const y = qf(e, p, {
      selector: o
    });
    y.filter((b) => !!b.formControl).forEach((b) => {
      l(b.content, b.formControl, t, u) && b.formControl && d.push(b.formControl);
    });
    const h = y.filter((b) => !!b.content).map((b) => b.content);
    return l(h.join(" "), p, t, u) && d.push(p), h.length > 1 && h.forEach((b, R) => {
      l(b, p, t, u) && d.push(p);
      const f = [...h];
      f.splice(R, 1), f.length > 1 && l(f.join(" "), p, t, u) && d.push(p);
    }), d;
  }, []).concat(ut("aria-label", e, t, {
    exact: r,
    normalizer: u
  }));
  return Array.from(new Set(c)).filter((d) => d.matches(o));
}, at = function(e, t) {
  for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
    o[r - 2] = arguments[r];
  const n = ia(e, t, ...o);
  if (!n.length) {
    const i = p9(e, t, ...o);
    if (i.length) {
      const s = i.map((l) => f9(e, l)).filter((l) => !!l);
      throw s.length ? k().getElementError(s.map((l) => "Found a label with the text of: " + t + ", however the element associated with this label (<" + l + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + l + " />, you can use aria-label or aria-labelledby instead.").join(`

`), e) : k().getElementError("Found a label with the text of: " + t + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, e);
    } else
      throw k().getElementError("Unable to find a label with the text of: " + t, e);
  }
  return n;
};
function f9(e, t) {
  const a = t.getAttribute("for");
  if (!a)
    return null;
  const o = e.querySelector('[id="' + a + '"]');
  return o ? o.tagName.toLowerCase() : null;
}
const zf = (e, t) => "Found multiple elements with the text of: " + t, Gf = We(Ct(ia, zf), ia.name, "query"), Kf = Ct(at, zf), Jf = _t(Q(at, at.name, "findAll")), Xf = _t(We(Kf, at.name, "find")), Qf = Q(at, at.name, "getAll"), Zf = We(Kf, at.name, "get"), em = Q(ia, ia.name, "queryAll"), Ol = function() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return Ye(t[0]), ut("placeholder", ...t);
}, m9 = (e, t) => "Found multiple elements with the placeholder text of: " + t, y9 = (e, t) => "Unable to find an element with the placeholder text of: " + t, tm = Q(Ol, Ol.name, "queryAll"), [am, om, rm, nm, im] = Re(Ol, m9, y9), Ml = function(e, t, a) {
  let {
    selector: o = "*",
    exact: r = !0,
    collapseWhitespace: n,
    trim: i,
    ignore: s = k().defaultIgnore,
    normalizer: l
  } = a === void 0 ? {} : a;
  Ye(e);
  const u = r ? ve : qt, c = st({
    collapseWhitespace: n,
    trim: i,
    normalizer: l
  });
  let d = [];
  return typeof e.matches == "function" && e.matches(o) && (d = [e]), [...d, ...Array.from(e.querySelectorAll(o))].filter((p) => !s || !p.matches(s)).filter((p) => u(ya(p), p, t, c));
}, h9 = (e, t) => "Found multiple elements with the text: " + t, L9 = function(e, t, a) {
  a === void 0 && (a = {});
  const {
    collapseWhitespace: o,
    trim: r,
    normalizer: n,
    selector: i
  } = a, l = st({
    collapseWhitespace: o,
    trim: r,
    normalizer: n
  })(t.toString()), u = l !== t.toString(), c = (i ?? "*") !== "*";
  return "Unable to find an element with the text: " + (u ? l + " (normalized from '" + t + "')" : t) + (c ? ", which matches selector '" + i + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}, lm = Q(Ml, Ml.name, "queryAll"), [sm, um, cm, dm, pm] = Re(Ml, h9, L9), xl = function(e, t, a) {
  let {
    exact: o = !0,
    collapseWhitespace: r,
    trim: n,
    normalizer: i
  } = a === void 0 ? {} : a;
  Ye(e);
  const s = o ? ve : qt, l = st({
    collapseWhitespace: r,
    trim: n,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("input,textarea,select")).filter((u) => u.tagName === "SELECT" ? Array.from(u.options).filter((d) => d.selected).some((d) => s(ya(d), d, t, l)) : s(u.value, u, t, l));
}, b9 = (e, t) => "Found multiple elements with the display value: " + t + ".", v9 = (e, t) => "Unable to find an element with the display value: " + t + ".", fm = Q(xl, xl.name, "queryAll"), [mm, ym, hm, Lm, bm] = Re(xl, b9, v9), T9 = /^(img|input|area|.+-.+)$/i, kl = function(e, t, a) {
  return a === void 0 && (a = {}), Ye(e), ut("alt", e, t, a).filter((o) => T9.test(o.tagName));
}, A9 = (e, t) => "Found multiple elements with the alt text: " + t, g9 = (e, t) => "Unable to find an element with the alt text: " + t, vm = Q(kl, kl.name, "queryAll"), [Tm, Am, gm, Sm, Ym] = Re(kl, A9, g9), S9 = (e) => {
  var t;
  return e.tagName.toLowerCase() === "title" && ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === "svg";
}, Nl = function(e, t, a) {
  let {
    exact: o = !0,
    collapseWhitespace: r,
    trim: n,
    normalizer: i
  } = a === void 0 ? {} : a;
  Ye(e);
  const s = o ? ve : qt, l = st({
    collapseWhitespace: r,
    trim: n,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("[title], svg > title")).filter((u) => s(u.getAttribute("title"), u, t, l) || S9(u) && s(ya(u), u, t, l));
}, Y9 = (e, t) => "Found multiple elements with the title: " + t + ".", R9 = (e, t) => "Unable to find an element with the title: " + t + ".", Rm = Q(Nl, Nl.name, "queryAll"), [Em, wm, Cm, _m, Pm] = Re(Nl, Y9, R9), $l = function(e, t, a) {
  let {
    hidden: o = k().defaultHidden,
    name: r,
    description: n,
    queryFallbacks: i = !1,
    selected: s,
    busy: l,
    checked: u,
    pressed: c,
    current: d,
    level: p,
    expanded: y,
    value: {
      now: h,
      min: b,
      max: R,
      text: f
    } = {}
  } = a === void 0 ? {} : a;
  if (Ye(e), s !== void 0) {
    var A;
    if (((A = re.get(t)) == null ? void 0 : A.props["aria-selected"]) === void 0)
      throw new Error('"aria-selected" is not supported on role "' + t + '".');
  }
  if (l !== void 0) {
    var Y;
    if (((Y = re.get(t)) == null ? void 0 : Y.props["aria-busy"]) === void 0)
      throw new Error('"aria-busy" is not supported on role "' + t + '".');
  }
  if (u !== void 0) {
    var S;
    if (((S = re.get(t)) == null ? void 0 : S.props["aria-checked"]) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + t + '".');
  }
  if (c !== void 0) {
    var E;
    if (((E = re.get(t)) == null ? void 0 : E.props["aria-pressed"]) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + t + '".');
  }
  if (d !== void 0) {
    var m;
    if (((m = re.get(t)) == null ? void 0 : m.props["aria-current"]) === void 0)
      throw new Error('"aria-current" is not supported on role "' + t + '".');
  }
  if (p !== void 0 && t !== "heading")
    throw new Error('Role "' + t + '" cannot have "level" property.');
  if (h !== void 0) {
    var L;
    if (((L = re.get(t)) == null ? void 0 : L.props["aria-valuenow"]) === void 0)
      throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
  }
  if (R !== void 0) {
    var T;
    if (((T = re.get(t)) == null ? void 0 : T.props["aria-valuemax"]) === void 0)
      throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
  }
  if (b !== void 0) {
    var O;
    if (((O = re.get(t)) == null ? void 0 : O.props["aria-valuemin"]) === void 0)
      throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
  }
  if (f !== void 0) {
    var D;
    if (((D = re.get(t)) == null ? void 0 : D.props["aria-valuetext"]) === void 0)
      throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
  }
  if (y !== void 0) {
    var q;
    if (((q = re.get(t)) == null ? void 0 : q.props["aria-expanded"]) === void 0)
      throw new Error('"aria-expanded" is not supported on role "' + t + '".');
  }
  const B = /* @__PURE__ */ new WeakMap();
  function g(C) {
    return B.has(C) || B.set(C, Uf(C)), B.get(C);
  }
  return Array.from(e.querySelectorAll(
    // Only query elements that can be matched by the following filters
    E9(t)
  )).filter((C) => {
    if (C.hasAttribute("role")) {
      const Z = C.getAttribute("role");
      if (i)
        return Z.split(" ").filter(Boolean).some((fi) => fi === t);
      const [Je] = Z.split(" ");
      return Je === t;
    }
    return Ts(C).some((Z) => Z === t);
  }).filter((C) => {
    if (s !== void 0)
      return s === X_(C);
    if (l !== void 0)
      return l === Q_(C);
    if (u !== void 0)
      return u === Z_(C);
    if (c !== void 0)
      return c === e9(C);
    if (d !== void 0)
      return d === t9(C);
    if (y !== void 0)
      return y === a9(C);
    if (p !== void 0)
      return p === o9(C);
    if (h !== void 0 || R !== void 0 || b !== void 0 || f !== void 0) {
      let U = !0;
      if (h !== void 0 && U && (U = h === r9(C)), R !== void 0 && U && (U = R === n9(C)), b !== void 0 && U && (U = b === i9(C)), f !== void 0) {
        var F;
        U && (U = ve((F = l9(C)) != null ? F : null, C, f, (Z) => Z));
      }
      return U;
    }
    return !0;
  }).filter((C) => r === void 0 ? !0 : ve(Ql(C, {
    computedStyleSupportsPseudoElements: k().computedStyleSupportsPseudoElements
  }), C, r, (F) => F)).filter((C) => n === void 0 ? !0 : ve(hp(C, {
    computedStyleSupportsPseudoElements: k().computedStyleSupportsPseudoElements
  }), C, n, (F) => F)).filter((C) => o === !1 ? si(C, {
    isSubtreeInaccessible: g
  }) === !1 : !0);
};
function E9(e) {
  var t;
  const a = '*[role~="' + e + '"]', o = (t = Cf.get(e)) != null ? t : /* @__PURE__ */ new Set(), r = new Set(Array.from(o).map((n) => {
    let {
      name: i
    } = n;
    return i;
  }));
  return [a].concat(Array.from(r)).join(",");
}
const Im = (e) => {
  let t = "";
  return e === void 0 ? t = "" : typeof e == "string" ? t = ' and name "' + e + '"' : t = " and name `" + e + "`", t;
}, w9 = function(e, t, a) {
  let {
    name: o
  } = a === void 0 ? {} : a;
  return 'Found multiple elements with the role "' + t + '"' + Im(o);
}, C9 = function(e, t, a) {
  let {
    hidden: o = k().defaultHidden,
    name: r,
    description: n
  } = a === void 0 ? {} : a;
  if (k()._disableExpensiveErrorDiagnostics)
    return 'Unable to find role="' + t + '"' + Im(r);
  let i = "";
  Array.from(e.children).forEach((c) => {
    i += Vf(c, {
      hidden: o,
      includeDescription: n !== void 0
    });
  });
  let s;
  i.length === 0 ? o === !1 ? s = "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : s = "There are no available roles." : s = (`
Here are the ` + (o === !1 ? "accessible" : "available") + ` roles:

  ` + i.replace(/\n/g, `
  `).replace(/\n\s\s\n/g, `

`) + `
`).trim();
  let l = "";
  r === void 0 ? l = "" : typeof r == "string" ? l = ' and name "' + r + '"' : l = " and name `" + r + "`";
  let u = "";
  return n === void 0 ? u = "" : typeof n == "string" ? u = ' and description "' + n + '"' : u = " and description `" + n + "`", (`
Unable to find an ` + (o === !1 ? "accessible " : "") + 'element with the role "' + t + '"' + l + u + `

` + s).trim();
}, Fm = Q($l, $l.name, "queryAll"), [Om, Mm, xm, km, Nm] = Re($l, w9, C9), Ss = () => k().testIdAttribute, ql = function() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return Ye(t[0]), ut(Ss(), ...t);
}, _9 = (e, t) => "Found multiple elements by: [" + Ss() + '="' + t + '"]', P9 = (e, t) => "Unable to find an element by: [" + Ss() + '="' + t + '"]', $m = Q(ql, ql.name, "queryAll"), [qm, Dm, Bm, Um, jm] = Re(ql, _9, P9);
var yo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  queryAllByLabelText: em,
  queryByLabelText: Gf,
  getAllByLabelText: Qf,
  getByLabelText: Zf,
  findAllByLabelText: Jf,
  findByLabelText: Xf,
  queryByPlaceholderText: am,
  queryAllByPlaceholderText: tm,
  getByPlaceholderText: rm,
  getAllByPlaceholderText: om,
  findAllByPlaceholderText: nm,
  findByPlaceholderText: im,
  queryByText: sm,
  queryAllByText: lm,
  getByText: cm,
  getAllByText: um,
  findAllByText: dm,
  findByText: pm,
  queryByDisplayValue: mm,
  queryAllByDisplayValue: fm,
  getByDisplayValue: hm,
  getAllByDisplayValue: ym,
  findAllByDisplayValue: Lm,
  findByDisplayValue: bm,
  queryByAltText: Tm,
  queryAllByAltText: vm,
  getByAltText: gm,
  getAllByAltText: Am,
  findAllByAltText: Sm,
  findByAltText: Ym,
  queryByTitle: Em,
  queryAllByTitle: Rm,
  getByTitle: Cm,
  getAllByTitle: wm,
  findAllByTitle: _m,
  findByTitle: Pm,
  queryByRole: Om,
  queryAllByRole: Fm,
  getAllByRole: Mm,
  getByRole: xm,
  findAllByRole: km,
  findByRole: Nm,
  queryByTestId: qm,
  queryAllByTestId: $m,
  getByTestId: Bm,
  getAllByTestId: Dm,
  findAllByTestId: Um,
  findByTestId: jm
});
function Dl(e, t, a) {
  return t === void 0 && (t = yo), a === void 0 && (a = {}), Object.keys(t).reduce((o, r) => {
    const n = t[r];
    return o[r] = n.bind(null, e), o;
  }, a);
}
const Vm = (e) => !e || Array.isArray(e) && !e.length;
function wc(e) {
  if (Vm(e))
    throw new Error("The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.");
}
async function I9(e, t) {
  const a = new Error("Timed out in waitForElementToBeRemoved.");
  if (typeof e != "function") {
    wc(e);
    const r = (Array.isArray(e) ? e : [e]).map((n) => {
      let i = n.parentElement;
      if (i === null)
        return () => null;
      for (; i.parentElement; )
        i = i.parentElement;
      return () => i.contains(n) ? n : null;
    });
    e = () => r.map((n) => n()).filter(Boolean);
  }
  return wc(e()), As(() => {
    let o;
    try {
      o = e();
    } catch (r) {
      if (r.name === "TestingLibraryElementError")
        return;
      throw r;
    }
    if (!Vm(o))
      throw a;
  }, t);
}
const Cc = {
  // Clipboard Events
  copy: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  cut: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  paste: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Composition Events
  compositionEnd: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionStart: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionUpdate: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Keyboard Events
  keyDown: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyPress: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyUp: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  // Focus Events
  focus: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  blur: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  focusIn: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  focusOut: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // Form Events
  change: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  input: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  invalid: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !0
    }
  },
  submit: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  reset: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  // Mouse Events
  click: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      button: 0,
      composed: !0
    }
  },
  contextMenu: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dblClick: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drag: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragEnd: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragEnter: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragExit: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragLeave: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragOver: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragStart: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drop: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseDown: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseEnter: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseLeave: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseMove: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOut: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOver: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseUp: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Selection Events
  select: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Touch Events
  touchCancel: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  touchEnd: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchMove: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchStart: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // UI Events
  resize: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  scroll: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Wheel Events
  wheel: {
    EventType: "WheelEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Media Events
  abort: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlay: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlayThrough: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  durationChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  emptied: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  encrypted: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  ended: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedData: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedMetadata: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadStart: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pause: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  play: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  playing: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  progress: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  rateChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeked: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeking: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  stalled: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  suspend: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  timeUpdate: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  volumeChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  waiting: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Events
  load: {
    // TODO: load events can be UIEvent or Event depending on what generated them
    // This is where this abstraction breaks down.
    // But the common targets are <img />, <script /> and window.
    // Neither of these targets receive a UIEvent
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  error: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Animation Events
  animationStart: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationEnd: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationIteration: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Transition Events
  transitionCancel: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionEnd: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  transitionRun: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionStart: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // pointer events
  pointerOver: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerEnter: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pointerDown: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerMove: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerUp: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerCancel: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  pointerOut: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerLeave: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  gotPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  lostPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // history events
  popState: {
    EventType: "PopStateEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // window events
  offline: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  online: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  }
}, _c = {
  doubleClick: "dblClick"
};
function la(e, t) {
  return k().eventWrapper(() => {
    if (!t)
      throw new Error("Unable to fire an event - please provide an event object.");
    if (!e)
      throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
    return e.dispatchEvent(t);
  });
}
function Ha(e, t, a, o) {
  let {
    EventType: r = "Event",
    defaultInit: n = {}
  } = o === void 0 ? {} : o;
  if (!t)
    throw new Error('Unable to fire a "' + e + '" event - please provide a DOM element.');
  const i = {
    ...n,
    ...a
  }, {
    target: {
      value: s,
      files: l,
      ...u
    } = {}
  } = i;
  s !== void 0 && F9(t, s), l !== void 0 && Object.defineProperty(t, "files", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: l
  }), Object.assign(t, u);
  const c = kf(t), d = c[r] || c.Event;
  let p;
  if (typeof d == "function")
    p = new d(e, i);
  else {
    p = c.document.createEvent(r);
    const {
      bubbles: h,
      cancelable: b,
      detail: R,
      ...f
    } = i;
    p.initEvent(e, h, b, R), Object.keys(f).forEach((A) => {
      p[A] = f[A];
    });
  }
  return ["dataTransfer", "clipboardData"].forEach((h) => {
    const b = i[h];
    typeof b == "object" && (typeof c.DataTransfer == "function" ? Object.defineProperty(p, h, {
      value: Object.getOwnPropertyNames(b).reduce((R, f) => (Object.defineProperty(R, f, {
        value: b[f]
      }), R), new c.DataTransfer())
    }) : Object.defineProperty(p, h, {
      value: b
    }));
  }), p;
}
Object.keys(Cc).forEach((e) => {
  const {
    EventType: t,
    defaultInit: a
  } = Cc[e], o = e.toLowerCase();
  Ha[e] = (r, n) => Ha(o, r, n, {
    EventType: t,
    defaultInit: a
  }), la[e] = (r, n) => la(r, Ha[e](r, n));
});
function F9(e, t) {
  const {
    set: a
  } = Object.getOwnPropertyDescriptor(e, "value") || {}, o = Object.getPrototypeOf(e), {
    set: r
  } = Object.getOwnPropertyDescriptor(o, "value") || {};
  if (r && a !== r)
    r.call(e, t);
  else if (a)
    a.call(e, t);
  else
    throw new Error("The given element does not have a value setter");
}
Object.keys(_c).forEach((e) => {
  const t = _c[e];
  la[e] = function() {
    return la[t](...arguments);
  };
});
function O9(e) {
  return e.replace(/[ \t]*[\n][ \t]*/g, `
`);
}
function M9(e) {
  return Y_.compressToEncodedURIComponent(O9(e));
}
function x9(e) {
  return "https://testing-playground.com/#markup=" + M9(e);
}
const k9 = (e, t, a) => Array.isArray(e) ? e.forEach((o) => Il(o, t, a)) : Il(e, t, a), N9 = function(e) {
  if (e === void 0 && (e = bs().body), !e || !("innerHTML" in e)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  if (!e.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const t = x9(e.innerHTML);
  return console.log(`Open this URL in your browser

` + t), t;
}, Pc = {
  debug: k9,
  logTestingPlaygroundURL: N9
}, $9 = typeof document < "u" && document.body ? Dl(document.body, yo, Pc) : Object.keys(yo).reduce((e, t) => (e[t] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, e), Pc), di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buildQueries: Re,
  configure: W_,
  createEvent: Ha,
  findAllByAltText: Sm,
  findAllByDisplayValue: Lm,
  findAllByLabelText: Jf,
  findAllByPlaceholderText: nm,
  findAllByRole: km,
  findAllByTestId: Um,
  findAllByText: dm,
  findAllByTitle: _m,
  findByAltText: Ym,
  findByDisplayValue: bm,
  findByLabelText: Xf,
  findByPlaceholderText: im,
  findByRole: Nm,
  findByTestId: jm,
  findByText: pm,
  findByTitle: Pm,
  fireEvent: la,
  getAllByAltText: Am,
  getAllByDisplayValue: ym,
  getAllByLabelText: Qf,
  getAllByPlaceholderText: om,
  getAllByRole: Mm,
  getAllByTestId: Dm,
  getAllByText: um,
  getAllByTitle: wm,
  getByAltText: gm,
  getByDisplayValue: hm,
  getByLabelText: Zf,
  getByPlaceholderText: rm,
  getByRole: xm,
  getByTestId: Bm,
  getByText: cm,
  getByTitle: Cm,
  getConfig: k,
  getDefaultNormalizer: vs,
  getElementError: ui,
  getMultipleElementsFoundError: ci,
  getNodeText: ya,
  getQueriesForElement: Dl,
  getRoles: jf,
  getSuggestedQuery: mo,
  isInaccessible: si,
  logDOM: Il,
  logRoles: J_,
  makeFindQuery: _t,
  makeGetAllQuery: gs,
  makeSingleQuery: Ct,
  prettyDOM: na,
  prettyFormat: g2,
  queries: yo,
  queryAllByAltText: vm,
  queryAllByAttribute: ut,
  queryAllByDisplayValue: fm,
  queryAllByLabelText: em,
  queryAllByPlaceholderText: tm,
  queryAllByRole: Fm,
  queryAllByTestId: $m,
  queryAllByText: lm,
  queryAllByTitle: Rm,
  queryByAltText: Tm,
  queryByAttribute: Wf,
  queryByDisplayValue: mm,
  queryByLabelText: Gf,
  queryByPlaceholderText: am,
  queryByRole: Om,
  queryByTestId: qm,
  queryByText: sm,
  queryByTitle: Em,
  queryHelpers: c9,
  screen: $9,
  waitFor: As,
  waitForElementToBeRemoved: I9,
  within: Dl,
  wrapAllByQueryWithSuggestion: Q,
  wrapSingleQueryWithSuggestion: We
}, Symbol.toStringTag, { value: "Module" }));
function _(e, t, a) {
  return e.namespaceURI && e.namespaceURI !== "http://www.w3.org/1999/xhtml" || (t = Array.isArray(t) ? t : [
    t
  ], !t.includes(e.tagName.toLowerCase())) ? !1 : a ? Object.entries(a).every(([o, r]) => e[o] === r) : !0;
}
var Bl;
(function(e) {
  e.button = "button", e.color = "color", e.file = "file", e.image = "image", e.reset = "reset", e.submit = "submit", e.checkbox = "checkbox", e.radio = "radio";
})(Bl || (Bl = {}));
function Wm(e) {
  return _(e, "button") || _(e, "input") && e.type in Bl;
}
var Ae = {};
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
var Hm = Ae.TEXT_NODE = void 0, q9 = Ae.checkContainerType = z9, D9 = Ae.getDocument = W9, B9 = Ae.getWindowFromNode = H9, U9 = Ae.jestFakeTimersAreEnabled = V9;
const j9 = 3;
Hm = Ae.TEXT_NODE = j9;
function V9() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function W9() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function H9(e) {
  if (e.defaultView)
    return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window)
    return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof e.debug == "function" && typeof e.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error(`The given node is not an Element, the node type is: ${typeof e}.`);
}
function z9(e) {
  if (!e || typeof e.querySelector != "function" || typeof e.querySelectorAll != "function")
    throw new TypeError(`Expected container to be an Element, a Document or a DocumentFragment but got ${t(e)}.`);
  function t(a) {
    return typeof a == "object" ? a === null ? "null" : a.constructor.name : typeof a;
  }
}
const G9 = /* @__PURE__ */ Sd({
  __proto__: null,
  get TEXT_NODE() {
    return Hm;
  },
  checkContainerType: q9,
  default: Ae,
  getDocument: D9,
  getWindowFromNode: B9,
  jestFakeTimersAreEnabled: U9
}, [Ae]), { getWindowFromNode: K9 } = G9;
function pe(e) {
  return K9(e);
}
function zm(e, t) {
  return new Promise((a, o) => {
    const r = new t();
    r.onerror = o, r.onabort = o, r.onload = () => {
      a(String(r.result));
    }, r.readAsText(e);
  });
}
function Ys(e, t) {
  const a = {
    ...t,
    length: t.length,
    item: (o) => a[o],
    [Symbol.iterator]: function* () {
      for (let r = 0; r < a.length; r++)
        yield a[r];
    }
  };
  return a.constructor = e.FileList, e.FileList && Object.setPrototypeOf(a, e.FileList.prototype), Object.freeze(a), a;
}
function Ne(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
class Gm {
  getAsFile() {
    return this.file;
  }
  getAsString(t) {
    typeof this.data == "string" && t(this.data);
  }
  /* istanbul ignore next */
  webkitGetAsEntry() {
    throw new Error("not implemented");
  }
  constructor(t, a) {
    Ne(this, "kind", void 0), Ne(this, "type", void 0), Ne(this, "file", null), Ne(this, "data", void 0), typeof t == "string" ? (this.kind = "string", this.type = String(a), this.data = t) : (this.kind = "file", this.type = t.type, this.file = t);
  }
}
class J9 extends Array {
  add(...t) {
    const a = new Gm(t[0], t[1]);
    return this.push(a), a;
  }
  clear() {
    this.splice(0, this.length);
  }
  remove(t) {
    this.splice(t, 1);
  }
}
function Ra(e, t) {
  const [a, o] = e.split("/"), r = !o || o === "*";
  return (n) => t ? n.type === (r ? a : e) : r ? n.type.startsWith(`${a}/`) : n.type === a;
}
function X9(e) {
  return new class {
    getData(a) {
      var o;
      const r = (o = this.items.find(Ra(a, !0))) !== null && o !== void 0 ? o : this.items.find(Ra(a, !1));
      let n = "";
      return r == null || r.getAsString((i) => {
        n = i;
      }), n;
    }
    setData(a, o) {
      const r = this.items.findIndex(Ra(a, !0)), n = new Gm(o, a);
      r >= 0 ? this.items.splice(r, 1, n) : this.items.push(n);
    }
    clearData(a) {
      if (a) {
        const o = this.items.findIndex(Ra(a, !0));
        o >= 0 && this.items.remove(o);
      } else
        this.items.clear();
    }
    get types() {
      const a = [];
      return this.files.length && a.push("Files"), this.items.forEach((o) => a.push(o.type)), Object.freeze(a), a;
    }
    /* istanbul ignore next */
    setDragImage() {
    }
    constructor() {
      Ne(this, "dropEffect", "none"), Ne(this, "effectAllowed", "uninitialized"), Ne(this, "items", new J9()), Ne(this, "files", Ys(e, []));
    }
  }();
}
function Rs(e, t = []) {
  const a = typeof e.DataTransfer > "u" ? X9(e) : (
    /* istanbul ignore next */
    new e.DataTransfer()
  );
  return Object.defineProperty(a, "files", {
    get: () => Ys(e, t)
  }), a;
}
function Q9(e, t) {
  if (t.kind === "file")
    return t.getAsFile();
  let a = "";
  return t.getAsString((o) => {
    a = o;
  }), new e.Blob([
    a
  ], {
    type: t.type
  });
}
function Km(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function Jm(e, ...t) {
  const a = Object.fromEntries(t.map((o) => [
    typeof o == "string" ? "text/plain" : o.type,
    Promise.resolve(o)
  ]));
  return typeof e.ClipboardItem < "u" ? new e.ClipboardItem(a) : new class {
    get types() {
      return Array.from(Object.keys(this.data));
    }
    async getType(r) {
      const n = await this.data[r];
      if (!n)
        throw new Error(`${r} is not one of the available MIME types on this item.`);
      return n instanceof e.Blob ? n : new e.Blob([
        n
      ], {
        type: r
      });
    }
    constructor(r) {
      Km(this, "data", void 0), this.data = r;
    }
  }(a);
}
const Pt = Symbol("Manage ClipboardSub");
function Ic(e, t) {
  return Object.assign(new class extends e.EventTarget {
    async read() {
      return Array.from(this.items);
    }
    async readText() {
      let o = "";
      for (const r of this.items) {
        const n = r.types.includes("text/plain") ? "text/plain" : r.types.find((i) => i.startsWith("text/"));
        n && (o += await r.getType(n).then((i) => zm(i, e.FileReader)));
      }
      return o;
    }
    async write(o) {
      this.items = o;
    }
    async writeText(o) {
      this.items = [
        Jm(e, o)
      ];
    }
    constructor(...o) {
      super(...o), Km(this, "items", []);
    }
  }(), {
    [Pt]: t
  });
}
function Es(e) {
  return !!(e != null && e[Pt]);
}
function Z9(e) {
  if (Es(e.navigator.clipboard))
    return e.navigator.clipboard[Pt];
  const t = Object.getOwnPropertyDescriptor(e.navigator, "clipboard");
  let a;
  const o = {
    resetClipboardStub: () => {
      a = Ic(e, o);
    },
    detachClipboardStub: () => {
      t ? Object.defineProperty(e.navigator, "clipboard", t) : Object.defineProperty(e.navigator, "clipboard", {
        value: void 0,
        configurable: !0
      });
    }
  };
  return a = Ic(e, o), Object.defineProperty(e.navigator, "clipboard", {
    get: () => a,
    configurable: !0
  }), a[Pt];
}
function eP(e) {
  Es(e.navigator.clipboard) && e.navigator.clipboard[Pt].resetClipboardStub();
}
function tP(e) {
  Es(e.navigator.clipboard) && e.navigator.clipboard[Pt].detachClipboardStub();
}
async function aP(e) {
  const t = e.defaultView, a = t == null ? void 0 : t.navigator.clipboard, o = a && await a.read();
  if (!o)
    throw new Error("The Clipboard API is unavailable.");
  const r = Rs(t);
  for (const n of o)
    for (const i of n.types)
      r.setData(i, await n.getType(i).then((s) => zm(s, t.FileReader)));
  return r;
}
async function Xm(e, t) {
  const a = pe(e), o = a.navigator.clipboard, r = [];
  for (let i = 0; i < t.items.length; i++) {
    const s = t.items[i], l = Q9(a, s);
    r.push(Jm(a, l));
  }
  if (!(o && await o.write(r).then(
    () => !0,
    // Can happen with other implementations that e.g. require permissions
    /* istanbul ignore next */
    () => !1
  )))
    throw new Error("The Clipboard API is unavailable.");
}
const ho = globalThis;
typeof ho.afterEach == "function" && ho.afterEach(() => eP(globalThis.window));
typeof ho.afterAll == "function" && ho.afterAll(() => tP(globalThis.window));
function ot(e) {
  return e.hasAttribute("contenteditable") && (e.getAttribute("contenteditable") == "true" || e.getAttribute("contenteditable") == "");
}
function sa(e) {
  const t = oP(e);
  return t && (t.closest('[contenteditable=""]') || t.closest('[contenteditable="true"]'));
}
function oP(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function It(e) {
  return Qm(e) && !e.readOnly || ot(e);
}
var Ul;
(function(e) {
  e.text = "text", e.date = "date", e["datetime-local"] = "datetime-local", e.email = "email", e.month = "month", e.number = "number", e.password = "password", e.search = "search", e.tel = "tel", e.time = "time", e.url = "url", e.week = "week";
})(Ul || (Ul = {}));
function Qm(e) {
  return _(e, "textarea") || _(e, "input") && e.type in Ul;
}
var jl;
(function(e) {
  e.email = "email", e.password = "password", e.search = "search", e.telephone = "telephone", e.text = "text", e.url = "url";
})(jl || (jl = {}));
function rP(e) {
  var t;
  const a = (t = e.getAttribute("maxlength")) !== null && t !== void 0 ? t : "";
  return /^\d+$/.test(a) && Number(a) >= 0 ? Number(a) : void 0;
}
function nP(e) {
  return _(e, "textarea") || _(e, "input") && e.type in jl;
}
const Zm = [
  "input:not([type=hidden]):not([disabled])",
  "button:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[contenteditable=""]',
  '[contenteditable="true"]',
  "a[href]",
  "[tabindex]:not([disabled])"
].join(", ");
function ws(e) {
  return e.matches(Zm);
}
var Lo;
(function(e) {
  e["{"] = "}", e["["] = "]";
})(Lo || (Lo = {}));
function ey(e, t) {
  let a = 0;
  const o = e[a] in Lo ? e[a] : "";
  a += o.length;
  const n = new RegExp(`^\\${o}{2}`).test(e) ? "" : o;
  return {
    type: n,
    ...n === "" ? iP(e, a, t) : lP(e, a, n, t)
  };
}
function iP(e, t, a) {
  const o = e[t];
  return ty(o, e, t, a), t += o.length, {
    consumedLength: t,
    descriptor: o,
    releasePrevious: !1,
    releaseSelf: !0,
    repeat: 1
  };
}
function lP(e, t, a, o) {
  var r, n;
  const i = e[t] === "/" ? "/" : "";
  t += i.length;
  const s = a === "{" && e[t] === "\\";
  t += Number(s);
  const l = s ? e[t] : (r = e.slice(t).match(a === "{" ? /^\w+|^[^}>/]/ : /^\w+/)) === null || r === void 0 ? void 0 : r[0];
  ty(l, e, t, o), t += l.length;
  var u;
  const c = (u = (n = e.slice(t).match(/^>\d+/)) === null || n === void 0 ? void 0 : n[0]) !== null && u !== void 0 ? u : "";
  t += c.length;
  const d = e[t] === "/" || !c && e[t] === ">" ? e[t] : "";
  t += d.length;
  const p = Lo[a], y = e[t] === p ? p : "";
  if (!y)
    throw new Error(ay([
      !c && "repeat modifier",
      !d && "release modifier",
      `"${p}"`
    ].filter(Boolean).join(" or "), e[t], e, o));
  return t += y.length, {
    consumedLength: t,
    descriptor: l,
    releasePrevious: !!i,
    repeat: c ? Math.max(Number(c.substr(1)), 1) : 1,
    releaseSelf: sP(d, c)
  };
}
function ty(e, t, a, o) {
  if (!e)
    throw new Error(ay("key descriptor", t[a], t, o));
}
function sP(e, t) {
  if (e)
    return e === "/";
  if (t)
    return !1;
}
function ay(e, t, a, o) {
  return `Expected ${e} but found "${t ?? ""}" in "${a}"
    See ${o === "pointer" ? "https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen" : "https://testing-library.com/docs/user-event/keyboard"}
    for more information about how userEvent parses your input.`;
}
function uP(e) {
  return new e.constructor(e.type, e);
}
var J;
(function(e) {
  e[e.Trigger = 2] = "Trigger", e[e.Call = 1] = "Call";
})(J || (J = {}));
function Wt(e, t) {
  e.levelRefs[t] = {};
}
function Ea(e, t) {
  return e.levelRefs[t];
}
var gt;
(function(e) {
  e[e.EachTrigger = 4] = "EachTrigger", e[e.EachApiCall = 2] = "EachApiCall", e[e.EachTarget = 1] = "EachTarget", e[e.Never = 0] = "Never";
})(gt || (gt = {}));
function ge(e) {
  for (let a = e; a; a = a.parentElement)
    if (_(a, [
      "button",
      "input",
      "select",
      "textarea",
      "optgroup",
      "option"
    ])) {
      if (a.hasAttribute("disabled"))
        return !0;
    } else if (_(a, "fieldset")) {
      var t;
      if (a.hasAttribute("disabled") && !(!((t = a.querySelector(":scope > legend")) === null || t === void 0) && t.contains(e)))
        return !0;
    } else if (a.tagName.includes("-") && a.constructor.formAssociated && a.hasAttribute("disabled"))
      return !0;
  return !1;
}
function pi(e) {
  const t = e.activeElement;
  return t != null && t.shadowRoot ? pi(t.shadowRoot) : ge(t) ? e.ownerDocument ? (
    /* istanbul ignore next */
    e.ownerDocument.body
  ) : e.body : t;
}
function Xi(e) {
  var t;
  return (t = pi(e)) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  );
}
function cP(e, t) {
  let a = e;
  do {
    if (t(a))
      return a;
    a = a.parentElement;
  } while (a && a !== e.ownerDocument.body);
}
function fe(e) {
  return oy(e) && Qm(e);
}
function dP(e) {
  return oy(e) && Wm(e);
}
function oy(e) {
  return e.nodeType === 1;
}
function pP(e) {
  const t = e.ownerDocument.getSelection();
  if (t != null && t.focusNode && fe(e)) {
    const o = sa(t.focusNode);
    if (o) {
      if (!t.isCollapsed) {
        var a;
        const r = ((a = o.firstChild) === null || a === void 0 ? void 0 : a.nodeType) === 3 ? o.firstChild : o;
        t.setBaseAndExtent(r, 0, r, 0);
      }
    } else
      t.setBaseAndExtent(e, 0, e, 0);
  }
}
const { getConfig: fP } = di;
function Ft(e, t) {
  return fP().eventWrapper(e);
}
function He(e) {
  const t = cP(e, ws), a = pi(e.ownerDocument);
  (t ?? e.ownerDocument.body) !== a && (Ft(t ? () => t.focus() : () => a == null ? void 0 : a.blur()), pP(t ?? e.ownerDocument.body));
}
function mP(e) {
  !ws(e) || !(pi(e.ownerDocument) === e) || Ft(() => e.blur());
}
const ze = {};
ze.click = (e, t, a) => {
  const o = t.closest("button,input,label,select,textarea"), r = o && _(o, "label") && o.control;
  if (r)
    return () => {
      ws(r) && He(r), a.dispatchEvent(r, uP(e));
    };
  if (_(t, "input", {
    type: "file"
  }))
    return () => {
      mP(t), t.dispatchEvent(new (pe(t)).Event("fileDialog")), He(t);
    };
};
const Ot = Symbol("Displayed value in UI"), be = Symbol("Displayed selection in UI"), bo = Symbol("Initial value to compare on blur");
function yP(e) {
  return typeof e == "object" && Ot in e;
}
function hP(e) {
  return !!e && typeof e == "object" && be in e;
}
function LP(e, t) {
  e[bo] === void 0 && (e[bo] = e.value), e[Ot] = t, e.value = Object.assign(new String(t), {
    [Ot]: !0
  });
}
function me(e) {
  return e[Ot] === void 0 ? e.value : String(e[Ot]);
}
function Cs(e) {
  e[Ot] = void 0;
}
function ry(e) {
  e[bo] = void 0;
}
function bP(e) {
  return e[bo];
}
function vP(e, t) {
  e[be] = t;
}
function Dt(e, { focusOffset: t, anchorOffset: a = t }, o = "replace") {
  const r = me(e).length, n = (d) => Math.max(0, Math.min(r, d)), i = o === "replace" || e[be] === void 0 ? n(a) : e[be].anchorOffset, s = n(t), l = Math.min(i, s), u = Math.max(i, s);
  if (e[be] = {
    anchorOffset: i,
    focusOffset: s
  }, e.selectionStart === l && e.selectionEnd === u)
    return;
  const c = Object.assign(new Number(l), {
    [be]: !0
  });
  try {
    e.setSelectionRange(c, u);
  } catch {
  }
}
function ua(e) {
  var t, a, o;
  const r = (o = e[be]) !== null && o !== void 0 ? o : {
    anchorOffset: (t = e.selectionStart) !== null && t !== void 0 ? t : 0,
    focusOffset: (a = e.selectionEnd) !== null && a !== void 0 ? a : 0
  };
  return {
    ...r,
    startOffset: Math.min(r.anchorOffset, r.focusOffset),
    endOffset: Math.max(r.anchorOffset, r.focusOffset)
  };
}
function TP(e) {
  return !!e[be];
}
function za(e) {
  e[be] = void 0;
}
const vo = globalThis.parseInt;
function AP(e) {
  const t = e.replace(/\D/g, "");
  if (t.length < 2)
    return e;
  const a = vo(t[0], 10), o = vo(t[1], 10);
  if (a >= 3 || a === 2 && o >= 4) {
    let r;
    return a >= 3 ? r = 1 : r = 2, Fc(t, r);
  }
  return e.length === 2 ? e : Fc(t, 2);
}
function Fc(e, t) {
  const a = e.slice(0, t), o = Math.min(vo(a, 10), 23), r = e.slice(t), n = vo(r, 10), i = Math.min(n, 59);
  return `${o.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`;
}
function ny(e, t) {
  const a = e.cloneNode();
  return a.value = t, a.value === t;
}
function iy(e, t, a, o) {
  if (Ga(e) && t + a >= 0 && t + a <= e.nodeValue.length)
    return {
      node: e,
      offset: t + a
    };
  const r = Oc(e, t, a);
  if (r) {
    if (Ga(r))
      return {
        node: r,
        offset: a > 0 ? Math.min(1, r.nodeValue.length) : Math.max(r.nodeValue.length - 1, 0)
      };
    if (_(r, "br")) {
      const n = Oc(r, void 0, a);
      return n ? Ga(n) ? {
        node: n,
        offset: a > 0 ? 0 : n.nodeValue.length
      } : a < 0 && _(n, "br") ? {
        node: r.parentNode,
        offset: wa(r)
      } : {
        node: n.parentNode,
        offset: wa(n) + (a > 0 ? 0 : 1)
      } : a < 0 && o === "deleteContentBackward" ? {
        node: r.parentNode,
        offset: wa(r)
      } : void 0;
    } else
      return {
        node: r.parentNode,
        offset: wa(r) + (a > 0 ? 1 : 0)
      };
  }
}
function Oc(e, t, a) {
  const o = Number(t) + (a < 0 ? -1 : 0);
  return t !== void 0 && _s(e) && o >= 0 && o < e.children.length && (e = e.children[o]), SP(e, a === 1 ? "next" : "previous", gP);
}
function gP(e) {
  if (Ga(e))
    return !0;
  if (_s(e)) {
    if (_(e, [
      "input",
      "textarea"
    ]))
      return e.type !== "hidden";
    if (_(e, "br"))
      return !0;
  }
  return !1;
}
function wa(e) {
  let t = 0;
  for (; e.previousSibling; )
    t++, e = e.previousSibling;
  return t;
}
function _s(e) {
  return e.nodeType === 1;
}
function Ga(e) {
  return e.nodeType === 3;
}
function SP(e, t, a) {
  for (; ; ) {
    var o;
    const r = e[`${t}Sibling`];
    if (r) {
      if (e = YP(r, t === "next" ? "first" : "last"), a(e))
        return e;
    } else if (e.parentNode && (!_s(e.parentNode) || !ot(e.parentNode) && e.parentNode !== ((o = e.ownerDocument) === null || o === void 0 ? void 0 : o.body)))
      e = e.parentNode;
    else
      break;
  }
}
function YP(e, t) {
  for (; e.hasChildNodes(); )
    e = e[`${t}Child`];
  return e;
}
const ca = Symbol("Track programmatic changes for React workaround");
function RP(e) {
  return Object.getOwnPropertyNames(e).some((t) => t.startsWith("__react")) && pe(e).REACT_VERSION === 17;
}
function EP(e) {
  RP(e) && (e[ca] = {
    previousValue: String(e.value),
    tracked: []
  });
}
function wP(e, t) {
  var a, o;
  (o = e[ca]) === null || o === void 0 || (a = o.tracked) === null || a === void 0 || a.push(t), e[ca] || (Cs(e), Dt(e, {
    focusOffset: t.length
  }));
}
function CP(e, t) {
  var a;
  const o = e[ca];
  if (e[ca] = void 0, !(!(o == null || (a = o.tracked) === null || a === void 0) && a.length))
    return;
  const r = o.tracked.length === 2 && o.tracked[0] === o.previousValue && o.tracked[1] === e.value;
  r || Cs(e), TP(e) && Dt(e, {
    focusOffset: r ? t : e.value.length
  });
}
function ly(e) {
  const t = _P(e);
  if (t && fe(t))
    return {
      type: "input",
      selection: ua(t)
    };
  const a = t == null ? void 0 : t.ownerDocument.getSelection();
  return {
    type: sa(e) && (a == null ? void 0 : a.anchorNode) && sa(a.anchorNode) ? "contenteditable" : "default",
    selection: a
  };
}
function _P(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function PP(e) {
  const t = ly(e);
  if (t.type === "input")
    return t.selection;
  if (t.type === "contenteditable") {
    var a;
    return (a = t.selection) === null || a === void 0 ? void 0 : a.getRangeAt(0);
  }
}
function rt({ focusNode: e, focusOffset: t, anchorNode: a = e, anchorOffset: o = t }) {
  var r, n;
  if (ly(e).type === "input")
    return Dt(e, {
      anchorOffset: o,
      focusOffset: t
    });
  (n = a.ownerDocument) === null || n === void 0 || (r = n.getSelection()) === null || r === void 0 || r.setBaseAndExtent(a, o, e, t);
}
function sy(e) {
  return _(e, "input") && [
    "date",
    "time"
  ].includes(e.type);
}
function Mt(e, t, a, o = "insertText") {
  const r = PP(t);
  r && (!sy(t) && !e.dispatchUIEvent(t, "beforeinput", {
    inputType: o,
    data: a
  }) || ("startContainer" in r ? IP(e, t, r, a, o) : FP(e, t, r, a, o)));
}
function IP(e, t, a, o, r) {
  let n = !1;
  if (!a.collapsed)
    n = !0, a.deleteContents();
  else if ([
    "deleteContentBackward",
    "deleteContentForward"
  ].includes(r)) {
    const i = iy(a.startContainer, a.startOffset, r === "deleteContentBackward" ? -1 : 1, r);
    if (i) {
      n = !0;
      const s = a.cloneRange();
      s.comparePoint(i.node, i.offset) < 0 ? s.setStart(i.node, i.offset) : s.setEnd(i.node, i.offset), s.deleteContents();
    }
  }
  if (o)
    if (a.endContainer.nodeType === 3) {
      const i = a.endOffset;
      a.endContainer.insertData(i, o), a.setStart(a.endContainer, i + o.length), a.setEnd(a.endContainer, i + o.length);
    } else {
      const i = t.ownerDocument.createTextNode(o);
      a.insertNode(i), a.setStart(i, o.length), a.setEnd(i, o.length);
    }
  (n || o) && e.dispatchUIEvent(t, "input", {
    inputType: r
  });
}
function FP(e, t, a, o, r) {
  let n = o;
  if (nP(t)) {
    const u = rP(t);
    if (u !== void 0 && o.length > 0) {
      const c = u - t.value.length;
      if (c > 0)
        n = o.substring(0, c);
      else
        return;
    }
  }
  const { newValue: i, newOffset: s, oldValue: l } = OP(n, t, a, r);
  i === l && s === a.startOffset && s === a.endOffset || _(t, "input", {
    type: "number"
  }) && !MP(i) || (LP(t, i), rt({
    focusNode: t,
    anchorOffset: s,
    focusOffset: s
  }), sy(t) ? ny(t, i) && (Mc(e, t, s, {}), e.dispatchUIEvent(t, "change"), ry(t)) : Mc(e, t, s, {
    data: o,
    inputType: r
  }));
}
function OP(e, t, { startOffset: a, endOffset: o }, r) {
  const n = me(t), i = Math.max(0, a === o && r === "deleteContentBackward" ? a - 1 : a), s = n.substring(0, i), l = Math.min(n.length, a === o && r === "deleteContentForward" ? a + 1 : o), u = n.substring(l, n.length);
  let c = `${s}${e}${u}`, d = i + e.length;
  if (_(t, "input", {
    type: "time"
  })) {
    const p = AP(c);
    p !== "" && ny(t, p) && (c = p, d = p.length);
  }
  return {
    oldValue: n,
    newValue: c,
    newOffset: d
  };
}
function Mc(e, t, a, o) {
  e.dispatchUIEvent(t, "input", o), CP(t, a);
}
function MP(e) {
  var t, a;
  const o = e.split("e", 2);
  return !(/[^\d.\-e]/.test(e) || Number((t = e.match(/-/g)) === null || t === void 0 ? void 0 : t.length) > 2 || Number((a = e.match(/\./g)) === null || a === void 0 ? void 0 : a.length) > 1 || o[1] && !/^-?\d*$/.test(o[1]));
}
ze.cut = (e, t, a) => () => {
  It(t) && Mt(a, t, "", "deleteByCut");
};
function xP(e) {
  return e ? ot(e) ? e.textContent : me(e) : null;
}
function kP(e) {
  const t = pe(e);
  for (let a = e; a != null && a.ownerDocument; a = a.parentElement) {
    const { display: o, visibility: r } = t.getComputedStyle(a);
    if (o === "none" || r === "hidden")
      return !1;
  }
  return !0;
}
function NP(e, t) {
  const a = e.ownerDocument, o = a.querySelectorAll(Zm), r = Array.from(o).filter((l) => l === e || !(Number(l.getAttribute("tabindex")) < 0 || ge(l)));
  Number(e.getAttribute("tabindex")) >= 0 && r.sort((l, u) => {
    const c = Number(l.getAttribute("tabindex")), d = Number(u.getAttribute("tabindex"));
    return c === d ? 0 : c === 0 ? 1 : d === 0 ? -1 : c - d;
  });
  const n = {};
  let i = [
    a.body
  ];
  const s = _(e, "input", {
    type: "radio"
  }) ? e.name : void 0;
  r.forEach((l) => {
    const u = l;
    if (_(u, "input", {
      type: "radio"
    }) && u.name) {
      if (u === e) {
        i.push(u);
        return;
      } else if (u.name === s)
        return;
      if (u.checked) {
        i = i.filter((c) => !_(c, "input", {
          type: "radio",
          name: u.name
        })), i.push(u), n[u.name] = u;
        return;
      }
      if (typeof n[u.name] < "u")
        return;
    }
    i.push(u);
  });
  for (let l = i.findIndex((u) => u === e); ; )
    if (l += t ? -1 : 1, l === i.length ? l = 0 : l === -1 && (l = i.length - 1), i[l] === e || i[l] === a.body || kP(i[l]))
      return i[l];
}
function xc(e, t) {
  if (fe(e)) {
    const a = ua(e);
    rt({
      focusNode: e,
      focusOffset: a.startOffset === a.endOffset ? a.focusOffset + t : t < 0 ? a.startOffset : a.endOffset
    });
  } else {
    const a = e.ownerDocument.getSelection();
    if (!(a != null && a.focusNode))
      return;
    if (a.isCollapsed) {
      const o = iy(a.focusNode, a.focusOffset, t);
      o && rt({
        focusNode: o.node,
        focusOffset: o.offset
      });
    } else
      a[t < 0 ? "collapseToStart" : "collapseToEnd"]();
  }
}
function uy(e) {
  if (fe(e))
    return rt({
      focusNode: e,
      anchorOffset: 0,
      focusOffset: me(e).length
    });
  var t;
  const a = (t = sa(e)) !== null && t !== void 0 ? t : e.ownerDocument.body;
  rt({
    focusNode: a,
    anchorOffset: 0,
    focusOffset: a.childNodes.length
  });
}
function $P(e) {
  if (fe(e))
    return ua(e).startOffset === 0 && ua(e).endOffset === me(e).length;
  var t;
  const a = (t = sa(e)) !== null && t !== void 0 ? t : e.ownerDocument.body, o = e.ownerDocument.getSelection();
  return (o == null ? void 0 : o.anchorNode) === a && o.focusNode === a && o.anchorOffset === 0 && o.focusOffset === a.childNodes.length;
}
function Ht(e, t, a) {
  var o;
  if (fe(e))
    return rt({
      focusNode: e,
      anchorOffset: t,
      focusOffset: a
    });
  if (ot(e) && ((o = e.firstChild) === null || o === void 0 ? void 0 : o.nodeType) === 3)
    return rt({
      focusNode: e.firstChild,
      anchorOffset: t,
      focusOffset: a
    });
  throw new Error("Not implemented. The result of this interaction is unreliable.");
}
function Ca(e, t, a) {
  const o = pe(t), r = Array.from(t.ownerDocument.querySelectorAll(t.name ? `input[type="radio"][name="${o.CSS.escape(t.name)}"]` : 'input[type="radio"][name=""], input[type="radio"]:not([name])'));
  for (let n = r.findIndex((i) => i === t) + a; ; n += a) {
    if (r[n] || (n = a > 0 ? 0 : r.length - 1), r[n] === t)
      return;
    ge(r[n]) || (He(r[n]), e.dispatchUIEvent(r[n], "click"));
  }
}
ze.keydown = (e, t, a) => {
  var o, r;
  return (r = (o = kc[e.key]) === null || o === void 0 ? void 0 : o.call(kc, e, t, a)) !== null && r !== void 0 ? r : qP(e, t, a);
};
const kc = {
  ArrowDown: (e, t, a) => {
    if (_(t, "input", {
      type: "radio"
    }))
      return () => Ca(a, t, -1);
  },
  ArrowLeft: (e, t, a) => _(t, "input", {
    type: "radio"
  }) ? () => Ca(a, t, -1) : () => xc(t, -1),
  ArrowRight: (e, t, a) => _(t, "input", {
    type: "radio"
  }) ? () => Ca(a, t, 1) : () => xc(t, 1),
  ArrowUp: (e, t, a) => {
    if (_(t, "input", {
      type: "radio"
    }))
      return () => Ca(a, t, 1);
  },
  Backspace: (e, t, a) => {
    if (It(t))
      return () => {
        Mt(a, t, "", "deleteContentBackward");
      };
  },
  Delete: (e, t, a) => {
    if (It(t))
      return () => {
        Mt(a, t, "", "deleteContentForward");
      };
  },
  End: (e, t) => {
    if (_(t, [
      "input",
      "textarea"
    ]) || ot(t))
      return () => {
        var a, o;
        const r = (o = (a = xP(t)) === null || a === void 0 ? void 0 : a.length) !== null && o !== void 0 ? o : (
          /* istanbul ignore next */
          0
        );
        Ht(t, r, r);
      };
  },
  Home: (e, t) => {
    if (_(t, [
      "input",
      "textarea"
    ]) || ot(t))
      return () => {
        Ht(t, 0, 0);
      };
  },
  PageDown: (e, t) => {
    if (_(t, [
      "input"
    ]))
      return () => {
        const a = me(t).length;
        Ht(t, a, a);
      };
  },
  PageUp: (e, t) => {
    if (_(t, [
      "input"
    ]))
      return () => {
        Ht(t, 0, 0);
      };
  },
  Tab: (e, t, a) => () => {
    const o = NP(t, a.system.keyboard.modifiers.Shift);
    He(o), fe(o) && Dt(o, {
      anchorOffset: 0,
      focusOffset: o.value.length
    });
  }
}, qP = (e, t, a) => {
  if (e.code === "KeyA" && a.system.keyboard.modifiers.Control)
    return () => uy(t);
};
ze.keypress = (e, t, a) => {
  if (e.key === "Enter") {
    if (_(t, "button") || _(t, "input") && DP.includes(t.type) || _(t, "a") && t.href)
      return () => {
        a.dispatchUIEvent(t, "click");
      };
    if (_(t, "input")) {
      const o = t.form, r = o == null ? void 0 : o.querySelector('input[type="submit"], button:not([type]), button[type="submit"]');
      return r ? () => a.dispatchUIEvent(r, "click") : o && BP.includes(t.type) && o.querySelectorAll("input").length === 1 ? () => a.dispatchUIEvent(o, "submit") : void 0;
    }
  }
  if (It(t)) {
    const o = e.key === "Enter" ? ot(t) && !a.system.keyboard.modifiers.Shift ? "insertParagraph" : "insertLineBreak" : "insertText", r = e.key === "Enter" ? `
` : e.key;
    return () => Mt(a, t, r, o);
  }
};
const DP = [
  "button",
  "color",
  "file",
  "image",
  "reset",
  "submit"
], BP = [
  "email",
  "month",
  "password",
  "search",
  "tel",
  "text",
  "url",
  "week"
];
ze.keyup = (e, t, a) => {
  var o;
  return (o = Nc[e.key]) === null || o === void 0 ? void 0 : o.call(Nc, e, t, a);
};
const Nc = {
  " ": (e, t, a) => {
    if (Wm(t))
      return () => a.dispatchUIEvent(t, "click");
  }
};
ze.paste = (e, t, a) => {
  if (It(t))
    return () => {
      var o;
      const r = (o = e.clipboardData) === null || o === void 0 ? void 0 : o.getData("text");
      r && Mt(a, t, r, "insertFromPaste");
    };
};
var da = {};
Object.defineProperty(da, "__esModule", {
  value: !0
});
var cy = da.eventMap = da.eventAliasMap = void 0;
const UP = {
  // Clipboard Events
  copy: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  cut: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  paste: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Composition Events
  compositionEnd: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionStart: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionUpdate: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Keyboard Events
  keyDown: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyPress: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyUp: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  // Focus Events
  focus: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  blur: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  focusIn: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  focusOut: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // Form Events
  change: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  input: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  invalid: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !0
    }
  },
  submit: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  reset: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  // Mouse Events
  click: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      button: 0,
      composed: !0
    }
  },
  contextMenu: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dblClick: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drag: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragEnd: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragEnter: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragExit: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragLeave: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragOver: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragStart: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drop: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseDown: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseEnter: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseLeave: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseMove: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOut: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOver: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseUp: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Selection Events
  select: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Touch Events
  touchCancel: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  touchEnd: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchMove: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchStart: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // UI Events
  resize: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  scroll: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Wheel Events
  wheel: {
    EventType: "WheelEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Media Events
  abort: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlay: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlayThrough: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  durationChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  emptied: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  encrypted: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  ended: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedData: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedMetadata: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadStart: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pause: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  play: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  playing: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  progress: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  rateChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeked: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeking: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  stalled: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  suspend: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  timeUpdate: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  volumeChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  waiting: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Events
  load: {
    // TODO: load events can be UIEvent or Event depending on what generated them
    // This is where this abstraction breaks down.
    // But the common targets are <img />, <script /> and window.
    // Neither of these targets receive a UIEvent
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  error: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Animation Events
  animationStart: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationEnd: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationIteration: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Transition Events
  transitionCancel: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionEnd: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  transitionRun: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionStart: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // pointer events
  pointerOver: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerEnter: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pointerDown: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerMove: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerUp: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerCancel: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  pointerOut: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerLeave: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  gotPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  lostPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // history events
  popState: {
    EventType: "PopStateEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // window events
  offline: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  online: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  }
};
cy = da.eventMap = UP;
const jP = {
  doubleClick: "dblClick"
};
da.eventAliasMap = jP;
const Ps = {
  ...cy,
  click: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  auxclick: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  contextmenu: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  beforeInput: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  }
}, dy = Object.fromEntries(Object.keys(Ps).map((e) => [
  e.toLowerCase(),
  e
]));
function py(e) {
  const t = dy[e];
  return t && Ps[t].EventType;
}
const VP = [
  "MouseEvent",
  "PointerEvent"
];
function WP(e) {
  return VP.includes(py(e));
}
function HP(e) {
  return py(e) === "KeyboardEvent";
}
const zP = {
  ClipboardEvent: [
    KP
  ],
  InputEvent: [
    _a,
    JP
  ],
  MouseEvent: [
    _a,
    Qi,
    $c
  ],
  PointerEvent: [
    _a,
    Qi,
    $c,
    QP
  ],
  KeyboardEvent: [
    _a,
    Qi,
    XP
  ]
};
function fy(e, t, a) {
  var o;
  const r = pe(t), { EventType: n, defaultInit: i } = Ps[dy[e]], s = new (GP(r))[n](e, i);
  return (o = zP[n]) === null || o === void 0 || o.forEach((l) => l(s, a ?? {})), s;
}
function GP(e) {
  var t;
  const a = (t = e.Event) !== null && t !== void 0 ? t : class {
  };
  var o;
  const r = (o = e.AnimationEvent) !== null && o !== void 0 ? o : class extends a {
  };
  var n;
  const i = (n = e.ClipboardEvent) !== null && n !== void 0 ? n : class extends a {
  };
  var s;
  const l = (s = e.PopStateEvent) !== null && s !== void 0 ? s : class extends a {
  };
  var u;
  const c = (u = e.ProgressEvent) !== null && u !== void 0 ? u : class extends a {
  };
  var d;
  const p = (d = e.TransitionEvent) !== null && d !== void 0 ? d : class extends a {
  };
  var y;
  const h = (y = e.UIEvent) !== null && y !== void 0 ? y : class extends a {
  };
  var b;
  const R = (b = e.CompositionEvent) !== null && b !== void 0 ? b : class extends h {
  };
  var f;
  const A = (f = e.FocusEvent) !== null && f !== void 0 ? f : class extends h {
  };
  var Y;
  const S = (Y = e.InputEvent) !== null && Y !== void 0 ? Y : class extends h {
  };
  var E;
  const m = (E = e.KeyboardEvent) !== null && E !== void 0 ? E : class extends h {
  };
  var L;
  const T = (L = e.MouseEvent) !== null && L !== void 0 ? L : class extends h {
  };
  var O;
  const D = (O = e.DragEvent) !== null && O !== void 0 ? O : class extends T {
  };
  var q;
  const B = (q = e.PointerEvent) !== null && q !== void 0 ? q : class extends T {
  };
  var g;
  const C = (g = e.TouchEvent) !== null && g !== void 0 ? g : class extends h {
  };
  return {
    Event: a,
    AnimationEvent: r,
    ClipboardEvent: i,
    PopStateEvent: l,
    ProgressEvent: c,
    TransitionEvent: p,
    UIEvent: h,
    CompositionEvent: R,
    FocusEvent: A,
    InputEvent: S,
    KeyboardEvent: m,
    MouseEvent: T,
    DragEvent: D,
    PointerEvent: B,
    TouchEvent: C
  };
}
function ct(e, t) {
  for (const [a, o] of Object.entries(t))
    Object.defineProperty(e, a, {
      get: () => o ?? null
    });
}
function V(e) {
  return Number(e ?? 0);
}
function KP(e, { clipboardData: t }) {
  ct(e, {
    clipboardData: t
  });
}
function JP(e, { data: t, inputType: a, isComposing: o }) {
  ct(e, {
    data: t,
    isComposing: !!o,
    inputType: String(a)
  });
}
function _a(e, { view: t, detail: a }) {
  ct(e, {
    view: t,
    detail: V(a ?? 0)
  });
}
function Qi(e, { altKey: t, ctrlKey: a, metaKey: o, shiftKey: r, modifierAltGraph: n, modifierCapsLock: i, modifierFn: s, modifierFnLock: l, modifierNumLock: u, modifierScrollLock: c, modifierSymbol: d, modifierSymbolLock: p }) {
  ct(e, {
    altKey: !!t,
    ctrlKey: !!a,
    metaKey: !!o,
    shiftKey: !!r,
    getModifierState(y) {
      return !!{
        Alt: t,
        AltGraph: n,
        CapsLock: i,
        Control: a,
        Fn: s,
        FnLock: l,
        Meta: o,
        NumLock: u,
        ScrollLock: c,
        Shift: r,
        Symbol: d,
        SymbolLock: p
      }[y];
    }
  });
}
function XP(e, { key: t, code: a, location: o, repeat: r, isComposing: n, charCode: i }) {
  ct(e, {
    key: String(t),
    code: String(a),
    location: V(o),
    repeat: !!r,
    isComposing: !!n,
    charCode: i
  });
}
function $c(e, { x: t, y: a, screenX: o, screenY: r, clientX: n = t, clientY: i = a, button: s, buttons: l, relatedTarget: u }) {
  ct(e, {
    screenX: V(o),
    screenY: V(r),
    clientX: V(n),
    x: V(n),
    clientY: V(i),
    y: V(i),
    button: V(s),
    buttons: V(l),
    relatedTarget: u
  });
}
function QP(e, { pointerId: t, width: a, height: o, pressure: r, tangentialPressure: n, tiltX: i, tiltY: s, twist: l, pointerType: u, isPrimary: c }) {
  ct(e, {
    pointerId: V(t),
    width: V(a),
    height: V(o),
    pressure: V(r),
    tangentialPressure: V(n),
    tiltX: V(i),
    tiltY: V(s),
    twist: V(l),
    pointerType: String(u),
    isPrimary: !!c
  });
}
function ZP(e, t, a, o = !1) {
  (WP(t) || HP(t)) && (a = {
    ...a,
    ...this.system.getUIEventModifiers()
  });
  const r = fy(t, e, a);
  return my.call(this, e, r, o);
}
function my(e, t, a = !1) {
  var o;
  const r = t.type, n = a ? () => {
  } : (o = ze[r]) === null || o === void 0 ? void 0 : o.call(ze, t, e, this);
  if (n) {
    t.preventDefault();
    let i = !1;
    return Object.defineProperty(t, "defaultPrevented", {
      get: () => i
    }), Object.defineProperty(t, "preventDefault", {
      value: () => {
        i = t.cancelable;
      }
    }), Ft(() => e.dispatchEvent(t)), i || n(), !i;
  }
  return Ft(() => e.dispatchEvent(t));
}
function e3(e, t, a) {
  const o = fy(t, e, a);
  Ft(() => e.dispatchEvent(o));
}
const Zi = Symbol("Interceptor for programmatical calls");
function Tt(e, t, a) {
  const o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = Object.getOwnPropertyDescriptor(e, t), n = o != null && o.set ? "set" : "value";
  if (typeof (o == null ? void 0 : o[n]) != "function" || o[n][Zi])
    throw new Error(`Element ${e.tagName} does not implement "${String(t)}".`);
  function i(...s) {
    const { applyNative: l = !1, realArgs: u, then: c } = a.call(this, ...s), d = (!l && r || o)[n];
    n === "set" ? d.call(this, u) : d.call(this, ...u), c == null || c();
  }
  i[Zi] = Zi, Object.defineProperty(e, t, {
    ...r ?? o,
    [n]: i
  });
}
function t3(e) {
  Tt(e, "value", function(a) {
    const o = yP(a);
    return o && EP(this), {
      applyNative: !!o,
      realArgs: a3(this, a),
      then: o ? void 0 : () => wP(this, String(a))
    };
  });
}
function a3(e, t) {
  return _(e, "input", {
    type: "number"
  }) && String(t) !== "" && !Number.isNaN(Number(t)) ? String(Number(t)) : String(t);
}
function o3(e) {
  Tt(e, "setSelectionRange", function(a, ...o) {
    const r = hP(a);
    return {
      applyNative: !!r,
      realArgs: [
        Number(a),
        ...o
      ],
      then: () => r ? void 0 : za(e)
    };
  }), Tt(e, "selectionStart", function(a) {
    return {
      realArgs: a,
      then: () => za(e)
    };
  }), Tt(e, "selectionEnd", function(a) {
    return {
      realArgs: a,
      then: () => za(e)
    };
  }), Tt(e, "select", function() {
    return {
      realArgs: [],
      then: () => vP(e, {
        anchorOffset: 0,
        focusOffset: me(e).length
      })
    };
  });
}
function r3(e) {
  Tt(e, "setRangeText", function(...a) {
    return {
      realArgs: a,
      then: () => {
        Cs(e), za(e);
      }
    };
  });
}
const St = Symbol("Node prepared with document state workarounds");
function yy(e) {
  e[St] || (e.addEventListener("focus", (t) => {
    const a = t.target;
    qc(a);
  }, {
    capture: !0,
    passive: !0
  }), e.activeElement && qc(e.activeElement), e.addEventListener("blur", (t) => {
    const a = t.target, o = bP(a);
    o !== void 0 && (a.value !== o && e3(a, "change"), ry(a));
  }, {
    capture: !0,
    passive: !0
  }), e[St] = St);
}
function qc(e) {
  e[St] || (_(e, [
    "input",
    "textarea"
  ]) && (t3(e), o3(e), r3(e)), e[St] = St);
}
function n3(e) {
  return i3(e) ? e : e.ownerDocument;
}
function i3(e) {
  return e.nodeType === 9;
}
function xt(e) {
  const t = e.delay;
  if (typeof t == "number")
    return Promise.all([
      new Promise((a) => globalThis.setTimeout(() => a(), t)),
      e.advanceTimers(t)
    ]);
}
function ht(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
var ee;
(function(e) {
  e[e.STANDARD = 0] = "STANDARD", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.NUMPAD = 3] = "NUMPAD";
})(ee || (ee = {}));
const l3 = [
  "Alt",
  "AltGraph",
  "Control",
  "Fn",
  "Meta",
  "Shift",
  "Symbol"
];
function Dc(e) {
  return l3.includes(e);
}
const s3 = [
  "CapsLock",
  "FnLock",
  "NumLock",
  "ScrollLock",
  "SymbolLock"
];
function Bc(e) {
  return s3.includes(e);
}
class u3 {
  isKeyPressed(t) {
    return !!this.pressed[String(t.code)];
  }
  getPressedKeys() {
    return Object.values(this.pressed).map((t) => t.keyDef);
  }
  /** Press a key */
  async keydown(t, a) {
    var o, r, n;
    const i = String(a.key), s = String(a.code), l = Xi(t.config.document);
    this.setKeydownTarget(l);
    var u;
    (u = (o = this.pressed)[r = s]) !== null && u !== void 0 || (o[r] = {
      keyDef: a,
      unpreventedDefault: !1
    }), Dc(i) && (this.modifiers[i] = !0);
    const c = t.dispatchUIEvent(l, "keydown", {
      key: i,
      code: s
    });
    Bc(i) && !this.modifiers[i] && (this.modifiers[i] = !0, this.modifierLockStart[i] = !0), (n = this.pressed[s]).unpreventedDefault || (n.unpreventedDefault = c), c && this.hasKeyPress(i) && t.dispatchUIEvent(Xi(t.config.document), "keypress", {
      key: i,
      code: s,
      charCode: a.key === "Enter" ? 13 : String(a.key).charCodeAt(0)
    });
  }
  /** Release a key */
  async keyup(t, a) {
    const o = String(a.key), r = String(a.code), n = this.pressed[r].unpreventedDefault;
    delete this.pressed[r], Dc(o) && !Object.values(this.pressed).find((i) => i.keyDef.key === o) && (this.modifiers[o] = !1), t.dispatchUIEvent(Xi(t.config.document), "keyup", {
      key: o,
      code: r
    }, !n), Bc(o) && this.modifiers[o] && (this.modifierLockStart[o] ? this.modifierLockStart[o] = !1 : this.modifiers[o] = !1);
  }
  setKeydownTarget(t) {
    t !== this.lastKeydownTarget && (this.carryChar = ""), this.lastKeydownTarget = t;
  }
  hasKeyPress(t) {
    return (t.length === 1 || t === "Enter") && !this.modifiers.Control && !this.modifiers.Alt;
  }
  constructor(t) {
    ht(this, "system", void 0), ht(this, "modifiers", {
      Alt: !1,
      AltGraph: !1,
      CapsLock: !1,
      Control: !1,
      Fn: !1,
      FnLock: !1,
      Meta: !1,
      NumLock: !1,
      ScrollLock: !1,
      Shift: !1,
      Symbol: !1,
      SymbolLock: !1
    }), ht(this, "pressed", {}), ht(this, "carryChar", ""), ht(this, "lastKeydownTarget", void 0), ht(this, "modifierLockStart", {}), this.system = t;
  }
}
const c3 = [
  // alphanumeric keys
  ..."0123456789".split("").map((e) => ({
    code: `Digit${e}`,
    key: e
  })),
  ...")!@#$%^&*(".split("").map((e, t) => ({
    code: `Digit${t}`,
    key: e,
    shiftKey: !0
  })),
  ..."abcdefghijklmnopqrstuvwxyz".split("").map((e) => ({
    code: `Key${e.toUpperCase()}`,
    key: e
  })),
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((e) => ({
    code: `Key${e}`,
    key: e,
    shiftKey: !0
  })),
  // alphanumeric block - functional
  {
    code: "Space",
    key: " "
  },
  {
    code: "AltLeft",
    key: "Alt",
    location: ee.LEFT
  },
  {
    code: "AltRight",
    key: "Alt",
    location: ee.RIGHT
  },
  {
    code: "ShiftLeft",
    key: "Shift",
    location: ee.LEFT
  },
  {
    code: "ShiftRight",
    key: "Shift",
    location: ee.RIGHT
  },
  {
    code: "ControlLeft",
    key: "Control",
    location: ee.LEFT
  },
  {
    code: "ControlRight",
    key: "Control",
    location: ee.RIGHT
  },
  {
    code: "MetaLeft",
    key: "Meta",
    location: ee.LEFT
  },
  {
    code: "MetaRight",
    key: "Meta",
    location: ee.RIGHT
  },
  {
    code: "OSLeft",
    key: "OS",
    location: ee.LEFT
  },
  {
    code: "OSRight",
    key: "OS",
    location: ee.RIGHT
  },
  {
    code: "Tab",
    key: "Tab"
  },
  {
    code: "CapsLock",
    key: "CapsLock"
  },
  {
    code: "Backspace",
    key: "Backspace"
  },
  {
    code: "Enter",
    key: "Enter"
  },
  // function
  {
    code: "Escape",
    key: "Escape"
  },
  // arrows
  {
    code: "ArrowUp",
    key: "ArrowUp"
  },
  {
    code: "ArrowDown",
    key: "ArrowDown"
  },
  {
    code: "ArrowLeft",
    key: "ArrowLeft"
  },
  {
    code: "ArrowRight",
    key: "ArrowRight"
  },
  // control pad
  {
    code: "Home",
    key: "Home"
  },
  {
    code: "End",
    key: "End"
  },
  {
    code: "Delete",
    key: "Delete"
  },
  {
    code: "PageUp",
    key: "PageUp"
  },
  {
    code: "PageDown",
    key: "PageDown"
  },
  // Special keys that are not part of a default US-layout but included for specific behavior
  {
    code: "Fn",
    key: "Fn"
  },
  {
    code: "Symbol",
    key: "Symbol"
  },
  {
    code: "AltRight",
    key: "AltGraph"
  }
], d3 = [
  {
    name: "MouseLeft",
    pointerType: "mouse",
    button: "primary"
  },
  {
    name: "MouseRight",
    pointerType: "mouse",
    button: "secondary"
  },
  {
    name: "MouseMiddle",
    pointerType: "mouse",
    button: "auxiliary"
  },
  {
    name: "TouchA",
    pointerType: "touch"
  },
  {
    name: "TouchB",
    pointerType: "touch"
  },
  {
    name: "TouchC",
    pointerType: "touch"
  }
];
function p3(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
class hy {
  getButtons() {
    let t = 0;
    for (const a of Object.keys(this.pressed))
      t |= 2 ** Number(a);
    return t;
  }
  down(t) {
    const a = Vl(t.button);
    if (a in this.pressed) {
      this.pressed[a].push(t);
      return;
    }
    return this.pressed[a] = [
      t
    ], a;
  }
  up(t) {
    const a = Vl(t.button);
    if (a in this.pressed && (this.pressed[a] = this.pressed[a].filter((o) => o.name !== t.name), this.pressed[a].length === 0))
      return delete this.pressed[a], a;
  }
  constructor() {
    p3(this, "pressed", {});
  }
}
const Uc = {
  primary: 0,
  secondary: 1,
  auxiliary: 2,
  back: 3,
  X1: 3,
  forward: 4,
  X2: 4
};
function Vl(e = 0) {
  return e in Uc ? Uc[e] : Number(e);
}
const jc = {
  1: 2,
  2: 1
};
function Vc(e) {
  return e = Vl(e), e in jc ? jc[e] : e;
}
function f3(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
class m3 {
  get countPressed() {
    return this.pressedKeys.size;
  }
  isPressed(t) {
    return this.pressedKeys.has(t.name);
  }
  addPressed(t) {
    return this.pressedKeys.add(t.name);
  }
  removePressed(t) {
    return this.pressedKeys.delete(t.name);
  }
  constructor() {
    f3(this, "pressedKeys", /* @__PURE__ */ new Set());
  }
}
function Zt(e, t) {
  const a = [];
  for (let n = e; n; n = n.parentElement)
    a.push(n);
  const o = [];
  for (let n = t; n; n = n.parentElement)
    o.push(n);
  let r = 0;
  for (; !(r >= a.length || r >= o.length || a[a.length - 1 - r] !== o[o.length - 1 - r]); r++)
    ;
  return [
    a.slice(0, a.length - r),
    o.slice(0, o.length - r),
    o.slice(o.length - r)
  ];
}
function Wl({ target: e, node: t, offset: a }) {
  return fe(e) ? {
    node: e,
    offset: a ?? me(e).length
  } : t ? {
    node: t,
    offset: a ?? (t.nodeType === 3 ? t.nodeValue.length : t.childNodes.length)
  } : Ly(e, a);
}
function Ly(e, t, a = !0) {
  let o = t === void 0 ? e.childNodes.length - 1 : 0;
  const r = t === void 0 ? -1 : 1;
  for (; t === void 0 ? o >= (a ? Math.max(e.childNodes.length - 1, 0) : 0) : o <= e.childNodes.length; ) {
    if (t && o === e.childNodes.length)
      throw new Error("The given offset is out of bounds.");
    const n = e.childNodes.item(o), i = String(n.textContent);
    if (i.length)
      if (t !== void 0 && i.length < t)
        t -= i.length;
      else {
        if (n.nodeType === 1)
          return Ly(n, t, !1);
        if (n.nodeType === 3)
          return {
            node: n,
            offset: t ?? n.nodeValue.length
          };
      }
    o += r;
  }
  return {
    node: e,
    offset: e.childNodes.length
  };
}
function y3({ document: e, target: t, clickCount: a, node: o, offset: r }) {
  if (dP(t))
    return;
  const n = fe(t), i = String(n ? me(t) : t.textContent), [s, l] = o ? (
    // which elements might be considered in the same line of text.
    // TODO: support expanding initial range on multiple clicks if node is given
    [
      r,
      r
    ]
  ) : h3(i, r, a);
  if (n)
    return Dt(t, {
      anchorOffset: s ?? i.length,
      focusOffset: l ?? i.length
    }), {
      node: t,
      start: s ?? 0,
      end: l ?? i.length
    };
  {
    const { node: u, offset: c } = Wl({
      target: t,
      node: o,
      offset: s
    }), { node: d, offset: p } = Wl({
      target: t,
      node: o,
      offset: l
    }), y = t.ownerDocument.createRange();
    try {
      y.setStart(u, c), y.setEnd(d, p);
    } catch {
      throw new Error("The given offset is out of bounds.");
    }
    const h = e.getSelection();
    return h == null || h.removeAllRanges(), h == null || h.addRange(y.cloneRange()), y;
  }
}
function h3(e, t, a) {
  if (a % 3 === 1 || e.length === 0)
    return [
      t,
      t
    ];
  const o = t ?? e.length;
  return a % 3 === 2 ? [
    o - e.substr(0, t).match(/(\w+|\s+|\W)?$/)[0].length,
    t === void 0 ? t : t + e.substr(t).match(/^(\w+|\s+|\W)?/)[0].length
  ] : [
    o - e.substr(0, t).match(/[^\r\n]*$/)[0].length,
    t === void 0 ? t : t + e.substr(t).match(/^[^\r\n]*/)[0].length
  ];
}
function L3(e, { document: t, target: a, node: o, offset: r }) {
  const n = Wl({
    target: a,
    node: o,
    offset: r
  });
  if ("node" in e) {
    if (n.node === e.node) {
      const i = n.offset < e.start ? e.end : e.start, s = n.offset > e.end || n.offset < e.start ? n.offset : e.end;
      Dt(e.node, {
        anchorOffset: i,
        focusOffset: s
      });
    }
  } else {
    const i = e.cloneRange(), s = i.comparePoint(n.node, n.offset);
    s < 0 ? i.setStart(n.node, n.offset) : s > 0 && i.setEnd(n.node, n.offset);
    const l = t.getSelection();
    l == null || l.removeAllRanges(), l == null || l.addRange(i.cloneRange());
  }
}
function by(e, t) {
  var a, o, r, n, i, s, l, u;
  return e.target !== t.target || ((a = e.coords) === null || a === void 0 ? void 0 : a.x) !== ((o = t.coords) === null || o === void 0 ? void 0 : o.y) || ((r = e.coords) === null || r === void 0 ? void 0 : r.y) !== ((n = t.coords) === null || n === void 0 ? void 0 : n.y) || ((i = e.caret) === null || i === void 0 ? void 0 : i.node) !== ((s = t.caret) === null || s === void 0 ? void 0 : s.node) || ((l = e.caret) === null || l === void 0 ? void 0 : l.offset) !== ((u = t.caret) === null || u === void 0 ? void 0 : u.offset);
}
function Xe(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
class b3 {
  move(t, a) {
    const o = this.position, r = this.getTarget(t);
    if (this.position = a, !by(o, a))
      return;
    const n = this.getTarget(t), i = this.getEventInit("mousemove"), [s, l] = Zt(r, n);
    return {
      leave: () => {
        r !== n && (t.dispatchUIEvent(r, "mouseout", i), s.forEach((u) => t.dispatchUIEvent(u, "mouseleave", i)));
      },
      enter: () => {
        r !== n && (t.dispatchUIEvent(n, "mouseover", i), l.forEach((u) => t.dispatchUIEvent(u, "mouseenter", i)));
      },
      move: () => {
        t.dispatchUIEvent(n, "mousemove", i), this.modifySelecting(t);
      }
    };
  }
  down(t, a, o) {
    const r = this.buttons.down(a);
    if (r === void 0)
      return;
    const n = this.getTarget(t);
    this.buttonDownTarget[r] = n;
    const i = ge(n), s = this.getEventInit("mousedown", a.button);
    (i || t.dispatchUIEvent(n, "mousedown", s)) && (this.startSelecting(t, s.detail), He(n)), !i && Vc(a.button) === 2 && t.dispatchUIEvent(n, "contextmenu", this.getEventInit("contextmenu", a.button, o));
  }
  up(t, a, o) {
    const r = this.buttons.up(a);
    if (r === void 0)
      return;
    const n = this.getTarget(t);
    if (!ge(n)) {
      t.dispatchUIEvent(n, "mouseup", this.getEventInit("mouseup", a.button)), this.endSelecting();
      const i = Zt(this.buttonDownTarget[r], n)[2][0];
      if (i) {
        const s = this.getEventInit("click", a.button, o);
        s.detail && (t.dispatchUIEvent(i, s.button === 0 ? "click" : "auxclick", s), s.button === 0 && s.detail === 2 && t.dispatchUIEvent(i, "dblclick", {
          ...this.getEventInit("dblclick", a.button),
          detail: s.detail
        }));
      }
    }
  }
  resetClickCount() {
    this.clickCount.reset();
  }
  getEventInit(t, a, o) {
    const r = {
      ...this.position.coords
    };
    return o && (r.pointerId = o.pointerId, r.pointerType = o.pointerType, r.isPrimary = o.isPrimary), r.button = Vc(a), r.buttons = this.buttons.getButtons(), t === "mousedown" ? r.detail = this.clickCount.getOnDown(r.button) : t === "mouseup" ? r.detail = this.clickCount.getOnUp(r.button) : (t === "click" || t === "auxclick") && (r.detail = this.clickCount.incOnClick(r.button)), r;
  }
  getTarget(t) {
    var a;
    return (a = this.position.target) !== null && a !== void 0 ? a : t.config.document.body;
  }
  startSelecting(t, a) {
    var o, r;
    this.selecting = y3({
      document: t.config.document,
      target: this.getTarget(t),
      node: (o = this.position.caret) === null || o === void 0 ? void 0 : o.node,
      offset: (r = this.position.caret) === null || r === void 0 ? void 0 : r.offset,
      clickCount: a
    });
  }
  modifySelecting(t) {
    var a, o;
    this.selecting && L3(this.selecting, {
      document: t.config.document,
      target: this.getTarget(t),
      node: (a = this.position.caret) === null || a === void 0 ? void 0 : a.node,
      offset: (o = this.position.caret) === null || o === void 0 ? void 0 : o.offset
    });
  }
  endSelecting() {
    this.selecting = void 0;
  }
  constructor() {
    Xe(this, "position", {}), Xe(this, "buttons", new hy()), Xe(this, "selecting", void 0), Xe(this, "buttonDownTarget", {}), Xe(this, "clickCount", new class {
      incOnClick(t) {
        const a = this.down[t] === void 0 ? void 0 : Number(this.down[t]) + 1;
        return this.count = this.count[t] === void 0 ? {} : {
          [t]: Number(this.count[t]) + 1
        }, a;
      }
      getOnDown(t) {
        var a;
        this.down = {
          [t]: (a = this.count[t]) !== null && a !== void 0 ? a : 0
        };
        var o;
        return this.count = {
          [t]: (o = this.count[t]) !== null && o !== void 0 ? o : 0
        }, Number(this.count[t]) + 1;
      }
      getOnUp(t) {
        return this.down[t] === void 0 ? void 0 : Number(this.down[t]) + 1;
      }
      reset() {
        this.count = {};
      }
      constructor() {
        Xe(this, "down", {}), Xe(this, "count", {});
      }
    }());
  }
}
function To(e, t) {
  var a;
  return ((a = vy(e, t)) === null || a === void 0 ? void 0 : a.pointerEvents) !== "none";
}
function v3(e) {
  const t = pe(e);
  for (let a = e, o = []; a != null && a.ownerDocument; a = a.parentElement) {
    o.push(a);
    const r = t.getComputedStyle(a).pointerEvents;
    if (r && ![
      "inherit",
      "unset"
    ].includes(r))
      return {
        pointerEvents: r,
        tree: o
      };
  }
}
const Wc = Symbol("Last check for pointer-events");
function vy(e, t) {
  const a = t[Wc];
  if (!(e.config.pointerEventsCheck !== gt.Never && (!a || Hc(e.config.pointerEventsCheck, gt.EachApiCall) && a[J.Call] !== Ea(e, J.Call) || Hc(e.config.pointerEventsCheck, gt.EachTrigger) && a[J.Trigger] !== Ea(e, J.Trigger))))
    return a == null ? void 0 : a.result;
  const r = v3(t);
  return t[Wc] = {
    [J.Call]: Ea(e, J.Call),
    [J.Trigger]: Ea(e, J.Trigger),
    result: r
  }, r;
}
function zt(e, t) {
  const a = vy(e, t);
  if ((a == null ? void 0 : a.pointerEvents) === "none")
    throw new Error([
      `Unable to perform pointer interaction as the element ${a.tree.length > 1 ? "inherits" : "has"} \`pointer-events: none\`:`,
      "",
      T3(a.tree)
    ].join(`
`));
}
function T3(e) {
  return e.reverse().map((t, a) => [
    "".padEnd(a),
    t.tagName,
    t.id && `#${t.id}`,
    t.hasAttribute("data-testid") && `(testId=${t.getAttribute("data-testid")})`,
    A3(t),
    e.length > 1 && a === 0 && "  <-- This element declared `pointer-events: none`",
    e.length > 1 && a === e.length - 1 && "  <-- Asserted pointer events here"
  ].filter(Boolean).join("")).join(`
`);
}
function A3(e) {
  var t;
  let a;
  if (e.hasAttribute("aria-label"))
    a = e.getAttribute("aria-label");
  else if (e.hasAttribute("aria-labelledby")) {
    var o, r;
    a = (r = e.ownerDocument.getElementById(e.getAttribute("aria-labelledby"))) === null || r === void 0 || (o = r.textContent) === null || o === void 0 ? void 0 : o.trim();
  } else if (_(e, [
    "button",
    "input",
    "meter",
    "output",
    "progress",
    "select",
    "textarea"
  ]) && (!((t = e.labels) === null || t === void 0) && t.length))
    a = Array.from(e.labels).map((i) => {
      var s;
      return (s = i.textContent) === null || s === void 0 ? void 0 : s.trim();
    }).join("|");
  else if (_(e, "button")) {
    var n;
    a = (n = e.textContent) === null || n === void 0 ? void 0 : n.trim();
  }
  return a = a == null ? void 0 : a.replace(/\n/g, "  "), Number(a == null ? void 0 : a.length) > 30 && (a = `${a == null ? void 0 : a.substring(0, 29)}…`), a ? `(label=${a})` : "";
}
function Hc(e, t) {
  return (e & t) > 0;
}
function Ce(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
class zc {
  init(t, a) {
    this.position = a;
    const o = this.getTarget(t), [, r] = Zt(null, o), n = this.getEventInit();
    return zt(t, o), t.dispatchUIEvent(o, "pointerover", n), r.forEach((i) => t.dispatchUIEvent(i, "pointerenter", n)), this;
  }
  move(t, a) {
    const o = this.position, r = this.getTarget(t);
    if (this.position = a, !by(o, a))
      return;
    const n = this.getTarget(t), i = this.getEventInit(), [s, l] = Zt(r, n);
    return {
      leave: () => {
        To(t, r) && r !== n && (t.dispatchUIEvent(r, "pointerout", i), s.forEach((u) => t.dispatchUIEvent(u, "pointerleave", i)));
      },
      enter: () => {
        zt(t, n), r !== n && (t.dispatchUIEvent(n, "pointerover", i), l.forEach((u) => t.dispatchUIEvent(u, "pointerenter", i)));
      },
      move: () => {
        t.dispatchUIEvent(n, "pointermove", i);
      }
    };
  }
  down(t, a) {
    if (this.isDown)
      return;
    const o = this.getTarget(t);
    zt(t, o), this.isDown = !0, this.isPrevented = !t.dispatchUIEvent(o, "pointerdown", this.getEventInit());
  }
  up(t, a) {
    if (!this.isDown)
      return;
    const o = this.getTarget(t);
    zt(t, o), this.isDown = !1, t.dispatchUIEvent(o, "pointerup", this.getEventInit());
  }
  release(t) {
    const a = this.getTarget(t), [o] = Zt(a, null), r = this.getEventInit();
    To(t, a) && (t.dispatchUIEvent(a, "pointerout", r), o.forEach((n) => t.dispatchUIEvent(n, "pointerleave", r))), this.isCancelled = !0;
  }
  getTarget(t) {
    var a;
    return (a = this.position.target) !== null && a !== void 0 ? a : t.config.document.body;
  }
  getEventInit() {
    return {
      ...this.position.coords,
      pointerId: this.pointerId,
      pointerType: this.pointerType,
      isPrimary: this.isPrimary
    };
  }
  constructor({ pointerId: t, pointerType: a, isPrimary: o }) {
    Ce(this, "pointerId", void 0), Ce(this, "pointerType", void 0), Ce(this, "isPrimary", void 0), Ce(this, "isMultitouch", !1), Ce(this, "isCancelled", !1), Ce(this, "isDown", !1), Ce(this, "isPrevented", !1), Ce(this, "position", {}), this.pointerId = t, this.pointerType = a, this.isPrimary = o, this.isMultitouch = !o;
  }
}
function _e(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
class g3 {
  isKeyPressed(t) {
    return this.devices.get(t.pointerType).isPressed(t);
  }
  async press(t, a, o) {
    const r = this.getPointerName(a), n = a.pointerType === "touch" ? this.pointers.new(r, a).init(t, o) : this.pointers.get(r);
    n.position = o, n.pointerType !== "touch" && (this.mouse.position = o), this.devices.get(a.pointerType).addPressed(a), this.buttons.down(a), n.down(t, a), n.pointerType !== "touch" && !n.isPrevented && this.mouse.down(t, a, n);
  }
  async move(t, a, o) {
    const r = this.pointers.get(a), n = r.move(t, o), i = r.pointerType === "touch" || r.isPrevented && r.isDown ? void 0 : this.mouse.move(t, o);
    n == null || n.leave(), i == null || i.leave(), n == null || n.enter(), i == null || i.enter(), n == null || n.move(), i == null || i.move();
  }
  async release(t, a, o) {
    const r = this.devices.get(a.pointerType);
    r.removePressed(a), this.buttons.up(a);
    const n = this.pointers.get(this.getPointerName(a));
    if (n.position = o, n.pointerType !== "touch" && (this.mouse.position = o), r.countPressed === 0 && n.up(t, a), n.pointerType === "touch" && n.release(t), !n.isPrevented) {
      if (n.pointerType === "touch" && !n.isMultitouch) {
        const i = this.mouse.move(t, n.position);
        i == null || i.leave(), i == null || i.enter(), i == null || i.move(), this.mouse.down(t, a, n);
      }
      if (!n.isMultitouch) {
        const i = this.mouse.move(t, n.position);
        i == null || i.leave(), i == null || i.enter(), i == null || i.move(), this.mouse.up(t, a, n);
      }
    }
  }
  getPointerName(t) {
    return t.pointerType === "touch" ? t.name : t.pointerType;
  }
  getPreviousPosition(t) {
    return this.pointers.has(t) ? this.pointers.get(t).position : void 0;
  }
  resetClickCount() {
    this.mouse.resetClickCount();
  }
  getMouseTarget(t) {
    var a;
    return (a = this.mouse.position.target) !== null && a !== void 0 ? a : t.config.document.body;
  }
  setMousePosition(t) {
    this.mouse.position = t, this.pointers.get("mouse").position = t;
  }
  constructor(t) {
    _e(this, "system", void 0), _e(this, "mouse", void 0), _e(this, "buttons", void 0), _e(this, "devices", new class {
      get(a) {
        var o, r, n;
        return (n = (o = this.registry)[r = a]) !== null && n !== void 0 || (o[r] = new m3()), this.registry[a];
      }
      constructor() {
        _e(this, "registry", {});
      }
    }()), _e(this, "pointers", new class {
      new(a, o) {
        const r = o.pointerType !== "touch" || !Object.values(this.registry).some((n) => n.pointerType === "touch" && !n.isCancelled);
        return r || Object.values(this.registry).forEach((n) => {
          n.pointerType === o.pointerType && !n.isCancelled && (n.isMultitouch = !0);
        }), this.registry[a] = new zc({
          pointerId: this.nextId++,
          pointerType: o.pointerType,
          isPrimary: r
        }), this.registry[a];
      }
      get(a) {
        if (!this.has(a))
          throw new Error(`Trying to access pointer "${a}" which does not exist.`);
        return this.registry[a];
      }
      has(a) {
        return a in this.registry;
      }
      constructor() {
        _e(this, "registry", {
          mouse: new zc({
            pointerId: 1,
            pointerType: "mouse",
            isPrimary: !0
          })
        }), _e(this, "nextId", 2);
      }
    }()), this.system = t, this.buttons = new hy(), this.mouse = new b3();
  }
}
function Gc(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
class Ty {
  getUIEventModifiers() {
    return {
      altKey: this.keyboard.modifiers.Alt,
      ctrlKey: this.keyboard.modifiers.Control,
      metaKey: this.keyboard.modifiers.Meta,
      shiftKey: this.keyboard.modifiers.Shift,
      modifierAltGraph: this.keyboard.modifiers.AltGraph,
      modifierCapsLock: this.keyboard.modifiers.CapsLock,
      modifierFn: this.keyboard.modifiers.Fn,
      modifierFnLock: this.keyboard.modifiers.FnLock,
      modifierNumLock: this.keyboard.modifiers.NumLock,
      modifierScrollLock: this.keyboard.modifiers.ScrollLock,
      modifierSymbol: this.keyboard.modifiers.Symbol,
      modifierSymbolLock: this.keyboard.modifiers.SymbolLock
    };
  }
  constructor() {
    Gc(this, "keyboard", new u3(this)), Gc(this, "pointer", new g3(this));
  }
}
async function S3(e) {
  const t = [];
  return this.config.skipHover || t.push({
    target: e
  }), t.push({
    keys: "[MouseLeft]",
    target: e
  }), this.pointer(t);
}
async function Y3(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft]"
  ]);
}
async function R3(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft][MouseLeft]"
  ]);
}
async function E3(e) {
  return this.pointer({
    target: e
  });
}
async function w3(e) {
  return zt(this, this.system.pointer.getMouseTarget(this)), this.pointer({
    target: e.ownerDocument.body
  });
}
async function C3({ shift: e } = {}) {
  return this.keyboard(e === !0 ? "{Shift>}{Tab}{/Shift}" : e === !1 ? "[/ShiftLeft][/ShiftRight]{Tab}" : "{Tab}");
}
function _3(e, t) {
  const a = [];
  do {
    const { type: r, descriptor: n, consumedLength: i, releasePrevious: s, releaseSelf: l = !0, repeat: u } = ey(t, "keyboard");
    var o;
    const c = (o = e.find((d) => {
      if (r === "[") {
        var p;
        return ((p = d.code) === null || p === void 0 ? void 0 : p.toLowerCase()) === n.toLowerCase();
      } else if (r === "{") {
        var y;
        return ((y = d.key) === null || y === void 0 ? void 0 : y.toLowerCase()) === n.toLowerCase();
      }
      return d.key === n;
    })) !== null && o !== void 0 ? o : {
      key: "Unknown",
      code: "Unknown",
      [r === "[" ? "code" : "key"]: n
    };
    a.push({
      keyDef: c,
      releasePrevious: s,
      releaseSelf: l,
      repeat: u
    }), t = t.slice(i);
  } while (t);
  return a;
}
async function P3(e) {
  const t = _3(this.config.keyboardMap, e);
  for (let a = 0; a < t.length; a++)
    await xt(this.config), await I3(this, t[a]);
}
async function I3(e, { keyDef: t, releasePrevious: a, releaseSelf: o, repeat: r }) {
  const { system: n } = e;
  if (n.keyboard.isKeyPressed(t) && await n.keyboard.keyup(e, t), !a) {
    for (let i = 1; i <= r; i++)
      await n.keyboard.keydown(e, t), i < r && await xt(e.config);
    o && await n.keyboard.keyup(e, t);
  }
}
async function F3(e) {
  for (const t of e.system.keyboard.getPressedKeys())
    await e.system.keyboard.keyup(e, t);
}
function Ay(e) {
  const t = fe(e) ? {
    "text/plain": O3(e)
  } : {
    "text/plain": String(e.ownerDocument.getSelection())
  }, a = Rs(pe(e));
  for (const o in t)
    t[o] && a.setData(o, t[o]);
  return a;
}
function O3(e) {
  const t = ua(e);
  return me(e).substring(t.startOffset, t.endOffset);
}
async function M3() {
  const e = this.config.document;
  var t;
  const a = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), o = Ay(a);
  if (o.items.length !== 0)
    return this.dispatchUIEvent(a, "copy", {
      clipboardData: o
    }) && this.config.writeToClipboard && await Xm(e, o), o;
}
async function x3() {
  const e = this.config.document;
  var t;
  const a = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), o = Ay(a);
  if (o.items.length !== 0)
    return this.dispatchUIEvent(a, "cut", {
      clipboardData: o
    }) && this.config.writeToClipboard && await Xm(a.ownerDocument, o), o;
}
async function k3(e) {
  const t = this.config.document;
  var a;
  const o = (a = t.activeElement) !== null && a !== void 0 ? a : (
    /* istanbul ignore next */
    t.body
  );
  var r;
  const n = (r = typeof e == "string" ? N3(t, e) : e) !== null && r !== void 0 ? r : await aP(t).catch(() => {
    throw new Error("`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.");
  });
  this.dispatchUIEvent(o, "paste", {
    clipboardData: n
  });
}
function N3(e, t) {
  const a = Rs(pe(e));
  return a.setData("text", t), a;
}
function Kc(e, t) {
  const a = [];
  do {
    const { descriptor: o, consumedLength: r, releasePrevious: n, releaseSelf: i = !0 } = ey(t, "pointer"), s = e.find((l) => l.name === o);
    s && a.push({
      keyDef: s,
      releasePrevious: n,
      releaseSelf: i
    }), t = t.slice(r);
  } while (t);
  return a;
}
async function $3(e) {
  const { pointerMap: t } = this.config, a = [];
  (Array.isArray(e) ? e : [
    e
  ]).forEach((o) => {
    typeof o == "string" ? a.push(...Kc(t, o)) : "keys" in o ? a.push(...Kc(t, o.keys).map((r) => ({
      ...o,
      ...r
    }))) : a.push(o);
  });
  for (let o = 0; o < a.length; o++)
    await xt(this.config), await q3(this, a[o]);
  this.system.pointer.resetClickCount();
}
async function q3(e, t) {
  var a, o;
  const r = "pointerName" in t && t.pointerName ? t.pointerName : "keyDef" in t ? e.system.pointer.getPointerName(t.keyDef) : "mouse", n = e.system.pointer.getPreviousPosition(r);
  var i, s, l, u;
  const c = {
    target: (i = t.target) !== null && i !== void 0 ? i : D3(e, n),
    coords: (s = t.coords) !== null && s !== void 0 ? s : n == null ? void 0 : n.coords,
    caret: {
      node: (l = t.node) !== null && l !== void 0 ? l : Jc(t) || n == null || (a = n.caret) === null || a === void 0 ? void 0 : a.node,
      offset: (u = t.offset) !== null && u !== void 0 ? u : Jc(t) || n == null || (o = n.caret) === null || o === void 0 ? void 0 : o.offset
    }
  };
  "keyDef" in t ? (e.system.pointer.isKeyPressed(t.keyDef) && (Wt(e, J.Trigger), await e.system.pointer.release(e, t.keyDef, c)), t.releasePrevious || (Wt(e, J.Trigger), await e.system.pointer.press(e, t.keyDef, c), t.releaseSelf && (Wt(e, J.Trigger), await e.system.pointer.release(e, t.keyDef, c)))) : (Wt(e, J.Trigger), await e.system.pointer.move(e, r, c));
}
function Jc(e) {
  var t, a;
  return !!((a = (t = e.target) !== null && t !== void 0 ? t : e.node) !== null && a !== void 0 ? a : e.offset !== void 0);
}
function D3(e, t) {
  if (!t)
    throw new Error("This pointer has no previous position. Provide a target property!");
  var a;
  return (a = t.target) !== null && a !== void 0 ? a : e.config.document.body;
}
async function B3(e) {
  if (!It(e) || ge(e))
    throw new Error("clear()` is only supported on editable elements.");
  if (He(e), e.ownerDocument.activeElement !== e)
    throw new Error("The element to be cleared could not be focused.");
  if (uy(e), !$P(e))
    throw new Error("The element content to be cleared could not be selected.");
  Mt(this, e, "", "deleteContentBackward");
}
const { getConfig: Pa } = di;
async function U3(e, t) {
  return gy.call(this, !0, e, t);
}
async function j3(e, t) {
  return gy.call(this, !1, e, t);
}
async function gy(e, t, a) {
  if (!e && !t.multiple)
    throw Pa().getElementError("Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.", t);
  const o = Array.isArray(a) ? a : [
    a
  ], r = Array.from(t.querySelectorAll('option, [role="option"]')), n = o.map((s) => {
    if (typeof s != "string" && r.includes(s))
      return s;
    {
      const l = r.find((u) => u.value === s || u.innerHTML === s);
      if (l)
        return l;
      throw Pa().getElementError(`Value "${String(s)}" not found in options`, t);
    }
  }).filter((s) => !ge(s));
  if (ge(t) || !n.length)
    return;
  const i = (s) => {
    s.selected = e, this.dispatchUIEvent(t, "input", {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }), this.dispatchUIEvent(t, "change");
  };
  if (_(t, "select"))
    if (t.multiple)
      for (const s of n) {
        const l = this.config.pointerEventsCheck === 0 ? !0 : To(this, s);
        l && (this.dispatchUIEvent(s, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(s, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(s, "pointermove"), this.dispatchUIEvent(s, "mousemove"), this.dispatchUIEvent(s, "pointerdown"), this.dispatchUIEvent(s, "mousedown")), He(t), l && (this.dispatchUIEvent(s, "pointerup"), this.dispatchUIEvent(s, "mouseup")), i(s), l && this.dispatchUIEvent(s, "click"), await xt(this.config);
      }
    else if (n.length === 1) {
      const s = this.config.pointerEventsCheck === 0 ? !0 : To(this, t);
      s ? await this.click(t) : He(t), i(n[0]), s && (this.dispatchUIEvent(t, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(t, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(t, "pointerup"), this.dispatchUIEvent(t, "mouseup"), this.dispatchUIEvent(t, "click")), await xt(this.config);
    } else
      throw Pa().getElementError("Cannot select multiple options on a non-multiple select", t);
  else if (t.getAttribute("role") === "listbox")
    for (const s of n)
      await this.click(s), await this.unhover(s);
  else
    throw Pa().getElementError("Cannot select options on elements that are neither select nor listbox elements", t);
}
async function V3(e, t, { skipClick: a = this.config.skipClick, skipAutoClose: o = this.config.skipAutoClose, initialSelectionStart: r, initialSelectionEnd: n } = {}) {
  e.disabled || (a || await this.click(e), r !== void 0 && Ht(e, r, n ?? r), await this.keyboard(t), o || await F3(this));
}
const Xc = Symbol("files and value properties are mocked");
function el(e, t, a) {
  a ? Object.defineProperty(e, t, a) : delete e[t];
}
function W3(e, t) {
  var a;
  (a = e[Xc]) === null || a === void 0 || a.restore();
  const o = Object.getOwnPropertyDescriptor(e, "type"), r = Object.getOwnPropertyDescriptor(e, "value"), n = Object.getOwnPropertyDescriptor(e, "files");
  function i() {
    el(e, "type", o), el(e, "value", r), el(e, "files", n);
  }
  e[Xc] = {
    restore: i
  }, Object.defineProperties(e, {
    files: {
      configurable: !0,
      get: () => t
    },
    value: {
      configurable: !0,
      get: () => t.length ? `C:\\fakepath\\${t[0].name}` : "",
      set(s) {
        if (s === "")
          i();
        else {
          var l;
          r == null || (l = r.set) === null || l === void 0 || l.call(e, s);
        }
      }
    },
    type: {
      configurable: !0,
      get: () => "file",
      set(s) {
        s !== "file" && (i(), e.type = s);
      }
    }
  });
}
async function H3(e, t) {
  const a = _(e, "label") ? e.control : e;
  if (!a || !_(a, "input", {
    type: "file"
  }))
    throw new TypeError(`The ${a === e ? "given" : "associated"} ${a == null ? void 0 : a.tagName} element does not accept file uploads`);
  if (ge(e))
    return;
  const o = (Array.isArray(t) ? t : [
    t
  ]).filter((n) => !this.config.applyAccept || z3(n, a.accept)).slice(0, a.multiple ? void 0 : 1), r = () => {
    var n;
    o.length === ((n = a.files) === null || n === void 0 ? void 0 : n.length) && o.every((i, s) => {
      var l;
      return i === ((l = a.files) === null || l === void 0 ? void 0 : l.item(s));
    }) || (W3(a, Ys(pe(e), o)), this.dispatchUIEvent(a, "input"), this.dispatchUIEvent(a, "change"));
  };
  a.addEventListener("fileDialog", r), await this.click(e), a.removeEventListener("fileDialog", r);
}
function z3(e, t) {
  if (!t)
    return !0;
  const a = [
    "audio/*",
    "image/*",
    "video/*"
  ];
  return t.split(",").some((o) => o.startsWith(".") ? e.name.endsWith(o) : a.includes(o) ? e.type.startsWith(o.substr(0, o.length - 1)) : e.type === o);
}
const Qc = {
  click: S3,
  dblClick: Y3,
  tripleClick: R3,
  hover: E3,
  unhover: w3,
  tab: C3,
  keyboard: P3,
  copy: M3,
  cut: x3,
  paste: k3,
  pointer: $3,
  clear: B3,
  deselectOptions: j3,
  selectOptions: U3,
  type: V3,
  upload: H3
}, { getConfig: G3 } = di;
function K3(e) {
  return G3().asyncWrapper(e);
}
const Sy = {
  applyAccept: !0,
  autoModify: !0,
  delay: 0,
  document: globalThis.document,
  keyboardMap: c3,
  pointerMap: d3,
  pointerEventsCheck: gt.EachApiCall,
  skipAutoClose: !1,
  skipClick: !1,
  skipHover: !1,
  writeToClipboard: !1,
  advanceTimers: () => Promise.resolve()
}, J3 = {
  ...Sy,
  writeToClipboard: !0
};
function Yy(e = {}, t = J3, a) {
  const o = e6(e, a, t);
  return {
    ...t,
    ...e,
    document: o
  };
}
function X3(e = {}) {
  const t = Yy(e);
  yy(t.document);
  var a;
  const o = (a = t.document.defaultView) !== null && a !== void 0 ? a : (
    /* istanbul ignore next */
    globalThis.window
  );
  return Z9(o), Is(t).api;
}
function K({ keyboardState: e, pointerState: t, ...a } = {}, o) {
  const r = Yy(a, Sy, o);
  yy(r.document);
  var n;
  const i = (n = t ?? e) !== null && n !== void 0 ? n : new Ty();
  return {
    api: Is(r, i).api,
    system: i
  };
}
function Q3(e) {
  return Is({
    ...this.config,
    ...e
  }, this.system).api;
}
function Z3(e, t) {
  function a(...o) {
    return Wt(e, J.Call), K3(() => t.apply(e, o).then(async (r) => (await xt(e.config), r)));
  }
  return Object.defineProperty(a, "name", {
    get: () => t.name
  }), a;
}
function Is(e, t = new Ty()) {
  const a = {};
  return Object.assign(a, {
    config: e,
    dispatchEvent: my.bind(a),
    dispatchUIEvent: ZP.bind(a),
    system: t,
    levelRefs: {},
    ...Qc
  }), {
    instance: a,
    api: {
      ...Object.fromEntries(Object.entries(Qc).map(([o, r]) => [
        o,
        Z3(a, r)
      ])),
      setup: Q3.bind(a)
    }
  };
}
function e6(e, t, a) {
  var o, r;
  return (r = (o = e.document) !== null && o !== void 0 ? o : t && n3(t)) !== null && r !== void 0 ? r : a.document;
}
function t6(e) {
  return K().api.clear(e);
}
function a6(e, t = {}) {
  return K(t, e).api.click(e);
}
function o6(e = {}) {
  return K(e).api.copy();
}
function r6(e = {}) {
  return K(e).api.cut();
}
function n6(e, t = {}) {
  return K(t).api.dblClick(e);
}
function i6(e, t, a = {}) {
  return K(a).api.deselectOptions(e, t);
}
function l6(e, t = {}) {
  return K(t).api.hover(e);
}
async function s6(e, t = {}) {
  const { api: a, system: o } = K(t);
  return a.keyboard(e).then(() => o);
}
async function u6(e, t = {}) {
  const { api: a, system: o } = K(t);
  return a.pointer(e).then(() => o);
}
function c6(e, t) {
  return K(t).api.paste(e);
}
function d6(e, t, a = {}) {
  return K(a).api.selectOptions(e, t);
}
function p6(e, t = {}) {
  return K(t).api.tripleClick(e);
}
function f6(e, t, a = {}) {
  return K(a, e).api.type(e, t, a);
}
function m6(e, t = {}) {
  const { api: a, system: o } = K(t);
  return o.pointer.setMousePosition({
    target: e
  }), a.unhover(e);
}
function y6(e, t, a = {}) {
  return K(a).api.upload(e, t);
}
function h6(e = {}) {
  return K().api.tab(e);
}
const L6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: t6,
  click: a6,
  copy: o6,
  cut: r6,
  dblClick: n6,
  deselectOptions: i6,
  hover: l6,
  keyboard: s6,
  paste: c6,
  pointer: u6,
  selectOptions: d6,
  tab: h6,
  tripleClick: p6,
  type: f6,
  unhover: m6,
  upload: y6
}, Symbol.toStringTag, { value: "Module" })), Zc = {
  ...L6,
  setup: X3
};
var W = (() => {
  let e;
  return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ? e = self : e = {}, e;
})(), { LOGLEVEL: b6 } = W, xe = { trace: 1, debug: 2, info: 3, warn: 4, error: 5, silent: 10 }, v6 = b6, Lt = xe[v6] || xe.info, Ry = { trace: (e, ...t) => {
  Lt <= xe.trace && console.trace(e, ...t);
}, debug: (e, ...t) => {
  Lt <= xe.debug && console.debug(e, ...t);
}, info: (e, ...t) => {
  Lt <= xe.info && console.info(e, ...t);
}, warn: (e, ...t) => {
  Lt <= xe.warn && console.warn(e, ...t);
}, error: (e, ...t) => {
  Lt <= xe.error && console.error(e, ...t);
}, log: (e, ...t) => {
  Lt < xe.silent && console.log(e, ...t);
} }, Hl = /* @__PURE__ */ new Set(), X = (e) => (t, ...a) => {
  if (!Hl.has(t))
    return Hl.add(t), Ry[e](t, ...a);
};
X.clear = () => Hl.clear();
X.trace = X("trace");
X.debug = X("debug");
X.info = X("info");
X.warn = X("warn");
X.error = X("error");
X.log = X("log");
var T6 = (e) => e.transports !== void 0, A6 = () => Math.random().toString(16).slice(2), g6 = class {
  constructor(e = {}) {
    this.sender = A6(), this.events = {}, this.data = {}, this.transports = [], this.isAsync = e.async || !1, T6(e) ? (this.transports = e.transports || [], this.transports.forEach((t) => {
      t.setHandler((a) => this.handleEvent(a));
    })) : this.transports = e.transport ? [e.transport] : [], this.transports.forEach((t) => {
      t.setHandler((a) => this.handleEvent(a));
    });
  }
  get hasTransport() {
    return this.transports.length > 0;
  }
  addListener(e, t) {
    this.events[e] = this.events[e] || [], this.events[e].push(t);
  }
  emit(e, ...t) {
    let a = { type: e, args: t, from: this.sender }, o = {};
    t.length >= 1 && t[0] && t[0].options && (o = t[0].options);
    let r = () => {
      this.transports.forEach((n) => {
        n.send(a, o);
      }), this.handleEvent(a);
    };
    this.isAsync ? setImmediate(r) : r();
  }
  last(e) {
    return this.data[e];
  }
  eventNames() {
    return Object.keys(this.events);
  }
  listenerCount(e) {
    let t = this.listeners(e);
    return t ? t.length : 0;
  }
  listeners(e) {
    return this.events[e] || void 0;
  }
  once(e, t) {
    let a = this.onceListener(e, t);
    this.addListener(e, a);
  }
  removeAllListeners(e) {
    e ? this.events[e] && delete this.events[e] : this.events = {};
  }
  removeListener(e, t) {
    let a = this.listeners(e);
    a && (this.events[e] = a.filter((o) => o !== t));
  }
  on(e, t) {
    this.addListener(e, t);
  }
  off(e, t) {
    this.removeListener(e, t);
  }
  handleEvent(e) {
    let t = this.listeners(e.type);
    t && t.length && t.forEach((a) => {
      a.apply(e, e.args);
    }), this.data[e.type] = e.args;
  }
  onceListener(e, t) {
    let a = (...o) => (this.removeListener(e, a), t(...o));
    return a;
  }
}, Ey = ((e) => (e.CHANNEL_CREATED = "channelCreated", e.CONFIG_ERROR = "configError", e.STORY_INDEX_INVALIDATED = "storyIndexInvalidated", e.STORY_SPECIFIED = "storySpecified", e.SET_CONFIG = "setConfig", e.SET_STORIES = "setStories", e.SET_INDEX = "setIndex", e.SET_CURRENT_STORY = "setCurrentStory", e.CURRENT_STORY_WAS_SET = "currentStoryWasSet", e.FORCE_RE_RENDER = "forceReRender", e.FORCE_REMOUNT = "forceRemount", e.PRELOAD_ENTRIES = "preloadStories", e.STORY_PREPARED = "storyPrepared", e.DOCS_PREPARED = "docsPrepared", e.STORY_CHANGED = "storyChanged", e.STORY_UNCHANGED = "storyUnchanged", e.STORY_RENDERED = "storyRendered", e.STORY_MISSING = "storyMissing", e.STORY_ERRORED = "storyErrored", e.STORY_THREW_EXCEPTION = "storyThrewException", e.STORY_RENDER_PHASE_CHANGED = "storyRenderPhaseChanged", e.PLAY_FUNCTION_THREW_EXCEPTION = "playFunctionThrewException", e.UPDATE_STORY_ARGS = "updateStoryArgs", e.STORY_ARGS_UPDATED = "storyArgsUpdated", e.RESET_STORY_ARGS = "resetStoryArgs", e.SET_GLOBALS = "setGlobals", e.UPDATE_GLOBALS = "updateGlobals", e.GLOBALS_UPDATED = "globalsUpdated", e.REGISTER_SUBSCRIPTION = "registerSubscription", e.PREVIEW_KEYDOWN = "previewKeydown", e.PREVIEW_BUILDER_PROGRESS = "preview_builder_progress", e.SELECT_STORY = "selectStory", e.STORIES_COLLAPSE_ALL = "storiesCollapseAll", e.STORIES_EXPAND_ALL = "storiesExpandAll", e.DOCS_RENDERED = "docsRendered", e.SHARED_STATE_CHANGED = "sharedStateChanged", e.SHARED_STATE_SET = "sharedStateSet", e.NAVIGATE_URL = "navigateUrl", e.UPDATE_QUERY_PARAMS = "updateQueryParams", e.REQUEST_WHATS_NEW_DATA = "requestWhatsNewData", e.RESULT_WHATS_NEW_DATA = "resultWhatsNewData", e.SET_WHATS_NEW_CACHE = "setWhatsNewCache", e.TOGGLE_WHATS_NEW_NOTIFICATIONS = "toggleWhatsNewNotifications", e.TELEMETRY_ERROR = "telemetryError", e))(Ey || {}), { CHANNEL_CREATED: g4, CONFIG_ERROR: S4, CURRENT_STORY_WAS_SET: Y4, DOCS_PREPARED: R4, DOCS_RENDERED: E4, FORCE_RE_RENDER: w4, FORCE_REMOUNT: ed, GLOBALS_UPDATED: C4, NAVIGATE_URL: _4, PLAY_FUNCTION_THREW_EXCEPTION: P4, PRELOAD_ENTRIES: I4, PREVIEW_BUILDER_PROGRESS: F4, PREVIEW_KEYDOWN: O4, REGISTER_SUBSCRIPTION: M4, RESET_STORY_ARGS: x4, SELECT_STORY: k4, SET_CONFIG: N4, SET_CURRENT_STORY: S6, SET_GLOBALS: $4, SET_INDEX: q4, SET_STORIES: D4, SHARED_STATE_CHANGED: B4, SHARED_STATE_SET: U4, STORIES_COLLAPSE_ALL: j4, STORIES_EXPAND_ALL: V4, STORY_ARGS_UPDATED: W4, STORY_CHANGED: H4, STORY_ERRORED: z4, STORY_INDEX_INVALIDATED: G4, STORY_MISSING: K4, STORY_PREPARED: J4, STORY_RENDER_PHASE_CHANGED: Y6, STORY_RENDERED: X4, STORY_SPECIFIED: Q4, STORY_THREW_EXCEPTION: Z4, STORY_UNCHANGED: eI, UPDATE_GLOBALS: tI, UPDATE_QUERY_PARAMS: aI, UPDATE_STORY_ARGS: oI, REQUEST_WHATS_NEW_DATA: rI, RESULT_WHATS_NEW_DATA: nI, SET_WHATS_NEW_CACHE: iI, TOGGLE_WHATS_NEW_NOTIFICATIONS: lI, TELEMETRY_ERROR: sI } = Ey, R6 = new Error("ignoredException");
function E6() {
  let e = { setHandler: () => {
  }, send: () => {
  } };
  return new g6({ transport: e });
}
var w6 = class {
  constructor() {
    this.getChannel = () => {
      if (!this.channel) {
        let e = E6();
        return this.setChannel(e), e;
      }
      return this.channel;
    }, this.getServerChannel = () => {
      if (!this.serverChannel)
        throw new Error("Accessing non-existent serverChannel");
      return this.serverChannel;
    }, this.ready = () => this.promise, this.hasChannel = () => !!this.channel, this.hasServerChannel = () => !!this.serverChannel, this.setChannel = (e) => {
      this.channel = e, this.resolve();
    }, this.setServerChannel = (e) => {
      this.serverChannel = e;
    }, this.promise = new Promise((e) => {
      this.resolve = () => e(this.getChannel());
    });
  }
}, tl = "__STORYBOOK_ADDONS_PREVIEW";
function C6() {
  return W[tl] || (W[tl] = new w6()), W[tl];
}
var _6 = C6(), P6 = ((e) => (e.DONE = "done", e.ERROR = "error", e.ACTIVE = "active", e.WAITING = "waiting", e))(P6 || {}), he = { CALL: "storybook/instrumenter/call", SYNC: "storybook/instrumenter/sync", START: "storybook/instrumenter/start", BACK: "storybook/instrumenter/back", GOTO: "storybook/instrumenter/goto", NEXT: "storybook/instrumenter/next", END: "storybook/instrumenter/end" }, td = { start: !1, back: !1, goto: !1, next: !1, end: !1 }, ad = new Error("This function ran after the play function completed. Did you forget to `await` it?"), od = (e) => Object.prototype.toString.call(e) === "[object Object]", I6 = (e) => Object.prototype.toString.call(e) === "[object Module]", F6 = (e) => {
  if (!od(e) && !I6(e))
    return !1;
  if (e.constructor === void 0)
    return !0;
  let t = e.constructor.prototype;
  return !(!od(t) || Object.prototype.hasOwnProperty.call(t, "isPrototypeOf") === !1);
}, O6 = (e) => {
  try {
    return new e.constructor();
  } catch {
    return {};
  }
}, al = () => ({ renderPhase: void 0, isDebugging: !1, isPlaying: !1, isLocked: !1, cursor: 0, calls: [], shadowCalls: [], callRefsByResult: /* @__PURE__ */ new Map(), chainedCallIds: /* @__PURE__ */ new Set(), ancestors: [], playUntil: void 0, resolvers: {}, syncTimeout: void 0 }), rd = (e, t = !1) => {
  let a = (t ? e.shadowCalls : e.calls).filter((r) => r.retain);
  if (!a.length)
    return;
  let o = new Map(Array.from(e.callRefsByResult.entries()).filter(([, r]) => r.retain));
  return { cursor: a.length, calls: a, callRefsByResult: o };
}, M6 = class {
  constructor() {
    this.initialized = !1, this.channel = _6.getChannel(), this.state = W.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {};
    let e = ({ storyId: i, isPlaying: s = !0, isDebugging: l = !1 }) => {
      let u = this.getState(i);
      this.setState(i, { ...al(), ...rd(u, l), shadowCalls: l ? u.shadowCalls : [], chainedCallIds: l ? u.chainedCallIds : /* @__PURE__ */ new Set(), playUntil: l ? u.playUntil : void 0, isPlaying: s, isDebugging: l }), this.sync(i);
    };
    this.channel.on(ed, e), this.channel.on(Y6, ({ storyId: i, newPhase: s }) => {
      let { isDebugging: l } = this.getState(i);
      this.setState(i, { renderPhase: s }), s === "preparing" && l && e({ storyId: i }), s === "playing" && e({ storyId: i, isDebugging: l }), s === "played" && this.setState(i, { isLocked: !1, isPlaying: !1, isDebugging: !1 }), s === "errored" && this.setState(i, { isLocked: !1, isPlaying: !1 });
    }), this.channel.on(S6, () => {
      this.initialized ? this.cleanup() : this.initialized = !0;
    });
    let t = ({ storyId: i, playUntil: s }) => {
      this.getState(i).isDebugging || this.setState(i, ({ calls: u }) => ({ calls: [], shadowCalls: u.map((c) => ({ ...c, status: "waiting" })), isDebugging: !0 }));
      let l = this.getLog(i);
      this.setState(i, ({ shadowCalls: u }) => {
        var d;
        if (s || !l.length)
          return { playUntil: s };
        let c = u.findIndex((p) => p.id === l[0].callId);
        return { playUntil: (d = u.slice(0, c).filter((p) => p.interceptable && !p.ancestors.length).slice(-1)[0]) == null ? void 0 : d.id };
      }), this.channel.emit(ed, { storyId: i, isDebugging: !0 });
    }, a = ({ storyId: i }) => {
      var u;
      let s = this.getLog(i).filter((c) => !c.ancestors.length), l = s.reduceRight((c, d, p) => c >= 0 || d.status === "waiting" ? c : p, -1);
      t({ storyId: i, playUntil: (u = s[l - 1]) == null ? void 0 : u.callId });
    }, o = ({ storyId: i, callId: s }) => {
      var y;
      let { calls: l, shadowCalls: u, resolvers: c } = this.getState(i), d = l.find(({ id: h }) => h === s), p = u.find(({ id: h }) => h === s);
      if (!d && p && Object.values(c).length > 0) {
        let h = (y = this.getLog(i).find((b) => b.status === "waiting")) == null ? void 0 : y.callId;
        p.id !== h && this.setState(i, { playUntil: p.id }), Object.values(c).forEach((b) => b());
      } else
        t({ storyId: i, playUntil: s });
    }, r = ({ storyId: i }) => {
      var l;
      let { resolvers: s } = this.getState(i);
      if (Object.values(s).length > 0)
        Object.values(s).forEach((u) => u());
      else {
        let u = (l = this.getLog(i).find((c) => c.status === "waiting")) == null ? void 0 : l.callId;
        u ? t({ storyId: i, playUntil: u }) : n({ storyId: i });
      }
    }, n = ({ storyId: i }) => {
      this.setState(i, { playUntil: void 0, isDebugging: !1 }), Object.values(this.getState(i).resolvers).forEach((s) => s());
    };
    this.channel.on(he.START, t), this.channel.on(he.BACK, a), this.channel.on(he.GOTO, o), this.channel.on(he.NEXT, r), this.channel.on(he.END, n);
  }
  getState(e) {
    return this.state[e] || al();
  }
  setState(e, t) {
    let a = this.getState(e), o = typeof t == "function" ? t(a) : t;
    this.state = { ...this.state, [e]: { ...a, ...o } }, W.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
  }
  cleanup() {
    this.state = Object.entries(this.state).reduce((t, [a, o]) => {
      let r = rd(o);
      return r && (t[a] = Object.assign(al(), r)), t;
    }, {});
    let e = { controlStates: td, logItems: [] };
    this.channel.emit(he.SYNC, e), W.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
  }
  getLog(e) {
    let { calls: t, shadowCalls: a } = this.getState(e), o = [...a];
    t.forEach((n, i) => {
      o[i] = n;
    });
    let r = /* @__PURE__ */ new Set();
    return o.reduceRight((n, i) => (i.args.forEach((s) => {
      s != null && s.__callId__ && r.add(s.__callId__);
    }), i.path.forEach((s) => {
      s.__callId__ && r.add(s.__callId__);
    }), (i.interceptable || i.exception) && !r.has(i.id) && (n.unshift({ callId: i.id, status: i.status, ancestors: i.ancestors }), r.add(i.id)), n), []);
  }
  instrument(e, t) {
    if (!F6(e))
      return e;
    let { mutate: a = !1, path: o = [] } = t;
    return Object.keys(e).reduce((r, n) => {
      let i = e[n];
      return typeof i != "function" ? (r[n] = this.instrument(i, { ...t, path: o.concat(n) }), r) : typeof i.__originalFn__ == "function" ? (r[n] = i, r) : (r[n] = (...s) => this.track(n, i, s, t), r[n].__originalFn__ = i, Object.defineProperty(r[n], "name", { value: n, writable: !1 }), Object.keys(i).length > 0 && Object.assign(r[n], this.instrument({ ...i }, { ...t, path: o.concat(n) })), r);
    }, a ? e : O6(e));
  }
  track(e, t, a, o) {
    var h, b, R, f;
    let r = ((h = a == null ? void 0 : a[0]) == null ? void 0 : h.__storyId__) || ((f = (R = (b = W.__STORYBOOK_PREVIEW__) == null ? void 0 : b.selectionStore) == null ? void 0 : R.selection) == null ? void 0 : f.storyId), { cursor: n, ancestors: i } = this.getState(r);
    this.setState(r, { cursor: n + 1 });
    let s = `${i.slice(-1)[0] || r} [${n}] ${e}`, { path: l = [], intercept: u = !1, retain: c = !1 } = o, d = typeof u == "function" ? u(e, l) : u, p = { id: s, cursor: n, storyId: r, ancestors: i, path: l, method: e, args: a, interceptable: d, retain: c }, y = (d && !i.length ? this.intercept : this.invoke).call(this, t, p, o);
    return this.instrument(y, { ...o, mutate: !0, path: [{ __callId__: p.id }] });
  }
  intercept(e, t, a) {
    let { chainedCallIds: o, isDebugging: r, playUntil: n } = this.getState(t.storyId), i = o.has(t.id);
    return !r || i || n ? (n === t.id && this.setState(t.storyId, { playUntil: void 0 }), this.invoke(e, t, a)) : new Promise((s) => {
      this.setState(t.storyId, ({ resolvers: l }) => ({ isLocked: !1, resolvers: { ...l, [t.id]: s } }));
    }).then(() => (this.setState(t.storyId, (s) => {
      let { [t.id]: l, ...u } = s.resolvers;
      return { isLocked: !0, resolvers: u };
    }), this.invoke(e, t, a)));
  }
  invoke(e, t, a) {
    let { callRefsByResult: o, renderPhase: r } = this.getState(t.storyId), n = (l) => {
      var u, c;
      if (o.has(l))
        return o.get(l);
      if (l instanceof Array)
        return l.map(n);
      if (l instanceof Date)
        return { __date__: { value: l.toISOString() } };
      if (l instanceof Error) {
        let { name: d, message: p, stack: y } = l;
        return { __error__: { name: d, message: p, stack: y } };
      }
      if (l instanceof RegExp) {
        let { flags: d, source: p } = l;
        return { __regexp__: { flags: d, source: p } };
      }
      if (l instanceof W.window.HTMLElement) {
        let { prefix: d, localName: p, id: y, classList: h, innerText: b } = l, R = Array.from(h);
        return { __element__: { prefix: d, localName: p, id: y, classNames: R, innerText: b } };
      }
      return typeof l == "function" ? { __function__: { name: l.name } } : typeof l == "symbol" ? { __symbol__: { description: l.description } } : typeof l == "object" && ((u = l == null ? void 0 : l.constructor) != null && u.name) && ((c = l == null ? void 0 : l.constructor) == null ? void 0 : c.name) !== "Object" ? { __class__: { name: l.constructor.name } } : Object.prototype.toString.call(l) === "[object Object]" ? Object.fromEntries(Object.entries(l).map(([d, p]) => [d, n(p)])) : l;
    }, i = { ...t, args: t.args.map(n) };
    t.path.forEach((l) => {
      l != null && l.__callId__ && this.setState(t.storyId, ({ chainedCallIds: u }) => ({ chainedCallIds: new Set(Array.from(u).concat(l.__callId__)) }));
    });
    let s = (l) => {
      if (l instanceof Error) {
        let { name: u, message: c, stack: d, callId: p = t.id } = l, y = { name: u, message: c, stack: d, callId: p };
        if (this.update({ ...i, status: "error", exception: y }), this.setState(t.storyId, (h) => ({ callRefsByResult: new Map([...Array.from(h.callRefsByResult.entries()), [l, { __callId__: t.id, retain: t.retain }]]) })), t.ancestors.length)
          throw Object.prototype.hasOwnProperty.call(l, "callId") || Object.defineProperty(l, "callId", { value: t.id }), l;
        if (l !== ad)
          throw Ry.warn(l), R6;
      }
      throw l;
    };
    try {
      if (r === "played" && !t.retain)
        throw ad;
      let l = (a.getArgs ? a.getArgs(t, this.getState(t.storyId)) : t.args).map((c) => typeof c != "function" || Object.keys(c).length ? c : (...d) => {
        let { cursor: p, ancestors: y } = this.getState(t.storyId);
        this.setState(t.storyId, { cursor: 0, ancestors: [...y, t.id] });
        let h = () => this.setState(t.storyId, { cursor: p, ancestors: y }), b = !1;
        try {
          let R = c(...d);
          return R instanceof Promise ? (b = !0, R.finally(h)) : R;
        } finally {
          b || h();
        }
      }), u = e(...l);
      return u && ["object", "function", "symbol"].includes(typeof u) && this.setState(t.storyId, (c) => ({ callRefsByResult: new Map([...Array.from(c.callRefsByResult.entries()), [u, { __callId__: t.id, retain: t.retain }]]) })), this.update({ ...i, status: u instanceof Promise ? "active" : "done" }), u instanceof Promise ? u.then((c) => (this.update({ ...i, status: "done" }), c), s) : u;
    } catch (l) {
      return s(l);
    }
  }
  update(e) {
    this.channel.emit(he.CALL, e), this.setState(e.storyId, ({ calls: t }) => {
      let a = t.concat(e).reduce((o, r) => Object.assign(o, { [r.id]: r }), {});
      return { calls: Object.values(a).sort((o, r) => o.id.localeCompare(r.id, void 0, { numeric: !0 })) };
    }), this.sync(e.storyId);
  }
  sync(e) {
    let t = () => {
      var u;
      let { isLocked: a, isPlaying: o } = this.getState(e), r = this.getLog(e), n = (u = r.filter(({ ancestors: c }) => !c.length).find((c) => c.status === "waiting")) == null ? void 0 : u.callId, i = r.some((c) => c.status === "active");
      if (a || i || r.length === 0) {
        let c = { controlStates: td, logItems: r };
        this.channel.emit(he.SYNC, c);
        return;
      }
      let s = r.some((c) => c.status === "done" || c.status === "error"), l = { controlStates: { start: s, back: s, goto: !0, next: o, end: o }, logItems: r, pausedAt: n };
      this.channel.emit(he.SYNC, l);
    };
    this.setState(e, ({ syncTimeout: a }) => (clearTimeout(a), { syncTimeout: setTimeout(t, 0) }));
  }
};
function wy(e, t = {}) {
  var a, o, r, n;
  try {
    let i = !1, s = !1;
    return (o = (a = W.window.location) == null ? void 0 : a.search) != null && o.includes("instrument=true") ? i = !0 : (n = (r = W.window.location) == null ? void 0 : r.search) != null && n.includes("instrument=false") && (s = !0), W.window.parent === W.window && !i || s ? e : (W.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ || (W.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new M6()), W.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(e, t));
  } catch (i) {
    return X.warn(i), e;
  }
}
var x6 = Zc.default || Zc, Ka = wy(
  { ...di },
  {
    intercept: (e, t) => t[0] === "fireEvent" || e.startsWith("findBy") || e.startsWith("waitFor")
  }
);
Ka.screen = Object.entries(Ka.screen).reduce(
  (e, [t, a]) => Object.defineProperty(e, t, {
    get() {
      return X.warn(Hy`
          You are using Testing Library's \`screen\` object. Use \`within(canvasElement)\` instead.
          More info: https://storybook.js.org/docs/react/essentials/interactions
        `), a;
    }
  }),
  { ...Ka.screen }
);
var {
  buildQueries: uI,
  configure: cI,
  createEvent: dI,
  findAllByAltText: pI,
  findAllByDisplayValue: fI,
  findAllByLabelText: mI,
  findAllByPlaceholderText: yI,
  findAllByRole: hI,
  findAllByTestId: LI,
  findAllByText: bI,
  findAllByTitle: vI,
  findByAltText: TI,
  findByDisplayValue: AI,
  findByLabelText: gI,
  findByPlaceholderText: SI,
  findByRole: YI,
  findByTestId: RI,
  findByText: EI,
  findByTitle: wI,
  fireEvent: CI,
  getAllByAltText: _I,
  getAllByDisplayValue: PI,
  getAllByLabelText: II,
  getAllByPlaceholderText: FI,
  getAllByRole: OI,
  getAllByTestId: MI,
  getAllByText: xI,
  getAllByTitle: kI,
  getByAltText: NI,
  getByDisplayValue: $I,
  getByLabelText: qI,
  getByPlaceholderText: DI,
  getByRole: BI,
  getByTestId: UI,
  getByText: jI,
  getByTitle: VI,
  getConfig: WI,
  getDefaultNormalizer: HI,
  getElementError: zI,
  getNodeText: GI,
  getQueriesForElement: KI,
  getRoles: JI,
  getSuggestedQuery: XI,
  isInaccessible: QI,
  logDOM: ZI,
  logRoles: eF,
  prettyDOM: tF,
  queries: aF,
  queryAllByAltText: oF,
  queryAllByAttribute: rF,
  queryAllByDisplayValue: nF,
  queryAllByLabelText: iF,
  queryAllByPlaceholderText: lF,
  queryAllByRole: sF,
  queryAllByTestId: uF,
  queryAllByText: cF,
  queryAllByTitle: dF,
  queryByAltText: pF,
  queryByAttribute: fF,
  queryByDisplayValue: mF,
  queryByLabelText: yF,
  queryByPlaceholderText: hF,
  queryByRole: LF,
  queryByTestId: bF,
  queryByText: vF,
  queryByTitle: TF,
  queryHelpers: AF,
  screen: gF,
  waitFor: SF,
  waitForElementToBeRemoved: YF,
  within: Cy,
  prettyFormat: RF
} = Ka, _y = wy(
  { userEvent: x6 },
  { intercept: !0 }
).userEvent;
const EF = {
  title: "Components/Pages/Dashboard",
  component: jy
}, Ia = {
  args: {
    config: A1
  }
}, Fa = {
  args: {
    config: I1
  }
}, Oa = {
  args: {
    config: q1
  }
}, Ma = {
  args: {
    config: G1
  }
}, Py = (e) => new Promise((t) => setTimeout(t, e)), Iy = {
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
  }, {
    matcher: {
      name: "filters",
      url: "path:/api/POC/Filters"
    },
    response: {
      status: 200,
      body: {
        Years: [{
          Year: 1999
        }],
        DataValueTypes: [{
          DataValueType: "Some Data Value Type",
          DataValueTypeId: "dataValueTypeId"
        }],
        StratificationCategories: [{
          StratificationCategoryId: "stratCategoryId",
          StratificationCategory: "Some Strat Category"
        }]
      }
    }
  }, {
    matcher: {
      name: "stratifications",
      url: "path:/api/POC/stratifications"
    },
    response: {
      status: 200,
      body: [{
        StratificationId: "stratId",
        Stratification: "Some Strat"
      }]
    }
  }, {
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
  }]
}, xa = {
  args: {
    config: t1
  },
  parameters: {
    fetchMock: Iy
  },
  play: async ({
    canvasElement: e
  }) => {
    const t = Cy(e), a = _y.setup();
    await Py(1e3);
    const o = t.getByLabelText("Category", {
      selector: "select"
    });
    await a.selectOptions(o, ["topicId"]);
    const r = t.getByLabelText("Indicator", {
      selector: "select"
    });
    await a.selectOptions(r, ["indicatorID"]);
    const n = t.getByLabelText("Year", {
      selector: "select"
    });
    await a.selectOptions(n, ["1999"]);
    const i = t.getByLabelText("View By", {
      selector: "select"
    });
    await a.selectOptions(i, ["stratCategoryId"]);
    const s = t.getByLabelText("Stratification", {
      selector: "select"
    });
    await a.selectOptions(s, ["stratId"]), await a.click(t.getByText("GO!"));
  }
}, ka = {
  args: {
    config: c1
  },
  parameters: {
    fetchMock: Iy
  },
  play: async ({
    canvasElement: e
  }) => {
    const t = Cy(e), a = _y.setup();
    await Py(1e3);
    const o = t.getByLabelText("Location", {
      selector: "select"
    });
    await a.selectOptions(o, ["MS"]);
    const r = t.getByLabelText("Category", {
      selector: "select"
    });
    await a.selectOptions(r, ["topicId"]);
    const n = t.getByLabelText("Indicator", {
      selector: "select"
    });
    await a.selectOptions(n, ["indicatorID"]), await a.click(t.getByText("GO!"));
    const i = t.getByLabelText("Year", {
      selector: "select"
    });
    await a.selectOptions(i, ["1999"]);
  }
};
var nd, id, ld;
Ia.parameters = {
  ...Ia.parameters,
  docs: {
    ...(nd = Ia.parameters) == null ? void 0 : nd.docs,
    source: {
      originalSource: `{
  args: {
    config: ((ExampleConfig_1 as unknown) as Config)
  }
}`,
      ...(ld = (id = Ia.parameters) == null ? void 0 : id.docs) == null ? void 0 : ld.source
    }
  }
};
var sd, ud, cd;
Fa.parameters = {
  ...Fa.parameters,
  docs: {
    ...(sd = Fa.parameters) == null ? void 0 : sd.docs,
    source: {
      originalSource: `{
  args: {
    config: ((ExampleConfig_2 as unknown) as Config)
  }
}`,
      ...(cd = (ud = Fa.parameters) == null ? void 0 : ud.docs) == null ? void 0 : cd.source
    }
  }
};
var dd, pd, fd;
Oa.parameters = {
  ...Oa.parameters,
  docs: {
    ...(dd = Oa.parameters) == null ? void 0 : dd.docs,
    source: {
      originalSource: `{
  args: {
    config: ((ExampleConfig_3 as unknown) as Config)
  }
}`,
      ...(fd = (pd = Oa.parameters) == null ? void 0 : pd.docs) == null ? void 0 : fd.source
    }
  }
};
var md, yd, hd;
Ma.parameters = {
  ...Ma.parameters,
  docs: {
    ...(md = Ma.parameters) == null ? void 0 : md.docs,
    source: {
      originalSource: `{
  args: {
    config: ((Dashboard_Filter as unknown) as Config)
  }
}`,
      ...(hd = (yd = Ma.parameters) == null ? void 0 : yd.docs) == null ? void 0 : hd.source
    }
  }
};
var Ld, bd, vd;
xa.parameters = {
  ...xa.parameters,
  docs: {
    ...(Ld = xa.parameters) == null ? void 0 : Ld.docs,
    source: {
      originalSource: `{
  args: {
    config: ((APIFiltersMapData as unknown) as Config)
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
    await user.selectOptions(yearsFilter, ['1999']);
    const stratCategoryFilter = canvas.getByLabelText('View By', {
      selector: 'select'
    });
    await user.selectOptions(stratCategoryFilter, ['stratCategoryId']);
    const stratFilter = canvas.getByLabelText('Stratification', {
      selector: 'select'
    });
    await user.selectOptions(stratFilter, ['stratId']);
    await user.click(canvas.getByText('GO!'));
  }
}`,
      ...(vd = (bd = xa.parameters) == null ? void 0 : bd.docs) == null ? void 0 : vd.source
    }
  }
};
var Td, Ad, gd;
ka.parameters = {
  ...ka.parameters,
  docs: {
    ...(Td = ka.parameters) == null ? void 0 : Td.docs,
    source: {
      originalSource: `{
  args: {
    config: ((APIFiltersChartData as unknown) as Config)
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
    const yearFilter = canvas.getByLabelText('Year', {
      selector: 'select'
    });
    await user.selectOptions(yearFilter, ['1999']);
  }
}`,
      ...(gd = (Ad = ka.parameters) == null ? void 0 : Ad.docs) == null ? void 0 : gd.source
    }
  }
};
const wF = ["Example_1", "Example_2", "Example_3", "Dashboard_Filters", "APIFiltersMap", "APIFiltersChart"];
export {
  ka as APIFiltersChart,
  xa as APIFiltersMap,
  Ma as Dashboard_Filters,
  Ia as Example_1,
  Fa as Example_2,
  Oa as Example_3,
  wF as __namedExportsOrder,
  EF as default
};
