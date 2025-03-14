import parse from 'html-react-parser'
import React from 'react'
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend'
import LegendShape from '@cdc/core/components/LegendShape'
import Button from '@cdc/core/components/elements/Button'
import { getLegendClasses } from './helpers/getLegendClasses'
import { useHighlightedBars } from '../../hooks/useHighlightedBars'
import { getMarginTop, getGradientConfig, getMarginBottom } from './helpers/index'
import { Label } from '../../types/Label'
import { ChartConfig, ViewportSize } from '../../types/ChartConfig'
import { ColorScale } from '../../types/ChartContext'
import { forwardRef } from 'react'
import LegendSuppression from './Legend.Suppression'
import LegendGradient from '@cdc/core/components/Legend/Legend.Gradient'
import { DimensionsType } from '@cdc/core/types/Dimensions'
import { isLegendWrapViewport } from '@cdc/core/helpers/viewports'
import LegendLineShape from './LegendLine.Shape'
import LegendSubgroup from './Legend.Subgroup'

const LEGEND_PADDING = 36

export interface LegendProps {
  colorScale: ColorScale
  config: ChartConfig
  currentViewport: ViewportSize
  formatLabels: (labels: Label[]) => Label[]
  highlight: Function
  handleShowAll: Function
  ref: React.Ref<() => void>
  seriesHighlight: string[]
  skipId: string
  dimensions: DimensionsType // for responsive width legend
  transformedData: any
}

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */
const Legend: React.FC<LegendProps> = forwardRef(
  (
    {
      config,
      colorScale,
      seriesHighlight,
      highlight,
      handleShowAll,
      currentViewport,
      formatLabels,
      skipId = 'legend',
      dimensions,
      transformedData: data
    },
    ref
  ) => {
    const { innerClasses, containerClasses } = getLegendClasses(config)
    const { runtime, legend } = config

    const isLegendBottom =
      legend?.position === 'bottom' ||
      (isLegendWrapViewport(currentViewport) && !legend.hide && legend?.position !== 'top')

    const legendClasses = {
      marginBottom: getMarginBottom(isLegendBottom, config),
      marginTop: getMarginTop(isLegendBottom, config)
    }

    const { HighLightedBarUtils } = useHighlightedBars(config)
    let highLightedLegendItems = HighLightedBarUtils.findDuplicates(config.highlightedBarValues)
    if (!legend) return null
    return (
      <aside
        ref={ref}
        style={legendClasses}
        id={skipId || 'legend'}
        className={containerClasses.join(' ')}
        role='region'
        aria-label='legend'
        tabIndex={0}
      >
        {(legend.label || legend.description) && (
          <div className={legend.description ? 'mb-3' : 'mb-2'}>
            {legend.label && <h3 className='fw-bold'>{parse(legend.label)}</h3>}
            {legend.description && <p className='mt-2'>{parse(legend.description)}</p>}
          </div>
        )}
        <LegendGradient
          config={config}
          {...getGradientConfig(config, formatLabels, colorScale)}
          dimensions={dimensions}
          parentPaddingToSubtract={legend.hideBorder ? 0 : LEGEND_PADDING}
        />

        <LegendSubgroup data={data} config={config} colorScale={colorScale} formatLabels={formatLabels} />
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

                    if (seriesHighlight.length) {
                      if (!seriesHighlight.includes(itemName)) {
                        className.push('inactive')
                      } else className.push('highlighted')
                    }

                    if (config.legend.style === 'gradient' || config.legend.groupBy) {
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
                        <>
                          {config.visualizationType === 'Line' && config.legend.style === 'lines' ? (
                            <React.Fragment>
                              <LegendLineShape index={i} label={label} config={config} />
                            </React.Fragment>
                          ) : (
                            <>
                              <LegendShape
                                shape={config.legend.style === 'boxes' ? 'square' : 'circle'}
                                fill={label.value}
                              />
                            </>
                          )}
                        </>
                        <LegendLabel align='left' className='m-0'>
                          {parse(label.text)}
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
                        <LegendLabel align='left'>{bar.legendLabel ? bar.legendLabel : bar.value}</LegendLabel>
                      </LegendItem>
                    )
                  })}
                </div>

                <LegendSuppression config={config} isLegendBottom={isLegendBottom} />
              </>
            )
          }}
        </LegendOrdinal>
        {seriesHighlight.length > 0 && (
          <Button onClick={labels => handleShowAll(labels)} style={{ marginTop: '1rem' }}>
            Show All
          </Button>
        )}
      </aside>
    )
  }
)

export default Legend
