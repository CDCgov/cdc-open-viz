import { Brush } from '@visx/brush'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import { useState, useContext } from 'react'
import ConfigContext from '../ConfigContext'

const withBrush = Component => {
  return props => {
    let { width, height } = props
    // getting NaN error so just set it to something for now
    if (width === NaN || width === undefined) width = 300

    const { transformedData: data, config, isDebug, parseDate, formatDate } = useContext(ConfigContext)

    const [filteredData, setFilteredData] = useState(data)
    const brushMargin = { top: 0, bottom: 5, left: 10, right: 0 }

    const xScale = scaleBand({
      domain: filteredData.map(d => d.month),
      range: [0, width],
      padding: 0.2
    })
    const yScale = scaleLinear({
      domain: [0, Math.max(...filteredData.map(d => d.value))],
      range: [height, 0]
    })

    const onBrushChange = domain => {
      const dataCopy = data.filter(item => domain.xValues.includes(item.month))
      setFilteredData(dataCopy)
    }
    const selectedBrushStyle = {
      fill: 'white',
      stroke: 'red'
    }

    const initialBrushPosition = {
      start: { x: 122 },
      end: { x: 320 }
    }

    const xBrushMax = Math.max(width - brushMargin.left - brushMargin.right, 0)
    return (
      <svg width={width} height={height * 2}>
        <Component isBrush={false} {...props} data={filteredData} />
        <Group left={0} transform={`translate(${0}, ${340})`}>
          <Component {...props} isBrush={true} height={height / 5} data={data} />
          <Brush
            initialBrushPosition={initialBrushPosition}
            selectedBoxStyle={selectedBrushStyle}
            margin={brushMargin}
            resizeTriggerAreas={['left', 'right']}
            useWindowMoveEvents
            handleSize={8}
            onChange={onBrushChange}
            width={xBrushMax}
            height={height / 4}
            xScale={xScale}
            yScale={yScale}
            brushRegion={'chart'}
            brushDirection='horizontal'
          />
        </Group>
      </svg>
    )
  }
}
export default withBrush
