import _ from 'lodash'
import cloneConfig from '@cdc/core/helpers/cloneConfig'
import { MultiDashboardConfig } from '../types/MultiDashboard'
import DataTransform from '@cdc/core/helpers/DataTransform'
import { getApplicableFilters } from './getFilteredData'
import { filterData } from './filterData'
import { AnyVisualization } from '@cdc/core/types/Visualization'

const transform = new DataTransform()

const getFootnotesVizConfig = (
  visualizationConfig: AnyVisualization,
  rowNumber: number,
  config: MultiDashboardConfig,
  visualizationKey: string
) => {
  if (!visualizationConfig?.footnotes) return visualizationConfig
  const data = _.cloneDeep(config.datasets[visualizationConfig.footnotes.dataKey]?.data)
  const dataColumns = data?.length ? Object.keys(data[0]) : []
  const filters = (getApplicableFilters(config.dashboard, rowNumber) || []).filter(filter =>
    dataColumns.includes(filter.columnName)
  )
  // check if shared filters has viz key
  const sharedFilters = config.dashboard.sharedFilters
  const matchingFilters = sharedFilters.filter(f => f.usedBy?.includes(visualizationKey))

  if (matchingFilters.length && visualizationConfig.footnotes.data) {
    visualizationConfig.footnotes.data = filterData(matchingFilters, data)
  } else {
    if (visualizationConfig.footnotes.data) {
      visualizationConfig.footnotes.data = data
    }
  }

  return visualizationConfig
}

export const getVizConfig = (
  visualizationKey: string,
  rowNumber: number,
  config: MultiDashboardConfig,
  data: Object,
  filteredData?: Object,
  filteredDataOverride?: Object[],
  multiVizColumn?: string
): AnyVisualization => {
  if (rowNumber === undefined) return {} as AnyVisualization
  const visualizationConfig = cloneConfig(config.visualizations[visualizationKey])
  const rowData = config.rows[rowNumber]
  if (visualizationConfig.footnotes?.dataKey) {
    visualizationConfig.footnotes.data = config.datasets[visualizationConfig.footnotes.dataKey]?.data
  }
  if (rowData?.dataKey) {
    // data configured on the row
    Object.assign(visualizationConfig, _.pick(rowData, ['dataKey', 'dataDescription', 'formattedData', 'data']))
  }

  const sharedFilterColumns = config.dashboard.sharedFilters.reduce((acc, filter) => {
    if (!filter.usedBy?.length || filter.usedBy?.includes(visualizationKey)) {
      const apiFilter = filter.apiFilter
      const colName = apiFilter?.textSelector || apiFilter?.valueSelector || filter.columnName
      acc.push(colName)
      const subGrouping =
        apiFilter?.subgroupTextSelector || apiFilter?.subgroupValueSelector || filter.subGrouping?.columnName
      if (subGrouping) {
        acc.push(subGrouping)
      }
    }
    return acc
  }, [])

  // Collect active dashboard filters for markup variable processing
  // This allows markup variables to filter even when the viz isn't in usedBy
  const activeDashboardFilters = config.dashboard.sharedFilters
    .filter(filter => filter.active !== undefined && filter.active !== null && filter.active !== '')
    .map(filter => ({
      columnName: filter.columnName,
      active: filter.active,
      values: filter.values || []
    }))

  if (activeDashboardFilters.length > 0) {
    visualizationConfig.dashboardFilters = activeDashboardFilters
  }

  // Download CSV button needs to know to include shared filter columns
  if (visualizationConfig.table && config.dashboard.sharedFilters.length) {
    visualizationConfig.table.sharedFilterColumns = sharedFilterColumns
  }

  if (visualizationConfig.formattedData) visualizationConfig.originalFormattedData = visualizationConfig.formattedData
  const filteredVizData = filteredData?.[rowNumber] ?? filteredData?.[visualizationKey]
  const dataKey = visualizationConfig.dataKey || 'backwards-compatibility'

  visualizationConfig.dataMetadata = config.datasets[dataKey]?.dataMetadata || {}

  if (filteredVizData) {
    visualizationConfig.data = filteredVizData || []
    if (visualizationConfig.formattedData) {
      visualizationConfig.formattedData = visualizationConfig.data
    }
  } else {
    // Clear data for charts/maps when shared filters exist but filtered data
    // hasn't arrived yet — prevents rendering the full unfiltered dataset as DOM.
    // Lighter types (data-bite, waffle-chart, filtered-text, markup-include) are
    // excluded: they only compute scalars or single elements, and their editor
    // panels need data to populate column dropdowns. Ideally data filters would
    // apply synchronously before render, but they currently go through the same
    // async loadAPIFilters pipeline as API filters, so filtered data isn't
    // available on first render.
    const heavyVizTypes = ['chart', 'map']
    const shouldClearData = sharedFilterColumns.length && heavyVizTypes.includes(visualizationConfig.type)
    visualizationConfig.data = shouldClearData ? [] : data[dataKey] || []
    if (visualizationConfig.formattedData) {
      visualizationConfig.formattedData =
        transform.developerStandardize(visualizationConfig.data, visualizationConfig.dataDescription) ||
        visualizationConfig.data
    }
  }

  if (filteredDataOverride) {
    visualizationConfig.data = filteredDataOverride
  }

  if (visualizationConfig.footnotes) {
    const visConfigWithFootnotes = getFootnotesVizConfig(visualizationConfig, rowNumber, config, visualizationKey)
    if (multiVizColumn && filteredDataOverride && filteredDataOverride.length > 0) {
      const vizCategory = filteredDataOverride?.[0]?.[multiVizColumn]
      // the multiViz filtering is applied after the dashboard filters
      if (vizCategory !== undefined && visConfigWithFootnotes.footnotes.data) {
        const categoryFootnote = visConfigWithFootnotes.footnotes.data.filter(d => d[multiVizColumn] === vizCategory)
        visConfigWithFootnotes.footnotes.data = categoryFootnote
      }
    }
    return visConfigWithFootnotes
  }

  return visualizationConfig as AnyVisualization
}
