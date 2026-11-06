import { fireEvent, render, screen } from '@testing-library/react'
import { Accordion } from 'react-accessible-accordion'
import { describe, expect, it } from 'vitest'

import PanelSection from './PanelSection'

describe('PanelSection', () => {
  it('preserves the accessible accordion shell, forwards node attributes, and toggles content', () => {
    render(
      <Accordion allowZeroExpanded>
        <PanelSection
          title='Filters'
          itemProps={{ className: 'item-class', 'data-testid': 'item' }}
          headingProps={{ className: 'heading-class', 'aria-level': 4 }}
          buttonProps={{ className: 'button-class', 'data-testid': 'button' }}
          panelProps={{ className: 'panel-class', 'data-testid': 'panel' }}
        >
          Filter controls
        </PanelSection>
      </Accordion>
    )

    const item = screen.getByTestId('item')
    const button = screen.getByTestId('button')
    const panel = screen.getByTestId('panel')

    expect(item).toHaveClass('item-class')
    expect(button.parentElement).toHaveClass('heading-class')
    expect(button.parentElement).toHaveAttribute('aria-level', '4')
    expect(button).toHaveClass('button-class')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(panel).toHaveClass('panel-class')
    expect(panel).toHaveTextContent('Filter controls')

    fireEvent.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})
