import LegendShape from '@cdc/core/components/LegendShape'
import { displayDataAsText } from '@cdc/core/helpers/displayDataAsText'
import { mapConfigForBubbleLayer } from '../../../helpers/bubbleLayers'
import type { BubbleLayer, MapConfig } from '../../../types/MapConfig'
import type { RuntimeLegend } from '../../../types/runtimeLegend'
import LegendMarkupText from './LegendMarkupText'

type BubbleLayerLegendProps = {
  config: MapConfig
  layer: BubbleLayer
  layerRuntimeLegend?: RuntimeLegend | []
  legendClasses: { ul: string[] }
  onToggleLegendItem?: (entryIndex: number, legendLabel: string) => void
  showSeparator?: boolean
}

const getBubbleLegendLabel = (entry: RuntimeLegend['items'][number], layerConfig: MapConfig) => {
  const entryMax = displayDataAsText(entry.max, 'primary', layerConfig)
  const entryMin = displayDataAsText(entry.min, 'primary', layerConfig)
  let label = `${entryMin}${entryMax !== entryMin ? ` - ${entryMax}` : ''}`

  if (entry.max === null && entry.min === null) label = 'No data'
  if (entry.max === 0 && entry.min === 0) label = '0'
  if (entry.hasOwnProperty('special')) label = entry.label || String(entry.value)
  if (entry.min === undefined && entry.max === undefined && !entry.special && entry.value !== undefined) {
    label = String(entry.value)
  }

  return label
}

const BubbleLayerLegend = ({
  config,
  layer,
  layerRuntimeLegend,
  legendClasses,
  onToggleLegendItem,
  showSeparator = true
}: BubbleLayerLegendProps) => {
  const bubbleLegendConfig = layer.legend ?? {}
  const showBubbleLegend = bubbleLegendConfig.show !== false
  const shouldRenderBubbleLegend =
    showBubbleLegend && !Array.isArray(layerRuntimeLegend) && layerRuntimeLegend?.items?.length > 0

  if (!shouldRenderBubbleLegend) return null

  const layerConfig = mapConfigForBubbleLayer(config, layer)
  const bubbleLegendTitle =
    bubbleLegendConfig.title !== undefined
      ? bubbleLegendConfig.title
      : layer.columns.primary.name || layer.columns.size?.name || 'Bubbles'
  const bubbleLegendDescription = bubbleLegendConfig.description ?? ''
  const bubbleLegendShape = (bubbleLegendConfig.style ?? config.legend.style) === 'boxes' ? 'square' : 'circle'
  const hasDisabledItems = Number(layerRuntimeLegend.disabledAmt ?? 0) > 0

  return (
    <>
      {showSeparator && <hr className='mt-3 mb-2' />}
      {bubbleLegendTitle && (
        <LegendMarkupText
          as='h4'
          className='cove-prose mb-1'
          config={config}
          style={{ fontSize: '0.875rem', fontWeight: 600 }}
        >
          {bubbleLegendTitle}
        </LegendMarkupText>
      )}
      {bubbleLegendDescription && (
        <LegendMarkupText as='p' className='cove-prose mb-2' config={config}>
          {bubbleLegendDescription}
        </LegendMarkupText>
      )}
      <ul className={legendClasses.ul.join(' ')} aria-label='Bubble legend items'>
        {layerRuntimeLegend.items.map((entry, idx) => {
          const legendLabel = getBubbleLegendLabel(entry, layerConfig)
          const legendItemClasses = ['legend-container__li', 'd-flex', 'align-items-center']

          if (entry.disabled || entry.hidden) legendItemClasses.push('legend-container__li--disabled')
          else if (hasDisabledItems) legendItemClasses.push('legend-container__li--not-disabled')
          if (entry.special) legendItemClasses.push('legend-container__li--special-class')

          return (
            <li key={idx} className={legendItemClasses.join(' ')}>
              <button
                type='button'
                className='legend-container__li-btn'
                title={`Bubble legend item ${legendLabel} - Click to disable`}
                onClick={() => onToggleLegendItem?.(idx, legendLabel)}
              >
                <LegendShape shape={bubbleLegendShape} fill={entry.color} />
                <span className='cove-prose'>{legendLabel}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default BubbleLayerLegend
