//TODO: Move legends to core
import { Fragment, forwardRef, useContext, useMemo } from 'react'
import { scaleLinear } from 'd3-scale'
import parse from 'html-react-parser'
import { processMarkupVariables } from '@cdc/core/helpers/markupProcessor'
import { sanitizeToSvgId } from '@cdc/core/helpers/cove/string'
//types
import { DimensionsType } from '@cdc/core/types/Dimensions'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import LegendShape from '@cdc/core/components/LegendShape'
import LegendGradient from '@cdc/core/components/Legend/Legend.Gradient'
import LegendItemHex from './LegendItem.Hex'
import Button from '@cdc/core/components/elements/Button'

import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import ConfigContext, { MapDispatchContext } from '../../../context'
import { PatternLines, PatternCircles, PatternWaves } from '@visx/pattern'
import { GlyphStar, GlyphTriangle, GlyphDiamond, GlyphSquare, GlyphCircle } from '@visx/glyph'
import { Group } from '@visx/group'
import './index.scss'
import { type ViewPort } from '@cdc/core/types/ViewPort'
import { isBelowBreakpoint, isMobileFontViewport } from '@cdc/core/helpers/viewports'
import { displayDataAsText } from '@cdc/core/helpers/displayDataAsText'
import { toggleLegendActive } from '../../../helpers/toggleLegendActive'
import { resetLegendToggles } from '../../../helpers/resetLegendToggles'
import { MapContext } from '../../../types/MapContext'
import LegendGroup from './LegendGroup/Legend.Group'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'
import { getConfiguredBubbleLayers, getFiniteBubbleNumber } from '../../../helpers/bubbleLayers'
import { generateBubbleLayerRuntimeData } from '../../../helpers/generateRuntimeData'
import BubbleLayerLegend from './BubbleLayerLegend'
import BubbleSizeLegend from './BubbleSizeLegend'

const LEGEND_PADDING = 30

const isFiniteNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value)

const formatManualRangeLabel = (entry, idx: number, items, config) => {
  const min = entry.min
  const max = entry.max

  if (!isFiniteNumber(min) || !isFiniteNumber(max)) {
    return ''
  }

  const roundToPlace = Number(config?.columns?.primary?.roundToPlace ?? 0)
  const usesIntegerDisplay = roundToPlace === 0 && Number.isInteger(min) && Number.isInteger(max)
  const isLast = idx === items.length - 1

  if (usesIntegerDisplay) {
    if (min === max) {
      return displayDataAsText(min, 'primary', config)
    }

    if (isLast) {
      return `${displayDataAsText(min, 'primary', config)} - ${displayDataAsText(max, 'primary', config)}`
    }

    return `${displayDataAsText(min, 'primary', config)} - ${displayDataAsText(max - 1, 'primary', config)}`
  }

  const entryMin = displayDataAsText(min, 'primary', config)
  const entryMax = displayDataAsText(max, 'primary', config)
  return isLast ? `${entryMin} - ${entryMax}` : `${entryMin} - < ${entryMax}`
}

type LegendProps = {
  skipId: string
  dimensions: DimensionsType
  containerWidthPadding: number
  currentViewport: ViewPort
  interactionLabel: string
}

