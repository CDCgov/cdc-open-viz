import _ from 'lodash'
import { MultiDashboardConfig } from '../types/MultiDashboard'
import DataTransform from '@cdc/core/helpers/DataTransform'

const transform = new DataTransform()

export const getVizConfig = (visualizationKey: string, rowNumber: number, config: MultiDashboardConfig, data: Object, filteredData?: Object) => {
  const visualizationConfig = _.cloneDeep(config.visualizations[visualizationKey])
  const rowData = config.rows[rowNumber]
  if (rowData.dataKey) {
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
