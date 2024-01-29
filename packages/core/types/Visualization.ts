export type Visualization = {
  autoLoad: boolean
  data: any
  dataDescription: Object
  dataFileName: string
  dataFileSourceType: string
  dataKey: string
  datasets: Record<string, any>
  editing: boolean
  formattedData?: Object[]
  general: any
  hide: any[]
  newViz: boolean
  openModal: boolean
  originalFormattedData: any
  orientation: 'vertical' | 'horizontal'
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
