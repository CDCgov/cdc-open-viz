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
  axisLabelFontSize: number
  handleLeftTickFormatting: (tick: any, index: number, ticks: any[]) => string
  categoryLabelSpace?: number
  horizontalYAxisLabelSpace?: number
}

const AXIS_LABEL_PADDING = 5
const MIN_LEFT_AXIS_WIDTH = 0
const MAX_LEFT_AXIS_WIDTH_RATIO = 0.45

type TickValueProps = Omit<
  CalculateLeftYAxisWidthProps,
  'parentWidth' | 'tickLabelFont' | 'axisLabelFontSize' | 'handleLeftTickFormatting'
>

const getTickValues = ({ config, data, yScale, numTicks }: TickValueProps) => {
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

const getAxisLabelSpace = (config: any, axisLabelFontSize: number) => {
  return !config.hideYAxisLabel && config.runtime.yAxis.label ? axisLabelFontSize + AXIS_LABEL_PADDING : 0
}

const measureWidestLabel = (labels: string[], tickLabelFont: string) => {
  return labels.length ? Math.max(...labels.map(label => getTextWidth(label, tickLabelFont))) : 0
}

const clampYAxisWidth = (calculatedWidth: number, parentWidth: number) => {
  const maxAllowedWidth = parentWidth * MAX_LEFT_AXIS_WIDTH_RATIO
  return Math.max(MIN_LEFT_AXIS_WIDTH, Math.min(Math.ceil(calculatedWidth), maxAllowedWidth))
}

const formatMeasuredTickLabels = ({
  tickValues,
  handleLeftTickFormatting,
  inlineLabel,
  labelsAboveGridlines
}: {
  tickValues: any[]
  handleLeftTickFormatting: (tick: any, index: number, ticks: any[]) => string
  inlineLabel?: string
  labelsAboveGridlines?: boolean
}) => {
  const inlineLabelHasNoSpace = !inlineLabel?.includes(' ')

  return tickValues.map((tick, index, ticks) => {
    const formatted = handleLeftTickFormatting(tick, index, ticks)
    const isLastTick = index === ticks.length - 1

    if (isLastTick && inlineLabel && (labelsAboveGridlines || inlineLabelHasNoSpace)) {
      return `${formatted}${inlineLabel}`
    }

    return String(formatted ?? '')
  })
}

const getHorizonChartWidth = ({
  config,
  parentWidth,
  tickLabelFont,
  axisLabelFontSize
}: Pick<CalculateLeftYAxisWidthProps, 'config' | 'parentWidth' | 'tickLabelFont' | 'axisLabelFontSize'>) => {
  const seriesKeys =
    config.runtime?.seriesKeys && config.runtime.seriesKeys.length > 0
      ? config.runtime.seriesKeys
      : config.series?.map(series => series.dataKey) || []
  const labels = seriesKeys.map(seriesKey => String(config.runtime?.seriesLabels?.[seriesKey] || seriesKey))
  const labelWidth = config.yAxis.hideLabel ? 0 : measureWidestLabel(labels, tickLabelFont)
  const calculatedWidth =
    labelWidth +
    DEFAULT_TICK_LENGTH +
    TICK_LABEL_MARGIN_RIGHT +
    getAxisLabelSpace(config, axisLabelFontSize) +
    Number(config.yAxis.axisPadding || 0)

  return clampYAxisWidth(calculatedWidth, parentWidth)
}

const getHorizontalAxisWidth = ({
  config,
  tickLabelWidth,
  categoryLabelSpace,
  horizontalYAxisLabelSpace
}: Pick<CalculateLeftYAxisWidthProps, 'config' | 'categoryLabelSpace' | 'horizontalYAxisLabelSpace'> & {
  tickLabelWidth: number
}) => {
  const horizontalTickWidth = tickLabelWidth + DEFAULT_TICK_LENGTH + TICK_LABEL_MARGIN_RIGHT
  return Math.max(horizontalTickWidth + horizontalYAxisLabelSpace, categoryLabelSpace + horizontalYAxisLabelSpace)
}

const getCategoricalAxisWidth = ({
  config,
  baseWidth,
  tickLabelFont
}: Pick<CalculateLeftYAxisWidthProps, 'config' | 'tickLabelFont'> & {
  baseWidth: number
}) => {
  if (config.yAxis.type !== 'categorical' || config.orientation !== 'vertical' || config.yAxis.hideLabel) {
    return baseWidth
  }

  const categoryLabels = (config.yAxis.categories || []).map(category => String(category?.label || ''))
  const categoryLabelWidth = measureWidestLabel(categoryLabels, tickLabelFont)

  return Math.max(baseWidth, categoryLabelWidth + DEFAULT_TICK_LENGTH + TICK_LABEL_MARGIN_RIGHT)
}

export const calculateLeftYAxisWidth = ({
  config,
  data,
  yScale,
  numTicks,
  parentWidth,
  tickLabelFont,
  axisLabelFontSize,
  handleLeftTickFormatting,
  categoryLabelSpace = 0,
  horizontalYAxisLabelSpace = 0
}: CalculateLeftYAxisWidthProps): number => {
  if (config.visualizationType === 'Horizon Chart') {
    return getHorizonChartWidth({ config, parentWidth, tickLabelFont, axisLabelFontSize })
  }

  const tickValues = getTickValues({ config, data, yScale, numTicks })
  const { hideAxis, inlineLabel, labelsAboveGridlines } = config.yAxis
  const formattedTicks = formatMeasuredTickLabels({
    tickValues,
    handleLeftTickFormatting,
    inlineLabel,
    labelsAboveGridlines
  })
  const tickLabelWidth = config.yAxis.hideLabel ? 0 : measureWidestLabel(formattedTicks, tickLabelFont)

  const valueOnLinePadding = hideAxis
    ? Math.abs(VALUE_ON_LINE_PADDING_NO_AXIS)
    : Math.abs(VALUE_ON_LINE_PADDING_WITH_AXIS)
  const tickPadding = labelsAboveGridlines ? valueOnLinePadding : TICK_LABEL_MARGIN_RIGHT + DEFAULT_TICK_LENGTH
  const verticalAxisLabelSpace = getAxisLabelSpace(config, axisLabelFontSize)
  const reservedTickLabelWidth = labelsAboveGridlines ? 0 : tickLabelWidth
  const reservedTickPadding = labelsAboveGridlines || config.yAxis.hideLabel ? 0 : tickPadding

  const defaultCalculatedWidth =
    reservedTickLabelWidth + reservedTickPadding + verticalAxisLabelSpace + Number(config.yAxis.axisPadding || 0)

  if (config.orientation === 'horizontal') {
    const calculatedWidth = getHorizontalAxisWidth({
      config,
      tickLabelWidth,
      categoryLabelSpace,
      horizontalYAxisLabelSpace
    })

    return clampYAxisWidth(calculatedWidth, parentWidth)
  }

  const calculatedWidth = getCategoricalAxisWidth({
    config,
    baseWidth: defaultCalculatedWidth,
    tickLabelFont
  })

  return clampYAxisWidth(calculatedWidth, parentWidth)
}

export default calculateLeftYAxisWidth
