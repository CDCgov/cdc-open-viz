import { useEffect, useState, useMemo, useRef } from 'react'
import { timeParse } from 'd3-time-format'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import MediaControls from '@cdc/core/components/MediaControls'
import Loading from '@cdc/core/components/Loading'
import DownloadButton from '../DownloadButton'
import { customSort } from './helpers/customSort'
import { applyCustomOrder } from './helpers/applyCustomOrder'
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
import { getMapDataTableColumnKeys } from './helpers/getMapDataTableColumnKeys'
import { addOptionalFullGeoNameColumn } from './helpers/addOptionalFullGeoNameColumn'
import { getVisibleCsvColumns } from './helpers/getVisibleCsvColumns'

export type DataTableProps = {
  colorScale?: Function
  columns?: Record<string, Column>
  config: TableConfig
  dataConfig?: Object
  displayGeoName?: (row: string) => string
  expandDataTable: boolean
  formatLegendLocation?: (row: string, runtimeLookup: string) => string
  groupBy?: string
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
  applyLegendToRow?: (
    rowObj: any,
    config: any,
    runtimeLegend: any,
    legendMemo: any,
    legendSpecialClassLastMemo: any
  ) => string[]
  getPatternForRow?: (rowObj: any, config: any) => any
  viewport: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
  vizTitle?: string
  // determines if columns should be wrapped in the table
  wrapColumns?: boolean
  interactionLabel?: string
  showDownloadImgButton?: boolean
  showDownloadPdfButton?: boolean
  includeContextInDownload?: boolean
  hasSubtextAbove?: boolean
  // Map-specific props (optional)
  legendMemo?: React.MutableRefObject<Map<any, any>>
  legendSpecialClassLastMemo?: React.MutableRefObject<Map<any, any>>
  runtimeLegend?: any
}

