import { useContext, useMemo } from 'react'
import { LegendItem, LegendLabel } from '@visx/legend'
import LegendShape from '@cdc/core/components/LegendShape'
import ConfigContext from '../../../ConfigContext'
import { buildHeatMapData, getHeatMapBucketPalette, getHeatMapDataGroupRanges } from '../helpers'
import { ChartConfig } from '../../../types/ChartConfig'

const getHeatMapLegendClasses = (config: ChartConfig) => {
  const { position = 'top', singleRow = true, verticalSorted } = config.legend || {}
  const hideBorder = config.legend?.hideBorder
  const hideSideBorder = hideBorder && typeof hideBorder === 'object' ? hideBorder.side : Boolean(hideBorder)
  const hideTopBottomBorder = hideBorder && typeof hideBorder === 'object' ? hideBorder.topBottom : Boolean(hideBorder)
  const containerClasses = ['legend-container', 'cdc-heatmap__legend', position].filter(Boolean)
  const innerClasses = ['legend-container__inner']

  if (['bottom', 'top'].includes(position)) {
    innerClasses.push(singleRow ? 'single-row' : 'double-column', position)
  }

  if (['bottom', 'top'].includes(position) && verticalSorted) {
    innerClasses.push('vertical-sorted')
  }

  if (
    (['right', 'left'].includes(position) && hideSideBorder) ||
    (['top', 'bottom'].includes(position) && hideTopBottomBorder)
  ) {
    containerClasses.push('border-0', 'p-0')
  } else {
    containerClasses.push('p-3')
  }

  return { containerClasses, innerClasses }
}

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

  const palette = getHeatMapBucketPalette(config)
  const legendLabel = config.legend?.label
  const valueLabel = legendLabel ? undefined : 'Value'
  const { containerClasses, innerClasses } = getHeatMapLegendClasses(config)
  const isGradientLegend = !config.legend?.style || config.legend?.style === 'gradient'
  const shape = config.legend?.style === 'circles' ? 'circle' : 'square'
  const ranges = getHeatMapDataGroupRanges(config, minValue, maxValue, formatNumber)
  const displayRanges = config.legend?.reverseLabelOrder ? [...ranges].reverse() : ranges
  const displayPalette = config.legend?.reverseLabelOrder ? [...palette].reverse() : palette
  const displayLegendItems = displayRanges.map((range, index) => ({
    color: displayPalette[index % displayPalette.length],
    range
  }))

  if (config.legend?.hide) return null

  return (
    <aside id='legend' className={containerClasses.join(' ')} role='region' aria-label='legend' tabIndex={0}>
      {config.legend?.label && <h3 className='cdc-heatmap__legend-title'>{config.legend.label}</h3>}
      {config.legend?.description && <p className='cdc-heatmap__legend-description'>{config.legend.description}</p>}

      {isGradientLegend ? (
        <div className='cdc-heatmap__legend-scale'>
          <svg className='cdc-heatmap__legend-svg' height='25' width='100%'>
            <rect x='0' y='0' width='100%' height='25' fill='#d3d3d3' />
            {displayLegendItems.map(({ color, range }, index) => (
              <rect
                key={`heatmap-gradient-block-${range.min}-${range.max}-${color}`}
                x={`${(index / displayLegendItems.length) * 100}%`}
                y='1'
                width={`${100 / displayLegendItems.length}%`}
                height='23'
                fill={color}
              />
            ))}
          </svg>
          <div
            className='cdc-heatmap__legend-range-labels'
            style={{ gridTemplateColumns: `repeat(${Math.max(displayLegendItems.length, 1)}, minmax(0, 1fr))` }}
          >
            {displayLegendItems.map(({ range }) => (
              <span
                className='cdc-heatmap__legend-range-label'
                key={`heatmap-gradient-label-${range.min}-${range.max}`}
              >
                {range.label}
              </span>
            ))}
          </div>

          {valueLabel && <div className='cdc-heatmap__legend-series-label'>{valueLabel}</div>}
        </div>
      ) : (
        <div className={innerClasses.join(' ')}>
          {displayLegendItems.map(({ color, range }) => (
            <LegendItem
              className='legend-item not-clickable'
              key={`heatmap-legend-range-${range.min}-${range.max}`}
              tabIndex={-1}
            >
              <LegendShape shape={shape} fill={color} />
              <LegendLabel align='left' className='m-0'>
                {range.label}
              </LegendLabel>
            </LegendItem>
          ))}
        </div>
      )}
    </aside>
  )
}

export default HeatMapGradientLegend
