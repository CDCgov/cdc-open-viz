import { C as a } from "./storybook-CdcChart-7ec388b6.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-isSolr-6a0136d5.es.js";
import "./storybook-queryStringUtils-696bb685.es.js";
import "./storybook-Icon-ee109bed.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-index-e5bf02db.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-Filters-31855816.es.js";
import "./storybook-coveUpdateWorker-2db8648a.es.js";
import "./storybook-chroma-b564050a.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-tiny-invariant-9f3340e2.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-Button-d74e310e.es.js";
import "./storybook-index-964548d8.es.js";
import "./storybook-DataTable-85b38873.es.js";
import "./storybook-Loading-f180d060.es.js";
import "./storybook-year-bedc547d.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-4cc720ca.es.js";
import "./storybook-icon-check-d4f3700e.es.js";
import "./storybook-string-7df1b381.es.js";
import "./storybook-Group-e6c0d0df.es.js";
import "./storybook-Tooltip-edc0f7ab.es.js";
import "./storybook-DataTableEditor-01986776.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-MultiSelect-b1f28fbd.es.js";
import "./storybook-InputSelect-a65afd95.es.js";
import "./storybook-useDataVizClasses-809f874d.es.js";
import "./storybook-cacheBustingString-7a3dd9ba.es.js";
const M = {
  title: "Components/Templates/Chart",
  component: a
}, e = {
  args: {
    config: {
      type: "chart",
      title: "Lollipop Style Horizontal Bar Chart - Number of Spills Occurring in the Home",
      showTitle: !0,
      showDownloadMediaButton: !1,
      theme: "theme-blue",
      animate: !0,
      fontSize: "medium",
      lineDatapointStyle: "hover",
      barHasBorder: "false",
      isLollipopChart: !0,
      lollipopShape: "circle",
      lollipopColorStyle: "two-tone",
      visualizationSubType: "horizontal",
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
        hideAxis: !0,
        displayNumbersOnBar: !0,
        hideLabel: !1,
        hideTicks: !1,
        size: "13",
        gridLines: !1,
        enablePadding: !1,
        min: "",
        max: "",
        labelColor: "#333",
        tickLabelColor: "#333",
        tickColor: "#333",
        rightHideAxis: !0,
        rightAxisSize: 50,
        rightLabel: "",
        rightLabelOffsetSize: 0,
        rightAxisLabelColor: "#333",
        rightAxisTickLabelColor: "#333",
        rightAxisTickColor: "#333",
        numTicks: "9",
        axisPadding: 0,
        tickRotation: 0,
        anchors: [],
        type: "chart",
        title: "Lollipop Style Horizontal Bar Chart",
        theme: "theme-blue",
        fontSize: "medium",
        lineDatapointStyle: "hover",
        barHasBorder: "false",
        isLollipopChart: !1,
        lollipopShape: "circle",
        lollipopColorStyle: "two-tone",
        visualizationSubType: "horizontal",
        padding: {
          left: 5,
          right: 5
        },
        yAxis: {
          size: 50,
          gridLines: !1
        },
        barThickness: 0.35,
        height: 260,
        xAxis: {
          type: "categorical",
          size: 75,
          tickRotation: 0,
          dataKey: "Vehicle"
        },
        table: {
          label: "Data Table",
          expanded: !0,
          show: !0
        },
        legend: {
          behavior: "isolate",
          position: "right"
        },
        exclusions: {
          active: !1,
          keys: []
        },
        palette: "qualitative-bold",
        labels: !1,
        dataFormat: {},
        confidenceKeys: {},
        data: [{
          Group: "Combined Total of Group A",
          Vehicle: "100",
          Home: "120",
          Work: "140",
          Office: "120"
        }, {
          Group: "Combined Total of Group B",
          Vehicle: "150",
          Home: "140",
          Work: "100",
          Office: "90"
        }, {
          Group: "Combined Total of Group C",
          Vehicle: "90",
          Home: "90",
          Work: "80",
          Office: "80"
        }, {
          Group: "Combined Total of Group D",
          Vehicle: "70",
          Home: "60",
          Work: "50",
          Office: "70"
        }],
        dataFileName: "CSV_Source_Example_for_Horizontal_Bar_viz-cdcwp1619811744363.csv",
        dataFileSourceType: "file",
        visualizationType: "Bar",
        runtime: {
          seriesLabels: {
            Vehicle: "Vehicle"
          },
          seriesLabelsAll: ["Vehicle"],
          originalXAxis: {
            type: "categorical",
            size: 75,
            tickRotation: 0,
            dataKey: "Vehicle"
          },
          seriesKeys: ["Vehicle"],
          xAxis: {
            size: 50,
            gridLines: !1
          },
          yAxis: {
            type: "categorical",
            size: 75,
            tickRotation: 0,
            dataKey: "Vehicle"
          },
          horizontal: !0,
          uniqueId: 1651765968212,
          editorErrorMessage: ""
        },
        description: "Subtext can be added here for options like citing data sources or insight into reading the bar chart.",
        series: [{
          dataKey: "Vehicle",
          type: "Bar"
        }],
        barHeight: 25,
        barPadding: 40,
        labelPlacement: "Below Bar",
        label: "Number of Accidents"
      },
      boxplot: [],
      topAxis: {
        hasLine: !1
      },
      isLegendValue: !1,
      barThickness: 0.35,
      barHeight: 6,
      barSpace: 15,
      heights: {
        vertical: 300,
        horizontal: 170.39999999999998
      },
      xAxis: {
        anchors: [],
        type: "categorical",
        showTargetLabel: !0,
        targetLabel: "Target",
        hideAxis: !0,
        hideLabel: !0,
        hideTicks: !0,
        size: "16",
        tickRotation: 0,
        min: "",
        max: "160",
        labelColor: "#333",
        tickLabelColor: "#333",
        tickColor: "#333",
        numTicks: "",
        labelOffset: 65,
        axisPadding: 0,
        target: 0,
        maxTickRotation: 0,
        dataKey: "Group"
      },
      table: {
        label: "Data Table",
        expanded: !1,
        limitHeight: !1,
        height: "",
        caption: "",
        showDownloadUrl: !1,
        showDataTableLink: !0,
        indexLabel: "Group",
        download: !1,
        showVertical: !0,
        show: !0
      },
      orientation: "horizontal",
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
        position: "right",
        hide: !0,
        label: "Accident Location"
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
      series: [{
        dataKey: "Home",
        type: "Bar",
        tooltip: !0
      }],
      tooltips: {
        opacity: 90
      },
      height: 212,
      data: [{
        Group: "Combined Total of Group A",
        Vehicle: "100",
        Home: "120",
        Work: "140",
        Office: "120"
      }, {
        Group: "Combined Total of Group B",
        Vehicle: "150",
        Home: "140",
        Work: "100",
        Office: "90"
      }, {
        Group: "Combined Total of Group C",
        Vehicle: "90",
        Home: "90",
        Work: "80",
        Office: "80"
      }, {
        Group: "Combined Total of Group D",
        Vehicle: "70",
        Home: "60",
        Work: "50",
        Office: "70"
      }],
      dataFileName: "CSV_Source_Example_for_Horizontal_Bar_viz-cdcwp1619811744363.csv",
      dataFileSourceType: "file",
      visualizationType: "Bar",
      description: "Subtext can be added here for options like citing data sources or insight into reading the bar chart.",
      barPadding: 47,
      filters: [],
      lollipopSize: "medium",
      validated: 4.23,
      dynamicMarginTop: 0
    }
  }
};
var i, n, o;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(i = e.parameters) == null ? void 0 : i.docs,
    source: {
      originalSource: `{
  args: {
    config: {
      type: 'chart',
      title: 'Lollipop Style Horizontal Bar Chart - Number of Spills Occurring in the Home',
      showTitle: true,
      showDownloadMediaButton: false,
      theme: 'theme-blue',
      animate: true,
      fontSize: 'medium',
      lineDatapointStyle: 'hover',
      barHasBorder: 'false',
      isLollipopChart: true,
      lollipopShape: 'circle',
      lollipopColorStyle: 'two-tone',
      visualizationSubType: 'horizontal',
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
        hideAxis: true,
        displayNumbersOnBar: true,
        hideLabel: false,
        hideTicks: false,
        size: '13',
        gridLines: false,
        enablePadding: false,
        min: '',
        max: '',
        labelColor: '#333',
        tickLabelColor: '#333',
        tickColor: '#333',
        rightHideAxis: true,
        rightAxisSize: 50,
        rightLabel: '',
        rightLabelOffsetSize: 0,
        rightAxisLabelColor: '#333',
        rightAxisTickLabelColor: '#333',
        rightAxisTickColor: '#333',
        numTicks: '9',
        axisPadding: 0,
        tickRotation: 0,
        anchors: [],
        type: 'chart',
        title: 'Lollipop Style Horizontal Bar Chart',
        theme: 'theme-blue',
        fontSize: 'medium',
        lineDatapointStyle: 'hover',
        barHasBorder: 'false',
        isLollipopChart: false,
        lollipopShape: 'circle',
        lollipopColorStyle: 'two-tone',
        visualizationSubType: 'horizontal',
        padding: {
          left: 5,
          right: 5
        },
        yAxis: {
          size: 50,
          gridLines: false
        },
        barThickness: 0.35,
        height: 260,
        xAxis: {
          type: 'categorical',
          size: 75,
          tickRotation: 0,
          dataKey: 'Vehicle'
        },
        table: {
          label: 'Data Table',
          expanded: true,
          show: true
        },
        legend: {
          behavior: 'isolate',
          position: 'right'
        },
        exclusions: {
          active: false,
          keys: []
        },
        palette: 'qualitative-bold',
        labels: false,
        dataFormat: {},
        confidenceKeys: {},
        data: [{
          Group: 'Combined Total of Group A',
          Vehicle: '100',
          Home: '120',
          Work: '140',
          Office: '120'
        }, {
          Group: 'Combined Total of Group B',
          Vehicle: '150',
          Home: '140',
          Work: '100',
          Office: '90'
        }, {
          Group: 'Combined Total of Group C',
          Vehicle: '90',
          Home: '90',
          Work: '80',
          Office: '80'
        }, {
          Group: 'Combined Total of Group D',
          Vehicle: '70',
          Home: '60',
          Work: '50',
          Office: '70'
        }],
        dataFileName: 'CSV_Source_Example_for_Horizontal_Bar_viz-cdcwp1619811744363.csv',
        dataFileSourceType: 'file',
        visualizationType: 'Bar',
        runtime: {
          seriesLabels: {
            Vehicle: 'Vehicle'
          },
          seriesLabelsAll: ['Vehicle'],
          originalXAxis: {
            type: 'categorical',
            size: 75,
            tickRotation: 0,
            dataKey: 'Vehicle'
          },
          seriesKeys: ['Vehicle'],
          xAxis: {
            size: 50,
            gridLines: false
          },
          yAxis: {
            type: 'categorical',
            size: 75,
            tickRotation: 0,
            dataKey: 'Vehicle'
          },
          horizontal: true,
          uniqueId: 1651765968212,
          editorErrorMessage: ''
        },
        description: 'Subtext can be added here for options like citing data sources or insight into reading the bar chart.',
        series: [{
          dataKey: 'Vehicle',
          type: 'Bar'
        }],
        barHeight: 25,
        barPadding: 40,
        labelPlacement: 'Below Bar',
        label: 'Number of Accidents'
      },
      boxplot: [],
      topAxis: {
        hasLine: false
      },
      isLegendValue: false,
      barThickness: 0.35,
      barHeight: 6,
      barSpace: 15,
      heights: {
        vertical: 300,
        horizontal: 170.39999999999998
      },
      xAxis: {
        anchors: [],
        type: 'categorical',
        showTargetLabel: true,
        targetLabel: 'Target',
        hideAxis: true,
        hideLabel: true,
        hideTicks: true,
        size: '16',
        tickRotation: 0,
        min: '',
        max: '160',
        labelColor: '#333',
        tickLabelColor: '#333',
        tickColor: '#333',
        numTicks: '',
        labelOffset: 65,
        axisPadding: 0,
        target: 0,
        maxTickRotation: 0,
        dataKey: 'Group'
      },
      table: {
        label: 'Data Table',
        expanded: false,
        limitHeight: false,
        height: '',
        caption: '',
        showDownloadUrl: false,
        showDataTableLink: true,
        indexLabel: 'Group',
        download: false,
        showVertical: true,
        show: true
      },
      orientation: 'horizontal',
      color: 'pinkpurple',
      columns: {},
      legend: {
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
        position: 'right',
        hide: true,
        label: 'Accident Location'
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
        suffix: '',
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
        dataKey: 'Home',
        type: 'Bar',
        tooltip: true
      }],
      tooltips: {
        opacity: 90
      },
      height: 212,
      data: [{
        Group: 'Combined Total of Group A',
        Vehicle: '100',
        Home: '120',
        Work: '140',
        Office: '120'
      }, {
        Group: 'Combined Total of Group B',
        Vehicle: '150',
        Home: '140',
        Work: '100',
        Office: '90'
      }, {
        Group: 'Combined Total of Group C',
        Vehicle: '90',
        Home: '90',
        Work: '80',
        Office: '80'
      }, {
        Group: 'Combined Total of Group D',
        Vehicle: '70',
        Home: '60',
        Work: '50',
        Office: '70'
      }],
      dataFileName: 'CSV_Source_Example_for_Horizontal_Bar_viz-cdcwp1619811744363.csv',
      dataFileSourceType: 'file',
      visualizationType: 'Bar',
      description: 'Subtext can be added here for options like citing data sources or insight into reading the bar chart.',
      barPadding: 47,
      filters: [],
      lollipopSize: 'medium',
      validated: 4.23,
      dynamicMarginTop: 0
    }
  }
}`,
      ...(o = (n = e.parameters) == null ? void 0 : n.docs) == null ? void 0 : o.source
    }
  }
};
const N = ["Lollipop"];
export {
  e as Lollipop,
  N as __namedExportsOrder,
  M as default
};
