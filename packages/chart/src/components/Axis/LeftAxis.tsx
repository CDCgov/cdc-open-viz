import React, { useContext } from 'react'
import { AxisLeft as VisxAxisLeft } from '@visx/axis'
import { Group } from '@visx/group'
import { Line } from '@visx/shape'
import { Text } from '@visx/text'
import ConfigContext from '../../ConfigContext'
import { BlurStrokeText } from '@cdc/core/components/BlurStrokeText'
import { HORIZON_DEFAULTS } from '../../types/Horizon'
import { calculateHorizonBands } from '../HorizonChart/helpers/calculateHorizonBands'
import {
  DEFAULT_TICK_LENGTH,
  LOGARITHMIC_TICK_LENGTH,
  MAJOR_LOG_TICK_LENGTH,
  TICK_LABEL_MARGIN_RIGHT,
  VALUE_ON_LINE_PADDING_NO_AXIS,
  VALUE_ON_LINE_PADDING_WITH_AXIS,
  LABEL_Y_PADDING_ABOVE_GRIDLINES,
  HORIZONTAL_TICK_OFFSET_ADJUSTMENT,
  ZERO_LINE_STROKE_WIDTH,
  BAR_MIN_HEIGHT,
  LOLLIPOP_SIZES
} from './axis.constants'

interface LeftAxisProps {
  yScale: any
  xScale: any
  yMax: number
  xMax: number
  yAxisWidth: number
  numTicks: number
  tickLabelFontSize: number
  axisLabelFontSize: number
  handleLeftTickFormatting: (tick: any, index: number, ticks: any[]) => string
  topYLabelRef?: React.RefObject<SVGTextElement>
  suffixRef?: React.RefObject<SVGTextElement>
  suffixWidth?: number
  horizontalYAxisLabelSpace?: number
  categoryLabelSpace?: number
  yLabelOffset?: number
}

