import type { MouseEventHandler } from 'react'
import Button from '../elements/Button'

export type PlaybackAction = 'play' | 'pause' | 'replay'

export type PlaybackButtonProps = {
  className?: string
  disabled?: boolean
  isAtEnd: boolean
  isPlaying: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
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

const PlaybackButton = ({ className, disabled, isAtEnd, isPlaying, onClick }: PlaybackButtonProps) => {
  const action: PlaybackAction = isAtEnd ? 'replay' : isPlaying ? 'pause' : 'play'
  const label = action === 'replay' ? 'Replay' : action === 'pause' ? 'Pause' : 'Play'

  return (
    <Button
      type='button'
      variant='secondary'
      size='sm'
      className={className}
      disabled={disabled}
      onClick={onClick}
      data-html2canvas-ignore='true'
    >
      <span style={{ alignItems: 'center', display: 'inline-flex', gap: '0.35rem' }}>
        <PlaybackIcon action={action} />
        {label}
      </span>
    </Button>
  )
}

export default PlaybackButton
