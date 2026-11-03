import { type State } from '../../store/dataTable.reducer'

export type UpdateField = (section, subsection, fieldName, newValue) => void

export type ColumnsPanelProps = {
  config: State['config']
  updateField: UpdateField
  deleteColumn: (columnName: string) => void
}
