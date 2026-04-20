import { ConfigureData } from '@cdc/core/types/ConfigureData'

export type DashboardCondition = {
  id?: string
  datasetKey?: string
  operator?: 'hasRows' | 'hasNoRows' | 'columnHasAnyValue'
  columnName?: string
  values?: string[]
}

type Col = {
  equalHeight?: boolean
  width: number | null
  hide?: boolean
  widget?: string
  toggleName?: string
  uuid?: string | number
  dashboardCondition?: DashboardCondition
}

export type ConfigRow = {
  columns: Col[]
  expandCollapseAllButtons: boolean
  uuid?: string | number
  toggle?: boolean
  equalHeight?: boolean
  multiVizColumn?: string
  originalMultiVizColumn?: string
  dashboardCondition?: DashboardCondition
} & ConfigureData
