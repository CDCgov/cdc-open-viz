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
  legendClasses: { ul: string[] }
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

const BubbleLayerLegend = ({ config, layer, layerRuntimeLegend, legendClasses }: BubbleLayerLegendProps) => {
  const bubbleLegendConfig = layer.legend ?? {}
  const showBubbleLegend = bubbleLegendConfig.show !== false
  const shouldRenderBubbleLegend =
    showBubbleLegend && !Array.isArray(layerRuntimeLegend) && layerRuntimeLegend?.items?.length > 0

  if (!shouldRenderBubbleLegend) return null

  const layerConfig = mapConfigForBubbleLayer(config, layer)
  const bubbleLegendTitle =
    bubbleLegendConfig.title !== undefined
      ? bubbleLegendConfig.title
      : layer.label || layer.columns.primary.name || 'Bubbles'
  const bubbleLegendDescription = bubbleLegendConfig.description ?? ''
  const bubbleLegendShape = (bubbleLegendConfig.style ?? config.legend.style) === 'boxes' ? 'square' : 'circle'

  return (
    <>
      <hr className='mt-3 mb-2' />
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
        {layerRuntimeLegend.items.map((entry, idx) => (
          <li key={idx} className='legend-container__li d-flex align-items-center'>
            <LegendShape shape={bubbleLegendShape} fill={entry.color} />
            <span className='cove-prose'>{getBubbleLegendLabel(entry, layerConfig)}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default BubbleLayerLegend
