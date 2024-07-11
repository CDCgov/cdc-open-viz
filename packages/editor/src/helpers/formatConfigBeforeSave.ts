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
    config.rows.forEach(row => {
      if (row.dataKey) {
        row = _.omit(row, ['data', 'formattedData'])
      }
    })
  }
}

export const formatConfigBeforeSave = configToStrip => {
  let strippedConfig = { ...configToStrip }
  if (strippedConfig.type === 'dashboard') {
    cleanDashboardData(strippedConfig)

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
