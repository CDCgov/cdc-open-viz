export type Visualization = {
  visualizationType: string
  dataKey: string
  formattedData: any
  dataDescription: Object
  data: any
  originalFormattedData: any
  editing: boolean
  type: 'chart' | 'map' | 'data-bite' | 'waffle-chart' | 'markup-include' | 'filtered-text' | 'filter-dropdowns'
  newViz: boolean
  openModal: boolean
  hide: any[]
  autoLoad: boolean
  table: {
    showDataTableLink: boolean
  }
  general: any
  title: string
  uid: string
  usesSharedFilter: any
}
