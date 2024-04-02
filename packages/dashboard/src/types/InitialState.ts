import { DashboardConfig } from './DashboardConfig'
import { Tab } from './Tab'

export type InitialState = {
  config: DashboardConfig
  data: Object
  loading: boolean
  filteredData: Object
  preview: boolean
  tabSelected: Tab
}
