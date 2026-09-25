import { forwardRef, useContext, useEffect, useRef, useState } from 'react'
import Button from '@cdc/core/components/elements/Button'
import ConfigContext from '../../ConfigContext'
import LinearChart from '../LinearChart'
import { clampLineRaceSecondsPerFrame, type LineRaceEligibility } from './helpers'
import './line-chart-race.scss'

type Props = { parentHeight: number; parentWidth: number; race: LineRaceEligibility }
type PlaybackAction = 'play' | 'pause' | 'replay'

const PlaybackIcon = ({ action }: { action: PlaybackAction }) => {
  if (action === 'pause') {
    return (
      <svg aria-hidden='true' data-icon='pause' focusable='false' height='14' viewBox='0 0 16 16' width='14'>
        <path d='M3.5 2.5h3v11h-3zm6 0h3v11h-3z' fill='currentColor' />
      </svg>
    )
  }

  if (action === 'replay') {
    return (
      <svg aria-hidden='true' data-icon='replay' focusable='false' height='14' viewBox='0 0 16 16' width='14'>
        <path d='M3 2.5v4h4' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M3.5 6.2A5 5 0 1 1 3 10.5' fill='none' stroke='currentColor' strokeLinecap='round' strokeWidth='1.5' />
      </svg>
    )
  }

  return (
    <svg aria-hidden='true' data-icon='play' focusable='false' height='14' viewBox='0 0 16 16' width='14'>
      <path d='M4 2.5v11L13 8z' fill='currentColor' />
    </svg>
  )
}

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
  )
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPrefersReducedMotion(mediaQuery.matches)
    update()
    mediaQuery.addEventListener?.('change', update)
    return () => mediaQuery.removeEventListener?.('change', update)
  }, [])
  return prefersReducedMotion
}

const LineChartRace = forwardRef<SVGAElement, Props>(({ parentHeight, parentWidth, race }, ref) => {
  const context = useContext(ConfigContext)
  const chartParentRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  const secondsPerFrame = clampLineRaceSecondsPerFrame(context.config.lineRace?.secondsPerFrame)
  const totalSeconds = (race.frames.length - 1) * secondsPerFrame
  const signature = JSON.stringify(
    race.frames.map(frame => [frame.key, frame.currentRows.map(row => Object.values(row))])
  )

  useEffect(() => {
    setProgress(0)
    setIsPlaying(false)
    setHasStarted(false)
    context.setLineRaceTiming?.(null)
  }, [signature])

  useEffect(() => {
    if (!isPlaying) return
    if (prefersReducedMotion || totalSeconds === 0) {
      setProgress(1)
      setIsPlaying(false)
      return
    }
    const totalDuration = totalSeconds * 1000
    const startedAt = performance.now()
    const startingProgress = progress
    let animationFrame = 0
    const animate = (now: number) => {
      const nextProgress = Math.min(1, startingProgress + (now - startedAt) / totalDuration)
      setProgress(nextProgress)
      if (nextProgress < 1) {
        animationFrame = window.requestAnimationFrame(animate)
      } else {
        setIsPlaying(false)
      }
    }
    animationFrame = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(animationFrame)
  }, [isPlaying, prefersReducedMotion, race.frames.length, totalSeconds])

  const frameIndex = Math.min(race.frames.length - 1, Math.floor(progress * (race.frames.length - 1) + 1e-6))
  const frame = race.frames[frameIndex]
  const isAtEnd = progress >= 1
  const visibleRows = race.frames.slice(0, frameIndex + 1).flatMap(raceFrame => raceFrame.currentRows)
  const frameKey = frame?.key || ''
  const playbackAction: PlaybackAction = isAtEnd ? 'replay' : isPlaying ? 'pause' : 'play'

  useEffect(() => {
    if (!hasStarted || !frameKey) return
    context.setLineRaceTiming?.({
      elapsedSeconds: progress * totalSeconds,
      frameKey,
      isPlaying,
      totalSeconds
    })
  }, [frameKey, hasStarted, isPlaying, totalSeconds])

  if (!race.eligible || !frame) return null

  const raceContext = {
    ...context,
    convertLineToBarGraph: false,
    config: {
      ...context.config,
      visualizationSubType: 'regular',
      allowLineToBarGraph: false,
      animate: false
    },
    lineRaceProgress: progress,
    parentRef: chartParentRef,
    tableData: visibleRows,
    yAxisDomainData: context.transformedData
  }

  const handlePlayback = () => {
    setHasStarted(true)
    if (isAtEnd) {
      setProgress(0)
      setIsPlaying(true)
      return
    }
    setIsPlaying(current => !current)
  }

  return (
    <section className='line-chart-race' aria-label={`Line chart race through ${frame.key}`}>
      <div className='line-chart-race__header'>
        <strong className='line-chart-race__frame' aria-live='polite'>
          {frame.key}
        </strong>
        <Button type='button' variant='secondary' size='sm' onClick={handlePlayback} data-html2canvas-ignore='true'>
          <span style={{ alignItems: 'center', display: 'inline-flex', gap: '0.35rem' }}>
            <PlaybackIcon action={playbackAction} />
            {playbackAction === 'replay' ? 'Replay' : playbackAction === 'pause' ? 'Pause' : 'Play'}
          </span>
        </Button>
      </div>
      <ConfigContext.Provider value={raceContext}>
        <div ref={chartParentRef}>
          <LinearChart ref={ref} parentWidth={parentWidth} parentHeight={parentHeight} />
        </div>
      </ConfigContext.Provider>
    </section>
  )
})

LineChartRace.displayName = 'LineChartRace'
export default LineChartRace
