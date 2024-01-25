export type Visualization = {
  autoLoad: boolean
  data: any
  dataDescription: Object
  dataKey: string
  editing: boolean
  formattedData: any
  general: any
  hide: any[]
  newViz: boolean
  openModal: boolean
  originalFormattedData: any
  table: {
    showDataTableLink: boolean
  }
  title: string
  type: 'chart' | 'map' | 'data-bite' | 'waffle-chart' | 'markup-include' | 'filtered-text' | 'filter-dropdowns'
  uid: string
  usesSharedFilter: any
  visualizationType: string
}
