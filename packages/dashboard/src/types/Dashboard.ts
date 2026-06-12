import { DataSet } from '@cdc/core/types/DataSet'
import { SharedFilter } from './SharedFilter'

export type DashboardDownloads = {
  downloadImageButton?: boolean
  downloadImageButtonStyle?: 'button' | 'link'
  downloadImageLabel?: string
  downloadPdfButton?: boolean
  includeContextInDownload?: boolean
}

export type Dashboard = {
  sharedFilters: SharedFilter[]
  datasets: Record<string, DataSet>
  description: any
  downloads?: DashboardDownloads
  title: any
  titleStyle: 'legacy' | 'large' | 'small'
  theme: any
  filters: any // deprecate
}
