import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import TrendArrow from './TrendArrow'
import { TREND_ARROW_DOWN, TREND_ARROW_NO_CHANGE, TREND_ARROW_UP } from '../../helpers/trendIndicator'

describe('TrendArrow', () => {
  it('renders the up arrow asset with the registry aria label when no visible text is present', () => {
    const { container } = render(<TrendArrow arrowType={TREND_ARROW_UP} />)

    const icon = screen.getByRole('img', { name: 'Trend up' })
    expect(icon).toHaveClass('cove-trend-arrow')
    expect(icon).toHaveAttribute('focusable', 'false')
    expect(icon).not.toHaveClass('is-down')
    expect(icon).not.toHaveClass('is-no-change')
    expect(icon).toHaveAttribute('viewBox', '0 0 384 512')
    expect(container.querySelector('path')).toBeInTheDocument()
  })

  it('renders the down arrow asset without brittle path assertions', () => {
    const { container } = render(<TrendArrow arrowType={TREND_ARROW_DOWN} />)

    const icon = screen.getByRole('img', { name: 'Trend down' })
    expect(icon).toHaveClass('cove-trend-arrow')
    expect(icon).toHaveAttribute('focusable', 'false')
    expect(icon).not.toHaveClass('is-down')
    expect(icon).not.toHaveClass('is-no-change')
    expect(icon).toHaveAttribute('viewBox', '0 0 384 512')
    expect(container.querySelector('path')).toBeInTheDocument()
  })

  it('renders the no-change asset with visible label text and a decorative icon', () => {
    const { container } = render(
      <TrendArrow arrowType={TREND_ARROW_NO_CHANGE} wrapperClassName='custom-wrap' label='Steady' />
    )

    expect(screen.getByText('Steady')).toHaveClass('cove-trend-arrow__label')
    const wrapper = container.querySelector('.cove-trend-arrow__wrap.custom-wrap')
    expect(wrapper).toBeInTheDocument()

    const icon = container.querySelector('svg')
    expect(screen.queryByRole('img', { name: 'Trend flat' })).not.toBeInTheDocument()
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(icon).toHaveAttribute('focusable', 'false')
    expect(icon).toHaveClass('cove-trend-arrow')
    expect(icon).not.toHaveClass('is-down')
    expect(icon).not.toHaveClass('is-no-change')
    expect(icon).toHaveAttribute('viewBox', '0 0 512 384')
    expect(container.querySelector('path')).toBeInTheDocument()
  })
})
