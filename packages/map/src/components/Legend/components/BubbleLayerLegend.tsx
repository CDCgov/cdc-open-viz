import LegendShape from '@cdc/core/components/LegendShape'
import { displayDataAsText } from '@cdc/core/helpers/displayDataAsText'
import type { GeneratedLegend } from '../../../helpers/generateRuntimeLegend'
import { mapConfigForBubbleLayer } from '../../../helpers/bubbleLayers'
import type { BubbleLayer, MapConfig } from '../../../types/MapConfig'
import LegendMarkupText from './LegendMarkupText'

type BubbleLayerLegendProps = {
  config: MapConfig
  layer: BubbleLayer
  layerRuntimeLegend?: GeneratedLegend | []
  legendClasses: { description: string[]; title: string[]; ul: string[] }
  addTopSpacing?: boolean
}

const getBubbleLegendLabel = (entry: GeneratedLegend['items'][number], layerConfig: MapConfig) => {
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
  addTopSpacing = true,
  config,
  layer,
  layerRuntimeLegend,
  legendClasses
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
  const hasBubbleLegendHeader = Boolean(bubbleLegendTitle || bubbleLegendDescription)
  const bubbleLegendListClasses = [...legendClasses.ul]
  if (config.legend.style === 'gradient') bubbleLegendListClasses.push('bubble-legend--gradient')

  return (
    <div className={addTopSpacing ? 'mt-3' : undefined}>
      {hasBubbleLegendHeader && (
        <div className='mb-3'>
          {bubbleLegendTitle && (
            <LegendMarkupText as='h3' className={[...legendClasses.title, 'cove-prose'].join(' ')} config={config}>
              {bubbleLegendTitle}
            </LegendMarkupText>
          )}
          {bubbleLegendDescription && (
            <LegendMarkupText
              as='p'
              className={[...(legendClasses.description ?? []), 'cove-prose'].join(' ')}
              config={config}
            >
              {bubbleLegendDescription}
            </LegendMarkupText>
          )}
        </div>
      )}
      <ul className={bubbleLegendListClasses.join(' ')} aria-label='Bubble legend items'>
        {layerRuntimeLegend.items.map((entry, idx) => (
          <li key={idx} className='legend-container__li d-flex align-items-center'>
            <LegendShape shape={bubbleLegendShape} fill={entry.color} />
            <span className='cove-prose'>{getBubbleLegendLabel(entry, layerConfig)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BubbleLayerLegend
