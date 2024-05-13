import Footnotes from '@cdc/core/types/Footnotes'
import { Visualization } from '@cdc/core/types/Visualization'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'
import _ from 'lodash'

export const formatConfigBeforeSave = configToStrip => {
  let strippedConfig = { ...configToStrip }

  if (strippedConfig.type === 'dashboard') {
    if (strippedConfig.datasets) {
      Object.keys(strippedConfig.datasets).forEach(datasetKey => {
        delete strippedConfig.datasets[datasetKey].formattedData
        if (strippedConfig.datasets[datasetKey].dataUrl) {
          delete strippedConfig.datasets[datasetKey].data
        }
      })
    }
    if (strippedConfig.visualizations) {
      Object.keys(strippedConfig.visualizations).forEach(vizKey => {
        strippedConfig.visualizations[vizKey] = _.omit(strippedConfig.visualizations[vizKey], ['runtime', 'formattedData', 'data'])
      })
    }
    if (strippedConfig.rows) {
      strippedConfig.rows.forEach(row => {
        if (row.dataKey) {
          row = _.omit(row, ['data', 'formattedData'])
        }
      })
    }

    // strip any blank footnote visualizations
    const footnoteIds: string[] = []

    ;(strippedConfig as DashboardConfig).rows.forEach(row => {
      if (row.footnotesId) {
        const { dataKey, staticFootnotes } = strippedConfig.visualizations[row.footnotesId] as Footnotes
        if (!dataKey && !staticFootnotes?.length) {
          delete strippedConfig.visualizations[row.footnotesId]
        } else {
          footnoteIds.push(row.footnotesId)
        }
      }
    })

    Object.keys(strippedConfig.visualizations).forEach(vizKey => {
      const viz: Visualization = strippedConfig.visualizations[vizKey]
      if (viz.type === 'footnotes' && !footnoteIds.includes(vizKey)) {
        // if footnote isn't being used by any rows, remove it
        delete strippedConfig.visualizations[vizKey]
      }
    })
  } else {
    delete strippedConfig.runtime
    delete strippedConfig.formattedData
    if (strippedConfig.dataUrl) {
      delete strippedConfig.data
    }
  }

  return strippedConfig
}
