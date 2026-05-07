import { DashboardConfig } from './DashboardConfig'
import { Tab } from './Tab'
import { DataRowsByKey } from '@cdc/core/types/Data'

export type InitialState = {
  config: DashboardConfig
  data: DataRowsByKey
  loading: boolean
  filteredData: DataRowsByKey
  preview: boolean
  tabSelected: Tab
  filtersApplied: boolean
}
