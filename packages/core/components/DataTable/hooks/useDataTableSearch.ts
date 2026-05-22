import { useMemo, useState } from 'react'
import _ from 'lodash'
import { getDataSeriesColumns } from '../helpers/getDataSeriesColumns'
import { getVisibleCsvColumns } from '../helpers/getVisibleCsvColumns'
import { getChartCellValue } from '../helpers/getChartCellValue'
import { getSeriesName } from '../helpers/getSeriesName'
import { getMapRowData } from '../helpers/mapCellMatrix'
import { TableConfig } from '../types/TableConfig'
import { Column } from '../../../types/Column'
import { normalizeSearchText, prepareSearchQuery } from '@cdc/core/helpers/cove/search'

type UseDataTableSearchParams = {
  runtimeData: Object[] | Record<string, Object>
  config: TableConfig
  columns?: Record<string, Column>
  isVertical: boolean
  formatLegendLocation?: (row: string, runtimeLookup: string) => string
  displayGeoName?: (row: string, displayOverride?: string) => string
}

type DataTableRuntimeData = Object[] & Record<string, Object>

type DataTableSearchResults = {
  runtimeData: Object[] | Record<string, Object>
  horizontalDataSeriesColumns?: string[]
}

export const useDataTableSearch = ({
  runtimeData,
  config,
  columns,
  isVertical,
  formatLegendLocation,
  displayGeoName
}: UseDataTableSearchParams) => {
  const [query, setQuery] = useState('')
  const normalizedQuery = normalizeSearchText(query)
  const search = useMemo(() => prepareSearchQuery(query), [query])
  const searchEnabled = Boolean(config.table?.search)
  const searchResults = useMemo<DataTableSearchResults>(() => {
    if (!runtimeData) return { runtimeData: [], horizontalDataSeriesColumns: undefined }
    if (!searchEnabled || !search.hasQuery) return { runtimeData, horizontalDataSeriesColumns: undefined }
    const rightAxisItems = config.series?.filter(item => item?.axis === 'Right') || []
    const rightAxisItemsMap = new Map(rightAxisItems.map(item => [item.dataKey, item]))
    if (Array.isArray(runtimeData) && !isVertical) {
      const dataSeriesColumns = getDataSeriesColumns(config, isVertical, runtimeData)
      const rowSearchColumns = _.uniq([config.xAxis?.dataKey, ...dataSeriesColumns].filter(Boolean))
      const matchingRows = runtimeData
        .map((row, index) => ({ row, index: String(index) }))
        .filter(({ index }) => {
          const rowValues = rowSearchColumns.map(column =>
            getChartCellValue(index, column, config, runtimeData, rightAxisItemsMap)
          )
          return search.matches(rowValues.join(' '))
        })
      const matchingSeriesColumns = dataSeriesColumns.filter(column => {
        const seriesName = getSeriesName(column, config)
        const seriesValues = runtimeData.map((_row, index) =>
          getChartCellValue(String(index), column, config, runtimeData, rightAxisItemsMap)
        )
        return search.matches([seriesName, ...seriesValues].join(' '))
      })

      const hasRowMatches = matchingRows.length > 0
      const hasSeriesColumnMatches = matchingSeriesColumns.length > 0

      if (!hasRowMatches && !hasSeriesColumnMatches) {
        return { runtimeData: [], horizontalDataSeriesColumns: [] }
      }

      return {
        runtimeData: hasRowMatches ? matchingRows.map(({ row }) => row) : runtimeData,
        horizontalDataSeriesColumns: hasSeriesColumnMatches ? matchingSeriesColumns : dataSeriesColumns
      }
    }

    const visibleColumns = Array.isArray(runtimeData)
      ? getVisibleCsvColumns({ config, runtimeData, isVertical })
      : []
    const searchableChartColumns =
      Array.isArray(runtimeData) && config.table?.groupBy
        ? _.uniq([config.table.groupBy, ...visibleColumns])
        : visibleColumns

    const getDisplaySearchValues = (rowKey: string, row: unknown) => {
      if (config.type === 'map' && typeof formatLegendLocation === 'function' && typeof displayGeoName === 'function') {
        const mapRuntimeData = runtimeData as Record<string, Object>
        const getFormattedLegendLocation = (row: string) => {
          const runtimeRow = mapRuntimeData[row] as Record<string, unknown> | undefined
          const runtimeLookup = config.columns?.geo?.name ? runtimeRow?.[config.columns.geo.name] : undefined

          return formatLegendLocation(row, runtimeLookup as string)
        }

        const mapRows = getMapRowData(
          [rowKey],
          columns || {},
          config,
          getFormattedLegendLocation,
          mapRuntimeData,
          displayGeoName,
          []
        )
        return Object.values(mapRows[0] || {})
      }

      if (Array.isArray(runtimeData)) {
        return searchableChartColumns.map(column =>
          getChartCellValue(rowKey, column, config, runtimeData, rightAxisItemsMap)
        )
      }

      if (!row || typeof row !== 'object') return [row]
      const rowRecord = row as Record<string, unknown>
      const visibleObjectColumns = Object.values(config.columns || {}).reduce<string[]>((acc, column) => {
        if (column.dataTable !== false && column.name) {
          acc.push(column.name)
        }
        return acc
      }, [])

      return visibleObjectColumns.length
        ? visibleObjectColumns.map(column => rowRecord[column])
        : Object.values(rowRecord)
    }

    const rowMatchesQuery = (rowKey: string, row: unknown) => {
      const searchableValues = getDisplaySearchValues(rowKey, row)
      return search.matches(searchableValues.join(' '))
    }

    if (Array.isArray(runtimeData)) {
      return {
        runtimeData: runtimeData.filter((row, index) => rowMatchesQuery(String(index), row)),
        horizontalDataSeriesColumns: undefined
      }
    }

    return {
      runtimeData: Object.entries(runtimeData).reduce(
        (acc, [key, row]) => {
          if (key === 'columns' || rowMatchesQuery(key, row)) {
            acc[key] = row
          }
          return acc
        },
        {} as typeof runtimeData
      ),
      horizontalDataSeriesColumns: undefined
    }
  }, [
    runtimeData,
    search,
    searchEnabled,
    config,
    columns,
    formatLegendLocation,
    displayGeoName,
    isVertical
  ])

  const searchedRuntimeData = searchResults.runtimeData as DataTableRuntimeData
  const horizontalDataSeriesColumns = searchResults.horizontalDataSeriesColumns

  return {
    query,
    setQuery,
    normalizedQuery,
    searchEnabled,
    searchedRuntimeData,
    horizontalDataSeriesColumns
  }
}
