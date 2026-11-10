import ColumnsPanel from './ColumnsPanel'
import DataTableEditorPanel from './DataTableEditorPanel'
import DataTableSettingsPanel from './DataTableSettingsPanel'
import FiltersPanel from './FiltersPanel'

export { ColumnsPanel, DataTableEditorPanel, DataTableSettingsPanel, FiltersPanel }
export type { PanelConfig, PanelUpdateField } from './types'

export const Panels = {
  Columns: ColumnsPanel,
  DataTable: DataTableSettingsPanel,
  Filters: FiltersPanel
}

export default DataTableEditorPanel
