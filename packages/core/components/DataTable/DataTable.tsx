import { useEffect, useState, useMemo } from 'react'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import MediaControls from '@cdc/core/components/MediaControls'
import Loading from '@cdc/core/components/Loading'
import DownloadButton from '../DownloadButton'
import { customSort } from './helpers/customSort'
import ChartHeader from './components/ChartHeader'
import BoxplotHeader from './components/BoxplotHeader'
import MapHeader from './components/MapHeader'
import SkipNav from './components/SkipNav'
import ExpandCollapse from './components/ExpandCollapse'
import mapCellMatrix from './helpers/mapCellMatrix'
import Table from '../Table'
import chartCellMatrix from './helpers/chartCellMatrix'
import regionCellMatrix from './helpers/regionCellMatrix'
import boxplotCellMatrix from './helpers/boxplotCellMatrix'
import { TableConfig } from './types/TableConfig'

export type DataTableProps = {
  applyLegendToRow?: Function
  colorScale?: Function
  columns?: { navigate: { name: string } }
  config: TableConfig
  dataConfig?: Object
  displayDataAsText?: Function
  displayGeoName?: Function
  expandDataTable: boolean
  formatLegendLocation?: Function
  groupBy?: string
  headerColor?: string
  indexTitle?: string
  navigationHandler?: Function
  rawData: Object[]
  runtimeData: Object[] | Record<string, Object> // UNSAFE
  setFilteredCountryCode?: Function // used for Maps only
  tabbingId: string
  tableTitle: string
  viewport: string
  vizTitle?: string
}

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */
const DataTable = (props: DataTableProps) => {
  const { config, dataConfig, tableTitle, vizTitle, rawData, runtimeData, headerColor, expandDataTable, columns, viewport, formatLegendLocation, tabbingId } = props

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
    case 'Line' || 'Bar' || 'Combo' || 'Pie' || 'Deviation Bar' || 'Paired Bar':
      if (!runtimeData) return <Loading />
      break
    default:
      if (!runtimeData) return <Loading />
      break
  }

  const rawRows = Object.keys(runtimeData)
  const rows = isVertical
    ? rawRows.sort((a, b) => {
        let dataA
        let dataB
        if (config.type === 'map' && config.columns) {
          const sortByColName = config.columns[sortBy.column].name
          dataA = runtimeData[a][sortByColName]
          dataB = runtimeData[b][sortByColName]
        }
        if (config.type === 'chart' || config.type === 'dashboard') {
          dataA = runtimeData[a][sortBy.column]
          dataB = runtimeData[b][sortBy.column]
        }
        return dataA && dataB ? customSort(dataA, dataB, sortBy, config) : 0
      })
    : rawRows

  const limitHeight = {
    maxHeight: config.table.limitHeight && `${config.table.height}px`,
    OverflowY: 'scroll'
  }

  const caption = useMemo(() => {
    if (config.type === 'map') {
      return config.table.caption ? config.table.caption : `Data table showing data for the ${mapLookup[config.general.geoType]} figure.`
    } else {
      return config.table.caption ? config.table.caption : `Data table showing data for the ${config.type} figure.`
    }
  }, [config.table.caption])

  // prettier-ignore
  const tableData = useMemo(() => (
    config.visualizationType === 'Pie'
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
          {(config.table.download || config.general?.showDownloadButton) && <DownloadButton rawData={getDownloadData()} fileName={`${vizTitle || 'data-table'}.csv`} headerColor={headerColor} skipId={skipId} />}
        </MediaControls.Section>
        <section id={tabbingId.replace('#', '')} className={`data-table-container ${viewport}`} aria-label={accessibilityLabel}>
          <SkipNav skipId={skipId} />
          <ExpandCollapse expanded={expanded} setExpanded={setExpanded} tableTitle={tableTitle} />
          <div className='table-container' style={limitHeight}>
            <Table
              childrenMatrix={config.type === 'map' ? mapCellMatrix({ rows, ...props }) : chartCellMatrix({ rows, ...props, isVertical, sortBy })}
              tableName={config.type}
              caption={caption}
              stickyHeader
              headContent={config.type === 'map' ? <MapHeader columns={columns} {...props} sortBy={sortBy} setSortBy={setSortBy} /> : <ChartHeader data={runtimeData} {...props} isVertical={isVertical} sortBy={sortBy} setSortBy={setSortBy} />}
              tableOptions={{ className: `${expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'}${isVertical ? '' : ' horizontal'}`, 'aria-live': 'assertive', 'aria-rowcount': config?.data?.length ? config.data.length : -1, hidden: !expanded }}
            />

            {/* REGION Data Table */}
            {config.regions && config.regions.length > 0 && config.visualizationType !== 'Box Plot' && (
              <Table
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
              />
            )}
          </div>
        </section>
      </ErrorBoundary>
    )
  } else {
    // Render Data Table for Box Plots
    return (
      <ErrorBoundary component='DataTable'>
        <section id={tabbingId.replace('#', '')} className={`data-table-container ${viewport}`} aria-label={accessibilityLabel}>
          <SkipNav skipId={skipId} />
          <ExpandCollapse expanded={expanded} setExpanded={setExpanded} tableTitle={tableTitle} />
          <div className='table-container' style={limitHeight}>
            <Table
              childrenMatrix={boxplotCellMatrix({ rows: tableData, config })}
              tableName={config.visualizationType}
              caption={caption}
              stickyHeader
              headContent={<BoxplotHeader categories={config.boxplot.categories} />}
              tableOptions={{ className: `${expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'}`, 'aria-live': 'assertive', 'aria-rowcount': 11, hidden: !expanded }}
            />
          </div>
        </section>
      </ErrorBoundary>
    )
  }
}

export default DataTable
