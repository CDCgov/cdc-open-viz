import type { ChartConfig } from '../types/ChartConfig'
import cloneDeep from 'lodash/cloneDeep'

/** Applies deterministic chart-type fields owned by current authoring paths. */
export const applyChartTypeContract = <T extends ChartConfig>(config: T): T => {
  const nextConfig = cloneDeep(config)

  if (Array.isArray(nextConfig.series)) {
    nextConfig.series = nextConfig.series.map(series => ({ tooltip: true, axis: 'Left', ...series }))
  }

  switch (nextConfig.visualizationType) {
    case 'Area Chart':
      nextConfig.visualizationSubType = 'stacked'
      break
    case 'Forecasting':
      if (!nextConfig.xAxis.type || nextConfig.xAxis.type === 'categorical') {
        nextConfig.xAxis.type = 'date'
        if (!nextConfig.xAxis.dateParseFormat) nextConfig.xAxis.dateParseFormat = '%Y-%m-%d'
        if (!nextConfig.xAxis.dateDisplayFormat) nextConfig.xAxis.dateDisplayFormat = '%Y-%m-%d'
      }
      break
    case 'HeatMap':
      nextConfig.yAxis.type = 'categorical'
      nextConfig.yAxis.titlePlacement = nextConfig.yAxis.titlePlacement || 'side'
      nextConfig.legend.position = nextConfig.legend.position || 'top'
      nextConfig.legend.style = nextConfig.legend.style || 'gradient'
      nextConfig.legend.subStyle =
        nextConfig.legend.subStyle === 'smooth' ? 'linear blocks' : nextConfig.legend.subStyle || 'linear blocks'
      break
    case 'Horizon Chart': {
      nextConfig.horizon = {
        numLayers: 4,
        mode: 'offset',
        bandGap: 15,
        bottomPadding: 15,
        ...nextConfig.horizon
      }
      if (!nextConfig.xAxis.type) nextConfig.xAxis.type = 'categorical'
      const layerCount = nextConfig.horizon.numLayers ?? 4
      const paletteCount = nextConfig.general.paletteColorCount ?? 4
      nextConfig.general.paletteColorCount = Math.max(paletteCount, layerCount)
      break
    }
    case 'Box Plot':
      nextConfig.yAxis.labelPlacement = 'On Date/Category Axis'
      break
    case 'Paired Bar':
    case 'Deviation Bar':
      nextConfig.orientation = 'horizontal'
      break
    case 'Bump Chart':
      nextConfig.xAxis.type = 'date-time'
      break
  }

  if (
    ['date', 'date-time'].includes(nextConfig.xAxis?.type) &&
    nextConfig.xAxis?.dataKey &&
    !nextConfig.table?.defaultSort?.column
  ) {
    nextConfig.table = {
      ...nextConfig.table,
      defaultSort: { column: nextConfig.xAxis.dataKey, sortDirection: 'desc' }
    }
  }

  return nextConfig
}

export default applyChartTypeContract
