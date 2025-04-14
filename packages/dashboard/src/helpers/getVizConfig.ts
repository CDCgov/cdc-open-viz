import _ from 'lodash'
import { MultiDashboardConfig } from '../types/MultiDashboard'
import DataTransform from '@cdc/core/helpers/DataTransform'
import { getApplicableFilters } from './getFilteredData'
import { filterData } from './filterData'
import { AnyVisualization } from '@cdc/core/types/Visualization'

const transform = new DataTransform()

export const getFootnotesVizConfig = (
  _visualizationConfig: AnyVisualization,
  rowNumber: number,
  config: MultiDashboardConfig
) => {
  const visualizationConfig = _.cloneDeep(_visualizationConfig)
  if (!visualizationConfig?.footnotes) return visualizationConfig
  const data = config.datasets[visualizationConfig.dataKey]?.data
  const dataColumns = data?.length ? Object.keys(data[0]) : []
  const filters = (getApplicableFilters(config.dashboard, rowNumber) || []).filter(filter =>
    dataColumns.includes(filter.columnName)
  )
  if (filters.length) {
    visualizationConfig.footnotes.formattedData = filterData(filters, data)
  }
  visualizationConfig.footnotes.data = data
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
  const visualizationConfig = _.cloneDeep(config.visualizations[visualizationKey])
  const rowData = config.rows[rowNumber]
  if (visualizationConfig.footnotes?.dataKey) {
    visualizationConfig.footnotes.data = config.datasets[visualizationConfig.footnotes.dataKey]?.data
  }
  if (rowData?.dataKey) {
    // data configured on the row
    Object.assign(visualizationConfig, _.pick(rowData, ['dataKey', 'dataDescription', 'formattedData', 'data']))
  }

  if (visualizationConfig.table && config.dashboard.sharedFilters.length) {
    // Download CSV button needs to know to include shared filter columns
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
    visualizationConfig.table.sharedFilterColumns = sharedFilterColumns
  }

  if (visualizationConfig.formattedData) visualizationConfig.originalFormattedData = visualizationConfig.formattedData
  const filteredVizData = filteredData?.[rowNumber] ?? filteredData?.[visualizationKey]

  if (filteredVizData) {
    visualizationConfig.data = filteredVizData || []
    if (visualizationConfig.formattedData) {
      visualizationConfig.formattedData = visualizationConfig.data
    }
  } else {
    const dataKey = visualizationConfig.dataKey || 'backwards-compatibility'
    visualizationConfig.data = data[dataKey] || []
    if (visualizationConfig.formattedData) {
      visualizationConfig.formattedData =
        transform.developerStandardize(visualizationConfig.data, visualizationConfig.dataDescription) ||
        visualizationConfig.data
    }
  }

  if (filteredDataOverride) {
    visualizationConfig.data = filteredDataOverride
    if (visualizationConfig.formattedData) {
      visualizationConfig.formattedData = filteredDataOverride
    }
  }

  if (visualizationConfig.footnotes) {
    const newVizConfig = getFootnotesVizConfig(visualizationConfig, rowNumber, config)
    if (multiVizColumn && filteredDataOverride) {
      const vizCategory = filteredDataOverride[0][multiVizColumn]
      // the multiViz filtering filtering is applied after the dashboard filters
      const categoryFootnote = newVizConfig.footnotes.formattedData.filter(d => d[multiVizColumn] === vizCategory)
      newVizConfig.footnotes.formattedData = categoryFootnote
    } else {
      newVizConfig.footnotes.formattedData = filteredData[newVizConfig.footnotes.dataKey]
    }
  }

  return visualizationConfig as AnyVisualization
}
