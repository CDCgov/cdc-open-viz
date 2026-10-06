import cloneConfig from '../cloneConfig'
import { type DashboardFilters } from '../../types/DashboardFilters'
import { MultiDashboardConfig } from '@cdc/dashboard/src/types/MultiDashboard'
import { AnyVisualization } from '../../types/Visualization'

/**
 * Migrates the dashboard configuration to the new format.
 *
 * This function performs the following transformations:
 * - Removes `autoLoad` and `defaultValue` from `apiFilter` in shared filters.
 * - Converts legacy hidden-filter settings into dashboard-filter fields.
 * - Renames visualization type `filter-dropdowns` to `dashboardFilters`.
 * - Adds a new `dashboardFilters` visualization if there are shared filters but no `dashboardFilters` visualization.
 * - Updates rows to include the new `dashboardFilters` visualization.
 *
 * The post-release completion repair runs separately in `4.24.8-1`.
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
    if (viz.type === 'filter-dropdowns') viz.type = 'dashboardFilters'
    newVisualizations[vizKey] = viz
  })

  if (
    config.dashboard.sharedFilters.length &&
    !Object.values(newVisualizations).find((v: AnyVisualization) => v.type === 'dashboardFilters')
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
    config.dashboard.sharedFilters = config.dashboard.sharedFilters.map(sharedFilter => {
      if (sharedFilter.usedBy) {
        sharedFilter.usedBy = sharedFilter.usedBy.map(target => {
          if (!(parseInt(target) > -1)) return target
          return String(parseInt(target) + 1)
        })
      }
      return sharedFilter
    })
  }
  // if there's no dashboardFilters visualization but there are sharedFilters create a visualization and update rows.

  config.visualizations = newVisualizations
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
  newConfig.version = ver
  return newConfig
}
export default update_4_24_7
