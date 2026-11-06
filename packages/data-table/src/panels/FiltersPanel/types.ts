import { type State } from '../../store/dataTable.reducer'
import { type PanelConfig, type PanelUpdateField } from '../types'

export type FiltersPanelProps = {
  config: PanelConfig
  data: State['data']
  updateFilters: PanelUpdateField
}
