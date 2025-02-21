import { C as i } from "./storybook-CdcChartComponent-aa83392e.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-getViewport-7dc50c16.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-InputToggle-9ce9588e.es.js";
import "./storybook-lodash-a4231e1c.es.js";
import "./storybook-DataTransform-12e90958.es.js";
import "./storybook-linear-ef79b404.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Text-c19e6344.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-Icon-d8cd8abc.es.js";
import "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-Inputs-0111192f.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-Tooltip-8bb9dfa2.es.js";
import "./storybook-Filters-f5cf5018.es.js";
import "./storybook-Button-63da743c.es.js";
import "./storybook-MultiSelect-fb96d51f.es.js";
import "./storybook-Loader-f4ec7b29.es.js";
import "./storybook-FilterStyles-fd509eb9.es.js";
import "./storybook-NestedDropdown-c8ea7d17.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-coveUpdateWorker-e42c85d9.es.js";
import "./storybook-viewports-5c5d7af1.es.js";
import "./storybook-DataTable-fa1d7944.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-437adc6c.es.js";
import "./storybook-index-3b47b3f7.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-linear-bc5fb9aa.es.js";
import "./storybook-BlurStrokeText-adc27352.es.js";
import "./storybook-InputSelect-76dbb8cb.es.js";
import "./storybook-Accordion-aed5218d.es.js";
const W = {
  title: "Components/Templates/Chart/Tooltip",
  component: i
}, e = {
  args: {
    config: {
      type: "chart",
      debugSvg: !1,
      chartMessage: {
        noData: "No Data Available"
      },
      title: "Example Stacked Bar Chart with Additional tolltip column",
      showTitle: !0,
      showDownloadMediaButton: !1,
      theme: "theme-orange",
      animate: !1,
      lineDatapointStyle: "hover",
      barHasBorder: "false",
      isLollipopChart: !1,
      lollipopShape: "circle",
      lollipopColorStyle: "two-tone",
      visualizationSubType: "stacked",
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
        size: "64",
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
        anchors: [],
        label: "Y-Axis Label Example"
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
        size: "67",
        tickRotation: "25",
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
        dataKey: "Year",
        label: "X-Axis Label Example",
        tickWidthMax: 41
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
        showVertical: !1,
        show: !0
      },
      orientation: "vertical",
      color: "pinkpurple",
      columns: {
        additionalColumn1: {
          label: "New Column",
          dataTable: !1,
          tooltips: !0,
          prefix: "",
          suffix: "",
          forestPlot: !1,
          startingPoint: "0",
          forestPlotAlignRight: !1,
          name: "Data 1"
        }
      },
      legend: {
        hide: !1,
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
        position: "right",
        label: "Data Type"
      },
      brush: {
        height: 25,
        data: [],
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
        suffix: "%",
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
      series: [{
        dataKey: "Data 2",
        type: "Bar",
        tooltip: !0
      }, {
        dataKey: "Data 3",
        type: "Bar",
        tooltip: !0
      }],
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
      area: {
        isStacked: !1
      },
      height: "375",
      data: [{
        Year: "2015",
        "Data 1": "25",
        "Data 2": "20",
        "Data 3": "55"
      }, {
        Year: "2016",
        "Data 1": "35",
        "Data 2": "30",
        "Data 3": "35"
      }, {
        Year: "2017",
        "Data 1": "22",
        "Data 2": "38",
        "Data 3": "40"
      }, {
        Year: "2018",
        "Data 1": "40",
        "Data 2": "40",
        "Data 3": "20"
      }],
      visualizationType: "Bar",
      validated: 4.23,
      dynamicMarginTop: 0
    }
  }
};
var a, t, n;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(a = e.parameters) == null ? void 0 : a.docs,
    source: {
      originalSource: `{
  args: {
    config: {
      type: 'chart',
      debugSvg: false,
      chartMessage: {
        noData: 'No Data Available'
      },
      title: 'Example Stacked Bar Chart with Additional tolltip column',
      showTitle: true,
      showDownloadMediaButton: false,
      theme: 'theme-orange',
      animate: false,
      lineDatapointStyle: 'hover',
      barHasBorder: 'false',
      isLollipopChart: false,
      lollipopShape: 'circle',
      lollipopColorStyle: 'two-tone',
      visualizationSubType: 'stacked',
      barStyle: '',
      roundingStyle: 'standard',
      tipRounding: 'top',
      isResponsiveTicks: false,
      general: {
        showDownloadButton: false
      },
      padding: {
        left: 5,
        right: 5
      },
      yAxis: {
        hideAxis: false,
        displayNumbersOnBar: false,
        hideLabel: false,
        hideTicks: false,
        size: '64',
        gridLines: false,
        enablePadding: false,
        min: '',
        max: '',
        labelColor: '#333',
        tickLabelColor: '#333',
        tickColor: '#333',
        rightHideAxis: true,
        rightAxisSize: 0,
        rightLabel: '',
        rightLabelOffsetSize: 0,
        rightAxisLabelColor: '#333',
        rightAxisTickLabelColor: '#333',
        rightAxisTickColor: '#333',
        numTicks: '',
        axisPadding: 0,
        tickRotation: 0,
        anchors: [],
        label: 'Y-Axis Label Example'
      },
      boxplot: {
        plots: [],
        borders: 'true',
        firstQuartilePercentage: 25,
        thirdQuartilePercentage: 75,
        boxWidthPercentage: 40,
        plotOutlierValues: false,
        plotNonOutlierValues: true,
        legend: {
          showHowToReadText: false,
          howToReadText: ''
        },
        labels: {
          q1: 'Lower Quartile',
          q2: 'q2',
          q3: 'Upper Quartile',
          q4: 'q4',
          minimum: 'Minimum',
          maximum: 'Maximum',
          mean: 'Mean',
          median: 'Median',
          sd: 'Standard Deviation',
          iqr: 'Interquartile Range',
          total: 'Total',
          outliers: 'Outliers',
          values: 'Values',
          lowerBounds: 'Lower Bounds',
          upperBounds: 'Upper Bounds'
        }
      },
      topAxis: {
        hasLine: false
      },
      isLegendValue: false,
      barThickness: 0.35,
      barHeight: 25,
      barSpace: 15,
      heights: {
        vertical: 300,
        horizontal: 750
      },
      xAxis: {
        sortDates: false,
        anchors: [],
        type: 'categorical',
        showTargetLabel: true,
        targetLabel: 'Target',
        hideAxis: false,
        hideLabel: false,
        hideTicks: false,
        size: '67',
        tickRotation: '25',
        min: '',
        max: '',
        labelColor: '#333',
        tickLabelColor: '#333',
        tickColor: '#333',
        numTicks: '',
        labelOffset: 65,
        axisPadding: 0,
        target: 0,
        maxTickRotation: 0,
        dataKey: 'Year',
        label: 'X-Axis Label Example',
        tickWidthMax: 41
      },
      table: {
        label: 'Data Table',
        expanded: true,
        limitHeight: false,
        height: '',
        caption: '',
        showDownloadUrl: false,
        showDataTableLink: true,
        indexLabel: '',
        download: true,
        showVertical: false,
        show: true
      },
      orientation: 'vertical',
      color: 'pinkpurple',
      columns: {
        additionalColumn1: {
          label: 'New Column',
          dataTable: false,
          tooltips: true,
          prefix: '',
          suffix: '',
          forestPlot: false,
          startingPoint: '0',
          forestPlotAlignRight: false,
          name: 'Data 1'
        }
      },
      legend: {
        hide: false,
        behavior: 'isolate',
        singleRow: false,
        colorCode: '',
        reverseLabelOrder: false,
        description: '',
        dynamicLegend: false,
        dynamicLegendDefaultText: 'Show All',
        dynamicLegendItemLimit: 5,
        dynamicLegendItemLimitMessage: 'Dynamic Legend Item Limit Hit.',
        dynamicLegendChartMessage: 'Select Options from the Legend',
        lineMode: false,
        verticalSorted: false,
        position: 'right',
        label: 'Data Type'
      },
      brush: {
        height: 25,
        data: [],
        active: false
      },
      exclusions: {
        active: false,
        keys: []
      },
      palette: 'qualitative-bold',
      isPaletteReversed: false,
      twoColor: {
        palette: 'monochrome-1',
        isPaletteReversed: false
      },
      labels: false,
      dataFormat: {
        commas: false,
        prefix: '',
        suffix: '%',
        abbreviated: false,
        bottomSuffix: '',
        bottomPrefix: '',
        bottomAbbreviated: false
      },
      confidenceKeys: {},
      visual: {
        border: true,
        accent: true,
        background: true,
        verticalHoverLine: false,
        horizontalHoverLine: false
      },
      useLogScale: false,
      filterBehavior: 'Filter Change',
      highlightedBarValues: [],
      series: [{
        dataKey: 'Data 2',
        type: 'Bar',
        tooltip: true
      }, {
        dataKey: 'Data 3',
        type: 'Bar',
        tooltip: true
      }],
      tooltips: {
        opacity: 90
      },
      forestPlot: {
        startAt: 0,
        width: 'auto',
        colors: {
          line: '',
          shape: ''
        },
        estimateField: '',
        estimateRadius: '',
        lowerCiField: '',
        upperCiField: '',
        shape: '',
        rowHeight: 20,
        showZeroLine: false,
        description: {
          show: true,
          text: 'description',
          location: 0
        },
        result: {
          show: true,
          text: 'result',
          location: 100
        },
        radius: {
          min: 1,
          max: 8,
          scalingColumn: ''
        },
        regression: {
          lower: 0,
          upper: 0,
          estimateField: 0
        },
        leftWidthOffset: 0,
        rightWidthOffset: 0
      },
      area: {
        isStacked: false
      },
      height: '375',
      data: [{
        Year: '2015',
        'Data 1': '25',
        'Data 2': '20',
        'Data 3': '55'
      }, {
        Year: '2016',
        'Data 1': '35',
        'Data 2': '30',
        'Data 3': '35'
      }, {
        Year: '2017',
        'Data 1': '22',
        'Data 2': '38',
        'Data 3': '40'
      }, {
        Year: '2018',
        'Data 1': '40',
        'Data 2': '40',
        'Data 3': '20'
      }],
      visualizationType: 'Bar',
      validated: 4.23,
      dynamicMarginTop: 0
    }
  }
}`,
      ...(n = (t = e.parameters) == null ? void 0 : t.docs) == null ? void 0 : n.source
    }
  }
};
const E = ["Additional_Tooltip"];
export {
  e as Additional_Tooltip,
  E as __namedExportsOrder,
  W as default
};
