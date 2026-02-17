import React, { useContext } from 'react'
import { AxisBottom as VisxAxisBottom } from '@visx/axis'
import { Group } from '@visx/group'
import { Line } from '@visx/shape'
import { Text } from '@visx/text'
import ConfigContext from '../../ConfigContext'
import { isDateScale } from '@cdc/core/helpers/cove/date'
import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import { filterAndShiftLinearDateTicks } from '../../helpers/filterAndShiftLinearDateTicks'
import { getTickValues } from '../../hooks/useScales'

// Constants for bottom axis
const BOTTOM_LABEL_PADDING = 9
const X_TICK_LABEL_PADDING = 4.5
const DEFAULT_TICK_LENGTH = 8
const TICK_ROTATION_VERTICAL_ANCHOR_THRESHOLD = -50
const TICK_BUFFER_SPACING = 40
const MAJOR_TICK_LENGTH = 16
const MAJOR_LOG_TICK_STROKE_WIDTH = 1.3
const HORIZONTAL_LOG_DY_OFFSET = 8
const DYNAMIC_MARGIN_TOP_PADDING = 20
const BASE_TICK_WIDTH_ACCUMULATOR = 100
const MULTI_LABEL_ACCUMULATOR = 180

interface BottomAxisProps {
  axisBottomRef: React.RefObject<SVGGElement>
  xScale: any
  yMax: number
  xMax: number
  yAxisWidth: number
  xTickCount: number
  tickLabelFontSize: number
  axisLabelFontSize: number
  handleBottomTickFormatting: (tick: any, index: number, ticks: any[]) => string
  useDateSpanMonths: boolean
  dateSpanMonths: number
  xAxisDataMapped: any[]
  uniqueXAxisDataMapped: any[]
  isDateTime: boolean
  bottomLabelStart: number
  parentWidth: number
  xAxisLabelRefs: React.MutableRefObject<any[]>
  xAxisTitleRef: React.RefObject<SVGTextElement>
  getManualStep: () => number
}

