import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import PanelHeader from './PanelHeader'

describe('PanelHeader', () => {
  it('preserves the divider heading markup and forwards span attributes', () => {
    render(
      <PanelHeader className='custom-heading' data-testid='heading' style={{ marginTop: 0 }}>
        Number Formatting
      </PanelHeader>
    )

    const heading = screen.getByTestId('heading')

    expect(heading.tagName).toBe('SPAN')
    expect(heading).toHaveClass('divider-heading', 'custom-heading')
    expect(heading).toHaveStyle({ marginTop: 0 })
    expect(heading).toHaveTextContent('Number Formatting')
  })
})
