import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import VisualizationContent from './VisualizationContent'

describe('VisualizationContent', () => {
  it('renders the standard inner, body, and body-wrap layers by default', () => {
    const { container } = render(
      <VisualizationContent innerClassName='inner-extra' bodyClassName='body-extra' bodyWrapClassName='wrap-extra'>
        <div>Inner content</div>
      </VisualizationContent>
    )

    const inner = container.querySelector('.cove-visualization__inner')
    const body = container.querySelector('.cove-visualization__body')
    const bodyWrap = container.querySelector('.cove-visualization__body-wrap')

    expect(inner).toHaveClass('inner-extra')
    expect(body).toHaveClass('body-extra')
    expect(bodyWrap).toHaveClass('wrap-extra')
    expect(inner?.firstElementChild).toBe(body)
    expect(body?.firstElementChild).toBe(bodyWrap)
    expect(screen.getByText('Inner content')).toBeInTheDocument()
  })

  it('renders header and footer outside the body wrapper', () => {
    const { container } = render(
      <VisualizationContent
        header={<div data-testid='header'>Header</div>}
        footer={<div data-testid='footer'>Footer</div>}
      >
        <div>Wrapped content</div>
      </VisualizationContent>
    )

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(container.querySelector('.cove-visualization__body-wrap')?.textContent).toContain('Wrapped content')
  })

  it('passes through non-class inner div props, including refs', () => {
    const innerRef = React.createRef<HTMLDivElement>()

    const { container } = render(
      <VisualizationContent innerClassName='inner-extra' innerProps={{ 'aria-label': 'Visualization content', ref: innerRef }}>
        <div>Inner content</div>
      </VisualizationContent>
    )

    const inner = container.querySelector('.cove-visualization__inner')

    expect(inner).toHaveAttribute('aria-label', 'Visualization content')
    expect(inner).toHaveClass('inner-extra')
    expect(innerRef.current).toBe(inner)
  })
})
