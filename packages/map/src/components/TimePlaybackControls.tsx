import PlaybackButton from '@cdc/core/components/PlaybackButton'
import Button from '@cdc/core/components/elements/Button'

type TransportProps = {
  currentFrame: string | number
  isAtEnd: boolean
  isAtLast: boolean
  isAtStart: boolean
  isPlaying: boolean
  onNext: () => void
  onPlayback: () => void
  onPrevious: () => void
}

type SliderProps = {
  currentFrame: string | number
  frameIndex: number
  frames: Array<string | number>
  onScrub: (frameIndex: number) => void
}

export const TimePlaybackTransport = ({
  currentFrame,
  isAtEnd,
  isAtLast,
  isAtStart,
  isPlaying,
  onNext,
  onPlayback,
  onPrevious
}: TransportProps) => {
  return (
    <section className='map-time-playback__transport' aria-label='Map time playback'>
      <div className='map-time-playback__transport-current'>
        <span data-html2canvas-ignore='true'>
          <PlaybackButton isAtEnd={isAtEnd} isPlaying={isPlaying} onClick={onPlayback} />
        </span>
        <strong className='map-time-playback__period' aria-live='polite' data-testid='map-time-playback-period'>
          {String(currentFrame)}
        </strong>
      </div>
      <div className='map-time-playback__transport-step' data-html2canvas-ignore='true'>
        <Button type='button' variant='secondary' size='sm' disabled={isAtStart} onClick={onPrevious}>
          Previous
        </Button>
        <Button type='button' variant='secondary' size='sm' disabled={isAtLast} onClick={onNext}>
          Next
        </Button>
      </div>
    </section>
  )
}

export const TimePlaybackSlider = ({ currentFrame, frameIndex, frames, onScrub }: SliderProps) => {
  return (
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
}
