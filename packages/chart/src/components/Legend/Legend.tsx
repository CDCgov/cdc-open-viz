import { useContext } from 'react'
import ConfigContext from '../../ConfigContext'
import parse from 'html-react-parser'
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend'
import LegendCircle from '@cdc/core/components/LegendCircle'

import useLegendClasses from '../../hooks/useLegendClasses'
import { useHighlightedBars } from '../../hooks/useHighlightedBars'
import { handleLineType } from '../../helpers/handleLineType'
import { Line } from '@visx/shape'
import { colorPalettesChart as colorPalettes, sequentialPalettes, twoColorPalette } from '@cdc/core/data/colorPalettes'
import { scaleOrdinal } from '@visx/scale'
import { FaStar } from 'react-icons/fa'
import { Text } from '@visx/text'
import { Group } from '@visx/group'

type Label = {
  datum: string
  index: number
  text: string
  value: string
  icon?: any
}

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */
const Legend = () => {
  // prettier-ignore
  const {
    config,
    colorScale,
    seriesHighlight,
    highlight,
    tableData,
    highlightReset,
    transformedData: data,
    currentViewport
  } = useContext(ConfigContext)

  const { innerClasses, containerClasses } = useLegendClasses(config)
  const { visualizationType, visualizationSubType, series, runtime, orientation, legend } = config
  // create fn to reverse labels while legend is Bottom.  Legend-right , legend-left works by default.
  const reverseLabels = labels => (config.legend.reverseLabelOrder && config.legend.position === 'bottom' ? labels.reverse() : labels)
  const displayScale = scaleOrdinal({
    domain: config.suppressedData?.map(d => d.label),
    range: ['none'],
    unknown: 'block'
  })

  const renderDashes = style => {
    const dashCount = style === 'Dashed Small' ? 3 : 2
    const dashClass = `dashes ${style.toLowerCase().replace(' ', '-')}`

    return (
      <div className={dashClass}>
        {Array.from({ length: dashCount }, (_, i) => (
          <span key={i}>-</span>
        ))}
      </div>
    )
  }
  const renderDashesOrCircle = style => {
    if (['Dashed Small', 'Dashed Medium', 'Dashed Large'].includes(style)) {
      return renderDashes(style)
    } else if (style === 'Open Circles') {
      return <div className='dashes open-circles'></div>
    }
  }
  const createLegendLabels = (defaultLabels): Label[] => {
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
          let colorValue = sequentialPalettes[stage.color]?.[2] ? sequentialPalettes[stage.color]?.[2] : colorPalettes[stage.color]?.[2] ? colorPalettes[stage.color]?.[2] : '#ccc'

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
          value: colorScale(val)
        }
        return newLabel
      })

      return reverseLabels(uniqueLabels)
    }

    if ((config.visualizationType === 'Bar' || config.visualizationType === 'Combo') && config.visualizationSubType === 'regular' && config.suppressedData) {
      const lastIndex = defaultLabels.length - 1
      let newLabels = []

      config.suppressedData?.forEach(({ label, icon }, index) => {
        if (label && icon) {
          const newLabel = {
            datum: label,
            index: lastIndex + index,
            text: label,
            icon: <FaStar color='#000' size={15} />
          }
          newLabels.push(newLabel)
        }
      })

      return [...defaultLabels, ...newLabels]
    }

    return reverseLabels(defaultLabels)
  }

  const isBottomOrSmallViewport = legend.position === 'bottom' || ['sm', 'xs', 'xxs'].includes(currentViewport)

  const legendClasses = {
    marginBottom: isBottomOrSmallViewport ? '15px' : '0px',
    marginTop: isBottomOrSmallViewport && orientation === 'horizontal' ? `${config.yAxis.label && config.isResponsiveTicks ? config.dynamicMarginTop : config.runtime.xAxis.size}px` : `${isBottomOrSmallViewport ? config.dynamicMarginTop + 15 : 0}px`
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
              <>
                <div className={innerClasses.join(' ')}>
                  {createLegendLabels(labels).map((label, i) => {
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

                    return (
                      <LegendItem
                        className={className.join(' ')}
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
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <LegendCircle margin='0' fill={label.value} display={displayScale(label.datum)} />
                            <div style={{ marginTop: '2px', marginRight: '6px' }}>{label.icon}</div>
                          </div>
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
                <>
                  {config.preliminaryData.some(pd => pd.label) && (
                    <>
                      <hr></hr>
                      <div className={config.legend.singleRow && isBottomOrSmallViewport ? 'legend-container__inner bottom single-row' : 'dash-left'}>
                        {config.preliminaryData.map((pd, index) => {
                          return (
                            <div className='dash-container' key={index}>
                              {pd.label && (
                                <>
                                  <div className='dash-inner'>{renderDashesOrCircle(pd.style)}</div>
                                  <div style={{ marginLeft: '7px' }}>{pd.label}</div>
                                </>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </>
                  )}
                </>
              </>
            )
          }}
        </LegendOrdinal>
      </aside>
    )
  )
}

export default Legend
