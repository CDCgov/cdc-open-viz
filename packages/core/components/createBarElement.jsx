export default function createBarElement(props) {
  const { config, index, id, className, background, borderColor, borderWidth, width, height, x, y, onMouseOver, onMouseLeave, onClick, tooltipHtml, tooltipId, styleOverrides, seriesHighlight } = props

  const isHorizontal = config.orientation === 'horizontal'
  const isRounded = config.barStyle === 'rounded'
  const isStacked = config.visualizationSubType === 'stacked'
  const tipRounding = config.tipRounding
  const stackCount = config.legend.axisAlign && seriesHighlight?.length ? seriesHighlight?.length : config.runtime.seriesKeys.length

  let radius = config.roundingStyle === 'standard' ? 8 : config.roundingStyle === 'shallow' ? 5 : config.roundingStyle === 'finger' ? 15 : 0
  if (radius > width / 2 || radius > height / 2) {
    radius = Math.min(width / 2, height / 2)
  }

  const roundTop = () => {
    return `M${x},${y + height}
      L${x},${y + radius}
      Q${x},${y} ${x + radius},${y}
      L${x + width - radius},${y}
      Q${x + width},${y} ${x + width},${y + radius}
      L${x + width},${y + height}
      L${x},${y + height}`
  }

  const roundRight = () => {
    return `M${x},${y + height}
      L${x},${y}
      L${x + width - radius},${y}
      Q${x + width},${y} ${x + width},${y + radius}
      L${x + width},${y + height - radius}
      Q${x + width},${y + height} ${x + width - radius},${y + height}
      L${x},${y + height}`
  }

  const roundBottom = () => {
    return `M${x + radius},${y + height}
      Q${x},${y + height} ${x},${y + height - radius}
      L${x},${y}
      L${x + width},${y}
      L${x + width},${y + height - radius}
      Q${x + width},${y + height} ${x + width - radius},${y + height}
      L${x + radius},${y + height}`
  }

  const roundLeft = () => {
    return `M${x + radius},${y + height}
      Q${x},${y + height} ${x},${y + height - radius}
      L${x},${y + radius}
      Q${x},${y} ${x + radius},${y}
      L${x + width},${y}
      L${x + width},${y + height}
      L${x + radius},${y + height}`
  }

  const roundFull = () => {
    return `M${x + radius},${y + height}
      Q${x},${y + height} ${x},${y + height - radius}
      L${x},${y + radius}
      Q${x},${y} ${x + radius},${y}
      L${x + width - radius},${y}
      Q${x + width},${y} ${x + width},${y + radius}
      L${x + width},${y + height - radius}
      Q${x + width},${y + height} ${x + width - radius},${y + height}
      L${x + radius},${y + height}`
  }

  const nonRounded = () => {
    return `M${x},${y}
      L${x + width},${y}
      L${x + width},${y + height}
      L${x},${y + height}
      L${x},${y}`
  }

  let path
  if (index === undefined || index === null || !isRounded) {
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
