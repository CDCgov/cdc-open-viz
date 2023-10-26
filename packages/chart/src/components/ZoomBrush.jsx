import { Brush } from '@visx/brush'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { useContext, useEffect, useRef, useState } from 'react'
import ConfigContext from '../ConfigContext'

const ZoomBrush = props => {
  const { transformedData: data, config, parseDate, formatDate, updateConfig } = useContext(ConfigContext)
  const [filteredData, setFilteredData] = useState([...data])
  const brushRef = useRef(null)
  const [textProps, setTextProps] = useState({
    startPosition: 0,
    endPosition: 0,
    startValue: '',
    endValue: ''
  })

  const [initialPosition, setInitialPosition] = useState({
    start: { x: 0 },
    end: { x: props.xMax }
  })

  const style = {
    fill: '#EAEAEA',
    stroke: 'blue',
    fillOpacity: 0.8,
    strokeOpacity: 0,
    rx: 15
  }

  const onBrushChange = event => {
    if (!event) return

    const { xValues } = event

    const dataKey = config.xAxis?.dataKey

    const filteredData = data.filter(item => xValues.includes(item[dataKey]))

    const endValue = xValues
      .slice()
      .reverse()
      .find(item => item !== undefined)
    const startValue = xValues.find(item => item !== undefined)

    const formatIfDate = value => (config.runtime.xAxis.type === 'date' ? formatDate(parseDate(value)) : value)

    setTextProps(prev => ({
      ...prev,
      startPosition: brushRef.current?.state.start.x,
      endPosition: brushRef.current?.state.end.x,
      endValue: formatIfDate(endValue),
      startValue: formatIfDate(startValue)
    }))

    setFilteredData(filteredData)
  }

  useEffect(() => {
    updateConfig({
      ...config,
      brush: {
        ...config.brush,
        data: filteredData
      }
    })
  }, [filteredData])

  //reset filters  if brush is off
  useEffect(() => {
    if (!config.brush.active) {
      setFilteredData(data)
    }
  }, [config.brush.active])

  const top = config.xAxis.label ? (config.dynamicMarginTop || config.xAxis.labelOffset) + Number(config.brush.height) : !config.xAxis.label && config.dynamicMarginTop ? config.dynamicMarginTop : Number(config.brush.height) * 2

  return (
    <Group display={config.brush.active ? 'block' : 'none'} top={Number(props.yMax) + top} left={Number(config.runtime.yAxis.size)} pointerEvents='fill'>
      <Brush
        renderBrushHandle={props => <BrushHandle textProps={textProps} {...props} isBrushing={brushRef.current?.state.isBrushing} />}
        innerRef={brushRef}
        useWindowMoveEvents={true}
        selectedBoxStyle={style}
        xScale={props.xScaleBrush}
        yScale={props.yScale}
        width={props.xMax}
        resizeTriggerAreas={['left', 'right']}
        height={config.brush.height}
        handleSize={8}
        brushDirection='horizontal'
        initialBrushPosition={initialPosition}
        onChange={onBrushChange}
      />
    </Group>
  )
}

function BrushHandle(props) {
  const { x, isBrushActive, isBrushing, className, textProps } = props
  const pathWidth = 8
  if (!isBrushActive) {
    return null
  }
  // Flip the SVG path horizontally for the left handle
  const isLeft = className.includes('left')
  const transform = isLeft ? 'scale(-1, 1)' : 'translate(0,0)'
  const textAnchor = isLeft ? 'end' : 'start'

  return (
    <Group left={x + pathWidth / 2} top={-2}>
      <Text pointerEvents='visiblePainted' dominantBaseline='hanging' x={0} verticalAnchor='start' textAnchor={textAnchor} fontSize={'10px'} dy={10} y={15}>
        {isLeft ? textProps.startValue : textProps.endValue}
      </Text>
      <path cursor='ew-resize' d='M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12' fill={!isBrushing ? '#666' : '#297EF1'} strokeWidth='1' transform={transform}></path>
    </Group>
  )
}

export default ZoomBrush
