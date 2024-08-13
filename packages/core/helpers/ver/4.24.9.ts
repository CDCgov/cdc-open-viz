import _ from 'lodash'
import { AnyVisualization } from '../../types/Visualization'
import { VizFilter } from '../../types/VizFilter'
import versionNeedsUpdate from './versionNeedsUpdate'

/**
 * Updates the configuration object to disable map zooming for single state maps in a dashboard.
 * when the config is below version 4.24.9
 */
const patchSingleStateZoom = config => {
  if (config.type === 'dashboard') {
    Object.values(config?.visualizations || {}).forEach((viz: AnyVisualization) => {
      if (viz.type === 'map' && viz.general?.geoType === 'single-state') {
        // if the version is less that 4.24.7 then allowMapZoom should be false
        let allowZoom = versionNeedsUpdate(config.version, '4.24.9') ? false : viz.general.allowMapZoom
        viz.general.allowMapZoom = allowZoom
      }
    })
  }
  if (config.type === 'map' && config.general?.geoType === 'single-state') {
    // if the version is less that 4.24.7 then allowMapZoom should be false
    let allowZoom = versionNeedsUpdate(config.version, '4.24.9') ? false : config.general.allowMapZoom
    config.general.allowMapZoom = allowZoom
  }
}

const update_4_24_9 = config => {
  const ver = '4.24.9'
  const newConfig = _.cloneDeep(config)
  patchSingleStateZoom(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_24_9
