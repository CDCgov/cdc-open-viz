import { forwardRef, useContext, useEffect, useRef, useState } from 'react'
import ConfigContext from '../../ConfigContext'
import LinearChart from '../LinearChart'
import RacePlaybackButton from '../RacePlaybackButton'
import { clampRaceSecondsPerFrame } from '../raceTiming'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { type LineRaceEligibility } from './helpers'
import './line-chart-race.scss'

type Props = { parentHeight: number; parentWidth: number; race: LineRaceEligibility }

const LineChartRace = forwardRef<SVGAElement, Props>(({ parentHeight, parentWidth, race }, ref) => {
  const context = useContext(ConfigContext)
  const chartParentRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  const secondsPerFrame = clampRaceSecondsPerFrame(context.config.lineRace?.secondsPerFrame)
  const totalSeconds = (race.frames.length - 1) * secondsPerFrame
  const signature = JSON.stringify(
    race.frames.map(frame => [frame.key, frame.currentRows.map(row => Object.values(row))])
  )

  useEffect(() => {
    setProgress(0)
    setIsPlaying(false)
    setHasStarted(false)
    context.setRaceTiming?.(null)
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

  useEffect(() => {
    if (!hasStarted || !frameKey) return
    context.setRaceTiming?.({
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
        <RacePlaybackButton isAtEnd={isAtEnd} isPlaying={isPlaying} onClick={handlePlayback} />
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
