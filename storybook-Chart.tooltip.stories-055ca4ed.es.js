import { C as i } from "./storybook-CdcChart-d9e1c2cb.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-isSolr-cb863e7a.es.js";
import "./storybook-Filters-731a7a2c.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-Icon-b09f76c0.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-lodash-c15d8e1c.es.js";
import "./storybook-Button-d74e310e.es.js";
import "./storybook-MultiSelect-4068d9a0.es.js";
import "./storybook-Tooltip-edc0f7ab.es.js";
import "./storybook-coveUpdateWorker-efd75fb0.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-index-e5bf02db.es.js";
import "./storybook-InputToggle-1c80137d.es.js";
import "./storybook-chroma-b564050a.es.js";
import "./storybook-Group-e6c0d0df.es.js";
import "./storybook-string-7df1b381.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-DataTable-339952a4.es.js";
import "./storybook-Loading-f180d060.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-12c53202.es.js";
import "./storybook-Circle-4d1a558c.es.js";
import "./storybook-DataTransform-1390427f.es.js";
import "./storybook-footnoteSymbols-def02d7f.es.js";
import "./storybook-DataTableEditor-9b82b900.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-InputSelect-20478396.es.js";
import "./storybook-icon-check-0ef17e76.es.js";
import "./storybook-Accordion-dbc41a5b.es.js";
import "./storybook-index-e502eacf.es.js";
import "./storybook-useDataVizClasses-707a8d8e.es.js";
import "./storybook-cacheBustingString-7a3dd9ba.es.js";
const U = {
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
      fontSize: "medium",
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
      fontSize: 'medium',
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
const _ = ["Additional_Tooltip"];
export {
  e as Additional_Tooltip,
  _ as __namedExportsOrder,
  U as default
};