//TODO: Move legends to core
import { forwardRef, useContext } from 'react'
import parse from 'html-react-parser'

//types
import { DimensionsType } from '@cdc/core/types/Dimensions'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import LegendShape from '@cdc/core/components/LegendShape'
import LegendGradient from '@cdc/core/components/Legend/Legend.Gradient'
import LegendItemHex from './LegendItem.Hex'
import Button from '@cdc/core/components/elements/Button'

import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import ConfigContext from '../../../context'
import { PatternLines, PatternCircles, PatternWaves } from '@visx/pattern'
import { GlyphStar, GlyphTriangle, GlyphDiamond, GlyphSquare, GlyphCircle } from '@visx/glyph'
import { Group } from '@visx/group'
import './index.scss'
import { type ViewPort } from '@cdc/core/types/ViewPort'
import { isBelowBreakpoint, isMobileHeightViewport } from '@cdc/core/helpers/viewports'
import { displayDataAsText } from '@cdc/core/helpers/displayDataAsText'
import { toggleLegendActive } from '@cdc/map/src/helpers/toggleLegendActive'
import { resetLegendToggles } from '../../../helpers'

const LEGEND_PADDING = 30

type LegendProps = {
  skipId: string
  dimensions: DimensionsType
  containerWidthPadding: number
  currentViewport: ViewPort
}

const Legend = forwardRef<HTMLDivElement, LegendProps>((props, ref) => {
  const { skipId, containerWidthPadding } = props
  const { isEditor, dimensions, currentViewport } = useContext(ConfigContext)

  const {
    runtimeFilters,
    runtimeLegend,
    setAccessibleStatus,
    setRuntimeLegend,
    state,
    currentViewport: viewport,
    mapId
  } = useContext(ConfigContext)

  const { legend } = state
  const isLegendGradient = legend.style === 'gradient'
  const boxDynamicallyHidden = isBelowBreakpoint('md', currentViewport)
  const legendWrapping =
    (legend.position === 'left' || legend.position === 'right') && isBelowBreakpoint('md', currentViewport)
  const legendOnBottom = legend.position === 'bottom' || legendWrapping
  const needsTopMargin = legend.hideBorder && legendOnBottom

  const getFormattedLegendItems = () => {
    try {
      if (!runtimeLegend.items) Error('No runtime legend data')
      return runtimeLegend.items.map((entry, idx) => {
        const entryMax = displayDataAsText(entry.max, 'primary', state)

        const entryMin = displayDataAsText(entry.min, 'primary', state)
        let formattedText = `${entryMin}${entryMax !== entryMin ? ` - ${entryMax}` : ''}`

        // If interval, add some formatting
        if (legend.type === 'equalinterval' && idx !== runtimeLegend.length - 1) {
          formattedText = `${entryMin} - < ${entryMax}`
        }

        if (legend.type === 'category') {
          formattedText = displayDataAsText(entry.value, 'primary', state)
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
      console.error('Error in getFormattedLegendItems', e)
      return []
    }
  }

  const legendList = (patternsOnly = false) => {
    const formattedItems = patternsOnly ? [] : getFormattedLegendItems()
    const patternsOnlyFont = isMobileHeightViewport(currentViewport) ? '12px' : '14px'
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
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <li
          className={handleListItemClass()}
          key={idx}
          title={`Legend item ${item.label} - Click to disable`}
          onClick={() => toggleLegendActive(idx, item.label, runtimeLegend, setRuntimeLegend, setAccessibleStatus)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault()
              toggleLegendActive(idx, item.label, runtimeLegend, setRuntimeLegend, setAccessibleStatus)
            }
          }}
          tabIndex={0}
        >
          <LegendShape shape={state.legend.style === 'boxes' ? 'square' : 'circle'} fill={item.color} />
          <span>{item.label}</span>
        </li>
      )
    })

    if (state.map.patterns) {
      // loop over map patterns
      state.map.patterns.map((patternData, patternDataIndex) => {
        const { pattern, dataKey, size } = patternData
        let defaultPatternColor = 'black'
        const sizes = {
          small: '8',
          medium: '10',
          large: '12'
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
                      radius={0.5}
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

  const { legendClasses } = useDataVizClasses(state, viewport)

  const handleReset = e => {
    const legend = ref.current
    if (e) {
      e.preventDefault()
    }
    resetLegendToggles(runtimeLegend, setRuntimeLegend)
    setAccessibleStatus('Legend has been reset, please reference the data table to see updated values.')
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

  const cityStyleShapes = {
    pin: pin,
    circle: <GlyphCircle color='#000' size={150} />,
    square: <GlyphSquare color='#000' size={150} />,
    diamond: <GlyphDiamond color='#000' size={150} />,
    star: <GlyphStar color='#000' size={150} />,
    triangle: <GlyphTriangle color='#000' size={150} />
  }

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
                {legend.title && <h3 className={legendClasses.title.join(' ') || ''}>{parse(legend.title)}</h3>}
                {legend.dynamicDescription === false && legend.description && (
                  <p className={legendClasses.description.join(' ') || ''}>{parse(legend.description)}</p>
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
              config={state}
            />
            {!!legendListItems.length && (
              <ul className={legendClasses.ul.join(' ') || ''} aria-label='Legend items'>
                {legendListItems}
              </ul>
            )}
            {(state.visual.additionalCityStyles.some(c => c.label) || state.visual.cityStyleLabel) && (
              <>
                <hr />
                <div className={legendClasses.div.join(' ') || ''}>
                  {state.visual.cityStyleLabel && (
                    <div>
                      <svg>
                        <Group
                          top={state.visual.cityStyle === 'pin' ? 19 : state.visual.cityStyle === 'triangle' ? 13 : 11}
                          left={10}
                        >
                          {cityStyleShapes[state.visual.cityStyle.toLowerCase()]}
                        </Group>
                      </svg>
                      <p>{state.visual.cityStyleLabel}</p>
                    </div>
                  )}

                  {state.visual.additionalCityStyles.map(
                    ({ shape, label }) =>
                      label && (
                        <div>
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
        {state.hexMap.shapeGroups?.length > 0 && state.hexMap.type === 'shapes' && state.general.displayAsHex && (
          <LegendItemHex state={state} runtimeLegend={runtimeLegend} viewport={viewport} />
        )}
      </div>
    </ErrorBoundary>
  )
})

export default Legend
