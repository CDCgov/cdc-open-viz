import { useVisualization } from '@cdc/core/hooks/store/useVisualization'
import defaults from './data/initial-state'

export const useMarkupInclude = visualizationProps => {
  return useVisualization(visualizationProps, defaults)
}
