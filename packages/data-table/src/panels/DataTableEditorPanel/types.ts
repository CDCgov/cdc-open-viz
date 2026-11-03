import { type Dispatch } from 'react'

import { type State } from '../../store/dataTable.reducer'
import { default as DataTableActions } from '../../store/dataTable.actions'

export type DataTableEditorPanelProps = {
  state: State
  dispatch: Dispatch<DataTableActions>
}
