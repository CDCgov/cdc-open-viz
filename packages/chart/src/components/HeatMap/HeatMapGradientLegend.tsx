import { useContext, useMemo } from 'react'
import ConfigContext from '../../ConfigContext'
import { buildHeatMapData, getHeatMapPalette } from './helpers'
import '../WarmingStripes/WarmingStripesGradientLegend.css'

const HeatMapGradientLegend = () => {
  const { filteredData, excludedData, config, formatNumber, parseDate } = useContext(ConfigContext)

  const rows = filteredData?.length ? filteredData : excludedData || []
  const xDataKey = config.xAxis?.dataKey
  const heatMapSeries = config.series || []

  const { minValue, maxValue } = useMemo(
    () =>
      buildHeatMapData({
        data: rows as Record<string, any>[],
        xDataKey,
        series: heatMapSeries,
        seriesLabels: config.runtime?.seriesLabels,
        xAxisType: config.xAxis?.type,
        parseDate
      }),
    [rows, xDataKey, heatMapSeries, config.runtime?.seriesLabels, config.xAxis?.type, parseDate]
  )

  const palette = getHeatMapPalette(config)
  const uniqueId = `heatmap-gradient-${config.runtime.uniqueId}`
  const valueLabel = config.legend?.label || 'Value'

  if (config.legend?.hide) return null

  return (
    <div className='warming-stripes-gradient-legend'>
      {config.legend?.label && <h3 className='warming-stripes-gradient-legend__title'>{config.legend.label}</h3>}
      {config.legend?.description && (
        <p className='warming-stripes-gradient-legend__description'>{config.legend.description}</p>
      )}

      <div className='warming-stripes-gradient-legend__container'>
        <svg className='warming-stripes-gradient-legend__svg' height='50' width='100%'>
          <defs>
            <linearGradient id={uniqueId} x1='0%' y1='0%' x2='100%' y2='0%'>
              {palette.map((color, index) => (
                <stop key={index} offset={`${(index / (palette.length - 1)) * 100}%`} stopColor={color} />
              ))}
            </linearGradient>
          </defs>

          <rect x='0' y='0' width='100%' height='25' fill='#d3d3d3' />
          <rect x='1' y='1' width='calc(100% - 2px)' height='23' fill={`url(#${uniqueId})`} />

          <text x='0' y='40' fontSize='14' textAnchor='start' fill='#333'>
            {formatNumber(minValue, 'left')}
          </text>
          <text x='100%' y='40' fontSize='14' textAnchor='end' fill='#333'>
            {formatNumber(maxValue, 'left')}
          </text>
        </svg>

        {valueLabel && <div className='warming-stripes-gradient-legend__series-label'>{valueLabel}</div>}
      </div>
    </div>
  )
}

export default HeatMapGradientLegend
