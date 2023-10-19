import { useEffect, useState, useMemo } from 'react'

import Icon from '@cdc/core/components/ui/Icon'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import MediaControls from '@cdc/core/components/MediaControls'
import Loading from '@cdc/core/components/Loading'
import DownloadButton from '../DownloadButton'
import MapRows from './components/MapRows'
import ChartRows from './components/ChartRows'
import { customSort } from './helpers/customSort'
import ChartHeader from './components/ChartHeader'
import BoxplotRows from './components/BoxplotRows'
import BoxplotHeader from './components/BoxplotHeader'
import MapHeader from './components/MapHeader'

type Axis = {
  dataKey: string
  type: string
  dateParseFormat: string
  dateDisplayFormat: string
}

type TableConfig = {
  type: string
  table: {
    showVertical: boolean
    indexLabel: string
    limitHeight: boolean
    height: string | number
    caption: string
    download: boolean
  }
  xAxis: Axis
  yAxis: Axis
  boxplot: {
    tableData: Object[]
    labels: {
      mean: string
      maximum: string
      minimum: string
      iqr: string
      median: string
      q1: string
      q3: string
      outliers: string
      values: string
      total: string
      lowerBounds: string
      upperBounds: string
    }
    plots: []
    categories: string[]
  }
  visualizationType: string
  general: {
    geoType: string
    type: string
    showDownloadButton: boolean
  }
  columns: {
    geo: {
      name: string
    }
  }
  legend: {
    specialClasses: { key: string; label: string; value: string }[]
  }
  series: { dataKey: string; name: string; axis: string }[]
  regions: { label: string; from: string; to: string }[]
  runtimeSeriesLabels: Object
  dataFormat: Object
  runtime: {
    originalXAxis: {
      dataKey: string
    }
    seriesKeys: []
  }
  data: Object[]
}

export type DataTableProps = {
  config: TableConfig
  dataConfig: Object
  tableTitle: string
  indexTitle?: string
  vizTitle?: string
  rawData: Object[]
  runtimeData: Object[]
  headerColor?: string
  colorScale?: Function
  expandDataTable: boolean
  columns?: {
    navigate: {
      name: string
    }
  }
  displayDataAsText?: Function
  applyLegendToRow?: Function
  displayGeoName?: Function
  navigationHandler?: Function
  viewport: string
  formatLegendLocation?: Function
  tabbingId: string
  isDebug: boolean
}

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */
const DataTable = (props: DataTableProps) => {
  const { config, dataConfig, tableTitle, vizTitle, rawData, runtimeData, headerColor, expandDataTable, columns, viewport, formatLegendLocation, tabbingId, isDebug } = props

  /* eslint-disable no-console */
  if (isDebug) {
    console.log('core/DataTable: props=', props)
    console.log('core/DataTable: runtimeData=', runtimeData)
    console.log('core/DataTable: rawData=', rawData)
    console.log('core/DataTable: config=', config)
  }
  /* eslint-enable no-console */

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
        let sortVal = 0
        if (config.type === 'map' && config.columns) {
          sortVal = customSort(runtimeData[a][config.columns[sortBy.column].name], runtimeData[b][config.columns[sortBy.column].name], sortBy, config)
        }
        if (config.type === 'chart' || config.type === 'dashboard') {
          sortVal = customSort(runtimeData[a][sortBy.column], runtimeData[b][sortBy.column], sortBy, config)
        }
        return sortVal
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
          <a id='skip-nav' className='cdcdataviz-sr-only-focusable' href={`#${skipId}`}>
            Skip Navigation or Skip to Content
          </a>
          <div
            className={expanded ? 'data-table-heading' : 'collapsed data-table-heading'}
            onClick={() => {
              setExpanded(!expanded)
            }}
            tabIndex={0}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                setExpanded(!expanded)
              }
            }}
          >
            <Icon display={expanded ? 'minus' : 'plus'} base />
            {tableTitle}
          </div>
          <div className='table-container' style={limitHeight}>
            <table role='table' aria-live='assertive' className={`${expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'}${isVertical ? '' : ' horizontal'}`} hidden={!expanded} aria-rowcount={config?.data?.length ? config.data.length : -1}>
              <caption className='cdcdataviz-sr-only'>{caption}</caption>
              <thead style={{ position: 'sticky', top: 0, zIndex: 999 }}>{config.type === 'map' ? <MapHeader columns={columns} {...props} sortBy={sortBy} setSortBy={setSortBy} /> : <ChartHeader data={runtimeData} {...props} isVertical={isVertical} sortBy={sortBy} setSortBy={setSortBy} />}</thead>
              <tbody>{config.type === 'map' ? <MapRows rows={rows} {...props} /> : <ChartRows rows={rows} {...props} isVertical={isVertical} sortBy={sortBy} />}</tbody>
            </table>

            {/* REGION Data Table */}
            {config.regions && config.regions.length > 0 && config.visualizationType !== 'Box Plot' ? (
              <table className='region-table data-table'>
                <caption className='visually-hidden'>Table of the highlighted regions in the visualization</caption>
                <thead>
                  <tr>
                    <th>Region Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {config.regions.map((region, index) => {
                    if (config.visualizationType === 'Box Plot') return false
                    if (!Object.keys(region).includes('from') || !Object.keys(region).includes('to')) return null
                    // region.from and region.to had formatDate(parseDate()) on it
                    // but they returned undefined - removed both for now (TT)
                    return (
                      <tr key={`row-${region.label}--${index}`}>
                        <td>{region.label}</td>
                        <td>{region.from}</td>
                        <td>{region.to}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            ) : (
              ''
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
          <a id='skip-nav' className='cdcdataviz-sr-only-focusable' href={`#${skipId}`}>
            Skip Navigation or Skip to Content
          </a>
          <div
            className={expanded ? 'data-table-heading' : 'collapsed data-table-heading'}
            onClick={() => {
              setExpanded(!expanded)
            }}
            tabIndex={0}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                setExpanded(!expanded)
              }
            }}
          >
            <Icon display={expanded ? 'minus' : 'plus'} base />
            {tableTitle}
          </div>
          <div className='table-container' style={limitHeight}>
            <table role='table' aria-live='assertive' className={expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'} hidden={!expanded} aria-rowcount={11}>
              <caption className='cdcdataviz-sr-only'>{caption}</caption>
              <thead style={{ position: 'sticky', top: 0, zIndex: 999 }}>{<BoxplotHeader categories={config.boxplot.categories} />}</thead>
              <tbody>{<BoxplotRows rows={tableData} config={config} />}</tbody>
            </table>
          </div>
        </section>
      </ErrorBoundary>
    )
  }
}

export default DataTable
