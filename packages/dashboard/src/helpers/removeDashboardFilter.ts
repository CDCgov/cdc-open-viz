import { AnyVisualization } from '@cdc/core/types/Visualization'
import _ from 'lodash'
import { SharedFilter } from '../types/SharedFilter'

type Viz = Record<string, AnyVisualization>

export const removeDashboardFilter = (
  index,
  sharedFilters: SharedFilter[],
  visualizations: Viz
): [SharedFilter[], Viz] => {
  const newSharedFilters = _.cloneDeep(sharedFilters)

  newSharedFilters.splice(index, 1)
  const shiftDownIndexes = Object.keys(sharedFilters).slice(index + 1)
  const newVisualizations: Viz = _.cloneDeep(visualizations)
  Object.keys(newVisualizations).forEach(vizKey => {
    const viz = newVisualizations[vizKey]
    if (viz.type === 'dashboardFilters') {
      // shift the indexes down
      const sharedFilterIndexes = viz.sharedFilterIndexes
        .filter(filterIndex => filterIndex != index)
        .map(filterIndex => {
          if (shiftDownIndexes.includes(filterIndex.toString())) {
            return filterIndex - 1
          }
          return filterIndex
        })
      newVisualizations[vizKey].sharedFilterIndexes = sharedFilterIndexes
    }
  })
  return [newSharedFilters, newVisualizations]
}
