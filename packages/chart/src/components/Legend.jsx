import React, { useContext, useEffect } from 'react'
import ConfigContext from '../ConfigContext'
import parse from 'html-react-parser'
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend'
import LegendCircle from '@cdc/core/components/LegendCircle'

import useLegendClasses from './../hooks/useLegendClasses'
import { useHighlightedBars } from '../hooks/useHighlightedBars'
import { Line } from '@visx/shape'

// * FILE REVIEW *
// TODO: fix eslint-disable jsxa11y issues

// * ADDITIONAL NOTES *
// > recently removed dynamic legend items as they weren't used
// > recently removed boxplots, they don't provide any legend settings

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */
const Legend = () => {
  // prettier-ignore
  const {
    config,
    legend,
    colorScale,
    seriesHighlight,
    highlight,
    twoColorPalette,
    tableData,
    highlightReset,
    transformedData: data,
    colorPalettes,
    currentViewport,
    handleLineType
  } = useContext(ConfigContext)

  const { innerClasses, containerClasses } = useLegendClasses(config)
  const { visualizationType, visualizationSubType, series, runtime, orientation } = config
  // create fn to reverse labels while legend is Bottom.  Legend-right , legend-left works by default.
  const reverseLabels = labels => (config.legend.reverseLabelOrder && config.legend.position === 'bottom' ? labels.reverse() : labels)

  const createLegendLabels = defaultLabels => {
    const colorCode = config.legend?.colorCode
    if (visualizationType === 'Deviation Bar') {
      const [belowColor, aboveColor] = twoColorPalette[config.twoColor.palette]
      const labelBelow = {
        datum: 'X',
        index: 0,
        text: `Below ${config.xAxis.targetLabel}`,
        value: belowColor
      }
      const labelAbove = {
        datum: 'X',
        index: 1,
        text: `Above ${config.xAxis.targetLabel}`,
        value: aboveColor
      }

      return reverseLabels([labelBelow, labelAbove])
    }
    if (visualizationType === 'Bar' && visualizationSubType === 'regular' && colorCode && series?.length === 1) {
      let palette = colorPalettes[config.palette]

      while (tableData.length > palette.length) {
        palette = palette.concat(palette)
      }
      palette = palette.slice(0, data.length)
      //store unique values to Set by colorCode
      const set = new Set()

      tableData.forEach(d => set.add(d[colorCode]))

      // create labels with unique values
      const uniqueLabels = Array.from(set).map((val, i) => {
        const newLabel = {
          datum: val,
          index: i,
          text: val,
          value: palette[i]
        }
        return newLabel
      })

      return reverseLabels(uniqueLabels)
    }

    // get forecasting items inside of combo
    if (runtime?.forecastingSeriesKeys?.length > 0) {
      let seriesLabels = []

      //store unique values to Set by colorCode

      // loop through each stage/group/area on the chart and create a label
      config.runtime?.forecastingSeriesKeys?.map((outerGroup, index) => {
        return outerGroup?.stages?.map((stage, index) => {
          let colorValue = colorPalettes[stage.color]?.[2] ? colorPalettes[stage.color]?.[2] : '#ccc'

          const newLabel = {
            datum: stage.key,
            index: index,
            text: stage.key,
            value: colorValue
          }

          seriesLabels.push(newLabel)
        })
      })

      // loop through bars for now to meet requirements.
      config.runtime.barSeriesKeys &&
        config.runtime.barSeriesKeys.forEach((bar, index) => {
          let colorValue = colorPalettes[config.palette][index] ? colorPalettes[config.palette][index] : '#ccc'

          const newLabel = {
            datum: bar,
            index: index,
            text: bar,
            value: colorValue
          }

          seriesLabels.push(newLabel)
        })

      return reverseLabels(seriesLabels)
    }

    // DEV-4161: replaceable series name in the legend
    const hasNewSeriesName = config.series.map(s => s.name).filter(item => item).length > 0
    if (hasNewSeriesName) {
      let palette = colorPalettes[config.palette]

      while (tableData.length > palette.length) {
        palette = palette.concat(palette)
      }

      palette = palette.slice(0, data.length)
      //store unique values to Set by colorCode
      const set = new Set()

      config.series.forEach(d => {
        set.add(d['name'] ? d['name'] : d['dataKey'])
      })

      // create labels with unique values
      const uniqueLabels = Array.from(set).map((val, i) => {
        const newLabel = {
          datum: val,
          index: i,
          text: val,
          value: palette[i]
        }
        return newLabel
      })

      return reverseLabels(uniqueLabels)
    }

    return reverseLabels(defaultLabels)
  }

  const isBottomOrSmallViewport = legend.position === 'bottom' || ['sm', 'xs', 'xxs'].includes(currentViewport)

  const legendClasses = {
    marginBottom: isBottomOrSmallViewport ? '15px' : '0px',
    marginTop: isBottomOrSmallViewport && orientation === 'horizontal' ? `${config.yAxis.label && config.isResponsiveTicks ? config.dynamicMarginTop : config.runtime.xAxis.size}px` : `0px`
  }

  const { HighLightedBarUtils } = useHighlightedBars(config)

  let highLightedLegendItems = HighLightedBarUtils.findDuplicates(config.highlightedBarValues)
  if (!legend) return null

  return (
    config.visualizationType !== 'Box Plot' && (
      <aside style={legendClasses} id='legend' className={containerClasses.join(' ')} role='region' aria-label='legend' tabIndex={0}>
        {legend.label && <h2>{parse(legend.label)}</h2>}
        {legend.description && <p>{parse(legend.description)}</p>}
        <LegendOrdinal scale={colorScale} itemDirection='row' labelMargin='0 20px 0 0' shapeMargin='0 10px 0'>
          {labels => {
            return (
              <div className={innerClasses.join(' ')}>
                {createLegendLabels(labels).map((label, i) => {
                  let className = 'legend-item'
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
                    className += ' inactive'
                  }

                  return (
                    <LegendItem
                      className={className}
                      tabIndex={0}
                      key={`legend-quantile-${i}`}
                      onKeyPress={e => {
                        if (e.key === 'Enter') {
                          highlight(label)
                        }
                      }}
                      onClick={() => {
                        highlight(label)
                      }}
                    >
                      {config.visualizationType === 'Line' && config.legend.lineMode ? (
                        <svg width={40} height={20}>
                          <Line from={{ x: 10, y: 10 }} to={{ x: 40, y: 10 }} stroke={label.value} strokeWidth={2} strokeDasharray={handleLineType(config.series[i]?.type ? config.series[i]?.type : '')} />
                        </svg>
                      ) : (
                        <LegendCircle fill={label.value} />
                      )}

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
                      onKeyPress={e => {
                        if (e.key === 'Enter') {
                          highlight(bar.legendLabel)
                        }
                      }}
                      onClick={() => {
                        highlight(bar.legendLabel)
                      }}
                    >
                      <LegendCircle fill='transparent' borderColor={bar.color ? bar.color : `rgba(255, 102, 1)`} />{' '}
                      <LegendLabel align='left' margin='0 0 0 4px'>
                        {bar.legendLabel ? bar.legendLabel : bar.value}
                      </LegendLabel>
                    </LegendItem>
                  )
                })}
                {seriesHighlight.length > 0 && (
                  <button className={`legend-reset ${config.theme}`} onClick={labels => highlightReset(labels)} tabIndex={0}>
                    Reset
                  </button>
                )}
              </div>
            )
          }}
        </LegendOrdinal>
      </aside>
    )
  )
}

export default Legend
