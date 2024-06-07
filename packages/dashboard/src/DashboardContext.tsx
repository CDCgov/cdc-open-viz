import { Dispatch, createContext } from 'react'
import { DashboardState } from './store/dashboard.reducer'
import DashboardActions from './store/dashboard.actions'
import { Tab } from './types/Tab'
import { MultiDashboardConfig } from './types/MultiDashboard'

type ConfigCTX = DashboardState & {
  outerContainerRef: (node: any) => void
  setParentConfig: any
  isDebug: boolean
}

const firstTab: Tab = 'Dashboard Description'

export const initialState = {
  data: {} as Record<string, any[]>,
  loading: false,
  filteredData: {},
  preview: false,
  tabSelected: firstTab
}

const initialContext: ConfigCTX = {
  outerContainerRef: () => {},
  setParentConfig: () => {},
  isDebug: false,
  config: {} as MultiDashboardConfig,
  ...initialState
}

export const DashboardContext = createContext<ConfigCTX>(initialContext)
export const DashboardDispatchContext = createContext<Dispatch<DashboardActions>>(() => {})
