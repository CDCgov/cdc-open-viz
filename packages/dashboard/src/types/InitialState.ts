import { DashboardConfig } from './DashboardConfig'

export type InitialState = {
  config: DashboardConfig
  data: Object
  loading: boolean
  filteredData: Object
  preview: boolean
  tabSelected: number
}
