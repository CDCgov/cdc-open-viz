export default {
  type: 'chart',
  title: '',
  theme: 'theme-blue',
  fontSize: 'medium',
  lineDatapointStyle: 'hover',
  barHasBorder: 'false',
  isLollipopChart: false,
  lollipopShape: 'circle',
  lollipopColorStyle: 'two-tone',
  visualizationSubType: 'regular',
  padding: {
    left: 5,
    right: 5
  },
  yAxis: {
    hideAxis: false,
    hideLabel: false,
    hideTicks: false,
    size: 50,
    gridLines: false,
    min: undefined,
    max:undefined
  },
  barHeight: 25,
  barThickness: 0.35,
  height: 300,
  xAxis: {
    type: 'categorical',
    hideAxis: false,
    hideLabel: false,
    hideTicks: false,
    size: 75,
    tickRotation: 0,
    min: undefined,
    max:undefined
  },
  table: {
    label: 'Data Table',
    expanded: true
  },
  orientation: 'vertical',
  legend: {
    behavior: 'isolate',
    position: 'right'
  },
  exclusions: {
    active: false,
    keys: []
  },
  palette: 'qualitative-bold',
  isPaletteReversed: false,
  labels: false,
  dataFormat: {},
  confidenceKeys: {}
}
