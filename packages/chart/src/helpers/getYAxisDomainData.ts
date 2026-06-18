import { ChartConfig } from '../types/ChartConfig'
import { AxisFilterDomainBehavior } from '@cdc/core/types/Axis'

const hasRows = (data?: Object[]) => Array.isArray(data) && data.length > 0

export const getYAxisFilterDomainBehavior = (config: ChartConfig): AxisFilterDomainBehavior => {
  return config.yAxis?.filterDomainBehavior === 'stable' ? 'stable' : 'dynamic'
}

export const getYAxisDomainData = ({
  config,
  data,
  tableData,
  fullEligibleDomainData
}: {
  config: ChartConfig
  data: Object[]
  tableData?: Object[]
  fullEligibleDomainData?: Object[]
}): Object[] => {
  const brushActive = Boolean(config.xAxis?.brushActive)
  const brushDynamicYAxis = Boolean(config.xAxis?.brushDynamicYAxis)

  if (brushActive && brushDynamicYAxis) {
    return data
  }

  const behavior = getYAxisFilterDomainBehavior(config)
  if (behavior === 'stable' && hasRows(fullEligibleDomainData)) {
    return fullEligibleDomainData
  }

  if (brushActive && !brushDynamicYAxis && hasRows(tableData)) {
    return tableData
  }

  return data
}
