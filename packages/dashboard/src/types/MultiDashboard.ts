import { Visualization } from '@cdc/core/types/Visualization'
import { Dashboard } from './Dashboard'
import { DashboardConfig } from './DashboardConfig'
import { ConfigRow } from './ConfigRow'

export type MultiDashboard = { dashboard: Dashboard; rows: ConfigRow[]; visualizations: Record<string, Visualization>; label: string }

export type MultiDashboardConfig = DashboardConfig & {
  multiDashboards?: MultiDashboard[]
  activeDashboard?: number // index of the active MultiDashboard
}
