import _ from 'lodash'
import { DashboardFilters } from '@cdc/dashboard/src/types/DashboardFilters'
import { MultiDashboardConfig } from '@cdc/dashboard/src/types/MultiDashboard'
import { AnyVisualization } from '../../types/Visualization'
import versionNeedsUpdate from './versionNeedsUpdate'

export const dashboardFiltersMigrate = config => {
  if (!config.dashboard) return config
  const dashboardConfig = config as MultiDashboardConfig
  const newVisualizations = {}
  // autoload was removed from APIFilter type
  const newSharedFilters = (dashboardConfig.dashboard.sharedFilters || []).map(sf => {
    if (sf.apiFilter?.autoLoad !== undefined) {
      delete sf.apiFilter.autoLoad
    }
    if (sf.apiFilter?.defaultValue !== undefined) {
      delete sf.apiFilter.defaultValue
    }
    return sf
  })
  config.dashboard.sharedFilters = newSharedFilters

  Object.keys(dashboardConfig.visualizations).forEach(vizKey => {
    const viz = dashboardConfig.visualizations[vizKey] as DashboardFilters
    // hide was removed from visualizations
    if (viz.hide !== undefined) {
      viz.sharedFilterIndexes = newSharedFilters.map((_sf, i) => i).filter(i => !viz.hide.includes(i))
      viz.type = 'dashboardFilters'
      if (viz.autoLoad) {
        viz.filterBehavior = 'Filter Change'
      } else {
        viz.filterBehavior = 'Apply Button'
      }

      delete viz.hide
    }
    // 'filter-dropdowns' was renamed to 'dashboardFilters' for clarity
    if (viz.type === 'filter-dropdowns') {
      viz.type = 'dashboardFilters'
      if (!viz.sharedFilterIndexes) {
        viz.sharedFilterIndexes = config.dashboard.sharedFilters.map((_sf, i) => i)
        viz.filterBehavior = config.filterBehavior || 'Filter Change'
      }
    }
    if (viz.visualizationType === 'filter-dropdowns') viz.visualizationType = 'dashboardFilters'
    newVisualizations[vizKey] = viz
  })

  if (config.dashboard.sharedFilters.length && !Object.values(newVisualizations).find((v: AnyVisualization) => v.type === 'dashboardFilters')) {
    const newViz = {
      type: 'dashboardFilters',
      visualizationType: 'dashboardFilters',
      sharedFilterIndexes: config.dashboard.sharedFilters.map((_sf, i) => i),
      filterBehavior: config.filterBehavior || 'Filter Change'
    }
    const key = 'legacySharedFilters'
    newVisualizations[key] = newViz
    const newRow = {
      columns: [
        {
          width: 12,
          widget: key
        }
      ]
    }
    config.rows = [newRow, ...config.rows]
  }
  // if there's no dashboardFilters visualization but there are sharedFilters create a visualization and update rows.

  config.visualizations = newVisualizations
  delete config.filterBehavior // deprecated
}

const mapUpdates = newConfig => {
  // When switching between old version of equal number, and the revised equal number opt in, roundToPlace needs to be set.
  // There wasn't an initial value set for this, and legends would return NaN if it wasn't set. ie. 0 - NAN instead of 0 - 1
  const equalNumberRoundingPatch = newConfig => {
    if (newConfig.type === 'map') {
      if (newConfig.columns.primary.roundToPlace === undefined) {
        newConfig.columns.primary.roundToPlace = 0
      }
    }
  }

  equalNumberRoundingPatch(newConfig)

  return newConfig
}

const updateLogarithmicConfig = newConfig => {
  if (newConfig.useLogScale) {
    newConfig.yAxis.type === 'logarithmic'
  }
}

const update_4_24_7 = config => {
  const ver = '4.24.7'

  const newConfig = _.cloneDeep(config)

  mapUpdates(newConfig)
  dashboardFiltersMigrate(newConfig)
  updateLogarithmicConfig(newConfig)
  newConfig.version = versionNeedsUpdate(config.version, ver) ? ver : config.version
  return newConfig
}
export default update_4_24_7
