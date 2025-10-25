import { DataSet } from '@cdc/core/types/DataSet'
import { SharedFilter } from './SharedFilter'
import { ComponentThemes } from '@cdc/core/types/ComponentThemes'

export type Dashboard = {
  sharedFilters: SharedFilter[]
  datasets: Record<string, DataSet>
  description: any
  title: any
  general?: {
    headerColor?: ComponentThemes
  }
  filters: any // deprecate
}
