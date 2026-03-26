import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import {
  DEFAULT_TICK_LENGTH,
  TICK_LABEL_MARGIN_RIGHT,
  VALUE_ON_LINE_PADDING_NO_AXIS,
  VALUE_ON_LINE_PADDING_WITH_AXIS
} from '../components/Axis/axis.constants'

type CalculateLeftYAxisWidthProps = {
  config: any
  data: any[]
  yScale: any
  numTicks: number
  parentWidth: number
  tickLabelFont: string
  tickLabelFontSize: number
  axisLabelFontSize: number
  handleLeftTickFormatting: (tick: any, index: number, ticks: any[]) => string
  categoryLabelSpace?: number
  horizontalYAxisLabelSpace?: number
}

const AXIS_LABEL_PADDING = 5
const MIN_LEFT_AXIS_WIDTH = 16
const DEFAULT_AXIS_LABEL_SPACE = 30
const MAX_LEFT_AXIS_WIDTH_RATIO = 0.45

const getTickValues = ({
  config,
  data,
  yScale,
  numTicks
}: Omit<
  CalculateLeftYAxisWidthProps,
  'parentWidth' | 'tickLabelFont' | 'tickLabelFontSize' | 'axisLabelFontSize' | 'handleLeftTickFormatting'
>) => {
  if (config.visualizationType === 'Forest Plot') {
    return data.map((_, index) => index)
  }

  if (typeof yScale?.ticks === 'function') {
    return yScale.ticks(numTicks)
  }

  if (typeof yScale?.domain === 'function') {
    return yScale.domain()
  }

  return []
}

export const calculateLeftYAxisWidth = ({
  config,
  data,
  yScale,
  numTicks,
  parentWidth,
  tickLabelFont,
  tickLabelFontSize,
  axisLabelFontSize,
  handleLeftTickFormatting,
  categoryLabelSpace = 0,
  horizontalYAxisLabelSpace = 0
}: CalculateLeftYAxisWidthProps): number => {
  const tickValues = getTickValues({ config, data, yScale, numTicks })
  const { hideAxis, hideLabel, inlineLabel, labelsAboveGridlines } = config.yAxis
  const inlineLabelHasNoSpace = !inlineLabel?.includes(' ')

  const formattedTicks = tickValues.map((tick, index, ticks) => {
    const formatted = handleLeftTickFormatting(tick, index, ticks)
    const isLastTick = index === ticks.length - 1

    if (isLastTick && inlineLabel) {
      if (labelsAboveGridlines) {
        return `${formatted}${inlineLabel}`
      }

      if (inlineLabelHasNoSpace) {
        return `${formatted}${inlineLabel}`
      }
    }

    return String(formatted ?? '')
  })

  const tickLabelWidth = formattedTicks.length
    ? Math.max(...formattedTicks.map(label => getTextWidth(label, tickLabelFont)))
    : 0

  const valueOnLinePadding = hideAxis
    ? Math.abs(VALUE_ON_LINE_PADDING_NO_AXIS)
    : Math.abs(VALUE_ON_LINE_PADDING_WITH_AXIS)
  const tickPadding = labelsAboveGridlines ? valueOnLinePadding : TICK_LABEL_MARGIN_RIGHT + DEFAULT_TICK_LENGTH
  const verticalAxisLabelSpace =
    !config.hideYAxisLabel && config.runtime.yAxis.label ? axisLabelFontSize + AXIS_LABEL_PADDING : 0

  let estimatedWidth = tickLabelWidth + tickPadding + verticalAxisLabelSpace + Number(config.yAxis.axisPadding || 0)

  if (config.orientation === 'horizontal') {
    const horizontalTickWidth = tickLabelWidth + DEFAULT_TICK_LENGTH + TICK_LABEL_MARGIN_RIGHT
    estimatedWidth = Math.max(
      horizontalTickWidth + horizontalYAxisLabelSpace,
      categoryLabelSpace + horizontalYAxisLabelSpace,
      !hideLabel && config.runtime.yAxis.label ? DEFAULT_AXIS_LABEL_SPACE : 0
    )
  }

  if (config.yAxis.type === 'categorical' && config.orientation === 'vertical') {
    const categoryLabels = (config.yAxis.categories || []).map(category => String(category?.label || ''))
    const categoryLabelWidth = categoryLabels.length
      ? Math.max(...categoryLabels.map(label => getTextWidth(label, tickLabelFont)))
      : 0
    estimatedWidth = Math.max(estimatedWidth, categoryLabelWidth + DEFAULT_TICK_LENGTH + TICK_LABEL_MARGIN_RIGHT)
  }

  const maxAllowedWidth = Math.max(parentWidth * MAX_LEFT_AXIS_WIDTH_RATIO, MIN_LEFT_AXIS_WIDTH)
  return Math.max(MIN_LEFT_AXIS_WIDTH, Math.min(Math.ceil(estimatedWidth), maxAllowedWidth))
}

export default calculateLeftYAxisWidth
