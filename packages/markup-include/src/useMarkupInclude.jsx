import { useLoadConfig } from '@cdc/core/hooks/store/useLoadConfig'
import defaults from './data/initial-state'

export const useMarkupInclude = visualizationProps => {
  return useLoadConfig(visualizationProps, defaults)
}
