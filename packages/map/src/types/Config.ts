export type Config = {
  general: {
    geoBorderColor: string
    // Theme Color
    headerColor: string
    // Top title text
    title: string
    // Show/Hide the title
    showTitle: boolean
    // Show/Hide the LEGEND
    showSidebar: boolean
    // Download data button
    showDownloadButton: boolean
    // Download image
    showDownloadMediaButton: boolean
    // Show United States maps as hex maps
    displayAsHex: boolean
    // Show/Hide territories underneath the map
    displayStateLabels: boolean
    territoriesLabel: string
    territoriesAlwaysShow: boolean
    language: string
    geoType: string
    geoLabelOverride: string
    hasRegions: boolean
    fullBorder: boolean
    type: any
    footnotes?: boolean
    equalNumberOptIn?: boolean
    palette: {
      isReversed: boolean
    }
    allowMapZoom: boolean
    hideGeoColumnInTooltip: boolean
    hidePrimaryColumnInTooltip: boolean
    statePicked: {
      fipsCode: string
      stateName: string
    }
  }
  color: string
  columns: {
    geo: {
      name: string
      label: string
      tooltip: boolean
      dataTable: boolean
    }
    primary: {
      dataTable: boolean
      tooltip: boolean
      prefix: string
      suffix: string
      name: string
      label: string
    }
    navigate: {
      name: string
    }
    latitude: { name: string }
    longitude: { name: string }
  }
  legend: {
    descriptions: {}
    specialClasses: any[]
    unified: boolean
    singleColumn: boolean
    singleRow: boolean
    showSpecialClassesLast: boolean
    dynamicDescription: boolean
    type: string
    numberOfItems: number
    position: string
    title: string
  }
  filters: any[]
  table: {
    label: string
    expanded: boolean
    limitHeight: boolean
    height: string
    caption: string
    showDownloadUrl: boolean
    showDataTableLink: boolean
    showFullGeoNameInCSV: boolean
    forceDisplay: boolean
    download: boolean
    indexLabel: string
  }
  tooltips: {
    appearanceType: any
    linkLabel: string
    capitalizeLabels: boolean
    opacity: number
  }
  runtime: {
    editorErrorMessage: any[]
  }
  visual: {
    minBubbleSize: number
    maxBubbleSize: number
    extraBubbleBorder: boolean
    cityStyle: any
    geoCodeCircleSize: number
    showBubbleZeros: boolean
  }
  mapPosition: { coordinates: any; zoom: number }
  map: {
    layers: any[]
  }
  filterBehavior: string
  // Custom color palette for updating colors
  customColors?: string[]
  data: any[]
}
