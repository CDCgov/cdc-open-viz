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
    const content = container.querySelector('.cove-visualization__content-section')

    expect(inner).toHaveClass('inner-extra')
    expect(body).toHaveClass('body-extra')
    expect(bodyWrap).toHaveClass('wrap-extra')
    expect(inner?.firstElementChild).toBe(body)
    expect(body?.firstElementChild).toBe(bodyWrap)
    expect(bodyWrap?.firstElementChild).toBe(content)
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

  it('renders message content inside the body-wrap before the wrapped content', () => {
    const { container } = render(
      <VisualizationContent message={<div data-testid='message'>Message</div>}>
        <div>Wrapped content</div>
      </VisualizationContent>
    )

    const body = container.querySelector('.cove-visualization__body')
    const messageLayer = container.querySelector('.cove-visualization__message')
    const message = container.querySelector('.cove-visualization__message-section')
    const bodyWrap = container.querySelector('.cove-visualization__body-wrap')
    const content = container.querySelector('.cove-visualization__content-section')

    expect(screen.getByTestId('message')).toBeInTheDocument()
    expect(messageLayer).toBe(message)
    expect(body?.firstElementChild).toBe(bodyWrap)
    expect(bodyWrap?.firstElementChild).toBe(message)
    expect(bodyWrap?.children[1]).toBe(content)
  })

  it('adds the shared no-subtext body state only when outer subtext is absent', () => {
    const { container: withoutSubtext } = render(
      <VisualizationContent header={<div>Header</div>} message={<div>Message</div>}>
        <div>Wrapped content</div>
      </VisualizationContent>
    )
    const { container: withSubtext } = render(
      <VisualizationContent header={<div>Header</div>} subtext={<div>Subtext</div>}>
        <div>Wrapped content</div>
      </VisualizationContent>
    )

    expect(withoutSubtext.querySelector('.cove-visualization__body')).toHaveClass(
      'cove-visualization__body--no-subtext'
    )
    expect(withSubtext.querySelector('.cove-visualization__body')).not.toHaveClass(
      'cove-visualization__body--no-subtext'
    )
  })

  it('applies custom classes to the message wrapper', () => {
    const { container } = render(
      <VisualizationContent message={<div data-testid='message'>Message</div>} messageClassName='introText mb-4'>
        <div>Wrapped content</div>
      </VisualizationContent>
    )

    const message = container.querySelector('.cove-visualization__message')

    expect(message).toHaveClass('introText')
    expect(message).toHaveClass('mb-4')
  })

  it('applies the introText wrapper class when requested', () => {
    const { container } = render(
      <VisualizationContent message={<div data-testid='message'>Message</div>} messageIsIntroText>
        <div>Wrapped content</div>
      </VisualizationContent>
    )

    const message = container.querySelector('.cove-visualization__message')

    expect(message).toHaveClass('introText')
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
    expect(subtext).not.toHaveClass('mt-4')
    expect(subtext).not.toHaveClass('mb-4')
    expect(subtext).not.toHaveAttribute('style')
  })

  it('renders body subtext content inside the body-wrap after the wrapped content', () => {
    const { container } = render(
      <VisualizationContent bodySubtext={<div data-testid='body-subtext'>Body Subtext</div>}>
        <div>Wrapped content</div>
      </VisualizationContent>
    )

    const bodyWrap = container.querySelector('.cove-visualization__body-wrap')
    const content = container.querySelector('.cove-visualization__content-section')
    const bodySubtext = container.querySelector('.cove-visualization__body-subtext-section')

    expect(screen.getByTestId('body-subtext')).toBeInTheDocument()
    expect(bodyWrap?.lastElementChild).toBe(bodySubtext)
    expect(bodyWrap?.firstElementChild).toBe(content)
    expect(bodySubtext).not.toHaveClass('mt-4')
    expect(bodySubtext).not.toHaveClass('mb-4')
    expect(bodySubtext).not.toHaveAttribute('style')
  })

  it('renders body footer content inside the body-wrap after body subtext', () => {
    const { container } = render(
      <VisualizationContent
        bodySubtext={<div data-testid='body-subtext'>Body Subtext</div>}
        bodyFooter={<div data-testid='body-footer'>Body Footer</div>}
      >
        <div>Wrapped content</div>
      </VisualizationContent>
    )

    const bodyWrap = container.querySelector('.cove-visualization__body-wrap')
    const content = container.querySelector('.cove-visualization__content-section')
    const bodySubtext = container.querySelector('.cove-visualization__body-subtext-section')
    const bodyFooter = container.querySelector('.cove-visualization__body-footer-section')

    expect(screen.getByTestId('body-footer')).toBeInTheDocument()
    expect(bodyWrap?.children[0]).toBe(content)
    expect(bodyWrap?.children[1]).toBe(bodySubtext)
    expect(bodyWrap?.lastElementChild).toBe(bodyFooter)
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
