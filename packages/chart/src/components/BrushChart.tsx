import { Group } from '@visx/group'
import { useContext, useEffect, useRef, useState } from 'react'
import ConfigContext from '../ConfigContext'
import * as d3 from 'd3'
import { invertValue } from '@cdc/core/helpers/scaling'
import { Text } from '@visx/text'

interface BrushChartProps {
  xMax: number
  yMax: number
  xScaleBrush: Function
}

const BrushChart = ({ xMax, yMax, xScaleBrush: x }: BrushChartProps) => {
  const { tableData, config, setBrushConfig, getTextWidth } = useContext(ConfigContext)
  const [brushState, setBrushState] = useState({ isBrushing: false, selection: [] })
  const [tooltip, showTooltip] = useState(false)
  const svgRef = useRef()
  const brushheight = 25
  const borderRadius = 15

  const tooltipText = 'Drag edges to focus on a specific segment '
  const textWidth = getTextWidth(tooltipText, `normal ${16 / 1.1}px sans-serif`)

  const calculateGroupTop = (): number => {
    return Number(yMax) + config.xAxis.axisBBox + brushheight * 1.5
  }

  const handleMouseOver = () => {
    // show tooltip text only once before brush triggered
    if (brushState.selection[0] === 0 && xMax === brushState.selection[1]) {
      showTooltip(true)
    }
  }
  const handleMouseLeave = () => {
    // hide tooltip text if brush was triggered
    if (brushState.selection[0] !== 0 || brushState.selection[1] !== xMax) {
      showTooltip(false)
    }
    showTooltip(false)
  }

  const brushHandle = (g, selection, firstDate, lastDate) => {
    const textWidth = getTextWidth(firstDate, `normal ${16 / 1.1}px sans-serif`)
    return g
      .selectAll('.handle--custom')
      .data([{ side: 'left' }, { side: 'right' }])
      .join(enter => {
        const handleGroup = enter.append('g').attr('class', 'handle--custom')
        handleGroup
          .append('text')
          .attr('x', d => (d.side === 'left' ? 0 : -textWidth))
          .attr('y', 30)
          .text(d => (d.side === 'left' ? firstDate : lastDate))
          .attr('font-size', '13px')
        return handleGroup
      })

      .attr('display', 'block')
      .attr('transform', selection === null ? null : (_, i) => `translate(${selection[i]},${'10'})`)
  }

  useEffect(() => {
    const svg = d3.select(svgRef.current).attr('overflow', 'visible')

    // append background rect
    svg
      .append('rect') // prettier-ignore
      .attr('fill', '#949494')
      .attr('stroke', '#c5c5c5')
      .attr('stroke-width', 2)
      .attr('ry', borderRadius)
      .attr('rx', borderRadius)
      .attr('height', brushheight)
      .attr('width', xMax)

    const brushHanlder = event => {
      if (!event) {
        return
      }
      const selection = event?.selection

      if (selection && selection.length > 0) {
        // invert pixel values into data values
        const [x0, x1] = selection.map(value => invertValue(x, value))
        // filter out data based on inverted data values
        const newFilteredData = tableData.filter(d => new Date(d[config.runtime.originalXAxis.dataKey]) >= x0 && new Date(d[config.runtime.originalXAxis.dataKey]) <= x1)

        const firstDate = (newFilteredData.length && newFilteredData[0][config?.runtime?.originalXAxis?.dataKey]) ?? ''
        const lastDate = (newFilteredData.length && newFilteredData[newFilteredData.length - 1][config?.runtime?.originalXAxis?.dataKey]) ?? ''
        // add custom blue colored handlers to each corners of brush
        svg.selectAll('.handle--custom').remove()
        // append handler
        svg.call(brushHandle, selection, firstDate, lastDate)
        // update the brush state to add filtered data based on selection
        setBrushConfig({
          active: true,
          isBrushing: true,
          data: newFilteredData
        })
        setBrushState({
          isBrushing: true,
          selection
        })
      }
    }
    // create brush with "start ,brush, end'" states
    const brush = d3
      .brushX()
      .extent([
        [0, 0],
        [xMax, brushheight]
      ])
      .on('start brush end', brushHanlder)

    const defaultSelection = [0, xMax]

    const brushGroup = svg.append('g').call(brush).call(brush.move, defaultSelection)
    brushGroup.select('.overlay').style('pointer-events', 'none')
    // svg.call(brushHandle, selection, firstDate, lastDate)

    brushGroup.selectAll('.selection').attr('fill', '#474747').attr('fill-opacity', 1).attr('rx', borderRadius).attr('ry', borderRadius)

    return () => {
      svg.selectAll('*').remove() // Cleanup on component unmount
    }
  }, [config, config.brush.active])
  console.log(config.brush.active, 'ace')

  return (
    <Group onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} className='brush-container' left={Number(config.runtime.yAxis.size)} top={calculateGroupTop()}>
      <Text pointerEvents='visiblePainted' display={tooltip ? 'block' : 'none'} fontSize={16} x={(Number(xMax) - Number(textWidth)) / 2} y={-10}>
        Drag edges to focus on a specific segment
      </Text>
      <svg width={'100%'} height={brushheight * 3} ref={svgRef}></svg>
    </Group>
  )
}

export default BrushChart
