import Footnotes from '@cdc/core/types/Footnotes'
import { AnyVisualization, Visualization } from '@cdc/core/types/Visualization'
import { DashboardConfig } from '../types/DashboardConfig'
import { removeDashboardFilter } from './removeDashboardFilter'
import _ from 'lodash'
import cloneConfig from '@cdc/core/helpers/cloneConfig'

const cleanDashboardFootnotes = (config: DashboardConfig) => {
  if (config.visualizations) {
    Object.keys(config.visualizations).forEach(vizKey => {
      const viz = config.visualizations[vizKey] as any
      if (viz.footnotes) {
        delete viz.footnotes.data
        delete viz.footnotes.formattedData
      }
    })
  }
}

const cleanDashboardData = (config: DashboardConfig) => {
  if (config.datasets) {
    Object.keys(config.datasets).forEach(datasetKey => {
      delete config.datasets[datasetKey].formattedData
      if (config.datasets[datasetKey].dataUrl) {
        delete config.datasets[datasetKey].data
      }
    })
  }
  if (config.visualizations) {
    Object.keys(config.visualizations).forEach(vizKey => {
      config.visualizations[vizKey] = _.omit(config.visualizations[vizKey], [
        'runtime',
        'formattedData',
        'data',
        'editing',
        'originalFormattedData'
      ]) as any
    })
  }
  if (config.rows) {
    config.rows.forEach((row, i) => {
      if (row.dataKey) {
        config.rows[i] = _.omit(row, ['data', 'formattedData'])
      }
    })
  }
}

export const cleanSharedFilters = (config: DashboardConfig) => {
  if (config.dashboard?.sharedFilters) {
    const recursiveRemoveFilters = (sharedFilters, visualizations: Record<string, AnyVisualization>) => {
      const usedFilters = _.uniq(
        Object.values(visualizations).reduce((acc, viz) => {
          if (viz.type === 'dashboardFilters') {
            acc = acc.concat(viz.sharedFilterIndexes)
          }
          return acc
        }, [])
      )
      for (let index = 0; index < sharedFilters.length; index++) {
        const filter = sharedFilters[index]
        if (!usedFilters.includes(index)) {
          const [newSharedFilters, newVisualizations] = removeDashboardFilter(
            index,
            config.dashboard.sharedFilters,
            config.visualizations
          )
          config.dashboard.sharedFilters = newSharedFilters
          config.visualizations = newVisualizations
          recursiveRemoveFilters(newSharedFilters, newVisualizations)
          break
        } else {
          delete config.dashboard.sharedFilters[index].active
          if (filter.subGrouping) delete config.dashboard.sharedFilters[index].subGrouping.active
          if (filter.type === 'urlfilter') {
            delete config.dashboard.sharedFilters[index].values
          }
        }
      }
    }

    recursiveRemoveFilters(config.dashboard.sharedFilters, config.visualizations)
  }
}

const cleanVisualizationFilters = (config: DashboardConfig) => {
  if (config.visualizations) {
    Object.keys(config.visualizations).forEach(vizKey => {
      const viz = config.visualizations[vizKey] as any
      const vizFilters = viz.filters || []
      vizFilters.forEach((_filter, index) => {
        delete viz.filters[index].active
        delete viz.filters[index].values
      })
    })
  }
}

const removeRuntimeDataURLs = (config: DashboardConfig) => {
  if (config.datasets) {
    Object.keys(config.datasets).forEach(datasetKey => {
      delete config.datasets[datasetKey].runtimeDataUrl
    })
  }
}

export const stripConfig = configToStrip => {
  const strippedConfig = cloneConfig(configToStrip)
  if (strippedConfig.type === 'dashboard') {
    if (strippedConfig.multiDashboards) {
      strippedConfig.multiDashboards.forEach((multiDashboard, i) => {
        cleanDashboardData(strippedConfig.multiDashboards[i])
        cleanSharedFilters(strippedConfig.multiDashboards[i])
        cleanDashboardFootnotes(strippedConfig.multiDashboards[i])
        cleanVisualizationFilters(strippedConfig.multiDashboards[i])
      })
      delete strippedConfig.dashboard
      delete strippedConfig.rows
      delete strippedConfig.visualizations
      delete strippedConfig.label
    }
    delete strippedConfig.activeDashboard
    cleanDashboardData(strippedConfig)
    cleanSharedFilters(strippedConfig)
    cleanDashboardFootnotes(strippedConfig)
    cleanVisualizationFilters(strippedConfig)
    removeRuntimeDataURLs(strippedConfig)
  } else {
    delete strippedConfig.runtime
    delete strippedConfig.formattedData
    if (strippedConfig.dataUrl) {
      delete strippedConfig.data
    }
  }

  return strippedConfig
}
