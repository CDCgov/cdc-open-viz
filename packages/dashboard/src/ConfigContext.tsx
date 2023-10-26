import { createContext } from 'react'
import type { Config } from './types/Config'
type ConfigCTX = {
  config: Config
  updateConfig: any
  setParentConfig: any
}

const ConfigContext = createContext<ConfigCTX>({} as ConfigCTX)

export default ConfigContext
