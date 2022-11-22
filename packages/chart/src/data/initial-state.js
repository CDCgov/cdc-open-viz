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
    max: ''
  },
  barThickness: 0.35,
  barHeight: 25,
  height: 300,
  xAxis: {
    type: 'categorical',
    hideAxis: false,
    hideLabel: false,
    hideTicks: false,
    size: 75,
    tickRotation: 0,
    min: '',
    max: ''
  },
  table: {
    label: 'Data Table',
    expanded: true,
    limitHeight: false,
    height: '',
    caption: ''
  },
  orientation: 'vertical',
  legend: {
    behavior: 'isolate',
    position: 'right',
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
  dataFormat: { commas: false, prefix: '', suffix: '' },
  confidenceKeys: {},
  visual: {
    border: true,
    accent: true,
    background: true
  }
}