const DataTable = (props: DataTableProps) => {
  const {
    columns,
    config,
    dataConfig,
    displayGeoName,
    expandDataTable,
    formatLegendLocation,
    rawData,
    runtimeData: parentRuntimeData,
    tabbingId,
    tableTitle,
    viewport,
    vizTitle,
    wrapColumns,
    interactionLabel = '',
    showDownloadImgButton,
    showDownloadPdfButton,
    includeContextInDownload = false,
    hasSubtextAbove = false,
    imageRef
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

  // Initialize sort state from config.table.defaultSort
  const defaultSort = config.table?.defaultSort
  const [sortBy, setSortBy] = useState<any>(() => {
    if (defaultSort?.column) {
      return {
        column: defaultSort.column,
        asc: defaultSort.sortDirection === 'asc' ? true : defaultSort.sortDirection === 'custom' ? null : false,
        colIndex: null
      }
    }
    return { column: '', asc: false, colIndex: null }
  })

  // Re-sync sort state when defaultSort changes in the editor
  useEffect(() => {
    if (defaultSort?.column) {
      setSortBy({
        column: defaultSort.column,
        asc: defaultSort.sortDirection === 'asc' ? true : defaultSort.sortDirection === 'custom' ? null : false,
        colIndex: null
      })
    } else {
      setSortBy({ column: '', asc: false, colIndex: null })
    }
  }, [defaultSort?.column, defaultSort?.sortDirection, defaultSort?.customOrder])

  const [accessibilityLabel, setAccessibilityLabel] = useState('')

  // Create default refs for map-specific props when not provided
  const defaultLegendMemo = useRef(new Map())
  const defaultLegendSpecialClassLastMemo = useRef(new Map())
  const defaultRuntimeLegend = null

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
    default:
      if (!runtimeData) return <Loading />
      break
  }

  const rawRows = Object.keys(runtimeData).filter(column => column != 'columns')

  // Determine if custom order sort is active (user hasn't overridden by clicking a column header)
  const isCustomOrderActive =
    sortBy.asc === null &&
    defaultSort?.sortDirection === 'custom' &&
    defaultSort?.customOrder?.length > 0 &&
    sortBy.column === defaultSort.column

  const rows =
    isVertical && sortBy.column
      ? rawRows.sort((a, b) => {
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
          // Use custom order when active
          if (isCustomOrderActive && dataA !== undefined && dataB !== undefined) {
            return applyCustomOrder(dataA, dataB, defaultSort.customOrder)
          }
          return dataA || dataB ? customSort(dataA, dataB, sortBy, config) : 0
        })
      : rawRows

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

    classes.push(viewport)

    return classes.join(' ')
  }

  if (config.visualizationType !== 'Box Plot') {
    const getDownloadData = () => {
      const sharedFilterColumns = config.table?.sharedFilterColumns || []
      const vizFilterColumns = (config.filters || []).map(filter => filter.columnName)
      const filterColumns = [...sharedFilterColumns, ...vizFilterColumns]
      const getVisibleColumns = () => {
        if (!config.columns) return []

        if (config.type === 'map') {
          return getMapDataTableColumnKeys(config.columns).map(columnKey => config.columns[columnKey].name)
        }

        return Object.values(config.columns)
          .filter(col => col.dataTable !== false)
          .map(col => col.name)
      }

      const visibleColumns = getVisibleColumns()
      const visibleData =
        config.type === 'map'
          ? getMapRowData(
              rows,
              columns,
              config,
              formatLegendLocation,
              runtimeData as Record<string, Object>,
              displayGeoName,
              filterColumns
            )
          : runtimeData.map(d => {
              const columnsToInclude =
                config.type === 'table'
                  ? getVisibleCsvColumns({ config, runtimeData, isVertical, filterColumns })
                  : _.uniq([...filterColumns, ...getDataSeriesColumns(config, isVertical, runtimeData)])
              return _.pick(d, columnsToInclude)
            })
      const csvData = config.table?.downloadVisibleDataOnly ? visibleData : rawData

      // Build a map from column name to column config for O(1) lookup
      const columnConfigMap = config.columns
        ? Object.values(config.columns).reduce((acc, col) => {
            acc[col.name] = col
            return acc
          }, {} as Record<string, any>)
        : {}

      // Map column names to labels
      const csvDataUpdated = csvData.map(row => {
        const newRow: Record<string, any> = {}
        Object.keys(row).forEach(key => {
          // Use the column config map for O(1) lookup
          const columnConfig = columnConfigMap[key]
          // Use label if it exists, otherwise use the original key
          const columnLabel = columnConfig?.label || key
          newRow[columnLabel] = row[key]
        })
        return newRow
      })

      return addOptionalFullGeoNameColumn({
        config,
        csvData,
        csvDataUpdated,
        formatLegendLocation
      })
    }

    const getMediaControlsClasses = (belowTable, hasDownloadLink) => {
      const classes = ['download-links']
      if (!belowTable) {
        if (hasDownloadLink) {
          classes.push('mb-2')
        }
      } else {
        if (hasDownloadLink) {
          classes.push('mt-2')
        }
      }
      return classes
    }

    const childrenMatrix =
      config.type === 'map'
        ? mapCellMatrix({
            ...props,
            rows,
            wrapColumns,
            runtimeData,
            viewport,
            legendMemo: props.legendMemo || defaultLegendMemo,
            legendSpecialClassLastMemo: props.legendSpecialClassLastMemo || defaultLegendSpecialClassLastMemo,
            runtimeLegend: props.runtimeLegend || defaultRuntimeLegend
          })
        : chartCellMatrix({ rows, ...props, runtimeData, isVertical, sortBy, hasRowType, viewport })

    const useBottomExpandCollapse = config.table.showBottomCollapse && expanded && Array.isArray(childrenMatrix)

    // If every value in a column is a number, record the column index so the header and cells can be right-aligned
    const rightAlignedCols = childrenMatrix.length
      ? Object.fromEntries(
          Object.keys(childrenMatrix[0])
            .filter(
              i => childrenMatrix.filter(row => isRightAlignedTableValue(row[i])).length === childrenMatrix.length
            )
            .map(x => [x, true])
        )
      : {}

    const showCollapseButton = config.table.collapsible !== false && useBottomExpandCollapse
    const TableMediaControls = ({ belowTable }) => {
      const hasDownloadLink = config.table.download
      const hasImageDownloads = showDownloadImgButton || showDownloadPdfButton

      return (
        <MediaControls.Section classes={getMediaControlsClasses(belowTable, hasDownloadLink || hasImageDownloads)}>
          {showDownloadImgButton && (
            <MediaControls.DownloadLink
              type='image'
              title='Download Chart as Image'
              state={config}
              elementToCapture={imageRef}
              interactionLabel={interactionLabel}
              includeContextInDownload={includeContextInDownload}
            />
          )}
          {showDownloadPdfButton && (
            <MediaControls.DownloadLink
              type='pdf'
              title='Download Chart as PDF'
              state={config}
              elementToCapture={imageRef}
              interactionLabel={interactionLabel}
              includeContextInDownload={includeContextInDownload}
            />
          )}
          <MediaControls.Link config={config} dashboardDataConfig={dataConfig} interactionLabel={interactionLabel} />
          {hasDownloadLink && (
            <DownloadButton
              getRawData={getDownloadData}
              fileName={`${vizTitle || 'data-table'}.csv`}
              interactionLabel={interactionLabel}
              config={config}
            />
          )}
        </MediaControls.Section>
      )
    }

    return (
      <ErrorBoundary component='DataTable'>
        {!config.table.showDownloadLinkBelow && (
          <div className='w-100 d-flex justify-content-end'>
            <TableMediaControls />
          </div>
        )}
        <section id={tabbingId.replace('#', '')} className={getClassNames()} aria-label={accessibilityLabel}>
          <SkipTo skipId={skipId} skipMessage='Skip Data Table' />
          {config.table.collapsible !== false && (
            <ExpandCollapse
              expanded={expanded}
              setExpanded={setExpanded}
              tableTitle={tableTitle}
              config={config}
              interactionLabel={interactionLabel}
            />
          )}
          <div className='table-container' style={limitHeight}>
            <Table
              preliminaryData={config.preliminaryData}
              viewport={viewport}
              wrapColumns={wrapColumns}
              noData={hasNoData}
              childrenMatrix={childrenMatrix}
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
                    interactionLabel={interactionLabel}
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
                    interactionLabel={interactionLabel}
                  />
                )
              }
              tableOptions={{
                className: `table table-striped table-width-unset ${
                  expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'
                }${isVertical ? '' : ' horizontal'}`,
                'aria-live': 'assertive',
                'aria-rowcount': config?.data?.length ? config.data.length : -1,
                hidden: !expanded,
                cellMinWidth: 100
              }}
              rightAlignedCols={rightAlignedCols}
            />

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
        <div className={`w-100 d-flex ${showCollapseButton ? 'justify-content-between' : 'justify-content-end'}`}>
          {showCollapseButton && (
            <button
              className='border-0 bg-transparent text-decoration-underline mt-2'
              style={{ color: 'var(--colors-link-blue)', fontSize: '0.772rem', textUnderlineOffset: '6px' }}
              onClick={() => setExpanded(false)}
            >
              - Collapse table
            </button>
          )}
          {config.table.showDownloadLinkBelow && <TableMediaControls belowTable={true} />}
        </div>
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
          <ExpandCollapse
            expanded={expanded}
            setExpanded={setExpanded}
            tableTitle={tableTitle}
            interactionLabel={interactionLabel}
          />
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
