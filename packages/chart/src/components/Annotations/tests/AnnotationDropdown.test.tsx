import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ConfigContext from '../../../ConfigContext'
import AnnotationDropdown from '../components/AnnotationDropdown'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: ({ display }: { display: string }) => <span data-icon={display} />
}))

describe('AnnotationDropdown', () => {
  it('uses the shared toggle treatment and joins the expanded panel to its header', () => {
    const annotation = { text: 'Important annotation' }
    const context = {
      config: {
        annotations: [annotation],
        general: {
          annotationDropdownText: '',
          mobileAnnotationDisplay: 'symbol',
          showAnnotationDropdown: true
        },
        table: { height: 120, limitHeight: true }
      },
      currentViewport: 'lg',
      visibleAnnotations: [annotation]
    }

    render(
      <ConfigContext.Provider value={context as any}>
        <AnnotationDropdown />
      </ConfigContext.Provider>
    )

    const toggle = screen.getByRole('button', { name: 'Annotations' })
    const section = toggle.closest('section')

    expect(toggle).toHaveClass('data-table-heading', 'data-table-heading--toggle', 'annotation__dropdown-list')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(section).not.toHaveClass('my-4')
    expect(section).not.toHaveClass('mt-4')
    expect(section).not.toHaveClass('mb-4')

    fireEvent.click(toggle)

    const panel = section?.querySelector('.annotation-dropdown__panel') as HTMLElement
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle.nextElementSibling).toBe(panel)
    expect(panel).toHaveStyle({ maxHeight: '120px', overflowY: 'auto' })
  })
})
