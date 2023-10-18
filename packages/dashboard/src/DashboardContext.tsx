import { Dispatch, createContext } from 'react'
import { DashboardState } from './store/dashboard.reducer'
import DashboardActions from './store/dashboard.actions'

type ConfigCTX = DashboardState & {
  outerContainerRef: (node: any) => void
  setParentConfig: any
  isDebug: boolean
}

export const initialState = {
  data: {},
  loading: false,
  filteredData: {},
  preview: false,
  tabSelected: 0
}

const initialContext: ConfigCTX = {
  outerContainerRef: () => {},
  setParentConfig: () => {},
  isDebug: false,
  ...initialState
}

export const DashboardContext = createContext<ConfigCTX>(initialContext)
export const DashboardDispatchContext = createContext<Dispatch<DashboardActions>>(() => {})
