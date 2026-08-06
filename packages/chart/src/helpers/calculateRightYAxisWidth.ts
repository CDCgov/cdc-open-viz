import { getTextWidth } from '@cdc/core/helpers/getTextWidth'
import { DEFAULT_TICK_LENGTH, TICK_LABEL_MARGIN_RIGHT } from '../components/Axis/axis.constants'

type CalculateRightYAxisWidthProps = {
  axisLabelFontSize: number
  config: any
  formatNumber: (value: any, axis?: string) => string
  tickLabelFont: string
  tickValues?: number[]
  yScaleRight: any
}

const AXIS_LABEL_PADDING = 5

const getNumericConfigValue = value => {
  if (value === null || value === undefined || value === '') return 0
  const numericValue = Number(value)
  return Number.isFinite(numericValue) ? Math.max(0, numericValue) : 0
}

const getRightTickValues = ({ config, tickValues, yScaleRight }) => {
  if (tickValues) return tickValues

  if (typeof yScaleRight?.ticks === 'function') {
    return yScaleRight.ticks(config.runtime?.yAxis?.rightNumTicks || undefined)
  }

  if (typeof yScaleRight?.domain === 'function') {
    return yScaleRight.domain()
  }

  return []
}

const measureWidestLabel = (labels: string[], tickLabelFont: string) => {
  return labels.length ? Math.max(...labels.map(label => getTextWidth(label, tickLabelFont))) : 0
}

const getSideTitleSpace = ({ config, axisLabelFontSize }) => {
  const rightTitle = config.runtime?.yAxis?.rightLabel ?? config.yAxis?.rightLabel

  if (config.yAxis?.rightTitlePlacement === 'top' || !rightTitle) return 0

  return getNumericConfigValue(config.yAxis?.rightLabelOffsetSize) + axisLabelFontSize + AXIS_LABEL_PADDING
}

export const calculateRightYAxisWidth = ({
  axisLabelFontSize,
  config,
  formatNumber,
  tickLabelFont,
  tickValues,
  yScaleRight
}: CalculateRightYAxisWidthProps): number => {
  const configuredWidth = getNumericConfigValue(config.yAxis?.rightAxisSize)
  const measuredTickValues = getRightTickValues({ config, tickValues, yScaleRight })
  const formattedTicks = measuredTickValues.map(tick => String(formatNumber(tick, 'right') ?? ''))
  const tickLabelWidth = config.yAxis?.rightHideLabel ? 0 : measureWidestLabel(formattedTicks, tickLabelFont)
  const tickLabelSpace = tickLabelWidth ? tickLabelWidth + DEFAULT_TICK_LENGTH + TICK_LABEL_MARGIN_RIGHT : 0
  const sideTitleSpace = getSideTitleSpace({ config, axisLabelFontSize })
  const axisLineSpace = config.yAxis?.rightHideAxis && config.runtime?.yAxis?.rightHideTicks ? 0 : DEFAULT_TICK_LENGTH

  return Math.ceil(Math.max(configuredWidth, tickLabelSpace, sideTitleSpace, axisLineSpace))
}

export default calculateRightYAxisWidth
