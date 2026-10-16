import Button from '@cdc/core/components/elements/Button'

type PlaybackAction = 'play' | 'pause' | 'replay'

type Props = {
  className?: string
  isAtEnd: boolean
  isPlaying: boolean
  onClick: () => void
}

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

const RacePlaybackButton = ({ className, isAtEnd, isPlaying, onClick }: Props) => {
  const action: PlaybackAction = isAtEnd ? 'replay' : isPlaying ? 'pause' : 'play'

  return (
    <Button
      type='button'
      variant='secondary'
      size='sm'
      className={className}
      onClick={onClick}
      data-html2canvas-ignore='true'
    >
      <span style={{ alignItems: 'center', display: 'inline-flex', gap: '0.35rem' }}>
        <PlaybackIcon action={action} />
        {action === 'replay' ? 'Replay' : action === 'pause' ? 'Pause' : 'Play'}
      </span>
    </Button>
  )
}

export default RacePlaybackButton
