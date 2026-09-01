import parse from 'html-react-parser'
import React, { useMemo } from 'react'
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
import LegendGroup from './LegendGroup'
import LegendValueRange from './LegendValueRange'
import { getHorizonLayerColors, getHorizonMaxValue } from '../../components/HorizonChart/helpers/getHorizonLayerColors'
import { getSeriesWithData } from '../../helpers/dataHelpers'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'
import { processMarkupVariables } from '@cdc/core/helpers/markupProcessor'

const LEGEND_PADDING = 36

interface LegendProps {
  colorScale: ColorScale
  config: ChartConfig
  currentViewport: ViewportSize
  formatLabels: (labels: Label[]) => Label[]
  formatNumber?: (value: number, axis?: string) => string
  highlight: Function
  handleShowAll: Function
  ref: React.Ref<() => void>
  seriesHighlight: string[]
  skipId: string
  dimensions: DimensionsType // for responsive width legend
  transformedData: any
  interactionLabel: string
}

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
      formatNumber,
      skipId = 'legend',
      dimensions,
      transformedData: data,
      interactionLabel = ''
    },
    ref
  ) => {
    const { innerClasses, containerClasses } = getLegendClasses(config)
    const { runtime, legend } = config
    const { series } = runtime
    const processedLegendText = useMemo(() => {
      if (!config.enableMarkupVariables || !config.markupVariables?.length) {
        return {
          label: legend?.label,
          description: legend?.description
        }
      }

      const markupOptions = {
        isEditor: false,
        filters: config.filters || [],
        locale: config.locale,
        dataMetadata: config.dataMetadata
      }

      return {
        label: legend?.label
          ? processMarkupVariables(legend.label, data || config.data || [], config.markupVariables, markupOptions)
              .processedContent
          : legend?.label,
        description: legend?.description
          ? processMarkupVariables(legend.description, data || config.data || [], config.markupVariables, markupOptions)
              .processedContent
          : legend?.description
      }
    }, [
      config.enableMarkupVariables,
      config.markupVariables,
      config.filters,
      config.locale,
      config.dataMetadata,
      config.data,
      data,
      legend?.label,
      legend?.description
    ])

    const seriesWithData = getSeriesWithData(config)
    // For Radar charts, seriesWithData contains dimension keys but legend shows entity names
    // so we skip the series filter for radar charts
    const isRadarChart = config.visualizationType === 'Radar'
    const dontFilterLegendItems = !series.length || legend.unified || !seriesWithData.length || isRadarChart

    const isLegendBottom =
      legend?.position === 'bottom' ||
      (isLegendWrapViewport(currentViewport) && !legend.hide && legend?.position !== 'top')

    const legendClasses = {
      marginBottom: getMarginBottom(isLegendBottom, config),
      marginTop: getMarginTop(isLegendBottom, config)
    }

    const { HighLightedBarUtils } = useHighlightedBars(config)
    let highLightedLegendItems = HighLightedBarUtils.findDuplicates(config.highlightedBarValues)

    const horizonLegendData = useMemo(() => {
      if (config.visualizationType !== 'Horizon Chart') {
        return null
      }
      const numLayers = config.horizon?.numLayers || 4
      const runtimeSeriesKeys = config.runtime?.seriesKeys
      const seriesKeys =
        (Array.isArray(runtimeSeriesKeys) && runtimeSeriesKeys.length > 0
          ? runtimeSeriesKeys
          : config.series?.map(s => s.dataKey)) || []
      const maxValue = getHorizonMaxValue(data, seriesKeys)
      const layerColors = getHorizonLayerColors(config, numLayers)

      return { numLayers, maxValue, layerColors }
    }, [
      config.visualizationType,
      config.horizon?.numLayers,
      config.runtime?.seriesKeys,
      config.series,
      config.general?.palette?.name,
      data
    ])

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
        {(processedLegendText.label || processedLegendText.description) && (
          <div className={processedLegendText.description ? 'mb-3' : 'mb-2'}>
            {processedLegendText.label && <h3 className='fw-bold cove-prose'>{parse(processedLegendText.label)}</h3>}
            {processedLegendText.description && (
              <p className='mt-2 cove-prose'>{parse(processedLegendText.description)}</p>
            )}
          </div>
        )}
        <LegendGradient
          config={config}
          {...getGradientConfig(config, formatLabels, colorScale)}
          dimensions={dimensions}
          parentPaddingToSubtract={legend.hideBorder ? 0 : LEGEND_PADDING}
        />
        <LegendGroup formatLabels={formatLabels} />

        {/* Value Range Legend for Horizon Chart (and future chart types) */}
        {horizonLegendData && (
          <LegendValueRange
            maxValue={horizonLegendData.maxValue}
            numRanges={horizonLegendData.numLayers}
            colors={horizonLegendData.layerColors}
            formatNumber={formatNumber}
            innerClasses={innerClasses}
            shape={config.legend.style === 'boxes' ? 'square' : 'circle'}
            onClick={undefined}
            reverseLabelOrder={config.legend.reverseLabelOrder}
          />
        )}

        <LegendOrdinal scale={colorScale} itemDirection='row' labelMargin='0 20px 0 0' shapeMargin='0 10px 0'>
          {labels => {
            return (
              <>
                <div className={innerClasses.join(' ')}>
                  {formatLabels(labels as Label[])
                    .filter(label => dontFilterLegendItems || seriesWithData.includes(label.datum))
                    .map((label, i) => {
                      let className = [
                        'legend-item',
                        'legend-item--interactive',
                        `legend-text--${label.text.replace(' ', '').toLowerCase()}`
                      ]
                      let itemName = label.datum

                      // Filter excluded data keys from legend
                      if (config.exclusions.active && config.exclusions.keys?.includes(itemName)) {
                        return null
                      }

                      if (runtime?.forecastingSeriesKeys?.length > 0) {
                        itemName = label.datum
                      } else if (runtime.seriesLabels) {
                        let index = config.runtime.seriesLabelsAll.indexOf(itemName)
                        itemName = config.runtime.seriesKeys[index]
                      }

                      if (seriesHighlight.length) {
                        if (!seriesHighlight.includes(itemName)) {
                          className.push('inactive')
                        } else className.push('highlighted')
                      }

                      if (
                        config.legend.style === 'gradient' ||
                        config.legend.groupBy ||
                        config.visualizationType === 'Horizon Chart'
                      ) {
                        return null
                      }

                      return (
                        <LegendItem
                          className={className.join(' ')}
                          tabIndex={0}
                          key={`legend-quantile-${i}`}
                          onKeyDown={e => {
                            if (e.key === 'Enter') {
                              e.preventDefault()
                              publishAnalyticsEvent({
                                vizType: config?.type,
                                vizSubType: getVizSubType(config),
                                vizTitle: getVizTitle(config),
                                eventType: `chart_legend_item_toggled` as any,
                                eventAction: 'keydown',
                                eventLabel: interactionLabel,
                                specifics:
                                  config.visualizationType === 'Bar'
                                    ? `label: ${label.text}, orientation: ${
                                        config.orientation === 'horizontal' ? 'horizontal' : 'vertical'
                                      }, mode: ${legend.behavior}`
                                    : `label: ${label.text}, mode: ${legend.behavior}`
                              })
                              highlight(label)
                            }
                          }}
                          onClick={e => {
                            e.preventDefault()
                            publishAnalyticsEvent({
                              vizType: config?.type,
                              vizSubType: getVizSubType(config),
                              eventType: `chart_legend_item_toggled` as any,
                              eventAction: 'click',
                              eventLabel: interactionLabel,
                              specifics:
                                config.visualizationType === 'Bar'
                                  ? `label: ${label.text}, orientation: ${
                                      config.orientation === 'horizontal' ? 'horizontal' : 'vertical'
                                    }, mode: ${legend.behavior}`
                                  : `label: ${label.text}, mode: ${legend.behavior}`,

                              vizTitle: getVizTitle(config)
                            })
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

                {seriesHighlight.length > 0 && (
                  <Button size='sm' onClick={labels => handleShowAll(labels)} style={{ marginTop: '1rem' }}>
                    Show All
                  </Button>
                )}

                <LegendSuppression config={config} isLegendBottom={isLegendBottom} />

                {/* Pattern Legend Items */}
                {config.legend.patterns && Object.keys(config.legend.patterns).length > 0 && (
                  <div
                    className={`legend-patterns d-flex ${
                      ['top', 'bottom'].includes(config.legend.position) ? 'flex-row flex-wrap' : 'flex-column'
                    }`}
                  >
                    {Object.entries(config.legend.patterns).map(([key, pattern]) => {
                      const patternId = `legend-pattern-${key}`
                      const pColor = (pattern as any)?.color || '#666666'
                      const patternSize = (pattern as any)?.patternSize ?? 10

                      return (
                        <LegendItem
                          key={patternId}
                          className='legend-item legend-item--pattern d-flex align-items-center'
                          tabIndex={0}
                          role='button'
                        >
                          <LegendShape
                            shape={config.legend.style === 'boxes' ? 'square' : 'circle'}
                            fill='white'
                            patternInfo={{
                              pattern: pattern.shape || 'circles',
                              patternId,
                              size: patternSize,
                              color: pColor
                            }}
                          />
                          <LegendLabel align='left' className='m-0'>
                            {parse(String((pattern as any)?.label || key))}
                          </LegendLabel>
                        </LegendItem>
                      )
                    })}
                  </div>
                )}
              </>
            )
          }}
        </LegendOrdinal>
      </aside>
    )
  }
)

export default Legend
