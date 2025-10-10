import { USE_V2_MIGRATION } from '@cdc/core/helpers/constants'

// Dynamic initial state based on migration flag
const createInitialState = () => {
  const paletteDefaults = USE_V2_MIGRATION
    ? {
        isReversed: true,
        name: 'sequential_bluereverse',
        version: '2.0'
      }
    : {
        isReversed: true,
        name: 'bluegreen',
        version: '1.0'
      }

  return {
    annotations: [],
    general: {
      navigationTarget: '_self',
      noDataMessage: 'No State Selected',
      annotationDropdownText: 'Annotations',
      geoBorderColor: 'darkGray',
      headerColor: 'theme-blue',
      title: '',
      showTitle: true,
      showSidebar: true,
      showDownloadMediaButton: false,
      displayAsHex: false,
      displayStateLabels: true,
      territoriesAlwaysShow: false,
      language: 'en',
      geoType: 'single-state',
      geoLabelOverride: '',
      hasRegions: false,
      fullBorder: false,
      type: 'data',
      convertFipsCodes: true,
      palette: paletteDefaults,
      allowMapZoom: true,
      hideGeoColumnInTooltip: false,
      hidePrimaryColumnInTooltip: false,
      statesPicked: []
    },
    type: 'map',
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
        label: '',
        roundToPlace: 0
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
      title: '',
      style: 'circles',
      subStyle: 'linear blocks',
      tickRotation: '',
      singleColumnLegend: false,
      hideBorder: false,
      groupBy: ''
    },
    filters: [],
    data: [],
    table: {
      wrapColumns: false,
      label: 'Data Table',
      expanded: false,
      limitHeight: false,
      height: '',
      caption: '',
      showDownloadUrl: false,
      showDataTableLink: true,
      showDownloadLinkBelow: true,
      showFullGeoNameInCSV: false,
      forceDisplay: true,
      download: false,
      indexLabel: '',
      cellMinWidth: '0',
      collapsible: true
    },
    tooltips: {
      appearanceType: 'hover',
      linkLabel: 'Learn More',
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
    filterBehavior: 'Filter Change',
    filterIntro: ''
  }
}

export default createInitialState()
