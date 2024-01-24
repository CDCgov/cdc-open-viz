export type Visualization = {
  autoLoad: boolean
  data: any
  dataDescription: Object
  dataFileName: string
  dataFileSourceType: string
  dataKey: string
  datasets: any
  editing: boolean
  formattedData?: Object[]
  general: any
  hide: any[]
  multiDashboards?: any[]
  newViz: boolean
  openModal: boolean
  originalFormattedData: any
  orientation: any
  table: {
    showDataTableLink: boolean
  }
  title: string
  type: 'dashboard' | 'chart' | 'map' | 'data-bite' | 'waffle-chart' | 'markup-include' | 'filtered-text' | 'filter-dropdowns'
  uid: string
  usesSharedFilter: any
  visualizationType: string
  visualizationSubType: string
}
