import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { TimePlaybackTransport } from './TimePlaybackControls'

const renderTransport = (showPreviousNextButtons?: boolean) =>
  render(
    <TimePlaybackTransport
      currentFrame={2023}
      isAtEnd={false}
      isAtLast={true}
      isAtStart={false}
      isPlaying={false}
      showPreviousNextButtons={showPreviousNextButtons}
      onNext={vi.fn()}
      onPlayback={vi.fn()}
      onPrevious={vi.fn()}
    />
  )

describe('TimePlaybackTransport', () => {
  it('shows Previous and Next by default', () => {
    renderTransport()

    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('can hide Previous and Next without hiding playback context', () => {
    renderTransport(false)

    expect(screen.queryByRole('button', { name: 'Previous' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument()
    expect(screen.getByTestId('map-time-playback-period')).toHaveTextContent('2023')
  })
})
