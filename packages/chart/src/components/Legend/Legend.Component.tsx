import parse from 'html-react-parser'
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend'
import LegendCircle from '@cdc/core/components/LegendCircle'

import useLegendClasses from '../../hooks/useLegendClasses'
import { useHighlightedBars } from '../../hooks/useHighlightedBars'
import { handleLineType } from '../../helpers/handleLineType'
import { Line } from '@visx/shape'
import { scaleOrdinal } from '@visx/scale'
import { Label } from '../../types/Label'
import { ChartConfig } from '../../types/ChartConfig'
import { ColorScale } from '../../types/ChartContext'

interface LegendProps {
  config: ChartConfig
  colorScale: ColorScale
  seriesHighlight: string[]
  highlight: Function
  highlightReset: Function
  currentViewport: string
  formatLabels: (labels: Label[]) => Label[]
}

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */
const Legend: React.FC<LegendProps> = ({ config, colorScale, seriesHighlight, highlight, highlightReset, currentViewport, formatLabels }) => {
  const { innerClasses, containerClasses } = useLegendClasses(config)
  const { runtime, orientation, legend } = config
  if (!legend) return null
  // create fn to reverse labels while legend is Bottom.  Legend-right , legend-left works by default.
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

  const isBottomOrSmallViewport = legend.position === 'bottom' || ['sm', 'xs', 'xxs'].includes(currentViewport)

  const legendClasses = {
    marginBottom: isBottomOrSmallViewport ? '15px' : '0px',
    marginTop: isBottomOrSmallViewport && orientation === 'horizontal' ? `${config.yAxis.label && config.isResponsiveTicks ? config.dynamicMarginTop : config.runtime.xAxis.size}px` : `${isBottomOrSmallViewport ? config.dynamicMarginTop + 15 : 0}px`
  }

  const { HighLightedBarUtils } = useHighlightedBars(config)

  let highLightedLegendItems = HighLightedBarUtils.findDuplicates(config.highlightedBarValues)

  return (
    <aside style={legendClasses} id='legend' className={containerClasses.join(' ')} role='region' aria-label='legend' tabIndex={0}>
      {legend.label && <h2>{parse(legend.label)}</h2>}
      {legend.description && <p>{parse(legend.description)}</p>}
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
}

export default Legend
