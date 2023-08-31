import { PatternLines } from '@visx/pattern'
import { Brush } from '@visx/brush'
import BaseBrush from '@visx/brush/lib/BaseBrush'
import { Group } from '@visx/group'
import { bisector } from 'd3-array'
import { useRef, useContext, useState } from 'react'
import ConfigContext from '../ConfigContext'
import useMinMax from '../hooks/useMinMax'
import useScales from '../hooks/useScales'
import useReduceData from '../hooks/useReduceData'
import { ScaleSVG } from '@visx/responsive' // I could not get ScaleSVG to work but it could be a better long term option

// this is just the rectangle part you drag
const BrushHandle = props => {
  let { x, height, isBrushActive } = props
  const pathWidth = 8
  const pathHeight = 15

  console.log('BrushHandle x, height, isBrushActive=', x, height, isBrushActive)

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
  const BrushComponent = props => {
    const { transformedData: data, config, isDebug, parseDate, formatDate } = useContext(ConfigContext)
    const { patternId, accentColor, heightRatio } = config.brush
    const getDate = d => new Date(d[config.xAxis.dataKey])
    const getXAxisData = d => (config.runtime.xAxis.type === 'date' ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime() : d[config.runtime.originalXAxis.dataKey])
    const xAxisDataMapped = data.map(d => getXAxisData(d))
    console.log('##### BrushComponent props, config.brush', props, config.brush)

    const [xAxisBrushData, setXAxisBrushData] = useState(data)
    const brushData = undefined !== xAxisBrushData && xAxisBrushData.length ? xAxisBrushData : data

    // for Brush, using original data
    let { minValue, maxValue, existPositiveValue, isAllLine } = useReduceData(config, data)
    const brushRef = useRef(BaseBrush)
    const isBrush = true
    // totalHeight is the height of the entire parent svg with both chart and brush chart
    const { xMax, yMax, svgRef, seriesScale, height, totalHeight } = props
    console.log('height, totalHeight ', height, totalHeight)
    let origHeight = height
    const properties = { data, config, minValue, maxValue, isAllLine, existPositiveValue, xAxisDataMapped, xMax, yMax, isBrush }
    let { min, max } = useMinMax(properties)
    const { xScale, yScale } = useScales({ ...properties, min, max })

    // for incoming Component, using filtered brush data
    const xMaxComp = xMax
    let dynamicMarginTop = 0 || config.dynamicMarginTop
    const marginTop = 20
    let yMaxComp = config.isResponsiveTicks && config.showChartBrush && isBrush ? yMax + config.dynamicMarginTop * heightRatio + marginTop : yMax
    {/* prettier-ignore */ }
    ;({ minValue, maxValue } = useReduceData(config, brushData))
    const xAxisDataMappedComp = brushData.map(d => getXAxisData(d))
    const propsComp = { data: brushData, config, minValue, maxValue, isAllLine, existPositiveValue, xAxisDataMapped: xAxisDataMappedComp, xMax: xMaxComp, yMax: yMaxComp, isBrush }
    {/* prettier-ignore */}
    ;({ min, max } = useMinMax(propsComp))
    const { xScale: xScaleComp, yScale: yScaleComp } = useScales({ ...propsComp, min, max })

    const selectedBrushStyle = {
      fill: `url(#${patternId})`, // 'blue', // `url(#${pattern_id})`, //
      fillOpacity: 0.5,
      stroke: 'white' //{ accent_color }
    }

    // this controls where the brush handles are initially
    // - 0, xMax basically have the handles flush to each end of the area
    // you can also specify y position but AreaChart did not require it at all
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

    const onBrushChange = (domain, ...props) => {
      if (!domain) return
      const { x0, x1 } = domain
      console.log('onBrushChange DOMAIN in = x0,x1  props', x0, x1, props)
      let brushFilteredData = []
      brushFilteredData = config.data.filter(s => {
        const x = getDate(s).getTime()
        console.log('onBrushChange x0,x,x1', x0, x, x1)
        if (x > x0 && x < x1) {
          let date = formatDate(getXValueFromCoordinateDate(x))
          console.log('onBrushChange in range get date', date)
          return s
        }
      })

      // dont let the number of points go below config.xAxis.numTicks ??? (TT)
      if (undefined !== brushFilteredData && brushFilteredData.length >= config.xAxis.numTicks) {
        setXAxisBrushData(brushFilteredData)
      }
    }

    // if brush not enabled, just return the chart with no brush
    if (!config.showChartBrush) {
      return <Component {...props} />
    }

    const disableMouseOver = () => {
      return false
    }

    //console.log('withBRUSH xScaleComp, yScaleComp', xScaleComp, yScaleComp)
    console.log('#### withBRUSH called, seriesScale props, origHeight, patternId, accentColor', props, origHeight, patternId, accentColor)
    return (
      <>
        {/* <Component {...props} seriesScale={seriesScale} brushData={xAxisBrushData} xScale={xScaleComp} yScale={yScaleComp} width={xMaxComp} height={yMaxComp} /> */}
        <Component
          id={'brush-chart'}
          className='brush-chart'
          hideBottomAxis
          hideLeftAxis
          seriesScale={seriesScale}
          xScale={xScale}
          yScale={yScale}
          yMax={yMax}
          xMax={xMax}
          height={yMax / 5}
          chartRef={svgRef}
          handleTooltipMouseOver={disableMouseOver}
          handleTooltipMouseOff={disableMouseOver}
          isDebug={isDebug}
          isBrush={true}
          totalHeight={totalHeight}
          data={data}
        >
          {/* WARNING: Dont change height and width of PatternLines or they will disappear (TT) */}
          <PatternLines id={patternId} height={8} width={8} stroke={accentColor} strokeWidth={1} orientation={['diagonal']} />
          <Brush
            id='theBrush'
            className='theBrush'
            xScale={xScale}
            yScale={yScale}
            width={xMax}
            height={yMax * heightRatio}
            margin={0}
            handleSize={8}
            innerRef={brushRef}
            resizeTriggerAreas={['left', 'right']}
            brushDirection='horizontal'
            initialBrushPosition={initialBrushPosition}
            onChange={onBrushChange}
            selectedBoxStyle={selectedBrushStyle}
            useWindowMoveEvents
            renderBrushHandle={props => <BrushHandle {...props} />}
          />
        </Component>
      </>
    )
  }

  return BrushComponent
}

export default withBrush
