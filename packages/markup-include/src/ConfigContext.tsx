import { createContext } from 'react'
import { Config } from './types/Config'

type ConfigCTX = {
  config: Config
  data: Object[]
  isDashboard: boolean
  loading: boolean
  setParentConfig: Function
  updateConfig: Function
  showEditorPanel?: boolean
}

const ConfigContext = createContext({} as unknown as ConfigCTX)

export default ConfigContext
