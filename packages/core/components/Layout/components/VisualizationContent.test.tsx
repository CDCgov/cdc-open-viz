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

  it('renders message content inside the body but outside the body-wrap', () => {
    const { container } = render(
      <VisualizationContent message={<div data-testid='message'>Message</div>}>
        <div>Wrapped content</div>
      </VisualizationContent>
    )

    const body = container.querySelector('.cove-visualization__body')
    const message = container.querySelector('.cove-visualization__message-section')
    const bodyWrap = container.querySelector('.cove-visualization__body-wrap')

    expect(screen.getByTestId('message')).toBeInTheDocument()
    expect(body?.firstElementChild).toBe(message)
    expect(body?.lastElementChild).toBe(bodyWrap)
  })

  it('renders subtext content inside the body after the body-wrap', () => {
    const { container } = render(
      <VisualizationContent subtext={<div data-testid='subtext'>Subtext</div>}>
        <div>Wrapped content</div>
      </VisualizationContent>
    )

    const body = container.querySelector('.cove-visualization__body')
    const bodyWrap = container.querySelector('.cove-visualization__body-wrap')
    const subtext = container.querySelector('.cove-visualization__subtext-section')

    expect(screen.getByTestId('subtext')).toBeInTheDocument()
    expect(body?.firstElementChild).toBe(bodyWrap)
    expect(body?.lastElementChild).toBe(subtext)
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
