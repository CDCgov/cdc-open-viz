export default {
  general: {
    geoBorderColor: 'darkGray',
    headerColor: 'theme-blue',
    showTitle: true,
    showSidebar: true,
    showDownloadButton: true,
    showDownloadMediaButton: false,
    displayAsHex: false,
    displayStateLabels: false,
    territoriesLabel: 'Territories',
    language: 'en',
    geoType: 'single-state',
    geoLabelOverride: '',
    hasRegions: false,
    expandDataTable: true,
    fullBorder: false,
    type: 'data',
    palette: {
      isReversed: false
    },
    allowMapZoom: true,
    hideGeoColumnInTooltip: false,
    hidePrimaryColumnInTooltip: false
  },

  type: 'map',
  color: 'pinkpurple',
  columns: {
    geo: {
      name: 'FIPS Codes',
      label: 'Location',
      tooltip: false,
      dataTable: true
    },
    primary: {
      dataTable: true,
      tooltip: true,
      prefix: '',
      suffix: '',
      name: '',
      label: ''
    },
    navigate: {
      name: ''
    },
    latitude: { name: '' },
    longitude: { name: '' }
  },
  legend: {
    descriptions: {},
    specialClasses: [],
    unified: false,
    singleColumn: false,
    singleRow: false,
    dynamicDescription: false,
    type: 'equalnumber',
    numberOfItems: 3,
    position: 'side',
    title: 'Legend'
  },
  filters: [],
  dataTable: {
    title: 'Data Table'
  },
  table: {
    showDownloadUrl: false
  },
  tooltips: {
    appearanceType: 'hover',
    linkLabel: 'Learn More',
    capitalizeLabels: true
  },
  runtime: {
    editorErrorMessage: []
  },
  visual: {
    minBubbleSize: 1,
    maxBubbleSize: 20,
    extraBubbleBorder: false,
    cityStyle: 'circle',
    geoCodeCircleSize: 2,
    showBubbleZeros: false
  },
  mapPosition: { coordinates: [0, 30], zoom: 1 }
}
