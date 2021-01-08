export default {
  general: {
    geoBorderColor: 'darkGray',
    headerColor: 'theme-blue',
    showTitle: true,
    showSidebar: true,
    showDownloadButton: true,
    territoriesLabel: 'Territories',
    modalOpen: false,
    modalContent: null,
    language: 'en',
    parentUrl: false,
    hasRegions: false,
    expandDataTable: true,
    fullBorder: false
  },
  columns: {
    primary: {},
    geo: {},
    geosInRegion: {
      name: ''
    }
  },
  legend: {
    descriptions: {},
    specialClasses: [],
    unified: false,
    singleColumn: false,
    dynamicDescription: false
  },
  data: [
    {},
  ],
  filters: [],
  sharing: {
    enabled: false
  },
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
  loading: true
};
