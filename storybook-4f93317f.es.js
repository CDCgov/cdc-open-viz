import { M as By } from "./storybook-cb81139c.es.js";
import { a as Uy, c as Vl, g as jy } from "./storybook-c5d32002.es.js";
import { d as Vy } from "./storybook-398c73a4.es.js";
import "./storybook-e61d95ab.es.js";
import "./storybook-fa75dc84.es.js";
import "./storybook-e798b70d.es.js";
import "./storybook-b8c9afe4.es.js";
import "./storybook-a2b11335.es.js";
import "./storybook-826feda6.es.js";
import "./storybook-03c45984.es.js";
import "./storybook-76833471.es.js";
import "./storybook-a0c99f4a.es.js";
import "./storybook-441ad5c2.es.js";
import "./storybook-0d7692d1.es.js";
import "./storybook-8d78bf52.es.js";
import "./storybook-c11e9ca9.es.js";
import "./storybook-46a89ba7.es.js";
import "./storybook-b751bff6.es.js";
import "./storybook-bedc547d.es.js";
import "./storybook-24623c03.es.js";
import "./storybook-0b963b46.es.js";
import "./storybook-9c9b89fe.es.js";
import "./storybook-a08d0592.es.js";
import "./storybook-d3e946a2.es.js";
import "./storybook-d535b084.es.js";
import "./storybook-c006040a.es.js";
import "./storybook-96bcff98.es.js";
function Hy(e, t) {
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
const Wy = {
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
}, zy = [
  [
    {
      width: 12,
      widget: "map1"
    }
  ]
], Gy = {
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
}, Ky = "dashboard", Jy = {
  data3: {
    dataUrl: "http://test.gov/api/POC/TableData?DataValueTypeId=CRDMEDN"
  }
}, Xy = "Apply Button", Qy = {}, Zy = 1684783370106, e1 = {
  dashboard: Wy,
  rows: zy,
  visualizations: Gy,
  type: Ky,
  datasets: Jy,
  filterBehavior: Xy,
  runtime: Qy,
  uuid: Zy
}, t1 = {
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
}, a1 = [
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
], o1 = {
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
}, r1 = "dashboard", n1 = {
  data3: {
    dataUrl: "http://test.gov/api/POC/TableData"
  }
}, i1 = "Apply Button", l1 = {}, s1 = 1684783370106, u1 = {
  dashboard: t1,
  rows: a1,
  visualizations: o1,
  type: r1,
  datasets: n1,
  filterBehavior: i1,
  runtime: l1,
  uuid: s1
}, c1 = {
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
}, d1 = [
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
], p1 = {
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
}, f1 = {
  label: "Data Table",
  show: !0
}, m1 = [
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
], y1 = "dashboard_aggregate_example_no_add_fullname.csv", h1 = "file", L1 = "dashboard", v1 = 1628875999137, b1 = {}, A1 = {
  dashboard: c1,
  rows: d1,
  visualizations: p1,
  table: f1,
  data: m1,
  dataFileName: y1,
  dataFileSourceType: h1,
  type: L1,
  uuid: v1,
  runtime: b1
}, T1 = {
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
}, g1 = [
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
], S1 = {
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
}, Y1 = {
  label: "Data Table",
  show: !0
}, R1 = [
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
], w1 = "dashboard_aggregate_example_no_add_fullname.csv", E1 = "file", C1 = "dashboard", _1 = 1628879384203, P1 = {
  dashboard: T1,
  rows: g1,
  visualizations: S1,
  table: Y1,
  data: R1,
  dataFileName: w1,
  dataFileSourceType: E1,
  type: C1,
  uuid: _1
}, F1 = {
  theme: "theme-blue",
  title: "Dashboard with No Filters"
}, I1 = [
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
], O1 = {
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
}, M1 = "dashboard", N1 = 1629144022257, k1 = {
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
}, $1 = {
  dashboard: F1,
  rows: I1,
  visualizations: O1,
  table: x1,
  type: M1,
  uuid: N1,
  datasets: k1
}, q1 = {
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
}, D1 = [
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
], B1 = {
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
}, U1 = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, j1 = {
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
}, V1 = "dashboard", H1 = 1699383537668, W1 = "Filter Change", z1 = {
  dashboard: q1,
  rows: D1,
  visualizations: B1,
  table: U1,
  datasets: j1,
  type: V1,
  uuid: H1,
  filterBehavior: W1
}, G1 = {
  theme: "theme-blue"
}, K1 = [
  [
    {
      width: 12,
      widget: "table1707840146431"
    },
    {},
    {}
  ]
], J1 = {
  table1707840146431: {
    newViz: !0,
    openModal: !1,
    uid: "table1707840146431",
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
}, X1 = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Q1 = !0, Z1 = {
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
}, e0 = "dashboard", t0 = {}, a0 = {
  dashboard: G1,
  rows: K1,
  visualizations: J1,
  table: X1,
  newViz: Q1,
  datasets: Z1,
  type: e0,
  runtime: t0
};
var Ae = {}, Hl = { exports: {} };
Hl.exports;
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
})(Hl);
var wd = Hl.exports, ge = {};
Object.defineProperty(ge, "__esModule", {
  value: !0
});
ge.printIteratorEntries = r0;
ge.printIteratorValues = n0;
ge.printListItems = i0;
ge.printObjectProperties = l0;
const o0 = (e, t) => {
  const a = Object.keys(e).sort(t);
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((o) => {
    Object.getOwnPropertyDescriptor(e, o).enumerable && a.push(o);
  }), a;
};
function r0(e, t, a, o, r, n, i = ": ") {
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
function n0(e, t, a, o, r, n) {
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
function i0(e, t, a, o, r, n) {
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
function l0(e, t, a, o, r, n) {
  let i = "";
  const s = o0(e, t.compareKeys);
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
var ke = {};
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.test = ke.serialize = ke.default = void 0;
var Fs = ge, Ga = function() {
  return typeof globalThis < "u" ? globalThis : typeof Ga < "u" ? Ga : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), fi = Ga["jest-symbol-do-not-touch"] || Ga.Symbol;
const s0 = typeof fi == "function" && fi.for ? fi.for("jest.asymmetricMatcher") : 1267621, ha = " ", Ed = (e, t, a, o, r, n) => {
  const i = e.toString();
  return i === "ArrayContaining" || i === "ArrayNotContaining" ? ++o > t.maxDepth ? "[" + i + "]" : i + ha + "[" + (0, Fs.printListItems)(
    e.sample,
    t,
    a,
    o,
    r,
    n
  ) + "]" : i === "ObjectContaining" || i === "ObjectNotContaining" ? ++o > t.maxDepth ? "[" + i + "]" : i + ha + "{" + (0, Fs.printObjectProperties)(
    e.sample,
    t,
    a,
    o,
    r,
    n
  ) + "}" : i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining" ? i + ha + n(e.sample, t, a, o, r) : e.toAsymmetricMatcher();
};
ke.serialize = Ed;
const Cd = (e) => e && e.$$typeof === s0;
ke.test = Cd;
const u0 = {
  serialize: Ed,
  test: Cd
};
var c0 = u0;
ke.default = c0;
var $e = {}, d0 = ({ onlyFirst: e = !1 } = {}) => {
  const t = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(t, e ? void 0 : "g");
};
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.test = $e.serialize = $e.default = void 0;
var _d = Pd(d0), k = Pd(wd);
function Pd(e) {
  return e && e.__esModule ? e : { default: e };
}
const p0 = (e) => e.replace((0, _d.default)(), (t) => {
  switch (t) {
    case k.default.red.close:
    case k.default.green.close:
    case k.default.cyan.close:
    case k.default.gray.close:
    case k.default.white.close:
    case k.default.yellow.close:
    case k.default.bgRed.close:
    case k.default.bgGreen.close:
    case k.default.bgYellow.close:
    case k.default.inverse.close:
    case k.default.dim.close:
    case k.default.bold.close:
    case k.default.reset.open:
    case k.default.reset.close:
      return "</>";
    case k.default.red.open:
      return "<red>";
    case k.default.green.open:
      return "<green>";
    case k.default.cyan.open:
      return "<cyan>";
    case k.default.gray.open:
      return "<gray>";
    case k.default.white.open:
      return "<white>";
    case k.default.yellow.open:
      return "<yellow>";
    case k.default.bgRed.open:
      return "<bgRed>";
    case k.default.bgGreen.open:
      return "<bgGreen>";
    case k.default.bgYellow.open:
      return "<bgYellow>";
    case k.default.inverse.open:
      return "<inverse>";
    case k.default.dim.open:
      return "<dim>";
    case k.default.bold.open:
      return "<bold>";
    default:
      return "";
  }
}), Fd = (e) => typeof e == "string" && !!e.match((0, _d.default)());
$e.test = Fd;
const Id = (e, t, a, o, r, n) => n(p0(e), t, a, o, r);
$e.serialize = Id;
const f0 = {
  serialize: Id,
  test: Fd
};
var m0 = f0;
$e.default = m0;
var qe = {};
Object.defineProperty(qe, "__esModule", {
  value: !0
});
qe.test = qe.serialize = qe.default = void 0;
var Is = ge;
const y0 = " ", Od = ["DOMStringMap", "NamedNodeMap"], h0 = /^(HTML\w*Collection|NodeList)$/, L0 = (e) => Od.indexOf(e) !== -1 || h0.test(e), xd = (e) => e && e.constructor && !!e.constructor.name && L0(e.constructor.name);
qe.test = xd;
const v0 = (e) => e.constructor.name === "NamedNodeMap", Md = (e, t, a, o, r, n) => {
  const i = e.constructor.name;
  return ++o > t.maxDepth ? "[" + i + "]" : (t.min ? "" : i + y0) + (Od.indexOf(i) !== -1 ? "{" + (0, Is.printObjectProperties)(
    v0(e) ? Array.from(e).reduce((s, l) => (s[l.name] = l.value, s), {}) : { ...e },
    t,
    a,
    o,
    r,
    n
  ) + "}" : "[" + (0, Is.printListItems)(
    Array.from(e),
    t,
    a,
    o,
    r,
    n
  ) + "]");
};
qe.serialize = Md;
const b0 = {
  serialize: Md,
  test: xd
};
var A0 = b0;
qe.default = A0;
var De = {}, W = {}, Wl = {};
Object.defineProperty(Wl, "__esModule", {
  value: !0
});
Wl.default = T0;
function T0(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(W, "__esModule", {
  value: !0
});
W.printText = W.printProps = W.printElementAsLeaf = W.printElement = W.printComment = W.printChildren = void 0;
var Nd = g0(Wl);
function g0(e) {
  return e && e.__esModule ? e : { default: e };
}
const S0 = (e, t, a, o, r, n, i) => {
  const s = o + a.indent, l = a.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, a, s, r, n);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = a.spacingOuter + s + d + a.spacingOuter + o), d = "{" + d + "}"), a.spacingInner + o + l.prop.open + u + l.prop.close + "=" + l.value.open + d + l.value.close;
  }).join("");
};
W.printProps = S0;
const Y0 = (e, t, a, o, r, n) => e.map(
  (i) => t.spacingOuter + a + (typeof i == "string" ? kd(i, t) : n(i, t, a, o, r))
).join("");
W.printChildren = Y0;
const kd = (e, t) => {
  const a = t.colors.content;
  return a.open + (0, Nd.default)(e) + a.close;
};
W.printText = kd;
const R0 = (e, t) => {
  const a = t.colors.comment;
  return a.open + "<!--" + (0, Nd.default)(e) + "-->" + a.close;
};
W.printComment = R0;
const w0 = (e, t, a, o, r) => {
  const n = o.colors.tag;
  return n.open + "<" + e + (t && n.close + t + o.spacingOuter + r + n.open) + (a ? ">" + n.close + a + o.spacingOuter + r + n.open + "</" + e : (t && !o.min ? "" : " ") + "/") + ">" + n.close;
};
W.printElement = w0;
const E0 = (e, t) => {
  const a = t.colors.tag;
  return a.open + "<" + e + a.close + " …" + a.open + " />" + a.close;
};
W.printElementAsLeaf = E0;
Object.defineProperty(De, "__esModule", {
  value: !0
});
De.test = De.serialize = De.default = void 0;
var ct = W;
const C0 = 1, $d = 3, qd = 8, Dd = 11, _0 = /^((HTML|SVG)\w*)?Element$/, P0 = (e) => {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}, F0 = (e) => {
  const t = e.constructor.name, { nodeType: a, tagName: o } = e, r = typeof o == "string" && o.includes("-") || P0(e);
  return a === C0 && (_0.test(t) || r) || a === $d && t === "Text" || a === qd && t === "Comment" || a === Dd && t === "DocumentFragment";
}, Bd = (e) => {
  var t;
  return (e == null || (t = e.constructor) === null || t === void 0 ? void 0 : t.name) && F0(e);
};
De.test = Bd;
function I0(e) {
  return e.nodeType === $d;
}
function O0(e) {
  return e.nodeType === qd;
}
function mi(e) {
  return e.nodeType === Dd;
}
const Ud = (e, t, a, o, r, n) => {
  if (I0(e))
    return (0, ct.printText)(e.data, t);
  if (O0(e))
    return (0, ct.printComment)(e.data, t);
  const i = mi(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++o > t.maxDepth ? (0, ct.printElementAsLeaf)(i, t) : (0, ct.printElement)(
    i,
    (0, ct.printProps)(
      mi(e) ? [] : Array.from(e.attributes).map((s) => s.name).sort(),
      mi(e) ? {} : Array.from(e.attributes).reduce((s, l) => (s[l.name] = l.value, s), {}),
      t,
      a + t.indent,
      o,
      r,
      n
    ),
    (0, ct.printChildren)(
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
De.serialize = Ud;
const x0 = {
  serialize: Ud,
  test: Bd
};
var M0 = x0;
De.default = M0;
var Be = {};
Object.defineProperty(Be, "__esModule", {
  value: !0
});
Be.test = Be.serialize = Be.default = void 0;
var Zt = ge;
const N0 = "@@__IMMUTABLE_ITERABLE__@@", k0 = "@@__IMMUTABLE_LIST__@@", $0 = "@@__IMMUTABLE_KEYED__@@", q0 = "@@__IMMUTABLE_MAP__@@", Os = "@@__IMMUTABLE_ORDERED__@@", D0 = "@@__IMMUTABLE_RECORD__@@", B0 = "@@__IMMUTABLE_SEQ__@@", U0 = "@@__IMMUTABLE_SET__@@", j0 = "@@__IMMUTABLE_STACK__@@", St = (e) => "Immutable." + e, bo = (e) => "[" + e + "]", ea = " ", xs = "…", V0 = (e, t, a, o, r, n, i) => ++o > t.maxDepth ? bo(St(i)) : St(i) + ea + "{" + (0, Zt.printIteratorEntries)(
  e.entries(),
  t,
  a,
  o,
  r,
  n
) + "}";
function H0(e) {
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
const W0 = (e, t, a, o, r, n) => {
  const i = St(e._name || "Record");
  return ++o > t.maxDepth ? bo(i) : i + ea + "{" + (0, Zt.printIteratorEntries)(
    H0(e),
    t,
    a,
    o,
    r,
    n
  ) + "}";
}, z0 = (e, t, a, o, r, n) => {
  const i = St("Seq");
  return ++o > t.maxDepth ? bo(i) : e[$0] ? i + ea + "{" + // from Immutable collection of entries or from ECMAScript object
  (e._iter || e._object ? (0, Zt.printIteratorEntries)(
    e.entries(),
    t,
    a,
    o,
    r,
    n
  ) : xs) + "}" : i + ea + "[" + (e._iter || // from Immutable collection of values
  e._array || // from ECMAScript array
  e._collection || // from ECMAScript collection in immutable v4
  e._iterable ? (0, Zt.printIteratorValues)(
    e.values(),
    t,
    a,
    o,
    r,
    n
  ) : xs) + "]";
}, yi = (e, t, a, o, r, n, i) => ++o > t.maxDepth ? bo(St(i)) : St(i) + ea + "[" + (0, Zt.printIteratorValues)(
  e.values(),
  t,
  a,
  o,
  r,
  n
) + "]", jd = (e, t, a, o, r, n) => e[q0] ? V0(
  e,
  t,
  a,
  o,
  r,
  n,
  e[Os] ? "OrderedMap" : "Map"
) : e[k0] ? yi(
  e,
  t,
  a,
  o,
  r,
  n,
  "List"
) : e[U0] ? yi(
  e,
  t,
  a,
  o,
  r,
  n,
  e[Os] ? "OrderedSet" : "Set"
) : e[j0] ? yi(
  e,
  t,
  a,
  o,
  r,
  n,
  "Stack"
) : e[B0] ? z0(e, t, a, o, r, n) : W0(e, t, a, o, r, n);
Be.serialize = jd;
const Vd = (e) => e && (e[N0] === !0 || e[D0] === !0);
Be.test = Vd;
const G0 = {
  serialize: jd,
  test: Vd
};
var K0 = G0;
Be.default = K0;
var Ue = {}, el = { exports: {} }, M = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ms;
function J0() {
  if (Ms)
    return M;
  Ms = 1;
  var e = 60103, t = 60106, a = 60107, o = 60108, r = 60114, n = 60109, i = 60110, s = 60112, l = 60113, u = 60120, c = 60115, d = 60116, p = 60121, y = 60122, h = 60117, v = 60129, R = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var f = Symbol.for;
    e = f("react.element"), t = f("react.portal"), a = f("react.fragment"), o = f("react.strict_mode"), r = f("react.profiler"), n = f("react.provider"), i = f("react.context"), s = f("react.forward_ref"), l = f("react.suspense"), u = f("react.suspense_list"), c = f("react.memo"), d = f("react.lazy"), p = f("react.block"), y = f("react.server.block"), h = f("react.fundamental"), v = f("react.debug_trace_mode"), R = f("react.legacy_hidden");
  }
  function T(g) {
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
  var Y = n, S = e, w = s, m = a, L = d, A = c, x = t, D = r, q = o, B = l;
  return M.ContextConsumer = i, M.ContextProvider = Y, M.Element = S, M.ForwardRef = w, M.Fragment = m, M.Lazy = L, M.Memo = A, M.Portal = x, M.Profiler = D, M.StrictMode = q, M.Suspense = B, M.isAsyncMode = function() {
    return !1;
  }, M.isConcurrentMode = function() {
    return !1;
  }, M.isContextConsumer = function(g) {
    return T(g) === i;
  }, M.isContextProvider = function(g) {
    return T(g) === n;
  }, M.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, M.isForwardRef = function(g) {
    return T(g) === s;
  }, M.isFragment = function(g) {
    return T(g) === a;
  }, M.isLazy = function(g) {
    return T(g) === d;
  }, M.isMemo = function(g) {
    return T(g) === c;
  }, M.isPortal = function(g) {
    return T(g) === t;
  }, M.isProfiler = function(g) {
    return T(g) === r;
  }, M.isStrictMode = function(g) {
    return T(g) === o;
  }, M.isSuspense = function(g) {
    return T(g) === l;
  }, M.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === a || g === r || g === v || g === o || g === l || g === u || g === R || typeof g == "object" && g !== null && (g.$$typeof === d || g.$$typeof === c || g.$$typeof === n || g.$$typeof === i || g.$$typeof === s || g.$$typeof === h || g.$$typeof === p || g[0] === y);
  }, M.typeOf = T, M;
}
var N = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ns;
function X0() {
  return Ns || (Ns = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, a = 60107, o = 60108, r = 60114, n = 60109, i = 60110, s = 60112, l = 60113, u = 60120, c = 60115, d = 60116, p = 60121, y = 60122, h = 60117, v = 60129, R = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var f = Symbol.for;
      e = f("react.element"), t = f("react.portal"), a = f("react.fragment"), o = f("react.strict_mode"), r = f("react.profiler"), n = f("react.provider"), i = f("react.context"), s = f("react.forward_ref"), l = f("react.suspense"), u = f("react.suspense_list"), c = f("react.memo"), d = f("react.lazy"), p = f("react.block"), y = f("react.server.block"), h = f("react.fundamental"), f("react.scope"), f("react.opaque.id"), v = f("react.debug_trace_mode"), f("react.offscreen"), R = f("react.legacy_hidden");
    }
    var T = !1;
    function Y(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === a || E === r || E === v || E === o || E === l || E === u || E === R || T || typeof E == "object" && E !== null && (E.$$typeof === d || E.$$typeof === c || E.$$typeof === n || E.$$typeof === i || E.$$typeof === s || E.$$typeof === h || E.$$typeof === p || E[0] === y));
    }
    function S(E) {
      if (typeof E == "object" && E !== null) {
        var pi = E.$$typeof;
        switch (pi) {
          case e:
            var ya = E.type;
            switch (ya) {
              case a:
              case r:
              case o:
              case l:
              case u:
                return ya;
              default:
                var Ps = ya && ya.$$typeof;
                switch (Ps) {
                  case i:
                  case s:
                  case d:
                  case c:
                  case n:
                    return Ps;
                  default:
                    return pi;
                }
            }
          case t:
            return pi;
        }
      }
    }
    var w = i, m = n, L = e, A = s, x = a, D = d, q = c, B = t, g = r, C = o, O = l, U = !1, Z = !1;
    function Ke(E) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function di(E) {
      return Z || (Z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Py(E) {
      return S(E) === i;
    }
    function Fy(E) {
      return S(E) === n;
    }
    function Iy(E) {
      return typeof E == "object" && E !== null && E.$$typeof === e;
    }
    function Oy(E) {
      return S(E) === s;
    }
    function xy(E) {
      return S(E) === a;
    }
    function My(E) {
      return S(E) === d;
    }
    function Ny(E) {
      return S(E) === c;
    }
    function ky(E) {
      return S(E) === t;
    }
    function $y(E) {
      return S(E) === r;
    }
    function qy(E) {
      return S(E) === o;
    }
    function Dy(E) {
      return S(E) === l;
    }
    N.ContextConsumer = w, N.ContextProvider = m, N.Element = L, N.ForwardRef = A, N.Fragment = x, N.Lazy = D, N.Memo = q, N.Portal = B, N.Profiler = g, N.StrictMode = C, N.Suspense = O, N.isAsyncMode = Ke, N.isConcurrentMode = di, N.isContextConsumer = Py, N.isContextProvider = Fy, N.isElement = Iy, N.isForwardRef = Oy, N.isFragment = xy, N.isLazy = My, N.isMemo = Ny, N.isPortal = ky, N.isProfiler = $y, N.isStrictMode = qy, N.isSuspense = Dy, N.isValidElementType = Y, N.typeOf = S;
  }()), N;
}
process.env.NODE_ENV === "production" ? el.exports = J0() : el.exports = X0();
var Q0 = el.exports;
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.test = Ue.serialize = Ue.default = void 0;
var Xe = Z0(Q0), La = W;
function Hd(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
  return (Hd = function(o) {
    return o ? a : t;
  })(e);
}
function Z0(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var a = Hd(t);
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
const Wd = (e, t = []) => (Array.isArray(e) ? e.forEach((a) => {
  Wd(a, t);
}) : e != null && e !== !1 && t.push(e), t), ks = (e) => {
  const t = e.type;
  if (typeof t == "string")
    return t;
  if (typeof t == "function")
    return t.displayName || t.name || "Unknown";
  if (Xe.isFragment(e))
    return "React.Fragment";
  if (Xe.isSuspense(e))
    return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (Xe.isContextProvider(e))
      return "Context.Provider";
    if (Xe.isContextConsumer(e))
      return "Context.Consumer";
    if (Xe.isForwardRef(e)) {
      if (t.displayName)
        return t.displayName;
      const a = t.render.displayName || t.render.name || "";
      return a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef";
    }
    if (Xe.isMemo(e)) {
      const a = t.displayName || t.type.displayName || t.type.name || "";
      return a !== "" ? "Memo(" + a + ")" : "Memo";
    }
  }
  return "UNDEFINED";
}, e2 = (e) => {
  const { props: t } = e;
  return Object.keys(t).filter((a) => a !== "children" && t[a] !== void 0).sort();
}, zd = (e, t, a, o, r, n) => ++o > t.maxDepth ? (0, La.printElementAsLeaf)(ks(e), t) : (0, La.printElement)(
  ks(e),
  (0, La.printProps)(
    e2(e),
    e.props,
    t,
    a + t.indent,
    o,
    r,
    n
  ),
  (0, La.printChildren)(
    Wd(e.props.children),
    t,
    a + t.indent,
    o,
    r,
    n
  ),
  t,
  a
);
Ue.serialize = zd;
const Gd = (e) => e != null && Xe.isElement(e);
Ue.test = Gd;
const t2 = {
  serialize: zd,
  test: Gd
};
var a2 = t2;
Ue.default = a2;
var je = {};
Object.defineProperty(je, "__esModule", {
  value: !0
});
je.test = je.serialize = je.default = void 0;
var va = W, Ka = function() {
  return typeof globalThis < "u" ? globalThis : typeof Ka < "u" ? Ka : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
}(), hi = Ka["jest-symbol-do-not-touch"] || Ka.Symbol;
const o2 = typeof hi == "function" && hi.for ? hi.for("react.test.json") : 245830487, r2 = (e) => {
  const { props: t } = e;
  return t ? Object.keys(t).filter((a) => t[a] !== void 0).sort() : [];
}, Kd = (e, t, a, o, r, n) => ++o > t.maxDepth ? (0, va.printElementAsLeaf)(e.type, t) : (0, va.printElement)(
  e.type,
  e.props ? (0, va.printProps)(
    r2(e),
    e.props,
    t,
    a + t.indent,
    o,
    r,
    n
  ) : "",
  e.children ? (0, va.printChildren)(
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
je.serialize = Kd;
const Jd = (e) => e && e.$$typeof === o2;
je.test = Jd;
const n2 = {
  serialize: Kd,
  test: Jd
};
var i2 = n2;
je.default = i2;
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
var Xd = Ae.default = ip = Ae.DEFAULT_OPTIONS = void 0, Qd = Ae.format = cp, zl = Ae.plugins = void 0, l2 = ze(wd), Dt = ge, s2 = ze(
  ke
), u2 = ze($e), c2 = ze(qe), d2 = ze(De), p2 = ze(Be), f2 = ze(Ue), m2 = ze(
  je
);
function ze(e) {
  return e && e.__esModule ? e : { default: e };
}
const Zd = Object.prototype.toString, y2 = Date.prototype.toISOString, h2 = Error.prototype.toString, $s = RegExp.prototype.toString, Li = (e) => typeof e.constructor == "function" && e.constructor.name || "Object", L2 = (e) => typeof window < "u" && e === window, v2 = /^Symbol\((.*)\)(.*)$/, b2 = /\n/gi;
class ep extends Error {
  constructor(t, a) {
    super(t), this.stack = a, this.name = this.constructor.name;
  }
}
function A2(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function T2(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function g2(e) {
  return `${e}n`;
}
function qs(e, t) {
  return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]";
}
function Ds(e) {
  return String(e).replace(v2, "Symbol($1)");
}
function Bs(e) {
  return "[" + h2.call(e) + "]";
}
function tp(e, t, a, o) {
  if (e === !0 || e === !1)
    return "" + e;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const r = typeof e;
  if (r === "number")
    return T2(e);
  if (r === "bigint")
    return g2(e);
  if (r === "string")
    return o ? '"' + e.replace(/"|\\/g, "\\$&") + '"' : '"' + e + '"';
  if (r === "function")
    return qs(e, t);
  if (r === "symbol")
    return Ds(e);
  const n = Zd.call(e);
  return n === "[object WeakMap]" ? "WeakMap {}" : n === "[object WeakSet]" ? "WeakSet {}" : n === "[object Function]" || n === "[object GeneratorFunction]" ? qs(e, t) : n === "[object Symbol]" ? Ds(e) : n === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : y2.call(e) : n === "[object Error]" ? Bs(e) : n === "[object RegExp]" ? a ? $s.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : $s.call(e) : e instanceof Error ? Bs(e) : null;
}
function ap(e, t, a, o, r, n) {
  if (r.indexOf(e) !== -1)
    return "[Circular]";
  r = r.slice(), r.push(e);
  const i = ++o > t.maxDepth, s = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !n)
    return _e(e.toJSON(), t, a, o, r, !0);
  const l = Zd.call(e);
  return l === "[object Arguments]" ? i ? "[Arguments]" : (s ? "" : "Arguments ") + "[" + (0, Dt.printListItems)(
    e,
    t,
    a,
    o,
    r,
    _e
  ) + "]" : A2(l) ? i ? "[" + e.constructor.name + "]" : (s || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : e.constructor.name + " ") + "[" + (0, Dt.printListItems)(
    e,
    t,
    a,
    o,
    r,
    _e
  ) + "]" : l === "[object Map]" ? i ? "[Map]" : "Map {" + (0, Dt.printIteratorEntries)(
    e.entries(),
    t,
    a,
    o,
    r,
    _e,
    " => "
  ) + "}" : l === "[object Set]" ? i ? "[Set]" : "Set {" + (0, Dt.printIteratorValues)(
    e.values(),
    t,
    a,
    o,
    r,
    _e
  ) + "}" : i || L2(e) ? "[" + Li(e) + "]" : (s || !t.printBasicPrototype && Li(e) === "Object" ? "" : Li(e) + " ") + "{" + (0, Dt.printObjectProperties)(
    e,
    t,
    a,
    o,
    r,
    _e
  ) + "}";
}
function S2(e) {
  return e.serialize != null;
}
function op(e, t, a, o, r, n) {
  let i;
  try {
    i = S2(e) ? e.serialize(t, a, o, r, n, _e) : e.print(
      t,
      (s) => _e(s, a, o, r, n),
      (s) => {
        const l = o + a.indent;
        return l + s.replace(b2, `
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
    throw new ep(s.message, s.stack);
  }
  if (typeof i != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`
    );
  return i;
}
function rp(e, t) {
  for (let a = 0; a < e.length; a++)
    try {
      if (e[a].test(t))
        return e[a];
    } catch (o) {
      throw new ep(o.message, o.stack);
    }
  return null;
}
function _e(e, t, a, o, r, n) {
  const i = rp(t.plugins, e);
  if (i !== null)
    return op(i, e, t, a, o, r);
  const s = tp(
    e,
    t.printFunctionName,
    t.escapeRegex,
    t.escapeString
  );
  return s !== null ? s : ap(
    e,
    t,
    a,
    o,
    r,
    n
  );
}
const Gl = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, np = Object.keys(Gl), ie = {
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
  theme: Gl
};
var ip = Ae.DEFAULT_OPTIONS = ie;
function Y2(e) {
  if (Object.keys(e).forEach((t) => {
    if (!ie.hasOwnProperty(t))
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
const R2 = (e) => np.reduce((t, a) => {
  const o = e.theme && e.theme[a] !== void 0 ? e.theme[a] : Gl[a], r = o && l2.default[o];
  if (r && typeof r.close == "string" && typeof r.open == "string")
    t[a] = r;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${a}" whose value "${o}" is undefined in ansi-styles.`
    );
  return t;
}, /* @__PURE__ */ Object.create(null)), w2 = () => np.reduce((e, t) => (e[t] = {
  close: "",
  open: ""
}, e), /* @__PURE__ */ Object.create(null)), lp = (e) => e && e.printFunctionName !== void 0 ? e.printFunctionName : ie.printFunctionName, sp = (e) => e && e.escapeRegex !== void 0 ? e.escapeRegex : ie.escapeRegex, up = (e) => e && e.escapeString !== void 0 ? e.escapeString : ie.escapeString, Us = (e) => {
  var t;
  return {
    callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : ie.callToJSON,
    colors: e && e.highlight ? R2(e) : w2(),
    compareKeys: e && typeof e.compareKeys == "function" ? e.compareKeys : ie.compareKeys,
    escapeRegex: sp(e),
    escapeString: up(e),
    indent: e && e.min ? "" : E2(
      e && e.indent !== void 0 ? e.indent : ie.indent
    ),
    maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : ie.maxDepth,
    min: e && e.min !== void 0 ? e.min : ie.min,
    plugins: e && e.plugins !== void 0 ? e.plugins : ie.plugins,
    printBasicPrototype: (t = e == null ? void 0 : e.printBasicPrototype) !== null && t !== void 0 ? t : !0,
    printFunctionName: lp(e),
    spacingInner: e && e.min ? " " : `
`,
    spacingOuter: e && e.min ? "" : `
`
  };
};
function E2(e) {
  return new Array(e + 1).join(" ");
}
function cp(e, t) {
  if (t && (Y2(t), t.plugins)) {
    const o = rp(t.plugins, e);
    if (o !== null)
      return op(o, e, Us(t), "", 0, []);
  }
  const a = tp(
    e,
    lp(t),
    sp(t),
    up(t)
  );
  return a !== null ? a : ap(e, Us(t), "", 0, []);
}
const C2 = {
  AsymmetricMatcher: s2.default,
  ConvertAnsi: u2.default,
  DOMCollection: c2.default,
  DOMElement: d2.default,
  Immutable: p2.default,
  ReactElement: f2.default,
  ReactTestComponent: m2.default
};
zl = Ae.plugins = C2;
var _2 = cp;
Xd = Ae.default = _2;
const P2 = /* @__PURE__ */ Hy({
  __proto__: null,
  get DEFAULT_OPTIONS() {
    return ip;
  },
  get default() {
    return Xd;
  },
  format: Qd,
  get plugins() {
    return zl;
  }
}, [Ae]);
var F2 = Object.prototype.toString;
function js(e) {
  return typeof e == "function" || F2.call(e) === "[object Function]";
}
function I2(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var O2 = Math.pow(2, 53) - 1;
function x2(e) {
  var t = I2(e);
  return Math.min(Math.max(t, 0), O2);
}
function le(e, t) {
  var a = Array, o = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  if (typeof t < "u" && !js(t))
    throw new TypeError("Array.from: when provided, the second argument must be a function");
  for (var r = x2(o.length), n = js(a) ? Object(new a(r)) : new Array(r), i = 0, s; i < r; )
    s = o[i], t ? n[i] = t(s, i) : n[i] = s, i += 1;
  return n.length = r, n;
}
function ta(e) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e);
}
function M2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vs(e, t) {
  for (var a = 0; a < t.length; a++) {
    var o = t[a];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, dp(o.key), o);
  }
}
function N2(e, t, a) {
  return t && Vs(e.prototype, t), a && Vs(e, a), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function k2(e, t, a) {
  return t = dp(t), t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
function dp(e) {
  var t = $2(e, "string");
  return ta(t) === "symbol" ? t : String(t);
}
function $2(e, t) {
  if (ta(e) !== "object" || e === null)
    return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var o = a.call(e, t || "default");
    if (ta(o) !== "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var q2 = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    M2(this, e), k2(this, "items", void 0), this.items = t;
  }
  return N2(e, [{
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
const D2 = typeof Set > "u" ? Set : q2;
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
var B2 = {
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
}, U2 = {
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
function j2(e, t) {
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
    return e.hasAttribute(a) && !((o = U2[t]) !== null && o !== void 0 && o.has(a));
  });
}
function pp(e, t) {
  return j2(e, t);
}
function V2(e) {
  var t = W2(e);
  if (t === null || t === "presentation") {
    var a = H2(e);
    if (t !== "presentation" || pp(e, a || ""))
      return a;
  }
  return t;
}
function H2(e) {
  var t = B2[z(e)];
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
      return e.getAttribute("alt") === "" && !pp(e, "img") ? "presentation" : "img";
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
function W2(e) {
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
function fp(e) {
  return $(e) && z(e) === "caption";
}
function Ma(e) {
  return $(e) && z(e) === "input";
}
function z2(e) {
  return $(e) && z(e) === "optgroup";
}
function G2(e) {
  return $(e) && z(e) === "select";
}
function K2(e) {
  return $(e) && z(e) === "table";
}
function J2(e) {
  return $(e) && z(e) === "textarea";
}
function X2(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument, a = t.defaultView;
  if (a === null)
    throw new TypeError("no window available");
  return a;
}
function Q2(e) {
  return $(e) && z(e) === "fieldset";
}
function Z2(e) {
  return $(e) && z(e) === "legend";
}
function eh(e) {
  return $(e) && z(e) === "slot";
}
function th(e) {
  return $(e) && e.ownerSVGElement !== void 0;
}
function ah(e) {
  return $(e) && z(e) === "svg";
}
function oh(e) {
  return th(e) && z(e) === "title";
}
function Ja(e, t) {
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
  return $(e) ? t.indexOf(V2(e)) !== -1 : !1;
}
function rh(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function nh(e, t) {
  if (!$(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var a = t(e);
  return a.getPropertyValue("display") === "none" || a.getPropertyValue("visibility") === "hidden";
}
function ih(e) {
  return Le(e, ["button", "combobox", "listbox", "textbox"]) || mp(e, "range");
}
function mp(e, t) {
  if (!$(e))
    return !1;
  switch (t) {
    case "range":
      return Le(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function Hs(e, t) {
  var a = le(e.querySelectorAll(t));
  return Ja(e, "aria-owns").forEach(function(o) {
    a.push.apply(a, le(o.querySelectorAll(t)));
  }), a;
}
function lh(e) {
  return G2(e) ? e.selectedOptions || Hs(e, "[selected]") : Hs(e, '[aria-selected="true"]');
}
function sh(e) {
  return Le(e, ["none", "presentation"]);
}
function uh(e) {
  return fp(e);
}
function ch(e) {
  return Le(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function dh(e) {
  return !1;
}
function ph(e) {
  return Ma(e) || J2(e) ? e.value : e.textContent || "";
}
function Ws(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function yp(e) {
  var t = z(e);
  return t === "button" || t === "input" && e.getAttribute("type") !== "hidden" || t === "meter" || t === "output" || t === "progress" || t === "select" || t === "textarea";
}
function hp(e) {
  if (yp(e))
    return e;
  var t = null;
  return e.childNodes.forEach(function(a) {
    if (t === null && $(a)) {
      var o = hp(a);
      o !== null && (t = o);
    }
  }), t;
}
function fh(e) {
  if (e.control !== void 0)
    return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : hp(e);
}
function mh(e) {
  var t = e.labels;
  if (t === null)
    return t;
  if (t !== void 0)
    return le(t);
  if (!yp(e))
    return null;
  var a = e.ownerDocument;
  return le(a.querySelectorAll("label")).filter(function(o) {
    return fh(o) === e;
  });
}
function yh(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? le(e.childNodes) : t;
}
function Lp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = new D2(), o = X2(e), r = t.compute, n = r === void 0 ? "name" : r, i = t.computedStyleSupportsPseudoElements, s = i === void 0 ? t.getComputedStyle !== void 0 : i, l = t.getComputedStyle, u = l === void 0 ? o.getComputedStyle.bind(o) : l, c = t.hidden, d = c === void 0 ? !1 : c;
  function p(f, T) {
    var Y = "";
    if ($(f) && s) {
      var S = u(f, "::before"), w = Ws(S);
      Y = "".concat(w, " ").concat(Y);
    }
    var m = eh(f) ? yh(f) : le(f.childNodes).concat(Ja(f, "aria-owns"));
    if (m.forEach(function(x) {
      var D = R(x, {
        isEmbeddedInLabel: T.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), q = $(x) ? u(x).getPropertyValue("display") : "inline", B = q !== "inline" ? " " : "";
      Y += "".concat(B).concat(D).concat(B);
    }), $(f) && s) {
      var L = u(f, "::after"), A = Ws(L);
      Y = "".concat(Y, " ").concat(A);
    }
    return Y.trim();
  }
  function y(f, T) {
    var Y = f.getAttributeNode(T);
    return Y !== null && !a.has(Y) && Y.value.trim() !== "" ? (a.add(Y), Y.value) : null;
  }
  function h(f) {
    return $(f) ? y(f, "title") : null;
  }
  function v(f) {
    if (!$(f))
      return null;
    if (Q2(f)) {
      a.add(f);
      for (var T = le(f.childNodes), Y = 0; Y < T.length; Y += 1) {
        var S = T[Y];
        if (Z2(S))
          return R(S, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (K2(f)) {
      a.add(f);
      for (var w = le(f.childNodes), m = 0; m < w.length; m += 1) {
        var L = w[m];
        if (fp(L))
          return R(L, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (ah(f)) {
      a.add(f);
      for (var A = le(f.childNodes), x = 0; x < A.length; x += 1) {
        var D = A[x];
        if (oh(D))
          return D.textContent;
      }
      return null;
    } else if (z(f) === "img" || z(f) === "area") {
      var q = y(f, "alt");
      if (q !== null)
        return q;
    } else if (z2(f)) {
      var B = y(f, "label");
      if (B !== null)
        return B;
    }
    if (Ma(f) && (f.type === "button" || f.type === "submit" || f.type === "reset")) {
      var g = y(f, "value");
      if (g !== null)
        return g;
      if (f.type === "submit")
        return "Submit";
      if (f.type === "reset")
        return "Reset";
    }
    var C = mh(f);
    if (C !== null && C.length !== 0)
      return a.add(f), le(C).map(function(Ke) {
        return R(Ke, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(Ke) {
        return Ke.length > 0;
      }).join(" ");
    if (Ma(f) && f.type === "image") {
      var O = y(f, "alt");
      if (O !== null)
        return O;
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
  function R(f, T) {
    if (a.has(f))
      return "";
    if (!d && nh(f, u) && !T.isReferenced)
      return a.add(f), "";
    var Y = $(f) ? f.getAttributeNode("aria-labelledby") : null, S = Y !== null && !a.has(Y) ? Ja(f, "aria-labelledby") : [];
    if (n === "name" && !T.isReferenced && S.length > 0)
      return a.add(Y), S.map(function(q) {
        return R(q, {
          isEmbeddedInLabel: T.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var w = T.recursion && ih(f) && n === "name";
    if (!w) {
      var m = ($(f) && f.getAttribute("aria-label") || "").trim();
      if (m !== "" && n === "name")
        return a.add(f), m;
      if (!sh(f)) {
        var L = v(f);
        if (L !== null)
          return a.add(f), L;
      }
    }
    if (Le(f, ["menu"]))
      return a.add(f), "";
    if (w || T.isEmbeddedInLabel || T.isReferenced) {
      if (Le(f, ["combobox", "listbox"])) {
        a.add(f);
        var A = lh(f);
        return A.length === 0 ? Ma(f) ? f.value : "" : le(A).map(function(q) {
          return R(q, {
            isEmbeddedInLabel: T.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (mp(f, "range"))
        return a.add(f), f.hasAttribute("aria-valuetext") ? f.getAttribute("aria-valuetext") : f.hasAttribute("aria-valuenow") ? f.getAttribute("aria-valuenow") : f.getAttribute("value") || "";
      if (Le(f, ["textbox"]))
        return a.add(f), ph(f);
    }
    if (ch(f) || $(f) && T.isReferenced || uh(f) || dh()) {
      var x = p(f, {
        isEmbeddedInLabel: T.isEmbeddedInLabel,
        isReferenced: !1
      });
      if (x !== "")
        return a.add(f), x;
    }
    if (f.nodeType === f.TEXT_NODE)
      return a.add(f), f.textContent || "";
    if (T.recursion)
      return a.add(f), p(f, {
        isEmbeddedInLabel: T.isEmbeddedInLabel,
        isReferenced: !1
      });
    var D = h(f);
    return D !== null ? (a.add(f), D) : (a.add(f), "");
  }
  return rh(R(e, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: n === "description",
    recursion: !1
  }));
}
function aa(e) {
  "@babel/helpers - typeof";
  return aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, aa(e);
}
function zs(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, o);
  }
  return a;
}
function Gs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zs(Object(a), !0).forEach(function(o) {
      hh(e, o, a[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : zs(Object(a)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(a, o));
    });
  }
  return e;
}
function hh(e, t, a) {
  return t = Lh(t), t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
function Lh(e) {
  var t = vh(e, "string");
  return aa(t) === "symbol" ? t : String(t);
}
function vh(e, t) {
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
function vp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = Ja(e, "aria-describedby").map(function(r) {
    return Lp(r, Gs(Gs({}, t), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (a === "") {
    var o = e.getAttribute("title");
    a = o === null ? "" : o;
  }
  return a;
}
function bh(e) {
  return Le(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function Kl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return bh(e) ? "" : Lp(e, t);
}
var se = {}, Ao = {}, rt = {}, To = {};
Object.defineProperty(To, "__esModule", {
  value: !0
});
To.default = void 0;
function Ah() {
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
var Th = Ah;
To.default = Th;
Object.defineProperty(rt, "__esModule", {
  value: !0
});
rt.default = Yh;
var gh = Sh(To);
function Sh(e) {
  return e && e.__esModule ? e : { default: e };
}
function tl(e) {
  "@babel/helpers - typeof";
  return tl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tl(e);
}
function Yh(e, t) {
  return typeof Symbol == "function" && tl(Symbol.iterator) === "symbol" && Object.defineProperty(e, Symbol.iterator, {
    value: gh.default.bind(t)
  }), e;
}
Object.defineProperty(Ao, "__esModule", {
  value: !0
});
Ao.default = void 0;
var Rh = wh(rt);
function wh(e) {
  return e && e.__esModule ? e : { default: e };
}
function vi(e, t) {
  return _h(e) || Ch(e, t) || bp(e, t) || Eh();
}
function Eh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ch(e, t) {
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
function _h(e) {
  if (Array.isArray(e))
    return e;
}
function Ph(e, t) {
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
      return Ks(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Ks(e, t);
  }
}
function Ks(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, o = new Array(t); a < t; a++)
    o[a] = e[a];
  return o;
}
var dt = [["aria-activedescendant", {
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
}]], al = {
  entries: function() {
    return dt;
  },
  forEach: function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, o = Ph(dt), r;
    try {
      for (o.s(); !(r = o.n()).done; ) {
        var n = vi(r.value, 2), i = n[0], s = n[1];
        t.call(a, s, i, dt);
      }
    } catch (l) {
      o.e(l);
    } finally {
      o.f();
    }
  },
  get: function(t) {
    var a = dt.find(function(o) {
      return o[0] === t;
    });
    return a && a[1];
  },
  has: function(t) {
    return !!al.get(t);
  },
  keys: function() {
    return dt.map(function(t) {
      var a = vi(t, 1), o = a[0];
      return o;
    });
  },
  values: function() {
    return dt.map(function(t) {
      var a = vi(t, 2), o = a[1];
      return o;
    });
  }
}, Fh = (0, Rh.default)(al, al.entries());
Ao.default = Fh;
var go = {};
Object.defineProperty(go, "__esModule", {
  value: !0
});
go.default = void 0;
var Ih = Oh(rt);
function Oh(e) {
  return e && e.__esModule ? e : { default: e };
}
function bi(e, t) {
  return Nh(e) || Mh(e, t) || Ap(e, t) || xh();
}
function xh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mh(e, t) {
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
function Nh(e) {
  if (Array.isArray(e))
    return e;
}
function kh(e, t) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = Ap(e)) || t && e && typeof e.length == "number") {
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
function Ap(e, t) {
  if (e) {
    if (typeof e == "string")
      return Js(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Js(e, t);
  }
}
function Js(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, o = new Array(t); a < t; a++)
    o[a] = e[a];
  return o;
}
var pt = [["a", {
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
}]], ol = {
  entries: function() {
    return pt;
  },
  forEach: function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, o = kh(pt), r;
    try {
      for (o.s(); !(r = o.n()).done; ) {
        var n = bi(r.value, 2), i = n[0], s = n[1];
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
    return !!ol.get(t);
  },
  keys: function() {
    return pt.map(function(t) {
      var a = bi(t, 1), o = a[0];
      return o;
    });
  },
  values: function() {
    return pt.map(function(t) {
      var a = bi(t, 2), o = a[1];
      return o;
    });
  }
}, $h = (0, Ih.default)(ol, ol.entries());
go.default = $h;
var Mt = {}, So = {}, Yo = {};
Object.defineProperty(Yo, "__esModule", {
  value: !0
});
Yo.default = void 0;
var qh = {
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
}, Dh = qh;
Yo.default = Dh;
var Ro = {};
Object.defineProperty(Ro, "__esModule", {
  value: !0
});
Ro.default = void 0;
var Bh = {
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
}, Uh = Bh;
Ro.default = Uh;
var wo = {};
Object.defineProperty(wo, "__esModule", {
  value: !0
});
wo.default = void 0;
var jh = {
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
}, Vh = jh;
wo.default = Vh;
var Eo = {};
Object.defineProperty(Eo, "__esModule", {
  value: !0
});
Eo.default = void 0;
var Hh = {
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
}, Wh = Hh;
Eo.default = Wh;
var Co = {};
Object.defineProperty(Co, "__esModule", {
  value: !0
});
Co.default = void 0;
var zh = {
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
}, Gh = zh;
Co.default = Gh;
var _o = {};
Object.defineProperty(_o, "__esModule", {
  value: !0
});
_o.default = void 0;
var Kh = {
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
}, Jh = Kh;
_o.default = Jh;
var Po = {};
Object.defineProperty(Po, "__esModule", {
  value: !0
});
Po.default = void 0;
var Xh = {
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
}, Qh = Xh;
Po.default = Qh;
var Fo = {};
Object.defineProperty(Fo, "__esModule", {
  value: !0
});
Fo.default = void 0;
var Zh = {
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
}, eL = Zh;
Fo.default = eL;
var Io = {};
Object.defineProperty(Io, "__esModule", {
  value: !0
});
Io.default = void 0;
var tL = {
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
}, aL = tL;
Io.default = aL;
var Oo = {};
Object.defineProperty(Oo, "__esModule", {
  value: !0
});
Oo.default = void 0;
var oL = {
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
}, rL = oL;
Oo.default = rL;
var xo = {};
Object.defineProperty(xo, "__esModule", {
  value: !0
});
xo.default = void 0;
var nL = {
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
}, iL = nL;
xo.default = iL;
var Mo = {};
Object.defineProperty(Mo, "__esModule", {
  value: !0
});
Mo.default = void 0;
var lL = {
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
}, sL = lL;
Mo.default = sL;
Object.defineProperty(So, "__esModule", {
  value: !0
});
So.default = void 0;
var uL = te(Yo), cL = te(Ro), dL = te(wo), pL = te(Eo), fL = te(Co), mL = te(_o), yL = te(Po), hL = te(Fo), LL = te(Io), vL = te(Oo), bL = te(xo), AL = te(Mo);
function te(e) {
  return e && e.__esModule ? e : { default: e };
}
var TL = [["command", uL.default], ["composite", cL.default], ["input", dL.default], ["landmark", pL.default], ["range", fL.default], ["roletype", mL.default], ["section", yL.default], ["sectionhead", hL.default], ["select", LL.default], ["structure", vL.default], ["widget", bL.default], ["window", AL.default]], gL = TL;
So.default = gL;
var No = {}, ko = {};
Object.defineProperty(ko, "__esModule", {
  value: !0
});
ko.default = void 0;
var SL = {
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
}, YL = SL;
ko.default = YL;
var $o = {};
Object.defineProperty($o, "__esModule", {
  value: !0
});
$o.default = void 0;
var RL = {
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
}, wL = RL;
$o.default = wL;
var qo = {};
Object.defineProperty(qo, "__esModule", {
  value: !0
});
qo.default = void 0;
var EL = {
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
}, CL = EL;
qo.default = CL;
var Do = {};
Object.defineProperty(Do, "__esModule", {
  value: !0
});
Do.default = void 0;
var _L = {
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
}, PL = _L;
Do.default = PL;
var Bo = {};
Object.defineProperty(Bo, "__esModule", {
  value: !0
});
Bo.default = void 0;
var FL = {
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
}, IL = FL;
Bo.default = IL;
var Uo = {};
Object.defineProperty(Uo, "__esModule", {
  value: !0
});
Uo.default = void 0;
var OL = {
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
}, xL = OL;
Uo.default = xL;
var jo = {};
Object.defineProperty(jo, "__esModule", {
  value: !0
});
jo.default = void 0;
var ML = {
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
}, NL = ML;
jo.default = NL;
var Vo = {};
Object.defineProperty(Vo, "__esModule", {
  value: !0
});
Vo.default = void 0;
var kL = {
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
}, $L = kL;
Vo.default = $L;
var Ho = {};
Object.defineProperty(Ho, "__esModule", {
  value: !0
});
Ho.default = void 0;
var qL = {
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
}, DL = qL;
Ho.default = DL;
var Wo = {};
Object.defineProperty(Wo, "__esModule", {
  value: !0
});
Wo.default = void 0;
var BL = {
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
}, UL = BL;
Wo.default = UL;
var zo = {};
Object.defineProperty(zo, "__esModule", {
  value: !0
});
zo.default = void 0;
var jL = {
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
}, VL = jL;
zo.default = VL;
var Go = {};
Object.defineProperty(Go, "__esModule", {
  value: !0
});
Go.default = void 0;
var HL = {
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
}, WL = HL;
Go.default = WL;
var Ko = {};
Object.defineProperty(Ko, "__esModule", {
  value: !0
});
Ko.default = void 0;
var zL = {
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
}, GL = zL;
Ko.default = GL;
var Jo = {};
Object.defineProperty(Jo, "__esModule", {
  value: !0
});
Jo.default = void 0;
var KL = {
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
}, JL = KL;
Jo.default = JL;
var Xo = {};
Object.defineProperty(Xo, "__esModule", {
  value: !0
});
Xo.default = void 0;
var XL = {
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
}, QL = XL;
Xo.default = QL;
var Qo = {};
Object.defineProperty(Qo, "__esModule", {
  value: !0
});
Qo.default = void 0;
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
      name: "dd"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, ev = ZL;
Qo.default = ev;
var Zo = {};
Object.defineProperty(Zo, "__esModule", {
  value: !0
});
Zo.default = void 0;
var tv = {
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
}, av = tv;
Zo.default = av;
var er = {};
Object.defineProperty(er, "__esModule", {
  value: !0
});
er.default = void 0;
var ov = {
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
}, rv = ov;
er.default = rv;
var tr = {};
Object.defineProperty(tr, "__esModule", {
  value: !0
});
tr.default = void 0;
var nv = {
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
}, iv = nv;
tr.default = iv;
var ar = {};
Object.defineProperty(ar, "__esModule", {
  value: !0
});
ar.default = void 0;
var lv = {
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
}, sv = lv;
ar.default = sv;
var or = {};
Object.defineProperty(or, "__esModule", {
  value: !0
});
or.default = void 0;
var uv = {
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
}, cv = uv;
or.default = cv;
var rr = {};
Object.defineProperty(rr, "__esModule", {
  value: !0
});
rr.default = void 0;
var dv = {
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
}, pv = dv;
rr.default = pv;
var nr = {};
Object.defineProperty(nr, "__esModule", {
  value: !0
});
nr.default = void 0;
var fv = {
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
}, mv = fv;
nr.default = mv;
var ir = {};
Object.defineProperty(ir, "__esModule", {
  value: !0
});
ir.default = void 0;
var yv = {
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
}, hv = yv;
ir.default = hv;
var lr = {};
Object.defineProperty(lr, "__esModule", {
  value: !0
});
lr.default = void 0;
var Lv = {
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
}, vv = Lv;
lr.default = vv;
var sr = {};
Object.defineProperty(sr, "__esModule", {
  value: !0
});
sr.default = void 0;
var bv = {
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
}, Av = bv;
sr.default = Av;
var ur = {};
Object.defineProperty(ur, "__esModule", {
  value: !0
});
ur.default = void 0;
var Tv = {
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
}, gv = Tv;
ur.default = gv;
var cr = {};
Object.defineProperty(cr, "__esModule", {
  value: !0
});
cr.default = void 0;
var Sv = {
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
}, Yv = Sv;
cr.default = Yv;
var dr = {};
Object.defineProperty(dr, "__esModule", {
  value: !0
});
dr.default = void 0;
var Rv = {
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
}, wv = Rv;
dr.default = wv;
var pr = {};
Object.defineProperty(pr, "__esModule", {
  value: !0
});
pr.default = void 0;
var Ev = {
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
}, Cv = Ev;
pr.default = Cv;
var fr = {};
Object.defineProperty(fr, "__esModule", {
  value: !0
});
fr.default = void 0;
var _v = {
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
}, Pv = _v;
fr.default = Pv;
var mr = {};
Object.defineProperty(mr, "__esModule", {
  value: !0
});
mr.default = void 0;
var Fv = {
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
}, Iv = Fv;
mr.default = Iv;
var yr = {};
Object.defineProperty(yr, "__esModule", {
  value: !0
});
yr.default = void 0;
var Ov = {
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
}, xv = Ov;
yr.default = xv;
var hr = {};
Object.defineProperty(hr, "__esModule", {
  value: !0
});
hr.default = void 0;
var Mv = {
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
}, Nv = Mv;
hr.default = Nv;
var Lr = {};
Object.defineProperty(Lr, "__esModule", {
  value: !0
});
Lr.default = void 0;
var kv = {
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
}, $v = kv;
Lr.default = $v;
var vr = {};
Object.defineProperty(vr, "__esModule", {
  value: !0
});
vr.default = void 0;
var qv = {
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
}, Dv = qv;
vr.default = Dv;
var br = {};
Object.defineProperty(br, "__esModule", {
  value: !0
});
br.default = void 0;
var Bv = {
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
}, Uv = Bv;
br.default = Uv;
var Ar = {};
Object.defineProperty(Ar, "__esModule", {
  value: !0
});
Ar.default = void 0;
var jv = {
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
}, Vv = jv;
Ar.default = Vv;
var Tr = {};
Object.defineProperty(Tr, "__esModule", {
  value: !0
});
Tr.default = void 0;
var Hv = {
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
}, Wv = Hv;
Tr.default = Wv;
var gr = {};
Object.defineProperty(gr, "__esModule", {
  value: !0
});
gr.default = void 0;
var zv = {
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
}, Gv = zv;
gr.default = Gv;
var Sr = {};
Object.defineProperty(Sr, "__esModule", {
  value: !0
});
Sr.default = void 0;
var Kv = {
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
}, Jv = Kv;
Sr.default = Jv;
var Yr = {};
Object.defineProperty(Yr, "__esModule", {
  value: !0
});
Yr.default = void 0;
var Xv = {
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
}, Qv = Xv;
Yr.default = Qv;
var Rr = {};
Object.defineProperty(Rr, "__esModule", {
  value: !0
});
Rr.default = void 0;
var Zv = {
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
}, eb = Zv;
Rr.default = eb;
var wr = {};
Object.defineProperty(wr, "__esModule", {
  value: !0
});
wr.default = void 0;
var tb = {
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
}, ab = tb;
wr.default = ab;
var Er = {};
Object.defineProperty(Er, "__esModule", {
  value: !0
});
Er.default = void 0;
var ob = {
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
}, rb = ob;
Er.default = rb;
var Cr = {};
Object.defineProperty(Cr, "__esModule", {
  value: !0
});
Cr.default = void 0;
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
      name: "nav"
    },
    module: "HTML"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, ib = nb;
Cr.default = ib;
var _r = {};
Object.defineProperty(_r, "__esModule", {
  value: !0
});
_r.default = void 0;
var lb = {
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
}, sb = lb;
_r.default = sb;
var Pr = {};
Object.defineProperty(Pr, "__esModule", {
  value: !0
});
Pr.default = void 0;
var ub = {
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
}, cb = ub;
Pr.default = cb;
var Fr = {};
Object.defineProperty(Fr, "__esModule", {
  value: !0
});
Fr.default = void 0;
var db = {
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
}, pb = db;
Fr.default = pb;
var Ir = {};
Object.defineProperty(Ir, "__esModule", {
  value: !0
});
Ir.default = void 0;
var fb = {
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
}, mb = fb;
Ir.default = mb;
var Or = {};
Object.defineProperty(Or, "__esModule", {
  value: !0
});
Or.default = void 0;
var yb = {
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
}, hb = yb;
Or.default = hb;
var xr = {};
Object.defineProperty(xr, "__esModule", {
  value: !0
});
xr.default = void 0;
var Lb = {
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
}, vb = Lb;
xr.default = vb;
var Mr = {};
Object.defineProperty(Mr, "__esModule", {
  value: !0
});
Mr.default = void 0;
var bb = {
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
}, Ab = bb;
Mr.default = Ab;
var Nr = {};
Object.defineProperty(Nr, "__esModule", {
  value: !0
});
Nr.default = void 0;
var Tb = {
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
}, gb = Tb;
Nr.default = gb;
var kr = {};
Object.defineProperty(kr, "__esModule", {
  value: !0
});
kr.default = void 0;
var Sb = {
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
}, Yb = Sb;
kr.default = Yb;
var $r = {};
Object.defineProperty($r, "__esModule", {
  value: !0
});
$r.default = void 0;
var Rb = {
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
}, wb = Rb;
$r.default = wb;
var qr = {};
Object.defineProperty(qr, "__esModule", {
  value: !0
});
qr.default = void 0;
var Eb = {
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
}, Cb = Eb;
qr.default = Cb;
var Dr = {};
Object.defineProperty(Dr, "__esModule", {
  value: !0
});
Dr.default = void 0;
var _b = {
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
}, Pb = _b;
Dr.default = Pb;
var Br = {};
Object.defineProperty(Br, "__esModule", {
  value: !0
});
Br.default = void 0;
var Fb = {
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
}, Ib = Fb;
Br.default = Ib;
var Ur = {};
Object.defineProperty(Ur, "__esModule", {
  value: !0
});
Ur.default = void 0;
var Ob = {
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
}, xb = Ob;
Ur.default = xb;
var jr = {};
Object.defineProperty(jr, "__esModule", {
  value: !0
});
jr.default = void 0;
var Mb = {
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
}, Nb = Mb;
jr.default = Nb;
var Vr = {};
Object.defineProperty(Vr, "__esModule", {
  value: !0
});
Vr.default = void 0;
var kb = {
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
}, $b = kb;
Vr.default = $b;
var Hr = {};
Object.defineProperty(Hr, "__esModule", {
  value: !0
});
Hr.default = void 0;
var qb = {
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
}, Db = qb;
Hr.default = Db;
var Wr = {};
Object.defineProperty(Wr, "__esModule", {
  value: !0
});
Wr.default = void 0;
var Bb = {
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
}, Ub = Bb;
Wr.default = Ub;
var zr = {};
Object.defineProperty(zr, "__esModule", {
  value: !0
});
zr.default = void 0;
var jb = {
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
}, Vb = jb;
zr.default = Vb;
var Gr = {};
Object.defineProperty(Gr, "__esModule", {
  value: !0
});
Gr.default = void 0;
var Hb = {
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
}, Wb = Hb;
Gr.default = Wb;
var Kr = {};
Object.defineProperty(Kr, "__esModule", {
  value: !0
});
Kr.default = void 0;
var zb = {
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
}, Gb = zb;
Kr.default = Gb;
var Jr = {};
Object.defineProperty(Jr, "__esModule", {
  value: !0
});
Jr.default = void 0;
var Kb = {
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
}, Jb = Kb;
Jr.default = Jb;
var Xr = {};
Object.defineProperty(Xr, "__esModule", {
  value: !0
});
Xr.default = void 0;
var Xb = {
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
}, Qb = Xb;
Xr.default = Qb;
var Qr = {};
Object.defineProperty(Qr, "__esModule", {
  value: !0
});
Qr.default = void 0;
var Zb = {
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
}, eA = Zb;
Qr.default = eA;
var Zr = {};
Object.defineProperty(Zr, "__esModule", {
  value: !0
});
Zr.default = void 0;
var tA = {
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
}, aA = tA;
Zr.default = aA;
var en = {};
Object.defineProperty(en, "__esModule", {
  value: !0
});
en.default = void 0;
var oA = {
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
}, rA = oA;
en.default = rA;
var tn = {};
Object.defineProperty(tn, "__esModule", {
  value: !0
});
tn.default = void 0;
var nA = {
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
}, iA = nA;
tn.default = iA;
var an = {};
Object.defineProperty(an, "__esModule", {
  value: !0
});
an.default = void 0;
var lA = {
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
}, sA = lA;
an.default = sA;
var on = {};
Object.defineProperty(on, "__esModule", {
  value: !0
});
on.default = void 0;
var uA = {
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
}, cA = uA;
on.default = cA;
var rn = {};
Object.defineProperty(rn, "__esModule", {
  value: !0
});
rn.default = void 0;
var dA = {
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
}, pA = dA;
rn.default = pA;
var nn = {};
Object.defineProperty(nn, "__esModule", {
  value: !0
});
nn.default = void 0;
var fA = {
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
}, mA = fA;
nn.default = mA;
var ln = {};
Object.defineProperty(ln, "__esModule", {
  value: !0
});
ln.default = void 0;
var yA = {
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
}, hA = yA;
ln.default = hA;
var sn = {};
Object.defineProperty(sn, "__esModule", {
  value: !0
});
sn.default = void 0;
var LA = {
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
}, vA = LA;
sn.default = vA;
var un = {};
Object.defineProperty(un, "__esModule", {
  value: !0
});
un.default = void 0;
var bA = {
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
}, AA = bA;
un.default = AA;
var cn = {};
Object.defineProperty(cn, "__esModule", {
  value: !0
});
cn.default = void 0;
var TA = {
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
}, gA = TA;
cn.default = gA;
var dn = {};
Object.defineProperty(dn, "__esModule", {
  value: !0
});
dn.default = void 0;
var SA = {
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
}, YA = SA;
dn.default = YA;
Object.defineProperty(No, "__esModule", {
  value: !0
});
No.default = void 0;
var RA = b(ko), wA = b($o), EA = b(qo), CA = b(Do), _A = b(Bo), PA = b(Uo), FA = b(jo), IA = b(Vo), OA = b(Ho), xA = b(Wo), MA = b(zo), NA = b(Go), kA = b(Ko), $A = b(Jo), qA = b(Xo), DA = b(Qo), BA = b(Zo), UA = b(er), jA = b(tr), VA = b(ar), HA = b(or), WA = b(rr), zA = b(nr), GA = b(ir), KA = b(lr), JA = b(sr), XA = b(ur), QA = b(cr), ZA = b(dr), eT = b(pr), tT = b(fr), aT = b(mr), oT = b(yr), rT = b(hr), nT = b(Lr), iT = b(vr), lT = b(br), sT = b(Ar), uT = b(Tr), cT = b(gr), dT = b(Sr), pT = b(Yr), fT = b(Rr), mT = b(wr), yT = b(Er), hT = b(Cr), LT = b(_r), vT = b(Pr), bT = b(Fr), AT = b(Ir), TT = b(Or), gT = b(xr), ST = b(Mr), YT = b(Nr), RT = b(kr), wT = b($r), ET = b(qr), CT = b(Dr), _T = b(Br), PT = b(Ur), FT = b(jr), IT = b(Vr), OT = b(Hr), xT = b(Wr), MT = b(zr), NT = b(Gr), kT = b(Kr), $T = b(Jr), qT = b(Xr), DT = b(Qr), BT = b(Zr), UT = b(en), jT = b(tn), VT = b(an), HT = b(on), WT = b(rn), zT = b(nn), GT = b(ln), KT = b(sn), JT = b(un), XT = b(cn), QT = b(dn);
function b(e) {
  return e && e.__esModule ? e : { default: e };
}
var ZT = [["alert", RA.default], ["alertdialog", wA.default], ["application", EA.default], ["article", CA.default], ["banner", _A.default], ["blockquote", PA.default], ["button", FA.default], ["caption", IA.default], ["cell", OA.default], ["checkbox", xA.default], ["code", MA.default], ["columnheader", NA.default], ["combobox", kA.default], ["complementary", $A.default], ["contentinfo", qA.default], ["definition", DA.default], ["deletion", BA.default], ["dialog", UA.default], ["directory", jA.default], ["document", VA.default], ["emphasis", HA.default], ["feed", WA.default], ["figure", zA.default], ["form", GA.default], ["generic", KA.default], ["grid", JA.default], ["gridcell", XA.default], ["group", QA.default], ["heading", ZA.default], ["img", eT.default], ["insertion", tT.default], ["link", aT.default], ["list", oT.default], ["listbox", rT.default], ["listitem", nT.default], ["log", iT.default], ["main", lT.default], ["marquee", sT.default], ["math", uT.default], ["menu", cT.default], ["menubar", dT.default], ["menuitem", pT.default], ["menuitemcheckbox", fT.default], ["menuitemradio", mT.default], ["meter", yT.default], ["navigation", hT.default], ["none", LT.default], ["note", vT.default], ["option", bT.default], ["paragraph", AT.default], ["presentation", TT.default], ["progressbar", gT.default], ["radio", ST.default], ["radiogroup", YT.default], ["region", RT.default], ["row", wT.default], ["rowgroup", ET.default], ["rowheader", CT.default], ["scrollbar", _T.default], ["search", PT.default], ["searchbox", FT.default], ["separator", IT.default], ["slider", OT.default], ["spinbutton", xT.default], ["status", MT.default], ["strong", NT.default], ["subscript", kT.default], ["superscript", $T.default], ["switch", qT.default], ["tab", DT.default], ["table", BT.default], ["tablist", UT.default], ["tabpanel", jT.default], ["term", VT.default], ["textbox", HT.default], ["time", WT.default], ["timer", zT.default], ["toolbar", GT.default], ["tooltip", KT.default], ["tree", JT.default], ["treegrid", XT.default], ["treeitem", QT.default]], eg = ZT;
No.default = eg;
var pn = {}, fn = {};
Object.defineProperty(fn, "__esModule", {
  value: !0
});
fn.default = void 0;
var tg = {
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
}, ag = tg;
fn.default = ag;
var mn = {};
Object.defineProperty(mn, "__esModule", {
  value: !0
});
mn.default = void 0;
var og = {
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
}, rg = og;
mn.default = rg;
var yn = {};
Object.defineProperty(yn, "__esModule", {
  value: !0
});
yn.default = void 0;
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
      name: "afterword [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, ig = ng;
yn.default = ig;
var hn = {};
Object.defineProperty(hn, "__esModule", {
  value: !0
});
hn.default = void 0;
var lg = {
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
}, sg = lg;
hn.default = sg;
var Ln = {};
Object.defineProperty(Ln, "__esModule", {
  value: !0
});
Ln.default = void 0;
var ug = {
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
}, cg = ug;
Ln.default = cg;
var vn = {};
Object.defineProperty(vn, "__esModule", {
  value: !0
});
vn.default = void 0;
var dg = {
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
}, pg = dg;
vn.default = pg;
var bn = {};
Object.defineProperty(bn, "__esModule", {
  value: !0
});
bn.default = void 0;
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
      name: "bibliography [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [["doc-biblioentry"]],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, mg = fg;
bn.default = mg;
var An = {};
Object.defineProperty(An, "__esModule", {
  value: !0
});
An.default = void 0;
var yg = {
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
}, hg = yg;
An.default = hg;
var Tn = {};
Object.defineProperty(Tn, "__esModule", {
  value: !0
});
Tn.default = void 0;
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
      name: "chapter [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, vg = Lg;
Tn.default = vg;
var gn = {};
Object.defineProperty(gn, "__esModule", {
  value: !0
});
gn.default = void 0;
var bg = {
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
}, Ag = bg;
gn.default = Ag;
var Sn = {};
Object.defineProperty(Sn, "__esModule", {
  value: !0
});
Sn.default = void 0;
var Tg = {
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
}, gg = Tg;
Sn.default = gg;
var Yn = {};
Object.defineProperty(Yn, "__esModule", {
  value: !0
});
Yn.default = void 0;
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
      name: "cover [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "img"]]
}, Yg = Sg;
Yn.default = Yg;
var Rn = {};
Object.defineProperty(Rn, "__esModule", {
  value: !0
});
Rn.default = void 0;
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
      name: "credit [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, wg = Rg;
Rn.default = wg;
var wn = {};
Object.defineProperty(wn, "__esModule", {
  value: !0
});
wn.default = void 0;
var Eg = {
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
}, Cg = Eg;
wn.default = Cg;
var En = {};
Object.defineProperty(En, "__esModule", {
  value: !0
});
En.default = void 0;
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
      name: "dedication [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Pg = _g;
En.default = Pg;
var Cn = {};
Object.defineProperty(Cn, "__esModule", {
  value: !0
});
Cn.default = void 0;
var Fg = {
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
}, Ig = Fg;
Cn.default = Ig;
var _n = {};
Object.defineProperty(_n, "__esModule", {
  value: !0
});
_n.default = void 0;
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
}, xg = Og;
_n.default = xg;
var Pn = {};
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.default = void 0;
var Mg = {
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
}, Ng = Mg;
Pn.default = Ng;
var Fn = {};
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
Fn.default = void 0;
var kg = {
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
}, $g = kg;
Fn.default = $g;
var In = {};
Object.defineProperty(In, "__esModule", {
  value: !0
});
In.default = void 0;
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
      name: "errata [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, Dg = qg;
In.default = Dg;
var On = {};
Object.defineProperty(On, "__esModule", {
  value: !0
});
On.default = void 0;
var Bg = {
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
}, Ug = Bg;
On.default = Ug;
var xn = {};
Object.defineProperty(xn, "__esModule", {
  value: !0
});
xn.default = void 0;
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
      name: "footnote [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section"]]
}, Vg = jg;
xn.default = Vg;
var Mn = {};
Object.defineProperty(Mn, "__esModule", {
  value: !0
});
Mn.default = void 0;
var Hg = {
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
}, Wg = Hg;
Mn.default = Wg;
var Nn = {};
Object.defineProperty(Nn, "__esModule", {
  value: !0
});
Nn.default = void 0;
var zg = {
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
}, Gg = zg;
Nn.default = Gg;
var kn = {};
Object.defineProperty(kn, "__esModule", {
  value: !0
});
kn.default = void 0;
var Kg = {
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
}, Jg = Kg;
kn.default = Jg;
var $n = {};
Object.defineProperty($n, "__esModule", {
  value: !0
});
$n.default = void 0;
var Xg = {
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
}, Qg = Xg;
$n.default = Qg;
var qn = {};
Object.defineProperty(qn, "__esModule", {
  value: !0
});
qn.default = void 0;
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
      name: "introduction [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, eS = Zg;
qn.default = eS;
var Dn = {};
Object.defineProperty(Dn, "__esModule", {
  value: !0
});
Dn.default = void 0;
var tS = {
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
}, aS = tS;
Dn.default = aS;
var Bn = {};
Object.defineProperty(Bn, "__esModule", {
  value: !0
});
Bn.default = void 0;
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
      name: "notice [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "note"]]
}, rS = oS;
Bn.default = rS;
var Un = {};
Object.defineProperty(Un, "__esModule", {
  value: !0
});
Un.default = void 0;
var nS = {
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
}, iS = nS;
Un.default = iS;
var jn = {};
Object.defineProperty(jn, "__esModule", {
  value: !0
});
jn.default = void 0;
var lS = {
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
}, sS = lS;
jn.default = sS;
var Vn = {};
Object.defineProperty(Vn, "__esModule", {
  value: !0
});
Vn.default = void 0;
var uS = {
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
}, cS = uS;
Vn.default = cS;
var Hn = {};
Object.defineProperty(Hn, "__esModule", {
  value: !0
});
Hn.default = void 0;
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
      name: "preface [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, pS = dS;
Hn.default = pS;
var Wn = {};
Object.defineProperty(Wn, "__esModule", {
  value: !0
});
Wn.default = void 0;
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
      name: "prologue [EPUB-SSV]"
    },
    module: "EPUB"
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [["roletype", "structure", "section", "landmark"]]
}, mS = fS;
Wn.default = mS;
var zn = {};
Object.defineProperty(zn, "__esModule", {
  value: !0
});
zn.default = void 0;
var yS = {
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
}, hS = yS;
zn.default = hS;
var Gn = {};
Object.defineProperty(Gn, "__esModule", {
  value: !0
});
Gn.default = void 0;
var LS = {
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
}, vS = LS;
Gn.default = vS;
var Kn = {};
Object.defineProperty(Kn, "__esModule", {
  value: !0
});
Kn.default = void 0;
var bS = {
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
}, AS = bS;
Kn.default = AS;
var Jn = {};
Object.defineProperty(Jn, "__esModule", {
  value: !0
});
Jn.default = void 0;
var TS = {
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
}, gS = TS;
Jn.default = gS;
var Xn = {};
Object.defineProperty(Xn, "__esModule", {
  value: !0
});
Xn.default = void 0;
var SS = {
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
}, YS = SS;
Xn.default = YS;
Object.defineProperty(pn, "__esModule", {
  value: !0
});
pn.default = void 0;
var RS = P(fn), wS = P(mn), ES = P(yn), CS = P(hn), _S = P(Ln), PS = P(vn), FS = P(bn), IS = P(An), OS = P(Tn), xS = P(gn), MS = P(Sn), NS = P(Yn), kS = P(Rn), $S = P(wn), qS = P(En), DS = P(Cn), BS = P(_n), US = P(Pn), jS = P(Fn), VS = P(In), HS = P(On), WS = P(xn), zS = P(Mn), GS = P(Nn), KS = P(kn), JS = P($n), XS = P(qn), QS = P(Dn), ZS = P(Bn), eY = P(Un), tY = P(jn), aY = P(Vn), oY = P(Hn), rY = P(Wn), nY = P(zn), iY = P(Gn), lY = P(Kn), sY = P(Jn), uY = P(Xn);
function P(e) {
  return e && e.__esModule ? e : { default: e };
}
var cY = [["doc-abstract", RS.default], ["doc-acknowledgments", wS.default], ["doc-afterword", ES.default], ["doc-appendix", CS.default], ["doc-backlink", _S.default], ["doc-biblioentry", PS.default], ["doc-bibliography", FS.default], ["doc-biblioref", IS.default], ["doc-chapter", OS.default], ["doc-colophon", xS.default], ["doc-conclusion", MS.default], ["doc-cover", NS.default], ["doc-credit", kS.default], ["doc-credits", $S.default], ["doc-dedication", qS.default], ["doc-endnote", DS.default], ["doc-endnotes", BS.default], ["doc-epigraph", US.default], ["doc-epilogue", jS.default], ["doc-errata", VS.default], ["doc-example", HS.default], ["doc-footnote", WS.default], ["doc-foreword", zS.default], ["doc-glossary", GS.default], ["doc-glossref", KS.default], ["doc-index", JS.default], ["doc-introduction", XS.default], ["doc-noteref", QS.default], ["doc-notice", ZS.default], ["doc-pagebreak", eY.default], ["doc-pagelist", tY.default], ["doc-part", aY.default], ["doc-preface", oY.default], ["doc-prologue", rY.default], ["doc-pullquote", nY.default], ["doc-qna", iY.default], ["doc-subtitle", lY.default], ["doc-tip", sY.default], ["doc-toc", uY.default]], dY = cY;
pn.default = dY;
var Qn = {}, Zn = {};
Object.defineProperty(Zn, "__esModule", {
  value: !0
});
Zn.default = void 0;
var pY = {
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
}, fY = pY;
Zn.default = fY;
var ei = {};
Object.defineProperty(ei, "__esModule", {
  value: !0
});
ei.default = void 0;
var mY = {
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
}, yY = mY;
ei.default = yY;
var ti = {};
Object.defineProperty(ti, "__esModule", {
  value: !0
});
ti.default = void 0;
var hY = {
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
}, LY = hY;
ti.default = LY;
Object.defineProperty(Qn, "__esModule", {
  value: !0
});
Qn.default = void 0;
var vY = Jl(Zn), bY = Jl(ei), AY = Jl(ti);
function Jl(e) {
  return e && e.__esModule ? e : { default: e };
}
var TY = [["graphics-document", vY.default], ["graphics-object", bY.default], ["graphics-symbol", AY.default]], gY = TY;
Qn.default = gY;
Object.defineProperty(Mt, "__esModule", {
  value: !0
});
Mt.default = void 0;
var SY = ca(So), YY = ca(No), RY = ca(pn), wY = ca(Qn), EY = ca(rt);
function ca(e) {
  return e && e.__esModule ? e : { default: e };
}
function CY(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
function rl(e, t) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = Tp(e)) || t && e && typeof e.length == "number") {
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
function zt(e, t) {
  return FY(e) || PY(e, t) || Tp(e, t) || _Y();
}
function _Y() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tp(e, t) {
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
function PY(e, t) {
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
function FY(e) {
  if (Array.isArray(e))
    return e;
}
var Pe = [].concat(SY.default, YY.default, RY.default, wY.default);
Pe.forEach(function(e) {
  var t = zt(e, 2), a = t[1], o = rl(a.superClass), r;
  try {
    for (o.s(); !(r = o.n()).done; ) {
      var n = r.value, i = rl(n), s;
      try {
        var l = function() {
          var c = s.value, d = Pe.find(function(R) {
            var f = zt(R, 1), T = f[0];
            return T === c;
          });
          if (d)
            for (var p = d[1], y = 0, h = Object.keys(p.props); y < h.length; y++) {
              var v = h[y];
              Object.prototype.hasOwnProperty.call(a.props, v) || Object.assign(a.props, CY({}, v, p.props[v]));
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
var nl = {
  entries: function() {
    return Pe;
  },
  forEach: function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, o = rl(Pe), r;
    try {
      for (o.s(); !(r = o.n()).done; ) {
        var n = zt(r.value, 2), i = n[0], s = n[1];
        t.call(a, s, i, Pe);
      }
    } catch (l) {
      o.e(l);
    } finally {
      o.f();
    }
  },
  get: function(t) {
    var a = Pe.find(function(o) {
      return o[0] === t;
    });
    return a && a[1];
  },
  has: function(t) {
    return !!nl.get(t);
  },
  keys: function() {
    return Pe.map(function(t) {
      var a = zt(t, 1), o = a[0];
      return o;
    });
  },
  values: function() {
    return Pe.map(function(t) {
      var a = zt(t, 2), o = a[1];
      return o;
    });
  }
}, IY = (0, EY.default)(nl, nl.entries());
Mt.default = IY;
var ai = {}, Qs = Object.prototype.toString, gp = function(t) {
  var a = Qs.call(t), o = a === "[object Arguments]";
  return o || (o = a !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && Qs.call(t.callee) === "[object Function]"), o;
}, Ai, Zs;
function OY() {
  if (Zs)
    return Ai;
  Zs = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, a = Object.prototype.toString, o = gp, r = Object.prototype.propertyIsEnumerable, n = !r.call({ toString: null }, "toString"), i = r.call(function() {
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
      var h = y !== null && typeof y == "object", v = a.call(y) === "[object Function]", R = o(y), f = h && a.call(y) === "[object String]", T = [];
      if (!h && !v && !R)
        throw new TypeError("Object.keys called on a non-object");
      var Y = i && v;
      if (f && y.length > 0 && !t.call(y, 0))
        for (var S = 0; S < y.length; ++S)
          T.push(String(S));
      if (R && y.length > 0)
        for (var w = 0; w < y.length; ++w)
          T.push(String(w));
      else
        for (var m in y)
          !(Y && m === "prototype") && t.call(y, m) && T.push(String(m));
      if (n)
        for (var L = d(y), A = 0; A < s.length; ++A)
          !(L && s[A] === "constructor") && t.call(y, s[A]) && T.push(s[A]);
      return T;
    };
  }
  return Ai = e, Ai;
}
var xY = Array.prototype.slice, MY = gp, eu = Object.keys, Na = eu ? function(t) {
  return eu(t);
} : OY(), tu = Object.keys;
Na.shim = function() {
  if (Object.keys) {
    var t = function() {
      var a = Object.keys(arguments);
      return a && a.length === arguments.length;
    }(1, 2);
    t || (Object.keys = function(o) {
      return MY(o) ? tu(xY.call(o)) : tu(o);
    });
  } else
    Object.keys = Na;
  return Object.keys || Na;
};
var Xl = Na, oi = function() {
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
}, au = typeof Symbol < "u" && Symbol, NY = oi, Ql = function() {
  return typeof au != "function" || typeof Symbol != "function" || typeof au("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : NY();
}, ou = {
  foo: {}
}, kY = Object, $Y = function() {
  return { __proto__: ou }.foo === ou.foo && !({ __proto__: null } instanceof kY);
}, qY = "Function.prototype.bind called on incompatible ", DY = Object.prototype.toString, BY = Math.max, UY = "[object Function]", ru = function(t, a) {
  for (var o = [], r = 0; r < t.length; r += 1)
    o[r] = t[r];
  for (var n = 0; n < a.length; n += 1)
    o[n + t.length] = a[n];
  return o;
}, jY = function(t, a) {
  for (var o = [], r = a || 0, n = 0; r < t.length; r += 1, n += 1)
    o[n] = t[r];
  return o;
}, VY = function(e, t) {
  for (var a = "", o = 0; o < e.length; o += 1)
    a += e[o], o + 1 < e.length && (a += t);
  return a;
}, HY = function(t) {
  var a = this;
  if (typeof a != "function" || DY.apply(a) !== UY)
    throw new TypeError(qY + a);
  for (var o = jY(arguments, 1), r, n = function() {
    if (this instanceof r) {
      var c = a.apply(
        this,
        ru(o, arguments)
      );
      return Object(c) === c ? c : this;
    }
    return a.apply(
      t,
      ru(o, arguments)
    );
  }, i = BY(0, a.length - o.length), s = [], l = 0; l < i; l++)
    s[l] = "$" + l;
  if (r = Function("binder", "return function (" + VY(s, ",") + "){ return binder.apply(this,arguments); }")(n), a.prototype) {
    var u = function() {
    };
    u.prototype = a.prototype, r.prototype = new u(), u.prototype = null;
  }
  return r;
}, WY = HY, Zl = Function.prototype.bind || WY, zY = Function.prototype.call, GY = Object.prototype.hasOwnProperty, KY = Zl, Sp = KY.call(zY, GY), F, Yt = SyntaxError, Yp = Function, At = TypeError, Ti = function(e) {
  try {
    return Yp('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Qe = Object.getOwnPropertyDescriptor;
if (Qe)
  try {
    Qe({}, "");
  } catch {
    Qe = null;
  }
var gi = function() {
  throw new At();
}, JY = Qe ? function() {
  try {
    return arguments.callee, gi;
  } catch {
    try {
      return Qe(arguments, "callee").get;
    } catch {
      return gi;
    }
  }
}() : gi, ft = Ql(), XY = $Y(), j = Object.getPrototypeOf || (XY ? function(e) {
  return e.__proto__;
} : null), Lt = {}, QY = typeof Uint8Array > "u" || !j ? F : j(Uint8Array), Ze = {
  "%AggregateError%": typeof AggregateError > "u" ? F : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? F : ArrayBuffer,
  "%ArrayIteratorPrototype%": ft && j ? j([][Symbol.iterator]()) : F,
  "%AsyncFromSyncIteratorPrototype%": F,
  "%AsyncFunction%": Lt,
  "%AsyncGenerator%": Lt,
  "%AsyncGeneratorFunction%": Lt,
  "%AsyncIteratorPrototype%": Lt,
  "%Atomics%": typeof Atomics > "u" ? F : Atomics,
  "%BigInt%": typeof BigInt > "u" ? F : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? F : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? F : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? F : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? F : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? F : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? F : FinalizationRegistry,
  "%Function%": Yp,
  "%GeneratorFunction%": Lt,
  "%Int8Array%": typeof Int8Array > "u" ? F : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? F : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? F : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": ft && j ? j(j([][Symbol.iterator]())) : F,
  "%JSON%": typeof JSON == "object" ? JSON : F,
  "%Map%": typeof Map > "u" ? F : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !ft || !j ? F : j((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? F : Promise,
  "%Proxy%": typeof Proxy > "u" ? F : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? F : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? F : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !ft || !j ? F : j((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? F : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": ft && j ? j(""[Symbol.iterator]()) : F,
  "%Symbol%": ft ? Symbol : F,
  "%SyntaxError%": Yt,
  "%ThrowTypeError%": JY,
  "%TypedArray%": QY,
  "%TypeError%": At,
  "%Uint8Array%": typeof Uint8Array > "u" ? F : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? F : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? F : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? F : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? F : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? F : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? F : WeakSet
};
if (j)
  try {
    null.error;
  } catch (e) {
    var ZY = j(j(e));
    Ze["%Error.prototype%"] = ZY;
  }
var eR = function e(t) {
  var a;
  if (t === "%AsyncFunction%")
    a = Ti("async function () {}");
  else if (t === "%GeneratorFunction%")
    a = Ti("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    a = Ti("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var o = e("%AsyncGeneratorFunction%");
    o && (a = o.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var r = e("%AsyncGenerator%");
    r && j && (a = j(r.prototype));
  }
  return Ze[t] = a, a;
}, nu = {
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
}, da = Zl, Xa = Sp, tR = da.call(Function.call, Array.prototype.concat), aR = da.call(Function.apply, Array.prototype.splice), iu = da.call(Function.call, String.prototype.replace), Qa = da.call(Function.call, String.prototype.slice), oR = da.call(Function.call, RegExp.prototype.exec), rR = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, nR = /\\(\\)?/g, iR = function(t) {
  var a = Qa(t, 0, 1), o = Qa(t, -1);
  if (a === "%" && o !== "%")
    throw new Yt("invalid intrinsic syntax, expected closing `%`");
  if (o === "%" && a !== "%")
    throw new Yt("invalid intrinsic syntax, expected opening `%`");
  var r = [];
  return iu(t, rR, function(n, i, s, l) {
    r[r.length] = s ? iu(l, nR, "$1") : i || n;
  }), r;
}, lR = function(t, a) {
  var o = t, r;
  if (Xa(nu, o) && (r = nu[o], o = "%" + r[0] + "%"), Xa(Ze, o)) {
    var n = Ze[o];
    if (n === Lt && (n = eR(o)), typeof n > "u" && !a)
      throw new At("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: r,
      name: o,
      value: n
    };
  }
  throw new Yt("intrinsic " + t + " does not exist!");
}, ae = function(t, a) {
  if (typeof t != "string" || t.length === 0)
    throw new At("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof a != "boolean")
    throw new At('"allowMissing" argument must be a boolean');
  if (oR(/^%?[^%]*%?$/, t) === null)
    throw new Yt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var o = iR(t), r = o.length > 0 ? o[0] : "", n = lR("%" + r + "%", a), i = n.name, s = n.value, l = !1, u = n.alias;
  u && (r = u[0], aR(o, tR([0, 1], u)));
  for (var c = 1, d = !0; c < o.length; c += 1) {
    var p = o[c], y = Qa(p, 0, 1), h = Qa(p, -1);
    if ((y === '"' || y === "'" || y === "`" || h === '"' || h === "'" || h === "`") && y !== h)
      throw new Yt("property names with quotes must have matching quotes");
    if ((p === "constructor" || !d) && (l = !0), r += "." + p, i = "%" + r + "%", Xa(Ze, i))
      s = Ze[i];
    else if (s != null) {
      if (!(p in s)) {
        if (!a)
          throw new At("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (Qe && c + 1 >= o.length) {
        var v = Qe(s, p);
        d = !!v, d && "get" in v && !("originalValue" in v.get) ? s = v.get : s = s[p];
      } else
        d = Xa(s, p), s = s[p];
      d && !l && (Ze[i] = s);
    }
  }
  return s;
}, sR = ae, il = sR("%Object.defineProperty%", !0), ll = function() {
  if (il)
    try {
      return il({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
ll.hasArrayLengthDefineBug = function() {
  if (!ll())
    return null;
  try {
    return il([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var ri = ll, uR = ae, ka = uR("%Object.getOwnPropertyDescriptor%", !0);
if (ka)
  try {
    ka([], "length");
  } catch {
    ka = null;
  }
var es = ka, cR = ri(), ts = ae, Gt = cR && ts("%Object.defineProperty%", !0);
if (Gt)
  try {
    Gt({}, "a", { value: 1 });
  } catch {
    Gt = !1;
  }
var dR = ts("%SyntaxError%"), mt = ts("%TypeError%"), lu = es, as = function(t, a, o) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new mt("`obj` must be an object or a function`");
  if (typeof a != "string" && typeof a != "symbol")
    throw new mt("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new mt("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new mt("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new mt("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new mt("`loose`, if provided, must be a boolean");
  var r = arguments.length > 3 ? arguments[3] : null, n = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, l = !!lu && lu(t, a);
  if (Gt)
    Gt(t, a, {
      configurable: i === null && l ? l.configurable : !i,
      enumerable: r === null && l ? l.enumerable : !r,
      value: o,
      writable: n === null && l ? l.writable : !n
    });
  else if (s || !r && !n && !i)
    t[a] = o;
  else
    throw new dR("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, pR = Xl, fR = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", mR = Object.prototype.toString, yR = Array.prototype.concat, su = as, hR = function(e) {
  return typeof e == "function" && mR.call(e) === "[object Function]";
}, Rp = ri(), LR = function(e, t, a, o) {
  if (t in e) {
    if (o === !0) {
      if (e[t] === a)
        return;
    } else if (!hR(o) || !o())
      return;
  }
  Rp ? su(e, t, a, !0) : su(e, t, a);
}, wp = function(e, t) {
  var a = arguments.length > 2 ? arguments[2] : {}, o = pR(t);
  fR && (o = yR.call(o, Object.getOwnPropertySymbols(t)));
  for (var r = 0; r < o.length; r += 1)
    LR(e, o[r], t[o[r]], a[o[r]]);
};
wp.supportsDescriptors = !!Rp;
var nt = wp, Ep = { exports: {} }, Cp = ae, uu = as, vR = ri(), cu = es, du = Cp("%TypeError%"), bR = Cp("%Math.floor%"), AR = function(t, a) {
  if (typeof t != "function")
    throw new du("`fn` is not a function");
  if (typeof a != "number" || a < 0 || a > 4294967295 || bR(a) !== a)
    throw new du("`length` must be a positive 32-bit integer");
  var o = arguments.length > 2 && !!arguments[2], r = !0, n = !0;
  if ("length" in t && cu) {
    var i = cu(t, "length");
    i && !i.configurable && (r = !1), i && !i.writable && (n = !1);
  }
  return (r || n || !o) && (vR ? uu(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    a,
    !0,
    !0
  ) : uu(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    a
  )), t;
};
(function(e) {
  var t = Zl, a = ae, o = AR, r = a("%TypeError%"), n = a("%Function.prototype.apply%"), i = a("%Function.prototype.call%"), s = a("%Reflect.apply%", !0) || t.call(i, n), l = a("%Object.defineProperty%", !0), u = a("%Math.max%");
  if (l)
    try {
      l({}, "a", { value: 1 });
    } catch {
      l = null;
    }
  e.exports = function(p) {
    if (typeof p != "function")
      throw new r("a function is required");
    var y = s(t, i, arguments);
    return o(
      y,
      1 + u(0, p.length - (arguments.length - 1)),
      !0
    );
  };
  var c = function() {
    return s(t, n, arguments);
  };
  l ? l(e.exports, "apply", { value: c }) : e.exports.apply = c;
})(Ep);
var Nt = Ep.exports, _p = ae, Pp = Nt, TR = Pp(_p("String.prototype.indexOf")), oe = function(t, a) {
  var o = _p(t, !!a);
  return typeof o == "function" && TR(t, ".prototype.") > -1 ? Pp(o) : o;
}, gR = Xl, Fp = oi(), Ip = oe, pu = Object, SR = Ip("Array.prototype.push"), fu = Ip("Object.prototype.propertyIsEnumerable"), YR = Fp ? Object.getOwnPropertySymbols : null, Op = function(t, a) {
  if (t == null)
    throw new TypeError("target must be an object");
  var o = pu(t);
  if (arguments.length === 1)
    return o;
  for (var r = 1; r < arguments.length; ++r) {
    var n = pu(arguments[r]), i = gR(n), s = Fp && (Object.getOwnPropertySymbols || YR);
    if (s)
      for (var l = s(n), u = 0; u < l.length; ++u) {
        var c = l[u];
        fu(n, c) && SR(i, c);
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
}, Si = Op, RR = function() {
  if (!Object.assign)
    return !1;
  for (var e = "abcdefghijklmnopqrst", t = e.split(""), a = {}, o = 0; o < t.length; ++o)
    a[t[o]] = t[o];
  var r = Object.assign({}, a), n = "";
  for (var i in r)
    n += i;
  return e !== n;
}, wR = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var e = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(e, "xy");
  } catch {
    return e[1] === "y";
  }
  return !1;
}, xp = function() {
  return !Object.assign || RR() || wR() ? Si : Object.assign;
}, ER = nt, CR = xp, _R = function() {
  var t = CR();
  return ER(
    Object,
    { assign: t },
    { assign: function() {
      return Object.assign !== t;
    } }
  ), t;
}, PR = nt, FR = Nt, IR = Op, Mp = xp, OR = _R, xR = FR.apply(Mp()), Np = function(t, a) {
  return xR(Object, arguments);
};
PR(Np, {
  getPolyfill: Mp,
  implementation: IR,
  shim: OR
});
var MR = Np, oa = function() {
  return typeof (function() {
  }).name == "string";
}, Kt = Object.getOwnPropertyDescriptor;
if (Kt)
  try {
    Kt([], "length");
  } catch {
    Kt = null;
  }
oa.functionsHaveConfigurableNames = function() {
  if (!oa() || !Kt)
    return !1;
  var t = Kt(function() {
  }, "name");
  return !!t && !!t.configurable;
};
var NR = Function.prototype.bind;
oa.boundFunctionsHaveNames = function() {
  return oa() && typeof NR == "function" && (function() {
  }).bind().name !== "";
};
var kR = oa, mu = as, $R = ri(), qR = kR.functionsHaveConfigurableNames(), DR = TypeError, BR = function(t, a) {
  if (typeof t != "function")
    throw new DR("`fn` is not a function");
  var o = arguments.length > 2 && !!arguments[2];
  return (!o || qR) && ($R ? mu(t, "name", a, !0, !0) : mu(t, "name", a)), t;
}, UR = BR, jR = Object, VR = TypeError, kp = UR(function() {
  if (this != null && this !== jR(this))
    throw new VR("RegExp.prototype.flags getter called on non-object");
  var t = "";
  return this.hasIndices && (t += "d"), this.global && (t += "g"), this.ignoreCase && (t += "i"), this.multiline && (t += "m"), this.dotAll && (t += "s"), this.unicode && (t += "u"), this.unicodeSets && (t += "v"), this.sticky && (t += "y"), t;
}, "get flags", !0), HR = kp, WR = nt.supportsDescriptors, zR = Object.getOwnPropertyDescriptor, $p = function() {
  if (WR && /a/mig.flags === "gim") {
    var t = zR(RegExp.prototype, "flags");
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
  return HR;
}, GR = nt.supportsDescriptors, KR = $p, JR = Object.getOwnPropertyDescriptor, XR = Object.defineProperty, QR = TypeError, yu = Object.getPrototypeOf, ZR = /a/, ew = function() {
  if (!GR || !yu)
    throw new QR("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var t = KR(), a = yu(ZR), o = JR(a, "flags");
  return (!o || o.get !== t) && XR(a, "flags", {
    configurable: !0,
    enumerable: !1,
    get: t
  }), t;
}, tw = nt, aw = Nt, ow = kp, qp = $p, rw = ew, Dp = aw(qp());
tw(Dp, {
  getPolyfill: qp,
  implementation: ow,
  shim: rw
});
var nw = Dp, $a = { exports: {} }, iw = oi, it = function() {
  return iw() && !!Symbol.toStringTag;
}, lw = it(), sw = oe, sl = sw("Object.prototype.toString"), ni = function(t) {
  return lw && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : sl(t) === "[object Arguments]";
}, Bp = function(t) {
  return ni(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && sl(t) !== "[object Array]" && sl(t.callee) === "[object Function]";
}, uw = function() {
  return ni(arguments);
}();
ni.isLegacyArguments = Bp;
var Up = uw ? ni : Bp;
const cw = {}, dw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cw
}, Symbol.toStringTag, { value: "Module" })), pw = /* @__PURE__ */ Uy(dw);
var os = typeof Map == "function" && Map.prototype, Yi = Object.getOwnPropertyDescriptor && os ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Za = os && Yi && typeof Yi.get == "function" ? Yi.get : null, hu = os && Map.prototype.forEach, rs = typeof Set == "function" && Set.prototype, Ri = Object.getOwnPropertyDescriptor && rs ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, eo = rs && Ri && typeof Ri.get == "function" ? Ri.get : null, Lu = rs && Set.prototype.forEach, fw = typeof WeakMap == "function" && WeakMap.prototype, Jt = fw ? WeakMap.prototype.has : null, mw = typeof WeakSet == "function" && WeakSet.prototype, Xt = mw ? WeakSet.prototype.has : null, yw = typeof WeakRef == "function" && WeakRef.prototype, vu = yw ? WeakRef.prototype.deref : null, hw = Boolean.prototype.valueOf, Lw = Object.prototype.toString, vw = Function.prototype.toString, bw = String.prototype.match, ns = String.prototype.slice, Me = String.prototype.replace, Aw = String.prototype.toUpperCase, bu = String.prototype.toLowerCase, jp = RegExp.prototype.test, Au = Array.prototype.concat, ce = Array.prototype.join, Tw = Array.prototype.slice, Tu = Math.floor, ul = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, wi = Object.getOwnPropertySymbols, cl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Rt = typeof Symbol == "function" && typeof Symbol.iterator == "object", G = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Rt || "symbol") ? Symbol.toStringTag : null, Vp = Object.prototype.propertyIsEnumerable, gu = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Su(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || jp.call(/e/, t))
    return t;
  var a = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var o = e < 0 ? -Tu(-e) : Tu(e);
    if (o !== e) {
      var r = String(o), n = ns.call(t, r.length + 1);
      return Me.call(r, a, "$&_") + "." + Me.call(Me.call(n, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Me.call(t, a, "$&_");
}
var dl = pw, Yu = dl.custom, Ru = Wp(Yu) ? Yu : null, gw = function e(t, a, o, r) {
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
    return pl(t) ? "[Array]" : "[Object]";
  var d = Dw(n, o);
  if (typeof r > "u")
    r = [];
  else if (zp(r, t) >= 0)
    return "[Circular]";
  function p(g, C, O) {
    if (C && (r = Tw.call(r), r.push(C)), O) {
      var U = {
        depth: n.depth
      };
      return Fe(n, "quoteStyle") && (U.quoteStyle = n.quoteStyle), e(g, U, o + 1, r);
    }
    return e(g, n, o + 1, r);
  }
  if (typeof t == "function" && !wu(t)) {
    var y = Fw(t), h = ba(t, p);
    return "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (h.length > 0 ? " { " + ce.call(h, ", ") + " }" : "");
  }
  if (Wp(t)) {
    var v = Rt ? Me.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : cl.call(t);
    return typeof t == "object" && !Rt ? Bt(v) : v;
  }
  if (kw(t)) {
    for (var R = "<" + bu.call(String(t.nodeName)), f = t.attributes || [], T = 0; T < f.length; T++)
      R += " " + f[T].name + "=" + Hp(Sw(f[T].value), "double", n);
    return R += ">", t.childNodes && t.childNodes.length && (R += "..."), R += "</" + bu.call(String(t.nodeName)) + ">", R;
  }
  if (pl(t)) {
    if (t.length === 0)
      return "[]";
    var Y = ba(t, p);
    return d && !qw(Y) ? "[" + fl(Y, d) + "]" : "[ " + ce.call(Y, ", ") + " ]";
  }
  if (Rw(t)) {
    var S = ba(t, p);
    return !("cause" in Error.prototype) && "cause" in t && !Vp.call(t, "cause") ? "{ [" + String(t) + "] " + ce.call(Au.call("[cause]: " + p(t.cause), S), ", ") + " }" : S.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + ce.call(S, ", ") + " }";
  }
  if (typeof t == "object" && i) {
    if (Ru && typeof t[Ru] == "function" && dl)
      return dl(t, { depth: c - o });
    if (i !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (Iw(t)) {
    var w = [];
    return hu && hu.call(t, function(g, C) {
      w.push(p(C, t, !0) + " => " + p(g, t));
    }), Eu("Map", Za.call(t), w, d);
  }
  if (Mw(t)) {
    var m = [];
    return Lu && Lu.call(t, function(g) {
      m.push(p(g, t));
    }), Eu("Set", eo.call(t), m, d);
  }
  if (Ow(t))
    return Ei("WeakMap");
  if (Nw(t))
    return Ei("WeakSet");
  if (xw(t))
    return Ei("WeakRef");
  if (Ew(t))
    return Bt(p(Number(t)));
  if (_w(t))
    return Bt(p(ul.call(t)));
  if (Cw(t))
    return Bt(hw.call(t));
  if (ww(t))
    return Bt(p(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (t === Vl)
    return "{ [object globalThis] }";
  if (!Yw(t) && !wu(t)) {
    var L = ba(t, p), A = gu ? gu(t) === Object.prototype : t instanceof Object || t.constructor === Object, x = t instanceof Object ? "" : "null prototype", D = !A && G && Object(t) === t && G in t ? ns.call(Ge(t), 8, -1) : x ? "Object" : "", q = A || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", B = q + (D || x ? "[" + ce.call(Au.call([], D || [], x || []), ": ") + "] " : "");
    return L.length === 0 ? B + "{}" : d ? B + "{" + fl(L, d) + "}" : B + "{ " + ce.call(L, ", ") + " }";
  }
  return String(t);
};
function Hp(e, t, a) {
  var o = (a.quoteStyle || t) === "double" ? '"' : "'";
  return o + e + o;
}
function Sw(e) {
  return Me.call(String(e), /"/g, "&quot;");
}
function pl(e) {
  return Ge(e) === "[object Array]" && (!G || !(typeof e == "object" && G in e));
}
function Yw(e) {
  return Ge(e) === "[object Date]" && (!G || !(typeof e == "object" && G in e));
}
function wu(e) {
  return Ge(e) === "[object RegExp]" && (!G || !(typeof e == "object" && G in e));
}
function Rw(e) {
  return Ge(e) === "[object Error]" && (!G || !(typeof e == "object" && G in e));
}
function ww(e) {
  return Ge(e) === "[object String]" && (!G || !(typeof e == "object" && G in e));
}
function Ew(e) {
  return Ge(e) === "[object Number]" && (!G || !(typeof e == "object" && G in e));
}
function Cw(e) {
  return Ge(e) === "[object Boolean]" && (!G || !(typeof e == "object" && G in e));
}
function Wp(e) {
  if (Rt)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !cl)
    return !1;
  try {
    return cl.call(e), !0;
  } catch {
  }
  return !1;
}
function _w(e) {
  if (!e || typeof e != "object" || !ul)
    return !1;
  try {
    return ul.call(e), !0;
  } catch {
  }
  return !1;
}
var Pw = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function Fe(e, t) {
  return Pw.call(e, t);
}
function Ge(e) {
  return Lw.call(e);
}
function Fw(e) {
  if (e.name)
    return e.name;
  var t = bw.call(vw.call(e), /^function\s*([\w$]+)/);
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
function Iw(e) {
  if (!Za || !e || typeof e != "object")
    return !1;
  try {
    Za.call(e);
    try {
      eo.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function Ow(e) {
  if (!Jt || !e || typeof e != "object")
    return !1;
  try {
    Jt.call(e, Jt);
    try {
      Xt.call(e, Xt);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function xw(e) {
  if (!vu || !e || typeof e != "object")
    return !1;
  try {
    return vu.call(e), !0;
  } catch {
  }
  return !1;
}
function Mw(e) {
  if (!eo || !e || typeof e != "object")
    return !1;
  try {
    eo.call(e);
    try {
      Za.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function Nw(e) {
  if (!Xt || !e || typeof e != "object")
    return !1;
  try {
    Xt.call(e, Xt);
    try {
      Jt.call(e, Jt);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function kw(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Gp(e, t) {
  if (e.length > t.maxStringLength) {
    var a = e.length - t.maxStringLength, o = "... " + a + " more character" + (a > 1 ? "s" : "");
    return Gp(ns.call(e, 0, t.maxStringLength), t) + o;
  }
  var r = Me.call(Me.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, $w);
  return Hp(r, "single", t);
}
function $w(e) {
  var t = e.charCodeAt(0), a = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return a ? "\\" + a : "\\x" + (t < 16 ? "0" : "") + Aw.call(t.toString(16));
}
function Bt(e) {
  return "Object(" + e + ")";
}
function Ei(e) {
  return e + " { ? }";
}
function Eu(e, t, a, o) {
  var r = o ? fl(a, o) : ce.call(a, ", ");
  return e + " (" + t + ") {" + r + "}";
}
function qw(e) {
  for (var t = 0; t < e.length; t++)
    if (zp(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function Dw(e, t) {
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
function fl(e, t) {
  if (e.length === 0)
    return "";
  var a = `
` + t.prev + t.base;
  return a + ce.call(e, "," + a) + `
` + t.prev;
}
function ba(e, t) {
  var a = pl(e), o = [];
  if (a) {
    o.length = e.length;
    for (var r = 0; r < e.length; r++)
      o[r] = Fe(e, r) ? t(e[r], e) : "";
  }
  var n = typeof wi == "function" ? wi(e) : [], i;
  if (Rt) {
    i = {};
    for (var s = 0; s < n.length; s++)
      i["$" + n[s]] = n[s];
  }
  for (var l in e)
    Fe(e, l) && (a && String(Number(l)) === l && l < e.length || Rt && i["$" + l] instanceof Symbol || (jp.call(/[^\w$]/, l) ? o.push(t(l, e) + ": " + t(e[l], e)) : o.push(l + ": " + t(e[l], e))));
  if (typeof wi == "function")
    for (var u = 0; u < n.length; u++)
      Vp.call(e, n[u]) && o.push("[" + t(n[u]) + "]: " + t(e[n[u]], e));
  return o;
}
var is = ae, kt = oe, Bw = gw, Uw = is("%TypeError%"), Aa = is("%WeakMap%", !0), Ta = is("%Map%", !0), jw = kt("WeakMap.prototype.get", !0), Vw = kt("WeakMap.prototype.set", !0), Hw = kt("WeakMap.prototype.has", !0), Ww = kt("Map.prototype.get", !0), zw = kt("Map.prototype.set", !0), Gw = kt("Map.prototype.has", !0), ls = function(e, t) {
  for (var a = e, o; (o = a.next) !== null; a = o)
    if (o.key === t)
      return a.next = o.next, o.next = e.next, e.next = o, o;
}, Kw = function(e, t) {
  var a = ls(e, t);
  return a && a.value;
}, Jw = function(e, t, a) {
  var o = ls(e, t);
  o ? o.value = a : e.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: e.next,
    value: a
  };
}, Xw = function(e, t) {
  return !!ls(e, t);
}, Kp = function() {
  var t, a, o, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new Uw("Side channel does not contain " + Bw(n));
    },
    get: function(n) {
      if (Aa && n && (typeof n == "object" || typeof n == "function")) {
        if (t)
          return jw(t, n);
      } else if (Ta) {
        if (a)
          return Ww(a, n);
      } else if (o)
        return Kw(o, n);
    },
    has: function(n) {
      if (Aa && n && (typeof n == "object" || typeof n == "function")) {
        if (t)
          return Hw(t, n);
      } else if (Ta) {
        if (a)
          return Gw(a, n);
      } else if (o)
        return Xw(o, n);
      return !1;
    },
    set: function(n, i) {
      Aa && n && (typeof n == "object" || typeof n == "function") ? (t || (t = new Aa()), Vw(t, n, i)) : Ta ? (a || (a = new Ta()), zw(a, n, i)) : (o || (o = { key: {}, next: null }), Jw(o, n, i));
    }
  };
  return r;
}, Qw = ae, Zw = Sp, Ut = Kp(), ye = Qw("%TypeError%"), ss = {
  assert: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new ye("`O` is not an object");
    if (typeof t != "string")
      throw new ye("`slot` must be a string");
    if (Ut.assert(e), !ss.has(e, t))
      throw new ye("`" + t + "` is not present on `O`");
  },
  get: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new ye("`O` is not an object");
    if (typeof t != "string")
      throw new ye("`slot` must be a string");
    var a = Ut.get(e);
    return a && a["$" + t];
  },
  has: function(e, t) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new ye("`O` is not an object");
    if (typeof t != "string")
      throw new ye("`slot` must be a string");
    var a = Ut.get(e);
    return !!a && Zw(a, "$" + t);
  },
  set: function(e, t, a) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new ye("`O` is not an object");
    if (typeof t != "string")
      throw new ye("`slot` must be a string");
    var o = Ut.get(e);
    o || (o = {}, Ut.set(e, o)), o["$" + t] = a;
  }
};
Object.freeze && Object.freeze(ss);
var eE = ss, jt = eE, tE = SyntaxError, Cu = typeof StopIteration == "object" ? StopIteration : null, aE = function(t) {
  if (!Cu)
    throw new tE("this environment lacks StopIteration");
  jt.set(t, "[[Done]]", !1);
  var a = {
    next: function() {
      var r = jt.get(this, "[[Iterator]]"), n = jt.get(r, "[[Done]]");
      try {
        return {
          done: n,
          value: n ? void 0 : r.next()
        };
      } catch (i) {
        if (jt.set(r, "[[Done]]", !0), i !== Cu)
          throw i;
        return {
          done: !0,
          value: void 0
        };
      }
    }
  };
  return jt.set(a, "[[Iterator]]", t), a;
}, oE = {}.toString, Jp = Array.isArray || function(e) {
  return oE.call(e) == "[object Array]";
}, rE = String.prototype.valueOf, nE = function(t) {
  try {
    return rE.call(t), !0;
  } catch {
    return !1;
  }
}, iE = Object.prototype.toString, lE = "[object String]", sE = it(), Xp = function(t) {
  return typeof t == "string" ? !0 : typeof t != "object" ? !1 : sE ? nE(t) : iE.call(t) === lE;
}, us = typeof Map == "function" && Map.prototype ? Map : null, uE = typeof Set == "function" && Set.prototype ? Set : null, to;
us || (to = function(t) {
  return !1;
});
var Qp = us ? Map.prototype.has : null, _u = uE ? Set.prototype.has : null;
!to && !Qp && (to = function(t) {
  return !1;
});
var Zp = to || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (Qp.call(t), _u)
      try {
        _u.call(t);
      } catch {
        return !0;
      }
    return t instanceof us;
  } catch {
  }
  return !1;
}, cE = typeof Map == "function" && Map.prototype ? Map : null, cs = typeof Set == "function" && Set.prototype ? Set : null, ao;
cs || (ao = function(t) {
  return !1;
});
var Pu = cE ? Map.prototype.has : null, ef = cs ? Set.prototype.has : null;
!ao && !ef && (ao = function(t) {
  return !1;
});
var tf = ao || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (ef.call(t), Pu)
      try {
        Pu.call(t);
      } catch {
        return !0;
      }
    return t instanceof cs;
  } catch {
  }
  return !1;
}, Fu = Up, Iu = aE;
if (Ql() || oi()) {
  var Ci = Symbol.iterator;
  $a.exports = function(t) {
    if (t != null && typeof t[Ci] < "u")
      return t[Ci]();
    if (Fu(t))
      return Array.prototype[Ci].call(t);
  };
} else {
  var dE = Jp, pE = Xp, Ou = ae, fE = Ou("%Map%", !0), mE = Ou("%Set%", !0), re = oe, xu = re("Array.prototype.push"), Mu = re("String.prototype.charCodeAt"), yE = re("String.prototype.slice"), hE = function(t, a) {
    var o = t.length;
    if (a + 1 >= o)
      return a + 1;
    var r = Mu(t, a);
    if (r < 55296 || r > 56319)
      return a + 1;
    var n = Mu(t, a + 1);
    return n < 56320 || n > 57343 ? a + 1 : a + 2;
  }, _i = function(t) {
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
  }, Nu = function(t, a) {
    if (dE(t) || Fu(t))
      return _i(t);
    if (pE(t)) {
      var o = 0;
      return {
        next: function() {
          var n = hE(t, o), i = yE(t, o, n);
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
  if (!fE && !mE)
    $a.exports = function(t) {
      if (t != null)
        return Nu(t, !0);
    };
  else {
    var LE = Zp, vE = tf, ku = re("Map.prototype.forEach", !0), $u = re("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var qu = re("Map.prototype.iterator", !0), Du = re("Set.prototype.iterator", !0);
    var Bu = re("Map.prototype.@@iterator", !0) || re("Map.prototype._es6-shim iterator_", !0), Uu = re("Set.prototype.@@iterator", !0) || re("Set.prototype._es6-shim iterator_", !0), bE = function(t) {
      if (LE(t)) {
        if (qu)
          return Iu(qu(t));
        if (Bu)
          return Bu(t);
        if (ku) {
          var a = [];
          return ku(t, function(r, n) {
            xu(a, [n, r]);
          }), _i(a);
        }
      }
      if (vE(t)) {
        if (Du)
          return Iu(Du(t));
        if (Uu)
          return Uu(t);
        if ($u) {
          var o = [];
          return $u(t, function(r) {
            xu(o, r);
          }), _i(o);
        }
      }
    };
    $a.exports = function(t) {
      return bE(t) || Nu(t);
    };
  }
}
var AE = $a.exports, ju = function(e) {
  return e !== e;
}, af = function(t, a) {
  return t === 0 && a === 0 ? 1 / t === 1 / a : !!(t === a || ju(t) && ju(a));
}, TE = af, of = function() {
  return typeof Object.is == "function" ? Object.is : TE;
}, gE = of, SE = nt, YE = function() {
  var t = gE();
  return SE(Object, { is: t }, {
    is: function() {
      return Object.is !== t;
    }
  }), t;
}, RE = nt, wE = Nt, EE = af, rf = of, CE = YE, nf = wE(rf(), Object);
RE(nf, {
  getPolyfill: rf,
  implementation: EE,
  shim: CE
});
var _E = nf, lf = Function.prototype.toString, vt = typeof Reflect == "object" && Reflect !== null && Reflect.apply, ml, qa;
if (typeof vt == "function" && typeof Object.defineProperty == "function")
  try {
    ml = Object.defineProperty({}, "length", {
      get: function() {
        throw qa;
      }
    }), qa = {}, vt(function() {
      throw 42;
    }, null, ml);
  } catch (e) {
    e !== qa && (vt = null);
  }
else
  vt = null;
var PE = /^\s*class\b/, yl = function(t) {
  try {
    var a = lf.call(t);
    return PE.test(a);
  } catch {
    return !1;
  }
}, Pi = function(t) {
  try {
    return yl(t) ? !1 : (lf.call(t), !0);
  } catch {
    return !1;
  }
}, Da = Object.prototype.toString, FE = "[object Object]", IE = "[object Function]", OE = "[object GeneratorFunction]", xE = "[object HTMLAllCollection]", ME = "[object HTML document.all class]", NE = "[object HTMLCollection]", kE = typeof Symbol == "function" && !!Symbol.toStringTag, $E = !(0 in [,]), hl = function() {
  return !1;
};
if (typeof document == "object") {
  var qE = document.all;
  Da.call(qE) === Da.call(document.all) && (hl = function(t) {
    if (($E || !t) && (typeof t > "u" || typeof t == "object"))
      try {
        var a = Da.call(t);
        return (a === xE || a === ME || a === NE || a === FE) && t("") == null;
      } catch {
      }
    return !1;
  });
}
var DE = vt ? function(t) {
  if (hl(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  try {
    vt(t, null, ml);
  } catch (a) {
    if (a !== qa)
      return !1;
  }
  return !yl(t) && Pi(t);
} : function(t) {
  if (hl(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (kE)
    return Pi(t);
  if (yl(t))
    return !1;
  var a = Da.call(t);
  return a !== IE && a !== OE && !/^\[object HTML/.test(a) ? !1 : Pi(t);
}, BE = DE, UE = Object.prototype.toString, sf = Object.prototype.hasOwnProperty, jE = function(t, a, o) {
  for (var r = 0, n = t.length; r < n; r++)
    sf.call(t, r) && (o == null ? a(t[r], r, t) : a.call(o, t[r], r, t));
}, VE = function(t, a, o) {
  for (var r = 0, n = t.length; r < n; r++)
    o == null ? a(t.charAt(r), r, t) : a.call(o, t.charAt(r), r, t);
}, HE = function(t, a, o) {
  for (var r in t)
    sf.call(t, r) && (o == null ? a(t[r], r, t) : a.call(o, t[r], r, t));
}, WE = function(t, a, o) {
  if (!BE(a))
    throw new TypeError("iterator must be a function");
  var r;
  arguments.length >= 3 && (r = o), UE.call(t) === "[object Array]" ? jE(t, a, r) : typeof t == "string" ? VE(t, a, r) : HE(t, a, r);
}, zE = WE, Fi = [
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
], GE = typeof globalThis > "u" ? Vl : globalThis, KE = function() {
  for (var t = [], a = 0; a < Fi.length; a++)
    typeof GE[Fi[a]] == "function" && (t[t.length] = Fi[a]);
  return t;
}, oo = zE, JE = KE, Vu = Nt, ds = oe, Ba = es, XE = ds("Object.prototype.toString"), uf = it(), Hu = typeof globalThis > "u" ? Vl : globalThis, Ll = JE(), ps = ds("String.prototype.slice"), Ii = Object.getPrototypeOf, QE = ds("Array.prototype.indexOf", !0) || function(t, a) {
  for (var o = 0; o < t.length; o += 1)
    if (t[o] === a)
      return o;
  return -1;
}, ro = { __proto__: null };
uf && Ba && Ii ? oo(Ll, function(e) {
  var t = new Hu[e]();
  if (Symbol.toStringTag in t) {
    var a = Ii(t), o = Ba(a, Symbol.toStringTag);
    if (!o) {
      var r = Ii(a);
      o = Ba(r, Symbol.toStringTag);
    }
    ro["$" + e] = Vu(o.get);
  }
}) : oo(Ll, function(e) {
  var t = new Hu[e](), a = t.slice || t.set;
  a && (ro["$" + e] = Vu(a));
});
var ZE = function(t) {
  var a = !1;
  return oo(ro, function(o, r) {
    if (!a)
      try {
        "$" + o(t) === r && (a = ps(r, 1));
      } catch {
      }
  }), a;
}, eC = function(t) {
  var a = !1;
  return oo(ro, function(o, r) {
    if (!a)
      try {
        o(t), a = ps(r, 1);
      } catch {
      }
  }), a;
}, cf = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!uf) {
    var a = ps(XE(t), 8, -1);
    return QE(Ll, a) > -1 ? a : a !== "Object" ? !1 : eC(t);
  }
  return Ba ? ZE(t) : null;
}, tC = cf, aC = function(t) {
  return !!tC(t);
}, oC = Nt, rC = oe, df = ae, nC = aC, Wu = df("ArrayBuffer", !0), zu = df("Float32Array", !0), Ua = rC("ArrayBuffer.prototype.byteLength", !0), Gu = Wu && !Ua && new Wu().slice, Ku = Gu && oC(Gu), pf = Ua || Ku ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return Ua ? Ua(t) : Ku(t, 0), !0;
  } catch {
    return !1;
  }
} : zu ? function(t) {
  try {
    return new zu(t).buffer === t && !nC(t);
  } catch (a) {
    return typeof t == "object" && a.name === "RangeError";
  }
} : function(t) {
  return !1;
}, iC = Date.prototype.getDay, lC = function(t) {
  try {
    return iC.call(t), !0;
  } catch {
    return !1;
  }
}, sC = Object.prototype.toString, uC = "[object Date]", cC = it(), dC = function(t) {
  return typeof t != "object" || t === null ? !1 : cC ? lC(t) : sC.call(t) === uC;
}, vl = oe, ff = it(), mf, yf, bl, Al;
if (ff) {
  mf = vl("Object.prototype.hasOwnProperty"), yf = vl("RegExp.prototype.exec"), bl = {};
  var Oi = function() {
    throw bl;
  };
  Al = {
    toString: Oi,
    valueOf: Oi
  }, typeof Symbol.toPrimitive == "symbol" && (Al[Symbol.toPrimitive] = Oi);
}
var pC = vl("Object.prototype.toString"), fC = Object.getOwnPropertyDescriptor, mC = "[object RegExp]", yC = ff ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  var a = fC(t, "lastIndex"), o = a && mf(a, "value");
  if (!o)
    return !1;
  try {
    yf(t, Al);
  } catch (r) {
    return r === bl;
  }
} : function(t) {
  return !t || typeof t != "object" && typeof t != "function" ? !1 : pC(t) === mC;
}, hC = oe, Ju = hC("SharedArrayBuffer.prototype.byteLength", !0), LC = Ju ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return Ju(t), !0;
  } catch {
    return !1;
  }
} : function(t) {
  return !1;
}, vC = Number.prototype.toString, bC = function(t) {
  try {
    return vC.call(t), !0;
  } catch {
    return !1;
  }
}, AC = Object.prototype.toString, TC = "[object Number]", gC = it(), SC = function(t) {
  return typeof t == "number" ? !0 : typeof t != "object" ? !1 : gC ? bC(t) : AC.call(t) === TC;
}, hf = oe, YC = hf("Boolean.prototype.toString"), RC = hf("Object.prototype.toString"), wC = function(t) {
  try {
    return YC(t), !0;
  } catch {
    return !1;
  }
}, EC = "[object Boolean]", CC = it(), _C = function(t) {
  return typeof t == "boolean" ? !0 : t === null || typeof t != "object" ? !1 : CC && Symbol.toStringTag in t ? wC(t) : RC(t) === EC;
}, Tl = { exports: {} }, PC = Object.prototype.toString, FC = Ql();
if (FC) {
  var IC = Symbol.prototype.toString, OC = /^Symbol\(.*\)$/, xC = function(t) {
    return typeof t.valueOf() != "symbol" ? !1 : OC.test(IC.call(t));
  };
  Tl.exports = function(t) {
    if (typeof t == "symbol")
      return !0;
    if (PC.call(t) !== "[object Symbol]")
      return !1;
    try {
      return xC(t);
    } catch {
      return !1;
    }
  };
} else
  Tl.exports = function(t) {
    return !1;
  };
var MC = Tl.exports, gl = { exports: {} }, Xu = typeof BigInt < "u" && BigInt, NC = function() {
  return typeof Xu == "function" && typeof BigInt == "function" && typeof Xu(42) == "bigint" && typeof BigInt(42) == "bigint";
}, kC = NC();
if (kC) {
  var $C = BigInt.prototype.valueOf, qC = function(t) {
    try {
      return $C.call(t), !0;
    } catch {
    }
    return !1;
  };
  gl.exports = function(t) {
    return t === null || typeof t > "u" || typeof t == "boolean" || typeof t == "string" || typeof t == "number" || typeof t == "symbol" || typeof t == "function" ? !1 : typeof t == "bigint" ? !0 : qC(t);
  };
} else
  gl.exports = function(t) {
    return !1;
  };
var DC = gl.exports, BC = Xp, UC = SC, jC = _C, VC = MC, HC = DC, WC = function(t) {
  if (t == null || typeof t != "object" && typeof t != "function")
    return null;
  if (BC(t))
    return "String";
  if (UC(t))
    return "Number";
  if (jC(t))
    return "Boolean";
  if (VC(t))
    return "Symbol";
  if (HC(t))
    return "BigInt";
}, no = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, Qu = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, io;
no || (io = function(t) {
  return !1;
});
var Sl = no ? no.prototype.has : null, xi = Qu ? Qu.prototype.has : null;
!io && !Sl && (io = function(t) {
  return !1;
});
var zC = io || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (Sl.call(t, Sl), xi)
      try {
        xi.call(t, xi);
      } catch {
        return !0;
      }
    return t instanceof no;
  } catch {
  }
  return !1;
}, Yl = { exports: {} }, GC = ae, Lf = oe, KC = GC("%WeakSet%", !0), Mi = Lf("WeakSet.prototype.has", !0);
if (Mi) {
  var Ni = Lf("WeakMap.prototype.has", !0);
  Yl.exports = function(t) {
    if (!t || typeof t != "object")
      return !1;
    try {
      if (Mi(t, Mi), Ni)
        try {
          Ni(t, Ni);
        } catch {
          return !0;
        }
      return t instanceof KC;
    } catch {
    }
    return !1;
  };
} else
  Yl.exports = function(t) {
    return !1;
  };
var JC = Yl.exports, XC = Zp, QC = tf, ZC = zC, e9 = JC, t9 = function(t) {
  if (t && typeof t == "object") {
    if (XC(t))
      return "Map";
    if (QC(t))
      return "Set";
    if (ZC(t))
      return "WeakMap";
    if (e9(t))
      return "WeakSet";
  }
  return !1;
}, a9 = oe, Zu = a9("ArrayBuffer.prototype.byteLength", !0), o9 = pf, r9 = function(t) {
  return o9(t) ? Zu ? Zu(t) : t.byteLength : NaN;
}, vf = MR, de = oe, ec = nw, n9 = ae, wt = AE, i9 = Kp, tc = _E, ac = Up, oc = Jp, rc = pf, nc = dC, ic = yC, lc = LC, sc = Xl, uc = WC, cc = t9, dc = cf, pc = r9, fc = de("SharedArrayBuffer.prototype.byteLength", !0), mc = de("Date.prototype.getTime"), ki = Object.getPrototypeOf, yc = de("Object.prototype.toString"), lo = n9("%Set%", !0), Rl = de("Map.prototype.has", !0), so = de("Map.prototype.get", !0), hc = de("Map.prototype.size", !0), uo = de("Set.prototype.add", !0), bf = de("Set.prototype.delete", !0), co = de("Set.prototype.has", !0), ja = de("Set.prototype.size", !0);
function Lc(e, t, a, o) {
  for (var r = wt(e), n; (n = r.next()) && !n.done; )
    if (ue(t, n.value, a, o))
      return bf(e, n.value), !0;
  return !1;
}
function Af(e) {
  if (typeof e > "u")
    return null;
  if (typeof e != "object")
    return typeof e == "symbol" ? !1 : typeof e == "string" || typeof e == "number" ? +e == +e : !0;
}
function l9(e, t, a, o, r, n) {
  var i = Af(a);
  if (i != null)
    return i;
  var s = so(t, i), l = vf({}, r, { strict: !1 });
  return typeof s > "u" && !Rl(t, i) || !ue(o, s, l, n) ? !1 : !Rl(e, i) && ue(o, s, l, n);
}
function s9(e, t, a) {
  var o = Af(a);
  return o ?? (co(t, o) && !co(e, o));
}
function vc(e, t, a, o, r, n) {
  for (var i = wt(e), s, l; (s = i.next()) && !s.done; )
    if (l = s.value, // eslint-disable-next-line no-use-before-define
    ue(a, l, r, n) && ue(o, so(t, l), r, n))
      return bf(e, l), !0;
  return !1;
}
function ue(e, t, a, o) {
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
  return s || o.set(e, u), l || o.set(t, u), d9(e, t, r, o);
}
function bc(e) {
  return !e || typeof e != "object" || typeof e.length != "number" || typeof e.copy != "function" || typeof e.slice != "function" || e.length > 0 && typeof e[0] != "number" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function u9(e, t, a, o) {
  if (ja(e) !== ja(t))
    return !1;
  for (var r = wt(e), n = wt(t), i, s, l; (i = r.next()) && !i.done; )
    if (i.value && typeof i.value == "object")
      l || (l = new lo()), uo(l, i.value);
    else if (!co(t, i.value)) {
      if (a.strict || !s9(e, t, i.value))
        return !1;
      l || (l = new lo()), uo(l, i.value);
    }
  if (l) {
    for (; (s = n.next()) && !s.done; )
      if (s.value && typeof s.value == "object") {
        if (!Lc(l, s.value, a.strict, o))
          return !1;
      } else if (!a.strict && !co(e, s.value) && !Lc(l, s.value, a.strict, o))
        return !1;
    return ja(l) === 0;
  }
  return !0;
}
function c9(e, t, a, o) {
  if (hc(e) !== hc(t))
    return !1;
  for (var r = wt(e), n = wt(t), i, s, l, u, c, d; (i = r.next()) && !i.done; )
    if (u = i.value[0], c = i.value[1], u && typeof u == "object")
      l || (l = new lo()), uo(l, u);
    else if (d = so(t, u), typeof d > "u" && !Rl(t, u) || !ue(c, d, a, o)) {
      if (a.strict || !l9(e, t, u, c, a, o))
        return !1;
      l || (l = new lo()), uo(l, u);
    }
  if (l) {
    for (; (s = n.next()) && !s.done; )
      if (u = s.value[0], d = s.value[1], u && typeof u == "object") {
        if (!vc(l, e, u, d, a, o))
          return !1;
      } else if (!a.strict && (!e.has(u) || !ue(so(e, u), d, a, o)) && !vc(l, e, u, d, vf({}, a, { strict: !1 }), o))
        return !1;
    return ja(l) === 0;
  }
  return !0;
}
function d9(e, t, a, o) {
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
  if (p !== y || (p || y) && mc(e) !== mc(t) || a.strict && ki && ki(e) !== ki(t))
    return !1;
  var h = dc(e), v = dc(t);
  if (h !== v)
    return !1;
  if (h || v) {
    if (e.length !== t.length)
      return !1;
    for (r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  var R = bc(e), f = bc(t);
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
  var T = rc(e), Y = rc(t);
  if (T !== Y)
    return !1;
  if (T || Y)
    return pc(e) !== pc(t) ? !1 : typeof Uint8Array == "function" && ue(new Uint8Array(e), new Uint8Array(t), a, o);
  var S = lc(e), w = lc(t);
  if (S !== w)
    return !1;
  if (S || w)
    return fc(e) !== fc(t) ? !1 : typeof Uint8Array == "function" && ue(new Uint8Array(e), new Uint8Array(t), a, o);
  if (typeof e != typeof t)
    return !1;
  var m = sc(e), L = sc(t);
  if (m.length !== L.length)
    return !1;
  for (m.sort(), L.sort(), r = m.length - 1; r >= 0; r--)
    if (m[r] != L[r])
      return !1;
  for (r = m.length - 1; r >= 0; r--)
    if (n = m[r], !ue(e[n], t[n], a, o))
      return !1;
  var A = cc(e), x = cc(t);
  return A !== x ? !1 : A === "Set" || x === "Set" ? u9(e, t, a, o) : A === "Map" ? c9(e, t, a, o) : !0;
}
var p9 = function(t, a, o) {
  return ue(t, a, o, i9());
};
Object.defineProperty(ai, "__esModule", {
  value: !0
});
ai.default = void 0;
var f9 = fs(p9), m9 = fs(rt), Tf = fs(Mt);
function fs(e) {
  return e && e.__esModule ? e : { default: e };
}
function $i(e, t) {
  return L9(e) || h9(e, t) || gf(e, t) || y9();
}
function y9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function h9(e, t) {
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
function L9(e) {
  if (Array.isArray(e))
    return e;
}
function v9(e, t) {
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
      return Ac(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Ac(e, t);
  }
}
function Ac(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, o = new Array(t); a < t; a++)
    o[a] = e[a];
  return o;
}
var Ie = [], Tc = Tf.default.keys();
for (var qi = 0; qi < Tc.length; qi++) {
  var Di = Tc[qi], Bi = Tf.default.get(Di);
  if (Bi)
    for (var gc = [].concat(Bi.baseConcepts, Bi.relatedConcepts), Ui = 0; Ui < gc.length; Ui++) {
      var Sc = gc[Ui];
      if (Sc.module === "HTML") {
        var ji = Sc.concept;
        ji && function() {
          var e = JSON.stringify(ji), t = Ie.find(function(n) {
            return JSON.stringify(n[0]) === e;
          }), a = void 0;
          t ? a = t[1] : a = [];
          for (var o = !0, r = 0; r < a.length; r++)
            if (a[r] === Di) {
              o = !1;
              break;
            }
          o && a.push(Di), Ie.push([ji, a]);
        }();
      }
    }
}
var wl = {
  entries: function() {
    return Ie;
  },
  forEach: function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, o = v9(Ie), r;
    try {
      for (o.s(); !(r = o.n()).done; ) {
        var n = $i(r.value, 2), i = n[0], s = n[1];
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
      return (0, f9.default)(t, o[0]);
    });
    return a && a[1];
  },
  has: function(t) {
    return !!wl.get(t);
  },
  keys: function() {
    return Ie.map(function(t) {
      var a = $i(t, 1), o = a[0];
      return o;
    });
  },
  values: function() {
    return Ie.map(function(t) {
      var a = $i(t, 2), o = a[1];
      return o;
    });
  }
}, b9 = (0, m9.default)(wl, wl.entries());
ai.default = b9;
var ii = {};
Object.defineProperty(ii, "__esModule", {
  value: !0
});
ii.default = void 0;
var A9 = Yf(rt), Sf = Yf(Mt);
function Yf(e) {
  return e && e.__esModule ? e : { default: e };
}
function Vi(e, t) {
  return S9(e) || g9(e, t) || Rf(e, t) || T9();
}
function T9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function g9(e, t) {
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
function S9(e) {
  if (Array.isArray(e))
    return e;
}
function Y9(e, t) {
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
var Oe = [], wf = Sf.default.keys(), R9 = function(t) {
  var a = wf[t], o = Sf.default.get(a);
  if (o)
    for (var r = [].concat(o.baseConcepts, o.relatedConcepts), n = 0; n < r.length; n++) {
      var i = r[n];
      if (i.module === "HTML") {
        var s = i.concept;
        if (s) {
          var l = Oe.find(function(c) {
            return c[0] === a;
          }), u = void 0;
          l ? u = l[1] : u = [], u.push(s), Oe.push([a, u]);
        }
      }
    }
};
for (var Hi = 0; Hi < wf.length; Hi++)
  R9(Hi);
var El = {
  entries: function() {
    return Oe;
  },
  forEach: function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, o = Y9(Oe), r;
    try {
      for (o.s(); !(r = o.n()).done; ) {
        var n = Vi(r.value, 2), i = n[0], s = n[1];
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
      return o[0] === t;
    });
    return a && a[1];
  },
  has: function(t) {
    return !!El.get(t);
  },
  keys: function() {
    return Oe.map(function(t) {
      var a = Vi(t, 1), o = a[0];
      return o;
    });
  },
  values: function() {
    return Oe.map(function(t) {
      var a = Vi(t, 2), o = a[1];
      return o;
    });
  }
}, w9 = (0, A9.default)(El, El.entries());
ii.default = w9;
Object.defineProperty(se, "__esModule", {
  value: !0
});
var ne = se.roles = Cf = se.roleElements = Ef = se.elementRoles = se.dom = se.aria = void 0, E9 = pa(Ao), C9 = pa(go), _9 = pa(Mt), P9 = pa(ai), F9 = pa(ii);
function pa(e) {
  return e && e.__esModule ? e : { default: e };
}
var I9 = E9.default;
se.aria = I9;
var O9 = C9.default;
se.dom = O9;
var x9 = _9.default;
ne = se.roles = x9;
var M9 = P9.default, Ef = se.elementRoles = M9, N9 = F9.default, Cf = se.roleElements = N9, ms = { exports: {} };
ms.exports;
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
        var d, p, y = {}, h = {}, v = "", R = "", f = "", T = 2, Y = 3, S = 2, w = [], m = 0, L = 0, A;
        for (A = 0; A < l.length; A += 1)
          if (v = l.charAt(A), Object.prototype.hasOwnProperty.call(y, v) || (y[v] = Y++, h[v] = !0), R = f + v, Object.prototype.hasOwnProperty.call(y, R))
            f = R;
          else {
            if (Object.prototype.hasOwnProperty.call(h, f)) {
              if (f.charCodeAt(0) < 256) {
                for (d = 0; d < S; d++)
                  m = m << 1, L == u - 1 ? (L = 0, w.push(c(m)), m = 0) : L++;
                for (p = f.charCodeAt(0), d = 0; d < 8; d++)
                  m = m << 1 | p & 1, L == u - 1 ? (L = 0, w.push(c(m)), m = 0) : L++, p = p >> 1;
              } else {
                for (p = 1, d = 0; d < S; d++)
                  m = m << 1 | p, L == u - 1 ? (L = 0, w.push(c(m)), m = 0) : L++, p = 0;
                for (p = f.charCodeAt(0), d = 0; d < 16; d++)
                  m = m << 1 | p & 1, L == u - 1 ? (L = 0, w.push(c(m)), m = 0) : L++, p = p >> 1;
              }
              T--, T == 0 && (T = Math.pow(2, S), S++), delete h[f];
            } else
              for (p = y[f], d = 0; d < S; d++)
                m = m << 1 | p & 1, L == u - 1 ? (L = 0, w.push(c(m)), m = 0) : L++, p = p >> 1;
            T--, T == 0 && (T = Math.pow(2, S), S++), y[R] = Y++, f = String(v);
          }
        if (f !== "") {
          if (Object.prototype.hasOwnProperty.call(h, f)) {
            if (f.charCodeAt(0) < 256) {
              for (d = 0; d < S; d++)
                m = m << 1, L == u - 1 ? (L = 0, w.push(c(m)), m = 0) : L++;
              for (p = f.charCodeAt(0), d = 0; d < 8; d++)
                m = m << 1 | p & 1, L == u - 1 ? (L = 0, w.push(c(m)), m = 0) : L++, p = p >> 1;
            } else {
              for (p = 1, d = 0; d < S; d++)
                m = m << 1 | p, L == u - 1 ? (L = 0, w.push(c(m)), m = 0) : L++, p = 0;
              for (p = f.charCodeAt(0), d = 0; d < 16; d++)
                m = m << 1 | p & 1, L == u - 1 ? (L = 0, w.push(c(m)), m = 0) : L++, p = p >> 1;
            }
            T--, T == 0 && (T = Math.pow(2, S), S++), delete h[f];
          } else
            for (p = y[f], d = 0; d < S; d++)
              m = m << 1 | p & 1, L == u - 1 ? (L = 0, w.push(c(m)), m = 0) : L++, p = p >> 1;
          T--, T == 0 && (T = Math.pow(2, S), S++);
        }
        for (p = 2, d = 0; d < S; d++)
          m = m << 1 | p & 1, L == u - 1 ? (L = 0, w.push(c(m)), m = 0) : L++, p = p >> 1;
        for (; ; )
          if (m = m << 1, L == u - 1) {
            w.push(c(m));
            break;
          } else
            L++;
        return w.join("");
      },
      decompress: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32768, function(u) {
          return l.charCodeAt(u);
        });
      },
      _decompress: function(l, u, c) {
        var d = [], p = 4, y = 4, h = 3, v = "", R = [], f, T, Y, S, w, m, L, A = { val: c(0), position: u, index: 1 };
        for (f = 0; f < 3; f += 1)
          d[f] = f;
        for (Y = 0, w = Math.pow(2, 2), m = 1; m != w; )
          S = A.val & A.position, A.position >>= 1, A.position == 0 && (A.position = u, A.val = c(A.index++)), Y |= (S > 0 ? 1 : 0) * m, m <<= 1;
        switch (Y) {
          case 0:
            for (Y = 0, w = Math.pow(2, 8), m = 1; m != w; )
              S = A.val & A.position, A.position >>= 1, A.position == 0 && (A.position = u, A.val = c(A.index++)), Y |= (S > 0 ? 1 : 0) * m, m <<= 1;
            L = a(Y);
            break;
          case 1:
            for (Y = 0, w = Math.pow(2, 16), m = 1; m != w; )
              S = A.val & A.position, A.position >>= 1, A.position == 0 && (A.position = u, A.val = c(A.index++)), Y |= (S > 0 ? 1 : 0) * m, m <<= 1;
            L = a(Y);
            break;
          case 2:
            return "";
        }
        for (d[3] = L, T = L, R.push(L); ; ) {
          if (A.index > l)
            return "";
          for (Y = 0, w = Math.pow(2, h), m = 1; m != w; )
            S = A.val & A.position, A.position >>= 1, A.position == 0 && (A.position = u, A.val = c(A.index++)), Y |= (S > 0 ? 1 : 0) * m, m <<= 1;
          switch (L = Y) {
            case 0:
              for (Y = 0, w = Math.pow(2, 8), m = 1; m != w; )
                S = A.val & A.position, A.position >>= 1, A.position == 0 && (A.position = u, A.val = c(A.index++)), Y |= (S > 0 ? 1 : 0) * m, m <<= 1;
              d[y++] = a(Y), L = y - 1, p--;
              break;
            case 1:
              for (Y = 0, w = Math.pow(2, 16), m = 1; m != w; )
                S = A.val & A.position, A.position >>= 1, A.position == 0 && (A.position = u, A.val = c(A.index++)), Y |= (S > 0 ? 1 : 0) * m, m <<= 1;
              d[y++] = a(Y), L = y - 1, p--;
              break;
            case 2:
              return R.join("");
          }
          if (p == 0 && (p = Math.pow(2, h), h++), d[L])
            v = d[L];
          else if (L === y)
            v = T + T.charAt(0);
          else
            return null;
          R.push(v), d[y++] = T + v.charAt(0), p--, T = v, p == 0 && (p = Math.pow(2, h), h++);
        }
      }
    };
    return s;
  }();
  e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return t;
  });
})(ms);
var k9 = ms.exports;
const $9 = /* @__PURE__ */ jy(k9);
function _f(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const q9 = (e, t, a, o, r, n, i) => {
  const s = o + a.indent, l = a.colors;
  return e.map((u) => {
    const c = t[u];
    let d = i(c, a, s, r, n);
    return typeof c != "string" && (d.indexOf(`
`) !== -1 && (d = a.spacingOuter + s + d + a.spacingOuter + o), d = "{" + d + "}"), a.spacingInner + o + l.prop.open + u + l.prop.close + "=" + l.value.open + d + l.value.close;
  }).join("");
}, D9 = 3, B9 = (e, t, a, o, r, n) => e.map((i) => {
  const s = typeof i == "string" ? Pf(i, t) : n(i, t, a, o, r);
  return s === "" && typeof i == "object" && i !== null && i.nodeType !== D9 ? "" : t.spacingOuter + a + s;
}).join(""), Pf = (e, t) => {
  const a = t.colors.content;
  return a.open + _f(e) + a.close;
}, U9 = (e, t) => {
  const a = t.colors.comment;
  return a.open + "<!--" + _f(e) + "-->" + a.close;
}, j9 = (e, t, a, o, r) => {
  const n = o.colors.tag;
  return n.open + "<" + e + (t && n.close + t + o.spacingOuter + r + n.open) + (a ? ">" + n.close + a + o.spacingOuter + r + n.open + "</" + e : (t && !o.min ? "" : " ") + "/") + ">" + n.close;
}, V9 = (e, t) => {
  const a = t.colors.tag;
  return a.open + "<" + e + a.close + " …" + a.open + " />" + a.close;
}, H9 = 1, Ff = 3, If = 8, Of = 11, W9 = /^((HTML|SVG)\w*)?Element$/, z9 = (e) => {
  const t = e.constructor.name, {
    nodeType: a,
    tagName: o
  } = e, r = typeof o == "string" && o.includes("-") || typeof e.hasAttribute == "function" && e.hasAttribute("is");
  return a === H9 && (W9.test(t) || r) || a === Ff && t === "Text" || a === If && t === "Comment" || a === Of && t === "DocumentFragment";
};
function G9(e) {
  return e.nodeType === Ff;
}
function K9(e) {
  return e.nodeType === If;
}
function Wi(e) {
  return e.nodeType === Of;
}
function J9(e) {
  return {
    test: (t) => {
      var a;
      return (t == null || (a = t.constructor) == null ? void 0 : a.name) && z9(t);
    },
    serialize: (t, a, o, r, n, i) => {
      if (G9(t))
        return Pf(t.data, a);
      if (K9(t))
        return U9(t.data, a);
      const s = Wi(t) ? "DocumentFragment" : t.tagName.toLowerCase();
      return ++r > a.maxDepth ? V9(s, a) : j9(s, q9(Wi(t) ? [] : Array.from(t.attributes).map((l) => l.name).sort(), Wi(t) ? {} : Array.from(t.attributes).reduce((l, u) => (l[u.name] = u.value, l), {}), a, o + a.indent, r, n, i), B9(Array.prototype.slice.call(t.childNodes || t.children).filter(e), a, o + a.indent, r, n, i), a, o);
    }
  };
}
let xf = null, ys = null, hs = null;
try {
  const e = module && module.require;
  ys = e.call(module, "fs").readFileSync, hs = e.call(module, "@babel/code-frame").codeFrameColumns, xf = e.call(module, "chalk");
} catch {
}
function X9(e) {
  const t = e.indexOf("(") + 1, a = e.indexOf(")"), o = e.slice(t, a), r = o.split(":"), [n, i, s] = [r[0], parseInt(r[1], 10), parseInt(r[2], 10)];
  let l = "";
  try {
    l = ys(n, "utf-8");
  } catch {
    return "";
  }
  const u = hs(l, {
    start: {
      line: i,
      column: s
    }
  }, {
    highlightCode: !0,
    linesBelow: 0
  });
  return xf.dim(o) + `
` + u + `
`;
}
function Q9() {
  if (!ys || !hs)
    return "";
  const t = new Error().stack.split(`
`).slice(1).find((a) => !a.includes("node_modules/"));
  return X9(t);
}
const Mf = 3;
function zi() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function Ls() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function Nf(e) {
  if (e.defaultView)
    return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window)
    return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof e.debug == "function" && typeof e.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof e + ".");
}
function Se(e) {
  if (!e || typeof e.querySelector != "function" || typeof e.querySelectorAll != "function")
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + t(e) + ".");
  function t(a) {
    return typeof a == "object" ? a === null ? "null" : a.constructor.name : typeof a;
  }
}
const Z9 = () => {
  let e;
  try {
    var t;
    e = JSON.parse((t = process) == null || (t = t.env) == null ? void 0 : t.COLORS);
  } catch {
  }
  return typeof e == "boolean" ? e : typeof process < "u" && process.versions !== void 0 && process.versions.node !== void 0;
}, {
  DOMCollection: e_
} = zl, t_ = 1, a_ = 8;
function o_(e) {
  return e.nodeType !== a_ && (e.nodeType !== t_ || !e.matches(I().defaultIgnore));
}
function ra(e, t, a) {
  if (a === void 0 && (a = {}), e || (e = Ls().body), typeof t != "number" && (t = typeof process < "u" && process.env.DEBUG_PRINT_LIMIT || 7e3), t === 0)
    return "";
  e.documentElement && (e = e.documentElement);
  let o = typeof e;
  if (o === "object" ? o = e.constructor.name : e = {}, !("outerHTML" in e))
    throw new TypeError("Expected an element or document but got " + o);
  const {
    filterNode: r = o_,
    ...n
  } = a, i = Qd(e, {
    plugins: [J9(r), e_],
    printFunctionName: !1,
    highlight: Z9(),
    ...n
  });
  return t !== void 0 && e.outerHTML.length > t ? i.slice(0, t) + "..." : i;
}
const Cl = function() {
  const e = Q9();
  console.log(e ? ra(...arguments) + `

` + e : ra(...arguments));
};
let et = {
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
    const a = ra(t), o = new Error([e, "Ignored nodes: comments, " + et.defaultIgnore + `
` + a].filter(Boolean).join(`

`));
    return o.name = "TestingLibraryElementError", o;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1
};
function r_(e) {
  try {
    return et._disableExpensiveErrorDiagnostics = !0, e();
  } finally {
    et._disableExpensiveErrorDiagnostics = !1;
  }
}
function n_(e) {
  typeof e == "function" && (e = e(et)), et = {
    ...et,
    ...e
  };
}
function I() {
  return et;
}
const i_ = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function kf(e) {
  return i_.includes(e.nodeName.toLowerCase()) ? "" : e.nodeType === Mf ? e.textContent : Array.from(e.childNodes).map((t) => kf(t)).join("");
}
function _l(e) {
  let t;
  return e.tagName.toLowerCase() === "label" ? t = kf(e) : t = e.value || e.textContent, t;
}
function $f(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!l_(e))
    return [];
  const a = e.ownerDocument.querySelectorAll("label");
  return Array.from(a).filter((o) => o.control === e);
}
function l_(e) {
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
      content: _l(s),
      formControl: null
    } : {
      content: "",
      formControl: null
    };
  }) : Array.from($f(t)).map((i) => {
    const s = _l(i), l = "button, input, meter, output, progress, select, textarea", u = Array.from(i.querySelectorAll(l)).filter((c) => c.matches(o))[0];
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
function $t(e, t, a, o) {
  if (typeof e != "string")
    return !1;
  Df(a);
  const r = o(e);
  return typeof a == "string" || typeof a == "number" ? r.toLowerCase().includes(a.toString().toLowerCase()) : typeof a == "function" ? a(r, t) : Bf(a, r);
}
function be(e, t, a, o) {
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
function lt(e) {
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
function fa(e) {
  return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((t) => t.nodeType === Mf && !!t.textContent).map((t) => t.textContent).join("");
}
const s_ = u_(Ef);
function Uf(e) {
  return e.hidden === !0 || e.getAttribute("aria-hidden") === "true" || e.ownerDocument.defaultView.getComputedStyle(e).display === "none";
}
function li(e, t) {
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
function bs(e) {
  for (const {
    match: t,
    roles: a
  } of s_)
    if (t(e))
      return [...a];
  return [];
}
function u_(e) {
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
  return o(e).filter((r) => a === !1 ? li(r) === !1 : !0).reduce((r, n) => {
    let i = [];
    return n.hasAttribute("role") ? i = n.getAttribute("role").split(" ").slice(0, 1) : i = bs(n), i.reduce((s, l) => Array.isArray(s[l]) ? {
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
      const d = 'Name "' + Kl(c, {
        computedStyleSupportsPseudoElements: I().computedStyleSupportsPseudoElements
      }) + `":
`, p = ra(c.cloneNode(!1));
      if (o) {
        const y = 'Description "' + vp(c, {
          computedStyleSupportsPseudoElements: I().computedStyleSupportsPseudoElements
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
const c_ = function(e, t) {
  let {
    hidden: a = !1
  } = t === void 0 ? {} : t;
  return console.log(Vf(e, {
    hidden: a
  }));
};
function d_(e) {
  return e.tagName === "OPTION" ? e.selected : ma(e, "aria-selected");
}
function p_(e) {
  return e.getAttribute("aria-busy") === "true";
}
function f_(e) {
  if (!("indeterminate" in e && e.indeterminate))
    return "checked" in e ? e.checked : ma(e, "aria-checked");
}
function m_(e) {
  return ma(e, "aria-pressed");
}
function y_(e) {
  var t, a;
  return (t = (a = ma(e, "aria-current")) != null ? a : e.getAttribute("aria-current")) != null ? t : !1;
}
function h_(e) {
  return ma(e, "aria-expanded");
}
function ma(e, t) {
  const a = e.getAttribute(t);
  if (a === "true")
    return !0;
  if (a === "false")
    return !1;
}
function L_(e) {
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
function v_(e) {
  const t = e.getAttribute("aria-valuenow");
  return t === null ? void 0 : +t;
}
function b_(e) {
  const t = e.getAttribute("aria-valuemax");
  return t === null ? void 0 : +t;
}
function A_(e) {
  const t = e.getAttribute("aria-valuemin");
  return t === null ? void 0 : +t;
}
function T_(e) {
  const t = e.getAttribute("aria-valuetext");
  return t === null ? void 0 : t;
}
const Rc = vs();
function g_(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function wc(e) {
  return new RegExp(g_(e.toLowerCase()), "i");
}
function Re(e, t, a, o) {
  let {
    variant: r,
    name: n
  } = o, i = "";
  const s = {}, l = [["Role", "TestId"].includes(e) ? a : wc(a)];
  n && (s.name = wc(n)), e === "Role" && li(t) && (s.hidden = !0, i = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
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
function po(e, t, a) {
  var o, r;
  if (t === void 0 && (t = "get"), e.matches(I().defaultIgnore))
    return;
  const n = (o = e.getAttribute("role")) != null ? o : (r = bs(e)) == null ? void 0 : r[0];
  if (n !== "generic" && we("Role", a, n))
    return Re("Role", e, n, {
      variant: t,
      name: Kl(e, {
        computedStyleSupportsPseudoElements: I().computedStyleSupportsPseudoElements
      })
    });
  const i = qf(document, e).map((p) => p.content).join(" ");
  if (we("LabelText", a, i))
    return Re("LabelText", e, i, {
      variant: t
    });
  const s = e.getAttribute("placeholder");
  if (we("PlaceholderText", a, s))
    return Re("PlaceholderText", e, s, {
      variant: t
    });
  const l = Rc(fa(e));
  if (we("Text", a, l))
    return Re("Text", e, l, {
      variant: t
    });
  if (we("DisplayValue", a, e.value))
    return Re("DisplayValue", e, Rc(e.value), {
      variant: t
    });
  const u = e.getAttribute("alt");
  if (we("AltText", a, u))
    return Re("AltText", e, u, {
      variant: t
    });
  const c = e.getAttribute("title");
  if (we("Title", a, c))
    return Re("Title", e, c, {
      variant: t
    });
  const d = e.getAttribute(I().testIdAttribute);
  if (we("TestId", a, d))
    return Re("TestId", e, d, {
      variant: t
    });
}
function ga(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function S_(e, t) {
  let {
    container: a = Ls(),
    timeout: o = I().asyncUtilTimeout,
    showOriginalStackTrace: r = I().showOriginalStackTrace,
    stackTraceError: n,
    interval: i = 50,
    onTimeout: s = (u) => (Object.defineProperty(u, "message", {
      value: I().getElementError(u.message, a).message
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
    let d, p, y, h = !1, v = "idle";
    const R = setTimeout(w, o), f = zi();
    if (f) {
      const {
        unstable_advanceTimersWrapper: m
      } = I();
      for (S(); !h; ) {
        if (!zi()) {
          const L = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          r || ga(L, n), c(L);
          return;
        }
        if (await m(async () => {
          jest.advanceTimersByTime(i);
        }), h)
          break;
        S();
      }
    } else {
      try {
        Se(a);
      } catch (L) {
        c(L);
        return;
      }
      p = setInterval(Y, i);
      const {
        MutationObserver: m
      } = Nf(a);
      y = new m(Y), y.observe(a, l), S();
    }
    function T(m, L) {
      h = !0, clearTimeout(R), f || (clearInterval(p), y.disconnect()), m ? c(m) : u(L);
    }
    function Y() {
      if (zi()) {
        const m = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return r || ga(m, n), c(m);
      } else
        return S();
    }
    function S() {
      if (v !== "pending")
        try {
          const m = r_(e);
          typeof (m == null ? void 0 : m.then) == "function" ? (v = "pending", m.then((L) => {
            v = "resolved", T(null, L);
          }, (L) => {
            v = "rejected", d = L;
          })) : T(null, m);
        } catch (m) {
          d = m;
        }
    }
    function w() {
      let m;
      d ? (m = d, !r && m.name === "TestingLibraryElementError" && ga(m, n)) : (m = new Error("Timed out in waitFor."), r || ga(m, n)), T(s(m), null);
    }
  });
}
function As(e, t) {
  const a = new Error("STACK_TRACE_MESSAGE");
  return I().asyncWrapper(() => S_(e, {
    stackTraceError: a,
    ...t
  }));
}
function si(e, t) {
  return I().getElementError(e, t);
}
function ui(e, t) {
  return si(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", t);
}
function st(e, t, a, o) {
  let {
    exact: r = !0,
    collapseWhitespace: n,
    trim: i,
    normalizer: s
  } = o === void 0 ? {} : o;
  const l = r ? be : $t, u = lt({
    collapseWhitespace: n,
    trim: i,
    normalizer: s
  });
  return Array.from(t.querySelectorAll("[" + e + "]")).filter((c) => l(c.getAttribute(e), c, a, u));
}
function Hf(e, t, a, o) {
  const r = st(e, t, a, o);
  if (r.length > 1)
    throw ui("Found multiple elements by [" + e + "=" + a + "]", t);
  return r[0] || null;
}
function Et(e, t) {
  return function(a) {
    for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), n = 1; n < o; n++)
      r[n - 1] = arguments[n];
    const i = e(a, ...r);
    if (i.length > 1) {
      const s = i.map((l) => si(null, l).message).join(`

`);
      throw ui(t(a, ...r) + `

Here are the matching elements:

` + s, a);
    }
    return i[0] || null;
  };
}
function Wf(e, t) {
  return I().getElementError(`A better query is available, try this:
` + e.toString() + `
`, t);
}
function Ts(e, t) {
  return function(a) {
    for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), n = 1; n < o; n++)
      r[n - 1] = arguments[n];
    const i = e(a, ...r);
    if (!i.length)
      throw I().getElementError(t(a, ...r), a);
    return i;
  };
}
function Ct(e) {
  return (t, a, o, r) => As(() => e(t, a, o), {
    container: t,
    ...r
  });
}
const Ve = (e, t, a) => function(o) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  const s = e(o, ...n), [{
    suggest: l = I().throwSuggestions
  } = {}] = n.slice(-1);
  if (s && l) {
    const u = po(s, a);
    if (u && !t.endsWith(u.queryName))
      throw Wf(u.toString(), o);
  }
  return s;
}, Q = (e, t, a) => function(o) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  const s = e(o, ...n), [{
    suggest: l = I().throwSuggestions
  } = {}] = n.slice(-1);
  if (s.length && l) {
    const u = [...new Set(s.map((c) => {
      var d;
      return (d = po(c, a)) == null ? void 0 : d.toString();
    }))];
    if (
      // only want to suggest if all the els have the same suggestion.
      u.length === 1 && !t.endsWith(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
        po(s[0], a).queryName
      )
    )
      throw Wf(u[0], o);
  }
  return s;
};
function Ye(e, t, a) {
  const o = Ve(Et(e, t), e.name, "query"), r = Ts(e, a), n = Et(r, t), i = Ve(n, e.name, "get"), s = Q(r, e.name.replace("query", "get"), "getAll"), l = Ct(Q(r, e.name, "findAll")), u = Ct(Ve(n, e.name, "find"));
  return [o, s, i, l, u];
}
var Y_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getElementError: si,
  wrapAllByQueryWithSuggestion: Q,
  wrapSingleQueryWithSuggestion: Ve,
  getMultipleElementsFoundError: ui,
  queryAllByAttribute: st,
  queryByAttribute: Hf,
  makeSingleQuery: Et,
  makeGetAllQuery: Ts,
  makeFindQuery: Ct,
  buildQueries: Ye
});
function R_(e) {
  return Array.from(e.querySelectorAll("label,input")).map((t) => ({
    node: t,
    textToMatch: _l(t)
  })).filter((t) => {
    let {
      textToMatch: a
    } = t;
    return a !== null;
  });
}
const w_ = function(e, t, a) {
  let {
    exact: o = !0,
    trim: r,
    collapseWhitespace: n,
    normalizer: i
  } = a === void 0 ? {} : a;
  const s = o ? be : $t, l = lt({
    collapseWhitespace: n,
    trim: r,
    normalizer: i
  });
  return R_(e).filter((c) => {
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
}, na = function(e, t, a) {
  let {
    selector: o = "*",
    exact: r = !0,
    collapseWhitespace: n,
    trim: i,
    normalizer: s
  } = a === void 0 ? {} : a;
  Se(e);
  const l = r ? be : $t, u = lt({
    collapseWhitespace: n,
    trim: i,
    normalizer: s
  }), c = Array.from(e.querySelectorAll("*")).filter((d) => $f(d).length || d.hasAttribute("aria-labelledby")).reduce((d, p) => {
    const y = qf(e, p, {
      selector: o
    });
    y.filter((v) => !!v.formControl).forEach((v) => {
      l(v.content, v.formControl, t, u) && v.formControl && d.push(v.formControl);
    });
    const h = y.filter((v) => !!v.content).map((v) => v.content);
    return l(h.join(" "), p, t, u) && d.push(p), h.length > 1 && h.forEach((v, R) => {
      l(v, p, t, u) && d.push(p);
      const f = [...h];
      f.splice(R, 1), f.length > 1 && l(f.join(" "), p, t, u) && d.push(p);
    }), d;
  }, []).concat(st("aria-label", e, t, {
    exact: r,
    normalizer: u
  }));
  return Array.from(new Set(c)).filter((d) => d.matches(o));
}, tt = function(e, t) {
  for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
    o[r - 2] = arguments[r];
  const n = na(e, t, ...o);
  if (!n.length) {
    const i = w_(e, t, ...o);
    if (i.length) {
      const s = i.map((l) => E_(e, l)).filter((l) => !!l);
      throw s.length ? I().getElementError(s.map((l) => "Found a label with the text of: " + t + ", however the element associated with this label (<" + l + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + l + " />, you can use aria-label or aria-labelledby instead.").join(`

`), e) : I().getElementError("Found a label with the text of: " + t + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, e);
    } else
      throw I().getElementError("Unable to find a label with the text of: " + t, e);
  }
  return n;
};
function E_(e, t) {
  const a = t.getAttribute("for");
  if (!a)
    return null;
  const o = e.querySelector('[id="' + a + '"]');
  return o ? o.tagName.toLowerCase() : null;
}
const zf = (e, t) => "Found multiple elements with the text of: " + t, Gf = Ve(Et(na, zf), na.name, "query"), Kf = Et(tt, zf), Jf = Ct(Q(tt, tt.name, "findAll")), Xf = Ct(Ve(Kf, tt.name, "find")), Qf = Q(tt, tt.name, "getAll"), Zf = Ve(Kf, tt.name, "get"), em = Q(na, na.name, "queryAll"), Pl = function() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return Se(t[0]), st("placeholder", ...t);
}, C_ = (e, t) => "Found multiple elements with the placeholder text of: " + t, __ = (e, t) => "Unable to find an element with the placeholder text of: " + t, tm = Q(Pl, Pl.name, "queryAll"), [am, om, rm, nm, im] = Ye(Pl, C_, __), Fl = function(e, t, a) {
  let {
    selector: o = "*",
    exact: r = !0,
    collapseWhitespace: n,
    trim: i,
    ignore: s = I().defaultIgnore,
    normalizer: l
  } = a === void 0 ? {} : a;
  Se(e);
  const u = r ? be : $t, c = lt({
    collapseWhitespace: n,
    trim: i,
    normalizer: l
  });
  let d = [];
  return typeof e.matches == "function" && e.matches(o) && (d = [e]), [...d, ...Array.from(e.querySelectorAll(o))].filter((p) => !s || !p.matches(s)).filter((p) => u(fa(p), p, t, c));
}, P_ = (e, t) => "Found multiple elements with the text: " + t, F_ = function(e, t, a) {
  a === void 0 && (a = {});
  const {
    collapseWhitespace: o,
    trim: r,
    normalizer: n,
    selector: i
  } = a, l = lt({
    collapseWhitespace: o,
    trim: r,
    normalizer: n
  })(t.toString()), u = l !== t.toString(), c = (i ?? "*") !== "*";
  return "Unable to find an element with the text: " + (u ? l + " (normalized from '" + t + "')" : t) + (c ? ", which matches selector '" + i + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}, lm = Q(Fl, Fl.name, "queryAll"), [sm, um, cm, dm, pm] = Ye(Fl, P_, F_), Il = function(e, t, a) {
  let {
    exact: o = !0,
    collapseWhitespace: r,
    trim: n,
    normalizer: i
  } = a === void 0 ? {} : a;
  Se(e);
  const s = o ? be : $t, l = lt({
    collapseWhitespace: r,
    trim: n,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("input,textarea,select")).filter((u) => u.tagName === "SELECT" ? Array.from(u.options).filter((d) => d.selected).some((d) => s(fa(d), d, t, l)) : s(u.value, u, t, l));
}, I_ = (e, t) => "Found multiple elements with the display value: " + t + ".", O_ = (e, t) => "Unable to find an element with the display value: " + t + ".", fm = Q(Il, Il.name, "queryAll"), [mm, ym, hm, Lm, vm] = Ye(Il, I_, O_), x_ = /^(img|input|area|.+-.+)$/i, Ol = function(e, t, a) {
  return a === void 0 && (a = {}), Se(e), st("alt", e, t, a).filter((o) => x_.test(o.tagName));
}, M_ = (e, t) => "Found multiple elements with the alt text: " + t, N_ = (e, t) => "Unable to find an element with the alt text: " + t, bm = Q(Ol, Ol.name, "queryAll"), [Am, Tm, gm, Sm, Ym] = Ye(Ol, M_, N_), k_ = (e) => {
  var t;
  return e.tagName.toLowerCase() === "title" && ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === "svg";
}, xl = function(e, t, a) {
  let {
    exact: o = !0,
    collapseWhitespace: r,
    trim: n,
    normalizer: i
  } = a === void 0 ? {} : a;
  Se(e);
  const s = o ? be : $t, l = lt({
    collapseWhitespace: r,
    trim: n,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("[title], svg > title")).filter((u) => s(u.getAttribute("title"), u, t, l) || k_(u) && s(fa(u), u, t, l));
}, $_ = (e, t) => "Found multiple elements with the title: " + t + ".", q_ = (e, t) => "Unable to find an element with the title: " + t + ".", Rm = Q(xl, xl.name, "queryAll"), [wm, Em, Cm, _m, Pm] = Ye(xl, $_, q_), Ml = function(e, t, a) {
  let {
    hidden: o = I().defaultHidden,
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
      min: v,
      max: R,
      text: f
    } = {}
  } = a === void 0 ? {} : a;
  if (Se(e), s !== void 0) {
    var T;
    if (((T = ne.get(t)) == null ? void 0 : T.props["aria-selected"]) === void 0)
      throw new Error('"aria-selected" is not supported on role "' + t + '".');
  }
  if (l !== void 0) {
    var Y;
    if (((Y = ne.get(t)) == null ? void 0 : Y.props["aria-busy"]) === void 0)
      throw new Error('"aria-busy" is not supported on role "' + t + '".');
  }
  if (u !== void 0) {
    var S;
    if (((S = ne.get(t)) == null ? void 0 : S.props["aria-checked"]) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + t + '".');
  }
  if (c !== void 0) {
    var w;
    if (((w = ne.get(t)) == null ? void 0 : w.props["aria-pressed"]) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + t + '".');
  }
  if (d !== void 0) {
    var m;
    if (((m = ne.get(t)) == null ? void 0 : m.props["aria-current"]) === void 0)
      throw new Error('"aria-current" is not supported on role "' + t + '".');
  }
  if (p !== void 0 && t !== "heading")
    throw new Error('Role "' + t + '" cannot have "level" property.');
  if (h !== void 0) {
    var L;
    if (((L = ne.get(t)) == null ? void 0 : L.props["aria-valuenow"]) === void 0)
      throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
  }
  if (R !== void 0) {
    var A;
    if (((A = ne.get(t)) == null ? void 0 : A.props["aria-valuemax"]) === void 0)
      throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
  }
  if (v !== void 0) {
    var x;
    if (((x = ne.get(t)) == null ? void 0 : x.props["aria-valuemin"]) === void 0)
      throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
  }
  if (f !== void 0) {
    var D;
    if (((D = ne.get(t)) == null ? void 0 : D.props["aria-valuetext"]) === void 0)
      throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
  }
  if (y !== void 0) {
    var q;
    if (((q = ne.get(t)) == null ? void 0 : q.props["aria-expanded"]) === void 0)
      throw new Error('"aria-expanded" is not supported on role "' + t + '".');
  }
  const B = /* @__PURE__ */ new WeakMap();
  function g(C) {
    return B.has(C) || B.set(C, Uf(C)), B.get(C);
  }
  return Array.from(e.querySelectorAll(
    // Only query elements that can be matched by the following filters
    D_(t)
  )).filter((C) => {
    if (C.hasAttribute("role")) {
      const Z = C.getAttribute("role");
      if (i)
        return Z.split(" ").filter(Boolean).some((di) => di === t);
      const [Ke] = Z.split(" ");
      return Ke === t;
    }
    return bs(C).some((Z) => Z === t);
  }).filter((C) => {
    if (s !== void 0)
      return s === d_(C);
    if (l !== void 0)
      return l === p_(C);
    if (u !== void 0)
      return u === f_(C);
    if (c !== void 0)
      return c === m_(C);
    if (d !== void 0)
      return d === y_(C);
    if (y !== void 0)
      return y === h_(C);
    if (p !== void 0)
      return p === L_(C);
    if (h !== void 0 || R !== void 0 || v !== void 0 || f !== void 0) {
      let U = !0;
      if (h !== void 0 && U && (U = h === v_(C)), R !== void 0 && U && (U = R === b_(C)), v !== void 0 && U && (U = v === A_(C)), f !== void 0) {
        var O;
        U && (U = be((O = T_(C)) != null ? O : null, C, f, (Z) => Z));
      }
      return U;
    }
    return !0;
  }).filter((C) => r === void 0 ? !0 : be(Kl(C, {
    computedStyleSupportsPseudoElements: I().computedStyleSupportsPseudoElements
  }), C, r, (O) => O)).filter((C) => n === void 0 ? !0 : be(vp(C, {
    computedStyleSupportsPseudoElements: I().computedStyleSupportsPseudoElements
  }), C, n, (O) => O)).filter((C) => o === !1 ? li(C, {
    isSubtreeInaccessible: g
  }) === !1 : !0);
};
function D_(e) {
  var t;
  const a = '*[role~="' + e + '"]', o = (t = Cf.get(e)) != null ? t : /* @__PURE__ */ new Set(), r = new Set(Array.from(o).map((n) => {
    let {
      name: i
    } = n;
    return i;
  }));
  return [a].concat(Array.from(r)).join(",");
}
const Fm = (e) => {
  let t = "";
  return e === void 0 ? t = "" : typeof e == "string" ? t = ' and name "' + e + '"' : t = " and name `" + e + "`", t;
}, B_ = function(e, t, a) {
  let {
    name: o
  } = a === void 0 ? {} : a;
  return 'Found multiple elements with the role "' + t + '"' + Fm(o);
}, U_ = function(e, t, a) {
  let {
    hidden: o = I().defaultHidden,
    name: r,
    description: n
  } = a === void 0 ? {} : a;
  if (I()._disableExpensiveErrorDiagnostics)
    return 'Unable to find role="' + t + '"' + Fm(r);
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
}, Im = Q(Ml, Ml.name, "queryAll"), [Om, xm, Mm, Nm, km] = Ye(Ml, B_, U_), gs = () => I().testIdAttribute, Nl = function() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return Se(t[0]), st(gs(), ...t);
}, j_ = (e, t) => "Found multiple elements by: [" + gs() + '="' + t + '"]', V_ = (e, t) => "Unable to find an element by: [" + gs() + '="' + t + '"]', $m = Q(Nl, Nl.name, "queryAll"), [qm, Dm, Bm, Um, jm] = Ye(Nl, j_, V_);
var fo = /* @__PURE__ */ Object.freeze({
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
  findByDisplayValue: vm,
  queryByAltText: Am,
  queryAllByAltText: bm,
  getByAltText: gm,
  getAllByAltText: Tm,
  findAllByAltText: Sm,
  findByAltText: Ym,
  queryByTitle: wm,
  queryAllByTitle: Rm,
  getByTitle: Cm,
  getAllByTitle: Em,
  findAllByTitle: _m,
  findByTitle: Pm,
  queryByRole: Om,
  queryAllByRole: Im,
  getAllByRole: xm,
  getByRole: Mm,
  findAllByRole: Nm,
  findByRole: km,
  queryByTestId: qm,
  queryAllByTestId: $m,
  getByTestId: Bm,
  getAllByTestId: Dm,
  findAllByTestId: Um,
  findByTestId: jm
});
function kl(e, t, a) {
  return t === void 0 && (t = fo), a === void 0 && (a = {}), Object.keys(t).reduce((o, r) => {
    const n = t[r];
    return o[r] = n.bind(null, e), o;
  }, a);
}
const Vm = (e) => !e || Array.isArray(e) && !e.length;
function Ec(e) {
  if (Vm(e))
    throw new Error("The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.");
}
async function H_(e, t) {
  const a = new Error("Timed out in waitForElementToBeRemoved.");
  if (typeof e != "function") {
    Ec(e);
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
  return Ec(e()), As(() => {
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
function ia(e, t) {
  return I().eventWrapper(() => {
    if (!t)
      throw new Error("Unable to fire an event - please provide an event object.");
    if (!e)
      throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
    return e.dispatchEvent(t);
  });
}
function Va(e, t, a, o) {
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
  s !== void 0 && W_(t, s), l !== void 0 && Object.defineProperty(t, "files", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: l
  }), Object.assign(t, u);
  const c = Nf(t), d = c[r] || c.Event;
  let p;
  if (typeof d == "function")
    p = new d(e, i);
  else {
    p = c.document.createEvent(r);
    const {
      bubbles: h,
      cancelable: v,
      detail: R,
      ...f
    } = i;
    p.initEvent(e, h, v, R), Object.keys(f).forEach((T) => {
      p[T] = f[T];
    });
  }
  return ["dataTransfer", "clipboardData"].forEach((h) => {
    const v = i[h];
    typeof v == "object" && (typeof c.DataTransfer == "function" ? Object.defineProperty(p, h, {
      value: Object.getOwnPropertyNames(v).reduce((R, f) => (Object.defineProperty(R, f, {
        value: v[f]
      }), R), new c.DataTransfer())
    }) : Object.defineProperty(p, h, {
      value: v
    }));
  }), p;
}
Object.keys(Cc).forEach((e) => {
  const {
    EventType: t,
    defaultInit: a
  } = Cc[e], o = e.toLowerCase();
  Va[e] = (r, n) => Va(o, r, n, {
    EventType: t,
    defaultInit: a
  }), ia[e] = (r, n) => ia(r, Va[e](r, n));
});
function W_(e, t) {
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
  ia[e] = function() {
    return ia[t](...arguments);
  };
});
function z_(e) {
  return e.replace(/[ \t]*[\n][ \t]*/g, `
`);
}
function G_(e) {
  return $9.compressToEncodedURIComponent(z_(e));
}
function K_(e) {
  return "https://testing-playground.com/#markup=" + G_(e);
}
const J_ = (e, t, a) => Array.isArray(e) ? e.forEach((o) => Cl(o, t, a)) : Cl(e, t, a), X_ = function(e) {
  if (e === void 0 && (e = Ls().body), !e || !("innerHTML" in e)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  if (!e.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const t = K_(e.innerHTML);
  return console.log(`Open this URL in your browser

` + t), t;
}, Pc = {
  debug: J_,
  logTestingPlaygroundURL: X_
}, Q_ = typeof document < "u" && document.body ? kl(document.body, fo, Pc) : Object.keys(fo).reduce((e, t) => (e[t] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, e), Pc), Z_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buildQueries: Ye,
  configure: n_,
  createEvent: Va,
  findAllByAltText: Sm,
  findAllByDisplayValue: Lm,
  findAllByLabelText: Jf,
  findAllByPlaceholderText: nm,
  findAllByRole: Nm,
  findAllByTestId: Um,
  findAllByText: dm,
  findAllByTitle: _m,
  findByAltText: Ym,
  findByDisplayValue: vm,
  findByLabelText: Xf,
  findByPlaceholderText: im,
  findByRole: km,
  findByTestId: jm,
  findByText: pm,
  findByTitle: Pm,
  fireEvent: ia,
  getAllByAltText: Tm,
  getAllByDisplayValue: ym,
  getAllByLabelText: Qf,
  getAllByPlaceholderText: om,
  getAllByRole: xm,
  getAllByTestId: Dm,
  getAllByText: um,
  getAllByTitle: Em,
  getByAltText: gm,
  getByDisplayValue: hm,
  getByLabelText: Zf,
  getByPlaceholderText: rm,
  getByRole: Mm,
  getByTestId: Bm,
  getByText: cm,
  getByTitle: Cm,
  getConfig: I,
  getDefaultNormalizer: vs,
  getElementError: si,
  getMultipleElementsFoundError: ui,
  getNodeText: fa,
  getQueriesForElement: kl,
  getRoles: jf,
  getSuggestedQuery: po,
  isInaccessible: li,
  logDOM: Cl,
  logRoles: c_,
  makeFindQuery: Ct,
  makeGetAllQuery: Ts,
  makeSingleQuery: Et,
  prettyDOM: ra,
  prettyFormat: P2,
  queries: fo,
  queryAllByAltText: bm,
  queryAllByAttribute: st,
  queryAllByDisplayValue: fm,
  queryAllByLabelText: em,
  queryAllByPlaceholderText: tm,
  queryAllByRole: Im,
  queryAllByTestId: $m,
  queryAllByText: lm,
  queryAllByTitle: Rm,
  queryByAltText: Am,
  queryByAttribute: Hf,
  queryByDisplayValue: mm,
  queryByLabelText: Gf,
  queryByPlaceholderText: am,
  queryByRole: Om,
  queryByTestId: qm,
  queryByText: sm,
  queryByTitle: wm,
  queryHelpers: Y_,
  screen: Q_,
  waitFor: As,
  waitForElementToBeRemoved: H_,
  within: kl,
  wrapAllByQueryWithSuggestion: Q,
  wrapSingleQueryWithSuggestion: Ve
}, Symbol.toStringTag, { value: "Module" }));
function _(e, t, a) {
  return e.namespaceURI && e.namespaceURI !== "http://www.w3.org/1999/xhtml" || (t = Array.isArray(t) ? t : [
    t
  ], !t.includes(e.tagName.toLowerCase())) ? !1 : a ? Object.entries(a).every(([o, r]) => e[o] === r) : !0;
}
var $l;
(function(e) {
  e.button = "button", e.color = "color", e.file = "file", e.image = "image", e.reset = "reset", e.submit = "submit", e.checkbox = "checkbox", e.radio = "radio";
})($l || ($l = {}));
function Hm(e) {
  return _(e, "button") || _(e, "input") && e.type in $l;
}
function pe(e) {
  var t;
  if (eP(e) && e.defaultView)
    return e.defaultView;
  if (!((t = e.ownerDocument) === null || t === void 0) && t.defaultView)
    return e.ownerDocument.defaultView;
  throw new Error(`Could not determine window of node. Node was ${tP(e)}`);
}
function eP(e) {
  return e.nodeType === 9;
}
function tP(e) {
  return typeof e == "function" ? `function ${e.name}` : e === null ? "null" : String(e);
}
function Wm(e, t) {
  return new Promise((a, o) => {
    const r = new t();
    r.onerror = o, r.onabort = o, r.onload = () => {
      a(String(r.result));
    }, r.readAsText(e);
  });
}
function Ss(e, t) {
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
class zm {
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
class aP extends Array {
  add(...t) {
    const a = new zm(t[0], t[1]);
    return this.push(a), a;
  }
  clear() {
    this.splice(0, this.length);
  }
  remove(t) {
    this.splice(t, 1);
  }
}
function Sa(e, t) {
  const [a, o] = e.split("/"), r = !o || o === "*";
  return (n) => t ? n.type === (r ? a : e) : r ? n.type.startsWith(`${a}/`) : n.type === a;
}
function oP(e) {
  return new class {
    getData(a) {
      var o;
      const r = (o = this.items.find(Sa(a, !0))) !== null && o !== void 0 ? o : this.items.find(Sa(a, !1));
      let n = "";
      return r == null || r.getAsString((i) => {
        n = i;
      }), n;
    }
    setData(a, o) {
      const r = this.items.findIndex(Sa(a, !0)), n = new zm(o, a);
      r >= 0 ? this.items.splice(r, 1, n) : this.items.push(n);
    }
    clearData(a) {
      if (a) {
        const o = this.items.findIndex(Sa(a, !0));
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
      Ne(this, "dropEffect", "none"), Ne(this, "effectAllowed", "uninitialized"), Ne(this, "items", new aP()), Ne(this, "files", Ss(e, []));
    }
  }();
}
function Ys(e, t = []) {
  const a = typeof e.DataTransfer > "u" ? oP(e) : (
    /* istanbul ignore next */
    new e.DataTransfer()
  );
  return Object.defineProperty(a, "files", {
    get: () => Ss(e, t)
  }), a;
}
function rP(e, t) {
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
function Gm(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function Km(e, ...t) {
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
      Gm(this, "data", void 0), this.data = r;
    }
  }(a);
}
const _t = Symbol("Manage ClipboardSub");
function Fc(e, t) {
  return Object.assign(new class extends e.EventTarget {
    async read() {
      return Array.from(this.items);
    }
    async readText() {
      let o = "";
      for (const r of this.items) {
        const n = r.types.includes("text/plain") ? "text/plain" : r.types.find((i) => i.startsWith("text/"));
        n && (o += await r.getType(n).then((i) => Wm(i, e.FileReader)));
      }
      return o;
    }
    async write(o) {
      this.items = o;
    }
    async writeText(o) {
      this.items = [
        Km(e, o)
      ];
    }
    constructor(...o) {
      super(...o), Gm(this, "items", []);
    }
  }(), {
    [_t]: t
  });
}
function Rs(e) {
  return !!(e != null && e[_t]);
}
function nP(e) {
  if (Rs(e.navigator.clipboard))
    return e.navigator.clipboard[_t];
  const t = Object.getOwnPropertyDescriptor(e.navigator, "clipboard");
  let a;
  const o = {
    resetClipboardStub: () => {
      a = Fc(e, o);
    },
    detachClipboardStub: () => {
      t ? Object.defineProperty(e.navigator, "clipboard", t) : Object.defineProperty(e.navigator, "clipboard", {
        value: void 0,
        configurable: !0
      });
    }
  };
  return a = Fc(e, o), Object.defineProperty(e.navigator, "clipboard", {
    get: () => a,
    configurable: !0
  }), a[_t];
}
function iP(e) {
  Rs(e.navigator.clipboard) && e.navigator.clipboard[_t].resetClipboardStub();
}
function lP(e) {
  Rs(e.navigator.clipboard) && e.navigator.clipboard[_t].detachClipboardStub();
}
async function sP(e) {
  const t = e.defaultView, a = t == null ? void 0 : t.navigator.clipboard, o = a && await a.read();
  if (!o)
    throw new Error("The Clipboard API is unavailable.");
  const r = Ys(t);
  for (const n of o)
    for (const i of n.types)
      r.setData(i, await n.getType(i).then((s) => Wm(s, t.FileReader)));
  return r;
}
async function Jm(e, t) {
  const a = pe(e), o = a.navigator.clipboard, r = [];
  for (let i = 0; i < t.items.length; i++) {
    const s = t.items[i], l = rP(a, s);
    r.push(Km(a, l));
  }
  if (!(o && await o.write(r).then(
    () => !0,
    // Can happen with other implementations that e.g. require permissions
    /* istanbul ignore next */
    () => !1
  )))
    throw new Error("The Clipboard API is unavailable.");
}
const mo = globalThis;
typeof mo.afterEach == "function" && mo.afterEach(() => iP(globalThis.window));
typeof mo.afterAll == "function" && mo.afterAll(() => lP(globalThis.window));
function at(e) {
  return e.hasAttribute("contenteditable") && (e.getAttribute("contenteditable") == "true" || e.getAttribute("contenteditable") == "");
}
function la(e) {
  const t = uP(e);
  return t && (t.closest('[contenteditable=""]') || t.closest('[contenteditable="true"]'));
}
function uP(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function Pt(e) {
  return Xm(e) && !e.readOnly || at(e);
}
var ql;
(function(e) {
  e.text = "text", e.date = "date", e["datetime-local"] = "datetime-local", e.email = "email", e.month = "month", e.number = "number", e.password = "password", e.search = "search", e.tel = "tel", e.time = "time", e.url = "url", e.week = "week";
})(ql || (ql = {}));
function Xm(e) {
  return _(e, "textarea") || _(e, "input") && e.type in ql;
}
var Dl;
(function(e) {
  e.email = "email", e.password = "password", e.search = "search", e.telephone = "telephone", e.text = "text", e.url = "url";
})(Dl || (Dl = {}));
function cP(e) {
  var t;
  const a = (t = e.getAttribute("maxlength")) !== null && t !== void 0 ? t : "";
  return /^\d+$/.test(a) && Number(a) >= 0 ? Number(a) : void 0;
}
function dP(e) {
  return _(e, "textarea") || _(e, "input") && e.type in Dl;
}
const Qm = [
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
  return e.matches(Qm);
}
var yo;
(function(e) {
  e["{"] = "}", e["["] = "]";
})(yo || (yo = {}));
function Zm(e, t) {
  let a = 0;
  const o = e[a] in yo ? e[a] : "";
  a += o.length;
  const n = new RegExp(`^\\${o}{2}`).test(e) ? "" : o;
  return {
    type: n,
    ...n === "" ? pP(e, a, t) : fP(e, a, n, t)
  };
}
function pP(e, t, a) {
  const o = e[t];
  return ey(o, e, t, a), t += o.length, {
    consumedLength: t,
    descriptor: o,
    releasePrevious: !1,
    releaseSelf: !0,
    repeat: 1
  };
}
function fP(e, t, a, o) {
  var r, n;
  const i = e[t] === "/" ? "/" : "";
  t += i.length;
  const s = a === "{" && e[t] === "\\";
  t += Number(s);
  const l = s ? e[t] : (r = e.slice(t).match(a === "{" ? /^\w+|^[^}>/]/ : /^\w+/)) === null || r === void 0 ? void 0 : r[0];
  ey(l, e, t, o), t += l.length;
  var u;
  const c = (u = (n = e.slice(t).match(/^>\d+/)) === null || n === void 0 ? void 0 : n[0]) !== null && u !== void 0 ? u : "";
  t += c.length;
  const d = e[t] === "/" || !c && e[t] === ">" ? e[t] : "";
  t += d.length;
  const p = yo[a], y = e[t] === p ? p : "";
  if (!y)
    throw new Error(ty([
      !c && "repeat modifier",
      !d && "release modifier",
      `"${p}"`
    ].filter(Boolean).join(" or "), e[t], e, o));
  return t += y.length, {
    consumedLength: t,
    descriptor: l,
    releasePrevious: !!i,
    repeat: c ? Math.max(Number(c.substr(1)), 1) : 1,
    releaseSelf: mP(d, c)
  };
}
function ey(e, t, a, o) {
  if (!e)
    throw new Error(ty("key descriptor", t[a], t, o));
}
function mP(e, t) {
  if (e)
    return e === "/";
  if (t)
    return !1;
}
function ty(e, t, a, o) {
  return `Expected ${e} but found "${t ?? ""}" in "${a}"
    See ${o === "pointer" ? "https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen" : "https://testing-library.com/docs/user-event/keyboard"}
    for more information about how userEvent parses your input.`;
}
function yP(e) {
  return new e.constructor(e.type, e);
}
var J;
(function(e) {
  e[e.Trigger = 2] = "Trigger", e[e.Call = 1] = "Call";
})(J || (J = {}));
function Vt(e, t) {
  e.levelRefs[t] = {};
}
function Ya(e, t) {
  return e.levelRefs[t];
}
var Tt;
(function(e) {
  e[e.EachTrigger = 4] = "EachTrigger", e[e.EachApiCall = 2] = "EachApiCall", e[e.EachTarget = 1] = "EachTarget", e[e.Never = 0] = "Never";
})(Tt || (Tt = {}));
function Te(e) {
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
function ci(e) {
  const t = e.activeElement;
  return t != null && t.shadowRoot ? ci(t.shadowRoot) : Te(t) ? e.ownerDocument ? (
    /* istanbul ignore next */
    e.ownerDocument.body
  ) : e.body : t;
}
function Gi(e) {
  var t;
  return (t = ci(e)) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  );
}
function hP(e, t) {
  let a = e;
  do {
    if (t(a))
      return a;
    a = a.parentElement;
  } while (a && a !== e.ownerDocument.body);
}
function fe(e) {
  return ay(e) && Xm(e);
}
function LP(e) {
  return ay(e) && Hm(e);
}
function ay(e) {
  return e.nodeType === 1;
}
function vP(e) {
  const t = e.ownerDocument.getSelection();
  if (t != null && t.focusNode && fe(e)) {
    const o = la(t.focusNode);
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
function Ft(e, t) {
  return I().eventWrapper(e);
}
function He(e) {
  const t = hP(e, ws), a = ci(e.ownerDocument);
  (t ?? e.ownerDocument.body) !== a && (Ft(t ? () => t.focus() : () => a == null ? void 0 : a.blur()), vP(t ?? e.ownerDocument.body));
}
function bP(e) {
  !ws(e) || !(ci(e.ownerDocument) === e) || Ft(() => e.blur());
}
const We = {};
We.click = (e, t, a) => {
  const o = t.closest("button,input,label,select,textarea"), r = o && _(o, "label") && o.control;
  if (r)
    return () => {
      ws(r) && He(r), a.dispatchEvent(r, yP(e));
    };
  if (_(t, "input", {
    type: "file"
  }))
    return () => {
      bP(t), t.dispatchEvent(new (pe(t)).Event("fileDialog")), He(t);
    };
};
const It = Symbol("Displayed value in UI"), ve = Symbol("Displayed selection in UI"), ho = Symbol("Initial value to compare on blur");
function AP(e) {
  return typeof e == "object" && It in e;
}
function TP(e) {
  return !!e && typeof e == "object" && ve in e;
}
function gP(e, t) {
  e[ho] === void 0 && (e[ho] = e.value), e[It] = t, e.value = Object.assign(new String(t), {
    [It]: !0
  });
}
function me(e) {
  return e[It] === void 0 ? e.value : String(e[It]);
}
function Es(e) {
  e[It] = void 0;
}
function oy(e) {
  e[ho] = void 0;
}
function SP(e) {
  return e[ho];
}
function YP(e, t) {
  e[ve] = t;
}
function qt(e, { focusOffset: t, anchorOffset: a = t }, o = "replace") {
  const r = me(e).length, n = (d) => Math.max(0, Math.min(r, d)), i = o === "replace" || e[ve] === void 0 ? n(a) : e[ve].anchorOffset, s = n(t), l = Math.min(i, s), u = Math.max(i, s);
  if (e[ve] = {
    anchorOffset: i,
    focusOffset: s
  }, e.selectionStart === l && e.selectionEnd === u)
    return;
  const c = Object.assign(new Number(l), {
    [ve]: !0
  });
  try {
    e.setSelectionRange(c, u);
  } catch {
  }
}
function sa(e) {
  var t, a, o;
  const r = (o = e[ve]) !== null && o !== void 0 ? o : {
    anchorOffset: (t = e.selectionStart) !== null && t !== void 0 ? t : 0,
    focusOffset: (a = e.selectionEnd) !== null && a !== void 0 ? a : 0
  };
  return {
    ...r,
    startOffset: Math.min(r.anchorOffset, r.focusOffset),
    endOffset: Math.max(r.anchorOffset, r.focusOffset)
  };
}
function RP(e) {
  return !!e[ve];
}
function Ha(e) {
  e[ve] = void 0;
}
const Lo = globalThis.parseInt;
function wP(e) {
  const t = e.replace(/\D/g, "");
  if (t.length < 2)
    return e;
  const a = Lo(t[0], 10), o = Lo(t[1], 10);
  if (a >= 3 || a === 2 && o >= 4) {
    let r;
    return a >= 3 ? r = 1 : r = 2, Ic(t, r);
  }
  return e.length === 2 ? e : Ic(t, 2);
}
function Ic(e, t) {
  const a = e.slice(0, t), o = Math.min(Lo(a, 10), 23), r = e.slice(t), n = Lo(r, 10), i = Math.min(n, 59);
  return `${o.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`;
}
function ry(e, t) {
  const a = e.cloneNode();
  return a.value = t, a.value === t;
}
function ny(e, t, a, o) {
  if (Wa(e) && t + a >= 0 && t + a <= e.nodeValue.length)
    return {
      node: e,
      offset: t + a
    };
  const r = Oc(e, t, a);
  if (r) {
    if (Wa(r))
      return {
        node: r,
        offset: a > 0 ? Math.min(1, r.nodeValue.length) : Math.max(r.nodeValue.length - 1, 0)
      };
    if (_(r, "br")) {
      const n = Oc(r, void 0, a);
      return n ? Wa(n) ? {
        node: n,
        offset: a > 0 ? 0 : n.nodeValue.length
      } : a < 0 && _(n, "br") ? {
        node: r.parentNode,
        offset: Ra(r)
      } : {
        node: n.parentNode,
        offset: Ra(n) + (a > 0 ? 0 : 1)
      } : a < 0 && o === "deleteContentBackward" ? {
        node: r.parentNode,
        offset: Ra(r)
      } : void 0;
    } else
      return {
        node: r.parentNode,
        offset: Ra(r) + (a > 0 ? 1 : 0)
      };
  }
}
function Oc(e, t, a) {
  const o = Number(t) + (a < 0 ? -1 : 0);
  return t !== void 0 && Cs(e) && o >= 0 && o < e.children.length && (e = e.children[o]), CP(e, a === 1 ? "next" : "previous", EP);
}
function EP(e) {
  if (Wa(e))
    return !0;
  if (Cs(e)) {
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
function Ra(e) {
  let t = 0;
  for (; e.previousSibling; )
    t++, e = e.previousSibling;
  return t;
}
function Cs(e) {
  return e.nodeType === 1;
}
function Wa(e) {
  return e.nodeType === 3;
}
function CP(e, t, a) {
  for (; ; ) {
    var o;
    const r = e[`${t}Sibling`];
    if (r) {
      if (e = _P(r, t === "next" ? "first" : "last"), a(e))
        return e;
    } else if (e.parentNode && (!Cs(e.parentNode) || !at(e.parentNode) && e.parentNode !== ((o = e.ownerDocument) === null || o === void 0 ? void 0 : o.body)))
      e = e.parentNode;
    else
      break;
  }
}
function _P(e, t) {
  for (; e.hasChildNodes(); )
    e = e[`${t}Child`];
  return e;
}
const ua = Symbol("Track programmatic changes for React workaround");
function PP(e) {
  return Object.getOwnPropertyNames(e).some((t) => t.startsWith("__react")) && pe(e).REACT_VERSION === 17;
}
function FP(e) {
  PP(e) && (e[ua] = {
    previousValue: String(e.value),
    tracked: []
  });
}
function IP(e, t) {
  var a, o;
  (o = e[ua]) === null || o === void 0 || (a = o.tracked) === null || a === void 0 || a.push(t), e[ua] || (Es(e), qt(e, {
    focusOffset: t.length
  }));
}
function OP(e, t) {
  var a;
  const o = e[ua];
  if (e[ua] = void 0, !(!(o == null || (a = o.tracked) === null || a === void 0) && a.length))
    return;
  const r = o.tracked.length === 2 && o.tracked[0] === o.previousValue && o.tracked[1] === e.value;
  r || Es(e), RP(e) && qt(e, {
    focusOffset: r ? t : e.value.length
  });
}
function iy(e) {
  const t = xP(e);
  if (t && fe(t))
    return {
      type: "input",
      selection: sa(t)
    };
  const a = t == null ? void 0 : t.ownerDocument.getSelection();
  return {
    type: la(e) && (a == null ? void 0 : a.anchorNode) && la(a.anchorNode) ? "contenteditable" : "default",
    selection: a
  };
}
function xP(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function MP(e) {
  const t = iy(e);
  if (t.type === "input")
    return t.selection;
  if (t.type === "contenteditable") {
    var a;
    return (a = t.selection) === null || a === void 0 ? void 0 : a.getRangeAt(0);
  }
}
function ot({ focusNode: e, focusOffset: t, anchorNode: a = e, anchorOffset: o = t }) {
  var r, n;
  if (iy(e).type === "input")
    return qt(e, {
      anchorOffset: o,
      focusOffset: t
    });
  (n = a.ownerDocument) === null || n === void 0 || (r = n.getSelection()) === null || r === void 0 || r.setBaseAndExtent(a, o, e, t);
}
function ly(e) {
  return _(e, "input") && [
    "date",
    "time"
  ].includes(e.type);
}
function Ot(e, t, a, o = "insertText") {
  const r = MP(t);
  r && (!ly(t) && !e.dispatchUIEvent(t, "beforeinput", {
    inputType: o,
    data: a
  }) || ("startContainer" in r ? NP(e, t, r, a, o) : kP(e, t, r, a, o)));
}
function NP(e, t, a, o, r) {
  let n = !1;
  if (!a.collapsed)
    n = !0, a.deleteContents();
  else if ([
    "deleteContentBackward",
    "deleteContentForward"
  ].includes(r)) {
    const i = ny(a.startContainer, a.startOffset, r === "deleteContentBackward" ? -1 : 1, r);
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
function kP(e, t, a, o, r) {
  let n = o;
  if (dP(t)) {
    const u = cP(t);
    if (u !== void 0 && o.length > 0) {
      const c = u - t.value.length;
      if (c > 0)
        n = o.substring(0, c);
      else
        return;
    }
  }
  const { newValue: i, newOffset: s, oldValue: l } = $P(n, t, a, r);
  i === l && s === a.startOffset && s === a.endOffset || _(t, "input", {
    type: "number"
  }) && !qP(i) || (gP(t, i), ot({
    focusNode: t,
    anchorOffset: s,
    focusOffset: s
  }), ly(t) ? ry(t, i) && (xc(e, t, s, {}), e.dispatchUIEvent(t, "change"), oy(t)) : xc(e, t, s, {
    data: o,
    inputType: r
  }));
}
function $P(e, t, { startOffset: a, endOffset: o }, r) {
  const n = me(t), i = Math.max(0, a === o && r === "deleteContentBackward" ? a - 1 : a), s = n.substring(0, i), l = Math.min(n.length, a === o && r === "deleteContentForward" ? a + 1 : o), u = n.substring(l, n.length);
  let c = `${s}${e}${u}`, d = i + e.length;
  if (_(t, "input", {
    type: "time"
  })) {
    const p = wP(c);
    p !== "" && ry(t, p) && (c = p, d = p.length);
  }
  return {
    oldValue: n,
    newValue: c,
    newOffset: d
  };
}
function xc(e, t, a, o) {
  e.dispatchUIEvent(t, "input", o), OP(t, a);
}
function qP(e) {
  var t, a;
  const o = e.split("e", 2);
  return !(/[^\d.\-e]/.test(e) || Number((t = e.match(/-/g)) === null || t === void 0 ? void 0 : t.length) > 2 || Number((a = e.match(/\./g)) === null || a === void 0 ? void 0 : a.length) > 1 || o[1] && !/^-?\d*$/.test(o[1]));
}
We.cut = (e, t, a) => () => {
  Pt(t) && Ot(a, t, "", "deleteByCut");
};
function DP(e) {
  return e ? at(e) ? e.textContent : me(e) : null;
}
function BP(e) {
  const t = pe(e);
  for (let a = e; a != null && a.ownerDocument; a = a.parentElement) {
    const { display: o, visibility: r } = t.getComputedStyle(a);
    if (o === "none" || r === "hidden")
      return !1;
  }
  return !0;
}
function UP(e, t) {
  const a = e.ownerDocument, o = a.querySelectorAll(Qm), r = Array.from(o).filter((l) => l === e || !(Number(l.getAttribute("tabindex")) < 0 || Te(l)));
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
    if (l += t ? -1 : 1, l === i.length ? l = 0 : l === -1 && (l = i.length - 1), i[l] === e || i[l] === a.body || BP(i[l]))
      return i[l];
}
function Mc(e, t) {
  if (fe(e)) {
    const a = sa(e);
    ot({
      focusNode: e,
      focusOffset: a.startOffset === a.endOffset ? a.focusOffset + t : t < 0 ? a.startOffset : a.endOffset
    });
  } else {
    const a = e.ownerDocument.getSelection();
    if (!(a != null && a.focusNode))
      return;
    if (a.isCollapsed) {
      const o = ny(a.focusNode, a.focusOffset, t);
      o && ot({
        focusNode: o.node,
        focusOffset: o.offset
      });
    } else
      a[t < 0 ? "collapseToStart" : "collapseToEnd"]();
  }
}
function sy(e) {
  if (fe(e))
    return ot({
      focusNode: e,
      anchorOffset: 0,
      focusOffset: me(e).length
    });
  var t;
  const a = (t = la(e)) !== null && t !== void 0 ? t : e.ownerDocument.body;
  ot({
    focusNode: a,
    anchorOffset: 0,
    focusOffset: a.childNodes.length
  });
}
function jP(e) {
  if (fe(e))
    return sa(e).startOffset === 0 && sa(e).endOffset === me(e).length;
  var t;
  const a = (t = la(e)) !== null && t !== void 0 ? t : e.ownerDocument.body, o = e.ownerDocument.getSelection();
  return (o == null ? void 0 : o.anchorNode) === a && o.focusNode === a && o.anchorOffset === 0 && o.focusOffset === a.childNodes.length;
}
function Ht(e, t, a) {
  var o;
  if (fe(e))
    return ot({
      focusNode: e,
      anchorOffset: t,
      focusOffset: a
    });
  if (at(e) && ((o = e.firstChild) === null || o === void 0 ? void 0 : o.nodeType) === 3)
    return ot({
      focusNode: e.firstChild,
      anchorOffset: t,
      focusOffset: a
    });
  throw new Error("Not implemented. The result of this interaction is unreliable.");
}
function wa(e, t, a) {
  const o = pe(t), r = Array.from(t.ownerDocument.querySelectorAll(t.name ? `input[type="radio"][name="${o.CSS.escape(t.name)}"]` : 'input[type="radio"][name=""], input[type="radio"]:not([name])'));
  for (let n = r.findIndex((i) => i === t) + a; ; n += a) {
    if (r[n] || (n = a > 0 ? 0 : r.length - 1), r[n] === t)
      return;
    Te(r[n]) || (He(r[n]), e.dispatchUIEvent(r[n], "click"));
  }
}
We.keydown = (e, t, a) => {
  var o, r;
  return (r = (o = Nc[e.key]) === null || o === void 0 ? void 0 : o.call(Nc, e, t, a)) !== null && r !== void 0 ? r : VP(e, t, a);
};
const Nc = {
  ArrowDown: (e, t, a) => {
    if (_(t, "input", {
      type: "radio"
    }))
      return () => wa(a, t, -1);
  },
  ArrowLeft: (e, t, a) => _(t, "input", {
    type: "radio"
  }) ? () => wa(a, t, -1) : () => Mc(t, -1),
  ArrowRight: (e, t, a) => _(t, "input", {
    type: "radio"
  }) ? () => wa(a, t, 1) : () => Mc(t, 1),
  ArrowUp: (e, t, a) => {
    if (_(t, "input", {
      type: "radio"
    }))
      return () => wa(a, t, 1);
  },
  Backspace: (e, t, a) => {
    if (Pt(t))
      return () => {
        Ot(a, t, "", "deleteContentBackward");
      };
  },
  Delete: (e, t, a) => {
    if (Pt(t))
      return () => {
        Ot(a, t, "", "deleteContentForward");
      };
  },
  End: (e, t) => {
    if (_(t, [
      "input",
      "textarea"
    ]) || at(t))
      return () => {
        var a, o;
        const r = (o = (a = DP(t)) === null || a === void 0 ? void 0 : a.length) !== null && o !== void 0 ? o : (
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
    ]) || at(t))
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
    const o = UP(t, a.system.keyboard.modifiers.Shift);
    He(o), fe(o) && qt(o, {
      anchorOffset: 0,
      focusOffset: o.value.length
    });
  }
}, VP = (e, t, a) => {
  if (e.code === "KeyA" && a.system.keyboard.modifiers.Control)
    return () => sy(t);
};
We.keypress = (e, t, a) => {
  if (e.key === "Enter") {
    if (_(t, "button") || _(t, "input") && HP.includes(t.type) || _(t, "a") && t.href)
      return () => {
        a.dispatchUIEvent(t, "click");
      };
    if (_(t, "input")) {
      const o = t.form, r = o == null ? void 0 : o.querySelector('input[type="submit"], button:not([type]), button[type="submit"]');
      return r ? () => a.dispatchUIEvent(r, "click") : o && WP.includes(t.type) && o.querySelectorAll("input").length === 1 ? () => a.dispatchUIEvent(o, "submit") : void 0;
    }
  }
  if (Pt(t)) {
    const o = e.key === "Enter" ? at(t) && !a.system.keyboard.modifiers.Shift ? "insertParagraph" : "insertLineBreak" : "insertText", r = e.key === "Enter" ? `
` : e.key;
    return () => Ot(a, t, r, o);
  }
};
const HP = [
  "button",
  "color",
  "file",
  "image",
  "reset",
  "submit"
], WP = [
  "email",
  "month",
  "password",
  "search",
  "tel",
  "text",
  "url",
  "week"
];
We.keyup = (e, t, a) => {
  var o;
  return (o = kc[e.key]) === null || o === void 0 ? void 0 : o.call(kc, e, t, a);
};
const kc = {
  " ": (e, t, a) => {
    if (Hm(t))
      return () => a.dispatchUIEvent(t, "click");
  }
};
We.paste = (e, t, a) => {
  if (Pt(t))
    return () => {
      var o;
      const r = (o = e.clipboardData) === null || o === void 0 ? void 0 : o.getData("text");
      r && Ot(a, t, r, "insertFromPaste");
    };
};
const uy = {
  auxclick: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  beforeinput: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  click: {
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
  copy: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  change: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
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
  dblclick: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  keydown: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  keypress: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  keyup: {
    EventType: "KeyboardEvent",
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
  input: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  mousedown: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseenter: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseleave: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mousemove: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseout: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseover: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseup: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerover: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerenter: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pointerdown: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointermove: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerup: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointercancel: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  pointerout: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerleave: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  submit: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  }
};
function cy(e) {
  return uy[e].EventType;
}
const zP = [
  "MouseEvent",
  "PointerEvent"
];
function GP(e) {
  return zP.includes(cy(e));
}
function KP(e) {
  return cy(e) === "KeyboardEvent";
}
const JP = {
  ClipboardEvent: [
    QP
  ],
  Event: [],
  InputEvent: [
    Ea,
    ZP
  ],
  MouseEvent: [
    Ea,
    Ki,
    $c
  ],
  PointerEvent: [
    Ea,
    Ki,
    $c,
    t3
  ],
  KeyboardEvent: [
    Ea,
    Ki,
    e3
  ]
};
function dy(e, t, a) {
  const o = pe(t), { EventType: r, defaultInit: n } = uy[e], i = new (XP(o))[r](e, n);
  return JP[r].forEach((s) => s(i, a ?? {})), i;
}
function XP(e) {
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
  var v;
  const R = (v = e.CompositionEvent) !== null && v !== void 0 ? v : class extends h {
  };
  var f;
  const T = (f = e.FocusEvent) !== null && f !== void 0 ? f : class extends h {
  };
  var Y;
  const S = (Y = e.InputEvent) !== null && Y !== void 0 ? Y : class extends h {
  };
  var w;
  const m = (w = e.KeyboardEvent) !== null && w !== void 0 ? w : class extends h {
  };
  var L;
  const A = (L = e.MouseEvent) !== null && L !== void 0 ? L : class extends h {
  };
  var x;
  const D = (x = e.DragEvent) !== null && x !== void 0 ? x : class extends A {
  };
  var q;
  const B = (q = e.PointerEvent) !== null && q !== void 0 ? q : class extends A {
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
    FocusEvent: T,
    InputEvent: S,
    KeyboardEvent: m,
    MouseEvent: A,
    DragEvent: D,
    PointerEvent: B,
    TouchEvent: C
  };
}
function ut(e, t) {
  for (const [a, o] of Object.entries(t))
    Object.defineProperty(e, a, {
      get: () => o ?? null
    });
}
function V(e) {
  return Number(e ?? 0);
}
function QP(e, { clipboardData: t }) {
  ut(e, {
    clipboardData: t
  });
}
function ZP(e, { data: t, inputType: a, isComposing: o }) {
  ut(e, {
    data: t,
    isComposing: !!o,
    inputType: String(a)
  });
}
function Ea(e, { view: t, detail: a }) {
  ut(e, {
    view: t,
    detail: V(a ?? 0)
  });
}
function Ki(e, { altKey: t, ctrlKey: a, metaKey: o, shiftKey: r, modifierAltGraph: n, modifierCapsLock: i, modifierFn: s, modifierFnLock: l, modifierNumLock: u, modifierScrollLock: c, modifierSymbol: d, modifierSymbolLock: p }) {
  ut(e, {
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
function e3(e, { key: t, code: a, location: o, repeat: r, isComposing: n, charCode: i }) {
  ut(e, {
    key: String(t),
    code: String(a),
    location: V(o),
    repeat: !!r,
    isComposing: !!n,
    charCode: i
  });
}
function $c(e, { x: t, y: a, screenX: o, screenY: r, clientX: n = t, clientY: i = a, button: s, buttons: l, relatedTarget: u }) {
  ut(e, {
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
function t3(e, { pointerId: t, width: a, height: o, pressure: r, tangentialPressure: n, tiltX: i, tiltY: s, twist: l, pointerType: u, isPrimary: c }) {
  ut(e, {
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
function a3(e, t, a, o = !1) {
  (GP(t) || KP(t)) && (a = {
    ...a,
    ...this.system.getUIEventModifiers()
  });
  const r = dy(t, e, a);
  return py.call(this, e, r, o);
}
function py(e, t, a = !1) {
  var o;
  const r = t.type, n = a ? () => {
  } : (o = We[r]) === null || o === void 0 ? void 0 : o.call(We, t, e, this);
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
function o3(e, t, a) {
  const o = dy(t, e, a);
  Ft(() => e.dispatchEvent(o));
}
const Ji = Symbol("Interceptor for programmatical calls");
function bt(e, t, a) {
  const o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = Object.getOwnPropertyDescriptor(e, t), n = o != null && o.set ? "set" : "value";
  if (typeof (o == null ? void 0 : o[n]) != "function" || o[n][Ji])
    throw new Error(`Element ${e.tagName} does not implement "${String(t)}".`);
  function i(...s) {
    const { applyNative: l = !1, realArgs: u, then: c } = a.call(this, ...s), d = (!l && r || o)[n];
    n === "set" ? d.call(this, u) : d.call(this, ...u), c == null || c();
  }
  i[Ji] = Ji, Object.defineProperty(e, t, {
    ...r ?? o,
    [n]: i
  });
}
function r3(e) {
  bt(e, "value", function(a) {
    const o = AP(a);
    return o && FP(this), {
      applyNative: !!o,
      realArgs: n3(this, a),
      then: o ? void 0 : () => IP(this, String(a))
    };
  });
}
function n3(e, t) {
  return _(e, "input", {
    type: "number"
  }) && String(t) !== "" && !Number.isNaN(Number(t)) ? String(Number(t)) : String(t);
}
function i3(e) {
  bt(e, "setSelectionRange", function(a, ...o) {
    const r = TP(a);
    return {
      applyNative: !!r,
      realArgs: [
        Number(a),
        ...o
      ],
      then: () => r ? void 0 : Ha(e)
    };
  }), bt(e, "selectionStart", function(a) {
    return {
      realArgs: a,
      then: () => Ha(e)
    };
  }), bt(e, "selectionEnd", function(a) {
    return {
      realArgs: a,
      then: () => Ha(e)
    };
  }), bt(e, "select", function() {
    return {
      realArgs: [],
      then: () => YP(e, {
        anchorOffset: 0,
        focusOffset: me(e).length
      })
    };
  });
}
function l3(e) {
  bt(e, "setRangeText", function(...a) {
    return {
      realArgs: a,
      then: () => {
        Es(e), Ha(e);
      }
    };
  });
}
const gt = Symbol("Node prepared with document state workarounds");
function fy(e) {
  e[gt] || (e.addEventListener("focus", (t) => {
    const a = t.target;
    qc(a);
  }, {
    capture: !0,
    passive: !0
  }), e.activeElement && qc(e.activeElement), e.addEventListener("blur", (t) => {
    const a = t.target, o = SP(a);
    o !== void 0 && (a.value !== o && o3(a, "change"), oy(a));
  }, {
    capture: !0,
    passive: !0
  }), e[gt] = gt);
}
function qc(e) {
  e[gt] || (_(e, [
    "input",
    "textarea"
  ]) && (r3(e), i3(e), l3(e)), e[gt] = gt);
}
function s3(e) {
  return u3(e) ? e : e.ownerDocument;
}
function u3(e) {
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
function yt(e, t, a) {
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
const c3 = [
  "Alt",
  "AltGraph",
  "Control",
  "Fn",
  "Meta",
  "Shift",
  "Symbol"
];
function Dc(e) {
  return c3.includes(e);
}
const d3 = [
  "CapsLock",
  "FnLock",
  "NumLock",
  "ScrollLock",
  "SymbolLock"
];
function Bc(e) {
  return d3.includes(e);
}
class p3 {
  isKeyPressed(t) {
    return !!this.pressed[String(t.code)];
  }
  getPressedKeys() {
    return Object.values(this.pressed).map((t) => t.keyDef);
  }
  /** Press a key */
  async keydown(t, a) {
    var o, r, n;
    const i = String(a.key), s = String(a.code), l = Gi(t.config.document);
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
    Bc(i) && !this.modifiers[i] && (this.modifiers[i] = !0, this.modifierLockStart[i] = !0), (n = this.pressed[s]).unpreventedDefault || (n.unpreventedDefault = c), c && this.hasKeyPress(i) && t.dispatchUIEvent(Gi(t.config.document), "keypress", {
      key: i,
      code: s,
      charCode: a.key === "Enter" ? 13 : String(a.key).charCodeAt(0)
    });
  }
  /** Release a key */
  async keyup(t, a) {
    const o = String(a.key), r = String(a.code), n = this.pressed[r].unpreventedDefault;
    delete this.pressed[r], Dc(o) && !Object.values(this.pressed).find((i) => i.keyDef.key === o) && (this.modifiers[o] = !1), t.dispatchUIEvent(Gi(t.config.document), "keyup", {
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
    yt(this, "system", void 0), yt(this, "modifiers", {
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
    }), yt(this, "pressed", {}), yt(this, "carryChar", ""), yt(this, "lastKeydownTarget", void 0), yt(this, "modifierLockStart", {}), this.system = t;
  }
}
const f3 = [
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
], m3 = [
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
function y3(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
class my {
  getButtons() {
    let t = 0;
    for (const a of Object.keys(this.pressed))
      t |= 2 ** Number(a);
    return t;
  }
  down(t) {
    const a = Bl(t.button);
    if (a in this.pressed) {
      this.pressed[a].push(t);
      return;
    }
    return this.pressed[a] = [
      t
    ], a;
  }
  up(t) {
    const a = Bl(t.button);
    if (a in this.pressed && (this.pressed[a] = this.pressed[a].filter((o) => o.name !== t.name), this.pressed[a].length === 0))
      return delete this.pressed[a], a;
  }
  constructor() {
    y3(this, "pressed", {});
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
function Bl(e = 0) {
  return e in Uc ? Uc[e] : Number(e);
}
const jc = {
  1: 2,
  2: 1
};
function Vc(e) {
  return e = Bl(e), e in jc ? jc[e] : e;
}
function h3(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
class L3 {
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
    h3(this, "pressedKeys", /* @__PURE__ */ new Set());
  }
}
function Qt(e, t) {
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
function Ul({ target: e, node: t, offset: a }) {
  return fe(e) ? {
    node: e,
    offset: a ?? me(e).length
  } : t ? {
    node: t,
    offset: a ?? (t.nodeType === 3 ? t.nodeValue.length : t.childNodes.length)
  } : yy(e, a);
}
function yy(e, t, a = !0) {
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
          return yy(n, t, !1);
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
function v3({ document: e, target: t, clickCount: a, node: o, offset: r }) {
  if (LP(t))
    return;
  const n = fe(t), i = String(n ? me(t) : t.textContent), [s, l] = o ? (
    // which elements might be considered in the same line of text.
    // TODO: support expanding initial range on multiple clicks if node is given
    [
      r,
      r
    ]
  ) : b3(i, r, a);
  if (n)
    return qt(t, {
      anchorOffset: s ?? i.length,
      focusOffset: l ?? i.length
    }), {
      node: t,
      start: s ?? 0,
      end: l ?? i.length
    };
  {
    const { node: u, offset: c } = Ul({
      target: t,
      node: o,
      offset: s
    }), { node: d, offset: p } = Ul({
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
function b3(e, t, a) {
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
function A3(e, { document: t, target: a, node: o, offset: r }) {
  const n = Ul({
    target: a,
    node: o,
    offset: r
  });
  if ("node" in e) {
    if (n.node === e.node) {
      const i = n.offset < e.start ? e.end : e.start, s = n.offset > e.end || n.offset < e.start ? n.offset : e.end;
      qt(e.node, {
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
function hy(e, t) {
  var a, o, r, n, i, s, l, u;
  return e.target !== t.target || ((a = e.coords) === null || a === void 0 ? void 0 : a.x) !== ((o = t.coords) === null || o === void 0 ? void 0 : o.y) || ((r = e.coords) === null || r === void 0 ? void 0 : r.y) !== ((n = t.coords) === null || n === void 0 ? void 0 : n.y) || ((i = e.caret) === null || i === void 0 ? void 0 : i.node) !== ((s = t.caret) === null || s === void 0 ? void 0 : s.node) || ((l = e.caret) === null || l === void 0 ? void 0 : l.offset) !== ((u = t.caret) === null || u === void 0 ? void 0 : u.offset);
}
function Je(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
class T3 {
  move(t, a) {
    const o = this.position, r = this.getTarget(t);
    if (this.position = a, !hy(o, a))
      return;
    const n = this.getTarget(t), i = this.getEventInit("mousemove"), [s, l] = Qt(r, n);
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
    const i = Te(n), s = this.getEventInit("mousedown", a.button);
    (i || t.dispatchUIEvent(n, "mousedown", s)) && (this.startSelecting(t, s.detail), He(n)), !i && Vc(a.button) === 2 && t.dispatchUIEvent(n, "contextmenu", this.getEventInit("contextmenu", a.button, o));
  }
  up(t, a, o) {
    const r = this.buttons.up(a);
    if (r === void 0)
      return;
    const n = this.getTarget(t);
    if (!Te(n)) {
      t.dispatchUIEvent(n, "mouseup", this.getEventInit("mouseup", a.button)), this.endSelecting();
      const i = Qt(this.buttonDownTarget[r], n)[2][0];
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
    this.selecting = v3({
      document: t.config.document,
      target: this.getTarget(t),
      node: (o = this.position.caret) === null || o === void 0 ? void 0 : o.node,
      offset: (r = this.position.caret) === null || r === void 0 ? void 0 : r.offset,
      clickCount: a
    });
  }
  modifySelecting(t) {
    var a, o;
    this.selecting && A3(this.selecting, {
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
    Je(this, "position", {}), Je(this, "buttons", new my()), Je(this, "selecting", void 0), Je(this, "buttonDownTarget", {}), Je(this, "clickCount", new class {
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
        Je(this, "down", {}), Je(this, "count", {});
      }
    }());
  }
}
function vo(e, t) {
  var a;
  return ((a = Ly(e, t)) === null || a === void 0 ? void 0 : a.pointerEvents) !== "none";
}
function g3(e) {
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
const Hc = Symbol("Last check for pointer-events");
function Ly(e, t) {
  const a = t[Hc];
  if (!(e.config.pointerEventsCheck !== Tt.Never && (!a || Wc(e.config.pointerEventsCheck, Tt.EachApiCall) && a[J.Call] !== Ya(e, J.Call) || Wc(e.config.pointerEventsCheck, Tt.EachTrigger) && a[J.Trigger] !== Ya(e, J.Trigger))))
    return a == null ? void 0 : a.result;
  const r = g3(t);
  return t[Hc] = {
    [J.Call]: Ya(e, J.Call),
    [J.Trigger]: Ya(e, J.Trigger),
    result: r
  }, r;
}
function Wt(e, t) {
  const a = Ly(e, t);
  if ((a == null ? void 0 : a.pointerEvents) === "none")
    throw new Error([
      `Unable to perform pointer interaction as the element ${a.tree.length > 1 ? "inherits" : "has"} \`pointer-events: none\`:`,
      "",
      S3(a.tree)
    ].join(`
`));
}
function S3(e) {
  return e.reverse().map((t, a) => [
    "".padEnd(a),
    t.tagName,
    t.id && `#${t.id}`,
    t.hasAttribute("data-testid") && `(testId=${t.getAttribute("data-testid")})`,
    Y3(t),
    e.length > 1 && a === 0 && "  <-- This element declared `pointer-events: none`",
    e.length > 1 && a === e.length - 1 && "  <-- Asserted pointer events here"
  ].filter(Boolean).join("")).join(`
`);
}
function Y3(e) {
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
function Wc(e, t) {
  return (e & t) > 0;
}
function Ee(e, t, a) {
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
    const o = this.getTarget(t), [, r] = Qt(null, o), n = this.getEventInit();
    return Wt(t, o), t.dispatchUIEvent(o, "pointerover", n), r.forEach((i) => t.dispatchUIEvent(i, "pointerenter", n)), this;
  }
  move(t, a) {
    const o = this.position, r = this.getTarget(t);
    if (this.position = a, !hy(o, a))
      return;
    const n = this.getTarget(t), i = this.getEventInit(), [s, l] = Qt(r, n);
    return {
      leave: () => {
        vo(t, r) && r !== n && (t.dispatchUIEvent(r, "pointerout", i), s.forEach((u) => t.dispatchUIEvent(u, "pointerleave", i)));
      },
      enter: () => {
        Wt(t, n), r !== n && (t.dispatchUIEvent(n, "pointerover", i), l.forEach((u) => t.dispatchUIEvent(u, "pointerenter", i)));
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
    Wt(t, o), this.isDown = !0, this.isPrevented = !t.dispatchUIEvent(o, "pointerdown", this.getEventInit());
  }
  up(t, a) {
    if (!this.isDown)
      return;
    const o = this.getTarget(t);
    Wt(t, o), this.isDown = !1, t.dispatchUIEvent(o, "pointerup", this.getEventInit());
  }
  release(t) {
    const a = this.getTarget(t), [o] = Qt(a, null), r = this.getEventInit();
    vo(t, a) && (t.dispatchUIEvent(a, "pointerout", r), o.forEach((n) => t.dispatchUIEvent(n, "pointerleave", r))), this.isCancelled = !0;
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
    Ee(this, "pointerId", void 0), Ee(this, "pointerType", void 0), Ee(this, "isPrimary", void 0), Ee(this, "isMultitouch", !1), Ee(this, "isCancelled", !1), Ee(this, "isDown", !1), Ee(this, "isPrevented", !1), Ee(this, "position", {}), this.pointerId = t, this.pointerType = a, this.isPrimary = o, this.isMultitouch = !o;
  }
}
function Ce(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
class R3 {
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
    Ce(this, "system", void 0), Ce(this, "mouse", void 0), Ce(this, "buttons", void 0), Ce(this, "devices", new class {
      get(a) {
        var o, r, n;
        return (n = (o = this.registry)[r = a]) !== null && n !== void 0 || (o[r] = new L3()), this.registry[a];
      }
      constructor() {
        Ce(this, "registry", {});
      }
    }()), Ce(this, "pointers", new class {
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
        Ce(this, "registry", {
          mouse: new zc({
            pointerId: 1,
            pointerType: "mouse",
            isPrimary: !0
          })
        }), Ce(this, "nextId", 2);
      }
    }()), this.system = t, this.buttons = new my(), this.mouse = new T3();
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
class vy {
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
    Gc(this, "keyboard", new p3(this)), Gc(this, "pointer", new R3(this));
  }
}
async function w3(e) {
  const t = [];
  return this.config.skipHover || t.push({
    target: e
  }), t.push({
    keys: "[MouseLeft]",
    target: e
  }), this.pointer(t);
}
async function E3(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft]"
  ]);
}
async function C3(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft][MouseLeft]"
  ]);
}
async function _3(e) {
  return this.pointer({
    target: e
  });
}
async function P3(e) {
  return Wt(this, this.system.pointer.getMouseTarget(this)), this.pointer({
    target: e.ownerDocument.body
  });
}
async function F3({ shift: e } = {}) {
  return this.keyboard(e === !0 ? "{Shift>}{Tab}{/Shift}" : e === !1 ? "[/ShiftLeft][/ShiftRight]{Tab}" : "{Tab}");
}
function I3(e, t) {
  const a = [];
  do {
    const { type: r, descriptor: n, consumedLength: i, releasePrevious: s, releaseSelf: l = !0, repeat: u } = Zm(t, "keyboard");
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
async function O3(e) {
  const t = I3(this.config.keyboardMap, e);
  for (let a = 0; a < t.length; a++)
    await xt(this.config), await x3(this, t[a]);
}
async function x3(e, { keyDef: t, releasePrevious: a, releaseSelf: o, repeat: r }) {
  const { system: n } = e;
  if (n.keyboard.isKeyPressed(t) && await n.keyboard.keyup(e, t), !a) {
    for (let i = 1; i <= r; i++)
      await n.keyboard.keydown(e, t), i < r && await xt(e.config);
    o && await n.keyboard.keyup(e, t);
  }
}
async function M3(e) {
  for (const t of e.system.keyboard.getPressedKeys())
    await e.system.keyboard.keyup(e, t);
}
function by(e) {
  const t = fe(e) ? {
    "text/plain": N3(e)
  } : {
    "text/plain": String(e.ownerDocument.getSelection())
  }, a = Ys(pe(e));
  for (const o in t)
    t[o] && a.setData(o, t[o]);
  return a;
}
function N3(e) {
  const t = sa(e);
  return me(e).substring(t.startOffset, t.endOffset);
}
async function k3() {
  const e = this.config.document;
  var t;
  const a = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), o = by(a);
  if (o.items.length !== 0)
    return this.dispatchUIEvent(a, "copy", {
      clipboardData: o
    }) && this.config.writeToClipboard && await Jm(e, o), o;
}
async function $3() {
  const e = this.config.document;
  var t;
  const a = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), o = by(a);
  if (o.items.length !== 0)
    return this.dispatchUIEvent(a, "cut", {
      clipboardData: o
    }) && this.config.writeToClipboard && await Jm(a.ownerDocument, o), o;
}
async function q3(e) {
  const t = this.config.document;
  var a;
  const o = (a = t.activeElement) !== null && a !== void 0 ? a : (
    /* istanbul ignore next */
    t.body
  );
  var r;
  const n = (r = typeof e == "string" ? D3(t, e) : e) !== null && r !== void 0 ? r : await sP(t).catch(() => {
    throw new Error("`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.");
  });
  this.dispatchUIEvent(o, "paste", {
    clipboardData: n
  });
}
function D3(e, t) {
  const a = Ys(pe(e));
  return a.setData("text", t), a;
}
function Kc(e, t) {
  const a = [];
  do {
    const { descriptor: o, consumedLength: r, releasePrevious: n, releaseSelf: i = !0 } = Zm(t, "pointer"), s = e.find((l) => l.name === o);
    s && a.push({
      keyDef: s,
      releasePrevious: n,
      releaseSelf: i
    }), t = t.slice(r);
  } while (t);
  return a;
}
async function B3(e) {
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
    await xt(this.config), await U3(this, a[o]);
  this.system.pointer.resetClickCount();
}
async function U3(e, t) {
  var a, o;
  const r = "pointerName" in t && t.pointerName ? t.pointerName : "keyDef" in t ? e.system.pointer.getPointerName(t.keyDef) : "mouse", n = e.system.pointer.getPreviousPosition(r);
  var i, s, l, u;
  const c = {
    target: (i = t.target) !== null && i !== void 0 ? i : j3(e, n),
    coords: (s = t.coords) !== null && s !== void 0 ? s : n == null ? void 0 : n.coords,
    caret: {
      node: (l = t.node) !== null && l !== void 0 ? l : Jc(t) || n == null || (a = n.caret) === null || a === void 0 ? void 0 : a.node,
      offset: (u = t.offset) !== null && u !== void 0 ? u : Jc(t) || n == null || (o = n.caret) === null || o === void 0 ? void 0 : o.offset
    }
  };
  "keyDef" in t ? (e.system.pointer.isKeyPressed(t.keyDef) && (Vt(e, J.Trigger), await e.system.pointer.release(e, t.keyDef, c)), t.releasePrevious || (Vt(e, J.Trigger), await e.system.pointer.press(e, t.keyDef, c), t.releaseSelf && (Vt(e, J.Trigger), await e.system.pointer.release(e, t.keyDef, c)))) : (Vt(e, J.Trigger), await e.system.pointer.move(e, r, c));
}
function Jc(e) {
  var t, a;
  return !!((a = (t = e.target) !== null && t !== void 0 ? t : e.node) !== null && a !== void 0 ? a : e.offset !== void 0);
}
function j3(e, t) {
  if (!t)
    throw new Error("This pointer has no previous position. Provide a target property!");
  var a;
  return (a = t.target) !== null && a !== void 0 ? a : e.config.document.body;
}
async function V3(e) {
  if (!Pt(e) || Te(e))
    throw new Error("clear()` is only supported on editable elements.");
  if (He(e), e.ownerDocument.activeElement !== e)
    throw new Error("The element to be cleared could not be focused.");
  if (sy(e), !jP(e))
    throw new Error("The element content to be cleared could not be selected.");
  Ot(this, e, "", "deleteContentBackward");
}
async function H3(e, t) {
  return Ay.call(this, !0, e, t);
}
async function W3(e, t) {
  return Ay.call(this, !1, e, t);
}
async function Ay(e, t, a) {
  if (!e && !t.multiple)
    throw I().getElementError("Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.", t);
  const o = Array.isArray(a) ? a : [
    a
  ], r = Array.from(t.querySelectorAll('option, [role="option"]')), n = o.map((s) => {
    if (typeof s != "string" && r.includes(s))
      return s;
    {
      const l = r.find((u) => u.value === s || u.innerHTML === s);
      if (l)
        return l;
      throw I().getElementError(`Value "${String(s)}" not found in options`, t);
    }
  }).filter((s) => !Te(s));
  if (Te(t) || !n.length)
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
        const l = this.config.pointerEventsCheck === 0 ? !0 : vo(this, s);
        l && (this.dispatchUIEvent(s, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(s, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(s, "pointermove"), this.dispatchUIEvent(s, "mousemove"), this.dispatchUIEvent(s, "pointerdown"), this.dispatchUIEvent(s, "mousedown")), He(t), l && (this.dispatchUIEvent(s, "pointerup"), this.dispatchUIEvent(s, "mouseup")), i(s), l && this.dispatchUIEvent(s, "click"), await xt(this.config);
      }
    else if (n.length === 1) {
      const s = this.config.pointerEventsCheck === 0 ? !0 : vo(this, t);
      s ? await this.click(t) : He(t), i(n[0]), s && (this.dispatchUIEvent(t, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(t, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(t, "pointerup"), this.dispatchUIEvent(t, "mouseup"), this.dispatchUIEvent(t, "click")), await xt(this.config);
    } else
      throw I().getElementError("Cannot select multiple options on a non-multiple select", t);
  else if (t.getAttribute("role") === "listbox")
    for (const s of n)
      await this.click(s), await this.unhover(s);
  else
    throw I().getElementError("Cannot select options on elements that are neither select nor listbox elements", t);
}
async function z3(e, t, { skipClick: a = this.config.skipClick, skipAutoClose: o = this.config.skipAutoClose, initialSelectionStart: r, initialSelectionEnd: n } = {}) {
  e.disabled || (a || await this.click(e), r !== void 0 && Ht(e, r, n ?? r), await this.keyboard(t), o || await M3(this));
}
const Xc = Symbol("files and value properties are mocked");
function Xi(e, t, a) {
  a ? Object.defineProperty(e, t, a) : delete e[t];
}
function G3(e, t) {
  var a;
  (a = e[Xc]) === null || a === void 0 || a.restore();
  const o = Object.getOwnPropertyDescriptor(e, "type"), r = Object.getOwnPropertyDescriptor(e, "value"), n = Object.getOwnPropertyDescriptor(e, "files");
  function i() {
    Xi(e, "type", o), Xi(e, "value", r), Xi(e, "files", n);
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
async function K3(e, t) {
  const a = _(e, "label") ? e.control : e;
  if (!a || !_(a, "input", {
    type: "file"
  }))
    throw new TypeError(`The ${a === e ? "given" : "associated"} ${a == null ? void 0 : a.tagName} element does not accept file uploads`);
  if (Te(e))
    return;
  const o = (Array.isArray(t) ? t : [
    t
  ]).filter((n) => !this.config.applyAccept || J3(n, a.accept)).slice(0, a.multiple ? void 0 : 1), r = () => {
    var n;
    o.length === ((n = a.files) === null || n === void 0 ? void 0 : n.length) && o.every((i, s) => {
      var l;
      return i === ((l = a.files) === null || l === void 0 ? void 0 : l.item(s));
    }) || (G3(a, Ss(pe(e), o)), this.dispatchUIEvent(a, "input"), this.dispatchUIEvent(a, "change"));
  };
  a.addEventListener("fileDialog", r), await this.click(e), a.removeEventListener("fileDialog", r);
}
function J3(e, t) {
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
  click: w3,
  dblClick: E3,
  tripleClick: C3,
  hover: _3,
  unhover: P3,
  tab: F3,
  keyboard: O3,
  copy: k3,
  cut: $3,
  paste: q3,
  pointer: B3,
  clear: V3,
  deselectOptions: W3,
  selectOptions: H3,
  type: z3,
  upload: K3
};
function X3(e) {
  return I().asyncWrapper(e);
}
const Ty = {
  applyAccept: !0,
  autoModify: !0,
  delay: 0,
  document: globalThis.document,
  keyboardMap: f3,
  pointerMap: m3,
  pointerEventsCheck: Tt.EachApiCall,
  skipAutoClose: !1,
  skipClick: !1,
  skipHover: !1,
  writeToClipboard: !1,
  advanceTimers: () => Promise.resolve()
}, Q3 = {
  ...Ty,
  writeToClipboard: !0
};
function gy(e = {}, t = Q3, a) {
  const o = a6(e, a, t);
  return {
    ...t,
    ...e,
    document: o
  };
}
function Z3(e = {}) {
  const t = gy(e);
  fy(t.document);
  var a;
  const o = (a = t.document.defaultView) !== null && a !== void 0 ? a : (
    /* istanbul ignore next */
    globalThis.window
  );
  return nP(o), _s(t).api;
}
function K({ keyboardState: e, pointerState: t, ...a } = {}, o) {
  const r = gy(a, Ty, o);
  fy(r.document);
  var n;
  const i = (n = t ?? e) !== null && n !== void 0 ? n : new vy();
  return {
    api: _s(r, i).api,
    system: i
  };
}
function e6(e) {
  return _s({
    ...this.config,
    ...e
  }, this.system).api;
}
function t6(e, t) {
  function a(...o) {
    return Vt(e, J.Call), X3(() => t.apply(e, o).then(async (r) => (await xt(e.config), r)));
  }
  return Object.defineProperty(a, "name", {
    get: () => t.name
  }), a;
}
function _s(e, t = new vy()) {
  const a = {};
  return Object.assign(a, {
    config: e,
    dispatchEvent: py.bind(a),
    dispatchUIEvent: a3.bind(a),
    system: t,
    levelRefs: {},
    ...Qc
  }), {
    instance: a,
    api: {
      ...Object.fromEntries(Object.entries(Qc).map(([o, r]) => [
        o,
        t6(a, r)
      ])),
      setup: e6.bind(a)
    }
  };
}
function a6(e, t, a) {
  var o, r;
  return (r = (o = e.document) !== null && o !== void 0 ? o : t && s3(t)) !== null && r !== void 0 ? r : a.document;
}
function o6(e) {
  return K().api.clear(e);
}
function r6(e, t = {}) {
  return K(t, e).api.click(e);
}
function n6(e = {}) {
  return K(e).api.copy();
}
function i6(e = {}) {
  return K(e).api.cut();
}
function l6(e, t = {}) {
  return K(t).api.dblClick(e);
}
function s6(e, t, a = {}) {
  return K(a).api.deselectOptions(e, t);
}
function u6(e, t = {}) {
  return K(t).api.hover(e);
}
async function c6(e, t = {}) {
  const { api: a, system: o } = K(t);
  return a.keyboard(e).then(() => o);
}
async function d6(e, t = {}) {
  const { api: a, system: o } = K(t);
  return a.pointer(e).then(() => o);
}
function p6(e, t) {
  return K(t).api.paste(e);
}
function f6(e, t, a = {}) {
  return K(a).api.selectOptions(e, t);
}
function m6(e, t = {}) {
  return K(t).api.tripleClick(e);
}
function y6(e, t, a = {}) {
  return K(a, e).api.type(e, t, a);
}
function h6(e, t = {}) {
  const { api: a, system: o } = K(t);
  return o.pointer.setMousePosition({
    target: e
  }), a.unhover(e);
}
function L6(e, t, a = {}) {
  return K(a).api.upload(e, t);
}
function v6(e = {}) {
  return K().api.tab(e);
}
const b6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: o6,
  click: r6,
  copy: n6,
  cut: i6,
  dblClick: l6,
  deselectOptions: s6,
  hover: u6,
  keyboard: c6,
  paste: p6,
  pointer: d6,
  selectOptions: f6,
  tab: v6,
  tripleClick: m6,
  type: y6,
  unhover: h6,
  upload: L6
}, Symbol.toStringTag, { value: "Module" })), Zc = {
  ...b6,
  setup: Z3
};
var H = (() => {
  let e;
  return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ? e = self : e = {}, e;
})(), { LOGLEVEL: A6 } = H, xe = { trace: 1, debug: 2, info: 3, warn: 4, error: 5, silent: 10 }, T6 = A6, ht = xe[T6] || xe.info, Sy = { trace: (e, ...t) => {
  ht <= xe.trace && console.trace(e, ...t);
}, debug: (e, ...t) => {
  ht <= xe.debug && console.debug(e, ...t);
}, info: (e, ...t) => {
  ht <= xe.info && console.info(e, ...t);
}, warn: (e, ...t) => {
  ht <= xe.warn && console.warn(e, ...t);
}, error: (e, ...t) => {
  ht <= xe.error && console.error(e, ...t);
}, log: (e, ...t) => {
  ht < xe.silent && console.log(e, ...t);
} }, jl = /* @__PURE__ */ new Set(), X = (e) => (t, ...a) => {
  if (!jl.has(t))
    return jl.add(t), Sy[e](t, ...a);
};
X.clear = () => jl.clear();
X.trace = X("trace");
X.debug = X("debug");
X.info = X("info");
X.warn = X("warn");
X.error = X("error");
X.log = X("log");
var g6 = (e) => e.transports !== void 0, S6 = () => Math.random().toString(16).slice(2), Y6 = class {
  constructor(e = {}) {
    this.sender = S6(), this.events = {}, this.data = {}, this.transports = [], this.isAsync = e.async || !1, g6(e) ? (this.transports = e.transports || [], this.transports.forEach((t) => {
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
}, Yy = ((e) => (e.CHANNEL_CREATED = "channelCreated", e.CONFIG_ERROR = "configError", e.STORY_INDEX_INVALIDATED = "storyIndexInvalidated", e.STORY_SPECIFIED = "storySpecified", e.SET_CONFIG = "setConfig", e.SET_STORIES = "setStories", e.SET_INDEX = "setIndex", e.SET_CURRENT_STORY = "setCurrentStory", e.CURRENT_STORY_WAS_SET = "currentStoryWasSet", e.FORCE_RE_RENDER = "forceReRender", e.FORCE_REMOUNT = "forceRemount", e.PRELOAD_ENTRIES = "preloadStories", e.STORY_PREPARED = "storyPrepared", e.DOCS_PREPARED = "docsPrepared", e.STORY_CHANGED = "storyChanged", e.STORY_UNCHANGED = "storyUnchanged", e.STORY_RENDERED = "storyRendered", e.STORY_MISSING = "storyMissing", e.STORY_ERRORED = "storyErrored", e.STORY_THREW_EXCEPTION = "storyThrewException", e.STORY_RENDER_PHASE_CHANGED = "storyRenderPhaseChanged", e.PLAY_FUNCTION_THREW_EXCEPTION = "playFunctionThrewException", e.UPDATE_STORY_ARGS = "updateStoryArgs", e.STORY_ARGS_UPDATED = "storyArgsUpdated", e.RESET_STORY_ARGS = "resetStoryArgs", e.SET_GLOBALS = "setGlobals", e.UPDATE_GLOBALS = "updateGlobals", e.GLOBALS_UPDATED = "globalsUpdated", e.REGISTER_SUBSCRIPTION = "registerSubscription", e.PREVIEW_KEYDOWN = "previewKeydown", e.PREVIEW_BUILDER_PROGRESS = "preview_builder_progress", e.SELECT_STORY = "selectStory", e.STORIES_COLLAPSE_ALL = "storiesCollapseAll", e.STORIES_EXPAND_ALL = "storiesExpandAll", e.DOCS_RENDERED = "docsRendered", e.SHARED_STATE_CHANGED = "sharedStateChanged", e.SHARED_STATE_SET = "sharedStateSet", e.NAVIGATE_URL = "navigateUrl", e.UPDATE_QUERY_PARAMS = "updateQueryParams", e.REQUEST_WHATS_NEW_DATA = "requestWhatsNewData", e.RESULT_WHATS_NEW_DATA = "resultWhatsNewData", e.SET_WHATS_NEW_CACHE = "setWhatsNewCache", e.TOGGLE_WHATS_NEW_NOTIFICATIONS = "toggleWhatsNewNotifications", e.TELEMETRY_ERROR = "telemetryError", e))(Yy || {}), { CHANNEL_CREATED: _4, CONFIG_ERROR: P4, CURRENT_STORY_WAS_SET: F4, DOCS_PREPARED: I4, DOCS_RENDERED: O4, FORCE_RE_RENDER: x4, FORCE_REMOUNT: ed, GLOBALS_UPDATED: M4, NAVIGATE_URL: N4, PLAY_FUNCTION_THREW_EXCEPTION: k4, PRELOAD_ENTRIES: $4, PREVIEW_BUILDER_PROGRESS: q4, PREVIEW_KEYDOWN: D4, REGISTER_SUBSCRIPTION: B4, RESET_STORY_ARGS: U4, SELECT_STORY: j4, SET_CONFIG: V4, SET_CURRENT_STORY: R6, SET_GLOBALS: H4, SET_INDEX: W4, SET_STORIES: z4, SHARED_STATE_CHANGED: G4, SHARED_STATE_SET: K4, STORIES_COLLAPSE_ALL: J4, STORIES_EXPAND_ALL: X4, STORY_ARGS_UPDATED: Q4, STORY_CHANGED: Z4, STORY_ERRORED: eF, STORY_INDEX_INVALIDATED: tF, STORY_MISSING: aF, STORY_PREPARED: oF, STORY_RENDER_PHASE_CHANGED: w6, STORY_RENDERED: rF, STORY_SPECIFIED: nF, STORY_THREW_EXCEPTION: iF, STORY_UNCHANGED: lF, UPDATE_GLOBALS: sF, UPDATE_QUERY_PARAMS: uF, UPDATE_STORY_ARGS: cF, REQUEST_WHATS_NEW_DATA: dF, RESULT_WHATS_NEW_DATA: pF, SET_WHATS_NEW_CACHE: fF, TOGGLE_WHATS_NEW_NOTIFICATIONS: mF, TELEMETRY_ERROR: yF } = Yy, E6 = new Error("ignoredException");
function C6() {
  let e = { setHandler: () => {
  }, send: () => {
  } };
  return new Y6({ transport: e });
}
var _6 = class {
  constructor() {
    this.getChannel = () => {
      if (!this.channel) {
        let e = C6();
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
}, Qi = "__STORYBOOK_ADDONS_PREVIEW";
function P6() {
  return H[Qi] || (H[Qi] = new _6()), H[Qi];
}
var F6 = P6(), I6 = ((e) => (e.DONE = "done", e.ERROR = "error", e.ACTIVE = "active", e.WAITING = "waiting", e))(I6 || {}), he = { CALL: "storybook/instrumenter/call", SYNC: "storybook/instrumenter/sync", START: "storybook/instrumenter/start", BACK: "storybook/instrumenter/back", GOTO: "storybook/instrumenter/goto", NEXT: "storybook/instrumenter/next", END: "storybook/instrumenter/end" }, td = { start: !1, back: !1, goto: !1, next: !1, end: !1 }, ad = new Error("This function ran after the play function completed. Did you forget to `await` it?"), od = (e) => Object.prototype.toString.call(e) === "[object Object]", O6 = (e) => Object.prototype.toString.call(e) === "[object Module]", x6 = (e) => {
  if (!od(e) && !O6(e))
    return !1;
  if (e.constructor === void 0)
    return !0;
  let t = e.constructor.prototype;
  return !(!od(t) || Object.prototype.hasOwnProperty.call(t, "isPrototypeOf") === !1);
}, M6 = (e) => {
  try {
    return new e.constructor();
  } catch {
    return {};
  }
}, Zi = () => ({ renderPhase: void 0, isDebugging: !1, isPlaying: !1, isLocked: !1, cursor: 0, calls: [], shadowCalls: [], callRefsByResult: /* @__PURE__ */ new Map(), chainedCallIds: /* @__PURE__ */ new Set(), ancestors: [], playUntil: void 0, resolvers: {}, syncTimeout: void 0 }), rd = (e, t = !1) => {
  let a = (t ? e.shadowCalls : e.calls).filter((r) => r.retain);
  if (!a.length)
    return;
  let o = new Map(Array.from(e.callRefsByResult.entries()).filter(([, r]) => r.retain));
  return { cursor: a.length, calls: a, callRefsByResult: o };
}, N6 = class {
  constructor() {
    this.initialized = !1, this.channel = F6.getChannel(), this.state = H.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {};
    let e = ({ storyId: i, isPlaying: s = !0, isDebugging: l = !1 }) => {
      let u = this.getState(i);
      this.setState(i, { ...Zi(), ...rd(u, l), shadowCalls: l ? u.shadowCalls : [], chainedCallIds: l ? u.chainedCallIds : /* @__PURE__ */ new Set(), playUntil: l ? u.playUntil : void 0, isPlaying: s, isDebugging: l }), this.sync(i);
    };
    this.channel.on(ed, e), this.channel.on(w6, ({ storyId: i, newPhase: s }) => {
      let { isDebugging: l } = this.getState(i);
      this.setState(i, { renderPhase: s }), s === "preparing" && l && e({ storyId: i }), s === "playing" && e({ storyId: i, isDebugging: l }), s === "played" && this.setState(i, { isLocked: !1, isPlaying: !1, isDebugging: !1 }), s === "errored" && this.setState(i, { isLocked: !1, isPlaying: !1 });
    }), this.channel.on(R6, () => {
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
        let h = (y = this.getLog(i).find((v) => v.status === "waiting")) == null ? void 0 : y.callId;
        p.id !== h && this.setState(i, { playUntil: p.id }), Object.values(c).forEach((v) => v());
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
    return this.state[e] || Zi();
  }
  setState(e, t) {
    let a = this.getState(e), o = typeof t == "function" ? t(a) : t;
    this.state = { ...this.state, [e]: { ...a, ...o } }, H.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
  }
  cleanup() {
    this.state = Object.entries(this.state).reduce((t, [a, o]) => {
      let r = rd(o);
      return r && (t[a] = Object.assign(Zi(), r)), t;
    }, {});
    let e = { controlStates: td, logItems: [] };
    this.channel.emit(he.SYNC, e), H.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
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
    if (!x6(e))
      return e;
    let { mutate: a = !1, path: o = [] } = t;
    return Object.keys(e).reduce((r, n) => {
      let i = e[n];
      return typeof i != "function" ? (r[n] = this.instrument(i, { ...t, path: o.concat(n) }), r) : typeof i.__originalFn__ == "function" ? (r[n] = i, r) : (r[n] = (...s) => this.track(n, i, s, t), r[n].__originalFn__ = i, Object.defineProperty(r[n], "name", { value: n, writable: !1 }), Object.keys(i).length > 0 && Object.assign(r[n], this.instrument({ ...i }, { ...t, path: o.concat(n) })), r);
    }, a ? e : M6(e));
  }
  track(e, t, a, o) {
    var h, v, R, f;
    let r = ((h = a == null ? void 0 : a[0]) == null ? void 0 : h.__storyId__) || ((f = (R = (v = H.__STORYBOOK_PREVIEW__) == null ? void 0 : v.selectionStore) == null ? void 0 : R.selection) == null ? void 0 : f.storyId), { cursor: n, ancestors: i } = this.getState(r);
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
      if (l instanceof H.window.HTMLElement) {
        let { prefix: d, localName: p, id: y, classList: h, innerText: v } = l, R = Array.from(h);
        return { __element__: { prefix: d, localName: p, id: y, classNames: R, innerText: v } };
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
          throw Sy.warn(l), E6;
      }
      throw l;
    };
    try {
      if (r === "played" && !t.retain)
        throw ad;
      let l = (a.getArgs ? a.getArgs(t, this.getState(t.storyId)) : t.args).map((c) => typeof c != "function" || Object.keys(c).length ? c : (...d) => {
        let { cursor: p, ancestors: y } = this.getState(t.storyId);
        this.setState(t.storyId, { cursor: 0, ancestors: [...y, t.id] });
        let h = () => this.setState(t.storyId, { cursor: p, ancestors: y }), v = !1;
        try {
          let R = c(...d);
          return R instanceof Promise ? (v = !0, R.finally(h)) : R;
        } finally {
          v || h();
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
function Ry(e, t = {}) {
  var a, o, r, n;
  try {
    let i = !1, s = !1;
    return (o = (a = H.window.location) == null ? void 0 : a.search) != null && o.includes("instrument=true") ? i = !0 : (n = (r = H.window.location) == null ? void 0 : r.search) != null && n.includes("instrument=false") && (s = !0), H.window.parent === H.window && !i || s ? e : (H.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ || (H.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new N6()), H.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(e, t));
  } catch (i) {
    return X.warn(i), e;
  }
}
var k6 = Zc.default || Zc, za = Ry(
  { ...Z_ },
  {
    intercept: (e, t) => t[0] === "fireEvent" || e.startsWith("findBy") || e.startsWith("waitFor")
  }
);
za.screen = Object.entries(za.screen).reduce(
  (e, [t, a]) => Object.defineProperty(e, t, {
    get() {
      return X.warn(Vy`
          You are using Testing Library's \`screen\` object. Use \`within(canvasElement)\` instead.
          More info: https://storybook.js.org/docs/react/essentials/interactions
        `), a;
    }
  }),
  { ...za.screen }
);
var {
  buildQueries: hF,
  configure: LF,
  createEvent: vF,
  findAllByAltText: bF,
  findAllByDisplayValue: AF,
  findAllByLabelText: TF,
  findAllByPlaceholderText: gF,
  findAllByRole: SF,
  findAllByTestId: YF,
  findAllByText: RF,
  findAllByTitle: wF,
  findByAltText: EF,
  findByDisplayValue: CF,
  findByLabelText: _F,
  findByPlaceholderText: PF,
  findByRole: FF,
  findByTestId: IF,
  findByText: OF,
  findByTitle: xF,
  fireEvent: MF,
  getAllByAltText: NF,
  getAllByDisplayValue: kF,
  getAllByLabelText: $F,
  getAllByPlaceholderText: qF,
  getAllByRole: DF,
  getAllByTestId: BF,
  getAllByText: UF,
  getAllByTitle: jF,
  getByAltText: VF,
  getByDisplayValue: HF,
  getByLabelText: WF,
  getByPlaceholderText: zF,
  getByRole: GF,
  getByTestId: KF,
  getByText: JF,
  getByTitle: XF,
  getConfig: QF,
  getDefaultNormalizer: ZF,
  getElementError: eI,
  getNodeText: tI,
  getQueriesForElement: aI,
  getRoles: oI,
  getSuggestedQuery: rI,
  isInaccessible: nI,
  logDOM: iI,
  logRoles: lI,
  prettyDOM: sI,
  queries: uI,
  queryAllByAltText: cI,
  queryAllByAttribute: dI,
  queryAllByDisplayValue: pI,
  queryAllByLabelText: fI,
  queryAllByPlaceholderText: mI,
  queryAllByRole: yI,
  queryAllByTestId: hI,
  queryAllByText: LI,
  queryAllByTitle: vI,
  queryByAltText: bI,
  queryByAttribute: AI,
  queryByDisplayValue: TI,
  queryByLabelText: gI,
  queryByPlaceholderText: SI,
  queryByRole: YI,
  queryByTestId: RI,
  queryByText: wI,
  queryByTitle: EI,
  queryHelpers: CI,
  screen: _I,
  waitFor: PI,
  waitForElementToBeRemoved: FI,
  within: wy,
  prettyFormat: II
} = za, Ey = Ry(
  { userEvent: k6 },
  { intercept: !0 }
).userEvent;
const OI = {
  title: "Components/Pages/Dashboard",
  component: By
}, Ca = {
  args: {
    config: A1
  }
}, _a = {
  args: {
    config: P1
  }
}, Pa = {
  args: {
    config: $1
  }
}, Fa = {
  args: {
    config: z1
  }
}, Ia = {
  args: {
    config: a0
  }
}, Cy = (e) => new Promise((t) => setTimeout(t, e)), _y = {
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
}, Oa = {
  args: {
    config: e1
  },
  parameters: {
    fetchMock: _y
  },
  play: async ({
    canvasElement: e
  }) => {
    const t = wy(e), a = Ey.setup();
    await Cy(1e3);
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
}, xa = {
  args: {
    config: u1
  },
  parameters: {
    fetchMock: _y
  },
  play: async ({
    canvasElement: e
  }) => {
    const t = wy(e), a = Ey.setup();
    await Cy(1e3);
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
Ca.parameters = {
  ...Ca.parameters,
  docs: {
    ...(nd = Ca.parameters) == null ? void 0 : nd.docs,
    source: {
      originalSource: `{
  args: {
    config: ((ExampleConfig_1 as unknown) as Config)
  }
}`,
      ...(ld = (id = Ca.parameters) == null ? void 0 : id.docs) == null ? void 0 : ld.source
    }
  }
};
var sd, ud, cd;
_a.parameters = {
  ..._a.parameters,
  docs: {
    ...(sd = _a.parameters) == null ? void 0 : sd.docs,
    source: {
      originalSource: `{
  args: {
    config: ((ExampleConfig_2 as unknown) as Config)
  }
}`,
      ...(cd = (ud = _a.parameters) == null ? void 0 : ud.docs) == null ? void 0 : cd.source
    }
  }
};
var dd, pd, fd;
Pa.parameters = {
  ...Pa.parameters,
  docs: {
    ...(dd = Pa.parameters) == null ? void 0 : dd.docs,
    source: {
      originalSource: `{
  args: {
    config: ((ExampleConfig_3 as unknown) as Config)
  }
}`,
      ...(fd = (pd = Pa.parameters) == null ? void 0 : pd.docs) == null ? void 0 : fd.source
    }
  }
};
var md, yd, hd;
Fa.parameters = {
  ...Fa.parameters,
  docs: {
    ...(md = Fa.parameters) == null ? void 0 : md.docs,
    source: {
      originalSource: `{
  args: {
    config: ((Dashboard_Filter as unknown) as Config)
  }
}`,
      ...(hd = (yd = Fa.parameters) == null ? void 0 : yd.docs) == null ? void 0 : hd.source
    }
  }
};
var Ld, vd, bd;
Ia.parameters = {
  ...Ia.parameters,
  docs: {
    ...(Ld = Ia.parameters) == null ? void 0 : Ld.docs,
    source: {
      originalSource: `{
  args: {
    config: StandaloneTable
  }
}`,
      ...(bd = (vd = Ia.parameters) == null ? void 0 : vd.docs) == null ? void 0 : bd.source
    }
  }
};
var Ad, Td, gd;
Oa.parameters = {
  ...Oa.parameters,
  docs: {
    ...(Ad = Oa.parameters) == null ? void 0 : Ad.docs,
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
      ...(gd = (Td = Oa.parameters) == null ? void 0 : Td.docs) == null ? void 0 : gd.source
    }
  }
};
var Sd, Yd, Rd;
xa.parameters = {
  ...xa.parameters,
  docs: {
    ...(Sd = xa.parameters) == null ? void 0 : Sd.docs,
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
      ...(Rd = (Yd = xa.parameters) == null ? void 0 : Yd.docs) == null ? void 0 : Rd.source
    }
  }
};
const xI = ["Example_1", "Example_2", "Example_3", "Dashboard_Filters", "StandAloneTable", "APIFiltersMap", "APIFiltersChart"];
export {
  xa as APIFiltersChart,
  Oa as APIFiltersMap,
  Fa as Dashboard_Filters,
  Ca as Example_1,
  _a as Example_2,
  Pa as Example_3,
  Ia as StandAloneTable,
  xI as __namedExportsOrder,
  OI as default
};
