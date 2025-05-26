import { useEffect, useState, useMemo } from 'react'
import { timeParse } from 'd3-time-format'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import MediaControls from '@cdc/core/components/MediaControls'
import Loading from '@cdc/core/components/Loading'
import DownloadButton from '../DownloadButton'
import { customSort } from './helpers/customSort'
import ChartHeader from './components/ChartHeader'
import BoxplotHeader from './components/BoxplotHeader'
import MapHeader from './components/MapHeader'
import SkipTo from '../elements/SkipTo'
import ExpandCollapse from './components/ExpandCollapse'
import mapCellMatrix, { getMapRowData } from './helpers/mapCellMatrix'
import Table from '../Table'
import chartCellMatrix from './helpers/chartCellMatrix'
import regionCellMatrix from './helpers/regionCellMatrix'
import boxplotCellMatrix from './helpers/boxplotCellMatrix'
import removeNullColumns from './helpers/removeNullColumns'
import { TableConfig } from './types/TableConfig'
import { Column } from '../../types/Column'
import { pivotData } from '../../helpers/pivotData'
import { isLegendWrapViewport } from '@cdc/core/helpers/viewports'
import isRightAlignedTableValue from '@cdc/core/helpers/isRightAlignedTableValue'
import './data-table.css'
import _ from 'lodash'
import { getDataSeriesColumns } from './helpers/getDataSeriesColumns'

