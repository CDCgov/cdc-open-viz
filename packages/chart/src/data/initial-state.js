export default {
  type: 'chart',
  title: '',
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
    min: '',
    max: '',
    labelColor: '#333',
    tickLabelColor: '#333',
    tickColor: '#333',
    rightHideAxis: true,
    rightAxisSize: 50,
    rightLabelOffsetSize: 0,
    rightAxisLabelColor: '#333',
    rightAxisTickLabelColor: '#333',
    rightAxisTickColor: '#333',
    isLegendValue: false,
    numTicks: ''
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
      count: 'Count',
      outliers: 'Outliers',
      values: 'Values'
    }
  },
  topAxis: {
    hasLine: false
  },
  barThickness: 0.35,
  barHeight: 25,
  barSpace: 20,
  height: 300,
  xAxis: {
    type: 'categorical',
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
    isLegendValue: false,
    numTicks: ''
  },
  table: {
    label: 'Data Table',
    expanded: true,
    limitHeight: false,
    height: '',
    caption: '',
    showDownloadUrl: true
  },
  orientation: 'vertical',
  legend: {
    behavior: 'isolate',
    position: 'right',
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
  labels: false,
  dataFormat: { commas: false, prefix: '', suffix: '', useFormat: false },
  confidenceKeys: {},
  visual: {
    border: true,
    accent: true,
    background: true
  }
}
