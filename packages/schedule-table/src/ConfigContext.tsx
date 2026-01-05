import { createContext } from 'react'
import { Config } from './types/Config'

type ConfigContextType = {
  config: Config
  updateConfig: (config: Config) => void
  loading: boolean
  data: any[]
  setParentConfig?: (config: Config) => void
  isDashboard: boolean
  outerContainerRef: (node: HTMLElement | null) => void
}

const ConfigContext = createContext({} as ConfigContextType)

export default ConfigContext