export type DataTableProps = {
  colorScale?: Function
  columns?: Record<string, Column>
  config: TableConfig
  dataConfig?: Object
  defaultSortBy?: string
  displayGeoName?: (row: string) => string
  expandDataTable: boolean
  formatLegendLocation?: (row: string, runtimeLookup: string) => string
  groupBy?: string
  headerColor?: string
  imageRef?: string
  indexTitle?: string
  isDebug?: boolean
  isEditor?: boolean
  navigationHandler?: Function
  outerContainerRef?: Function
  rawData: Object[]
  runtimeData: Object[] & Record<string, Object>
  setFilteredCountryCode?: string // used for Maps only
  tabbingId: string
  tableTitle: string
  viewport: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
  vizTitle?: string
  // determines if columns should be wrapped in the table
  wrapColumns?: boolean
}

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */
const DataTable = (props: DataTableProps) => {
  const {
    columns,
    config,
    dataConfig,
    defaultSortBy,
    displayGeoName,
    expandDataTable,
    formatLegendLocation,
    headerColor,
    rawData,
    runtimeData: parentRuntimeData,
    tabbingId,
    tableTitle,
    viewport,
    vizTitle,
    wrapColumns
  } = props
  const runtimeData = useMemo(() => {
    const data = removeNullColumns(parentRuntimeData)
    const { columnName, valueColumns } = config.table.pivot || {}
    if (columnName && valueColumns) {
      const excludeColumns = Object.values(config.columns || {})
        .filter(column => column.dataTable === false)
        .map(col => col.name)
      return pivotData(data, columnName, valueColumns, excludeColumns)
    }
    return data
  }, [parentRuntimeData, config.table.pivot?.columnName, config.table.pivot?.valueColumns])

  const [expanded, setExpanded] = useState(expandDataTable)
  const [sortBy, setSortBy] = useState<any>({
    column: defaultSortBy || '',
    asc: false,
    colIndex: null
  })

  // Pagination state for US county-level maps
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage] = useState(50) // You can adjust this value as needed

  // Reset to first page when rows change
  useEffect(() => {
    setCurrentPage(1)
  }, [rawData?.length])

  const [accessibilityLabel, setAccessibilityLabel] = useState('')

  const isVertical = !(config.type === 'chart' && !config.table?.showVertical)

  const rand = Math.random().toString(16).substr(2, 8)
  const skipId = `btn__${rand}`

  const mapLookup = {
    'us-county': 'United States County Map',
    'single-state': 'State Map',
    us: 'United States Map',
    world: 'World Map'
  }

  // Change accessibility label depending on expanded status
  useEffect(() => {
    const expandedLabel = 'Accessible data table.'
    const collapsedLabel =
      'Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.'

    if (expanded === true && accessibilityLabel !== expandedLabel) {
      setAccessibilityLabel(expandedLabel)
    }

    if (expanded === false && accessibilityLabel !== collapsedLabel) {
      setAccessibilityLabel(collapsedLabel)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded])

  switch (config.visualizationType) {
    case 'Box Plot':
      if (!config.boxplot) return <Loading />
      break
    case 'Line' || 'Bar' || 'Combo' || 'Pie' || 'Deviation Bar' || 'Paired Bar' || 'Sankey' || 'Table':
      if (!runtimeData) return <Loading />
      break
    default:
      if (!runtimeData) return <Loading />
      break
  }

  const rawRows = Object.keys(runtimeData).filter(column => column != 'columns')

  // Memoize sorted rows for performance
  const memoizedRows = useMemo(() => {
    if (isVertical && sortBy.column) {
      return [...rawRows].sort((a, b) => {
        let dataA
        let dataB
        if (config.type === 'map' && config.columns) {
          const sortByColName = config.columns[sortBy.column].name
          dataA = runtimeData[a][sortByColName]
          dataB = runtimeData[b][sortByColName]
        }
        if (['chart', 'dashboard', 'table'].includes(config.type)) {
          dataA = runtimeData[a][sortBy.column]
          dataB = runtimeData[b][sortBy.column]
        }
        if (!dataA && !dataB && config.type === 'chart' && config.xAxis && config.xAxis.type === 'date-time') {
          dataA = timeParse(config.runtime.xAxis.dateParseFormat)(runtimeData[a][config.xAxis.dataKey])
          dataB = timeParse(config.runtime.xAxis.dateParseFormat)(runtimeData[b][config.xAxis.dataKey])
        }
        return dataA && dataB ? customSort(dataA, dataB, sortBy, config) : 0
      })
    }
    return rawRows
  }, [isVertical, sortBy, rawRows, config, runtimeData])

  // Pagination logic for county-level maps
  const isCountyMap = config.type === 'map' && config.general?.geoType === 'us-county'
  const totalRows = memoizedRows.length
  const totalPages = isCountyMap ? Math.ceil(totalRows / rowsPerPage) : 1
  const memoizedPaginatedRows = useMemo(() => {
    if (isCountyMap) {
      return memoizedRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    }
    return memoizedRows
  }, [isCountyMap, memoizedRows, currentPage, rowsPerPage])

  const limitHeight = {
    maxHeight: config.table.limitHeight && `${config.table.height}px`,
    OverflowY: 'scroll'
  }

  const hasRowType = !!Object.keys(rawData?.[0] || {}).find((v: string) => v.match(/row[_-]?type/i))

  const caption = useMemo(() => {
    if (config.type === 'map') {
      return config.table.caption
        ? config.table.caption
        : `Data table showing data for the ${mapLookup[config.general?.geoType]} figure.`
    } else {
      return config.table.caption ? config.table.caption : `Data table showing data for the ${config.type} figure.`
    }
  }, [config.table.caption])

  // Determines if a relative region is being shown to the user.
  // If a relative region is found we don't want to display the data table.
  // Takes backwards compatibility into consideration, ie !region.toType || !region.fromType
  const noRelativeRegions = config?.regions?.every(region => {
    const toTypeFixed = region.toType === 'Fixed'
    const fromTypeFixed = region.fromType === 'Fixed'
    const toIsNotSet = !region.toType
    const fromIsNotSet = !region.fromType
    const BothFixed = toTypeFixed && fromTypeFixed
    const NeitherFixed = toIsNotSet && fromIsNotSet
    const ToFixedFromNotSet = toTypeFixed && fromIsNotSet
    const FromFixedToNotSet = fromTypeFixed && toIsNotSet

    return BothFixed || NeitherFixed || ToFixedFromNotSet || FromFixedToNotSet
  })

  // prettier-ignore
  const tableData = useMemo(() => (
   config.data?.[0]?.tableData
    ? config.data?.[0]?.tableData
    : config.visualizationType === 'Sankey'
      ? config.data?.[0]?.tableData
      : config.visualizationType === 'Pie'
      ? [config.yAxis.dataKey]
      : config.visualizationType === 'Box Plot'
        ? config?.boxplot?.plots?.[0] ? Object.entries(config.boxplot.plots[0]) : []
        : config.runtime?.seriesKeys),
    [config.runtime?.seriesKeys]) // eslint-disable-line

  const hasNoData = runtimeData.length === 0
  const getClassNames = (): string => {
    const classes = ['data-table-container']

    const hasDownloadLinkAbove = config.table.download && !config.table.showDownloadLinkBelow
    const isStandaloneTable = config.type === 'table'

    if (!hasDownloadLinkAbove && !isStandaloneTable) {
      classes.push('mt-4')
    }

    const isBrushActive = config?.brush?.active && config.legend?.position !== 'bottom'
    if (isBrushActive) {
      classes.push('brush-active')
    }

    classes.push(viewport)

    return classes.join(' ')
  }

  if (config.visualizationType !== 'Box Plot') {
    const getDownloadData = () => {
      const dataSeriesColumns = getDataSeriesColumns(config, isVertical, runtimeData)
      const sharedFilterColumns = config.table?.sharedFilterColumns || []
      const vizFilterColumns = (config.filters || []).map(filter => filter.columnName)
      const filterColumns = [...sharedFilterColumns, ...vizFilterColumns]
      const visibleData =
        config.type === 'map'
          ? getMapRowData(
              rawRows,
              columns,
              config,
              formatLegendLocation,
              runtimeData as Record<string, Object>,
              displayGeoName,
              filterColumns
            )
          : runtimeData.map(d => {
              return _.pick(d, [...filterColumns, ...dataSeriesColumns])
            })
      const csvData = config.table?.downloadVisibleDataOnly ? visibleData : rawData

      // only use fullGeoName on County maps and no other
      if (config.general?.geoType === 'us-county' || config.table.showFullGeoNameInCSV) {
        // Add column for full Geo name along with State
        return csvData.map(row => {
          return {
            FullGeoName: formatLegendLocation(row[config.columns.geo.name]),
            ...row
          }
        })
      } else {
        return csvData
      }
    }

    const getMediaControlsClasses = (belowTable, hasDownloadLink) => {
      const classes = ['download-links']
      if (!belowTable) {
        if (hasDownloadLink) {
          classes.push('mt-4', 'mb-2')
        }
        const isLegendOnBottom = config?.legend?.position === 'bottom' || isLegendWrapViewport(viewport)
        if (config.brush?.active && !isLegendOnBottom) classes.push('brush-active')
        if (config.brush?.active && config.legend.hide) classes.push('brush-active')
      } else {
        if (hasDownloadLink) {
          classes.push('mt-2')
        }
      }
      return classes
    }

    // Memoize childrenMatrix for performance
    const memoizedChildrenMatrix = useMemo(() => {
      return config.type === 'map'
        ? mapCellMatrix({
            ...props,
            rows: isCountyMap ? memoizedPaginatedRows : memoizedRows,
            wrapColumns,
            runtimeData,
            viewport
          })
        : chartCellMatrix({ rows: memoizedRows, ...props, runtimeData, isVertical, sortBy, hasRowType, viewport })
    }, [
      config.type,
      isCountyMap,
      memoizedPaginatedRows,
      memoizedRows,
      props,
      wrapColumns,
      runtimeData,
      viewport,
      isVertical,
      sortBy,
      hasRowType
    ])

    // Memoize rightAlignedCols for performance
    const rightAlignedCols = useMemo(() => {
      if (!memoizedChildrenMatrix.length) return {}
      return Object.fromEntries(
        Object.keys(memoizedChildrenMatrix[0])
          .filter(
            i =>
              memoizedChildrenMatrix.filter(row => isRightAlignedTableValue(row[i])).length ===
              memoizedChildrenMatrix.length
          )
          .map(x => [x, true])
      )
    }, [memoizedChildrenMatrix])

    const TableMediaControls = ({ belowTable }) => {
      const hasDownloadLink = config.table.download
      return (
        <MediaControls.Section classes={getMediaControlsClasses(belowTable, hasDownloadLink)}>
          <MediaControls.Link config={config} dashboardDataConfig={dataConfig} />
          {hasDownloadLink && (
            <DownloadButton
              rawData={getDownloadData()}
              fileName={`${vizTitle || 'data-table'}.csv`}
              headerColor={headerColor}
            />
          )}
        </MediaControls.Section>
      )
    }

    return (
      <ErrorBoundary component='DataTable'>
        {!config.table.showDownloadLinkBelow && <TableMediaControls />}
        <section id={tabbingId.replace('#', '')} className={getClassNames()} aria-label={accessibilityLabel}>
          <SkipTo skipId={skipId} skipMessage='Skip Data Table' />
          {config.table.collapsible !== false && (
            <ExpandCollapse expanded={expanded} setExpanded={setExpanded} tableTitle={tableTitle} viewport={viewport} />
          )}
          <div className='table-container' style={limitHeight}>
            <Table
              preliminaryData={config.preliminaryData}
              viewport={viewport}
              wrapColumns={wrapColumns}
              noData={hasNoData}
              childrenMatrix={memoizedChildrenMatrix}
              tableName={config.type}
              caption={caption}
              stickyHeader
              hasRowType={hasRowType}
              headContent={
                config.type === 'map' ? (
                  <MapHeader
                    columns={columns}
                    {...props}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    rightAlignedCols={rightAlignedCols}
                  />
                ) : (
                  <ChartHeader
                    data={runtimeData}
                    {...props}
                    hasRowType={hasRowType}
                    isVertical={isVertical}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    viewport={viewport}
                    rightAlignedCols={rightAlignedCols}
                  />
                )
              }
              tableOptions={{
                className: `table table-striped ${expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'}${
                  isVertical ? '' : ' horizontal'
                }`,
                'aria-live': 'assertive',
                'aria-rowcount': config?.data?.length ? config.data.length : -1,
                hidden: !expanded,
                cellMinWidth: 100
              }}
              rightAlignedCols={rightAlignedCols}
            />

            {/* Pagination controls for US county-level map tables */}
            {isCountyMap && totalPages > 1 && (
              <div
                className='data-table-pagination'
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem 0' }}
              >
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  aria-label='Previous page'
                  style={{ marginRight: '1rem' }}
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  aria-label='Next page'
                  style={{ marginLeft: '1rem' }}
                >
                  Next
                </button>
              </div>
            )}

            {/* REGION Data Table */}
            {noRelativeRegions &&
              config.regions &&
              config.regions.length > 0 &&
              config.visualizationType !== 'Box Plot' && (
                <Table
                  viewport={viewport}
                  wrapColumns={wrapColumns}
                  childrenMatrix={regionCellMatrix({ config })}
                  noData={hasNoData}
                  tableName={config.visualizationType}
                  caption='Table of the highlighted regions in the visualization'
                  headContent={
                    <tr>
                      <th>Region Name</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                    </tr>
                  }
                  tableOptions={{ className: 'table table-striped region-table data-table' }}
                />
              )}
          </div>
        </section>
        {config.table.showDownloadLinkBelow && <TableMediaControls belowTable={true} />}
        <div id={skipId} className='cdcdataviz-sr-only'>
          Skipped data table.
        </div>
      </ErrorBoundary>
    )
  } else {
    // Render Data Table for Box Plots
    return (
      <ErrorBoundary component='DataTable'>
        <section id={tabbingId.replace('#', '')} className={getClassNames()} aria-label={accessibilityLabel}>
          <SkipTo skipId={skipId} skipMessage='Skip Data Table' />
          <ExpandCollapse expanded={expanded} setExpanded={setExpanded} tableTitle={tableTitle} />
          <div className='table-container' style={limitHeight}>
            <Table
              viewport={viewport}
              wrapColumns={wrapColumns}
              childrenMatrix={boxplotCellMatrix({ rows: tableData, config })}
              noData={hasNoData}
              tableName={config.visualizationType}
              caption={caption}
              stickyHeader
              headContent={<BoxplotHeader categories={config.boxplot.categories} />}
              tableOptions={{
                className: `table table-striped ${expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'}`,
                'aria-live': 'assertive',
                'aria-rowcount': 11,
                hidden: !expanded
              }}
            />
          </div>
        </section>
        <div id={skipId} className='cdcdataviz-sr-only'>
          Skipped data table.
        </div>
      </ErrorBoundary>
    )
  }
}

export default DataTable
