import { Brush } from '@visx/brush'
import BaseBrush from '@visx/brush/lib/BaseBrush'
import { Group } from '@visx/group'
import { PatternLines } from '@visx/pattern'
import { bisector } from 'd3-array'
import { useRef, useContext, useState } from 'react'
import ConfigContext from '../ConfigContext'
import useMinMax from '../hooks/useMinMax'
import useScales from '../hooks/useScales'
import useReduceData from '../hooks/useReduceData'

const BrushHandle = props => {
  const { x, height, isBrushActive } = props
  const pathWidth = 8
  const pathHeight = 15
  if (!isBrushActive) {
    return null
  }
  return (
    <Group left={x + pathWidth / 2} top={(height - pathHeight) / 2}>
      <path fill='#f2f2f2' d='M -4.5 0.5 L 3.5 0.5 L 3.5 15.5 L -4.5 15.5 L -4.5 0.5 M -1.5 4 L -1.5 12 M 0.5 4 L 0.5 12' stroke='#999999' strokeWidth='1' style={{ cursor: 'ew-resize' }} />
    </Group>
  )
}

const withBrush = Component => {
  const styles = {
    border: '1px solid red'
  }
  const BrushComponent = props => {
    const { transformedData: data, config, isDebug, parseDate, formatDate } = useContext(ConfigContext)
    const { pattern_id, accent_color } = config.brush
    const getDate = d => new Date(d[config.xAxis.dataKey])
    const getXAxisData = d => (config.runtime.xAxis.type === 'date' ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime() : d[config.runtime.originalXAxis.dataKey])
    const xAxisDataMapped = data.map(d => getXAxisData(d))

    const [xAxisBrushData, setXAxisBrushData] = useState(data)
    const brushData = undefined !== xAxisBrushData && xAxisBrushData.length ? xAxisBrushData : data

    // for Brush, using original data
    let { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, data)
    const ref = useRef(BaseBrush)
    const isBrush = true
    const { xMax, yMax, svgRef, disableMouseOver } = props
    const properties = { data, config, minValue, maxValue, isAllLine, existPositiveValue, xAxisDataMapped, xMax, yMax, isBrush }
    let { min, max } = useMinMax(properties)
    const { xScale, yScale } = useScales({ ...properties, min, max })

    // for Component using filtered brush data
    const xMaxComp = xMax
    let dynamicMarginTop = 0 || config.dynamicMarginTop
    const marginTop = 20
    let yMaxComp = config.isResponsiveTicks && showChartBrush ? yMax + config.dynamicMarginTop / 4 + marginTop : yMax
    {/* prettier-ignore */ }
    ;({ minValue, maxValue } = useReduceData(config, brushData))
    const xAxisDataMappedComp = brushData.map(d => getXAxisData(d))
    const propsComp = { data: brushData, config, minValue, maxValue, isAllLine, existPositiveValue, xAxisDataMapped: xAxisDataMappedComp, xMax: xMaxComp, yMax: yMaxComp, isBrush }
    {/* prettier-ignore */}
    ;({ min, max } = useMinMax(propsComp))
    const { xScale: xScaleComp, yScale: yScaleComp } = useScales({ ...propsComp, min, max })
    //debugger
    const initialBrushPosition = {
      start: { x: 0 },
      end: { x: xMax }
    }
    // Helper for getting data to the closest date/category hovered.
    const getXValueFromCoordinateDate = x => {
      if (config.xAxis.type === 'categorical' || config.visualizationType === 'Combo') {
        let eachBand = xScale.step()
        let numerator = x
        const index = Math.floor(Number(numerator) / eachBand)
        return xScale.domain()[index - 1] // fixes off by 1 error
      }

      if (config.xAxis.type === 'date' && config.visualizationType !== 'Combo') {
        const bisectDate = bisector(d => parseDate(d[config.xAxis.dataKey])).left
        const x0 = xScale.invert(xScale(x)) // GETTING INVALID DATE ****
        const index = bisectDate(config.data, x0, 1)
        const val = parseDate(config.data[index - 1][config.xAxis.dataKey])
        return val
      }
    }

    const onBrushChange = domain => {
      if (!domain) return
      const { x0, x1 } = domain
      console.log('domain x0, x1', domain, x0, x1)
      let brushFilteredData = []
      brushFilteredData = config.data.filter(s => {
        const x = getDate(s).getTime()
        if (x > x0 && x < x1) {
          let date = formatDate(getXValueFromCoordinateDate(x))
          console.log('Yes add x', x)
          return s
        } else {
          console.log('x not in range', x)
        }
      })

      // dont let the number of points go below config.xAxis.numTicks ??? (TT)
      if (undefined !== brushFilteredData && brushFilteredData.length >= config.xAxis.numTicks) {
        // leaving this here for now due to issues with visx tick marks that need debugging
        if (isDebug) console.log('Set new xAxisBrushdata to', brushFilteredData)
        setXAxisBrushData(brushFilteredData)
      }
    }

    if (!config.showChartBrush) {
      return <Component {...props} />
    }

    return (
      <>
        {console.log('xAxisBrushData, yScale, xScale, xMax, yMax', xAxisBrushData, yScaleComp, xScaleComp, xMaxComp, yMaxComp)}
        <Component {...props} brushData={xAxisBrushData} xScale={xScaleComp} yScale={yScaleComp} width={xMaxComp} height={yMaxComp} isBrush={false} />
        config.showChartBrush && (
        <Component className='brushChart' xScale={xScale} yScale={yScale} yMax={yMax} xMax={xMax} height={yMax / 4} chartRef={svgRef} handleTooltipMouseOver={disableMouseOver} handleTooltipMouseOff={disableMouseOver} isDebug={isDebug} isBrush={true}>
          <PatternLines id={pattern_id} height={8} width={8} stroke={accent_color} strokeWidth={1} orientation={['diagonal']} style={styles} />
          <Brush
            id='theBrush'
            className='theBrush'
            xScale={xScale}
            yScale={yScale}
            width={xMax}
            height={yMax / 4}
            margin={0}
            handleSize={8}
            innerRef={ref}
            resizeTriggerAreas={['left', 'right']}
            brushDirection='horizontal'
            initialBrushPosition={initialBrushPosition}
            onChange={onBrushChange}
            selectedBoxStyle={{ fill: `url(#${pattern_id})` }}
            useWindowMoveEvents
            renderBrushHandle={props => <BrushHandle {...props} />}
            style={styles}
          />
        </Component>
        )
      </>
    )
  }

  return BrushComponent
}

export default withBrush