const LeftAxis: React.FC<LeftAxisProps> = ({
  yScale,
  xScale,
  yMax,
  xMax,
  yAxisWidth,
  numTicks,
  tickLabelFontSize,
  axisLabelFontSize,
  handleLeftTickFormatting,
  topYLabelRef,
  suffixRef,
  suffixWidth = 0,
  horizontalYAxisLabelSpace = 0,
  categoryLabelSpace = 0,
  yLabelOffset = 0
}) => {
  const { config, colorScale, seriesHighlight } = useContext(ConfigContext)
  const { runtime, orientation, visualizationType, visualizationSubType, heights } = config

  const isLogarithmicAxis = config.yAxis.type === 'logarithmic'
  const { labelsAboveGridlines, hideAxis, inlineLabel } = config.yAxis
  const inlineLabelHasNoSpace = !inlineLabel?.includes(' ')

  return (
    <VisxAxisLeft
      scale={yScale}
      tickLength={isLogarithmicAxis ? LOGARITHMIC_TICK_LENGTH : DEFAULT_TICK_LENGTH}
      left={yAxisWidth - config.yAxis.axisPadding}
      label={runtime.yAxis.label || runtime.yAxis.label}
      stroke='#333'
      tickFormat={handleLeftTickFormatting}
      numTicks={numTicks}
    >
      {props => {
        const axisCenter =
          config.orientation === 'horizontal'
            ? Math.abs(props.axisToPoint.y - props.axisFromPoint.y) / 2
            : (props.axisFromPoint.y - props.axisToPoint.y) / 2
        const horizontalTickOffset =
          yMax / props.ticks.length / 2 -
          (yMax / props.ticks.length) * (1 - config.barThickness) +
          HORIZONTAL_TICK_OFFSET_ADJUSTMENT
        return (
          <Group className='left-axis'>
            {!config.yAxis.hideAxis && (
              <Line
                from={props.axisFromPoint}
                to={
                  runtime.horizontal
                    ? {
                        x: 0,
                        y:
                          config.visualizationType === 'Forest Plot'
                            ? yMax // Use yMax for forest plot since parentHeight is not available
                            : Number(heights.horizontal)
                      }
                    : props.axisToPoint
                }
                stroke='#000'
              />
            )}
            {orientation === 'vertical' && yScale.domain()[0] < 0 && (
              <Line from={{ x: props.axisFromPoint.x, y: yScale(0) }} to={{ x: xMax, y: yScale(0) }} stroke='#333' />
            )}
            {orientation === 'horizontal' && xScale.domain()[0] < 0 && (
              <Line from={{ x: xScale(0), y: 0 }} to={{ x: xScale(0), y: yMax }} stroke='#333' />
            )}
            {visualizationType === 'Bar' && orientation === 'horizontal' && xScale.domain()[0] < 0 && (
              <Line
                from={{ x: xScale(0), y: 0 }}
                to={{ x: xScale(0), y: yMax }}
                stroke='#333'
                strokeWidth={ZERO_LINE_STROKE_WIDTH}
              />
            )}
            {visualizationType !== 'Horizon Chart' &&
              props.ticks.map((tick, i) => {
                const minY = props.ticks[0].to.y
                const showTicks = String(tick.value).startsWith('1') || tick.value === 0.1 ? 'block' : 'none'
                const tickLength = showTicks === 'block' ? MAJOR_LOG_TICK_LENGTH : 0
                const to = { x: tick.to.x - tickLength, y: tick.to.y }

                // Vertical value/suffix vars
                const lastTick = props.ticks.length - 1 === i
                const useInlineLabel = lastTick && inlineLabel
                const hideTopTick = lastTick && inlineLabel && !inlineLabelHasNoSpace
                const valueOnLinePadding = hideAxis ? VALUE_ON_LINE_PADDING_NO_AXIS : VALUE_ON_LINE_PADDING_WITH_AXIS
                const labelXPadding = labelsAboveGridlines ? valueOnLinePadding : TICK_LABEL_MARGIN_RIGHT
                const labelYPadding = labelsAboveGridlines ? LABEL_Y_PADDING_ABOVE_GRIDLINES : 0
                const labelX = tick.to.x - labelXPadding
                const labelY = tick.to.y - labelYPadding
                const labelVerticalAnchor = labelsAboveGridlines ? 'end' : 'middle'
                const combineDomInlineLabelWithValue = inlineLabel && labelsAboveGridlines && lastTick
                const formattedValue = useInlineLabel
                  ? String(tick?.formattedValue || '').replace(config.dataFormat.suffix, '')
                  : tick?.formattedValue

                return (
                  <Group key={`vx-tick-${tick.value}-${i}`} className={'vx-axis-tick'}>
                    {!runtime.yAxis.hideTicks && !labelsAboveGridlines && !hideTopTick && (
                      <Line
                        key={`${tick.value}--hide-hideTicks`}
                        from={tick.from}
                        to={isLogarithmicAxis ? to : tick.to}
                        stroke={config.yAxis.tickColor}
                        display={orientation === 'horizontal' ? 'none' : 'block'}
                        fontSize={tickLabelFontSize}
                      />
                    )}

                    {orientation === 'horizontal' &&
                      visualizationType === 'Box Plot' &&
                      config.yAxis.labelPlacement === 'On Date/Category Axis' &&
                      !config.yAxis.hideLabel && (
                        <Text
                          x={tick.to.x}
                          y={yScale(tick.value) + yScale.bandwidth() / 2}
                          transform={`rotate(${
                            config.orientation === 'horizontal' ? config.runtime.yAxis.tickRotation || 0 : 0
                          }, ${tick.to.x}, ${tick.to.y})`}
                          verticalAnchor={'middle'}
                          textAnchor={'end'}
                          fontSize={tickLabelFontSize}
                        >
                          {tick.formattedValue}
                        </Text>
                      )}

                    {orientation === 'horizontal' &&
                      visualizationType === 'Bar' &&
                      config.yAxis.labelPlacement === 'On Date/Category Axis' &&
                      !config.yAxis.hideLabel &&
                      (() => {
                        const barGroupCount =
                          config.visualizationSubType === 'stacked' ? 1 : config.runtime.seriesKeys.length

                        // Calculate barHeight based on chart type (regular bar vs lollipop)
                        let barHeight
                        if (config.isLollipopChart) {
                          const lollipopBarWidth = LOLLIPOP_SIZES[config.lollipopSize] || LOLLIPOP_SIZES.small
                          barHeight = lollipopBarWidth * barGroupCount
                        } else {
                          barHeight = Number(config.barHeight) * barGroupCount
                        }

                        const totalBarHeight = barHeight + Number(config.barSpace)
                        const barGroupY = i === 0 ? 0 : totalBarHeight * i
                        const labelCenterY = barGroupY + barHeight / 2

                        return (
                          <Text
                            x={tick.from.x - yAxisWidth + horizontalYAxisLabelSpace}
                            y={labelCenterY}
                            verticalAnchor={'middle'}
                            textAnchor={'start'}
                            fontSize={tickLabelFontSize}
                            width={categoryLabelSpace}
                            lineHeight={'1.2em'}
                          >
                            {tick.formattedValue}
                          </Text>
                        )
                      })()}

                    {orientation === 'horizontal' &&
                      visualizationType !== 'Bar' &&
                      visualizationSubType === 'stacked' &&
                      config.yAxis.labelPlacement === 'On Date/Category Axis' &&
                      !config.yAxis.hideLabel && (
                        <Text
                          transform={`translate(${tick.to.x - 5}, ${
                            tick.to.y - minY + (Number(config.barHeight) - BAR_MIN_HEIGHT) / 2
                          }) rotate(-${runtime.horizontal ? runtime.yAxis.tickRotation : 0})`}
                          verticalAnchor={'start'}
                          textAnchor={'end'}
                          fontSize={tickLabelFontSize}
                        >
                          {tick.formattedValue}
                        </Text>
                      )}

                    {orientation === 'horizontal' && visualizationType === 'Paired Bar' && !config.yAxis.hideLabel && (
                      <Text
                        transform={`translate(${tick.to.x - 5}, ${
                          tick.to.y - minY + Number(config.barHeight) / 2
                        }) rotate(-${runtime.horizontal ? runtime.yAxis.tickRotation : 0})`}
                        textAnchor={'end'}
                        verticalAnchor='middle'
                        fontSize={tickLabelFontSize}
                      >
                        {tick.formattedValue}
                      </Text>
                    )}
                    {orientation === 'horizontal' &&
                      visualizationType === 'Deviation Bar' &&
                      !config.yAxis.hideLabel && (
                        <Text
                          transform={`translate(${tick.to.x - 5}, ${
                            config.isLollipopChart
                              ? tick.to.y - minY + 2
                              : tick.to.y - minY + Number(config.barHeight) / 2
                          }) rotate(-${runtime.horizontal ? runtime.yAxis.tickRotation : 0})`}
                          textAnchor={'end'}
                          verticalAnchor='middle'
                          fontSize={tickLabelFontSize}
                        >
                          {tick.formattedValue}
                        </Text>
                      )}

                    {orientation === 'vertical' && visualizationType === 'Bump Chart' && !config.yAxis.hideLabel && (
                      <>
                        <Text
                          display={config.useLogScale ? showTicks : 'block'}
                          dx={config.useLogScale ? -6 : 0}
                          x={config.runtime.horizontal ? tick.from.x + 2 : tick.to.x - 8.5}
                          y={tick.to.y - 13 + (config.runtime.horizontal ? horizontalTickOffset : 0)}
                          angle={-Number(config.yAxis.tickRotation) || 0}
                          verticalAnchor={config.runtime.horizontal ? 'start' : 'middle'}
                          textAnchor={config.runtime.horizontal ? 'start' : 'end'}
                          fill={config.yAxis.tickLabelColor}
                          fontSize={tickLabelFontSize}
                        >
                          {config.runtime.seriesLabelsAll[tick.formattedValue - 1]}
                        </Text>

                        {(seriesHighlight.length === 0 ||
                          seriesHighlight.includes(config.runtime.seriesLabelsAll[tick.formattedValue - 1])) && (
                          <rect
                            x={0 - yAxisWidth}
                            y={tick.to.y - 8 + (config.runtime.horizontal ? horizontalTickOffset : 7)}
                            width={yAxisWidth + xScale(xScale.domain()[0])}
                            height='2'
                            fill={colorScale(config.runtime.seriesLabelsAll[tick.formattedValue - 1])}
                          />
                        )}
                      </>
                    )}
                    {orientation === 'vertical' &&
                      visualizationType !== 'Paired Bar' &&
                      visualizationType !== 'Bump Chart' &&
                      !config.yAxis.hideLabel && (
                        <>
                          {/* INLINE LABEL BEHAVIOR: Dom suffix for 'inlineLabel' behavior */}
                          {/* inline label is shown alone and is allowed to 'overflow' to the right */}
                          {/* SPECIAL ONE CHAR CASE: a one character inlineLabel does not overflow */}
                          {/* IF VALUES ON LINE: suffix is combined with value to avoid having to calculate varying (now left-aligned) value widths */}
                          {inlineLabel && lastTick && !labelsAboveGridlines && (
                            <BlurStrokeText
                              innerRef={suffixRef}
                              display={isLogarithmicAxis ? showTicks : 'block'}
                              dx={isLogarithmicAxis ? -6 : 0}
                              x={labelX}
                              y={labelY}
                              angle={-Number(config.yAxis.tickRotation) || 0}
                              verticalAnchor={labelVerticalAnchor}
                              textAnchor={inlineLabelHasNoSpace ? 'end' : 'start'}
                              fill={config.yAxis.tickLabelColor}
                              stroke={'#fff'}
                              paintOrder={'stroke'} // keeps stroke under fill
                              strokeLinejoin='round'
                              style={{ whiteSpace: 'pre-wrap' }} // prevents leading spaces from being trimmed
                              fontSize={tickLabelFontSize}
                            >
                              {inlineLabel}
                            </BlurStrokeText>
                          )}

                          {/* VALUE */}
                          <BlurStrokeText
                            innerRef={el => lastTick && topYLabelRef && (topYLabelRef.current = el)}
                            display={isLogarithmicAxis ? showTicks : 'block'}
                            dx={isLogarithmicAxis ? -6 : 0}
                            x={inlineLabelHasNoSpace ? labelX - suffixWidth : labelX}
                            y={labelY + (config.runtime.horizontal ? horizontalTickOffset : 0)}
                            angle={-Number(config.yAxis.tickRotation) || 0}
                            verticalAnchor={config.runtime.horizontal ? 'start' : labelVerticalAnchor}
                            textAnchor={config.runtime.horizontal || labelsAboveGridlines ? 'start' : 'end'}
                            fill={config.yAxis.tickLabelColor}
                            stroke={'#fff'}
                            disableStroke={!labelsAboveGridlines}
                            strokeLinejoin='round'
                            paintOrder={'stroke'} // keeps stroke under fill
                            style={{ whiteSpace: 'pre-wrap' }} // prevents leading spaces from being trimmed
                            fontSize={tickLabelFontSize}
                          >
                            {`${formattedValue}${combineDomInlineLabelWithValue ? inlineLabel : ''}`}
                          </BlurStrokeText>
                        </>
                      )}
                  </Group>
                )
              })}

            {/* Horizon Chart series labels - rendered outside ticks loop since it uses custom band positioning */}
            {visualizationType === 'Horizon Chart' &&
              (() => {
                const horizonConfig = { ...HORIZON_DEFAULTS, ...config.horizon }

                const seriesKeys = runtime?.seriesKeys || []
                if (seriesKeys.length === 0) return null

                const { bandHeight, getRowY } = calculateHorizonBands(
                  seriesKeys.length,
                  yMax,
                  horizonConfig.bandGap,
                  horizonConfig.bottomPadding
                )

                return seriesKeys.map((seriesKey, index) => {
                  const labelY = getRowY(index) + bandHeight / 2
                  const labelX = -DEFAULT_TICK_LENGTH - TICK_LABEL_MARGIN_RIGHT
                  return (
                    <Group key={`horizon-tick-${seriesKey}`} className='horizon-axis-tick'>
                      {/* Tick mark */}
                      {!runtime.yAxis.hideTicks && (
                        <Line
                          from={{ x: 0, y: labelY }}
                          to={{ x: -DEFAULT_TICK_LENGTH, y: labelY }}
                          stroke={(config.yAxis as any).tickColor || '#333'}
                        />
                      )}
                      {/* Series label */}
                      {!config.yAxis.hideLabel && (
                        <Text
                          x={labelX}
                          y={labelY}
                          textAnchor='end'
                          verticalAnchor='middle'
                          fontSize={tickLabelFontSize}
                          fill={(config.yAxis as any).tickLabelColor || '#1c1d1f'}
                        >
                          {runtime?.seriesLabels?.[seriesKey] || seriesKey}
                        </Text>
                      )}
                    </Group>
                  )
                })
              })()}

            <Text
              className='y-label'
              textAnchor='middle'
              verticalAnchor='start'
              transform={`translate(${-1 * yAxisWidth + yLabelOffset}, ${axisCenter}) rotate(-90)`}
              fontWeight='bold'
              fill={config.yAxis.labelColor}
              fontSize={axisLabelFontSize}
            >
              {!config.hideYAxisLabel ? props.label : null}
            </Text>
          </Group>
        )
      }}
    </VisxAxisLeft>
  )
}

export default LeftAxis
