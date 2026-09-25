import { useContext, useEffect, useState } from 'react'
import { animated, useTransition } from '@react-spring/web'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Button from '@cdc/core/components/elements/Button'
import ConfigContext from '../../ConfigContext'
import { findColumnConfigByName, getSeriesColumnFormattingParams } from '../../helpers/seriesColumnSettings'
import { buildSeriesTooltipListHtml } from '../../helpers/tooltipHelpers'
import { type BarRaceEligibility } from './helpers'
import './bar-chart-race.scss'

const FRAME_DURATION_MS = 1000
const ROW_HEIGHT = 48

type Props = {
  parentWidth: number
  race: BarRaceEligibility
}

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
  )

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener?.('change', updatePreference)
    return () => mediaQuery.removeEventListener?.('change', updatePreference)
  }, [])

  return prefersReducedMotion
}

const BarChartRace = ({ parentWidth, race }: Props) => {
  const { colorScale, config, formatNumber, transformedData = [] } = useContext(ConfigContext)
  const [frameIndex, setFrameIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  const series = config.series[0]
  const tooltipId = `cdc-open-viz-tooltip-${config.runtime?.uniqueId || 'bar-race'}-race`
  const frameSignature = JSON.stringify({
    frameKey: config.xAxis?.dataKey,
    categoryKey: series?.dynamicCategory,
    valueKey: series?.dataKey,
    rows: transformedData.map(row => [
      row?.[config.xAxis?.dataKey],
      row?.[series?.dynamicCategory],
      row?.[series?.dataKey]
    ])
  })

  useEffect(() => {
    setFrameIndex(0)
    setIsPlaying(false)
  }, [frameSignature])

  useEffect(() => {
    if (!isPlaying) return
    const timer = window.setInterval(() => {
      setFrameIndex(currentFrame => {
        if (currentFrame >= race.frames.length - 1) {
          setIsPlaying(false)
          return currentFrame
        }
        const nextFrame = currentFrame + 1
        if (nextFrame >= race.frames.length - 1) setIsPlaying(false)
        return nextFrame
      })
    }, FRAME_DURATION_MS)
    return () => window.clearInterval(timer)
  }, [isPlaying, race.frames.length])

  const frame = race.frames[Math.min(frameIndex, Math.max(0, race.frames.length - 1))]
  const columnConfig = findColumnConfigByName(config.columns, series.dataKey)?.columnConfig
  const columnFormatting = getSeriesColumnFormattingParams(columnConfig)
  const getCategoryColor = (category: string) => {
    const runtimeCategory = config.runtime?.seriesKeys?.find(value => String(value).trim() === category) ?? category
    return colorScale?.(runtimeCategory) || '#005ea8'
  }
  const formatValue = (value: number) =>
    formatNumber?.(
      value,
      series.axis || 'left',
      false,
      columnFormatting?.addColPrefix,
      columnFormatting?.addColSuffix,
      columnFormatting?.addColRoundTo
    ) ?? String(value)
  const getTooltipHtml = (category: string, value: number) =>
    buildSeriesTooltipListHtml({
      config,
      colorScale,
      heading: frame.key,
      seriesKey: category,
      seriesText: `${category}: ${formatValue(value)}`
    })
  const barAreaWidth = Math.max(0, parentWidth * 0.72 - 120)
  const isAtEnd = frameIndex === race.frames.length - 1
  const frameAxisLabel = config.xAxis?.label || config.xAxis?.dataKey || 'Date/Category'

  const transitions = useTransition(frame?.items ?? [], {
    keys: item => item.category,
    from: { opacity: 0, top: (frame?.items.length ?? 0) * ROW_HEIGHT, width: 0 },
    enter: item => ({
      opacity: 1,
      top: item.rank * ROW_HEIGHT,
      width: race.globalMax > 0 ? (item.value / race.globalMax) * barAreaWidth : 0
    }),
    update: item => ({
      opacity: 1,
      top: item.rank * ROW_HEIGHT,
      width: race.globalMax > 0 ? (item.value / race.globalMax) * barAreaWidth : 0
    }),
    leave: { opacity: 0, width: 0 },
    immediate: prefersReducedMotion,
    config: { tension: 170, friction: 26 }
  })

  if (!race.eligible || !frame) return null

  const handlePlayback = () => {
    if (isAtEnd) {
      setFrameIndex(0)
      setIsPlaying(true)
      return
    }
    setIsPlaying(current => !current)
  }

  return (
    <section className='bar-chart-race' aria-label={`Bar chart race for ${frame.key}`}>
      <div className='bar-chart-race__header'>
        <strong className='bar-chart-race__frame' aria-live='polite'>
          {frame.key}
        </strong>
        <Button
          type='button'
          variant='secondary'
          size='sm'
          className='bar-chart-race__playback'
          onClick={handlePlayback}
          data-html2canvas-ignore='true'
        >
          {isAtEnd ? 'Replay' : isPlaying ? 'Pause' : 'Play'}
        </Button>
      </div>
      <div className='bar-chart-race__plot' style={{ height: `${frame.items.length * ROW_HEIGHT}px` }}>
        {transitions((style, item) => (
          <animated.div
            className='bar-chart-race__row'
            data-category={item.category}
            data-tooltip-id={tooltipId}
            data-tooltip-html={getTooltipHtml(item.category, item.value)}
            tabIndex={0}
            style={{ opacity: style.opacity, top: style.top }}
          >
            <span className='bar-chart-race__category'>{item.category}</span>
            <div className='bar-chart-race__bar-area'>
              <animated.div
                className='bar-chart-race__bar'
                style={{ width: style.width, backgroundColor: getCategoryColor(item.category) }}
              />
              <span className='bar-chart-race__value'>{formatValue(item.value)}</span>
            </div>
          </animated.div>
        ))}
      </div>
      <ReactTooltip
        id={tooltipId}
        variant='light'
        arrowColor='rgba(0,0,0,0)'
        className='tooltip'
        style={{ background: `rgba(255,255,255, ${(config.tooltips?.opacity ?? 90) / 100})`, color: 'black' }}
      />
      <div className='bar-chart-race__frame-axis' role='group' aria-label={`${frameAxisLabel} axis`}>
        <div className='bar-chart-race__frame-axis-ticks'>
          {race.frames.map((raceFrame, index) => (
            <span
              className={`bar-chart-race__frame-axis-tick${index === frameIndex ? ' is-active' : ''}`}
              aria-current={index === frameIndex ? 'step' : undefined}
              key={raceFrame.key}
            >
              <span className='bar-chart-race__frame-axis-mark' aria-hidden='true' />
              <span className='bar-chart-race__frame-axis-value'>{raceFrame.key}</span>
            </span>
          ))}
        </div>
        <span className='bar-chart-race__frame-axis-label'>{frameAxisLabel}</span>
      </div>
    </section>
  )
}

export default BarChartRace
