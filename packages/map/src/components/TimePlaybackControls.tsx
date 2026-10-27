import parse from 'html-react-parser'

import PlaybackButton from '@cdc/core/components/PlaybackButton'
import Button from '@cdc/core/components/elements/Button'

type TimePlaybackControlsProps = {
  currentFrame: string | number
  frameIndex: number
  frames: Array<string | number>
  isAtEnd: boolean
  isAtLast: boolean
  isAtStart: boolean
  isPlaying: boolean
  isMobileLayout?: boolean
  note?: string
  showPreviousNextButtons?: boolean
  showSlider?: boolean
  onNext: () => void
  onPlayback: () => void
  onPrevious: () => void
  onScrub: (frameIndex: number) => void
}

const TimePlaybackSlider = ({
  currentFrame,
  frameIndex,
  frames,
  onScrub
}: Pick<TimePlaybackControlsProps, 'currentFrame' | 'frameIndex' | 'frames' | 'onScrub'>) => (
  <section className='map-time-playback__slider' aria-label='Map time slider' data-html2canvas-ignore='true'>
    <div className='map-time-playback__slider-track'>
      <input
        aria-label='Time period'
        aria-valuetext={String(currentFrame)}
        type='range'
        min={0}
        max={Math.max(0, frames.length - 1)}
        step={1}
        value={frameIndex}
        onChange={event => onScrub(Number(event.target.value))}
      />
      <span className='map-time-playback__ticks' aria-hidden='true'>
        {frames.map((frame, index) => (
          <span
            className='map-time-playback__tick'
            data-active={index === frameIndex ? 'true' : undefined}
            key={`${String(frame)}-${index}`}
          >
            <span className='map-time-playback__tick-mark' />
            <span className='map-time-playback__tick-label'>{String(frame)}</span>
          </span>
        ))}
      </span>
    </div>
  </section>
)

const TimePlaybackControls = ({
  currentFrame,
  frameIndex,
  frames,
  isAtEnd,
  isAtLast,
  isAtStart,
  isPlaying,
  isMobileLayout = false,
  note,
  showPreviousNextButtons = true,
  showSlider = true,
  onNext,
  onPlayback,
  onPrevious,
  onScrub
}: TimePlaybackControlsProps) => {
  const playback = (
    <span key='playback' className='map-time-playback__playback' data-html2canvas-ignore='true'>
      <PlaybackButton isAtEnd={isAtEnd} isPlaying={isPlaying} onClick={onPlayback} />
    </span>
  )
  const period = (
    <strong
      key='period'
      className='map-time-playback__period'
      aria-live='polite'
      data-testid='map-time-playback-period'
    >
      {String(currentFrame)}
    </strong>
  )
  const slider = showSlider ? (
    <TimePlaybackSlider
      key='slider'
      currentFrame={currentFrame}
      frameIndex={frameIndex}
      frames={frames}
      onScrub={onScrub}
    />
  ) : null
  const stepControls = showPreviousNextButtons ? (
    <div key='steps' className='map-time-playback__transport-step' data-html2canvas-ignore='true'>
      <Button type='button' variant='secondary' size='sm' disabled={isAtStart} onClick={onPrevious}>
        Previous
      </Button>
      <Button type='button' variant='secondary' size='sm' disabled={isAtLast} onClick={onNext}>
        Next
      </Button>
    </div>
  ) : null

  return (
    <section className='map-time-playback' aria-label='Map time playback'>
      <div
        className={`map-time-playback__controls map-time-playback__transport${
          isMobileLayout ? ' map-time-playback__controls--mobile' : ''
        }`}
      >
        {playback}
        {isMobileLayout && stepControls}
        {period}
        {slider}
        {!isMobileLayout && stepControls}
      </div>
      {note && (
        <div className='map-time-playback__note cove-prose' data-html2canvas-ignore='true'>
          {parse(note)}
        </div>
      )}
    </section>
  )
}

export default TimePlaybackControls
