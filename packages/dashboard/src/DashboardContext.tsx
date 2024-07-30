import { Dispatch, createContext } from 'react'
import { DashboardState } from './store/dashboard.reducer'
import DashboardActions from './store/dashboard.actions'
import { Tab } from './types/Tab'
import { MultiDashboardConfig } from './types/MultiDashboard'
import { SharedFilter } from './types/SharedFilter'
import { APIFilterDropdowns } from './components/DashboardFilters'

type ConfigCTX = DashboardState & {
  outerContainerRef: (node: any) => void
  setParentConfig: any
  isDebug: boolean
  reloadURLData: (newFilters?: SharedFilter[]) => void
  loadAPIFilters: (sharedFilters: SharedFilter[], dropdowns?: APIFilterDropdowns, recursiveLimit?: number) => Promise<SharedFilter[]>
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
  reloadURLData: () => {},
  loadAPIFilters: () => Promise.resolve([]),
  isDebug: false,
  config: {} as MultiDashboardConfig,
  ...initialState
}

export const DashboardContext = createContext<ConfigCTX>(initialContext)
export const DashboardDispatchContext = createContext<Dispatch<DashboardActions>>(() => {})
