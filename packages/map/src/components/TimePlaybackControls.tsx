import PlaybackButton from '@cdc/core/components/PlaybackButton'

type Props = {
  currentFrame: string | number
  frameIndex: number
  frames: Array<string | number>
  isAtEnd: boolean
  isPlaying: boolean
  onPlayback: () => void
  onScrub: (frameIndex: number) => void
}

const TimePlaybackControls = ({ currentFrame, frameIndex, frames, isAtEnd, isPlaying, onPlayback, onScrub }: Props) => {
  return (
    <section className='map-time-playback' aria-label='Map time playback'>
      <strong className='map-time-playback__period' aria-live='polite' data-testid='map-time-playback-period'>
        {String(currentFrame)}
      </strong>
      <div className='map-time-playback__interactive' data-html2canvas-ignore='true'>
        <PlaybackButton isAtEnd={isAtEnd} isPlaying={isPlaying} onClick={onPlayback} />
        <label className='map-time-playback__slider-label'>
          <span className='sr-only'>Time period</span>
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
        </label>
      </div>
    </section>
  )
}

export default TimePlaybackControls
