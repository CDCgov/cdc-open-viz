import { type PanelConfig, type PanelUpdateField } from '../types'

export type DataTableSettingsPanelProps = {
  config: PanelConfig
  columns: string[]
  updateDataTable: PanelUpdateField
  updateConfigField: PanelUpdateField
}
