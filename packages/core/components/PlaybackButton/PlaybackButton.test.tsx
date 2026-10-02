import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import PlaybackButton from './PlaybackButton'

describe('PlaybackButton', () => {
  it.each([
    { isAtEnd: false, isPlaying: false, label: 'Play', icon: 'play' },
    { isAtEnd: false, isPlaying: true, label: 'Pause', icon: 'pause' },
    { isAtEnd: true, isPlaying: false, label: 'Replay', icon: 'replay' },
    { isAtEnd: true, isPlaying: true, label: 'Replay', icon: 'replay' }
  ])('renders the $label state', ({ icon, isAtEnd, isPlaying, label }) => {
    render(<PlaybackButton isAtEnd={isAtEnd} isPlaying={isPlaying} onClick={() => undefined} />)

    const button = screen.getByRole('button', { name: label })
    expect(button.querySelector(`[data-icon="${icon}"]`)).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveAttribute('data-html2canvas-ignore', 'true')
  })

  it('uses the shared secondary button treatment and invokes its handler', () => {
    const onClick = vi.fn()
    render(<PlaybackButton className='consumer-layout' isAtEnd={false} isPlaying={false} onClick={onClick} />)

    const button = screen.getByRole('button', { name: 'Play' })
    expect(button).toHaveClass('cove-button', 'cove-button--secondary', 'cove-button--sm', 'consumer-layout')

    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('supports a disabled transport state', () => {
    const onClick = vi.fn()
    render(<PlaybackButton disabled isAtEnd={false} isPlaying={false} onClick={onClick} />)

    const button = screen.getByRole('button', { name: 'Play' })
    expect(button).toBeDisabled()
    fireEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })
})
