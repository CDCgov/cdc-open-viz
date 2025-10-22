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
  isEditor: boolean
  reloadURLData: (newFilters?: SharedFilter[]) => void
  loadAPIFilters: (
    sharedFilters: SharedFilter[],
    dropdowns: APIFilterDropdowns,
    loadAll?: boolean,
    recursiveLimit?: number,
    isStale?: () => boolean
  ) => Promise<SharedFilter[]>
  setAPIFilterDropdowns: (dropdowns: APIFilterDropdowns) => void
  setAPILoading: (loading: boolean) => void
}

const firstTab: Tab = 'Dashboard Description'

export const initialState = {
  data: {} as Record<string, any[]>,
  loading: false,
  filteredData: {},
  preview: false,
  tabSelected: firstTab,
  filtersApplied: false
}

const initialContext: ConfigCTX = {
  outerContainerRef: () => {},
  setParentConfig: () => {},
  setAPIFilterDropdowns: () => {},
  setAPILoading: () => {},
  reloadURLData: () => {},
  loadAPIFilters: () => Promise.resolve([]),
  isDebug: false,
  isEditor: false,
  config: {} as MultiDashboardConfig,
  ...initialState
}

export const DashboardContext = createContext<ConfigCTX>(initialContext)
export const DashboardDispatchContext = createContext<Dispatch<DashboardActions>>(() => {})
