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
    hasRegions: false,
    expandDataTable: true,
    fullBorder: false,
    type: 'data',
    palette:{
      isReversed:false
    },
    hideGeoColumnInTooltip: false,
    hidePrimaryColumnInTooltip: false
  },
  
  type: "map",
  color: 'pinkpurple',
  columns: {
    geo: {
      name: 'FIPS Codes',
      label: 'Location',
			tooltip: false,
      dataTable: true,
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
    }
  },
  legend: {
    descriptions: {},
    specialClasses: [],
    unified: false,
    singleColumn: false,
    dynamicDescription: false,
    type: "equalnumber",
    numberOfItems: 3,
    position: "side",
    title: "Legend",
  },
  filters: [],
  dataTable: {
    title: 'Data Table'
  },
  tooltips: {
    appearanceType: 'hover',
    linkLabel: 'Learn More',
    capitalizeLabels: true
  },
  runtime: {
    editorErrorMessage: []
  }
};
