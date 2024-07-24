import Footnotes from '@cdc/core/types/Footnotes'
import { Visualization } from '@cdc/core/types/Visualization'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
import _ from 'lodash'

const cleanDashboardFootnotes = (config: DashboardConfig) => {
  // strip any blank footnote visualizations
  const footnoteIds: string[] = []

  if (config.rows) {
    config.rows.forEach(row => {
      if (row.footnotesId) {
        const { dataKey, staticFootnotes } = config.visualizations[row.footnotesId] as Footnotes
        if (!dataKey && !staticFootnotes?.length) {
          delete config.visualizations[row.footnotesId]
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
      config.visualizations[vizKey] = _.omit(config.visualizations[vizKey], ['runtime', 'formattedData', 'data'])
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

const cleanSharedFilters = (config: DashboardConfig) => {
  if (config.dashboard?.sharedFilters) {
    config.dashboard.sharedFilters.forEach((filter, index) => {
      delete config.dashboard.sharedFilters[index].active
      if (filter.type === 'urlfilter') {
        delete config.dashboard.sharedFilters[index].values
      }
    })
  }
}

export const formatConfigBeforeSave = configToStrip => {
  let strippedConfig = _.cloneDeep(configToStrip)
  if (strippedConfig.type === 'dashboard') {
    if (strippedConfig.multiDashboards) {
      strippedConfig.multiDashboards.forEach((multiDashboard, i) => {
        cleanDashboardData(strippedConfig.multiDashboards[i])
        cleanSharedFilters(strippedConfig.multiDashboards[i])
        cleanDashboardFootnotes(strippedConfig.multiDashboards[i])
      })
    }
    cleanDashboardData(strippedConfig)
    cleanSharedFilters(strippedConfig)
    cleanDashboardFootnotes(strippedConfig)
  } else {
    delete strippedConfig.runtime
    delete strippedConfig.formattedData
    if (strippedConfig.dataUrl) {
      delete strippedConfig.data
    }
  }

  return strippedConfig
}
