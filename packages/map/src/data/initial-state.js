export default {
  general: {
    geoBorderColor: 'darkGray',
    headerColor: 'theme-blue',
    showTitle: true,
    showSidebar: true,
    showDownloadButton: true,
    showDownloadMediaButton: false,
    displayAsHex: false,
    territoriesLabel: 'Territories',
    modalOpen: false,
    modalContent: null,
    language: 'en',
    geoType: 'us',
    hasRegions: false,
    expandDataTable: true,
    fullBorder: false,
    type: 'data'
  },
  type: "map",
  color: 'pinkpurple',
  columns: {
    geo: {
      name: '',
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
    },
    geosInRegion: {
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
  data: [
    {},
  ],
  filters: [],
  dataTable: {
    title: 'Data Table',
    forceDisplay: true // When standalone, this can't be removed. When this component is used in larger composed configurations there will be a different data table.
  },
  tooltips: {
    appearanceType: 'hover',
    linkLabel: 'Learn More',
    capitalizeLabels: true
  },
  processedData: {},
  processedLegend: {
    data: [],
    categoryValuesOrder: []
  },
  loading: true,
  viewport: "lg"
};
