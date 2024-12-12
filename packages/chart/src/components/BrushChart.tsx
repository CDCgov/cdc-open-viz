import { Group } from '@visx/group'
import { useContext, useEffect, useRef, useState } from 'react'
import ConfigContext from '../ConfigContext'
import * as d3 from 'd3'
import { Text } from '@visx/text'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import _ from 'lodash'

interface BrushChartProps {
  xMax: number
  yMax: number
}

const BrushChart = ({ xMax, yMax }: BrushChartProps) => {
  const { tableData, config, setBrushConfig, dashboardConfig, formatDate, parseDate } = useContext(ConfigContext)
  const [brushState, setBrushState] = useState({ isBrushing: false, selection: [] })
  const [brushKey, setBrushKey] = useState(0)
  const sharedFilters = dashboardConfig?.dashboard?.sharedFilters ?? []
  const isDashboardFilters = sharedFilters?.length > 0
  const [tooltip, showTooltip] = useState(false)
  const svgRef = useRef()
  const brushheight = 25
  const borderRadius = 15
  const xDomain = d3.extent(tableData, d => new Date(d[config.runtime.originalXAxis.dataKey]))

  const xScale = d3.scaleTime().domain(xDomain).range([0, xMax])

  const tooltipText = 'Drag edges to focus on a specific segment '
  const textWidth = getTextWidth(tooltipText, `normal ${16 / 1.1}px sans-serif`)
  const DASHBOARD_MARGIN = 50
  const BRUSH_HEIGHT_MULTIPLIER = 1.5

  const calculateGroupTop = (): number => {
    if (dashboardConfig?.type === 'dashboard') {
      return Number(yMax) + config.xAxis.axisBBox + brushheight * BRUSH_HEIGHT_MULTIPLIER + DASHBOARD_MARGIN
    } else {
      return Number(yMax) + config.xAxis.axisBBox + brushheight * BRUSH_HEIGHT_MULTIPLIER
    }
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

  const initializeBrush = () => {
    const svg = d3.select(svgRef.current).attr('overflow', 'visible')

    svg
      .append('rect') // prettier-ignore
      .attr('fill', '#949494')
      .attr('stroke', '#c5c5c5')
      .attr('stroke-width', 2)
      .attr('ry', borderRadius)
      .attr('rx', borderRadius)
      .attr('height', brushheight)
      .attr('width', xMax)

    const brushHandler = event => {
      const selection = event?.selection
      //if (!selection) return
      let isUserBrushing = event.type === 'brush' && selection && selection.length > 0

      const [x0, x1] = selection.map(value => xScale.invert(value))

      const newFilteredData = _.filter(tableData, d => {
        const parsedDate = new Date(d[config.xAxis.dataKey])
        return parsedDate && !isNaN(parsedDate.getTime()) && parsedDate >= x0 && parsedDate <= x1
      })

      const sortByRecentDate = config.xAxis.sortByRecentDate

      const sortedData = _.sortBy(newFilteredData, item => new Date(item[config.xAxis.dataKey]))

      // If ascending is false, reverse the sorted array
      const finalData = !sortByRecentDate ? sortedData : sortedData.reverse()

      // Retrieve the start and end dates based on the sorted data array
      const startDate = _.get(_.first(finalData), config.xAxis.dataKey, '')
      const endDate = _.get(_.last(finalData), config.xAxis.dataKey, '')
      // add custom blue colored handlers to each corners of brush
      svg.selectAll('.handle--custom').remove()
      // append handler
      const [formattedStartDate, formattedEndDate] = [startDate, endDate].map(date => formatDate(parseDate(date)))
      svg.call(brushHandle, selection, formattedStartDate, formattedEndDate)

      setBrushConfig({
        active: config.brush.active,
        isBrushing: isUserBrushing,
        data: finalData
      })
      setBrushState({
        isBrushing: true,
        selection
      })
    }

    const brush = d3
      .brushX()
      .extent([
        [0, 0],
        [xMax, 25]
      ]) // brush extent
      .on('start brush end', brushHandler)

    const defaultSelection = [0, xMax]
    let brushGroup = svg.append('g').call(brush).call(brush.move, defaultSelection)
    brushGroup.select('.overlay').style('pointer-events', 'none')

    brushGroup
      .selectAll('.selection')
      .attr('fill', '#474747')
      .attr('fill-opacity', 1)
      .attr('rx', borderRadius)
      .attr('ry', borderRadius)
  }

  useEffect(() => {
    const isFiltersActive = config.filters?.some(filter => filter.active)
    const isExclusionsActive = config.exclusions?.active

    if ((isFiltersActive || isExclusionsActive || isDashboardFilters) && config.brush?.active) {
      setBrushKey(prevKey => prevKey + 1)
      setBrushConfig(prev => {
        return {
          ...prev,
          data: tableData
        }
      })
    }
    return () =>
      setBrushConfig(prev => {
        return {
          ...prev,
          data: []
        }
      })
  }, [config.filters, config.exclusions, config.brush?.active, isDashboardFilters])
  // Initialize brush when component is first rendered

  // reset brush on keychange
  useEffect(() => {
    if (brushKey) {
      initializeBrush()
    }
  }, [brushKey])

  if (!brushState.isBrushing) {
    initializeBrush()
  }

  return (
    <Group
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      className='brush-container'
      left={Number(config.runtime.yAxis.size)}
      top={calculateGroupTop()}
    >
      <Text
        pointerEvents='visiblePainted'
        display={tooltip ? 'block' : 'none'}
        fontSize={16}
        x={(Number(xMax) - Number(textWidth)) / 2}
        y={-10}
      >
        Drag edges to focus on a specific segment
      </Text>
      <svg width={'100%'} height={brushheight * 3} ref={svgRef}></svg>
    </Group>
  )
}

export default BrushChart
