import { useContext, useEffect, useState } from 'react'
import { animated, useTransition } from '@react-spring/web'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import ConfigContext from '../../ConfigContext'
import { findColumnConfigByName, getSeriesColumnFormattingParams } from '../../helpers/seriesColumnSettings'
import { buildSeriesTooltipListHtml } from '../../helpers/tooltipHelpers'
import RacePlaybackButton from '../RacePlaybackButton'
import { clampRaceSecondsPerFrame } from '../raceTiming'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { type BarRaceEligibility } from './helpers'
import './bar-chart-race.scss'

const ROW_HEIGHT = 48

type Props = {
  parentWidth: number
  race: BarRaceEligibility
}

const BarChartRace = ({ parentWidth, race }: Props) => {
  const { colorScale, config, formatNumber, setRaceTiming, transformedData = [] } = useContext(ConfigContext)
  const [frameIndex, setFrameIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  const secondsPerFrame = clampRaceSecondsPerFrame(config.barRace?.secondsPerFrame)
  const totalSeconds = (race.frames.length - 1) * secondsPerFrame
  const series = config.series[0]
  const tooltipId = `cdc-open-viz-tooltip-${config.runtime?.uniqueId || 'bar-race'}-race`
  const frameSignature = JSON.stringify({
    frameKey: config.xAxis?.dataKey,
    series: config.series.map(item => [item.dataKey, item.dynamicCategory]),
    rows: transformedData.map(row => [
      row?.[config.xAxis?.dataKey],
      ...config.series.flatMap(item => [row?.[item.dynamicCategory], row?.[item.dataKey]])
    ])
  })

  useEffect(() => {
    setFrameIndex(0)
    setIsPlaying(false)
    setHasStarted(false)
    setRaceTiming?.(null)
  }, [frameSignature])

  useEffect(() => {
    if (!isPlaying) return
    if (secondsPerFrame === 0) {
      setFrameIndex(Math.max(0, race.frames.length - 1))
      setIsPlaying(false)
      return
    }
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
    }, secondsPerFrame * 1000)
    return () => window.clearInterval(timer)
  }, [isPlaying, race.frames.length, secondsPerFrame])

  const frame = race.frames[Math.min(frameIndex, Math.max(0, race.frames.length - 1))]
  const getCategoryColor = (seriesKey: string) => {
    const runtimeCategory = config.runtime?.seriesKeys?.find(value => String(value).trim() === seriesKey) ?? seriesKey
    return colorScale?.(runtimeCategory) || '#005ea8'
  }
  const formatValue = (item: (typeof frame.items)[number]) => {
    const itemSeries = config.series.find(candidate => candidate.dataKey === item.dataKey) ?? series
    const columnConfig = findColumnConfigByName(config.columns, item.dataKey)?.columnConfig
    const columnFormatting = getSeriesColumnFormattingParams(columnConfig)
    return (
      formatNumber?.(
        item.value,
        itemSeries.axis || 'left',
        false,
        columnFormatting?.addColPrefix,
        columnFormatting?.addColSuffix,
        columnFormatting?.addColRoundTo
      ) ?? String(item.value)
    )
  }
  const getTooltipHtml = (item: (typeof frame.items)[number]) =>
    buildSeriesTooltipListHtml({
      config,
      colorScale,
      heading: frame.key,
      seriesKey: item.seriesKey,
      seriesText: `${item.category}: ${formatValue(item)}`
    })
  const barAreaWidth = Math.max(0, parentWidth * 0.72 - 120)
  const isAtEnd = frameIndex === race.frames.length - 1
  const frameAxisLabel = config.xAxis?.label || config.xAxis?.dataKey || 'Date/Category'

  useEffect(() => {
    if (!hasStarted || !frame?.key) return
    setRaceTiming?.({
      elapsedSeconds: frameIndex * secondsPerFrame,
      frameKey: frame.key,
      isPlaying,
      totalSeconds
    })
  }, [frame?.key, frameIndex, hasStarted, isPlaying, secondsPerFrame, totalSeconds])

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
    setHasStarted(true)
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
        <RacePlaybackButton
          isAtEnd={isAtEnd}
          isPlaying={isPlaying}
          className='bar-chart-race__playback'
          onClick={handlePlayback}
        />
      </div>
      <div className='bar-chart-race__plot' style={{ height: `${frame.items.length * ROW_HEIGHT}px` }}>
        {transitions((style, item) => (
          <animated.div
            className='bar-chart-race__row'
            data-category={item.category}
            data-tooltip-id={tooltipId}
            data-tooltip-html={getTooltipHtml(item)}
            tabIndex={0}
            style={{ opacity: style.opacity, top: style.top }}
          >
            <span className='bar-chart-race__category'>{item.category}</span>
            <div className='bar-chart-race__bar-area'>
              <animated.div
                className='bar-chart-race__bar'
                style={{ width: style.width, backgroundColor: getCategoryColor(item.seriesKey) }}
              />
              <span className='bar-chart-race__value'>{formatValue(item)}</span>
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
