import { type State } from '../store/dataTable.reducer'

export type PanelConfig = NonNullable<State['config']>

export type PanelUpdateField = (...args: any[]) => void
