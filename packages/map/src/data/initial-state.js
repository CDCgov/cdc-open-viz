export default {
  annotations: [],
  general: {
    geoBorderColor: 'darkGray',
    headerColor: 'theme-blue',
    title: '',
    showTitle: true,
    showSidebar: true,
    showDownloadButton: false,
    showDownloadMediaButton: false,
    displayAsHex: false,
    displayStateLabels: false,
    territoriesLabel: 'Territories',
    territoriesAlwaysShow: false,
    language: 'en',
    geoType: 'single-state',
    geoLabelOverride: '',
    hasRegions: false,
    fullBorder: false,
    type: 'data',
    convertFipsCodes: true,
    palette: {
      isReversed: false
    },
    allowMapZoom: true,
    hideGeoColumnInTooltip: false,
    hidePrimaryColumnInTooltip: false,
    statePicked: {
      fipsCode: '01',
      stateName: 'Alabama'
    }
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
    verticalSorted: false,
    showSpecialClassesLast: false,
    dynamicDescription: false,
    type: 'equalnumber',
    numberOfItems: 3,
    position: 'side',
    title: 'Legend'
  },
  filters: [],
  table: {
    wrapColumns: false,
    label: 'Data Table',
    expanded: false,
    limitHeight: false,
    height: '',
    caption: '',
    showDownloadUrl: false,
    showDataTableLink: true,
    showFullGeoNameInCSV: false,
    forceDisplay: true,
    download: false,
    indexLabel: ''
  },
  tooltips: {
    appearanceType: 'hover',
    linkLabel: 'Learn More',
    capitalizeLabels: true,
    opacity: 90
  },
  runtime: {
    editorErrorMessage: []
  },
  visual: {
    minBubbleSize: 1,
    maxBubbleSize: 20,
    extraBubbleBorder: false,
    cityStyle: 'circle',
    cityStyleLabel: '',
    showBubbleZeros: false,
    additionalCityStyles: [],
    geoCodeCircleSize: 8,
    showBubbleZeros: false
  },
  mapPosition: { coordinates: [0, 30], zoom: 1 },
  map: {
    layers: [],
    patterns: []
  },
  hexMap: {
    type: '',
    shapeGroups: [
      {
        legendTitle: '',
        legendDescription: '',
        items: [{ key: '', shape: 'Arrow Up', column: '', operator: '=', value: '' }]
      }
    ]
  },
  filterBehavior: 'Filter Change'
}
