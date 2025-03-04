import Footnotes from '@cdc/core/types/Footnotes'
import { AnyVisualization, Visualization } from '@cdc/core/types/Visualization'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
import { removeDashboardFilter } from '@cdc/dashboard/src/helpers/removeDashboardFilter'
import _ from 'lodash'

const cleanDashboardFootnotes = (config: DashboardConfig) => {
  // strip any blank footnote visualizations
  const footnoteIds: string[] = []

  if (config.rows) {
    config.rows.forEach(row => {
      if (row.footnotesId) {
        const { dataKey, staticFootnotes } = (config.visualizations[row.footnotesId] || {}) as Footnotes
        if (!dataKey && !staticFootnotes?.length) {
          delete config.visualizations[row.footnotesId]
          delete row.footnotesId
        } else {
          footnoteIds.push(row.footnotesId)
        }
      }
    })
  }

  if (config.visualizations) {
    Object.keys(config.visualizations).forEach(vizKey => {
      const viz: Visualization = config.visualizations[vizKey]
      if (viz.type === 'footnotes' && !footnoteIds.includes(vizKey)) {
        // if footnote isn't being used by any rows, remove it
        delete config.visualizations[vizKey]
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
      ])
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
      const usedFilters = _.uniq(Object.values(visualizations).reduce((acc, viz) => {
        if(viz.type === 'dashboardFilters') {
          acc = acc.concat(viz.sharedFilterIndexes)
        }
        return acc
      }, []))
      for(let index = 0; index < sharedFilters.length; index++) {
        const filter = sharedFilters[index]
        if(!usedFilters.includes(index)) {

          const [newSharedFilters, newVisualizations] = removeDashboardFilter(index, config.dashboard.sharedFilters, config.visualizations)
          config.dashboard.sharedFilters = newSharedFilters
          config.visualizations = newVisualizations
          recursiveRemoveFilters(newSharedFilters, newVisualizations)
          break;
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
      const vizFilters = config.visualizations[vizKey].filters || []
      vizFilters.forEach((_filter, index) => {
        delete config.visualizations[vizKey].filters[index].active
        delete config.visualizations[vizKey].filters[index].values
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

export const formatConfigBeforeSave = configToStrip => {
  const strippedConfig = _.cloneDeep(configToStrip)
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
