import { DataSet } from './DataSet'
import { SharedFilter } from './SharedFilter'

export type Dashboard = {
  sharedFilters: SharedFilter[]
  datasets: Record<string, DataSet>
  description: any
  title: any
  theme: any
  filters: any // deprecate
}
