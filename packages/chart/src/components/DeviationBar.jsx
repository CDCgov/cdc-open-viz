import { Line } from '@visx/shape'
import { Group } from '@visx/group'
import { useContext, useEffect, useRef, useState } from 'react'
import ConfigContext from '../ConfigContext'
import { Text } from '@visx/text'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { getContrastColor } from '@cdc/core/helpers/cove/accessibility'

export default function DeviationBar({ height, xScale }) {
  const { transformedData: data, config, formatNumber, twoColorPalette, getTextWidth, updateConfig, parseDate, formatDate, currentViewport } = useContext(ConfigContext)
  const { barStyle, tipRounding, roundingStyle, twoColor } = config
  const barRefs = useRef([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const radius = roundingStyle === 'standard' ? '8px' : roundingStyle === 'shallow' ? '5px' : roundingStyle === 'finger' ? '15px' : '0px'
  const fontSize = { small: 16, medium: 18, large: 20 }
  const isRounded = config.barStyle === 'rounded'
  const target = Number(config.xAxis.target)
  const seriesKey = config.series[0].dataKey
  const maxVal = Number(xScale.domain()[1])
  const hasNegativeValues = data.some(d => d[seriesKey] < 0)
  const shouldShowTargetLine = hasNegativeValues || target > 0 || xScale.domain()[0] < 0
  const borderWidth = config.barHasBorder === 'true' ? 1 : 0
  const lollipopBarHeight = config.lollipopSize === 'large' ? 7 : config.lollipopSize === 'medium' ? 6 : 5
  const lollipopShapeSize = config.lollipopSize === 'large' ? 14 : config.lollipopSize === 'medium' ? 12 : 10

  const targetX = Math.max(xScale(0), Math.min(xScale(target), xScale(maxVal)))

  const applyRadius = barPosition => {
    if (barPosition === undefined || barPosition === null || barStyle !== 'rounded') return
    let style = {}
    if (barPosition === 'left') {
      style = { borderRadius: `${radius} 0 0 ${radius}` }
    }

    if (barPosition === 'right') {
      style = { borderRadius: `0 ${radius} ${radius} 0` }
    }
    if (tipRounding === 'full') {
      style = { borderRadius: radius }
    }

    return style
  }

  const targetLabel = {
    calculate: function () {
      const firstBarValue = data[0][seriesKey]
      const barPosition = firstBarValue < target ? 'left' : 'right'
      const label = `${config.xAxis.targetLabel} ${formatNumber(config.xAxis.target || 0, 'left')}`
      const labelWidth = getTextWidth(label, `bold ${fontSize[config.fontSize]}px sans-serif`)
      let labelY = config.isLollipopChart ? lollipopBarHeight / 2 : Number(config.barHeight) / 2
      let paddingX = 0
      let labelX = 0
      let showLabel = false

      if (barPosition === 'right') {
        paddingX = -10
        showLabel = labelWidth - paddingX < targetX
        labelX = targetX - labelWidth
      }

      if (barPosition === 'left') {
        paddingX = 10
        showLabel = xScale(maxVal) - targetX > labelWidth + paddingX
        labelX = targetX
      }

      this.text = label
      this.y = labelY
      this.x = labelX
      this.padding = paddingX
      this.showLabel = config.xAxis.showTargetLabel ? showLabel : false
    }
  }
  targetLabel.calculate()

  const targetRef = useRef(null)

  const entry = useIntersectionObserver(targetRef, {})

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      barRefs.current.forEach(bar => {
        bar.style.transition = 'none'
        bar.style.transform = 'translate(0) scale(1)'
      })
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const [animatedChart, setAnimatedChart] = useState(false)

  useEffect(() => {
    if (entry?.isIntersecting) {
      setTimeout(() => {
        setAnimatedChart(true)
      }, 100)
    }
  }, [entry?.isIntersecting, config.animate]) // eslint-disable-line

  useEffect(() => {
    barRefs.current.forEach((bar, i) => {
      if (config.animate) {
        const normalizedTarget = (target / maxVal) * 100
        bar.style.opacity = '0'
        bar.style.transform = `translate(${normalizedTarget / 1.07}%) scale(0, 1)`
        setTimeout(() => {
          bar.style.opacity = '1'
          bar.style.transform = 'translate(0) scale(1)'
          bar.style.transition = 'transform 0.5s ease'
        }, 100)
      } else {
        bar.style.transition = 'none'
        bar.style.opacity = '0'
      }
      if (!config.animate) {
        bar.style.transition = 'none'
        bar.style.opacity = '1'
      }
    })
  }, [config.animate, config, animatedChart])

  // if (!config || config?.series?.length !== 1) return <></>

  return (
    <ErrorBoundary component='Deviation Bar'>
      <Group left={Number(config.xAxis.size)}>
        {data.map((d, index) => {
          const barValue = Number(d[seriesKey])
          const barHeight = config.isLollipopChart ? lollipopBarHeight : Number(config.barHeight)
          const barSpace = Number(config.barSpace)
          const barWidth = Math.abs(xScale(barValue) - targetX)
          const barBaseX = xScale(barValue)
          const barX = barValue > target ? targetX : barBaseX
          const barPosition = barValue < target ? 'left' : 'right'

          // update bar Y to give dynamic Y when user applyes BarSpace
          let barY = 0
          barY = index !== 0 ? (barSpace + barHeight + borderWidth) * index : barY
          const totalheight = (barSpace + barHeight + borderWidth) * data.length
          config.heights.horizontal = totalheight

          // text,labels postiions
          const textWidth = getTextWidth(formatNumber(barValue, 'left'), `normal ${fontSize[config.fontSize]}px sans-serif`)
          const textFits = textWidth < barWidth - 6
          const textX = barBaseX
          const textY = barY + barHeight / 2

          // lollipop shapes
          const circleX = barBaseX
          const circleY = barY + barHeight / 2
          const squareX = barBaseX
          const squareY = barY - barHeight / 2
          const borderRadius = applyRadius(barPosition)
          // colors
          const [leftColor, rightColor] = twoColorPalette[twoColor.palette]
          const barColor = { left: leftColor, right: rightColor }
          const fill = getContrastColor('#000', barColor[barPosition])

          let textProps = getTextProps(config.isLollipopChart, textFits, lollipopShapeSize, fill)
          // tooltips
          const xAxisValue = formatNumber(barValue, 'left')
          const yAxisValue = config.runtime.yAxis.type === 'date' ? formatDate(parseDate(data[index][config.runtime.originalXAxis.dataKey])) : data[index][config.runtime.originalXAxis.dataKey]
          let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${yAxisValue}` : yAxisValue
          let xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisValue
          const tooltip = `<div>
          ${yAxisTooltip}<br />
          ${xAxisTooltip}
            </div>`

          return (
            <Group key={`deviation-bar-${config.orientation}-${seriesKey}-${index}`}>
              <foreignObject
                ref={el => {
                  // targetRef.current = el
                  barRefs.current[index] = el
                }}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                data-tooltip-html={tooltip}
                data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                tabIndex={-1}
              >
                <div style={{ width: barWidth, height: barHeight, border: `${borderWidth}px solid #333`, backgroundColor: barColor[barPosition], ...borderRadius }}></div>
              </foreignObject>
              {config.yAxis.displayNumbersOnBar && (
                <Text verticalAnchor='middle' x={textX} y={textY} {...textProps[barPosition]}>
                  {formatNumber(d[seriesKey], 'left')}
                </Text>
              )}

              {config.isLollipopChart && config.lollipopShape === 'circle' && <circle cx={circleX} cy={circleY} r={lollipopShapeSize / 2} fill={barColor[barPosition]} style={{ filter: 'unset', opacity: 1 }} />}
              {config.isLollipopChart && config.lollipopShape === 'square' && <rect x={squareX} y={squareY} width={lollipopShapeSize} height={lollipopShapeSize} fill={barColor[barPosition]} style={{ opacity: 1, filter: 'unset' }}></rect>}
            </Group>
          )
        })}
        {targetLabel.showLabel && (
          <Text fontWeight='bold' dx={targetLabel.padding} verticalAnchor='middle' x={targetLabel.x} y={targetLabel.y}>
            {targetLabel.text}
          </Text>
        )}

        {shouldShowTargetLine && <Line from={{ x: targetX, y: 0 }} to={{ x: targetX, y: height }} stroke='#333' strokeWidth={2} />}
      </Group>
      <foreignObject y={height / 2} ref={targetRef}></foreignObject>
    </ErrorBoundary>
  )
}

// create function to position text based where bar is located left/or right
function getTextProps(isLollipopChart, textFits, lollipopShapeSize, fill) {
  if (isLollipopChart) {
    return {
      right: {
        textAnchor: 'start',
        dx: lollipopShapeSize + 6,
        fill: '#000000'
      },
      left: {
        textAnchor: 'end',
        dx: -lollipopShapeSize,
        fill: '#000000'
      }
    }
  } else {
    return {
      right: {
        textAnchor: textFits ? 'end' : 'start',
        dx: textFits ? -6 : 6,
        fill: textFits ? fill : '#000000'
      },
      left: {
        textAnchor: textFits ? 'start' : 'end',
        dx: textFits ? 6 : -6,
        fill: textFits ? fill : '#000000'
      }
    }
  }
}
