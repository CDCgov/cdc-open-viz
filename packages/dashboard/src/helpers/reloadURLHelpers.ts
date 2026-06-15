import { gatherQueryParams } from '@cdc/core/helpers/gatherQueryParams'
import { SharedFilter } from '../types/SharedFilter'
import { capitalizeSplitAndJoin } from '@cdc/core/helpers/cove/string'
import { AnyVisualization, Visualization } from '@cdc/core/types/Visualization'
import _ from 'lodash'
import { DashboardConfig } from '../types/DashboardConfig'
import { ConfigRow } from '../types/ConfigRow'
import { getDashboardConditionDatasetKeys } from './dashboardConditions'
import { getDashboardConditionTargets } from './dashboardFilterTargets'
import { getQueryParam } from '@cdc/core/helpers/queryStringUtils'

export const isEmptyInitialFileNameFilter = (filter: SharedFilter) => {
  const hasQuery = filter.setByQueryParameter ? getQueryParam(filter.setByQueryParameter) !== undefined : false
  const isResetLabelActive = filter.resetLabel && filter.active === filter.resetLabel

  return (
    filter.type === 'urlfilter' &&
    filter.filterBy === 'File Name' &&
    filter.allowEmptyInitialState &&
    !hasQuery &&
    (!filter.active || isResetLabelActive)
  )
}

export const isEmptyInitialFileNameTarget = (filters: SharedFilter[], datasetKey: string) => {
  const targetFilters = filters.filter(
    filter =>
      filter.type === 'urlfilter' &&
      filter.filterBy === 'File Name' &&
      filter.fileNameTargets?.some(target => target.datasetKey === datasetKey)
  )

  return targetFilters.length > 0 && targetFilters.every(isEmptyInitialFileNameFilter)
}

export const isUpdateNeeded = (
  filters: SharedFilter[],
  currentQueryParams: Record<string, string>,
  newQueryParams: Record<string, string>
): boolean => {
  let needsUpdate = false
  filters.find(filter => {
    if (
      filter.type === 'urlfilter' &&
      !Array.isArray(filter.active) &&
      filter.filterBy === 'File Name' &&
      !isEmptyInitialFileNameFilter(filter)
    ) {
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
type GetDatasetKeysOptions = {
  includeDashboardConditionDatasetKeys?: boolean
}
export const getDatasetKeys = (
  { visualizations, datasets, rows }: GetDatasetKeysParams,
  { includeDashboardConditionDatasetKeys = true }: GetDatasetKeysOptions = {}
): string[] => {
  const vizDataKeys = Object.values(visualizations).map(viz => viz.dataKey)
  const rowDataKeys = rows.map(row => row.dataKey)
  const dashboardConditionDataKeys = includeDashboardConditionDatasetKeys ? getDashboardConditionDatasetKeys(rows) : []
  const footnoteDataKeys = Object.values(visualizations)
    .map(viz => viz.footnotes?.dataKey)
    .filter(Boolean)
  // ensure to only load datasets for the specific dashboard tab.
  const datasetsUsedByDashboard = _.uniq([
    ...vizDataKeys,
    ...rowDataKeys,
    ...dashboardConditionDataKeys,
    ...footnoteDataKeys
  ])
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
    const originalFileName = dataUrl.pathname.substring(dataUrl.pathname.lastIndexOf('/') + 1)
    const fileExtension = originalFileName.match(/\.([^/.]+)$/)?.[1]
    const pathWithoutFilename = dataUrl.pathname.substring(0, dataUrl.pathname.lastIndexOf('/'))
    const fileNameWithExtension = getFileNameWithExtension(newFileName, fileExtension)
    dataUrlFinal = `${dataUrl.origin}${pathWithoutFilename}/${fileNameWithExtension}${gatherQueryParams(
      baseURL,
      _params
    )}`
  }
  return dataUrlFinal
}

const getFileNameWithExtension = (fileName: string, fileExtension?: string) => {
  if (!fileExtension) return fileName
  if (fileName.toLowerCase().endsWith(`.${fileExtension.toLowerCase()}`)) return fileName
  return `${fileName}.${fileExtension}`
}

export const getNewFileName = (
  newFileName: string,
  filter: SharedFilter,
  datasetKey: string,
  resolvedFileNameValue?: string
) => {
  if (isEmptyInitialFileNameFilter(filter)) return newFileName

  const replacements = {
    'Remove Spaces': '',
    'Keep Spaces': ' ',
    'Replace With Underscore': '_'
  }
  const whitespaceReplacement = replacements[filter.whitespaceReplacement ?? 'Keep Spaces']
  const formatQueryValue = (value: string) =>
    filter.forceFileNameCapitalization
      ? capitalizeSplitAndJoin.call(value, ' ', whitespaceReplacement)
      : value.split(' ').join(whitespaceReplacement)
  const formatTemplate = (value: string) =>
    filter.forceFileNameCapitalization ? capitalizeSplitAndJoin.call(value, ' ', whitespaceReplacement) : value

  // row filter field: build the file name from the selected option's `valueSelector` value
  // (resolved upstream) instead of `active`.
  const hasRowFilterField = !!filter.apiFilter?.filterSelector
  if (hasRowFilterField && resolvedFileNameValue == null) return newFileName
  const activeFileNameValue =
    filter.filterStyle === 'nested-dropdown' && filter.subGrouping?.active ? filter.subGrouping.active : filter.active
  const fileNameValue = hasRowFilterField ? String(resolvedFileNameValue) : String(activeFileNameValue)
  let fileName = newFileName
  const target = filter.fileNameTargets?.find(target => target.datasetKey === datasetKey)
  if (!target) return fileName

  if (target.fileName === '${value}') return formatQueryValue(fileNameValue)

  // if a file name is found, ie, state_${value}, use that, ie. state_activeFilter.json
  fileName = formatTemplate(String(target.fileName))

  if (fileName?.includes('${value}')) {
    fileName = fileName.split('${value}').join(formatQueryValue(fileNameValue))
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
  }, visualizations)
}

export const filterUsedByDataUrl = (
  filter: SharedFilter,
  datasetKey: string,
  visualizations: Record<string, AnyVisualization>,
  rows: ConfigRow[]
) => {
  if (!filter.usedBy || !filter.usedBy.length) return true
  const dashboardConditionTargets = getDashboardConditionTargets(rows)

  return filter.usedBy.some(vizOrRowKey => {
    const viz = visualizations[vizOrRowKey] || rows[vizOrRowKey]
    const usedByViz = viz?.dataKey === datasetKey
    // datasetKey might be a key to a dynamic footnotes URL
    const usedByVizFootnote = viz?.footnotes?.dataKey === datasetKey
    const usedByDashboardCondition = dashboardConditionTargets.some(
      conditionTarget =>
        conditionTarget.dashboardCondition.datasetKey === datasetKey &&
        `${conditionTarget.filterTarget}` === `${vizOrRowKey}`
    )
    return usedByViz || usedByVizFootnote || usedByDashboardCondition
  })
}
