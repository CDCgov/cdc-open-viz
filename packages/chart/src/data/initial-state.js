export default {
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
  fontSize: 'medium',
  lineDatapointStyle: 'hover',
  lineDatapointColor: 'Same as Line',
  barHasBorder: 'false',
  isLollipopChart: false,
  lollipopShape: 'circle',
  lollipopColorStyle: 'two-tone',
  visualizationSubType: 'regular',
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
    scalePadding: 10,
    tickRotation: 0,
    anchors: [],
    shoMissingDataLabel: true,
    showMissingDataLine: true
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
    size: 75,
    tickRotation: 0,
    min: '',
    max: '',
    labelColor: '#333',
    tickLabelColor: '#333',
    tickColor: '#333',
    numTicks: '',
    labelOffset: 65,
    axisPadding: 200,
    target: 0,
    maxTickRotation: 0,
    showSuppressedSymbol: true,
    showSuppressedLine: true,
    shoMissingDataLabel: true,
    showMissingDataLine: true
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
    download: false,
    showVertical: true,
    dateDisplayFormat: ''
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
    lineMode: false,
    verticalSorted: false,
    highlightOnHover: false,
    hideSuppressedLabels: false,
    seriesHighlight: []
  },
  brush: {
    height: 25,
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
