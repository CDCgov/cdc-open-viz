import { ConfigureData } from '@cdc/core/types/ConfigureData'

export type DashboardCondition = {
  id?: string
  datasetKey?: string
  operator?: 'hasData' | 'hasNoData' | 'columnHasAnyValue'
  columnName?: string
  values?: string[]
}

export type ConditionalWidget = {
  widget: string
  dashboardCondition?: DashboardCondition
}

type Col = {
  equalHeight?: boolean
  width: number | null
  hide?: boolean
  widget?: string
  conditionalWidgets?: ConditionalWidget[]
  toggleName?: string
  uuid?: string | number
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
