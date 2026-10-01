import { type ChartConfig, type VisualizationType } from '../../../types/ChartConfig'
import { HEATMAP_CONFIG_DEFAULTS } from '../../HeatMap/heatmap.constants'

export const getVisualizationTypeConfigUpdate = (
  config: ChartConfig,
  visualizationType: VisualizationType
): ChartConfig | undefined => {
  if (visualizationType === 'Forecasting' && config.xAxis.type === 'categorical') {
    return {
      ...config,
      visualizationType,
      xAxis: {
        ...config.xAxis,
        type: 'date',
        dateParseFormat: config.xAxis.dateParseFormat || '%Y-%m-%d',
        dateDisplayFormat: config.xAxis.dateDisplayFormat || '%Y-%m-%d'
      }
    }
  }

  if (visualizationType === 'HeatMap') {
    return {
      ...config,
      visualizationType,
      series: (config.series || []).map(series => ({
        ...series,
        type: 'HeatMap',
        axis: 'Left'
      })),
      xAxis: {
        ...config.xAxis,
        manual: false,
        numTicks: undefined,
        viewportNumTicks: {}
      },
      yAxis: {
        ...config.yAxis,
        type: 'categorical',
        titlePlacement: 'side'
      },
      heatmap: {
        cellPadding: config.heatmap?.cellPadding ?? HEATMAP_CONFIG_DEFAULTS.cellPadding,
        rowLabelGap: config.heatmap?.rowLabelGap ?? HEATMAP_CONFIG_DEFAULTS.rowLabelGap,
        columnLabelGap: config.heatmap?.columnLabelGap ?? HEATMAP_CONFIG_DEFAULTS.columnLabelGap,
        colorBucketCount: config.heatmap?.colorBucketCount ?? HEATMAP_CONFIG_DEFAULTS.colorBucketCount,
        xAxisPosition: config.heatmap?.xAxisPosition ?? HEATMAP_CONFIG_DEFAULTS.xAxisPosition,
        showCellValues: config.heatmap?.showCellValues ?? HEATMAP_CONFIG_DEFAULTS.showCellValues,
        horizontalScroll: config.heatmap?.horizontalScroll ?? HEATMAP_CONFIG_DEFAULTS.horizontalScroll,
        minColumnWidth: config.heatmap?.minColumnWidth ?? HEATMAP_CONFIG_DEFAULTS.minColumnWidth
      },
      legend: {
        ...config.legend,
        position: 'top',
        style: 'gradient',
        subStyle: 'linear blocks'
      },
      general: {
        ...config.general,
        palette: config.general?.palette || {
          isReversed: false,
          version: '2.1',
          name: 'sequential_blue'
        }
      }
    }
  }

  return undefined
}