const Legend = forwardRef<HTMLDivElement, LegendProps>((props, ref) => {
  const { skipId, containerWidthPadding, interactionLabel } = props

  const {
    config,
    currentViewport: viewport,
    dimensions,
    mapId,
    runtimeFilters,
    runtimeLegend,
    runtimeBubbleLegend
  } = useContext<MapContext>(ConfigContext)

  const dispatch = useContext(MapDispatchContext)

  const { legend } = config
  const bubbleLayers = getConfiguredBubbleLayers(config)
  const runtimeBubbleLegends = Array.isArray(runtimeBubbleLegend)
    ? runtimeBubbleLegend
    : runtimeBubbleLegend?.items
    ? [runtimeBubbleLegend]
    : []
  const hasMapLegend = Boolean(config.columns.primary.name && runtimeLegend?.items?.length)
  const isLegendGradient = legend.style === 'gradient'
  const boxDynamicallyHidden = isBelowBreakpoint('md', viewport)
  const legendWrapping =
    (legend.position === 'left' || legend.position === 'right') &&
    (viewport === 'md' || isBelowBreakpoint('md', viewport))
  const legendOnBottom = legend.position === 'bottom' || legendWrapping
  const needsTopMargin = legend.hideBorder && legendOnBottom

  const getFormattedLegendItems = () => {
    try {
      if (!runtimeLegend.items) {
        console.warn('No runtime legend data available')
        return []
      }
      return runtimeLegend.items.map((entry, idx) => {
        const entryMax = displayDataAsText(entry.max, 'primary', config)

        const entryMin = displayDataAsText(entry.min, 'primary', config)
        let formattedText = `${entryMin}${entryMax !== entryMin ? ` - ${entryMax}` : ''}`

        // Use half-open labels for computed/manual numeric bins so shared boundaries do not read as overlap.
        if (legend.type === 'equalinterval' && idx !== runtimeLegend.length - 1) {
          formattedText = `${entryMin} - < ${entryMax}`
        }

        if (legend.type === 'manual') {
          formattedText = formatManualRangeLabel(entry, idx, runtimeLegend.items, config)
        }

        if (legend.type === 'category') {
          formattedText = displayDataAsText(entry.value, 'primary', config)
        }

        if (entry.max === 0 && entry.min === 0) {
          formattedText = '0'
        }

        if (entry.max === null && entry.min === null) {
          formattedText = 'No data'
        }

        let legendLabel = formattedText
        let displayLabel: React.ReactNode = formattedText

        if (entry.hasOwnProperty('special')) {
          legendLabel = entry.label || entry.value
          displayLabel = parse(String(legendLabel))
        }

        return {
          color: entry.color,
          label: displayLabel,
          rawLabel: String(legendLabel),
          disabled: entry.disabled,
          hidden: entry.hidden,
          special: entry.hasOwnProperty('special'),
          value: [entry.min, entry.max]
        }
      })
    } catch (e) {
      console.error('Error in getFormattedLegendItems', e) // eslint-disable-line
      return []
    }
  }

  const legendList = (patternsOnly = false) => {
    const formattedItems = patternsOnly ? [] : getFormattedLegendItems()
    const hasDisabledItems = runtimeLegend.disabledAmt > 0
    let legendItems

    legendItems = formattedItems.map((item, idx) => {
      const handleListItemClass = () => {
        let classes = ['legend-container__li', 'd-flex', 'align-items-center']
        if (item.disabled || item.hidden) classes.push('legend-container__li--disabled')
        else if (hasDisabledItems) classes.push('legend-container__li--not-disabled')
        if (item.special) classes.push('legend-container__li--special-class')
        return classes.join(' ')
      }

      return (
        <li className={handleListItemClass()} key={idx}>
          <button
            type='button'
            className='legend-container__li-btn'
            title={`Legend item ${item.label} - Click to disable`}
            onClick={() => {
              toggleLegendActive(idx, item.label, runtimeLegend, dispatch, config.legend.behavior)
              publishAnalyticsEvent({
                vizType: config.type,
                vizSubType: getVizSubType(config),
                eventType: `map_legend_item_toggled`,
                eventAction: 'click',
                eventLabel: `${interactionLabel}`,
                vizTitle: getVizTitle(config),
                specifics: `mode: isolate, label: ${item.label}`
              })
            }}
          >
            <LegendShape shape={config.legend.style === 'boxes' ? 'square' : 'circle'} fill={item.color} />
            <span className='cove-prose'>{item.label}</span>
          </button>
        </li>
      )
    })

    if (config.map.patterns) {
      // loop over map patterns
      config.map.patterns.map((patternData, patternDataIndex) => {
        const { pattern, dataKey, size, color } = patternData
        const patternColor = color || 'black'
        const sanitizedDataKey = sanitizeToSvgId(dataKey)
        const sizes = {
          small: 8,
          medium: 10,
          large: 12
        }

        const legendSize = 16

        legendItems.push(
          <>
            <li className={`legend-container__li legend-container__li--geo-pattern`}>
              <button
                type='button'
                className='legend-container__li-btn legend-container__li-btn--pattern'
                aria-label='Pattern legend item. Toggling patterns is not currently supported.'
              >
                <svg width={legendSize} height={legendSize}>
                  {pattern === 'waves' && (
                    <PatternWaves
                      id={`${mapId}--${sanitizedDataKey}--${patternDataIndex}`}
                      height={sizes[size] ?? 10}
                      width={sizes[size] ?? 10}
                      fill={patternColor}
                      strokeWidth={0.25}
                    />
                  )}
                  {pattern === 'circles' && (
                    <PatternCircles
                      id={`${mapId}--${sanitizedDataKey}--${patternDataIndex}`}
                      height={sizes[size] ?? 10}
                      width={sizes[size] ?? 10}
                      fill={patternColor}
                      radius={1.25}
                    />
                  )}
                  {pattern === 'lines' && (
                    <PatternLines
                      id={`${mapId}--${sanitizedDataKey}--${patternDataIndex}`}
                      height={sizes[size] ?? 6}
                      width={sizes[size] ?? 10}
                      stroke={patternColor}
                      strokeWidth={0.75}
                      orientation={['diagonalRightToLeft']}
                    />
                  )}
                  <circle
                    id={sanitizedDataKey}
                    fill={`url(#${mapId}--${sanitizedDataKey}--${patternDataIndex})`}
                    r={legendSize / 2}
                    cx={legendSize / 2}
                    cy={legendSize / 2}
                    stroke='#0000004d'
                    strokeWidth={1}
                  />
                </svg>
                <span>{patternData.label || String(patternData.dataValue ?? '')}</span>
              </button>
            </li>
          </>
        )
      })
    }

    return legendItems
  }
  const legendListItems = legendList(isLegendGradient)

  const { legendClasses } = useDataVizClasses(config, viewport)

  const handleReset = e => {
    const legend = ref.current
    if (e) {
      e.preventDefault()
    }
    publishAnalyticsEvent({
      vizType: config.type,
      vizSubType: getVizSubType(config),
      eventType: 'map_legend_reset',
      eventAction: 'click',
      eventLabel: interactionLabel,
      vizTitle: getVizTitle(config)
    })
    resetLegendToggles(runtimeLegend, dispatch)
    dispatch({
      type: 'SET_ACCESSIBLE_STATUS',
      payload: 'Legend has been reset, please reference the data table to see updated values.'
    })
    if (legend) {
      legend.focus()
    }
  }

  const pin = (
    <path
      className='marker'
      d='M0,0l-8.8-17.7C-12.1-24.3-7.4-32,0-32h0c7.4,0,12.1,7.7,8.8,14.3L0,0z'
      strokeWidth={2}
      stroke={'black'}
      transform={`scale(0.5)`}
    />
  )

  const cityStyleShapes = useMemo(
    () => ({
      pin: pin,
      circle: <GlyphCircle color='#000' size={150} />,
      square: <GlyphSquare color='#000' size={150} />,
      diamond: <GlyphDiamond color='#000' size={150} />,
      star: <GlyphStar color='#000' size={150} />,
      triangle: <GlyphTriangle color='#000' size={150} />
    }),
    [pin]
  )

  const bubbleSizeLegendItemsByLayer = useMemo(() => {
    return bubbleLayers.map(layer => {
      const bubbleLegendConfig = layer.legend ?? {}
      const showBubbleLegend = bubbleLegendConfig.show !== false
      const bubbleSizeLegendConfig = bubbleLegendConfig.size ?? {}
      const bubbleSizeColumnName = layer.columns.size?.name || layer.columns.primary.name || ''

      if (!showBubbleLegend || bubbleSizeLegendConfig.show !== true || !bubbleSizeColumnName) return []

      const minBubbleSize = Number(layer.minBubbleSize ?? 1)
      const maxBubbleSize = Number(layer.maxBubbleSize ?? 20)
      const showBubbleZeros = layer.showBubbleZeros === true
      const layerRuntimeData = generateBubbleLayerRuntimeData(
        config,
        layer,
        runtimeFilters as any,
        runtimeFilters?.fromHash ?? 0
      )
      const layerDataRows = Object.values(layerRuntimeData ?? {}) as Record<string, any>[]
      const finiteValues = layerDataRows
        .map(row => getFiniteBubbleNumber(row[bubbleSizeColumnName]))
        .filter((value): value is number => value !== null && value >= 0)
      const visibleValues = showBubbleZeros ? finiteValues : finiteValues.filter(value => value > 0)

      if (!visibleValues.length) return []

      const sortedUniqueValues = Array.from(new Set(visibleValues)).sort((a, b) => a - b)
      const minValue = sortedUniqueValues[0]
      const maxValue = sortedUniqueValues[sortedUniqueValues.length - 1]
      const targetValues =
        sortedUniqueValues.length <= 3 ? sortedUniqueValues : [minValue, minValue + (maxValue - minValue) / 2, maxValue]
      const sampleValues = targetValues.reduce<number[]>((samples, targetValue) => {
        const closestValue = sortedUniqueValues.reduce((closest, value) =>
          Math.abs(value - targetValue) < Math.abs(closest - targetValue) ? value : closest
        )
        if (!samples.includes(closestValue)) samples.push(closestValue)
        return samples
      }, [])

      const domainMin = showBubbleZeros ? 0 : 1
      const domainMax = Math.max(...finiteValues, domainMin)
      const bubbleScale =
        domainMax === domainMin
          ? () => minBubbleSize
          : scaleLinear().domain([domainMin, domainMax]).range([minBubbleSize, maxBubbleSize])
      const numberFormatter = new Intl.NumberFormat(config.locale, { maximumFractionDigits: 2 })

      return sampleValues.map(value => ({
        value,
        radius: Number(bubbleScale(value)),
        label: numberFormatter.format(value)
      }))
    })
  }, [bubbleLayers, config, runtimeFilters])

  const shouldRenderLegendList =
    hasMapLegend && legendListItems.length > 0 && ['Select Option', ''].includes(config.legend.groupBy)
  const hasCityStyleLegend = Boolean(
    (config.visual.additionalCityStyles && config.visual.additionalCityStyles.some(c => c.label)) ||
      config.visual.cityStyleLabel
  )
  let hasRenderedLegendContent = hasMapLegend || hasCityStyleLegend

  const bubbleLegendNodes = bubbleLayers.map((layer, layerIndex) => {
    const bubbleLegendConfig = layer.legend ?? {}
    const showBubbleLegend = bubbleLegendConfig.show !== false
    const layerRuntimeLegend = runtimeBubbleLegends[layerIndex]
    const bubbleSizeLegendConfig = bubbleLegendConfig.size ?? {}
    const bubbleSizeColumnName = layer.columns.size?.name || layer.columns.primary.name || ''
    const bubbleSizeLegendTitle =
      bubbleSizeLegendConfig.title !== undefined ? bubbleSizeLegendConfig.title : bubbleSizeColumnName || 'Bubble size'
    const bubbleSizeLegendDescription = bubbleSizeLegendConfig.description ?? ''
    const bubbleSizeLegendItems = bubbleSizeLegendItemsByLayer[layerIndex] ?? []
    const shouldRenderBubbleLegend =
      showBubbleLegend && !Array.isArray(layerRuntimeLegend) && layerRuntimeLegend?.items?.length > 0
    const shouldRenderBubbleSizeLegend = bubbleSizeLegendItems.length > 0

    if (!shouldRenderBubbleLegend && !shouldRenderBubbleSizeLegend) return null

    const showBubbleLayerSeparator = shouldRenderBubbleLegend && hasRenderedLegendContent
    const showBubbleSizeSeparator =
      shouldRenderBubbleSizeLegend && (hasRenderedLegendContent || shouldRenderBubbleLegend)
    hasRenderedLegendContent = true

    return (
      <Fragment key={`bubble-layer-legend-${layerIndex}`}>
        <BubbleLayerLegend
          config={config}
          layer={layer}
          layerRuntimeLegend={layerRuntimeLegend}
          legendClasses={legendClasses}
          showSeparator={showBubbleLayerSeparator}
        />
        <BubbleSizeLegend
          config={config}
          description={bubbleSizeLegendDescription}
          items={bubbleSizeLegendItems}
          showSeparator={showBubbleSizeSeparator}
          title={bubbleSizeLegendTitle}
        />
      </Fragment>
    )
  })

  return (
    <ErrorBoundary component='Sidebar'>
      <div className={`legends ${needsTopMargin ? 'mt-4' : ''} ${legendWrapping ? 'legend-wrapped-bottom' : ''}`}>
        <aside
          id={skipId || 'legend'}
          className={legendClasses.aside.join(' ') || ''}
          role='region'
          aria-label='Legend'
          tabIndex={isLegendGradient ? -1 : 0}
          ref={ref}
        >
          <section className={legendClasses.section.join(' ') || ''} aria-label='Map Legend'>
            {hasMapLegend && (legend.title || legend.description || legend.dynamicDescription) && (
              <div className='mb-3'>
                {legend.title && (
                  <h3 className={`${legendClasses.title.join(' ') || ''} cove-prose`.trim()}>
                    {parse(
                      config.enableMarkupVariables && config.markupVariables?.length > 0
                        ? processMarkupVariables(legend.title, config.data || [], config.markupVariables, {
                            isEditor: false,
                            filters: config.filters || [],
                            locale: config.locale,
                            dataMetadata: config.dataMetadata
                          }).processedContent
                        : legend.title
                    )}
                  </h3>
                )}
                {legend.dynamicDescription === false && legend.description && (
                  <p className={`${legendClasses.description.join(' ') || ''} cove-prose`.trim()}>
                    {parse(
                      config.enableMarkupVariables && config.markupVariables?.length > 0
                        ? processMarkupVariables(legend.description, config.data || [], config.markupVariables, {
                            isEditor: false,
                            filters: config.filters || [],
                            locale: config.locale,
                            dataMetadata: config.dataMetadata
                          }).processedContent
                        : legend.description
                    )}
                  </p>
                )}
                {legend.dynamicDescription === true &&
                  runtimeFilters.map((filter, idx) => {
                    const lookupStr = `${idx},${filter.values.indexOf(String(filter.active))}`

                    // Do we have a custom description for this?
                    const desc = legend.descriptions[lookupStr] || ''

                    if (desc.length > 0) {
                      return (
                        <p
                          key={`dynamic-description-${lookupStr}`}
                          className={`dynamic-legend-description-${lookupStr} mt-2`}
                        >
                          {desc}
                        </p>
                      )
                    }
                    return true
                  })}
              </div>
            )}

            {hasMapLegend && (
              <>
                <LegendGradient
                  labels={getFormattedLegendItems()?.map(item => item?.rawLabel ?? '') ?? []}
                  colors={getFormattedLegendItems()?.map(item => item?.color) ?? []}
                  dimensions={dimensions}
                  parentPaddingToSubtract={
                    containerWidthPadding + (legend.hideBorder || boxDynamicallyHidden ? 0 : LEGEND_PADDING)
                  }
                  config={config}
                />
                <LegendGroup legendItems={getFormattedLegendItems()} />
              </>
            )}

            {shouldRenderLegendList && (
              <ul className={legendClasses.ul.join(' ')} aria-label='Legend items'>
                {legendListItems}
              </ul>
            )}

            {hasCityStyleLegend && (
              <>
                <hr />
                <div className={legendClasses.div.join(' ') || ''}>
                  {config.visual.cityStyleLabel && (
                    <div>
                      <svg>
                        <Group
                          top={
                            config.visual.cityStyle === 'pin' ? 19 : config.visual.cityStyle === 'triangle' ? 13 : 11
                          }
                          left={10}
                        >
                          {cityStyleShapes[config.visual.cityStyle.toLowerCase()]}
                        </Group>
                      </svg>
                      <p>{config.visual.cityStyleLabel}</p>
                    </div>
                  )}

                  {config.visual.additionalCityStyles.map(
                    ({ shape, label }, index) =>
                      label && (
                        <div key={`additional-city-style-${index}-${shape}`}>
                          <svg>
                            <Group top={shape === 'Pin' ? 19 : shape === 'Triangle' ? 13 : 11} left={10}>
                              {cityStyleShapes[shape.toLowerCase()]}
                            </Group>
                          </svg>
                          <p>{label}</p>
                        </div>
                      )
                  )}
                </div>
              </>
            )}
            {hasMapLegend && runtimeLegend.disabledAmt > 0 && (
              <Button className={legendClasses.showAllButton.join(' ')} onClick={handleReset}>
                Show All
              </Button>
            )}

            {bubbleLegendNodes}
          </section>
        </aside>
        {config.hexMap?.shapeGroups?.length > 0 && config.hexMap.type === 'shapes' && config.general.displayAsHex && (
          <LegendItemHex runtimeLegend={runtimeLegend} viewport={viewport} />
        )}
      </div>
    </ErrorBoundary>
  )
})

export default Legend
