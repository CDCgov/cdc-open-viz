import { createContext } from 'react'
import { MarkupIncludeConfig } from '@cdc/core/types/MarkupInclude'

type ConfigCTX = {
  config: MarkupIncludeConfig
  data: Object[]
  isDashboard: boolean
  loading: boolean
  setParentConfig: Function
  updateConfig: Function
  showEditorPanel?: boolean
}

const ConfigContext = createContext({} as unknown as ConfigCTX)

export default ConfigContext
