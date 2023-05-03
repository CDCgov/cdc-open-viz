import React, { useContext, useEffect } from 'react'
import ConfigContext from '../ConfigContext'
import parse from 'html-react-parser'
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend'
import LegendCircle from '@cdc/core/components/LegendCircle'

import useLegendClasses from './../hooks/useLegendClasses'

const Legend = () => {
  const { config, legend, colorScale, seriesHighlight, highlight, twoColorPalette, highlightReset, setSeriesHighlight, dynamicLegendItems, setDynamicLegendItems, transformedData: data, colorPalettes, rawData, setConfig, currentViewport } = useContext(ConfigContext)

  const { innerClasses, containerClasses } = useLegendClasses(config)

  useEffect(() => {
    if (dynamicLegendItems.length === 0) return

    let itemsToHighlight = dynamicLegendItems.map(item => item.text)

    setSeriesHighlight(itemsToHighlight)

    let colsToKeep = [...itemsToHighlight]
    let tmpLabels = []

    rawData.map(dataItem => {
      let tmp = {}
      colsToKeep.map(col => {
        tmp[col] = isNaN(dataItem[col]) ? dataItem[col] : dataItem[col]
        return null
      })
      return tmp
    })

    colsToKeep.map(col => {
      tmpLabels[col] = col
      return null
    })

    if (dynamicLegendItems.length > 0) {
      setConfig({
        ...config,
        runtime: {
          ...config.runtime,
          seriesKeys: colsToKeep,
          seriesLabels: tmpLabels
        }
      })
    }
  }, [dynamicLegendItems]) // eslint-disable-line

  useEffect(() => {
    if (dynamicLegendItems.length === 0) {
      // loop through all labels and add keys
      let resetSeriesNames = [...config.runtime.seriesLabelsAll]
      let tmpLabels = []
      config.runtime.seriesLabelsAll.map(item => {
        resetSeriesNames.map(col => {
          tmpLabels[col] = col
          return null
        })
        return null
      })

      setConfig({
        ...config,
        runtime: {
          ...config.runtime,
          seriesKeys: config.runtime.seriesLabelsAll,
          seriesLabels: tmpLabels
        }
      })
    }
  }, [dynamicLegendItems]) // eslint-disable-line

  const removeDynamicLegendItem = label => {
    let newLegendItems = dynamicLegendItems.filter(item => item.text !== label.text)
    let newLegendItemsText = newLegendItems.map(item => item.text)
    setDynamicLegendItems(newLegendItems)
    setSeriesHighlight(newLegendItemsText)
  }
  const handleDynamicLegendChange = e => {
    setDynamicLegendItems([...dynamicLegendItems, JSON.parse(e.target.value)])
  }

  const createLegendLabels = defaultLabels => {
    const colorCode = config.legend?.colorCode
    if (config.visualizationType === 'Deviation Bar') {
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

      return [labelBelow, labelAbove]
    }
    if (config.visualizationType === 'Bar' && config.visualizationSubType === 'regular' && colorCode && config.series?.length === 1) {
      let palette = colorPalettes[config.palette]

      while (data.length > palette.length) {
        palette = palette.concat(palette)
      }
      palette = palette.slice(0, data.length)
      //store uniq values to Set by colorCode
      const set = new Set()

      data.forEach(d => set.add(d[colorCode]))

      // create labels with uniq values
      const uniqeLabels = Array.from(set).map((val, i) => {
        const newLabel = {
          datum: val,
          index: i,
          text: val,
          value: palette[i]
        }
        return newLabel
      })

      return uniqeLabels
    }

    if (config.visualizationType === 'Forecasting') {
      //store uniq values to Set by colorCode

      // loop through each stage/group/area on the chart and create a label
      const labels = config.forecastingChart.groups.map((group, index) => {
        let paletteHere = colorPalettes[config.forecastingChart.colors[index]]

        const newLabel = {
          datum: group,
          index: index,
          text: group,
          value: paletteHere[2]
        }
        return newLabel
      })

      // push the bar segment label to the front
      const barLabel = {
        datum: config.forecastingChart.barColumn,
        index: labels.length,
        text: config.forecastingChart.barColumn,
        value: config.forecastingChart.barColor
      }

      if (config.forecastingChart.showBars) {
        labels.unshift(barLabel)
      }

      return labels
    }
    return defaultLabels
  }

  const isBottomOrSmallViewport = config.legend.position === 'bottom' || currentViewport === 'sm' || currentViewport === 'xs' || currentViewport === 'xxs'
  const isHorizontal = config.orientation === 'horizontal'
  const marginTop = isBottomOrSmallViewport && isHorizontal ? `${config.runtime.xAxis.size}px` : '0px'
  const marginBottom = isBottomOrSmallViewport ? '15px' : '0px'

  if (!legend) return null

  if (!legend.dynamicLegend)
    return config.visualizationType !== 'Box Plot' ? (
      <aside style={{ marginTop, marginBottom }} id='legend' className={containerClasses.join(' ')} role='region' aria-label='legend' tabIndex={0}>
        {legend.label && <h2>{parse(legend.label)}</h2>}
        {legend.description && <p>{parse(legend.description)}</p>}
        <LegendOrdinal scale={colorScale} itemDirection='row' labelMargin='0 20px 0 0' shapeMargin='0 10px 0'>
          {labels => (
            <div className={innerClasses.join(' ')}>
              {createLegendLabels(labels).map((label, i) => {
                let legendClasses = ['legend-item']
                let itemName = label.datum
                let forecastingInactive = seriesHighlight.length > 0 && false === seriesHighlight.includes(itemName)

                // Filter excluded data keys from legend
                if (config.exclusions.active && config.exclusions.keys?.includes(itemName)) {
                  return null
                }

                if (config.runtime.seriesLabels) {
                  let index = config.runtime.seriesLabelsAll.indexOf(itemName)
                  itemName = config.runtime.seriesKeys[index]
                }

                if (seriesHighlight.length > 0 && false === seriesHighlight.includes(itemName) && config.visualizationType !== 'Forecasting') {
                  legendClasses.push('inactive')
                }

                // ? not sure why this has to be broken apart at the moment.
                // ? the logic looks equivalent to the line above but only works like this.
                if (forecastingInactive) {
                  legendClasses.push('inactive')
                }

                return (
                  <LegendItem
                    className={legendClasses.join(' ')}
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
                    <LegendCircle fill={label.value} />
                    <LegendLabel align='left' margin='0 0 0 4px'>
                      {label.text}
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
          )}
        </LegendOrdinal>
      </aside>
    ) : (
      <aside id='legend' className={containerClasses.join(' ')} role='region' aria-label='legend' tabIndex={0}>
        {config.boxplot.legend.displayHowToReadText && <h3>{config.boxplot.legend.howToReadText}</h3>}
      </aside>
    )
  return (
    config.visualizationType !== 'Box Plot' && (
      <aside id='legend' className={containerClasses.join(' ')} role='region' aria-label='legend' tabIndex={0}>
        {legend.label && <h2>{parse(legend.label)}</h2>}
        {legend.description && <p>{parse(legend.description)}</p>}

        <LegendOrdinal scale={colorScale} itemDirection='row' labelMargin='0 20px 0 0' shapeMargin='0 10px 0'>
          {labels => {
            if (
              Number(config.legend.dynamicLegendItemLimit) > dynamicLegendItems.length && // legend items are less than limit
              dynamicLegendItems.length !== config.runtime.seriesLabelsAll.length
            ) {
              // legend items are equal to series length
              return (
                <select className='dynamic-legend-dropdown' onChange={e => handleDynamicLegendChange(e)}>
                  <option className={'all'} tabIndex={0} value={JSON.stringify({ text: config.legend.dynamicLegendDefaultText })}>
                    {config.legend.dynamicLegendDefaultText}
                  </option>
                  {labels.map((label, i) => {
                    let className = 'legend-item'
                    let itemName = label.datum
                    let inDynamicList = false

                    // Filter excluded data keys from legend
                    if (config.exclusions.active && config.exclusions.keys?.includes(itemName)) {
                      return null
                    }

                    if (config.runtime.seriesLabels) {
                      let index = config.runtime.seriesLabelsAll.indexOf(itemName)
                      itemName = config.runtime.seriesKeys[index]
                    }

                    if (seriesHighlight.length > 0 && false === seriesHighlight.includes(itemName)) {
                      className += ' inactive'
                    }

                    dynamicLegendItems.map(listItem => {
                      if (listItem.text === label.text) {
                        inDynamicList = true
                      }
                      return null
                    })

                    if (inDynamicList) return true
                    let palette = colorPalettes[config.palette]

                    label.value = palette[dynamicLegendItems.length]

                    return (
                      <option className={className} tabIndex={0} value={JSON.stringify(label)}>
                        {label.text}
                      </option>
                    )
                  })}
                </select>
              )
            } else {
              return config.legend.dynamicLegendItemLimitMessage
            }
          }}
        </LegendOrdinal>

        <div className='dynamic-legend-list'>
          {dynamicLegendItems.map((label, i) => {
            let className = ['legend-item']
            let itemName = label.text
            let palette = colorPalettes[config.palette]

            // Filter excluded data keys from legend
            if (config.exclusions.active && config.exclusions.keys?.includes(itemName)) {
              return null
            }

            if (config.runtime.seriesLabels && !config.legend.dynamicLegend) {
              let index = config.runtime.seriesLabelsAll.indexOf(itemName)
              itemName = config.runtime.seriesKeys[index]
            }

            if (seriesHighlight.length > 0 && !seriesHighlight.includes(itemName)) {
              className.push('inactive')
            }

            if (seriesHighlight.length === 0 && config.legend.dynamicLegend) {
              className.push('inactive')
            }

            return (
              <>
                <LegendItem className={className.join(' ')} tabIndex={0} key={`dynamic-legend-item-${i}`} alignItems='center'>
                  <button
                    className='btn-wrapper'
                    onClick={() => {
                      highlight(label)
                    }}
                  >
                    <LegendCircle fill={palette[i]} config={config} />
                    <LegendLabel align='space-between' margin='4px 0 0 4px'>
                      {label.text}
                    </LegendLabel>
                  </button>
                  <button onClick={() => removeDynamicLegendItem(label)}>x</button>
                </LegendItem>
              </>
            )
          })}
        </div>
        {seriesHighlight.length < dynamicLegendItems.length && (
          <button className={`legend-reset legend-reset--dynamic ${config.theme}`} onClick={highlightReset} tabIndex={0}>
            Reset
          </button>
        )}
      </aside>
    )
  )
}

export default Legend
