import { DashboardConfig } from './DashboardConfig'
import { Tab } from './Tab'

export type InitialState = {
  config: DashboardConfig
  data: Record<string, any[]>
  loading: boolean
  filteredData: Object
  preview: boolean
  tabSelected: Tab
  filtersApplied: boolean
}