const BottomAxis: React.FC<BottomAxisProps> = ({
  axisBottomRef,
  xScale,
  yMax,
  xMax,
  yAxisWidth,
  xTickCount,
  tickLabelFontSize,
  axisLabelFontSize,
  handleBottomTickFormatting,
  useDateSpanMonths,
  dateSpanMonths,
  xAxisDataMapped,
  uniqueXAxisDataMapped,
  isDateTime,
  bottomLabelStart,
  parentWidth,
  xAxisLabelRefs,
  xAxisTitleRef,
  getManualStep
}) => {
  const { config, formatDate } = useContext(ConfigContext)
  const { runtime, orientation, visualizationType, heights } = config

  const isLogarithmicAxis = config.yAxis.type === 'logarithmic'
  const isForestPlot = visualizationType === 'Forest Plot'

  // Sort uniqueXAxisDataMapped to match the scale domain order for filterAndShiftLinearDateTicks
  const sortedUniqueXAxisData = config.xAxis.sortByRecentDate
    ? [...uniqueXAxisDataMapped].sort((a, b) => Number(b) - Number(a))
    : [...uniqueXAxisDataMapped].sort((a, b) => Number(a) - Number(b))
  const GET_TEXT_WIDTH_FONT = `normal ${tickLabelFontSize}px Nunito, sans-serif`

  return (
    <VisxAxisBottom
      innerRef={axisBottomRef}
      top={
        runtime.horizontal && visualizationType !== 'Forest Plot'
          ? Number(heights.horizontal) + Number(config.xAxis.axisPadding)
          : visualizationType === 'Forest Plot'
          ? yMax + Number(config.xAxis.axisPadding)
          : yMax
      }
      left={visualizationType !== 'Forest Plot' ? yAxisWidth : 0}
      label={runtime.xAxis.label}
      tickFormat={handleBottomTickFormatting}
      scale={xScale}
      stroke='#333'
      numTicks={useDateSpanMonths ? dateSpanMonths : xTickCount}
      tickStroke='#333'
      tickValues={
        config.runtime.xAxis.manual
          ? getTickValues(xAxisDataMapped, xScale, isDateTime ? xTickCount : getManualStep(), config)
          : config.runtime.xAxis.type === 'date'
          ? xAxisDataMapped
          : // For date-time with small datasets (e.g., brush-filtered), use explicit tick values
          // to ensure each data point can have a tick. Otherwise, visx may generate too few.
          // Use uniqueXAxisDataMapped to handle cases where multiple series share x-axis values
          isDateTime && uniqueXAxisDataMapped.length > 0 && uniqueXAxisDataMapped.length <= (xTickCount || 15)
          ? uniqueXAxisDataMapped
          : undefined
      }
    >
      {props => {
        const hasDynamicCategory = config.series.some(s => s.dynamicCategory)

        // For these charts, we generated all ticks in tickValues above, and now need to filter/shift them
        // so the last tick is always labeled
        // Use sortedUniqueXAxisData to match the scale's sorted domain for correct index calculations
        if (config.runtime.xAxis.type === 'date' && !config.runtime.xAxis.manual && !hasDynamicCategory) {
          props.ticks = filterAndShiftLinearDateTicks(config, props, sortedUniqueXAxisData, formatDate)
        }

        const distanceBetweenTicks =
          useDateSpanMonths &&
          xScale
            .ticks(xTickCount)
            .map(t =>
              props.ticks.findIndex(
                tick => (typeof tick.value === 'number' ? tick.value : tick.value.getTime()) === t.getTime()
              )
            )
            .slice(0, 2)
            .reduce((acc, curr) => curr - acc)

        // filter out every [distanceBetweenTicks] tick starting from the end, so the last tick is always labeled
        const filteredTicks = useDateSpanMonths
          ? [...props.ticks]
              .reverse()
              .filter((_, i) => i % distanceBetweenTicks === 0)
              .reverse()
              .map((tick, i, arr) => ({
                ...tick,
                // reformat in case showYearsOnce, since first month of year may have changed
                formattedValue: handleBottomTickFormatting(tick.value, i, arr)
              }))
          : props.ticks

        const axisMaxHeight = bottomLabelStart + BOTTOM_LABEL_PADDING

        const containsMultipleWords = inputString => /\s/.test(inputString)
        const isMultiLabel = filteredTicks.some(tick => containsMultipleWords(tick.value))

        // Calculate sumOfTickWidth here, before map function
        const longestTickLength = Math.max(
          ...filteredTicks.map(tick => getTextWidth(tick.formattedValue, GET_TEXT_WIDTH_FONT))
        )
        const accumulator = isMultiLabel ? MULTI_LABEL_ACCUMULATOR : BASE_TICK_WIDTH_ACCUMULATOR

        const textWidths = filteredTicks.map(tick => getTextWidth(tick.formattedValue, GET_TEXT_WIDTH_FONT))
        const sumOfTickWidth = textWidths.reduce((a, b) => a + b, accumulator)
        const spaceBetweenEachTick = (xMax - sumOfTickWidth) / (filteredTicks.length - 1)
        const bufferBetweenTicks = TICK_BUFFER_SPACING
        const maxLengthOfTick = parentWidth / filteredTicks.length - X_TICK_LABEL_PADDING * 2 - bufferBetweenTicks

        // Determine the position of each tick
        let positions = [0] // The first tick is at position 0
        for (let i = 1; i < textWidths.length; i++) {
          // The position of each subsequent tick is the position of the previous tick
          // plus the width of the previous tick and the space
          positions[i] = positions[i - 1] + textWidths[i - 1] + spaceBetweenEachTick
        }
        // calculate the end of x axis box
        const axisBBox = axisBottomRef?.current?.getBBox().height
        // TODO: Technical debt - This mutation is read by parent/sibling components.
        // Should be refactored to use proper React state management or callbacks.
        config.xAxis.axisBBox = axisBBox

        // force wrap it last tick is close to the end of the axis
        const lastTickWidth = textWidths[textWidths.length - 1]
        const lastTickPosition = positions[positions.length - 1] + lastTickWidth
        const lastTickEnd = lastTickPosition + lastTickWidth / 2
        const lastTickEndThreshold = xMax - lastTickWidth

        const areTicksTouching =
          textWidths.some(textWidth => textWidth > maxLengthOfTick) || // Force wrap if any tick is too long
          config.xAxis.showYearsOnce || // Force wrap when showing years once so it's easier to read
          lastTickEnd > lastTickEndThreshold // Force wrap it last tick is close to the end of the axis

        const dynamicMarginTop =
          areTicksTouching && config.isResponsiveTicks
            ? longestTickLength + DEFAULT_TICK_LENGTH + DYNAMIC_MARGIN_TOP_PADDING
            : 0

        // TODO: Technical debt - These mutations are read by parent/sibling components.
        // Should be refactored to use proper React state management or callbacks.
        config.dynamicMarginTop = dynamicMarginTop
        config.xAxis.tickWidthMax = longestTickLength

        // Compute effective tick rotations without mutating config
        const effectiveXAxisTickRotation =
          config.isResponsiveTicks && config.orientation === 'vertical' ? 0 : config.xAxis.tickRotation

        return (
          <Group className='bottom-axis' width={parentWidth}>
            {filteredTicks.map((tick, i, propsTicks) => {
              // when using LogScale show major ticks values only
              const showTick = String(tick.value).startsWith('1') || tick.value === 0.1 ? 'block' : 'none'
              const tickLength = showTick === 'block' ? MAJOR_TICK_LENGTH : DEFAULT_TICK_LENGTH
              const to = { x: tick.to.x, y: tickLength }
              const limitedWidth = 100 / propsTicks.length

              // Configure rotation using effective values (computed above without mutations)
              const tickRotation =
                config.isResponsiveTicks && areTicksTouching
                  ? -Number(config.xAxis.maxTickRotation) || -90
                  : -Number(config.runtime.xAxis.tickRotation)

              return (
                <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                  {!config.xAxis.hideTicks && (
                    <Line
                      from={tick.from}
                      to={orientation === 'horizontal' && isLogarithmicAxis ? to : tick.to}
                      stroke={config.xAxis.tickColor}
                      strokeWidth={showTick === 'block' && isLogarithmicAxis ? MAJOR_LOG_TICK_STROKE_WIDTH : 1}
                    />
                  )}
                  {!config.xAxis.hideLabel && (
                    <Text
                      innerRef={el => (xAxisLabelRefs.current[i] = el)}
                      dy={config.orientation === 'horizontal' && isLogarithmicAxis ? HORIZONTAL_LOG_DY_OFFSET : 0}
                      display={config.orientation === 'horizontal' && isLogarithmicAxis ? showTick : 'block'}
                      x={tick.to.x}
                      y={tick.to.y + X_TICK_LABEL_PADDING}
                      angle={tickRotation}
                      verticalAnchor={tickRotation < TICK_ROTATION_VERTICAL_ANCHOR_THRESHOLD ? 'middle' : 'start'}
                      textAnchor={tickRotation ? 'end' : 'middle'}
                      width={
                        areTicksTouching && !config.isResponsiveTicks && !Number(effectiveXAxisTickRotation)
                          ? limitedWidth
                          : undefined
                      }
                      fill={config.xAxis.tickLabelColor}
                      fontSize={tickLabelFontSize}
                    >
                      {tick.formattedValue}
                    </Text>
                  )}
                </Group>
              )
            })}
            {!config.xAxis.hideAxis && <Line from={props.axisFromPoint} to={props.axisToPoint} stroke='#333' />}
            <Text
              innerRef={xAxisTitleRef}
              className='x-axis-title-label'
              x={xMax / 2}
              y={isForestPlot ? 0 /* set via ref */ : axisMaxHeight}
              textAnchor='middle'
              verticalAnchor='start'
              fontWeight='bold'
              fill={config.xAxis.labelColor}
              fontSize={axisLabelFontSize}
            >
              {!config.hideXAxisLabel ? props.label : null}
            </Text>
          </Group>
        )
      }}
    </VisxAxisBottom>
  )
}

export default BottomAxis
