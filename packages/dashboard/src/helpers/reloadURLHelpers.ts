import { gatherQueryParams } from '@cdc/core/helpers/gatherQueryParams'
import { SharedFilter } from '../types/SharedFilter'
import { capitalizeSplitAndJoin } from '@cdc/core/helpers/cove/string'
import { AnyVisualization, Visualization } from '@cdc/core/types/Visualization'
import _ from 'lodash'
import { DashboardConfig } from '../types/DashboardConfig'
import { ConfigRow } from '../types/ConfigRow'

export const isUpdateNeeded = (
  filters: SharedFilter[],
  currentQueryParams: Record<string, string>,
  newQueryParams: Record<string, string>
): boolean => {
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

type GetDatasetKeysParams = Pick<DashboardConfig, 'visualizations' | 'datasets' | 'rows'>
export const getDatasetKeys = ({ visualizations, datasets, rows }: GetDatasetKeysParams): string[] => {
  const vizDataKeys = Object.values(visualizations).map(viz => viz.dataKey)
  const rowDataKeys = rows.map(row => row.dataKey)
  // ensure to only load datasets for the specific dashboard tab.
  const datasetsUsedByDashboard = _.uniq([...vizDataKeys, ...rowDataKeys])
  return Object.keys(datasets).filter(datasetKey => datasetsUsedByDashboard.includes(datasetKey))
}

export const getDataURL = (updatedQSParams: Record<string, string | string[]>, dataUrl: URL, newFileName: string) => {
  const _params = Object.keys(updatedQSParams).flatMap(key => {
    const value = updatedQSParams[key]
    if (value === undefined) return []
    if (typeof value === 'string' && (value as String).match(/undefined/)) return []
    if (Array.isArray(value)) return value.map(v => ({ key, value: v }))
    return { key, value }
  })
  const baseURL = dataUrl.origin + dataUrl.pathname
  let dataUrlFinal = `${baseURL}${gatherQueryParams(baseURL, _params)}`

  if (newFileName !== '') {
    const fileExtension = dataUrl.pathname.split('.').pop()
    const pathWithoutFilename = dataUrl.pathname.substring(0, dataUrl.pathname.lastIndexOf('/'))
    dataUrlFinal = `${dataUrl.origin}${pathWithoutFilename}/${newFileName}.${fileExtension}${gatherQueryParams(
      baseURL,
      _params
    )}`
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
      fileName = capitalizeSplitAndJoin.call(
        String(filter.fileName),
        ' ',
        replacements[filter.whitespaceReplacement ?? 'Keep Spaces']
      )
    } else {
      // if no file name is entered use the default active filter. ie. /activeFilter.json
      fileName = filter.active as string
    }
  }

  if (fileName?.includes('${query}')) {
    fileName = fileName.replace(
      '${query}',
      capitalizeSplitAndJoin.call(
        String(filter.active),
        ' ',
        replacements[filter.whitespaceReplacement ?? 'Keep Spaces']
      )
    )
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

export const filterUsedByDataUrl = (
  filter: SharedFilter,
  datasetKey: string,
  visualizations: Record<string, AnyVisualization>,
  rows: ConfigRow[]
) => {
  if (!filter.usedBy || !filter.usedBy.length) return true
  const vizUsingFilters = filter.usedBy?.map(vizOrRowKey => visualizations[vizOrRowKey] || rows[vizOrRowKey])
  return vizUsingFilters?.some(viz => viz?.dataKey === datasetKey)
}
