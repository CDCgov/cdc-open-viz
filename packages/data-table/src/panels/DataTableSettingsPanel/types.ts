import { type State } from '../../store/dataTable.reducer'

type UpdateField = (section, subsection, fieldName, newValue) => void

export type DataTableSettingsPanelProps = {
  config: State['config']
  columns: string[]
  updateDataTable: UpdateField
  updateConfigField: UpdateField
}
