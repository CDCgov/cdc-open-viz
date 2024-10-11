import React from 'react'

export default function createBarElement(props) {
  const {
    config,
    index,
    id,
    className,
    background,
    borderColor,
    borderWidth,
    width,
    height,
    x,
    y,
    onMouseOver,
    onMouseLeave,
    onClick,
    tooltipHtml,
    tooltipId,
    styleOverrides,
    seriesHighlight,
    type
  } = props

  const adjustedWidth = Math.max(0, width)
  const adjustedHeight = Math.max(0, height)

  const isHorizontal = config.orientation === 'horizontal'
  const isRounded = config.barStyle === 'rounded'
  const isStacked = config.visualizationSubType === 'stacked'
  const tipRounding = config.tipRounding
  const comboBarSeriesCount = config.visualizationType === 'Combo' && config.runtime?.barSeriesKeys?.length
  const barSeriesCount = config.runtime.seriesKeys.length
  const isolateSeriesCount =
    config.visualizationType === 'Bar' && config.legend.axisAlign && seriesHighlight?.length
      ? seriesHighlight?.length
      : 0
  const stackCount = comboBarSeriesCount
    ? comboBarSeriesCount
    : isolateSeriesCount
    ? isolateSeriesCount
    : barSeriesCount

  let radius =
    config.roundingStyle === 'standard'
      ? 8
      : config.roundingStyle === 'shallow'
      ? 5
      : config.roundingStyle === 'finger'
      ? 15
      : 0
  if (radius > adjustedWidth / 2 || radius > adjustedHeight / 2) {
    radius = Math.min(adjustedWidth / 2, adjustedHeight / 2)
  }

  const roundTop = () => {
    return `M${x},${y + adjustedHeight}
      L${x},${y + radius}
      Q${x},${y} ${x + radius},${y}
      L${x + adjustedWidth - radius},${y}
      Q${x + adjustedWidth},${y} ${x + adjustedWidth},${y + radius}
      L${x + adjustedWidth},${y + adjustedHeight}
      L${x},${y + adjustedHeight}`
  }

  const roundRight = () => {
    return `M${x},${y + adjustedHeight}
      L${x},${y}
      L${x + adjustedWidth - radius},${y}
      Q${x + adjustedWidth},${y} ${x + adjustedWidth},${y + radius}
      L${x + adjustedWidth},${y + adjustedHeight - radius}
      Q${x + adjustedWidth},${y + adjustedHeight} ${x + adjustedWidth - radius},${y + adjustedHeight}
      L${x},${y + adjustedHeight}`
  }

  const roundBottom = () => {
    return `M${x + radius},${y + adjustedHeight}
      Q${x},${y + adjustedHeight} ${x},${y + adjustedHeight - radius}
      L${x},${y}
      L${x + adjustedWidth},${y}
      L${x + adjustedWidth},${y + adjustedHeight - radius}
      Q${x + adjustedWidth},${y + adjustedHeight} ${x + adjustedWidth - radius},${y + adjustedHeight}
      L${x + radius},${y + adjustedHeight}`
  }

  const roundLeft = () => {
    return `M${x + radius},${y + adjustedHeight}
      Q${x},${y + adjustedHeight} ${x},${y + adjustedHeight - radius}
      L${x},${y + radius}
      Q${x},${y} ${x + radius},${y}
      L${x + adjustedWidth},${y}
      L${x + adjustedWidth},${y + adjustedHeight}
      L${x + radius},${y + adjustedHeight}`
  }

  const roundFull = () => {
    return `M${x + radius},${y + adjustedHeight}
      Q${x},${y + adjustedHeight} ${x},${y + adjustedHeight - radius}
      L${x},${y + radius}
      Q${x},${y} ${x + radius},${y}
      L${x + adjustedWidth - radius},${y}
      Q${x + adjustedWidth},${y} ${x + adjustedWidth},${y + radius}
      L${x + adjustedWidth},${y + adjustedHeight - radius}
      Q${x + adjustedWidth},${y + adjustedHeight} ${x + adjustedWidth - radius},${y + adjustedHeight}
      L${x + radius},${y + adjustedHeight}`
  }

  const nonRounded = () => {
    return `M${x},${y}
      L${x + adjustedWidth},${y}
      L${x + adjustedWidth},${y + adjustedHeight}
      L${x},${y + adjustedHeight}
      L${x},${y}`
  }

  let path
  if (index === undefined || index === null || !isRounded || type == 'axisBar') {
    path = nonRounded()
  } else {
    path = nonRounded()

    if ((isStacked && index + 1 === stackCount) || !isStacked) {
      path = isHorizontal ? roundRight() : roundTop()
    }
    if (!isStacked && index === -1) {
      path = isHorizontal ? roundLeft() : roundBottom()
    }
    if (tipRounding === 'full' && isStacked && index === 0 && stackCount > 1) {
      path = isHorizontal ? roundLeft() : roundBottom()
    }
    if (tipRounding === 'full' && ((isStacked && index === 0 && stackCount === 1) || !isStacked)) {
      path = roundFull()
    }
  }

  return (
    <path
      id={id}
      className={className}
      d={path}
      fill={background}
      stroke={borderColor}
      strokeWidth={borderWidth}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      data-tooltip-html={tooltipHtml}
      data-tooltip-id={tooltipId}
      style={{
        transition: 'all 0.2s linear',
        ...styleOverrides
      }}
    ></path>
  )
}
