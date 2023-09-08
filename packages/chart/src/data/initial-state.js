export default {
  type: 'chart',
  debugSvg: false,
  chartMessage: {
    noData: 'No Data Available'
  },
  title: '',
  showTitle: true,
  showDownloadMediaButton: false,
  showChartBrush: false,
  theme: 'theme-blue',
  animate: false,
  fontSize: 'medium',
  lineDatapointStyle: 'hover',
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
    tickRotation: 0,
    anchors: []
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
    axisPadding: 0,
    target: 0,
    maxTickRotation: 0
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
    showVertical: true
  },
  orientation: 'vertical',
  color: 'pinkpurple',
  columns: {
    // start with a blank list
  },
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
    dynamicLegendChartMessage: 'Select Options from the Legend'
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
  brush: {
    pattern_id: 'brush_pattern',
    accent_color: '#ddd'
  }
}
