import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import TimePlaybackControls from './TimePlaybackControls'

const renderControls = (
  showPreviousNextButtons?: boolean,
  showSlider?: boolean,
  note = 'Playback guidance',
  isMobileLayout = false,
  frameIndex = 2
) =>
  render(
    <TimePlaybackControls
      currentFrame={[2021, 2022, 2023][frameIndex]}
      frameIndex={frameIndex}
      frames={[2021, 2022, 2023]}
      isAtEnd={false}
      isAtLast={frameIndex === 2}
      isAtStart={frameIndex === 0}
      isPlaying={false}
      isMobileLayout={isMobileLayout}
      note={note}
      showPreviousNextButtons={showPreviousNextButtons}
      showSlider={showSlider}
      onNext={vi.fn()}
      onPlayback={vi.fn()}
      onPrevious={vi.fn()}
      onScrub={vi.fn()}
    />
  )

describe('TimePlaybackControls', () => {
  it('renders the padded slider between the current frame and step controls with the note below', () => {
    const { container } = renderControls()

    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
    expect(screen.getByText('Playback guidance')).toBeInTheDocument()

    const row = container.querySelector('.map-time-playback__controls') as HTMLElement
    expect(Array.from(row.children).map(element => element.className)).toEqual([
      'map-time-playback__playback',
      'map-time-playback__period',
      'map-time-playback__slider',
      'map-time-playback__transport-step'
    ])
    expect(row.nextElementSibling).toHaveClass('map-time-playback__note')
    expect(screen.getByRole('region', { name: 'Map time slider' })).toHaveAttribute('data-html2canvas-ignore', 'true')
    expect(screen.getByText('Playback guidance')).toHaveAttribute('data-html2canvas-ignore', 'true')
  })

  it('can hide Previous and Next without hiding playback context', () => {
    renderControls(false)

    expect(screen.queryByRole('button', { name: 'Previous' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument()
    expect(screen.getByTestId('map-time-playback-period')).toHaveTextContent('2023')
  })

  it('can hide the slider and note independently', () => {
    const { container } = renderControls(true, false, '')

    expect(screen.queryByRole('slider', { name: 'Time period' })).not.toBeInTheDocument()
    expect(container.querySelector('.map-time-playback__note')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument()
    expect(screen.getByTestId('map-time-playback-period')).toHaveTextContent('2023')
  })

  it('matches mobile visual and keyboard order', async () => {
    const { container } = renderControls(true, true, 'Playback guidance', true, 1)
    const row = container.querySelector('.map-time-playback__controls') as HTMLElement

    expect(Array.from(row.children).map(element => element.className)).toEqual([
      'map-time-playback__playback',
      'map-time-playback__transport-step',
      'map-time-playback__period',
      'map-time-playback__slider'
    ])

    const user = userEvent.setup()
    await user.tab()
    expect(screen.getByRole('button', { name: 'Play' })).toHaveFocus()
    await user.tab()
    expect(screen.getByRole('button', { name: 'Previous' })).toHaveFocus()
    await user.tab()
    expect(screen.getByRole('button', { name: 'Next' })).toHaveFocus()
    await user.tab()
    expect(screen.getByRole('slider', { name: 'Time period' })).toHaveFocus()
  })
})
