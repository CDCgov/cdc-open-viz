import { type Dispatch } from 'react'

import type DataTableActions from '../../store/dataTable.actions'
import { type State } from '../../store/dataTable.reducer'

export type DataTableEditorPanelProps = {
  state: State
  dispatch: Dispatch<DataTableActions>
}
