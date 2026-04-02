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
    expect(container.querySelector('svg')).toHaveAttribute('viewBox', '0 0 384 512')
    expect(container.querySelector('path')).toHaveAttribute(
      'd',
      'M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z'
    )
  })

  it('renders the down arrow asset without direction classes', () => {
    const { container } = render(<TrendArrow arrowType={TREND_ARROW_DOWN} />)

    const icon = screen.getByRole('img', { name: 'Trend down' })
    expect(icon).toHaveClass('cove-trend-arrow')
    expect(icon).not.toHaveClass('is-down')
    expect(icon).not.toHaveClass('is-no-change')
    expect(container.querySelector('svg')).toHaveAttribute('viewBox', '0 0 384 512')
    expect(container.querySelector('path')).toHaveAttribute(
      'd',
      'M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.8L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z'
    )
  })

  it('hides the icon from assistive tech when visible trend text is present', () => {
    const { container } = render(
      <TrendArrow arrowType={TREND_ARROW_NO_CHANGE} wrapperClassName='custom-wrap' label='Steady' />
    )

    expect(screen.getByText('Steady')).toHaveClass('cove-trend-arrow__label')
    const wrapper = container.querySelector('.cove-trend-arrow__wrap.custom-wrap')
    expect(wrapper).toBeInTheDocument()

    const icon = container.querySelector('svg')
    expect(screen.queryByRole('img', { name: 'Trend no change: Steady' })).not.toBeInTheDocument()
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(icon).toHaveAttribute('focusable', 'false')
    expect(icon).toHaveClass('cove-trend-arrow')
    expect(icon).not.toHaveClass('is-down')
    expect(icon).not.toHaveClass('is-no-change')
    expect(icon).toHaveAttribute('viewBox', '0 0 512 384')
    expect(container.querySelector('path')).toHaveAttribute(
      'd',
      'M470.6 214.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L370.8 160H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.8L265.4 329.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z'
    )
  })
})
