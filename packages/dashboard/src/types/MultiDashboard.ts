import { Visualization } from '@cdc/core/types/Visualization'
import { Dashboard } from './Dashboard'
import { DashboardConfig } from './DashboardConfig'
import { Row } from './Row'

export type MultiDashboard = DashboardConfig & {
  multiDashboards: Record<string, { dashboard: Dashboard; rows: Row[]; visualizations: Record<string, Visualization> }>
}
