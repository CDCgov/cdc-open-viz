import { type PanelConfig, type PanelUpdateField } from '../types'

export type ColumnsPanelProps = {
  config: PanelConfig
  updateField: PanelUpdateField
  deleteColumn: (columnName: string) => void
}
