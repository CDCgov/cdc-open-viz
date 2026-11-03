import { type State } from '../../store/dataTable.reducer'

type UpdateField = (section, subsection, fieldName, newValue) => void

export type FiltersPanelProps = {
  config: State['config']
  data: State['data']
  updateFilters: UpdateField
}
