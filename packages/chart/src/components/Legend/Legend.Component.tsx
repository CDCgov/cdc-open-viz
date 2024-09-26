import parse from 'html-react-parser'
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend'
import LegendShape from '@cdc/core/components/LegendShape'
import Button from '@cdc/core/components/elements/Button'
import useLegendClasses from '../../hooks/useLegendClasses'
import { useHighlightedBars } from '../../hooks/useHighlightedBars'
import { handleLineType } from '../../helpers/handleLineType'

import { getMarginTop, getGradientConfig, getMarginBottom } from './helpers/index'
import { Line } from '@visx/shape'
import { Label } from '../../types/Label'
import { ChartConfig } from '../../types/ChartConfig'
import { ColorScale } from '../../types/ChartContext'
import { forwardRef, useState } from 'react'
import LegendSuppression from './Legend.Suppression'
import LegendGradient from '@cdc/core/components/Legend/Legend.Gradient'
import { DimensionsType } from '@cdc/core/types/Dimensions'

export interface LegendProps {
  colorScale: ColorScale
  config: ChartConfig
  currentViewport: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
  formatLabels: (labels: Label[]) => Label[]
  highlight: Function
  highlightReset: Function
  ref: React.Ref<() => void>
  seriesHighlight: string[]
  skipId: string
  dimensions: DimensionsType // for responsive width legend
  getTextWidth: (text: string, font: string) => string
}

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */
const Legend: React.FC<LegendProps> = forwardRef(
  (
    {
      config,
      colorScale,
      seriesHighlight,
      highlight,
      highlightReset,
      currentViewport,
      formatLabels,
      skipId = 'legend',
      dimensions,
      getTextWidth
    },
    ref
  ) => {
    const { innerClasses, containerClasses } = useLegendClasses(config)
    const { runtime, legend } = config

    const [hasSuppression, setHasSuppression] = useState(false)

    const isBottomOrSmallViewport =
      legend?.position === 'bottom' || (['sm', 'xs', 'xxs'].includes(currentViewport) && !legend.hide)

    const legendClasses = {
      marginBottom: getMarginBottom(isBottomOrSmallViewport, config),

      marginTop:
        isBottomOrSmallViewport && config.orientation === 'horizontal'
          ? `${config.yAxis.label && config.isResponsiveTicks ? config.dynamicMarginTop : config.runtime.xAxis.size}px`
          : getMarginTop(isBottomOrSmallViewport, config.brush.active, legend)
    }

    const { HighLightedBarUtils } = useHighlightedBars(config)
    let highLightedLegendItems = HighLightedBarUtils.findDuplicates(config.highlightedBarValues)
    if (!legend) return null
    let legendElement = (
      <aside
        ref={ref}
        style={legendClasses}
        id={skipId || 'legend'}
        className={containerClasses.join(' ')}
        role='region'
        aria-label='legend'
        tabIndex={0}
      >
        {legend.label && <h3>{parse(legend.label)}</h3>}
        {legend.description && <p>{parse(legend.description)}</p>}
        <LegendGradient
          getTextWidth={getTextWidth}
          config={config}
          {...getGradientConfig(config, formatLabels, colorScale)}
          dimensions={dimensions}
          currentViewport={currentViewport}
        />

        <LegendOrdinal scale={colorScale} itemDirection='row' labelMargin='0 20px 0 0' shapeMargin='0 10px 0'>
          {labels => {
            return (
              <>
                <div className={innerClasses.join(' ')}>
                  {formatLabels(labels as Label[]).map((label, i) => {
                    let className = ['legend-item', `legend-text--${label.text.replace(' ', '').toLowerCase()}`]
                    let itemName = label.datum

                    // Filter excluded data keys from legend
                    if (config.exclusions.active && config.exclusions.keys?.includes(itemName)) {
                      return null
                    }

                    if (runtime.seriesLabels) {
                      let index = config.runtime.seriesLabelsAll.indexOf(itemName)
                      itemName = config.runtime.seriesKeys[index]

                      if (runtime?.forecastingSeriesKeys?.length > 0) {
                        itemName = label.text
                      }
                    }

                    if (seriesHighlight.length > 0 && false === seriesHighlight.includes(itemName)) {
                      className.push('inactive')
                    }

                    if (config.legend.style === 'gradient') {
                      return <></>
                    }

                    return (
                      <LegendItem
                        className={className.join(' ')}
                        tabIndex={0}
                        key={`legend-quantile-${i}`}
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            e.preventDefault()
                            highlight(label)
                          }
                        }}
                        onClick={e => {
                          e.preventDefault()
                          highlight(label)
                        }}
                        role='button'
                      >
                        <div>
                          {config.visualizationType === 'Line' && config.legend.style === 'lines' ? (
                            <svg width={40} height={20}>
                              <Line
                                from={{ x: 10, y: 10 }}
                                to={{ x: 40, y: 10 }}
                                stroke={label.value}
                                strokeWidth={2}
                                strokeDasharray={handleLineType(config.series[i]?.type ? config.series[i]?.type : '')}
                              />
                            </svg>
                          ) : (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <LegendShape
                                shape={config.legend.style === 'boxes' ? 'square' : 'circle'}
                                viewport={currentViewport}
                                margin='0'
                                fill={label.value}
                                display={true}
                              />
                            </div>
                          )}
                        </div>

                        <LegendLabel align='left' margin='0 0 0 4px'>
                          {label.text}
                        </LegendLabel>
                      </LegendItem>
                    )
                  })}

                  {highLightedLegendItems.map((bar, i) => {
                    // if duplicates only return first item
                    let className = 'legend-item'
                    let itemName = bar.legendLabel

                    if (!itemName) return false
                    if (seriesHighlight.length > 0 && false === seriesHighlight.includes(itemName)) {
                      className += ' inactive'
                    }

                    return (
                      <LegendItem
                        className={className}
                        tabIndex={0}
                        key={`legend-quantile-${i}`}
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            e.preventDefault()
                            highlight(bar.legendLabel)
                          }
                        }}
                        onClick={e => {
                          e.preventDefault()
                          highlight(bar.legendLabel)
                        }}
                      >
                        <LegendShape
                          shape={config.legend.style === 'boxes' ? 'square' : 'circle'}
                          style={{ borderRadius: '0px' }}
                          fill='transparent'
                          borderColor={bar.color ? bar.color : `rgba(255, 102, 1)`}
                        />{' '}
                        <LegendLabel align='left' margin='0 0 0 4px'>
                          {bar.legendLabel ? bar.legendLabel : bar.value}
                        </LegendLabel>
                      </LegendItem>
                    )
                  })}
                </div>

                <LegendSuppression
                  config={config}
                  isBottomOrSmallViewport={isBottomOrSmallViewport}
                  setHasSuppression={setHasSuppression}
                />
              </>
            )
          }}
        </LegendOrdinal>
        {seriesHighlight.length > 0 && (
          <Button onClick={labels => highlightReset(labels)} style={{ marginTop: '1rem' }}>
            Reset
          </Button>
        )}
      </aside>
    )
    // If the legend contains the absolutely-positioned suppression info box it needs a 30px tall div to push remaining content down
    if (hasSuppression) {
      legendElement = [legendElement, <div className='legend-suppression-spacer'></div>]
    }
    return legendElement
  }
)

export default Legend
