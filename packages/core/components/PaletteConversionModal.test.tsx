import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import PaletteConversionModal, { V21_PALETTE_CONVERSION_MESSAGE } from './PaletteConversionModal'

describe('PaletteConversionModal', () => {
  it('keeps the fixed interface and invokes each action', () => {
    const onConfirm = vi.fn()
    const onCancel = vi.fn()
    render(
      <PaletteConversionModal
        onConfirm={onConfirm}
        onCancel={onCancel}
        onReturnToV1={onCancel}
        message='Custom conversion message'
      />
    )

    expect(screen.getByRole('heading', { name: 'Color Palette Conversion' })).toBeInTheDocument()
    expect(screen.getByText(/uses an outdated color palette/)).toBeInTheDocument()
    expect(screen.getByText('Custom conversion message')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }))
    fireEvent.click(screen.getByRole('button', { name: 'Convert to New Palette' }))

    expect(onCancel).toHaveBeenCalledOnce()
    expect(onConfirm).toHaveBeenCalledOnce()
  })

  it('uses the existing V1 message by default', () => {
    render(<PaletteConversionModal onConfirm={vi.fn()} onCancel={vi.fn()} onReturnToV1={vi.fn()} />)

    expect(screen.getByText(/uses an outdated color palette/)).toBeInTheDocument()
    expect(screen.getByText(/improved accessibility and consistency/)).toBeInTheDocument()
  })

  it('renders the 2.0 to 2.1 message without changing the interface copy', () => {
    render(
      <PaletteConversionModal
        onConfirm={vi.fn()}
        onCancel={vi.fn()}
        onReturnToV1={vi.fn()}
        message={V21_PALETTE_CONVERSION_MESSAGE}
      />
    )

    expect(screen.getByText(/uses an outdated color palette/)).toBeInTheDocument()
    expect(screen.getByText(/updated color distribution that improves contrast/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Convert to New Palette' })).toBeInTheDocument()
  })
})
