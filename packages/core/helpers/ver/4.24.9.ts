import _ from 'lodash'
import cloneConfig from '../cloneConfig'
import { BaseVisualizationConfig } from '../../types/BaseVisualizationConfig'
import { VizFilter } from '../../types/VizFilter'
import versionNeedsUpdate from './versionNeedsUpdate'

// Legacy interfaces for migration compatibility
interface LegacyMapGeneral {
  geoType?: string
  allowMapZoom?: boolean
}

interface LegacyMapConfig extends BaseVisualizationConfig {
  general?: LegacyMapGeneral
}

/**
 * Updates the configuration object to disable map zooming for single state maps in a dashboard.
 * when the config is below version 4.24.9
 */
const patchSingleStateZoom = config => {
  if (config.type === 'dashboard') {
    Object.values(config?.visualizations || {}).forEach((viz: BaseVisualizationConfig) => {
      const mapViz = viz as LegacyMapConfig
      if (mapViz.type === 'map' && mapViz.general?.geoType === 'single-state') {
        // if the version is less that 4.24.7 then allowMapZoom should be false
        let allowZoom = versionNeedsUpdate(config.version, '4.24.9') ? false : mapViz.general.allowMapZoom
        mapViz.general.allowMapZoom = allowZoom
      }
    })
  }
  const mapConfig = config as LegacyMapConfig
  if (mapConfig.type === 'map' && mapConfig.general?.geoType === 'single-state') {
    // if the version is less that 4.24.7 then allowMapZoom should be false
    let allowZoom = versionNeedsUpdate(config.version, '4.24.9') ? false : mapConfig.general.allowMapZoom
    mapConfig.general.allowMapZoom = allowZoom
  }
}

const doesNotHaveIds = (filters: VizFilter[]) => filters?.some(f => !f.id)

export const addIdsToVisFilters = config => {
  if (config.type === 'dashboard') {
    config.visualizations = Object.keys(config.visualizations).reduce((acc, curr) => {
      const viz: BaseVisualizationConfig & { filters: VizFilter[] } = config.visualizations[curr]
      if (viz.filters?.length && doesNotHaveIds(viz.filters)) {
        acc[curr].filters = viz.filters.map((filter, i) => ({ ...filter, id: Date.now() + i }))
      }
      return acc
    }, config.visualizations)
  } else if (config.filters?.length && doesNotHaveIds(config.filters)) {
    config.filters = config.filters.map((filter, i) => ({ ...filter, id: Date.now() + i }))
  }
}

const supportLineStyledLegend = newConfig => {
  // support for Charts
  if (newConfig.legend?.lineMode) {
    newConfig.legend.style = 'lines'
  }
}

const update_4_24_9 = config => {
  const ver = '4.24.9'
  const newConfig = cloneConfig(config)
  patchSingleStateZoom(newConfig)
  addIdsToVisFilters(newConfig)
  supportLineStyledLegend(config)
  newConfig.version = ver
  return newConfig
}

export default update_4_24_9
