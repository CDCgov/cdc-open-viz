import _ from 'lodash'
import { MultiDashboardConfig } from '../types/MultiDashboard'
import DataTransform from '@cdc/core/helpers/DataTransform'
import { getApplicableFilters } from './getFilteredData'
import { filterData } from './filterData'

const transform = new DataTransform()

export const getFootnotesVizConfig = (vizKey: string, rowNumber: number, config: MultiDashboardConfig) => {
  const visualizationConfig = _.cloneDeep(config.visualizations[vizKey])

  const data = config.datasets[visualizationConfig.dataKey]?.data
  const dataColumns = data?.length ? Object.keys(data[0]) : []
  const filters = (getApplicableFilters(config.dashboard, rowNumber) || []).filter(filter => dataColumns.includes(filter.columnName))
  if (filters.length) {
    visualizationConfig.formattedData = filterData(filters, data)
  }
  visualizationConfig.data = data
  return visualizationConfig
}

export const getVizConfig = (visualizationKey: string, rowNumber: number, config: MultiDashboardConfig, data: Object, filteredData?: Object) => {
  const visualizationConfig = _.cloneDeep(config.visualizations[visualizationKey])
  const rowData = config.rows[rowNumber]
  if (rowData.footnotesId && rowData.footnotesId === visualizationKey) {
    // return the footnotes visualization config with filtered data
    return getFootnotesVizConfig(visualizationKey, rowNumber, config)
  }
  if (rowData?.dataKey) {
    // data configured on the row
    Object.assign(visualizationConfig, _.pick(rowData, ['dataKey', 'dataDescription', 'formattedData', 'data']))
  }

  if (visualizationConfig.formattedData) visualizationConfig.originalFormattedData = visualizationConfig.formattedData
  const filteredVizData = filteredData?.[rowNumber] ?? filteredData?.[visualizationKey]

  if (filteredVizData) {
    visualizationConfig.data = filteredVizData
    if (visualizationConfig.formattedData) {
      visualizationConfig.formattedData = visualizationConfig.data
    }
  } else {
    const dataKey = visualizationConfig.dataKey || 'backwards-compatibility'
    visualizationConfig.data = data[dataKey]
    if (visualizationConfig.formattedData) {
      visualizationConfig.formattedData = transform.developerStandardize(visualizationConfig.data, visualizationConfig.dataDescription) || visualizationConfig.data
    }
  }
  return visualizationConfig
}
