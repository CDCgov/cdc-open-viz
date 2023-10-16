import { Dispatch, createContext } from 'react'
import { DashboardState } from './store/dashboard.reducer'
import DashboardActions from './store/dashboard.actions'

type ConfigCTX = DashboardState & {
  outerContainerRef: (node: any) => void
  setParentConfig: any
  isDebug: boolean
}

const initialContext: ConfigCTX = {
  outerContainerRef: () => {},
  setParentConfig: () => {},
  isDebug: false,
  data: {},
  filteredData: {},
  loading: true,
  preview: false
}

export const DashboardContext = createContext<ConfigCTX>(initialContext)
export const DashboardDispatchContext = createContext<Dispatch<DashboardActions>>(() => {})
