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
import mapCellMatrix from './helpers/mapCellMatrix'
import Table from '../Table'
import chartCellMatrix from './helpers/chartCellMatrix'
import regionCellMatrix from './helpers/regionCellMatrix'
import boxplotCellMatrix from './helpers/boxplotCellMatrix'
import removeNullColumns from './helpers/removeNullColumns'
import { TableConfig } from './types/TableConfig'
import { Column } from '../../types/Column'

export type DataTableProps = {
  applyLegendToRow?: Function
  colorScale?: Function
  columns?: Record<string, Column>
  config: TableConfig
  dataConfig?: Object
  displayDataAsText?: Function
  displayGeoName?: Function
  expandDataTable: boolean
  formatLegendLocation?: Function
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
  setFilteredCountryCode?: Function // used for Maps only
  showDownloadButton?: boolean
  tabbingId: string
  tableTitle: string
  viewport: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
  vizTitle?: string
  // determines if columns should be wrapped in the table
  wrapColumns?: boolean
}

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */
const DataTable = (props: DataTableProps) => {
  const { config, dataConfig, tableTitle, vizTitle, rawData, runtimeData, headerColor, expandDataTable, columns, viewport, formatLegendLocation, tabbingId, wrapColumns } = props
  const [expanded, setExpanded] = useState(expandDataTable)

  const [sortBy, setSortBy] = useState<any>({ column: config.type === 'map' ? 'geo' : 'date', asc: false, colIndex: null })

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
    const collapsedLabel = 'Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.'

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

  const _runtimeData = removeNullColumns(rawData)

  const rawRows = Object.keys(_runtimeData).filter(column => column != 'columns')
  const rows = isVertical
    ? rawRows.sort((a, b) => {
        let dataA
        let dataB
        if (config.type === 'map' && config.columns) {
          const sortByColName = config.columns[sortBy.column].name
          dataA = _runtimeData[a][sortByColName]
          dataB = _runtimeData[b][sortByColName]
        }
        if (config.type === 'chart' || config.type === 'dashboard') {
          dataA = _runtimeData[a][sortBy.column]
          dataB = _runtimeData[b][sortBy.column]
        }
        if (!dataA && !dataB && config.type === 'chart' && config.xAxis && config.xAxis.type === 'date-time') {
          dataA = timeParse(config.runtime.xAxis.dateParseFormat)(_runtimeData[a][config.xAxis.dataKey])
          dataB = timeParse(config.runtime.xAxis.dateParseFormat)(_runtimeData[b][config.xAxis.dataKey])
        }
        return dataA && dataB ? customSort(dataA, dataB, sortBy, config) : 0
      })
    : rawRows

  const limitHeight = {
    maxHeight: config.table.limitHeight && `${config.table.height}px`,
    OverflowY: 'scroll'
  }

  const hasRowType = !!Object.keys(rawData?.[0] || {}).find((v: string) => v.match(/row[_-]?type/i))

  const caption = useMemo(() => {
    if (config.type === 'map') {
      return config.table.caption ? config.table.caption : `Data table showing data for the ${mapLookup[config.general.geoType]} figure.`
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
        ? Object.entries(config.boxplot.tableData[0])
        : config.runtime?.seriesKeys),
    [config.runtime?.seriesKeys]) // eslint-disable-line

  if (config.visualizationType !== 'Box Plot') {
    const getDownloadData = () => {
      // only use fullGeoName on County maps and no other
      if (config.general?.geoType === 'us-county') {
        // Add column for full Geo name along with State
        return rawData.map(row => ({ FullGeoName: formatLegendLocation(row[config.columns.geo.name]), ...row }))
      } else {
        return rawData
      }
    }

    return (
      <ErrorBoundary component='DataTable'>
        <MediaControls.Section classes={['download-links']}>
          <MediaControls.Link config={config} dashboardDataConfig={dataConfig} />
          {(config.table.download || config.general?.showDownloadButton) && <DownloadButton rawData={getDownloadData()} fileName={`${vizTitle || 'data-table'}.csv`} headerColor={headerColor} />}
        </MediaControls.Section>
        <section id={tabbingId.replace('#', '')} className={`data-table-container ${viewport}`} aria-label={accessibilityLabel}>
          <SkipTo skipId={skipId} skipMessage='Skip Data Table' />
          {config.table.collapsible !== false && <ExpandCollapse expanded={expanded} setExpanded={setExpanded} fontSize={config.fontSize} tableTitle={tableTitle} viewport={viewport} />}
          <div className='table-container' style={limitHeight}>
            <Table
              viewport={viewport}
              wrapColumns={wrapColumns}
              childrenMatrix={config.type === 'map' ? mapCellMatrix({ rows, wrapColumns, ...props, runtimeData: _runtimeData, viewport }) : chartCellMatrix({ rows, ...props, runtimeData: _runtimeData, isVertical, sortBy, hasRowType, viewport })}
              tableName={config.type}
              caption={caption}
              stickyHeader
              hasRowType={hasRowType}
              headContent={config.type === 'map' ? <MapHeader columns={columns} {...props} sortBy={sortBy} setSortBy={setSortBy} /> : <ChartHeader data={_runtimeData} {...props} hasRowType={hasRowType} isVertical={isVertical} sortBy={sortBy} setSortBy={setSortBy} />}
              tableOptions={{ className: `${expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'}${isVertical ? '' : ' horizontal'}`, 'aria-live': 'assertive', 'aria-rowcount': config?.data?.length ? config.data.length : -1, hidden: !expanded }}
              fontSize={config.fontSize}
            />

            {/* REGION Data Table */}
            {noRelativeRegions && config.regions && config.regions.length > 0 && config.visualizationType !== 'Box Plot' && (
              <Table
                viewport={viewport}
                wrapColumns={wrapColumns}
                childrenMatrix={regionCellMatrix({ config })}
                tableName={config.visualizationType}
                caption='Table of the highlighted regions in the visualization'
                headContent={
                  <tr>
                    <th>Region Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                  </tr>
                }
                tableOptions={{ className: 'region-table data-table' }}
                fontSize={config.fontSize}
              />
            )}
          </div>
        </section>
        <div id={skipId} className='cdcdataviz-sr-only'>
          Skipped data table.
        </div>
      </ErrorBoundary>
    )
  } else {
    // Render Data Table for Box Plots
    return (
      <ErrorBoundary component='DataTable'>
        <section id={tabbingId.replace('#', '')} className={`data-table-container ${viewport}`} aria-label={accessibilityLabel}>
          <SkipTo skipId={skipId} skipMessage='Skip Data Table' />
          <ExpandCollapse expanded={expanded} setExpanded={setExpanded} tableTitle={tableTitle} />
          <div className='table-container' style={limitHeight}>
            <Table
              viewport={viewport}
              wrapColumns={wrapColumns}
              childrenMatrix={boxplotCellMatrix({ rows: tableData, config })}
              tableName={config.visualizationType}
              caption={caption}
              stickyHeader
              headContent={<BoxplotHeader categories={config.boxplot.categories} />}
              tableOptions={{ className: `${expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'}`, 'aria-live': 'assertive', 'aria-rowcount': 11, hidden: !expanded }}
              fontSize={config.fontSize}
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
