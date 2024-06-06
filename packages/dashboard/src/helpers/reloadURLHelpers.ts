import { gatherQueryParams } from '@cdc/core/helpers/gatherQueryParams'
import { SharedFilter } from '../types/SharedFilter'
import { capitalizeSplitAndJoin } from '@cdc/core/helpers/cove/string'
import { Visualization } from '@cdc/core/types/Visualization'
import _ from 'lodash'

export const isUpdateNeeded = (filters: SharedFilter[], currentQueryParams: Record<string, string>, newQueryParams: Record<string, string>): boolean => {
  let needsUpdate = false
  filters.find(filter => {
    if (filter.type === 'urlfilter' && !Array.isArray(filter.active) && filter.filterBy === 'File Name') {
      needsUpdate = true
      return true
    }
  })
  Object.keys(newQueryParams).forEach(updatedParam => {
    if (decodeURIComponent(newQueryParams[updatedParam]) !== currentQueryParams[updatedParam]) {
      needsUpdate = true
    }
  })
  return needsUpdate
}

export const getDataURL = (updatedQSParams: Record<string, string>, dataUrl: URL, newFileName: string) => {
  const _params = Object.keys(updatedQSParams).map(key => ({ key, value: updatedQSParams[key] }))
  const baseURL = dataUrl.origin + dataUrl.pathname
  let dataUrlFinal = `${baseURL}${gatherQueryParams(baseURL, _params)}`

  if (newFileName !== '') {
    const fileExtension = dataUrl.pathname.split('.').pop()
    const pathWithoutFilename = dataUrl.pathname.substring(0, dataUrl.pathname.lastIndexOf('/'))
    dataUrlFinal = `${dataUrl.origin}${pathWithoutFilename}/${newFileName}.${fileExtension}${gatherQueryParams(baseURL, _params)}`
  }
  return dataUrlFinal
}

export const getNewFileName = (newFileName: string, filter: SharedFilter, datasetKey: string) => {
  const replacements = {
    'Remove Spaces': '',
    'Keep Spaces': ' ',
    'Replace With Underscore': '_'
  }
  let fileName = newFileName
  if (filter.datasetKey === datasetKey) {
    if (filter.fileName) {
      // if a file name is found, ie, state_${query}, use that, ie. state_activeFilter.json
      fileName = capitalizeSplitAndJoin.call(String(filter.fileName), ' ', replacements[filter.whitespaceReplacement ?? 'Keep Spaces'])
    } else {
      // if no file name is entered use the default active filter. ie. /activeFilter.json
      fileName = filter.active as string
    }
  }

  if (fileName?.includes('${query}')) {
    fileName = fileName.replace('${query}', capitalizeSplitAndJoin.call(String(filter.active), ' ', replacements[filter.whitespaceReplacement ?? 'Keep Spaces']))
  }

  return fileName
}

export const getVisualizationsWithFormattedData = (visualizations: Record<string, Visualization>, newData: Object) => {
  return Object.keys(visualizations).reduce((acc, vizKey) => {
    const dataKey = visualizations[vizKey].dataKey
    if (newData[dataKey]) {
      acc[vizKey].formattedData = newData[dataKey]
    }
    return acc
  }, _.cloneDeep(visualizations))
}
