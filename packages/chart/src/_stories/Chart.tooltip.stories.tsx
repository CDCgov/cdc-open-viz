import type { Meta, StoryObj } from '@storybook/react'

import Chart from '../CdcChartComponent'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Tooltip',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Additional_Tooltip: Story = {
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
      series: [
        {
          dataKey: 'Data 2',
          type: 'Bar',
          tooltip: true
        },
        {
          dataKey: 'Data 3',
          type: 'Bar',
          tooltip: true
        }
      ],
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
      data: [
        {
          Year: '2015',
          'Data 1': '25',
          'Data 2': '20',
          'Data 3': '55'
        },
        {
          Year: '2016',
          'Data 1': '35',
          'Data 2': '30',
          'Data 3': '35'
        },
        {
          Year: '2017',
          'Data 1': '22',
          'Data 2': '38',
          'Data 3': '40'
        },
        {
          Year: '2018',
          'Data 1': '40',
          'Data 2': '40',
          'Data 3': '20'
        }
      ],
      visualizationType: 'Bar',
      validated: 4.23,
      dynamicMarginTop: 0
    }
  }
}

export default meta
