import { useContext } from 'react'
import ConfigContext from '../../ConfigContext'
import { filterChartColorPalettes } from '@cdc/core/helpers/filterColorPalettes'
import { getFallbackColorPalette, migratePaletteWithMap } from '@cdc/core/helpers/palettes/utils'
import { paletteMigrationMap } from '@cdc/core/helpers/palettes/migratePaletteName'
import './WarmingStripesGradientLegend.css'

const WarmingStripesGradientLegend = () => {
  const { transformedData: data, config, formatNumber } = useContext(ConfigContext)

  const valueKey = config.runtime.seriesKeys?.[0]

  if (!valueKey || !data || data.length === 0 || config.legend?.hide) {
    return null
  }

  // Calculate min and max values
  const values = data.map(d => Number(d[valueKey])).filter(v => !isNaN(v))
  const minValue = Math.min(...values)
  const maxValue = Math.max(...values)

  // Get the color palette from config (same logic as WarmingStripes component)
  const colorPalettes = filterChartColorPalettes(config)
  const configPalette = config.general?.palette?.name
  const migratedPaletteName = configPalette ? configPalette : getFallbackColorPalette(config)

  const isReversedPalette = migratedPaletteName?.endsWith('reverse')
  const basePaletteName = isReversedPalette ? migratedPaletteName.slice(0, -7) : migratedPaletteName

  let palette =
    colorPalettes[migratePaletteWithMap(basePaletteName, paletteMigrationMap, false)] ||
    colorPalettes[basePaletteName] ||
    colorPalettes[configPalette]

  if (!palette || palette.length < 2) {
    palette = [
      '#053061',
      '#2166ac',
      '#4393c3',
      '#92c5de',
      '#d1e5f0',
      '#f7f7f7',
      '#fddbc7',
      '#f4a582',
      '#d6604d',
      '#b2182b',
      '#67001f'
    ]
  }

  const shouldReverse = config.general?.palette?.isReversed || isReversedPalette
  const finalPalette = shouldReverse ? [...palette].reverse() : palette

  // Create gradient stops for SVG
  const gradientStops = finalPalette.map((color, index) => {
    const offset = (index / (finalPalette.length - 1)) * 100
    return { offset: `${offset}%`, color }
  })

  const seriesLabel = config.runtime.seriesLabels?.[valueKey] || valueKey
  const uniqueId = `warming-stripes-gradient-${config.runtime.uniqueId}`

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
              {gradientStops.map((stop, index) => (
                <stop key={index} offset={stop.offset} stopColor={stop.color} />
              ))}
            </linearGradient>
          </defs>

          {/* Border */}
          <rect x='0' y='0' width='100%' height='25' fill='#d3d3d3' />

          {/* Gradient bar */}
          <rect x='1' y='1' width='calc(100% - 2px)' height='23' fill={`url(#${uniqueId})`} />

          {/* Min label */}
          <text x='0' y='40' fontSize='14' textAnchor='start' fill='#333'>
            {formatNumber(minValue, 'left')}
          </text>

          {/* Max label */}
          <text x='100%' y='40' fontSize='14' textAnchor='end' fill='#333'>
            {formatNumber(maxValue, 'left')}
          </text>
        </svg>

        {/* Series name centered below gradient */}
        <div className='warming-stripes-gradient-legend__series-label'>{seriesLabel}</div>
      </div>
    </div>
  )
}

export default WarmingStripesGradientLegend
