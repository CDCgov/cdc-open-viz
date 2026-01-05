import { VizFilter } from '@cdc/core/types/VizFilter'
import { General } from '@cdc/core/types/General'

export type RecommendationCategory = {
  value: string
  label: string
  color: string
  symbol?: string
}

export type MatrixConfig = {
  rowKey: string
  columnKey: string
  valueKey: string
  displayKey: string
  notesKey?: string
}

export type TableConfig = {
  caption?: string
  showLegend: boolean
  legendPosition: 'top' | 'bottom'
  stickyHeaders: boolean
  cellMinWidth?: number
  showNotesLinks: boolean
  notesLinkText: string
}

export type Footnote = {
  symbol?: string
  text: string
}

export type Config = {
  type: 'schedule-table'
  visualizationType: 'Schedule Table'
  title: string
  showTitle: boolean
  showEditorPanel?: boolean
  data?: Object[]
  dataUrl?: string
  matrix: MatrixConfig
  columnOrder?: string[]
  recommendations: RecommendationCategory[]
  table: TableConfig
  filters?: VizFilter[]
  footnotes?: Footnote[]
  general?: General
  runtime?: {
    uniqueId?: number
    editorErrorMessage?: string
  }
}
