export default {
  annotations: [],
  allowLineToBarGraph: undefined,
  type: 'chart',
  debugSvg: false,
  chartMessage: {
    noData: 'No Data Available'
  },
  title: '',
  showTitle: true,
  showDownloadMediaButton: false,
  theme: 'theme-blue',
  animate: false,
  lineDatapointStyle: 'hover',
  lineDatapointColor: 'Same as Line',
  barHasBorder: 'true',
  isLollipopChart: false,
  lollipopShape: 'circle',
  lollipopColorStyle: 'two-tone',
  visualizationSubType: 'regular',
  barStyle: '',
  roundingStyle: 'standard',
  tipRounding: 'top',
  isResponsiveTicks: false,
  general: {
    annotationDropdownText: 'Annotations',
    showMissingDataLabel: true,
    showSuppressedSymbol: true,
    showZeroValueData: true,
    hideNullValue: true,
    palette: {
      isReversed: false,
      version: '2.0',
      name: 'qualitative-bold'
    }
  },
  padding: {
    left: 5,
    right: 5
  },
  preliminaryData: [],
  yAxis: {
    hideAxis: false,
    displayNumbersOnBar: false,
    hideLabel: false,
    hideTicks: false,
    size: 50,
    gridLines: false,
    enablePadding: false,
    min: '',
    max: '',
    labelColor: '#1c1d1f',
    tickLabelColor: '#1c1d1f',
    tickColor: '#1c1d1f',
    rightHideAxis: false,
    rightAxisSize: 0,
    rightLabel: '',
    rightLabelOffsetSize: 0,
    rightAxisLabelColor: '#1c1d1f',
    rightAxisTickLabelColor: '#1c1d1f',
    rightAxisTickColor: '#1c1d1f',
    numTicks: '',
    axisPadding: 0,
    scalePadding: 10,
    tickRotation: 0,
    anchors: [],
    shoMissingDataLabel: true,
    showMissingDataLine: true,
    categories: []
  },
  boxplot: {
    plots: [],
    borders: 'true',
    plotOutlierValues: false,
    plotNonOutlierValues: true,
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
      count: 'Count',
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
    size: 75,
    tickRotation: 0,
    min: '',
    max: '',
    labelColor: '#1c1d1f',
    tickLabelColor: '#1c1d1f',
    tickColor: '#1c1d1f',
    numTicks: '',
    labelOffset: 0,
    axisPadding: 200,
    target: 0,
    maxTickRotation: 0,
    padding: 5,
    showYearsOnce: false,
    sortByRecentDate: false,
    brushActive: false
  },
  table: {
    label: 'Data Table',
    expanded: true,
    limitHeight: false,
    height: '',
    caption: '',
    showDownloadUrl: false,
    showDataTableLink: true,
    showDownloadLinkBelow: true,
    indexLabel: '',
    download: false,
    showVertical: true,
    dateDisplayFormat: '',
    showMissingDataLabel: true,
    showSuppressedSymbol: true,
    collapsible: true
  },
  orientation: 'vertical',
  color: 'pinkpurple',
  columns: {
    // start with a blank list
  },
  legend: {
    hide: false,
    behavior: 'isolate',
    axisAlign: true,
    singleRow: true,
    colorCode: '',
    reverseLabelOrder: false,
    description: '',
    dynamicLegend: false,
    dynamicLegendDefaultText: 'Show All',
    dynamicLegendItemLimit: 5,
    dynamicLegendItemLimitMessage: 'Dynamic Legend Item Limit Hit.',
    dynamicLegendChartMessage: 'Select Options from the Legend',
    label: '',
    lineMode: false,
    verticalSorted: false,
    highlightOnHover: false,
    hideSuppressedLabels: false,
    hideSuppressionLink: false,
    seriesHighlight: [],
    style: 'circles',
    subStyle: 'linear blocks',
    groupBy: '',
    shape: 'circle',
    tickRotation: '',
    order: 'dataColumn',
    hideBorder: {
      side: false,
      topBottom: true
    },
    position: 'right',
    orderedValues: []
  },

  exclusions: {
    active: false,
    keys: []
  },
  twoColor: {
    palette: 'monochrome-1',
    isPaletteReversed: false,
    version: '2.0'
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
  filters: [],
  confidenceKeys: {},
  visual: {
    border: true,
    accent: true,
    background: true,
    verticalHoverLine: false,
    horizontalHoverLine: false,
    lineDatapointSymbol: 'none',
    maximumShapeAmount: 7
  },
  useLogScale: false,
  filterBehavior: 'Filter Change',
  highlightedBarValues: [],
  series: [],
  tooltips: {
    opacity: 90,
    singleSeries: false,
    dateDisplayFormat: ''
  },
  forestPlot: {
    startAt: 0,
    colors: {
      line: '',
      shape: ''
    },
    lineOfNoEffect: {
      show: true
    },
    type: '',
    pooledResult: {
      diamondHeight: 5,
      column: ''
    },
    estimateField: '',
    estimateRadius: '',
    shape: 'square',
    rowHeight: 20,
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
      min: 2,
      max: 10,
      scalingColumn: ''
    },
    regression: {
      lower: 0,
      upper: 0,
      estimateField: 0
    },
    leftWidthOffset: 0,
    rightWidthOffset: 0,
    showZeroLine: false,
    leftLabel: '',
    rightLabel: ''
  },
  area: {
    isStacked: false
  },
  sankey: {
    title: {
      defaultColor: 'black'
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
    nodeFontColor: 'black',
    nodeColor: {
      default: '#ff8500',
      inactive: '#808080'
    },
    linkColor: {
      default: '#ffc900',
      inactive: '#D3D3D3'
    },
    opacity: {
      nodeOpacityDefault: 1.0,
      nodeOpacityInactive: 0.1,
      LinkOpacityDefault: 1.0,
      LinkOpacityInactive: 0.1
    },
    storyNodeFontColor: '#006778',
    storyNodeText: [],
    nodeValueStyle: {
      textBefore: '(',
      textAfter: ')'
    },
    data: []
  }
}
