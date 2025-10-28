//TODO: Move legends to core
import { forwardRef, useContext, useMemo } from 'react'
import parse from 'html-react-parser'
import { processMarkupVariables } from '@cdc/core/helpers/markupProcessor'

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
import { resetLegendToggles } from '../../../helpers'
import { MapContext } from '../../../types/MapContext'
import LegendGroup from './LegendGroup/Legend.Group'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'

const LEGEND_PADDING = 30

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
    runtimeLegend
  } = useContext<MapContext>(ConfigContext)

  const dispatch = useContext(MapDispatchContext)

  const { legend } = config
  const isLegendGradient = legend.style === 'gradient'
  const boxDynamicallyHidden = isBelowBreakpoint('md', viewport)
  const legendWrapping =
    (legend.position === 'left' || legend.position === 'right') && isBelowBreakpoint('md', viewport)
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

        // If interval, add some formatting
        if (legend.type === 'equalinterval' && idx !== runtimeLegend.length - 1) {
          formattedText = `${entryMin} - < ${entryMax}`
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

        if (entry.hasOwnProperty('special')) {
          legendLabel = entry.label || entry.value
        }

        return {
          color: entry.color,
          label: parse(legendLabel),
          disabled: entry.disabled,
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
    const patternsOnlyFont = isMobileFontViewport(viewport) ? '12px' : '14px'
    const hasDisabledItems = formattedItems.some(item => item.disabled)
    let legendItems

    legendItems = formattedItems.map((item, idx) => {
      const handleListItemClass = () => {
        let classes = ['legend-container__li', 'd-flex', 'align-items-center']
        if (item.disabled) classes.push('legend-container__li--disabled')
        else if (hasDisabledItems) classes.push('legend-container__li--not-disabled')
        if (item.special) classes.push('legend-container__li--special-class')
        return classes.join(' ')
      }

      return (
        <li
          className={handleListItemClass()}
          key={idx}
          title={`Legend item ${item.label} - Click to disable`}
          onClick={() => {
            toggleLegendActive(idx, item.label, runtimeLegend, dispatch)
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
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault()
              toggleLegendActive(idx, item.label, runtimeLegend, dispatch)
              publishAnalyticsEvent({
                vizType: config.type,
                vizSubType: getVizSubType(config),
                eventType: `map_legend_item_toggled`,
                eventAction: 'keydown',
                eventLabel: `${interactionLabel}`,
                vizTitle: getVizTitle(config),
                specifics: `mode: isolate, label: ${item.label}`
              })
            }
          }}
          tabIndex={0}
          role='button'
        >
          <LegendShape shape={config.legend.style === 'boxes' ? 'square' : 'circle'} fill={item.color} />
          <span>{item.label}</span>
        </li>
      )
    })

    if (config.map.patterns) {
      // loop over map patterns
      config.map.patterns.map((patternData, patternDataIndex) => {
        const { pattern, dataKey, size } = patternData
        let defaultPatternColor = 'black'
        const sizes = {
          small: 8,
          medium: 10,
          large: 12
        }

        const legendSize = 16

        legendItems.push(
          <>
            <li
              className={`legend-container__li legend-container__li--geo-pattern`}
              aria-label='You are on a pattern button. We dont support toggling patterns on this legend at the moment, but provide the area as being focusable for congruity.'
              tabIndex={0}
            >
              <span className='legend-item' style={{ border: 'unset' }}>
                <svg width={legendSize} height={legendSize}>
                  {pattern === 'waves' && (
                    <PatternWaves
                      id={`${mapId}--${dataKey}--${patternDataIndex}`}
                      height={sizes[size] ?? 10}
                      width={sizes[size] ?? 10}
                      fill={defaultPatternColor}
                      strokeWidth={0.25}
                    />
                  )}
                  {pattern === 'circles' && (
                    <PatternCircles
                      id={`${mapId}--${dataKey}--${patternDataIndex}`}
                      height={sizes[size] ?? 10}
                      width={sizes[size] ?? 10}
                      fill={defaultPatternColor}
                      radius={1.25}
                    />
                  )}
                  {pattern === 'lines' && (
                    <PatternLines
                      id={`${mapId}--${dataKey}--${patternDataIndex}`}
                      height={sizes[size] ?? 6}
                      width={sizes[size] ?? 10}
                      stroke={defaultPatternColor}
                      strokeWidth={0.75}
                      orientation={['diagonalRightToLeft']}
                    />
                  )}
                  <circle
                    id={dataKey}
                    fill={`url(#${mapId}--${dataKey}--${patternDataIndex})`}
                    r={legendSize / 2}
                    cx={legendSize / 2}
                    cy={legendSize / 2}
                    stroke='#0000004d'
                    strokeWidth={1}
                  />
                </svg>
              </span>
              <p style={{ lineHeight: '22.4px', fontSize: patternsOnly ? patternsOnlyFont : '16px' }}>
                {patternData.label || patternData.dataValue || ''}
              </p>
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

  const shouldRenderLegendList = legendListItems.length > 0 && ['Select Option', ''].includes(config.legend.groupBy)

  return (
    <ErrorBoundary component='Sidebar'>
      <div className={`legends ${needsTopMargin ? 'mt-4' : ''}`}>
        <aside
          id={skipId || 'legend'}
          className={legendClasses.aside.join(' ') || ''}
          role='region'
          aria-label='Legend'
          tabIndex={isLegendGradient ? -1 : 0}
          ref={ref}
        >
          <section className={legendClasses.section.join(' ') || ''} aria-label='Map Legend'>
            {(legend.title || legend.description || legend.dynamicDescription) && (
              <div className='mb-3'>
                {legend.title && (
                  <h3 className={legendClasses.title.join(' ') || ''}>
                    {parse(
                      config.enableMarkupVariables && config.markupVariables?.length > 0
                        ? processMarkupVariables(legend.title, config.data || [], config.markupVariables, {
                            isEditor: false,
                            filters: config.filters || []
                          }).processedContent
                        : legend.title
                    )}
                  </h3>
                )}
                {legend.dynamicDescription === false && legend.description && (
                  <p className={legendClasses.description.join(' ') || ''}>
                    {parse(
                      config.enableMarkupVariables && config.markupVariables?.length > 0
                        ? processMarkupVariables(legend.description, config.data || [], config.markupVariables, {
                            isEditor: false,
                            filters: config.filters || []
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

            <LegendGradient
              labels={getFormattedLegendItems()?.map(item => item?.label) ?? []}
              colors={getFormattedLegendItems()?.map(item => item?.color) ?? []}
              dimensions={dimensions}
              parentPaddingToSubtract={
                containerWidthPadding + (legend.hideBorder || boxDynamicallyHidden ? 0 : LEGEND_PADDING)
              }
              config={config}
            />
            <LegendGroup legendItems={getFormattedLegendItems()} />

            {shouldRenderLegendList && (
              <ul className={legendClasses.ul.join(' ')} aria-label='Legend items'>
                {legendListItems}
              </ul>
            )}

            {((config.visual.additionalCityStyles && config.visual.additionalCityStyles.some(c => c.label)) ||
              config.visual.cityStyleLabel) && (
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
            {runtimeLegend.disabledAmt > 0 && (
              <Button className={legendClasses.showAllButton.join(' ')} onClick={handleReset}>
                Show All
              </Button>
            )}
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
