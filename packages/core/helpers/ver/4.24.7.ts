import _ from 'lodash'
import cloneConfig from '../cloneConfig'
import { DashboardFilters } from '@cdc/dashboard/src/types/DashboardFilters'
import { MultiDashboardConfig } from '@cdc/dashboard/src/types/MultiDashboard'
import { BaseVisualizationConfig } from '../../types/BaseVisualizationConfig'
import versionNeedsUpdate from './versionNeedsUpdate'

/**
 * Migrates the dashboard configuration to the new format.
 *
 * This function performs the following transformations:
 * - Removes `autoLoad` and `defaultValue` from `apiFilter` in shared filters.
 * - Updates visualizations to remove `hide` and set `sharedFilterIndexes`.
 * - Renames visualization type `filter-dropdowns` to `dashboardFilters`.
 * - Ensures `sharedFilterIndexes` and `filterBehavior` are set for `dashboardFilters`.
 * - Adds a new `dashboardFilters` visualization if there are shared filters but no `dashboardFilters` visualization.
 * - Updates rows to include the new `dashboardFilters` visualization.
 * - Removes deprecated `filterBehavior` from the configuration.
 *
 * @param {object} config - The dashboard configuration object to migrate.
 * @returns {object} The migrated dashboard configuration object.
 */
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
      viz.visualizationType = 'dashboardFilters'
      if (!viz.sharedFilterIndexes) {
        viz.sharedFilterIndexes = config.dashboard.sharedFilters.map((_sf, i) => i)
        viz.filterBehavior = config.filterBehavior || 'Filter Change'
      }
    }

    // Premature convertion to 4.24.7 made us add this fix
    if (viz.type === 'dashboardFilters' && !viz.sharedFilterIndexes) {
      viz.sharedFilterIndexes = config.dashboard.sharedFilters.map((_sf, i) => i)
      viz.filterBehavior = config.filterBehavior || 'Filter Change'
    }
    newVisualizations[vizKey] = viz
  })

  if (
    config.dashboard.sharedFilters.length &&
    !Object.values(newVisualizations).find((v: BaseVisualizationConfig) => v.type === 'dashboardFilters')
  ) {
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
    config.dashboard.sharedFilters = config.dashboard.sharedFilters.map(sf => {
      if (sf.usedBy) {
        // Fixes usedBy Rows
        sf.usedBy = sf.usedBy.map(key => {
          if (!(parseInt(key) > -1)) return key
          return String(parseInt(key) + 1)
        })
      }
      return sf
    })
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

  const newConfig = cloneConfig(config)

  mapUpdates(newConfig)
  dashboardFiltersMigrate(newConfig)
  updateLogarithmicConfig(newConfig)
  newConfig.version = versionNeedsUpdate(config.version, ver) ? ver : config.version
  return newConfig
}
export default update_4_24_7
