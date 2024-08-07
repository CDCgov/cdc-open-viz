import _ from 'lodash'
import { AnyVisualization } from '../../types/Visualization'
import { VizFilter } from '../../types/VizFilter'

const patchSingleStateZoom = newConfig => {
  // Map zooming is a default feature created for world maps
  // Since we're turning it on for single state maps lets default it off for opting in.
  if (newConfig.type === 'map' && newConfig.general.geoType === 'single-state') {
    newConfig.general.allowMapZoom = false
  }
}

const doesNotHaveIds = (filters: VizFilter[]) => filters?.some(f => !f.id)

export const addIdsToVisFilters = config => {
  if (config.type === 'dashboard') {
    config.visualizations = Object.keys(config.visualizations).reduce((acc, curr) => {
      const viz: AnyVisualization & { filters: VizFilter[] } = config.visualizations[curr]
      if (viz.filters?.length && doesNotHaveIds(viz.filters)) {
        acc[curr].filters = viz.filters.map((filter, i) => ({ ...filter, id: Date.now() + i }))
      }
      return acc
    }, config.visualizations)
  } else if (config.filters?.length && doesNotHaveIds(config.filters)) {
    config.filters = config.filters.map((filter, i) => ({ ...filter, id: Date.now() + i }))
  }
}

const update_4_24_9 = config => {
  const ver = '4.24.9'
  const newConfig = _.cloneDeep(config)
  patchSingleStateZoom(newConfig)
  addIdsToVisFilters(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_24_9
